
var SnippetView = new KONtx.Class({
 	ClassName: 'MyCustomSnippetView',
	
	Extends: KONtx.system.SnippetView,
	
	config: {
		counterPrefix: "Weekly Featured "
	},
	
	initView: function() {
		this.selected_count = 0;
	},
	
	createView: function() {
		this.controls.apptitle = new KONtx.element.Text({
            label: 'Solid Earth',
            styles: {
                hOffset: KONtx.utility.scale(10),
                vOffset: KONtx.utility.scale(16),
                fontSize: KONtx.utility.scale(12),
                color: '#AAAAAA'
            }
        }).appendTo(this);
        
        this.controls.message = new KONtx.element.Text({
            label: this.config.data.message,
            styles: {
                hAlign: 'center',
                vAlign: 'center',
                fontSize: KONtx.utility.scale(16),
                color: '#FFFFFF'
            }
        }).appendTo(this);
		
		this.controls.counter = new KONtx.element.Text({
            label: this.config.counterPrefix + this.selected_count,
            styles: {
                hAlign: 'center',
                vOffset: KONtx.utility.scale(55),
                fontSize:  KONtx.utility.scale(12),
                color: '#FFFFFF'
            }
        }).appendTo(this);
	},
	
	updateView: function() {
		this.selected_count++;
		//this.controls.counter.setText(this.config.counterPrefix + this.selected_count);
	}
});
