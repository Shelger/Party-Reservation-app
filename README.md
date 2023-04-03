# Party-Reservation-app

This project is a website application allowing company to post their events and allowing the customer user to reserve and pay for the event.

The main purpose of this repository is to continue evolving the front-end this app, increasing its functions and making it easier to use. 

The back-end code for this project can be fount at: https://github.com/sfdevshop/reservation-party-booking-app

The wiki page can be found at: https://en.wikipedia.org/wiki/Draft:Reservation-party-booking-app#Updating_password_of_company_user.

##### Contents

- Overview

- Source Organization

- Components

## 1. Overview

Reservation and Party Booking is a website built with React. Material UI, Axios. We use Axios to make HTTP requestServer side rendering and node.js back-end will event further speed up your booking process.

## 2. Installation

With NPM:

```shell
npm start
```

If you want to install the front-end together with the back-end, run:

```shell
npm run dev
```

## 3. Test

With NPM:

```shell
npm test
```

## 3. Source Organization

- public
  - index.html
- src

  - api

    - companyAPI.js

    - eventAPI.js
  - functions

    - company.js
    - events.js
  - mocks
    - handlers.js
    - servers.js
  - components

    - App

      - App.js

      - useToken.js

    - Company

      - ChooseDates
        - ChooseDates_AllEvents.js
        - ChooseDates_Days.js
        - ChooseDates_Times.js
        - ChooseDates.js
      - CreateEvents
        - CreateEvents.js
      - ManageOrders
        - Orders.js
        - Title.js
      - DashBoard.js
      - ListItems.js
      - MainList.js
      - SecondList.js

    - Footer

      - Footer.js
      - FooterMenu.js
      - MobileFooter.js

    - Header

      - Profile
        - CompanyDialog.js
        - ProfileDialog.js
        - ProfileForm.js
      - AccountInfo.js
      - Header.js
      - LocationSearch.js
      - Logo.js

    - Homepage

      - CarouselCard
        - CarouselCard.css
        - CarouselCard.js
        - LocationCards.js
      - Homepage.js
      - tests
        - Homepage.test.jsx

    - Login

      - Login.js

    - MobileSearch

      - MobileSearch.js

    - Process

      - ChoosingDate
        - DatePicker.js
        - PackageList.js
        - ProcessDate.js
        - TimeAvailable.js
      - Process1
        - context.js
        - images.js
        - pdButton.js
        - Process1.js
      - nextButton.js

    - Signup

      - Signup.js
  - themes

    - AppThemeProvider.js
    - commonStyles.js
  - index.css
  - index.js
  - reportWebVitals.js
- .env
- .gitignore
- package-lock.json
- package.json
- yarn.lock

## 4. Pages

- Sign Up

![signup@2x](https://tva1.sinaimg.cn/large/e6c9d24egy1h526mna9huj212k0p875l.jpg)

- Log In

![login@2x](https://tva1.sinaimg.cn/large/e6c9d24egy1h526mzmr6xj212k0p8dgo.jpg)

- Homepage Before Signing In

![homepage1 - localhost_3000@2x](https://tva1.sinaimg.cn/large/e6c9d24egy1h526nv3ai4j212o0o83zo.jpg)

- Homepage After Signing In

![homepage2@2x](https://tva1.sinaimg.cn/large/e6c9d24egy1h526og1470j212s0p8ta1.jpg)

- Company Portal - Create Event

![company_event@2x](https://tva1.sinaimg.cn/large/e6c9d24egy1h526oxef1oj212k0p8myq.jpg)

- Company Portal - Choose Dates

![company_dates@2x](https://tva1.sinaimg.cn/large/e6c9d24egy1h526pyxt8yj212k0p8tas.jpg)

- Company Portal - Manage Orders

![company_orders@2x](https://tva1.sinaimg.cn/large/e6c9d24egy1h526qfps6oj212k0p8mzl.jpg)

## 5. User Story

![user story@2x](https://tva1.sinaimg.cn/large/e6c9d24egy1h526ssk970j21kj0u0n15.jpg)

## 6. Data Flow

![sequence flow@2x](https://tva1.sinaimg.cn/large/e6c9d24egy1h526uzk8pjj21a70u0dit.jpg)
