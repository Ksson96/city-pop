<<<<<<< HEAD
# CityPop Tracker

CityPop Tracker is a mock application aimed at giving users the capability to retrieve population data for the cities around the world.

## Table of Contents

1. [UX](#ux)

2. [Features](#features)
  - [City](#city)
  - [Country](#country)

3. [Technology Used](#technology-used)

4. [Instructions](#instructions)

5. [Author](#author)

6. [Credits](#credits)

# UX
- The goal was to create an easy to navigate search function. Therefore, when choosing a font and color scheme, the goal was to present a nice looking UI while at the same time making it easy to read.
- Fonts mainly used: Oleo Script, Segoe UI, Sans-serif
- Color Scheme: #462749, #FFF, #000

# Features
- The main feature is the search functionality which is split into two seperate search bars, one for searching cities and one for countries. 
- Depending on which one the user chooses to use, the results will be retrieved and displayed differently.
- When using the search functionality, all data is being retrieved from the [Geonames API](https://www.geonames.org/)

## City
- Searching for a city, the user will be presented with the name of the city, the country name in which the city is located aswell as a numbers displaying the amount of inhabitants that reside there.

## Country
- Searching for a country, a list of up to 10 cities will be displayed, ordered by population count. The names of the cities aswell as the country will be displayed alongside a button. Clicking the button will then display the population for the selected city.

# Technology Used
- Languages
  - Javascript
  - HTML
  - CSS
  
- Node v16.15.1
- Npm v8.10.0
- Bootstrap v5.1.3
- Create-React-App 
  - React v18.2.0
  - React-dom v18.2.0
  
 - Data source [Geonames Webservices](https://www.geonames.org/)

# Instructions

How to run the application
- Either copy the source code or clone this github repository and save it to your local machine
- Open the project in your code editor
- Open the terminal and navigate to the selected project folder
- Run "npm install" to configure all the dependencies 
- Run "npm start" to start the application
- Search to your heart's content

# Author
[Anton Andersson](https://github.com/Ksson96)

# Credits
Credit to [Geonames Webservices](https://www.geonames.org/) for usage of their API

