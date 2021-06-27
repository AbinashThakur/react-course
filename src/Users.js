import React from 'react';
import { useState, useEffect, Fragment } from 'react'
// import Button from '@material-ui/core/Button';
import { Table } from 'react-bootstrap'

function Users() {

    // const [user, setUser] = useState([
    //     { name: 'Abinash', age: '26' },
    //     { name: 'Sam', age: '27' },
    //     { name: 'Bruce', age: '28' },
    //     { name: 'Kelly', age: '29' },
    //     { name: 'Peter', age: '30' }
    // ])

    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            data.json().then(result=>{
                console.warn("result",result)
                setUser(result.data)
            })
        })
    },[])

    return (
        <div>
            <Fragment>
                <h1>User Listing is here</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item, index)=><tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.employee_name}</td>
                            <td>{item.employee_salary}</td>
                            <td>{item.employee_age}</td>
                        </tr>)
                        }
                        {/* {
                            user.map((item, index)=><tr key={index}>
                            <td>{index}}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                        </tr>)
                        } */}
                    </tbody>
                </Table>
                {/* <Button variant="contained" color="primary">
                Hello World
            </Button> */}
            </Fragment>
            {/* <h1>User Listing is here</h1>
            {
                // user.map((item,i)=>
                // <div key={i}>{item.name}, {item.age}</div>)

                // user.length===5?<div>Yes, this is right</div>:<div>No, length should be 5</div>

                
            } */}
        </div>
    )
}

export default Users;