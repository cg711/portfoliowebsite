import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Picture(props) {
  const gltf = useLoader(GLTFLoader, './portfolio-picture.glb');

  useFrame(({clock}) => {
    gltf.scene.rotation.y = clock.getElapsedTime() * 0.3;
  });
  return (
    <primitive
              object={gltf.scene}
              position={[0,0.5,-1]}
              rotation={[0, -Math.PI / 2, 0]}
    />
  )
}
