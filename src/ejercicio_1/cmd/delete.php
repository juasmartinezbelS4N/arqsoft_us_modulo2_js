<?php
require_once "iCommand.php";
require_once "audit.php";

class Delete implements Command {

	private $task;

	function __construct(Task $task) {
		$this->task = $task;
	}

	public function execute() {
		echo "task " . $this->task->getName() . " deleted \n";

		$audit = new Audit($this->task);
		$audit->execute();
	}
}
