/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Animated Woman.glb -o src/components/AnimatedWoman.jsx -r public 
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { SkeletonUtils } from "three-stdlib";

const MOVEMENT_SPEED = 0.032;

export function AnimatedWoman({
  hairColor = "green",
  topColor = "pink",
  bottomColor = "brown",
  ...props
}) {
  const position = useMemo(() => props.position, []);

  const group = useRef();
  const { scene, animations } = useGLTF('/models/Animated Woman.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group);
  const [animation, setAnimation] = useState("CharacterArmature|Idle");

  


 
  useEffect(() =>{
      if (actions[animation]) {
        actions[animation].reset().fadeIn(0.5).play();
        return () => actions[animation]?.fadeOut(0.5);
      }
    }, [animation]);



    useFrame(() => {
      if (group.current.position.distanceTo(props.position) > 0.1) {
        const direction = group.current.position
        .clone()
        .sub(props.position)
        .normalize()
        .multiplyScalar(MOVEMENT_SPEED);
        group.current.position.sub(direction);
      }}
    );


  return (
    <group ref={group} position={position} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="Formad_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Formad_Head_1" geometry={nodes.Formad_Head_1.geometry} material={materials.Skin} skeleton={nodes.Formad_Head_1.skeleton} />
            <skinnedMesh name="Formad_Head_2" geometry={nodes.Formad_Head_2.geometry} material={materials.Red} skeleton={nodes.Formad_Head_2.skeleton} />
            <meshStandardMaterial
            color={hairColor}
            />
            <skinnedMesh name="Formad_Head_3" geometry={nodes.Formad_Head_3.geometry} material={materials.Brown} skeleton={nodes.Formad_Head_3.skeleton} />
          </group>
          <group name="Formal_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Formal_Body_1" geometry={nodes.Formal_Body_1.geometry} material={materials.Skin} skeleton={nodes.Formal_Body_1.skeleton} />
            <meshStandardMaterial color={topColor}/>
            <skinnedMesh name="Formal_Body_2" geometry={nodes.Formal_Body_2.geometry} material={materials.LimeGreen} skeleton={nodes.Formal_Body_2.skeleton} />
            <skinnedMesh name="Formal_Body_3" geometry={nodes.Formal_Body_3.geometry} material={materials.Gold} skeleton={nodes.Formal_Body_3.skeleton} />
          </group>
          <group name="Formal_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Formal_Feet_1" geometry={nodes.Formal_Feet_1.geometry} material={materials.Skin} skeleton={nodes.Formal_Feet_1.skeleton} />
            <skinnedMesh name="Formal_Feet_2" geometry={nodes.Formal_Feet_2.geometry} material={materials.Red} skeleton={nodes.Formal_Feet_2.skeleton} />
          </group>
          <group name="Formal_Legs" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Formal_Legs_1" geometry={nodes.Formal_Legs_1.geometry} material={materials.Skin} skeleton={nodes.Formal_Legs_1.skeleton} />
            <skinnedMesh name="Formal_Legs_2" geometry={nodes.Formal_Legs_2.geometry} material={materials.LimeGreen} skeleton={nodes.Formal_Legs_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Animated Woman.glb')
