import{$ as r,c as e}from"./_astro_assets.66fc1d18.js";import{bb as c,bl as l}from"./ScenePlayer.4bddcf0d.js";import"./index.f1f2c4b1.js";import"./Scene_module.c9dcc3ae.81ba598e.js";import"./astro-assets-services.79a8b34c.js";const a={title:"if-else"};function C(){return[{depth:4,slug:"lesson-7-robot-makes-decisions",text:"Lesson 7. Robot Makes Decisions"},{depth:6,slug:"example-no-1-robot-chooses-one-of-two-actions",text:"Example No. 1. Robot Chooses One of Two Actions"},{depth:6,slug:"example-no-2-robot-chooses-from-more-than-two-actions",text:"Example No. 2. Robot Chooses From More Than Two Actions"},{depth:6,slug:"example-no-3-robot-repeats-action-under-certain-conditions",text:"Example no. 3. Robot Repeats Action Under Certain Conditions"}]}const x=!0;function s(n){const o=Object.assign({h4:"h4",p:"p",strong:"strong",code:"code",h6:"h6",pre:"pre",span:"span",aside:"aside",svg:"svg",path:"path",section:"section"},n.components);return e(c,{children:[e(o.h4,{id:"lesson-7-robot-makes-decisions",children:"Lesson 7. Robot Makes Decisions"}),`
`,e(o.p,{children:[`Until now, you decided what the robot should do. However, the robot can also make decisions on its own.
If the robot needs to choose between two actions use `,e(o.strong,{children:e(o.code,{dir:"auto",children:"IF"})})," and ",e(o.strong,{children:e(o.code,{dir:"auto",children:"ELSE"})}),` commands.
If the robot needs to choose between more than two actions use the `,e(o.strong,{children:e(o.code,{dir:"auto",children:"WHEN"})})," command."]}),`
`,e(o.p,{children:["Also, the robot can repeat commands only under certain conditions. When you want the robot to repeat a command under specific conditions use ",e(o.strong,{children:e(o.code,{dir:"auto",children:"WHILE"})}),"."]}),`
`,e(o.h6,{id:"example-no-1-robot-chooses-one-of-two-actions",children:"Example No. 1. Robot Chooses One of Two Actions"}),`
`,e(o.p,{children:"For example, this code teaches robot to go left to avoid a wall."}),`
`,e(o.pre,{"is:raw":"",class:"astro-code css-variables",style:{backgroundColor:"var(--astro-code-color-background)",overflowX:"auto"},tabindex:"0",dir:"ltr",children:e(o.code,{children:[e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"IF :FRONT IS :WALL ["})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  LEFT"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  FORWARD"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"ELSE ["})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  FORWARD"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"]"})})]})}),`
`,e("astro-client-only",{"client:only":"react",level:"#zoom! 48; #size! 5 5; #start! 3 2; #angle! -90; #wall!3 1",code:"JEIGU :PRIEKYJE YRA :SIENA [ KAIRĖN PIRMYN ] KITU ATVEJU [ PIRMYN ]",penDown:"true","client:display-name":"Scene","client:component-path":"/home/slicklash/code/robo1/src/components/Game/components/ScenePlayer/Scene.tsx","client:component-export":"default","client:component-hydration":!0}),`
`,e(o.h6,{id:"example-no-2-robot-chooses-from-more-than-two-actions",children:"Example No. 2. Robot Chooses From More Than Two Actions"}),`
`,e(o.p,{children:"For example, this code teaches robot to avoid obstacles."}),`
`,e(o.pre,{"is:raw":"",class:"astro-code css-variables",style:{backgroundColor:"var(--astro-code-color-background)",overflowX:"auto"},tabindex:"0",dir:"ltr",children:e(o.code,{children:[e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"REPEAT 3 ["})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  WHEN ["})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"    :FRONT IS :EMPTY [ FORWARD ]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"    :RIGHT IS :EMPTY [ RIGHT FORWARD ]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"    :LEFT IS :EMPTY [ LEFT FORWARD ]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"    :BACK IS :EMPTY [ BACKWARD ]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:'    ELSE [ "TOASTED!" ]'})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  ]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"]"})})]})}),`
`,e("astro-client-only",{"client:only":"react",level:"#zoom! 48; #size! 5 5; #start! 3 3; #angle! -90; #wall!3 1,4 2,1 2",code:`
KARTOK 3 [
KAI [
:PRIEKYJE YRA :LAISVA [ PIRMYN ]
:DEŠINĖJE YRA :LAISVA [ DEŠINĖN PIRMYN ]
KITU ATVEJU [ KAIRĖN PIRMYN ]
]
]`,penDown:"true","client:display-name":"Scene","client:component-path":"/home/slicklash/code/robo1/src/components/Game/components/ScenePlayer/Scene.tsx","client:component-export":"default","client:component-hydration":!0}),`
`,e(o.h6,{id:"example-no-3-robot-repeats-action-under-certain-conditions",children:"Example no. 3. Robot Repeats Action Under Certain Conditions"}),`
`,e(o.p,{children:"This code tells the robot to move forward until it runs out of energy and until there is a wall on the left."}),`
`,e(o.pre,{"is:raw":"",class:"astro-code css-variables",style:{backgroundColor:"var(--astro-code-color-background)",overflowX:"auto"},tabindex:"0",dir:"ltr",children:e(o.code,{children:[e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"WHILE :ENERGY > 0 ["})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  WHILE :LEFT IS :WALL ["})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"    FORWARD"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  ]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  LEFT"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  FORWARD"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"]"})})]})}),`
`,e(l,{startEnergy:5,currentEnergy:0}),`
`,e("astro-client-only",{"client:only":"react",level:"#zoom! 48;#size! 5 5; #start! 3 4; #angle! -90; #wall! 2 2, 2 3, 2 4",code:`
KOL :KAIRĖJE YRA :SIENA [
PIRMYN
]
KAIRĖN PIRMYN
`,penDown:"true","client:display-name":"Scene","client:component-path":"/home/slicklash/code/robo1/src/components/Game/components/ScenePlayer/Scene.tsx","client:component-export":"default","client:component-hydration":!0}),`
`,e("br",{}),`
`,e(o.aside,{"aria-label":"Tip",class:"starlight-aside starlight-aside--note",children:[e(o.p,{class:"starlight-aside__title","aria-hidden":"true",children:[e(o.svg,{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor",class:"starlight-aside__icon",children:e(o.path,{d:"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"})}),"Tip"]}),e(o.section,{class:"starlight-aside__content",children:e(o.p,{children:"Use these commands to create efficient and flexible code."})})]})]})}function i(n={}){const{wrapper:o}=n.components||{};return o?e(o,{...n,children:e(s,{...n})}):s(n)}const b="src/content/lessons/en/lesson07.mdx",y="/home/slicklash/code/robo1/src/content/lessons/en/lesson07.mdx",t=(n={})=>i({...n,components:{Fragment:c,...n.components,"astro-image":n.components?.img??r}});t[Symbol.for("mdx-component")]=!0;t[Symbol.for("astro.needsHeadRendering")]=!a.layout;t.moduleId="/home/slicklash/code/robo1/src/content/lessons/en/lesson07.mdx";export{t as Content,x as __usesAstroImage,t as default,y as file,a as frontmatter,C as getHeadings,b as url};
