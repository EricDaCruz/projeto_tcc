import {useEffect, useState} from 'react';
import { GetFavoriteQuestions } from '../../../services/FavoriteQuestion'
import { GetItemSessionStorage } from '../../../services/Storage';
import { Question } from '../Question';


export const FavoriteQuestions = () => {
  const userUid = GetItemSessionStorage('uid')
  const[questions, setQuestions] = useState([])
  useEffect(() => {
    GetFavoriteQuestions(userUid).then((question) => setQuestions(question))
  },[])

  return(
    <>
      {
        questions.length > 0 && (
          questions.map((question) => {
            const {title, postDate, content, stars, comments, userId, chatUid} = question
            return (
              <Question  
                key={chatUid}
                title={title}
                postDate={postDate}
                content={content}
                stars={stars}
                comments={12}
                userId={userId}
                chatUid={chatUid}
              />
            )
          }
        ))
      }
    </>
  )
}
