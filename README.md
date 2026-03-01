* Project Concept

The Grown Folks Collective is a web application built to facilitate genuine human connection. Targeted at entrepreneurs aged 35 and older, the platform aims to combat social isolation by providing a curated list of in-person gatherings.

Unlike standard networking events, GFC focuses on thought-provoking conversations and building lasting friendships. As the founder, I host every event to ensure a high-touch, engaging experience for every attendee.

* Technologies Used:

- React.js (Vite): Chosen for its fast development cycle and efficient component-based architecture.
- Eventbrite API (v3): Integrated to pull real-time event data directly from my organization’s dashboard.
- React Router: Implemented to create a seamless Single Page Application (SPA) experience between the Home and Events views.
- CSS3 (Flexbox/Grid): Used to create a responsive, premium "Navy and Gold" aesthetic that appeals to a mature demographic.
- Dotenv (.env): Utilized to securely manage the private API token and prevent sensitive data from being pushed to GitHub.

* The Approach Taken
I used Data Logic and User Intent:

- Security First: I started by abstracting the API token into a .env file to follow industry best practices for security.

- API: Because Eventbrite has deprecated certain endpoints, I implemented a two-step fetch: first retrieving the Organization ID, then using that ID to pull the specific event list.

- Temporal Filtering: To improve UX, I wrote logic using the JavaScript Date() object to separate events. This ensures users see Upcoming events first, while Past events are moved to a "Previous Gatherings" section to provide social proof without cluttering the main view.

* Usage Instructions
- Clone the repository.

- Run npm install to download all necessary dependencies.

- Create a .env file in the root folder and add your private token: In the comments on my SBA320 submission link.

- Run npm run dev to launch the development server.

- Navigate to the Events page to see the live-synced GFC gatherings.

* Unsolved Problems & Future Enhancements
- Image Integration: Currently, the event cards pull text data. A future enhancement would be to map the logo.url from   Eventbrite to show the specific cover image for each retreat.

- Member Login: I intend to add a Firebase authentication layer so that 35+ members can create profiles and "favorite" events they plan to attend.

- Business Travel Module: Adding a dedicated section for "Travel" by adding the FORA api, for people to book their group trip. I willl also add a member login and admin login.