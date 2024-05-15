<?php
require_once "command.php";
require_once "audit.php";

class Edit implements Command {

	private $task;

	function __construct(Task $task) {
		$this->task = $task;
	}

	public function execute() {
		echo "task " . $this->task->getName() . " edited \n";

		$audit = new Audit($this->task);
		$audit->execute();
	}
}
