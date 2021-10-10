
export default class Timer {
	constructor(container) {
		this.container = container;		
		this.getTimer = this.getTimer.bind(this);
        this.tick = setInterval(this.getTimer, 1000);
	}

	getTimer() {
		const timerBox = this.container.querySelector('.timer__box');
		const timerBoxDataTime = timerBox.dataset.time;
		const dateNow = new Date().getTime();
		const dateTimer = new Date(timerBoxDataTime).getTime();
		const dateDifference = dateTimer - dateNow;
		const days = Math.floor(dateDifference / (60 * 60 * 1000 * 24));
		const hours = Math.floor((dateDifference % (60 * 60 * 1000 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((dateDifference % (60 * 60 * 1000)) / (1000 * 60));
		const seconds = Math.floor((dateDifference % (60 * 1000)) / 1000);
		const normalizeDate = (num) => (num < 10) ? `0${num}` : num;	
		const timerDays = this.container.querySelector('.timer__days');
		const timerHours = this.container.querySelector('.timer__hours');
		const timerMinutes = this.container.querySelector('.timer__minutes');
		const timerSeconds = this.container.querySelector('.timer__seconds');

		timerDays.textContent = normalizeDate(days);
		timerHours.textContent = normalizeDate(hours);
		timerMinutes.textContent = normalizeDate(minutes);
		timerSeconds.textContent = normalizeDate(seconds);

		if (dateDifference < 0) {
			this.clear();
		}
	}

	clear() {
		clearInterval(this.tick);
		this.container.innerHTML = '<strong>Finish</strong>';
	}
}