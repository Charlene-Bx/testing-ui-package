import{d as k,e as x,n as z,f as N,o as C,g as i,t as o}from"./vue.esm-bundler-BAbkIwkH.js";/* empty css                */const S={__name:"Heading",props:{line1:{type:String},line2:{type:String},type:{type:String,validator:e=>["h1","h2","h3","h4"].includes(e)},style:{type:String,validator:e=>["heading-1","heading-2","heading-3","heading-4"].includes(e)}},setup(e){return(O,b)=>(C(),k(N(e.type),{class:z(["heading",`heading--${e.style}`])},{default:x(()=>[i("span",null,o(e.line1),1),i("span",null,o(e.line2),1)]),_:1},8,["class"]))}},B=S;S.__docgenInfo={exportName:"default",displayName:"Heading",description:"",tags:{},props:[{name:"line1",type:{name:"string"}},{name:"line2",type:{name:"string"}},{name:"type",type:{name:"string"},values:["h1","h2","h3","h4"]},{name:"style",type:{name:"string"},values:["heading-1","heading-2","heading-3","heading-4"]}],sourceFiles:["/Users/cbo/Code/PERSONNAL/StoryBook/SB_vue_sample/src/components/Heading/Heading.vue"]};const D=`.heading {
   display: flex;
   flex-direction: column;
   line-height: 0.86;
}

.heading--heading-1 {
   span:nth-of-type(1) {
      font-family: $ff-Helvetica;
      font-weight: $fw-thin;
      font-size: 5rem;
      color: darken($c_primary, 30%);
   }
   span:nth-of-type(2) {
      font-size: 5.2rem;
      font-family: $ff-TimesNow;
      color: $c_primary;     
   }
}

.heading--heading-2 {
   span:nth-of-type(1) {
      font-family: $ff-Helvetica;
      font-weight: $fw-thin;
      font-size: 3rem;
      color: darken($c_primary, 30%);
   }
   span:nth-of-type(2) {
      font-size: 3.2rem;
      font-family: $ff-TimesNow;
      color: darken($c_primary, 30%);     
   }
}

.heading--heading-3 {
   font-family: $ff-Helvetica;
   font-weight: $fw-thin;
   font-size: 3rem;
   color: darken($c_primary, 30%);
}

.heading--heading-4 {
   font-family: $ff-Helvetica;
   font-weight: $fw-thin;
   font-size: 2.5rem;
   color: darken($c_primary, 30%);
}`,A={title:"Components/Data Display/Heading",tags:["autodocs"],args:{line1:"Welcome to your",line2:"brand new design system"},argTypes:{type:{control:"select",options:["h1","h2","h3","h4"]},style:{control:"select",options:["heading-1","heading-2","heading-3","heading-4"]}},render:e=>({components:{Heading:B},setup(){return{props:{...e}}},template:'<Heading v-bind="props"/>'}),parameters:{layout:"fullscreen",docs:{source:{code:D,language:"css"}}}},n={},a={args:{type:"h1",style:"heading-1"}},t={args:{type:"h2",style:"heading-2"}},s={args:{type:"h2",style:"heading-3"}},r={args:{type:"h2",style:"heading-4"}};var d,c,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var l,p,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'h1',
    style: 'heading-1'
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,y,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'h2',
    style: 'heading-2'
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var u,_,H;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'h2',
    style: 'heading-3'
  }
}`,...(H=(_=s.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var $,v,w;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: 'h2',
    style: 'heading-4'
  }
}`,...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const F=["Overview","Heading_1","Heading_2","Heading_3","Heading_4"];export{a as Heading_1,t as Heading_2,s as Heading_3,r as Heading_4,n as Overview,F as __namedExportsOrder,A as default};
