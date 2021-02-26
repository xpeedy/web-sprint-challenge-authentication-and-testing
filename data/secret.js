const jwtSecret = process.env.JWT_SECRET || "im the token"

module.exports = {
    jwtSecret,
}