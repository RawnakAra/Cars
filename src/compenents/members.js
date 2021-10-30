import axios from "axios";
import React from "react";

const Members = () => {

    const [clints, setClients] = React.useState([])
    
    React.useEffect(() => {
        clientsData()
    }, [])

    const clientsData =()=>{
        axios.get('https://617c34b6d842cf001711c2b7.mockapi.io/clients')
        .then(res => {
            setClients(res.data)
        })  
    }
const joinHandler =()=>{
    axios.post('https://617c34b6d842cf001711c2b7.mockapi.io/clients',{})
    .then(res => {
        setClients([...clints,res.data])
    })
}
    const deleteMember = (e)=>{
        axios.delete(`https://617c34b6d842cf001711c2b7.mockapi.io/clients/${e.target.id}`) 
        .then(res=>{
            setClients(clints.filter(clint=>{
                return clint.id !== e.target.id
            }))
        })
    }

    return (
        <div >
            <br/>
            <input type='button' name='moredetails' value='Join Our Company' onClick={joinHandler}/>
            <br/>
            <div className='container'>
            {
                clints ? clints.map(val => {
                    return <div key={val.id} className='card'>
                        <span><img src={val.avatar} alt={'sa3da'} /></span><br/>
                        <span> Name : {val.name} </span><br/>
                        <span> Id : {val.id} </span><br/>
                        <span> salary : {val.salary}$ </span><br/>
                        <span> Experience : {val.isSenior?'Senior' : 'Junior'}</span><br/>
                        <span> isActive : {val.isActive ? 'On Job':'On Vacation'} </span><br/>
                        <span> Department : {val.Department} </span><br/>
                        <span> jouin the Company : {val.createdAt} </span><br/>
                        <input id={val.id} type='button' name='moredetails' value='You are Fired' onClick={deleteMember} />
                    </div>
                }) : 'Loding...'
            }
            </div>
        </div>
    )
}

export default Members