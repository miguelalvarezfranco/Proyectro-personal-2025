/*
    Este código define una función llamada getProducts que realiza una solicitud a una API para obtener una lista de productos. A continuación, te explico paso a paso cómo funciona:
    Aquí defines y exportas una función asíncrona llamada getProducts.
    La palabra clave async indica que la función será asíncrona, lo que significa que internamente utilizará la palabra clave await para esperar a que se resuelvan las operaciones asíncronas, como las solicitudes de red.
    export permite que la función sea utilizada en otros archivos cuando se importe.
    Definir la URL de la API: Se guarda la URL base de la API en la constante urlApi.
    Llamada a la API: En la función getProducts, se realiza una solicitud HTTP a la API usando fetch y se pasa la URL para obtener los productos (https://fakestoreapi.com/products).
    Esperar la respuesta: La función espera hasta que la solicitud se complete y obtiene la respuesta.
    Convertir la respuesta a JSON: Una vez que se recibe la respuesta, se convierte el cuerpo de la respuesta a un objeto JSON utilizando response.json().
    Retornar los datos: Los datos convertidos se devuelven desde la función getProducts para que puedan ser utilizados en otros componentes o funciones.
*/


const urlApi = 'https://fakestoreapi.com';

export const getProducts = async () => {
    const response = await fetch(`${urlApi}/products`)
    const data = await response.json();
    return data 

}