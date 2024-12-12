const COOKING_TIME = 40; 

function calculateRemainingTime(timeInOven) {
    return COOKING_TIME - timeInOven;
}

function calculatePreparationTime(layers) {
    return layers * 2; 
}

function calculateTotalTime(timeInOven, preparationTime) {
    return timeInOven + preparationTime;
}

function validateInput(layers, timeInOven) {
    if (layers <= 0 || timeInOven < 0 || layers === "" || timeInOven === "") {
        alert("Por favor, ingresa valores válidos. Los campos no pueden estar vacíos o ser negativos.");
        return false;
    }
    return true;
}

document.getElementById("calculateBtn").addEventListener("click", function () {
    const layers = document.getElementById("layers").value;
    const timeInOven = document.getElementById("timeInOven").value;

    if (!validateInput(layers, timeInOven)) {
        return;
    }

    const remainingTime = calculateRemainingTime(Number(timeInOven));
    const prepTime = calculatePreparationTime(Number(layers));
    const totalTime = calculateTotalTime(Number(timeInOven), prepTime);

    document.getElementById("remainingTime").textContent = `Tiempo restante en el horno: ${remainingTime} minutos`;
    document.getElementById("prepTime").textContent = `Tiempo total de preparación: ${prepTime} minutos`;
    document.getElementById("totalTime").textContent = `Tiempo total de trabajo: ${totalTime} minutos`;
});
