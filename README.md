# Run locally and feature guide

This document contains a link to a guide of how to run this web locally, and a demostration of the main features of this web.

- [Installation](./doc/run_locally.md)
- [Features](#features)
- [Deployed website](https://unsplash.danidelrio.es)

## Features

### Toolbar

In the following picture you can see the main view, with a toolbar at the top, and a main section at the center with a search component.

<img src="./doc/images/main/main-view.png" alt="Main view" width="700"/>

The toolbar has a language and a theme selector on the right, that allows the user to change the language (by default the browser language is chosen) and a theme (dark or light, default based on the system)

<img src="./doc/images/main/language-change.png" alt="Language change" width="400"/>
<img src="./doc/images/main/theme-change.png" alt="Theme change" width="400"/>

### Search component

In the center, we have the search component, that is divided in 2 parts, the basic one (text and order) and the advanced part (color, orientation and content filter).
You can perform searchs just by typing or changing them, and the search is applyed automatically once you stop interacting with it.
The filters are stored on the url on query params and also read from them, so you can reload or share the link with other people.
<img src="./doc/images/main/advanced-filters.png" alt="Advanced filters" width="700"/>

### Image grid with infinite scroll

Once a search is performed, the user can scroll, while new images are lazily loaded just before achieving the end of the scroll
Hovering the images with the mouse, you can see the description and a download button, and by cliking you can go to the detail screen

Image hover

<img src="./doc/images/main/hover.png" alt="Image hover" width="700"/>

Infinite scroll

<img src="./doc/videos/infinite-scroll.gif" alt="Infinite scroll" width="700"/>

### Image detail

<img src="./doc/images/detail/detail-img.png" alt="Image hover" width="700"/>

In the detail screen you can see the image bigger and with additional information, like the resolution, camera used to take the picture, location (with a redirect to Google Maps) and tags, that can perform a search if clicked
We have a "Go back" button, that allows the user to go to the exact same search as before, and a download button

If the scroll down, we see also the User info that uploaded the picture, his/her stats and some links to his Unsplash profile and social media links.
<img src="./doc/images/detail/detail-info.png" alt="Image hover" width="700"/>

### Responsiveness

We have done the website with responsiveness in mid, so every device can be used with the website.

Responsive main:

<img src="./doc/images/responsive/responsive-main.png" alt="Image hover" width="400"/>

Responsive detail:

<img src="./doc/images/responsive/responsive-detail.png" alt="Image hover" width="400"/>

### Error handling

If the user tries to go to a unexistent location, a 404 page is shown

<img src="./doc/images/error/404.png" alt="404" width="700"/>

If user tries to load an unexisten image, a toast error is shown

<img src="./doc/images/error/error-image-not-found.png" alt="Image not found error" width="700"/>

The website is deployed in [unsplash.danidelrio.es](https://unsplash.danidelrio.es)
