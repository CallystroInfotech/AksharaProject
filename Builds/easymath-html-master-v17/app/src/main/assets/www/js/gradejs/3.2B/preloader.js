Game.grade3_2Bpreloader=function(game){
	//this.preloadBar=null;
	var E1a,E1b,E2a,H2a,K2a,ElevelD,HlevelD,KlevelD,ElevelCa,HlevelCa,KlevelCa,ElevelCb,HlevelCb,KlevelCb;
    var Eng_32A1,Eng_32A2,Kan_32A1,Kan_32A2,Hin_32A1,Hin_32A2;
};

Game.grade3_2Bpreloader.prototype={
	preload:function(){
       
       var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
        
        //common for all games.
        this.load.atlas('backbtn','assets/grade3Assets/3.2B/commonAssets/backbtn.png' ,'json/grade3Json/3.2B/backbtn.json');
        this.load.atlas('speaker','assets/grade3Assets/3.2B/commonAssets/speaker.png' ,'json/grade3Json/3.2B/speaker.json');
        this.load.atlas('starAnim','assets/grade3Assets/3.2B/commonAssets/starAnim.png','json/grade3Json/3.2B/starAnim.json');
        this.load.image('tittleBaar','assets/grade3Assets/3.2B/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade3Assets/3.2B/commonAssets/reply.png' ,'json/grade3Json/3.2B/reply.json');
        this.load.atlas('btn','assets/grade3Assets/3.2B/commonAssets/btn.png','json/grade3Json/3.2B/btn.json');
        this.load.image('bg','assets/grade3Assets/3.2B/commonAssets/bg.png');
         
        //game assets.
        this.load.image('gameBg','assets/grade3Assets/3.2B/gameAssets/gameBg.png');
        
       
        
        this.load.atlas('Can','assets/grade3Assets/3.2B/gameAssets/Can.png','json/grade3Json/3.2B/Can.json');
        this.load.atlas('Carrot','assets/grade3Assets/3.2B/gameAssets/Carot.png','json/grade3Json/3.2B/Carot.json');
        this.load.atlas('Coin','assets/grade3Assets/3.2B/gameAssets/Coin.png','json/grade3Json/3.2B/Coin.json');
        this.load.atlas('Ball','assets/grade3Assets/3.2B/gameAssets/Ball.png','json/grade3Json/3.2B/Ball.json');
        this.load.atlas('Book','assets/grade3Assets/3.2B/gameAssets/Book.png','json/grade3Json/3.2B/Book.json');
        this.load.atlas('Banana','assets/grade3Assets/3.2B/gameAssets/Banana.png','json/grade3Json/3.2B/Banana.json');
        this.load.atlas('Comb','assets/grade3Assets/3.2B/gameAssets/comb.png','json/grade3Json/3.2B/comb.json');
        this.load.atlas('Eraser','assets/grade3Assets/3.2B/gameAssets/eraser.png','json/grade3Json/3.2B/eraser.json');
        this.load.atlas('Eraser2','assets/grade3Assets/3.2B/gameAssets/eraser2.png','json/grade3Json/3.2B/eraser2.json');
        this.load.atlas('Glass','assets/grade3Assets/3.2B/gameAssets/Glass.png','json/grade3Json/3.2B/Glass.json');
        this.load.atlas('Glass2','assets/grade3Assets/3.2B/gameAssets/Glass2.png','json/grade3Json/3.2B/Glass2.json');
        this.load.atlas('Mug','assets/grade3Assets/3.2B/gameAssets/Mug.png','json/grade3Json/3.2B/Mug.json');
        this.load.atlas('Key','assets/grade3Assets/3.2B/gameAssets/Key.png','json/grade3Json/3.2B/Key.json');
        this.load.atlas('Pappaya','assets/grade3Assets/3.2B/gameAssets/Pappaya.png','json/grade3Json/3.2B/Pappaya.json');
        this.load.atlas('Pencil','assets/grade3Assets/3.2B/gameAssets/Pencil.png','json/grade3Json/3.2B/Pencil.json');
        this.load.atlas('ScrewDriver','assets/grade3Assets/3.2B/gameAssets/ScrewDriver.png','json/grade3Json/3.2B/ScrewDriver.json');
        this.load.atlas('Shoe','assets/grade3Assets/3.2B/gameAssets/Shoe.png','json/grade3Json/3.2B/Shoe.json');
        
        //level2
        this.load.image('level2weight1','assets/grade3Assets/3.2B/gameAssets/level2/level2weight1.png');
        this.load.image('level2weight2','assets/grade3Assets/3.2B/gameAssets/level2/level2weight2.png');
        this.load.image('level2weight32','assets/grade3Assets/3.2B/gameAssets/level2/level2weight3.png');
        this.load.image('level2weight42','assets/grade3Assets/3.2B/gameAssets/level2/level2weight4.png');
        
        
        this.load.image('level2Bg','assets/grade3Assets/3.2B/gameAssets/level2/level2Bg.png');
        this.load.image('txtbox','assets/grade3Assets/3.2B/gameAssets/level2/box.png');
        this.load.atlas('numbg','assets/grade3Assets/3.2B/gameAssets/level2/numbg.png','json/grade3Json/3.2B/numbg.json');
        this.load.atlas('rightBtn','assets/grade3Assets/3.2B/gameAssets/level2/rightBtn.png','json/grade3Json/3.2B/rightBtn.json');
        this.load.atlas('wrongBtn','assets/grade3Assets/3.2B/gameAssets/level2/wrongBtn.png','json/grade3Json/3.2B/wrongBtn.json');
        
        this.load.atlas('Eraser2Anim','assets/grade3Assets/3.2B/gameAssets/eraser2Anim.png','json/grade3Json/3.2B/eraser2Anim.json');
        this.load.atlas('BananaAnim','assets/grade3Assets/3.2B/gameAssets/BananaAnim.png','json/grade3Json/3.2B/BananaAnim.json');
        this.load.atlas('CarrotAnim','assets/grade3Assets/3.2B/gameAssets/CarrotAnim.png','json/grade3Json/3.2B/CarrotAnim.json');
        this.load.atlas('CoinAnim','assets/grade3Assets/3.2B/gameAssets/CoinAnim.png','json/grade3Json/3.2B/CoinAnim.json');
        this.load.atlas('Glass2Anim','assets/grade3Assets/3.2B/gameAssets/GlassAnim.png','json/grade3Json/3.2B/GlassAnim.json');
        
        this.load.atlas('level2weight3','assets/grade3Assets/3.2B/gameAssets/level2/L2.png','json/grade3Json/3.2B/L2.json');
        this.load.atlas('level2weight4','assets/grade3Assets/3.2B/gameAssets/level2/R2.png','json/grade3Json/3.2B/R2.json');
        
          
         this.load.audio('baudio', 'questionSounds/3.2B/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/3.2B/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/3.2B/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/3.2B/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/3.2B/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/3.2B/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/3.2B/snapSound.mp3');
        this.load.audio('slide', 'questionSounds/3.2B/slide.mp3');
        this.load.audio('E1a', 'questionSounds/3.2B/E1a.mp3');
        this.load.audio('E1b', 'questionSounds/3.2B/E1b.mp3');
        this.load.audio('E2a', 'questionSounds/3.2B/E2a.mp3');
        this.load.audio('H2a', 'questionSounds/3.2B/H2a.mp3');
        this.load.audio('K2a', 'questionSounds/3.2B/K2a.mp3');
        
        this.load.audio('ElevelD', 'questionSounds/3.2B/ElevelD.mp3');
        this.load.audio('HlevelD', 'questionSounds/3.2B/HlevelD.mp3');
        this.load.audio('KlevelD', 'questionSounds/3.2B/KlevelD.mp3');
        this.load.audio('ElevelCa', 'questionSounds/3.2B/ElevelCa.mp3');
        this.load.audio('ElevelCb', 'questionSounds/3.2B/ElevelCb.mp3');
        this.load.audio('HlevelCa', 'questionSounds/3.2B/HlevelCa.mp3');
        this.load.audio('HlevelCb', 'questionSounds/3.2B/HlevelCb.mp3');
        this.load.audio('KlevelCa', 'questionSounds/3.2B/KlevelCa.mp3');
        this.load.audio('KlevelCb', 'questionSounds/3.2B/KlevelCb.mp3');
        
        this.load.audio('Eng_32A1', 'questionSounds/3.2B/Eng_3.2A1.mp3');
        this.load.audio('Eng_32A2', 'questionSounds/3.2B/Eng_3.2A2.mp3');
        this.load.audio('Hin_32A1', 'questionSounds/3.2B/Hin_3.2A1.mp3');
        this.load.audio('Hin_32A2', 'questionSounds/3.2B/Hin_3.2A2.mp3');
        this.load.audio('Kan_32A1', 'questionSounds/3.2B/Kan_3.2A1.mp3');
        this.load.audio('Kan_32A2', 'questionSounds/3.2B/Kan_3.2A2.mp3');
       
		this.load.onLoadComplete.add(this.onloadComplete,this);
      
	},

	onloadComplete:function(){
			
		this.load.onLoadComplete.removeAll();  
		
		
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
		
		this.sound.setDecodedCallback([ slideSound,E1a,E1b,E2a,H2a,K2a,ElevelD,HlevelD,KlevelD,ElevelCa,HlevelCa,KlevelCa,ElevelCb,HlevelCb,KlevelCb,Eng_32A1,Eng_32A2,Kan_32A1,Kan_32A2,Hin_32A1,Hin_32A2], function(){
		
		this.state.start('grade3_2Blevel1');
			
			}, this);
	}
}