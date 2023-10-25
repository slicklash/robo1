const n="lesson04.mdx",o="lessons",a="lesson04",e=`import Scene from "../../components/Game/components/ScenePlayer/Scene.tsx"

#### Ketvirta pamoka. Robotas kartoja komandas

Susipažink su komanda **\`KARTOK X [<komandų seka>]\`**. **\`X\`** tai skaičius nurodantis robotui, kiek kartų kartoti komandų seką. Komandų seka rašoma laužtiniuose skliaustuose.

###### Pavyzdys nr. 1. Robotas važiuoja ratu
\`\`\`robo1
KARTOK 4 [
  PIRMYN 2
  KAIRĖN
]
\`\`\`
<Scene client:only="react" level="#zoom! 48; #size! 5 5; #start! 1 3" code="KARTOK 4 [ PIRMYN 2 KAIRĖN ]" penDown="true" />

###### Pavyzdys nr. 2. Robotas nuvažiuoja ir grįžta
\`\`\`robo1
KARTOK 2 [
  PIRMYN 4
  DEŠINĖN 180
]
\`\`\`
<Scene client:only="react" level="#zoom! 48; #size! 5 5; #start! 2 4; #angle! -90" code="KARTOK 2 [ PIRMYN 4 DEŠINĖN 180 ]" penDown="true" />

<br/>
:::note[Patarimas]
Ši komanda leidžia efektyviai atlikti pasikartojančias veiksmų sekas ir išvengti komandų kopijavimo.
:::
`,t={title:"repeat"},s={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/lesson04.mdx",rawData:`
title: 'repeat'`};export{s as _internal,e as body,o as collection,t as data,n as id,a as slug};
