export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export enum GravatarTypes {
  NOTFOUND = "404",
  MP = "mp",
  IDENTICON = "identicon",
  MONSTERID = "monsterid",
  WAVATAR = "wavatar",
  RETRO = "retro",
  ROBOHASH = "robohash",
  BLANK = "blank",
}
