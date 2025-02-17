 
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
              window.localStorage.href="/login"
     },[])


 }
 export{GetCurrentUser,GetjwtToken,Logout}