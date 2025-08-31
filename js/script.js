(()=>{
console.log(window.innerWidth)

if(window.innerWidth > 500){
  alert("Este site só esta disponiel para versão Mobile" +window.innerWidth);
  window.location.href = ""
}
})();