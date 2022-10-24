import { NextStep } from './NextStep'
import { PreviousStep } from './PreviousStep'

export function Buttons({handlePreviousStep,handleNextStep,textNextStep}) {
   return (
      <div className="is-flex is-justify-content-space-between mt-6">
         <NextStep text={textNextStep} onClick={handleNextStep} />
         <PreviousStep onClick={handlePreviousStep} />
      </div>
   );
}
