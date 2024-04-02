import React, { useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Vector2 } from "three";

export function Picture(props) {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      './portfolio-picture.glb',
      (gltf) => {
        
        setModel(gltf.scene);
        setLoading(false);
        document.querySelector("#loading-svg").style.display = "none";
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF model:', error);
      }
    );
  }, []);

  let prevX = 0;
  let prevAngle = 0;
  const rotationSpeed = 0.3;

  useFrame((frame) => {
    if (model) {
      const distanceToMouse = frame.mouse.distanceTo(new Vector2(model.position.x, model.position.y));
      if (distanceToMouse < 1) {
        prevX = frame.mouse.x;
      } else {
        model.rotation.y = prevAngle + frame.clock.getElapsedTime() * rotationSpeed;
      }
      model.rotation.y += (rotationSpeed * (prevX - prevAngle) + 90);
      prevAngle = model.rotation.y;
    }
  });

  return loading ? null : (
    <primitive
      object={model}
      position={[0, 0.5, -1]}
      rotation={[0, -Math.PI / 2, 0]}
    />
  );
}
