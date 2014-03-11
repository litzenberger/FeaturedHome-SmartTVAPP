
include("Framework/kontx/1.0.0/src/all.js");

include("Javascript/views/MainView.js");
include("Javascript/views/CustomView.js");
include("Javascript/views/AnotherCustomView.js");
include("Javascript/views/AboutView.js");
include("Javascript/views/SnippetView.js");

var myTimer = new Timer(); 
myTimer.onTimerFired = function () {
    var beat = getRealTime()*1000; // getRealTime() is provided by the Yahoo Connected TV Platform
    KONtx.messages.store("TimerTrigger", beat); 
};
myTimer.interval = 20; // in seconds 
myTimer.ticking = true; // kick it off


KONtx.application.init({
	views: [
		{ id: 'view-Main', viewClass: MainView },
		{ id: 'view-Custom', viewClass: CustomView },
  // sample of having a view config data toggle
		{ id: 'view-About', viewClass: AboutView },
		{ id: 'snippet-1', viewClass: SnippetView, data: { message: "Greater Alabama MLS" } }, // sample of storing something for the bookmark to use
		{ id: 'snippet-2', viewClass: SnippetView, data: { message: "Weekly Feature" } }, // sample of storing something for the bookmark to use
	],
	defaultViewId: 'view-Main',
	settingsViewId: 'view-About',
});
