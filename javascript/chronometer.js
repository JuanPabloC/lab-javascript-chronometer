class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);
  }

  getMinutes() {
    let minutesInSeconds = this.currentTime - this.getSeconds();
    return minutesInSeconds / 60;
  }

  getSeconds() {
    return this.currentTime % 60;
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

    return `${mins}:${secs}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
