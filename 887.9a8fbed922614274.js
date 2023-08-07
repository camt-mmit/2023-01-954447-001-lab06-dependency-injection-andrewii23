"use strict";(self.webpackChunkmy_ng3=self.webpackChunkmy_ng3||[]).push([[887],{549:(S,_,u)=>{function h(n,a,e,i,s,o,c){try{var l=n[o](c),r=l.value}catch(T){return void e(T)}l.done?a(r):Promise.resolve(r).then(i,s)}function m(n){return function(){var a=this,e=arguments;return new Promise(function(i,s){var o=n.apply(a,e);function c(r){h(o,i,s,c,l,"next",r)}function l(r){h(o,i,s,c,l,"throw",r)}c(void 0)})}}u.r(_),u.d(_,{routes:()=>D});var t=u(946),p=u(814);const g="example-data";let C=(()=>{class n{getData(){return m(function*(){return JSON.parse(localStorage.getItem(g)??"[[0]]").map(i=>i.map(s=>({value:s})))})()}setData(e){return m(function*(){const i=e.map(s=>s.map(o=>o.value));localStorage.setItem(g,JSON.stringify(i))})()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function f(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",4)(1,"label",5),t._uU(2),t.qZA(),t.TgZ(3,"input",6,7),t.NdJ("change",function(){const o=t.CHM(e).index,c=t.MAs(4),l=t.oxw();return t.KtG(l.onChange(o,c.valueAsNumber))}),t.qZA(),t.TgZ(5,"button",8),t.NdJ("click",function(){const o=t.CHM(e).index,c=t.oxw();return t.KtG(c.delete(o))}),t._UZ(6,"i",9),t._uU(7," Remove Input "),t.qZA()()}if(2&n){const e=a.$implicit,i=a.index,s=t.oxw();t.xp6(2),t.hij("Input ",i+1," : "),t.xp6(1),t.Q6J("value",e.value),t.xp6(2),t.Q6J("disabled",s.isDisabled)}}let x=(()=>{class n{constructor(){this.dataChange=new t.vpe,this.isDisabled=!1,this.disabled()}ngOnChanges(e){e.items&&this.disabled()}onChange(e,i){this.items[e].value=i,console.debug(this.items),this.dataChange.emit()}add(){this.items.push({value:0}),this.disabled(),this.dataChange.emit()}delete(e){this.items.splice(e,1),this.disabled(),this.dataChange.emit()}getResult(){return this.items.reduce((e,i)=>e+i.value,0)}disabled(){this.isDisabled=1===this.items?.length}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dynamic-input"]],inputs:{items:"items"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.TTD,t.jDz],decls:12,vars:2,consts:[["type","button",1,"input-add",3,"click"],[1,"bx","bx-list-plus"],[1,"input-list"],["class","input-box",4,"ngFor","ngForOf"],[1,"input-box"],[1,"input-title"],["type","number",3,"value","change"],["elem",""],["type","button",1,"btn-del",3,"disabled","click"],[1,"bx","bx-list-minus"]],template:function(e,i){1&e&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return i.add()}),t._UZ(1,"i",1),t._uU(2,"add Input\n"),t.qZA(),t._UZ(3,"br"),t.TgZ(4,"div",2),t.YNc(5,f,8,3,"div",3),t.qZA(),t.TgZ(6,"div")(7,"div",4)(8,"label"),t._uU(9,"Result :"),t.qZA(),t.TgZ(10,"output"),t._uU(11),t.qZA()()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",i.items),t.xp6(6),t.Oqu(i.getResult()))},dependencies:[p.ez,p.sg]}),n})();function y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"section")(1,"div",4)(2,"h2"),t._uU(3),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){const o=t.CHM(e).index,c=t.oxw();return t.KtG(c.deleteSec(o))}),t._UZ(5,"i",6),t._uU(6,"Remove Section "),t.qZA()(),t.TgZ(7,"app-dynamic-input",7),t.NdJ("dataChange",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onDataChange())}),t.qZA()()}if(2&n){const e=a.$implicit,i=a.index,s=t.oxw();t.xp6(3),t.hij("Section ",i+1,""),t.xp6(1),t.Q6J("disabled",s.isDisabled),t.xp6(3),t.Q6J("items",e)}}let b=(()=>{class n{constructor(){this.dataChange=new t.vpe,this.isDisabled=!1}ngOnChanges(e){e.items&&this.disabled()}onDataChange(){this.dataChange.emit(this.items)}addSec(){this.items.push([{value:0}]),this.disabled(),this.dataChange.emit(this.items)}deleteSec(e){this.items.splice(e,1),this.disabled(),this.dataChange.emit(this.items)}disabled(){this.isDisabled=1===this.items?.length}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dynamic-section"]],inputs:{items:"items"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.TTD,t.jDz],decls:5,vars:1,consts:[[1,"section","box"],["type","button",3,"click"],[1,"bx","bx-calendar-plus"],[4,"ngFor","ngForOf"],[1,"section-list"],["type","button",1,"btn-del",3,"disabled","click"],[1,"bx","bx-calendar-minus"],[3,"items","dataChange"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return i.addSec()}),t._UZ(2,"i",2),t._uU(3,"Add Section "),t.qZA(),t.YNc(4,y,8,3,"section",3),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngForOf",i.items))},dependencies:[p.ez,p.sg,x],styles:[".section-list[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:1rem;border-top:2px solid #000;padding-top:1rem;margin-bottom:.5rem}"]}),n})();function v(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"app-dynamic-section",1),t.NdJ("dataChange",function(s){t.CHM(e);const o=t.oxw();return t.KtG(o.onDataChange(s))}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("items",e.data)}}let Z=(()=>{class n{constructor(){var e=this;this.dataService=(0,t.f3M)(C),this.data=null,m(function*(){e.data=yield e.dataService.getData(),console.log(e.data)})()}onDataChange(e){var i=this;return m(function*(){yield i.dataService.setData(e)})()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-example-input"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[3,"items","dataChange",4,"ngIf"],[3,"items","dataChange"]],template:function(e,i){1&e&&t.YNc(0,v,1,1,"app-dynamic-section",0),2&e&&t.Q6J("ngIf",i.data)},dependencies:[p.ez,p.O5,b]}),n})();var d=u(225);const D=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-example"]],standalone:!0,features:[t.jDz],decls:16,vars:0,consts:[[1,"nav"],[1,"title"],[1,"nav-lists"],[1,"nav-list"],["routerLink","input","routerLinkActive","active",1,"btn"],[1,"bx","bx-detail"],["routerLink","display","routerLinkActive","active",1,"btn"],[1,"title-name"]],template:function(e,i){1&e&&(t.TgZ(0,"header")(1,"nav",0)(2,"h1",1),t._uU(3,"my-ng3"),t.qZA(),t.TgZ(4,"ul",2)(5,"li",3)(6,"a",4),t._UZ(7,"i",5),t._uU(8,"Input"),t.qZA()(),t.TgZ(9,"li",3)(10,"a",6),t._UZ(11,"i",5),t._uU(12,"Display"),t.qZA()()(),t.TgZ(13,"h1",7),t._uU(14,"642110190"),t.qZA()()(),t._UZ(15,"router-outlet"))},dependencies:[p.ez,d.Bz,d.lC,d.rH,d.Od],styles:["header[_ngcontent-%COMP%]{margin:0 auto;padding:2rem;width:600px}.nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.nav-lists[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:.5rem}.nav-list[_ngcontent-%COMP%]{list-style:none}.nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}"]}),n})(),children:[{path:"",redirectTo:"input",pathMatch:"full"},{path:"input",component:Z}]}]}}]);