// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age= age;
//     }
//     sleep(){
//         console.log(`sleeping now ${this.name}`)
//     }
//     activity(){
//         this.sleep();
//     }
// }

// const kodom = new Person('kodom',21);
// console.log(kodom);
// kodom.sleep();

// const badam = new Person('kacja',32);
// badam.sleep();

// const lazy = kodom.sleep;
// lazy();


// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;

//     }
//     sleep(){
//         console.log(`sleeping ${this.name}`);
//     }
//     activity(){
//         this.sleep();
//     }
// }
// const kodom = new Person('kodom ali',26);
// console.log(kodom);
// kodom.sleep()

// const badam = new Person(`kacha badam`,25);
// badam.sleep()

// const lazy = kodom.sleep;
// lazy();

// const person = {
//     name: 'Alice',
//     greet: function() {
//       setTimeout(() => {
//         console.log(this.name); // 'this' refers to the person object, inherited from the surrounding context
//       }, 2000);
//     }
//   };
  
//   person.greet();

  function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }
  
  const person = { name: 'Alice' };
  greet.call(person, 'Hello'); // Logs 'Hello, Alice'
  greet.apply(person, ['Hi']); // Logs 'Hi, Alice'
  