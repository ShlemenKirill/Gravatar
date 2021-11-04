import gravatarURL from "./lib/gravatar.js";
import gravatarTypes from "./lib/gravatarTypes.js";

let result = gravatarURL("kirill.shlemen@gmail.com", gravatarTypes.IDENTICON);

console.log(result);
