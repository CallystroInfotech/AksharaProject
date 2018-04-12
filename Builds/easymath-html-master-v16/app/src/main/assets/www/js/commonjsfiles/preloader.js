Game.preloader=function(game){
	
};
var fx;
Game.preloader.prototype={
	
	
	preload:function(){

		_this = this;

		_this.bg = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonAssets','commonBg');
		_this.bg.scale.setTo(1,1.5);
		
		_this.preloadBar = _this.add.sprite(_this.world.centerX,_this.world.centerY,'CommonAssets','progressBar');
		_this.preloadBar.anchor.setTo(0.5,0.5);
		_this.time.advanceTiming=true;
		_this.load.setPreloadSprite(_this.preloadBar);


		this.loadjscssfile("js/gradeSelectionScreenJS/gradeSelectionScreen.js", "js"); 
		this.loadjscssfile("js/gradeSelectionScreenJS/grade1levelSelectionScreen.js", "js");
		this.loadjscssfile("js/gradeSelectionScreenJS/grade2levelSelectionScreen.js", "js");
		this.loadjscssfile("js/gradeSelectionScreenJS/grade3levelSelectionScreen.js", "js");
		this.loadjscssfile("js/gradeSelectionScreenJS/grade4levelSelectionScreen.js", "js");

		this.loadjscssfile("js/gradejs/1.1A/level1.js", "js");
		this.loadjscssfile("js/gradejs/1.1A/score.js", "js");

		this.loadjscssfile("js/gradejs/1.1B/level1.js", "js");
		this.loadjscssfile("js/gradejs/1.1B/score.js", "js");

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

		this.loadjscssfile("js/gradejs/1.2A/levelFirstScene.js", "js");
		this.loadjscssfile("js/gradejs/1.2A/score.js", "js");

		this.loadjscssfile("js/gradejs/1.2B/levelFirstScene.js", "js");
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

		this.loadjscssfile("js/gradejs/unity/5.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/5.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/6.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/6.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/8.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/8.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/11.1/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/11.1/score.js", "js");

		this.loadjscssfile("js/gradejs/unity/11.2/level1.js", "js");
		this.loadjscssfile("js/gradejs/unity/11.2/score.js", "js");
		
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

		_this.addunitygame5_1Assets();
		_this.addunitygame6_1Assets();
		_this.addunitygame8_1Assets();

		_this.addunitygame11_1Assets();
		_this.addunitygame11_2Assets();

		
		
		
		//_this.load.onLoadComplete.add(_this.onloadComplete,_this);
	},
	
	addgradeSelectionAssets:function()
	{
		_this.load.image('gameselectBg','assets/gradeSelectionScreenAssets/gradeSelectBg.png');		
		_this.load.atlas('gradeSceneBackBtn','assets/gradeSelectionScreenAssets/gradeSceneBackBtn.png','json/gradeSelectionScreenJson/gradeSceneBackBtn.json');		
		//_this.load.atlas('gradeCloud','assets/gradeSelectionScreenAssets/grade1Cloudnew.png','assets/gradeSelectionScreenAssets/grade1Cloudnew.json');
		_this.load.atlas('grade1Cloud','assets/gradeSelectionScreenAssets/grade 1.png','assets/gradeSelectionScreenAssets/grade 1.json');
		_this.load.atlas('grade2Cloud','assets/gradeSelectionScreenAssets/grade 2.png','assets/gradeSelectionScreenAssets/grade 2.json');
		_this.load.atlas('grade3Cloud','assets/gradeSelectionScreenAssets/grade 3.png','assets/gradeSelectionScreenAssets/grade 3.json');
		_this.load.atlas('grade4Cloud','assets/gradeSelectionScreenAssets/grade 4.png','assets/gradeSelectionScreenAssets/grade 4.json');
	},
	
	addgrade1SelectionAssets:function()
	{
		_this.load.atlas('fractionsTitleTxt','assets/gradeSelectionScreenAssets/texts/fractions.png','assets/gradeSelectionScreenAssets/texts/fractions.json');
		_this.load.atlas('lengthTitleTxt','assets/gradeSelectionScreenAssets/texts/length.png','assets/gradeSelectionScreenAssets/texts/length.json');
		_this.load.atlas('weightTitleTxt','assets/gradeSelectionScreenAssets/texts/weight.png','assets/gradeSelectionScreenAssets/texts/weight.json');
		_this.load.atlas('volumeTitleTxt','assets/gradeSelectionScreenAssets/texts/volume.png','assets/gradeSelectionScreenAssets/texts/volume.json');
		_this.load.atlas('timeTitleTxt','assets/gradeSelectionScreenAssets/texts/time.png','assets/gradeSelectionScreenAssets/texts/time.json');

		_this.load.atlas('NUMBERS','assets/gradeSelectionScreenAssets/texts/NUMBERS.png','assets/gradeSelectionScreenAssets/texts/NUMBERS.json');
		_this.load.atlas('ADDITION','assets/gradeSelectionScreenAssets/texts/ADDITION.png','assets/gradeSelectionScreenAssets/texts/ADDITION.json');
		_this.load.atlas('SUBTRACTION','assets/gradeSelectionScreenAssets/texts/SUBTRACTION.png','assets/gradeSelectionScreenAssets/texts/SUBTRACTION.json');
		_this.load.atlas('MULTIPLICATION','assets/gradeSelectionScreenAssets/texts/MULTIPLICATION.png','assets/gradeSelectionScreenAssets/texts/MULTIPLICATION.json');
		
		

		_this.load.atlas('pinwheel1_1A','assets/gradeSelectionScreenAssets/texts/pinwheel1_1A.png','assets/gradeSelectionScreenAssets/texts/pinwheel1_1A.json');
		_this.load.atlas('length2_1A','assets/gradeSelectionScreenAssets/texts/length2_1A.png','assets/gradeSelectionScreenAssets/texts/length2_1A.json');
		_this.load.atlas('length2_1B','assets/gradeSelectionScreenAssets/texts/length2_1B.png','assets/gradeSelectionScreenAssets/texts/length2_1B.json');
		_this.load.atlas('length2_2','assets/gradeSelectionScreenAssets/texts/length2_2.png','assets/gradeSelectionScreenAssets/texts/length2_2.json');
		_this.load.atlas('length2_3','assets/gradeSelectionScreenAssets/texts/length2_3.png','assets/gradeSelectionScreenAssets/texts/length2_3.json');
		_this.load.atlas('weight3_1','assets/gradeSelectionScreenAssets/texts/weight3_1.png','assets/gradeSelectionScreenAssets/texts/weight3_1.json');
		_this.load.atlas('weight3_2A','assets/gradeSelectionScreenAssets/texts/weight3_2A.png','assets/gradeSelectionScreenAssets/texts/weight3_2A.json');

		_this.load.atlas('time5_1','assets/gradeSelectionScreenAssets/texts/time5_1.png','assets/gradeSelectionScreenAssets/texts/time5_1.json');
		_this.load.atlas('time5_2','assets/gradeSelectionScreenAssets/texts/time5_2.png','assets/gradeSelectionScreenAssets/texts/time5_2.json');
		_this.load.atlas('time5_4','assets/gradeSelectionScreenAssets/texts/time5_4.png','assets/gradeSelectionScreenAssets/texts/time5_4.json');


		_this.load.atlas('Counting icecreams','assets/gradeSelectionScreenAssets/texts/Counting icecreams.png','assets/gradeSelectionScreenAssets/texts/Counting icecreams.json');
		_this.load.atlas('Plucking mangoes','assets/gradeSelectionScreenAssets/texts/Plucking mangoes.png','assets/gradeSelectionScreenAssets/texts/Plucking mangoes.json');
		_this.load.atlas('Counting fish','assets/gradeSelectionScreenAssets/texts/Counting fish.png','assets/gradeSelectionScreenAssets/texts/Counting fish.json');
		_this.load.atlas('Counting flowers','assets/gradeSelectionScreenAssets/texts/Counting flowers.png','assets/gradeSelectionScreenAssets/texts/Counting flowers.json');
		_this.load.atlas('Bursting bubbles','assets/gradeSelectionScreenAssets/texts/Bursting bubbles.png','assets/gradeSelectionScreenAssets/texts/Bursting bubbles.json');
		_this.load.atlas('Tracing numbers','assets/gradeSelectionScreenAssets/texts/Tracing numbers.png','assets/gradeSelectionScreenAssets/texts/Tracing numbers.json');
		
		_this.load.atlas('A for Apple','assets/gradeSelectionScreenAssets/texts/A for Apple.png','assets/gradeSelectionScreenAssets/texts/A for Apple.json');
		_this.load.atlas('Hungry Rabbit','assets/gradeSelectionScreenAssets/texts/Hungry Rabbit.png','assets/gradeSelectionScreenAssets/texts/Hungry Rabbit.json');



		_this.load.atlas('fractions1_1AScreen','assets/gradeSelectionScreenAssets/fractions1_1AScreen.png','assets/gradeSelectionScreenAssets/fractions1_1AScreen.json');
		
		
		_this.load.atlas('length2_1AScreen','assets/gradeSelectionScreenAssets/length2_1BScreen.png','assets/gradeSelectionScreenAssets/length2_1BScreen.json');
		_this.load.atlas('length2_1BScreen','assets/gradeSelectionScreenAssets/length2_1AScreen.png','assets/gradeSelectionScreenAssets/length2_1AScreen.json');
		_this.load.atlas('length2_2Screen','assets/gradeSelectionScreenAssets/length2_2Screen.png','assets/gradeSelectionScreenAssets/length2_2Screen.json');
		
		_this.load.atlas('game2.3ScreenShot','assets/gradeSelectionScreenAssets/game2.3ScreenShot.png','assets/gradeSelectionScreenAssets/game2.3ScreenShot.json');
		_this.load.atlas('game3.1ScreenShot','assets/gradeSelectionScreenAssets/game3.1ScreenShot.png','assets/gradeSelectionScreenAssets/game3.1ScreenShot.json');
		_this.load.atlas('game3.2AScreenShot','assets/gradeSelectionScreenAssets/game3.2AScreenShot.png','assets/gradeSelectionScreenAssets/game3.2AScreenShot.json');
		
		_this.load.atlas('time5_1Screen','assets/gradeSelectionScreenAssets/time5_1Screen.png','assets/gradeSelectionScreenAssets/time5_1Screen.json');
		_this.load.atlas('time5_2Screen','assets/gradeSelectionScreenAssets/time5_2Screen.png','assets/gradeSelectionScreenAssets/time5_2Screen.json');
		_this.load.atlas('time5_4Screen','assets/gradeSelectionScreenAssets/time5_4Screen.png','assets/gradeSelectionScreenAssets/time5_4Screen.json');


		_this.load.atlas('unity1.1','assets/gradeSelectionScreenAssets/unity1.1.png','assets/gradeSelectionScreenAssets/unity1.1.json');
		_this.load.atlas('unity1.2','assets/gradeSelectionScreenAssets/unity1.2.png','assets/gradeSelectionScreenAssets/unity1.2.json');
		_this.load.atlas('unity1.3','assets/gradeSelectionScreenAssets/unity1.3.png','assets/gradeSelectionScreenAssets/unity1.3.json');
		_this.load.atlas('unity1.4','assets/gradeSelectionScreenAssets/unity1.4.png','assets/gradeSelectionScreenAssets/unity1.4.json');
		_this.load.atlas('unity1.5','assets/gradeSelectionScreenAssets/unity1.5.png','assets/gradeSelectionScreenAssets/unity1.5.json');
		_this.load.atlas('unity1.6','assets/gradeSelectionScreenAssets/unity1.6.png','assets/gradeSelectionScreenAssets/unity1.6.json');
		_this.load.atlas('unity1.7','assets/gradeSelectionScreenAssets/unity1.7.png','assets/gradeSelectionScreenAssets/unity1.7.json');

		_this.load.atlas('unity5.1','assets/gradeSelectionScreenAssets/unity5.1.png','assets/gradeSelectionScreenAssets/unity5.1.json');
		_this.load.atlas('unity6.1','assets/gradeSelectionScreenAssets/unity6.1.png','assets/gradeSelectionScreenAssets/unity6.1.json');

		_this.load.atlas('unity8.1','assets/gradeSelectionScreenAssets/unity8.1.png','assets/gradeSelectionScreenAssets/unity8.1.json');

		_this.load.atlas('unity11.1','assets/gradeSelectionScreenAssets/unity11.1.png','assets/gradeSelectionScreenAssets/unity11.1.json');
		_this.load.atlas('unity11.2','assets/gradeSelectionScreenAssets/unity11.2.png','assets/gradeSelectionScreenAssets/unity11.2.json');

		
	},

	addgrade2SelectionAssets:function()
	{

		_this.load.atlas('time6_1Screen','assets/gradeSelectionScreenAssets/time6_1Screen.png','assets/gradeSelectionScreenAssets/time6_1Screen.json');
		_this.load.atlas('time6_2Screen','assets/gradeSelectionScreenAssets/time6_2Screen.png','assets/gradeSelectionScreenAssets/time6_2Screen.json');	

		_this.load.atlas('time6_1','assets/gradeSelectionScreenAssets/texts/time6_1.png','assets/gradeSelectionScreenAssets/texts/time6_1.json');
		_this.load.atlas('time6_2','assets/gradeSelectionScreenAssets/texts/time6_2.png','assets/gradeSelectionScreenAssets/texts/time6_2.json');	
	},
	
	addgrade3SelectionAssets:function()
	{

		_this.load.atlas('pinwheel1_1B','assets/gradeSelectionScreenAssets/texts/pinwheel1_1B.png','assets/gradeSelectionScreenAssets/texts/pinwheel1_1B.json');
		_this.load.atlas('pinwheel1_2A','assets/gradeSelectionScreenAssets/texts/pinwheel1_2A.png','assets/gradeSelectionScreenAssets/texts/pinwheel1_2A.json');
		_this.load.atlas('pinwheel1_2B','assets/gradeSelectionScreenAssets/texts/pinwheel1_2B.png','assets/gradeSelectionScreenAssets/texts/pinwheel1_2B.json');
		_this.load.atlas('pinwheel1_2C','assets/gradeSelectionScreenAssets/texts/pinwheel1_2C.png','assets/gradeSelectionScreenAssets/texts/pinwheel1_2C.json');
		
		_this.load.atlas('length2_4A','assets/gradeSelectionScreenAssets/texts/length2_4A.png','assets/gradeSelectionScreenAssets/texts/length2_4A.json');
		_this.load.atlas('length2_4B','assets/gradeSelectionScreenAssets/texts/length2_4B.png','assets/gradeSelectionScreenAssets/texts/length2_4B.json');

		_this.load.atlas('weight3_2B','assets/gradeSelectionScreenAssets/texts/weight3_2B.png','assets/gradeSelectionScreenAssets/texts/weight3_2B.json');
		_this.load.atlas('weight3_2C','assets/gradeSelectionScreenAssets/texts/weight3_2C.png','assets/gradeSelectionScreenAssets/texts/weight3_2C.json');
		_this.load.atlas('weight3_2D','assets/gradeSelectionScreenAssets/texts/weight3_2D.png','assets/gradeSelectionScreenAssets/texts/weight3_2D.json');
		_this.load.atlas('weight3_3A','assets/gradeSelectionScreenAssets/texts/weight3_3A.png','assets/gradeSelectionScreenAssets/texts/weight3_3A.json');
		_this.load.atlas('weight3_3B1','assets/gradeSelectionScreenAssets/texts/weight3_3B1.png','assets/gradeSelectionScreenAssets/texts/weight3_3B1.json');
		_this.load.atlas('weight3_3B2','assets/gradeSelectionScreenAssets/texts/weight3_3B2.png','assets/gradeSelectionScreenAssets/texts/weight3_3B2.json');

		_this.load.atlas('fractions1_1Screen','assets/gradeSelectionScreenAssets/fractions1_1Screen.png','assets/gradeSelectionScreenAssets/fractions1_1Screen.json');
		_this.load.atlas('fractions1_2AScreen','assets/gradeSelectionScreenAssets/fractions1_2AScreen.png','assets/gradeSelectionScreenAssets/fractions1_2AScreen.json');
		_this.load.atlas('fractions1_2BScreen','assets/gradeSelectionScreenAssets/fractions1_2BScreen.png','assets/gradeSelectionScreenAssets/fractions1_2BScreen.json');
		_this.load.atlas('fractions1_2CScreen','assets/gradeSelectionScreenAssets/fractions1_2CScreen.png','assets/gradeSelectionScreenAssets/fractions1_2CScreen.json');
		_this.load.atlas('length2_4AScreen','assets/gradeSelectionScreenAssets/length2_4AScreen.png','assets/gradeSelectionScreenAssets/length2_4AScreen.json');
		_this.load.atlas('length2_4BScreen','assets/gradeSelectionScreenAssets/length2_4BScreen.png','assets/gradeSelectionScreenAssets/length2_4BScreen.json');
		_this.load.atlas('weight3_2BScreen','assets/gradeSelectionScreenAssets/weight3_2BScreen.png','assets/gradeSelectionScreenAssets/weight3_2BScreen.json');
		_this.load.atlas('weight3_2CScreen','assets/gradeSelectionScreenAssets/weight3_2CScreen.png','assets/gradeSelectionScreenAssets/weight3_2CScreen.json');
		_this.load.atlas('weight3_2DScreen','assets/gradeSelectionScreenAssets/weight3_2DScreen.png','assets/gradeSelectionScreenAssets/weight3_2DScreen.json');
		_this.load.atlas('weight3_3AScreen','assets/gradeSelectionScreenAssets/weight3_3AScreen.png','assets/gradeSelectionScreenAssets/weight3_3AScreen.json');
		_this.load.atlas('weight3_3B1Screen','assets/gradeSelectionScreenAssets/weight3_3B1Screen.png','assets/gradeSelectionScreenAssets/weight3_3B1Screen.json');
		_this.load.atlas('weight3_3B2Screen','assets/gradeSelectionScreenAssets/weight3_3B2Screen.png','assets/gradeSelectionScreenAssets/weight3_3B2Screen.json');
		
		_this.load.atlas('game3.2AScreenShot','assets/gradeSelectionScreenAssets/game3.2AScreenShot.png','assets/gradeSelectionScreenAssets/game3.2AScreenShot.json');

		_this.load.atlas('time7_1Screen','assets/gradeSelectionScreenAssets/time7_1Screen.png','assets/gradeSelectionScreenAssets/time7_1Screen.json');
		_this.load.atlas('time7_2Screen','assets/gradeSelectionScreenAssets/time7_2Screen.png','assets/gradeSelectionScreenAssets/time7_2Screen.json');	

		_this.load.atlas('time7_1','assets/gradeSelectionScreenAssets/texts/time7_1.png','assets/gradeSelectionScreenAssets/texts/time7_1.json');
		_this.load.atlas('time7_2','assets/gradeSelectionScreenAssets/texts/time7_2.png','assets/gradeSelectionScreenAssets/texts/time7_2.json');
		
	},
	
	addgrade4SelectionAssets:function()
	{

		_this.load.atlas('volume4_1A','assets/gradeSelectionScreenAssets/texts/volume4_1A.png','assets/gradeSelectionScreenAssets/texts/volume4_1A.json');
		_this.load.atlas('volume4_1B','assets/gradeSelectionScreenAssets/texts/volume4_1B.png','assets/gradeSelectionScreenAssets/texts/volume4_1B.json');
		_this.load.atlas('volume4_1C','assets/gradeSelectionScreenAssets/texts/volume4_1C.png','assets/gradeSelectionScreenAssets/texts/volume4_1C.json');
		_this.load.atlas('volume4_2A','assets/gradeSelectionScreenAssets/texts/volume4_2A.png','assets/gradeSelectionScreenAssets/texts/volume4_2A.json');
		_this.load.atlas('volume4_2B','assets/gradeSelectionScreenAssets/texts/volume4_2B.png','assets/gradeSelectionScreenAssets/texts/volume4_2B.json');
		_this.load.atlas('volume4_2C','assets/gradeSelectionScreenAssets/texts/volume4_2C.png','assets/gradeSelectionScreenAssets/texts/volume4_2C.json');
		_this.load.atlas('volume4_3A','assets/gradeSelectionScreenAssets/texts/volume4_3A.png','assets/gradeSelectionScreenAssets/texts/volume4_3A.json');
		_this.load.atlas('volume4_3B','assets/gradeSelectionScreenAssets/texts/volume4_3B.png','assets/gradeSelectionScreenAssets/texts/volume4_3B.json');
		_this.load.atlas('volume4_3C','assets/gradeSelectionScreenAssets/texts/volume4_3C.png','assets/gradeSelectionScreenAssets/texts/volume4_3C.json');


		_this.load.atlas('volumes4_1AScreen','assets/gradeSelectionScreenAssets/volumes4_1AScreen.png','assets/gradeSelectionScreenAssets/volumes4_1AScreen.json');
		_this.load.atlas('volumes4_1BScreen','assets/gradeSelectionScreenAssets/volumes4_1BScreen.png','assets/gradeSelectionScreenAssets/volumes4_1BScreen.json');
		_this.load.atlas('volumes4_1CScreen','assets/gradeSelectionScreenAssets/volumes4_1CScreen.png','assets/gradeSelectionScreenAssets/volumes4_1CScreen.json');
		_this.load.atlas('volumes4_2AScreen','assets/gradeSelectionScreenAssets/volumes4_2AScreen.png','assets/gradeSelectionScreenAssets/volumes4_2AScreen.json');
		_this.load.atlas('volumes4_2BScreen','assets/gradeSelectionScreenAssets/volumes4_2BScreen.png','assets/gradeSelectionScreenAssets/volumes4_2BScreen.json');
		_this.load.atlas('volumes4_2CScreen','assets/gradeSelectionScreenAssets/volumes4_2CScreen.png','assets/gradeSelectionScreenAssets/volumes4_2CScreen.json');
		_this.load.atlas('volumes4_3AScreen','assets/gradeSelectionScreenAssets/volumes4_3AScreen.png','assets/gradeSelectionScreenAssets/volumes4_3AScreen.json');
		_this.load.atlas('volumes4_3BScreen','assets/gradeSelectionScreenAssets/volumes4_3BScreen.png','assets/gradeSelectionScreenAssets/volumes4_3BScreen.json');
		_this.load.atlas('volumes4_3CScreen','assets/gradeSelectionScreenAssets/volumes4_3CScreen.png','assets/gradeSelectionScreenAssets/volumes4_3CScreen.json');
		
		_this.load.atlas('game3.2AScreenShot','assets/gradeSelectionScreenAssets/game3.2AScreenShot.png','assets/gradeSelectionScreenAssets/game3.2AScreenShot.json');
		
	},
	
	loadCommonAssets:function()
	{

		_this.load.image('commonBg1','assets/commonAssets/commonBg1.png');
		_this.load.image('commonBg2','assets/commonAssets/commonBg2.png');
		_this.load.image('bottomBar','assets/commonAssets/bottomBar.png');
		_this.load.image('game32d_popup','assets/commonAssets/popup.png');

		_this.load.atlas('game24b_popup2','assets/commonAssets/popup2.png','assets/commonAssets/popup2.json');
		
		
		_this.load.atlas('grade11_backbtn', 'assets/commonAssets/grade11_backbtn.png','json/commonJson/grade11_backbtn.json');
		//_this.load.atlas('CommonBackBtn','assets/commonAssets/backbtn.png','json/commonJson/backbtn.json');
		_this.load.atlas('grade11_speaker','assets/commonAssets/grade11_speaker.png','json/commonJson/grade11_speaker.json');
		//_this.load.atlas('CommonReplayBtn','assets/commonAssets/replay.png','json/commonJson/replay.json');
		_this.load.atlas('CommonStarAnim','assets/commonAssets/starAnim.png','json/commonJson/starAnim.json');
		_this.load.atlas('starAnim1','assets/commonAssets/starAnim1.png','json/commonJson/starAnim1.json');
		_this.load.image('common_timebg','assets/commonAssets/common_timebg.png');
		_this.load.image('dottedBox','assets/commonAssets/dottedBox.png');

		
		_this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png','assets/commonAssets/homeBtn.json');	
		_this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png','assets/commonAssets/nextBtn.json');	
		_this.load.atlas('CommonReplayBtn','assets/commonAssets/replayBtn.png','assets/commonAssets/replayBtn.json');


		//load common assets.
		_this.load.atlas('CommonBackBtn','assets/commonAssets/backbtn.png','json/commonJson/backbtn.json');
		_this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png','json/commonJson/speaker.json');
		//_this.load.atlas('CommonReplayBtn','assets/commonAssets/replay.png','json/commonJson/replay.json');
		_this.load.atlas('CommonStarAnim','assets/commonAssets/starAnim.png','json/commonJson/starAnim.json');

		
		_this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png','assets/commonAssets/homeBtn.json');	
		_this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png','assets/commonAssets/nextBtn.json');	
		_this.load.atlas('CommonReplayBtn','assets/commonAssets/replayBtn.png','assets/commonAssets/replayBtn.json');
		
		_this.load.audio('waudio', 'sounds/WrongCelebrationSound.mp3');
        _this.load.audio('ClickSound', 'sounds/ClickSound.mp3');
		_this.load.audio('celebr', 'sounds/celebration.mp3');
		_this.load.audio('snapSound', 'sounds/snapSound.mp3');

		_this.load.audio('goingdown', 'questionSounds/3.1/goingdown.mp3');
        _this.load.audio('goingup', 'questionSounds/3.1/goingup.mp3');

        _this.load.audio('spin2', 'questionSounds/1.2A/spin2.mp3');

        _this.load.audio('waterFill', 'questionSounds/4.3A/waterFillingSound.mp3');
        _this.load.audio('watersplash','questionSounds/4.2A/watersplash.mp3');

        _this.load.audio('clocktick', 'sounds/clocktick.mp3');
        _this.load.audio('click','sounds/chime.mp3');


		this.load.audio('CarrotBite', 'questionSounds/unity/5.1/English/CarrotBite.mp3');
        this.load.audio('Rabbit', 'questionSounds/unity/5.1/English/Rabbit.mp3');
        this.load.audio('Tap', 'questionSounds/unity/5.1/English/Tap.mp3');
        this.load.audio('EHowMany', 'questionSounds/unity/5.1/English/EHowMany.mp3');
        this.load.audio('HHowMany', 'questionSounds/unity/5.1/Hindi/HHowMany.mp3');
        this.load.audio('KHowMany', 'questionSounds/unity/5.1/Kannada/KHowMany.mp3');
        this.load.audio('dragMango', 'sounds/Drag_Snap.mp3');
        this.load.audio('bubble', 'sounds/Bubbles.mp3');
        this.load.audio('bubbleBurst', 'sounds/Bubble Burst.mp3');
        this.load.audio('tap', 'questionSounds/11.1/English/tap.mp3');
        
	},
	
	addgame1_1AAssets:function()
	{
		/*//LOAD ALL ASEETS 
        _this.load.atlas('flg1o1', 'assets/gradeAssets/1.1A/flg1o1.png', 'json/gradeJson/1.1A/flg1o1.json');
        _this.load.image('flg1o2', 'assets/gradeAssets/1.1A/flg1o2.png');
        _this.load.image('flg1o3', 'assets/gradeAssets/1.1A/flg1o3.png');
        
        _this.load.atlas('flg2o2', 'assets/gradeAssets/1.1A/flg2o2.png', 'json/gradeJson/1.1A/flg2o2.json');
        _this.load.image('flg2o1', 'assets/gradeAssets/1.1A/flg2o1.png');
        _this.load.image('flg2o3', 'assets/gradeAssets/1.1A/flg2o3.png');
               
        _this.load.atlas('flg3o3', 'assets/gradeAssets/1.1A/flg3o3.png', 'json/gradeJson/1.1A/flg3o3.json');
        _this.load.image('flg3o1', 'assets/gradeAssets/1.1A/flg3o1.png');
        _this.load.image('flg3o2', 'assets/gradeAssets/1.1A/flg3o2.png');
                        
        _this.load.atlas('flg4o2', 'assets/gradeAssets/1.1A/flg4o2.png', 'json/gradeJson/1.1A/flg4o2.json');
        _this.load.image('flg4o1', 'assets/gradeAssets/1.1A/flg4o1.png');
        _this.load.image('flg4o3', 'assets/gradeAssets/1.1A/flg4o3.png');
        
        _this.load.atlas('flg5o1', 'assets/gradeAssets/1.1A/flg5o1.png', 'json/gradeJson/1.1A/flg5o1.json');
        _this.load.image('flg5o2', 'assets/gradeAssets/1.1A/flg5o2.png');
        _this.load.image('flg5o3', 'assets/gradeAssets/1.1A/flg5o3.png');

        _this.load.atlas('flg6o2', 'assets/gradeAssets/1.1A/flg6o2.png', 'json/gradeJson/1.1A/flg6o2.json');
        _this.load.image('flg6o1', 'assets/gradeAssets/1.1A/flg6o1.png');
        _this.load.image('flg6o3', 'assets/gradeAssets/1.1A/flg6o3.png');
        
        _this.load.atlas('flg7o3', 'assets/gradeAssets/1.1A/flg7o3.png', 'json/gradeJson/1.1A/flg7o3.json');
        _this.load.image('flg7o1', 'assets/gradeAssets/1.1A/flg7o1.png');
        _this.load.image('flg7o2', 'assets/gradeAssets/1.1A/flg7o2.png');
        
        _this.load.atlas('flg8o1', 'assets/gradeAssets/1.1A/flg8o1.png', 'json/gradeJson/1.1A/flg8o1.json');
        _this.load.image('flg8o2', 'assets/gradeAssets/1.1A/flg8o2.png');
        _this.load.image('flg8o3', 'assets/gradeAssets/1.1A/flg8o3.png');
        
        _this.load.atlas('flg9o1', 'assets/gradeAssets/1.1A/flg9o1.png', 'json/gradeJson/1.1A/flg9o1.json');
        _this.load.image('flg9o2', 'assets/gradeAssets/1.1A/flg9o2.png');
        _this.load.image('flg9o3', 'assets/gradeAssets/1.1A/flg9o3.png');
        
        _this.load.atlas('flg10o1', 'assets/gradeAssets/1.1A/flg10o1.png', 'json/gradeJson/1.1A/flg10o1.json');
        _this.load.image('flg10o2', 'assets/gradeAssets/1.1A/flg10o2.png');
        _this.load.image('flg10o3', 'assets/gradeAssets/1.1A/flg10o3.png');

        _this.load.atlas('flg11o1', 'assets/gradeAssets/1.1A/flg11o1.png', 'json/gradeJson/1.1A/flg11o1.json');
        _this.load.image('flg11o2', 'assets/gradeAssets/1.1A/flg11o2.png');
        _this.load.image('flg11o3', 'assets/gradeAssets/1.1A/flg11o3.png');
        
        _this.load.atlas('flg12o3', 'assets/gradeAssets/1.1A/flg12o3.png', 'json/gradeJson/1.1A/flg12o3.json');
        _this.load.image('flg12o1', 'assets/gradeAssets/1.1A/flg12o1.png');
        _this.load.image('flg12o2', 'assets/gradeAssets/1.1A/flg12o2.png');
        
        _this.load.atlas('flg13o1', 'assets/gradeAssets/1.1A/flg13o1.png', 'json/gradeJson/1.1A/flg13o1.json');
        _this.load.image('flg13o2', 'assets/gradeAssets/1.1A/flg13o2.png');
        _this.load.image('flg13o3', 'assets/gradeAssets/1.1A/flg13o3.png');
        
        _this.load.atlas('flg14o1', 'assets/gradeAssets/1.1A/flg14o1.png', 'json/gradeJson/1.1A/flg14o1.json');
        _this.load.image('flg14o2', 'assets/gradeAssets/1.1A/flg14o2.png');
        _this.load.image('flg14o3', 'assets/gradeAssets/1.1A/flg14o3.png');
        
        _this.load.atlas('flg15o1', 'assets/gradeAssets/1.1A/flg15o1.png', 'json/gradeJson/1.1A/flg15o1.json');
        _this.load.image('flg15o2', 'assets/gradeAssets/1.1A/flg15o2.png');
        _this.load.image('flg15o3', 'assets/gradeAssets/1.1A/flg15o3.png');*/


        //LOAD ALL ASEETS 
		
		_this.load.image('grade11_TopBar', 'assets/gradeAssets/1.1A/grade11_TopBar.png');

		

        _this.load.atlas('flg1o1', 'assets/gradeAssets/1.1A/flg1o1.png', 'json/gradeJson/1.1A/flg1o1.json');
        _this.load.image('flg1o2', 'assets/gradeAssets/1.1A/flg1o2.png');
        _this.load.image('flg1o3', 'assets/gradeAssets/1.1A/flg1o3.png');
        
        _this.load.atlas('flg2o2', 'assets/gradeAssets/1.1A/flg2o2.png', 'json/gradeJson/1.1A/flg2o2.json');
        _this.load.image('flg2o1', 'assets/gradeAssets/1.1A/flg2o1.png');
        _this.load.image('flg2o3', 'assets/gradeAssets/1.1A/flg2o3.png');
               
        _this.load.atlas('flg3o3', 'assets/gradeAssets/1.1A/flg3o3.png', 'json/gradeJson/1.1A/flg3o3.json');
        _this.load.image('flg3o1', 'assets/gradeAssets/1.1A/flg3o1.png');
        _this.load.image('flg3o2', 'assets/gradeAssets/1.1A/flg3o2.png');
                        
        _this.load.atlas('flg4o2', 'assets/gradeAssets/1.1A/flg4o2.png', 'json/gradeJson/1.1A/flg4o2.json');
        _this.load.image('flg4o1', 'assets/gradeAssets/1.1A/flg4o1.png');
        _this.load.image('flg4o3', 'assets/gradeAssets/1.1A/flg4o3.png');
        
        _this.load.atlas('flg5o1', 'assets/gradeAssets/1.1A/flg5o1.png', 'json/gradeJson/1.1A/flg5o1.json');
        _this.load.image('flg5o2', 'assets/gradeAssets/1.1A/flg5o2.png');
        _this.load.image('flg5o3', 'assets/gradeAssets/1.1A/flg5o3.png');

        _this.load.atlas('flg6o2', 'assets/gradeAssets/1.1A/flg6o2.png', 'json/gradeJson/1.1A/flg6o2.json');
        _this.load.image('flg6o1', 'assets/gradeAssets/1.1A/flg6o1.png');
        _this.load.image('flg6o3', 'assets/gradeAssets/1.1A/flg6o3.png');
        
        _this.load.atlas('flg7o3', 'assets/gradeAssets/1.1A/flg7o3.png', 'json/gradeJson/1.1A/flg7o3.json');
        _this.load.image('flg7o1', 'assets/gradeAssets/1.1A/flg7o1.png');
        _this.load.image('flg7o2', 'assets/gradeAssets/1.1A/flg7o2.png');
        
        _this.load.atlas('flg8o1', 'assets/gradeAssets/1.1A/flg8o1.png', 'json/gradeJson/1.1A/flg8o1.json');
        _this.load.image('flg8o2', 'assets/gradeAssets/1.1A/flg8o2.png');
        _this.load.image('flg8o3', 'assets/gradeAssets/1.1A/flg8o3.png');
        
        _this.load.atlas('flg9o1', 'assets/gradeAssets/1.1A/flg9o1.png', 'json/gradeJson/1.1A/flg9o1.json');
        _this.load.image('flg9o2', 'assets/gradeAssets/1.1A/flg9o2.png');
        _this.load.image('flg9o3', 'assets/gradeAssets/1.1A/flg9o3.png');
        
        _this.load.atlas('flg10o1', 'assets/gradeAssets/1.1A/flg10o1.png', 'json/gradeJson/1.1A/flg10o1.json');
        _this.load.image('flg10o2', 'assets/gradeAssets/1.1A/flg10o2.png');
        _this.load.image('flg10o3', 'assets/gradeAssets/1.1A/flg10o3.png');

        _this.load.atlas('flg11o1', 'assets/gradeAssets/1.1A/flg11o1.png', 'json/gradeJson/1.1A/flg11o1.json');
        _this.load.image('flg11o2', 'assets/gradeAssets/1.1A/flg11o2.png');
        _this.load.image('flg11o3', 'assets/gradeAssets/1.1A/flg11o3.png');
        
        _this.load.atlas('flg12o3', 'assets/gradeAssets/1.1A/flg12o3.png', 'json/gradeJson/1.1A/flg12o3.json');
        _this.load.image('flg12o1', 'assets/gradeAssets/1.1A/flg12o1.png');
        _this.load.image('flg12o2', 'assets/gradeAssets/1.1A/flg12o2.png');
        
        _this.load.atlas('flg13o1', 'assets/gradeAssets/1.1A/flg13o1.png', 'json/gradeJson/1.1A/flg13o1.json');
        _this.load.image('flg13o2', 'assets/gradeAssets/1.1A/flg13o2.png');
        _this.load.image('flg13o3', 'assets/gradeAssets/1.1A/flg13o3.png');
        
        _this.load.atlas('flg14o1', 'assets/gradeAssets/1.1A/flg14o1.png', 'json/gradeJson/1.1A/flg14o1.json');
        _this.load.image('flg14o2', 'assets/gradeAssets/1.1A/flg14o2.png');
        _this.load.image('flg14o3', 'assets/gradeAssets/1.1A/flg14o3.png');
        
        _this.load.atlas('flg15o1', 'assets/gradeAssets/1.1A/flg15o1.png', 'json/gradeJson/1.1A/flg15o1.json');
        _this.load.image('flg15o2', 'assets/gradeAssets/1.1A/flg15o2.png');
        _this.load.image('flg15o3', 'assets/gradeAssets/1.1A/flg15o3.png');
		
		
	},
	
	addgame2_1AAssets:function()
	{
		
		_this.load.image('Level21_bg1','assets/gradeAssets/2.1A/bg1.png');
        _this.load.image('Level21_bg3','assets/gradeAssets/2.1A/bg3.png');                          
        _this.load.image('Level21_sh','assets/gradeAssets/2.1A/sh.png');
      
        _this.load.image('Level21_cloud','assets/gradeAssets/2.1A/cloud.png');
        _this.load.image('Level21_cloud2','assets/gradeAssets/2.1A/c2.png');
        _this.load.image('Level21_cloud3','assets/gradeAssets/2.1A/cloud3.png');
        _this.load.image('Level21_cloud4','assets/gradeAssets/2.1A/cloud4.png');
        _this.load.image('Level21_cloud5','assets/gradeAssets/2.1A/cloud5.png');
        
        _this.load.atlas('Level21_giraffe','assets/gradeAssets/2.1A/giraffe.png','json/gradeJson/2.1A/giraffe.json');
        _this.load.atlas('Level21_elephant','assets/gradeAssets/2.1A/elephant.png','json/gradeJson/2.1A/elephant.json');
        _this.load.image('Level21_tree1','assets/gradeAssets/2.1A/tree1.png');
        
        _this.load.atlas('Level21_bird1','assets/gradeAssets/2.1A/bird1.png','json/gradeJson/2.1A/bird1.json');
        _this.load.atlas('Level21_dog1','assets/gradeAssets/2.1A/dog1.png','json/gradeJson/2.1A/dog1.json');
        _this.load.image('Level21_cat','assets/gradeAssets/2.1A/cat.png');
        _this.load.image('Level21_house1','assets/gradeAssets/2.1A/house1.png');
        
        _this.load.atlas('Level21_bluemug','assets/gradeAssets/2.1A/bluemug.png','json/gradeJson/2.1A/bluemug.json');
        _this.load.atlas('Level21_pinkpot','assets/gradeAssets/2.1A/pinkpot.png','json/gradeJson/2.1A/pinkpot.json');
        _this.load.image('Level21_chair1','assets/gradeAssets/2.1A/chair1.png');
        _this.load.image('Level21_ladder1','assets/gradeAssets/2.1A/ladder1.png');
        
        _this.load.image('Level21_sofa1','assets/gradeAssets/2.1A/sofa1.png'); 
        _this.load.atlas('Level21_clock1','assets/gradeAssets/2.1A/clock1.png','json/gradeJson/2.1A/clock1.json');
        _this.load.atlas('Level21_book1','assets/gradeAssets/2.1A/book1.png','json/gradeJson/2.1A/book1.json');
        
        _this.load.atlas('Level21_elephant1','assets/gradeAssets/2.1A/elephant1.png','json/gradeJson/2.1A/elephant1.json');
        _this.load.atlas('Level21_bee1','assets/gradeAssets/2.1A/bee1.png','json/gradeJson/2.1A/bee1.json');
        
        _this.load.atlas('Level21_papaya1','assets/gradeAssets/2.1A/papaya1.png','json/gradeJson/2.1A/papaya1.json');
        _this.load.atlas('Level21_banana1','assets/gradeAssets/2.1A/banana1.png','json/gradeJson/2.1A/banana1.json');
        
        _this.load.atlas('Level21_key1','assets/gradeAssets/2.1A/key1.png','json/gradeJson/2.1A/key1.json');
        _this.load.atlas('Level21_key2','assets/gradeAssets/2.1A/key2.png','json/gradeJson/2.1A/key2.json');
        
        _this.load.atlas('Level21_dog2','assets/gradeAssets/2.1A/dog2.png','json/gradeJson/2.1A/dog2.json');
        _this.load.atlas('Level21_cat2','assets/gradeAssets/2.1A/cat2.png','json/gradeJson/2.1A/cat2.json');
        
        _this.load.atlas('Level21_dog3','assets/gradeAssets/2.1A/dog3.png','json/gradeJson/2.1A/dog3.json');
        _this.load.atlas('Level21_snake1','assets/gradeAssets/2.1A/snake1.png','json/gradeJson/2.1A/snake1.json');
        _this.load.image('Level21_sofa2','assets/gradeAssets/2.1A/sofa2.png');
        
        _this.load.image('Level21_table1','assets/gradeAssets/2.1A/table1.png');
        _this.load.atlas('Level21_cat3','assets/gradeAssets/2.1A/cat3.png','json/gradeJson/2.1A/cat3.json');
        _this.load.atlas('Level21_book2','assets/gradeAssets/2.1A/book2.png','json/gradeJson/2.1A/book2.json');
        
        _this.load.image('Level21_sofa3','assets/gradeAssets/2.1A/sofa3.png');
        _this.load.atlas('Level21_scooter1','assets/gradeAssets/2.1A/scooter1.png','json/gradeJson/2.1A/scooter1.json');
        _this.load.atlas('Level21_car1','assets/gradeAssets/2.1A/car1.png','json/gradeJson/2.1A/car1.json');
        
        _this.load.image('Level21_house2','assets/gradeAssets/2.1A/house2.png');
        _this.load.atlas('Level21_cat4','assets/gradeAssets/2.1A/cat4.png','json/gradeJson/2.1A/cat4.json');
        
        _this.load.image('Level21_tree2','assets/gradeAssets/2.1A/tree2.png');
        _this.load.atlas('Level21_croc1','assets/gradeAssets/2.1A/croc1.png','json/gradeJson/2.1A/croc1.json');
        _this.load.atlas('Level21_bird2','assets/gradeAssets/2.1A/bird2.png','json/gradeJson/2.1A/bird2.json');
        
        _this.load.atlas('Level21_fish1','assets/gradeAssets/2.1A/fish1.png','json/gradeJson/2.1A/fish1.json');
        _this.load.atlas('Level21_cat5','assets/gradeAssets/2.1A/cat5.png','json/gradeJson/2.1A/cat5.json');
        
        _this.load.image('Level21_house3','assets/gradeAssets/2.1A/house3.png');
        _this.load.atlas('Level21_sofa4','assets/gradeAssets/2.1A/sofa4.png','json/gradeJson/2.1A/sofa4.json');
        _this.load.atlas('Level21_scooter2','assets/gradeAssets/2.1A/scooter2.png','json/gradeJson/2.1A/scooter2.json');
        
        _this.load.image('Level21_basket1','assets/gradeAssets/2.1A/basket1.png');
        _this.load.atlas('Level21_papaya2','assets/gradeAssets/2.1A/papaya2.png','json/gradeJson/2.1A/papaya2.json');
        
        _this.load.image('Level21_flower1','assets/gradeAssets/2.1A/flower1.png');
        _this.load.atlas('Level21_pot2','assets/gradeAssets/2.1A/pot2.png','json/gradeJson/2.1A/pot2.json');
        _this.load.atlas('Level21_bee2','assets/gradeAssets/2.1A/bee2.png','json/gradeJson/2.1A/bee2.json');
        
        _this.load.image('Level21_books','assets/gradeAssets/2.1A/books.png');
        _this.load.atlas('Level21_book3','assets/gradeAssets/2.1A/book3.png','json/gradeJson/2.1A/book3.json');
        
        _this.load.image('Level21_step1','assets/gradeAssets/2.1A/step1.png');
        _this.load.atlas('Level21_mug1','assets/gradeAssets/2.1A/mug1.png','json/gradeJson/2.1A/mug1.json');
        _this.load.atlas('Level21_mug2','assets/gradeAssets/2.1A/mug2.png','json/gradeJson/2.1A/mug2.json');
        
        _this.load.image('Level21_table2','assets/gradeAssets/2.1A/table2.png');
        _this.load.atlas('Level21_clock2','assets/gradeAssets/2.1A/clock2.png','json/gradeJson/2.1A/clock2.json');
        _this.load.atlas('Level21_book4','assets/gradeAssets/2.1A/book4.png','json/gradeJson/2.1A/book4.json');
        
        _this.load.atlas('Level21_cat44','assets/gradeAssets/2.1A/cat44.png','json/gradeJson/2.1A/cat44.json');
        _this.load.image('Level21_tree3','assets/gradeAssets/2.1A/tree3.png');
        _this.load.image('Level21_z1','assets/gradeAssets/2.1A/z1.png');
        _this.load.image('Level21_house4','assets/gradeAssets/2.1A/house4.png');
        
        _this.load.atlas('Level21_mug3','assets/gradeAssets/2.1A/mug3.png','json/gradeJson/2.1A/mug3.json');
        
        _this.load.atlas('Level21_mug6','assets/gradeAssets/2.1A/mug6.png','json/gradeJson/2.1A/mug6.json');
        _this.load.image('Level21_cloud7','assets/gradeAssets/2.1A/cloud7.png');
        _this.load.image('Level21_cloud8','assets/gradeAssets/2.1A/cloud8.png');
        _this.load.image('Level21_scooter5','assets/gradeAssets/2.1A/scooter5.png');
        _this.load.atlas('Level21_bird3','assets/gradeAssets/2.1A/bird3.png','json/gradeJson/2.1A/bird3.json');
        
        _this.load.image('Level21_sofa5','assets/gradeAssets/2.1A/sofa5.png');
        _this.load.atlas('Level21_painting','assets/gradeAssets/2.1A/painting.png','json/gradeJson/2.1A/painting.json');
        
        _this.load.image('Level21_stand','assets/gradeAssets/2.1A/stand.png');
        _this.load.atlas('Level21_drum','assets/gradeAssets/2.1A/drum.png','json/gradeJson/2.1A/drum.json');
        _this.load.atlas('Level21_pot4','assets/gradeAssets/2.1A/pot4.png','json/gradeJson/2.1A/pot4.json');
        
        
        _this.load.image('Level21_rope','assets/gradeAssets/2.1A/rope.png');
        _this.load.atlas('Level21_kite','assets/gradeAssets/2.1A/kite.png','json/gradeJson/2.1A/kite.json');
        
        _this.load.atlas('Level21_trees','assets/gradeAssets/2.1A/trees.png','json/gradeJson/2.1A/trees.json');
        _this.load.atlas('Level21_catss','assets/gradeAssets/2.1A/catss.png','json/gradeJson/2.1A/catss.json');
        _this.load.atlas('Level21_treee','assets/gradeAssets/2.1A/treee.png','json/gradeJson/2.1A/treee.json');
        _this.load.atlas('Level21_treee1','assets/gradeAssets/2.1A/treee1.png','json/gradeJson/2.1A/treee1.json');
        

        
        _this.load.atlas('Level21_btn','assets/gradeAssets/2.1A/btn.png','json/gradeJson/2.1A/btn.json');
		
		
	},
	
	addgame2_1BAssets:function()
	{
		
		
		
		_this.load.image('Level21B_bg1','assets/gradeAssets/2.1B/bg1.png');
      //  _this.load.image('Level21B_bg2','assets/gradeAssets/2.1B/bg2.png');
        _this.load.image('Level21B_bg3','assets/gradeAssets/2.1B/bg3.png');                          
        _this.load.image('Level21B_sh','assets/gradeAssets/2.1B/sh.png');
         _this.load.image('Level21B_sh1','assets/gradeAssets/2.1B/level2/sh1.png');
        _this.load.image('Level21B_cloud21','assets/gradeAssets/2.1B/level2/cloud21.png');
        _this.load.image('Level21B_cloud22','assets/gradeAssets/2.1B/level2/cloud22.png');
        _this.load.image('Level21B_cloud23','assets/gradeAssets/2.1B/level2/cloud23.png');
        _this.load.image('Level21B_cloud24','assets/gradeAssets/2.1B/level2/cloud24.png');
        _this.load.image('Level21B_cloud25','assets/gradeAssets/2.1B/level2/cloud25.png');
        _this.load.image('Level21B_cloud26','assets/gradeAssets/2.1B/level2/cloud26.png');
         _this.load.image('Level21B_cloud27','assets/gradeAssets/2.1B/level2/cloud27.png');
         _this.load.image('Level21B_cloud28','assets/gradeAssets/2.1B/level2/cloud28.png');
         _this.load.image('Level21B_cloud29','assets/gradeAssets/2.1B/level2/cloud29.png');
       // _this.load.image('Level21B_tittleBaar','assets/gradeAssets/2.1B/tittleBaar.png');
       // _this.load.atlas('Level21B_replay','assets/gradeAssets/2.1B/reply.png' ,'json/gradeJson/2.1B/reply.json');
        
        //_this.load.atlas('Level21B_backbtn','assets/gradeAssets/2.1B/backbtn.png' ,'json/gradeJson/2.1B/backbtn.json');
       // _this.load.atlas('Level21B_speaker','assets/gradeAssets/2.1B/speaker.png' ,'json/gradeJson/2.1B/speaker.json');
       // _this.load.atlas('Level21B_starAnim','assets/gradeAssets/2.1B/starAnim.png','json/gradeJson/2.1B/starAnim.json');
        //_this.load.image('Level21B_cloud','assets/gradeAssets/2.1B/cloud.png');
         _this.load.image('Level21B_cloud2','assets/gradeAssets/2.1B/c2.png');
        // _this.load.image('Level21B_cloud3','assets/gradeAssets/2.1B/cloud3.png');
         //_this.load.image('Level21B_cloud4','assets/gradeAssets/2.1B/cloud4.png');
         //    _this.load.image('Level21B_cloud5','assets/gradeAssets/2.1B/cloud5.png');
        
       
       // _this.load.image('Level21B_cloud7','assets/gradeAssets/2.1B/cloud7.png');
        //_this.load.image('Level21B_cloud8','assets/gradeAssets/2.1B/cloud8.png');
        
        
        //level2 assets/gradeAssets/2.1B
        _this.load.atlas('Level21B_building1','assets/gradeAssets/2.1B/level2/building1.png','json/gradeJson/2.1B/building1.json');
        _this.load.atlas('Level21B_building2','assets/gradeAssets/2.1B/level2/building2.png','json/gradeJson/2.1B/building2.json');
        
        _this.load.atlas('Level21B_ladder1','assets/gradeAssets/2.1B/level2/ladder1.png','json/gradeJson/2.1B/ladder1.json');
        _this.load.atlas('Level21B_ladder2','assets/gradeAssets/2.1B/level2/ladder2.png','json/gradeJson/2.1B/ladder2.json');
        
        _this.load.atlas('Level21B_giraffe21','assets/gradeAssets/2.1B/level2/giraffe21.png','json/gradeJson/2.1B/giraffe21.json');
        _this.load.atlas('Level21B_cat21','assets/gradeAssets/2.1B/level2/cat21.png','json/gradeJson/2.1B/cat21.json');
        
        _this.load.atlas('Level21B_bottle21','assets/gradeAssets/2.1B/level2/bottle21.png','json/gradeJson/2.1B/bottle21.json');
        _this.load.atlas('Level21B_bottle22','assets/gradeAssets/2.1B/level2/bottle22.png','json/gradeJson/2.1B/bottle22.json');
        
        _this.load.atlas('Level21B_gate21','assets/gradeAssets/2.1B/level2/gate21.png','json/gradeJson/2.1B/gate21.json');
        _this.load.atlas('Level21B_gate22','assets/gradeAssets/2.1B/level2/gate22.png','json/gradeJson/2.1B/gate22.json');
        
        _this.load.atlas('Level21B_road1','assets/gradeAssets/2.1B/level2/road1.png','json/gradeJson/2.1B/road1.json');
        _this.load.atlas('Level21B_road2','assets/gradeAssets/2.1B/level2/road2.png','json/gradeJson/2.1B/road2.json');
        _this.load.image('Level21B_tree21','assets/gradeAssets/2.1B/level2/tree21.png');
        
        _this.load.atlas('Level21B_chair21','assets/gradeAssets/2.1B/level2/chair21.png','json/gradeJson/2.1B/chair21.json');
        _this.load.atlas('Level21B_chair22','assets/gradeAssets/2.1B/level2/chair22.png','json/gradeJson/2.1B/chair22.json');
        
        _this.load.atlas('Level21B_river21','assets/gradeAssets/2.1B/level2/river21.png','json/gradeJson/2.1B/river21.json');
        _this.load.atlas('Level21B_river22','assets/gradeAssets/2.1B/level2/river22.png','json/gradeJson/2.1B/river22.json');
        _this.load.image('Level21B_tree22','assets/gradeAssets/2.1B/level2/tree22.png');
        
        _this.load.atlas('Level21B_dog21','assets/gradeAssets/2.1B/level2/dog21.png','json/gradeJson/2.1B/dog21.json');
        _this.load.atlas('Level21B_cat22','assets/gradeAssets/2.1B/level2/cat22.png','json/gradeJson/2.1B/cat22.json');
        
        _this.load.atlas('Level21B_shirt21','assets/gradeAssets/2.1B/level2/shirt21.png','json/gradeJson/2.1B/shirt21.json');
        _this.load.atlas('Level21B_shirt22','assets/gradeAssets/2.1B/level2/shirt22.png','json/gradeJson/2.1B/shirt22.json');
        
        _this.load.atlas('Level21B_snake21','assets/gradeAssets/2.1B/level2/snake21.png','json/gradeJson/2.1B/snake21.json');
        _this.load.atlas('Level21B_snake22','assets/gradeAssets/2.1B/level2/snake22.png','json/gradeJson/2.1B/snake22.json');
        
        _this.load.atlas('Level21B_bird21','assets/gradeAssets/2.1B/level2/bird21.png','json/gradeJson/2.1B/bird21.json');
        _this.load.atlas('Level21B_bird22','assets/gradeAssets/2.1B/level2/bird22.png','json/gradeJson/2.1B/bird22.json');
        
        _this.load.atlas('Level21B_fish21','assets/gradeAssets/2.1B/level2/fish21.png','json/gradeJson/2.1B/fish21.json');
        _this.load.atlas('Level21B_fish22','assets/gradeAssets/2.1B/level2/fish22.png','json/gradeJson/2.1B/fish22.json');
        
        _this.load.atlas('Level21B_snake23','assets/gradeAssets/2.1B/level2/snake23.png','json/gradeJson/2.1B/snake23.json');
        _this.load.atlas('Level21B_snake24','assets/gradeAssets/2.1B/level2/snake24.png','json/gradeJson/2.1B/snake24.json');
        
        _this.load.atlas('Level21B_book21','assets/gradeAssets/2.1B/level2/book21.png','json/gradeJson/2.1B/book21.json');
        _this.load.atlas('Level21B_book22','assets/gradeAssets/2.1B/level2/book22.png','json/gradeJson/2.1B/book22.json');
        
        _this.load.atlas('Level21B_tyre21','assets/gradeAssets/2.1B/level2/tyre21.png','json/gradeJson/2.1B/tyre21.json');
        _this.load.atlas('Level21B_tyre22','assets/gradeAssets/2.1B/level2/tyre22.png','json/gradeJson/2.1B/tyre22.json');
        _this.load.image('Level21B_scooter21','assets/gradeAssets/2.1B/level2/scooter21.png');
        
        _this.load.atlas('Level21B_bread21','assets/gradeAssets/2.1B/level2/bread21.png','json/gradeJson/2.1B/bread21.json');
        _this.load.atlas('Level21B_bread22','assets/gradeAssets/2.1B/level2/bread22.png','json/gradeJson/2.1B/bread22.json');
        
        _this.load.atlas('Level21B_rope21','assets/gradeAssets/2.1B/level2/rope21.png','json/gradeJson/2.1B/rope21.json');
        _this.load.atlas('Level21B_rope22','assets/gradeAssets/2.1B/level2/rope22.png','json/gradeJson/2.1B/rope22.json');
        
        _this.load.atlas('Level21B_tree23','assets/gradeAssets/2.1B/level2/tree23.png','json/gradeJson/2.1B/tree23.json');
        _this.load.atlas('Level21B_tree24','assets/gradeAssets/2.1B/level2/tree24.png','json/gradeJson/2.1B/tree24.json');
        
        //_this.load.atlas('Level21B_btn','assets/gradeAssets/2.1B/btn.png','json/gradeJson/2.1B/btn.json');
				
	},
	
	addgame2_2Assets:function()
	{
		_this.load.image('Level22_bg','assets/gradeAssets/2.2/commonAssets/bg.png');
        
        //game assets/gradeAssets/2.2
		_this.load.image('Level22_gamebg','assets/gradeAssets/2.2/gameAssets/gamebg.png');
        _this.load.atlas('Level22_gameBox','assets/gradeAssets/2.2/gameAssets/gameBox.png' ,'json/gradeJson/2.2/gameBox.json');
        _this.load.atlas('Level22_allimg','assets/gradeAssets/2.2/gameAssets/allimg2.png' ,'json/gradeJson/2.2/allimg2.json');
        _this.load.atlas('Level22_tickMark','assets/gradeAssets/2.2/gameAssets/tickMark.png' ,'json/gradeJson/2.2/tickMark.json');
        _this.load.image('Level22_croc','assets/gradeAssets/2.2/gameAssets/croc.png');       
        _this.load.image('Level22_glow','assets/gradeAssets/2.2/gameAssets/glow.png');
        
        //game items
        _this.load.image('Level22_Building','assets/gradeAssets/2.2/gameAssets/1.png');
        _this.load.image('Level22_OrangeHouse','assets/gradeAssets/2.2/gameAssets/2.png');
        _this.load.image('Level22_PurpleHouse','assets/gradeAssets/2.2/gameAssets/3.png');
        _this.load.image('Level22_BlueHouse','assets/gradeAssets/2.2/gameAssets/4.png');
        
        _this.load.image('Level22_LongStairs','assets/gradeAssets/2.2/gameAssets/5.png');
        _this.load.image('Level22_SecondLongestStairs','assets/gradeAssets/2.2/gameAssets/6.png');
        _this.load.image('Level22_MediumStairs','assets/gradeAssets/2.2/gameAssets/7.png');
        _this.load.image('Level22_ShortestStairs','assets/gradeAssets/2.2/gameAssets/8.png');
        
        _this.load.image('Level22_GreyDog','assets/gradeAssets/2.2/gameAssets/9.png');
        _this.load.image('Level22_WhiteDog','assets/gradeAssets/2.2/gameAssets/10.png');
        _this.load.image('Level22_BlackDog','assets/gradeAssets/2.2/gameAssets/11.png');
        _this.load.image('Level22_BrownDog','assets/gradeAssets/2.2/gameAssets/12.png');
        
        _this.load.image('Level22_OrangeSnake','assets/gradeAssets/2.2/gameAssets/13.png');
        _this.load.image('Level22_GreenDottedSnake','assets/gradeAssets/2.2/gameAssets/14.png');
        _this.load.image('Level22_RedSnake','assets/gradeAssets/2.2/gameAssets/15.png');
        _this.load.image('Level22_GreenSnake','assets/gradeAssets/2.2/gameAssets/16.png');
        
        _this.load.image('Level22_BrownBottle','assets/gradeAssets/2.2/gameAssets/17.png');
        _this.load.image('Level22_OrangeBottle','assets/gradeAssets/2.2/gameAssets/18.png');
        _this.load.image('Level22_BlackBottle','assets/gradeAssets/2.2/gameAssets/19.png');
        _this.load.image('Level22_BlueBottle','assets/gradeAssets/2.2/gameAssets/20.png');
        
        _this.load.image('Level22_LargeBox','assets/gradeAssets/2.2/gameAssets/21.png');
        _this.load.image('Level22_SecondLargestBox','assets/gradeAssets/2.2/gameAssets/22.png');
        _this.load.image('Level22_MediumBox','assets/gradeAssets/2.2/gameAssets/23.png');
        _this.load.image('Level22_SmallBox','assets/gradeAssets/2.2/gameAssets/24.png');
        
        _this.load.image('Level22_Giraffe','assets/gradeAssets/2.2/gameAssets/25.png');
        _this.load.image('Level22_Elephant','assets/gradeAssets/2.2/gameAssets/26.png');
        _this.load.image('Level22_Dog','assets/gradeAssets/2.2/gameAssets/27.png');
        _this.load.image('Level22_Cat','assets/gradeAssets/2.2/gameAssets/28.png');
        
        _this.load.image('Level22_Crane','assets/gradeAssets/2.2/gameAssets/29.png');
        _this.load.image('Level22_Crow','assets/gradeAssets/2.2/gameAssets/30.png');
        _this.load.image('Level22_Pigeon','assets/gradeAssets/2.2/gameAssets/31.png');
        _this.load.image('Level22_Sparrow','assets/gradeAssets/2.2/gameAssets/32.png');
		
		
	},
	
	addgame2_3Assets:function()
	{
		/*_this.load.image('Level23_bg1','assets/gradeAssets/2.3/bg1.png');
        _this.load.image('Level23_bg3','assets/gradeAssets/2.3/bg3.png');
        //_this.load.image('Level23_title','assets/gradeAssets/2.3/title.png');
       // _this.load.image('Level23_tittleBaar','assets/gradeAssets/2.3/tittleBaar.png');
       // _this.load.atlas('Level23_replay','assets/gradeAssets/2.3/reply.png' ,'json/gradeJson/2.3/reply.json');
       // _this.load.atlas('Level23_btn','assets/gradeAssets/2.3/btn.png','json/gradeJson/2.3/btn.json');
     
        //_this.load.atlas('Level23_backbtn','assets/gradeAssets/2.3/backbtn.png' ,'json/gradeJson/2.3/backbtn.json');
        //_this.load.atlas('Level23_speaker','assets/gradeAssets/2.3/speaker.png' ,'json/gradeJson/2.3/speaker.json');
        //_this.load.atlas('Level23_starAnim','assets/gradeAssets/2.3/starAnim.png','json/gradeJson/2.3/starAnim.json');
  
        _this.load.atlas('Level23_numberbtn1','assets/gradeAssets/2.3/numberbtn1.png' ,'json/gradeJson/2.3/numberbtn1.json');
        _this.load.atlas('Level23_numberbtn2','assets/gradeAssets/2.3/numberbtn2.png' ,'json/gradeJson/2.3/numberbtn2.json');
        _this.load.atlas('Level23_numberbtn3','assets/gradeAssets/2.3/numberbtn3.png' ,'json/gradeJson/2.3/numberbtn3.json');
        _this.load.atlas('Level23_numberbtn4','assets/gradeAssets/2.3/numberbtn4.png' ,'json/gradeJson/2.3/numberbtn4.json');
        _this.load.atlas('Level23_numberbtn5','assets/gradeAssets/2.3/numberbtn5.png' ,'json/gradeJson/2.3/numberbtn5.json');
        _this.load.atlas('Level23_numberbtn6','assets/gradeAssets/2.3/numberbtn6.png' ,'json/gradeJson/2.3/numberbtn6.json');
        _this.load.atlas('Level23_numberbtn7','assets/gradeAssets/2.3/numberbtn7.png' ,'json/gradeJson/2.3/numberbtn7.json');
        _this.load.atlas('Level23_numberbtn8','assets/gradeAssets/2.3/numberbtn8.png' ,'json/gradeJson/2.3/numberbtn8.json');
        _this.load.atlas('Level23_numberbtn9','assets/gradeAssets/2.3/numberbtn9.png' ,'json/gradeJson/2.3/numberbtn9.json');
        
        _this.load.atlas('Level23_tree1','assets/gradeAssets/2.3/tree1.png' ,'json/gradeJson/2.3/tree1.json');
        _this.load.image('Level23_leaf1','assets/gradeAssets/2.3/leaf1.png');
        _this.load.image('Level23_line1','assets/gradeAssets/2.3/line1.png');
        _this.load.atlas('Level23_leaf','assets/gradeAssets/2.3/leaf.png' ,'json/gradeJson/2.3/leaf.json');
        
        _this.load.atlas('Level23_pencil','assets/gradeAssets/2.3/pencil.png' ,'json/gradeJson/2.3/pencil.json');
        _this.load.image('Level23_cutter1','assets/gradeAssets/2.3/cutter1.png');
        _this.load.atlas('Level23_cutters','assets/gradeAssets/2.3/cutters.png' ,'json/gradeJson/2.3/cutters.json');
        
        _this.load.atlas('Level23_crocodile','assets/gradeAssets/2.3/crocodile.png' ,'json/gradeJson/2.3/crocodile.json');
        _this.load.atlas('Level23_crocs','assets/gradeAssets/2.3/crocs.png' ,'json/gradeJson/2.3/crocs.json');
        _this.load.image('Level23_line2','assets/gradeAssets/2.3/line2.png');
        _this.load.image('Level23_crocodile1','assets/gradeAssets/2.3/crocodile1.png');
        
        _this.load.atlas('Level23_snake','assets/gradeAssets/2.3/Snake.png' ,'json/gradeJson/2.3/Snake.json');
        _this.load.atlas('Level23_buggs','assets/gradeAssets/2.3/Buggs.png' ,'json/gradeJson/2.3/Buggs.json');
        _this.load.image('Level23_bug1','assets/gradeAssets/2.3/bug1.png');
        
        _this.load.atlas('Level23_Window','assets/gradeAssets/2.3/Window.png' ,'json/gradeJson/2.3/window.json');
        _this.load.atlas('Level23_palms','assets/gradeAssets/2.3/palms.png' ,'json/gradeJson/2.3/palms.json');
        _this.load.image('Level23_palm1','assets/gradeAssets/2.3/palm1.png');
        
        _this.load.atlas('Level23_petrol','assets/gradeAssets/2.3/petrol.png' ,'json/gradeJson/2.3/petrol.json');
        _this.load.atlas('Level23_petrol111','assets/gradeAssets/2.3/petrol111.png' ,'json/gradeJson/2.3/petrol111.json');
         _this.load.atlas('Level23_petrolbooth','assets/gradeAssets/2.3/petrolbooth.png' ,'json/gradeJson/2.3/petrolbooth.json');
        
        _this.load.atlas('Level23_tablebox','assets/gradeAssets/2.3/tablebox.png' ,'json/gradeJson/2.3/tablebox.json');
        
        _this.load.atlas('Level23_Can','assets/gradeAssets/2.3/Can.png' ,'json/gradeJson/2.3/Can.json');
        _this.load.image('Level23_Line8','assets/gradeAssets/2.3/Line8.png');
        
        _this.load.atlas('Level23_Shoes','assets/gradeAssets/2.3/Shoes.png' ,'json/gradeJson/2.3/Shoes.json');
        _this.load.atlas('Level23_palm22','assets/gradeAssets/2.3/palm22.png' ,'json/gradeJson/2.3/palm22.json');
        _this.load.image('Level23_Line9','assets/gradeAssets/2.3/Line9.png');
        _this.load.image('Level23_palm2','assets/gradeAssets/2.3/palm2.png');
        
        _this.load.atlas('Level23_soffa','assets/gradeAssets/2.3/Soffa.png' ,'json/gradeJson/2.3/Soffa.json');
        _this.load.image('Level23_Line10','assets/gradeAssets/2.3/Line10.png');      
                
        _this.load.atlas('Level23_Longtable','assets/gradeAssets/2.3/Longtable.png' ,'json/gradeJson/2.3/Longtable.json');
        _this.load.image('Level23_Line11','assets/gradeAssets/2.3/Line11.png');    
        
        _this.load.atlas('Level23_Suitcase','assets/gradeAssets/2.3/Suitcase.png' ,'json/gradeJson/2.3/Suitcase.json');
        _this.load.image('Level23_Line12','assets/gradeAssets/2.3/Line12.png'); 
        
        
          _this.load.atlas('Level23_Car','assets/gradeAssets/2.3/Car.png' ,'json/gradeJson/2.3/Car.json');
        _this.load.atlas('Level23_hand','assets/gradeAssets/2.3/hand.png' ,'json/gradeJson/2.3/hand.json');
        _this.load.image('Level23_Line13','assets/gradeAssets/2.3/Line13.png');
        _this.load.image('Level23_hand1','assets/gradeAssets/2.3/hand1.png');
        
         
          _this.load.atlas('Level23_gate','assets/gradeAssets/2.3/gate.png' ,'json/gradeJson/2.3/gate.json');
	    _this.load.image('Level23_Line14','assets/gradeAssets/2.3/Line14.png');
	        
	             _this.load.atlas('Level23_Table','assets/gradeAssets/2.3/Table.png' ,'json/gradeJson/2.3/Table.json');
	    _this.load.image('Level23_Line15','assets/gradeAssets/2.3/Line15.png');
	        
	        _this.load.atlas('Level23_rope','assets/gradeAssets/2.3/rope.png' ,'json/gradeJson/2.3/rope.json');
	    _this.load.image('Level23_Line16','assets/gradeAssets/2.3/Line16.png');
        
                _this.load.atlas('Level23_Chair','assets/gradeAssets/2.3/Chair.png' ,'json/gradeJson/2.3/Chair.json');
        _this.load.atlas('Level23_hand11','assets/gradeAssets/2.3/hand11.png' ,'json/gradeJson/2.3/hand11.json');
        _this.load.image('Level23_Line17','assets/gradeAssets/2.3/Line17.png');
        _this.load.image('Level23_hand111','assets/gradeAssets/2.3/hand111.png');
        
             _this.load.atlas('Level23_door','assets/gradeAssets/2.3/door.png' ,'json/gradeJson/2.3/door.json');
        _this.load.image('Level23_Line18','assets/gradeAssets/2.3/Line18.png');
        
        
            _this.load.atlas('Level23_flower','assets/gradeAssets/2.3/flower.png' ,'json/gradeJson/2.3/flower.json');
        _this.load.image('Level23_Line19','assets/gradeAssets/2.3/Line19.png');
        
        
            _this.load.atlas('Level23_flower1','assets/gradeAssets/2.3/flower1.png' ,'json/gradeJson/2.3/flower1.json');
        _this.load.image('Level23_Line20','assets/gradeAssets/2.3/Line20.png');
        
        
        
        //from 21
        _this.load.atlas('Level23_ladder','assets/gradeAssets/2.3/ladder.png' ,'json/gradeJson/2.3/ladder.json');
        _this.load.atlas('Level23_feets','assets/gradeAssets/2.3/feets.png' ,'json/gradeJson/2.3/feets.json');
        _this.load.atlas('Level23_feets101','assets/gradeAssets/2.3/feets101.png' ,'json/gradeJson/2.3/feets101.json');
        _this.load.image('Level23_Line21','assets/gradeAssets/2.3/Line21.png');
        _this.load.image('Level23_feet1','assets/gradeAssets/2.3/feet1.png');
        _this.load.image('Level23_feet2','assets/gradeAssets/2.3/feet2.png');
        
        _this.load.atlas('Level23_House','assets/gradeAssets/2.3/House.png' ,'json/gradeJson/2.3/House.json');
        _this.load.image('Level23_Line22','assets/gradeAssets/2.3/Line22.png');
        
        _this.load.atlas('Level23_gate2','assets/gradeAssets/2.3/gate2.png' ,'json/gradeJson/2.3/gate2.json');
        _this.load.image('Level23_Line23','assets/gradeAssets/2.3/Line23.png');
        
        _this.load.atlas('Level23_treee','assets/gradeAssets/2.3/treee.png' ,'json/gradeJson/2.3/treee.json');
        _this.load.image('Level23_Line24','assets/gradeAssets/2.3/Line24.png');
        
        _this.load.atlas('Level23_ladder2','assets/gradeAssets/2.3/ladder2.png' ,'json/gradeJson/2.3/ladder2.json');
        _this.load.atlas('Level23_ropes11','assets/gradeAssets/2.3/ropes11.png' ,'json/gradeJson/2.3/ropes11.json');
        _this.load.image('Level23_Line28','assets/gradeAssets/2.3/Line28.png');
        _this.load.image('Level23_rope11','assets/gradeAssets/2.3/rope11.png');
        
        _this.load.atlas('Level23_door111','assets/gradeAssets/2.3/door111.png' ,'json/gradeJson/2.3/door111.json');
        _this.load.image('Level23_Line27','assets/gradeAssets/2.3/Line27.png');
        
        _this.load.atlas('Level23_petrol111','assets/gradeAssets/2.3/petrol111.png' ,'json/gradeJson/2.3/petrol111.json');
        _this.load.image('Level23_Line26','assets/gradeAssets/2.3/Line26.png');
        
        _this.load.atlas('Level23_flower111','assets/gradeAssets/2.3/flower111.png' ,'json/gradeJson/2.3/flower111.json');
        _this.load.image('Level23_Line25','assets/gradeAssets/2.3/Line25.png');
        
        _this.load.atlas('Level23_car111','assets/gradeAssets/2.3/car111.png' ,'json/gradeJson/2.3/car111.json');
        _this.load.atlas('Level23_ropes111','assets/gradeAssets/2.3/ropes111.png' ,'json/gradeJson/2.3/ropes111.json');
        _this.load.image('Level23_Line32','assets/gradeAssets/2.3/Line32.png');
        _this.load.image('Level23_rope111','assets/gradeAssets/2.3/rope111.png');
        
        _this.load.atlas('Level23_gate21','assets/gradeAssets/2.3/gate21.png' ,'json/gradeJson/2.3/gate21.json');
        _this.load.image('Level23_Line31','assets/gradeAssets/2.3/Line31.png');
        
         _this.load.atlas('Level23_longtable111','assets/gradeAssets/2.3/longtable111.png' ,'json/gradeJson/2.3/longtable111.json');
        _this.load.image('Level23_Line30','assets/gradeAssets/2.3/Line30.png');
        
        _this.load.atlas('Level23_shoes111','assets/gradeAssets/2.3/shoes111.png' ,'json/gradeJson/2.3/shoes111.json');
        _this.load.image('Level23_Line29','assets/gradeAssets/2.3/Line29.png');
		
		/*_this.load.audio('Eng_23_1', 'questionSounds/2.3/English/2.3_1.mp3');
        _this.load.audio('Eng_23_2', 'questionSounds/2.3/English/2.3_2.mp3');
        _this.load.audio('Eng_23_3', 'questionSounds/2.3/English/2.3_3.mp3');
        _this.load.audio('Eng_23_4', 'questionSounds/2.3/English/2.3_4.mp3');
        _this.load.audio('Eng_23_5', 'questionSounds/2.3/English/2.3_5.mp3');
        _this.load.audio('Eng_23_6', 'questionSounds/2.3/English/2.3_6.mp3');
        _this.load.audio('Eng_23_7', 'questionSounds/2.3/English/2.3_7.mp3');
        _this.load.audio('Eng_23_8', 'questionSounds/2.3/English/2.3_8.mp3');
        _this.load.audio('Eng_23_4option', 'questionSounds/2.3/English/2.3_4 option.mp3');
        
        
        _this.load.audio('Kan_23_1', 'questionSounds/2.3/Kannada/2.3_1.mp3');
        _this.load.audio('Kan_23_2', 'questionSounds/2.3/Kannada/2.3_2.mp3');
        _this.load.audio('Kan_23_3', 'questionSounds/2.3/Kannada/2.3_3.mp3');
        _this.load.audio('Kan_23_4', 'questionSounds/2.3/Kannada/2.3_4.mp3');
        _this.load.audio('Kan_23_5', 'questionSounds/2.3/Kannada/2.3_5.mp3');
        _this.load.audio('Kan_23_6', 'questionSounds/2.3/Kannada/2.3_6.mp3');
        _this.load.audio('Kan_23_7', 'questionSounds/2.3/Kannada/2.3_7.mp3');
        _this.load.audio('Kan_23_8', 'questionSounds/2.3/Kannada/2.3_8.mp3');
        
        _this.load.audio('Hin_23_1', 'questionSounds/2.3/Hindi/2.3_1.mp3');
        _this.load.audio('Hin_23_2', 'questionSounds/2.3/Hindi/2.3_2.mp3');
        _this.load.audio('Hin_23_3', 'questionSounds/2.3/Hindi/2.3_3.mp3');
        _this.load.audio('Hin_23_4', 'questionSounds/2.3/Hindi/2.3_4.mp3');
        _this.load.audio('Hin_23_5', 'questionSounds/2.3/Hindi/2.3_5.mp3');
        _this.load.audio('Hin_23_6', 'questionSounds/2.3/Hindi/2.3_6.mp3');
        _this.load.audio('Hin_23_7', 'questionSounds/2.3/Hindi/2.3_7.mp3');
        _this.load.audio('Hin_23_8', 'questionSounds/2.3/Hindi/2.3_8.mp3');*/



        _this.load.image('Level23_bg1','assets/gradeAssets/2.3/bg1.png');
        _this.load.image('Level23_bg3','assets/gradeAssets/2.3/bg3.png');

        this.load.atlas('Level23_jugg','assets/gradeAssets/2.3/jugg.png' ,'json/gradeJson/2.3/jugg.json');
        this.load.atlas('Level23_boot','assets/gradeAssets/2.3/boot.png' ,'json/gradeJson/2.3/boot.json');
        this.load.atlas('Level23_housenew','assets/gradeAssets/2.3/housenew.png' ,'json/gradeJson/2.3/housenew.json');
        //_this.load.image('Level23_title','assets/gradeAssets/2.3/title.png');
       // _this.load.image('Level23_tittleBaar','assets/gradeAssets/2.3/tittleBaar.png');
       // _this.load.atlas('Level23_replay','assets/gradeAssets/2.3/reply.png' ,'json/gradeJson/2.3/reply.json');
       // _this.load.atlas('Level23_btn','assets/gradeAssets/2.3/btn.png','json/gradeJson/2.3/btn.json');
     
        //_this.load.atlas('Level23_backbtn','assets/gradeAssets/2.3/backbtn.png' ,'json/gradeJson/2.3/backbtn.json');
        //_this.load.atlas('Level23_speaker','assets/gradeAssets/2.3/speaker.png' ,'json/gradeJson/2.3/speaker.json');
        //_this.load.atlas('Level23_starAnim','assets/gradeAssets/2.3/starAnim.png','json/gradeJson/2.3/starAnim.json');
  
        _this.load.atlas('Level23_numberbtn1','assets/gradeAssets/2.3/numberbtn1.png' ,'json/gradeJson/2.3/numberbtn1.json');
        _this.load.atlas('Level23_numberbtn2','assets/gradeAssets/2.3/numberbtn2.png' ,'json/gradeJson/2.3/numberbtn2.json');
        _this.load.atlas('Level23_numberbtn3','assets/gradeAssets/2.3/numberbtn3.png' ,'json/gradeJson/2.3/numberbtn3.json');
        _this.load.atlas('Level23_numberbtn4','assets/gradeAssets/2.3/numberbtn4.png' ,'json/gradeJson/2.3/numberbtn4.json');
        _this.load.atlas('Level23_numberbtn5','assets/gradeAssets/2.3/numberbtn5.png' ,'json/gradeJson/2.3/numberbtn5.json');
        _this.load.atlas('Level23_numberbtn6','assets/gradeAssets/2.3/numberbtn6.png' ,'json/gradeJson/2.3/numberbtn6.json');
        _this.load.atlas('Level23_numberbtn7','assets/gradeAssets/2.3/numberbtn7.png' ,'json/gradeJson/2.3/numberbtn7.json');
        _this.load.atlas('Level23_numberbtn8','assets/gradeAssets/2.3/numberbtn8.png' ,'json/gradeJson/2.3/numberbtn8.json');
        _this.load.atlas('Level23_numberbtn9','assets/gradeAssets/2.3/numberbtn9.png' ,'json/gradeJson/2.3/numberbtn9.json');
        _this.load.atlas('calNum','assets/gradeAssets/2.3/calNum.png' ,'json/gradeJson/2.3/calNum.json');
        
        _this.load.atlas('Level23_tree1','assets/gradeAssets/2.3/tree1.png' ,'json/gradeJson/2.3/tree1.json');
        _this.load.image('Level23_leaf1','assets/gradeAssets/2.3/leaf1.png');
        _this.load.image('Level23_line1','assets/gradeAssets/2.3/line1.png');
        _this.load.atlas('Level23_leaf','assets/gradeAssets/2.3/leaf.png' ,'json/gradeJson/2.3/leaf.json');
        
        _this.load.atlas('Level23_pencil','assets/gradeAssets/2.3/pencil.png' ,'json/gradeJson/2.3/pencil.json');
        _this.load.image('Level23_cutter1','assets/gradeAssets/2.3/cutter1.png');
        _this.load.atlas('Level23_cutters','assets/gradeAssets/2.3/cutters.png' ,'json/gradeJson/2.3/cutters.json');
        
        _this.load.atlas('Level23_crocodile','assets/gradeAssets/2.3/crocodile.png' ,'json/gradeJson/2.3/crocodile.json');
        _this.load.atlas('Level23_crocs','assets/gradeAssets/2.3/crocs.png' ,'json/gradeJson/2.3/crocs.json');
        _this.load.image('Level23_line2','assets/gradeAssets/2.3/line2.png');
        _this.load.image('Level23_crocodile1','assets/gradeAssets/2.3/crocodile1.png');
        
        _this.load.atlas('Level23_snake','assets/gradeAssets/2.3/Snake.png' ,'json/gradeJson/2.3/Snake.json');
        _this.load.atlas('Level23_buggs','assets/gradeAssets/2.3/Buggs.png' ,'json/gradeJson/2.3/Buggs.json');
        _this.load.image('Level23_bug1','assets/gradeAssets/2.3/bug1.png');
        
        _this.load.atlas('Level23_Window','assets/gradeAssets/2.3/Window.png' ,'json/gradeJson/2.3/window.json');
        _this.load.atlas('Level23_palms','assets/gradeAssets/2.3/palms.png' ,'json/gradeJson/2.3/palms.json');
        _this.load.image('Level23_palm1','assets/gradeAssets/2.3/palm1.png');
        
        _this.load.atlas('Level23_petrol','assets/gradeAssets/2.3/petrol.png' ,'json/gradeJson/2.3/petrol.json');
        _this.load.atlas('Level23_petrol111','assets/gradeAssets/2.3/petrol111.png' ,'json/gradeJson/2.3/petrol111.json');
         _this.load.atlas('Level23_petrolbooth','assets/gradeAssets/2.3/petrolbooth.png' ,'json/gradeJson/2.3/petrolbooth.json');
        
        _this.load.atlas('Level23_tablebox','assets/gradeAssets/2.3/tablebox.png' ,'json/gradeJson/2.3/tablebox.json');
        
        _this.load.atlas('Level23_Can','assets/gradeAssets/2.3/Can.png' ,'json/gradeJson/2.3/Can.json');
        _this.load.image('Level23_Line8','assets/gradeAssets/2.3/Line8.png');
        
        _this.load.atlas('Level23_Shoes','assets/gradeAssets/2.3/Shoes.png' ,'json/gradeJson/2.3/Shoes.json');
        _this.load.atlas('Level23_palm22','assets/gradeAssets/2.3/palm22.png' ,'json/gradeJson/2.3/palm22.json');
        _this.load.image('Level23_Line9','assets/gradeAssets/2.3/Line9.png');
        _this.load.image('Level23_palm2','assets/gradeAssets/2.3/palm2.png');
        
        _this.load.atlas('Level23_soffa','assets/gradeAssets/2.3/Soffa.png' ,'json/gradeJson/2.3/Soffa.json');
        _this.load.image('Level23_Line10','assets/gradeAssets/2.3/Line10.png');      
                
        _this.load.atlas('Level23_Longtable','assets/gradeAssets/2.3/Longtable.png' ,'json/gradeJson/2.3/Longtable.json');
        _this.load.image('Level23_Line11','assets/gradeAssets/2.3/Line11.png');    
        
        _this.load.atlas('Level23_Suitcase','assets/gradeAssets/2.3/Suitcase.png' ,'json/gradeJson/2.3/Suitcase.json');
        _this.load.image('Level23_Line12','assets/gradeAssets/2.3/Line12.png'); 
        
        
          _this.load.atlas('Level23_Car','assets/gradeAssets/2.3/Car.png' ,'json/gradeJson/2.3/Car.json');
        _this.load.atlas('Level23_hand','assets/gradeAssets/2.3/hand.png' ,'json/gradeJson/2.3/hand.json');
        _this.load.image('Level23_Line13','assets/gradeAssets/2.3/Line13.png');
        _this.load.image('Level23_hand1','assets/gradeAssets/2.3/hand1.png');
        
         
          _this.load.atlas('Level23_gate','assets/gradeAssets/2.3/gate.png' ,'json/gradeJson/2.3/gate.json');
	    _this.load.image('Level23_Line14','assets/gradeAssets/2.3/Line14.png');
	        
	             _this.load.atlas('Level23_Table','assets/gradeAssets/2.3/Table.png' ,'json/gradeJson/2.3/Table.json');
	    _this.load.image('Level23_Line15','assets/gradeAssets/2.3/Line15.png');
	        
	        _this.load.atlas('Level23_rope','assets/gradeAssets/2.3/rope.png' ,'json/gradeJson/2.3/rope.json');
	    _this.load.image('Level23_Line16','assets/gradeAssets/2.3/Line16.png');
        
                _this.load.atlas('Level23_Chair','assets/gradeAssets/2.3/Chair.png' ,'json/gradeJson/2.3/Chair.json');
        _this.load.atlas('Level23_hand11','assets/gradeAssets/2.3/hand11.png' ,'json/gradeJson/2.3/hand11.json');
        _this.load.image('Level23_Line17','assets/gradeAssets/2.3/Line17.png');
        _this.load.image('Level23_hand111','assets/gradeAssets/2.3/hand111.png');
        
             _this.load.atlas('Level23_door','assets/gradeAssets/2.3/door.png' ,'json/gradeJson/2.3/door.json');
        _this.load.image('Level23_Line18','assets/gradeAssets/2.3/Line18.png');
        
        
            _this.load.atlas('Level23_flower','assets/gradeAssets/2.3/flower.png' ,'json/gradeJson/2.3/flower.json');
        _this.load.image('Level23_Line19','assets/gradeAssets/2.3/Line19.png');
        
        
            _this.load.atlas('Level23_flower1','assets/gradeAssets/2.3/flower1.png' ,'json/gradeJson/2.3/flower1.json');
        _this.load.image('Level23_Line20','assets/gradeAssets/2.3/Line20.png');
        
        
        
        //from 21
        _this.load.atlas('Level23_ladder','assets/gradeAssets/2.3/ladder.png' ,'json/gradeJson/2.3/ladder.json');
        _this.load.atlas('Level23_feets','assets/gradeAssets/2.3/feets.png' ,'json/gradeJson/2.3/feets.json');
        _this.load.atlas('Level23_feets101','assets/gradeAssets/2.3/feets101.png' ,'json/gradeJson/2.3/feets101.json');
        _this.load.image('Level23_Line21','assets/gradeAssets/2.3/Line21.png');
        _this.load.image('Level23_feet1','assets/gradeAssets/2.3/feet1.png');
        _this.load.image('Level23_feet2','assets/gradeAssets/2.3/feet2.png');
        
        _this.load.atlas('Level23_House','assets/gradeAssets/2.3/House.png' ,'json/gradeJson/2.3/House.json');
        _this.load.image('Level23_Line22','assets/gradeAssets/2.3/Line22.png');
        
        _this.load.atlas('Level23_gate2','assets/gradeAssets/2.3/gate2.png' ,'json/gradeJson/2.3/gate2.json');
        _this.load.image('Level23_Line23','assets/gradeAssets/2.3/Line23.png');
        
        _this.load.atlas('Level23_treee','assets/gradeAssets/2.3/treee.png' ,'json/gradeJson/2.3/treee.json');
        _this.load.image('Level23_Line24','assets/gradeAssets/2.3/Line24.png');
        
        _this.load.atlas('Level23_ladder2','assets/gradeAssets/2.3/ladder2.png' ,'json/gradeJson/2.3/ladder2.json');
        _this.load.atlas('Level23_ropes11','assets/gradeAssets/2.3/ropes11.png' ,'json/gradeJson/2.3/ropes11.json');
        _this.load.image('Level23_Line28','assets/gradeAssets/2.3/Line28.png');
        _this.load.image('Level23_rope11','assets/gradeAssets/2.3/rope11.png');
        
        _this.load.atlas('Level23_door111','assets/gradeAssets/2.3/door111.png' ,'json/gradeJson/2.3/door111.json');
        _this.load.image('Level23_Line27','assets/gradeAssets/2.3/Line27.png');
        
        _this.load.atlas('Level23_petrol111','assets/gradeAssets/2.3/petrol111.png' ,'json/gradeJson/2.3/petrol111.json');
        _this.load.image('Level23_Line26','assets/gradeAssets/2.3/Line26.png');
        
        _this.load.atlas('Level23_flower111','assets/gradeAssets/2.3/flower111.png' ,'json/gradeJson/2.3/flower111.json');
        _this.load.image('Level23_Line25','assets/gradeAssets/2.3/Line25.png');
        
        _this.load.atlas('Level23_car111','assets/gradeAssets/2.3/car111.png' ,'json/gradeJson/2.3/car111.json');
        _this.load.atlas('Level23_ropes111','assets/gradeAssets/2.3/ropes111.png' ,'json/gradeJson/2.3/ropes111.json');
        _this.load.image('Level23_Line32','assets/gradeAssets/2.3/Line32.png');
        _this.load.image('Level23_rope111','assets/gradeAssets/2.3/rope111.png');
        
        _this.load.atlas('Level23_gate21','assets/gradeAssets/2.3/gate21.png' ,'json/gradeJson/2.3/gate21.json');
        _this.load.image('Level23_Line31','assets/gradeAssets/2.3/Line31.png');
        
         _this.load.atlas('Level23_longtable111','assets/gradeAssets/2.3/longtable111.png' ,'json/gradeJson/2.3/longtable111.json');
        _this.load.image('Level23_Line30','assets/gradeAssets/2.3/Line30.png');
        
        _this.load.atlas('Level23_shoes111','assets/gradeAssets/2.3/shoes111.png' ,'json/gradeJson/2.3/shoes111.json');
        _this.load.image('Level23_Line29','assets/gradeAssets/2.3/Line29.png');
		
		/*_this.load.audio('Eng_23_1', 'questionSounds/2.3/English/2.3_1.mp3');
        _this.load.audio('Eng_23_2', 'questionSounds/2.3/English/2.3_2.mp3');
        _this.load.audio('Eng_23_3', 'questionSounds/2.3/English/2.3_3.mp3');
        _this.load.audio('Eng_23_4', 'questionSounds/2.3/English/2.3_4.mp3');
        _this.load.audio('Eng_23_5', 'questionSounds/2.3/English/2.3_5.mp3');
        _this.load.audio('Eng_23_6', 'questionSounds/2.3/English/2.3_6.mp3');
        _this.load.audio('Eng_23_7', 'questionSounds/2.3/English/2.3_7.mp3');
        _this.load.audio('Eng_23_8', 'questionSounds/2.3/English/2.3_8.mp3');
        _this.load.audio('Eng_23_4option', 'questionSounds/2.3/English/2.3_4 option.mp3');
        
        
        _this.load.audio('Kan_23_1', 'questionSounds/2.3/Kannada/2.3_1.mp3');
        _this.load.audio('Kan_23_2', 'questionSounds/2.3/Kannada/2.3_2.mp3');
        _this.load.audio('Kan_23_3', 'questionSounds/2.3/Kannada/2.3_3.mp3');
        _this.load.audio('Kan_23_4', 'questionSounds/2.3/Kannada/2.3_4.mp3');
        _this.load.audio('Kan_23_5', 'questionSounds/2.3/Kannada/2.3_5.mp3');
        _this.load.audio('Kan_23_6', 'questionSounds/2.3/Kannada/2.3_6.mp3');
        _this.load.audio('Kan_23_7', 'questionSounds/2.3/Kannada/2.3_7.mp3');
        _this.load.audio('Kan_23_8', 'questionSounds/2.3/Kannada/2.3_8.mp3');
        
        _this.load.audio('Hin_23_1', 'questionSounds/2.3/Hindi/2.3_1.mp3');
        _this.load.audio('Hin_23_2', 'questionSounds/2.3/Hindi/2.3_2.mp3');
        _this.load.audio('Hin_23_3', 'questionSounds/2.3/Hindi/2.3_3.mp3');
        _this.load.audio('Hin_23_4', 'questionSounds/2.3/Hindi/2.3_4.mp3');
        _this.load.audio('Hin_23_5', 'questionSounds/2.3/Hindi/2.3_5.mp3');
        _this.load.audio('Hin_23_6', 'questionSounds/2.3/Hindi/2.3_6.mp3');
        _this.load.audio('Hin_23_7', 'questionSounds/2.3/Hindi/2.3_7.mp3');
        _this.load.audio('Hin_23_8', 'questionSounds/2.3/Hindi/2.3_8.mp3');*/
	},
	
	addgame3_1Assets:function()
	{
		_this.load.image('Level31_bg1','assets/gradeAssets/3.1/bg1.png');
        _this.load.image('Level31_bg3','assets/gradeAssets/3.1/bg3.png');
       // _this.load.image('Level31_tittleBaar','assets/gradeAssets/3.1/tittleBaar.png');
       // _this.load.atlas('Level31_replay','assets/gradeAssets/3.1/reply.png' ,'json/gradeJson/3.1/reply.json');
       // _this.load.atlas('Level31_btn','assets/gradeAssets/3.1/btn.png' ,'json/gradeJson/3.1/btn.json');
       // _this.load.atlas('Level31_backbtn','assets/gradeAssets/3.1/backbtn.png' ,'json/gradeJson/3.1/backbtn.json');
       // _this.load.atlas('Level31_speaker','assets/gradeAssets/3.1/speaker.png' ,'json/gradeJson/3.1/speaker.json');
       // _this.load.atlas('Level31_starAnim','assets/gradeAssets/3.1/starAnim.png','json/gradeJson/3.1/starAnim.json');
        _this.load.image('Level31_sh1','assets/gradeAssets/3.1/sh1.png');
        _this.load.image('Level31_sh2','assets/gradeAssets/3.1/sh2.png');
        _this.load.image('Level31_sh3','assets/gradeAssets/3.1/sh3.png');
        _this.load.image('Level31_sh4','assets/gradeAssets/3.1/sh4.png');
        _this.load.image('Level31_sh5','assets/gradeAssets/3.1/sh5.png');
        _this.load.image('Level31_sh6','assets/gradeAssets/3.1/sh6.png');
        _this.load.image('Level31_sh7','assets/gradeAssets/3.1/sh7.png');
        _this.load.image('Level31_sh8','assets/gradeAssets/3.1/sh8.png');
        _this.load.image('Level31_sh9','assets/gradeAssets/3.1/sh9.png');
        _this.load.image('Level31_sh10','assets/gradeAssets/3.1/sh10.png');
        _this.load.image('Level31_sh11','assets/gradeAssets/3.1/sh11.png');
        //_this.load.image('Level31_sh12','assets/gradeAssets/3.1/sh12.png');
        _this.load.image('Level31_sh13','assets/gradeAssets/3.1/sh13.png');
        _this.load.image('Level31_sh14','assets/gradeAssets/3.1/sh14.png');
        _this.load.image('Level31_sh15','assets/gradeAssets/3.1/sh15.png');
        _this.load.image('Level31_sh16','assets/gradeAssets/3.1/sh16.png');
        _this.load.image('Level31_sh17','assets/gradeAssets/3.1/sh17.png');
        _this.load.image('Level31_sh18','assets/gradeAssets/3.1/sh18.png');
        _this.load.image('Level31_sh19','assets/gradeAssets/3.1/sh19.png');
        _this.load.image('Level31_sh20','assets/gradeAssets/3.1/sh20.png');
        _this.load.image('Level31_sh21','assets/gradeAssets/3.1/sh21.png');
        _this.load.image('Level31_sh22','assets/gradeAssets/3.1/sh22.png');
        _this.load.image('Level31_sh23','assets/gradeAssets/3.1/sh23.png');
        _this.load.image('Level31_sh24','assets/gradeAssets/3.1/sh24.png');
        
        _this.load.atlas('Level31_watermelon','assets/gradeAssets/3.1/watermelon.png' ,'json/gradeJson/3.1/watermelon.json');
        _this.load.atlas('Level31_cherry','assets/gradeAssets/3.1/cherry.png' ,'json/gradeJson/3.1/cherry.json');

        _this.load.atlas('Level31_leaf1','assets/gradeAssets/3.1/leaf1.png' ,'json/gradeJson/3.1/leaf1.json');
        _this.load.atlas('Level31_bottle1','assets/gradeAssets/3.1/bottle1.png' ,'json/gradeJson/3.1/bottle1.json');

        _this.load.atlas('Level31_crow1','assets/gradeAssets/3.1/crow1.png' ,'json/gradeJson/3.1/crow1.json');
        _this.load.atlas('Level31_lizard1','assets/gradeAssets/3.1/lizard1.png' ,'json/gradeJson/3.1/lizard1.json');
        
        _this.load.atlas('Level31_car1','assets/gradeAssets/3.1/car1.png' ,'json/gradeJson/3.1/car1.json');
        _this.load.atlas('Level31_chair1','assets/gradeAssets/3.1/chair1.png' ,'json/gradeJson/3.1/chair1.json');
         
        _this.load.atlas('Level31_dog1','assets/gradeAssets/3.1/dog1.png' ,'json/gradeJson/3.1/dog1.json');
        _this.load.atlas('Level31_bird1','assets/gradeAssets/3.1/bird1.png' ,'json/gradeJson/3.1/bird1.json');
        
        _this.load.atlas('Level31_bee1','assets/gradeAssets/3.1/bee1.png' ,'json/gradeJson/3.1/bee1.json');
        _this.load.atlas('Level31_elephant1','assets/gradeAssets/3.1/elephant1.png' ,'json/gradeJson/3.1/elephant1.json');
        
        _this.load.atlas('Level31_bottle2','assets/gradeAssets/3.1/bottle2.png' ,'json/gradeJson/3.1/bottle2.json');
        _this.load.atlas('Level31_key1','assets/gradeAssets/3.1/key1.png' ,'json/gradeJson/3.1/key1.json');
        
        _this.load.atlas('Level31_suitcase','assets/gradeAssets/3.1/suitcase.png' ,'json/gradeJson/3.1/suitcase.json');
        _this.load.atlas('Level31_spanner','assets/gradeAssets/3.1/spanner.png' ,'json/gradeJson/3.1/spanner.json');
        
        _this.load.atlas('Level31_scooter1','assets/gradeAssets/3.1/scooter1.png' ,'json/gradeJson/3.1/scooter1.json');
        _this.load.atlas('Level31_bulb1','assets/gradeAssets/3.1/bulb1.png' ,'json/gradeJson/3.1/bulb1.json');
        
        _this.load.atlas('Level31_tree1','assets/gradeAssets/3.1/tree1.png' ,'json/gradeJson/3.1/tree1.json');
        _this.load.atlas('Level31_bird2','assets/gradeAssets/3.1/bird2.png' ,'json/gradeJson/3.1/bird2.json');
        
        _this.load.atlas('Level31_croc1','assets/gradeAssets/3.1/croc1.png' ,'json/gradeJson/3.1/croc1.json');
        _this.load.atlas('Level31_snake1','assets/gradeAssets/3.1/snake1.png' ,'json/gradeJson/3.1/snake1.json');
        
        _this.load.atlas('Level31_book1','assets/gradeAssets/3.1/book1.png' ,'json/gradeJson/3.1/book1.json');
        _this.load.atlas('Level31_bread1','assets/gradeAssets/3.1/bread1.png' ,'json/gradeJson/3.1/bread1.json');
		
		
		
		/*_this.load.audio('goingdown', 'questionSounds/3.1/goingdown.mp3');
        _this.load.audio('goingup', 'questionSounds/3.1/goingup.mp3');
        _this.load.audio('E1_31a', 'questionSounds/3.1/E1a.mp3');
        _this.load.audio('E1_31b', 'questionSounds/3.1/E1b.mp3');
        _this.load.audio('H1_31a', 'questionSounds/3.1/H1a.mp3');
        _this.load.audio('H1_31b', 'questionSounds/3.1/H1b.mp3');
        _this.load.audio('K1_31a', 'questionSounds/3.1/K1a.mp3');
        _this.load.audio('K1_31b', 'questionSounds/3.1/K1b.mp3');*/
	},
	
	addgame3_2AAssets:function()
	{
		/*//game assets.
        _this.load.image('Level32A_gameBg','assets/gradeAssets/3.2A/gameAssets/gameBg.png');
        
        _this.load.image('Level32A_weight1','assets/gradeAssets/3.2A/gameAssets/weight1.png');
        _this.load.image('Level32A_weight2','assets/gradeAssets/3.2A/gameAssets/weight2.png');
        _this.load.image('Level32A_weight3','assets/gradeAssets/3.2A/gameAssets/weight3.png');
        
        _this.load.atlas('Level32A_Can','assets/gradeAssets/3.2A/gameAssets/Can.png','json/gradeJson/3.2A/Can.json');
        _this.load.atlas('Level32A_Carrot','assets/gradeAssets/3.2A/gameAssets/Carot.png','json/gradeJson/3.2A/Carot.json');
        _this.load.atlas('Level32A_Coin','assets/gradeAssets/3.2A/gameAssets/Coin.png','json/gradeJson/3.2A/Coin.json');
        _this.load.atlas('Level32A_Ball','assets/gradeAssets/3.2A/gameAssets/Ball.png','json/gradeJson/3.2A/Ball.json');
        _this.load.atlas('Level32A_Book','assets/gradeAssets/3.2A/gameAssets/Book.png','json/gradeJson/3.2A/Book.json');
        _this.load.atlas('Level32A_Banana','assets/gradeAssets/3.2A/gameAssets/Banana.png','json/gradeJson/3.2A/Banana.json');
        _this.load.atlas('Level32A_Comb','assets/gradeAssets/3.2A/gameAssets/comb.png','json/gradeJson/3.2A/comb.json');
        _this.load.atlas('Level32A_Eraser','assets/gradeAssets/3.2A/gameAssets/eraser.png','json/gradeJson/3.2A/eraser.json');
        _this.load.atlas('Level32A_Eraser2','assets/gradeAssets/3.2A/gameAssets/eraser2.png','json/gradeJson/3.2A/eraser2.json');
        _this.load.atlas('Level32A_Glass','assets/gradeAssets/3.2A/gameAssets/Glass.png','json/gradeJson/3.2A/Glass.json');
        _this.load.atlas('Level32A_Glass2','assets/gradeAssets/3.2A/gameAssets/Glass2.png','json/gradeJson/3.2A/Glass2.json');
        _this.load.atlas('Level32A_Mug','assets/gradeAssets/3.2A/gameAssets/Mug.png','json/gradeJson/3.2A/Mug.json');
        _this.load.atlas('Level32A_Key','assets/gradeAssets/3.2A/gameAssets/Key.png','json/gradeJson/3.2A/Key.json');
        _this.load.atlas('Level32A_Pappaya','assets/gradeAssets/3.2A/gameAssets/Pappaya.png','json/gradeJson/3.2A/Pappaya.json');
        _this.load.atlas('Level32A_Pencil','assets/gradeAssets/3.2A/gameAssets/Pencil.png','json/gradeJson/3.2A/Pencil.json');
        _this.load.atlas('Level32A_ScrewDriver','assets/gradeAssets/3.2A/gameAssets/ScrewDriver.png','json/gradeJson/3.2A/ScrewDriver.json');
        _this.load.atlas('Level32A_Shoe','assets/gradeAssets/3.2A/gameAssets/Shoe.png','json/gradeJson/3.2A/Shoe.json');
 
        
        _this.load.image('Level32A_level2Bg','assets/gradeAssets/3.2A/gameAssets/level2/level2Bg.png');
        _this.load.image('Level32A_txtbox','assets/gradeAssets/3.2A/gameAssets/level2/box.png');
        _this.load.atlas('Level32A_numbg','assets/gradeAssets/3.2A/gameAssets/level2/numbg.png','json/gradeJson/3.2A/numbg.json');
        _this.load.atlas('Level32A_rightBtn','assets/gradeAssets/3.2A/gameAssets/level2/rightBtn.png','json/gradeJson/3.2A/rightBtn.json');
        _this.load.atlas('Level32A_wrongBtn','assets/gradeAssets/3.2A/gameAssets/level2/wrongBtn.png','json/gradeJson/3.2A/wrongBtn.json');
		
		
		_this.load.audio('slide', 'questionSounds/3.2A/slide.mp3');
        
        
       /* _this.load.audio('ElevelD', 'questionSounds/3.2A/ElevelD.mp3');
        _this.load.audio('HlevelD', 'questionSounds/3.2A/HlevelD.mp3');
        _this.load.audio('KlevelD', 'questionSounds/3.2A/KlevelD.mp3');
        _this.load.audio('ElevelCa', 'questionSounds/3.2A/ElevelCa.mp3');
        _this.load.audio('ElevelCb', 'questionSounds/3.2A/ElevelCb.mp3');
        _this.load.audio('HlevelCa', 'questionSounds/3.2A/HlevelCa.mp3');
        _this.load.audio('HlevelCb', 'questionSounds/3.2A/HlevelCb.mp3');
        _this.load.audio('KlevelCa', 'questionSounds/3.2A/KlevelCa.mp3');
        _this.load.audio('KlevelCb', 'questionSounds/3.2A/KlevelCb.mp3');
        
        _this.load.audio('Eng_32A1', 'questionSounds/3.2A/Eng_3.2A1.mp3');
        _this.load.audio('Eng_32A2', 'questionSounds/3.2A/Eng_3.2A2.mp3');
        _this.load.audio('Hin_32A1', 'questionSounds/3.2A/Hin_3.2A1.mp3');
        _this.load.audio('Hin_32A2', 'questionSounds/3.2A/Hin_3.2A2.mp3');
        _this.load.audio('Kan_32A1', 'questionSounds/3.2A/Kan_3.2A1.mp3');
        _this.load.audio('Kan_32A2', 'questionSounds/3.2A/Kan_3.2A2.mp3');*/


        //game assets.
        _this.load.image('Level32A_gameBg','assets/gradeAssets/3.2A/gameAssets/gameBg.png');
        
        _this.load.image('Level32A_weight1','assets/gradeAssets/3.2A/gameAssets/weight1.png');
        _this.load.image('Level32A_weight2','assets/gradeAssets/3.2A/gameAssets/weight2.png');
        _this.load.image('Level32A_weight3','assets/gradeAssets/3.2A/gameAssets/weight3.png');
        
        _this.load.atlas('Level32A_Can','assets/gradeAssets/3.2A/gameAssets/Can.png','json/gradeJson/3.2A/Can.json');
        _this.load.atlas('Level32A_Carrot','assets/gradeAssets/3.2A/gameAssets/Carot.png','json/gradeJson/3.2A/Carot.json');
        _this.load.atlas('Level32A_Coin','assets/gradeAssets/3.2A/gameAssets/Coin.png','json/gradeJson/3.2A/Coin.json');
        _this.load.atlas('Level32A_Ball','assets/gradeAssets/3.2A/gameAssets/Ball.png','json/gradeJson/3.2A/Ball.json');
        _this.load.atlas('Level32A_Book','assets/gradeAssets/3.2A/gameAssets/Book.png','json/gradeJson/3.2A/Book.json');
        _this.load.atlas('Level32A_Banana','assets/gradeAssets/3.2A/gameAssets/Banana.png','json/gradeJson/3.2A/Banana.json');
        _this.load.atlas('Level32A_Comb','assets/gradeAssets/3.2A/gameAssets/comb.png','json/gradeJson/3.2A/comb.json');
        _this.load.atlas('Level32A_Eraser','assets/gradeAssets/3.2A/gameAssets/eraser.png','json/gradeJson/3.2A/eraser.json');
        _this.load.atlas('Level32A_Eraser2','assets/gradeAssets/3.2A/gameAssets/eraser2.png','json/gradeJson/3.2A/eraser2.json');
        _this.load.atlas('Level32A_Glass','assets/gradeAssets/3.2A/gameAssets/Glass.png','json/gradeJson/3.2A/Glass.json');
        _this.load.atlas('Level32A_Glass2','assets/gradeAssets/3.2A/gameAssets/Glass2.png','json/gradeJson/3.2A/Glass2.json');
        _this.load.atlas('Level32A_Mug','assets/gradeAssets/3.2A/gameAssets/Mug.png','json/gradeJson/3.2A/Mug.json');
        _this.load.atlas('Level32A_Key','assets/gradeAssets/3.2A/gameAssets/Key.png','json/gradeJson/3.2A/Key.json');
        _this.load.atlas('Level32A_Pappaya','assets/gradeAssets/3.2A/gameAssets/Pappaya.png','json/gradeJson/3.2A/Pappaya.json');
        _this.load.atlas('Level32A_Pencil','assets/gradeAssets/3.2A/gameAssets/Pencil.png','json/gradeJson/3.2A/Pencil.json');
        _this.load.atlas('Level32A_ScrewDriver','assets/gradeAssets/3.2A/gameAssets/ScrewDriver.png','json/gradeJson/3.2A/ScrewDriver.json');
        _this.load.atlas('Level32A_Shoe','assets/gradeAssets/3.2A/gameAssets/Shoe.png','json/gradeJson/3.2A/Shoe.json');
 
        
        _this.load.image('Level32A_level2Bg','assets/gradeAssets/3.2A/gameAssets/level2/level2Bg.png');
        _this.load.image('Level32A_txtbox','assets/gradeAssets/3.2A/gameAssets/level2/box.png');
        _this.load.atlas('Level32A_numbg','assets/gradeAssets/3.2A/gameAssets/level2/numbg.png','json/gradeJson/3.2A/numbg.json');
        _this.load.atlas('Level32A_rightBtn','assets/gradeAssets/3.2A/gameAssets/level2/rightBtn.png','json/gradeJson/3.2A/rightBtn.json');
        _this.load.atlas('Level32A_wrongBtn','assets/gradeAssets/3.2A/gameAssets/level2/wrongBtn.png','json/gradeJson/3.2A/wrongBtn.json');
		
		
		_this.load.audio('slide', 'questionSounds/3.2A/slide.mp3');
        
        
       /* _this.load.audio('ElevelD', 'questionSounds/3.2A/ElevelD.mp3');
        _this.load.audio('HlevelD', 'questionSounds/3.2A/HlevelD.mp3');
        _this.load.audio('KlevelD', 'questionSounds/3.2A/KlevelD.mp3');
        _this.load.audio('ElevelCa', 'questionSounds/3.2A/ElevelCa.mp3');
        _this.load.audio('ElevelCb', 'questionSounds/3.2A/ElevelCb.mp3');
        _this.load.audio('HlevelCa', 'questionSounds/3.2A/HlevelCa.mp3');
        _this.load.audio('HlevelCb', 'questionSounds/3.2A/HlevelCb.mp3');
        _this.load.audio('KlevelCa', 'questionSounds/3.2A/KlevelCa.mp3');
        _this.load.audio('KlevelCb', 'questionSounds/3.2A/KlevelCb.mp3');
        
        _this.load.audio('Eng_32A1', 'questionSounds/3.2A/Eng_3.2A1.mp3');
        _this.load.audio('Eng_32A2', 'questionSounds/3.2A/Eng_3.2A2.mp3');
        _this.load.audio('Hin_32A1', 'questionSounds/3.2A/Hin_3.2A1.mp3');
        _this.load.audio('Hin_32A2', 'questionSounds/3.2A/Hin_3.2A2.mp3');
        _this.load.audio('Kan_32A1', 'questionSounds/3.2A/Kan_3.2A1.mp3');
        _this.load.audio('Kan_32A2', 'questionSounds/3.2A/Kan_3.2A2.mp3');*/
	},
	
	addgame1_1BAssets:function()
	{
		
		_this.load.image('Level11B_background','assets/gradeAssets/1.1B/bg.png');
		_this.load.image('Level11B_bg1','assets/gradeAssets/1.1B/bg1.png');
		//_this.load.image('Level11B_langBg', 'assets/gradeAssets/1.1B/langbg.png');
        
		
		//_this.load.atlas('Level11B_heading','assets/gradeAssets/1.1B/hedding.png' ,'json/gradeJson/1.1B/heading.json');
		//_this.load.atlas('Level11B_heading1','assets/gradeAssets/1.1B/heading1.png' ,'json/gradeJson/1.1B/heading1.json');
		//_this.load.image('Level11B_line','Line.png');
		//_this.load.image('Level11B_celeb', 'assets/gradeAssets/1.1B/c.png');
        //_this.load.atlas('Level11B_backbtn','assets/gradeAssets/1.1B/backbtn.png' ,'json/gradeJson/1.1B/backbtn.json');
       // _this.load.atlas('Level11B_speaker','assets/gradeAssets/1.1B/speaker.png' ,'json/gradeJson/1.1B/speaker.json');
        //_this.load.image('Level11B_headingLine', 'assets/gradeAssets/1.1B/headingLine.png');
        
		//_this.load.atlas('Level11B_starAnim','assets/gradeAssets/1.1B/starAnim.png','json/gradeJson/1.1B/starAnim.json');
        //_this.load.atlas('Level11B_btn','assets/gradeAssets/1.1B/btn.png','json/gradeJson/1.1B/btn.json');
        //_this.load.image('Level11B_tittleBar', 'assets/gradeAssets/1.1B/tittleBar.png');
        //_this.load.atlas('Level11B_replay', 'assets/gradeAssets/1.1B/reply.png', 'json/gradeJson/1.1B/reply.json');
        
        
        
		_this.load.atlas('Level11B_flagmain11', 'assets/gradeAssets/1.1B/m1.png', 'json/gradeJson/1.1B/m1.json');
		_this.load.image('Level11B_Ans1','assets/gradeAssets/1.1B/o11.png');
		_this.load.image('Level11B_Ans2','assets/gradeAssets/1.1B/o12.png');
		_this.load.image('Level11B_Ans3','assets/gradeAssets/1.1B/o13.png');

		_this.load.atlas('Level11B_flagmain12', 'assets/gradeAssets/1.1B/m2.png', 'json/gradeJson/1.1B/m2.json');
		_this.load.image('Level11B_Ans21','assets/gradeAssets/1.1B/o21.png');
		_this.load.image('Level11B_Ans22','assets/gradeAssets/1.1B/o22.png');
		_this.load.image('Level11B_Ans32','assets/gradeAssets/1.1B/o23.png');

		_this.load.atlas('Level11B_flagmain31', 'assets/gradeAssets/1.1B/m3.png', 'json/gradeJson/1.1B/m3.json');
		_this.load.image('Level11B_Ans31','assets/gradeAssets/1.1B/o31.png');
		_this.load.image('Level11B_Ans23','assets/gradeAssets/1.1B/o32.png');
		_this.load.image('Level11B_Ans33','assets/gradeAssets/1.1B/o33.png');

		_this.load.atlas('Level11B_flagmain41', 'assets/gradeAssets/1.1B/m4.png', 'json/gradeJson/1.1B/m4.json');
		_this.load.image('Level11B_Ans41','assets/gradeAssets/1.1B/o41.png');
		_this.load.image('Level11B_Ans42','assets/gradeAssets/1.1B/o42.png');
		_this.load.image('Level11B_Ans43','assets/gradeAssets/1.1B/o43.png');

		_this.load.atlas('Level11B_flagmain51', 'assets/gradeAssets/1.1B/m5.png', 'json/gradeJson/1.1B/m5.json');
		_this.load.image('Level11B_Ans51','assets/gradeAssets/1.1B/o51.png');
		_this.load.image('Level11B_Ans52','assets/gradeAssets/1.1B/o52.png');
		_this.load.image('Level11B_Ans53','assets/gradeAssets/1.1B/o53.png');

		_this.load.atlas('Level11B_flagmain61', 'assets/gradeAssets/1.1B/m6.png', 'json/gradeJson/1.1B/m6.json');
		_this.load.image('Level11B_Ans61','assets/gradeAssets/1.1B/o61.png');
		_this.load.image('Level11B_Ans62','assets/gradeAssets/1.1B/o62.png');
		_this.load.image('Level11B_Ans63','assets/gradeAssets/1.1B/o63.png');
		
		/*_this.load.audio('Eng_11A1', 'questionSounds/1.1B/English/1.1A1.mp3');
        _this.load.audio('Eng_11A2', 'questionSounds/1.1B/English/1.1A2.mp3');
        _this.load.audio('Eng_11A2Option', 'questionSounds/1.1B/English/1.1A2 Option.mp3');
        _this.load.audio('Kan_11A1', 'questionSounds/1.1B/Kannada/1.1A1.mp3');
        _this.load.audio('Kan_11A2', 'questionSounds/1.1B/Kannada/1.1A2.mp3');
        _this.load.audio('Hin_11A1', 'questionSounds/1.1B/Hindi/1.1A1.mp3');
        _this.load.audio('Hin_11A2', 'questionSounds/1.1B/Hindi/1.1A2.mp3');
        _this.load.audio('Hin_11A2Option', 'questionSounds/1.1B/Hindi/1.1A2 oPTION.mp3');*/
	},
	
	
	/*addgame1_2AAssets:function()
	{
		//load common assets/gradeAssets/1.2A
		_this.load.image('Level12A_background','assets/gradeAssets/1.2A/firstSceneBg.png');
		_this.load.image('Level12A_navBg','assets/gradeAssets/1.2A/navBg.png');
		
		_this.load.image('Level12A_stick', 'assets/gradeAssets/1.2A/stick.png');
		_this.load.image('Level12A_tittleBar', 'assets/gradeAssets/1.2A/tittleBar.png');
		
		_this.load.atlas('Level12A_btn','assets/gradeAssets/1.2A/btn.png','json/gradeJson/1.2A/btn.json');
		_this.load.atlas('Level12A_backBtn','assets/gradeAssets/1.2A/backBtn.png','json/gradeJson/1.2A/backBtn.json');
		_this.load.atlas('Level12A_speakerBtn','assets/gradeAssets/1.2A/speakerBtn.png','json/gradeJson/1.2A/speakerBtn.json');
		_this.load.atlas('Level12A_starAnim','assets/gradeAssets/1.2A/starAnim.png','json/gradeJson/1.2A/starAnim.json');
		
		
		//scene1 assets/gradeAssets/1.2A
        //_this.load.image('Level12A_scene1wind1', 'assets/gradeAssets/1.2A/reduced/scene1wind1.png');
        _this.load.atlas('Level12A_scene1wind1', 'assets/gradeAssets/1.2A/reduced/scene1wind1.png','json/gradeJson/1.2A/scene1wind1.json');
        _this.load.atlas('Level12A_scene1wind2', 'assets/gradeAssets/1.2A/reduced/scene1wind2.png','json/gradeJson/1.2A/scene1wind2.json');
        _this.load.atlas('Level12A_scene1wind3', 'assets/gradeAssets/1.2A/reduced/scene1wind3.png','json/gradeJson/1.2A/scene1wind3.json');
        _this.load.atlas('Level12A_scene1wind33', 'assets/gradeAssets/1.2A/reduced/scene1wind33.png','json/gradeJson/1.2A/scene1wind33.json');
        
        _this.load.atlas('Level12A_scene2wind1', 'assets/gradeAssets/1.2A/reduced/scene2wind1.png','json/gradeJson/1.2A/scene2wind1.json');
        _this.load.atlas('Level12A_scene2wind2', 'assets/gradeAssets/1.2A/reduced/scene2wind2.png','json/gradeJson/1.2A/scene2wind2.json');
        _this.load.atlas('Level12A_scene2wind3', 'assets/gradeAssets/1.2A/reduced/scene2wind3.png','json/gradeJson/1.2A/scene2wind3.json');
        
        _this.load.atlas('Level12A_scene3wind1', 'assets/gradeAssets/1.2A/reduced/scene3wind1.png','json/gradeJson/1.2A/scene3wind1.json');
        _this.load.atlas('Level12A_scene3wind2', 'assets/gradeAssets/1.2A/reduced/scene3wind2.png','json/gradeJson/1.2A/scene3wind2.json');
        _this.load.atlas('Level12A_scene3wind3', 'assets/gradeAssets/1.2A/reduced/scene3wind3.png','json/gradeJson/1.2A/scene3wind3.json'); 
        
       // _this.load.atlas('Level12A_scene1spin1', 'assets/gradeAssets/1.2A/reduced/scene1spin1.png','json/gradeJson/1.2A/scene1spin1.json');
      //  _this.load.atlas('Level12A_scene1spin2', 'assets/gradeAssets/1.2A/reduced/scene1spin2.png','json/gradeJson/1.2A/scene1spin2.json');
      //  _this.load.atlas('Level12A_scene1spin3', 'assets/gradeAssets/1.2A/reduced/scene1spin3.png','json/gradeJson/1.2A/scene1spin3.json');
       // _this.load.atlas('Level12A_scene1wind33', 'assets/gradeAssets/1.2A/reduced/scene1wind33.png','json/gradeJson/1.2A/scene1wind33.json');
        
      //  _this.load.atlas('Level12A_scene2spin1', 'assets/gradeAssets/1.2A/reduced/scene2spin1.png','json/gradeJson/1.2A/scene2spin1.json');
      //  _this.load.atlas('Level12A_scene2spin2', 'assets/gradeAssets/1.2A/reduced/scene2spin2.png','json/gradeJson/1.2A/scene2spin2.json');
      //  _this.load.atlas('Level12A_scene2spin3', 'assets/gradeAssets/1.2A/reduced/scene2spin3.png','json/gradeJson/1.2A/scene2spin3.json');
        
      //  _this.load.atlas('Level12A_scene3spin1', 'assets/gradeAssets/1.2A/reduced/scene3spin1.png','json/gradeJson/1.2A/scene3spin1.json');
      //  _this.load.atlas('Level12A_scene3spin2', 'assets/gradeAssets/1.2A/reduced/scene3spin2.png','json/gradeJson/1.2A/scene3spin2.json');
      //  _this.load.atlas('Level12A_scene3spin3', 'assets/gradeAssets/1.2A/reduced/scene3spin3.png','json/gradeJson/1.2A/scene3spin3.json');
        
		//		_this.load.image('Level12A_scene1wind2', 'assets/gradeAssets/1.2A/reduced/scene1wind2.png');
		//		_this.load.image('Level12A_scene1wind3', 'assets/gradeAssets/1.2A/reduced/scene1wind3.png');
		//		_this.load.image('Level12A_scene2wind1', 'assets/gradeAssets/1.2A/reduced/scene2wind1.png');
		//		_this.load.image('Level12A_scene2wind2', 'assets/gradeAssets/1.2A/reduced/scene2wind2.png');
		//		_this.load.image('Level12A_scene2wind3', 'assets/gradeAssets/1.2A/reduced/scene2wind3.png');
		//		_this.load.image('Level12A_scene3wind1', 'assets/gradeAssets/1.2A/reduced/scene3wind1.png');
		//		_this.load.image('Level12A_scene3wind2', 'assets/gradeAssets/1.2A/reduced/scene3wind2.png');
		//		_this.load.image('Level12A_scene3wind3', 'assets/gradeAssets/1.2A/reduced/scene3wind3.png');
		//	
		//scene2 assets/gradeAssets/1.2A
		//_this.load.atlas('Level12A_scene2Btn','assets/gradeAssets/1.2A/levelFirstScene/scene2Btn.png','json/gradeJson/1.2A/scene2Btn.json');
		_this.load.atlas('Level12A_scene2Btn1','assets/gradeAssets/1.2A/scene2Btn1.png','json/gradeJson/1.2A/scene2Btn1.json');
		_this.load.atlas('Level12A_scene2Btn2','assets/gradeAssets/1.2A/scene2Btn2.png','json/gradeJson/1.2A/scene2Btn2.json');
		_this.load.atlas('Level12A_scene2Btn3','assets/gradeAssets/1.2A/scene2Btn3.png','json/gradeJson/1.2A/scene2Btn3.json');
		
		//scene3 assets/gradeAssets/1.2A
        _this.load.atlas('Level12A_pencil','assets/gradeAssets/1.2A/levelLastScene/pencil.png' ,'json/gradeJson/1.2A/pencil.json');
  
        
		_this.load.image('Level12A_centerCircle', 'assets/gradeAssets/1.2A/centerCircle.png');
		_this.load.image('Level12A_wind2Center', 'assets/gradeAssets/1.2A/levelLastScene/wind2Center.png');
        _this.load.atlas('Level12A_replay', 'assets/gradeAssets/1.2A/reply.png', 'json/gradeJson/1.2A/reply.json');
		
		
		//_this.load.image('Level12A_crayon', 'assets/gradeAssets/1.2A/levelLastScene/crayon.png');
		_this.load.image('Level12A_eraser', 'assets/gradeAssets/1.2A/levelLastScene/eraser.png');
        

		//_this.load.atlas('Level12A_wind1','assets/gradeAssets/1.2A/levelLastScene/wind1.png' ,'json/gradeJson/1.2A/wind1.json');
		//_this.load.atlas('Level12A_scene3wind2','assets/gradeAssets/1.2A/levelLastScene/wind2new.png' ,'json/gradeJson/1.2A/wind2new.json');
		//_this.load.atlas('Level12A_windmel','assets/gradeAssets/1.2A/levelLastScene/wind3new3.png' ,'json/gradeJson/1.2A/wind3new3.json');
		//_this.load.atlas('Level12A_windmel2','assets/gradeAssets/1.2A/levelLastScene/wind32New.png' ,'json/gradeJson/1.2A/wind32New.json');
        _this.load.atlas('Level12A_checkbtn','assets/gradeAssets/1.2A/levelLastScene/checkbtn.png' ,'json/gradeJson/1.2A/checkbtn.json');

        
        
        _this.load.atlas('Level12A_wind1','assets/gradeAssets/1.2A/levelLastScene/w1.png' ,'json/gradeJson/1.2A/w1.json');
        _this.load.atlas('Level12A_wind2','assets/gradeAssets/1.2A/levelLastScene/w2.png' ,'json/gradeJson/1.2A/w2.json');
        _this.load.atlas('Level12A_wind3','assets/gradeAssets/1.2A/levelLastScene/w3.png' ,'json/gradeJson/1.2A/w3.json');
        
        
        _this.load.image('Level12A_wind11', 'assets/gradeAssets/1.2A/reduced/wind11.png');
        _this.load.image('Level12A_wind12', 'assets/gradeAssets/1.2A/reduced/wind12.png');
        _this.load.image('Level12A_wind13', 'assets/gradeAssets/1.2A/reduced/wind13.png');
        _this.load.image('Level12A_wind21', 'assets/gradeAssets/1.2A/reduced/wind21.png');
        _this.load.image('Level12A_wind22', 'assets/gradeAssets/1.2A/reduced/wind22.png');
        _this.load.image('Level12A_wind23', 'assets/gradeAssets/1.2A/reduced/wind23.png');
        _this.load.image('Level12A_wind31', 'assets/gradeAssets/1.2A/reduced/wind31.png');
        _this.load.image('Level12A_wind32', 'assets/gradeAssets/1.2A/reduced/wind32.png');
        _this.load.image('Level12A_wind33', 'assets/gradeAssets/1.2A/reduced/wind33.png');
		
		_this.load.audio('spin2', 'questionSounds/1.2A/spin2.mp3');
        _this.load.audio('Eng_12A1', 'questionSounds/1.2A/English/1.2A1.mp3');
        _this.load.audio('Eng_12A2', 'questionSounds/1.2A/English/1.2A2.mp3');
        _this.load.audio('Eng_12A3', 'questionSounds/1.2A/English/1.2A3.mp3');
        _this.load.audio('Eng_12B1', 'questionSounds/1.2A/English/1.2B1.mp3');
        _this.load.audio('Eng_12B2', 'questionSounds/1.2A/English/1.2B2.mp3');
        _this.load.audio('Eng_12B3', 'questionSounds/1.2A/English/1.2B3.mp3');
        _this.load.audio('Eng_12B5', 'questionSounds/1.2A/English/1.2B5.mp3');
        _this.load.audio('Eng_12C1', 'questionSounds/1.2A/English/1.2C1.mp3');
        _this.load.audio('Eng_12C2', 'questionSounds/1.2A/English/1.2C2.mp3');
        _this.load.audio('Eng_12C3', 'questionSounds/1.2A/English/1.2C3.mp3');
        _this.load.audio('Kan_12A1', 'questionSounds/1.2A/Kannada/1.2A1.mp3');
        _this.load.audio('Kan_12A2', 'questionSounds/1.2A/Kannada/1.2A2.mp3');
        _this.load.audio('Kan_12A3', 'questionSounds/1.2A/Kannada/1.2A3.mp3');
        _this.load.audio('Kan_12B1', 'questionSounds/1.2A/Kannada/1.2B1.mp3');
        _this.load.audio('Kan_12B2', 'questionSounds/1.2A/Kannada/1.2B2.mp3');
        _this.load.audio('Kan_12B3', 'questionSounds/1.2A/Kannada/1.2B3.mp3');
        _this.load.audio('Kan_12B5', 'questionSounds/1.2A/Kannada/1.2B5.mp3');
        _this.load.audio('Kan_12C1', 'questionSounds/1.2A/Kannada/1.2C1.mp3');
        _this.load.audio('Kan_12C2', 'questionSounds/1.2A/Kannada/1.2C2.mp3');
        _this.load.audio('Kan_12C3', 'questionSounds/1.2A/Kannada/1.2C3.mp3');
        _this.load.audio('Hin_12A1', 'questionSounds/1.2A/Hindi/1.2A1.mp3');
        _this.load.audio('Hin_12A2', 'questionSounds/1.2A/Hindi/1.2A2.mp3');
        _this.load.audio('Hin_12A3', 'questionSounds/1.2A/Hindi/1.2A3.mp3');
        _this.load.audio('Hin_12B1', 'questionSounds/1.2A/Hindi/1.2B1.mp3');
        _this.load.audio('Hin_12B2', 'questionSounds/1.2A/Hindi/1.2B2.mp3');
        _this.load.audio('Hin_12B3', 'questionSounds/1.2A/Hindi/1.2B3.mp3');
        _this.load.audio('Hin_12B5', 'questionSounds/1.2A/Hindi/1.2B5.mp3');
        _this.load.audio('Hin_12C1', 'questionSounds/1.2A/Hindi/1.2C1.mp3');
        _this.load.audio('Hin_12C2', 'questionSounds/1.2A/Hindi/1.2C2.mp3');
        _this.load.audio('Hin_12C3', 'questionSounds/1.2A/Hindi/1.2C3.mp3');
	},
	*/
	addgame1_2AAssets:function()
	{
		_this.load.image('Level12A_background','assets/gradeAssets/1.2A/firstSceneBg.png');
		
		_this.load.image('Level12A_stick', 'assets/gradeAssets/1.2A/stick.png');
		//scene1 assets/gradeAssets/1.2A
        //_this.load.image('Level12A_scene1wind1', 'assets/gradeAssets/1.2A/reduced/scene1wind1.png');
        _this.load.atlas('Level12A_scene1wind1', 'assets/gradeAssets/1.2A/reduced/scene1wind1.png','json/gradeJson/1.2A/scene1wind1.json');
        _this.load.atlas('Level12A_scene1wind2', 'assets/gradeAssets/1.2A/reduced/scene1wind2.png','json/gradeJson/1.2A/scene1wind2.json');
        _this.load.atlas('Level12A_scene1wind3', 'assets/gradeAssets/1.2A/reduced/scene1wind3.png','json/gradeJson/1.2A/scene1wind3.json');
        _this.load.atlas('Level12A_scene1wind33', 'assets/gradeAssets/1.2A/reduced/scene1wind33.png','json/gradeJson/1.2A/scene1wind33.json');
        
        _this.load.atlas('Level12A_scene2wind1', 'assets/gradeAssets/1.2A/reduced/scene2wind1.png','json/gradeJson/1.2A/scene2wind1.json');
        _this.load.atlas('Level12A_scene2wind2', 'assets/gradeAssets/1.2A/reduced/scene2wind2.png','json/gradeJson/1.2A/scene2wind2.json');
        _this.load.atlas('Level12A_scene2wind3', 'assets/gradeAssets/1.2A/reduced/scene2wind3.png','json/gradeJson/1.2A/scene2wind3.json');
        
        _this.load.atlas('Level12A_scene3wind1', 'assets/gradeAssets/1.2A/reduced/scene3wind1.png','json/gradeJson/1.2A/scene3wind1.json');
        _this.load.atlas('Level12A_scene3wind2', 'assets/gradeAssets/1.2A/reduced/scene3wind2.png','json/gradeJson/1.2A/scene3wind2.json');
        _this.load.atlas('Level12A_scene3wind3', 'assets/gradeAssets/1.2A/reduced/scene3wind3.png','json/gradeJson/1.2A/scene3wind3.json'); 
        
       // _this.load.atlas('Level12A_scene1spin1', 'assets/gradeAssets/1.2A/reduced/scene1spin1.png','json/gradeJson/1.2A/scene1spin1.json');
      //  _this.load.atlas('Level12A_scene1spin2', 'assets/gradeAssets/1.2A/reduced/scene1spin2.png','json/gradeJson/1.2A/scene1spin2.json');
      //  _this.load.atlas('Level12A_scene1spin3', 'assets/gradeAssets/1.2A/reduced/scene1spin3.png','json/gradeJson/1.2A/scene1spin3.json');
       // _this.load.atlas('Level12A_scene1wind33', 'assets/gradeAssets/1.2A/reduced/scene1wind33.png','json/gradeJson/1.2A/scene1wind33.json');
        
      //  _this.load.atlas('Level12A_scene2spin1', 'assets/gradeAssets/1.2A/reduced/scene2spin1.png','json/gradeJson/1.2A/scene2spin1.json');
      //  _this.load.atlas('Level12A_scene2spin2', 'assets/gradeAssets/1.2A/reduced/scene2spin2.png','json/gradeJson/1.2A/scene2spin2.json');
      //  _this.load.atlas('Level12A_scene2spin3', 'assets/gradeAssets/1.2A/reduced/scene2spin3.png','json/gradeJson/1.2A/scene2spin3.json');
        
      //  _this.load.atlas('Level12A_scene3spin1', 'assets/gradeAssets/1.2A/reduced/scene3spin1.png','json/gradeJson/1.2A/scene3spin1.json');
      //  _this.load.atlas('Level12A_scene3spin2', 'assets/gradeAssets/1.2A/reduced/scene3spin2.png','json/gradeJson/1.2A/scene3spin2.json');
      //  _this.load.atlas('Level12A_scene3spin3', 'assets/gradeAssets/1.2A/reduced/scene3spin3.png','json/gradeJson/1.2A/scene3spin3.json');
        
		//		_this.load.image('Level12A_scene1wind2', 'assets/gradeAssets/1.2A/reduced/scene1wind2.png');
		//		_this.load.image('Level12A_scene1wind3', 'assets/gradeAssets/1.2A/reduced/scene1wind3.png');
		//		_this.load.image('Level12A_scene2wind1', 'assets/gradeAssets/1.2A/reduced/scene2wind1.png');
		//		_this.load.image('Level12A_scene2wind2', 'assets/gradeAssets/1.2A/reduced/scene2wind2.png');
		//		_this.load.image('Level12A_scene2wind3', 'assets/gradeAssets/1.2A/reduced/scene2wind3.png');
		//		_this.load.image('Level12A_scene3wind1', 'assets/gradeAssets/1.2A/reduced/scene3wind1.png');
		//		_this.load.image('Level12A_scene3wind2', 'assets/gradeAssets/1.2A/reduced/scene3wind2.png');
		//		_this.load.image('Level12A_scene3wind3', 'assets/gradeAssets/1.2A/reduced/scene3wind3.png');
		//	
		//scene2 assets/gradeAssets/1.2A
		//_this.load.atlas('Level12A_scene2Btn','assets/gradeAssets/1.2A/levelFirstScene/scene2Btn.png','json/gradeJson/1.2A/scene2Btn.json');
		_this.load.atlas('Level12A_scene2Btn1','assets/gradeAssets/1.2A/scene2Btn1.png','json/gradeJson/1.2A/scene2Btn1.json');
		_this.load.atlas('Level12A_scene2Btn2','assets/gradeAssets/1.2A/scene2Btn2.png','json/gradeJson/1.2A/scene2Btn2.json');
		_this.load.atlas('Level12A_scene2Btn3','assets/gradeAssets/1.2A/scene2Btn3.png','json/gradeJson/1.2A/scene2Btn3.json');
		
		//scene3 assets/gradeAssets/1.2A
        _this.load.atlas('Level12A_pencil','assets/gradeAssets/1.2A/levelLastScene/pencil.png' ,'json/gradeJson/1.2A/pencil.json');
  
        
		_this.load.image('Level12A_centerCircle', 'assets/gradeAssets/1.2A/centerCircle.png');
		_this.load.image('Level12A_wind2Center', 'assets/gradeAssets/1.2A/levelLastScene/wind2Center.png');
        _this.load.atlas('Level12A_replay', 'assets/gradeAssets/1.2A/reply.png', 'json/gradeJson/1.2A/reply.json');
		
		
		//_this.load.image('Level12A_crayon', 'assets/gradeAssets/1.2A/levelLastScene/crayon.png');
		_this.load.image('Level12A_eraser', 'assets/gradeAssets/1.2A/levelLastScene/eraser.png');
        

		//_this.load.atlas('Level12A_wind1','assets/gradeAssets/1.2A/levelLastScene/wind1.png' ,'json/gradeJson/1.2A/wind1.json');
		//_this.load.atlas('Level12A_scene3wind2','assets/gradeAssets/1.2A/levelLastScene/wind2new.png' ,'json/gradeJson/1.2A/wind2new.json');
		//_this.load.atlas('Level12A_windmel','assets/gradeAssets/1.2A/levelLastScene/wind3new3.png' ,'json/gradeJson/1.2A/wind3new3.json');
		//_this.load.atlas('Level12A_windmel2','assets/gradeAssets/1.2A/levelLastScene/wind32New.png' ,'json/gradeJson/1.2A/wind32New.json');
        _this.load.atlas('Level12A_checkbtn','assets/gradeAssets/1.2A/levelLastScene/checkbtn.png' ,'json/gradeJson/1.2A/checkbtn.json');

        
        
        _this.load.atlas('Level12A_wind1','assets/gradeAssets/1.2A/levelLastScene/w1.png' ,'json/gradeJson/1.2A/w1.json');
        _this.load.atlas('Level12A_wind2','assets/gradeAssets/1.2A/levelLastScene/w2.png' ,'json/gradeJson/1.2A/w2.json');
        _this.load.atlas('Level12A_wind3','assets/gradeAssets/1.2A/levelLastScene/w3.png' ,'json/gradeJson/1.2A/w3.json');
        
        
       /* _this.load.image('Level12A_wind11', 'assets/gradeAssets/1.2A/reduced/wind11.png');
        _this.load.image('Level12A_wind12', 'assets/gradeAssets/1.2A/reduced/wind12.png');
        _this.load.image('Level12A_wind13', 'assets/gradeAssets/1.2A/reduced/wind13.png');
        _this.load.image('Level12A_wind21', 'assets/gradeAssets/1.2A/reduced/wind21.png');
        _this.load.image('Level12A_wind22', 'assets/gradeAssets/1.2A/reduced/wind22.png');
        _this.load.image('Level12A_wind23', 'assets/gradeAssets/1.2A/reduced/wind23.png');
        _this.load.image('Level12A_wind31', 'assets/gradeAssets/1.2A/reduced/wind31.png');
        _this.load.image('Level12A_wind32', 'assets/gradeAssets/1.2A/reduced/wind32.png');
        _this.load.image('Level12A_wind33', 'assets/gradeAssets/1.2A/reduced/wind33.png');*/
		
		/*_this.load.audio('spin2', 'questionSounds/1.2A/spin2.mp3');
        _this.load.audio('Eng_12A1', 'questionSounds/1.2A/English/1.2A1.mp3');
        _this.load.audio('Eng_12A2', 'questionSounds/1.2A/English/1.2A2.mp3');
        _this.load.audio('Eng_12A3', 'questionSounds/1.2A/English/1.2A3.mp3');
        _this.load.audio('Eng_12B1', 'questionSounds/1.2A/English/1.2B1.mp3');
        _this.load.audio('Eng_12B2', 'questionSounds/1.2A/English/1.2B2.mp3');
        _this.load.audio('Eng_12B3', 'questionSounds/1.2A/English/1.2B3.mp3');
        _this.load.audio('Eng_12B5', 'questionSounds/1.2A/English/1.2B5.mp3');
        _this.load.audio('Eng_12C1', 'questionSounds/1.2A/English/1.2C1.mp3');
        _this.load.audio('Eng_12C2', 'questionSounds/1.2A/English/1.2C2.mp3');
        _this.load.audio('Eng_12C3', 'questionSounds/1.2A/English/1.2C3.mp3');
        _this.load.audio('Kan_12A1', 'questionSounds/1.2A/Kannada/1.2A1.mp3');
        _this.load.audio('Kan_12A2', 'questionSounds/1.2A/Kannada/1.2A2.mp3');
        _this.load.audio('Kan_12A3', 'questionSounds/1.2A/Kannada/1.2A3.mp3');
        _this.load.audio('Kan_12B1', 'questionSounds/1.2A/Kannada/1.2B1.mp3');
        _this.load.audio('Kan_12B2', 'questionSounds/1.2A/Kannada/1.2B2.mp3');
        _this.load.audio('Kan_12B3', 'questionSounds/1.2A/Kannada/1.2B3.mp3');
        _this.load.audio('Kan_12B5', 'questionSounds/1.2A/Kannada/1.2B5.mp3');
        _this.load.audio('Kan_12C1', 'questionSounds/1.2A/Kannada/1.2C1.mp3');
        _this.load.audio('Kan_12C2', 'questionSounds/1.2A/Kannada/1.2C2.mp3');
        _this.load.audio('Kan_12C3', 'questionSounds/1.2A/Kannada/1.2C3.mp3');
        _this.load.audio('Hin_12A1', 'questionSounds/1.2A/Hindi/1.2A1.mp3');
        _this.load.audio('Hin_12A2', 'questionSounds/1.2A/Hindi/1.2A2.mp3');
        _this.load.audio('Hin_12A3', 'questionSounds/1.2A/Hindi/1.2A3.mp3');
        _this.load.audio('Hin_12B1', 'questionSounds/1.2A/Hindi/1.2B1.mp3');
        _this.load.audio('Hin_12B2', 'questionSounds/1.2A/Hindi/1.2B2.mp3');
        _this.load.audio('Hin_12B3', 'questionSounds/1.2A/Hindi/1.2B3.mp3');
        _this.load.audio('Hin_12B5', 'questionSounds/1.2A/Hindi/1.2B5.mp3');
        _this.load.audio('Hin_12C1', 'questionSounds/1.2A/Hindi/1.2C1.mp3');
        _this.load.audio('Hin_12C2', 'questionSounds/1.2A/Hindi/1.2C2.mp3');
        _this.load.audio('Hin_12C3', 'questionSounds/1.2A/Hindi/1.2C3.mp3');*/
	},
	
	
	addgame2_4AAssets:function()
	{
		/*_this.load.image('Level24A_bg1','assets/gradeAssets/2.4A/commonAssets/bg1.png');
        
        
        
       // _this.load.atlas('Level24A_backbtn','assets/gradeAssets/2.4A/commonAssets/backbtn.png' ,'json/gradeJson/2.4A/backbtn.json');
        //_this.load.atlas('Level24A_speaker','assets/gradeAssets/2.4A/commonAssets/speaker.png' ,'json/gradeJson/2.4A/speaker.json');
        //_this.load.atlas('Level24A_starAnim','assets/gradeAssets/2.4A/commonAssets/starAnim.png','json/gradeJson/2.4A/starAnim.json');
        _this.load.image('Level24A_cloud','assets/gradeAssets/2.4A/commonAssets/cloud.png');
       // _this.load.atlas('Level24A_btn','assets/gradeAssets/2.4A/commonAssets/btn.png','json/gradeJson/2.4A/btn.json');
        _this.load.image('Level24A_bg3','assets/gradeAssets/2.4A/commonAssets/bg3.png');
        //_this.load.image('Level24A_tittleBaar','assets/gradeAssets/2.4A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level24A_replay','assets/gradeAssets/2.4A/commonAssets/reply.png' ,'json/gradeJson/2.4A/reply.json');
        _this.load.atlas('Level24A_numbg','assets/gradeAssets/2.4A/commonAssets/numbg.png' ,'json/gradeJson/2.4A/numbg.json');
        _this.load.atlas('Level24A_rightBtn','assets/gradeAssets/2.4A/commonAssets/rightBtn.png' ,'json/gradeJson/2.4A/rightBtn.json');
        _this.load.atlas('Level24A_wrongBtn','assets/gradeAssets/2.4A/commonAssets/wrongBtn.png' ,'json/gradeJson/2.4A/wrongBtn.json');
        
        
        _this.load.atlas('Level24A_tape15cm','assets/gradeAssets/2.4A/commonAssets/tape15cm.png' ,'json/gradeJson/2.4A/tape15cm.json');
        _this.load.atlas('Level24A_tape30cm','assets/gradeAssets/2.4A/commonAssets/tape30cm.png' ,'json/gradeJson/2.4A/tape30cm.json');
        _this.load.atlas('Level24A_tape100cm','assets/gradeAssets/2.4A/commonAssets/tape100cm.png' ,'json/gradeJson/2.4A/tape100cm.json');
        _this.load.atlas('Level24A_scaleMarker','assets/gradeAssets/2.4A/commonAssets/scaleMarker.png' ,'json/gradeJson/2.4A/scaleMarker.json');
        _this.load.image('Level24A_scaleMarkerNew','assets/gradeAssets/2.4A/commonAssets/scaleMarkerNew.png');
        
        _this.load.image('Level24A_txtbox','assets/gradeAssets/2.4A/commonAssets/box.png');
        _this.load.image('Level24A_tape1','assets/gradeAssets/2.4A/commonAssets/tape1.png');
        _this.load.image('Level24A_tape2','assets/gradeAssets/2.4A/commonAssets/tape2.png');
        _this.load.image('Level24A_tape3','assets/gradeAssets/2.4A/commonAssets/tape3.png');
       // _this.load.image('Level24A_tape15cm','assets/gradeAssets/2.4A/commonAssets/tape15cm.png');
       // _this.load.image('Level24A_tape30cm','assets/gradeAssets/2.4A/commonAssets/tape30cm.png');
       // _this.load.image('Level24A_tape100cm','assets/gradeAssets/2.4A/commonAssets/tape100cm.png');
        _this.load.image('Level24A_scale','assets/gradeAssets/2.4A/commonAssets/scale.png');
        _this.load.image('Level24A_scaleNew','assets/gradeAssets/2.4A/commonAssets/scaleNew.png');
        //_this.load.image('Level24A_scaleMarker','assets/gradeAssets/2.4A/commonAssets/scaleMarker.png');
        _this.load.image('Level24A_tapeTint','assets/gradeAssets/2.4A/commonAssets/tapeTint.png');
        
        
        //My files to load
        _this.load.atlas('Level24A_shoe','assets/gradeAssets/2.4A/gameAssets/shoe.png' ,'json/gradeJson/2.4A/shoe.json');
        _this.load.atlas('Level24A_shoe2','assets/gradeAssets/2.4A/gameAssets/shoe2.png' ,'json/gradeJson/2.4A/shoe2.json');
        _this.load.atlas('Level24A_fish','assets/gradeAssets/2.4A/gameAssets/fish.png' ,'json/gradeJson/2.4A/fish.json');
        _this.load.atlas('Level24A_clip','assets/gradeAssets/2.4A/gameAssets/clip.png' ,'json/gradeJson/2.4A/clip.json');
        _this.load.atlas('Level24A_pencil','assets/gradeAssets/2.4A/gameAssets/pencil.png' ,'json/gradeJson/2.4A/pencil.json');
        _this.load.atlas('Level24A_screwDriver','assets/gradeAssets/2.4A/gameAssets/screwDriver.png' ,'json/gradeJson/2.4A/screwDriver.json');
        _this.load.atlas('Level24A_key','assets/gradeAssets/2.4A/gameAssets/key.png' ,'json/gradeJson/2.4A/key.json');
        _this.load.atlas('Level24A_watch','assets/gradeAssets/2.4A/gameAssets/watch.png' ,'json/gradeJson/2.4A/watch.json');
        _this.load.atlas('Level24A_pen','assets/gradeAssets/2.4A/gameAssets/pen.png' ,'json/gradeJson/2.4A/pen.json');
        _this.load.atlas('Level24A_scale1','assets/gradeAssets/2.4A/gameAssets/scale1.png' ,'json/gradeJson/2.4A/scale1.json');
        _this.load.atlas('Level24A_scale2','assets/gradeAssets/2.4A/gameAssets/scale2.png' ,'json/gradeJson/2.4A/scale2.json');
        _this.load.atlas('Level24A_bat','assets/gradeAssets/2.4A/gameAssets/bat.png' ,'json/gradeJson/2.4A/bat.json');
        _this.load.atlas('Level24A_cup','assets/gradeAssets/2.4A/gameAssets/cup.png' ,'json/gradeJson/2.4A/cup.json');
        _this.load.atlas('Level24A_jug','assets/gradeAssets/2.4A/gameAssets/jug.png' ,'json/gradeJson/2.4A/jug.json');
        _this.load.atlas('Level24A_chair','assets/gradeAssets/2.4A/gameAssets/chair.png' ,'json/gradeJson/2.4A/chair.json');
        _this.load.atlas('Level24A_mug','assets/gradeAssets/2.4A/gameAssets/mug.png' ,'json/gradeJson/2.4A/mug.json');
        _this.load.atlas('Level24A_table','assets/gradeAssets/2.4A/gameAssets/table.png' ,'json/gradeJson/2.4A/table.json');
        _this.load.atlas('Level24A_pot','assets/gradeAssets/2.4A/gameAssets/pot.png' ,'json/gradeJson/2.4A/pot.json');
        
        
        _this.load.atlas('Level24A_level2Scale1','assets/gradeAssets/2.4A/gameAssets/level2Scale1.png' ,'json/gradeJson/2.4A/level2Scale1.json');
        _this.load.atlas('Level24A_level2Scale2','assets/gradeAssets/2.4A/gameAssets/level2Scale2.png' ,'json/gradeJson/2.4A/level2Scale2.json');
        _this.load.atlas('Level24A_level2Scale3','assets/gradeAssets/2.4A/gameAssets/level2Scale3.png' ,'json/gradeJson/2.4A/level2Scale3.json');
        _this.load.atlas('Level24A_tree','assets/gradeAssets/2.4A/gameAssets/tree.png' ,'json/gradeJson/2.4A/tree.json');
        _this.load.atlas('Level24A_tape4','assets/gradeAssets/2.4A/commonAssets/tape4.png' ,'json/gradeJson/2.4A/tape4.json');
        _this.load.atlas('Level24A_car','assets/gradeAssets/2.4A/gameAssets/car.png' ,'json/gradeJson/2.4A/car.json');
        _this.load.atlas('Level24A_carpet','assets/gradeAssets/2.4A/gameAssets/carpet.png' ,'json/gradeJson/2.4A/carpet.json');
		
		
		
		/*_this.load.audio('Eng_24A1', 'questionSounds/2.4A/English/2.4A1.mp3');
        _this.load.audio('Eng_24A2', 'questionSounds/2.4A/English/2.4A2.mp3');
        _this.load.audio('Eng_24B1', 'questionSounds/2.4A/English/2.4B1.mp3');
        _this.load.audio('Kan_24A1', 'questionSounds/2.4A/Kannada/2.4A1.mp3');
        _this.load.audio('Kan_24A2', 'questionSounds/2.4A/Kannada/2.4A2.mp3');
        _this.load.audio('Kan_24B1', 'questionSounds/2.4A/Kannada/2.4B1.mp3');
        _this.load.audio('Hin_24A1', 'questionSounds/2.4A/Hindi/2.4A1.mp3');
        _this.load.audio('Hin_24A2', 'questionSounds/2.4A/Hindi/2.4A2.mp3');
        _this.load.audio('Hin_24B1', 'questionSounds/2.4A/Hindi/2.4B1.mp3');*/


        _this.load.image('Level24A_bg1','assets/gradeAssets/2.4A/commonAssets/bg1-old.png');
        _this.load.image('Level24B_bg1','assets/gradeAssets/2.4A/commonAssets/bg1.png');
        
        
        
       // _this.load.atlas('Level24A_backbtn','assets/gradeAssets/2.4A/commonAssets/backbtn.png' ,'json/gradeJson/2.4A/backbtn.json');
        //_this.load.atlas('Level24A_speaker','assets/gradeAssets/2.4A/commonAssets/speaker.png' ,'json/gradeJson/2.4A/speaker.json');
        //_this.load.atlas('Level24A_starAnim','assets/gradeAssets/2.4A/commonAssets/starAnim.png','json/gradeJson/2.4A/starAnim.json');
        _this.load.image('Level24A_cloud','assets/gradeAssets/2.4A/commonAssets/cloud.png');
       // _this.load.atlas('Level24A_btn','assets/gradeAssets/2.4A/commonAssets/btn.png','json/gradeJson/2.4A/btn.json');
        _this.load.image('Level24A_bg3','assets/gradeAssets/2.4A/commonAssets/bg3.png');
        //_this.load.image('Level24A_tittleBaar','assets/gradeAssets/2.4A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level24A_replay','assets/gradeAssets/2.4A/commonAssets/reply.png' ,'json/gradeJson/2.4A/reply.json');
        _this.load.atlas('Level24A_numbg','assets/gradeAssets/2.4A/commonAssets/numbg.png' ,'json/gradeJson/2.4A/numbg.json');
        _this.load.atlas('Level24A_rightBtn','assets/gradeAssets/2.4A/commonAssets/rightBtn.png' ,'json/gradeJson/2.4A/rightBtn.json');
        _this.load.atlas('Level24A_wrongBtn','assets/gradeAssets/2.4A/commonAssets/wrongBtn.png' ,'json/gradeJson/2.4A/wrongBtn.json');
        
        
        _this.load.atlas('Level24A_tape15cm','assets/gradeAssets/2.4A/commonAssets/tape15cm.png' ,'json/gradeJson/2.4A/tape15cm.json');
        _this.load.atlas('Level24A_tape30cm','assets/gradeAssets/2.4A/commonAssets/tape30cm.png' ,'json/gradeJson/2.4A/tape30cm.json');
        _this.load.atlas('Level24A_tape100cm','assets/gradeAssets/2.4A/commonAssets/tape100cm.png' ,'json/gradeJson/2.4A/tape100cm.json');
        _this.load.atlas('Level24A_scaleMarker','assets/gradeAssets/2.4A/commonAssets/scaleMarker.png' ,'json/gradeJson/2.4A/scaleMarker.json');
        _this.load.image('Level24A_scaleMarkerNew','assets/gradeAssets/2.4A/commonAssets/scaleMarkerNew.png');
        
        _this.load.image('Level24A_txtbox','assets/gradeAssets/2.4A/commonAssets/box.png');
        _this.load.image('Level24A_tape1','assets/gradeAssets/2.4A/commonAssets/tape1.png');
        _this.load.image('Level24A_tape2','assets/gradeAssets/2.4A/commonAssets/tape2.png');
        _this.load.image('Level24A_tape3','assets/gradeAssets/2.4A/commonAssets/tape3.png');
       // _this.load.image('Level24A_tape15cm','assets/gradeAssets/2.4A/commonAssets/tape15cm.png');
       // _this.load.image('Level24A_tape30cm','assets/gradeAssets/2.4A/commonAssets/tape30cm.png');
       // _this.load.image('Level24A_tape100cm','assets/gradeAssets/2.4A/commonAssets/tape100cm.png');
        _this.load.image('Level24A_scale','assets/gradeAssets/2.4A/commonAssets/scale.png');
        _this.load.image('Level24A_scaleNew','assets/gradeAssets/2.4A/commonAssets/scaleNew.png');
        //_this.load.image('Level24A_scaleMarker','assets/gradeAssets/2.4A/commonAssets/scaleMarker.png');
        _this.load.image('Level24A_tapeTint','assets/gradeAssets/2.4A/commonAssets/tapeTint.png');
        
        
        //My files to load
        _this.load.atlas('Level24A_shoe','assets/gradeAssets/2.4A/gameAssets/shoe.png' ,'json/gradeJson/2.4A/shoe.json');
        _this.load.atlas('Level24A_shoe2','assets/gradeAssets/2.4A/gameAssets/shoe2.png' ,'json/gradeJson/2.4A/shoe2.json');
        _this.load.atlas('Level24A_fish','assets/gradeAssets/2.4A/gameAssets/fish.png' ,'json/gradeJson/2.4A/fish.json');
        _this.load.atlas('Level24A_clip','assets/gradeAssets/2.4A/gameAssets/clip.png' ,'json/gradeJson/2.4A/clip.json');
        _this.load.atlas('Level24A_pencil','assets/gradeAssets/2.4A/gameAssets/pencil.png' ,'json/gradeJson/2.4A/pencil.json');
        _this.load.atlas('Level24A_screwDriver','assets/gradeAssets/2.4A/gameAssets/screwDriver.png' ,'json/gradeJson/2.4A/screwDriver.json');
        _this.load.atlas('Level24A_key','assets/gradeAssets/2.4A/gameAssets/key.png' ,'json/gradeJson/2.4A/key.json');
        _this.load.atlas('Level24A_watch','assets/gradeAssets/2.4A/gameAssets/watch.png' ,'json/gradeJson/2.4A/watch.json');
        _this.load.atlas('Level24A_pen','assets/gradeAssets/2.4A/gameAssets/pen.png' ,'json/gradeJson/2.4A/pen.json');
        _this.load.atlas('Level24A_scale1','assets/gradeAssets/2.4A/gameAssets/scale1.png' ,'json/gradeJson/2.4A/scale1.json');
        _this.load.atlas('Level24A_scale2','assets/gradeAssets/2.4A/gameAssets/scale2.png' ,'json/gradeJson/2.4A/scale2.json');
        _this.load.atlas('Level24A_bat','assets/gradeAssets/2.4A/gameAssets/bat.png' ,'json/gradeJson/2.4A/bat.json');
        _this.load.atlas('Level24A_cup','assets/gradeAssets/2.4A/gameAssets/cup.png' ,'json/gradeJson/2.4A/cup.json');
        _this.load.atlas('Level24A_jug','assets/gradeAssets/2.4A/gameAssets/jug.png' ,'json/gradeJson/2.4A/jug.json');
        _this.load.atlas('Level24A_chair','assets/gradeAssets/2.4A/gameAssets/chair.png' ,'json/gradeJson/2.4A/chair.json');
        _this.load.atlas('Level24A_mug','assets/gradeAssets/2.4A/gameAssets/mug.png' ,'json/gradeJson/2.4A/mug.json');
        _this.load.atlas('Level24A_table','assets/gradeAssets/2.4A/gameAssets/table.png' ,'json/gradeJson/2.4A/table.json');
        _this.load.atlas('Level24A_pot','assets/gradeAssets/2.4A/gameAssets/pot.png' ,'json/gradeJson/2.4A/pot.json');
        
        
        _this.load.atlas('Level24A_level2Scale1','assets/gradeAssets/2.4A/gameAssets/level2Scale1.png' ,'json/gradeJson/2.4A/level2Scale1.json');
        _this.load.atlas('Level24A_level2Scale2','assets/gradeAssets/2.4A/gameAssets/level2Scale2.png' ,'json/gradeJson/2.4A/level2Scale2.json');
        _this.load.atlas('Level24A_level2Scale3','assets/gradeAssets/2.4A/gameAssets/level2Scale3.png' ,'json/gradeJson/2.4A/level2Scale3.json');
        _this.load.atlas('Level24A_tree','assets/gradeAssets/2.4A/gameAssets/tree.png' ,'json/gradeJson/2.4A/tree.json');
        _this.load.atlas('Level24A_tape4','assets/gradeAssets/2.4A/commonAssets/tape4.png' ,'json/gradeJson/2.4A/tape4.json');
        _this.load.atlas('Level24A_car','assets/gradeAssets/2.4A/gameAssets/car.png' ,'json/gradeJson/2.4A/car.json');
        _this.load.atlas('Level24A_carpet','assets/gradeAssets/2.4A/gameAssets/carpet.png' ,'json/gradeJson/2.4A/carpet.json');
		
		_this.load.atlas('Level24B_birds1','assets/gradeAssets/2.4A/gameAssets/birds1.png' ,'json/gradeJson/2.4A/birds1.json');
        _this.load.atlas('Level24B_animals','assets/gradeAssets/2.4A/gameAssets/animals.png' ,'json/gradeJson/2.4A/animals.json');
        _this.load.atlas('Level24B_snake','assets/gradeAssets/2.4A/gameAssets/snake.png' ,'json/gradeJson/2.4A/snake.json');
        _this.load.atlas('Level24B_tables','assets/gradeAssets/2.4A/gameAssets/tables.png' ,'json/gradeJson/2.4A/tables.json');
        _this.load.atlas('Level24B_buildings','assets/gradeAssets/2.4A/gameAssets/buildings.png' ,'json/gradeJson/2.4A/buildings.json');
        _this.load.atlas('Level24B_table3','assets/gradeAssets/2.4A/gameAssets/table3.png' ,'json/gradeJson/2.4A/table3.json');
        _this.load.atlas('Level24B_gate','assets/gradeAssets/2.4A/gameAssets/gate.png' ,'json/gradeJson/2.4A/gate.json');
		
		/*_this.load.audio('Eng_24A1', 'questionSounds/2.4A/English/2.4A1.mp3');
        _this.load.audio('Eng_24A2', 'questionSounds/2.4A/English/2.4A2.mp3');
        _this.load.audio('Eng_24B1', 'questionSounds/2.4A/English/2.4B1.mp3');
        _this.load.audio('Kan_24A1', 'questionSounds/2.4A/Kannada/2.4A1.mp3');
        _this.load.audio('Kan_24A2', 'questionSounds/2.4A/Kannada/2.4A2.mp3');
        _this.load.audio('Kan_24B1', 'questionSounds/2.4A/Kannada/2.4B1.mp3');
        _this.load.audio('Hin_24A1', 'questionSounds/2.4A/Hindi/2.4A1.mp3');
        _this.load.audio('Hin_24A2', 'questionSounds/2.4A/Hindi/2.4A2.mp3');
        _this.load.audio('Hin_24B1', 'questionSounds/2.4A/Hindi/2.4B1.mp3');*/
        
	},
	
	
	addgame3_2BAssets:function()
	{
		//game assets.
        _this.load.image('Level32B_gameBg','assets/gradeAssets/3.2B/gameAssets/gameBg.png');
        
       
        
        _this.load.atlas('Level32B_Can','assets/gradeAssets/3.2B/gameAssets/Can.png','json/gradeJson/3.2B/Can.json');
        _this.load.atlas('Level32B_Carrot','assets/gradeAssets/3.2B/gameAssets/Carot.png','json/gradeJson/3.2B/Carot.json');
        _this.load.atlas('Level32B_Coin','assets/gradeAssets/3.2B/gameAssets/Coin.png','json/gradeJson/3.2B/Coin.json');
        _this.load.atlas('Level32B_Ball','assets/gradeAssets/3.2B/gameAssets/Ball.png','json/gradeJson/3.2B/Ball.json');
        _this.load.atlas('Level32B_Book','assets/gradeAssets/3.2B/gameAssets/Book.png','json/gradeJson/3.2B/Book.json');
        _this.load.atlas('Level32B_Banana','assets/gradeAssets/3.2B/gameAssets/Banana.png','json/gradeJson/3.2B/Banana.json');
        _this.load.atlas('Level32B_Comb','assets/gradeAssets/3.2B/gameAssets/comb.png','json/gradeJson/3.2B/comb.json');
        _this.load.atlas('Level32B_Eraser','assets/gradeAssets/3.2B/gameAssets/eraser.png','json/gradeJson/3.2B/eraser.json');
        _this.load.atlas('Level32B_Eraser2','assets/gradeAssets/3.2B/gameAssets/eraser2.png','json/gradeJson/3.2B/eraser2.json');
        _this.load.atlas('Level32B_Glass','assets/gradeAssets/3.2B/gameAssets/Glass.png','json/gradeJson/3.2B/Glass.json');
        _this.load.atlas('Level32B_Glass2','assets/gradeAssets/3.2B/gameAssets/Glass2.png','json/gradeJson/3.2B/Glass2.json');
        _this.load.atlas('Level32B_Mug','assets/gradeAssets/3.2B/gameAssets/Mug.png','json/gradeJson/3.2B/Mug.json');
        _this.load.atlas('Level32B_Key','assets/gradeAssets/3.2B/gameAssets/Key.png','json/gradeJson/3.2B/Key.json');
        _this.load.atlas('Level32B_Pappaya','assets/gradeAssets/3.2B/gameAssets/Pappaya.png','json/gradeJson/3.2B/Pappaya.json');
        _this.load.atlas('Level32B_Pencil','assets/gradeAssets/3.2B/gameAssets/Pencil.png','json/gradeJson/3.2B/Pencil.json');
        _this.load.atlas('Level32B_ScrewDriver','assets/gradeAssets/3.2B/gameAssets/ScrewDriver.png','json/gradeJson/3.2B/ScrewDriver.json');
        _this.load.atlas('Level32B_Shoe','assets/gradeAssets/3.2B/gameAssets/Shoe.png','json/gradeJson/3.2B/Shoe.json');
        
        //level2
        _this.load.image('Level32B_level2weight1','assets/gradeAssets/3.2B/gameAssets/level2/level2weight1.png');
        _this.load.image('Level32B_level2weight2','assets/gradeAssets/3.2B/gameAssets/level2/level2weight2.png');
        _this.load.image('Level32B_level2weight32','assets/gradeAssets/3.2B/gameAssets/level2/level2weight3.png');
        _this.load.image('Level32B_level2weight42','assets/gradeAssets/3.2B/gameAssets/level2/level2weight4.png');
        
        
        _this.load.image('Level32B_level2Bg','assets/gradeAssets/3.2B/gameAssets/level2/level2Bg.png');
        _this.load.image('Level32B_txtbox','assets/gradeAssets/3.2B/gameAssets/level2/box.png');
        _this.load.atlas('Level32B_numbg','assets/gradeAssets/3.2B/gameAssets/level2/numbg.png','json/gradeJson/3.2B/numbg.json');
        _this.load.atlas('Level32B_rightBtn','assets/gradeAssets/3.2B/gameAssets/level2/rightBtn.png','json/gradeJson/3.2B/rightBtn.json');
        _this.load.atlas('Level32B_wrongBtn','assets/gradeAssets/3.2B/gameAssets/level2/wrongBtn.png','json/gradeJson/3.2B/wrongBtn.json');
        
        _this.load.atlas('Level32B_Eraser2Anim','assets/gradeAssets/3.2B/gameAssets/eraser2Anim.png','json/gradeJson/3.2B/eraser2Anim.json');
        _this.load.atlas('Level32B_BananaAnim','assets/gradeAssets/3.2B/gameAssets/BananaAnim.png','json/gradeJson/3.2B/BananaAnim.json');
        _this.load.atlas('Level32B_CarrotAnim','assets/gradeAssets/3.2B/gameAssets/CarrotAnim.png','json/gradeJson/3.2B/CarrotAnim.json');
        _this.load.atlas('Level32B_CoinAnim','assets/gradeAssets/3.2B/gameAssets/CoinAnim.png','json/gradeJson/3.2B/CoinAnim.json');
        _this.load.atlas('Level32B_Glass2Anim','assets/gradeAssets/3.2B/gameAssets/GlassAnim.png','json/gradeJson/3.2B/GlassAnim.json');
        
        _this.load.atlas('Level32B_level2weight3','assets/gradeAssets/3.2B/gameAssets/level2/L2.png','json/gradeJson/3.2B/L2.json');
        _this.load.atlas('Level32B_level2weight4','assets/gradeAssets/3.2B/gameAssets/level2/R2.png','json/gradeJson/3.2B/R2.json');
		
		/*_this.load.audio('E_32a', 'questionSounds/3.2A/E2a.mp3');
        _this.load.audio('H_32a', 'questionSounds/3.2A/H2a.mp3');
        _this.load.audio('K_32a', 'questionSounds/3.2A/K2a.mp3');*/
	},
	
	addgame3_2CAssets:function()
	{
		//common for all games.
        //_this.load.atlas('Level32C_backbtn','assets/gradeAssets/3.2C/commonAssets/backbtn.png' ,'json/gradeJson/3.2C/backbtn.json');
        //_this.load.atlas('Level32C_speaker','assets/gradeAssets/3.2C/commonAssets/speaker.png' ,'json/gradeJson/3.2C/speaker.json');
        //_this.load.atlas('Level32C_starAnim','assets/gradeAssets/3.2C/commonAssets/starAnim.png','json/gradeJson/3.2C/starAnim.json');
       // _this.load.image('Level32C_tittleBaar','assets/gradeAssets/3.2C/commonAssets/tittleBaar.png');
       // _this.load.atlas('Level32C_replay','assets/gradeAssets/3.2C/commonAssets/reply.png' ,'json/gradeJson/3.2C/reply.json');
       // _this.load.atlas('Level32C_btn','assets/gradeAssets/3.2C/commonAssets/btn.png','json/gradeJson/3.2C/btn.json');
        _this.load.image('Level32C_bg','assets/gradeAssets/3.2C/commonAssets/bg.png');
         
        //game assets.
        _this.load.image('Level32C_gameBg','assets/gradeAssets/3.2C/gameAssets/gameBg.png');
        
        _this.load.image('Level32C_weight1','assets/gradeAssets/3.2C/gameAssets/weight1.png');
        _this.load.image('Level32C_weight2','assets/gradeAssets/3.2C/gameAssets/weight2.png');
        _this.load.image('Level32C_weight3','assets/gradeAssets/3.2C/gameAssets/weight3.png');
        
        _this.load.atlas('Level32C_Can','assets/gradeAssets/3.2C/gameAssets/Can.png','json/gradeJson/3.2C/Can.json');
        _this.load.atlas('Level32C_Carrot','assets/gradeAssets/3.2C/gameAssets/Carot.png','json/gradeJson/3.2C/Carot.json');
        _this.load.atlas('Level32C_Coin','assets/gradeAssets/3.2C/gameAssets/Coin.png','json/gradeJson/3.2C/Coin.json');
        _this.load.atlas('Level32C_Ball','assets/gradeAssets/3.2C/gameAssets/Ball.png','json/gradeJson/3.2C/Ball.json');
        _this.load.atlas('Level32C_Book','assets/gradeAssets/3.2C/gameAssets/Book.png','json/gradeJson/3.2C/Book.json');
        _this.load.atlas('Level32C_Banana','assets/gradeAssets/3.2C/gameAssets/Banana.png','json/gradeJson/3.2C/Banana.json');
        _this.load.atlas('Level32C_Comb','assets/gradeAssets/3.2C/gameAssets/comb.png','json/gradeJson/3.2C/comb.json');
        _this.load.atlas('Level32C_Eraser','assets/gradeAssets/3.2C/gameAssets/eraser.png','json/gradeJson/3.2C/eraser.json');
        _this.load.atlas('Level32C_Eraser2','assets/gradeAssets/3.2C/gameAssets/eraser2.png','json/gradeJson/3.2C/eraser2.json');
        _this.load.atlas('Level32C_Glass','assets/gradeAssets/3.2C/gameAssets/Glass.png','json/gradeJson/3.2C/Glass.json');
        _this.load.atlas('Level32C_Glass2','assets/gradeAssets/3.2C/gameAssets/Glass2.png','json/gradeJson/3.2C/Glass2.json');
        _this.load.atlas('Level32C_Mug','assets/gradeAssets/3.2C/gameAssets/Mug.png','json/gradeJson/3.2C/Mug.json');
        _this.load.atlas('Level32C_Key','assets/gradeAssets/3.2C/gameAssets/Key.png','json/gradeJson/3.2C/Key.json');
        _this.load.atlas('Level32C_Pappaya','assets/gradeAssets/3.2C/gameAssets/Pappaya.png','json/gradeJson/3.2C/Pappaya.json');
        _this.load.atlas('Level32C_Pencil','assets/gradeAssets/3.2C/gameAssets/Pencil.png','json/gradeJson/3.2C/Pencil.json');
        _this.load.atlas('Level32C_ScrewDriver','assets/gradeAssets/3.2C/gameAssets/ScrewDriver.png','json/gradeJson/3.2C/ScrewDriver.json');
        _this.load.atlas('Level32C_Shoe','assets/gradeAssets/3.2C/gameAssets/Shoe.png','json/gradeJson/3.2C/Shoe.json');
        
        //level2
        _this.load.image('Level32C_level2weight1','assets/gradeAssets/3.2C/gameAssets/level2/level2weight1.png');
        _this.load.image('Level32C_level2weight2','assets/gradeAssets/3.2C/gameAssets/level2/level2weight2.png');
        _this.load.image('Level32C_level2weight32','assets/gradeAssets/3.2C/gameAssets/level2/level2weight3.png');
        _this.load.image('Level32C_level2weight42','assets/gradeAssets/3.2C/gameAssets/level2/level2weight4.png');
        
        
        _this.load.image('Level32C_level2Bg','assets/gradeAssets/3.2C/gameAssets/level2/level2Bg.png');
        _this.load.image('Level32C_txtbox','assets/gradeAssets/3.2C/gameAssets/level2/box.png');
        _this.load.atlas('Level32C_numbg','assets/gradeAssets/3.2C/gameAssets/level2/numbg.png','json/gradeJson/3.2C/numbg.json');
        _this.load.atlas('Level32C_rightBtn','assets/gradeAssets/3.2C/gameAssets/level2/rightBtn.png','json/gradeJson/3.2C/rightBtn.json');
        _this.load.atlas('Level32C_wrongBtn','assets/gradeAssets/3.2C/gameAssets/level2/wrongBtn.png','json/gradeJson/3.2C/wrongBtn.json');
        
        _this.load.atlas('Level32C_Eraser2Anim','assets/gradeAssets/3.2C/gameAssets/eraser2Anim.png','json/gradeJson/3.2C/eraser2Anim.json');
        _this.load.atlas('Level32C_BananaAnim','assets/gradeAssets/3.2C/gameAssets/BananaAnim.png','json/gradeJson/3.2C/BananaAnim.json');
        _this.load.atlas('Level32C_CarrotAnim','assets/gradeAssets/3.2C/gameAssets/CarrotAnim.png','json/gradeJson/3.2C/CarrotAnim.json');
        _this.load.atlas('Level32C_CoinAnim','assets/gradeAssets/3.2C/gameAssets/CoinAnim.png','json/gradeJson/3.2C/CoinAnim.json');
        _this.load.atlas('Level32C_Glass2Anim','assets/gradeAssets/3.2C/gameAssets/GlassAnim.png','json/gradeJson/3.2C/GlassAnim.json');
        
        _this.load.atlas('Level32C_level2weight3','assets/gradeAssets/3.2C/gameAssets/level2/L2.png','json/gradeJson/3.2C/L2.json');
        _this.load.atlas('Level32C_level2weight4','assets/gradeAssets/3.2C/gameAssets/level2/R2.png','json/gradeJson/3.2C/R2.json');
       
             //level3
        _this.load.atlas('Level32C_bottle','assets/gradeAssets/3.2C/gameAssets/level3/bottle.png','json/gradeJson/3.2C/bottle.json');
        _this.load.atlas('Level32C_w1Anim','assets/gradeAssets/3.2C/gameAssets/level3/w1Anim.png','json/gradeJson/3.2C/w1Anim.json');
        _this.load.image('Level32C_w1','assets/gradeAssets/3.2C/gameAssets/level3/w1.png');
        _this.load.image('Level32C_w2','assets/gradeAssets/3.2C/gameAssets/level3/w2.png');
        _this.load.atlas('Level32C_w2Anim','assets/gradeAssets/3.2C/gameAssets/level3/w2Anim.png','json/gradeJson/3.2C/w2Anim.json');
        _this.load.atlas('Level32C_tomoto','assets/gradeAssets/3.2C/gameAssets/level3/tomoto.png','json/gradeJson/3.2C/tomoto.json');
        _this.load.atlas('Level32C_spoon','assets/gradeAssets/3.2C/gameAssets/level3/spoon.png','json/gradeJson/3.2C/spoon.json');
        _this.load.atlas('Level32C_eraser1','assets/gradeAssets/3.2C/gameAssets/level3/eraser1.png','json/gradeJson/3.2C/eraser1.json');
        _this.load.atlas('Level32C_rope','assets/gradeAssets/3.2C/gameAssets/level3/rope.png','json/gradeJson/3.2C/rope.json');
        _this.load.atlas('Level32C_leef','assets/gradeAssets/3.2C/gameAssets/level3/leef.png','json/gradeJson/3.2C/leef.json');
        _this.load.atlas('Level32C_coin1','assets/gradeAssets/3.2C/gameAssets/level3/coin1.png','json/gradeJson/3.2C/coin1.json');
        _this.load.atlas('Level32C_Comb1','assets/gradeAssets/3.2C/gameAssets/level3/Comb1.png','json/gradeJson/3.2C/Comb1.json');
        _this.load.atlas('Level32C_w1AnimGlow','assets/gradeAssets/3.2C/gameAssets/level3/w1AnimGlow.png','json/gradeJson/3.2C/w1AnimGlow.json');
        _this.load.atlas('Level32C_w2AnimGlow','assets/gradeAssets/3.2C/gameAssets/level3/w2AnimGlow.png','json/gradeJson/3.2C/w2AnimGlow.json');
        
        _this.load.atlas('Level32C_w22AnimGlow','assets/gradeAssets/3.2C/gameAssets/Anim2/w22AnimGlow.png','json/gradeJson/3.2C/Anim2/w22AnimGlow.json');
        _this.load.atlas('Level32C_w22Anim','assets/gradeAssets/3.2C/gameAssets/Anim2/w22Anim.png','json/gradeJson/3.2C/Anim2/w22Anim.json');
        _this.load.image('Level32C_w22','assets/gradeAssets/3.2C/gameAssets/Anim2/w22.png');

        //level4
        _this.load.atlas('Level32C_bottle2','assets/gradeAssets/3.2C/gameAssets/level3/bottle2.png','json/gradeJson/3.2C/bottle2.json');
	},
	
	addgame3_3AAssets:function()
	{
		//game assets.
        _this.load.image('Level33A_gameBg','assets/gradeAssets/3.3A/gameAssets/gameBg.png');
      
        _this.load.atlas('Level33A_Can','assets/gradeAssets/3.3A/gameAssets/Can.png','json/gradeJson/3.3A/Can.json');
        _this.load.atlas('Level33A_Carrot','assets/gradeAssets/3.3A/gameAssets/Carot.png','json/gradeJson/3.3A/Carot.json');
        _this.load.atlas('Level33A_Coin','assets/gradeAssets/3.3A/gameAssets/Coin.png','json/gradeJson/3.3A/Coin.json');
        _this.load.atlas('Level33A_Ball','assets/gradeAssets/3.3A/gameAssets/Ball.png','json/gradeJson/3.3A/Ball.json');
        _this.load.atlas('Level33A_Book','assets/gradeAssets/3.3A/gameAssets/Book.png','json/gradeJson/3.3A/Book.json');
        _this.load.atlas('Level33A_Banana','assets/gradeAssets/3.3A/gameAssets/Banana.png','json/gradeJson/3.3A/Banana.json');
        _this.load.atlas('Level33A_Comb','assets/gradeAssets/3.3A/gameAssets/comb.png','json/gradeJson/3.3A/comb.json');
        _this.load.atlas('Level33A_Eraser','assets/gradeAssets/3.3A/gameAssets/eraser.png','json/gradeJson/3.3A/eraser.json');
        _this.load.atlas('Level33A_Eraser2','assets/gradeAssets/3.3A/gameAssets/eraser2.png','json/gradeJson/3.3A/eraser2.json');
        _this.load.atlas('Level33A_Glass','assets/gradeAssets/3.3A/gameAssets/Glass.png','json/gradeJson/3.3A/Glass.json');
        _this.load.atlas('Level33A_Glass2','assets/gradeAssets/3.3A/gameAssets/Glass2.png','json/gradeJson/3.3A/Glass2.json');
        _this.load.atlas('Level33A_Mug','assets/gradeAssets/3.3A/gameAssets/Mug.png','json/gradeJson/3.3A/Mug.json');
        _this.load.atlas('Level33A_muggg','assets/gradeAssets/3.3A/gameAssets/muggg.png','json/gradeJson/3.3A/muggg.json');
        _this.load.atlas('Level33A_Key','assets/gradeAssets/3.3A/gameAssets/Key.png','json/gradeJson/3.3A/Key.json');
        _this.load.atlas('Level33A_Pappaya','assets/gradeAssets/3.3A/gameAssets/Pappaya.png','json/gradeJson/3.3A/Pappaya.json');
        _this.load.atlas('Level33A_pappaya1','assets/gradeAssets/3.3A/gameAssets/pappaya1.png','json/gradeJson/3.3A/pappaya1.json');
        _this.load.atlas('Level33A_Pencil','assets/gradeAssets/3.3A/gameAssets/Pencil.png','json/gradeJson/3.3A/Pencil.json');
        _this.load.atlas('Level33A_ScrewDriver','assets/gradeAssets/3.3A/gameAssets/ScrewDriver.png','json/gradeJson/3.3A/ScrewDriver.json');
        _this.load.atlas('Level33A_Shoe','assets/gradeAssets/3.3A/gameAssets/Shoe.png','json/gradeJson/3.3A/Shoe.json');
        _this.load.atlas('Level33A_bottle32','assets/gradeAssets/3.3A/gameAssets/bottle32.png','json/gradeJson/3.3A/bottle32.json');
        _this.load.atlas('Level33A_tomato32','assets/gradeAssets/3.3A/gameAssets/tomato32.png','json/gradeJson/3.3A/tomato32.json');
        _this.load.atlas('Level33A_carrot32','assets/gradeAssets/3.3A/gameAssets/carrot32.png','json/gradeJson/3.3A/carrot32.json');
        _this.load.atlas('Level33A_banana32','assets/gradeAssets/3.3A/gameAssets/banana32.png','json/gradeJson/3.3A/banana32.json');
        _this.load.atlas('Level33A_bread','assets/gradeAssets/3.3A/gameAssets/bread.png','json/gradeJson/3.3A/bread.json');
        _this.load.atlas('Level33A_ball32','assets/gradeAssets/3.3A/gameAssets/ball32.png','json/gradeJson/3.3A/ball32.json');
        _this.load.atlas('Level33A_banana322','assets/gradeAssets/3.3A/gameAssets/banana322.png','json/gradeJson/3.3A/banana322.json');
        _this.load.atlas('Level33A_block50','assets/gradeAssets/3.3A/gameAssets/block50.png','json/gradeJson/3.3A/block50.json');
        _this.load.atlas('Level33A_bottle322','assets/gradeAssets/3.3A/gameAssets/bottle322.png','json/gradeJson/3.3A/bottle322.json');
        _this.load.atlas('Level33A_redbook','assets/gradeAssets/3.3A/gameAssets/redbook.png','json/gradeJson/3.3A/redbook.json');
        
        
        //level2
        _this.load.image('Level33A_level2weight1','assets/gradeAssets/3.3A/gameAssets/level2/level2weight1.png');
        _this.load.image('Level33A_level2weight2','assets/gradeAssets/3.3A/gameAssets/level2/level2weight2.png');
        //_this.load.image('Level33A_level2weight32','assets/gradeAssets/3.3A/gameAssets/level2/level2weight3.png');
        //_this.load.image('Level33A_level2weight42','assets/gradeAssets/3.3A/gameAssets/level2/level2weight4.png');
        
        
        _this.load.image('Level33A_level2Bg','assets/gradeAssets/3.3A/gameAssets/level2/level2Bg.png');
        _this.load.image('Level33A_txtbox','assets/gradeAssets/3.3A/gameAssets/level2/box.png');
        _this.load.atlas('Level33A_numbg','assets/gradeAssets/3.3A/gameAssets/level2/numbg.png','json/gradeJson/3.3A/numbg.json');
        _this.load.atlas('Level33A_rightBtn','assets/gradeAssets/3.3A/gameAssets/level2/rightBtn.png','json/gradeJson/3.3A/rightBtn.json');
        _this.load.atlas('Level33A_wrongBtn','assets/gradeAssets/3.3A/gameAssets/level2/wrongBtn.png','json/gradeJson/3.3A/wrongBtn.json');
        
        _this.load.atlas('Level33A_Eraser2Anim','assets/gradeAssets/3.3A/gameAssets/eraser2Anim.png','json/gradeJson/3.3A/eraser2Anim.json');
        _this.load.atlas('Level33A_BananaAnim','assets/gradeAssets/3.3A/gameAssets/BananaAnim.png','json/gradeJson/3.3A/BananaAnim.json');
        _this.load.atlas('Level33A_CarrotAnim','assets/gradeAssets/3.3A/gameAssets/CarrotAnim.png','json/gradeJson/3.3A/CarrotAnim.json');
        _this.load.atlas('Level33A_CoinAnim','assets/gradeAssets/3.3A/gameAssets/CoinAnim.png','json/gradeJson/3.3A/CoinAnim.json');
        _this.load.atlas('Level33A_Glass2Anim','assets/gradeAssets/3.3A/gameAssets/GlassAnim.png','json/gradeJson/3.3A/GlassAnim.json');
        
        _this.load.atlas('Level33A_level2weight3','assets/gradeAssets/3.3A/gameAssets/level2/L2.png','json/gradeJson/3.3A/L2.json');
        _this.load.atlas('Level33A_level2weight4','assets/gradeAssets/3.3A/gameAssets/level2/R2.png','json/gradeJson/3.3A/R2.json');
       
     
        
        //level33a
        _this.load.image('Level33A_bg1','assets/gradeAssets/3.3A/gameAssets/level33a/bg1.png');
        _this.load.image('Level33A_level2weight32','assets/gradeAssets/3.3A/gameAssets/level33a/level2weight32.png');
        _this.load.image('Level33A_level2weight42','assets/gradeAssets/3.3A/gameAssets/level33a/level2weight42.png');
        _this.load.atlas('Level33A_50g','assets/gradeAssets/3.3A/gameAssets/level33a/50g.png','json/gradeJson/3.3A/50g.json'); 
        _this.load.atlas('Level33A_100g','assets/gradeAssets/3.3A/gameAssets/level33a/100g.png','json/gradeJson/3.3A/100g.json'); 
        _this.load.atlas('Level33A_200g','assets/gradeAssets/3.3A/gameAssets/level33a/200g.png','json/gradeJson/3.3A/200g.json'); 
        _this.load.atlas('Level33A_500g','assets/gradeAssets/3.3A/gameAssets/level33a/500g.png','json/gradeJson/3.3A/500g.json'); 
        
        _this.load.atlas('Level33A_50gAnim','assets/gradeAssets/3.3A/gameAssets/level33a/50gAnim.png','json/gradeJson/3.3A/50gAnim.json'); 
        _this.load.atlas('Level33A_100gAnim','assets/gradeAssets/3.3A/gameAssets/level33a/100gAnim.png','json/gradeJson/3.3A/100gAnim.json'); 
        _this.load.atlas('Level33A_200gAnim','assets/gradeAssets/3.3A/gameAssets/level33a/200gAnim.png','json/gradeJson/3.3A/200gAnim.json'); 
        _this.load.atlas('Level33A_500gAnim','assets/gradeAssets/3.3A/gameAssets/level33a/500gAnim.png','json/gradeJson/3.3A/500gAnim.json'); 
        
        _this.load.atlas('Level33A_50gg','assets/gradeAssets/3.3A/gameAssets/level33a/50gg.png','json/gradeJson/3.3A/50gg.json'); 
        _this.load.atlas('Level33A_100gg','assets/gradeAssets/3.3A/gameAssets/level33a/100gg.png','json/gradeJson/3.3A/100gg.json'); 
        _this.load.atlas('Level33A_200gg','assets/gradeAssets/3.3A/gameAssets/level33a/200gg.png','json/gradeJson/3.3A/200gg.json'); 
        _this.load.atlas('Level33A_500gg','assets/gradeAssets/3.3A/gameAssets/level33a/500gg.png','json/gradeJson/3.3A/500gg.json');
        
        _this.load.atlas('Level33A_w1AnimGlow','assets/gradeAssets/3.3A/gameAssets/level33a/w1AnimGlow.png','json/gradeJson/3.3A/w1AnimGlow.json');
        
 
        _this.load.atlas('Level33A_targetAnim','assets/gradeAssets/3.3A/gameAssets/level33a/targetAnim.png','json/gradeJson/3.3A/targetAnim.json');
		_this.load.atlas('Level33A_bottle2','assets/gradeAssets/3.3A/gameAssets/level3/bottle2.png','json/gradeJson/3.3A/bottle2.json');
        _this.load.atlas('Level33A_bottle','assets/gradeAssets/3.3A/gameAssets/level3/bottle.png','json/gradeJson/3.3A/bottle.json');
		
		/*_this.load.audio('Eng_33A', 'questionSounds/3.3A/English/3.3A.mp3');
        _this.load.audio('Eng_33B1', 'questionSounds/3.3A/English/3.3B_1.mp3');
        _this.load.audio('Eng_33B2', 'questionSounds/3.3A/English/3.3B_2.mp3');
        _this.load.audio('Kan_33A', 'questionSounds/3.3A/Kannada/3.3A.mp3');
        _this.load.audio('Kan_33B1', 'questionSounds/3.3A/Kannada/3.3B_1.mp3');
        _this.load.audio('Kan_33B2', 'questionSounds/3.3A/Kannada/3.3B_2.mp3');
        _this.load.audio('Kan_33_3', 'questionSounds/3.3A/Kannada/3.3_3.mp3');
        _this.load.audio('Kan_33_4', 'questionSounds/3.3A/Kannada/3.3_4.mp3');
        _this.load.audio('Hin_33A', 'questionSounds/3.3A/Hindi/3.3A.mp3');
        _this.load.audio('Hin_33B1', 'questionSounds/3.3A/Hindi/3.3B_1.mp3');
        _this.load.audio('Hin_33B2', 'questionSounds/3.3A/Hindi/3.3B_2.mp3');*/
	},
	
	
	addgame3_3B1Assets:function()
	{
		//level22
        _this.load.image('Level33B1_Newlevel2weight1','assets/gradeAssets/3.3B1/gameAssets/level22/level2weight1.png');
        _this.load.image('Level33B1_Newlevel2weight2','assets/gradeAssets/3.3B1/gameAssets/level22/level2weight2.png');
        _this.load.image('Level33B1_Newlevel2weight3','assets/gradeAssets/3.3B1/gameAssets/level22/level2weight3.png');
        _this.load.image('Level33B1_Newlevel2weight4','assets/gradeAssets/3.3B1/gameAssets/level22/level2weight4.png');
        
        
        _this.load.atlas('Level33B1_Newbottle','assets/gradeAssets/3.3B1/gameAssets/level22/bottle.png','json/gradeJson/3.3B1/level22/bottle.json');
        _this.load.atlas('Level33B1_Newjug','assets/gradeAssets/3.3B1/gameAssets/level22/jug.png','json/gradeJson/3.3B1/level22/jug.json');
        _this.load.atlas('Level33B1_Newpot','assets/gradeAssets/3.3B1/gameAssets/level22/pot.png','json/gradeJson/3.3B1/level22/pot.json');
        _this.load.atlas('Level33B1_Newcan','assets/gradeAssets/3.3B1/gameAssets/level22/can.png','json/gradeJson/3.3B1/level22/can.json');
        _this.load.atlas('Level33B1_NewfruitBox','assets/gradeAssets/3.3B1/gameAssets/level22/fruitBox.png','json/gradeJson/3.3B1/level22/fruitBox.json');
        _this.load.atlas('Level33B1_Newbox1','assets/gradeAssets/3.3B1/gameAssets/level22/box1.png','json/gradeJson/3.3B1/level22/box1.json');
        _this.load.atlas('Level33B1_Newbag1','assets/gradeAssets/3.3B1/gameAssets/level22/bag1.png','json/gradeJson/3.3B1/level22/bag1.json');
        _this.load.atlas('Level33B1_Newbag2','assets/gradeAssets/3.3B1/gameAssets/level22/bag2.png','json/gradeJson/3.3B1/level22/bag2.json');
        _this.load.atlas('Level33B1_Newcylinder','assets/gradeAssets/3.3B1/gameAssets/level22/cylinder.png','json/gradeJson/3.3B1/level22/cylinder.json');
        
        _this.load.atlas('Level33B1_New1kg','assets/gradeAssets/3.3B1/gameAssets/level22/1kg.png','json/gradeJson/3.3B1/level22/1kg.json');
        _this.load.atlas('Level33B1_New2kg','assets/gradeAssets/3.3B1/gameAssets/level22/2kg.png','json/gradeJson/3.3B1/level22/2kg.json');
        _this.load.atlas('Level33B1_New5kg','assets/gradeAssets/3.3B1/gameAssets/level22/5kg.png','json/gradeJson/3.3B1/level22/5kg.json');
        _this.load.atlas('Level33B1_New10kg','assets/gradeAssets/3.3B1/gameAssets/level22/10kg.png','json/gradeJson/3.3B1/level22/10kg.json');
        
        _this.load.atlas('Level33B1_New1kgAnim','assets/gradeAssets/3.3B1/gameAssets/level22/1kgAnim.png','json/gradeJson/3.3B1/level22/1kgAnim.json');
        _this.load.atlas('Level33B1_New2kgAnim','assets/gradeAssets/3.3B1/gameAssets/level22/2kgAnim.png','json/gradeJson/3.3B1/level22/2kgAnim.json');
        _this.load.atlas('Level33B1_New5kgAnim','assets/gradeAssets/3.3B1/gameAssets/level22/5kgAnim.png','json/gradeJson/3.3B1/level22/5kgAnim.json');
        _this.load.atlas('Level33B1_New10kgAnim','assets/gradeAssets/3.3B1/gameAssets/level22/10kgAnim.png','json/gradeJson/3.3B1/level22/10kgAnim.json');
        

        
        _this.load.image('Level33B1_Newlevel2Bg','assets/gradeAssets/3.3B1/gameAssets/level22/level2Bg.png');
        _this.load.image('Level33B1_Newtxtbox','assets/gradeAssets/3.3B1/gameAssets/level22/box.png');
        _this.load.atlas('Level33B1_Newnumbg','assets/gradeAssets/3.3B1/gameAssets/level22/numbg.png','json/gradeJson/3.3B1/level22/numbg.json');
        _this.load.atlas('Level33B1_NewrightBtn','assets/gradeAssets/3.3B1/gameAssets/level22/rightBtn.png','json/gradeJson/3.3B1/level22/rightBtn.json');
        _this.load.atlas('Level33B1_NewwrongBtn','assets/gradeAssets/3.3B1/gameAssets/level22/wrongBtn.png','json/gradeJson/3.3B1/level22/wrongBtn.json');
	},
	
	addgame3_3B2Assets:function()
	{
		_this.load.image('Level33B2_gameBg','assets/gradeAssets/3.3B2/gameAssets/gameBg.png');
        
        _this.load.image('Level33B2_weight1','assets/gradeAssets/3.3B2/gameAssets/weight1.png');
        _this.load.image('Level33B2_weight2','assets/gradeAssets/3.3B2/gameAssets/weight2.png');
        _this.load.image('Level33B2_weight3','assets/gradeAssets/3.3B2/gameAssets/weight3.png');
        
        _this.load.atlas('Level33B2_Can','assets/gradeAssets/3.3B2/gameAssets/Can.png','json/gradeJson/3.3B2/Can.json');
        _this.load.atlas('Level33B2_Carrot','assets/gradeAssets/3.3B2/gameAssets/Carot.png','json/gradeJson/3.3B2/Carot.json');
        _this.load.atlas('Level33B2_Coin','assets/gradeAssets/3.3B2/gameAssets/Coin.png','json/gradeJson/3.3B2/Coin.json');
        _this.load.atlas('Level33B2_Ball','assets/gradeAssets/3.3B2/gameAssets/Ball.png','json/gradeJson/3.3B2/Ball.json');
        _this.load.atlas('Level33B2_Book','assets/gradeAssets/3.3B2/gameAssets/Book.png','json/gradeJson/3.3B2/Book.json');
        _this.load.atlas('Level33B2_Banana','assets/gradeAssets/3.3B2/gameAssets/Banana.png','json/gradeJson/3.3B2/Banana.json');
        _this.load.atlas('Level33B2_Comb','assets/gradeAssets/3.3B2/gameAssets/comb.png','json/gradeJson/3.3B2/comb.json');
        _this.load.atlas('Level33B2_Eraser','assets/gradeAssets/3.3B2/gameAssets/eraser.png','json/gradeJson/3.3B2/eraser.json');
        _this.load.atlas('Level33B2_Eraser2','assets/gradeAssets/3.3B2/gameAssets/eraser2.png','json/gradeJson/3.3B2/eraser2.json');
        _this.load.atlas('Level33B2_Glass','assets/gradeAssets/3.3B2/gameAssets/Glass.png','json/gradeJson/3.3B2/Glass.json');
        _this.load.atlas('Level33B2_Glass2','assets/gradeAssets/3.3B2/gameAssets/Glass2.png','json/gradeJson/3.3B2/Glass2.json');
        _this.load.atlas('Level33B2_Mug','assets/gradeAssets/3.3B2/gameAssets/Mug.png','json/gradeJson/3.3B2/Mug.json');
        _this.load.atlas('Level33B2_muggg','assets/gradeAssets/3.3B2/gameAssets/muggg.png','json/gradeJson/3.3B2/muggg.json');
        _this.load.atlas('Level33B2_Key','assets/gradeAssets/3.3B2/gameAssets/Key.png','json/gradeJson/3.3B2/Key.json');
        _this.load.atlas('Level33B2_Pappaya','assets/gradeAssets/3.3B2/gameAssets/Pappaya.png','json/gradeJson/3.3B2/Pappaya.json');
        _this.load.atlas('Level33B2_pappaya1','assets/gradeAssets/3.3B2/gameAssets/pappaya1.png','json/gradeJson/3.3B2/pappaya1.json');
        _this.load.atlas('Level33B2_Pencil','assets/gradeAssets/3.3B2/gameAssets/Pencil.png','json/gradeJson/3.3B2/Pencil.json');
        _this.load.atlas('Level33B2_ScrewDriver','assets/gradeAssets/3.3B2/gameAssets/ScrewDriver.png','json/gradeJson/3.3B2/ScrewDriver.json');
        _this.load.atlas('Level33B2_Shoe','assets/gradeAssets/3.3B2/gameAssets/Shoe.png','json/gradeJson/3.3B2/Shoe.json');
        _this.load.atlas('Level33B2_bottle32','assets/gradeAssets/3.3B2/gameAssets/bottle32.png','json/gradeJson/3.3B2/bottle32.json');
        _this.load.atlas('Level33B2_tomato32','assets/gradeAssets/3.3B2/gameAssets/tomato32.png','json/gradeJson/3.3B2/tomato32.json');
        _this.load.atlas('Level33B2_carrot32','assets/gradeAssets/3.3B2/gameAssets/carrot32.png','json/gradeJson/3.3B2/carrot32.json');
        _this.load.atlas('Level33B2_banana32','assets/gradeAssets/3.3B2/gameAssets/banana32.png','json/gradeJson/3.3B2/banana32.json');
        _this.load.atlas('Level33B2_bread','assets/gradeAssets/3.3B2/gameAssets/bread.png','json/gradeJson/3.3B2/bread.json');
        _this.load.atlas('Level33B2_ball32','assets/gradeAssets/3.3B2/gameAssets/ball32.png','json/gradeJson/3.3B2/ball32.json');
        _this.load.atlas('Level33B2_banana322','assets/gradeAssets/3.3B2/gameAssets/banana322.png','json/gradeJson/3.3B2/banana322.json');
        _this.load.atlas('Level33B2_block50','assets/gradeAssets/3.3B2/gameAssets/block50.png','json/gradeJson/3.3B2/block50.json');
        _this.load.atlas('Level33B2_bottle322','assets/gradeAssets/3.3B2/gameAssets/bottle322.png','json/gradeJson/3.3B2/bottle322.json');
        _this.load.atlas('Level33B2_redbook','assets/gradeAssets/3.3B2/gameAssets/redbook.png','json/gradeJson/3.3B2/redbook.json');
        
        
        //level2
        _this.load.image('Level33B2_level2weight1','assets/gradeAssets/3.3B2/gameAssets/level2/level2weight1.png');
        _this.load.image('Level33B2_level2weight2','assets/gradeAssets/3.3B2/gameAssets/level2/level2weight2.png');

        _this.load.image('Level33B2_level2Bg','assets/gradeAssets/3.3B2/gameAssets/level2/level2Bg.png');
        _this.load.image('Level33B2_txtbox','assets/gradeAssets/3.3B2/gameAssets/level2/box.png');
        _this.load.atlas('Level33B2_numbg','assets/gradeAssets/3.3B2/gameAssets/level2/numbg.png','json/gradeJson/3.3B2/numbg.json');
        _this.load.atlas('Level33B2_rightBtn','assets/gradeAssets/3.3B2/gameAssets/level2/rightBtn.png','json/gradeJson/3.3B2/rightBtn.json');
        _this.load.atlas('Level33B2_wrongBtn','assets/gradeAssets/3.3B2/gameAssets/level2/wrongBtn.png','json/gradeJson/3.3B2/wrongBtn.json');
        
        _this.load.atlas('Level33B2_Eraser2Anim','assets/gradeAssets/3.3B2/gameAssets/eraser2Anim.png','json/gradeJson/3.3B2/eraser2Anim.json');
        _this.load.atlas('Level33B2_BananaAnim','assets/gradeAssets/3.3B2/gameAssets/BananaAnim.png','json/gradeJson/3.3B2/BananaAnim.json');
        _this.load.atlas('Level33B2_CarrotAnim','assets/gradeAssets/3.3B2/gameAssets/CarrotAnim.png','json/gradeJson/3.3B2/CarrotAnim.json');
        _this.load.atlas('Level33B2_CoinAnim','assets/gradeAssets/3.3B2/gameAssets/CoinAnim.png','json/gradeJson/3.3B2/CoinAnim.json');
        _this.load.atlas('Level33B2_Glass2Anim','assets/gradeAssets/3.3B2/gameAssets/GlassAnim.png','json/gradeJson/3.3B2/GlassAnim.json');
        
        _this.load.atlas('Level33B2_level2weight3','assets/gradeAssets/3.3B2/gameAssets/level2/L2.png','json/gradeJson/3.3B2/L2.json');
        _this.load.atlas('Level33B2_level2weight4','assets/gradeAssets/3.3B2/gameAssets/level2/R2.png','json/gradeJson/3.3B2/R2.json');
       
             //level3
        _this.load.atlas('Level33B2_bottle','assets/gradeAssets/3.3B2/gameAssets/level3/bottle.png','json/gradeJson/3.3B2/bottle.json');
        _this.load.atlas('Level33B2_w1Anim','assets/gradeAssets/3.3B2/gameAssets/level3/w1Anim.png','json/gradeJson/3.3B2/w1Anim.json');
        _this.load.image('Level33B2_w1','assets/gradeAssets/3.3B2/gameAssets/level3/w1.png');
        _this.load.image('Level33B2_w2','assets/gradeAssets/3.3B2/gameAssets/level3/w2.png');
        _this.load.atlas('Level33B2_w2Anim','assets/gradeAssets/3.3B2/gameAssets/level3/w2Anim.png','json/gradeJson/3.3B2/w2Anim.json');
        _this.load.atlas('Level33B2_tomoto','assets/gradeAssets/3.3B2/gameAssets/level3/tomoto.png','json/gradeJson/3.3B2/tomoto.json');
        _this.load.atlas('Level33B2_spoon','assets/gradeAssets/3.3B2/gameAssets/level3/spoon.png','json/gradeJson/3.3B2/spoon.json');
        _this.load.atlas('Level33B2_eraser1','assets/gradeAssets/3.3B2/gameAssets/level3/eraser1.png','json/gradeJson/3.3B2/eraser1.json');
        _this.load.atlas('Level33B2_rope','assets/gradeAssets/3.3B2/gameAssets/level3/rope.png','json/gradeJson/3.3B2/rope.json');
        _this.load.atlas('Level33B2_leef','assets/gradeAssets/3.3B2/gameAssets/level3/leef.png','json/gradeJson/3.3B2/leef.json');
        _this.load.atlas('Level33B2_coin1','assets/gradeAssets/3.3B2/gameAssets/level3/coin1.png','json/gradeJson/3.3B2/coin1.json');
        _this.load.atlas('Level33B2_Comb1','assets/gradeAssets/3.3B2/gameAssets/level3/Comb1.png','json/gradeJson/3.3B2/Comb1.json');
        _this.load.atlas('Level33B2_w1AnimGlow','assets/gradeAssets/3.3B2/gameAssets/level3/w1AnimGlow.png','json/gradeJson/3.3B2/w1AnimGlow.json');
        _this.load.atlas('Level33B2_w2AnimGlow','assets/gradeAssets/3.3B2/gameAssets/level3/w2AnimGlow.png','json/gradeJson/3.3B2/w2AnimGlow.json');


        //level4
        _this.load.atlas('Level33B2_bottle2','assets/gradeAssets/3.3B2/gameAssets/level3/bottle2.png','json/gradeJson/3.3B2/bottle2.json');
        
        //level33a
        _this.load.image('Level33B2_bg1','assets/gradeAssets/3.3B2/gameAssets/level33a/bg1.png');
        _this.load.image('Level33B2_level2weight32','assets/gradeAssets/3.3B2/gameAssets/level33a/level2weight32.png');
        _this.load.image('Level33B2_level2weight42','assets/gradeAssets/3.3B2/gameAssets/level33a/level2weight42.png');
       
        
        _this.load.atlas('Level33B2_w1AnimGlow','assets/gradeAssets/3.3B2/gameAssets/level33a/w1AnimGlow.png','json/gradeJson/3.3B2/w1AnimGlow.json');
        
 
        _this.load.atlas('Level33B2_targetAnim','assets/gradeAssets/3.3B2/gameAssets/level33a/targetAnim.png','json/gradeJson/3.3B2/targetAnim.json');
        
        //level33c
        _this.load.atlas('Level33B2_cylinder33','assets/gradeAssets/3.3B2/gameAssets/level33c/cylinder33.png','json/gradeJson/3.3B2/level33c/cylinder33.json'); 
        _this.load.atlas('Level33B2_50g33','assets/gradeAssets/3.3B2/gameAssets/level33c/50g33.png','json/gradeJson/3.3B2/level33c/50g33.json'); 
        _this.load.atlas('Level33B2_100g33','assets/gradeAssets/3.3B2/gameAssets/level33c/100g33.png','json/gradeJson/3.3B2/level33c/100g33.json'); 
        _this.load.atlas('Level33B2_200g33','assets/gradeAssets/3.3B2/gameAssets/level33c/200g33.png','json/gradeJson/3.3B2/level33c/200g33.json'); 
        _this.load.atlas('Level33B2_500g33','assets/gradeAssets/3.3B2/gameAssets/level33c/500g33.png','json/gradeJson/3.3B2/level33c/500g33.json'); 
        
        _this.load.atlas('Level33B2_50g33Anim','assets/gradeAssets/3.3B2/gameAssets/level33c/50g33Anim.png','json/gradeJson/3.3B2/level33c/50g33Anim.json'); 
        _this.load.atlas('Level33B2_100g33Anim','assets/gradeAssets/3.3B2/gameAssets/level33c/100g33Anim.png','json/gradeJson/3.3B2/level33c/100g33Anim.json'); 
        _this.load.atlas('Level33B2_200g33Anim','assets/gradeAssets/3.3B2/gameAssets/level33c/200g33Anim.png','json/gradeJson/3.3B2/level33c/200g33Anim.json'); 
        _this.load.atlas('Level33B2_500g33Anim','assets/gradeAssets/3.3B2/gameAssets/level33c/500g33Anim.png','json/gradeJson/3.3B2/level33c/500g33Anim.json'); 
        
        _this.load.atlas('Level33B2_1kg33','assets/gradeAssets/3.3B2/gameAssets/level33c/1kg33.png','json/gradeJson/3.3B2/level33c/1kg33.json'); 
        _this.load.atlas('Level33B2_2kg33','assets/gradeAssets/3.3B2/gameAssets/level33c/2kg33.png','json/gradeJson/3.3B2/level33c/2kg33.json'); 
        _this.load.atlas('Level33B2_5kg33','assets/gradeAssets/3.3B2/gameAssets/level33c/5kg33.png','json/gradeJson/3.3B2/level33c/5kg33.json'); 
        _this.load.atlas('Level33B2_10kg33','assets/gradeAssets/3.3B2/gameAssets/level33c/10kg33.png','json/gradeJson/3.3B2/level33c/10kg33.json'); 
        
        _this.load.atlas('Level33B2_1kg33Anim','assets/gradeAssets/3.3B2/gameAssets/level33c/1kg33Anim.png','json/gradeJson/3.3B2/level33c/1kg33Anim.json'); 
        _this.load.atlas('Level33B2_2kg33Anim','assets/gradeAssets/3.3B2/gameAssets/level33c/2kg33Anim.png','json/gradeJson/3.3B2/level33c/2kg33Anim.json'); 
        _this.load.atlas('Level33B2_5kg33Anim','assets/gradeAssets/3.3B2/gameAssets/level33c/5kg33Anim.png','json/gradeJson/3.3B2/level33c/5kg33Anim.json'); 
        _this.load.atlas('Level33B2_10kg33Anim','assets/gradeAssets/3.3B2/gameAssets/level33c/10kg33Anim.png','json/gradeJson/3.3B2/level33c/10kg33Anim.json'); 
        
        _this.load.atlas('Level33B2_bag33','assets/gradeAssets/3.3B2/gameAssets/level33c/bag33.png','json/gradeJson/3.3B2/level33c/bag33.json');
        _this.load.atlas('Level33B2_coinbag','assets/gradeAssets/3.3B2/gameAssets/level33c/coinbag.png','json/gradeJson/3.3B2/level33c/coinbag.json');
        _this.load.atlas('Level33B2_box33','assets/gradeAssets/3.3B2/gameAssets/level33c/box33.png','json/gradeJson/3.3B2/level33c/box33.json');
        _this.load.atlas('Level33B2_fruitbox33','assets/gradeAssets/3.3B2/gameAssets/level33c/fruitbox33.png','json/gradeJson/3.3B2/level33c/fruitbox33.json');
        _this.load.atlas('Level33B2_can33','assets/gradeAssets/3.3B2/gameAssets/level33c/can33.png','json/gradeJson/3.3B2/level33c/can33.json');
        _this.load.atlas('Level33B2_pot33','assets/gradeAssets/3.3B2/gameAssets/level33c/pot33.png','json/gradeJson/3.3B2/level33c/pot33.json');
        _this.load.atlas('Level33B2_mugg33','assets/gradeAssets/3.3B2/gameAssets/level33c/mugg33.png','json/gradeJson/3.3B2/level33c/mugg33.json');
        _this.load.atlas('Level33B2_bottles33','assets/gradeAssets/3.3B2/gameAssets/level33c/bottles33.png','json/gradeJson/3.3B2/level33c/bottles33.json');
        _this.load.atlas('Level33B2_box-new','assets/gradeAssets/3.3B2/gameAssets/level33c/box-new.png','json/gradeJson/3.3B2/level33c/box-new.json');
        
        
        //level22
        _this.load.image('Level33B2_Newlevel2weight1','assets/gradeAssets/3.3B2/gameAssets/level22/level2weight1.png');
        _this.load.image('Level33B2_Newlevel2weight2','assets/gradeAssets/3.3B2/gameAssets/level22/level2weight2.png');
        _this.load.image('Level33B2_Newlevel2weight3','assets/gradeAssets/3.3B2/gameAssets/level22/level2weight3.png');
        _this.load.image('Level33B2_Newlevel2weight4','assets/gradeAssets/3.3B2/gameAssets/level22/level2weight4.png');
        
        
        _this.load.atlas('Level33B2_Newbottle','assets/gradeAssets/3.3B2/gameAssets/level22/bottle.png','json/gradeJson/3.3B2/level22/bottle.json');
        _this.load.atlas('Level33B2_Newjug','assets/gradeAssets/3.3B2/gameAssets/level22/jug.png','json/gradeJson/3.3B2/level22/jug.json');
        _this.load.atlas('Level33B2_Newpot','assets/gradeAssets/3.3B2/gameAssets/level22/pot.png','json/gradeJson/3.3B2/level22/pot.json');
        _this.load.atlas('Level33B2_Newcan','assets/gradeAssets/3.3B2/gameAssets/level22/can.png','json/gradeJson/3.3B2/level22/can.json');
        _this.load.atlas('Level33B2_NewfruitBox','assets/gradeAssets/3.3B2/gameAssets/level22/fruitBox.png','json/gradeJson/3.3B2/level22/fruitBox.json');
        _this.load.atlas('Level33B2_Newbox1','assets/gradeAssets/3.3B2/gameAssets/level22/box1.png','json/gradeJson/3.3B2/level22/box1.json');
        _this.load.atlas('Level33B2_Newbag1','assets/gradeAssets/3.3B2/gameAssets/level22/bag1.png','json/gradeJson/3.3B2/level22/bag1.json');
        _this.load.atlas('Level33B2_Newbag2','assets/gradeAssets/3.3B2/gameAssets/level22/bag2.png','json/gradeJson/3.3B2/level22/bag2.json');
        _this.load.atlas('Level33B2_Newcylinder','assets/gradeAssets/3.3B2/gameAssets/level22/cylinder.png','json/gradeJson/3.3B2/level22/cylinder.json');
        
        _this.load.atlas('Level33B2_New1kg','assets/gradeAssets/3.3B2/gameAssets/level22/1kg.png','json/gradeJson/3.3B2/level22/1kg.json');
        _this.load.atlas('Level33B2_New2kg','assets/gradeAssets/3.3B2/gameAssets/level22/2kg.png','json/gradeJson/3.3B2/level22/2kg.json');
        _this.load.atlas('Level33B2_New5kg','assets/gradeAssets/3.3B2/gameAssets/level22/5kg.png','json/gradeJson/3.3B2/level22/5kg.json');
        _this.load.atlas('Level33B2_New10kg','assets/gradeAssets/3.3B2/gameAssets/level22/10kg.png','json/gradeJson/3.3B2/level22/10kg.json');
        
        _this.load.atlas('Level33B2_New1kgAnim','assets/gradeAssets/3.3B2/gameAssets/level22/1kgAnim.png','json/gradeJson/3.3B2/level22/1kgAnim.json');
        _this.load.atlas('Level33B2_New2kgAnim','assets/gradeAssets/3.3B2/gameAssets/level22/2kgAnim.png','json/gradeJson/3.3B2/level22/2kgAnim.json');
        _this.load.atlas('Level33B2_New5kgAnim','assets/gradeAssets/3.3B2/gameAssets/level22/5kgAnim.png','json/gradeJson/3.3B2/level22/5kgAnim.json');
        _this.load.atlas('Level33B2_New10kgAnim','assets/gradeAssets/3.3B2/gameAssets/level22/10kgAnim.png','json/gradeJson/3.3B2/level22/10kgAnim.json');
        

        
        _this.load.image('Level33B2_Newlevel2Bg','assets/gradeAssets/3.3B2/gameAssets/level22/level2Bg.png');
        _this.load.image('Level33B2_Newtxtbox','assets/gradeAssets/3.3B2/gameAssets/level22/box.png');
        _this.load.atlas('Level33B2_Newnumbg','assets/gradeAssets/3.3B2/gameAssets/level22/numbg.png','json/gradeJson/3.3B2/level22/numbg.json');
        _this.load.atlas('Level33B2_NewrightBtn','assets/gradeAssets/3.3B2/gameAssets/level22/rightBtn.png','json/gradeJson/3.3B2/level22/rightBtn.json');
        _this.load.atlas('Level33B2_NewwrongBtn','assets/gradeAssets/3.3B2/gameAssets/level22/wrongBtn.png','json/gradeJson/3.3B2/level22/wrongBtn.json');
	},
	
	addgame4_1AAssets:function()
	{
		/*_this.load.image('Level41A_bg1','assets/gradeAssets/4.1A/commonAssets/bg1.png');
        //_this.load.atlas('Level41A_backbtn','assets/gradeAssets/4.1A/commonAssets/backbtn.png' ,'json/gradeJson/4.1A/backbtn.json');
        //_this.load.atlas('Level41A_speaker','assets/gradeAssets/4.1A/commonAssets/speaker.png' ,'json/gradeJson/4.1A/speaker.json');
        //_this.load.atlas('Level41A_starAnim','assets/gradeAssets/4.1A/commonAssets/starAnim.png','json/gradeJson/4.1A/starAnim.json');
        _this.load.image('Level41A_cloud','assets/gradeAssets/4.1A/commonAssets/cloud.png');
      //  _this.load.atlas('Level41A_btn','assets/gradeAssets/4.1A/commonAssets/btn.png','json/gradeJson/4.1A/btn.json');
        _this.load.image('Level41A_bg3','assets/gradeAssets/4.1A/commonAssets/bg3.png');
      //  _this.load.image('Level41A_tittleBaar','assets/gradeAssets/4.1A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level41A_replay','assets/gradeAssets/4.1A/commonAssets/reply.png' ,'json/gradeJson/4.1A/reply.json');
        
        //My files to load
        _this.load.atlas('Level41A_gameBox','assets/gradeAssets/4.1A/gameAssets/gameBox.png' ,'json/gradeJson/4.1A/gameBox.json');
        _this.load.atlas('Level41A_allimg','assets/gradeAssets/4.1A/gameAssets/allimg.png' ,'json/gradeJson/4.1A/allimg.json');
        _this.load.atlas('Level41A_tickMark','assets/gradeAssets/4.1A/gameAssets/tickMark.png' ,'json/gradeJson/4.1A/tickMark.json');
        _this.load.image('Level41A_croc','assets/gradeAssets/4.1A/gameAssets/croc.png');
        _this.load.image('Level41A_croc2','assets/gradeAssets/4.1A/gameAssets/croc2.png');
        
        _this.load.image('Level41A_glow','assets/gradeAssets/4.1A/gameAssets/glow.png');
        
        //game items
        _this.load.image('Level41A_cup1','assets/gradeAssets/4.1A/gameAssets/1.png');
        _this.load.image('Level41A_cup2','assets/gradeAssets/4.1A/gameAssets/2.png');
        _this.load.image('Level41A_cup3','assets/gradeAssets/4.1A/gameAssets/3.png');
        _this.load.image('Level41A_cup4','assets/gradeAssets/4.1A/gameAssets/4.png');
        
        _this.load.image('Level41A_bucket1','assets/gradeAssets/4.1A/gameAssets/5.png');
        _this.load.image('Level41A_bucket2','assets/gradeAssets/4.1A/gameAssets/6.png');
        _this.load.image('Level41A_bucket3','assets/gradeAssets/4.1A/gameAssets/7.png');
        _this.load.image('Level41A_bucket4','assets/gradeAssets/4.1A/gameAssets/8.png');
        
        _this.load.image('Level41A_jug1','assets/gradeAssets/4.1A/gameAssets/9.png');
        _this.load.image('Level41A_jug2','assets/gradeAssets/4.1A/gameAssets/10.png');
        _this.load.image('Level41A_jug3','assets/gradeAssets/4.1A/gameAssets/11.png');
        _this.load.image('Level41A_jug4','assets/gradeAssets/4.1A/gameAssets/12.png');
        
        _this.load.image('Level41A_flask1','assets/gradeAssets/4.1A/gameAssets/13.png');
        _this.load.image('Level41A_flask2','assets/gradeAssets/4.1A/gameAssets/14.png');
        _this.load.image('Level41A_flask3','assets/gradeAssets/4.1A/gameAssets/15.png');
        _this.load.image('Level41A_flask4','assets/gradeAssets/4.1A/gameAssets/16.png');
        
        _this.load.image('Level41A_bottle1','assets/gradeAssets/4.1A/gameAssets/17.png');
        _this.load.image('Level41A_bottle2','assets/gradeAssets/4.1A/gameAssets/18.png');
        _this.load.image('Level41A_bottle3','assets/gradeAssets/4.1A/gameAssets/19.png');
        _this.load.image('Level41A_bottle4','assets/gradeAssets/4.1A/gameAssets/20.png');
        
        _this.load.image('Level41A_milk1','assets/gradeAssets/4.1A/gameAssets/21.png');
        _this.load.image('Level41A_milk2','assets/gradeAssets/4.1A/gameAssets/22.png');
        _this.load.image('Level41A_milk3','assets/gradeAssets/4.1A/gameAssets/23.png');
        _this.load.image('Level41A_milk4','assets/gradeAssets/4.1A/gameAssets/24.png');
        
        _this.load.image('Level41A_shadow1','assets/gradeAssets/4.1A/gameAssets/shadow1.png');
        _this.load.image('Level41A_shadow2','assets/gradeAssets/4.1A/gameAssets/shadow2.png');
        _this.load.image('Level41A_shadow3','assets/gradeAssets/4.1A/gameAssets/shadow3.png');
        _this.load.image('Level41A_shadow4','assets/gradeAssets/4.1A/gameAssets/shadow4.png');
        _this.load.image('Level41A_shadow5','assets/gradeAssets/4.1A/gameAssets/shadow5.png');
        _this.load.image('Level41A_shadow6','assets/gradeAssets/4.1A/gameAssets/shadow6.png');
        
        //Loading 4.1C Assets
        _this.load.atlas('Level41A_gameBox3','assets/gradeAssets/4.1A/gameAssets/gameBox3.png' ,'json/gradeJson/4.1A/gameBox3.json');
        _this.load.atlas('Level41A_allimages','assets/gradeAssets/4.1A/gameAssets/allimages.png' ,'json/gradeJson/4.1A/allimages.json');
        _this.load.image('Level41A_bluebottle1','assets/gradeAssets/4.1A/gameAssets/bluebottle1.png');
        _this.load.image('Level41A_bluebottle2','assets/gradeAssets/4.1A/gameAssets/bluebottle2.png');
        
        _this.load.image('Level41A_glassfull1','assets/gradeAssets/4.1A/gameAssets/glassfull1.png');
        _this.load.image('Level41A_glassfull2','assets/gradeAssets/4.1A/gameAssets/glassfull2.png');
        _this.load.image('Level41A_glassfull3','assets/gradeAssets/4.1A/gameAssets/glassfull3.png');
        _this.load.image('Level41A_glassfull4','assets/gradeAssets/4.1A/gameAssets/glassfull4.png');
        
        _this.load.image('Level41A_greendrum1','assets/gradeAssets/4.1A/gameAssets/greendrum1.png');
        _this.load.image('Level41A_greendrum2','assets/gradeAssets/4.1A/gameAssets/greendrum2.png');
        _this.load.image('Level41A_greendrum3','assets/gradeAssets/4.1A/gameAssets/greendrum3.png');
        
        _this.load.image('Level41A_greenmug1','assets/gradeAssets/4.1A/gameAssets/greenmug1.png');
        _this.load.image('Level41A_greenmug2','assets/gradeAssets/4.1A/gameAssets/greenmug2.png');
        
        _this.load.image('Level41A_greencup1','assets/gradeAssets/4.1A/gameAssets/greencup1.png');
        _this.load.image('Level41A_greencup2','assets/gradeAssets/4.1A/gameAssets/greencup2.png');
        
        _this.load.image('Level41A_greenpot1','assets/gradeAssets/4.1A/gameAssets/greenpot1.png');
        _this.load.image('Level41A_greenpot2','assets/gradeAssets/4.1A/gameAssets/greenpot2.png');
        _this.load.image('Level41A_greenpot3','assets/gradeAssets/4.1A/gameAssets/greenpot3.png');
        _this.load.image('Level41A_greenpot4','assets/gradeAssets/4.1A/gameAssets/greenpot4.png');
        
        _this.load.image('Level41A_orangebucket1','assets/gradeAssets/4.1A/gameAssets/orangebucket1.png');
        _this.load.image('Level41A_orangebucket2','assets/gradeAssets/4.1A/gameAssets/orangebucket2.png');
        
        _this.load.image('Level41A_orangecan1','assets/gradeAssets/4.1A/gameAssets/orangecan1.png');
        _this.load.image('Level41A_orangecan2','assets/gradeAssets/4.1A/gameAssets/orangecan2.png');
        _this.load.image('Level41A_orangecan3','assets/gradeAssets/4.1A/gameAssets/orangecan3.png');
        
        _this.load.image('Level41A_orangejug1','assets/gradeAssets/4.1A/gameAssets/orangejug1.png');
        _this.load.image('Level41A_orangejug2','assets/gradeAssets/4.1A/gameAssets/orangejug2.png');
        
        _this.load.image('Level41A_pinkbucket1','assets/gradeAssets/4.1A/gameAssets/pinkbucket1.png');
        _this.load.image('Level41A_pinkbucket2','assets/gradeAssets/4.1A/gameAssets/pinkbucket2.png');
        _this.load.image('Level41A_pinkbucket3','assets/gradeAssets/4.1A/gameAssets/pinkbucket3.png');
        
        _this.load.image('Level41A_pinkmug1','assets/gradeAssets/4.1A/gameAssets/pinkmug1.png');
        _this.load.image('Level41A_pinkmug2','assets/gradeAssets/4.1A/gameAssets/pinkmug2.png');
        
        _this.load.image('Level41A_redjug1','assets/gradeAssets/4.1A/gameAssets/redjug1.png');
        _this.load.image('Level41A_redjug2','assets/gradeAssets/4.1A/gameAssets/redjug2.png');
        _this.load.image('Level41A_redjug3','assets/gradeAssets/4.1A/gameAssets/redjug3.png');
        _this.load.image('Level41A_redjug4','assets/gradeAssets/4.1A/gameAssets/redjug4.png');
        
        _this.load.image('Level41A_syntex1','assets/gradeAssets/4.1A/gameAssets/syntex1.png');
        _this.load.image('Level41A_syntex2','assets/gradeAssets/4.1A/gameAssets/syntex2.png');
        
        _this.load.image('Level41A_whitemug1','assets/gradeAssets/4.1A/gameAssets/whitemug1.png');
        _this.load.image('Level41A_whitesoda1','assets/gradeAssets/4.1A/gameAssets/whitesoda1.png');
        _this.load.image('Level41A_whitesoda2','assets/gradeAssets/4.1A/gameAssets/whitesoda2.png');
        
        _this.load.image('Level41A_yellowct1','assets/gradeAssets/4.1A/gameAssets/yellowct1.png');
        _this.load.image('Level41A_bottleone','assets/gradeAssets/4.1A/gameAssets/bottleone.png');
        
        _this.load.image('Level41A_bluebottle1_shadow','assets/gradeAssets/4.1A/gameAssets/bluebottle1_shadow.png');
        _this.load.image('Level41A_glassfull1_shadow','assets/gradeAssets/4.1A/gameAssets/glassfull1_shadow.png');
        _this.load.image('Level41A_glassfull2_shadow','assets/gradeAssets/4.1A/gameAssets/glassfull2_shadow.png');
        _this.load.image('Level41A_greendrum1_shadow','assets/gradeAssets/4.1A/gameAssets/greendrum1_shadow.png');
        _this.load.image('Level41A_greendrum2_shadow','assets/gradeAssets/4.1A/gameAssets/greendrum2_shadow.png');
        _this.load.image('Level41A_greenmug1_shadow','assets/gradeAssets/4.1A/gameAssets/greenmug1_shadow.png');
        _this.load.image('Level41A_greenpot1_shadow','assets/gradeAssets/4.1A/gameAssets/greenpot1_shadow.png');
        _this.load.image('Level41A_orangebucket1_shadow','assets/gradeAssets/4.1A/gameAssets/orangebucket1_shadow.png');
        _this.load.image('Level41A_orangebucket2_shadow','assets/gradeAssets/4.1A/gameAssets/orangebucket2_shadow.png');
        _this.load.image('Level41A_orangecan1_shadow','assets/gradeAssets/4.1A/gameAssets/orangecan1_shadow.png');
        _this.load.image('Level41A_orangecan2_shadow','assets/gradeAssets/4.1A/gameAssets/orangecan2_shadow.png');
        _this.load.image('Level41A_orangejug1_shadow','assets/gradeAssets/4.1A/gameAssets/orangejug1_shadow.png');
        _this.load.image('Level41A_orangejug2_shadow','assets/gradeAssets/4.1A/gameAssets/orangejug2_shadow.png');
        _this.load.image('Level41A_pinkbucket1_shadow','assets/gradeAssets/4.1A/gameAssets/pinkbucket1_shadow.png');
        _this.load.image('Level41A_pinkbucket2_shadow','assets/gradeAssets/4.1A/gameAssets/pinkbucket2_shadow.png');
        _this.load.image('Level41A_pinkmug1_shadow','assets/gradeAssets/4.1A/gameAssets/pinkmug1_shadow.png');
        _this.load.image('Level41A_redjug1_shadow','assets/gradeAssets/4.1A/gameAssets/redjug1_shadow.png');
        _this.load.image('Level41A_syntex1_shadow','assets/gradeAssets/4.1A/gameAssets/syntex1_shadow.png');
        _this.load.image('Level41A_syntex2_shadow','assets/gradeAssets/4.1A/gameAssets/syntex2_shadow.png');
        _this.load.image('Level41A_whitemug1_shadow','assets/gradeAssets/4.1A/gameAssets/whitemug1_shadow.png');
        _this.load.image('Level41A_whitesoda1_shadow','assets/gradeAssets/4.1A/gameAssets/whitesoda1_shadow.png');
        
        //load 4.1A assets
        _this.load.image('Level41A_bg4_1','assets/gradeAssets/4.1A/gameAssets/akshbg41.png');
        _this.load.atlas('Level41A_bottlefull','assets/gradeAssets/4.1A/gameAssets/bottlefull.png' ,'json/gradeJson/4.1A/bottlefull.json');
        _this.load.atlas('Level41A_bottlehalf','assets/gradeAssets/4.1A/gameAssets/bottlehalf.png' ,'json/gradeJson/4.1A/bottlehalf.json');
        _this.load.atlas('Level41A_bottlequarter','assets/gradeAssets/4.1A/gameAssets/bottlequarter.png' ,'json/gradeJson/4.1A/bottlequarter.json');
        _this.load.atlas('Level41A_bucketfull','assets/gradeAssets/4.1A/gameAssets/bucketfull.png' ,'json/gradeJson/4.1A/bucketfull.json');
        _this.load.atlas('Level41A_buckethalf','assets/gradeAssets/4.1A/gameAssets/buckethalf.png' ,'json/gradeJson/4.1A/buckethalf.json');
        _this.load.atlas('Level41A_bucketquarter','assets/gradeAssets/4.1A/gameAssets/bucketquarter.png' ,'json/gradeJson/4.1A/bucketquarter.json');
        _this.load.atlas('Level41A_glassfull','assets/gradeAssets/4.1A/gameAssets/glassfull.png' ,'json/gradeJson/4.1A/glassfull.json');
        _this.load.atlas('Level41A_glasshalf','assets/gradeAssets/4.1A/gameAssets/glasshalf.png' ,'json/gradeJson/4.1A/glasshalf.json');
        _this.load.atlas('Level41A_glassquarter','assets/gradeAssets/4.1A/gameAssets/glassquarter.png' ,'json/gradeJson/4.1A/glassquarter.json');
        _this.load.atlas('Level41A_jugfull','assets/gradeAssets/4.1A/gameAssets/jugfull.png' ,'json/gradeJson/4.1A/jugfull.json');
        _this.load.atlas('Level41A_jughalf','assets/gradeAssets/4.1A/gameAssets/jughalf.png' ,'json/gradeJson/4.1A/jughalf.json');
        _this.load.atlas('Level41A_jugquarter','assets/gradeAssets/4.1A/gameAssets/jugquarter.png' ,'json/gradeJson/4.1A/jugquarter.json');
        _this.load.atlas('Level41A_mugfull','assets/gradeAssets/4.1A/gameAssets/mugfull.png' ,'json/gradeJson/4.1A/mugfull.json');
        _this.load.atlas('Level41A_mughalf','assets/gradeAssets/4.1A/gameAssets/mughalf.png' ,'json/gradeJson/4.1A/mughalf.json');
        _this.load.atlas('Level41A_mugquarter','assets/gradeAssets/4.1A/gameAssets/mugquarter.png' ,'json/gradeJson/4.1A/mugquarter.json');
        _this.load.atlas('Level41A_sodafull','assets/gradeAssets/4.1A/gameAssets/sodafull.png' ,'json/gradeJson/4.1A/sodafull.json');
        _this.load.atlas('Level41A_sodahalf','assets/gradeAssets/4.1A/gameAssets/sodahalf.png' ,'json/gradeJson/4.1A/sodahalf.json');
        _this.load.atlas('Level41A_sodaquarter','assets/gradeAssets/4.1A/gameAssets/sodaquarter.png' ,'json/gradeJson/4.1A/sodaquarter.json');
        _this.load.image('Level41A_bottle_shadow','assets/gradeAssets/4.1A/gameAssets/bottle_shadow.png');
        _this.load.image('Level41A_bucket_shadow','assets/gradeAssets/4.1A/gameAssets/bucket_shadow.png');
        _this.load.image('Level41A_glass_shadow','assets/gradeAssets/4.1A/gameAssets/glass_shadow.png');
        _this.load.image('Level41A_jug_shadow','assets/gradeAssets/4.1A/gameAssets/jug_shadow.png');
        _this.load.image('Level41A_mug_shadow','assets/gradeAssets/4.1A/gameAssets/mug_shadow.png');
        _this.load.image('Level41A_soda_shadow','assets/gradeAssets/4.1A/gameAssets/soda_shadow.png');
		
		
		
		/*_this.load.audio('Eng_41A1', 'questionSounds/4.1A/English/4.1A1.mp3');
        _this.load.audio('Eng_41A2', 'questionSounds/4.1A/English/4.1A2.mp3');
        _this.load.audio('Eng_41A3', 'questionSounds/4.1A/English/4.1A3.mp3');
        _this.load.audio('Eng_41B1', 'questionSounds/4.1A/English/4.1B1.mp3');
        _this.load.audio('Eng_41B2', 'questionSounds/4.1A/English/4.1B2.mp3');
        _this.load.audio('Eng_41C1', 'questionSounds/4.1A/English/4.1C1.mp3');
        _this.load.audio('Eng_41C2', 'questionSounds/4.1A/English/4.1C2.mp3');
        _this.load.audio('Kan_41A1', 'questionSounds/4.1A/Kannada/4.1A1.mp3');
        _this.load.audio('Kan_41A2', 'questionSounds/4.1A/Kannada/4.1A2.mp3');
        _this.load.audio('Kan_41A3', 'questionSounds/4.1A/Kannada/4.1A3.mp3');
        _this.load.audio('Kan_41B1', 'questionSounds/4.1A/Kannada/4.1B1.mp3');
        _this.load.audio('Kan_41B2', 'questionSounds/4.1A/Kannada/4.1B2.mp3');
        _this.load.audio('Kan_41C1', 'questionSounds/4.1A/Kannada/4.1C1.mp3');
        _this.load.audio('Kan_41C2', 'questionSounds/4.1A/Kannada/4.1C2.mp3');
        _this.load.audio('Hin_41A1', 'questionSounds/4.1A/Hindi/4.1A1 OPTION1.mp3');
        _this.load.audio('Hin_41A2', 'questionSounds/4.1A/Hindi/4.1A2.mp3');
        _this.load.audio('Hin_41A3', 'questionSounds/4.1A/Hindi/4.1A3 Option.mp3');
        _this.load.audio('Hin_41B1', 'questionSounds/4.1A/Hindi/4.1B1.mp3');
        _this.load.audio('Hin_41B2', 'questionSounds/4.1A/Hindi/4.1B2.mp3');
        _this.load.audio('Hin_41C1', 'questionSounds/4.1A/Hindi/4.1C1.mp3');
        _this.load.audio('Hin_41C2', 'questionSounds/4.1A/Hindi/4.1C2.mp3');*/


        _this.load.image('Level41A_bg1','assets/gradeAssets/4.1A/commonAssets/bg1.png');
        //_this.load.atlas('Level41A_backbtn','assets/gradeAssets/4.1A/commonAssets/backbtn.png' ,'json/gradeJson/4.1A/backbtn.json');
        //_this.load.atlas('Level41A_speaker','assets/gradeAssets/4.1A/commonAssets/speaker.png' ,'json/gradeJson/4.1A/speaker.json');
        //_this.load.atlas('Level41A_starAnim','assets/gradeAssets/4.1A/commonAssets/starAnim.png','json/gradeJson/4.1A/starAnim.json');
        _this.load.image('Level41A_cloud','assets/gradeAssets/4.1A/commonAssets/cloud.png');
      //  _this.load.atlas('Level41A_btn','assets/gradeAssets/4.1A/commonAssets/btn.png','json/gradeJson/4.1A/btn.json');
        _this.load.image('Level41A_bg3','assets/gradeAssets/4.1A/commonAssets/bg3.png');
      //  _this.load.image('Level41A_tittleBaar','assets/gradeAssets/4.1A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level41A_replay','assets/gradeAssets/4.1A/commonAssets/reply.png' ,'json/gradeJson/4.1A/reply.json');
        
        //My files to load
        _this.load.atlas('Level41A_gameBox','assets/gradeAssets/4.1A/gameAssets/gameBox.png' ,'json/gradeJson/4.1A/gameBox.json');
        _this.load.atlas('Level41A_allimg','assets/gradeAssets/4.1A/gameAssets/allimg.png' ,'json/gradeJson/4.1A/allimg.json');
        _this.load.atlas('Level41A_tickMark','assets/gradeAssets/4.1A/gameAssets/tickMark.png' ,'json/gradeJson/4.1A/tickMark.json');
        _this.load.image('Level41A_croc','assets/gradeAssets/4.1A/gameAssets/croc.png');
        _this.load.image('Level41A_croc2','assets/gradeAssets/4.1A/gameAssets/croc2.png');
        
        _this.load.image('Level41A_glow','assets/gradeAssets/4.1A/gameAssets/glow.png');
        
        //game items
        _this.load.image('Level41A_cup1','assets/gradeAssets/4.1A/gameAssets/1.png');
        _this.load.image('Level41A_cup2','assets/gradeAssets/4.1A/gameAssets/2.png');
        _this.load.image('Level41A_cup3','assets/gradeAssets/4.1A/gameAssets/3.png');
        _this.load.image('Level41A_cup4','assets/gradeAssets/4.1A/gameAssets/4.png');
        
        _this.load.image('Level41A_bucket1','assets/gradeAssets/4.1A/gameAssets/5.png');
        _this.load.image('Level41A_bucket2','assets/gradeAssets/4.1A/gameAssets/6.png');
        _this.load.image('Level41A_bucket3','assets/gradeAssets/4.1A/gameAssets/7.png');
        _this.load.image('Level41A_bucket4','assets/gradeAssets/4.1A/gameAssets/8.png');
        
        _this.load.image('Level41A_jug1','assets/gradeAssets/4.1A/gameAssets/9.png');
        _this.load.image('Level41A_jug2','assets/gradeAssets/4.1A/gameAssets/10.png');
        _this.load.image('Level41A_jug3','assets/gradeAssets/4.1A/gameAssets/11.png');
        _this.load.image('Level41A_jug4','assets/gradeAssets/4.1A/gameAssets/12.png');
        
        _this.load.image('Level41A_flask1','assets/gradeAssets/4.1A/gameAssets/13.png');
        _this.load.image('Level41A_flask2','assets/gradeAssets/4.1A/gameAssets/14.png');
        _this.load.image('Level41A_flask3','assets/gradeAssets/4.1A/gameAssets/15.png');
        _this.load.image('Level41A_flask4','assets/gradeAssets/4.1A/gameAssets/16.png');
        
        _this.load.image('Level41A_bottle1','assets/gradeAssets/4.1A/gameAssets/17.png');
        _this.load.image('Level41A_bottle2','assets/gradeAssets/4.1A/gameAssets/18.png');
        _this.load.image('Level41A_bottle3','assets/gradeAssets/4.1A/gameAssets/19.png');
        _this.load.image('Level41A_bottle4','assets/gradeAssets/4.1A/gameAssets/20.png');
        
        _this.load.image('Level41A_milk1','assets/gradeAssets/4.1A/gameAssets/21.png');
        _this.load.image('Level41A_milk2','assets/gradeAssets/4.1A/gameAssets/22.png');
        _this.load.image('Level41A_milk3','assets/gradeAssets/4.1A/gameAssets/23.png');
        _this.load.image('Level41A_milk4','assets/gradeAssets/4.1A/gameAssets/24.png');
        
        _this.load.image('Level41A_shadow1','assets/gradeAssets/4.1A/gameAssets/shadow1.png');
        _this.load.image('Level41A_shadow2','assets/gradeAssets/4.1A/gameAssets/shadow2.png');
        _this.load.image('Level41A_shadow3','assets/gradeAssets/4.1A/gameAssets/shadow3.png');
        _this.load.image('Level41A_shadow4','assets/gradeAssets/4.1A/gameAssets/shadow4.png');
        _this.load.image('Level41A_shadow5','assets/gradeAssets/4.1A/gameAssets/shadow5.png');
        _this.load.image('Level41A_shadow6','assets/gradeAssets/4.1A/gameAssets/shadow6.png');
        
        //Loading 4.1C Assets
        _this.load.atlas('Level41A_gameBox3','assets/gradeAssets/4.1A/gameAssets/gameBox3.png' ,'json/gradeJson/4.1A/gameBox3.json');
        _this.load.atlas('Level41A_allimages','assets/gradeAssets/4.1A/gameAssets/allimages.png' ,'json/gradeJson/4.1A/allimages.json');
        _this.load.image('Level41A_bluebottle1','assets/gradeAssets/4.1A/gameAssets/bluebottle1.png');
        _this.load.image('Level41A_bluebottle2','assets/gradeAssets/4.1A/gameAssets/bluebottle2.png');
        
        _this.load.image('Level41A_glassfull1','assets/gradeAssets/4.1A/gameAssets/glassfull1.png');
        _this.load.image('Level41A_glassfull2','assets/gradeAssets/4.1A/gameAssets/glassfull2.png');
        _this.load.image('Level41A_glassfull3','assets/gradeAssets/4.1A/gameAssets/glassfull3.png');
        _this.load.image('Level41A_glassfull4','assets/gradeAssets/4.1A/gameAssets/glassfull4.png');
        
        _this.load.image('Level41A_greendrum1','assets/gradeAssets/4.1A/gameAssets/greendrum1.png');
        _this.load.image('Level41A_greendrum2','assets/gradeAssets/4.1A/gameAssets/greendrum2.png');
        _this.load.image('Level41A_greendrum3','assets/gradeAssets/4.1A/gameAssets/greendrum3.png');
        
        _this.load.image('Level41A_greenmug1','assets/gradeAssets/4.1A/gameAssets/greenmug1.png');
        _this.load.image('Level41A_greenmug2','assets/gradeAssets/4.1A/gameAssets/greenmug2.png');
        
        _this.load.image('Level41A_greencup1','assets/gradeAssets/4.1A/gameAssets/greencup1.png');
        _this.load.image('Level41A_greencup2','assets/gradeAssets/4.1A/gameAssets/greencup2.png');
        
        _this.load.image('Level41A_greenpot1','assets/gradeAssets/4.1A/gameAssets/greenpot1.png');
        _this.load.image('Level41A_greenpot2','assets/gradeAssets/4.1A/gameAssets/greenpot2.png');
        _this.load.image('Level41A_greenpot3','assets/gradeAssets/4.1A/gameAssets/greenpot3.png');
        _this.load.image('Level41A_greenpot4','assets/gradeAssets/4.1A/gameAssets/greenpot4.png');
        
        _this.load.image('Level41A_orangebucket1','assets/gradeAssets/4.1A/gameAssets/orangebucket1.png');
        _this.load.image('Level41A_orangebucket2','assets/gradeAssets/4.1A/gameAssets/orangebucket2.png');
        
        _this.load.image('Level41A_orangecan1','assets/gradeAssets/4.1A/gameAssets/orangecan1.png');
        _this.load.image('Level41A_orangecan2','assets/gradeAssets/4.1A/gameAssets/orangecan2.png');
        _this.load.image('Level41A_orangecan3','assets/gradeAssets/4.1A/gameAssets/orangecan3.png');
        
        _this.load.image('Level41A_orangejug1','assets/gradeAssets/4.1A/gameAssets/orangejug1.png');
        _this.load.image('Level41A_orangejug2','assets/gradeAssets/4.1A/gameAssets/orangejug2.png');
        
        _this.load.image('Level41A_pinkbucket1','assets/gradeAssets/4.1A/gameAssets/pinkbucket1.png');
        _this.load.image('Level41A_pinkbucket2','assets/gradeAssets/4.1A/gameAssets/pinkbucket2.png');
        _this.load.image('Level41A_pinkbucket3','assets/gradeAssets/4.1A/gameAssets/pinkbucket3.png');
        
        _this.load.image('Level41A_pinkmug1','assets/gradeAssets/4.1A/gameAssets/pinkmug1.png');
        _this.load.image('Level41A_pinkmug2','assets/gradeAssets/4.1A/gameAssets/pinkmug2.png');
        
        _this.load.image('Level41A_redjug1','assets/gradeAssets/4.1A/gameAssets/redjug1.png');
        _this.load.image('Level41A_redjug2','assets/gradeAssets/4.1A/gameAssets/redjug2.png');
        _this.load.image('Level41A_redjug3','assets/gradeAssets/4.1A/gameAssets/redjug3.png');
        _this.load.image('Level41A_redjug4','assets/gradeAssets/4.1A/gameAssets/redjug4.png');
        
        _this.load.image('Level41A_syntex1','assets/gradeAssets/4.1A/gameAssets/syntex1.png');
        _this.load.image('Level41A_syntex2','assets/gradeAssets/4.1A/gameAssets/syntex2.png');
        
        _this.load.image('Level41A_whitemug1','assets/gradeAssets/4.1A/gameAssets/whitemug1.png');
        _this.load.image('Level41A_whitesoda1','assets/gradeAssets/4.1A/gameAssets/whitesoda1.png');
        _this.load.image('Level41A_whitesoda2','assets/gradeAssets/4.1A/gameAssets/whitesoda2.png');
        
        _this.load.image('Level41A_yellowct1','assets/gradeAssets/4.1A/gameAssets/yellowct1.png');
        _this.load.image('Level41A_bottleone','assets/gradeAssets/4.1A/gameAssets/bottleone.png');
        
        _this.load.image('Level41A_bluebottle1_shadow','assets/gradeAssets/4.1A/gameAssets/bluebottle1_shadow.png');
        _this.load.image('Level41A_glassfull1_shadow','assets/gradeAssets/4.1A/gameAssets/glassfull1_shadow.png');
        _this.load.image('Level41A_glassfull2_shadow','assets/gradeAssets/4.1A/gameAssets/glassfull2_shadow.png');
        _this.load.image('Level41A_greendrum1_shadow','assets/gradeAssets/4.1A/gameAssets/greendrum1_shadow.png');
        _this.load.image('Level41A_greendrum2_shadow','assets/gradeAssets/4.1A/gameAssets/greendrum2_shadow.png');
        _this.load.image('Level41A_greenmug1_shadow','assets/gradeAssets/4.1A/gameAssets/greenmug1_shadow.png');
        _this.load.image('Level41A_greenpot1_shadow','assets/gradeAssets/4.1A/gameAssets/greenpot1_shadow.png');
        _this.load.image('Level41A_orangebucket1_shadow','assets/gradeAssets/4.1A/gameAssets/orangebucket1_shadow.png');
        _this.load.image('Level41A_orangebucket2_shadow','assets/gradeAssets/4.1A/gameAssets/orangebucket2_shadow.png');
        _this.load.image('Level41A_orangecan1_shadow','assets/gradeAssets/4.1A/gameAssets/orangecan1_shadow.png');
        _this.load.image('Level41A_orangecan2_shadow','assets/gradeAssets/4.1A/gameAssets/orangecan2_shadow.png');
        _this.load.image('Level41A_orangejug1_shadow','assets/gradeAssets/4.1A/gameAssets/orangejug1_shadow.png');
        _this.load.image('Level41A_orangejug2_shadow','assets/gradeAssets/4.1A/gameAssets/orangejug2_shadow.png');
        _this.load.image('Level41A_pinkbucket1_shadow','assets/gradeAssets/4.1A/gameAssets/pinkbucket1_shadow.png');
        _this.load.image('Level41A_pinkbucket2_shadow','assets/gradeAssets/4.1A/gameAssets/pinkbucket2_shadow.png');
        _this.load.image('Level41A_pinkmug1_shadow','assets/gradeAssets/4.1A/gameAssets/pinkmug1_shadow.png');
        _this.load.image('Level41A_redjug1_shadow','assets/gradeAssets/4.1A/gameAssets/redjug1_shadow.png');
        _this.load.image('Level41A_syntex1_shadow','assets/gradeAssets/4.1A/gameAssets/syntex1_shadow.png');
        _this.load.image('Level41A_syntex2_shadow','assets/gradeAssets/4.1A/gameAssets/syntex2_shadow.png');
        _this.load.image('Level41A_whitemug1_shadow','assets/gradeAssets/4.1A/gameAssets/whitemug1_shadow.png');
        _this.load.image('Level41A_whitesoda1_shadow','assets/gradeAssets/4.1A/gameAssets/whitesoda1_shadow.png');
        
        //load 4.1A assets
        _this.load.image('Level41A_bg4_1','assets/gradeAssets/4.1A/gameAssets/akshbg41.png');
        _this.load.atlas('Level41A_bottlefull','assets/gradeAssets/4.1A/gameAssets/bottlefull.png' ,'json/gradeJson/4.1A/bottlefull.json');
        _this.load.atlas('Level41A_bottlehalf','assets/gradeAssets/4.1A/gameAssets/bottlehalf.png' ,'json/gradeJson/4.1A/bottlehalf.json');
        _this.load.atlas('Level41A_bottlequarter','assets/gradeAssets/4.1A/gameAssets/bottlequarter.png' ,'json/gradeJson/4.1A/bottlequarter.json');
        _this.load.atlas('Level41A_bucketfull','assets/gradeAssets/4.1A/gameAssets/bucketfull.png' ,'json/gradeJson/4.1A/bucketfull.json');
        _this.load.atlas('Level41A_buckethalf','assets/gradeAssets/4.1A/gameAssets/buckethalf.png' ,'json/gradeJson/4.1A/buckethalf.json');
        _this.load.atlas('Level41A_bucketquarter','assets/gradeAssets/4.1A/gameAssets/bucketquarter.png' ,'json/gradeJson/4.1A/bucketquarter.json');
        _this.load.atlas('Level41A_glassfull','assets/gradeAssets/4.1A/gameAssets/glassfull.png' ,'json/gradeJson/4.1A/glassfull.json');
        _this.load.atlas('Level41A_glasshalf','assets/gradeAssets/4.1A/gameAssets/glasshalf.png' ,'json/gradeJson/4.1A/glasshalf.json');
        _this.load.atlas('Level41A_glassquarter','assets/gradeAssets/4.1A/gameAssets/glassquarter.png' ,'json/gradeJson/4.1A/glassquarter.json');
        _this.load.atlas('Level41A_jugfull','assets/gradeAssets/4.1A/gameAssets/jugfull.png' ,'json/gradeJson/4.1A/jugfull.json');
        _this.load.atlas('Level41A_jughalf','assets/gradeAssets/4.1A/gameAssets/jughalf.png' ,'json/gradeJson/4.1A/jughalf.json');
        _this.load.atlas('Level41A_jugquarter','assets/gradeAssets/4.1A/gameAssets/jugquarter.png' ,'json/gradeJson/4.1A/jugquarter.json');
        _this.load.atlas('Level41A_mugfull','assets/gradeAssets/4.1A/gameAssets/mugfull.png' ,'json/gradeJson/4.1A/mugfull.json');
        _this.load.atlas('Level41A_mughalf','assets/gradeAssets/4.1A/gameAssets/mughalf.png' ,'json/gradeJson/4.1A/mughalf.json');
        _this.load.atlas('Level41A_mugquarter','assets/gradeAssets/4.1A/gameAssets/mugquarter.png' ,'json/gradeJson/4.1A/mugquarter.json');
        _this.load.atlas('Level41A_sodafull','assets/gradeAssets/4.1A/gameAssets/sodafull.png' ,'json/gradeJson/4.1A/sodafull.json');
        _this.load.atlas('Level41A_sodahalf','assets/gradeAssets/4.1A/gameAssets/sodahalf.png' ,'json/gradeJson/4.1A/sodahalf.json');
        _this.load.atlas('Level41A_sodaquarter','assets/gradeAssets/4.1A/gameAssets/sodaquarter.png' ,'json/gradeJson/4.1A/sodaquarter.json');
        _this.load.image('Level41A_bottle_shadow','assets/gradeAssets/4.1A/gameAssets/bottle_shadow.png');
        _this.load.image('Level41A_bucket_shadow','assets/gradeAssets/4.1A/gameAssets/bucket_shadow.png');
        _this.load.image('Level41A_glass_shadow','assets/gradeAssets/4.1A/gameAssets/glass_shadow.png');
        _this.load.image('Level41A_jug_shadow','assets/gradeAssets/4.1A/gameAssets/jug_shadow.png');
        _this.load.image('Level41A_mug_shadow','assets/gradeAssets/4.1A/gameAssets/mug_shadow.png');
        _this.load.image('Level41A_soda_shadow','assets/gradeAssets/4.1A/gameAssets/soda_shadow.png');
		
		
		
		/*_this.load.audio('Eng_41A1', 'questionSounds/4.1A/English/4.1A1.mp3');
        _this.load.audio('Eng_41A2', 'questionSounds/4.1A/English/4.1A2.mp3');
        _this.load.audio('Eng_41A3', 'questionSounds/4.1A/English/4.1A3.mp3');
        _this.load.audio('Eng_41B1', 'questionSounds/4.1A/English/4.1B1.mp3');
        _this.load.audio('Eng_41B2', 'questionSounds/4.1A/English/4.1B2.mp3');
        _this.load.audio('Eng_41C1', 'questionSounds/4.1A/English/4.1C1.mp3');
        _this.load.audio('Eng_41C2', 'questionSounds/4.1A/English/4.1C2.mp3');
        _this.load.audio('Kan_41A1', 'questionSounds/4.1A/Kannada/4.1A1.mp3');
        _this.load.audio('Kan_41A2', 'questionSounds/4.1A/Kannada/4.1A2.mp3');
        _this.load.audio('Kan_41A3', 'questionSounds/4.1A/Kannada/4.1A3.mp3');
        _this.load.audio('Kan_41B1', 'questionSounds/4.1A/Kannada/4.1B1.mp3');
        _this.load.audio('Kan_41B2', 'questionSounds/4.1A/Kannada/4.1B2.mp3');
        _this.load.audio('Kan_41C1', 'questionSounds/4.1A/Kannada/4.1C1.mp3');
        _this.load.audio('Kan_41C2', 'questionSounds/4.1A/Kannada/4.1C2.mp3');
        _this.load.audio('Hin_41A1', 'questionSounds/4.1A/Hindi/4.1A1 OPTION1.mp3');
        _this.load.audio('Hin_41A2', 'questionSounds/4.1A/Hindi/4.1A2.mp3');
        _this.load.audio('Hin_41A3', 'questionSounds/4.1A/Hindi/4.1A3 Option.mp3');
        _this.load.audio('Hin_41B1', 'questionSounds/4.1A/Hindi/4.1B1.mp3');
        _this.load.audio('Hin_41B2', 'questionSounds/4.1A/Hindi/4.1B2.mp3');
        _this.load.audio('Hin_41C1', 'questionSounds/4.1A/Hindi/4.1C1.mp3');
        _this.load.audio('Hin_41C2', 'questionSounds/4.1A/Hindi/4.1C2.mp3');*/
	},
	
	addgame4_2AAssets:function()
	{
		/*_this.load.image('Level42A_bgA','assets/gradeAssets/4.2A/commonAssets/bgA.png');
        //_this.load.atlas('Level42A_backbtn','assets/gradeAssets/4.2A/commonAssets/backbtn.png' ,'json/gradeJson/4.2A/backbtn.json');
        //_this.load.atlas('Level42A_speaker','assets/gradeAssets/4.2A/commonAssets/speaker.png' ,'json/gradeJson/4.2A/speaker.json');
        //_this.load.atlas('Level42A_starAnim','assets/gradeAssets/4.2A/commonAssets/starAnim.png','json/gradeJson/4.2A/starAnim.json');
        _this.load.image('Level42A_cloud','assets/gradeAssets/4.2A/commonAssets/cloud.png');
        //_this.load.atlas('Level42A_btn','assets/gradeAssets/4.2A/commonAssets/btn.png','json/gradeJson/4.2A/btn.json');
        _this.load.image('Level42A_bg3','assets/gradeAssets/4.2A/commonAssets/bg3.png');
        //_this.load.image('Level42A_tittleBaar','assets/gradeAssets/4.2A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level42A_replay','assets/gradeAssets/4.2A/commonAssets/reply.png' ,'json/gradeJson/4.2A/reply.json');
        
        //Load 4.2A Assets
        _this.load.atlas('Level42A_bottle','assets/gradeAssets/4.2A/gameAssets/bottle.png' ,'json/gradeJson/4.2A/bottle.json');
        _this.load.atlas('Level42A_bottleblue','assets/gradeAssets/4.2A/gameAssets/bottleblue.png' ,'json/gradeJson/4.2A/bottleblue.json');
        _this.load.atlas('Level42A_bucket','assets/gradeAssets/4.2A/gameAssets/bucket.png' ,'json/gradeJson/4.2A/bucket.json');
        _this.load.atlas('Level42A_cup','assets/gradeAssets/4.2A/gameAssets/cup.png' ,'json/gradeJson/4.2A/cup.json');
        _this.load.atlas('Level42A_cupreverse','assets/gradeAssets/4.2A/gameAssets/cupreverse.png' ,'json/gradeJson/4.2A/cupreverse.json');
        _this.load.atlas('Level42A_glass','assets/gradeAssets/4.2A/gameAssets/glass.png' ,'json/gradeJson/4.2A/glass.json');
        _this.load.atlas('Level42A_jug','assets/gradeAssets/4.2A/gameAssets/jug.png' ,'json/gradeJson/4.2A/jug.json');
        _this.load.atlas('Level42A_pinkmug','assets/gradeAssets/4.2A/gameAssets/pinkmug.png' ,'json/gradeJson/4.2A/pinkmug.json');
        _this.load.atlas('Level42A_soda','assets/gradeAssets/4.2A/gameAssets/soda.png' ,'json/gradeJson/4.2A/soda.json');
        _this.load.image('Level42A_box','assets/gradeAssets/4.2A/gameAssets/box.png');
        
        
        //Load 4.2C Assets
        _this.load.atlas('Level42A_bluebottlec','assets/gradeAssets/4.2A/gameAssets/bluebottlec.png' ,'json/gradeJson/4.2A/bluebottlec.json');
        _this.load.atlas('Level42A_bluebucketc','assets/gradeAssets/4.2A/gameAssets/bluebucketc.png' ,'json/gradeJson/4.2A/bluebucketc.json');
        _this.load.atlas('Level42A_bottlec','assets/gradeAssets/4.2A/gameAssets/bottlec.png' ,'json/gradeJson/4.2A/bottlec.json');
        _this.load.atlas('Level42A_greenmugc','assets/gradeAssets/4.2A/gameAssets/greenmugc.png' ,'json/gradeJson/4.2A/greenmugc.json');
        _this.load.atlas('Level42A_pinkbucketc','assets/gradeAssets/4.2A/gameAssets/pinkbucketc.png' ,'json/gradeJson/4.2A/pinkbucketc.json');
        _this.load.atlas('Level42A_potsplashc','assets/gradeAssets/4.2A/gameAssets/potsplashc.png' ,'json/gradeJson/4.2A/potsplashc.json');
        _this.load.atlas('Level42A_vessel2c','assets/gradeAssets/4.2A/gameAssets/vessel2c.png' ,'json/gradeJson/4.2A/vessel2c.json');
        _this.load.atlas('Level42A_yellowctc','assets/gradeAssets/4.2A/gameAssets/yellowctc.png' ,'json/gradeJson/4.2A/yellowctc.json');
        _this.load.image('Level42A_maskbg','assets/gradeAssets/4.2A/gameAssets/maskbg.png');
        _this.load.image('Level42A_common_shadow','assets/gradeAssets/4.2A/gameAssets/common_shadow.png');
        
        //LEVELB
        
        _this.load.atlas('Level42A_tank2','assets/gradeAssets/4.2A/gameAssets/levelB/tank.png' ,'json/gradeJson/4.2A/levelB/tank.json');
        _this.load.atlas('Level42A_drum2','assets/gradeAssets/4.2A/gameAssets/levelB/drum.png' ,'json/gradeJson/4.2A/levelB/drum.json');
        _this.load.atlas('Level42A_pot2','assets/gradeAssets/4.2A/gameAssets/levelB/pot.png' ,'json/gradeJson/4.2A/levelB/pot.json');
        _this.load.image('Level42A_box','assets/gradeAssets/4.2A/gameAssets/levelB/box.png');
        _this.load.image('Level42A_darkbg1','assets/gradeAssets/4.2A/gameAssets/levelB/darkbg1.png');
        _this.load.image('Level42A_darkbg2','assets/gradeAssets/4.2A/gameAssets/levelB/darkbg2.png');
        _this.load.image('Level42A_mainbox','assets/gradeAssets/4.2A/gameAssets/levelB/mainbox.png');
        _this.load.atlas('Level42A_tick','assets/gradeAssets/4.2A/gameAssets/levelB/tick.png' ,'json/gradeJson/4.2A/levelB/tick.json');
        
        _this.load.atlas('Level42A_cookerB','assets/gradeAssets/4.2A/gameAssets/levelB/cooker.png' ,'json/gradeJson/4.2A/levelB/cooker.json');
        _this.load.atlas('Level42A_bottleB','assets/gradeAssets/4.2A/gameAssets/levelB/bottle.png' ,'json/gradeJson/4.2A/levelB/bottle.json');
        _this.load.atlas('Level42A_jugB','assets/gradeAssets/4.2A/gameAssets/levelB/jug.png' ,'json/gradeJson/4.2A/levelB/jug.json');
        _this.load.image('Level42A_coffeecup','assets/gradeAssets/4.2A/gameAssets/levelB/coffeecup.png');
        
        _this.load.atlas('Level42A_mugB','assets/gradeAssets/4.2A/gameAssets/levelB/mug.png' ,'json/gradeJson/4.2A/levelB/mug.json');
        _this.load.atlas('Level42A_orangebottleB','assets/gradeAssets/4.2A/gameAssets/levelB/orangebottle.png' ,'json/gradeJson/4.2A/levelB/orangebottle.json');
        _this.load.atlas('Level42A_canB','assets/gradeAssets/4.2A/gameAssets/levelB/can.png' ,'json/gradeJson/4.2A/levelB/can.json');
        
        _this.load.atlas('Level42A_greenbot22','assets/gradeAssets/4.2A/gameAssets/levelB/greenbot22.png' ,'json/gradeJson/4.2A/levelB/greenbot22.json');
        _this.load.atlas('Level42A_bottle22','assets/gradeAssets/4.2A/gameAssets/levelB/bottle22.png' ,'json/gradeJson/4.2A/levelB/bottle22.json');
        
        _this.load.atlas('Level42A_pinkglass','assets/gradeAssets/4.2A/gameAssets/levelB/pinkglass.png' ,'json/gradeJson/4.2A/levelB/pinkglass.json');
        _this.load.atlas('Level42A_greencup','assets/gradeAssets/4.2A/gameAssets/levelB/greencup.png' ,'json/gradeJson/4.2A/levelB/greencup.json');
        _this.load.atlas('Level42A_smallbottle','assets/gradeAssets/4.2A/gameAssets/levelB/smallbottle.png' ,'json/gradeJson/4.2A/levelB/smallbottle.json');
        _this.load.image('Level42A_spoon','assets/gradeAssets/4.2A/gameAssets/levelB/spoon.png');
        
        _this.load.atlas('Level42A_bucket33','assets/gradeAssets/4.2A/gameAssets/levelB/bucket.png' ,'json/gradeJson/4.2A/levelB/bucket.json');
        _this.load.image('Level42A_greena1','assets/gradeAssets/4.2A/gameAssets/levelB/greena1.png');
        
        _this.load.atlas('Level42A_bottle44','assets/gradeAssets/4.2A/gameAssets/levelB/bottle44.png' ,'json/gradeJson/4.2A/levelB/bottle44.json');
        _this.load.atlas('Level42A_redmug','assets/gradeAssets/4.2A/gameAssets/levelB/redmug.png' ,'json/gradeJson/4.2A/levelB/redmug.json');
        _this.load.atlas('Level42A_glass44','assets/gradeAssets/4.2A/gameAssets/levelB/glass44.png' ,'json/gradeJson/4.2A/levelB/glass44.json');
        
        _this.load.atlas('Level42A_pot222','assets/gradeAssets/4.2A/gameAssets/levelB/pot222.png' ,'json/gradeJson/4.2A/levelB/pot222.json');
        _this.load.atlas('Level42A_can222','assets/gradeAssets/4.2A/gameAssets/levelB/can222.png' ,'json/gradeJson/4.2A/levelB/can222.json');
        _this.load.atlas('Level42A_watercontainer','assets/gradeAssets/4.2A/gameAssets/levelB/watercontainer.png' ,'json/gradeJson/4.2A/levelB/watercontainer.json');
        
        _this.load.image('Level42A_shadow7','assets/gradeAssets/4.2A/gameAssets/levelB/shadow7.png');
        _this.load.image('Level42A_shadow8','assets/gradeAssets/4.2A/gameAssets/levelB/shadow8.png');
        _this.load.image('Level42A_shadow9','assets/gradeAssets/4.2A/gameAssets/levelB/shadow9.png');
        
        _this.load.image('Level42A_a1','assets/gradeAssets/4.2A/gameAssets/levelB/a1.png');
        _this.load.atlas('Level42A_a11','assets/gradeAssets/4.2A/gameAssets/levelB/a11.png','json/gradeJson/4.2A/levelB/a11.json');
        
        _this.load.atlas('Level42A_boxb','assets/gradeAssets/4.2A/gameAssets/levelB/boxb.png' ,'json/gradeJson/4.2A/levelB/boxb.json');
        
		/*_this.load.audio('waterFillingSound', 'questionSounds/4.2A/waterFillingSound.mp3');
        _this.load.audio('watersplash','questionSounds/4.2A/watersplash.mp3');
        
		_this.load.audio('Eng_42A1', 'questionSounds/4.2A/English/4.2A1.mp3');
        _this.load.audio('Eng_42B1', 'questionSounds/4.2A/English/4.2B1.mp3');
        _this.load.audio('Eng_42C1', 'questionSounds/4.2A/English/4.2C1.mp3');
        _this.load.audio('Kan_42A1', 'questionSounds/4.2A/Kannada/4.2A1.mp3');
        _this.load.audio('Kan_42B1', 'questionSounds/4.2A/Kannada/4.2B1.mp3');
        _this.load.audio('Kan_42C1', 'questionSounds/4.2A/Kannada/4.2C1.mp3');
        _this.load.audio('Hin_42A1', 'questionSounds/4.2A/Hindi/4.2A1.mp3');
        _this.load.audio('Hin_42B1', 'questionSounds/4.2A/Hindi/4.2B1.mp3');
        _this.load.audio('Hin_42C1', 'questionSounds/4.2A/Hindi/4.2C1.mp3');*/


        this.load.image('Level42A_bgA','assets/gradeAssets/4.2A/commonAssets/bgA.png');
        this.load.atlas('Level42A_CommonBackBtn','assets/gradeAssets/4.2A/commonAssets/backbtn.png' ,'json/gradeJson/4.2A/backbtn.json');
        this.load.atlas('Level42A_CommonSpeakerBtn','assets/gradeAssets/4.2A/commonAssets/speaker.png' ,'json/gradeJson/4.2A/speaker.json');
        this.load.atlas('Level42A_CommonStarAnim','assets/gradeAssets/4.2A/commonAssets/starAnim.png','json/gradeJson/4.2A/starAnim.json');
        this.load.atlas('Level42A_btn','assets/gradeAssets/4.2A/commonAssets/btn.png','json/gradeJson/4.2A/btn.json');
        this.load.image('Level42A_bg3','assets/gradeAssets/4.2A/commonAssets/bg3.png');
        this.load.image('Level42A_tittleBaar','assets/gradeAssets/4.2A/commonAssets/tittleBaar.png');
        this.load.atlas('Level42A_replay','assets/gradeAssets/4.2A/commonAssets/reply.png' ,'json/gradeJson/4.2A/reply.json');
        this.load.image('Level42A_footer','assets/gradeAssets/4.2A/commonAssets/footer.png');
        this.load.image('Level42A_Topbar','assets/gradeAssets/4.2A/commonAssets/Topbar.png');
        this.load.image('Level42A_timer','assets/gradeAssets/4.2A/commonAssets/timer.png');
        this.load.image('Level42A_dottedBox','assets/gradeAssets/4.2A/commonAssets/dottedBox.png');
        this.load.image('Level42A_c','assets/gradeAssets/4.2A/commonAssets/c.png');
        
        this.load.atlas('Level42A_bottle','assets/gradeAssets/4.2A/bottle.png' ,'json/gradeJson/4.2A/bottle.json');
        this.load.atlas('Level42A_bottleblue','assets/gradeAssets/4.2A/bottleblue.png' ,'json/gradeJson/4.2A/bottleblue.json');
        this.load.atlas('Level42A_bucket','assets/gradeAssets/4.2A/bucket.png' ,'json/gradeJson/4.2A/bucket.json');
        this.load.atlas('Level42A_cup','assets/gradeAssets/4.2A/cup.png' ,'json/gradeJson/4.2A/cup.json');
        this.load.atlas('Level42A_cupreverse','assets/gradeAssets/4.2A/cupreverse.png' ,'json/gradeJson/4.2A/cupreverse.json');
        this.load.atlas('Level42A_glass','assets/gradeAssets/4.2A/glass.png' ,'json/gradeJson/4.2A/glass.json');
        this.load.atlas('Level42A_jug','assets/gradeAssets/4.2A/jug.png' ,'json/gradeJson/4.2A/jug.json');
        this.load.atlas('Level42A_pinkmug','assets/gradeAssets/4.2A/pinkmug.png' ,'json/gradeJson/4.2A/pinkmug.json');
        this.load.atlas('Level42A_soda','assets/gradeAssets/4.2A/soda.png' ,'json/gradeJson/4.2A/soda.json');
        this.load.image('Level42A_box','assets/gradeAssets/4.2A/box.png');
        this.load.atlas('Level42A_bluebottlec','assets/gradeAssets/4.2A/bluebottlec.png' ,'json/gradeJson/4.2A/bluebottlec.json');
        this.load.atlas('Level42A_bluebucketc','assets/gradeAssets/4.2A/bluebucketc.png' ,'json/gradeJson/4.2A/bluebucketc.json');
        this.load.atlas('Level42A_bottlec','assets/gradeAssets/4.2A/bottlec.png' ,'json/gradeJson/4.2A/bottlec.json');
        this.load.atlas('Level42A_greenmugc','assets/gradeAssets/4.2A/greenmugc.png' ,'json/gradeJson/4.2A/greenmugc.json');
        this.load.atlas('Level42A_pinkbucketc','assets/gradeAssets/4.2A/pinkbucketc.png' ,'json/gradeJson/4.2A/pinkbucketc.json');
        this.load.atlas('Level42A_potsplashc','assets/gradeAssets/4.2A/potsplashc.png' ,'json/gradeJson/4.2A/potsplashc.json');
        this.load.atlas('Level42A_vessel2c','assets/gradeAssets/4.2A/vessel2c.png' ,'json/gradeJson/4.2A/vessel2c.json');
        this.load.atlas('Level42A_yellowctc','assets/gradeAssets/4.2A/yellowctc.png' ,'json/gradeJson/4.2A/yellowctc.json');
        this.load.image('Level42A_common_shadow','assets/gradeAssets/4.2A/common_shadow.png');
        this.load.atlas('Level42A_calNum','assets/gradeAssets/4.2A/calNum.png' ,'json/gradeJson/4.2A/calNum.json');
        this.load.atlas('Level42A_tank','assets/gradeAssets/4.2A/tank.png' ,'json/gradeJson/4.2A/tank.json');
        this.load.atlas('Level42A_drum','assets/gradeAssets/4.2A/drum.png' ,'json/gradeJson/4.2A/drum.json');
        this.load.atlas('Level42A_pot2','assets/gradeAssets/4.2A/pot.png' ,'json/gradeJson/4.2A/pot.json');
        this.load.image('Level42A_darkbg1','assets/gradeAssets/4.2A/darkbg1.png');
        this.load.image('Level42A_darkbg2','assets/gradeAssets/4.2A/darkbg2.png');
        this.load.atlas('Level42A_cooker','assets/gradeAssets/4.2A/cooker.png' ,'json/gradeJson/4.2A/cooker.json');
        this.load.atlas('Level42A_jug2','assets/gradeAssets/4.2A/jug2.png' ,'json/gradeJson/4.2A/jug2.json');
        this.load.atlas('Level42A_can','assets/gradeAssets/4.2A/can.png' ,'json/gradeJson/4.2A/can.json');
        this.load.image('Level42A_spoon','assets/gradeAssets/4.2A/spoon.png');
        this.load.atlas('Level42A_rightBtn','assets/gradeAssets/4.2A/rightBtn.png' ,'json/gradeJson/4.2A/rightBtn.json');
        this.load.atlas('Level42A_eraser','assets/gradeAssets/4.2A/eraser.png' ,'json/gradeJson/4.2A/eraser.json');
        this.load.image('Level42A_redmark','assets/gradeAssets/4.2A/redmark.png');
	},

	addgame4_2BAssets:function()
	{
		this.load.image('Level42B_bgA','assets/gradeAssets/4.2B/commonAssets/bgA.png');
        this.load.atlas('Level42B_btn','assets/gradeAssets/4.2B/commonAssets/btn.png','json/gradeJson/4.2B/btn.json');
        this.load.image('Level42B_bg3','assets/gradeAssets/4.2B/commonAssets/bg3.png');
        this.load.image('Level42B_tittleBaar','assets/gradeAssets/4.2B/commonAssets/tittleBaar.png');
        this.load.atlas('Level42B_replay','assets/gradeAssets/4.2B/commonAssets/reply.png' ,'json/gradeJson/4.2B/reply.json');
        this.load.image('Level42B_footer','assets/gradeAssets/4.2B/commonAssets/footer.png');
        this.load.image('Level42B_Topbar','assets/gradeAssets/4.2B/commonAssets/Topbar.png');
        this.load.image('Level42B_timer','assets/gradeAssets/4.2B/commonAssets/timer.png');
        this.load.image('Level42B_dottedBox','assets/gradeAssets/4.2B/commonAssets/dottedBox.png');
        this.load.image('Level42B_c','assets/gradeAssets/4.2B/commonAssets/c.png');
        this.load.atlas('Level42B_calNum','assets/gradeAssets/4.2B/calNum.png' ,'json/gradeJson/4.2B/calNum.json');
        this.load.image('Level42B_redmark','assets/gradeAssets/4.2B/redmark.png');
    
        this.load.atlas('Level42B_bucket','assets/gradeAssets/4.2B/bucket.png' ,'json/gradeJson/4.2B/bucket.json');
        this.load.image('Level42B_box','assets/gradeAssets/4.2B/box.png');
        this.load.atlas('Level42B_tank','assets/gradeAssets/4.2B/tank.png' ,'json/gradeJson/4.2B/tank.json');
        this.load.atlas('Level42B_drum','assets/gradeAssets/4.2B/drum.png' ,'json/gradeJson/4.2B/drum.json');
        this.load.atlas('Level42B_drum2','assets/gradeAssets/4.2B/drum2.png' ,'json/gradeJson/4.2B/drum2.json');
        this.load.atlas('Level42B_pot','assets/gradeAssets/4.2B/pot.png' ,'json/gradeJson/4.2B/pot.json');
        this.load.atlas('Level42B_pot2','assets/gradeAssets/4.2B/pot2.png' ,'json/gradeJson/4.2B/pot2.json');
        this.load.image('Level42B_darkbg2','assets/gradeAssets/4.2B/darkbg2.png');
        this.load.image('Level42B_mainbox','assets/gradeAssets/4.2B/mainbox.png');
        this.load.atlas('Level42B_cooker','assets/gradeAssets/4.2B/cooker.png' ,'json/gradeJson/4.2B/cooker.json');
        this.load.atlas('Level42B_bottle2','assets/gradeAssets/4.2B/bottle2.png' ,'json/gradeJson/4.2B/bottle2.json');
        this.load.atlas('Level42B_jug2','assets/gradeAssets/4.2B/jug2.png' ,'json/gradeJson/4.2B/jug2.json');
        this.load.atlas('Level42B_mugB','assets/gradeAssets/4.2B/mug.png' ,'json/gradeJson/4.2B/mug.json');
        this.load.atlas('Level42B_orangebottleB','assets/gradeAssets/4.2B/orangebottle.png' ,'json/gradeJson/4.2B/orangebottle.json');
        this.load.atlas('Level42B_canB','assets/gradeAssets/4.2B/can.png' ,'json/gradeJson/4.2B/can.json');
        this.load.atlas('Level42B_greenbot22','assets/gradeAssets/4.2B/greenbot22.png' ,'json/gradeJson/4.2B/greenbot22.json');
        this.load.atlas('Level42B_bottle22','assets/gradeAssets/4.2B/bottle22.png' ,'json/gradeJson/4.2B/bottle22.json');
        this.load.atlas('Level42B_pinkglass','assets/gradeAssets/4.2B/pinkglass.png' ,'json/gradeJson/4.2B/pinkglass.json');
        this.load.atlas('Level42B_greencup','assets/gradeAssets/4.2B/greencup.png' ,'json/gradeJson/4.2B/greencup.json');
        this.load.atlas('Level42B_smallbottle','assets/gradeAssets/4.2B/smallbottle.png' ,'json/gradeJson/4.2B/smallbottle.json');
        this.load.atlas('Level42B_bottle44','assets/gradeAssets/4.2B/bottle44.png' ,'json/gradeJson/4.2B/bottle44.json');
        this.load.atlas('Level42B_redmug','assets/gradeAssets/4.2B/redmug.png' ,'json/gradeJson/4.2B/redmug.json');
        this.load.atlas('Level42B_glass44','assets/gradeAssets/4.2B/glass44.png' ,'json/gradeJson/4.2B/glass44.json');
        this.load.atlas('Level42B_pot222','assets/gradeAssets/4.2B/pot222.png' ,'json/gradeJson/4.2B/pot222.json');
        this.load.atlas('Level42B_can222','assets/gradeAssets/4.2B/can222.png' ,'json/gradeJson/4.2B/can222.json');
        this.load.atlas('Level42B_watercontainer','assets/gradeAssets/4.2B/watercontainer.png' ,'json/gradeJson/4.2B/watercontainer.json');
        this.load.image('Level42B_shadow7','assets/gradeAssets/4.2B/shadow7.png');
        this.load.image('Level42B_shadow8','assets/gradeAssets/4.2B/shadow8.png');
        this.load.image('Level42B_shadow9','assets/gradeAssets/4.2B/shadow9.png');
        this.load.atlas('Level42B_a11','assets/gradeAssets/4.2B/a11.png','json/gradeJson/4.2B/a11.json');
        this.load.atlas('Level42B_boxb','assets/gradeAssets/4.2B/boxb.png' ,'json/gradeJson/4.2B/boxb.json');
        this.load.atlas('Level42B_rightBtn','assets/gradeAssets/4.2B/rightBtn.png' ,'json/gradeJson/4.2B/rightBtn.json');
        this.load.atlas('Level42B_eraser','assets/gradeAssets/4.2B/eraser.png' ,'json/gradeJson/4.2B/eraser.json');
	},



	addgame4_2CAssets:function()
	{
		this.load.image('Level42C_bgC','assets/gradeAssets/4.2C/commonAssets/bgC.png');
        this.load.atlas('Level42C_btn','assets/gradeAssets/4.2C/commonAssets/btn.png','json/gradeJson/4.2C/btn.json');
        this.load.image('Level42C_bg3','assets/gradeAssets/4.2C/commonAssets/bg3.png');
        this.load.image('Level42C_tittleBaar','assets/gradeAssets/4.2C/commonAssets/tittleBaar.png');
        this.load.atlas('Level42C_replay','assets/gradeAssets/4.2C/commonAssets/reply.png' ,'json/gradeJson/4.2C/reply.json');
        this.load.image('Level42C_footer','assets/gradeAssets/4.2C/commonAssets/footer.png');
        this.load.image('Level42C_Topbar','assets/gradeAssets/4.2C/commonAssets/Topbar.png');
        this.load.image('Level42C_timer','assets/gradeAssets/4.2C/commonAssets/timer.png');
        this.load.image('Level42C_dottedBox','assets/gradeAssets/4.2C/commonAssets/dottedBox.png');
        this.load.image('Level42C_c','assets/gradeAssets/4.2C/commonAssets/c.png');
        this.load.atlas('Level42C_calNum','assets/gradeAssets/4.2C/calNum.png' ,'json/gradeJson/4.2C/calNum.json');
        this.load.atlas('Level42C_glass','assets/gradeAssets/4.2C/glass.png' ,'json/gradeJson/4.2C/glass.json');
        this.load.image('Level42C_box','assets/gradeAssets/4.2C/box.png');
        this.load.image('Level42C_redmark','assets/gradeAssets/4.2C/redmark.png');
        
        this.load.atlas('Level42C_bluebottlec','assets/gradeAssets/4.2C/bluebottlec.png' ,'json/gradeJson/4.2C/bluebottlec.json');
        this.load.atlas('Level42C_bluebucketc1','assets/gradeAssets/4.2C/bluebucketc1.png' ,'json/gradeJson/4.2C/bluebucketc1.json');
        this.load.atlas('Level42C_bluebucketc2','assets/gradeAssets/4.2C/bluebucketc2.png' ,'json/gradeJson/4.2C/bluebucketc2.json');
        this.load.atlas('Level42C_bottlec','assets/gradeAssets/4.2C/bottlec.png' ,'json/gradeJson/4.2C/bottlec.json');
        this.load.atlas('Level42C_greenmugc1','assets/gradeAssets/4.2C/greenmugc1.png' ,'json/gradeJson/4.2C/greenmugc1.json');
        this.load.atlas('Level42C_greenmugc2','assets/gradeAssets/4.2C/greenmugc2.png' ,'json/gradeJson/4.2C/greenmugc2.json');
        this.load.atlas('Level42C_pinkbucketc','assets/gradeAssets/4.2C/pinkbucketc.png' ,'json/gradeJson/4.2C/pinkbucketc.json');
        this.load.atlas('Level42C_potsplash1','assets/gradeAssets/4.2C/potsplash1.png' ,'json/gradeJson/4.2C/potsplash1.json');
        this.load.atlas('Level42C_potsplash2','assets/gradeAssets/4.2C/potsplash2.png' ,'json/gradeJson/4.2C/potsplash2.json');
        this.load.atlas('Level42C_vessel1','assets/gradeAssets/4.2C/vessel1.png' ,'json/gradeJson/4.2C/vessel1.json');
        this.load.atlas('Level42C_vessel2','assets/gradeAssets/4.2C/vessel2.png' ,'json/gradeJson/4.2C/vessel2.json');
        this.load.atlas('Level42C_yellowctc','assets/gradeAssets/4.2C/yellowctc.png' ,'json/gradeJson/4.2C/yellowctc.json');
        this.load.image('Level42C_maskbg','assets/gradeAssets/4.2C/maskbg.png');
        this.load.image('Level42C_common_shadow','assets/gradeAssets/4.2C/common_shadow.png');
        this.load.atlas('Level42C_tank1','assets/gradeAssets/4.2C/tank1.png' ,'json/gradeJson/4.2C/tank1.json');
        this.load.atlas('Level42C_tank2','assets/gradeAssets/4.2C/tank2.png' ,'json/gradeJson/4.2C/tank2.json');
        this.load.atlas('Level42C_drum2','assets/gradeAssets/4.2C/drum.png' ,'json/gradeJson/4.2C/drum.json');
        this.load.atlas('Level42C_pot2','assets/gradeAssets/4.2C/pot.png' ,'json/gradeJson/4.2C/pot.json');
        this.load.atlas('Level42C_cooker1','assets/gradeAssets/4.2C/cooker1.png' ,'json/gradeJson/4.2C/cooker1.json');
        this.load.atlas('Level42C_cooker2','assets/gradeAssets/4.2C/cooker2.png' ,'json/gradeJson/4.2C/cooker2.json');
        this.load.atlas('Level42C_bottleB','assets/gradeAssets/4.2C/bottle.png' ,'json/gradeJson/4.2C/bottle.json');
        this.load.atlas('Level42C_jugB','assets/gradeAssets/4.2C/jug.png' ,'json/gradeJson/4.2C/jug.json');
        this.load.image('Level42C_coffeecup','assets/gradeAssets/4.2C/coffeecup.png');
        this.load.atlas('Level42C_mug1','assets/gradeAssets/4.2C/mug1.png' ,'json/gradeJson/4.2C/mug1.json');
        this.load.atlas('Level42C_mug2','assets/gradeAssets/4.2C/mug2.png' ,'json/gradeJson/4.2C/mug2.json');
        this.load.atlas('Level42C_can1','assets/gradeAssets/4.2C/can1.png' ,'json/gradeJson/4.2C/can1.json');
        this.load.atlas('Level42C_can2','assets/gradeAssets/4.2C/can2.png' ,'json/gradeJson/4.2C/can2.json');
        this.load.atlas('Level42C_greenbot22','assets/gradeAssets/4.2C/greenbot22.png' ,'json/gradeJson/4.2C/greenbot22.json');
        this.load.image('Level42C_greena1','assets/gradeAssets/4.2C/greena1.png');
        this.load.image('Level42C_a1','assets/gradeAssets/4.2C/a1.png');
        this.load.atlas('Level42C_a11','assets/gradeAssets/4.2C/a11.png','json/gradeJson/4.2C/a11.json'); 
        this.load.atlas('Level42C_boxb','assets/gradeAssets/4.2C/boxb.png' ,'json/gradeJson/4.2C/boxb.json');
        this.load.atlas('Level42C_numbg','assets/gradeAssets/4.2C/numbg.png' ,'json/gradeJson/4.2C/numbg.json');
        this.load.atlas('Level42C_rightBtn','assets/gradeAssets/4.2C/rightBtn.png' ,'json/gradeJson/4.2C/rightBtn.json');
        this.load.atlas('Level42C_eraser','assets/gradeAssets/4.2C/eraser.png' ,'json/gradeJson/4.2C/eraser.json');
	},
	
	
	
	addgame4_3AAssets:function()
	{
		/*_this.load.image('Level43A_bg1','assets/gradeAssets/4.3A/commonAssets/BG.png');
        //_this.load.atlas('Level43A_backbtn','assets/gradeAssets/4.3A/commonAssets/backbtn.png' ,'json/gradeJson/4.3A/backbtn.json');
       // _this.load.atlas('Level43A_speaker','assets/gradeAssets/4.3A/commonAssets/speaker.png' ,'json/gradeJson/4.3A/speaker.json');
       // _this.load.atlas('Level43A_starAnim','assets/gradeAssets/4.3A/commonAssets/starAnim.png','json/gradeJson/4.3A/starAnim.json');
        _this.load.image('Level43A_cloud','assets/gradeAssets/4.3A/commonAssets/cloud.png');
        //_this.load.atlas('Level43A_btn','assets/gradeAssets/4.3A/commonAssets/btn.png','json/gradeJson/4.3A/btn.json');
        _this.load.image('Level43A_bg3','assets/gradeAssets/4.3A/commonAssets/bg3.png');
        //_this.load.image('Level43A_tittleBaar','assets/gradeAssets/4.3A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level43A_replay','assets/gradeAssets/4.3A/commonAssets/reply.png' ,'json/gradeJson/4.3A/reply.json');
        
        _this.load.atlas('Level43A_numbg','assets/gradeAssets/4.3A/commonAssets/numbg.png' ,'json/gradeJson/4.3A/numbg.json');
        _this.load.atlas('Level43A_rightBtn','assets/gradeAssets/4.3A/commonAssets/rightBtn.png' ,'json/gradeJson/4.3A/rightBtn.json');
        _this.load.atlas('Level43A_wrongBtn','assets/gradeAssets/4.3A/commonAssets/wrongBtn.png' ,'json/gradeJson/4.3A/wrongBtn.json');
        
        //My files to load
      //  _this.load.atlas('Level43A_gameBox','assets/gradeAssets/4.3A/gameAssets/gameBox.png' ,'json/gradeJson/4.3A/gameBox.json');
        //_this.load.atlas('Level43A_allimg','assets/gradeAssets/4.3A/gameAssets/allimg.png' ,'json/gradeJson/4.3A/allimg.json');
        _this.load.atlas('Level43A_tickMark','assets/gradeAssets/4.3A/gameAssets/tickMark.png' ,'json/gradeJson/4.3A/tickMark.json');
        _this.load.atlas('Level43A_crossMark','assets/gradeAssets/4.3A/gameAssets/crossMark.png' ,'json/gradeJson/4.3A/crossMark.json');
        
        //_this.load.image('Level43A_glow','assets/gradeAssets/4.3A/gameAssets/glow.png');
        
        //game items
            _this.load.image('Level43A_arrow','assets/gradeAssets/4.3A/commonAssets/Arw.png');
        
         _this.load.atlas('Level43A_incBox','assets/gradeAssets/4.3A/gameAssets/box1.png' ,'json/gradeJson/4.3A/box1.json');
         _this.load.atlas('Level43A_AnswerBox','assets/gradeAssets/4.3A/gameAssets/box2.png' ,'json/gradeJson/4.3A/box2.json');
        
         _this.load.atlas('Level43A_50Q','assets/gradeAssets/4.3A/gameAssets/50mlQ.png' ,'json/gradeJson/4.3A/50mlQ.json');
         _this.load.atlas('Level43A_100Q','assets/gradeAssets/4.3A/gameAssets/100mlQ.png' ,'json/gradeJson/4.3A/100mlQ.json');
         _this.load.atlas('Level43A_200Q','assets/gradeAssets/4.3A/gameAssets/200mlQ.png' ,'json/gradeJson/4.3A/200mlQ.json');
         _this.load.atlas('Level43A_250Q','assets/gradeAssets/4.3A/gameAssets/250mlQ.png' ,'json/gradeJson/4.3A/250mlQ.json');
         _this.load.atlas('Level43A_500Q','assets/gradeAssets/4.3A/gameAssets/500mlQ.png' ,'json/gradeJson/4.3A/500mlQ.json');
        
         _this.load.atlas('Level43A_200A','assets/gradeAssets/4.3A/gameAssets/A 200.png' ,'json/gradeJson/4.3A/A 200.json');
         _this.load.atlas('Level43A_250A','assets/gradeAssets/4.3A/gameAssets/A 250.png' ,'json/gradeJson/4.3A/A 250.json');
         _this.load.atlas('Level43A_500A','assets/gradeAssets/4.3A/gameAssets/A 500.png' ,'json/gradeJson/4.3A/A 500.json');
         _this.load.atlas('Level43A_1000A','assets/gradeAssets/4.3A/gameAssets/A 1000.png' ,'json/gradeJson/4.3A/A 1000.json');
        
        
        _this.load.atlas('Level43A_equation','assets/gradeAssets/4.3A/gameAssets/equation.png' ,'json/gradeJson/4.3A/equation.json');
        
        
        /******************** Level 4.3B******************************/
        /*        _this.load.atlas('Level43A_50Q','assets/gradeAssets/4.3A/gameAssets/50mlQB.png' ,'json/gradeJson/4.3A/50mlQB.json');
         _this.load.atlas('Level43A_100Q','assets/gradeAssets/4.3A/gameAssets/100mlQB.png' ,'json/gradeJson/4.3A/100mlQB.json');
         _this.load.atlas('Level43A_250Q','assets/gradeAssets/4.3A/gameAssets/250mlQB.png' ,'json/gradeJson/4.3A/250mlQB.json');
         _this.load.atlas('Level43A_500Q','assets/gradeAssets/4.3A/gameAssets/500mlQB.png' ,'json/gradeJson/4.3A/500mlQB.json');
        
         _this.load.atlas('Level43A_bottle','assets/gradeAssets/4.3A/gameAssets/bottleB.png' ,'json/gradeJson/4.3A/bottleB.json');
         _this.load.atlas('Level43A_bottle2','assets/gradeAssets/4.3A/gameAssets/bottle2B.png' ,'json/gradeJson/4.3A/bottle2B.json');
         _this.load.atlas('Level43A_bottle3','assets/gradeAssets/4.3A/gameAssets/bottle3B.png' ,'json/gradeJson/4.3A/bottle3B.json');
         _this.load.atlas('Level43A_cup','assets/gradeAssets/4.3A/gameAssets/cupB.png' ,'json/gradeJson/4.3A/cupB.json');
         _this.load.atlas('Level43A_glass','assets/gradeAssets/4.3A/gameAssets/glassB.png' ,'json/gradeJson/4.3A/glassB.json');
         _this.load.atlas('Level43A_jug','assets/gradeAssets/4.3A/gameAssets/jugB.png' ,'json/gradeJson/4.3A/jugB.json');
         _this.load.atlas('Level43A_jug2','assets/gradeAssets/4.3A/gameAssets/jug2B.png' ,'json/gradeJson/4.3A/jug2B.json');
        
        
        _this.load.atlas('Level43A_equationB','assets/gradeAssets/4.3A/gameAssets/equationB.png' ,'json/gradeJson/4.3A/equationB.json');
        
        
        /*********************Level 4.3 C*******************************/
        /* _this.load.atlas('Level43A_50QC','assets/gradeAssets/4.3A/gameAssets/50mlQC.png' ,'json/gradeJson/4.3A/50mlQC.json');
         _this.load.atlas('Level43A_100QC','assets/gradeAssets/4.3A/gameAssets/100mlQC.png' ,'json/gradeJson/4.3A/100mlQC.json');
         _this.load.atlas('Level43A_200QC','assets/gradeAssets/4.3A/gameAssets/200mlQC.png' ,'json/gradeJson/4.3A/200mlQC.json');
         _this.load.atlas('Level43A_250QC','assets/gradeAssets/4.3A/gameAssets/250mlQC.png' ,'json/gradeJson/4.3A/250mlQC.json');
         _this.load.atlas('Level43A_500QC','assets/gradeAssets/4.3A/gameAssets/500mlQC.png' ,'json/gradeJson/4.3A/500mlQC.json');
        
         _this.load.atlas('Level43A_1000AC','assets/gradeAssets/4.3A/gameAssets/1000ltrC.png' ,'json/gradeJson/4.3A/1000ltrC.json');
         _this.load.atlas('Level43A_1000QC','assets/gradeAssets/4.3A/gameAssets/1000mlQD.png' ,'json/gradeJson/4.3A/1000mlQD.json');
         _this.load.atlas('Level43A_jugC','assets/gradeAssets/4.3A/gameAssets/2lJug.png' ,'json/gradeJson/4.3A/2lJug.json');
         _this.load.atlas('Level43A_arrowC','assets/gradeAssets/4.3A/gameAssets/arrowC.png' ,'json/gradeJson/4.3A/arrowC.json');
         _this.load.atlas('Level43A_glow','assets/gradeAssets/4.3A/gameAssets/glowC.png' ,'json/gradeJson/4.3A/glowC.json');
		 
		/* _this.load.audio('waterFill', 'questionSounds/4.3A/waterFillingSound.mp3');
        _this.load.audio('Eng_43A1', 'questionSounds/4.3A/English/4.3A1.mp3');
        _this.load.audio('Eng_43B1', 'questionSounds/4.3A/English/4.3B1.mp3');
        _this.load.audio('Eng_43C1', 'questionSounds/4.3A/English/4.3C1.mp3');
        _this.load.audio('Eng_43C11', 'questionSounds/4.3A/English/4.3C1.1.mp3');
        _this.load.audio('Eng_43D1', 'questionSounds/4.3A/English/4.3D1.mp3');
        _this.load.audio('Kan_43A1', 'questionSounds/4.3A/Kannada/4.3A1.mp3');
        _this.load.audio('Kan_43B1', 'questionSounds/4.3A/Kannada/4.3B1.mp3');
        _this.load.audio('Kan_43C1', 'questionSounds/4.3A/Kannada/4.3C1.mp3');
        _this.load.audio('Kan_43C11', 'questionSounds/4.3A/Kannada/4.3C1.1.mp3');
        _this.load.audio('Kan_43D1', 'questionSounds/4.3A/Kannada/4.3D1.mp3');
        _this.load.audio('Hin_43A1', 'questionSounds/4.3A/Hindi/4.3A1.mp3');
        _this.load.audio('Hin_43B1', 'questionSounds/4.3A/Hindi/4.3B1.mp3');
        _this.load.audio('Hin_43C1', 'questionSounds/4.3A/Hindi/4.3C1.mp3');
        _this.load.audio('Hin_43C11', 'questionSounds/4.3A/Hindi/4.3C1.1.mp3');
        _this.load.audio('Hin_43D1', 'questionSounds/4.3A/Hindi/4.3D1.mp3');*/


        _this.load.image('Level43A_bg1','assets/gradeAssets/4.3A/commonAssets/BG.png');
        //_this.load.atlas('Level43A_backbtn','assets/gradeAssets/4.3A/commonAssets/backbtn.png' ,'json/gradeJson/4.3A/backbtn.json');
       // _this.load.atlas('Level43A_speaker','assets/gradeAssets/4.3A/commonAssets/speaker.png' ,'json/gradeJson/4.3A/speaker.json');
       // _this.load.atlas('Level43A_starAnim','assets/gradeAssets/4.3A/commonAssets/starAnim.png','json/gradeJson/4.3A/starAnim.json');
        _this.load.image('Level43A_cloud','assets/gradeAssets/4.3A/commonAssets/cloud.png');
        //_this.load.atlas('Level43A_btn','assets/gradeAssets/4.3A/commonAssets/btn.png','json/gradeJson/4.3A/btn.json');
        _this.load.image('Level43A_bg3','assets/gradeAssets/4.3A/commonAssets/bg3.png');
        //_this.load.image('Level43A_tittleBaar','assets/gradeAssets/4.3A/commonAssets/tittleBaar.png');
        //_this.load.atlas('Level43A_replay','assets/gradeAssets/4.3A/commonAssets/reply.png' ,'json/gradeJson/4.3A/reply.json');
        
        _this.load.atlas('tick','assets/gradeAssets/4.3A/commonAssets/tick.png' ,'json/gradeJson/4.3A/tick.json');
        _this.load.atlas('eraser','assets/gradeAssets/4.3A/commonAssets/eraser.png' ,'json/gradeJson/4.3A/eraser.json');


        _this.load.atlas('Level43A_numbg','assets/gradeAssets/4.3A/commonAssets/numbg.png' ,'json/gradeJson/4.3A/numbg.json');
        _this.load.atlas('Level43A_rightBtn','assets/gradeAssets/4.3A/commonAssets/rightBtn.png' ,'json/gradeJson/4.3A/rightBtn.json');
        _this.load.atlas('Level43A_wrongBtn','assets/gradeAssets/4.3A/commonAssets/wrongBtn.png' ,'json/gradeJson/4.3A/wrongBtn.json');
        
        //My files to load
      //  _this.load.atlas('Level43A_gameBox','assets/gradeAssets/4.3A/gameAssets/gameBox.png' ,'json/gradeJson/4.3A/gameBox.json');
        //_this.load.atlas('Level43A_allimg','assets/gradeAssets/4.3A/gameAssets/allimg.png' ,'json/gradeJson/4.3A/allimg.json');
        _this.load.atlas('Level43A_tickMark','assets/gradeAssets/4.3A/gameAssets/tickMark.png' ,'json/gradeJson/4.3A/tickMark.json');
        _this.load.atlas('Level43A_crossMark','assets/gradeAssets/4.3A/gameAssets/crossMark.png' ,'json/gradeJson/4.3A/crossMark.json');
        
        //_this.load.image('Level43A_glow','assets/gradeAssets/4.3A/gameAssets/glow.png');
        
        //game items
            _this.load.image('Level43A_arrow','assets/gradeAssets/4.3A/commonAssets/Arw.png');
        
         _this.load.atlas('Level43A_incBox','assets/gradeAssets/4.3A/gameAssets/box1.png' ,'json/gradeJson/4.3A/box1.json');
         _this.load.atlas('Level43A_AnswerBox','assets/gradeAssets/4.3A/gameAssets/box2.png' ,'json/gradeJson/4.3A/box2.json');
        
         _this.load.atlas('Level43A_50Q','assets/gradeAssets/4.3A/gameAssets/50mlQ.png' ,'json/gradeJson/4.3A/50mlQ.json');
         _this.load.atlas('Level43A_100Q','assets/gradeAssets/4.3A/gameAssets/100mlQ.png' ,'json/gradeJson/4.3A/100mlQ.json');
         _this.load.atlas('Level43A_200Q','assets/gradeAssets/4.3A/gameAssets/200mlQ.png' ,'json/gradeJson/4.3A/200mlQ.json');
         _this.load.atlas('Level43A_250Q','assets/gradeAssets/4.3A/gameAssets/250mlQ.png' ,'json/gradeJson/4.3A/250mlQ.json');
         _this.load.atlas('Level43A_500Q','assets/gradeAssets/4.3A/gameAssets/500mlQ.png' ,'json/gradeJson/4.3A/500mlQ.json');
        
         _this.load.atlas('Level43A_200A','assets/gradeAssets/4.3A/gameAssets/A 200.png' ,'json/gradeJson/4.3A/A 200.json');
         _this.load.atlas('Level43A_250A','assets/gradeAssets/4.3A/gameAssets/A 250.png' ,'json/gradeJson/4.3A/A 250.json');
         _this.load.atlas('Level43A_500A','assets/gradeAssets/4.3A/gameAssets/A 500.png' ,'json/gradeJson/4.3A/A 500.json');
         _this.load.atlas('Level43A_1000A','assets/gradeAssets/4.3A/gameAssets/A 1000.png' ,'json/gradeJson/4.3A/A 1000.json');
        
        
        _this.load.atlas('Level43A_equation','assets/gradeAssets/4.3A/gameAssets/equation.png' ,'json/gradeJson/4.3A/equation.json');
        
        
        /******************** Level 4.3B******************************/
                _this.load.atlas('Level43A_50Q','assets/gradeAssets/4.3A/gameAssets/50mlQB.png' ,'json/gradeJson/4.3A/50mlQB.json');
         _this.load.atlas('Level43A_100Q','assets/gradeAssets/4.3A/gameAssets/100mlQB.png' ,'json/gradeJson/4.3A/100mlQB.json');
         _this.load.atlas('Level43A_250Q','assets/gradeAssets/4.3A/gameAssets/250mlQB.png' ,'json/gradeJson/4.3A/250mlQB.json');
         _this.load.atlas('Level43A_500Q','assets/gradeAssets/4.3A/gameAssets/500mlQB.png' ,'json/gradeJson/4.3A/500mlQB.json');
        
         _this.load.atlas('Level43A_bottle','assets/gradeAssets/4.3A/gameAssets/bottleB.png' ,'json/gradeJson/4.3A/bottleB.json');
         _this.load.atlas('Level43A_bottle2','assets/gradeAssets/4.3A/gameAssets/bottle2B.png' ,'json/gradeJson/4.3A/bottle2B.json');
         _this.load.atlas('Level43A_bottle3','assets/gradeAssets/4.3A/gameAssets/bottle3B.png' ,'json/gradeJson/4.3A/bottle3B.json');
         _this.load.atlas('Level43A_cup','assets/gradeAssets/4.3A/gameAssets/cupB.png' ,'json/gradeJson/4.3A/cupB.json');
         _this.load.atlas('Level43A_glass','assets/gradeAssets/4.3A/gameAssets/glassB.png' ,'json/gradeJson/4.3A/glassB.json');
         _this.load.atlas('Level43A_jug','assets/gradeAssets/4.3A/gameAssets/jugB.png' ,'json/gradeJson/4.3A/jugB.json');
         _this.load.atlas('Level43A_jug2','assets/gradeAssets/4.3A/gameAssets/jug2B.png' ,'json/gradeJson/4.3A/jug2B.json');
        
        
        _this.load.atlas('Level43A_equationB','assets/gradeAssets/4.3A/gameAssets/equationB.png' ,'json/gradeJson/4.3A/equationB.json');
        
        
        /*********************Level 4.3 C*******************************/
         _this.load.atlas('Level43A_50QC','assets/gradeAssets/4.3A/gameAssets/50mlQC.png' ,'json/gradeJson/4.3A/50mlQC.json');
         _this.load.atlas('Level43A_100QC','assets/gradeAssets/4.3A/gameAssets/100mlQC.png' ,'json/gradeJson/4.3A/100mlQC.json');
         _this.load.atlas('Level43A_200QC','assets/gradeAssets/4.3A/gameAssets/200mlQC.png' ,'json/gradeJson/4.3A/200mlQC.json');
         _this.load.atlas('Level43A_250QC','assets/gradeAssets/4.3A/gameAssets/250mlQC.png' ,'json/gradeJson/4.3A/250mlQC.json');
         _this.load.atlas('Level43A_500QC','assets/gradeAssets/4.3A/gameAssets/500mlQC.png' ,'json/gradeJson/4.3A/500mlQC.json');
        
         _this.load.atlas('Level43A_1000AC','assets/gradeAssets/4.3A/gameAssets/1000ltrC.png' ,'json/gradeJson/4.3A/1000ltrC.json');
         _this.load.atlas('Level43A_1000QC','assets/gradeAssets/4.3A/gameAssets/1000mlQD.png' ,'json/gradeJson/4.3A/1000mlQD.json');
         _this.load.atlas('Level43A_jugC','assets/gradeAssets/4.3A/gameAssets/2lJug.png' ,'json/gradeJson/4.3A/2lJug.json');
         _this.load.atlas('Level43A_arrowC','assets/gradeAssets/4.3A/gameAssets/arrowC.png' ,'json/gradeJson/4.3A/arrowC.json');
         _this.load.atlas('Level43A_glow','assets/gradeAssets/4.3A/gameAssets/glowC.png' ,'json/gradeJson/4.3A/glowC.json');
		 
		/* _this.load.audio('waterFill', 'questionSounds/4.3A/waterFillingSound.mp3');
        _this.load.audio('Eng_43A1', 'questionSounds/4.3A/English/4.3A1.mp3');
        _this.load.audio('Eng_43B1', 'questionSounds/4.3A/English/4.3B1.mp3');
        _this.load.audio('Eng_43C1', 'questionSounds/4.3A/English/4.3C1.mp3');
        _this.load.audio('Eng_43C11', 'questionSounds/4.3A/English/4.3C1.1.mp3');
        _this.load.audio('Eng_43D1', 'questionSounds/4.3A/English/4.3D1.mp3');
        _this.load.audio('Kan_43A1', 'questionSounds/4.3A/Kannada/4.3A1.mp3');
        _this.load.audio('Kan_43B1', 'questionSounds/4.3A/Kannada/4.3B1.mp3');
        _this.load.audio('Kan_43C1', 'questionSounds/4.3A/Kannada/4.3C1.mp3');
        _this.load.audio('Kan_43C11', 'questionSounds/4.3A/Kannada/4.3C1.1.mp3');
        _this.load.audio('Kan_43D1', 'questionSounds/4.3A/Kannada/4.3D1.mp3');
        _this.load.audio('Hin_43A1', 'questionSounds/4.3A/Hindi/4.3A1.mp3');
        _this.load.audio('Hin_43B1', 'questionSounds/4.3A/Hindi/4.3B1.mp3');
        _this.load.audio('Hin_43C1', 'questionSounds/4.3A/Hindi/4.3C1.mp3');
        _this.load.audio('Hin_43C11', 'questionSounds/4.3A/Hindi/4.3C1.1.mp3');
        _this.load.audio('Hin_43D1', 'questionSounds/4.3A/Hindi/4.3D1.mp3');*/
	},
	
	addgame5_1Assets:function()
	{
		this.load.image('Level5.1_bg1','assets/gradeAssets/5.1/commonAssets/bg1.png');
        //this.load.atlas('CommonBackBtn','assets/gradeAssets/5.1/commonAssets/backbtn.png' ,'json/gradeJson/5.1/backbtn.json');
        //this.load.atlas('CommonSpeakerBtn','assets/gradeAssets/5.1/commonAssets/speaker.png' ,'json/gradeJson/5.1/speaker.json');
       // this.load.atlas('starAnim','assets/gradeAssets/5.1/commonAssets/starAnim.png','json/gradeJson/5.1/starAnim.json');
        this.load.image('cloud','assets/gradeAssets/5.1/commonAssets/cloud.png');
        //this.load.atlas('btn','assets/gradeAssets/5.1/commonAssets/btn.png','json/gradeJson/5.1/btn.json');
        //this.load.image('bg3','assets/gradeAssets/5.1/commonAssets/bg3.png');
       // this.load.image('tittleBaar','assets/gradeAssets/5.1/commonAssets/tittleBaar.png');
       // this.load.atlas('replay','assets/gradeAssets/5.1/commonAssets/reply.png' ,'json/gradeJson/5.1/reply.json');
        
        //My files to load
        //this.load.atlas('gameBox','assets/gradeAssets/5.1/gameBox.png' ,'json/gradeJson/5.1/gameBox.json');
        this.load.atlas('Level5.1_allimg','assets/gradeAssets/5.1/allimg.png' ,'json/gradeJson/5.1/allimg.json');
        this.load.image('Level5.1_glow','assets/gradeAssets/5.1/glow.png');
        
        //game items
         this.load.image('Level5.1_night1','assets/gradeAssets/5.1/C1.png');
         this.load.image('Level5.1_night2','assets/gradeAssets/5.1/C2.png');
         this.load.image('Level5.1_night3','assets/gradeAssets/5.1/C3.png');
         this.load.image('Level5.1_night4','assets/gradeAssets/5.1/C4.png');
        
         this.load.image('Level5.1_evng1','assets/gradeAssets/5.1/C5.png');
         this.load.image('Level5.1_evng2','assets/gradeAssets/5.1/C6.png');
         this.load.image('Level5.1_evng3','assets/gradeAssets/5.1/C7.png');
         this.load.image('Level5.1_evng4','assets/gradeAssets/5.1/C8.png');
        
         this.load.image('Level5.1_day1','assets/gradeAssets/5.1/C9.png');
         this.load.image('Level5.1_day2','assets/gradeAssets/5.1/C10.png');
         this.load.image('Level5.1_day3','assets/gradeAssets/5.1/C11.png');
         this.load.image('Level5.1_day4','assets/gradeAssets/5.1/C12.png');
         this.load.image('Level5.1_day5','assets/gradeAssets/5.1/C13.png');
        
         this.load.image('Level5.1_mrng1','assets/gradeAssets/5.1/C14.png');
         this.load.image('Level5.1_mrng2','assets/gradeAssets/5.1/C15.png');
         this.load.image('Level5.1_mrng3','assets/gradeAssets/5.1/C16.png');
         this.load.image('Level5.1_mrng4','assets/gradeAssets/5.1/C17.png');
         this.load.image('Level5.1_mrng5','assets/gradeAssets/5.1/C18.png');

        
         this.load.image('Level5.1_dBox1','assets/gradeAssets/5.1/A1.png');
         this.load.image('Level5.1_dBox2','assets/gradeAssets/5.1/A2.png');
         this.load.image('Level5.1_dBox3','assets/gradeAssets/5.1/A3.png');
         this.load.image('Level5.1_dBox4','assets/gradeAssets/5.1/A4.png');
        
        this.load.atlas('Level5.1_gameBox1','assets/gradeAssets/5.1/B2.png' ,'json/gradeJson/5.1/B2.json');
        this.load.atlas('Level5.1_gameBox2','assets/gradeAssets/5.1/B3.png' ,'json/gradeJson/5.1/B3.json');
        this.load.atlas('Level5.1_gameBox3','assets/gradeAssets/5.1/B4.png' ,'json/gradeJson/5.1/B4.json');
        this.load.atlas('Level5.1_gameBox4','assets/gradeAssets/5.1/B5.png' ,'json/gradeJson/5.1/B5.json');
	},

	addgame5_2Assets:function()
	{

		 /*this.load.image('glow','assets/gradeAssets/5.2/glow.png');
         //game items
         this.load.image('Bg','assets/gradeAssets/5.2/Bg.png');
         this.load.image('main_image1','assets/gradeAssets/5.2/Slide1/main_image.png');
         this.load.image('main_image2','assets/gradeAssets/5.2/Slide2/main_image.png');
         this.load.image('main_image3','assets/gradeAssets/5.2/Slide3/main_image.png');
         this.load.image('main_image4','assets/gradeAssets/5.2/Slide4/main_image.png');
         this.load.image('main_image5','assets/gradeAssets/5.2/Slide5/main_image.png');
         this.load.image('main_image6','assets/gradeAssets/5.2/Slide6/main_image.png');
         this.load.atlas('blankimg','assets/gradeAssets/5.2/animslide.png','json/gradeJson/5.2/animslide.json');
        
         this.load.image('wed1','assets/gradeAssets/5.2/Slide1/img1.png');
         this.load.image('tue1','assets/gradeAssets/5.2/Slide1/img2.png');
         this.load.image('sun1','assets/gradeAssets/5.2/Slide1/img3.png');
         this.load.image('sat1','assets/gradeAssets/5.2/Slide1/img4.png');
         this.load.image('fri1','assets/gradeAssets/5.2/Slide1/img5.png');
         this.load.image('thu1','assets/gradeAssets/5.2/Slide1/img6.png');
         this.load.image('mon1','assets/gradeAssets/5.2/Slide1/img7.png');
        
         this.load.image('mon2','assets/gradeAssets/5.2/Slide2/img1.png');
         this.load.image('sat2','assets/gradeAssets/5.2/Slide2/img2.png');
         this.load.image('sun2','assets/gradeAssets/5.2/Slide2/img3.png');
         this.load.image('fri2','assets/gradeAssets/5.2/Slide2/img4.png');
         this.load.image('tue2','assets/gradeAssets/5.2/Slide2/img5.png');
         this.load.image('thu2','assets/gradeAssets/5.2/Slide2/img6.png');
         this.load.image('wed2','assets/gradeAssets/5.2/Slide2/img7.png');
        
         this.load.image('sun3','assets/gradeAssets/5.2/Slide3/img1.png');
         this.load.image('fri3','assets/gradeAssets/5.2/Slide3/img2.png');
         this.load.image('mon3','assets/gradeAssets/5.2/Slide3/img3.png');
         this.load.image('wed3','assets/gradeAssets/5.2/Slide3/img4.png');
         this.load.image('thu3','assets/gradeAssets/5.2/Slide3/img5.png');
         this.load.image('sat3','assets/gradeAssets/5.2/Slide3/img6.png');
         this.load.image('tue3','assets/gradeAssets/5.2/Slide3/img7.png');
      
         this.load.image('tue4','assets/gradeAssets/5.2/Slide4/img1.png');
         this.load.image('wed4','assets/gradeAssets/5.2/Slide4/img2.png');
         this.load.image('mon4','assets/gradeAssets/5.2/Slide4/img3.png');
         this.load.image('fri4','assets/gradeAssets/5.2/Slide4/img4.png');
         this.load.image('sun4','assets/gradeAssets/5.2/Slide4/img5.png');
         this.load.image('thu4','assets/gradeAssets/5.2/Slide4/img6.png');
         this.load.image('sat4','assets/gradeAssets/5.2/Slide4/img7.png');
    
         this.load.image('sat5','assets/gradeAssets/5.2/Slide5/img1.png');
         this.load.image('fri5','assets/gradeAssets/5.2/Slide5/img2.png');
         this.load.image('tue5','assets/gradeAssets/5.2/Slide5/img3.png');
         this.load.image('thu5','assets/gradeAssets/5.2/Slide5/img4.png');
         this.load.image('sun5','assets/gradeAssets/5.2/Slide5/img5.png');
         this.load.image('wed5','assets/gradeAssets/5.2/Slide5/img6.png');
         this.load.image('mon5','assets/gradeAssets/5.2/Slide5/img7.png');
        
         this.load.image('sun6','assets/gradeAssets/5.2/Slide6/img1.png');
         this.load.image('tue6','assets/gradeAssets/5.2/Slide6/img2.png');
         this.load.image('thu6','assets/gradeAssets/5.2/Slide6/img3.png');
         this.load.image('sat6','assets/gradeAssets/5.2/Slide6/img4.png');
         this.load.image('fri6','assets/gradeAssets/5.2/Slide6/img5.png');
         this.load.image('wed6','assets/gradeAssets/5.2/Slide6/img6.png');
         this.load.image('mon6','assets/gradeAssets/5.2/Slide6/img7.png');
        
         this.load.image('sun19','assets/gradeAssets/5.2/Slide19/sun.png');
         this.load.image('mon19','assets/gradeAssets/5.2/Slide19/mon.png');
         this.load.image('tue19','assets/gradeAssets/5.2/Slide19/tue.png');
         this.load.image('wed19','assets/gradeAssets/5.2/Slide19/wed.png');
         this.load.image('thu19','assets/gradeAssets/5.2/Slide19/thu.png');
         this.load.image('fri19','assets/gradeAssets/5.2/Slide19/fri.png');
         this.load.image('sat19','assets/gradeAssets/5.2/Slide19/sat.png');
        
         this.load.image('sun20','assets/gradeAssets/5.2/Slide20/sun.png');
         this.load.image('mon20','assets/gradeAssets/5.2/Slide20/mon.png');
         this.load.image('tue20','assets/gradeAssets/5.2/Slide20/tue.png');
         this.load.image('wed20','assets/gradeAssets/5.2/Slide20/wed.png');
         this.load.image('thu20','assets/gradeAssets/5.2/Slide20/thu.png');
         this.load.image('fri20','assets/gradeAssets/5.2/Slide20/fri.png');
         this.load.image('sat20','assets/gradeAssets/5.2/Slide20/sat.png');
        
         this.load.image('sun21','assets/gradeAssets/5.2/Slide21/sun.png');
         this.load.image('mon21','assets/gradeAssets/5.2/Slide21/mon.png');
         this.load.image('tue21','assets/gradeAssets/5.2/Slide21/tue.png');
         this.load.image('wed21','assets/gradeAssets/5.2/Slide21/wed.png');
         this.load.image('thu21','assets/gradeAssets/5.2/Slide21/thu.png');
         this.load.image('fri21','assets/gradeAssets/5.2/Slide21/fri.png');
         this.load.image('sat21','assets/gradeAssets/5.2/Slide21/sat.png');
        
         this.load.image('sun22','assets/gradeAssets/5.2/Slide22/sun.png');
         this.load.image('mon22','assets/gradeAssets/5.2/Slide22/mon.png');
         this.load.image('tue22','assets/gradeAssets/5.2/Slide22/tue.png');
         this.load.image('wed22','assets/gradeAssets/5.2/Slide22/wed.png');
         this.load.image('thu22','assets/gradeAssets/5.2/Slide22/thu.png');
         this.load.image('fri22','assets/gradeAssets/5.2/Slide22/fri.png');
         this.load.image('sat22','assets/gradeAssets/5.2/Slide22/sat.png');
        
         this.load.image('sun23','assets/gradeAssets/5.2/Slide23/sun.png');
         this.load.image('mon23','assets/gradeAssets/5.2/Slide23/mon.png');
         this.load.image('tue23','assets/gradeAssets/5.2/Slide23/tue.png');
         this.load.image('wed23','assets/gradeAssets/5.2/Slide23/wed.png');
         this.load.image('thu23','assets/gradeAssets/5.2/Slide23/thu.png');
         this.load.image('fri23','assets/gradeAssets/5.2/Slide23/fri.png');
         this.load.image('sat23','assets/gradeAssets/5.2/Slide23/sat.png');
        
         this.load.image('sun24','assets/gradeAssets/5.2/Slide24/sun.png');
         this.load.image('mon24','assets/gradeAssets/5.2/Slide24/mon.png');
         this.load.image('tue24','assets/gradeAssets/5.2/Slide24/tue.png');
         this.load.image('wed24','assets/gradeAssets/5.2/Slide24/wed.png');
         this.load.image('thu24','assets/gradeAssets/5.2/Slide24/thu.png');
         this.load.image('fri24','assets/gradeAssets/5.2/Slide24/fri.png');
         this.load.image('sat24','assets/gradeAssets/5.2/Slide24/sat.png');*/


         this.load.image('Level52_bg1','assets/gradeAssets/5.2/commonAssets52/bg1.png');
         this.load.atlas('Level52_btn','assets/gradeAssets/5.2/commonAssets52/btn.png','json/gradeJson/5.2/btn.json');
         this.load.image('Level52_bg3','assets/gradeAssets/5.2/commonAssets52/bg3.png');
         this.load.image('Level52_tittleBaar','assets/gradeAssets/5.2/commonAssets52/tittleBaar.png');
         this.load.atlas('Level52_replay','assets/gradeAssets/5.2/commonAssets52/reply.png' ,'json/gradeJson/5.2/reply.json');
      
         this.load.image('Level52_glow','assets/gradeAssets/5.2/glow.png');
         //game items
         this.load.image('Level52_Bg','assets/gradeAssets/5.2/Bg.png');
         this.load.image('Level52_main_image1','assets/gradeAssets/5.2/Slide1/main_image.png');
         this.load.image('Level52_main_image2','assets/gradeAssets/5.2/Slide2/main_image.png');
         this.load.image('Level52_main_image3','assets/gradeAssets/5.2/Slide3/main_image.png');
         this.load.image('Level52_main_image4','assets/gradeAssets/5.2/Slide4/main_image.png');
         this.load.image('Level52_main_image5','assets/gradeAssets/5.2/Slide5/main_image.png');
         this.load.image('Level52_main_image6','assets/gradeAssets/5.2/Slide6/main_image.png');
         this.load.atlas('Level52_blankimg','assets/gradeAssets/5.2/animslide.png','json/gradeJson/5.2/animslide.json');
        
        
         this.load.atlas('Level52_sunday','assets/gradeAssets/5.2/commonAssets/sunday.png','json/gradeJson/5.2/sunday.json');
         this.load.atlas('Level52_monday','assets/gradeAssets/5.2/commonAssets/monday.png','json/gradeJson/5.2/monday.json');
         this.load.atlas('Level52_tuesday','assets/gradeAssets/5.2/commonAssets/tuesday.png','json/gradeJson/5.2/tuesday.json');
         this.load.atlas('Level52_wednesday','assets/gradeAssets/5.2/commonAssets/wednesday.png','json/gradeJson/5.2/wednesday.json');
         this.load.atlas('Level52_thursday','assets/gradeAssets/5.2/commonAssets/thursday.png','json/gradeJson/5.2/thursday.json');
         this.load.atlas('Level52_friday','assets/gradeAssets/5.2/commonAssets/friday.png','json/gradeJson/5.2/friday.json');
         this.load.atlas('Level52_saturday','assets/gradeAssets/5.2/commonAssets/saturday.png','json/gradeJson/5.2/saturday.json');
         
        
         this.load.image('Level52_wed1','assets/gradeAssets/5.2/Slide1/wed1.png');
         this.load.image('Level52_tue1','assets/gradeAssets/5.2/Slide1/tue1.png');
         this.load.image('Level52_sun1','assets/gradeAssets/5.2/Slide1/sun1.png');
         this.load.image('Level52_sat1','assets/gradeAssets/5.2/Slide1/sat1.png');
         this.load.image('Level52_fri1','assets/gradeAssets/5.2/Slide1/fri1.png');
         this.load.image('Level52_thu1','assets/gradeAssets/5.2/Slide1/thu1.png');
         this.load.image('Level52_mon1','assets/gradeAssets/5.2/Slide1/mon1.png');
        
         this.load.image('Level52_mon2','assets/gradeAssets/5.2/Slide2/mon2.png');
         this.load.image('Level52_sat2','assets/gradeAssets/5.2/Slide2/sat2.png');
         this.load.image('Level52_sun2','assets/gradeAssets/5.2/Slide2/sun2.png');
         this.load.image('Level52_fri2','assets/gradeAssets/5.2/Slide2/fri2.png');
         this.load.image('Level52_tue2','assets/gradeAssets/5.2/Slide2/tue2.png');
         this.load.image('Level52_thu2','assets/gradeAssets/5.2/Slide2/thu2.png');
         this.load.image('Level52_wed2','assets/gradeAssets/5.2/Slide2/wed2.png');
        
         this.load.image('Level52_sun3','assets/gradeAssets/5.2/Slide3/sun3.png');
         this.load.image('Level52_fri3','assets/gradeAssets/5.2/Slide3/fri3.png');
         this.load.image('Level52_mon3','assets/gradeAssets/5.2/Slide3/mon3.png');
         this.load.image('Level52_wed3','assets/gradeAssets/5.2/Slide3/wed3.png');
         this.load.image('Level52_thu3','assets/gradeAssets/5.2/Slide3/thu3.png');
         this.load.image('Level52_sat3','assets/gradeAssets/5.2/Slide3/sat3.png');
         this.load.image('Level52_tue3','assets/gradeAssets/5.2/Slide3/tue3.png');
      
         this.load.image('Level52_tue4','assets/gradeAssets/5.2/Slide4/tue4.png');
         this.load.image('Level52_wed4','assets/gradeAssets/5.2/Slide4/wed4.png');
         this.load.image('Level52_mon4','assets/gradeAssets/5.2/Slide4/mon4.png');
         this.load.image('Level52_fri4','assets/gradeAssets/5.2/Slide4/fri4.png');
         this.load.image('Level52_sun4','assets/gradeAssets/5.2/Slide4/sun4.png');
         this.load.image('Level52_thu4','assets/gradeAssets/5.2/Slide4/thu4.png');
         this.load.image('Level52_sat4','assets/gradeAssets/5.2/Slide4/sat4.png');
    
         this.load.image('Level52_sat5','assets/gradeAssets/5.2/Slide5/sat5.png');
         this.load.image('Level52_fri5','assets/gradeAssets/5.2/Slide5/fri5.png');
         this.load.image('Level52_tue5','assets/gradeAssets/5.2/Slide5/tue5.png');
         this.load.image('Level52_thu5','assets/gradeAssets/5.2/Slide5/thu5.png');
         this.load.image('Level52_sun5','assets/gradeAssets/5.2/Slide5/sun5.png');
         this.load.image('Level52_wed5','assets/gradeAssets/5.2/Slide5/wed5.png');
         this.load.image('Level52_mon5','assets/gradeAssets/5.2/Slide5/mon5.png');
        
         this.load.image('Level52_sun6','assets/gradeAssets/5.2/Slide6/sun6.png');
         this.load.image('Level52_tue6','assets/gradeAssets/5.2/Slide6/tue6.png');
         this.load.image('Level52_thu6','assets/gradeAssets/5.2/Slide6/thu6.png');
         this.load.image('Level52_sat6','assets/gradeAssets/5.2/Slide6/sat6.png');
         this.load.image('Level52_fri6','assets/gradeAssets/5.2/Slide6/fri6.png');
         this.load.image('Level52_wed6','assets/gradeAssets/5.2/Slide6/wed6.png');
         this.load.image('Level52_mon6','assets/gradeAssets/5.2/Slide6/mon6.png');
        
         this.load.image('Level52_sun19','assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_mon19','assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_tue19','assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_wed19','assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_thu19','assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_fri19','assets/gradeAssets/5.2/Slide19/img.png');
         this.load.image('Level52_sat19','assets/gradeAssets/5.2/Slide19/img.png');
        
         this.load.image('Level52_sun20','assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_mon20','assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_tue20','assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_wed20','assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_thu20','assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_fri20','assets/gradeAssets/5.2/Slide20/img.png');
         this.load.image('Level52_sat20','assets/gradeAssets/5.2/Slide20/img.png');
        
         this.load.image('Level52_sun21','assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_mon21','assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_tue21','assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_wed21','assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_thu21','assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_fri21','assets/gradeAssets/5.2/Slide21/img.png');
         this.load.image('Level52_sat21','assets/gradeAssets/5.2/Slide21/img.png');
        
         this.load.image('Level52_sun22','assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_mon22','assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_tue22','assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_wed22','assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_thu22','assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_fri22','assets/gradeAssets/5.2/Slide22/img.png');
         this.load.image('Level52_sat22','assets/gradeAssets/5.2/Slide22/img.png');
        
         this.load.image('Level52_sun23','assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_mon23','assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_tue23','assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_wed23','assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_thu23','assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_fri23','assets/gradeAssets/5.2/Slide23/img.png');
         this.load.image('Level52_sat23','assets/gradeAssets/5.2/Slide23/img.png');
        
         this.load.image('Level52_sun24','assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_mon24','assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_tue24','assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_wed24','assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_thu24','assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_fri24','assets/gradeAssets/5.2/Slide24/img.png');
         this.load.image('Level52_sat24','assets/gradeAssets/5.2/Slide24/img.png');
	},


	addgame5_4Assets:function()
	{
		/*this.load.image('bg1','assets/commonAssets/bg1.png');
        this.load.atlas('CommonBackBtn','assets/commonAssets/backbtn.png' ,'json/gradeJson/5.4/backbtn.json');
        this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png' ,'json/gradeJson/5.4/speaker.json');
        this.load.atlas('starAnim','assets/commonAssets/starAnim.png','json/gradeJson/5.4/starAnim.json');
        this.load.image('cloud','assets/commonAssets/cloud.png');
        this.load.atlas('btn','assets/commonAssets/btn.png','json/gradeJson/5.4/btn.json');
        this.load.image('bg3','assets/commonAssets/bg3.png');
        this.load.image('tittleBaar','assets/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/commonAssets/reply.png' ,'json/gradeJson/5.4/reply.json');*/
        //game assets
      /*  this.load.atlas('Level54_main_imageanim','assets/gradeAssets/5.4/main_imageanim.png' ,'json/gradeJson/5.4/main_imageanim.json');
        this.load.image('Level54_main_image','assets/gradeAssets/5.4/main_image.png');
        this.load.image('Level54_glow','assets/gradeAssets/5.4/glow.png');
        this.load.image('Level54_bg54','assets/gradeAssets/5.4/bg54.png');
        this.load.image('Level54_JAN','assets/gradeAssets/5.4/JAN.png');
        this.load.image('Level54_FEB','assets/gradeAssets/5.4/FEB.png');
        this.load.image('Level54_MAR','assets/gradeAssets/5.4/MAR.png');
        this.load.image('Level54_APR','assets/gradeAssets/5.4/APR.png');
        this.load.image('Level54_MAY','assets/gradeAssets/5.4/MAY.png');
        this.load.image('Level54_JUNE','assets/gradeAssets/5.4/JUNE.png');
        this.load.image('Level54_JULY','assets/gradeAssets/5.4/JULY.png');
        this.load.image('Level54_AUG','assets/gradeAssets/5.4/AUG.png');
        this.load.image('Level54_SEP','assets/gradeAssets/5.4/SEP.png');
        this.load.image('Level54_OCT','assets/gradeAssets/5.4/OCT.png');
        this.load.image('Level54_NOV','assets/gradeAssets/5.4/NOV.png');
        this.load.image('Level54_DEC','assets/gradeAssets/5.4/DEC.png');
        this.load.image('Level54_JAN2','assets/gradeAssets/5.4/JAN2.png');
        this.load.image('Level54_FEB2','assets/gradeAssets/5.4/FEB2.png');
        this.load.image('Level54_MAR2','assets/gradeAssets/5.4/MAR2.png');
        this.load.image('Level54_APR2','assets/gradeAssets/5.4/APR2.png');
        this.load.image('Level54_MAY2','assets/gradeAssets/5.4/MAY2.png');
        this.load.image('Level54_JUNE2','assets/gradeAssets/5.4/JUNE2.png');
        this.load.image('Level54_JULY2','assets/gradeAssets/5.4/JULY2.png');
        this.load.image('Level54_AUG2','assets/gradeAssets/5.4/AUG2.png');
        this.load.image('Level54_SEP2','assets/gradeAssets/5.4/SEP2.png');
        this.load.image('Level54_OCT2','assets/gradeAssets/5.4/OCT2.png');
        this.load.image('Level54_NOV2','assets/gradeAssets/5.4/NOV2.png');
        this.load.image('Level54_DEC2','assets/gradeAssets/5.4/DEC2.png');*/


        //common assets
        this.load.image('Level54_bg1','assets/gradeAssets/5.4/commonAssets/bg1.png');
        this.load.atlas('Level54_btn','assets/gradeAssets/5.4/commonAssets/btn.png','json/gradeJson/5.4/btn.json');
        this.load.image('Level54_bg3','assets/gradeAssets/5.4/commonAssets/bg3.png');
        this.load.image('Level54_tittleBaar','assets/gradeAssets/5.4/commonAssets/tittleBaar.png');
        this.load.atlas('Level54_replay','assets/gradeAssets/5.4/commonAssets/reply.png' ,'json/gradeJson/5.4/reply.json');
        this.load.atlas('Level54_monthname','assets/gradeAssets/5.4/monthname.png' ,'json/gradeJson/5.4/monthname.json');
        //game assets
        this.load.atlas('Level54_main_imageanim','assets/gradeAssets/5.4/main_imageanim.png' ,'json/gradeJson/5.4/main_imageanim.json');
        this.load.image('Level54_main_image','assets/gradeAssets/5.4/main_image.png');
        this.load.image('Level54_glow','assets/gradeAssets/5.4/glow.png');
        this.load.image('Level54_bg54','assets/gradeAssets/5.4/bg54.png');
        this.load.image('Level54_JAN','assets/gradeAssets/5.4/JAN.png');
        this.load.image('Level54_FEB','assets/gradeAssets/5.4/FEB.png');
        this.load.image('Level54_MAR','assets/gradeAssets/5.4/MAR.png');
        this.load.image('Level54_APR','assets/gradeAssets/5.4/APR.png');
        this.load.image('Level54_MAY','assets/gradeAssets/5.4/MAY.png');
        this.load.image('Level54_JUNE','assets/gradeAssets/5.4/JUNE.png');
        this.load.image('Level54_JULY','assets/gradeAssets/5.4/JULY.png');
        this.load.image('Level54_AUG','assets/gradeAssets/5.4/AUG.png');
        this.load.image('Level54_SEP','assets/gradeAssets/5.4/SEP.png');
        this.load.image('Level54_OCT','assets/gradeAssets/5.4/OCT.png');
        this.load.image('Level54_NOV','assets/gradeAssets/5.4/NOV.png');
        this.load.image('Level54_DEC','assets/gradeAssets/5.4/DEC.png');
        this.load.image('Level54_JAN2','assets/gradeAssets/5.4/JAN2.png');
        this.load.image('Level54_FEB2','assets/gradeAssets/5.4/FEB2.png');
        this.load.image('Level54_MAR2','assets/gradeAssets/5.4/MAR2.png');
        this.load.image('Level54_APR2','assets/gradeAssets/5.4/APR2.png');
        this.load.image('Level54_MAY2','assets/gradeAssets/5.4/MAY2.png');
        this.load.image('Level54_JUNE2','assets/gradeAssets/5.4/JUNE2.png');
        this.load.image('Level54_JULY2','assets/gradeAssets/5.4/JULY2.png');
        this.load.image('Level54_AUG2','assets/gradeAssets/5.4/AUG2.png');
        this.load.image('Level54_SEP2','assets/gradeAssets/5.4/SEP2.png');
        this.load.image('Level54_OCT2','assets/gradeAssets/5.4/OCT2.png');
        this.load.image('Level54_NOV2','assets/gradeAssets/5.4/NOV2.png');
        this.load.image('Level54_DEC2','assets/gradeAssets/5.4/DEC2.png');
	},

	addgame6_1Assets:function()
	{
		this.load.image('Level61_bg2','assets/gradeAssets/6.1/bg2.png');
		
		
        
        //level1
        
        this.load.atlas('Level61_c1','assets/gradeAssets/6.1/c1.png','json/gradeJson/6.1/c1.json');
        this.load.atlas('Level61_redNum', 'assets/gradeAssets/6.1/redNum.png', 'json/gradeJson/6.1/redNum.json');
        this.load.atlas('Level61_whiteNum', 'assets/gradeAssets/6.1/whiteNum.png', 'json/gradeJson/6.1/whiteNum.json');
        this.load.atlas('Level61_months', 'assets/gradeAssets/6.1/months.png', 'json/gradeJson/6.1/months.json');  
        this.load.image('Level61_year', 'assets/gradeAssets/6.1/year.png');
        
        
        this.load.image('Level61_monday','assets/gradeAssets/6.1/monday.png');
        this.load.image('Level61_Tuesday','assets/gradeAssets/6.1/Tuesday.png');
        this.load.image('Level61_wednesday','assets/gradeAssets/6.1/wednesday.png');
        this.load.image('Level61_thusday','assets/gradeAssets/6.1/thusday.png');
        this.load.image('Level61_friday','assets/gradeAssets/6.1/friday.png');
        this.load.image('Level61_saturday','assets/gradeAssets/6.1/saturday.png');
        this.load.image('Level61_sunday','assets/gradeAssets/6.1/sunday.png');
        this.load.atlas('anim1', 'assets/gradeAssets/6.1/anim1.png', 'json/gradeJson/6.1/anim1.json');
        //this.load.atlas('anim2', 'assets/gradeAssets/6.1/anim2.png', 'json/gradeJson/6.1/anim2.json');
        //this.load.atlas('anim3', 'assets/gradeAssets/6.1/A3.png', 'json/gradeJson/6.1/A3.json');
        this.load.atlas('Level61_g3', 'assets/gradeAssets/6.1/g3.png', 'json/gradeJson/6.1/g3.json');
        this.load.atlas('Level61_g2', 'assets/gradeAssets/6.1/g2.png', 'json/gradeJson/6.1/g2.json');
	},

	addgame6_2Assets:function()
	{
		this.load.image('Level62_bg2','assets/gradeAssets/6.2/bg2.png');

		this.load.atlas('Level62_c1','assets/gradeAssets/6.2/c1.png','json/gradeJson/6.2/c1.json');
        this.load.atlas('Level62_redNum', 'assets/gradeAssets/6.2/redNum.png', 'json/gradeJson/6.2/redNum.json');
        this.load.atlas('Level62_whiteNum', 'assets/gradeAssets/6.2/whiteNum.png', 'json/gradeJson/6.2/whiteNum.json');
        this.load.atlas('Level62_months', 'assets/gradeAssets/6.2/months.png', 'json/gradeJson/6.2/months.json');  
        this.load.image('Level62_year', 'assets/gradeAssets/6.2/year.png');
        
        
        this.load.image('Level62_monday','assets/gradeAssets/6.2/monday.png');
        this.load.image('Level62_Tuesday','assets/gradeAssets/6.2/Tuesday.png');
        this.load.image('Level62_wednesday','assets/gradeAssets/6.2/wednesday.png');
        this.load.image('Level62_thusday','assets/gradeAssets/6.2/thusday.png');
        this.load.image('Level62_friday','assets/gradeAssets/6.2/friday.png');
        this.load.image('Level62_saturday','assets/gradeAssets/6.2/saturday.png');
        this.load.image('Level62_sunday','assets/gradeAssets/6.2/sunday.png');
        this.load.atlas('anim1', 'assets/gradeAssets/6.2/anim1.png', 'json/gradeJson/6.2/anim1.json');
        this.load.atlas('anim2', 'assets/gradeAssets/6.2/anim2.png', 'json/gradeJson/6.2/anim2.json');
        this.load.atlas('Level62_g3','assets/gradeAssets/6.2/g3.png','json/gradeJson/6.2/g3.json');
        this.load.atlas('Level62_g4','assets/gradeAssets/6.2/g4.png','json/gradeJson/6.2/g4.json');
	},

	addgame7_1Assets:function()
	{
		this.load.image('Level71_bg','assets/gradeAssets/7.1/bg.png');
		//this.load.image('Level71_bg2','assets/gradeAssets/7.1/bg2.png');
        this.load.image('Level71_backg','assets/gradeAssets/7.1/backg.png');
        this.load.atlas('Level71_clock1','assets/gradeAssets/7.1/clock1.png' ,'json/gradeJson/7.1/clock1.json');
        this.load.atlas('Level71_clock2','assets/gradeAssets/7.1/clock2.png' ,'json/gradeJson/7.1/clock2.json');
        //this.load.atlas('Level71_clock3','assets/gradeAssets/7.1/clock3.png' ,'json.gradeJson/7.1/clock3.json');
        //this.load.atlas('Level71_timer','assets/gradeAssets/7.1/timer.png','json.gradeJson/7.1/timer.json');
        

		//this.load.image('Level71_questionBackground', 'questionBackground.png');

		// this.load.audio('Level71_baudio', ['BackgroundSound.mp3', 'BackgroundSound.ogg']);
		// this.load.audio('Level71_waudio', ['WrongCelebrationSound.mp3', 'WrongCelebrationSound.ogg']);
        //this.load.audio('Level71_ClickSound', 'ClickSound.mp3');
		// this.load.audio('Level71_baudio1', ['BackgroundMusic.mp3', 'BackgroundMusic.ogg']);
		// this.load.audio('Level71_celebr', 'celebration.mp3');

		//this.load.image('Level71_playBg', 'playbg.png');
        
		this.load.image('Level71_langBg', 'assets/gradeAssets/7.1/langbg.png');
        
		
		//this.load.atlas('Level71_heading','assets/gradeAssets/7.1/hedding.png' ,'json.gradeJson/7.1/heading.json');
		//this.load.atlas('Level71_heading1','assets/gradeAssets/7.1/heading1.png' ,'json.gradeJson/7.1/heading1.json');
		//this.load.image('Level71_line','Line.png');
		//this.load.image('Level71_celeb', 'assets/gradeAssets/7.1/c.png');
        this.load.atlas('Level71_CommonBackBtn','assets/gradeAssets/7.1/backbtn.png' ,'json/gradeJson/7.1/backbtn.json');
        this.load.atlas('Level71_CommonSpeakerBtn','assets/gradeAssets/7.1/speaker.png' ,'json/gradeJson/7.1/speaker.json');
        this.load.image('Level71_headingLine', 'assets/gradeAssets/7.1/headingLine.png');
        
		this.load.atlas('Level71_starAnim','assets/gradeAssets/7.1/starAnim.png','json/gradeJson/7.1/starAnim.json');
        this.load.atlas('Level71_btn','assets/gradeAssets/7.1/btn.png','json/gradeJson/7.1/btn.json');
        this.load.image('Level71_tittleBar', 'assets/gradeAssets/7.1/tittleBar.png');
        this.load.atlas('Level71_replay', 'assets/gradeAssets/7.1/reply.png', 'json/gradeJson/7.1/reply.json');
        
         // this.load.atlas('Level71_numbg','assets/gradeAssets/7.1/numbg.png','json.gradeJson/7.1/numbg.json'); 
         this.load.atlas('Level71_numbers','assets/gradeAssets/7.1/numbers.png','json/gradeJson/7.1/numbers.json');
         //this.load.atlas('Level71_numbers2','assets/gradeAssets/7.1/numbers2.png','json.gradeJson/7.1/numbers2.json');
       
         
         this.load.atlas('Level71_n1','assets/gradeAssets/7.1/one.png','json/gradeJson/7.1/one.json');
         this.load.atlas('Level71_n2','assets/gradeAssets/7.1/two.png','json/gradeJson/7.1/two.json');
         this.load.atlas('Level71_n3','assets/gradeAssets/7.1/three.png','json/gradeJson/7.1/three.json');
         this.load.atlas('Level71_n4','assets/gradeAssets/7.1/four.png','json/gradeJson/7.1/four.json');
         this.load.atlas('Level71_n5','assets/gradeAssets/7.1/five.png','json/gradeJson/7.1/five.json');
         this.load.atlas('Level71_n6','assets/gradeAssets/7.1/six.png','json/gradeJson/7.1/six.json');
         this.load.atlas('Level71_n7','assets/gradeAssets/7.1/seven.png','json/gradeJson/7.1/seven.json');
         this.load.atlas('Level71_n8','assets/gradeAssets/7.1/eight.png','json/gradeJson/7.1/eight.json');
         this.load.atlas('Level71_n9','assets/gradeAssets/7.1/nine.png','json/gradeJson/7.1/nine.json');
         this.load.atlas('Level71_n10','assets/gradeAssets/7.1/ten.png','json/gradeJson/7.1/ten.json');
         this.load.atlas('Level71_n11','assets/gradeAssets/7.1/eleven.png','json/gradeJson/7.1/eleven.json');
         this.load.atlas('Level71_n12','assets/gradeAssets/7.1/twelve.png','json/gradeJson/7.1/twelve.json');

          //this.load.atlas('num','assets/num.png','json/num.json');
         this.load.atlas('Level71_rightmark','assets/gradeAssets/7.1/rightmark.png','json/gradeJson/7.1/rightmark.json');
        // this.load.image('leftdir','assets/leftdir.png');
         this.load.atlas('Level71_rightdir1','assets/gradeAssets/7.1/rightdir1.png','json/gradeJson/7.1/rightdir1.json');
        // this.load.image('rightdir2','assets/rightdir2.png');
         this.load.atlas('Level71_topdir','assets/gradeAssets/7.1/topdir.png','json/gradeJson/7.1/topdir.json');
	},
	
	addgame7_2Assets:function()
	{
		this.load.image('Level72_bg1','assets/gradeAssets/commonAssets/BG.png');
        this.load.image('Level72_bg2','assets/gradeAssets/commonAssets/bg2.png');
        
        this.load.atlas('numbg','assets/gradeAssets/commonAssets/numbg.png' ,'json/gradeJson/7.2/numbg.json');
        this.load.atlas('rightBtn','assets/gradeAssets/commonAssets/rightBtn.png' ,'json/gradeJson/7.2/rightBtn.json');
        this.load.atlas('wrongBtn','assets/gradeAssets/commonAssets/wrongBtn.png' ,'json/gradeJson/7.2/wrongBtn.json');
        
        //My files to load
        this.load.atlas('Level72_tickMark','assets/gradeAssets/7.2/tickMark.png' ,'json/gradeJson/7.2/tickMark.json');
        
        /* this.load.image('minHand','assets/gradeAssets/7.2/minuteHand-old.png');
         this.load.image('hourHand','assets/gradeAssets/7.2/hourHand.png');*/
        this.load.atlas('Level72_minHand','assets/gradeAssets/7.2/minuteHand.png','json/gradeJson/7.2/minuteHand.json');
         this.load.atlas('Level72_hourHand','assets/gradeAssets/7.2/hourHand.png','json/gradeJson/7.2/hourHand.json');
         this.load.atlas('Level72_circleToCover','assets/gradeAssets/7.2/A3.png','json/gradeJson/7.2/A3.json');
        
         this.load.image('Level72_hr','assets/gradeAssets/7.2/hr.png');
         this.load.image('Level72_mn','assets/gradeAssets/7.2/mn.png');
        
         this.load.atlas('Level72_clock','assets/gradeAssets/7.2/clock.png' ,'json/gradeJson/7.2/clock.json');
         this.load.atlas('Level72_inputBox','assets/gradeAssets/7.2/inputBox.png' ,'json/gradeJson/7.2/inputBox.json');
         this.load.atlas('Level72_showNumbers','assets/gradeAssets/7.2/0To9.png' ,'json/gradeJson/7.2/0To9.json');
	},

	addunitygame1_1Assets:function()
	{
		this.load.atlas('unity1_1backbtn','assets/gradeAssets/unity/1.1/commonAssets/backbtn.png' ,'json/gradeJson/unity/1.1/backbtn.json');
        this.load.atlas('unity1_1CommonSpeakerBtn','assets/gradeAssets/unity/1.1/commonAssets/speaker.png' ,'json/gradeJson/unity/1.1/speaker.json');
        this.load.atlas('unity1_1starAnim','assets/gradeAssets/unity/1.1/commonAssets/starAnim.png','json/gradeJson/unity/1.1/starAnim.json');
        this.load.atlas('unity1_1replay','assets/gradeAssets/unity/1.1/commonAssets/reply.png' ,'json/gradeJson/unity/1.1/reply.json');
        this.load.atlas('unity1_1btn','assets/gradeAssets/unity/1.1/commonAssets/btn.png','json/gradeJson/unity/1.1/btn.json');
        
        this.load.image('unity1_1tittleBar','assets/gradeAssets/unity/1.1/commonAssets/tittleBar.png');
        this.load.image('unity1_1background','assets/gradeAssets/unity/1.1/commonAssets/bg.png');
        this.load.image('unity1_1navBar','assets/gradeAssets/unity/1.1/commonAssets/navBar.png');
        this.load.image('unity1_1timebg','assets/gradeAssets/unity/1.1/commonAssets/timebg.png');
        this.load.image('unity1_1topicOutline','assets/gradeAssets/unity/1.1/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('unity1_1BG_01', 'assets/gradeAssets/unity/1.1/BG_01.png');
        this.load.image('unity1_1Tick', 'assets/gradeAssets/unity/1.1/Tick.png');
        this.load.image('unity1_1practice','assets/gradeAssets/unity/1.1/practice.png');
        this.load.image('unity1_1topic','assets/gradeAssets/unity/1.1/topic.png');
        this.load.image('unity1_1backgrd', 'assets/gradeAssets/unity/1.1/backgrd.png');
        
        this.load.atlas('unity1_1ice_1', 'assets/gradeAssets/unity/1.1/1.png', 'json/gradeJson/unity/1.1/1.json');
        this.load.atlas('unity1_1flowe_aim', 'assets/gradeAssets/unity/1.1/flowe_aim.png', 'json/gradeJson/unity/1.1/flowe_aim.json');
        this.load.atlas('unity1_1ball_anim', 'assets/gradeAssets/unity/1.1/ball_anim.png', 'json/gradeJson/unity/1.1/ball_anim.json');
        
        this.load.atlas('unity1_1ice_anim', 'assets/gradeAssets/unity/1.1/ice_anim.png', 'json/gradeJson/unity/1.1/ice_anim.json');
        this.load.atlas('unity1_1ball_anim2', 'assets/gradeAssets/unity/1.1/ball_anim2.png', 'json/gradeJson/unity/1.1/ball_anim2.json');
        this.load.atlas('unity1_1flowe_aim2', 'assets/gradeAssets/unity/1.1/flowe_aim2.png', 'json/gradeJson/unity/1.1/flowe_aim2.json');
	},

	addunitygame1_2Assets:function()
	{
		this.load.image('unity1_2bg1','assets/gradeAssets/unity/1.2/commonAssets/BG.png');
        this.load.atlas('unity1_2CommonBackBtn','assets/gradeAssets/unity/1.2/commonAssets/backbtn.png' ,'json/gradeJson/unity/1.2/backbtn.json');
        this.load.atlas('unity1_2CommonSpeakerBtn','assets/gradeAssets/unity/1.2/commonAssets/speaker.png' ,'json/gradeJson/unity/1.2/speaker.json');
        this.load.atlas('unity1_2starAnim','assets/gradeAssets/unity/1.2/commonAssets/starAnim.png','json/gradeJson/unity/1.2/starAnim.json');
        this.load.atlas('unity1_2btn','assets/gradeAssets/unity/1.2/commonAssets/btn.png','json/gradeJson/unity/1.2/btn.json');
        this.load.image('unity1_2bg3','assets/gradeAssets/unity/1.2/commonAssets/bg3.png');
        this.load.image('unity1_2tittleBaar','assets/gradeAssets/unity/1.2/commonAssets/tittleBaar.png');
        this.load.atlas('unity1_2replay','assets/gradeAssets/unity/1.2/commonAssets/reply.png' ,'json/gradeJson/unity/1.2/reply.json');
        
        
        this.load.image('unity1_2shadow','assets/gradeAssets/unity/1.2/Basket_shadow.png');
        this.load.image('unity1_2basket','assets/gradeAssets/unity/1.2/Basket.png');
        this.load.image('unity1_2Basket_Back','assets/gradeAssets/unity/1.2/Basket_Back.png');
        this.load.image('unity1_2tree','assets/gradeAssets/unity/1.2/Tree.png');
        this.load.atlas('unity1_2tickBtn','assets/gradeAssets/unity/1.2/commonAssets/tick.png' ,'json/gradeJson/unity/1.2/tick.json');
         this.load.image('unity1_2navBar','assets/gradeAssets/unity/1.2/commonAssets/navBar.png');
        this.load.image('unity1_2topic','assets/gradeAssets/unity/1.2/topic.png');
         this.load.image('unity1_2practice','assets/gradeAssets/unity/1.2/practice.png');
        this.load.image('unity1_2topicOutline','assets/gradeAssets/unity/1.2/commonAssets/topicOutline.png');
        this.load.image('unity1_2timebg','assets/gradeAssets/unity/1.2/commonAssets/timebg.png');
        this.load.atlas('unity1_2mango','assets/gradeAssets/unity/1.2/mango.png' ,'json/gradeJson/unity/1.2/mango.json');
        this.load.atlas('unity1_2mangoCeleb','assets/gradeAssets/unity/1.2/mangoCeleb.png' ,'json/gradeJson/unity/1.2/mangoCeleb.json');
	},

	addunitygame1_3Assets:function()
	{
		this.load.image('unity13_bg1','assets/gradeAssets/unity/1.3/commonAssets/BG.png');
        this.load.atlas('unity13_backbtn','assets/gradeAssets/unity/1.3/commonAssets/backbtn.png' ,'json/gradeJson/unity/1.3/backbtn.json');
        this.load.atlas('unity13_CommonSpeakerBtn','assets/gradeAssets/unity/1.3/commonAssets/speaker.png' ,'json/gradeJson/unity/1.3/speaker.json');
        this.load.atlas('unity13_starAnim','assets/gradeAssets/unity/1.3/commonAssets/starAnim.png','json/gradeJson/unity/1.3/starAnim.json');
        this.load.atlas('unity13_btn','assets/gradeAssets/unity/1.3/commonAssets/btn.png','json/gradeJson/unity/1.3/btn.json');
        this.load.image('unity13_bg3','assets/gradeAssets/unity/1.3/commonAssets/bg3.png');
        this.load.image('unity13_tittleBaar','assets/gradeAssets/unity/1.3/commonAssets/tittleBaar.png');
        this.load.atlas('unity13_replay','assets/gradeAssets/unity/1.3/commonAssets/reply.png' ,'json/gradeJson/unity/1.3/reply.json');
        
        this.load.atlas('unity13_NumberKey','assets/gradeAssets/unity/1.3/NumberKeyN.png' ,'json/gradeJson/unity/1.3/NumberKeyN.json');
       // this.load.atlas('NumberKey','assets/gradeAssets/unity/NumberKey.png' ,'json/gradeJson/unity/1.3/NumberKey.json');
        this.load.image('unity13_navBar','assets/gradeAssets/unity/1.3/commonAssets/navBar.png');
        this.load.image('unity13_numbg','assets/gradeAssets/unity/1.3/commonAssets/numbg.png');
        this.load.image('unity13_practice','assets/gradeAssets/unity/1.3/practice.png');
        this.load.image('unity13_topic','assets/gradeAssets/unity/1.3/topic.png');
        this.load.image('unity13_topicOutline','assets/gradeAssets/unity/1.3/commonAssets/topicOutline.png');
        this.load.image('unity13_timebg','assets/gradeAssets/unity/1.3/commonAssets/timebg.png');
        this.load.atlas('unity13_fish','assets/gradeAssets/unity/1.3/fish.png' ,'json/gradeJson/unity/1.3/fish.json');
        this.load.atlas('unity13_fishCeleb','assets/gradeAssets/unity/1.3/fishCeleb.png' ,'json/gradeJson/unity/1.3/fishCeleb.json');
        
        this.load.atlas('unity13_fish1','assets/gradeAssets/unity/1.3/fish1.png' ,'json/gradeJson/unity/1.3/fish1.json');
        this.load.atlas('unity13_fish1Celeb','assets/gradeAssets/unity/1.3/fish1Celeb.png' ,'json/gradeJson/unity/1.3/fish1Celeb.json');
        
        this.load.atlas('unity13_fish2','assets/gradeAssets/unity/1.3/fish2.png' ,'json/gradeJson/unity/1.3/fish2.json');
        this.load.atlas('unity13_fish2Celeb','assets/gradeAssets/unity/1.3/fish2Celeb.png' ,'json/gradeJson/unity/1.3/fish2Celeb.json');
	},

	addunitygame1_4Assets:function()
	{
		this.load.atlas('unity1_4backbtn','assets/gradeAssets/unity/1.4/commonAssets/backbtn.png' ,'json/gradeJson/unity/1.4/backbtn.json');
        this.load.atlas('unity1_4CommonSpeakerBtn','assets/gradeAssets/unity/1.4/commonAssets/speaker.png' ,'json/gradeJson/unity/1.4/speaker.json');
        this.load.atlas('unity1_4starAnim','assets/gradeAssets/unity/1.4/commonAssets/starAnim.png','json/gradeJson/unity/1.4/starAnim.json');
        this.load.atlas('unity1_4replay','assets/gradeAssets/unity/1.4/commonAssets/reply.png' ,'json/gradeJson/unity/1.4/reply.json');
        this.load.atlas('unity1_4btn','assets/gradeAssets/unity/1.4/commonAssets/btn.png','json/gradeJson/unity/1.4/btn.json');
        
        this.load.image('unity1_4tittleBar','assets/gradeAssets/unity/1.4/commonAssets/tittleBar.png');
        this.load.image('unity1_4background','assets/gradeAssets/unity/1.4/commonAssets/bg.png');
        this.load.image('unity1_4navBar','assets/gradeAssets/unity/1.4/commonAssets/navBar.png');
        this.load.image('unity1_4timebg','assets/gradeAssets/unity/1.4/commonAssets/timebg.png');
        this.load.image('unity1_4topicOutline','assets/gradeAssets/unity/1.4/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('unity1_4BG_01', 'assets/gradeAssets/unity/1.4/BG_01.png');
        this.load.image('unity1_4NumberKey', 'assets/gradeAssets/unity/1.4/NumberKey.png');
        this.load.image('unity1_4practice','assets/gradeAssets/unity/1.4/practice.png');
        this.load.image('unity1_4topic','assets/gradeAssets/unity/1.4/topic.png');
        this.load.image('unity1_4backgrd', 'assets/gradeAssets/unity/1.4/backgrd.png');
        this.load.image('unity1_4Tick', 'assets/gradeAssets/unity/1.4/Tick.png');
        
        this.load.atlas('unity1_4ice_1', 'assets/gradeAssets/unity/1.4/1.png', 'json/gradeJson/unity/1.4/1.json');
        this.load.atlas('unity1_4flowe_aim', 'assets/gradeAssets/unity/1.4/flowe_aim.png', 'json/gradeJson/unity/1.4/flowe_aim.json');
        this.load.atlas('unity1_4ball_anim', 'assets/gradeAssets/unity/1.4/ball_anim.png', 'json/gradeJson/unity/1.4/ball_anim.json');
        
        this.load.atlas('unity1_4ice_anim', 'assets/gradeAssets/unity/1.4/ice_anim.png', 'json/gradeJson/unity/1.4/ice_anim.json');
        this.load.atlas('unity1_4ball_anim2', 'assets/gradeAssets/unity/1.4/ball_anim2.png', 'json/gradeJson/unity/1.4/ball_anim2.json');
        this.load.atlas('unity1_4flowe_aim2', 'assets/gradeAssets/unity/1.4/flowe_aim2.png', 'json/gradeJson/unity/1.4/flowe_aim2.json');
	},

	addunitygame1_5Assets:function()
	{
		this.load.image('unity15_bg1','assets/gradeAssets/unity/1.5/commonAssets/BG.png');
        this.load.atlas('unity15_CommonBackBtn','assets/gradeAssets/unity/1.5/commonAssets/backbtn.png' ,'json/gradeJson/unity/1.5/backbtn.json');
        this.load.atlas('unity15_CommonSpeakerBtn','assets/gradeAssets/unity/1.5/commonAssets/speaker.png' ,'json/gradeJson/unity/1.5/speaker.json');
        this.load.atlas('unity15_starAnim','assets/gradeAssets/unity/1.5/commonAssets/starAnim.png','json/gradeJson/unity/1.5/starAnim.json');
        this.load.atlas('unity15_btn','assets/gradeAssets/unity/1.5/commonAssets/btn.png','json/gradeJson/unity/1.5/btn.json');
        this.load.image('unity15_bg3','assets/gradeAssets/unity/1.5/commonAssets/bg3.png');
        this.load.image('unity15_tittleBaar','assets/gradeAssets/unity/1.5/commonAssets/tittleBaar.png');
        this.load.atlas('unity15_replay','assets/gradeAssets/unity/1.5/commonAssets/reply.png' ,'json/gradeJson/unity/1.5/reply.json');
        
        
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

	addunitygame1_6Assets:function()
	{
		this.load.atlas('unity16_CommonBackBtn','assets/gradeAssets/unity/1.6/commonAssets/backbtn.png' ,'json/gradeJson/unity/1.6/backbtn.json');
        this.load.atlas('unity16_CommonSpeakerBtn','assets/gradeAssets/unity/1.6/commonAssets/speaker.png' ,'json/gradeJson/unity/1.6/speaker.json');
        this.load.atlas('unity16_starAnim','assets/gradeAssets/unity/1.6/commonAssets/starAnim.png','json/gradeJson/unity/1.6/starAnim.json');
        this.load.image('unity16_tittleBar','assets/gradeAssets/unity/1.6/commonAssets/tittleBar.png');
        this.load.atlas('unity16_replay','assets/gradeAssets/unity/1.6/commonAssets/reply.png' ,'json/gradeJson/unity/1.6/reply.json');
        this.load.atlas('unity16_btn','assets/gradeAssets/unity/1.6/commonAssets/btn.png','json/gradeJson/unity/1.6/btn.json');
        this.load.image('unity16_background','assets/gradeAssets/unity/1.6/commonAssets/bg.png');

        //game assets.
        this.load.image('unity16_BG_01', 'assets/gradeAssets/unity/1.6/BG_01.png');
        this.load.image('unity16_Bubble', 'assets/gradeAssets/unity/1.6/Bubble.png');
        
         this.load.image('unity16_navBar','assets/gradeAssets/unity/1.6/commonAssets/navBar.png');
        this.load.image('unity16_topic','assets/gradeAssets/unity/1.6/topic.png');
         this.load.image('unity16_practice','assets/gradeAssets/unity/1.6/practice.png');
        this.load.image('unity16_topicOutline','assets/gradeAssets/unity/1.6/commonAssets/topicOutline.png');
        this.load.image('unity16_timebg','assets/gradeAssets/unity/1.6/commonAssets/timebg.png');
        
       
        this.load.atlas('unity16_BubbleAni', 'assets/gradeAssets/unity/1.6/BubbleAni.png', 'json/gradeJson/unity/1.6/BubbleAni.json');
	},

	addunitygame1_7Assets:function()
	{
		this.load.image('Game17_background','assets/gradeAssets/unity/1.7/bg.png');
        this.load.image('Game17_TopBar', 'assets/gradeAssets/unity/1.7/Topbar.png');
        this.load.image('Game17_dottedBox', 'assets/gradeAssets/unity/1.7/dottedBox.png');
        this.load.atlas('Game17_tick','assets/gradeAssets/unity/1.7/tick.png' ,'json/gradeJson/unity/1.7/tick.json');
		this.load.image('Game17_celeb', 'assets/gradeAssets/unity/1.7/c.png');
        this.load.atlas('Game17_backbtn','assets/gradeAssets/unity/1.7/backbtn.png' ,'json/gradeJson/unity/1.7/backbtn.json');
        this.load.atlas('Game17_speaker','assets/gradeAssets/unity/1.7/speaker.png' ,'json/gradeJson/unity/1.7/speaker.json');
		this.load.atlas('Game17_starAnim','assets/gradeAssets/unity/1.7/starAnim.png','json/gradeJson/unity/1.7/starAnim.json');
        this.load.atlas('Game17_btn','assets/gradeAssets/unity/1.7/btn.png','json/gradeJson/unity/1.7/btn.json');
        this.load.image('Game17_tittleBar', 'assets/gradeAssets/unity/1.7/tittleBar.png');
        this.load.atlas('Game17_replay', 'assets/gradeAssets/unity/1.7/reply.png', 'json/gradeJson/unity/1.7/reply.json');
        
        //load 1.7 assets
        this.load.image('Game17_zero', 'assets/gradeAssets/unity/1.7/0.png');
        this.load.image('Game17_one', 'assets/gradeAssets/unity/1.7/1.png');
        this.load.image('Game17_two', 'assets/gradeAssets/unity/1.7/2.png');
        this.load.image('Game17_three', 'assets/gradeAssets/unity/1.7/3.png');
        this.load.image('Game17_four', 'assets/gradeAssets/unity/1.7/4.png');
        this.load.image('Game17_five', 'assets/gradeAssets/unity/1.7/5.png');
        this.load.image('Game17_six', 'assets/gradeAssets/unity/1.7/6.png');
        this.load.image('Game17_seven', 'assets/gradeAssets/unity/1.7/7.png');
        this.load.image('Game17_eight', 'assets/gradeAssets/unity/1.7/8.png');
        this.load.image('Game17_nine', 'assets/gradeAssets/unity/1.7/9.png');
        this.load.image('Game17_bg', 'assets/gradeAssets/unity/1.7/bg17.png');
        this.load.atlas('Game17_fish', 'assets/gradeAssets/unity/1.7/fish.png', 'json/gradeJson/unity/1.7/fish.json');
        this.load.atlas('Game17_fishbubble', 'assets/gradeAssets/unity/1.7/fishbubble.png', 'json/gradeJson/unity/1.7/fishbubble.json');
        this.load.image('Game17_bluebg','assets/gradeAssets/unity/1.7/bluebg.png');
        this.load.image('Game17_maskbg','assets/gradeAssets/unity/1.7/maskbg.png');
        this.load.image('Game17_Arrow_Btn', 'assets/gradeAssets/unity/1.7/Arrow_Btn.png');
        this.load.image('Game17_timer', 'assets/gradeAssets/unity/1.7/timer.png');
	},


	addunitygame5_1Assets:function()
	{
		this.load.image('grade51_background','assets/gradeAssets/unity/5.1/bg.png');
		this.load.image('grade51_bg1','assets/gradeAssets/unity/5.1/bg1.png');
        this.load.image('grade51_boxbg', 'assets/gradeAssets/unity/5.1/Boxbg.png');
        this.load.image('grade51_timebg', 'assets/gradeAssets/unity/5.1/timebg.png');
        this.load.image('grade51_WhiteBox', 'assets/gradeAssets/unity/5.1/WhiteBox.png');
        this.load.image('grade51_TopBar', 'assets/gradeAssets/unity/5.1/Topbar.png');
        this.load.image('grade51_dottedBox', 'assets/gradeAssets/unity/5.1/dottedBox.png');
        this.load.image('grade51_plusSign', 'assets/gradeAssets/unity/5.1/plusSign.png');
        this.load.image('grade51_equalSymbol', 'assets/gradeAssets/unity/5.1/equalSymbol.png');
        this.load.atlas('grade51_carrotsAnim','assets/gradeAssets/unity/5.1/carrotsAnim.png' ,'json/gradeJson/unity/5.1/carrotsAnim.json');
        this.load.atlas('grade51_RabitAnim','assets/gradeAssets/unity/5.1/RabitAnim.png' ,'json/gradeJson/unity/5.1/RabitAnim.json');
        this.load.atlas('grade51_calNum','assets/gradeAssets/unity/5.1/calNum.png' ,'json/gradeJson/unity/5.1/calNum.json');
        this.load.atlas('grade51_greenNumbers','assets/gradeAssets/unity/5.1/greenNumbers.png' ,'json/gradeJson/unity/5.1/greenNumbers.json');
        this.load.atlas('grade51_carrot','assets/gradeAssets/unity/5.1/carrot.png' ,'json/gradeJson/unity/5.1/carrot.json');
        this.load.atlas('grade51_greenNumbers1','assets/gradeAssets/unity/5.1/greenNumbers1.png' ,'json/gradeJson/unity/5.1/greenNumbers1.json');
        this.load.atlas('grade51_txtbox','assets/gradeAssets/unity/5.1/txtbox.png' ,'json/gradeJson/unity/5.1/txtbox.json');
        this.load.atlas('grade51_tick','assets/gradeAssets/unity/5.1/tick.png' ,'json/gradeJson/unity/5.1/tick.json');
        this.load.atlas('grade51_eraser','assets/gradeAssets/unity/5.1/eraser.png' ,'json/gradeJson/unity/5.1/eraser.json');
        this.load.atlas('grade51_thinkingCloud','assets/gradeAssets/unity/5.1/thinkingCloud.png','json/gradeJson/unity/5.1/thinkingCloud.json');
        this.load.atlas('grade51_backbtn','assets/gradeAssets/unity/5.1/backbtn.png' ,'json/gradeJson/unity/5.1/backbtn.json');
        this.load.atlas('grade51_speaker','assets/gradeAssets/unity/5.1/speaker.png' ,'json/gradeJson/unity/5.1/speaker.json');
        this.load.atlas('grade51_starAnim','assets/gradeAssets/unity/5.1/starAnim.png','json/gradeJson/unity/5.1/starAnim.json');
        this.load.atlas('grade51_btn','assets/gradeAssets/unity/5.1/btn.png','json/gradeJson/unity/5.1/btn.json');
        this.load.image('grade51_tittleBar', 'assets/gradeAssets/unity/5.1/tittleBar.png');
        this.load.atlas('grade51_replay', 'assets/gradeAssets/unity/5.1/reply.png', 'json/gradeJson/unity/5.1/reply.json');



	},

	addunitygame6_1Assets:function()
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
        this.load.atlas('grade61_backbtn','assets/gradeAssets/unity/6.1/backbtn.png' ,'json/gradeJson/unity/6.1/backbtn.json');
        this.load.atlas('grade61_speaker','assets/gradeAssets/unity/6.1/speaker.png' ,'json/gradeJson/unity/6.1/speaker.json');
        this.load.atlas('grade61_starAnim','assets/gradeAssets/unity/6.1/starAnim.png','json/gradeJson/unity/6.1/starAnim.json');
        this.load.atlas('grade61_btn','assets/gradeAssets/unity/6.1/btn.png','json/gradeJson/unity/6.1/btn.json');
        this.load.image('grade61_tittleBar', 'assets/gradeAssets/unity/6.1/tittleBar.png');
        this.load.atlas('grade61_replay', 'assets/gradeAssets/unity/6.1/reply.png', 'json/gradeJson/unity/6.1/reply.json');



	},

	addunitygame8_1Assets:function()
	{
		this.load.image('grade81_background','assets/gradeAssets/8.1/bg.png');
		this.load.image('grade81_bg1','assets/gradeAssets/8.1/bg1.png');
        this.load.image('grade81_boxbg', 'assets/gradeAssets/8.1/Boxbg.png');
        this.load.image('grade81_timebg', 'assets/gradeAssets/8.1/timebg.png');
        this.load.image('grade81_WhiteBox', 'assets/gradeAssets/8.1/WhiteBox.png');
        this.load.image('grade81_TopBar', 'assets/gradeAssets/8.1/Topbar.png');
        this.load.image('grade81_bottomBar', 'assets/gradeAssets/8.1/bottomBar.png');
        this.load.image('grade81_dottedBox', 'assets/gradeAssets/8.1/dottedBox.png');
        this.load.image('grade81_minusSign', 'assets/gradeAssets/8.1/minusSign.png');
        this.load.image('grade81_equalSymbol', 'assets/gradeAssets/8.1/equalSymbol.png');
        this.load.atlas('grade81_carrotsAnim','assets/gradeAssets/8.1/carrotsAnim.png' ,'json/gradeJson/8.1/carrotsAnim.json');
        this.load.atlas('grade81_RabitAnim','assets/gradeAssets/8.1/RabitAnim.png' ,'json/gradeJson/8.1/RabitAnim.json');
        this.load.atlas('grade81_calNum','assets/gradeAssets/8.1/calNum.png' ,'json/gradeJson/8.1/calNum.json');
        this.load.atlas('grade81_greenNumbers','assets/gradeAssets/8.1/greenNumbers.png' ,'json/gradeJson/8.1/greenNumbers.json');
        this.load.atlas('grade81_carrot','assets/gradeAssets/8.1/carrot.png' ,'json/gradeJson/8.1/carrot.json');
        this.load.atlas('grade81_greenNumbers1','assets/gradeAssets/8.1/greenNumbers1.png' ,'json/gradeJson/8.1/greenNumbers1.json');
        this.load.atlas('grade81_greenNumbers2','assets/gradeAssets/8.1/greenNumbers2.png' ,'json/gradeJson/8.1/greenNumbers2.json');
        this.load.atlas('grade81_txtbox','assets/gradeAssets/8.1/txtbox.png' ,'json/gradeJson/8.1/txtbox.json');
        this.load.atlas('grade81_tick','assets/gradeAssets/8.1/tick.png' ,'json/gradeJson/8.1/tick.json');
        this.load.atlas('grade81_eraser','assets/gradeAssets/8.1/eraser.png' ,'json/gradeJson/8.1/eraser.json');
        this.load.atlas('grade81_thinkingCloud','assets/gradeAssets/8.1/thinkingCloud.png','json/gradeJson/8.1/thinkingCloud.json');
        this.load.atlas('grade81_backbtn','assets/gradeAssets/8.1/backbtn.png' ,'json/gradeJson/8.1/backbtn.json');
        this.load.atlas('grade81_speaker','assets/gradeAssets/8.1/speaker.png' ,'json/gradeJson/8.1/speaker.json');
        this.load.atlas('grade81_starAnim','assets/gradeAssets/8.1/starAnim.png','json/gradeJson/8.1/starAnim.json');
        this.load.atlas('grade81_btn','assets/gradeAssets/8.1/btn.png','json/gradeJson/8.1/btn.json');
        this.load.image('grade81_tittleBar', 'assets/gradeAssets/8.1/tittleBar.png');
        this.load.atlas('grade81_replay', 'assets/gradeAssets/8.1/reply.png', 'json/gradeJson/8.1/reply.json');
	},

	addunitygame11_1Assets:function()
	{
		this.load.image('unity11_1bg','assets/gradeAssets/11.1/commonAssets/bg.png');
        this.load.image('unity11_1backg','assets/gradeAssets/11.1/commonAssets/backg.png');
        this.load.image('unity11_1topbar', 'assets/gradeAssets/11.1/commonAssets/topbar.png');
        this.load.image('unity11_1numbg', 'assets/gradeAssets/11.1/commonAssets/numbg.png');
        this.load.image('unity11_1timerbg', 'assets/gradeAssets/11.1/commonAssets/timerbg.png');
        this.load.image('unity11_1dotbox', 'assets/gradeAssets/11.1/commonAssets/dotbox.png');
        this.load.image('unity11_1tittleBar', 'assets/gradeAssets/11.1/commonAssets/tittleBaar.png');
		
        this.load.atlas('unity11_1backbtn','assets/gradeAssets/11.1/commonAssets/backbtn.png' ,'json/gradeJson/11.1/backbtn.json');
        this.load.atlas('unity11_1speaker','assets/gradeAssets/11.1/commonAssets/speaker.png' ,'json/gradeJson/11.1/speaker.json');
        this.load.atlas('unity11_1starAnim','assets/gradeAssets/11.1/commonAssets/starAnim.png','json/gradeJson/11.1/starAnim.json');
        this.load.atlas('unity11_1btn','assets/gradeAssets/11.1/commonAssets/btn.png','json/gradeJson/11.1/btn.json');
        this.load.atlas('unity11_1replay', 'assets/gradeAssets/11.1/commonAssets/reply.png', 'json/gradeJson/11.1/reply.json');
        this.load.atlas('unity11_1erase', 'assets/gradeAssets/11.1/erase.png', 'json/gradeJson/11.1/erase.json');
        this.load.atlas('unity11_1mul', 'assets/gradeAssets/11.1/mul.png', 'json/gradeJson/11.1/mul.json');
        this.load.atlas('unity11_1numberpad', 'assets/gradeAssets/11.1/numberpad.png', 'json/gradeJson/11.1/numberpad.json');
        this.load.atlas('unity11_1numbers', 'assets/gradeAssets/11.1/numbers.png', 'json/gradeJson/11.1/numbers.json');
        this.load.atlas('unity11_1apple','assets/gradeAssets/11.1/apple.png' ,'json/gradeJson/11.1/apple.json');
        this.load.atlas('unity11_1rightmark','assets/gradeAssets/11.1/rightmark.png','json/gradeJson/11.1/rightmark.json');
        
        this.load.image('unity11_1b2', 'assets/gradeAssets/11.1/b2.png');
        this.load.image('unity11_1a1', 'assets/gradeAssets/11.1/a1.png');
        this.load.image('unity11_1a2', 'assets/gradeAssets/11.1/a2.png');
        this.load.image('unity11_1a3', 'assets/gradeAssets/11.1/a3.png');
        this.load.image('unity11_1ansbox', 'assets/gradeAssets/11.1/ansbox.png');
        this.load.image('unity11_1apple1', 'assets/gradeAssets/11.1/apple1.png');
        this.load.image('unity11_1apple2', 'assets/gradeAssets/11.1/apple2.png');
        this.load.image('unity11_1apple3', 'assets/gradeAssets/11.1/apple3.png');
        this.load.image('unity11_1box', 'assets/gradeAssets/11.1/box.png');
        this.load.image('unity11_1equal', 'assets/gradeAssets/11.1/equal.png');
        this.load.image('unity11_1set', 'assets/gradeAssets/11.1/set.png');
        this.load.image('unity11_1plus', 'assets/gradeAssets/11.1/plus.png'); 
	},


	addunitygame11_2Assets:function()
	{
		this.load.image('unity11_2bg','assets/gradeAssets/11.2/commonAssets/bg.png');
        this.load.image('unity11_2backg','assets/gradeAssets/11.2/commonAssets/backg.png');
        this.load.image('unity11_2topbar', 'assets/gradeAssets/11.2/commonAssets/topbar.png');
        this.load.image('unity11_2timerbg', 'assets/gradeAssets/11.2/commonAssets/timerbg.png');
        this.load.image('unity11_2dotbox', 'assets/gradeAssets/11.2/commonAssets/dotbox.png');
        this.load.image('unity11_2numbg', 'assets/gradeAssets/11.2/commonAssets/numbg.png');
        this.load.image('unity11_2tittleBar', 'assets/gradeAssets/11.2/commonAssets/tittleBaar.png');
        
		
        this.load.atlas('unity11_2apple','assets/gradeAssets/11.2/apple.png' ,'json/gradeJson/11.2/apple.json');
        this.load.atlas('unity11_2backbtn','assets/gradeAssets/11.2/commonAssets/backbtn.png' ,'json/gradeJson/11.2/backbtn.json');
        this.load.atlas('unity11_2speaker','assets/gradeAssets/11.2/commonAssets/speaker.png' ,'json/gradeJson/11.2/speaker.json');
		this.load.atlas('unity11_2starAnim','assets/gradeAssets/11.2/commonAssets/starAnim.png','json/gradeJson/11.2/starAnim.json');
        this.load.atlas('unity11_2btn','assets/gradeAssets/11.2/commonAssets/btn.png','json/gradeJson/11.2/btn.json');
        this.load.atlas('unity11_2replay', 'assets/gradeAssets/11.2/commonAssets/reply.png', 'json/gradeJson/11.2/reply.json');
        this.load.atlas('unity11_2erase', 'assets/gradeAssets/11.2/erase.png', 'json/gradeJson/11.2/erase.json');
        this.load.atlas('unity11_2mul', 'assets/gradeAssets/11.2/mul.png', 'json/gradeJson/11.2/mul.json');
        this.load.atlas('unity11_2numberpad', 'assets/gradeAssets/11.2/numberpad.png', 'json/gradeJson/11.2/numberpad.json');
        this.load.atlas('unity11_2numbers', 'assets/gradeAssets/11.2/numbers.png', 'json/gradeJson/11.2/numbers.json');
        this.load.atlas('unity11_2rightmark','assets/gradeAssets/11.2/rightmark.png','json/gradeJson/11.2/rightmark.json');
        
        this.load.image('unity11_2b2', 'assets/gradeAssets/11.2/b2.png');
        this.load.image('unity11_2a1', 'assets/gradeAssets/11.2/a1.png');
        this.load.image('unity11_2a2', 'assets/gradeAssets/11.2/a2.png');
        this.load.image('unity11_2a3', 'assets/gradeAssets/11.2/a3.png');
        this.load.image('unity11_2ansbox', 'assets/gradeAssets/11.2/ansbox.png');
        this.load.image('unity11_2apple1', 'assets/gradeAssets/11.2/apple1.png');
        this.load.image('unity11_2apple2', 'assets/gradeAssets/11.2/apple2.png');
        this.load.image('unity11_2apple3', 'assets/gradeAssets/11.2/apple3.png');
        this.load.image('unity11_2box', 'assets/gradeAssets/11.2/box.png');
        this.load.image('unity11_2equal', 'assets/gradeAssets/11.2/equal.png');
        this.load.image('unity11_2set', 'assets/gradeAssets/11.2/set.png');
        this.load.image('unity11_2plus', 'assets/gradeAssets/11.2/plus.png');
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
			console.log("decoded");
			fx.addMarker('alien death', 0, 1.0);
			fx.play('alien death');
		//this.state.start('gradeSelectionScreen',true,false);
		},this);*/





		game.state.add('gradeSelectionScreen',Game.gradeSelectionScreen);
		
        game.state.add('grade1levelSelectionScreen',Game.grade1levelSelectionScreen);

        game.state.add('grade2levelSelectionScreen',Game.grade2levelSelectionScreen);
		
        game.state.add('grade3levelSelectBoot',Game.grade3levelSelectBoot);
        game.state.add('grade3levelSelectPreloader',Game.grade3levelSelectPreloader);
        game.state.add('grade3levelSelectionScreen',Game.grade3levelSelectionScreen);
		
		game.state.add('grade4levelSelectBoot',Game.grade4levelSelectBoot);
		game.state.add('grade4levelSelectPreloader',Game.grade4levelSelectPreloader);
        game.state.add('grade4levelSelectionScreen',Game.grade4levelSelectionScreen);
		
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

        game.state.add('unity5_1level1',Game.unity5_1level1);
        game.state.add('unity5_1Score',Game.unity5_1Score);

        game.state.add('unity6_1level1',Game.unity6_1level1);
        game.state.add('unity6_1Score',Game.unity6_1Score);

        game.state.add('unity8_1level1',Game.unity8_1level1);
        game.state.add('unity8_1Score',Game.unity8_1Score);

        game.state.add('unity11_1level1',Game.unity11_1level1);
        game.state.add('unity11_1Score',Game.unity11_1Score);

        game.state.add('unity11_2level1',Game.unity11_2level1);
        game.state.add('unity11_2Score',Game.unity11_2Score);


















		_this.state.start('gradeSelectionScreen',true,false);
		
		
		
		
		
		
		
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
		/*_this.bg = null;
		_this.preloadBar = null;
		_this = null;*/

		/*_this.world.onChildInputDown.removeAll();
        _this.world.removeChildren(0, _this.world.length);

		//this = null;
		_this = null;*/
	}
}