class Tentativas {
  constructor(parameters) {
    this.createElements();
    this.setAttributes();
    this.appendAll();
  }

  createElements() {
    this.div = document.createElement("div");
    this.p = document.createElement("p");
  }
  setAttributes() {
    this.div.setAttribute("id", "tentativas");
    this.p.setAttribute("id", "num_tentativas");
    this.p.textContent = "tentativas:" + localStorage.tentativas + "/4";
    this.p.style.color = "#ad3217";
  }
  appendAll() {
    this.div.appendChild(this.p);
    document.body.appendChild(this.div);
  }
  updateTentativas(){
    this.p.textContent = "tentativas:" + localStorage.tentativas + "/4";
  }
}

export {Tentativas};