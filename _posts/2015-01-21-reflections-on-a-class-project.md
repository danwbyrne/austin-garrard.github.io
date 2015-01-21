---
layout: blog
title: "Reflections on a Class Project"
description: "CSCE 462 @ TAMU - Final Project"
mydate: "January 21, 2015"
tags:
- misc
---

![PCB]({{ site.url }}/assets/PCB.jpg)

This is a prototype circuit I constructed for a class project. It takes input from an Arduino microcontroller and outputs images to an LED display. You could think of the circuit as a graphics card, though someone actually involved in graphics would probably be offended by the comparison. The main thing that the circuit does is multiplexing: controlling many outputs with few inputs.

Our LED display consists of 512 LED’s. By our own design specification, each LED in the display should be individually controllable. This seems hunky-dory until we take a look at our controller, which has at most 20 individual outputs. We could search for another controller, but as it turns out, few such devices ship with an arbitrarily high number of outputs. The solution to this multiplexing problem is the pictured circuit. It uses 6 inputs to individually control all 512 LED’s in the display. The really cool part is that it works!

![PCB Underside]({{ site.url }}/assets/PCB_underside.jpg)

The less cool part is how it works. Even less cool is my haphazard implementation. The nervous system of my circuit, if you will, exists on the underside of the seemingly placid prototyping board. It might look impressive (I certainly thought so when I was making it), but my professor assures me there are many abhorrences within. To my credit, the entire thing was premeditated (I had a really nasty diagram at hand when constructing the thing), the wires are color-coded accordingly, and the integrity of every solder joint was verified. 

For those versed in digital circuitry, it uses 8 shift registers to output the signal for the LED’s, and 1 shift register to select which LED’s to send the signal to via 8 MOSFET’s. The Arduino code and LED layout make it appear as if a signal is constantly being sent to all the LED’s, though only 64 at a time are being lit up on a ~500Hz cycle. 

The layout of the circuit on the board was actually done in this upside-down view. The nice-looking U-formation of chips was meant to give the easiest access to the inputs and power lines, as well as to minimize the amount of solder connections required. Still, I ended up with an awful mess of wires and around 150 solder connections. If you’re not extremely gentle in handling the circuit, it will get quite angry with you and refuse to work.

![Solder Test]({{ site.url }}/assets/solder_test.jpg)

The road to the finished product was long and fraught with headaches, from engineering conundrums as well as from solder smoke. Above is a picture of two early attempts at implementing my design. If you’re savvy, you’ll see the pattern that is present in the finished circuit. The left attempt is supposedly the “proper” way to go about making lines on a PCB, but my soldering wasn’t up to snuff and the lines didn’t deliver the signal all the way through. I found it was easier to use open wires and simply wrap the connective wires around the line. This is an awful practice but I was stressed for time and wasn’t getting results otherwise.

I actually spent most of my time in the lab practicing constructing the circuit. I consumed 3 prototyping boards in total, the first being a practice run all the way through, the second starting as a formal attempt but becoming the pictured development of the open-wire approach, and the third being the charm. I had soldered perhaps twice in my life before this project, and it being a large part of my contribution, I spent a lot of time soldering discarded components together for practice. 

I’ve never been much of a hardware guy, so this project was a big learning experience for me. I went from rendering boards and components useless by burning them with the soldering iron to being the go-to guy when a joint wouldn’t cooperate. Going in I thought I knew the concepts of common ground and power consumption, but it took my almost destroying our Arduino and a lot of painful debugging to understand these elementary principles in practice. 

We worked on this project for about 3 weeks. The final result was pretty underwhelming. The LED’s we purchased under our limited budget were not ideal for the application, and so the display appeared dim and unimpressive. Also, we didn’t start early enough and the final stages of combining our work were rushed, and we made many mistakes which led to a good portion of the LED’s not being functional. It certainly would not have done well as a prototype for a potential customer, which was the goal of the project, but it certainly worked. Not particularly well, but it did what we meant it to. 

![drawing]({{ site.url }}/assets/3dmatrix-general-layout.png)

I’ve done very little in school that I’ve actually been proud of, but my multiplexing circuit has given me something to hold up as an example of my growing engineering skill. I started from this humble little drawing, hardly knowing how the components I was planning to use worked, and ended up with a working circuit that was honestly the most complete, well-designed, and best-implemented part of our project. I can say with certainty that I learned a lot about electronics, from the design as well as prototyping perspectives, something that years of electronics classes have failed to impart on me.

If you’re looking to pick up technical skills, particularly relating to computers and electronics, the best way to learn is to dive in. Obviously formal background will be beneficial, but engaging in your own endeavor and seeing it through as best you can will teach you more than any lecture or tutorial. It doesn’t have to be complex or even useful, though the latter helps. The main thing is to not give yourself enough money or time to do it completely right. True lessons are never learned at leisure. 

