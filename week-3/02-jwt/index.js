const jwt = require('jsonwebtoken');
const { use } = require('../01-middlewares/03-errorcount');
const jwtPassword = 'secret';
const zod = require("zod")


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Your code here
    const schema = zod.string().email();
    const schema1 = zod.string().min(6);
    const response = schema.safeParse(username);
    const response1 = schema1.safeParse(password);
    if(response.success && response1.success){
        const new1 = {
            username};
        var token = jwt.sign(new1 , jwtPassword);
        return token;
    }else{
        return null;
    }
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    let ans = true;
    try{
        jwt.verify(token, jwtPassword);
    } catch(err){
        ans =false;
    }
    return ans;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    try{
    const ans = jwt.decode(token);
    if(ans){return true;}}
    catch(err){
        return false;
    }
    return false;
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
// const schema = zod.array(zod.number);
// const response = schema.safeParse(kidneys); //success or not will be returned by the function and also sends the issues. 
// const schema1 = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8),
//     country:zod.literal("IN").or(zod.literal("US")),
//     kidneys:zod.array(z.number())
// })