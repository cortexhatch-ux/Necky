import{t as e}from"./shaderStore-bQ-8n2dS.js";import"./logDepthDeclaration-BOKKEPRo.js";import"./sceneUboDeclaration-BDZ8PqDY.js";import"./clipPlaneVertexDeclaration-Cm_MWBGX.js";import"./fogVertexDeclaration-CRUigvwz.js";import"./clipPlaneVertex-BAy0m0JW.js";import"./fogVertex-gcUsGPrM.js";import"./logDepthVertex-DDFdBtSC.js";import"./instancesDeclaration-DUHF1keh.js";import"./instancesVertex-ynQpGKxR.js";import"./sceneVertexDeclaration-ID-nq4hB.js";var t=`gridVertexShader`,n=`precision highp float;attribute vec3 position;attribute vec3 normal;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#include<instancesDeclaration>
#include<__decl__sceneVertex>
varying vec3 vPosition;varying vec3 vNormal;
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#ifdef OPACITY
varying vec2 vOpacityUV;uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;
#endif
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
vec4 worldPos=finalWorld*vec4(position,1.0);
#include<fogVertex>
vec4 cameraSpacePosition=view*worldPos;gl_Position=projection*cameraSpacePosition;
#ifdef OPACITY
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
if (vOpacityInfos.x==0.)
{vOpacityUV=vec2(opacityMatrix*vec4(uv,1.0,0.0));}
else
{vOpacityUV=vec2(opacityMatrix*vec4(uv2,1.0,0.0));}
#endif 
#include<clipPlaneVertex>
#include<logDepthVertex>
vPosition=position;vNormal=normal;
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStore[t]||(e.ShadersStore[t]=n);var r={name:t,shader:n};export{r as gridVertexShader};