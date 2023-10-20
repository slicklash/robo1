const i="lesson08.mdx",n="lessons",a="lesson08",t=`#### Aštunta pamoka. Labirintas

Robotas atsidūrė labirinte. Šioje pamokoje išmokysi robotą, kaip iš jo ištrūkti.
Tai visai nesudėtinga, jei žinai **Vienos rankos taisyklę.** Ji tokia – vieną ranką pridėk prie labirinto sienos ir neatitrauk.
Jei eisi palei sieną, neatitraukdamas rankos, tu tikrai rasi išėjimą!

Vienos rankos taisyklę gali aprašyti taip:
\`\`\`robo1
KOL :ENERGIJA > 0 [
   KAI [
     GALI_PIRMYN [ PIRMYN ]
     GALI_DEŠINĖN [ DEŠINĖN PIRMYN ]
     KITU ATVEJU [ KAIRĖN ]
  ]
]
\`\`\`

Bet tau pačiam reikės aprašyti dvi naujas komandas **\`GALI_PIRMYN\`** ir **\`GALI_DEŠINĖN\`**. Sėkmės!

<br/>
:::note[Patarimas]
Jei nepavyksta ištrūkti iš labirinto, pabandyk pakeisti ranką.
:::
`,s={title:"maze"},o={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/lesson08.mdx",rawData:`
title: 'maze'`};export{o as _internal,t as body,n as collection,s as data,i as id,a as slug};
