<?php

require_once 'comando.php';

class Invocador {
    private $historialComandos = [];

    public function agregarComando(Comando $comando) {
        $this->historialComandos[] = $comando;
    }

    public function ejecutarComando(Comando $comando) {
        $comando->ejecutar();
        array_push($this->historialComandos, $comando);
    }

    public function revertirUltimoComando() {
        if (empty($this->historialComandos)) {
            echo "No hay comandos para revertir\n";
            return;
        }

        $ultimoComando = array_pop($this->historialComandos);
        $ultimoComando->revertir();
    }
}
