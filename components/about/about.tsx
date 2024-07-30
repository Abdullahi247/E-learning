import {
  AboutContainer,
  FooterContainer,
  GeneralContainer,
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  TopBannerContainer,
} from "@/styles/about.styles";
import {
  List,
  ListItem,
  Section,
  Subtitle,
  Text,
  Title,
} from "@/styles/bankForm.styles";
import Image from "next/image";
import React from "react";

export function IntroHeader() {
  return (
    <HeaderContainer>
      <Logo>
        <Image src="/img/sage-gre.png" height={32} width={164} alt="Icon" />
      </Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">Loan Form</NavLink>
        <NavLink href="#about">Tradeplus</NavLink>
        <NavLink href="#about">FAQ</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default function Introduction() {
  return (
    <div>
      <div>
        <h3></h3>
        <TopBannerContainer>
          <div className="headers">
            <p className="headline2">Vendor Loan </p>
            <p className="headline"> Programme</p>
          </div>
          <img
            className="logo"
            src="/img/money.jpg"
            // height={120}
            // width={''}
            style={{
              objectFit: "cover",
              width: "100vw",
              height: "500px  ",
            }}
            alt="Icon"
          />
          {/* <p className="headline">rer</p> */}
        </TopBannerContainer>
      </div>
      {/* <GeneralContainer>
        <AboutContainer>
          <Image src="/img/arrow-up.svg" height={48} width={48} alt="Icon" />
          <h3>Program Overview</h3>
          <p>
            A brief description of the loan program, including its purpose,
            benefits, and eligibility criteria.
          </p>
        </AboutContainer>
        <AboutContainer>
          <Image src="/img/chart-bar.svg" height={48} width={48} alt="Icon" />
          <h3>Eligibility Criteria</h3>
          <p>
            Detailed information on who qualifies for the loan program,
            including any specific requirements or restrictions.
          </p>
        </AboutContainer>
        <AboutContainer>
          <Image
            src="/img/landmark-flag.svg"
            height={48}
            width={48}
            alt="Icon"
          />
          <h3>Loan Details</h3>
          <p>Information on minimum and maximum loan amounts.</p>
        </AboutContainer>
      </GeneralContainer> */}
    </div>
  );
}

export function ApplicationProcess() {
  return (
    <>
      <GeneralContainer>
        <Section>
          <Image src="/img/chart-bar.svg" height={48} width={48} alt="Icon" />

          <Subtitle>Loan Details:</Subtitle>
          <List>
            <ListItem>Loan type: Overdraft</ListItem>
            <ListItem>
              Loan Amount: Up to 70% of total inventory value capped at
              ₦1,000,000.
            </ListItem>
            <ListItem>Tenure: Maximum of 3 months</ListItem>
            <ListItem>Interest Rate: 3.5% per month</ListItem>
            <ListItem>Purpose: Working Capital Financing</ListItem>
            <ListItem>Facility Fee: 2%</ListItem>
            <ListItem>Advisory Fee: 0.5%</ListItem>
            <ListItem>Legal Fee: 0.5%</ListItem>
            <ListItem>VAT: 7.5% (on charged fees)</ListItem>
            <ListItem>
              Collateral: Inventory Pledge & Personal Guarantee
            </ListItem>
            <ListItem>Repayment Source: Proceeds from sale of goods</ListItem>
          </List>
        </Section>

        <Section>
          <Image src="/img/arrow-up.svg" height={48} width={48} alt="Icon" />

          <Subtitle>Eligibility Criteria:</Subtitle>
          <List>
            <ListItem>Have an active Tradeplus account.</ListItem>
            <ListItem>Open an account with Sage Grey Finance Limited.</ListItem>
            <ListItem>
              Be available for physical verification for the duration of the
              loan.
            </ListItem>
            <ListItem>
              Provide accurate and verifiable inventory value.
            </ListItem>
            <ListItem>
              Meet any additional criteria specified by Tradeplus.
            </ListItem>
          </List>
        </Section>

        <Section>
          <Image
            src="/img/landmark-flag.svg"
            height={48}
            width={48}
            alt="Icon"
          />
          {/* <Title>Application Process</Title> */}
          <Subtitle>Step-by-Step Guide:</Subtitle>
          <List>
            <ListItem>
              Check Eligibility: Ensure you meet all the eligibility criteria
              listed above.
            </ListItem>
            <ListItem>
              Open an Account: If you do not already have an account with Sage
              Grey Finance, you need to open one.
            </ListItem>
            <ListItem>
              Gather Documentation: Prepare the necessary documents including
              proof of inventory value, business registration documents, and
              recent bank statements.
            </ListItem>
            <ListItem>
              Fill Out the Application Form: Complete the loan application form
              here.
            </ListItem>
            <ListItem>
              Schedule Verification: Submit your preferred date and time for the
              physical verification of your business address and inventory.
            </ListItem>
            <ListItem>
              Submit Application: Review and submit your completed application
              form along with the required documents.
            </ListItem>
            <ListItem>
              Await Review: Your application will be reviewed, and you will be
              notified of the outcome.
            </ListItem>
          </List>
        </Section>
      </GeneralContainer>
      {/* <Section>
        <Title>FAQs</Title>
        <Subtitle>Frequently Asked Questions:</Subtitle>
        <List>
          <ListItem>
            <strong>What is the purpose of the Vendor Loan Program?</strong>
            <Text>
              The program is designed to provide financial assistance to
              Tradeplus vendors to help grow their businesses.
            </Text>
          </ListItem>
          <ListItem>
            <strong>Who is eligible to apply for the loan?</strong>
            <Text>
              Vendors with an active Tradeplus account, a Sage Grey Finance
              account, and goods in high-demand categories are eligible.
            </Text>
          </ListItem>
          <ListItem>
            <strong>How much can I borrow?</strong>
            <Text>
              You can borrow up to 30% of your total inventory value, capped at
              ₦1,000,000.
            </Text>
          </ListItem>
          <ListItem>
            <strong>What are the repayment terms?</strong>
            <Text>
              The loan is repayable in monthly installments over 3 calendar
              months.
            </Text>
          </ListItem>
          <ListItem>
            <strong>What documents do I need to apply?</strong>
            <Text>
              Proof of inventory value, business registration documents, recent
              bank statements, and other relevant documents.
            </Text>
          </ListItem>
          <ListItem>
            <strong>How do I apply for the loan?</strong>
            <Text>
              Check your eligibility, open an account with Sage Grey Finance,
              gather the necessary documentation, fill out the application form,
              schedule verification, and submit your application.
            </Text>
          </ListItem>
          <ListItem>
            <strong>How long does the approval process take?</strong>
            <Text>
              The approval process typically takes [7] days from the submission
              of your application. You will be notified of the outcome once the
              review is complete.
            </Text>
          </ListItem>
          <ListItem>
            <strong>What happens during the physical verification?</strong>
            <Text>
              An agent will visit your business location at the scheduled date
              and time to verify your address and inventory. Video evidence will
              be recorded and reviewed to confirm authenticity.
            </Text>
          </ListItem>
          <ListItem>
            <strong>What if I miss a repayment?</strong>
            <Text>
              A grace period of 7 days is provided after the due date. If
              payment is not received by the end of the grace period, a late fee
              of 0.25% will be applied. Continued non-payment may result in
              account suspension and further actions.
            </Text>
          </ListItem>
          <ListItem>
            <strong>Can I repay the loan early?</strong>
            <Text>
              Yes, early repayment is allowed. Please contact our support team
              to make arrangements for early repayment.
            </Text>
          </ListItem>
          <ListItem>
            <strong>Are there any fees associated with the loan?</strong>
            <Text>
              Yes, there are. These will be detailed in your offer letter and
              loan documentation.
            </Text>
          </ListItem>
          <ListItem>
            <strong>How will I receive the loan funds?</strong>
            <Text>
              Once your loan is approved and all documentation is completed, the
              loan amount will be disbursed into your Sage Grey Finance account
              within 48 hours.
            </Text>
          </ListItem>
          <ListItem>
            <strong>
              Can I reapply for another loan after repaying my current loan?
            </strong>
            <Text>
              Yes, you can reapply for another loan after successfully repaying
              your current loan. Your eligibility for a new loan will be
              reviewed based on your updated inventory value and other criteria.
            </Text>
          </ListItem>
          <ListItem>
            <strong>What if my application is denied?</strong>
            <Text>
              If your application is denied, you will receive a notification
              with the reasons for denial. You may be able to reapply after
              addressing the issues outlined in the denial notice.
            </Text>
          </ListItem>
        </List>
      </Section> */}
      );
    </>
  );
}

// export

export const Footer = () => {
  return (
    <FooterContainer>
      <Section>
        <Title>Company</Title>
        <p>
          123 Business St, Suite 100
          <br />
          
        </p>
      </Section>
      <Section>
        <Title>Links</Title>
        <List>
          <ListItem>
            <a href="#home">Home</a>
          </ListItem>
          <ListItem>
            <a href="#about">Loan Form</a>
          </ListItem>
          <ListItem>
            <a href="#services">Tradeplus</a>
          </ListItem>
          <ListItem>
            <a href="#contact">FAQ</a>
          </ListItem>
        </List>
      </Section>
      <Section>
        <Title>Contact</Title>
        <p>
          Email: vendorloanscheme@sage-grey.com
          <br />
          Phone: (123) 456-7890
        </p>
      </Section>
    </FooterContainer>
  );
};
