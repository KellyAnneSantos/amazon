# `amazonian`

## Technologies

- Sequelize/Express
- React/Redux

## Quick Links

- [Database Schema](https://github.com/KellyAnneSantos/amazon/wiki/Schema)
- [API Documentation](https://github.com/KellyAnneSantos/amazon/wiki/API-Documentation)
- [Live Site](https://app-name-amazon.herokuapp.com/)

## About

This project is a web application inspired by the website Amazon. Currently, the project includes two CRUD features: orders and reviews. It also has a functioning search and partial CRUD for products, images and descriptions. One must log in to access the site. Demo user login is available. In addition to products, orders, images, descriptions and reviews, the backend has working migrations, models and seeders for wishlists, idea lists, questions, answers, upvotes, downvotes, helpfuls, follower relationships, posts and likes.

## Landing Page Screenshot

<img width="1792" alt="Screen Shot 2023-01-16 at 9 45 35 PM" src="https://user-images.githubusercontent.com/76859444/212806149-bc974cf2-4251-483a-b3a4-27770952910d.png">

## Search Results Screenshot

<img width="1792" alt="Screen Shot 2023-01-22 at 12 44 39 AM" src="https://user-images.githubusercontent.com/76859444/213904129-e18d0006-e213-492f-a8c9-a146891c8711.png">

## Product Detail Screenshot

<img width="1792" alt="Screen Shot 2023-01-16 at 9 46 07 PM" src="https://user-images.githubusercontent.com/76859444/212806336-98378a43-b2cf-4601-9eec-aa3f99cc417c.png">

## Review Screenshot

<img width="1792" alt="Screen Shot 2023-01-16 at 9 47 46 PM" src="https://user-images.githubusercontent.com/76859444/212806500-0a9b66a2-1b7a-4037-9f1f-07644e688196.png">

## Cart Screenshot

<img width="1792" alt="Screen Shot 2023-01-16 at 9 46 24 PM" src="https://user-images.githubusercontent.com/76859444/212806635-dbc8a19d-885e-4435-aecd-0d41e97c5da4.png">

## Orders Screenshot

<img width="1792" alt="Screen Shot 2023-01-16 at 9 57 30 PM" src="https://user-images.githubusercontent.com/76859444/212806783-5b73a27c-fb0b-4eb9-910f-5a7b779d62b8.png">

## Inventory Screenshot

<img width="1792" alt="Screen Shot 2023-01-16 at 9 49 13 PM" src="https://user-images.githubusercontent.com/76859444/212806819-5ed9b90d-5b2b-4003-a677-83caca72fa96.png">

## Setup

1. Clone the project
2. Create a .env file as below:

```
PORT=8000
DB_FILE=db/dev.db
JWT_SECRET=«generate_strong_secret_here»
JWT_EXPIRES_IN=604800
```

3. Run "npm install" in the root directory, back end and front end folders
4. Run "npx sequelize db:migrate" in the back end folder
5. Run "npx sequelize db:seed:all" in the back end folder
6. Run "npm start" in the back end terminal
7. Run "npm start" in the front end terminal

## Future Features

- [ ] Wishlist CRUD operations
- [ ] Question and Answer CRUD operations
- [ ] Profile page
