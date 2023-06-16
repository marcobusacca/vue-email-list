"use strict";

// RICHIAMO FUNZIONE CREATE_APP VUE.JS E LA INSERISCO IN UNA CONSTANTE
const {createApp} = Vue;

// UTILIZZO FUNZIONE CREATE_APP
createApp({
    // DEFINIZIONE DATA CON L'OGGETTO RETURN
    data(){
        return{
            // VARIABILI VUE.JS

            randomEmail         : '',

            randomArrayEmails   : [],
        }
    },
    created(){
        // ALL'AVVIO DELLA PAGINA VIENE RICHIAMATA LA FUNZIONE CHE GENERA 10 EMAIL RANDOM
        this.generateTenRandomEmails();
    },
    methods: {
        // FUNZIONE CHE GENERA 10 EMAIL RANDOM TRAMITE LE API DI BOOLEAN
        generateTenRandomEmails(){
            // CICLO FOR CHE VA DA 1 A 10
            for(let i = 1; i<= 10; i++){
                // RICHIAMO TRAMITE AXIOS LE API DI BOOLEAN CHE GENERANO LE EMAIL CASUALI
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {

                    // INSERISCO DENTRO LA VARIABILE RANDOM_EMAIL IL RISULTATO DELLE API
                    this.randomEmail = result.data.response;
                    
                    // PUSHO DENTRO L'ARRAY LE EMAIL RANDOM GENERATE DALLE API
                    this.randomArrayEmails.push(this.randomEmail);
                });
            };
        },
    },
}).mount('#app'); // RICHIAMO IL CONTAINER HTML DOVE APPLICARE LA FUNZIONE CREATE_APP