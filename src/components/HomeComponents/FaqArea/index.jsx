import { useState } from "react";
import { SlideFaq } from "./styles";
import DuvidasEt from "../../../assets/images/duvidas-frequentes.png";
/* Slider */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export function FaqArea() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

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
      <div className="columns" style={{ height: "100%" }}>
        <SlideFaq className="column is-three-fifths ">
          <div className="container-slider">
            <div className="navigation-wrapper">
              <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                  <div className="content-text">
                     <h3>
                     As matérias estão completas?
                     </h3>
                     <p>Os materiais didáticos estão sempre sendo atualizados e estão todos completos, com todas as informações para a qualidade do seu estudo.</p>
                  </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                  <div className="content-text">
                     <h3>
                     Qual a importância de um fórum de estudo? 
                     </h3>
                     <p>
                     Por meio dessa ferramenta, os alunos têm a oportunidade de compartilhar as suas dúvidas, ajudar a solucionar os questionamentos dos colegas e a construir, coletivamente, vários tipos de conhecimento.
                     </p>
                  </div>
                </div>
                <div className="keen-slider__slide number-slide3">
                  <div className="content-text">
                     <h3>
                     Dentro do fórum, eu consigo responder questões relacionadas a qualquer matéria?
                     </h3>
                     <p>
                     Sim, com certeza! Dentro das ferramentas você pode responder qualquer pergunta que já foi feita e assim compartilhar informações e conteúdo.
                     </p>
                  </div>
                </div>
                <div className="keen-slider__slide number-slide4">
                  <div className="content-text">
                     <h3>
                     Posso perguntar sobre qualquer matéria?
                     </h3>
                     <p>
                     Sim, com certeza! Dentro das ferramentas você pode fazer uma pergunta e responder outras, de diversas matérias.
                     </p>
                  </div>
                </div>
                <div className="keen-slider__slide number-slide5">
                  <div className="content-text">
                     <h3>
                     É difícil de usar?
                     </h3>
                     <p>
                     Nem um pouco! A interação do site foi pensada para ser prática e visual, independentemente do nível de conhecimento do usuário.
                     </p>
                  </div>
                </div>
              </div>
              {loaded && instanceRef.current && (
                <>
                  <Arrow
                    left
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                  />

                  <Arrow
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}
            </div>
            {loaded && instanceRef.current && (
              <div className="dots">
                {[
                  ...Array(
                    instanceRef.current.track.details.slides.length
                  ).keys(),
                ].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx);
                      }}
                      className={
                        "dot" + (currentSlide === idx ? " active" : "")
                      }
                    ></button>
                  );
                })}
              </div>
            )}
          </div>
        </SlideFaq>
        <div className="contentImage column is-two-fifths">
          <img src={DuvidasEt} />
        </div>
      </div>
    </div>
  );
}
