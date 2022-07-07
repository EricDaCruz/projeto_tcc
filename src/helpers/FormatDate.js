export function FormatDate(date){
   if(date){
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if(month < 10){
        month = "0" + month
    }
    if(day < 10){
        day = "0" + day
    }
        
    return `${day}/${month}/${year}`;
   }
}

export function FormatDateForQuestion(){
    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let monthFull = '';
    let fullYear = date.getFullYear()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    switch(month){
        case 1:
            monthFull = 'Janeiro'
            break;
        case 2:
            monthFull = 'Fevereiro'
            break;
        case 3:
            monthFull = 'Março'
            break;
        case 4:
            monthFull = 'Abril'
            break;
        case 5:
            monthFull = 'Maio'
            break;
        case 6:
            monthFull = 'Junho'
            break;
        case 7:
            monthFull = 'Julho'
            break;
        case 8:
            monthFull = 'Agosto'
            break;
        case 9:
            monthFull = 'Setembro'
            break;
        case 10:
            monthFull = 'Outubro'
            break;
        case 11:
            monthFull = 'Novembro'
            break;
        case 12:
            monthFull = 'Dezembro'
            break;
    }

    return `${day} de ${monthFull} de ${fullYear} às ${hours}:${minutes}`;
}
