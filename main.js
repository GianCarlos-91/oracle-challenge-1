import Encrypt from './Encrypt.js';

const input = document.querySelector('#Input');
const output = document.querySelector('#Output');
const encryptButton = document.querySelector('#Encrypt');
const decryptButton = document.querySelector('#Decrypt');
const copyButton = document.querySelector('#Copy');
const outputContainer = document.querySelector('#OutputContainer');

window.enc = Encrypt;

function changeHandler() {
    if (output.value.length > 0) {
        outputContainer.setAttribute('data', 'on');
    } else {
        outputContainer.setAttribute('data', 'off');
    }
}

encryptButton.addEventListener('click', () => {
    output.value = Encrypt.encrypt(input.value);
    changeHandler();
});

decryptButton.addEventListener('click', () => {
    output.value = Encrypt.decrypt(input.value);
    changeHandler();
});

input.addEventListener('input', () => {
    output.value = '';
    changeHandler();
});

let copyTimeOutID = null;
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(output.value);
    copyButton.setAttribute('copied', 'true');
    copyButton.textContent = 'Copiado!';
    if (copyTimeOutID !== null) clearTimeout(copyTimeOutID);
    copyTimeOutID = setTimeout(() => {
        copyButton.removeAttribute('copied');
        copyButton.textContent = 'Copiar';
        copyTimeOutID = null;
    }, 1000);
});