import { useTexture, Decal, OrbitControls } from "@react-three/drei";
import { Texture } from "three";
// import { Mug } from "./Mug";

export const Experience = () => {
  const texture = useTexture("/textures/myPic.jpg");
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
        <Decal
          debug
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1}
          polygonOffset
          polygonOffsetFactor={-1}
        >
          <meshBasicMaterial map={texture} />
        </Decal>
      </mesh>
    </>
  );
};
