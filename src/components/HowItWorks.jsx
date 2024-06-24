import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/animation'

const HowItWorks = () => {
    const videoRef = useRef()
    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom',
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })
        animateWithGsap('.text1', {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1
        })
        animateWithGsap('.text2', {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1
        })
        animateWithGsap('.text3', {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1
        })
    }
        , [])
    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <div id='chip' className='flex-center w-full my-20'>
                    <img src={chipImg} alt="chip" className='h-28 w-28 md:h-44 md:w-44' />
                </div>
                <div className='flex flex-col items-center justify-center' >
                    <h2 className='hiw-title ml-10'>
                        A17 Pro chip.
                        <br />A monster win for gaming.
                    </h2>
                    <h4 className='hiw-subtitle'>It’s here. The biggest redesign in the history of Apple GPUs.</h4>
                </div>
                <div className='mt-10 md:mt-20 mb-14 pl-16 pr-16'>
                    <div className='relative h-full flex-center'>
                        <div className='overflow-hidden'>
                            <img src={frameImg} alt="frame" className='bg-transparent relative z-10' />
                        </div>
                        <div className='hiw-video'>
                            <video className='pointer-events-none' preload='none' muted autoPlay playsInline ref={videoRef}>
                                <source src={frameVideo} type='video/mp4' />
                            </video>
                        </div>
                    </div>

                    <p className='text-center text-gray font-semibold mt-5'>Honkai: Star Rail</p>
                </div>
                <div className='hiw-text-container md:flex-row'>
                    <div className='flex-1 flex-center gap-5'>
                        <p className='hiw-text g_fadeIn w-72 md:w-80 text1'>
                        A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                            <span className='text-white'>best graphics performance by far
                            </span>.                 
                            <p className='hiw-text g_fadeIn w-72 md:w-80 text2 mt-5'>
                        Mobile {' '}
                            <span className='text-white'>games will look and feel so immersive
                            </span>, with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
                        </p>
                        </p>
                    </div>
                    <div className="flex-1 flex flex-col g_fadeIn text3">
                <p className="hiw-text">New</p>
                <p className="hiw-bigtext">Pro-class GPU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className="hiw-text">with 6 cores</p>
              </div>
                </div>
            </div>
        </section>

    )
}

export default HowItWorks
