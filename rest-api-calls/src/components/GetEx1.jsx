import axios from "axios";
import { useEffect,useState } from "react";
const GetEx1 = () =>{
    useEffect(()=>{
        axios.get("https://www.w3schools.com?angular/Customers.php").then((posRes)=>{
            const {data} = posRes;
            const {records} =data;
            console.log(data);
        }, (errRes)=>{
            console.log(errRes);
        })
    },[])
    return(
        <>
        </>
    )

        }
        export default GetEx1;
   
