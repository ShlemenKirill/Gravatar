const MD5 = require("./lib/md5.js")

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const getHash = (email) => {
  const clearEmail = email.trim().toLowerCase();
  if (!EMAIL_REGEX.test(clearEmail)) {
    throw new Error("Invalid email address");
  }
  return MD5(clearEmail);
};

const getGravatarUrl = (email, options) => {
  const emailHash = getHash(email);
  return `https://www.gravatar.com/avatar/${emailHash}?default=${options}`;
};

const gravatarTypes = {
  NOTFOUND: "404",
  MP: "mp",
  IDENTICON: "identicon",
  MONSTERID: "monsterid",
  WAVATAR: "wavatar",
  RETRO: "retro",
  ROBOHASH: "robohash",
  BLANK: "blank",
};

const gravatarURL = {
  getGravatarUrl,
  gravatarTypes,
};

module.exports = gravatarURL;
