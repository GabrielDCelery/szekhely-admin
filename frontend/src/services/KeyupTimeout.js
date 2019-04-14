const TIMEOUT_MS = 300;

class KeyupTimeout {
  constructor() {
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
    }, TIMEOUT_MS);
  }
}

export default KeyupTimeout;