function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let seviceQual = document.getElementById('seviceQual').value;
    let numberofpeople = document.getElementById('people').value;

    if(numberofpeople == "" / numberofpeople <= 1) {
        numberofpeople = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * seviceQual) / numberofpeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit',calculateTip);