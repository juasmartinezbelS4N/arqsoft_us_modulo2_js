<?php

class Tarea {
    private $nombre;
    private $descripcion;
    private $estado;

    public function __construct($nombre, $descripcion, $estado) {
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->estado = $estado;
    }

    // Getters y setters para los atributos

    public function getNombre() {
        return $this->nombre;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function getDescripcion() {
        return $this->descripcion;
    }

    public function setDescripcion($descripcion) {
        $this->descripcion = $descripcion;
    }

    public function getEstado() {
        return $this->descripcion;
    }

    public function setEstado($estado) {
        $this->estado = $estado;
    }
}

?>