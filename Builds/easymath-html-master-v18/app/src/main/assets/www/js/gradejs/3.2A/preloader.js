Game.grade3_2Apreloader=function(game){
	//this.preloadBar=null;
	var E1a,E1b,E2a,H2a,K2a,ElevelD,HlevelD,KlevelD,ElevelCa,HlevelCa,KlevelCa,ElevelCb,HlevelCb,KlevelCb;
    var Eng_32A1,Eng_32A2,Kan_32A1,Kan_32A2,Hin_32A1,Hin_32A2;
};

Game.grade3_2Apreloader.prototype={
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
         
        //game assets.
        this.load.image('gameBg','assets/grade1Assets/3.2A/gameAssets/gameBg.png');
        
        this.load.image('weight1','assets/grade1Assets/3.2A/gameAssets/weight1.png');
        this.load.image('weight2','assets/grade1Assets/3.2A/gameAssets/weight2.png');
        this.load.image('weight3','assets/grade1Assets/3.2A/gameAssets/weight3.png');
        
        this.load.atlas('Can','assets/grade1Assets/3.2A/gameAssets/Can.png','json/grade1Json/3.2A/Can.json');
        this.load.atlas('Carrot','assets/grade1Assets/3.2A/gameAssets/Carot.png','json/grade1Json/3.2A/Carot.json');
        this.load.atlas('Coin','assets/grade1Assets/3.2A/gameAssets/Coin.png','json/grade1Json/3.2A/Coin.json');
        this.load.atlas('Ball','assets/grade1Assets/3.2A/gameAssets/Ball.png','json/grade1Json/3.2A/Ball.json');
        this.load.atlas('Book','assets/grade1Assets/3.2A/gameAssets/Book.png','json/grade1Json/3.2A/Book.json');
        this.load.atlas('Banana','assets/grade1Assets/3.2A/gameAssets/Banana.png','json/grade1Json/3.2A/Banana.json');
        this.load.atlas('Comb','assets/grade1Assets/3.2A/gameAssets/comb.png','json/grade1Json/3.2A/comb.json');
        this.load.atlas('Eraser','assets/grade1Assets/3.2A/gameAssets/eraser.png','json/grade1Json/3.2A/eraser.json');
        this.load.atlas('Eraser2','assets/grade1Assets/3.2A/gameAssets/eraser2.png','json/grade1Json/3.2A/eraser2.json');
        this.load.atlas('Glass','assets/grade1Assets/3.2A/gameAssets/Glass.png','json/grade1Json/3.2A/Glass.json');
        this.load.atlas('Glass2','assets/grade1Assets/3.2A/gameAssets/Glass2.png','json/grade1Json/3.2A/Glass2.json');
        this.load.atlas('Mug','assets/grade1Assets/3.2A/gameAssets/Mug.png','json/grade1Json/3.2A/Mug.json');
        this.load.atlas('Key','assets/grade1Assets/3.2A/gameAssets/Key.png','json/grade1Json/3.2A/Key.json');
        this.load.atlas('Pappaya','assets/grade1Assets/3.2A/gameAssets/Pappaya.png','json/grade1Json/3.2A/Pappaya.json');
        this.load.atlas('Pencil','assets/grade1Assets/3.2A/gameAssets/Pencil.png','json/grade1Json/3.2A/Pencil.json');
        this.load.atlas('ScrewDriver','assets/grade1Assets/3.2A/gameAssets/ScrewDriver.png','json/grade1Json/3.2A/ScrewDriver.json');
        this.load.atlas('Shoe','assets/grade1Assets/3.2A/gameAssets/Shoe.png','json/grade1Json/3.2A/Shoe.json');
 
        
        this.load.image('level2Bg','assets/grade1Assets/3.2A/gameAssets/level2/level2Bg.png');
        this.load.image('txtbox','assets/grade1Assets/3.2A/gameAssets/level2/box.png');
        this.load.atlas('numbg','assets/grade1Assets/3.2A/gameAssets/level2/numbg.png','json/grade1Json/3.2A/numbg.json');
        this.load.atlas('rightBtn','assets/grade1Assets/3.2A/gameAssets/level2/rightBtn.png','json/grade1Json/3.2A/rightBtn.json');
        this.load.atlas('wrongBtn','assets/grade1Assets/3.2A/gameAssets/level2/wrongBtn.png','json/grade1Json/3.2A/wrongBtn.json');
        
        
       this.load.audio('baudio', 'sounds/BackgroundSound.mp3');
        this.load.audio('waudio', 'sounds/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'sounds/ClickSound.mp3');
		this.load.audio('celebr', 'sounds/celebration.mp3');
        this.load.audio('OhSound', 'sounds/OhSound.mp3');
        this.load.audio('aiyoh', 'sounds/aiyoh.mp3');
        this.load.audio('snapSound', 'sounds/snapSound.mp3');
		
		
        this.load.audio('slide', 'questionSounds/3.2A/slide.mp3');
        this.load.audio('E1a', 'questionSounds/3.2A/E1a.mp3');
        this.load.audio('E1b', 'questionSounds/3.2A/E1b.mp3');
        this.load.audio('E2a', 'questionSounds/3.2A/E2a.mp3');
        this.load.audio('H2a', 'questionSounds/3.2A/H2a.mp3');
        this.load.audio('K2a', 'questionSounds/3.2A/K2a.mp3');
        
        this.load.audio('ElevelD', 'questionSounds/3.2A/ElevelD.mp3');
        this.load.audio('HlevelD', 'questionSounds/3.2A/HlevelD.mp3');
        this.load.audio('KlevelD', 'questionSounds/3.2A/KlevelD.mp3');
        this.load.audio('ElevelCa', 'questionSounds/3.2A/ElevelCa.mp3');
        this.load.audio('ElevelCb', 'questionSounds/3.2A/ElevelCb.mp3');
        this.load.audio('HlevelCa', 'questionSounds/3.2A/HlevelCa.mp3');
        this.load.audio('HlevelCb', 'questionSounds/3.2A/HlevelCb.mp3');
        this.load.audio('KlevelCa', 'questionSounds/3.2A/KlevelCa.mp3');
        this.load.audio('KlevelCb', 'questionSounds/3.2A/KlevelCb.mp3');
        
        this.load.audio('Eng_32A1', 'questionSounds/3.2A/Eng_3.2A1.mp3');
        this.load.audio('Eng_32A2', 'questionSounds/3.2A/Eng_3.2A2.mp3');
        this.load.audio('Hin_32A1', 'questionSounds/3.2A/Hin_3.2A1.mp3');
        this.load.audio('Hin_32A2', 'questionSounds/3.2A/Hin_3.2A2.mp3');
        this.load.audio('Kan_32A1', 'questionSounds/3.2A/Kan_3.2A1.mp3');
        this.load.audio('Kan_32A2', 'questionSounds/3.2A/Kan_3.2A2.mp3');
   
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
        
      
        slideSound=this.add.audio('slide');
    	E1a=this.add.audio('E1a');
        E1b=this.add.audio('E1b');
		E2a=this.add.audio('E2a');
        H2a=this.add.audio('H2a');
        K2a=this.add.audio('K2a');
        
        ElevelD=this.add.audio('ElevelD');
        HlevelD=this.add.audio('HlevelD');
        KlevelD=this.add.audio('KlevelD');
        
        ElevelCa=this.add.audio('ElevelCa');
        ElevelCb=this.add.audio('ElevelCb');
        HlevelCa=this.add.audio('HlevelCa');
        HlevelCb=this.add.audio('HlevelCb');
        KlevelCa=this.add.audio('KlevelCa');
        KlevelCb=this.add.audio('KlevelCb');
        
        Eng_32A1=this.add.audio('Eng_32A1');
        Eng_32A2=this.add.audio('Eng_32A2');
        Kan_32A1=this.add.audio('Kan_32A1');
        Kan_32A2=this.add.audio('Kan_32A2');
        Hin_32A1=this.add.audio('Hin_32A1');
        Hin_32A2=this.add.audio('Hin_32A2');
		
		this.sound.setDecodedCallback([ baudio,celebr,waudio,ClickSound,aiyoh,OhSound,snapSound,E1a,E1b,E2a,H2a,K2a,ElevelD,HlevelD,KlevelD,ElevelCa,HlevelCa,KlevelCa,ElevelCb,HlevelCb,KlevelCb,Eng_32A1,Eng_32A2,Kan_32A1,Kan_32A2,Hin_32A1,Hin_32A2], function(){
		baudio.play(); 
			baudio.loopFull(0.6);
			baudio.volume = 0.3;
		this.state.start('grade3_2Alevel1');
			
			}, this);
	}
}