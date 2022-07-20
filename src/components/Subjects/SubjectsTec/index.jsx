import { useLocation } from 'react-router-dom';
import { CategoriesBySubject } from '../../../assets/categories';
import { SubjectsCards } from '../SubjectsCards'
import { Container } from './styles';

export const SubjectsTec = (params) => {
    const location = useLocation();
    const splitLocation = location.pathname.split('/');
    const lastPath = splitLocation[splitLocation.length - 1];
    const subjects = CategoriesBySubject[lastPath]

    return(
        <Container>
            {subjects.map((category, key) => <SubjectsCards key={key} category={category}/>)}
        </Container>
    )
};
