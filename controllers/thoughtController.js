// Import
const { Thought, User } = require("../models");

// Implement controller functions and export
module.exports = {
    async getThoughts(req, res) {
        try {
            // Find and respond with all thoughts
            const thoughts = await Thought.find();
            return res.json(thoughts);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            // Find a single thought
            const thought = await Thought.findOne({_id: req.params.thoughtId});
            // If the specified thought doesn't exist, respond with a 404 error
            if (!thought) {
                return res.status(404).json({message: "No thought with that ID"});
            }
            // Respond with the thought
            return res.json(thought);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {

        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {

        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {

        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async addReaction(req, res) {
        try {

        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async removeReaction(req, res) {
        try {

        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
}