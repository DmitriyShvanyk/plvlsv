import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css'
import '../pages/profile.scss'


window.addEventListener('DOMContentLoaded', () => {

    flatpickr('#profileBirthday', {
        enableTime: false,
        dateFormat: "d.m.Y",
        disableMobile: "true",
        allowInput: true,
        static: true
    });

});