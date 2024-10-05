const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  try {
    // Verificar el método POST
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Método no permitido' }),
      };
    }

    // Parsear los datos del cuerpo del POST
    const { nombre, email, edad } = JSON.parse(event.body);

    // Crear la ruta donde se guardarán los datos (puedes cambiar esto)
    const filePath = path.join(__dirname, 'datos_salsa.csv');

    // Formatear los datos para CSV
    const csvData = `${nombre},${email},${edad}\n`;

    // Guardar los datos en un archivo CSV
    fs.appendFileSync(filePath, csvData);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Datos guardados correctamente' }),
    };
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error al guardar los datos' }),
    };
  }
};
