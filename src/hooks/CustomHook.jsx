import { useState } from "react";

export const CustomHook = (steps) => {
  const [currentStep, setCurentStep] = useState(0);

  const changeStep = (i, e) => {
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurentStep(i);
  };

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isFirstStep: currentStep === 0 ? true : false,
    isLastStep: currentStep + 1 === steps.length ? true : false,
  };
};
