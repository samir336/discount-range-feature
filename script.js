let rangeSelector = document.getElementById("rangeInput")
let discountPercentage = document.getElementById("discountPercentage")
let discountAmount = document.getElementById("discountAmount")
const finalPrice = document.getElementById("finalPrice")
const originalPrice = document.getElementById("originalPrice")
rangeSelector.addEventListener("input", ()=>{
discountPercentage.innerText = rangeSelector.value + "%";
const originalAmount = originalPrice.innerText.split(',')[1]
let discount =  (originalAmount/100)* rangeSelector.value
discountAmount.innerText = "BDT," + discount
finalPrice.innerText = "BDT," + (originalAmount-discount)

})