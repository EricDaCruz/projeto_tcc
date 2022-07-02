import { Content } from './styles'
import { RiStarLine } from 'react-icons/ri'
import { HiLink } from 'react-icons/hi'

export const CardNews = () => {
    return(
      <Content>
          <section>
            <div>
                <RiStarLine />
                <p>Avisos</p>
            </div>
          </section>
          <section>
            <div>
                <HiLink />
                <p>Veja Também</p>
            </div>
          </section>
      </Content>   
    )
  }