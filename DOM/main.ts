const h1 = document.querySelector("h1");
console.log(h1?.textContent);

let titulo: HTMLHeadingElement = document.querySelector(".title") as HTMLHeadingElement;
console.log(titulo.textContent);

const message = document.querySelector("#message") as HTMLInputElement;
console.log(message.placeholder);
