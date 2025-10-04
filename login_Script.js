document.querySelector("#login_btn").addEventListener("click",(e)=>{
     e.preventDefault();
     console.log("clicked");
     let data={
        Email: document.querySelector("#email").value,
        password:document.querySelector("#password").value
     }
     if(Object.values(data).some(data=>data=="")){
        alert("please fill the info!!");
        return;
     }
      if(localStorage.getItem(data.Email)){
        let user_data =JSON.parse(localStorage.getItem(data.Email));

        if(user_data.Password==data.password & user_data.Email==data.Email){
            localStorage.setItem("current_user",JSON.stringify(user_data));
            window.location.href="./dashBoard.html"
        }else{
            alert("pleas check the password or email")
        }
    }
    
     console.log(data);
})
