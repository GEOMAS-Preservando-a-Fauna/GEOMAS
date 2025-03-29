import { passwordHash } from "./bcryptPass.js";

const pass1 = "bemteviambiental";
const pass2 = "bichodomatorp";
const pass3 = "cetasibama";
const pass4 = "ambientaldenuncias";
const pass5 = "linhaverdesede";
const pass6 = "Kaviar123";

const hash1 = await passwordHash(pass1);
const hash2 = await passwordHash(pass2);
const hash3 = await passwordHash(pass3);
const hash4 = await passwordHash(pass4);
const hash5 = await passwordHash(pass5);
const hash6 = await passwordHash(pass6);

export { hash1, hash2, hash3, hash4, hash5, hash6 };
