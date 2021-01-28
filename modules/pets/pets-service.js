'use strict';

const { Queue, displayQ } = require('../queue/Queue');
const store = require('../../store');


const catQueue = new Queue();
const dogQueue = new Queue();

store.cats.forEach((cat) => catQueue.enqueue(cat));
store.dogs.forEach((dog) => dogQueue.enqueue(dog));


const CatService = {
  getCats() {
    const displayCats = displayQ(catQueue);
    return displayCats;
  },
  getFirstCat() {
    return catQueue.peek();
  },
  adoptCat() {
    catQueue.dequeue();
    return catQueue;
  },
};

const DogService = {
  getDogs() {
    const displayDogs = displayQ(dogQueue);
    return displayDogs;
  },
  getFirstDog() {
    return dogQueue.peek();
  },
  adoptDog() {
    dogQueue.dequeue;
    return dogQueue;
  },
};

module.exports = {
  CatService,
  DogService,
};