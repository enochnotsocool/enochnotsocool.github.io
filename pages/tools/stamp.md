---
layout: page
title: 郵票小工具
comments: false
modified: 2017-11-10
---

<!-- Before all content help load css ----------------------->

在二城國小服替代役的時候，學校決定不再買進 1 元的郵票。雖然多了 3 元郵票會減少郵
票的使用量，也不會有湊不出正確郵資的問題，但是要怎麼貼郵票變成比較需要動腦筋的問
題。因為懶得每一次都自己動腦，就決定自己寫一個小程式來幫忙解決囉。給定一筆郵資，
程式將會決定不同種類的郵票要怎麼分配張數，可以達到郵票**張數最少**的組合。

<div html="1">
<h3>選擇可用的郵票種類</h3>
  <!--Checkbox for common stamps from https://codepen.io/anon/pen/wadwpx-->
  <ul class="image_selector" id="predefined-stamps">
    {% for stamptype in site.data.tools.stamp.known %}
      <li>
        <input type="checkbox" id="stampvalue{{stamptype.value}}" {{stamptype.state}}/>
        <label for="stampvalue{{stamptype.value}}"  style="width:150px;height:150px;"/>
          <span>{{stamptype.value}} 元</span>
          <img src="{{stamptype.image}}"/>
      </li>
    {% endfor %}
  </ul>

<h3 class="other_stamps">提供其他郵票種類</h3>
<div class="other_stamps_input">
請用空白鍵分開(例如："12 32")。重複超過一次，小於零，不是整數的郵票種類將會被忽略。 <br>
<input type="text" id="stamp-additional-types"/><br>
</div>

<h3>函件資費</h3>
<input type="text" id="stamp-target-input"/>

<!--- Loading Javascript to perform calculation -->
<script src="{{site.url}}/assets/js/tools/stamp.js"></script>

<div style="margin-top:30px;text-align:center;">
  <button type="button" name="calculate" onclick="StampCalculate();">計算</button>
  <button type="button" name="clear" onclick="StampClear();">清除</button>
</div>

<h3>計算結果</h3>
  <p id="stamp-ans"></p><br>
  <p id="stamp-debug"></p>
</div>

<hr>

<div markdown="1">

## More about this tool

The program uses the naive [dynamic
programming](https://en.wikipedia.org/wiki/Dynamic_programming) approach to
solve this problem. It assumes that:

* All types of stamps are infinitely possible
* All types of stamps and all target prices are simple integers

This reduces our question to the [Change-Making
Problem](https://en.wikipedia.org/wiki/Change-making_problem), rather than
having to tackle a complete [Knapsack
Problem](https://en.wikipedia.org/wiki/Knapsack_problem). Since a naive approach
to dynamic programming is used, for a given total n the programs opens an
integer array of size n. The program thus hard caps the total to be smaller than
10000, to avoid excessive memory usage while covering all likely postal fee. I
know there are ways to extend this problem using the least common factor of
stamp types, but I would be difficult to generalize when one day I decide to
include the functionality of finite stamps.

## List of known issues (and potential work around)

* No support for legacy stamp type NTD 3.5. In the mean time, use 7 as an
  additional stamp type and see if you can get better results.
* No support of stamp values greater than 10000. Until I find a better way of
  generalizing the solution, this would not be addressed.
* No support for finite stamp values, so if you are stuck with only two NTD 3
  stamps, and wanted to check if you can still pay your fees using your NTD 5
  and NTD 25 stamps, this is not the program for you. This functionality will
  not be implemented in the near future.
* Output format feels lack-luster. Not sure what could be done, any advise would
  be appreciated.

</div>
