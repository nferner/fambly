# fambly

## First commit

The index.html file will render the website. It will have to have <div> tag to connect to the index.js file. The ID for this tag will be #main.

The index.js file brings in the main application file (app.jsx). The index.js file also imports the node packages for 'react', 'react-dom', 'react-router'.
I believe the 'react' package tells index.js that it will be using react type things. The 'react-dom' package allows the index.js to use the react elements as things that can be rendered in the DOM... translate into vanilla js DOM references. The 'react-router' tells/allows the index.js that there are going to be other connections in the main react application file that connects it to other jsx files.

The app.jsx file is where all the React components eventually meet up together. I believe this page can be mostly the main home page. The amount of components brought in the page should probably be minimized. The more we can break up components into reasonable sizes the better.

The app.jsx file will have a render that makes the navBar and footer as constants in the top and the bottom.

ah shit. if this a multipage site how are the other pages referenced? I think it is express.

For this part of the application we will be rendering the google calendar, a component to reserve time, a navBar, footer.

1. Connect index.js to index.html
2. Connect app.jsx to index.js
3. Create a calendar component

Assess situation

4. Create reservation component

Assess situation

5. Create navBar component
6. Create footer component
7. Adjust tags/style/css
