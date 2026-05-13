import{p as e}from"./math.scalar.functions-Div_o1w0.js";import{t}from"./shaderStore-bQ-8n2dS.js";var n=e({clipPlaneFragmentDeclarationWGSL:()=>a}),r=`clipPlaneFragmentDeclaration`,i=`#ifdef CLIPPLANE
varying fClipDistance: f32;
#endif
#ifdef CLIPPLANE2
varying fClipDistance2: f32;
#endif
#ifdef CLIPPLANE3
varying fClipDistance3: f32;
#endif
#ifdef CLIPPLANE4
varying fClipDistance4: f32;
#endif
#ifdef CLIPPLANE5
varying fClipDistance5: f32;
#endif
#ifdef CLIPPLANE6
varying fClipDistance6: f32;
#endif
`;t.IncludesShadersStoreWGSL[r]||(t.IncludesShadersStoreWGSL[r]=i);var a={name:r,shader:i};export{n as t};