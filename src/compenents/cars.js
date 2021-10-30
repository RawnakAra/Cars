import axios from "axios";
import React from "react";

const Cars = () => {
    const [cars, setCars] = React.useState([])
   

    React.useEffect(() => {
        axios.get('https://617c0238d842cf001711c1cc.mockapi.io/cars')
            .then(res => {
                setCars(res.data)
            })
    }, [])

  const getCar=(e)=>{
   let SS=(cars.map(car =>{
        if(e.target.id === car.id){
          car.isAvaiable = false
          return car
        }else{
            return car
        }
     }) ) 
     setCars(SS)
  }  

    return (
        <div className='container'>
            {
                cars ? cars.map(car => {
                    return <div key={car.id}  >
                        <img id={car.id} src={car.avatar} alt={'s3da'} className={'cars'} style={{ opacity: car.isAvaiable ? 0.9 : 0.3 }} />
                        {car.isAvaiable? <input type={'button'} value='Get The Car' onClick={getCar} id={car.id}/>:''}
                    </div>
                }) : "Loding"
            }
        </div>

    )
}
export default Cars