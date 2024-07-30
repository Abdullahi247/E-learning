import {
  AccountServiceContainer,
  AppButtonContainer,
  CategoryContainer,
  ContactDetailsContainer,
  DualAppButtonContainer,
  EmploymentDetailsContainer,
  FormHeaderContainer,
  NextOfKinContainer,
  PersonalInfoContainer,
  ReuseableBoxFieldContainer,
  ReuseableFieldContainer,
  ValidDetailsContainer,
} from "@/styles/bankForm.styles";
import React, { useState } from "react";
import SignaturePadComponent from "@/components/bank/individual/signaturePad";
import toast from "react-hot-toast";

export default function Category({ step, setStep }: any) {
  const [categories, setCategories] = useState({
    bvn: "",
    accountType: "",
    accountTypeOther: "",
    accountCategory: "",
  });

  const handleProceed = () => {
    console.log(categories);
    const { accountType, accountTypeOther, accountCategory, bvn } = categories;
    if (
      bvn != "" &&
      accountCategory != "" &&
      (accountType == "SG Regular" ||
        accountType == "SG Priority" ||
        accountType == "SG Vendor Loan")
    ) {
      setStep("STEP2");
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  return (
    <CategoryContainer>
      <div className="slide-in">
        <div className="conts">
          <FormHeader header={"ACCOUNT OPENING FORM-INDIVIDUAL"} />
        </div>
        <div>
          <div className="titleHead">
            <h3>
              Category of account <span>*</span>
            </h3>
            <p>Please select one</p>
          </div>
          <div className="infoBox">
            <ReuseableBoxField
              value={categories?.accountCategory == "Individual" ? true : false}
              title={"Individual"}
              eventHandler={() =>
                setCategories({
                  ...categories,
                  accountCategory: "Individual",
                })
              }
            />
            <ReuseableBoxField
              value={categories?.accountCategory == "Joint" ? true : false}
              title={"Joint"}
              eventHandler={() =>
                setCategories({
                  ...categories,
                  accountCategory: "Joint",
                })
              }
            />
          </div>
        </div>
        <div>
          <div className="titleHead">
            <h3>
              Type of Account <span>*</span>
            </h3>
            <p>Please select one</p>
          </div>
          <div className="infoBox">
            {/* <ReuseableBoxField
              value={categories?.accountType == "SG Regular" ? true : false}
              title={"SG Regular"}
              eventHandler={() =>
                setCategories({
                  ...categories,
                  accountType: "SG Regular",
                })
              }
            /> */}
            {/* <ReuseableBoxField
              value={categories?.accountType == "SG Priority" ? true : false}
              title={"SG Priority"}
              eventHandler={() =>
                setCategories({
                  ...categories,
                  accountType: "SG Priority",
                })
              }
            /> */}
            <ReuseableBoxField
              value={categories?.accountType == "SG Vendor Loan" ? true : false}
              title={"SG Vendor Loan"}
              eventHandler={() =>
                setCategories({
                  ...categories,
                  accountType: "SG Vendor Loan",
                })
              }
            />
            {/* <ReuseableBoxField
              value={categories?.accountType == "Others" ? true : false}
              title={"Others"}
              eventHandler={() =>
                setCategories({
                  ...categories,
                  accountType: "Others",
                })
              }
            /> */}
          </div>
          {/* <div className="infoBox"> */}
          {categories?.accountType == "Others" && (
            <ReuseableField
              value={categories?.accountTypeOther}
              title={"Others"}
              placeholder={"Please specify acount Type"}
              eventHandler={(e) =>
                setCategories({
                  ...categories,
                  accountTypeOther: e,
                })
              }
            />
          )}
          {/* </div> */}
        </div>
        <br />
        <div>
          <ReuseableField
            value={categories?.bvn}
            title={
              <React.Fragment>
                Bank Verification Number <span>*</span>
              </React.Fragment>
            }
            type={"number"}
            placeholder={"Please insert your bank verification number (BVN)"}
            eventHandler={(e) =>
              setCategories({
                ...categories,
                bvn: e,
              })
            }
          />
        </div>

        <AppButtonContainer className="actionButton">
          <button onClick={handleProceed}>Proceed</button>
        </AppButtonContainer>
      </div>
    </CategoryContainer>
  );
}

export function PersonalInfo({ step, setStep }: any) {
  const [contentSwitch, setContentSwitch] = useState("STEP1");
  const [personalInfo, setPersonalInfo] = useState({
    title: "",
    bvn: "",
    surname: "",
    firstName: "",
    middleName: "",
    maritalStatus: "",
    maritalOther: "",
    sex: "",
    dob: "",
    socialMedia: "",
    motherMaidenName: "",
    stateOfOrigin: "",
    LGA: "",
    nationalityNonNigerian: "",
    residentPErmit: "",
    idIssueDate: "",
    idExpiryDate: "",
    dualCititzenshipStatus: "",
    dualCititzenshipData: "",
    usSocialSecurityNo: "",
    purposeOfAccount: "",
  });

  const handlePrev = () => {
    setStep("STEP1");
  };
  const handleProceed = () => {
    const {
      title,
      bvn,
      surname,
      firstName,
      middleName,
      maritalOther,
      maritalStatus,
      sex,
      dob,
      socialMedia,
      motherMaidenName,
    } = personalInfo;
    if (
      title != "" &&
      surname != "" &&
      middleName != "" &&
      (maritalStatus == "Single" || maritalStatus == "Married") &&
      sex != ""
    ) {
      setContentSwitch("STEP2");
    } else if (
      title != "" &&
      surname != "" &&
      middleName != "" &&
      maritalStatus == "Others" &&
      maritalOther != "" &&
      sex != ""
    ) {
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  const handleSecondProceed = () => {
    const {
      title,
      bvn,
      surname,
      firstName,
      middleName,
      maritalOther,
      maritalStatus,
      sex,
      dob,
      socialMedia,
      motherMaidenName,
      stateOfOrigin,
      LGA,
    } = personalInfo;

    if (
      dob != "" &&
      socialMedia != "" &&
      motherMaidenName != "" &&
      stateOfOrigin != "" &&
      LGA != ""
    ) {
      setContentSwitch("STEP3");
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  const handleThirdProceed = () => {
    const {
      nationalityNonNigerian,
      residentPErmit,
      idIssueDate,
      idExpiryDate,
      dualCititzenshipStatus,
      dualCititzenshipData,
      usSocialSecurityNo,
      purposeOfAccount,
    } = personalInfo;
    if (
      nationalityNonNigerian &&
      idIssueDate != "" &&
      idExpiryDate != "" &&
      dualCititzenshipStatus != "" &&
      usSocialSecurityNo != "" &&
      purposeOfAccount != ""
    ) {
      setStep("STEP3");
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  return (
    <PersonalInfoContainer>
      <div className="slide-in">
        <FormHeader header={"PERSONAL INFORMATION"} />

        <div>
          {contentSwitch == "STEP1" && (
            <div>
              <ReuseableField
                value={personalInfo?.title}
                title={
                  <React.Fragment>
                    Title <span>*</span>
                  </React.Fragment>
                }
                placeholder={"Your Title"}
                eventHandler={(e) =>
                  setPersonalInfo({ ...personalInfo, title: e })
                }
              />
              <ReuseableField
                value={personalInfo?.surname}
                title={
                  <React.Fragment>
                    Surname <span>*</span>
                  </React.Fragment>
                }
                placeholder={"Surname"}
                eventHandler={(e) =>
                  setPersonalInfo({ ...personalInfo, surname: e })
                }
              />
              <ReuseableField
                value={personalInfo?.firstName}
                title={
                  <React.Fragment>
                    Firstname <span>*</span>
                  </React.Fragment>
                }
                placeholder={"Firstname"}
                eventHandler={(e) =>
                  setPersonalInfo({ ...personalInfo, firstName: e })
                }
              />
              <ReuseableField
                value={personalInfo?.middleName}
                title={
                  <React.Fragment>
                    Middle Name <span>*</span>
                  </React.Fragment>
                }
                placeholder={"Middle Name"}
                eventHandler={(e) =>
                  setPersonalInfo({ ...personalInfo, middleName: e })
                }
              />
              <div>
                <div className="titleHead">
                  <h3>
                    Marital Status <span>*</span>
                  </h3>
                  <p>Please select one</p>
                </div>
                <div className="infoBox">
                  <ReuseableBoxField
                    value={
                      personalInfo?.maritalStatus == "Single" ? true : false
                    }
                    title={"Single"}
                    eventHandler={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        maritalStatus: "Single",
                      })
                    }
                  />
                  <ReuseableBoxField
                    value={
                      personalInfo?.maritalStatus == "Married" ? true : false
                    }
                    title={"Married"}
                    eventHandler={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        maritalStatus: "Married",
                      })
                    }
                  />
                  <ReuseableBoxField
                    value={
                      personalInfo?.maritalStatus == "Others" ? true : false
                    }
                    title={"Others"}
                    eventHandler={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        maritalStatus: "Others",
                      })
                    }
                  />
                </div>
              </div>
              {personalInfo?.maritalStatus == "Others" && (
                <ReuseableField
                  value={personalInfo?.maritalOther}
                  title={
                    <React.Fragment>
                      Marital Status <span>*</span>
                    </React.Fragment>
                  }
                  placeholder={"Marital Status"}
                  eventHandler={(e) =>
                    setPersonalInfo({ ...personalInfo, maritalOther: e })
                  }
                />
              )}
              <div>
                <div className="titleHead">
                  <h3>
                    Gender <span>*</span>
                  </h3>
                  <p>Please select one</p>
                </div>
                <div className="infoBox">
                  <ReuseableBoxField
                    value={personalInfo?.sex == "Male" ? true : false}
                    title={"Male"}
                    eventHandler={(e) =>
                      setPersonalInfo({ ...personalInfo, sex: "Male" })
                    }
                  />
                  <ReuseableBoxField
                    value={personalInfo?.sex == "Female" ? true : false}
                    title={"Female"}
                    eventHandler={(e) =>
                      setPersonalInfo({ ...personalInfo, sex: "Female" })
                    }
                  />
                </div>
              </div>

              <DualAppButtonContainer>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleProceed}>Next</button>
              </DualAppButtonContainer>
            </div>
          )}
          {contentSwitch == "STEP2" && (
            <div>
              <ReuseableField
                value={personalInfo?.dob}
                title={
                  <React.Fragment>
                    Date of Birth <span>*</span>
                  </React.Fragment>
                }
                placeholder={"Date of Birth"}
                eventHandler={(e) =>
                  setPersonalInfo({ ...personalInfo, dob: e })
                }
              />
              <ReuseableField
                value={personalInfo?.socialMedia}
                title={
                  <React.Fragment>
                    Social Media <span>*</span>
                  </React.Fragment>
                }
                placeholder={"Social Media"}
                eventHandler={(e) =>
                  setPersonalInfo({ ...personalInfo, socialMedia: e })
                }
              />
              <ReuseableField
                value={personalInfo?.motherMaidenName}
                title={
                  <React.Fragment>
                    Mothers Maiden Name <span>*</span>
                  </React.Fragment>
                }
                placeholder={"Mother's Maiden Name"}
                eventHandler={(e) =>
                  setPersonalInfo({ ...personalInfo, motherMaidenName: e })
                }
              />
              <ReuseableField
                value={personalInfo?.stateOfOrigin}
                title={
                  <React.Fragment>
                    State of Origin <span>*</span>
                  </React.Fragment>
                }
                placeholder={"State of Origin"}
                eventHandler={(e) =>
                  setPersonalInfo({ ...personalInfo, stateOfOrigin: e })
                }
              />
              <ReuseableField
                value={personalInfo?.LGA}
                title={
                  <React.Fragment>
                    L.G.A <span>*</span>
                  </React.Fragment>
                }
                placeholder={"L.G.A"}
                eventHandler={(e) =>
                  setPersonalInfo({ ...personalInfo, LGA: e })
                }
              />

              <DualAppButtonContainer>
                <button onClick={() => setContentSwitch("STEP1")}>Prev</button>
                <button onClick={handleSecondProceed}>Next</button>
              </DualAppButtonContainer>
            </div>
          )}

          {contentSwitch == "STEP3" && (
            <div>
              <ReuseableField
                value={personalInfo?.nationalityNonNigerian}
                title={
                  <React.Fragment>
                    Nationality for Non-Nigerians <span>*</span>
                  </React.Fragment>
                }
                placeholder={"Nationality for Non-Nigerians"}
                eventHandler={(e) =>
                  setPersonalInfo({
                    ...personalInfo,
                    nationalityNonNigerian: e,
                  })
                }
              />
              <ReuseableField
                value={personalInfo?.residentPErmit}
                title={
                  <React.Fragment>
                    {" "}
                    Resident Permit No. <span>*</span>
                  </React.Fragment>
                }
                placeholder={"Resident Permit No."}
                eventHandler={(e) =>
                  setPersonalInfo({ ...personalInfo, residentPErmit: e })
                }
              />
              <ReuseableField
                value={personalInfo?.idIssueDate}
                title={
                  <React.Fragment>
                    ID Issue Date <span>*</span>
                  </React.Fragment>
                }
                placeholder={"ID Issue Date"}
                eventHandler={(e) =>
                  setPersonalInfo({ ...personalInfo, idIssueDate: e })
                }
              />
              <ReuseableField
                value={personalInfo?.idExpiryDate}
                title={
                  <React.Fragment>
                    ID Expiry Date <span>*</span>
                  </React.Fragment>
                }
                placeholder={"ID Expiry Date"}
                eventHandler={(e) =>
                  setPersonalInfo({ ...personalInfo, idExpiryDate: e })
                }
              />
              <div>
              <div className="titleHead">
                  <h3>
                    Do you have dual citizenship <span>*</span>
                  </h3>
                  <p>Please select one</p>
                </div>
                <div className="infoBox">
                  <ReuseableBoxField
                    value={
                      personalInfo?.dualCititzenshipStatus == "Yes"
                        ? true
                        : false
                    }
                    title={"Yes"}
                    eventHandler={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        dualCititzenshipStatus: "Yes",
                      })
                    }
                  />
                  <ReuseableBoxField
                    value={
                      personalInfo?.dualCititzenshipStatus == "No"
                        ? true
                        : false
                    }
                    title={"No"}
                    eventHandler={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        dualCititzenshipStatus: "No",
                      })
                    }
                  />
                </div>
                {personalInfo?.dualCititzenshipStatus == "Yes" && (
                  <ReuseableField
                    value={personalInfo?.dualCititzenshipData}
                    title={"Specify Cititzenship"}
                    placeholder={"Specify Cititzenship"}
                    eventHandler={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        dualCititzenshipData: e,
                      })
                    }
                  />
                )}
              </div>
              <ReuseableField
                value={personalInfo?.usSocialSecurityNo}
                title={
                  "If US Citizen/Resident, please provide Social Security No"
                }
                placeholder={
                  "If US Citizen/Resident, please provide Social Security No"
                }
                eventHandler={(e) =>
                  setPersonalInfo({
                    ...personalInfo,
                    usSocialSecurityNo: e,
                  })
                }
              />
              <ReuseableField
                value={personalInfo?.purposeOfAccount}
                title={
                  <React.Fragment>
                    Purpose of Account <span>*</span>
                  </React.Fragment>
                }
                placeholder={"Purpose of Account"}
                eventHandler={(e) =>
                  setPersonalInfo({
                    ...personalInfo,
                    purposeOfAccount: e,
                  })
                }
              />
              <DualAppButtonContainer>
                <button onClick={() => setContentSwitch("STEP2")}>Prev</button>
                <button onClick={handleThirdProceed}>Next</button>
              </DualAppButtonContainer>
            </div>
          )}
        </div>
      </div>
    </PersonalInfoContainer>
  );
}
export function ContactDetails({ step, setStep }: any) {
  const [contactDetails, setContactDetails] = useState({
    houseNumber: "",
    streeetName: "",
    landmarkorBustStop: "",
    cityOrTown: "",
    lga: "",
    state: "",
    email: "",
    phoneOne: "",
    phoneTwo: "",
  });

  const handleProceed = () => {
    const {
      houseNumber,
      streeetName,
      landmarkorBustStop,
      cityOrTown,
      lga,
      state,
      email,
      phoneOne,
      phoneTwo,
    } = contactDetails;

    if (
      houseNumber != "" &&
      streeetName != "" &&
      landmarkorBustStop != "" &&
      cityOrTown != "" &&
      lga != "" &&
      state != "" &&
      email != "" &&
      phoneOne != "" &&
      phoneTwo != ""
    ) {
      setStep("STEP4");
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  return (
    <ContactDetailsContainer>
      {" "}
      <FormHeader header={"CONTACT DETAILS"} />
      <div>
      <div className="titleHead">
          <h3>Residential Address</h3>
          <p>Please select one</p>
        </div>
        <ReuseableField
          value={contactDetails?.houseNumber}
          title={"House Number"}
          placeholder={"House Number"}
          eventHandler={(e) =>
            setContactDetails({
              ...contactDetails,
              houseNumber: e,
            })
          }
        />
        <ReuseableField
          value={contactDetails?.streeetName}
          title={"Street Name"}
          placeholder={"Street Name"}
          eventHandler={(e) =>
            setContactDetails({
              ...contactDetails,
              streeetName: e,
            })
          }
        />
        <ReuseableField
          value={contactDetails?.landmarkorBustStop}
          title={"Landmark / Nearest Bus-stop"}
          placeholder={"Landmark / Nearest Bus-stop"}
          eventHandler={(e) =>
            setContactDetails({
              ...contactDetails,
              landmarkorBustStop: e,
            })
          }
        />
        <ReuseableField
          value={contactDetails?.cityOrTown}
          title={"City/Town"}
          placeholder={"City/Town"}
          eventHandler={(e) =>
            setContactDetails({
              ...contactDetails,
              cityOrTown: e,
            })
          }
        />
        <ReuseableField
          value={contactDetails?.lga}
          title={"L.G.A"}
          placeholder={"L.G.A"}
          eventHandler={(e) =>
            setContactDetails({
              ...contactDetails,
              lga: e,
            })
          }
        />
        <ReuseableField
          value={contactDetails?.state}
          title={"State"}
          placeholder={"State"}
          eventHandler={(e) =>
            setContactDetails({
              ...contactDetails,
              state: e,
            })
          }
        />
        <ReuseableField
          value={contactDetails?.email}
          title={"E-mail Address"}
          placeholder={"E-mail Address"}
          eventHandler={(e) =>
            setContactDetails({
              ...contactDetails,
              email: e,
            })
          }
        />
        <ReuseableField
          value={contactDetails?.phoneOne}
          title={"Mobile No. (1)"}
          placeholder={"Mobile No. (1)"}
          eventHandler={(e) =>
            setContactDetails({
              ...contactDetails,
              phoneOne: e,
            })
          }
        />
        <ReuseableField
          value={contactDetails?.phoneTwo}
          title={"Mobile No. (2)"}
          placeholder={"Mobile No. (2)"}
          eventHandler={(e) =>
            setContactDetails({
              ...contactDetails,
              phoneTwo: e,
            })
          }
        />
        <DualAppButtonContainer>
          <button onClick={() => setStep("STEP2")}>Prev</button>
          <button onClick={handleProceed}>Next</button>
        </DualAppButtonContainer>
      </div>
    </ContactDetailsContainer>
  );
}
export function ValidIDentity({ step, setStep }: any) {
  const [validIdentity, setValidIdentity] = useState({
    licenseType: "",
    otherLicense: "",
    idNumber: "",
    idIssueDate: "",
    idExpiryDate: "",
  });

  const handleProceed = () => {
    const { licenseType, otherLicense, idNumber, idIssueDate, idExpiryDate } =
      validIdentity;
    if (
      licenseType != "" &&
      idNumber != "" &&
      idIssueDate != "" &&
      idExpiryDate != ""
    ) {
      setStep("STEP5");
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  return (
    <ValidDetailsContainer>
      {" "}
      <FormHeader header={"VALID MEANS OF IDENTIFICATION"} />
      <div>
        <div className="titleHead">
          <h3>Valid ID Card</h3>
          <p>Please select one</p>
        </div>
        <div className="infoBox">
          <ReuseableBoxField
            value={
              validIdentity?.licenseType == "Driver License" ? true : false
            }
            title={"Driver's License"}
            eventHandler={(e) =>
              setValidIdentity({
                ...validIdentity,
                licenseType: "Driver License",
              })
            }
          />
          <ReuseableBoxField
            value={validIdentity?.licenseType == "Voter Card" ? true : false}
            title={"Voter's Card"}
            eventHandler={(e) =>
              setValidIdentity({
                ...validIdentity,
                licenseType: "Voter Card",
              })
            }
          />
          <ReuseableBoxField
            value={validIdentity?.licenseType == "National ID" ? true : false}
            title={"National ID"}
            eventHandler={(e) =>
              setValidIdentity({
                ...validIdentity,
                licenseType: "National ID",
              })
            }
          />
          <ReuseableBoxField
            value={
              validIdentity?.licenseType == "International Passport"
                ? true
                : false
            }
            title={"International Passport"}
            eventHandler={(e) =>
              setValidIdentity({
                ...validIdentity,
                licenseType: "International Passport",
              })
            }
          />
        </div>
        <ReuseableBoxField
          value={validIdentity?.licenseType == "Other" ? true : false}
          title={"Other (Id Type)"}
          eventHandler={(e) =>
            setValidIdentity({
              ...validIdentity,
              licenseType: "Other",
            })
          }
        />
        {validIdentity?.licenseType == "Other" && (
          <ReuseableField
            value={validIdentity?.otherLicense}
            title={"Specify Valid ID"}
            placeholder={"Specify Valid Means of Id Type"}
            eventHandler={(e) =>
              setValidIdentity({
                ...validIdentity,
                otherLicense: e,
              })
            }
          />
        )}
      </div>
      <ReuseableField
        value={validIdentity?.idNumber}
        title={"ID Number"}
        placeholder={"ID Number"}
        eventHandler={(e) =>
          setValidIdentity({
            ...validIdentity,
            idNumber: e,
          })
        }
      />
      <ReuseableField
        value={validIdentity?.idIssueDate}
        title={"ID Issue Date"}
        placeholder={"ID Issue Date"}
        eventHandler={(e) =>
          setValidIdentity({
            ...validIdentity,
            idIssueDate: e,
          })
        }
      />
      <ReuseableField
        value={validIdentity?.idExpiryDate}
        title={"ID Expiry Date"}
        placeholder={"ID Expiry Date"}
        eventHandler={(e) =>
          setValidIdentity({
            ...validIdentity,
            idExpiryDate: e,
          })
        }
      />
      <DualAppButtonContainer>
        <button onClick={() => setStep("STEP3")}>Prev</button>
        <button onClick={handleProceed}>Next</button>
      </DualAppButtonContainer>
    </ValidDetailsContainer>
  );
}

export function AccountService({ step, setStep }: any) {
  const [accountService, setAccountService] = useState({
    bankingPreference: "",
    username: "",
  });

  const handleProceed = () => {
    const { bankingPreference, username } = accountService;
    if (bankingPreference != "" && username != "") {
      setStep("STEP6");
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  return (
    <AccountServiceContainer>
      {" "}
      <FormHeader
        header={"ACCOUNT SERVICE(S)REQUIRED (please tick option below)"}
      />
      <div>
        <div className="titleHead">
          <h3>Electronic Banking Preference</h3>
          <p>Please select one</p>
        </div>
        <div className="infoBox">
          <ReuseableBoxField
            value={
              accountService?.bankingPreference == "Internet Banking"
                ? true
                : false
            }
            title={"Internet Banking"}
            eventHandler={(e) =>
              setAccountService({
                ...accountService,
                bankingPreference: "Internet Banking",
              })
            }
          />
          <ReuseableBoxField
            value={
              accountService?.bankingPreference == "Mobile Banking"
                ? true
                : false
            }
            title={"Mobile Banking"}
            eventHandler={(e) =>
              setAccountService({
                ...accountService,
                bankingPreference: "Mobile Banking",
              })
            }
          />
        </div>
        <ReuseableField
          value={accountService?.username}
          title={"Username"}
          placeholder={"Username"}
          eventHandler={(e) =>
            setAccountService({
              ...accountService,
              username: e,
            })
          }
        />
        <DualAppButtonContainer>
          <button onClick={() => setStep("STEP4")}>Prev</button>
          <button onClick={handleProceed}>Next</button>
        </DualAppButtonContainer>
      </div>
    </AccountServiceContainer>
  );
}

export function EmploymentDetails({ step, setStep }: any) {
  const [internalStep, setInternalStep] = useState("STEP1");
  const [employmentDetails, setEmploymentDetails] = useState({
    employmentStatus: "",
    employmentStatusData: "",
    email: "",
    annualSalary: "",
    houseNumber: "",
    streetName: "",
    busStop: "",
    city: "",
    lga: "",
    state: "",
    officialMobileNo: "",
    mobileNo: "",
  });

  const handleProceed = () => {
    const {
      employmentStatus,
      employmentStatusData,
      email,
      annualSalary,
      houseNumber,
      streetName,
      busStop,
      city,
      lga,
      state,
      officialMobileNo,
      mobileNo,
    } = employmentDetails;

    if (employmentStatus != "" && annualSalary != "") {
      setInternalStep("STEP2");
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  const handleSecondProceed = () => {
    const {
      employmentStatus,
      employmentStatusData,
      email,
      annualSalary,
      houseNumber,
      streetName,
      busStop,
      city,
      lga,
      state,
      officialMobileNo,
      mobileNo,
    } = employmentDetails;

    if (
      houseNumber != "" &&
      streetName != "" &&
      busStop != "" &&
      busStop != "" &&
      city != "" &&
      lga != "" &&
      state != "" &&
      officialMobileNo != "" &&
      mobileNo != ""
    ) {
      setStep("STEP7");
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  return (
    <EmploymentDetailsContainer>
      {" "}
      <FormHeader header={"EMPLOYMENT DETAILS"} />
      {internalStep == "STEP1" ? (
        <>
          <div>
            <div className="titleHead">
              <h3>Employment Status</h3>
              <p>Please select one</p>
            </div>
            <div className="infoBox">
              <ReuseableBoxField
                value={
                  employmentDetails?.employmentStatus == "Employed"
                    ? true
                    : false
                }
                title={"Employed"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    employmentStatus: "Employed",
                  })
                }
              />
              <ReuseableBoxField
                value={
                  employmentDetails?.employmentStatus == "Self Employed"
                    ? true
                    : false
                }
                title={"Self Employed"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    employmentStatus: "Self Employed",
                  })
                }
              />
              <ReuseableBoxField
                value={
                  employmentDetails?.employmentStatus == "Unemployed"
                    ? true
                    : false
                }
                title={"Unemployed"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    employmentStatus: "Unemployed",
                  })
                }
              />
              <ReuseableBoxField
                value={
                  employmentDetails?.employmentStatus == "Student"
                    ? true
                    : false
                }
                title={"Student"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    employmentStatus: "Student",
                  })
                }
              />
              <ReuseableBoxField
                value={
                  employmentDetails?.employmentStatus == "Retired"
                    ? true
                    : false
                }
                title={"Retired"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    employmentStatus: "Retired",
                  })
                }
              />
              <ReuseableBoxField
                value={
                  employmentDetails?.employmentStatus == "Others" ? true : false
                }
                title={"Others"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    employmentStatus: "Others",
                  })
                }
              />
            </div>
            <br />
            {employmentDetails?.employmentStatus == "Others" && (
              <ReuseableField
                value={employmentDetails?.employmentStatusData}
                title={"Others (Specify)"}
                placeholder={
                  "Please specify your employment details, if not listed above"
                }
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    employmentStatusData: e,
                  })
                }
              />
            )}
            <br />
          </div>
          <div>
          <div className="titleHead">
              <h3>Annual Salary / Expected Annual Income</h3>
              <p>Please select one</p>
            </div>
            <br />
            <div className="infoBox">
              <ReuseableBoxField
                value={
                  employmentDetails?.annualSalary == "under50" ? true : false
                }
                title={"₦0-₦ 50,000"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    annualSalary: "under50",
                  })
                }
              />
              <ReuseableBoxField
                value={
                  employmentDetails?.annualSalary == "50kTo250k" ? true : false
                }
                title={" ₦ 51,000-₦ 250,000 "}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    annualSalary: "50kTo250k",
                  })
                }
              />
            </div>
            <br />
            <div className="infoBox">
              <ReuseableBoxField
                value={
                  employmentDetails?.annualSalary == "250kTo500k" ? true : false
                }
                title={" ₦ 251,000-₦ 500,000"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    annualSalary: "250kTo500k",
                  })
                }
              />
              <ReuseableBoxField
                value={
                  employmentDetails?.annualSalary == "500kTo1m" ? true : false
                }
                title={"₦ 501,000-Less than₦ 1,000,000"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    annualSalary: "500kTo1m",
                  })
                }
              />
            </div>
            <br />
            <div className="infoBox">
              <ReuseableBoxField
                value={
                  employmentDetails?.annualSalary == "1mTo5m" ? true : false
                }
                title={"₦ 1milion-Less than ₦ 5milion"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    annualSalary: "1mTo5m",
                  })
                }
              />
              <ReuseableBoxField
                value={
                  employmentDetails?.annualSalary == "5mTo10m" ? true : false
                }
                title={" ₦ 5million- Less-than ₦ 10million"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    annualSalary: "5mTo10m",
                  })
                }
              />
            </div>
            <br />
            <div className="infoBox">
              <ReuseableBoxField
                value={
                  employmentDetails?.annualSalary == "10mTo20m" ? true : false
                }
                title={" ₦ 10million-Lessthan₦ 20million"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    annualSalary: "10mTo20m",
                  })
                }
              />
              <ReuseableBoxField
                value={
                  employmentDetails?.annualSalary == "above20m" ? true : false
                }
                title={" Above ₦ 20million"}
                eventHandler={(e) =>
                  setEmploymentDetails({
                    ...employmentDetails,
                    annualSalary: "above20m",
                  })
                }
              />
            </div>
          </div>
          <DualAppButtonContainer>
            <button onClick={() => setStep("STEP5")}>Prev</button>
            <button onClick={handleProceed}>Next</button>
          </DualAppButtonContainer>
        </>
      ) : (
        <div>
          <div className="titleHead">
            <h3>Employer Address </h3>
            <p>Please select one</p>
          </div>
          <div>
            <ReuseableField
              value={employmentDetails?.houseNumber}
              title={"House Number"}
              placeholder={"House Number"}
              eventHandler={(e) =>
                setEmploymentDetails({
                  ...employmentDetails,
                  houseNumber: e,
                })
              }
            />
            <ReuseableField
              value={employmentDetails?.streetName}
              title={"Street Name"}
              placeholder={"Street Name"}
              eventHandler={(e) =>
                setEmploymentDetails({
                  ...employmentDetails,
                  streetName: e,
                })
              }
            />
            <ReuseableField
              value={employmentDetails?.busStop}
              title={"Landmark / Nearest Bus-stop"}
              placeholder={"Landmark / Nearest Bus-stop"}
              eventHandler={(e) =>
                setEmploymentDetails({
                  ...employmentDetails,
                  busStop: e,
                })
              }
            />
            <ReuseableField
              value={employmentDetails?.city}
              title={"City/Town"}
              placeholder={"City/Town"}
              eventHandler={(e) =>
                setEmploymentDetails({
                  ...employmentDetails,
                  city: e,
                })
              }
            />
            <ReuseableField
              value={employmentDetails?.lga}
              title={"L.G.A"}
              placeholder={"L.G.A"}
              eventHandler={(e) =>
                setEmploymentDetails({
                  ...employmentDetails,
                  lga: e,
                })
              }
            />
            <ReuseableField
              value={employmentDetails?.state}
              title={"State"}
              placeholder={"State"}
              eventHandler={(e) =>
                setEmploymentDetails({
                  ...employmentDetails,
                  state: e,
                })
              }
            />
            <ReuseableField
              value={employmentDetails?.email}
              title={"E-mail Address"}
              placeholder={"E-mail Address"}
              eventHandler={(e) =>
                setEmploymentDetails({
                  ...employmentDetails,
                  email: e,
                })
              }
            />
            <ReuseableField
              value={employmentDetails?.officialMobileNo}
              title={"Mobile No. (1)"}
              placeholder={"Mobile No. (1)"}
              eventHandler={(e) =>
                setEmploymentDetails({
                  ...employmentDetails,
                  officialMobileNo: e,
                })
              }
            />
            <ReuseableField
              value={employmentDetails?.mobileNo}
              title={"Mobile No. (2)"}
              placeholder={"Mobile No. (2)"}
              eventHandler={(e) =>
                setEmploymentDetails({
                  ...employmentDetails,
                  mobileNo: e,
                })
              }
            />
          </div>
          <DualAppButtonContainer>
            <button onClick={() => setStep("STEP5")}>Prev</button>
            <button onClick={handleSecondProceed}>Next</button>
          </DualAppButtonContainer>
        </div>
      )}
    </EmploymentDetailsContainer>
  );
}
export function NextOfKin({ step, setStep }: any) {
  const [internalStep, setInternalStep] = useState("STEP1");
  const [nextOfKin, setNextOfKin] = useState({
    title: "",
    surname: "",
    firstName: "",
    middleName: "",
    maritalStatus: "",
    maritalOther: "",
    sex: "",
    houseNumber: "",
    streeetName: "",
    landmarkorBustStop: "",
    cityOrTown: "",
    lga: "",
    state: "",
    email: "",
  });

  const handlePrev = () => {
    setStep(6);
  };
  const handleProceed = () => {
    const {
      title,
      surname,
      firstName,
      middleName,
      maritalStatus,
      maritalOther,
      sex,
      houseNumber,
      landmarkorBustStop,
      cityOrTown,
      lga,
      state,
      email,
    } = nextOfKin;
    if (title != "" && surname != "" && middleName != "" && firstName != "") {
      setInternalStep("STEP2");
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  const handleSecondProceed = () => {
    const {
      title,
      surname,
      firstName,
      middleName,
      maritalStatus,
      maritalOther,
      sex,
      houseNumber,
      landmarkorBustStop,
      cityOrTown,
      lga,
      state,
      email,
    } = nextOfKin;
    if (sex != "" && houseNumber != "" && landmarkorBustStop != "") {
      setStep("STEP8");
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  return (
    <NextOfKinContainer>
      {" "}
      <FormHeader header={"DETAILS OF NEXT OFKIN"} />
      <div>
        {internalStep === "STEP1" ? (
          <div>
            <ReuseableField
              value={nextOfKin?.title}
              title={
                <React.Fragment>
                  Title <span>*</span>
                </React.Fragment>
              }
              placeholder={"Your Title"}
              eventHandler={(e) => setNextOfKin({ ...nextOfKin, title: e })}
            />
            <ReuseableField
              value={nextOfKin?.surname}
              title={
                <React.Fragment>
                  Surname <span>*</span>
                </React.Fragment>
              }
              placeholder={"Surname"}
              eventHandler={(e) => setNextOfKin({ ...nextOfKin, surname: e })}
            />
            <ReuseableField
              value={nextOfKin?.firstName}
              title={
                <React.Fragment>
                  Firstname <span>*</span>
                </React.Fragment>
              }
              placeholder={"Firstname"}
              eventHandler={(e) => setNextOfKin({ ...nextOfKin, firstName: e })}
            />
            <ReuseableField
              value={nextOfKin?.middleName}
              title={
                <React.Fragment>
                  Middle Name <span>*</span>
                </React.Fragment>
              }
              placeholder={"Middle Name"}
              eventHandler={(e) =>
                setNextOfKin({ ...nextOfKin, middleName: e })
              }
            />
            <div>
              <div className="titleHead">
                <h3>
                  Marital Status <span>*</span>
                </h3>
                <p>Please select one</p>
              </div>
              <div className="infoBox">
                <ReuseableBoxField
                  value={nextOfKin?.maritalStatus == "Single" ? true : false}
                  title={"Single"}
                  eventHandler={(e) =>
                    setNextOfKin({ ...nextOfKin, maritalStatus: "Single" })
                  }
                />
                <ReuseableBoxField
                  value={nextOfKin?.maritalStatus == "Married" ? true : false}
                  title={"Married"}
                  eventHandler={(e) =>
                    setNextOfKin({ ...nextOfKin, maritalStatus: "Married" })
                  }
                />
                <ReuseableBoxField
                  value={nextOfKin?.maritalStatus == "Others" ? true : false}
                  title={"Others"}
                  eventHandler={(e) =>
                    setNextOfKin({ ...nextOfKin, maritalStatus: "Others" })
                  }
                />
              </div>
            </div>
            {nextOfKin?.maritalStatus == "Others" && (
              <ReuseableField
                value={nextOfKin?.maritalOther}
                title={
                  <React.Fragment>
                    Marital Status <span>*</span>
                  </React.Fragment>
                }
                placeholder={"Marital Status"}
                eventHandler={(e) =>
                  setNextOfKin({ ...nextOfKin, maritalOther: e })
                }
              />
            )}
            <div>
              <div className="titleHead">
                <h3>
                  Gender <span>*</span>
                </h3>
                <p>Please select one</p>
              </div>
              <div className="infoBox">
                <ReuseableBoxField
                  value={nextOfKin?.sex == "Male" ? true : false}
                  title={"Male"}
                  eventHandler={(e) =>
                    setNextOfKin({ ...nextOfKin, sex: "Male" })
                  }
                />
                <ReuseableBoxField
                  value={nextOfKin?.sex == "Female" ? true : false}
                  title={"Female"}
                  eventHandler={(e) =>
                    setNextOfKin({ ...nextOfKin, sex: "Female" })
                  }
                />
              </div>
            </div>

            <DualAppButtonContainer>
              <button onClick={handlePrev}>Prev</button>
              <button onClick={handleProceed}>Next</button>
            </DualAppButtonContainer>
          </div>
        ) : (
          <div>
            <div className="titleHead">
              <h3>Residential Address</h3>
              <p>Please select one</p>
            </div>
            <ReuseableField
              value={nextOfKin?.houseNumber}
              title={"House Number"}
              placeholder={"House Number"}
              eventHandler={(e) =>
                setNextOfKin({ ...nextOfKin, houseNumber: e })
              }
            />
            <ReuseableField
              value={nextOfKin?.streeetName}
              title={"Street Name"}
              placeholder={"Street Name"}
              eventHandler={(e) =>
                setNextOfKin({ ...nextOfKin, streeetName: e })
              }
            />
            <ReuseableField
              value={nextOfKin?.landmarkorBustStop}
              title={"Landmark / Nearest Bus-stop"}
              placeholder={"Landmark / Nearest Bus-stop"}
              eventHandler={(e) =>
                setNextOfKin({ ...nextOfKin, landmarkorBustStop: e })
              }
            />
            <ReuseableField
              value={nextOfKin?.cityOrTown}
              title={"City/Town"}
              placeholder={"City/Town"}
              eventHandler={(e) =>
                setNextOfKin({ ...nextOfKin, cityOrTown: e })
              }
            />
            <ReuseableField
              value={nextOfKin?.lga}
              title={"L.G.A"}
              placeholder={"L.G.A"}
              eventHandler={(e) => setNextOfKin({ ...nextOfKin, lga: e })}
            />
            <ReuseableField
              value={nextOfKin?.state}
              title={"State"}
              placeholder={"State"}
              eventHandler={(e) => setNextOfKin({ ...nextOfKin, state: e })}
            />
            <ReuseableField
              value={nextOfKin?.email}
              title={"E-mail Address"}
              placeholder={"E-mail Address"}
              eventHandler={(e) => setNextOfKin({ ...nextOfKin, email: e })}
            />

            <DualAppButtonContainer>
              <button onClick={() => setInternalStep('STEP1')}>Prev</button>
              <button onClick={handleSecondProceed}>Next</button>
            </DualAppButtonContainer>
          </div>
        )}
      </div>
    </NextOfKinContainer>
  );
}

export function Signatory({ step, setStep }: any) {
  return (
    <>
      <SignaturePadComponent setStep={() => setStep("STEP9")} />
    </>
  );
}

interface ReusableFieldProps {
  title?: any;
  eventHandler: (event?: any) => void;
  value: any;
  placeholder?: any;
  type?: any;
}

export function ReuseableField({
  title,
  eventHandler,
  value,
  placeholder,
  type,
}: ReusableFieldProps) {
  return (
    <ReuseableFieldContainer>
      <label>{title}</label>
      <input
        type={type ? type : "string"}
        placeholder={placeholder}
        onChange={(e) => eventHandler(e.target.value)}
        value={value}
      />
    </ReuseableFieldContainer>
  );
}

export function ReuseableBoxField({
  title,
  eventHandler,
  value,
}: ReusableFieldProps) {
  return (
    <ReuseableBoxFieldContainer>
      <input type="checkbox" onClick={eventHandler} checked={value} />
      <label>{title}</label>
    </ReuseableBoxFieldContainer>
  );
}

export function FormHeader({ header }:any) {
  return (
    <FormHeaderContainer>
      <h3>{header}</h3>
    </FormHeaderContainer>
  );
}
