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
        let result = '';
        const keys = Object.keys(this.encDictionary);
        for (let i = 0; i < text.length; i++) {
            if (keys.includes(text[i])) {
                result += this.encDictionary[text[i]];
            } else {
                result += text[i];
            }
        }
        return result;
    }

    static decrypt(text) {
        let result = text.toLowerCase();
        const keys = Object.keys(this.decDisctionary);
        for (let i = 0; i < keys.length; i++) {
            result = result.replace(keys[i], this.decDisctionary[keys[i]], 'g');
        }
        result = result.replaceAll(' ', '')
        return result;
    }
}

export default Encrypt;