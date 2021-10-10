(function () {

    'use strict';


    // load fonst
    function loadFonst(href) {
        const head = document.querySelector('head');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        head.appendChild(link)
    }
    loadFonst('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800&display=swap');


    window.addEventListener("load", function () {
        function sendData() {
            const XHR = new XMLHttpRequest();

            // Bind the FormData object and the form element
            const FD = new FormData(form);

            // Define what happens on successful data submission
            XHR.addEventListener("load", function (event) {
                //alert(event.target.responseText);
                window.location.href = 'thanks.html'
            });

            // Define what happens in case of error
            XHR.addEventListener("error", function (event) {
                alert('Oops! Something went wrong.');
            });

            // Set up our request
            XHR.open("POST", "php/form.php");

            // The data sent is what the user provided in the form
            XHR.send(FD);
        }

        // Access the form element...
        const form = document.querySelector('.whitelist__form')

        // ...and take over its submit event.
        form?.addEventListener("submit", function (event) {
            event.preventDefault();
            sendData();            
        });
    });

})();