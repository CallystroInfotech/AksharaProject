Game.grade3_1preloader=function(game){
	//this.preloadBar=null;
	var goingdown,goingup,OhSound,E1a,E1b,H1a,H1b,K1a,K1b;
};

Game.grade3_1preloader.prototype={
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
		
       
        

        this.load.image('bg1','assets/grade1Assets/3.1/bg1.png');
        this.load.image('bg3','assets/grade1Assets/3.1/bg3.png');
        this.load.image('tittleBaar','assets/grade1Assets/3.1/tittleBaar.png');
        this.load.atlas('replay','assets/grade1Assets/3.1/reply.png' ,'json/grade1Json/3.1/reply.json');
        this.load.atlas('btn','assets/grade1Assets/3.1/btn.png' ,'json/grade1Json/3.1/btn.json');
        this.load.atlas('backbtn','assets/grade1Assets/3.1/backbtn.png' ,'json/grade1Json/3.1/backbtn.json');
        this.load.atlas('speaker','assets/grade1Assets/3.1/speaker.png' ,'json/grade1Json/3.1/speaker.json');
        this.load.atlas('starAnim','assets/grade1Assets/3.1/starAnim.png','json/grade1Json/3.1/starAnim.json');
        this.load.image('sh1','assets/grade1Assets/3.1/sh1.png');
        this.load.image('sh2','assets/grade1Assets/3.1/sh2.png');
        this.load.image('sh3','assets/grade1Assets/3.1/sh3.png');
        this.load.image('sh4','assets/grade1Assets/3.1/sh4.png');
        this.load.image('sh5','assets/grade1Assets/3.1/sh5.png');
        this.load.image('sh6','assets/grade1Assets/3.1/sh6.png');
        this.load.image('sh7','assets/grade1Assets/3.1/sh7.png');
        this.load.image('sh8','assets/grade1Assets/3.1/sh8.png');
        this.load.image('sh9','assets/grade1Assets/3.1/sh9.png');
        this.load.image('sh10','assets/grade1Assets/3.1/sh10.png');
        this.load.image('sh11','assets/grade1Assets/3.1/sh11.png');
        //this.load.image('sh12','assets/grade1Assets/3.1/sh12.png');
        this.load.image('sh13','assets/grade1Assets/3.1/sh13.png');
        this.load.image('sh14','assets/grade1Assets/3.1/sh14.png');
        this.load.image('sh15','assets/grade1Assets/3.1/sh15.png');
        this.load.image('sh16','assets/grade1Assets/3.1/sh16.png');
        this.load.image('sh17','assets/grade1Assets/3.1/sh17.png');
        this.load.image('sh18','assets/grade1Assets/3.1/sh18.png');
        this.load.image('sh19','assets/grade1Assets/3.1/sh19.png');
        this.load.image('sh20','assets/grade1Assets/3.1/sh20.png');
        this.load.image('sh21','assets/grade1Assets/3.1/sh21.png');
        this.load.image('sh22','assets/grade1Assets/3.1/sh22.png');
        this.load.image('sh23','assets/grade1Assets/3.1/sh23.png');
        this.load.image('sh24','assets/grade1Assets/3.1/sh24.png');
        
        this.load.atlas('watermelon','assets/grade1Assets/3.1/watermelon.png' ,'json/grade1Json/3.1/watermelon.json');
        this.load.atlas('cherry','assets/grade1Assets/3.1/cherry.png' ,'json/grade1Json/3.1/cherry.json');

        this.load.atlas('leaf1','assets/grade1Assets/3.1/leaf1.png' ,'json/grade1Json/3.1/leaf1.json');
        this.load.atlas('bottle1','assets/grade1Assets/3.1/bottle1.png' ,'json/grade1Json/3.1/bottle1.json');

        this.load.atlas('crow1','assets/grade1Assets/3.1/crow1.png' ,'json/grade1Json/3.1/crow1.json');
        this.load.atlas('lizard1','assets/grade1Assets/3.1/lizard1.png' ,'json/grade1Json/3.1/lizard1.json');
        
        this.load.atlas('car1','assets/grade1Assets/3.1/car1.png' ,'json/grade1Json/3.1/car1.json');
        this.load.atlas('chair1','assets/grade1Assets/3.1/chair1.png' ,'json/grade1Json/3.1/chair1.json');
         
        this.load.atlas('dog1','assets/grade1Assets/3.1/dog1.png' ,'json/grade1Json/3.1/dog1.json');
        this.load.atlas('bird1','assets/grade1Assets/3.1/bird1.png' ,'json/grade1Json/3.1/bird1.json');
        
        this.load.atlas('bee1','assets/grade1Assets/3.1/bee1.png' ,'json/grade1Json/3.1/bee1.json');
        this.load.atlas('elephant1','assets/grade1Assets/3.1/elephant1.png' ,'json/grade1Json/3.1/elephant1.json');
        
        this.load.atlas('bottle2','assets/grade1Assets/3.1/bottle2.png' ,'json/grade1Json/3.1/bottle2.json');
        this.load.atlas('key1','assets/grade1Assets/3.1/key1.png' ,'json/grade1Json/3.1/key1.json');
        
        this.load.atlas('suitcase','assets/grade1Assets/3.1/suitcase.png' ,'json/grade1Json/3.1/suitcase.json');
        this.load.atlas('spanner','assets/grade1Assets/3.1/spanner.png' ,'json/grade1Json/3.1/spanner.json');
        
        this.load.atlas('scooter1','assets/grade1Assets/3.1/scooter1.png' ,'json/grade1Json/3.1/scooter1.json');
        this.load.atlas('bulb1','assets/grade1Assets/3.1/bulb1.png' ,'json/grade1Json/3.1/bulb1.json');
        
        this.load.atlas('tree1','assets/grade1Assets/3.1/tree1.png' ,'json/grade1Json/3.1/tree1.json');
        this.load.atlas('bird2','assets/grade1Assets/3.1/bird2.png' ,'json/grade1Json/3.1/bird2.json');
        
        this.load.atlas('croc1','assets/grade1Assets/3.1/croc1.png' ,'json/grade1Json/3.1/croc1.json');
        this.load.atlas('snake1','assets/grade1Assets/3.1/snake1.png' ,'json/grade1Json/3.1/snake1.json');
        
        this.load.atlas('book1','assets/grade1Assets/3.1/book1.png' ,'json/grade1Json/3.1/book1.json');
        this.load.atlas('bread1','assets/grade1Assets/3.1/bread1.png' ,'json/grade1Json/3.1/bread1.json');
        
        
         
         this.load.audio('baudio', 'questionSounds/3.1/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/3.1/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/3.1/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/3.1/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/3.1/OhSound.mp3');
        this.load.audio('goingdown', 'questionSounds/3.1/goingdown.mp3');
        this.load.audio('goingup', 'questionSounds/3.1/goingup.mp3');
        this.load.audio('E1a', 'questionSounds/3.1/E1a.mp3');
        this.load.audio('E1b', 'questionSounds/3.1/E1b.mp3');
        this.load.audio('H1a', 'questionSounds/3.1/H1a.mp3');
        this.load.audio('H1b', 'questionSounds/3.1/H1b.mp3');
        this.load.audio('K1a', 'questionSounds/3.1/K1a.mp3');
        this.load.audio('K1b', 'questionSounds/3.1/K1b.mp3');
		
		this.load.audio('baudio', 'sounds/BackgroundSound.mp3');
        this.load.audio('waudio', 'sounds/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'sounds/ClickSound.mp3');
		this.load.audio('celebr', 'sounds/celebration.mp3');
        this.load.audio('OhSound', 'sounds/OhSound.mp3');
        this.load.audio('aiyoh', 'sounds/aiyoh.mp3');
        this.load.audio('snapSound', 'sounds/snapSound.mp3');
		
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

    	E1a=this.add.audio('E1a');
        E1b=this.add.audio('E1b');
        H1a=this.add.audio('H1a');
		H1b=this.add.audio('H1b');
        K1a=this.add.audio('K1a');
		K1b=this.add.audio('K1b');
		
		this.sound.setDecodedCallback([ E1a,E1b,H1a,H1b,K1a,K1b ], function(){
		baudio.play(); 
			baudio.loopFull(0.6);
			baudio.volume = 0.3;
		this.state.start('grade3_1level1');
			
			}, this);
	}
}