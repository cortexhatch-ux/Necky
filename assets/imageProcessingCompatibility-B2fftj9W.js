import{t as e}from"./shaderStore-bQ-8n2dS.js";var t=`imageProcessingCompatibility`,n=`#ifdef IMAGEPROCESSINGPOSTPROCESS
gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=n);