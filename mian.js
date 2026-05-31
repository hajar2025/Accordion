const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");


let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");




function hidden(){
    p1.style.display = "none" ;
    p2.style.display = "none" ;
    p3.style.display = "none" ;
}
hidden();



q1.addEventListener("click",()=>{
   hidden();
   p1.style.display = "block" ;

})


q2.addEventListener("click",()=>{
    hidden();
    p2.style.display = "block";
    
})
q3.addEventListener("click",()=>{
    hidden();
    p3.style.display = "block";
    
})