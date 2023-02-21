import { Md5 } from "./helpers/md5";
import { EMAIL_REGEX, GravatarTypes } from "./constants";

/**
 * Create a hash from your email
 * @param {string} email
 */
const getHash = (email: string): string => {
  const clearEmail = email.trim().toLowerCase();
  if (!EMAIL_REGEX.test(clearEmail)) {
    throw new Error("Invalid email address");
  }
  return Md5.init(clearEmail);
};

/**
 * Creates your final gravatar
 * @param {string} email
 * @param {GravatarTypes} gravatarType
 */
const getGravatarUrl = (email: string, gravatarType: GravatarTypes): string => {
  const emailHash = getHash(email);
  return `https://www.gravatar.com/avatar/${emailHash}?default=${gravatarType}`;
};

const gravatarURL = {
  getGravatarUrl,
  GravatarTypes,
};

module.exports = gravatarURL;
