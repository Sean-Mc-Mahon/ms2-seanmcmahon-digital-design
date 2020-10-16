# Sean McMahon-Digital Design & Fabrication

### [Live Site](https://sean-mc-mahon.github.io/ms2-seanmcmahon-digital-design/)

### [GitHub](https://github.com/Sean-Mc-Mahon/seanmcmahon-digital-design)

![Various Devices](https://github.com/Sean-Mc-Mahon/ms2-seanmcmahon-digital-design/blob/master/wireframes/responsive.JPG)

Sean McMahon-Digital Design is a Milestone 2 project, it is part of the Fullstack Software Development Course of [Code Institute](https://codeinstitute.net/).

## Table of Contents

1. [**Project overview**](#project-overview)
2. [**UX**](#ux)

- [**UX Planes**](#ux-planes)
  - [**Scope Plane**](#scope-plane)
  - [**Structure Plane**](#structure-plane)
  - [**Skeleton Plane**](#skeleton-plane)
  - [**Surface Plane**](#surface-plane)
- [**User Stories**](#user-stories)
- [**Design**](#design)
  - [**Libraries**](#libraries)
  - [**Color Scheme**](#color-scheme)
  - [**Typography**](#typography)
- [**Wireframes**](#wireframes)

3. [**Features**](#features)

   - [**Existing Features**](#existing-features)
   - [**Features Left to Implement**](#features-left-to-implement)

4. [**Technologies Used**](#technologies-used)

5. [**Testing**](#testing)

- [**Validators**](#validators)
- [**Manual Testing**](#manual-testing)

6. [**Deployment**](#deployment)

7. [**Credits**](#credits)

- [**Content**](#content)
- [**Media**](#media)
- [**Acknowledgements**](#acknowledgements)

---

## Project Overview

SM Digital Design is a website for a digital designer offering services such as artistic rendering and 3D models (primarily for the construction industry) as well as digital portraits and furniture design.

### User Stories

_- User Story A: Joe is an architect and would like to use renders to assist with a planning application._  
_- User Story B: Liz would also like to commission a 3D model of a project to demonstrate her ideas to a client._  
_- User Story C: Joe is interested in commissioning some modern furniture for his living room._  
_- User Story D: Hazel would like to commission a digital portrait as an anniversary present._

## UX Planes

The expectation for users is that they be able to sample the work of the digital designer. They can orbit around 3d models as well as explore galleries of various services. A landing page gives an overview of the services on offer. Each design discipline has it's own page where a user can see relevant projects and learn more about the processes involved. A contact page allows allows the user to enquire about the work and engage with the designer in order to collaborate.

### Strategy Plane

#### Project Goals:

- Showcase my digital design skills as well as demonstrate the usefulness of digital design in general.
- Provide people who may wish to commission work or collaborate to get in touch through a form or with social media links.

#### User Goals:

- Source services for 3d modelling, architectural rendering, furniture design and digital portraits.
- Ability to contact the designer.
- Mobile friendly site allows users to browse from anywhere.
- Ability to set preferences for viewing site such as dark mode.

### Scope Plane

Features such as Google Model Viewer allow the user to engage with a 3d model, to orbit around it and even view it in augmented reality. Bootstrap Carousels allows users to easily browse through image galleries of various services and a video player enables users to experience the process of creating a polygonal prtrait. A map lets the user find the location of the designer and a form lets them get in touch.

### Structure Plane

The site is highly interactive. Hovering over the logo triggers an animation. A toggle enables users to switch between light and dark modes. Radio buttons allow users to choose a color scheme. Buttons and indicators help users navigate Bootstrap Carousels and an orbit feature allows users to pan around a model.

### Skeleton Plane

- Nav Bar: Contains displays menu items, highlighting the page the user is on and uses the logo and heading to direct users back to the homepage. On smaller devices a burger toggler is used to display the menu items.
- Main: Content organised using Bootstrap grid. On desktop max heights are assigned to containers so that users should not have to scroll to see content.
- Footer: Displays copyright information and provides links to social pages.

Each page may be navigated to eachother with one click.

### Surface Plane

#### Design

A standard layout is fully responsive on mobile devices and larger screens.

#### Color Scheme

Colours on the site are highly adaptable for users preferences, a dark mode stores user preferences on local storage while a color toggle saves user prefernces on session storage. Dark Mode colors are set with CSS variables. [Coolors](https://coolors.co/d8be25-00bfff-48c074-ff8596-b36e2f-212121-fffff0)

![Color Palette](https://github.com/Sean-Mc-Mahon/ms2-seanmcmahon-digital-design/blob/master/wireframes/coolors-palette.JPG)

#### Typography

2 [Google Fonts](https://fonts.google.com/) were used across the site:

- [Lily Script One](https://fonts.google.com/specimen/Lily+Script+One?query=lily) : Logo & Headings, used for it's bold style.
- [Montserrat](https://fonts.google.com/specimen/Montserrat?query=montse) : Body, used for it's excellent readability.

Font sizes for the headings are mostly responsive using the calc() function.

#### Media

All images, models and featured products are the authors own. Logos are also produced by the author.

### Wireframes

I used Balsamiq and figma to create the wireframes.

- [Balsamiq Wireframe](https://github.com/Sean-Mc-Mahon/seanmcmahon-digital-design/blob/master/wireframes/digital-design-wire.pdf)

- [Figma Wireframe-Light](https://github.com/Sean-Mc-Mahon/ms2-seanmcmahon-digital-design/blob/master/wireframes/wire-figma-light.jpg)

- [Figma Wireframe-Dark](https://github.com/Sean-Mc-Mahon/ms2-seanmcmahon-digital-design/blob/master/wireframes/wire-figma-dark.jpg)

##### back to [top](#table-of-contents)

#### Libraries

- [Bootstrap 4](https://getbootstrap.com/) - is a framework for building responsive, mobile-first websites. I primarily used bootstrap to format layouts and for certain components such as image carousels and buttons.

- [JQuery](https://jquery.com/) - is a Javascirpt library. I primarily used JQuery to add and remove classes on hover states.

---

## Features

### Existing Features

> - All Pages - All pages will have atoggle switch allowing users to switch between dark and light modes which stores preferences to local storage. Color themes can be selected and are saved to session storage. The footer provides links to social pages.

> - Index - The index uses a gallery to showcase projects in each section of the site. On large devices users may hover over a header to display the relevant image in the gallery, on small devices both headers and gallery images cycle through in sync using keyframes.

> - Renders - A bootstrap carousel allows users to cycle through images.

> - 3D Models - This page uses Google Model Viewer to orbit around a model, this page uses Google Model Viewer which allows users to orbit around the model and even view the model in Augmented Reality on a mobile device.

> - Furniture - A bootstrap carousel allows users to cycle through images.

> - Portraits - This page uses images as well as a video on autoplay to display digital portraits.

> - Contact - This section has a form where users can enquire about updates as well as a google map.

### Features Left to Implement

-

##### back to [top](#table-of-contents)

## Technologies Used

1. **HTML (Hyper Text Markup Language):** Used throughout the site;  
   https://developer.mozilla.org/en-US/docs/Web/HTML
2. **CSS (Cascading Style Sheets):** Used throughout the site;
   https://www.w3.org/Style/CSS/Overview.en.html
3. **Bootstrap:** Used to aid responsive design and for componants such as carousels and buttons https://getbootstrap.com/
4. **Visual Studio Code:** Code Editor used to create the site.
   https://code.visualstudio.com/
5. **GitHub:** Used to host repos for the site https://https://github.com/Sean-Mc-Mahon/ms2-seanmcmahon-digital-design
6. **Chrome/Firefox/Bing DevTools:** Regularly used to test the site https://developers.google.com/web/tools/chrome-devtools
7. **W3C Markup Validation Service** Used to test code for errors; https://validator.w3.org/https://jigsaw.w3.org/css-validator/validator
8. **Affinity Designer** Illustration software used to create ...; https://affinity.serif.com/en-gb/
9. **Figma** Collaborative interface design tool used for creating wireframes as well logos and SVGs; https://figma.com
10. **Balsamiq** Used to create wireframes; https://balsamiq.com/?gclid=EAIaIQobChMIuoqlhfWi6wIV6YBQBh2f9w7DEAAYASAAEgLUTfD_BwE
11. **Tinypng** Used to compress images; https://tinypng.com/
12. **Croppola** Used to crop images; https://croppola.com/
13. **mp4compress** Used to compress video files; https://www.mp4compress.com/
14. **Google Model Viewer** Used to display author's own 3d model; https://modelviewer.dev/

## Testing

### User Stories

_- User Story A: Joe is an architect and would like to use renders to assist with a planning application._  
Joe can find examples of renders on the render page with a brief desription of their usefulness and a link in the description takes him to the contact page where he may contact the designer and see their location.

_- User Story B: Liz would also like to commission a 3D model of a project to demonstrate her ideas to a client._  
Liz can find the 3D model page directly from the home page and once their is able to orbit around a sample model, if she is using a mobile device she can see the model in Augmented Reality. A link in the description takes her to the contact page where she may contact the designer and see their location.

_- User Story C: Harry is interested in commissioning some modern furniture for his living room._  
Harry can find the furniture page directly from the homepage which will show him sample designs that demonstrate the pieces as a whole as well as up close views. A description descibes the process in making the furniture. A link in the description takes him to the contact page where he may contact the designer and see their location.

_- User Story D: Hazel would like to commission a digital portrait as an anniversary present._
Hazel can find the portraits page directly from the homepage which will show her samples of the portraits as well a description which describes the process and a video illustrating the process. A link in the description takes her to the contact page where she may contact the designer and see their location.

### Problems and Solutions

- Home Page: Hover function on headings to display relevant image not mobile friendly. I overcame this by using animations for both the headings and gallery so that they would cycle through in sync with each other on small screens.

- Logo: On loading each page the logo animation was not animating as expected and the image was spinning on a wide arc. 'Transform-origin: center' fixed this issue on all browsers except firefox. I posted a query on Firefox Support and I reached out on slack for a solution as well as Code Institute Tutor Support and have so far not been able to find a solution.

- Loading: Loading the 3D model on the model page was causing the animations to glitch. To overcome this I created a custom loader to display while features such as this one are loading.

### Validators

1. **HTML** [W3C HTML Validator](https://validator.w3.org/) Used to identify HTML errors. Small errors were found in SVG's attributes which were rectified. Each page has a warning for a section lacking a header. this is the toggle menu and does not require a heading.

2. **CSS** [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) Used to identify CSS errors. No errors were found.

3. **Javascript** [JSHint](https://jshint.com/) Used to identify Javascript errors, none found.

### Manual Testing

1. **amiresponsive** [Am I Responsive](http://ami.responsivedesign.is/) Used to test responsiveness across a range of devices.

2. **Developer Tools** Chrome, Firefox and Microsoft Edge web dev tools using iPhone 5 and Ipad as toggle devices to test responsiveness. An issue regarding the logo SVG was found in the firefox browser (See Problems and Solutions)

3. **Mobile Devices** I used my Google Pixel 3a phone and Amazon Fire tablet to test the site. Using these devices I found overflow issues when in landscape that did not appear in chrome dev tools when viewing on iphone5 landscape. These issues were rectified in media queries.

4. **Friends and family** I asked for feedback from friends and family in order to get a users perspective.

5. **Contact Form** On the contact page the form may not be submitted without using correct syntax for the e-mail input or if either input is blank. Once inputs are filled properly the sign up button will lead to a form dump page.

## Deployment

1. I Created a Github account at https://github.com
   My account url; https://github.com/Sean-Mc-Mahon

2. I installed Git and set up a username and password.

3. I created a repository on Github (#)

4. On VS Code I opened the command pallette and selected Git Clone, I pasted in the URL for the repo on GitHub and selected a folder on my computer to sync to.

5. I uploaded all files to my Github repository.

6. To publish the project to see it on the web, I then went into the Settings on my respository, scrolled down to the heading, GitHub Pages. Under the Source setting, I used the drop-down menu to select master branch as a publishing source and saved it. Refreshed the github page, and you are then given a url where your page is published;
   Your site is published at https://github.com/Sean-Mc-Mahon/ms2-seanmcmahon-digital-design

7. To run this code on a local machine, you would go to my respository at
   https://github.com/Sean-Mc-Mahon/ and on the home page on the right hand side just above all the files, you will see a green button that says,
   "Clone or download", this button will give you options to clone with HTTPS, open in desktop or download as a zip file.
   To continue with cloning, you would;

- Open Git Bash
- Change the current working directory to the location where you want the cloned directory to be made.
- Type git clone, and then paste this URL; https://github.com/Sean-Mc-Mahon/ Press Enter. Your local clone will be created.

For more information about the above process; https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

---

## Credits

### Content

1.  Google Fonts for font styles; https://fonts.google.com/

2.  Youtube; Image Gallery inspired by youtube tutorial by [Follow Andrew](https://youtu.be/gvPyJ0rc944)

### Media

### Acknowledgements

1.  My mentor Adegbenga Adeye for his support and input.

2.  My peers on slack for their generosity in sharing their knowledge and experience.

##### back to [top](#table-of-contents)
