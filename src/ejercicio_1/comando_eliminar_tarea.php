<?php

require_once 'comando.php';
require_once 'tarea.php';

class EliminarTarea implements Comando {
    private $tarea;

    public function __construct(Tarea $tarea) {
        $this->tarea = $tarea;
    }

    public function ejecutar() {
        // Eliminar la tarea de la base de datos o sistema de almacenamiento
        echo "Eliminando tarea: " . $this->tarea->getNombre() . "<br>";
    }

    public function revertir() {
        // Restaurar la tarea eliminada en la base de datos o sistema de almacenamiento
        echo "Revertir eliminación de tarea: " . $this->tarea->getNombre() . "<br>";
    }
}
