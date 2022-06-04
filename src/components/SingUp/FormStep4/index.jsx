import { ContentForm, Inputs, ButtonNextStep, Select } from "./styles";
import { BiUser } from "react-icons/bi";

import { Link } from "react-router-dom";

export function FormStep4() {
   return (
      <div className="mx-auto my-auto" style={{ maxWidth: "700px" }}>
         <div className="mb-6 is-flex is-flex-direction-column is-align-items-center">
            <h1 className="mb-3 is-size-3 has-text-weight-semibold has-text-dark">
               Estamos concluindo, (Nome)!
            </h1>
            <p
               className="is-size-6 has-text-centered"
               style={{ maxWidth: "500px" }}
            >
               Os dados que você inserir agora, serão os que você deve utilizar
               para acessar sua conta, vamos lá.
            </p>
         </div>
         <ContentForm className="px-6 py-6 has-background-white">
            <div>barra de progresso 1/4</div>
            <hr />
            <div className="mb-6">
               <h2 className="mb-3 is-size-5 has-text-weight-semibold has-text-centered has-text-dark">
                  Dados cadastrais
               </h2>
               <p className="is-size-6 has-text-centered">
                  Dica de ouro: anote seu nome de usuário e sua senha de acesso
                  para não esquece-la.
               </p>
            </div>
            <form>
               <div className="mb-5">
                   <div className="field">
                      <label className="label has-text-dark">Nome de usuário</label>
                      <div className="is-flex is-align-items-center control has-icons-right">
                         <Inputs
                            className="input is-medium is-rounded"
                            type="text"
                            placeholder="Seu nome de usuário"
                         />
                         <span className="icon is-small is-right">
                            <BiUser />
                         </span>
                      </div>
                      {/* <p className="help is-success">This username is available</p> */}
                   </div>
               </div>
               <div className="is-flex">
                   <div className="field mr-5">
                      <label className="label has-text-dark">Senha</label>
                      <div className="control">
                         <Inputs
                            className="input is-medium is-rounded"
                            type="password"
                            placeholder="Seu senha"
                         />
                      </div>
                      {/* <p className="help is-success">This username is available</p> */}
                   </div>
                   <div className="field">
                      <label className="label has-text-dark">Confirme sua senha</label>
                      <div className="control">
                         <Inputs
                            className="input is-medium is-rounded"
                            type="password"
                            placeholder="Seu senha novamente"
                         />
                      </div>
                      {/* <p className="help is-success">This username is available</p> */}
                   </div>
               </div>
            </form>
         </ContentForm>
         <Link
            className="mt-6 is-flex is-justify-content-flex-end"
            to="/sing-up/completed"
         >
            <ButtonNextStep>
               <p>Finalizar</p>
            </ButtonNextStep>
         </Link>
      </div>
   );
}
