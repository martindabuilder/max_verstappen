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
[Create Full Custom Scrollbar Only CSS](https://youtu.be/ZnzjjlliECk?si=y9c9qCZ9eQ82zVit)

fonts:
[Raleway](https://fonts.google.com/specimen/Raleway?utm_source=chatgpt.com&preview.text=Max%20Verstappen&specimen.preview.text=Max+Verstappen)
[Birthstrone](https://fonts.google.com/specimen/Birthstone?categoryFilters=Feeling:%2FExpressive%2FFancy&preview.script=Latn)


Rough timeline of the work progress day by day:

day 1: Mostly setup on the project itself, starting up the react server etc.

day 2: Creating a few of the components, working mostly on the intro section of the site including the video loop alongside text animation etc.

day 3: Added the animated text and scroll down indicator hint, aswell as changes to the video(found better quality one but i need to cut it up).

day 4: Finishing up the intro portion of the site. Scroll hint actually works now, aswell as better quality and improved sequence of videos. Slight glow and shine animation on Max's logo. 
Applied a gradient over the videos for better look visually. Slowly started building the secondary section of the site where the user will scroll to and start seeing some of Max's achievements.

day 5: Mostly break to do some art, very minor touch ups here and there but no major changes and no commits.

day 6: Big change is restructuring a bit, created seperate folders for the components/styles for each seperate section. Created the folders and main files for the next 2 sections. Started gathering ideas for said 2 sections.
Fixed the video loop, added a better designed gradient overlay that follows the cursor, aswell as a grainy noise overlay. Added a transition where once you start scrolling the video background blurs and slows down slighty, if you scroll back up the video unblurs and goes back to the default speed. 
Fixed the disappearing scroll hint, and the hint now properly returns after a short delay once you scroll up. Adjustments to the main text and font change (not 100% sure on the font yet but will keep it as is). Will probably go back and add more effects to the text for a nicer feel, but might leave for last touches.

day 7: Intro section is mostly finished as of now, still need to find a way to upscale a bit 2 portions of the video background but that will be done a bit later, will be starting the main work on the secondary page of the site.
Fixed up a bit the transition between the intro and the wdc section, now it flows a lot nicer between the two sections with an added black gradient (apart from the video blur and slow on the first section).
Started structuring and working on the animated counter effect that will show 0 -> 4 wdc's, aswell as photos corresponding to the year which max has won.
 
day 8: Mostly break to go out draw and watch f1 so very little coding work done, some restructuring and slight tweaks and idea gathering/designing mostly, trying to figure out the best way to approach the photo transitions and text during the later sections showing the stats.

day 9: Small changes around the files in the intro portion, aswell as adding a small Red Bull logo that will flash behind the title text when the video goes to black. 
Finished most of the work on the shared reusable counter component for all the wdc/wins/podiums. Will adjust it more later on depending on the section and all. Its resizing when the numbers change is a bit weird but itll get fixed a bit later on, the important thing is getting the logic to work. 
Working on a reusable scroll section, which is going to work as a transition point between all the seperate section, it will consist of a "slideshow" sort of effect where a few photos of max will slide by into the screen right to left, and each different use of the section will have seperate photos to shake it up. Intention behind it is to make it usable after every *main* section, and make it so that the different photos have different sizes. Will probably add small description/text around the photos like the year and the race etc.
Gathered a bunch more photos for the transition sections, sections for the podiums/wins, will need to organize those a lot lol.

day 10: Made it so that if the page is refreshed it goes back to the top automatically. Alongside that, did some small tweaks to the video and the intro section, and now once you have scrolled past the intro, effects such as the noise layer and the animated gradient "turn off" automatically so they dont slow the site down if the user doesn't see them currently.
Still gathering photos for the scroll section, but working on its code and functionalities.

day 11: Some work on the scroll transition section, nothing major tho.

day 12: More work on the scroll transition section, gathering some photos for it.