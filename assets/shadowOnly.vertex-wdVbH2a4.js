import{t as e}from"./shaderStore-bQ-8n2dS.js";import"./logDepthDeclaration-1ak07yEo.js";import"./sceneUboDeclaration--w76Qnh2.js";import"./clipPlaneVertexDeclaration-2DHR1fku.js";import"./fogVertexDeclaration-DWMPTCRS.js";import"./clipPlaneVertex-DMsN4sL4.js";import"./fogVertex-kDyTrq0X.js";import"./logDepthVertex-DsgeP1vg.js";import"./bonesDeclaration-gN_wGWX6.js";import"./bakedVertexAnimationDeclaration-lmYe9eLN.js";import"./instancesDeclaration-CRTVXh-b.js";import"./instancesVertex-BGyJx2sN.js";import"./bonesVertex-D1bmmU_n.js";import"./bakedVertexAnimation-WSJp3LJ1.js";import"./lightVxUboDeclaration-Cdic6ogh.js";import"./shadowsVertex-B0shlSzv.js";import"./lightVxFragmentDeclaration-BBFivalW.js";var t=`shadowOnlyVertexShader`,n=`attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<sceneUboDeclaration>
#ifdef POINTSIZE
uniform pointSize: f32;
#endif
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#ifdef VERTEXCOLOR
varying vColor: vec4f;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying vViewDepth: f32;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(vertexInputs.position,1.0);vertexOutputs.position=scene.viewProjection*worldPos;vertexOutputs.vPositionW= worldPos.xyz;
#ifdef NORMAL
vertexOutputs.vNormalW=normalize(( finalWorld* vec4f(vertexInputs.normal,0.0)).xyz);
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_MAIN_END
}
`;e.ShadersStoreWGSL[t]||(e.ShadersStoreWGSL[t]=n);var r={name:t,shader:n};export{r as shadowOnlyVertexShaderWGSL};