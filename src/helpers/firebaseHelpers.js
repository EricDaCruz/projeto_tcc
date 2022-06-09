import { db } from '../services/firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'

export const getUsers = async () =>{
    const userCollectionRef = collection(db, 'users')
    const allData = await getDocs(userCollectionRef)
    const usersData = allData.docs.map((doc) => ({...doc.data(), id: doc.id}))
    return usersData
}