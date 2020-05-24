# Ringi äripark

## About the project
This project was built on [Gatsby.js](https://www.gatsbyjs.org/) and Bootsrap. Why I chose Gatsby is that this project is not that big and will not need updating often so static files generated with Gatsby will be perfect for page speed and for SEO. Gatsby uses react.js components to build pages.

Gatbsy will update content only on deployment, generating new static html and js files. Gatsby uses GraphQL that can fetch data from anywhere to the site.


[The demo is live here, deployed to Netlify](https://ringi.netlify.app/)

### Project specs

The page works in different browsers, but scroll-snap is only supported by chrome for now. Usually it is not a good idea to modify users scroll thats why I added the css3 scroll-snap that is not so intrusive for the user. Some layout issues in IE11, but for now I dont have IE browser to debug and fully fix the issues and this will affect only around [2 percent of the users in estonia](https://gs.statcounter.com/browser-market-share/desktop/estonia).

I used .scss for styling and .jsx for creating react component templates and bootstrap styles and components.

Form is working and using Netlifys form functionality and I added Googles recaptcha.

### Development process

For editing this project I used Visual Studio, for version control I used GIT and github and the project is deploy to [Netlify](https://www.netlify.com/)

On the design part I added a standard for paddings and margins because there seemed to be too many random sizes.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
gatsby develop
```

### Compiles and minifies for production
```
gatsby build
```
