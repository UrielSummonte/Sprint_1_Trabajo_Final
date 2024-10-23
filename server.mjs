import express from 'express';
import { obtenerTodosLosSuperheroes, obtenerSuperheroePorIdController, agregarNuevoSuperheroe, actualizarSuperheroePorId, eliminarSupeheroePorId, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30YConFiltrosController } from './controllers/superheroesController.mjs';

const app = express();
app.use(express.json());

const PORT = 3005;

// Rutas
app.get('/superheroes', obtenerTodosLosSuperheroes);
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.post('/superheroes', agregarNuevoSuperheroe);
app.put('/superheroes/:id', actualizarSuperheroePorId);
app.delete('/superheroes/:id', eliminarSupeheroePorId);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/filtros/avanzados', obtenerSuperheroesMayoresDe30YConFiltrosController);

// Levantar el servidor en el puerto 3005
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);    
})