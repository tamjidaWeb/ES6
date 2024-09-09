//similar
//has some properties,method

class Product{
    country = 'bangladesh';
    constructor(name){
        this.name = name;
    }
   speak(talk){
    // console.log(`ta?lking about ${talk}`)
   }
}

// const lenovo =new Product('lenovooo');
// console.log(lenovo);
// lenovo.speak('ki bolo');

class Teacher{
    constructor(name,subject){
        this.name= name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching');
    }
   
}
const tapan = new Teacher('sajahan','physics');
console.log(tapan)

const rashid = new Teacher('al fakir','english');
console.log(rashid)