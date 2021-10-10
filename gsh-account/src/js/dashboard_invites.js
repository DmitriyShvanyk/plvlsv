import '../pages/dashboard_invites.scss'


// dropdown select
const dropdownSelect = document.querySelector('.dropdown-select');
const dropdownSelectItem = dropdownSelect.querySelectorAll('.dropdown-menu');
const dropdownSelectToggle = dropdownSelect.querySelector('.dropdown-toggle');

dropdownSelectItem.forEach(el => el.addEventListener('click', (e) => {        
    dropdownSelectToggle.innerHTML = e.target.innerHTML;
}));