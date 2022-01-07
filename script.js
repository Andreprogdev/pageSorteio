function salvarNomes(){
    
    if(document.getElementById("formulario").value == ""){
        alert("digite algo");
        return
        //return é importate, para retornar não só o alert, mas para finalizar a operação caso não tenha value

    }
    
    
    
    
    
    let e = []    
    
    if(getNomes() !=  null){
        e = getNomes()
    }

    e.push(document.getElementById("formulario").value);
    
    
    
    localStorage.setItem('nome', JSON.stringify(e))
    document.getElementById("formulario").value = ""
    
    renderizar()
}

function getNomes(){
    //vai retornar todos os nomes em forma de array
    return JSON.parse(localStorage.getItem('nome'));
}

function renderizar(){
    let e = document.getElementById("refletor")
    e.innerHTML=""

    for(nome of getNomes()){
        e.innerHTML += `<li>${nome}</li>`

    }
}

function sortearNomes(){
    let p = getNomes()
    let np = p.length;
    console.log(p.length)
    let ns = Math.floor(Math.random() * np);
    numeroSorteado.innerHTML = p[ns];
}

function apagarTudo(){
    localStorage.removeItem('nome')
    let e = document.getElementById("refletor")
    e.innerHTML = ""
    let f = document.getElementById("numeroSorteado")
    f.innerHTML=""
    }




onload = function recarregar(){
    renderizar()
}


