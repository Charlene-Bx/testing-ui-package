import{j as g,g as e,t as y,o as h}from"./vue.esm-bundler-BAbkIwkH.js";import{_ as N}from"./github-U0sUvQit.js";const f={className:"socialMedia"},v={className:"socialMedia__list"},M=e("li",{className:"socialMedia__item"},[e("img",{src:N,alt:"Github logo",className:"socialMedia__github"}),e("p",null,"GitHub")],-1),k={className:"socialMedia__item"},u={__name:"Link",props:{copyright:{type:String}},setup(o){return(b,w)=>(h(),g("nav",f,[e("ul",v,[M,e("li",k,[e("p",null,y(o.copyright),1)])])]))}},x=u;u.__docgenInfo={exportName:"default",displayName:"Link",description:"",tags:{},props:[{name:"copyright",type:{name:"string"}}],sourceFiles:["/Users/cbo/Code/PERSONNAL/StoryBook/SB_vue_sample/src/components/Link/Link.vue"]};const S=`.socialMedia {
    display: flex;
    width: 100%;
    background-color: $c-primary;
    margin: 64px 0 0 0;
    justify-content: center;
    align-items: center;
    padding: 8px 32px;
}
.socialMedia__list {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .socialMedia__item {
        list-style: none;
        list-style-type: none;
        text-align: center;

        p {
            color: $c_light;
            fill: $c_light;
        }
    }
}`,O={title:"Components/Navigation/Link",tags:["autodocs"],args:{copyright:"Made with love as always"},render:o=>({components:{SocialMedia:x},setup(){return{props:{...o}}},template:'<SocialMedia v-bind="props"/>'}),parameters:{layout:"fullscreen",docs:{source:{code:S,language:"css"}}}},s={},a={},t={};var n,i,r;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(r=(i=s.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,_;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(_=(m=t.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const j=["Overview","Nude","Decorative"];export{t as Decorative,a as Nude,s as Overview,j as __namedExportsOrder,O as default};
