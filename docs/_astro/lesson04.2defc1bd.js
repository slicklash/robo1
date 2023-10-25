const e="en/lesson04.mdx",n="lessons",o="en/lesson04",t=`import Scene from "../../../components/Game/components/ScenePlayer/Scene.tsx"

#### Lesson 4. Robot Repeats Commands

Familiarize yourself with the command **\`REPEAT X [<command sequence>]\`**. **\`X\`** is a number telling the robot how many times to repeat the sequence of commands.
Command sequence is enclosed in square brackets.

###### Example no. 1. Robot Moves in Circle
\`\`\`robo1
REPEAT 4 [
  FORWARD 2
  LEFT
]
\`\`\`
<Scene client:only="react" level="#zoom! 48; #size! 5 5; #start! 1 3" code="KARTOK 4 [ PIRMYN 2 KAIRĖN ]" penDown="true" />

###### Example no. 2. Robot Drives Away and Returns
\`\`\`robo1
REPEAT 2 [
  FORWARD 4
  RIGHT 180
]
\`\`\`
<Scene client:only="react" level="#zoom! 48; #size! 5 5; #start! 2 4; #angle! -90" code="KARTOK 2 [ PIRMYN 4 DEŠINĖN 180 ]" penDown="true" />

<br/>
:::note[Tip]
This command allows you to perform repetitive sequences of actions efficiently and avoid duplicating commands.
:::
`,s={title:"repeat"},a={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/en/lesson04.mdx",rawData:`
title: 'repeat'`};export{a as _internal,t as body,n as collection,s as data,e as id,o as slug};
