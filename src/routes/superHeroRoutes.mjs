import express from 'express';
import { 
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller, 
    agregarSuperheroeController, 
    actualizarSuperheroeController,
    eliminarSuperheroePorIdController,
    eliminarSuperheroePorNombreController,
    agregarController,
    editarController,
    editarHeroeController
    } from '../controllers/superheroesController.mjs';
import { heroeValidation } from '../validators/heroeValidator.mjs'
import { handleValidationErrors } from "../middlewares/errorMiddleware.mjs";

const router = express.Router();

//Rutas
router.get('/dashboard', obtenerTodosLosSuperheroesController);
router.get('/heroes/buscar/id/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.post('/heroes/heroe-nuevo', heroeValidation(), handleValidationErrors, agregarSuperheroeController);
router.put('/heroes/actualizar/:id', heroeValidation(), handleValidationErrors, actualizarSuperheroeController);
router.delete('/heroes/eliminar/:id', eliminarSuperheroePorIdController);
router.delete('/heroes/eliminar/:nombre', eliminarSuperheroePorNombreController);

router.get('/heroes/agregar', agregarController);
router.get('/heroes/editar', editarController);
router.put('/heroes/:id/editar', editarHeroeController);
export default router;
