(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{430:function(t,e,a){},452:function(t,e,a){"use strict";a(430)},466:function(t,e,a){"use strict";a.r(e);var i=a(459),n=a(119),s=(a(10),a(19),a(22),a(208),a(447),a(451),a(35),a(93),{name:"AlgoliaSearchBox",props:["options"],data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,e){var s=this;Promise.all([Promise.all([a.e(0),a.e(6)]).then(a.t.bind(null,460,7)),Promise.all([a.e(0),a.e(6)]).then(a.t.bind(null,461,7))]).then((function(a){var l=Object(n.a)(a,1)[0];l=l.default;var o=t.algoliaOptions,c=void 0===o?{}:o;l(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object(i.a)(Object(i.a)({},c),{},{facetFilters:["lang:".concat(e)].concat(c.facetFilters||[])}),handleSelected:function(t,e,a){var i=new URL(a.url),n=i.pathname,l=i.hash,o=n.replace(s.$site.base,"/"),c=decodeURIComponent(l);s.$router.push("".concat(o).concat(c))}}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}}),l=(a(452),a(34)),o=Object(l.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);e.default=o.exports}}]);