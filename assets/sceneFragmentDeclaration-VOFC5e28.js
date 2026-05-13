import{t as e}from"./shaderStore-bQ-8n2dS.js";var t=`sceneFragmentDeclaration`,n=`uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=n);