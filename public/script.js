//Script para consumir el data.json

//Se espera a que el DOM este cargado (todo) antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    
    //Se usa fetch para cargar el JSON
    fetch('./data.json')

        .then(response => {
            //Se verifica si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');   //Si no es exitosa se mansa el error
            }
            return response.json();   //Se parsea el JSON a un objeto JavaScript
        })

        .then(personajes => {
            //Se trae el div con su id para mostrar los personajes
            const container = document.getElementById('container');

            //Por cada personaje del JSON...
            personajes.forEach(personaje => {
                
                const card = document.createElement('div');   //Se crea un nuevo div
                card.classList.add('card');   //Y se le asigna la clase card

                const nombre = document.createElement('h3');   //Se crea un elemento h3
                nombre.textContent = personaje.nombre;   //Se le asigna el nombre del personaje

                const casa = document.createElement('p');   //Se crea un elemento p
                casa.textContent = personaje.casa;   //Se le asigna la casa del personaje
                casa.classList.add('casa');   //Se le asigna la clase casa, para darle estilo despues

                //Se añaden el nombre y la casa al div de la tarjeta
                card.appendChild(nombre);
                card.appendChild(casa);

                //Se añade la tarjeta al contenedor principal
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Hubo un problema con la operación fetch:', error);   //Si hay un error se muestra en la consola
        });
});
