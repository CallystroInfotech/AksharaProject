Game.grade2_2preloader=function(game){
	//this.preloadBar=null;
	var Eng_22_1,Eng_22_2,Eng_22_3,Eng_22_4,Eng_22_5,Eng_22_6,Eng_22_7,Eng_22_8,Eng_22_9,Eng_22_10;
	var Kan_22_1,Kan_22_2,Kan_22_3,Kan_22_4,Kan_22_5,Kan_22_6,Kan_22_7,Kan_22_8,Kan_22_9,Kan_22_10;
	var Hin_22_1,Hin_22_2,Hin_22_3,Hin_22_4,Hin_22_5,Hin_22_6,Hin_22_7,Hin_22_8,Hin_22_9,Hin_22_10;
};

Game.grade2_2preloader.prototype={
	preload:function(){

		var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
		
		
		this.load.atlas('CommonBackBtn','assets/commonAssets/backbtn.png','json/commonJson/backbtn.json');
		this.load.atlas('CommonSpeakerBtn','assets/commonAssets/speaker.png','json/commonJson/speaker.json');
		//this.load.atlas('CommonReplayBtn','assets/commonAssets/replay.png','json/commonJson/replay.json');
		this.load.atlas('CommonStarAnim','assets/commonAssets/starAnim.png','json/commonJson/starAnim.json');

		
		this.load.atlas('CommonHomeBtn','assets/commonAssets/homeBtn.png','assets/commonAssets/homeBtn.json');	
		this.load.atlas('CommonNextBtn','assets/commonAssets/nextBtn.png','assets/commonAssets/nextBtn.json');	
		this.load.atlas('CommonReplayBtn','assets/commonAssets/replayBtn.png','assets/commonAssets/replayBtn.json');

        
		this.load.image('bg','assets/grade1Assets/2.2/commonAssets/bg.png');
        
        //game assets/grade1Assets/2.2
		this.load.image('gamebg','assets/grade1Assets/2.2/gameAssets/gamebg.png');
        this.load.atlas('gameBox','assets/grade1Assets/2.2/gameAssets/gameBox.png' ,'json/grade1Json/2.2/gameBox.json');
        this.load.atlas('allimg','assets/grade1Assets/2.2/gameAssets/allimg2.png' ,'json/grade1Json/2.2/allimg2.json');
        this.load.atlas('tickMark','assets/grade1Assets/2.2/gameAssets/tickMark.png' ,'json/grade1Json/2.2/tickMark.json');
        this.load.image('croc','assets/grade1Assets/2.2/gameAssets/croc.png');       
        this.load.image('glow','assets/grade1Assets/2.2/gameAssets/glow.png');
        
        //game items
        this.load.image('Building','assets/grade1Assets/2.2/gameAssets/1.png');
        this.load.image('OrangeHouse','assets/grade1Assets/2.2/gameAssets/2.png');
        this.load.image('PurpleHouse','assets/grade1Assets/2.2/gameAssets/3.png');
        this.load.image('BlueHouse','assets/grade1Assets/2.2/gameAssets/4.png');
        
        this.load.image('LongStairs','assets/grade1Assets/2.2/gameAssets/5.png');
        this.load.image('SecondLongestStairs','assets/grade1Assets/2.2/gameAssets/6.png');
        this.load.image('MediumStairs','assets/grade1Assets/2.2/gameAssets/7.png');
        this.load.image('ShortestStairs','assets/grade1Assets/2.2/gameAssets/8.png');
        
        this.load.image('GreyDog','assets/grade1Assets/2.2/gameAssets/9.png');
        this.load.image('WhiteDog','assets/grade1Assets/2.2/gameAssets/10.png');
        this.load.image('BlackDog','assets/grade1Assets/2.2/gameAssets/11.png');
        this.load.image('BrownDog','assets/grade1Assets/2.2/gameAssets/12.png');
        
        this.load.image('OrangeSnake','assets/grade1Assets/2.2/gameAssets/13.png');
        this.load.image('GreenDottedSnake','assets/grade1Assets/2.2/gameAssets/14.png');
        this.load.image('RedSnake','assets/grade1Assets/2.2/gameAssets/15.png');
        this.load.image('GreenSnake','assets/grade1Assets/2.2/gameAssets/16.png');
        
        this.load.image('BrownBottle','assets/grade1Assets/2.2/gameAssets/17.png');
        this.load.image('OrangeBottle','assets/grade1Assets/2.2/gameAssets/18.png');
        this.load.image('BlackBottle','assets/grade1Assets/2.2/gameAssets/19.png');
        this.load.image('BlueBottle','assets/grade1Assets/2.2/gameAssets/20.png');
        
        this.load.image('LargeBox','assets/grade1Assets/2.2/gameAssets/21.png');
        this.load.image('SecondLargestBox','assets/grade1Assets/2.2/gameAssets/22.png');
        this.load.image('MediumBox','assets/grade1Assets/2.2/gameAssets/23.png');
        this.load.image('SmallBox','assets/grade1Assets/2.2/gameAssets/24.png');
        
        this.load.image('Giraffe','assets/grade1Assets/2.2/gameAssets/25.png');
        this.load.image('Elephant','assets/grade1Assets/2.2/gameAssets/26.png');
        this.load.image('Dog','assets/grade1Assets/2.2/gameAssets/27.png');
        this.load.image('Cat','assets/grade1Assets/2.2/gameAssets/28.png');
        
        this.load.image('Crane','assets/grade1Assets/2.2/gameAssets/29.png');
        this.load.image('Crow','assets/grade1Assets/2.2/gameAssets/30.png');
        this.load.image('Pigeon','assets/grade1Assets/2.2/gameAssets/31.png');
        this.load.image('Sparrow','assets/grade1Assets/2.2/gameAssets/32.png');
        
        //Copy from boot
        //loading the Audio files.
		 this.load.audio('baudio', 'sounds/BackgroundSound.mp3');
        this.load.audio('waudio', 'sounds/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'sounds/ClickSound.mp3');
		this.load.audio('celebr', 'sounds/celebration.mp3');
        this.load.audio('OhSound', 'sounds/OhSound.mp3');
        this.load.audio('aiyoh', 'sounds/aiyoh.mp3');
        this.load.audio('snapSound', 'sounds/snapSound.mp3');
		
		
        this.load.audio('Eng_22_1', 'questionSounds/2.2/English/2.2_1.mp3');
		this.load.audio('Eng_22_2', 'questionSounds/2.2/English/2.2_2.mp3');
		this.load.audio('Eng_22_3', 'questionSounds/2.2/English/2.2_3.mp3');
		this.load.audio('Eng_22_4', 'questionSounds/2.2/English/2.2_4.mp3');
		this.load.audio('Eng_22_5', 'questionSounds/2.2/English/2.2_5.mp3');
		this.load.audio('Eng_22_6', 'questionSounds/2.2/English/2.2_6.mp3');
		this.load.audio('Eng_22_7', 'questionSounds/2.2/English/2.2_7.mp3');
		this.load.audio('Eng_22_8', 'questionSounds/2.2/English/2.2_8.mp3');
		this.load.audio('Eng_22_9', 'questionSounds/2.2/English/2.2_9.mp3');
		this.load.audio('Eng_22_10', 'questionSounds/2.2/English/2.2_10.mp3');
		
		this.load.audio('Kan_22_1', 'questionSounds/2.2/Kannada/2.2_1.mp3');
		this.load.audio('Kan_22_2', 'questionSounds/2.2/Kannada/2.2_2.mp3');
		this.load.audio('Kan_22_3', 'questionSounds/2.2/Kannada/2.2_3.mp3');
		this.load.audio('Kan_22_4', 'questionSounds/2.2/Kannada/2.2_4.mp3');
		this.load.audio('Kan_22_5', 'questionSounds/2.2/Kannada/2.2_5.mp3');
		this.load.audio('Kan_22_6', 'questionSounds/2.2/Kannada/2.2_6.mp3');
		this.load.audio('Kan_22_7', 'questionSounds/2.2/Kannada/2.2_7.mp3');
		this.load.audio('Kan_22_8', 'questionSounds/2.2/Kannada/2.2_8.mp3');
		this.load.audio('Kan_22_9', 'questionSounds/2.2/Kannada/2.2_9.mp3');
		this.load.audio('Kan_22_10', 'questionSounds/2.2/Kannada/2.2_10.mp3');
		
		this.load.audio('Hin_22_1', 'questionSounds/2.2/Hindi/2.2_1.mp3');
		this.load.audio('Hin_22_2', 'questionSounds/2.2/Hindi/2.2_2.mp3');
		this.load.audio('Hin_22_3', 'questionSounds/2.2/Hindi/2.2_3.mp3');
		this.load.audio('Hin_22_4', 'questionSounds/2.2/Hindi/2.2_4.mp3');
		this.load.audio('Hin_22_5', 'questionSounds/2.2/Hindi/2.2_5.mp3');
		this.load.audio('Hin_22_6', 'questionSounds/2.2/Hindi/2.2_6.mp3');
		this.load.audio('Hin_22_7', 'questionSounds/2.2/Hindi/2.2_7.mp3');
		this.load.audio('Hin_22_8', 'questionSounds/2.2/Hindi/2.2_8.mp3');
		this.load.audio('Hin_22_9', 'questionSounds/2.2/Hindi/2.2_9.mp3');
		this.load.audio('Hin_22_10', 'questionSounds/2.2/Hindi/2.2_10.mp3');
		
		this.load.onLoadComplete.add(this.onloadComplete,this);
        
	},

	onloadComplete:function(){
		
		this.load.onLoadComplete.removeAll();
		
		baudio = this.add.audio('baudio');
    	celebr = this.add.audio('celebr');
    	waudio = this.add.audio('waudio');
        aiyoh = this.add.audio('aiyoh');
        OhSound = this.add.audio('OhSound');
        snapSound = this.add.audio('snapSound');       
        ClickSound=this.add.audio('ClickSound');
	
		//adding the loaded audios to variables.
		Eng_22_1 = this.add.audio('Eng_22_1');
		Eng_22_2 = this.add.audio('Eng_22_2');
		Eng_22_3 = this.add.audio('Eng_22_3');
		Eng_22_4 = this.add.audio('Eng_22_4');
		Eng_22_5 = this.add.audio('Eng_22_5');
		Eng_22_6 = this.add.audio('Eng_22_6');
		Eng_22_7 = this.add.audio('Eng_22_7');
		Eng_22_8 = this.add.audio('Eng_22_8');
		Eng_22_9 = this.add.audio('Eng_22_9');
		Eng_22_10 = this.add.audio('Eng_22_10');
		
		Kan_22_1 = this.add.audio('Kan_22_1');
		Kan_22_2 = this.add.audio('Kan_22_2');
		Kan_22_3 = this.add.audio('Kan_22_3');
		Kan_22_4 = this.add.audio('Kan_22_4');
		Kan_22_5 = this.add.audio('Kan_22_5');
		Kan_22_6 = this.add.audio('Kan_22_6');
		Kan_22_7 = this.add.audio('Kan_22_7');
		Kan_22_8 = this.add.audio('Kan_22_8');
		Kan_22_9 = this.add.audio('Kan_22_9');
		Kan_22_10 = this.add.audio('Kan_22_10');
		
		Hin_22_1 = this.add.audio('Hin_22_1');
		Hin_22_2 = this.add.audio('Hin_22_2');
		Hin_22_3 = this.add.audio('Hin_22_3');
		Hin_22_4 = this.add.audio('Hin_22_4');
		Hin_22_5 = this.add.audio('Hin_22_5');
		Hin_22_6 = this.add.audio('Hin_22_6');
		Hin_22_7 = this.add.audio('Hin_22_7');
		Hin_22_8 = this.add.audio('Hin_22_8');
		Hin_22_9 = this.add.audio('Hin_22_9');
		Hin_22_10 = this.add.audio('Hin_22_10');
		
		
		this.sound.setDecodedCallback([Eng_22_1,Eng_22_2,Eng_22_3,Eng_22_4,Eng_22_5,Eng_22_6,Eng_22_7,Eng_22_8,Eng_22_9,Eng_22_10,Hin_22_1,Hin_22_2,Hin_22_3,Hin_22_4,Hin_22_5,Hin_22_6,Hin_22_7,Hin_22_8,Hin_22_9,Hin_22_10,Kan_22_1,Kan_22_2,Kan_22_3,Kan_22_4,Kan_22_5,Kan_22_6,Kan_22_7,Kan_22_8,Kan_22_9,Kan_22_10 ], function(){
			
			baudio.play(); 
			baudio.loopFull(0.6);
			baudio.volume = 0.3;
			
			this.state.start('grade2_2level1');
			
		}, this);
	}
}