class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback();
    }, 10);
  }

  getMinutes() {
    let minutesNoMilli = (this.currentTime - this.getMilliseconds()) / 100;
    let minutesNoSecs = minutesNoMilli - this.getSeconds();
    return minutesNoSecs / 60;
  }

  getSeconds() {
    let seconds = (this.currentTime - this.getMilliseconds()) / 100;
    let extraSeconds = seconds % 60;
    return extraSeconds;
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let mins = this.computeTwoDigitNumber(this.getMinutes());
    let secs = this.computeTwoDigitNumber(this.getSeconds());
    let mill = this.computeTwoDigitNumber(this.getMilliseconds());

    return `${mins}:${secs}:${mill}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
