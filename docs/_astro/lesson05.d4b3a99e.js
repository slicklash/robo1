const e="en/lesson05.mdx",n="lessons",o="en/lesson05",a=`import Scene from "../../../components/Game/components/ScenePlayer/Scene.tsx"

#### Lesson 5. Create New Commands

Instead of long sequences of commands, new commands can be created to make programming easier.
To create a new command, use the following syntax: **\`HERE <new_command_name> [<command sequence>]\`**.

Also, a new command can be enhanced by adding **parameters** - freely variable values.
The parameters allow you to adapt to different situations.
For example, the **\`FORWARD\`** command parameter specifies how many times the robot should move forward.

To create a new command with a parameter, use the following syntax: **\`HERE <new_command_name> :<parameter1_name> :<parameter2_name> etc. [<command sequence>]\`**.

###### Example No. 1. New Command CLIMB
\`\`\`robo1
HERE CLIMB [
  FORWARD
  RIGHT
  FORWARD
  LEFT
]
REPEAT 4 [ CLIMB ]
\`\`\`
<Scene client:only="react" level="#zoom! 48; #size! 5 5; #start! 0 4; #angle! -90; #wall! 1 4, 2 3, 3 2, 4 1" code="TAI LIPK [ PIRMYN DEŠINĖN PIRMYN KAIRĖN ] KARTOK 4 [ LIPK ]" penDown="true" />

###### Example No. 2. New Command CLIMB With Parameter
\`\`\`robo1
HERE CLIMB :count [
  REPEAT :count [
    FORWARD
    RIGHT
    FORWARD
    LEFT
  ]
]
CLIMB 4
\`\`\`
<Scene client:only="react" level="#zoom! 48; #size! 5 5; #start! 0 4; #angle! -90; #wall! 1 4, 2 3, 3 2, 4 1" code="TAI LIPK :n_kartų [ KARTOK :n_kartų [ PIRMYN DEŠINĖN PIRMYN KAIRĖN ] ] LIPK 4" penDown="true" />

<br/>
:::note[Tip]
Creating new commands reduces repetition and make the program code clearer. This is in accordance with one of the programming principles **"Don't Repeat Yourself" (DRY)**.
:::
`,t={title:"custom-commands"},m={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/en/lesson05.mdx",rawData:`
title: 'custom-commands'`};export{m as _internal,a as body,n as collection,t as data,e as id,o as slug};
