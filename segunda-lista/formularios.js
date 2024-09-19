class Form {
  constructor(atrribute) {
    this.createElements();
    //this.configureH1(h1_atrribute);
    this.configureDiv(atrribute);
    this.configureLabel();
    this.configureInputAndButton();
    this.appendAll();
  }
  createElements() {
    //this.h1 = document.createElement("h1");
    this.div=document.createElement("div");
    this.form = document.createElement("form");
    this.label = document.createElement("label");
    this.input = document.createElement("input");
    this.button = document.createElement("input");
  }
  configureH1(h1_atrribute) {
    this.h1.setAttribute("id", h1_atrribute);
  }
  configureDiv(div_atrribute) {
    this.div.setAttribute("id", div_atrribute);
    this.div.style.textAlign="center";
  }
  configureLabel() {
    this.label.setAttribute("for", "valor_teste");
  }
  // Set attributes to elements
  configureInputAndButton() {
    //input
    this.input.setAttribute("type", "number");
    this.input.setAttribute("id", "form_number");
    //Button in input
    this.button.setAttribute("type", "button");
    this.button.setAttribute("id", "button");
    this.button.setAttribute("value", "enviar");
  }

  appendForms() {
    this.form.appendChild(this.label);
    this.form.appendChild(this.input);
    this.form.appendChild(this.button);
  }

  appendFormToH1() {
    this.h1.appendChild(this.form);
  }
  appendFormToDiv() {
    this.div.appendChild(this.form);
  }
  appendFormBody() {
    document.body.appendChild(this.div);
  }

  appendAll() {
    this.appendForms();
    //this.appendFormToH1();
    this.appendFormToDiv();
    this.appendFormBody();
  }
  returnElements(elements) {
    switch (elements) {
      case "h1":
        return this.h1;
        break;
      case "form":
        return this.form;
        break;
      case "label":
        return this.label;
        break;
      case "input":
        return this.input;
        break;
      case "button":
        return this.button;
        break;
      default:
        break;
    }
  }
}

export { Form };
