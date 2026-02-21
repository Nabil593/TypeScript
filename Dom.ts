const f = document.querySelector('h1')!;
console.log(f.textContent);

const c = document.querySelector('h1');
const d = document.querySelector('a');
const anchor = document.querySelector('.anchor-style')! as HTMLAnchorElement;

console.log(anchor.href);
console.log(d?.href);
console.log(f?.classList);