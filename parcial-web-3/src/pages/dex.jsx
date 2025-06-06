import DigimonReducer from '../redux/cahracterSlice';
import { useEffect, useState } from 'react';



const Dex =()=>{

    const [datadigi,setdatadigi]=useState([])
console.log(datadigi);

	useEffect(() => {
		fetch('https://digi-api.com/api/v1/digimon?pageSize=25')
			.then((response) => response.json())
			.then((data) => setdatadigi(data.content))
			
	}, []);


    return (
		<div>
			{
                datadigi.map((d) => {
                    return <h1>{d.name}</h1>
                })
            }
		</div>
	);





};
export default Dex 