const n="lesson03.mdx",e="lessons",o="lesson03",t=`import Scene from "../../components/Game/components/ScenePlayer/Scene.tsx"
import Status from "../../components/Game/components/ScenePlayer/Status.tsx"

#### Trečia pamoka. Robotas yra varomas energija

Kiekvienas roboto veiksmas eikvoja energiją. Kai roboto energija išsenka, jis sustoja.

**Pastaba.** Skirtingose užduotyse roboto energijos lygis gali skirtis.

###### Pavyzdys nr. 1. Robotas sustojo
\`\`\`robo1
PIRMYN 3
DEŠINĖN
PIRMYN
DEŠINĖN
PIRMYN
\`\`\`
<Status startEnergy={5} currentEnergy={0} />
<Scene client:only="react" level="#zoom! 48; #size! 5 5; #start! 2 4; #angle! -90; #star! 3 3" code="PIRMYN 3 DEŠINĖN PIRMYN DEŠINĖN PIRMYN" penDown="true" />

###### Pavyzdys nr. 2. Gerai padirbėta
\`\`\`robo1
PIRMYN
DEŠINĖN
PIRMYN
\`\`\`
<Status startEnergy={5} currentEnergy={3} />
<Scene client:only="react" level="#zoom! 48; #size! 5 5; #start! 2 4; #angle! -90; #star! 3 3" code="PIRMYN DEŠINĖN PIRMYN" penDown="true" />


<br/>
:::note[Patarimas]
Naudok komandas išmintingai!
:::
`,s={title:"energy"},a={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/lesson03.mdx",rawData:`
title: 'energy'`};export{a as _internal,t as body,e as collection,s as data,n as id,o as slug};
