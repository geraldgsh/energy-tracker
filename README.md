<<<<<<< HEAD
<<<<<<< HEAD
# Microverse Capstone Project - Energy Tracker
React Rails Redux

### Snapshot

![](https://github.com/geraldgsh/energy-tracker/blob/feature/app/assets/images/screenshot.jpg)

### Introduction.

Capstone projects are solo projects at the end of the each of the Microverse Main Technical Curriculum sections. Building this project is very important for you because:

* It's a real-world-like project, built with business specifications that will look really nice in your portfolio; and
* You will get feedback about the achievement of technical and soft skills gained during this section of the program.

Requirements [here](https://www.notion.so/Final-Capstone-Project-Tracking-App-22e454da738c46efaf17721826841772).

### Scenario Design

A new Kickstart company; E-Leaf have recently developed an IOT Smart Meter that records consumption of electric energy. The said IOT device; E-Monitor is designed to be installed onto a resident's electrical circuit break.

Core features are;

a. Take energy measurements of various room.
b. Communicates the information to cloud for monitoring.
c. Keeps track of prepaid units and warns user when unit balance is running low.

E-Leaf have just released an open tender for a tracking mobile app. The tender calls for a basic proof of concept with the following hard requirements.

1. The user logs in the app, only by typing the username and password.
2. At early stages, the user is presented with a list of room energy consumption that can be manually recorded for now.
3. After recording every room's unit consumption, user is take to page that list all readings.
4. The user can access a room list with energy readings and track the consumption within time
5. Apps design should follow [this design](https://www.behance.net/gallery/13271423/Bodytrackit-An-iOs-app-Branding-UX-and-UI)
6. User can seamlessly select and view individual day readings.
7. App must be responsive, on both tablet and desktop versions, following given design guidelines.
8. During sign up, users must input month purchased units (i.e. 1800, 2100, 2400, 2700, 3000). Selected units will be divided by numbers of days in a month to derive daily quota.
9. During signup, users must input percentage of target savings (i.e. 5%, 10%, 15%, 20%, 25%). Selected target will be calculated against total month consumption to see if target is met.

### Tools

* Node.js
* Rails
* Ruby
* React
* React-DOM
* Redux
* npm
* CSS
* ES6
* Webpack
* prop-types

### Linter Setup

Instructions [here](https://github.com/geraldgsh/energy-tracker/wiki/%23-Step-1-%E2%80%94-Creating-a-New-Rails-Application)

### Future Features

1. Facebook, Google and Microsoft OAuth
2. Available units graph turn red at low levels
3. Option to name and select number of rooms during registration
4. Use slider bar for unit input
5. Set up DB seed for 30 days for each users with randomized units
6. Input validation; next button do not work if users do not key in an input
7. Specific navbar button stays highlighted for each respective feature view
8. Add user profile page
9. Users can delete own reading entry
10. Notification alert when availables units are low. 

### To begin

1. Clone Repo by using this command 'git clone --branch feature https://github.com/geraldgsh/energy-tracker.git'. 
2. 'npm install' to install dependencies
3. Follow [this instruction](https://github.com/geraldgsh/energy-tracker/wiki/%23-Step-2-%E2%80%94-Setting-Up-the-Database) for DB setup.
4. Run 'rails db:migrate' to initialize
5. Type `rails server` in terminal within root project folder.
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### To Test

Run the following command terminal for root folder

```
$ bundle exec rspec spec/models
.......

Finished in 0.26756 seconds (files took 2.63 seconds to load)
7 examples, 0 failures
```

### Wiki

Checkout [wikipage](https://github.com/geraldgsh/energy-tracker/wiki) for more details. 

#### Live Demo
[Demo](https://energy-track.herokuapp.com/)


#### Prerequisites
Web browser like Chrome, Mozilla or similar.

### Original Project Source

[Link](https://www.notion.so/Final-Capstone-Project-Tracking-App-22e454da738c46efaf17721826841772)

### Github Repo
https://github.com/geraldgsh/energy-tracker

👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)

Twitter: [geraldgsh](https://twitter.com/geraldgsh)

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)


## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/energy-tracker/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

[Design](https://www.behance.net/gallery/13271423/Bodytrackit-An-iOs-app-Branding-UX-and-UI) idea by [Gregoire Vella on Behance](https://www.behance.net/gregoirevella).

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.
=======
# Microverse Capstion Project - Energy Tracker
React Rails Redux

### Snapshot

![]()

### Introduction.

Capstone projects are solo projects at the end of the each of the Microverse Main Technical Curriculum sections. Building this project is very important for you because:

* It's a real-world-like project, built with business specifications that will look really nice in your portfolio; and
* You will get feedback about the achievement of technical and soft skills gained during this section of the program.

### Tools

* Node.js
* Rails
* Ruby
* React
* React-DOM
* Redux
* npm
* CSS
* ES6
* Webpack
* prop-types
* Onsen UI

### Linter Setup

Clone file [content](https://github.com/microverseinc/linters-config/tree/master/javascript) into root directory (except for readme.md)

Install ESLint on Linux environment using the following commands

Install Node Version Manager to update NodeJS + NPM.

```sh
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

$export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

$[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Run the following command to verify installation;

```sh
$ command -v 
nvm
```

To download, compile, and install the latest release of node, do this.

```sh
nvm install node
```

Source [here](https://github.com/nvm-sh/nvm#installing-and-updating)

Please do the following **steps in this order**:

#### Set-up Stickler (Github app) - it will show that your app is free from style errors

1. Install stickler-ci https://github.com/apps/stickler-ci
2. Enable stickler in your repo. You can do it [here](https://stickler-ci.com/).
3. In first commit of your feature branch add a copy of [.stickler.yml](./.stickler.yml) and [.eslintrc.json](./.eslintrc.json)  to the root directory.
   - **Remember** to use both files linked above
   - **Remember** that `.stickler.yml` file name starts with a dot.
4. **Do not make any changes in config files - they represent style guidelines that you share with your tem - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
5. When you open your first pull request you should see Stickler's report at `Checks` tab.

#### Set-up ESlint in your local env - it will help you to find style errors

Go project folder using WSL environment and initiate NPM with following command

```sh
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (redux-bookstore)
version: (1.0.0)
description: 
entry point: (webpack.config.js) src/index.js
test command:
git repository: 
keywords:
author: Gerald Goh
license: (ISC)
About to write to /package.json:

{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/geraldgsh/redux-bookstore.git"
  },
  "author": "Gerald Goh",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/geraldgsh/redux-bookstore/issues"
  },
  "homepage": "https://github.com/geraldgsh/redux-bookstorer#readme"
}
```

Command above will generate a "package.json" file for ESlint work off from.

Install ESlint with following command

1. Run `npm install eslint eslint-config-airbnb --save-dev` (not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).

2. Run `npx eslint --init`.

3. Make sure you select the following options when prompted.

    `? How would you like to use ESLint?` To check syntax, find problems, and enforce code style

    `? What type of modules does your project use?` JavaScript modules (import/export)

    `? Which framework does your project use?`  React

    `? Does your project use Typescript`  No

    `? Where does your code run?`     Browser

    `? How would you like to define a style for your project?` Use a popular style guide

    `? Which style guide do you want to follow?`      Airbnb

    `? What format do you want your config file to be in?`       JSON

    `The config that you've selected requires the following dependencies: ? Would you like to install them now with npm?`       Yes

4. Copy the contents of [.eslintrc.json](./.eslintrc.json) to the newly generated `.eslintrc.json` overwritting the previous content.

5. **Do not make any changes in config files - they represent style guidelines that you share with your tem - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.

6. Double check your `./src` folder for any extra unnecesary `.eslint` config files that might have been generated as this might cause an issue with stickler when you create your Pull Request later on.

7. Run `npx eslint .`.

8. Fix linter errors.

9. **IMPORTANT NOTE**: feel free to research [auto-correct options for ESlint](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

### Set-up Rubocop in your local env - it will help you to find style errors

1. Add `gem 'rubocop'` to `Gemfile` (not sure how to use Gemfile? Read [this](https://bundler.io/v1.15/guides/bundler_setup.html)).
2. Run `bundle install`.
3. Copy [.rubocop.yml](./.rubocop.yml) to the root directory of your project
4. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
5. Run `rubocop`.
6. Fix linter errors.
7. **IMPORTANT NOTE**: feel free to research [auto-correct options for Rubocop](https://rubocop.readthedocs.io/en/latest/auto_correct/) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

## Troubleshooting

1. All config files are in my repo but Stickler does not work.

   - Make sure that Stickler app has permission to access your repository. Find Stickler here https://github.com/settings/installations and check its configuration.

   ![screenshot](https://github.com/microverseinc/linters-config/blob/master/assets/images/stickler_app_config.png)

   - Try to add a new commit to your Pull Request. Stickler should detect changes in your repo and start checking your code.

2. `while scanning for the next token found character '\t' that cannot start any token` error.
   - Please make sure that you used spaces not tabs for indentation.

3. Check if someone else has had similar problem before [here](https://questions.microverse.org/c/linters-stickler).
   Please make sure that you used spaces not tabs for indentation.

4. Stickler does not work and nothing helps 💥 - run eslint in your local env and correct all errors. **Remember to let your Code Reviewer know that you had problems with Stickler and you used linter in local env.**

### Future Features

1. 
2. 

### To begin

1. Clone Repo
2. 'npm install' to install dependencies
3. `rails s`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Wiki

Checkout our [wikipage](https://github.com/geraldgsh/energy-tracker/wiki) for more details. 

#### Live Demo
[Demo]()


#### Prerequisites
Web browser like Chrome, Mozilla or similar.

### Original Project Source

[Link](https://www.notion.so/Final-Capstone-Project-Tracking-App-22e454da738c46efaf17721826841772)

### Github Repo
https://github.com/geraldgsh/energy-tracker

👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)

Twitter: [geraldgsh](https://twitter.com/geraldgsh)

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)


## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/energy-tracker/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.
>>>>>>> cb916c678f6a09400bd011da444cf30d24a65796
=======
# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
>>>>>>> 2d582765d6bb52d89b2268f8db5f7b5843963e1a
