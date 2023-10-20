const n="lesson02.mdx",o="lessons",e="lesson02",a=`import Scene from "../../components/Game/components/ScenePlayer/Scene.tsx"

#### Antra pamoka. Robotas moka pasisukti

Dabar išmoksi pasukti robotą į kairę ir dešinę. Tam yra naudojamos komandos **\`KAIRĖN\`** ir **\`DEŠINĖN\`**.
Taip pat gali nurodyti, kokiu kampu robotas turi pasisukti. Pavyzdžiui, **\`KAIRĖN 180\`**. Galimi kampai: 90, 180, 270.

###### Pavyzdys nr. 1
\`\`\`robo1
PIRMYN 3
DEŠINĖN
PIRMYN
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 2 4; #angle! -90;" code="PIRMYN 3 DEŠINĖN PIRMYN" penDown="true" />

###### Pavyzdys nr. 2
\`\`\`robo1
PIRMYN
DEŠINĖN
PIRMYN
KAIRĖN 180
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 1 3; #angle! -90;" code="PIRMYN DEŠINĖN PIRMYN KAIRĖN 180" penDown="true" />

Metas išbandyti naujas komandas!
`,t={title:"turn"},s={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/lesson02.mdx",rawData:`
title: 'turn'`};export{s as _internal,a as body,o as collection,t as data,n as id,e as slug};
