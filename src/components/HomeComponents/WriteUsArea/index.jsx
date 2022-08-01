import { FaArrowRight } from 'react-icons/fa'
import { Input } from './styles';
import phoneImage from '../../../assets/images/phoneImage.png'

export function WriteUsArea() {
   return (
      <section className="hero is-small">
         <div className="hero-body has-background-white-bis">
            <div className="container is-max-desktop is-flex is-justify-content-space-evenly is-align-items-center">
               <div className='is-hidden-mobile'>
                  <img src={phoneImage} />
               </div>
               <div>
                  <h2
                    className="is-size-3 has-text-weight-semibold mb-4"
                    style={{
                        color:'#2B3742',
                        letterSpacing: '2px'
                    }}
                  >Nos Escreva!</h2>
                  <p
                  className='is-size-5 mb-5'
                    style={{
                        color:'#58616D',
                        maxWidth: '500px'
                    }}
                  >
                     Envie-nos seu email, e entraremos em contato o mais breve
                     possível.
                  </p>
                  <div className="control is-flex is-align-items-center"
                    style={{ 
                        maxWidth:'400px',
                        backgroundColor:'rgba(24, 143, 103, 0.4)',
                        boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.05',
                        borderRadius:'12px',
                        padding: '0 12px'
                    }}
                  >
                      <Input 
                        type="text" 
                        className="has-text-white is-size-5 mr-2"
                        placeholder='Seu Email'
                    />
                      <span
                      className="is-flex is-align-items-center is-justify-content-center"
                        style={{
                            background: '#188F67',
                            borderRadius:'50%',
                            width: '28px',
                            height: '28px',
                            cursor: 'pointer'
                        }}
                      >
                        <FaArrowRight color="white"/>
                      </span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
