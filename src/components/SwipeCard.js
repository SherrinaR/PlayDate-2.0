import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/fbConfig';
import TinderCard from 'react-tinder-card';
import './SwipeCard.css';

function SwipeCard() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getDogs() {
      try {
        const querySnapshot = await getDocs(collection(db, 'dogs'));
        const dogData = [];
        querySnapshot.forEach((doc) => {
          dogData.push(doc.data());
        });
        setDogs(dogData);
      } catch (error) {
        collection.log(error, 'Who let the dogs out?');
      }
    }
    getDogs();
  }, []);
  if (!dogs[0]) return null;

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    // setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name + 'left the screen!');
  };

  return (
    <div className="tindercards cardContent">
      <div className="tinderCards__cardContainer">
        {dogs.map((dog) => (
          <TinderCard
            className="swipe"
            key={dog.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, dog.name)}
            onCardLeftScreen={() => outOfFrame(dog.name)}
          >
            <div
              style={{ backgroundImage: `url(${dog.imageUrl[1]})` }}
              className="card"
            >
              <h1>{dog.name}</h1>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
export default SwipeCard;
