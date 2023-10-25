const n="lesson00.mdx",i="lessons",s="lesson00",a=`import Scene from "../../components/Game/components/ScenePlayer/Scene.tsx"

#### Robotas moka piešti

Šioje pamokoje sužinosi, kaip išmokyti robotą piešti.
Komanda **\`PIEŠK\`** liepia robotui nuleisti pieštuką. Judėdamas pirmyn ar atgal robotas ims piešti.
Komanda **\`NEPIEŠK\`** liepia robotui pakelti pieštuką.
Komanda **\`SPALVA "<kodas>"\`** keičia pieštuko spalvą.
Spalvų kodus gali rasti <a href="https://www.rapidtables.org/lt/web/color/html-color-codes.html" target="_blank">čia</a>.

###### Pavyzdys nr. 1. Robotas piešia kvadratą
\`\`\`robo1
PIEŠK
SPALVA "#F39C12"
KARTOK 4 [
  PIRMYN 130
  DEŠINĖN
]
\`\`\`
<Scene client:only="react" level="#size! 250 250; #start! 60 190; #angle! -90" code='PIEŠK SPALVA "#F39C12" KARTOK 4 [ PIRMYN 130 DEŠINĖN ]'/>

###### Pavyzdys nr. 2. Robotas piešia trikampį ir apskritimą
\`\`\`robo1
TAI TRIKAMPIS :ilgis [
  PIEŠK
  KARTOK 3 [
    PIRMYN :ilgis
    KAIRĖN 120
  ]
  NEPIEŠK
]

TAI APSKRITIMAS :spindulys [
  PIEŠK
  :x = 2 * 3.14 * :spindulys / 360
  KARTOK 360 [
    PIRMYN :x
    KAIRĖN 1
  ]
  NEPIEŠK
]

TRIKAMPIS 120
PIRMYN 60
APSKRITIMAS 34
\`\`\`
<Scene client:only="react" level="#f! 1; #size! 250 250; #start! 60 190" code='TAI TRIKAMPIS :ilgis [ PIEŠK KARTOK 3 [ PIRMYN :ilgis KAIRĖN 120 ] NEPIEŠK ] TAI APSKRITIMAS :spindulys [ PIEŠK :x = 2 * 3.14 * :spindulys / 360 KARTOK 360 [ PIRMYN :x KAIRĖN 1 ] NEPIEŠK ] TRIKAMPIS 120 PIRMYN 60 APSKRITIMAS 34' />


###### Pavyzdys nr. 3. Robotas – dailininkas

\`\`\`robo1
TAI ORNAMENTAS :žingnis :kampas :dydis [
  PIEŠK
  SPALVA rinkis @["GREEN", "RED", "BLUE", "ORANGE"]
  JEIGU :žingnis > 100 [STOK]
  PIRMYN :žingnis * :dydis
  DEŠINĖN :kampas
  ORNAMENTAS :žingnis + 2 :kampas :dydis
]
ORNAMENTAS 1 93 3
\`\`\`

<Scene client:only="react" level="#f! 1; #size! 500 500; #start! 250 250; #angle! -90" code='
TAI ORNAMENTAS :žingnis :kampas :dydis [
  PIEŠK
  SPALVA rinkis @["GREEN", "RED", "BLUE", "ORANGE"]
  JEIGU :žingnis > 100 [STOK]
  PIRMYN :žingnis * :dydis
  DEŠINĖN :kampas
  ORNAMENTAS :žingnis + 2 :kampas :dydis
]
ORNAMENTAS 1 93 3
' />

Spausk „Spręsti“ ir išbandyk šias komandas!

`,e={title:"freestyle"},o={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/lesson00.mdx",rawData:`
title: 'freestyle'`};export{o as _internal,a as body,i as collection,e as data,n as id,s as slug};
