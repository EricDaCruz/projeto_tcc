import { Content } from './styles'
import { RiStarLine } from 'react-icons/ri'
import { HiLink } from 'react-icons/hi'

export const CardForum = () => {
    return(
      <Content>
          <section>
            <div className="headerContent">
                <HiLink />
                <p>Veja Também</p>
            </div>
            <div className="content">
              <ul>
                <li>
                  <a href="#">Física</a>
                </li>
                <li>
                  <a href="#">Química</a>
                </li>
                <li>
                  <a href="#">Geografia</a>
                </li>
              </ul>
            </div>
          </section>
      </Content>   
    )
  }