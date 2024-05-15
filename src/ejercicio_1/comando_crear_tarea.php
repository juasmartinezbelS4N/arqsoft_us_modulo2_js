<?php

require_once 'comando.php';
require_once 'tarea.php';

class CrearTarea implements Comando {
    private $tarea;

    public function __construct(Tarea $tarea) {
        $this->tarea = $tarea;
    }

    public function ejecutar() {
        // Guardar la tarea en la base de datos o sistema de almacenamiento
        echo "Creando tarea: " . $this->tarea->getNombre() . "<br>";
    }

    public function revertir() {
        // Eliminar la tarea de la base de datos o sistema de almacenamiento
        echo "Revertir creación de tarea: " . $this->tarea->getNombre() . "<br>";
    }
}
