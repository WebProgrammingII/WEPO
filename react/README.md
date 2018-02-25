## Project 1
In this project we are going to create a simple React application for a company called Pro Gamers. Their application should include a navigation bar which contains three anchors to Top 10 Games, News and About. The initial page should be News and the other anchors are only for display because routing should NOT be implemented in this project. In the News section there should be a title, a search feature which can search through within the news and a filter depending on the category. Each news item within the list should have a title, short description and a category. The project should be structured in a modular manner. All news data are within the state of MainContent

## Project 2
We are going to expand on our project and introduce good practices when defining components in React. The expansions is to define PropTypes for all our components who receive props. Also make use of defaultProps where they make sense. Introduce a global user within the application. It can be hard-coded for now. The App should hold on to the user.

## Project 3
We are going to expand on our project and create the NavigationBar which uses routing in the application. We are going to define three routes: News, Top 10 Games, About. The main site should be News (/). NavigationBar should have it's tests defined before implementing the component. Use dynamic links for all the items in the News section, define a dynamic route based on the id.

Also add dynamic links when a news item is pressed, it should return a detailed view.

The components Top 10 Games and About are provided.

## Project 4
Now the guys from Pro Gamers really need our help! They are offering to send exclusive deals to their customers and want to provide a form to register the user to this service. We of course need to make sure the data is correct and garbage can't be sent from this form. Therefore we need to implement some form validation mechanism. We should display a toaster if the form is successfully submitted and the form should be cleared from all it's previous inputs. The component should console log the form data if the data is successfully provided.

Offer a selection of country, region and city which uses remote data. Use countryService to provide information for the country, region and cities

The data to provide is the following:
    * Full name
    * Telephone
    * Email
    * Country, region and city
    * Address
    * Submit button

## Project 5
A new feature has emerged the guys at Pro Gamers need to have! They want to be able to edit your profile: name and photo. When the name and photo are successfully submitted, a toaster should be shown and the name and photo should appear in the footer of the site. These information should be stored within the Redux store.

## Project 6
There is a new demand! Icelandic speakers are complaining that the site is only in English and want to have the site in Icelandic too. You should define a new reducer which handles language changes within the application. Localization files are stored in the /resources folder. The user should be able to toggle a button in the navigation bar which enables English or Icelandic. When the user selects a new language, the cookie should be updated so when the user refreshes the site, it will remember his option. Reducers should follow the Single-Responsibility-Principle (SRP).

## Project 7
Pro Gamers are expanding! They want to offer authentication to the application, where users can sign-in with Facebook or GitHub. Whenever a user signs in with either of these third party authentication methods, information regarding the user should be stored within the Redux store. The Redux store should keep track of all currently authenticated users. All authenticated users should additionally get a unique guid as id. Also the image in the footer and name should update according to the information received from third-party authentication.

Use: http://www.passportjs.org

Facebook:
  * ID: 626379827693794
  * Secret: 610df7eb73fcc4761b3f2587903d88f5

GitHub:
  * ID: 1dc903d1011adfc36493
  * Secret: 69e276a21a17285da23ec03390faaa7260a7016b

## Project 8
Now Pro Gamers are really pushing it! They want to offer a chat feature within the application which makes use of socket.io and offers both a private and group chat feature. Each user can create a chat and assign as many currently authenticated users he wants to the chat with.
