const e="en/lesson06.mdx",n="lessons",o="en/lesson06",t=`import Scene from "../../../components/Game/components/ScenePlayer/Scene.tsx"

#### Lesson 6. Robot Memory and Sensors

##### Memory

The robot has a memory that is like a chest of drawers. Drawers can store information.
To save specific data, you first need to name the drawer and then put the information in it. For example:

\`\`\`robo1
:year = 2023
:color = "yellow"
\`\`\`

The name of the drawer is the address of the information. It is written as **\`:<name>\`**

In the third lesson, you learned that a robot is powered by energy. Anytime after checking the address **\`:ENERGY\`**,
you will see how much energy the robot has left.

##### Sensors

Also, the robot has special sensors, similar to eyes, located on the front, back, left and right.
Using sensors, the robot is able to recognize objects.
Sensor data is stored in the following addresses: **\`:FRONT\`**, **\`:BACK\`**, **\`:LEFT\`** and **\`:RIGHT\`**.

The codes of the objects recognized by the robot are stored in the following addresses:

\`\`\`robo1
:EMPTY = 0
:WALL = 1
:STAR = 2
:CHARGER = 3
\`\`\`

###### Example no. 1. On The Right is a Star
The object **\`:STAR\`** will be written in the robot's memory with the address **\`:RIGHT\`**
\`\`\`robo1
:RIGHT = :STAR
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 2 2; #angle! -90; #star! 3 2" code="" penDown="true" />

###### Example no. 2. Charger in The Front
The object **\`:CHARGER\`** will be written in the robot's memory with the address **\`:FRONT\`**
\`\`\`robo1
:FRONT = :CHARGER
\`\`\`
<Scene client:only level="#zoom! 48; #size! 5 5; #start! 2 2; #angle! -90; #charger! 2 1" code="" penDown="true" />

**Note.** The charger increases the energy level of the robot by 10 units.
`,s={title:"charge"},r={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/en/lesson06.mdx",rawData:`
title: 'charge'`};export{r as _internal,t as body,n as collection,s as data,e as id,o as slug};
