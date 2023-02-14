const personas =[
    new Persona ('Lalo', 'Shifrin', '23.333.444'),
    new Persona ('Pepe', 'Pepin', '45.669.897'),
    new Persona ('Lita', 'Ballesteros', '42.345.678'),
    new Persona ('Carla', 'Cibriam', '39.333.456')
];

function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        texto += `<li>Nombre Completo : ${persona.nombre} ${persona.apellido} ---- Documento : ${persona.dni} </li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}
function agregarPersona(){
    const forma = document.forms['forma']
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const dni = forma['dni'];
    if (nombre.value != '' && apellido.value != '' && dni.value != ''){
        const persona = new Persona (nombre.value, apellido.value, dni.value);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        console.log('No hay informacion');
    }
    forma.reset();
    localStorage.setItem.forma('nombre', 'apellido', 'dni');
}
