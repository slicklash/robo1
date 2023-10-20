const a="lesson05.mdx",n="lessons",o="lesson05",s=`import Scene from "../../components/Game/components/ScenePlayer/Scene.tsx"

#### Penkta pamoka. Kurk naujas komandas

Vietoj ilgų komandų sekų gali sukurti naujas komandas, kurios palengvins programavimą.
Norėdamas sukurti naują komandą, naudok tokią sintaksę: **\`TAI <naujos_komandos_pavadinimas> [<komandų seka>]\`**.

Naują komandą gali patobulinti pridėdamas **parametrus** – laisvai kintančias reikšmes. Parametrai leidžia prisitaikyti prie skirtingų situacijų. Pavyzdžiui, komandos **\`PIRMYN\`** parametras nurodo, kiek kartų robotas turi važiuoti į priekį.

Norėdamas sukurti naują komandą su parametru, naudok tokią sintaksę: **\`TAI <naujos_komandos_pavadinimas> :<parametro1_pavadinimas> :<parametro2_pavadinimas> ir t.t. [<komandų seka>]\`**.

###### Pavyzdys nr. 1. Nauja komanda LIPK
\`\`\`robo1
TAI LIPK [
  PIRMYN
  DEŠINĖN
  PIRMYN
  KAIRĖN
]
KARTOK 4 [ LIPK ]
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 0 4; #angle! -90; #wall! 1 4, 2 3, 3 2, 4 1" code="TAI LIPK [ PIRMYN DEŠINĖN PIRMYN KAIRĖN ] KARTOK 4 [ LIPK ]" penDown="true" />

###### Pavyzdys nr. 2. Nauja komanda LIPK su parametru
\`\`\`robo1
TAI LIPK :n_kartų [
  KARTOK :n_kartų [
    PIRMYN
    DEŠINĖN
    PIRMYN
    KAIRĖN
  ]
]
LIPK 4
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 0 4; #angle! -90; #wall! 1 4, 2 3, 3 2, 4 1" code="TAI LIPK :n_kartų [ KARTOK :n_kartų [ PIRMYN DEŠINĖN PIRMYN KAIRĖN ] ] LIPK 4" penDown="true" />

<br/>
:::note[Patarimas]
Kurdamas naujas komandas mažiau kartosies ir padarysi programos kodą aiškesnį. Tai atitinka vieną iš programavimo principų **NESIKARTOK**.
:::
`,i={title:"custom-commands"},t={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/lesson05.mdx",rawData:`
title: 'custom-commands'`};export{t as _internal,s as body,n as collection,i as data,a as id,o as slug};
