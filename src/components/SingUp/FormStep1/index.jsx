import { ContentForm } from "../styles";

export function FormStep1() {
   return (
      <div className="mx-auto my-auto " style={{maxWidth:'700px'}}>
         <div>
            <h1>Seja bem-vindo a HETEC!</h1>
            <p>
               Eu me chamo Etevaldo, e vou ajuda-lo a se cadastrar no melhor
               fórum tira dúvidas do mundo!
            </p>
         </div>
         <ContentForm className="px-6 py-4 has-background-white">
            <div>barra de progresso</div>
            <hr />
            <div>
               <h2>Quem é você?</h2>
               <p>Para começar, por favor me diga seu nome e email!</p>
            </div>
            <form>
               <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-right">
                     <input
                        class="input is-success"
                        type="text"
                        placeholder="Seu nome"
                     />
                     <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                     </span>
                  </div>
                  {/* <p class="help is-success">This username is available</p> */}
               </div>
               <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-right">
                     <input
                        class="input is-success"
                        type="text"
                        placeholder="Seu Email"
                     />
                     <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                     </span>
                  </div>
                  {/* <p class="help is-success">This username is available</p> */}
               </div>
            </form>
         </ContentForm>
         <a className="mt-6 is-flex is-justify-content-flex-end" href="/sing-up/step2">
            <p className="button is-primary">Próxima Etapa</p>
        </a>
      </div>
   );
}
