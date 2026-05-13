import{t as e}from"./shaderStore-bQ-8n2dS.js";import"./clipPlaneFragmentDeclaration-BGXYPcbz.js";import"./logDepthDeclaration-BOKKEPRo.js";import"./fogFragmentDeclaration-046t1and.js";import"./logDepthFragment-DYgP7-SO.js";import"./fogFragment-ByeiFS94.js";import"./clipPlaneFragment-BcsQ9pp9.js";import"./sceneUboDeclaration-BDZ8PqDY.js";import"./helperFunctions-DEE_h49l.js";import"./sceneFragmentDeclaration-VOFC5e28.js";import"./lightFragmentDeclaration--CHbLTG0.js";import"./lightUboDeclaration-zzIuxubo.js";import"./lightsFragmentFunctions-Big26y8P.js";import"./shadowsFragmentFunctions-4-uzT4f8.js";import"./lightFragment-CctGscWP.js";import"./imageProcessingCompatibility-B2fftj9W.js";var t=`shadowOnlyPixelShader`,n=`precision highp float;
#include<__decl__sceneFragment>
uniform float alpha;uniform vec3 shadowColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying float vViewDepth;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0..1]
vec4 color=vec4(shadowColor,(1.0-clamp(shadow,0.,1.))*alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[t]||(e.ShadersStore[t]=n);var r={name:t,shader:n};export{r as shadowOnlyPixelShader};