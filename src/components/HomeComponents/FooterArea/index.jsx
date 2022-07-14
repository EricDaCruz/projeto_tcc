import { Link } from './styles'

export function FooterArea() {
   return (
      <footer className="footer" style={{backgroundColor: '#188F67', paddingBottom: '0'}}>
         <div className="columns">
            <div className="column is-two-fifths is-hidden-mobile">
               Logo ET
            </div>
            <div className="column is-flex is-flex-direction-column is-align-items-center">
                <div className="mb-4">
                    H E T E C
                </div>
                <div className="is-flex is-justify-content-space-evenly mt-6" style={{width:"100%"}}>
                    <div>
                        <p className="has-text-weight-semibold has-text-white is-size-5 mb-4">Equipe</p>
                        <ul className="has-text-weight-semibold has-text-grey-lighter is-size-6" style={{lineHeight:'2rem'}}>
                            <Link href="https://www.instagram.com/alvaroaamaral/" target="_blank">
                                <li>Álvaro Amaral</li>
                            </Link>
                            <Link href="https://www.instagram.com/a.anaacarol/" target="_blank">
                                <li>Ana Carolina</li>
                            </Link>
                            <Link href="https://www.instagram.com/opss._.emilly/" target="_blank">
                                <li>Emilly Correa</li>
                            </Link>
                            <Link href="https://www.instagram.com/e_cruzx/" target="_blank">
                                <li>Eric Rafael</li>
                            </Link>
                            <Link href="https://www.instagram.com/famurata_/" target="_blank">
                                <li>Fabricio Murata</li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <p className="has-text-weight-semibold has-text-white is-size-5 mb-4">Links Rápidos</p>
                        <ul className="has-text-weight-semibold has-text-grey-lighter is-size-6" style={{lineHeight:'2rem'}}>
                            <li><Link>Contato</Link></li>
                            <li><Link>Funcionalidades</Link></li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <p className="has-text-weight-semibold has-text-white is-size-5 mb-4">Social</p>
                        <ul className="has-text-weight-semibold has-text-grey-lighter is-size-6" style={{lineHeight:'2rem'}}>
                            <li><Link>Facebook</Link></li>
                            <li><Link>Instagram</Link></li>
                            <li><Link>Twitter</Link></li>
                            <li><Link>Youtube</Link></li>
                        </ul>
                    </div>
                </div>
                <p className="has-text-right mt-6 has-text-weight-semibold has-text-white is-size-5" style={{width:"100%"}}>Todos os direitos reservados</p>
            </div>
         </div>
      </footer>
   );
}
