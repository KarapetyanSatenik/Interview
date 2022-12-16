# HTML and CSS Interview Questions & Answers

### Table of Contents

HIGH - 21 questions (52.5%)
MEDIUM - 10 questions (25%)
LOW - 9 questions (22.5%)

| No. | Questions                                                                                                                                                                                                                                                                                                                                            |
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     | **HTML**                                                                                                                                                                                                                                                                                                                                             |
| 01. | [What is Critical Rendering Path?](#what-is-critical-rendering-path)                                                                                                                                                                                                                                                                                 |
| 02. | [What is the DOM? How does the DOM work?](#what-is-the-dom-how-does-the-dom-work)                                                                                                                                                                                                                                                                    |
| 03. | [Explain the difference between layout, painting and compositing?](#explain-the-difference-between-layout-painting-and-compositing)                                                                                                                                                                                                                  |
| 04. | [What are the Benefits of Server Side Rendering (SSR) Over Client Side Rendering (CSR)?](#what-are-the-benefits-of-server-side-rendering-ssr-over-client-side-rendering-csr)                                                                                                                                                                         |
| 05. | [How can I get indexed better by search engines?](#how-can-i-get-indexed-better-by-search-engines)                                                                                                                                                                                                                                                   |
| 06. | [Ways to improve website performance](#ways-to-improve-website-performance)                                                                                                                                                                                                                                                                          |
| 07. | [What does async and defer refer in script tag? Describe the difference between `<script>`, `<script async>` and `<script defer>`](#what-does-async-and-defer-refer-in-script-tag-describe-the-difference-between-script-script-async-and-script-defer)                                                                                              |
| 08. | [What is desktop first and mobile first design approach?](#what-is-desktop-first-and-mobile-first-design-approach)                                                                                                                                                                                                                                   |
| 09. | [How to make page responsive?](#how-to-make-page-responsive)                                                                                                                                                                                                                                                                                         |
| 10. | [What are the building blocks of HTML5?](#what-are-the-building-blocks-of-html5)                                                                                                                                                                                                                                                                     |
| 11. | [What is difference between Select and Datalist?](#what-is-difference-between-select-and-datalist)                                                                                                                                                                                                                                                   |
| 12. | [What are the semantic tags available in html5?](#what-are-the-semantic-tags-available-in-html5)                                                                                                                                                                                                                                                     |
| 13. | [Why you would like to use semantic tag?](#why-you-would-like-to-use-semantic-tag)                                                                                                                                                                                                                                                                   |
| 14. | [What is accessibility? ARIA role means in a web application](#what-is-accessibility-aria-role-means-in-a-web-application)                                                                                                                                                                                                                           |
| 15. | [What is the purpose of the `alt` attribute on images?](#what-is-the-purpose-of-the-alt-attribute-on-images)                                                                                                                                                                                                                                         |
| 16. | [Define semantic markup. What are the semantic meanings for `<section>, <article>, <aside>, <nav>, <header>, <footer>` and when/how should each be used in structuring html markup?](#define-semantic-markup-what-are-the-semantic-meanings-for-section-article-aside-nav-header-footer-and-when-how-should-each-be-used-in-structuring-html-markup) |
| 17. | [When should you use `section`, `div` or `article`?](#when-should-you-use-section-div-or-article)                                                                                                                                                                                                                                                    |
| 18. | [What is an iframe and how it works?](#what-is-an-iframe-and-how-it-works)                                                                                                                                                                                                                                                                           |
| 19. | [Explain the use of rel="nofollow", rel="noreferrer", rel="noopener" attribute?](#explain-the-use-of-rel-nofollow-rel-noreferrer-rel-noopener-attribute)                                                                                                                                                                                             |
| 20. | [Describe the difference between a `cookie`, `sessionStorage` and `localStorage`?](#describe-the-difference-between-a-cookie-sessionstorage-and-localstorage)                                                                                                                                                                                        |
| 21. | [What does CORS stand for and what issue does it address?](#what-does-cors-stand-for-and-what-issue-does-it-address)                                                                                                                                                                                                                                 |
| 22. | [Fix bad code](#fix-bad-code)                                                                                                                                                                                                                                                                                                                        |
|     | **CSS**                                                                                                                                                                                                                                                                                                                                              |
| 01. | [What are the possible ways to apply CSS styles to a web page?](#what-are-the-possible-ways-to-apply-css-styles-to-a-web-page)                                                                                                                                                                                                                       |
| 02. | [What does the cascading portion of CSS mean?](#what-does-the-cascading-portion-of-css-mean)                                                                                                                                                                                                                                                         |
| 03. | [New features in CSS3](#new-features-in-css3)                                                                                                                                                                                                                                                                                                        |
| 04. | [What are the css selectors?](#what-are-the-css-selectors)                                                                                                                                                                                                                                                                                           |
| 05. | [What is the difference between Pseudo-classes and pseudo-elements?](#what-is-the-difference-between-pseudo-classes-and-pseudo-elements)                                                                                                                                                                                                             |
| 06. | [What is the difference between class selectors and id selectors?](#what-is-the-difference-between-class-selectors-and-id-selectors)                                                                                                                                                                                                                 |
| 07. | [What is the difference between the “nth-child()” and “nth-of-type()” selectors?](#what-is-the-difference-between-the-nth-child-and-nth-of-type-selectors)                                                                                                                                                                                           |
| 08. | [Explain CSS grid layout with example](#explain-css-grid-layout-with-example)                                                                                                                                                                                                                                                                        |
| 10. | [What is CSS flexbox?](#what-is-css-flexbox)                                                                                                                                                                                                                                                                                                         |
| 11. | [When to use css grid and flexbox?](#when-to-use-css-grid-and-flexbox)                                                                                                                                                                                                                                                                               |
| 12. | [What is CSS BEM?](#what-is-css-bem)                                                                                                                                                                                                                                                                                                                 |
| 13. | [How do you specify units in the CSS?](#how-do-you-specify-units-in-the-css)                                                                                                                                                                                                                                                                         |
| 14. | [Explain the CSS “box model” and the layout components that it consists of](#explain-the-css-box-model-and-the-layout-components-that-it-consists-of)                                                                                                                                                                                                |
| 15. | [What is the difference between RGBa, HEX and HSLa?](#what-is-the-difference-between-rgba-hex-and-hsla)                                                                                                                                                                                                                                              |
| 16. | [What is CSS preprocessor?](#what-is-css-preprocessor)                                                                                                                                                                                                                                                                                               |
| 17. | [What are media queries?](#what-are-media-queries)                                                                                                                                                                                                                                                                                                   |
| 18. | [What does box-sizing do?](#what-does-box-sizing-do)                                                                                                                                                                                                                                                                                                 |
| 19. | [Explain some pros and cons for CSS animations versus JavaScript animations](#explain-some-pros-and-cons-for-css-animations-versus-javascript-animations)                                                                                                                                                                                            |
| 20. | Be able to solve practice tasks                                                                                                                                                                                                                                                                                                                      |


## HTML

## ***What is Critical Rendering Path?***

* Constructing the DOM Tree
* Constructing the CSSOM Tree
* Running JavaScript - parser blocking resource
* Creating the Render Tree
* Generating the Layout
* Painting

    [More detailed information you can find by link](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)


 **[⬆ Back to Top](#table-of-contents)**

## ***What is the DOM? How does the DOM work?***

The DOM (Document Object Model) is a cross-platform API that treats HTML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.

* The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.

* document.getElementById() and document.querySelector() are common functions for selecting DOM nodes.

* Setting the innerHTML property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.


**[⬆ Back to Top](#table-of-contents)**

## ***Explain the difference between layout, painting and compositing?***

![](./img/frame-full.jpg)

* **JavaScript**: Typically JavaScript is used to handle work that will result in visual changes, whether it\'s jQuery\'s animate function, sorting a data set, or adding DOM elements to the page. It doesn\'t have to be JavaScript that triggers a visual change, though: CSS Animations, Transitions, and the Web Animations API are also commonly used.

* **Style calculations**: This is the process of figuring out which CSS rules apply to which elements based on matching selectors, for example, .headline or .nav > .nav__item. From there, once rules are known, they are applied and the final styles for each element are calculated.

* **Layout**: Once the browser knows which rules apply to an element it can begin to calculate how much space it takes up and where it is on screen. The web\'s layout model means that one element can affect others, for example the width of the `<body>` element typically affects its children\'s widths and so on all the way up and down the tree, so the process can be quite involved for the browser.

* **Paint**: Painting is the process of filling in pixels. It involves drawing out text, colors, images, borders, and shadows, essentially every visual part of the elements. The drawing is typically done onto multiple surfaces, often called layers.

* **Compositing**: Since the parts of the page were drawn into potentially multiple layers they need to be drawn to the screen in the correct order so that the page renders correctly. This is especially important for elements that overlap another, since a mistake could result in one element appearing over the top of another incorrectly.
  
**[⬆ Back to Top](#table-of-contents)**

## ***What are the Benefits of Server Side Rendering (SSR) Over Client Side Rendering (CSR)?***

* We are using server side rendering for two reasons:
    * performance benefit for our customers
    * Consistent SEO performance

* The main difference is that for SSR your server\'s response to the browser is the HTML of your page that is ready to be rendered, while for CSR the browser gets a pretty empty document with links to your javascript. That means for SSR your browser will start rendering the HTML from your server without having to wait for all the JavaScript to be downloaded and executed.

* for SSR, the user can start viewing the page while all of that is happening. For the CSR world, you need to wait for all of the above to happen and then have the virtual dom moved to the browser dom for the page to be viewable.

**[⬆ Back to Top](#table-of-contents)**

## ***How can I get indexed better by search engines?***

HTML tags are used to influence the way our pages appear in search results. With the help of certain tags, we can turn regular search snippets into rich snippets, and maybe even into featured snippets. And, as our search snippets get more advanced, they are able to secure better **Search Engine Results Pages (SERP)** positions and attract more traffic.

Here are all the HTML tags that still matter:

### **1. Title tag**

Title tags are used by search engines to determine the subject of a page and display it in SERP. As a rule of thumb, titles that are under 60 characters long will fit on most screens. In HTML, a title tag looks like this:

```html
<title>Your Title Goes Here</title>
```

### **2. Meta description tag**

Meta description is a short paragraph of text used to describe your page in search results. The function of meta description is similar to the title. It provides a little more detail about your page and it helps users decide whether to visit your page or not. In HTML, a meta description tag looks like this:

```html
<meta name="description" content="Your description goes here">
```

### **3. Heading tags**

Headings (H1-H6) are used to split your page into sections or chapters. Each heading is like a small title within the page. In HTML, a heading looks like this:

```html
<h1>Your heading goes here</h1>
```

### **4. Image alt attribute**

The `alt` text attribute is a part of an image tag, and it provides a description for an image. Alt text plays a major role in image optimization. It makes your images accessible both to search engines (by telling them what a particular image means) and to people (by displaying an alternative text in case a particular image cannot be loaded or by helping screen readers convey images). In HTML it may look like this:

```html
<img src="url" alt="Your image description goes here">
```

### **5. Open Graph tags**

Open Graph (OG) tags are placed in the `<head>` section of a page and allow any webpage to become a rich object in social networks. OG tags let you control how the information about your page is represented when shared via social channels. This possibility may help you enhance the performance of your links on social media, thus driving more click-throughs and increasing conversions. In HTML, it can look like this:

```html
<meta name="og:title" property="og:title" content="Your Open Graph Title Goes Here">
```

### **6. Robots tag**

A robots tag is an element in the HTML of a page that informs search engines which pages on your site should be indexed and which should not. Its functions are similar to robots.txt, but robots.txt gives suggestions. Whereas robots tags give instructions. In HTML, it can look like this:

```html
<meta name="robots" content="index, follow">
```

### **7. Canonical tag**

A canonical tag is a way of telling search engines that a specific URL represents the master copy of a page. Using the canonical tag prevents problems caused by identical or "duplicate" content appearing on multiple URLs. Practically speaking, the canonical tag tells search engines which version of a URL you want to appear in search results. In HTML, it may look like this:

```html
<link href="URL" rel="canonical">
```

### **8. HTML5 semantic tags**

One of the most important features of HTML5 is its semantics tags. Semantic tags refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages. It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content. For example, instead of using `<div id="header"></div>` you can use a `<header></hrader>` tag.

**[⬆ Back to Top](#table-of-contents)**

## ***Ways to improve website performance***

* Minimize HTTP Requests
    * Sites are mainly slow because of too many (or too large) HTTP requests. We can eliminate unnecessary request;
        * combined files: js to a file, css to a file
        * CSS sprites: CSS Sprites are the preferred method for reducing the number of image requests. Combine your background images into a single image and use the CSS background-image and background-position properties to display the desired image segment.

* Use a Content Delivery Network CDN

    * A CDN is essentially many optimized servers around the world that deliver web content to users based on their geographic location. This means big performance improvements for site users. Because, say, if a person accessing your site in India, they will be retrieving web content from a server nearby

* Optimize Images:

    * image sizes make a huge difference to site speed. The larger content/images, the slower the site. we could:
        * Changing the resolution: reducing the “quality” of the image (and thereby the file size)
        * Compressing the picture: increasing the efficiency of image data storage
        * Cropping the picture: when cropping, you are cutting out unneeded areas and thus making the image smaller in size

* Put Scripts at the Bottom:

    * Javascript files can load after the rest of your page. The simplest solution is to place your external Javascript files at the bottom of your page, just before the close of your body tag. Now more of your site can load before your scripts. Another method that allows even more control is to use the defer or async attributes when placing external .js files on your site.

        * Async tags load the scripts while the rest of the page loads, but this means scripts can be loaded out of order. Basically, lighter files load first. This might be fine for some scripts, but can be disastrous for others.

        * The defer attribute loads your scripts after your content has finished loading. It also runs the scripts in order. Just make sure your scripts run so late without breaking your site.

* Add an Expires or a Cache-Control Header

    * Web page designs are getting richer and richer, which means more scripts, stylesheets, images, and Flash in the page. A first-time visitor to your page may have to make several HTTP requests, but by using the Expires header you make those components cacheable. This avoids unnecessary HTTP requests on subsequent page views. Expires headers are most often used with images, but they should be used on all components including scripts, stylesheets, and Flash components.

* Gzip Components

    * Compression reduces response times by reducing the size of the HTTP response. Gzipping generally reduces the response size by about 70%.

* Put Stylesheets at the Top:

    * This is because putting stylesheets in the HEAD allows the page to render progressively.

* Avoid CSS Expressions

* Use GET for AJAX Requests:

    * Ajax is that it provides instantaneous feedback to the user because it requests information asynchronously from the backend web server

* Make JavaScript and CSS External:

    *  Using external files in the real world generally produces faster pages because the JavaScript and CSS files are cached by the browser. JavaScript and CSS that are inlined in HTML documents get downloaded every time the HTML document is requested. This reduces the number of HTTP requests that are needed, but increases the size of the HTML document. On the other hand, if the JavaScript and CSS are in external files cached by the browser, the size of the HTML document is reduced without increasing the number of HTTP requests.

* Use get to ajax request:

    *  POST is implemented in the browsers as a two-step process: sending the headers first, then sending data. So it's best to use GET, which only takes one TCP packet to send (unless you have a lot of cookies).

* No 404s:

    * HTTP requests are expensive so making an HTTP request and getting a useless response (i.e. 404 Not Found) is totally unnecessary and will slow down the user experience without any benefit.

* Reduce Cookie Size:

    * HTTP cookies are used for a variety of reasons such as authentication and personalization. Information about cookies is exchanged in the HTTP headers between web servers and browsers. It's important to keep the size of cookies as low as possible to minimize the impact on the user's response time.

* Reduce DNS Lookups
* Minify JavaScript and CSS
* Avoid Redirects
* Remove Duplicate Scripts
* Configure Etags
* Make Ajax Cacheable
* Post-load Components
* Preload Components
* Reduce the Number of DOM Elements
* Minimize the Number of iframes
* Minimize DOM Access
* Optimize CSS Sprites
* Don't Scale Images in HTML
* Make favicon.ico Small and Cacheable
* Avoid Empty Image src


**[⬆ Back to Top](#table-of-contents)**

## ***What does async and defer refer in script tag? Describe the difference between `<script>`, `<script async>` and `<script defer>`***

* **Async**: Downloads the script file during HTML parsing and will pause the HTML parser to execute it when it has finished downloading.

* **Defer**: Defer downloads the script file during HTML parsing and will only execute it after the HTML parser has completed. Not all browsers support this.

The async attribute is used to indicate to the browser that the script file can be executed asynchronously. The HTML parser does not need to pause at the point it reaches the script tag to fetch and execute, the execution can happen whenever the script becomes ready after being fetched in parallel with the document parsing.

The defer attribute tells the browser to only execute the script file once the HTML document has been fully parsed.

**Example**

```html
<!-- Without async or defer, browser will run your script immediately, before rendering the elements that's below your script tag. -->
<script src="myscript.js"></script>


<!-- With async (asynchronous), browser will continue to load the HTML page and render it while the browser load and execute the script at the same time. -->
<!-- Google Analytics is usually added like this -->
<script async src="https://google-analytics.com/analytics.js"></script>


<!-- With defer, browser will run your script when the page finished parsing. (not necessary finishing downloading all image files. This is good.) -->
<script defer src="myscript.js"></script>
```

**[⬆ Back to Top](#table-of-contents)**

## ***What is desktop first and mobile first design approach?***

* Desktop first :
  General selectors and styles designed to make the site look good on DESKTOP screens defined globally. But they affect all devices, and must be overridden by max-width media queries targeting minimum screen size

* Mobile First :
  General selectors and styles designed to make the site look good on small MOBILE screens go here. But they affect all devices, and must be overridden by min-width media queries targeting maximum scrren size

  In desktop first approach the media queries will be written with respect to max-width whereas in mobile first approach media queries will be written with respect to min-width


**[⬆ Back to Top](#table-of-contents)**

## ***How to make page responsive?***

Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones).

### **1. Setting the viewport**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### **2. Responsive Images**

If the CSS width property is set to 100%, the image will be responsive and scale up and down

```html
<img src="img.png" style="width:100%;">
```

### **3. Show different Images depending on Browser Width**

The HTML `<picture>` element allows you to define different images for different browser window sizes.

```html
<picture>
  <source srcset="img_small.jpg" media="(max-width: 600px)">
  <source srcset="img_large.jpg" media="(max-width: 1500px)">
  <source srcset="img.jpg">
  <img src="img_small.jpg" alt="Image">
</picture>
```

### **4. Responsive Text Size**

The text size can be set with a "vw" unit, which means the "viewport width". That way the text size will follow the size of the browser window.

```html
<h1 style="font-size:10vw">Hello World</h1>
```

### **5. Media Queries**

Using media queries you can define completely different styles for different browser sizes.

```css
/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 800px) {
  .left, .main, .right {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

## ***What are the building blocks of HTML5?***

* **Semantics**: allowing you to describe more precisely what your content is.
* **Connectivity**: allowing you to communicate with the server in new and innovative ways.
* **Offline and storage**: allowing webpages to store data on the client-side locally and operate offline more efficiently.
* **Multimedia**: making video and audio first-class citizens in the Open Web.
* **2D/3D graphics and effects**: allowing a much more diverse range of presentation options.
* **Performance and integration**: providing greater speed optimization and better usage of computer hardware.
* **Device access**: allowing for the usage of various input and output devices.
* **Styling**: letting authors write more sophisticated themes.

**[⬆ Back to Top](#table-of-contents)**

## ***What is difference between Select and Datalist?***

For the select element, the user is required to select one of the options you\'ve given. For the datalist element, it is suggested that the user select one of the options you\'ve given, but he can actually enter anything he wants in the input.

### **Select**

```html
<select name="browser">
  <option value="firefox">Firefox</option>
  <option value="ie">IE</option>
  <option value="chrome">Chrome</option>
  <option value="opera">Opera</option>
  <option value="safari">Safari</option>
</select>
```

### **Datalist**

```html
<input type="text" list="browsers">
<datalist id="browsers">
  <option value="Firefox">
  <option value="IE">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```

**[⬆ Back to Top](#table-of-contents)**

## ***What are the semantic tags available in html5?***

HTML5 semantic tags define the function and the category of your text, simplifying the work for browsers and search engines, as well as developers.

HTML5 offers new semantic elements to define different parts of a web page:

* `<article>`
* `<aside>`
* `<details>`
* `<figcaption>`
* `<figure>`
* `<footer>`
* `<header>`
* `<main>`
* `<mark>`
* `<nav>`
* `<section>`
* `<summary>`
* `<time>`

Syntax:

```html
<header></header>
<section>
	<article>
		<figure>
			<img>
			<figcaption></figcaption>
		</figure>
	</article>
</section>
<footer></footer>
```

**[⬆ Back to Top](#table-of-contents)**

## ***Why you would like to use semantic tag?***

* Search Engine Optimization, accessibility, repurposing, light code.
* Many visually impaired person rely on browser speech and semantic tag helps to interpret page content clearly.
* Search engine needs to understand page content to rank and semantic tag helps.
* Semantic code aids accessibility. Specially, many people whose eyes are not good rely on speech browsers to read pages to them. These programs cannot interpret pages very well unless they are clearly explained.
* Help Search engines to better understand pages. Search engine need to understand what your content is about when rank you properly on search engines. Semantic code tends to improve your placement on search engines, as it is easier for the "search engine spiders" to understand.
* It\'s easier to read and edit, which saves time and money during maintenance.

**[⬆ Back to Top](#table-of-contents)**

## ***What is accessibility? ARIA role means in a web application***

The **Accessible Rich Internet Applications (ARIA)** Suite, defines a way to make Web content and Web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with HTML, JavaScript, and related technologies.

Screen readers work with regular HTML, but adding ARIA can provide screen reader users with greater context and interactivity with the content on the page. ARIA has no effect on how elements are displayed or behave in browsers. It does not add new functionality, and is meant to act only as an extra descriptive layer for screen readers.

Without WAI-ARIA certain functionality used in Web sites is not available to some users with disabilities, especially people who rely on screen readers and people who cannot use a mouse. WAI-ARIA addresses these accessibility challenges, for example, by defining ways for functionality to be provided to assistive technology. With WAI-ARIA, developers can make advanced Web applications accessible and usable to people with disabilities.

ARIA attributes are divided into two categories: roles, and states & properties.

### **ARIA Roles**

An ARIA role is added via a `role="<ROLE TYPE>"` attribute, and does not ever change for an element once it is set. There are four categories of ARIA roles:

* landmark
* document
* widget
* abstract

### **Landmark ARIA Roles**

Much like semantic HTML elements, landmark ARIA Roles are used to give users of assistive technology a better way to navigate and identify the different parts of a web page.

**Example**

```html
 <nav class='mobile-nav' role='navigation' aria-label='Mobile Menu'> List of Links </nav>
```

While seeming redundant, is actually useful for screen readers. It wouldn\'t read the aria-label on this navigation, which is really helpful for giving greater context to visually impaired users, without the `role="navigation"`.

The different landmark roles you can use are as follows, copied from the W3C Wiki Page:

* **banner**: A region that contains the prime heading or internal title of a page.
* **complementary**: Any section of the document that supports the main content, yet is separate and meaningful on its own.
* **contentinfo**: A region that contains information about the parent document such as copyrights and links to privacy statements.
* **form**: A region of the document that represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
* **main**: Main content in a document. In almost all cases a page will have only one `role=“main”`.
* **navigation**: A collection of links suitable for use when navigating the document or related documents.
* **search**: The search tool of a Web document.
* **application**: A region declared as a web application, as opposed to a web document.

### **Document ARIA Roles**

Document roles describe the structure of the content on the page, as opposed to the structure of the whole page, which landmark roles describe. The roles in bold are the ones we think are the most common document aria roles, and the ones which are useful to think about including in your HTML.

* **article**: A section of a page that consists of a composition that forms an independent part of a document, page, or site.
* **columnheader**
* **definition**: A definition of a term or concept.
* **directory**
* **document**
* **group**: A set of user interface objects which are not intended to be included in a page summary or table of contents by assistive technologies.
* **heading**: A heading for a section of the page.
* **img**
* **list**
* **listitem**
* **math**
* **note**
* **presentation**
* **region**
* **row**
* **rowgroup**
* **rowheader**
* **separator**
* **toolbar**

### **Widget ARIA Roles**

Widget Roles are used to describe what are often javascript-based interfaces, or the more complicated parts of your web page\'s interface. The roles that are starred are the ones we think are the most common elements widget aria roles, and the ones which are useful useful to think about including in your HTML.

* **alert**: A message with important, and usually time-sensitive, information.
* **alertdialog**: A type of dialog that contains an alert message, where initial focus goes to an element within the dialog.
* **button**: An input that allows for user-triggered actions when clicked or pressed.
* **checkbox**: A checkable input that has three possible values: true, false, or mixed.
* **dialog**: A dialog is an application window that is designed to interrupt the current processing of an application in order to prompt the user to enter information or require a response.
* **gridcell**
* **link**
* **log**
* **marquee**
* **menuitem**
* **menuitemcheckbox**
* **menuitemradio**
* **option**
* **progressbar**
* **radio**: A checkable input in a group of radio roles, only one of which can be checked at a time.
* **scrollbar**
* **slider**
* **spinbutton**
* **status**
* **tab**: A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user.
* **tabpanel**: A container for the resources associated with a tab, where each tab is contained in a tablist.
* **textbox**: Input that allows free-form text as its value.
* **timer**
* **tooltip**
* **treeitem**

### **Abstract ARIA Roles**

Abstract aria roles are the basis of how the other ARIA roles are defined. These are not to be used in HTML.

### **ARIA States & Properties**

ARIA states and properties are often used to support ARIA roles that exist on a page. ARIA Properties often describe relationships with other elements, and for the most part, do not change once they\'re set.

ARIA States are more dynamic and are typically updated with JavaScript as a user interacts with a page. Screen readers are notified when these states change, and can announce these changes to users after an interaction takes place.

While there are 35 aria properties and states the W3C defines and which you can read more about on the W3C site, here are the ones we believe to most commonly used and practical for most web pages/applications.

* **aria-activedescendant**: Identifies the currently active descendant of a composite widget. Use with autofill search suggestions.
* **aria-autocomplete**: Indicates whether user input completion suggestions are provided. Use with autofill search suggestions.
* **aria-checked (state)**: Indicates the current “checked” state of checkboxes, radio buttons, and other widgets. You can set this to true, false, or mixed state.
* **aria-controls**: Identifies the element (or elements) whose contents or presence are controlled by the current element.
* **aria-describedby**: Identifies the element (or elements) that describes the object.
* **aria-disabled (state)**: Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
* **aria-expanded (state)**: Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
* **aria-hidden (state)**: Indicates that the element and all of its descendants are not visible or perceivable to any user as implemented by the author.
* **aria-invalid (state)**: Indicates the entered value does not conform to the format expected by the application.
* **aria-label**: Defines a string value that labels the current element.
* **aria-labelledby**: Identifies the element (or elements) that labels the current element.
* **aria-live**: Indicates that an element is dynamic, changing, and will be updated, and describes the types of updates the user can expect from the live region.
* **aria-owns**: Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child  relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
* **aria-pressed (state)**: Indicates the current “pressed” state of toggle buttons.
* **aria-required**: Indicates that user input is required on the element before a form may be submitted.
* **aria-selected (state)**: Indicates the current “selected” state of various widgets.

[Tool to check accessibility](https://wave.webaim.org)

**[⬆ Back to Top](#table-of-contents)**

## ***What is the purpose of the `alt` attribute on images?***

The `alt` attribute provides alternative information for an image if a user cannot view it. The `alt` attribute should be used to describe any images except those which only serve a decorative purposes, in which case it should be left empty.

```html
<img src="pancakes.png" alt="Stack of blueberry pancakes with powdered sugar">
```

**[⬆ Back to Top](#table-of-contents)**

## ***Define semantic markup. What are the semantic meanings for `<section>, <article>, <aside>, <nav>, <header>, <footer>` and when/how should each be used in structuring html markup?***

* `<header>` is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author\'s name, time and date of publication, table of contents, or other navigational information.

* `<article>` is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing it\'s meaining. Individual blog posts or news stories are good examples.

* `<section>` is a flexible container for holding content that shares a common informational theme or purpose.

* `<footer>` is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author\'s name, copyright information, and related links are typical examples of such content.

**[⬆ Back to Top](#table-of-contents)**

## ***When should you use `section`, `div` or `article`?***

* `<section>`, group of content inside is related to a single theme, and should appear as an entry in an outline of the page. It\'s a chunk of related content, like a subsection of a long article, a major part of the page (eg the news section on the homepage), or a page in a webapp\'s tabbed interface. A section normally has a heading (title) and maybe a footer too.

* `<article>`, represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.

* `<div>`, on the other hand, does not convey any meaning, aside from any found in its class, lang and title attributes.

**[⬆ Back to Top](#table-of-contents)**

## ***What is an iframe and how it works?***

The `<iframe>` HTML element represents a nested browsing context, embedding another HTML page into the current one. Each embedded browsing context has its own **session history** and **document**. The browsing context that embeds the others is called the parent browsing context. The topmost browsing context — the one with no parent — is usually the browser window, represented by the **Window** object.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 iframe</title>
  </head>
  <style type="text/css">
  iframe {
    border: 1px solid #333;
    width: 50%;
  }
  .output {
    background: #eee;
  }
  </style>
  <body>
    <p>The Inline iFrame Example</p>
    <iframe id="inlineFrameId"
      title="Inline iFrame Example"
      width="300"
      height="200"
      src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
        Sorry your browser does not support inline frames.
    </iframe>
  </body>
</html>
```

[Live demo](https://learning-zone.github.io/html-interview-questions/assets/files/iframe.html)

### **The Iframe Tag Attributes**

|Attribute       | Description                |
|----------------|----------------------------|
|allow           |indicates what features the iframe is allowed to use (e.g. fullscreen, camera, autoplay)|
|allowfullscreen |grants or denies permission for the iframe to appear in full-screen mode|
|height           |sets the height of the iframe (if not specified, the default height is 150 pixels)|
|loading         |sets lazy loading or eager loading for the iframe|
|referrerpolicy  |sets what referrer information should be sent in the request for the iframe|
|src             |the address of the resource included in the iframe|
|width           |sets the width of the iframe (if not specified, the default width is 300 pixels)|

*Note: Because each browsing context is a complete document environment, every `<iframe>` in a page requires increased memory and other computing resources.*

**[⬆ Back to Top](#table-of-contents)**

## ***Explain the use of rel="nofollow", rel="noreferrer", rel="noopener" attribute?***

### **1. rel="nofollow"**

When `rel="nofollow"` tag is used, it instruct the search engines not to pass any PageRank from one page to the other. It does not allow it to pass the authority to the specific website. The main advantage of using this attribute is to control the spam attack.

There may be times, when you do not have control over what people publish on your websites, for example some blog comments and some kind of forum posting.

**Example**

```html
<a href="https://www.website.com" rel="nofollow">Link to yoursite.com</a>
```

### **2. rel="noreferrer"**

Noreferrer is related to analytics and tracking. The referrer value shows the previous page where a user came from. By using the noreferrer attribute on a link, you are preventing other pages from seeing that traffic came from a click on your link.

**Example**

```html
<a href="https://www.website.com" rel="noreferrer">Link to yoursite.com</a>
```

### **3. rel="noopener"**

It prevents the new page from being able to access the `window.opener` property and will make it run in a separate process. noopener tag works as a security fix which prevents malicious links to take control over an opened tab.

**Example**

```html
<a href="https://www.website.com" target="_blank" rel="noopener">Link to yoursite.com</a>
```

**[⬆ Back to Top](#table-of-contents)**

## ***Describe the difference between a `cookie`, `sessionStorage` and `localStorage`?***

* ```cookie```: A text file saved on the users computer to store and retrieve data

* ```sessionStorage```: Is memory space in a browser to save temporary data until the window or tab is closed.

* ```localStorage```: Like cookie, where data can be saved and retrieved after browser sessions, but stored in memory like sessionStorage. Data is stored as plain key value pairs and can be stored as Json objects.

|                                        | `cookie`                                                 | `localStorage` | `sessionStorage` |
| -------------------------------------- | -------------------------------------------------------- | -------------- | ---------------- |
| Initiator                              | Client or server. Server can use `Set-Cookie` header     | Client         | Client           |
| Expiry                                 | Manually set                                             | Forever        | On tab close     |
| Persistent across browser sessions     | Depends on whether expiration is set                     | Yes            | No               |
| Sent to server with every HTTP request | Cookies are automatically being sent via `Cookie` header | No             | No               |
| Capacity (per domain)                  | 4kb                                                      | 5MB            | 5MB              |
| Accessibility                          | Any window                                               | Any window     | Same tab         |

*Note: If the user decides to clear browsing data via whatever mechanism provided by the browser, this will clear out any `cookie`, `localStorage`, or `sessionStorage` stored. It\'s important to keep this in mind when designing for local persistance, especially when comparing to alternatives such as server side storing in a database or similar (which of course will persist despite user actions).*

**[⬆ Back to Top](#table-of-contents)**

## ***What does CORS stand for and what issue does it address?***

Cross-Origin Resource Sharing (CORS) is a W3C spec that allows cross-domain communication from the browser. By building on top of the XMLHttpRequest object, CORS allows developers to work with the same idioms as same-domain requests. CORS gives web servers cross-domain access controls, which enable secure cross-domain data transfers.

**[⬆ Back to Top](#table-of-contents)**

## ***Fix bad code***
[Find examples for practice](https://www.htmhell.dev/)

## CSS

## ***What are the possible ways to apply CSS styles to a web page?***

There are three ways to apply CSS to HTML: Inline, internal, and external.

### **1. Inline CSS**

Inline CSS is specified directly in the opening tag of the element you want it to apply to. It is entered into the style attribute within HTML. This allows CSS properties on a "per tag" basis.

**Example**

```html
<p style="font-weight:bold;">Bold Font</p>
```

This CSS type is not really recommended, as each HTML tag needs to be styled individually. However, inline CSS in HTML can be useful in some situations. For example, in cases where you don\'t have access to CSS files or need to apply styles for a single element only.

### **2. Internal CSS**

Internal or Embedded, styles are used for the whole page. Inside the head element, the style tags surround all of the styles for the page.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Internal CSS Example</title>
  <style>
    p {
        color: red;
    }
    
    a {
        color: blue;
    }
</style>
...
```

This CSS style is an effective method of styling a single page. However, using this style for multiple pages is time-consuming as you need to put CSS rules to every page of your website.

### **3. External CSS**

In external CSS rules are stored in a separate file. To refer to that file from the HTML page, add the link element (and its closing element within XHTML) to the head element. This CSS type is a more efficient method, especially for styling a large website. By editing one **.css** file, you can change your entire site at once.

**style.css**

```css
  p {
      color: red;
  }
  
  a {
      color: blue;
  }
```

```html
<!DOCTYPE html>
<html>
<head>
    <title>External CSS Example</title>
    <link rel="stylesheet" type="text/css" href="style.css">
...
```

The link element in the example has three attributes. The first, `rel`, tells the browser the type of the target of the link. The second, `type`, tells the browser what type of stylesheet it is. And the third, `href`, tells the browser under which URL to find the stylesheet.

## ***What does the cascading portion of CSS mean?***

The **cascading** in CSS refers to the fact that styling rules "cascade" down from several sources. This means that CSS has an inherent hierarchy and styles of a higher precedence will overwrite rules of a lower precedence.

Even the simplest HTML document may have three or more style sheets associated with it including:

* The browser\'s style sheet
* The user\'s style sheet
* The author\'s style sheet

### **Browser style sheets**

Browsers apply style sheets to all web documents. Although these style sheets vary from browser to browser, they all have common characteristics such as black text, blue links, purple visited links etc. These are referred to as a "default" browser stylesheet.

As soon as you, the author, apply a style sheet to a document, it will override the browser's style sheet. This is because author style sheets will always override browser style sheets.

### **User style sheets**

Most modern browsers allow users to set their own style sheets within their browser. These style sheets will override the browsers default style sheets - for that user only.

### **Author style sheets**

As soon as you apply a basic style sheet or an inline style to a page, you have added what is referred to as an "author style sheet". Everything you do, from choosing fonts, colours and laying out pages in CSS is done using author style sheets.

## ***New features in CSS3***

### **1. CSS3 Selectors**

* Matches any element E whose attribute attr starts with the value val. In other words, the val matches the beginning of the attribute value.

```css
E[attr^=val]
/* Example */
a[href^='http://sales.']{color: teal;}
```

* Matches any element E whose attribute attr ends in val. In other words, the val matches the end of the attribute value.

```css
E[attr$=val]
/* Example */
a[href$='.jsp']{color: purple;}
```

* Matches any element E whose attribute attr matches val anywhere within the attribute. It is similar to E[attr~=val], except the val can be part of a word.

```css
E[attr*=val]  
/* Example */
img[src*='artwork']{
        border-color: #C3B087 #FFF #FFF #C3B087;
}
```

### **2. Pseudo-classes**

CSS2 supports user interaction pseudo-classes, namely `:link`, `:visited`, `:hover`, `:active`, and `:focus`.  
A few more pseudo-class selectors were added in CSS3. One is the `:root` selector, which allows designers to point to the root element of a document.

```css
  :root{overflow:auto;}
```

As a complement to the `:first-child` selector, the `:last-child` was added. With it one can select the last element named of a parent element.

```css
  div.article > p:last-child{font-style: italic;}
```

A new user interaction pseudo-class selector was added, the `:target` selector.

```html
<style>
  span.notice:target { font-size: 2em; font-style: bold; }
</style>

<a href='#section2'>Section 2</a>
<p id='section2'>...</p>
```

The negation pseudo-class selector, `:not` can be coupled with almost any other selector that has been implemented.

```css
  img:not([border]){ border: 1; }
```

### **3. CSS3 Colors**

The color keyword list has been extended in the CSS3 color module to include 147 additional keyword colors (that are generally well supported), CSS3 also provides us with a number of other options: **HSL**, **HSLA**, **RGBA** and **Opacity**.

```css
div.halfopaque {
  background-color: rgb(0, 0, 0);
  opacity: 0.5;
  color: #000000;
}
div.halfalpha {
  background-color: rgba(0, 0, 0, 0.5);
  color: #000000;
}
``` 

### **4. Rounded Corners: border-radius**

```css
border-radius: 25px;
```

### **5 Drop Shadows**

```css
box-shadow: 2px 5px 0 0 rgba(72,72,72,1);
```

### **6. Text Shadow**

```css
text-shadow: topOffset leftOffset blurRadius color;
```

### **7. Linear Gradients**

```css
Syntax: background: linear-gradient(direction, color-stop1, color-stop2, ...);
/* Example */   
#grad {
  background: linear-gradient(to right, red , yellow);
}
```

### **8. Radial Gradients**

```css
Syntax : background: radial-gradient(shape size at position, start-color, ..., last-color);
/* Example */      
#grad {
  background: radial-gradient(red, yellow, green);
}//Default       
#grad {
  background: radial-gradient(circle, red, yellow, green);
}//Circle
```

### **9. Multiple Background Images**

In CSS3, there\'s no need to include an element for every background image; it provides us with the ability to add more than one background image to any element, even to pseudo-elements.

```css
background-image:
url(firstImage.jpg),
url(secondImage.gif),
url(thirdImage.png);
```

## ***What are the css selectors?***

A CSS selector is the part of a CSS rule set that actually selects the content you want to style.

**1. Universal Selector**: The universal selector works like a wild card character, selecting all elements on a page. Every HTML page is built on content placed within HTML tags. Each set of tags represents an element on the page.

```css
* {
   color: green;
   font-size: 20px;
   line-height: 25px;
}
```

**2. Element Type Selector**: This selector match one or more HTML elements of the same name.

```css
ul {
   list-style: none;
   border: solid 1px #ccc;
}
```

```html
<ul>
  <li>Fish</li>
  <li>Apples</li>
  <li>Cheese</li>
</ul>

<div class="example">
  <p>Example paragraph text.</p>
</div>

<ul>
  <li>Water</li>
  <li>Juice</li>
  <li>Maple Syrup</li>
</ul>
```

**3. ID Selector**: This selector matches any HTML element that has an ID attribute with the same value as that of the selector.

```css
#container {
   width: 960px;
   margin: 0 auto;
}
```

```html
<div id="container"></div>
```

**4. Class Selector**: The class selector also matches all elements on the page that have their class attribute set to the same value as the class.

```css
.box {
   padding: 20px;
   margin: 10px;
   width: 240px;
}
```

```html
<div class="box"></div>
```

**5. Descendant Combinator**: The descendant selector or, more accurately, the descendant combinator lets you combine two or more selectors so you can be more specific in your selection method.

```css
#container .box {
   float: left;
   padding-bottom: 15px;
}
```

This declaration block will apply to all elements that have a class of box that are inside an element with an ID of `container`. It’s worth noting that the `.box` element doesn’t have to be an immediate child: there could be another element wrapping `.box`, and the styles would still apply.

```html
<div id="container">
  <div class="box"></div>

  <div class="box-2"></div>
</div>

<div class="box"></div>
```

**6. Child Combinator**: A selector that uses the child combinator is similar to a selector that uses a descendant combinator, except it only targets immediate child elements.

```css
#container > .box {
   float: left;
   padding-bottom: 15px;
}
```

The selector will match all elements that have a class of `box` and that are immediate children of the `#container` element. That means, unlike the descendant combinator, there can’t be another element wrapping `.box`—it has to be a direct child element.

```html
<div id="container">
  <div class="box"></div>

  <div>
    <div class="box"></div>
  </div>
</div>
```

**7. General Sibling Combinator**: A selector that uses a general sibling combinator matches elements based on sibling relationships. The selected elements are beside each other in the HTML.

```css
h2 ~ p {
   margin-bottom: 20px;
}
```

In this example, all paragraph elements (`<p>`) will be styled with the specified rules, but only if they are siblings of `<h2>` elements. There could be other elements in between the `<h2>` and `<p>`, and the styles would still apply.

```html
<h2>Title</h2>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<div class="box">
  <p>Paragraph example.</p>
</div>
```

**8. Adjacent Sibling Combinator**: A selector that uses the adjacent sibling combinator uses the plus symbol (+), and is almost the same as the general sibling selector. The difference is that the targeted element must be an immediate sibling, not just a general sibling.

```css
p + p {
   text-indent: 1.5em;
   margin-bottom: 0;
}
```

In this example will apply the specified styles only to paragraph elements that immediately follow other paragraph elements. This means the first paragraph element on a page would not receive these styles. Also, if another element appeared between two paragraphs, the second paragraph of the two wouldn’t have the styles applied.

```html
<h2>Title</h2>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<p>Paragraph example.</p>

<div class="box">
  <p>Paragraph example.</p>
  <p>Paragraph example.</p>
</div>
```

**9. Attribute Selector**: The attribute selector targets elements based on the presence and/or value of HTML attributes, and is declared using square brackets

```css
input[type="text"] {
   background-color: #444;
   width: 200px;
}
```

```html
<input type="text">
```

The attribute selector can also be declared using just the attribute itself, with no value, like this:

```css
input[type] {
   background-color: #444;
   width: 200px;
}
```

**10. Pseudo-class**: A pseudo-class uses a colon character to identify a pseudo-state that an element might be in—for example, the state of being hovered, or the state of being activated.

```css
a:hover {
   color: red;
}
```

**11. Pseudo-element**: A CSS pseudo-element is used to style specified parts of an element. For example, it can be used to:

* Style the first letter, or line, of an element
* Insert content before, or after, the content of an element

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p::first-line {
        color: #ff0000;
        font-variant: small-caps;
      }

      p::first-letter {
        color: #ff0000;
        font-size: xx-large;
      }

      h1::before {
        content: url(smiley.gif);
      }

      h1::after {
        content: url(smiley.gif);
      }

      ::selection {
        color: red;
        background: yellow;
      }
    </style>
  </head>
<body>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,
  <h1>when an unknown printer took a galley of type and scrambled it to make a
  type specimen book.<h1></p>
</body>
</html>
```

**Live Demo**: [CSS Selectors](https://learning-zone.github.io/css-interview-questions/assets/files/selector.html)

**[⬆ Back to Top](#table-of-contents)**

## ***What is the difference between Pseudo-classes and pseudo-elements?***

A pseudo-class is a selector that assists in the selection of something that cannot be expressed by a simple selector, for example `:hover`. A pseudo-element however allows us to create items that do not normally exist in the document tree, for example `::after`.

**Pseudo-classes**

Pseudo-classes select regular elements but under certain conditions, like when their position relative to siblings or when they’re under a particular state. Here is a list of pseudo-classes in CSS3:

**a) Dynamic pseudo-classes**

* :link
* :visited
* :hover
* :active
* :focus

**b) UI element states pseudo-classes**

* :enabled
* :disabled
* :checked

**c) Structural pseudo-classes**

* :first-child
* :nth-child(n)
* :nth-last-child(n)
* :nth-of-type(n)
* :nth-last-of-type(n)
* :last-child
* :first-of-type
* :last-of-type
* :only-child
* :only-of-type
* :root
* :empty

**d) Other pseudo-classes**

:not(x)
:target
:lang(language)


**Pseudo-elements**

Pseudo-elements effectively create new elements that are not specified in the markup of the document and can be manipulated much like a regular element.

* ::before
* ::after
* ::first-letter
* ::first-line
* ::selection

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## ***What is the difference between class selectors and id selectors?***

In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”). The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.
```css
#top {
    background-color: #ccc;
    padding: 20px
}

.intro {
    color: red;
    font-weight: bold;
}
```

```html
<div id="top">

<h1>Chocolate curry</h1>
<p class="intro">This is my recipe for making curry purely with chocolate</p>
<p class="intro">Mmm mm mmmmm</p>

</div>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## ***What is the difference between the “nth-child()” and “nth-of-type()” selectors?***

The `nth-child()` pseudo-class is used to match an element based on a number, which represents the element\'s position amongst it\'s siblings. More specifically, the number represents the number of siblings that exist before the element in the document tree (minus 1).

**Example**

```css
.example :nth-child(5) { background: #ffdb3a; }
```

```html
<div class="example">
	<p>This is a <em>paragraph</em>.</p>
	<p>This is a <em>paragraph</em>.</p>
	<p>This is a <em>paragraph</em>.</p>
	<div>This is a <em>divider</em>.</div>
	<div>This is a <em>divider</em>.</div> <!-- Element to select -->
	<p>This is a <em>paragraph</em>.</p>
	<p>This is a <em>paragraph</em>.</p>
	<div>This is a <em>divider</em>.</div>
	<p>This is a <em>paragraph</em>.</p>
	<div>This is a <em>divider</em>.</div>
</div>
```

The `nth-of-type()` pseudo-class, like nth-child(), is used to match an element based on a number. This number, however, represents the element's position within only those of its siblings that are of the same element type.

This number can also be expressed as a function, or using the keywords even or odd.

```css
.example p:nth-of-type(odd) { background: #ffdb3a; }
```

```html
<div class="example">
	<p>This is a <em>paragraph</em>.</p> <!-- Element to select -->
	<p>This is a <em>paragraph</em>.</p>
	<p>This is a <em>paragraph</em>.</p> <!-- Element to select -->
	<div>This is a <em>divider</em>.</div>
	<div>This is a <em>divider</em>.</div> 
	<p>This is a <em>paragraph</em>.</p>
	<p>This is a <em>paragraph</em>.</p> <!-- Element to select -->
	<div>This is a <em>divider</em>.</div>
	<p>This is a <em>paragraph</em>.</p>
	<div>This is a <em>divider</em>.</div>
</div>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## ***Explain CSS grid layout with example***

CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives. Like tables, grid layout enables us to align elements into columns and rows.

## ***What is CSS flexbox?***

The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning. Flexbox makes it simple to align items vertically and horizontally using rows and columns. Items will "flex" to different sizes to fill the space.

Before the Flexbox Layout module, there were four layout modes:

* **Block**, for sections in a webpage
* **Inline**, for text
* **Table**, for two-dimensional table data
* **Positioned**, for explicit position of an element

### **Flex Container**

An area of a document laid out using flexbox is called a **flex container**. To create a flex container, we set the value of the area\'s container\'s `display` property to `flex` or `inline-flex`. As soon as we do this the direct children of that container become **flex items**.

### **Flexbox Terminology**

<p align="center">
  <img src="img/flex-terminology.png" alt="Flexbox Terminology" width="500px;" />
</p>

### **The CSS Flexbox Container Properties**

|Property        |Values                                                            |
|----------------|------------------------------------------------------------------|
|display:        |flexbox, inline-flex;|
|flex-direction: |row, row-reverse, column, column-reverse;|
|flex-wrap:      |nowrap, wrap, wrap-reverse;|
|flex-flow:      |<‘flex-direction’>, <‘flex-wrap’>|
|justify-content:|flex-start, flex-end, center, space-between, space-around;|
|align-items:    |flex-start, flex-end, center, baseline, stretch;|
|align-content:  |flex-start, flex-end, center, space-between, space-around, stretch;|

### **The CSS Flexbox Properties**

|Property        |Values                                                  |
|----------------|--------------------------------------------------------|
|order:          |`<integer>`;                        |
|flex-grow:      |`<number>`; /* default 0 */         |
|flex-shrink:    |`<number>`; /* default 1 */         |
|flex-basis:     |`<length>`, auto; /* default auto */|
|flex:           |none, [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]|
|align-self:     |auto, flex-start, flex-end, center, baseline, stretch;|

**Example**

```html
<!DOCTYPE html>
<html>
<head>
    <title>The flex-direction Property</title>
    <style>
        .flex-container {
            display: flex;
            flex-direction: column;
            background-color: DodgerBlue;
        }

        .flex-container>div {
            background-color: #f1f1f1;
            width: 100px;
            margin: 10px;
            text-align: center;
            line-height: 75px;
            font-size: 30px;
        }
    </style>
</head>
<body>
    <h1>The flex-direction Property</h1>
    <p>The "flex-direction: column;" stacks the flex items vertically (from top to bottom):</p>

    <div class="flex-container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
</body>
</html>
```

**Live Demo**: [flex-direction Property](https://learning-zone.github.io/css-interview-questions/assets/files/flexbox.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## ***When to use css grid and flexbox?***

* CSS Grid Layout is a **two-dimensional** system, meaning it can handle both columns and rows, unlike flexbox which is largely a **one-dimensional** system (either in a column or a row).
* A core difference between CSS Grid and Flexbox is that — CSS Grid’s approach is **layout-first** while Flexbox’ approach is **content-first**. If you are well aware of your content before making layout, then blindly opt for Flexbox and if not, opt for CSS Grid.
* Flexbox layout is most appropriate to the components of an application (as most of them are fundamentally linear), and **small-scale** layouts, while the Grid layout is intended for **larger-scale** layouts which aren’t linear in their design.
* If you only need to define a layout as a row or a column, then you probably need flexbox. If you want to define a grid and fit content into it in two dimensions — you need the grid.

<p align="center">
  <img src="img/flex.png" alt="One-Dimensional" />
  <img src="img/grid.png" alt="Two-Dimensional" />
</p>

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Grid vs Flexbox Layout</title>
  </head>
  <style>
    /* Grid layout */
    .row {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: #2196f3;
        padding: 5px;
    }

    .col-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 10px;
        font-size: 30px;
        text-align: center;
    }

    /* Flexbox layout */
    .wrapper {
        border: 2px solid #f76707;
        border-radius: 5px;
        background-color: #fff4e6;
    }

    .wrapper > div {
        border: 2px solid #ffa94d;
        border-radius: 5px;
        background-color: #ffd8a8;
        padding: 1em;
        color: #d9480f;
    }

    .wrapper {
        display: flex;
        width: 500px;
        flex-wrap: wrap;
    }

    .wrapper > div {
        flex: 1 1 150px;
    }
  </style>
  <body>
    <p><h1>Grid Layout Example<hr/></h1></p>
    <div class="row">
        <div class="col-item">Column - 1</div>
        <div class="col-item">Column - 2</div>
        <div class="col-item">Column - 3</div>
        <div class="col-item">Column - 1</div>
        <div class="col-item">Column - 2</div>
        <div class="col-item">Column - 3</div>
        <div class="col-item">Column - 1</div>
        <div class="col-item">Column - 2</div>
        <div class="col-item">Column - 3</div>
    </div>

    <p><h1><br/>Flexbox Layout Example<hr/></h1></p>
    <div class="wrapper">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </div>
  </body>
</html>
```

**Live Demo**: [CSS Grid and flexbox](https://learning-zone.github.io/css-interview-questions/assets/files/grid-flexbox-layout.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## ***What is CSS BEM?***

The BEM (**Block Element Modifier**) methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. A Block is a standalone component that is reusable across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.

```css
/* block component */
.block {
}

/* element */
.block__element {
}

/* modifier */
.block__element--modifier {
}
```

**Example**

```css
.button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--state-danger {
	color: #900;
}
```

```html
<button class="button">
	Normal button
</button>
<button class="button button--state-success">
	Success button
</button>
<button class="button button--state-danger">
	Danger button
</button>
```

**Benefits**

* **Modularity**: Block styles are never dependent on other elements on a page, so you will never experience problems from cascading.
* **Reusability**: Composing independent blocks in different ways, and reusing them intelligently, reduces the amount of CSS code that you will have to maintain.
* **Structure**: BEM methodology gives your CSS code a solid structure that remains simple and easy to understand.

**[⬆ Back to Top](#table-of-contents)**

## ***How do you specify units in the CSS?***

There are various units in CSS to express the measurement and length. A CSS unit is used to determine the property size, which we set for an element or its content. The units in CSS are required to define the measurement such as margin: 20px; in which the px (or pixel) is the CSS unit. They are used to set margin, padding, lengths, and so on.

The length unit in CSS is of two types:

* Absolute length units.
* Relative length units.

### **Absolute length units**

The following are all absolute length units — they are not relative to anything else, and are generally considered to always be the same size.

|Unit	        |Name	                |Equivalent to        |
|-------------|---------------------|---------------------|
|cm	          |Centimeters	        |1cm = 38px = 25/64in|
|mm	          |Millimeters	        |1mm = 1/10th of 1cm|
|Q	          |Quarter-millimeters	|1Q = 1/40th of 1cm|
|in	          |Inches	              |1in = 2.54cm = 96px|
|pc	          |Picas	              |1pc = 1/6th of 1in|
|pt	          |Points	              |1pt = 1/72th of 1in|
|px	          |Pixels	              |1px = 1/96th of 1in|

### **Relative length units**

Relative length units specify a length relative to another length property. Relative length units scale better between different rendering medium.

|Unit	           |Relative to                                   |
|----------------|----------------------------------------------|
|em	             |Font size of the parent, in the case of typographical properties like font-size, and font size of the element itself, in the case of other properties like width.|
|ex	             |x-height of the element's font.|
|ch	             |The advance measure (width) of the glyph "0" of the element's font.|
|rem	           |Font size of the root element.|
|lh	             |Line height of the element.|
|vw	             |1% of the viewport's width.|
|vh	             |1% of the viewport's height.|
|vmin	           |1% of the viewport's smaller dimension.|
|vmax	           |1% of the viewport's larger dimension.|

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
      <title>CSS Units</title>
    <style>
      .wrapper {
        font-size: 1em;
      }
      
      .px {
        width: 200px;
      }
      
      .vw {
        width: 10vw;
      }
      
      .em {
        width: 10em;
      }
    </style>
  </head>
<body>
  <div class="wrapper">
    <div class="box px">I am 200px wide</div>
    <div class="box vw">I am 10vw wide</div>
    <div class="box em">I am 10em wide</div>
  </div>
</body>
</html>
```

**Live Demo**: [CSS Units](https://learning-zone.github.io/css-interview-questions/assets/files/css-units.html)

  **[⬆ Back to Top](#table-of-contents)**

## ***Explain the CSS “box model” and the layout components that it consists of***

The CSS box model is a rectangular layout paradigm for HTML elements that consists of the following:

* **Content**: The content of the box, where text and images appear
* **Padding**: A transparent area surrounding the content (i.e., the amount of space between the border and the content)
* **Border**: A border surrounding the padding (if any) and content
* **Margin**: A transparent area surrounding the border (i.e., the amount of space between the border and any neighboring elements)

<p align="center">
  <img src="img/box-model.png" alt="CSS Box Model" width="300px;" />
</p>

The size of the box itself is calculated like this:

|Property |Total                                                             |
|---------|------------------------------------------------------------------|
|Width    |width + padding-left + padding-right + border-left + border-right |
|Height   |height + padding-top + padding-bottom + border-top + border-bottom|

**Example**

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Box Model</title>
  <style>
    div {
      background-color: lightgrey;
      width: 300px;
      border: 10px solid rgb(3, 141, 233);
      padding: 50px;
      margin: 20px;
    }
  </style>
</head>
<body>
  <h2>CSS Box Model</h2>

  <p>The CSS box model is essentially a box that wraps around every HTML element. 
    It consists of: borders, padding, margins, and the actual content.</p>

  <div>This text is the content of the box. We have added a 50px padding, 20px margin and a 10px blue 
    border.</div>
</body>
</html>
```

**Live Demo**: [CSS Box Model](https://learning-zone.github.io/css-interview-questions/assets/files/boxmodel.html)

  **[⬆ Back to Top](#table-of-contents)**

## ***What is the difference between RGBa, HEX and HSLa?***

* **RGB** (Red/Green/Blue) is a color model.

```css
p {
  color: rgba(37, 84, 127, 1);
}
```

* **HEX (Hexadecimal color values)**

```css
p {
  color: #25547f;
}
```

* **HSLa (Hue Saturation Lightness alpha)**

```css
p {
  color: hsla(209, 55%, 32%, 1);
}
```

  **[⬆ Back to Top](#table-of-contents)**

## ***What is CSS preprocessor?***

Pre-processors extend CSS with variables, operators, interpolations, functions, mixins and many more other usable assets. After development, these specific files are compiled into regular CSS that any browser can understand. Pre-processor help writing reusable, easily maintainable and extensible codes in CSS.

**CSS preprocessors**

* SASS (SCSS)
* LESS
* Stylus
* PostCSS

**Advantages:**

* CSS is made more maintainable.
* Easy to write nested selectors.
* Variables for consistent theming. Can share theme files across different projects.
* Mixins to generate repeated CSS.
* Splitting your code into multiple files. CSS files can be split up too but doing so will require an HTTP request to download each CSS file.

  **[⬆ Back to Top](#table-of-contents)**

## ***What are media queries?***

Media queries are useful when you want to modify your site or app depending on a device\'s general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width). It uses the @media rule to include a block of CSS properties only if a certain condition is true.

**Media Types**

|Sl.No| Value | Description          |
|------|-------|---------------------|
|  01. |all	   |Default. Used for all media type devices|
|  02. |print	 |Used for printers|
|  03. |screen |Used for computer screens, tablets, smart-phones etc.|
|  04. |speech |Used for screenreaders that "reads" the page out loud|

**Media Features**

|Sl.No | Value           | Description          |
|------|-----------------|----------------------|  
| 01.  |any-hover	       | Does any available input mechanism allow the user to hover over elements? |
| 02.  |any-pointer	     | Is any available input mechanism a pointing device, and if so, how accurate is it? |
| 03.  |aspect-ratio	   | The ratio between the width and the height of the viewport|
| 04.  |color	           | The number of bits per color component for the output device|
| 05.  |color-gamut	     | The approximate range of colors that are supported by the user agent and output device|
| 06.  |color-index	     | The number of colors the device can display|
| 07.  |grid	           | Whether the device is a grid or bitmap|
| 08.  |height	         | The viewport height|
| 09.  |hover	           | Does the primary input mechanism allow the user to hover over elements? |
| 10.  |inverted-colors	 | Is the browser or underlying OS inverting colors? |
| 11.  |light-level	     | Current ambient light level |
| 12.  |max-aspect-ratio |	The maximum ratio between the width and the height of the display area|
| 13.  |max-color	       | The maximum number of bits per color component for the output device|
| 14.  |max-color-index	 | The maximum number of colors the device can display|
| 15.  |max-height	     | The maximum height of the display area, such as a browser window|
| 16.  |max-monochrome	 | The maximum number of bits per "color" on a monochrome (greyscale) device|
| 17.  |max-resolution	 | The maximum resolution of the device, using dpi or dpcm|
| 18.  |max-width	       | The maximum width of the display area, such as a browser window|
| 19.  |min-aspect-ratio |	The minimum ratio between the width and the height of the display area|
| 20.  |min-color	       | The minimum number of bits per color component for the output device|
| 21.  |min-color-index	 | The minimum number of colors the device can display|
| 22.  |min-height	     | The minimum height of the display area, such as a browser window|
| 23.  |min-monochrome	 | The minimum number of bits per "color" on a monochrome (greyscale) device|
| 24.  |min-resolution	 | The minimum resolution of the device, using dpi or dpcm|
| 25.  |min-width	       | The minimum width of the display area, such as a browser window|
| 26.  |monochrome	     | The number of bits per "color" on a monochrome (greyscale) device|
| 27.  |orientation	     | The orientation of the viewport (landscape or portrait mode)|
| 28.  |overflow-block	 | How does the output device handle content that overflows the viewport along the block axis| 
| 29.  |overflow-inline	 | Can content that overflows the viewport along the inline axis be scrolled |
| 30.  |pointer	         | Is the primary input mechanism a pointing device, and if so, how accurate is it? |
| 31.  |resolution	     | The resolution of the output device, using dpi or dpcm|
| 32.  |scan	           | The scanning process of the output device|
| 33.  |scripting	       | Is scripting (e.g. JavaScript) available? |
| 34.  |update	         | How quickly can the output device modify the appearance of the content |
| 35.  |width	           | The viewport width |


**Example**:

```css
@media print {
  body { font-size: 10pt; }
}

@media screen {
  body { font-size: 13px; }
}

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* Nested within another conditional at-rule */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) { }

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) { }

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) { }

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) { }

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) { }
```

  **[⬆ Back to Top](#table-of-contents)**

## ***What does box-sizing do?***

* Make every element in the document include the padding and border in the element\'s inner dimensions;
  making it easier to reason about the layout of elements on the page.
* By default, elements have `box-sizing: content-box` applied, and only the content size is being accounted for.
* `box-sizing: border-box` changes how the `width` and `height` of elements are being calculated, `border` and `padding` are also being included in the calculation.
* The `height` of an element is now calculated by the content\'s `height` + vertical `padding` + vertical `border` width.
* The `width` of an element is now calculated by the content\'s `width` + horizontal `padding` + horizontal `border` width.
* Taking into account `padding`s and `border`s as part of our box model resonates better with how designers actually imagine content in grids.


  **[⬆ Back to Top](#table-of-contents)**

## ***Explain some pros and cons for CSS animations versus JavaScript animations***

Regarding optimization and responsiveness the debate bounces back and forth but, the concept is:

* CSS animations allows the browser to choose where the animation processing is done, CPU or the GPU. (Central or Graphics Processing Unit)

* That said, adding many layers to a document will eventually have a performance hit.

* JS animation means more code for the user to download and for the developer to maintain.

* Applying multiple animation types on an element is harder with CSS since all transforming power is in one property transform

* CSS animations being declarative are not programmable therefore limited in capability.

**[⬆ Back to Top](#table-of-contents)**


