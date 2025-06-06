import { useNavigate } from "react-router";


 const Login=()=>{

    let navigate = useNavigate();


    const handleNavigate = (event) => {
		navigate("/Dex");
	};

    return(
            
            <div>
            <button onClick={handleNavigate}>agente</button>
            <button onClick={handleNavigate}>científico</button>
        
        
        </div>
    
    );
        
        
        };



export default Login