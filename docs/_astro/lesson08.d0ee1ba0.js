const n="en/lesson08.mdx",t="lessons",e="en/lesson08",o=`#### Lesson 8. The Maze

The robot found itself in a maze. In this lesson you will teach the robot how to escape from it.
It's not difficult at all if you know the **One Hand Rule.** It's like this - put one hand to the wall of the maze and don't take it away.
If you walk along the wall without taking your hand away you will surely find a way out!

The **One Hand Rule** can be written like this:
\`\`\`robo1
WHILE :ENERGY > 0 [
   WHEN [
     CAN_GO_FORWARD [ FORWARD ]
     CAN_GO_RIGHT [ RIGHT FORWARD ]
     ELSE [ LEFT ]
  ]
]
\`\`\`
However, you will need to create two new commands **\`CAN_GO_FORWARD\`** and **\`CAN_GO_RIGHT\`** yourself. Good luck!

<br/>
:::note[Tip]
If you can't get out of the maze try to switch hands.
:::
`,a={title:"maze"},l={type:"content",filePath:"/home/slicklash/code/robo1/src/content/lessons/en/lesson08.mdx",rawData:`
title: 'maze'`};export{l as _internal,o as body,t as collection,a as data,n as id,e as slug};
