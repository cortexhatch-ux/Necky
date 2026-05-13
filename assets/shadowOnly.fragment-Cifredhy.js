import{t as e}from"./shaderStore-bQ-8n2dS.js";import"./clipPlaneFragmentDeclaration-ZZt1u0E8.js";import"./logDepthDeclaration-1ak07yEo.js";import"./fogFragmentDeclaration-BOyx14j6.js";import"./logDepthFragment-DDPGb99M.js";import"./fogFragment-B8_8g7R3.js";import"./clipPlaneFragment-DT-BrgNr.js";import"./sceneUboDeclaration--w76Qnh2.js";import"./helperFunctions-BRCZ8AAh.js";import"./lightUboDeclaration-CwCBik3B.js";import"./lightsFragmentFunctions-CFxzLsi0.js";import"./shadowsFragmentFunctions-AeX83iOw.js";import"./lightFragment-CJuV9-8g.js";var t=`shadowOnlyPixelShader`,n=`#include<sceneUboDeclaration>
uniform alpha: f32;uniform shadowColor: vec3f;varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#include<helperFunctions>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
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
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);
#ifdef NORMAL
var normalW: vec3f=normalize(fragmentInputs.vNormalW);
#else
var normalW: vec3f= vec3f(1.0,1.0,1.0);
#endif
var diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;var shadow: f32=1.;var glossiness: f32=0.;var aggShadow: f32=0.;var numLights: f32=0.;
#include<lightFragment>[0..1]
var color: vec4f= vec4f(uniforms.shadowColor,(1.0-clamp(shadow,0.,1.))*uniforms.alpha);
#include<logDepthFragment>
#include<fogFragment>
fragmentOutputs.color=color;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;e.ShadersStoreWGSL[t]||(e.ShadersStoreWGSL[t]=n);var r={name:t,shader:n};export{r as shadowOnlyPixelShaderWGSL};