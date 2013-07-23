tt_content.gridelements_pi1.10 = < lib.stdheader

tt_content.gridelements_pi1.20.10.setup {
	1 < lib.gridelements.defaultGridSetup
	1 {
		columns {

			10 < .default
			10.wrap = <div class="col col1">|</div>

			20 < .default
			20.wrap = <div class="col col2">|</div>
			
		}
		wrap = <div class="columns-2cols">|</div>
	}
}

tt_content.gridelements_pi1.20.10.setup {
	2 < lib.gridelements.defaultGridSetup
	2 {
		columns {

			10 < .default
			10.wrap = <div class="col col1">|</div>

			20 < .default
			20.wrap = <div class="col col2">|</div>
			
			30 < .default
			30.wrap = <div class="col col3">|</div>
			
		}
		wrap = <div class="columns-3cols">|</div>
	}
}