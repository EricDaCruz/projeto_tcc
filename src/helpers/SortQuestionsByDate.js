import moment from 'moment';

export const sortByDate = (list) => {
    const sortList = list.sort((item, otherItem) => {
        const date1 = moment(item.postDate);
        const date2 = moment(otherItem.postDate);
        return date2.diff(date1);
    })
    return sortList
}

export const sortByStars = (list) =>{
    const sortList = list.sort((item, otherItem) => {
        return otherItem.stars.length - item.stars.length;
    })

    return sortList
}
