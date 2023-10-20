const n="en/reference/robo1-language.md",e="docs",s="en/reference/robo1-language",o=`
### Comments

\`\`\`robo1
# this is a single line comment

#[
   this is a multi-line comment,
   you can quickly toggle code inside by adding or removing "["
#]
\`\`\`

### Primitive Datatypes and Operators

\`\`\`robo1
# Numbers
10         # integer
10.2       # float
1_000_000  # with visual separators

# Strings
"This is a string"

# Arithmetic operations
1 + 2            # => 3
8 - 4            # => 4
5 * 2 + 2        # => 12
5 * (2 + 2)      # => 20, force precedence
9 / 2            # => 4.5
\`\`\`

### Variables

\`\`\`robo1
:a = 10
:b = 5
:sum = :a + :b   # :sum = 15
\`\`\`

### Collections

\`\`\`robo1
# "@" is a constructor operator

@[1, 2, 3, 4, 5]    # list
@["a" = 1, "b" = 2] # key value map
@(1, 2)             # tuple
@{1, 1, 2 ,2}       # set {1, 2}

# Iterating collection items with "for"
:sum = 0
for :x in @[1, 2, 3] [
  :sum = :sum + :x
]
print :sum          # => 6
\`\`\`

### Block Expressions and Functions

\`\`\`robo1
# Block expression can contain other expressions or statements
:x = [ 1 ]      # :x = 1

# Block expression's result is final expression in the block
:x = [          # :x = 3
  1 + 1
  1 + 2
]

# Function is just a block expression with a name
here PI [       # create a function
  3.14
]
:x = PI         # call a function and assign it's result to :x

# Functions with parameters
here sum :xs [
  :result = 0
  for :x in :xs [
    :result = :result + :x
  ]
]
print sum @[1, 2, 3]   # => 6, calling function with parameter
print @[1, 2, 3].sum   # => 6, using UFCS (https://en.wikipedia.org/wiki/Uniform_Function_Call_Syntax)

# No function chaining
here square :x [ :x * :x ]
here div :a :b [ :a / :b ]
print square (div (sum @[1, 2, 3]) 2) # => 9

# Chaining using UFCS
print @[1, 2, 3] .sum
                 .div 2
                 .square              # => 9

# Chaining using pipe operator
print @[1, 2, 3] |> sum
                 |> div 2
                 |> square            # => 9

# Passing function as parameter
here map :xs :fn [
  :result = @[]
  for :x in :xs [
    :result = :result + @[:fn.call :x]
  ]
]
print @[1, 2, 3].map &square            # => [1, 4, 9], "&" is address operator
print @[1, 2, 3].map \\:x => [ :x * :x ] # => [1, 4, 9], passing lambda expression
\`\`\`

### Comparison Operators

\`\`\`robo1
# There is no Boolean type, use 1 or 0.

# Equality
1 == 1        # => 1
1 == 2        # => 0

# Inequality
1 != 1        # => 0
1 != 2        # => 1

# Comparisons
1 <  1        # => 0
1 <= 1        # => 1
1 >  1        # => 0
1 >= 1        # => 1

# "or" result is first expression that evaluates to 1
0 or @[] or "last"            # => last
@[1, 2, 3] or 0 or "last"     # => @[1, 2, 3]

# "and" result is first expression that evaluates to 0 or the last expression
1 and @[1] and "last"         # => last
1 and @[]  and "last"         # => @[]
\`\`\`

### Control Flow

\`\`\`robo1
# if-else is expression too
:x = 10
print if :x > 0 [               # test expression
  "x is positive"               # then is block expression
]
else [                          # else is optional
  "x is not positive"
]

# use "when" for more than 2 branches
:x = 0
print when [
  :x > 0 [ "positive" ]
  :x < 0 [ "negative" ]
  else   [ "zero"  ]            # else is required
]

# you don't need ternary operator
print :x > 1 and @[1] or @[2]
\`\`\`

### Loops

\`\`\`robo1
:n = 2
repeat :n [             # repeat 2 times
  print "hello"
]

:n = 2
while :n > 0 [          # repeat until condition is not met
  print "hello" + :n
  :n = :n - 1
]
\`\`\`

### Robot Control

\`\`\`robo1
forward  <expression>  # default 1
backward <expression>  # default 1
right    <expression>  # default 90
left     <expression>  # default 90
stop
pendown
penup
color "red"
\`\`\`
`,t={title:"ROBO1 Programming Language",description:"ROBO1 Programming Language Reference",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0},r={type:"content",filePath:"/home/slicklash/code/robo1/src/content/docs/en/reference/robo1-language.md",rawData:`
title: ROBO1 Programming Language
description: ROBO1 Programming Language Reference`};export{r as _internal,o as body,e as collection,t as data,n as id,s as slug};
