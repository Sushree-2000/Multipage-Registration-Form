function my_func1(event) {
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let dob = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let F_firstname = document.getElementById('F_firstname').value;
    let F_lastname = document.getElementById('F_lastname').value;
    let M_firstname = document.getElementById('M_firstname').value;
    let M_lastname = document.getElementById('M_lastname').value;
    let temp_gender = document.getElementById('gender');
    let nationality = document.getElementById('nationality').value;
    let street = document.getElementById('street').value;
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    let tel_num = document.getElementById('tel_num').value;
   
    temp_gender.Checked ? Gender = 'M' : Gender = 'F';

    let details = {
        "firstName": firstname,
        "lastName": lastname,
        "Date-of-birth": dob,
        "Email": email,
        "Father's-firstname": F_firstname,
        "Father's-lastname": F_lastname,
        "Mother's-firstname": M_firstname,
        "Mother's-lastname": M_lastname,
        "Gender": Gender,
        "Nationality": nationality,
        "Street": street,
        "City": city,
        "Country": country,
        "Telephone-number": tel_num,
        "Mobile-number": mob_num
    };

    localStorage.setItem(email,JSON.stringify(details));

    let last_key=email;

    localStorage.setItem("last_key",email);
    window.alert("Your Personal details has been saved.");

}



function my_func2(event){
    let hscInst=document.getElementById("hscInst").value;
    let hscBoard=document.getElementById("hscBoard").value;
    let hscScore=document.getElementById("hscScore").value;
    let sscInst=document.getElementById("sscInst").value;
    let sscBoard=document.getElementById("sscBoard").value;
    let sscScore=document.getElementById("sscScore").value;
    let currentInst=document.getElementById("currentInst").value;
    let currentScore=document.getElementById("currentScore").value;
    let backlogs=document.getElementById("backlogs").value;

    last_key=localStorage.getItem("last_key");
    let details=JSON.parse(localStorage.getItem(last_key));

    let details1={
        "hscInst":hscInst,
        "hscBoard":hscBoard,
        "hscScore":hscScore,
        "sscInst":sscInst,
        "sscBoard":sscBoard,
        "sscScore":sscScore,
        "currentInst":currentInst,
        "currentScore":currentScore,
        "backlogs":backlogs
    };

    let details2={
        ...details,
        ...details1
    };
    
    localStorage.setItem(last_key,JSON.stringify(details2));
    alert("Your educational details has been saved.");

}

function my_func3(event) {

    let photo = document.getElementById('photo');
    let hscMarkSheet = document.getElementById('hscMarkSheet');
    let sscMarkSheet = document.getElementById('sscMarkSheet');
    let currentMarkSheets = document.getElementById('currentMarkSheets');

    last_key=localStorage.getItem("last_key");
    let details=JSON.parse(localStorage.getItem(last_key));   


    localStorage.removeItem("last_key");
    alert("Your form has been submitted.");

    let bd=document.getElementById("bd");
    bd.innerHTML='<div \
                  style="font-size: 30px; margin-left: 20%;">\
                  You can Leave now.It is safe to close the window \
                  </div>';
}