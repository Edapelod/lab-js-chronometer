class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {
      this.currentTime +=1;
      if (printTimeCallback) {printTimeCallback()} 
    }, 1000)
    }

  getMinutes() {
    if (this.currentTime) { 
      return Math.floor(this.currentTime/60)}
      else { return 0}

  }

  getSeconds() {
    if (this.currentTime) {
      return Math.floor(this.currentTime % 60)
    }
    else {return 0}
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
