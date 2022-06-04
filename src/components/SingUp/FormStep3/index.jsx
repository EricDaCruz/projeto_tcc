import { ContentForm, ButtonNextStep, ContentOptions } from "./styles";
import { Link } from "react-router-dom";
import  Ds  from '../../../assets/images/ds.png';
import  Wd  from '../../../assets/images/wd.png';
import { SelectOption } from "../../SelectOption"

export function FormStep3() {
   return (
      <div className="mx-auto my-auto" style={{ maxWidth: "700px" }}>
         <div className="mb-6 is-flex is-flex-direction-column is-align-items-center">
            <h1 className="mb-3 is-size-3 has-text-weight-semibold has-text-dark">
               Quero te conhecer melhor!
            </h1>
            <p
               className="is-size-6 has-text-centered"
               style={{ maxWidth: "500px" }}
            >
               Essa etapa nos ajudará a entender melhor o conteúdo que você quer
               ver.
            </p>
         </div>
         <ContentForm className="px-6 py-6 has-background-white">
            <div>barra de progresso 3/4</div>
            <hr />
            <div className="mb-4">
               <h2 className="mb-3 is-size-5 has-text-weight-semibold has-text-centered has-text-dark">
                  Quais são seus interesses?
               </h2>
               <p className="is-size-6 has-text-centered">
                  Garanto que temos as suas matérias preferidas!
               </p>
            </div>
         <ContentOptions className="mt-6">
            <div className="is-flex is-justify-content-space-between">
                <SelectOption title="Desenvolvimento de Sistemas" icon={Ds} selected={true}/>
                <SelectOption title="Web Design" icon={Wd} selected={false}/>
            </div>
            <div className="is-flex is-justify-content-space-between mt-5">
                <SelectOption title="Web Design" icon={Wd} selected={false}/>
                <SelectOption title="Web Design" icon={Wd} selected={false}/>
            </div>
         </ContentOptions>
         </ContentForm>
         <Link
            className="mt-6 is-flex is-justify-content-flex-end"
            to="/sing-up/step4"
         >
            <ButtonNextStep>
               <p>Próxima Etapa</p>
            </ButtonNextStep>
         </Link>
      </div>
   );
}
