(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{432:function(t,e,n){},454:function(t,e,n){"use strict";var r=n(1),a=n(2),s=n(28),i=n(66),o=n(16),u=a("".slice),f=Math.max,c=Math.min;r({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,e){var n,r,a=o(s(this)),l=a.length,h=i(t);return h===1/0&&(h=0),h<0&&(h=f(l+h,0)),(n=void 0===e?l:i(e))<=0||n===1/0||h>=(r=c(h+n,l))?"":u(a,h,r)}})},455:function(t,e,n){var r=n(1),a=n(456);r({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},456:function(t,e,n){"use strict";var r=n(43),a=n(18),s=n(66),i=n(27),o=n(49),u=Math.min,f=[].lastIndexOf,c=!!f&&1/[1].lastIndexOf(1,-0)<0,l=o("lastIndexOf"),h=c||!l;t.exports=h?function(t){if(c)return r(f,this,arguments)||0;var e=a(this),n=i(e),o=n-1;for(arguments.length>1&&(o=u(o,s(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}:f},457:function(t,e,n){"use strict";n(432)},468:function(t,e,n){"use strict";n.r(e);n(454),n(455),n(42),n(10),n(203),n(122),n(123);var r={name:"TagGroup",data:function(){return{base:"",menuList:[],colorList:["#3498db","#95a5a6","#16a085","#74b9ff","#746D28","#e17055","#6ab04c","#0abde3","#519ABE","#DA3B01","#880515","#629F6A","#8BA077","#DE8CD9","#227093","#ffb142","#ff5252","#ffa801","#5761BF","#FF6161","#42A5F5","#2196F3","#FF6E40","#607D8B","#009688","#8e44ad","#0099BC","#6B69D6","#ff0061","#ce1554","#3FB568","#6D3BC6","#014e58","#024032","#040d5a","#2d755e","#65b948","#394BBB","#EA4440","#3041AF","#F9C43F","#A9EE59","#98ea8a","#D19640"]}},methods:{getRandomColor:function(){var t=Math.floor(Math.random()*this.colorList.length);return this.colorList[t]}},mounted:function(){var t=this;this.base=this.$site.base.substr(0,this.$site.base.lastIndexOf("/"));var e=this.$page.path,n=this.$site.pages||[];this.menuList=n.filter((function(t){return 0==t.path.indexOf(e)&&t.path!=e})),this.menuList.forEach((function(e){e.color=t.getRandomColor()}))}},a=(n(457),n(34)),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-wrapper"},[t.menuList.length?n("ul",t._l(t.menuList,(function(e){return n("li",{style:{backgroundColor:e.color||"#44A1BE"}},[n("a",{attrs:{href:t.base+e.path,target:"_blank"}},[t._v(t._s(e.title))])])})),0):n("p",[t._v("暂无")])])}),[],!1,null,"3623cc59",null);e.default=s.exports}}]);