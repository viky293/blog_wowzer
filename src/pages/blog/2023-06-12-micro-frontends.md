---
templateKey: blog-post
title: Micro Front-end / Services apeing the back-end
date: 2023-06-12T19:53:41.701Z
description: 
featuredpost: false
featuredimage: /img/firefly-micro-frontends-for-web-applications-95893.jpg
tags:
  - frontend
  - microfrontends
  - webapplications
---
![Adobe firefly AI generated image to represent micro frontend application](/img/firefly-micro-frontends-for-web-applications-95893.jpg)

It’s a new jargon and new lingo, we have been doing this from the time we have frames not just iFrames. I believe the jargon is heavily influenced with the concept of domain driven design which is not a new thing is you have been ever involved with the back-end development at scale. A piece of caution I would say Micro front-end architecture makes sense for bigger teams and considerably gigantic projects because the real value it draws is by easing out management of teams and resources rather than solving a real technical challenge. If you have ever come across the micro services at the back-end, by this time you would have already understood what this particular topic is about. If we look back in time when SPA was relatively newer term and while migrating an existing application the most common advise you would have received would have been “Start migrating by replacing the small parts of your front-end with a React,Angular or Vue App” in my opinion that was the first time any would have written a micro front-end and probably without even knowing this term.\
\
**What’s the FAD about ?**\
– Leverage React, Angular & Vue in your code base keep every enthusiastic developer happy without being intrusive\
-Split the Apps between teams and let them develop for specific domains e.g. “Payments Team”, “User On-boarding Team” & “Reporting & Metric” and a “Core / Platform Services Team”\
\
Each of these teams can have specific focus like platform/core team can take care of web performance, contracts that each MFE should implement or follow whereas your payments team could precisely focus on the best checkout experiences.\
\
**Few ways to implement:-**\
– iFrame (Say Yucckk!! or whatever but it works, I won’t do it though!!)\
– Use Nginx and route to a specific app based on a specific route (Not so cool, your MFE can be independently deployed to a container)\
– Use a host framework use something like [“Single-SPA”](https://web.archive.org/web/20201217142826/https://single-spa.js.org/)

#### Who it is for ?

As this comes with overwhelming management chores, a team that wants to be hyper delivery focused this is going to add a lot of friction to begin with. The real value is for organization who are in the growth phase or are already giants and have ability to setup teams specific to the domains. It would make a lot of difference when your product grows in multiple domains.