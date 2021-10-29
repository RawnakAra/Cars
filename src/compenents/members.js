import axios from "axios";
import React from "react";

const Members = () => {

    const [clints, setClients] = React.useState([])

    React.useEffect(() => {
        axios.get('https://617c34b6d842cf001711c2b7.mockapi.io/clients')
            .then(res => {
                setClients(res.data)
            })
    }, [])

    // const delete = ()=>{

    // }

    return (
        <div className='container'>
            {
                clints ? clints.map(val => {
                    return <div key={val.id} className='card'>
                        <span><img src={val.avatar} alt={'sa3da'} /></span>
                        <span> Name : {val.name} </span><br/>
                        <span> Id : {val.id} </span><br/>
                        <span> jouin the Company : {val.createdAt} </span>
                        <input type='button' name='moredetails' value='Join Our Company' />
                        <input type='button' name='moredetails' value='You are Fired' />
                    </div>
                }) : 'Loding...'
            }
        </div>
    )
}

export default Members