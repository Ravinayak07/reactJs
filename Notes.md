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


display:flex enables the flex property. After that only you can use other flex 
properties like flex-direction, justtify-content,etc


objects and map functions in javascript


OBJECTS: objects are key value pairs
```
const a = {
  name: "Ravi",
  surname: "Nayak",
  age: 10,
}
```
console.log(a.name+" "+a.surname+" "+a.age);  //Ravi

- In js, a fun with no name is called anonymous fun and it is totally valid.
```
//normal  function
const funname = () => {   
  console.log("Ravi");
  return;
}

//Anonymous fun
() => {   
  console.log("Ravi");
  return;
}

//but anonymous fun cannot be called as it has no existance. So where it is used then ???
//These are used inside the map function where it is definded and called simultaneously.ex:

const arr = [1,2,3,4,5];
arr.map(()=>(

))

```
MAP FUNCTIONS:
- map is a method which has a arrow(anonymous) fun inside it
- fun inside map fun bydefault takes two arguments out of which 1 is compulsory i.e value
- And key is optional
- mapping an array in javascript means to access each element of array one by one
- In js map is same as for loop
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

//value word can be changed but the keyword "key" cannot be changed:
const arr = [1,2,3,4,5];
arr.map( (abc, key) =>(    //val, item,etc

))
```
- We can make objects as the elements of an array





```

import React from "react";
import "./TechStack.css";
import react from "../../images/techStack/react.png";
import vuejs from "../../images/techStack/vuejs.png";
import js from "../../images/techStack/js.png";
import nodejs from "../../images/techStack/nodejs.png";
import firebase from "../../images/techStack/firebase.png";
import html from "../../images/techStack/html.png";
import css from "../../images/techStack/css.png";
import python from "../../images/techStack/python.png";
import cpp from "../../images/techStack/cpp.png";
import bootstrap from "../../images/techStack/bootstrap.png";

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
        },
        {
            iconImage: js,
            iconAltproperty: "jsImage",
            iconName: 'JS'
        },
        {
            iconImage: nodejs,
            iconAltproperty: "NodeJsImage",
            iconName: 'NodeJs'
        },
        {
            iconImage: firebase,
            iconAltproperty: "firebaseImage",
            iconName: 'Firebase'
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

                    <div className="techstack_image_element_container">
                        <img src={js} alt="react image" />
                        <p>Javascript</p>
                    </div>

                    <div className="techstack_image_element_container">
                        <img src={nodejs} alt="react image" />
                        <p>NodeJs</p>
                    </div>
                    
                    <div className="techstack_image_element_container">
                        <img src={firebase} alt="react image" />
                        <p>Firebase</p>
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
                    <div className="techstack_image_element_container">
                        <img src={css} alt="react image" />
                        <p>CSS</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={python} alt="react image" />
                        <p>Python</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={bootstrap} alt="react image" />
                        <p>bootstrap</p>
                    </div>
                    
                   
                </div>

              

            </div>

            <div>

            </div>

        </div>

    );
}

export default TechStack;

```


```

import React from "react";
import "./TechStack.css";
import react from "../../images/techStack/react.png";
import vuejs from "../../images/techStack/vuejs.png";
import js from "../../images/techStack/js.png";
import nodejs from "../../images/techStack/nodejs.png";
import firebase from "../../images/techStack/firebase.png";
import html from "../../images/techStack/html.png";
import css from "../../images/techStack/css.png";
import python from "../../images/techStack/python.png";
import cpp from "../../images/techStack/cpp.png";
import bootstrap from "../../images/techStack/bootstrap.png";

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
    {
      iconImage: js,
      iconAltproperty: "jsImage",
      iconName: "JS",
    },
    {
      iconImage: nodejs,
      iconAltproperty: "NodeJsImage",
      iconName: "NodeJs",
    },
    {
      iconImage: firebase,
      iconAltproperty: "firebaseImage",
      iconName: "Firebase",
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
    {
      iconImage: css,
      iconAltProperty: "cssImage",
      iconName: "CSS",
    },
    {
      iconImage: python,
      iconAltProperty: "pythonImage",
      iconName: "Python",
    },
    {
      iconImage: bootstrap,
      iconAltProperty: "bootstrapImage",
      iconName: "Bootstrap",
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

```
import React from "react";
import "./TechStack.css";
import react from "../../images/techStack/react.png";
import vuejs from "../../images/techStack/vuejs.png";
import js from "../../images/techStack/js.png";
import nodejs from "../../images/techStack/nodejs.png";
import firebase from "../../images/techStack/firebase.png";
import html from "../../images/techStack/html.png";
import css from "../../images/techStack/css.png";
import python from "../../images/techStack/python.png";
import cpp from "../../images/techStack/cpp.png";
import bootstrap from "../../images/techStack/bootstrap.png";

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
    {
      iconImage: js,
      iconAltproperty: "jsImage",
      iconName: "JS",
    },
    {
      iconImage: nodejs,
      iconAltproperty: "NodeJsImage",
      iconName: "NodeJs",
    },
    {
      iconImage: firebase,
      iconAltproperty: "firebaseImage",
      iconName: "Firebase",
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
    {
      iconImage: css,
      iconAltProperty: "cssImage",
      iconName: "CSS",
    },
    {
      iconImage: python,
      iconAltProperty: "pythonImage",
      iconName: "Python",
    },
    {
      iconImage: bootstrap,
      iconAltProperty: "bootstrapImage",
      iconName: "Bootstrap",
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


# FORMS:
- we should not change the values of a variables frequently.
- For that we have State variables in react.
- state are the variables which can abe available anywhere in the componenet. they dont have any scope like const, var and let.  Globally available in the entire component. they are acessible anywhere in the componenet
- U state is a hook which react gives
- A hook is something that react gives which makes our life easier.
- using hooks we can do many advanced things that are normally not possible through js
- So hooks are some additional tools which helps us to use react better
- how to create usestate varibale = syntax of usestate
```
const [variableName, setvaribaleName] = usestate(initialValue)

//let or var can also be used
//varibleName is the name of the variable : 1st parameter
//setvariableName is a fun   : 2nd parameter
//usestate(initialValue) is the calling the usestate fun which we imported in the 1st line to assign and we
provide the initialvalue of name varianle
ex:- 
let name = "Ravi";
const [name, setname] = usestate("Ravi");  //assign "Ravi" as a initialValue to the variable name

both are same
```
line 9 and 10 are exactly same
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