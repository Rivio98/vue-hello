//dichiaro nello script il vue

const { createApp, ref } = Vue

createApp({
    setup() {//dentro il vue vado a dichiarere l'informazione da stampare sul dom
        const message = ref('Hello world!')//creo il messaggio
        return {
            message
        }
    }
}).mount('#container')