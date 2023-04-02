// import { useState,useEffect } from "react";
export async function SignInWithMobileNumberAndPassword(data){
    // const url = `${process.env.API_BASE_URL}/api/signin`;
    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json;charset=UTF-8'
    //     },
    //     body: JSON.stringify(data)
    // };
    // try {
    //     return fetch(url, options)
    //         .then(response => response.json())
    //         .then(data => { return data });
    // }
    // catch (err) {
    //     throw err;
    // }
    
    return {
            firstName: "Vasmai",
            lastName: "Avvaru",
            mobileNumber: "8985724999",
            emailAddress: "vasmai.avvaru@gmail.com"
    }
}

export async function CreateUserWithMobileNumberAndPassword(data) {

      // const url = `${process.env.API_BASE_URL}/api/signup`;
    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json;charset=UTF-8'
    //     },
    //     body: JSON.stringify(data)
    // };
    // try {
    //     return fetch(url, options)
    //         .then(response => response.json())
    //         .then(data => { return data });
    // }
    // catch (err) {
    //     throw err;
    // }
    // const[userdata, setuserdata] = useState({})
   
    //   useEffect(()=>{
    //       const fetchTUser = async()=>{
    //           const responseOptions = {
    //               method:'POST',
    //               headers:{
    //                   'Content-Type':'application/json',
    //                   Authorization:"Bearer " + localStorage.getItem("userToken")
    //               },
    //           }
    //           const response = await fetch("http://127.0.0.1:8000/api/v1/users/token/decoder", responseOptions)
    //           const data = await response.json()
    //           if(!response.ok){
    //               console.log({"error":data.detail})
    //           }
    //           else{
    //               console.log(data)
    //               setuserdata(data)
    //           }
    //       }
    //       fetchTUser();
    //   },[])


    return {
        firstName: "Vasmai",
        lastName: "Avvaru",
        mobileNumber: "8985724999",
        emailAddress: "vasmai.avvaru@gmail.com"
    }
}
