const n="lesson07.mdx",o="lessons",e="lesson07",i=`import Scene from "../../components/Game/components/ScenePlayer/Scene.tsx"
import Status from "../../components/Game/components/ScenePlayer/Status.tsx"

#### Septinta pamoka. Robotas priima sprendimus

Iki šiol tu nuspręsdavai, ką robotas turi daryti. Tačiau robotas ir pats gali priimti sprendimus.
Jeigu robotui reikia rinktis iš dviejų veiksmų, tuomet naudok **\`JEIGU\`** ir **\`KITU ATVEJU\`** komandas.
Jeigu reikia rinktis iš daugiau nei dviejų veiksmų, tuomet naudok **\`KAI\`** komandą.

Taip pat robotas gali kartoti komandas, tik esant tam tikroms sąlygoms. Jeigu
nori, kad robotas kartotų veiksmą esant konkrečioms sąlygoms, naudok komandą **\`KOL\`**.

###### Pavyzdys nr. 1. Robotas renkasi iš dviejų veiksmų

Pavyzdžiui, šis programos kodas išmoko robotą eiti kairėn, kad išvengtų sienos.
\`\`\`robo1
JEIGU :PRIEKYJE YRA :SIENA [
  KAIRĖN
  PIRMYN
]
KITU ATVEJU [
  PIRMYN
]
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 3 2; #angle! -90; #wall!3 1" code="JEIGU :PRIEKYJE YRA :SIENA [ KAIRĖN PIRMYN ] KITU ATVEJU [ PIRMYN ]" penDown="true" />

###### Pavyzdys nr. 2. Robotas renkasi iš daugiau nei dviejų veiksmų

Pavyzdžiui, šis programos kodas išmoko robotą apeiti kliūtis.

\`\`\`robo1
KARTOK 3 [
  KAI [
    :PRIEKYJE YRA :LAISVA [ PIRMYN ]
    :DEŠINĖJE YRA :LAISVA [ DEŠINĖN PIRMYN ]
    :KAIRĖJE YRA :LAISVA [ KAIRĖN PIRMYN ]
    :GALE YRA :LAISVA [ ATGAL ]
    KITU ATVEJU [ "ŠAKĖS!" ]
  ]
]
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 3 3; #angle! -90; #wall!3 1,4 2,1 2" code="
KARTOK 3 [
  KAI [
    :PRIEKYJE YRA :LAISVA [ PIRMYN ]
    :DEŠINĖJE YRA :LAISVA [ DEŠINĖN PIRMYN ]
    KITU ATVEJU [ KAIRĖN PIRMYN ]
  ]
]" penDown="true" />


###### Pavyzdys nr. 3. Robotas kartoja veiksmą, esant konkrečioms sąlygoms

Šis programos kodas nurodo robotui važiuoti į priekį tol, kol pasibaigs energija ir kol kairėje bus siena.

\`\`\`robo1
KOL :ENERGIJA > 0 [
  KOL :KAIRĖJE YRA :SIENA [
    PIRMYN
  ]
  KAIRĖN PIRMYN
]
\`\`\`

<Status startEnergy={5} currentEnergy={0} />
<Scene client:only level="#zoom! 48;#size! 5 5; #start! 3 4; #angle! -90; #wall! 2 2, 2 3, 2 4" code="
  KOL :KAIRĖJE YRA :SIENA [
    PIRMYN
  ]
  KAIRĖN PIRMYN
" penDown="true" />

<br/>
:::note[Patarimas]
Šias komandas naudok tam, kad sukurtum efektyvų ir lankstų kodą.
:::
`,a={title:"if-else"},s={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/lesson07.mdx",rawData:`
title: 'if-else'`};export{s as _internal,i as body,o as collection,a as data,n as id,e as slug};
