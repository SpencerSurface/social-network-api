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
    }
}