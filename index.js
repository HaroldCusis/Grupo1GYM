//Fecha actual
const fecha = new Date();
const opciones = {day:"2-digit", month:"2-digit", year:"numeric"};
document.getElementById("fecha").textContent = fecha.toLocaleDateString("es-ES", opciones);



//1. Crear una lista para almacenar los miembros
let miembros = JSON.parse(localStorage.getItem("miembros")) || [];
function guardarMiembros() {
    localStorage.setItem("miembros", JSON.stringify(miembros));
}

//2. Crear una funcion para mostrar los miembros
function mostrarMiembros() {
    const lista = document.getElementById("listaMiembros");
    lista.innerHTML = "";
    miembros.forEach((miembro, index) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <span> ${miembro.nombre} - ${miembro.tipo} </span>
            <div class="actions">
                <button onclick="editarMiembro(${index})" title="Editar">📝</button>
                <button onclick="eliminarMiembro(${index})" title="Eliminar">🧺</button>
            </div>
        `;
        lista.appendChild(div);
    });
}

//3. Crear una funcion para agregar un nuevo miembro
function agregarMiembro(){
    const nombre = document.getElementById("nombreMiembro").value;
    const tipo = document.getElementById("tipoMembresia").value;
    if (nombre && tipo){
        miembros.push({nombre, tipo});
        guardarMiembros();
        mostrarMiembros();
        document.getElementById("nombreMiembro").value = "";
        document.getElementById("tipoMembresia").value = "";
    }
}

//4. Editar la información de un miembro
function editarMiembro(index){
    const nombre = miembros[index];
    const nuevoMiembro = prompt("Cual es el nuevo nombre?", nombre.nombre);
    const nuevoTipo = prompt("Cual es el nuevo tipo?", nombre.tipo);
    if (nuevoMiembro && nuevoTipo){
        miembros[index].nombre = nuevoMiembro;
        miembros[index].tipo = nuevoTipo;
        guardarMiembros();
        mostrarMiembros();
    }
}

//5. Eliminar un miembro
function eliminarMiembro(index){
    if (confirm("¿Estás seguro de eliminar este miembro?")){
        miembros.splice(index, 1);
        guardarMiembros();
        mostrarMiembros();
    }
}

//Fase de clases

//1. Crear una lista para almacenar las clases
let clases = JSON.parse(localStorage.getItem("clases")) || [];
function guardarClases() {
    localStorage.setItem("clases", JSON.stringify(clases));
}

//2. Crear una funcion para mostrar las clases
function mostrarClases() {
    const lista = document.getElementById("listaClases");
    lista.innerHTML = "";
    clases.forEach((clase, index) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <span> ${clase.nombre} - ${clase.instructora} - ${clase.estado} </span>
            <div class="actions">
                <button onclick="editarClase(${index})" title="Editar">📝</button>
                <button onclick="eliminarInstructor(${index})" title="Eliminar">🧺</button>
                <button onclick="cambiarEstado(${index})" title="Cambiar Estado">💱</button>

            </div>
        `;
        lista.appendChild(div);
    });
}

//3. Crear una funcion para agregar una nueva clase
function agregarClase(){
    const nombre = document.getElementById("nombreClase").value;
    const instructora = document.getElementById("nombreInstructura").value;
    if (nombre && instructora){
        clases.push({nombre, instructora, estado: "Iniciando"});
        guardarClases();
        mostrarClases();
        document.getElementById("nombreClase").value = "";
        document.getElementById("nombreInstructura").value = "";
    }
}

//4. Editar la información de una clase
function editarClase(index){
    const nombre = clases[index];
    const nuevoNombre = prompt("Cual es el nuevo nombre?", nombre.nombre);
    const nuevoInstructor = prompt("Cual es el nuevo instructor?", nombre.instructora);
    if (nuevoNombre && nuevoInstructor){
        clases[index].nombre = nuevoNombre;
        clases[index].instructora = nuevoInstructor;
        guardarClases();
        mostrarClases();
    }
}

//5. Eliminar una clase
function eliminarInstructor(index){
    if (confirm("¿Estás seguro de eliminar esta clase?")){
        clases.splice(index, 1);
        guardarClases();
        mostrarClases();
    }
}

///Cambio de plan para los miembros
function cambiarPlan(index){
    const plan = ["Mensual", "Trimestral", "Anual"];
    let estadoActual = miembros[index].tipo;
    let nuevoPlan = plan[(plan.indexOf(estadoActual) + 1) % plan.length];
    miembros[index].tipo = nuevoPlan;
    guardarMiembros();
    mostrarMiembros();
}

//Cambio de estado para las clases
function cambiarEstado(index){
    const estados = ["Iniciando", "Finalizada"];
    let estadoActual = clases[index].estado;
    let nuevoEstado = estados[(estados.indexOf(estadoActual) + 1) % estados.length];
    clases[index].estado = nuevoEstado;
    guardarClases();
    mostrarClases();
}