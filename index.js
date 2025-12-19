const converterInput = document.getElementById("number-input")
const converterButton = document.getElementById("number-btn")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

converterButton.addEventListener("click", function () {
    printConvertedUnits(converterInput.value)
})

function lengthConvert(number) {
    let metersToFeet = number * 3.28084
    let feetToMeters = number * 0.3048

    return [metersToFeet.toFixed(3), feetToMeters.toFixed(3)]
}

function volumeConvert(number) {
    let litersToGallons = number / 3.785411784
    let gallonsToLiters = number * 3.785411784

    return [litersToGallons.toFixed(3), gallonsToLiters.toFixed(3)]
}

function massConvert(number) {
    let kilogramsToPounds = number * 2.2046226218487757
    let poundsToKilograms = number * 0.45359237

    return [kilogramsToPounds.toFixed(3), poundsToKilograms.toFixed(3)]
}

function printConvertedUnits(number) {
    lengthEl.textContent = `${number} meters = ${lengthConvert(number)[0]} feet | ${number} feet = ${lengthConvert(number)[1]} meters`
}

