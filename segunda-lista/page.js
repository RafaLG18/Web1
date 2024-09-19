import { Form } from "./formularios.js";
import { Canvas } from "./canvas.js";
import { Table } from "./table.js";
import { Tentativas } from "./tentativas.js";
class Page {
  constructor() {
    this.configureBody();
    this.createLocalStorageItem();
    this.createPage();
  }
  configureBody() {
    document.body.style.backgroundColor = "black";
    document.body.style.textAlign = "center";
    document.body.style.color = "#ad3217";
  }
  createLocalStorageItem() {
    localStorage.setItem("tentativas", 0);
  }
  createPage() {
    this.canvas = new Canvas();
    this.form = new Form("input_form");
    this.tentativas=new Tentativas();
    this.table=new Table();
    
  }
}
export {Page};
