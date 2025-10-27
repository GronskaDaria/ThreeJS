import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useState} from "react";
import {useMediaQuery} from "react-responsive";
import {Room} from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({query:'(max-with: 1024px)'});
    const isMobile = useMediaQuery({query:'(max-with: 768px)'});

    return (
        <Canvas camera={{ position: [0, 0, 15], fov:45 }}>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                minDistance={5}
                maxDistance={20}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 5}
            />
            <HeroLights/>
            <Particles count={100}/>
            <group scale={isMobile ? 0.7 : 1}
            position={[0,-3.5,0]}
            rotation={[0, Math.PI / 4, 0]}
            >
                <Room/>
            </group>

        </Canvas>
    )
}
export default HeroExperience
