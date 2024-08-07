function encodeAndDecodeMessages() {

    const [encodeBtnEl, decodeBtnEl] = 
        document.querySelectorAll('button');

    const [encodeTextEl, decodeTextEl] = 
        document.querySelectorAll('textarea');


    function encodeMessage (text) {
        return text.split('').map((char) => 
            String.fromCharCode(char.charCodeAt(0) + 1))
            .join('');
    }
    
    function decodeMessage (text) {
        return text.split('').map((char) => 
            String.fromCharCode(char.charCodeAt(0) - 1))
            .join('');
    }

    function encodeMessageHandler () {
        decodeTextEl.value = encodeMessage(encodeTextEl.value);
        encodeTextEl.value = '';
    }
    
    function decodeMessageHandler () {
        decodeTextEl.value = decodeMessage(decodeTextEl.value);
        
    }
    
    encodeBtnEl.addEventListener('click', encodeMessageHandler);
    decodeBtnEl.addEventListener('click', decodeMessageHandler);
    
}