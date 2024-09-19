class Canvas {
  constructor() {
    this.createElement();
    this.setAttributes();
    this.draw();
    this.append();
  }
  createElement() {
    this.h1 = document.createElement("h1");
    this.div=document.createElement("div");
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
  }
  setAttributes() {
    this.setAttributesH1();
    this.setAttributesDiv();
  }
  setAttributesH1(){
    this.h1.setAttribute("id", "canvas_title");
    this.h1.textContent="Angle";
    this.h1.style.textAlign = "center";
    this.h1.style.color = "#ad3217";
  }
  setAttributesDiv(){
    this.div.setAttribute("id","canvas_draw");
  }
  draw() {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const lineLength = 150;

    this.randomNumber();
    this.drawHorizontalLine(centerX, centerY, lineLength);
    this.drawVerticalLine(centerX, centerY, lineLength);
    this.drawArc(centerX,centerY);
  }
  randomNumber() {
    this.angleDegrees = Math.floor(Math.random() * (360 - 0 + 1)) + 0;
    this.angleRadians = this.angleDegrees * (Math.PI / 180);
  }
  drawHorizontalLine(centerX, centerY, lineLength) {
    // Desenhar a primeira linha (horizontal)
    this.ctx.beginPath();
    this.ctx.moveTo(centerX, centerY);
    this.ctx.lineTo(centerX + lineLength, centerY); // Reta horizontal
    this.ctx.strokeStyle = "#df6347";
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }

  drawVerticalLine(centerX, centerY, lineLength) {
    const endX = centerX + lineLength * Math.cos(this.angleRadians);
    const endY = centerY - lineLength * Math.sin(this.angleRadians); // Subtrai para ir para "cima"

    this.ctx.beginPath();
    this.ctx.moveTo(centerX, centerY);
    this.ctx.lineTo(endX, endY); // Reta em ângulo
    this.ctx.strokeStyle = "#df6347";
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }
  drawArc(centerX, centerY){
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, 50, 0, -this.angleRadians, true);  // Arco entre as duas linhas
    this.ctx.strokeStyle = "#df6347";
    this.ctx.stroke();
  }
  append() {
    this.div.appendChild(this.canvas);
    this.h1.appendChild(this.div);
    document.body.appendChild(this.h1);
  }

  returnElements(element) {
    switch (element) {
      case "h1":
        return this.h1;
        break;
      case "canvas":
        return this.canvas;
        break;
      default:
        break;
    }
  }
}
export { Canvas };
