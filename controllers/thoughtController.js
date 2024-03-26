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
            // If the specified thought doesn't exist, respond with an error
            if (!thought) {
                return res.status(404).json({ message: "No thought with that ID" });
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
            // Create a new thought
            const thought = await Thought.create(req.body);
            // Add the thought to the specified user
            const user = await User.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: { thoughts: thought._id } },
                { new: true}
            );
            // If the specified user doesn't exist, respond with an error
            if (!user) {
                return res.status(404).json({ message: "Thought created, but no user with that username" });
            }
            // Respond with the thought
            return res.json(thought);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            // Update the thought
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            // If the specified thought doesn't exist, respond with an error
            if (!thought) {
                return res.status(404).json({ message: "No thought with that ID" });
            }
            // Respond with the thought
            return res.json(thought);
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