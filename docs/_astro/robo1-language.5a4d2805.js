import{bf as n,bg as a,bh as t,bj as e}from"./ScenePlayer.ff216a0d.js";import"./index.f1f2c4b1.js";import"./astro-assets-services.f240e78b.js";import"./Scene_module.c9dcc3ae.81ba598e.js";const s=`<h3 id="comments">Comments</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-comment)"># this is a single line comment</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)">#[</span></span>
<span class="line"><span style="color:var(--astro-code-token-comment)">   this is a multi-line comment,</span></span>
<span class="line"><span style="color:var(--astro-code-token-comment)">   you can quickly toggle code inside by adding or removing "["</span></span>
<span class="line"><span style="color:var(--astro-code-token-comment)">#]</span></span></code></pre>
<h3 id="primitive-datatypes-and-operators">Primitive Datatypes and Operators</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-comment)"># Numbers</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">10</span><span style="color:var(--astro-code-token-comment)">         # integer</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">10.2</span><span style="color:var(--astro-code-token-comment)">       # float</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1_000_000</span><span style="color:var(--astro-code-token-comment)">  # with visual separators</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Strings</span></span>
<span class="line"><span style="color:var(--astro-code-token-string-expression)">"This is a string"</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Arithmetic operations</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> + </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-token-comment)">            # => 3</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">8</span><span style="color:var(--astro-code-color-text)"> - </span><span style="color:var(--astro-code-token-constant)">4</span><span style="color:var(--astro-code-token-comment)">            # => 4</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">5</span><span style="color:var(--astro-code-color-text)"> * </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)"> + </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-token-comment)">        # => 12</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">5</span><span style="color:var(--astro-code-color-text)"> * (</span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)"> + </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">)      </span><span style="color:var(--astro-code-token-comment)"># => 20, force precedence</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">9</span><span style="color:var(--astro-code-color-text)"> / </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-token-comment)">            # => 4.5</span></span></code></pre>
<h3 id="variables">Variables</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-color-text)">:a = </span><span style="color:var(--astro-code-token-constant)">10</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:b = </span><span style="color:var(--astro-code-token-constant)">5</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:sum = :a + :b   </span><span style="color:var(--astro-code-token-comment)"># :sum = 15</span></span></code></pre>
<h3 id="collections">Collections</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-comment)"># "@" is a constructor operator</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-color-text)">@[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">4</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">5</span><span style="color:var(--astro-code-color-text)">]    </span><span style="color:var(--astro-code-token-comment)"># list</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">@[</span><span style="color:var(--astro-code-token-string-expression)">"a"</span><span style="color:var(--astro-code-color-text)"> = </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-string-expression)">"b"</span><span style="color:var(--astro-code-color-text)"> = </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">] </span><span style="color:var(--astro-code-token-comment)"># key value map</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">@(</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">)             </span><span style="color:var(--astro-code-token-comment)"># tuple</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">@{</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)"> ,</span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">}       </span><span style="color:var(--astro-code-token-comment)"># set {1, 2}</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Iterating collection items with "for"</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:sum = </span><span style="color:var(--astro-code-token-constant)">0</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">for</span><span style="color:var(--astro-code-color-text)"> :x </span><span style="color:var(--astro-code-token-keyword)">in</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">] [</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  :sum = :sum + :x</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">print</span><span style="color:var(--astro-code-color-text)"> :sum          </span><span style="color:var(--astro-code-token-comment)"># => 6</span></span></code></pre>
<h3 id="block-expressions-and-functions">Block Expressions and Functions</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-comment)"># Block expression can contain other expressions or statements</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:x = [ </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> ]      </span><span style="color:var(--astro-code-token-comment)"># :x = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Block expression's result is final expression in the block</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:x = [          </span><span style="color:var(--astro-code-token-comment)"># :x = 3</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">  1</span><span style="color:var(--astro-code-color-text)"> + </span><span style="color:var(--astro-code-token-constant)">1</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">  1</span><span style="color:var(--astro-code-color-text)"> + </span><span style="color:var(--astro-code-token-constant)">2</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Function is just a block expression with a name</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">here</span><span style="color:var(--astro-code-color-text)"> PI [       </span><span style="color:var(--astro-code-token-comment)"># create a function</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">  3.14</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:x = PI         </span><span style="color:var(--astro-code-token-comment)"># call a function and assign it's result to :x</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Functions with parameters</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">here</span><span style="color:var(--astro-code-color-text)"> sum :xs [</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  :result = </span><span style="color:var(--astro-code-token-constant)">0</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">  for</span><span style="color:var(--astro-code-color-text)"> :x </span><span style="color:var(--astro-code-token-keyword)">in</span><span style="color:var(--astro-code-color-text)"> :xs [</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">    :result = :result + :x</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  ]</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">print</span><span style="color:var(--astro-code-color-text)"> sum @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">]   </span><span style="color:var(--astro-code-token-comment)"># => 6, calling function with parameter</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">print</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">].sum   </span><span style="color:var(--astro-code-token-comment)"># => 6, using UFCS (https://en.wikipedia.org/wiki/Uniform_Function_Call_Syntax)</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># No function chaining</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">here</span><span style="color:var(--astro-code-color-text)"> square :x [ :x * :x ]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">here</span><span style="color:var(--astro-code-color-text)"> div :a :b [ :a / :b ]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">print</span><span style="color:var(--astro-code-color-text)"> square (div (sum @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">]) </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">) </span><span style="color:var(--astro-code-token-comment)"># => 9</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Chaining using UFCS</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">print</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">] .sum</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">                 .div </span><span style="color:var(--astro-code-token-constant)">2</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">                 .square              </span><span style="color:var(--astro-code-token-comment)"># => 9</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Chaining using pipe operator</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">print</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">] |> sum</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">                 |> div </span><span style="color:var(--astro-code-token-constant)">2</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">                 |> square            </span><span style="color:var(--astro-code-token-comment)"># => 9</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Passing function as parameter</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">here</span><span style="color:var(--astro-code-color-text)"> map :xs :fn [</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  :result = @[]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">  for</span><span style="color:var(--astro-code-color-text)"> :x </span><span style="color:var(--astro-code-token-keyword)">in</span><span style="color:var(--astro-code-color-text)"> :xs [</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">    :result = :result + @[:fn</span><span style="color:var(--astro-code-token-constant)">.</span><span style="color:var(--astro-code-color-text)">call :x]</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  ]</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">print</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">].map &#x26;square            </span><span style="color:var(--astro-code-token-comment)"># => [1, 4, 9], "&#x26;" is address operator</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">print</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">].map \\:x => [ :x * :x ] </span><span style="color:var(--astro-code-token-comment)"># => [1, 4, 9], passing lambda expression</span></span></code></pre>
<h3 id="comparison-operators">Comparison Operators</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-comment)"># There is no Boolean type, use 1 or 0.</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Equality</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> == </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-comment)">        # => 1</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> == </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-token-comment)">        # => 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Inequality</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> != </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-comment)">        # => 0</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> != </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-token-comment)">        # => 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># Comparisons</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> &#x3C;  </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-comment)">        # => 0</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> &#x3C;= </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-comment)">        # => 1</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> >  </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-comment)">        # => 0</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)"> >= </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-comment)">        # => 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># "or" result is first expression that evaluates to 1</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">0</span><span style="color:var(--astro-code-token-keyword)"> or</span><span style="color:var(--astro-code-color-text)"> @[] </span><span style="color:var(--astro-code-token-keyword)">or</span><span style="color:var(--astro-code-token-string-expression)"> "last"</span><span style="color:var(--astro-code-token-comment)">            # => last</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">@[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">, </span><span style="color:var(--astro-code-token-constant)">3</span><span style="color:var(--astro-code-color-text)">] </span><span style="color:var(--astro-code-token-keyword)">or</span><span style="color:var(--astro-code-token-constant)"> 0</span><span style="color:var(--astro-code-token-keyword)"> or</span><span style="color:var(--astro-code-token-string-expression)"> "last"</span><span style="color:var(--astro-code-token-comment)">     # => @[1, 2, 3]</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># "and" result is first expression that evaluates to 0 or the last expression</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-keyword)"> and</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">] </span><span style="color:var(--astro-code-token-keyword)">and</span><span style="color:var(--astro-code-token-string-expression)"> "last"</span><span style="color:var(--astro-code-token-comment)">         # => last</span></span>
<span class="line"><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-keyword)"> and</span><span style="color:var(--astro-code-color-text)"> @[]  </span><span style="color:var(--astro-code-token-keyword)">and</span><span style="color:var(--astro-code-token-string-expression)"> "last"</span><span style="color:var(--astro-code-token-comment)">         # => @[]</span></span></code></pre>
<h3 id="control-flow">Control Flow</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-comment)"># if-else is expression too</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:x = </span><span style="color:var(--astro-code-token-constant)">10</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">print</span><span style="color:var(--astro-code-token-keyword)"> if</span><span style="color:var(--astro-code-color-text)"> :x > </span><span style="color:var(--astro-code-token-constant)">0</span><span style="color:var(--astro-code-color-text)"> [               </span><span style="color:var(--astro-code-token-comment)"># test expression</span></span>
<span class="line"><span style="color:var(--astro-code-token-string-expression)">  "x is positive"</span><span style="color:var(--astro-code-token-comment)">               # then is block expression</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">else</span><span style="color:var(--astro-code-color-text)"> [                          </span><span style="color:var(--astro-code-token-comment)"># else is optional</span></span>
<span class="line"><span style="color:var(--astro-code-token-string-expression)">  "x is not positive"</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># use "when" for more than 2 branches</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:x = </span><span style="color:var(--astro-code-token-constant)">0</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">print</span><span style="color:var(--astro-code-token-keyword)"> when</span><span style="color:var(--astro-code-color-text)"> [</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  :x > </span><span style="color:var(--astro-code-token-constant)">0</span><span style="color:var(--astro-code-color-text)"> [ </span><span style="color:var(--astro-code-token-string-expression)">"positive"</span><span style="color:var(--astro-code-color-text)"> ]</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  :x &#x3C; </span><span style="color:var(--astro-code-token-constant)">0</span><span style="color:var(--astro-code-color-text)"> [ </span><span style="color:var(--astro-code-token-string-expression)">"negative"</span><span style="color:var(--astro-code-color-text)"> ]</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">  else</span><span style="color:var(--astro-code-color-text)">   [ </span><span style="color:var(--astro-code-token-string-expression)">"zero"</span><span style="color:var(--astro-code-color-text)">  ]            </span><span style="color:var(--astro-code-token-comment)"># else is required</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-token-comment)"># you don't need ternary operator</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">print</span><span style="color:var(--astro-code-color-text)"> :x > </span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-token-keyword)"> and</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">1</span><span style="color:var(--astro-code-color-text)">] </span><span style="color:var(--astro-code-token-keyword)">or</span><span style="color:var(--astro-code-color-text)"> @[</span><span style="color:var(--astro-code-token-constant)">2</span><span style="color:var(--astro-code-color-text)">]</span></span></code></pre>
<h3 id="loops">Loops</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-color-text)">:n = </span><span style="color:var(--astro-code-token-constant)">2</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">repeat</span><span style="color:var(--astro-code-color-text)"> :n [             </span><span style="color:var(--astro-code-token-comment)"># repeat 2 times</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">  print</span><span style="color:var(--astro-code-token-string-expression)"> "hello"</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--astro-code-color-text)">:n = </span><span style="color:var(--astro-code-token-constant)">2</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">while</span><span style="color:var(--astro-code-color-text)"> :n > </span><span style="color:var(--astro-code-token-constant)">0</span><span style="color:var(--astro-code-color-text)"> [          </span><span style="color:var(--astro-code-token-comment)"># repeat until condition is not met</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">  print</span><span style="color:var(--astro-code-token-string-expression)"> "hello"</span><span style="color:var(--astro-code-color-text)"> + :n</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">  :n = :n - </span><span style="color:var(--astro-code-token-constant)">1</span></span>
<span class="line"><span style="color:var(--astro-code-color-text)">]</span></span></code></pre>
<h3 id="robot-control">Robot Control</h3>
<pre class="astro-code css-variables" style="background-color:var(--astro-code-color-background);color:var(--astro-code-color-text); overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:var(--astro-code-token-keyword)">forward</span><span style="color:var(--astro-code-color-text)">  &#x3C;expression>  </span><span style="color:var(--astro-code-token-comment)"># default 1</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">backward</span><span style="color:var(--astro-code-color-text)"> &#x3C;expression>  </span><span style="color:var(--astro-code-token-comment)"># default 1</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">right</span><span style="color:var(--astro-code-color-text)">    &#x3C;expression>  </span><span style="color:var(--astro-code-token-comment)"># default 90</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">left</span><span style="color:var(--astro-code-color-text)">     &#x3C;expression>  </span><span style="color:var(--astro-code-token-comment)"># default 90</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">stop</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">pendown</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">penup</span></span>
<span class="line"><span style="color:var(--astro-code-token-keyword)">color</span><span style="color:var(--astro-code-token-string-expression)"> "red"</span></span></code></pre>`,r={title:"ROBO1 Programming Language",description:"ROBO1 Programming Language Reference"},l="/home/slicklash/code/robo1/src/content/docs/en/reference/robo1-language.md",c=void 0;function u(){return`
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
`}function g(){return s}function h(){return[{depth:3,slug:"comments",text:"Comments"},{depth:3,slug:"primitive-datatypes-and-operators",text:"Primitive Datatypes and Operators"},{depth:3,slug:"variables",text:"Variables"},{depth:3,slug:"collections",text:"Collections"},{depth:3,slug:"block-expressions-and-functions",text:"Block Expressions and Functions"},{depth:3,slug:"comparison-operators",text:"Comparison Operators"},{depth:3,slug:"control-flow",text:"Control Flow"},{depth:3,slug:"loops",text:"Loops"},{depth:3,slug:"robot-control",text:"Robot Control"}]}const b=n((p,d,i)=>{const{layout:y,...o}=r;return o.file=l,o.url=c,a`${t()}${e(s)}`});export{b as Content,g as compiledContent,b as default,l as file,r as frontmatter,h as getHeadings,u as rawContent,c as url};
