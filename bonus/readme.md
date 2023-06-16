PROBLEMA:

Attraverso l'apposita API di Boolean : https://flynn.boolean.careers/exercises/api/random/mail;

generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


SOLUZIONE:

    - Collegare Axios CDN in HTML;

    - Analizzare tramite PostMan la struttura dell'API di Boolean;

    - Creare nell'HTML "ul" e "li" dove stampare gli indirizzi email;


    - Creare il BoilerPlate vue.js in JavaScript:

        - Inserire dentro Return:

            - Una variabile (randomEmail) dove inserire l'indirizzo email generato;

            - Un'array (randomArrayEmails) dove pushare ogni indirizzo email generato;


        - Inserire dentro Methods:

            - Funzione generateTenRandomEmails():

                - Creare un CICLO FOR che va da 1 a 10:

                    - Richiamare tramite Axios l'API di Boolean;

                    - Inserire dentro randomEmail il risultato del DATA dell'API;

                    - Pushare dentro randomArrayEmails il contenuto di randomEmail;


        - Richiamare dentro Created() la funzione generateTenRandomEmails();


    - Usare la direttiva v-for(email in randomArrayEmails) dentro gli "li" per creare un list-item per ogni email random.

    - Usare la direttiva v-text(email) dentro gli "li" per stampare a schermo le email random.

    - Usare la direttiva v-if sull'Unordered List (ul) per mostrarla a schermo, SOLO SE la lunghezza dell'array (randomArrayEmails) è UGUALE a 10. (ovvero SOLTANTO QUANDO sono state GENERATE e PUSHATE tutte le email random).