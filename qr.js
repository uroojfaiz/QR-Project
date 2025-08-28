function QRgenerator() {
    let text = document.getElementById("text").value;
  
    if (!text) {
        alert("Please enter text or URL.");
       return;
    }
    
    let qrimage=`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(text)}`; 
 document.getElementById('qrbox').innerHTML=`<img src="${qrimage}" alt="QR Code">`
   
}