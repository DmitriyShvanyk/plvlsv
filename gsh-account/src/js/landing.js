import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css'
import '../pages/landing.scss'


window.addEventListener('DOMContentLoaded', () => {

    flatpickr('#landingDateStats', {
        mode: "range",
        enableTime: false,
        dateFormat: "d.m.Y",
        conjunction: " - ",
        disableMobile: "true",
        allowInput: true,
        static: true
    });

});