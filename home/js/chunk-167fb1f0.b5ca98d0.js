(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-167fb1f0"],{"0ab1":function(e,t,s){"use strict";s.r(t);var c=s("7a23"),a=Object(c["Q"])("data-v-08cb4743");Object(c["z"])("data-v-08cb4743");var l={class:"message container"},n=Object(c["k"])("h4",{class:"title"},"Speak freely!",-1),i={class:"message-list"},b={class:"left"},r={key:0},o={class:"right"},g={key:0,class:"last"};Object(c["x"])();var d=a((function(e,t,s,a,d,u){var j=Object(c["E"])("Comment"),O=Object(c["E"])("Skeleton"),m=Object(c["E"])("MessageCard"),f=Object(c["F"])("infinite-scroll");return Object(c["w"])(),Object(c["g"])("div",l,[Object(c["P"])(Object(c["k"])("div",{class:"message-add","infinite-scroll-distance":20,"infinite-scroll-disabled":a.loading,"infinite-scroll-window":"false"},[n,Object(c["k"])(j,{class:"comment",onSubmit:a.submit},null,8,["onSubmit"])],8,["infinite-scroll-disabled"]),[[f,a.getMess]]),Object(c["k"])("div",i,[Object(c["k"])("div",b,[a.loading?(Object(c["w"])(),Object(c["g"])("div",r,[(Object(c["w"])(),Object(c["g"])(c["a"],null,Object(c["C"])(3,(function(e){return Object(c["k"])(O,{key:"Skeleton"+e,class:["message-list-item-bg-"+(e+1)%4,"concise"],avatar:"",active:""},null,8,["class"])})),64))])):(Object(c["w"])(!0),Object(c["g"])(c["a"],{key:1},Object(c["C"])(a.listItem.left,(function(e,t){return Object(c["w"])(),Object(c["g"])(m,{onReply:a.reply,onDelete:a.deleteMess,item:e,key:e.id,class:["message-list-card","message-list-item-bg-"+(t+1)%4]},null,8,["onReply","onDelete","item","class"])})),128))]),Object(c["k"])("div",o,[a.loading?(Object(c["w"])(),Object(c["g"])(c["a"],{key:0},Object(c["C"])(3,(function(e){return Object(c["k"])(O,{key:"Skeleton"+e,class:["message-list-item-bg-"+(e+1)%4,"concise"],avatar:"",active:""},null,8,["class"])})),64)):(Object(c["w"])(!0),Object(c["g"])(c["a"],{key:1},Object(c["C"])(a.listItem.right,(function(e,t){return Object(c["w"])(),Object(c["g"])(m,{onReply:a.reply,onDelete:a.deleteMess,item:e,key:e.id,class:["message-list-card","message-list-item-bg-"+(t+1)%4]},null,8,["onReply","onDelete","item","class"])})),128))])]),a.current_page==a.last_page?(Object(c["w"])(),Object(c["g"])("p",g,"—— 我可是有底线的！——")):Object(c["h"])("",!0)])})),u=s("0bb1"),j=s("85fe"),O=s("90e6"),m=s("922d"),f={name:"Message",components:{Comment:u["a"],MessageCard:O["a"],Skeleton:m["a"]},setup:function(){var e=Object(j["a"])(0),t=e.list,s=e.getMess,a=e.loading,l=e.current_page,n=e.last_page,i=e.messageAdd,b=e.replyAdd,r=e.deleteMess,o=Object(c["e"])((function(){for(var e=[],s=[],c=0,a=t.value.length;c<a;c++)(c+1)%2?e.push(t.value[c]):s.push(t.value[c]);return{left:e,right:s}}));s();var g=function(e){var t={message:e,article_id:0};i(t)},d=function(e){b(e)};return{listItem:o,getMess:s,loading:a,submit:g,reply:d,deleteMess:r,current_page:l,last_page:n}}};s("f69f");f.render=d,f.__scopeId="data-v-08cb4743";t["default"]=f},f69f:function(e,t,s){"use strict";s("fa01")},fa01:function(e,t,s){}}]);