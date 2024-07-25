import { primaryColor } from '@/components/utils/color'
import {
  CanvassContainer,
  DualAppButtonContainer
} from '@/styles/bankForm.styles'
import React, { useRef, useEffect } from 'react'
import SignaturePad from 'signature_pad'

const SignaturePadComponent = () => {
  const canvasRef = useRef(null)
  const signaturePadRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    signaturePadRef.current = new SignaturePad(canvas)
  }, [])

  const clearSignature = () => {
    signaturePadRef.current.clear()
  }

  const saveSignature = () => {
    const dataURL = signaturePadRef.current.toDataURL()
    console.log(dataURL) // You can send this to your server or use it as needed
  }

  return (
    <div style={{ backgroundColor: 'white' }}>
      <CanvassContainer>
        <h3>
          Kindly sign electronically here by dragging your find on this boards
        </h3>
        <br />
        <canvas
          ref={canvasRef}
          className='canvas-style'
        ></canvas>
      </CanvassContainer>
      <DualAppButtonContainer>
        <button onClick={clearSignature}>Clear</button>
        <button onClick={saveSignature}>Submit</button>
      </DualAppButtonContainer>
    </div>
  )
}

export default SignaturePadComponent
