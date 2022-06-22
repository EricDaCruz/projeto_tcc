import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase'

export const RegisterUser = async (data, uid) =>{
   const userRef = doc(db, "users", uid)
    await setDoc(userRef, {
        name: data.name,
        email: data.email,
        dateBorn: data.dateBorn,
        phone: data.phone,
        location: {state:data.location.state, city:data.location.city},
        interests: data.interests,
        username: data.username,
    });
}

export const CreateAuthEmail = async ({email, password}) => {
    const auth = getAuth();
    return await createUserWithEmailAndPassword(auth, email, password)
    .catch(err => err.code)
};

