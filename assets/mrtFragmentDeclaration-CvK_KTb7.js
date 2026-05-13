import{t as e}from"./shaderStore-bQ-8n2dS.js";var t=`mrtFragmentDeclaration`,n=`#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=n);