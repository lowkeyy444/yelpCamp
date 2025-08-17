const mongoose = require('mongoose');
const cities = require('./cities');
const {places,descriptors} = require('./seedHelpers');
const { connect } = require('http2');
const Campground = require('../models/campground');
const { title } = require('process');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
.then( () => {
    console.log("Connected to MongoDB!");
})
.catch( (err) => {
    console.log("MongoDB connection Error!");
    console.log(err)
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDb = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random()*1000 + 1)
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title : `${sample(descriptors)} ${sample(places)}`
            
        })
        await camp.save();
    }
}
seedDb().then(() => {
    mongoose.connection.close();
    console.log("connection closed!")
})
