import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const GetUser = async (userId) => {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        console.log(userSnap.data());
        return userSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
