import{t as e}from"./shaderStore-bQ-8n2dS.js";import"./sceneUboDeclaration--w76Qnh2.js";import"./meshUboDeclaration-FNzYT1kj.js";import"./gaussianSplatting-Y_TqUG65.js";var t=`gaussianSplattingVoxelVertexShader`,n=`#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute splatIndex0: vec4f;attribute splatIndex1: vec4f;attribute splatIndex2: vec4f;attribute splatIndex3: vec4f;attribute position: vec3f;uniform dataTextureSize: vec2f;uniform alpha: f32;uniform invWorldScale: mat4x4f;uniform viewMatrix: mat4x4f;
#if IS_COMPOUND
uniform partWorld: array<mat4x4<f32>,MAX_PART_COUNT>;uniform partVisibility: array<f32,MAX_PART_COUNT>;
#endif
var rotationsATexture: texture_2d<f32>;var rotationsBTexture: texture_2d<f32>;var rotationScaleTexture: texture_2d<f32>;var centersTexture: texture_2d<f32>;var colorsTexture: texture_2d<f32>;
#if IS_COMPOUND
var partIndicesTexture: texture_2d<f32>;
#endif
varying vNormalizedPosition: vec3f;varying vNormalizedCenterPosition: vec3f;varying vAlpha: f32;varying vPatchPosition: vec2f;
#include<gaussianSplatting>
@vertex
fn main(input: VertexInputs)->FragmentInputs {let splatIndex: f32=getSplatIndex(
i32(vertexInputs.position.z+0.5),
vertexInputs.splatIndex0,vertexInputs.splatIndex1,
vertexInputs.splatIndex2,vertexInputs.splatIndex3
);var splat: Splat=readSplat(splatIndex,uniforms.dataTextureSize);
#if IS_COMPOUND
let splatWorld: mat4x4f=getPartWorld(splat.partIndex);
#else
let splatWorld: mat4x4f=mesh.world;
#endif
let quadPos: vec2f=vertexInputs.position.xy;let worldPos: vec4f=computeVoxelSplatWorldPos(splat.rotationA,splat.rotationB,splat.rotationScale,splat.center.xyz,splatWorld,uniforms.viewMatrix,uniforms.invWorldScale,quadPos);vertexOutputs.vNormalizedPosition=(uniforms.invWorldScale*worldPos).xyz*0.5+0.5;let clipPos: vec4f=uniforms.viewMatrix*uniforms.invWorldScale*worldPos;vertexOutputs.position=vec4f(clipPos.x,clipPos.y,clipPos.z*0.5+0.5,1.0);vertexOutputs.vNormalizedCenterPosition=(uniforms.invWorldScale*splatWorld*vec4f(splat.center.xyz,1.0)).xyz*0.5+0.5;vertexOutputs.vAlpha=splat.color.w*uniforms.alpha;
#if IS_COMPOUND
vertexOutputs.vAlpha*=uniforms.partVisibility[splat.partIndex];
#endif
vertexOutputs.vPatchPosition=quadPos;}
`;e.ShadersStoreWGSL[t]||(e.ShadersStoreWGSL[t]=n);var r={name:t,shader:n};export{r as gaussianSplattingVoxelVertexShaderWGSL};