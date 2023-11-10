class Shape {
 constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor
 }
 
 setColor(color) {
    this.color = color
 }

 setText(text) {
    this.text = text
 }
  
 setTextColor(textColor) {
    this.textColor = textColor
 }
}

class Circle extends Shape {
render() {
return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;

    };
};
  
class Square extends Shape {
    render() {
    return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`;
    
        };
    };

class Triangle extends Shape {
     render() {
    return `<polygon points="50,10 90,90 10,90" fill="${this.color}" />`;  
        
        };
    };



module.exports = { Circle, Square, Triangle };