#uiOGMobile

uiOGMobile is a service that provides common look & feel UI elements for mobile client control apps.

##Adding New Templates

So, this process could be improved, but there is a `gulpfile.js` in this folder that grabs all *.html and turns them into
`templates.js`. This file then needs to be manually put into uiOGMobile.js so the new templates are included.

Ideally the gulpfile would do this automagically.