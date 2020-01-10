module.exports = {
    mongoURI: process.env.MONGODB_URI || "mongodb://localhost/user-auth",
    secretOrKey: "secret"
}