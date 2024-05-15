<?php

require_once 'tarea.php';
require_once 'comando_crear_tarea.php';
require_once 'comando_editar_tarea.php';
require_once 'comando_eliminar_tarea.php';
require_once 'comando_completar_tarea.php';
require_once 'invocador.php';

// Crear tareas
$tarea1 = new Tarea("Tarea 1", "Descripción de la tarea 1", "Pendiente");
$tarea2 = new Tarea("Tarea Diplomado", "Descripción de la tarea 2", "En progreso");

// Crear comandos
$comandoCrearTarea1 = new CrearTarea($tarea1);

$comandoCrearTarea1->ejecutar();

$comandoEditarTarea2 = new EditarTarea($tarea2, new Tarea("Tarea 2 Modificada", "Descripción modificada", "Pendiente"));
$comandoEditarTarea2->ejecutar();
$comandoEditarTarea2->revertir();

$comandoEliminarTarea1 = new EliminarTarea($tarea1);
$comandoEliminarTarea1->ejecutar();

$comandoCompletarTarea2 = new CompletarTarea($tarea2);
$comandoCompletarTarea2->ejecutar();

// Invocador
$invocador = new Invocador();
