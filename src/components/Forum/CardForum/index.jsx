import { Content } from './styles'
import { Link } from 'react-router-dom'
import { HiLink } from 'react-icons/hi'

export const CardForum = () => {
    return(
      <Content className="is-hidden-touch">
          <section>
            <div className="headerContent">
                <HiLink />
                <p>Veja Também</p>
            </div>
            <div className="content">
              <ul>
                <li>
                  <Link to="/forum/subjects/ds">Desenvolvimento de Sistema</Link>
                </li>
                <li>
                  <Link to="/forum/subjects/tma">Meio Ambiente</Link>
                </li>
                <li>
                  <Link to="/forum/subjects/tdi">Design de Interiores</Link>
                </li>
              </ul>
            </div>
          </section>
      </Content>   
    )
  }