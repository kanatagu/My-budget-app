# My Budget App 

This is simple budget app to track your living expenses. 

## Demo 

:cherry_blossom: Main page  
![mainpic](https://user-images.githubusercontent.com/66394413/94089051-06e79a80-fe4d-11ea-845c-0155101050d5.png)

:cherry_blossom: SignIn page  
![Page-Signin](https://user-images.githubusercontent.com/66394413/94089007-eae3f900-fe4c-11ea-8550-58f0e6f4f4cb.png)


:cherry_blossom: SignUp page  
![Page-Signup](https://user-images.githubusercontent.com/66394413/94088812-5c6f7780-fe4c-11ea-86df-dc3eeeac43b7.png) 

:cherry_blossom: Movie   
*Sorry for the low image quality  
![app_gif](https://user-images.githubusercontent.com/66394413/94087260-48297b80-fe48-11ea-8be1-c4b9cfca27ab.gif)  


## Features 
- SignIn/SignUp
- Save and get your original data using Firebase
- calculated % of expenses based on the total income
- Monthly data (currently I'm trying to implement)


## Requirements
- node 14.8.0
- React 16.13.1
- firebase 8.9.0


## Installation
- React `npx create-react-app my-app cd my-app`  
- Firebase `npm install -g firebase-tools`


## Deployment

- To view it in the Local browser  

`npm start`  
 Open [http://localhost:3000](http://localhost:3000)

- To deploy in public  

`firebase init` chooase FireStore, Functions, Hosting  
`firebase login`

**Note**  
choose `build` for public direcory as initial setting was `public`  

`npm run build`  

`firebase deploy`  

## Author
Kana

## License
MIT



