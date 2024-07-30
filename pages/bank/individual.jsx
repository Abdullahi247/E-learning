import IndividualBankFooter from '@/components/bank/individual/bankFooter'
import IndividualBankformsHeader from '@/components/bank/individual/bankforms'
import IndividualBankMain from '@/components/bank/individual/bankMain'
import { BankFormContainer,EntireFormBg } from '@/styles/bankForm.styles'
import ParticlesComponent from '@/components/utils/particles.jsx'
import React from 'react'

export default function BankForm () {
  return (
    <>
      {/* <ParticlesComponent /> */}
      {/* <div style={{ height:'fit-content' }}> */}
      {/* <div style={{ backgroundColor: '#518EDD', height:'fit-content', overflow:'scroll' }}> */}
       <EntireFormBg>

        <BankFormContainer>
          <div className='container'>
            <IndividualBankformsHeader />
            <div className='slider'>
              <IndividualBankMain />
            </div>
          </div>
        </BankFormContainer>
       </EntireFormBg>
      {/* </div> */}
      <IndividualBankFooter />
    </>
  )
}
