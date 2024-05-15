<?php
require_once "iCommand.php";
require_once "audit.php";

class Create implements Command {

	private $task;

	function __construct(Task $task) {
		$this->task = $task;
	}

	public function execute() {
		echo "task " . $this->task->getName() . " created \n";

		$audit = new Audit($this->task);
		$audit->execute();
	}
}
