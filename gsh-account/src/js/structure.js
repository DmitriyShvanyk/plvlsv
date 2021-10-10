import $ from 'jquery';
import 'bootstrap';
import Sidebar from '../js/modules/sidebar'
import { loadFonts } from '../js/modules/loadFonts'

import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css'
import '../pages/structure.scss'


// sidebar
function initSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    new Sidebar(sidebar);
}


// load fonts
loadFonts('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');


window.addEventListener('DOMContentLoaded', () => {
    initSidebar();

    const dateElem = document.querySelectorAll('.structures__date-reg');
    const dateTimeElem = document.querySelectorAll('.structures__date-time');

    dateElem.forEach(el => {
        flatpickr(el, {
            enableTime: false,
            dateFormat: "d.m.Y",
            disableMobile: "true",
            allowInput: true,
            static: true
        });
    });

    dateTimeElem.forEach(el => {
        flatpickr(el, {
            disableMobile: "true",
            allowInput: true,
            static: true,
            enableTime: true,
            minTime: "0:00",
            maxTime: "23:00"
        });
    });

    // popover
    const structures = document.querySelector('.structures');

    structures.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('hierarchy__item')) {
            const name = e.target.dataset.hierarchyName;
            const from = e.target.dataset.hierarchyFrom;
            const rang = e.target.dataset.hierarchyRang;
            const pack = e.target.dataset.hierarchyPack;
            const lbVal1 = e.target.dataset.hierarchyLeftBranchValue1;
            const lbVal2 = e.target.dataset.hierarchyLeftBranchValue2;
            const lbVal3 = e.target.dataset.hierarchyLeftBranchValue3;
            const rbVal1 = e.target.dataset.hierarchyRightBranchValue1;
            const rbVal2 = e.target.dataset.hierarchyRightBranchValue2;
            const rbVal3 = e.target.dataset.hierarchyRightBranchValue3;

            document.querySelectorAll('.popover').forEach(el => {
                el.classList.remove('show')
            })

            //console.log(e.target)
            const popov = $(e.target).popover({
                html: true,
                trigger: "manual",
                content: `
                    <div class="user-profile">
                        <div class="user-profile__head">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="user-profile__title">${name}</h2>
                                    <p class="user-profile__caption">${from}</p>
                                </div>
                                <div class="col-5 text-right">
                                    <h2 class="user-profile__title h-rang">${rang}</h2>
                                    <p class="user-profile__caption h-pack">${pack}</p>
                                </div>
                            </div>
                        </div>
                        <div class="user-profile__body">
                            <div class="row user-profile__table">
                                <div class="col-4">
                                    <p class="mt-1 mb-1">&nbsp;</p>
                                    <p class="mt-1 mb-1">PV</p>
                                    <p class="mt-1 mb-1">
                                        <svg class="user-profile__icon" width="23" height="23">
                                            <use xlink:href="#i-user"></use>
                                        </svg>
                                    </p>
                                    <p class="mt-1 mb-1">&nbsp;</p>
                                </div>
                                <div class="col-4 text-right">
                                    <p class="mt-1 mb-1 text-nowrap">Левая ветка</p>
                                    <p class="mt-1 mb-1 h-lb-val1">${lbVal1}</p>
                                    <p class="mt-1 mb-1 h-lb-val2">${lbVal2}</p>
                                    <p class="mt-1 mb-1 h-lb-val3">${lbVal3}</p>
                                </div>
                                <div class="col-4 text-right">
                                    <p class="mt-1 mb-1 text-nowrap">Правая ветка</p>
                                    <p class="mt-1 mb-1 h-rb-val1">${rbVal1}</p>
                                    <p class="mt-1 mb-1 h-rb-val2">${rbVal2}</p>
                                    <p class="mt-1 mb-1 h-rb-val3">${rbVal3}</p>
                                </div>
                            </div>                
                        </div>
                    </div>
                  `
            });



            $(popov).popover('toggle');
        }
    });
});