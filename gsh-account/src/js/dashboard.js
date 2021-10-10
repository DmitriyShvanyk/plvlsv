import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css'
import '../pages/dashboard.scss'

window.addEventListener('DOMContentLoaded', () => {

    // target date
    flatpickr('#targetDate', {
        enableTime: false,
        dateFormat: "d.m.Y",
        disableMobile: "true",
        allowInput: true,
        static: true
    });

    // target time
    flatpickr('#targetTime', {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        allowInput: true,
        static: true
    });

    // add tasks date
    flatpickr('#addTasksDate', {
        enableTime: false,
        dateFormat: "d.m.Y",
        disableMobile: "true",
        allowInput: true,
        static: true
    });

    // add tasks time
    flatpickr('#addTasksTime', {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        allowInput: true,
        static: true
    });

    // news tasks date
    flatpickr('#newsDate', {
        enableTime: false,
        dateFormat: "d.m.Y",
        disableMobile: "true",
        allowInput: true,
        static: true
    });

    // news tasks date edit
    flatpickr('#newsDateEdit', {
        enableTime: false,
        dateFormat: "d.m.Y",
        disableMobile: "true",
        allowInput: true,
        static: true
    });

    // event date start
    flatpickr('#eventDateStart', {
        enableTime: false,
        dateFormat: "d.m.Y",
        disableMobile: "true",
        allowInput: true,
        static: true
    });

    // event time start
    flatpickr('#eventTimeStart', {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        allowInput: true,
        static: true
    });

    // event date finish
    flatpickr('#eventDateFinish', {
        enableTime: false,
        dateFormat: "d.m.Y",
        disableMobile: "true",
        allowInput: true,
        static: true
    });

    // event time finish
    flatpickr('#eventTimeFinish', {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        allowInput: true,
        static: true
    });    
    
});