function calculate(){
    let weight=document.getElementById("weight").value;
    let height=document.getElementById("height").value;
    metreheight=height*0.01;
    metresq=metreheight**2;
    bmi=weight/metresq;
    alert("Your BMI is "+bmi);
}