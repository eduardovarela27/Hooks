import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({data:null,loading:true,error:null});
    
    useEffect(()=>{

        return () =>{
            isMounted.current= false;
        }
    },[]);
    
    useEffect( () => {
        setState({
            data:null,
            loading:true,
            error:null
        });//para que me carge el loading
        fetch(url)
        .then(resp=>resp.json())
        .then(data =>{
            
            setTimeout(() => {
                if(isMounted.current){
                    setState({
                        loading:false,
                        error:null,
                        data,
                    });
                }else{
                    console.log('no se monto el componente')
                }
            }, 4000);
         });
    },[url]);

    return state;
}