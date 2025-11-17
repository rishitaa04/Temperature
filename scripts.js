const degree = document.getElementById("tempdegree");
const submitBtn = document.getElementById("submitBtn");

const temprature = ""


function handletemp(){
    const value = Number(degree.value);

    if(degree.value === "" || degree.value === null){
        alert("Please enter your temperature")
    }
}
