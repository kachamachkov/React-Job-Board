# React Jobs :briefcase:

## Project Description

A personal project of mine, interactive job board built with reactjs.

* Frontend: ReactJS
* Backend: SoftUni practice server (vanillaJS)


## Features

- Latest listings at home page :green_book:
- Full CRUD operations for job listings :pushpin:
- Guest and Authenticated UX differs: :shamrock:
  - Guests can navigate through listing, but cannot edit/delete them or comment
  - Authenticated users can comment on other users listings
  - Only job listing's owner can edit/delete their listing
- Authentication :closed_lock_with_key:
  - Pre-built user for testing purposes (if you do not want to register :)
  - Username: admin@abv.bg
  - Password: admin
- Relations (Comments & Users) :man: :woman:

## Deployment

- https://react-jobs-kachamachkov-199405.web.app/

## Installation and Setup:

Follow these instructions to get the project up and running on your local machine.

## 1. Ensure you have node.js installed on your machine.

## 2. Clone the Repository:

```bash
git clone https://github.com/kachamachkov/react-jobs
cd .
```

## 3. To start the server (in new terminal):

```bash
cd server
node server.js
```

## 4. To run the client (in new terminal):

```bash
cd client
npm i
npm run dev
```

## 5. Example images

![alt text](/client/public/images/image-1.png)
![alt text](/client/public/images/image-2.png)
![alt text](/client/public/images/image-3.png)
![alt text](/client/public/images/image-4.png)
