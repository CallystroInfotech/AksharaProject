Game.grade3_3Apreloader=function(game){
	//this.preloadBar=null;
	 var Eng_33A,Eng_33B1,Eng_33B2;
        var Kan_33A,Kan_33B1,Kan_33B2,Kan_33_3,Kan_33_4;
        var Hin_33A,Hin_33B1,Hin_33B2;
};

Game.grade3_3Apreloader.prototype={
	preload:function(){
         var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
       
        
        //common for all games.
        this.load.atlas('backbtn','assets/grade3Assets/3.3A/commonAssets/backbtn.png' ,'json/grade3Json/3.3A/backbtn.json');
        this.load.atlas('speaker','assets/grade3Assets/3.3A/commonAssets/speaker.png' ,'json/grade3Json/3.3A/speaker.json');
        this.load.atlas('starAnim','assets/grade3Assets/3.3A/commonAssets/starAnim.png','json/grade3Json/3.3A/starAnim.json');
        this.load.image('tittleBaar','assets/grade3Assets/3.3A/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade3Assets/3.3A/commonAssets/reply.png' ,'json/grade3Json/3.3A/reply.json');
        this.load.atlas('btn','assets/grade3Assets/3.3A/commonAssets/btn.png','json/grade3Json/3.3A/btn.json');
        this.load.image('bg','assets/grade3Assets/3.3A/commonAssets/bg.png');
         
        //game assets.
        this.load.image('gameBg','assets/grade3Assets/3.3A/gameAssets/gameBg.png');
      
        this.load.atlas('Can','assets/grade3Assets/3.3A/gameAssets/Can.png','json/grade3Json/3.3A/Can.json');
        this.load.atlas('Carrot','assets/grade3Assets/3.3A/gameAssets/Carot.png','json/grade3Json/3.3A/Carot.json');
        this.load.atlas('Coin','assets/grade3Assets/3.3A/gameAssets/Coin.png','json/grade3Json/3.3A/Coin.json');
        this.load.atlas('Ball','assets/grade3Assets/3.3A/gameAssets/Ball.png','json/grade3Json/3.3A/Ball.json');
        this.load.atlas('Book','assets/grade3Assets/3.3A/gameAssets/Book.png','json/grade3Json/3.3A/Book.json');
        this.load.atlas('Banana','assets/grade3Assets/3.3A/gameAssets/Banana.png','json/grade3Json/3.3A/Banana.json');
        this.load.atlas('Comb','assets/grade3Assets/3.3A/gameAssets/comb.png','json/grade3Json/3.3A/comb.json');
        this.load.atlas('Eraser','assets/grade3Assets/3.3A/gameAssets/eraser.png','json/grade3Json/3.3A/eraser.json');
        this.load.atlas('Eraser2','assets/grade3Assets/3.3A/gameAssets/eraser2.png','json/grade3Json/3.3A/eraser2.json');
        this.load.atlas('Glass','assets/grade3Assets/3.3A/gameAssets/Glass.png','json/grade3Json/3.3A/Glass.json');
        this.load.atlas('Glass2','assets/grade3Assets/3.3A/gameAssets/Glass2.png','json/grade3Json/3.3A/Glass2.json');
        this.load.atlas('Mug','assets/grade3Assets/3.3A/gameAssets/Mug.png','json/grade3Json/3.3A/Mug.json');
        this.load.atlas('muggg','assets/grade3Assets/3.3A/gameAssets/muggg.png','json/grade3Json/3.3A/muggg.json');
        this.load.atlas('Key','assets/grade3Assets/3.3A/gameAssets/Key.png','json/grade3Json/3.3A/Key.json');
        this.load.atlas('Pappaya','assets/grade3Assets/3.3A/gameAssets/Pappaya.png','json/grade3Json/3.3A/Pappaya.json');
        this.load.atlas('pappaya1','assets/grade3Assets/3.3A/gameAssets/pappaya1.png','json/grade3Json/3.3A/pappaya1.json');
        this.load.atlas('Pencil','assets/grade3Assets/3.3A/gameAssets/Pencil.png','json/grade3Json/3.3A/Pencil.json');
        this.load.atlas('ScrewDriver','assets/grade3Assets/3.3A/gameAssets/ScrewDriver.png','json/grade3Json/3.3A/ScrewDriver.json');
        this.load.atlas('Shoe','assets/grade3Assets/3.3A/gameAssets/Shoe.png','json/grade3Json/3.3A/Shoe.json');
        this.load.atlas('bottle32','assets/grade3Assets/3.3A/gameAssets/bottle32.png','json/grade3Json/3.3A/bottle32.json');
        this.load.atlas('tomato32','assets/grade3Assets/3.3A/gameAssets/tomato32.png','json/grade3Json/3.3A/tomato32.json');
        this.load.atlas('carrot32','assets/grade3Assets/3.3A/gameAssets/carrot32.png','json/grade3Json/3.3A/carrot32.json');
        this.load.atlas('banana32','assets/grade3Assets/3.3A/gameAssets/banana32.png','json/grade3Json/3.3A/banana32.json');
        this.load.atlas('bread','assets/grade3Assets/3.3A/gameAssets/bread.png','json/grade3Json/3.3A/bread.json');
        this.load.atlas('ball32','assets/grade3Assets/3.3A/gameAssets/ball32.png','json/grade3Json/3.3A/ball32.json');
        this.load.atlas('banana322','assets/grade3Assets/3.3A/gameAssets/banana322.png','json/grade3Json/3.3A/banana322.json');
        this.load.atlas('block50','assets/grade3Assets/3.3A/gameAssets/block50.png','json/grade3Json/3.3A/block50.json');
        this.load.atlas('bottle322','assets/grade3Assets/3.3A/gameAssets/bottle322.png','json/grade3Json/3.3A/bottle322.json');
        this.load.atlas('redbook','assets/grade3Assets/3.3A/gameAssets/redbook.png','json/grade3Json/3.3A/redbook.json');
        
        
        //level2
        this.load.image('level2weight1','assets/grade3Assets/3.3A/gameAssets/level2/level2weight1.png');
        this.load.image('level2weight2','assets/grade3Assets/3.3A/gameAssets/level2/level2weight2.png');
        //this.load.image('level2weight32','assets/grade3Assets/3.3A/gameAssets/level2/level2weight3.png');
        //this.load.image('level2weight42','assets/grade3Assets/3.3A/gameAssets/level2/level2weight4.png');
        
        
        this.load.image('level2Bg','assets/grade3Assets/3.3A/gameAssets/level2/level2Bg.png');
        this.load.image('txtbox','assets/grade3Assets/3.3A/gameAssets/level2/box.png');
        this.load.atlas('numbg','assets/grade3Assets/3.3A/gameAssets/level2/numbg.png','json/grade3Json/3.3A/numbg.json');
        this.load.atlas('rightBtn','assets/grade3Assets/3.3A/gameAssets/level2/rightBtn.png','json/grade3Json/3.3A/rightBtn.json');
        this.load.atlas('wrongBtn','assets/grade3Assets/3.3A/gameAssets/level2/wrongBtn.png','json/grade3Json/3.3A/wrongBtn.json');
        
        this.load.atlas('Eraser2Anim','assets/grade3Assets/3.3A/gameAssets/eraser2Anim.png','json/grade3Json/3.3A/eraser2Anim.json');
        this.load.atlas('BananaAnim','assets/grade3Assets/3.3A/gameAssets/BananaAnim.png','json/grade3Json/3.3A/BananaAnim.json');
        this.load.atlas('CarrotAnim','assets/grade3Assets/3.3A/gameAssets/CarrotAnim.png','json/grade3Json/3.3A/CarrotAnim.json');
        this.load.atlas('CoinAnim','assets/grade3Assets/3.3A/gameAssets/CoinAnim.png','json/grade3Json/3.3A/CoinAnim.json');
        this.load.atlas('Glass2Anim','assets/grade3Assets/3.3A/gameAssets/GlassAnim.png','json/grade3Json/3.3A/GlassAnim.json');
        
        this.load.atlas('level2weight3','assets/grade3Assets/3.3A/gameAssets/level2/L2.png','json/grade3Json/3.3A/L2.json');
        this.load.atlas('level2weight4','assets/grade3Assets/3.3A/gameAssets/level2/R2.png','json/grade3Json/3.3A/R2.json');
       
     
        
        //level33a
        this.load.image('bg1','assets/grade3Assets/3.3A/gameAssets/level33a/bg1.png');
        this.load.image('level2weight32','assets/grade3Assets/3.3A/gameAssets/level33a/level2weight32.png');
        this.load.image('level2weight42','assets/grade3Assets/3.3A/gameAssets/level33a/level2weight42.png');
        this.load.atlas('50g','assets/grade3Assets/3.3A/gameAssets/level33a/50g.png','json/grade3Json/3.3A/50g.json'); 
        this.load.atlas('100g','assets/grade3Assets/3.3A/gameAssets/level33a/100g.png','json/grade3Json/3.3A/100g.json'); 
        this.load.atlas('200g','assets/grade3Assets/3.3A/gameAssets/level33a/200g.png','json/grade3Json/3.3A/200g.json'); 
        this.load.atlas('500g','assets/grade3Assets/3.3A/gameAssets/level33a/500g.png','json/grade3Json/3.3A/500g.json'); 
        
        this.load.atlas('50gAnim','assets/grade3Assets/3.3A/gameAssets/level33a/50gAnim.png','json/grade3Json/3.3A/50gAnim.json'); 
        this.load.atlas('100gAnim','assets/grade3Assets/3.3A/gameAssets/level33a/100gAnim.png','json/grade3Json/3.3A/100gAnim.json'); 
        this.load.atlas('200gAnim','assets/grade3Assets/3.3A/gameAssets/level33a/200gAnim.png','json/grade3Json/3.3A/200gAnim.json'); 
        this.load.atlas('500gAnim','assets/grade3Assets/3.3A/gameAssets/level33a/500gAnim.png','json/grade3Json/3.3A/500gAnim.json'); 
        
        this.load.atlas('50gg','assets/grade3Assets/3.3A/gameAssets/level33a/50gg.png','json/grade3Json/3.3A/50gg.json'); 
        this.load.atlas('100gg','assets/grade3Assets/3.3A/gameAssets/level33a/100gg.png','json/grade3Json/3.3A/100gg.json'); 
        this.load.atlas('200gg','assets/grade3Assets/3.3A/gameAssets/level33a/200gg.png','json/grade3Json/3.3A/200gg.json'); 
        this.load.atlas('500gg','assets/grade3Assets/3.3A/gameAssets/level33a/500gg.png','json/grade3Json/3.3A/500gg.json');
        
        this.load.atlas('w1AnimGlow','assets/grade3Assets/3.3A/gameAssets/level33a/w1AnimGlow.png','json/grade3Json/3.3A/w1AnimGlow.json');
        
 
        this.load.atlas('targetAnim','assets/grade3Assets/3.3A/gameAssets/level33a/targetAnim.png','json/grade3Json/3.3A/targetAnim.json');
        
        
        
        this.load.audio('baudio', 'questionSounds/3.3A/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/3.3A/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/3.3A/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/3.3A/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/3.3A/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/3.3A/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/3.3A/snapSound.mp3');
        this.load.audio('slide', 'questionSounds/3.3A/slide.mp3');
        this.load.audio('Eng_33A', 'questionSounds/3.3A/English/3.3A.mp3');
        this.load.audio('Eng_33B1', 'questionSounds/3.3A/English/3.3B_1.mp3');
        this.load.audio('Eng_33B2', 'questionSounds/3.3A/English/3.3B_2.mp3');
        this.load.audio('Kan_33A', 'questionSounds/3.3A/Kannada/3.3A.mp3');
        this.load.audio('Kan_33B1', 'questionSounds/3.3A/Kannada/3.3B_1.mp3');
        this.load.audio('Kan_33B2', 'questionSounds/3.3A/Kannada/3.3B_2.mp3');
        this.load.audio('Kan_33_3', 'questionSounds/3.3A/Kannada/3.3_3.mp3');
        this.load.audio('Kan_33_4', 'questionSounds/3.3A/Kannada/3.3_4.mp3');
        this.load.audio('Hin_33A', 'questionSounds/3.3A/Hindi/3.3A.mp3');
        this.load.audio('Hin_33B1', 'questionSounds/3.3A/Hindi/3.3B_1.mp3');
        this.load.audio('Hin_33B2', 'questionSounds/3.3A/Hindi/3.3B_2.mp3');
        
        
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
		
		this.sound.setDecodedCallback([ baudio,celebr,waudio,ClickSound,aiyoh,OhSound,snapSound,Eng_33A,Eng_33B1,Eng_33B2,Kan_33A,Kan_33B1,Kan_33B2,Kan_33_3,Kan_33_4, Hin_33A,Hin_33B1,Hin_33B2 ], function(){
		
		this.state.start('grade3_3Alevel1');
			
			}, this);
	}
}