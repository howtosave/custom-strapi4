"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[3981],{35872:(A,i,e)=>{e.r(i),e.d(i,{default:()=>S});var t=e(32735),m=e(5636),l=e(19615),y=e(99357),C=e(5141),c=e(484),h=e(11856),v=e(16540),d=e(9808),p=e(78330);const T=e.p+"fb376b132d18bf4522ca.png";var f=e(55187);const E=o=>Object.entries(o).every(([,s])=>Object.entries(s).every(([,a])=>a));var H=e(60216),u=e.n(H),g=e(95602),G=e(90662);const $=(0,l.default)(g.Typography)`
  word-break: break-word;
`,M=(0,l.default)(G.Stack)`
  align-items: flex-start;
`,r=({hasCreatedContentType:o,onCreateCT:s})=>{const{formatMessage:a}=(0,m.useIntl)();return t.createElement("div",null,t.createElement(d.Box,{paddingLeft:6,paddingBottom:10},t.createElement(M,{spacing:5},t.createElement(g.Typography,{as:"h1",variant:"alpha"},a(o?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})))))};r.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},r.propTypes={hasCreatedContentType:u().bool,onCreateCT:u().func};const P=r,L=(0,l.default)(d.Box)`
  position: absolute;
  top: 0;
  right: 0;
  img {
    width: ${150/16}rem;
  }
`,B=()=>{const{collectionTypes:o,singleTypes:s,isLoading:a}=(0,f.bP)(),{guidedTourState:j,isGuidedTourVisible:x,isSkipped:W}=(0,c.useGuidedTour)(),z=!E(j)&&x&&!W,{push:F}=(0,C.useHistory)(),I=n=>{n.preventDefault(),F("/plugins/content-type-builder/content-types/create-content-type")},O=(0,t.useMemo)(()=>{const n=D=>D.filter(b=>b.isDisplayed);return n(o).length>1||n(s).length>0},[o,s]);return a?t.createElement(c.LoadingIndicatorPage,null):t.createElement(h.Layout,null,t.createElement(m.FormattedMessage,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},n=>t.createElement(y.Helmet,{title:n[0]})),t.createElement(v.Main,null,t.createElement(L,null,t.createElement("img",{alt:"","aria-hidden":!0,src:T})),t.createElement(d.Box,{padding:10},t.createElement(p.Grid,null,t.createElement(p.GridItem,{col:8,s:12},t.createElement(P,{onCreateCT:I,hasCreatedContentType:O}))))))},S=(0,t.memo)(B)}}]);
