import {useEffect, useState} from 'react';
import { Storage } from '../../../services/Storage';
import { LoaderQuestion } from '../../LoaderQuestion'
import { useQuestions } from '../../../contexts/QuestionsContext'
import { PaginationQuestions } from '../Pagination/Questions'	
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
         <PaginationQuestions list={questions}/>
        ):(
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
