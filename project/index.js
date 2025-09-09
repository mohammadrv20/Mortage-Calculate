const totlaMortage = document.querySelector(".Mortage-Amount-input")
const mortageTerm = document.querySelector(".mortageTerm")
const IntrestRate = document.querySelector(".intrestRate")
document.querySelector(".right-card-resault-card").style.display = 'none'
function resault() {
    const IntrestRate1 = totlaMortage.value * (IntrestRate.value / 100)
    const finalmortage = Number(IntrestRate1) + Number(totlaMortage.value)
    const resault = finalmortage / (mortageTerm.value * 12).toLocaleString("en-US")
    console.log(resault)
    document.querySelector(".right-card-resault-card").style.display = 'block'
    document.querySelector(".right-card-img").style.display = 'none';
    document.querySelector(".right-card-h2").textContent = ''
    document.querySelector(".right-card-para").textContent = ""
    document.querySelector(".right-card-resault-h2").textContent = "Your resault"
    document.querySelector(".right-card-resault-para").textContent = "your resault are shown below based on the information you provided. to adjust the resault, edit the form andclick calculate repayments again"
    document.querySelector(".right-h").textContent = `$ ${resault.toLocaleString("en-US")}`
    document.querySelector(".last-h").textContent = "$" + finalmortage.toLocaleString("en-US")


}   