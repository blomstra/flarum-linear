(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const o=flarum.core.compat["forum/app"];var a=t.n(o);const n=flarum.core.compat["common/extend"],s=flarum.core.compat["forum/components/DiscussionPage"];var i=t.n(s);const r=flarum.core.compat["common/components/LinkButton"];var l=t.n(r);const c=flarum.core.compat["common/components/Button"];var u=t.n(c);function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}const p=flarum.core.compat["common/components/Modal"];var f=function(t){var e,o;function n(){for(var e,o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))||this).teams=[],e.priorities=[],e.defaultTeam="",e.ready=!1,e.selectedTeam="",e.selectedPriority=0,e.discussion="",e.tags=[],e}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,d(e,o);var s=n.prototype;return s.getTags=function(){var t=this;(""!==this.discussion?this.discussion.tags():[]).map((function(e){t.tags.push(e.data.id)}))},s.loadData=function(){var t=this;this.discussion=this.attrs.discussion,this.getTags(),m.request({method:"GET",url:"/api/linear/teams"}).then((function(e){t.teams=e.data.attributes})),m.request({method:"GET",url:"/api/linear/priorities"}).then((function(e){t.priorities=e.data.attributes})),this.selectedTeam=this.defaultTeam,this.selectedPriority=0},s.className=function(){return"custom-modal-class"},s.title=function(){return"Send to Linear"},s.content=function(){var t=this;return this.teams.length>0&&this.priorities.length>0&&""!==this.selectedTeam?m("[",null,m("div",{class:"Modal-body"},m("div",{class:"Form"},m("div",{class:"Form-group"},m("label",null,"Team"),m("span",{class:"Select"},m("select",{value:this.selectedTeam,class:"Select-input FormControl",onchange:function(e){t.selectedTeam=e.target.value}},this.teams.map((function(t){return m("option",{value:t.id},t.name)}))))),m("div",{class:"Form-group"},m("label",null,"Priority"),m("span",{class:"Select"},m("select",{class:"Select-input FormControl",value:this.selectedPriority,onchange:function(e){t.selectedPriority=e.target.value}},this.priorities.map((function(t){return m("option",{value:t.priority},t.label)}))))),m("div",{class:"Form-group"},m(u(),{className:"Button Button--primary",type:"submit"},"Send to Linear"))))):m("p",null,"Loading...")},s.onsubmit=function(t){t.preventDefault(),m.request({method:"POST",url:"/api/linear/issues",headers:{"X-CSRF-Token":a().session.csrfToken},body:{team:this.selectedTeam,priority:this.selectedPriority,tags:this.tags,discussion:this.discussion.id()}}).then((function(t){console.log(t),void 0===t.data.id&&null===t.data.id||(m.redraw(),a().modal.close(),location.reload())}))},s.oninit=function(e){t.prototype.oninit.call(this,e),this.loadData(),this.defaultTeam=a().forum.attribute("blomstraLinearDefaultTeamId"),this.selectedTeam=this.defaultTeam},n}(t.n(p)());f.isDismissible=!0,a().initializers.add("blomstra/linear",(function(){(0,n.extend)(i().prototype,"sidebarItems",(function(t){var e=this.discussion,o=e.attribute("linearIssueId"),n=null!==o?o.split(":::"):"a:::b",s=n[0],i=n[1];e.attribute("canAddToLinear")&&t.add("blomstra-linear",null===o?m(u(),{icon:"fa fa-paper-plane",class:"Button",onclick:function(){return a().modal.show(f,{discussion:e})}},a().translator.trans("blomstra-linear.forum.controls.send_to_linear_button")):m(l(),{icon:"fa fa-paper-plane",class:"Button",href:"https://linear.app/"+s+"/issue/"+i,external:!0,target:"_blank"},"Open in Linear"),100)}))}))})(),module.exports=e})();
//# sourceMappingURL=forum.js.map