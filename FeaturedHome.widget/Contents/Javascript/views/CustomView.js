	var homeCounter = 0;
	var imageCounter = 0;
	var priceText;
	var agentName;
	var agentPhone;
	var urlAgent; 
var CustomView = new KONtx.Class({
 	ClassName: 'MyCustomView',
	
	Extends: KONtx.system.FullscreenView,
	   initView: function(){ 
        this.registerMessageCenterListenerCallback(this.onBroadcast); 
	var currentList;
	var homeImage;


    }, 
    onBroadcast: function(event){ 
        switch (event.payload.key) { 
            case "TimerTrigger": 
                var currentTime = new Date(event.payload.value);
		if(imageCounter==1)
		{
			if(homeCounter<currentList.length-1)
			{homeCounter=homeCounter+1;
			imageCounter=0}
			else{
			homeCounter=0;
			imageCounter=0;
			}			
		} 
		else{
		imageCounter=imageCounter+1;}
                homeImage.setSource("http:"+currentList[homeCounter].Media[imageCounter].file);
		priceText.setText('$'+currentList[homeCounter].listingPricing.listPrice);
		agentName.setText('Contact:'+currentList[homeCounter].agentOffice.ListAgent.FullName+'  '+currentList[homeCounter].agentOffice.ListAgent.OfficePhone);
		agentPhone.setText('Beds: '+currentList[homeCounter].structure.BedroomsTotal +'  Bath: '+currentList[homeCounter].structure.BathroomsTotal+ '  Sqft: '+currentList[homeCounter].structure.livingArea+'  Cars: '+currentList[homeCounter].structure.carsTotal);
	
                break;
            default:
                break;                  
        } 
    },

	createView: function() {
		// put your code here for creating the elements on the page
		this.controls.backButton = new KONtx.control.BackButton({
			label: $_('custom_view_backbutton'),
			guid: "back_button",
		}).appendTo(this);
		this.controls.label = new KONtx.element.Text({
			styles: {
				fontSize: KONtx.utility.scale(24),
				vAlign: "bottom",
				hAlign: "right",
				color: "#FFFFFF"
			},
		}).appendTo(this);
 		this.controls.home= new KONtx.element.Image({  
      			src: "image/960x540/logo.png",  
      			styles: {  
          			vAlign: "center",  
          			hAlign: "center",  
      			}  
  		}).appendTo(this); 
		this.controls.agent= new KONtx.element.Image({ 
			src:"image/960x540/transpBlack50.png",
			srcHeight:200,
			srcWidth:600, 
			hOffset:30,
      			styles: {  
          			vAlign: "bottom",  
          			hAlign: "center",
				width: 400, 
        			height:100,   
      			} 
  		}).appendTo(this); 
		this.controls.agent2= new KONtx.element.Image({ 
			src:"image/960x540/agent.jpg",
			srcHeight:40,
			srcWidth:40, 
			hOffset:30,
      			styles: {  
				width: 40, 
        			height: 40, 
				hOffset: 630, 
       	 			vOffset: 455  
      			} 
  		}).appendTo(this); 
		this.controls.price = new KONtx.element.Text({
    			wrap: true, 
    			truncation: 'end', 
    			styles: { 
        			fontSize: '22px', 
        			color: '#FFFFFF', 
        			textAlign: 'left', 
        			width: 584, 
        			height: 36, 
        			hOffset: 300, 
       	 			vOffset: 450 
    			} 
		}).appendTo(this);
	this.controls.agentName = new KONtx.element.Text({
    			wrap: true, 
    			truncation: 'end', 
    			styles: { 
        			fontSize: '14px', 
        			color: '#FFFFFF', 
        			textAlign: 'left', 
        			width: 584, 
        			height: 36, 
        			hOffset: 300, 
       	 			vOffset: 475 
    			} 
		}).appendTo(this);
	this.controls.agentPhone = new KONtx.element.Text({
    			wrap: true, 
    			truncation: 'end', 
    			styles: { 
        			fontSize: '14px', 
        			color: '#FFFFFF', 
        			textAlign: 'left', 
        			width: 584, 
        			height: 36, 
        			hOffset: 400, 
       	 			vOffset: 455 
    			} 
		}).appendTo(this)
	},
	
	updateView: function() {
		this.parent();
		homeImage=this.controls.home;
		agentImage=this.controls.agent2
		priceText=this.controls.price;
		agentName=this.controls.agentName;
		agentPhone=this.controls.agentPhone;
		
		var url = new URL();
		urlAgent = new URL();
		url.location = "https://api.solidearth.com/sandbox/v1/collections/baarmls/53103a23ee148706c42ebc01?format=json&access_token={ACCESS_TOKEN}";
		url.setRequestHeader("Content-type", "application/json" );
		url.fetchAsync(url_done);
		function url_done(url){
    			print("fetch complete");
    			print("response: " + url.response);
    			print("result: " + url.result);
			var json = JSON.parse(url.result);
			currentList=json;
			print("image: "+json[0].Media[0].file);
			homeImage.setSource("http:"+json[0].Media[0].file);
			priceText.setText('$'+json[0].listingPricing.listPrice);
			agentName.setText('Contact:'+json[0].agentOffice.ListAgent.FullName+'  '+json[0].agentOffice.ListAgent.OfficePhone);
			agentPhone.setText('Beds: '+json[0].structure.BedroomsTotal +'  Bath: '+json[0].structure.BathroomsTotal+ '  Sqft: '+json[0].structure.livingArea+'  Cars: '+json[0].structure.carsTotal);
			homeCounter=0;
			imageCounter=0;
		//urlAgent.location='https://api.solidearth.com/sandbox/v1/agent/baarmls/'+currentList[0].agentOffice.ListAgent.Key+'?format=json&api_key={API_KEY}'
		//urlAgent.setRequestHeader("Content-type", "application/json" );
		//urlAgent.fetchAsync(urlAgent_done);
		//function urlAgent_done(urlAgent){
    		//	print("fetch complete");
    		//	print("response: " + urlAgent.response);
    		//	print("result: " + urlAgent.result);
		//	var json = JSON.parse(urlAgent.result);
		//	print("image: "+json.listAgent.image);
		//	agentImage.setSource("http:"+json.listAgent.image);
		//};
		};		

	}
});
