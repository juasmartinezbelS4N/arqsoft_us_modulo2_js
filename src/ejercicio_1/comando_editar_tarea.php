<?php

require_once 'comando.php';
require_once 'tarea.php';

class EditarTarea implements Comando {
    private $tareaOriginal;
    private $tareaModificada;

    public function __construct(Tarea $tareaOriginal, Tarea $tareaModificada) {
        $this->tareaOriginal = $tareaOriginal;
        $this->tareaModificada = $tareaModificada;
    }

    public function ejecutar() {
        // Actualizar la tarea en la base de datos o sistema de almacenamiento
        echo "Editando tarea: " . $this->tareaOriginal->getNombre() . " a " . $this->tareaModificada->getNombre() . "<br>";
    }

    public function revertir() {
        // Restaurar la tarea original en la base de datos o sistema de almacenamiento
        echo "Revertir edición de tarea: " . $this->tareaModificada->getNombre() . " a " . $this->tareaOriginal->getNombre() . "<br>";
    }
}
