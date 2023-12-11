var el = document.querySelector(".ecran");

function ecrir(val){

    if(el.value.length < 19){

         el.value += val

    }

}

function egal(){
    try{

        el.value = eval(el.value)

    }catch(error){
        
        el.value = "erreure mathematique";

    }
  

}

function supAll(){

    el.value = "";

}
   
function suppOne(){
    el.value = el.value.slice(0,el.value.length - 1)
}

