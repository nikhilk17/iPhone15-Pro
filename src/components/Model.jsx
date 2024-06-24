import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import ModelView from './ModelView'
import { yellowImg } from '../utils'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { models, sizes } from '../constants'
import { animateWithGsap, animateWithGsapTimeLine } from '../utils/animation'
const Model = () => {
    const [size, setSize] = useState('small')
    const [model, setModel] = useState({
        title:"iPhone 15 Pro in Natural Titanium",
        color:['#8F8A8A1','#ffe7B9','#6f6C64'],
        img:yellowImg,
    })
    //camera control for model view
    const cameraControlSmall =useRef();
    const cameraControlLarge =useRef();

    //model
    const small=useRef(new THREE.Group());
    const large=useRef(new THREE.Group());

    //rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    const tl=gsap.timeline();
    useEffect(()=>{
        if(size === 'large'){
            animateWithGsapTimeLine(tl,small,smallRotation,'#view1','#view2',{
                transform:'translateX(-100%)',
                duration:2,
            })

        }
        if(size === 'small'){
            animateWithGsapTimeLine(tl,large,largeRotation,'#view2','#view1',{
                transform:'translateX(0)',
                duration:2,
            })
        }
        animateWithGsap('#heading',{
            y:0,
            opacity:1,
            duration:1,
        }
        )
    },[size])

  return (
    <section className='common-padding '>
        <div className='screen-max-width'>
            <h1 id='heading' className='section-heading'>
                Take a close look.</h1>
        </div>
        <div className='flex flex-col items-center mt-5 cursor-pointer'>
            <div className='w-full h-[75vh] md:h-[75vh] overflow-hidden relative'>
                <ModelView 
                index={1} 
                groupRef={small}
                gsapType='view1'
                conterolRef={cameraControlSmall}
                setRotationState={setSmallRotation}
                item={model}
                size={size}
                />
                <ModelView 
                index={2} 
                groupRef={large}
                gsapType='view2'
                conterolRef={cameraControlLarge}
                setRotationState={setLargeRotation}
                item={model}
                size={size}
                />
                <Canvas 
                className='w-full h-full'
                style={{position:'fixed',top:0,left:0,bottom:0,right:0,overflow:'hidden'}}
                eventSource={document.getElementById('root')}
                >
                    <View.Port/>
                </Canvas>
            </div>
            <div className='mx-auto w-full'>
                <p className='text-sm font-light text-center mb-5'>{model.title}</p>
                <div className='flex-center'>
                    <ul className='color-container'>
                        {models.map((item,i)=>(
                            <li key={i} className='w-6 h-6 rounded-full mx-2 cursor-pointer' style={{backgroundColor:item.color[0]}}
                            onClick={()=>setModel(item)}></li>
                        ))}

                    </ul>
                    <button className='size-btn-container'>
                        {sizes.map(({label,value})=>(
                            <span key={label} className='size-btn' 
                            style={{backgroundColor:size === value ? 
                            'white' : 'transparent',
                            color : size ===value ?
                            'black' :'white'}} 
                            onClick={()=>setSize(value)}>
                                {label}</span>
                        ))}
                    </button>

                </div>
            </div>

        </div>
    </section>
  )
}

export default Model
