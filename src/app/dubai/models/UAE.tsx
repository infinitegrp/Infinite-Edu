'use client'
// components/ThreeScene.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { SVGLoader } from 'three-stdlib';

// SVG path data
const svgPath = `M1789 0H0V933H1789V0ZM749.602 522.175C756.955 526.885 765.456 529.24 775.106 529.24C782.343 529.24 788.92 527.89 794.836 525.191C800.81 522.491 805.951 518.729 810.259 513.904C814.567 509.079 817.87 503.507 820.167 497.189C822.522 490.813 823.7 483.977 823.7 476.683V406.376H799.92V476.683C799.92 481.967 798.972 486.792 797.077 491.157C795.181 495.523 792.367 498.998 788.633 501.583C784.957 504.168 780.448 505.46 775.106 505.46C769.821 505.46 765.312 504.168 761.579 501.583C757.845 498.941 755.002 495.437 753.049 491.071C751.096 486.706 750.119 481.91 750.119 476.683V406.376H726.339V476.683C726.339 486.39 728.378 495.236 732.457 503.22C736.592 511.147 742.307 517.465 749.602 522.175ZM917.854 406.376H890.8L847.031 527H872.275L879.513 507.011H929.141L936.378 527H961.623L917.854 406.376ZM920.439 483.231H888.215L904.241 439.031L920.439 483.231ZM987.741 406.376V527H1064.08V503.22H1011.52V474.27H1052.53V450.49H1011.52V430.156H1064.08V406.376H987.741Z`;

// Utility function to convert SVG path to Three.js shapes
const parseSvgPath = (svgPath) => {
    const loader = new SVGLoader();
    const svgData = loader.parse(`<svg><path d="${svgPath}" /></svg>`);
    const shapes = svgData.paths.flatMap((path) => path.toShapes(true));
    return shapes;
};

export const UAE = () => {
    const meshRef = useRef();

    // Convert SVG path to shapes
    const shapes = parseSvgPath(svgPath);

    useEffect(() => {
        const geometry = new THREE.ShapeGeometry(shapes);
        meshRef.current.geometry = geometry;
        meshRef.current.material = new THREE.MeshBasicMaterial({
            color: new THREE.Color('#1B1B1B'),
            opacity: 1,
            transparent: true,
        });
    }, [shapes]);

    // Animation loop
    useFrame(() => {
        // meshRef.current.rotation.x += 0.01;
        // meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <shapeGeometry />
            <meshBasicMaterial />
        </mesh>
    );
};
