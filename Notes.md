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