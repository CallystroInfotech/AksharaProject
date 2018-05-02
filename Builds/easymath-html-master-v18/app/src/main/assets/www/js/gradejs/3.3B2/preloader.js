Game.grade3_3B2preloader=function(game){
	//this.preloadBar=null;
	var Eng_33A,Eng_33B1,Eng_33B2;
        var Kan_33A,Kan_33B1,Kan_33B2,Kan_33_3,Kan_33_4;
        var Hin_33A,Hin_33B1,Hin_33B2;
};

Game.grade3_3B2preloader.prototype={
	preload:function(){
        
       var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
        
        
        //common for all games.
        this.load.atlas('backbtn','assets/grade3Assets/3.3B2/commonAssets/backbtn.png' ,'json/grade3Json/3.3B2/backbtn.json');
        this.load.atlas('speaker','assets/grade3Assets/3.3B2/commonAssets/speaker.png' ,'json/grade3Json/3.3B2/speaker.json');
        this.load.atlas('starAnim','assets/grade3Assets/3.3B2/commonAssets/starAnim.png','json/grade3Json/3.3B2/starAnim.json');
        this.load.image('tittleBaar','assets/grade3Assets/3.3B2/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade3Assets/3.3B2/commonAssets/reply.png' ,'json/grade3Json/3.3B2/reply.json');
        this.load.atlas('btn','assets/grade3Assets/3.3B2/commonAssets/btn.png','json/grade3Json/3.3B2/btn.json');
        this.load.image('bg','assets/grade3Assets/3.3B2/commonAssets/bg.png');
         
        //game assets.
        this.load.image('gameBg','assets/grade3Assets/3.3B2/gameAssets/gameBg.png');
        
        this.load.image('weight1','assets/grade3Assets/3.3B2/gameAssets/weight1.png');
        this.load.image('weight2','assets/grade3Assets/3.3B2/gameAssets/weight2.png');
        this.load.image('weight3','assets/grade3Assets/3.3B2/gameAssets/weight3.png');
        
        this.load.atlas('Can','assets/grade3Assets/3.3B2/gameAssets/Can.png','json/grade3Json/3.3B2/Can.json');
        this.load.atlas('Carrot','assets/grade3Assets/3.3B2/gameAssets/Carot.png','json/grade3Json/3.3B2/Carot.json');
        this.load.atlas('Coin','assets/grade3Assets/3.3B2/gameAssets/Coin.png','json/grade3Json/3.3B2/Coin.json');
        this.load.atlas('Ball','assets/grade3Assets/3.3B2/gameAssets/Ball.png','json/grade3Json/3.3B2/Ball.json');
        this.load.atlas('Book','assets/grade3Assets/3.3B2/gameAssets/Book.png','json/grade3Json/3.3B2/Book.json');
        this.load.atlas('Banana','assets/grade3Assets/3.3B2/gameAssets/Banana.png','json/grade3Json/3.3B2/Banana.json');
        this.load.atlas('Comb','assets/grade3Assets/3.3B2/gameAssets/comb.png','json/grade3Json/3.3B2/comb.json');
        this.load.atlas('Eraser','assets/grade3Assets/3.3B2/gameAssets/eraser.png','json/grade3Json/3.3B2/eraser.json');
        this.load.atlas('Eraser2','assets/grade3Assets/3.3B2/gameAssets/eraser2.png','json/grade3Json/3.3B2/eraser2.json');
        this.load.atlas('Glass','assets/grade3Assets/3.3B2/gameAssets/Glass.png','json/grade3Json/3.3B2/Glass.json');
        this.load.atlas('Glass2','assets/grade3Assets/3.3B2/gameAssets/Glass2.png','json/grade3Json/3.3B2/Glass2.json');
        this.load.atlas('Mug','assets/grade3Assets/3.3B2/gameAssets/Mug.png','json/grade3Json/3.3B2/Mug.json');
        this.load.atlas('muggg','assets/grade3Assets/3.3B2/gameAssets/muggg.png','json/grade3Json/3.3B2/muggg.json');
        this.load.atlas('Key','assets/grade3Assets/3.3B2/gameAssets/Key.png','json/grade3Json/3.3B2/Key.json');
        this.load.atlas('Pappaya','assets/grade3Assets/3.3B2/gameAssets/Pappaya.png','json/grade3Json/3.3B2/Pappaya.json');
        this.load.atlas('pappaya1','assets/grade3Assets/3.3B2/gameAssets/pappaya1.png','json/grade3Json/3.3B2/pappaya1.json');
        this.load.atlas('Pencil','assets/grade3Assets/3.3B2/gameAssets/Pencil.png','json/grade3Json/3.3B2/Pencil.json');
        this.load.atlas('ScrewDriver','assets/grade3Assets/3.3B2/gameAssets/ScrewDriver.png','json/grade3Json/3.3B2/ScrewDriver.json');
        this.load.atlas('Shoe','assets/grade3Assets/3.3B2/gameAssets/Shoe.png','json/grade3Json/3.3B2/Shoe.json');
        this.load.atlas('bottle32','assets/grade3Assets/3.3B2/gameAssets/bottle32.png','json/grade3Json/3.3B2/bottle32.json');
        this.load.atlas('tomato32','assets/grade3Assets/3.3B2/gameAssets/tomato32.png','json/grade3Json/3.3B2/tomato32.json');
        this.load.atlas('carrot32','assets/grade3Assets/3.3B2/gameAssets/carrot32.png','json/grade3Json/3.3B2/carrot32.json');
        this.load.atlas('banana32','assets/grade3Assets/3.3B2/gameAssets/banana32.png','json/grade3Json/3.3B2/banana32.json');
        this.load.atlas('bread','assets/grade3Assets/3.3B2/gameAssets/bread.png','json/grade3Json/3.3B2/bread.json');
        this.load.atlas('ball32','assets/grade3Assets/3.3B2/gameAssets/ball32.png','json/grade3Json/3.3B2/ball32.json');
        this.load.atlas('banana322','assets/grade3Assets/3.3B2/gameAssets/banana322.png','json/grade3Json/3.3B2/banana322.json');
        this.load.atlas('block50','assets/grade3Assets/3.3B2/gameAssets/block50.png','json/grade3Json/3.3B2/block50.json');
        this.load.atlas('bottle322','assets/grade3Assets/3.3B2/gameAssets/bottle322.png','json/grade3Json/3.3B2/bottle322.json');
        this.load.atlas('redbook','assets/grade3Assets/3.3B2/gameAssets/redbook.png','json/grade3Json/3.3B2/redbook.json');
        
        
        //level2
        this.load.image('level2weight1','assets/grade3Assets/3.3B2/gameAssets/level2/level2weight1.png');
        this.load.image('level2weight2','assets/grade3Assets/3.3B2/gameAssets/level2/level2weight2.png');

        this.load.image('level2Bg','assets/grade3Assets/3.3B2/gameAssets/level2/level2Bg.png');
        this.load.image('txtbox','assets/grade3Assets/3.3B2/gameAssets/level2/box.png');
        this.load.atlas('numbg','assets/grade3Assets/3.3B2/gameAssets/level2/numbg.png','json/grade3Json/3.3B2/numbg.json');
        this.load.atlas('rightBtn','assets/grade3Assets/3.3B2/gameAssets/level2/rightBtn.png','json/grade3Json/3.3B2/rightBtn.json');
        this.load.atlas('wrongBtn','assets/grade3Assets/3.3B2/gameAssets/level2/wrongBtn.png','json/grade3Json/3.3B2/wrongBtn.json');
        
        this.load.atlas('Eraser2Anim','assets/grade3Assets/3.3B2/gameAssets/eraser2Anim.png','json/grade3Json/3.3B2/eraser2Anim.json');
        this.load.atlas('BananaAnim','assets/grade3Assets/3.3B2/gameAssets/BananaAnim.png','json/grade3Json/3.3B2/BananaAnim.json');
        this.load.atlas('CarrotAnim','assets/grade3Assets/3.3B2/gameAssets/CarrotAnim.png','json/grade3Json/3.3B2/CarrotAnim.json');
        this.load.atlas('CoinAnim','assets/grade3Assets/3.3B2/gameAssets/CoinAnim.png','json/grade3Json/3.3B2/CoinAnim.json');
        this.load.atlas('Glass2Anim','assets/grade3Assets/3.3B2/gameAssets/GlassAnim.png','json/grade3Json/3.3B2/GlassAnim.json');
        
        this.load.atlas('level2weight3','assets/grade3Assets/3.3B2/gameAssets/level2/L2.png','json/grade3Json/3.3B2/L2.json');
        this.load.atlas('level2weight4','assets/grade3Assets/3.3B2/gameAssets/level2/R2.png','json/grade3Json/3.3B2/R2.json');
       
             //level3
        this.load.atlas('bottle','assets/grade3Assets/3.3B2/gameAssets/level3/bottle.png','json/grade3Json/3.3B2/bottle.json');
        this.load.atlas('w1Anim','assets/grade3Assets/3.3B2/gameAssets/level3/w1Anim.png','json/grade3Json/3.3B2/w1Anim.json');
        this.load.image('w1','assets/grade3Assets/3.3B2/gameAssets/level3/w1.png');
        this.load.image('w2','assets/grade3Assets/3.3B2/gameAssets/level3/w2.png');
        this.load.atlas('w2Anim','assets/grade3Assets/3.3B2/gameAssets/level3/w2Anim.png','json/grade3Json/3.3B2/w2Anim.json');
        this.load.atlas('tomoto','assets/grade3Assets/3.3B2/gameAssets/level3/tomoto.png','json/grade3Json/3.3B2/tomoto.json');
        this.load.atlas('spoon','assets/grade3Assets/3.3B2/gameAssets/level3/spoon.png','json/grade3Json/3.3B2/spoon.json');
        this.load.atlas('eraser1','assets/grade3Assets/3.3B2/gameAssets/level3/eraser1.png','json/grade3Json/3.3B2/eraser1.json');
        this.load.atlas('rope','assets/grade3Assets/3.3B2/gameAssets/level3/rope.png','json/grade3Json/3.3B2/rope.json');
        this.load.atlas('leef','assets/grade3Assets/3.3B2/gameAssets/level3/leef.png','json/grade3Json/3.3B2/leef.json');
        this.load.atlas('coin1','assets/grade3Assets/3.3B2/gameAssets/level3/coin1.png','json/grade3Json/3.3B2/coin1.json');
        this.load.atlas('Comb1','assets/grade3Assets/3.3B2/gameAssets/level3/Comb1.png','json/grade3Json/3.3B2/Comb1.json');
        this.load.atlas('w1AnimGlow','assets/grade3Assets/3.3B2/gameAssets/level3/w1AnimGlow.png','json/grade3Json/3.3B2/w1AnimGlow.json');
        this.load.atlas('w2AnimGlow','assets/grade3Assets/3.3B2/gameAssets/level3/w2AnimGlow.png','json/grade3Json/3.3B2/w2AnimGlow.json');


        //level4
        this.load.atlas('bottle2','assets/grade3Assets/3.3B2/gameAssets/level3/bottle2.png','json/grade3Json/3.3B2/bottle2.json');
        
        //level33a
        this.load.image('bg1','assets/grade3Assets/3.3B2/gameAssets/level33a/bg1.png');
        this.load.image('level2weight32','assets/grade3Assets/3.3B2/gameAssets/level33a/level2weight32.png');
        this.load.image('level2weight42','assets/grade3Assets/3.3B2/gameAssets/level33a/level2weight42.png');
       
        
        this.load.atlas('w1AnimGlow','assets/grade3Assets/3.3B2/gameAssets/level33a/w1AnimGlow.png','json/grade3Json/3.3B2/w1AnimGlow.json');
        
 
        this.load.atlas('targetAnim','assets/grade3Assets/3.3B2/gameAssets/level33a/targetAnim.png','json/grade3Json/3.3B2/targetAnim.json');
        
        //level33c
        this.load.atlas('cylinder33','assets/grade3Assets/3.3B2/gameAssets/level33c/cylinder33.png','json/grade3Json/3.3B2/level33c/cylinder33.json'); 
        this.load.atlas('50g33','assets/grade3Assets/3.3B2/gameAssets/level33c/50g33.png','json/grade3Json/3.3B2/level33c/50g33.json'); 
        this.load.atlas('100g33','assets/grade3Assets/3.3B2/gameAssets/level33c/100g33.png','json/grade3Json/3.3B2/level33c/100g33.json'); 
        this.load.atlas('200g33','assets/grade3Assets/3.3B2/gameAssets/level33c/200g33.png','json/grade3Json/3.3B2/level33c/200g33.json'); 
        this.load.atlas('500g33','assets/grade3Assets/3.3B2/gameAssets/level33c/500g33.png','json/grade3Json/3.3B2/level33c/500g33.json'); 
        
        this.load.atlas('50g33Anim','assets/grade3Assets/3.3B2/gameAssets/level33c/50g33Anim.png','json/grade3Json/3.3B2/level33c/50g33Anim.json'); 
        this.load.atlas('100g33Anim','assets/grade3Assets/3.3B2/gameAssets/level33c/100g33Anim.png','json/grade3Json/3.3B2/level33c/100g33Anim.json'); 
        this.load.atlas('200g33Anim','assets/grade3Assets/3.3B2/gameAssets/level33c/200g33Anim.png','json/grade3Json/3.3B2/level33c/200g33Anim.json'); 
        this.load.atlas('500g33Anim','assets/grade3Assets/3.3B2/gameAssets/level33c/500g33Anim.png','json/grade3Json/3.3B2/level33c/500g33Anim.json'); 
        
        this.load.atlas('1kg33','assets/grade3Assets/3.3B2/gameAssets/level33c/1kg33.png','json/grade3Json/3.3B2/level33c/1kg33.json'); 
        this.load.atlas('2kg33','assets/grade3Assets/3.3B2/gameAssets/level33c/2kg33.png','json/grade3Json/3.3B2/level33c/2kg33.json'); 
        this.load.atlas('5kg33','assets/grade3Assets/3.3B2/gameAssets/level33c/5kg33.png','json/grade3Json/3.3B2/level33c/5kg33.json'); 
        this.load.atlas('10kg33','assets/grade3Assets/3.3B2/gameAssets/level33c/10kg33.png','json/grade3Json/3.3B2/level33c/10kg33.json'); 
        
        this.load.atlas('1kg33Anim','assets/grade3Assets/3.3B2/gameAssets/level33c/1kg33Anim.png','json/grade3Json/3.3B2/level33c/1kg33Anim.json'); 
        this.load.atlas('2kg33Anim','assets/grade3Assets/3.3B2/gameAssets/level33c/2kg33Anim.png','json/grade3Json/3.3B2/level33c/2kg33Anim.json'); 
        this.load.atlas('5kg33Anim','assets/grade3Assets/3.3B2/gameAssets/level33c/5kg33Anim.png','json/grade3Json/3.3B2/level33c/5kg33Anim.json'); 
        this.load.atlas('10kg33Anim','assets/grade3Assets/3.3B2/gameAssets/level33c/10kg33Anim.png','json/grade3Json/3.3B2/level33c/10kg33Anim.json'); 
        
        this.load.atlas('bag33','assets/grade3Assets/3.3B2/gameAssets/level33c/bag33.png','json/grade3Json/3.3B2/level33c/bag33.json');
        this.load.atlas('coinbag','assets/grade3Assets/3.3B2/gameAssets/level33c/coinbag.png','json/grade3Json/3.3B2/level33c/coinbag.json');
        this.load.atlas('box33','assets/grade3Assets/3.3B2/gameAssets/level33c/box33.png','json/grade3Json/3.3B2/level33c/box33.json');
        this.load.atlas('fruitbox33','assets/grade3Assets/3.3B2/gameAssets/level33c/fruitbox33.png','json/grade3Json/3.3B2/level33c/fruitbox33.json');
        this.load.atlas('can33','assets/grade3Assets/3.3B2/gameAssets/level33c/can33.png','json/grade3Json/3.3B2/level33c/can33.json');
        this.load.atlas('pot33','assets/grade3Assets/3.3B2/gameAssets/level33c/pot33.png','json/grade3Json/3.3B2/level33c/pot33.json');
        this.load.atlas('mugg33','assets/grade3Assets/3.3B2/gameAssets/level33c/mugg33.png','json/grade3Json/3.3B2/level33c/mugg33.json');
        this.load.atlas('bottles33','assets/grade3Assets/3.3B2/gameAssets/level33c/bottles33.png','json/grade3Json/3.3B2/level33c/bottles33.json');
        this.load.atlas('box-new','assets/grade3Assets/3.3B2/gameAssets/level33c/box-new.png','json/grade3Json/3.3B2/level33c/box-new.json');
        
        
        //level22
        this.load.image('Newlevel2weight1','assets/grade3Assets/3.3B2/gameAssets/level22/level2weight1.png');
        this.load.image('Newlevel2weight2','assets/grade3Assets/3.3B2/gameAssets/level22/level2weight2.png');
        this.load.image('Newlevel2weight3','assets/grade3Assets/3.3B2/gameAssets/level22/level2weight3.png');
        this.load.image('Newlevel2weight4','assets/grade3Assets/3.3B2/gameAssets/level22/level2weight4.png');
        
        
        this.load.atlas('Newbottle','assets/grade3Assets/3.3B2/gameAssets/level22/bottle.png','json/grade3Json/3.3B2/level22/bottle.json');
        this.load.atlas('Newjug','assets/grade3Assets/3.3B2/gameAssets/level22/jug.png','json/grade3Json/3.3B2/level22/jug.json');
        this.load.atlas('Newpot','assets/grade3Assets/3.3B2/gameAssets/level22/pot.png','json/grade3Json/3.3B2/level22/pot.json');
        this.load.atlas('Newcan','assets/grade3Assets/3.3B2/gameAssets/level22/can.png','json/grade3Json/3.3B2/level22/can.json');
        this.load.atlas('NewfruitBox','assets/grade3Assets/3.3B2/gameAssets/level22/fruitBox.png','json/grade3Json/3.3B2/level22/fruitBox.json');
        this.load.atlas('Newbox1','assets/grade3Assets/3.3B2/gameAssets/level22/box1.png','json/grade3Json/3.3B2/level22/box1.json');
        this.load.atlas('Newbag1','assets/grade3Assets/3.3B2/gameAssets/level22/bag1.png','json/grade3Json/3.3B2/level22/bag1.json');
        this.load.atlas('Newbag2','assets/grade3Assets/3.3B2/gameAssets/level22/bag2.png','json/grade3Json/3.3B2/level22/bag2.json');
        this.load.atlas('Newcylinder','assets/grade3Assets/3.3B2/gameAssets/level22/cylinder.png','json/grade3Json/3.3B2/level22/cylinder.json');
        
        this.load.atlas('New1kg','assets/grade3Assets/3.3B2/gameAssets/level22/1kg.png','json/grade3Json/3.3B2/level22/1kg.json');
        this.load.atlas('New2kg','assets/grade3Assets/3.3B2/gameAssets/level22/2kg.png','json/grade3Json/3.3B2/level22/2kg.json');
        this.load.atlas('New5kg','assets/grade3Assets/3.3B2/gameAssets/level22/5kg.png','json/grade3Json/3.3B2/level22/5kg.json');
        this.load.atlas('New10kg','assets/grade3Assets/3.3B2/gameAssets/level22/10kg.png','json/grade3Json/3.3B2/level22/10kg.json');
        
        this.load.atlas('New1kgAnim','assets/grade3Assets/3.3B2/gameAssets/level22/1kgAnim.png','json/grade3Json/3.3B2/level22/1kgAnim.json');
        this.load.atlas('New2kgAnim','assets/grade3Assets/3.3B2/gameAssets/level22/2kgAnim.png','json/grade3Json/3.3B2/level22/2kgAnim.json');
        this.load.atlas('New5kgAnim','assets/grade3Assets/3.3B2/gameAssets/level22/5kgAnim.png','json/grade3Json/3.3B2/level22/5kgAnim.json');
        this.load.atlas('New10kgAnim','assets/grade3Assets/3.3B2/gameAssets/level22/10kgAnim.png','json/grade3Json/3.3B2/level22/10kgAnim.json');
        

        
        this.load.image('Newlevel2Bg','assets/grade3Assets/3.3B2/gameAssets/level22/level2Bg.png');
        this.load.image('Newtxtbox','assets/grade3Assets/3.3B2/gameAssets/level22/box.png');
        this.load.atlas('Newnumbg','assets/grade3Assets/3.3B2/gameAssets/level22/numbg.png','json/grade3Json/3.3B2/level22/numbg.json');
        this.load.atlas('NewrightBtn','assets/grade3Assets/3.3B2/gameAssets/level22/rightBtn.png','json/grade3Json/3.3B2/level22/rightBtn.json');
        this.load.atlas('NewwrongBtn','assets/grade3Assets/3.3B2/gameAssets/level22/wrongBtn.png','json/grade3Json/3.3B2/level22/wrongBtn.json');
      
        
        
          this.load.audio('baudio', 'questionSounds/3.3B2/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/3.3B2/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/3.3B2/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/3.3B2/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/3.3B2/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/3.3B2/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/3.3B2/snapSound.mp3');
        this.load.audio('slide', 'questionSounds/3.3B2/slide.mp3');
        this.load.audio('Eng_33A', 'questionSounds/3.3B2/English/3.3A.mp3');
        this.load.audio('Eng_33B1', 'questionSounds/3.3B2/English/3.3B_1.mp3');
        this.load.audio('Eng_33B2', 'questionSounds/3.3B2/English/3.3B_2.mp3');
        this.load.audio('Kan_33A', 'questionSounds/3.3B2/Kannada/3.3A.mp3');
        this.load.audio('Kan_33B1', 'questionSounds/3.3B2/Kannada/3.3B_1.mp3');
        this.load.audio('Kan_33B2', 'questionSounds/3.3B2/Kannada/3.3B_2.mp3');
        this.load.audio('Kan_33_3', 'questionSounds/3.3B2/Kannada/3.3_3.mp3');
        this.load.audio('Kan_33_4', 'questionSounds/3.3B2/Kannada/3.3_4.mp3');
        this.load.audio('Hin_33A', 'questionSounds/3.3B2/Hindi/3.3A.mp3');
        this.load.audio('Hin_33B1', 'questionSounds/3.3B2/Hindi/3.3B_1.mp3');
        this.load.audio('Hin_33B2', 'questionSounds/3.3B2/Hindi/3.3B_2.mp3');
        
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
		
		this.state.start('grade3_3B2evel1');
			
			}, this);
	}
}