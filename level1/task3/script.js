function convertTemp() {
    let input = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    // Validation
    if (input === "" || isNaN(input)) {
        result.innerHTML = "❌ Please enter a valid number!";
        return;
    }

    let temp = parseFloat(input);
    let converted;

    if (unit === "celsius") {
        converted = (temp * 9/5) + 32;
        result.innerHTML = `🌡️ ${converted.toFixed(2)} °F`;
    } 
    else if (unit === "fahrenheit") {
        converted = (temp - 32) * 5/9;
        result.innerHTML = `🌡️ ${converted.toFixed(2)} °C`;
    } 
    else if (unit === "kelvin") {
        converted = temp + 273.15;
        result.innerHTML = `🌡️ ${converted.toFixed(2)} K`;
    }
}