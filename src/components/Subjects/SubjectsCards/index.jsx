import { Link } from "react-router-dom";
import { Container } from "./styles";

export const SubjectsCards = ({ category }) => {
   return (
      <Container>
         <Link to={category.value}>
            <div className="content-img">
               <img
                  src={`https://raw.githubusercontent.com/EricDaCruz/projeto_tcc/main/src/assets/images/categories-images/${category.src}`}
                  alt={`image-${category.value}`}
               />
            </div>
            <div className="content-text">{category.label}</div>
            </Link>
      </Container>
        
   );
};
