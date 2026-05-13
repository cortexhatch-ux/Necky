import{t as e}from"./shaderStore-bQ-8n2dS.js";import"./logDepthDeclaration-BOKKEPRo.js";import"./sceneUboDeclaration-BDZ8PqDY.js";import"./clipPlaneVertexDeclaration-Cm_MWBGX.js";import"./fogVertexDeclaration-CRUigvwz.js";import"./clipPlaneVertex-BAy0m0JW.js";import"./fogVertex-gcUsGPrM.js";import"./logDepthVertex-DDFdBtSC.js";import"./bonesDeclaration-Bis6URIb.js";import"./bakedVertexAnimation-P-O0So21.js";import"./instancesDeclaration-DUHF1keh.js";import"./instancesVertex-ynQpGKxR.js";import"./bonesVertex-p8DZJHnk.js";import"./sceneVertexDeclaration-ID-nq4hB.js";import"./shadowsVertex-CYtdD7yW.js";import"./lightFragmentDeclaration--CHbLTG0.js";import"./lightUboDeclaration-zzIuxubo.js";var t=`shadowOnlyVertexShader`,n=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<__decl__sceneVertex>
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying float vViewDepth;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;e.ShadersStore[t]||(e.ShadersStore[t]=n);var r={name:t,shader:n};export{r as shadowOnlyVertexShader};