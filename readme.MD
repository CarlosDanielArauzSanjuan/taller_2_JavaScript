# Taller veterinaria 2 - JavaScript

Implementar una aplicación en **JavaScript** que permita gestionar una veterinaria.

### **Requisitos:**

1. Las mascotas deben tener almenos las siguientes propiedades:
    - Nombre
    - Especie (Perro, Gato, etc.)
    - Edad
    - Peso
    - Estado de salud (Sano, Enfermo, En tratamiento)
2. **Implementar un menú interactivo con `prompt` y `alert`** que permita al usuario:
    1. Registrar una nueva mascota.
    2. Listar todas las mascotas registradas.
    3. Buscar una mascota por nombre.
    4. Actualizar el estado de salud de una mascota.
    5. Eliminar una mascota por nombre.
    6. Salir del programa.

### **Nuevas funcionalidades con asincronía (con callbacks):**

🔹 **Registro de mascota con retraso** (simulando una validación con `setTimeout`).

🔹 **Búsqueda de mascota con retardo** (simulando el tiempo de consulta en una base de datos).

🔹 **Actualización de estado de salud con espera** (simulando que el veterinario tarda en actualizar los registros).