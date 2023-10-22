const o="en/lesson01.mdx",e="lessons",n="en/lesson01",t=`import Scene from "../../../components/Game/components/ScenePlayer/Scene.tsx"

#### Lesson 1. Robot Moves Back and Forth

The first command you will learn is **\`FORWARD\`**. It tells the robot to move forward.
You can also specify how many cells the robot should move.
For example, type **\`FORWARD 3\`** and your robot will move forward three cells.
Sometimes you may have to go back. The **\`BACKWARD\`** command is for moving backwards.
For example, type **\`BACKWARD 2\`** and your robot will go back two cells.

###### Example No. 1
\`\`\`robo1
FORWARD 3
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 2 4; #angle! -90" code="PIRMYN 3" penDown="true" />

###### Example No. 2
\`\`\`robo1
BACKWARD 2
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 2 0; #angle! -90;" code="ATGAL 2" penDown="true" />

Click "Solve" and try these commands!
`,l={title:"forward"},s={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/en/lesson01.mdx",rawData:`
title: 'forward'`};export{s as _internal,t as body,e as collection,l as data,o as id,n as slug};
