import { Img } from './styles'

export const Avatar = ({ src }) => {
    const defaultProfile = 'https://img.freepik.com/vetores-gratis/ilustracao-de-desenho-animado-bonito-alienigena-segurando-balao-de-lua_403370-98.jpg'
    const handleOnError = (e) => {
        e.target.src = defaultProfile
    }

    return (
        <div className="is-clickable">
            {src 
            ? (  <Img 
                    src={src} 
                    alt='Foto de Perfil'
                    onError={(e) => handleOnError(e)} 
                    />)
            : ( <Img src={defaultProfile} alt='Foto de Perfil' /> )
            }
        </div>
    )
    // O react 
}
