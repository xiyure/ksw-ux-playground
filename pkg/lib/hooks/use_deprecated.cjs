"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue"),c=({from:i,replacement:r,scope:s,version:a,ref:e,type:o="API"},u)=>{t.watch(()=>t.unref(u),n=>{n&&console.warn(`${s}[${o}] ${i} is about to be deprecated in version ${a}, please use ${r} instead.
${e?`For more detail, please visit:${e}`:"."}
`)},{immediate:!0})};exports.useDeprecated=c;
