import{t as e}from"./shaderStore-bQ-8n2dS.js";var t=`fogVertex`,n=`#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=n);