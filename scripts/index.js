function generateQRCode() {
   let text = document.getElementById("input")
    
    if (text.value ==="") {
        alert("Please enter a text");
        return;
    }

    let qrCodeHtml = document.getElementById("qrcode");

    qrCodeHtml.innerHTML = "";

    let qrCode = new QRCode(document.getElementById('qrcode'), {
        text: text.value,
        width: 300,
        height: 300,
        coloDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    
    text.value = "";
}