import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Alvaro from "../../../assets/images/alvaro.png";
import Ana from "../../../assets/images/ana.png";
import Emilly from "../../../assets/images/emilly.png";
import Eric from "../../../assets/images/eric.png";
import Fabricio from "../../../assets/images/fa.png";

export function RatingArea() {
   return (
      <section
         className="container is-fluid"
         style={{ backgroundColor: "#E0E0E0" }}
      >
         <div className="container is-flex is-flex-direction-column has-text-centered">
            <h2
               className="mt-6 is-size-5 has-text-weight-semibold"
               style={{
                  color: "#188F67",
                  letterSpacing: "2px",
               }}
            >
               Avaliações
            </h2>
            <h3
               className="is-size-5 has-text-weight-semibold mt-3 mb-5"
               style={{
                  color: "#2B3742",
               }}
            >
               Hmm... E o que dizem sobre o Hetec?
            </h3>
         </div>
         <div className="container">
            <div className="tile is-ancestor p-2">
               <div className="tile is-vertical is-6">
                  <div className="tile">
                     <div className="tile is-parent is-vertical">
                        <article
                           className="tile is-child is-flex is-flex-direction-column is-justify-content-center"
                           style={{
                              backgroundColor: "white",
                              boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.05)",
                              borderRadius: "12px",
                              padding: "20px",
                           }}
                        >
                           <div>
                              <FaQuoteLeft
                                 style={{
                                    color: " #5C9B41",
                                    fontSize: "1.75rem",
                                 }}
                              />
                              <p className="my-3">
                                 Adorei. muito bom o site, dá para tirar todas
                                 as dúvidas nele. O programador deve ser muito
                                 bom kkkkkkkk!
                              </p>
                           </div>
                           <div>
                              <div className="is-flex is-align-items-center mb-3">
                                 <figure className="image is-64x64 mr-4">
                                    <img className="is-rounded" src={Eric} />
                                 </figure>
                                 <div>
                                    <p className="has-text-black has-text-weight-medium is-size-4">
                                       Eric da Cruz
                                    </p>
                                    <p
                                       className="is-size-6"
                                       style={{
                                          color: "#37444E",
                                       }}
                                    >
                                       Programador
                                    </p>
                                 </div>
                              </div>
                              {[true, true, true, true, true].map((item, key) =>
                                 item ? (
                                    <FaStar
                                       key={key}
                                       className="mr-2"
                                       style={{
                                          color: "#FDB600",
                                          fontSize: "22px",
                                       }}
                                    />
                                 ) : (
                                    <FaStar
                                       key={key}
                                       className="mr-2"
                                       style={{
                                          color: "#ddd",
                                          fontSize: "22px",
                                       }}
                                    />
                                 )
                              )}
                           </div>
                        </article>
                        <article
                           className="tile is-child is-flex is-flex-direction-column is-justify-content-center"
                           style={{
                              backgroundColor: "white",
                              boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.05)",
                              borderRadius: "12px",
                              padding: "20px",
                           }}
                        >
                           <div>
                              <FaQuoteLeft
                                 style={{
                                    color: "#B94FC5",
                                    fontSize: "1.75rem",
                                 }}
                              />
                              <p className="my-3">
                                 Excelente! Notei que não há nenhum erro em sua
                                 programação, e todos os seus recursos realmente
                                 funcionam. O testador deve ser realmente um
                                 grande profissional.
                              </p>
                           </div>
                           <div>
                              <div className="is-flex is-align-items-center mb-3">
                                 <figure className="image is-64x64 mr-4">
                                    <img className="is-rounded" src={Alvaro} />
                                 </figure>
                                 <div>
                                    <p className="has-text-black has-text-weight-medium is-size-4">
                                       Alvaro Amaral
                                    </p>
                                    <p
                                       className="is-size-6"
                                       style={{
                                          color: "#37444E",
                                       }}
                                    >
                                       Testador
                                    </p>
                                 </div>
                              </div>
                              {[true, true, true, true, true].map((item, key) =>
                                 item ? (
                                    <FaStar
                                       key={key}
                                       className="mr-2"
                                       style={{
                                          color: "#FDB600",
                                          fontSize: "22px",
                                       }}
                                    />
                                 ) : (
                                    <FaStar
                                       key={key}
                                       className="mr-2"
                                       style={{
                                          color: "#ddd",
                                          fontSize: "22px",
                                       }}
                                    />
                                 )
                              )}
                           </div>
                        </article>
                        <article
                           className="tile is-child is-flex is-flex-direction-column is-justify-content-center"
                           style={{
                              backgroundColor: "white",
                              boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.05)",
                              borderRadius: "12px",
                              padding: "20px",
                           }}
                        >
                           <div>
                              <FaQuoteLeft
                                 style={{
                                    color: " #FF415B",
                                    fontSize: "1.75rem",
                                 }}
                              />
                              <p className="my-3">
                                 Além da importância que esse site tem, o design
                                 é lindo, um trabalho excelente! Certeza que
                                 quem o fez é muito linda também kakakakak.
                              </p>
                           </div>
                           <div>
                              <div className="is-flex is-align-items-center mb-3">
                                 <figure className="image is-64x64 mr-4">
                                    <img className="is-rounded" src={Ana} />
                                 </figure>
                                 <div>
                                    <p className="has-text-black has-text-weight-medium is-size-4">
                                       Ana Carolina
                                    </p>
                                    <p
                                       className="is-size-6"
                                       style={{
                                          color: "#37444E",
                                       }}
                                    >
                                       Designer
                                    </p>
                                 </div>
                              </div>
                              {[true, true, true, true, true].map((item, key) =>
                                 item ? (
                                    <FaStar
                                       key={key}
                                       className="mr-2"
                                       style={{
                                          color: "#FDB600",
                                          fontSize: "22px",
                                       }}
                                    />
                                 ) : (
                                    <FaStar
                                       key={key}
                                       className="mr-2"
                                       style={{
                                          color: "#ddd",
                                          fontSize: "22px",
                                       }}
                                    />
                                 )
                              )}
                           </div>
                        </article>
                     </div>
                  </div>
               </div>
               <div className="tile is-vertical is-parent">
                  <article
                     className="tile is-child is-flex is-flex-direction-column is-justify-content-center"
                     style={{
                        backgroundColor: "white",
                        boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.05)",
                        borderRadius: "12px",
                        padding: "20px",
                     }}
                  >
                     <div>
                        <FaQuoteLeft
                           style={{
                              color: "#36A2AE",
                              fontSize: "1.75rem",
                           }}
                        />
                        <p className="my-3">
                           O único defeito desse site é não ter sido criado
                           antes, por isso 4 estrelas.
                        </p>
                     </div>
                     <div>
                        <div className="is-flex is-align-items-center mb-3">
                           <figure className="image is-64x64 mr-4">
                              <img className="is-rounded" src={Fabricio} />
                           </figure>
                           <div>
                              <p className="has-text-black has-text-weight-medium is-size-4">
                                 Fabricio Murata
                              </p>
                              <p
                                 className="is-size-6"
                                 style={{
                                    color: "#37444E",
                                 }}
                              >
                                 Programador de Kodular
                              </p>
                           </div>
                        </div>
                        {[true, true, true, true, false].map((item, key) =>
                           item ? (
                              <FaStar
                                 key={key}
                                 className="mr-2"
                                 style={{
                                    color: "#FDB600",
                                    fontSize: "22px",
                                 }}
                              />
                           ) : (
                              <FaStar
                                 key={key}
                                 className="mr-2"
                                 style={{
                                    color: "#ddd",
                                    fontSize: "22px",
                                 }}
                              />
                           )
                        )}
                     </div>
                  </article>
                  <article
                     className="tile is-child is-flex is-flex-direction-column is-justify-content-center"
                     style={{
                        backgroundColor: "white",
                        boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.05)",
                        borderRadius: "12px",
                        padding: "20px",
                     }}
                  >
                     <div>
                        <FaQuoteLeft
                           style={{
                              color: " #B8B030",
                              fontSize: "1.75rem",
                           }}
                        />
                        <p className="my-3">
                           Uma ferramenta incrível! Tenho utilizado
                           frequentemente e estou conseguindo tirar todas as
                           minhas dúvidas. A parte textual do site é bem
                           intuitiva, levando a movimentação dentro do site ser
                           bem fácil. Quem organizou essa parte, está de
                           parabéns!
                        </p>
                     </div>
                     <div>
                        <div className="is-flex is-align-items-center mb-3">
                           <figure className="image is-64x64 mr-4">
                              <img className="is-rounded" src={Emilly} />
                           </figure>
                           <div>
                              <p className="has-text-black has-text-weight-medium is-size-4">
                                 Emilly Correa
                              </p>
                              <p
                                 className="is-size-6"
                                 style={{
                                    color: "#37444E",
                                 }}
                              >
                                 Redatora
                              </p>
                           </div>
                        </div>
                        {[true, true, true, true, true].map((item, key) =>
                           item ? (
                              <FaStar
                                 key={key}
                                 className="mr-2"
                                 style={{
                                    color: "#FDB600",
                                    fontSize: "22px",
                                 }}
                              />
                           ) : (
                              <FaStar
                                 key={key}
                                 className="mr-2"
                                 style={{
                                    color: "#ddd",
                                    fontSize: "22px",
                                 }}
                              />
                           )
                        )}
                     </div>
                  </article>
               </div>
            </div>
         </div>
      </section>
   );
}
