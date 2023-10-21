const a="reference/robo1-language.md",n="docs",i="reference/robo1-language",r=`
### Komentarai

\`\`\`robo1
# tai vienos eilutės komentaras

#[
    tai kelių eilučių komentaras,
    gali greitai perjungti kodą viduje parašius arba ištrynus „[“
#]
\`\`\`

### Paprasti duomenų tipai ir operatoriai

\`\`\`robo1
# Skaičiai
10         # sveikasis skaičius
10.2       # slankiojo kablelio skaičius
1_000_000  # didelis skaičius su skirtukais

# Simbolių eilutės
"Tai yra eilutė"

# Aritmetiniai veiksmai
1 + 2            # => 3
8 - 4            # => 4
5 * 2 + 2        # => 12
5 * (2 + 2)      # => 20, pirmiausiai atliekami veiksmai skliaustuose
9 / 2            # => 4.5
\`\`\`

### Kintamieji

\`\`\`robo1
:a = 10
:b = 5
:suma = :a + :b  # :suma = 15
\`\`\`

### Struktūriniai duomenų tipai

\`\`\`robo1
# „@“ yra konstruktoriaus operatorius

@[1, 2, 3, 4, 5]    # sąrašas
@["a" = 1, "b" = 2] # maišos lentelė
@(1, 2)             # rinkinys
@{1, 1, 2 ,2}       # aibė {1, 2}

# elementų peržiūra naudojant "su(kiekvienu)" sakinį
:suma = 0
su :x iš @[1, 2, 3] [
  :suma = :suma + :x
]
rašyk :suma          # => 6
\`\`\`

### Blokai ir funkcijos

\`\`\`robo1
# Blokas yra išraiška turinti kitų išraiškų ar sakinių
:x = [ 1 ]      # :x = 1

# Bloko rezultatas yra paskutinės išraiškos reikšmė
:x = [          # :x = 3
  1 + 1
  1 + 2
]

# Funkcija yra blokas su pavadinimu
tai PI [        # naujos funkcijos kūrimas
  3.14
]
:x = PI         # iškviečiam funkciją ir priskiriam jos rezultatą :x

# Funkcija su parametrais
tai suma :xs [
  :rezultatas = 0
  su :x iš :xs [
    :rezultatas = :rezultatas + :x
  ]
]
rašyk suma @[1, 2, 3]   # => 6, kviečiam funkciją su parametru
rašyk @[1, 2, 3].suma   # => 6, naudojant UFCS (https://en.wikipedia.org/wiki/Uniform_Function_Call_Syntax)

# Paprastas funkcijų iškvietimas
tai kelk_kvadratu :x [ :x * :x ]
tai dalink_iš :a :b [ :a / :b ]
rašyk kelk_kvadratu (dalink_iš (suma @[1, 2, 3]) 2)  # => 9

# Funkcijų grandinė naudojant UFCS
rašyk @[1, 2, 3] .suma
                 .dalink_iš 2
                 .kelk_kvadratu                      # => 9

# Funkcijų grandinė naudojant srauto operatorių
rašyk @[1, 2, 3] |> suma
                 |> dalink_iš 2
                 |> kelk_kvadratu                    # => 9

# Funkcija kaip parametras
tai taikyk :xs :fn [
  :rezultatas = @[]
  su :x iš :xs [
    :rezultatas = :rezultatas + @[:fn.kviesk :x]
  ]
]
rašyk @[1, 2, 3].taikyk &kelk_kvadratu         # => [1, 4, 9], "&" yra adreso operatorius
rašyk @[1, 2, 3].taikyk \\:x => [ :x * :x ]     # => [1, 4, 9], naudojant lambda išraišką
\`\`\`

### Palyginimo operatoriai

\`\`\`robo1
# Būlio tipo nėra, naudok 1 ir 0

# Lygybė
1 == 1        # => 1
1 == 2        # => 0

# Nelygybė
1 != 1        # => 0
1 != 2        # => 1

# Palyginimai
1 <  1        # => 0
1 <= 1        # => 1
1 >  1        # => 0
1 >= 1        # => 1

# "arba" rezultatas yra pirmoji išraiška, kuri įvertinama kaip 1
0 arba @[] arba "paskutinė"            # => paskutinė
@[1, 2, 3] arba 0 arba "paskutinė"     # => @[1, 2, 3]

# "ir" rezultatas yra pirmoji išraiška, kuri įvertinama kaip 0 arba paskutinė išraiška
1 ir @[1] ir "paskutinė"               # => paskutinė
1 ir @[]  ir "paskutinė"               # => @[]
\`\`\`

### Sąlygos sakiniai

\`\`\`robo1
# "jeigu – kitu atveju" sakinys taip pat yra išraiška
:x = 10
rašyk jeigu :x > 0 [            # sąlygos išraiška
  "x yra teigiamas"             # "tada" yra blokinė išraiška
]
kitu atveju [                   # "kitu atveju" yra neprivalomas
  "x yra neigiamas"
]

# naudok „kai“ jeigu yra daugiau nei 2 šakos
:x = 0
rašyk kai [
  :x > 0      [ "teigiamas" ]
  :x < 0      [ "neigiamas" ]
  kitu atveju [ "nulis" ]       # "kitu atveju" yra privalomas
]

# ternarinis operatorius nereikalingas
rašyk :x > 1 ir @[1] arba @[2]
\`\`\`

### Ciklai

\`\`\`robo1
:n = 2
kartok :n [           # pakartok 2 kartus
  rašyk "labas"
]

:n = 2
kol :n > 0 [          # kartok kol tenkinama sąlyga
  rašyk "labas" + :n
  :n = :n - 1
]
\`\`\`

### Roboto valdymas

\`\`\`robo1
pirmyn  <išraiška>  # numatytoji reikšmė yra 1
atgal   <išraiška>  # numatytoji reikšmė yra 1
dešinėn <išraiška>  # numatytoji reikšmė yra 90
kairėn  <išraiška>  # numatytoji reikšmė yra 90
stok
piešk
nepiešk
spalva "#ff0000"
\`\`\`
`,t={title:"ROBO1 programavimo kalba",description:"ROBO1 programavimo kalba",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0},k={type:"content",filePath:"/home/slicklash/code/robo1/src/content/docs/reference/robo1-language.md",rawData:`
title: ROBO1 programavimo kalba
description: ROBO1 programavimo kalba`};export{k as _internal,r as body,n as collection,t as data,a as id,i as slug};
