System.register(["./mobile-legacy.fc032f2c.js","./vendor-legacy.2cbae777.js","./index-legacy.1f89f6b2.js"],(function(e){"use strict";var l,o,c,a,u,d,t,n,h,b,x;return{setters:[function(e){l=e.c,o=e.T},function(e){c=e.k,a=e.a,u=e.A,d=e.r,t=e.o,n=e.c,h=e.f,b=e.i,x=e.j},function(){}],execute:function(){const{createDemo:k}=l("checkbox");var m=e("default",k({setup(e,l){const d=c(null),t=a({checkbox1:!0,checkbox2:!1,checkbox3:!1,checkbox4:!0,checkbox5:!1,checkbox6:!1,checkbox7:!1,checkbox8:!1,checkbox9:!1,checkbox10:!1,checkbox11:!1,checkbox12:!1,checkbox13:!1,checkbox14:!1,checkbox15:!1,checkbox16:!1,checkboxgroup1:["2","3"],checkboxgroup2:["2"],checkboxgroup3:["2"]});return{changeBox1:(e,l)=>{console.log(e,l)},changeBox2:(e,l)=>{console.log(e,l)},changeBox3:(e,l)=>{o.text(`您${e?"选中":"取消"}了${l}`)},changeBox4:e=>{o.text(""+(e.length?"全选":"取消全选"))},toggleAll:e=>{d.value.toggleAll(e)},group:d,...u(t)}}}));const V={class:"demo"},f=x("复选框"),g=x("复选框"),p=x("未选时禁用状态"),_=x("选中时禁用状态"),i=x("自定义尺寸25"),r=x("自定义尺寸10"),s=x("自定义图标"),U=x("change复选框"),C=x("组合复选框"),B=x("组合复选框"),y=x("组合复选框"),v=x("组合复选框"),A=x("组合复选框"),j=x("组合复选框"),G=x("组合复选框"),z=x("组合复选框"),$=x("组合复选框"),D=x("组合复选框"),S=x("全选"),T=x("取消");m.render=function(e,l,o,c,a,u){const x=d("nut-checkbox"),k=d("nut-cell"),m=d("nut-cell-group"),q=d("nut-checkboxgroup"),w=d("nut-button");return t(),n("div",V,[h(m,{title:"基本用法-左右"},{default:b((()=>[h(k,null,{default:b((()=>[h(x,{modelValue:e.checkbox1,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checkbox1=l),label:"复选框",onChange:e.changeBox1},{default:b((()=>[f])),_:1},8,["modelValue","onChange"])])),_:1}),h(k,null,{default:b((()=>[h(x,{modelValue:e.checkbox1,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checkbox1=l),"text-position":"left",onChange:e.changeBox1},{default:b((()=>[g])),_:1},8,["modelValue","onChange"])])),_:1}),h(k,{title:"当前选中值",desc:e.checkbox1},null,8,["desc"])])),_:1}),h(m,{title:"禁用状态"},{default:b((()=>[h(k,null,{default:b((()=>[h(x,{modelValue:e.checkbox3,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checkbox3=l),disabled:""},{default:b((()=>[p])),_:1},8,["modelValue"])])),_:1}),h(k,null,{default:b((()=>[h(x,{modelValue:e.checkbox4,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checkbox4=l),disabled:""},{default:b((()=>[_])),_:1},8,["modelValue"])])),_:1})])),_:1}),h(m,{title:"自定义尺寸"},{default:b((()=>[h(k,null,{default:b((()=>[h(x,{modelValue:e.checkbox5,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checkbox5=l),"icon-size":"25"},{default:b((()=>[i])),_:1},8,["modelValue"])])),_:1}),h(k,null,{default:b((()=>[h(x,{modelValue:e.checkbox6,"onUpdate:modelValue":l[6]||(l[6]=l=>e.checkbox6=l),"icon-size":"10"},{default:b((()=>[r])),_:1},8,["modelValue"])])),_:1})])),_:1}),h(m,{title:"自定义图标"},{default:b((()=>[h(k,null,{default:b((()=>[h(x,{modelValue:e.checkbox7,"onUpdate:modelValue":l[7]||(l[7]=l=>e.checkbox7=l),"icon-name":"checklist","icon-active-name":"checklist"},{default:b((()=>[s])),_:1},8,["modelValue"])])),_:1})])),_:1}),h(m,{title:"点击触发change事件"},{default:b((()=>[h(k,null,{default:b((()=>[h(x,{modelValue:e.checkbox8,"onUpdate:modelValue":l[8]||(l[8]=l=>e.checkbox8=l),onChange:e.changeBox3},{default:b((()=>[U])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),h(m,{title:"checkboxGroup使用"},{default:b((()=>[h(k,null,{default:b((()=>[h(q,{modelValue:e.checkboxgroup1,"onUpdate:modelValue":l[13]||(l[13]=l=>e.checkboxgroup1=l)},{default:b((()=>[h(x,{modelValue:e.checkbox9,"onUpdate:modelValue":l[9]||(l[9]=l=>e.checkbox9=l),label:"1"},{default:b((()=>[C])),_:1},8,["modelValue"]),h(x,{modelValue:e.checkbox10,"onUpdate:modelValue":l[10]||(l[10]=l=>e.checkbox10=l),label:"2"},{default:b((()=>[B])),_:1},8,["modelValue"]),h(x,{modelValue:e.checkbox11,"onUpdate:modelValue":l[11]||(l[11]=l=>e.checkbox11=l),label:"3"},{default:b((()=>[y])),_:1},8,["modelValue"]),h(x,{modelValue:e.checkbox12,"onUpdate:modelValue":l[12]||(l[12]=l=>e.checkbox12=l),label:"4"},{default:b((()=>[v])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),h(k,{title:"当前选中值",desc:e.checkboxgroup1},null,8,["desc"])])),_:1}),h(m,{title:"checkboxGroup禁用"},{default:b((()=>[h(k,null,{default:b((()=>[h(q,{modelValue:e.checkboxgroup1,"onUpdate:modelValue":l[18]||(l[18]=l=>e.checkboxgroup1=l),disabled:""},{default:b((()=>[h(x,{modelValue:e.checkbox9,"onUpdate:modelValue":l[14]||(l[14]=l=>e.checkbox9=l),label:"1"},{default:b((()=>[A])),_:1},8,["modelValue"]),h(x,{modelValue:e.checkbox10,"onUpdate:modelValue":l[15]||(l[15]=l=>e.checkbox10=l),label:"2"},{default:b((()=>[j])),_:1},8,["modelValue"]),h(x,{modelValue:e.checkbox11,"onUpdate:modelValue":l[16]||(l[16]=l=>e.checkbox11=l),label:"3"},{default:b((()=>[G])),_:1},8,["modelValue"]),h(x,{modelValue:e.checkbox12,"onUpdate:modelValue":l[17]||(l[17]=l=>e.checkbox12=l),label:"4"},{default:b((()=>[z])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})])),_:1}),h(m,{title:"checkboxGroup 全选/取消"},{default:b((()=>[h(k,null,{default:b((()=>[h(q,{modelValue:e.checkboxgroup3,"onUpdate:modelValue":l[21]||(l[21]=l=>e.checkboxgroup3=l),ref:"group",onChange:e.changeBox4},{default:b((()=>[h(x,{modelValue:e.checkbox15,"onUpdate:modelValue":l[19]||(l[19]=l=>e.checkbox15=l),label:"1"},{default:b((()=>[$])),_:1},8,["modelValue"]),h(x,{modelValue:e.checkbox16,"onUpdate:modelValue":l[20]||(l[20]=l=>e.checkbox16=l),label:"2"},{default:b((()=>[D])),_:1},8,["modelValue"])])),_:1},8,["modelValue","onChange"])])),_:1}),h(k,null,{default:b((()=>[h(w,{type:"primary",onClick:l[22]||(l[22]=l=>e.toggleAll(!0))},{default:b((()=>[S])),_:1}),h(w,{type:"info",onClick:l[23]||(l[23]=l=>e.toggleAll(!1))},{default:b((()=>[T])),_:1})])),_:1})])),_:1})])}}}}));
