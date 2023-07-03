---
templateKey: blog-post
title: Hollywood principle, PubSub, Observer pattern, Observables and other
  scary terms.
date: 2023-07-03T17:29:54.811Z
description: "\"Don't call us we will call you\""
featuredpost: true
featuredimage: /img/firefly-generated-banner-learning-technology.jpg
video: http://localhost:8000/admin/#/collections/blog/entries/2023-07-03-what-is-an-interface
tags:
  - programming
  - coding
  - design-patterns
---
![Learning software design patterns](/img/firefly-generated-banner-learning-technology.jpg)







If ever in your life anyone asked you or used the terms mentioned above and if you felt uncomfortable the post is for you.  If you have ever coded anything in JavaScript and if you understand what a callback is,  then you will laugh at those people who mere use these terms and scared the shit out of you.  Some of these guys will not even have courtesy to even let you know that PubSub = publisher & subscriber.



These are all the heavy weight terms and the problem is when people were publishing books about these concepts the choice of programming languages were not as much as that we have today. So, time and again object orient principles and design pattern examples provided always got associated to the FATSO JAVA and most of us who by choice did not picked up JAVA did not take the path to read and understand them in the traditional bookish way.

I believe that somehow JavaScript enforce you to  think in the right direction naturally and you have been already using observer pattern either in a crude way or in the polished way as it is supposed to be with a list of callbacks.


In the simplest explanation, the concept is that a push is a better and preferred choice then pull if you have an option to choose one over another in your code.
Now, call is Observer or Subscriber or whatever you want to honestly it's just a matter of managing a list of callbacks that you have to call upon occurrence of certain events.
 
The only caution here is if your callbacks need certain data to be passed the method signature should remain consistent because possibly you will be looping over the list of callbacks and dynamically calling each function so you should not try to send different parameter to each function call, all your subscribers should receive the same set of data.
 
If you need to send different types of data even on the same event consider maintaining two lists.

Really this a very simple concept for any JavaScript developer due to the fact that callbacks are a very important concept in JavaScript.


The  reason I am not sharing any code examples with these concepts is due to the belief that you must absorb them purely as concepts that can be applied anywhere in any language.
Some languages you will have some pre-built libraries or constructs to implement them faster but should be doable in all the languages.

<!--EndFragment-->