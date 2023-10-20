const n="en/lesson02.mdx",e="lessons",o="en/lesson02",t=`import Scene from "../../../components/Game/components/ScenePlayer/Scene.tsx"

#### Lesson 2. Robot Knows How to Turn

Now you will learn to turn the robot left and right. **\`LEFT\`** and **\`RIGHT\`** commands are used for this.
You can also specify the angle at which the robot should turn. For example, **\`LEFT 180\`**. Available angles: 90, 180, 270.

###### Example no. 1
\`\`\`robo1
FORWARD 3
RIGHT
FORWARD
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 2 4; #angle! -90;" code="PIRMYN 3 DEŠINĖN PIRMYN" penDown="true" />

###### Example no. 2
\`\`\`robo1
FORWARD
RIGHT
FORWARD
LEFT 180
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 1 3; #angle! -90;" code="PIRMYN DEŠINĖN PIRMYN KAIRĖN 180" penDown="true" />

Time to try the new commands!
`,s={title:"turn"},l={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/en/lesson02.mdx",rawData:`
title: 'turn'`};export{l as _internal,t as body,e as collection,s as data,n as id,o as slug};
