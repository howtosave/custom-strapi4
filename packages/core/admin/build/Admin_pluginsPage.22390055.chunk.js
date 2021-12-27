(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[3677],{32252:(e,t,a)=>{"use strict";var l=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(32735)),r=a(84968),u=a(5636),i=a(10938),s=a(11856),d=a(16540),o=a(29270),c=a(95602),f=a(53214),p=a(1884),m=function(){var e=(0,u.useIntl)().formatMessage;(0,i.useFocusWhenNavigate)();var t=(0,o.useNotifyAT)().notifyStatus,a=(0,i.useNotification)(),l=e({id:"app.components.ListPluginsPage.title",defaultMessage:"Plugins"}),m=function(){t(e({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:l}))},g=(0,r.useQuery)("list-plugins",(function(){return(0,p.fetchPlugins)(m)}),{onError:function(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),h=g.status,v=g.data;return"success"!==h&&"error"!==h?n.default.createElement(s.Layout,null,n.default.createElement(d.Main,{"aria-busy":!0},n.default.createElement(i.LoadingIndicatorPage,null))):n.default.createElement(s.Layout,null,n.default.createElement(d.Main,null,n.default.createElement(s.HeaderLayout,{title:l,subtitle:e({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),n.default.createElement(s.ContentLayout,null,n.default.createElement(f.Table,{colCount:2,rowCount:(null===v||void 0===v?void 0:v.plugins.length)+1},n.default.createElement(f.Thead,null,n.default.createElement(f.Tr,null,n.default.createElement(f.Th,null,n.default.createElement(c.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"Settings.roles.list.header.name",defaultMessage:"Name"}))),n.default.createElement(f.Th,null,n.default.createElement(c.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"Settings.roles.list.header.description",defaultMessage:"description"}))))),n.default.createElement(f.Tbody,null,v.plugins.map((function(e){var t=e.name,a=e.displayName,l=e.description;return n.default.createElement(f.Tr,{key:t},n.default.createElement(f.Td,null,n.default.createElement(c.Typography,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},a)),n.default.createElement(f.Td,null,n.default.createElement(c.Typography,{textColor:"neutral800"},l)))})))))))};t.default=m},64305:(e,t,a)=>{"use strict";var l=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(32735)),r=a(10938),u=a(99357),i=a(5636),s=l(a(59700)),d=l(a(32252)),o=function(){var e=(0,(0,i.useIntl)().formatMessage)({id:"app.components.ListPluginsPage.title",defaultMessage:"Plugins"});return n.default.createElement(r.CheckPagePermissions,{permissions:s.default.marketplace.main},n.default.createElement(u.Helmet,{title:e}),n.default.createElement(d.default,null))};t.default=o},1884:(e,t,a)=>{"use strict";var l=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPlugins=void 0;var n=l(a(28129)),r=l(a(68357)),u=a(17888),i=function(){var e=(0,r.default)(n.default.mark((function e(t){var a,l;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.axiosInstance.get("/admin/plugins");case 2:return a=e.sent,l=a.data,t(),e.abrupt("return",l);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.fetchPlugins=i}}]);