!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("dtree-table",[],t):"object"==typeof exports?exports["dtree-table"]=t():e["dtree-table"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=9)}([function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+v+'~="'+e.id+'"]');if(r){if(p)return g;r.parentNode.removeChild(r)}if(y){var o=h++;r=f||(f=i()),t=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(v,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(13),d={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,g=function(){},m=null,v="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,i){p=n,m=i||{};var o=l(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=d[s.id];a.refs--,n.push(a)}t?(o=l(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete d[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,i,o){var s,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,a=e.default);var l="function"==typeof a?a.options:a;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=d):r&&(d=r),d){var u=l.functional,f=u?l.render:l.beforeCreate;u?(l._injectStyles=d,l.render=function(e,t){return d.call(t),f(e,t)}):l.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:a,options:l}}},function(e,t,n){"use strict";var r=n(14),i=n(5),o=n(7),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};document.body.ondrop=function(e){e.preventDefault(),e.stopPropagation()},t.a={name:"dragTreeTable",components:{row:r.a,column:i.a,space:o.a},props:{isdraggable:{type:Boolean,default:!0},data:Object,onDrag:Function},data:function(){return{treeData:[],dragX:0,dragY:0,dragId:"",targetId:"",whereInsert:"",isDraing:!1,custom_field:{id:"id",parent_id:"parent_id",order:"order",lists:"lists",open:"open",checked:"checked"},onCheckChange:null}},methods:{getElementLeft:function(e){for(var t=e.offsetLeft,n=e.offsetParent;null!==n;)t+=n.offsetLeft,n=n.offsetParent;return t},getElementTop:function(e){for(var t=this.$refs.table.parentElement.scrollTop,n=e.offsetTop-t,r=e.offsetParent;null!==r;)n+=r.offsetTop,r=r.offsetParent;return n},draging:function(e){this.isDraing=!0,e.pageX==this.dragX&&e.pageY==this.dragY||(this.dragX=e.pageX,this.dragY=e.pageY,this.filter(e.pageX,e.pageY),e.clientY<100?window.scrollTo(0,scrollY-6):e.clientY>document.body.clientHeight-160&&window.scrollTo(0,scrollY+6))},drop:function(e){this.clearHoverStatus(),this.resetTreeData(),this.isDraing=!1},filter:function(e,t){var n=document.querySelectorAll(".tree-row");this.targetId=void 0;var r=this.getElementTop(dragParentNode),i=this.getElementLeft(dragParentNode),o=i+dragParentNode.clientWidth,s=r+dragParentNode.clientHeight;if(!(e>=i&&e<=o&&t>=r&&t<=s))for(var a=0;a<n.length;a++){var c=n[a],l=this.getElementLeft(c),d=this.getElementTop(c),u=c.clientWidth,f=c.clientHeight;if(e>l&&e<l+u&&t>d&&t<d+f){var h=t-d,p=c.children[c.children.length-1];p.style.display="block";var g=c.getAttribute("tree-id");this.targetId=g;var m="",v=c.offsetHeight;h/v>.75?("0.5"!==p.children[2].style.opacity&&(this.clearHoverStatus(),p.children[2].style.opacity=.5),m="bottom"):h/v>.25?("0.5"!==p.children[1].style.opacity&&(this.clearHoverStatus(),p.children[1].style.opacity=.5),m="center"):("0.5"!==p.children[0].style.opacity&&(this.clearHoverStatus(),p.children[0].style.opacity=.5),m="top"),this.whereInsert=m}}},clearHoverStatus:function(){for(var e=document.querySelectorAll(".tree-row"),t=0;t<e.length;t++){var n=e[t],r=n.children[n.children.length-1];r.style.display="none",r.children[0].style.opacity=.1,r.children[1].style.opacity=.1,r.children[2].style.opacity=.1}},resetTreeData:function(){function e(i,o){for(var a=0;a<i.length;a++){var c=i[a],l=s.deepClone(c);if(l[t]=[],s.targetId==c.id){var d=s.getCurDragItem(s.data[t],window.dragId);"top"===s.whereInsert?(d[n]=c[n],o.push(d),o.push(l)):"center"===s.whereInsert?(d[n]=c[r],l[t].push(d),o.push(l)):(d[n]=c[n],o.push(l),o.push(d))}else window.dragId!=c[r]&&o.push(l);c[t]&&c[t].length&&e(c[t],l[t])}}if(void 0!==this.targetId){var t=this.custom_field.lists,n=this.custom_field.parent_id,r=this.custom_field.id,i=[],o=this.data[t],s=this;e(o,i),this.resetOrder(i),this.onDrag(i)}},resetOrder:function(e){for(var t=this.custom_field.lists,n=0;n<e.length;n++)e[n][this.custom_field.order]=n,e[n][t]&&e[n][t].length&&this.resetOrder(e[n][t])},deepClone:function(e){if(!e)return e;var t,n,r;t=Array.isArray(e)?[]:{};for(r in e)n=e[r],t[r]="object"===(void 0===n?"undefined":s(n))?this.deepClone(n):n;return t},getCurDragItem:function(e,t){function n(e){for(var o=0;o<e.length;o++){var s=e[o];if(s.id==t){r=JSON.parse(JSON.stringify(s));break}s[i]&&s[i].length&&n(s[i])}}var r=null,i=this.custom_field.lists;return n(e),r},onCheckAll:function(e,t){this.setAllCheckData(this.data[this.custom_field.lists],!!e.target.checked);var n=this.getCheckedList(this.data[this.custom_field.lists]);t&&t(n)},onSingleCheckChange:function(){var e=this.getCheckedList(this.data[this.custom_field.lists]);this.onCheckChange&&this.onCheckChange(e)},setAllCheckData:function(e,t){for(var n=this.custom_field.lists,r=0;r<e.length;r++){var i=e[r];this.$set(i,"checked",t),i[n]&&i[n].length&&this.setAllCheckData(i[n],t)}},getCheckedList:function(e){function t(e){for(var i=0;i<e.length;i++){var o=e[i];o.checked&&r.push(o),o[n]&&o[n].length&&t(o[n])}}var n=this.custom_field.lists,r=[];return t(this.deepClone(e)),r}},mounted:function(){var e=this;this.data.custom_field&&(this.custom_field=Object.assign({},this.custom_field,this.data.custom_field)),setTimeout(function(){e.data.columns.map(function(t){"checkbox"==t.type&&(e.onCheckChange=t.onChange)})},100)}}},function(e,t,n){"use strict";var r=n(5),i=n(7);t.a={name:"row",props:["model","depth","columns","isdraggable","custom_field","onCheck"],data:function(){return{open:!1,visibility:"visible"}},components:{column:r.a,space:i.a},computed:{isFolder:function(){return this.model[this.custom_field.lists]&&this.model[this.custom_field.lists].length}},methods:{toggle:function(){this.isFolder&&(this.model[this.custom_field.open]=!this.model[this.custom_field.open],this.$forceUpdate())},dragstart:function(e){navigator.userAgent.indexOf("Firefox")>=0&&e.dataTransfer.setData("Text",this.id),window.dragId=e.target.children[0].getAttribute("tree-id"),window.dragParentNode=e.target,e.target.style.opacity=.2},dragend:function(e){e.target.style.opacity=1},setAllCheckData:function(e,t){for(var n=this.custom_field.lists,r=0;r<e.length;r++){var i=e[r];this.$set(i,"checked",t),i[n]&&i[n].length&&this.setAllCheckData(i[n],t)}},onCheckboxClick:function(e,t){t[this.custom_field.lists]?this.setAllCheckData(t[this.custom_field.lists]||[],!!e.target.checked):this.$set(t,"checked",!!e.target.checked),this.onCheck&&this.onCheck()}}}},function(e,t,n){"use strict";function r(e){n(17)}var i=n(6),o=n(19),s=n(2),a=r,c=s(i.a,o.a,!1,a,null,null);t.a=c.exports},function(e,t,n){"use strict";t.a={name:"column",props:{width:Number,field:String,label:String,flex:Number},data:function(){return{open:!1}}}},function(e,t,n){"use strict";function r(e){n(20)}var i=n(8),o=n(22),s=n(2),a=r,c=s(i.a,o.a,!1,a,null,null);t.a=c.exports},function(e,t,n){"use strict";t.a={name:"space",props:["depth"],computed:{spaces:function(){for(var e=[],t=0;t<this.depth;t++)e.push("");return e}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);r.a.install=function(e){return e.component(r.a.name,r.a)},t.default=r.a},function(e,t,n){"use strict";function r(e){n(11)}var i=n(3),o=n(24),s=n(2),a=r,c=s(i.a,o.a,!1,a,null,null);t.a=c.exports},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("4ca10603",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".drag-tree-table{margin:20px 0;color:#606266;font-size:12px}.drag-tree-table-header{display:flex;padding:15px 10px;background:#f5f7fa;height:66px;line-height:36px;box-sizing:border-box;font-weight:600}.tree-icon-hidden{visibility:hidden}.is-draging .tree-row:hover{background:transparent!important}",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],c=o[2],l=o[3],d={id:e+":"+i,css:a,media:c,sourceMap:l};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}},function(e,t,n){"use strict";function r(e){n(15)}var i=n(4),o=n(23),s=n(2),a=r,c=s(i.a,o.a,!1,a,null,null);t.a=c.exports},function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("6ad54d6a",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'.tree-block{width:100%;background:hsla(0,0%,100%,.8)}.tree-row{position:relative;display:flex;padding:10px;border-bottom:1px solid #eee;line-height:32px}.tree-row:hover{background:#ecf5ff}.tree-row .align-left{text-align:left}.tree-row .align-right{text-align:right}.tree-row .align-center{text-align:center}.hover-model{position:absolute;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,100%,.6)}.hover-block{display:flex;opacity:.1;transition:opacity .5s;justify-content:center;align-items:center}.hover-block i{color:#fff}.prev-block{height:25%;background:#a0c8f7}.center-block{height:50%;background:#a0c8f7}.next-block{height:25%;background:#a0c8f7}.action-item{color:#409eff;cursor:pointer}.action-item i{font-style:normal}.zip-icon{display:inline-block;width:8px;height:8px;vertical-align:middle;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAf0lEQVQ4T7XT0Q2AMAhF0dvNdALdSEdzBB3BDXQD85LGRNMCauS7nAKBxMdIhfwemIAtYpeAEeiANoLUgAGYI4gFqAMX8QAXiQBCNFDNRBVdIgpUkSfADjT3KqLACmg/XrWw5J+Li+VVYCZrMBbgJluA+tXA3Hv45ZgiR3i+OQBeSyYRPEyeUAAAAABJRU5ErkJggg==") no-repeat 50%;background-size:cover}.arrow-transparent{visibility:hidden}.arrow-bottom{transform:rotate(90deg)}[draggable=true]{-khtml-user-drag:element}',""])},function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("3a13c64a",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".tree-column{padding:0 4px;min-width:60px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.flex?n("div",{staticClass:"tree-column",style:{width:e.width+"px",flex:e.flex}},[e._t("default")],2):n("div",{staticClass:"tree-column",style:{width:e.width+"px"}},[e._t("default")],2)},i=[],o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){var r=n(21);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("5fbc7d96",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".space{display:inline-block;width:15px}",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"space-container"},e._l(e.spaces,function(e,t){return n("span",{key:t,staticClass:"space"})}),0)},i=[],o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-block",attrs:{draggable:!!e.isdraggable},on:{dragstart:function(t){return e.dragstart(t)},dragend:function(t){return e.dragend(t)}}},[n("div",{staticClass:"tree-row",attrs:{"tree-id":e.model.id,"tree-p-id":e.model.parent_id},on:{click:e.toggle}},[e._l(e.columns,function(t,r){return n("column",{key:r,class:"align-"+t.align,attrs:{field:t.field,width:t.width,flex:t.flex}},["selection"===t.type?n("span",[n("space",{attrs:{depth:e.depth}}),e._v(" "),e.model[e.custom_field.lists]&&e.model[e.custom_field.lists].length?n("span",{staticClass:"zip-icon",class:[e.model[e.custom_field.open]?"arrow-bottom":"arrow-right"]}):n("span",{staticClass:"zip-icon arrow-transparent"}),e._v(" "),t.formatter?n("span",{domProps:{innerHTML:e._s(t.formatter(e.model))}}):n("span",{domProps:{innerHTML:e._s(e.model[t.field])}})],1):"action"===t.type?n("span",e._l(t.actions,function(t,r){return n("a",{key:r,staticClass:"action-item",attrs:{type:"text",size:"small"},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.onclick(e.model)}}},[n("i",{class:t.icon,domProps:{innerHTML:e._s(t.formatter(e.model))}})])}),0):"checkbox"===t.type?n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model[e.custom_field.checked],expression:"model[custom_field.checked]"}],staticClass:"checkbox action-item",attrs:{type:"checkbox",name:e.model[e.custom_field.id]},domProps:{checked:e.model[e.custom_field.checked]||!1,checked:Array.isArray(e.model[e.custom_field.checked])?e._i(e.model[e.custom_field.checked],null)>-1:e.model[e.custom_field.checked]},on:{click:function(t){return t.stopPropagation(),e.onCheckboxClick(t,e.model)},change:function(t){var n=e.model[e.custom_field.checked],r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=e._i(n,null);r.checked?o<0&&e.$set(e.model,e.custom_field.checked,n.concat([null])):o>-1&&e.$set(e.model,e.custom_field.checked,n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.model,e.custom_field.checked,i)}}})]):n("span",[t.formatter?n("span",{domProps:{innerHTML:e._s(t.formatter(e.model))}}):n("span",[e._v(e._s(e.model[t.field]))])])])}),e._v(" "),e._m(0)],2),e._v(" "),e._l(e.model[e.custom_field.lists],function(t,r){return e.isFolder?n("row",{directives:[{name:"show",rawName:"v-show",value:e.model[e.custom_field.open],expression:"model[custom_field.open]"}],key:r,attrs:{model:t,columns:e.columns,isdraggable:e.isdraggable,depth:1*e.depth+1,custom_field:e.custom_field,onCheck:e.onCheck}}):e._e()})],2)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hover-model",staticStyle:{display:"none"}},[n("div",{staticClass:"hover-block prev-block"},[n("i",{staticClass:"el-icon-caret-top"})]),e._v(" "),n("div",{staticClass:"hover-block center-block"},[n("i",{staticClass:"el-icon-caret-right"})]),e._v(" "),n("div",{staticClass:"hover-block next-block"},[n("i",{staticClass:"el-icon-caret-bottom"})])])}],o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"table",staticClass:"drag-tree-table"},[n("div",{staticClass:"drag-tree-table-header"},e._l(e.data.columns,function(t,r){return n("column",{key:r,attrs:{width:t.width,flex:t.flex}},["checkbox"==t.type?n("input",{staticClass:"checkbox",attrs:{type:"checkbox"},on:{click:function(n){return e.onCheckAll(n,t.onChange)}}}):n("span",[e._v("\n          "+e._s(t.title)+"\n        ")])])}),1),e._v(" "),n("div",{staticClass:"drag-tree-table-body",class:e.isDraing?"is-draging":"",on:{dragover:e.draging,dragend:e.drop}},e._l(e.data[e.custom_field.lists],function(t,r){return n("row",{key:r,attrs:{depth:"0",columns:e.data.columns,isdraggable:e.isdraggable,model:t,custom_field:e.custom_field,onCheck:e.onSingleCheckChange}})}),1)])},i=[],o={render:r,staticRenderFns:i};t.a=o}])});