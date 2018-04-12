Game.grade3_2Cpreloader=function(game){
	//this.preloadBar=null;
	
	var E1a,E1b,E2a,H2a,K2a,ElevelD,HlevelD,KlevelD,ElevelCa,HlevelCa,KlevelCa,ElevelCb,HlevelCb,KlevelCb;
        var Eng_32A1,Eng_32A2,Kan_32A1,Kan_32A2,Hin_32A1,Hin_32A2;
};

Game.grade3_2Cpreloader.prototype={
	preload:function(){
        var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
       
        
        
        //common for all games.
        this.load.atlas('backbtn','assets/grade3Assets/3.2C/commonAssets/backbtn.png' ,'json/grade3Json/3.2C/backbtn.json');
        this.load.atlas('speaker','assets/grade3Assets/3.2C/commonAssets/speaker.png' ,'json/grade3Json/3.2C/speaker.json');
        this.load.atlas('starAnim','assets/grade3Assets/3.2C/commonAssets/starAnim.png','json/grade3Json/3.2C/starAnim.json');
        this.load.image('tittleBaar','assets/grade3Assets/3.2C/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade3Assets/3.2C/commonAssets/reply.png' ,'json/grade3Json/3.2C/reply.json');
        this.load.atlas('btn','assets/grade3Assets/3.2C/commonAssets/btn.png','json/grade3Json/3.2C/btn.json');
        this.load.image('bg','assets/grade3Assets/3.2C/commonAssets/bg.png');
         
        //game assets.
        this.load.image('gameBg','assets/grade3Assets/3.2C/gameAssets/gameBg.png');
        
        this.load.image('weight1','assets/grade3Assets/3.2C/gameAssets/weight1.png');
        this.load.image('weight2','assets/grade3Assets/3.2C/gameAssets/weight2.png');
        this.load.image('weight3','assets/grade3Assets/3.2C/gameAssets/weight3.png');
        
        this.load.atlas('Can','assets/grade3Assets/3.2C/gameAssets/Can.png','json/grade3Json/3.2C/Can.json');
        this.load.atlas('Carrot','assets/grade3Assets/3.2C/gameAssets/Carot.png','json/grade3Json/3.2C/Carot.json');
        this.load.atlas('Coin','assets/grade3Assets/3.2C/gameAssets/Coin.png','json/grade3Json/3.2C/Coin.json');
        this.load.atlas('Ball','assets/grade3Assets/3.2C/gameAssets/Ball.png','json/grade3Json/3.2C/Ball.json');
        this.load.atlas('Book','assets/grade3Assets/3.2C/gameAssets/Book.png','json/grade3Json/3.2C/Book.json');
        this.load.atlas('Banana','assets/grade3Assets/3.2C/gameAssets/Banana.png','json/grade3Json/3.2C/Banana.json');
        this.load.atlas('Comb','assets/grade3Assets/3.2C/gameAssets/comb.png','json/grade3Json/3.2C/comb.json');
        this.load.atlas('Eraser','assets/grade3Assets/3.2C/gameAssets/eraser.png','json/grade3Json/3.2C/eraser.json');
        this.load.atlas('Eraser2','assets/grade3Assets/3.2C/gameAssets/eraser2.png','json/grade3Json/3.2C/eraser2.json');
        this.load.atlas('Glass','assets/grade3Assets/3.2C/gameAssets/Glass.png','json/grade3Json/3.2C/Glass.json');
        this.load.atlas('Glass2','assets/grade3Assets/3.2C/gameAssets/Glass2.png','json/grade3Json/3.2C/Glass2.json');
        this.load.atlas('Mug','assets/grade3Assets/3.2C/gameAssets/Mug.png','json/grade3Json/3.2C/Mug.json');
        this.load.atlas('Key','assets/grade3Assets/3.2C/gameAssets/Key.png','json/grade3Json/3.2C/Key.json');
        this.load.atlas('Pappaya','assets/grade3Assets/3.2C/gameAssets/Pappaya.png','json/grade3Json/3.2C/Pappaya.json');
        this.load.atlas('Pencil','assets/grade3Assets/3.2C/gameAssets/Pencil.png','json/grade3Json/3.2C/Pencil.json');
        this.load.atlas('ScrewDriver','assets/grade3Assets/3.2C/gameAssets/ScrewDriver.png','json/grade3Json/3.2C/ScrewDriver.json');
        this.load.atlas('Shoe','assets/grade3Assets/3.2C/gameAssets/Shoe.png','json/grade3Json/3.2C/Shoe.json');
        
        //level2
        this.load.image('level2weight1','assets/grade3Assets/3.2C/gameAssets/level2/level2weight1.png');
        this.load.image('level2weight2','assets/grade3Assets/3.2C/gameAssets/level2/level2weight2.png');
        this.load.image('level2weight32','assets/grade3Assets/3.2C/gameAssets/level2/level2weight3.png');
        this.load.image('level2weight42','assets/grade3Assets/3.2C/gameAssets/level2/level2weight4.png');
        
        
        this.load.image('level2Bg','assets/grade3Assets/3.2C/gameAssets/level2/level2Bg.png');
        this.load.image('txtbox','assets/grade3Assets/3.2C/gameAssets/level2/box.png');
        this.load.atlas('numbg','assets/grade3Assets/3.2C/gameAssets/level2/numbg.png','json/grade3Json/3.2C/numbg.json');
        this.load.atlas('rightBtn','assets/grade3Assets/3.2C/gameAssets/level2/rightBtn.png','json/grade3Json/3.2C/rightBtn.json');
        this.load.atlas('wrongBtn','assets/grade3Assets/3.2C/gameAssets/level2/wrongBtn.png','json/grade3Json/3.2C/wrongBtn.json');
        
        this.load.atlas('Eraser2Anim','assets/grade3Assets/3.2C/gameAssets/eraser2Anim.png','json/grade3Json/3.2C/eraser2Anim.json');
        this.load.atlas('BananaAnim','assets/grade3Assets/3.2C/gameAssets/BananaAnim.png','json/grade3Json/3.2C/BananaAnim.json');
        this.load.atlas('CarrotAnim','assets/grade3Assets/3.2C/gameAssets/CarrotAnim.png','json/grade3Json/3.2C/CarrotAnim.json');
        this.load.atlas('CoinAnim','assets/grade3Assets/3.2C/gameAssets/CoinAnim.png','json/grade3Json/3.2C/CoinAnim.json');
        this.load.atlas('Glass2Anim','assets/grade3Assets/3.2C/gameAssets/GlassAnim.png','json/grade3Json/3.2C/GlassAnim.json');
        
        this.load.atlas('level2weight3','assets/grade3Assets/3.2C/gameAssets/level2/L2.png','json/grade3Json/3.2C/L2.json');
        this.load.atlas('level2weight4','assets/grade3Assets/3.2C/gameAssets/level2/R2.png','json/grade3Json/3.2C/R2.json');
       
             //level3
        this.load.atlas('bottle','assets/grade3Assets/3.2C/gameAssets/level3/bottle.png','json/grade3Json/3.2C/bottle.json');
        this.load.atlas('w1Anim','assets/grade3Assets/3.2C/gameAssets/level3/w1Anim.png','json/grade3Json/3.2C/w1Anim.json');
        this.load.image('w1','assets/grade3Assets/3.2C/gameAssets/level3/w1.png');
        this.load.image('w2','assets/grade3Assets/3.2C/gameAssets/level3/w2.png');
        this.load.atlas('w2Anim','assets/grade3Assets/3.2C/gameAssets/level3/w2Anim.png','json/grade3Json/3.2C/w2Anim.json');
        this.load.atlas('tomoto','assets/grade3Assets/3.2C/gameAssets/level3/tomoto.png','json/grade3Json/3.2C/tomoto.json');
        this.load.atlas('spoon','assets/grade3Assets/3.2C/gameAssets/level3/spoon.png','json/grade3Json/3.2C/spoon.json');
        this.load.atlas('eraser1','assets/grade3Assets/3.2C/gameAssets/level3/eraser1.png','json/grade3Json/3.2C/eraser1.json');
        this.load.atlas('rope','assets/grade3Assets/3.2C/gameAssets/level3/rope.png','json/grade3Json/3.2C/rope.json');
        this.load.atlas('leef','assets/grade3Assets/3.2C/gameAssets/level3/leef.png','json/grade3Json/3.2C/leef.json');
        this.load.atlas('coin1','assets/grade3Assets/3.2C/gameAssets/level3/coin1.png','json/grade3Json/3.2C/coin1.json');
        this.load.atlas('Comb1','assets/grade3Assets/3.2C/gameAssets/level3/Comb1.png','json/grade3Json/3.2C/Comb1.json');
        this.load.atlas('w1AnimGlow','assets/grade3Assets/3.2C/gameAssets/level3/w1AnimGlow.png','json/grade3Json/3.2C/w1AnimGlow.json');
        this.load.atlas('w2AnimGlow','assets/grade3Assets/3.2C/gameAssets/level3/w2AnimGlow.png','json/grade3Json/3.2C/w2AnimGlow.json');
        
        this.load.atlas('w22AnimGlow','assets/grade3Assets/3.2C/gameAssets/Anim2/w22AnimGlow.png','json/grade3Json/3.2C/Anim2/w22AnimGlow.json');
        this.load.atlas('w22Anim','assets/grade3Assets/3.2C/gameAssets/Anim2/w22Anim.png','json/grade3Json/3.2C/Anim2/w22Anim.json');
        this.load.image('w22','assets/grade3Assets/3.2C/gameAssets/Anim2/w22.png');

        //level4
        this.load.atlas('bottle2','assets/grade3Assets/3.2C/gameAssets/level3/bottle2.png','json/grade3Json/3.2C/bottle2.json');
        
        this.load.audio('baudio', 'questionSounds/3.2C/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/3.2C/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/3.2C/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/3.2C/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/3.2C/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/3.2C/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/3.2C/snapSound.mp3');
        this.load.audio('slide', 'questionSounds/3.2C/slide.mp3');
        this.load.audio('E1a', 'questionSounds/3.2C/E1a.mp3');
        this.load.audio('E1b', 'questionSounds/3.2C/E1b.mp3');
        this.load.audio('E2a', 'questionSounds/3.2C/E2a.mp3');
        this.load.audio('H2a', 'questionSounds/3.2C/H2a.mp3');
        this.load.audio('K2a', 'questionSounds/3.2C/K2a.mp3');
        
        this.load.audio('ElevelD', 'questionSounds/3.2C/ElevelD.mp3');
        this.load.audio('HlevelD', 'questionSounds/3.2C/HlevelD.mp3');
        this.load.audio('KlevelD', 'questionSounds/3.2C/KlevelD.mp3');
        this.load.audio('ElevelCa', 'questionSounds/3.2C/ElevelCa.mp3');
        this.load.audio('ElevelCb', 'questionSounds/3.2C/ElevelCb.mp3');
        this.load.audio('HlevelCa', 'questionSounds/3.2C/HlevelCa.mp3');
        this.load.audio('HlevelCb', 'questionSounds/3.2C/HlevelCb.mp3');
        this.load.audio('KlevelCa', 'questionSounds/3.2C/KlevelCa.mp3');
        this.load.audio('KlevelCb', 'questionSounds/3.2C/KlevelCb.mp3');
        
        this.load.audio('Eng_32A1', 'questionSounds/3.2C/Eng_3.2A1.mp3');
        this.load.audio('Eng_32A2', 'questionSounds/3.2C/Eng_3.2A2.mp3');
        this.load.audio('Hin_32A1', 'questionSounds/3.2C/Hin_3.2A1.mp3');
        this.load.audio('Hin_32A2', 'questionSounds/3.2C/Hin_3.2A2.mp3');
        this.load.audio('Kan_32A1', 'questionSounds/3.2C/Kan_3.2A1.mp3');
        this.load.audio('Kan_32A2', 'questionSounds/3.2C/Kan_3.2A2.mp3');
        
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
		
		this.sound.setDecodedCallback([ slideSound,E1a,E1b,E2a,H2a,K2a,ElevelD,HlevelD,KlevelD,ElevelCa,HlevelCa,KlevelCa,ElevelCb,HlevelCb,KlevelCb,Eng_32A1,Eng_32A2,Kan_32A1,Kan_32A2,Hin_32A1,Hin_32A2 ], function(){
		
		this.state.start('grade3_2Clevel1');
			
			}, this);
	}
}