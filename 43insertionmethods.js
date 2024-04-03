//insertion methods
let a= document.getElementsByTagName('div')[0]
a.innerHTML=a.innerHTML+'<h1>Hello World</h1>'


let b= document.getElementsByTagName('div')[0]
let div=document.createElement('div');
div.innerHTML = '<h1>Hello</h1>'
b.appendChild(div);


let c= document.getElementsByTagName('div')[0]
let div=document.createElement('div');
div.innerHTML = '<h1>HELLO WORLD</h1>'
c.append(div);


let d= document.getElementsByTagName('div')[0]
let div=document.createElement('div');
div.innerHTML = '<h1>HELLO HARRY</h1>'
d.prepend(div);


let e= document.getElementsByTagName('div')[0]
let div=document.createElement('div');
div.innerHTML = '<h1> HARRY</h1>'
e.before(div);


let f= document.getElementsByTagName('div')[0]
let div=document.createElement('div');
div.innerHTML = '<h1>good</h1>'
f.after(div);


let g= document.getElementsByTagName('div')[0]
let div=document.createElement('div');
div.innerHTML = '<h1>good</h1>'
g.replaceWith(div);