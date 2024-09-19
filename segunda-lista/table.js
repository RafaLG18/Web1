class Table {
  constructor(parameters) {
    this.createElements();
    this.configureTable();
    this.configureDiv();
    //this.createRow();
    //this.createCols();
    //this.setColContent("teste","teste","teste");
    this.appendAll();
  }

  createElements() {
    this.div= document.createElement("div");
    this.table = document.createElement("table");
    this.tbody = document.createElement("tbody");
    
    }
  configureTable(){
    this.table.style.marginLeft="auto";
    this.table.style.marginRight="auto";
  }
  configureDiv(){
    this.div.style.textAlign="center";
  }
  createRow(){
    this.tr= document.createElement("tr");
  }
  createCols(){
    this.angulo= document.createElement("td");
    this.simbolo= document.createElement("td");
    this.indicador= document.createElement("td");
  }
  setColContent(angulo,simbolo,indicador){
    this.angulo.textContent=angulo;
    this.simbolo.textContent=simbolo;
    this.indicador.textContent=indicador;
  }
  appendToRow(){
    this.tr.appendChild(this.angulo);
    this.tr.appendChild(this.simbolo);
    this.tr.appendChild(this.indicador);
  }
  appendToTbody(){
    this.tbody.appendChild(this.tr);
  }
  appendToTable(){
    this.table.appendChild(this.tbody);
  }

  appendToDiv(){
    this.div.appendChild(this.table);
  }
  appendToBody(){
    document.body.appendChild(this.div);
  }
  appendAll(){
    //this.appendToRow();
   // this.appendToTbody();
    this.appendToTable();
    this.appendToDiv();
    this.appendToBody();
  }

}

export{Table};
