//1. Promise

export default async function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
import helloWorld from './helloWorld';
  
async function messages() {
    const msg = await helloWorld();
    console.log(msg);
  }

messages();