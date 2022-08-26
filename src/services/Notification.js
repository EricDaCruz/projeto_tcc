import {
   collection,
   query,
   where,
   getDocs,
   doc,
   deleteDoc,
   updateDoc,
   deleteField,
   setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { sortByDate } from "../helpers/Sort";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export class Notification {
   constructor(id, userId, data) {
      this.userId = userId;
      this.id = id;
      this.data = data;
   }

   async SendNotification() {
      const notificationRef = doc(db, "notifications", uuidv4());
      const data = {
         createdAt: moment().format('AAAA-MM-dd'),
         notification: "eRC curtiu sua questão",
         userId: this.data.userId,
         type: this.data.type,
      };
      await setDoc(notificationRef, data);
   }
   async GetNotifications() {
      const notificationsRef = collection(db, "notifications");
      const queryNotification = query(
         notificationsRef,
         where("userId", "==", this.userId)
      );
      const querySnapshot = await getDocs(queryNotification);

      const listNotifications = [];

      querySnapshot.forEach((doc) => {
         listNotifications.push({ ...doc.data(), id: doc.id });
      });
      const listSortByData = sortByDate(listNotifications);
      return listSortByData;
   }
   async DeleteNotifications() {
      const notificationRef = doc(db, "notifications", this.id);
      await updateDoc(notificationRef, {
         notifications: deleteField(),
         createdAt: deleteField(),
         userId: deleteField(),
         type: deleteField(),
      });
      deleteDoc(notificationRef).then(toast.success("Notificação deletada!"));
   }
}
