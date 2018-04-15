---
layout: blog
title: "Hue Control Refactor"
description: "The story of my 8 hour coding spree"
mydate: "April 15th, 2018"
---
<a href="https://github.com/danwbyrne/hueCtrl">

In a spurt of the moment decision I decided to revisit an old program of mine called hueCtrl. When I originally wrote this in during a 8+ hour code fest during my sophomore year of college you could almost smell the Data Structures and Algorithms course in my work. My python classes looked like straight rips from a C++ Header file and I overcomplicated issues that I didn't need to. The program was clunky, lagged constantly, and was not well optimized AT ALL.

In a similar manner to how I wrote the original program I got a hair up my ass to work on a remastered edition for 6-8 hours last night until about 4AM. In that short amount of time I have already passed up the old edition by leaps and bounds. Its faster, the code is sleaker, and most importantly it looks SICK when it runs. Some of the important improvements I've made are:

The upgrade from python 2.7.x to python 3.x.x. While I was adamant on staying on 2.7.x as long as I could, it is finally time I left my stubborn ways and upgrade to the future of python.

Better, quicker, cross-platform screen capturing. I've abandoned an old library that I used for screencapturing for a few reasons. First and foremost I've found a faster way to do it, but also the new library I use for screencapturing, MSS, allows for cross-platform use.

Abandoned an old phillips hue bridge library. While I tried to use the 3.x.x version of the library originally I immediately had issues with it and decided to rewrite for the uses that I need. This additionally gives me more experience working with APIs directly which I have desperately need.

Going forward on this project I am going to implement some threading to optimize the sync between light and screen, as well as a GUI for setup and location based capturing.

Keep an eye out for this HOT program.
    -Dan