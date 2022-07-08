import { collection, getDocs, query } from "firebase/firestore/lite";
import db from "./firebase";

function convertString(phrase)
{
    var maxLength = 20;

    var returnString = phrase.toLowerCase();
    //Convert Characters
    returnString = returnString.replace(/ö/g, 'o');
    returnString = returnString.replace(/ç/g, 'c');
    returnString = returnString.replace(/ş/g, 's');
    returnString = returnString.replace(/ı/g, 'i');
    returnString = returnString.replace(/ğ/g, 'g');
    returnString = returnString.replace(/ü/g, 'u');  

    // if there are other invalid chars, convert them into blank spaces
    returnString = returnString.replace(/[^a-z0-9\s-]/g, "");
    // convert multiple spaces and hyphens into one space       
    returnString = returnString.replace(/[\s-]+/g, " ");
    // trims current string
    returnString = returnString.replace(/^\s+|\s+$/g,"");
    // cuts string (if too long)
    if(returnString.length > maxLength)
    returnString = returnString.substring(0,maxLength);
    // add hyphens
    returnString = returnString.replace(/\s/g, "_");  

    return returnString;
}

export const generateUsername = async (name) => {
  let registeredUsernames = [];

  const q = query(collection(db, "users"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    registeredUsernames.push(doc.data().username);
  });

  let username = "@" + convertString(name);

  for (let i = 1; registeredUsernames.includes(username); i++) {
    username = username + `${i}`;
  }

  return username;
};
