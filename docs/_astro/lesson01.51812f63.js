const n="lesson01.mdx",o="lessons",a="lesson01",i=`import Scene from "../../components/Game/components/ScenePlayer/Scene.tsx"

#### Pirma pamoka. Robotas juda į priekį ir atgal

Pirmoji komanda, kurią išmoksi, yra **\`PIRMYN\`**. Ji nurodo robotui važiuoti į priekį. Taip pat gali nurodyti, kiek langelių robotas turi važiuoti.
Pavyzdžiui, įvesk **\`PIRMYN 3\`** ir tavo robotas važiuos tris langelius į priekį.
Kartais gali tekti važiuoti atgal. Komanda **\`ATGAL\`** yra skirta judėti atbulomis. Pavyzdžiui, įvesk **\`ATGAL 2\`** ir tavo robotas važiuos du langelius atgal.

###### Pavyzdys nr. 1
\`\`\`robo1
PIRMYN 3
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 2 4; #angle! -90" code="PIRMYN 3" penDown="true" />

###### Pavyzdys nr. 2
\`\`\`robo1
ATGAL 2
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 2 0; #angle! -90;" code="ATGAL 2" penDown="true" />

Spausk „Spręsti“ ir išbandyk šias komandas!

`,t={title:"forward"},e={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/lesson01.mdx",rawData:`
title: 'forward'`};export{e as _internal,i as body,o as collection,t as data,n as id,a as slug};
