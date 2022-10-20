import { Section } from "./styles";
import ImgAvisos from "../../../assets/images/avisos.png";
import ImgInteracao from "../../../assets/images/interacao.png";
import ImgPerguntas from "../../../assets/images/perguntas-e-respostas.png";
import ImgAvaliacao from "../../../assets/images/avaliacao-e-ranking.png";

export function InfoArea() {
   return (
      <Section className="container is-widescreen">
         <div className="columns is-align-items-center">
            <div className="column is-half" style={{ color: "#020202" }}>
               <h2 className="is-size-3 is-size-4-mobile mb-3">
                  PERGUNTAS E RESPOSTAS
               </h2>
               <p className="is-size-5 is-size-6-mobile">
                  Nosso sistema de perguntas e respostas é onde você irá
                  compartilhar suas dúvidas, ou responder as de outra pessoa de
                  forma segura. Ajudando a construir, coletivamente, o
                  conhecimento em muitas áreas da educação.
               </p>
            </div>
            <div className="column is-hidden-mobile has-text-center-touch">
               <img src={ImgPerguntas} alt="" />
            </div>
         </div>
         <div className="columns is-align-items-center is-flex-direction-row-reverse">
            <div className="column is-half" style={{ color: "#020202" }}>
               <h2 className="is-size-3 is-size-4-mobile mb-3">INTERAÇÃO</h2>
               <p className="is-size-5 is-size-6-mobile">
                  Criamos um ambiente prático, onde poderá interagir e obter um
                  estudo de melhor qualidade. Aqui você pode interagir com
                  outros alunos e professores, trazendo o benefício de uma forma
                  de estudo diferente, onde poderá ensinar outras pessoas, e
                  aprender mais ensinando.
               </p>
            </div>
            <div className="column is-hidden-mobile has-text-center-touch">
               <img src={ImgInteracao} alt="" />
            </div>
         </div>
         <div className="columns is-align-items-center">
            <div className="column is-half" style={{ color: "#020202" }}>
               <h2 className="is-size-3 is-size-4-mobile mb-3">
                  AVALIAÇÃO E RANKING
               </h2>
               <p className="is-size-5 is-size-6-mobile">
                  No ranking, os alunos podem conferir a colocação das pessoas
                  que mais fizeram perguntas e as que mais responderam. Você
                  pode visualizar o nome de perfil, a quantidade de respostas e
                  de questões favoritadas que o usuário possui, que estão em
                  ordem de colocação numérica.
               </p>
            </div>
            <div className="column is-hidden-mobile has-text-center-touch">
               <img src={ImgAvaliacao} alt="" />
            </div>
         </div>
         <div className="columns is-align-items-center is-flex-direction-row-reverse">
            <div className="column is-half" style={{ color: "#020202" }}>
               <h2 className="is-size-3 is-size-4-mobile mb-3">AVISOS</h2>
               <p className="is-size-5 is-size-6-mobile">
                  Notificações sobre suas questões serão enviadas ao seu perfil,
                  para saber quando suas dúvidas foram respondidas, ou quando
                  curtirem elas. Fique atento ao seu perfil!!
               </p>
            </div>
            <div className="column is-hidden-mobile  has-text-center-touch">
               <img src={ImgAvisos} alt="" />
            </div>
         </div>
      </Section>
   );
}
