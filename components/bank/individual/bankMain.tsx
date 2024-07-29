import React, { useState } from "react";
import Category, {
  AccountService,
  ContactDetails,
  EmploymentDetails,
  NextOfKin,
  PersonalInfo,
  Signatory,
  ValidIDentity,
} from "./extra";
import BusinessInformation, { BusinessManagement, FreeSpeech, LoanInformation } from "./sectionTwp";

export default function IndividualBankMain() {
  const [step, setStep] = useState("STEP1");
  return (
    <>
      {step == "STEP1" && (
        <Category step={step} setStep={(x: string) => setStep(x)} />
      )}
      {step == "STEP2" && <PersonalInfo step={step} setStep={(x: string) => setStep(x)} />}
      {step == "STEP3" && <ContactDetails step={step} setStep={(x: string) => setStep(x)} />}
      {step == "STEP4" && <ValidIDentity step={step} setStep={(x: string) => setStep(x)} />}
      {step == "STEP5" && <AccountService step={step} setStep={(x: string) => setStep(x)} />}
      {step == "STEP6" && <EmploymentDetails step={step} setStep={(x: string) => setStep(x)} />}
      {step == "STEP7" && <NextOfKin step={step} setStep={(x: string) => setStep(x)} />}
      {step == "STEP8" && <Signatory step={step} setStep={(x: string) => setStep(x)} />}
      {step == "STEP9" && <BusinessInformation step={step} setStep={(x: string) => setStep(x)} />}
      {step == "STEP10" && <BusinessManagement step={step} setStep={(x: string) => setStep(x)} />}
      {step == "STEP11" && <FreeSpeech step={step} setStep={(x: string) => setStep(x)} />}
      {step == "STEP12" && <LoanInformation step={step} setStep={(x: string) => setStep(x)} />}
    </>
  );
}
