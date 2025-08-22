const joi = require('joi');

const CampgroundSchema = joi.object({
        campground: joi.object({
            title:joi.string().required(),
            price: joi.number().required().min(0),
            image: joi.string().required(),
            location: joi.string().required(),
            description: joi.string().required()
        }).required()
    })

module.exports = {CampgroundSchema};