const a="lesson06.mdx",i="lessons",n="lesson06",o=`import Scene from "../../components/Game/components/ScenePlayer/Scene.tsx"

#### Šešta pamoka. Roboto atmintis ir jutikliai

##### Atmintis

Robotas turi atmintį, kuri yra tarsi komoda su stalčiukais. Stalčiukuose gali būti saugoma informacija.
Norint išsaugoti konkrečius duomenis, pirmiausia reikia pavadinti stalčiuką, o tada į jį įdėti informaciją. Pavyzdžiui:

\`\`\`robo1
:metai = 2023
:spalva = "geltona"
\`\`\`

Stalčiuko pavadinimas – tai informacijos adresas. Jis rašomas taip  **\`:<pavadinimas>\`**

Trečioje pamokoje sužinojai, kad robotas yra varomas energija. Bet kada patikrinęs adresą **\`:ENERGIJA\`**,
pamatysi, kiek energijos liko robotui.

##### Jutikliai

Taip pat robotas turi specialius jutiklius, panašius į akis, išdėstytus priekyje, gale, kairėje ir dešinėje.
Naudodamas jutiklius robotas geba atpažinti objektus.
Jutiklių duomenys yra saugomi šiuose adresuose: **\`:PRIEKYJE\`**, **\`:GALE\`**, **\`:KAIRĖJE\`** ir **\`:DEŠINĖJE\`**.

Objektų, kuriuos atpažįsta robotas, kodai yra saugomi šiuose adresuose:

\`\`\`robo1
:LAISVA = 0
:SIENA = 1
:ŽVAIGŽDĖ = 2
:ĮKROVIKLIS = 3
\`\`\`

###### Pavyzdys nr. 1. Dešinėje yra žvaigždė
Roboto atmintyje, kurios adresas **\`:DEŠINĖJE\`**, bus įrašytas objektas **\`:ŽVAIGŽDĖ\`**
\`\`\`robo1
:DEŠINĖJE = :ŽVAIGŽDĖ
\`\`\`
<Scene client:only="react" level="#zoom! 48; #size! 5 5; #start! 2 2; #angle! -90; #star! 3 2" code="" penDown="true" />

###### Pavyzdys nr. 2. Priekyje yra įkroviklis
Roboto atmintyje, kurios adresas **\`:PRIEKYJE\`**, bus įrašytas objektas **\`:ĮKROVIKLIS\`**
\`\`\`robo1
:PRIEKYJE = :ĮKROVIKLIS
\`\`\`
<Scene client:only="react" level="#zoom! 48; #size! 5 5; #start! 2 2; #angle! -90; #charger! 2 1" code="" penDown="true" />

**Pastaba.** Įkroviklis padidina roboto energijos lygį 10-čia vienetų.
`,s={title:"charge"},e={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/lesson06.mdx",rawData:`
title: 'charge'`};export{e as _internal,o as body,i as collection,s as data,a as id,n as slug};
