import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Container, ContentInputs, ContentProfile } from './styles';
import { Field } from '../../SingUp/Field';
import { SelectDate } from '../../SingUp/SelectDate'; 

export const Profile = (params) => {
    const { userId } = useParams();
    const [dataBorn, setDataBorn] = useState('');

  return(
    <Container>
      <ContentProfile>
        profile
      </ContentProfile>
      <ContentInputs>
        <Field label="Nome">
          <input type="text" />
        </Field>
        <Field label="Email">
          <input type="email" />
        </Field>
        <Field label="Celular">
          <input type="text" />
        </Field>
        <Field label="username">
          <input type="text" />
        </Field>
        <Field label="Data de Nascimento">
          <SelectDate value={dataBorn} setDateBorn={setDataBorn} />
        </Field>
        <Field label="Estado">
         <input type="text" />
        </Field>
      </ContentInputs>
    </Container>
  )
}
