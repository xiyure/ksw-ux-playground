"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/vue/dist/vue.runtime.esm-bundler.cjs");const n=require("../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.cjs"),c=require("../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.cjs"),d=({from:r,replacement:t,scope:i,version:s,ref:e,type:o="API"},u)=>{n.watch(()=>c.unref(u),a=>{a&&console.warn(`${i}[${o}] ${r} is about to be deprecated in version ${s}, please use ${t} instead.
${e?`For more detail, please visit:${e}`:"."}
`)},{immediate:!0})};exports.useDeprecated=d;
