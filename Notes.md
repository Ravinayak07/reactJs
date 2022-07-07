## INTRODUCTION
- React is a javascrit library which is oftenly referred as a framework.
- Helps to create SPA(single page applications). These are those applications which doesnot load when u move from one page to another.
- In react, JSX is used which stands for javascrit syntax extension.

## REQUIREMENTS FOR CREATING REACT A
- A) node.js
- B) npm

## CHECK THESE COMMANDS BEFORE CREATING REACTAPP:
```
C:\Users\ASUS>npm --version
7.19.0

C:\Users\ASUS>npx --version
7.19.0

C:\Users\ASUS>node --version
v14.17.6

//checked in both powershell and cmd
```
- nodejs helps in running the javascrit outside the web browser in your computer. Before nodejs was released, js could only be run in the webbrowser.
- npm is a package manager. It is same as pep in python.It helps in installing the packages(i.e the code written by someone else) to your computer.
- npm downloads the packages to your computer 
- But if u dont want to download the packages, u can use npx which only uses the packages and doesnot downloads it

### STEPS TO CREATE REACT APP:
- Go to the folder where u want to create the react App.
- shift+right click > open windows powershell here
- run this command= npx create-react-app my-app
- After succesfully creating react app, open terminal of vs code and run: npm start
- Your create App will be displayed on our Local browser(http://localhost:3000)
- In the termninal, there will another link (On Your Network:  http://192.168.112.117:3000 ). You can view the react app on your phone using this link.


## INCLUDE BOOTSTRAP IN REACT:
- Open boostrap website and go to the [starter template](https://getbootstrap.com/docs/5.2/getting-started/rtl/#starter-template)
- Add the option 1 script tag in after the body section of index.html of the react project
- Also copy the boostrap css link of the starter template and paste before the title tag of index.html of the react project.
### COMPONENTS:
- In react, you can make class based components or function based components.

1st method
npm install create-react-app basicapp

npm > stands for node package manager. Gives us prefedined and prebuilt packages to use
name can no longer contain capital letters
with this command "npm install create-react-app basicapp" i got this error
```
PS C:\Users\ASUS\Documents\Ravi\My_Notes\ON GITHUB\ReactJS> npm install create-react-app basicapp
npm ERR! code E404
npm ERR! 404 Not Found - GET https://registry.npmjs.org/basicapp - Not found
npm ERR! 404
npm ERR! 404  'basicapp@*' is not in the npm registry.
npm ERR! 404 You should bug the author to publish it (or use the name yourself!)
npm ERR! 404
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\ASUS\AppData\Local\npm-cache\_logs\2022-07-07T07_25_50_682Z-debug.log
```
but with this command "npx create-react-app basicapp", it worked. Find out why. One reason may be that your npm must be of the latest version and react must not have been updated for it.
2nd method
npx create-react-app basicapp

npx means npm install


After successfully creating a react App, the folder contains
1) README.md tells about the purpose of the project, what it is doing,etc
2) package.json : contains the information of app like name of app, version of app, dependencies( the packages on which the app depends), scripts(npm start, build, etc run from here)
3) package-lock.json : We can't change this. It is formed from package.json only
4) .gitignore files : In this the files which we don't want to put on github like password files, keys , enviroment files
5) Src->App.test.js : All the test files are written by react. so that if there is some changes/updation , then these test files lets us know. For ex: react had made some updation and thats why our project is not working. In that case, the test files tells what upadtion has been had and how can we manage it
6) src->App.js : component of react app 
7) src->index.js: we import and call App.js here. So the main code is wriiten in App.js and it is called in index.js. The whole app.js fie is written inside index.js in a single line as <App />
- React is a single page Application. You can understand this when u see that it actually has a single page only i.e only one index.html which is inside the public folder. Inside the file there is <div id="root"></div> which takes it to the index.js and from there it goes to display the content of app.js. So basically it is the index.html which runs on the browser. So the hierarchy is index.html -> index.js -> App.js -> other compenents
```
//index.html file


    <div id="root">

      <!--
        index.js content
      -->
    </div>

    //So basically you can say that the entire code is inside this <div> tag. Its the same way as in any simple html application where the entire content is inside <body> tag
```
In html we load css and javascript but in react we import them. Actually in react we import the css file only and we write both html and js combingly



now go to the project folder, and run:

- npm start   : this will open your project at http://localhost:3000/