# My Budget App 

This is simple budget app to track daily living expenses. 

# Demo 

Main page
![mainpic](https://user-images.githubusercontent.com/66394413/94086467-0a2b5800-fe46-11ea-91ee-998fe3357a7b.png)

SignIn page
![Page-Signin](https://user-images.githubusercontent.com/66394413/94086564-465eb880-fe46-11ea-9875-1536b98905db.png)


SignUp page
![Page-Signup](https://user-images.githubusercontent.com/66394413/94086571-51194d80-fe46-11ea-8993-2a56212defd5.png)

Movie 
*Sorry for the low image quality
![app_gif](https://user-images.githubusercontent.com/66394413/94087260-48297b80-fe48-11ea-8be1-c4b9cfca27ab.gif)


# Features 
- SignIn/SignUp
- Save and get your original data using Firebase
- calculated % of expenses based on the total income
- Monthly data (currently I'm trying to implement)


# Installation
React `npx create-react-app my-app cd my-app`
Firebase `npm install -g firebase-tools`

### Deployment

- To view it in the Local browser

`npm start`
Open [http://localhost:3000](http://localhost:3000)

- To deploy in public

`firebase init` chooase FireStore, Functions, Hosting
`firebase login`

**Note** 
choose `build` for public direcory. initial setting was `public`

`npm run build`

`firebase deploy`



