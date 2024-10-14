import React, {Component } from "react";
class HelloWorld extends Component {
render(){
return (

<div className="helloContainer">
<h1 style={{
          fontSize: '3rem',
          marginBottom: '20px',
          fontFamily: "monospace",
          textAlign: "center",
          color: "white",
        }}>
Hello World</h1>
</div>
)
}
}
export default HelloWorld;