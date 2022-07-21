import { useState ,useEffect } from "react"
import { Question } from "../Question"
import { getMyQuestions } from "../../../services/GetMyQuestions"
import { GetItemSessionStorage } from "../../../services/Storage"

export const MyQuestions = () => {
    const [myQuestions, setMyQuestions] = useState([])

    useEffect(() => {
        const userUid = GetItemSessionStorage('uid') 
        getMyQuestions(userUid).then(questions => setMyQuestions(questions))

    }, [])

  return(
    <>
        {myQuestions.length > 0 && (
            myQuestions.map(question => {
                const {title, postDate, content, stars, comments, userId, chatUid} = question
                return(
                    <Question key={chatUid}
                        title={title}
                        postDate={postDate}
                        content={content}
                        stars={stars}
                        comments={12}
                        userId={userId}
                        chatUid={chatUid}
                    />
                )
            })
        )}
    </>
  )
}
