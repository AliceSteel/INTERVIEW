"use strict";(self["webpackChunkvue_project_final"]=self["webpackChunkvue_project_final"]||[]).push([[776],{8434:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var o=i(3396),n=i(7139);const c=t=>((0,o.dD)("data-v-8f61b672"),t=t(),(0,o.Cn)(),t),s={key:0},l={id:"clients"},a={id:"clients_list"},r=["onMouseover"],p=c((()=>(0,o._)("sup",null,null,-1))),u=["src"];function f(t,e,i,c,f,d){const h=(0,o.up)("header-comp"),g=(0,o.up)("atropos");return null!==f.clients?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(h,{logo:"INTERVIEW_logo.png",color:"#fff"}),(0,o._)("section",l,[(0,o._)("ul",a,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.clients,((t,i)=>((0,o.wg)(),(0,o.iD)("li",{key:i},[(0,o._)("div",{class:"container",onMouseover:e=>d.setClientPic(t.pic),onMousemove:e[0]||(e[0]=(...t)=>d.calcPicPosition&&d.calcPicPosition(...t))},[p,(0,o.Uk)((0,n.zw)(t.title),1)],40,r)])))),128))]),""!==f.clientPic?((0,o.wg)(),(0,o.j4)(g,{key:0,class:"pic_wrap_clients",activeOffset:30,shadowScale:2,style:(0,n.j5)(`top: ${f.top}; right: ${f.right}`)},{default:(0,o.w5)((()=>[(0,o._)("img",{src:f.clientPic,alt:"client image","data-atropos-offset":"-5"},null,8,u)])),_:1},8,["style"])):(0,o.kq)("",!0)])])):(0,o.kq)("",!0)}var d=i(7032),h=i(2299),g=i(6265),_=i.n(g),P={name:"ClientsPage",components:{HeaderComp:d.Z,Atropos:h.Z},data(){return{clients:null,clientPic:"",top:"14%",right:"11%"}},created(){_().get("data/clients.json").then((t=>{this.clients=t.data,this.clientPic=i(990)("./"+this.clients[0].pic)}))},methods:{setClientPic(t){this.clientPic=i(990)("./"+t)},calcPicPosition(t){this.top=t.target.offsetTop>800?"800px":t.target.offsetTop-80+"px",this.right=Math.floor(11*Math.random())+8+"%",console.log(this.top)}}},v=i(89);const k=(0,v.Z)(P,[["render",f],["__scopeId","data-v-8f61b672"]]);var m=k}}]);
//# sourceMappingURL=776.b433a5fe.js.map