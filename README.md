# Ringi äripark

## About the project
This project was built on [Gatsby.js](https://www.gatsbyjs.org/) and Bootsrap. Why I chose Gatsby was the reason that this project is not that big and will not need updating often so static files generated with Gatsby will be perfect for page speed and for SEO. Gatsby uses react.js components to build pages.

Gatbsy will update content only on deployment, generating new static html and js files. Gatsby use GraphQL that can fetch data from anywhere to the site.


[The demo is live here, deployed to Netlify](https://ringi.netlify.app/)

### Project specs

The page works in different browsers, but scroll-snap is only supported by chrome for now. Some layout issues in IE11, but for now I dont have IE browser to debug and fully fix the issues.

I used .scss for styling and .jsx for creating react components and bootstrap styles and components.

Form is working and using Netlifys form functionality and I added Googles recaptcha.

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
