# sascha10k-content-router
&lt;sascha10k-content-router&gt; is a "DOM-Importer" and very basic router. By providing a javascript object, that defines files and names for the routes, it enables you to build Single-Page-Applications in the easiest manner. 

How to use:
1. Create a global variable in javscript containing your routes.
2. Add the &lt;sascha10k-content-router&gt; tag where you want to display the content.
3. Create your files with the content and surround it with a &lt;template&gt; tag.

Example:

1. Define your routes.
```javascript
var myRoute = [
    {
        nameid: "start",
        file: "start.html"
    },
    {
        nameid: "about",
        file: "about.html"
    }
]
```
Filename: route.js

2. Use the tag.
```HTML
<body>
    <head>
        <link rel="import" href="sascha10k-content-router.html" />
        <script src="route.js"></script>
    </head>
    <body>
        <sascha10k-content-router routervar="myRoute" selected="start" globalroutername="main">
        </sascha10k-content-router>
    </body>
</body>
```

3. Create a file that the content-router is able to include.
```HTML
<template>
    This is my start page.
    <div color="red">Fancy colored content</div>
</template>
```
Filename: start.html

Explanation:
Each route is defined by a nameid and the path to the file. The nameid may not contain underscores ('_') or hashtags ('#').
To use the element one must provide the name of the variable containing the route (routervar="myRoute") and the attribute 
selected which will determine the initially shown content.
The attribute globalroutername is not obligatory if the tag is only used once in the html-document, its default will be 'router'.
It must be provided if you use it more than once in your document.

Now you will be able to show the content by using classical links or the onclick event.
```HTML
 <a href="#main_about">About</a>
 <button onclick="main.start()">Start</button>
```

The href value will be appended to the actual URL and the webcomponent will react to that change and switch the content.
On the other handside the webcomponent registers a global object containing functions for the routing. 
The name for the links and functions follow a simple pattern. The globalroutername and the given nameid startet with a '#' and split by a '_'. 
For the function one can use the dotted notation globalroutername.nameid() .

In detail (What will be generated):
The webcomponent includes each file with the &lt;link&gt; tag, loads the content and puts it into a &lt;section&gt;. It registers an event and
some global functions by referencing to an object named by the value of globalroutername (default: 'router'). The event listens to a change
of the url. It will look if the content-router is the right one and than call the according function followed by the underscore.

This version:
The functionality is very basic and only provides simplest routing. It will be enhanced in future by several functionalities.
If you have any suggestions feel free to tell me.

