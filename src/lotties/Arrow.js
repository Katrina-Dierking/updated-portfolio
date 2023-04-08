import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from './data.json'
import './arrow.scss'

export default function Arrow() {

     const defaultOptions = {
       loop: true,
       autoplay: true,
       animationData: animationData.default,
       rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
       },
     };

     return (
        <>
            <section className='arrowAnimation'>
                <Lottie options={defaultOptions} height={50} width={75} />
            </section>
        </>
     )
}
