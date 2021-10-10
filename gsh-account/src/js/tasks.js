import $ from 'jquery';
import 'bootstrap';
import Sidebar from '../js/modules/sidebar'
import { loadFonts } from '../js/modules/loadFonts'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css'
import '../pages/tasks.scss'


// sidebar
const sidebar = document.querySelector('.sidebar');
new Sidebar(sidebar);


// load fonts
loadFonts('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');


window.addEventListener('DOMContentLoaded', () => {

  // calendar
  const calendarEl = document.querySelector('#calendar');
  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    headerToolbar: {
      right: 'myCustomButton prev,next',
      center: '',
      left: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    events: [
      {
        id: '1',
        title: '12a All Day Event',
        start: '2020-07-01'
      },
      {
        id: '2',
        title: '12a All Day Event',
        start: '2020-07-10'
      },
      {
        id: '3',
        title: '12a All Day Event',
        start: '2020-07-13',
        end: '2020-07-16'
      },
      {
        id: '4',
        title: '12a All Day Event',
        start: '2020-07-22',
        end: '2020-07-24'
      },
    ],
    dateClick: function (info) {
      //console.log(info)
      alert('Clicked on: ' + info.dateStr);
    },
    customButtons: {
      myCustomButton: {
        text: 'custom!',
        click: function () {
          alert('clicked the custom button!');
        }
      }
    },
  });

  calendar.render();

  let datapicker = `<div class="form-control-container form-control-container-datapicker">
    <input type="text" class="form-control form-control-with-icon" id="meetingsDate"
      placeholder="November 28">
    <svg class="form-control-icon" width="24" height="24">
      <use xlink:href="#i-calendar"></use>
    </svg>
  </div>`

  let btnCustom = document.querySelector('.fc-header-toolbar .fc-myCustomButton-button');
  btnCustom.insertAdjacentHTML('beforebegin', datapicker);

  flatpickr('#meetingsDate', {
    //mode: "range",
    enableTime: false,
    dateFormat: "d.m.Y",
    disableMobile: "true",
    allowInput: true,
    static: true
  });

  $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
    calendar.render();
    window.dispatchEvent(new Event('resize'));
    window.dispatchEvent(new Event('devtoolschange'));
  });

});