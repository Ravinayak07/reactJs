## INTRODUCTION
- React is a javascrit library which is oftenly referred as a framework.
- Helps to create SPA(single page applications). These are those applications which doesnot load when u move from one page to another.
- In react, JSX is used which stands for javascript syntax extension.

## REQUIREMENTS FOR CREATING REACT A
- A) node.js
- B) npm : node package manager

## CHECK THESE COMMANDS BEFORE CREATING REACTAPP:
```
C:\Users\ASUS>npm --version
7.19.0

C:\Users\ASUS>npx --version
7.19.0

C:\Users\ASUS>node --version
v16.16.0

//checked in both powershell and cmd
```
- nodejs helps in running the javascrit outside the web browser in your computer. Before nodejs was released, js could only be run in the webbrowser.
- npm is a package manager. It is same as pep in python.It helps in installing the packages(i.e the code written by someone else) to your computer. It gives us prefedined and prebuilt packages to use
- npm downloads the packages to your computer 
- But if u dont want to download the packages, u can use npx which only uses the packages and doesnot downloads it

## STEPS TO CREATE REACT APP:
- Go to the folder innside which u want to create the react App.
- shift+right click > open windows powershell here  OR open CMD.
- Run the any of the following two commands:

### NOW THERE ARE TWO CAMMANDS TO CREATE REACT APP:
Command 1: **npm install create-react-app app-name**
- app-name should not contain capital letters
- Sometimes with this command you may get error like:
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
- One of the reasons for the above may be that your npm must be of the latest version and react must not have been updated for it.
- So solution: Either update the npm version(simply by reinstalling the latest version) or create the react app with the 2nd command:

Command 2: **npx create-react-app app-name**
- With this command above error will not occur
- npx simply means "npm install"
- So **npm install create-react-app app-name** and **npx create-react-app app-name** are same

<br>

