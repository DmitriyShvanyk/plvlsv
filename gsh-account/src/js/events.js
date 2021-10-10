import flatpickr from 'flatpickr';
import rangePlugin from '../../node_modules/flatpickr/dist/plugins/rangePlugin'
import '../../node_modules/flatpickr/dist/flatpickr.min.css'
import '../pages/events.scss'


window.addEventListener('DOMContentLoaded', () => {

  flatpickr('#dateStartEvent', {
    enableTime: false,
    dateFormat: "d.m.Y",
    disableMobile: "true",
    allowInput: true,
    static: true,
    "plugins": [new rangePlugin({
      input: "#dateFinishEvent"
    })]

  });

  flatpickr('#timeStartEvent', {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    static: true
  });

  flatpickr('#timeFinishEvent', {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    static: true
  });

});