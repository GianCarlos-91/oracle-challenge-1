class Encrypt {
    static encDictionary = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    }
    static decDictionary = {
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
        const keys = Object.keys(this.decDictionary);
        for (let i = 0; i < keys.length; i++) {
            const regex = new RegExp(keys[i], 'g');
            result = result.replace(regex, this.decDictionary[keys[i]]);
        }
        return result;
    }
}
export default Encrypt;
