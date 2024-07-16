//dichiaro nello script il vue

const { createApp, ref } = Vue

createApp({
    setup() {//dentro il vue vado a dichiarere l'informazione da stampare sul dom
        const message = ref('Hello world!')//creo il messaggio
        const image = ref('img/4d47d7e49cd325f8a13014d4950203b3.jpg')//immagine
        return {
            message,
            image
        }
    }
}).mount('#container')