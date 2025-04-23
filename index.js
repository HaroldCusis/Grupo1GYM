// Obtener la fecha actual
const fecha = new Date(); // Crea un objeto de fecha con la fecha y hora actuales
const opciones = {day:"2-digit", month:"2-digit", year:"numeric"}; // Define el formato de la fecha
document.getElementById("fecha").textContent = fecha.toLocaleDateString("es-ES", opciones); // Muestra la fecha en un elemento con id "fecha"

// 1. Crear una lista para almacenar los miembros **/
let miembros = JSON.parse(localStorage.getItem("miembros")) || []; // Intenta obtener la lista de miembros del almacenamiento local, o crea una lista vacía si no existe

// Función para guardar la lista de miembros en el almacenamiento local
function guardarMiembros() {
    localStorage.setItem("miembros", JSON.stringify(miembros)); // Convierte la lista de miembros a JSON y la guarda
}

// 2. Crear una función para mostrar los miembros **/
function mostrarMiembros() {
    const lista = document.getElementById("listaMiembros"); // Obtiene el elemento donde se mostrarán los miembros
    lista.innerHTML = ""; // Limpia la lista actual
    miembros.forEach((miembro, index) => { // Itera sobre cada miembro
        const div = document.createElement("div"); // Crea un nuevo elemento div para cada miembro
        div.className = "card"; // Asigna una clase "card" al div
        div.innerHTML = `
            <span> ${miembro.nombre} - ${miembro.tipo} </span> // Muestra el nombre y tipo de miembro
            <div class="actions"> // Contenedor para los botones de acción
                <button onclick="editarMiembro(${index})" title="Editar">📝</button> // Botón para editar
                <button onclick="eliminarMiembro(${index})" title="Eliminar">🧺</button> // Botón para eliminar
            </div>
        `;
        lista.appendChild(div); // Añade el div a la lista de miembros
    });
}

// 3. Crear una función para agregar un nuevo miembro **/
function agregarMiembro(){
    const nombre = document.getElementById("nombreMiembro").value; // Obtiene el nombre del nuevo miembro
    const tipo = document.getElementById("tipoMembresia").value; // Obtiene el tipo de membresía
    if (nombre && tipo){ // Si ambos campos tienen valor
        miembros.push({nombre, tipo}); // Agrega el nuevo miembro a la lista
        guardarMiembros(); // Guarda la lista actualizada
        mostrarMiembros(); // Muestra la lista actualizada
        document.getElementById("nombreMiembro").value = ""; // Limpia el campo de nombre
        document.getElementById("tipoMembresia").value = ""; // Limpia el campo de tipo
    }
}

// 4. Editar la información de un miembro **/
function editarMiembro(index){
    const nombre = miembros[index]; // Obtiene el miembro a editar
    const nuevoMiembro = prompt("Cual es el nuevo nombre?", nombre.nombre); // Pide el nuevo nombre
    const nuevoTipo = prompt("Cual es el nuevo tipo?", nombre.tipo); // Pide el nuevo tipo
    if (nuevoMiembro && nuevoTipo){ // Si ambos nuevos valores son válidos
        miembros[index].nombre = nuevoMiembro; // Actualiza el nombre
        miembros[index].tipo = nuevoTipo; // Actualiza el tipo
        guardarMiembros(); // Guarda la lista actualizada
        mostrarMiembros(); // Muestra la lista actualizada
    }
}

// 5. Eliminar un miembro **/
function eliminarMiembro(index){
    if (confirm("¿Estás seguro de eliminar este miembro?")){ // Pregunta de confirmación
        miembros.splice(index, 1); // Elimina el miembro de la lista
        guardarMiembros(); // Guarda la lista actualizada
        mostrarMiembros(); // Muestra la lista actualizada
    }
}

// Fase de clases

// 1. Crear una lista para almacenar las clases **/
let clases = JSON.parse(localStorage.getItem("clases")) || []; // Intenta obtener la lista de clases del almacenamiento local

// Función para guardar la lista de clases en el almacenamiento local
function guardarClases() {
    localStorage.setItem("clases", JSON.stringify(clases)); // Convierte la lista de clases a JSON y la guarda
}

