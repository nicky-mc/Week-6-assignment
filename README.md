# Week 6 assignment

Set Up the Project Environment

Initialize a new Vite project with the React template.
Install necessary dependencies like React, ReactDOM, and other required packages.
Create the Game Components

Create a main App component to hold the game state and logic.
Develop a CookieButton component that increments the score when clicked.
Develop a ScoreDisplay component to show the current score.
Follow-Up Steps

Integrate state management to handle the game state.
Add styles and additional features like upgrades or achievements.
![Screenshot 2024-10-04 at 13 49 31](https://github.com/user-attachments/assets/9f67e605-26a1-433a-a658-67f025d4a547)

Week 6 Assignment: Build a Cookie Clicker using React
Overview
It's time for some more cookies. The Cookie Clicker game from previous weeks as a React application. It's useful to build the same application in the new paradigm so you can draw direct comparisons and see how the new approach is different from the old one.

React requires a slightly different way of thinking than plain HTML and JavaScript, but it's the same technologies under the hood. The main differences are - surprise, surprise - in the way what is being displayed by your components reacts to changes in the data, rather than manually updating the DOM ourselves.

Topics
React: JSX, Components and Props
React Hooks: useState, useEffect
State and managing state
Event Handling
Lists and Keys
Resources
React: Writing Markup with JSX
React: Your First Component
React: Passing Props to a Component
React: Rules of Hooks
React: useState
React: Managing State
React: useEffect
React: Lifecycle of Reactive Effects
React: Responding to Events
React: Rendering Lists
React: Updating Objects in State
Instructions
User Stories
🐿️ As a developer, I want the application to use the useState hook so that the user’s interactions with the app are smooth and their data is managed effectively.
🐿️ As a developer, I want to use the useEffect hook to manage game time with setInterval, return a cleanup function, and use a dependency array so that the game runs efficiently and updates in real-time for the user.
🐿️ As a developer, I want to create separate files that return JSX instead of including all JSX within App.jsx so that the code is well-organized, making the app more maintainable and reliable for the user.
🐿️ As a user, I want the application to automatically update the game state every second so that I can see my progress and earned cookies in real-time, making the game more exciting and rewarding.
🐿️ As a developer, I want to use the .map() function to render lists of items efficiently so that the user can see dynamic content without performance issues.
🐿️ As a user, I want to purchase upgrades with my earned cookies to increase my cookies per second, making the game play more rewarding.
Requirements
🎯 Implement the useState hook.
🎯 Use useEffect effectively.
🎯 Return JSX from a source other than App.jsx, for example, by using components.
🎯 Apply setInterval to execute periodic tasks within the application.
🎯 Use the .map() function to render lists of items in the application dynamically.
🎯 Use logic to manage the purchase and application of upgrade items within the game.
How to Deploy
Aim to deploy on Render when you have enough time afterwards to debug any potential problems, which will be listed in the production logs.

To begin, ensure your project has been pushed to GitHub. Then, go to Render. You should already have an account at this point, but if not, make an account (or sign-in through GitHub).

Deploying a React App to Render
Click ‘+ New’ and choose ‘Static Site’.
Select the same project and click ‘Connect →’.
Here is what we need on the options page:
Build Command: npm install && npm run build (or npm install; npm run build, as should be pre-filled in for you)
Publish directory: dist
Environment variables: add anything in your client-side .env file in here.
Now, you can ‘Deploy Static Site’!
Stretch Goals
To achieve an 8/8 in your assignment, aim to achieve all of the requirements, plus some extra goals for each section of the marking rubric. This can be excellence in styling or something that demonstrates creativity or innovation in the week’s topics.

Below are some examples of stretch goals and user stories that you could add to your project, but are not expected to.

Stretch User Stories
🐿️ As a user, I want the application to save and retrieve my game data so that my progress is preserved even when I close and reopen the game.
🐿️ As a developer, I want the application to use an API to retrieve upgrade information so that users can access current upgrade details and seamlessly integrate them into their game play.
🐿️ As a user, I want the application to have excellent UI styling so that it is visually appealing and provides a pleasant and intuitive experience while playing the game.
Stretch Requirements
🏹 Use local storage to save and retrieve game data.
🏹 Use the Upgrades API to manage upgrades.
🏹 Style the application excellently.
Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g YouTube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?
