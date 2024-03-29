/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three'

import islandScene from '../assets/3d/island.glb'

const Island = ({isRotating, setIsRotating, setCurrentStage,...props}) => {
  const islandRef = useRef()

  const { gl, viewport } = useThree()
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0)
  const rotationSpeed = useRef(0)
  const dampingFactor = 0.95

  // const positionR = position.lerp(position, 0.1)


  // const propsRemake = {...props, position:{positionR}}

  const handlePointerDown = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(true)

    // console.log(e.clientX)
    const clientX = e.touch
      ? e.touch[0].clientX 
      : e.clientX
     
      lastX.current = clientX
  }

  const handlePointerUp = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(false)

  }

  const handlePointerMove = (e) => {
    e.stopPropagation()
    e.preventDefault()

    if(isRotating) {
      const clientX = e.touches 
      ? e.touches[0].clientX 
      : e.clientX

      const delta = (clientX - lastX.current) / viewport.width


      islandRef.current.rotation.y += delta * 0.01 * Math.PI
      lastX.current = clientX
      rotationSpeed.current = delta * 0.01 * Math.PI
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft') {
      if(!isRotating) setIsRotating(true)
      islandRef.current.rotation.y += 0.020 * Math.PI 
      rotationSpeed.current = 0.0125;
    }else if(e.key === 'ArrowRight'){
      if(!isRotating) setIsRotating(true)
      islandRef.current.rotation.y -= 0.02 * Math.PI
      rotationSpeed.current = -0.0125;
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false)
    }
  }

  useFrame(() => {
    if(!isRotating){
      rotationSpeed.current *= dampingFactor
      
      if(Math.abs(rotationSpeed.current) < 0.001){
        rotationSpeed.current = 0
      }
      
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
        // islandRef.current.rotation.y += rotationSpeed.current;
        const rotation = islandRef.current.rotation.y
        // console.log("rotation" + rotation)
        
      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to prevent   potential issues within very large or negative rotation values.
       *  Here´s a step-by-step explanation of what this code does: 
       * 1. rotation % (2 * Math.PI) calculates the remainder of the rotation value around once it reaches a full circle (360 degrees) so that it stays within the range of [0 to 2 * Math.PI].
       * 2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       * 3.Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another modulo operation to the value obtained in step 2. This step  guarantees that the value always stays whithin th range of[ 0 to 2 * Math.PI], which is equivalent to a full circle in radians.
       */
      let normalizedRotation = 0
      if(rotation < 0){
        normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI)
      }else{
        normalizedRotation = (rotation % (2 * Math.PI))
      }
      // console.log((rotation % (2 * Math.PI)))
      // Set the current stage based on the island´s orientation 
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4)
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3)
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2)
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1)
          break;
        default:
          setCurrentStage(null)
          // case -Math.PI / 4 <= normalizedRotation && normalizedRotation < Math.PI / 4 :
      }

     }

    })

  useEffect(() => {

    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointerup', handlePointerUp)
    canvas.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown)
      canvas.removeEventListener('pointerup', handlePointerUp)
      canvas.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }

  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])



  return (
    <a.group  ref={islandRef} dispose={null} {...props}>
      <mesh        
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh        
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh       
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh     
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh      
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh        
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}

useGLTF.preload(islandScene);

export default Island