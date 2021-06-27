import React,{useState} from 'react'
function Contact(props){
    // const [name,setName]=useState('abinash')
    // const [age,setAge]=useState(27)
    // useEffect(()=>{
    //     console.warn("hello from hook")
    // },[age])

    //for props explaintions
    // useEffect(()=>{
    //     console.warn("Check props", props.name)
    // },[])

    // useEffect(()=>{
    //     console.warn("Check props 2 for update", props.name)
    // },[props.name])

    const[val,setVal]=useState("Abinash")

    const test = (e) => {
        console.warn("test function", e.target.value)
        setVal(e.target.value)
    }

    // let data="Contact us Component"
    return(
        <div>
            <h1>Contact Us Component</h1>
            <input type="text" value={val} onChange={test}/>
            {/* <button onClick={()=>console.warn("test function2")}>Click me</button> */}
            <button onClick={()=>alert(val)}>Click me</button>
            {/* <h2>{props.name}</h2> */}

            {/* <h2>{name}</h2>
            <h2>{age}</h2>
            <button onClick={()=>setAge(72)}>Update Name</button>
            <button onClick={()=>setName("Abinash Thakur")}>Update Name</button> */}
        </div>
    )
}

export default Contact;