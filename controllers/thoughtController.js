// Import
const { Thought, User } = require("../models");

// Implement controller functions and export
module.exports = {
    async getThoughts(req, res) {
        try {
            // Find and respond with all thoughts
            const thoughts = Thought.find();
            return res.json(thoughts);
        } catch(err) {
            console.err(err);
            return res.status(500).json(err);
        }
    }
}