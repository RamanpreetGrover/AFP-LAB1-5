Created a repository to answer questions from Lab1-5 in the Advanced front-end Programming Class.

The questions are as follows:


Lab 1
Step 1: Create an HTML document and reference Moment.js and Lodash.
Step 2: Create a date variable and use at least two different Moment.js functionality to manipulate the date you created earlier.
Step 3: Create an array in JavaScript. Now use Lodash functionality to retrieve information about the array or manipulate the array in some way.
Lab 2
•	Use the Fetch command to extract the JSON data from ONE of the following Web API: 
–	https://dummy.restapiexample.com/api/v1/employees
–	https://api.wazirx.com/sapi/v1/tickers/24hr
–	https://api.kucoin.com/api/v1/market/stats?symbol=BTC-USDT
–	universities.hipolabs.com/search?country=United+Kingdom
–	https://world.openfoodfacts.org/api/v0/product/737628064502.json
–	https://nominatim.openstreetmap.org/search.php?city=taipei&format=jsonv2
•	Show the extracted info on the page! In proper format! Don’t just display it in a raw text format, Use HTML to style the output.
Lab 3
•	Create a new React app based on the instruction.docx found under the week 3 content.
•	Create a new file “HelloWorld.js” in /src/ and add the following code:
import React, {Component } from "react";
class HelloWorld extends Component {
    render(){
        return (
            <div className="helloContainer">
                <h1>Hello World</h1>
            </div>
        )
    }
}
export default HelloWorld;

•	Add the following line to your src/index.js:
import HelloWorld from "./HelloWorld";

•	Modify the render method to be like the following:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld/>
  </React.StrictMode>
);

Submit the project to the Lab 3 folder, however, exclude the node_modules folder from your submission as it has many files in it and is not required for the submission.
Lab 4
Step 1: Create two custom components in your react application in App.js. These can be class or function components.
Step 2: Now display those two components within your main App component. 
Lab 5
Question 1:

Use your creativity to create a list of your favourite movies or books or whatever you can think of.
•	The list (for example BookLists) containing the favorite items (for example a collection of books) should pass props to its children such as the name and rating of the favorite item.
•	Each favorite item should have two buttons, to increase or decrease the rating. This should be managed using state variables and as you press the upvote and downvote an item, the updated rating is reflected for that item.
Example:
 
Example – Continued: Shrek II is upvoted once
 
Question 2:

Identify the components and elements, and events in the following script. Explain how the page is rendered and events are handled using your word.
