import{c as l}from"./mobile.1822bb87.js";import{x as a,y as o,r as t,o as e,c as s,f as n,s as c,j as i}from"./vendor.8cdc485e.js";import"./index.c87c49f3.js";const{createDemo:m}=l("avatar");var u=m({props:{},setup:()=>({handleClick:()=>{console.log("触发点击头像")}})});const f=c();a("data-v-6504f754");const r={class:"demo full"},d=n("h2",null,'默认用法 (内置"small","normal","large"三种尺寸规格)',-1),g=n("h2",null,"修改形状",-1),p=n("h2",null,"修改背景色",-1),h=n("h2",null,"修改背景图片",-1),b=n("h2",null,"可以修改头像的内容",-1),v=i("N"),y=n("h2",null,"点击头像触发事件",-1);o();const _=f(((l,a,o,c,i,m)=>{const u=t("nut-avatar"),_=t("nut-cell");return e(),s("div",r,[d,n(_,null,{default:f((()=>[n(u,{size:"large",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),n(u,{size:"normal",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),n(u,{size:"small",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"})])),_:1}),g,n(_,null,{default:f((()=>[n(u,{icon:"my",shape:"square"}),n(u,{icon:"my",shape:"round"})])),_:1}),p,n(_,null,{default:f((()=>[n(u,{class:"demo-avatar",icon:"my","bg-color":"#FA2C19"})])),_:1}),h,n(_,null,{default:f((()=>[n(u,{icon:"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"})])),_:1}),b,n(_,null,{default:f((()=>[n(u,null,{default:f((()=>[v])),_:1})])),_:1}),y,n(_,null,{default:f((()=>[n(u,{icon:"my",onActiveAvatar:l.handleClick},null,8,["onActiveAvatar"])])),_:1})])}));u.render=_,u.__scopeId="data-v-6504f754";export default u;