import { doc, setDoc } from "firebase/firestore";
import {db} from '../firebase'

// Add a new document in collection "cities"
export const RegisterUser = (data, uid) => {
    // const userRef = doc(db, "users", uid)
    // await setDoc(userRef, {
    //     name: data.name,
    //     email: data.email,
    //     dateBorn: data.dateBorn,
    //     phone: data.phone,
    //     location: {state:data.state, city:data.city},
    //     interests: data.interests,
    //     username: data.username,
    // });
}