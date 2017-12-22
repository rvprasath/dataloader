# dataloader
ajax data loader

<b>Dataloader</b> is a jquery plugin that requires jquery library. Jquery library is available here <a href="https://jquery.com/download/">https://jquery.com/download/</a>

This library responses based on ajax request. To enable the loader before any ajax request just call the dataloader function as

<pre>
&#x3C;div id="loader"&#x3E;&#x3C;/div&#x3E
</pre>

<pre>
&#x3C;script&#x3E;
$(document).ready(function(){
  $("#loader").dataloader();
});
&#x3C;/script&#x3E;
</pre>

<b>Note:</b> While calling dataloader before ajax request will automatically close the loader after the ajax response.

<b>Some properties for dataloader</b>

<table>
<thead>
<tr>
<th>Attribute</th>
<th>Function</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>color</b></td>
<td>color attribute defines the color for the data loader.The default color is <b>#006587</b>
- ![#1589F0](https://placehold.it/15/006587/000000?text=+)
<span style='width: 5px; height: 5px; background: '#006587";'>t</span></td>
</tr>
<tr>
<td><b>size</b></td>
<td>size attribute specifies the number of dataloader boxes to be displayed.</td>
</tr>
</tbody>
</table>

The color of the loader can be changed by
<pre>
&#x3C;script&#x3E;
$(document).ready(function(){
  $("#loader").dataloader({
    color: "red"
  });
});
&#x3C;/script&#x3E;
</pre>
