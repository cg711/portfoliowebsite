import React, { useRef} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Picture(props) {
  const { nodes, materials } = useGLTF("/portfolio-picture.glb");
  const picture = useRef();

  useFrame(({clock}) => {
    picture.current.rotation.z = clock.getElapsedTime() * 0.3;
  });


  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 1.25, 2]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.10}
        ref={picture}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials.Picture}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/portfolio-picture.glb");

