<?php
	include_once("source/world_tour_event_system.inc");

	class WorldTourEvent extends WorldTourEventSystem {

		public function show() {

			$this->checkFirstLogin();  

            $this->begin();

            echo '<title>World Tour Event</title>';

            $this->middle();

            // Content

            $this->end();
        }
    }

    // Grand Zodiac Event
    $grand_zodiac_event = new WorldTourEvent();

    $grand_zodiac_event->show();
?>