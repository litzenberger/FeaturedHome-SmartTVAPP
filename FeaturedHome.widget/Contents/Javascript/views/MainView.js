
var MainView = new KONtx.Class({
 	ClassName: 'MyCustomMainView',
	
	Extends: KONtx.system.SidebarView,
	
	createView: function() {
		// put your code here for creating the elements on the page
        this.controls.button1 = new KONtx.control.TextButton({
            label: $_('view_0'),
			guid: "button0",
            events: {
                onSelect: function(event) {
					KONtx.application.loadView('view-Custom',{ food: 343 });
                }
            }
        }).appendTo(this);
        
	},
	
	updateView: function() {
		// put your code here for updating the contents of the page
	}
});
