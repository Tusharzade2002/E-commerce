import axios from "axios";

 const GetCurrentUser=()=>{
    const User=localStorage.getItem("e-commerce-user-details");

    if (!User){
        return null;
    }
return JSON.parse(User)    
 }
 const GetjwtToken=()=>{

    const token = localStorage.getItem("e-commerce-user-token");
    if(!token){
        return null
    }
    return `Bearer ${token}`
 }
 const Logout=()=>{
 
     localStorage.clear();

     setTimeout(()=>{
              window.location.href="/login"
     },[3000])
 }

 const getReadableTimestamp = (date) => {
    const dateObj = new Date(date);
  
    const datePart = `${dateObj.getDate()}/${
      dateObj.getMonth() + 1
    }/${dateObj.getFullYear()}`;
    const timePart = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
    const amOrPm = dateObj.getHours() >= 12 ? "PM" : "AM";
  
    return `${datePart} ${timePart} ${amOrPm}`;
  };
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  });
  
 export{GetCurrentUser,GetjwtToken,Logout,getReadableTimestamp,api}