"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: [{
        type: String,
        required: true
    }],
    location: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: [{
            type: Number,
            min: -180,
            max: 180
        }]
    }
},
{
    timestamps: true
});

schema.index({ location: "2dsphere"});

module.exports = new mongoose.model("places", schema);