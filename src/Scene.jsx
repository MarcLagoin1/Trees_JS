import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { BoxGeometry } from "three";
import { Trees } from "./Trees";

export const Scene = () => {
    const refTrees = useRef(null)
    useFrame(() => {
        const {current : group } = refTrees;
        if(group){
            group.rotation.x += 0.01;
        }
    })
    return (
        <>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[15, 15, 15]} 
            decay={0} castShadow 
            shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
            <Trees ref={refTrees}/>
        </>
    );
}