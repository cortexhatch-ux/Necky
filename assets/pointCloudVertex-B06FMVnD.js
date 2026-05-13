import{t as e}from"./shaderStore-bQ-8n2dS.js";var t=`pointCloudVertex`,n=`#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=n);