Game.preloader=function(game){
	
};
var fx;
var numbersense1PrevDownld = false;
var numbersense2PrevDownld = false;
var numbersense3PrevDownld = false;

var measurement1PrevDownld = false;
var measurement2PrevDownld = false;
var measurement3PrevDownld = false;

var numberOPeration1PrevDownld = false;
var numberOPeration2PrevDownld = false;
var numberOPeration3PrevDownld = false;

Game.preloader.prototype={


	checkPreviouslyDownloaded:function()
	{
		if(this.checkDirExistsorNot(constant.checkNumberSense1Dir))
		{
			numbersense1PrevDownld = true;
		}
		else
		{
			numbersense1PrevDownld = false;
		}

		if(this.checkDirExistsorNot(constant.checkMeasurement1Dir))
		{
			measurement1PrevDownld = true;
		}
		else
		{
			measurement1PrevDownld = false;
		}

		if(this.checkDirExistsorNot(constant.checkNumberOperation1Dir))
		{
			numberOPeration1PrevDownld = true;
		}
		else
		{
			numberOPeration1PrevDownld = false;
		}
	},

	checkDirExistsorNot:function(dirPath,callback)
	{
		//alert(dirPath);
		window.resolveLocalFileSystemURL(dirPath, 
			function(){
				//alert("scucess");
				callback();
				return true;
			}, 
			function(){
				//alert("failure");
				return false;
			});
	},
	
	
	preload:function(){

		_this = this;
		
		/*_this.preloadBar = _this.add.sprite(_this.world.centerX,_this.world.centerY,'CommonAssets','progressBar');
		_this.preloadBar.anchor.setTo(0.5,0.5);
		_this.time.advanceTiming=true;
		_this.load.setPreloadSprite(_this.preloadBar);*/

		
		//_this.time.advanceTiming=true;
		//_this.load.setPreloadSprite(_this.preloadBar);
		
		//this.checkPreviouslyDownloaded();

        _this.loadingSound = document.createElement('audio');
        _this.loadingSoundSrc = document.createElement('source');
        _this.loadingSoundSrc.setAttribute("src", "sounds/LoadingSound.mp3");
        _this.loadingSound.appendChild(_this.loadingSoundSrc);
        _this.loadingSound.loop = true;
        _this.loadingSound.play();

		_this.once = true;

		this.generateLoadingAnimations(this.rnd.integerInRange(1, 6));


		var preloadGrp = _this.add.group();
		_this.preloadBarOutline = _this.add.sprite(_this.world.centerX,_this.world.centerY,'prgressbarOutLine');
		//_this.preloadBarOutline.anchor.setTo(0.5,0.5);
		_this.preloadBars = _this.add.sprite(_this.world.centerX,_this.world.centerY,'preloadBar');

		
		//_this.preloadBar.anchor.setTo(0.5,0.5);
		_this.time.advanceTiming=true;
		_this.load.setPreloadSprite(_this.preloadBars);




		preloadGrp.add(_this.preloadBarOutline);
		preloadGrp.add(_this.preloadBars);

		preloadGrp.x -= 105;
		preloadGrp.y += 150;





		this.loadjscssfile("js/appconstants.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/gameModeSelectionScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/gradeSelectionScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/practice.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/challengeModeGgradeSelectionScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/selectgrade1MicroConceptScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/selectgrade2MicroConceptScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/selectgrade3MicroConceptScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/selectgrade4MicroConceptScreen.js", "js");

		this.loadjscssfile("js/gradeSelectionScreenJS/grade1NumberSenseScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/grade1NumberOperationScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/grade1MeasurementScreen.js", "js");

		this.loadjscssfile("js/gradeSelectionScreenJS/grade2NumberSenseScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/grade2NumberOperationScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/grade2MeasurementScreen.js", "js");

		this.loadjscssfile("js/gradeSelectionScreenJS/grade3NumberSenseScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/grade3NumberOperationScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/grade3MeasurementScreen.js", "js");

		this.loadjscssfile("js/gradeSelectionScreenJS/grade4MeasurementScreen.js", "js");

		/*this.loadjscssfile("js/gradeSelectionScreenJS/grade1levelSelectionScreen.js", "js");
		this.loadjscssfile("js/gradeSelectionScreenJS/grade2levelSelectionScreen.js", "js");
		this.loadjscssfile("js/gradeSelectionScreenJS/grade3levelSelectionScreen.js", "js");
		this.loadjscssfile("js/gradeSelectionScreenJS/grade4levelSelectionScreen.js", "js");*/

		this.loadjscssfile("js/gradejs/1.1A/level1.js", "js");
		this.loadjscssfile("js/gradejs/1.1A/score.js", "js");

		this.loadjscssfile("js/gradejs/1.1B/level1.js", "js");
		this.loadjscssfile("js/gradejs/1.1B/score.js", "js");

		this.loadjscssfile("js/gradejs/1.3A/level1.js", "js");
		this.loadjscssfile("js/gradejs/1.3A/score.js", "js");

		this.loadjscssfile("js/gradejs/1.3B/level1.js", "js");
		this.loadjscssfile("js/gradejs/1.3B/score.js", "js");

		this.loadjscssfile("js/gradejs/1.4/main.js", "js");
		this.loadjscssfile("js/gradejs/1.4/levelFirstScene.js", "js");
		this.loadjscssfile("js/gradejs/1.4/levelSecondScene.js", "js");
		this.loadjscssfile("js/gradejs/1.4/levelThirdScene.js", "js");
		this.loadjscssfile("js/gradejs/1.4/score.js", "js");

		this.loadjscssfile("js/gradejs/2.1A/level1.js", "js");
		this.loadjscssfile("js/gradejs/2.1A/score.js", "js");

		this.loadjscssfile("js/gradejs/2.1B/level1.js", "js");
		this.loadjscssfile("js/gradejs/2.1B/score.js", "js");

		this.loadjscssfile("js/gradejs/2.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/2.2/score.js", "js");

		this.loadjscssfile("js/gradejs/2.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/2.3/score.js", "js");

		this.loadjscssfile("js/gradejs/3.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/3.1/score.js", "js");

		this.loadjscssfile("js/gradejs/3.2A/level1.js", "js");
		this.loadjscssfile("js/gradejs/3.2A/score.js", "js");

		this.loadjscssfile("js/gradejs/3.2B/level1.js", "js");
		this.loadjscssfile("js/gradejs/3.2B/score.js", "js");

		this.loadjscssfile("js/gradejs/3.2C/level1.js", "js");
		this.loadjscssfile("js/gradejs/3.2C/score.js", "js");

		this.loadjscssfile("js/gradejs/3.2D/level1.js", "js");
		this.loadjscssfile("js/gradejs/3.2D/score.js", "js");

		this.loadjscssfile("js/gradejs/1.2A/level1.js", "js");
		this.loadjscssfile("js/gradejs/1.2A/score.js", "js");

		this.loadjscssfile("js/gradejs/1.2B/level1.js", "js");
		this.loadjscssfile("js/gradejs/1.2B/score.js", "js");

		this.loadjscssfile("js/gradejs/1.2C/level1.js", "js");
		this.loadjscssfile("js/gradejs/1.2C/score.js", "js");

		this.loadjscssfile("js/gradejs/2.4A/level1.js", "js");
		this.loadjscssfile("js/gradejs/2.4A/score.js", "js");

		this.loadjscssfile("js/gradejs/2.4B/level1.js", "js");
		this.loadjscssfile("js/gradejs/2.4B/score.js", "js");

		this.loadjscssfile("js/gradejs/3.3A/level1.js", "js");
		this.loadjscssfile("js/gradejs/3.3A/score.js", "js");

		this.loadjscssfile("js/gradejs/3.3B1/level1.js", "js");
		this.loadjscssfile("js/gradejs/3.3B1/score.js", "js");

		this.loadjscssfile("js/gradejs/3.3B2/level1.js", "js");
		this.loadjscssfile("js/gradejs/3.3B2/score.js", "js");

		this.loadjscssfile("js/gradejs/4.1A/level1.js", "js");
		this.loadjscssfile("js/gradejs/4.1A/score.js", "js");

		this.loadjscssfile("js/gradejs/4.1B/level1.js", "js");
		this.loadjscssfile("js/gradejs/4.1B/score.js", "js");

		this.loadjscssfile("js/gradejs/4.1C/level1.js", "js");
		this.loadjscssfile("js/gradejs/4.1C/score.js", "js");

		this.loadjscssfile("js/gradejs/4.2A/levelA.js", "js");
		this.loadjscssfile("js/gradejs/4.2A/score.js", "js");

		this.loadjscssfile("js/gradejs/4.2B/levelA.js", "js");
		this.loadjscssfile("js/gradejs/4.2B/score.js", "js");

		this.loadjscssfile("js/gradejs/4.2C/levelA.js", "js");
		this.loadjscssfile("js/gradejs/4.2C/score.js", "js");

		this.loadjscssfile("js/gradejs/4.3A/level1.js", "js");
		this.loadjscssfile("js/gradejs/4.3A/score.js", "js");

		this.loadjscssfile("js/gradejs/4.3B/level1.js", "js");
		this.loadjscssfile("js/gradejs/4.3B/score.js", "js");

		this.loadjscssfile("js/gradejs/4.3C/level1.js", "js");
		this.loadjscssfile("js/gradejs/4.3C/score.js", "js");

		this.loadjscssfile("js/gradejs/5.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/5.1/score.js", "js");

		this.loadjscssfile("js/gradejs/5.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/5.2/level2.js", "js");
		this.loadjscssfile("js/gradejs/5.2/score.js", "js");

		this.loadjscssfile("js/gradejs/5.4/level1.js", "js");
		this.loadjscssfile("js/gradejs/5.4/level2.js", "js");
		this.loadjscssfile("js/gradejs/5.4/score.js", "js");

		this.loadjscssfile("js/gradejs/6.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/6.1/score.js", "js");

		this.loadjscssfile("js/gradejs/6.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/6.2/score.js", "js");

		this.loadjscssfile("js/gradejs/7.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/7.1/score.js", "js");

		this.loadjscssfile("js/gradejs/7.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/7.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/1.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/1.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/1.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/1.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/1.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/1.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/1.4/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/1.4/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/1.5/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/1.5/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/1.6/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/1.6/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/1.7/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/1.7/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.1.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.1.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.1.1a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.1.1a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.1.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.1.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.1.2a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.1.2a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.1.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.1.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.1.3a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.1.3a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.2.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.2.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.2.1a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.2.1a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.2.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.2.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.2.2a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.2.2a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.2.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.2.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.2.3a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.2.3a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.3.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.3.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.3.1a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.3.1a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.3.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.3.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.3.2a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.3.2a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.3.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.3.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.3.3a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.3.3a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.4.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.4.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.4.1a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.4.1a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.4.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.4.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.4.2a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.4.2a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.4.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.4.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.4.3a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.4.3a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.5.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.5.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.5.1a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.5.1a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.5.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.5.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.5.2a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.5.2a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.5.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.5.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.5.3a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.5.3a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.6.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.6.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.6.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.6.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.6.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.6.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.7.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.7.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/2.7.3a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/2.7.3a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/3.1.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/3.1.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/3.1.1a/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/3.1.1a/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/3.1.1b/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/3.1.1b/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/3.1.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/3.1.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/3.2.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/3.2.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/3.2.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/3.2.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.1.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.1.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.2.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.2.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.2.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.2.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.3.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.3.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.4.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.4.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.4.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.4.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.4.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.4.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.5.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.5.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.5.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.5.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.5.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.5.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.6.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.6.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/4.6.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/4.6.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/5.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/5.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/6.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/6.1/score.js", "js");

		//this.loadjscssfile("js/gradejs/unity/7.1.1/7_1_1demoVideo.js", "js");
		this.loadjscssfile("js/gradejs/unity/7.1.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/7.1.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/7.1.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/7.1.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/7.1.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/7.1.3/score.js", "js");

		//this.loadjscssfile("js/gradejs/unity/7.2.1/7_2_1demoVideo.js", "js");
		this.loadjscssfile("js/gradejs/unity/7.2.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/7.2.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/7.2.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/7.2.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/7.2.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/7.2.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/8.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/8.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/10.1.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/10.1.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/10.1.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/10.1.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/10.1.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/10.1.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/10.2.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/10.2.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/10.2.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/10.2.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/10.2.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/10.2.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/11.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/11.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/11.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/11.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/12.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/12.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/12.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/12.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/12.3.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/12.3.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/12.3.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/12.3.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/12.3.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/12.3.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/13.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/13.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/14.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/14.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/14.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/14.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/15.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/15.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/16.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/16.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/16.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/16.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/16.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/16.3/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/17.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/17.2/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/17.3/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/17.3/score.js", "js");


		//// ***************************** loading the video files *****************************************//
		this.load.video('demo7_1_1',window.baseUrl+'assets/demoVideos/demo.mp4');
		this.load.video('demo',window.baseUrl+'assets/demoVideos/demo.mp4');
		
		_this.addgradeSelectionAssets();
		_this.addgrade1SelectionAssets();
		_this.addgrade2SelectionAssets();
		_this.addgrade3SelectionAssets();
		_this.addgrade4SelectionAssets();
		
		_this.loadCommonAssets();


		
		
		_this.addgame1_1AAssets();
		_this.addgame2_1AAssets();
		_this.addgame2_1BAssets();
		_this.addgame2_2Assets();
		_this.addgame2_3Assets();
		_this.addgame3_1Assets();
		_this.addgame3_2AAssets();
		
		_this.addgame1_1BAssets();
		_this.addgame1_2AAssets();
		_this.addgame1_2BAssets();
		_this.addgame1_3AAssets();
		_this.addgame1_3BAssets();
		_this.addgame1_4Assets();
		_this.addgame2_4AAssets();
		_this.addgame3_2BAssets();
		_this.addgame3_2CAssets();
		_this.addgame3_3AAssets();
		_this.addgame3_3B1Assets();
		_this.addgame3_3B2Assets();
		
		_this.addgame4_1AAssets();
		_this.addgame4_2AAssets();
		_this.addgame4_2BAssets();
		_this.addgame4_2CAssets();
		_this.addgame4_3AAssets();

		_this.addgame5_1Assets();

		_this.addgame5_2Assets();
		_this.addgame5_4Assets();

		_this.addgame6_1Assets();
		_this.addgame6_2Assets();

		_this.addgame7_1Assets();
		_this.addgame7_2Assets();

		//Unity games...
		_this.addunitygame1_1Assets();
		_this.addunitygame1_2Assets();
		_this.addunitygame1_3Assets();
		_this.addunitygame1_4Assets();
		_this.addunitygame1_5Assets();
		_this.addunitygame1_6Assets();
		_this.addunitygame1_7Assets();

		
		_this.addunitygame2_1_1Assets();
		/*_this.addunitygame2_1_2Assets1();
		_this.addunitygame2_1_3Assets();


		_this.addunitygame2_1_1aAssets();
		_this.addunitygame2_2_1aAssets();
		_this.addunitygame2_3_1aAssets();
		_this.addunitygame2_4_1aAssets1();
		_this.addunitygame2_5_1aAssets();

		_this.addunitygame2_1_2aAssets1();
		_this.addunitygame2_2_2aAssets1();
		_this.addunitygame2_3_2aAssets1();
		_this.addunitygame2_4_2aAssets();
		_this.addunitygame2_5_2aAssets();

		_this.addunitygame2_1_3aAssets();
		_this.addunitygame2_2_3aAssets();
		_this.addunitygame2_3_3aAssets();
		_this.addunitygame2_4_3aAssets();
		_this.addunitygame2_5_3aAssets();

		_this.addunitygame2_7_3Assets();
		_this.addunitygame2_7_3aAssets();

		_this.addunitygame2_2_1Assets();
		_this.addunitygame2_2_2Assets1();
		_this.addunitygame2_2_3Assets();

		_this.addunitygame2_3_1Assets();
		_this.addunitygame2_3_2Assets1();
		_this.addunitygame2_3_3Assets();

		_this.addunitygame2_4_1Assets1();
		_this.addunitygame2_4_2Assets();
		_this.addunitygame2_4_3Assets();

		_this.addunitygame2_5_1Assets();
		_this.addunitygame2_5_2Assets();
		_this.addunitygame2_5_3Assets();*/

		_this.addunitygame2_6_1Assets();
		//_this.addunitygame2_6_2Assets();
		//_this.addunitygame2_6_3Assets();

		_this.addunitygame4_1Assets();
		_this.addunitygame4_2Assets();

		_this.addunitygame3_1_1AAssets();
		//_this.addunitygame3_1_1BAssets();

		
		_this.addunitygame4_1_1Assets();
		_this.addunitygame4_2_2Assets();
		_this.addunitygame4_2_3Assets();
		_this.addunitygame4_3_1Assets();
		_this.addunitygame4_4_1Assets();
		_this.addunitygame4_6_1Assets();
		//_this.addunitygame4_6_2Assets();

		
		_this.addunitygame5_1Assets();
		_this.addunitygame6_1Assets();

		_this.addunitygame7_2_1Assets();
		//_this.addunitygame7_2_2Assets1();
		//_this.addunitygame7_2_3Assets1();

		_this.addunitygame8_1Assets();

		_this.addunitygame10_1_1Assets();
		//_this.addunitygame10_2_1Assets();

		_this.addunitygame11_1Assets();
		//_this.addunitygame11_2Assets();

		_this.addunitygame12_1Assets();
		_this.addunitygame12_2Assets();

		_this.addunitygame12_3_1Assets();
		//_this.addunitygame12_3_2Assets();
		//_this.addunitygame12_3_3Assets();

		_this.addunitygame13_1Assets();
		_this.addunitygame14_1Assets();
		_this.addunitygame14_2Assets();

		_this.addunitygame15_1Assets();
		_this.addunitygame16_1Assets();

		this.challengeModeAssets();
		//_this.addunitygame16_2Assets();
		//_this.addunitygame16_3Assets();

		
		/*_this.preloadBar.x = 10;
		_this.preloadBar.animations.add('swim', 0, 30, true);
    	_this.preloadBar.animations.play('swim');*/

    	/*_this.timer = this.time.create(false);

        _this.timer.loop(2000, function(){

        	if(_this.preloadBar.key == "preloadBar")
             _this.preloadBar.loadTexture('preloadBar2', 0);
            else 
             _this.preloadBar.loadTexture('preloadBar', 0);

         	_this.preloadBar.animations.add('swim', 0, 30, true);
    		_this.preloadBar.animations.play('swim');
        }, _this);
 		 _this.timer.start();*/


 		 this.loadjscssfile("js/gradeSelectionScreenJS/measurement1.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/measurement2.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/measurement3.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/measurement4.js", "js");

		this.loadjscssfile("js/gradeSelectionScreenJS/numbersense1.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/numbersense2.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/numbersense3.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/numbersense4.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/numbersense5.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/numbersense6.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/numbersense7.js", "js");

		this.loadjscssfile("js/gradeSelectionScreenJS/numberoperation1.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/numberoperation2.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/numberoperation3.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/numberoperation4.js", "js"); 

		this.loadjscssfile("js/gradejs/volume_MVG_1_4/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/volume_MVG_1_4/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/volume_MVG_2_4/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/volume_MVG_2_4/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/volume_MVG_2_4/level3.js", "js"); 

		this.loadjscssfile("js/gradejs/volume_MVG_3_4/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/volume_MVG_3_4/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/volume_MVG_3_4/level3.js", "js"); 


		this.loadjscssfile("js/gradejs/time_MTG_1_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/time_MTG_1_1/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/time_MTG_1_1/level3.js", "js"); 
		this.loadjscssfile("js/gradejs/time_MTG_1_1/level4.js", "js"); 
		this.loadjscssfile("js/gradejs/time_MTG_1_1/level5.js", "js"); 

		this.loadjscssfile("js/gradejs/time_MTG_2_3/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/time_MTG_2_3/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/time_MTG_3_3/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/time_MTG_3_3/level2.js", "js"); 


		this.loadjscssfile("js/gradejs/length_MLG_1_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/length_MLG_1_1/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/length_MLG_2_1/level1.js", "js");

		this.loadjscssfile("js/gradejs/length_MLG_3_2/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/length_MLG_3_2/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/weight_MWG_1_1/level1.js", "js"); 

		this.loadjscssfile("js/gradejs/weight_MWG_2_2/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/weight_MWG_2_2/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/weight_MWG_2_2/level3.js", "js"); 

		this.loadjscssfile("js/gradejs/weight_MWG_3_2/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/weight_MWG_3_2/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/weight_MWG_3_2/level3.js", "js");


		this.loadjscssfile("js/gradejs/numbers_NSNG_1_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/numbers_NSNG_1_1/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/numbers_NSNG_2_1/level1.js", "js");
		this.loadjscssfile("js/gradejs/numbers_NSNG_2_1/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/sequence_NSSG_1_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/sequence_NSSG_1_1/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/sequence_NSSG_1_1/level3.js", "js"); 

		this.loadjscssfile("js/gradejs/sequence_NSSG_2_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/sequence_NSSG_2_1/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/sequence_NSSG_2_1/level3.js", "js"); 

		this.loadjscssfile("js/gradejs/sequence_NSSG_3_2/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/sequence_NSSG_3_2/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/sequence_NSSG_3_2/level3.js", "js");

		this.loadjscssfile("js/gradejs/sequence_NSSG_4_2/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/sequence_NSSG_4_2/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/sequence_NSSG_4_2/level3.js", "js"); 

		this.loadjscssfile("js/gradejs/sequence_NSSG_5_3/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/sequence_NSSG_5_3/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/sequence_NSSG_5_3/level3.js", "js"); 

		this.loadjscssfile("js/gradejs/sequence_NSSG_6_3/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/sequence_NSSG_6_3/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/sequence_NSSG_6_3/level3.js", "js"); 

		this.loadjscssfile("js/gradejs/comparison_NSCG_1_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/comparison_NSCG_1_1/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/comparison_NSCG_1_1/level3.js", "js");

		this.loadjscssfile("js/gradejs/comparison_NSCG_2_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/comparison_NSCG_2_1/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/comparison_NSCG_4_2/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/comparison_NSCG_4_2/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/comparison_NSCG_5_3/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/comparison_NSCG_5_3/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/fraction_NSFG_1_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/fraction_NSFG_1_1/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/fraction_NSFG_2_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/fraction_NSFG_2_1/level2.js", "js");

		this.loadjscssfile("js/gradejs/fraction_NSFG_3_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/fraction_NSFG_3_1/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/fraction_NSFG_4_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/fraction_NSFG_4_1/level2.js", "js"); 
		this.loadjscssfile("js/gradejs/fraction_NSFG_4_1/level3.js", "js"); 

		this.loadjscssfile("js/gradejs/placevalue_NSPVG_1_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/placevalue_NSPVG_1_1/level2.js", "js");

		this.loadjscssfile("js/gradejs/placevalue_NSPVG_2_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/placevalue_NSPVG_2_1/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/placevalue_NSPVG_4_2/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/placevalue_NSPVG_4_2/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/placevalue_NSPVG_6_3/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/placevalue_NSPVG_6_3/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/placevalue_NSPVG_5_2/level1.js", "js");

		this.loadjscssfile("js/gradejs/placevalue_NSPVG_7_3/level1.js", "js"); 


		this.loadjscssfile("js/gradejs/addition_NOAG_1_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/addition_NOAG_1_1/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/addition_NOAG_2_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/addition_NOAG_2_1/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/addition_NOAG_3_2/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/addition_NOAG_3_2/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/addition_NOAG_4_3/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/addition_NOAG_4_3/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/subtraction_NOAG_1_1/level1.js", "js"); 

		this.loadjscssfile("js/gradejs/subtraction_NOAG_2_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/subtraction_NOAG_2_1/level2.js", "js");

		this.loadjscssfile("js/gradejs/subtraction_NOAG_3_2/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/subtraction_NOAG_3_2/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/subtraction_NOAG_4_3/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/subtraction_NOAG_4_3/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/division_NODG_1_2/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/division_NODG_1_2/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/division_NODG_2_2/level1.js", "js"); 
		
		this.loadjscssfile("js/gradejs/division_NODG_3_2/level1.js", "js"); 
		
		this.loadjscssfile("js/gradejs/division_NODG_4_2/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/division_NODG_4_2/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/multiplication_NOMG_1_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/multiplication_NOMG_1_1/level2.js", "js"); 

		this.loadjscssfile("js/gradejs/multiplication_NOMG_2_1/level1.js", "js"); 
		
		this.loadjscssfile("js/gradejs/multiplication_NOMG_3_1/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/multiplication_NOMG_3_1/level2.js", "js");

		this.loadjscssfile("js/gradejs/multiplication_NOMG_4_2/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/multiplication_NOMG_4_2/level2.js", "js");
		this.loadjscssfile("js/gradejs/multiplication_NOMG_4_2/level3.js", "js");

		this.loadjscssfile("js/gradejs/multiplication_NOMG_5_3/level1.js", "js"); 
		this.loadjscssfile("js/gradejs/multiplication_NOMG_5_3/level2.js", "js"); 
		
		this.addLandingScreenAssets();
		this.addGameScreenAssets();
		this.addGameScreenAssets2();
		this.addGameScreenAssets3();

		this.loadCommonAssets1();

		/*//Unity games...
		this.addgame4_1AAssets();

		//Unity games...
        _this.addgame4_2AAssets();
        _this.addgame4_2BAssets();
        _this.addgame4_2CAssets();

        //Unity games...
        _this.addgame4_3AAssets();

        _this.addgame6_1Assets();
		_this.addgame6_2Assets();

		//Unity games...
        _this.addgame7_1Assets();
        _this.addgame7_2Assets();

        _this.addgame2_3Assets();  

        _this.addgame2_1BAssets();
    	_this.addgame2_2Assets();

    	_this.addgame2_4AAssets();

    	_this.addgame3_2Assets();

    	_this.addgame3_2BAssets();
        _this.addgame3_2CAssets();

        _this.addgame3_3AAssets();
		_this.addgame3_3B1Assets();
        _this.addgame3_3B2Assets();

        //Unity games...
        _this.addgame5_1Assets();
		_this.addgame5_2Assets();
		_this.addgame5_4Assets();

		//Unity games...
		_this.gradeAssets();

		//Unity games...
		//_this.gradeAssets();
		_this.addgame1_4Assets();
		_this.addgame1_5Assets();

		//Unity games...
		this.gradeAssets2();

		_this.addunitygame2_4_1Assets();
    	_this.addunitygame2_4_1aAssets();
       // _this.addunitygame2_5_1Assets();
       // _this.addunitygame2_5_1aAssets();
        _this.addunitygame2_6_1Assets();

        _this.addunitygame2_3_2aAssets();
        _this.addunitygame2_1_2Assets();
		_this.addunitygame2_1_2aAssets();
        _this.addunitygame2_2_2Assets();
        _this.addunitygame2_2_2aAssets();
        _this.addunitygame2_3_2Assets();
        _this.addunitygame2_3_2aAssets();

        //Unity games...
		this.gradeAssets3();

		//Unity games...
		this.gradeAssets4();

		//Unity games...
		this.gradeAssets5();

		//Unity games...
		this.gradeAssets6();

		//Unity games...
		//_this.gradeAssets();
		_this.addgame4_4_1Assets();
		_this.addgame4_5_1Assets();

		//Unity games...
		//_this.gradeAssets();
		_this.addgame4_4_2Assets();
		_this.addgame4_5_2Assets();

		//Unity games...
		//_this.gradeAssets();
		_this.addgame4_4_3Assets();
		_this.addgame4_5_3Assets();

		//Unity games...
		//_this.gradeAssets();
		_this.addgame1_1AAssets();
		_this.addgame1_1BAssets();	

		//Unity games...
		//_this.gradeAssets();
		_this.addgame1_2AAssets();
		_this.addgame1_2BAssets();

		//Unity games...
		//_this.gradeAssets();
		_this.addgame1_3AAssets();
		_this.addgame1_3BAssets();

		//Unity games...
		_this.addgame1_4Assets2();

		//Unity games...
		//this.gradeAssets();
		this.addgame1_6Assets();
		this.addgame2_6_1Assets();

		//Unity games...
		//_this.gradeAssets();
		_this.addunitygame3_1_1Assets();

		//Unity games...
		//_this.gradeAssets();
		_this.addunitygame3_1_1Assets2();

		//Unity games...
		//_this.gradeAssets();
		_this.addunitygame3_1_2Assets();

		//Unity games...
		//this.gradeAssets();
		this.addgame4_6_1Assets();

		//Unity games...
		//this.gradeAssets();
		this.addgame4_6_2Assets();

		//Unity games...
		_this.gradeAssets7();

		//Unity games...
		//_this.gradeAssets();
		_this.addunitygame7_2_1Assets();

		//Unity games...
		//_this.gradeAssets();
		_this.addunitygame7_2_2Assets();

		//Unity games...
		//_this.gradeAssets();
		_this.addunitygame7_2_3Assets();

		//Unity games...
		//_this.gradeAssets();
		_this.addunitygame10_1_11Assets();

		//Unity games...
		//_this.gradeAssets();
		_this.addunitygame10_1_12Assets();
         
		//Unity games...
		//_this.gradeAssets();
		_this.addunitygame10_1_13Assets();

		//Unity games...
		//_this.gradeAssets();
		_this.addunitygame10_1_14Assets();

		_this.addunitygame16_1Assets();
		_this.addunitygame16_2Assets();

		 _this.addunitygame15_1Assets();	

		 _this.addgame16_3Assets();

		 //Unity games...
		_this.gradeAssets8();

		//Unity games...
		this.gradeAssets9();

		//Unity games...
		this.gradeAssets10();

		//Unity games...
		//_this.gradeAssets();
		_this.addunitygame12_1Assets();
		_this.addunitygame12_2Assets();


		//Unity games...
        //_this.gradeAssets();
        _this.addunitygame12_3_2Assets();
        _this.addunitygame12_3_3Assets();
        _this.addunitygame13_1Assets();

        //Unity games...
		this.gradeAssets11();
		
		*/
	},


	generateLoadingAnimations:function(randNo)
	{
		_this.bg = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'loadingBg1');
		//_this.bg.scale.setTo(1,1.5);

		//randNo = 5;
		switch(randNo)
		{
			case 1:
					_this.preloadBar = _this.add.sprite(_this.world.centerX,_this.world.centerY,'loadingTankAnim');
					_this.preloadBar.anchor.setTo(0.5,0.5);
					_this.load.onFileComplete.add(_this.progress,_this);
					break;
			case 2:
					_this.preloadBar = _this.add.sprite(_this.world.centerX,_this.world.centerY,'loadingGlassAnim');
					_this.preloadBar.anchor.setTo(0.5,0.5);
					_this.load.onFileComplete.add(_this.progress,_this);
					break;
			case 3:
					_this.preloadBar = _this.add.sprite(_this.world.centerX,_this.world.centerY,'loadingBottleAnim');
					_this.preloadBar.anchor.setTo(0.5,0.5);
					_this.load.onFileComplete.add(_this.progress,_this);
					break;
			case 4:
					_this.preloadBar = _this.add.sprite(_this.world.centerX,_this.world.centerY,'loadingTimeAnim');
					_this.preloadBar.anchor.setTo(0.5,0.5);

					_this.load.onFileComplete.add(_this.progress,_this);
					break;
			case 5:
					_this.bg.loadTexture('loadingBg2',false);
					_this.preloadBar = _this.add.sprite(_this.world.centerX,_this.world.centerY,'loadingFishAnim2');
					_this.preloadBar.anchor.setTo(0.5,0.5);
					_this.preloadBar.x = 10;
					_this.preloadBar.y = _this.preloadBar.y+60;
					_this.preloadBar.scale.setTo(0.7);
					_this.preloadBar.animations.add('swim', 0, 30, true);
    				_this.preloadBar.animations.play('swim');
					_this.load.onFileComplete.add(_this.progress1,_this);
					break;
			case 6:
					//_this.bg.loadTexture('loadingBg2',false);
					_this.preloadBar = _this.add.sprite(_this.world.centerX,_this.world.centerY,'rabitSittingAnim');
					_this.preloadBar.anchor.setTo(0.5,0.5);
					_this.preloadBar.x = 200;
					//_this.preloadBar.y = _this.preloadBar.y+60;
					_this.preloadBar.scale.setTo(0.8);

					_this.singleCarrotForLoading = _this.add.sprite(_this.world.centerX,_this.world.centerY,'singleCarrotForLoading');
					_this.singleCarrotForLoading.anchor.setTo(0.5,0.5);
					_this.singleCarrotForLoading.x = 720;
					_this.singleCarrotForLoading.y = 340;
					_this.singleCarrotForLoading.scale.setTo(0.8);

					_this.preloadBar.animations.add('sit', 0, 10, true);
    				_this.preloadBar.animations.play('sit');
					_this.load.onFileComplete.add(_this.progress2,_this);
					break;
		}
	},
	
	progress:function(progress, cacheKey, success, totalLoaded, totalFiles)
	{
		_this.preloadBar.frame = progress;
	},

	progress1:function(progress, cacheKey, success, totalLoaded, totalFiles)
	{
		

		/*if(progress<=10)
		{
			//this.preloadBar.frame = 5;

			_this.preloadBar.animations.add('swim', [0,1,2,3,4,5], 30, true);
    		//_this.preloadBar.animations.play('swim');
		}
		else if(progress<=50)
		{
			_this.preloadBar.animations.add('swim', [6,7,8,9,10,11,12,13,14,15], 30, true);
    		//_this.preloadBar.animations.play('swim');
		}*/


		if(progress==8)
		{
			_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 120 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==25)
		{
			_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 240 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==37)
		{
			_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 360 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==50)
    	{
    		_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 480 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==62)
    	{
    		_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 600 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==75)
    	{
    		_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 720 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==85)
    	{
    		_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 820 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==92)
    	{
    		_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 1000 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==97)
    	{
    		_this.preloadBar.x = 1000;
    	}

	},

	progress2:function(progress, cacheKey, success, totalLoaded, totalFiles)
	{
		

		/*if(progress<=10)
		{
			//this.preloadBar.frame = 5;

			_this.preloadBar.animations.add('swim', [0,1,2,3,4,5], 30, true);
    		//_this.preloadBar.animations.play('swim');
		}
		else if(progress<=50)
		{
			_this.preloadBar.animations.add('swim', [6,7,8,9,10,11,12,13,14,15], 30, true);
    		//_this.preloadBar.animations.play('swim');
		}*/


		/*if(progress==8)
		{
			_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 120 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==25)
		{
			_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 240 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==37)
		{
			_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 360 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==50)
    	{
    		_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 480 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==62)
    	{
    		_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 600 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==75)
    	{
    		_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 720 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==85)
    	{
    		_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 820 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}
    	else if(progress==92)
    	{
    		_this.tween = _this.add.tween(_this.preloadBar);
    		_this.tween.to({ x: 1000 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);
    	}*/
    	if(progress==10)
    	{
    		if(_this.once)
    		{
    			_this.once = false;
	    		_this.preloadBar.loadTexture('rabitJumpAnim',false);
	    		var anim = _this.preloadBar.animations.add('jump');
	    		anim.play(20);
	    		_this.preloadBar.x = 300;
	    		_this.preloadBar.y -= 10;

	    		//_this.tween = _this.add.tween(_this.preloadBar);
	    		//_this.tween.to({ x: _this.preloadBar.x+100 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);

	    		////console.log("coming here");
	    		anim.onComplete.add(function(target){

	    			//console.log("coming here");
	    			anim.stop();


	    			//_this.tween = _this.add.tween(_this.preloadBar);
	    			//_this.tween.to({ x: _this.preloadBar.x+10 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);

	    			_this.preloadBar.loadTexture('rabitSittingAnim',false);
	    			_this.preloadBar.y += 10;
	    			anim = _this.preloadBar.animations.add('sit', 0, 10, true);
	    			anim.play('sit');
	    			_this.once = true;
    			},this);
    			
	    	}

    	}
    	else if(progress==30)
    	{
    		if(_this.once)
    		{
    			_this.once = false;

	    		_this.preloadBar.loadTexture('rabitJumpAnim',false);
	    		var anim = _this.preloadBar.animations.add('jump');
	    		anim.play(20);
	    		_this.preloadBar.x = 400;
	    		_this.preloadBar.y -= 10;

	    		//_this.tween = _this.add.tween(_this.preloadBar);
	    		//_this.tween.to({ x: _this.preloadBar.x+100 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);

	    		////console.log("coming here");
	    		anim.onComplete.add(function(target){

	    			//console.log("coming here");
	    			anim.stop();

	    			//_this.tween = _this.add.tween(_this.preloadBar);
	    			//_this.tween.to({ x: _this.preloadBar.x+10 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);

	    			_this.preloadBar.loadTexture('rabitSittingAnim',false);
	    			_this.preloadBar.y += 10;
	    			anim = _this.preloadBar.animations.add('sit', 0, 10, true);
	    			anim.play('sit');
	    			_this.once = true;
    			},this);
    			
	    	}

    	}
    	else if(progress==50)
    	{
    		if(_this.once)
    		{
    			_this.once = false;

	    		_this.preloadBar.loadTexture('rabitJumpAnim',false);
	    		var anim = _this.preloadBar.animations.add('jump');
	    		anim.play(20);
	    		_this.preloadBar.x = 500;
	    		_this.preloadBar.y -= 10;

	    		//_this.tween = _this.add.tween(_this.preloadBar);
	    		//_this.tween.to({ x: _this.preloadBar.x+100 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);

	    		////console.log("coming here");
	    		anim.onComplete.add(function(target){

	    			//console.log("coming here");
	    			anim.stop();

	    			//_this.tween = _this.add.tween(_this.preloadBar);
	    			//_this.tween.to({ x: _this.preloadBar.x+10 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);

	    			_this.preloadBar.loadTexture('rabitSittingAnim',false);
	    			_this.preloadBar.y += 10;
	    			anim = _this.preloadBar.animations.add('sit', 0, 10, true);
	    			anim.play('sit');
	    			_this.once = true;
    			},this);
    			
	    	}

    	}
    	else if(progress==70)
    	{
    		if(_this.once)
    		{
    			_this.once = false;

	    		_this.preloadBar.loadTexture('rabitJumpAnim',false);
	    		var anim = _this.preloadBar.animations.add('jump');
	    		anim.play(20);
	    		_this.preloadBar.x = 600;
	    		_this.preloadBar.y -= 10;
	    		//_this.tween = _this.add.tween(_this.preloadBar);
	    		//_this.tween.to({ x: _this.preloadBar.x+100 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);

	    		////console.log("coming here");
	    		anim.onComplete.add(function(target){

	    			//console.log("coming here");
	    			anim.stop();

	    			//_this.tween = _this.add.tween(_this.preloadBar);
	    			//_this.tween.to({ x: _this.preloadBar.x+10 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);

	    			_this.preloadBar.loadTexture('rabitSittingAnim',false);
	    			_this.preloadBar.y += 10;
	    			anim = _this.preloadBar.animations.add('sit', 0, 10, true);
	    			anim.play('sit');
	    			_this.once = true;

    			},this);
    			
	    	}

    	}
    	else if(progress==90)
    	{
    		if(_this.once)
    		{
    			_this.once = false;

	    		_this.preloadBar.loadTexture('rabitJumpAnim',false);
	    		var anim = _this.preloadBar.animations.add('jump');
	    		anim.play(20);
	    		_this.preloadBar.x = 700;
	    		_this.preloadBar.y -= 10;

	    		//_this.tween = _this.add.tween(_this.preloadBar);
	    		//_this.tween.to({ x: _this.preloadBar.x+100 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);

	    		////console.log("coming here");
	    		anim.onComplete.add(function(target){

	    			//console.log("coming here");
	    			anim.stop();

	    			//_this.tween = _this.add.tween(_this.preloadBar);
	    			//_this.tween.to({ x: _this.preloadBar.x+10 }, 0, Phaser.Easing.Sinusoidal.InOut, true, 0);

	    			_this.preloadBar.loadTexture('rabitSittingAnim',false);
	    			_this.preloadBar.y += 10;
	    			anim = _this.preloadBar.animations.add('sit', 0, 10, true);
	    			anim.play('sit');
	    			_this.once = true;

    			},this);
    			
	    	}

    	}
    	else if(progress==95)
		{
			_this.preloadBar.x = 700;
			_this.singleCarrotForLoading.visible = false;
			_this.preloadBar.loadTexture('rabitEatingAnim',false);
    		_this.preloadBar.animations.add('eat', 0, 30, false);
    		_this.preloadBar.animations.play('eat');
    	}

	},


	loadMeasurement1Assets:function()
	{
		_this.addgame2_1AAssets();
		_this.addgame2_1BAssets();
		_this.addgame2_2Assets();
		_this.addgame2_3Assets();
		_this.addgame3_1Assets();
		_this.addgame3_2AAssets();
		_this.addgame5_1Assets();

		_this.addgame5_2Assets();
		_this.addgame5_4Assets();
	},

	loadMeasurement2Assets:function()
	{
		_this.addgame2_1AAssets();
		_this.addgame2_1BAssets();
		_this.addgame2_2Assets();
		_this.addgame2_3Assets();
		_this.addgame3_1Assets();
		_this.addgame3_2AAssets();
		_this.addgame5_1Assets();

		_this.addgame5_2Assets();
		_this.addgame5_4Assets();

		_this.addgame6_1Assets();
		_this.addgame6_2Assets();
	},

	loadMeasurement3Assets:function()
	{
		_this.addgame2_4AAssets();
		_this.addgame3_2BAssets();
		_this.addgame3_2CAssets();
		_this.addgame3_3AAssets();
		_this.addgame3_3B1Assets();
		_this.addgame3_3B2Assets();

		_this.addgame7_1Assets();
		_this.addgame7_2Assets();
	},

	loadMeasurement4Assets:function()
	{
		_this.addgame4_1AAssets();
		_this.addgame4_2AAssets();
		_this.addgame4_2BAssets();
		_this.addgame4_2CAssets();
		_this.addgame4_3AAssets();
	},

	challengeModeAssets:function()
	{
		this.load.image("yellowbg",window.baseUrl+"assets/gradeAssets/unity/commonAssets/popupbg12.png");
        this.load.image('unity1_1hintscreen', window.baseUrl+'assets/gradeAssets/unity/1.1/hintscreen.png');
        this.load.atlas('NumberKeyN',window.baseUrl+'assets/gradeAssets/unity/commonAssets/NumberKeyN.png',window.baseUrl+'assets/gradeAssets/unity/commonAssets/NumberKeyN.json');
        this.load.atlas('unity1_2tickBtn',window.baseUrl+'assets/gradeAssets/unity/1.1/Tick.png', window.baseUrl+'json/gradeJson/unity/1.1/Tick.json');
        this.load.image('unity1_2hintscreen', window.baseUrl+'assets/gradeAssets/unity/1.2/hintscreen.png');

        this.load.atlas('unity1_4ice_1Challenge', window.baseUrl+'assets/gradeAssets/unity/1.4/Ice pop 5.png', window.baseUrl+'json/gradeJson/unity/1.4/Ice pop 5.json');
        this.load.atlas('unity1_4flowe_aimChallenge', window.baseUrl+'assets/gradeAssets/unity/1.4/flowers 3.png', window.baseUrl+'json/gradeJson/unity/1.4/flowers 3.json');
        this.load.atlas('unity1_4ball_animChallenge', window.baseUrl+'assets/gradeAssets/unity/1.4/ball 7.png', window.baseUrl+'json/gradeJson/unity/1.4/ball 7.json');
        this.load.image('unity1_1hintscreen', window.baseUrl+'assets/gradeAssets/unity/1.4/hintscreen.png');

        this.load.atlas('unity1_4ice_animChallenge', window.baseUrl+'assets/gradeAssets/unity/1.4/Ice pop 6.png', window.baseUrl+'json/gradeJson/unity/1.4/Ice pop 6.json');
        this.load.atlas('unity1_4ball_animChallenge2', window.baseUrl+'assets/gradeAssets/unity/1.4/ball 8.png', window.baseUrl+'json/gradeJson/unity/1.4/ball 8.json');
        this.load.atlas('unity1_4flowe_aimChallenge2', window.baseUrl+'assets/gradeAssets/unity/1.4/flowers 4.png', window.baseUrl+'json/gradeJson/unity/1.4/flowers 4.json');

        this.load.image('Level442_bg1',window.baseUrl+'assets/gradeAssets/unity/commonAssets/BG.png');
        this.load.image('box',window.baseUrl+'assets/gradeAssets/unity/commonAssets/box.png');
        this.load.image('hintscreen',window.baseUrl+'assets/gradeAssets/4.4.1/hintscreen.png');
        this.load.atlas('glow',window.baseUrl+'assets/gradeAssets/unity/commonAssets/glow.png',window.baseUrl+'json/gradeJson/unity/commonJson/glow.json');

        this.load.atlas('BoySadAnim',window.baseUrl+'assets/gradeAssets/4.4.1/BoySadAnim.png' ,window.baseUrl+'assets/gradeAssets/4.4.1/BoySadAnim.json');
        this.load.image('BoySad_blue',window.baseUrl+'assets/gradeAssets/4.4.1/BoySad_blue.png');

        this.load.atlas('Level51A_tickMark',window.baseUrl+'assets/gradeAssets/5.1/tickMark.png' ,window.baseUrl+'json/gradeJson/5.1/tickMark.json');
	
        this.load.image('Level43A_redmark',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/redmark.png');

        this.load.atlas('Level24A_Number',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/calNum.png' ,window.baseUrl+'json/gradeJson/2.4A/calNum.json');
        this.load.image('Level443_bg1',window.baseUrl+'assets/gradeAssets/unity/commonAssets2/BG.png');
        this.load.atlas('glownew',window.baseUrl+'assets/gradeAssets/unity/commonAssets2/glow.png' ,window.baseUrl+'json/gradeJson/unity/commonJson2/glow.json');
        this.load.image('boxnew',window.baseUrl+'assets/gradeAssets/unity/commonAssets2/box.png');

        this.load.image('hintscreen2',window.baseUrl+'assets/gradeAssets/unity/commonAssets2/hintscreen.png');
        
        
        this.load.atlas('hintno',window.baseUrl+'assets/gradeAssets/unity/commonAssets2/hintno.png',window.baseUrl+'json/gradeJson/unity/commonJson2/hintno.json');
	
        this.load.image('unity4_6_1hintscreen',window.baseUrl+'assets/gradeAssets/4.6.1/hintscreen.png');
        this.load.image('unity4_6_2hintscreen',window.baseUrl+'assets/gradeAssets/4.6.1/hintscreen2.png');

        this.load.image('unity4_6_1no1',window.baseUrl+'assets/gradeAssets/4.6.1/no1.png');
        this.load.image('unity4_6_1no2',window.baseUrl+'assets/gradeAssets/4.6.1/no2.png');
        this.load.image('unity4_6_2no1',window.baseUrl+'assets/gradeAssets/4.6.1/no11.png');
        this.load.image('unity4_6_2no2',window.baseUrl+'assets/gradeAssets/4.6.1/no21.png');
        this.load.image('unity4_6_2no3',window.baseUrl+'assets/gradeAssets/4.6.1/no31.png');
        this.load.image('unity4_6_1blank',window.baseUrl+'assets/gradeAssets/4.6.1/blank.png');
        this.load.image('unity4_6_2blank',window.baseUrl+'assets/gradeAssets/4.6.1/blank.png');

        this.load.image('hintscreen_5_1', window.baseUrl+'assets/gradeAssets/unity/5.1/hintscreen.png');

        this.load.image('Level721_coinMachinePannel1',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel1.png');
        this.load.image('Level722_coinMachinePannel1',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel1.png');
        this.load.image('Level723_coinMachinePannel1',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel1.png');
        this.load.atlas('unity11_1numbg',window.baseUrl+'assets/gradeAssets/11.1/numbg.png',window.baseUrl+'json/gradeJson/11.1/numbg.json');
        
        this.load.atlas("handanim",window.baseUrl+"assets/commonAssets/handanim.png",window.baseUrl+"assets/commonAssets/handanim.json");
		this.load.image("bg",window.baseUrl+"assets/commonAssets/BG.png");

		this.load.image("popupbgEmpty1",window.baseUrl+"assets/commonAssets/bg2.png");
		this.load.image("calculator",window.baseUrl+'assets/gradeAssets/12.1/calculator.png');
		this.load.image("calculatorbox",window.baseUrl+'assets/gradeAssets/12.2/calculatorbox.png');
		
       this.load.atlas('unity15_tickBtn',window.baseUrl+'assets/gradeAssets/unity/1.5/tick.png' ,window.baseUrl+'json/gradeJson/unity/1.5/tick.json');
    
        this.load.atlas('Unity12_1trayglw', window.baseUrl+'assets/gradeAssets/unity/17.2/w2.png', window.baseUrl+'json/gradeJson/unity/17.2/w2.json');
		this.load.image('Level321_numb',window.baseUrl+'assets/gradeAssets/unity/17.2/51.png');
        this.load.atlas('Unity12_1handclick', window.baseUrl+'assets/gradeAssets/unity/17.2/w1.png', window.baseUrl+'json/gradeJson/unity/17.2/w1.json');
        
        this.load.image('hintscreen16_1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/hintscreen.png');

        this.load.image('hintscreen1_5_1', window.baseUrl+'assets/gradeAssets/6.1/hintscreen.png');

        this.load.atlas('grade161_box2',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box2.png' ,window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box2.json');

		
	},

	loadNumberSense1Assets:function()
	{
		_this.addgame1_1AAssets();
		_this.addgame1_2AAssets();
		_this.addgame1_2BAssets();
		_this.addunitygame2_1_1Assets();
		_this.addunitygame2_1_1aAssets();
		_this.addunitygame2_2_1Assets();
		_this.addunitygame2_2_1aAssets();
		_this.addunitygame2_3_1Assets();
		_this.addunitygame2_3_1aAssets();
		_this.addunitygame2_4_1aAssets();
		_this.addunitygame2_5_1aAssets();
		_this.addunitygame2_4_1Assets();
		_this.addunitygame2_5_1Assets();
		_this.addunitygame2_6_1Assets();

		_this.addunitygame3_1_1AAssets();
		_this.addunitygame3_1_1BAssets();

		_this.addunitygame4_1_1Assets();
		_this.addunitygame4_2Assets();
		_this.addunitygame4_4_1Assets();
		_this.addunitygame1_1Assets();
		_this.addunitygame1_2Assets();
		_this.addunitygame1_3Assets();
		_this.addunitygame1_4Assets();
		_this.addunitygame1_5Assets();
		_this.addunitygame1_6Assets();
		_this.addunitygame1_7Assets();
		_this.addunitygame5_1Assets();
		_this.addunitygame6_1Assets();

		_this.addunitygame10_1_1Assets();
		_this.addunitygame4_1Assets();
		_this.addunitygame4_3_1Assets();
		_this.addunitygame8_1Assets();
	},

	loadNumberSense2Assets:function()
	{
		_this.addgame1_1AAssets();
		_this.addgame1_2AAssets();
		_this.addgame1_2BAssets();
		_this.addunitygame2_1_2Assets();
		_this.addunitygame2_1_2aAssets();
		_this.addunitygame2_2_2Assets();
		_this.addunitygame2_2_2aAssets();
		_this.addunitygame2_3_2Assets();
		_this.addunitygame2_3_2aAssets();
		_this.addunitygame2_4_2aAssets();
		_this.addunitygame2_5_2aAssets();
		_this.addunitygame2_4_2Assets();
		_this.addunitygame2_5_2Assets();
		_this.addunitygame2_6_2Assets();

		_this.addunitygame3_1_1AAssets();
		_this.addunitygame3_1_1BAssets();

		_this.addunitygame4_1_1Assets();
		_this.addunitygame4_2Assets();
		_this.addunitygame4_4_1Assets();

		_this.addunitygame4_2_2Assets();
		_this.addunitygame4_1_1Assets();
		_this.addunitygame4_6_1Assets();
		

		_this.addunitygame10_1_1Assets();
		_this.addunitygame4_1Assets();
		_this.addunitygame4_3_1Assets();
		_this.addunitygame8_1Assets();
	},

	loadNumberSense3Assets:function()
	{
		_this.addgame1_1BAssets();
		_this.addgame1_3AAssets();
		_this.addgame1_3BAssets();
		_this.addgame1_4Assets();
		_this.addunitygame2_1_3Assets();
		_this.addunitygame2_1_3aAssets();
		_this.addunitygame2_2_3Assets();
		_this.addunitygame2_2_3aAssets();
		_this.addunitygame2_3_3Assets();
		_this.addunitygame2_3_3aAssets();
		_this.addunitygame2_4_3aAssets();
		_this.addunitygame2_5_3aAssets();
		_this.addunitygame2_4_3Assets();
		_this.addunitygame2_5_3Assets();
		_this.addunitygame2_6_3Assets();

		_this.addunitygame3_1_1AAssets();
		_this.addunitygame3_1_1BAssets();

		_this.addunitygame4_1_1Assets();
		_this.addunitygame4_2Assets();
		_this.addunitygame4_4_1Assets();

		_this.addunitygame4_2_3Assets();
		_this.addunitygame4_1_1Assets();
		_this.addunitygame4_6_2Assets();
		

		_this.addunitygame10_1_1Assets();
		_this.addunitygame4_1Assets();
		_this.addunitygame4_3_1Assets();
		_this.addunitygame8_1Assets();
	},

	loadNumberOperation1Assets:function()
	{
		_this.addunitygame10_1_1Assets();
		_this.addunitygame7_2_1Assets();
		_this.addunitygame11_1Assets();
		_this.addunitygame11_2Assets();
		_this.addunitygame12_3_1Assets();
		_this.addunitygame15_1Assets();
		_this.addunitygame16_1Assets();
		_this.addunitygame16_2Assets();
		_this.addunitygame6_1Assets();
		_this.addunitygame7_2_3Assets();
		_this.addunitygame12_1Assets();
		_this.addgame4_3AAssets();
	},

	loadNumberOperation2Assets:function()
	{
		_this.addunitygame10_1_1Assets();
		_this.addunitygame7_2_2Assets();
		_this.addunitygame12_1Assets();
		_this.addunitygame12_2Assets();
		_this.addunitygame12_3_2Assets();
		_this.addunitygame12_3_3Assets();
		_this.addunitygame15_1Assets();
		_this.addunitygame16_1Assets();
		_this.addunitygame16_2Assets();
		_this.addunitygame16_3Assets();
		_this.addgame4_3AAssets();
	},

	loadNumberOperation3Assets:function()
	{
		_this.addunitygame10_1_1Assets();
		_this.addunitygame7_2_3Assets();
		_this.addunitygame12_1Assets();
		_this.addunitygame12_2Assets();
		_this.addunitygame12_3_2Assets();
		_this.addunitygame12_3_3Assets();

		_this.addunitygame13_1Assets();
		_this.addunitygame14_1Assets();
		_this.addunitygame14_2Assets();
		
		_this.addunitygame16_1Assets();
		_this.addunitygame16_2Assets();
		_this.addunitygame16_3Assets();
		_this.addgame4_3AAssets();
	},

	addgradeSelectionAssets:function()
	{
		_this.load.atlas('MicroConceptTree',window.baseUrl+'assets/gradeSelectionScreenAssets/microConceptTree.png',window.baseUrl+'json/gradeSelectionScreenJson/microConceptTree.json');	
		/*
		_this.load.atlas('tree1',window.baseUrl+'assets/gradeSelectionScreenAssets/tree1.png',window.baseUrl+'assets/gradeSelectionScreenAssets/tree1.json');	
		_this.load.atlas('tree2',window.baseUrl+'assets/gradeSelectionScreenAssets/tree2.png',window.baseUrl+'assets/gradeSelectionScreenAssets/tree2.json');	
		_this.load.atlas('tree3',window.baseUrl+'assets/gradeSelectionScreenAssets/tree3.png',window.baseUrl+'assets/gradeSelectionScreenAssets/tree3.json');	
		_this.load.atlas('tree4',window.baseUrl+'assets/gradeSelectionScreenAssets/tree4.png',window.baseUrl+'assets/gradeSelectionScreenAssets/tree4.json');	
		_this.load.atlas('tree5',window.baseUrl+'assets/gradeSelectionScreenAssets/tree5.png',window.baseUrl+'assets/gradeSelectionScreenAssets/tree5.json');	
		*/
		_this.load.image('McBg',window.baseUrl+'assets/gradeSelectionScreenAssets/McBg.png');		
		_this.load.image('gameselectBg',window.baseUrl+'assets/gradeSelectionScreenAssets/gradeSelectBg.png');		
		//_this.load.atlas('gradeSceneBackBtn',window.baseUrl+'assets/gradeSelectionScreenAssets/gradeSceneBackBtn.png',window.baseUrl+'json/gradeSelectionScreenJson/gradeSceneBackBtn.json');		
		_this.load.image('gradeSceneBackBtn',window.baseUrl+'assets/gradeSelectionScreenAssets/gradeSceneBackBtn.png');		
		_this.load.atlas('gradeCloud',window.baseUrl+'assets/gradeSelectionScreenAssets/grade1Cloudnew.png',window.baseUrl+'assets/gradeSelectionScreenAssets/grade1Cloudnew.json');
		
	},
	
	addgrade1SelectionAssets:function()
	{
		
		_this.load.image('fractions1_1AScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/fractions1_1AScreen.png');
		
		_this.load.image('length2_1AScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/length2_1BScreen.png');
		_this.load.image('fractions1_1BScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/fractions1_1BScreen.png');
		_this.load.image('fractions1_2AScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/fractions1_2AScreen.png');
		_this.load.image('fractions1_2BScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/fractions1_2BScreen.png');
		_this.load.image('fractions1_3AScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/fractions1_3AScreen.png');
		_this.load.image('fractions1_3BScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/fractions1_3BScreen.png');
		
		_this.load.image('length2_1BScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/length2_1AScreen.png');
		_this.load.image('length2_2Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/length2_2Screen.png',window.baseUrl+'assets/gradeSelectionScreenAssets/length2_2Screen.json');
		
		_this.load.image('game2.3ScreenShot',window.baseUrl+'assets/gradeSelectionScreenAssets/game2.3ScreenShot.png');
		_this.load.image('game3.1ScreenShot',window.baseUrl+'assets/gradeSelectionScreenAssets/game3.1ScreenShot.png');
		_this.load.image('game3.2AScreenShot',window.baseUrl+'assets/gradeSelectionScreenAssets/game3.2AScreenShot.png');
		
		_this.load.image('time5_1Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/time5_1Screen.png');
		_this.load.image('time5_2Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/time5_2Screen.png');
		_this.load.image('time5_4Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/time5_4Screen.png');


		_this.load.image('unity1.1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity1.1.png');
		_this.load.image('unity1.2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity1.2.png');
		_this.load.image('unity1.3',window.baseUrl+'assets/gradeSelectionScreenAssets/unity1.3.png');
		_this.load.image('unity1.4',window.baseUrl+'assets/gradeSelectionScreenAssets/unity1.4.png');
		_this.load.image('unity1.5',window.baseUrl+'assets/gradeSelectionScreenAssets/unity1.5.png');
		_this.load.image('unity1.6',window.baseUrl+'assets/gradeSelectionScreenAssets/unity1.6.png');
		_this.load.image('unity1.7',window.baseUrl+'assets/gradeSelectionScreenAssets/unity1.7.png');

		


		_this.load.image('unity5.1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity5.1.png');
		_this.load.image('unity6.1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity6.1.png');

		_this.load.image('unity8.1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity8.1.png');
		_this.load.image('unity10.1.1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity10.1.1.png');
		_this.load.image('unity10.2.1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity10.2.1.png');
		_this.load.image('unity10.1.2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity10.1.2.png');
		_this.load.image('unity10.2.2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity10.2.2.png');
		_this.load.image('unity10.1.3',window.baseUrl+'assets/gradeSelectionScreenAssets/unity10.1.3.png');
		//_this.load.image('unity10.2.3',window.baseUrl+'assets/gradeSelectionScreenAssets/unity10.2.3.png');

		_this.load.image('unity11.1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity11.1.png');
		_this.load.image('unity11.2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity11.2.png');


		//newly added
		_this.load.image('unity2_1_1Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/unity2_1_1Screen.png');
		_this.load.image('unity2_2_1Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/unity2_2_1Screen.png');
		_this.load.image('unity2_3_1Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/unity2_3_1Screen.png');
		_this.load.image('unity2_4_1Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/unity2_4_1Screen.png');
		_this.load.image('unity2_5_1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity2_5_1.png');
		_this.load.image('unity2_6_1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity2_6_1.png');

		_this.load.image('unity2_1_1aScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/2.1.1a.png');
		_this.load.image('unity2_2_1aScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/2.2.1a.png');
		_this.load.image('unity2_3_1aScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/2.3.1a.png');
		_this.load.image('unity2_4_1aScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/2.4.1a.png');
		_this.load.image('unity2_5_1a',window.baseUrl+'assets/gradeSelectionScreenAssets/2.5.1a.png');
		_this.load.image('unity2_7_3',window.baseUrl+'assets/gradeSelectionScreenAssets/2.7.3.png');
		_this.load.image('unity2_7_3a',window.baseUrl+'assets/gradeSelectionScreenAssets/2.7.3a.png');

		_this.load.image('unity16_1',window.baseUrl+'assets/gradeSelectionScreenAssets/16.1.png');
		_this.load.image('unity16_2',window.baseUrl+'assets/gradeSelectionScreenAssets/16.2.png');
		_this.load.image('unity16_3',window.baseUrl+'assets/gradeSelectionScreenAssets/16.3.png');
		
		_this.load.image('unity7_2_1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity7_2_1.png');
		_this.load.image('unity3.1.1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity3.1.1.png');
		_this.load.image('unity3.1.2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity3.1.2.png');

		_this.load.image('unity17.2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity17.2.png');



		_this.load.image('unity4_1_1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity4_1_1.png');
		_this.load.image('unity4_2_1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity4_2_1.png');
		_this.load.image('unity4_3_1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity4_3_1.png');
		_this.load.image('unity4_4_1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity4_4_1.png');
		_this.load.image('unity4_5_1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity4_5_1.png');
		_this.load.image('unity4_6_1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity4_6_1.png');
		
		_this.load.image('unity4_4_2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity4_4_2.png');
		_this.load.image('unity4_5_2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity4_5_2.png');

		_this.load.image('unity12_1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity12_1.png');
		_this.load.image('unity12_2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity12_2.png');
		_this.load.image('unity12_3_1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity12_3_1.png');
		_this.load.image('unity12_3_2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity12_3_2.png');
		_this.load.image('unity12_3_3',window.baseUrl+'assets/gradeSelectionScreenAssets/unity12_3_3.png');


		_this.load.image('unity15_1',window.baseUrl+'assets/gradeSelectionScreenAssets/unity15_1.png');
		_this.load.image('unity17_3',window.baseUrl+'assets/gradeSelectionScreenAssets/unity17_3.png');

		_this.load.image('unity13_1',window.baseUrl+'assets/gradeSelectionScreenAssets/13.1.png');
		_this.load.image('unity14_1',window.baseUrl+'assets/gradeSelectionScreenAssets/14.1.png');
		_this.load.image('unity14_2',window.baseUrl+'assets/gradeSelectionScreenAssets/14.2.png');

		_this.load.image('unity4_2_2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity4_2_2.png');
		_this.load.image('unity4_2_3',window.baseUrl+'assets/gradeSelectionScreenAssets/unity4_2_3.png');

		_this.load.image('unity4_1_1New',window.baseUrl+'assets/gradeSelectionScreenAssets/unity4_1_1New.png');

		_this.load.image('unity3.1.1a',window.baseUrl+'assets/gradeSelectionScreenAssets/unity3.1.1a.png');
		_this.load.image('unity3.1.1b',window.baseUrl+'assets/gradeSelectionScreenAssets/unity3.1.1b.png');

		


	},

	addgrade2SelectionAssets:function()
	{

		_this.load.image('time6_1Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/time6_1Screen.png');
		_this.load.image('time6_2Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/time6_2Screen.png');	


		_this.load.image('unity10.1.2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity10.1.2.png');
		_this.load.image('unity10.2.2',window.baseUrl+'assets/gradeSelectionScreenAssets/unity10.2.2.png');
	},
	
	addgrade3SelectionAssets:function()
	{

		
		_this.load.image('fractions1_1Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/fractions1_1Screen.png');
		_this.load.image('fractions1_2AScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/fractions1_2AScreen.png');
		_this.load.image('fractions1_2BScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/fractions1_2BScreen.png');
		_this.load.image('fractions1_2CScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/fractions1_2CScreen.png');
		_this.load.image('length2_4AScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/length2_4AScreen.png');
		_this.load.image('length2_4BScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/length2_4BScreen.png');
		_this.load.image('weight3_2BScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/weight3_2BScreen.png');
		_this.load.image('weight3_2CScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/weight3_2CScreen.png');
		_this.load.image('weight3_2DScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/weight3_2DScreen.png');
		_this.load.image('weight3_3AScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/weight3_3AScreen.png');
		_this.load.image('weight3_3B1Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/weight3_3B1Screen.png');
		_this.load.image('weight3_3B2Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/weight3_3B2Screen.png');
		
		_this.load.image('game3.2AScreenShot',window.baseUrl+'assets/gradeSelectionScreenAssets/game3.2AScreenShot.png');

		_this.load.image('time7_1Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/time7_1Screen.png');
		_this.load.image('time7_2Screen',window.baseUrl+'assets/gradeSelectionScreenAssets/time7_2Screen.png');	

		
		_this.load.image('unity10.1.3',window.baseUrl+'assets/gradeSelectionScreenAssets/unity10.1.3.png');
		//_this.load.image('unity10.2.3',window.baseUrl+'assets/gradeSelectionScreenAssets/unity10.2.3.png');
		
	},
	
	addgrade4SelectionAssets:function()
	{


		_this.load.image('volumes4_1AScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/volumes4_1AScreen.png');
		_this.load.image('volumes4_1BScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/volumes4_1BScreen.png');
		_this.load.image('volumes4_1CScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/volumes4_1CScreen.png');
		_this.load.image('volumes4_2AScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/volumes4_2AScreen.png');
		_this.load.image('volumes4_2BScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/volumes4_2BScreen.png');
		_this.load.image('volumes4_2CScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/volumes4_2CScreen.png');
		_this.load.image('volumes4_3AScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/volumes4_3AScreen.png');
		_this.load.image('volumes4_3BScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/volumes4_3BScreen.png');
		_this.load.image('volumes4_3CScreen',window.baseUrl+'assets/gradeSelectionScreenAssets/volumes4_3CScreen.png');
		
		_this.load.image('game3.2AScreenShot',window.baseUrl+'assets/gradeSelectionScreenAssets/game3.2AScreenShot.png');
		
	},
	
	loadCommonAssets:function()
	{

		this.load.image("backBtn",window.baseUrl+"assets/landingScreen/backBtn.png");
		
		

		_this.load.atlas("cstarAnim",window.baseUrl+"assets/commonAssets/cstarAnim.png",window.baseUrl+"assets/commonAssets/cstarAnim.json");
		_this.load.atlas('newCommonBackBtnForAll',window.baseUrl+'assets/commonAssets/newBackBtn.png',window.baseUrl+'assets/commonAssets/newBackBtn.json');
		
		_this.load.image('gameModeBg',window.baseUrl+'assets/gameModeSelectionScreen/gameModeBg.png');
		_this.load.image('gameModeNavBar',window.baseUrl+'assets/gameModeSelectionScreen/gameModeNavBar.png');


		_this.load.image('gameModeBackBtn',window.baseUrl+'assets/gameModeSelectionScreen/gameModeBackBtn.png');
		_this.load.image('gameModePracticeSceen',window.baseUrl+'assets/gameModeSelectionScreen/gameModePracticeSceen.png');
		_this.load.image('gameModeChallengeSceen',window.baseUrl+'assets/gameModeSelectionScreen/gameModeChallengeSceen.png');

		_this.load.image('skipDemoVideos',window.baseUrl+'assets/commonAssets/skipArrow.png');

		_this.load.image('commonBg1',window.baseUrl+'assets/commonAssets/commonBg1.png');
		_this.load.image('commonBg2',window.baseUrl+'assets/commonAssets/commonBg2.png');
		_this.load.image('bottomBar',window.baseUrl+'assets/commonAssets/bottomBar.png');
		_this.load.atlas('game32d_popup',window.baseUrl+'assets/commonAssets/popup.png',window.baseUrl+'assets/commonAssets/popup.json');

		_this.load.atlas('game24b_popup2',window.baseUrl+'assets/commonAssets/popup2.png',window.baseUrl+'assets/commonAssets/popup2.json');
		
		
		_this.load.atlas('grade11_backbtn', window.baseUrl+'assets/commonAssets/grade11_backbtn.png',window.baseUrl+'json/commonJson/grade11_backbtn.json');
		//_this.load.atlas('CommonBackBtn',window.baseUrl+'assets/commonAssets/backbtn.png',window.baseUrl+'json/commonJson/backbtn.json');
		_this.load.atlas('grade11_speaker',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
		//_this.load.atlas('CommonReplayBtn',window.baseUrl+'assets/commonAssets/replay.png',window.baseUrl+'json/commonJson/replay.json');
		_this.load.atlas('CommonStarAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/commonJson/starAnim.json');
		
		
		_this.load.atlas('CommonHomeBtn',window.baseUrl+'assets/commonAssets/homeBtn.png',window.baseUrl+'assets/commonAssets/homeBtn.json');	
		_this.load.atlas('CommonNextBtn',window.baseUrl+'assets/commonAssets/nextBtn.png',window.baseUrl+'assets/commonAssets/nextBtn.json');	
		_this.load.atlas('CommonReplayBtn',window.baseUrl+'assets/commonAssets/replayBtn.png',window.baseUrl+'assets/commonAssets/replayBtn.json');


		//load common assets.
		_this.load.atlas('CommonBackBtn',window.baseUrl+'assets/commonAssets/backbtn.png',window.baseUrl+'json/commonJson/backbtn.json');
		_this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png',window.baseUrl+'json/commonJson/speaker.json');

		//_this.load.atlas('CommonReplayBtn',window.baseUrl+'assets/commonAssets/replay.png',window.baseUrl+'json/commonJson/replay.json');
		_this.load.atlas('CommonStarAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/commonJson/starAnim.json');
		
		
		_this.load.atlas('CommonHomeBtn',window.baseUrl+'assets/commonAssets/homeBtn.png',window.baseUrl+'assets/commonAssets/homeBtn.json');	
		_this.load.atlas('CommonNextBtn',window.baseUrl+'assets/commonAssets/nextBtn.png',window.baseUrl+'assets/commonAssets/nextBtn.json');	
		_this.load.atlas('CommonReplayBtn',window.baseUrl+'assets/commonAssets/replayBtn.png',window.baseUrl+'assets/commonAssets/replayBtn.json');


		this.load.image('Level42C_Topbar',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/Topbar.png');
		


        this.load.image('Level42C_timer',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/timer.png');
        

        _this.load.atlas('starAnim1',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');




        _this.load.atlas('unity1_1starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity1_1navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity1_1timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity1_1CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');

         _this.load.atlas('unity1_2starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity1_2navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity1_2timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity1_2CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
		this.load.image('unity1_2bg1',window.baseUrl+'assets/gradeAssets/unity/1.2/BG.png');

		_this.load.atlas('unity13_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity13_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity13_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity13_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
		this.load.image('unity13_bg1',window.baseUrl+'assets/gradeAssets/unity/1.3/BG.png');
		this.load.image('unity13_numbg',window.baseUrl+'assets/commonAssets/numbg.png');
        
		 _this.load.atlas('unity1_4starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity1_4navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity1_4timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity1_4CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
		

		_this.load.atlas('unity15_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity15_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity15_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity15_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
		this.load.image('unity15_bg1',window.baseUrl+'assets/gradeAssets/unity/1.2/BG.png');

        _this.load.atlas('unity16_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity16_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity16_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity16_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
		

		this.load.image('Unity12_3_1navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity12_3_1timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        this.load.image("boxnum",window.baseUrl+"assets/gradeAssets/14.1/boxnum.png");
        this.load.image("cal1",window.baseUrl+"assets/gradeAssets/14.1/cal1.png");
        this.load.image("cal2",window.baseUrl+"assets/gradeAssets/14.1/cal2.png");
        this.load.image("cal3",window.baseUrl+"assets/gradeAssets/14.1/cal3.png");
        this.load.image("cal4",window.baseUrl+"assets/gradeAssets/14.1/cal4.png");
        
		
		_this.load.audio('waudio', 'sounds/WrongCelebrationSound.mp3');
        _this.load.audio('ClickSound', 'sounds/ClickSound.mp3');
		_this.load.audio('celebr', 'sounds/celebration.mp3');
		_this.load.audio('snapSound', 'sounds/snapSound.mp3');

		_this.load.audio('goingdown', 'sounds/goingdown.mp3');
        _this.load.audio('goingup', 'sounds/goingup.mp3');

        _this.load.audio('spin2', 'sounds/spin2.mp3');

        _this.load.audio('waterFill', 'sounds/waterFillingSound.mp3');
        _this.load.audio('watersplash','sounds/watersplash.mp3');

        _this.load.audio('clocktick', 'sounds/clocktick.mp3');
        _this.load.audio('click','sounds/chime.mp3');

        _this.load.audio('tinklesound', 'sounds/tinkle.mp3');


		this.load.audio('CarrotBite', 'sounds/CarrotBite.mp3');
        this.load.audio('Rabbit', 'sounds/Rabbit.mp3');
        this.load.audio('Tap', 'sounds/Tap.mp3');
        this.load.audio('tap', 'sounds/Tap.mp3');
        this.load.audio('EHowMany', 'sounds/EHowMany.mp3');
        this.load.audio('HHowMany', 'sounds/HHowMany.mp3');
        this.load.audio('KHowMany', 'sounds/KHowMany.mp3');
        this.load.audio('dragMango', 'sounds/Drag_Snap.mp3');
        this.load.audio('bubble', 'sounds/Bubbles.mp3');
        this.load.audio('bubbleBurst', 'sounds/Bubble Burst.mp3');
        this.load.audio('coinFall', 'sounds/CoinDrop.mp3');

        this.load.audio('cashOut','sounds/CashOut.mp3');
        this.load.audio('WaterDropSplash', 'sounds/WaterDropSplash.mp3');

        this.load.audio('anim1sound', 'sounds/Mouse.mp3');
        this.load.audio('anim2sound', 'sounds/Elephant.mp3');

        _this.load.audio('buzzSound','sounds/buzzsound.mp3');
        _this.load.audio('RabbitSound','sounds/Rabbit.mp3');
        _this.load.audio('ClungSound','sounds/clung.mp3');

        _this.load.audio('eggCrack', 'sounds/eggCrack.mp3');
        _this.load.audio('RabbitMovingSound', 'sounds/rabbitMovingSound.mp3');
        
	},
	
	addgame1_1AAssets:function()
	{
		/*//LOAD ALL ASEETS 
        _this.load.atlas('flg1o1', window.baseUrl+'assets/gradeAssets/1.1A/flg1o1.png', window.baseUrl+'json/gradeJson/1.1A/flg1o1.json');
        _this.load.image('flg1o2', window.baseUrl+'assets/gradeAssets/1.1A/flg1o2.png');
        _this.load.image('flg1o3', window.baseUrl+'assets/gradeAssets/1.1A/flg1o3.png');
        
        _this.load.atlas('flg2o2', window.baseUrl+'assets/gradeAssets/1.1A/flg2o2.png', window.baseUrl+'json/gradeJson/1.1A/flg2o2.json');
        _this.load.image('flg2o1', window.baseUrl+'assets/gradeAssets/1.1A/flg2o1.png');
        _this.load.image('flg2o3', window.baseUrl+'assets/gradeAssets/1.1A/flg2o3.png');
               
        _this.load.atlas('flg3o3', window.baseUrl+'assets/gradeAssets/1.1A/flg3o3.png', window.baseUrl+'json/gradeJson/1.1A/flg3o3.json');
        _this.load.image('flg3o1', window.baseUrl+'assets/gradeAssets/1.1A/flg3o1.png');
        _this.load.image('flg3o2', window.baseUrl+'assets/gradeAssets/1.1A/flg3o2.png');
                        
        _this.load.atlas('flg4o2', window.baseUrl+'assets/gradeAssets/1.1A/flg4o2.png', window.baseUrl+'json/gradeJson/1.1A/flg4o2.json');
        _this.load.image('flg4o1', window.baseUrl+'assets/gradeAssets/1.1A/flg4o1.png');
        _this.load.image('flg4o3', window.baseUrl+'assets/gradeAssets/1.1A/flg4o3.png');
        
        _this.load.atlas('flg5o1', window.baseUrl+'assets/gradeAssets/1.1A/flg5o1.png', window.baseUrl+'json/gradeJson/1.1A/flg5o1.json');
        _this.load.image('flg5o2', window.baseUrl+'assets/gradeAssets/1.1A/flg5o2.png');
        _this.load.image('flg5o3', window.baseUrl+'assets/gradeAssets/1.1A/flg5o3.png');

        _this.load.atlas('flg6o2', window.baseUrl+'assets/gradeAssets/1.1A/flg6o2.png', window.baseUrl+'json/gradeJson/1.1A/flg6o2.json');
        _this.load.image('flg6o1', window.baseUrl+'assets/gradeAssets/1.1A/flg6o1.png');
        _this.load.image('flg6o3', window.baseUrl+'assets/gradeAssets/1.1A/flg6o3.png');
        
        _this.load.atlas('flg7o3', window.baseUrl+'assets/gradeAssets/1.1A/flg7o3.png', window.baseUrl+'json/gradeJson/1.1A/flg7o3.json');
        _this.load.image('flg7o1', window.baseUrl+'assets/gradeAssets/1.1A/flg7o1.png');
        _this.load.image('flg7o2', window.baseUrl+'assets/gradeAssets/1.1A/flg7o2.png');
        
        _this.load.atlas('flg8o1', window.baseUrl+'assets/gradeAssets/1.1A/flg8o1.png', window.baseUrl+'json/gradeJson/1.1A/flg8o1.json');
        _this.load.image('flg8o2', window.baseUrl+'assets/gradeAssets/1.1A/flg8o2.png');
        _this.load.image('flg8o3', window.baseUrl+'assets/gradeAssets/1.1A/flg8o3.png');
        
        _this.load.atlas('flg9o1', window.baseUrl+'assets/gradeAssets/1.1A/flg9o1.png', window.baseUrl+'json/gradeJson/1.1A/flg9o1.json');
        _this.load.image('flg9o2', window.baseUrl+'assets/gradeAssets/1.1A/flg9o2.png');
        _this.load.image('flg9o3', window.baseUrl+'assets/gradeAssets/1.1A/flg9o3.png');
        
        _this.load.atlas('flg10o1', window.baseUrl+'assets/gradeAssets/1.1A/flg10o1.png', window.baseUrl+'json/gradeJson/1.1A/flg10o1.json');
        _this.load.image('flg10o2', window.baseUrl+'assets/gradeAssets/1.1A/flg10o2.png');
        _this.load.image('flg10o3', window.baseUrl+'assets/gradeAssets/1.1A/flg10o3.png');

        _this.load.atlas('flg11o1', window.baseUrl+'assets/gradeAssets/1.1A/flg11o1.png', window.baseUrl+'json/gradeJson/1.1A/flg11o1.json');
        _this.load.image('flg11o2', window.baseUrl+'assets/gradeAssets/1.1A/flg11o2.png');
        _this.load.image('flg11o3', window.baseUrl+'assets/gradeAssets/1.1A/flg11o3.png');
        
        _this.load.atlas('flg12o3', window.baseUrl+'assets/gradeAssets/1.1A/flg12o3.png', window.baseUrl+'json/gradeJson/1.1A/flg12o3.json');
        _this.load.image('flg12o1', window.baseUrl+'assets/gradeAssets/1.1A/flg12o1.png');
        _this.load.image('flg12o2', window.baseUrl+'assets/gradeAssets/1.1A/flg12o2.png');
        
        _this.load.atlas('flg13o1', window.baseUrl+'assets/gradeAssets/1.1A/flg13o1.png', window.baseUrl+'json/gradeJson/1.1A/flg13o1.json');
        _this.load.image('flg13o2', window.baseUrl+'assets/gradeAssets/1.1A/flg13o2.png');
        _this.load.image('flg13o3', window.baseUrl+'assets/gradeAssets/1.1A/flg13o3.png');
        
        _this.load.atlas('flg14o1', window.baseUrl+'assets/gradeAssets/1.1A/flg14o1.png', window.baseUrl+'json/gradeJson/1.1A/flg14o1.json');
        _this.load.image('flg14o2', window.baseUrl+'assets/gradeAssets/1.1A/flg14o2.png');
        _this.load.image('flg14o3', window.baseUrl+'assets/gradeAssets/1.1A/flg14o3.png');
        
        _this.load.atlas('flg15o1', window.baseUrl+'assets/gradeAssets/1.1A/flg15o1.png', window.baseUrl+'json/gradeJson/1.1A/flg15o1.json');
        _this.load.image('flg15o2', window.baseUrl+'assets/gradeAssets/1.1A/flg15o2.png');
        _this.load.image('flg15o3', window.baseUrl+'assets/gradeAssets/1.1A/flg15o3.png');*/


        //LOAD ALL ASEETS 
		
		_this.load.image('grade11_TopBar', window.baseUrl+'assets/gradeAssets/1.1A/grade11_TopBar.png');

		

        _this.load.atlas('flg1o1', window.baseUrl+'assets/gradeAssets/1.1A/flg1o1.png', window.baseUrl+'json/gradeJson/1.1A/flg1o1.json');
        _this.load.image('flg1o2', window.baseUrl+'assets/gradeAssets/1.1A/flg1o2.png');
        _this.load.image('flg1o3', window.baseUrl+'assets/gradeAssets/1.1A/flg1o3.png');
        
        _this.load.atlas('flg2o2', window.baseUrl+'assets/gradeAssets/1.1A/flg2o2.png', window.baseUrl+'json/gradeJson/1.1A/flg2o2.json');
        _this.load.image('flg2o1', window.baseUrl+'assets/gradeAssets/1.1A/flg2o1.png');
        _this.load.image('flg2o3', window.baseUrl+'assets/gradeAssets/1.1A/flg2o3.png');
               
        _this.load.atlas('flg3o3', window.baseUrl+'assets/gradeAssets/1.1A/flg3o3.png', window.baseUrl+'json/gradeJson/1.1A/flg3o3.json');
        _this.load.image('flg3o1', window.baseUrl+'assets/gradeAssets/1.1A/flg3o1.png');
        _this.load.image('flg3o2', window.baseUrl+'assets/gradeAssets/1.1A/flg3o2.png');
                        
        _this.load.atlas('flg4o2', window.baseUrl+'assets/gradeAssets/1.1A/flg4o2.png', window.baseUrl+'json/gradeJson/1.1A/flg4o2.json');
        _this.load.image('flg4o1', window.baseUrl+'assets/gradeAssets/1.1A/flg4o1.png');
        _this.load.image('flg4o3', window.baseUrl+'assets/gradeAssets/1.1A/flg4o3.png');
        
        _this.load.atlas('flg5o1', window.baseUrl+'assets/gradeAssets/1.1A/flg5o1.png', window.baseUrl+'json/gradeJson/1.1A/flg5o1.json');
        _this.load.image('flg5o2', window.baseUrl+'assets/gradeAssets/1.1A/flg5o2.png');
        _this.load.image('flg5o3', window.baseUrl+'assets/gradeAssets/1.1A/flg5o3.png');

        _this.load.atlas('flg6o2', window.baseUrl+'assets/gradeAssets/1.1A/flg6o2.png', window.baseUrl+'json/gradeJson/1.1A/flg6o2.json');
        _this.load.image('flg6o1', window.baseUrl+'assets/gradeAssets/1.1A/flg6o1.png');
        _this.load.image('flg6o3', window.baseUrl+'assets/gradeAssets/1.1A/flg6o3.png');
        
        _this.load.atlas('flg7o3', window.baseUrl+'assets/gradeAssets/1.1A/flg7o3.png', window.baseUrl+'json/gradeJson/1.1A/flg7o3.json');
        _this.load.image('flg7o1', window.baseUrl+'assets/gradeAssets/1.1A/flg7o1.png');
        _this.load.image('flg7o2', window.baseUrl+'assets/gradeAssets/1.1A/flg7o2.png');
        
        _this.load.atlas('flg8o1', window.baseUrl+'assets/gradeAssets/1.1A/flg8o1.png', window.baseUrl+'json/gradeJson/1.1A/flg8o1.json');
        _this.load.image('flg8o2', window.baseUrl+'assets/gradeAssets/1.1A/flg8o2.png');
        _this.load.image('flg8o3', window.baseUrl+'assets/gradeAssets/1.1A/flg8o3.png');
        
        _this.load.atlas('flg9o1', window.baseUrl+'assets/gradeAssets/1.1A/flg9o1.png', window.baseUrl+'json/gradeJson/1.1A/flg9o1.json');
        _this.load.image('flg9o2', window.baseUrl+'assets/gradeAssets/1.1A/flg9o2.png');
        _this.load.image('flg9o3', window.baseUrl+'assets/gradeAssets/1.1A/flg9o3.png');
        
        _this.load.atlas('flg10o1', window.baseUrl+'assets/gradeAssets/1.1A/flg10o1.png', window.baseUrl+'json/gradeJson/1.1A/flg10o1.json');
        _this.load.image('flg10o2', window.baseUrl+'assets/gradeAssets/1.1A/flg10o2.png');
        _this.load.image('flg10o3', window.baseUrl+'assets/gradeAssets/1.1A/flg10o3.png');

        _this.load.atlas('flg11o1', window.baseUrl+'assets/gradeAssets/1.1A/flg11o1.png', window.baseUrl+'json/gradeJson/1.1A/flg11o1.json');
        _this.load.image('flg11o2', window.baseUrl+'assets/gradeAssets/1.1A/flg11o2.png');
        _this.load.image('flg11o3', window.baseUrl+'assets/gradeAssets/1.1A/flg11o3.png');
        
        _this.load.atlas('flg12o3', window.baseUrl+'assets/gradeAssets/1.1A/flg12o3.png', window.baseUrl+'json/gradeJson/1.1A/flg12o3.json');
        _this.load.image('flg12o1', window.baseUrl+'assets/gradeAssets/1.1A/flg12o1.png');
        _this.load.image('flg12o2', window.baseUrl+'assets/gradeAssets/1.1A/flg12o2.png');
        
        _this.load.atlas('flg13o1', window.baseUrl+'assets/gradeAssets/1.1A/flg13o1.png', window.baseUrl+'json/gradeJson/1.1A/flg13o1.json');
        _this.load.image('flg13o2', window.baseUrl+'assets/gradeAssets/1.1A/flg13o2.png');
        _this.load.image('flg13o3', window.baseUrl+'assets/gradeAssets/1.1A/flg13o3.png');
        
        _this.load.atlas('flg14o1', window.baseUrl+'assets/gradeAssets/1.1A/flg14o1.png', window.baseUrl+'json/gradeJson/1.1A/flg14o1.json');
        _this.load.image('flg14o2', window.baseUrl+'assets/gradeAssets/1.1A/flg14o2.png');
        _this.load.image('flg14o3', window.baseUrl+'assets/gradeAssets/1.1A/flg14o3.png');
        
        _this.load.atlas('flg15o1', window.baseUrl+'assets/gradeAssets/1.1A/flg15o1.png', window.baseUrl+'json/gradeJson/1.1A/flg15o1.json');
        _this.load.image('flg15o2', window.baseUrl+'assets/gradeAssets/1.1A/flg15o2.png');
        _this.load.image('flg15o3', window.baseUrl+'assets/gradeAssets/1.1A/flg15o3.png');
		
		
	},
	
	addgame2_1AAssets:function()
	{
		
		_this.load.image('Level21_bg1',window.baseUrl+'assets/gradeAssets/2.1A/bg1.png');
        _this.load.image('Level21_bg3',window.baseUrl+'assets/gradeAssets/2.1A/bg3.png');                          
        _this.load.image('Level21_sh',window.baseUrl+'assets/gradeAssets/2.1A/sh.png');
      
        _this.load.image('Level21_cloud',window.baseUrl+'assets/gradeAssets/2.1A/cloud.png');
        _this.load.image('Level21_cloud2',window.baseUrl+'assets/gradeAssets/2.1A/c2.png');
        _this.load.image('Level21_cloud3',window.baseUrl+'assets/gradeAssets/2.1A/cloud3.png');
        _this.load.image('Level21_cloud4',window.baseUrl+'assets/gradeAssets/2.1A/cloud4.png');
        _this.load.image('Level21_cloud5',window.baseUrl+'assets/gradeAssets/2.1A/cloud5.png');
        
        _this.load.atlas('Level21_giraffe',window.baseUrl+'assets/gradeAssets/2.1A/giraffe.png',window.baseUrl+'json/gradeJson/2.1A/giraffe.json');
        _this.load.atlas('Level21_elephant',window.baseUrl+'assets/gradeAssets/2.1A/elephant.png',window.baseUrl+'json/gradeJson/2.1A/elephant.json');
        _this.load.image('Level21_tree1',window.baseUrl+'assets/gradeAssets/2.1A/tree1.png');
        
        _this.load.atlas('Level21_bird1',window.baseUrl+'assets/gradeAssets/2.1A/bird1.png',window.baseUrl+'json/gradeJson/2.1A/bird1.json');
        _this.load.atlas('Level21_dog1',window.baseUrl+'assets/gradeAssets/2.1A/dog1.png',window.baseUrl+'json/gradeJson/2.1A/dog1.json');
        _this.load.atlas('Level21_cat',window.baseUrl+'assets/gradeAssets/2.1A/cat.png',window.baseUrl+'json/gradeJson/2.1A/cat.json');
        _this.load.image('Level21_house1',window.baseUrl+'assets/gradeAssets/2.1A/house1.png');
        
        _this.load.atlas('Level21_bluemug',window.baseUrl+'assets/gradeAssets/2.1A/bluemug.png',window.baseUrl+'json/gradeJson/2.1A/bluemug.json');
        _this.load.atlas('Level21_pinkpot',window.baseUrl+'assets/gradeAssets/2.1A/pinkpot.png',window.baseUrl+'json/gradeJson/2.1A/pinkpot.json');
        _this.load.image('Level21_chair1',window.baseUrl+'assets/gradeAssets/2.1A/chair1.png');
        _this.load.image('Level21_ladder1',window.baseUrl+'assets/gradeAssets/2.1A/ladder1.png');
        
        _this.load.image('Level21_sofa1',window.baseUrl+'assets/gradeAssets/2.1A/sofa1.png'); 
        _this.load.atlas('Level21_clock1',window.baseUrl+'assets/gradeAssets/2.1A/clock1.png',window.baseUrl+'json/gradeJson/2.1A/clock1.json');
        _this.load.atlas('Level21_book1',window.baseUrl+'assets/gradeAssets/2.1A/book1.png',window.baseUrl+'json/gradeJson/2.1A/book1.json');
        
        _this.load.atlas('Level21_elephant1',window.baseUrl+'assets/gradeAssets/2.1A/elephant1.png',window.baseUrl+'json/gradeJson/2.1A/elephant1.json');
        _this.load.atlas('Level21_bee1',window.baseUrl+'assets/gradeAssets/2.1A/bee1.png',window.baseUrl+'json/gradeJson/2.1A/bee1.json');
        
        _this.load.atlas('Level21_papaya1',window.baseUrl+'assets/gradeAssets/2.1A/papaya1.png',window.baseUrl+'json/gradeJson/2.1A/papaya1.json');
        _this.load.atlas('Level21_banana1',window.baseUrl+'assets/gradeAssets/2.1A/banana1.png',window.baseUrl+'json/gradeJson/2.1A/banana1.json');
        
        _this.load.atlas('Level21_key1',window.baseUrl+'assets/gradeAssets/2.1A/key1.png',window.baseUrl+'json/gradeJson/2.1A/key1.json');
        _this.load.atlas('Level21_key2',window.baseUrl+'assets/gradeAssets/2.1A/key2.png',window.baseUrl+'json/gradeJson/2.1A/key2.json');
        
        _this.load.atlas('Level21_dog2',window.baseUrl+'assets/gradeAssets/2.1A/dog2.png',window.baseUrl+'json/gradeJson/2.1A/dog2.json');
        _this.load.atlas('Level21_cat2',window.baseUrl+'assets/gradeAssets/2.1A/cat2.png',window.baseUrl+'json/gradeJson/2.1A/cat2.json');
        
        _this.load.atlas('Level21_dog3',window.baseUrl+'assets/gradeAssets/2.1A/dog3.png',window.baseUrl+'json/gradeJson/2.1A/dog3.json');
        _this.load.atlas('Level21_snake1',window.baseUrl+'assets/gradeAssets/2.1A/snake1.png',window.baseUrl+'json/gradeJson/2.1A/snake1.json');
        _this.load.image('Level21_sofa2',window.baseUrl+'assets/gradeAssets/2.1A/sofa2.png');
        
        _this.load.image('Level21_table1',window.baseUrl+'assets/gradeAssets/2.1A/table1.png');
        _this.load.atlas('Level21_cat3',window.baseUrl+'assets/gradeAssets/2.1A/cat3.png',window.baseUrl+'json/gradeJson/2.1A/cat3.json');
        _this.load.atlas('Level21_book2',window.baseUrl+'assets/gradeAssets/2.1A/book2.png',window.baseUrl+'json/gradeJson/2.1A/book2.json');
        
        _this.load.image('Level21_sofa3',window.baseUrl+'assets/gradeAssets/2.1A/sofa3.png');
        _this.load.atlas('Level21_scooter1',window.baseUrl+'assets/gradeAssets/2.1A/scooter1.png',window.baseUrl+'json/gradeJson/2.1A/scooter1.json');
        _this.load.atlas('Level21_car1',window.baseUrl+'assets/gradeAssets/2.1A/car1.png',window.baseUrl+'json/gradeJson/2.1A/car1.json');
        
        _this.load.image('Level21_house2',window.baseUrl+'assets/gradeAssets/2.1A/house2.png');
        _this.load.atlas('Level21_cat4',window.baseUrl+'assets/gradeAssets/2.1A/cat4.png',window.baseUrl+'json/gradeJson/2.1A/cat4.json');
        
        _this.load.image('Level21_tree2',window.baseUrl+'assets/gradeAssets/2.1A/tree2.png');
        _this.load.atlas('Level21_croc1',window.baseUrl+'assets/gradeAssets/2.1A/croc1.png',window.baseUrl+'json/gradeJson/2.1A/croc1.json');
        _this.load.atlas('Level21_bird2',window.baseUrl+'assets/gradeAssets/2.1A/bird2.png',window.baseUrl+'json/gradeJson/2.1A/bird2.json');
        
        _this.load.atlas('Level21_fish1',window.baseUrl+'assets/gradeAssets/2.1A/fish1.png',window.baseUrl+'json/gradeJson/2.1A/fish1.json');
        _this.load.atlas('Level21_cat5',window.baseUrl+'assets/gradeAssets/2.1A/cat5.png',window.baseUrl+'json/gradeJson/2.1A/cat5.json');
        
        _this.load.image('Level21_house3',window.baseUrl+'assets/gradeAssets/2.1A/house3.png');
        _this.load.atlas('Level21_sofa4',window.baseUrl+'assets/gradeAssets/2.1A/sofa4.png',window.baseUrl+'json/gradeJson/2.1A/sofa4.json');
        _this.load.atlas('Level21_scooter2',window.baseUrl+'assets/gradeAssets/2.1A/scooter2.png',window.baseUrl+'json/gradeJson/2.1A/scooter2.json');
        
        _this.load.image('Level21_basket1',window.baseUrl+'assets/gradeAssets/2.1A/basket1.png');
        _this.load.atlas('Level21_papaya2',window.baseUrl+'assets/gradeAssets/2.1A/papaya2.png',window.baseUrl+'json/gradeJson/2.1A/papaya2.json');
        
        _this.load.image('Level21_flower1',window.baseUrl+'assets/gradeAssets/2.1A/flower1.png');
        _this.load.atlas('Level21_pot2',window.baseUrl+'assets/gradeAssets/2.1A/pot2.png',window.baseUrl+'json/gradeJson/2.1A/pot2.json');
        _this.load.atlas('Level21_bee2',window.baseUrl+'assets/gradeAssets/2.1A/bee2.png',window.baseUrl+'json/gradeJson/2.1A/bee2.json');
        
        _this.load.image('Level21_books',window.baseUrl+'assets/gradeAssets/2.1A/books.png');
        _this.load.atlas('Level21_book3',window.baseUrl+'assets/gradeAssets/2.1A/book3.png',window.baseUrl+'json/gradeJson/2.1A/book3.json');
        
        _this.load.image('Level21_step1',window.baseUrl+'assets/gradeAssets/2.1A/step1.png');
        _this.load.atlas('Level21_mug1',window.baseUrl+'assets/gradeAssets/2.1A/mug1.png',window.baseUrl+'json/gradeJson/2.1A/mug1.json');
        _this.load.atlas('Level21_mug2',window.baseUrl+'assets/gradeAssets/2.1A/mug2.png',window.baseUrl+'json/gradeJson/2.1A/mug2.json');
        
        _this.load.image('Level21_table2',window.baseUrl+'assets/gradeAssets/2.1A/table2.png');
        _this.load.atlas('Level21_clock2',window.baseUrl+'assets/gradeAssets/2.1A/clock2.png',window.baseUrl+'json/gradeJson/2.1A/clock2.json');
        _this.load.atlas('Level21_book4',window.baseUrl+'assets/gradeAssets/2.1A/book4.png',window.baseUrl+'json/gradeJson/2.1A/book4.json');
        
        _this.load.atlas('Level21_cat44',window.baseUrl+'assets/gradeAssets/2.1A/cat44.png',window.baseUrl+'json/gradeJson/2.1A/cat44.json');
        _this.load.image('Level21_tree3',window.baseUrl+'assets/gradeAssets/2.1A/tree3.png');
        _this.load.image('Level21_z1',window.baseUrl+'assets/gradeAssets/2.1A/z1.png');
        _this.load.image('Level21_house4',window.baseUrl+'assets/gradeAssets/2.1A/house4.png');
        
        _this.load.atlas('Level21_mug3',window.baseUrl+'assets/gradeAssets/2.1A/mug3.png',window.baseUrl+'json/gradeJson/2.1A/mug3.json');
        
        _this.load.atlas('Level21_mug6',window.baseUrl+'assets/gradeAssets/2.1A/mug6.png',window.baseUrl+'json/gradeJson/2.1A/mug6.json');
        _this.load.image('Level21_cloud7',window.baseUrl+'assets/gradeAssets/2.1A/cloud7.png');
        _this.load.image('Level21_cloud8',window.baseUrl+'assets/gradeAssets/2.1A/cloud8.png');
        _this.load.image('Level21_scooter5',window.baseUrl+'assets/gradeAssets/2.1A/scooter5.png');
        _this.load.atlas('Level21_bird3',window.baseUrl+'assets/gradeAssets/2.1A/bird3.png',window.baseUrl+'json/gradeJson/2.1A/bird3.json');
        
        _this.load.image('Level21_sofa5',window.baseUrl+'assets/gradeAssets/2.1A/sofa5.png');
        _this.load.atlas('Level21_painting',window.baseUrl+'assets/gradeAssets/2.1A/painting.png',window.baseUrl+'json/gradeJson/2.1A/painting.json');
        
        _this.load.image('Level21_stand',window.baseUrl+'assets/gradeAssets/2.1A/stand.png');
        _this.load.atlas('Level21_drum',window.baseUrl+'assets/gradeAssets/2.1A/drum.png',window.baseUrl+'json/gradeJson/2.1A/drum.json');
        _this.load.atlas('Level21_pot4',window.baseUrl+'assets/gradeAssets/2.1A/pot4.png',window.baseUrl+'json/gradeJson/2.1A/pot4.json');
        
        
        _this.load.image('Level21_rope',window.baseUrl+'assets/gradeAssets/2.1A/rope.png');
        _this.load.atlas('Level21_kite',window.baseUrl+'assets/gradeAssets/2.1A/kite.png',window.baseUrl+'json/gradeJson/2.1A/kite.json');
        
        _this.load.atlas('Level21_trees',window.baseUrl+'assets/gradeAssets/2.1A/trees.png',window.baseUrl+'json/gradeJson/2.1A/trees.json');
        _this.load.atlas('Level21_catss',window.baseUrl+'assets/gradeAssets/2.1A/catss.png',window.baseUrl+'json/gradeJson/2.1A/catss.json');
        _this.load.atlas('Level21_treee',window.baseUrl+'assets/gradeAssets/2.1A/treee.png',window.baseUrl+'json/gradeJson/2.1A/treee.json');
        _this.load.atlas('Level21_treee1',window.baseUrl+'assets/gradeAssets/2.1A/treee1.png',window.baseUrl+'json/gradeJson/2.1A/treee1.json');
        

        
        _this.load.atlas('Level21_btn',window.baseUrl+'assets/gradeAssets/2.1A/btn.png',window.baseUrl+'json/gradeJson/2.1A/btn.json');
		
		
	},
	
	addgame2_1BAssets:function()
	{
		
		
		
		_this.load.image('Level21B_bg1',window.baseUrl+'assets/gradeAssets/2.1B/bg1.png');
      //  _this.load.image('Level21B_bg2',window.baseUrl+'assets/gradeAssets/2.1B/bg2.png');
        _this.load.image('Level21B_bg3',window.baseUrl+'assets/gradeAssets/2.1B/bg3.png');                          
        _this.load.image('Level21B_sh',window.baseUrl+'assets/gradeAssets/2.1B/sh.png');
         _this.load.image('Level21B_sh1',window.baseUrl+'assets/gradeAssets/2.1B/level2/sh1.png');
        _this.load.image('Level21B_cloud21',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud21.png');
        _this.load.image('Level21B_cloud22',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud22.png');
        _this.load.image('Level21B_cloud23',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud23.png');
        _this.load.image('Level21B_cloud24',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud24.png');
        _this.load.image('Level21B_cloud25',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud25.png');
        _this.load.image('Level21B_cloud26',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud26.png');
         _this.load.image('Level21B_cloud27',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud27.png');
         _this.load.image('Level21B_cloud28',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud28.png');
         _this.load.image('Level21B_cloud29',window.baseUrl+'assets/gradeAssets/2.1B/level2/cloud29.png');
       // _this.load.image('Level21B_tittleBaar',window.baseUrl+'assets/gradeAssets/2.1B/tittleBaar.png');
       // _this.load.atlas('Level21B_replay',window.baseUrl+'assets/gradeAssets/2.1B/reply.png' ,window.baseUrl+'json/gradeJson/2.1B/reply.json');
        
        //_this.load.atlas('Level21B_backbtn',window.baseUrl+'assets/gradeAssets/2.1B/backbtn.png' ,window.baseUrl+'json/gradeJson/2.1B/backbtn.json');
       // _this.load.atlas('Level21B_speaker',window.baseUrl+'assets/gradeAssets/2.1B/speaker.png' ,window.baseUrl+'json/gradeJson/2.1B/speaker.json');
       // _this.load.atlas('Level21B_starAnim',window.baseUrl+'assets/gradeAssets/2.1B/starAnim.png',window.baseUrl+'json/gradeJson/2.1B/starAnim.json');
        //_this.load.image('Level21B_cloud',window.baseUrl+'assets/gradeAssets/2.1B/cloud.png');
         _this.load.image('Level21B_cloud2',window.baseUrl+'assets/gradeAssets/2.1B/c2.png');
        // _this.load.image('Level21B_cloud3',window.baseUrl+'assets/gradeAssets/2.1B/cloud3.png');
         //_this.load.image('Level21B_cloud4',window.baseUrl+'assets/gradeAssets/2.1B/cloud4.png');
         //    _this.load.image('Level21B_cloud5',window.baseUrl+'assets/gradeAssets/2.1B/cloud5.png');
        
       
       // _this.load.image('Level21B_cloud7',window.baseUrl+'assets/gradeAssets/2.1B/cloud7.png');
        //_this.load.image('Level21B_cloud8',window.baseUrl+'assets/gradeAssets/2.1B/cloud8.png');
        
        
        //level2 assets/gradeAssets/2.1B
        _this.load.atlas('Level21B_building1',window.baseUrl+'assets/gradeAssets/2.1B/level2/building1.png',window.baseUrl+'json/gradeJson/2.1B/building1.json');
        _this.load.atlas('Level21B_building2',window.baseUrl+'assets/gradeAssets/2.1B/level2/building2.png',window.baseUrl+'json/gradeJson/2.1B/building2.json');
        
        _this.load.atlas('Level21B_ladder1',window.baseUrl+'assets/gradeAssets/2.1B/level2/ladder1.png',window.baseUrl+'json/gradeJson/2.1B/ladder1.json');
        _this.load.atlas('Level21B_ladder2',window.baseUrl+'assets/gradeAssets/2.1B/level2/ladder2.png',window.baseUrl+'json/gradeJson/2.1B/ladder2.json');
        
        _this.load.atlas('Level21B_giraffe21',window.baseUrl+'assets/gradeAssets/2.1B/level2/giraffe21.png',window.baseUrl+'json/gradeJson/2.1B/giraffe21.json');
        _this.load.atlas('Level21B_cat21',window.baseUrl+'assets/gradeAssets/2.1B/level2/cat21.png',window.baseUrl+'json/gradeJson/2.1B/cat21.json');
        
        _this.load.atlas('Level21B_bottle21',window.baseUrl+'assets/gradeAssets/2.1B/level2/bottle21.png',window.baseUrl+'json/gradeJson/2.1B/bottle21.json');
        _this.load.atlas('Level21B_bottle22',window.baseUrl+'assets/gradeAssets/2.1B/level2/bottle22.png',window.baseUrl+'json/gradeJson/2.1B/bottle22.json');
        
        _this.load.atlas('Level21B_gate21',window.baseUrl+'assets/gradeAssets/2.1B/level2/gate21.png',window.baseUrl+'json/gradeJson/2.1B/gate21.json');
        _this.load.atlas('Level21B_gate22',window.baseUrl+'assets/gradeAssets/2.1B/level2/gate22.png',window.baseUrl+'json/gradeJson/2.1B/gate22.json');
        
        _this.load.atlas('Level21B_road1',window.baseUrl+'assets/gradeAssets/2.1B/level2/road1.png',window.baseUrl+'json/gradeJson/2.1B/road1.json');
        _this.load.atlas('Level21B_road2',window.baseUrl+'assets/gradeAssets/2.1B/level2/road2.png',window.baseUrl+'json/gradeJson/2.1B/road2.json');
        _this.load.image('Level21B_tree21',window.baseUrl+'assets/gradeAssets/2.1B/level2/tree21.png');
        
        _this.load.atlas('Level21B_chair21',window.baseUrl+'assets/gradeAssets/2.1B/level2/chair21.png',window.baseUrl+'json/gradeJson/2.1B/chair21.json');
        _this.load.atlas('Level21B_chair22',window.baseUrl+'assets/gradeAssets/2.1B/level2/chair22.png',window.baseUrl+'json/gradeJson/2.1B/chair22.json');
        
        _this.load.atlas('Level21B_river21',window.baseUrl+'assets/gradeAssets/2.1B/level2/river21.png',window.baseUrl+'json/gradeJson/2.1B/river21.json');
        _this.load.atlas('Level21B_river22',window.baseUrl+'assets/gradeAssets/2.1B/level2/river22.png',window.baseUrl+'json/gradeJson/2.1B/river22.json');
        _this.load.image('Level21B_tree22',window.baseUrl+'assets/gradeAssets/2.1B/level2/tree22.png');
        
        _this.load.atlas('Level21B_dog21',window.baseUrl+'assets/gradeAssets/2.1B/level2/dog21.png',window.baseUrl+'json/gradeJson/2.1B/dog21.json');
        _this.load.atlas('Level21B_cat22',window.baseUrl+'assets/gradeAssets/2.1B/level2/cat22.png',window.baseUrl+'json/gradeJson/2.1B/cat22.json');
        
        _this.load.atlas('Level21B_shirt21',window.baseUrl+'assets/gradeAssets/2.1B/level2/shirt21.png',window.baseUrl+'json/gradeJson/2.1B/shirt21.json');
        _this.load.atlas('Level21B_shirt22',window.baseUrl+'assets/gradeAssets/2.1B/level2/shirt22.png',window.baseUrl+'json/gradeJson/2.1B/shirt22.json');
        
        _this.load.atlas('Level21B_snake21',window.baseUrl+'assets/gradeAssets/2.1B/level2/snake21.png',window.baseUrl+'json/gradeJson/2.1B/snake21.json');
        _this.load.atlas('Level21B_snake22',window.baseUrl+'assets/gradeAssets/2.1B/level2/snake22.png',window.baseUrl+'json/gradeJson/2.1B/snake22.json');
        
        _this.load.atlas('Level21B_bird21',window.baseUrl+'assets/gradeAssets/2.1B/level2/bird21.png',window.baseUrl+'json/gradeJson/2.1B/bird21.json');
        _this.load.atlas('Level21B_bird22',window.baseUrl+'assets/gradeAssets/2.1B/level2/bird22.png',window.baseUrl+'json/gradeJson/2.1B/bird22.json');
        
        _this.load.atlas('Level21B_fish21',window.baseUrl+'assets/gradeAssets/2.1B/level2/fish21.png',window.baseUrl+'json/gradeJson/2.1B/fish21.json');
        _this.load.atlas('Level21B_fish22',window.baseUrl+'assets/gradeAssets/2.1B/level2/fish22.png',window.baseUrl+'json/gradeJson/2.1B/fish22.json');
        
        _this.load.atlas('Level21B_snake23',window.baseUrl+'assets/gradeAssets/2.1B/level2/snake23.png',window.baseUrl+'json/gradeJson/2.1B/snake23.json');
        _this.load.atlas('Level21B_snake24',window.baseUrl+'assets/gradeAssets/2.1B/level2/snake24.png',window.baseUrl+'json/gradeJson/2.1B/snake24.json');
        
        _this.load.atlas('Level21B_book21',window.baseUrl+'assets/gradeAssets/2.1B/level2/book21.png',window.baseUrl+'json/gradeJson/2.1B/book21.json');
        _this.load.atlas('Level21B_book22',window.baseUrl+'assets/gradeAssets/2.1B/level2/book22.png',window.baseUrl+'json/gradeJson/2.1B/book22.json');
        
        _this.load.atlas('Level21B_tyre21',window.baseUrl+'assets/gradeAssets/2.1B/level2/tyre21.png',window.baseUrl+'json/gradeJson/2.1B/tyre21.json');
        _this.load.atlas('Level21B_tyre22',window.baseUrl+'assets/gradeAssets/2.1B/level2/tyre22.png',window.baseUrl+'json/gradeJson/2.1B/tyre22.json');
        _this.load.image('Level21B_scooter21',window.baseUrl+'assets/gradeAssets/2.1B/level2/scooter21.png');
        
        _this.load.atlas('Level21B_bread21',window.baseUrl+'assets/gradeAssets/2.1B/level2/bread21.png',window.baseUrl+'json/gradeJson/2.1B/bread21.json');
        _this.load.atlas('Level21B_bread22',window.baseUrl+'assets/gradeAssets/2.1B/level2/bread22.png',window.baseUrl+'json/gradeJson/2.1B/bread22.json');
        
        _this.load.atlas('Level21B_rope21',window.baseUrl+'assets/gradeAssets/2.1B/level2/rope21.png',window.baseUrl+'json/gradeJson/2.1B/rope21.json');
        _this.load.atlas('Level21B_rope22',window.baseUrl+'assets/gradeAssets/2.1B/level2/rope22.png',window.baseUrl+'json/gradeJson/2.1B/rope22.json');
        
        _this.load.atlas('Level21B_tree23',window.baseUrl+'assets/gradeAssets/2.1B/level2/tree23.png',window.baseUrl+'json/gradeJson/2.1B/tree23.json');
        _this.load.atlas('Level21B_tree24',window.baseUrl+'assets/gradeAssets/2.1B/level2/tree24.png',window.baseUrl+'json/gradeJson/2.1B/tree24.json');
        
        //_this.load.atlas('Level21B_btn',window.baseUrl+'assets/gradeAssets/2.1B/btn.png',window.baseUrl+'json/gradeJson/2.1B/btn.json');
				
	},
	
	addgame2_2Assets:function()
	{
		_this.load.image('Level22_bg',window.baseUrl+'assets/gradeAssets/2.2/commomAssets/bg.png');
        
        //game assets/gradeAssets/2.2
		_this.load.image('Level22_gamebg',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/gamebg.png');
        _this.load.atlas('Level22_gameBox',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/gameBox.png' ,window.baseUrl+'json/gradeJson/2.2/gameBox.json');
        _this.load.atlas('Level22_allimg',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/allimg2.png' ,window.baseUrl+'json/gradeJson/2.2/allimg2.json');
        _this.load.atlas('Level22_tickMark',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/tickMark.png' ,window.baseUrl+'json/gradeJson/2.2/tickMark.json');
        _this.load.image('Level22_croc',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/croc.png');       
        _this.load.image('Level22_glow',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/glow.png');
        
        //game items
        _this.load.image('Level22_Building',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/1.png');
        _this.load.image('Level22_OrangeHouse',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/2.png');
        _this.load.image('Level22_PurpleHouse',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/3.png');
        _this.load.image('Level22_BlueHouse',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/4.png');
        
        _this.load.image('Level22_LongStairs',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/5.png');
        _this.load.image('Level22_SecondLongestStairs',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/6.png');
        _this.load.image('Level22_MediumStairs',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/7.png');
        _this.load.image('Level22_ShortestStairs',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/8.png');
        
        _this.load.image('Level22_GreyDog',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/9.png');
        _this.load.image('Level22_WhiteDog',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/10.png');
        _this.load.image('Level22_BlackDog',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/11.png');
        _this.load.image('Level22_BrownDog',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/12.png');
        
        _this.load.image('Level22_OrangeSnake',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/13.png');
        _this.load.image('Level22_GreenDottedSnake',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/14.png');
        _this.load.image('Level22_RedSnake',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/15.png');
        _this.load.image('Level22_GreenSnake',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/16.png');
        
        _this.load.image('Level22_BrownBottle',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/17.png');
        _this.load.image('Level22_OrangeBottle',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/18.png');
        _this.load.image('Level22_BlackBottle',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/19.png');
        _this.load.image('Level22_BlueBottle',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/20.png');
        
        _this.load.image('Level22_LargeBox',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/21.png');
        _this.load.image('Level22_SecondLargestBox',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/22.png');
        _this.load.image('Level22_MediumBox',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/23.png');
        _this.load.image('Level22_SmallBox',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/24.png');
        
        _this.load.image('Level22_Giraffe',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/25.png');
        _this.load.image('Level22_Elephant',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/26.png');
        _this.load.image('Level22_Dog',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/27.png');
        _this.load.image('Level22_Cat',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/28.png');
        
        _this.load.image('Level22_Crane',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/29.png');
        _this.load.image('Level22_Crow',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/30.png');
        _this.load.image('Level22_Pigeon',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/31.png');
        _this.load.image('Level22_Sparrow',window.baseUrl+'assets/gradeAssets/2.2/gameAssets/32.png');
		
		
	},
	
	addgame2_3Assets:function()
	{
		/*_this.load.image('Level23_bg1',window.baseUrl+'assets/gradeAssets/2.3/bg1.png');
        _this.load.image('Level23_bg3',window.baseUrl+'assets/gradeAssets/2.3/bg3.png');
        //_this.load.image('Level23_title',window.baseUrl+'assets/gradeAssets/2.3/title.png');
       // _this.load.image('Level23_tittleBaar',window.baseUrl+'assets/gradeAssets/2.3/tittleBaar.png');
       // _this.load.atlas('Level23_replay',window.baseUrl+'assets/gradeAssets/2.3/reply.png' ,window.baseUrl+'json/gradeJson/2.3/reply.json');
       // _this.load.atlas('Level23_btn',window.baseUrl+'assets/gradeAssets/2.3/btn.png',window.baseUrl+'json/gradeJson/2.3/btn.json');
     
        //_this.load.atlas('Level23_backbtn',window.baseUrl+'assets/gradeAssets/2.3/backbtn.png' ,window.baseUrl+'json/gradeJson/2.3/backbtn.json');
        //_this.load.atlas('Level23_speaker',window.baseUrl+'assets/gradeAssets/2.3/speaker.png' ,window.baseUrl+'json/gradeJson/2.3/speaker.json');
        //_this.load.atlas('Level23_starAnim',window.baseUrl+'assets/gradeAssets/2.3/starAnim.png',window.baseUrl+'json/gradeJson/2.3/starAnim.json');
  
        _this.load.atlas('Level23_numberbtn1',window.baseUrl+'assets/gradeAssets/2.3/numberbtn1.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn1.json');
        _this.load.atlas('Level23_numberbtn2',window.baseUrl+'assets/gradeAssets/2.3/numberbtn2.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn2.json');
        _this.load.atlas('Level23_numberbtn3',window.baseUrl+'assets/gradeAssets/2.3/numberbtn3.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn3.json');
        _this.load.atlas('Level23_numberbtn4',window.baseUrl+'assets/gradeAssets/2.3/numberbtn4.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn4.json');
        _this.load.atlas('Level23_numberbtn5',window.baseUrl+'assets/gradeAssets/2.3/numberbtn5.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn5.json');
        _this.load.atlas('Level23_numberbtn6',window.baseUrl+'assets/gradeAssets/2.3/numberbtn6.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn6.json');
        _this.load.atlas('Level23_numberbtn7',window.baseUrl+'assets/gradeAssets/2.3/numberbtn7.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn7.json');
        _this.load.atlas('Level23_numberbtn8',window.baseUrl+'assets/gradeAssets/2.3/numberbtn8.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn8.json');
        _this.load.atlas('Level23_numberbtn9',window.baseUrl+'assets/gradeAssets/2.3/numberbtn9.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn9.json');
        
        _this.load.atlas('Level23_tree1',window.baseUrl+'assets/gradeAssets/2.3/tree1.png' ,window.baseUrl+'json/gradeJson/2.3/tree1.json');
        _this.load.image('Level23_leaf1',window.baseUrl+'assets/gradeAssets/2.3/leaf1.png');
        _this.load.image('Level23_line1',window.baseUrl+'assets/gradeAssets/2.3/line1.png');
        _this.load.atlas('Level23_leaf',window.baseUrl+'assets/gradeAssets/2.3/leaf.png' ,window.baseUrl+'json/gradeJson/2.3/leaf.json');
        
        _this.load.atlas('Level23_pencil',window.baseUrl+'assets/gradeAssets/2.3/pencil.png' ,window.baseUrl+'json/gradeJson/2.3/pencil.json');
        _this.load.image('Level23_cutter1',window.baseUrl+'assets/gradeAssets/2.3/cutter1.png');
        _this.load.atlas('Level23_cutters',window.baseUrl+'assets/gradeAssets/2.3/cutters.png' ,window.baseUrl+'json/gradeJson/2.3/cutters.json');
        
        _this.load.atlas('Level23_crocodile',window.baseUrl+'assets/gradeAssets/2.3/crocodile.png' ,window.baseUrl+'json/gradeJson/2.3/crocodile.json');
        _this.load.atlas('Level23_crocs',window.baseUrl+'assets/gradeAssets/2.3/crocs.png' ,window.baseUrl+'json/gradeJson/2.3/crocs.json');
        _this.load.image('Level23_line2',window.baseUrl+'assets/gradeAssets/2.3/line2.png');
        _this.load.image('Level23_crocodile1',window.baseUrl+'assets/gradeAssets/2.3/crocodile1.png');
        
        _this.load.atlas('Level23_snake',window.baseUrl+'assets/gradeAssets/2.3/Snake.png' ,window.baseUrl+'json/gradeJson/2.3/Snake.json');
        _this.load.atlas('Level23_buggs',window.baseUrl+'assets/gradeAssets/2.3/Buggs.png' ,window.baseUrl+'json/gradeJson/2.3/Buggs.json');
        _this.load.image('Level23_bug1',window.baseUrl+'assets/gradeAssets/2.3/bug1.png');
        
        _this.load.atlas('Level23_Window',window.baseUrl+'assets/gradeAssets/2.3/Window.png' ,window.baseUrl+'json/gradeJson/2.3/window.json');
        _this.load.atlas('Level23_palms',window.baseUrl+'assets/gradeAssets/2.3/palms.png' ,window.baseUrl+'json/gradeJson/2.3/palms.json');
        _this.load.image('Level23_palm1',window.baseUrl+'assets/gradeAssets/2.3/palm1.png');
        
        _this.load.atlas('Level23_petrol',window.baseUrl+'assets/gradeAssets/2.3/petrol.png' ,window.baseUrl+'json/gradeJson/2.3/petrol.json');
        _this.load.atlas('Level23_petrol111',window.baseUrl+'assets/gradeAssets/2.3/petrol111.png' ,window.baseUrl+'json/gradeJson/2.3/petrol111.json');
         _this.load.atlas('Level23_petrolbooth',window.baseUrl+'assets/gradeAssets/2.3/petrolbooth.png' ,window.baseUrl+'json/gradeJson/2.3/petrolbooth.json');
        
        _this.load.atlas('Level23_tablebox',window.baseUrl+'assets/gradeAssets/2.3/tablebox.png' ,window.baseUrl+'json/gradeJson/2.3/tablebox.json');
        
        _this.load.atlas('Level23_Can',window.baseUrl+'assets/gradeAssets/2.3/Can.png' ,window.baseUrl+'json/gradeJson/2.3/Can.json');
        _this.load.image('Level23_Line8',window.baseUrl+'assets/gradeAssets/2.3/Line8.png');
        
        _this.load.atlas('Level23_Shoes',window.baseUrl+'assets/gradeAssets/2.3/Shoes.png' ,window.baseUrl+'json/gradeJson/2.3/Shoes.json');
        _this.load.atlas('Level23_palm22',window.baseUrl+'assets/gradeAssets/2.3/palm22.png' ,window.baseUrl+'json/gradeJson/2.3/palm22.json');
        _this.load.image('Level23_Line9',window.baseUrl+'assets/gradeAssets/2.3/Line9.png');
        _this.load.image('Level23_palm2',window.baseUrl+'assets/gradeAssets/2.3/palm2.png');
        
        _this.load.atlas('Level23_soffa',window.baseUrl+'assets/gradeAssets/2.3/Soffa.png' ,window.baseUrl+'json/gradeJson/2.3/Soffa.json');
        _this.load.image('Level23_Line10',window.baseUrl+'assets/gradeAssets/2.3/Line10.png');      
                
        _this.load.atlas('Level23_Longtable',window.baseUrl+'assets/gradeAssets/2.3/Longtable.png' ,window.baseUrl+'json/gradeJson/2.3/Longtable.json');
        _this.load.image('Level23_Line11',window.baseUrl+'assets/gradeAssets/2.3/Line11.png');    
        
        _this.load.atlas('Level23_Suitcase',window.baseUrl+'assets/gradeAssets/2.3/Suitcase.png' ,window.baseUrl+'json/gradeJson/2.3/Suitcase.json');
        _this.load.image('Level23_Line12',window.baseUrl+'assets/gradeAssets/2.3/Line12.png'); 
        
        
          _this.load.atlas('Level23_Car',window.baseUrl+'assets/gradeAssets/2.3/Car.png' ,window.baseUrl+'json/gradeJson/2.3/Car.json');
        _this.load.atlas('Level23_hand',window.baseUrl+'assets/gradeAssets/2.3/hand.png' ,window.baseUrl+'json/gradeJson/2.3/hand.json');
        _this.load.image('Level23_Line13',window.baseUrl+'assets/gradeAssets/2.3/Line13.png');
        _this.load.image('Level23_hand1',window.baseUrl+'assets/gradeAssets/2.3/hand1.png');
        
         
          _this.load.atlas('Level23_gate',window.baseUrl+'assets/gradeAssets/2.3/gate.png' ,window.baseUrl+'json/gradeJson/2.3/gate.json');
	    _this.load.image('Level23_Line14',window.baseUrl+'assets/gradeAssets/2.3/Line14.png');
	        
	             _this.load.atlas('Level23_Table',window.baseUrl+'assets/gradeAssets/2.3/Table.png' ,window.baseUrl+'json/gradeJson/2.3/Table.json');
	    _this.load.image('Level23_Line15',window.baseUrl+'assets/gradeAssets/2.3/Line15.png');
	        
	        _this.load.atlas('Level23_rope',window.baseUrl+'assets/gradeAssets/2.3/rope.png' ,window.baseUrl+'json/gradeJson/2.3/rope.json');
	    _this.load.image('Level23_Line16',window.baseUrl+'assets/gradeAssets/2.3/Line16.png');
        
                _this.load.atlas('Level23_Chair',window.baseUrl+'assets/gradeAssets/2.3/Chair.png' ,window.baseUrl+'json/gradeJson/2.3/Chair.json');
        _this.load.atlas('Level23_hand11',window.baseUrl+'assets/gradeAssets/2.3/hand11.png' ,window.baseUrl+'json/gradeJson/2.3/hand11.json');
        _this.load.image('Level23_Line17',window.baseUrl+'assets/gradeAssets/2.3/Line17.png');
        _this.load.image('Level23_hand111',window.baseUrl+'assets/gradeAssets/2.3/hand111.png');
        
             _this.load.atlas('Level23_door',window.baseUrl+'assets/gradeAssets/2.3/door.png' ,window.baseUrl+'json/gradeJson/2.3/door.json');
        _this.load.image('Level23_Line18',window.baseUrl+'assets/gradeAssets/2.3/Line18.png');
        
        
            _this.load.atlas('Level23_flower',window.baseUrl+'assets/gradeAssets/2.3/flower.png' ,window.baseUrl+'json/gradeJson/2.3/flower.json');
        _this.load.image('Level23_Line19',window.baseUrl+'assets/gradeAssets/2.3/Line19.png');
        
        
            _this.load.atlas('Level23_flower1',window.baseUrl+'assets/gradeAssets/2.3/flower1.png' ,window.baseUrl+'json/gradeJson/2.3/flower1.json');
        _this.load.image('Level23_Line20',window.baseUrl+'assets/gradeAssets/2.3/Line20.png');
        
        
        
        //from 21
        _this.load.atlas('Level23_ladder',window.baseUrl+'assets/gradeAssets/2.3/ladder.png' ,window.baseUrl+'json/gradeJson/2.3/ladder.json');
        _this.load.atlas('Level23_feets',window.baseUrl+'assets/gradeAssets/2.3/feets.png' ,window.baseUrl+'json/gradeJson/2.3/feets.json');
        _this.load.atlas('Level23_feets101',window.baseUrl+'assets/gradeAssets/2.3/feets101.png' ,window.baseUrl+'json/gradeJson/2.3/feets101.json');
        _this.load.image('Level23_Line21',window.baseUrl+'assets/gradeAssets/2.3/Line21.png');
        _this.load.image('Level23_feet1',window.baseUrl+'assets/gradeAssets/2.3/feet1.png');
        _this.load.image('Level23_feet2',window.baseUrl+'assets/gradeAssets/2.3/feet2.png');
        
        _this.load.atlas('Level23_House',window.baseUrl+'assets/gradeAssets/2.3/House.png' ,window.baseUrl+'json/gradeJson/2.3/House.json');
        _this.load.image('Level23_Line22',window.baseUrl+'assets/gradeAssets/2.3/Line22.png');
        
        _this.load.atlas('Level23_gate2',window.baseUrl+'assets/gradeAssets/2.3/gate2.png' ,window.baseUrl+'json/gradeJson/2.3/gate2.json');
        _this.load.image('Level23_Line23',window.baseUrl+'assets/gradeAssets/2.3/Line23.png');
        
        _this.load.atlas('Level23_treee',window.baseUrl+'assets/gradeAssets/2.3/treee.png' ,window.baseUrl+'json/gradeJson/2.3/treee.json');
        _this.load.image('Level23_Line24',window.baseUrl+'assets/gradeAssets/2.3/Line24.png');
        
        _this.load.atlas('Level23_ladder2',window.baseUrl+'assets/gradeAssets/2.3/ladder2.png' ,window.baseUrl+'json/gradeJson/2.3/ladder2.json');
        _this.load.atlas('Level23_ropes11',window.baseUrl+'assets/gradeAssets/2.3/ropes11.png' ,window.baseUrl+'json/gradeJson/2.3/ropes11.json');
        _this.load.image('Level23_Line28',window.baseUrl+'assets/gradeAssets/2.3/Line28.png');
        _this.load.image('Level23_rope11',window.baseUrl+'assets/gradeAssets/2.3/rope11.png');
        
        _this.load.atlas('Level23_door111',window.baseUrl+'assets/gradeAssets/2.3/door111.png' ,window.baseUrl+'json/gradeJson/2.3/door111.json');
        _this.load.image('Level23_Line27',window.baseUrl+'assets/gradeAssets/2.3/Line27.png');
        
        _this.load.atlas('Level23_petrol111',window.baseUrl+'assets/gradeAssets/2.3/petrol111.png' ,window.baseUrl+'json/gradeJson/2.3/petrol111.json');
        _this.load.image('Level23_Line26',window.baseUrl+'assets/gradeAssets/2.3/Line26.png');
        
        _this.load.atlas('Level23_flower111',window.baseUrl+'assets/gradeAssets/2.3/flower111.png' ,window.baseUrl+'json/gradeJson/2.3/flower111.json');
        _this.load.image('Level23_Line25',window.baseUrl+'assets/gradeAssets/2.3/Line25.png');
        
        _this.load.atlas('Level23_car111',window.baseUrl+'assets/gradeAssets/2.3/car111.png' ,window.baseUrl+'json/gradeJson/2.3/car111.json');
        _this.load.atlas('Level23_ropes111',window.baseUrl+'assets/gradeAssets/2.3/ropes111.png' ,window.baseUrl+'json/gradeJson/2.3/ropes111.json');
        _this.load.image('Level23_Line32',window.baseUrl+'assets/gradeAssets/2.3/Line32.png');
        _this.load.image('Level23_rope111',window.baseUrl+'assets/gradeAssets/2.3/rope111.png');
        
        _this.load.atlas('Level23_gate21',window.baseUrl+'assets/gradeAssets/2.3/gate21.png' ,window.baseUrl+'json/gradeJson/2.3/gate21.json');
        _this.load.image('Level23_Line31',window.baseUrl+'assets/gradeAssets/2.3/Line31.png');
        
         _this.load.atlas('Level23_longtable111',window.baseUrl+'assets/gradeAssets/2.3/longtable111.png' ,window.baseUrl+'json/gradeJson/2.3/longtable111.json');
        _this.load.image('Level23_Line30',window.baseUrl+'assets/gradeAssets/2.3/Line30.png');
        
        _this.load.atlas('Level23_shoes111',window.baseUrl+'assets/gradeAssets/2.3/shoes111.png' ,window.baseUrl+'json/gradeJson/2.3/shoes111.json');
        _this.load.image('Level23_Line29',window.baseUrl+'assets/gradeAssets/2.3/Line29.png');
		
		/*_this.load.audio('Eng_23_1', window.baseUrl+'questionSounds/2.3/English/2.3_1.mp3');
        _this.load.audio('Eng_23_2', window.baseUrl+'questionSounds/2.3/English/2.3_2.mp3');
        _this.load.audio('Eng_23_3', window.baseUrl+'questionSounds/2.3/English/2.3_3.mp3');
        _this.load.audio('Eng_23_4', window.baseUrl+'questionSounds/2.3/English/2.3_4.mp3');
        _this.load.audio('Eng_23_5', window.baseUrl+'questionSounds/2.3/English/2.3_5.mp3');
        _this.load.audio('Eng_23_6', window.baseUrl+'questionSounds/2.3/English/2.3_6.mp3');
        _this.load.audio('Eng_23_7', window.baseUrl+'questionSounds/2.3/English/2.3_7.mp3');
        _this.load.audio('Eng_23_8', window.baseUrl+'questionSounds/2.3/English/2.3_8.mp3');
        _this.load.audio('Eng_23_4option', window.baseUrl+'questionSounds/2.3/English/2.3_4 option.mp3');
        
        
        _this.load.audio('Kan_23_1', window.baseUrl+'questionSounds/2.3/Kannada/2.3_1.mp3');
        _this.load.audio('Kan_23_2', window.baseUrl+'questionSounds/2.3/Kannada/2.3_2.mp3');
        _this.load.audio('Kan_23_3', window.baseUrl+'questionSounds/2.3/Kannada/2.3_3.mp3');
        _this.load.audio('Kan_23_4', window.baseUrl+'questionSounds/2.3/Kannada/2.3_4.mp3');
        _this.load.audio('Kan_23_5', window.baseUrl+'questionSounds/2.3/Kannada/2.3_5.mp3');
        _this.load.audio('Kan_23_6', window.baseUrl+'questionSounds/2.3/Kannada/2.3_6.mp3');
        _this.load.audio('Kan_23_7', window.baseUrl+'questionSounds/2.3/Kannada/2.3_7.mp3');
        _this.load.audio('Kan_23_8', window.baseUrl+'questionSounds/2.3/Kannada/2.3_8.mp3');
        
        _this.load.audio('Hin_23_1', window.baseUrl+'questionSounds/2.3/Hindi/2.3_1.mp3');
        _this.load.audio('Hin_23_2', window.baseUrl+'questionSounds/2.3/Hindi/2.3_2.mp3');
        _this.load.audio('Hin_23_3', window.baseUrl+'questionSounds/2.3/Hindi/2.3_3.mp3');
        _this.load.audio('Hin_23_4', window.baseUrl+'questionSounds/2.3/Hindi/2.3_4.mp3');
        _this.load.audio('Hin_23_5', window.baseUrl+'questionSounds/2.3/Hindi/2.3_5.mp3');
        _this.load.audio('Hin_23_6', window.baseUrl+'questionSounds/2.3/Hindi/2.3_6.mp3');
        _this.load.audio('Hin_23_7', window.baseUrl+'questionSounds/2.3/Hindi/2.3_7.mp3');
        _this.load.audio('Hin_23_8', window.baseUrl+'questionSounds/2.3/Hindi/2.3_8.mp3');*/



        _this.load.image('Level23_bg1',window.baseUrl+'assets/gradeAssets/2.3/bg1.png');
        _this.load.image('Level23_bg3',window.baseUrl+'assets/gradeAssets/2.3/bg3.png');

        this.load.atlas('Level23_jugg',window.baseUrl+'assets/gradeAssets/2.3/jugg.png' ,window.baseUrl+'json/gradeJson/2.3/jugg.json');
        this.load.atlas('Level23_boot',window.baseUrl+'assets/gradeAssets/2.3/boot.png' ,window.baseUrl+'json/gradeJson/2.3/boot.json');
        this.load.atlas('Level23_housenew',window.baseUrl+'assets/gradeAssets/2.3/housenew.png' ,window.baseUrl+'json/gradeJson/2.3/housenew.json');
        //_this.load.image('Level23_title',window.baseUrl+'assets/gradeAssets/2.3/title.png');
       // _this.load.image('Level23_tittleBaar',window.baseUrl+'assets/gradeAssets/2.3/tittleBaar.png');
       // _this.load.atlas('Level23_replay',window.baseUrl+'assets/gradeAssets/2.3/reply.png' ,window.baseUrl+'json/gradeJson/2.3/reply.json');
       // _this.load.atlas('Level23_btn',window.baseUrl+'assets/gradeAssets/2.3/btn.png',window.baseUrl+'json/gradeJson/2.3/btn.json');
     
        //_this.load.atlas('Level23_backbtn',window.baseUrl+'assets/gradeAssets/2.3/backbtn.png' ,window.baseUrl+'json/gradeJson/2.3/backbtn.json');
        //_this.load.atlas('Level23_speaker',window.baseUrl+'assets/gradeAssets/2.3/speaker.png' ,window.baseUrl+'json/gradeJson/2.3/speaker.json');
        //_this.load.atlas('Level23_starAnim',window.baseUrl+'assets/gradeAssets/2.3/starAnim.png',window.baseUrl+'json/gradeJson/2.3/starAnim.json');
  
        _this.load.atlas('Level23_numberbtn1',window.baseUrl+'assets/gradeAssets/2.3/numberbtn1.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn1.json');
        _this.load.atlas('Level23_numberbtn2',window.baseUrl+'assets/gradeAssets/2.3/numberbtn2.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn2.json');
        _this.load.atlas('Level23_numberbtn3',window.baseUrl+'assets/gradeAssets/2.3/numberbtn3.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn3.json');
        _this.load.atlas('Level23_numberbtn4',window.baseUrl+'assets/gradeAssets/2.3/numberbtn4.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn4.json');
        _this.load.atlas('Level23_numberbtn5',window.baseUrl+'assets/gradeAssets/2.3/numberbtn5.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn5.json');
        _this.load.atlas('Level23_numberbtn6',window.baseUrl+'assets/gradeAssets/2.3/numberbtn6.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn6.json');
        _this.load.atlas('Level23_numberbtn7',window.baseUrl+'assets/gradeAssets/2.3/numberbtn7.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn7.json');
        _this.load.atlas('Level23_numberbtn8',window.baseUrl+'assets/gradeAssets/2.3/numberbtn8.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn8.json');
        _this.load.atlas('Level23_numberbtn9',window.baseUrl+'assets/gradeAssets/2.3/numberbtn9.png' ,window.baseUrl+'json/gradeJson/2.3/numberbtn9.json');
        _this.load.atlas('calNum',window.baseUrl+'assets/gradeAssets/2.3/calNum.png' ,window.baseUrl+'json/gradeJson/2.3/calNum.json');
        
        _this.load.atlas('Level23_tree1',window.baseUrl+'assets/gradeAssets/2.3/tree1.png' ,window.baseUrl+'json/gradeJson/2.3/tree1.json');
        _this.load.image('Level23_leaf1',window.baseUrl+'assets/gradeAssets/2.3/leaf1.png');
        _this.load.image('Level23_line1',window.baseUrl+'assets/gradeAssets/2.3/line1.png');
        _this.load.atlas('Level23_leaf',window.baseUrl+'assets/gradeAssets/2.3/leaf.png' ,window.baseUrl+'json/gradeJson/2.3/leaf.json');
        
        _this.load.atlas('Level23_pencil',window.baseUrl+'assets/gradeAssets/2.3/pencil.png' ,window.baseUrl+'json/gradeJson/2.3/pencil.json');
        _this.load.image('Level23_cutter1',window.baseUrl+'assets/gradeAssets/2.3/cutter1.png');
        _this.load.atlas('Level23_cutters',window.baseUrl+'assets/gradeAssets/2.3/cutters.png' ,window.baseUrl+'json/gradeJson/2.3/cutters.json');
        
        _this.load.atlas('Level23_crocodile',window.baseUrl+'assets/gradeAssets/2.3/crocodile.png' ,window.baseUrl+'json/gradeJson/2.3/crocodile.json');
        _this.load.atlas('Level23_crocs',window.baseUrl+'assets/gradeAssets/2.3/crocs.png' ,window.baseUrl+'json/gradeJson/2.3/crocs.json');
        _this.load.image('Level23_line2',window.baseUrl+'assets/gradeAssets/2.3/line2.png');
        _this.load.image('Level23_crocodile1',window.baseUrl+'assets/gradeAssets/2.3/crocodile1.png');
        
        _this.load.atlas('Level23_snake',window.baseUrl+'assets/gradeAssets/2.3/Snake.png' ,window.baseUrl+'json/gradeJson/2.3/Snake.json');
        _this.load.atlas('Level23_buggs',window.baseUrl+'assets/gradeAssets/2.3/Buggs.png' ,window.baseUrl+'json/gradeJson/2.3/Buggs.json');
        _this.load.image('Level23_bug1',window.baseUrl+'assets/gradeAssets/2.3/bug1.png');
        
        _this.load.atlas('Level23_Window',window.baseUrl+'assets/gradeAssets/2.3/Window.png' ,window.baseUrl+'json/gradeJson/2.3/window.json');
        _this.load.atlas('Level23_palms',window.baseUrl+'assets/gradeAssets/2.3/palms.png' ,window.baseUrl+'json/gradeJson/2.3/palms.json');
        _this.load.image('Level23_palm1',window.baseUrl+'assets/gradeAssets/2.3/palm1.png');
        
        _this.load.atlas('Level23_petrol',window.baseUrl+'assets/gradeAssets/2.3/petrol.png' ,window.baseUrl+'json/gradeJson/2.3/petrol.json');
        _this.load.atlas('Level23_petrol111',window.baseUrl+'assets/gradeAssets/2.3/petrol111.png' ,window.baseUrl+'json/gradeJson/2.3/petrol111.json');
         _this.load.atlas('Level23_petrolbooth',window.baseUrl+'assets/gradeAssets/2.3/petrolbooth.png' ,window.baseUrl+'json/gradeJson/2.3/petrolbooth.json');
        
        _this.load.atlas('Level23_tablebox',window.baseUrl+'assets/gradeAssets/2.3/tablebox.png' ,window.baseUrl+'json/gradeJson/2.3/tablebox.json');
        
        _this.load.atlas('Level23_Can',window.baseUrl+'assets/gradeAssets/2.3/Can.png' ,window.baseUrl+'json/gradeJson/2.3/Can.json');
        _this.load.image('Level23_Line8',window.baseUrl+'assets/gradeAssets/2.3/Line8.png');
        
        _this.load.atlas('Level23_Shoes',window.baseUrl+'assets/gradeAssets/2.3/Shoes.png' ,window.baseUrl+'json/gradeJson/2.3/Shoes.json');
        _this.load.atlas('Level23_palm22',window.baseUrl+'assets/gradeAssets/2.3/palm22.png' ,window.baseUrl+'json/gradeJson/2.3/palm22.json');
        _this.load.image('Level23_Line9',window.baseUrl+'assets/gradeAssets/2.3/Line9.png');
        _this.load.image('Level23_palm2',window.baseUrl+'assets/gradeAssets/2.3/palm2.png');
        
        _this.load.atlas('Level23_soffa',window.baseUrl+'assets/gradeAssets/2.3/Soffa.png' ,window.baseUrl+'json/gradeJson/2.3/Soffa.json');
        _this.load.image('Level23_Line10',window.baseUrl+'assets/gradeAssets/2.3/Line10.png');      
                
        _this.load.atlas('Level23_Longtable',window.baseUrl+'assets/gradeAssets/2.3/Longtable.png' ,window.baseUrl+'json/gradeJson/2.3/Longtable.json');
        _this.load.image('Level23_Line11',window.baseUrl+'assets/gradeAssets/2.3/Line11.png');    
        
        _this.load.atlas('Level23_Suitcase',window.baseUrl+'assets/gradeAssets/2.3/Suitcase.png' ,window.baseUrl+'json/gradeJson/2.3/Suitcase.json');
        _this.load.image('Level23_Line12',window.baseUrl+'assets/gradeAssets/2.3/Line12.png'); 
        
        
          _this.load.atlas('Level23_Car',window.baseUrl+'assets/gradeAssets/2.3/Car.png' ,window.baseUrl+'json/gradeJson/2.3/Car.json');
        _this.load.atlas('Level23_hand',window.baseUrl+'assets/gradeAssets/2.3/hand.png' ,window.baseUrl+'json/gradeJson/2.3/hand.json');
        _this.load.image('Level23_Line13',window.baseUrl+'assets/gradeAssets/2.3/Line13.png');
        _this.load.image('Level23_hand1',window.baseUrl+'assets/gradeAssets/2.3/hand1.png');
        
         
          _this.load.atlas('Level23_gate',window.baseUrl+'assets/gradeAssets/2.3/gate.png' ,window.baseUrl+'json/gradeJson/2.3/gate.json');
	    _this.load.image('Level23_Line14',window.baseUrl+'assets/gradeAssets/2.3/Line14.png');
	        
	             _this.load.atlas('Level23_Table',window.baseUrl+'assets/gradeAssets/2.3/Table.png' ,window.baseUrl+'json/gradeJson/2.3/Table.json');
	    _this.load.image('Level23_Line15',window.baseUrl+'assets/gradeAssets/2.3/Line15.png');
	        
	        _this.load.atlas('Level23_rope',window.baseUrl+'assets/gradeAssets/2.3/rope.png' ,window.baseUrl+'json/gradeJson/2.3/rope.json');
	    _this.load.image('Level23_Line16',window.baseUrl+'assets/gradeAssets/2.3/Line16.png');
        
                _this.load.atlas('Level23_Chair',window.baseUrl+'assets/gradeAssets/2.3/Chair.png' ,window.baseUrl+'json/gradeJson/2.3/Chair.json');
        _this.load.atlas('Level23_hand11',window.baseUrl+'assets/gradeAssets/2.3/hand11.png' ,window.baseUrl+'json/gradeJson/2.3/hand11.json');
        _this.load.image('Level23_Line17',window.baseUrl+'assets/gradeAssets/2.3/Line17.png');
        _this.load.image('Level23_hand111',window.baseUrl+'assets/gradeAssets/2.3/hand111.png');
        
             _this.load.atlas('Level23_door',window.baseUrl+'assets/gradeAssets/2.3/door.png' ,window.baseUrl+'json/gradeJson/2.3/door.json');
        _this.load.image('Level23_Line18',window.baseUrl+'assets/gradeAssets/2.3/Line18.png');
        
        
            _this.load.atlas('Level23_flower',window.baseUrl+'assets/gradeAssets/2.3/flower.png' ,window.baseUrl+'json/gradeJson/2.3/flower.json');
        _this.load.image('Level23_Line19',window.baseUrl+'assets/gradeAssets/2.3/Line19.png');
        
        
            _this.load.atlas('Level23_flower1',window.baseUrl+'assets/gradeAssets/2.3/flower1.png' ,window.baseUrl+'json/gradeJson/2.3/flower1.json');
        _this.load.image('Level23_Line20',window.baseUrl+'assets/gradeAssets/2.3/Line20.png');
        
        
        
        //from 21
        _this.load.atlas('Level23_ladder',window.baseUrl+'assets/gradeAssets/2.3/ladder.png' ,window.baseUrl+'json/gradeJson/2.3/ladder.json');
        _this.load.atlas('Level23_feets',window.baseUrl+'assets/gradeAssets/2.3/feets.png' ,window.baseUrl+'json/gradeJson/2.3/feets.json');
        _this.load.atlas('Level23_feets101',window.baseUrl+'assets/gradeAssets/2.3/feets101.png' ,window.baseUrl+'json/gradeJson/2.3/feets101.json');
        _this.load.image('Level23_Line21',window.baseUrl+'assets/gradeAssets/2.3/Line21.png');
        _this.load.image('Level23_feet1',window.baseUrl+'assets/gradeAssets/2.3/feet1.png');
        _this.load.image('Level23_feet2',window.baseUrl+'assets/gradeAssets/2.3/feet2.png');
        
        _this.load.atlas('Level23_House',window.baseUrl+'assets/gradeAssets/2.3/House.png' ,window.baseUrl+'json/gradeJson/2.3/House.json');
        _this.load.image('Level23_Line22',window.baseUrl+'assets/gradeAssets/2.3/Line22.png');
        
        _this.load.atlas('Level23_gate2',window.baseUrl+'assets/gradeAssets/2.3/gate2.png' ,window.baseUrl+'json/gradeJson/2.3/gate2.json');
        _this.load.image('Level23_Line23',window.baseUrl+'assets/gradeAssets/2.3/Line23.png');
        
        _this.load.atlas('Level23_treee',window.baseUrl+'assets/gradeAssets/2.3/treee.png' ,window.baseUrl+'json/gradeJson/2.3/treee.json');
        _this.load.image('Level23_Line24',window.baseUrl+'assets/gradeAssets/2.3/Line24.png');
        
        _this.load.atlas('Level23_ladder2',window.baseUrl+'assets/gradeAssets/2.3/ladder2.png' ,window.baseUrl+'json/gradeJson/2.3/ladder2.json');
        _this.load.atlas('Level23_ropes11',window.baseUrl+'assets/gradeAssets/2.3/ropes11.png' ,window.baseUrl+'json/gradeJson/2.3/ropes11.json');
        _this.load.image('Level23_Line28',window.baseUrl+'assets/gradeAssets/2.3/Line28.png');
        _this.load.image('Level23_rope11',window.baseUrl+'assets/gradeAssets/2.3/rope11.png');
        
        _this.load.atlas('Level23_door111',window.baseUrl+'assets/gradeAssets/2.3/door111.png' ,window.baseUrl+'json/gradeJson/2.3/door111.json');
        _this.load.image('Level23_Line27',window.baseUrl+'assets/gradeAssets/2.3/Line27.png');
        
        _this.load.atlas('Level23_petrol111',window.baseUrl+'assets/gradeAssets/2.3/petrol111.png' ,window.baseUrl+'json/gradeJson/2.3/petrol111.json');
        _this.load.image('Level23_Line26',window.baseUrl+'assets/gradeAssets/2.3/Line26.png');
        
        _this.load.atlas('Level23_flower111',window.baseUrl+'assets/gradeAssets/2.3/flower111.png' ,window.baseUrl+'json/gradeJson/2.3/flower111.json');
        _this.load.image('Level23_Line25',window.baseUrl+'assets/gradeAssets/2.3/Line25.png');
        
        _this.load.atlas('Level23_car111',window.baseUrl+'assets/gradeAssets/2.3/car111.png' ,window.baseUrl+'json/gradeJson/2.3/car111.json');
        _this.load.atlas('Level23_ropes111',window.baseUrl+'assets/gradeAssets/2.3/ropes111.png' ,window.baseUrl+'json/gradeJson/2.3/ropes111.json');
        _this.load.image('Level23_Line32',window.baseUrl+'assets/gradeAssets/2.3/Line32.png');
        _this.load.image('Level23_rope111',window.baseUrl+'assets/gradeAssets/2.3/rope111.png');
        
        _this.load.atlas('Level23_gate21',window.baseUrl+'assets/gradeAssets/2.3/gate21.png' ,window.baseUrl+'json/gradeJson/2.3/gate21.json');
        _this.load.image('Level23_Line31',window.baseUrl+'assets/gradeAssets/2.3/Line31.png');
        
         _this.load.atlas('Level23_longtable111',window.baseUrl+'assets/gradeAssets/2.3/longtable111.png' ,window.baseUrl+'json/gradeJson/2.3/longtable111.json');
        _this.load.image('Level23_Line30',window.baseUrl+'assets/gradeAssets/2.3/Line30.png');
        
        _this.load.atlas('Level23_shoes111',window.baseUrl+'assets/gradeAssets/2.3/shoes111.png' ,window.baseUrl+'json/gradeJson/2.3/shoes111.json');
        _this.load.image('Level23_Line29',window.baseUrl+'assets/gradeAssets/2.3/Line29.png');
		
		/*_this.load.audio('Eng_23_1', window.baseUrl+'questionSounds/2.3/English/2.3_1.mp3');
        _this.load.audio('Eng_23_2', window.baseUrl+'questionSounds/2.3/English/2.3_2.mp3');
        _this.load.audio('Eng_23_3', window.baseUrl+'questionSounds/2.3/English/2.3_3.mp3');
        _this.load.audio('Eng_23_4', window.baseUrl+'questionSounds/2.3/English/2.3_4.mp3');
        _this.load.audio('Eng_23_5', window.baseUrl+'questionSounds/2.3/English/2.3_5.mp3');
        _this.load.audio('Eng_23_6', window.baseUrl+'questionSounds/2.3/English/2.3_6.mp3');
        _this.load.audio('Eng_23_7', window.baseUrl+'questionSounds/2.3/English/2.3_7.mp3');
        _this.load.audio('Eng_23_8', window.baseUrl+'questionSounds/2.3/English/2.3_8.mp3');
        _this.load.audio('Eng_23_4option', window.baseUrl+'questionSounds/2.3/English/2.3_4 option.mp3');
        
        
        _this.load.audio('Kan_23_1', window.baseUrl+'questionSounds/2.3/Kannada/2.3_1.mp3');
        _this.load.audio('Kan_23_2', window.baseUrl+'questionSounds/2.3/Kannada/2.3_2.mp3');
        _this.load.audio('Kan_23_3', window.baseUrl+'questionSounds/2.3/Kannada/2.3_3.mp3');
        _this.load.audio('Kan_23_4', window.baseUrl+'questionSounds/2.3/Kannada/2.3_4.mp3');
        _this.load.audio('Kan_23_5', window.baseUrl+'questionSounds/2.3/Kannada/2.3_5.mp3');
        _this.load.audio('Kan_23_6', window.baseUrl+'questionSounds/2.3/Kannada/2.3_6.mp3');
        _this.load.audio('Kan_23_7', window.baseUrl+'questionSounds/2.3/Kannada/2.3_7.mp3');
        _this.load.audio('Kan_23_8', window.baseUrl+'questionSounds/2.3/Kannada/2.3_8.mp3');
        
        _this.load.audio('Hin_23_1', window.baseUrl+'questionSounds/2.3/Hindi/2.3_1.mp3');
        _this.load.audio('Hin_23_2', window.baseUrl+'questionSounds/2.3/Hindi/2.3_2.mp3');
        _this.load.audio('Hin_23_3', window.baseUrl+'questionSounds/2.3/Hindi/2.3_3.mp3');
        _this.load.audio('Hin_23_4', window.baseUrl+'questionSounds/2.3/Hindi/2.3_4.mp3');
        _this.load.audio('Hin_23_5', window.baseUrl+'questionSounds/2.3/Hindi/2.3_5.mp3');
        _this.load.audio('Hin_23_6', window.baseUrl+'questionSounds/2.3/Hindi/2.3_6.mp3');
        _this.load.audio('Hin_23_7', window.baseUrl+'questionSounds/2.3/Hindi/2.3_7.mp3');
        _this.load.audio('Hin_23_8', window.baseUrl+'questionSounds/2.3/Hindi/2.3_8.mp3');*/
	},
	
	addgame3_1Assets:function()
	{
		_this.load.image('Level31_bg1',window.baseUrl+'assets/gradeAssets/3.1/bg1.png');
        _this.load.image('Level31_bg3',window.baseUrl+'assets/gradeAssets/3.1/bg3.png');
       // _this.load.image('Level31_tittleBaar',window.baseUrl+'assets/gradeAssets/3.1/tittleBaar.png');
       // _this.load.atlas('Level31_replay',window.baseUrl+'assets/gradeAssets/3.1/reply.png' ,window.baseUrl+'json/gradeJson/3.1/reply.json');
       // _this.load.atlas('Level31_btn',window.baseUrl+'assets/gradeAssets/3.1/btn.png' ,window.baseUrl+'json/gradeJson/3.1/btn.json');
       // _this.load.atlas('Level31_backbtn',window.baseUrl+'assets/gradeAssets/3.1/backbtn.png' ,window.baseUrl+'json/gradeJson/3.1/backbtn.json');
       // _this.load.atlas('Level31_speaker',window.baseUrl+'assets/gradeAssets/3.1/speaker.png' ,window.baseUrl+'json/gradeJson/3.1/speaker.json');
       // _this.load.atlas('Level31_starAnim',window.baseUrl+'assets/gradeAssets/3.1/starAnim.png',window.baseUrl+'json/gradeJson/3.1/starAnim.json');
        _this.load.image('Level31_sh1',window.baseUrl+'assets/gradeAssets/3.1/sh1.png');
        _this.load.image('Level31_sh2',window.baseUrl+'assets/gradeAssets/3.1/sh2.png');
        _this.load.image('Level31_sh3',window.baseUrl+'assets/gradeAssets/3.1/sh3.png');
        _this.load.image('Level31_sh4',window.baseUrl+'assets/gradeAssets/3.1/sh4.png');
        _this.load.image('Level31_sh5',window.baseUrl+'assets/gradeAssets/3.1/sh5.png');
        _this.load.image('Level31_sh6',window.baseUrl+'assets/gradeAssets/3.1/sh6.png');
        _this.load.image('Level31_sh7',window.baseUrl+'assets/gradeAssets/3.1/sh7.png');
        _this.load.image('Level31_sh8',window.baseUrl+'assets/gradeAssets/3.1/sh8.png');
        _this.load.image('Level31_sh9',window.baseUrl+'assets/gradeAssets/3.1/sh9.png');
        _this.load.image('Level31_sh10',window.baseUrl+'assets/gradeAssets/3.1/sh10.png');
        _this.load.image('Level31_sh11',window.baseUrl+'assets/gradeAssets/3.1/sh11.png');
        //_this.load.image('Level31_sh12',window.baseUrl+'assets/gradeAssets/3.1/sh12.png');
        _this.load.image('Level31_sh13',window.baseUrl+'assets/gradeAssets/3.1/sh13.png');
        _this.load.image('Level31_sh14',window.baseUrl+'assets/gradeAssets/3.1/sh14.png');
        _this.load.image('Level31_sh15',window.baseUrl+'assets/gradeAssets/3.1/sh15.png');
        _this.load.image('Level31_sh16',window.baseUrl+'assets/gradeAssets/3.1/sh16.png');
        _this.load.image('Level31_sh17',window.baseUrl+'assets/gradeAssets/3.1/sh17.png');
        _this.load.image('Level31_sh18',window.baseUrl+'assets/gradeAssets/3.1/sh18.png');
        _this.load.image('Level31_sh19',window.baseUrl+'assets/gradeAssets/3.1/sh19.png');
        _this.load.image('Level31_sh20',window.baseUrl+'assets/gradeAssets/3.1/sh20.png');
        _this.load.image('Level31_sh21',window.baseUrl+'assets/gradeAssets/3.1/sh21.png');
        _this.load.image('Level31_sh22',window.baseUrl+'assets/gradeAssets/3.1/sh22.png');
        _this.load.image('Level31_sh23',window.baseUrl+'assets/gradeAssets/3.1/sh23.png');
        _this.load.image('Level31_sh24',window.baseUrl+'assets/gradeAssets/3.1/sh24.png');
        
        _this.load.atlas('Level31_watermelon',window.baseUrl+'assets/gradeAssets/3.1/watermelon.png' ,window.baseUrl+'json/gradeJson/3.1/watermelon.json');
        _this.load.atlas('Level31_cherry',window.baseUrl+'assets/gradeAssets/3.1/cherry.png' ,window.baseUrl+'json/gradeJson/3.1/cherry.json');

        _this.load.atlas('Level31_leaf1',window.baseUrl+'assets/gradeAssets/3.1/leaf1.png' ,window.baseUrl+'json/gradeJson/3.1/leaf1.json');
        _this.load.atlas('Level31_bottle1',window.baseUrl+'assets/gradeAssets/3.1/bottle1.png' ,window.baseUrl+'json/gradeJson/3.1/bottle1.json');

        _this.load.atlas('Level31_crow1',window.baseUrl+'assets/gradeAssets/3.1/crow1.png' ,window.baseUrl+'json/gradeJson/3.1/crow1.json');
        _this.load.atlas('Level31_lizard1',window.baseUrl+'assets/gradeAssets/3.1/lizard1.png' ,window.baseUrl+'json/gradeJson/3.1/lizard1.json');
        
        _this.load.atlas('Level31_car1',window.baseUrl+'assets/gradeAssets/3.1/car1.png' ,window.baseUrl+'json/gradeJson/3.1/car1.json');
        _this.load.atlas('Level31_chair1',window.baseUrl+'assets/gradeAssets/3.1/chair1.png' ,window.baseUrl+'json/gradeJson/3.1/chair1.json');
         
        _this.load.atlas('Level31_dog1',window.baseUrl+'assets/gradeAssets/3.1/dog1.png' ,window.baseUrl+'json/gradeJson/3.1/dog1.json');
        _this.load.atlas('Level31_bird1',window.baseUrl+'assets/gradeAssets/3.1/bird1.png' ,window.baseUrl+'json/gradeJson/3.1/bird1.json');
        
        _this.load.atlas('Level31_bee1',window.baseUrl+'assets/gradeAssets/3.1/bee1.png' ,window.baseUrl+'json/gradeJson/3.1/bee1.json');
        _this.load.atlas('Level31_elephant1',window.baseUrl+'assets/gradeAssets/3.1/elephant1.png' ,window.baseUrl+'json/gradeJson/3.1/elephant1.json');
        
        _this.load.atlas('Level31_bottle2',window.baseUrl+'assets/gradeAssets/3.1/bottle2.png' ,window.baseUrl+'json/gradeJson/3.1/bottle2.json');
        _this.load.atlas('Level31_key1',window.baseUrl+'assets/gradeAssets/3.1/key1.png' ,window.baseUrl+'json/gradeJson/3.1/key1.json');
        
        _this.load.atlas('Level31_suitcase',window.baseUrl+'assets/gradeAssets/3.1/suitcase.png' ,window.baseUrl+'json/gradeJson/3.1/suitcase.json');
        _this.load.atlas('Level31_spanner',window.baseUrl+'assets/gradeAssets/3.1/spanner.png' ,window.baseUrl+'json/gradeJson/3.1/spanner.json');
        
        _this.load.atlas('Level31_scooter1',window.baseUrl+'assets/gradeAssets/3.1/scooter1.png' ,window.baseUrl+'json/gradeJson/3.1/scooter1.json');
        _this.load.atlas('Level31_bulb1',window.baseUrl+'assets/gradeAssets/3.1/bulb1.png' ,window.baseUrl+'json/gradeJson/3.1/bulb1.json');
        
        _this.load.atlas('Level31_tree1',window.baseUrl+'assets/gradeAssets/3.1/tree1.png' ,window.baseUrl+'json/gradeJson/3.1/tree1.json');
        _this.load.atlas('Level31_bird2',window.baseUrl+'assets/gradeAssets/3.1/bird2.png' ,window.baseUrl+'json/gradeJson/3.1/bird2.json');
        
        _this.load.atlas('Level31_croc1',window.baseUrl+'assets/gradeAssets/3.1/croc1.png' ,window.baseUrl+'json/gradeJson/3.1/croc1.json');
        _this.load.atlas('Level31_snake1',window.baseUrl+'assets/gradeAssets/3.1/snake1.png' ,window.baseUrl+'json/gradeJson/3.1/snake1.json');
        
        _this.load.atlas('Level31_book1',window.baseUrl+'assets/gradeAssets/3.1/book1.png' ,window.baseUrl+'json/gradeJson/3.1/book1.json');
        _this.load.atlas('Level31_bread1',window.baseUrl+'assets/gradeAssets/3.1/bread1.png' ,window.baseUrl+'json/gradeJson/3.1/bread1.json');
		
		
		
		/*_this.load.audio('goingdown', window.baseUrl+'questionSounds/3.1/goingdown.mp3');
        _this.load.audio('goingup', window.baseUrl+'questionSounds/3.1/goingup.mp3');
        _this.load.audio('E1_31a', window.baseUrl+'questionSounds/3.1/E1a.mp3');
        _this.load.audio('E1_31b', window.baseUrl+'questionSounds/3.1/E1b.mp3');
        _this.load.audio('H1_31a', window.baseUrl+'questionSounds/3.1/H1a.mp3');
        _this.load.audio('H1_31b', window.baseUrl+'questionSounds/3.1/H1b.mp3');
        _this.load.audio('K1_31a', window.baseUrl+'questionSounds/3.1/K1a.mp3');
        _this.load.audio('K1_31b', window.baseUrl+'questionSounds/3.1/K1b.mp3');*/
	},
	
	addgame3_2AAssets:function()
	{
		/*//game assets.
        _this.load.image('Level32A_gameBg',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/gameBg.png');
        
        _this.load.image('Level32A_weight1',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/weight1.png');
        _this.load.image('Level32A_weight2',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/weight2.png');
        _this.load.image('Level32A_weight3',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/weight3.png');
        
        _this.load.atlas('Level32A_Can',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Can.png',window.baseUrl+'json/gradeJson/3.2A/Can.json');
        _this.load.atlas('Level32A_Carrot',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Carot.png',window.baseUrl+'json/gradeJson/3.2A/Carot.json');
        _this.load.atlas('Level32A_Coin',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Coin.png',window.baseUrl+'json/gradeJson/3.2A/Coin.json');
        _this.load.atlas('Level32A_Ball',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Ball.png',window.baseUrl+'json/gradeJson/3.2A/Ball.json');
        _this.load.atlas('Level32A_Book',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Book.png',window.baseUrl+'json/gradeJson/3.2A/Book.json');
        _this.load.atlas('Level32A_Banana',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Banana.png',window.baseUrl+'json/gradeJson/3.2A/Banana.json');
        _this.load.atlas('Level32A_Comb',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/comb.png',window.baseUrl+'json/gradeJson/3.2A/comb.json');
        _this.load.atlas('Level32A_Eraser',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/eraser.png',window.baseUrl+'json/gradeJson/3.2A/eraser.json');
        _this.load.atlas('Level32A_Eraser2',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/eraser2.png',window.baseUrl+'json/gradeJson/3.2A/eraser2.json');
        _this.load.atlas('Level32A_Glass',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Glass.png',window.baseUrl+'json/gradeJson/3.2A/Glass.json');
        _this.load.atlas('Level32A_Glass2',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Glass2.png',window.baseUrl+'json/gradeJson/3.2A/Glass2.json');
        _this.load.atlas('Level32A_Mug',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Mug.png',window.baseUrl+'json/gradeJson/3.2A/Mug.json');
        _this.load.atlas('Level32A_Key',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Key.png',window.baseUrl+'json/gradeJson/3.2A/Key.json');
        _this.load.atlas('Level32A_Pappaya',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Pappaya.png',window.baseUrl+'json/gradeJson/3.2A/Pappaya.json');
        _this.load.atlas('Level32A_Pencil',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Pencil.png',window.baseUrl+'json/gradeJson/3.2A/Pencil.json');
        _this.load.atlas('Level32A_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.2A/ScrewDriver.json');
        _this.load.atlas('Level32A_Shoe',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Shoe.png',window.baseUrl+'json/gradeJson/3.2A/Shoe.json');
 
        
        _this.load.image('Level32A_level2Bg',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/level2/level2Bg.png');
        _this.load.image('Level32A_txtbox',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/level2/box.png');
        _this.load.atlas('Level32A_numbg',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/level2/numbg.png',window.baseUrl+'json/gradeJson/3.2A/numbg.json');
        _this.load.atlas('Level32A_rightBtn',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/level2/rightBtn.png',window.baseUrl+'json/gradeJson/3.2A/rightBtn.json');
        _this.load.atlas('Level32A_wrongBtn',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/level2/wrongBtn.png',window.baseUrl+'json/gradeJson/3.2A/wrongBtn.json');
		
		
		_this.load.audio('slide', window.baseUrl+'questionSounds/3.2A/slide.mp3');
        
        
       /* _this.load.audio('ElevelD', window.baseUrl+'questionSounds/3.2A/ElevelD.mp3');
        _this.load.audio('HlevelD', window.baseUrl+'questionSounds/3.2A/HlevelD.mp3');
        _this.load.audio('KlevelD', window.baseUrl+'questionSounds/3.2A/KlevelD.mp3');
        _this.load.audio('ElevelCa', window.baseUrl+'questionSounds/3.2A/ElevelCa.mp3');
        _this.load.audio('ElevelCb', window.baseUrl+'questionSounds/3.2A/ElevelCb.mp3');
        _this.load.audio('HlevelCa', window.baseUrl+'questionSounds/3.2A/HlevelCa.mp3');
        _this.load.audio('HlevelCb', window.baseUrl+'questionSounds/3.2A/HlevelCb.mp3');
        _this.load.audio('KlevelCa', window.baseUrl+'questionSounds/3.2A/KlevelCa.mp3');
        _this.load.audio('KlevelCb', window.baseUrl+'questionSounds/3.2A/KlevelCb.mp3');
        
        _this.load.audio('Eng_32A1', window.baseUrl+'questionSounds/3.2A/Eng_3.2A1.mp3');
        _this.load.audio('Eng_32A2', window.baseUrl+'questionSounds/3.2A/Eng_3.2A2.mp3');
        _this.load.audio('Hin_32A1', window.baseUrl+'questionSounds/3.2A/Hin_3.2A1.mp3');
        _this.load.audio('Hin_32A2', window.baseUrl+'questionSounds/3.2A/Hin_3.2A2.mp3');
        _this.load.audio('Kan_32A1', window.baseUrl+'questionSounds/3.2A/Kan_3.2A1.mp3');
        _this.load.audio('Kan_32A2', window.baseUrl+'questionSounds/3.2A/Kan_3.2A2.mp3');*/


        //game assets.
        _this.load.image('Level32A_gameBg',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/gameBg.png');
        
        _this.load.image('Level32A_weight1',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/weight1.png');
        _this.load.image('Level32A_weight2',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/weight2.png');
        _this.load.image('Level32A_weight3',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/weight3.png');
        
        _this.load.atlas('Level32A_Can',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Can.png',window.baseUrl+'json/gradeJson/3.2A/Can.json');
        _this.load.atlas('Level32A_Carrot',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Carot.png',window.baseUrl+'json/gradeJson/3.2A/Carot.json');
        _this.load.atlas('Level32A_Coin',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Coin.png',window.baseUrl+'json/gradeJson/3.2A/Coin.json');
        _this.load.atlas('Level32A_Ball',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Ball.png',window.baseUrl+'json/gradeJson/3.2A/Ball.json');
        _this.load.atlas('Level32A_Book',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Book.png',window.baseUrl+'json/gradeJson/3.2A/Book.json');
        _this.load.atlas('Level32A_Banana',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Banana.png',window.baseUrl+'json/gradeJson/3.2A/Banana.json');
        _this.load.atlas('Level32A_Comb',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/comb.png',window.baseUrl+'json/gradeJson/3.2A/comb.json');
        _this.load.atlas('Level32A_Eraser',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/eraser.png',window.baseUrl+'json/gradeJson/3.2A/eraser.json');
        _this.load.atlas('Level32A_Eraser2',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/eraser2.png',window.baseUrl+'json/gradeJson/3.2A/eraser2.json');
        _this.load.atlas('Level32A_Glass',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Glass.png',window.baseUrl+'json/gradeJson/3.2A/Glass.json');
        _this.load.atlas('Level32A_Glass2',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Glass2.png',window.baseUrl+'json/gradeJson/3.2A/Glass2.json');
        _this.load.atlas('Level32A_Mug',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Mug.png',window.baseUrl+'json/gradeJson/3.2A/Mug.json');
        _this.load.atlas('Level32A_Key',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Key.png',window.baseUrl+'json/gradeJson/3.2A/Key.json');
        _this.load.atlas('Level32A_Pappaya',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Pappaya.png',window.baseUrl+'json/gradeJson/3.2A/Pappaya.json');
        _this.load.atlas('Level32A_Pencil',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Pencil.png',window.baseUrl+'json/gradeJson/3.2A/Pencil.json');
        _this.load.atlas('Level32A_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.2A/ScrewDriver.json');
        _this.load.atlas('Level32A_Shoe',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/Shoe.png',window.baseUrl+'json/gradeJson/3.2A/Shoe.json');
 
        
        _this.load.image('Level32A_level2Bg',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/level2/level2Bg.png');
        _this.load.image('Level32A_txtbox',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/level2/box.png');
        _this.load.atlas('Level32A_numbg',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/level2/numbg.png',window.baseUrl+'json/gradeJson/3.2A/numbg.json');
        _this.load.atlas('Level32A_rightBtn',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/level2/rightBtn.png',window.baseUrl+'json/gradeJson/3.2A/rightBtn.json');
        _this.load.atlas('Level32A_wrongBtn',window.baseUrl+'assets/gradeAssets/3.2A/gameAssets/level2/wrongBtn.png',window.baseUrl+'json/gradeJson/3.2A/wrongBtn.json');
		
		
		
        
        
       /* _this.load.audio('ElevelD', window.baseUrl+'questionSounds/3.2A/ElevelD.mp3');
        _this.load.audio('HlevelD', window.baseUrl+'questionSounds/3.2A/HlevelD.mp3');
        _this.load.audio('KlevelD', window.baseUrl+'questionSounds/3.2A/KlevelD.mp3');
        _this.load.audio('ElevelCa', window.baseUrl+'questionSounds/3.2A/ElevelCa.mp3');
        _this.load.audio('ElevelCb', window.baseUrl+'questionSounds/3.2A/ElevelCb.mp3');
        _this.load.audio('HlevelCa', window.baseUrl+'questionSounds/3.2A/HlevelCa.mp3');
        _this.load.audio('HlevelCb', window.baseUrl+'questionSounds/3.2A/HlevelCb.mp3');
        _this.load.audio('KlevelCa', window.baseUrl+'questionSounds/3.2A/KlevelCa.mp3');
        _this.load.audio('KlevelCb', window.baseUrl+'questionSounds/3.2A/KlevelCb.mp3');
        
        _this.load.audio('Eng_32A1', window.baseUrl+'questionSounds/3.2A/Eng_3.2A1.mp3');
        _this.load.audio('Eng_32A2', window.baseUrl+'questionSounds/3.2A/Eng_3.2A2.mp3');
        _this.load.audio('Hin_32A1', window.baseUrl+'questionSounds/3.2A/Hin_3.2A1.mp3');
        _this.load.audio('Hin_32A2', window.baseUrl+'questionSounds/3.2A/Hin_3.2A2.mp3');
        _this.load.audio('Kan_32A1', window.baseUrl+'questionSounds/3.2A/Kan_3.2A1.mp3');
        _this.load.audio('Kan_32A2', window.baseUrl+'questionSounds/3.2A/Kan_3.2A2.mp3');*/
	},
	
	addgame1_1BAssets:function()
	{
		
		_this.load.image('Level11B_background',window.baseUrl+'assets/gradeAssets/1.1B/bg.png');
        
        _this.load.atlas('Level11B_flagmain11', window.baseUrl+'assets/gradeAssets/1.1B/m1.png', window.baseUrl+'json/gradeJson/1.1B/m1.json');
		_this.load.image('Level11B_Ans1',window.baseUrl+'assets/gradeAssets/1.1B/o11.png');
		_this.load.image('Level11B_Ans2',window.baseUrl+'assets/gradeAssets/1.1B/o12.png');
		_this.load.image('Level11B_Ans3',window.baseUrl+'assets/gradeAssets/1.1B/o13.png');

		_this.load.atlas('Level11B_flagmain12', window.baseUrl+'assets/gradeAssets/1.1B/m2.png', window.baseUrl+'json/gradeJson/1.1B/m2.json');
		_this.load.image('Level11B_Ans21',window.baseUrl+'assets/gradeAssets/1.1B/o21.png');
		_this.load.image('Level11B_Ans22',window.baseUrl+'assets/gradeAssets/1.1B/o22.png');
		_this.load.image('Level11B_Ans32',window.baseUrl+'assets/gradeAssets/1.1B/o23.png');

		_this.load.atlas('Level11B_flagmain41', window.baseUrl+'assets/gradeAssets/1.1B/m4.png', window.baseUrl+'json/gradeJson/1.1B/m4.json');
		_this.load.image('Level11B_Ans41',window.baseUrl+'assets/gradeAssets/1.1B/o41.png');
		_this.load.image('Level11B_Ans42',window.baseUrl+'assets/gradeAssets/1.1B/o42.png');
		_this.load.image('Level11B_Ans43',window.baseUrl+'assets/gradeAssets/1.1B/o43.png');

		_this.load.atlas('Level11B_flagmain61', window.baseUrl+'assets/gradeAssets/1.1B/m6.png', window.baseUrl+'json/gradeJson/1.1B/m6.json');
		_this.load.image('Level11B_Ans61',window.baseUrl+'assets/gradeAssets/1.1B/o61.png');
		_this.load.image('Level11B_Ans62',window.baseUrl+'assets/gradeAssets/1.1B/o62.png');
		_this.load.image('Level11B_Ans63',window.baseUrl+'assets/gradeAssets/1.1B/o63.png');
        
        _this.load.atlas('Level11B_flagmain71', window.baseUrl+'assets/gradeAssets/1.1B/m7.png', window.baseUrl+'json/gradeJson/1.1B/m7.json');
		_this.load.image('Level11B_Ans71',window.baseUrl+'assets/gradeAssets/1.1B/o71.png');
		_this.load.image('Level11B_Ans72',window.baseUrl+'assets/gradeAssets/1.1B/o72.png');
		_this.load.image('Level11B_Ans73',window.baseUrl+'assets/gradeAssets/1.1B/o73.png');
        
        _this.load.atlas('Level11B_flagmain81', window.baseUrl+'assets/gradeAssets/1.1B/m8.png', window.baseUrl+'json/gradeJson/1.1B/m8.json');
		_this.load.image('Level11B_Ans81',window.baseUrl+'assets/gradeAssets/1.1B/o81.png');
		_this.load.image('Level11B_Ans82',window.baseUrl+'assets/gradeAssets/1.1B/o82.png');
		_this.load.image('Level11B_Ans83',window.baseUrl+'assets/gradeAssets/1.1B/o83.png');
        
        _this.load.atlas('Level11B_flagmain10_1', window.baseUrl+'assets/gradeAssets/1.1B/m10.png', window.baseUrl+'json/gradeJson/1.1B/m10.json');
		_this.load.image('Level11B_Ans10_1',window.baseUrl+'assets/gradeAssets/1.1B/o101.png');
		_this.load.image('Level11B_Ans10_2',window.baseUrl+'assets/gradeAssets/1.1B/o102.png');
		_this.load.image('Level11B_Ans10_3',window.baseUrl+'assets/gradeAssets/1.1B/o103.png');
        
        _this.load.atlas('Level11B_flagmain11_1', window.baseUrl+'assets/gradeAssets/1.1B/m11.png', window.baseUrl+'json/gradeJson/1.1B/m11.json');
		_this.load.image('Level11B_Ans11_1',window.baseUrl+'assets/gradeAssets/1.1B/o111.png');
		_this.load.image('Level11B_Ans11_2',window.baseUrl+'assets/gradeAssets/1.1B/o112.png');
		_this.load.image('Level11B_Ans11_3',window.baseUrl+'assets/gradeAssets/1.1B/o113.png');
        
        _this.load.atlas('Level11B_flagmain12_1', window.baseUrl+'assets/gradeAssets/1.1B/m12.png', window.baseUrl+'json/gradeJson/1.1B/m12.json');
		_this.load.image('Level11B_Ans12_1',window.baseUrl+'assets/gradeAssets/1.1B/o121.png');
		_this.load.image('Level11B_Ans12_2',window.baseUrl+'assets/gradeAssets/1.1B/o122.png');
		_this.load.image('Level11B_Ans12_3',window.baseUrl+'assets/gradeAssets/1.1B/o123.png');
        
        _this.load.atlas('Level11B_flagmain13_1', window.baseUrl+'assets/gradeAssets/1.1B/m13.png', window.baseUrl+'json/gradeJson/1.1B/m13.json');
		_this.load.image('Level11B_Ans13_1',window.baseUrl+'assets/gradeAssets/1.1B/o131.png');
		_this.load.image('Level11B_Ans13_2',window.baseUrl+'assets/gradeAssets/1.1B/o132.png');
		_this.load.image('Level11B_Ans13_3',window.baseUrl+'assets/gradeAssets/1.1B/o133.png');
	},
	
	
	/*addgame1_2AAssets:function()
	{
		//load common assets/gradeAssets/1.2A
		_this.load.image('Level12A_background',window.baseUrl+'assets/gradeAssets/1.2A/firstSceneBg.png');
		_this.load.image('Level12A_navBg',window.baseUrl+'assets/gradeAssets/1.2A/navBg.png');
		
		_this.load.image('Level12A_stick', window.baseUrl+'assets/gradeAssets/1.2A/stick.png');
		_this.load.image('Level12A_tittleBar', window.baseUrl+'assets/gradeAssets/1.2A/tittleBar.png');
		
		_this.load.atlas('Level12A_btn',window.baseUrl+'assets/gradeAssets/1.2A/btn.png',window.baseUrl+'json/gradeJson/1.2A/btn.json');
		_this.load.atlas('Level12A_backBtn',window.baseUrl+'assets/gradeAssets/1.2A/backBtn.png',window.baseUrl+'json/gradeJson/1.2A/backBtn.json');
		_this.load.atlas('Level12A_speakerBtn',window.baseUrl+'assets/gradeAssets/1.2A/speakerBtn.png',window.baseUrl+'json/gradeJson/1.2A/speakerBtn.json');
		_this.load.atlas('Level12A_starAnim',window.baseUrl+'assets/gradeAssets/1.2A/starAnim.png',window.baseUrl+'json/gradeJson/1.2A/starAnim.json');
		
		
		//scene1 assets/gradeAssets/1.2A
        //_this.load.image('Level12A_scene1wind1', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene1wind1.png');
        _this.load.atlas('Level12A_scene1wind1', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene1wind1.png',window.baseUrl+'json/gradeJson/1.2A/scene1wind1.json');
        _this.load.atlas('Level12A_scene1wind2', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene1wind2.png',window.baseUrl+'json/gradeJson/1.2A/scene1wind2.json');
        _this.load.atlas('Level12A_scene1wind3', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene1wind3.png',window.baseUrl+'json/gradeJson/1.2A/scene1wind3.json');
        _this.load.atlas('Level12A_scene1wind33', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene1wind33.png',window.baseUrl+'json/gradeJson/1.2A/scene1wind33.json');
        
        _this.load.atlas('Level12A_scene2wind1', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene2wind1.png',window.baseUrl+'json/gradeJson/1.2A/scene2wind1.json');
        _this.load.atlas('Level12A_scene2wind2', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene2wind2.png',window.baseUrl+'json/gradeJson/1.2A/scene2wind2.json');
        _this.load.atlas('Level12A_scene2wind3', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene2wind3.png',window.baseUrl+'json/gradeJson/1.2A/scene2wind3.json');
        
        _this.load.atlas('Level12A_scene3wind1', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene3wind1.png',window.baseUrl+'json/gradeJson/1.2A/scene3wind1.json');
        _this.load.atlas('Level12A_scene3wind2', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene3wind2.png',window.baseUrl+'json/gradeJson/1.2A/scene3wind2.json');
        _this.load.atlas('Level12A_scene3wind3', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene3wind3.png',window.baseUrl+'json/gradeJson/1.2A/scene3wind3.json'); 
        
       // _this.load.atlas('Level12A_scene1spin1', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene1spin1.png',window.baseUrl+'json/gradeJson/1.2A/scene1spin1.json');
      //  _this.load.atlas('Level12A_scene1spin2', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene1spin2.png',window.baseUrl+'json/gradeJson/1.2A/scene1spin2.json');
      //  _this.load.atlas('Level12A_scene1spin3', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene1spin3.png',window.baseUrl+'json/gradeJson/1.2A/scene1spin3.json');
       // _this.load.atlas('Level12A_scene1wind33', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene1wind33.png',window.baseUrl+'json/gradeJson/1.2A/scene1wind33.json');
        
      //  _this.load.atlas('Level12A_scene2spin1', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene2spin1.png',window.baseUrl+'json/gradeJson/1.2A/scene2spin1.json');
      //  _this.load.atlas('Level12A_scene2spin2', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene2spin2.png',window.baseUrl+'json/gradeJson/1.2A/scene2spin2.json');
      //  _this.load.atlas('Level12A_scene2spin3', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene2spin3.png',window.baseUrl+'json/gradeJson/1.2A/scene2spin3.json');
        
      //  _this.load.atlas('Level12A_scene3spin1', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene3spin1.png',window.baseUrl+'json/gradeJson/1.2A/scene3spin1.json');
      //  _this.load.atlas('Level12A_scene3spin2', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene3spin2.png',window.baseUrl+'json/gradeJson/1.2A/scene3spin2.json');
      //  _this.load.atlas('Level12A_scene3spin3', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene3spin3.png',window.baseUrl+'json/gradeJson/1.2A/scene3spin3.json');
        
		//		_this.load.image('Level12A_scene1wind2', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene1wind2.png');
		//		_this.load.image('Level12A_scene1wind3', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene1wind3.png');
		//		_this.load.image('Level12A_scene2wind1', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene2wind1.png');
		//		_this.load.image('Level12A_scene2wind2', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene2wind2.png');
		//		_this.load.image('Level12A_scene2wind3', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene2wind3.png');
		//		_this.load.image('Level12A_scene3wind1', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene3wind1.png');
		//		_this.load.image('Level12A_scene3wind2', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene3wind2.png');
		//		_this.load.image('Level12A_scene3wind3', window.baseUrl+'assets/gradeAssets/1.2A/reduced/scene3wind3.png');
		//	
		//scene2 assets/gradeAssets/1.2A
		//_this.load.atlas('Level12A_scene2Btn',window.baseUrl+'assets/gradeAssets/1.2A/levelFirstScene/scene2Btn.png',window.baseUrl+'json/gradeJson/1.2A/scene2Btn.json');
		_this.load.atlas('Level12A_scene2Btn1',window.baseUrl+'assets/gradeAssets/1.2A/scene2Btn1.png',window.baseUrl+'json/gradeJson/1.2A/scene2Btn1.json');
		_this.load.atlas('Level12A_scene2Btn2',window.baseUrl+'assets/gradeAssets/1.2A/scene2Btn2.png',window.baseUrl+'json/gradeJson/1.2A/scene2Btn2.json');
		_this.load.atlas('Level12A_scene2Btn3',window.baseUrl+'assets/gradeAssets/1.2A/scene2Btn3.png',window.baseUrl+'json/gradeJson/1.2A/scene2Btn3.json');
		
		//scene3 assets/gradeAssets/1.2A
        _this.load.atlas('Level12A_pencil',window.baseUrl+'assets/gradeAssets/1.2A/levelLastScene/pencil.png' ,window.baseUrl+'json/gradeJson/1.2A/pencil.json');
  
        
		_this.load.image('Level12A_centerCircle', window.baseUrl+'assets/gradeAssets/1.2A/centerCircle.png');
		_this.load.image('Level12A_wind2Center', window.baseUrl+'assets/gradeAssets/1.2A/levelLastScene/wind2Center.png');
        _this.load.atlas('Level12A_replay', window.baseUrl+'assets/gradeAssets/1.2A/reply.png', window.baseUrl+'json/gradeJson/1.2A/reply.json');
		
		
		//_this.load.image('Level12A_crayon', window.baseUrl+'assets/gradeAssets/1.2A/levelLastScene/crayon.png');
		_this.load.image('Level12A_eraser', window.baseUrl+'assets/gradeAssets/1.2A/levelLastScene/eraser.png');
        

		//_this.load.atlas('Level12A_wind1',window.baseUrl+'assets/gradeAssets/1.2A/levelLastScene/wind1.png' ,window.baseUrl+'json/gradeJson/1.2A/wind1.json');
		//_this.load.atlas('Level12A_scene3wind2',window.baseUrl+'assets/gradeAssets/1.2A/levelLastScene/wind2new.png' ,window.baseUrl+'json/gradeJson/1.2A/wind2new.json');
		//_this.load.atlas('Level12A_windmel',window.baseUrl+'assets/gradeAssets/1.2A/levelLastScene/wind3new3.png' ,window.baseUrl+'json/gradeJson/1.2A/wind3new3.json');
		//_this.load.atlas('Level12A_windmel2',window.baseUrl+'assets/gradeAssets/1.2A/levelLastScene/wind32New.png' ,window.baseUrl+'json/gradeJson/1.2A/wind32New.json');
        _this.load.atlas('Level12A_checkbtn',window.baseUrl+'assets/gradeAssets/1.2A/levelLastScene/checkbtn.png' ,window.baseUrl+'json/gradeJson/1.2A/checkbtn.json');

        
        
        _this.load.atlas('Level12A_wind1',window.baseUrl+'assets/gradeAssets/1.2A/levelLastScene/w1.png' ,window.baseUrl+'json/gradeJson/1.2A/w1.json');
        _this.load.atlas('Level12A_wind2',window.baseUrl+'assets/gradeAssets/1.2A/levelLastScene/w2.png' ,window.baseUrl+'json/gradeJson/1.2A/w2.json');
        _this.load.atlas('Level12A_wind3',window.baseUrl+'assets/gradeAssets/1.2A/levelLastScene/w3.png' ,window.baseUrl+'json/gradeJson/1.2A/w3.json');
        
        
        _this.load.image('Level12A_wind11', window.baseUrl+'assets/gradeAssets/1.2A/reduced/wind11.png');
        _this.load.image('Level12A_wind12', window.baseUrl+'assets/gradeAssets/1.2A/reduced/wind12.png');
        _this.load.image('Level12A_wind13', window.baseUrl+'assets/gradeAssets/1.2A/reduced/wind13.png');
        _this.load.image('Level12A_wind21', window.baseUrl+'assets/gradeAssets/1.2A/reduced/wind21.png');
        _this.load.image('Level12A_wind22', window.baseUrl+'assets/gradeAssets/1.2A/reduced/wind22.png');
        _this.load.image('Level12A_wind23', window.baseUrl+'assets/gradeAssets/1.2A/reduced/wind23.png');
        _this.load.image('Level12A_wind31', window.baseUrl+'assets/gradeAssets/1.2A/reduced/wind31.png');
        _this.load.image('Level12A_wind32', window.baseUrl+'assets/gradeAssets/1.2A/reduced/wind32.png');
        _this.load.image('Level12A_wind33', window.baseUrl+'assets/gradeAssets/1.2A/reduced/wind33.png');
		
		_this.load.audio('spin2', window.baseUrl+'questionSounds/1.2A/spin2.mp3');
        _this.load.audio('Eng_12A1', window.baseUrl+'questionSounds/1.2A/English/1.2A1.mp3');
        _this.load.audio('Eng_12A2', window.baseUrl+'questionSounds/1.2A/English/1.2A2.mp3');
        _this.load.audio('Eng_12A3', window.baseUrl+'questionSounds/1.2A/English/1.2A3.mp3');
        _this.load.audio('Eng_12B1', window.baseUrl+'questionSounds/1.2A/English/1.2B1.mp3');
        _this.load.audio('Eng_12B2', window.baseUrl+'questionSounds/1.2A/English/1.2B2.mp3');
        _this.load.audio('Eng_12B3', window.baseUrl+'questionSounds/1.2A/English/1.2B3.mp3');
        _this.load.audio('Eng_12B5', window.baseUrl+'questionSounds/1.2A/English/1.2B5.mp3');
        _this.load.audio('Eng_12C1', window.baseUrl+'questionSounds/1.2A/English/1.2C1.mp3');
        _this.load.audio('Eng_12C2', window.baseUrl+'questionSounds/1.2A/English/1.2C2.mp3');
        _this.load.audio('Eng_12C3', window.baseUrl+'questionSounds/1.2A/English/1.2C3.mp3');
        _this.load.audio('Kan_12A1', window.baseUrl+'questionSounds/1.2A/Kannada/1.2A1.mp3');
        _this.load.audio('Kan_12A2', window.baseUrl+'questionSounds/1.2A/Kannada/1.2A2.mp3');
        _this.load.audio('Kan_12A3', window.baseUrl+'questionSounds/1.2A/Kannada/1.2A3.mp3');
        _this.load.audio('Kan_12B1', window.baseUrl+'questionSounds/1.2A/Kannada/1.2B1.mp3');
        _this.load.audio('Kan_12B2', window.baseUrl+'questionSounds/1.2A/Kannada/1.2B2.mp3');
        _this.load.audio('Kan_12B3', window.baseUrl+'questionSounds/1.2A/Kannada/1.2B3.mp3');
        _this.load.audio('Kan_12B5', window.baseUrl+'questionSounds/1.2A/Kannada/1.2B5.mp3');
        _this.load.audio('Kan_12C1', window.baseUrl+'questionSounds/1.2A/Kannada/1.2C1.mp3');
        _this.load.audio('Kan_12C2', window.baseUrl+'questionSounds/1.2A/Kannada/1.2C2.mp3');
        _this.load.audio('Kan_12C3', window.baseUrl+'questionSounds/1.2A/Kannada/1.2C3.mp3');
        _this.load.audio('Hin_12A1', window.baseUrl+'questionSounds/1.2A/Hindi/1.2A1.mp3');
        _this.load.audio('Hin_12A2', window.baseUrl+'questionSounds/1.2A/Hindi/1.2A2.mp3');
        _this.load.audio('Hin_12A3', window.baseUrl+'questionSounds/1.2A/Hindi/1.2A3.mp3');
        _this.load.audio('Hin_12B1', window.baseUrl+'questionSounds/1.2A/Hindi/1.2B1.mp3');
        _this.load.audio('Hin_12B2', window.baseUrl+'questionSounds/1.2A/Hindi/1.2B2.mp3');
        _this.load.audio('Hin_12B3', window.baseUrl+'questionSounds/1.2A/Hindi/1.2B3.mp3');
        _this.load.audio('Hin_12B5', window.baseUrl+'questionSounds/1.2A/Hindi/1.2B5.mp3');
        _this.load.audio('Hin_12C1', window.baseUrl+'questionSounds/1.2A/Hindi/1.2C1.mp3');
        _this.load.audio('Hin_12C2', window.baseUrl+'questionSounds/1.2A/Hindi/1.2C2.mp3');
        _this.load.audio('Hin_12C3', window.baseUrl+'questionSounds/1.2A/Hindi/1.2C3.mp3');
	},
	*/
	

	addgame1_2BAssets:function()
	{
		
		//this.load.image('background',window.baseUrl+'assets/bg.png');
		//this.load.image('bg1',window.baseUrl+'assets/bg1.png');
		//this.load.image('questionBackground', 'questionBackground.png');

		// this.load.audio('baudio', ['BackgroundSound.mp3', 'BackgroundSound.ogg']);
		// this.load.audio('waudio', ['WrongCelebrationSound.mp3', 'WrongCelebrationSound.ogg']);
        //this.load.audio('ClickSound', 'ClickSound.mp3');
		// this.load.audio('baudio1', ['BackgroundMusic.mp3', 'BackgroundMusic.ogg']);
		// this.load.audio('celebr', 'celebration.mp3');

		//this.load.image('playBg', 'playbg.png');
	//	this.load.image('langBg', window.baseUrl+'assets/langbg.png');
        
		
		//this.load.atlas('heading',window.baseUrl+'assets/hedding.png' ,window.baseUrl+'json/heading.json');
		//this.load.atlas('heading1',window.baseUrl+'assets/heading1.png' ,window.baseUrl+'json/heading1.json');
		//this.load.image('line','Line.png');
	//	this.load.image('celeb', window.baseUrl+'assets/c.png');
      //  this.load.atlas('backbtn',window.baseUrl+'assets/backbtn.png' ,window.baseUrl+'json/backbtn.json');
      //  this.load.atlas('speaker',window.baseUrl+'assets/speaker.png' ,window.baseUrl+'json/speaker.json');
      //  this.load.image('headingLine', window.baseUrl+'assets/headingLine.png');
        
	//	this.load.atlas('starAnim',window.baseUrl+'assets/starAnim.png',window.baseUrl+'json/starAnim.json');
      //  this.load.atlas('btn',window.baseUrl+'assets/btn.png',window.baseUrl+'json/btn.json');
       // this.load.image('tittleBar', window.baseUrl+'assets/tittleBar.png');
       // this.load.atlas('replay', window.baseUrl+'assets/reply.png', window.baseUrl+'json/reply.json');


       this.load.image('unity1.2Bbackg',window.baseUrl+'assets/gradeAssets/1.2A/bg.png');
        _this.load.atlas('unity1.2BstarAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity1.2Btopbar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity1.2Btimerbg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity1.2Bspeaker',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json'); 

      
        
        _this.load.atlas('unity1.2Bflagmain11', window.baseUrl+'assets/gradeAssets/1.2B/m1.png', window.baseUrl+'json/gradeJson/1.2B/m1.json');
		_this.load.image('unity1.2BAns1',window.baseUrl+'assets/gradeAssets/1.2B/o1.png');
		_this.load.image('unity1.2BAns2',window.baseUrl+'assets/gradeAssets/1.2B/o2.png');
		_this.load.image('unity1.2BAns3',window.baseUrl+'assets/gradeAssets/1.2B/o3.png');

		_this.load.atlas('unity1.2Bflagmain12', window.baseUrl+'assets/gradeAssets/1.2B/m2.png', window.baseUrl+'json/gradeJson/1.2B/m2.json');
		_this.load.image('unity1.2BAns11',window.baseUrl+'assets/gradeAssets/1.2B/o4.png');
		_this.load.image('unity1.2BAns12',window.baseUrl+'assets/gradeAssets/1.2B/o5.png');
		_this.load.image('unity1.2BAns13',window.baseUrl+'assets/gradeAssets/1.2B/o6.png');

		_this.load.atlas('unity1.2Bflagmain13', window.baseUrl+'assets/gradeAssets/1.2B/m3.png', window.baseUrl+'json/gradeJson/1.2B/m3.json');
		_this.load.image('unity1.2BAns21',window.baseUrl+'assets/gradeAssets/1.2B/o7.png');
		_this.load.image('unity1.2BAns22',window.baseUrl+'assets/gradeAssets/1.2B/o8.png');
		_this.load.image('unity1.2BAns23',window.baseUrl+'assets/gradeAssets/1.2B/o9.png');

		_this.load.atlas('unity1.2Bflagmain14', window.baseUrl+'assets/gradeAssets/1.2B/m4.png', window.baseUrl+'json/gradeJson/1.2B/m4.json');
		_this.load.image('unity1.2BAns31',window.baseUrl+'assets/gradeAssets/1.2B/o10.png');
		_this.load.image('unity1.2BAns32',window.baseUrl+'assets/gradeAssets/1.2B/o11.png');
		_this.load.image('unity1.2BAns33',window.baseUrl+'assets/gradeAssets/1.2B/o12.png');

		_this.load.atlas('unity1.2Bflagmain15', window.baseUrl+'assets/gradeAssets/1.2B/m5.png', window.baseUrl+'json/gradeJson/1.2B/m5.json');
		_this.load.image('unity1.2BAns41',window.baseUrl+'assets/gradeAssets/1.2B/o13.png');
		_this.load.image('unity1.2BAns42',window.baseUrl+'assets/gradeAssets/1.2B/o14.png');
		_this.load.image('unity1.2BAns43',window.baseUrl+'assets/gradeAssets/1.2B/o15.png');

		_this.load.atlas('unity1.2Bflagmain16', window.baseUrl+'assets/gradeAssets/1.2B/m6.png', window.baseUrl+'json/gradeJson/1.2B/m6.json');
		_this.load.image('unity1.2BAns51',window.baseUrl+'assets/gradeAssets/1.2B/o16.png');
		_this.load.image('unity1.2BAns52',window.baseUrl+'assets/gradeAssets/1.2B/o17.png');
		_this.load.image('unity1.2BAns53',window.baseUrl+'assets/gradeAssets/1.2B/o18.png');
        
        _this.load.atlas('unity1.2Bflagmain17', window.baseUrl+'assets/gradeAssets/1.2B/m7.png', window.baseUrl+'json/gradeJson/1.2B/m7.json');
		_this.load.image('unity1.2BAns61',window.baseUrl+'assets/gradeAssets/1.2B/o19.png');
		_this.load.image('unity1.2BAns62',window.baseUrl+'assets/gradeAssets/1.2B/o20.png');
		_this.load.image('unity1.2BAns63',window.baseUrl+'assets/gradeAssets/1.2B/o21.png');
        
        _this.load.atlas('unity1.2Bflagmain18', window.baseUrl+'assets/gradeAssets/1.2B/m8.png', window.baseUrl+'json/gradeJson/1.2B/m8.json');
		_this.load.image('unity1.2BAns71',window.baseUrl+'assets/gradeAssets/1.2B/o22.png');
		_this.load.image('unity1.2BAns72',window.baseUrl+'assets/gradeAssets/1.2B/o23.png');
		_this.load.image('unity1.2BAns73',window.baseUrl+'assets/gradeAssets/1.2B/o24.png');
        
        _this.load.atlas('unity1.2Bflagmain19', window.baseUrl+'assets/gradeAssets/1.2B/m9.png', window.baseUrl+'json/gradeJson/1.2B/m9.json');
		_this.load.image('unity1.2BAns81',window.baseUrl+'assets/gradeAssets/1.2B/o25.png');
		_this.load.image('unity1.2BAns82',window.baseUrl+'assets/gradeAssets/1.2B/o26.png');
		_this.load.image('unity1.2BAns83',window.baseUrl+'assets/gradeAssets/1.2B/o27.png');
        
        _this.load.atlas('unity1.2Bflagmain20', window.baseUrl+'assets/gradeAssets/1.2B/m10.png', window.baseUrl+'json/gradeJson/1.2B/m10.json');
		_this.load.image('unity1.2BAns91',window.baseUrl+'assets/gradeAssets/1.2B/o28.png');
		_this.load.image('unity1.2BAns92',window.baseUrl+'assets/gradeAssets/1.2B/o29.png');
		_this.load.image('unity1.2BAns93',window.baseUrl+'assets/gradeAssets/1.2B/o30.png');
        
        _this.load.atlas('unity1.2Bflagmain21', window.baseUrl+'assets/gradeAssets/1.2B/m11.png', window.baseUrl+'json/gradeJson/1.2B/m11.json');
		_this.load.image('unity1.2BAns101',window.baseUrl+'assets/gradeAssets/1.2B/o31.png');
		_this.load.image('unity1.2BAns102',window.baseUrl+'assets/gradeAssets/1.2B/o32.png');
		_this.load.image('unity1.2BAns103',window.baseUrl+'assets/gradeAssets/1.2B/o33.png');
        
	},

	addgame1_3AAssets:function()
	{
		_this.load.image('Level13A_background',window.baseUrl+'assets/gradeAssets/1.3A/bg.png');
        
        _this.load.atlas('Level13A_flagmain11', window.baseUrl+'assets/gradeAssets/1.3A/m1.png', window.baseUrl+'json/gradeJson/1.3A/m1.json');
		_this.load.image('Level13A_Ans1',window.baseUrl+'assets/gradeAssets/1.3A/o11.png');
		_this.load.image('Level13A_Ans2',window.baseUrl+'assets/gradeAssets/1.3A/o12.png');
		_this.load.image('Level13A_Ans3',window.baseUrl+'assets/gradeAssets/1.3A/o13.png');

		/*_this.load.atlas('Level13A_flagmain12', window.baseUrl+'assets/gradeAssets/1.3A/m2.png', window.baseUrl+'json/gradeJson/1.3A/m2.json');
		_this.load.image('Level13A_Ans21',window.baseUrl+'assets/gradeAssets/1.3A/o21.png');
		_this.load.image('Level13A_Ans22',window.baseUrl+'assets/gradeAssets/1.3A/o22.png');
		_this.load.image('Level13A_Ans23',window.baseUrl+'assets/gradeAssets/1.3A/o23.png');

		_this.load.atlas('Level13A_flagmain31', window.baseUrl+'assets/gradeAssets/1.3A/m3.png', window.baseUrl+'json/gradeJson/1.3A/m3.json');
		_this.load.image('Level13A_Ans31',window.baseUrl+'assets/gradeAssets/1.3A/o31.png');
		_this.load.image('Level13A_Ans32',window.baseUrl+'assets/gradeAssets/1.3A/o32.png');
		_this.load.image('Level13A_Ans33',window.baseUrl+'assets/gradeAssets/1.3A/o33.png');*/

		_this.load.atlas('Level13A_flagmain41', window.baseUrl+'assets/gradeAssets/1.3A/m4.png', window.baseUrl+'json/gradeJson/1.3A/m4.json');
		_this.load.image('Level13A_Ans41',window.baseUrl+'assets/gradeAssets/1.3A/o41.png');
		_this.load.image('Level13A_Ans42',window.baseUrl+'assets/gradeAssets/1.3A/o42.png');
        _this.load.image('Level13A_Ans43',window.baseUrl+'assets/gradeAssets/1.3A/o43.png');

		_this.load.atlas('Level13A_flagmain51', window.baseUrl+'assets/gradeAssets/1.3A/m5.png', window.baseUrl+'json/gradeJson/1.3A/m5.json');
		_this.load.image('Level13A_Ans51',window.baseUrl+'assets/gradeAssets/1.3A/o51.png');
		_this.load.image('Level13A_Ans52',window.baseUrl+'assets/gradeAssets/1.3A/o52.png');
		_this.load.image('Level13A_Ans53',window.baseUrl+'assets/gradeAssets/1.3A/o53.png');

		/*_this.load.atlas('Level13A_flagmain61', window.baseUrl+'assets/gradeAssets/1.3A/m6.png', window.baseUrl+'json/gradeJson/1.3A/m6.json');
		_this.load.image('Level13A_Ans61',window.baseUrl+'assets/gradeAssets/1.3A/o61.png');
		_this.load.image('Level13A_Ans62',window.baseUrl+'assets/gradeAssets/1.3A/o62.png');
		_this.load.image('Level13A_Ans63',window.baseUrl+'assets/gradeAssets/1.3A/o63.png');*/
        
        _this.load.atlas('Level13A_flagmain71', window.baseUrl+'assets/gradeAssets/1.3A/m7.png', window.baseUrl+'json/gradeJson/1.3A/m7.json');
		_this.load.image('Level13A_Ans71',window.baseUrl+'assets/gradeAssets/1.3A/o71.png');
		_this.load.image('Level13A_Ans72',window.baseUrl+'assets/gradeAssets/1.3A/o72.png');
		_this.load.image('Level13A_Ans73',window.baseUrl+'assets/gradeAssets/1.3A/o73.png');
	},

	addgame1_3BAssets:function()
	{
		_this.load.image('Level13B_background',window.baseUrl+'assets/gradeAssets/1.3B/bg.png');
        
        _this.load.atlas('Level13B_flagmain11', window.baseUrl+'assets/gradeAssets/1.3B/m1.png', window.baseUrl+'json/gradeJson/1.3B/m1.json');
		_this.load.image('Level13B_Ans1',window.baseUrl+'assets/gradeAssets/1.3B/o11.png');
		_this.load.image('Level13B_Ans2',window.baseUrl+'assets/gradeAssets/1.3B/o12.png');
		_this.load.image('Level13B_Ans3',window.baseUrl+'assets/gradeAssets/1.3B/o13.png');

		_this.load.atlas('Level13B_flagmain12', window.baseUrl+'assets/gradeAssets/1.3B/m2.png', window.baseUrl+'json/gradeJson/1.3B/m2.json');
		_this.load.image('Level13B_Ans21',window.baseUrl+'assets/gradeAssets/1.3B/o21.png');
		_this.load.image('Level13B_Ans22',window.baseUrl+'assets/gradeAssets/1.3B/o22.png');
		_this.load.image('Level13B_Ans23',window.baseUrl+'assets/gradeAssets/1.3B/o23.png');

		_this.load.atlas('Level13B_flagmain31', window.baseUrl+'assets/gradeAssets/1.3B/m3.png', window.baseUrl+'json/gradeJson/1.3B/m3.json');
		_this.load.image('Level13B_Ans31',window.baseUrl+'assets/gradeAssets/1.3B/o31.png');
		_this.load.image('Level13B_Ans32',window.baseUrl+'assets/gradeAssets/1.3B/o32.png');
		_this.load.image('Level13B_Ans33',window.baseUrl+'assets/gradeAssets/1.3B/o33.png');

		_this.load.atlas('Level13B_flagmain41', window.baseUrl+'assets/gradeAssets/1.3B/m4.png', window.baseUrl+'json/gradeJson/1.3B/m4.json');
		_this.load.image('Level13B_Ans41',window.baseUrl+'assets/gradeAssets/1.3B/o41.png');
		_this.load.image('Level13B_Ans42',window.baseUrl+'assets/gradeAssets/1.3B/o42.png');

		_this.load.atlas('Level13B_flagmain51', window.baseUrl+'assets/gradeAssets/1.3B/m5.png', window.baseUrl+'json/gradeJson/1.3B/m5.json');
		_this.load.image('Level13B_Ans51',window.baseUrl+'assets/gradeAssets/1.3B/o51.png');
		_this.load.image('Level13B_Ans52',window.baseUrl+'assets/gradeAssets/1.3B/o52.png');
		_this.load.image('Level13B_Ans53',window.baseUrl+'assets/gradeAssets/1.3B/o53.png');

		_this.load.atlas('Level13B_flagmain61', window.baseUrl+'assets/gradeAssets/1.3B/m6.png', window.baseUrl+'json/gradeJson/1.3B/m6.json');
		_this.load.image('Level13B_Ans61',window.baseUrl+'assets/gradeAssets/1.3B/o61.png');
		_this.load.image('Level13B_Ans62',window.baseUrl+'assets/gradeAssets/1.3B/o62.png');
		_this.load.image('Level13B_Ans63',window.baseUrl+'assets/gradeAssets/1.3B/o63.png');
        
        _this.load.atlas('Level13B_flagmain71', window.baseUrl+'assets/gradeAssets/1.3B/m7.png', window.baseUrl+'json/gradeJson/1.3B/m7.json');
        
        _this.load.atlas('Level13B_flagmain81', window.baseUrl+'assets/gradeAssets/1.3B/m8.png', window.baseUrl+'json/gradeJson/1.3B/m8.json');
		_this.load.image('Level13B_Ans81',window.baseUrl+'assets/gradeAssets/1.3B/o81.png');
		_this.load.image('Level13B_Ans82',window.baseUrl+'assets/gradeAssets/1.3B/o82.png');
		_this.load.image('Level13B_Ans83',window.baseUrl+'assets/gradeAssets/1.3B/o83.png');
        
        _this.load.atlas('Level13B_flagmain91', window.baseUrl+'assets/gradeAssets/1.3B/m9.png', window.baseUrl+'json/gradeJson/1.3B/m9.json');
		_this.load.image('Level13B_Ans91',window.baseUrl+'assets/gradeAssets/1.3B/o91.png');
		_this.load.image('Level13B_Ans92',window.baseUrl+'assets/gradeAssets/1.3B/o92.png');
		_this.load.image('Level13B_Ans93',window.baseUrl+'assets/gradeAssets/1.3B/o93.png');
        
        _this.load.atlas('Level13B_flagmain91', window.baseUrl+'assets/gradeAssets/1.3B/m9.png', window.baseUrl+'json/gradeJson/1.3B/m9.json');
        
        _this.load.atlas('Level13B_flagmain10_1', window.baseUrl+'assets/gradeAssets/1.3B/m10.png', window.baseUrl+'json/gradeJson/1.3B/m10.json');
		_this.load.image('Level13B_Ans10_1',window.baseUrl+'assets/gradeAssets/1.3B/o101.png');
		_this.load.image('Level13B_Ans10_2',window.baseUrl+'assets/gradeAssets/1.3B/o102.png');
		_this.load.image('Level13B_Ans10_3',window.baseUrl+'assets/gradeAssets/1.3B/o103.png');
        
        _this.load.atlas('Level13B_flagmain11_1', window.baseUrl+'assets/gradeAssets/1.3B/m11.png', window.baseUrl+'json/gradeJson/1.3B/m11.json');
		_this.load.image('Level13B_Ans11_1',window.baseUrl+'assets/gradeAssets/1.3B/o111.png');
		_this.load.image('Level13B_Ans11_2',window.baseUrl+'assets/gradeAssets/1.3B/o101.png');
		_this.load.image('Level13B_Ans11_3',window.baseUrl+'assets/gradeAssets/1.3B/o113.png');
	},

	addgame1_4Assets:function()
	{
		_this.load.image('Level12A_background',window.baseUrl+'assets/gradeAssets/1.4/firstSceneBg.png');
		
		_this.load.image('Level12A_stick', window.baseUrl+'assets/gradeAssets/1.4/stick.png');
		//scene1 assets/gradeAssets/1.4
        //_this.load.image('Level12A_scene1wind1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind1.png');
        _this.load.atlas('Level12A_scene1wind1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind1.png',window.baseUrl+'json/gradeJson/1.4/scene1wind1.json');
        _this.load.atlas('Level12A_scene1wind2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind2.png',window.baseUrl+'json/gradeJson/1.4/scene1wind2.json');
        _this.load.atlas('Level12A_scene1wind3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind3.png',window.baseUrl+'json/gradeJson/1.4/scene1wind3.json');
        _this.load.atlas('Level12A_scene1wind33', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind33.png',window.baseUrl+'json/gradeJson/1.4/scene1wind33.json');
        
        _this.load.atlas('Level12A_scene2wind1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2wind1.png',window.baseUrl+'json/gradeJson/1.4/scene2wind1.json');
        _this.load.atlas('Level12A_scene2wind2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2wind2.png',window.baseUrl+'json/gradeJson/1.4/scene2wind2.json');
        _this.load.atlas('Level12A_scene2wind3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2wind3.png',window.baseUrl+'json/gradeJson/1.4/scene2wind3.json');
        
        _this.load.atlas('Level12A_scene3wind1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3wind1.png',window.baseUrl+'json/gradeJson/1.4/scene3wind1.json');
        _this.load.atlas('Level12A_scene3wind2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3wind2.png',window.baseUrl+'json/gradeJson/1.4/scene3wind2.json');
        _this.load.atlas('Level12A_scene3wind3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3wind3.png',window.baseUrl+'json/gradeJson/1.4/scene3wind3.json'); 
        
       // _this.load.atlas('Level12A_scene1spin1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1spin1.png',window.baseUrl+'json/gradeJson/1.4/scene1spin1.json');
      //  _this.load.atlas('Level12A_scene1spin2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1spin2.png',window.baseUrl+'json/gradeJson/1.4/scene1spin2.json');
      //  _this.load.atlas('Level12A_scene1spin3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1spin3.png',window.baseUrl+'json/gradeJson/1.4/scene1spin3.json');
       // _this.load.atlas('Level12A_scene1wind33', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind33.png',window.baseUrl+'json/gradeJson/1.4/scene1wind33.json');
        
      //  _this.load.atlas('Level12A_scene2spin1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2spin1.png',window.baseUrl+'json/gradeJson/1.4/scene2spin1.json');
      //  _this.load.atlas('Level12A_scene2spin2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2spin2.png',window.baseUrl+'json/gradeJson/1.4/scene2spin2.json');
      //  _this.load.atlas('Level12A_scene2spin3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2spin3.png',window.baseUrl+'json/gradeJson/1.4/scene2spin3.json');
        
      //  _this.load.atlas('Level12A_scene3spin1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3spin1.png',window.baseUrl+'json/gradeJson/1.4/scene3spin1.json');
      //  _this.load.atlas('Level12A_scene3spin2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3spin2.png',window.baseUrl+'json/gradeJson/1.4/scene3spin2.json');
      //  _this.load.atlas('Level12A_scene3spin3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3spin3.png',window.baseUrl+'json/gradeJson/1.4/scene3spin3.json');
        
		//		_this.load.image('Level12A_scene1wind2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind2.png');
		//		_this.load.image('Level12A_scene1wind3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene1wind3.png');
		//		_this.load.image('Level12A_scene2wind1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2wind1.png');
		//		_this.load.image('Level12A_scene2wind2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2wind2.png');
		//		_this.load.image('Level12A_scene2wind3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene2wind3.png');
		//		_this.load.image('Level12A_scene3wind1', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3wind1.png');
		//		_this.load.image('Level12A_scene3wind2', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3wind2.png');
		//		_this.load.image('Level12A_scene3wind3', window.baseUrl+'assets/gradeAssets/1.4/reduced/scene3wind3.png');
		//	
		//scene2 assets/gradeAssets/1.4
		//_this.load.atlas('Level12A_scene2Btn',window.baseUrl+'assets/gradeAssets/1.4/levelFirstScene/scene2Btn.png',window.baseUrl+'json/gradeJson/1.4/scene2Btn.json');
		_this.load.atlas('Level12A_scene2Btn1',window.baseUrl+'assets/gradeAssets/1.4/scene2Btn1.png',window.baseUrl+'json/gradeJson/1.4/scene2Btn1.json');
		_this.load.atlas('Level12A_scene2Btn2',window.baseUrl+'assets/gradeAssets/1.4/scene2Btn2.png',window.baseUrl+'json/gradeJson/1.4/scene2Btn2.json');
		_this.load.atlas('Level12A_scene2Btn3',window.baseUrl+'assets/gradeAssets/1.4/scene2Btn3.png',window.baseUrl+'json/gradeJson/1.4/scene2Btn3.json');
		
		//scene3 assets/gradeAssets/1.4
        _this.load.atlas('Level12A_pencil',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/pencil.png' ,window.baseUrl+'json/gradeJson/1.4/pencil.json');
  
        
		_this.load.image('Level12A_centerCircle', window.baseUrl+'assets/gradeAssets/1.4/centerCircle.png');
		_this.load.image('Level12A_wind2Center', window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/wind2Center.png');
        _this.load.atlas('Level12A_replay', window.baseUrl+'assets/gradeAssets/1.4/reply.png', window.baseUrl+'json/gradeJson/1.4/reply.json');
		
		
		//_this.load.image('Level12A_crayon', window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/crayon.png');
		_this.load.image('Level12A_eraser', window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/eraser.png');
        

		//_this.load.atlas('Level12A_wind1',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/wind1.png' ,window.baseUrl+'json/gradeJson/1.4/wind1.json');
		//_this.load.atlas('Level12A_scene3wind2',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/wind2new.png' ,window.baseUrl+'json/gradeJson/1.4/wind2new.json');
		//_this.load.atlas('Level12A_windmel',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/wind3new3.png' ,window.baseUrl+'json/gradeJson/1.4/wind3new3.json');
		//_this.load.atlas('Level12A_windmel2',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/wind32New.png' ,window.baseUrl+'json/gradeJson/1.4/wind32New.json');
        _this.load.atlas('Level12A_checkbtn',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/checkbtn.png' ,window.baseUrl+'json/gradeJson/1.4/checkbtn.json');

        
        
        _this.load.atlas('Level12A_wind1',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/w1.png' ,window.baseUrl+'json/gradeJson/1.4/w1.json');
        _this.load.atlas('Level12A_wind2',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/w2.png' ,window.baseUrl+'json/gradeJson/1.4/w2.json');
        _this.load.atlas('Level12A_wind3',window.baseUrl+'assets/gradeAssets/1.4/levelLastScene/w3.png' ,window.baseUrl+'json/gradeJson/1.4/w3.json');
        
        
       /* this.load.image('wind11', window.baseUrl+'assets/reduced/wind11.png');
        this.load.image('wind12', window.baseUrl+'assets/reduced/wind12.png');
        this.load.image('wind13', window.baseUrl+'assets/reduced/wind13.png');
        this.load.image('wind21', window.baseUrl+'assets/reduced/wind21.png');
        this.load.image('wind22', window.baseUrl+'assets/reduced/wind22.png');
        this.load.image('wind23', window.baseUrl+'assets/reduced/wind23.png');
        this.load.image('wind31', window.baseUrl+'assets/reduced/wind31.png');
        this.load.image('wind32', window.baseUrl+'assets/reduced/wind32.png');
        this.load.image('wind33', window.baseUrl+'assets/reduced/wind33.png');*/
        _this.load.image('commonBg1',window.baseUrl+'assets/commonAssets/commonBg1.png');
		_this.load.image('commonBg2',window.baseUrl+'assets/commonAssets/commonBg2.png');
		_this.load.image('bottomBar',window.baseUrl+'assets/commonAssets/bottomBar.png');
		
	},
	
	
	addgame2_4AAssets:function()
	{
		/*_this.load.image('Level24A_bg1',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/bg1.png');
        
        
        
       // _this.load.atlas('Level24A_backbtn',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.4A/backbtn.json');
        //_this.load.atlas('Level24A_speaker',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.4A/speaker.json');
        //_this.load.atlas('Level24A_starAnim',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.4A/starAnim.json');
        _this.load.image('Level24A_cloud',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/cloud.png');
       // _this.load.atlas('Level24A_btn',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.4A/btn.json');
        _this.load.image('Level24A_bg3',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/bg3.png');
        //_this.load.image('Level24A_tittleBaar',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level24A_replay',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.4A/reply.json');
        _this.load.atlas('Level24A_numbg',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/numbg.png' ,window.baseUrl+'json/gradeJson/2.4A/numbg.json');
        _this.load.atlas('Level24A_rightBtn',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/rightBtn.png' ,window.baseUrl+'json/gradeJson/2.4A/rightBtn.json');
        _this.load.atlas('Level24A_wrongBtn',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/wrongBtn.png' ,window.baseUrl+'json/gradeJson/2.4A/wrongBtn.json');
        
        
        _this.load.atlas('Level24A_tape15cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape15cm.png' ,window.baseUrl+'json/gradeJson/2.4A/tape15cm.json');
        _this.load.atlas('Level24A_tape30cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape30cm.png' ,window.baseUrl+'json/gradeJson/2.4A/tape30cm.json');
        _this.load.atlas('Level24A_tape100cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape100cm.png' ,window.baseUrl+'json/gradeJson/2.4A/tape100cm.json');
        _this.load.atlas('Level24A_scaleMarker',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scaleMarker.png' ,window.baseUrl+'json/gradeJson/2.4A/scaleMarker.json');
        _this.load.image('Level24A_scaleMarkerNew',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scaleMarkerNew.png');
        
        _this.load.image('Level24A_txtbox',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/box.png');
        _this.load.image('Level24A_tape1',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape1.png');
        _this.load.image('Level24A_tape2',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape2.png');
        _this.load.image('Level24A_tape3',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape3.png');
       // _this.load.image('Level24A_tape15cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape15cm.png');
       // _this.load.image('Level24A_tape30cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape30cm.png');
       // _this.load.image('Level24A_tape100cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape100cm.png');
        _this.load.image('Level24A_scale',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scale.png');
        _this.load.image('Level24A_scaleNew',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scaleNew.png');
        //_this.load.image('Level24A_scaleMarker',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scaleMarker.png');
        _this.load.image('Level24A_tapeTint',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tapeTint.png');
        
        
        //My files to load
        _this.load.atlas('Level24A_shoe',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/shoe.png' ,window.baseUrl+'json/gradeJson/2.4A/shoe.json');
        _this.load.atlas('Level24A_shoe2',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/shoe2.png' ,window.baseUrl+'json/gradeJson/2.4A/shoe2.json');
        _this.load.atlas('Level24A_fish',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/fish.png' ,window.baseUrl+'json/gradeJson/2.4A/fish.json');
        _this.load.atlas('Level24A_clip',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/clip.png' ,window.baseUrl+'json/gradeJson/2.4A/clip.json');
        _this.load.atlas('Level24A_pencil',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/pencil.png' ,window.baseUrl+'json/gradeJson/2.4A/pencil.json');
        _this.load.atlas('Level24A_screwDriver',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/screwDriver.png' ,window.baseUrl+'json/gradeJson/2.4A/screwDriver.json');
        _this.load.atlas('Level24A_key',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/key.png' ,window.baseUrl+'json/gradeJson/2.4A/key.json');
        _this.load.atlas('Level24A_watch',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/watch.png' ,window.baseUrl+'json/gradeJson/2.4A/watch.json');
        _this.load.atlas('Level24A_pen',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/pen.png' ,window.baseUrl+'json/gradeJson/2.4A/pen.json');
        _this.load.atlas('Level24A_scale1',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/scale1.png' ,window.baseUrl+'json/gradeJson/2.4A/scale1.json');
        _this.load.atlas('Level24A_scale2',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/scale2.png' ,window.baseUrl+'json/gradeJson/2.4A/scale2.json');
        _this.load.atlas('Level24A_bat',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/bat.png' ,window.baseUrl+'json/gradeJson/2.4A/bat.json');
        _this.load.atlas('Level24A_cup',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/cup.png' ,window.baseUrl+'json/gradeJson/2.4A/cup.json');
        _this.load.atlas('Level24A_jug',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/jug.png' ,window.baseUrl+'json/gradeJson/2.4A/jug.json');
        _this.load.atlas('Level24A_chair',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/chair.png' ,window.baseUrl+'json/gradeJson/2.4A/chair.json');
        _this.load.atlas('Level24A_mug',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/mug.png' ,window.baseUrl+'json/gradeJson/2.4A/mug.json');
        _this.load.atlas('Level24A_table',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/table.png' ,window.baseUrl+'json/gradeJson/2.4A/table.json');
        _this.load.atlas('Level24A_pot',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/pot.png' ,window.baseUrl+'json/gradeJson/2.4A/pot.json');
        
        
        _this.load.atlas('Level24A_level2Scale1',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/level2Scale1.png' ,window.baseUrl+'json/gradeJson/2.4A/level2Scale1.json');
        _this.load.atlas('Level24A_level2Scale2',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/level2Scale2.png' ,window.baseUrl+'json/gradeJson/2.4A/level2Scale2.json');
        _this.load.atlas('Level24A_level2Scale3',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/level2Scale3.png' ,window.baseUrl+'json/gradeJson/2.4A/level2Scale3.json');
        _this.load.atlas('Level24A_tree',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/tree.png' ,window.baseUrl+'json/gradeJson/2.4A/tree.json');
        _this.load.atlas('Level24A_tape4',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape4.png' ,window.baseUrl+'json/gradeJson/2.4A/tape4.json');
        _this.load.atlas('Level24A_car',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/car.png' ,window.baseUrl+'json/gradeJson/2.4A/car.json');
        _this.load.atlas('Level24A_carpet',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/carpet.png' ,window.baseUrl+'json/gradeJson/2.4A/carpet.json');
		
		
		
		/*_this.load.audio('Eng_24A1', window.baseUrl+'questionSounds/2.4A/English/2.4A1.mp3');
        _this.load.audio('Eng_24A2', window.baseUrl+'questionSounds/2.4A/English/2.4A2.mp3');
        _this.load.audio('Eng_24B1', window.baseUrl+'questionSounds/2.4A/English/2.4B1.mp3');
        _this.load.audio('Kan_24A1', window.baseUrl+'questionSounds/2.4A/Kannada/2.4A1.mp3');
        _this.load.audio('Kan_24A2', window.baseUrl+'questionSounds/2.4A/Kannada/2.4A2.mp3');
        _this.load.audio('Kan_24B1', window.baseUrl+'questionSounds/2.4A/Kannada/2.4B1.mp3');
        _this.load.audio('Hin_24A1', window.baseUrl+'questionSounds/2.4A/Hindi/2.4A1.mp3');
        _this.load.audio('Hin_24A2', window.baseUrl+'questionSounds/2.4A/Hindi/2.4A2.mp3');
        _this.load.audio('Hin_24B1', window.baseUrl+'questionSounds/2.4A/Hindi/2.4B1.mp3');*/


        _this.load.image('Level24A_bg1',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/bg1.png');
        _this.load.image('Level24B_bg1',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/bg1.png');
        
        
        
       // _this.load.atlas('Level24A_backbtn',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.4A/backbtn.json');
        //_this.load.atlas('Level24A_speaker',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.4A/speaker.json');
        //_this.load.atlas('Level24A_starAnim',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.4A/starAnim.json');
        _this.load.image('Level24A_cloud',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/cloud.png');
       // _this.load.atlas('Level24A_btn',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.4A/btn.json');
        _this.load.image('Level24A_bg3',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/bg3.png');
        //_this.load.image('Level24A_tittleBaar',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level24A_replay',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.4A/reply.json');
        _this.load.atlas('Level24A_numbg',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/numbg.png' ,window.baseUrl+'json/gradeJson/2.4A/numbg.json');
        _this.load.atlas('Level24A_rightBtn',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/rightBtn.png' ,window.baseUrl+'json/gradeJson/2.4A/rightBtn.json');
        _this.load.atlas('Level24A_wrongBtn',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/wrongBtn.png' ,window.baseUrl+'json/gradeJson/2.4A/wrongBtn.json');
        
        
        _this.load.atlas('Level24A_tape15cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape15cm.png' ,window.baseUrl+'json/gradeJson/2.4A/tape15cm.json');
        _this.load.atlas('Level24A_tape30cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape30cm.png' ,window.baseUrl+'json/gradeJson/2.4A/tape30cm.json');
        _this.load.atlas('Level24A_tape100cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape100cm.png' ,window.baseUrl+'json/gradeJson/2.4A/tape100cm.json');
        _this.load.atlas('Level24A_scaleMarker',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scaleMarker.png' ,window.baseUrl+'json/gradeJson/2.4A/scaleMarker.json');
        _this.load.image('Level24A_scaleMarkerNew',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scaleMarkerNew.png');
        
        _this.load.image('Level24A_txtbox',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/box.png');
        _this.load.image('Level24A_tape1',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape1.png');
        _this.load.image('Level24A_tape2',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape2.png');
        _this.load.image('Level24A_tape3',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape3.png');
       // _this.load.image('Level24A_tape15cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape15cm.png');
       // _this.load.image('Level24A_tape30cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape30cm.png');
       // _this.load.image('Level24A_tape100cm',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape100cm.png');
        _this.load.image('Level24A_scale',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scale.png');
        _this.load.image('Level24A_scaleNew',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scaleNew.png');
        //_this.load.image('Level24A_scaleMarker',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/scaleMarker.png');
        _this.load.image('Level24A_tapeTint',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tapeTint.png');
        
        
        //My files to load
        _this.load.atlas('Level24A_shoe',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/shoe.png' ,window.baseUrl+'json/gradeJson/2.4A/shoe.json');
        _this.load.atlas('Level24A_shoe2',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/shoe2.png' ,window.baseUrl+'json/gradeJson/2.4A/shoe2.json');
        _this.load.atlas('Level24A_fish',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/fish.png' ,window.baseUrl+'json/gradeJson/2.4A/fish.json');
        _this.load.atlas('Level24A_clip',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/clip.png' ,window.baseUrl+'json/gradeJson/2.4A/clip.json');
        _this.load.atlas('Level24A_pencil',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/pencil.png' ,window.baseUrl+'json/gradeJson/2.4A/pencil.json');
        _this.load.atlas('Level24A_screwDriver',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/screwDriver.png' ,window.baseUrl+'json/gradeJson/2.4A/screwDriver.json');
        _this.load.atlas('Level24A_key',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/key.png' ,window.baseUrl+'json/gradeJson/2.4A/key.json');
        _this.load.atlas('Level24A_watch',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/watch.png' ,window.baseUrl+'json/gradeJson/2.4A/watch.json');
        _this.load.atlas('Level24A_pen',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/pen.png' ,window.baseUrl+'json/gradeJson/2.4A/pen.json');
        _this.load.atlas('Level24A_scale1',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/scale1.png' ,window.baseUrl+'json/gradeJson/2.4A/scale1.json');
        _this.load.atlas('Level24A_scale2',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/scale2.png' ,window.baseUrl+'json/gradeJson/2.4A/scale2.json');
        _this.load.atlas('Level24A_bat',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/bat.png' ,window.baseUrl+'json/gradeJson/2.4A/bat.json');
        _this.load.atlas('Level24A_cup',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/cup.png' ,window.baseUrl+'json/gradeJson/2.4A/cup.json');
        _this.load.atlas('Level24A_jug',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/jug.png' ,window.baseUrl+'json/gradeJson/2.4A/jug.json');
        _this.load.atlas('Level24A_chair',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/chair.png' ,window.baseUrl+'json/gradeJson/2.4A/chair.json');
        _this.load.atlas('Level24A_mug',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/mug.png' ,window.baseUrl+'json/gradeJson/2.4A/mug.json');
        _this.load.atlas('Level24A_table',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/table.png' ,window.baseUrl+'json/gradeJson/2.4A/table.json');
        _this.load.atlas('Level24A_pot',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/pot.png' ,window.baseUrl+'json/gradeJson/2.4A/pot.json');
        
        
        _this.load.atlas('Level24A_level2Scale1',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/level2Scale1.png' ,window.baseUrl+'json/gradeJson/2.4A/level2Scale1.json');
        _this.load.atlas('Level24A_level2Scale2',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/level2Scale2.png' ,window.baseUrl+'json/gradeJson/2.4A/level2Scale2.json');
        _this.load.atlas('Level24A_level2Scale3',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/level2Scale3.png' ,window.baseUrl+'json/gradeJson/2.4A/level2Scale3.json');
        _this.load.atlas('Level24A_tree',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/tree.png' ,window.baseUrl+'json/gradeJson/2.4A/tree.json');
        _this.load.atlas('Level24A_tape4',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/tape4.png' ,window.baseUrl+'json/gradeJson/2.4A/tape4.json');
        _this.load.atlas('Level24A_car',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/car.png' ,window.baseUrl+'json/gradeJson/2.4A/car.json');
        _this.load.atlas('Level24A_carpet',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/carpet.png' ,window.baseUrl+'json/gradeJson/2.4A/carpet.json');
		
		_this.load.atlas('Level24B_birds1',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/birds1.png' ,window.baseUrl+'json/gradeJson/2.4A/birds1.json');
        _this.load.atlas('Level24B_animals',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/animals.png' ,window.baseUrl+'json/gradeJson/2.4A/animals.json');
        _this.load.atlas('Level24B_snake',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/snake.png' ,window.baseUrl+'json/gradeJson/2.4A/snake.json');
        _this.load.atlas('Level24B_tables',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/tables.png' ,window.baseUrl+'json/gradeJson/2.4A/tables.json');
        _this.load.atlas('Level24B_buildings',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/buildings.png' ,window.baseUrl+'json/gradeJson/2.4A/buildings.json');
        _this.load.atlas('Level24B_table3',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/table3.png' ,window.baseUrl+'json/gradeJson/2.4A/table3.json');
        _this.load.atlas('Level24B_gate',window.baseUrl+'assets/gradeAssets/2.4A/gameAssets/gate.png' ,window.baseUrl+'json/gradeJson/2.4A/gate.json');

         _this.load.atlas('DisplayScale',window.baseUrl+'assets/gradeAssets/2.4A/commonAssets/DisplayScale.png' ,window.baseUrl+'json/gradeJson/2.4A/DisplayScale.json');
		
		/*_this.load.audio('Eng_24A1', window.baseUrl+'questionSounds/2.4A/English/2.4A1.mp3');
        _this.load.audio('Eng_24A2', window.baseUrl+'questionSounds/2.4A/English/2.4A2.mp3');
        _this.load.audio('Eng_24B1', window.baseUrl+'questionSounds/2.4A/English/2.4B1.mp3');
        _this.load.audio('Kan_24A1', window.baseUrl+'questionSounds/2.4A/Kannada/2.4A1.mp3');
        _this.load.audio('Kan_24A2', window.baseUrl+'questionSounds/2.4A/Kannada/2.4A2.mp3');
        _this.load.audio('Kan_24B1', window.baseUrl+'questionSounds/2.4A/Kannada/2.4B1.mp3');
        _this.load.audio('Hin_24A1', window.baseUrl+'questionSounds/2.4A/Hindi/2.4A1.mp3');
        _this.load.audio('Hin_24A2', window.baseUrl+'questionSounds/2.4A/Hindi/2.4A2.mp3');
        _this.load.audio('Hin_24B1', window.baseUrl+'questionSounds/2.4A/Hindi/2.4B1.mp3');*/
        
	},
	
	
	addgame3_2BAssets:function()
	{
		//game assets.
        _this.load.image('Level32B_gameBg',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/gameBg.png');
        
       
        
        _this.load.atlas('Level32B_Can',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Can.png',window.baseUrl+'json/gradeJson/3.2B/Can.json');
        _this.load.atlas('Level32B_Carrot',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Carot.png',window.baseUrl+'json/gradeJson/3.2B/Carot.json');
        _this.load.atlas('Level32B_Coin',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Coin.png',window.baseUrl+'json/gradeJson/3.2B/Coin.json');
        _this.load.atlas('Level32B_Ball',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Ball.png',window.baseUrl+'json/gradeJson/3.2B/Ball.json');
        _this.load.atlas('Level32B_Book',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Book.png',window.baseUrl+'json/gradeJson/3.2B/Book.json');
        _this.load.atlas('Level32B_Banana',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Banana.png',window.baseUrl+'json/gradeJson/3.2B/Banana.json');
        _this.load.atlas('Level32B_Comb',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/comb.png',window.baseUrl+'json/gradeJson/3.2B/comb.json');
        _this.load.atlas('Level32B_Eraser',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/eraser.png',window.baseUrl+'json/gradeJson/3.2B/eraser.json');
        _this.load.atlas('Level32B_Eraser2',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/eraser2.png',window.baseUrl+'json/gradeJson/3.2B/eraser2.json');
        _this.load.atlas('Level32B_Glass',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Glass.png',window.baseUrl+'json/gradeJson/3.2B/Glass.json');
        _this.load.atlas('Level32B_Glass2',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Glass2.png',window.baseUrl+'json/gradeJson/3.2B/Glass2.json');
        _this.load.atlas('Level32B_Mug',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Mug.png',window.baseUrl+'json/gradeJson/3.2B/Mug.json');
        _this.load.atlas('Level32B_Key',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Key.png',window.baseUrl+'json/gradeJson/3.2B/Key.json');
        _this.load.atlas('Level32B_Pappaya',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Pappaya.png',window.baseUrl+'json/gradeJson/3.2B/Pappaya.json');
        _this.load.atlas('Level32B_Pencil',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Pencil.png',window.baseUrl+'json/gradeJson/3.2B/Pencil.json');
        _this.load.atlas('Level32B_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.2B/ScrewDriver.json');
        _this.load.atlas('Level32B_Shoe',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Shoe.png',window.baseUrl+'json/gradeJson/3.2B/Shoe.json');
        
        //level2
        _this.load.image('Level32B_level2weight1',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/level2weight1.png');
        _this.load.image('Level32B_level2weight2',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/level2weight2.png');
        _this.load.image('Level32B_level2weight32',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/level2weight3.png');
        _this.load.image('Level32B_level2weight42',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/level2weight4.png');
        
        
        _this.load.image('Level32B_level2Bg',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/level2Bg.png');
        _this.load.image('Level32B_txtbox',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/box.png');
        _this.load.atlas('Level32B_numbg',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/numbg.png',window.baseUrl+'json/gradeJson/3.2B/numbg.json');
        _this.load.atlas('Level32B_rightBtn',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/rightBtn.png',window.baseUrl+'json/gradeJson/3.2B/rightBtn.json');
        _this.load.atlas('Level32B_wrongBtn',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/wrongBtn.png',window.baseUrl+'json/gradeJson/3.2B/wrongBtn.json');
        
        _this.load.atlas('Level32B_Eraser2Anim',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/eraser2Anim.png',window.baseUrl+'json/gradeJson/3.2B/eraser2Anim.json');
        _this.load.atlas('Level32B_BananaAnim',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/BananaAnim.png',window.baseUrl+'json/gradeJson/3.2B/BananaAnim.json');
        _this.load.atlas('Level32B_CarrotAnim',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/CarrotAnim.png',window.baseUrl+'json/gradeJson/3.2B/CarrotAnim.json');
        _this.load.atlas('Level32B_CoinAnim',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/CoinAnim.png',window.baseUrl+'json/gradeJson/3.2B/CoinAnim.json');
        _this.load.atlas('Level32B_Glass2Anim',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/GlassAnim.png',window.baseUrl+'json/gradeJson/3.2B/GlassAnim.json');
        
        _this.load.atlas('Level32B_level2weight3',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/L2.png',window.baseUrl+'json/gradeJson/3.2B/L2.json');
        _this.load.atlas('Level32B_level2weight4',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/R2.png',window.baseUrl+'json/gradeJson/3.2B/R2.json');
		
		/*_this.load.audio('E_32a', window.baseUrl+'questionSounds/3.2A/E2a.mp3');
        _this.load.audio('H_32a', window.baseUrl+'questionSounds/3.2A/H2a.mp3');
        _this.load.audio('K_32a', window.baseUrl+'questionSounds/3.2A/K2a.mp3');*/
	},
	
	addgame3_2CAssets:function()
	{
		//common for all games.
        //_this.load.atlas('Level32C_backbtn',window.baseUrl+'assets/gradeAssets/3.2C/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/3.2C/backbtn.json');
        //_this.load.atlas('Level32C_speaker',window.baseUrl+'assets/gradeAssets/3.2C/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/3.2C/speaker.json');
        //_this.load.atlas('Level32C_starAnim',window.baseUrl+'assets/gradeAssets/3.2C/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/3.2C/starAnim.json');
       // _this.load.image('Level32C_tittleBaar',window.baseUrl+'assets/gradeAssets/3.2C/commonAssets/tittleBaar.png');
       // _this.load.atlas('Level32C_replay',window.baseUrl+'assets/gradeAssets/3.2C/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/3.2C/reply.json');
       // _this.load.atlas('Level32C_btn',window.baseUrl+'assets/gradeAssets/3.2C/commonAssets/btn.png',window.baseUrl+'json/gradeJson/3.2C/btn.json');
        _this.load.image('Level32C_bg',window.baseUrl+'assets/gradeAssets/3.2C/commonAssets/bg.png');
         
        //game assets.
        _this.load.image('Level32C_level2Bg',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/gameBg.png');
        
        _this.load.image('Level32C_weight1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/weight1.png');
        _this.load.image('Level32C_weight2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/weight2.png');
        _this.load.image('Level32C_weight3',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/weight3.png');
        
        _this.load.atlas('Level32C_Can',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Can.png',window.baseUrl+'json/gradeJson/3.2C/Can.json');
        _this.load.atlas('Level32C_Carrot',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Carot.png',window.baseUrl+'json/gradeJson/3.2C/Carot.json');
        _this.load.atlas('Level32C_Coin',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Coin.png',window.baseUrl+'json/gradeJson/3.2C/Coin.json');
        _this.load.atlas('Level32C_Ball',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Ball.png',window.baseUrl+'json/gradeJson/3.2C/Ball.json');
        _this.load.atlas('Level32C_Book',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Book.png',window.baseUrl+'json/gradeJson/3.2C/Book.json');
        _this.load.atlas('Level32C_Banana',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Banana.png',window.baseUrl+'json/gradeJson/3.2C/Banana.json');
        _this.load.atlas('Level32C_Comb',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/comb.png',window.baseUrl+'json/gradeJson/3.2C/comb.json');
        _this.load.atlas('Level32C_Eraser',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/eraser.png',window.baseUrl+'json/gradeJson/3.2C/eraser.json');
        _this.load.atlas('Level32C_Eraser2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/eraser2.png',window.baseUrl+'json/gradeJson/3.2C/eraser2.json');
        _this.load.atlas('Level32C_Glass',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Glass.png',window.baseUrl+'json/gradeJson/3.2C/Glass.json');
        _this.load.atlas('Level32C_Glass2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Glass2.png',window.baseUrl+'json/gradeJson/3.2C/Glass2.json');
        _this.load.atlas('Level32C_Mug',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Mug.png',window.baseUrl+'json/gradeJson/3.2C/Mug.json');
        _this.load.atlas('Level32C_Key',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Key.png',window.baseUrl+'json/gradeJson/3.2C/Key.json');
        _this.load.atlas('Level32C_Pappaya',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Pappaya.png',window.baseUrl+'json/gradeJson/3.2C/Pappaya.json');
        _this.load.atlas('Level32C_Pencil',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Pencil.png',window.baseUrl+'json/gradeJson/3.2C/Pencil.json');
        _this.load.atlas('Level32C_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.2C/ScrewDriver.json');
        _this.load.atlas('Level32C_Shoe',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Shoe.png',window.baseUrl+'json/gradeJson/3.2C/Shoe.json');
        
        //level2
        _this.load.image('Level32C_level2weight1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight1.png');
        _this.load.image('Level32C_level2weight2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight2.png');
        _this.load.image('Level32C_level2weight32',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight3.png');
        _this.load.image('Level32C_level2weight42',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight4.png');
        
        
        _this.load.image('Level32C_level2Bg',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2Bg.png');
        _this.load.image('Level32C_txtbox',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/box.png');
        _this.load.atlas('Level32C_numbg',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/numbg.png',window.baseUrl+'json/gradeJson/3.2C/numbg.json');
        _this.load.atlas('Level32C_rightBtn',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/rightBtn.png',window.baseUrl+'json/gradeJson/3.2C/rightBtn.json');
        _this.load.atlas('Level32C_wrongBtn',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/wrongBtn.png',window.baseUrl+'json/gradeJson/3.2C/wrongBtn.json');
        
        _this.load.atlas('Level32C_Eraser2Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/eraser2Anim.png',window.baseUrl+'json/gradeJson/3.2C/eraser2Anim.json');
        _this.load.atlas('Level32C_BananaAnim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/BananaAnim.png',window.baseUrl+'json/gradeJson/3.2C/BananaAnim.json');
        _this.load.atlas('Level32C_CarrotAnim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/CarrotAnim.png',window.baseUrl+'json/gradeJson/3.2C/CarrotAnim.json');
        _this.load.atlas('Level32C_CoinAnim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/CoinAnim.png',window.baseUrl+'json/gradeJson/3.2C/CoinAnim.json');
        _this.load.atlas('Level32C_Glass2Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/GlassAnim.png',window.baseUrl+'json/gradeJson/3.2C/GlassAnim.json');
        
        _this.load.atlas('Level32C_level2weight3',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/L2.png',window.baseUrl+'json/gradeJson/3.2C/L2.json');
        _this.load.atlas('Level32C_level2weight4',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/R2.png',window.baseUrl+'json/gradeJson/3.2C/R2.json');
       
             //level3
        _this.load.atlas('Level32C_bottle',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/bottle.png',window.baseUrl+'json/gradeJson/3.2C/bottle.json');
        _this.load.atlas('Level32C_w1Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w1Anim.png',window.baseUrl+'json/gradeJson/3.2C/w1Anim.json');
        _this.load.image('Level32C_w1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w1.png');
        _this.load.image('Level32C_w2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w2.png');
        _this.load.atlas('Level32C_w2Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w2Anim.png',window.baseUrl+'json/gradeJson/3.2C/w2Anim.json');
        _this.load.atlas('Level32C_tomoto',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/tomoto.png',window.baseUrl+'json/gradeJson/3.2C/tomoto.json');
        _this.load.atlas('Level32C_spoon',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/spoon.png',window.baseUrl+'json/gradeJson/3.2C/spoon.json');
        _this.load.atlas('Level32C_eraser1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/eraser1.png',window.baseUrl+'json/gradeJson/3.2C/eraser1.json');
        _this.load.atlas('Level32C_rope',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/rope.png',window.baseUrl+'json/gradeJson/3.2C/rope.json');
        _this.load.atlas('Level32C_leef',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/leef.png',window.baseUrl+'json/gradeJson/3.2C/leef.json');
        _this.load.atlas('Level32C_coin1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/coin1.png',window.baseUrl+'json/gradeJson/3.2C/coin1.json');
        _this.load.atlas('Level32C_Comb1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/Comb1.png',window.baseUrl+'json/gradeJson/3.2C/Comb1.json');
        _this.load.atlas('Level32C_w1AnimGlow',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w1AnimGlow.png',window.baseUrl+'json/gradeJson/3.2C/w1AnimGlow.json');
        _this.load.atlas('Level32C_w2AnimGlow',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w2AnimGlow.png',window.baseUrl+'json/gradeJson/3.2C/w2AnimGlow.json');
        
        _this.load.atlas('Level32C_w22AnimGlow',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Anim2/w22AnimGlow.png',window.baseUrl+'json/gradeJson/3.2C/Anim2/w22AnimGlow.json');
        _this.load.atlas('Level32C_w22Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Anim2/w22Anim.png',window.baseUrl+'json/gradeJson/3.2C/Anim2/w22Anim.json');
        _this.load.image('Level32C_w22',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Anim2/w22.png');

        //level4
        _this.load.atlas('Level32C_bottle2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/bottle2.png',window.baseUrl+'json/gradeJson/3.2C/bottle2.json');
	},
	
	addgame3_3AAssets:function()
	{
		//game assets.
        _this.load.image('Level33A_gameBg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/gameBg.png');
      
        _this.load.atlas('Level33A_Can',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Can.png',window.baseUrl+'json/gradeJson/3.3A/Can.json');
        _this.load.atlas('Level33A_Carrot',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Carot.png',window.baseUrl+'json/gradeJson/3.3A/Carot.json');
        _this.load.atlas('Level33A_Coin',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Coin.png',window.baseUrl+'json/gradeJson/3.3A/Coin.json');
        _this.load.atlas('Level33A_Ball',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Ball.png',window.baseUrl+'json/gradeJson/3.3A/Ball.json');
        _this.load.atlas('Level33A_Book',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Book.png',window.baseUrl+'json/gradeJson/3.3A/Book.json');
        _this.load.atlas('Level33A_Banana',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Banana.png',window.baseUrl+'json/gradeJson/3.3A/Banana.json');
        _this.load.atlas('Level33A_Comb',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/comb.png',window.baseUrl+'json/gradeJson/3.3A/comb.json');
        _this.load.atlas('Level33A_Eraser',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/eraser.png',window.baseUrl+'json/gradeJson/3.3A/eraser.json');
        _this.load.atlas('Level33A_Eraser2',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/eraser2.png',window.baseUrl+'json/gradeJson/3.3A/eraser2.json');
        _this.load.atlas('Level33A_Glass',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Glass.png',window.baseUrl+'json/gradeJson/3.3A/Glass.json');
        _this.load.atlas('Level33A_Glass2',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Glass2.png',window.baseUrl+'json/gradeJson/3.3A/Glass2.json');
        _this.load.atlas('Level33A_Mug',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Mug.png',window.baseUrl+'json/gradeJson/3.3A/Mug.json');
        _this.load.atlas('Level33A_muggg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/muggg.png',window.baseUrl+'json/gradeJson/3.3A/muggg.json');
        _this.load.atlas('Level33A_Key',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Key.png',window.baseUrl+'json/gradeJson/3.3A/Key.json');
        _this.load.atlas('Level33A_Pappaya',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Pappaya.png',window.baseUrl+'json/gradeJson/3.3A/Pappaya.json');
        _this.load.atlas('Level33A_pappaya1',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/pappaya1.png',window.baseUrl+'json/gradeJson/3.3A/pappaya1.json');
        _this.load.atlas('Level33A_Pencil',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Pencil.png',window.baseUrl+'json/gradeJson/3.3A/Pencil.json');
        _this.load.atlas('Level33A_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.3A/ScrewDriver.json');
        _this.load.atlas('Level33A_Shoe',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Shoe.png',window.baseUrl+'json/gradeJson/3.3A/Shoe.json');
        _this.load.atlas('Level33A_bottle32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/bottle32.png',window.baseUrl+'json/gradeJson/3.3A/bottle32.json');
        _this.load.atlas('Level33A_tomato32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/tomato32.png',window.baseUrl+'json/gradeJson/3.3A/tomato32.json');
        _this.load.atlas('Level33A_carrot32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/carrot32.png',window.baseUrl+'json/gradeJson/3.3A/carrot32.json');
        _this.load.atlas('Level33A_banana32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/banana32.png',window.baseUrl+'json/gradeJson/3.3A/banana32.json');
        _this.load.atlas('Level33A_bread',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/bread.png',window.baseUrl+'json/gradeJson/3.3A/bread.json');
        _this.load.atlas('Level33A_ball32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/ball32.png',window.baseUrl+'json/gradeJson/3.3A/ball32.json');
        _this.load.atlas('Level33A_banana322',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/banana322.png',window.baseUrl+'json/gradeJson/3.3A/banana322.json');
        _this.load.atlas('Level33A_block50',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/block50.png',window.baseUrl+'json/gradeJson/3.3A/block50.json');
        _this.load.atlas('Level33A_bottle322',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/bottle322.png',window.baseUrl+'json/gradeJson/3.3A/bottle322.json');
        _this.load.atlas('Level33A_redbook',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/redbook.png',window.baseUrl+'json/gradeJson/3.3A/redbook.json');
        
        
        //level2
        _this.load.image('Level33A_level2weight1',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/level2weight1.png');
        _this.load.image('Level33A_level2weight2',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/level2weight2.png');
        //_this.load.image('Level33A_level2weight32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/level2weight3.png');
        //_this.load.image('Level33A_level2weight42',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/level2weight4.png');
        
        
        _this.load.image('Level33A_level2Bg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/level2Bg.png');
        _this.load.image('Level33A_txtbox',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/box.png');
        _this.load.atlas('Level33A_numbg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/numbg.png',window.baseUrl+'json/gradeJson/3.3A/numbg.json');
        _this.load.atlas('Level33A_rightBtn',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/rightBtn.png',window.baseUrl+'json/gradeJson/3.3A/rightBtn.json');
        _this.load.atlas('Level33A_wrongBtn',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/wrongBtn.png',window.baseUrl+'json/gradeJson/3.3A/wrongBtn.json');
        
        _this.load.atlas('Level33A_Eraser2Anim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/eraser2Anim.png',window.baseUrl+'json/gradeJson/3.3A/eraser2Anim.json');
        _this.load.atlas('Level33A_BananaAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/BananaAnim.png',window.baseUrl+'json/gradeJson/3.3A/BananaAnim.json');
        _this.load.atlas('Level33A_CarrotAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/CarrotAnim.png',window.baseUrl+'json/gradeJson/3.3A/CarrotAnim.json');
        _this.load.atlas('Level33A_CoinAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/CoinAnim.png',window.baseUrl+'json/gradeJson/3.3A/CoinAnim.json');
        _this.load.atlas('Level33A_Glass2Anim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/GlassAnim.png',window.baseUrl+'json/gradeJson/3.3A/GlassAnim.json');
        
        _this.load.atlas('Level33A_level2weight3',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/L2.png',window.baseUrl+'json/gradeJson/3.3A/L2.json');
        _this.load.atlas('Level33A_level2weight4',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/R2.png',window.baseUrl+'json/gradeJson/3.3A/R2.json');
       
     
        
        //level33a
        _this.load.image('Level33A_bg1',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/bg1.png');
        _this.load.image('Level33A_level2weight32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/level2weight32.png');
        _this.load.image('Level33A_level2weight42',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/level2weight42.png');
        _this.load.atlas('Level33A_50g',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/50g.png',window.baseUrl+'json/gradeJson/3.3A/50g.json'); 
        _this.load.atlas('Level33A_100g',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/100g.png',window.baseUrl+'json/gradeJson/3.3A/100g.json'); 
        _this.load.atlas('Level33A_200g',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/200g.png',window.baseUrl+'json/gradeJson/3.3A/200g.json'); 
        _this.load.atlas('Level33A_500g',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/500g.png',window.baseUrl+'json/gradeJson/3.3A/500g.json'); 
        
        _this.load.atlas('Level33A_50gAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/50gAnim.png',window.baseUrl+'json/gradeJson/3.3A/50gAnim.json'); 
        _this.load.atlas('Level33A_100gAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/100gAnim.png',window.baseUrl+'json/gradeJson/3.3A/100gAnim.json'); 
        _this.load.atlas('Level33A_200gAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/200gAnim.png',window.baseUrl+'json/gradeJson/3.3A/200gAnim.json'); 
        _this.load.atlas('Level33A_500gAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/500gAnim.png',window.baseUrl+'json/gradeJson/3.3A/500gAnim.json'); 
        
        _this.load.atlas('Level33A_50gg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/50gg.png',window.baseUrl+'json/gradeJson/3.3A/50gg.json'); 
        _this.load.atlas('Level33A_100gg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/100gg.png',window.baseUrl+'json/gradeJson/3.3A/100gg.json'); 
        _this.load.atlas('Level33A_200gg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/200gg.png',window.baseUrl+'json/gradeJson/3.3A/200gg.json'); 
        _this.load.atlas('Level33A_500gg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/500gg.png',window.baseUrl+'json/gradeJson/3.3A/500gg.json');
        
        _this.load.atlas('Level33A_w1AnimGlow',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/w1AnimGlow.png',window.baseUrl+'json/gradeJson/3.3A/w1AnimGlow.json');
        
 
        _this.load.atlas('Level33A_targetAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/targetAnim.png',window.baseUrl+'json/gradeJson/3.3A/targetAnim.json');
		_this.load.atlas('Level33A_bottle2',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level3/bottle2.png',window.baseUrl+'json/gradeJson/3.3A/bottle2.json');
        _this.load.atlas('Level33A_bottle',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level3/bottle.png',window.baseUrl+'json/gradeJson/3.3A/bottle.json');
		
		/*_this.load.audio('Eng_33A', window.baseUrl+'questionSounds/3.3A/English/3.3A.mp3');
        _this.load.audio('Eng_33B1', window.baseUrl+'questionSounds/3.3A/English/3.3B_1.mp3');
        _this.load.audio('Eng_33B2', window.baseUrl+'questionSounds/3.3A/English/3.3B_2.mp3');
        _this.load.audio('Kan_33A', window.baseUrl+'questionSounds/3.3A/Kannada/3.3A.mp3');
        _this.load.audio('Kan_33B1', window.baseUrl+'questionSounds/3.3A/Kannada/3.3B_1.mp3');
        _this.load.audio('Kan_33B2', window.baseUrl+'questionSounds/3.3A/Kannada/3.3B_2.mp3');
        _this.load.audio('Kan_33_3', window.baseUrl+'questionSounds/3.3A/Kannada/3.3_3.mp3');
        _this.load.audio('Kan_33_4', window.baseUrl+'questionSounds/3.3A/Kannada/3.3_4.mp3');
        _this.load.audio('Hin_33A', window.baseUrl+'questionSounds/3.3A/Hindi/3.3A.mp3');
        _this.load.audio('Hin_33B1', window.baseUrl+'questionSounds/3.3A/Hindi/3.3B_1.mp3');
        _this.load.audio('Hin_33B2', window.baseUrl+'questionSounds/3.3A/Hindi/3.3B_2.mp3');*/
	},
	
	
	addgame3_3B1Assets:function()
	{
		//level22
        _this.load.image('Level33B1_Newlevel2weight1',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2weight1.png');
        _this.load.image('Level33B1_Newlevel2weight2',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2weight2.png');
        _this.load.image('Level33B1_Newlevel2weight3',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2weight3.png');
        _this.load.image('Level33B1_Newlevel2weight4',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2weight4.png');
        
        
        _this.load.atlas('Level33B1_Newbottle',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/bottle.png',window.baseUrl+'json/gradeJson/3.3B1/level22/bottle.json');
        _this.load.atlas('Level33B1_Newjug',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/jug.png',window.baseUrl+'json/gradeJson/3.3B1/level22/jug.json');
        _this.load.atlas('Level33B1_Newpot',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/pot.png',window.baseUrl+'json/gradeJson/3.3B1/level22/pot.json');
        _this.load.atlas('Level33B1_Newcan',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/can.png',window.baseUrl+'json/gradeJson/3.3B1/level22/can.json');
        _this.load.atlas('Level33B1_NewfruitBox',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/fruitBox.png',window.baseUrl+'json/gradeJson/3.3B1/level22/fruitBox.json');
        _this.load.atlas('Level33B1_Newbox1',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/box1.png',window.baseUrl+'json/gradeJson/3.3B1/level22/box1.json');
        _this.load.atlas('Level33B1_Newbag1',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/bag1.png',window.baseUrl+'json/gradeJson/3.3B1/level22/bag1.json');
        _this.load.atlas('Level33B1_Newbag2',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/bag2.png',window.baseUrl+'json/gradeJson/3.3B1/level22/bag2.json');
        _this.load.atlas('Level33B1_Newcylinder',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/cylinder.png',window.baseUrl+'json/gradeJson/3.3B1/level22/cylinder.json');
        
        _this.load.atlas('Level33B1_New1kg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/1kg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/1kg.json');
        _this.load.atlas('Level33B1_New2kg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/2kg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/2kg.json');
        _this.load.atlas('Level33B1_New5kg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/5kg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/5kg.json');
        _this.load.atlas('Level33B1_New10kg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/10kg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/10kg.json');
        
        _this.load.atlas('Level33B1_New1kgAnim',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/1kgAnim.png',window.baseUrl+'json/gradeJson/3.3B1/level22/1kgAnim.json');
        _this.load.atlas('Level33B1_New2kgAnim',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/2kgAnim.png',window.baseUrl+'json/gradeJson/3.3B1/level22/2kgAnim.json');
        _this.load.atlas('Level33B1_New5kgAnim',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/5kgAnim.png',window.baseUrl+'json/gradeJson/3.3B1/level22/5kgAnim.json');
        _this.load.atlas('Level33B1_New10kgAnim',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/10kgAnim.png',window.baseUrl+'json/gradeJson/3.3B1/level22/10kgAnim.json');
        

        
        _this.load.image('Level33B1_Newlevel2Bg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2Bg.png');
        _this.load.image('Level33B1_Newtxtbox',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/box.png');
        _this.load.atlas('Level33B1_Newnumbg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/numbg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/numbg.json');
        _this.load.atlas('Level33B1_NewrightBtn',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/rightBtn.png',window.baseUrl+'json/gradeJson/3.3B1/level22/rightBtn.json');
        _this.load.atlas('Level33B1_NewwrongBtn',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/wrongBtn.png',window.baseUrl+'json/gradeJson/3.3B1/level22/wrongBtn.json');
	},
	
	addgame3_3B2Assets:function()
	{
		_this.load.image('Level33B2_gameBg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/gameBg.png');
        
        _this.load.image('Level33B2_weight1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/weight1.png');
        _this.load.image('Level33B2_weight2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/weight2.png');
        _this.load.image('Level33B2_weight3',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/weight3.png');
        
        _this.load.atlas('Level33B2_Can',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Can.png',window.baseUrl+'json/gradeJson/3.3B2/Can.json');
        _this.load.atlas('Level33B2_Carrot',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Carot.png',window.baseUrl+'json/gradeJson/3.3B2/Carot.json');
        _this.load.atlas('Level33B2_Coin',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Coin.png',window.baseUrl+'json/gradeJson/3.3B2/Coin.json');
        _this.load.atlas('Level33B2_Ball',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Ball.png',window.baseUrl+'json/gradeJson/3.3B2/Ball.json');
        _this.load.atlas('Level33B2_Book',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Book.png',window.baseUrl+'json/gradeJson/3.3B2/Book.json');
        _this.load.atlas('Level33B2_Banana',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Banana.png',window.baseUrl+'json/gradeJson/3.3B2/Banana.json');
        _this.load.atlas('Level33B2_Comb',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/comb.png',window.baseUrl+'json/gradeJson/3.3B2/comb.json');
        _this.load.atlas('Level33B2_Eraser',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/eraser.png',window.baseUrl+'json/gradeJson/3.3B2/eraser.json');
        _this.load.atlas('Level33B2_Eraser2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/eraser2.png',window.baseUrl+'json/gradeJson/3.3B2/eraser2.json');
        _this.load.atlas('Level33B2_Glass',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Glass.png',window.baseUrl+'json/gradeJson/3.3B2/Glass.json');
        _this.load.atlas('Level33B2_Glass2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Glass2.png',window.baseUrl+'json/gradeJson/3.3B2/Glass2.json');
        _this.load.atlas('Level33B2_Mug',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Mug.png',window.baseUrl+'json/gradeJson/3.3B2/Mug.json');
        _this.load.atlas('Level33B2_muggg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/muggg.png',window.baseUrl+'json/gradeJson/3.3B2/muggg.json');
        _this.load.atlas('Level33B2_Key',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Key.png',window.baseUrl+'json/gradeJson/3.3B2/Key.json');
        _this.load.atlas('Level33B2_Pappaya',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Pappaya.png',window.baseUrl+'json/gradeJson/3.3B2/Pappaya.json');
        _this.load.atlas('Level33B2_pappaya1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/pappaya1.png',window.baseUrl+'json/gradeJson/3.3B2/pappaya1.json');
        _this.load.atlas('Level33B2_Pencil',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Pencil.png',window.baseUrl+'json/gradeJson/3.3B2/Pencil.json');
        _this.load.atlas('Level33B2_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.3B2/ScrewDriver.json');
        _this.load.atlas('Level33B2_Shoe',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Shoe.png',window.baseUrl+'json/gradeJson/3.3B2/Shoe.json');
        _this.load.atlas('Level33B2_bottle32',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/bottle32.png',window.baseUrl+'json/gradeJson/3.3B2/bottle32.json');
        _this.load.atlas('Level33B2_tomato32',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/tomato32.png',window.baseUrl+'json/gradeJson/3.3B2/tomato32.json');
        _this.load.atlas('Level33B2_carrot32',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/carrot32.png',window.baseUrl+'json/gradeJson/3.3B2/carrot32.json');
        _this.load.atlas('Level33B2_banana32',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/banana32.png',window.baseUrl+'json/gradeJson/3.3B2/banana32.json');
        _this.load.atlas('Level33B2_bread',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/bread.png',window.baseUrl+'json/gradeJson/3.3B2/bread.json');
        _this.load.atlas('Level33B2_ball32',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/ball32.png',window.baseUrl+'json/gradeJson/3.3B2/ball32.json');
        _this.load.atlas('Level33B2_banana322',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/banana322.png',window.baseUrl+'json/gradeJson/3.3B2/banana322.json');
        _this.load.atlas('Level33B2_block50',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/block50.png',window.baseUrl+'json/gradeJson/3.3B2/block50.json');
        _this.load.atlas('Level33B2_bottle322',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/bottle322.png',window.baseUrl+'json/gradeJson/3.3B2/bottle322.json');
        _this.load.atlas('Level33B2_redbook',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/redbook.png',window.baseUrl+'json/gradeJson/3.3B2/redbook.json');
        
        
        //level2
        _this.load.image('Level33B2_level2weight1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/level2weight1.png');
        _this.load.image('Level33B2_level2weight2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/level2weight2.png');

        _this.load.image('Level33B2_level2Bg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/level2Bg.png');
        _this.load.image('Level33B2_txtbox',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/box.png');
        _this.load.atlas('Level33B2_numbg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/numbg.png',window.baseUrl+'json/gradeJson/3.3B2/numbg.json');
        _this.load.atlas('Level33B2_rightBtn',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/rightBtn.png',window.baseUrl+'json/gradeJson/3.3B2/rightBtn.json');
        _this.load.atlas('Level33B2_wrongBtn',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/wrongBtn.png',window.baseUrl+'json/gradeJson/3.3B2/wrongBtn.json');
        
        _this.load.atlas('Level33B2_Eraser2Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/eraser2Anim.png',window.baseUrl+'json/gradeJson/3.3B2/eraser2Anim.json');
        _this.load.atlas('Level33B2_BananaAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/BananaAnim.png',window.baseUrl+'json/gradeJson/3.3B2/BananaAnim.json');
        _this.load.atlas('Level33B2_CarrotAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/CarrotAnim.png',window.baseUrl+'json/gradeJson/3.3B2/CarrotAnim.json');
        _this.load.atlas('Level33B2_CoinAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/CoinAnim.png',window.baseUrl+'json/gradeJson/3.3B2/CoinAnim.json');
        _this.load.atlas('Level33B2_Glass2Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/GlassAnim.png',window.baseUrl+'json/gradeJson/3.3B2/GlassAnim.json');
        
        _this.load.atlas('Level33B2_level2weight3',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/L2.png',window.baseUrl+'json/gradeJson/3.3B2/L2.json');
        _this.load.atlas('Level33B2_level2weight4',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/R2.png',window.baseUrl+'json/gradeJson/3.3B2/R2.json');
       
             //level3
        _this.load.atlas('Level33B2_bottle',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/bottle.png',window.baseUrl+'json/gradeJson/3.3B2/bottle.json');
        _this.load.atlas('Level33B2_w1Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/w1Anim.png',window.baseUrl+'json/gradeJson/3.3B2/w1Anim.json');
        _this.load.image('Level33B2_w1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/w1.png');
        _this.load.image('Level33B2_w2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/w2.png');
        _this.load.atlas('Level33B2_w2Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/w2Anim.png',window.baseUrl+'json/gradeJson/3.3B2/w2Anim.json');
        _this.load.atlas('Level33B2_tomoto',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/tomoto.png',window.baseUrl+'json/gradeJson/3.3B2/tomoto.json');
        _this.load.atlas('Level33B2_spoon',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/spoon.png',window.baseUrl+'json/gradeJson/3.3B2/spoon.json');
        _this.load.atlas('Level33B2_eraser1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/eraser1.png',window.baseUrl+'json/gradeJson/3.3B2/eraser1.json');
        _this.load.atlas('Level33B2_rope',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/rope.png',window.baseUrl+'json/gradeJson/3.3B2/rope.json');
        _this.load.atlas('Level33B2_leef',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/leef.png',window.baseUrl+'json/gradeJson/3.3B2/leef.json');
        _this.load.atlas('Level33B2_coin1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/coin1.png',window.baseUrl+'json/gradeJson/3.3B2/coin1.json');
        _this.load.atlas('Level33B2_Comb1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/Comb1.png',window.baseUrl+'json/gradeJson/3.3B2/Comb1.json');
        _this.load.atlas('Level33B2_w1AnimGlow',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/w1AnimGlow.png',window.baseUrl+'json/gradeJson/3.3B2/w1AnimGlow.json');
        _this.load.atlas('Level33B2_w2AnimGlow',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/w2AnimGlow.png',window.baseUrl+'json/gradeJson/3.3B2/w2AnimGlow.json');


        //level4
        _this.load.atlas('Level33B2_bottle2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/bottle2.png',window.baseUrl+'json/gradeJson/3.3B2/bottle2.json');
        
        //level33a
        _this.load.image('Level33B2_bg1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33a/bg1.png');
        _this.load.image('Level33B2_level2weight32',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33a/level2weight32.png');
        _this.load.image('Level33B2_level2weight42',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33a/level2weight42.png');
       
        
        _this.load.atlas('Level33B2_w1AnimGlow',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33a/w1AnimGlow.png',window.baseUrl+'json/gradeJson/3.3B2/w1AnimGlow.json');
        
 
        _this.load.atlas('Level33B2_targetAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33a/targetAnim.png',window.baseUrl+'json/gradeJson/3.3B2/targetAnim.json');
        
        //level33c
        _this.load.atlas('Level33B2_cylinder33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/cylinder33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/cylinder33.json'); 
        _this.load.atlas('Level33B2_50g33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/50g33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/50g33.json'); 
        _this.load.atlas('Level33B2_100g33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/100g33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/100g33.json'); 
        _this.load.atlas('Level33B2_200g33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/200g33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/200g33.json'); 
        _this.load.atlas('Level33B2_500g33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/500g33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/500g33.json'); 
        
        _this.load.atlas('Level33B2_50g33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/50g33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/50g33Anim.json'); 
        _this.load.atlas('Level33B2_100g33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/100g33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/100g33Anim.json'); 
        _this.load.atlas('Level33B2_200g33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/200g33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/200g33Anim.json'); 
        _this.load.atlas('Level33B2_500g33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/500g33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/500g33Anim.json'); 
        
        _this.load.atlas('Level33B2_1kg33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/1kg33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/1kg33.json'); 
        _this.load.atlas('Level33B2_2kg33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/2kg33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/2kg33.json'); 
        _this.load.atlas('Level33B2_5kg33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/5kg33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/5kg33.json'); 
        _this.load.atlas('Level33B2_10kg33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/10kg33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/10kg33.json'); 
        
        _this.load.atlas('Level33B2_1kg33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/1kg33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/1kg33Anim.json'); 
        _this.load.atlas('Level33B2_2kg33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/2kg33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/2kg33Anim.json'); 
        _this.load.atlas('Level33B2_5kg33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/5kg33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/5kg33Anim.json'); 
        _this.load.atlas('Level33B2_10kg33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/10kg33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/10kg33Anim.json'); 
        
        _this.load.atlas('Level33B2_bag33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/bag33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/bag33.json');
        _this.load.atlas('Level33B2_coinbag',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/coinbag.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/coinbag.json');
        _this.load.atlas('Level33B2_box33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/box33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/box33.json');
        _this.load.atlas('Level33B2_fruitbox33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/fruitbox33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/fruitbox33.json');
        _this.load.atlas('Level33B2_can33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/can33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/can33.json');
        _this.load.atlas('Level33B2_pot33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/pot33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/pot33.json');
        _this.load.atlas('Level33B2_mugg33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/mugg33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/mugg33.json');
        _this.load.atlas('Level33B2_bottles33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/bottles33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/bottles33.json');
        _this.load.atlas('Level33B2_box-new',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/box-new.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/box-new.json');
        
        
        //level22
        _this.load.image('Level33B2_Newlevel2weight1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/level2weight1.png');
        _this.load.image('Level33B2_Newlevel2weight2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/level2weight2.png');
        _this.load.image('Level33B2_Newlevel2weight3',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/level2weight3.png');
        _this.load.image('Level33B2_Newlevel2weight4',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/level2weight4.png');
        
        
        _this.load.atlas('Level33B2_Newbottle',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/bottle.png',window.baseUrl+'json/gradeJson/3.3B2/level22/bottle.json');
        _this.load.atlas('Level33B2_Newjug',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/jug.png',window.baseUrl+'json/gradeJson/3.3B2/level22/jug.json');
        _this.load.atlas('Level33B2_Newpot',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/pot.png',window.baseUrl+'json/gradeJson/3.3B2/level22/pot.json');
        _this.load.atlas('Level33B2_Newcan',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/can.png',window.baseUrl+'json/gradeJson/3.3B2/level22/can.json');
        _this.load.atlas('Level33B2_NewfruitBox',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/fruitBox.png',window.baseUrl+'json/gradeJson/3.3B2/level22/fruitBox.json');
        _this.load.atlas('Level33B2_Newbox1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/box1.png',window.baseUrl+'json/gradeJson/3.3B2/level22/box1.json');
        _this.load.atlas('Level33B2_Newbag1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/bag1.png',window.baseUrl+'json/gradeJson/3.3B2/level22/bag1.json');
        _this.load.atlas('Level33B2_Newbag2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/bag2.png',window.baseUrl+'json/gradeJson/3.3B2/level22/bag2.json');
        _this.load.atlas('Level33B2_Newcylinder',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/cylinder.png',window.baseUrl+'json/gradeJson/3.3B2/level22/cylinder.json');
        
        _this.load.atlas('Level33B2_New1kg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/1kg.png',window.baseUrl+'json/gradeJson/3.3B2/level22/1kg.json');
        _this.load.atlas('Level33B2_New2kg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/2kg.png',window.baseUrl+'json/gradeJson/3.3B2/level22/2kg.json');
        _this.load.atlas('Level33B2_New5kg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/5kg.png',window.baseUrl+'json/gradeJson/3.3B2/level22/5kg.json');
        _this.load.atlas('Level33B2_New10kg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/10kg.png',window.baseUrl+'json/gradeJson/3.3B2/level22/10kg.json');
        
        _this.load.atlas('Level33B2_New1kgAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/1kgAnim.png',window.baseUrl+'json/gradeJson/3.3B2/level22/1kgAnim.json');
        _this.load.atlas('Level33B2_New2kgAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/2kgAnim.png',window.baseUrl+'json/gradeJson/3.3B2/level22/2kgAnim.json');
        _this.load.atlas('Level33B2_New5kgAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/5kgAnim.png',window.baseUrl+'json/gradeJson/3.3B2/level22/5kgAnim.json');
        _this.load.atlas('Level33B2_New10kgAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/10kgAnim.png',window.baseUrl+'json/gradeJson/3.3B2/level22/10kgAnim.json');
        

        
        _this.load.image('Level33B2_Newlevel2Bg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/level2Bg.png');
        _this.load.image('Level33B2_Newtxtbox',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/box.png');
        _this.load.atlas('Level33B2_Newnumbg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/numbg.png',window.baseUrl+'json/gradeJson/3.3B2/level22/numbg.json');
        _this.load.atlas('Level33B2_NewrightBtn',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/rightBtn.png',window.baseUrl+'json/gradeJson/3.3B2/level22/rightBtn.json');
        _this.load.atlas('Level33B2_NewwrongBtn',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/wrongBtn.png',window.baseUrl+'json/gradeJson/3.3B2/level22/wrongBtn.json');
	},
	
	addgame4_1AAssets:function()
	{
		/*_this.load.image('Level41A_bg1',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/bg1.png');
        //_this.load.atlas('Level41A_backbtn',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/4.1A/backbtn.json');
        //_this.load.atlas('Level41A_speaker',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/4.1A/speaker.json');
        //_this.load.atlas('Level41A_starAnim',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/4.1A/starAnim.json');
        _this.load.image('Level41A_cloud',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/cloud.png');
      //  _this.load.atlas('Level41A_btn',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.1A/btn.json');
        _this.load.image('Level41A_bg3',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/bg3.png');
      //  _this.load.image('Level41A_tittleBaar',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level41A_replay',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.1A/reply.json');
        
        //My files to load
        _this.load.atlas('Level41A_gameBox',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/gameBox.png' ,window.baseUrl+'json/gradeJson/4.1A/gameBox.json');
        _this.load.atlas('Level41A_allimg',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/allimg.png' ,window.baseUrl+'json/gradeJson/4.1A/allimg.json');
        _this.load.atlas('Level41A_tickMark',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/tickMark.png' ,window.baseUrl+'json/gradeJson/4.1A/tickMark.json');
        _this.load.image('Level41A_croc',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/croc.png');
        _this.load.image('Level41A_croc2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/croc2.png');
        
        _this.load.image('Level41A_glow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glow.png');
        
        //game items
        _this.load.image('Level41A_cup1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/1.png');
        _this.load.image('Level41A_cup2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/2.png');
        _this.load.image('Level41A_cup3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/3.png');
        _this.load.image('Level41A_cup4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/4.png');
        
        _this.load.image('Level41A_bucket1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/5.png');
        _this.load.image('Level41A_bucket2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/6.png');
        _this.load.image('Level41A_bucket3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/7.png');
        _this.load.image('Level41A_bucket4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/8.png');
        
        _this.load.image('Level41A_jug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/9.png');
        _this.load.image('Level41A_jug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/10.png');
        _this.load.image('Level41A_jug3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/11.png');
        _this.load.image('Level41A_jug4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/12.png');
        
        _this.load.image('Level41A_flask1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/13.png');
        _this.load.image('Level41A_flask2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/14.png');
        _this.load.image('Level41A_flask3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/15.png');
        _this.load.image('Level41A_flask4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/16.png');
        
        _this.load.image('Level41A_bottle1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/17.png');
        _this.load.image('Level41A_bottle2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/18.png');
        _this.load.image('Level41A_bottle3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/19.png');
        _this.load.image('Level41A_bottle4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/20.png');
        
        _this.load.image('Level41A_milk1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/21.png');
        _this.load.image('Level41A_milk2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/22.png');
        _this.load.image('Level41A_milk3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/23.png');
        _this.load.image('Level41A_milk4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/24.png');
        
        _this.load.image('Level41A_shadow1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow1.png');
        _this.load.image('Level41A_shadow2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow2.png');
        _this.load.image('Level41A_shadow3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow3.png');
        _this.load.image('Level41A_shadow4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow4.png');
        _this.load.image('Level41A_shadow5',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow5.png');
        _this.load.image('Level41A_shadow6',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow6.png');
        
        //Loading 4.1C Assets
        _this.load.atlas('Level41A_gameBox3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/gameBox3.png' ,window.baseUrl+'json/gradeJson/4.1A/gameBox3.json');
        _this.load.atlas('Level41A_allimages',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/allimages.png' ,window.baseUrl+'json/gradeJson/4.1A/allimages.json');
        _this.load.image('Level41A_bluebottle1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bluebottle1.png');
        _this.load.image('Level41A_bluebottle2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bluebottle2.png');
        
        _this.load.image('Level41A_glassfull1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull1.png');
        _this.load.image('Level41A_glassfull2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull2.png');
        _this.load.image('Level41A_glassfull3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull3.png');
        _this.load.image('Level41A_glassfull4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull4.png');
        
        _this.load.image('Level41A_greendrum1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum1.png');
        _this.load.image('Level41A_greendrum2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum2.png');
        _this.load.image('Level41A_greendrum3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum3.png');
        
        _this.load.image('Level41A_greenmug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenmug1.png');
        _this.load.image('Level41A_greenmug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenmug2.png');
        
        _this.load.image('Level41A_greencup1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greencup1.png');
        _this.load.image('Level41A_greencup2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greencup2.png');
        
        _this.load.image('Level41A_greenpot1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot1.png');
        _this.load.image('Level41A_greenpot2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot2.png');
        _this.load.image('Level41A_greenpot3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot3.png');
        _this.load.image('Level41A_greenpot4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot4.png');
        
        _this.load.image('Level41A_orangebucket1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangebucket1.png');
        _this.load.image('Level41A_orangebucket2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangebucket2.png');
        
        _this.load.image('Level41A_orangecan1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan1.png');
        _this.load.image('Level41A_orangecan2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan2.png');
        _this.load.image('Level41A_orangecan3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan3.png');
        
        _this.load.image('Level41A_orangejug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangejug1.png');
        _this.load.image('Level41A_orangejug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangejug2.png');
        
        _this.load.image('Level41A_pinkbucket1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket1.png');
        _this.load.image('Level41A_pinkbucket2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket2.png');
        _this.load.image('Level41A_pinkbucket3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket3.png');
        
        _this.load.image('Level41A_pinkmug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkmug1.png');
        _this.load.image('Level41A_pinkmug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkmug2.png');
        
        _this.load.image('Level41A_redjug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug1.png');
        _this.load.image('Level41A_redjug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug2.png');
        _this.load.image('Level41A_redjug3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug3.png');
        _this.load.image('Level41A_redjug4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug4.png');
        
        _this.load.image('Level41A_syntex1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/syntex1.png');
        _this.load.image('Level41A_syntex2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/syntex2.png');
        
        _this.load.image('Level41A_whitemug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitemug1.png');
        _this.load.image('Level41A_whitesoda1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitesoda1.png');
        _this.load.image('Level41A_whitesoda2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitesoda2.png');
        
        _this.load.image('Level41A_yellowct1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/yellowct1.png');
        _this.load.image('Level41A_bottleone',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottleone.png');
        
        _this.load.image('Level41A_bluebottle1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bluebottle1_shadow.png');
        _this.load.image('Level41A_glassfull1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull1_shadow.png');
        _this.load.image('Level41A_glassfull2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull2_shadow.png');
        _this.load.image('Level41A_greendrum1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum1_shadow.png');
        _this.load.image('Level41A_greendrum2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum2_shadow.png');
        _this.load.image('Level41A_greenmug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenmug1_shadow.png');
        _this.load.image('Level41A_greenpot1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot1_shadow.png');
        _this.load.image('Level41A_orangebucket1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangebucket1_shadow.png');
        _this.load.image('Level41A_orangebucket2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangebucket2_shadow.png');
        _this.load.image('Level41A_orangecan1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan1_shadow.png');
        _this.load.image('Level41A_orangecan2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan2_shadow.png');
        _this.load.image('Level41A_orangejug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangejug1_shadow.png');
        _this.load.image('Level41A_orangejug2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangejug2_shadow.png');
        _this.load.image('Level41A_pinkbucket1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket1_shadow.png');
        _this.load.image('Level41A_pinkbucket2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket2_shadow.png');
        _this.load.image('Level41A_pinkmug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkmug1_shadow.png');
        _this.load.image('Level41A_redjug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug1_shadow.png');
        _this.load.image('Level41A_syntex1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/syntex1_shadow.png');
        _this.load.image('Level41A_syntex2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/syntex2_shadow.png');
        _this.load.image('Level41A_whitemug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitemug1_shadow.png');
        _this.load.image('Level41A_whitesoda1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitesoda1_shadow.png');
        
        //load 4.1A assets
        _this.load.image('Level41A_bg4_1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/akshbg41.png');
        _this.load.atlas('Level41A_bottlefull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottlefull.png' ,window.baseUrl+'json/gradeJson/4.1A/bottlefull.json');
        _this.load.atlas('Level41A_bottlehalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottlehalf.png' ,window.baseUrl+'json/gradeJson/4.1A/bottlehalf.json');
        _this.load.atlas('Level41A_bottlequarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottlequarter.png' ,window.baseUrl+'json/gradeJson/4.1A/bottlequarter.json');
        _this.load.atlas('Level41A_bucketfull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bucketfull.png' ,window.baseUrl+'json/gradeJson/4.1A/bucketfull.json');
        _this.load.atlas('Level41A_buckethalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/buckethalf.png' ,window.baseUrl+'json/gradeJson/4.1A/buckethalf.json');
        _this.load.atlas('Level41A_bucketquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bucketquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/bucketquarter.json');
        _this.load.atlas('Level41A_glassfull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull.png' ,window.baseUrl+'json/gradeJson/4.1A/glassfull.json');
        _this.load.atlas('Level41A_glasshalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glasshalf.png' ,window.baseUrl+'json/gradeJson/4.1A/glasshalf.json');
        _this.load.atlas('Level41A_glassquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/glassquarter.json');
        _this.load.atlas('Level41A_jugfull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/jugfull.png' ,window.baseUrl+'json/gradeJson/4.1A/jugfull.json');
        _this.load.atlas('Level41A_jughalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/jughalf.png' ,window.baseUrl+'json/gradeJson/4.1A/jughalf.json');
        _this.load.atlas('Level41A_jugquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/jugquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/jugquarter.json');
        _this.load.atlas('Level41A_mugfull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/mugfull.png' ,window.baseUrl+'json/gradeJson/4.1A/mugfull.json');
        _this.load.atlas('Level41A_mughalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/mughalf.png' ,window.baseUrl+'json/gradeJson/4.1A/mughalf.json');
        _this.load.atlas('Level41A_mugquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/mugquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/mugquarter.json');
        _this.load.atlas('Level41A_sodafull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/sodafull.png' ,window.baseUrl+'json/gradeJson/4.1A/sodafull.json');
        _this.load.atlas('Level41A_sodahalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/sodahalf.png' ,window.baseUrl+'json/gradeJson/4.1A/sodahalf.json');
        _this.load.atlas('Level41A_sodaquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/sodaquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/sodaquarter.json');
        _this.load.image('Level41A_bottle_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottle_shadow.png');
        _this.load.image('Level41A_bucket_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bucket_shadow.png');
        _this.load.image('Level41A_glass_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glass_shadow.png');
        _this.load.image('Level41A_jug_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/jug_shadow.png');
        _this.load.image('Level41A_mug_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/mug_shadow.png');
        _this.load.image('Level41A_soda_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/soda_shadow.png');
		
		
		
		/*_this.load.audio('Eng_41A1', window.baseUrl+'questionSounds/4.1A/English/4.1A1.mp3');
        _this.load.audio('Eng_41A2', window.baseUrl+'questionSounds/4.1A/English/4.1A2.mp3');
        _this.load.audio('Eng_41A3', window.baseUrl+'questionSounds/4.1A/English/4.1A3.mp3');
        _this.load.audio('Eng_41B1', window.baseUrl+'questionSounds/4.1A/English/4.1B1.mp3');
        _this.load.audio('Eng_41B2', window.baseUrl+'questionSounds/4.1A/English/4.1B2.mp3');
        _this.load.audio('Eng_41C1', window.baseUrl+'questionSounds/4.1A/English/4.1C1.mp3');
        _this.load.audio('Eng_41C2', window.baseUrl+'questionSounds/4.1A/English/4.1C2.mp3');
        _this.load.audio('Kan_41A1', window.baseUrl+'questionSounds/4.1A/Kannada/4.1A1.mp3');
        _this.load.audio('Kan_41A2', window.baseUrl+'questionSounds/4.1A/Kannada/4.1A2.mp3');
        _this.load.audio('Kan_41A3', window.baseUrl+'questionSounds/4.1A/Kannada/4.1A3.mp3');
        _this.load.audio('Kan_41B1', window.baseUrl+'questionSounds/4.1A/Kannada/4.1B1.mp3');
        _this.load.audio('Kan_41B2', window.baseUrl+'questionSounds/4.1A/Kannada/4.1B2.mp3');
        _this.load.audio('Kan_41C1', window.baseUrl+'questionSounds/4.1A/Kannada/4.1C1.mp3');
        _this.load.audio('Kan_41C2', window.baseUrl+'questionSounds/4.1A/Kannada/4.1C2.mp3');
        _this.load.audio('Hin_41A1', window.baseUrl+'questionSounds/4.1A/Hindi/4.1A1 OPTION1.mp3');
        _this.load.audio('Hin_41A2', window.baseUrl+'questionSounds/4.1A/Hindi/4.1A2.mp3');
        _this.load.audio('Hin_41A3', window.baseUrl+'questionSounds/4.1A/Hindi/4.1A3 Option.mp3');
        _this.load.audio('Hin_41B1', window.baseUrl+'questionSounds/4.1A/Hindi/4.1B1.mp3');
        _this.load.audio('Hin_41B2', window.baseUrl+'questionSounds/4.1A/Hindi/4.1B2.mp3');
        _this.load.audio('Hin_41C1', window.baseUrl+'questionSounds/4.1A/Hindi/4.1C1.mp3');
        _this.load.audio('Hin_41C2', window.baseUrl+'questionSounds/4.1A/Hindi/4.1C2.mp3');*/


        _this.load.image('Level41A_bg1',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/bg1.png');
        //_this.load.atlas('Level41A_backbtn',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/4.1A/backbtn.json');
        //_this.load.atlas('Level41A_speaker',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/4.1A/speaker.json');
        //_this.load.atlas('Level41A_starAnim',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/4.1A/starAnim.json');
        _this.load.image('Level41A_cloud',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/cloud.png');
      //  _this.load.atlas('Level41A_btn',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.1A/btn.json');
        _this.load.image('Level41A_bg3',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/bg3.png');
      //  _this.load.image('Level41A_tittleBaar',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level41A_replay',window.baseUrl+'assets/gradeAssets/4.1A/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.1A/reply.json');
        
        //My files to load
        _this.load.atlas('Level41A_gameBox',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/gameBox.png' ,window.baseUrl+'json/gradeJson/4.1A/gameBox.json');
        _this.load.atlas('Level41A_allimg',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/allimg.png' ,window.baseUrl+'json/gradeJson/4.1A/allimg.json');
        _this.load.atlas('Level41A_tickMark',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/tickMark.png' ,window.baseUrl+'json/gradeJson/4.1A/tickMark.json');
        _this.load.image('Level41A_croc',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/croc.png');
        _this.load.image('Level41A_croc2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/croc2.png');
        
        _this.load.image('Level41A_glow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glow.png');
        
        //game items
        _this.load.image('Level41A_cup1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/1.png');
        _this.load.image('Level41A_cup2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/2.png');
        _this.load.image('Level41A_cup3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/3.png');
        _this.load.image('Level41A_cup4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/4.png');
        
        _this.load.image('Level41A_bucket1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/5.png');
        _this.load.image('Level41A_bucket2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/6.png');
        _this.load.image('Level41A_bucket3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/7.png');
        _this.load.image('Level41A_bucket4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/8.png');
        
        _this.load.image('Level41A_jug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/9.png');
        _this.load.image('Level41A_jug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/10.png');
        _this.load.image('Level41A_jug3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/11.png');
        _this.load.image('Level41A_jug4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/12.png');
        
        _this.load.image('Level41A_flask1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/13.png');
        _this.load.image('Level41A_flask2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/14.png');
        _this.load.image('Level41A_flask3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/15.png');
        _this.load.image('Level41A_flask4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/16.png');
        
        _this.load.image('Level41A_bottle1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/17.png');
        _this.load.image('Level41A_bottle2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/18.png');
        _this.load.image('Level41A_bottle3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/19.png');
        _this.load.image('Level41A_bottle4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/20.png');
        
        _this.load.image('Level41A_milk1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/21.png');
        _this.load.image('Level41A_milk2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/22.png');
        _this.load.image('Level41A_milk3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/23.png');
        _this.load.image('Level41A_milk4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/24.png');
        
        _this.load.image('Level41A_shadow1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow1.png');
        _this.load.image('Level41A_shadow2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow2.png');
        _this.load.image('Level41A_shadow3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow3.png');
        _this.load.image('Level41A_shadow4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow4.png');
        _this.load.image('Level41A_shadow5',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow5.png');
        _this.load.image('Level41A_shadow6',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/shadow6.png');
        
        //Loading 4.1C Assets
        _this.load.atlas('Level41A_gameBox3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/gameBox3.png' ,window.baseUrl+'json/gradeJson/4.1A/gameBox3.json');
        _this.load.atlas('Level41A_allimages',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/allimages.png' ,window.baseUrl+'json/gradeJson/4.1A/allimages.json');
        _this.load.image('Level41A_bluebottle1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bluebottle1.png');
        _this.load.image('Level41A_bluebottle2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bluebottle2.png');
        
        _this.load.image('Level41A_glassfull1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull1.png');
        _this.load.image('Level41A_glassfull2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull2.png');
        _this.load.image('Level41A_glassfull3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull3.png');
        _this.load.image('Level41A_glassfull4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull4.png');
        
        _this.load.image('Level41A_greendrum1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum1.png');
        _this.load.image('Level41A_greendrum2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum2.png');
        _this.load.image('Level41A_greendrum3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum3.png');
        
        _this.load.image('Level41A_greenmug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenmug1.png');
        _this.load.image('Level41A_greenmug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenmug2.png');
        
        _this.load.image('Level41A_greencup1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greencup1.png');
        _this.load.image('Level41A_greencup2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greencup2.png');
        
        _this.load.image('Level41A_greenpot1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot1.png');
        _this.load.image('Level41A_greenpot2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot2.png');
        _this.load.image('Level41A_greenpot3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot3.png');
        _this.load.image('Level41A_greenpot4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot4.png');
        
        _this.load.image('Level41A_orangebucket1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangebucket1.png');
        _this.load.image('Level41A_orangebucket2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangebucket2.png');
        
        _this.load.image('Level41A_orangecan1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan1.png');
        _this.load.image('Level41A_orangecan2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan2.png');
        _this.load.image('Level41A_orangecan3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan3.png');
        
        _this.load.image('Level41A_orangejug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangejug1.png');
        _this.load.image('Level41A_orangejug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangejug2.png');
        
        _this.load.image('Level41A_pinkbucket1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket1.png');
        _this.load.image('Level41A_pinkbucket2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket2.png');
        _this.load.image('Level41A_pinkbucket3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket3.png');
        
        _this.load.image('Level41A_pinkmug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkmug1.png');
        _this.load.image('Level41A_pinkmug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkmug2.png');
        
        _this.load.image('Level41A_redjug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug1.png');
        _this.load.image('Level41A_redjug2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug2.png');
        _this.load.image('Level41A_redjug3',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug3.png');
        _this.load.image('Level41A_redjug4',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug4.png');
        
        _this.load.image('Level41A_syntex1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/syntex1.png');
        _this.load.image('Level41A_syntex2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/syntex2.png');
        
        _this.load.image('Level41A_whitemug1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitemug1.png');
        _this.load.image('Level41A_whitesoda1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitesoda1.png');
        _this.load.image('Level41A_whitesoda2',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitesoda2.png');
        
        _this.load.image('Level41A_yellowct1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/yellowct1.png');
        _this.load.image('Level41A_bottleone',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottleone.png');
        
        _this.load.image('Level41A_bluebottle1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bluebottle1_shadow.png');
        _this.load.image('Level41A_glassfull1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull1_shadow.png');
        _this.load.image('Level41A_glassfull2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull2_shadow.png');
        _this.load.image('Level41A_greendrum1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum1_shadow.png');
        _this.load.image('Level41A_greendrum2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greendrum2_shadow.png');
        _this.load.image('Level41A_greenmug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenmug1_shadow.png');
        _this.load.image('Level41A_greenpot1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/greenpot1_shadow.png');
        _this.load.image('Level41A_orangebucket1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangebucket1_shadow.png');
        _this.load.image('Level41A_orangebucket2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangebucket2_shadow.png');
        _this.load.image('Level41A_orangecan1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan1_shadow.png');
        _this.load.image('Level41A_orangecan2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangecan2_shadow.png');
        _this.load.image('Level41A_orangejug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangejug1_shadow.png');
        _this.load.image('Level41A_orangejug2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/orangejug2_shadow.png');
        _this.load.image('Level41A_pinkbucket1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket1_shadow.png');
        _this.load.image('Level41A_pinkbucket2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkbucket2_shadow.png');
        _this.load.image('Level41A_pinkmug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/pinkmug1_shadow.png');
        _this.load.image('Level41A_redjug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/redjug1_shadow.png');
        _this.load.image('Level41A_syntex1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/syntex1_shadow.png');
        _this.load.image('Level41A_syntex2_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/syntex2_shadow.png');
        _this.load.image('Level41A_whitemug1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitemug1_shadow.png');
        _this.load.image('Level41A_whitesoda1_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/whitesoda1_shadow.png');
        
        //load 4.1A assets
        _this.load.image('Level41A_bg4_1',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/akshbg41.png');
        _this.load.atlas('Level41A_bottlefull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottlefull.png' ,window.baseUrl+'json/gradeJson/4.1A/bottlefull.json');
        _this.load.atlas('Level41A_bottlehalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottlehalf.png' ,window.baseUrl+'json/gradeJson/4.1A/bottlehalf.json');
        _this.load.atlas('Level41A_bottlequarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottlequarter.png' ,window.baseUrl+'json/gradeJson/4.1A/bottlequarter.json');
        _this.load.atlas('Level41A_bucketfull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bucketfull.png' ,window.baseUrl+'json/gradeJson/4.1A/bucketfull.json');
        _this.load.atlas('Level41A_buckethalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/buckethalf.png' ,window.baseUrl+'json/gradeJson/4.1A/buckethalf.json');
        _this.load.atlas('Level41A_bucketquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bucketquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/bucketquarter.json');
        _this.load.atlas('Level41A_glassfull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassfull.png' ,window.baseUrl+'json/gradeJson/4.1A/glassfull.json');
        _this.load.atlas('Level41A_glasshalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glasshalf.png' ,window.baseUrl+'json/gradeJson/4.1A/glasshalf.json');
        _this.load.atlas('Level41A_glassquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glassquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/glassquarter.json');
        _this.load.atlas('Level41A_jugfull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/jugfull.png' ,window.baseUrl+'json/gradeJson/4.1A/jugfull.json');
        _this.load.atlas('Level41A_jughalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/jughalf.png' ,window.baseUrl+'json/gradeJson/4.1A/jughalf.json');
        _this.load.atlas('Level41A_jugquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/jugquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/jugquarter.json');
        _this.load.atlas('Level41A_mugfull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/mugfull.png' ,window.baseUrl+'json/gradeJson/4.1A/mugfull.json');
        _this.load.atlas('Level41A_mughalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/mughalf.png' ,window.baseUrl+'json/gradeJson/4.1A/mughalf.json');
        _this.load.atlas('Level41A_mugquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/mugquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/mugquarter.json');
        _this.load.atlas('Level41A_sodafull',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/sodafull.png' ,window.baseUrl+'json/gradeJson/4.1A/sodafull.json');
        _this.load.atlas('Level41A_sodahalf',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/sodahalf.png' ,window.baseUrl+'json/gradeJson/4.1A/sodahalf.json');
        _this.load.atlas('Level41A_sodaquarter',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/sodaquarter.png' ,window.baseUrl+'json/gradeJson/4.1A/sodaquarter.json');
        _this.load.image('Level41A_bottle_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bottle_shadow.png');
        _this.load.image('Level41A_bucket_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/bucket_shadow.png');
        _this.load.image('Level41A_glass_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/glass_shadow.png');
        _this.load.image('Level41A_jug_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/jug_shadow.png');
        _this.load.image('Level41A_mug_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/mug_shadow.png');
        _this.load.image('Level41A_soda_shadow',window.baseUrl+'assets/gradeAssets/4.1A/gameAssets/soda_shadow.png');
		
		
		
		/*_this.load.audio('Eng_41A1', window.baseUrl+'questionSounds/4.1A/English/4.1A1.mp3');
        _this.load.audio('Eng_41A2', window.baseUrl+'questionSounds/4.1A/English/4.1A2.mp3');
        _this.load.audio('Eng_41A3', window.baseUrl+'questionSounds/4.1A/English/4.1A3.mp3');
        _this.load.audio('Eng_41B1', window.baseUrl+'questionSounds/4.1A/English/4.1B1.mp3');
        _this.load.audio('Eng_41B2', window.baseUrl+'questionSounds/4.1A/English/4.1B2.mp3');
        _this.load.audio('Eng_41C1', window.baseUrl+'questionSounds/4.1A/English/4.1C1.mp3');
        _this.load.audio('Eng_41C2', window.baseUrl+'questionSounds/4.1A/English/4.1C2.mp3');
        _this.load.audio('Kan_41A1', window.baseUrl+'questionSounds/4.1A/Kannada/4.1A1.mp3');
        _this.load.audio('Kan_41A2', window.baseUrl+'questionSounds/4.1A/Kannada/4.1A2.mp3');
        _this.load.audio('Kan_41A3', window.baseUrl+'questionSounds/4.1A/Kannada/4.1A3.mp3');
        _this.load.audio('Kan_41B1', window.baseUrl+'questionSounds/4.1A/Kannada/4.1B1.mp3');
        _this.load.audio('Kan_41B2', window.baseUrl+'questionSounds/4.1A/Kannada/4.1B2.mp3');
        _this.load.audio('Kan_41C1', window.baseUrl+'questionSounds/4.1A/Kannada/4.1C1.mp3');
        _this.load.audio('Kan_41C2', window.baseUrl+'questionSounds/4.1A/Kannada/4.1C2.mp3');
        _this.load.audio('Hin_41A1', window.baseUrl+'questionSounds/4.1A/Hindi/4.1A1 OPTION1.mp3');
        _this.load.audio('Hin_41A2', window.baseUrl+'questionSounds/4.1A/Hindi/4.1A2.mp3');
        _this.load.audio('Hin_41A3', window.baseUrl+'questionSounds/4.1A/Hindi/4.1A3 Option.mp3');
        _this.load.audio('Hin_41B1', window.baseUrl+'questionSounds/4.1A/Hindi/4.1B1.mp3');
        _this.load.audio('Hin_41B2', window.baseUrl+'questionSounds/4.1A/Hindi/4.1B2.mp3');
        _this.load.audio('Hin_41C1', window.baseUrl+'questionSounds/4.1A/Hindi/4.1C1.mp3');
        _this.load.audio('Hin_41C2', window.baseUrl+'questionSounds/4.1A/Hindi/4.1C2.mp3');*/
	},
	
	addgame4_2AAssets:function()
	{
		/*_this.load.image('Level42A_bgA',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/bgA.png');
        //_this.load.atlas('Level42A_backbtn',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/4.2A/backbtn.json');
        //_this.load.atlas('Level42A_speaker',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/4.2A/speaker.json');
        //_this.load.atlas('Level42A_starAnim',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/4.2A/starAnim.json');
        _this.load.image('Level42A_cloud',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/cloud.png');
        //_this.load.atlas('Level42A_btn',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.2A/btn.json');
        _this.load.image('Level42A_bg3',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/bg3.png');
        //_this.load.image('Level42A_tittleBaar',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level42A_replay',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.2A/reply.json');
        
        //Load 4.2A Assets
        _this.load.atlas('Level42A_bottle',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/bottle.png' ,window.baseUrl+'json/gradeJson/4.2A/bottle.json');
        _this.load.atlas('Level42A_bottleblue',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/bottleblue.png' ,window.baseUrl+'json/gradeJson/4.2A/bottleblue.json');
        _this.load.atlas('Level42A_bucket',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/bucket.png' ,window.baseUrl+'json/gradeJson/4.2A/bucket.json');
        _this.load.atlas('Level42A_cup',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/cup.png' ,window.baseUrl+'json/gradeJson/4.2A/cup.json');
        _this.load.atlas('Level42A_cupreverse',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/cupreverse.png' ,window.baseUrl+'json/gradeJson/4.2A/cupreverse.json');
        _this.load.atlas('Level42A_glass',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/glass.png' ,window.baseUrl+'json/gradeJson/4.2A/glass.json');
        _this.load.atlas('Level42A_jug',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/jug.png' ,window.baseUrl+'json/gradeJson/4.2A/jug.json');
        _this.load.atlas('Level42A_pinkmug',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/pinkmug.png' ,window.baseUrl+'json/gradeJson/4.2A/pinkmug.json');
        _this.load.atlas('Level42A_soda',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/soda.png' ,window.baseUrl+'json/gradeJson/4.2A/soda.json');
        _this.load.image('Level42A_box',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/box.png');
        
        
        //Load 4.2C Assets
        _this.load.atlas('Level42A_bluebottlec',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/bluebottlec.png' ,window.baseUrl+'json/gradeJson/4.2A/bluebottlec.json');
        _this.load.atlas('Level42A_bluebucketc',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/bluebucketc.png' ,window.baseUrl+'json/gradeJson/4.2A/bluebucketc.json');
        _this.load.atlas('Level42A_bottlec',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/bottlec.png' ,window.baseUrl+'json/gradeJson/4.2A/bottlec.json');
        _this.load.atlas('Level42A_greenmugc',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/greenmugc.png' ,window.baseUrl+'json/gradeJson/4.2A/greenmugc.json');
        _this.load.atlas('Level42A_pinkbucketc',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/pinkbucketc.png' ,window.baseUrl+'json/gradeJson/4.2A/pinkbucketc.json');
        _this.load.atlas('Level42A_potsplashc',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/potsplashc.png' ,window.baseUrl+'json/gradeJson/4.2A/potsplashc.json');
        _this.load.atlas('Level42A_vessel2c',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/vessel2c.png' ,window.baseUrl+'json/gradeJson/4.2A/vessel2c.json');
        _this.load.atlas('Level42A_yellowctc',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/yellowctc.png' ,window.baseUrl+'json/gradeJson/4.2A/yellowctc.json');
        _this.load.image('Level42A_maskbg',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/maskbg.png');
        _this.load.image('Level42A_common_shadow',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/common_shadow.png');
        
        //LEVELB
        
        _this.load.atlas('Level42A_tank2',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/tank.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/tank.json');
        _this.load.atlas('Level42A_drum2',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/drum.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/drum.json');
        _this.load.atlas('Level42A_pot2',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/pot.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/pot.json');
        _this.load.image('Level42A_box',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/box.png');
        _this.load.image('Level42A_darkbg1',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/darkbg1.png');
        _this.load.image('Level42A_darkbg2',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/darkbg2.png');
        _this.load.image('Level42A_mainbox',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/mainbox.png');
        _this.load.atlas('Level42A_tick',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/tick.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/tick.json');
        
        _this.load.atlas('Level42A_cookerB',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/cooker.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/cooker.json');
        _this.load.atlas('Level42A_bottleB',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/bottle.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/bottle.json');
        _this.load.atlas('Level42A_jugB',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/jug.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/jug.json');
        _this.load.image('Level42A_coffeecup',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/coffeecup.png');
        
        _this.load.atlas('Level42A_mugB',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/mug.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/mug.json');
        _this.load.atlas('Level42A_orangebottleB',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/orangebottle.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/orangebottle.json');
        _this.load.atlas('Level42A_canB',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/can.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/can.json');
        
        _this.load.atlas('Level42A_greenbot22',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/greenbot22.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/greenbot22.json');
        _this.load.atlas('Level42A_bottle22',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/bottle22.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/bottle22.json');
        
        _this.load.atlas('Level42A_pinkglass',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/pinkglass.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/pinkglass.json');
        _this.load.atlas('Level42A_greencup',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/greencup.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/greencup.json');
        _this.load.atlas('Level42A_smallbottle',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/smallbottle.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/smallbottle.json');
        _this.load.image('Level42A_spoon',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/spoon.png');
        
        _this.load.atlas('Level42A_bucket33',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/bucket.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/bucket.json');
        _this.load.image('Level42A_greena1',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/greena1.png');
        
        _this.load.atlas('Level42A_bottle44',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/bottle44.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/bottle44.json');
        _this.load.atlas('Level42A_redmug',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/redmug.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/redmug.json');
        _this.load.atlas('Level42A_glass44',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/glass44.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/glass44.json');
        
        _this.load.atlas('Level42A_pot222',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/pot222.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/pot222.json');
        _this.load.atlas('Level42A_can222',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/can222.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/can222.json');
        _this.load.atlas('Level42A_watercontainer',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/watercontainer.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/watercontainer.json');
        
        _this.load.image('Level42A_shadow7',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/shadow7.png');
        _this.load.image('Level42A_shadow8',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/shadow8.png');
        _this.load.image('Level42A_shadow9',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/shadow9.png');
        
        _this.load.image('Level42A_a1',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/a1.png');
        _this.load.atlas('Level42A_a11',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/a11.png',window.baseUrl+'json/gradeJson/4.2A/levelB/a11.json');
        
        _this.load.atlas('Level42A_boxb',window.baseUrl+'assets/gradeAssets/4.2A/gameAssets/levelB/boxb.png' ,window.baseUrl+'json/gradeJson/4.2A/levelB/boxb.json');
        
		/*_this.load.audio('waterFillingSound', window.baseUrl+'questionSounds/4.2A/waterFillingSound.mp3');
        _this.load.audio('watersplash',window.baseUrl+'questionSounds/4.2A/watersplash.mp3');
        
		_this.load.audio('Eng_42A1', window.baseUrl+'questionSounds/4.2A/English/4.2A1.mp3');
        _this.load.audio('Eng_42B1', window.baseUrl+'questionSounds/4.2A/English/4.2B1.mp3');
        _this.load.audio('Eng_42C1', window.baseUrl+'questionSounds/4.2A/English/4.2C1.mp3');
        _this.load.audio('Kan_42A1', window.baseUrl+'questionSounds/4.2A/Kannada/4.2A1.mp3');
        _this.load.audio('Kan_42B1', window.baseUrl+'questionSounds/4.2A/Kannada/4.2B1.mp3');
        _this.load.audio('Kan_42C1', window.baseUrl+'questionSounds/4.2A/Kannada/4.2C1.mp3');
        _this.load.audio('Hin_42A1', window.baseUrl+'questionSounds/4.2A/Hindi/4.2A1.mp3');
        _this.load.audio('Hin_42B1', window.baseUrl+'questionSounds/4.2A/Hindi/4.2B1.mp3');
        _this.load.audio('Hin_42C1', window.baseUrl+'questionSounds/4.2A/Hindi/4.2C1.mp3');*/


        this.load.image('Level42A_bgA',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/bgA.png');
        this.load.atlas('Level42A_CommonBackBtn',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/4.2A/backbtn.json');
        this.load.atlas('Level42A_CommonSpeakerBtn',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/4.2A/speaker.json');
        this.load.atlas('Level42A_CommonStarAnim',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/4.2A/starAnim.json');
        this.load.atlas('Level42A_btn',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.2A/btn.json');
        this.load.image('Level42A_bg3',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/bg3.png');
        this.load.image('Level42A_tittleBaar',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/tittleBaar.png');
        this.load.atlas('Level42A_replay',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.2A/reply.json');
        this.load.image('Level42A_footer',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/footer.png');
        this.load.image('Level42A_Topbar',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/Topbar.png');
        this.load.image('Level42A_timer',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/timer.png');
        this.load.image('Level42A_dottedBox',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/dottedBox.png');
        this.load.image('Level42A_c',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/c.png');
        
        this.load.atlas('Level42A_bottle',window.baseUrl+'assets/gradeAssets/4.2A/bottle.png' ,window.baseUrl+'json/gradeJson/4.2A/bottle.json');
        this.load.atlas('Level42A_bottleblue',window.baseUrl+'assets/gradeAssets/4.2A/bottleblue.png' ,window.baseUrl+'json/gradeJson/4.2A/bottleblue.json');
        this.load.atlas('Level42A_bucket',window.baseUrl+'assets/gradeAssets/4.2A/bucket.png' ,window.baseUrl+'json/gradeJson/4.2A/bucket.json');
        this.load.atlas('Level42A_cup',window.baseUrl+'assets/gradeAssets/4.2A/cup.png' ,window.baseUrl+'json/gradeJson/4.2A/cup.json');
        this.load.atlas('Level42A_cupreverse',window.baseUrl+'assets/gradeAssets/4.2A/cupreverse.png' ,window.baseUrl+'json/gradeJson/4.2A/cupreverse.json');
        this.load.atlas('Level42A_glass',window.baseUrl+'assets/gradeAssets/4.2A/glass.png' ,window.baseUrl+'json/gradeJson/4.2A/glass.json');
        this.load.atlas('Level42A_jug',window.baseUrl+'assets/gradeAssets/4.2A/jug.png' ,window.baseUrl+'json/gradeJson/4.2A/jug.json');
        this.load.atlas('Level42A_pinkmug',window.baseUrl+'assets/gradeAssets/4.2A/pinkmug.png' ,window.baseUrl+'json/gradeJson/4.2A/pinkmug.json');
        this.load.atlas('Level42A_soda',window.baseUrl+'assets/gradeAssets/4.2A/soda.png' ,window.baseUrl+'json/gradeJson/4.2A/soda.json');
        this.load.atlas('Level42A_box',window.baseUrl+'assets/gradeAssets/4.2A/box.png',window.baseUrl+'json/gradeJson/4.2A/box.json');
        this.load.atlas('Level42A_bluebottlec',window.baseUrl+'assets/gradeAssets/4.2A/bluebottlec.png' ,window.baseUrl+'json/gradeJson/4.2A/bluebottlec.json');
        this.load.atlas('Level42A_bluebucketc',window.baseUrl+'assets/gradeAssets/4.2A/bluebucketc.png' ,window.baseUrl+'json/gradeJson/4.2A/bluebucketc.json');
        this.load.atlas('Level42A_bottlec',window.baseUrl+'assets/gradeAssets/4.2A/bottlec.png' ,window.baseUrl+'json/gradeJson/4.2A/bottlec.json');
        this.load.atlas('Level42A_greenmugc',window.baseUrl+'assets/gradeAssets/4.2A/greenmugc.png' ,window.baseUrl+'json/gradeJson/4.2A/greenmugc.json');
        this.load.atlas('Level42A_pinkbucketc',window.baseUrl+'assets/gradeAssets/4.2A/pinkbucketc.png' ,window.baseUrl+'json/gradeJson/4.2A/pinkbucketc.json');
        this.load.atlas('Level42A_potsplashc',window.baseUrl+'assets/gradeAssets/4.2A/potsplashc.png' ,window.baseUrl+'json/gradeJson/4.2A/potsplashc.json');
        this.load.atlas('Level42A_vessel2c',window.baseUrl+'assets/gradeAssets/4.2A/vessel2c.png' ,window.baseUrl+'json/gradeJson/4.2A/vessel2c.json');
        this.load.atlas('Level42A_yellowctc',window.baseUrl+'assets/gradeAssets/4.2A/yellowctc.png' ,window.baseUrl+'json/gradeJson/4.2A/yellowctc.json');
        this.load.image('Level42A_common_shadow',window.baseUrl+'assets/gradeAssets/4.2A/common_shadow.png');
        this.load.atlas('Level42A_calNum',window.baseUrl+'assets/gradeAssets/4.2A/numbers.png' ,window.baseUrl+'json/gradeJson/4.2A/numbers.json');
       // this.load.atlas('Level42A_calNum',window.baseUrl+'assets/gradeAssets/4.2A/calNum.png' ,window.baseUrl+'json/gradeJson/4.2A/calNum.json');
        this.load.atlas('Level42A_tank',window.baseUrl+'assets/gradeAssets/4.2A/tank.png' ,window.baseUrl+'json/gradeJson/4.2A/tank.json');
        this.load.atlas('Level42A_drum',window.baseUrl+'assets/gradeAssets/4.2A/drum.png' ,window.baseUrl+'json/gradeJson/4.2A/drum.json');
        this.load.atlas('Level42A_pot2',window.baseUrl+'assets/gradeAssets/4.2A/pot.png' ,window.baseUrl+'json/gradeJson/4.2A/pot.json');
        this.load.image('Level42A_darkbg1',window.baseUrl+'assets/gradeAssets/4.2A/darkbg1.png');
        this.load.image('Level42A_darkbg2',window.baseUrl+'assets/gradeAssets/4.2A/darkbg2.png');
        this.load.atlas('Level42A_cooker',window.baseUrl+'assets/gradeAssets/4.2A/cooker.png' ,window.baseUrl+'json/gradeJson/4.2A/cooker.json');
        this.load.atlas('Level42A_jug2',window.baseUrl+'assets/gradeAssets/4.2A/jug2.png' ,window.baseUrl+'json/gradeJson/4.2A/jug2.json');
        this.load.atlas('Level42A_can',window.baseUrl+'assets/gradeAssets/4.2A/can.png' ,window.baseUrl+'json/gradeJson/4.2A/can.json');
        this.load.image('Level42A_spoon',window.baseUrl+'assets/gradeAssets/4.2A/spoon.png');
        this.load.atlas('Level42A_rightBtn',window.baseUrl+'assets/gradeAssets/4.2A/rightBtn.png' ,window.baseUrl+'json/gradeJson/4.2A/rightBtn.json');
        this.load.atlas('Level42A_eraser',window.baseUrl+'assets/gradeAssets/4.2A/eraser.png' ,window.baseUrl+'json/gradeJson/4.2A/eraser.json');
        this.load.image('Level42A_redmark',window.baseUrl+'assets/gradeAssets/4.2A/redmark.png');
	},

	addgame4_2BAssets:function()
	{
		this.load.image('Level42B_bgA',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/bgA.png');
        this.load.atlas('Level42B_btn',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.2B/btn.json');
        this.load.image('Level42B_bg3',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/bg3.png');
        this.load.image('Level42B_tittleBaar',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/tittleBaar.png');
        this.load.atlas('Level42B_replay',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.2B/reply.json');
        this.load.image('Level42B_footer',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/footer.png');
        this.load.image('Level42B_Topbar',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/Topbar.png');
        this.load.image('Level42B_timer',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/timer.png');
        this.load.image('Level42B_dottedBox',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/dottedBox.png');
        this.load.image('Level42B_c',window.baseUrl+'assets/gradeAssets/4.2B/commonAssets/c.png');
        this.load.atlas('Level42B_calNum',window.baseUrl+'assets/gradeAssets/4.2B/calNum.png' ,window.baseUrl+'json/gradeJson/4.2B/calNum.json');
        this.load.image('Level42B_redmark',window.baseUrl+'assets/gradeAssets/4.2B/redmark.png');
    
        this.load.atlas('Level42B_bucket',window.baseUrl+'assets/gradeAssets/4.2B/bucket.png' ,window.baseUrl+'json/gradeJson/4.2B/bucket.json');
        this.load.atlas('Level42B_box',window.baseUrl+'assets/gradeAssets/4.2B/box.png',window.baseUrl+'json/gradeJson/4.2B/box.json');
        this.load.atlas('Level42B_tank',window.baseUrl+'assets/gradeAssets/4.2B/tank.png' ,window.baseUrl+'json/gradeJson/4.2B/tank.json');
        this.load.atlas('Level42B_drum',window.baseUrl+'assets/gradeAssets/4.2B/drum.png' ,window.baseUrl+'json/gradeJson/4.2B/drum.json');
        this.load.atlas('Level42B_drum2',window.baseUrl+'assets/gradeAssets/4.2B/drum2.png' ,window.baseUrl+'json/gradeJson/4.2B/drum2.json');
        this.load.atlas('Level42B_pot',window.baseUrl+'assets/gradeAssets/4.2B/pot.png' ,window.baseUrl+'json/gradeJson/4.2B/pot.json');
        this.load.atlas('Level42B_pot2',window.baseUrl+'assets/gradeAssets/4.2B/pot2.png' ,window.baseUrl+'json/gradeJson/4.2B/pot2.json');
        this.load.image('Level42B_darkbg2',window.baseUrl+'assets/gradeAssets/4.2B/darkbg2.png');
        this.load.image('Level42B_mainbox',window.baseUrl+'assets/gradeAssets/4.2B/mainbox.png');
        this.load.atlas('Level42B_cooker',window.baseUrl+'assets/gradeAssets/4.2B/cooker.png' ,window.baseUrl+'json/gradeJson/4.2B/cooker.json');
        this.load.atlas('Level42B_bottle2',window.baseUrl+'assets/gradeAssets/4.2B/bottle2.png' ,window.baseUrl+'json/gradeJson/4.2B/bottle2.json');
        this.load.atlas('Level42B_jug2',window.baseUrl+'assets/gradeAssets/4.2B/jug2.png' ,window.baseUrl+'json/gradeJson/4.2B/jug2.json');
        this.load.atlas('Level42B_mugB',window.baseUrl+'assets/gradeAssets/4.2B/mug.png' ,window.baseUrl+'json/gradeJson/4.2B/mug.json');
        this.load.atlas('Level42B_orangebottleB',window.baseUrl+'assets/gradeAssets/4.2B/orangebottle.png' ,window.baseUrl+'json/gradeJson/4.2B/orangebottle.json');
		 this.load.atlas('Level42B_orangebottlenew',window.baseUrl+'assets/gradeAssets/4.2B/orangebottlenew.png' ,window.baseUrl+'json/gradeJson/4.2B/orangebottlenew.json');
        this.load.atlas('Level42B_canB',window.baseUrl+'assets/gradeAssets/4.2B/can.png' ,window.baseUrl+'json/gradeJson/4.2B/can.json');
        this.load.atlas('Level42B_greenbot22',window.baseUrl+'assets/gradeAssets/4.2B/greenbot22.png' ,window.baseUrl+'json/gradeJson/4.2B/greenbot22.json');
        this.load.atlas('Level42B_bottle22',window.baseUrl+'assets/gradeAssets/4.2B/bottle22.png' ,window.baseUrl+'json/gradeJson/4.2B/bottle22.json');
        this.load.atlas('Level42B_pinkglass',window.baseUrl+'assets/gradeAssets/4.2B/pinkglass.png' ,window.baseUrl+'json/gradeJson/4.2B/pinkglass.json');
        this.load.atlas('Level42B_greencup',window.baseUrl+'assets/gradeAssets/4.2B/greencup.png' ,window.baseUrl+'json/gradeJson/4.2B/greencup.json');
        this.load.atlas('Level42B_smallbottle',window.baseUrl+'assets/gradeAssets/4.2B/smallbottle.png' ,window.baseUrl+'json/gradeJson/4.2B/smallbottle.json');
        this.load.atlas('Level42B_bottle44',window.baseUrl+'assets/gradeAssets/4.2B/bottle44.png' ,window.baseUrl+'json/gradeJson/4.2B/bottle44.json');
        this.load.atlas('Level42B_redmug',window.baseUrl+'assets/gradeAssets/4.2B/redmug.png' ,window.baseUrl+'json/gradeJson/4.2B/redmug.json');
        this.load.atlas('Level42B_glass44',window.baseUrl+'assets/gradeAssets/4.2B/glass44.png' ,window.baseUrl+'json/gradeJson/4.2B/glass44.json');
        this.load.atlas('Level42B_pot222',window.baseUrl+'assets/gradeAssets/4.2B/pot222.png' ,window.baseUrl+'json/gradeJson/4.2B/pot222.json');
        this.load.atlas('Level42B_can222',window.baseUrl+'assets/gradeAssets/4.2B/can222.png' ,window.baseUrl+'json/gradeJson/4.2B/can222.json');
        this.load.atlas('Level42B_watercontainer',window.baseUrl+'assets/gradeAssets/4.2B/watercontainer.png' ,window.baseUrl+'json/gradeJson/4.2B/watercontainer.json');
        this.load.image('Level42B_shadow7',window.baseUrl+'assets/gradeAssets/4.2B/shadow7.png');
        this.load.image('Level42B_shadow8',window.baseUrl+'assets/gradeAssets/4.2B/shadow8.png');
        this.load.image('Level42B_shadow9',window.baseUrl+'assets/gradeAssets/4.2B/shadow9.png');
        this.load.atlas('Level42B_a11',window.baseUrl+'assets/gradeAssets/4.2B/a11.png',window.baseUrl+'json/gradeJson/4.2B/a11.json');
        this.load.atlas('Level42B_boxb',window.baseUrl+'assets/gradeAssets/4.2B/boxb.png' ,window.baseUrl+'json/gradeJson/4.2B/boxb.json');
        this.load.atlas('Level42B_rightBtn',window.baseUrl+'assets/gradeAssets/4.2B/rightBtn.png' ,window.baseUrl+'json/gradeJson/4.2B/rightBtn.json');
        this.load.atlas('Level42B_eraser',window.baseUrl+'assets/gradeAssets/4.2B/eraser.png' ,window.baseUrl+'json/gradeJson/4.2B/eraser.json');
	},



	addgame4_2CAssets:function()
	{
		this.load.image('Level42C_bgC',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/bgC.png');
        this.load.atlas('Level42C_btn',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.2C/btn.json');
        this.load.image('Level42C_bg3',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/bg3.png');
        this.load.image('Level42C_tittleBaar',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/tittleBaar.png');
        this.load.atlas('Level42C_replay',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.2C/reply.json');
        this.load.image('Level42C_footer',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/footer.png');
        this.load.image('Level42C_Topbar',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/Topbar.png');
        this.load.image('Level42C_timer',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/timer.png');
        this.load.image('Level42C_dottedBox',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/dottedBox.png');
        this.load.image('Level42C_c',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/c.png');
        //this.load.atlas('Level42C_calNum',window.baseUrl+'assets/gradeAssets/4.2C/calNum.png' ,window.baseUrl+'json/gradeJson/4.2C/calNum.json');
        this.load.atlas('Level42C_calNum',window.baseUrl+'assets/gradeAssets/4.2C/numbers.png' ,window.baseUrl+'json/gradeJson/4.2C/numbers.json');
        this.load.atlas('Level42C_glass',window.baseUrl+'assets/gradeAssets/4.2C/glass.png' ,window.baseUrl+'json/gradeJson/4.2C/glass.json');
        this.load.atlas('Level42C_box',window.baseUrl+'assets/gradeAssets/4.2C/box.png',window.baseUrl+'json/gradeJson/4.2C/box.json');
        this.load.image('Level42C_redmark',window.baseUrl+'assets/gradeAssets/4.2C/redmark.png');
        
        this.load.atlas('Level42C_bluebottlec',window.baseUrl+'assets/gradeAssets/4.2C/bluebottlec.png' ,window.baseUrl+'json/gradeJson/4.2C/bluebottlec.json');
        this.load.atlas('Level42C_bluebucketc1',window.baseUrl+'assets/gradeAssets/4.2C/bluebucketc1.png' ,window.baseUrl+'json/gradeJson/4.2C/bluebucketc1.json');
        this.load.atlas('Level42C_bluebucketc2',window.baseUrl+'assets/gradeAssets/4.2C/bluebucketc2.png' ,window.baseUrl+'json/gradeJson/4.2C/bluebucketc2.json');
        this.load.atlas('Level42C_bottlec',window.baseUrl+'assets/gradeAssets/4.2C/bottlec.png' ,window.baseUrl+'json/gradeJson/4.2C/bottlec.json');
        this.load.atlas('Level42C_greenmugc1',window.baseUrl+'assets/gradeAssets/4.2C/greenmugc1.png' ,window.baseUrl+'json/gradeJson/4.2C/greenmugc1.json');
        this.load.atlas('Level42C_greenmugc2',window.baseUrl+'assets/gradeAssets/4.2C/greenmugc2.png' ,window.baseUrl+'json/gradeJson/4.2C/greenmugc2.json');
        this.load.atlas('Level42C_pinkbucketc',window.baseUrl+'assets/gradeAssets/4.2C/pinkbucketc.png' ,window.baseUrl+'json/gradeJson/4.2C/pinkbucketc.json');
        this.load.atlas('Level42C_potsplash1',window.baseUrl+'assets/gradeAssets/4.2C/potsplash1.png' ,window.baseUrl+'json/gradeJson/4.2C/potsplash1.json');
        this.load.atlas('Level42C_potsplash2',window.baseUrl+'assets/gradeAssets/4.2C/potsplash2.png' ,window.baseUrl+'json/gradeJson/4.2C/potsplash2.json');
        this.load.atlas('Level42C_vessel1',window.baseUrl+'assets/gradeAssets/4.2C/vessel1.png' ,window.baseUrl+'json/gradeJson/4.2C/vessel1.json');
        this.load.atlas('Level42C_vessel2',window.baseUrl+'assets/gradeAssets/4.2C/vessel2.png' ,window.baseUrl+'json/gradeJson/4.2C/vessel2.json');
        this.load.atlas('Level42C_yellowctc',window.baseUrl+'assets/gradeAssets/4.2C/yellowctc.png' ,window.baseUrl+'json/gradeJson/4.2C/yellowctc.json');
        this.load.image('Level42C_maskbg',window.baseUrl+'assets/gradeAssets/4.2C/maskbg.png');
        this.load.image('Level42C_common_shadow',window.baseUrl+'assets/gradeAssets/4.2C/common_shadow.png');
        this.load.atlas('Level42C_tank1',window.baseUrl+'assets/gradeAssets/4.2C/tank1.png' ,window.baseUrl+'json/gradeJson/4.2C/tank1.json');
        this.load.atlas('Level42C_tank2',window.baseUrl+'assets/gradeAssets/4.2C/tank2.png' ,window.baseUrl+'json/gradeJson/4.2C/tank2.json');
        this.load.atlas('Level42C_drum2',window.baseUrl+'assets/gradeAssets/4.2C/drum.png' ,window.baseUrl+'json/gradeJson/4.2C/drum.json');
        this.load.atlas('Level42C_pot2',window.baseUrl+'assets/gradeAssets/4.2C/pot.png' ,window.baseUrl+'json/gradeJson/4.2C/pot.json');
        this.load.atlas('Level42C_cooker1',window.baseUrl+'assets/gradeAssets/4.2C/cooker1.png' ,window.baseUrl+'json/gradeJson/4.2C/cooker1.json');
        this.load.atlas('Level42C_cooker2',window.baseUrl+'assets/gradeAssets/4.2C/cooker2.png' ,window.baseUrl+'json/gradeJson/4.2C/cooker2.json');
        this.load.atlas('Level42C_bottleB',window.baseUrl+'assets/gradeAssets/4.2C/bottle.png' ,window.baseUrl+'json/gradeJson/4.2C/bottle.json');
        this.load.atlas('Level42C_jugB',window.baseUrl+'assets/gradeAssets/4.2C/jug.png' ,window.baseUrl+'json/gradeJson/4.2C/jug.json');
        this.load.image('Level42C_coffeecup',window.baseUrl+'assets/gradeAssets/4.2C/coffeecup.png');
        this.load.atlas('Level42C_mug1',window.baseUrl+'assets/gradeAssets/4.2C/mug1.png' ,window.baseUrl+'json/gradeJson/4.2C/mug1.json');
        this.load.atlas('Level42C_mug2',window.baseUrl+'assets/gradeAssets/4.2C/mug2.png' ,window.baseUrl+'json/gradeJson/4.2C/mug2.json');
        this.load.atlas('Level42C_can1',window.baseUrl+'assets/gradeAssets/4.2C/can1.png' ,window.baseUrl+'json/gradeJson/4.2C/can1.json');
        this.load.atlas('Level42C_can2',window.baseUrl+'assets/gradeAssets/4.2C/can2.png' ,window.baseUrl+'json/gradeJson/4.2C/can2.json');
        this.load.atlas('Level42C_greenbot22',window.baseUrl+'assets/gradeAssets/4.2C/greenbot22.png' ,window.baseUrl+'json/gradeJson/4.2C/greenbot22.json');
        this.load.image('Level42C_greena1',window.baseUrl+'assets/gradeAssets/4.2C/greena1.png');
        this.load.image('Level42C_a1',window.baseUrl+'assets/gradeAssets/4.2C/a1.png');
        this.load.atlas('Level42C_a11',window.baseUrl+'assets/gradeAssets/4.2C/a11.png',window.baseUrl+'json/gradeJson/4.2C/a11.json'); 
        this.load.atlas('Level42C_boxb',window.baseUrl+'assets/gradeAssets/4.2C/boxb.png' ,window.baseUrl+'json/gradeJson/4.2C/boxb.json');
        this.load.atlas('Level42C_numbg',window.baseUrl+'assets/gradeAssets/4.2C/numbg.png' ,window.baseUrl+'json/gradeJson/4.2C/numbg.json');
        this.load.atlas('Level42C_rightBtn',window.baseUrl+'assets/gradeAssets/4.2C/rightBtn.png' ,window.baseUrl+'json/gradeJson/4.2C/rightBtn.json');
        this.load.atlas('Level42C_eraser',window.baseUrl+'assets/gradeAssets/4.2C/eraser.png' ,window.baseUrl+'json/gradeJson/4.2C/eraser.json');
	},
	
	
	
	addgame4_3AAssets:function()
	{
		/*_this.load.image('Level43A_bg1',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/BG.png');
        //_this.load.atlas('Level43A_backbtn',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/4.3A/backbtn.json');
       // _this.load.atlas('Level43A_speaker',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/4.3A/speaker.json');
       // _this.load.atlas('Level43A_starAnim',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/4.3A/starAnim.json');
        _this.load.image('Level43A_cloud',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/cloud.png');
        //_this.load.atlas('Level43A_btn',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.3A/btn.json');
        _this.load.image('Level43A_bg3',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/bg3.png');
        //_this.load.image('Level43A_tittleBaar',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level43A_replay',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.3A/reply.json');
        
        _this.load.atlas('Level43A_numbg',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/numbg.png' ,window.baseUrl+'json/gradeJson/4.3A/numbg.json');
        _this.load.atlas('Level43A_rightBtn',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/rightBtn.png' ,window.baseUrl+'json/gradeJson/4.3A/rightBtn.json');
        _this.load.atlas('Level43A_wrongBtn',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/wrongBtn.png' ,window.baseUrl+'json/gradeJson/4.3A/wrongBtn.json');
        
        //My files to load
      //  _this.load.atlas('Level43A_gameBox',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/gameBox.png' ,window.baseUrl+'json/gradeJson/4.3A/gameBox.json');
        //_this.load.atlas('Level43A_allimg',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/allimg.png' ,window.baseUrl+'json/gradeJson/4.3A/allimg.json');
        _this.load.atlas('Level43A_tickMark',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/tickMark.png' ,window.baseUrl+'json/gradeJson/4.3A/tickMark.json');
        _this.load.atlas('Level43A_crossMark',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/crossMark.png' ,window.baseUrl+'json/gradeJson/4.3A/crossMark.json');
        
        //_this.load.image('Level43A_glow',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/glow.png');
        
        //game items
            _this.load.image('Level43A_arrow',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/Arw.png');
        
         _this.load.atlas('Level43A_incBox',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/box1.png' ,window.baseUrl+'json/gradeJson/4.3A/box1.json');
         _this.load.atlas('Level43A_AnswerBox',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/box2.png' ,window.baseUrl+'json/gradeJson/4.3A/box2.json');
        
         _this.load.atlas('Level43A_50Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/50mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/50mlQ.json');
         _this.load.atlas('Level43A_100Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/100mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/100mlQ.json');
         _this.load.atlas('Level43A_200Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/200mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/200mlQ.json');
         _this.load.atlas('Level43A_250Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/250mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/250mlQ.json');
         _this.load.atlas('Level43A_500Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/500mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/500mlQ.json');
        
         _this.load.atlas('Level43A_200A',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/A 200.png' ,window.baseUrl+'json/gradeJson/4.3A/A 200.json');
         _this.load.atlas('Level43A_250A',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/A 250.png' ,window.baseUrl+'json/gradeJson/4.3A/A 250.json');
         _this.load.atlas('Level43A_500A',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/A 500.png' ,window.baseUrl+'json/gradeJson/4.3A/A 500.json');
         _this.load.atlas('Level43A_1000A',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/A 1000.png' ,window.baseUrl+'json/gradeJson/4.3A/A 1000.json');
        
        
        _this.load.atlas('Level43A_equation',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/equation.png' ,window.baseUrl+'json/gradeJson/4.3A/equation.json');
        
        
        /******************** Level 4.3B******************************/
        /*        _this.load.atlas('Level43A_50Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/50mlQB.png' ,window.baseUrl+'json/gradeJson/4.3A/50mlQB.json');
         _this.load.atlas('Level43A_100Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/100mlQB.png' ,window.baseUrl+'json/gradeJson/4.3A/100mlQB.json');
         _this.load.atlas('Level43A_250Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/250mlQB.png' ,window.baseUrl+'json/gradeJson/4.3A/250mlQB.json');
         _this.load.atlas('Level43A_500Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/500mlQB.png' ,window.baseUrl+'json/gradeJson/4.3A/500mlQB.json');
        
         _this.load.atlas('Level43A_bottle',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/bottleB.png' ,window.baseUrl+'json/gradeJson/4.3A/bottleB.json');
         _this.load.atlas('Level43A_bottle2',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/bottle2B.png' ,window.baseUrl+'json/gradeJson/4.3A/bottle2B.json');
         _this.load.atlas('Level43A_bottle3',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/bottle3B.png' ,window.baseUrl+'json/gradeJson/4.3A/bottle3B.json');
         _this.load.atlas('Level43A_cup',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/cupB.png' ,window.baseUrl+'json/gradeJson/4.3A/cupB.json');
         _this.load.atlas('Level43A_glass',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/glassB.png' ,window.baseUrl+'json/gradeJson/4.3A/glassB.json');
         _this.load.atlas('Level43A_jug',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/jugB.png' ,window.baseUrl+'json/gradeJson/4.3A/jugB.json');
         _this.load.atlas('Level43A_jug2',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/jug2B.png' ,window.baseUrl+'json/gradeJson/4.3A/jug2B.json');
        
        
        _this.load.atlas('Level43A_equationB',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/equationB.png' ,window.baseUrl+'json/gradeJson/4.3A/equationB.json');
        
        
        /*********************Level 4.3 C*******************************/
        /* _this.load.atlas('Level43A_50QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/50mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/50mlQC.json');
         _this.load.atlas('Level43A_100QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/100mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/100mlQC.json');
         _this.load.atlas('Level43A_200QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/200mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/200mlQC.json');
         _this.load.atlas('Level43A_250QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/250mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/250mlQC.json');
         _this.load.atlas('Level43A_500QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/500mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/500mlQC.json');
        
         _this.load.atlas('Level43A_1000AC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/1000ltrC.png' ,window.baseUrl+'json/gradeJson/4.3A/1000ltrC.json');
         _this.load.atlas('Level43A_1000QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/1000mlQD.png' ,window.baseUrl+'json/gradeJson/4.3A/1000mlQD.json');
         _this.load.atlas('Level43A_jugC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/2lJug.png' ,window.baseUrl+'json/gradeJson/4.3A/2lJug.json');
         _this.load.atlas('Level43A_arrowC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/arrowC.png' ,window.baseUrl+'json/gradeJson/4.3A/arrowC.json');
         _this.load.atlas('Level43A_glow',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/glowC.png' ,window.baseUrl+'json/gradeJson/4.3A/glowC.json');
		 
		/* _this.load.audio('waterFill', window.baseUrl+'questionSounds/4.3A/waterFillingSound.mp3');
        _this.load.audio('Eng_43A1', window.baseUrl+'questionSounds/4.3A/English/4.3A1.mp3');
        _this.load.audio('Eng_43B1', window.baseUrl+'questionSounds/4.3A/English/4.3B1.mp3');
        _this.load.audio('Eng_43C1', window.baseUrl+'questionSounds/4.3A/English/4.3C1.mp3');
        _this.load.audio('Eng_43C11', window.baseUrl+'questionSounds/4.3A/English/4.3C1.1.mp3');
        _this.load.audio('Eng_43D1', window.baseUrl+'questionSounds/4.3A/English/4.3D1.mp3');
        _this.load.audio('Kan_43A1', window.baseUrl+'questionSounds/4.3A/Kannada/4.3A1.mp3');
        _this.load.audio('Kan_43B1', window.baseUrl+'questionSounds/4.3A/Kannada/4.3B1.mp3');
        _this.load.audio('Kan_43C1', window.baseUrl+'questionSounds/4.3A/Kannada/4.3C1.mp3');
        _this.load.audio('Kan_43C11', window.baseUrl+'questionSounds/4.3A/Kannada/4.3C1.1.mp3');
        _this.load.audio('Kan_43D1', window.baseUrl+'questionSounds/4.3A/Kannada/4.3D1.mp3');
        _this.load.audio('Hin_43A1', window.baseUrl+'questionSounds/4.3A/Hindi/4.3A1.mp3');
        _this.load.audio('Hin_43B1', window.baseUrl+'questionSounds/4.3A/Hindi/4.3B1.mp3');
        _this.load.audio('Hin_43C1', window.baseUrl+'questionSounds/4.3A/Hindi/4.3C1.mp3');
        _this.load.audio('Hin_43C11', window.baseUrl+'questionSounds/4.3A/Hindi/4.3C1.1.mp3');
        _this.load.audio('Hin_43D1', window.baseUrl+'questionSounds/4.3A/Hindi/4.3D1.mp3');*/


        _this.load.image('Level43A_bg1',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/BG.png');
        //_this.load.atlas('Level43A_backbtn',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/4.3A/backbtn.json');
       // _this.load.atlas('Level43A_speaker',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/4.3A/speaker.json');
       // _this.load.atlas('Level43A_starAnim',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/4.3A/starAnim.json');
        _this.load.image('Level43A_cloud',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/cloud.png');
        //_this.load.atlas('Level43A_btn',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.3A/btn.json');
        _this.load.image('Level43A_bg3',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/bg3.png');
        //_this.load.image('Level43A_tittleBaar',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level43A_replay',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.3A/reply.json');
        
        _this.load.atlas('tick',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/tick.png' ,window.baseUrl+'json/gradeJson/4.3A/tick.json');
        _this.load.atlas('eraser',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/eraser.png' ,window.baseUrl+'json/gradeJson/4.3A/eraser.json');


        _this.load.atlas('Level43A_numbg',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/numbg.png' ,window.baseUrl+'json/gradeJson/4.3A/numbg.json');
        _this.load.atlas('Level43A_rightBtn',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/rightBtn.png' ,window.baseUrl+'json/gradeJson/4.3A/rightBtn.json');
        _this.load.atlas('Level43A_wrongBtn',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/wrongBtn.png' ,window.baseUrl+'json/gradeJson/4.3A/wrongBtn.json');
        
        //My files to load
      //  _this.load.atlas('Level43A_gameBox',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/gameBox.png' ,window.baseUrl+'json/gradeJson/4.3A/gameBox.json');
        //_this.load.atlas('Level43A_allimg',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/allimg.png' ,window.baseUrl+'json/gradeJson/4.3A/allimg.json');
        _this.load.atlas('Level43A_tickMark',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/tickMark.png' ,window.baseUrl+'json/gradeJson/4.3A/tickMark.json');
        _this.load.atlas('Level43A_crossMark',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/crossMark.png' ,window.baseUrl+'json/gradeJson/4.3A/crossMark.json');
        
        //_this.load.image('Level43A_glow',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/glow.png');
        
        //game items
            _this.load.image('Level43A_arrow',window.baseUrl+'assets/gradeAssets/4.3A/commonAssets/Arw.png');
        
         _this.load.atlas('Level43A_incBox',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/box1.png' ,window.baseUrl+'json/gradeJson/4.3A/box1.json');
         _this.load.atlas('Level43A_AnswerBox',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/box2.png' ,window.baseUrl+'json/gradeJson/4.3A/box2.json');
        
         _this.load.atlas('Level43A_50Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/50mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/50mlQ.json');
         _this.load.atlas('Level43A_100Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/100mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/100mlQ.json');
         _this.load.atlas('Level43A_200Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/200mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/200mlQ.json');
         _this.load.atlas('Level43A_250Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/250mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/250mlQ.json');
         _this.load.atlas('Level43A_500Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/500mlQ.png' ,window.baseUrl+'json/gradeJson/4.3A/500mlQ.json');
        
         _this.load.atlas('Level43A_200A',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/A 200.png' ,window.baseUrl+'json/gradeJson/4.3A/A 200.json');
         _this.load.atlas('Level43A_250A',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/A 250.png' ,window.baseUrl+'json/gradeJson/4.3A/A 250.json');
         _this.load.atlas('Level43A_500A',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/A 500.png' ,window.baseUrl+'json/gradeJson/4.3A/A 500.json');
         _this.load.atlas('Level43A_1000A',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/A 1000.png' ,window.baseUrl+'json/gradeJson/4.3A/A 1000.json');
        
        
        _this.load.atlas('Level43A_equation',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/equation.png' ,window.baseUrl+'json/gradeJson/4.3A/equation.json');
        
        
        /******************** Level 4.3B******************************/
                _this.load.atlas('Level43A_50Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/50mlQB.png' ,window.baseUrl+'json/gradeJson/4.3A/50mlQB.json');
         _this.load.atlas('Level43A_100Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/100mlQB.png' ,window.baseUrl+'json/gradeJson/4.3A/100mlQB.json');
         _this.load.atlas('Level43A_250Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/250mlQB.png' ,window.baseUrl+'json/gradeJson/4.3A/250mlQB.json');
         _this.load.atlas('Level43A_500Q',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/500mlQB.png' ,window.baseUrl+'json/gradeJson/4.3A/500mlQB.json');
        
         _this.load.atlas('Level43A_bottle',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/bottleB.png' ,window.baseUrl+'json/gradeJson/4.3A/bottleB.json');
         _this.load.atlas('Level43A_bottle2',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/bottle2B.png' ,window.baseUrl+'json/gradeJson/4.3A/bottle2B.json');
         _this.load.atlas('Level43A_bottle3',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/bottle3B.png' ,window.baseUrl+'json/gradeJson/4.3A/bottle3B.json');
         _this.load.atlas('Level43A_cup',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/cupB.png' ,window.baseUrl+'json/gradeJson/4.3A/cupB.json');
         _this.load.atlas('Level43A_glass',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/glassB.png' ,window.baseUrl+'json/gradeJson/4.3A/glassB.json');
         _this.load.atlas('Level43A_jug',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/jugB.png' ,window.baseUrl+'json/gradeJson/4.3A/jugB.json');
         _this.load.atlas('Level43A_jug2',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/jug2B.png' ,window.baseUrl+'json/gradeJson/4.3A/jug2B.json');
        
        
        _this.load.atlas('Level43A_equationB',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/equationB.png' ,window.baseUrl+'json/gradeJson/4.3A/equationB.json');
        
        
        /*********************Level 4.3 C*******************************/
         _this.load.atlas('Level43A_50QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/50mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/50mlQC.json');
         _this.load.atlas('Level43A_100QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/100mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/100mlQC.json');
         _this.load.atlas('Level43A_200QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/200mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/200mlQC.json');
         _this.load.atlas('Level43A_250QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/250mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/250mlQC.json');
         _this.load.atlas('Level43A_500QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/500mlQC.png' ,window.baseUrl+'json/gradeJson/4.3A/500mlQC.json');
        
         _this.load.atlas('Level43A_1000AC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/1000ltrC.png' ,window.baseUrl+'json/gradeJson/4.3A/1000ltrC.json');
         _this.load.atlas('Level43A_1000QC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/1000mlQD.png' ,window.baseUrl+'json/gradeJson/4.3A/1000mlQD.json');
         _this.load.atlas('Level43A_jugC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/2lJug.png' ,window.baseUrl+'json/gradeJson/4.3A/2lJug.json');
         _this.load.atlas('Level43A_arrowC',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/arrowC.png' ,window.baseUrl+'json/gradeJson/4.3A/arrowC.json');
         _this.load.atlas('Level43A_glow',window.baseUrl+'assets/gradeAssets/4.3A/gameAssets/glowC.png' ,window.baseUrl+'json/gradeJson/4.3A/glowC.json');
		 
		/* _this.load.audio('waterFill', window.baseUrl+'questionSounds/4.3A/waterFillingSound.mp3');
        _this.load.audio('Eng_43A1', window.baseUrl+'questionSounds/4.3A/English/4.3A1.mp3');
        _this.load.audio('Eng_43B1', window.baseUrl+'questionSounds/4.3A/English/4.3B1.mp3');
        _this.load.audio('Eng_43C1', window.baseUrl+'questionSounds/4.3A/English/4.3C1.mp3');
        _this.load.audio('Eng_43C11', window.baseUrl+'questionSounds/4.3A/English/4.3C1.1.mp3');
        _this.load.audio('Eng_43D1', window.baseUrl+'questionSounds/4.3A/English/4.3D1.mp3');
        _this.load.audio('Kan_43A1', window.baseUrl+'questionSounds/4.3A/Kannada/4.3A1.mp3');
        _this.load.audio('Kan_43B1', window.baseUrl+'questionSounds/4.3A/Kannada/4.3B1.mp3');
        _this.load.audio('Kan_43C1', window.baseUrl+'questionSounds/4.3A/Kannada/4.3C1.mp3');
        _this.load.audio('Kan_43C11', window.baseUrl+'questionSounds/4.3A/Kannada/4.3C1.1.mp3');
        _this.load.audio('Kan_43D1', window.baseUrl+'questionSounds/4.3A/Kannada/4.3D1.mp3');
        _this.load.audio('Hin_43A1', window.baseUrl+'questionSounds/4.3A/Hindi/4.3A1.mp3');
        _this.load.audio('Hin_43B1', window.baseUrl+'questionSounds/4.3A/Hindi/4.3B1.mp3');
        _this.load.audio('Hin_43C1', window.baseUrl+'questionSounds/4.3A/Hindi/4.3C1.mp3');
        _this.load.audio('Hin_43C11', window.baseUrl+'questionSounds/4.3A/Hindi/4.3C1.1.mp3');
        _this.load.audio('Hin_43D1', window.baseUrl+'questionSounds/4.3A/Hindi/4.3D1.mp3');*/
	},
	
	addgame5_1Assets:function()
	{
		this.load.image('Level5.1_bg1',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/bg1.png');
        //this.load.atlas('CommonBackBtn',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/5.1/backbtn.json');
        //this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/5.1/speaker.json');
       // this.load.atlas('starAnim',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/5.1/starAnim.json');
        this.load.image('cloud',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/cloud.png');
        //this.load.atlas('btn',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/btn.png',window.baseUrl+'json/gradeJson/5.1/btn.json');
        //this.load.image('bg3',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/bg3.png');
       // this.load.image('tittleBaar',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/tittleBaar.png');
       // this.load.atlas('replay',window.baseUrl+'assets/gradeAssets/5.1/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/5.1/reply.json');
        
        //My files to load
        //this.load.atlas('gameBox',window.baseUrl+'assets/gradeAssets/5.1/gameBox.png' ,window.baseUrl+'json/gradeJson/5.1/gameBox.json');
        this.load.atlas('Level5.1_allimg',window.baseUrl+'assets/gradeAssets/5.1/allimg.png' ,window.baseUrl+'json/gradeJson/5.1/allimg.json');
        this.load.image('Level5.1_glow',window.baseUrl+'assets/gradeAssets/5.1/glow.png');
        
        //game items
         this.load.image('Level5.1_night1',window.baseUrl+'assets/gradeAssets/5.1/C1.png');
         this.load.image('Level5.1_night2',window.baseUrl+'assets/gradeAssets/5.1/C2.png');
         this.load.image('Level5.1_night3',window.baseUrl+'assets/gradeAssets/5.1/C3.png');
         this.load.image('Level5.1_night4',window.baseUrl+'assets/gradeAssets/5.1/C4.png');
        
         this.load.image('Level5.1_evng1',window.baseUrl+'assets/gradeAssets/5.1/C5.png');
         this.load.image('Level5.1_evng2',window.baseUrl+'assets/gradeAssets/5.1/C6.png');
         this.load.image('Level5.1_evng3',window.baseUrl+'assets/gradeAssets/5.1/C7.png');
         this.load.image('Level5.1_evng4',window.baseUrl+'assets/gradeAssets/5.1/C8.png');
        
         this.load.image('Level5.1_day1',window.baseUrl+'assets/gradeAssets/5.1/C9.png');
         this.load.image('Level5.1_day2',window.baseUrl+'assets/gradeAssets/5.1/C10.png');
         this.load.image('Level5.1_day3',window.baseUrl+'assets/gradeAssets/5.1/C11.png');
         this.load.image('Level5.1_day4',window.baseUrl+'assets/gradeAssets/5.1/C12.png');
         this.load.image('Level5.1_day5',window.baseUrl+'assets/gradeAssets/5.1/C13.png');
        
         this.load.image('Level5.1_mrng1',window.baseUrl+'assets/gradeAssets/5.1/C14.png');
         this.load.image('Level5.1_mrng2',window.baseUrl+'assets/gradeAssets/5.1/C15.png');
         this.load.image('Level5.1_mrng3',window.baseUrl+'assets/gradeAssets/5.1/C16.png');
         this.load.image('Level5.1_mrng4',window.baseUrl+'assets/gradeAssets/5.1/C17.png');
         this.load.image('Level5.1_mrng5',window.baseUrl+'assets/gradeAssets/5.1/C18.png');

        
         this.load.image('Level5.1_dBox1',window.baseUrl+'assets/gradeAssets/5.1/A1.png');
         this.load.image('Level5.1_dBox2',window.baseUrl+'assets/gradeAssets/5.1/A2.png');
         this.load.image('Level5.1_dBox3',window.baseUrl+'assets/gradeAssets/5.1/A3.png');
         this.load.image('Level5.1_dBox4',window.baseUrl+'assets/gradeAssets/5.1/A4.png');
        
        this.load.atlas('Level5.1_gameBox1',window.baseUrl+'assets/gradeAssets/5.1/B2.png' ,window.baseUrl+'json/gradeJson/5.1/B2.json');
        this.load.atlas('Level5.1_gameBox2',window.baseUrl+'assets/gradeAssets/5.1/B3.png' ,window.baseUrl+'json/gradeJson/5.1/B3.json');
        this.load.atlas('Level5.1_gameBox3',window.baseUrl+'assets/gradeAssets/5.1/B4.png' ,window.baseUrl+'json/gradeJson/5.1/B4.json');
        this.load.atlas('Level5.1_gameBox4',window.baseUrl+'assets/gradeAssets/5.1/B5.png' ,window.baseUrl+'json/gradeJson/5.1/B5.json');
	},

	addgame5_2Assets:function()
	{

		 /*this.load.image('glow',window.baseUrl+'assets/gradeAssets/5.2/glow.png');
         //game items
         this.load.image('Bg',window.baseUrl+'assets/gradeAssets/5.2/Bg.png');
         this.load.image('main_image1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/main_image.png');
         this.load.image('main_image2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/main_image.png');
         this.load.image('main_image3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/main_image.png');
         this.load.image('main_image4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/main_image.png');
         this.load.image('main_image5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/main_image.png');
         this.load.image('main_image6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/main_image.png');
         this.load.atlas('blankimg',window.baseUrl+'assets/gradeAssets/5.2/animslide.png',window.baseUrl+'json/gradeJson/5.2/animslide.json');
        
         this.load.image('wed1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/img1.png');
         this.load.image('tue1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/img2.png');
         this.load.image('sun1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/img3.png');
         this.load.image('sat1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/img4.png');
         this.load.image('fri1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/img5.png');
         this.load.image('thu1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/img6.png');
         this.load.image('mon1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/img7.png');
        
         this.load.image('mon2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/img1.png');
         this.load.image('sat2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/img2.png');
         this.load.image('sun2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/img3.png');
         this.load.image('fri2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/img4.png');
         this.load.image('tue2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/img5.png');
         this.load.image('thu2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/img6.png');
         this.load.image('wed2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/img7.png');
        
         this.load.image('sun3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/img1.png');
         this.load.image('fri3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/img2.png');
         this.load.image('mon3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/img3.png');
         this.load.image('wed3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/img4.png');
         this.load.image('thu3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/img5.png');
         this.load.image('sat3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/img6.png');
         this.load.image('tue3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/img7.png');
      
         this.load.image('tue4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/img1.png');
         this.load.image('wed4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/img2.png');
         this.load.image('mon4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/img3.png');
         this.load.image('fri4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/img4.png');
         this.load.image('sun4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/img5.png');
         this.load.image('thu4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/img6.png');
         this.load.image('sat4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/img7.png');
    
         this.load.image('sat5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/img1.png');
         this.load.image('fri5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/img2.png');
         this.load.image('tue5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/img3.png');
         this.load.image('thu5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/img4.png');
         this.load.image('sun5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/img5.png');
         this.load.image('wed5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/img6.png');
         this.load.image('mon5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/img7.png');
        
         this.load.image('sun6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/img1.png');
         this.load.image('tue6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/img2.png');
         this.load.image('thu6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/img3.png');
         this.load.image('sat6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/img4.png');
         this.load.image('fri6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/img5.png');
         this.load.image('wed6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/img6.png');
         this.load.image('mon6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/img7.png');
        
         this.load.image('sun19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/sun.png');
         this.load.image('mon19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/mon.png');
         this.load.image('tue19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/tue.png');
         this.load.image('wed19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/wed.png');
         this.load.image('thu19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/thu.png');
         this.load.image('fri19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/fri.png');
         this.load.image('sat19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/sat.png');
        
         this.load.image('sun20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/sun.png');
         this.load.image('mon20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/mon.png');
         this.load.image('tue20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/tue.png');
         this.load.image('wed20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/wed.png');
         this.load.image('thu20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/thu.png');
         this.load.image('fri20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/fri.png');
         this.load.image('sat20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/sat.png');
        
         this.load.image('sun21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/sun.png');
         this.load.image('mon21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/mon.png');
         this.load.image('tue21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/tue.png');
         this.load.image('wed21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/wed.png');
         this.load.image('thu21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/thu.png');
         this.load.image('fri21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/fri.png');
         this.load.image('sat21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/sat.png');
        
         this.load.image('sun22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/sun.png');
         this.load.image('mon22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/mon.png');
         this.load.image('tue22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/tue.png');
         this.load.image('wed22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/wed.png');
         this.load.image('thu22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/thu.png');
         this.load.image('fri22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/fri.png');
         this.load.image('sat22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/sat.png');
        
         this.load.image('sun23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/sun.png');
         this.load.image('mon23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/mon.png');
         this.load.image('tue23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/tue.png');
         this.load.image('wed23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/wed.png');
         this.load.image('thu23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/thu.png');
         this.load.image('fri23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/fri.png');
         this.load.image('sat23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/sat.png');
        
         this.load.image('sun24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/sun.png');
         this.load.image('mon24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/mon.png');
         this.load.image('tue24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/tue.png');
         this.load.image('wed24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/wed.png');
         this.load.image('thu24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/thu.png');
         this.load.image('fri24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/fri.png');
         this.load.image('sat24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/sat.png');*/


         this.load.image('Level52_bg1',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/bg1.png');
         this.load.atlas('Level52_btn',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/btn.png',window.baseUrl+'json/gradeJson/5.2/btn.json');
         this.load.image('Level52_bg3',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/bg3.png');
         this.load.image('Level52_tittleBaar',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/tittleBaar.png');
         this.load.atlas('Level52_replay',window.baseUrl+'assets/gradeAssets/5.2/commonAssets52/reply.png' ,window.baseUrl+'json/gradeJson/5.2/reply.json');
      
         this.load.image('Level52_glow',window.baseUrl+'assets/gradeAssets/5.2/glow.png');
         //game items
         this.load.image('Level52_Bg',window.baseUrl+'assets/gradeAssets/5.2/Bg.png');
         this.load.image('Level52_main_image1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/main_image.png');
         this.load.image('Level52_main_image2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/main_image.png');
         this.load.image('Level52_main_image3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/main_image.png');
         this.load.image('Level52_main_image4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/main_image.png');
         this.load.image('Level52_main_image5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/main_image.png');
         this.load.image('Level52_main_image6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/main_image.png');
         this.load.atlas('Level52_blankimg',window.baseUrl+'assets/gradeAssets/5.2/animslide.png',window.baseUrl+'json/gradeJson/5.2/animslide.json');
        
        
         this.load.atlas('Level52_sunday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/sunday.png',window.baseUrl+'json/gradeJson/5.2/sunday.json');
         this.load.atlas('Level52_monday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/monday.png',window.baseUrl+'json/gradeJson/5.2/monday.json');
         this.load.atlas('Level52_tuesday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/tuesday.png',window.baseUrl+'json/gradeJson/5.2/tuesday.json');
         this.load.atlas('Level52_wednesday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/wednesday.png',window.baseUrl+'json/gradeJson/5.2/wednesday.json');
         this.load.atlas('Level52_thursday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/thursday.png',window.baseUrl+'json/gradeJson/5.2/thursday.json');
         this.load.atlas('Level52_friday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/friday.png',window.baseUrl+'json/gradeJson/5.2/friday.json');
         this.load.atlas('Level52_saturday',window.baseUrl+'assets/gradeAssets/5.2/commonAssets/saturday.png',window.baseUrl+'json/gradeJson/5.2/saturday.json');
         
        
         this.load.image('Level52_wed1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/wed1.png');
         this.load.image('Level52_tue1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/tue1.png');
         this.load.image('Level52_sun1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/sun1.png');
         this.load.image('Level52_sat1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/sat1.png');
         this.load.image('Level52_fri1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/fri1.png');
         this.load.image('Level52_thu1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/thu1.png');
         this.load.image('Level52_mon1',window.baseUrl+'assets/gradeAssets/5.2/Slide1/mon1.png');
        
         this.load.image('Level52_mon2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/mon2.png');
         this.load.image('Level52_sat2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/sat2.png');
         this.load.image('Level52_sun2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/sun2.png');
         this.load.image('Level52_fri2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/fri2.png');
         this.load.image('Level52_tue2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/tue2.png');
         this.load.image('Level52_thu2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/thu2.png');
         this.load.image('Level52_wed2',window.baseUrl+'assets/gradeAssets/5.2/Slide2/wed2.png');
        
         this.load.image('Level52_sun3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/sun3.png');
         this.load.image('Level52_fri3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/fri3.png');
         this.load.image('Level52_mon3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/mon3.png');
         this.load.image('Level52_wed3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/wed3.png');
         this.load.image('Level52_thu3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/thu3.png');
         this.load.image('Level52_sat3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/sat3.png');
         this.load.image('Level52_tue3',window.baseUrl+'assets/gradeAssets/5.2/Slide3/tue3.png');
      
         this.load.image('Level52_tue4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/tue4.png');
         this.load.image('Level52_wed4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/wed4.png');
         this.load.image('Level52_mon4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/mon4.png');
         this.load.image('Level52_fri4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/fri4.png');
         this.load.image('Level52_sun4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/sun4.png');
         this.load.image('Level52_thu4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/thu4.png');
         this.load.image('Level52_sat4',window.baseUrl+'assets/gradeAssets/5.2/Slide4/sat4.png');
    
         this.load.image('Level52_sat5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/sat5.png');
         this.load.image('Level52_fri5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/fri5.png');
         this.load.image('Level52_tue5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/tue5.png');
         this.load.image('Level52_thu5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/thu5.png');
         this.load.image('Level52_sun5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/sun5.png');
         this.load.image('Level52_wed5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/wed5.png');
         this.load.image('Level52_mon5',window.baseUrl+'assets/gradeAssets/5.2/Slide5/mon5.png');
        
         this.load.image('Level52_sun6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/sun6.png');
         this.load.image('Level52_tue6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/tue6.png');
         this.load.image('Level52_thu6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/thu6.png');
         this.load.image('Level52_sat6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/sat6.png');
         this.load.image('Level52_fri6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/fri6.png');
         this.load.image('Level52_wed6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/wed6.png');
         this.load.image('Level52_mon6',window.baseUrl+'assets/gradeAssets/5.2/Slide6/mon6.png');
        
         this.load.image('Level52_sun19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_mon19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_tue19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_wed19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_thu19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_fri19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_sat19',window.baseUrl+'assets/gradeAssets/5.2/Slide19/img.png');
        
         this.load.image('Level52_sun20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_mon20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_tue20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_wed20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_thu20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_fri20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_sat20',window.baseUrl+'assets/gradeAssets/5.2/Slide20/img.png');
        
         this.load.image('Level52_sun21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_mon21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_tue21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_wed21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_thu21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_fri21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_sat21',window.baseUrl+'assets/gradeAssets/5.2/Slide21/img.png');
        
         this.load.image('Level52_sun22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_mon22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_tue22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_wed22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_thu22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_fri22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_sat22',window.baseUrl+'assets/gradeAssets/5.2/Slide22/img.png');
        
         this.load.image('Level52_sun23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_mon23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_tue23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_wed23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_thu23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_fri23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_sat23',window.baseUrl+'assets/gradeAssets/5.2/Slide23/img.png');
        
         this.load.image('Level52_sun24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_mon24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_tue24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_wed24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_thu24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_fri24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_sat24',window.baseUrl+'assets/gradeAssets/5.2/Slide24/img.png');
	},


	addgame5_4Assets:function()
	{
		/*this.load.image('bg1',window.baseUrl+'assets/commonAssets/bg1.png');
        this.load.atlas('CommonBackBtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/5.4/backbtn.json');
        this.load.atlas('CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/5.4/speaker.json');
        this.load.atlas('starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/5.4/starAnim.json');
        this.load.image('cloud',window.baseUrl+'assets/commonAssets/cloud.png');
        this.load.atlas('btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/5.4/btn.json');
        this.load.image('bg3',window.baseUrl+'assets/commonAssets/bg3.png');
        this.load.image('tittleBaar',window.baseUrl+'assets/commonAssets/tittleBaar.png');
        this.load.atlas('replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/5.4/reply.json');*/
        //game assets
      /*  this.load.atlas('Level54_main_imageanim',window.baseUrl+'assets/gradeAssets/5.4/main_imageanim.png' ,window.baseUrl+'json/gradeJson/5.4/main_imageanim.json');
        this.load.image('Level54_main_image',window.baseUrl+'assets/gradeAssets/5.4/main_image.png');
        this.load.image('Level54_glow',window.baseUrl+'assets/gradeAssets/5.4/glow.png');
        this.load.image('Level54_bg54',window.baseUrl+'assets/gradeAssets/5.4/bg54.png');
        this.load.image('Level54_JAN',window.baseUrl+'assets/gradeAssets/5.4/JAN.png');
        this.load.image('Level54_FEB',window.baseUrl+'assets/gradeAssets/5.4/FEB.png');
        this.load.image('Level54_MAR',window.baseUrl+'assets/gradeAssets/5.4/MAR.png');
        this.load.image('Level54_APR',window.baseUrl+'assets/gradeAssets/5.4/APR.png');
        this.load.image('Level54_MAY',window.baseUrl+'assets/gradeAssets/5.4/MAY.png');
        this.load.image('Level54_JUNE',window.baseUrl+'assets/gradeAssets/5.4/JUNE.png');
        this.load.image('Level54_JULY',window.baseUrl+'assets/gradeAssets/5.4/JULY.png');
        this.load.image('Level54_AUG',window.baseUrl+'assets/gradeAssets/5.4/AUG.png');
        this.load.image('Level54_SEP',window.baseUrl+'assets/gradeAssets/5.4/SEP.png');
        this.load.image('Level54_OCT',window.baseUrl+'assets/gradeAssets/5.4/OCT.png');
        this.load.image('Level54_NOV',window.baseUrl+'assets/gradeAssets/5.4/NOV.png');
        this.load.image('Level54_DEC',window.baseUrl+'assets/gradeAssets/5.4/DEC.png');
        this.load.image('Level54_JAN2',window.baseUrl+'assets/gradeAssets/5.4/JAN2.png');
        this.load.image('Level54_FEB2',window.baseUrl+'assets/gradeAssets/5.4/FEB2.png');
        this.load.image('Level54_MAR2',window.baseUrl+'assets/gradeAssets/5.4/MAR2.png');
        this.load.image('Level54_APR2',window.baseUrl+'assets/gradeAssets/5.4/APR2.png');
        this.load.image('Level54_MAY2',window.baseUrl+'assets/gradeAssets/5.4/MAY2.png');
        this.load.image('Level54_JUNE2',window.baseUrl+'assets/gradeAssets/5.4/JUNE2.png');
        this.load.image('Level54_JULY2',window.baseUrl+'assets/gradeAssets/5.4/JULY2.png');
        this.load.image('Level54_AUG2',window.baseUrl+'assets/gradeAssets/5.4/AUG2.png');
        this.load.image('Level54_SEP2',window.baseUrl+'assets/gradeAssets/5.4/SEP2.png');
        this.load.image('Level54_OCT2',window.baseUrl+'assets/gradeAssets/5.4/OCT2.png');
        this.load.image('Level54_NOV2',window.baseUrl+'assets/gradeAssets/5.4/NOV2.png');
        this.load.image('Level54_DEC2',window.baseUrl+'assets/gradeAssets/5.4/DEC2.png');*/


        //common assets
        this.load.image('Level54_bg1',window.baseUrl+'assets/gradeAssets/5.4/bg54.png');
        this.load.atlas('Level54_btn',window.baseUrl+'assets/gradeAssets/5.4/commonAssets/btn.png',window.baseUrl+'json/gradeJson/5.4/btn.json');
        this.load.image('Level54_bg3',window.baseUrl+'assets/gradeAssets/5.4/commonAssets/bg3.png');
        this.load.image('Level54_tittleBaar',window.baseUrl+'assets/gradeAssets/5.4/commonAssets/tittleBaar.png');
        this.load.atlas('Level54_replay',window.baseUrl+'assets/gradeAssets/5.4/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/5.4/reply.json');
        this.load.atlas('Level54_monthname',window.baseUrl+'assets/gradeAssets/5.4/monthname.png' ,window.baseUrl+'json/gradeJson/5.4/monthname.json');
        //game assets
        this.load.atlas('Level54_main_imageanim',window.baseUrl+'assets/gradeAssets/5.4/main_imageanim.png' ,window.baseUrl+'json/gradeJson/5.4/main_imageanim.json');
        this.load.image('Level54_main_image',window.baseUrl+'assets/gradeAssets/5.4/main_image.png');
        this.load.image('Level54_glow',window.baseUrl+'assets/gradeAssets/5.4/glow.png');
        this.load.image('Level54_bg54',window.baseUrl+'assets/gradeAssets/5.4/bg54.png');
        this.load.image('Level54_JAN',window.baseUrl+'assets/gradeAssets/5.4/JAN.png');
        this.load.image('Level54_FEB',window.baseUrl+'assets/gradeAssets/5.4/FEB.png');
        this.load.image('Level54_MAR',window.baseUrl+'assets/gradeAssets/5.4/MAR.png');
        this.load.image('Level54_APR',window.baseUrl+'assets/gradeAssets/5.4/APR.png');
        this.load.image('Level54_MAY',window.baseUrl+'assets/gradeAssets/5.4/MAY.png');
        this.load.image('Level54_JUNE',window.baseUrl+'assets/gradeAssets/5.4/JUNE.png');
        this.load.image('Level54_JULY',window.baseUrl+'assets/gradeAssets/5.4/JULY.png');
        this.load.image('Level54_AUG',window.baseUrl+'assets/gradeAssets/5.4/AUG.png');
        this.load.image('Level54_SEP',window.baseUrl+'assets/gradeAssets/5.4/SEP.png');
        this.load.image('Level54_OCT',window.baseUrl+'assets/gradeAssets/5.4/OCT.png');
        this.load.image('Level54_NOV',window.baseUrl+'assets/gradeAssets/5.4/NOV.png');
        this.load.image('Level54_DEC',window.baseUrl+'assets/gradeAssets/5.4/DEC.png');
        this.load.image('Level54_JAN2',window.baseUrl+'assets/gradeAssets/5.4/JAN2.png');
        this.load.image('Level54_FEB2',window.baseUrl+'assets/gradeAssets/5.4/FEB2.png');
        this.load.image('Level54_MAR2',window.baseUrl+'assets/gradeAssets/5.4/MAR2.png');
        this.load.image('Level54_APR2',window.baseUrl+'assets/gradeAssets/5.4/APR2.png');
        this.load.image('Level54_MAY2',window.baseUrl+'assets/gradeAssets/5.4/MAY2.png');
        this.load.image('Level54_JUNE2',window.baseUrl+'assets/gradeAssets/5.4/JUNE2.png');
        this.load.image('Level54_JULY2',window.baseUrl+'assets/gradeAssets/5.4/JULY2.png');
        this.load.image('Level54_AUG2',window.baseUrl+'assets/gradeAssets/5.4/AUG2.png');
        this.load.image('Level54_SEP2',window.baseUrl+'assets/gradeAssets/5.4/SEP2.png');
        this.load.image('Level54_OCT2',window.baseUrl+'assets/gradeAssets/5.4/OCT2.png');
        this.load.image('Level54_NOV2',window.baseUrl+'assets/gradeAssets/5.4/NOV2.png');
        this.load.image('Level54_DEC2',window.baseUrl+'assets/gradeAssets/5.4/DEC2.png');
	},

	addgame6_1Assets:function()
	{
		this.load.image('Level61_bg2',window.baseUrl+'assets/gradeAssets/6.1/bg2.png');
		
		
        
        //level1
        
        this.load.atlas('Level61_c1',window.baseUrl+'assets/gradeAssets/6.1/c1.png',window.baseUrl+'json/gradeJson/6.1/c1.json');
        this.load.atlas('Level61_redNum', window.baseUrl+'assets/gradeAssets/6.1/redNum.png', window.baseUrl+'json/gradeJson/6.1/redNum.json');
        this.load.atlas('Level61_whiteNum', window.baseUrl+'assets/gradeAssets/6.1/whiteNum.png', window.baseUrl+'json/gradeJson/6.1/whiteNum.json');
        this.load.atlas('Level61_months', window.baseUrl+'assets/gradeAssets/6.1/months.png', window.baseUrl+'json/gradeJson/6.1/months.json');  
        this.load.image('Level61_year', window.baseUrl+'assets/gradeAssets/6.1/year.png');
        
        
        this.load.atlas('Level61_monday',window.baseUrl+'assets/gradeAssets/6.1/monday.png',window.baseUrl+'json/gradeJson/6.1/monday.json');
        this.load.atlas('Level61_Tuesday',window.baseUrl+'assets/gradeAssets/6.1/Tuesday.png',window.baseUrl+'json/gradeJson/6.1/tuesday.json');
        this.load.atlas('Level61_wednesday',window.baseUrl+'assets/gradeAssets/6.1/wednesday.png',window.baseUrl+'json/gradeJson/6.1/wednesday.json');
        this.load.atlas('Level61_thusday',window.baseUrl+'assets/gradeAssets/6.1/thusday.png',window.baseUrl+'json/gradeJson/6.1/thursday.json');
        this.load.atlas('Level61_friday',window.baseUrl+'assets/gradeAssets/6.1/friday.png',window.baseUrl+'json/gradeJson/6.1/friday.json');
        this.load.atlas('Level61_saturday',window.baseUrl+'assets/gradeAssets/6.1/saturday.png',window.baseUrl+'json/gradeJson/6.1/saturday.json');
        this.load.atlas('Level61_sunday',window.baseUrl+'assets/gradeAssets/6.1/sunday.png',window.baseUrl+'json/gradeJson/6.1/sunday.json');
        this.load.atlas('anim1', window.baseUrl+'assets/gradeAssets/6.1/anim1.png', window.baseUrl+'json/gradeJson/6.1/anim1.json');
        //this.load.atlas('anim2', window.baseUrl+'assets/gradeAssets/6.1/anim2.png', window.baseUrl+'json/gradeJson/6.1/anim2.json');
        //this.load.atlas('anim3', window.baseUrl+'assets/gradeAssets/6.1/A3.png', window.baseUrl+'json/gradeJson/6.1/A3.json');
        this.load.atlas('Level61_g3', window.baseUrl+'assets/gradeAssets/6.1/g3.png', window.baseUrl+'json/gradeJson/6.1/g3.json');
        this.load.atlas('Level61_g2', window.baseUrl+'assets/gradeAssets/6.1/g2.png', window.baseUrl+'json/gradeJson/6.1/g2.json');
	},

	addgame6_2Assets:function()
	{
		this.load.image('Level62_bg2',window.baseUrl+'assets/gradeAssets/6.2/bg2.png');

		this.load.atlas('Level62_c1',window.baseUrl+'assets/gradeAssets/6.2/c1.png',window.baseUrl+'json/gradeJson/6.2/c1.json');
        this.load.atlas('Level62_redNum', window.baseUrl+'assets/gradeAssets/6.2/redNum.png', window.baseUrl+'json/gradeJson/6.2/redNum.json');
        this.load.atlas('Level62_whiteNum', window.baseUrl+'assets/gradeAssets/6.2/whiteNum.png', window.baseUrl+'json/gradeJson/6.2/whiteNum.json');
        this.load.atlas('Level62_months', window.baseUrl+'assets/gradeAssets/6.2/months.png', window.baseUrl+'json/gradeJson/6.2/months.json');  
        this.load.image('Level62_year', window.baseUrl+'assets/gradeAssets/6.2/year.png');
        
        
        this.load.atlas('Level62_monday',window.baseUrl+'assets/gradeAssets/6.2/monday.png',window.baseUrl+'json/gradeJson/6.2/monday.json');
        this.load.atlas('Level62_Tuesday',window.baseUrl+'assets/gradeAssets/6.2/Tuesday.png',window.baseUrl+'json/gradeJson/6.2/tuesday.json');
        this.load.atlas('Level62_wednesday',window.baseUrl+'assets/gradeAssets/6.2/wednesday.png',window.baseUrl+'json/gradeJson/6.2/wednesday.json');
        this.load.atlas('Level62_thusday',window.baseUrl+'assets/gradeAssets/6.2/thursday.png',window.baseUrl+'json/gradeJson/6.2/thursday.json');
        this.load.atlas('Level62_friday',window.baseUrl+'assets/gradeAssets/6.2/friday.png',window.baseUrl+'json/gradeJson/6.2/friday.json');
        this.load.atlas('Level62_saturday',window.baseUrl+'assets/gradeAssets/6.2/saturday.png',window.baseUrl+'json/gradeJson/6.2/saturday.json');
        this.load.atlas('Level62_sunday',window.baseUrl+'assets/gradeAssets/6.2/sunday.png',window.baseUrl+'json/gradeJson/6.2/sunday.json');
        this.load.atlas('anim1', window.baseUrl+'assets/gradeAssets/6.2/anim1.png', window.baseUrl+'json/gradeJson/6.2/anim1.json');
        this.load.atlas('anim2', window.baseUrl+'assets/gradeAssets/6.2/anim2.png', window.baseUrl+'json/gradeJson/6.2/anim2.json');
        this.load.atlas('Level62_g3',window.baseUrl+'assets/gradeAssets/6.2/g3.png',window.baseUrl+'json/gradeJson/6.2/g3.json');
        this.load.atlas('Level62_g4',window.baseUrl+'assets/gradeAssets/6.2/g4.png',window.baseUrl+'json/gradeJson/6.2/g4.json');
	},

	addgame7_1Assets:function()
	{
		this.load.image('Level71_bg',window.baseUrl+'assets/gradeAssets/7.1/bg.png');
		//this.load.image('Level71_bg2',window.baseUrl+'assets/gradeAssets/7.1/bg2.png');
        this.load.image('Level71_backg',window.baseUrl+'assets/gradeAssets/7.1/backg.png');
        this.load.atlas('Level71_clock1',window.baseUrl+'assets/gradeAssets/7.1/clock1.png' ,window.baseUrl+'json/gradeJson/7.1/clock1.json');
        this.load.atlas('Level71_clock2',window.baseUrl+'assets/gradeAssets/7.1/clock2.png' ,window.baseUrl+'json/gradeJson/7.1/clock2.json');
        //this.load.atlas('Level71_clock3',window.baseUrl+'assets/gradeAssets/7.1/clock3.png' ,window.baseUrl+'json.gradeJson/7.1/clock3.json');
        //this.load.atlas('Level71_timer',window.baseUrl+'assets/gradeAssets/7.1/timer.png',window.baseUrl+'json.gradeJson/7.1/timer.json');
        

		//this.load.image('Level71_questionBackground', 'questionBackground.png');

		// this.load.audio('Level71_baudio', ['BackgroundSound.mp3', 'BackgroundSound.ogg']);
		// this.load.audio('Level71_waudio', ['WrongCelebrationSound.mp3', 'WrongCelebrationSound.ogg']);
        //this.load.audio('Level71_ClickSound', 'ClickSound.mp3');
		// this.load.audio('Level71_baudio1', ['BackgroundMusic.mp3', 'BackgroundMusic.ogg']);
		// this.load.audio('Level71_celebr', 'celebration.mp3');

		//this.load.image('Level71_playBg', 'playbg.png');
        
		this.load.image('Level71_langBg', window.baseUrl+'assets/gradeAssets/7.1/langbg.png');
        
		
		//this.load.atlas('Level71_heading',window.baseUrl+'assets/gradeAssets/7.1/hedding.png' ,window.baseUrl+'json.gradeJson/7.1/heading.json');
		//this.load.atlas('Level71_heading1',window.baseUrl+'assets/gradeAssets/7.1/heading1.png' ,window.baseUrl+'json.gradeJson/7.1/heading1.json');
		//this.load.image('Level71_line','Line.png');
		//this.load.image('Level71_celeb', window.baseUrl+'assets/gradeAssets/7.1/c.png');
        this.load.atlas('Level71_CommonBackBtn',window.baseUrl+'assets/gradeAssets/7.1/backbtn.png' ,window.baseUrl+'json/gradeJson/7.1/backbtn.json');
        this.load.atlas('Level71_CommonSpeakerBtn',window.baseUrl+'assets/gradeAssets/7.1/speaker.png' ,window.baseUrl+'json/gradeJson/7.1/speaker.json');
        this.load.image('Level71_headingLine', window.baseUrl+'assets/gradeAssets/7.1/headingLine.png');
        
		this.load.atlas('Level71_starAnim',window.baseUrl+'assets/gradeAssets/7.1/starAnim.png',window.baseUrl+'json/gradeJson/7.1/starAnim.json');
        this.load.atlas('Level71_btn',window.baseUrl+'assets/gradeAssets/7.1/btn.png',window.baseUrl+'json/gradeJson/7.1/btn.json');
        this.load.image('Level71_tittleBar', window.baseUrl+'assets/gradeAssets/7.1/tittleBar.png');
        this.load.atlas('Level71_replay', window.baseUrl+'assets/gradeAssets/7.1/reply.png', window.baseUrl+'json/gradeJson/7.1/reply.json');
        
         // this.load.atlas('Level71_numbg',window.baseUrl+'assets/gradeAssets/7.1/numbg.png',window.baseUrl+'json.gradeJson/7.1/numbg.json'); 
         this.load.atlas('Level71_numbers',window.baseUrl+'assets/gradeAssets/7.1/numbers.png',window.baseUrl+'json/gradeJson/7.1/numbers.json');
         //this.load.atlas('Level71_numbers2',window.baseUrl+'assets/gradeAssets/7.1/numbers2.png',window.baseUrl+'json.gradeJson/7.1/numbers2.json');
       
         
         this.load.atlas('Level71_n1',window.baseUrl+'assets/gradeAssets/7.1/one.png',window.baseUrl+'json/gradeJson/7.1/one.json');
         this.load.atlas('Level71_n2',window.baseUrl+'assets/gradeAssets/7.1/two.png',window.baseUrl+'json/gradeJson/7.1/two.json');
         this.load.atlas('Level71_n3',window.baseUrl+'assets/gradeAssets/7.1/three.png',window.baseUrl+'json/gradeJson/7.1/three.json');
         this.load.atlas('Level71_n4',window.baseUrl+'assets/gradeAssets/7.1/four.png',window.baseUrl+'json/gradeJson/7.1/four.json');
         this.load.atlas('Level71_n5',window.baseUrl+'assets/gradeAssets/7.1/five.png',window.baseUrl+'json/gradeJson/7.1/five.json');
         this.load.atlas('Level71_n6',window.baseUrl+'assets/gradeAssets/7.1/six.png',window.baseUrl+'json/gradeJson/7.1/six.json');
         this.load.atlas('Level71_n7',window.baseUrl+'assets/gradeAssets/7.1/seven.png',window.baseUrl+'json/gradeJson/7.1/seven.json');
         this.load.atlas('Level71_n8',window.baseUrl+'assets/gradeAssets/7.1/eight.png',window.baseUrl+'json/gradeJson/7.1/eight.json');
         this.load.atlas('Level71_n9',window.baseUrl+'assets/gradeAssets/7.1/nine.png',window.baseUrl+'json/gradeJson/7.1/nine.json');
         this.load.atlas('Level71_n10',window.baseUrl+'assets/gradeAssets/7.1/ten.png',window.baseUrl+'json/gradeJson/7.1/ten.json');
         this.load.atlas('Level71_n11',window.baseUrl+'assets/gradeAssets/7.1/eleven.png',window.baseUrl+'json/gradeJson/7.1/eleven.json');
         this.load.atlas('Level71_n12',window.baseUrl+'assets/gradeAssets/7.1/twelve.png',window.baseUrl+'json/gradeJson/7.1/twelve.json');

          //this.load.atlas('num',window.baseUrl+'assets/num.png',window.baseUrl+'json/num.json');
         this.load.atlas('Level71_rightmark',window.baseUrl+'assets/gradeAssets/7.1/rightmark.png',window.baseUrl+'json/gradeJson/7.1/rightmark.json');
        // this.load.image('leftdir',window.baseUrl+'assets/leftdir.png');
         this.load.atlas('Level71_rightdir1',window.baseUrl+'assets/gradeAssets/7.1/rightdir1.png',window.baseUrl+'json/gradeJson/7.1/rightdir1.json');
        // this.load.image('rightdir2',window.baseUrl+'assets/rightdir2.png');
         this.load.atlas('Level71_topdir',window.baseUrl+'assets/gradeAssets/7.1/topdir.png',window.baseUrl+'json/gradeJson/7.1/topdir.json');
	},
	
	

	addunitygame1_1Assets:function()
	{
		this.load.atlas('unity1_1Tick', window.baseUrl+'assets/gradeAssets/unity/1.1/Tick.png', window.baseUrl+'json/gradeJson/unity/1.1/Tick.json');

		
        //game assets.
        this.load.image('unity1_1BG_01', window.baseUrl+'assets/gradeAssets/unity/1.1/BG_01.png');
        //this.load.image('unity1_1Tick', window.baseUrl+'assets/gradeAssets/unity/1.1/Tick.png');
        this.load.image('unity1_1practice',window.baseUrl+'assets/gradeAssets/unity/1.1/practice.png');
        this.load.image('unity1_1topic',window.baseUrl+'assets/gradeAssets/unity/1.1/topic.png');
        //this.load.image('unity1_1backgrd', window.baseUrl+'assets/gradeAssets/unity/1.1/backgrd.png');
        this.load.atlas('unity1_1backgrd', window.baseUrl+'assets/gradeAssets/unity/1.1/backgrd.png',window.baseUrl+'json/gradeJson/unity/1.1/backgrd.json');
        
        this.load.atlas('unity1_1ice_1', window.baseUrl+'assets/gradeAssets/unity/1.1/1.png', window.baseUrl+'json/gradeJson/unity/1.1/1.json');
        this.load.atlas('unity1_1flowe_aim', window.baseUrl+'assets/gradeAssets/unity/1.1/flowe_aim.png', window.baseUrl+'json/gradeJson/unity/1.1/flowe_aim.json');
        this.load.atlas('unity1_1ball_anim', window.baseUrl+'assets/gradeAssets/unity/1.1/ball_anim.png', window.baseUrl+'json/gradeJson/unity/1.1/ball_anim.json');
        
        this.load.atlas('unity1_1ice_anim', window.baseUrl+'assets/gradeAssets/unity/1.1/ice_anim.png', window.baseUrl+'json/gradeJson/unity/1.1/ice_anim.json');
        this.load.atlas('unity1_1ball_anim2', window.baseUrl+'assets/gradeAssets/unity/1.1/ball_anim2.png', window.baseUrl+'json/gradeJson/unity/1.1/ball_anim2.json');
        this.load.atlas('unity1_1flowe_aim2', window.baseUrl+'assets/gradeAssets/unity/1.1/flowe_aim2.png', window.baseUrl+'json/gradeJson/unity/1.1/flowe_aim2.json');
	},

	addunitygame1_2Assets:function()
	{
		  
        
        this.load.image('unity1_2shadow',window.baseUrl+'assets/gradeAssets/unity/1.2/Basket_shadow.png');
        this.load.image('unity1_2basket',window.baseUrl+'assets/gradeAssets/unity/1.2/Basket.png');
        this.load.image('unity1_2Basket_Back',window.baseUrl+'assets/gradeAssets/unity/1.2/Basket_Back.png');
        this.load.image('unity1_2tree',window.baseUrl+'assets/gradeAssets/unity/1.2/Tree.png');
        this.load.image('unity1_2topic',window.baseUrl+'assets/gradeAssets/unity/1.2/topic.png');
         this.load.image('unity1_2practice',window.baseUrl+'assets/gradeAssets/unity/1.2/practice.png');
        this.load.atlas('unity1_2mango',window.baseUrl+'assets/gradeAssets/unity/1.2/mango.png' ,window.baseUrl+'json/gradeJson/unity/1.2/mango.json');
        this.load.atlas('unity1_2mangoCeleb',window.baseUrl+'assets/gradeAssets/unity/1.2/mangoCeleb.png' ,window.baseUrl+'json/gradeJson/unity/1.2/mangoCeleb.json');
	},

	addunitygame1_3Assets:function()
	{
		 
        this.load.atlas('unity13_NumberKey',window.baseUrl+'assets/gradeAssets/unity/1.3/NumberKeyN.png' ,window.baseUrl+'json/gradeJson/unity/1.3/NumberKeyN.json');
       // this.load.atlas('NumberKey',window.baseUrl+'assets/gradeAssets/unity/NumberKey.png' ,window.baseUrl+'json/gradeJson/unity/1.3/NumberKey.json');
        this.load.image('unity13_practice',window.baseUrl+'assets/gradeAssets/unity/1.3/practice.png');
        this.load.image('unity13_topic',window.baseUrl+'assets/gradeAssets/unity/1.3/topic.png');
        this.load.atlas('unity13_fish',window.baseUrl+'assets/gradeAssets/unity/1.3/fish.png' ,window.baseUrl+'json/gradeJson/unity/1.3/fish.json');
        this.load.atlas('unity13_fishCeleb',window.baseUrl+'assets/gradeAssets/unity/1.3/fishCeleb.png' ,window.baseUrl+'json/gradeJson/unity/1.3/fishCeleb.json');
        
        this.load.atlas('unity13_fish1',window.baseUrl+'assets/gradeAssets/unity/1.3/fish1.png' ,window.baseUrl+'json/gradeJson/unity/1.3/fish1.json');
        this.load.atlas('unity13_fish1Celeb',window.baseUrl+'assets/gradeAssets/unity/1.3/fish1Celeb.png' ,window.baseUrl+'json/gradeJson/unity/1.3/fish1Celeb.json');
        
        this.load.atlas('unity13_fish2',window.baseUrl+'assets/gradeAssets/unity/1.3/fish2.png' ,window.baseUrl+'json/gradeJson/unity/1.3/fish2.json');
        this.load.atlas('unity13_fish2Celeb',window.baseUrl+'assets/gradeAssets/unity/1.3/fish2Celeb.png' ,window.baseUrl+'json/gradeJson/unity/1.3/fish2Celeb.json');
	},

	addunitygame1_4Assets:function()
	{
		this.load.atlas('unity1_4Tick', window.baseUrl+'assets/gradeAssets/unity/1.4/Tick.png', window.baseUrl+'json/gradeJson/unity/1.4/Tick.json');
		
        //game assets.
        this.load.image('unity1_4BG_01', window.baseUrl+'assets/gradeAssets/unity/1.4/BG_01.png');
        this.load.image('unity1_4NumberKey', window.baseUrl+'assets/gradeAssets/unity/1.4/NumberKey.png');
        this.load.image('unity1_4practice',window.baseUrl+'assets/gradeAssets/unity/1.4/practice.png');
        this.load.image('unity1_4topic',window.baseUrl+'assets/gradeAssets/unity/1.4/topic.png');
        //this.load.image('unity1_4backgrd', window.baseUrl+'assets/gradeAssets/unity/1.4/backgrd.png');
        //this.load.image('unity1_4Tick', window.baseUrl+'assets/gradeAssets/unity/1.4/Tick.png');

        this.load.atlas('unity1_4backgrd', window.baseUrl+'assets/gradeAssets/unity/1.1/backgrd.png',window.baseUrl+'json/gradeJson/unity/1.1/backgrd.json');
        
        
        this.load.atlas('unity1_4ice_1', window.baseUrl+'assets/gradeAssets/unity/1.4/1.png', window.baseUrl+'json/gradeJson/unity/1.4/1.json');
        this.load.atlas('unity1_4flowe_aim', window.baseUrl+'assets/gradeAssets/unity/1.4/flowe_aim.png', window.baseUrl+'json/gradeJson/unity/1.4/flowe_aim.json');
        this.load.atlas('unity1_4ball_anim', window.baseUrl+'assets/gradeAssets/unity/1.4/ball_anim.png', window.baseUrl+'json/gradeJson/unity/1.4/ball_anim.json');
        
        this.load.atlas('unity1_4ice_anim', window.baseUrl+'assets/gradeAssets/unity/1.4/ice_anim.png', window.baseUrl+'json/gradeJson/unity/1.4/ice_anim.json');
        this.load.atlas('unity1_4ball_anim2', window.baseUrl+'assets/gradeAssets/unity/1.4/ball_anim2.png', window.baseUrl+'json/gradeJson/unity/1.4/ball_anim2.json');
        this.load.atlas('unity1_4flowe_aim2', window.baseUrl+'assets/gradeAssets/unity/1.4/flowe_aim2.png', window.baseUrl+'json/gradeJson/unity/1.4/flowe_aim2.json');
	},

	addunitygame1_5Assets:function()
	{
		
        
        this.load.image('unity15_shadow',window.baseUrl+'assets/gradeAssets/unity/1.5/Basket_shadow.png');
        this.load.image('unity15_basket',window.baseUrl+'assets/gradeAssets/unity/1.5/Basket.png');
        this.load.image('unity15_Basket_Back',window.baseUrl+'assets/gradeAssets/unity/1.5/Basket_Back.png');
        this.load.image('unity15_tree',window.baseUrl+'assets/gradeAssets/unity/1.5/Tree.png');
        this.load.image('unity15_topic',window.baseUrl+'assets/gradeAssets/unity/1.5/topic.png');
         this.load.image('unity15_practice',window.baseUrl+'assets/gradeAssets/unity/1.5/practice.png');
        this.load.atlas('unity15_mango',window.baseUrl+'assets/gradeAssets/unity/1.5/mango.png' ,window.baseUrl+'json/gradeJson/unity/1.5/mango.json');
        this.load.atlas('unity15_mangoCeleb',window.baseUrl+'assets/gradeAssets/unity/1.5/mangoCeleb.png' ,window.baseUrl+'json/gradeJson/unity/1.5/mangoCeleb.json');
        this.load.atlas('unity15_NumberKey',window.baseUrl+'assets/gradeAssets/unity/1.5/NumberKey.png' ,window.baseUrl+'json/gradeJson/unity/1.5/NumberKey.json');
	},

	addunitygame1_6Assets:function()
	{
		
        //game assets.
        this.load.image('unity16_BG_01', window.baseUrl+'assets/gradeAssets/unity/1.6/BG_01.png');
        this.load.image('unity16_Bubble', window.baseUrl+'assets/gradeAssets/unity/1.6/Bubble.png');
        
          this.load.image('unity16_topic',window.baseUrl+'assets/gradeAssets/unity/1.6/topic.png');
         this.load.image('unity16_practice',window.baseUrl+'assets/gradeAssets/unity/1.6/practice.png');
        
       
        this.load.atlas('unity16_BubbleAni', window.baseUrl+'assets/gradeAssets/unity/1.6/BubbleAni.png', window.baseUrl+'json/gradeJson/unity/1.6/BubbleAni.json');
	},

	addunitygame1_7Assets:function()
	{
		this.load.image('Game17_background',window.baseUrl+'assets/gradeAssets/unity/1.7/bg.png');
        this.load.image('Game17_TopBar', window.baseUrl+'assets/gradeAssets/unity/1.7/Topbar.png');
        this.load.image('Game17_dottedBox', window.baseUrl+'assets/gradeAssets/unity/1.7/dottedBox.png');
        this.load.atlas('Game17_tick',window.baseUrl+'assets/gradeAssets/unity/1.7/tick.png' ,window.baseUrl+'json/gradeJson/unity/1.7/tick.json');
		this.load.image('Game17_celeb', window.baseUrl+'assets/gradeAssets/unity/1.7/c.png');
        this.load.atlas('Game17_backbtn',window.baseUrl+'assets/gradeAssets/unity/1.7/backbtn.png' ,window.baseUrl+'json/gradeJson/unity/1.7/backbtn.json');
        this.load.atlas('Game17_speaker',window.baseUrl+'assets/gradeAssets/unity/1.7/speaker.png' ,window.baseUrl+'json/gradeJson/unity/1.7/speaker.json');
		this.load.atlas('Game17_starAnim',window.baseUrl+'assets/gradeAssets/unity/1.7/starAnim.png',window.baseUrl+'json/gradeJson/unity/1.7/starAnim.json');
        this.load.atlas('Game17_btn',window.baseUrl+'assets/gradeAssets/unity/1.7/btn.png',window.baseUrl+'json/gradeJson/unity/1.7/btn.json');
        this.load.image('Game17_tittleBar', window.baseUrl+'assets/gradeAssets/unity/1.7/tittleBar.png');
        this.load.atlas('Game17_replay', window.baseUrl+'assets/gradeAssets/unity/1.7/reply.png', window.baseUrl+'json/gradeJson/unity/1.7/reply.json');
        
        //load 1.7 assets
        this.load.image('Game17_zero', window.baseUrl+'assets/gradeAssets/unity/1.7/0.png');
        this.load.image('Game17_one', window.baseUrl+'assets/gradeAssets/unity/1.7/1.png');
        this.load.image('Game17_two', window.baseUrl+'assets/gradeAssets/unity/1.7/2.png');
        this.load.image('Game17_three', window.baseUrl+'assets/gradeAssets/unity/1.7/3.png');
        this.load.image('Game17_four', window.baseUrl+'assets/gradeAssets/unity/1.7/4.png');
        this.load.image('Game17_five', window.baseUrl+'assets/gradeAssets/unity/1.7/5.png');
        this.load.image('Game17_six', window.baseUrl+'assets/gradeAssets/unity/1.7/6.png');
        this.load.image('Game17_seven', window.baseUrl+'assets/gradeAssets/unity/1.7/7.png');
        this.load.image('Game17_eight', window.baseUrl+'assets/gradeAssets/unity/1.7/8.png');
        this.load.image('Game17_nine', window.baseUrl+'assets/gradeAssets/unity/1.7/9.png');
        this.load.image('Game17_bg', window.baseUrl+'assets/gradeAssets/unity/1.7/bg17.png');
        this.load.atlas('Game17_fish', window.baseUrl+'assets/gradeAssets/unity/1.7/fish.png', window.baseUrl+'json/gradeJson/unity/1.7/fish.json');
        this.load.atlas('Game17_fishbubble', window.baseUrl+'assets/gradeAssets/unity/1.7/fishbubble.png', window.baseUrl+'json/gradeJson/unity/1.7/fishbubble.json');
        this.load.image('Game17_bluebg',window.baseUrl+'assets/gradeAssets/unity/1.7/bluebg.png');
        this.load.image('Game17_maskbg',window.baseUrl+'assets/gradeAssets/unity/1.7/maskbg.png');
        this.load.image('Game17_Arrow_Btn', window.baseUrl+'assets/gradeAssets/unity/1.7/Arrow_Btn.png');
        this.load.image('Game17_timer', window.baseUrl+'assets/gradeAssets/unity/1.7/timer.png');
	},

	addunitygame2_1_1Assets:function()
	{
		_this.load.atlas('unity2_1_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
		_this.load.atlas('unity2_6_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_1_1_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_1_1_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('unity2_6_1_timerbg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_1_1_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
		
        //game assets.
        this.load.image('unity2_1_1_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_1_1_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_1_1_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_1_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('unity2_1_1_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        
        this.load.atlas('unity2_1_1_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_1_1_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_1_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        this.load.atlas('Cunity2_1_1_aterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        this.load.atlas('unity2_1_1_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        this.load.atlas('unity2_1_2_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        this.load.atlas('unity2_1_3_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
	

        _this.load.atlas('unity2_2_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_2_1_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_2_1_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_2_1_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
		
        //game assets.
        this.load.image('unity2_2_1_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_2_1_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_2_1_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_2_1_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('unity2_2_1_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('unity2_2_1_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.image('Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Caterpillar_Body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.image('Caterpillar_Body11', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Caterpillar_Body21', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Caterpillar_Body31', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_2_1_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        this.load.atlas('start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        this.load.atlas('start1', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_1_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_1_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_2_1_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_1_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_3_1starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_3_1navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_3_1timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_3_1CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_3_1BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_3_1practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_3_1topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_3_1Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_3_1Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_3_1Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_3_1start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_3_1Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_3_1Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_3_1Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_1wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        this.load.atlas('wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


        _this.load.atlas('Unity2_4_1starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_4_1navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_4_1timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_4_1CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_4_1BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_4_1practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_4_1topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_4_1Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_4_1Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_4_1Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_4_1start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_4_1Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_4_1Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_4_1Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_1wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_5_1starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_5_1navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_5_1timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_5_1CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_5_1BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_5_1practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_5_1topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_5_1Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_5_1Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_5_1Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_5_1start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_5_1Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_5_1Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_5_1Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_1wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


        _this.load.atlas('unity2_1_1a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_1_1a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_1_1a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_1_1a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_1_1a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_1_1a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_1_1a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_1a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('unity2_1_1a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('unity2_1_1a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_1_1a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_1_1a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_1_1a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_1a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_1_1a_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('unity2_2_1a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_2_1a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_2_1a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_2_1a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_2_1a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_2_1a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_2_1a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_2_1a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('unity2_2_1a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('unity2_2_1a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_2_1a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_2_1a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_1a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_2_1a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_1a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
	


        _this.load.atlas('Unity2_3_1astarAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_3_1anavBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_3_1atimebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_3_1aCommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_3_1aBG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_3_1apractice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_3_1atopic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_3_1aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_3_1aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_3_1aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_3_1astart', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_3_1aTick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_3_1aCaterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_3_1aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_1awrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_4_1a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_4_1a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_4_1a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_4_1a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_4_1a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_4_1a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_4_1a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_4_1a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_4_1a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_4_1a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_4_1a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_4_1a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_4_1a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_4_1a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_1a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_5_1astarAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_5_1anavBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_5_1atimebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_5_1aCommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_5_1aBG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_5_1apractice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_5_1atopic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_5_1aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_5_1aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_5_1aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_5_1astart', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_5_1aTick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_5_1aCaterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_5_1aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_1awrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');



        //multu

        _this.load.atlas('unity2_1_2_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
                _this.load.atlas('unity2_6_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_1_2_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_1_2_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('unity2_6_2_timerbg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_1_2_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_1_2_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_1_2_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_1_2_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_2_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('unity2_1_2_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        
        this.load.atlas('unity2_1_2_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_1_2_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_2_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Cunity2_1_2_aterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        

        _this.load.atlas('unity2_2_2_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_2_2_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_2_2_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_2_2_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_2_2_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_2_2_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_2_2_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_2_2_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('unity2_2_2_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('unity2_2_2_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('unity2_2_2_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_2_2_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_2_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_2_2_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_2_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_3_2starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_3_2navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_3_2timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_3_2CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_3_2BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_3_2practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_3_2topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_3_2Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_3_2Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_3_2Caterpillar_Body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_3_2start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_3_2Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_3_2Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_3_2Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_2wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


        _this.load.atlas('Unity2_4_2starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_4_2navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_4_2timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_4_2CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_4_2BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_4_2practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_4_2topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_4_2Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_4_2Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_4_2Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_4_2start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_4_2Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_4_2Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_4_2Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_2wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_5_2starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_5_2navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_5_2timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_5_2CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_5_2BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_5_2practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_5_2topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_5_2Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_5_2Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_5_2Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_5_2start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_5_2Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_5_2Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_5_2Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_2wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


        _this.load.atlas('unity2_1_2a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_1_2a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_1_2a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_1_2a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_1_2a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_1_2a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_1_2a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_2a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('unity2_1_2a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('unity2_1_2a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_1_2a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_1_2a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_1_2a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_2a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_1_2a_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('unity2_2_2a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_2_2a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_2_2a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_2_2a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_2_2a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_2_2a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_2_2a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_2_2a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('unity2_2_2a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('unity2_2_2a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_2_2a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_2_2a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_2a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_2_2a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_2a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        


        _this.load.atlas('Unity2_3_2astarAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_3_2anavBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_3_2atimebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_3_2aCommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_3_2aBG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_3_2apractice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_3_2atopic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_3_2aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_3_2aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_3_2aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_3_2astart', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_3_2aTick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_3_2aCaterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_3_2aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_2awrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_4_2a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_4_2a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_4_2a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_4_2a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_4_2a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_4_2a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_4_2a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_4_2a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_4_2a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_4_2a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_4_2a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_4_2a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_4_2a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_4_2a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_2a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_5_2astarAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_5_2anavBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_5_2atimebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_5_2aCommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_5_2aBG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_5_2apractice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_5_2atopic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_5_2aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_5_2aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_5_2aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_5_2astart', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_5_2aTick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_5_2aCaterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_5_2aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_2awrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');



        //multu2
        _this.load.atlas('unity2_1_3_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
                _this.load.atlas('unity2_6_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_1_3_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_1_3_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('unity2_6_3_timerbg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_1_3_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_1_3_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_1_3_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_1_3_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_3_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('unity2_1_3_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        
        this.load.atlas('unity2_1_3_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_1_3_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_3_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Cunity2_1_3_aterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        

        _this.load.atlas('unity2_2_3_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_2_3_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_2_3_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_2_3_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_2_3_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_2_3_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_2_3_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_2_3_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('unity2_2_3_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('unity2_2_3_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('unity2_2_3_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_2_3_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_3_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_2_3_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_3_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_3_3starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_3_3navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_3_3timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_3_3CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_3_3BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_3_3practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_3_3topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_3_3Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_3_3Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_3_3Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_3_3start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_3_3Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_3_3Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_3_3Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_3wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


        _this.load.atlas('Unity2_4_3starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_4_3navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_4_3timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_4_3CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_4_3BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_4_3practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_4_3topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_4_3Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_4_3Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_4_3Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_4_3start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_4_3Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_4_3Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_4_3Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_3wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_5_3starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_5_3navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_5_3timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_5_3CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_5_3BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_5_3practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_5_3topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_5_3Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1.png');
        this.load.image('Unity2_5_3Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2.png');
        this.load.image('Unity2_5_3Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_new.png');

        this.load.atlas('Unity2_5_3start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_5_3Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_5_3Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_5_3Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_3wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');


        _this.load.atlas('unity2_1_3a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_1_3a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_1_3a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_1_3a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_1_3a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_1_3a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_1_3a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_3a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('unity2_1_3a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('unity2_1_3a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_1_3a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_1_3a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_1_3a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_3a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_1_3a_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('unity2_2_3a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity2_2_3a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_2_3a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity2_2_3a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('unity2_2_3a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('unity2_2_3a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('unity2_2_3a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_2_3a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('unity2_2_3a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('unity2_2_3a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('unity2_2_3a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('unity2_2_3a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('unity2_2_3a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('unity2_2_3a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_3a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');
        


        _this.load.atlas('Unity2_3_3a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_3_3a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_3_3a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_3_3a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_3_3a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_3_3a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_3_3a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_3_3a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_3_3a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_3_3a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_3_3a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_3_3a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_3_3a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_3_3a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_3a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_4_3a_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_4_3a_navBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_4_3a_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_4_3a_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_4_3a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_4_3a_practice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_4_3a_topic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_4_3a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_4_3a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_4_3a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_4_3a_start', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_4_3a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_4_3a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_4_3a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_3a_wrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');

        _this.load.atlas('Unity2_5_3astarAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('Unity2_5_3anavBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Unity2_5_3atimebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Unity2_5_3aCommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
                
        //game assets.
        this.load.image('Unity2_5_3aBG_01', window.baseUrl+'assets/gradeAssets/2.1.1/BG_01.png');
        this.load.image('Unity2_5_3apractice',window.baseUrl+'assets/gradeAssets/2.1.1/practice.png');
        this.load.image('Unity2_5_3atopic',window.baseUrl+'assets/gradeAssets/2.1.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('Unity2_5_3aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body1Reverse.png');
        this.load.image('Unity2_5_3aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Body2Reverse.png');
        this.load.image('Unity2_5_3aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_body_newReverse.png');

        this.load.atlas('Unity2_5_3astart', window.baseUrl+'assets/gradeAssets/2.1.1/start.png', window.baseUrl+'json/gradeJson/2.1.1/start.json');
        
        
        this.load.atlas('Unity2_5_3aTick', window.baseUrl+'assets/gradeAssets/2.1.1/tick.png', window.baseUrl+'json/gradeJson/2.1.1/tick.json');
        this.load.atlas('Unity2_5_3aCaterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Neutral.json');
        this.load.atlas('Unity2_5_3aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_3awrong', window.baseUrl+'assets/gradeAssets/2.1.1/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1/Caterpillar_Sad.json');






	},

	addunitygame2_1_1aAssets:function()
	{
		
        //game assets.
        this.load.image('unity2_1_1a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.1a/BG_01.png');
        this.load.image('unity2_1_1a_practice',window.baseUrl+'assets/gradeAssets/2.1.1a/practice.png');
        this.load.image('unity2_1_1a_topic',window.baseUrl+'assets/gradeAssets/2.1.1a/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_1a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.1a/Caterpillar_Body1.png');
        this.load.image('unity2_1_1a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.1a/Caterpillar_Body2.png');
        
        this.load.atlas('unity2_1_1a_Tick', window.baseUrl+'assets/gradeAssets/2.1.1a/tick.png', window.baseUrl+'json/gradeJson/2.1.1a/tick.json');
        this.load.atlas('unity2_1_1a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.1a/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.1a/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_1a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.1a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.1a/Caterpillar_Happy.json');
        this.load.atlas('unity2_1_1a_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.1a/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.1a/Caterpillar_Sad.json');
	},

	addunitygame2_2_1aAssets:function()
	{
		
        //game assets.
       	this.load.image('unity2_2_1a_BG_01', window.baseUrl+'assets/gradeAssets/2.2.1a/BG_01.png');
        this.load.image('unity2_2_1a_practice',window.baseUrl+'assets/gradeAssets/2.2.1a/practice.png');
        this.load.image('unity2_2_1a_topic',window.baseUrl+'assets/gradeAssets/2.2.1a/topic.png');
       //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.2.1/Tick.png');
        this.load.image('unity2_2_1a_Caterpillar', window.baseUrl+'assets/gradeAssets/2.2.1a/Caterpillar.png');
        
        this.load.image('unity2_2_1a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.2.1a/Caterpillar_Body1.png');
        this.load.image('unity2_2_1a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.2.1a/Caterpillar_Body2.png');
        this.load.image('unity2_2_1a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.2.1a/Caterpillar_body_new.png');
        
        this.load.atlas('unity2_2_1a_Tick', window.baseUrl+'assets/gradeAssets/2.2.1a/tick.png', window.baseUrl+'json/gradeJson/2.2.1a/tick.json');
        this.load.atlas('unity2_2_1a_start', window.baseUrl+'assets/gradeAssets/2.2.1a/start.png', window.baseUrl+'json/gradeJson/2.2.1a/start.json');
        this.load.atlas('unity2_2_1a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.2.1a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.2.1a/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_1a_wrong', window.baseUrl+'assets/gradeAssets/2.2.1a/wrong.png', window.baseUrl+'json/gradeJson/2.2.1a/wrong.json');
	},

	addunitygame2_3_1aAssets:function()
	{
		
        //game assets.
       	 this.load.image('Unity2_3_1aBG_01', window.baseUrl+'assets/gradeAssets/2.3.1a/BG_01.png');
        this.load.image('Unity2_3_1apractice',window.baseUrl+'assets/gradeAssets/2.3.1a/practice.png');
        this.load.image('Unity2_3_1atopic',window.baseUrl+'assets/gradeAssets/2.3.1a/topic.png');
        
        this.load.image('Unity2_3_1aCaterpillar', window.baseUrl+'assets/gradeAssets/2.3.1a/Caterpillar.png');
        
        this.load.image('Unity2_3_1aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.3.1a/Caterpillar_Body1.png');
        this.load.image('Unity2_3_1aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.3.1a/Caterpillar_Body2.png');
        this.load.image('Unity2_3_1aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.3.1a/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_3_1aTick', window.baseUrl+'assets/gradeAssets/2.3.1a/tick.png',window.baseUrl+'json/gradeJson/2.3.1a/tick.json');
        this.load.atlas('Unity2_3_1astart', window.baseUrl+'assets/gradeAssets/2.3.1a/start.png', window.baseUrl+'json/gradeJson/2.3.1a/start.json');
        this.load.atlas('Unity2_3_1aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.3.1a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.3.1a/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_1awrong', window.baseUrl+'assets/gradeAssets/2.3.1a/wrong.png', window.baseUrl+'json/gradeJson/2.3.1a/wrong.json');
	},

	addunitygame2_4_1aAssets:function()
	{
		
        //game assets.
       	this.load.image('Unity2_4_1a_BG_01', window.baseUrl+'assets/gradeAssets/2.4.1a/BG_01.png');
        this.load.image('Unity2_4_1a_practice',window.baseUrl+'assets/gradeAssets/2.4.1a/practice.png');
        this.load.image('Unity2_4_1a_topic',window.baseUrl+'assets/gradeAssets/2.4.1a/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.4.1/Tick.png');
        this.load.image('Unity2_4_1a_Caterpillar', window.baseUrl+'assets/gradeAssets/2.4.1a/Caterpillar.png');
        
        this.load.image('Unity2_4_1a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.4.1a/Caterpillar_Body1.png');
        this.load.image('Unity2_4_1a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.4.1a/Caterpillar_Body2.png');
        this.load.image('Unity2_4_1a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.4.1a/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_4_1a_Tick', window.baseUrl+'assets/gradeAssets/2.4.1a/tick.png', window.baseUrl+'json/gradeJson/2.4.1a/tick.json');
        this.load.atlas('Unity2_4_1a_start', window.baseUrl+'assets/gradeAssets/2.4.1a/start.png', window.baseUrl+'json/gradeJson/2.4.1a/start.json');
        this.load.atlas('Unity2_4_1a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.4.1a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.4.1a/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_1a_wrong', window.baseUrl+'assets/gradeAssets/2.4.1a/wrong.png', window.baseUrl+'json/gradeJson/2.4.1a/wrong.json');
	},

	addunitygame2_5_1aAssets:function()
	{
		
        //game assets.
       this.load.image('Unity2_5_1aBG_01', window.baseUrl+'assets/gradeAssets/2.5.1a/BG_01.png');
        this.load.image('Unity2_5_1apractice',window.baseUrl+'assets/gradeAssets/2.5.1a/practice.png');
        this.load.image('Unity2_5_1atopic',window.baseUrl+'assets/gradeAssets/2.5.1a/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.5.1/Tick.png');
        this.load.image('Unity2_5_1aCaterpillar', window.baseUrl+'assets/gradeAssets/2.5.1a/Caterpillar.png');
        
        this.load.image('Unity2_5_1aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.5.1a/Caterpillar_Body1.png');
        this.load.image('Unity2_5_1aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.5.1a/Caterpillar_Body2.png');
        this.load.image('Unity2_5_1aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.5.1a/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_5_1aTick', window.baseUrl+'assets/gradeAssets/2.5.1a/tick.png', window.baseUrl+'json/gradeJson/2.5.1a/tick.json');
        this.load.atlas('Unity2_5_1astart', window.baseUrl+'assets/gradeAssets/2.5.1a/start.png', window.baseUrl+'json/gradeJson/2.5.1a/start.json');
        this.load.atlas('Unity2_5_1aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.5.1a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.5.1a/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_1awrong', window.baseUrl+'assets/gradeAssets/2.5.1a/wrong.png', window.baseUrl+'json/gradeJson/2.5.1a/wrong.json');
	},


	addunitygame2_1_2aAssets:function()
	{
		
        //game assets.
       this.load.image('unity2_1_2a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.2a/BG_01.png');
        this.load.image('unity2_1_2a_practice',window.baseUrl+'assets/gradeAssets/2.1.2a/practice.png');
        this.load.image('unity2_1_2a_topic',window.baseUrl+'assets/gradeAssets/2.1.2a/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_2a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.2a/Caterpillar_Body1.png');
        this.load.image('unity2_1_2a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.2a/Caterpillar_Body2.png');
        
        this.load.atlas('unity2_1_2a_Tick', window.baseUrl+'assets/gradeAssets/2.1.2a/tick.png', window.baseUrl+'json/gradeJson/2.1.2a/tick.json');
        this.load.atlas('unity2_1_2a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.2a/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.2a/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_2a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.2a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.2a/Caterpillar_Happy.json');
        this.load.atlas('unity2_1_2a_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.2a/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.2a/Caterpillar_Sad.json');
	},

	addunitygame2_2_2aAssets:function()
	{
		
        //game assets.
       this.load.image('unity2_2_2a_BG_01', window.baseUrl+'assets/gradeAssets/2.2.2a/BG_01.png');
        this.load.image('unity2_2_2a_practice',window.baseUrl+'assets/gradeAssets/2.2.2a/practice.png');
        this.load.image('unity2_2_2a_topic',window.baseUrl+'assets/gradeAssets/2.2.2a/topic.png');
       //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.2.1/Tick.png');
        this.load.image('unity2_2_2a_Caterpillar', window.baseUrl+'assets/gradeAssets/2.2.2a/Caterpillar.png');
        
        this.load.image('unity2_2_2a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.2.2a/Caterpillar_Body1.png');
        this.load.image('unity2_2_2a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.2.2a/Caterpillar_Body2.png');
        this.load.image('unity2_2_2a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.2.2a/Caterpillar_body_new.png');
        
        this.load.atlas('unity2_2_2a_Tick', window.baseUrl+'assets/gradeAssets/2.2.2a/tick.png', window.baseUrl+'json/gradeJson/2.2.2a/tick.json');
        this.load.atlas('unity2_2_2a_start', window.baseUrl+'assets/gradeAssets/2.2.2a/start.png', window.baseUrl+'json/gradeJson/2.2.2a/start.json');
        this.load.atlas('unity2_2_2a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.2.2a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.2.2a/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_2a_wrong', window.baseUrl+'assets/gradeAssets/2.2.2a/wrong.png', window.baseUrl+'json/gradeJson/2.2.2a/wrong.json');
	},

	addunitygame2_3_2aAssets:function()
	{
		
        //game assets.
       this.load.image('Unity2_3_2aBG_01', window.baseUrl+'assets/gradeAssets/2.3.2a/BG_01.png');
        this.load.image('Unity2_3_2apractice',window.baseUrl+'assets/gradeAssets/2.3.2a/practice.png');
        this.load.image('Unity2_3_2atopic',window.baseUrl+'assets/gradeAssets/2.3.2a/topic.png');
        
        this.load.image('Unity2_3_2aCaterpillar', window.baseUrl+'assets/gradeAssets/2.3.2a/Caterpillar.png');
        
        this.load.image('Unity2_3_2aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.3.2a/Caterpillar_Body1.png');
        this.load.image('Unity2_3_2aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.3.2a/Caterpillar_Body2.png');
        this.load.image('Unity2_3_2aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.3.2a/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_3_2aTick', window.baseUrl+'assets/gradeAssets/2.3.2a/tick.png',window.baseUrl+'json/gradeJson/2.3.2a/tick.json');
        this.load.atlas('Unity2_3_2astart', window.baseUrl+'assets/gradeAssets/2.3.2a/start.png', window.baseUrl+'json/gradeJson/2.3.2a/start.json');
        this.load.atlas('Unity2_3_2aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.3.2a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.3.2a/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_2awrong', window.baseUrl+'assets/gradeAssets/2.3.2a/wrong.png', window.baseUrl+'json/gradeJson/2.3.2a/wrong.json');
	},

	addunitygame2_4_2aAssets:function()
	{
		
        //game assets.
       this.load.image('Unity2_4_2a_BG_01', window.baseUrl+'assets/gradeAssets/2.4.2a/BG_01.png');
        this.load.image('Unity2_4_2a_practice',window.baseUrl+'assets/gradeAssets/2.4.2a/practice.png');
        this.load.image('Unity2_4_2a_topic',window.baseUrl+'assets/gradeAssets/2.4.2a/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.4.1/Tick.png');
        this.load.image('Unity2_4_2a_Caterpillar', window.baseUrl+'assets/gradeAssets/2.4.2a/Caterpillar.png');
        
        this.load.image('Unity2_4_2a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.4.2a/Caterpillar_Body1.png');
        this.load.image('Unity2_4_2a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.4.2a/Caterpillar_Body2.png');
        this.load.image('Unity2_4_2a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.4.2a/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_4_2a_Tick', window.baseUrl+'assets/gradeAssets/2.4.2a/tick.png', window.baseUrl+'json/gradeJson/2.4.2a/tick.json');
        this.load.atlas('Unity2_4_2a_start', window.baseUrl+'assets/gradeAssets/2.4.2a/start.png', window.baseUrl+'json/gradeJson/2.4.2a/start.json');
        this.load.atlas('Unity2_4_2a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.4.2a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.4.2a/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_2a_wrong', window.baseUrl+'assets/gradeAssets/2.4.2a/wrong.png', window.baseUrl+'json/gradeJson/2.4.2a/wrong.json');
	},

	addunitygame2_5_2aAssets:function()
	{
		
        //game assets.
       this.load.image('Unity2_5_2aBG_01', window.baseUrl+'assets/gradeAssets/2.5.2a/BG_01.png');
        this.load.image('Unity2_5_2apractice',window.baseUrl+'assets/gradeAssets/2.5.2a/practice.png');
        this.load.image('Unity2_5_2atopic',window.baseUrl+'assets/gradeAssets/2.5.2a/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.5.2/Tick.png');
        this.load.image('Unity2_5_2aCaterpillar', window.baseUrl+'assets/gradeAssets/2.5.2a/Caterpillar.png');
        
        this.load.image('Unity2_5_2aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.5.2a/Caterpillar_Body1.png');
        this.load.image('Unity2_5_2aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.5.2a/Caterpillar_Body2.png');
        this.load.image('Unity2_5_2aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.5.2a/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_5_2aTick', window.baseUrl+'assets/gradeAssets/2.5.2a/tick.png', window.baseUrl+'json/gradeJson/2.5.2a/tick.json');
        this.load.atlas('Unity2_5_2astart', window.baseUrl+'assets/gradeAssets/2.5.2a/start.png', window.baseUrl+'json/gradeJson/2.5.2a/start.json');
        this.load.atlas('Unity2_5_2aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.5.2a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.5.2a/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_2awrong', window.baseUrl+'assets/gradeAssets/2.5.2a/wrong.png', window.baseUrl+'json/gradeJson/2.5.2a/wrong.json');
	},

	addunitygame2_1_3aAssets:function()
	{
		this.load.image('unity2_1_3a_BG_01', window.baseUrl+'assets/gradeAssets/2.1.3a/BG_01.png');
        this.load.image('unity2_1_3a_practice',window.baseUrl+'assets/gradeAssets/2.1.3a/practice.png');
        this.load.image('unity2_1_3a_topic',window.baseUrl+'assets/gradeAssets/2.1.3a/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.3a/Tick.png');
        
        this.load.image('unity2_1_3a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.3a/Caterpillar_Body1.png');
        this.load.image('unity2_1_3a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.3a/Caterpillar_Body2.png');
        
        this.load.atlas('unity2_1_3a_Tick', window.baseUrl+'assets/gradeAssets/2.1.3a/tick.png', window.baseUrl+'json/gradeJson/2.1.3a/tick.json');
        this.load.atlas('unity2_1_3a_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.3a/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.3a/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_3a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.3a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.3a/Caterpillar_Happy.json');
        this.load.atlas('unity2_1_3a_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.3a/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.3a/Caterpillar_Sad.json');
       
	},

	addunitygame2_2_3aAssets:function()
	{
		this.load.image('unity2_2_3a_BG_01', window.baseUrl+'assets/gradeAssets/2.2.3a/BG_01.png');
        this.load.image('unity2_2_3a_practice',window.baseUrl+'assets/gradeAssets/2.2.3a/practice.png');
        this.load.image('unity2_2_3a_topic',window.baseUrl+'assets/gradeAssets/2.2.3a/topic.png');
       //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.2.1/Tick.png');
        this.load.image('unity2_2_3a_Caterpillar', window.baseUrl+'assets/gradeAssets/2.2.3a/Caterpillar.png');
        
        this.load.image('unity2_2_3a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.2.3a/Caterpillar_Body1.png');
        this.load.image('unity2_2_3a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.2.3a/Caterpillar_Body2.png');
        this.load.image('unity2_2_3a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.2.3a/Caterpillar_body_new.png');
        
        this.load.atlas('unity2_2_3a_Tick', window.baseUrl+'assets/gradeAssets/2.2.3a/tick.png', window.baseUrl+'json/gradeJson/2.2.3a/tick.json');
        this.load.atlas('unity2_2_3a_start', window.baseUrl+'assets/gradeAssets/2.2.3a/start.png', window.baseUrl+'json/gradeJson/2.2.3a/start.json');
        this.load.atlas('unity2_2_3a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.2.3a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.2.3a/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_3a_wrong', window.baseUrl+'assets/gradeAssets/2.2.3a/wrong.png', window.baseUrl+'json/gradeJson/2.2.3a/wrong.json');
       
	},

	addunitygame2_3_3aAssets:function()
	{
		this.load.image('Unity2_3_3a_BG_01', window.baseUrl+'assets/gradeAssets/2.3.3a/BG_01.png');
        
        
        this.load.image('Unity2_3_3a_Caterpillar', window.baseUrl+'assets/gradeAssets/2.3.3a/Caterpillar.png');
        
        this.load.image('Unity2_3_3a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.3.3a/Caterpillar_Body1.png');
        this.load.image('Unity2_3_3a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.3.3a/Caterpillar_Body2.png');
        this.load.image('Unity2_3_3a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.3.3a/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_3_3a_Tick', window.baseUrl+'assets/gradeAssets/2.3.3a/tick.png',window.baseUrl+'json/gradeJson/2.3.3a/tick.json');
        this.load.atlas('Unity2_3_3a_start', window.baseUrl+'assets/gradeAssets/2.3.3a/start.png', window.baseUrl+'json/gradeJson/2.3.3a/start.json');
        this.load.atlas('Unity2_3_3a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.3.3a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.3.3a/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_3a_wrong', window.baseUrl+'assets/gradeAssets/2.3.3a/wrong.png', window.baseUrl+'json/gradeJson/2.3.3a/wrong.json');
       
	},

	addunitygame2_4_3aAssets:function()
	{
		this.load.image('Unity2_4_3a_BG_01', window.baseUrl+'assets/gradeAssets/2.4.3a/BG_01.png');
        this.load.image('Unity2_4_3a_practice',window.baseUrl+'assets/gradeAssets/2.4.3a/practice.png');
        this.load.image('Unity2_4_3a_topic',window.baseUrl+'assets/gradeAssets/2.4.3a/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.4.1/Tick.png');
        this.load.image('Unity2_4_3a_Caterpillar', window.baseUrl+'assets/gradeAssets/2.4.3a/Caterpillar.png');
        
        this.load.image('Unity2_4_3a_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.4.3a/Caterpillar_Body1.png');
        this.load.image('Unity2_4_3a_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.4.3a/Caterpillar_Body2.png');
        this.load.image('Unity2_4_3a_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.4.3a/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_4_3a_Tick', window.baseUrl+'assets/gradeAssets/2.4.3a/tick.png', window.baseUrl+'json/gradeJson/2.4.3a/tick.json');
        this.load.atlas('Unity2_4_3a_start', window.baseUrl+'assets/gradeAssets/2.4.3a/start.png', window.baseUrl+'json/gradeJson/2.4.3a/start.json');
        this.load.atlas('Unity2_4_3a_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.4.3a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.4.3a/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_3a_wrong', window.baseUrl+'assets/gradeAssets/2.4.3a/wrong.png', window.baseUrl+'json/gradeJson/2.4.3a/wrong.json');
       
	},

	addunitygame2_5_3aAssets:function()
	{
		this.load.image('Unity2_5_3aBG_01', window.baseUrl+'assets/gradeAssets/2.5.3a/BG_01.png');
        this.load.image('Unity2_5_3apractice',window.baseUrl+'assets/gradeAssets/2.5.3a/practice.png');
        this.load.image('Unity2_5_3atopic',window.baseUrl+'assets/gradeAssets/2.5.3a/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.5.3/Tick.png');
        this.load.image('Unity2_5_3aCaterpillar', window.baseUrl+'assets/gradeAssets/2.5.3a/Caterpillar.png');
        
        this.load.image('Unity2_5_3aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.5.3a/Caterpillar_Body1.png');
        this.load.image('Unity2_5_3aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.5.3a/Caterpillar_Body2.png');
        this.load.image('Unity2_5_3aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.5.3a/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_5_3aTick', window.baseUrl+'assets/gradeAssets/2.5.3a/tick.png', window.baseUrl+'json/gradeJson/2.5.3a/tick.json');
        this.load.atlas('Unity2_5_3astart', window.baseUrl+'assets/gradeAssets/2.5.3a/start.png', window.baseUrl+'json/gradeJson/2.5.3a/start.json');
        this.load.atlas('Unity2_5_3aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.5.3a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.5.3a/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_3awrong', window.baseUrl+'assets/gradeAssets/2.5.3a/wrong.png', window.baseUrl+'json/gradeJson/2.5.3a/wrong.json');
       
	},

	addunitygame2_7_3Assets:function()
	{
		this.load.image('Unity2_7_3BG_01', window.baseUrl+'assets/gradeAssets/2.7.3/BG_01.png');
        this.load.image('Unity2_7_3practice',window.baseUrl+'assets/gradeAssets/2.7.3/practice.png');
        this.load.image('Unity2_7_3topic',window.baseUrl+'assets/gradeAssets/2.7.3/topic.png');
        
        this.load.image('Unity2_7_3Caterpillar', window.baseUrl+'assets/gradeAssets/2.7.3/Caterpillar.png');
        
        this.load.image('Unity2_7_3Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.7.3/Caterpillar_Body1.png');
        this.load.image('Unity2_7_3Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.7.3/Caterpillar_Body2.png');
        this.load.image('Unity2_7_3Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.7.3/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_7_3Tick', window.baseUrl+'assets/gradeAssets/2.7.3/tick.png',window.baseUrl+'json/gradeJson/2.7.3/tick.json');
        this.load.atlas('Unity2_7_3start', window.baseUrl+'assets/gradeAssets/2.7.3/start.png', window.baseUrl+'json/gradeJson/2.7.3/start.json');
        this.load.atlas('Unity2_7_3Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.7.3/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.7.3/Caterpillar_Happy.json');
        this.load.atlas('Unity2_7_3wrong', window.baseUrl+'assets/gradeAssets/2.7.3/wrong.png', window.baseUrl+'json/gradeJson/2.7.3/wrong.json');
       
	},

	addunitygame2_7_3aAssets:function()
	{
		this.load.image('Unity2_7_3aBG_01', window.baseUrl+'assets/gradeAssets/2.7.3a/BG_01.png');
        this.load.image('Unity2_7_3apractice',window.baseUrl+'assets/gradeAssets/2.7.3a/practice.png');
        this.load.image('Unity2_7_3atopic',window.baseUrl+'assets/gradeAssets/2.7.3a/topic.png');
        
        this.load.image('Unity2_7_3aCaterpillar', window.baseUrl+'assets/gradeAssets/2.7.3a/Caterpillar.png');
        
        this.load.image('Unity2_7_3aCaterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.7.3a/Caterpillar_Body1.png');
        this.load.image('Unity2_7_3aCaterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.7.3a/Caterpillar_Body2.png');
        this.load.image('Unity2_7_3aCaterpillar_body3', window.baseUrl+'assets/gradeAssets/2.7.3a/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_7_3aTick', window.baseUrl+'assets/gradeAssets/2.7.3a/tick.png',window.baseUrl+'json/gradeJson/2.7.3a/tick.json');
        this.load.atlas('Unity2_7_3astart', window.baseUrl+'assets/gradeAssets/2.7.3a/start.png', window.baseUrl+'json/gradeJson/2.7.3a/start.json');
        this.load.atlas('Unity2_7_3aCaterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.7.3a/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.7.3a/Caterpillar_Happy.json');
        this.load.atlas('Unity2_7_3awrong', window.baseUrl+'assets/gradeAssets/2.7.3a/wrong.png', window.baseUrl+'json/gradeJson/2.7.3a/wrong.json');
       
	},

	addunitygame2_1_2Assets:function()
	{
		//common for all games.
        this.load.atlas('unity2_1_2_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.1.2/backbtn.json');
        this.load.atlas('unity2_1_2_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.1.2/speaker.json');
        this.load.atlas('unity2_1_2_starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.1.2/starAnim.json');
        this.load.atlas('unity2_1_2_replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.1.2/reply.json');
        this.load.atlas('unity2_1_2_btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.1.2/btn.json');
        
        this.load.image('unity2_1_2_tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('unity2_1_2_background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_1_2_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('unity2_1_2_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('unity2_1_2_topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('unity2_1_2_BG_01', window.baseUrl+'assets/gradeAssets/2.1.2/BG_01.png');
        this.load.image('unity2_1_2_practice',window.baseUrl+'assets/gradeAssets/2.1.2/practice.png');
        this.load.image('unity2_1_2_topic',window.baseUrl+'assets/gradeAssets/2.1.2/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_2_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.2/Caterpillar_Body1.png');
        this.load.image('unity2_1_2_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.2/Caterpillar_Body2.png');
        
        this.load.atlas('unity2_1_2_Tick', window.baseUrl+'assets/gradeAssets/2.1.2/tick.png', window.baseUrl+'json/gradeJson/2.1.2/tick.json');
        this.load.atlas('unity2_1_2_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.2/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.2/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_2_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.2/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.2/Caterpillar_Happy.json');
        this.load.atlas('unity2_1_2_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.2/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.2/Caterpillar_Sad.json');
	},

	addunitygame2_1_3Assets:function()
	{
		//common for all games.
        this.load.atlas('unity2_1_3_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.1.3/backbtn.json');
        this.load.atlas('unity2_1_3_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.1.3/speaker.json');
        this.load.atlas('unity2_1_3_starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.1.3/starAnim.json');
        this.load.atlas('unity2_1_3_replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.1.3/reply.json');
        this.load.atlas('unity2_1_3_btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.1.3/btn.json');
        
        this.load.image('unity2_1_3_tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('unity2_1_3_background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_1_3_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('unity2_1_3_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('unity2_1_3_topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('unity2_1_3_BG_01', window.baseUrl+'assets/gradeAssets/2.1.3/BG_01.png');
        this.load.image('unity2_1_3_practice',window.baseUrl+'assets/gradeAssets/2.1.3/practice.png');
        this.load.image('unity2_1_3_topic',window.baseUrl+'assets/gradeAssets/2.1.3/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_3_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.1.3/Caterpillar_Body1.png');
        this.load.image('unity2_1_3_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.1.3/Caterpillar_Body2.png');
        
        this.load.atlas('unity2_1_3_Tick', window.baseUrl+'assets/gradeAssets/2.1.3/tick.png', window.baseUrl+'json/gradeJson/2.1.3/tick.json');
        this.load.atlas('unity2_1_3_Caterpillar_Neutral', window.baseUrl+'assets/gradeAssets/2.1.3/Caterpillar_Neutral.png', window.baseUrl+'json/gradeJson/2.1.3/Caterpillar_Neutral.json');
        this.load.atlas('unity2_1_3_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.1.3/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.1.3/Caterpillar_Happy.json');
        this.load.atlas('unity2_1_3_Caterpillar_Sad', window.baseUrl+'assets/gradeAssets/2.1.3/Caterpillar_Sad.png', window.baseUrl+'json/gradeJson/2.1.3/Caterpillar_Sad.json');
	},

	addunitygame2_2_1Assets:function()
	{
		//common for all games.
        this.load.atlas('unity2_2_1_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.2.1/backbtn.json');
        this.load.atlas('unity2_2_1_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.2.1/speaker.json');
        this.load.atlas('unity2_2_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.2.1/starAnim.json');
        this.load.atlas('unity2_2_1_replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.2.1/reply.json');
        this.load.atlas('unity2_2_1_btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.2.1/btn.json');
        
        this.load.image('unity2_2_1_background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_2_1_tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('unity2_2_1_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('unity2_2_1_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('unity2_2_1_topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('unity2_2_1_BG_01', window.baseUrl+'assets/gradeAssets/2.2.1/BG_01.png');
        this.load.image('unity2_2_1_practice',window.baseUrl+'assets/gradeAssets/2.2.1/practice.png');
        this.load.image('unity2_2_1_topic',window.baseUrl+'assets/gradeAssets/2.2.1/topic.png');
       //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.2.1/Tick.png');
        this.load.image('unity2_2_1_Caterpillar', window.baseUrl+'assets/gradeAssets/2.2.1/Caterpillar.png');
        
        this.load.image('unity2_2_1_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.2.1/Caterpillar_Body1.png');
        this.load.image('unity2_2_1_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.2.1/Caterpillar_Body2.png');
        this.load.image('unity2_2_1_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.2.1/Caterpillar_body_new.png');
        
        this.load.atlas('unity2_2_1_Tick', window.baseUrl+'assets/gradeAssets/2.2.1/tick.png', window.baseUrl+'json/gradeJson/2.2.1/tick.json');
        this.load.atlas('unity2_2_1_start', window.baseUrl+'assets/gradeAssets/2.2.1/start.png', window.baseUrl+'json/gradeJson/2.2.1/start.json');
        this.load.atlas('unity2_2_1_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.2.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.2.1/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_1_wrong', window.baseUrl+'assets/gradeAssets/2.2.1/wrong.png', window.baseUrl+'json/gradeJson/2.2.1/wrong.json');
	},

	addunitygame2_2_2Assets:function()
	{
		this.load.atlas('unity2_2_2_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.2.2/backbtn.json');
        this.load.atlas('unity2_2_2_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.2.2/speaker.json');
        this.load.atlas('unity2_2_2_starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.2.2/starAnim.json');
        this.load.atlas('unity2_2_2_replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.2.2/reply.json');
        this.load.atlas('unity2_2_2_btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.2.2/btn.json');
        
        this.load.image('unity2_2_2_background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_2_2_tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('unity2_2_2_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('unity2_2_2_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('unity2_2_2_topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('unity2_2_2_BG_01', window.baseUrl+'assets/gradeAssets/2.2.2/BG_01.png');
        this.load.image('unity2_2_2_practice',window.baseUrl+'assets/gradeAssets/2.2.2/practice.png');
        this.load.image('unity2_2_2_topic',window.baseUrl+'assets/gradeAssets/2.2.2/topic.png');
       //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.2.1/Tick.png');
        this.load.image('unity2_2_2_Caterpillar', window.baseUrl+'assets/gradeAssets/2.2.2/Caterpillar.png');
        
        this.load.image('unity2_2_2_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.2.2/Caterpillar_Body1.png');
        this.load.image('unity2_2_2_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.2.2/Caterpillar_Body2.png');
        this.load.image('unity2_2_2_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.2.2/Caterpillar_body_new.png');
        
        this.load.atlas('unity2_2_2_Tick', window.baseUrl+'assets/gradeAssets/2.2.2/tick.png', window.baseUrl+'json/gradeJson/2.2.2/tick.json');
        this.load.atlas('unity2_2_2_start', window.baseUrl+'assets/gradeAssets/2.2.2/start.png', window.baseUrl+'json/gradeJson/2.2.2/start.json');
        this.load.atlas('unity2_2_2_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.2.2/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.2.2/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_2_wrong', window.baseUrl+'assets/gradeAssets/2.2.2/wrong.png', window.baseUrl+'json/gradeJson/2.2.2/wrong.json');
	},

	addunitygame2_2_3Assets:function()
	{
		//common for all games.
        this.load.atlas('unity2_2_3_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.2.3/backbtn.json');
        this.load.atlas('unity2_2_3_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.2.3/speaker.json');
        this.load.atlas('unity2_2_3_starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.2.3/starAnim.json');
        this.load.atlas('unity2_2_3_replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.2.3/reply.json');
        this.load.atlas('unity2_2_3_btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.2.3/btn.json');
        
        this.load.image('unity2_2_3_background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_2_3_tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('unity2_2_3_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('unity2_2_3_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('unity2_2_3_topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('unity2_2_3_BG_01', window.baseUrl+'assets/gradeAssets/2.2.3/BG_01.png');
        this.load.image('unity2_2_3_practice',window.baseUrl+'assets/gradeAssets/2.2.3/practice.png');
        this.load.image('unity2_2_3_topic',window.baseUrl+'assets/gradeAssets/2.2.3/topic.png');
       //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.2.1/Tick.png');
        this.load.image('unity2_2_3_Caterpillar', window.baseUrl+'assets/gradeAssets/2.2.3/Caterpillar.png');
        
        this.load.image('unity2_2_3_Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.2.3/Caterpillar_Body1.png');
        this.load.image('unity2_2_3_Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.2.3/Caterpillar_Body2.png');
        this.load.image('unity2_2_3_Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.2.3/Caterpillar_body_new.png');
        
        this.load.atlas('unity2_2_3_Tick', window.baseUrl+'assets/gradeAssets/2.2.3/tick.png', window.baseUrl+'json/gradeJson/2.2.3/tick.json');
        this.load.atlas('unity2_2_3_start', window.baseUrl+'assets/gradeAssets/2.2.3/start.png', window.baseUrl+'json/gradeJson/2.2.3/start.json');
        this.load.atlas('unity2_2_3_Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.2.3/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.2.3/Caterpillar_Happy.json');
        this.load.atlas('unity2_2_3_wrong', window.baseUrl+'assets/gradeAssets/2.2.3/wrong.png', window.baseUrl+'json/gradeJson/2.2.3/wrong.json');
	},

	addunitygame2_3_1Assets:function()
	{
		this.load.atlas('Unity2_3_1backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.3.1/backbtn.json');
        this.load.atlas('Unity2_3_1CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.3.1/speaker.json');
        this.load.atlas('Unity2_3_1starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.3.1/starAnim.json');
        this.load.atlas('Unity2_3_1replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.3.1/reply.json');
        this.load.atlas('Unity2_3_1btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.3.1/btn.json');
        
        this.load.image('Unity2_3_1background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('Unity2_3_1tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('Unity2_3_1navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Unity2_3_1timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('Unity2_3_1topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('Unity2_3_1BG_01', window.baseUrl+'assets/gradeAssets/2.3.1/BG_01.png');
        this.load.image('Unity2_3_1practice',window.baseUrl+'assets/gradeAssets/2.3.1/practice.png');
        this.load.image('Unity2_3_1topic',window.baseUrl+'assets/gradeAssets/2.3.1/topic.png');
        
        this.load.image('Unity2_3_1Caterpillar', window.baseUrl+'assets/gradeAssets/2.3.1/Caterpillar.png');
        
        this.load.image('Unity2_3_1Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.3.1/Caterpillar_Body1.png');
        this.load.image('Unity2_3_1Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.3.1/Caterpillar_Body2.png');
        this.load.image('Unity2_3_1Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.3.1/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_3_1Tick', window.baseUrl+'assets/gradeAssets/2.3.1/tick.png',window.baseUrl+'json/gradeJson/2.3.1/tick.json');
        this.load.atlas('Unity2_3_1start', window.baseUrl+'assets/gradeAssets/2.3.1/start.png', window.baseUrl+'json/gradeJson/2.3.1/start.json');
        this.load.atlas('Unity2_3_1Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.3.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.3.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_1wrong', window.baseUrl+'assets/gradeAssets/2.3.1/wrong.png', window.baseUrl+'json/gradeJson/2.3.1/wrong.json');
	},

	addunitygame2_3_2Assets:function()
	{
		//common for all games.
        this.load.atlas('Unity2_3_2backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.3.2/backbtn.json');
        this.load.atlas('Unity2_3_2CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.3.2/speaker.json');
        this.load.atlas('Unity2_3_2starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.3.2/starAnim.json');
        this.load.atlas('Unity2_3_2replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.3.2/reply.json');
        this.load.atlas('Unity2_3_2btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.3.2/btn.json');
        
        this.load.image('Unity2_3_2background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('Unity2_3_2tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('Unity2_3_2navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Unity2_3_2timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('Unity2_3_2topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('Unity2_3_2BG_01', window.baseUrl+'assets/gradeAssets/2.3.2/BG_01.png');
        this.load.image('Unity2_3_2practice',window.baseUrl+'assets/gradeAssets/2.3.2/practice.png');
        this.load.image('Unity2_3_2topic',window.baseUrl+'assets/gradeAssets/2.3.2/topic.png');
        
        this.load.image('Unity2_3_2Caterpillar', window.baseUrl+'assets/gradeAssets/2.3.2/Caterpillar.png');
        
        this.load.image('Unity2_3_2Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.3.2/Caterpillar_Body1.png');
        this.load.image('Unity2_3_2Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.3.2/Caterpillar_Body2.png');
        this.load.image('Unity2_3_2Caterpillar_Body3', window.baseUrl+'assets/gradeAssets/2.3.2/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_3_2Tick', window.baseUrl+'assets/gradeAssets/2.3.2/tick.png',window.baseUrl+'json/gradeJson/2.3.2/tick.json');
        this.load.atlas('Unity2_3_2start', window.baseUrl+'assets/gradeAssets/2.3.2/start.png', window.baseUrl+'json/gradeJson/2.3.2/start.json');
        this.load.atlas('Unity2_3_2Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.3.2/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.3.2/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_2wrong', window.baseUrl+'assets/gradeAssets/2.3.2/wrong.png', window.baseUrl+'json/gradeJson/2.3.2/wrong.json');
	},

	addunitygame2_3_3Assets:function()
	{
		//common for all games.
        this.load.atlas('Unity2_3_3backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.3.3/backbtn.json');
        this.load.atlas('Unity2_3_3CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.3.3/speaker.json');
        this.load.atlas('Unity2_3_3starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.3.3/starAnim.json');
        this.load.atlas('Unity2_3_3replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.3.3/reply.json');
        this.load.atlas('Unity2_3_3btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.3.3/btn.json');
        
        this.load.image('Unity2_3_3background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('Unity2_3_3tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('Unity2_3_3navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Unity2_3_3timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('Unity2_3_3topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('Unity2_3_3BG_01', window.baseUrl+'assets/gradeAssets/2.3.3/BG_01.png');
        this.load.image('Unity2_3_3practice',window.baseUrl+'assets/gradeAssets/2.3.3/practice.png');
        this.load.image('Unity2_3_3topic',window.baseUrl+'assets/gradeAssets/2.3.3/topic.png');
        
        this.load.image('Unity2_3_3Caterpillar', window.baseUrl+'assets/gradeAssets/2.3.3/Caterpillar.png');
        
        this.load.image('Unity2_3_3Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.3.3/Caterpillar_Body1.png');
        this.load.image('Unity2_3_3Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.3.3/Caterpillar_Body2.png');
        this.load.image('Unity2_3_3Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.3.3/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_3_3Tick', window.baseUrl+'assets/gradeAssets/2.3.3/tick.png',window.baseUrl+'json/gradeJson/2.3.3/tick.json');
        this.load.atlas('Unity2_3_3start', window.baseUrl+'assets/gradeAssets/2.3.3/start.png', window.baseUrl+'json/gradeJson/2.3.3/start.json');
        this.load.atlas('Unity2_3_3Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.3.3/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.3.3/Caterpillar_Happy.json');
        this.load.atlas('Unity2_3_3wrong', window.baseUrl+'assets/gradeAssets/2.3.3/wrong.png', window.baseUrl+'json/gradeJson/2.3.3/wrong.json');
	},

	addunitygame2_4_1Assets:function()
	{
		//common for all games.
        this.load.atlas('Unity2_4_1backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.4.1/backbtn.json');
        this.load.atlas('Unity2_4_1CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.4.1/speaker.json');
        this.load.atlas('Unity2_4_1starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.4.1/starAnim.json');
        this.load.atlas('Unity2_4_1replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.4.1/reply.json');
        this.load.atlas('Unity2_4_1btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.4.1/btn.json');
        
        this.load.image('Unity2_4_1background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('Unity2_4_1tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('Unity2_4_1navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Unity2_4_1timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('Unity2_4_1topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('Unity2_4_1BG_01', window.baseUrl+'assets/gradeAssets/2.4.1/BG_01.png');
        this.load.image('Unity2_4_1practice',window.baseUrl+'assets/gradeAssets/2.4.1/practice.png');
        this.load.image('Unity2_4_1topic',window.baseUrl+'assets/gradeAssets/2.4.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.4.1/Tick.png');
        this.load.image('Unity2_4_1Caterpillar', window.baseUrl+'assets/gradeAssets/2.4.1/Caterpillar.png');
        
        this.load.image('Unity2_4_1Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.4.1/Caterpillar_Body1.png');
        this.load.image('Unity2_4_1Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.4.1/Caterpillar_Body2.png');
        this.load.image('Unity2_4_1Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.4.1/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_4_1Tick', window.baseUrl+'assets/gradeAssets/2.4.1/tick.png', window.baseUrl+'json/gradeJson/2.4.1/tick.json');
        this.load.atlas('Unity2_4_1start', window.baseUrl+'assets/gradeAssets/2.4.1/start.png', window.baseUrl+'json/gradeJson/2.4.1/start.json');
        this.load.atlas('Unity2_4_1Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.4.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.4.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_1wrong', window.baseUrl+'assets/gradeAssets/2.4.1/wrong.png', window.baseUrl+'json/gradeJson/2.4.1/wrong.json');
	},

	addunitygame2_4_2Assets:function()
	{
		//common for all games.
        this.load.atlas('Unity2_4_2backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.4.2/backbtn.json');
        this.load.atlas('Unity2_4_2CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.4.2/speaker.json');
        this.load.atlas('Unity2_4_2starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.4.2/starAnim.json');
        this.load.atlas('Unity2_4_2replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.4.2/reply.json');
        this.load.atlas('Unity2_4_2btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.4.2/btn.json');
        
        this.load.image('Unity2_4_2background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('Unity2_4_2tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('Unity2_4_2navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Unity2_4_2timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('Unity2_4_2topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('Unity2_4_2BG_01', window.baseUrl+'assets/gradeAssets/2.4.2/BG_01.png');
        this.load.image('Unity2_4_2practice',window.baseUrl+'assets/gradeAssets/2.4.2/practice.png');
        this.load.image('Unity2_4_2topic',window.baseUrl+'assets/gradeAssets/2.4.2/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.4.2/Tick.png');
        this.load.image('Caterpillar', window.baseUrl+'assets/gradeAssets/2.4.2/Caterpillar.png');
        
        this.load.image('Unity2_4_2Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.4.2/Caterpillar_Body1.png');
        this.load.image('Unity2_4_2Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.4.2/Caterpillar_Body2.png');
        this.load.image('Unity2_4_2Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.4.2/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_4_2Tick', window.baseUrl+'assets/gradeAssets/2.4.2/tick.png', window.baseUrl+'json/gradeJson/2.4.2/tick.json');
        this.load.atlas('Unity2_4_2start', window.baseUrl+'assets/gradeAssets/2.4.2/start.png', window.baseUrl+'json/gradeJson/2.4.2/start.json');
        this.load.atlas('Unity2_4_2Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.4.2/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.4.2/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_2wrong', window.baseUrl+'assets/gradeAssets/2.4.2/wrong.png', window.baseUrl+'json/gradeJson/2.4.2/wrong.json');
	},

	addunitygame2_4_3Assets:function()
	{
		//common for all games.
        this.load.atlas('Unity2_4_3backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.4.3/backbtn.json');
        this.load.atlas('Unity2_4_3CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.4.3/speaker.json');
        this.load.atlas('Unity2_4_3starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.4.3/starAnim.json');
        this.load.atlas('Unity2_4_3replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.4.3/reply.json');
        this.load.atlas('Unity2_4_3btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.4.3/btn.json');
        
        this.load.image('Unity2_4_3background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('Unity2_4_3tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('Unity2_4_3navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Unity2_4_3timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('Unity2_4_3topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('Unity2_4_3BG_01', window.baseUrl+'assets/gradeAssets/2.4.3/BG_01.png');
        this.load.image('Unity2_4_3practice',window.baseUrl+'assets/gradeAssets/2.4.3/practice.png');
        this.load.image('Unity2_4_3topic',window.baseUrl+'assets/gradeAssets/2.4.3/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.4.3/Tick.png');
        this.load.image('Unity2_4_3Caterpillar', window.baseUrl+'assets/gradeAssets/2.4.3/Caterpillar.png');
        
        this.load.image('Unity2_4_3Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.4.3/Caterpillar_Body1.png');
        this.load.image('Unity2_4_3Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.4.3/Caterpillar_Body2.png');
        this.load.image('Unity2_4_3Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.4.3/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_4_3Tick', window.baseUrl+'assets/gradeAssets/2.4.3/tick.png', window.baseUrl+'json/gradeJson/2.4.3/tick.json');
        this.load.atlas('Unity2_4_3start', window.baseUrl+'assets/gradeAssets/2.4.3/start.png', window.baseUrl+'json/gradeJson/2.4.3/start.json');
        this.load.atlas('Unity2_4_3Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.4.3/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.4.3/Caterpillar_Happy.json');
        this.load.atlas('Unity2_4_3wrong', window.baseUrl+'assets/gradeAssets/2.4.3/wrong.png', window.baseUrl+'json/gradeJson/2.4.3/wrong.json');
	},

	addunitygame2_5_1Assets:function()
	{
		//common for all games.
        this.load.atlas('Unity2_5_1backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.5.1/backbtn.json');
        this.load.atlas('Unity2_5_1CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.5.1/speaker.json');
        this.load.atlas('Unity2_5_1starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.5.1/starAnim.json');
        this.load.atlas('Unity2_5_1replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.5.1/reply.json');
        this.load.atlas('Unity2_5_1btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.5.1/btn.json');
        
        this.load.image('Unity2_5_1background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('Unity2_5_1tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('Unity2_5_1navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Unity2_5_1timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('Unity2_5_1topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('Unity2_5_1BG_01', window.baseUrl+'assets/gradeAssets/2.5.1/BG_01.png');
        this.load.image('Unity2_5_1practice',window.baseUrl+'assets/gradeAssets/2.5.1/practice.png');
        this.load.image('Unity2_5_1topic',window.baseUrl+'assets/gradeAssets/2.5.1/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.5.1/Tick.png');
        this.load.image('Unity2_5_1Caterpillar', window.baseUrl+'assets/gradeAssets/2.5.1/Caterpillar.png');
        
        this.load.image('Unity2_5_1Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.5.1/Caterpillar_Body1.png');
        this.load.image('Unity2_5_1Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.5.1/Caterpillar_Body2.png');
        this.load.image('Unity2_5_1Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.5.1/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_5_1Tick', window.baseUrl+'assets/gradeAssets/2.5.1/tick.png', window.baseUrl+'json/gradeJson/2.5.1/tick.json');
        this.load.atlas('Unity2_5_1start', window.baseUrl+'assets/gradeAssets/2.5.1/start.png', window.baseUrl+'json/gradeJson/2.5.1/start.json');
        this.load.atlas('Unity2_5_1Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.5.1/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.5.1/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_1wrong', window.baseUrl+'assets/gradeAssets/2.5.1/wrong.png', window.baseUrl+'json/gradeJson/2.5.1/wrong.json');
	},

	addunitygame2_5_2Assets:function()
	{
		//common for all games.
        this.load.atlas('Unity2_5_2backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.5.2/backbtn.json');
        this.load.atlas('Unity2_5_2CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.5.2/speaker.json');
        this.load.atlas('Unity2_5_2starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.5.2/starAnim.json');
        this.load.atlas('Unity2_5_2replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.5.2/reply.json');
        this.load.atlas('Unity2_5_2btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.5.2/btn.json');
        
        this.load.image('Unity2_5_2background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('Unity2_5_2tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('Unity2_5_2navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Unity2_5_2timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('Unity2_5_2topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('Unity2_5_2BG_01', window.baseUrl+'assets/gradeAssets/2.5.2/BG_01.png');
        this.load.image('Unity2_5_2practice',window.baseUrl+'assets/gradeAssets/2.5.2/practice.png');
        this.load.image('Unity2_5_2topic',window.baseUrl+'assets/gradeAssets/2.5.2/topic.png');
       // this.load.image('Unity2_5_2Tick', window.baseUrl+'assets/gradeAssets/2.5.2/Tick.png');
        this.load.image('Unity2_5_2Caterpillar', window.baseUrl+'assets/gradeAssets/2.5.2/Caterpillar.png');
        
        this.load.image('Unity2_5_2Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.5.2/Caterpillar_Body1.png');
        this.load.image('Unity2_5_2Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.5.2/Caterpillar_Body2.png');
        this.load.image('Unity2_5_2Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.5.2/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_5_2Tick', window.baseUrl+'assets/gradeAssets/2.5.2/tick.png', window.baseUrl+'json/gradeJson/2.5.2/tick.json');
        this.load.atlas('Unity2_5_2start', window.baseUrl+'assets/gradeAssets/2.5.2/start.png', window.baseUrl+'json/gradeJson/2.5.2/start.json');
        this.load.atlas('Unity2_5_2Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.5.2/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.5.2/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_2wrong', window.baseUrl+'assets/gradeAssets/2.5.2/wrong.png', window.baseUrl+'json/gradeJson/2.5.2/wrong.json');
	},

	addunitygame2_5_3Assets:function()
	{
		//common for all games.
        this.load.atlas('Unity2_5_3backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.5.3/backbtn.json');
        this.load.atlas('Unity2_5_3CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.5.3/speaker.json');
        this.load.atlas('Unity2_5_3starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.5.3/starAnim.json');
        this.load.atlas('Unity2_5_3replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/2.5.3/reply.json');
        this.load.atlas('Unity2_5_3btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.5.3/btn.json');
        
        this.load.image('Unity2_5_3background',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('Unity2_5_3tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('Unity2_5_3navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Unity2_5_3timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('Unity2_5_3topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('Unity2_5_3BG_01', window.baseUrl+'assets/gradeAssets/2.5.3/BG_01.png');
        this.load.image('Unity2_5_3practice',window.baseUrl+'assets/gradeAssets/2.5.3/practice.png');
        this.load.image('Unity2_5_3topic',window.baseUrl+'assets/gradeAssets/2.5.3/topic.png');
        //this.load.image('Tick', window.baseUrl+'assets/gradeAssets/2.5.3/Tick.png');
        this.load.image('Unity2_5_3Caterpillar', window.baseUrl+'assets/gradeAssets/2.5.3/Caterpillar.png');
        
        this.load.image('Unity2_5_3Caterpillar_Body1', window.baseUrl+'assets/gradeAssets/2.5.3/Caterpillar_Body1.png');
        this.load.image('Unity2_5_3Caterpillar_Body2', window.baseUrl+'assets/gradeAssets/2.5.3/Caterpillar_Body2.png');
        this.load.image('Unity2_5_3Caterpillar_body3', window.baseUrl+'assets/gradeAssets/2.5.3/Caterpillar_body_new.png');
        
        this.load.atlas('Unity2_5_3Tick', window.baseUrl+'assets/gradeAssets/2.5.3/tick.png', window.baseUrl+'json/gradeJson/2.5.3/tick.json');
        this.load.atlas('Unity2_5_3start', window.baseUrl+'assets/gradeAssets/2.5.3/start.png', window.baseUrl+'json/gradeJson/2.5.3/start.json');
        this.load.atlas('Unity2_5_3Caterpillar_Happy', window.baseUrl+'assets/gradeAssets/2.5.3/Caterpillar_Happy.png', window.baseUrl+'json/gradeJson/2.5.3/Caterpillar_Happy.json');
        this.load.atlas('Unity2_5_3wrong', window.baseUrl+'assets/gradeAssets/2.5.3/wrong.png', window.baseUrl+'json/gradeJson/2.5.3/wrong.json');
	},

	addunitygame2_6_1Assets:function()
	{
		this.load.image('unity2_6_1_bg',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_6_1_backg',window.baseUrl+'assets/commonAssets/backg.png');
        this.load.image('unity2_6_1_topbar', window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_6_1_numbg', window.baseUrl+'assets/commonAssets/numbg.png');
		this.load.image('unity2_6_1_tittleBar', window.baseUrl+'assets/commonAssets/tittleBaar.png');
       
        this.load.atlas('unity2_6_1_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.6.1/backbtn.json');
        this.load.atlas('unity2_6_1_speaker',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.6.1/speaker.json');
        this.load.atlas('unity2_6_1_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        

        this.load.image('unity2_6_2_bg',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_6_2_backg',window.baseUrl+'assets/commonAssets/backg.png');
        this.load.image('unity2_6_2_topbar', window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_6_2_numbg', window.baseUrl+'assets/commonAssets/numbg.png');
		this.load.image('unity2_6_2_tittleBar', window.baseUrl+'assets/commonAssets/tittleBaar.png');
       
        this.load.atlas('unity2_6_2_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.6.1/backbtn.json');
        this.load.atlas('unity2_6_2_speaker',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.6.1/speaker.json');
        this.load.atlas('unity2_6_2_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        

        this.load.image('unity2_6_3_bg',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_6_3_backg',window.baseUrl+'assets/commonAssets/backg.png');
        this.load.image('unity2_6_3_topbar', window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_6_3_numbg', window.baseUrl+'assets/commonAssets/numbg.png');
		this.load.image('unity2_6_3_tittleBar', window.baseUrl+'assets/commonAssets/tittleBaar.png');
       
        this.load.atlas('unity2_6_3_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.6.1/backbtn.json');
        this.load.atlas('unity2_6_3_speaker',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.6.1/speaker.json');
        this.load.atlas('unity2_6_3_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        



        this.load.image('unity2_6_1_Base', window.baseUrl+'assets/gradeAssets/2.6.1/Base.png');
        this.load.image('unity2_6_1_Rectangle', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle.png');
        this.load.image('unity2_6_1_Rectangle 2', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle 2.png');
        this.load.atlas('unity2_6_1_box', window.baseUrl+'assets/gradeAssets/2.6.1/box.png', window.baseUrl+'json/gradeJson/2.6.1/box.json');
        
        this.load.atlas('unity2_6_1_glow1',window.baseUrl+'assets/gradeAssets/2.6.1/glow1.png',window.baseUrl+'json/gradeJson/2.6.1/glow1.json');
        
        this.load.atlas('unity2_6_1_rightmark',window.baseUrl+'assets/gradeAssets/2.6.1/rightmark.png',window.baseUrl+'json/gradeJson/2.6.1/rightmark.json');
	
        this.load.image('unity2_6_3_Base', window.baseUrl+'assets/gradeAssets/2.6.1/Base.png');
        this.load.image('unity2_6_3_Rectangle', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle.png');
        this.load.image('unity2_6_3_Rectangle 2', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle 2.png');
        this.load.atlas('unity2_6_3_box', window.baseUrl+'assets/gradeAssets/2.6.1/box.png', window.baseUrl+'json/gradeJson/2.6.1/box.json');
        
        this.load.atlas('unity2_6_3_glow1',window.baseUrl+'assets/gradeAssets/2.6.1/glow1.png',window.baseUrl+'json/gradeJson/2.6.1/glow1.json');
        
        this.load.atlas('unity2_6_3_rightmark',window.baseUrl+'assets/gradeAssets/2.6.1/rightmark.png',window.baseUrl+'json/gradeJson/2.6.1/rightmark.json');

        this.load.image('unity2_6_2_Base', window.baseUrl+'assets/gradeAssets/2.6.1/Base.png');
        this.load.image('unity2_6_2_Rectangle', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle.png');
        this.load.image('unity2_6_2_Rectangle 2', window.baseUrl+'assets/gradeAssets/2.6.1/Rectangle 2.png');
        this.load.atlas('unity2_6_2_box', window.baseUrl+'assets/gradeAssets/2.6.1/box.png', window.baseUrl+'json/gradeJson/2.6.1/box.json');
        
        this.load.atlas('unity2_6_2_glow1',window.baseUrl+'assets/gradeAssets/2.6.1/glow1.png',window.baseUrl+'json/gradeJson/2.6.1/glow1.json');
        
        this.load.atlas('unity2_6_2_rightmark',window.baseUrl+'assets/gradeAssets/2.6.1/rightmark.png',window.baseUrl+'json/gradeJson/2.6.1/rightmark.json');

	},

	addunitygame2_6_2Assets:function()
	{
		this.load.image('unity2_6_2_bg',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_6_2_backg',window.baseUrl+'assets/commonAssets/backg.png');
        this.load.image('unity2_6_2_topbar', window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_6_2_timerbg', window.baseUrl+'assets/commonAssets/timerbg.png');
        this.load.image('unity2_6_2_dotbox', window.baseUrl+'assets/commonAssets/dotbox.png');
        this.load.image('unity2_6_2_numbg', window.baseUrl+'assets/commonAssets/numbg.png');
		this.load.image('unity2_6_2_tittleBar', window.baseUrl+'assets/commonAssets/tittleBaar.png');
       
        this.load.atlas('unity2_6_2_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.6.2/backbtn.json');
        this.load.atlas('unity2_6_2_speaker',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.6.2/speaker.json');
        this.load.atlas('unity2_6_2_starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.6.2/starAnim.json');
        this.load.atlas('unity2_6_2_btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.6.2/btn.json');
        this.load.atlas('unity2_6_2_replay', window.baseUrl+'assets/commonAssets/reply.png', window.baseUrl+'json/gradeJson/2.6.2/reply.json');
        
        this.load.image('unity2_6_2_Base', window.baseUrl+'assets/gradeAssets/2.6.2/Base.png');
        this.load.image('unity2_6_2_Rectangle', window.baseUrl+'assets/gradeAssets/2.6.2/Rectangle.png');
        this.load.image('unity2_6_2_Rectangle 2', window.baseUrl+'assets/gradeAssets/2.6.2/Rectangle 2.png');
        this.load.atlas('unity2_6_2_box', window.baseUrl+'assets/gradeAssets/2.6.2/box.png', window.baseUrl+'json/gradeJson/2.6.2/box.json');
        
        this.load.atlas('unity2_6_2_glow1',window.baseUrl+'assets/gradeAssets/2.6.2/glow1.png',window.baseUrl+'json/gradeJson/2.6.2/glow1.json');
        
        this.load.atlas('unity2_6_2_rightmark',window.baseUrl+'assets/gradeAssets/2.6.2/rightmark.png',window.baseUrl+'json/gradeJson/2.6.2/rightmark.json');
	},

	addunitygame2_6_3Assets:function()
	{
		this.load.image('unity2_6_3_bg',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.image('unity2_6_3_backg',window.baseUrl+'assets/commonAssets/backg.png');
        this.load.image('unity2_6_3_topbar', window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity2_6_3_timerbg', window.baseUrl+'assets/commonAssets/timerbg.png');
        this.load.image('unity2_6_3_dotbox', window.baseUrl+'assets/commonAssets/dotbox.png');
        this.load.image('unity2_6_3_numbg', window.baseUrl+'assets/commonAssets/numbg.png');
		this.load.image('unity2_6_3_tittleBar', window.baseUrl+'assets/commonAssets/tittleBaar.png');
       
        this.load.atlas('unity2_6_3_backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/2.6.3/backbtn.json');
        this.load.atlas('unity2_6_3_speaker',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/2.6.3/speaker.json');
        this.load.atlas('unity2_6_3_starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/2.6.3/starAnim.json');
        this.load.atlas('unity2_6_3_btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/2.6.3/btn.json');
        this.load.atlas('unity2_6_3_replay', window.baseUrl+'assets/commonAssets/reply.png', window.baseUrl+'json/gradeJson/2.6.3/reply.json');
        
        this.load.image('unity2_6_3_Base', window.baseUrl+'assets/gradeAssets/2.6.3/Base.png');
        this.load.image('unity2_6_3_Rectangle', window.baseUrl+'assets/gradeAssets/2.6.3/Rectangle.png');
        this.load.image('unity2_6_3_Rectangle 2', window.baseUrl+'assets/gradeAssets/2.6.3/Rectangle 2.png');
        this.load.atlas('unity2_6_3_box', window.baseUrl+'assets/gradeAssets/2.6.3/box.png', window.baseUrl+'json/gradeJson/2.6.3/box.json');
        
        this.load.atlas('unity2_6_3_glow1',window.baseUrl+'assets/gradeAssets/2.6.3/glow1.png',window.baseUrl+'json/gradeJson/2.6.3/glow1.json');
        
        this.load.atlas('unity2_6_3_rightmark',window.baseUrl+'assets/gradeAssets/2.6.3/rightmark.png',window.baseUrl+'json/gradeJson/2.6.3/rightmark.json');
	},

	addunitygame4_1Assets:function()
	{
		
        //game assets.
        this.load.image('Unity4_1BG_01', window.baseUrl+'assets/gradeAssets/4.1/BG_01.png');
        this.load.image('Unity4_1practice',window.baseUrl+'assets/gradeAssets/4.1/practice.png');
        this.load.image('Unity4_1topic',window.baseUrl+'assets/gradeAssets/4.1/topic.png');
    
        this.load.atlas('Unity4_1crocodile_grt', window.baseUrl+'assets/gradeAssets/4.1/crocodile_grt.png', window.baseUrl+'json/gradeJson/4.1/crocodile_grt.json');
        this.load.atlas('Unity4_1crocodileEyerolling', window.baseUrl+'assets/gradeAssets/4.1/crocodileEyerolling.png', window.baseUrl+'json/gradeJson/4.1/crocodileEyerolling.json');
        this.load.atlas('Unity4_1crocodileIdle', window.baseUrl+'assets/gradeAssets/4.1/crocodileIdle.png', window.baseUrl+'json/gradeJson/4.1/crocodileIdle.json');
        this.load.atlas('Unity4_1fishbox', window.baseUrl+'assets/gradeAssets/4.1/fishbox.png', window.baseUrl+'json/gradeJson/4.1/fishbox.json');
        this.load.atlas('Unity4_1crocodile_lt', window.baseUrl+'assets/gradeAssets/4.1/crocodile_lt.png', window.baseUrl+'json/gradeJson/4.1/crocodile_lt.json');
        
        this.load.atlas('Unity4_1tick', window.baseUrl+'assets/gradeAssets/4.1/tickMark.png', window.baseUrl+'json/gradeJson/4.1/tickMark.json');
	},

	addunitygame4_2Assets:function()
	{
		this.load.image('Unity4_2BG_01', window.baseUrl+'assets/gradeAssets/4.2/BG_01.png');
        this.load.image('Unity4_2practice',window.baseUrl+'assets/gradeAssets/4.2/practice.png');
        this.load.image('Unity4_2topic',window.baseUrl+'assets/gradeAssets/4.2/topic.png');
    
        this.load.atlas('Unity4_2crocodileEqual', window.baseUrl+'assets/gradeAssets/4.2/crocodileEqual.png', window.baseUrl+'json/gradeJson/4.2/crocodileEqual.json');
        this.load.atlas('Unity4_2crocodileEyerolling', window.baseUrl+'assets/gradeAssets/4.2/crocodileEyerolling.png', window.baseUrl+'json/gradeJson/4.2/crocodileEyerolling.json');
        this.load.atlas('Unity4_2crocodileIdle', window.baseUrl+'assets/gradeAssets/4.2/crocodileIdle.png', window.baseUrl+'json/gradeJson/4.2/crocodileIdle.json');
        this.load.atlas('Unity4_2fishbox', window.baseUrl+'assets/gradeAssets/4.2/fishbox.png', window.baseUrl+'json/gradeJson/4.2/fishbox.json');
        
        this.load.atlas('Unity4_2tick', window.baseUrl+'assets/gradeAssets/4.2/tickMark.png', window.baseUrl+'json/gradeJson/4.2/tickMark.json');
        this.load.atlas('Unity4_2crossMark', window.baseUrl+'assets/gradeAssets/4.2/crossMark.png', window.baseUrl+'json/gradeJson/4.2/crossMark.json');
	},

	addunitygame4_1_1Assets:function()
	{
		this.load.image('Unity4_1_1BG_01', window.baseUrl+'assets/gradeAssets/4.1.1/BG_01.png');

        this.load.image('Unity4_1_1key',window.baseUrl+'assets/gradeAssets/4.1.1/key.png');
        this.load.image('Unity4_1_1hammer',window.baseUrl+'assets/gradeAssets/4.1.1/hammer.png');
        this.load.image('Unity4_1_1boader',window.baseUrl+'assets/gradeAssets/4.1.1/boader.png');
        this.load.image('Unity4_1_1soccer',window.baseUrl+'assets/gradeAssets/4.1.1/soccer.png');
       // this.load.image('Unity4_1_1threat',window.baseUrl+'assets/gradeAssets/4.1.1/threat.png');
        
        this.load.image('Unity4_1_1niddle',window.baseUrl+'assets/gradeAssets/4.1.1/niddle.png');
        //this.load.image('Unity4_1_1pencil',window.baseUrl+'assets/gradeAssets/4.1.1/pencil.png');
        
        this.load.atlas('Unity4_1_1tray',window.baseUrl+'assets/gradeAssets/4.1.1/tray.png',window.baseUrl+'json/gradeJson/4.1.1/tray.json');
        this.load.atlas('Unity4_1_1lock',window.baseUrl+'assets/gradeAssets/4.1.1/lock.png',window.baseUrl+'json/gradeJson/4.1.1/lock.json');
        this.load.atlas('Unity4_1_1nail',window.baseUrl+'assets/gradeAssets/4.1.1/nail.png',window.baseUrl+'json/gradeJson/4.1.1/nail.json');
        this.load.atlas('Unity4_1_1pencil',window.baseUrl+'assets/gradeAssets/4.1.1/pencil.png',window.baseUrl+'json/gradeJson/4.1.1/pencil.json');
        this.load.atlas('Unity4_1_1thread',window.baseUrl+'assets/gradeAssets/4.1.1/thread.png',window.baseUrl+'json/gradeJson/4.1.1/thread.json');
        
        this.load.atlas('Unity4_1_1cup',window.baseUrl+'assets/gradeAssets/4.1.1/cup.png',window.baseUrl+'json/gradeJson/4.1.1/cup.json');
        this.load.atlas('Unity4_1_1niddle1',window.baseUrl+'assets/gradeAssets/4.1.1/niddle1.png',window.baseUrl+'json/gradeJson/4.1.1/niddle1.json');
        this.load.atlas('Unity4_1_1cutter',window.baseUrl+'assets/gradeAssets/4.1.1/cutter.png',window.baseUrl+'json/gradeJson/4.1.1/cutter.json');
        
    
        this.load.atlas('Unity4_1_1tick', window.baseUrl+'assets/gradeAssets/4.1.1/tickMark.png', window.baseUrl+'json/gradeJson/4.1.1/tickMark.json');
        this.load.image('Unity4_1_1hand', window.baseUrl+'assets/gradeAssets/4.1.1/hand.png');
	},

	addunitygame3_1_1AAssets:function()
	{
		 this.load.atlas('unity3_1_1rightmark',window.baseUrl+'assets/gradeAssets/3.1.1/rightmark.png',window.baseUrl+'json/gradeJson/3.1.1/rightmark.json');
        this.load.atlas('unity3_1_1box',window.baseUrl+'assets/gradeAssets/3.1.1/box.png',window.baseUrl+'json/gradeJson/3.1.1/box.json');
        this.load.atlas('unity3_1_1boxanim',window.baseUrl+'assets/gradeAssets/3.1.1/boxanim.png',window.baseUrl+'json/gradeJson/3.1.1/boxanim.json');
        this.load.atlas('unity3_1_1eraser',window.baseUrl+'assets/gradeAssets/3.1.1/eraser.png',window.baseUrl+'json/gradeJson/3.1.1/eraser.json');
        this.load.atlas('unity3_1_1numberpad',window.baseUrl+'assets/gradeAssets/3.1.1/numberpad.png',window.baseUrl+'json/gradeJson/3.1.1/numberpad.json');
        this.load.image('unity3_1_1scorebox', window.baseUrl+'assets/gradeAssets/3.1.1/scorebox.png');
        this.load.image('unity3_1_1tbox', window.baseUrl+'assets/gradeAssets/3.1.1/tbox.png');
        this.load.image('unity3_1_1tbox2', window.baseUrl+'assets/gradeAssets/3.1.1/tbox2.png');
        this.load.atlas('unity3_1_1woodstick1',window.baseUrl+'assets/gradeAssets/3.1.1/woodstick1.png',window.baseUrl+'json/gradeJson/3.1.1/woodstick1.json');
        this.load.atlas('unity3_1_1woodstick2',window.baseUrl+'assets/gradeAssets/3.1.1/woodstick2.png',window.baseUrl+'json/gradeJson/3.1.1/woodstick2.json');
        this.load.atlas('unity3_1_1woodstickanim',window.baseUrl+'assets/gradeAssets/3.1.1/woodstickanim.png',window.baseUrl+'json/gradeJson/3.1.1/woodstickanim.json');
        this.load.image('unity3_1_1b2', window.baseUrl+'assets/gradeAssets/3.1.1/b2.png');
        this.load.atlas('unity3_1_1ansbox',window.baseUrl+'assets/gradeAssets/3.1.1/ansbox.png',window.baseUrl+'json/gradeJson/3.1.1/ansbox.json');

        this.load.image('unity3_1_1backg',window.baseUrl+'assets/commonAssets/backg.png');

        this.load.atlas('unity3_1_2rightmark',window.baseUrl+'assets/gradeAssets/3.1.1/rightmark.png',window.baseUrl+'json/gradeJson/3.1.1/rightmark.json');
        this.load.atlas('unity3_1_2coin',window.baseUrl+'assets/gradeAssets/3.1.1/coin.png',window.baseUrl+'json/gradeJson/3.1.1/coin.json');
        this.load.atlas('unity3_1_2coinanim',window.baseUrl+'assets/gradeAssets/3.1.1/coinanim.png',window.baseUrl+'json/gradeJson/3.1.1/coinanim.json');
        this.load.atlas('unity3_1_2eraser',window.baseUrl+'assets/gradeAssets/3.1.1/eraser.png',window.baseUrl+'json/gradeJson/3.1.1/eraser.json');
        this.load.atlas('unity3_1_2numberpad',window.baseUrl+'assets/gradeAssets/3.1.1/numberpad.png',window.baseUrl+'json/gradeJson/3.1.1/numberpad.json');
        this.load.image('unity3_1_2scorebox', window.baseUrl+'assets/gradeAssets/3.1.1/scorebox.png');
        this.load.image('unity3_1_2tbox', window.baseUrl+'assets/gradeAssets/3.1.1/tbox.png');
        this.load.image('unity3_1_2b2', window.baseUrl+'assets/gradeAssets/3.1.1/b2.png');
        this.load.atlas('unity3_1_2ansbox',window.baseUrl+'assets/gradeAssets/3.1.1/ansbox.png',window.baseUrl+'json/gradeJson/3.1.1/ansbox.json');
        this.load.atlas('unity3_1_2box',window.baseUrl+'assets/gradeAssets/3.1.1/box.png',window.baseUrl+'json/gradeJson/3.1.1/box.json');
        this.load.atlas('unity3_1_2boxanim',window.baseUrl+'assets/gradeAssets/3.1.1/boxanim.png',window.baseUrl+'json/gradeJson/3.1.1/boxanim.json');
		this.load.image('unity3_1_2backg',window.baseUrl+'assets/commonAssets/backg.png');
        
	},

	addunitygame3_1_1BAssets:function()
	{
		 
         
        this.load.atlas('unity3_1_2rightmark',window.baseUrl+'assets/gradeAssets/3.1.2/rightmark.png',window.baseUrl+'json/gradeJson/3.1.2/rightmark.json');
        this.load.atlas('unity3_1_2coin',window.baseUrl+'assets/gradeAssets/3.1.2/coin.png',window.baseUrl+'json/gradeJson/3.1.2/coin.json');
        this.load.atlas('unity3_1_2coinanim',window.baseUrl+'assets/gradeAssets/3.1.2/coinanim.png',window.baseUrl+'json/gradeJson/3.1.2/coinanim.json');
        this.load.atlas('unity3_1_2eraser',window.baseUrl+'assets/gradeAssets/3.1.2/eraser.png',window.baseUrl+'json/gradeJson/3.1.2/eraser.json');
        this.load.atlas('unity3_1_2numberpad',window.baseUrl+'assets/gradeAssets/3.1.2/numberpad.png',window.baseUrl+'json/gradeJson/3.1.2/numberpad.json');
        this.load.image('unity3_1_2scorebox', window.baseUrl+'assets/gradeAssets/3.1.2/scorebox.png');
        this.load.image('unity3_1_2tbox', window.baseUrl+'assets/gradeAssets/3.1.2/tbox.png');
        this.load.image('unity3_1_2b2', window.baseUrl+'assets/gradeAssets/3.1.2/b2.png');
        this.load.atlas('unity3_1_2ansbox',window.baseUrl+'assets/gradeAssets/3.1.2/ansbox.png',window.baseUrl+'json/gradeJson/3.1.2/ansbox.json');
        this.load.atlas('unity3_1_2box',window.baseUrl+'assets/gradeAssets/3.1.2/box.png',window.baseUrl+'json/gradeJson/3.1.2/box.json');
        this.load.atlas('unity3_1_2boxanim',window.baseUrl+'assets/gradeAssets/3.1.2/boxanim.png',window.baseUrl+'json/gradeJson/3.1.2/boxanim.json');
		this.load.image('unity3_1_2backg',window.baseUrl+'assets/commonAssets/backg.png');
	},

	addunitygame4_2_2Assets:function()
	{
		this.load.image('Level4_22_background',window.baseUrl+'assets/gradeAssets/4.2.2/bg.png');
        
        this.load.image('Level4_22_celeb', window.baseUrl+'assets/gradeAssets/4.2.2/commonAssets/c.png');
        this.load.image('Level4_22_practice',window.baseUrl+'assets/gradeAssets/4.2.2/commonAssets/practice.png');
        this.load.image('Level4_22_topicOutline',window.baseUrl+'assets/gradeAssets/4.2.2/commonAssets/topicOutline.png');
        this.load.image('Level4_22_timebg',window.baseUrl+'assets/gradeAssets/4.2.2/commonAssets/timebg.png');
        this.load.image('Level4_22_navBar',window.baseUrl+'assets/gradeAssets/4.2.2/commonAssets/navBar.png');
        //gameassets
        this.load.atlas('Level4_22_bluerod',window.baseUrl+'assets/gradeAssets/4.2.2/bluerod.png',window.baseUrl+'json/gradeJson/4.2.2/bluerod.json');
        this.load.image('Level4_22_yellowcube',window.baseUrl+'assets/gradeAssets/4.2.2/yellowcube.png');
        this.load.image('Level4_22_hand',window.baseUrl+'assets/gradeAssets/4.2.2/hand.png');
        this.load.atlas('Level4_22_box',window.baseUrl+'assets/gradeAssets/4.2.2/box.png',window.baseUrl+'json/gradeJson/4.2.2/box.json');
        //this.load.atlas('Level4_22_croc_greater',window.baseUrl+'assets/gradeAssets/4.2.2/croc_greater.png',window.baseUrl+'json/gradeJson/4.2.2/croc_greater.json');
        //this.load.atlas('Level4_22_croc_greater2','assets/gradeAssets/4.2.2/croc_greater2.png','json/gradeJson/4.2.2/croc_greater2.json');
        //this.load.atlas('Level4_22_croc_lessthan',window.baseUrl+'assets/gradeAssets/4.2.2/croc_lessthan.png',window.baseUrl+'json/gradeJson/4.2.2/croc_lessthan.json');
        //this.load.atlas('Level4_22_croc_lessthan2','assets/gradeAssets/4.2.2/croc_lessthan2.png','json/gradeJson/4.2.2/croc_lessthan2.json');
        //this.load.atlas('Level4_22_croc_watch',window.baseUrl+'assets/gradeAssets/4.2.2/croc_watch.png',window.baseUrl+'json/gradeJson/4.2.2/croc_watch.json');
        //this.load.atlas('Level4_22_croc_watch2',window.baseUrl+'assets/gradeAssets/4.2.2/croc_watch2.png',window.baseUrl+'json/gradeJson/4.2.2/croc_watch2.json');
        this.load.image('Level4_22_tray',window.baseUrl+'assets/gradeAssets/4.2.2/tray.png');
        this.load.image('Level4_22_singlebox',window.baseUrl+'assets/gradeAssets/4.2.2/singlebox.png');

        this.load.image('Level4_22_croc_greater',window.baseUrl+'assets/gradeAssets/4.2.2/Crocodile_GreateThan.png');

		this.load.image('Level4_22_croc_lessthan',window.baseUrl+'assets/gradeAssets/4.2.2/Crocodile_LessThan.png');

		this.load.image('Level4_22_croc_equal',window.baseUrl+'assets/gradeAssets/4.2.2/Crocodile_Equal.png');
	},

	addunitygame4_2_3Assets:function()
	{
		this.load.image('Level423_bg1', window.baseUrl+'assets/commonAssets/BG.png');
    
        //this.load.atlas('Level321_numberBig','assets/gradeAssets/4.2.3/numberBig.png' ,'json/gradeJson/4.2.3/numberBig.json');
       
        this.load.atlas('Level423_Coin1', window.baseUrl+'assets/gradeAssets/4.2.3/Coin 1.png' , window.baseUrl+'json/gradeJson/4.2.3/Coin 1.json');
        this.load.atlas('Level423_Coin10', window.baseUrl+'assets/gradeAssets/4.2.3/Coin 10.png' , window.baseUrl+'json/gradeJson/4.2.3/Coin 10.json');
        this.load.atlas('Level423_Coin100', window.baseUrl+'assets/gradeAssets/4.2.3/Coin 100.png' , window.baseUrl+'json/gradeJson/4.2.3/Coin 100.json');
        //this.load.atlas('Level423_OneToHundred', window.baseUrl+'assets/gradeAssets/4.2.3/1-100.png' , window.baseUrl+'json/gradeJson/4.2.3/1-100.json');
        
        this.load.atlas('Level423_boxBig', window.baseUrl+'assets/gradeAssets/4.2.3/boxSmall.png' , window.baseUrl+'json/gradeJson/4.2.3/boxSmall.json');
        this.load.atlas('Level423_lessThan', window.baseUrl+'assets/gradeAssets/4.2.3/lessThanSmall.png' , window.baseUrl+'json/gradeJson/4.2.3/lessThanSmall.json');
        this.load.atlas('Level423_greaterThan', window.baseUrl+'assets/gradeAssets/4.2.3/greaterThanSmall.png' , window.baseUrl+'json/gradeJson/4.2.3/greaterThanSmall.json');
        this.load.atlas('Level423_equal', window.baseUrl+'assets/gradeAssets/4.2.3/equal.png' , window.baseUrl+'json/gradeJson/4.2.3/equal.json');
        
        this.load.image('Level4_2_3_BlueCoin', window.baseUrl+'assets/gradeAssets/4.2.3/blueSingleCoin.png');
        this.load.image('Level4_2_3_GreenCoin', window.baseUrl+'assets/gradeAssets/4.2.3/greenSingleCoin.png');
        this.load.image('Level4_2_3_YellowCoin', window.baseUrl+'assets/gradeAssets/4.2.3/yellowSingleCoin.png');
        this.load.image('Level4_2_3_tray', window.baseUrl+'assets/gradeAssets/4.2.3/tray.png');
        this.load.image('Level4_2_3_greyTray', window.baseUrl+'assets/gradeAssets/4.2.3/greyTray.png');
        this.load.image('Level4_2_3_bigsmall', window.baseUrl+'assets/gradeAssets/4.2.3/bigBox.png');
        this.load.image('Level4_2_3_hand', window.baseUrl+'assets/gradeAssets/4.2.3/hand.png');
	},

	addunitygame4_3_1Assets:function()
	{
		this.load.image('Unity4_3_1BG_01', window.baseUrl+'assets/gradeAssets/4.3.1/BG_01.png');
        this.load.image('Unity4_3_1practice',window.baseUrl+'assets/gradeAssets/4.3.1/practice.png');
        this.load.image('Unity4_3_1topic',window.baseUrl+'assets/gradeAssets/4.3.1/topic.png');
    
        this.load.image('Unity4_3_1Crocodile_Equal', window.baseUrl+'assets/gradeAssets/4.3.1/Crocodile_Equal.png');
        this.load.image('Unity4_3_1Crocodile_GreateThan', window.baseUrl+'assets/gradeAssets/4.3.1/Crocodile_GreateThan.png');
        this.load.image('Unity4_3_1Crocodile_LessThan', window.baseUrl+'assets/gradeAssets/4.3.1/Crocodile_LessThan.png');
        this.load.image('Unity4_3_1NumberPopupBox', window.baseUrl+'assets/gradeAssets/4.3.1/NumberPopupBox.png');
        //this.load.image('Unity4_3_1dropbox', window.baseUrl+'assets/gradeAssets/4.3.1/dropbox.png');
    
        this.load.atlas('Unity4_3_1dropbox', window.baseUrl+'assets/gradeAssets/4.3.1/dropbox.png', window.baseUrl+'json/gradeJson/4.3.1/dropbox.json');
        //this.load.atlas('Unity4_3_1Tick', window.baseUrl+'assets/gradeAssets/4.3.1/tick.png', window.baseUrl+'json/gradeJson/4.3.1/tick.json');
	},

	addunitygame4_4_1Assets:function()
	{
		//this.load.image('Level31_bg1',window.baseUrl+'assets/gradeAssets/3.1/BG.png');

        this.load.image('Level441_bg1',window.baseUrl+'assets/gradeAssets/4.4.1/BG.png');
        this.load.image('boy1',window.baseUrl+'assets/gradeAssets/4.4.1/Boy1.png');
        this.load.image('boy2',window.baseUrl+'assets/gradeAssets/4.4.1/Boy2.png');
        this.load.image('boy3',window.baseUrl+'assets/gradeAssets/4.4.1/Boy3.png');
        this.load.image('Tree',window.baseUrl+'assets/gradeAssets/4.4.1/Tree.png');
		
      
        

        this.load.atlas('box1',window.baseUrl+'assets/gradeAssets/4.4.1/box1.png' ,window.baseUrl+'json/gradeJson/4.4.1/box1.json');
        this.load.atlas('box2',window.baseUrl+'assets/gradeAssets/4.4.1/box 2.png' ,window.baseUrl+'json/gradeJson/4.4.1/box 2.json');
        this.load.atlas('BoyhandsUp',window.baseUrl+'assets/gradeAssets/4.4.1/BoyhandsUp.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyhandsUp.json');
        this.load.atlas('BoyRightPointing',window.baseUrl+'assets/gradeAssets/4.4.1/BoyRightPointing.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyRightPointing.json');
        this.load.atlas('BoyWrong',window.baseUrl+'assets/gradeAssets/4.4.1/BoyWrong.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyWrong.json');
        // this.load.atlas('tik1',window.baseUrl+'assets/gradeAssets/4.4.1/tik 1.png' ,window.baseUrl+'assets/gradeAssets/4.4.1/tik 1.json');
        this.load.atlas('BoyJumping',window.baseUrl+'assets/gradeAssets/4.4.1/BoyJumping.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyJumping.json');
        this.load.atlas('BoyhandsUp',window.baseUrl+'assets/gradeAssets/4.4.1/BoyhandsUp.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyhandsUp.json');
        this.load.atlas('BoyLeftPointing',window.baseUrl+'assets/gradeAssets/4.4.1/BoyLeftPointing.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyLeftPointing.json');
		
        this.load.atlas('BoyRightPointing_blue',window.baseUrl+'assets/gradeAssets/4.4.1/BoyRightPointing_blue.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyRightPointing_blue.json');
        this.load.atlas('BoyJumping_blue',window.baseUrl+'assets/gradeAssets/4.4.1/BoyJumping_blue.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyJumping_blue.json');
        this.load.atlas('BoyhandsUp_blue',window.baseUrl+'assets/gradeAssets/4.4.1/BoyhandsUp_blue.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyhandsUp_blue.json');



        

		 /*this.load.atlas('Coin1',window.baseUrl+'assets/gradeAssets/3.1/Coin1.png' ,window.baseUrl+'assets/gradeAssets/3.1/Coin 1.json');
		  this.load.atlas('Coin10',window.baseUrl+'assets/gradeAssets/3.1/Coin10.png' ,window.baseUrl+'assets/gradeAssets/3.1/Coin 10.json');
		   this.load.atlas('Coin100',window.baseUrl+'assets/gradeAssets/3.1/Coin100.png' ,window.baseUrl+'assets/gradeAssets/3.1/Coin 100.json');

		*/
        /* this.load.atlas('Level321_coin1Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1 anim.json');
        this.load.atlas('Level321_coin10Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10 anim.json');
        this.load.atlas('Level321_coin100Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100 anim.json');
        this.load.atlas('Level321_LeverBlue',window.baseUrl+'assets/gradeAssets/3.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverBlue.json');
        this.load.atlas('Level321_LeverGreen',window.baseUrl+'assets/gradeAssets/3.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverGreen.json');
        this.load.atlas('Level321_LeverYellow',window.baseUrl+'assets/gradeAssets/3.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverYellow.json');
        */ //this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');
        //this.load.atlas('numbers',window.baseUrl+'assets/gradeAssets/3.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/3.2.1/numbers.json');
        /*this.load.atlas('Level321_numberBox',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox.json');
        this.load.atlas('Level321_Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1.json');
        this.load.atlas('Level321_Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10.json');
        this.load.atlas('Level321_Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100.json');
        this.load.atlas('erase',window.baseUrl+'assets/gradeAssets/3.2.1/erase.png' ,window.baseUrl+'json/gradeJson/3.2.1/erase.json');
        */ this.load.atlas('tickBtn',window.baseUrl+'assets/gradeAssets/4.4.1/rightmark.png' ,window.baseUrl+'json/gradeJson/4.4.1/rightmark.json');
        /* this.load.atlas('Level321_NumberKey',window.baseUrl+'assets/gradeAssets/3.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/3.2.1/numbers.json');
        this.load.atlas('Level321_OneToHundred',window.baseUrl+'assets/gradeAssets/3.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/3.2.1/1-100.json');
        
        this.load.image('Level321_coinMachinePannel',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel.png');
        //this.load.image('Level321_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel.png');
        this.load.image('Level321_numBG',window.baseUrl+'assets/gradeAssets/3.2.1/b2.png');
        */
        
	       // this.load.image('shadow',window.baseUrl+'assets/gradeAssets/Basket_shadow.png');
	       // this.load.image('basket',window.baseUrl+'assets/gradeAssets/Basket.png');
	       // this.load.image('Basket_Back',window.baseUrl+'assets/gradeAssets/Basket_Back.png');
	       // this.load.image('tree',window.baseUrl+'assets/gradeAssets/Tree.png');
	       // this.load.atlas('tickBtn',window.baseUrl+'assets/commonAssets/tick.png' ,window.baseUrl+'json/gradeJson/1.2/tick.json');
         //this.load.image('navBar',window.baseUrl+'assets/commonAssets/navBar.png');
	        /*this.load.image('topic',window.baseUrl+'assets/gradeAssets/topic.png');
	         this.load.image('practice',window.baseUrl+'assets/gradeAssets/practice.png');
	        this.load.image('topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');
	        this.load.image('timebg',window.baseUrl+'assets/commonAssets/timebg.png');
		     */ //  this.load.atlas('mango',window.baseUrl+'assets/gradeAssets/mango.png' ,window.baseUrl+'json/gradeJson/1.2/mango.json');
		      //  this.load.atlas('mangoCeleb',window.baseUrl+'assets/gradeAssets/mangoCeleb.png' ,window.baseUrl+'json/gradeJson/1.2/mangoCeleb.json');
		     /*   
         this.load.audio('Eng_12', window.baseUrl+'questionSounds/1.2/English/Game 1.2.mp3');
         this.load.audio('Eng_1', window.baseUrl+'questionSounds/1.2/English/1.mp3');
         this.load.audio('Eng_2', window.baseUrl+'questionSounds/1.2/English/2.mp3');
         this.load.audio('Eng_3', window.baseUrl+'questionSounds/1.2/English/3.mp3');
         this.load.audio('Eng_4', window.baseUrl+'questionSounds/1.2/English/4.mp3');
         this.load.audio('Eng_5', window.baseUrl+'questionSounds/1.2/English/5.mp3');
         this.load.audio('Eng_6', window.baseUrl+'questionSounds/1.2/English/6.mp3');
         this.load.audio('Eng_7', window.baseUrl+'questionSounds/1.2/English/7.mp3');
         this.load.audio('Eng_8', window.baseUrl+'questionSounds/1.2/English/8.mp3');
         this.load.audio('Eng_9', window.baseUrl+'questionSounds/1.2/English/9.mp3');
         this.load.audio('Kan_12', window.baseUrl+'questionSounds/1.2/Kannada/Game 1.2.mp3');
         this.load.audio('Kan_1', window.baseUrl+'questionSounds/1.2/Kannada/1.mp3');
         this.load.audio('Kan_2', window.baseUrl+'questionSounds/1.2/Kannada/2.mp3');
         this.load.audio('Kan_3', window.baseUrl+'questionSounds/1.2/Kannada/3.mp3');
         this.load.audio('Kan_4', window.baseUrl+'questionSounds/1.2/Kannada/4.mp3');
         this.load.audio('Kan_5', window.baseUrl+'questionSounds/1.2/Kannada/5.mp3');
         this.load.audio('Kan_6', window.baseUrl+'questionSounds/1.2/Kannada/6.mp3');
         this.load.audio('Kan_7', window.baseUrl+'questionSounds/1.2/Kannada/7.mp3');
         this.load.audio('Kan_8', window.baseUrl+'questionSounds/1.2/Kannada/8.mp3');
         this.load.audio('Kan_9', window.baseUrl+'questionSounds/1.2/Kannada/9.mp3');
         this.load.audio('Hin_12', window.baseUrl+'questionSounds/1.2/Hindi/Game 1.2.mp3');
         this.load.audio('Hin_1', window.baseUrl+'questionSounds/1.2/Hindi/1.mp3');
         this.load.audio('Hin_2', window.baseUrl+'questionSounds/1.2/Hindi/2.mp3');
         this.load.audio('Hin_3', window.baseUrl+'questionSounds/1.2/Hindi/3.mp3');
         this.load.audio('Hin_4', window.baseUrl+'questionSounds/1.2/Hindi/4.mp3');
         this.load.audio('Hin_5', window.baseUrl+'questionSounds/1.2/Hindi/5.mp3');
         this.load.audio('Hin_6', window.baseUrl+'questionSounds/1.2/Hindi/6.mp3');
         this.load.audio('Hin_7', window.baseUrl+'questionSounds/1.2/Hindi/7.mp3');
         this.load.audio('Hin_8', window.baseUrl+'questionSounds/1.2/Hindi/8.mp3');
         this.load.audio('Hin_9', window.baseUrl+'questionSounds/1.2/Hindi/9.mp3');
		*/
        
	},


	addunitygame4_6_1Assets:function()
	{

		this.load.image('unity4_6_1backg',window.baseUrl+'assets/gradeAssets/4.6.1/backg.png');


		this.load.atlas('unity4_6_1rightmark',window.baseUrl+'assets/gradeAssets/4.6.1/rightmark.png',window.baseUrl+'json/gradeJson/4.6.1/rightmark.json');
        this.load.atlas('unity4_6_1numbers',window.baseUrl+'assets/gradeAssets/4.6.1/numbers.png',window.baseUrl+'json/gradeJson/4.6.1/numbers.json');
        this.load.image('unity4_6_1square', window.baseUrl+'assets/gradeAssets/4.6.1/square.png');
        this.load.image('unity4_6_1squareGlow', window.baseUrl+'assets/gradeAssets/4.6.1/squareGlow.png');
        
        this.load.atlas('unity4_6_1ElephantHappy',window.baseUrl+'assets/gradeAssets/4.6.1/Elephant_Happy.png',window.baseUrl+'json/gradeJson/4.6.1/Elephant_Happy.json');
        this.load.atlas('unity4_6_1ElephantIdle',window.baseUrl+'assets/gradeAssets/4.6.1/Elephant_Idle.png',window.baseUrl+'json/gradeJson/4.6.1/Elephant_Idle.json');
        this.load.atlas('unity4_6_1MouseHappy',window.baseUrl+'assets/gradeAssets/4.6.1/Mouse_Happy.png',window.baseUrl+'json/gradeJson/4.6.1/Mouse_Happy.json');
        this.load.atlas('unity4_6_1MouseIdle',window.baseUrl+'assets/gradeAssets/4.6.1/Mouse_Idle.png',window.baseUrl+'json/gradeJson/4.6.1/Mouse_Idle.json');
        

        this.load.atlas('unity4_6_2rightmark',window.baseUrl+'assets/gradeAssets/4.6.1/rightmark.png',window.baseUrl+'json/gradeJson/4.6.1/rightmark.json');
        this.load.atlas('unity4_6_2numbers',window.baseUrl+'assets/gradeAssets/4.6.1/numbers.png',window.baseUrl+'json/gradeJson/4.6.1/numbers.json');
        this.load.image('unity4_6_2square', window.baseUrl+'assets/gradeAssets/4.6.1/square.png');
        this.load.image('unity4_6_2squareGlow', window.baseUrl+'assets/gradeAssets/4.6.1/squareGlow.png');
        
        this.load.atlas('unity4_6_2ElephantHappy',window.baseUrl+'assets/gradeAssets/4.6.1/Elephant_Happy.png',window.baseUrl+'json/gradeJson/4.6.1/Elephant_Happy.json');
        this.load.atlas('unity4_6_2ElephantIdle',window.baseUrl+'assets/gradeAssets/4.6.1/Elephant_Idle.png',window.baseUrl+'json/gradeJson/4.6.1/Elephant_Idle.json');
        this.load.atlas('unity4_6_2MouseHappy',window.baseUrl+'assets/gradeAssets/4.6.1/Mouse_Happy.png',window.baseUrl+'json/gradeJson/4.6.1/Mouse_Happy.json');
        this.load.atlas('unity4_6_2MouseIdle',window.baseUrl+'assets/gradeAssets/4.6.1/Mouse_Idle.png',window.baseUrl+'json/gradeJson/4.6.1/Mouse_Idle.json');
        
	},

	addunitygame4_6_2Assets:function()
	{
		//this.load.image('unity4_6_2backg',window.baseUrl+'assets/commonAssets/backg.png');

		this.load.atlas('unity4_6_2rightmark',window.baseUrl+'assets/gradeAssets/4.6.2/rightmark.png',window.baseUrl+'json/gradeJson/4.6.2/rightmark.json');
        this.load.atlas('unity4_6_2numbers',window.baseUrl+'assets/gradeAssets/4.6.2/numbers.png',window.baseUrl+'json/gradeJson/4.6.2/numbers.json');
        this.load.image('unity4_6_2square', window.baseUrl+'assets/gradeAssets/4.6.2/square.png');
        this.load.image('unity4_6_2squareGlow', window.baseUrl+'assets/gradeAssets/4.6.2/squareGlow.png');
        
        this.load.atlas('unity4_6_2ElephantHappy',window.baseUrl+'assets/gradeAssets/4.6.2/Elephant_Happy.png',window.baseUrl+'json/gradeJson/4.6.2/Elephant_Happy.json');
        this.load.atlas('unity4_6_2ElephantIdle',window.baseUrl+'assets/gradeAssets/4.6.2/Elephant_Idle.png',window.baseUrl+'json/gradeJson/4.6.2/Elephant_Idle.json');
        this.load.atlas('unity4_6_2MouseHappy',window.baseUrl+'assets/gradeAssets/4.6.2/Mouse_Happy.png',window.baseUrl+'json/gradeJson/4.6.2/Mouse_Happy.json');
        this.load.atlas('unity4_6_2MouseIdle',window.baseUrl+'assets/gradeAssets/4.6.2/Mouse_Idle.png',window.baseUrl+'json/gradeJson/4.6.2/Mouse_Idle.json');
        


	},

	addunitygame5_1Assets:function()
	{
		this.load.image('grade51_background',window.baseUrl+'assets/gradeAssets/unity/5.1/bg.png');
		this.load.image('grade51_bg1',window.baseUrl+'assets/gradeAssets/unity/5.1/bg1.png');
        this.load.image('grade51_boxbg', window.baseUrl+'assets/gradeAssets/unity/5.1/Boxbg.png');
        this.load.image('grade51_timebg', window.baseUrl+'assets/gradeAssets/unity/5.1/timebg.png');
        this.load.image('grade51_WhiteBox', window.baseUrl+'assets/gradeAssets/unity/5.1/WhiteBox.png');
        this.load.image('grade51_TopBar', window.baseUrl+'assets/gradeAssets/unity/5.1/Topbar.png');
        this.load.image('grade51_dottedBox', window.baseUrl+'assets/gradeAssets/unity/5.1/dottedBox.png');
        this.load.image('grade51_plusSign', window.baseUrl+'assets/gradeAssets/unity/5.1/plusSign.png');
        this.load.image('grade51_equalSymbol', window.baseUrl+'assets/gradeAssets/unity/5.1/equalSymbol.png');
        this.load.atlas('grade51_carrotsAnim',window.baseUrl+'assets/gradeAssets/unity/5.1/carrotsAnim.png' ,window.baseUrl+'json/gradeJson/unity/5.1/carrotsAnim.json');
        this.load.atlas('grade51_RabitAnim',window.baseUrl+'assets/gradeAssets/unity/5.1/RabitAnim.png' ,window.baseUrl+'json/gradeJson/unity/5.1/RabitAnim.json');
        this.load.atlas('grade51_calNum',window.baseUrl+'assets/gradeAssets/unity/5.1/calNum.png' ,window.baseUrl+'json/gradeJson/unity/5.1/calNum.json');
        this.load.atlas('grade51_greenNumbers',window.baseUrl+'assets/gradeAssets/unity/5.1/greenNumbers.png' ,window.baseUrl+'json/gradeJson/unity/5.1/greenNumbers.json');
        this.load.atlas('grade51_carrot',window.baseUrl+'assets/gradeAssets/unity/5.1/carrot.png' ,window.baseUrl+'json/gradeJson/unity/5.1/carrot.json');
        this.load.atlas('grade51_greenNumbers1',window.baseUrl+'assets/gradeAssets/unity/5.1/greenNumbers1.png' ,window.baseUrl+'json/gradeJson/unity/5.1/greenNumbers1.json');
        this.load.atlas('grade51_txtbox',window.baseUrl+'assets/gradeAssets/unity/5.1/txtbox.png' ,window.baseUrl+'json/gradeJson/unity/5.1/txtbox.json');
        this.load.atlas('grade51_tick',window.baseUrl+'assets/gradeAssets/unity/5.1/tick.png' ,window.baseUrl+'json/gradeJson/unity/5.1/tick.json');
        this.load.atlas('grade51_eraser',window.baseUrl+'assets/gradeAssets/unity/5.1/eraser.png' ,window.baseUrl+'json/gradeJson/unity/5.1/eraser.json');
        this.load.atlas('grade51_thinkingCloud',window.baseUrl+'assets/gradeAssets/unity/5.1/thinkingCloud.png',window.baseUrl+'json/gradeJson/unity/5.1/thinkingCloud.json');
        this.load.atlas('grade51_backbtn',window.baseUrl+'assets/gradeAssets/unity/5.1/backbtn.png' ,window.baseUrl+'json/gradeJson/unity/5.1/backbtn.json');
        this.load.atlas('grade51_speaker',window.baseUrl+'assets/gradeAssets/unity/5.1/speaker.png' ,window.baseUrl+'json/gradeJson/unity/5.1/speaker.json');
        this.load.atlas('grade51_starAnim',window.baseUrl+'assets/gradeAssets/unity/5.1/starAnim.png',window.baseUrl+'json/gradeJson/unity/5.1/starAnim.json');
        this.load.atlas('grade51_btn',window.baseUrl+'assets/gradeAssets/unity/5.1/btn.png',window.baseUrl+'json/gradeJson/unity/5.1/btn.json');
        this.load.image('grade51_tittleBar', window.baseUrl+'assets/gradeAssets/unity/5.1/tittleBar.png');
        this.load.atlas('grade51_replay', window.baseUrl+'assets/gradeAssets/unity/5.1/reply.png', window.baseUrl+'json/gradeJson/unity/5.1/reply.json');



	},

	addunitygame6_1Assets:function()
	{
		this.load.image('grade61_background',window.baseUrl+'assets/gradeAssets/unity/6.1/bg.png');
        this.load.image('grade61_bg1',window.baseUrl+'assets/gradeAssets/unity/6.1/bg1.png');
        this.load.image('grade61_boxbg', window.baseUrl+'assets/gradeAssets/unity/6.1/Boxbg.png');
        this.load.image('grade61_timebg', window.baseUrl+'assets/gradeAssets/unity/6.1/timebg.png');
        this.load.image('grade61_WhiteBox', window.baseUrl+'assets/gradeAssets/unity/6.1/WhiteBox.png');
        this.load.image('grade61_TopBar', window.baseUrl+'assets/gradeAssets/unity/6.1/Topbar.png');
        this.load.image('grade61_bottomBar', window.baseUrl+'assets/gradeAssets/unity/6.1/bottomBar.png');
        this.load.image('grade61_dottedBox', window.baseUrl+'assets/gradeAssets/unity/6.1/dottedBox.png');
        this.load.image('grade61_plusSign', window.baseUrl+'assets/gradeAssets/unity/6.1/plusSign.png');
        this.load.image('grade61_equalSymbol', window.baseUrl+'assets/gradeAssets/unity/6.1/equalSymbol.png');
        this.load.atlas('grade61_carrotsAnim',window.baseUrl+'assets/gradeAssets/unity/6.1/carrotsAnim.png' ,window.baseUrl+'json/gradeJson/unity/6.1/carrotsAnim.json');
        this.load.atlas('grade61_RabitAnim',window.baseUrl+'assets/gradeAssets/unity/6.1/RabitAnim.png' ,window.baseUrl+'json/gradeJson/unity/6.1/RabitAnim.json');
        this.load.atlas('grade61_calNum',window.baseUrl+'assets/gradeAssets/unity/6.1/calNum.png' ,window.baseUrl+'json/gradeJson/unity/6.1/calNum.json');
        this.load.atlas('grade61_greenNumbers',window.baseUrl+'assets/gradeAssets/unity/6.1/greenNumbers.png' ,window.baseUrl+'json/gradeJson/unity/6.1/greenNumbers.json');
        this.load.atlas('grade61_carrot',window.baseUrl+'assets/gradeAssets/unity/6.1/carrot.png' ,window.baseUrl+'json/gradeJson/unity/6.1/carrot.json');
        this.load.atlas('grade61_greenNumbers1',window.baseUrl+'assets/gradeAssets/unity/6.1/greenNumbers1.png' ,window.baseUrl+'json/gradeJson/unity/6.1/greenNumbers1.json');
        this.load.atlas('grade61_greenNumbers2',window.baseUrl+'assets/gradeAssets/unity/6.1/greenNumbers2.png' ,window.baseUrl+'json/gradeJson/unity/6.1/greenNumbers2.json');
        this.load.atlas('grade61_txtbox',window.baseUrl+'assets/gradeAssets/unity/6.1/txtbox.png' ,window.baseUrl+'json/gradeJson/unity/6.1/txtbox.json');
        this.load.atlas('grade61_tick',window.baseUrl+'assets/gradeAssets/unity/6.1/tick.png' ,window.baseUrl+'json/gradeJson/unity/6.1/tick.json');
        this.load.atlas('grade61_eraser',window.baseUrl+'assets/gradeAssets/unity/6.1/eraser.png' ,window.baseUrl+'json/gradeJson/unity/6.1/eraser.json');
        this.load.atlas('grade61_thinkingCloud',window.baseUrl+'assets/gradeAssets/unity/6.1/thinkingCloud.png',window.baseUrl+'json/gradeJson/unity/6.1/thinkingCloud.json');
        this.load.atlas('grade61_backbtn',window.baseUrl+'assets/gradeAssets/unity/6.1/backbtn.png' ,window.baseUrl+'json/gradeJson/unity/6.1/backbtn.json');
        this.load.atlas('grade61_speaker',window.baseUrl+'assets/gradeAssets/unity/6.1/speaker.png' ,window.baseUrl+'json/gradeJson/unity/6.1/speaker.json');
        this.load.atlas('grade61_starAnim',window.baseUrl+'assets/gradeAssets/unity/6.1/starAnim.png',window.baseUrl+'json/gradeJson/unity/6.1/starAnim.json');
        this.load.atlas('grade61_btn',window.baseUrl+'assets/gradeAssets/unity/6.1/btn.png',window.baseUrl+'json/gradeJson/unity/6.1/btn.json');
        this.load.image('grade61_tittleBar', window.baseUrl+'assets/gradeAssets/unity/6.1/tittleBar.png');
        this.load.atlas('grade61_replay', window.baseUrl+'assets/gradeAssets/unity/6.1/reply.png', window.baseUrl+'json/gradeJson/unity/6.1/reply.json');


	},

	addunitygame7_2_1Assets:function()
	{
		this.load.image('Level721_bg1',window.baseUrl+'assets/gradeAssets/7.2.1/Bg10008.png');
		this.load.image('Level321_bg1',window.baseUrl+'assets/gradeAssets/3.2.1/BG.png');
        this.load.image('Level723_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        this.load.atlas('Level321_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        
        this.load.image('Level721_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level721_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.atlas('Level721_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.atlas('Level721_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
        
        this.load.image('Level723_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level723_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.atlas('Level723_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.atlas('Level723_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
       
        this.load.image('Level722_bg1',window.baseUrl+'assets/gradeAssets/7.2.1/Bg10008.png');
        this.load.image('Level723_bg1',window.baseUrl+'assets/gradeAssets/7.2.1/Bg10008.png');
		
        _this.load.atlas('Level722_CommonBackBtn',window.baseUrl+'assets/commonAssets/newBackBtn.png',window.baseUrl+'assets/commonAssets/newBackBtn.json');
		
        this.load.image('Level722_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level722_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.atlas('Level722_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.atlas('Level722_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
        


        this.load.atlas('Level721_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1 anim.json');
        this.load.atlas('Level721_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10 anim.json');
        this.load.atlas('Level721_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverBlue.json');
        this.load.atlas('Level721_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverGreen.json');
        this.load.atlas('Level721_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverYellow.json');
        //this.load.atlas('Level721_numberBig',window.baseUrl+'assets/gradeAssets/7.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBig.json');
        this.load.atlas('Level721_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberSmall.json');
        this.load.atlas('Level721_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberVSmall.json');
        this.load.atlas('Level721_numberBox',window.baseUrl+'assets/gradeAssets/7.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBox.json');
        this.load.atlas('Level721_Coin1',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1.json');
        this.load.atlas('Level721_Coin10',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10.json');
        this.load.atlas('Level721_erase',window.baseUrl+'assets/gradeAssets/7.2.1/erase.png' ,window.baseUrl+'json/gradeJson/7.2.1/erase.json');
        this.load.atlas('Level721_rightmark',window.baseUrl+'assets/gradeAssets/7.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.1/rightmark.json');
        this.load.atlas('Level721_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.1/numbers.json');
        
        this.load.image('Level721_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
      
        this.load.image('Level721_pannel1',window.baseUrl+'assets/gradeAssets/7.2.1/1.png');
        this.load.image('Level721_numBG',window.baseUrl+'assets/gradeAssets/7.2.1/b2.png');
        this.load.image('Level721_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        
        this.load.atlas('Level721_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/yellowcoinreverse.json');
        
        this.load.image('Level721_coindrag',window.baseUrl+'assets/gradeAssets/7.2.1/coindrag.png');
        this.load.atlas('Level721_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.1/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.1/coininsertbox.json');
        this.load.image('Level721_bluecoin',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoin.png');
        this.load.image('Level721_glow',window.baseUrl+'assets/gradeAssets/7.2.1/glow.png');
        
       
        this.load.atlas('Level721_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.1/1-100.json');



        
        this.load.atlas('Level722_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1 anim.json');
        this.load.atlas('Level722_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10 anim.json');
        this.load.atlas('Level722_coin100Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100 anim.json');
        this.load.atlas('Level722_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverBlue.json');
        this.load.atlas('Level722_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverGreen.json');
        this.load.atlas('Level722_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverYellow.json');
        //this.load.atlas('Level722_numberBig',window.baseUrl+'assets/gradeAssets/7.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBig.json');
        this.load.atlas('Level722_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberSmall.json');
        this.load.atlas('Level722_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberVSmall.json');
        this.load.atlas('Level722_numberBox',window.baseUrl+'assets/gradeAssets/7.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBox.json');
        this.load.atlas('Level722_Coin1',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1.json');
        this.load.atlas('Level722_Coin10',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10.json');
        this.load.atlas('Level722_Coin100',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100.json');
        this.load.atlas('Level722_erase',window.baseUrl+'assets/gradeAssets/7.2.1/erase.png' ,window.baseUrl+'json/gradeJson/7.2.1/erase.json');
        this.load.atlas('Level722_rightmark',window.baseUrl+'assets/gradeAssets/7.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.1/rightmark.json');
        this.load.atlas('Level722_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.1/numbers.json');
        
        this.load.image('Level722_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
        this.load.image('Level722_pannel1',window.baseUrl+'assets/gradeAssets/7.2.1/1.png');
        this.load.image('Level722_numBG',window.baseUrl+'assets/gradeAssets/7.2.1/b2.png');
        this.load.image('Level722_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        
        this.load.atlas('Level722_bluecoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/bluecoinreverse.json');
        this.load.atlas('Level722_greencoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/greencoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/greencoinreverse.json');
        this.load.atlas('Level722_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/yellowcoinreverse.json');
        
        this.load.image('Level722_coindrag',window.baseUrl+'assets/gradeAssets/7.2.1/coindrag.png');
        this.load.atlas('Level722_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.1/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.1/coininsertbox.json');
        this.load.image('Level722_bluecoindrag',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoin.png');
        this.load.image('Level722_glow',window.baseUrl+'assets/gradeAssets/7.2.1/glow.png');
        
       
        this.load.atlas('Level722_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.1/1-100.json');
        


        
        this.load.atlas('Level723_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1 anim.json');
        this.load.atlas('Level723_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10 anim.json');
        this.load.atlas('Level723_coin100Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100 anim.json');
        this.load.atlas('Level723_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverBlue.json');
        this.load.atlas('Level723_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverGreen.json');
        this.load.atlas('Level723_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverYellow.json');
        //this.load.atlas('Level723_numberBig',window.baseUrl+'assets/gradeAssets/7.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBig.json');
        this.load.atlas('Level723_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberSmall.json');
        this.load.atlas('Level723_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberVSmall.json');
        this.load.atlas('Level723_numberBox',window.baseUrl+'assets/gradeAssets/7.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBox.json');
        this.load.atlas('Level723_Coin1',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1.json');
        this.load.atlas('Level723_Coin10',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10.json');
        this.load.atlas('Level723_Coin100',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100.json');
        this.load.atlas('Level723_erase',window.baseUrl+'assets/gradeAssets/7.2.1/erase.png' ,window.baseUrl+'json/gradeJson/7.2.1/erase.json');
        this.load.atlas('Level723_rightmark',window.baseUrl+'assets/gradeAssets/7.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.1/rightmark.json');
        this.load.atlas('Level723_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.1/numbers.json');
        
        this.load.image('Level723_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
        this.load.image('Level723_pannel1',window.baseUrl+'assets/gradeAssets/7.2.1/1.png');
        this.load.image('Level723_numBG',window.baseUrl+'assets/gradeAssets/7.2.1/b2.png');
        this.load.image('Level723_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        
        this.load.atlas('Level723_bluecoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/bluecoinreverse.json');
        this.load.atlas('Level723_greencoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/greencoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/greencoinreverse.json');
        this.load.atlas('Level723_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/yellowcoinreverse.json');
        
        this.load.image('Level723_coindrag',window.baseUrl+'assets/gradeAssets/7.2.1/coindrag.png');
        this.load.atlas('Level723_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.1/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.1/coininsertbox.json');
        this.load.image('Level723_bluecoindrag',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoin.png');
        this.load.image('Level723_glow',window.baseUrl+'assets/gradeAssets/7.2.1/glow.png');

        this.load.atlas('Level723_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.1/1-100.json');
        
	},

	addunitygame7_2_2Assets:function()
	{
		
		this.load.image('Level722_bg1',window.baseUrl+'assets/gradeAssets/7.2.2/commonAssets/BG.png');
        this.load.atlas('Level722_CommonBackBtn',window.baseUrl+'assets/gradeAssets/7.2.2/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/7.2.2/backbtn.json');
        this.load.atlas('Level722_CommonSpeakerBtn',window.baseUrl+'assets/gradeAssets/7.2.2/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/7.2.2/speaker.json');
        this.load.atlas('Level722_starAnim',window.baseUrl+'assets/gradeAssets/7.2.2/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/7.2.2/starAnim.json');
        this.load.atlas('Level722_btn',window.baseUrl+'assets/gradeAssets/7.2.2/commonAssets/btn.png',window.baseUrl+'json/gradeJson/7.2.2/btn.json');
        this.load.image('Level722_bg3',window.baseUrl+'assets/gradeAssets/7.2.2/commonAssets/bg3.png');
        this.load.image('Level722_tittleBaar',window.baseUrl+'assets/gradeAssets/7.2.2/commonAssets/tittleBaar.png');
        this.load.atlas('Level722_replay',window.baseUrl+'assets/gradeAssets/7.2.2/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/7.2.2/reply.json');
        
        
        this.load.atlas('Level722_tickBtn',window.baseUrl+'assets/gradeAssets/7.2.2/commonAssets/tick.png' ,window.baseUrl+'json/gradeJson/7.2.2/tick.json');
        this.load.image('Level722_navBar',window.baseUrl+'assets/gradeAssets/7.2.2/commonAssets/navBar.png');
        this.load.image('Level722_practice',window.baseUrl+'assets/gradeAssets/7.2.2/practice.png');
        this.load.image('Level722_topicOutline',window.baseUrl+'assets/gradeAssets/7.2.2/commonAssets/topicOutline.png');
        this.load.image('Level722_timebg',window.baseUrl+'assets/gradeAssets/7.2.2/commonAssets/timebg.png');

        
        this.load.atlas('Level722_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.2/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.2/Coin 1 anim.json');
        this.load.atlas('Level722_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.2/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.2/Coin 10 anim.json');
        this.load.atlas('Level722_coin100Anim',window.baseUrl+'assets/gradeAssets/7.2.2/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/7.2.2/Coin 100 anim.json');
        this.load.atlas('Level722_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.2/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.2/LeverBlue.json');
        this.load.atlas('Level722_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.2/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.2/LeverGreen.json');
        this.load.atlas('Level722_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.2/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.2/LeverYellow.json');
        //this.load.atlas('Level722_numberBig',window.baseUrl+'assets/gradeAssets/7.2.2/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.2/numberBig.json');
        this.load.atlas('Level722_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.2/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.2/numberSmall.json');
        this.load.atlas('Level722_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.2/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.2/numberVSmall.json');
        this.load.atlas('Level722_numberBox',window.baseUrl+'assets/gradeAssets/7.2.2/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.2/numberBox.json');
        this.load.atlas('Level722_Coin1',window.baseUrl+'assets/gradeAssets/7.2.2/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.2/Coin 1.json');
        this.load.atlas('Level722_Coin10',window.baseUrl+'assets/gradeAssets/7.2.2/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.2/Coin 10.json');
        this.load.atlas('Level722_Coin100',window.baseUrl+'assets/gradeAssets/7.2.2/Coin 100.png' ,window.baseUrl+'json/gradeJson/7.2.2/Coin 100.json');
        this.load.atlas('Level722_erase',window.baseUrl+'assets/gradeAssets/7.2.2/erase.png' ,window.baseUrl+'json/gradeJson/7.2.2/erase.json');
        this.load.atlas('Level722_rightmark',window.baseUrl+'assets/gradeAssets/7.2.2/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.2/rightmark.json');
        this.load.atlas('Level722_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.2/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.2/numbers.json');
        
        this.load.image('Level722_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.2/coinMachinePannel.png');
        this.load.image('Level722_pannel1',window.baseUrl+'assets/gradeAssets/7.2.2/1.png');
        this.load.image('Level722_numBG',window.baseUrl+'assets/gradeAssets/7.2.2/b2.png');
        this.load.image('Level722_plusSign',window.baseUrl+'assets/gradeAssets/7.2.2/plusSign.png');
        
        this.load.atlas('Level722_bluecoinreverse',window.baseUrl+'assets/gradeAssets/7.2.2/bluecoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.2/bluecoinreverse.json');
        this.load.atlas('Level722_greencoinreverse',window.baseUrl+'assets/gradeAssets/7.2.2/greencoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.2/greencoinreverse.json');
        this.load.atlas('Level722_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.2/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.2/yellowcoinreverse.json');
        
        this.load.image('Level722_coindrag',window.baseUrl+'assets/gradeAssets/7.2.2/coindrag.png');
        this.load.atlas('Level722_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.2/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.2/coininsertbox.json');
        this.load.image('Level722_bluecoindrag',window.baseUrl+'assets/gradeAssets/7.2.2/bluecoin.png');
        this.load.image('Level722_glow',window.baseUrl+'assets/gradeAssets/7.2.2/glow.png');
        
       
        this.load.atlas('Level722_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.2/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.2/1-100.json');
	},

	addunitygame7_2_3Assets:function()
	{
		
		this.load.image('Level723_bg1',window.baseUrl+'assets/gradeAssets/7.2.3/commonAssets/BG.png');
        this.load.atlas('Level723_CommonBackBtn',window.baseUrl+'assets/gradeAssets/7.2.3/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/7.2.3/backbtn.json');
        this.load.atlas('Level723_CommonSpeakerBtn',window.baseUrl+'assets/gradeAssets/7.2.3/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/7.2.3/speaker.json');
        this.load.atlas('Level723_starAnim',window.baseUrl+'assets/gradeAssets/7.2.3/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/7.2.3/starAnim.json');
        this.load.atlas('Level723_btn',window.baseUrl+'assets/gradeAssets/7.2.3/commonAssets/btn.png',window.baseUrl+'json/gradeJson/7.2.3/btn.json');
        this.load.image('Level723_bg3',window.baseUrl+'assets/gradeAssets/7.2.3/commonAssets/bg3.png');
        this.load.image('Level723_tittleBaar',window.baseUrl+'assets/gradeAssets/7.2.3/commonAssets/tittleBaar.png');
        this.load.atlas('Level723_replay',window.baseUrl+'assets/gradeAssets/7.2.3/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/7.2.3/reply.json');
        
        
        this.load.atlas('Level723_tickBtn',window.baseUrl+'assets/gradeAssets/7.2.3/commonAssets/tick.png' ,window.baseUrl+'json/gradeJson/7.2.3/tick.json');
        this.load.image('Level723_navBar',window.baseUrl+'assets/gradeAssets/7.2.3/commonAssets/navBar.png');
        this.load.image('Level723_practice',window.baseUrl+'assets/gradeAssets/7.2.3/practice.png');
        this.load.image('Level723_topicOutline',window.baseUrl+'assets/gradeAssets/7.2.3/commonAssets/topicOutline.png');
        this.load.image('Level723_timebg',window.baseUrl+'assets/gradeAssets/7.2.3/commonAssets/timebg.png');

        
        this.load.atlas('Level723_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.3/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.3/Coin 1 anim.json');
        this.load.atlas('Level723_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.3/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.3/Coin 10 anim.json');
        this.load.atlas('Level723_coin100Anim',window.baseUrl+'assets/gradeAssets/7.2.3/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/7.2.3/Coin 100 anim.json');
        this.load.atlas('Level723_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.3/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.3/LeverBlue.json');
        this.load.atlas('Level723_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.3/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.3/LeverGreen.json');
        this.load.atlas('Level723_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.3/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.3/LeverYellow.json');
        //this.load.atlas('Level723_numberBig',window.baseUrl+'assets/gradeAssets/7.2.3/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.3/numberBig.json');
        this.load.atlas('Level723_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.3/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.3/numberSmall.json');
        this.load.atlas('Level723_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.3/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.3/numberVSmall.json');
        this.load.atlas('Level723_numberBox',window.baseUrl+'assets/gradeAssets/7.2.3/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.3/numberBox.json');
        this.load.atlas('Level723_Coin1',window.baseUrl+'assets/gradeAssets/7.2.3/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.3/Coin 1.json');
        this.load.atlas('Level723_Coin10',window.baseUrl+'assets/gradeAssets/7.2.3/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.3/Coin 10.json');
        this.load.atlas('Level723_Coin100',window.baseUrl+'assets/gradeAssets/7.2.3/Coin 100.png' ,window.baseUrl+'json/gradeJson/7.2.3/Coin 100.json');
        this.load.atlas('Level723_erase',window.baseUrl+'assets/gradeAssets/7.2.3/erase.png' ,window.baseUrl+'json/gradeJson/7.2.3/erase.json');
        this.load.atlas('Level723_rightmark',window.baseUrl+'assets/gradeAssets/7.2.3/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.3/rightmark.json');
        this.load.atlas('Level723_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.3/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.3/numbers.json');
        
        this.load.image('Level723_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.3/coinMachinePannel.png');
        this.load.image('Level723_pannel1',window.baseUrl+'assets/gradeAssets/7.2.3/1.png');
        this.load.image('Level723_numBG',window.baseUrl+'assets/gradeAssets/7.2.3/b2.png');
        this.load.image('Level723_plusSign',window.baseUrl+'assets/gradeAssets/7.2.3/plusSign.png');
        
        this.load.atlas('Level723_bluecoinreverse',window.baseUrl+'assets/gradeAssets/7.2.3/bluecoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.3/bluecoinreverse.json');
        this.load.atlas('Level723_greencoinreverse',window.baseUrl+'assets/gradeAssets/7.2.3/greencoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.3/greencoinreverse.json');
        this.load.atlas('Level723_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.3/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.3/yellowcoinreverse.json');
        
        this.load.image('Level723_coindrag',window.baseUrl+'assets/gradeAssets/7.2.3/coindrag.png');
        this.load.atlas('Level723_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.3/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.3/coininsertbox.json');
        this.load.image('Level723_bluecoindrag',window.baseUrl+'assets/gradeAssets/7.2.3/bluecoin.png');
        this.load.image('Level723_glow',window.baseUrl+'assets/gradeAssets/7.2.3/glow.png');

        this.load.atlas('Level723_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.3/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.3/1-100.json');
	},

	addunitygame8_1Assets:function()
	{
		this.load.image('grade81_background',window.baseUrl+'assets/gradeAssets/8.1/bg.png');
		this.load.image('grade81_bg1',window.baseUrl+'assets/gradeAssets/8.1/bg1.png');
        this.load.image('grade81_boxbg', window.baseUrl+'assets/gradeAssets/8.1/Boxbg.png');
        this.load.image('grade81_timebg', window.baseUrl+'assets/gradeAssets/8.1/timebg.png');
        this.load.image('grade81_WhiteBox', window.baseUrl+'assets/gradeAssets/8.1/WhiteBox.png');
        this.load.image('grade81_TopBar', window.baseUrl+'assets/gradeAssets/8.1/Topbar.png');
        this.load.image('grade81_bottomBar', window.baseUrl+'assets/gradeAssets/8.1/bottomBar.png');
        this.load.image('grade81_dottedBox', window.baseUrl+'assets/gradeAssets/8.1/dottedBox.png');
        this.load.image('grade81_minusSign', window.baseUrl+'assets/gradeAssets/8.1/minusSign.png');
        this.load.image('grade81_equalSymbol', window.baseUrl+'assets/gradeAssets/8.1/equalSymbol.png');
        this.load.atlas('grade81_carrotsAnim',window.baseUrl+'assets/gradeAssets/8.1/carrotsAnim.png' ,window.baseUrl+'json/gradeJson/8.1/carrotsAnim.json');
        this.load.atlas('grade81_RabitAnim',window.baseUrl+'assets/gradeAssets/8.1/RabitAnim.png' ,window.baseUrl+'json/gradeJson/8.1/RabitAnim.json');
        this.load.atlas('grade81_calNum',window.baseUrl+'assets/gradeAssets/8.1/calNum.png' ,window.baseUrl+'json/gradeJson/8.1/calNum.json');
        this.load.atlas('grade81_greenNumbers',window.baseUrl+'assets/gradeAssets/8.1/greenNumbers.png' ,window.baseUrl+'json/gradeJson/8.1/greenNumbers.json');
        this.load.atlas('grade81_carrot',window.baseUrl+'assets/gradeAssets/8.1/carrot.png' ,window.baseUrl+'json/gradeJson/8.1/carrot.json');
        this.load.atlas('grade81_greenNumbers1',window.baseUrl+'assets/gradeAssets/8.1/greenNumbers1.png' ,window.baseUrl+'json/gradeJson/8.1/greenNumbers1.json');
        this.load.atlas('grade81_greenNumbers2',window.baseUrl+'assets/gradeAssets/8.1/greenNumbers2.png' ,window.baseUrl+'json/gradeJson/8.1/greenNumbers2.json');
        this.load.atlas('grade81_txtbox',window.baseUrl+'assets/gradeAssets/8.1/txtbox.png' ,window.baseUrl+'json/gradeJson/8.1/txtbox.json');
        this.load.atlas('grade81_tick',window.baseUrl+'assets/gradeAssets/8.1/tick.png' ,window.baseUrl+'json/gradeJson/8.1/tick.json');
        this.load.atlas('grade81_eraser',window.baseUrl+'assets/gradeAssets/8.1/eraser.png' ,window.baseUrl+'json/gradeJson/8.1/eraser.json');
        this.load.atlas('grade81_thinkingCloud',window.baseUrl+'assets/gradeAssets/8.1/thinkingCloud.png',window.baseUrl+'json/gradeJson/8.1/thinkingCloud.json');
        this.load.atlas('grade81_backbtn',window.baseUrl+'assets/gradeAssets/8.1/backbtn.png' ,window.baseUrl+'json/gradeJson/8.1/backbtn.json');
        this.load.atlas('grade81_speaker',window.baseUrl+'assets/gradeAssets/8.1/speaker.png' ,window.baseUrl+'json/gradeJson/8.1/speaker.json');
        this.load.atlas('grade81_starAnim',window.baseUrl+'assets/gradeAssets/8.1/starAnim.png',window.baseUrl+'json/gradeJson/8.1/starAnim.json');
        this.load.atlas('grade81_btn',window.baseUrl+'assets/gradeAssets/8.1/btn.png',window.baseUrl+'json/gradeJson/8.1/btn.json');
        this.load.image('grade81_tittleBar', window.baseUrl+'assets/gradeAssets/8.1/tittleBar.png');
        this.load.atlas('grade81_replay', window.baseUrl+'assets/gradeAssets/8.1/reply.png', window.baseUrl+'json/gradeJson/8.1/reply.json');
	},

	addunitygame10_1_1Assets:function()
	{
		
        this.load.image('Level321_topic',window.baseUrl+'assets/gradeAssets/3.2.1/topic.png');
        this.load.image('Level321_practice',window.baseUrl+'assets/gradeAssets/3.2.1/practice.png');
        this.load.image('Level321_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level321_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Level321_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');

        
        //this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');
         this.load.atlas('Level321_coin1Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1 anim.json');
        this.load.atlas('Level321_coin10Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10 anim.json');
        this.load.atlas('Level321_coin100Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100 anim.json');
        this.load.atlas('Level321_numberSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall.json');
        this.load.atlas('Level321_numberVSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberVSmall.json');
        this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');

        this.load.atlas('Level321_numberBox',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox.json');
        this.load.atlas('Level321_numberBox1',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox-old.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox-old.json');

        this.load.atlas('Level321_Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1.json');
        this.load.atlas('Level321_Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10.json');
        this.load.atlas('Level321_Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100.json');
        this.load.atlas('Level321_erase',window.baseUrl+'assets/gradeAssets/3.2.1/erase.png' ,window.baseUrl+'json/gradeJson/3.2.1/erase.json');
        this.load.atlas('Level321_rightmark',window.baseUrl+'assets/gradeAssets/3.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/3.2.1/rightmark.json');
        this.load.atlas('Level321_NumberKey',window.baseUrl+'assets/gradeAssets/3.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/3.2.1/numbers.json');
        
        this.load.atlas('Level321_OneToHundred',window.baseUrl+'assets/gradeAssets/3.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/3.2.1/1-100.json');
        
        this.load.atlas('Level1011_coinDecrease',window.baseUrl+'assets/gradeAssets/3.2.1/coinDec.png' ,window.baseUrl+'json/gradeJson/3.2.1/coinDec.json');
        this.load.atlas('Level1011_coinExchange',window.baseUrl+'assets/gradeAssets/3.2.1/exchange.png' ,window.baseUrl+'json/gradeJson/3.2.1/exchange.json');
        
        this.load.image('Level1011_BlueCoin',window.baseUrl+'assets/gradeAssets/3.2.1/blueSingleCoin.png');
        this.load.image('Level1011_GreenCoin',window.baseUrl+'assets/gradeAssets/3.2.1/greenSingleCoin.png');
        this.load.image('Level1011_YellowCoin',window.baseUrl+'assets/gradeAssets/3.2.1/yellowSingleCoin.png');
        this.load.image('Level1011_Minus',window.baseUrl+'assets/gradeAssets/3.2.1/minus.png');
        
        this.load.image('Level321_coinMachinePannel',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel.png');
        this.load.image('Level321_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel10.png');
        this.load.image('Level321_pannel3_2_1',window.baseUrl+'assets/gradeAssets/3.2.1/pannel.png');
        this.load.image('Level321_numBG',window.baseUrl+'assets/gradeAssets/3.2.1/b2.png');

        this.load.atlas('Level321_LeverBlue',window.baseUrl+'assets/gradeAssets/3.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverBlue.json');
        this.load.atlas('Level321_LeverGreen',window.baseUrl+'assets/gradeAssets/3.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverGreen.json');
        this.load.atlas('Level321_LeverYellow',window.baseUrl+'assets/gradeAssets/3.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverYellow.json');


        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

        this.load.image('placeValuePanel',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValuePanel1.png');
        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

         this.load.image('Level322_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel322.png');


      //  this.load.image('PlaceValueNumberPanel1',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValueNumberPanel1.png');

       // this.load.atlas('Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin1.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.json');
  		//this.load.atlas('Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin10.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.json');
   		//this.load.atlas('Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin100.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.json');

   		this.load.image('Level321_coinMachinePannel17_2',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel17_2.png');
   		this.load.atlas('Level321_numberSmall17_2',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall17_2.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall17_2.json');
   		this.load.atlas('Level172_slot',window.baseUrl+'assets/gradeAssets/3.2.1/slot.png' ,window.baseUrl+'json/gradeJson/3.2.1/slot.json');
        this.load.atlas('Level172_ansbox',window.baseUrl+'assets/gradeAssets/3.2.1/4.png' ,window.baseUrl+'json/gradeJson/3.2.1/4.json');
        this.load.image('Level172_div',window.baseUrl+'assets/gradeAssets/3.2.1/6.png');
        this.load.image('Level172_tray',window.baseUrl+'assets/gradeAssets/3.2.1/tray.png');
        this.load.image('Level321_5',window.baseUrl+'assets/gradeAssets/3.2.1/5.png');
	},



	addunitygame11_1Assets:function()
	{

		_this.load.atlas('unity11_1starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity11_1topbar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity11_1timerbg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity11_1speaker',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');



		this.load.image('unity11_1backg',window.baseUrl+'assets/gradeAssets/11.1/backg.png');
		this.load.atlas('unity11_1erase', window.baseUrl+'assets/gradeAssets/11.1/erase.png', window.baseUrl+'json/gradeJson/11.1/erase.json');
        this.load.atlas('unity11_1mul', window.baseUrl+'assets/gradeAssets/11.1/mul.png', window.baseUrl+'json/gradeJson/11.1/mul.json');
        this.load.atlas('unity11_1numberpad', window.baseUrl+'assets/gradeAssets/11.1/numberpad.png', window.baseUrl+'json/gradeJson/11.1/numberpad.json');
        this.load.atlas('unity11_1numbers', window.baseUrl+'assets/gradeAssets/11.1/numbers.png', window.baseUrl+'json/gradeJson/11.1/numbers.json');
        this.load.atlas('unity11_1apple',window.baseUrl+'assets/gradeAssets/11.1/apple.png' ,window.baseUrl+'json/gradeJson/11.1/apple.json');
        this.load.atlas('unity11_1rightmark',window.baseUrl+'assets/gradeAssets/11.1/rightmark.png',window.baseUrl+'json/gradeJson/11.1/rightmark.json');
        
        this.load.image('unity11_1b2', window.baseUrl+'assets/gradeAssets/11.1/b2.png');
        this.load.image('unity11_1a1', window.baseUrl+'assets/gradeAssets/11.1/a1.png');
        this.load.image('unity11_1a2', window.baseUrl+'assets/gradeAssets/11.1/a2.png');
        this.load.image('unity11_1a3', window.baseUrl+'assets/gradeAssets/11.1/a3.png');
        this.load.image('unity11_1ansbox', window.baseUrl+'assets/gradeAssets/11.1/ansbox.png');
        this.load.image('unity11_1apple1', window.baseUrl+'assets/gradeAssets/11.1/apple1.png');
        this.load.image('unity11_1apple2', window.baseUrl+'assets/gradeAssets/11.1/apple2.png');
        this.load.image('unity11_1apple3', window.baseUrl+'assets/gradeAssets/11.1/apple3.png');
        this.load.image('unity11_1box', window.baseUrl+'assets/gradeAssets/11.1/box.png');
        this.load.image('unity11_1equal', window.baseUrl+'assets/gradeAssets/11.1/equal.png');
        this.load.image('unity11_1set', window.baseUrl+'assets/gradeAssets/11.1/set.png');
        this.load.image('unity11_1plus', window.baseUrl+'assets/gradeAssets/11.1/plus.png'); 

        _this.load.atlas('unity11_2starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity11_2topbar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity11_2timerbg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity11_2speaker',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');



                this.load.image('unity11_2backg',window.baseUrl+'assets/gradeAssets/11.1/backg.png');
                this.load.atlas('unity11_2erase', window.baseUrl+'assets/gradeAssets/11.1/erase.png', window.baseUrl+'json/gradeJson/11.1/erase.json');
        this.load.atlas('unity11_2mul', window.baseUrl+'assets/gradeAssets/11.1/mul.png', window.baseUrl+'json/gradeJson/11.1/mul.json');
        this.load.atlas('unity11_2numberpad', window.baseUrl+'assets/gradeAssets/11.1/numberpad.png', window.baseUrl+'json/gradeJson/11.1/numberpad.json');
        this.load.atlas('unity11_2numbers', window.baseUrl+'assets/gradeAssets/11.1/numbers.png', window.baseUrl+'json/gradeJson/11.1/numbers.json');
        this.load.atlas('unity11_2apple',window.baseUrl+'assets/gradeAssets/11.1/apple.png' ,window.baseUrl+'json/gradeJson/11.1/apple.json');
        this.load.atlas('unity11_2rightmark',window.baseUrl+'assets/gradeAssets/11.1/rightmark.png',window.baseUrl+'json/gradeJson/11.1/rightmark.json');
        
        this.load.image('unity11_2b2', window.baseUrl+'assets/gradeAssets/11.1/b2.png');
        this.load.image('unity11_2a1', window.baseUrl+'assets/gradeAssets/11.1/a1.png');
        this.load.image('unity11_2a2', window.baseUrl+'assets/gradeAssets/11.1/a2.png');
        this.load.image('unity11_2a3', window.baseUrl+'assets/gradeAssets/11.1/a3.png');
        this.load.image('unity11_2ansbox', window.baseUrl+'assets/gradeAssets/11.1/ansbox.png');
        this.load.image('unity11_2apple1', window.baseUrl+'assets/gradeAssets/11.1/apple1.png');
        this.load.image('unity11_2apple2', window.baseUrl+'assets/gradeAssets/11.1/apple2.png');
        this.load.image('unity11_2apple3', window.baseUrl+'assets/gradeAssets/11.1/apple3.png');
        this.load.image('unity11_2box', window.baseUrl+'assets/gradeAssets/11.1/box.png');
        this.load.image('unity11_2equal', window.baseUrl+'assets/gradeAssets/11.1/equal.png');
        this.load.image('unity11_2set', window.baseUrl+'assets/gradeAssets/11.1/set.png');
        this.load.image('unity11_2plus', window.baseUrl+'assets/gradeAssets/11.1/plus.png'); 
	},


	addunitygame11_2Assets:function()
	{
		 
		
        this.load.atlas('unity11_2apple',window.baseUrl+'assets/gradeAssets/11.2/apple.png' ,window.baseUrl+'json/gradeJson/11.2/apple.json');
        this.load.atlas('unity11_2backbtn',window.baseUrl+'assets/gradeAssets/11.2/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/11.2/backbtn.json');
        this.load.atlas('unity11_2speaker',window.baseUrl+'assets/gradeAssets/11.2/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/11.2/speaker.json');
		this.load.atlas('unity11_2starAnim',window.baseUrl+'assets/gradeAssets/11.2/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/11.2/starAnim.json');
        this.load.atlas('unity11_2btn',window.baseUrl+'assets/gradeAssets/11.2/commonAssets/btn.png',window.baseUrl+'json/gradeJson/11.2/btn.json');
        this.load.atlas('unity11_2replay', window.baseUrl+'assets/gradeAssets/11.2/commonAssets/reply.png', window.baseUrl+'json/gradeJson/11.2/reply.json');
        this.load.atlas('unity11_2erase', window.baseUrl+'assets/gradeAssets/11.2/erase.png', window.baseUrl+'json/gradeJson/11.2/erase.json');
        this.load.atlas('unity11_2mul', window.baseUrl+'assets/gradeAssets/11.2/mul.png', window.baseUrl+'json/gradeJson/11.2/mul.json');
        this.load.atlas('unity11_2numberpad', window.baseUrl+'assets/gradeAssets/11.2/numberpad.png', window.baseUrl+'json/gradeJson/11.2/numberpad.json');
        this.load.atlas('unity11_2numbers', window.baseUrl+'assets/gradeAssets/11.2/numbers.png', window.baseUrl+'json/gradeJson/11.2/numbers.json');
        this.load.atlas('unity11_2rightmark',window.baseUrl+'assets/gradeAssets/11.2/rightmark.png',window.baseUrl+'json/gradeJson/11.2/rightmark.json');
        
        this.load.image('unity11_2b2', window.baseUrl+'assets/gradeAssets/11.2/b2.png');
        this.load.image('unity11_2a1', window.baseUrl+'assets/gradeAssets/11.2/a1.png');
        this.load.image('unity11_2a2', window.baseUrl+'assets/gradeAssets/11.2/a2.png');
        this.load.image('unity11_2a3', window.baseUrl+'assets/gradeAssets/11.2/a3.png');
        this.load.image('unity11_2ansbox', window.baseUrl+'assets/gradeAssets/11.2/ansbox.png');
        this.load.image('unity11_2apple1', window.baseUrl+'assets/gradeAssets/11.2/apple1.png');
        this.load.image('unity11_2apple2', window.baseUrl+'assets/gradeAssets/11.2/apple2.png');
        this.load.image('unity11_2apple3', window.baseUrl+'assets/gradeAssets/11.2/apple3.png');
        this.load.image('unity11_2box', window.baseUrl+'assets/gradeAssets/11.2/box.png');
        this.load.image('unity11_2equal', window.baseUrl+'assets/gradeAssets/11.2/equal.png');
        this.load.image('unity11_2set', window.baseUrl+'assets/gradeAssets/11.2/set.png');
        this.load.image('unity11_2plus', window.baseUrl+'assets/gradeAssets/11.2/plus.png');
	},

	addunitygame12_1Assets:function()
	{
		
        //game assets.
        this.load.image('Unity12_1BG_01', window.baseUrl+'assets/gradeAssets/12.1/BG_01.png');
        this.load.image('Unity12_1practice',window.baseUrl+'assets/gradeAssets/12.1/practice.png');
        this.load.image('Unity12_1topic',window.baseUrl+'assets/gradeAssets/12.1/topic.png');
       
        this.load.image('Unity12_1Egg_box', window.baseUrl+'assets/gradeAssets/12.1/Egg_box.png');
        this.load.image('Unity12_1Number_box', window.baseUrl+'assets/gradeAssets/12.1/Number_box.png');
        this.load.image('Unity12_1Multiplicationsign', window.baseUrl+'assets/gradeAssets/12.1/multiplicationsign.png');
        this.load.image('Unity12_1EqualSymbol', window.baseUrl+'assets/gradeAssets/12.1/equalSymbol.png');
        
        this.load.atlas('Unity12_1Tick', window.baseUrl+'assets/gradeAssets/12.1/tick.png', window.baseUrl+'json/gradeJson/12.1/tick.json');
        this.load.atlas('Unity12_1Egg', window.baseUrl+'assets/gradeAssets/12.1/Egg.png', window.baseUrl+'json/gradeJson/12.1/Egg.json');
        this.load.atlas('Unity12_1SmallEgg', window.baseUrl+'assets/gradeAssets/12.1/SmallEgg.png', window.baseUrl+'json/gradeJson/12.1/SmallEgg.json');
        this.load.atlas('Unity12_1Eraser', window.baseUrl+'assets/gradeAssets/12.1/eraser.png', window.baseUrl+'json/gradeJson/12.1/eraser.json');
        
        this.load.atlas('Unity12_1oneGlow', window.baseUrl+'assets/gradeAssets/12.1/oneGlow.png', window.baseUrl+'json/gradeJson/12.1/oneGlow.json');
        this.load.atlas('Unity12_1twoGlow', window.baseUrl+'assets/gradeAssets/12.1/twoGlow.png', window.baseUrl+'json/gradeJson/12.1/twoGlow.json');
        this.load.atlas('Unity12_1threeGlow', window.baseUrl+'assets/gradeAssets/12.1/threeGlow.png', window.baseUrl+'json/gradeJson/12.1/threeGlow.json');
       
        this.load.atlas('Unity12_1Numbers', window.baseUrl+'assets/gradeAssets/12.1/Numbers.png', window.baseUrl+'json/gradeJson/12.1/Numbers.json');
        this.load.atlas('Unity12_1Txtbox', window.baseUrl+'assets/gradeAssets/12.1/txtbox.png', window.baseUrl+'json/gradeJson/12.1/txtbox.json');
        this.load.atlas('Unity12_1greenNumbers', window.baseUrl+'assets/gradeAssets/12.1/greenNumbers.png', window.baseUrl+'json/gradeJson/12.1/greenNumbers.json');
        this.load.atlas('Unity12_1greenNumbers1', window.baseUrl+'assets/gradeAssets/12.1/greenNumbers1.png', window.baseUrl+'json/gradeJson/12.1/greenNumbers1.json');
	},

	addunitygame12_2Assets:function()
	{
		//this.load.image('unity12_2bg',window.baseUrl+'assets/commonAssets/BG.png');
        //this.load.image('unity12_2backg',window.baseUrl+'assets/commonAssets/backg.png');
        //this.load.image('unity12_2topbar', window.baseUrl+'assets/commonAssets/topbar.png');
        //this.load.image('unity12_2numbg', window.baseUrl+'assets/commonAssets/numbg.png');
        //this.load.image('unity12_2timerbg', window.baseUrl+'assets/commonAssets/timerbg.png');
        //this.load.image('unity12_2dotbox', window.baseUrl+'assets/commonAssets/dotbox.png');
          this.load.atlas('unity12_2eraser', window.baseUrl+'assets/gradeAssets/12.2/eraser.png', window.baseUrl+'json/gradeJson/12.2/eraser.json');
        this.load.atlas('unity12_2mul', window.baseUrl+'assets/gradeAssets/12.2/mul.png', window.baseUrl+'json/gradeJson/12.2/mul.json');
        this.load.atlas('unity12_2numberpad', window.baseUrl+'assets/gradeAssets/12.2/numberpad.png', window.baseUrl+'json/gradeJson/12.2/numberpad.json');
        this.load.atlas('unity12_2numbers', window.baseUrl+'assets/gradeAssets/12.2/numbers.png', window.baseUrl+'json/gradeJson/12.2/numbers.json');
        this.load.atlas('unity12_2rightmark',window.baseUrl+'assets/gradeAssets/12.2/rightmark.png',window.baseUrl+'json/gradeJson/12.2/rightmark.json');
        
        this.load.atlas('unity12_2ansbox', window.baseUrl+'assets/gradeAssets/12.2/ansbox.png',window.baseUrl+'json/gradeJson/12.2/ansbox.json');
        this.load.image('unity12_2box', window.baseUrl+'assets/gradeAssets/12.2/box.png');
        this.load.atlas('unity12_2egg', window.baseUrl+'assets/gradeAssets/12.2/egg.png',window.baseUrl+'json/gradeJson/12.2/egg.json');
        this.load.image('unity12_2eggbox', window.baseUrl+'assets/gradeAssets/12.2/eggbox.png');
        this.load.image('unity12_2b2', window.baseUrl+'assets/gradeAssets/12.2/b2.png');
        this.load.atlas('unity12_2smallegg', window.baseUrl+'assets/gradeAssets/12.2/smallegg.png',window.baseUrl+'json/gradeJson/12.2/smallegg.json'); 
        
        this.load.atlas('unity12_2glow1', window.baseUrl+'assets/gradeAssets/12.2/glow1.png',window.baseUrl+'json/gradeJson/12.2/glow1.json'); 
        this.load.atlas('unity12_2glow2', window.baseUrl+'assets/gradeAssets/12.2/glow2.png',window.baseUrl+'json/gradeJson/12.2/glow2.json'); 
        this.load.atlas('unity12_2glow3', window.baseUrl+'assets/gradeAssets/12.2/glow3.png',window.baseUrl+'json/gradeJson/12.2/glow3.json'); 
        this.load.atlas('unity12_2glow4', window.baseUrl+'assets/gradeAssets/12.2/glow4.png',window.baseUrl+'json/gradeJson/12.2/glow4.json'); 
        this.load.atlas('unity12_2glow5', window.baseUrl+'assets/gradeAssets/12.2/glow5.png',window.baseUrl+'json/gradeJson/12.2/glow5.json'); 
        this.load.atlas('unity12_2glow6', window.baseUrl+'assets/gradeAssets/12.2/glow6.png',window.baseUrl+'json/gradeJson/12.2/glow6.json'); 
        this.load.atlas('unity12_2glow7', window.baseUrl+'assets/gradeAssets/12.2/glow7.png',window.baseUrl+'json/gradeJson/12.2/glow7.json'); 
        this.load.atlas('unity12_2glow8', window.baseUrl+'assets/gradeAssets/12.2/glow8.png',window.baseUrl+'json/gradeJson/12.2/glow8.json'); 
        this.load.atlas('unity12_2glow9', window.baseUrl+'assets/gradeAssets/12.2/glow9.png',window.baseUrl+'json/gradeJson/12.2/glow9.json'); 
        this.load.atlas('unity12_2glow10', window.baseUrl+'assets/gradeAssets/12.2/glow10.png',window.baseUrl+'json/gradeJson/12.2/glow10.json'); 
	},

	addunitygame12_3_1Assets:function()
	{
		
        //game assets.
        this.load.image('Unity12_3_1BG_01', window.baseUrl+'assets/gradeAssets/12.3.1/BG_01.png');
        this.load.image('Unity12_3_1practice',window.baseUrl+'assets/gradeAssets/12.3.1/practice.png');
        this.load.image('Unity12_3_1topic',window.baseUrl+'assets/gradeAssets/12.3.1/topic.png');
       
        this.load.image('Unity12_3_1Egg_box', window.baseUrl+'assets/gradeAssets/12.3.1/Egg_box.png');
        this.load.image('Unity12_3_1Number_box', window.baseUrl+'assets/gradeAssets/12.3.1/Number_box.png');
        this.load.image('Unity12_3_1Multiplicationsign', window.baseUrl+'assets/gradeAssets/12.3.1/multiplicationsign.png');
        this.load.image('Unity12_3_1EqualSymbol', window.baseUrl+'assets/gradeAssets/12.3.1/equalSymbol.png');
        
        this.load.atlas('Unity12_3_1Tick', window.baseUrl+'assets/gradeAssets/12.3.1/tick.png', window.baseUrl+'json/gradeJson/12.3.1/tick.json');
        this.load.atlas('Unity12_3_1Egg', window.baseUrl+'assets/gradeAssets/12.3.1/Egg.png', window.baseUrl+'json/gradeJson/12.3.1/Egg.json');
        this.load.atlas('Unity12_3_1SmallEgg', window.baseUrl+'assets/gradeAssets/12.3.1/SmallEgg.png', window.baseUrl+'json/gradeJson/12.3.1/SmallEgg.json');
        this.load.atlas('Unity12_3_1Eraser', window.baseUrl+'assets/gradeAssets/12.3.1/eraser.png', window.baseUrl+'json/gradeJson/12.3.1/eraser.json');
        
        this.load.atlas('Unity12_3_1oneGlow', window.baseUrl+'assets/gradeAssets/12.3.1/oneGlow.png', window.baseUrl+'json/gradeJson/12.3.1/oneGlow.json');
        this.load.atlas('Unity12_3_1twoGlow', window.baseUrl+'assets/gradeAssets/12.3.1/twoGlow.png', window.baseUrl+'json/gradeJson/12.3.1/twoGlow.json');
        this.load.atlas('Unity12_3_1threeGlow', window.baseUrl+'assets/gradeAssets/12.3.1/threeGlow.png', window.baseUrl+'json/gradeJson/12.3.1/threeGlow.json');
        this.load.atlas('Unity12_3_1fourGlow', window.baseUrl+'assets/gradeAssets/12.3.1/fourGlow.png', window.baseUrl+'json/gradeJson/12.3.1/fourGlow.json');
        this.load.atlas('Unity12_3_1fiveGlow', window.baseUrl+'assets/gradeAssets/12.3.1/fiveGlow.png', window.baseUrl+'json/gradeJson/12.3.1/fiveGlow.json');
        this.load.atlas('Unity12_3_1bulb', window.baseUrl+'assets/gradeAssets/12.3.1/bulb.png', window.baseUrl+'json/gradeJson/12.3.1/bulb.json');
       
        this.load.atlas('Unity12_3_1Numbers', window.baseUrl+'assets/gradeAssets/12.3.1/Numbers.png', window.baseUrl+'json/gradeJson/12.3.1/Numbers.json');
        this.load.atlas('Unity12_3_1Txtbox', window.baseUrl+'assets/gradeAssets/12.3.1/txtbox.png', window.baseUrl+'json/gradeJson/12.3.1/txtbox.json');
        this.load.atlas('Unity12_3_1greenNumbers', window.baseUrl+'assets/gradeAssets/12.3.1/greenNumbers.png', window.baseUrl+'json/gradeJson/12.3.1/greenNumbers.json');
        this.load.atlas('Unity12_3_1greenNumbers1', window.baseUrl+'assets/gradeAssets/12.3.1/greenNumbers1.png', window.baseUrl+'json/gradeJson/12.3.1/greenNumbers1.json');
	
        this.load.image('Unity12_3_2BG_01', window.baseUrl+'assets/gradeAssets/12.3.1/BG_01.png');
        this.load.image('Unity12_3_2practice',window.baseUrl+'assets/gradeAssets/12.3.1/practice.png');
        this.load.image('Unity12_3_2topic',window.baseUrl+'assets/gradeAssets/12.3.1/topic.png');
       
        this.load.image('Unity12_3_2Egg_box', window.baseUrl+'assets/gradeAssets/12.3.1/Egg_box.png');
        this.load.image('Unity12_3_2Number_box', window.baseUrl+'assets/gradeAssets/12.3.1/Number_box.png');
        this.load.image('Unity12_3_2Multiplicationsign', window.baseUrl+'assets/gradeAssets/12.3.1/multiplicationsign.png');
        this.load.image('Unity12_3_2EqualSymbol', window.baseUrl+'assets/gradeAssets/12.3.1/equalSymbol.png');
        
        this.load.atlas('Unity12_3_2Tick', window.baseUrl+'assets/gradeAssets/12.3.1/tick.png', window.baseUrl+'json/gradeJson/12.3.1/tick.json');
        this.load.atlas('Unity12_3_2Egg', window.baseUrl+'assets/gradeAssets/12.3.1/Egg.png', window.baseUrl+'json/gradeJson/12.3.1/Egg.json');
        this.load.atlas('Unity12_3_2SmallEgg', window.baseUrl+'assets/gradeAssets/12.3.1/SmallEgg.png', window.baseUrl+'json/gradeJson/12.3.1/SmallEgg.json');
        this.load.atlas('Unity12_3_2Eraser', window.baseUrl+'assets/gradeAssets/12.3.1/eraser.png', window.baseUrl+'json/gradeJson/12.3.1/eraser.json');
        
        this.load.atlas('Unity12_3_2oneGlow', window.baseUrl+'assets/gradeAssets/12.3.1/oneGlow.png', window.baseUrl+'json/gradeJson/12.3.1/oneGlow.json');
        this.load.atlas('Unity12_3_2twoGlow', window.baseUrl+'assets/gradeAssets/12.3.1/twoGlow.png', window.baseUrl+'json/gradeJson/12.3.1/twoGlow.json');
        this.load.atlas('Unity12_3_2threeGlow', window.baseUrl+'assets/gradeAssets/12.3.1/threeGlow.png', window.baseUrl+'json/gradeJson/12.3.1/threeGlow.json');
        this.load.atlas('Unity12_3_2bulbGlow', window.baseUrl+'assets/gradeAssets/12.3.1/bulb.png', window.baseUrl+'json/gradeJson/12.3.1/bulb.json');
        this.load.atlas('Unity12_3_2bulbGlow', window.baseUrl+'assets/gradeAssets/12.3.1/bulb.png', window.baseUrl+'json/gradeJson/12.3.1/bulb.json');
        this.load.atlas('Unity12_3_2SixGlow', window.baseUrl+'assets/gradeAssets/12.3.1/6.png', window.baseUrl+'json/gradeJson/12.3.1/6.json');
        this.load.atlas('Unity12_3_2SevenGlow', window.baseUrl+'assets/gradeAssets/12.3.1/7.png', window.baseUrl+'json/gradeJson/12.3.1/7.json');
       
        this.load.atlas('Unity12_3_2Numbers', window.baseUrl+'assets/gradeAssets/12.3.1/Numbers.png', window.baseUrl+'json/gradeJson/12.3.1/Numbers.json');
        this.load.atlas('Unity12_3_2Txtbox', window.baseUrl+'assets/gradeAssets/12.3.1/txtbox.png', window.baseUrl+'json/gradeJson/12.3.1/txtbox.json');
        this.load.atlas('Unity12_3_2greenNumbers', window.baseUrl+'assets/gradeAssets/12.3.1/greenNumbers.png', window.baseUrl+'json/gradeJson/12.3.1/greenNumbers.json');
        this.load.atlas('Unity12_3_2greenNumbers1', window.baseUrl+'assets/gradeAssets/12.3.1/greenNumbers1.png', window.baseUrl+'json/gradeJson/12.3.1/greenNumbers1.json');

        this.load.atlas('Unity12_3_2glow', window.baseUrl+'assets/gradeAssets/12.3.1/glow.png', window.baseUrl+'json/gradeJson/12.3.1/glow.json');
        

        //game assets.
        this.load.image('Unity12_3_3BG_01', window.baseUrl+'assets/gradeAssets/12.3.1/BG_01.png');
        this.load.image('Unity12_3_3practice',window.baseUrl+'assets/gradeAssets/12.3.1/practice.png');
        this.load.image('Unity12_3_3topic',window.baseUrl+'assets/gradeAssets/12.3.1/topic.png');
       
        this.load.image('Unity12_3_3Egg_box', window.baseUrl+'assets/gradeAssets/12.3.1/Egg_box.png');
        this.load.image('Unity12_3_3Number_box', window.baseUrl+'assets/gradeAssets/12.3.1/Number_box.png');
        this.load.image('Unity12_3_3Multiplicationsign', window.baseUrl+'assets/gradeAssets/12.3.1/multiplicationsign.png');
        this.load.image('Unity12_3_3EqualSymbol', window.baseUrl+'assets/gradeAssets/12.3.1/equalSymbol.png');
        
        this.load.atlas('Unity12_3_3Tick', window.baseUrl+'assets/gradeAssets/12.3.1/tick.png', window.baseUrl+'json/gradeJson/12.3.1/tick.json');
        this.load.atlas('Unity12_3_3Egg', window.baseUrl+'assets/gradeAssets/12.3.1/Egg.png', window.baseUrl+'json/gradeJson/12.3.1/Egg.json');
        this.load.atlas('Unity12_3_3SmallEgg', window.baseUrl+'assets/gradeAssets/12.3.1/SmallEgg.png', window.baseUrl+'json/gradeJson/12.3.1/SmallEgg.json');
        this.load.atlas('Unity12_3_3Eraser', window.baseUrl+'assets/gradeAssets/12.3.1/eraser.png', window.baseUrl+'json/gradeJson/12.3.1/eraser.json');
        
        this.load.atlas('Unity12_3_3oneGlow', window.baseUrl+'assets/gradeAssets/12.3.1/oneGlow.png', window.baseUrl+'json/gradeJson/12.3.1/oneGlow.json');
        this.load.atlas('Unity12_3_3twoGlow', window.baseUrl+'assets/gradeAssets/12.3.1/twoGlow.png', window.baseUrl+'json/gradeJson/12.3.1/twoGlow.json');
        this.load.atlas('Unity12_3_3threeGlow', window.baseUrl+'assets/gradeAssets/12.3.1/threeGlow.png', window.baseUrl+'json/gradeJson/12.3.1/threeGlow.json');
        this.load.atlas('Unity12_3_3bulbGlow', window.baseUrl+'assets/gradeAssets/12.3.1/bulb.png', window.baseUrl+'json/gradeJson/12.3.1/bulb.json');
       
        this.load.atlas('Unity12_3_3eightGlow', window.baseUrl+'assets/gradeAssets/12.3.1/8.png', window.baseUrl+'json/gradeJson/12.3.1/8.json');
        this.load.atlas('Unity12_3_3nineGlow', window.baseUrl+'assets/gradeAssets/12.3.1/9.png', window.baseUrl+'json/gradeJson/12.3.1/9.json');
       
        this.load.atlas('Unity12_3_3Numbers', window.baseUrl+'assets/gradeAssets/12.3.1/Numbers.png', window.baseUrl+'json/gradeJson/12.3.1/Numbers.json');
        this.load.atlas('Unity12_3_3Txtbox', window.baseUrl+'assets/gradeAssets/12.3.1/txtbox.png', window.baseUrl+'json/gradeJson/12.3.1/txtbox.json');
        this.load.atlas('Unity12_3_3greenNumbers', window.baseUrl+'assets/gradeAssets/12.3.1/greenNumbers.png', window.baseUrl+'json/gradeJson/12.3.1/greenNumbers.json');
        this.load.atlas('Unity12_3_3greenNumbers1', window.baseUrl+'assets/gradeAssets/12.3.1/greenNumbers1.png', window.baseUrl+'json/gradeJson/12.3.1/greenNumbers1.json');
        

	},

	addunitygame12_3_2Assets:function()
	{
		//common for all games.
        this.load.atlas('Unity12_3_2backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/12.3.2/backbtn.json');
        this.load.atlas('Unity12_3_2CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/12.3.2/speaker.json');
        this.load.atlas('Unity12_3_2starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/12.3.2/starAnim.json');
        this.load.atlas('Unity12_3_2replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/12.3.2/reply.json');
        this.load.atlas('Unity12_3_2btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/12.3.2/btn.json');
        
       // this.load.image('Unity12_3_2background',window.baseUrl+'assets/commonAssets/BG.png');
       // this.load.image('Unity12_3_2tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('Unity12_3_2navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Unity12_3_2timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('Unity12_3_2topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('Unity12_3_2BG_01', window.baseUrl+'assets/gradeAssets/12.3.2/BG_01.png');
        this.load.image('Unity12_3_2practice',window.baseUrl+'assets/gradeAssets/12.3.2/practice.png');
        this.load.image('Unity12_3_2topic',window.baseUrl+'assets/gradeAssets/12.3.2/topic.png');
       
        this.load.image('Unity12_3_2Egg_box', window.baseUrl+'assets/gradeAssets/12.3.2/Egg_box.png');
        this.load.image('Unity12_3_2Number_box', window.baseUrl+'assets/gradeAssets/12.3.2/Number_box.png');
        this.load.image('Unity12_3_2Multiplicationsign', window.baseUrl+'assets/gradeAssets/12.3.2/multiplicationsign.png');
        this.load.image('Unity12_3_2EqualSymbol', window.baseUrl+'assets/gradeAssets/12.3.2/equalSymbol.png');
        
        this.load.atlas('Unity12_3_2Tick', window.baseUrl+'assets/gradeAssets/12.3.2/tick.png', window.baseUrl+'json/gradeJson/12.3.2/tick.json');
        this.load.atlas('Unity12_3_2Egg', window.baseUrl+'assets/gradeAssets/12.3.2/Egg.png', window.baseUrl+'json/gradeJson/12.3.2/Egg.json');
        this.load.atlas('Unity12_3_2SmallEgg', window.baseUrl+'assets/gradeAssets/12.3.2/SmallEgg.png', window.baseUrl+'json/gradeJson/12.3.2/SmallEgg.json');
        this.load.atlas('Unity12_3_2Eraser', window.baseUrl+'assets/gradeAssets/12.3.2/eraser.png', window.baseUrl+'json/gradeJson/12.3.2/eraser.json');
        
        this.load.atlas('Unity12_3_2oneGlow', window.baseUrl+'assets/gradeAssets/12.3.2/oneGlow.png', window.baseUrl+'json/gradeJson/12.3.2/oneGlow.json');
        this.load.atlas('Unity12_3_2twoGlow', window.baseUrl+'assets/gradeAssets/12.3.2/twoGlow.png', window.baseUrl+'json/gradeJson/12.3.2/twoGlow.json');
        this.load.atlas('Unity12_3_2threeGlow', window.baseUrl+'assets/gradeAssets/12.3.2/threeGlow.png', window.baseUrl+'json/gradeJson/12.3.2/threeGlow.json');
        this.load.atlas('Unity12_3_2bulbGlow', window.baseUrl+'assets/gradeAssets/12.3.2/bulb.png', window.baseUrl+'json/gradeJson/12.3.2/bulb.json');
        this.load.atlas('Unity12_3_2bulbGlow', window.baseUrl+'assets/gradeAssets/12.3.2/bulb.png', window.baseUrl+'json/gradeJson/12.3.2/bulb.json');
        this.load.atlas('Unity12_3_2SixGlow', window.baseUrl+'assets/gradeAssets/12.3.2/6.png', window.baseUrl+'json/gradeJson/12.3.2/6.json');
        this.load.atlas('Unity12_3_2SevenGlow', window.baseUrl+'assets/gradeAssets/12.3.2/7.png', window.baseUrl+'json/gradeJson/12.3.2/7.json');
       
        this.load.atlas('Unity12_3_2Numbers', window.baseUrl+'assets/gradeAssets/12.3.2/Numbers.png', window.baseUrl+'json/gradeJson/12.3.2/Numbers.json');
        this.load.atlas('Unity12_3_2Txtbox', window.baseUrl+'assets/gradeAssets/12.3.2/txtbox.png', window.baseUrl+'json/gradeJson/12.3.2/txtbox.json');
        this.load.atlas('Unity12_3_2greenNumbers', window.baseUrl+'assets/gradeAssets/12.3.2/greenNumbers.png', window.baseUrl+'json/gradeJson/12.3.2/greenNumbers.json');
        this.load.atlas('Unity12_3_2greenNumbers1', window.baseUrl+'assets/gradeAssets/12.3.2/greenNumbers1.png', window.baseUrl+'json/gradeJson/12.3.2/greenNumbers1.json');

        this.load.atlas('Unity12_3_2glow', window.baseUrl+'assets/gradeAssets/12.3.2/glow.png', window.baseUrl+'json/gradeJson/12.3.2/glow.json');
	},

	addunitygame12_3_3Assets:function()
	{
		//common for all games.
        this.load.atlas('Unity12_3_3backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/12.3.3/backbtn.json');
        this.load.atlas('Unity12_3_3CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/12.3.3/speaker.json');
        this.load.atlas('Unity12_3_3starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/12.3.3/starAnim.json');
        this.load.atlas('Unity12_3_3replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/12.3.3/reply.json');
        this.load.atlas('Unity12_3_3btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/12.3.3/btn.json');
        
        //this.load.image('Unity12_3_3background',window.baseUrl+'assets/commonAssets/BG.png');
        //this.load.image('Unity12_3_3tittleBar',window.baseUrl+'assets/commonAssets/tittleBar.png');
        this.load.image('Unity12_3_3navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Unity12_3_3timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.image('Unity12_3_3topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('Unity12_3_3BG_01', window.baseUrl+'assets/gradeAssets/12.3.3/BG_01.png');
        this.load.image('Unity12_3_3practice',window.baseUrl+'assets/gradeAssets/12.3.3/practice.png');
        this.load.image('Unity12_3_3topic',window.baseUrl+'assets/gradeAssets/12.3.3/topic.png');
       
        this.load.image('Unity12_3_3Egg_box', window.baseUrl+'assets/gradeAssets/12.3.3/Egg_box.png');
        this.load.image('Unity12_3_3Number_box', window.baseUrl+'assets/gradeAssets/12.3.3/Number_box.png');
        this.load.image('Unity12_3_3Multiplicationsign', window.baseUrl+'assets/gradeAssets/12.3.3/multiplicationsign.png');
        this.load.image('Unity12_3_3EqualSymbol', window.baseUrl+'assets/gradeAssets/12.3.3/equalSymbol.png');
        
        this.load.atlas('Unity12_3_3Tick', window.baseUrl+'assets/gradeAssets/12.3.3/tick.png', window.baseUrl+'json/gradeJson/12.3.3/tick.json');
        this.load.atlas('Unity12_3_3Egg', window.baseUrl+'assets/gradeAssets/12.3.3/Egg.png', window.baseUrl+'json/gradeJson/12.3.3/Egg.json');
        this.load.atlas('Unity12_3_3SmallEgg', window.baseUrl+'assets/gradeAssets/12.3.3/SmallEgg.png', window.baseUrl+'json/gradeJson/12.3.3/SmallEgg.json');
        this.load.atlas('Unity12_3_3Eraser', window.baseUrl+'assets/gradeAssets/12.3.3/eraser.png', window.baseUrl+'json/gradeJson/12.3.3/eraser.json');
        
        this.load.atlas('Unity12_3_3oneGlow', window.baseUrl+'assets/gradeAssets/12.3.3/oneGlow.png', window.baseUrl+'json/gradeJson/12.3.3/oneGlow.json');
        this.load.atlas('Unity12_3_3twoGlow', window.baseUrl+'assets/gradeAssets/12.3.3/twoGlow.png', window.baseUrl+'json/gradeJson/12.3.3/twoGlow.json');
        this.load.atlas('Unity12_3_3threeGlow', window.baseUrl+'assets/gradeAssets/12.3.3/threeGlow.png', window.baseUrl+'json/gradeJson/12.3.3/threeGlow.json');
        this.load.atlas('Unity12_3_3bulbGlow', window.baseUrl+'assets/gradeAssets/12.3.3/bulb.png', window.baseUrl+'json/gradeJson/12.3.3/bulb.json');
       
        this.load.atlas('Unity12_3_3eightGlow', window.baseUrl+'assets/gradeAssets/12.3.3/8.png', window.baseUrl+'json/gradeJson/12.3.3/8.json');
        this.load.atlas('Unity12_3_3nineGlow', window.baseUrl+'assets/gradeAssets/12.3.3/9.png', window.baseUrl+'json/gradeJson/12.3.3/9.json');
       
        this.load.atlas('Unity12_3_3Numbers', window.baseUrl+'assets/gradeAssets/12.3.3/Numbers.png', window.baseUrl+'json/gradeJson/12.3.3/Numbers.json');
        this.load.atlas('Unity12_3_3Txtbox', window.baseUrl+'assets/gradeAssets/12.3.3/txtbox.png', window.baseUrl+'json/gradeJson/12.3.3/txtbox.json');
        this.load.atlas('Unity12_3_3greenNumbers', window.baseUrl+'assets/gradeAssets/12.3.3/greenNumbers.png', window.baseUrl+'json/gradeJson/12.3.3/greenNumbers.json');
        this.load.atlas('Unity12_3_3greenNumbers1', window.baseUrl+'assets/gradeAssets/12.3.3/greenNumbers1.png', window.baseUrl+'json/gradeJson/12.3.3/greenNumbers1.json');
	},

	addunitygame13_1Assets:function()
	{
		this.load.image('Level13_background',window.baseUrl+'assets/gradeAssets/13.1/bg13.png');
           //gameassets
        this.load.image('Level13_grid',window.baseUrl+'assets/gradeAssets/13.1/grid.png');
        this.load.image('Level13_Hintgrid',window.baseUrl+'assets/gradeAssets/13.1/hintgrid.png');
        this.load.atlas('Level13_gridpieces',window.baseUrl+'assets/gradeAssets/13.1/gridpieces.png',window.baseUrl+'json/gradeJson/13.1/gridpieces.json');
        this.load.atlas('Level13_blankpieces',window.baseUrl+'assets/gradeAssets/13.1/blankpieces.png',window.baseUrl+'json/gradeJson/13.1/blankpieces.json');
        
	},

	addunitygame14_1Assets:function()
	{
		
        //gameassets
        this.load.image('Level14_background',window.baseUrl+'assets/gradeAssets/14.1/bg.png');
        this.load.image('Level14_sidegrid',window.baseUrl+'assets/gradeAssets/14.1/sidegrid.png');
        this.load.image('Level14_greencubeset',window.baseUrl+'assets/gradeAssets/14.1/greencubeset.png');
        this.load.image('Level14_gridv',window.baseUrl+'assets/gradeAssets/14.1/gridv.png');
        this.load.image('Level14_singlegrid',window.baseUrl+'assets/gradeAssets/14.1/singlegrid.png');
        this.load.image('Level14_gridh',window.baseUrl+'assets/gradeAssets/14.1/gridh.png');
        this.load.image('Level14_gridarea',window.baseUrl+'assets/gradeAssets/14.1/gridarea.png');
        this.load.image('Level14_gridjointh',window.baseUrl+'assets/gradeAssets/14.1/gridjointh.png');
        this.load.image('Level14_gridjointv',window.baseUrl+'assets/gradeAssets/14.1/gridjointv.png');
        this.load.image('Level14_yellowgrid',window.baseUrl+'assets/gradeAssets/14.1/yellowgrid.png');
        this.load.image('Level14_equal',window.baseUrl+'assets/gradeAssets/14.1/equal.png');
        this.load.image('Level14_calcibg',window.baseUrl+'assets/gradeAssets/14.1/calcibg.png');
        this.load.atlas('Level14_calNum',window.baseUrl+'assets/gradeAssets/14.1/calNum.png',window.baseUrl+'json/gradeJson/14.1/calNum.json');
        this.load.atlas('Level14_tickBtn',window.baseUrl+'assets/gradeAssets/14.1/rightBtn.png',window.baseUrl+'json/gradeJson/14.1/rightBtn.json');
        this.load.atlas('Level14_eraser',window.baseUrl+'assets/gradeAssets/14.1/eraser.png',window.baseUrl+'json/gradeJson/14.1/eraser.json');
        this.load.image('Level14_WhiteBox',window.baseUrl+'assets/gradeAssets/14.1/WhiteBox.png');
        this.load.image('Level14_multiplication',window.baseUrl+'assets/gradeAssets/14.1/multiplication.png');
        this.load.atlas('Level14_box',window.baseUrl+'assets/gradeAssets/14.1/box.png',window.baseUrl+'json/gradeJson/14.1/box.json');
        this.load.image('Level14_bluegrid',window.baseUrl+'assets/gradeAssets/14.1/bluegrid.png');
        
        
        
	},

	addunitygame14_2Assets:function()
	{
		this.load.image('Level14_background',window.baseUrl+'assets/gradeAssets/14.2/bg.png');

        this.load.image('Level14_sidegrid',window.baseUrl+'assets/gradeAssets/14.2/sidegrid.png');
        this.load.image('Level14_greencubeset',window.baseUrl+'assets/gradeAssets/14.2/greencubeset.png');
        this.load.image('Level14_gridv',window.baseUrl+'assets/gradeAssets/14.2/gridv.png');
        this.load.image('Level14_singlegrid',window.baseUrl+'assets/gradeAssets/14.2/singlegrid.png');
        this.load.image('Level14_gridh',window.baseUrl+'assets/gradeAssets/14.2/gridh.png');
        this.load.image('Level14_gridarea',window.baseUrl+'assets/gradeAssets/14.2/gridarea.png');
        this.load.image('Level14_gridjointh',window.baseUrl+'assets/gradeAssets/14.2/gridjointh.png');
        this.load.image('Level14_gridjointv',window.baseUrl+'assets/gradeAssets/14.2/gridjointv.png');
        this.load.image('Level14_yellowgrid',window.baseUrl+'assets/gradeAssets/14.2/yellowgrid.png');
        this.load.image('Level14_equal',window.baseUrl+'assets/gradeAssets/14.2/equal.png');
        this.load.image('Level14_calcibg',window.baseUrl+'assets/gradeAssets/14.2/calcibg.png');
        this.load.atlas('Level14_calNum',window.baseUrl+'assets/gradeAssets/14.2/calNum.png',window.baseUrl+'json/gradeJson/14.2/calNum.json');
        this.load.atlas('Level14_tickBtn',window.baseUrl+'assets/gradeAssets/14.2/rightBtn.png',window.baseUrl+'json/gradeJson/14.2/rightBtn.json');
        this.load.atlas('Level14_eraser',window.baseUrl+'assets/gradeAssets/14.2/eraser.png',window.baseUrl+'json/gradeJson/14.2/eraser.json');
        this.load.image('Level14_WhiteBox',window.baseUrl+'assets/gradeAssets/14.2/WhiteBox.png');
        this.load.image('Level14_multiplication',window.baseUrl+'assets/gradeAssets/14.2/multiplication.png');
        this.load.atlas('Level14_box',window.baseUrl+'assets/gradeAssets/14.2/box.png',window.baseUrl+'json/gradeJson/14.2/box.json');
        this.load.image('Level14_gridhorange',window.baseUrl+'assets/gradeAssets/14.2/gridhorange.png');
        this.load.image('Level14_gridvorange',window.baseUrl+'assets/gradeAssets/14.2/gridvorange.png');
        this.load.image('Level14_gridorange',window.baseUrl+'assets/gradeAssets/14.2/gridorange.png');
        
        
	},

	addunitygame15_1Assets:function()
	{
		this.load.image('Level15_1_bg1',window.baseUrl+'assets/commonAssets/BG.png');
		this.load.image('Level15_1_numbg',window.baseUrl+'assets/commonAssets/numbg.png');
        this.load.atlas('Level15_1_NumberKey',window.baseUrl+'assets/gradeAssets/15.1/numbers.png' ,window.baseUrl+'json/gradeJson/15.1/numbers.json');
        this.load.atlas('Level15_1_NumberSmall',window.baseUrl+'assets/gradeAssets/15.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/15.1/numberSmall.json');
        /*this.load.image('practice',window.baseUrl+'assets/gradeAssets/15.1/practice.png');
        this.load.image('topic',window.baseUrl+'assets/gradeAssets/15.1/topic.png');
        this.load.image('topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');*/
        this.load.image('Level15_1_fishBigBox',window.baseUrl+'assets/gradeAssets/15.1/Fish bigg box.png');
        this.load.image('Level15_1_fishSmallBox',window.baseUrl+'assets/gradeAssets/15.1/Fish small box.png');
        this.load.image('Level15_1_base',window.baseUrl+'assets/gradeAssets/15.1/base.png');
        
        this.load.atlas('Level15_1_fish1',window.baseUrl+'assets/gradeAssets/15.1/fish1.png' ,window.baseUrl+'json/gradeJson/15.1/fish1.json');
        this.load.atlas('Level15_1_fish1Celeb',window.baseUrl+'assets/gradeAssets/15.1/fish1Celeb.png' ,window.baseUrl+'json/gradeJson/15.1/fish1Celeb.json');
        
       this.load.atlas('Level15_1_erase',window.baseUrl+'assets/gradeAssets/15.1/erase.png' ,window.baseUrl+'json/gradeJson/15.1/erase.json');
        this.load.atlas('Level15_1_rightmark',window.baseUrl+'assets/gradeAssets/15.1/rightmark.png' ,window.baseUrl+'json/gradeJson/15.1/rightmark.json');
    
        this.load.atlas('Level15_1_inputBox',window.baseUrl+'assets/gradeAssets/15.1/inputBox.png' ,window.baseUrl+'json/gradeJson/15.1/inputBox.json');
	},

	addunitygame16_1Assets:function()
	{
		this.load.image('grade161_bg1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/bg1.png');

		this.load.image('grade161_TopBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('grade161_timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        this.load.image('grade162_bg1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/bg1.png');

		this.load.image('grade162_TopBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('grade162_timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        this.load.image('grade163_bg1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/bg1.png');

		this.load.image('grade163_TopBar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('grade163_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        

		this.load.image('grade161_numBG',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/b2.png');
        this.load.image('grade161_divide', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/divide.png');
        this.load.image('grade161_equalSymbol', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/equalSymbol.png');
        this.load.atlas('grade16_1_Rabitidle',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/Rabbit_Idle.png' ,window.baseUrl+'assets/gradeAssets/16.1/gameAssets/Rabbit_Idle.json');
        //this.load.atlas('grade161_box1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/text box.png' ,window.baseUrl+'json/gradeJson/16.1/text box.json');
        this.load.atlas('grade161_numberbox1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/txtbox.png' ,window.baseUrl+'json/gradeJson/16.1/txtbox.json');
       // this.load.atlas('grade61_carrotsAnim',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/carrotsAnim.png' ,window.baseUrl+'json/gradeJson/16.1/carrotsAnim.json');
        this.load.atlas('grade16_1_RabitAnim',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/RabitAnim.png' ,window.baseUrl+'json/gradeJson/16.1/RabitAnim.json');
      //  this.load.atlas('grade61_calNum',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/calNum.png' ,window.baseUrl+'json/gradeJson/16.1/calNum.json');
        this.load.atlas('grade161_greenNumbers',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/greenNumbers.png' ,window.baseUrl+'json/gradeJson/16.1/greenNumbers.json');
        this.load.atlas('grade16_1_carrot',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/carrot.png' ,window.baseUrl+'json/gradeJson/16.1/carrot.json');
      //  this.load.atlas('grade61_greenNumbers1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/greenNumbers1.png' ,window.baseUrl+'json/gradeJson/16.1/greenNumbers1.json');
        //this.load.atlas('grade61_greenNumbers2',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/greenNumbers2.png' ,window.baseUrl+'json/gradeJson/16.1/greenNumbers2.json');
        this.load.atlas('grade161_txtbox',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/txtbox.png' ,window.baseUrl+'json/gradeJson/16.1/txtbox.json');
        this.load.atlas('grade161_tick',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/tick.png' ,window.baseUrl+'json/gradeJson/16.1/tick.json');
        this.load.atlas('grade161_eraser',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/eraser.png' ,window.baseUrl+'json/gradeJson/16.1/eraser.json');
        this.load.atlas('grade16_1_thinkingCloud',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/cloud.png',window.baseUrl+'json/gradeJson/16.1/cloud.json');
        this.load.image('grade16_1_Box', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/no box.png');

        this.load.atlas('grade161_box1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box1.png',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box1.json');
	
        this.load.image('Level162_numBG',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/b2.png');
        this.load.image('grade162_divide', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/divide.png');
        this.load.atlas('grade162_1_Rabitidle',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/Rabbit_Idle.png' ,window.baseUrl+'assets/gradeAssets/16.1/gameAssets/Rabbit_Idle.json');
        this.load.atlas('grade162_numberbox1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/txtbox.png' ,window.baseUrl+'json/gradeJson/16.1/txtbox.json');
       // this.load.atlas('grade61_carrotsAnim',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/carrotsAnim.png' ,window.baseUrl+'json/gradeJson/16.1/carrotsAnim.json');
        this.load.atlas('grade162_1_RabitAnim',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/RabitAnim.png' ,window.baseUrl+'json/gradeJson/16.1/RabitAnim.json');
      //  this.load.atlas('grade61_calNum',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/calNum.png' ,window.baseUrl+'json/gradeJson/16.1/calNum.json');
        this.load.atlas('grade162_greenNumbers',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/greenNumbers.png' ,window.baseUrl+'json/gradeJson/16.1/greenNumbers.json');
        this.load.atlas('grade162_1_carrot',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/carrot.png' ,window.baseUrl+'json/gradeJson/16.1/carrot.json');
      //  this.load.atlas('grade61_greenNumbers1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/greenNumbers1.png' ,window.baseUrl+'json/gradeJson/16.1/greenNumbers1.json');
        //this.load.atlas('grade61_greenNumbers2',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/greenNumbers2.png' ,window.baseUrl+'json/gradeJson/16.1/greenNumbers2.json');
        this.load.atlas('grade162_tick',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/tick.png' ,window.baseUrl+'json/gradeJson/16.1/tick.json');
        this.load.atlas('grade162_eraser',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/eraser.png' ,window.baseUrl+'json/gradeJson/16.1/eraser.json');
        this.load.atlas('grade162_1_thinkingCloud',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/cloud.png',window.baseUrl+'json/gradeJson/16.1/cloud.json');
        this.load.image('grade162_1_Box', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/no box.png');

       // this.load.atlas('grade62_box1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/text box.png' ,window.baseUrl+'json/gradeJson/16.1/text box.json');
        this.load.atlas('grade62_box1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box1.png',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box1.json')
        this.load.atlas('grade62_box2',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box2.png',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box2.json')
        
        this.load.image('Level163_numBG',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/b2.png');
        
        this.load.image('crate163', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/101.png');
        this.load.atlas('box163',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/box1.png' ,window.baseUrl+'json/gradeJson/16.1/box1.json');
        this.load.atlas('divide163',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/0.0.png' ,window.baseUrl+'json/gradeJson/16.1/0.0.json');


        this.load.atlas('eggGroup163',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/eg 1 to 10.png' ,window.baseUrl+'json/gradeJson/16.1/eg 1 to 10.json');
        this.load.atlas('eggGroup1163',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/1 to 10 eg.png' ,window.baseUrl+'json/gradeJson/16.1/1 to 10 eg.json');

        this.load.atlas('grade163_box1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/text box.png' ,window.baseUrl+'json/gradeJson/16.1/text box.json');
        this.load.atlas('grade163_numberbox1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/txtbox.png' ,window.baseUrl+'json/gradeJson/16.1/txtbox.json');
        this.load.atlas('basket163',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/1234.png' ,window.baseUrl+'json/gradeJson/16.1/1234.json');

        this.load.atlas('grade163_tick',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/tick.png' ,window.baseUrl+'json/gradeJson/16.1/tick.json');
        this.load.atlas('grade163_eraser',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/eraser.png' ,window.baseUrl+'json/gradeJson/16.1/eraser.json');
       // this.load.atlas('grade16_1_thinkingCloud',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/cloud.png',window.baseUrl+'json/gradeJson/16.1/cloud.json');
        this.load.image('grade163_1_Box', window.baseUrl+'assets/gradeAssets/16.1/gameAssets/no box.png');

        this.load.atlas('grade163_greenNumbers',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/0 to 10.png' ,window.baseUrl+'json/gradeJson/16.1/0 to 10.json');
        
	},

	addunitygame16_2Assets:function()
	{
		this.load.image('Level162_numBG',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/b2.png');
        this.load.image('grade162_bg1',window.baseUrl+'assets/gradeAssets/16.2/commonAssets/bg1.png');
        this.load.image('grade162_timebg', window.baseUrl+'assets/gradeAssets/16.2/commonAssets/timebg.png');
        this.load.image('grade162_TopBar', window.baseUrl+'assets/gradeAssets/16.2/commonAssets/topbar.png');
        this.load.image('grade162_divide', window.baseUrl+'assets/gradeAssets/16.2/gameAssets/divide.png');
        this.load.atlas('grade162_1_Rabitidle',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/Rabbit_Idle.png' ,window.baseUrl+'assets/gradeAssets/16.2/gameAssets/Rabbit_Idle.json');
        this.load.atlas('grade162_numberbox1',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/txtbox.png' ,window.baseUrl+'json/gradeJson/16.2/txtbox.json');
       // this.load.atlas('grade61_carrotsAnim',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/carrotsAnim.png' ,window.baseUrl+'json/gradeJson/16.2/carrotsAnim.json');
        this.load.atlas('grade162_1_RabitAnim',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/RabitAnim.png' ,window.baseUrl+'json/gradeJson/16.2/RabitAnim.json');
      //  this.load.atlas('grade61_calNum',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/calNum.png' ,window.baseUrl+'json/gradeJson/16.2/calNum.json');
        this.load.atlas('grade162_greenNumbers',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/greenNumbers.png' ,window.baseUrl+'json/gradeJson/16.2/greenNumbers.json');
        this.load.atlas('grade162_1_carrot',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/carrot.png' ,window.baseUrl+'json/gradeJson/16.2/carrot.json');
      //  this.load.atlas('grade61_greenNumbers1',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/greenNumbers1.png' ,window.baseUrl+'json/gradeJson/16.2/greenNumbers1.json');
        //this.load.atlas('grade61_greenNumbers2',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/greenNumbers2.png' ,window.baseUrl+'json/gradeJson/16.2/greenNumbers2.json');
        this.load.atlas('grade162_tick',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/tick.png' ,window.baseUrl+'json/gradeJson/16.2/tick.json');
        this.load.atlas('grade162_eraser',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/eraser.png' ,window.baseUrl+'json/gradeJson/16.2/eraser.json');
        this.load.atlas('grade162_1_thinkingCloud',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/cloud.png',window.baseUrl+'json/gradeJson/16.2/cloud.json');
        this.load.image('grade162_1_Box', window.baseUrl+'assets/gradeAssets/16.2/gameAssets/no box.png');

       // this.load.atlas('grade62_box1',window.baseUrl+'assets/gradeAssets/16.2/gameAssets/text box.png' ,window.baseUrl+'json/gradeJson/16.2/text box.json');
        this.load.atlas('grade62_box1',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box1.png',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box1.json')
        this.load.atlas('grade62_box2',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box2.png',window.baseUrl+'assets/gradeAssets/16.1/gameAssets/ans box2.json')
	},

	addunitygame16_3Assets:function()
	{
		this.load.image('Level163_numBG',window.baseUrl+'assets/gradeAssets/16.3/gameAssets/b2.png');
        
		this.load.image('grade163_bg1',window.baseUrl+'assets/gradeAssets/16.3/commonAssets/bg1.png');
        this.load.image('crate163', window.baseUrl+'assets/gradeAssets/16.3/gameAssets/101.png');
        this.load.atlas('box163',window.baseUrl+'assets/gradeAssets/16.3/gameAssets/box1.png' ,window.baseUrl+'json/gradeJson/16.3/box1.json');
        this.load.atlas('divide163',window.baseUrl+'assets/gradeAssets/16.3/gameAssets/0.0.png' ,window.baseUrl+'json/gradeJson/16.3/0.0.json');


        this.load.atlas('eggGroup163',window.baseUrl+'assets/gradeAssets/16.3/gameAssets/eg 1 to 10.png' ,window.baseUrl+'json/gradeJson/16.3/eg 1 to 10.json');
        this.load.atlas('eggGroup1163',window.baseUrl+'assets/gradeAssets/16.3/gameAssets/1 to 10 eg.png' ,window.baseUrl+'json/gradeJson/16.3/1 to 10 eg.json');

        this.load.atlas('grade163_box1',window.baseUrl+'assets/gradeAssets/16.3/gameAssets/text box.png' ,window.baseUrl+'json/gradeJson/16.3/text box.json');
        this.load.atlas('grade163_numberbox1',window.baseUrl+'assets/gradeAssets/16.3/gameAssets/txtbox.png' ,window.baseUrl+'json/gradeJson/16.3/txtbox.json');
        this.load.atlas('basket163',window.baseUrl+'assets/gradeAssets/16.3/gameAssets/1234.png' ,window.baseUrl+'json/gradeJson/16.3/1234.json');

        this.load.atlas('grade163_tick',window.baseUrl+'assets/gradeAssets/16.3/gameAssets/tick.png' ,window.baseUrl+'json/gradeJson/16.3/tick.json');
        this.load.atlas('grade163_eraser',window.baseUrl+'assets/gradeAssets/16.3/gameAssets/eraser.png' ,window.baseUrl+'json/gradeJson/16.3/eraser.json');
       // this.load.atlas('grade16_1_thinkingCloud',window.baseUrl+'assets/gradeAssets/16.3/gameAssets/cloud.png',window.baseUrl+'json/gradeJson/16.3/cloud.json');
        this.load.image('grade163_1_Box', window.baseUrl+'assets/gradeAssets/16.3/gameAssets/no box.png');

        this.load.atlas('grade163_greenNumbers',window.baseUrl+'assets/gradeAssets/16.3/gameAssets/0 to 10.png' ,window.baseUrl+'json/gradeJson/16.3/0 to 10.json');
	},


	addLandingScreenAssets:function()
	{
		_this.load.image('landingBg',window.baseUrl+'assets/landingScreen/landingBg.png');

		_this.load.image('landingnavBar',window.baseUrl+'assets/landingScreen/navBar.png');
		_this.load.image('landingbackBtn',window.baseUrl+'assets/landingScreen/backBtn.png');

		_this.load.image('datahandlingBoard',window.baseUrl+'assets/landingScreen/datahandlingBoard.png');
		_this.load.image('measurementBoard',window.baseUrl+'assets/landingScreen/measurementBoard.png');
		_this.load.image('numberoperationBoard',window.baseUrl+'assets/landingScreen/numberoperationBoard.png');
		_this.load.image('numbersenseBoard',window.baseUrl+'assets/landingScreen/numbersenseBoard.png');
		_this.load.image('shapesBoard',window.baseUrl+'assets/landingScreen/shapesBoard.png');


		_this.load.atlas('numberSense1',window.baseUrl+'assets/landingScreen/numberSense1.png',window.baseUrl+'assets/landingScreen/numberSense1.json');
		_this.load.atlas('numberSense2',window.baseUrl+'assets/landingScreen/numberSense2.png',window.baseUrl+'assets/landingScreen/numberSense2.json');
		_this.load.atlas('numberSense3',window.baseUrl+'assets/landingScreen/numberSense3.png',window.baseUrl+'assets/landingScreen/numberSense3.json');
		_this.load.atlas('numberSense4',window.baseUrl+'assets/landingScreen/numberSense4.png',window.baseUrl+'assets/landingScreen/numberSense4.json');
		_this.load.atlas('numberSense5',window.baseUrl+'assets/landingScreen/numberSense5.png',window.baseUrl+'assets/landingScreen/numberSense5.json');
		_this.load.atlas('numberSense6',window.baseUrl+'assets/landingScreen/numberSense6.png',window.baseUrl+'assets/landingScreen/numberSense6.json');
		_this.load.atlas('numberSense7',window.baseUrl+'assets/landingScreen/numberSense7.png',window.baseUrl+'assets/landingScreen/numberSense7.json');
		
		_this.load.atlas('measurement1',window.baseUrl+'assets/landingScreen/measurement1.png',window.baseUrl+'assets/landingScreen/measurement1.json');
		_this.load.atlas('measurement2',window.baseUrl+'assets/landingScreen/measurement2.png',window.baseUrl+'assets/landingScreen/measurement2.json');
		_this.load.atlas('measurement3',window.baseUrl+'assets/landingScreen/measurement3.png',window.baseUrl+'assets/landingScreen/measurement3.json');
		_this.load.atlas('measurement4',window.baseUrl+'assets/landingScreen/measurement4.png',window.baseUrl+'assets/landingScreen/measurement4.json');
		_this.load.atlas('measurement5',window.baseUrl+'assets/landingScreen/measurement5.png',window.baseUrl+'assets/landingScreen/measurement5.json');


		_this.load.atlas('numberOpertaion1',window.baseUrl+'assets/landingScreen/numberOpertaion1.png',window.baseUrl+'assets/landingScreen/numberOpertaion1.json');
		_this.load.atlas('numberOpertaion2',window.baseUrl+'assets/landingScreen/numberOpertaion2.png',window.baseUrl+'assets/landingScreen/numberOpertaion2.json');
		_this.load.atlas('numberOpertaion3',window.baseUrl+'assets/landingScreen/numberOpertaion3.png',window.baseUrl+'assets/landingScreen/numberOpertaion3.json');
		_this.load.atlas('numberOpertaion4',window.baseUrl+'assets/landingScreen/numberOpertaion4.png',window.baseUrl+'assets/landingScreen/numberOpertaion4.json');
		
		_this.load.atlas('shapes1',window.baseUrl+'assets/landingScreen/shapes1.png',window.baseUrl+'assets/landingScreen/shapes1.json');
		_this.load.atlas('shapes2',window.baseUrl+'assets/landingScreen/shapes2.png',window.baseUrl+'assets/landingScreen/shapes2.json');
		_this.load.atlas('shapes3',window.baseUrl+'assets/landingScreen/shapes3.png',window.baseUrl+'assets/landingScreen/shapes3.json');
		_this.load.atlas('shapes4',window.baseUrl+'assets/landingScreen/shapes4.png',window.baseUrl+'assets/landingScreen/shapes4.json');
		_this.load.atlas('shapes5',window.baseUrl+'assets/landingScreen/shapes5.png',window.baseUrl+'assets/landingScreen/shapes5.json');
		

		_this.load.atlas('dataHandling1',window.baseUrl+'assets/landingScreen/dataHandling1.png',window.baseUrl+'assets/landingScreen/dataHandling1.json');
		_this.load.atlas('dataHandling2',window.baseUrl+'assets/landingScreen/dataHandling2.png',window.baseUrl+'assets/landingScreen/dataHandling2.json');
		_this.load.atlas('dataHandling3',window.baseUrl+'assets/landingScreen/dataHandling3.png',window.baseUrl+'assets/landingScreen/dataHandling3.json');
		_this.load.atlas('dataHandling4',window.baseUrl+'assets/landingScreen/dataHandling4.png',window.baseUrl+'assets/landingScreen/dataHandling4.json');

	},

	addGameScreenAssets:function()
	{
		_this.load.image('gameSceneBg',window.baseUrl+'assets/gameScenes/gameSceneBg.png');

		_this.load.image('measurementText',window.baseUrl+'assets/gameScenes/measurementText.png');
		_this.load.image('lengthMc',window.baseUrl+'assets/gameScenes/lengthMc.png');
		_this.load.image('timeMc',window.baseUrl+'assets/gameScenes/timeMc.png');
		_this.load.image('volumeMc',window.baseUrl+'assets/gameScenes/volumeMc.png');
		_this.load.image('weightMc',window.baseUrl+'assets/gameScenes/weightMc.png');

		_this.load.atlas('measurement1_1',window.baseUrl+'assets/gameScenes/measurement1_1.png',window.baseUrl+'assets/gameScenes/measurement1_1.json');
		_this.load.atlas('measurement1_2',window.baseUrl+'assets/gameScenes/measurement1_2.png',window.baseUrl+'assets/gameScenes/measurement1_2.json');
		_this.load.atlas('measurement1_3',window.baseUrl+'assets/gameScenes/measurement1_3.png',window.baseUrl+'assets/gameScenes/measurement1_3.json');
		

		_this.load.atlas('measurement2_1',window.baseUrl+'assets/gameScenes/measurement2_1.png',window.baseUrl+'assets/gameScenes/measurement2_1.json');
		_this.load.atlas('measurement2_2',window.baseUrl+'assets/gameScenes/measurement2_2.png',window.baseUrl+'assets/gameScenes/measurement2_2.json');
		_this.load.atlas('measurement2_3',window.baseUrl+'assets/gameScenes/measurement2_3.png',window.baseUrl+'assets/gameScenes/measurement2_3.json');
		
		_this.load.atlas('measurement3_1',window.baseUrl+'assets/gameScenes/measurement3_1.png',window.baseUrl+'assets/gameScenes/measurement3_1.json');
		_this.load.atlas('measurement3_2',window.baseUrl+'assets/gameScenes/measurement3_2.png',window.baseUrl+'assets/gameScenes/measurement3_2.json');
		_this.load.atlas('measurement3_3',window.baseUrl+'assets/gameScenes/measurement3_3.png',window.baseUrl+'assets/gameScenes/measurement3_3.json');
		
		_this.load.atlas('measurement4_1',window.baseUrl+'assets/gameScenes/measurement4_1.png',window.baseUrl+'assets/gameScenes/measurement4_1.json');
		_this.load.atlas('measurement4_2',window.baseUrl+'assets/gameScenes/measurement4_2.png',window.baseUrl+'assets/gameScenes/measurement4_2.json');
		_this.load.atlas('measurement4_3',window.baseUrl+'assets/gameScenes/measurement4_3.png',window.baseUrl+'assets/gameScenes/measurement4_3.json');
		
	},

	addGameScreenAssets2:function()
	{
		_this.load.image('numbersenseText',window.baseUrl+'assets/gameScenes2/numbersenseText.png');
		_this.load.image('numberMc',window.baseUrl+'assets/gameScenes2/numberMc.png');
		_this.load.image('sequenseMc',window.baseUrl+'assets/gameScenes2/sequenseMc.png');
		_this.load.image('comparisonMc',window.baseUrl+'assets/gameScenes2/comparisonMc.png');
		_this.load.image('placevalueMc',window.baseUrl+'assets/gameScenes2/placevalueMc.png');
		_this.load.image('fractionMc',window.baseUrl+'assets/gameScenes2/fractionMc.png');

		_this.load.atlas('n1',window.baseUrl+'assets/gameScenes2/n1.png',window.baseUrl+'assets/gameScenes2/n1.json');
		_this.load.atlas('n2',window.baseUrl+'assets/gameScenes2/n2.png',window.baseUrl+'assets/gameScenes2/n2.json');
		_this.load.atlas('n3',window.baseUrl+'assets/gameScenes2/n3.png',window.baseUrl+'assets/gameScenes2/n3.json');
		_this.load.atlas('n4',window.baseUrl+'assets/gameScenes2/n4.png',window.baseUrl+'assets/gameScenes2/n4.json');
		_this.load.atlas('n5',window.baseUrl+'assets/gameScenes2/n5.png',window.baseUrl+'assets/gameScenes2/n5.json');
		_this.load.atlas('n6',window.baseUrl+'assets/gameScenes2/n6.png',window.baseUrl+'assets/gameScenes2/n6.json');
		
		_this.load.atlas('numbersense1_1',window.baseUrl+'assets/gameScenes2/numbersense1_1.png',window.baseUrl+'assets/gameScenes2/numbersense1_1.json');
		_this.load.atlas('numbersense1_2',window.baseUrl+'assets/gameScenes2/numbersense1_2.png',window.baseUrl+'assets/gameScenes2/numbersense1_2.json');
		
		_this.load.atlas('numbersense2_1',window.baseUrl+'assets/gameScenes2/numbersense2_1.png',window.baseUrl+'assets/gameScenes2/numbersense2_1.json');
		_this.load.atlas('numbersense2_2',window.baseUrl+'assets/gameScenes2/numbersense2_2.png',window.baseUrl+'assets/gameScenes2/numbersense2_2.json');
		
		_this.load.atlas('numbersense3_1',window.baseUrl+'assets/gameScenes2/numbersense3_1.png',window.baseUrl+'assets/gameScenes2/numbersense3_1.json');
		_this.load.atlas('numbersense3_2',window.baseUrl+'assets/gameScenes2/numbersense3_2.png',window.baseUrl+'assets/gameScenes2/numbersense3_2.json');
		
		_this.load.atlas('numbersense4_1',window.baseUrl+'assets/gameScenes2/numbersense4_1.png',window.baseUrl+'assets/gameScenes2/numbersense4_1.json');
		_this.load.atlas('numbersense4_2',window.baseUrl+'assets/gameScenes2/numbersense4_2.png',window.baseUrl+'assets/gameScenes2/numbersense4_2.json');
		_this.load.atlas('numbersense4_3',window.baseUrl+'assets/gameScenes2/numbersense4_3.png',window.baseUrl+'assets/gameScenes2/numbersense4_3.json');
		_this.load.atlas('numbersense4_4',window.baseUrl+'assets/gameScenes2/numbersense4_4.png',window.baseUrl+'assets/gameScenes2/numbersense4_4.json');
		
		_this.load.atlas('numbersense5_1',window.baseUrl+'assets/gameScenes2/numbersense5_1.png',window.baseUrl+'assets/gameScenes2/numbersense5_1.json');
		_this.load.atlas('numbersense5_2',window.baseUrl+'assets/gameScenes2/numbersense5_2.png',window.baseUrl+'assets/gameScenes2/numbersense5_2.json');
		_this.load.atlas('numbersense5_3',window.baseUrl+'assets/gameScenes2/numbersense5_3.png',window.baseUrl+'assets/gameScenes2/numbersense5_3.json');
		_this.load.atlas('numbersense5_4',window.baseUrl+'assets/gameScenes2/numbersense5_4.png',window.baseUrl+'assets/gameScenes2/numbersense5_4.json');
			
	},

	addGameScreenAssets3:function()
	{
		_this.load.image('numberoperationText',window.baseUrl+'assets/gameScenes3/numberOperationTxt.png');
		_this.load.image('additionMc',window.baseUrl+'assets/gameScenes3/additionMc.png');
		_this.load.image('subtractionMc',window.baseUrl+'assets/gameScenes3/subtractionMc.png');
		_this.load.image('multiplicationMc',window.baseUrl+'assets/gameScenes3/multiplicationMc.png');
		_this.load.image('divisionMc',window.baseUrl+'assets/gameScenes3/divisionMc.png');


		_this.load.atlas('numberoperation1_1',window.baseUrl+'assets/gameScenes3/numberoperation1_1.png',window.baseUrl+'assets/gameScenes3/numberoperation1_1.json');
		_this.load.atlas('numberoperation1_2',window.baseUrl+'assets/gameScenes3/numberoperation1_2.png',window.baseUrl+'assets/gameScenes3/numberoperation1_2.json');
		

		_this.load.atlas('numberoperation3_1',window.baseUrl+'assets/gameScenes3/numberoperation3_1.png',window.baseUrl+'assets/gameScenes3/numberoperation3_1.json');
		_this.load.atlas('numberoperation3_2',window.baseUrl+'assets/gameScenes3/numberoperation3_2.png',window.baseUrl+'assets/gameScenes3/numberoperation3_2.json');
		_this.load.atlas('numberoperation3_3',window.baseUrl+'assets/gameScenes3/numberoperation3_3.png',window.baseUrl+'assets/gameScenes3/numberoperation3_3.json');
		_this.load.atlas('numberoperation3_5',window.baseUrl+'assets/gameScenes3/numberoperation3_5.png',window.baseUrl+'assets/gameScenes3/numberoperation3_5.json');
		
		_this.load.atlas('numberoperation4_2',window.baseUrl+'assets/gameScenes3/numberoperation4_2.png',window.baseUrl+'assets/gameScenes3/numberoperation4_2.json');
		_this.load.atlas('numberoperation4_3',window.baseUrl+'assets/gameScenes3/numberoperation4_3.png',window.baseUrl+'assets/gameScenes3/numberoperation4_3.json');
		_this.load.atlas('numberoperation4_4',window.baseUrl+'assets/gameScenes3/numberoperation4_4.png',window.baseUrl+'assets/gameScenes3/numberoperation4_4.json');
		

			
	},


	loadCommonAssets1:function()
	{

		this.load.image('100_chart',window.baseUrl+'assets/commonAssets/100_chart.png');

		this.load.image("hintwand",window.baseUrl+"assets/commonAssets/hintwand.png");
//		this.load.image("commonBg2",window.baseUrl+"assets/commonAssets/BG.png");
        this.load.image("mcIconVolume",window.baseUrl+"assets/commonAssets/volume.png");
        this.load.image("mcIconTime",window.baseUrl+"assets/commonAssets/time.png");
        this.load.image("mcIconLength",window.baseUrl+"assets/commonAssets/length.png");
        this.load.image("mcIconWeight",window.baseUrl+"assets/commonAssets/weight.png");
        this.load.image("mcIconNumber",window.baseUrl+"assets/commonAssets/number.png");
        this.load.image("mcIconSequence",window.baseUrl+"assets/commonAssets/sequence.png");
        this.load.image("mcIconComparison",window.baseUrl+"assets/commonAssets/comparison.png");
        this.load.image("mcIconFraction",window.baseUrl+"assets/commonAssets/fraction.png");
        this.load.image("mcIconPlacevalue",window.baseUrl+"assets/commonAssets/placevalue.png");
        this.load.image("mcIconAddition",window.baseUrl+"assets/commonAssets/addition.png");
        this.load.image("mcIconSubtraction",window.baseUrl+"assets/commonAssets/subtraction.png");
        this.load.image("mcIconDivision",window.baseUrl+"assets/commonAssets/division.png");
        this.load.image("mcIconMultiplication",window.baseUrl+"assets/commonAssets/multiplication.png");

		this.load.atlas("hintIcon",window.baseUrl+"assets/commonAssets/hint.png",window.baseUrl+"assets/commonAssets/hint.json");
		this.load.image("speakerBtn",window.baseUrl+"assets/commonAssets/speakerBtn.png");
		this.load.image("scoreBg",window.baseUrl+"assets/commonAssets/scoreBg.png");
		this.load.image("timerBg",window.baseUrl+"assets/commonAssets/timerBg.png");
		this.load.image("navBar",window.baseUrl+"assets/commonAssets/Nv bar.png");
        this.load.image("hand",window.baseUrl+"assets/commonAssets/hand.png");
        this.load.image("popupbg",window.baseUrl+"assets/commonAssets/popupbg.png");
        this.load.image("popupbgEmpty",window.baseUrl+"assets/commonAssets/popupbg1.png");
        this.load.image("closebtn",window.baseUrl+"assets/commonAssets/close.png");
        this.load.atlas("popuphint",window.baseUrl+"assets/commonAssets/popuphint.png",window.baseUrl+"assets/commonAssets/popuphint.json");
		this.load.atlas("deductBg",window.baseUrl+"assets/commonAssets/minusBg.png",window.baseUrl+"assets/commonAssets/minusBg.json");
        this.load.atlas("endscreendeductBg",window.baseUrl+"assets/commonAssets/whiteminusBg.png",window.baseUrl+"assets/commonAssets/whiteminusBg.json");
        this.load.image("transparent",window.baseUrl+"assets/commonAssets/transparent.png");

	    
		this.load.atlas("hint1",window.baseUrl+"assets/commonAssets/1.png",window.baseUrl+"assets/commonAssets/1.json");
		this.load.atlas("hint2",window.baseUrl+"assets/commonAssets/2.png",window.baseUrl+"assets/commonAssets/2.json");
		this.load.atlas("hint3",window.baseUrl+"assets/commonAssets/3.png",window.baseUrl+"assets/commonAssets/3.json");
        this.load.atlas("emoji",window.baseUrl+"assets/commonAssets/emojis.png",window.baseUrl+"assets/commonAssets/emojis.json");

		this.load.image("scoreSceneBg",window.baseUrl+"assets/scoreAssets/scoreBg.png");
		this.load.image("HomeBtn",window.baseUrl+"assets/scoreAssets/HomeBtn.png");
		this.load.image("replayBtn",window.baseUrl+"assets/scoreAssets/replayBtn.png");
		this.load.image("terrificText",window.baseUrl+"assets/scoreAssets/terrificText.png");
		this.load.image("star5",window.baseUrl+"assets/scoreAssets/star5.png");
		this.load.image("dot",window.baseUrl+"assets/scoreAssets/dot.png");
		this.load.atlas("creditBg",window.baseUrl+"assets/commonAssets/minusBg.png",window.baseUrl+"assets/commonAssets/minusBg.json");
        
        this.load.video('demo','assets/demoVideos/fraction.mp4');	

        this.load.image("bottomBar",window.baseUrl+"assets/commonAssets/bottomBar.png");

        this.load.atlas("hintscreennew",window.baseUrl+"assets/commonAssets/hintscreen.png",window.baseUrl+"assets/commonAssets/hintscreen.json");

        this.load.image("forwardbtn",window.baseUrl+"assets/commonAssets/forward.png");
        this.load.image("backwardbtn",window.baseUrl+"assets/commonAssets/backward.png");

        this.load.image("skipDemoVideos",window.baseUrl+"assets/commonAssets/skipArrow.png");


    },
	
	
    addgame7_2Assets:function()
    {
        this.load.image('Level72_bg1',window.baseUrl+'assets/gradeAssets/7.2/backg2.png');
//        this.load.image('Level72_bg2',window.baseUrl+'assets/gradeAssets/7.2/bg2.png');
        this.load.image('Level72_bg2',window.baseUrl+'assets/gradeAssets/7.2/backg.png');

        this.load.atlas('numbg',window.baseUrl+'assets/gradeAssets/7.2/numbg.png' ,window.baseUrl+'json/gradeJson/7.2/numbg.json');
        this.load.atlas('rightBtn',window.baseUrl+'assets/gradeAssets/7.2/rightBtn.png' ,window.baseUrl+'json/gradeJson/7.2/rightBtn.json');
        this.load.atlas('wrongBtn',window.baseUrl+'assets/gradeAssets/7.2/wrongBtn.png' ,window.baseUrl+'json/gradeJson/7.2/wrongBtn.json');

        //My files to load
        this.load.atlas('Level72_tickMark',window.baseUrl+'assets/gradeAssets/7.2/tickMark.png' ,window.baseUrl+'json/gradeJson/7.2/tickMark.json');

        this.load.atlas('Level72_minHand',window.baseUrl+'assets/gradeAssets/7.2/minuteHand.png',window.baseUrl+'json/gradeJson/7.2/minuteHand.json');
        this.load.atlas('Level72_hourHand',window.baseUrl+'assets/gradeAssets/7.2/hourHand.png',window.baseUrl+'json/gradeJson/7.2/hourHand.json');
        this.load.atlas('Level72_circleToCover',window.baseUrl+'assets/gradeAssets/7.2/A3.png',window.baseUrl+'json/gradeJson/7.2/A3.json');

        this.load.image('Level72_hr',window.baseUrl+'assets/gradeAssets/7.2/hr.png');
        this.load.image('Level72_mn',window.baseUrl+'assets/gradeAssets/7.2/mn.png');

        this.load.atlas('Level72_clock',window.baseUrl+'assets/gradeAssets/7.2/clock.png' ,window.baseUrl+'json/gradeJson/7.2/clock.json');
        this.load.atlas('Level72_inputBox',window.baseUrl+'assets/gradeAssets/7.2/inputBox.png' ,window.baseUrl+'json/gradeJson/7.2/inputBox.json');
        this.load.atlas('Level72_showNumbers',window.baseUrl+'assets/gradeAssets/7.2/0To9.png' ,window.baseUrl+'json/gradeJson/7.2/0To9.json');
    },


    
  

	addgame3_2Assets:function()
	{
		_this.load.image('Level32A_gameBg',window.baseUrl+'assets/gradeAssets/3.2A/gameBg.png');
        
        _this.load.image('Level32A_weight1',window.baseUrl+'assets/gradeAssets/3.2A/weight1.png');
        _this.load.image('Level32A_weight2',window.baseUrl+'assets/gradeAssets/3.2A/weight2.png');
        _this.load.image('Level32A_weight3',window.baseUrl+'assets/gradeAssets/3.2A/weight3.png');
        
        _this.load.atlas('Level32A_Can',window.baseUrl+'assets/gradeAssets/3.2A/Can.png',window.baseUrl+'json/gradeJson/3.2A/Can.json');
        _this.load.atlas('Level32A_Carrot',window.baseUrl+'assets/gradeAssets/3.2A/Carot.png',window.baseUrl+'json/gradeJson/3.2A/Carot.json');
        _this.load.atlas('Level32A_Coin',window.baseUrl+'assets/gradeAssets/3.2A/Coin.png',window.baseUrl+'json/gradeJson/3.2A/Coin.json');
        _this.load.atlas('Level32A_Ball',window.baseUrl+'assets/gradeAssets/3.2A/Ball.png',window.baseUrl+'json/gradeJson/3.2A/Ball.json');
        _this.load.atlas('Level32A_Book',window.baseUrl+'assets/gradeAssets/3.2A/Book.png',window.baseUrl+'json/gradeJson/3.2A/Book.json');
        _this.load.atlas('Level32A_Banana',window.baseUrl+'assets/gradeAssets/3.2A/Banana.png',window.baseUrl+'json/gradeJson/3.2A/Banana.json');
        _this.load.atlas('Level32A_Comb',window.baseUrl+'assets/gradeAssets/3.2A/comb.png',window.baseUrl+'json/gradeJson/3.2A/comb.json');
        _this.load.atlas('Level32A_Eraser',window.baseUrl+'assets/gradeAssets/3.2A/eraser.png',window.baseUrl+'json/gradeJson/3.2A/eraser.json');
        _this.load.atlas('Level32A_Eraser2',window.baseUrl+'assets/gradeAssets/3.2A/eraser2.png',window.baseUrl+'json/gradeJson/3.2A/eraser2.json');
        _this.load.atlas('Level32A_Glass',window.baseUrl+'assets/gradeAssets/3.2A/Glass.png',window.baseUrl+'json/gradeJson/3.2A/Glass.json');
        _this.load.atlas('Level32A_Glass2',window.baseUrl+'assets/gradeAssets/3.2A/Glass2.png',window.baseUrl+'json/gradeJson/3.2A/Glass2.json');
        _this.load.atlas('Level32A_Mug',window.baseUrl+'assets/gradeAssets/3.2A/Mug.png',window.baseUrl+'json/gradeJson/3.2A/Mug.json');
        _this.load.atlas('Level32A_Key',window.baseUrl+'assets/gradeAssets/3.2A/Key.png',window.baseUrl+'json/gradeJson/3.2A/Key.json');
        _this.load.atlas('Level32A_Pappaya',window.baseUrl+'assets/gradeAssets/3.2A/Pappaya.png',window.baseUrl+'json/gradeJson/3.2A/Pappaya.json');
        _this.load.atlas('Level32A_Pencil',window.baseUrl+'assets/gradeAssets/3.2A/Pencil.png',window.baseUrl+'json/gradeJson/3.2A/Pencil.json');
        _this.load.atlas('Level32A_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.2A/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.2A/ScrewDriver.json');
        _this.load.atlas('Level32A_Shoe',window.baseUrl+'assets/gradeAssets/3.2A/Shoe.png',window.baseUrl+'json/gradeJson/3.2A/Shoe.json');
 
        
	},


	

	addgame1_5Assets:function(){
		this.load.image('unity15_bg1','assets/gradeAssets/unity/1.5/commonAssets/BG.png');
        this.load.atlas('unity15_CommonBackBtn','assets/gradeAssets/unity/1.5/commonAssets/backbtn.png' ,'json/gradeJson/unity/1.5/backbtn.json');
        this.load.atlas('unity15_CommonSpeakerBtn','assets/gradeAssets/unity/1.5/commonAssets/speaker.png' ,'json/gradeJson/unity/1.5/speaker.json');
        //this.load.atlas('unity15_starAnim','assets/gradeAssets/unity/1.5/commonAssets/starAnim.png','json/gradeJson/unity/1.5/starAnim.json');
        this.load.atlas('unity15_btn','assets/gradeAssets/unity/1.5/commonAssets/btn.png','json/gradeJson/unity/1.5/btn.json');
        this.load.image('unity15_bg3','assets/gradeAssets/unity/1.5/commonAssets/bg3.png');
        this.load.image('unity15_tittleBaar','assets/gradeAssets/unity/1.5/commonAssets/tittleBaar.png');
        this.load.atlas('unity15_replay','assets/gradeAssets/unity/1.5/commonAssets/reply.png' ,'json/gradeJson/unity/1.5/reply.json');
        this.load.image('unity1_2hintscreen', 'assets/gradeAssets/unity/1.5/hintscreen.png');

        
        this.load.image('unity15_shadow','assets/gradeAssets/unity/1.5/Basket_shadow.png');
        this.load.image('unity15_basket','assets/gradeAssets/unity/1.5/Basket.png');
        this.load.image('unity15_Basket_Back','assets/gradeAssets/unity/1.5/Basket_Back.png');
        this.load.image('unity15_tree','assets/gradeAssets/unity/1.5/Tree.png');
        this.load.atlas('unity15_tickBtn','assets/gradeAssets/unity/1.5/commonAssets/tick.png' ,'json/gradeJson/unity/1.5/tick.json');
         this.load.image('unity15_navBar','assets/gradeAssets/unity/1.5/commonAssets/navBar.png');
        this.load.image('unity15_topic','assets/gradeAssets/unity/1.5/topic.png');
         this.load.image('unity15_practice','assets/gradeAssets/unity/1.5/practice.png');
        this.load.image('unity15_topicOutline','assets/gradeAssets/unity/1.5/commonAssets/topicOutline.png');
        this.load.image('unity15_timebg','assets/gradeAssets/unity/1.5/commonAssets/timebg.png');
        this.load.atlas('unity15_mango','assets/gradeAssets/unity/1.5/mango.png' ,'json/gradeJson/unity/1.5/mango.json');
        this.load.atlas('unity15_mangoCeleb','assets/gradeAssets/unity/1.5/mangoCeleb.png' ,'json/gradeJson/unity/1.5/mangoCeleb.json');
        this.load.atlas('unity15_NumberKey','assets/gradeAssets/unity/1.5/NumberKey.png' ,'json/gradeJson/unity/1.5/NumberKey.json');
	
	},
	

	

	addgame4_4_1Assets:function(){
        this.load.atlas('BoyhandsUp','assets/gradeAssets/unity/4.4.1/BoyhandsUp.png' ,'json/gradeJson/unity/4.4.1/BoyhandsUp.json');
        this.load.atlas('BoyRightPointing','assets/gradeAssets/unity/4.4.1/BoyRightPointing.png' ,'json/gradeJson/unity/4.4.1/BoyRightPointing.json');
        this.load.atlas('BoyWrong','assets/gradeAssets/unity/4.4.1/BoyWrong.png' ,'json/gradeJson/unity/4.4.1/BoyWrong.json');
        // this.load.atlas('tik1','assets/gradeAssets/4.4.1/tik 1.png' ,'assets/gradeAssets/4.4.1/tik 1.json');
        this.load.atlas('BoyJumping','assets/gradeAssets/unity/4.4.1/BoyJumping.png' ,'json/gradeJson/unity/4.4.1/BoyJumping.json');
        this.load.atlas('BoyhandsUp','assets/gradeAssets/unity/4.4.1/BoyhandsUp.png' ,'json/gradeJson/unity/4.4.1/BoyhandsUp.json');
        this.load.atlas('BoyLeftPointing','assets/gradeAssets/unity/4.4.1/BoyLeftPointing.png' ,'json/gradeJson/unity/4.4.1/BoyLeftPointing.json');
        this.load.atlas('BoySadAnim','assets/gradeAssets/unity/4.4.1/BoySadAnim.png' ,'json/gradeJson/unity/4.4.1/BoySadAnim.json');

        //common grade-json files
        this.load.atlas('box1','assets/gradeAssets/unity/commonAssets/box1.png' ,'json/gradeJson/unity/commonJson/box1.json');
        this.load.atlas('box2','assets/gradeAssets/unity/commonAssets/box 2.png' ,'json/gradeJson/unity/commonJson/box 2.json');
        this.load.image('Level441_bg1','assets/gradeAssets/unity/commonAssets/BG.png');
        this.load.image('Tree','assets/gradeAssets/unity/commonAssets/Tree.png');
        this.load.atlas('tickBtn','assets/gradeAssets/unity/commonAssets/rightmark.png' ,'json/gradeJson/unity/commonJson/rightmark.json');
      //  this.load.image('hintscreen','assets/gradeAssets/unity/commonAssets/hintscreen.png');
        
        this.load.video('demo1','assets/demoVideos/hintscreen1.mp4');
        this.load.video('demo2','assets/demoVideos/hintscreen2.mp4');
       // this.load.image("skipDemoVideos","assets/commonAssets/skipArrow.png");
        
        this.load.image('hintno1','assets/gradeAssets/unity/commonAssets/hintno1.png');
        this.load.image('hintno2','assets/gradeAssets/unity/commonAssets/hintno2.png');
        this.load.image('yellowbg','assets/gradeAssets/unity/commonAssets/popupbg12.png');
        this.load.image('greybg','assets/gradeAssets/unity/commonAssets/greybg.png');
        
        this.load.image('100_chart','assets/gradeAssets/unity/commonAssets/100_chart.png');
        this.load.atlas('emoji','assets/commonAssets/emojis.png','assets/commonAssets/emojis.json');
        
	
	},
	addgame4_5_1Assets:function(){
        this.load.atlas('BoyRightPointing_blue','assets/gradeAssets/unity/4.5.1/BoyRightPointing_blue.png' ,'json/gradeJson/unity/4.5.1/BoyRightPointing_blue.json');
        this.load.atlas('BoyLeftPointing_blue','assets/gradeAssets/unity/4.5.1/BoyLeftPointing_blue.png' ,'json/gradeJson/unity/4.5.1/BoyLeftPointing_blue.json');
        this.load.atlas('BoyJumping_blue','assets/gradeAssets/unity/4.5.1/BoyJumping_blue.png' ,'json/gradeJson/unity/4.5.1/BoyJumping_blue.json');
        this.load.atlas('BoyhandsUp_blue','assets/gradeAssets/unity/4.5.1/BoyhandsUp_blue.png' ,'json/gradeJson/unity/4.5.1/BoyhandsUp_blue.json');
        this.load.image('BoySad_blue','assets/gradeAssets/unity/4.5.1/BoySad_blue.png');
	},


	addgame4_4_2Assets:function(){
        this.load.atlas('BoyhandsUp','assets/gradeAssets/unity/4.4.2/BoyhandsUp.png' ,'json/gradeJson/unity/4.4.2/BoyhandsUp.json');
        this.load.atlas('BoyRightPointing','assets/gradeAssets/unity/4.4.2/BoyRightPointing.png' ,'json/gradeJson/unity/4.4.2/BoyRightPointing.json');
        // this.load.atlas('tik1','assets/gradeAssets/4.4.1/tik 1.png' ,'assets/gradeAssets/4.4.1/tik 1.json');
        this.load.atlas('BoyJumping','assets/gradeAssets/unity/4.4.2/BoyJumping.png' ,'json/gradeJson/unity/4.4.2/BoyJumping.json');
        this.load.atlas('BoyhandsUp','assets/gradeAssets/unity/4.4.2/BoyhandsUp.png' ,'json/gradeJson/unity/4.4.2/BoyhandsUp.json');
        this.load.atlas('BoyLeftPointing','assets/gradeAssets/unity/4.4.2/BoyLeftPointing.png' ,'json/gradeJson/unity/4.4.2/BoyLeftPointing.json');
        this.load.image('hintscreen','assets/gradeAssets/unity/4.4.2/hintscreen.png');
        this.load.atlas('BoySadAnim','assets/gradeAssets/unity/4.4.2/BoySadAnim.png' ,'json/gradeJson/unity/4.4.2/BoySadAnim.json');

        //common grade-json files
        this.load.atlas('box1','assets/gradeAssets/unity/commonAssets/box1.png' ,'json/gradeJson/unity/commonJson/box1.json');
        this.load.atlas('box2','assets/gradeAssets/unity/commonAssets/box 2.png' ,'json/gradeJson/unity/commonJson/box 2.json');
        this.load.image('Level442_bg1','assets/gradeAssets/unity/commonAssets/BG.png');
        this.load.image('Tree','assets/gradeAssets/unity/commonAssets/Tree.png');
        this.load.atlas('tickBtn','assets/gradeAssets/unity/commonAssets/rightmark.png' ,'json/gradeJson/unity/commonJson/rightmark.json');
        this.load.image('box','assets/gradeAssets/unity/commonAssets/box.png');
        this.load.atlas('glow','assets/gradeAssets/unity/commonAssets/glow.png','json/gradeJson/unity/commonJson/glow.json');
        this.load.image('100_chart','assets/gradeAssets/unity/commonAssets/100_chart.png');
        this.load.image('yellowbg','assets/gradeAssets/unity/commonAssets/yellowbgnew.png');
        this.load.image('greybg','assets/gradeAssets/unity/commonAssets/greybg.png');
        this.load.atlas('hintno','assets/gradeAssets/unity/commonAssets/hintno.png','json/gradeJson/unity/commonJson/hintno.json');
	    
	},

	addgame4_5_2Assets:function(){
        this.load.atlas('BoyRightPointing_blue','assets/gradeAssets/unity/4.5.2/BoyRightPointing_blue.png' ,'json/gradeJson/unity/4.5.2/BoyRightPointing_blue.json');
        this.load.atlas('BoyLeftPointing_blue','assets/gradeAssets/unity/4.5.2/BoyLeftPointing_blue.png' ,'json/gradeJson/unity/4.5.2/BoyLeftPointing_blue.json');
        this.load.atlas('BoyJumping_blue','assets/gradeAssets/unity/4.5.2/BoyJumping_blue.png' ,'json/gradeJson/unity/4.5.2/BoyJumping_blue.json');
        this.load.atlas('BoyhandsUp_blue','assets/gradeAssets/unity/4.5.2/BoyhandsUp_blue.png' ,'json/gradeJson/unity/4.5.2/BoyhandsUp_blue.json');
        this.load.atlas('BoyWrong_blue','assets/gradeAssets/unity/4.5.2/BoyWrong_blue.png' ,'json/gradeJson/unity/4.5.2/BoyWrong.json');
        this.load.image('BoySad_blue','assets/gradeAssets/unity/4.5.2/BoySad_blue.png');
	},


	addgame4_4_3Assets:function(){
        this.load.atlas('BoyhandsUp','assets/gradeAssets/unity/4.4.3/BoyhandsUp.png' ,'json/gradeJson/unity/4.4.3/BoyhandsUp.json');
        this.load.atlas('BoyRightPointing','assets/gradeAssets/unity/4.4.3/BoyRightPointing.png' ,'json/gradeJson/unity/4.4.3/BoyRightPointing.json');
        // this.load.atlas('tik1','assets/gradeAssets/4.4.1/tik 1.png' ,'assets/gradeAssets/4.4.1/tik 1.json');
        this.load.atlas('BoyJumping','assets/gradeAssets/unity/4.4.3/BoyJumping.png' ,'json/gradeJson/unity/4.4.3/BoyJumping.json');
        this.load.atlas('BoyhandsUp','assets/gradeAssets/unity/4.4.3/BoyhandsUp.png' ,'json/gradeJson/unity/4.4.3/BoyhandsUp.json');
        this.load.atlas('BoyLeftPointing','assets/gradeAssets/unity/4.4.3/BoyLeftPointing.png' ,'json/gradeJson/unity/4.4.3/BoyLeftPointing.json');
        this.load.image('hintscreen2','assets/gradeAssets/unity/commonAssets/hintscreen.png');
        this.load.atlas('BoySadAnim','assets/gradeAssets/unity/4.4.3/BoySadAnim.png' ,'json/gradeJson/unity/4.4.3/BoySadAnim.json');

        this.load.atlas('box1','assets/gradeAssets/unity/commonAssets/box1.png' ,'json/gradeJson/unity/commonJson2/box1.json');
        this.load.atlas('box2','assets/gradeAssets/unity/commonAssets/box 2.png' ,'json/gradeJson/unity/commonJson2/box 2.json');
        this.load.image('Level443_bg1','assets/gradeAssets/unity/commonAssets/BG.png');
        this.load.image('Tree','assets/gradeAssets/unity/commonAssets/Tree.png');
        this.load.atlas('tickBtn','assets/gradeAssets/unity/commonAssets/rightmark.png' ,'json/gradeJson/unity/commonJson2/rightmark.json');
        
        this.load.image('boxnew','assets/gradeAssets/unity/commonAssets/box.png');
        this.load.atlas('glownew','assets/gradeAssets/unity/commonAssets/glow.png' ,'json/gradeJson/unity/commonJson2/glow.json');
        
        this.load.atlas('glownew','assets/gradeAssets/unity/commonAssets/glow.png','json/gradeJson/unity/commonJson2/glow.json');
        this.load.image('yellowbg','assets/gradeAssets/unity/commonAssets/yellowbgnew.png');
    //    this.load.image('greybg','assets/gradeAssets/unity/commonAssets/greybg.png');
        this.load.atlas('hintno','assets/gradeAssets/unity/commonAssets/hintno.png','json/gradeJson/unity/commonJson2/hintno.json');
	
	},


	addgame4_5_3Assets:function(){
        this.load.atlas('BoyRightPointing_blue','assets/gradeAssets/unity/4.5.3/BoyRightPointing_blue.png' ,'json/gradeJson/unity/4.5.3/BoyRightPointing_blue.json');
        this.load.atlas('BoyLeftPointing_blue','assets/gradeAssets/unity/4.5.3/BoyLeftPointing_blue.png' ,'json/gradeJson/unity/4.5.3/BoyLeftPointing_blue.json');
        this.load.atlas('BoyJumping_blue','assets/gradeAssets/unity/4.5.3/BoyJumping_blue.png' ,'json/gradeJson/unity/4.5.3/BoyJumping_blue.json');
        this.load.atlas('BoyhandsUp_blue','assets/gradeAssets/unity/4.5.3/BoyhandsUp_blue.png' ,'json/gradeJson/unity/4.5.3/BoyhandsUp_blue.json');
        this.load.atlas('BoyWrong_blue','assets/gradeAssets/unity/4.5.3/BoyWrong_blue.png' ,'json/gradeJson/unity/4.5.3/BoyWrong.json');
        this.load.image('BoySad_blue','assets/gradeAssets/unity/4.5.3/BoySad_blue.png');
	},


	

	addgame1_2AAssets:function()
	{
		this.load.image('unity1.2Abackg',window.baseUrl+'assets/gradeAssets/1.2A/bg.png');
        _this.load.atlas('unity1.2AstarAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.image('unity1.2Atopbar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('unity1.2Atimerbg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('unity1.2Aspeaker',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');

        this.load.atlas('unity1.2Aflg1o1', window.baseUrl+'assets/gradeAssets/1.2A/flg1o1.png', window.baseUrl+'json/gradeJson/1.2A/flg1o1.json');
        this.load.image('unity1.2Aflg1o2', window.baseUrl+'assets/gradeAssets/1.2A/flg1o2.png');
        this.load.image('unity1.2Aflg1o3', window.baseUrl+'assets/gradeAssets/1.2A/flg1o3.png');
        
        this.load.atlas('unity1.2Aflg2o1', window.baseUrl+'assets/gradeAssets/1.2A/flg2o1.png', window.baseUrl+'json/gradeJson/1.2A/flg2o1.json');
        this.load.image('unity1.2Aflg2o2', window.baseUrl+'assets/gradeAssets/1.2A/flg2o2.png');
        this.load.image('unity1.2Aflg2o3', window.baseUrl+'assets/gradeAssets/1.2A/flg2o3.png');
               
        this.load.atlas('unity1.2Aflg3o1', window.baseUrl+'assets/gradeAssets/1.2A/flg3o1.png', window.baseUrl+'json/gradeJson/1.2A/flg3o1.json');
        this.load.image('unity1.2Aflg3o2', window.baseUrl+'assets/gradeAssets/1.2A/flg3o2.png');
        this.load.image('unity1.2Aflg3o3', window.baseUrl+'assets/gradeAssets/1.2A/flg3o3.png');
                        
        this.load.atlas('unity1.2Aflg4o3', window.baseUrl+'assets/gradeAssets/1.2A/flg4o3.png', window.baseUrl+'json/gradeJson/1.2A/flg4o3.json');
        this.load.image('unity1.2Aflg4o1', window.baseUrl+'assets/gradeAssets/1.2A/flg4o1.png');
        this.load.image('unity1.2Aflg4o2', window.baseUrl+'assets/gradeAssets/1.2A/flg4o2.png');
        
        this.load.atlas('unity1.2Aflg5o2', window.baseUrl+'assets/gradeAssets/1.2A/flg5o2.png', window.baseUrl+'json/gradeJson/1.2A/flg5o2.json');
        this.load.image('unity1.2Aflg5o1', window.baseUrl+'assets/gradeAssets/1.2A/flg5o1.png');
        this.load.image('unity1.2Aflg5o3', window.baseUrl+'assets/gradeAssets/1.2A/flg5o3.png');

        this.load.atlas('unity1.2Aflg6o2', window.baseUrl+'assets/gradeAssets/1.2A/flg6o2.png', window.baseUrl+'json/gradeJson/1.2A/flg6o2.json');
        this.load.image('unity1.2Aflg6o1', window.baseUrl+'assets/gradeAssets/1.2A/flg6o1.png');
        this.load.image('unity1.2Aflg6o3', window.baseUrl+'assets/gradeAssets/1.2A/flg6o3.png');
        
        this.load.atlas('unity1.2Aflg7o3', window.baseUrl+'assets/gradeAssets/1.2A/flg7o3.png', window.baseUrl+'json/gradeJson/1.2A/flg7o3.json');
        this.load.image('unity1.2Aflg7o1', window.baseUrl+'assets/gradeAssets/1.2A/flg7o1.png');
        this.load.image('unity1.2Aflg7o2', window.baseUrl+'assets/gradeAssets/1.2A/flg7o2.png');
        
        this.load.atlas('unity1.2Aflg8o1', window.baseUrl+'assets/gradeAssets/1.2A/flg8o1.png', window.baseUrl+'json/gradeJson/1.2A/flg8o1.json');
        this.load.image('unity1.2Aflg8o2', window.baseUrl+'assets/gradeAssets/1.2A/flg8o2.png');
        this.load.image('unity1.2Aflg8o3', window.baseUrl+'assets/gradeAssets/1.2A/flg8o3.png');
        
        this.load.atlas('unity1.2Aflg9o1', window.baseUrl+'assets/gradeAssets/1.2A/flg9o1.png', window.baseUrl+'json/gradeJson/1.2A/flg9o1.json');
        this.load.image('unity1.2Aflg9o2', window.baseUrl+'assets/gradeAssets/1.2A/flg9o2.png');
        this.load.image('unity1.2Aflg9o3', window.baseUrl+'assets/gradeAssets/1.2A/flg9o3.png');
        //this.load.image('unity1.2Aflg9o4', window.baseUrl+'assets/gradeAssets/1.2A/flg9o4.png');
        
        this.load.atlas('unity1.2Aflg10o1', window.baseUrl+'assets/gradeAssets/1.2A/flg10o1.png', window.baseUrl+'json/gradeJson/1.2A/flg10o1.json');
        this.load.image('unity1.2Aflg10o2', window.baseUrl+'assets/gradeAssets/1.2A/flg10o2.png');
        this.load.image('unity1.2Aflg10o3', window.baseUrl+'assets/gradeAssets/1.2A/flg10o3.png');

        this.load.atlas('unity1.2Aflg11o3', window.baseUrl+'assets/gradeAssets/1.2A/flg11o3.png', window.baseUrl+'json/gradeJson/1.2A/flg11o3.json');
        this.load.image('unity1.2Aflg11o1', window.baseUrl+'assets/gradeAssets/1.2A/flg11o1.png');
        this.load.image('unity1.2Aflg11o2', window.baseUrl+'assets/gradeAssets/1.2A/flg11o2.png');
        
        this.load.atlas('unity1.2Aflg12o3', window.baseUrl+'assets/gradeAssets/1.2A/flg12o3.png', window.baseUrl+'json/gradeJson/1.2A/flg12o3.json');
        this.load.image('unity1.2Aflg12o1', window.baseUrl+'assets/gradeAssets/1.2A/flg12o1.png');
        this.load.image('unity1.2Aflg12o2', window.baseUrl+'assets/gradeAssets/1.2A/flg12o2.png');
        
        this.load.atlas('unity1.2Aflg13o3', window.baseUrl+'assets/gradeAssets/1.2A/flg13o3.png', window.baseUrl+'json/gradeJson/1.2A/flg13o3.json');
        this.load.image('unity1.2Aflg13o1', window.baseUrl+'assets/gradeAssets/1.2A/flg13o1.png');
        this.load.image('unity1.2Aflg13o2', window.baseUrl+'assets/gradeAssets/1.2A/flg13o2.png');
	},

	

	addgame1_6Assets:function()
	{
        this.load.image('unity16_tittleBar','assets/gradeAssets/unity/1.6/commonAssets/tittleBar.png');
        this.load.atlas('unity16_btn','assets/gradeAssets/unity/1.6/commonAssets/btn.png','json/gradeJson/unity/1.6/btn.json');
        this.load.image('unity16_background','assets/gradeAssets/unity/1.6/commonAssets/BG.png');
        this.load.image('unity16_BG_01', 'assets/gradeAssets/unity/1.6/BG_01.png');
        this.load.image('unity16_Bubble','assets/gradeAssets/unity/1.6/Bubble.png');
        this.load.atlas('unity16_BubbleAni','assets/gradeAssets/unity/1.6/BubbleAni.png','json/gradeJson/unity/1.6/BubbleAni.json');
	},

	
    addgame2_6_1Assets:function(){
        this.load.image('unity2_6_1_bg','assets/gradeAssets/unity/2.6.1/commonAssets/BG.png');
        this.load.image('unity2_6_1_backg','assets/gradeAssets/unity/2.6.1/commonAssets/backg.png');
        this.load.image('unity2_6_1_numbg','assets/gradeAssets/unity/2.6.1/commonAssets/numbg.png');
        this.load.atlas('unity2_6_1_btn','assets/gradeAssets/unity/2.6.1/commonAssets/btn.png','json/gradeJson/unity/2.6.1/btn.json');
        
        this.load.image('unity2_6_1_Base','assets/gradeAssets/unity/2.6.1/Base.png');
        this.load.image('unity2_6_1_Rectangle','assets/gradeAssets/unity/2.6.1/Rectangle.png');
        this.load.image('unity2_6_1_Rectangle 2','assets/gradeAssets/unity/2.6.1/Rectangle 2.png');
        this.load.atlas('unity2_6_1_box','assets/gradeAssets/unity/2.6.1/box.png','json/gradeJson/unity/2.6.1/box.json');
        
        this.load.atlas('unity2_6_1_glow1','assets/gradeAssets/unity/2.6.1/glow1.png','json/gradeJson/unity/2.6.1/glow1.json');
        
        this.load.atlas('unity2_6_1_rightmark','assets/gradeAssets/unity/2.6.1/rightmark.png','json/gradeJson/unity/2.6.1/rightmark.json');
    },

    addunitygame3_1_1Assets2:function(){
        
                
       this.load.atlas('unity3_1_1rightmark',window.baseUrl+'assets/gradeAssets/3.1.1/rightmark.png',window.baseUrl+'json/gradeJson/3.1.1/rightmark.json');
        this.load.atlas('unity3_1_1box',window.baseUrl+'assets/gradeAssets/3.1.1/box.png',window.baseUrl+'json/gradeJson/3.1.1/box.json');
        this.load.atlas('unity3_1_1boxanim',window.baseUrl+'assets/gradeAssets/3.1.1/boxanim.png',window.baseUrl+'json/gradeJson/3.1.1/boxanim.json');
        this.load.atlas('unity3_1_1eraser',window.baseUrl+'assets/gradeAssets/3.1.1/eraser.png',window.baseUrl+'json/gradeJson/3.1.1/eraser.json');
        this.load.atlas('unity3_1_1numberpad',window.baseUrl+'assets/gradeAssets/3.1.1/numberpad.png',window.baseUrl+'json/gradeJson/3.1.1/numberpad.json');
        this.load.image('unity3_1_1scorebox', window.baseUrl+'assets/gradeAssets/3.1.1/scorebox.png');
        this.load.image('unity3_1_1tbox', window.baseUrl+'assets/gradeAssets/3.1.1/tbox.png');
        this.load.image('unity3_1_1tbox2', window.baseUrl+'assets/gradeAssets/3.1.1/tbox2.png');
        this.load.atlas('unity3_1_1woodstick1',window.baseUrl+'assets/gradeAssets/3.1.1/woodstick1.png',window.baseUrl+'json/gradeJson/3.1.1/woodstick1.json');
        this.load.atlas('unity3_1_1woodstick2',window.baseUrl+'assets/gradeAssets/3.1.1/woodstick2.png',window.baseUrl+'json/gradeJson/3.1.1/woodstick2.json');
        this.load.atlas('unity3_1_1woodstickanim',window.baseUrl+'assets/gradeAssets/3.1.1/woodstickanim.png',window.baseUrl+'json/gradeJson/3.1.1/woodstickanim.json');
        this.load.image('unity3_1_1b2', window.baseUrl+'assets/gradeAssets/3.1.1/b2.png');
        this.load.atlas('unity3_1_1ansbox',window.baseUrl+'assets/gradeAssets/3.1.1/ansbox.png',window.baseUrl+'json/gradeJson/3.1.1/ansbox.json');

        this.load.image('unity3_1_1backg',window.baseUrl+'assets/commonAssets/backg.png');
        this.load.image('Unity4_1_1hand', window.baseUrl+'assets/gradeAssets/3.1.1/hand.png');
        
        
        this.load.atlas('unity3_1_2backbtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/3.1.2/backbtn.json');
        
       
        this.load.atlas('unity3_1_2rightmark',window.baseUrl+'assets/gradeAssets/3.1.2/rightmark.png',window.baseUrl+'json/gradeJson/3.1.2/rightmark.json');
        this.load.atlas('unity3_1_2coin',window.baseUrl+'assets/gradeAssets/3.1.2/coin.png',window.baseUrl+'json/gradeJson/3.1.2/coin.json');
        this.load.atlas('unity3_1_2coinanim',window.baseUrl+'assets/gradeAssets/3.1.2/coinanim.png',window.baseUrl+'json/gradeJson/3.1.2/coinanim.json');
        this.load.atlas('unity3_1_2eraser',window.baseUrl+'assets/gradeAssets/3.1.2/eraser.png',window.baseUrl+'json/gradeJson/3.1.2/eraser.json');
        this.load.atlas('unity3_1_2numberpad',window.baseUrl+'assets/gradeAssets/3.1.2/numberpad.png',window.baseUrl+'json/gradeJson/3.1.2/numberpad.json');
        this.load.image('unity3_1_2scorebox', window.baseUrl+'assets/gradeAssets/3.1.2/scorebox.png');
        this.load.image('unity3_1_2tbox', window.baseUrl+'assets/gradeAssets/3.1.2/tbox.png');
        this.load.image('unity3_1_2b2', window.baseUrl+'assets/gradeAssets/3.1.2/b2.png');
        this.load.atlas('unity3_1_2ansbox',window.baseUrl+'assets/gradeAssets/3.1.2/ansbox.png',window.baseUrl+'json/gradeJson/3.1.2/ansbox.json');
        this.load.atlas('unity3_1_2box',window.baseUrl+'assets/gradeAssets/3.1.2/box.png',window.baseUrl+'json/gradeJson/3.1.2/box.json');
        this.load.atlas('unity3_1_2boxanim',window.baseUrl+'assets/gradeAssets/3.1.2/boxanim.png',window.baseUrl+'json/gradeJson/3.1.2/boxanim.json');
		this.load.image('unity3_1_2backg',window.baseUrl+'assets/commonAssets/backg.png');
	
	},


    addunitygame3_1_1Assets:function(){

          
       
      
         this.load.atlas('Level321_coin1Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1 anim.json');
        this.load.atlas('Level321_coin10Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10 anim.json');
        this.load.atlas('Level321_coin100Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100 anim.json');
        this.load.atlas('Level321_numberSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall.json');
        this.load.atlas('Level321_numberVSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberVSmall.json');
        this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');

        //this.load.atlas('Level321_numberBox',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox.json');
        this.load.atlas('Level321_numberBox1',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox-old.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox-old.json');

        this.load.atlas('Level321_Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1.json');
        this.load.atlas('Level321_Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10.json');
        this.load.atlas('Level321_Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100.json');
        this.load.atlas('Level321_erase',window.baseUrl+'assets/gradeAssets/3.2.1/erase.png' ,window.baseUrl+'json/gradeJson/3.2.1/erase.json');
        this.load.atlas('Level321_rightmark',window.baseUrl+'assets/gradeAssets/3.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/3.2.1/rightmark.json');
        this.load.atlas('Level321_NumberKey',window.baseUrl+'assets/gradeAssets/3.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/3.2.1/numbers.json');
        
        this.load.atlas('Level321_OneToHundred',window.baseUrl+'assets/gradeAssets/3.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/3.2.1/1-100.json');
                
        this.load.image('Level321_coinMachinePannel',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel.png');
        //this.load.image('Level321_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel10.png');
        this.load.image('Level321_pannel3_2_1',window.baseUrl+'assets/gradeAssets/3.2.1/pannel.png');
        this.load.image('Level321_numBG',window.baseUrl+'assets/gradeAssets/3.2.1/b2.png');

        this.load.atlas('Level321_LeverBlue',window.baseUrl+'assets/gradeAssets/3.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverBlue.json');
        this.load.atlas('Level321_LeverGreen',window.baseUrl+'assets/gradeAssets/3.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverGreen.json');
        this.load.atlas('Level321_LeverYellow',window.baseUrl+'assets/gradeAssets/3.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverYellow.json');


        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

        this.load.image('placeValuePanel',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValuePanel1.png');
        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');
        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

        // this.load.image('Level322_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel322.png');


      //  this.load.image('PlaceValueNumberPanel1',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValueNumberPanel1.png');

       // this.load.atlas('Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin1.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.json');
  		//this.load.atlas('Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin10.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.json');
   		//this.load.atlas('Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin100.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.json');

   		this.load.image('Level321_coinMachinePannel17_2',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel17_2.png');
   		this.load.atlas('Level321_numberSmall17_2',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall17_2.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall17_2.json');
   		//this.load.atlas('Level172_slot',window.baseUrl+'assets/gradeAssets/3.2.1/slot.png' ,window.baseUrl+'json/gradeJson/3.2.1/slot.json');
        //this.load.atlas('Level172_ansbox',window.baseUrl+'assets/gradeAssets/3.2.1/4.png' ,window.baseUrl+'json/gradeJson/3.2.1/4.json');
        //this.load.image('Level172_div',window.baseUrl+'assets/gradeAssets/3.2.1/6.png');
       // this.load.image('Level172_tray',window.baseUrl+'assets/gradeAssets/3.2.1/tray.png');
        this.load.image('Level321_5',window.baseUrl+'assets/gradeAssets/3.2.1/5.png');
	
	},


	addunitygame3_1_2Assets:function()
	{
		this.load.image('Level321_bg1',window.baseUrl+'assets/gradeAssets/3.2.1/Bg10008.png');
        
         this.load.atlas('Level321_coin1Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1 anim.json');
        this.load.atlas('Level321_coin10Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10 anim.json');
        this.load.atlas('Level321_coin100Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100 anim.json');
        this.load.atlas('Level321_numberSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall.json');
        this.load.atlas('Level321_numberVSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberVSmall.json');
        this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');

        this.load.atlas('Level321_numberBox',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox.json');
        this.load.atlas('Level321_numberBox1',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox-old.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox-old.json');

        this.load.atlas('Level321_Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1.json');
        this.load.atlas('Level321_Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10.json');
        this.load.atlas('Level321_Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100.json');
        this.load.atlas('Level321_erase',window.baseUrl+'assets/gradeAssets/3.2.1/erase.png' ,window.baseUrl+'json/gradeJson/3.2.1/erase.json');
        this.load.atlas('Level321_rightmark',window.baseUrl+'assets/gradeAssets/3.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/3.2.1/rightmark.json');
        this.load.atlas('Level321_NumberKey',window.baseUrl+'assets/gradeAssets/3.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/3.2.1/numbers.json');
        
        this.load.atlas('Level321_OneToHundred',window.baseUrl+'assets/gradeAssets/3.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/3.2.1/1-100.json');
        
                
        this.load.image('Level321_coinMachinePannel',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel.png');
        this.load.image('Level321_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel10.png');
        this.load.image('Level321_pannel3_2_1',window.baseUrl+'assets/gradeAssets/3.2.1/pannel.png');
        this.load.image('Level321_numBG',window.baseUrl+'assets/gradeAssets/3.2.1/b2.png');

        this.load.atlas('Level321_LeverBlue',window.baseUrl+'assets/gradeAssets/3.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverBlue.json');
        this.load.atlas('Level321_LeverGreen',window.baseUrl+'assets/gradeAssets/3.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverGreen.json');
        this.load.atlas('Level321_LeverYellow',window.baseUrl+'assets/gradeAssets/3.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverYellow.json');


        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

        this.load.image('placeValuePanel',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValuePanel1.png');
        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

         this.load.image('Level322_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel322.png');


   		this.load.image('Level321_coinMachinePannel17_2',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel17_2.png');
   		this.load.atlas('Level321_numberSmall17_2',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall17_2.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall17_2.json');
   		this.load.atlas('Level172_slot',window.baseUrl+'assets/gradeAssets/3.2.1/slot.png' ,window.baseUrl+'json/gradeJson/3.2.1/slot.json');
        this.load.atlas('Level172_ansbox',window.baseUrl+'assets/gradeAssets/3.2.1/4.png' ,window.baseUrl+'json/gradeJson/3.2.1/4.json');
        this.load.image('Level172_div',window.baseUrl+'assets/gradeAssets/3.2.1/6.png');
        this.load.image('Level172_tray',window.baseUrl+'assets/gradeAssets/3.2.1/tray.png');
        this.load.image('Level321_5',window.baseUrl+'assets/gradeAssets/3.2.1/5.png');
	
	},

	addgame4_6_1Assets:function()
	{
        this.load.image('unity4_6_1backg','assets/gradeAssets/unity/4.6.1/backg.png');
        this.load.atlas('unity4_6_1rightmark','assets/gradeAssets/unity/4.6.1/rightmark.png','json/gradeJson/unity/4.6.1/rightmark.json');
        this.load.atlas('unity4_6_1numbers','assets/gradeAssets/unity/4.6.1/numbers.png','json/gradeJson/unity/4.6.1/numbers.json');
        this.load.image('unity4_6_1square','assets/gradeAssets/unity/4.6.1/square.png');
        this.load.image('unity4_6_1squareGlow','assets/gradeAssets/unity/4.6.1/squareGlow.png');
        this.load.image('unity4_6_1no1','assets/gradeAssets/unity/4.6.1/no1.png');
        this.load.image('unity4_6_1no2','assets/gradeAssets/unity/4.6.1/no2.png');
        this.load.image('unity4_6_1blank','assets/gradeAssets/unity/4.6.1/blank.png');
        this.load.atlas('unity4_6_1ElephantHappy','assets/gradeAssets/unity/4.6.1/Elephant_Happy.png','json/gradeJson/unity/4.6.1/Elephant_Happy.json');
        this.load.atlas('unity4_6_1ElephantIdle','assets/gradeAssets/unity/4.6.1/Elephant_Idle.png','json/gradeJson/unity/4.6.1/Elephant_Idle.json');
        this.load.atlas('unity4_6_1MouseHappy','assets/gradeAssets/unity/4.6.1/Mouse_Happy.png','json/gradeJson/unity/4.6.1/Mouse_Happy.json');
        this.load.atlas('unity4_6_1MouseIdle','assets/gradeAssets/unity/4.6.1/Mouse_Idle.png','json/gradeJson/unity/4.6.1/Mouse_Idle.json');
        this.load.audio('anim1sound', 'questionSounds/unity/4.6.1/English/Mouse.mp3');
        this.load.audio('anim2sound', 'questionSounds/unity/4.6.1/English/Elephant.mp3');
        this.load.image('unity4_6_1hintscreen','assets/gradeAssets/unity/4.6.1/hintscreen.png');
        


        
	},

	addgame4_6_2Assets:function()
	{
        this.load.image('unity4_6_1backg','assets/gradeAssets/unity/4.6.2/backg.png');
        this.load.atlas('unity4_6_2rightmark','assets/gradeAssets/unity/4.6.2/rightmark.png','json/gradeJson/unity/4.6.2/rightmark.json');
        this.load.atlas('unity4_6_2numbers','assets/gradeAssets/unity/4.6.2/numbers.png','json/gradeJson/unity/4.6.2/numbers.json');
        this.load.image('unity4_6_2square','assets/gradeAssets/unity/4.6.2/square.png');
        this.load.image('unity4_6_2squareGlow','assets/gradeAssets/unity/4.6.2/squareGlow.png');
        this.load.atlas('unity4_6_2ElephantHappy','assets/gradeAssets/unity/4.6.2/Elephant_Happy.png','json/gradeJson/unity/4.6.2/Elephant_Happy.json');
        this.load.atlas('unity4_6_2ElephantIdle','assets/gradeAssets/unity/4.6.2/Elephant_Idle.png','json/gradeJson/unity/4.6.2/Elephant_Idle.json');
        this.load.atlas('unity4_6_2MouseHappy','assets/gradeAssets/unity/4.6.2/Mouse_Happy.png','json/gradeJson/unity/4.6.2/Mouse_Happy.json');
        this.load.atlas('unity4_6_2MouseIdle','assets/gradeAssets/unity/4.6.2/Mouse_Idle.png','json/gradeJson/unity/4.6.2/Mouse_Idle.json');
        
        this.load.image('unity4_6_2hintscreen','assets/gradeAssets/unity/4.6.2/hintscreen.png');
        this.load.audio('anim1sound', 'questionSounds/unity/4.6.2/English/Mouse.mp3');
        this.load.audio('anim2sound', 'questionSounds/unity/4.6.2/English/Elephant.mp3');
        this.load.image('unity4_6_2no1','assets/gradeAssets/unity/4.6.2/no1.png');
        this.load.image('unity4_6_2no2','assets/gradeAssets/unity/4.6.2/no2.png');
        this.load.image('unity4_6_2no3','assets/gradeAssets/unity/4.6.2/no3.png');
        this.load.image('unity4_6_2blank','assets/gradeAssets/unity/4.6.2/blank.png');
        
        
        
	},

	gradeAssets7:function()
	{

		this.load.image('grade61_background','assets/gradeAssets/unity/6.1/bg.png');
        this.load.image('grade61_bg1','assets/gradeAssets/unity/6.1/bg1.png');
        this.load.image('grade61_boxbg', 'assets/gradeAssets/unity/6.1/Boxbg.png');
        this.load.image('grade61_timebg', 'assets/gradeAssets/unity/6.1/timebg.png');
        this.load.image('grade61_WhiteBox', 'assets/gradeAssets/unity/6.1/WhiteBox.png');
        this.load.image('grade61_TopBar', 'assets/gradeAssets/unity/6.1/Topbar.png');
        this.load.image('grade61_bottomBar', 'assets/gradeAssets/unity/6.1/bottomBar.png');
        this.load.image('grade61_dottedBox', 'assets/gradeAssets/unity/6.1/dottedBox.png');
        this.load.image('grade61_plusSign', 'assets/gradeAssets/unity/6.1/plusSign.png');
        this.load.image('grade61_equalSymbol', 'assets/gradeAssets/unity/6.1/equalSymbol.png');
        this.load.atlas('grade61_carrotsAnim','assets/gradeAssets/unity/6.1/carrotsAnim.png' ,'json/gradeJson/unity/6.1/carrotsAnim.json');
        this.load.atlas('grade61_RabitAnim','assets/gradeAssets/unity/6.1/RabitAnim.png' ,'json/gradeJson/unity/6.1/RabitAnim.json');
        this.load.atlas('grade61_calNum','assets/gradeAssets/unity/6.1/calNum.png' ,'json/gradeJson/unity/6.1/calNum.json');
        this.load.atlas('grade61_greenNumbers','assets/gradeAssets/unity/6.1/greenNumbers.png' ,'json/gradeJson/unity/6.1/greenNumbers.json');
        this.load.atlas('grade61_carrot','assets/gradeAssets/unity/6.1/carrot.png' ,'json/gradeJson/unity/6.1/carrot.json');
        this.load.atlas('grade61_greenNumbers1','assets/gradeAssets/unity/6.1/greenNumbers1.png' ,'json/gradeJson/unity/6.1/greenNumbers1.json');
        this.load.atlas('grade61_greenNumbers2','assets/gradeAssets/unity/6.1/greenNumbers2.png' ,'json/gradeJson/unity/6.1/greenNumbers2.json');
        this.load.atlas('grade61_txtbox','assets/gradeAssets/unity/6.1/txtbox.png' ,'json/gradeJson/unity/6.1/txtbox.json');
        this.load.atlas('grade61_tick','assets/gradeAssets/unity/6.1/tick.png' ,'json/gradeJson/unity/6.1/tick.json');
        this.load.atlas('grade61_eraser','assets/gradeAssets/unity/6.1/eraser.png' ,'json/gradeJson/unity/6.1/eraser.json');
        this.load.atlas('grade61_thinkingCloud','assets/gradeAssets/unity/6.1/thinkingCloud.png','json/gradeJson/unity/6.1/thinkingCloud.json');
         
        this.load.image('hintscreen_5_1', 'assets/gradeAssets/unity/5.1/hintscreen.png');
         this.load.image('hintscreen1_5_1', 'assets/gradeAssets/unity/6.1/hintscreen.png');
       // this.load.image('unity6_1hintscreen', 'assets/gradeAssets/unity/6.1/hintscreen.png');
   // this.load.atlas('NumberKeyN','assets/gradeAssets/unity/commonAssets/NumberKeyN.png','assets/gradeAssets/unity/commonAssets/NumberKeyN.json');
	},


	


	addunitygame10_1_11Assets:function(){
		
        this.load.atlas('grade61_calNum',window.baseUrl+'assets/gradeAssets/8.1/calNum.png' ,window.baseUrl+'json/gradeJson/8.1/calNum.json');
        this.load.atlas('grade61_tick',window.baseUrl+'assets/gradeAssets/8.1/tick.png' ,window.baseUrl+'json/gradeJson/8.1/tick.json');
          this.load.atlas('grade61_eraser',window.baseUrl+'assets/gradeAssets/8.1/eraser.png' ,window.baseUrl+'json/gradeJson/8.1/eraser.json');
        
       this.load.image('grade81_background',window.baseUrl+'assets/gradeAssets/8.1/bg.png');
		this.load.image('grade81_bg1',window.baseUrl+'assets/gradeAssets/8.1/bg1.png');
        this.load.image('grade81_boxbg', window.baseUrl+'assets/gradeAssets/8.1/Boxbg.png');
        this.load.image('grade81_timebg', window.baseUrl+'assets/gradeAssets/8.1/timebg.png');
        this.load.image('grade81_WhiteBox', window.baseUrl+'assets/gradeAssets/8.1/WhiteBox.png');
        this.load.image('grade81_TopBar', window.baseUrl+'assets/gradeAssets/8.1/topbar.png');
        this.load.image('grade81_bottomBar', window.baseUrl+'assets/gradeAssets/8.1/bottomBar.png');
        this.load.image('grade81_dottedBox', window.baseUrl+'assets/gradeAssets/8.1/dottedBox.png');
        this.load.image('grade81_minusSign', window.baseUrl+'assets/gradeAssets/8.1/minusSign.png');
        this.load.image('grade81_equalSymbol', window.baseUrl+'assets/gradeAssets/8.1/equalSymbol.png');
        this.load.atlas('grade81_carrotsAnim',window.baseUrl+'assets/gradeAssets/8.1/carrotsAnim.png' ,window.baseUrl+'json/gradeJson/8.1/carrotsAnim.json');
        this.load.atlas('grade81_RabitAnim',window.baseUrl+'assets/gradeAssets/8.1/RabitAnim.png' ,window.baseUrl+'json/gradeJson/8.1/RabitAnim.json');
        this.load.atlas('grade81_calNum',window.baseUrl+'assets/gradeAssets/8.1/calNum.png' ,window.baseUrl+'json/gradeJson/8.1/calNum.json');
        this.load.atlas('grade81_greenNumbers',window.baseUrl+'assets/gradeAssets/8.1/greenNumbers.png' ,window.baseUrl+'json/gradeJson/8.1/greenNumbers.json');
        this.load.atlas('grade81_carrot',window.baseUrl+'assets/gradeAssets/8.1/carrot.png' ,window.baseUrl+'json/gradeJson/8.1/carrot.json');
        this.load.atlas('grade81_greenNumbers1',window.baseUrl+'assets/gradeAssets/8.1/greenNumbers1.png' ,window.baseUrl+'json/gradeJson/8.1/greenNumbers1.json');
        this.load.atlas('grade81_greenNumbers2',window.baseUrl+'assets/gradeAssets/8.1/greenNumbers2.png' ,window.baseUrl+'json/gradeJson/8.1/greenNumbers2.json');
        this.load.atlas('grade81_txtbox',window.baseUrl+'assets/gradeAssets/8.1/txtbox.png' ,window.baseUrl+'json/gradeJson/8.1/txtbox.json');
        this.load.atlas('grade81_tick',window.baseUrl+'assets/gradeAssets/8.1/tick.png' ,window.baseUrl+'json/gradeJson/8.1/tick.json');
        this.load.atlas('grade81_eraser',window.baseUrl+'assets/gradeAssets/8.1/eraser.png' ,window.baseUrl+'json/gradeJson/8.1/eraser.json');
        this.load.atlas('grade81_thinkingCloud',window.baseUrl+'assets/gradeAssets/8.1/thinkingCloud.png',window.baseUrl+'json/gradeJson/8.1/thinkingCloud.json');
        this.load.atlas('grade81_backbtn',window.baseUrl+'assets/gradeAssets/8.1/backbtn.png' ,window.baseUrl+'json/gradeJson/8.1/backbtn.json');
        this.load.atlas('grade81_speaker',window.baseUrl+'assets/gradeAssets/8.1/speaker.png' ,window.baseUrl+'json/gradeJson/8.1/speaker.json');
        this.load.atlas('grade81_starAnim',window.baseUrl+'assets/gradeAssets/8.1/starAnim.png',window.baseUrl+'json/gradeJson/8.1/starAnim.json');
        this.load.atlas('grade81_btn',window.baseUrl+'assets/gradeAssets/8.1/btn.png',window.baseUrl+'json/gradeJson/8.1/btn.json');
        this.load.image('grade81_tittleBar', window.baseUrl+'assets/gradeAssets/8.1/tittleBar.png');
        this.load.atlas('grade81_replay', window.baseUrl+'assets/gradeAssets/8.1/reply.png', window.baseUrl+'json/gradeJson/8.1/reply.json');
	
	},

	addunitygame10_1_12Assets:function(){
       this.load.image('Level321_bg1',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.atlas('Level321_CommonBackBtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/3.2.1/backbtn.json');
        this.load.atlas('Level321_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/3.2.1/speaker.json');
       // this.load.atlas('Level321_starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/3.2.1/starAnim.json');
        this.load.atlas('Level321_btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/3.2.1/btn.json');
        this.load.image('Level321_bg3',window.baseUrl+'assets/commonAssets/bg3.png');
        this.load.image('Level321_tittleBaar',window.baseUrl+'assets/commonAssets/tittleBaar.png');
        this.load.atlas('Level321_replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/3.2.1/reply.json');
        
        
        this.load.atlas('Level321_tickBtn',window.baseUrl+'assets/commonAssets/tick.png' ,window.baseUrl+'json/gradeJson/3.2.1/tick.json');
        this.load.image('Level321_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level321_topic',window.baseUrl+'assets/gradeAssets/3.2.1/topic.png');
        this.load.image('Level321_practice',window.baseUrl+'assets/gradeAssets/3.2.1/practice.png');
        this.load.image('Level321_topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');
        this.load.image('Level321_timebg',window.baseUrl+'assets/commonAssets/timebg.png');



        
        //this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');
         this.load.atlas('Level321_coin1Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1 anim.json');
        this.load.atlas('Level321_coin10Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10 anim.json');
        this.load.atlas('Level321_coin100Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100 anim.json');
        this.load.atlas('Level321_numberSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall.json');
        this.load.atlas('Level321_numberVSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberVSmall.json');
        this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');

        this.load.atlas('Level321_numberBox',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox.json');
        this.load.atlas('Level321_numberBox1',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox-old.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox-old.json');

        this.load.atlas('Level321_Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1.json');
        this.load.atlas('Level321_Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10.json');
        this.load.atlas('Level321_Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100.json');
        this.load.atlas('Level321_erase',window.baseUrl+'assets/gradeAssets/3.2.1/erase.png' ,window.baseUrl+'json/gradeJson/3.2.1/erase.json');
        this.load.atlas('Level321_rightmark',window.baseUrl+'assets/gradeAssets/3.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/3.2.1/rightmark.json');
        this.load.atlas('Level321_NumberKey',window.baseUrl+'assets/gradeAssets/3.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/3.2.1/numbers.json');
        
        this.load.atlas('Level321_OneToHundred',window.baseUrl+'assets/gradeAssets/3.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/3.2.1/1-100.json');
        
        this.load.atlas('Level1011_coinDecrease',window.baseUrl+'assets/gradeAssets/3.2.1/coinDec.png' ,window.baseUrl+'json/gradeJson/3.2.1/coinDec.json');
        this.load.atlas('Level1011_coinExchange',window.baseUrl+'assets/gradeAssets/3.2.1/exchange.png' ,window.baseUrl+'json/gradeJson/3.2.1/exchange.json');
        
        this.load.image('Level1011_BlueCoin',window.baseUrl+'assets/gradeAssets/3.2.1/blueSingleCoin.png');
        this.load.image('Level1011_GreenCoin',window.baseUrl+'assets/gradeAssets/3.2.1/greenSingleCoin.png');
        this.load.image('Level1011_YellowCoin',window.baseUrl+'assets/gradeAssets/3.2.1/yellowSingleCoin.png');
        this.load.image('Level1011_Minus',window.baseUrl+'assets/gradeAssets/3.2.1/minus.png');
        
        this.load.image('Level321_coinMachinePannel',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel.png');
        this.load.image('Level321_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel10.png');
        this.load.image('Level321_pannel3_2_1',window.baseUrl+'assets/gradeAssets/3.2.1/pannel.png');
        this.load.image('Level321_numBG',window.baseUrl+'assets/gradeAssets/3.2.1/b2.png');

        this.load.atlas('Level321_LeverBlue',window.baseUrl+'assets/gradeAssets/3.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverBlue.json');
        this.load.atlas('Level321_LeverGreen',window.baseUrl+'assets/gradeAssets/3.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverGreen.json');
        this.load.atlas('Level321_LeverYellow',window.baseUrl+'assets/gradeAssets/3.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverYellow.json');


        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

        this.load.image('placeValuePanel',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValuePanel1.png');
        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

         this.load.image('Level322_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel322.png');


      //  this.load.image('PlaceValueNumberPanel1',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValueNumberPanel1.png');

       // this.load.atlas('Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin1.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.json');
  		//this.load.atlas('Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin10.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.json');
   		//this.load.atlas('Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin100.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.json');

   		this.load.image('Level321_coinMachinePannel17_2',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel17_2.png');
   		this.load.atlas('Level321_numberSmall17_2',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall17_2.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall17_2.json');
   		this.load.atlas('Level172_slot',window.baseUrl+'assets/gradeAssets/3.2.1/slot.png' ,window.baseUrl+'json/gradeJson/3.2.1/slot.json');
        this.load.atlas('Level172_ansbox',window.baseUrl+'assets/gradeAssets/3.2.1/4.png' ,window.baseUrl+'json/gradeJson/3.2.1/4.json');
        this.load.image('Level172_div',window.baseUrl+'assets/gradeAssets/3.2.1/6.png');
        this.load.image('Level172_tray',window.baseUrl+'assets/gradeAssets/3.2.1/tray.png');
        this.load.image('Level321_5',window.baseUrl+'assets/gradeAssets/3.2.1/5.png');
	
	},


	addunitygame10_1_13Assets:function(){
       this.load.image('Level321_bg1',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.atlas('Level321_CommonBackBtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/3.2.1/backbtn.json');
        this.load.atlas('Level321_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/3.2.1/speaker.json');
       // this.load.atlas('Level321_starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/3.2.1/starAnim.json');
        this.load.atlas('Level321_btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/3.2.1/btn.json');
        this.load.image('Level321_bg3',window.baseUrl+'assets/commonAssets/bg3.png');
        this.load.image('Level321_tittleBaar',window.baseUrl+'assets/commonAssets/tittleBaar.png');
        this.load.atlas('Level321_replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/3.2.1/reply.json');
        
        
        this.load.atlas('Level321_tickBtn',window.baseUrl+'assets/commonAssets/tick.png' ,window.baseUrl+'json/gradeJson/3.2.1/tick.json');
        this.load.image('Level321_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level321_topic',window.baseUrl+'assets/gradeAssets/3.2.1/topic.png');
        this.load.image('Level321_practice',window.baseUrl+'assets/gradeAssets/3.2.1/practice.png');
        this.load.image('Level321_topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');
        this.load.image('Level321_timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        
        //this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');
         this.load.atlas('Level321_coin1Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1 anim.json');
        this.load.atlas('Level321_coin10Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10 anim.json');
        this.load.atlas('Level321_coin100Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100 anim.json');
        this.load.atlas('Level321_numberSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall.json');
        this.load.atlas('Level321_numberVSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberVSmall.json');
        this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');

        this.load.atlas('Level321_numberBox',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox.json');
        this.load.atlas('Level321_numberBox1',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox-old.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox-old.json');

        this.load.atlas('Level321_Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1.json');
        this.load.atlas('Level321_Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10.json');
        this.load.atlas('Level321_Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100.json');
        this.load.atlas('Level321_erase',window.baseUrl+'assets/gradeAssets/3.2.1/erase.png' ,window.baseUrl+'json/gradeJson/3.2.1/erase.json');
        this.load.atlas('Level321_rightmark',window.baseUrl+'assets/gradeAssets/3.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/3.2.1/rightmark.json');
        this.load.atlas('Level321_NumberKey',window.baseUrl+'assets/gradeAssets/3.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/3.2.1/numbers.json');
        
        this.load.atlas('Level321_OneToHundred',window.baseUrl+'assets/gradeAssets/3.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/3.2.1/1-100.json');
        
        this.load.atlas('Level1011_coinDecrease',window.baseUrl+'assets/gradeAssets/3.2.1/coinDec.png' ,window.baseUrl+'json/gradeJson/3.2.1/coinDec.json');
        this.load.atlas('Level1011_coinExchange',window.baseUrl+'assets/gradeAssets/3.2.1/exchange.png' ,window.baseUrl+'json/gradeJson/3.2.1/exchange.json');
        
        this.load.image('Level1011_BlueCoin',window.baseUrl+'assets/gradeAssets/3.2.1/blueSingleCoin.png');
        this.load.image('Level1011_GreenCoin',window.baseUrl+'assets/gradeAssets/3.2.1/greenSingleCoin.png');
        this.load.image('Level1011_YellowCoin',window.baseUrl+'assets/gradeAssets/3.2.1/yellowSingleCoin.png');
        this.load.image('Level1011_Minus',window.baseUrl+'assets/gradeAssets/3.2.1/minus.png');
        
        this.load.image('Level321_coinMachinePannel',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel.png');
        this.load.image('Level321_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel10.png');
        this.load.image('Level321_pannel3_2_1',window.baseUrl+'assets/gradeAssets/3.2.1/pannel.png');
        this.load.image('Level321_numBG',window.baseUrl+'assets/gradeAssets/3.2.1/b2.png');

        this.load.atlas('Level321_LeverBlue',window.baseUrl+'assets/gradeAssets/3.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverBlue.json');
        this.load.atlas('Level321_LeverGreen',window.baseUrl+'assets/gradeAssets/3.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverGreen.json');
        this.load.atlas('Level321_LeverYellow',window.baseUrl+'assets/gradeAssets/3.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverYellow.json');


        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

        this.load.image('placeValuePanel',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValuePanel1.png');
        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

         this.load.image('Level322_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel322.png');


      //  this.load.image('PlaceValueNumberPanel1',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValueNumberPanel1.png');

       // this.load.atlas('Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin1.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.json');
  		//this.load.atlas('Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin10.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.json');
   		//this.load.atlas('Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin100.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.json');

   		this.load.image('Level321_coinMachinePannel17_2',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel17_2.png');
   		this.load.atlas('Level321_numberSmall17_2',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall17_2.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall17_2.json');
   		this.load.atlas('Level172_slot',window.baseUrl+'assets/gradeAssets/3.2.1/slot.png' ,window.baseUrl+'json/gradeJson/3.2.1/slot.json');
        this.load.atlas('Level172_ansbox',window.baseUrl+'assets/gradeAssets/3.2.1/4.png' ,window.baseUrl+'json/gradeJson/3.2.1/4.json');
        this.load.image('Level172_div',window.baseUrl+'assets/gradeAssets/3.2.1/6.png');
        this.load.image('Level172_tray',window.baseUrl+'assets/gradeAssets/3.2.1/tray.png');
        this.load.image('Level321_5',window.baseUrl+'assets/gradeAssets/3.2.1/5.png');
	
	},

	 addunitygame10_1_14Assets:function(){
       this.load.image('Level321_bg1',window.baseUrl+'assets/commonAssets/BG.png');
        this.load.atlas('Level321_CommonBackBtn',window.baseUrl+'assets/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/3.2.1/backbtn.json');
        this.load.atlas('Level321_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/3.2.1/speaker.json');
       // this.load.atlas('Level321_starAnim',window.baseUrl+'assets/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/3.2.1/starAnim.json');
        this.load.atlas('Level321_btn',window.baseUrl+'assets/commonAssets/btn.png',window.baseUrl+'json/gradeJson/3.2.1/btn.json');
        this.load.image('Level321_bg3',window.baseUrl+'assets/commonAssets/bg3.png');
        this.load.image('Level321_tittleBaar',window.baseUrl+'assets/commonAssets/tittleBaar.png');
        this.load.atlas('Level321_replay',window.baseUrl+'assets/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/3.2.1/reply.json');
        
        
        this.load.atlas('Level321_tickBtn',window.baseUrl+'assets/commonAssets/tick.png' ,window.baseUrl+'json/gradeJson/3.2.1/tick.json');
        this.load.image('Level321_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level321_topic',window.baseUrl+'assets/gradeAssets/3.2.1/topic.png');
        this.load.image('Level321_practice',window.baseUrl+'assets/gradeAssets/3.2.1/practice.png');
        this.load.image('Level321_topicOutline',window.baseUrl+'assets/commonAssets/topicOutline.png');
        this.load.image('Level321_timebg',window.baseUrl+'assets/commonAssets/timebg.png');

        
        //this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');
         this.load.atlas('Level321_coin1Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1 anim.json');
        this.load.atlas('Level321_coin10Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10 anim.json');
        this.load.atlas('Level321_coin100Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100 anim.json');
        this.load.atlas('Level321_numberSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall.json');
        this.load.atlas('Level321_numberVSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberVSmall.json');
        this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');

        this.load.atlas('Level321_numberBox',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox.json');
        this.load.atlas('Level321_numberBox1',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox-old.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox-old.json');

        this.load.atlas('Level321_Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1.json');
        this.load.atlas('Level321_Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10.json');
        this.load.atlas('Level321_Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100.json');
        this.load.atlas('Level321_erase',window.baseUrl+'assets/gradeAssets/3.2.1/erase.png' ,window.baseUrl+'json/gradeJson/3.2.1/erase.json');
        this.load.atlas('Level321_rightmark',window.baseUrl+'assets/gradeAssets/3.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/3.2.1/rightmark.json');
        this.load.atlas('Level321_NumberKey',window.baseUrl+'assets/gradeAssets/3.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/3.2.1/numbers.json');
        
        this.load.atlas('Level321_OneToHundred',window.baseUrl+'assets/gradeAssets/3.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/3.2.1/1-100.json');
        
        this.load.atlas('Level1011_coinDecrease',window.baseUrl+'assets/gradeAssets/3.2.1/coinDec.png' ,window.baseUrl+'json/gradeJson/3.2.1/coinDec.json');
        this.load.atlas('Level1011_coinExchange',window.baseUrl+'assets/gradeAssets/3.2.1/exchange.png' ,window.baseUrl+'json/gradeJson/3.2.1/exchange.json');
        
        this.load.image('Level1011_BlueCoin',window.baseUrl+'assets/gradeAssets/3.2.1/blueSingleCoin.png');
        this.load.image('Level1011_GreenCoin',window.baseUrl+'assets/gradeAssets/3.2.1/greenSingleCoin.png');
        this.load.image('Level1011_YellowCoin',window.baseUrl+'assets/gradeAssets/3.2.1/yellowSingleCoin.png');
        this.load.image('Level1011_Minus',window.baseUrl+'assets/gradeAssets/3.2.1/minus.png');
        
        this.load.image('Level321_coinMachinePannel',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel.png');
        this.load.image('Level321_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel10.png');
        this.load.image('Level321_pannel3_2_1',window.baseUrl+'assets/gradeAssets/3.2.1/pannel.png');
        this.load.image('Level321_numBG',window.baseUrl+'assets/gradeAssets/3.2.1/b2.png');

        this.load.atlas('Level321_LeverBlue',window.baseUrl+'assets/gradeAssets/3.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverBlue.json');
        this.load.atlas('Level321_LeverGreen',window.baseUrl+'assets/gradeAssets/3.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverGreen.json');
        this.load.atlas('Level321_LeverYellow',window.baseUrl+'assets/gradeAssets/3.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverYellow.json');


        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

        this.load.image('placeValuePanel',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValuePanel1.png');
        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

         this.load.image('Level322_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel322.png');


      //  this.load.image('PlaceValueNumberPanel1',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValueNumberPanel1.png');

       // this.load.atlas('Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin1.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.json');
  		//this.load.atlas('Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin10.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.json');
   		//this.load.atlas('Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin100.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.json');

   		this.load.image('Level321_coinMachinePannel17_2',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel17_2.png');
   		this.load.atlas('Level321_numberSmall17_2',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall17_2.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall17_2.json');
   		this.load.atlas('Level172_slot',window.baseUrl+'assets/gradeAssets/3.2.1/slot.png' ,window.baseUrl+'json/gradeJson/3.2.1/slot.json');
        this.load.atlas('Level172_ansbox',window.baseUrl+'assets/gradeAssets/3.2.1/4.png' ,window.baseUrl+'json/gradeJson/3.2.1/4.json');
        this.load.image('Level172_div',window.baseUrl+'assets/gradeAssets/3.2.1/6.png');
        this.load.image('Level172_tray',window.baseUrl+'assets/gradeAssets/3.2.1/tray.png');
        this.load.image('Level321_5',window.baseUrl+'assets/gradeAssets/3.2.1/5.png');
	
	},

	
	

    addgame16_3Assets:function(){
		this.load.image('Level163_numBG','assets/gradeAssets/unity/16.3/gameAssets/b2.png');
		this.load.image('grade163_bg1','assets/gradeAssets/unity/16.3/commonAssets/bg1.png');
        this.load.image('crate163', 'assets/gradeAssets/unity/16.3/gameAssets/101.png');
        this.load.atlas('box163','assets/gradeAssets/unity/16.3/gameAssets/box1.png' ,'json/gradeJson/unity/16.3/box1.json');
        this.load.atlas('divide163','assets/gradeAssets/unity/16.3/gameAssets/0.0.png' ,'json/gradeJson/unity/16.3/0.0.json');
        this.load.atlas('eggGroup163','assets/gradeAssets/unity/16.3/gameAssets/eg 1 to 10.png' ,'json/gradeJson/unity/16.3/eg 1 to 10.json');
        this.load.atlas('eggGroup1163','assets/gradeAssets/unity/16.3/gameAssets/1 to 10 eg.png' ,'json/gradeJson/unity/16.3/1 to 10 eg.json');
		this.load.atlas('grade163_box1','assets/gradeAssets/unity/16.3/gameAssets/text box.png' ,'json/gradeJson/unity/16.3/text box.json');      
         this.load.atlas('grade163_numberbox1','assets/gradeAssets/unity/16.3/gameAssets/txtbox.png' ,'json/gradeJson/unity/16.3/txtbox.json');
        this.load.atlas('basket163','assets/gradeAssets/unity/16.3/gameAssets/1234.png' ,'json/gradeJson/unity/16.3/1234.json');
        this.load.atlas('grade163_tick','assets/gradeAssets/unity/16.3/gameAssets/tick.png' ,'json/gradeJson/unity/16.3/tick.json');
        this.load.atlas('grade163_eraser','assets/gradeAssets/unity/16.3/gameAssets/eraser.png' ,'json/gradeJson/unity/16.3/eraser.json');
        this.load.image('grade163_1_Box', 'assets/gradeAssets/unity/16.3/gameAssets/no box.png');
        this.load.atlas('grade163_greenNumbers','assets/gradeAssets/unity/16.3/gameAssets/0 to 10.png','json/gradeJson/unity/16.3/0 to 10.json');
	
	},

	gradeAssets8:function()
	{
		this.load.image('Level321_coinMachinePannel17_2','assets/gradeAssets/unity/17.2/coinMachinePannel17_2.png');
		this.load.atlas('Level321_coin1Anim','assets/gradeAssets/unity/17.2/Coin 1 anim.png' ,'json/gradeJson/unity/17.2/Coin 1 anim.json');
		this.load.atlas('Level321_coin10Anim','assets/gradeAssets/unity/17.2/Coin 10 anim.png' ,'json/gradeJson/unity/17.2/Coin 10 anim.json');
		this.load.image('Level321_5','assets/gradeAssets/unity/17.2/5.png');
		this.load.atlas('Level321_numberSmall17_2','assets/gradeAssets/unity/17.2/numberSmall17_2.png' ,'json/gradeJson/unity/17.2/numberSmall17_2.json');
		this.load.atlas('Level321_Coin10','assets/gradeAssets/unity/17.2/Coin 10.png' ,'json/gradeJson/unity/17.2/Coin 10.json');
		this.load.atlas('Level321_Coin1','assets/gradeAssets/unity/17.2/Coin 1.png' ,'json/gradeJson/unity/17.2/Coin 1.json');
		this.load.atlas('Level172_slot','assets/gradeAssets/unity/17.2/slot.png' ,'json/gradeJson/unity/17.2/slot.json');
		this.load.image('Level172_tray','assets/gradeAssets/unity/17.2/tray.png');
		this.load.image('Level172_div','assets/gradeAssets/unity/17.2/6.png');
		this.load.image('Level321_numBG','assets/gradeAssets/unity/17.2/b2.png');
		this.load.atlas('Level321_NumberKey','assets/gradeAssets/unity/17.2/numbers.png' ,'json/gradeJson/unity/17.2/numbers.json');
		this.load.atlas('Level172_ansbox','assets/gradeAssets/unity/17.2/4.png' ,'json/gradeJson/unity/17.2/4.json');
		this.load.atlas('Level321_erase','assets/gradeAssets/unity/17.2/erase.png' ,'json/gradeJson/unity/17.2/erase.json');
		this.load.atlas('Level321_rightmark','assets/gradeAssets/unity/17.2/rightmark.png' ,'json/gradeJson/unity/17.2/rightmark.json');
		this.load.image('Level321_timebg','assets/gradeAssets/unity/17.2/timebg.png');
		this.load.atlas('Unity12_1Tick', 'assets/gradeAssets/unity/17.2/rightmark.png', 'json/gradeJson/unity/17.2/rightmark.json');
        this.load.image('Level321_bg1','assets/gradeAssets/unity/17.2/BG.png');
        this.load.image('Level321_numb','assets/gradeAssets/unity/17.2/51.png');
        this.load.atlas('Unity12_1handclick', 'assets/gradeAssets/unity/17.2/w1.png', 'json/gradeJson/unity/17.2/w1.json');
        this.load.atlas('Unity12_1trayglw', 'assets/gradeAssets/unity/17.2/w2.png', 'json/gradeJson/unity/17.2/w2.json');
		//this.load.atlas('txtbox', 'assets/gradeAssets/12.1/txtbox.png', 'json/gradeJson/12.1/txtbox.json');

	},

	gradeAssets9:function()
	{
        //game assets. 11.1
        this.load.image('unity11_1backg','assets/gradeAssets/unity/11.1/backg.png');
        this.load.image('unity11_1box','assets/gradeAssets/unity/11.1/box.png');
        this.load.image('unity11_1set','assets/gradeAssets/unity/11.1/set.png');
        this.load.atlas('unity11_1numbers','assets/gradeAssets/unity/11.1/numbers.png','json/gradeJson/unity/11.1/numbers.json');
        this.load.atlas('unity11_1mul','assets/gradeAssets/unity/11.1/mul.png','json/gradeJson/unity/11.1/mul.json');
        this.load.image('unity11_1ansbox','assets/gradeAssets/unity/11.1/ansbox.png');
        this.load.atlas('unity11_1numberpad','assets/gradeAssets/unity/11.1/numberpad.png','json/gradeJson/unity/11.1/numberpad.json');
        this.load.image('unity11_1plus','assets/gradeAssets/unity/11.1/plus.png');
        this.load.image('unity11_1b2','assets/gradeAssets/unity/11.1/b2.png');
        this.load.atlas('unity11_1rightmark','assets/gradeAssets/unity/11.1/rightmark.png','json/gradeJson/unity/11.1/rightmark.json');
        this.load.atlas('unity11_1erase','assets/gradeAssets/unity/11.1/erase.png','json/gradeJson/unity/11.1/erase.json');
        this.load.atlas('unity11_1apple','assets/gradeAssets/unity/11.1/apple.png','json/gradeJson/unity/11.1/apple.json');
        this.load.image('unity11_1apple1','assets/gradeAssets/unity/11.1/apple1.png');
        this.load.image('unity11_1apple2','assets/gradeAssets/unity/11.1/apple2.png');
        this.load.image('unity11_1apple3','assets/gradeAssets/unity/11.1/apple3.png');
        this.load.atlas('unity11_1numbg','assets/gradeAssets/unity/11.1/numbg.png','json/gradeJson/unity/11.1/numbg.json');
        this.load.image('unity11_1equal','assets/gradeAssets/unity/11.1/equal.png');
        
        //11.2
        this.load.image('unity11_2backg','assets/gradeAssets/unity/11.2/backg.png');
        this.load.image('unity11_2box','assets/gradeAssets/unity/11.2/box.png');
        this.load.image('unity11_2set','assets/gradeAssets/unity/11.2/set.png');
        this.load.atlas('unity11_2numbers','assets/gradeAssets/unity/11.2/numbers.png','json/gradeJson/unity/11.2/numbers.json');
        this.load.atlas('unity11_2mul','assets/gradeAssets/unity/11.2/mul.png','json/gradeJson/unity/11.2/mul.json');
        this.load.image('unity11_2ansbox','assets/gradeAssets/unity/11.2/ansbox.png');
        this.load.atlas('unity11_2numberpad','assets/gradeAssets/unity/11.2/numberpad.png','json/gradeJson/unity/11.2/numberpad.json');
        this.load.image('unity11_2plus','assets/gradeAssets/unity/11.2/plus.png');
        this.load.image('unity11_2b2','assets/gradeAssets/unity/11.2/b2.png');
        this.load.atlas('unity11_2rightmark','assets/gradeAssets/unity/11.2/rightmark.png','json/gradeJson/unity/11.2/rightmark.json');
        this.load.atlas('unity11_2erase','assets/gradeAssets/unity/11.2/erase.png','json/gradeJson/unity/11.2/erase.json');
        this.load.atlas('unity11_2apple','assets/gradeAssets/unity/11.2/apple.png','json/gradeJson/unity/11.2/apple.json');
        this.load.image('unity11_2apple1','assets/gradeAssets/unity/11.2/apple1.png');
        this.load.image('unity11_2apple2','assets/gradeAssets/unity/11.2/apple2.png');
        this.load.image('unity11_2apple3','assets/gradeAssets/unity/11.2/apple3.png');
        this.load.image('unity11_2equal','assets/gradeAssets/unity/11.2/equal.png');
       // this.load.atlas('unity11_2numbg','assets/gradeAssets/unity/11.2/numbg.png','json/gradeJson/unity/11.2/numbg.json');
	},

	gradeAssets10:function()
	{
        console.log("gradeAssets");
		
        this.load.atlas("handanim","assets/commonAssets/handanim.png","assets/commonAssets/handanim.json");
		//this.load.image("bg","assets/commonAssets/BG.png");
        
        //game assets. 2.4.3
        this.load.image('Unity12_3_1BG_01','assets/gradeAssets/unity/12.3.1/BG_01.png');
        this.load.image('Unity12_3_1practice','assets/gradeAssets/unity/12.3.1/practice.png');
        this.load.image('Unity12_3_1topic','assets/gradeAssets/unity/12.3.1/topic.png');
        this.load.image('Unity12_3_1Number_box','assets/gradeAssets/unity/12.3.1/Number_box.png');
        this.load.image('Unity12_3_1Egg_box','assets/gradeAssets/unity/12.3.1/Egg_box.png');
        this.load.image('Unity12_3_1txtbox11','assets/gradeAssets/unity/12.3.1/txtbox11.png');
       this.load.atlas('Unity12_3_1Numbers','assets/gradeAssets/unity/12.3.1/Numbers.png','json/gradeJson/unity/12.3.1/Numbers.json');  this.load.atlas('Unity12_3_1greenNumbers','assets/gradeAssets/unity/12.3.1/greenNumbers.png','json/gradeJson/unity/12.3.1/greenNumbers.json');
         this.load.atlas('Unity12_3_1greenNumbers1','assets/gradeAssets/unity/12.3.1/greenNumbers1.png','json/gradeJson/unity/12.3.1/greenNumbers1.json');
        this.load.atlas('Unity12_3_1SmallEgg','assets/gradeAssets/unity/12.3.1/SmallEgg.png','json/gradeJson/unity/12.3.1/SmallEgg.json');
        this.load.atlas('Unity12_3_1oneGlow','assets/gradeAssets/unity/12.3.1/oneGlow.png','json/gradeJson/unity/12.3.1/oneGlow.json');
        this.load.atlas('Unity12_3_1twoGlow','assets/gradeAssets/unity/12.3.1/twoGlow.png','json/gradeJson/unity/12.3.1/twoGlow.json');
        this.load.atlas('Unity12_3_1threeGlow','assets/gradeAssets/unity/12.3.1/threeGlow.png','json/gradeJson/unity/12.3.1/threeGlow.json');
        this.load.atlas('Unity12_3_1fourGlow','assets/gradeAssets/unity/12.3.1/fourGlow.png','json/gradeJson/unity/12.3.1/fourGlow.json');
        this.load.atlas('Unity12_3_1fiveGlow','assets/gradeAssets/unity/12.3.1/fiveGlow.png','json/gradeJson/unity/12.3.1/fiveGlow.json');
        this.load.image('Unity12_3_1Multiplicationsign','assets/gradeAssets/unity/12.3.1/multiplicationsign.png');
        this.load.image('Unity12_3_1EqualSymbol','assets/gradeAssets/unity/12.3.1/equalSymbol.png');
        this.load.atlas('Unity12_1Txtbox','assets/gradeAssets/unity/12.3.1/txtbox.png','json/gradeJson/unity/12.3.1/txtbox.json');
        this.load.atlas('Unity12_3_1Eraser','assets/gradeAssets/unity/12.3.1/eraser.png','json/gradeJson/unity/12.3.1/eraser.json');
        this.load.atlas('Unity12_3_1Tick','assets/gradeAssets/unity/12.3.1/tick.png','json/gradeJson/unity/12.3.1/tick.json');
        this.load.atlas('Unity12_3_1bulb','assets/gradeAssets/unity/12.3.1/bulb.png','json/gradeJson/unity/12.3.1/bulb.json');
        this.load.atlas('Unity12_3_1Egg','assets/gradeAssets/unity/12.3.1/Egg.png','json/gradeJson/unity/12.3.1/Egg.json');
      
	},

	
	

	onloadComplete:function(){

		_this.load.onLoadComplete.removeAll();
		//adding the loaded audios to variables.
		
    	celebr = _this.add.audio('celebr');
    	waudio = _this.add.audio('waudio');
        snapSound = _this.add.audio('snapSound');       
        ClickSound=_this.add.audio('ClickSound');
		
		//***********************************************************1.1A
		Eng_11A1=_this.add.audio('Eng_11A1');    	   	
	    Kan_11A1=_this.add.audio('Kan_11A1');    		
        Hin_11A1=_this.add.audio('Hin_11A1'); 	
		
		//***********************************************************2.1A
		E1a=_this.add.audio('Level21_E1a');
        H1a=_this.add.audio('Level21_H1a');
        K1a=_this.add.audio('Level21_K1a');
        
		E1b=_this.add.audio('Level21_E1b');
        H1b=_this.add.audio('Level21_H1b');
        K1b=_this.add.audio('Level21_K1b');
		
        E2a=_this.add.audio('Level21_E2a');
        H2a=_this.add.audio('Level21_H2a');
        K2a=_this.add.audio('Level21_K2a');
        
		E2b=_this.add.audio('Level21_E2b');
        H2b=_this.add.audio('Level21_H2b');
        K2b=_this.add.audio('Level21_K2b');
        
        E3a=_this.add.audio('Level21_E3a');
        H3a=_this.add.audio('Level21_H3a');
        K3a=_this.add.audio('Level21_K3a');
        
		E3b=_this.add.audio('Level21_E3b');
        H3b=_this.add.audio('Level21_H3b');
        K3b=_this.add.audio('Level21_K3b');
        
        E4a=_this.add.audio('Level21_E4a');
        H4a=_this.add.audio('Level21_H4a');
        K4a=_this.add.audio('Level21_K4a');
        
		E4b=_this.add.audio('Level21_E4b');
        H4b=_this.add.audio('Level21_H4b');
        K4b=_this.add.audio('Level21_K4b');
        
        E5a=_this.add.audio('Level21_E5a');
        H5a=_this.add.audio('Level21_H5a');
        K5a=_this.add.audio('Level21_K5a');
        
		E5b=_this.add.audio('Level21_E5b');
        H5b=_this.add.audio('Level21_H5b');
        K5b=_this.add.audio('Level21_K5b');
        
        E6a=_this.add.audio('Level21_E6a');
        H6a=_this.add.audio('Level21_H6a');
        K6a=_this.add.audio('Level21_K6a');
        
		E6b=_this.add.audio('Level21_E6b');
        H6b=_this.add.audio('Level21_H6b');
        K6b=_this.add.audio('Level21_K6b');
        
        E7a=_this.add.audio('Level21_E7a');
        H7a=_this.add.audio('Level21_H7a');
        K7a=_this.add.audio('Level21_K7a');
        
		E7b=_this.add.audio('Level21_E7b');
        H7b=_this.add.audio('Level21_H7b');
        K7b=_this.add.audio('Level21_K7b');
        
        E8a=_this.add.audio('Level21_E8a');
        H8a=_this.add.audio('Level21_H8a');
        K8a=_this.add.audio('Level21_K8a');
        
		E8b=_this.add.audio('Level21_E8b');
        H8b=_this.add.audio('Level21_H8b');
        K8b=_this.add.audio('Level21_K8b');
        
        E9a=_this.add.audio('Level21_E9a');
        H9a=_this.add.audio('Level21_H9a');
        K9a=_this.add.audio('Level21_K9a');
        
		E9b=_this.add.audio('Level21_E9b');
        H9b=_this.add.audio('Level21_H9b');
        K9b=_this.add.audio('Level21_K9b');
        
        E10a=_this.add.audio('Level21_E10a');
        H10a=_this.add.audio('Level21_H10a');
        K10a=_this.add.audio('Level21_K10a');
        
		E10b=_this.add.audio('Level21_E10b');
        H10b=_this.add.audio('Level21_H10b');
        K10b=_this.add.audio('Level21_K10b');
        
        E11a=_this.add.audio('Level21_E11a');
        H11a=_this.add.audio('Level21_H11a');
        K11a=_this.add.audio('Level21_K11a');
        
		E11b=_this.add.audio('Level21_E11b');
        H11b=_this.add.audio('Level21_H11b');
        K11b=_this.add.audio('Level21_K11b');
        
        E12a=_this.add.audio('Level21_E12a');
        H12a=_this.add.audio('Level21_H12a');
        K12a=_this.add.audio('Level21_K12a');
        
		E12b=_this.add.audio('Level21_E12b');
        H12b=_this.add.audio('Level21_H12b');
        K12b=_this.add.audio('Level21_K12b');
        
        E13a=_this.add.audio('Level21_E13a');
        H13a=_this.add.audio('Level21_H13a');
        K13a=_this.add.audio('Level21_K13a');
        
		E13b=_this.add.audio('Level21_E13b');
        H13b=_this.add.audio('Level21_H13b');
        K13b=_this.add.audio('Level21_K13b');
        
        E14a=_this.add.audio('Level21_E14a');
        H14a=_this.add.audio('Level21_H14a');
        K14a=_this.add.audio('Level21_K14a');
        
		E14b=_this.add.audio('Level21_E14b');
        H14b=_this.add.audio('Level21_H14b');
        K14b=_this.add.audio('Level21_K14b');
        
        E15a=_this.add.audio('Level21_E15a');
        H15a=_this.add.audio('Level21_H15a');
        K15a=_this.add.audio('Level21_K15a');
        
		E15b=_this.add.audio('Level21_E15b');
        H15b=_this.add.audio('Level21_H15b');
        K15b=_this.add.audio('Level21_K15b');
        
        E16a=_this.add.audio('Level21_E16a');
        H16a=_this.add.audio('Level21_H16a');
        K16a=_this.add.audio('Level21_K16a');
        
		E16b=_this.add.audio('Level21_E16b');
        H16b=_this.add.audio('Level21_H16b');
        K16b=_this.add.audio('Level21_K16b');
        
        E17a=_this.add.audio('Level21_E17a');
        H17a=_this.add.audio('Level21_H17a');
        K17a=_this.add.audio('Level21_K17a');
        
		E17b=_this.add.audio('Level21_E17b');
        H17b=_this.add.audio('Level21_H17b');
        K17b=_this.add.audio('Level21_K17b');
        
        E18a=_this.add.audio('Level21_E18a');
        H18a=_this.add.audio('Level21_H18a');
        K18a=_this.add.audio('Level21_K18a');
        
		E18b=_this.add.audio('Level21_E18b');
        H18b=_this.add.audio('Level21_H18b');
        K18b=_this.add.audio('Level21_K18b');
        
        E19a=_this.add.audio('Level21_E19a');
        H19a=_this.add.audio('Level21_H19a');
        K19a=_this.add.audio('Level21_K19a');
        
		E19b=_this.add.audio('Level21_E19b');
        H19b=_this.add.audio('Level21_H19b');
        K19b=_this.add.audio('Level21_K19b');
        
        E20a=_this.add.audio('Level21_E20a');
        H20a=_this.add.audio('Level21_H20a');
        K20a=_this.add.audio('Level21_K20a');
        
		E20b=_this.add.audio('Level21_E20b');
        H20b=_this.add.audio('Level21_H20b');
        K20b=_this.add.audio('Level21_K20b');
        
        E21a=_this.add.audio('Level21_E21a');
        H21a=_this.add.audio('Level21_H21a');
        K21a=_this.add.audio('Level21_K21a');
        
		E21b=_this.add.audio('Level21_E21b');
        H21b=_this.add.audio('Level21_H21b');
        K21b=_this.add.audio('Level21_K21b');
        
        E22a=_this.add.audio('Level21_E22a');
        H22a=_this.add.audio('Level21_H22a');
        K22a=_this.add.audio('Level21_K22a');
        
		E22b=_this.add.audio('Level21_E22b');
        H22b=_this.add.audio('Level21_H22b');
        K22b=_this.add.audio('Level21_K22b');
        
        E23a=_this.add.audio('Level21_E23a');
        H23a=_this.add.audio('Level21_H23a');
        K23a=_this.add.audio('Level21_K23a');
        
		E23b=_this.add.audio('Level21_E23b');
        H23b=_this.add.audio('Level21_H23b');
        K23b=_this.add.audio('Level21_K23b');
        
        E24a=_this.add.audio('Level21_E24a');
        H24a=_this.add.audio('Level21_H24a');
        K24a=_this.add.audio('Level21_K24a');
        
		E24b=_this.add.audio('Level21_E24b');
        H24b=_this.add.audio('Level21_H24b');
        K24b=_this.add.audio('Level21_K24b');
        
        E25a=_this.add.audio('Level21_E25a');
        H25a=_this.add.audio('Level21_H25a');
        K25a=_this.add.audio('Level21_K25a');
        
		E25b=_this.add.audio('Level21_E25b');
        H25b=_this.add.audio('Level21_H25b');
        K25b=_this.add.audio('Level21_K25b');
        
        
        E26a=_this.add.audio('Level21_E26a');
        H26a=_this.add.audio('Level21_H26a');
        K26a=_this.add.audio('Level21_K26a');
        
		E26b=_this.add.audio('Level21_E26b');
        H26b=_this.add.audio('Level21_H26b');
        K26b=_this.add.audio('Level21_K26b');
		
		//*******************************************************2.1B/E10aa
		E1aa=_this.add.audio('E1aa');
        H1aa=_this.add.audio('H1aa');
        K1aa=_this.add.audio('K1aa');
        
		E1bb=_this.add.audio('E1bb');
        H1bb=_this.add.audio('H1bb');
        K1bb=_this.add.audio('K1bb');
        
        E2aa=_this.add.audio('E2aa');
        H2aa=_this.add.audio('H2aa');
        K2aa=_this.add.audio('K2aa');
        
		E2bb=_this.add.audio('E2bb');
        H2bb=_this.add.audio('H2bb');
        K2bb=_this.add.audio('K2bb');
        
        E3aa=_this.add.audio('E3aa');
        H3aa=_this.add.audio('H3aa');
        K3aa=_this.add.audio('K3aa');
        
		E3bb=_this.add.audio('E3bb');
        H3bb=_this.add.audio('H3bb');
        K3bb=_this.add.audio('K3bb');
        
        E5aa=_this.add.audio('E5aa');
        H5aa=_this.add.audio('H5aa');
        K5aa=_this.add.audio('K5aa');
        
		E5bb=_this.add.audio('E5bb');
        H5bb=_this.add.audio('H5bb');
        K5bb=_this.add.audio('K5bb');
        
        E6aa=_this.add.audio('E6aa');
        H6aa=_this.add.audio('H6aa');
        K6aa=_this.add.audio('K6aa');
        
		E6bb=_this.add.audio('E6bb');
        H6bb=_this.add.audio('H6bb');
        K6bb=_this.add.audio('K6bb');
        
        E7aa=_this.add.audio('E7aa');
        H7aa=_this.add.audio('H7aa');
        K7aa=_this.add.audio('K7aa');
        
		E7bb=_this.add.audio('E7bb');
        H7bb=_this.add.audio('H7bb');
        K7bb=_this.add.audio('K7bb');
        
        E8aa=_this.add.audio('E8aa');
        H8aa=_this.add.audio('H8aa');
        K8aa=_this.add.audio('K8aa');
        
		E8bb=_this.add.audio('E8bb');
        H8bb=_this.add.audio('H8bb');
        K8bb=_this.add.audio('K8bb');
        
        E9aa=_this.add.audio('E9aa');
        H9aa=_this.add.audio('H9aa');
        K9aa=_this.add.audio('K9aa');
        
		E9bb=_this.add.audio('E9bb');
        H9bb=_this.add.audio('H9bb');
        K9bb=_this.add.audio('K9bb');
        
        E10aa=_this.add.audio('E10aa');
        H10aa=_this.add.audio('H10aa');
        K10aa=_this.add.audio('K10aa');
        
		E10bb=_this.add.audio('E10bb');
        H10bb=_this.add.audio('H10bb');
        K10bb=_this.add.audio('K10bb');
        
        E11aa=_this.add.audio('E11aa');
        H11aa=_this.add.audio('H11aa');
        K11aa=_this.add.audio('K11aa');
        
		E11bb=_this.add.audio('E11bb');
        H11bb=_this.add.audio('H11bb');
        K11bb=_this.add.audio('K11bb');
        
        E12aa=_this.add.audio('E12aa');
        H12aa=_this.add.audio('H12aa');
        K12aa=_this.add.audio('K12aa');
        
		E12bb=_this.add.audio('E12bb');
        H12bb=_this.add.audio('H12bb');
        K12bb=_this.add.audio('K12bb');
        
        E13aa=_this.add.audio('E13aa');
        H13aa=_this.add.audio('H13aa');
        K13aa=_this.add.audio('K13aa');
        
		E13bb=_this.add.audio('E13bb');
        H13bb=_this.add.audio('H13bb');
        K13bb=_this.add.audio('K13bb');
        
        E14aa=_this.add.audio('E14aa');
        H14aa=_this.add.audio('H14aa');
        K14aa=_this.add.audio('K14aa');
        
		E14bb=_this.add.audio('E14bb');
        H14bb=_this.add.audio('H14bb');
        K14bb=_this.add.audio('K14bb');
        
        E15aa=_this.add.audio('E15aa');
        H15aa=_this.add.audio('H15aa');
        K15aa=_this.add.audio('K15aa');
        
		E15bb=_this.add.audio('E15bb');
        H15bb=_this.add.audio('H15bb');
        K15bb=_this.add.audio('K15bb');
        
        E16aa=_this.add.audio('E16aa');
        H16aa=_this.add.audio('H16aa');
        K16aa=_this.add.audio('K16aa');
        
		E16bb=_this.add.audio('E16bb');
        H16bb=_this.add.audio('H16bb');
        K16bb=_this.add.audio('K16bb');
        
        E17aa=_this.add.audio('E17aa');
        H17aa=_this.add.audio('H17aa');
        K17aa=_this.add.audio('K17aa');
        
		E17bb=_this.add.audio('E17bb');
        H17bb=_this.add.audio('H17bb');
        K17bb=_this.add.audio('K17bb');
        
        E18aa=_this.add.audio('E18aa');
        H18aa=_this.add.audio('H18aa');
        K18aa=_this.add.audio('K18aa');
        
		E18bb=_this.add.audio('E18bb');
        H18bb=_this.add.audio('H18bb');
        K18bb=_this.add.audio('K18bb');
        
        E19aa=_this.add.audio('E19aa');
        H19aa=_this.add.audio('H19aa');
        K19aa=_this.add.audio('K19aa');
        
		E19bb=_this.add.audio('E19bb');
        H19bb=_this.add.audio('H19bb');
        K19bb=_this.add.audio('K19bb');
        
        E20aa=_this.add.audio('E20aa');
        H20aa=_this.add.audio('H20aa');
        K20aa=_this.add.audio('K20aa');
        
		E20bb=_this.add.audio('E20bb');
        H20bb=_this.add.audio('H20bb');
        K20bb=_this.add.audio('K20bb');
		
		//***********************************************************2.2
		Eng_22_1 = _this.add.audio('Eng_22_1');
		Eng_22_2 = _this.add.audio('Eng_22_2');
		Eng_22_3 = _this.add.audio('Eng_22_3');
		Eng_22_4 = _this.add.audio('Eng_22_4');
		Eng_22_5 = _this.add.audio('Eng_22_5');
		Eng_22_6 = _this.add.audio('Eng_22_6');
		Eng_22_7 = _this.add.audio('Eng_22_7');
		Eng_22_8 = _this.add.audio('Eng_22_8');
		Eng_22_9 = _this.add.audio('Eng_22_9');
		Eng_22_10 = _this.add.audio('Eng_22_10');
		
		Kan_22_1 = _this.add.audio('Kan_22_1');
		Kan_22_2 = _this.add.audio('Kan_22_2');
		Kan_22_3 = _this.add.audio('Kan_22_3');
		Kan_22_4 = _this.add.audio('Kan_22_4');
		Kan_22_5 = _this.add.audio('Kan_22_5');
		Kan_22_6 = _this.add.audio('Kan_22_6');
		Kan_22_7 = _this.add.audio('Kan_22_7');
		Kan_22_8 = _this.add.audio('Kan_22_8');
		Kan_22_9 = _this.add.audio('Kan_22_9');
		Kan_22_10 = _this.add.audio('Kan_22_10');
		
		Hin_22_1 = _this.add.audio('Hin_22_1');
		Hin_22_2 = _this.add.audio('Hin_22_2');
		Hin_22_3 = _this.add.audio('Hin_22_3');
		Hin_22_4 = _this.add.audio('Hin_22_4');
		Hin_22_5 = _this.add.audio('Hin_22_5');
		Hin_22_6 = _this.add.audio('Hin_22_6');
		Hin_22_7 = _this.add.audio('Hin_22_7');
		Hin_22_8 = _this.add.audio('Hin_22_8');
		Hin_22_9 = _this.add.audio('Hin_22_9');
		Hin_22_10 = _this.add.audio('Hin_22_10');
		
		//***********************************************************2.3
		Eng_23_1=_this.add.audio('Eng_23_1');
        Eng_23_2=_this.add.audio('Eng_23_2');
        Eng_23_3=_this.add.audio('Eng_23_3');
        Eng_23_4=_this.add.audio('Eng_23_4');
        Eng_23_5=_this.add.audio('Eng_23_5');
        Eng_23_6=_this.add.audio('Eng_23_6');
        Eng_23_7=_this.add.audio('Eng_23_7');
        Eng_23_8=_this.add.audio('Eng_23_8');
        Eng_23_4option=_this.add.audio('Eng_23_4option');
        Kan_23_1=_this.add.audio('Kan_23_1');
        Kan_23_2=_this.add.audio('Kan_23_2');
        Kan_23_3=_this.add.audio('Kan_23_3');
        Kan_23_4=_this.add.audio('Kan_23_4');
        Kan_23_5=_this.add.audio('Kan_23_5');
        Kan_23_6=_this.add.audio('Kan_23_6');
        Kan_23_7=_this.add.audio('Kan_23_7');
        Kan_23_8=_this.add.audio('Kan_23_8');
        Hin_23_1=_this.add.audio('Hin_23_1');
        Hin_23_2=_this.add.audio('Hin_23_2');
        Hin_23_3=_this.add.audio('Hin_23_3');
        Hin_23_4=_this.add.audio('Hin_23_4');
        Hin_23_5=_this.add.audio('Hin_23_5');
        Hin_23_6=_this.add.audio('Hin_23_6');
        Hin_23_7=_this.add.audio('Hin_23_7');
        Hin_23_8=_this.add.audio('Hin_23_8');
		
		//***************************************************************************************3.1
		goingdown=_this.add.audio('goingdown');
		goingup=_this.add.audio('goingup');
		E1_31a=_this.add.audio('E1_31a');
        E1_31b=_this.add.audio('E1_31b');
        H1_31a=_this.add.audio('H1_31a');
		H1_31b=_this.add.audio('H1_31b');
        K1_31a=_this.add.audio('K1_31a');
		K1_31b=_this.add.audio('K1_31b');
		
		//**************************************************************************************3.2A
		slideSound=_this.add.audio('slide');
    	
        
        ElevelD=_this.add.audio('ElevelD');
        HlevelD=_this.add.audio('HlevelD');
        KlevelD=_this.add.audio('KlevelD');
        
        ElevelCa=_this.add.audio('ElevelCa');
        ElevelCb=_this.add.audio('ElevelCb');
        HlevelCa=_this.add.audio('HlevelCa');
        HlevelCb=_this.add.audio('HlevelCb');
        KlevelCa=_this.add.audio('KlevelCa');
        KlevelCb=_this.add.audio('KlevelCb');
        
        Eng_32A1=_this.add.audio('Eng_32A1');
        Eng_32A2=_this.add.audio('Eng_32A2');
        Kan_32A1=_this.add.audio('Kan_32A1');
        Kan_32A2=_this.add.audio('Kan_32A2');
        Hin_32A1=_this.add.audio('Hin_32A1');
        Hin_32A2=_this.add.audio('Hin_32A2');
		
		//******************************************************************1.1B/E10aa
		Eng_11A1=_this.add.audio('Eng_11A1');    	
        Eng_11A2=_this.add.audio('Eng_11A2');    	
        Eng_11A2Option=_this.add.audio('Eng_11A2Option');    	
	    Kan_11A1=_this.add.audio('Kan_11A1');    	
        Kan_11A2=_this.add.audio('Kan_11A2');    	
        Hin_11A1=_this.add.audio('Hin_11A1');    	
        Hin_11A2=_this.add.audio('Hin_11A2');    	
		Hin_11A2Option=_this.add.audio('Hin_11A2Option'); 
		
		//*********************************************************************1.2A/Ball
		spin2 = _this.add.audio('spin2');
        Eng_12A1= _this.add.audio('Eng_12A1');
        Eng_12A2= _this.add.audio('Eng_12A2');
        Eng_12A3= _this.add.audio('Eng_12A3');
        Eng_12B1= _this.add.audio('Eng_12B1');
        Eng_12B2= _this.add.audio('Eng_12B2');
        Eng_12B3= _this.add.audio('Eng_12B3');
        Eng_12B5= _this.add.audio('Eng_12B5');
        Eng_12C1= _this.add.audio('Eng_12C1');
        Eng_12C2= _this.add.audio('Eng_12C2');
        Eng_12C3= _this.add.audio('Eng_12C3');
        Kan_12A1= _this.add.audio('Kan_12A1');
        Kan_12A2= _this.add.audio('Kan_12A2');
        Kan_12A3= _this.add.audio('Kan_12A3');
        Kan_12B1= _this.add.audio('Kan_12B1');
        Kan_12B2= _this.add.audio('Kan_12B2');
        Kan_12B3= _this.add.audio('Kan_12B3');
        Kan_12B5= _this.add.audio('Kan_12B5');
        Kan_12C1= _this.add.audio('Kan_12C1');
        Kan_12C2= _this.add.audio('Kan_12C2');
        Kan_12C3= _this.add.audio('Kan_12C3');
        Hin_12A1= _this.add.audio('Hin_12A1');
        Hin_12A2= _this.add.audio('Hin_12A2');
        Hin_12A3= _this.add.audio('Hin_12A3');
        Hin_12B1= _this.add.audio('Hin_12B1');
        Hin_12B2= _this.add.audio('Hin_12B2');
        Hin_12B3= _this.add.audio('Hin_12B3');
        Hin_12B5= _this.add.audio('Hin_12B5');
        Hin_12C1= _this.add.audio('Hin_12C1');
        Hin_12C2= _this.add.audio('Hin_12C2');
        Hin_12C3= _this.add.audio('Hin_12C3');
		//*************************************************************************************************24A
		Eng_24A1=_this.add.audio('Eng_24A1');
        Eng_24A2=_this.add.audio('Eng_24A2');
        Eng_24B1=_this.add.audio('Eng_24B1');
        Kan_24A1=_this.add.audio('Kan_24A1');
        Kan_24A2=_this.add.audio('Kan_24A2');
        Kan_24B1=_this.add.audio('Kan_24B1');
        Hin_24A1=_this.add.audio('Hin_24A1');
        Hin_24A2=_this.add.audio('Hin_24A2');
        Hin_24B1=_this.add.audio('Hin_24B1');
		//********************************************************************************************3.2B
		E_32a=_this.add.audio('E_32a');
        H_32a=_this.add.audio('H_32a');
        K_32a=_this.add.audio('K_32a');
		
		//*******************************************************************************************3/3A/100g
		Eng_33A=_this.add.audio('Eng_33A');
        Eng_33B1=_this.add.audio('Eng_33B1');
        Eng_33B2=_this.add.audio('Eng_33B2');
        Kan_33A=_this.add.audio('Kan_33A');
        Kan_33B1=_this.add.audio('Kan_33B1');
        Kan_33B2=_this.add.audio('Kan_33B2');
        Kan_33_3=_this.add.audio('Kan_33_3');
        Kan_33_4=_this.add.audio('Kan_33_4');
        Hin_33A=_this.add.audio('Hin_33A');
		Hin_33B1=_this.add.audio('Hin_33B1');
        Hin_33B2=_this.add.audio('Hin_33B2');
		
		//**********************************************************************************4.1A
		Eng_41A1=_this.add.audio('Eng_41A1');
        Eng_41A2=_this.add.audio('Eng_41A2');
        Eng_41A3=_this.add.audio('Eng_41A3');
        Eng_41B1=_this.add.audio('Eng_41B1');
        Eng_41B2=_this.add.audio('Eng_41B2');
        Eng_41C1=_this.add.audio('Eng_41C1');
        Eng_41C2=_this.add.audio('Eng_41C2');
        Kan_41A1=_this.add.audio('Kan_41A1');
        Kan_41A2=_this.add.audio('Kan_41A2');
        Kan_41A3=_this.add.audio('Kan_41A3');
        Kan_41B1=_this.add.audio('Kan_41B1');
        Kan_41B2=_this.add.audio('Kan_41B2');
        Kan_41C1=_this.add.audio('Kan_41C1');
        Kan_41C2=_this.add.audio('Kan_41C2');
        Hin_41A1=_this.add.audio('Hin_41A1');
        Hin_41A2=_this.add.audio('Hin_41A2');
        Hin_41A3=_this.add.audio('Hin_41A3');
        Hin_41B1=_this.add.audio('Hin_41B1');
        Hin_41B2=_this.add.audio('Hin_41B2');
        Hin_41C1=_this.add.audio('Hin_41C1');
		Hin_41C2=_this.add.audio('Hin_41C2');
		//*******************************************************************************4.2A/Ball
		waterFillingSound=_this.add.audio('waterFillingSound');
        watersplash=_this.add.audio('watersplash');
		Eng_42A1=_this.add.audio('Eng_42A1');
        Eng_42B1=_this.add.audio('Eng_42B1');
        Eng_42C1=_this.add.audio('Eng_42C1');
        Kan_42A1=_this.add.audio('Kan_42A1');
        Kan_42B1=_this.add.audio('Kan_42B1');
        Kan_42C1=_this.add.audio('Kan_42C1');
        Hin_42A1=_this.add.audio('Hin_42A1');
        Hin_42B1=_this.add.audio('Hin_42B1');
        Hin_42C1=_this.add.audio('Hin_42C1');
		//**********************************************************************4.3A
		waterFill=_this.add.audio('waterFill');
    	Eng_43A1=_this.add.audio('Eng_43A1');
        Eng_43B1=_this.add.audio('Eng_43B1');
        Eng_43C1=_this.add.audio('Eng_43C1');
        Eng_43C11=_this.add.audio('Eng_43C11');
        Eng_43D1=_this.add.audio('Eng_43D1');
        Kan_43A1=_this.add.audio('Kan_43A1');
        Kan_43B1=_this.add.audio('Kan_43B1');
        Kan_43C1=_this.add.audio('Kan_43C1');
        Kan_43C11=_this.add.audio('Kan_43C11');
        Kan_43D1=_this.add.audio('Kan_43D1');
        Hin_43A1=_this.add.audio('Hin_43A1');
        Hin_43B1=_this.add.audio('Hin_43B1');
        Hin_43C1=_this.add.audio('Hin_43C1');
        Hin_43C11=_this.add.audio('Hin_43C11');
        Hin_43D1=_this.add.audio('Hin_43D1');
		
		
		//************************************************************************************************************888
		
		_this.sound.setDecodedCallback([ celebr,waudio,snapSound,ClickSound,Eng_11A1,Kan_11A1,Hin_11A1,
		E1a,E1b,H1a,H1b,K1a,K1b,E2a,E2b,H2a,H2b,K2a,K2b,E3a,E3b,H3a,H3b,K3a,K3b,E4a,E4b,H4a,H4b,K4a,K4b,
		E5a,E5b,H5a,H5b,K5a,K5b,E6a,E6b,H6a,H6b,K6a,K6b,E7a,E7b,H7a,H7b,K7a,K7b,E8a,E8b,H8a,H8b,K8a,K8b,
		E9a,E9b,H9a,H9b,K9a,K9b,E10a,E10b,H10a,H10b,K10a,K10b,E11a,E11b,H11a,H11b,K11a,K11b,E12a,E12b,H12a,
		H12b,K12a,K12b,E13a,E13b,H13a,H13b,K13a,K13b,E14a,E14b,H14a,H14b,K14a,K14b,E15a,E15b,H15a,H15b,K15a,
		K15b,E16a,E16b,H16a,H16b,K16a,K16b,E17a,E17b,H17a,H17b,K17a,K17b,E18a,E18b,H18a,H18b,K18a,K18b,E19a,
		E19b,H19a,H19b,K19a,K19b,E20a,E20b,H20a,H20b,K20a,K20b,E21a,E21b,H21a,H21b,K21a,K21b,E22a,E22b,H22a,
		H22b,K22a,K22b,E23a,E23b,H23a,H23b,K23a,K23b,E24a,E24b,H24a,H24b,K24a,K24b,E25a,E25b,H25a,H25b,K25a,K25b,E26a,E26b,H26a,H26b,K26a,K26b,
		E1aa,E1bb,H1aa,H1bb,K1aa,K1bb,E2aa,E2bb,H2aa,H2bb,K2aa,K2bb,E3aa,E3bb,H3aa,H3bb,K3aa,K3bb,E5aa,E5bb,H5aa,H5bb,K5aa,K5bb,E6aa,E6bb,H6aa,
		H6bb,K6aa,K6bb,E7aa,E7bb,H7aa,H7bb,K7aa,K7bb,E8aa,E8bb,H8aa,H8bb,K8aa,K8bb,E9aa,E9bb,H9aa,H9bb,K9aa,K9bb,E10aa,E10bb,H10aa,H10bb,K10aa,
		K10bb,E11aa,E11bb,H11aa,H11bb,K11aa,K11bb,E12aa,E12bb,H12aa,H12bb,K12aa,K12bb,E13aa,E13bb,H13aa,H13bb,K13aa,K13bb,E14aa,E14bb,H14aa,H14bb,
		K14aa,K14bb,E15aa,E15bb,H15aa,H15bb,K15aa,K15bb,E16aa,E16bb,H16aa,H16bb,K16aa,K16bb,E17aa,E17bb,H17aa,H17bb,K17aa,K17bb,E18aa,E18bb,H18aa,
		H18bb,K18aa,K18bb,E19aa,E19bb,H19aa,H19bb,K19aa,K19bb,E20aa,E20bb,H20aa,H20bb,K20aa,K20bb,
		Eng_22_1,Eng_22_2,Eng_22_3,Eng_22_4,Eng_22_5,Eng_22_6,Eng_22_7,Eng_22_8,Eng_22_9,Eng_22_10,
		Hin_22_1,Hin_22_2,Hin_22_3,Hin_22_4,Hin_22_5,Hin_22_6,Hin_22_7,Hin_22_8,Hin_22_9,Hin_22_10,
		Kan_22_1,Kan_22_2,Kan_22_3,Kan_22_4,Kan_22_5,Kan_22_6,Kan_22_7,Kan_22_8,Kan_22_9,Kan_22_10,
		Eng_23_1,Eng_23_2,Eng_23_3,Eng_23_4,Eng_23_5,Eng_23_6,Eng_23_7,Eng_23_8,Eng_23_4option,Kan_23_1,Kan_23_2,
		Kan_23_3,Kan_23_4,Kan_23_5,Kan_23_6,Kan_23_7,Kan_23_8,Hin_23_1,Hin_23_2,Hin_23_3,Hin_23_4,Hin_23_5,Hin_23_6,Hin_23_7,Hin_23_8,
		E1_31a,E1_31b,H1_31a,H1_31b,K1_31a,K1_31b,goingup,goingdown,ElevelD,HlevelD,KlevelD,ElevelCa,HlevelCa,KlevelCa,ElevelCb,
		HlevelCb,KlevelCb,Eng_32A1,Eng_32A2,Kan_32A1,Kan_32A2,Hin_32A1,Hin_32A2,Eng_11A1,Eng_11A2,Eng_11A2Option,Kan_11A1,Kan_11A2,
		Hin_11A1,Hin_11A2,Hin_11A2Option,spin2,Eng_12A1,Eng_12A2,Eng_12A3,Eng_12B1,Eng_12B2,Eng_12B3,Eng_12B5,Eng_12C1,Eng_12C2,Eng_12C3,
		Kan_12A1,Kan_12A2,Kan_12A3,Kan_12B1,Kan_12B2,Kan_12B3,Kan_12B5,Kan_12C1,Kan_12C2,Kan_12C3,Hin_12A1,Hin_12A2,Hin_12A3,Hin_12B1,
		Hin_12B2,Hin_12B3,Hin_12B5,Hin_12C1,Hin_12C2,Hin_12C3,Eng_24A1,Eng_24A2,Eng_24B1,Kan_24A1,Kan_24A2,Kan_24B1,Hin_24A1,Hin_24A2,Hin_24B1,
		E_32a,H_32a,K_32a,Eng_33A,Eng_33B1,Eng_33B2,Kan_33A,Kan_33B1,Kan_33B2,Kan_33_3,Kan_33_4, Hin_33A,Hin_33B1,Hin_33B2,
		Eng_41A1,Kan_41A1,Hin_41A1,Eng_41A2,Kan_41A2,Hin_41A2,Eng_41A3,Kan_41A3,Hin_41A3,Kan_41C2,Hin_41C2,Eng_41C2,Eng_41B2,
		Kan_41B2,Hin_41B2,Eng_41C1,Kan_41C1,Hin_41C1,Eng_42A1,Eng_42B1,Eng_42C1,Kan_42A1,Kan_42B1,Kan_42C1,Hin_42A1,Hin_42B1,Hin_42C1,waterFillingSound,
		watersplash,waterFill,Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1,Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1,Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1
		], function(){
			//baudio.play(); 
			//baudio.loopFull(0.6);
			//baudio.volume = 0.3;
			_this.state.start('gradeSelectionScreen');			
		}, _this);

	},

	
	
	create:function(game)
	{
		/*celebr = _this.add.audio('celebr');
    	waudio = _this.add.audio('waudio');
        snapSound = _this.add.audio('snapSound');       
        ClickSound=_this.add.audio('ClickSound');
		
		//***********************************************************1.1A
		Eng_11A1=_this.add.audio('Eng_11A1');    	   	
	    Kan_11A1=_this.add.audio('Kan_11A1');    		
        Hin_11A1=_this.add.audio('Hin_11A1'); 	
		
		//***********************************************************2.1A
		E1a=_this.add.audio('Level21_E1a');
        H1a=_this.add.audio('Level21_H1a');
        K1a=_this.add.audio('Level21_K1a');
        
		E1b=_this.add.audio('Level21_E1b');
        H1b=_this.add.audio('Level21_H1b');
        K1b=_this.add.audio('Level21_K1b');
		
        E2a=_this.add.audio('Level21_E2a');
        H2a=_this.add.audio('Level21_H2a');
        K2a=_this.add.audio('Level21_K2a');
        
		E2b=_this.add.audio('Level21_E2b');
        H2b=_this.add.audio('Level21_H2b');
        K2b=_this.add.audio('Level21_K2b');
        
        E3a=_this.add.audio('Level21_E3a');
        H3a=_this.add.audio('Level21_H3a');
        K3a=_this.add.audio('Level21_K3a');
        
		E3b=_this.add.audio('Level21_E3b');
        H3b=_this.add.audio('Level21_H3b');
        K3b=_this.add.audio('Level21_K3b');
        
        E4a=_this.add.audio('Level21_E4a');
        H4a=_this.add.audio('Level21_H4a');
        K4a=_this.add.audio('Level21_K4a');
        
		E4b=_this.add.audio('Level21_E4b');
        H4b=_this.add.audio('Level21_H4b');
        K4b=_this.add.audio('Level21_K4b');
        
        E5a=_this.add.audio('Level21_E5a');
        H5a=_this.add.audio('Level21_H5a');
        K5a=_this.add.audio('Level21_K5a');
        
		E5b=_this.add.audio('Level21_E5b');
        H5b=_this.add.audio('Level21_H5b');
        K5b=_this.add.audio('Level21_K5b');
        
        E6a=_this.add.audio('Level21_E6a');
        H6a=_this.add.audio('Level21_H6a');
        K6a=_this.add.audio('Level21_K6a');
        
		E6b=_this.add.audio('Level21_E6b');
        H6b=_this.add.audio('Level21_H6b');
        K6b=_this.add.audio('Level21_K6b');
        
        E7a=_this.add.audio('Level21_E7a');
        H7a=_this.add.audio('Level21_H7a');
        K7a=_this.add.audio('Level21_K7a');
        
		E7b=_this.add.audio('Level21_E7b');
        H7b=_this.add.audio('Level21_H7b');
        K7b=_this.add.audio('Level21_K7b');
        
        E8a=_this.add.audio('Level21_E8a');
        H8a=_this.add.audio('Level21_H8a');
        K8a=_this.add.audio('Level21_K8a');
        
		E8b=_this.add.audio('Level21_E8b');
        H8b=_this.add.audio('Level21_H8b');
        K8b=_this.add.audio('Level21_K8b');
        
        E9a=_this.add.audio('Level21_E9a');
        H9a=_this.add.audio('Level21_H9a');
        K9a=_this.add.audio('Level21_K9a');
        
		E9b=_this.add.audio('Level21_E9b');
        H9b=_this.add.audio('Level21_H9b');
        K9b=_this.add.audio('Level21_K9b');
        
        E10a=_this.add.audio('Level21_E10a');
        H10a=_this.add.audio('Level21_H10a');
        K10a=_this.add.audio('Level21_K10a');
        
		E10b=_this.add.audio('Level21_E10b');
        H10b=_this.add.audio('Level21_H10b');
        K10b=_this.add.audio('Level21_K10b');
        
        E11a=_this.add.audio('Level21_E11a');
        H11a=_this.add.audio('Level21_H11a');
        K11a=_this.add.audio('Level21_K11a');
        
		E11b=_this.add.audio('Level21_E11b');
        H11b=_this.add.audio('Level21_H11b');
        K11b=_this.add.audio('Level21_K11b');
        
        E12a=_this.add.audio('Level21_E12a');
        H12a=_this.add.audio('Level21_H12a');
        K12a=_this.add.audio('Level21_K12a');
        
		E12b=_this.add.audio('Level21_E12b');
        H12b=_this.add.audio('Level21_H12b');
        K12b=_this.add.audio('Level21_K12b');
        
        E13a=_this.add.audio('Level21_E13a');
        H13a=_this.add.audio('Level21_H13a');
        K13a=_this.add.audio('Level21_K13a');
        
		E13b=_this.add.audio('Level21_E13b');
        H13b=_this.add.audio('Level21_H13b');
        K13b=_this.add.audio('Level21_K13b');
        
        E14a=_this.add.audio('Level21_E14a');
        H14a=_this.add.audio('Level21_H14a');
        K14a=_this.add.audio('Level21_K14a');
        
		E14b=_this.add.audio('Level21_E14b');
        H14b=_this.add.audio('Level21_H14b');
        K14b=_this.add.audio('Level21_K14b');
        
        E15a=_this.add.audio('Level21_E15a');
        H15a=_this.add.audio('Level21_H15a');
        K15a=_this.add.audio('Level21_K15a');
        
		E15b=_this.add.audio('Level21_E15b');
        H15b=_this.add.audio('Level21_H15b');
        K15b=_this.add.audio('Level21_K15b');
        
        E16a=_this.add.audio('Level21_E16a');
        H16a=_this.add.audio('Level21_H16a');
        K16a=_this.add.audio('Level21_K16a');
        
		E16b=_this.add.audio('Level21_E16b');
        H16b=_this.add.audio('Level21_H16b');
        K16b=_this.add.audio('Level21_K16b');
        
        E17a=_this.add.audio('Level21_E17a');
        H17a=_this.add.audio('Level21_H17a');
        K17a=_this.add.audio('Level21_K17a');
        
		E17b=_this.add.audio('Level21_E17b');
        H17b=_this.add.audio('Level21_H17b');
        K17b=_this.add.audio('Level21_K17b');
        
        E18a=_this.add.audio('Level21_E18a');
        H18a=_this.add.audio('Level21_H18a');
        K18a=_this.add.audio('Level21_K18a');
        
		E18b=_this.add.audio('Level21_E18b');
        H18b=_this.add.audio('Level21_H18b');
        K18b=_this.add.audio('Level21_K18b');
        
        E19a=_this.add.audio('Level21_E19a');
        H19a=_this.add.audio('Level21_H19a');
        K19a=_this.add.audio('Level21_K19a');
        
		E19b=_this.add.audio('Level21_E19b');
        H19b=_this.add.audio('Level21_H19b');
        K19b=_this.add.audio('Level21_K19b');
        
        E20a=_this.add.audio('Level21_E20a');
        H20a=_this.add.audio('Level21_H20a');
        K20a=_this.add.audio('Level21_K20a');
        
		E20b=_this.add.audio('Level21_E20b');
        H20b=_this.add.audio('Level21_H20b');
        K20b=_this.add.audio('Level21_K20b');
        
        E21a=_this.add.audio('Level21_E21a');
        H21a=_this.add.audio('Level21_H21a');
        K21a=_this.add.audio('Level21_K21a');
        
		E21b=_this.add.audio('Level21_E21b');
        H21b=_this.add.audio('Level21_H21b');
        K21b=_this.add.audio('Level21_K21b');
        
        E22a=_this.add.audio('Level21_E22a');
        H22a=_this.add.audio('Level21_H22a');
        K22a=_this.add.audio('Level21_K22a');
        
		E22b=_this.add.audio('Level21_E22b');
        H22b=_this.add.audio('Level21_H22b');
        K22b=_this.add.audio('Level21_K22b');
        
        E23a=_this.add.audio('Level21_E23a');
        H23a=_this.add.audio('Level21_H23a');
        K23a=_this.add.audio('Level21_K23a');
        
		E23b=_this.add.audio('Level21_E23b');
        H23b=_this.add.audio('Level21_H23b');
        K23b=_this.add.audio('Level21_K23b');
        
        E24a=_this.add.audio('Level21_E24a');
        H24a=_this.add.audio('Level21_H24a');
        K24a=_this.add.audio('Level21_K24a');
        
		E24b=_this.add.audio('Level21_E24b');
        H24b=_this.add.audio('Level21_H24b');
        K24b=_this.add.audio('Level21_K24b');
        
        E25a=_this.add.audio('Level21_E25a');
        H25a=_this.add.audio('Level21_H25a');
        K25a=_this.add.audio('Level21_K25a');
        
		E25b=_this.add.audio('Level21_E25b');
        H25b=_this.add.audio('Level21_H25b');
        K25b=_this.add.audio('Level21_K25b');
        
        
        E26a=_this.add.audio('Level21_E26a');
        H26a=_this.add.audio('Level21_H26a');
        K26a=_this.add.audio('Level21_K26a');
        
		E26b=_this.add.audio('Level21_E26b');
        H26b=_this.add.audio('Level21_H26b');
        K26b=_this.add.audio('Level21_K26b');
		
		//*******************************************************2.1B/E10aa
		E1aa=_this.add.audio('E1aa');
        H1aa=_this.add.audio('H1aa');
        K1aa=_this.add.audio('K1aa');
        
		E1bb=_this.add.audio('E1bb');
        H1bb=_this.add.audio('H1bb');
        K1bb=_this.add.audio('K1bb');
        
        E2aa=_this.add.audio('E2aa');
        H2aa=_this.add.audio('H2aa');
        K2aa=_this.add.audio('K2aa');
        
		E2bb=_this.add.audio('E2bb');
        H2bb=_this.add.audio('H2bb');
        K2bb=_this.add.audio('K2bb');
        
        E3aa=_this.add.audio('E3aa');
        H3aa=_this.add.audio('H3aa');
        K3aa=_this.add.audio('K3aa');
        
		E3bb=_this.add.audio('E3bb');
        H3bb=_this.add.audio('H3bb');
        K3bb=_this.add.audio('K3bb');
        
        E5aa=_this.add.audio('E5aa');
        H5aa=_this.add.audio('H5aa');
        K5aa=_this.add.audio('K5aa');
        
		E5bb=_this.add.audio('E5bb');
        H5bb=_this.add.audio('H5bb');
        K5bb=_this.add.audio('K5bb');
        
        E6aa=_this.add.audio('E6aa');
        H6aa=_this.add.audio('H6aa');
        K6aa=_this.add.audio('K6aa');
        
		E6bb=_this.add.audio('E6bb');
        H6bb=_this.add.audio('H6bb');
        K6bb=_this.add.audio('K6bb');
        
        E7aa=_this.add.audio('E7aa');
        H7aa=_this.add.audio('H7aa');
        K7aa=_this.add.audio('K7aa');
        
		E7bb=_this.add.audio('E7bb');
        H7bb=_this.add.audio('H7bb');
        K7bb=_this.add.audio('K7bb');
        
        E8aa=_this.add.audio('E8aa');
        H8aa=_this.add.audio('H8aa');
        K8aa=_this.add.audio('K8aa');
        
		E8bb=_this.add.audio('E8bb');
        H8bb=_this.add.audio('H8bb');
        K8bb=_this.add.audio('K8bb');
        
        E9aa=_this.add.audio('E9aa');
        H9aa=_this.add.audio('H9aa');
        K9aa=_this.add.audio('K9aa');
        
		E9bb=_this.add.audio('E9bb');
        H9bb=_this.add.audio('H9bb');
        K9bb=_this.add.audio('K9bb');
        
        E10aa=_this.add.audio('E10aa');
        H10aa=_this.add.audio('H10aa');
        K10aa=_this.add.audio('K10aa');
        
		E10bb=_this.add.audio('E10bb');
        H10bb=_this.add.audio('H10bb');
        K10bb=_this.add.audio('K10bb');
        
        E11aa=_this.add.audio('E11aa');
        H11aa=_this.add.audio('H11aa');
        K11aa=_this.add.audio('K11aa');
        
		E11bb=_this.add.audio('E11bb');
        H11bb=_this.add.audio('H11bb');
        K11bb=_this.add.audio('K11bb');
        
        E12aa=_this.add.audio('E12aa');
        H12aa=_this.add.audio('H12aa');
        K12aa=_this.add.audio('K12aa');
        
		E12bb=_this.add.audio('E12bb');
        H12bb=_this.add.audio('H12bb');
        K12bb=_this.add.audio('K12bb');
        
        E13aa=_this.add.audio('E13aa');
        H13aa=_this.add.audio('H13aa');
        K13aa=_this.add.audio('K13aa');
        
		E13bb=_this.add.audio('E13bb');
        H13bb=_this.add.audio('H13bb');
        K13bb=_this.add.audio('K13bb');
        
        E14aa=_this.add.audio('E14aa');
        H14aa=_this.add.audio('H14aa');
        K14aa=_this.add.audio('K14aa');
        
		E14bb=_this.add.audio('E14bb');
        H14bb=_this.add.audio('H14bb');
        K14bb=_this.add.audio('K14bb');
        
        E15aa=_this.add.audio('E15aa');
        H15aa=_this.add.audio('H15aa');
        K15aa=_this.add.audio('K15aa');
        
		E15bb=_this.add.audio('E15bb');
        H15bb=_this.add.audio('H15bb');
        K15bb=_this.add.audio('K15bb');
        
        E16aa=_this.add.audio('E16aa');
        H16aa=_this.add.audio('H16aa');
        K16aa=_this.add.audio('K16aa');
        
		E16bb=_this.add.audio('E16bb');
        H16bb=_this.add.audio('H16bb');
        K16bb=_this.add.audio('K16bb');
        
        E17aa=_this.add.audio('E17aa');
        H17aa=_this.add.audio('H17aa');
        K17aa=_this.add.audio('K17aa');
        
		E17bb=_this.add.audio('E17bb');
        H17bb=_this.add.audio('H17bb');
        K17bb=_this.add.audio('K17bb');
        
        E18aa=_this.add.audio('E18aa');
        H18aa=_this.add.audio('H18aa');
        K18aa=_this.add.audio('K18aa');
        
		E18bb=_this.add.audio('E18bb');
        H18bb=_this.add.audio('H18bb');
        K18bb=_this.add.audio('K18bb');
        
        E19aa=_this.add.audio('E19aa');
        H19aa=_this.add.audio('H19aa');
        K19aa=_this.add.audio('K19aa');
        
		E19bb=_this.add.audio('E19bb');
        H19bb=_this.add.audio('H19bb');
        K19bb=_this.add.audio('K19bb');
        
        E20aa=_this.add.audio('E20aa');
        H20aa=_this.add.audio('H20aa');
        K20aa=_this.add.audio('K20aa');
        
		E20bb=_this.add.audio('E20bb');
        H20bb=_this.add.audio('H20bb');
        K20bb=_this.add.audio('K20bb');
		
		//***********************************************************2.2
		Eng_22_1 = _this.add.audio('Eng_22_1');
		Eng_22_2 = _this.add.audio('Eng_22_2');
		Eng_22_3 = _this.add.audio('Eng_22_3');
		Eng_22_4 = _this.add.audio('Eng_22_4');
		Eng_22_5 = _this.add.audio('Eng_22_5');
		Eng_22_6 = _this.add.audio('Eng_22_6');
		Eng_22_7 = _this.add.audio('Eng_22_7');
		Eng_22_8 = _this.add.audio('Eng_22_8');
		Eng_22_9 = _this.add.audio('Eng_22_9');
		Eng_22_10 = _this.add.audio('Eng_22_10');
		
		Kan_22_1 = _this.add.audio('Kan_22_1');
		Kan_22_2 = _this.add.audio('Kan_22_2');
		Kan_22_3 = _this.add.audio('Kan_22_3');
		Kan_22_4 = _this.add.audio('Kan_22_4');
		Kan_22_5 = _this.add.audio('Kan_22_5');
		Kan_22_6 = _this.add.audio('Kan_22_6');
		Kan_22_7 = _this.add.audio('Kan_22_7');
		Kan_22_8 = _this.add.audio('Kan_22_8');
		Kan_22_9 = _this.add.audio('Kan_22_9');
		Kan_22_10 = _this.add.audio('Kan_22_10');
		
		Hin_22_1 = _this.add.audio('Hin_22_1');
		Hin_22_2 = _this.add.audio('Hin_22_2');
		Hin_22_3 = _this.add.audio('Hin_22_3');
		Hin_22_4 = _this.add.audio('Hin_22_4');
		Hin_22_5 = _this.add.audio('Hin_22_5');
		Hin_22_6 = _this.add.audio('Hin_22_6');
		Hin_22_7 = _this.add.audio('Hin_22_7');
		Hin_22_8 = _this.add.audio('Hin_22_8');
		Hin_22_9 = _this.add.audio('Hin_22_9');
		Hin_22_10 = _this.add.audio('Hin_22_10');
		
		//***********************************************************2.3
		Eng_23_1=_this.add.audio('Eng_23_1');
        Eng_23_2=_this.add.audio('Eng_23_2');
        Eng_23_3=_this.add.audio('Eng_23_3');
        Eng_23_4=_this.add.audio('Eng_23_4');
        Eng_23_5=_this.add.audio('Eng_23_5');
        Eng_23_6=_this.add.audio('Eng_23_6');
        Eng_23_7=_this.add.audio('Eng_23_7');
        Eng_23_8=_this.add.audio('Eng_23_8');
        Eng_23_4option=_this.add.audio('Eng_23_4option');
        Kan_23_1=_this.add.audio('Kan_23_1');
        Kan_23_2=_this.add.audio('Kan_23_2');
        Kan_23_3=_this.add.audio('Kan_23_3');
        Kan_23_4=_this.add.audio('Kan_23_4');
        Kan_23_5=_this.add.audio('Kan_23_5');
        Kan_23_6=_this.add.audio('Kan_23_6');
        Kan_23_7=_this.add.audio('Kan_23_7');
        Kan_23_8=_this.add.audio('Kan_23_8');
        Hin_23_1=_this.add.audio('Hin_23_1');
        Hin_23_2=_this.add.audio('Hin_23_2');
        Hin_23_3=_this.add.audio('Hin_23_3');
        Hin_23_4=_this.add.audio('Hin_23_4');
        Hin_23_5=_this.add.audio('Hin_23_5');
        Hin_23_6=_this.add.audio('Hin_23_6');
        Hin_23_7=_this.add.audio('Hin_23_7');
        Hin_23_8=_this.add.audio('Hin_23_8');
		
		//***************************************************************************************3.1
		goingdown=_this.add.audio('goingdown');
		goingup=_this.add.audio('goingup');
		E1_31a=_this.add.audio('E1_31a');
        E1_31b=_this.add.audio('E1_31b');
        H1_31a=_this.add.audio('H1_31a');
		H1_31b=_this.add.audio('H1_31b');
        K1_31a=_this.add.audio('K1_31a');
		K1_31b=_this.add.audio('K1_31b');
		
		//**************************************************************************************3.2A
		slideSound=_this.add.audio('slide');
    	
        
        ElevelD=_this.add.audio('ElevelD');
        HlevelD=_this.add.audio('HlevelD');
        KlevelD=_this.add.audio('KlevelD');
        
        ElevelCa=_this.add.audio('ElevelCa');
        ElevelCb=_this.add.audio('ElevelCb');
        HlevelCa=_this.add.audio('HlevelCa');
        HlevelCb=_this.add.audio('HlevelCb');
        KlevelCa=_this.add.audio('KlevelCa');
        KlevelCb=_this.add.audio('KlevelCb');
        
        Eng_32A1=_this.add.audio('Eng_32A1');
        Eng_32A2=_this.add.audio('Eng_32A2');
        Kan_32A1=_this.add.audio('Kan_32A1');
        Kan_32A2=_this.add.audio('Kan_32A2');
        Hin_32A1=_this.add.audio('Hin_32A1');
        Hin_32A2=_this.add.audio('Hin_32A2');
		
		//******************************************************************1.1B/E10aa
		Eng_11A1=_this.add.audio('Eng_11A1');    	
        Eng_11A2=_this.add.audio('Eng_11A2');    	
        Eng_11A2Option=_this.add.audio('Eng_11A2Option');    	
	    Kan_11A1=_this.add.audio('Kan_11A1');    	
        Kan_11A2=_this.add.audio('Kan_11A2');    	
        Hin_11A1=_this.add.audio('Hin_11A1');    	
        Hin_11A2=_this.add.audio('Hin_11A2');    	
		Hin_11A2Option=_this.add.audio('Hin_11A2Option'); 
		
		//*********************************************************************1.2A/Ball
		spin2 = _this.add.audio('spin2');
        Eng_12A1= _this.add.audio('Eng_12A1');
        Eng_12A2= _this.add.audio('Eng_12A2');
        Eng_12A3= _this.add.audio('Eng_12A3');
        Eng_12B1= _this.add.audio('Eng_12B1');
        Eng_12B2= _this.add.audio('Eng_12B2');
        Eng_12B3= _this.add.audio('Eng_12B3');
        Eng_12B5= _this.add.audio('Eng_12B5');
        Eng_12C1= _this.add.audio('Eng_12C1');
        Eng_12C2= _this.add.audio('Eng_12C2');
        Eng_12C3= _this.add.audio('Eng_12C3');
        Kan_12A1= _this.add.audio('Kan_12A1');
        Kan_12A2= _this.add.audio('Kan_12A2');
        Kan_12A3= _this.add.audio('Kan_12A3');
        Kan_12B1= _this.add.audio('Kan_12B1');
        Kan_12B2= _this.add.audio('Kan_12B2');
        Kan_12B3= _this.add.audio('Kan_12B3');
        Kan_12B5= _this.add.audio('Kan_12B5');
        Kan_12C1= _this.add.audio('Kan_12C1');
        Kan_12C2= _this.add.audio('Kan_12C2');
        Kan_12C3= _this.add.audio('Kan_12C3');
        Hin_12A1= _this.add.audio('Hin_12A1');
        Hin_12A2= _this.add.audio('Hin_12A2');
        Hin_12A3= _this.add.audio('Hin_12A3');
        Hin_12B1= _this.add.audio('Hin_12B1');
        Hin_12B2= _this.add.audio('Hin_12B2');
        Hin_12B3= _this.add.audio('Hin_12B3');
        Hin_12B5= _this.add.audio('Hin_12B5');
        Hin_12C1= _this.add.audio('Hin_12C1');
        Hin_12C2= _this.add.audio('Hin_12C2');
        Hin_12C3= _this.add.audio('Hin_12C3');
		//*************************************************************************************************24A
		Eng_24A1=_this.add.audio('Eng_24A1');
        Eng_24A2=_this.add.audio('Eng_24A2');
        Eng_24B1=_this.add.audio('Eng_24B1');
        Kan_24A1=_this.add.audio('Kan_24A1');
        Kan_24A2=_this.add.audio('Kan_24A2');
        Kan_24B1=_this.add.audio('Kan_24B1');
        Hin_24A1=_this.add.audio('Hin_24A1');
        Hin_24A2=_this.add.audio('Hin_24A2');
        Hin_24B1=_this.add.audio('Hin_24B1');
		//********************************************************************************************3.2B
		E_32a=_this.add.audio('E_32a');
        H_32a=_this.add.audio('H_32a');
        K_32a=_this.add.audio('K_32a');
		
		//*******************************************************************************************3/3A/100g
		Eng_33A=_this.add.audio('Eng_33A');
        Eng_33B1=_this.add.audio('Eng_33B1');
        Eng_33B2=_this.add.audio('Eng_33B2');
        Kan_33A=_this.add.audio('Kan_33A');
        Kan_33B1=_this.add.audio('Kan_33B1');
        Kan_33B2=_this.add.audio('Kan_33B2');
        Kan_33_3=_this.add.audio('Kan_33_3');
        Kan_33_4=_this.add.audio('Kan_33_4');
        Hin_33A=_this.add.audio('Hin_33A');
		Hin_33B1=_this.add.audio('Hin_33B1');
        Hin_33B2=_this.add.audio('Hin_33B2');
		
		//**********************************************************************************4.1A
		Eng_41A1=_this.add.audio('Eng_41A1');
        Eng_41A2=_this.add.audio('Eng_41A2');
        Eng_41A3=_this.add.audio('Eng_41A3');
        Eng_41B1=_this.add.audio('Eng_41B1');
        Eng_41B2=_this.add.audio('Eng_41B2');
        Eng_41C1=_this.add.audio('Eng_41C1');
        Eng_41C2=_this.add.audio('Eng_41C2');
        Kan_41A1=_this.add.audio('Kan_41A1');
        Kan_41A2=_this.add.audio('Kan_41A2');
        Kan_41A3=_this.add.audio('Kan_41A3');
        Kan_41B1=_this.add.audio('Kan_41B1');
        Kan_41B2=_this.add.audio('Kan_41B2');
        Kan_41C1=_this.add.audio('Kan_41C1');
        Kan_41C2=_this.add.audio('Kan_41C2');
        Hin_41A1=_this.add.audio('Hin_41A1');
        Hin_41A2=_this.add.audio('Hin_41A2');
        Hin_41A3=_this.add.audio('Hin_41A3');
        Hin_41B1=_this.add.audio('Hin_41B1');
        Hin_41B2=_this.add.audio('Hin_41B2');
        Hin_41C1=_this.add.audio('Hin_41C1');
		Hin_41C2=_this.add.audio('Hin_41C2');
		
		//************************************************************4.2A
		waterFillingSound=_this.add.audio('waterFillingSound');
        watersplash=_this.add.audio('watersplash');
		Eng_42A1=_this.add.audio('Eng_42A1');
        Eng_42B1=_this.add.audio('Eng_42B1');
        Eng_42C1=_this.add.audio('Eng_42C1');
        Kan_42A1=_this.add.audio('Kan_42A1');
        Kan_42B1=_this.add.audio('Kan_42B1');
        Kan_42C1=_this.add.audio('Kan_42C1');
        Hin_42A1=_this.add.audio('Hin_42A1');
        Hin_42B1=_this.add.audio('Hin_42B1');
        Hin_42C1=_this.add.audio('Hin_42C1');
		
		//**********************************************************************4.3A
		waterFill=_this.add.audio('waterFill');
    	Eng_43A1=_this.add.audio('Eng_43A1');
        Eng_43B1=_this.add.audio('Eng_43B1');
        Eng_43C1=_this.add.audio('Eng_43C1');
        Eng_43C11=_this.add.audio('Eng_43C11');
        Eng_43D1=_this.add.audio('Eng_43D1');
        Kan_43A1=_this.add.audio('Kan_43A1');
        Kan_43B1=_this.add.audio('Kan_43B1');
        Kan_43C1=_this.add.audio('Kan_43C1');
        Kan_43C11=_this.add.audio('Kan_43C11');
        Kan_43D1=_this.add.audio('Kan_43D1');
        Hin_43A1=_this.add.audio('Hin_43A1');
        Hin_43B1=_this.add.audio('Hin_43B1');
        Hin_43C1=_this.add.audio('Hin_43C1');
        Hin_43C11=_this.add.audio('Hin_43C11');
        Hin_43D1=_this.add.audio('Hin_43D1');*/
		//fx = _this.add.audio('sfx');
       // fx.allowMultiple = true;
		

	//	And this defines the markers.

	//	They consist of a key (for replaying), the time the sound starts and the duration, both given in seconds.
	//	You can also set the volume and loop state, although we don't use them in this example (see the docs)

	/*fx.addMarker('alien death', 0, 1.0);
			fx.play('alien death');
		
		
		this.sound.setDecodedCallback([fx],function(){
			//console.log("decoded");
			fx.addMarker('alien death', 0, 1.0);
			fx.play('alien death');
		//this.state.start('gradeSelectionScreen',true,false);
		},this);*/





		game.state.add('gameModeSelectionScreen',Game.gameModeSelectionScreen);
		game.state.add('gradeSelectionScreen',Game.gradeSelectionScreen);
		game.state.add('challengeModeGgradeSelectionScreen',Game.challengeModeGgradeSelectionScreen);
		game.state.add('practiceModegradeSelectionScreen',Game.practiceModegradeSelectionScreen);

		game.state.add('selectgrade1MicroConceptScreen',Game.selectgrade1MicroConceptScreen);
		game.state.add('selectgrade2MicroConceptScreen',Game.selectgrade2MicroConceptScreen);
		game.state.add('selectgrade3MicroConceptScreen',Game.selectgrade3MicroConceptScreen);
		game.state.add('selectgrade4MicroConceptScreen',Game.selectgrade4MicroConceptScreen);

		game.state.add('grade1NumberSense',Game.grade1NumberSense);
		game.state.add('grade1NumberOperation',Game.grade1NumberOperation);
		game.state.add('grade1Measurement',Game.grade1Measurement);

		game.state.add('grade2NumberSense',Game.grade2NumberSense);
		game.state.add('grade2NumberOperation',Game.grade2NumberOperation);
		game.state.add('grade2Measurement',Game.grade2Measurement);

		game.state.add('grade3NumberSense',Game.grade3NumberSense);
		game.state.add('grade3NumberOperation',Game.grade3NumberOperation);
		game.state.add('grade3Measurement',Game.grade3Measurement);

		game.state.add('grade4Measurement',Game.grade4Measurement);
		
        game.state.add('grade1levelSelectionScreen',Game.gradeSelectionScreen);

        game.state.add('grade2levelSelectionScreen',Game.gradeSelectionScreen);
		
        game.state.add('grade3levelSelectBoot',Game.grade3levelSelectBoot);
        game.state.add('grade3levelSelectPreloader',Game.grade3levelSelectPreloader);
        game.state.add('grade3levelSelectionScreen',Game.gradeSelectionScreen);
		
		game.state.add('grade4levelSelectBoot',Game.grade4levelSelectBoot);
		game.state.add('grade4levelSelectPreloader',Game.grade4levelSelectPreloader);
        game.state.add('grade4levelSelectionScreen',Game.gradeSelectionScreen);
		
		/*game.state.add('grade2_2boot',Game.grade2_2boot);
		game.state.add('grade2_2preloader',Game.grade2_2preloader);
        game.state.add('grade2_2level1',Game.grade2_2level1);
        game.state.add('grade2_2Score',Game.grade2_2Score);*/
		
		game.state.add('grade1_1Alevel1',Game.grade1_1Alevel1);
        game.state.add('grade1_1AScore',Game.grade1_1AScore);
		
		game.state.add('grade2_1Alevel1',Game.grade2_1Alevel1);
        game.state.add('grade2_1AScore',Game.grade2_1AScore);
		
		game.state.add('grade2_1Blevel1',Game.grade2_1Blevel1);
        game.state.add('grade2_1BScore',Game.grade2_1BScore);
		
		game.state.add('grade2_2level1',Game.grade2_2level1);
        game.state.add('grade2_2Score',Game.grade2_2Score);
		
		game.state.add('grade2_3level1',Game.grade2_3level1);
        game.state.add('grade2_3Score',Game.grade2_3Score);
		
		game.state.add('grade3_1level1',Game.grade3_1level1);
        game.state.add('grade3_1Score',Game.grade3_1Score);
		
		game.state.add('grade3_2Alevel1',Game.grade3_2Alevel1);
        game.state.add('grade3_2AScore',Game.grade3_2AScore);
		
		game.state.add('grade1_1Blevel1',Game.grade1_1Blevel1);
        game.state.add('grade1_1BScore',Game.grade1_1BScore);
		
		game.state.add('grade1_2Alevel1',Game.grade1_2Alevel1);
        game.state.add('grade1_2AScore',Game.grade1_2AScore);

        game.state.add('grade1_3Alevel1',Game.grade1_3Alevel1);
        game.state.add('grade1_3AScore',Game.grade1_3AScore);

        game.state.add('grade1_3Blevel1',Game.grade1_3Blevel1);
        game.state.add('grade1_3BScore',Game.grade1_3BScore); 

        game.state.add('grade1_4level1',Game.grade1_4level1);
        game.state.add('grade1_4level2',Game.grade1_4level2);
        game.state.add('grade1_4level3',Game.grade1_4level3);
        game.state.add('grade1_4Score',Game.grade1_4Score);

        game.state.add('grade1_4level1',Game.grade1_4level1);
        game.state.add('grade1_4Score',Game.grade1_4Score);
		
		game.state.add('grade1_2Blevel1',Game.grade1_2Blevel1);
        game.state.add('grade1_2BScore',Game.grade1_2BScore);
		
		game.state.add('grade1_2Clevel1',Game.grade1_2Clevel1);
        game.state.add('grade1_2CScore',Game.grade1_2CScore);
		
		game.state.add('grade2_4Alevel1',Game.grade2_4Alevel1);
        game.state.add('grade2_4AScore',Game.grade2_4AScore);
		
		game.state.add('grade2_4Blevel1',Game.grade2_4Blevel1);
        game.state.add('grade2_4BScore',Game.grade2_4BScore);
		
		game.state.add('grade3_2Blevel1',Game.grade3_2Blevel1);
        game.state.add('grade3_2BScore',Game.grade3_2BScore);
		
		game.state.add('grade3_2Clevel1',Game.grade3_2Clevel1);
        game.state.add('grade3_2CScore',Game.grade3_2CScore);
		
		game.state.add('grade3_2Dlevel1',Game.grade3_2Dlevel1);
        game.state.add('grade3_2DScore',Game.grade3_2DScore);
		
		game.state.add('grade3_3Alevel1',Game.grade3_3Alevel1);
        game.state.add('grade3_3AScore',Game.grade3_3AScore);
		
		game.state.add('grade3_3B1level1',Game.grade3_3B1level1);
        game.state.add('grade3_3B1Score',Game.grade3_3B1Score);
		
		game.state.add('grade3_3B2level1',Game.grade3_3B2level1);
        game.state.add('grade3_3B2Score',Game.grade3_3B2Score);
		
		game.state.add('grade4_1Alevel1',Game.grade4_1Alevel1);
        game.state.add('grade4_1AScore',Game.grade4_1AScore);
		
		game.state.add('grade4_1Blevel1',Game.grade4_1Blevel1);
        game.state.add('grade4_1BScore',Game.grade4_1BScore);
		
		game.state.add('grade4_1Clevel1',Game.grade4_1Clevel1);
        game.state.add('grade4_1CScore',Game.grade4_1CScore);
		
		game.state.add('grade4_2Alevel1',Game.grade4_2Alevel1);
        game.state.add('grade4_2AScore',Game.grade4_2AScore);
		
		game.state.add('grade4_2Blevel1',Game.grade4_2Blevel1);
        game.state.add('grade4_2BScore',Game.grade4_2BScore);
		
		game.state.add('grade4_2Clevel1',Game.grade4_2Clevel1);
        game.state.add('grade4_2CScore',Game.grade4_2CScore);
		
		game.state.add('grade4_3Alevel1',Game.grade4_3Alevel1);
        game.state.add('grade4_3AScore',Game.grade4_3AScore);
		
		game.state.add('grade4_3Blevel1',Game.grade4_3Blevel1);
        game.state.add('grade4_3BScore',Game.grade4_3BScore);
		
		game.state.add('grade4_3Clevel1',Game.grade4_3Clevel1);
        game.state.add('grade4_3CScore',Game.grade4_3CScore);

        game.state.add('grade5_1level1',Game.grade5_1level1);
        game.state.add('grade5_1Score',Game.grade5_1Score);

        game.state.add('grade5_2level1',Game.grade5_2level1);
        game.state.add('grade5_2level2',Game.grade5_2level2);
        game.state.add('grade5_2Score',Game.grade5_2Score); 

        game.state.add('grade5_4level1',Game.grade5_4level1);
        game.state.add('grade5_4level2',Game.grade5_4level2);
        game.state.add('grade5_4Score',Game.grade5_4Score);

        game.state.add('grade6_1level1',Game.grade6_1level1);
        game.state.add('grade6_1Score',Game.grade6_1Score);

        game.state.add('grade6_2level1',Game.grade6_2level1);
        game.state.add('grade6_2Score',Game.grade6_2Score);

        game.state.add('grade7_1level1',Game.grade7_1level1);
        game.state.add('grade7_1Score',Game.grade7_1Score); 

        game.state.add('grade7_2level1',Game.grade7_2level1);
        game.state.add('grade7_2Score',Game.grade7_2Score); 


        //unity games....
        game.state.add('unity1_1level1',Game.unity1_1level1);
        game.state.add('unity1_1Score',Game.unity1_1Score);

        game.state.add('unity1_2level1',Game.unity1_2level1);
        game.state.add('unity1_2Score',Game.unity1_2Score); 

        game.state.add('unity1_3level1',Game.unity1_3level1);
        game.state.add('unity1_3Score',Game.unity1_3Score);

        game.state.add('unity1_4level1',Game.unity1_4level1);
        game.state.add('unity1_4Score',Game.unity1_4Score);

        game.state.add('unity1_5level1',Game.unity1_5level1);
        game.state.add('unity1_5Score',Game.unity1_5Score);

        game.state.add('unity1_6level1',Game.unity1_6level1);
        game.state.add('unity1_6Score',Game.unity1_6Score);

        game.state.add('unity1_7level1',Game.unity1_7level1);
        game.state.add('unity1_7Score',Game.unity1_7Score);

        game.state.add('unity2_1_1level1',Game.unity2_1_1level1);
        game.state.add('unity2_1_1Score',Game.unity2_1_1Score); 

        game.state.add('unity2_1_1alevel1',Game.unity2_1_1alevel1);
        game.state.add('unity2_1_1aScore',Game.unity2_1_1aScore); 

        game.state.add('unity2_1_2level1',Game.unity2_1_2level1);
        game.state.add('unity2_1_2Score',Game.unity2_1_2Score); 

        game.state.add('unity2_1_2alevel1',Game.unity2_1_2alevel1);
        game.state.add('unity2_1_2aScore',Game.unity2_1_2aScore); 

        game.state.add('unity2_1_3level1',Game.unity2_1_3level1);
        game.state.add('unity2_1_3Score',Game.unity2_1_3Score); 

        game.state.add('unity2_1_3alevel1',Game.unity2_1_3alevel1);
        game.state.add('unity2_1_3aScore',Game.unity2_1_3aScore); 

        game.state.add('unity2_2_1level1',Game.unity2_2_1level1);
        game.state.add('unity2_2_1Score',Game.unity2_2_1Score);

        game.state.add('unity2_2_1alevel1',Game.unity2_2_1alevel1);
        game.state.add('unity2_2_1aScore',Game.unity2_2_1aScore);

        game.state.add('unity2_2_2level1',Game.unity2_2_2level1);
        game.state.add('unity2_2_2Score',Game.unity2_2_2Score);

        game.state.add('unity2_2_2alevel1',Game.unity2_2_2alevel1);
        game.state.add('unity2_2_2aScore',Game.unity2_2_2aScore);

        game.state.add('unity2_2_3level1',Game.unity2_2_3level1);
        game.state.add('unity2_2_3Score',Game.unity2_2_3Score);

        game.state.add('unity2_2_3alevel1',Game.unity2_2_3alevel1);
        game.state.add('unity2_2_3aScore',Game.unity2_2_3aScore);

        game.state.add('unity2_3_1level1',Game.unity2_3_1level1);
        game.state.add('unity2_3_1Score',Game.unity2_3_1Score); 

        game.state.add('unity2_3_1alevel1',Game.unity2_3_1alevel1);
        game.state.add('unity2_3_1aScore',Game.unity2_3_1aScore); 

        game.state.add('unity2_3_2level1',Game.unity2_3_2level1);
        game.state.add('unity2_3_2Score',Game.unity2_3_2Score);

        game.state.add('unity2_3_2alevel1',Game.unity2_3_2alevel1);
        game.state.add('unity2_3_2aScore',Game.unity2_3_2aScore);

        game.state.add('unity2_3_3level1',Game.unity2_3_3level1);
        game.state.add('unity2_3_3Score',Game.unity2_3_3Score);

        game.state.add('unity2_3_3alevel1',Game.unity2_3_3alevel1);
        game.state.add('unity2_3_3aScore',Game.unity2_3_3aScore);

        game.state.add('unity2_4_1level1',Game.unity2_4_1level1);
        game.state.add('unity2_4_1Score',Game.unity2_4_1Score);

        game.state.add('unity2_4_1alevel1',Game.unity2_4_1alevel1);
        game.state.add('unity2_4_1aScore',Game.unity2_4_1aScore);

        game.state.add('unity2_4_2level1',Game.unity2_4_2level1);
        game.state.add('unity2_4_2Score',Game.unity2_4_2Score); 

        game.state.add('unity2_4_2alevel1',Game.unity2_4_2alevel1);
        game.state.add('unity2_4_2aScore',Game.unity2_4_2aScore); 

        game.state.add('unity2_4_3level1',Game.unity2_4_3level1);
        game.state.add('unity2_4_3Score',Game.unity2_4_3Score);

        game.state.add('unity2_4_3alevel1',Game.unity2_4_3alevel1);
        game.state.add('unity2_4_3aScore',Game.unity2_4_3aScore);

        game.state.add('unity2_5_1level1',Game.unity2_5_1level1);
        game.state.add('unity2_5_1Score',Game.unity2_5_1Score);

        game.state.add('unity2_5_1alevel1',Game.unity2_5_1alevel1);
        game.state.add('unity2_5_1aScore',Game.unity2_5_1aScore);

        game.state.add('unity2_5_2level1',Game.unity2_5_2level1);
        game.state.add('unity2_5_2Score',Game.unity2_5_2Score);

        game.state.add('unity2_5_2alevel1',Game.unity2_5_2alevel1);
        game.state.add('unity2_5_2aScore',Game.unity2_5_2aScore);
		
		game.state.add('unity2_5_3level1',Game.unity2_5_3level1);
        game.state.add('unity2_5_3Score',Game.unity2_5_3Score);

        game.state.add('unity2_5_3alevel1',Game.unity2_5_3alevel1);
        game.state.add('unity2_5_3aScore',Game.unity2_5_3aScore);

        game.state.add('unity2_6_1level1',Game.unity2_6_1level1);
        game.state.add('unity2_6_1Score',Game.unity2_6_1Score);

        game.state.add('unity2_6_2level1',Game.unity2_6_2level1);
        game.state.add('unity2_6_2Score',Game.unity2_6_2Score); 

        game.state.add('unity2_6_3level1',Game.unity2_6_3level1);
        game.state.add('unity2_6_3Score',Game.unity2_6_3Score);

        game.state.add('unity2_7_3level1',Game.unity2_7_3level1);
        game.state.add('unity2_7_3Score',Game.unity2_7_3Score);

        game.state.add('unity2_7_3alevel1',Game.unity2_7_3alevel1);
        game.state.add('unity2_7_3aScore',Game.unity2_7_3aScore);

        game.state.add('unity3_1_1level1',Game.unity3_1_1level1);
        game.state.add('unity3_1_1Score',Game.unity3_1_1Score);

        game.state.add('unity3_1_1alevel1',Game.unity3_1_1alevel1);
        game.state.add('unity3_1_1aScore',Game.unity3_1_1aScore); 
		
		game.state.add('unity3_1_1blevel1',Game.unity3_1_1blevel1);
        game.state.add('unity3_1_1bScore',Game.unity3_1_1bScore);

        game.state.add('unity3_1_2level1',Game.unity3_1_2level1);
        game.state.add('unity3_1_2Score',Game.unity3_1_2Score);

        game.state.add('unity3_2_1level1',Game.unity3_2_1level1);
        game.state.add('unity3_2_1Score',Game.unity3_2_1Score); 

        game.state.add('unity3_2_2level1',Game.unity3_2_2level1);
        game.state.add('unity3_2_2Score',Game.unity3_2_2Score);

        game.state.add('unity4_1_1level1',Game.unity4_1_1level1);
        game.state.add('unity4_1_1Score',Game.unity4_1_1Score); 

        game.state.add('unity4_1_1Newlevel1',Game.unity4_1_1Newlevel1);
        game.state.add('unity4_1_1NewScore',Game.unity4_1_1NewScore); 

        game.state.add('unity4_2_1level1',Game.unity4_2_1level1);
        game.state.add('unity4_2_1Score',Game.unity4_2_1Score);

        game.state.add('unity4_2_2level1',Game.unity4_2_2level1);
        game.state.add('unity4_2_2Score',Game.unity4_2_2Score);

        game.state.add('unity4_2_3level1',Game.unity4_2_3level1);
        game.state.add('unity4_2_3Score',Game.unity4_2_3Score);

        game.state.add('unity4_3_1level1',Game.unity4_3_1level1);
        game.state.add('unity4_3_1Score',Game.unity4_3_1Score); 

        game.state.add('unity4_4_1level1',Game.unity4_4_1level1);
        game.state.add('unity4_4_1Score',Game.unity4_4_1Score);

        game.state.add('unity4_4_2level1',Game.unity4_4_2level1);
        game.state.add('unity4_4_2Score',Game.unity4_4_2Score); 

        game.state.add('unity4_4_3level1',Game.unity4_4_3level1);
        game.state.add('unity4_4_3Score',Game.unity4_4_3Score); 

        game.state.add('unity4_5_1level1',Game.unity4_5_1level1);
        game.state.add('unity4_5_1Score',Game.unity4_5_1Score);

        game.state.add('unity4_5_2level1',Game.unity4_5_2level1);
        game.state.add('unity4_5_2Score',Game.unity4_5_2Score); 

        game.state.add('unity4_5_3level1',Game.unity4_5_3level1);
        game.state.add('unity4_5_3Score',Game.unity4_5_3Score); 

        game.state.add('unity4_6_1level1',Game.unity4_6_1level1);
        game.state.add('unity4_6_1Score',Game.unity4_6_1Score);

        game.state.add('unity4_6_2level1',Game.unity4_6_2level1);
        game.state.add('unity4_6_2Score',Game.unity4_6_2Score); 

        game.state.add('unity5_1level1',Game.unity5_1level1);
        game.state.add('unity5_1Score',Game.unity5_1Score);

        game.state.add('unity6_1level1',Game.unity6_1level1);
        game.state.add('unity6_1Score',Game.unity6_1Score);

       // game.state.add('unity7_1_1demo',Game.unity7_1_1demo);
        game.state.add('unity7_1_1level1',Game.unity7_1_1level1);
        game.state.add('unity7_1_1Score',Game.unity7_1_1Score);


        game.state.add('unity7_1_2level1',Game.unity7_1_2level1);
        game.state.add('unity7_1_2Score',Game.unity7_1_2Score);

        game.state.add('unity7_1_3level1',Game.unity7_1_3level1);
        game.state.add('unity7_1_3Score',Game.unity7_1_3Score);

       // game.state.add('unity7_2_1demo',Game.unity7_2_1demo);
        game.state.add('unity7_2_1level1',Game.unity7_2_1level1);
        game.state.add('unity7_2_1Score',Game.unity7_2_1Score);

        game.state.add('unity7_2_2level1',Game.unity7_2_2level1);
        game.state.add('unity7_2_2Score',Game.unity7_2_2Score); 

        game.state.add('unity7_2_3level1',Game.unity7_2_3level1);
        game.state.add('unity7_2_3Score',Game.unity7_2_3Score);

        game.state.add('unity8_1level1',Game.unity8_1level1);
        game.state.add('unity8_1Score',Game.unity8_1Score);

        game.state.add('unity10_1_1level1',Game.unity10_1_1level1);
        game.state.add('unity10_1_1Score',Game.unity10_1_1Score);

        game.state.add('unity10_1_2level1',Game.unity10_1_2level1);
        game.state.add('unity10_1_2Score',Game.unity10_1_2Score); 

        game.state.add('unity10_1_3level1',Game.unity10_1_3level1);
        game.state.add('unity10_1_3Score',Game.unity10_1_3Score);

		game.state.add('unity10_2_1level1',Game.unity10_2_1level1);
        game.state.add('unity10_2_1Score',Game.unity10_2_1Score);

        game.state.add('unity10_2_2level1',Game.unity10_2_2level1);
        game.state.add('unity10_2_2Score',Game.unity10_2_2Score);

        game.state.add('unity10_2_3level1',Game.unity10_2_3level1);
        game.state.add('unity10_2_3Score',Game.unity10_2_3Score);

        game.state.add('unity11_1level1',Game.unity11_1level1);
        game.state.add('unity11_1Score',Game.unity11_1Score);

        game.state.add('unity11_2level1',Game.unity11_2level1);
        game.state.add('unity11_2Score',Game.unity11_2Score); 

        game.state.add('unity12_1level1',Game.unity12_1level1);
        game.state.add('unity12_1Score',Game.unity12_1Score);  

        game.state.add('unity12_2level1',Game.unity12_2level1);
        game.state.add('unity12_2Score',Game.unity12_2Score);  

        game.state.add('unity12_3_1level1',Game.unity12_3_1level1);
        game.state.add('unity12_3_1Score',Game.unity12_3_1Score); 

        game.state.add('unity12_3_2level1',Game.unity12_3_2level1);
        game.state.add('unity12_3_2Score',Game.unity12_3_2Score); 

        game.state.add('unity12_3_3level1',Game.unity12_3_3level1);
        game.state.add('unity12_3_3Score',Game.unity12_3_3Score);

        game.state.add('unity13_1level1',Game.unity13_1level1);
        game.state.add('unity13_1Score',Game.unity13_1Score); 

        game.state.add('unity14_1level1',Game.unity14_1level1);
        game.state.add('unity14_1Score',Game.unity14_1Score);

        game.state.add('unity14_2level1',Game.unity14_2level1);
        game.state.add('unity14_2Score',Game.unity14_2Score);

        game.state.add('unity15_1level1',Game.unity15_1level1);
        game.state.add('unity15_1Score',Game.unity15_1Score);

        game.state.add('unity16_1level1',Game.unity16_1level1);
        game.state.add('unity16_1Score',Game.unity16_1Score); 

        game.state.add('unity16_2level1',Game.unity16_2level1);
        game.state.add('unity16_2Score',Game.unity16_2Score); 

        game.state.add('unity16_3level1',Game.unity16_3level1);
        game.state.add('unity16_3Score',Game.unity16_3Score);

        game.state.add('unity17_2level1',Game.unity17_2level1);
        game.state.add('unity17_2Score',Game.unity17_2Score);

        game.state.add('unity17_3level1',Game.unity17_3level1);
        game.state.add('unity17_3Score',Game.unity17_3Score);




         game.state.add('gradeSelectionScreen',Game.gradeSelectionScreen);
        game.state.add('measurement1',Game.measurement1);
        game.state.add('measurement2',Game.measurement2);
        game.state.add('measurement3',Game.measurement3);
        game.state.add('measurement4',Game.measurement4);

        game.state.add('numbersense1',Game.numbersense1);
        game.state.add('numbersense2',Game.numbersense2);
        game.state.add('numbersense3',Game.numbersense3);
        game.state.add('numbersense4',Game.numbersense4);
        game.state.add('numbersense5',Game.numbersense5);
        game.state.add('numbersense6',Game.numbersense6);
        game.state.add('numbersense7',Game.numbersense7);

        game.state.add('numberoperation1',Game.numberoperation1);
        game.state.add('numberoperation2',Game.numberoperation2);
        game.state.add('numberoperation3',Game.numberoperation3);
        game.state.add('numberoperation4',Game.numberoperation4);


        game.state.add('volume_MVG_1_4level1',Game.volume_MVG_1_4level1);
        game.state.add('volume_MVG_1_4level2',Game.volume_MVG_1_4level2);

        game.state.add('volume_MVG_2_4level1',Game.volume_MVG_2_4level1);
        game.state.add('volume_MVG_2_4level2',Game.volume_MVG_2_4level2);
        game.state.add('volume_MVG_2_4level3',Game.volume_MVG_2_4level3);

        game.state.add('volume_MVG_3_4level1',Game.volume_MVG_3_4level1);
        game.state.add('volume_MVG_3_4level2',Game.volume_MVG_3_4level2);
        game.state.add('volume_MVG_3_4level3',Game.volume_MVG_3_4level3);

        game.state.add('time_MTG_1_1level1',Game.time_MTG_1_1level1);
        game.state.add('time_MTG_1_1level2',Game.time_MTG_1_1level2); 
        game.state.add('time_MTG_1_1level3',Game.time_MTG_1_1level3); 
        game.state.add('time_MTG_1_1level4',Game.time_MTG_1_1level4); 
        game.state.add('time_MTG_1_1level5',Game.time_MTG_1_1level5); 

        game.state.add('time_MTG_2_3level1',Game.time_MTG_2_3level1);
        game.state.add('time_MTG_2_3level2',Game.time_MTG_2_3level2); 

        game.state.add('time_MTG_3_3level1',Game.time_MTG_3_3level1);
        game.state.add('time_MTG_3_3level2',Game.time_MTG_3_3level2);


        game.state.add('length_MLG_1_1level1',Game.length_MLG_1_1level1);
        game.state.add('length_MLG_1_1level2',Game.length_MLG_1_1level2);

        game.state.add('length_MLG_2_1level1',Game.length_MLG_2_1level1);

        game.state.add('length_MLG_3_2level1',Game.length_MLG_3_2level1);
        game.state.add('length_MLG_3_2level2',Game.length_MLG_3_2level2);


        game.state.add('weight_MWG_1_1level1',Game.weight_MWG_1_1level1);

        game.state.add('weight_MWG_2_2level1',Game.weight_MWG_2_2level1);
        game.state.add('weight_MWG_2_2level2',Game.weight_MWG_2_2level2);
        game.state.add('weight_MWG_2_2level3',Game.weight_MWG_2_2level3); 

        game.state.add('weight_MWG_3_2level1',Game.weight_MWG_3_2level1);
        game.state.add('weight_MWG_3_2level2',Game.weight_MWG_3_2level2);
        game.state.add('weight_MWG_3_2level3',Game.weight_MWG_3_2level3);

        game.state.add('number_NSNG_1_1level1',Game.number_NSNG_1_1level1);
        game.state.add('number_NSNG_1_1level2',Game.number_NSNG_1_1level2);


        game.state.add('number_NSNG_2_1level1',Game.number_NSNG_2_1level1);
        game.state.add('number_NSNG_2_1level2',Game.number_NSNG_2_1level2);

        game.state.add('sequence_NSSG_1_1level1',Game.sequence_NSSG_1_1level1);
        game.state.add('sequence_NSSG_1_1level2',Game.sequence_NSSG_1_1level2);
        game.state.add('sequence_NSSG_1_1level3',Game.sequence_NSSG_1_1level3);

        game.state.add('sequence_NSSG_2_1level1',Game.sequence_NSSG_2_1level1);
        game.state.add('sequence_NSSG_2_1level2',Game.sequence_NSSG_2_1level2);
        game.state.add('sequence_NSSG_2_1level3',Game.sequence_NSSG_2_1level3); 

        game.state.add('sequence_NSSG_3_2level1',Game.sequence_NSSG_3_2level1);
        game.state.add('sequence_NSSG_3_2level2',Game.sequence_NSSG_3_2level2);
        game.state.add('sequence_NSSG_3_2level3',Game.sequence_NSSG_3_2level3);

        game.state.add('sequence_NSSG_4_2level1',Game.sequence_NSSG_4_2level1);
        game.state.add('sequence_NSSG_4_2level2',Game.sequence_NSSG_4_2level2);
        game.state.add('sequence_NSSG_4_2level3',Game.sequence_NSSG_4_2level3);

        game.state.add('sequence_NSSG_5_3level1',Game.sequence_NSSG_5_3level1);
        game.state.add('sequence_NSSG_5_3level2',Game.sequence_NSSG_5_3level2);
        game.state.add('sequence_NSSG_5_3level3',Game.sequence_NSSG_5_3level3);

        game.state.add('sequence_NSSG_6_3level1',Game.sequence_NSSG_6_3level1);
        game.state.add('sequence_NSSG_6_3level2',Game.sequence_NSSG_6_3level2);
        game.state.add('sequence_NSSG_6_3level3',Game.sequence_NSSG_6_3level3);


        game.state.add('comparison_NSCG_1_1level1',Game.comparison_NSCG_1_1level1);
        game.state.add('comparison_NSCG_1_1level2',Game.comparison_NSCG_1_1level2);
        game.state.add('comparison_NSCG_1_1level3',Game.comparison_NSCG_1_1level3);

        game.state.add('comparison_NSCG_2_1level1',Game.comparison_NSCG_2_1level1);
        game.state.add('comparison_NSCG_2_1level2',Game.comparison_NSCG_2_1level2);

        game.state.add('comparison_NSCG_4_2level1',Game.comparison_NSCG_4_2level1);
        game.state.add('comparison_NSCG_4_2level2',Game.comparison_NSCG_4_2level2);

        game.state.add('comparison_NSCG_5_3level1',Game.comparison_NSCG_5_3level1);
        game.state.add('comparison_NSCG_5_3level2',Game.comparison_NSCG_5_3level2);

        game.state.add('fraction_NSFG_1_1level1',Game.fraction_NSFG_1_1level1);
        game.state.add('fraction_NSFG_1_1level2',Game.fraction_NSFG_1_1level2);

        game.state.add('fraction_NSFG_2_1level1',Game.fraction_NSFG_2_1level1);
        game.state.add('fraction_NSFG_2_1level2',Game.fraction_NSFG_2_1level2);

        game.state.add('fraction_NSFG_3_1level1',Game.fraction_NSFG_3_1level1);
        game.state.add('fraction_NSFG_3_1level2',Game.fraction_NSFG_3_1level2);

        game.state.add('fraction_NSFG_4_1level1',Game.fraction_NSFG_4_1level1);
        game.state.add('fraction_NSFG_4_1level2',Game.fraction_NSFG_4_1level2);
        game.state.add('fraction_NSFG_4_1level3',Game.fraction_NSFG_4_1level3);

        game.state.add('placevalue_NSPVG_1_1level1',Game.placevalue_NSPVG_1_1level1);
        game.state.add('placevalue_NSPVG_1_1level2',Game.placevalue_NSPVG_1_1level2);

        game.state.add('placevalue_NSPVG_2_1level1',Game.placevalue_NSPVG_2_1level1);
        game.state.add('placevalue_NSPVG_2_1level2',Game.placevalue_NSPVG_2_1level2); 

        game.state.add('placevalue_NSPVG_4_2level1',Game.placevalue_NSPVG_4_2level1);
        game.state.add('placevalue_NSPVG_4_2level2',Game.placevalue_NSPVG_4_2level2);

        game.state.add('placevalue_NSPVG_6_3level1',Game.placevalue_NSPVG_6_3level1);
        game.state.add('placevalue_NSPVG_6_3level2',Game.placevalue_NSPVG_6_3level2);

        game.state.add('placevalue_NSPVG_5_2level1',Game.placevalue_NSPVG_5_2level1);

        game.state.add('placevalue_NSPVG_7_3level1',Game.placevalue_NSPVG_7_3level1);


        game.state.add('addition_NOAG_1_1level1',Game.addition_NOAG_1_1level1);
        game.state.add('addition_NOAG_1_1level2',Game.addition_NOAG_1_1level2);

        game.state.add('addition_NOAG_2_1level1',Game.addition_NOAG_2_1level1);
        game.state.add('addition_NOAG_2_1level2',Game.addition_NOAG_2_1level2);

        game.state.add('addition_NOAG_3_2level1',Game.addition_NOAG_3_2level1);
        game.state.add('addition_NOAG_3_2level2',Game.addition_NOAG_3_2level2);

        game.state.add('addition_NOAG_4_3level1',Game.addition_NOAG_4_3level1);
        game.state.add('addition_NOAG_4_3level2',Game.addition_NOAG_4_3level2);

        game.state.add('subtraction_NOAG_1_1level1',Game.subtraction_NOAG_1_1level1);

        game.state.add('subtraction_NOAG_2_1level1',Game.subtraction_NOAG_2_1level1);
        game.state.add('subtraction_NOAG_2_1level2',Game.subtraction_NOAG_2_1level2);

        game.state.add('subtraction_NOAG_3_2level1',Game.subtraction_NOAG_3_2level1);
        game.state.add('subtraction_NOAG_3_2level2',Game.subtraction_NOAG_3_2level2); 

        game.state.add('subtraction_NOAG_4_3level1',Game.subtraction_NOAG_4_3level1);
        game.state.add('subtraction_NOAG_4_3level2',Game.subtraction_NOAG_4_3level2);

        game.state.add('division_NODG_1_2level1',Game.division_NODG_1_2level1);
        game.state.add('division_NODG_1_2level2',Game.division_NODG_1_2level2);

        game.state.add('division_NODG_2_2level1',Game.division_NODG_2_2level1);

        game.state.add('division_NODG_3_2level1',Game.division_NODG_3_2level1);
        
        game.state.add('division_NODG_4_2level1',Game.division_NODG_4_2level1);
        game.state.add('division_NODG_4_2level2',Game.division_NODG_4_2level2);

        game.state.add('multiplication_NOMG_1_1level1',Game.multiplication_NOMG_1_1level1);
        game.state.add('multiplication_NOMG_1_1level2',Game.multiplication_NOMG_1_1level2);

        game.state.add('multiplication_NOMG_2_1level1',Game.multiplication_NOMG_2_1level1);
        
        game.state.add('multiplication_NOMG_3_1level1',Game.multiplication_NOMG_3_1level1);
        game.state.add('multiplication_NOMG_3_1level2',Game.multiplication_NOMG_3_1level2);

        game.state.add('multiplication_NOMG_4_2level1',Game.multiplication_NOMG_4_2level1);
        game.state.add('multiplication_NOMG_4_2level2',Game.multiplication_NOMG_4_2level2);
        game.state.add('multiplication_NOMG_4_2level3',Game.multiplication_NOMG_4_2level3);

        game.state.add('multiplication_NOMG_5_3level1',Game.multiplication_NOMG_5_3level1);
        game.state.add('multiplication_NOMG_5_3level2',Game.multiplication_NOMG_5_3level2);




       	this.game.cache.removeImage('loadingBg1');
		this.game.cache.removeImage('loadingBg2');
		this.game.cache.removeImage('singleCarrotForLoading');
		this.game.cache.removeImage('loadingTankAnim');
		this.game.cache.removeImage('loadingGlassAnim');
		this.game.cache.removeImage('loadingBottleAnim');
		this.game.cache.removeImage('loadingTimeAnim');
		this.game.cache.removeImage('loadingFishAnim2');
		this.game.cache.removeImage('rabitSittingAnim');
		this.game.cache.removeImage('rabitEatingAnim');
		this.game.cache.removeImage('rabitJumpAnim');


		commonNavBar.addvideo(game);
					
		//location.reload(); 

		_this.state.start('gameModeSelectionScreen',true,false);
		
		
		
		
		
		
		
	},

	loadjscssfile:function(filename, filetype)
	{
	    if (filetype=="js"){ //if filename is a external JavaScript file
	        var fileref=document.createElement('script')
	        fileref.setAttribute("type","text/javascript")
	        fileref.setAttribute("src", filename)
	    }
	    else if (filetype=="css"){ //if filename is an external CSS file
	        var fileref=document.createElement("link")
	        fileref.setAttribute("rel", "stylesheet")
	        fileref.setAttribute("type", "text/css")
	        fileref.setAttribute("href", filename)
	    }
	    if (typeof fileref!="undefined")
	        document.getElementsByTagName("head")[0].appendChild(fileref)
	},

	
	
	shutdown:function()
	{
		_this.preloadBar = null;
		/*_this.bg = null;
		_this.preloadBar = null;
		_this = null;*/

		/*_this.world.onChildInputDown.removeAll();
        _this.world.removeChildren(0, _this.world.length);

		//this = null;
		_this = null;*/

		/*if(_this.loadingSound)
		{
			_this.loadingSound.stop();
			_this.loadingSound = null;
		}*/

		if(_this.loadingSound)
          {
               if(_this.loadingSound.contains(_this.loadingSoundSrc))
               {
                    _this.loadingSound.removeChild(_this.loadingSoundSrc);
                    _this.src = null;
               }
               if(!_this.loadingSound.paused)
               {
                   //console.log("here");
                    _this.loadingSound.pause();
                    _this.loadingSound.currentTime = 0.0;
               }
               _this.loadingSound = null;
               _this.loadingSoundSrc = null;
          }

          if(window.score==0)
          {
          	window.score = 50;
          }
	}
}