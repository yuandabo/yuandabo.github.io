(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216244"],{c0cd:function(l,t,o){"use strict";o.r(t);var e=function(){var l=this,t=l.$createElement,o=l._self._c||t;return o("div",{ref:"wrapper"},[l._t("default")],2)},s=[],r=o("f076"),n=(o("e680"),o("8b80")),c=Object(r["a"])({props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},scrollX:{type:Boolean,default:!1},listenScroll:{type:Boolean,default:!1},data:{type:Array,default:null},pullup:{type:Boolean,default:!1},pulldown:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20},topInit:{type:Boolean,default:!0},top:{type:Boolean,default:!1}},data:function(){return{scroll:null}},watch:{top:function(l){}},mounted:function(){var l=this;setTimeout((function(){l._initScroll()}),200)},methods:{_initScroll:function(){var l=this;this.$refs.wrapper&&(this.topInit&&!this.top||(this.scroll=new n["a"](this.$refs.wrapper,{probeType:this.probeType,click:this.click,scrollX:this.scrollX}),this.listenScroll&&this.scroll.on("scroll",(function(t){l.$emit("scroll",t)})),this.pullup&&this.scroll.on("scrollEnd",(function(){l.scroll.y<=l.scroll.maxScrollY+50&&l.$emit("scrollToEnd")})),this.pulldown&&this.scroll.on("touchEnd",(function(t){t.y>50&&l.$emit("pulldown")})),this.beforeScroll&&this.scroll.on("beforeScrollStart",(function(){l.$emit("beforeScroll")}))))},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}}},"watch",{data:function(){var l=this;setTimeout((function(){l.refresh()}),this.refreshDelay)}}),i=c,a=o("5d22"),u=Object(a["a"])(i,e,s,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d216244.99a01b0c.js.map