Resources i used in the making of the site:
All photos from google and/or pinterest pretty much

documentations and other online references:
[React.js documentation](https://react.dev/learn)
[motion](https://motion.dev/docs/react)
[GSAP](https://gsap.com/)
[React Bits](https://reactbits.dev/)
[Cursor-reactive gradients - dev.to](https://dev.to/sammiihk/cursor-reactive-gradients-making-css-respond-to-mouse-position-5ga3)
[CSS Background Effects - prismic](https://prismic.io/blog/css-background-effects)
[Scroll blur and moving noise with React, Motion, and CSS](https://medium.com/@moraromerojuan8/scroll-blur-and-moving-noise-with-react-motion-and-css-49922adbbdda)
[Horizontal scroll section](https://motion.dev/docs/react-scroll-animations)
[lenis.dev](https://www.lenis.dev/)
[CSS The overflow Property](https://www.w3schools.com/css/css_overflow.asp)
[CSS scrollbars styling](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scrollbars_styling)
[React Scroll Effects Without External Libraries](https://dev.to/childrentime/react-scroll-effects-without-external-libraries-2k12)
[<easing-function> CSS type - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/easing-function)

Text animations:
[Scroll Reveal](https://reactbits.dev/text-animations/scroll-reveal)
[Scroll Velocity](https://reactbits.dev/text-animations/scroll-velocity)
[Variable Proximity](https://reactbits.dev/text-animations/variable-proximity)
[prismic css text animations](https://prismic.io/blog/css-text-animations)
[Count up - reactbits](https://reactbits.dev/text-animations/count-up)

gradients and noise:
[3d animated gradient with JS and WebGL](https://javascript.plainenglish.io/making-an-animated-html5-canvas-gradient-effect-62e7f84d7c2f)
[Noise - reacbits](https://reactbits.dev/animations/noise)
[Animating Repeating Noise Mask with @property](https://codepen.io/argyleink/pen/vYPZgXB)

youtube videos i used for either reference/inspiration/code:
[Page Transitions- developedbyed](https://www.youtube.com/watch?v=S4HYwsBRpRs)
[CSS Morphing Gradients Animated Background - WeCoded](https://youtu.be/Ml-B-W91gtw?si=7O2-4uc3bArIu8Rd)
[Animated noise with CSS only shouldnt be possible!](https://www.youtube.com/watch?v=SxFNqnSOgh0)
[React Animation Course with Motion - Become an Animations Pro in 1 Hour](https://www.youtube.com/watch?v=9-fO_2xTpgY)
[React Native Animated Counter](https://www.youtube.com/watch?v=Rv91NdVtnsw)
[React scroll animation - scroll progress bar](https://motion.dev/docs/react-scroll-animations)
[Create Full Custom Scrollbar Only CSS](https://youtu.be/ZnzjjlliECk?si=y9c9qCZ9eQ82zVit)
[Horizontal Scrolling Animation with React and Framer Motion](https://www.youtube.com/watch?v=4ehYkfh7P-I)
[Create a Horizontal Scroll Carousel in React with Framer Motion](https://www.youtube.com/watch?v=g8pcxzDl-w8)

fonts:
[Raleway](https://fonts.google.com/specimen/Raleway?utm_source=chatgpt.com&preview.text=Max%20Verstappen&specimen.preview.text=Max+Verstappen)
[Birthstrone](https://fonts.google.com/specimen/Birthstone?categoryFilters=Feeling:%2FExpressive%2FFancy&preview.script=Latn)
[Anton SC](https://fonts.google.com/specimen/Anton+SC?categoryFilters=Feeling:%2FExpressive%2FLoud&preview.script=Latn)

footage:
[Max Verstappen 2024 4K upscaled scenepack || Made By King F1](https://www.youtube.com/watch?v=i89O-9XJAtg)
[MAX VERSTAPPEN 2025 SEASON BEST SCENEPACK | F1 SCENEPACK | 4K CLIPS | SCENESBYZERO](https://www.youtube.com/watch?v=yK_bVeZRa3Y)
[Max verstappen 4K scenepack](https://www.youtube.com/watch?v=6b6ZbXzQgpY)

<-- PROGRESS REPORTS -->
Rough timeline of the work progress day by day:

Day 1: Mostly setup on the project itself, starting up the react server etc.

Day 2: Creating a few of the components, working mostly on the intro section of the site including the video loop alongside text animation etc.

Day 3: Added the animated text and scroll down indicator hint, aswell as changes to the video(found better quality one but i need to cut it up).

Day 4: Finishing up the intro portion of the site. Scroll hint actually works now, aswell as better quality and improved sequence of videos. Slight glow and shine animation on Max's logo. 
Applied a gradient over the videos for better look visually. Slowly started building the secondary section of the site where the user will scroll to and start seeing some of Max's achievements.
its.

Day 5: Big change is restructuring a bit, created seperate folders for the components/styles for each seperate section. Created the folders and main files for the next 2 sections. Started gathering ideas for said 2 sections.
Fixed the video loop, added a better designed gradient overlay that follows the cursor, aswell as a grainy noise overlay. Added a transition where once you start scrolling the video background blurs and slows down slighty, if you scroll back up the video unblurs and goes back to the default speed. 
Fixed the disappearing scroll hint, and the hint now properly returns after a short delay once you scroll up. Adjustments to the main text and font change (not 100% sure on the font yet but will keep it as is). Will probably go back and add more effects to the text for a nicer feel, but might leave for last touches.

Day 6: Intro section is mostly finished as of now, still need to find a way to upscale a bit 2 portions of the video background but that will be done a bit later, will be starting the main work on the secondary page of the site.
Fixed up a bit the transition between the intro and the wdc section, now it flows a lot nicer between the two sections with an added black gradient (apart from the video blur and slow on the first section).
Started structuring and working on the animated counter effect that will show 0 -> 4 wdc's, aswell as photos corresponding to the year which max has won.

Day 7: Small changes around the files in the intro portion, aswell as adding a small Red Bull logo that will flash behind the title text when the video goes to black. 
Finished most of the work on the shared reusable counter component for all the wdc/wins/podiums. Will adjust it more later on depending on the section and all. Its resizing when the numbers change is a bit weird but itll get fixed a bit later on, the important thing is getting the logic to work. 
Working on a reusable scroll section, which is going to work as a transition point between all the seperate section, it will consist of a "slideshow" sort of effect where a few photos of max will slide by into the screen right to left, and each different use of the section will have seperate photos to shake it up. Intention behind it is to make it usable after every *main* section, and make it so that the different photos have different sizes. Will probably add small description/text around the photos like the year and the race etc.
Gathered a bunch more photos for the transition sections, sections for the podiums/wins, will need to organize those a lot lol.

Day 8: Made it so that if the page is refreshed it goes back to the top automatically. Alongside that, did some small tweaks to the video and the intro section, and now once you have scrolled past the intro, effects such as the noise layer and the animated gradient "turn off" automatically so they dont slow the site down if the user doesn't see them currently.
Still gathering photos for the scroll section, but working on its code and functionalities.

Day 9: More work on the scroll transition section, gathering some photos for it but still figuring it out in terms of code and functionalities. Also separated it from the other shared components as it's shaping up to have quite a few files in order to be reusable between the other sections. 
Added a brief Red Bull logo flash once the intro video fades to black, but will need to find a better photo to use for it, also want to add a very slight shine animation to it, will refine it a bit alongside the scroll section in the next days.

Day 10: Will do some more work on the intro video as i want to add more clips to it (with better quality too). Added a new folder where ill add on wips for the later sections as i have very little defined ideas for how those would look currently. Added also files in preparation for a custom scroll bar later on.
More work on the scroll transition section, as im trying to figure out its code and functionalities but its currently breaking the site, will need to fix it up and figure it out. Will work on the animation and sizing on it aswell as its far from perfect for now.

Day 11: Scroll section is semi complete now, will need to improve it visually but it can be used for different photos in different places so its good progress so far. After *a lot* of trial and error the code finally works properly aswell so the main part of the battle is over for now thankfully. Will definitely work more on making each of its uses a bit more different than the other, aswell as gather more photos for each going forward, but good progress for now.
Made a better intro video loop aswell, as i found better high quality footage that are a lot cooler to use than the previous one, will also touch up the small RB logo flash when the video fades to black, its a smaller thing for now so im leaving it as is but definitely have better ideas for it.
Starting some rough work on a custom scroll bar for the top of the site aswell.

Day 12: Mostly fixed up the scroll section, will definitely touch up here and there but its functional which is good, changed up some stuff about the intro portion as, as i changed the video a bit, slight tweaks to the gradient/noise overlay, as well as more work on the intro text and its effects. 
Added a custom scrollbar, as it is now it looks good enough ill see if i change it up or add more to it going forward.
Changed the RB logo photo to a better one and touched up the animation and size on that too.
Started slowly doing proper design cocepts for the main sections as those will be more complicated, so coding will take a bit of a backseat for a few days on this one. The concepts once done will be uploaded to the design_ideas folder.

Day 13: Fixed the logo light shine sweep effects on both intro logos. The RB logo works and looks better, while max's logo just looks a bit smoother because the sweep was a little rough looking before, the effect is pretty much the same between the two logos just reapplied.
Did quite a few touch upts to the intro portion, specifically the texts in it: more effects, smoother transitions and fade outs if the user starts scrolling away. The main text's filling dissappears whenever the user hovers onto a particular portion of it, additionally tomorrow will add that same effect for the outline aswell. The scroll hint aswell as the smaller text both fade out aswell once the user scrolls away.
If the user scrolls back up the texts reappear again.
Changes to the behavior of the RB logo aswell, not only fixing its flashing animation but it doesn't flash away constantly repeatedly, when the intro section isnt fully visible and/or if it so happens that the users starts scrolling up down nonstop (mid-animation or not) the logo gets hidden until the video restarts, then the logo will pop up again at the end of it.
Some retouching and arranging to the photos of the first scroll gallery, will need to figure out the sizes and spaces between all the photos.

Day 14: Added a bunch more photos for the second scroll section.
Adjusted and improved the alignment of the photos in the sections, now pretty much everything for their position can be controlled. Still need to plan out and align all the photos but that will be done more easliy now. Will work on some sort of reveal text effect for the label text under each photo.

Day 15: I feel like im going crazy with the scroll section its so dumb how much time and nerves ive spent on it for real. Ive been trying so many different things to make it work and when one end of it works the other doesnt its so dumb.