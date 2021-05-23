const refs = {
    days: document.querySelector('.value[data-value="days"]'),
    hours: document.querySelector('.value[data-value="hours"]'),
    minutes: document.querySelector('.value[data-value="mins"]'),
    secs: document.querySelector('.value[data-value="secs"]'),
    timerFace: document.getElementById("timer-1"),
};

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.targetDate = targetDate;
    }

    setInt = setInterval(() => {
        const nowDate = Date.now();
        const time = this.targetDate - nowDate;
        this.triggerClock(time);
        this.timeFinish(time);
    }, 1000);

    triggerClock(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.minutes.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;
    }

    pad(value) {
        return String(value).padStart(2, "0");
    }

    timeFinish(time) {
        if (time < 0) {
            clearInterval(this.setInt);
            refs.timerFace.textContent = "Finish";
        }
    }
}

new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("30 October, 2021"),
});