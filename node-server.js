const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let tareas = [];

app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.post('/agregarTarea', (req, res) => {
  const { indicador, descripcion, estado } = req.body;
  const nuevaTarea = { indicador, descripcion, estado };
  tareas.push(nuevaTarea);
  res.json({ success: true, mensaje: 'Tarea agregada correctamente' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
