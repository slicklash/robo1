const n="en/lesson00.mdx",e="lessons",o="en/lesson00",s=`import Scene from "../../../components/Game/components/ScenePlayer/Scene.tsx"

#### Robot Can Draw

In this lesson you will learn how to teach a robot to draw.
The **\`PENDOWN\`** command tells the robot to lower the pencil. When moving forward or backward the robot will start drawing.
The command **\`PENUP\`** tells the robot to raise the pencil.
The command **\`COLOR "<code>"\`** changes the color of the pencil.
You can find the color codes <a href="https://www.rapidtables.org/web/color/html-color-codes.html" target="_blank">here</a>.

###### Example No. 1. Robot Draws a Square
\`\`\`robo1
PENDOWN
COLOR "#F39C12"
REPEAT 4 [
  FORWARD 130
  RIGHT
]
\`\`\`
<Scene client:only level="#size! 250 250; #start! 60 190; #angle! -90" code='PIEŠK SPALVA "#F39C12" KARTOK 4 [ PIRMYN 130 DEŠINĖN ]'/>

###### Example No. 2. Robot Draws a Triangle and a Circle
\`\`\`robo1
HERE TRIANGLE :size [
  PENDOWN
  REPEAT 3 [
    FORWARD :size
    LEFT 120
  ]
  PENUP
]

HERE CIRCLE :radius [
  PENDOWN
  :x = 2 * 3.14 * :radius / 360
  REPEAT 360 [
    FORWARD :x
    LEFT 1
  ]
  PENUP
]

TRIANGLE 120
FORWARD 60
CIRCLE 34
\`\`\`
<Scene client:only level="#f! 1; #size! 250 250; #start! 60 190" code='TAI TRIKAMPIS :ilgis [ PIEŠK KARTOK 3 [ PIRMYN :ilgis KAIRĖN 120 ] NEPIEŠK ] TAI APSKRITIMAS :spindulys [ PIEŠK :x = 2 * 3.14 * :spindulys / 360 KARTOK 360 [ PIRMYN :x KAIRĖN 1 ] NEPIEŠK ] TRIKAMPIS 120 PIRMYN 60 APSKRITIMAS 34' />


###### Example no. 3. Robot Is an Artist

\`\`\`robo1
HERE ORNAMENT :step :angle :size [
  PENDOWN
  COLOR choose @["GREEN", "RED", "BLUE", "ORANGE"]
  IF :step > 100 [STOP]
  FORWARD :step * :size
  RIGHT :angle
  ORNAMENT :step + 2 :angle :size
]
ORNAMENT 1 93 3
\`\`\`

<Scene client:only language="lt" level="#f! 1; #size! 500 500; #start! 250 250; #angle! -90" code='
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

Click "Solve" and try these commands!

`,t={title:"freestyle"},l={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/en/lesson00.mdx",rawData:`
title: 'freestyle'`};export{l as _internal,s as body,e as collection,t as data,n as id,o as slug};
