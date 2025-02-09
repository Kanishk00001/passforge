const passwordField = document.getElementById("password");
const slider = document.getElementById("slider");
const lengthDisplay = document.getElementById("lengthDisplay");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

slider.oninput = () => lengthDisplay.textContent = slider.value;

generateBtn.onclick = () => {
    const length = slider.value;
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/";
    let password = "";
    const cryptoObj = window.crypto || window.msCrypto;
    const randomValues = new Uint32Array(length);
    cryptoObj.getRandomValues(randomValues);
    for (let i = 0; i < length; i++) {
        password += charset[randomValues[i] % charset.length];
    }
    passwordField.value = password;
};

copyBtn.onclick = () => {
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value).then(() => {
            alert("Password copied to clipboard!");
        }).catch(err => {
            console.error("Could not copy text: ", err);
        });
    }
};