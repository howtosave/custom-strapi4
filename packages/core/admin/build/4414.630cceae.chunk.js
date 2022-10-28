(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[4414],{71657:(w,z,g)=>{"use strict";w.exports=g(16966)},16966:function(w,z,g){(function(T,m){w.exports=m(g(32735),g(19615),g(63797))})(this,function(T,m,v){return function(r){var c={};function n(i){if(c[i])return c[i].exports;var o=c[i]={i,l:!1,exports:{}};return r[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=r,n.c=c,n.d=function(i,o,f){n.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:f})},n.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,o){if(1&o&&(i=n(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var f=Object.create(null);if(n.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var s in i)n.d(f,s,function(l){return i[l]}.bind(null,s));return f},n.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(o,"a",o),o},n.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},n.p="",n(n.s=112)}({0:function(r,c,n){r.exports=n(19)()},1:function(r,c){r.exports=T},10:function(r,c,n){var i=n(25),o=n(26),f=n(22),s=n(27);r.exports=function(l,p){return i(l)||o(l,p)||f(l,p)||s()},r.exports.default=r.exports,r.exports.__esModule=!0},112:function(r,c,n){"use strict";n.r(c),n.d(c,"Crumb",function(){return C}),n.d(c,"Breadcrumbs",function(){return k});var i,o=n(4),f=n.n(o),s=n(3),l=n.n(s),p=n(1),h=n.n(p),b=n(0),x=n.n(b),a=n(2),d=n.n(a),O=n(48),y=n.n(O),_=n(8),S=n(6),e=n(9),t=n(18),u=["children","label"],P=d()(e.Flex)(i||(i=l()([`
  svg {
    height: `,`rem;
    width: `,`rem;
    path {
      fill: `,`;
    }
  }
  :last-of-type `,` {
    display: none;
  }
  :last-of-type `,` {
    color: `,`;
    font-weight: `,`;
  }
`])),.625,.625,function(j){return j.theme.colors.neutral500},S.Box,_.Typography,function(j){return j.theme.colors.neutral800},function(j){return j.theme.fontWeights.bold}),C=function(j){var A=j.children;return h.a.createElement(P,{inline:!0,as:"li"},h.a.createElement(_.Typography,{variant:"pi",textColor:"neutral600"},A),h.a.createElement(S.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},h.a.createElement(y.a,null)))};C.displayName="Crumb",C.propTypes={children:x.a.node.isRequired};var E=x.a.shape({type:x.a.oneOf([C])}),k=function(j){var A=j.children,R=j.label,H=f()(j,u);return h.a.createElement(e.Flex,H,h.a.createElement(t.VisuallyHidden,null,R),h.a.createElement("ol",{"aria-hidden":!0},A))};k.displayName="Breadcrumbs",k.propTypes={children:x.a.oneOfType([x.a.arrayOf(E),E]).isRequired,label:x.a.string.isRequired}},13:function(r,c){function n(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(r.exports=n=function(o){return typeof o},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=n=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r.exports.default=r.exports,r.exports.__esModule=!0),n(i)}r.exports=n,r.exports.default=r.exports,r.exports.__esModule=!0},18:function(r,c,n){"use strict";n.r(c),n.d(c,"VisuallyHidden",function(){return l});var i,o=n(3),f=n.n(o),s=n(2),l=n.n(s).a.div(i||(i=f()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(r,c,n){"use strict";var i=n(20);function o(){}function f(){}f.resetWarningCache=o,r.exports=function(){function s(h,b,x,a,d,O){if(O!==i){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}function l(){return s}s.isRequired=s;var p={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:f,resetWarningCache:o};return p.PropTypes=p,p}},2:function(r,c){r.exports=m},20:function(r,c,n){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(r,c){r.exports=function(n,i){(i==null||i>n.length)&&(i=n.length);for(var o=0,f=new Array(i);o<i;o++)f[o]=n[o];return f},r.exports.default=r.exports,r.exports.__esModule=!0},22:function(r,c,n){var i=n(21);r.exports=function(o,f){if(o){if(typeof o=="string")return i(o,f);var s=Object.prototype.toString.call(o).slice(8,-1);return s==="Object"&&o.constructor&&(s=o.constructor.name),s==="Map"||s==="Set"?Array.from(o):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?i(o,f):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},24:function(r,c){r.exports=function(n,i){if(n==null)return{};var o,f,s={},l=Object.keys(n);for(f=0;f<l.length;f++)o=l[f],i.indexOf(o)>=0||(s[o]=n[o]);return s},r.exports.default=r.exports,r.exports.__esModule=!0},25:function(r,c){r.exports=function(n){if(Array.isArray(n))return n},r.exports.default=r.exports,r.exports.__esModule=!0},26:function(r,c){r.exports=function(n,i){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var f,s,l=[],p=!0,h=!1;try{for(o=o.call(n);!(p=(f=o.next()).done)&&(l.push(f.value),!i||l.length!==i);p=!0);}catch(b){h=!0,s=b}finally{try{p||o.return==null||o.return()}finally{if(h)throw s}}return l}},r.exports.default=r.exports,r.exports.__esModule=!0},27:function(r,c){r.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},3:function(r,c){r.exports=function(n,i){return i||(i=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(i)}}))},r.exports.default=r.exports,r.exports.__esModule=!0},4:function(r,c,n){var i=n(24);r.exports=function(o,f){if(o==null)return{};var s,l,p=i(o,f);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(o);for(l=0;l<h.length;l++)s=h[l],f.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(o,s)&&(p[s]=o[s])}return p},r.exports.default=r.exports,r.exports.__esModule=!0},48:function(r,c){r.exports=v},6:function(r,c,n){"use strict";n.r(c),n.d(c,"Box",function(){return S});var i,o=n(3),f=n.n(o),s=n(2),l=n.n(s),p=n(7),h=n(1),b=n.n(h),x=n(0),a=n.n(x),d=function(e){return b.a.createElement("div",e)},O={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},y={_hover:a.a.func,background:a.a.string,basis:a.a.oneOfType([a.a.string,a.a.string]),borderColor:a.a.string,children:a.a.oneOfType([a.a.node,a.a.string]),color:a.a.string,flex:a.a.oneOfType([a.a.string,a.a.string]),grow:a.a.oneOfType([a.a.string,a.a.string]),hasRadius:a.a.bool,hiddenS:a.a.bool,hiddenXS:a.a.bool,padding:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingBottom:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingLeft:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingRight:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingTop:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),shadow:a.a.string,shrink:a.a.oneOfType([a.a.string,a.a.string])};d.defaultProps=O,d.propTypes=y;var _={color:!0},S=l.a.div.withConfig({shouldForwardProp:function(e,t){return!_[e]&&t(e)}})(i||(i=f()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var t=e.fontSize;return e.theme.fontSizes[t]||t},function(e){var t=e.theme,u=e.background;return t.colors[u]},function(e){var t=e.theme,u=e.color;return t.colors[u]},function(e){var t=e.theme,u=e.padding;return Object(p.a)("padding",u,t)},function(e){var t=e.theme,u=e.paddingTop;return Object(p.a)("padding-top",u,t)},function(e){var t=e.theme,u=e.paddingRight;return Object(p.a)("padding-right",u,t)},function(e){var t=e.theme,u=e.paddingBottom;return Object(p.a)("padding-bottom",u,t)},function(e){var t=e.theme,u=e.paddingLeft;return Object(p.a)("padding-left",u,t)},function(e){var t=e.theme,u=e.marginLeft;return Object(p.a)("margin-left",u,t)},function(e){var t=e.theme,u=e.marginRight;return Object(p.a)("margin-right",u,t)},function(e){var t=e.theme,u=e.marginTop;return Object(p.a)("margin-top",u,t)},function(e){var t=e.theme,u=e.marginBottom;return Object(p.a)("margin-bottom",u,t)},function(e){var t=e.theme;return e.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0},function(e){var t=e.theme;return e.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0},function(e){var t=e.theme,u=e.hasRadius,P=e.borderRadius;return u?t.borderRadius:P},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var t=e.borderColor;return e.theme.colors[t]},function(e){var t=e.theme,u=e.borderColor,P=e.borderStyle,C=e.borderWidth;if(u&&!P&&!C)return"1px solid ".concat(t.colors[u])},function(e){var t=e.theme,u=e.shadow;return t.shadows[u]},function(e){return e.pointerEvents},function(e){var t=e._hover,u=e.theme;return t?t(u):void 0},function(e){return e.display},function(e){return e.position},function(e){var t=e.left;return e.theme.spaces[t]||t},function(e){var t=e.right;return e.theme.spaces[t]||t},function(e){var t=e.top;return e.theme.spaces[t]||t},function(e){var t=e.bottom;return e.theme.spaces[t]||t},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var t=e.width;return e.theme.spaces[t]||t},function(e){var t=e.maxWidth;return e.theme.spaces[t]||t},function(e){var t=e.minWidth;return e.theme.spaces[t]||t},function(e){var t=e.height;return e.theme.spaces[t]||t},function(e){var t=e.maxHeight;return e.theme.spaces[t]||t},function(e){var t=e.minHeight;return e.theme.spaces[t]||t},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});S.defaultProps=O,S.propTypes=y},7:function(r,c,n){"use strict";var i=n(10),o=n.n(i),f=n(13),s=n.n(f);c.a=function(l,p,h){var b=p;if(Array.isArray(p)||s()(p)!=="object"||(b=[p==null?void 0:p.desktop,p==null?void 0:p.tablet,p==null?void 0:p.mobile]),b!==void 0){if(Array.isArray(b)){var x=b,a=o()(x,3),d=a[0],O=a[1],y=a[2],_="".concat(l,": ").concat(h.spaces[d],";");return O!==void 0&&(_+="".concat(h.mediaQueries.tablet,`{
          `).concat(l,": ").concat(h.spaces[O],`;
        }`)),y!==void 0&&(_+="".concat(h.mediaQueries.mobile,`{
          `).concat(l,": ").concat(h.spaces[y],`;
        }`)),_}var S=h.spaces[b]||b;return"".concat(l,": ").concat(S,";")}}},8:function(r,c,n){"use strict";n.r(c),n.d(c,"Typography",function(){return S});var i,o=n(3),f=n.n(o),s=n(2),l=n.n(s),p=["alpha","beta","delta","epsilon","omega","pi","sigma"],h=n(1),b=n.n(h),x=n(0),a=n.n(x),d=function(e){return b.a.createElement("div",e)},O={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},y={ellipsis:a.a.bool,fontSize:a.a.oneOfType([a.a.number,a.a.string]),fontWeight:a.a.string,lineHeight:a.a.oneOfType([a.a.number,a.a.string]),textColor:a.a.string,textTransform:a.a.string,variant:a.a.oneOf(p)};d.defaultProps=O,d.propTypes=y;var _={fontSize:!0,fontWeight:!0},S=l.a.span.withConfig({shouldForwardProp:function(e,t){return!_[e]&&t(e)}})(i||(i=f()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(e){var t=e.theme,u=e.fontWeight;return t.fontWeights[u]},function(e){var t=e.theme,u=e.fontSize;return t.fontSizes[u]},function(e){var t=e.theme,u=e.lineHeight;return t.lineHeights[u]},function(e){var t=e.theme,u=e.textColor;return t.colors[u||"neutral800"]},function(e){return e.textTransform},function(e){return e.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(e){var t=e.variant,u=e.theme;switch(t){case"alpha":return`
        font-weight: `.concat(u.fontWeights.bold,`;
        font-size: `).concat(u.fontSizes[5],`;
        line-height: `).concat(u.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(u.fontWeights.bold,`;
        font-size: `).concat(u.fontSizes[4],`;
        line-height: `).concat(u.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(u.fontWeights.semiBold,`;
        font-size: `).concat(u.fontSizes[3],`;
        line-height: `).concat(u.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(u.fontSizes[3],`;
        line-height: `).concat(u.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(u.fontSizes[2],`;
        line-height: `).concat(u.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(u.fontSizes[1],`;
        line-height: `).concat(u.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(u.fontWeights.bold,`;
        font-size: `).concat(u.fontSizes[0],`;
        line-height: `).concat(u.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(u.fontSizes[2],`;
      `)}});S.defaultProps=O,S.propTypes=y},9:function(r,c,n){"use strict";n.r(c),n.d(c,"Flex",function(){return e});var i,o=n(3),f=n.n(o),s=n(2),l=n.n(s),p=n(6),h=n(7),b=n(1),x=n.n(b),a=n(0),d=n.n(a),O=function(t){return x.a.createElement("div",t)},y={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},_={alignItems:d.a.string,basis:d.a.oneOfType([d.a.string,d.a.number]),direction:d.a.string,gap:d.a.oneOfType([d.a.shape({desktop:d.a.number,mobile:d.a.number,tablet:d.a.number}),d.a.number,d.a.arrayOf(d.a.number),d.a.string]),inline:d.a.bool,justifyContent:d.a.string,reverse:d.a.bool,shrink:d.a.number,wrap:d.a.string};O.defaultProps=y,O.propTypes=_;var S={direction:!0},e=l()(p.Box).withConfig({shouldForwardProp:function(t,u){return!S[t]&&u(t)}})(i||(i=f()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(t){return t.alignItems},function(t){return t.inline?"inline-flex":"flex"},function(t){return t.direction},function(t){return t.shrink},function(t){return t.wrap},function(t){var u=t.gap,P=t.theme;return Object(h.a)("gap",u,P)},function(t){return t.justifyContent});e.defaultProps=y,e.propTypes=_}})})},84802:w=>{function z(g,T,m,v){for(var r=-1,c=g==null?0:g.length;++r<c;){var n=g[r];T(v,n,m(n),g)}return v}w.exports=z},62435:(w,z,g)=>{var T=g(56671);function m(v,r,c,n){return T(v,function(i,o,f){r(n,i,c(i),f)}),n}w.exports=m},85580:(w,z,g)=>{var T=g(84802),m=g(62435),v=g(88904),r=g(77236);function c(n,i){return function(o,f){var s=r(o)?T:m,l=i?i():{};return s(o,n,v(f,2),l)}}w.exports=c},3704:(w,z,g)=>{var T=g(40314),m=g(37213);function v(r,c){return T(m(r,c),1)}w.exports=v},81346:(w,z,g)=>{var T=g(40999),m=g(85580),v=Object.prototype,r=v.hasOwnProperty,c=m(function(n,i,o){r.call(n,o)?n[o].push(i):T(n,o,[i])});w.exports=c},47169:(w,z,g)=>{"use strict";g.d(z,{Z:()=>T});function T(m,v,r){return v in m?Object.defineProperty(m,v,{value:r,enumerable:!0,configurable:!0,writable:!0}):m[v]=r,m}}}]);
