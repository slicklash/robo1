import{$ as c,c as e}from"./_astro_assets.66fc1d18.js";import{bb as s}from"./ScenePlayer.4bddcf0d.js";import"./index.f1f2c4b1.js";import"./Scene_module.c9dcc3ae.81ba598e.js";import"./astro-assets-services.79a8b34c.js";const a={title:"freestyle"};function x(){return[{depth:4,slug:"robot-can-draw",text:"Robot Can Draw"},{depth:6,slug:"example-no-1-robot-draws-a-square",text:"Example No. 1. Robot Draws a Square"},{depth:6,slug:"example-no-2-robot-draws-a-triangle-and-a-circle",text:"Example No. 2. Robot Draws a Triangle and a Circle"},{depth:6,slug:"example-no-3-robot-is-an-artist",text:"Example no. 3. Robot Is an Artist"}]}const y=!0;function r(n){const o=Object.assign({h4:"h4",p:"p",strong:"strong",code:"code",h6:"h6",pre:"pre",span:"span"},n.components);return e(s,{children:[e(o.h4,{id:"robot-can-draw",children:"Robot Can Draw"}),`
`,e(o.p,{children:[`In this lesson you will learn how to teach a robot to draw.
The `,e(o.strong,{children:e(o.code,{dir:"auto",children:"PENDOWN"})}),` command tells the robot to lower the pencil. When moving forward or backward the robot will start drawing.
The command `,e(o.strong,{children:e(o.code,{dir:"auto",children:"PENUP"})}),` tells the robot to raise the pencil.
The command `,e(o.strong,{children:e(o.code,{dir:"auto",children:'COLOR "<code>"'})}),` changes the color of the pencil.
You can find the color codes `,e("a",{href:"https://www.rapidtables.org/web/color/html-color-codes.html",target:"_blank",children:"here"}),"."]}),`
`,e(o.h6,{id:"example-no-1-robot-draws-a-square",children:"Example No. 1. Robot Draws a Square"}),`
`,e(o.pre,{"is:raw":"",class:"astro-code css-variables",style:{backgroundColor:"var(--astro-code-color-background)",overflowX:"auto"},tabindex:"0",dir:"ltr",children:e(o.code,{children:[e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"PENDOWN"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:'COLOR "#F39C12"'})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"REPEAT 4 ["})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  FORWARD 130"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  RIGHT"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"]"})})]})}),`
`,e("astro-client-only",{"client:only":"react",level:"#size! 250 250; #start! 60 190; #angle! -90",code:'PIEŠK SPALVA "#F39C12" KARTOK 4 [ PIRMYN 130 DEŠINĖN ]',"client:display-name":"Scene","client:component-path":"/home/slicklash/code/robo1/src/components/Game/components/ScenePlayer/Scene.tsx","client:component-export":"default","client:component-hydration":!0}),`
`,e(o.h6,{id:"example-no-2-robot-draws-a-triangle-and-a-circle",children:"Example No. 2. Robot Draws a Triangle and a Circle"}),`
`,e(o.pre,{"is:raw":"",class:"astro-code css-variables",style:{backgroundColor:"var(--astro-code-color-background)",overflowX:"auto"},tabindex:"0",dir:"ltr",children:e(o.code,{children:[e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"HERE TRIANGLE :size ["})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  PENDOWN"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  REPEAT 3 ["})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"    FORWARD :size"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"    LEFT 120"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  ]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  PENUP"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"}})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"HERE CIRCLE :radius ["})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  PENDOWN"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  :x = 2 * 3.14 * :radius / 360"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  REPEAT 360 ["})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"    FORWARD :x"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"    LEFT 1"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  ]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  PENUP"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"}})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"TRIANGLE 120"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"FORWARD 60"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"CIRCLE 34"})})]})}),`
`,e("astro-client-only",{"client:only":"react",level:"#f! 1; #size! 250 250; #start! 60 190",code:"TAI TRIKAMPIS :ilgis [ PIEŠK KARTOK 3 [ PIRMYN :ilgis KAIRĖN 120 ] NEPIEŠK ] TAI APSKRITIMAS :spindulys [ PIEŠK :x = 2 * 3.14 * :spindulys / 360 KARTOK 360 [ PIRMYN :x KAIRĖN 1 ] NEPIEŠK ] TRIKAMPIS 120 PIRMYN 60 APSKRITIMAS 34","client:display-name":"Scene","client:component-path":"/home/slicklash/code/robo1/src/components/Game/components/ScenePlayer/Scene.tsx","client:component-export":"default","client:component-hydration":!0}),`
`,e(o.h6,{id:"example-no-3-robot-is-an-artist",children:"Example no. 3. Robot Is an Artist"}),`
`,e(o.pre,{"is:raw":"",class:"astro-code css-variables",style:{backgroundColor:"var(--astro-code-color-background)",overflowX:"auto"},tabindex:"0",dir:"ltr",children:e(o.code,{children:[e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"HERE ORNAMENT :step :angle :size ["})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  PENDOWN"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:'  COLOR choose @["GREEN", "RED", "BLUE", "ORANGE"]'})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  IF :step > 100 [STOP]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  FORWARD :step * :size"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  RIGHT :angle"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"  ORNAMENT :step + 2 :angle :size"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"]"})}),`
`,e(o.span,{class:"line",children:e(o.span,{style:{color:"var(--astro-code-color-text)"},children:"ORNAMENT 1 93 3"})})]})}),`
`,e("astro-client-only",{"client:only":"react",language:"lt",level:"#f! 1; #size! 500 500; #start! 250 250; #angle! -90",code:`
TAI ORNAMENTAS :žingnis :kampas :dydis [
PIEŠK
SPALVA rinkis @["GREEN", "RED", "BLUE", "ORANGE"]
JEIGU :žingnis > 100 [STOK]
PIRMYN :žingnis * :dydis
DEŠINĖN :kampas
ORNAMENTAS :žingnis + 2 :kampas :dydis
]
ORNAMENTAS 1 93 3
`,"client:display-name":"Scene","client:component-path":"/home/slicklash/code/robo1/src/components/Game/components/ScenePlayer/Scene.tsx","client:component-export":"default","client:component-hydration":!0}),`
`,e(o.p,{children:"Click “Solve” and try these commands!"})]})}function t(n={}){const{wrapper:o}=n.components||{};return o?e(o,{...n,children:e(r,{...n})}):r(n)}const u="src/content/lessons/en/lesson00.mdx",E="/home/slicklash/code/robo1/src/content/lessons/en/lesson00.mdx",l=(n={})=>t({...n,components:{Fragment:s,...n.components,"astro-image":n.components?.img??c}});l[Symbol.for("mdx-component")]=!0;l[Symbol.for("astro.needsHeadRendering")]=!a.layout;l.moduleId="/home/slicklash/code/robo1/src/content/lessons/en/lesson00.mdx";export{l as Content,y as __usesAstroImage,l as default,E as file,a as frontmatter,x as getHeadings,u as url};
