"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var assert=require("assert"),module$1=require("module"),path=require("path");function _interopDefaultLegacy(A){return A&&"object"==typeof A&&"default"in A?A:{default:A}}var assert__default=_interopDefaultLegacy(assert),module__default=_interopDefaultLegacy(module$1),g;const A=1===new Uint8Array(new Uint16Array([1]).buffer)[0];function parse(g,E="@"){if(!C)return init.then(()=>parse(g));var e=g.length+1,I=(C.__heap_base.value||C.__heap_base)+4*e-C.memory.buffer.byteLength,I=(0<I&&C.memory.grow(Math.ceil(I/65536)),C.sa(e-1));if((A?B:Q)(g,new Uint16Array(C.memory.buffer,I,e)),!C.parse())throw Object.assign(new Error(`Parse error ${E}:${g.slice(0,C.e()).split("\n").length}:`+(C.e()-g.lastIndexOf("\n",C.e()-1))),{idx:C.e()});const t=[],r=[];for(;C.ri();){const A=C.is(),Q=C.ie();let B;C.ip()&&(B=function(A){try{return(0,eval)(A)}catch{}}(g.slice(A-1,Q+1))),t.push({n:B,s:A,e:Q,ss:C.ss(),se:C.se(),d:C.id()})}for(;C.re();)r.push(g.slice(C.es(),C.ee()));return[t,r,!!C.f()]}function Q(A,Q){const C=A.length;let B=0;for(;B<C;){const C=A.charCodeAt(B);Q[B++]=(255&C)<<8|C>>>8}}function B(A,Q){var C=A.length;let B=0;for(;B<C;)Q[B]=A.charCodeAt(B++)}let C;const init=WebAssembly.compile((g="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AuAIIgJBAmoiADYC4AggAkEAKALkCEkNAAsLIAELWAACQAJAIAFBIkYNACABQSdHDQFBACgC4AghARAcIAAgAUECakEAKALgCEEAKAKECBABDwtBACgC4AghARAbIAAgAUECakEAKALgCEEAKAKECBABDwsQHgtoAQJ/QQEhAQJAAkAgAEFfaiICQQVLDQBBASACdEExcQ0BCyAAQfj/A3FBKEYNACAAQUZqQf//A3FBBkkNAAJAIABBpX9qIgJBA0sNACACQQFHDQELIABBhX9qQf//A3FBBEkhAQsgAQttAQJ/AkACQANAAkAgAEH//wNxIgFBd2oiAkEXSw0AQQEgAnRBn4CABHENAgsgAUGgAUYNASAAIQIgARApDQJBACECQQBBACgC4AgiAEECajYC4AggAC8BAiIADQAMAgsLIAAhAgsgAkH//wNxC1wBAn8CQEEAKALgCCICLwEAIgNB4QBHDQBBACACQQRqNgLgCBAnIQJBACgC4AghACACECoaQQAoAuAIIQEQJyEDQQAoAuAIIQILAkAgAiAARg0AIAAgARACCyADC4kBAQV/QQAoAuAIIQBBACgC5AghAQN/IABBAmohAgJAAkAgACABTw0AIAIvAQAiA0Gkf2oiBEEBTQ0BIAIhACADQXZqIgNBA0sNAiACIQAgAw4EAAICAAALQQAgAjYC4AgQHkEADwsCQAJAIAQOAgEAAQtBACACNgLgCEHdAA8LIABBBGohAAwACwtJAQF/QQAhBwJAIAAvAQogBkcNACAALwEIIAVHDQAgAC8BBiAERw0AIAAvAQQgA0cNACAALwECIAJHDQAgAC8BACABRiEHCyAHC1MBAX9BACEIAkAgAC8BDCAHRw0AIAAvAQogBkcNACAALwEIIAVHDQAgAC8BBiAERw0AIAAvAQQgA0cNACAALwECIAJHDQAgAC8BACABRiEICyAICwsfAgBBgAgLAgAAAEGECAsQAQAAAAIAAAAABAAAcDgAAA==","undefined"!=typeof window&&"function"==typeof atob?Uint8Array.from(atob(g),A=>A.charCodeAt(0)):Buffer.from(g,"base64"))).then(WebAssembly.instantiate).then(({exports:A})=>{C=A});function getSingleCharEscapes(){return[["b","\b"],["f","\f"],["n","\n"],["r","\r"],["t","\t"],["v","\v"],["0","\0"]].reduce((A,[Q,C])=>(A.set(Q,C),A),new Map)}const SINGLE_CHAR_ESCAPES=getSingleCharEscapes();function stripSlashes(Q,C){let A;var{count:C=1,defaultEscapeValue:B=!0,b:g=B,f:E=B,n:e=B,r:I=B,t=B,v:r=B,0:o=B,x:s=B,u:B=B,uEs6:i=B}=A="number"==typeof C?{count:C}:C&&"object"==typeof C?C:{};const a=getSingleCharEscapes(),n=(g||a.delete("b"),E||a.delete("f"),e||a.delete("n"),I||a.delete("r"),t||a.delete("t"),r||a.delete("v"),o||a.delete("0"),[]);s&&n.push("x[a-fA-F0-9]{2}"),B&&n.push("u[a-fA-F0-9]{4}"),i&&n.push("u{[a-fA-F0-9]+}");var w=new RegExp(`\\\\(${[...n,".","$"].join("|")})`,"g");for(let A=Math.max(1,C>>0);0<A;--A)Q=Q.replace(w,(...[,A])=>{const Q=A;if(1<Q.length){if("x"===Q[0])return String.fromCharCode(Number.parseInt(Q.slice(1),16));var C;if("u"===Q[0])return"{"===Q[1]?(A=Q.slice(2,-1),1114111<(A=Number.parseInt(A,16))?Q:65536<=A?(C=A-65536,""+String.fromCharCode(55296+(C>>10),56320+(1023&C))):String.fromCharCode(A)):String.fromCharCode(Number.parseInt(Q.slice(1),16))}return a.get(Q)||Q});return Q}[...SINGLE_CHAR_ESCAPES.keys()].reduce((A,Q)=>(A.set(SINGLE_CHAR_ESCAPES.get(Q),"\\"+Q),A),new Map);const isConstantStringLiteral=Q=>{var C=["'",'"',"`"].find(A=>Q.startsWith(A)&&Q.endsWith(A));if(null==C)return!1;for(let A=1;A<Q.length-1;A++){if(Q[A]===C&&"\\"!==Q[A-1])return!1;if("`"===C&&"${"===Q.substring(A,A+2)&&"\\"!==Q[A-1])return!1}return!0},builtinModules=new Set(module__default.default.builtinModules),parseType=A=>0===A.length?"invalid":A.startsWith("/")?"absolute":A.startsWith(".")?"relative":builtinModules.has(A)?"builtin":"package",require$1=module$1.createRequire("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("index.js",document.baseURI).href),resolve=(A,Q)=>{try{return require$1.resolve(Q,{paths:[path.dirname(A)]})}catch{return}},parseModuleSpecifier=(A,{isDynamicImport:Q,resolveFrom:C})=>{assert__default.default(Q||isConstantStringLiteral(A));var{isConstant:Q,value:B}=!Q||isConstantStringLiteral(A)?{isConstant:!0,value:stripSlashes(A.substring(1,A.length-1))}:{isConstant:!1,value:void 0};return{type:Q?parseType(B):"unknown",isConstant:Q,code:A,value:B,resolved:"string"==typeof C&&Q?resolve(C,B):void 0}},separatorRegex=/^(?:\s+|,)$/u,skipSeparators=(A,Q)=>{for(;Q<A.length&&separatorRegex.test(A[Q]);)Q++;return Q},skipNonSeparators=(A,Q)=>{for(;Q<A.length&&!separatorRegex.test(A[Q]);)Q++;return Q},parseNamedImports=(A,Q)=>{for(var C=++Q;Q<A.length&&"}"!==A[Q];)Q++;return{namedImports:A.substring(C,Q++).split(",").map(A=>{var Q;return(A=A.trim()).includes(" ")?{specifier:(Q=A.split(" "))[0],binding:Q[Q.length-1]}:{specifier:A,binding:A}}).filter(({specifier:A})=>0<A.length),i:Q}},parseNamespaceImport=(A,Q)=>{Q++,Q=skipSeparators(A,Q),Q+="as".length;var C=Q=skipSeparators(A,Q);return Q=skipNonSeparators(A,Q),{namespaceImport:A.substring(C,Q),i:Q}},parseDefaultImport=(A,Q)=>{var C=Q;return Q=skipNonSeparators(A,Q),{defaultImport:A.substring(C,Q),i:Q}},parseImportClause=Q=>{let C,B;const g=[];for(let A=0;A<Q.length;A++){var E;separatorRegex.test(Q[A])||("{"===Q[A]?({namedImports:E,i:A}=parseNamedImports(Q,A),g.push(...E)):"*"===Q[A]?{namespaceImport:B,i:A}=parseNamespaceImport(Q,A):{defaultImport:C,i:A}=parseDefaultImport(Q,A))}return{default:C,namespace:B,named:g}},parseImports=async(I,{resolveFrom:t}={})=>{const[Q]=await parse(I,null==t?void 0:t);return{*[Symbol.iterator](){for(var{d:A,ss:C,s:B,e:g}of Q){var E=-1<A,e=(E||(B--,g++),I.substring(B,g)),e=parseModuleSpecifier(e,{isDynamicImport:E,resolveFrom:t});let Q;if(!E){let A=I.substring(C+"import".length,B).trim();A.endsWith("from")&&(A=A.substring(0,A.length-"from".length)),Q=parseImportClause(A)}yield{...E?{startIndex:A,endIndex:g+1}:{startIndex:C,endIndex:g},isDynamicImport:E,moduleSpecifier:e,importClause:Q}}}}},transformName=A=>A.replace(/\B([A-Z])/g,"-$1").toLowerCase(),buildImportStatement=(A,Q)=>`import ${A} from "${Q}";
`,transform=(Q,e)=>{var A=/<script[\s\S]*?>/.exec(Q),C=/<\/script>/.exec(Q);if(!A||!C)return Promise.resolve(Q);A=A.index+A[0].length,C=C.index;const I=Q.slice(0,A),t=Q.slice(A,C),r=Q.slice(C,Q.length);return parseImports(t).then(A=>{let Q=0;var C;const B=[];for(const g of A)if(!g.isDynamicImport&&g.moduleSpecifier.value&&g.moduleSpecifier.value===e.name){if(C=g.startIndex,B.push(t.slice(Q,C)),g.importClause&&g.moduleSpecifier.value){const E=[];g.importClause.default&&E.push(buildImportStatement(g.importClause.default,g.moduleSpecifier.value)),g.importClause.named.forEach(A=>{E.push(buildImportStatement(A.binding,"function"==typeof e.path?e.path(A.specifier):`${e.name}/${e.path}/${transformName(A.specifier)}/`+(e.main||transformName(A.specifier))))}),B.push(E.join(""))}Q=g.endIndex}return B.push(t.slice(Q,t.length)),I+B.join("")+r}).catch(A=>(console.error("uniapp-import-loader parse error",A),Q))};exports.transform=transform,exports.transformName=transformName;
