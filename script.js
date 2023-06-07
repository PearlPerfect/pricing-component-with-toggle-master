const toggle = document.getElementsByClassName("button");
const arr = [...toggle];
const monthlyBasicAmount = document.getElementById("basicAmount");
const monthlyProfessionalAmount = document.getElementById("professionalAmount");
const monthlyMasterAmount = document.getElementById("masterAmount");

arr.forEach((e, index) =>{
    e.addEventListener("click", () => {
        e.style.opacity = "1";
        if(index === 0){
            monthlyBasicAmount.innerHTML = " &dollar;199.99";
            monthlyProfessionalAmount.innerHTML = "&dollar;249.99";
            monthlyMasterAmount.innerHTML = "&dollar;399.99";        
    
        }
        else{
            monthlyBasicAmount.innerHTML = " &dollar;19.99";
            monthlyProfessionalAmount.innerHTML = "&dollar;24.99";
            monthlyMasterAmount.innerHTML = "&dollar;39.99";
        }

        arr.filter(function (item){
            return item !=e;
        })
        .forEach((item) =>{
            item.style.opacity = "0"
        })
    })
})