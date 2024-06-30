const a=document.querySelector(".chatbot");
const b=document.querySelector(".writing");
let c=0;
a.onclick= () => {
    if(c==0){
        b.style.display="inline-block";
        c=1;
}
else{
    b.style.display="none";
    c=0
}
}
const q=document.querySelector(".optionone")
const d=document.querySelector(".optiontwo")
const e=document.querySelector(".optionthree")    
const f=document.querySelector(".optionfour")   
const g=document.querySelector(".optionfive")
q.onclick= ()=>{
  q.innerText="Please Click the 'How Do I save Myself From Aliens' Menu"
}
d.onclick= ()=>{
    d.innerText="Please Click the 'Want To Volunteer menu'"
}
e.onclick= ()=>{
    e.innerText="You can safely go the places which are not marked in red in the map"
}
f.onclick= ()=>{
    f.innerText="Please share ur ideas through the 'Contact Us' menu" 
}
g.onclick= ()=>{
    g.innerText="Please share details through the 'Contact Us' menu"
}