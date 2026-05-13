import{t as e}from"./shaderStore-bQ-8n2dS.js";var t=`depthPrePass`,n=`#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);return;
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=n);