import BankFooter from "@/components/bank/organization/bankFooter";
import BankformsHeader from "@/components/bank/organization/bankforms";
import BankMain from "@/components/bank/organization/bankMain";
import { BankFormContainer } from "@/styles/bankForm.styles";
import React from "react";

export default function BankForm() {
  return (
    <BankFormContainer>
      <BankformsHeader />
      <BankMain />
      <BankFooter />
    </BankFormContainer>
  );
}
