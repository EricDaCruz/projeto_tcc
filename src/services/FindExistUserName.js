// Create a reference to the cities collection
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const FindExistUserName = async () => {
   const userSnapshot = await getDocs(collection(db, "users"));
   const userNames = [];
   userSnapshot.forEach((doc) => {
    userNames.push(doc.data().username);
   });
   return userNames
};
