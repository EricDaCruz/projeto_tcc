import {useEffect, useState} from 'react';
import { GetFavoriteQuestions } from '../../../services/FavoriteQuestion'
import { Storage } from '../../../services/Storage';
import { Questions } from '../Questions';
import { LoaderQuestion } from '../../LoaderQuestion'
import { sortByDate, sortByStars} from '../../../helpers/Sort';

export const FavoriteQuestions = () => {
  const storage = new Storage('uid');
  const userLogged= storage.GetItemSessionStorage()
  const[questions, setQuestions] = useState([])
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    GetFavoriteQuestions(userLogged)
    .then((question) => {
      const sortQuestions = sortByDate(question)
      const sortQuestionByStars = sortByStars(sortQuestions)
      setQuestions(sortQuestionByStars)
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
            const {title, postDate, content, stars, userLogged, chatUid} = question
            return (
              <Questions  
                key={chatUid}
                title={title}
                postDate={postDate}
                content={content}
                stars={stars}
                comments={12}
                userId={userLogged}
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
