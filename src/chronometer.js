class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
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
    
    const minsAndSecs = value.toString()
    if (minsAndSecs.length > 1) {
      return `${value}`
    } else {return `0${value}`}
  }

  stop() {
    clearInterval(this.intervalId) 
  }

  reset() {
    if (this.currentTime) {
      return this.currentTime=0
    }
  }

  split() {
    // ... your code goes here
  }
}
