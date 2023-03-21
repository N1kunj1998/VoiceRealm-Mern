import React, {useState} from 'react'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
};

const Authenticate = () => {
    const [stepIdx, setStepIdx] = useState(1);
    const Step = steps[stepIdx];
    
    function onNext() {
        setStepIdx(stepIdx + 1);
    }
  return (
    <Step onNext={onNext} />
  )
}

export default Authenticate