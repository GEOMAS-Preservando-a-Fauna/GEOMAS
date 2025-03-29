export default {
    secret: process.env.JWT_SECRET_KEY || "lilica_2007", // Fallback to "lilica_2007" if env variable is not set
    expiresIn: "7d",
};
