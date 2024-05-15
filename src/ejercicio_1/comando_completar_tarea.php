<?php

require_once 'comando.php';
require_once 'tarea.php';

class CompletarTarea implements Comando {
    private $tarea;

    public function __construct(Tarea $tarea) {
        $this->tarea = $tarea;
    }

    public function ejecutar() {
        // Marcar la tarea como completada en la base de datos o sistema de almacenamiento
        echo "Completando tarea: " . $this->tarea->getNombre() . "<br>";
    }

    public function revertir() {
        // Marcar la tarea como pendiente en la base de datos o sistema de almacenamiento
        echo "Revertir completado de tarea: " . $this->tarea->getNombre() . "<br>";
    }
}
