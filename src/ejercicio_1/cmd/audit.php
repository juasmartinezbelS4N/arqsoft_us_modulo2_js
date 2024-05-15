<?php

class Audit implements Command {
	
	private $task;

	function __construct(Task $task) {
		$this->task = $task;
	}

	public function execute() {
		echo "saving info in audit log about task " . $this->task->getName() . " and new status " . $this->task->getStatus() . " \n";
	}
}