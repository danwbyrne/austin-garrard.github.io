---
layout: blog
title: "Magic Boxes"
description: "Technological paradigms versus alternative medicine"
mydate: "October 1, 2014"
tags:
- essay
---

<div class="description">A work in progress</div>

### The Magic Box

The novelty of modern technology is largely due to the idea of the “magic box”: a device or component that you know behaves a certain way, and can use in that fashion quite reliably without knowing what goes on inside the box. For example, my Nikon D40 stores the pictures it takes on a removable SD card. I can use any SD card, doesn’t matter how much storage it has or who made it, as long as it has the same external functionality that I and my devices expect from an SD card.

Your personal computer is quite the magic box. These days, PC’s are magic boxes that are largely comprised of magic boxes themselves. In theory, you can swap out the components of your computer such as the RAM or the hard drive or the CPU for any other matching component, regardless of manufacturer or internal specification. That’s because most such devices in this day and age behave consistently. Consumers have grown attached to the standard definitions of what a “CPU” does, and a company like Intel would be crazy to not fit their devices to that standard. It’s the same with my Nikon; it could be a Canon or any number of brands or models, as long as it is a “camera” its end-user operation will be largely the same.

![Mac OS X structure](https://developer.apple.com/library/mac/documentation/Darwin/Conceptual/KernelProgramming/art/osxarchitecture.gif)

Software is rife with magic boxes. Above is a diagram of the internal structure of Mac OS X. What you should take from it is the division of the “Kernel Environment” into 2 blocks labeled “Mach” and “BSD”. Mach is a kernel, essentially a computer program that handles low-level computing tasks. BSD is a more general term which refers to a family of operating systems. What the diagram shows is that Mac OS X is, to an extent, grafted together from existing components that are known to provide certain functionality. One of the eminent operating systems of our time quite literally had its foundations designed and engineered in the 80’s and 90’s, by groups with no definite relation to Apple. And though these “boxes” were in no way “magical” to the Apple engineers, we can clearly see the pattern of modern technology: sticking different boxes together to achieve something bigger.

Consider websites. Ten to fifteen years ago, most “websites” were comprised of a single computer(called a server) that served static HTML web pages. There wasn’t much difference between viewing a webpage and viewing an email. But now, to address the varied and complex functionality that tech savvy folk thrive on, the single-box setup isn’t sufficient. 

Most people have heard of The Pirate Bay(TPB), a website that aggregates and provides magnet links for BitTorrent files. Although BitTorrent is just a protocol, it is often used to “pirate” content, so at the end of the day, TPB’s purpose is to help people steal copyrighted material. As such, government agencies around the world haven’t taken kindly to the operation. In 2006, the Swedish police raided TPB’s service provider and confiscated their servers and other networking hardware. The website was down for 3 days, and three people associated with the operation were held for questioning.

This was a website that served millions of users from multiple machines; a complex task before government intervention. Luckily for TPB, the functionality of an entire server machine has been abstracted into a neat little magic box we call a “virtual machine”. These days, TPB operates from the cloud, using 21 VM’s provided by two different cloud hosting companies in two different countries. Basically, TPB pays these cloud hosting companies to run the code that they had been running on their confiscated servers. Because the TPB people are smart, and because of the nature of these services, the hosting companies have no real way of even knowing that it’s TPB code they are executing. And if a government entity or copyright holder somehow tracks down the VMs and shuts them down, TPB can just grab their backups move to a new provider. No need to buy a bunch of new server racks and find a new building in a different country!

It’s easy to see how the process of abstracting useful things into “magic boxes” is a fundamental aspect of technological development. Each day we perform what might as well be magic in our normal routines. There’s an interesting parallel to the “magic” of technology that is usually not brought up because it is largely associated with fraud, but really operates on the same principles.

### Spiritist Healers

![Ze Arigo](http://www.d.umn.edu/cla/faculty/troufs/anth4616/images/Arigo_ZeArigo.jpg)

Zé Arigó was what many in the US would call a psychic surgeon. The term usually means someone who practices sleight of hand to feign surgery on sick people in order to convince the patient and observers that healing has been performed. But Arigó’s work in Brazil has been documented extensively by medical professionals, in writing and on video. He claims to be a Spiritist healer, that is, someone who channels the spirit of another, presumably dead, person and allows the spirit to control the channelers body to perform tasks. Arigó is a medium for Dr. Adolf Fritz, supposedly a German doctor. There is no conclusive evidence that Fritz actually existed at any point in time. Many Brazilian mediums claim to channel Fritz, and some actually perform surgery on his behalf.

Arigó is known as the “Surgeon of the Rusty Knife” because of cases where he performed surgery using kitchen utensils. The fact that he had no more than a 3rd grade education adds to this image. Usually he sticks to rudimentary surgical tools such as scalpels and scissors, as do most Spiritist healers. Additionally, he and other Spiritist healers use no anaesthetics or antiseptics when they perform invasive surgery. He healed people through non-invasive and invasive surgery, as well as through novel prescriptions of modern (and sometimes aniquated) medicines. His procedures and prescriptions are reported to have a high success rate, though exact figures are not easy to come by. He practiced for around 20 years and never charged for treatment. Arigó was arrested twice for practicing medicine without a license. The first time he was arrested, he was formally pardoned by then President of Brazil, Juscelino Kubitschek de Oliveira. The second time, he was allowed to continue treating patients while in jail. 

<iframe width="854" height="510" src="//www.youtube.com/embed/EbgJbY4MSek?list=ULEbgJbY4MSek" frameborder="0" allowfullscreen></iframe>

The above videos of Arigó were taken by Andrija Puharich, who is a medical doctor (admittedly, with a dubious reputation), during his 5-year study of the medium’s work. Similar video of Mauricio Malgalhaes, another channeler of Dr. Fritz, has been recorded by Darrell Lynch and discussed in his dissertation. My point here is to illustrate that at least some of the surgeries performed by those claiming to be Spiritist healers are not performing sleight of hand or intentionally committing fraud. Some of these mediums have been publicly proven to be frauds, and there is undoubtedly a larger number of fake channelers than “real” ones. But the acts taken by ad-hoc surgeons described in academic papers from various authors are real.

A growing amount of data says that the results of such acts are real as well. Over a 7-month period, Lynch conducted interviews of 40 patients of Malgalhaes, and of that sample about 50% of the patients claimed their conditions were completely cured, 20% claimed general improvement of the condition, and 30% claimed that nothing changed. All those interviewed had received treatment from medical professionals to no avail before consulting the Spiritist healer.

The efficacy of these types of treatments are still hotly contested by scientists and professionals outside of Brazil. Indeed, it seems almost necessary from a scientific point of view to deny these claims for their basis in the supernatural theories of Allan Kardec and his followers. But to the open-minded, this sort of thing really isn’t all that different from what we see every day, and actually makes quite a bit of sense.

### The Human Body and Healing Practices

In the abstract, a modern electrical device such as a phone or personal computer is not so different from the human body. Both have multiple systems with distinct purposes working together via electronic coordination. People tend not to think of their bodies as electrical devices, but if you introduce a large current to the body or cut one of the main “wires” of the body (ie. the brain stem), the body will cease to function properly, or at all. The human body also inherently stores and manipulates information, whether in the form of genes, muscle memory, or ideas.

![Asimo](http://spectrum.ieee.org/img/asimo_new0-1320726530997.jpg)

So the question now is: what is the interface for the human body? If I can call something a “camera” and expect certain things of it, what should I expect from a person? How do I communicate with or operate this entity (dare I say magic box)?

As people ourselves it seems a ridiculous question to ask; we have been using our own bodies and interacting with others all our lives. But consider the difference between a Christian and a Muslim. Would certain words or phrases or actions be effective with one but not the other? 

There are lots of ways to interact with a person, to get them to act a certain way or do certain things. Religion is one of the most tried and true forms of social control, communication, and personal development. Though not strictly an “interface” in the technological sense of the word, a person’s learned spiritual beliefs can drastically affect their behavior. That is to say, the combination of internal chemical and electrical states that control the various systems in the body can be changed, somewhat deterministically, by external stimuli. For example, a sermon on premarital sex could motivate an individual to respond differently to sexual urges experienced at the sight of a potential partner. Obviously a specific mapping is impractical due to our lack of understanding regarding these specific internal processes and how they ultimately affect outward, interpersonal behavior, but the correlation is intuitive.

In other words, it’s entirely possible to manipulate a person’s behavior. Ask a hypnotist. Hypnotism is highly documented and there are accepted medical definitions for the term, though there is still contest over the particulars. Regardless, hypnotism is a very real aspect of certain entertainment and therapeutic ventures. 

Professionals who practice hypnotism for various purposes have been shown videos of Dr. Fritz performing surgery, and they claim that the patients are hypnotised. This seems to imply that not only can a person’s external behavior be changed through spiritual or hypnotic means, but also that such methods can affect a person’s physiology. Greenfield says:

>With respect to healing, it may be that when an individual enters an altered state of consciousness in response to cues emitted during a religious ritual, thereby entering the culture's alternative reality, the understandings embedded in its sacred knowledge, which often is in the form of images that include what has causal efficacy with respect to illness and its cure, are communicated, as information, that is then transduced from the culture through the mind or psyche of the individual to the autonomic nervous system, the endocrine system, the immune system, etc. It may be that many of the physiological changes reported in the scientific literature that have focused on hypnosis take effect, bringing about so many of the unusual healings...

The idea that the true catalyst for healing effects is the hypnotic state of the patient is supported by the types of preparations some Spiritist healers require before seeing a patient(see below). It can be seen that ritual preparation is a common aspect of not only modern hypnotic techniques, but also ancient shamanic healing procedures that have existed in almost all primitive societies.  The stereotypical role in primitive societies of the spiritual leader of a community as the healer further correlates healing procedures to spiritual states of mind. The phenomenon of the body healing itself exists in modern literature and practices as the placebo effect. The adjustment of medical studies to eek out the true effects of a drug are well known, and it is widely accepted that a person who takes a placebo drug can be demonstrably helped with their condition. 

> 1. the week before
  * Attend the indoctrination meeting.
  * Read the Second Gospel According to Spiritism.
  * Pray and guard your thoughts and actions.
  * Avoid heavy physical exertion.
  * Begin taking passes three days before.
2. on the day of the treatment
  * Stay at rest both physically and mentally.
  * Maintain positive conversations and vibrations.
  * Do not smoke, or drink alcoholic beverages or soft drinks.
  * Do not eat meat, fried foods, fat, canned goods or manioc.
  * Bring a transparent bottle of filtered water.
  * Take a bath in rock salt or white rose petals.
  * Bring a white or red rose.
  * Be at the Center by 5:00 p.m.
3. during the period of convalescence
  * For the following 24 hours, rest and have light meals.
  * Continue the (above) diet for three more days and avoid driving.
  * Drink a cup of fluidified water four times a day.
  * Give thanks to God for the blessings you receive, which are always in proportion with your merit. 

<div class="description">Lynch provides the preparations expected of patients before being treated by Dr. Fritz via Malgalhaes</div>

So there is at least some justification for Spiritist healing in the scientific sphere. “In certain states, the human mind can willingly transduce arbitrary treatments and/or knowledge into bodily responses that successfully mend internal ills” is a cool idea that is strangely intuitive in the context of religion (and for anyone who has successfully used alternative medicine such as acupuncture), but the understanding of how the different systems of the human body interact is lacking to the point where little can be said definitively on the matter.

People are magic boxes. We are made up of many magic boxes inside, but each of those components and each of us behaves, generally, as is expected, even if we don’t yet fully understand what is expected. And as such, we should not push aside methods of utilizing the amazing tool that is the human body, especially when they are demonstrably practical. Spiritist healing has been documented to be effective in curing symptomatic illnesses, chronic pain, and mental conditions, and can be preliminarily justified with current scientific understanding. The human body clearly reacts to this kind of stimulus in a manner which can be classified as “intended”, regardless of the whether spirits from another realm are doing it, or whether it exploits the nature of our internal systems. To immediately shun it because the practitioners claim things that are inherently unscientific goes against the entire spirit of learning and discovery, and adds nothing to our understanding of anything.

### An Interesting Comparison

The modular approach to technology has allowed us to do absurd things, such as operate a high-traffic website dedicated to stealing copyrighted content that is effectively untouchable by the law enforcement of any country, or create a pocket-sized box that can access and display the entirety of humanity’s collective knowledge while pictures of your cat are uploaded to your friends’ pocket-sized boxes. This approach has been applied in a limited way to the human body. Prosthetics have long since ascended beyond science fiction, and artificial organs are becoming more and more common. These procedures are an analog to replacing the memory or the power supply of a computer. But we do far more impressive things with computers that simply switch out the parts, and I think we can do far more impressive things with our bodies.

Take, for example, the virtual machines that enable ThePirateBay to operate. VM’s are used in a vast array of applications from software development and testing to distributed computing. The core idea is to use a “real” computer to run a program which is itself a computer. Depending on the setup of the system, the virtual machine can control the output of the physical machine. The previous example of cloud hosting companies providing ThePirateBay with servers, despite never explicitly authorizing that kind of activity, is a prime example of this. The physical machines that the hosting companies own and operate end up performing the same functions that ThePirateBay’s confiscated machines did. This, and much more, is what virtualization enables.

![VM in action](http://i.kinja-img.com/gawker-media/image/upload/s--FHmUOPXB--/c_fit,fl_progressive,q_80,w_636/18ixp0bsu8p0ijpg.jpg)

<div class="description">Running Ubuntu and Windows XP from Windows 7</div>

So what is the human analog to virtualization? Oddly enough, Spiritist mediums offer the easiest comparison here. Their process is to offer up their physical body to an entity existing in a different plane of reality. If the medium is successful, the spirit will have full control of the medium’s body. Many mediums offer themselves to the spirit of Adolf Fritz, who then performs various healing procedures using the body of the medium. Reports of these spirit-healers in action claim that the medium’s personality and voice change drastically, and that they sometimes talk to no one in particular. They make snap judgements about people conditions and prescribe treatments without deliberation. When they write out prescriptions, the words seem to “flow from the pen”.

In other words, it seems as if the medium is being controlled by another entity, purportedly the spirit of someone with medical knowledge in this case. This is analogous to the virtual machines used by TPB, which leverage a protected, pay-to use computer system to facilitate the theft of content without the hosting company’s consent or knowledge. You can see from the picture above that a virtual machine can control at least the monitor of the physical computer it is running on. Given the proper configuration, a virtual machine can have access to and control all of the inputs and outputs of its physical machine.

Whether or not there is actually an eternal being from a another plane of existence manipulating the body of a Spiritist medium is less interesting than the prospect that a spiritual or hypnotic state can enable actions would should be impossible given the subject’s baseline knowledge and abilities. More specifically, I would like to know more about the “configuration” which allows such things to happen. Legitimate study of this subject is analogous to making developments in computer science which enables the development of novel technologies such as virtual machines.

A more concrete example is the cases of “hysterical strength” exhibited by mothers whose children are in danger. There have been multiple instances of ordinary women lifting cars or other heavy objects to save a trapped child. Our culture is rife with tales of super-human ability, and many of them are true. Study of these occurrences is difficult due the general need for extenuating circumstances, but I think the daily practices of spirit mediums provide an opportunity to learn more about the phenomena the human body is capable of. Not only is there historical precedent for the validity of these procedures(if not the beliefs of the practitioners), there are regular, measurable results that medical professionals could make great use of if the would deign to consider the issue seriously.

It would also be neat to develop medically-sound procedures where certain ills could be reliably cured without the use of expensive drugs and complex machinery. Imagine just heading over to your community’s shaman to get your cough dealt with instead of checking your insurance policy and bank account before scheduling a doctor’s appointment and getting all sorts of tests done. Would that really be such a backwards step?

---

**Sources and Additional Reading**

*Mac OS X foundation*

[Mach](http://en.wikipedia.org/wiki/Mach_(kernel))

[BSD](http://en.wikipedia.org/wiki/Berkeley_Software_Distribution)

*ThePirateBay and related technologies*

[TPB runs on virtual machines](http://torrentfreak.com/the-pirate-bay-runs-on-21-raid-proof-virtual-machines-140921/)

[TPB moves to the cloud](http://torrentfreak.com/pirate-bay-moves-to-the-cloud-becomes-raid-proof-121017/)

[TPB raid](http://en.wikipedia.org/wiki/The_Pirate_Bay_raid)

[Magnet links](http://en.wikipedia.org/wiki/Magnet_URI_scheme#Web_links_to_the_file)

[BitTorrent protocol](http://en.wikipedia.org/wiki/BitTorrent)

*Spiritist healers*

[Ze Arigo](http://en.wikipedia.org/wiki/Z%C3%A9_Arig%C3%B3)

["Arigo": John Fuller's documentation of the healer's work](http://www.amazon.com/Arigo-Surgeon-John-Grant-Fuller/dp/0815950209)

[Popular anecdotes regarding Arigo](http://weird-people.com/arigo-psychic-surgeon/1/)y

[Andrija Puharich](http://en.wikipedia.org/wiki/Andrija_Puharich)

["Patient Satisfaction with Spiritist Healing in Brazil" : Darrell Lynch](http://books.google.com/books?id=ElQ8OAAACAAJ&dq=inauthor:%22Darrell+William+Lynch%22&hl=en&sa=X&ei=xWksVKeBGZSeyASps4KIBw&ved=0CB8Q6AEwAA)

["Patient Preparation and Perceived Outcomes of Spiritist Healing in Brazil" : Darrell Lynch](http://onlinelibrary.wiley.com/doi/10.1525/ac.2004.15.1.10/abstract)

["A Model Explaining Brazilian Spiritist Surgeries and other Unusual, Religious-based Healings" : Sidney Greenfield](http://journals.sfu.ca/seemj/index.php/seemj/article/download/181/146)

*Misc*

[Hysterical Strength](http://en.wikipedia.org/wiki/Hysterical_strength)

[Example of Hysterical Strength](http://www.dailymail.co.uk/news/article-1190759/Mighty-mothers-superhuman-strength-lift-1-400kg-car-run-schoolboy.html)


