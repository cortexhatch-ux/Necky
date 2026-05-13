import{t as e}from"./shaderStore-bQ-8n2dS.js";import"./clipPlaneFragmentDeclaration-ZZt1u0E8.js";import"./logDepthDeclaration-1ak07yEo.js";import"./fogFragmentDeclaration-BOyx14j6.js";import"./logDepthFragment-DDPGb99M.js";import"./fogFragment-B8_8g7R3.js";import"./clipPlaneFragment-DT-BrgNr.js";import"./helperFunctions-BRCZ8AAh.js";import"./lightUboDeclaration-CwCBik3B.js";import"./lightsFragmentFunctions-CFxzLsi0.js";import"./shadowsFragmentFunctions-AeX83iOw.js";import"./lightFragment-CJuV9-8g.js";import"./depthPrePass-BDjIQpR2.js";import"./imageProcessingCompatibility-BrMlNFiM.js";var t=`gradientPixelShader`,n=`uniform vEyePosition: vec4f;uniform topColor: vec4f;uniform bottomColor: vec4f;uniform offset: f32;uniform scale: f32;uniform smoothness: f32;varying vPositionW: vec3f;varying vPosition: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#ifdef VERTEXCOLOR
varying vColor: vec4f;
#endif
#include<helperFunctions>
#include<lightUboDeclaration>[0]
#include<lightUboDeclaration>[1]
#include<lightUboDeclaration>[2]
#include<lightUboDeclaration>[3]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying vViewDepth: f32;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var viewDirectionW: vec3f=normalize(uniforms.vEyePosition.xyz-fragmentInputs.vPositionW);var h: f32=fragmentInputs.vPosition.y*uniforms.scale+uniforms.offset;var mysmoothness: f32=clamp(uniforms.smoothness,0.01,max(uniforms.smoothness,10.));var baseColor: vec4f=mix(uniforms.bottomColor,uniforms.topColor,vec4f(max(pow(max(h,0.0),mysmoothness),0.0)));var diffuseColor: vec3f=baseColor.rgb;var alpha: f32=baseColor.a;
#ifdef ALPHATEST
if (baseColor.a<0.4) {discard;}
#endif
#include<depthPrePass>
#ifdef VERTEXCOLOR
baseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);
#endif
#ifdef NORMAL
var normalW: vec3f=normalize(fragmentInputs.vNormalW);
#else
var normalW: vec3f= vec3f(1.0,1.0,1.0);
#endif
#ifdef EMISSIVE
var diffuseBase: vec3f=baseColor.rgb;
#else
var diffuseBase: vec3f= vec3f(0.,0.,0.);
#endif
var info: lightingInfo;var shadow: f32=1.;var glossiness: f32=0.;var aggShadow: f32=0.;var numLights: f32=0.;
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=fragmentInputs.vColor.a;
#endif
var finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;var color: vec4f= vec4f(finalDiffuse,alpha);
#include<logDepthFragment>
#include<fogFragment>
fragmentOutputs.color=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;e.ShadersStoreWGSL[t]||(e.ShadersStoreWGSL[t]=n);var r={name:t,shader:n};export{r as gradientPixelShaderWGSL};