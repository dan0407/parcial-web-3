import DigimonReducer from '../redux/cahracterSlice';
import { useEffect, useState } from 'react';



const Dex =()=>{

    const [datadigi,setdatadigi]=useState([])

	useEffect(() => {
		fetch('https://digi-api.com/api/v1/digimon?pageSize=25')
			.then((response) => response.json())
			.then((data) => setdatadigi(data))
			
	}, []);


    return (
		<div>
			<h2>digimon</h2>
			<p>digimon{datadigi.name}</p>
		</div>
	);





};
export default Dex 