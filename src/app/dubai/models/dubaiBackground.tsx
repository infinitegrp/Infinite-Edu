'use client'
// components/ThreeScene.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export const BgText = () => {
    const meshRef = useRef();

    // Load the texture
    const texture = useLoader(TextureLoader, '/images/DubaibBg.png');

    // Set up the scene
    // Set up the scene
    useEffect(() => {
        meshRef.current.material.map = texture;
        meshRef.current.material.opacity = 12; 
        meshRef.current.material.transparent = true; 
    }, [texture]);
    // Animation loop
    useFrame(() => {
        // meshRef.current.rotation.x += 0.01;
        // meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial />
        </mesh>
    );
};


