/*
    Este c�digo define una funci�n llamada getProducts que realiza una solicitud a una API para obtener una lista de productos. A continuaci�n, te explico paso a paso c�mo funciona:
    Aqu� defines y exportas una funci�n as�ncrona llamada getProducts.
    La palabra clave async indica que la funci�n ser� as�ncrona, lo que significa que internamente utilizar� la palabra clave await para esperar a que se resuelvan las operaciones as�ncronas, como las solicitudes de red.
    export permite que la funci�n sea utilizada en otros archivos cuando se importe.
    Definir la URL de la API: Se guarda la URL base de la API en la constante urlApi.
    Llamada a la API: En la funci�n getProducts, se realiza una solicitud HTTP a la API usando fetch y se pasa la URL para obtener los productos (https://fakestoreapi.com/products).
    Esperar la respuesta: La funci�n espera hasta que la solicitud se complete y obtiene la respuesta.
    Convertir la respuesta a JSON: Una vez que se recibe la respuesta, se convierte el cuerpo de la respuesta a un objeto JSON utilizando response.json().
    Retornar los datos: Los datos convertidos se devuelven desde la funci�n getProducts para que puedan ser utilizados en otros componentes o funciones.
*/


const urlApi = 'https://fakestoreapi.com';

export const getProducts = async () => {
    const response = await fetch(`${urlApi}/products`)
    const data = await response.json();
    return data 

}