/* Magic Mirror
 * Module: MMM-CSSswitch
 *
 * By Piranha
 * MIT Licensed.
 */


Module.register("MMM-CSSswitch", {
      
    defaults: {
	    evening_start: 12,
        evening_stop: 6,
    },    

    //Do I still need to load the custom.css?
    getStyles: function() {
        return ["MMM-CSSswitch.css"];
    },

    // Define start sequence.
    start: function() {
	Log.info("Starting module: " + this.name);



	// Schedule update interval.
	var self = this;
        self.updatecssswitch();
	setInterval(function() {
		self.updatecssswitch();
	}, 600000);
    },
    
    updatecssswitch: function() {
        var currentTime = new Date().getHours();
        var body = document.querySelector('evening');

        if ( currentTime >= this.config.evening_start && currentTime <= this.config.evening_stop  ||
           ((currentTime >= this.config.evening_start || currentTime <= this.config.evening_stop) && 
            this.config.evening_start > this.config.evening_stop) ){
            document.body.className = "evening";       
        }

        else {
             document.body.className = "morning";       
        }
    }
});