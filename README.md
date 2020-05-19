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
* SweetAlert

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
