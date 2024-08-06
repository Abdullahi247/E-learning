import {
  DualAppButtonContainer,
  MediaFileContainer,
} from "@/styles/bankForm.styles";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FormHeader } from "./extra";

export default function MediaFile({ step, setStep, uniqueId }: any) {
  const [bankStatement, setBankStatement] = useState(null);
  const [utilityBill, setUtilityBill] = useState(null);
  const [validId, setValidId] = useState(null);
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [certificateOfIncorp, setCertificateOfIncorp] = useState(null);

  const onFileChange = (e: any, mediaType: string) => {
    let file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      var image = new Image();
      if (typeof e?.target?.result === "string") {
        image.src = e?.target?.result;

        image.onload = function () {
          if (file.size < 1000000) {
            mediaType == "utility"
              ? setUtilityBill(file)
              : mediaType == "validId"
              ? setValidId(file)
              : mediaType == "passportPhoto"
              ? setPassportPhoto(file)
              : mediaType == "certificateOfIncorp"
              ? setCertificateOfIncorp(file)
              : setBankStatement(file);
          } else {
            mediaType == "utility"
              ? setUtilityBill(null)
              : mediaType == "validId"
              ? setValidId(null)
              : mediaType == "passportPhoto"
              ? setPassportPhoto(null)
              : mediaType == "certificateOfIncorp"
              ? setCertificateOfIncorp(null)
              : setBankStatement(null);
            toast.error("Ensure the image size below 10MB.", {
              position: "top-right",
            });
          }
        };
      } else {
        toast.error("Please select an image.", {
          position: "top-right",
        });
      }
    };
  };

  const handleProceed = () => {
    if (utilityBill && validId && passportPhoto && certificateOfIncorp) {
      setStep("STEP5");
    } else {
      toast.error("Please upload the necessary document", {
        position: "top-right",
      });
    }
  };

  return (
    <MediaFileContainer>
      <FormHeader header={"VALID DOCUMENTS"} />
      <div>
        <label>Utility Bill</label>
        <input
          id="file-upload"
          type="file"
          onChange={(e) => onFileChange(e, "utility")}
        />
      </div>
      <div>
        <label>
          Valid Id (Driver's License, International Passport, National Identity
          or Voter's Card)
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={(e) => onFileChange(e, "validId")}
        />
      </div>
      <div>
        <label>Passport Photograph</label>
        <input
          id="file-upload"
          type="file"
          onChange={(e) => onFileChange(e, "passportPhoto")}
        />
      </div>
      <div>
        <label>Bank Statement</label>
        <input id="file-upload" type="file" onChange={() => onFileChange()} />
      </div>
      <div>
        <label>Certificate of Incorporation (If applicable)</label>
        <input
          id="file-upload"
          type="file"
          onChange={(e) => onFileChange(e, "certificateOfIncorp")}
        />
      </div>
      <div className="mediaContainer">
        <DualAppButtonContainer>
          <button onClick={() => setStep("STEP4")}>Prev</button>
          <button onClick={handleProceed}>Next</button>
        </DualAppButtonContainer>
      </div>
    </MediaFileContainer>
  );
}
