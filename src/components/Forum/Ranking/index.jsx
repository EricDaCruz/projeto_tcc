import { useEffect, useState } from "react";
import { Container, Table } from "./styles";
/* Class */
import { User } from "../../../services/User";

export function Ranking() {
   const [ranking, setRanking] = useState([]);

   useEffect(() => {
      const user = new User();
      user.GetAllUsers().then((users) => {
         setRanking(users);
      });
   }, []);

   return (
      <Container>
        <h1 className="mb-5 is-size-4">Usuários que mais fizeram perguntas 🥰</h1>
         <Table>
            <thead>
               <th>Username</th>
               <th>Perguntas Feitas</th>
            </thead>
            <tbody>
                {ranking.map((user, key) => (
                    <tr key={key} className="is-size-6">
                        <td>{user.username}</td>
                        <td>{user.userQuestions > 0 ? `${user.userQuestions} pergunta(s)`: 'Nenhuma pergunta'}</td>
                    </tr>
                ))}
            </tbody>
         </Table>
      </Container>
   );
}
