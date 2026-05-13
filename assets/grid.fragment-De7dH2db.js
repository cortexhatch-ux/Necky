import{t as e}from"./shaderStore-bQ-8n2dS.js";import"./clipPlaneFragmentDeclaration-ZZt1u0E8.js";import"./logDepthDeclaration-1ak07yEo.js";import"./fogFragmentDeclaration-BOyx14j6.js";import"./logDepthFragment-DDPGb99M.js";import"./fogFragment-B8_8g7R3.js";import"./clipPlaneFragment-DT-BrgNr.js";import"./imageProcessingCompatibility-BrMlNFiM.js";var t=`gridPixelShader`,n=`#define SQRT2 1.41421356
#define PI 3.14159
uniform visibility: f32;uniform mainColor: vec3f;uniform lineColor: vec3f;uniform gridControl: vec4f;uniform gridOffset: vec3f;varying vPosition: vec3f;varying vNormal: vec3f;
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#ifdef OPACITY
varying vOpacityUV: vec2f;var opacitySamplerSampler: sampler;var opacitySampler: texture_2d<f32>;uniform vOpacityInfos: vec2f;
#endif
fn getDynamicVisibility(position: f32)->f32 {var majorGridFrequency: f32=uniforms.gridControl.y;if (floor(position+0.5)==floor(position/majorGridFrequency+0.5)*majorGridFrequency)
{return 1.0;}
return uniforms.gridControl.z;}
fn getAnisotropicAttenuation(differentialLength: f32)->f32 {let maxNumberOfLines: f32=10.0;return clamp(1.0/(differentialLength+1.0)-1.0/maxNumberOfLines,0.0,1.0);}
fn isPointOnLine(position: f32,differentialLength: f32)->f32 {var fractionPartOfPosition: f32=position-floor(position+0.5);fractionPartOfPosition=fractionPartOfPosition/differentialLength;
#ifdef ANTIALIAS
fractionPartOfPosition=clamp(fractionPartOfPosition,-1.,1.);var result: f32=0.5+0.5*cos(fractionPartOfPosition*PI);return result;
#else
if (abs(fractionPartOfPosition)<SQRT2/4.) {return 1.;}
return 0.;
#endif
}
fn contributionOnAxis(position: f32)->f32 {var differentialLength: f32=length( vec2f(dpdx(position),dpdy(position)));differentialLength=differentialLength*SQRT2;var result: f32=isPointOnLine(position,differentialLength);var dynamicVisibility: f32=getDynamicVisibility(position);result=result*dynamicVisibility;var anisotropicAttenuation: f32=getAnisotropicAttenuation(differentialLength);result=result*anisotropicAttenuation;return result;}
fn normalImpactOnAxis(x: f32)->f32 {var normalImpact: f32=clamp(1.0-3.0*abs(x*x*x),0.0,1.0);return normalImpact;}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var gridRatio: f32=uniforms.gridControl.x;var gridPos: vec3f=(fragmentInputs.vPosition+uniforms.gridOffset.xyz)/gridRatio;var x: f32=contributionOnAxis(gridPos.x);var y: f32=contributionOnAxis(gridPos.y);var z: f32=contributionOnAxis(gridPos.z);var normal: vec3f=normalize(fragmentInputs.vNormal);x=x*normalImpactOnAxis(normal.x);y=y*normalImpactOnAxis(normal.y);z=z*normalImpactOnAxis(normal.z);
#ifdef MAX_LINE
var grid: f32=clamp(max(max(x,y),z),0.,1.);
#else
var grid: f32=clamp(x+y+z,0.,1.);
#endif
var color: vec4f=vec4f(mix(uniforms.mainColor,uniforms.lineColor,vec3f(grid)),1.0);
#ifdef FOG
#include<fogFragment>
#endif
var opacity: f32=1.0;
#ifdef TRANSPARENT
opacity=clamp(grid,0.08,uniforms.gridControl.w*grid);
#endif
#ifdef OPACITY
opacity=opacity*textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV).a;
#endif
fragmentOutputs.color= vec4f(color.rgb,opacity*uniforms.visibility);
#ifdef TRANSPARENT
#ifdef PREMULTIPLYALPHA
fragmentOutputs.color=vec4f(fragmentOutputs.color.rgb*opacity,fragmentOutputs.color.a);
#endif
#else
#endif
#include<logDepthFragment>
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;e.ShadersStoreWGSL[t]||(e.ShadersStoreWGSL[t]=n);var r={name:t,shader:n};export{r as gridPixelShaderWGSL};