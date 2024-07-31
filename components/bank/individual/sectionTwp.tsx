import React, { useState } from "react";
import { FormHeader, ReuseableField } from "./extra";
import {
  DualAppButtonContainer,
  FormHeaderContainer,
  Modal,
  ModalContainer,
  ModalTable,
} from "@/styles/bankForm.styles";
import toast from "react-hot-toast";
import axios from "axios";
import { config } from "@/components/utils/color";

const bizType = [
  "individual/sole proprietorship",
  "Joint Venture/Partnership",
  "Limited Liability Company",
  "Associations",
  "Others",
];
const onLineVendor = ["Online", "physical store", "Hybrid"];

export default function BusinessInformation({ step, setStep, uniqueId }: any) {
  const [businessInfo, setBusinessInfo] = useState({
    businessName: "",
    registeredEmail: "",
    businessAddress: "",
    businessType: "",
    businessLifeCycle: "",
  });

  const handleProceed = async () => {
    const {
      businessName,
      registeredEmail,
      businessAddress,
      businessType,
      businessLifeCycle,
    } = businessInfo;
    if (
      businessName != "" &&
      registeredEmail != "" &&
      businessAddress != "" &&
      businessType != "" &&
      businessLifeCycle != ""
    ) {
      await axios
        .post(`${config.liveUrl}/sage-bank/BusinessInformation/${uniqueId}`, {
          businessName: businessName,
          registeredEmail: registeredEmail,
          businessAddress: businessAddress,
          businessLifeCycle: businessLifeCycle,
          businessType: businessType,
          refId: uniqueId,
        })
        .then((res) => {
          // setUniqueId(res.data?.data?.id);
        });
      setStep("STEP10");
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  return (
    <div>
      <FormHeader header={"About Your Business"} />

      <ReuseableField
        value={businessInfo?.businessName}
        title={
          <React.Fragment>
            Business Name (as listed on Tradeplus)<span>*</span>
          </React.Fragment>
        }
        placeholder={"Business Name (as listed on Tradeplus)"}
        eventHandler={(e) =>
          setBusinessInfo({
            ...businessInfo,
            businessName: e,
          })
        }
      />
      <ReuseableField
        value={businessInfo?.registeredEmail}
        title={
          <React.Fragment>
            Registered email (as listed on Tradeplus) <span>*</span>
          </React.Fragment>
        }
        placeholder={"Registered email (as listed on Tradeplus) "}
        eventHandler={(e) =>
          setBusinessInfo({
            ...businessInfo,
            registeredEmail: e,
          })
        }
      />
      <ReuseableField
        value={businessInfo?.businessAddress}
        title={
          <React.Fragment>
            Business Address (as listed on Tradeplus) <span>*</span>
          </React.Fragment>
        }
        placeholder={"Business Address (as listed on Tradeplus) "}
        eventHandler={(e) =>
          setBusinessInfo({
            ...businessInfo,
            businessAddress: e,
          })
        }
      />
      <div>
        <p>Business Type</p>
        <select
          onChange={(e: any) => {
            setBusinessInfo({
              ...businessInfo,
              businessType: e?.target?.value,
            });
          }}
        >
          <option>Selet Business Type</option>
          {bizType.map((x, i) => {
            return (
              <option value={x} key={i}>
                {x}
              </option>
            );
          })}
        </select>
      </div>
      <ReuseableField
        value={businessInfo?.businessLifeCycle}
        title={
          <React.Fragment>
            How long have you been in business for<span>*</span>
          </React.Fragment>
        }
        placeholder={"How long have you been in business for"}
        eventHandler={(e) =>
          setBusinessInfo({
            ...businessInfo,
            businessLifeCycle: e,
          })
        }
      />
      <DualAppButtonContainer>
        <button onClick={() => setStep("STEP8")}>Prev</button>
        <button onClick={handleProceed}>Next</button>
      </DualAppButtonContainer>
    </div>
  );
}

export function BusinessManagement({ step, setStep, uniqueId }: any) {
  const [businessManegement, setBusinessManegement] = useState({
    storeManager: "",
    contactPhone: "",
    contactEmail: "",
    productCategories: "",
    businessBranches: "",
    branchesLocations: "",
    productSales: "",
    otherOnlinePlatforms: "",
  });

  const handleProceed = async () => {
    const {
      storeManager,
      contactPhone,
      contactEmail,
      productCategories,
      businessBranches,
      branchesLocations,
      productSales,
      otherOnlinePlatforms,
    } = businessManegement;
    if (
      storeManager != "" &&
      contactPhone != "" &&
      contactEmail != "" &&
      productCategories != "" &&
      businessBranches != "" &&
      branchesLocations != "" &&
      productSales != "" &&
      otherOnlinePlatforms != ""
    ) {
      await axios
        .post(`${config.liveUrl}/sage-bank/BusinessManagement/${uniqueId}`, {
          storeManager: storeManager,
          contactPhone: contactPhone,
          contactEmail: contactEmail,
          productCategories: productCategories,
          businessBranches: businessBranches,
          productSales: productSales,
          otherOnlinePlatforms: otherOnlinePlatforms,
          refId: uniqueId,
        })
        .then((res) => {
          // setUniqueId(res.data?.data?.id);
        });
      setStep("STEP11");
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  return (
    <div>
      <FormHeader header={"Business Management"} />
      <div>
        <ReuseableField
          value={businessManegement?.storeManager}
          title={"Store Manager "}
          placeholder={"Store Manager "}
          eventHandler={(e) =>
            setBusinessManegement({
              ...businessManegement,
              storeManager: e,
            })
          }
        />
        <ReuseableField
          value={businessManegement?.contactPhone}
          title={"Contact phone number "}
          placeholder={"Contact phone number "}
          eventHandler={(e) =>
            setBusinessManegement({
              ...businessManegement,
              contactPhone: e,
            })
          }
        />
        <ReuseableField
          value={businessManegement?.contactEmail}
          title={"Contact email address"}
          placeholder={"Contact email address"}
          eventHandler={(e) =>
            setBusinessManegement({
              ...businessManegement,
              contactEmail: e,
            })
          }
        />
        <ReuseableField
          value={businessManegement?.productCategories}
          title={"What categories do your products fall under   "}
          placeholder={"What categories do your products fall under   "}
          eventHandler={(e) =>
            setBusinessManegement({
              ...businessManegement,
              productCategories: e,
            })
          }
        />
        <ReuseableField
          value={businessManegement?.businessBranches}
          title={"How many branches do you have? "}
          placeholder={"How many branches do you have? "}
          eventHandler={(e) =>
            setBusinessManegement({
              ...businessManegement,
              businessBranches: e,
            })
          }
        />
        <ReuseableField
          value={businessManegement?.branchesLocations}
          title={"Location of those branches? "}
          placeholder={"Location of those branches? "}
          eventHandler={(e) =>
            setBusinessManegement({
              ...businessManegement,
              branchesLocations: e,
            })
          }
        />
        <div>
          <p>How do you sell your products.</p>
          <select
            onChange={(e: any) =>
              setBusinessManegement({
                ...businessManegement,
                productSales: e?.target?.value,
              })
            }
          >
            <option>Selet Business Type</option>
            {onLineVendor.map((x, i) => {
              return (
                <option value={x} key={i}>
                  {x}
                </option>
              );
            })}
          </select>
        </div>
        <ReuseableField
          value={businessManegement?.otherOnlinePlatforms}
          title={"What other online platforms do you sell on? "}
          placeholder={"What other online platforms do you sell on? "}
          eventHandler={(e) =>
            setBusinessManegement({
              ...businessManegement,
              otherOnlinePlatforms: e,
            })
          }
        />
        <DualAppButtonContainer>
          <button onClick={() => setStep("STEP9")}>Prev</button>
          <button onClick={handleProceed}>Next</button>
        </DualAppButtonContainer>
      </div>
    </div>
  );
}

export function LoanInformation({ step, setStep, uniqueId }: any) {
  const [courrentBlockForm, setCurrentBlockForm] = useState(1);
  const [loanApplication, setLoanApplic] = useState([
    {
      name: "Revenue from sales",
      agoThree: "",
      agoTwo: "",
      agoOne: "",
      loanOne: "",
      loanTwo: "",
      loanThree: "",
    },
    {
      name: "Revenue from other sources",
      agoThree: "",
      agoTwo: "",
      agoOne: "",
      loanOne: "",
      loanTwo: "",
      loanThree: "",
    },
    {
      name: "Cost of Goods Sold",
      agoThree: "",
      agoTwo: "",
      agoOne: "",
      loanOne: "",
      loanTwo: "",
      loanThree: "",
    },
    {
      name: "Expense 1",
      agoThree: "",
      agoTwo: "",
      agoOne: "",
      loanOne: "",
      loanTwo: "",
      loanThree: "",
    },
    {
      name: "Expense 2",
      agoThree: "",
      agoTwo: "",
      agoOne: "",
      loanOne: "",
      loanTwo: "",
      loanThree: "",
    },
    {
      name: "Expense 3",
      agoThree: "",
      agoTwo: "",
      agoOne: "",
      loanOne: "",
      loanTwo: "",
      loanThree: "",
    },
    {
      name: "Other Expenses",
      agoThree: "",
      agoTwo: "",
      agoOne: "",
      loanOne: "",
      loanTwo: "",
      loanThree: "",
    },
    {
      name: "Cash at Hand",
      agoThree: "",
      agoTwo: "",
      agoOne: "",
      loanOne: "",
      loanTwo: "",
      loanThree: "",
    },
    {
      name: "Total Inventory Value",
      agoThree: "",
      agoTwo: "",
      agoOne: "",
      loanOne: "",
      loanTwo: "",
      loanThree: "",
    },
    {
      name: "Value of other assets",
      agoThree: "",
      agoTwo: "",
      agoOne: "",
      loanOne: "",
      loanTwo: "",
      loanThree: "",
    },
    {
      name: "Total Liabilities",
      agoThree: "",
      agoTwo: "",
      agoOne: "",
      loanOne: "",
      loanTwo: "",
      loanThree: "",
    },
  ]);

  const handleUpdateRecord = (e: any, i: number, id: any) => {
    const lonzzz = [...loanApplication];
    lonzzz[i] = {
      ...lonzzz[i],
      [id]: e,
    };
    // lonzzz[i][id] = e;
    setLoanApplic(lonzzz);
  };

  const handleProceed = () => {
    if (courrentBlockForm != 11) {
      setCurrentBlockForm(courrentBlockForm + 1);
    } else {
    }
    loanApplication.map(async (x, i) => {
      await axios
        .post(`${config.liveUrl}/sage-bank/LoanInformation/${uniqueId}`, {
          ...x,
          refId: uniqueId,
        })
        .then((res) => {
          // setUniqueId(res.data?.data?.id);
        });
    });
    setCurrentBlockForm(11);
  };

  return (
    <div>
      {/* <FormHeader header={"Revenue from sales"} /> */}

      {courrentBlockForm != 11 &&
        loanApplication.map((x, i) => {
          return (
            <>
              <div>
                {/* <FormHeader header={x?.name} /> */}
                <FormHeaderContainer>
                  <input
                    // type={type ? type : "string"}
                    // placeholder={placeholder}
                    onChange={(e) =>
                      handleUpdateRecord(e.target.value, i, "name")
                    }
                    value={x?.name}
                  />
                </FormHeaderContainer>
              </div>
              <ModalTable key={i}>
                <ReuseableField
                  value={x?.agoThree}
                  // title={"3 months ago"}
                  placeholder={"3 months ago"}
                  eventHandler={(e) => handleUpdateRecord(e, i, "agoThree")}
                />
                <ReuseableField
                  value={x?.agoTwo}
                  // title={"2 months ago"}
                  placeholder={"2 months ago"}
                  eventHandler={(e) => handleUpdateRecord(e, i, "agoTwo")}
                />
                <ReuseableField
                  value={x?.agoOne}
                  // title={"1 month ago"}
                  placeholder={"1 month ago"}
                  eventHandler={(e) => handleUpdateRecord(e, i, "agoOne")}
                />
                <ReuseableField
                  value={x?.loanThree}
                  // title={"3 months after Loan"}
                  placeholder={"3 months after Loan"}
                  eventHandler={(e) => handleUpdateRecord(e, i, "loanThree")}
                />
                <ReuseableField
                  value={x?.loanTwo}
                  // title={"2 months after Loan"}
                  placeholder={"2 months after Loan"}
                  eventHandler={(e) => handleUpdateRecord(e, i, "loanTwo")}
                />
                <ReuseableField
                  value={x?.loanOne}
                  // title={"1 month after Loan"}
                  placeholder={"1 month after Loan"}
                  eventHandler={(e) => handleUpdateRecord(e, i, "loanOne")}
                />

                {/* <DualAppButtonContainer>
              {courrentBlockForm != 11 ? (
                <>
                  <button onClick={() => setStep("STEP9")}>Prev</button>
                  <button onClick={handleProceed}>Next</button>
                </>
              ) : (
                <>
                  <button onClick={handleProceed}>Next</button>
                </>
              )}
            </DualAppButtonContainer> */}
              </ModalTable>
            </>
          );
        })}
      {courrentBlockForm != 11 && (
        <DualAppButtonContainer>
          <>
            <button onClick={handleProceed}>Next</button>
          </>
        </DualAppButtonContainer>
      )}
      {courrentBlockForm == 11 && (
        <div>
          <h3 style={{ textAlign: "center" }}>
            Thank You for your response. An email will be sent to you shortly
          </h3>
        </div>
      )}
    </div>
  );
}

export function FreeSpeech({ step, setStep, uniqueId }: any) {
  const [showModal, setShowModal] = useState(false);
  const [otherInfo, setOtherInfo] = useState({
    amount: "",
    annualTurnOver: "",
    otherBank: "",
    financialObligation: "",
    comments: "",
    inventoryValue: "",
  });

  const handleProceed = async () => {
    const { amount, annualTurnOver, otherBank, financialObligation, comments } =
      otherInfo;
    if (
      amount != "" &&
      annualTurnOver != "" &&
      otherBank != "" &&
      financialObligation != ""
    ) {
      await axios
        .post(`${config.liveUrl}/sage-bank/FreeSpeech/${uniqueId}`, {
          ...otherInfo,
          refId: uniqueId,
        })
        .then((res) => {
          // setUniqueId(res.data?.data?.id);
        });
      setShowModal(true);
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
      });
    }
  };

  return (
    <div>
      <FormHeader header={"Loan Application"} />

      <ReuseableField
        value={otherInfo?.amount}
        title={"Requested Amount "}
        placeholder={"Requested Amount "}
        eventHandler={(e) => setOtherInfo({ ...otherInfo, amount: e })}
      />
      <ReuseableField
        value={otherInfo?.annualTurnOver}
        title={"Annual Turnover"}
        placeholder={"Annual Turnover"}
        eventHandler={(e) => setOtherInfo({ ...otherInfo, annualTurnOver: e })}
      />
      <ReuseableField
        value={otherInfo?.otherBank}
        title={"What other banks do you use"}
        placeholder={"What other banks do you use"}
        eventHandler={(e) => setOtherInfo({ ...otherInfo, otherBank: e })}
      />
      <ReuseableField
        value={otherInfo?.inventoryValue}
        title={"Total Inventory Value"}
        placeholder={"Total Inventory Value"}
        eventHandler={(e) => setOtherInfo({ ...otherInfo, inventoryValue: e })}
      />
      <ReuseableField
        value={otherInfo?.financialObligation}
        title={"State any other financial obligations you have "}
        placeholder={"State any other financial obligations you have "}
        eventHandler={(e) =>
          setOtherInfo({ ...otherInfo, financialObligation: e })
        }
      />
      <ReuseableField
        value={otherInfo?.comments}
        title={"Comments"}
        placeholder={"Comments"}
        eventHandler={(e) => setOtherInfo({ ...otherInfo, comments: e })}
      />

      <DualAppButtonContainer>
        <button onClick={() => setStep("STEP9")}>Prev</button>
        <button onClick={handleProceed}>Next</button>
      </DualAppButtonContainer>

      {showModal && (
        <Modal>
          <ModalContainer>
            <h3>Kindly Note this terms</h3>
            <br />
            <div>
              <h3>Revenue</h3>
              <p>
                Total amount of money a company earns from its normal business
                activities
              </p>
            </div>
            <br />
            <div>
              <h3>Cost of Goods Sold</h3>
              <p>
                Total amount of money a company earns from its normal business
                activities
              </p>
            </div>
            <br />
            <div>
              <h3>Expenses</h3>
              <p>
                Total amount of money a company earns from its normal business
                activities
              </p>
            </div>
            <br />
            <div>
              <h3>Cash at Hand</h3>
              <p>
                Total amount of money a company earns from its normal business
                activities
              </p>
            </div>
            <br />
            <div>
              <h3>Inventory Value</h3>
              <p>
                Total amount of money a company earns from its normal business
                activities
              </p>
            </div>
            <br />
            <div>
              <h3>Value of Other Assets</h3>
              <p>Values of all other resources owned by the company</p>
            </div>
            <br />
            <div>
              <h3>Total Liabilities</h3>
              <p>Total amount of money that the company owes</p>
            </div>
            <br />
            <DualAppButtonContainer>
              <button
                onClick={() => {
                  setStep("STEP12");
                  setShowModal(false);
                }}
              >
                Proceed
              </button>
            </DualAppButtonContainer>
          </ModalContainer>

          {/* <ClickAwayListener onClickAway={e => handleCloseForm(e)}>
      </ClickAwayListener> */}
        </Modal>
      )}
    </div>
  );
}

export function ImportantInformation() {
  return <div>BusinessInformation</div>;
}
