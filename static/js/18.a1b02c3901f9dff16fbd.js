webpackJsonp([18],{"b/VJ":function(e,t){},llcK:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"TableBasic",mixins:[],components:{},props:{},data:function(){return{searchList:[{title:"类型",list:["不限","类型一","类型二","类型三","类型四"],isSelected:"不限"},{title:"地点",list:["不限","上海","广州","北京","深圳"],isSelected:"不限"},{title:"月薪",list:["不限","<10K","10K~20K","20K~30K",">30K"],isSelected:"不限"}],tableData:[{type:"类型一",address:"广州",money:"<10K"},{type:"类型二",address:"王小虎",money:"10K~20K"},{type:"类型三",address:"北京",money:"10K~20K"},{type:"类型四",address:"深圳",money:"20K~30K"},{type:"类型四",address:"上海",money:">30K"},{type:"类型二",address:"王小虎",money:"10K~20K"},{type:"类型三",address:"北京",money:"10K~20K"},{type:"类型四",address:"深圳",money:"20K~30K"},{type:"类型四",address:"上海",money:">30K"},{type:"类型四",address:"广州",money:"20K~30K"}],pagination:{attrs:{currentPage:1,pageSize:10,total:100},events:{"current-change":this.handleCurrentChange,"size-change":this.handleSizeChange}}}},methods:{handleCurrentChange:function(e){console.log(e)},handleSizeChange:function(e){console.log(e)}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table-query",{attrs:{name:"tableBasic",isFixed:!0,pagination:e.pagination}},[a("template",{slot:"header"},e._l(e.searchList,function(t,s){return a("div",{key:s,staticClass:"header__search"},[a("div",{staticClass:"search__title"},[e._v(e._s(t.title))]),e._v(" "),a("div",{staticClass:"search__group"},e._l(t.list,function(s,n){return a("span",{key:n,class:["search__item",s===t.isSelected&&"is-selected"],on:{click:function(e){t.isSelected=s}}},[e._v("\n          "+e._s(s)+"\n        ")])}),0)])}),0),e._v(" "),a("template",{slot:"main"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:"",height:"100%"}},[a("el-table-column",{attrs:{prop:"type",label:"类型",align:"center",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地点",align:"center",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"money",label:"月薪"}})],1)],1)],2)},staticRenderFns:[]};var l=a("C7Lr")(s,n,!1,function(e){a("b/VJ")},"data-v-07546b02",null);t.default=l.exports}});
//# sourceMappingURL=18.a1b02c3901f9dff16fbd.js.map