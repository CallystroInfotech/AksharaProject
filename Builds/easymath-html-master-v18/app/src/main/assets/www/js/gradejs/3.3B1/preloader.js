Game.grade3_3B1preloader=function(game){
	//this.preloadBar=null;
	 var Eng_33A,Eng_33B1,Eng_33B2;
        var Kan_33A,Kan_33B1,Kan_33B2,Kan_33_3,Kan_33_4;
        var Hin_33A,Hin_33B1,Hin_33B2;
};

Game.grade3_3B1preloader.prototype={
	preload:function(){
        
        var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
       
        
        //common for all games.
        this.load.atlas('backbtn','assets/grade3Assets/3.3B1/commonAssets/backbtn.png' ,'json/grade3Json/3.3B1/backbtn.json');
        this.load.atlas('speaker','assets/grade3Assets/3.3B1/commonAssets/speaker.png' ,'json/grade3Json/3.3B1/speaker.json');
        this.load.atlas('starAnim','assets/grade3Assets/3.3B1/commonAssets/starAnim.png','json/grade3Json/3.3B1/starAnim.json');
        this.load.image('tittleBaar','assets/grade3Assets/3.3B1/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade3Assets/3.3B1/commonAssets/reply.png' ,'json/grade3Json/3.3B1/reply.json');
        this.load.atlas('btn','assets/grade3Assets/3.3B1/commonAssets/btn.png','json/grade3Json/3.3B1/btn.json');
        this.load.image('bg','assets/grade3Assets/3.3B1/commonAssets/bg.png');
  
        
      
        //level22
        this.load.image('Newlevel2weight1','assets/grade3Assets/3.3B1/gameAssets/level22/level2weight1.png');
        this.load.image('Newlevel2weight2','assets/grade3Assets/3.3B1/gameAssets/level22/level2weight2.png');
        this.load.image('Newlevel2weight3','assets/grade3Assets/3.3B1/gameAssets/level22/level2weight3.png');
        this.load.image('Newlevel2weight4','assets/grade3Assets/3.3B1/gameAssets/level22/level2weight4.png');
        
        
        this.load.atlas('Newbottle','assets/grade3Assets/3.3B1/gameAssets/level22/bottle.png','json/grade3Json/3.3B1/level22/bottle.json');
        this.load.atlas('Newjug','assets/grade3Assets/3.3B1/gameAssets/level22/jug.png','json/grade3Json/3.3B1/level22/jug.json');
        this.load.atlas('Newpot','assets/grade3Assets/3.3B1/gameAssets/level22/pot.png','json/grade3Json/3.3B1/level22/pot.json');
        this.load.atlas('Newcan','assets/grade3Assets/3.3B1/gameAssets/level22/can.png','json/grade3Json/3.3B1/level22/can.json');
        this.load.atlas('NewfruitBox','assets/grade3Assets/3.3B1/gameAssets/level22/fruitBox.png','json/grade3Json/3.3B1/level22/fruitBox.json');
        this.load.atlas('Newbox1','assets/grade3Assets/3.3B1/gameAssets/level22/box1.png','json/grade3Json/3.3B1/level22/box1.json');
        this.load.atlas('Newbag1','assets/grade3Assets/3.3B1/gameAssets/level22/bag1.png','json/grade3Json/3.3B1/level22/bag1.json');
        this.load.atlas('Newbag2','assets/grade3Assets/3.3B1/gameAssets/level22/bag2.png','json/grade3Json/3.3B1/level22/bag2.json');
        this.load.atlas('Newcylinder','assets/grade3Assets/3.3B1/gameAssets/level22/cylinder.png','json/grade3Json/3.3B1/level22/cylinder.json');
        
        this.load.atlas('New1kg','assets/grade3Assets/3.3B1/gameAssets/level22/1kg.png','json/grade3Json/3.3B1/level22/1kg.json');
        this.load.atlas('New2kg','assets/grade3Assets/3.3B1/gameAssets/level22/2kg.png','json/grade3Json/3.3B1/level22/2kg.json');
        this.load.atlas('New5kg','assets/grade3Assets/3.3B1/gameAssets/level22/5kg.png','json/grade3Json/3.3B1/level22/5kg.json');
        this.load.atlas('New10kg','assets/grade3Assets/3.3B1/gameAssets/level22/10kg.png','json/grade3Json/3.3B1/level22/10kg.json');
        
        this.load.atlas('New1kgAnim','assets/grade3Assets/3.3B1/gameAssets/level22/1kgAnim.png','json/grade3Json/3.3B1/level22/1kgAnim.json');
        this.load.atlas('New2kgAnim','assets/grade3Assets/3.3B1/gameAssets/level22/2kgAnim.png','json/grade3Json/3.3B1/level22/2kgAnim.json');
        this.load.atlas('New5kgAnim','assets/grade3Assets/3.3B1/gameAssets/level22/5kgAnim.png','json/grade3Json/3.3B1/level22/5kgAnim.json');
        this.load.atlas('New10kgAnim','assets/grade3Assets/3.3B1/gameAssets/level22/10kgAnim.png','json/grade3Json/3.3B1/level22/10kgAnim.json');
        

        
        this.load.image('Newlevel2Bg','assets/grade3Assets/3.3B1/gameAssets/level22/level2Bg.png');
        this.load.image('Newtxtbox','assets/grade3Assets/3.3B1/gameAssets/level22/box.png');
        this.load.atlas('Newnumbg','assets/grade3Assets/3.3B1/gameAssets/level22/numbg.png','json/grade3Json/3.3B1/level22/numbg.json');
        this.load.atlas('NewrightBtn','assets/grade3Assets/3.3B1/gameAssets/level22/rightBtn.png','json/grade3Json/3.3B1/level22/rightBtn.json');
        this.load.atlas('NewwrongBtn','assets/grade3Assets/3.3B1/gameAssets/level22/wrongBtn.png','json/grade3Json/3.3B1/level22/wrongBtn.json');
        
         this.load.audio('baudio', 'questionSounds/3.3B1/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/3.3B1/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/3.3B1/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/3.3B1/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/3.3B1/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/3.3B1/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/3.3B1/snapSound.mp3');
        this.load.audio('slide', 'questionSounds/3.3B1/slide.mp3');
        this.load.audio('Eng_33A', 'questionSounds/3.3B1/English/3.3A.mp3');
        this.load.audio('Eng_33B1', 'questionSounds/3.3B1/English/3.3B_1.mp3');
        this.load.audio('Eng_33B2', 'questionSounds/3.3B1/English/3.3B_2.mp3');
        this.load.audio('Kan_33A', 'questionSounds/3.3B1/Kannada/3.3A.mp3');
        this.load.audio('Kan_33B1', 'questionSounds/3.3B1/Kannada/3.3B_1.mp3');
        this.load.audio('Kan_33B2', 'questionSounds/3.3B1/Kannada/3.3B_2.mp3');
        this.load.audio('Kan_33_3', 'questionSounds/3.3B1/Kannada/3.3_3.mp3');
        this.load.audio('Kan_33_4', 'questionSounds/3.3B1/Kannada/3.3_4.mp3');
        this.load.audio('Hin_33A', 'questionSounds/3.3B1/Hindi/3.3A.mp3');
        this.load.audio('Hin_33B1', 'questionSounds/3.3B1/Hindi/3.3B_1.mp3');
        this.load.audio('Hin_33B2', 'questionSounds/3.3B1/Hindi/3.3B_2.mp3');
        
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
    	Eng_33A=this.add.audio('Eng_33A');
        Eng_33B1=this.add.audio('Eng_33B1');
        Eng_33B2=this.add.audio('Eng_33B2');
        Kan_33A=this.add.audio('Kan_33A');
        Kan_33B1=this.add.audio('Kan_33B1');
        Kan_33B2=this.add.audio('Kan_33B2');
        Kan_33_3=this.add.audio('Kan_33_3');
        Kan_33_4=this.add.audio('Kan_33_4');
        Hin_33A=this.add.audio('Hin_33A');
		Hin_33B1=this.add.audio('Hin_33B1');
        Hin_33B2=this.add.audio('Hin_33B2');
		
		this.sound.setDecodedCallback([ baudio,celebr,waudio,ClickSound,aiyoh,OhSound,snapSound,slideSound,Eng_33A,Eng_33B1,Eng_33B2,Kan_33A,Kan_33B1,Kan_33B2,Kan_33_3,Kan_33_4,Hin_33A,Hin_33B1,Hin_33B2 ], function(){
		
		this.state.start('grade3_3B1evel1');
			
			}, this);
	}
}