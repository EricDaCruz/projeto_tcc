import {useEffect, useState} from 'react';
import { GetFavoriteQuestions } from '../../../services/FavoriteQuestion'
import { GetItemSessionStorage } from '../../../services/Storage';
import { Question } from '../Question';
import { LoaderQuestion } from '../../LoaderQuestion'

export const FavoriteQuestions = () => {
  const userUid = GetItemSessionStorage('uid')
  const[questions, setQuestions] = useState([])
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    GetFavoriteQuestions(userUid)
    .then((question) => {
      setQuestions(question)
      setLoading(false)
    })
  },[])

  return(
    <>
      {loading 
      ?(
        <LoaderQuestion />
      ) 
      :(
        questions.length > 0 ? (
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
        )):(
          <div>
               <p className="has-text-centered is-size-4">
                  Ainda não há questões favoritadas
               </p>
            </div>
        )
      )
      
       
      }
    </>
  )
}
