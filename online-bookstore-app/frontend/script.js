
const api="http://localhost:8080/books";

function load(){
fetch(api).then(r=>r.json()).then(d=>{
let list=document.getElementById("list");
list.innerHTML="";
d.forEach(b=>{
let li=document.createElement("li");
li.innerText=b.title+" - "+b.author+" - ₹"+b.price;
list.appendChild(li);
});
});
}

function addBook(){
fetch(api,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
title:document.getElementById("title").value,
author:document.getElementById("author").value,
price:document.getElementById("price").value
})
}).then(load);
}

load();
