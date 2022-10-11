import {useState, useEffect} from 'react';
/* Class */
import { Question } from '../../../../services/Question';
import { Comment } from '../../../../services/Comment';

export function UserLine({user}) {
    const [userStars, setUserStars] = useState(0);
    const [userComments, setUserComments] = useState(0);

    //Get user stars
    useEffect(() => {
        const question = new Question();
        question.GetFavoriteQuestions(user.userId).then((stars) => {
            setUserStars(stars.length);
        });
    },[])

    //Get user comments
    useEffect(() => {
        const comment = new Comment("","",user.userId);
        comment.GetMyComments().then((comments) => {
            setUserComments(comments.length);
        });
    },[])

   return (
      <tr className="is-size-6">
         <td>{user.username}</td>
         <td className="has-text-centered " style={{width:'100px'}}>{user.userQuestions}</td>
         <td className="has-text-centered " style={{width:'100px'}}>{userStars}</td>
         <td className="has-text-centered " style={{width:'100px'}}>{userComments}</td>
      </tr>
   );
}
