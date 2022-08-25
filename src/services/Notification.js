import { collection, query, where, getDocs, doc, deleteDoc, updateDoc, deleteField  } from "firebase/firestore";
import { db } from '../firebase'
import { sortByDate } from "../helpers/Sort";
import { toast } from "react-toastify";

export class Notification {
    constructor(id, userId) {
        this.userId = userId;    
        this.id = id;
    }
    
    async GetNotifications(){
        const notificationsRef = collection(db, "notifications");
        const queryNotification = query(notificationsRef, where("userId", "==", this.userId));
        const querySnapshot = await getDocs(queryNotification);

        const listNotifications = []

        querySnapshot.forEach(doc => {
            listNotifications.push({...doc.data(), id: doc.id})
        })
        const listSortByData = sortByDate(listNotifications);
        return listSortByData;
    }
    async DeleteNotifications(){
        const notificationRef = doc(db, "notifications", this.id);
        await updateDoc(notificationRef,{
            notifications: deleteField(),
            createdAt: deleteField(),
            userId: deleteField(),
            type: deleteField(),
        });
        deleteDoc(notificationRef).then(
            toast.success("Notificação deletada!")
        )
    }
}