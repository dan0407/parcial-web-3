
import DigimonReducer from '../redux/cahracterSlice';
import { useEffect } from 'react';

const Dex =()=>{


	useEffect(() => {
		fetch('https://digi-api.com/api/v1/digimon?pageSize=25')
			.then((response) => response.json())
			.then((data) => { dispatchEvent(DigimonReducer.setapicharacters(data))
			});
	}, [dispatch]);


    return (
		<div>
			<h2>digimon</h2>
			<p>digimon{data.content}</p>
		</div>
	);





};
export default Dex 