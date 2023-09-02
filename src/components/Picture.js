import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState } from "react";
import { Vector2 } from "three";

export function Picture(props) {
  const gltf = useLoader(GLTFLoader, './portfolio-picture.glb');

  const [prevX, setPrevX] = useState(0);
  const [prevAngle, setPrevAngle] = useState(0);


  useFrame((frame) => {
    if (frame.mouse.distanceTo(new Vector2(gltf.scene.position.x, gltf.scene.position.y)) < 1) {
      setPrevX(frame.mouse.x);
    } else {
      gltf.scene.rotation.y = prevAngle + frame.clock.getElapsedTime() * 0.3;
    }
     gltf.scene.rotation.y += (0.3 * (prevX - prevAngle) + 90);
     setPrevAngle(gltf.scene.rotation.y);
  });
  return (
    <primitive
              object={gltf.scene}
              position={[0,0.5,-1]}
              rotation={[0, -Math.PI / 2, 0]}
    />
  )
}
