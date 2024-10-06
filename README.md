# Week 6 assignment

Set Up the Project Environment

Initialize a new Vite project with the React template.
Install necessary dependencies like React, ReactDOM, and other required packages.
Create the Game Components
Integrate state management to handle the game state.
Add styles and additional features like upgrades or achievements






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
🎯 Implement the useState hook. ✅
🎯 Use useEffect effectively. ✅
🎯 Return JSX from a source other than App.jsx, for example, by using components.✅
🎯 Apply setInterval to execute periodic tasks within the application.✅
🎯 Use the .map() function to render lists of items in the application dynamically.✅
🎯 Use logic to manage the purchase and application of upgrade items within the game.✅





Stretch User Stories
🐿️ As a user, I want the application to save and retrieve my game data so that my progress is preserved even when I close and reopen the game.✅
🐿️ As a developer, I want the application to use an API to retrieve upgrade information so that users can access current upgrade details and seamlessly integrate them into their game play.✅
🐿️ As a user, I want the application to have excellent UI styling so that it is visually appealing and provides a pleasant and intuitive experience while playing the game.
Stretch Requirements
🏹 Use local storage to save and retrieve game data.✅
🏹 Use the Upgrades API to manage upgrades.✅
🏹 Style the application excellently.✅
Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?  i believe i mananged to hit all requirements
and stretch goals. 
🎯 Were there any requirements or goals that you were unable to achieve? none of thw stretch or
required ones. i had a hard time implementing the background music
🎯 If so, what was it that you found difficult about these tasks? chrome by default prevents autosy as does many browsers ive achieved this 
before previously but couldnt figure it out this time
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.

id like to knkw wjat i could have done to implement the music bwtter 
What useful external sources helped you complete the assignment (e.g YouTube tutorials)?
BroCode codecademy,  mimo, w3 schools, DEV, GeeksforGeeks, various YouTube videos.
What errors or bugs did you encounter while completing your assignment? How did you solve them?
i managed to come across a few but it was mostly to do with my extensions ftom my compnets  not correctly laid out
as well as habign my index in src when it needed to en in root.

What went really well and what could have gone better?
researchjng the components went really well. my biggest issue was 
my initial file structure once i fixed this it fell into place. i experiemnted with a
few components one called accordian stands out. it was to attempt to make the score board and name entry easier to 
see on mobile. 
if i had more time I'd investigate thjs snd the music and implement their use. i also 
woyld add noise to the button clicks. 

it was fun to implement my design witb React amd i look forward to
whst comes next. 
https://week-6-assignment-rho.vercel.app/