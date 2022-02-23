import{d as b,u as k,c as V,o as d,a as u,b as o,t as x,e as h,w as _,v as N,m as F,f as R,F as U,r as B,g as M,h as f,n as A,i as O}from"./runtime-dom.esm-bundler.a78c1858.js";function P(){return Math.floor(Math.random()*16777215).toString(16)}var I=(r,n)=>{const t=r.__vccOpts||r;for(const[e,l]of n)t[e]=l;return t};const z=b({props:{type:{default:"text"},label:null,value:null,error:{default:""},id:{default:P()}},emits:["update:value","update:error","blur","input"],setup(r,{expose:n,emit:t}){n();const e=r,l=k(),c=V({get:()=>e.value,set:v=>{t("update:value",v),t("update:error","")}}),a={props:e,attrs:l,emit:t,fieldValue:c};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),T=["for"],L=["placeholder"],j=["type","placeholder"],q=["value"];function Z(r,n,t,e,l,c){return d(),u(U,null,[o("label",{for:t.id,class:"form-control-label visually-hidden"},x(t.label),9,T),h(` \r
    REGRESSION BUG in Chromium version 40+: \r
    \r
    input[type=email] will not update its visual appearance\r
    when its value is trimmed. This is a known issue:\r
    https://bugs.chromium.org/p/chromium/issues/detail?id=423785\r
  \r
    For now we'll fall back on [type=text] for email inputs.\r
    Our custom email field validation overrides the browser\r
    default behavior anyway.\r
  `),t.type=="textarea"?_((d(),u("textarea",F({key:0,"onUpdate:modelValue":n[0]||(n[0]=a=>e.fieldValue=a)},e.attrs,{placeholder:t.label,class:[{"is-invalid":t.error.length>0},"form-control"],onBlur:n[1]||(n[1]=a=>e.emit("blur",a)),onInput:n[2]||(n[2]=a=>e.emit("input",a))}),null,16,L)),[[N,e.fieldValue,void 0,{trim:!0}]]):_((d(),u("input",F({key:1,"onUpdate:modelValue":n[3]||(n[3]=a=>e.fieldValue=a)},e.attrs,{type:t.type=="email"?"text":t.type,placeholder:t.label,class:[{"is-invalid":t.error.length>0},"form-control"],autocomplete:"off",onBlur:n[4]||(n[4]=a=>e.emit("blur",a)),onInput:n[5]||(n[5]=a=>e.emit("input",a))}),null,16,j)),[[R,e.fieldValue,void 0,{trim:!0}]]),h(` \r
    An <input> reserves its space when empty. I use it as a\r
    validation label to prevent the form from suddenly resizing\r
    when error text appears.\r
\r
    This is an important accessibility concern, especially for\r
    people who prefer reduced UI motion for medical reasons.\r
  `),o("input",{readonly:"",disabled:"",tabindex:"-1",class:"invalid-feedback form-control-plaintext p-0 mx-0 mt-0",value:t.error},null,8,q)],64)}var D=I(z,[["render",Z]]);const i={required:r=>`${r} is required.`,tooLong:(r,n)=>`${r} can't be longer than ${n} characters.`,tooShort:(r,n)=>`${r} must be at least ${n} characters long.`,badEmail:()=>"Please enter a valid email address."};function C(r){return r.name.value.length===0?(r.name.error=i.required("Name"),!1):r.name.value.length>r.name.maxlength?(r.name.error=i.tooLong("Name",r.name.maxlength),!1):!0}function S(r){return r.company.value.length>r.company.maxlength?(r.company.error=i.tooLong("Company name",r.company.maxlength),!1):!0}function w(r,n){const t=n?new RegExp(n):/^([a-zA-Z0-9_+-]+\.)*[a-zA-Z0-9_+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]+$/;return r.email.value.length===0?(r.email.error=i.required("Email address"),!1):r.email.value.length>r.email.maxlength?(r.email.error=i.tooLong("Email address",r.email.maxlength),!1):t.test(r.email.value)?!0:(r.email.error=i.badEmail(),!1)}function E(r){return r.messageContent.value.length<r.messageContent.minlength?(r.messageContent.error=i.tooShort("Message content",r.messageContent.minlength),!1):r.messageContent.value.length>r.messageContent.maxlength?(r.messageContent.error=i.tooLong("Message content",r.messageContent.maxlength),!1):!0}function G(r){const n=r.target;let t=n.value.replace(/\s/g," ").replace(/\s\s+/g," ").replace(/^\s+/g,"");n.value=t}function J(r){const n=r.target;let t=n.value.replace(/\s/g," ").replace(/\s\s+/g," ").replace(/^\s+/g,"");n.value=t}function H(r){const n=r.target;let t=n.value.replace(/\s/g,"");n.value=t}var s;(function(r){r.ReadyForInput="ready",r.SubmissionPending="pending",r.Success="success",r.Error="error"})(s||(s={}));const K=b({props:{target:null,origin:{default:"http://localhost:3000/"},overrides:null},setup(r,{expose:n}){n();const t=r,e=B(s.ReadyForInput),l=M({name:{value:"",error:"",maxlength:t.overrides?.name?.maxlength??120},company:{value:"",error:"",maxlength:t.overrides?.company?.maxlength??180},email:{value:"",error:"",maxlength:t.overrides?.company?.maxlength??320},messageContent:{value:"",error:"",minlength:t.overrides?.messagecontent?.minlength??20,maxlength:t.overrides?.messagecontent?.maxlength??1e3}});async function c(){if(e.value=s.SubmissionPending,![C(l),S(l),w(l,t.overrides?.email?.regex),E(l)].every(m=>m)){e.value=s.ReadyForInput;return}const g={name:l.name.value,company:l.company.value,email:l.email.value,messageContent:l.messageContent.value};let y;try{y=await fetch(t.target,{method:"POST",headers:{"Access-Control-Allow-Origin":t.origin},credentials:"same-origin",body:JSON.stringify(g)})}catch(m){e.value=s.Error,console.warn(m);return}if(!y.ok){const m=await y.json();if(!m.hasOwnProperty("errors")){console.warn("Invalid response from server. Response body:"),console.warn(m),e.value=s.Error;return}a(m.errors),e.value=s.ReadyForInput;return}e.value=s.Success}function a(p){for(const g in p)l[g].error=p[g][0]}const v={props:t,formState:e,form:l,submitForm:c,displayServerValidationErrorsInForm:a,FormInput:D,validateName:C,validateCompany:S,validateEmail:w,validateMessageContent:E,cleanNameFieldInput:G,cleanCompanyFieldInput:J,cleanEmailFieldInput:H,FormState:s};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}),Q={key:0,class:"p-5 alert alert-success text-center"},W=o("h1",{class:"mx-auto mb-3"},"Message Sent",-1),X=o("span",null,"I'll reply to you via email as soon as I can.",-1),Y=o("br",null,null,-1),$=o("span",null,"Thanks for stopping by!",-1),ee=[W,X,Y,$],ne={key:1,class:"p-5 alert alert-warning text-center"},re=o("h1",{class:"mx-auto mb-3"},"Error",-1),ae=o("span",null,"Something went wrong on our end.",-1),te=o("br",null,null,-1),oe=o("span",null,"Please try again later.",-1),le=[re,ae,te,oe],se=["disabled"],ie={class:"row g-2"},me={class:"col-12"},de={class:"col-12"},ue={class:"col-12"},ce={class:"col-12"},ve={class:"col-12"},ge={key:0,class:"spinner-border spinner-border-sm",role:"status"};function fe(r,n,t,e,l,c){return e.formState===e.FormState.Success?(d(),u("div",Q,ee)):e.formState===e.FormState.Error?(d(),u("div",ne,le)):(d(),u("fieldset",{key:2,disabled:e.formState!==e.FormState.ReadyForInput},[o("div",ie,[o("div",me,[f(e.FormInput,{type:"text",value:e.form.name.value,"onUpdate:value":n[0]||(n[0]=a=>e.form.name.value=a),error:e.form.name.error,"onUpdate:error":n[1]||(n[1]=a=>e.form.name.error=a),id:"contact-form-name",label:"Name",maxlength:e.form.name.maxlength,onBlur:n[2]||(n[2]=a=>e.validateName(e.form)),onInput:e.cleanNameFieldInput},null,8,["value","error","maxlength","onInput"])]),o("div",de,[f(e.FormInput,{label:"Company (optional)",type:"text",id:"contact-form-company",value:e.form.company.value,"onUpdate:value":n[3]||(n[3]=a=>e.form.company.value=a),error:e.form.company.error,"onUpdate:error":n[4]||(n[4]=a=>e.form.company.error=a),maxlength:e.form.company.maxlength,onBlur:n[5]||(n[5]=a=>e.validateCompany(e.form)),onInput:e.cleanCompanyFieldInput},null,8,["value","error","maxlength","onInput"])]),o("div",ue,[f(e.FormInput,{label:"Email",type:"email",id:"contact-form-email",value:e.form.email.value,"onUpdate:value":n[6]||(n[6]=a=>e.form.email.value=a),error:e.form.email.error,"onUpdate:error":n[7]||(n[7]=a=>e.form.email.error=a),maxlength:e.form.email.maxlength,onBlur:n[8]||(n[8]=a=>e.validateEmail(e.form)),onInput:e.cleanEmailFieldInput},null,8,["value","error","maxlength","onInput"])]),o("div",ce,[f(e.FormInput,{label:"Message",type:"textarea",id:"contact-form-messagecontent",value:e.form.messageContent.value,"onUpdate:value":n[9]||(n[9]=a=>e.form.messageContent.value=a),error:e.form.messageContent.error,"onUpdate:error":n[10]||(n[10]=a=>e.form.messageContent.error=a),minlength:e.form.messageContent.minlength,maxlength:e.form.messageContent.maxlength,rows:4,onBlur:n[11]||(n[11]=a=>e.validateMessageContent(e.form))},null,8,["value","error","minlength","maxlength"])]),o("div",ve,[o("button",{onClick:n[12]||(n[12]=a=>e.submitForm()),class:A([e.formState===e.FormState.ReadyForInput?"btn-primary":"btn-secondary","btn btn-lg w-100 mt-1"])},[e.formState!==e.FormState.ReadyForInput?(d(),u("div",ge)):h("v-if",!0),O(" "+x(e.formState===e.FormState.ReadyForInput?"Submit":"Submitting..."),1)],2)])])],8,se))}var ye=I(K,[["render",fe]]);export{ye as default};
