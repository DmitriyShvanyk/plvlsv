import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css'
import '../pages/contacts_add.scss'

window.addEventListener('DOMContentLoaded', () => {
    flatpickr('#contactsAddBirthday', {
      enableTime: false,
      dateFormat: "d.m.Y",
      disableMobile: "true",
      allowInput: true,
      static: true  
    });  
  });