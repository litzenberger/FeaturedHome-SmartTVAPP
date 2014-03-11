
var AboutView = new KONtx.Class({
 	ClassName: 'MyCustomAboutView',
	
	Extends: KONtx.views.AboutBox,
	
	config: {	
		BackButtonTitle: $_('settings'),
		pages: [
			{
                id: 'about-copyright',
                name: $_('copyright_policy'),
                srcString: $_('legal_copyright_policy_msg')
            },
            {
                id: 'about-tos',
                name: $_('tos'),
                srcString: $_('legal_tos_msg')
            },
            {
                id: 'about-privacy',
                name: $_('privacy_policy'),
                srcString: $_('legal_privacy_policy_msg')
            }
		],
	}
});
  
 
