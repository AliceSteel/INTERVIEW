"use strict";(self["webpackChunkvue_project_final"]=self["webpackChunkvue_project_final"]||[]).push([[38],{119:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var c=i(3396),n=i(7139);const o=t=>((0,c.dD)("data-v-c51dd2a2"),t=t(),(0,c.Cn)(),t),s={key:0},l={id:"clients"},a={id:"clients_list"},r=["onMouseover"],p=o((()=>(0,c._)("sup",null,null,-1))),u=["src"];function d(t,e,i,o,d,f){const h=(0,c.up)("header-comp"),g=(0,c.up)("atropos");return null!==d.clients?((0,c.wg)(),(0,c.iD)("div",s,[(0,c.Wm)(h,{logo:"INTERVIEW_logo.png",color:"#fff"}),(0,c._)("section",l,[(0,c._)("ul",a,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(d.clients,((t,i)=>((0,c.wg)(),(0,c.iD)("li",{key:i},[(0,c._)("div",{class:"container",onMouseover:e=>f.setClientPic(t.pic),onMousemove:e[0]||(e[0]=(...t)=>f.calcPicPosition&&f.calcPicPosition(...t))},[p,(0,c.Uk)((0,n.zw)(t.title),1)],40,r)])))),128))]),""!==d.clientPic?((0,c.wg)(),(0,c.j4)(g,{key:0,class:"pic_wrap_clients",activeOffset:30,shadowScale:2,style:(0,n.j5)(`top: ${d.top}; right: ${d.right}`)},{default:(0,c.w5)((()=>[(0,c._)("img",{src:d.clientPic,alt:"client image","data-atropos-offset":"-5"},null,8,u)])),_:1},8,["style"])):(0,c.kq)("",!0)])])):(0,c.kq)("",!0)}var f=i(1747),h=i(2299),g=i(6265),_=i.n(g),P={name:"ClientsPage",components:{HeaderComp:f.Z,Atropos:h.Z},data(){return{clients:null,clientPic:"",top:"14%",right:"11%"}},created(){_().get("data/clients.json").then((t=>{this.clients=t.data,this.clientPic=i(990)("./"+this.clients[0].pic)}))},methods:{setClientPic(t){this.clientPic=i(990)("./"+t)},calcPicPosition(t){this.top=t.target.offsetTop>800?"800px":t.target.offsetTop-80+"px",this.right=Math.floor(11*Math.random())+8+"%"}}},v=i(89);const k=(0,v.Z)(P,[["render",d],["__scopeId","data-v-c51dd2a2"]]);var m=k}}]);
//# sourceMappingURL=38.41d97da7.js.map