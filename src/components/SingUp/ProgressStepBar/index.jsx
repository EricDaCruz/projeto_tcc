import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { CircleProgressBar } from "./styles";

export const ProgressStepBar = ({currentStep}) => {
    const step =  currentStep * 25

   return (
      <div className="mb-6">
         <ProgressBar
            percent={step}
            filledBackground="#188F67"
         >
            <Step transition="scale">
               {({ accomplished }) => (
                
                    <CircleProgressBar
                    style={{ background: `${accomplished ? "#188F67" : "#E5E5E5"}`}}
                    >
                        1
                    </CircleProgressBar>
               )}
            </Step>
            <Step transition="scale">
               {({ accomplished }) => (
                    <CircleProgressBar
                    style={{ background: `${accomplished ? "#188F67" : "#E5E5E5   "}`}}
                    >
                        2
                    </CircleProgressBar>
               )}
            </Step>
            <Step transition="scale">
               {({ accomplished }) => (
                    <CircleProgressBar
                    style={{ background: `${accomplished ? "#188F67" : "#E5E5E5   "}`}}
                    >
                        3
                    </CircleProgressBar>
               )}
            </Step>
            <Step transition="scale">
               {({ accomplished }) => (
                    <CircleProgressBar
                    style={{ background: `${accomplished ? "#188F67" : "#E5E5E5   "}`}}
                    >
                        4
                    </CircleProgressBar>
               )}
            </Step>
         </ProgressBar>
      </div>
   );
};
