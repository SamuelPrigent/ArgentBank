## Start project

install dependencies : `npm install`

## Run Database on ur local machine (mac commands)

- cd ~
- Start : `brew services start mongodb-community@6.0`
- Stop : brew services stop mongodb-community@6.0
- Check if mongoDB running : brew services list

## Create 2 user

- run this command once to create two users in database : `npm run populate-db`

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## In backend folder (for server)

- run back with nodemon : `npm run dev:server`

## In frontend folder

- run front : `npm run dev`
