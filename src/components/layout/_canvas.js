import { Canvas, extend } from 'react-three-fiber'
import { Perf } from 'r3f-perf'
import useStore from '@/helpers/store'
import { OrbitControls, Preload, Sky, Stars } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'

// enable shader editor
import {
  EffectComposer,
  DepthOfField,
  Bloom,
} from '@react-three/postprocessing'

const Bg = () => {
  const router = useStore((state) => state.router)
  const { bg } = useSpring({
    bg: router && router.route !== '/box' ? 0 : 0x17 / 255,
  })
  return <a.color attach='background' r={bg} g={bg} b={bg} />
}

const LCanvas = ({ children }) => {
  return (
    <Canvas
      camera={{
        fov: 80,
        position: [0, 2, 20],
        near: 0.1,
        far: 1000,
      }}
      // style={{
      //   position: 'absolute',
      //   top: 0,
      // }}
      onCreated={({ events }) => {
        useStore.setState({ events })
      }}
    >
      <Preload all />
      {/* <Bg /> */}
      <Perf openByDefault trackGPU={true} position={'bottom-right'} />
      <OrbitControls />
      <Sky
        distance={3000}
        turbidity={8}
        rayleigh={6}
        mieCoefficient={0.1}
        mieDirectionalG={0.8}
        inclination={0.49}
        azimuth={0.25}
      />
      <Stars saturation={50} fade={true} />
      <EffectComposer>
        <DepthOfField
          focusDistance={30}
          focalLength={0.1}
          bokehScale={0.1}
          height={480}
        />
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={1}
          height={300}
          strength={3}
        />
        {/* <Noise opacity={0.02} /> */}
      </EffectComposer>
      {children}
    </Canvas>
  )
}

export default LCanvas
