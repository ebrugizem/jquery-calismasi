$(document).ready(function(){
    $("#lgnBtn").on("click",function(){
        var username,pass;
        username=$("#frm #username").val();
        pass=$("#frm #pass").val();
        if(username== "" & pass ==""){ 
            alert("Kulanıcı adı ve Şifre boş bırakılamaz!!");  
        }else if(pass == ""){
            alert("Şifre boş bırakılamaz!!");
        } else if(username== "" ){
            alert ("Kulanıcı adı boş bırakılamaz!!");
        }else if (username != "Admin"){
            alert ("Kulanıcı adı yanlış!!");
        }else {
            alert("Başarılıyla giriş yapıldı.")
            $(location).prop('href','admin.html')
        } 
    })
    $(".npt").on("keypress", function(event) {
        if (event.key === "Enter") {
            var username,pass;
            username=$("#frm #username").val();
            pass=$("#frm #pass").val();
            if(username== "" & pass ==""){ 
                event.preventDefault();
                alert("Kulanıcı adı ve Şifre boş bırakılamaz!!");  
            }else if(pass == ""){
                event.preventDefault();
                alert("Şifre boş bırakılamaz!!");
            } else if(username== "" ){
                event.preventDefault();
                alert ("Kulanıcı adı boş bırakılamaz!!");
            }else if (username != "Admin"){
                event.preventDefault();
                alert ("Kulanıcı adı yanlış!!");
            }else {
                alert("Başarılıyla giriş yapıldı.")
                $(location).prop('href','admin.html')
            } 
           
        }
        
    })
    
    $("#sub").on('click',function(){
        var city=$("#city").val();
        if (city == "") {
            alert("Lüften bu alanı boş bırakmayınız")
        }else{ 
                $("#city").val('');
                $("#cList").append(`<li style="background-color:pink;">${city}</li>`);               
        }            
     })
    $("#city").on("keypress", function(event) {
        if (event.key === "Enter") {
        var city=$("#city").val();
            if (city == "") {
                    event.preventDefault();
                    alert("Lüften bu alanı boş bırakmayınız")
            }else{ 
                  $("#city").val('');
                  $("#cList").append(`<li style="background-color:pink;">${city}</li>`);               
          } 
        }
        
    })

     $("#logOut").on("click",function(){
        window.history.back();
     })
  
});