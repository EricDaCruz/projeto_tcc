import { ContetnImg, SlideFaq } from "./styles";
import Duvidas from "../../../assets/images/other-bg-questions.png";
import DuvidasEt from "../../../assets/images/duvidas-frequentes.png";
/* Slider */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const carousel = (slider) => {
   const z = 300;
   function rotate() {
      const deg = 360 * slider.track.details.progress;
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
   }
   slider.on("created", () => {
      const deg = 360 / slider.slides.length;
      slider.slides.forEach((element, idx) => {
         element.style.transform = `rotateY(${
            deg * idx
         }deg) translateZ(${z}px)`;
      });
      rotate();
   });
   slider.on("detailsChanged", rotate);
};

export function FaqArea() {
   const [sliderRef, instanceRef] = useKeenSlider(
      {
         loop: true,
         selector: ".carousel__cell",
         renderMode: "custom",
         mode: "free-snap",
      },
      [carousel]
   );

   return (
      <div
         className="container columns is-fluid is-flex is-flex-direction-column is-hidden-mobile is-hidden-tablet-only"
         style={{ backgroundColor: "#E8F4F0", margin: "0" }}
      >
         <h2
            className="column is-full has-text-centered has-text-weight-bold is-size-3"
            style={{ color: "#2B3742" }}
         >
            Dúvidas Frequentes
         </h2>
         <div
            className="columns has-background-primary	"
            style={{ height: "100%" }}
         >
            <SlideFaq className="column is-three-fifths ">
               <div className="wrapper">
                  <div className="scene">
                     <div className="carousel keen-slider" ref={sliderRef}>
                        <div className="carousel__cell number-slide">
                           <h3>As matérias estão completas?</h3>
                           <p>
                              Os materiais didáticos estão sempre sendo
                              atualizados e estão todos completos, com todas as
                              informações para a qualidade do seu estudo.
                           </p>
                        </div>
                        <div className="carousel__cell number-slide">
                           <h3>Qual a importância de um fórum de estudo?</h3>
                           <p>
                              Por meio dessa ferramenta, os alunos têm a
                              oportunidade de compartilhar as suas dúvidas,
                              ajudar a solucionar os questionamentos dos colegas
                              e a construir, coletivamente, vários tipos de
                              conhecimento.
                           </p>
                        </div>
                        <div className="carousel__cell number-slide">
                           <h3>
                              Dentro do fórum, eu consigo responder
                              questões relacionadas a qualquer matéria?
                           </h3>
                           <p>
                              Sim, com certeza! Dentro das ferramentas você pode
                              responder qualquer pergunta que já foi feita e assim compartilhar
                              informações e conteúdo.
                           </p>
                        </div>
                        <div className="carousel__cell number-slide">
                           <h3>Posso perguntar sobre qualquer matéria?</h3>
                           <p>
                              Sim, com certeza! Dentro das ferramentas você pode
                              fazer uma pergunta e responder outras, de diversas
                              matérias.
                           </p>
                        </div>
                        <div className="carousel__cell number-slide">
                           <h3>É difícil de usar?</h3>
                           <p>
                              Nem um pouco! A interação do site foi pensada para
                              ser prática e visual, independentemente do nível
                              de conhecimento do usuário.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </SlideFaq>
            <div className="contentImage column is-two-fifths">
               <img src={DuvidasEt} />
            </div>
         </div>
      </div>
   );
}
