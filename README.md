# Module: cssswitch
MagicMirror
Module for changing the time of the css. 
It is possible to set one css for the day and one for the night.

## Installation

* Clone this repo into `~/MagicMirror/modules` directory.
* Configure your `~/MagicMirror/config/config.js`:

Entry in the config:


		{
			module: "cssswitch",
			    config: {
	                         evening_start: 21,        
                                 evening_stop: 6,
                  }  
		},


the classification is explained in the sample css.
