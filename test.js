const { JSDOM } = require("jsdom");

// Create a fake DOM
const dom = new JSDOM(`<!DOCTYPE html><p>Hello, world!</p>`);

// Access the fake window object
global.window = dom.window;
global.document = dom.window.document;

console.log(window.document.querySelector("p").textContent); // Output: Hello, world!
