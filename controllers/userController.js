// Import
const { Thought, User } = require("../models");

// Implement controller functions and export
module.exports = {
    async getUsers(req, res) {
        try {
            // Find and respond with all users
            const users = await User.find();
            return res.json(users);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            // Find specified user
            const user = await User.findOne({ _id: req.params.userId });
            // If the specified user doesn't exist, respond with an error
            if (!user) {
                return res.status(404).json({ message: "No user with that ID" });
            }
            // Respond with the user
            return res.json(user);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            // Create a new user and respond
            const user = await User.create(req.body);
            return res.json(user);
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {

        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {

        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
        try {

        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async removeFriend(req, res) {
        try {

        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    }
}