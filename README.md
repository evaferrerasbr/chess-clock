## Chess clock

## Description

The first version of this chess clock built with **React** allows the user to set total minutes for each player, increment after each play and an increment of minutes after n plays. The user can also change the clock colours. The user can change turns by pressing any key or by touching the screen, so it can be used both in computer and smartphone/tablets. The design is responsive.

Besides **React**, we have used **npm** and **SASS**.

## Structure

```
src
├── components
│ ├── App.js
│ ├── Header.js
│ ├── Landing.js
│ ├── PredefinedSettings.js
├── Form
│ └── SetupForm.js
│ └── InputTotalMinutes.js
│ └── InputIncAfterEachPlay.js
│ └── InputPlayNumber.js
│ └── InputIncOfMinutes.js
│ ├── ClocksPage.js
│ ├── Clocks.js
│ ├── GameOver.js
│ └── Footer.js
├── images
├── services
│ └── localstorage.js
├── stylesheets
└── index.js
```

Main branchs **master** and **dev** have been used in this project. We have also created a branch for every issue created with in Github. This issues contain the description of the development process. For further development, the latest version of the project will be found in dev branch.

## Download

To use this project:

- Download the repository
- npm install
- npm start

## Demo

To use this app you can visit [this link](https://evaferrerasbr.github.io/chess-clock/#/). It is also available in the project's description.
