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
5) Src->App.test.js : All the test files are written by react. so that if there is some changes/updation , then these test files lets us know. For ex: react had made some updation and thats why our project is not working. In that case, the test files tells what upadtion has been had and how can we manage it.
So basically these test files are not needed that much. its better to remove them(App.test.js, setUp.test.js, etc).
- test files are like test cases which checks whether your code is running well or not. So the developers of react made react along with test files so that if there is break in code, they can identify and rectify it. and when we create a react app, in the starting there will a react logo and text below. Since we don't need that, thats why we also don't need their test files/test cases.  it will unnecessarily increase the files
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


Varibales in js
- no need to specify the data type:
- const a =10;
- variables can be declared in three types: const, var , let

## const
- connot be modified or reinitialized

## let:
- can be changed but can't be reinitialsied
let b =30;
b = 20;
let b =40; //error

## var:
- can be used in any way
var name = "Ravi"
name = "Sinu"

var name = 10; //var can be reinitialised. now name has integer value

# strictness order:
- const(most strict) > let > var(least strict)
# Diff between let and var


# Function in c++:
int funname(){
  cout<<"ravi";
  return 0;
}

# Function in js:
- Type 1:
```
//function defination

//in fun def also, data type not needed. In fact data type is not needed in JS 
function funname() {  
  console.log("Ravi");
  return;
}
//function call
funname();
```
- Type 2: using Arrow operators
```
const funname = () => {   //also called fat arrow fun or opeartor
  console.log("Ravi");
  return;
}

//function call
funname();
```
- Type 1 and Type 2 are exactly the same just different way of writing. There is no difference in functionalities


//Global execution context
:- Its is like a container. Whatever js code runs, that first enters into GEC which is 
a container. There it is used as stack (push and pop). thats why GEC is also 
called call stack.

whenever you run a fun or any variable in javascript, two things happen:


function xyz() {
   cout<<"Ravi";
}

const a = b;

- step 1: GEC : Create a container and reserves a memory for that fun or variable i.e for fun xyz and variable a
- step 2: xyz ka code and a ka value is added to the  container created in step 1. step 2 will work when we use it. ex: fun call
- ex: xyz();
- for const, step 1 is variable declaration
step 2 is assigning value

Now when you run the fun:
xyz();

it will first go to GEC to check whether there is any container having code of xyz. If its there, it will say it to execute it


- Unlike c++, in js you can call fun before defining it
- For ex:
```
xyz();    //this is also right

function xyz(){

}
```
but it will not work in case of const. For const you have to define before using it
ex:
```
//Error
console.log(a);
const a =10;
```
```
//Correct
const a =10;
console.log(a);

```
-  Hence in function of type 2, fun def should be before fun call due to the presence of const. Ex:
```
//Error
funname();

const funname = () => {   
  console.log("Ravi");
  return;
}
```
```
//Correct

const funname = () => {   
  console.log("Ravi");
  return;
}

funname();
```
- But in type 1, you can call before defining


- there are two types of components in react:
- Component name should always start with capital letter
1) Class components : not used anymore due to some limitations. Ex:
```
class ClassName extends React.Components {
      render() {
          return <h1>hello</h1>
      }
}
```
2) Functional Components. ex:
```

function App() {
  return (
    <p>Hi!</p>
    //both html and js here
    //here write UI and logic both
  );
}

//components are generally functions only. They are called components because they contain both html and js
```
Types of functional components:

# Type 1:
```
function Componentname() {  
    //JS code will be here. We will be not making a separate file for js

  return{
    //HTML Code
  }
}

//so when we call a component, we expect to get html from it
```
- Ex:
```
function App() {
  return (
    <p>Hello</p>
  );
}

//So when we call the above App component, we expect to get the html code("Hello")
as output


//In 
```
after creating any react project, do clean up  process:
- Clean up process: delete app.test.js, logo.svg, setuptest.js. delete app.js html code and app.css code, index.css

- React by default adds some margin. To remove it add this code in App.css:
```
body {
  margin: 0;
}
```

"./" matlab aju baju dekho
"../" matlab ek folder bahar jaake dekho


- when js varibale is used inside html, its wriiten inside curly braces {}:
```
function Navbar(){
    
    //js code

    var name = "<RSN />";

    return(
        <div className="navbar_container">
            <div className="navbar_left">
              {name}
            </div>
            <div className="navabr_right">

            </div>
        </div>
    )
}
```

Difference Between Margin and padding:
- padding inside the boundary whereas margin is outside the bounday
- Ex:
```
.navbar_container {
   margin-left: 25px:
} 
//In this case whole navbar will be shifted towards right


.navbar_container {
   padding-left: 25px:
} 
//In this case the tags inside navbar_container will be shifted towards right
```
../../ :- out of one folder, then again out of another folder