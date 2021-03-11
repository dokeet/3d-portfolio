import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { useFrame, extend } from 'react-three-fiber'
import { Environment, MeshDistortMaterial, Plane } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import { shaderMaterial } from '@react-three/drei'
import vertex from './grid.vert'
import glsl from 'glslify'
import useStore from '@/helpers/store'
// yarn add -D glsl-random to try pragma


const SphereComponent = () => {
  const router = useStore((s) => s.router)
  const meshRef = useRef()
  const { color } = useSpring({
    color: router.route === '/box' ? '#272727' : 'pink',
  })
  useFrame(() => {
    if (meshRef.current.position.z > 50) {
      meshRef.current.position.z = 0
    }
    // // console.log(meshRef.current.position.y)
    meshRef.current.position.z += 0.05
    // console.log(meshRef.current)
  })
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      {/* <Sphere
        args={[1, 32, 32]}
        onClick={() => {
          router.push(`/box`)
        }}
      >
        <M factor={2} color={color} />
      </Sphere> */}

      <gridHelper args={[100, 100, '#ff52cb', '#ff52cb']} ref={meshRef} />
      <Environment preset={'studio'} />
    </Suspense>
  )
}

export default SphereComponent