- After succesfully creating react app, open terminal of vs code and run: **npm start**
- Your React App will be displayed on our Local browser(http://localhost:3000)
- In the termninal, there will another link (On Your Network:  http://192.168.112.117:3000 ). You can view the react app on your phone using this link.


## HOW TO INCLUDE BOOTSTRAP IN REACT:
- Open boostrap website and go to the [starter template](https://getbootstrap.com/docs/5.2/getting-started/rtl/#starter-template)
- Copy option 1 script tag(i.e Bootstrap Bundle with Popper ) of the starter template and paste it in the bottom of the body section of index.html of your react project.
- Also copy the boostrap css link of the starter template and paste before the title tag in the head section of index.html of the react project.

## BREAKDOWN OF THE FILES OF YOUR REACT PROJECT:
After successfully creating a react App, the folder contains
- **README.md**: tells about the purpose of the project, what it is doing,etc
- **package.json** : contains the information of app like name of app, version of app, dependencies(the packages on which the app depends), scripts(npm start, build, etc run from here), etc
- **package-lock.json** : This file cannot be modified. It is formed from package.json only
- **.gitignore** : In this, we add the files which we want the git to ignore.Those are basically the files which we don't want to put on github like password files, keys , enviroment files,etc
- **src->App.js** : The main component of react app 
- **src->index.js**: we import and call App.js here. So the main code is wriiten in App.js and it is called in index.js. The whole app.js fie is written inside index.js in a single line as <App />.

- React is a single page Application. You can understand this when u see that it actually has a single page only i.e only one index.html which is inside the public folder. Inside the file there is <div id="root"></div> which takes it to the index.js and from there it goes to display the content of app.js. So basically it is the index.html which runs on the browser. So the hierarchy is index.html -> index.js -> App.js -> other compenents
- **index.html** file:
```

    <div id="root">

      <!--
        index.js content
      -->
    </div>

//So basically you can say that the entire code is inside this <div> tag. Its the same way as in any simple html application where the entire content is inside <body> tag
```
- In html we load css and javascript but in react we import them. Actually in react we import the css file only and we write both html and js combingly in the functional component.

## CLEANUP PROCESS:
- After creating a react app, there will be some files which are not required. So we delete them to reduce the total files size.
- Those files are:
- Src->App.test.js, setUpTest.js : All these test files are written by react. so that if there is some changes/updation in react, then these test files lets us know. For ex: react had made some updation and thats why our project is not working. In that case, the test files tells what upadtion has been had and how can we manage it.So basically these test files are not needed that much. its better to remove them(App.test.js, setUp.test.js, etc).
- test files are like test cases which checks whether your code is running well or not. So the developers of react made react along with test files so that if there is break in code, they can identify and rectify it. and when we create a react app, in the starting there will a react logo and text below. Since we don't need that, thats why we also don't need their test files/test cases.It will unnecessarily increase the files

# SOME CONCEPTS OF JAVASCRIPTS:
variables in js
- no need to specify the data type:
- const a = 10;
- variables can be declared in three types: const, var , let

const
- connot be modified or reinitialized

let:
- can be changed but can't be reinitialsied. For ex:
```
let b =30;
b = 20;      //can be changed
let b = 40;  //Error: becoz can;t be reinitialised
```
var:
- can be used in any way(can be modified and reinitialised).Ex:
```
var name = "Ravi"
name = "Sinu"

var name = 10; //var can be reinitialised. now name has integer value
```
- **Strictness order**: const(most strict) > let > var(least strict)

## FUNCTIONS IN JS:
- **Function in c++**:
```
int funname(){
  cout<<"ravi";
  return 0;
}
```
- **Function in js**:
- There are two type of functions in js
- Type 1: Normal Function
```
//function defination: in fun def also, data type not needed. In fact data type is not needed anywhere in JS 


function funname() {  
  console.log("Ravi");
  return;
}


//function call
funname();
```
- Type 2: using Arrow operators
```
const funname = () => {   //also called fat arrow function or opeartor
  console.log("Ravi");
  return;
}

//function call
funname();
```
- Type 1 and Type 2 are exactly the same. Its just different way of writing. There is no difference in functionalities

## Global execution context(GEC)
- Its is like a container. Whatever js code runs, it first enters into GEC which is a container. There the code is alloted a memory and used as stack (push and pop). Thats why GEC is also called call stack.
```
function xyz() {
   cout<<"Ravi";
}

const a = b;
```
- Whenever you run a fun or any variable in javascript, two step-process happens:
- **Step 1(GEC)**: Creates a container and reserves a memory for that fun or variable i.e (for fun xyz and variable a in the above ex)
- **Step 2:** Now fun xyz and varibale a's value is added to the container created in the step 1. This step starts working when we use the variable or when the xyz fun gets called.
- So for fun xyz, step 1 is function defination and step 2 is function call
- for the varibale, step 1 is the variable declaration and step 2 is assigning value to it.
- Now when you call the fun: xyz(); , it will first go to GEC to check whether there is any container having code of xyz. If its there, it will say it to execute i
- Unlike c++, in js you can call fun before defining it
- For ex:
```
xyz();    //this is also right

function xyz(){

}
```
- but it will not work in case of const. For const you have to define before using it
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

## Objects and map functions in javascript:
OBJECTS: objects are key value pairs
```
const a = {
  name: "Ravi",
  surname: "Nayak",
  age: 10,
}


console.log(a.name+" "+a.surname+" "+a.age);  //Ravi Nayak 10
```
- In js, a fun with no name is called anonymous fun and it is totally valid.
```
//normal  function (arrow function)
const funname = () => {   
  console.log("Ravi");
  return;
}

//Anonymous fun(fun with no name)
() => {   
  console.log("Ravi");
  return;
}
```
- But anonymous fun cannot be called as it has no existance due to no name. So where it is used then ???
- These are used inside the map function where it is definded and called simultaneously.ex:
```
const arr = [1,2,3,4,5];
arr.map(()=>(

))

```
MAP FUNCTIONS:
- map is a method which has a arrow(anonymous) fun inside it
- fun inside map fun bydefault takes two arguments out of which 1 is compulsory i.e value and 2nd one is key which is optional.
- mapping an array in javascript means to access each element of array one by one
- In js map is same as for loop
- Ex:
```
const arr = [1,2,3,4,5];
arr.map( (value, key) => (
     console.log(value);
))

OUTPUT:
1
2
3
4
5
```
- The value word can be changed with words like val,item or any other word of your choice but the keyword "key" cannot be changed:
```
const arr = [1,2,3,4,5];
arr.map( (abc, key) =>(   
       console.log(abc);
))
```
- We can also make objects as the elements of an array. It will be called as array of objects. For Ex:
```
const arrOfObjects =[
  {
    name: "Ravi",
    age: 21
  },
  {
    name: "Sibu",
    age: 22
  },
  {
    name: "Liku",
    age: 23
  }
]
```



## WHAT ARE COMPONENTS IN REACT:
- In react, there are two types of components: **class based components** or **function based components**.
- Component name should always start with capital letter
1. **Class Components** : not used anymore due to some limitations. 
- Syntax
```
class ClassName extends React.Components {
      render() {
          return <h1>hello</h1>
      }
}
```
- 
2. **Functional Components** : 
- Syntax
```

function App() {

  //js and logic is written here

  return (
    <p>Hi!</p>

    //HTML and UI is written here
    
  );
}

```
- components are generally functions only. They are called components because they contain both html and js

## Types of functional components:

### Type 1:
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


```
- when js varibale is used inside html(i.e inside the return() fun), its written inside curly braces {}:
```
function Navbar(){
    
    //js code

    var name = "<RSN />";

    return(
        <div className="navbar_container">
            <div className="navbar_left">

              {name}          //curly braces to access the js variable

            </div>
            <div className="navabr_right">

            </div>
        </div>
    )
}
```
## SOME IMPORTANT POINTS:
- React by default adds some margin. To remove it add this code in App.css:
```
body {
  margin: 0;
}
```

- "./" matlab aju baju dekho. Means Search in the same folder
- "../" matlab ek folder bahar jaake dekho. Means go out of this folder and search in there.
- "../../" :- out of current folder, then again out of another folder

Difference Between Margin and padding:
- padding is applied inside the boundary whereas margin is applied outside the bounday
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

- display:flex enables the flex property. Only after that  you can use other flex properties like flex-direction, justify-content,etc


- The below Code is of how to use array of objects and accessing key value pairs of each object in the html:

```

import React from "react";
import "./TechStack.css";
import react from "../../images/techStack/react.png";
import vuejs from "../../images/techStack/vuejs.png";
import html from "../../images/techStack/html.png";
import cpp from "../../images/techStack/cpp.png";


function TechStack() {

    const techstackData = [
        {
            iconImage: react,
            iconAltproperty: "reactImage",
            iconName: 'React'
        },
        {
            iconImage: vuejs,
            iconAltproperty: "vueJsImage",
            iconName: 'VueJs'
        }
    ]
    return(
     <div className="techstack_container">
        <p className="techstack_title">Tech Stack</p>
        <div className="techstack_image_rows_container">
                <div className="techstack_image_row1_container">

                    <div className="techstack_image_element_container">
                        <img src={react} alt="react image" />
                        <p>React</p>
                    </div>

                    <div className="techstack_image_element_container">
                        <img src={vuejs} alt="react image" />
                        <p>Vue</p>
                    </div>
                    
                 </div>
       
                <div className="techstack_image_row1_container">

                    <div className="techstack_image_element_container">
                        <img src={cpp} alt="react image" />
                        <p>Cpp</p>
                    </div>

                    <div className="techstack_image_element_container">
                        <img src={html} alt="react image" />
                        <p>HTML</p>
                    </div>
   
                </div>
        </div>
      <div>
    );
}

export default TechStack;

```
- Now making the above code more optimized by mapping the array objects so that we dont have to write code for every object
```

import React from "react";
import "./TechStack.css";
import react from "../../images/techStack/react.png";
import vuejs from "../../images/techStack/vuejs.png";
import html from "../../images/techStack/html.png";
import cpp from "../../images/techStack/cpp.png";


function TechStack() {
  const techstackData = [
    {
      iconImage: react,
      iconAltproperty: "reactImage",
      iconName: "React",
    },
    {
      iconImage: vuejs,
      iconAltproperty: "vueJsImage",
      iconName: "VueJs",
    },
  ];

  const techstackData2 = [
    {
      iconImage: cpp,
      iconAltProperty: "cppImage",
      iconName: "CPP",
    },
    {
      iconImage: html,
      iconAltProperty: "htmlImage",
      iconName: "HTML",
    },
  ];
  return (
    <div className="techstack_container">
      <p className="techstack_title">Tech Stack</p>
      <div className="techstack_image_rows_container">
        <div className="techstack_image_row1_container">

          {techstackData.map((value, key) => (
            <div className="techstack_image_element_container">
              <img src={value.iconImage} alt={value.iconAltProperty} />
              <p>{value.iconName}</p>
            </div>
          ))}

        </div>

        <div className="techstack_image_row1_container">

          {techstackData2.map((value, key) => (
            <div className="techstack_image_element_container">
              <img src={value.iconImage} alt={value.iconAltProperty} />
              <p>{value.iconName}</p>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;


```
- Now we are making the above code more optimized by calling a function(showIcon) inside the map function to access the object values

```
import React from "react";
import "./TechStack.css";
import react from "../../images/techStack/react.png";
import vuejs from "../../images/techStack/vuejs.png";
import html from "../../images/techStack/html.png";
import cpp from "../../images/techStack/cpp.png";


function TechStack() {
  const techstackData = [
    {
      iconImage: react,
      iconAltproperty: "reactImage",
      iconName: "React",
    },
    {
      iconImage: vuejs,
      iconAltproperty: "vueJsImage",
      iconName: "VueJs",
    }
  ];

  const techstackData2 = [
    {
      iconImage: cpp,
      iconAltProperty: "cppImage",
      iconName: "CPP",
    },
    {
      iconImage: html,
      iconAltProperty: "htmlImage",
      iconName: "HTML",
    },
  ];

  function showIcon(value) {
    return (
      <div className="techstack_image_element_container">
           <img src={value.iconImage} alt={value.iconAltProperty} />
           <p>{value.iconName}</p>
      </div>
    )
  }
  return (

    <div className="techstack_container">
      <p className="techstack_title">Tech Stack</p>
      <div className="techstack_image_rows_container">
        <div className="techstack_image_row1_container">
          {techstackData.map((value, key) => (
             showIcon(value)
          ))}
        </div>

        <div className="techstack_image_row1_container">
          {techstackData2.map((value, key) => (
              showIcon(value)
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;

```

# useState Fun:
- In react project, we should not change the values of a variables frequently.
- For that we have State variables in react.
- State are the variables which can be used everywhere inside the component. They dont have any scope like const, var and let. They are Globally available in the entire component and are acessible from anywhere in the component.
-  useState is a hook which react gives to change the value of a variable frequently based on our requirement
- A hook is something that react gives which makes our life easier.
- using hooks we can do many advanced things that are normally not possible through js
- So hooks are some additional tools which helps us to use react better
- Before using the useState fun, we need to import it from react. Ex:
```
import {useState} from "react";
```
- how to create usestate varibale OR syntax of usestate:
```
const [variableName, setvaribaleName] = usestate(initialValue)
```
- let or var can also be used
- Here, 1st parameter: varibleName is the name of the variable
- 2nd parameter: setvariableName which is a fun that sets value to the variable.
- usestate(initialValue) is calling the usestate fun to assign new value to the variable
- Name of 2nd param = set+Name_of_1st_param. 
- initialvalue : provides the initialvalue of the variable
- Ex:- 
```
let name = "Ravi";

const [name, setname] = usestate("Ravi");  //assign "Ravi" as a initialValue to the variable name

//both the above statements are same
```
- BTS of setName
- whenever we press any key, that is an event
- dot is applied to access values from objects
- e.target.value:- to print the value inside target object iniside e object. 

- what ever we are writing in the input feild, we are storing in as event and then displaying it simultaneously above the name feild

- const [name, setname] = usestate(""); //initial value is empty because we don't know what the user going to submit

## API(Application Programming Interface)
- used to bring data from the database to frontend to show the end users
```
Analogy:
1. Frontend = You(customer in a restuarant)
2. API taking request = Waiter taking order
3. Backend/database = Kitchen
```
- API works in two ways:
- 1) Request : From Frontend to Backend
- 2) Response : From Backend to Frontend. It has two cases: Happy Case and error case. Happy case is the case when it successfully send the response to the request from Frontend. Error case is the case when it fails to send
- API Consists of two parts:
- 1) Header
- 2) Body

### API Header:
- We we request api in a database, it can be of 4 types:
- Or there can be 4 types of operations in the database
- Read, Add, Delete, Update
- We read data through fetch
- Also called as CRUD: (create, read, update and delete)

# Diff between Signup and login
- Signup = Register = first time = when user doesnot exit in the database = So CREATE operation
- Login = When user exists =  READ operation ( as the login password alreday thetre in the database)
- Change password = UPDATE
- Remove Account =  DELETE

### API Header: 
- It tells the database that what type of API, it is sending. For which operation among CRUD.
- So header contains the CRUD to tell the DB that what type of operation it expects
- For example: for signup the header takes the CREATE to the db

## API METHODS

- POST request = Create : if API takes POST request in header that means to create in DB
- GET request = Read  
- PUT  request = Update 
- DELETE request = Delete  

- these are not only 4 methods of API, there are many methods buy these are the most used

## API Body:
- contains the data/details of the API request that need to be sent to the backend
- for example i want to add a phone of rs 75,000 in my website. So first i need to send create request to the db.
- So the API header will contain the POST type reqeuest and body will contain the data of the phone. So the body will contain the following data:
```
Name: iphone 13
price; 75,000

///database is nothing but key value pairs. In above data, Name and price are the keys while iphone and 75000 are the values
In database , it gets stored as:
{
  name: iphone13
  price: 750000
}
```

# Endpoints:
- This is the url where request has to be made so that we can receive the data
- For example: we if request on this url(https://jsonplaceholder.typicode.com/todos), we will receive some data


# API calling Methods:
- 1)fetch  
- 2)Axios

## fetch :
- fetch bydefault sends GET request
- fetch gives us javascript
- fetch is a function which takes url as a paramter. The url must be the endpoint from where we are going to fetch data

- js runs from top down approach and in synchrounous manner(i.e it completes one statement and then goes to another very fastly.) So when u make a fetch api and if the api is taking time to give back response, then javascript will not wait for it.it will move to the next statement. To prevent this , we use .then:
```
    const endpoint  = "https://jsonplaceholder.typicode.com/todos";

    //GET
    fetch(endpoint)
    .then()          
    
//.then() will execute only after fully receiving the response from the api. That means it stops the further execution of js till the api is fully fetched


// This is done so that we will proceed to the next statement only after receiving the complete response from the api request
```
- After completly receiving the response, we convert into json(i.e in the form of objects) because we can't read the response. So we convert into json format
```

    //GET
    fetch(endpoint)
    .then(response => response.json())
```
- This also take some time. So we will use .then() here also
```

    //GET
    fetch(endpoint)
    .then(response => response.json())
```
- Now console the json data
```
    //GET

    fetch(endpoint)
    .then(response => response.json())
    .then(data => console.log(data))

    //data is a variable here which will store the json formatter api response
    //you can use any variable name

    //this will print all the entire data in the console as array of objects
```
- If want to print the title of first object only:
```
   fetch(endpoint)
    .then(response => response.json())
    .then(data => console.log(data[0].title))

```
# Tip:
- if you want to see which api is being called and what data is received, then
- inspect -> fetchXhr ->refresh the page -> you will see the name of the api(ex todos) ->click on todos -> click on headers -> you will the details(request method, Url,etc)
- in preview : shows all the data
- Try this with any website like flipkart

We always have two senarios in an API:
1) happy case(Api is fullfilled)
2) Error case(Api is rejected) :what if fetch(endpoint) fails due to some reasons?
- In that case we catch the error
```
    fetch(endpoint)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

    //if there is error in fetch(endpoint), then response and data will not run, it will directly come to catch the error
    //if there is error in resopnse, then data will not run, it will directly come to catch the error
```
```
    fetch(endpoint)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Please try another Api"))
```
## NOTE:
- when a website gets load, api is called two times. first time before the webiste starts laoding so that the users dont have wait to see the UI until the 2nd api finishes. these two api calls happens so fast that we as users not able to distinguish it but if you see the console, you will find that there has been two api calls.
- In our project also , the component is making two api calls. To prevent this, we will use one of the hooks: useEffect

## HOOKS:

1. useState: manages state variable through componenet
2. useEffect:
- It runs when a component loads/refresh
- It runs before the component gets loaded
- It tells that this component must be rendered once
- imported: import {useEffect} from "react";
- It takes two parameters: 1st parameter is an arrow function while 2nd parameter is a array
- Now weed need to pass the fetch inside the arrow function
```
    const endpoint  = "https://jsonplaceholder.typicode.com/todos";

    useEffect(()=>{
        fetch(endpoint)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }, []);



    //this means before this component loads, all the things inside useEffect gets load.
    After this only ,the code below it will load
```
- Now the paramter two(array) tells the parameter one how many times it should run at the time of rendering.If param two is an empty array, then param 1 will run only 1 time. If the array has any variable, then every time the variable changes, param2 runs

- For ex: we provide a input feild in the html and store it inside a name varibale and pass this name varibale inisde the empty array, then when ever we type the name in the input feild i.e for every elemnt we type, param2 of useEffect gets called

- So in this case, useEffect will run : 1(bydefault irrespective of param2 is empty array or not ) + x(x=times the name variable is changes)
- If type "Ravi" in the input feild, then
useEffect will run: 1+4 =5 times


```
import React, {useEffect} from "react";
import "./Apicalling.css";

function Apicalling() {

    const endpoint  = "https://jsonplaceholder.typicode.com/todos";

    
    useEffect(()=>{
        fetch(endpoint)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }, []);





    // //GET
    // fetch(endpoint)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // //Error handling(edge case)
    // .catch(error => console.log(error))
    // //data is a variable here which will store the json formatter api response
    // //data ,response , error are variable names. You canuse any variable name

    return(
       <div>
        Apicalling
       </div>
    )
}

export default Apicalling;
```

```
import React, {useEffect, useState} from "react";
import "./Apicalling.css";

function Apicalling() {

    const endpoint  = "https://jsonplaceholder.typicode.com/todos";

    const [name, setName] = useState("")

    const callApi = () => {
            fetch(endpoint)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))

    }

    console.log(name);

    useEffect(()=>{
        callApi();
        console.log("useEffect chala");
    }, [name]);


    // //GET
    // fetch(endpoint)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // //Error handling(edge case)
    // .catch(error => console.log(error))
    // //data is a variable here which will store the json formatter api response
    // //data ,response , error are variable names. You canuse any variable name

    return(
       <div>
       <h1>Hello</h1>
       <input value={name} onChange={e => setName(e.target.value)} />
       </div>
    )
}

export default Apicalling;
```
- Now if you totally remove the array paramter, then useEffectc will run the number of times you update any variable
- matlab jitne bhi variables hain uss components, har variable ke update ke time useEffect chalega.

So useEffect can be used in three ways:
1. empty depedencies array : runs only once at the time of render
2. dependency array with variable : runs the number of times the variable changes
3. remove the dependency array parameter:  runs the number of times any variable in the component changes

- Dependency arrays are those arrays which kepps tracks of the varibales that are passed into it. Every time the variable changes, useEffect runs 


- What is the advantage of using react?
- Resuable components

- what is props reading?
- passing properties from one component and raeding them in another

What type of projects we should make in react?
- 1) clone: like Amazon, netflix clone. But all are doing the same. max students just copy pasting from github. So if you are making clone, add some unique features like chat box
- 2) make your portfolio website more good
- 3)  make linked clone and change the style it will look like a social media app
- 4) Spilt wise app

Best way to apply for offcampus:
- Linkedin
- telegram grp were vacancies are created. From that grp find their members in linkedin and tell them for referrals. Don't apply directly on career portal without referral

```
fetch(endpoint)
.then(response => response.json()) //scope of response variable is only inside this parenthesis.
.then(data => console.log(data))   //same with data variable
.catch(error => console.log(error))

//response and scope can't be used outside these parenthesis
```
- Now to map the data variable, we need to access it outside the parentheses. To  do that, we will use state variables. Ex:- 
```

   const endpoint  = "https://jsonplaceholder.typicode.com/todos";

    const [name, setName] = useState("")
    const [surname, setsurName] = useState("")

    //to accesss the data variable outside its scope
    const [apiData, setapiData] = useState(null)

    const callApi = () => {
            fetch(endpoint)
            .then(response => response.json())
            .then(data => setapiData(data))  //passing data to apiData through setapiData fun
            .catch(error => console.log(error))

    }


//Now apiData can be used anywhere in the component irrespective of any scope
```
- now apiData will ba an array of objects. Whatever data is received from api, apiData will store it as an array of objects like:
```

apiData = [
  {

  },
  {

  },
  {

  },
]
```
- Now using the it in the html (i.e in the return function)
```
    return(
       <div>
        {apiData.map((value,key)=>(
            <>
            <p>{value.title}</p>
            <img src={value.image} />
            <p>Category: {value.category}</p>
            <p>Rs. {value.price}</p>
            <p>Rating. {value.rating.rate} </p>
            <p></p>
            </>
        ))}
      )
```

## NAVIGATION
- Navigation of pages can be seen in the address tab
- Navigating from one page to another page is called routing
- In react routing is done with a prebuilt pacakge called react-router-dom. From this function , we will get useNavigate fun which helps in navigation
- How to install it:
```
//Run this in the terminal(in your project directory)

npm i react-router-dom

or

npm install react-router-dom
```
- now how to check whether it is installed or not:
- open package.json, you will find its key value pair(like  "react-router-dom": "^6.3.0") in the first object

- Now import this in App.js
```
import {BrowserRouter, Routes, Route} from "react-router-dom";
```
- BrowserRouter enables the properties of routing.
- To do this, we wrap the entire component with BrowserRouter so that we can use the functionalities of Browserrouter in our components
```
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
       {/* <Apicalling /> */}
        <Home />
        <AboutMe />
    </div>
    </BrowserRouter>
    
  );
}

//- This means that we can use all the functionalties that browserRouter provides , within it. No outside out it because its scope ends there(line 1158)
```
- Now Route is a components which asks for the path at whcih you want to call a particular component. And Route should be wrapped inside Routes. Inside Routes, only Route should be present, no components
```
<Routes>
   <Route path="/about-me" element={<AboutMe />} />
</Routes>

//it tells that when you open "/about-me" path in the url, the <AboutMe /> component should be called.
//In previous version component was used insted of element like component={<AboutMe />}
```
- full Code:
```

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
       {/* <Apicalling /> */}
        <Home />
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
        <Routes>
        <AboutMe />
    </div>
    </BrowserRouter>
    
  );
}

```
- To change url, we use useNavigate fun which is imported from react
```
import React from "react";
import "./Home.css";
import {useNavigate} from "react-router-dom";

function Home() {

    //first create a variable and store the useNavigate fun in it
    const navigate = useNavigate();

    const goToAboutPage = ()=>{
        //call the variable inside the function
      navigate("/about-me")
        
    }
    return(
        <div className="home_container">
            //on clicking this button. call goToAboutPage function
            <button onClick={goToAboutPage}>Go to About Me Page</button>
            <button>Go to Contact Us Page</button>
            <button>Go to Orders Page</button>
            <button>Go to MobilesPage</button>
        </div>
    )
}
export default Home;

```
- Its a two step process:
1. onlcick says to navigate to which page
2. Then App.js calls the respective component of that page 
- In react every thing should be wrapped inside one tag in the return function


# Navigation is a two-step process:
1. You change the url
2. Then you call the respective component


- Firebase is a tool provided by Google. It uses MongoDb which is a non-sequel database