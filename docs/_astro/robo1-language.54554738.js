import{be as s,bf as n,bg as t,bi as r}from"./ScenePlayer.07d00563.js";import"./index.f1f2c4b1.js";import"./astro-assets-services.79a8b34c.js";import"./Scene_module.c9dcc3ae.81ba598e.js";const o=`<h3 id="komentarai">Komentarai</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-comment)"># tai vienos eilutės komentaras</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)">#[</span></span>
<span class="line"><span style="color:var(--astro-code-token-comment)">    tai kelių eilučių komentaras,</span></span>
<span class="line"><span style="color:var(--astro-code-token-comment)">    galit greitai perjungti kodą viduje parašius arba ištrynus „[“</span></span>
<span class="line"><span style="color:var(--astro-code-token-comment)">#]</span></span></code></pre>
<h3 id="paprasti-duomenų-tipai-ir-operatoriai">Paprasti duomenų tipai ir operatoriai</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-comment)"># Skaičiai</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">10</span><span style="color:var(--astro-code-token-comment)">         # sveikasis skaičius</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">10.2</span><span style="color:var(--astro-code-token-comment)">       # slankiojo kablelio skaičius</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1_000_000</span><span style="color:var(--astro-code-token-comment)">  # didelis skaičius su skirtukais</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Simbolių eilutės</span></span>
<span class="line"><span style="color:var(--astro-code-token-string-expression)">"Tai yra eilutė"</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Aritmetiniai veiksmai</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> + </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-token-comment)">            # => 3</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">8</span><span style="color:var(--astro-code-color-text)"> - </span><span style="color:var(--astro-code-token-constant)">4</span><span style="color:var(--astro-code-token-comment)">            # => 4</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">5</span><span style="color:var(--astro-code-color-text)"> * </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)"> + </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-token-comment)">        # => 12</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">5</span><span style="color:var(--astro-code-color-text)"> * (</span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)"> + </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">)      </span><span style="color:var(--astro-code-token-comment)"># => 20, pirmiausiai atliekami veiksmai skliaustuose</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">9</span><span style="color:var(--astro-code-color-text)"> / </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-token-comment)">            # => 4.5</span></span></code></pre>
<h3 id="kintamieji">Kintamieji</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-color-text)">:a = </span><span style="color:var(--astro-code-token-constant)">10</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:b = </span><span style="color:var(--astro-code-token-constant)">5</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:suma = :a + :b  </span><span style="color:var(--astro-code-token-comment)"># :suma = 15</span></span></code></pre>
<h3 id="struktūriniai-duomenų-tipai">Struktūriniai duomenų tipai</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-comment)"># „@“ yra konstruktoriaus operatorius</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-color-text)">@[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">4</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">5</span><span style="color:var(--astro-code-color-text)">]    </span><span style="color:var(--astro-code-token-comment)"># sąrašas</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">@[</span><span style="color:var(--astro-code-token-string-expression)">"a"</span><span style="color:var(--astro-code-color-text)"> = </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-string-expression)">"b"</span><span style="color:var(--astro-code-color-text)"> = </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">] </span><span style="color:var(--astro-code-token-comment)"># maišos lentelė</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">@(</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">)             </span><span style="color:var(--astro-code-token-comment)"># rinkinys</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">@{</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)"> ,</span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">}       </span><span style="color:var(--astro-code-token-comment)"># aibė {1, 2}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># elementų peržiūra naudojant "su(kiekvienu)" sakinį</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:suma = </span><span style="color:var(--astro-code-token-constant)">0</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">su</span><span style="color:var(--astro-code-color-text)"> :x </span><span style="color:var(--astro-code-token-keyword)">iš</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">] [</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  :suma = :suma + :x</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">rašyk</span><span style="color:var(--astro-code-color-text)"> :suma          </span><span style="color:var(--astro-code-token-comment)"># => 6</span></span></code></pre>
<h3 id="blokai-ir-funkcijos">Blokai ir funkcijos</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-comment)"># Blokas išraiška gali turėti kitų išraiškų ar sakinių</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:x = [ </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> ]      </span><span style="color:var(--astro-code-token-comment)"># :x = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Bloko rezultatas yra paskutinė išraiška bloke</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:x = [          </span><span style="color:var(--astro-code-token-comment)"># :x = 3</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">  1</span><span style="color:var(--astro-code-color-text)"> + </span><span style="color:var(--astro-code-token-constant)">1</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">  1</span><span style="color:var(--astro-code-color-text)"> + </span><span style="color:var(--astro-code-token-constant)">2</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Funkcija yra blokas su pavadinimu</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">tai</span><span style="color:var(--astro-code-color-text)"> PI [        </span><span style="color:var(--astro-code-token-comment)"># naujos funkcijos kūrimas</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">  3.14</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:x = PI         </span><span style="color:var(--astro-code-token-comment)"># iškviečiam funkciją ir priskiriam jos rezultatą :x</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Funkcija su parametrais</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">tai</span><span style="color:var(--astro-code-color-text)"> suma :xs [</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  :rezultatas = </span><span style="color:var(--astro-code-token-constant)">0</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">  su</span><span style="color:var(--astro-code-color-text)"> :x </span><span style="color:var(--astro-code-token-keyword)">iš</span><span style="color:var(--astro-code-color-text)"> :xs [</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">    :rezultatas = :rezultatas + :x</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  ]</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">rašyk</span><span style="color:var(--astro-code-color-text)"> suma @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">]   </span><span style="color:var(--astro-code-token-comment)"># => 6, kviečiam funkciją su parametru</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">rašyk</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">].suma   </span><span style="color:var(--astro-code-token-comment)"># => 6, naudojant UFCS (https://en.wikipedia.org/wiki/Uniform_Function_Call_Syntax)</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Paprastas funkcijų iškvietimas</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">tai</span><span style="color:var(--astro-code-color-text)"> kelk_kvadratu :x [ :x * :x ]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">tai</span><span style="color:var(--astro-code-color-text)"> dalink_iš :a :b [ :a / :b ]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">rašyk</span><span style="color:var(--astro-code-color-text)"> kelk_kvadratu (dalink_iš (suma @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">]) </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">)  </span><span style="color:var(--astro-code-token-comment)"># => 9</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Funkcijų grandinė naudojant UFCS</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">rašyk</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">] .suma</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">                 .dalink_iš </span><span style="color:var(--astro-code-token-constant)">2</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">                 .kelk_kvadratu                      </span><span style="color:var(--astro-code-token-comment)"># => 9</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Funkcijų grandinė naudojant srauto operatorių</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">rašyk</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">] |> suma</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">                 |> dalink_iš </span><span style="color:var(--astro-code-token-constant)">2</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">                 |> kelk_kvadratu                    </span><span style="color:var(--astro-code-token-comment)"># => 9</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Funkcija kaip parametras</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">tai</span><span style="color:var(--astro-code-color-text)"> taikyk :xs :fn [</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  :rezultatas = @[]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">  su</span><span style="color:var(--astro-code-color-text)"> :x </span><span style="color:var(--astro-code-token-keyword)">iš</span><span style="color:var(--astro-code-color-text)"> :xs [</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">    :rezultatas = :rezultatas + @[:fn</span><span style="color:var(--astro-code-token-constant)">.</span><span style="color:var(--astro-code-color-text)">kviesk :x]</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  ]</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">rašyk</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">].taikyk &#x26;kelk_kvadratu         </span><span style="color:var(--astro-code-token-comment)"># => [1, 4, 9], "&#x26;" yra adreso operatorius</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">rašyk</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">].taikyk \\:x => [ :x * :x ]     </span><span style="color:var(--astro-code-token-comment)"># => [1, 4, 9], naudojant lambda išraišką</span></span></code></pre>
<h3 id="palyginimo-operatoriai">Palyginimo operatoriai</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-comment)"># Būlio tipo nėra, naudok 1 ir 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Lygybė</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> == </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-comment)">        # => 1</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> == </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-token-comment)">        # => 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Nelygybė</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> != </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-comment)">        # => 0</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> != </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-token-comment)">        # => 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Palyginimai</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> &#x3C;  </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-comment)">        # => 0</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> &#x3C;= </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-comment)">        # => 1</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> >  </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-comment)">        # => 0</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> >= </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-comment)">        # => 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># "arba" rezultatas yra pirmoji išraiška, kuri įvertinama kaip 1</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">0</span><span style="color:var(--astro-code-token-keyword)"> arba</span><span style="color:var(--astro-code-color-text)"> @[] </span><span style="color:var(--astro-code-token-keyword)">arba</span><span style="color:var(--astro-code-token-string-expression)"> "paskutinė"</span><span style="color:var(--astro-code-token-comment)">            # => paskutinė</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">@[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">] </span><span style="color:var(--astro-code-token-keyword)">arba</span><span style="color:var(--astro-code-token-constant)"> 0</span><span style="color:var(--astro-code-token-keyword)"> arba</span><span style="color:var(--astro-code-token-string-expression)"> "paskutinė"</span><span style="color:var(--astro-code-token-comment)">     # => @[1, 2, 3]</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># "ir" rezultatas yra pirmoji išraiška, kuri įvertinama kaip 0 arba paskutinė išraiška</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-keyword)"> ir</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">] </span><span style="color:var(--astro-code-token-keyword)">ir</span><span style="color:var(--astro-code-token-string-expression)"> "paskutinė"</span><span style="color:var(--astro-code-token-comment)">               # => paskutinė</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-keyword)"> ir</span><span style="color:var(--astro-code-color-text)"> @[]  </span><span style="color:var(--astro-code-token-keyword)">ir</span><span style="color:var(--astro-code-token-string-expression)"> "paskutinė"</span><span style="color:var(--astro-code-token-comment)">               # => @[]</span></span></code></pre>
<h3 id="sąlygos-sakiniai">Sąlygos sakiniai</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-comment)"># "jeigu – kitu atveju" sakinys taip pat yra išraiška</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:x = </span><span style="color:var(--astro-code-token-constant)">10</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">rašyk</span><span style="color:var(--astro-code-token-keyword)"> jeigu</span><span style="color:var(--astro-code-color-text)"> :x > </span><span style="color:var(--astro-code-token-constant)">0</span><span style="color:var(--astro-code-color-text)"> [            </span><span style="color:var(--astro-code-token-comment)"># sąlygos išraiška</span></span>
<span class="line"><span style="color:var(--astro-code-token-string-expression)">  "x yra teigiamas"</span><span style="color:var(--astro-code-token-comment)">             # "tada" yra blokinė išraiška</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">kitu atveju</span><span style="color:var(--astro-code-color-text)"> [                   </span><span style="color:var(--astro-code-token-comment)"># "kitu atveju" yra neprivalomas</span></span>
<span class="line"><span style="color:var(--astro-code-token-string-expression)">  "x yra neigiamas"</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># naudok „kai“ jeigu yra daugiau nei 2 šakos</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:x = </span><span style="color:var(--astro-code-token-constant)">0</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">rašyk</span><span style="color:var(--astro-code-token-keyword)"> kai</span><span style="color:var(--astro-code-color-text)"> [</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  :x > </span><span style="color:var(--astro-code-token-constant)">0</span><span style="color:var(--astro-code-color-text)">      [ </span><span style="color:var(--astro-code-token-string-expression)">"teigiamas"</span><span style="color:var(--astro-code-color-text)"> ]</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  :x &#x3C; </span><span style="color:var(--astro-code-token-constant)">0</span><span style="color:var(--astro-code-color-text)">      [ </span><span style="color:var(--astro-code-token-string-expression)">"neigiamas"</span><span style="color:var(--astro-code-color-text)"> ]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">  kitu atveju</span><span style="color:var(--astro-code-color-text)"> [ </span><span style="color:var(--astro-code-token-string-expression)">"nulis"</span><span style="color:var(--astro-code-color-text)"> ]       </span><span style="color:var(--astro-code-token-comment)"># "kitu atveju" yra privalomas</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># ternarinis operatorius nereikalingas</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">rašyk</span><span style="color:var(--astro-code-color-text)"> :x > </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-keyword)"> ir</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">] </span><span style="color:var(--astro-code-token-keyword)">arba</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">]</span></span></code></pre>
<h3 id="ciklai">Ciklai</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-color-text)">:n = </span><span style="color:var(--astro-code-token-constant)">2</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">kartok</span><span style="color:var(--astro-code-color-text)"> :n [           </span><span style="color:var(--astro-code-token-comment)"># pakartok 2 kartus</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">  rašyk</span><span style="color:var(--astro-code-token-string-expression)"> "labas"</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:n = </span><span style="color:var(--astro-code-token-constant)">2</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">kol</span><span style="color:var(--astro-code-color-text)"> :n > </span><span style="color:var(--astro-code-token-constant)">0</span><span style="color:var(--astro-code-color-text)"> [          </span><span style="color:var(--astro-code-token-comment)"># kartok kol tenkinama sąlyga</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">  rašyk</span><span style="color:var(--astro-code-token-string-expression)"> "labas"</span><span style="color:var(--astro-code-color-text)"> + :n</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  :n = :n - </span><span style="color:var(--astro-code-token-constant)">1</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span></code></pre>
<h3 id="roboto-valdymas">Roboto valdymas</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-keyword)">pirmyn</span><span style="color:var(--astro-code-color-text)">  &#x3C;išraiška>  </span><span style="color:var(--astro-code-token-comment)"># numatytoji reikšmė yra 1</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">atgal</span><span style="color:var(--astro-code-color-text)">   &#x3C;išraiška>  </span><span style="color:var(--astro-code-token-comment)"># numatytoji reikšmė yra 1</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">dešinėn</span><span style="color:var(--astro-code-color-text)"> &#x3C;išraiška>  </span><span style="color:var(--astro-code-token-comment)"># numatytoji reikšmė yra 90</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">kairėn</span><span style="color:var(--astro-code-color-text)">  &#x3C;išraiška>  </span><span style="color:var(--astro-code-token-comment)"># numatytoji reikšmė yra 90</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">stok</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">piešk</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">nepiešk</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">spalva</span><span style="color:var(--astro-code-token-string-expression)"> "#ff0000"</span></span></code></pre>`,e={title:"ROBO1 programavimo kalba",description:"ROBO1 programavimo kalba"},l="/home/slicklash/code/robo1/src/content/docs/reference/robo1-language.md",c=void 0;function x(){return`
### Komentarai

\`\`\`robo1
# tai vienos eilutės komentaras

#[
    tai kelių eilučių komentaras,
    galit greitai perjungti kodą viduje parašius arba ištrynus „[“
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
# Blokas išraiška gali turėti kitų išraiškų ar sakinių
:x = [ 1 ]      # :x = 1

# Bloko rezultatas yra paskutinė išraiška bloke
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
`}function b(){return o}function g(){return[{depth:3,slug:"komentarai",text:"Komentarai"},{depth:3,slug:"paprasti-duomenų-tipai-ir-operatoriai",text:"Paprasti duomenų tipai ir operatoriai"},{depth:3,slug:"kintamieji",text:"Kintamieji"},{depth:3,slug:"struktūriniai-duomenų-tipai",text:"Struktūriniai duomenų tipai"},{depth:3,slug:"blokai-ir-funkcijos",text:"Blokai ir funkcijos"},{depth:3,slug:"palyginimo-operatoriai",text:"Palyginimo operatoriai"},{depth:3,slug:"sąlygos-sakiniai",text:"Sąlygos sakiniai"},{depth:3,slug:"ciklai",text:"Ciklai"},{depth:3,slug:"roboto-valdymas",text:"Roboto valdymas"}]}const j=s((p,i,k)=>{const{layout:d,...a}=e;return a.file=l,a.url=c,n`${t()}${r(o)}`});export{j as Content,b as compiledContent,j as default,l as file,e as frontmatter,g as getHeadings,x as rawContent,c as url};
