import { useState } from "react";
import Form1 from "../../components/Form1";
import Form2 from "../../components/Form2";

const Report = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    } else {
      setStep(4);
    }
  };

  const handleFormSubmit = (data: any) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  switch (step) {
    case 1:
      return <Form1 onSubmit={handleFormSubmit} />;
    case 2:
      return <Form2 onSubmit={handleFormSubmit} />;
    // case 3:
    //   return <Form3 onSubmit={handleFormSubmit} />;
    // default:
    //   return <ThankYouScreen />;
  }
};

export default Report;
