const e="en/lesson03.mdx",n="lessons",o="en/lesson03",t=`import Scene from "../../../components/Game/components/ScenePlayer/Scene.tsx"
import Status from "../../../components/Game/components/ScenePlayer/Status.tsx"

#### Lesson 3. Robot Is Powered by Energy

Every action of the robot consumes energy. When the robot runs out of energy, it stops.

**Note.** The energy level of the robot depends on the game level.

###### Example No. 1. Robot Stopped
\`\`\`robo1
FORWARD 3
RIGHT
FORWARD
RIGHT
FORWARD
\`\`\`
<Status startEnergy={5} currentEnergy={0} />
<Scene client:only="react" level="#zoom! 48; #size! 5 5; #start! 2 4; #angle! -90; #star! 3 3" code="PIRMYN 3 DEŠINĖN PIRMYN DEŠINĖN PIRMYN" penDown="true" />

###### Example No. 2. Well Done
\`\`\`robo1
FORWARD
RIGHT
FORWARD
\`\`\`
<Status startEnergy={5} currentEnergy={3} />
<Scene client:only="react" level="#zoom! 48; #size! 5 5; #start! 2 4; #angle! -90; #star! 3 3" code="PIRMYN DEŠINĖN PIRMYN" penDown="true" />

<br/>
:::note[Tip]
Use commands wisely!
:::
`,s={title:"energy"},r={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/en/lesson03.mdx",rawData:`
title: 'energy'`};export{r as _internal,t as body,n as collection,s as data,e as id,o as slug};
