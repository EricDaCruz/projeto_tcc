import { Categories } from "../../assets/categories";
import { SubjectsCards } from "./SubjectsCards";
import { Container } from "./styles";

export const Subjects = () => {
   return (
      <Container>
         {Categories.map((category, key) => {
            return(
               <SubjectsCards key={key} category={category}/>
            )
         })}
      </Container>
   );
};
