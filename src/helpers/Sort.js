import moment from "moment";

export const sortByDate = (list) => {
   const sortList = list.sort((item, otherItem) => {
      const date1 = moment(item.postDate ?? item.createdAt);
      const date2 = moment(otherItem.postDate ?? otherItem.createdAt);
      return date2.diff(date1);
   });
   return sortList;
};

export const sortByStars = (list) => {
   const sortList = list.sort((item, otherItem) => {
      return otherItem.stars.length - item.stars.length;
   });

   return sortList;
};

export const sortUserByQuestionsAsked = (list) => {
   let sortList = sortUserByAlphabetical(list)

   sortList = list.sort((item, otherItem) => {
      return otherItem.userQuestions - item.userQuestions;
   });

   return sortList.filter((item) => item.username !== "adm_roxa");
};

export const sortUserByAlphabetical = (list) => {
   const sortList = list.sort((item, otherItem) => {
      let itemUpperCase = item.username.toUpperCase();
      let otherItemUpperCase = otherItem.username.toUpperCase();

      return itemUpperCase == otherItemUpperCase
         ? 0
         : itemUpperCase > otherItemUpperCase
         ? 1
         : -1;
   });

   return sortList.filter((item) => item.username !== "adm_roxa");
};
