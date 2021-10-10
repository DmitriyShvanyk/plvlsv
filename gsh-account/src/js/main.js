import $ from 'jquery';
import 'bootstrap';
import Sidebar from '../js/modules/sidebar'
import { loadFonts } from '../js/modules/loadFonts'

// sidebar
function initSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    new Sidebar(sidebar);
}


// load fonts
loadFonts('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');


// copy link
function initCopyLink() {
    const sponlinkControl = document.querySelector('.sponlink__form-control');
    if (!sponlinkControl) return;

    function copySponsoredLink() {
        this.select();
        document.execCommand("copy");
        //alert("Copied the text: " + this.value);
        this.closest('.form-control-container').classList.add('form-control-container--copy');

        setTimeout(() => {
            this.closest('.form-control-container').classList.remove('form-control-container--copy');
        }, 2000);
    }

    sponlinkControl.addEventListener('click', copySponsoredLink);
}


window.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initCopyLink();
});