const buttonPoints = document.querySelector("#button_points");
const textPoints = document.querySelector("#text_points");
const buttonExtraPoints = document.querySelector("#button_extra_points");
const countExtraBasePoints = document.querySelector("#text_extra_points");
const buttonMultiplier = document.querySelector("#button_multiplier");
const countMultiplier = document.querySelector("#text_multiplier");
const buttonPercent = document.querySelector("#button_percent");
const countPercent = document.querySelector("#text_percent");

let totalPoints = 0;
let extraPoints = 0;
let costExtraBasePoints = 10;
let totalMultiplier = 1;
let costMultiplier = 100;
let totalPercent = 1;
let costPercent = 1000;

buttonPoints.onclick = () => {
    totalPoints = totalPoints+((1+extraPoints)*(totalMultiplier*totalPercent));
    textPoints.textContent = `You have ${totalPoints.toFixed(1)} Points right now`;
};

buttonExtraPoints.onclick = () => {
    if(totalPoints>=costExtraBasePoints){
        extraPoints += 1;
        totalPoints -= costExtraBasePoints;
        costExtraBasePoints += 1;
        textPoints.textContent = `You have ${totalPoints.toFixed(1)} Points right now`
        countExtraBasePoints.textContent = `You make ${extraPoints.toFixed(1)} Extra Points per click, next upgrade costs ${costExtraBasePoints}`;
    }
};

buttonMultiplier.onclick = () => {
    if(totalPoints>=costMultiplier){
        totalMultiplier += 0.1;
        totalPoints -= costMultiplier;
        costMultiplier += 100;
        textPoints.textContent = `You have ${totalPoints.toFixed(1)} Points right now`
        countMultiplier.textContent = `You have x${totalMultiplier.toFixed(1)} multiplier, next upgrade costs ${costMultiplier}`;
    }
};

buttonPercent.onclick = () => {
    if(totalPoints>=costPercent){
        totalPercent += 0.5;
        totalPoints -= costPercent;
        costPercent *= 1.5;
        textPoints.textContent = `You have ${totalPoints.toFixed(1)} Points right now`
        countPercent.textContent = `You have x${totalPercent.toFixed(1)} percent multiplier, next upgrade costs ${costPercent.toFixed(1)}`;
    }
};