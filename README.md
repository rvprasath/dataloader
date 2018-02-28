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

Dataloader</br>
![#1589F0](https://placehold.it/15/006587/000000?text=+) ![#1589F0](https://placehold.it/15/006587/000000?text=+) ![#1589F0](https://placehold.it/15/006587/000000?text=+)

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
</td>
</tr>
<tr>
<td><b>size</b></td>
<td>size attribute specifies the number of dataloader boxes to be displayed. The default size is 3.</td>
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

<h2><a href="#license" aria-hidden="true" class="anchor" id="user-content-license"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>license</h2>
<p>MIT. Copyright (c) <a href="https://github.com/rvprasath/" rel="nofollow">rvprasath</a>.</p>
