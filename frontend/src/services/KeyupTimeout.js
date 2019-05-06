const TIMEOUT_MS = 300;

export class KeyupTimeout {
  constructor(_timeOutMs) {
    this.timeOutMs = _timeOutMs || TIMEOUT_MS;
    this.timeout = null;
    this.waitAndExecuteCb = this.waitAndExecuteCb.bind(this);
  }

  waitAndExecuteCb (_callback) {
    if (this.timeout != null) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() =>{
      this.timeout = null;  
  
      return _callback();
    }, this.timeOutMs);
  }
}