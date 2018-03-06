Game.grade4_3Bpreloader=function(game){
	//this.preloadBar=null;
		var baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFill;
        var bgSound,rightSound,wrongSound,ClickSound;
        var Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1;
        var Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1;
        var Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1;
};

Game.grade4_3Bpreloader.prototype={
	preload:function(){


        var baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFill;
        var bgSound,rightSound,wrongSound,ClickSound;
        var Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1;
        var Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1;
        var Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1;
		
		var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
        
        
        this.load.image('bg1','assets/grade4Assets/4.3B/commonAssets/BG.png');
        this.load.atlas('backbtn','assets/grade4Assets/4.3B/commonAssets/backbtn.png' ,'json/grade4Json/4.3B/backbtn.json');
        this.load.atlas('speaker','assets/grade4Assets/4.3B/commonAssets/speaker.png' ,'json/grade4Json/4.3B/speaker.json');
        this.load.atlas('starAnim','assets/grade4Assets/4.3B/commonAssets/starAnim.png','json/grade4Json/4.3B/starAnim.json');
        this.load.image('cloud','assets/grade4Assets/4.3B/commonAssets/cloud.png');
        this.load.atlas('btn','assets/grade4Assets/4.3B/commonAssets/btn.png','json/grade4Json/4.3B/btn.json');
        this.load.image('bg3','assets/grade4Assets/4.3B/commonAssets/bg3.png');
        this.load.image('tittleBaar','assets/grade4Assets/4.3B/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade4Assets/4.3B/commonAssets/reply.png' ,'json/grade4Json/4.3B/reply.json');
        
        this.load.atlas('numbg','assets/grade4Assets/4.3B/commonAssets/numbg.png' ,'json/grade4Json/4.3B/numbg.json');
        this.load.atlas('rightBtn','assets/grade4Assets/4.3B/commonAssets/rightBtn.png' ,'json/grade4Json/4.3B/rightBtn.json');
        this.load.atlas('wrongBtn','assets/grade4Assets/4.3B/commonAssets/wrongBtn.png' ,'json/grade4Json/4.3B/wrongBtn.json');
        
        //My files to load
      //  this.load.atlas('gameBox','assets/grade4Assets/4.3B/gameAssets/gameBox.png' ,'json/grade4Json/4.3B/gameBox.json');
        //this.load.atlas('allimg','assets/grade4Assets/4.3B/gameAssets/allimg.png' ,'json/grade4Json/4.3B/allimg.json');
        this.load.atlas('tickMark','assets/grade4Assets/4.3B/gameAssets/tickMark.png' ,'json/grade4Json/4.3B/tickMark.json');
        this.load.atlas('crossMark','assets/grade4Assets/4.3B/gameAssets/crossMark.png' ,'json/grade4Json/4.3B/crossMark.json');
        
        //this.load.image('glow','assets/grade4Assets/4.3B/gameAssets/glow.png');
        
        //game items
            this.load.image('arrow','assets/grade4Assets/4.3B/commonAssets/Arw.png');
        
         this.load.atlas('incBox','assets/grade4Assets/4.3B/gameAssets/box1.png' ,'json/grade4Json/4.3B/box1.json');
         this.load.atlas('AnswerBox','assets/grade4Assets/4.3B/gameAssets/box2.png' ,'json/grade4Json/4.3B/box2.json');
        
         this.load.atlas('50Q','assets/grade4Assets/4.3B/gameAssets/50mlQ.png' ,'json/grade4Json/4.3B/50mlQ.json');
         this.load.atlas('100Q','assets/grade4Assets/4.3B/gameAssets/100mlQ.png' ,'json/grade4Json/4.3B/100mlQ.json');
         this.load.atlas('200Q','assets/grade4Assets/4.3B/gameAssets/200mlQ.png' ,'json/grade4Json/4.3B/200mlQ.json');
         this.load.atlas('250Q','assets/grade4Assets/4.3B/gameAssets/250mlQ.png' ,'json/grade4Json/4.3B/250mlQ.json');
         this.load.atlas('500Q','assets/grade4Assets/4.3B/gameAssets/500mlQ.png' ,'json/grade4Json/4.3B/500mlQ.json');
        
         this.load.atlas('200A','assets/grade4Assets/4.3B/gameAssets/A 200.png' ,'json/grade4Json/4.3B/A 200.json');
         this.load.atlas('250A','assets/grade4Assets/4.3B/gameAssets/A 250.png' ,'json/grade4Json/4.3B/A 250.json');
         this.load.atlas('500A','assets/grade4Assets/4.3B/gameAssets/A 500.png' ,'json/grade4Json/4.3B/A 500.json');
         this.load.atlas('1000A','assets/grade4Assets/4.3B/gameAssets/A 1000.png' ,'json/grade4Json/4.3B/A 1000.json');
        
        
        this.load.atlas('equation','assets/grade4Assets/4.3B/gameAssets/equation.png' ,'json/grade4Json/4.3B/equation.json');
        
        
        /******************** Level 4.3B******************************/
                this.load.atlas('50Q','assets/grade4Assets/4.3B/gameAssets/50mlQB.png' ,'json/grade4Json/4.3B/50mlQB.json');
         this.load.atlas('100Q','assets/grade4Assets/4.3B/gameAssets/100mlQB.png' ,'json/grade4Json/4.3B/100mlQB.json');
         this.load.atlas('250Q','assets/grade4Assets/4.3B/gameAssets/250mlQB.png' ,'json/grade4Json/4.3B/250mlQB.json');
         this.load.atlas('500Q','assets/grade4Assets/4.3B/gameAssets/500mlQB.png' ,'json/grade4Json/4.3B/500mlQB.json');
        
         this.load.atlas('bottle','assets/grade4Assets/4.3B/gameAssets/bottleB.png' ,'json/grade4Json/4.3B/bottleB.json');
         this.load.atlas('bottle2','assets/grade4Assets/4.3B/gameAssets/bottle2B.png' ,'json/grade4Json/4.3B/bottle2B.json');
         this.load.atlas('bottle3','assets/grade4Assets/4.3B/gameAssets/bottle3B.png' ,'json/grade4Json/4.3B/bottle3B.json');
         this.load.atlas('cup','assets/grade4Assets/4.3B/gameAssets/cupB.png' ,'json/grade4Json/4.3B/cupB.json');
         this.load.atlas('glass','assets/grade4Assets/4.3B/gameAssets/glassB.png' ,'json/grade4Json/4.3B/glassB.json');
         this.load.atlas('jug','assets/grade4Assets/4.3B/gameAssets/jugB.png' ,'json/grade4Json/4.3B/jugB.json');
         this.load.atlas('jug2','assets/grade4Assets/4.3B/gameAssets/jug2B.png' ,'json/grade4Json/4.3B/jug2B.json');
        
        
        this.load.atlas('equationB','assets/grade4Assets/4.3B/gameAssets/equationB.png' ,'json/grade4Json/4.3B/equationB.json');
        
        
        /*********************Level 4.3 C*******************************/
         this.load.atlas('50QC','assets/grade4Assets/4.3B/gameAssets/50mlQC.png' ,'json/grade4Json/4.3B/50mlQC.json');
         this.load.atlas('100QC','assets/grade4Assets/4.3B/gameAssets/100mlQC.png' ,'json/grade4Json/4.3B/100mlQC.json');
         this.load.atlas('200QC','assets/grade4Assets/4.3B/gameAssets/200mlQC.png' ,'json/grade4Json/4.3B/200mlQC.json');
         this.load.atlas('250QC','assets/grade4Assets/4.3B/gameAssets/250mlQC.png' ,'json/grade4Json/4.3B/250mlQC.json');
         this.load.atlas('500QC','assets/grade4Assets/4.3B/gameAssets/500mlQC.png' ,'json/grade4Json/4.3B/500mlQC.json');
        
         this.load.atlas('1000AC','assets/grade4Assets/4.3B/gameAssets/1000ltrC.png' ,'json/grade4Json/4.3B/1000ltrC.json');
         this.load.atlas('1000QC','assets/grade4Assets/4.3B/gameAssets/1000mlQD.png' ,'json/grade4Json/4.3B/1000mlQD.json');
         this.load.atlas('jugC','assets/grade4Assets/4.3B/gameAssets/2lJug.png' ,'json/grade4Json/4.3B/2lJug.json');
         this.load.atlas('arrowC','assets/grade4Assets/4.3B/gameAssets/arrowC.png' ,'json/grade4Json/4.3B/arrowC.json');
         this.load.atlas('glow','assets/grade4Assets/4.3B/gameAssets/glowC.png' ,'json/grade4Json/4.3B/glowC.json');
        
        
        this.load.audio('baudio', 'questionSounds/4.3B/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/4.3B/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/4.3B/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/4.3B/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/4.3B/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/4.3B/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/4.3B/snapSound.mp3');
        this.load.audio('waterFill', 'questionSounds/4.3B/waterFillingSound.mp3');
        this.load.audio('Eng_43A1', 'questionSounds/4.3B/English/4.3A1.mp3');
        this.load.audio('Eng_43B1', 'questionSounds/4.3B/English/4.3B1.mp3');
        this.load.audio('Eng_43C1', 'questionSounds/4.3B/English/4.3C1.mp3');
        this.load.audio('Eng_43C11', 'questionSounds/4.3B/English/4.3C1.1.mp3');
        this.load.audio('Eng_43D1', 'questionSounds/4.3B/English/4.3D1.mp3');
        this.load.audio('Kan_43A1', 'questionSounds/4.3B/Kannada/4.3A1.mp3');
        this.load.audio('Kan_43B1', 'questionSounds/4.3B/Kannada/4.3B1.mp3');
        this.load.audio('Kan_43C1', 'questionSounds/4.3B/Kannada/4.3C1.mp3');
        this.load.audio('Kan_43C11', 'questionSounds/4.3B/Kannada/4.3C1.1.mp3');
        this.load.audio('Kan_43D1', 'questionSounds/4.3B/Kannada/4.3D1.mp3');
        this.load.audio('Hin_43A1', 'questionSounds/4.3B/Hindi/4.3A1.mp3');
        this.load.audio('Hin_43B1', 'questionSounds/4.3B/Hindi/4.3B1.mp3');
        this.load.audio('Hin_43C1', 'questionSounds/4.3B/Hindi/4.3C1.mp3');
        this.load.audio('Hin_43C11', 'questionSounds/4.3B/Hindi/4.3C1.1.mp3');
        this.load.audio('Hin_43D1', 'questionSounds/4.3B/Hindi/4.3D1.mp3');
        
   
      this.load.onLoadComplete.add(this.onloadComplete,this);  
	},

	onloadComplete:function(){

		this.load.onLoadComplete.removeAll();
		
//		baudio = this.add.audio('baudio');
//    	celebr = this.add.audio('celebr');
//    	waudio = this.add.audio('waudio');
//      ClickSound=this.add.audio('ClickSound');
        
        
        baudio = this.add.audio('baudio');
    	celebr = this.add.audio('celebr');
    	waudio = this.add.audio('waudio');
        aiyoh = this.add.audio('aiyoh');
        OhSound = this.add.audio('OhSound');
        snapSound = this.add.audio('snapSound');
        
        ClickSound=this.add.audio('ClickSound');
        waterFill=this.add.audio('waterFill');
    	Eng_43A1=this.add.audio('Eng_43A1');
        Eng_43B1=this.add.audio('Eng_43B1');
        Eng_43C1=this.add.audio('Eng_43C1');
        Eng_43C11=this.add.audio('Eng_43C11');
        Eng_43D1=this.add.audio('Eng_43D1');
        Kan_43A1=this.add.audio('Kan_43A1');
        Kan_43B1=this.add.audio('Kan_43B1');
        Kan_43C1=this.add.audio('Kan_43C1');
        Kan_43C11=this.add.audio('Kan_43C11');
        Kan_43D1=this.add.audio('Kan_43D1');
        Hin_43A1=this.add.audio('Hin_43A1');
        Hin_43B1=this.add.audio('Hin_43B1');
        Hin_43C1=this.add.audio('Hin_43C1');
        Hin_43C11=this.add.audio('Hin_43C11');
        Hin_43D1=this.add.audio('Hin_43D1');
        
		
		
		this.sound.setDecodedCallback([ baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFill,Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1,Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1,Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1 ], function(){
		
		this.state.start('grade4_3Blevel1');
			
			}, this);
	}
}