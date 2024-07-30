import Introduction, {
  ApplicationProcess,
  Footer,
  IntroHeader,
} from "@/components/about/about";
import React from "react";

export default function AboutLoanProgram() {
  return (
    <>
      <div style={{ backgroundColor: "white"}}>
        <IntroHeader />
        <Introduction />
        <ApplicationProcess />
        <Footer />
      </div>
    </>
  );
}
