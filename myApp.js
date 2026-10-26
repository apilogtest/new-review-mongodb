const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Create ne Schema
const personSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    age: Number,
    favoriteFoods: [String]
});

// Create the model from the Schema
const Person = mongoose.model('Person', personSchema);


//let Person;

//const createAndSavePerson = (done) => {
  //done(null /*, data*/);
//};

// Create and save a person record
const createAndSavePerson = (done) => {
  // Create a new Person instance with sample data
    const person = new Person({
      name: "John",
      age: 25,
      favoriteFoods: ["pizza", "sushi"]
    });
 // Save the person document ot the database
    person.save((err, data) =>{
      // If there's an error, pass it to the done callback
      if (err) {
        return done(err);
      }
      // If sucessfull, pass null for error and the saved data
      done(null, data);
    });
};


//const createManyPeople = (arrayOfPeople, done) => {
//  done(null /*, data*/);
//};

const arrayOfPeople = [
  { name: "David", age: 45, favoriteFoods: ["salad", "steak"] },
  { name: "Lisa", age: 30, favoriteFoods: ["pasta", "salad"] },
  { name: "Michael", age: 35, favoriteFoods: ["burguer", "fries"] }
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) {
      return done(err);
    }
    done(null, people);
  });
};

//const findPeopleByName = (personName, done) => {
//  done(null /*, data*/);
//};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, docs) => {
    if (err) {
      return done(err);
    }
    done(null, docs);
   });
};

//const findOneByFood = (food, done) => {
//  done(null /*, data*/);
//};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, docs) => {
    if (err) {
      return done(err);
    }
    done(null, docs);
  });
};

//const findPersonById = (personId, done) => {
//  done(null /*, data*/);
//};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, docs) => {
    if (err) {
      return done(err);
    }
    done(null, docs);
  });
};

//const findEditThenSave = (personId, done) => {
//  const foodToAdd = "hamburger";

//  done(null /*, data*/);
//};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburguer";
  Person.findById(personId, (err, docs) => {
    if (err) {
      return done(err);
    }
    Person.favoriteFoods.push(foodToAdd)
    .save((err, data) =>{
      if (err) {
        return done(err);
      }
      done(null, docs)
    });
    done(null, docs);
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
