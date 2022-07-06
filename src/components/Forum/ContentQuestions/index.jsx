import { Section } from "./styles";
import { Avatar } from "../Avatar";
import { FiMessageSquare, FiStar } from "react-icons/fi";

export const ContentQuestions = () => {
   return (
      <Section className="mb-5">
         <div className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
            <Avatar />
            <div>
               <p className="has-text-black" style={{ color: "#808080" }}>
                  Eric Da Cruz
               </p>
               <span className="is-size-7	">04 de Julho de 2022 12:45</span>
            </div>
         </div>
         <div className="my-4 ">
            <h2 className="mb-1 is-size-5 has-text-weight-bold">
               ME AJUDA PLMDD!!!
            </h2>
            <p>
               José comprou um carro popular no Ano de 2018 por R$14.000,00. A
               cada ano que passa, o valor...
            </p>
         </div>
         <div className="is-flex is-justify-content-flex-end">
            <div className="is-flex" style={{ gap: "1.25rem" }}>
               <span
                  className="is-flex is-align-items-center"
                  style={{ gap: "0.25rem" }}
               >
                  <FiStar />
                  <p>9</p>
               </span>
               <span
                  className="is-flex is-align-items-center"
                  style={{ gap: "0.25rem" }}
               >
                  <FiMessageSquare />
                  <p>15</p>
               </span>
            </div>
         </div>
      </Section>
   );
};
