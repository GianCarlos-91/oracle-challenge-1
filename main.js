import Encrypt from './Encrypt.js';

const input = document.querySelector('#Input');
const output = document.querySelector('#Output');
const encryptButton = document.querySelector('#Encrypt');
const decryptButton = document.querySelector('#Decrypt');

window.enc = Encrypt;

encryptButton.addEventListener('click', () => {
    output.value = Encrypt.encrypt(input.value);
});

decryptButton.addEventListener('click', () => {
    output.value = Encrypt.decrypt(input.value);
});

input.addEventListener('input', () => {
    output.value = '';
});