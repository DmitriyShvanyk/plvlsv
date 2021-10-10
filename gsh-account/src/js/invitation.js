import 'jquery';
import 'bootstrap';
import { loadFonts } from '../js/modules/loadFonts'
import '../pages/invitation.scss'

import Timer from '../js/modules/timer'

// load fonts
loadFonts('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');


let timerElem = document.querySelector('.timer');
let timer = new Timer(timerElem);