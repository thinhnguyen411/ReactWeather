var names =['Thinh','Huy','Lan','Thanh'];

names.forEach(function (name) {
  console.log('forEach',name);
});
//arrow
names.forEach((name) => {
  console.log('arrowFunc',name);
});
//arrow but have just one yeu cau
names.forEach((name) => console.log(name));
//tu return neu chi co 1 yeu cau don gian
var returnMe =(name) => name +'!';
console.log(returnMe('Thinh'));
//funtion thuong su dung this cua no con arrow function su dung this cua parent function
var person ={
  name: 'Thinh',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name +' say hi to '+ name)
    });
  }
}
person.greet();

console.log('test');

function add(a,b) {
  return a+b;
}

console.log(add(1,3));
console.log(add(9,0));

var addStatement = (a,b) => {
  return a+b;
}
console.log(addStatement(4,7));

var addExpression = (a,b) => a+b;
console.log(addExpression(4,7));
