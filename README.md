
# Direct UI Templates - Simple templates for designers (no JavaScript)

<p>Direct UI Templates is designed to be an extrememly simple template engine that designers and developers can use to make re-usable components without a single line of JavaScript.</p>

<h4>Create static templates (with or without json data) as easy as 1,2,3...4! </h4>

<ol>
<li>Write some HTML</li>
<li>Wrap it in a script tag</li>
<li>invoke the template later in the HTML (with or without json data)</li>
<li>Rejoice!</li>
</ol>

<h4>EXAMPLE:</h4>

1: template
```html
<script id="simple-template" type="text/duit">
        <div class="a-div {{color}}-color">
            Hello, I'm {{name}} and my favorite color is {{color}}.
        </div>
</script>
```

2: invoked in HTML
```html
<div data-duit='{
      "tmpl": "simple-template",
      "data": {"name": "Sam", "color": "green"}
}'>
</div>
```

3: result HTML
```html
<div class="a-div geen-color">
        Hello, I'm Sam and my favorite color is green.
</div>
```

<h4>MORE EXAMPLES:</h4>

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
