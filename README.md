
# Direct UI Templates - Simple templates without JS

<h3>Create static templates (with or without json data) as easy as 1,2,3...4? </h3>

<ol>
<li>Write some HTML</li>
<li>Wrap it in a script tag</li>
<li>invoke the template later in the HTML (with or without json data)</li>
<li>Rejoice</li>
</ol>

<h3>EXAMPLE:</h3>

1. template
<pre>
&lt;script id=&quot;simple-template&quot; type=&quot;text/duit&quot;&gt;
        &lt;div class=&quot;a-div {{color}}-color&quot;&gt;
            Hello, I'm {{name}} and my favorite color is {{color}}.
        &lt;/div&gt;
&lt;/script&gt;
</pre>

2. invoked in HTML
<pre>
&lt;div data-duit='{
      &quot;tmpl&quot;: &quot;simple-template&quot;,
      &quot;data&quot;: {&quot;name&quot;: &quot;Sam&quot;, &quot;color&quot;: &quot;green&quot;}
}'&gt;
&lt;/div&gt;
</pre>

3. result HTML
<pre>
&lt;div class=&quot;a-div geen-color&quot;&gt;
        Hello, I'm Sam and my favorite color is green.
&lt;/div&gt;
</pre>

<h3>MORE EXAMPLES:</h3>

<p>Repeat a template with an array</p>
<pre>
&lt;div data-duit='{
    &quot;tmpl&quot;: &quot;simple-template&quot;,
    &quot;data&quot;: [
        {&quot;name&quot;: &quot;Sam&quot;, &quot;color&quot;: &quot;green&quot;},
        {&quot;name&quot;: &quot;Joe&quot;, &quot;color&quot;: &quot;red&quot;}
    ]
}'&gt;
&lt;/div&gt;
</pre>

<p>Create nested templates</p>
<pre>
&lt;script id=&quot;parent-template&quot; type=&quot;text/duit&quot;&gt;
    &lt;div&gt;Please state your {{info}} and your favorite color:&lt;/div&gt;
    &lt;div class=&quot;quote&quot;&gt;
            &lt;!-- duit-placeholder my-placeholder --&gt;
    &lt;/div&gt;
    &lt;div&gt;Thank you&lt;/div&gt;
&lt;/script&gt;

&lt;div data-duit='{
    &quot;tmpl&quot;: &quot;parent-template&quot;,
    &quot;data&quot;: {
        &quot;info&quot;: &quot;name&quot;,
        &quot;duit-placeholder&quot;: {
            &quot;target&quot;: &quot;my-placeholder&quot;,
            &quot;tmpl&quot;: &quot;simple-template&quot;,
            &quot;data&quot;: {
                &quot;name&quot;: &quot;Sam&quot;,
                &quot;color&quot;: &quot;green&quot;
            }
        }
    }
}'&gt;
&lt;/div&gt;
</pre>

<p>*Direct UI Templates requires jQuery</p>
