import { create } from 'zustand';

interface StepperState {
  currentStep: number;
  totalSteps: number;
  goNextStep: () => void;
  goPreviousStep: () => void;
  setTotalSteps: (steps: number) => void;
  resetStepper: () => void;
}

const useStepper = create<StepperState>((set) => ({
  currentStep: 1,
  totalSteps: 1,

  setTotalSteps: (steps: number) =>
    set((state) => ({
      totalSteps: steps,
    })),

  goNextStep: () =>
    set((state) => {
      const nextStep =
        state.currentStep < state.totalSteps
          ? state.currentStep + 1
          : state.currentStep;

      return {
        currentStep: nextStep,
      };
    }),

  goPreviousStep: () =>
    set((state) => {
      const prevStep =
        state.currentStep > 1 ? state.currentStep - 1 : state.currentStep;

      return {
        currentStep: prevStep,
      };
    }),

  resetStepper: () =>
    set((state) => ({
      currentStep: 1,
    })),
}));

export default useStepper;
