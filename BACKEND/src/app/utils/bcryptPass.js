import bcrypt from "bcryptjs";

export const passwordHash = async (password) => {
    return await bcrypt.hash(password, 10);
};

export const passwordCompareHash = async (password, passwordHash) => {
    return await bcrypt.compare(password, passwordHash);
};
