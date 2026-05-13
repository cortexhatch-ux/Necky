import{p as e}from"./math.scalar.functions-Div_o1w0.js";import{t}from"./shaderStore-bQ-8n2dS.js";import"./helperFunctions-BRCZ8AAh.js";var n=e({rgbdEncodePixelShaderWGSL:()=>a}),r=`rgbdEncodePixelShader`,i=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb);}`;t.ShadersStoreWGSL[r]||(t.ShadersStoreWGSL[r]=i);var a={name:r,shader:i};export{n as t};