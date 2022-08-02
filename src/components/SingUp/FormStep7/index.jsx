import { useEffect } from "react";
import ImgCompleted from "../../../assets/images/imgCompleted.png";
import { useForm } from "../../../contexts/FormContext";
import { useNavigate } from "react-router-dom";
import { NextStep } from "../Buttons/NextStep";
/* Classes */
import { User } from "../../../services/User";

export function FormStep7() {
   const navigate = useNavigate();
   const { data, setData } = useForm();

   useEffect(() => {
      setData({ ...data, currentStep: 7 });
      if (data.name === "") {
         navigate("/sing-up/step1");
      }
   }, []);

   const handleLoginUser = async () => {
      const user = new User(data);
      await user.SignInUser();
      navigate("/forum/chats");
   };

   return (
      <div className="mx-auto my-auto" style={{ maxWidth: "700px" }}>
         <div className="mb-6 is-flex is-flex-direction-column is-align-items-center ">
            <h1 className="mb-3 is-size-3 has-text-weight-semibold has-text-dark">
               Prontinho!!, {data.name}!
            </h1>
            <p
               className="is-size-6 has-text-centered"
               style={{ maxWidth: "500px" }}
            >
               Sua conta já está pronta, agora é só curtir com a galera do
               HETEC!
            </p>
         </div>
         <div className="is-flex is-flex-direction-column is-align-items-center has-text-centered">
            <img src={ImgCompleted} />
            <h2 className="mt-5 mb-4 has-text-weight-semibold is-size-5   ">
               Seu cadastro foi concluído!
            </h2>
            <p className="mb-5" style={{ maxWidth: "500px" }}>
               Agora que você faz parte dessa família, pode tirar suas dúvidas
               com outros etzinhos, e compartilhar seu conhecimento com eles,
               acesse agora mesmo:
            </p>
            <div className="is-flex is-justify-content-space-between mt-6">
               <NextStep text="Entrar" onClick={handleLoginUser} />
            </div>
         </div>
      </div>
   );
}
