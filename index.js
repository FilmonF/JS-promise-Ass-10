// Delay function that returns a Promise
function delay(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
  

  async function sayHelloWorld() {
    console.log("Hello");
    await delay(2000); 
    console.log("World");
  }
  
  sayHelloWorld();
  