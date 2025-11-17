const degree = document.getElementById("tempdegree");
const submitBtn = document.getElementById("submitBtn");


function handletemp(){
    const value = Number(degree.value);

    if(degree.value === "" || degree.value === null){
        alert("Please enter your temperature");
        return;
    }

    //temp results
    if(value < 0){
        alert("It's extreamly cold outside");
    }
    else if(value < 16){
        alert("It's cold outside");
    }
    else if(value<25){
        alert("It's okay to go out");
    }
    else if(value<35){
        alert("It's swim time");
    }
    else if(value<45){
        alert("Can you please turn on the AC");
    }
    else{
        alert("Too hot to handle");
    }
}


degree.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        handletemp();
    }
});

submitBtn.addEventListener("click",handletemp);