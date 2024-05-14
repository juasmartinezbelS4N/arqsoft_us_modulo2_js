<?php

interface Comando {
    public function ejecutar();
    public function revertir();
}
