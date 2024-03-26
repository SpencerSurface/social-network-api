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

        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {

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