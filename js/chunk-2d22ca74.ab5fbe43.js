(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22ca74"],{f3c4:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",{attrs:{type:"card"}},[n("template",{slot:"header"},[t._v("导出文本")]),n("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容 然后点击保存按钮导出文本文档"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),n("div",{staticClass:"d2-mt"},[n("el-button",{attrs:{type:"primary"},on:{click:t.exportTxt}},[n("d2-icon",{attrs:{name:"download"}}),t._v(" 保存为 txt ")],1)],1)],2)},s=[],o=n("8bbf"),i=n.n(o),r=n("e96c"),c=n.n(r);i.a.use(c.a);var u={data:function(){return{text:""}},methods:{exportTxt:function(){var t=this;""!==this.text?this.$export.txt({text:this.text,title:"文本"}).then((function(){t.$message("导出文本成功")})):this.$message("虽然可以为空 但是出于体验不建议这样 还是写点东西吧")}}},l=u,p=n("2877"),x=function(t){t.options.__source="src/views/demo/plugins/export/txt.vue"},d=x,f=Object(p["a"])(l,a,s,!1,null,null,null);"function"===typeof d&&d(f);e["default"]=f.exports}}]);