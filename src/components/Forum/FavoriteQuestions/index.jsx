import {useEffect, useState} from 'react';
import { Storage } from '../../../services/Storage';
import { Questions } from '../Questions';
import { LoaderQuestion } from '../../LoaderQuestion'
/* Classes */
import { Question } from '../../../services/Question';

export const FavoriteQuestions = () => {
  const storage = new Storage('uid');
  const userLogged = storage.GetItemSessionStorage()
  const[questionsData, setQuestionsData] = useState([])
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const question = new Question()
    question.GetFavoriteQuestions(userLogged)
    .then((questions) => {
      setQuestionsData(questions)
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
        questionsData.length > 0 ? (
          questionsData.map((quest) => {
            const {title, postDate, content, stars, userId, questionUid} = quest
            return (
              <Questions  
                key={questionUid}
                title={title}
                postDate={postDate}
                content={content}
                stars={stars}
                userId={userId}
                questionUid={questionUid}
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