// 2. Crear una función para mostrar las clases **/
function mostrarClases() {
    const lista = document.getElementById("listaClases"); // Obtiene el elemento donde se mostrarán las clases
    lista.innerHTML = ""; // Limpia la lista actual
    clases.forEach((clase, index) => { // Itera sobre cada clase
        const div = document.createElement("div"); // Crea un nuevo elemento div para cada clase
        div.className = "card"; // Asigna una clase "card" al div
        div.innerHTML = `
            <span> ${clase.nombre} - ${clase.instructora} - ${clase.estado} </span> // Muestra el nombre, instructora y estado de la clase
            <div class="actions"> // Contenedor para los botones de acción
                <button onclick="editarClase(${index})" title="Editar">📝</button> // Botón para editar
                <button onclick="eliminarInstructor(${index})" title="Eliminar">🧺</button> // Botón para eliminar
                <button onclick="cambiarEstado(${index})" title="Cambiar Estado">💱</button> // Botón para cambiar estado
            </div>
        `;
        lista.appendChild(div); // Añade el div a la lista de clases
    });
}

// 3. Crear una función para agregar una nueva clase **/
function agregarClase(){
    const nombre = document.getElementById("nombreClase").value; // Obtiene el nombre de la nueva clase
    const instructora = document.getElementById("nombreInstructura").value; // Obtiene el nombre de la instructora
    if (nombre && instructora){ // Si ambos campos tienen valor
        clases.push({nombre, instructora, estado: "Iniciando"}); // Agrega la nueva clase a la lista con estado inicial
        guardarClases(); // Guarda la lista actualizada
        mostrarClases(); // Muestra la lista actualizada
        document.getElementById("nombreClase").value = ""; // Limpia el campo de nombre
        document.getElementById("nombreInstructura").value = ""; // Limpia el campo de instructora
    }
}

// 4. Editar la información de una clase **/
function editarClase(index){
    const nombre = clases[index]; // Obtiene la clase a editar
    const nuevoNombre = prompt("Cual es el nuevo nombre?", nombre.nombre); // Pide el nuevo nombre
    const nuevoInstructor = prompt("Cual es el nuevo instructor?", nombre.instructora); // Pide el nuevo instructor
    if (nuevoNombre && nuevoInstructor){ // Si ambos nuevos valores son válidos
        clases[index].nombre = nuevoNombre; // Actualiza el nombre
        clases[index].instructora = nuevoInstructor; // Actualiza el instructor
        guardarClases(); // Guarda la lista actualizada
        mostrarClases(); // Muestra la lista actualizada
    }
}

// 5. Eliminar una clase **/
function eliminarInstructor(index){
    if (confirm("¿Estás seguro de eliminar esta clase?")){ // Pregunta de confirmación
        clases.splice(index, 1); // Elimina la clase de la lista
        guardarClases(); // Guarda la lista actualizada
        mostrarClases(); // Muestra la lista actualizada
    }
}

// Cambio de plan para los miembros **/
function cambiarPlan(index){
    const plan = ["Mensual", "Trimestral", "Anual"]; // Define los tipos de planes
    let estadoActual = miembros[index].tipo; // Obtiene el tipo actual del miembro
    let nuevoPlan = plan[(plan.indexOf(estadoActual) + 1) % plan.length]; // Cambia al siguiente plan
    miembros[index].tipo = nuevoPlan; // Actualiza el tipo del miembro
    guardarMiembros(); // Guarda la lista actualizada
    mostrarMiembros(); // Muestra la lista actualizada
}

// Cambio de estado para las clases **/
function cambiarEstado(index){
    const estados = ["Iniciando", "Finalizada"]; // Define los estados posibles
    let estadoActual = clases[index].estado; // Obtiene el estado actual de la clase
    let nuevoEstado = estados[(estados.indexOf(estadoActual) + 1) % estados.length]; // Cambia al siguiente estado
    clases[index].estado = nuevoEstado; // Actualiza el estado de la clase
    guardarClases(); // Guarda la lista actualizada
    mostrarClases(); // Muestra la lista actualizada
}
