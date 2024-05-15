<?php

class Task {
	private $id;
	private $name;
	private $status;

	public function __construct(int $id, String $name, String $status) {
		$this->id = $id;
		$this->name = $name;
		$this->status = $status;
	}

	public function getId()
	{
	    return $this->id;
	}

	public function setId($id)
	{
	    $this->id = $id;
	    return $this;
	}

	public function getName()
	{
	    return $this->name;
	}
	
	public function setName($name)
	{
	    $this->name = $name;
	    return $this;
	}

	public function getStatus()
	{
	    return $this->status;
	}
	
	public function setStatus($status)
	{
	    $this->status = $status;
	    return $this;
	}
}
