"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[526],{6321:function(n,e,t){t.d(e,{L1:function(){return s},OQ:function(){return p},l_:function(){return d},tN:function(){return u}});var r,i,a,o,l=t(168),c=t(7691),u=c.ZP.form(r||(r=(0,l.Z)(["\n  display: block;\n  margin: 30px;\n  padding: 15px;\n  width: 300px;\n  border: 2px solid black;\n  ","\n"])),(function(n){return n.filterForm})),s=c.ZP.label(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),d=c.ZP.input(a||(a=(0,l.Z)(["\n  margin-bottom: 25px;\n  width: 150px;\n  ","\n"])),(function(n){return n.inputFilter})),p=c.ZP.button(o||(o=(0,l.Z)(["\n  background: transparent;\n  border-radius: 3px;\n  border: 1px solid black;\n  color: black;\n  padding: 0.25em 1em;\n  text-transform: capitalize;\n  ",";\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n    0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  &:hover {\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    scale: 1.01;\n  }\n"])),(function(n){return n.buttonListStyle}))},8026:function(n,e,t){t.d(e,{Dr:function(){return c}});var r,i,a,o=t(168),l=t(7691),c=(l.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 30px;\n  padding: 15px;\n  margin-top: 0;\n  ","\n"])),""),l.ZP.li(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-transform: capitalize;\n  padding: 3px;\n"]))),l.ZP.span(a||(a=(0,o.Z)(["\n  margin-bottom: 10px;\n"]))))},1526:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,i,a,o=t(9439),l=t(2791),c=t(6321),u=t(8026),s=t(9434),d=t(861),p=t(1538),x=t(1686),f=t(3329),m=function(){var n=(0,l.useState)(""),e=(0,o.Z)(n,2),t=e[0],r=e[1],i=(0,l.useState)(""),a=(0,o.Z)(i,2),m=a[0],h=a[1],b=(0,s.I0)(),g=(0,s.v9)(p.K),Z=function(n){var e=n.currentTarget,t=e.name,i=e.value;if("number"!==t){if("name"!==t)throw new Error("There is no field name - ".concat(t));r(i)}else h(i)},v=function(){r(""),h("")};return(0,f.jsxs)(c.tN,{onSubmit:function(n){n.preventDefault();var e={name:t,number:m};g.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?x.Notify.failure("".concat(e.name," is already in contacts.")):(b((0,d.uK)(e)),v())},children:[(0,f.jsxs)(c.L1,{children:[(0,f.jsx)(u.Dr,{children:"Name"}),(0,f.jsx)(c.l_,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:Z})]}),(0,f.jsxs)(c.L1,{children:[(0,f.jsx)(u.Dr,{children:"Phone"}),(0,f.jsx)(c.l_,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:m,onChange:Z})]}),(0,f.jsx)(c.OQ,{type:"submit",children:"Add contact"})]})},h=t(168),b=t(7691),g=b.ZP.h2(r||(r=(0,h.Z)(["\n  display: block;\n  margin: 30px;\n  font-size: 24px;\n"]))),Z=t(6895),v=function(){var n=(0,s.v9)((function(n){return n.filter.value})),e=(0,s.I0)();return(0,f.jsx)(c.tN,{filterForm:"border-style: none; margin-bottom: 0;",children:(0,f.jsxs)(c.L1,{children:["Find contacts by name",(0,f.jsx)(c.l_,{type:"text",title:"filter",value:n,onChange:function(n){e((0,Z.a8)(n.currentTarget.value))},inputFilter:"margin: 0; margin-top: 10px;"})]})})},y=b.ZP.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 30px;\n  padding: 15px;\n  margin-top: 0;\n  width: 400px;\n"]))),j=b.ZP.li(a||(a=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-transform: capitalize;\n  padding: 3px;\n"]))),w=function(n){return n.filter.value},k=function(){var n=(0,s.v9)(p.K),e=(0,s.v9)(w),t=(0,s.I0)();(0,l.useEffect)((function(){t((0,d.yF)())}),[t]);return(0,f.jsx)(y,{children:function(){if(n)return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}().map((function(n){var e=n.name,r=n.id,i=n.number;return(0,f.jsxs)(j,{children:[e,": ",i,(0,f.jsx)(c.OQ,{type:"button",onClick:function(){return t((0,d.GK)(r))},buttonListStyle:"margin-left: 10px",children:"Delete"})]},r)}))})},C=function(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(g,{children:"PhoneBook"}),(0,f.jsx)(m,{}),(0,f.jsx)(g,{children:"Contacts"}),(0,f.jsx)(v,{}),(0,f.jsx)(k,{})]})}}}]);
//# sourceMappingURL=526.9bd69fb8.chunk.js.map