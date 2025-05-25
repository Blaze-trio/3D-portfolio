import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'

const Home = () => {
  return (
    <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            POPup
        </div>
        <Canvas 
            className="w-full h-full bg-transparent"
            camera={{ near: 0.1, far: 1000 }}
        >
            <Suspense fallback={<Loader/>}>
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 5, 10]} />
                <spotLight 
                    position={[0, 50, 10]} 
                    penumbra={1} 
                    intensity={2}
                    castShadow 
                />
                <Island />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home