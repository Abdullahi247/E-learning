import { BankHeaderContainer } from "@/styles/bankForm.styles";
import Image from "next/image";
import React from "react";

export default function IndividualBankformsHeader() {
  return (
    <BankHeaderContainer>
      <Image src="/img/sage-gre.png" height={24} width={180} alt="Search icon" />
      
    </BankHeaderContainer>
  );
}
