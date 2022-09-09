import {useEffect, useState} from 'react';
import { Storage } from '../../../services/Storage';
import { Questions } from '../Questions';
import { LoaderQuestion } from '../../LoaderQuestion'
import { useQuestions } from '../../../contexts/QuestionsContext'
/* Classes */
import { Question } from '../../../services/Question';

export const FavoriteQuestions = () => {
  const storage = new Storage('uid');
  const userLogged = storage.GetItemSessionStorage()
  const {questions, setQuestions} = useQuestions()
  const[questionsData, setQuestionsData] = useState([])
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const question = new Question()
    question.GetFavoriteQuestions(userLogged)
    .then((questions) => {
      setQuestions(questions)
      setLoading(false)
    })
  },[])

  return(
    <>
      {loading 
      ?(
        <>
        <LoaderQuestion />
        </>
      ) 
      :(
        questions.length > 0 ? (
          questions.map((quest) => {
            const {title, postDate, content, stars, userId, questionUid, image} = quest
            return (
              <Questions  
                key={questionUid}
                title={title}
                postDate={postDate}
                content={content}
                stars={stars}
                userId={userId}
                questionUid={questionUid}
                image={image}
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
