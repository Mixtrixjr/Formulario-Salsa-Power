const fs = require('fs');

exports.handler = async function (event, context) {
  // Parsear los datos del formulario
  const data = JSON.parse(event.body);
  const { nombre, email, edad } = data;

  // Crear la entrada en formato CSV
  const csvData = `${nombre},${email},${edad}\n`;

  // Guardar los datos en un archivo CSV
  fs.appendFile('datos_salsa.csv', csvData, (err) => {
    if (err) {
      console.error('Error al guardar los datos en el archivo:', err);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error al guardar los datos' }),
      };
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Datos guardados correctamente' }),
  };
};
