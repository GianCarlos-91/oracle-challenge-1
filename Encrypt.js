class Encrypt {
    static encDictionary = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    }
    static decDisctionary = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    }
    static encrypt(text) {
        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            if (this.encDictionary[char]) {
                encryptedText += this.encDictionary[char];
            } else {
                encryptedText += char;
            }
        }
        return encryptedText;
    }

    static decrypt(text) {
        let decryptedText = '';
        for (let i =0; i < text.length; i++) {
            let char = text[i];
            if (this.decDisctionary[char]) {
                decryptedText += this.decDisctionary[char];
            } else {
                decryptedText += char;
            }
        }
        return decryptedText;
    }
}