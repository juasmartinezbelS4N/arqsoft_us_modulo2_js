<?php
require_once "task.php";
require_once "cmd/create.php";
require_once "cmd/complete.php";
require_once "cmd/delete.php";
require_once "cmd/edit.php";

/**
 * Creating new tasks
 */
$task1 = new Task(1, "first task", "TO-DO");
$createTask1Command = new Create($task1);
$createTask1Command->execute();

$task2 = new Task(2, "second task", "TO-DO");
$createTask2Command = new Create($task2);
$createTask2Command->execute();

$task3 = new Task(3, "third task", "TO-DO");
$createTask3Command = new Create($task3);
$createTask3Command->execute();

/**
 * Complete the first task
 */
$task1Completed = $task1->setStatus("Completed");
$completedTask1Command = new Complete($task1Completed);
$completedTask1Command->execute();

/**
 * Editing the second task
 */
$task2Editing = $task2->setName("second task new name");
$editingTask2Command = new Edit($task2Editing);
$editingTask2Command->execute();

/**
 * Deleting third task
 */
$task3->setName("null");
$task3->setStatus("null");

$deletingTaskCommand = new Delete($task3);
$deletingTaskCommand->execute();
