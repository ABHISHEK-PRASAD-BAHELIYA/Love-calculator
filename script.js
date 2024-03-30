function calculateLove() {
    let yourName = document.getElementById("yourName").value;
    let partnerName = document.getElementById("partnerName").value;
    let lovePercentage = Math.floor(Math.random() * 101);
    let resultElement = document.getElementById("result");

    resultElement.innerHTML =`${yourName} and ${partnerName}'s Love Percentage is: ${lovePercentage}%`;
}