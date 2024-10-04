const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para recibir los datos del formulario y guardarlos en un archivo CSV
app.post('/save-data', (req, res) => {
  const { nombre, email, edad } = req.body;

  // Crear el contenido CSV
  const csvData = `${nombre},${email},${edad}\n`;

  // Guardar los datos en un archivo CSV
  fs.appendFile('datos_salsa.csv', csvData, (err) => {
    if (err) {
      console.error('Error al guardar los datos en el archivo:', err);
      return res.status(500).json({ message: 'Error al guardar los datos' });
    }
    res.status(200).json({ message: 'Datos guardados correctamente' });
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


  