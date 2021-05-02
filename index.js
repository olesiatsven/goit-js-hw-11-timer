
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.currentDate;
    this.deltaTime;
    this.currentDate;
  }

  insertName() {
    const titleTimer = document.querySelector(this.selector);
    const text = document.createElement('p');
    text.textContent = `До Лета осталось:`;
    titleTimer.before(text);
    this.getIdDate();
  }

  getIdDate() {
    this.targetDate = new Date(this.targetDate).getTime();
    this.getTimer();
  }
  getTimer() {
    setInterval(() => {
      this.currenDate = Date.now();
      this.deltaTime = this.targetDate - this.currenDate;
      this.timing(this.deltaTime);

    }, 1000);
  }

  timing() {
    const daysT = document.querySelector(`${this.selector} [data-value="days"]`);
    const hoursT = document.querySelector(`${this.selector} [data-value="hours"]`);
    const minsT = document.querySelector(`${this.selector} [data-value="mins"]`);
    const secsT = document.querySelector(`${this.selector} [data-value="secs"]`);

     const days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
    daysT.textContent = `${days}`;

    const hours = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    hoursT.textContent = `${hours}`;
    const mins = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
    minsT.textContent = `${mins}`;
    const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
    secsT.textContent = `${secs}`;
  }
  
  pad(time) {
    return String(time).padStart(2, 0);

  }
}

const summer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 1, 2021'),
});
summer.insertName();