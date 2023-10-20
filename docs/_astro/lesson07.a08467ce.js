const n="en/lesson07.mdx",e="lessons",o="en/lesson07",t=`import Scene from "../../../components/Game/components/ScenePlayer/Scene.tsx"
import Status from "../../../components/Game/components/ScenePlayer/Status.tsx"

#### Lesson 7. Robot makes decisions

Until now, you decided what the robot should do. However, the robot can also make decisions on its own.
If the robot needs to choose between two actions, then use **\`IF\`** and **\`ELSE\`** commands.
If you need to choose between more than two actions, then use the **\`WHEN\`** command.

Also, the robot can repeat commands only under certain conditions. If you want robot to repeat a command under specific conditions use **\`WHILE\`**.

###### Example no. 1. Robot Chooses One of Two Actions

For example, this program code teaches robot to go left to avoid a wall.
\`\`\`robo1
IF :FRONT IS :WALL [
  LEFT
  FORWARD
]
ELSE [
  FORWARD
]
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 3 2; #angle! -90; #wall!3 1" code="JEIGU :PRIEKYJE YRA :SIENA [ KAIRĖN PIRMYN ] KITU ATVEJU [ PIRMYN ]" penDown="true" />

###### Example no. 2. Robot Chooses from More Rhan Two Actions

For example, this program code teaches robot to avoid obstacles.

\`\`\`robo1
REPEAT 3 [
  WHEN [
    :FRONT IS :EMPTY [ FORWARD ]
    :RIGHT IS :EMPTY [ RIGHT FORWARD ]
    :LEFT IS :EMPTY [ LEFT FORWARD ]
    :BACK IS :EMPTY [ BACKWARD ]
    ELSE [ "TOASTED!" ]
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


###### Example no. 3. Robot Repeats Action Under Certain Conditions

This program code tells the robot to move forward until it runs out of energy and until there is a wall on the left.

\`\`\`robo1
WHILE :ENERGY > 0 [
  WHILE :LEFT IS :WALL [
    FORWARD
  ]
  LEFT
  FORWARD
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
:::note[Tip]
Use these commands to create efficient and flexible code.
:::
`,s={title:"if-else"},a={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/en/lesson07.mdx",rawData:`
title: 'if-else'`};export{a as _internal,t as body,e as collection,s as data,n as id,o as slug};
