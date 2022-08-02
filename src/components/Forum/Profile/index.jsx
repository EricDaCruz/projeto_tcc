import { useParams } from 'react-router-dom';

export const Profile = (params) => {
    const { userId } = useParams();

  return(
    <h1>{userId}</h1>
  )
}
