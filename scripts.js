function loop() {
    for (let i = 1; i <= 7; i++) {
      const result = new Array(i).fill('#').join('');
      console.log(result);
    }
  }
  
  function min_ab(a, b) {
    
    if (a>b){
      return b;
    }
    else return a;
  }
  
  function min_arr(arr) {
    var min=arr[0];
    for (i=1;i<arr.length;i++){
      if (arr[i]<min){
        min=arr[i];
      }
    }
    return min;
  }
  
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super();
      this.name = name;
      this.created = new Date();
    }
  }
  
  const animal = new Animal('Lori');
  const dog = new Dog('Eva');
  
  
  
  function promise1() {
    fetch('https://api.github.com/users/shnelski')
      .then(res => res.json())
      .then(res => console.log(res))
  }
  
  async function async1() {
    const response = await fetch('https://api.github.com/users/shnelski')
    const json = await response.json();
  
    console.log(json);
  }
  
  window.loop = loop;
  window.min_ab = min_ab;
  window.min_arr = min_arr;