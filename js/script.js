const container = document.querySelector(".container"),
qrInput = container.querySelector(".generate input"),
genBtn = container.querySelector(".generate button"),
qrImg = container.querySelector(".qr-code img");
let preValue;

genBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    genBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load",() => {
        container.classList.add("active");
        genBtn.innerText = "Generate QR Code";
    });
});


qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        container.classList.remove("active");
        preValue = "";
    }
});