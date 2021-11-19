var especialidades= [{
  nombre:"Guidismo Internacional",
  campo:"Guidismo",
  img:"especialidades/GuidismoInternacional.png"},
  {nombre:"Guidismo Nacional",
    campo:"Guidismo",
    img:"especialidades/GuidismoNacional.png"},
    
  ]
  
function mostrarEspecialidades(x){
  let ola=0
  x=ola++
  let esp;
  const nombress=especialidades[x];
  for (let j = 0; j < nombress.nombre.length; j++) {
   let espe =`<div class="card" style="width: 18rem;">
   <img class="card-img-top" src=${JSON.stringify(especialidades[j].img)} alt="Card image cap">
   <div class="card-body">
     <h5 class="card-title">${JSON.stringify(especialidades[j].nombre)}</h5>
     <p class="card-text">${JSON.stringify(especialidades[j].campo)}</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>`
  esp += espe;

  }
 
  document.getElementById("especialidad").innerHTML= esp
  
}
mostrarEspecialidades()
