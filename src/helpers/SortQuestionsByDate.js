import moment from 'moment';

export const sortQuestionsByDate = (questions) => {
    const sortQuestions = questions.sort((question, otherQuestion) => {
        const date1 = moment(question.postDate);
        const date2 = moment(otherQuestion.postDate);
        return date2.diff(date1);
    })

    console.log(sortQuestions);
    return sortQuestions
}
