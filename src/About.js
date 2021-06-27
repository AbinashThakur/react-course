import React from 'react'
class About extends React.Component{
    constructor(){
        super();
        // console.warn("constructor");
        // this.state={
        //     name:'abinash',
        //     age:27
        // }
    }

    componentDidMount(){
        // console.warn("did mount");
        console.warn("props",this.props.name);
    }

    componentDidUpdate(){
        console.warn("props in update",this.props.name);
        // console.warn("did update");
        // alert("Name is updated")
    }

    render(){
        return(<div>
            <h1>About us Component</h1>
            <h2>{this.props.name}</h2>
            {/* <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            <button onClick={()=>{this.setState({name:'Abinash Thakur'})}}>Update State</button> */}
        </div>)
    }
}

export default About;


// constructor(){

// }

// componentDidMount(){

// }

// componentDidUpdate(){
    
// }
// componentWillUnmount(){
    
// }