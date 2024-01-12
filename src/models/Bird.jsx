import {useRef, useEffect} from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
  const birdRef = useRef()
  const {scene, animations} = useGLTF(birdScene)
  const { actions } = useAnimations(animations, birdRef)

  useEffect(() => {
    actions['Take 001'].play()
  }, []) 

  useFrame(({ clock, camera }) => {
    // Update the Y position simulate the flight moving in a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.1 + 1

    //Check if the bird reached a certain endpoint relative using a sine wave
    if(birdRef.current.position.x > camera.position.x + 10) {
      //CHange direction to backward and rotate the bird 180 degres on the y-axis
      birdRef.current.rotation.y = Math.PI
    }else if(birdRef.current.position.x < camera.position.x -10) {
      // Change direction to forward and reset the bird´s rotation
      birdRef.current.rotation.y = 0
    }

    // Update the X and Z positions based on the direction
    if(birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.1 / Math.PI
      birdRef.current.position.z -= 0.1 / Math.PI
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01 
      birdRef.current.position.z += 0.01 
    }
  })

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird