'use client'
// import { Iphone } from "../Models/phone"
// import { Card } from "../Models/Card";
// import { Model } from "../Models/PlateUpModel";
// import { FoodSpace } from "../Models/foodWorld";
import { motion } from 'framer-motion-3d'
// import { Ipad } from '../Models/Ipad';
import { BgText } from './models/dubaiBackground';
import { UAE } from './models/UAE';


export const Experience = (props) => {
    const { section } = props;
    console.log("Section:", section);

    return (
        <>
            <directionalLight intensity={0.001} position={[6, 5, 5]} />
            <ambientLight intensity={0.01} />
            <motion.group scale={[25, 19, 20]}
                animate={{
                    x: section === 1 ? 1 : section === 2 ? 1 : section === 3 ? 1 : section === 4 ? 1 : section === 5 ? 1 : section === 6 ? 1 : section === 7 ? 1 : section === 8 ? 1 : 1,
                    y: section === 1 ? 0 : section === 2 ? 1 : section === 3 ? 2 : section === 4 ? 5 : section === 5 ? 15 : section === 6 ? 24 : section === 7 ? 5 : section === 8 ? 15 : -15,
                    z: section === 1 ? -10 : section === 2 ? -10 : section === 3 ? -10 : section === 7 ? -10 : -10,

                }}>
                <BgText />
            </motion.group>
            <UAE />
        </>
    )
}



