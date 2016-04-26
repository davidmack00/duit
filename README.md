
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
```html
<script id="simple-template" type="text/duit">
        <div class="a-div {{color}}-color">
            Hello, I'm {{name}} and my favorite color is {{color}}.
        </div>
</script>
```

2. invoked in HTML
```html
<div data-duit='{
      "tmpl": "simple-template",
      "data": {"name": "Sam", "color": "green"}
}'>
</div>
```

3. result HTML
```html
<div class="a-div geen-color">
        Hello, I'm Sam and my favorite color is green.
</div>
```

<h3>MORE EXAMPLES:</h3>

<p>Repeat a template with an array</p>
```html
<div data-duit='{
    "tmpl": "simple-template",
    "data": [
        {"name": "Sam", "color": "green"},
        {"name": "Joe", "color": "red"}
    ]
}'>
</div>
```
<p>Create nested templates</p>
```html
<script id="parent-template" type="text/duit">
        <div>Please state your {{info}} and your favorite color:</div>
        <div class="quote">
                <!-- duit-placeholder my-placeholder -->
        </div>
        <div>Thank you</div>
    </div>
</script>

<div data-duit='{
        "tmpl": "parent-template",
        "data": {
            "info": "name",
            "duit-placeholder": {
                "target": "my-placeholder",
                "tmpl": "simple-template",
                "data": {
                    "name": "Sam",
                    "color": "green"
                }
            }
        }
}'>
</div>
```
</pre>

<p>*Direct UI Templates requires jQuery</p>
