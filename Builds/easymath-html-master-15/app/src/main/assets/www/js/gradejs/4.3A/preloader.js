Game.grade4_3Apreloader=function(game){
	//this.preloadBar=null;
	    var baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFill;
        var bgSound,rightSound,wrongSound,ClickSound;
        var Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1;
        var Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1;
        var Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1;
};

Game.grade4_3Apreloader.prototype={
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
        
        
        this.load.image('bg1','assets/grade4Assets/4.3A/commonAssets/BG.png');
        this.load.atlas('backbtn','assets/grade4Assets/4.3A/commonAssets/backbtn.png' ,'json/grade4Json/4.3A/backbtn.json');
        this.load.atlas('speaker','assets/grade4Assets/4.3A/commonAssets/speaker.png' ,'json/grade4Json/4.3A/speaker.json');
        this.load.atlas('starAnim','assets/grade4Assets/4.3A/commonAssets/starAnim.png','json/grade4Json/4.3A/starAnim.json');
        this.load.image('cloud','assets/grade4Assets/4.3A/commonAssets/cloud.png');
        this.load.atlas('btn','assets/grade4Assets/4.3A/commonAssets/btn.png','json/grade4Json/4.3A/btn.json');
        this.load.image('bg3','assets/grade4Assets/4.3A/commonAssets/bg3.png');
        this.load.image('tittleBaar','assets/grade4Assets/4.3A/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade4Assets/4.3A/commonAssets/reply.png' ,'json/grade4Json/4.3A/reply.json');
        
        this.load.atlas('numbg','assets/grade4Assets/4.3A/commonAssets/numbg.png' ,'json/grade4Json/4.3A/numbg.json');
        this.load.atlas('rightBtn','assets/grade4Assets/4.3A/commonAssets/rightBtn.png' ,'json/grade4Json/4.3A/rightBtn.json');
        this.load.atlas('wrongBtn','assets/grade4Assets/4.3A/commonAssets/wrongBtn.png' ,'json/grade4Json/4.3A/wrongBtn.json');
        
        //My files to load
      //  this.load.atlas('gameBox','assets/grade4Assets/4.3A/gameAssets/gameBox.png' ,'json/grade4Json/4.3A/gameBox.json');
        //this.load.atlas('allimg','assets/grade4Assets/4.3A/gameAssets/allimg.png' ,'json/grade4Json/4.3A/allimg.json');
        this.load.atlas('tickMark','assets/grade4Assets/4.3A/gameAssets/tickMark.png' ,'json/grade4Json/4.3A/tickMark.json');
        this.load.atlas('crossMark','assets/grade4Assets/4.3A/gameAssets/crossMark.png' ,'json/grade4Json/4.3A/crossMark.json');
        
        //this.load.image('glow','assets/grade4Assets/4.3A/gameAssets/glow.png');
        
        //game items
            this.load.image('arrow','assets/grade4Assets/4.3A/commonAssets/Arw.png');
        
         this.load.atlas('incBox','assets/grade4Assets/4.3A/gameAssets/box1.png' ,'json/grade4Json/4.3A/box1.json');
         this.load.atlas('AnswerBox','assets/grade4Assets/4.3A/gameAssets/box2.png' ,'json/grade4Json/4.3A/box2.json');
        
         this.load.atlas('50Q','assets/grade4Assets/4.3A/gameAssets/50mlQ.png' ,'json/grade4Json/4.3A/50mlQ.json');
         this.load.atlas('100Q','assets/grade4Assets/4.3A/gameAssets/100mlQ.png' ,'json/grade4Json/4.3A/100mlQ.json');
         this.load.atlas('200Q','assets/grade4Assets/4.3A/gameAssets/200mlQ.png' ,'json/grade4Json/4.3A/200mlQ.json');
         this.load.atlas('250Q','assets/grade4Assets/4.3A/gameAssets/250mlQ.png' ,'json/grade4Json/4.3A/250mlQ.json');
         this.load.atlas('500Q','assets/grade4Assets/4.3A/gameAssets/500mlQ.png' ,'json/grade4Json/4.3A/500mlQ.json');
        
         this.load.atlas('200A','assets/grade4Assets/4.3A/gameAssets/A 200.png' ,'json/grade4Json/4.3A/A 200.json');
         this.load.atlas('250A','assets/grade4Assets/4.3A/gameAssets/A 250.png' ,'json/grade4Json/4.3A/A 250.json');
         this.load.atlas('500A','assets/grade4Assets/4.3A/gameAssets/A 500.png' ,'json/grade4Json/4.3A/A 500.json');
         this.load.atlas('1000A','assets/grade4Assets/4.3A/gameAssets/A 1000.png' ,'json/grade4Json/4.3A/A 1000.json');
        
        
        this.load.atlas('equation','assets/grade4Assets/4.3A/gameAssets/equation.png' ,'json/grade4Json/4.3A/equation.json');
        
        
        /******************** Level 4.3B******************************/
                this.load.atlas('50Q','assets/grade4Assets/4.3A/gameAssets/50mlQB.png' ,'json/grade4Json/4.3A/50mlQB.json');
         this.load.atlas('100Q','assets/grade4Assets/4.3A/gameAssets/100mlQB.png' ,'json/grade4Json/4.3A/100mlQB.json');
         this.load.atlas('250Q','assets/grade4Assets/4.3A/gameAssets/250mlQB.png' ,'json/grade4Json/4.3A/250mlQB.json');
         this.load.atlas('500Q','assets/grade4Assets/4.3A/gameAssets/500mlQB.png' ,'json/grade4Json/4.3A/500mlQB.json');
        
         this.load.atlas('bottle','assets/grade4Assets/4.3A/gameAssets/bottleB.png' ,'json/grade4Json/4.3A/bottleB.json');
         this.load.atlas('bottle2','assets/grade4Assets/4.3A/gameAssets/bottle2B.png' ,'json/grade4Json/4.3A/bottle2B.json');
         this.load.atlas('bottle3','assets/grade4Assets/4.3A/gameAssets/bottle3B.png' ,'json/grade4Json/4.3A/bottle3B.json');
         this.load.atlas('cup','assets/grade4Assets/4.3A/gameAssets/cupB.png' ,'json/grade4Json/4.3A/cupB.json');
         this.load.atlas('glass','assets/grade4Assets/4.3A/gameAssets/glassB.png' ,'json/grade4Json/4.3A/glassB.json');
         this.load.atlas('jug','assets/grade4Assets/4.3A/gameAssets/jugB.png' ,'json/grade4Json/4.3A/jugB.json');
         this.load.atlas('jug2','assets/grade4Assets/4.3A/gameAssets/jug2B.png' ,'json/grade4Json/4.3A/jug2B.json');
        
        
        this.load.atlas('equationB','assets/grade4Assets/4.3A/gameAssets/equationB.png' ,'json/grade4Json/4.3A/equationB.json');
        
        
        /*********************Level 4.3 C*******************************/
         this.load.atlas('50QC','assets/grade4Assets/4.3A/gameAssets/50mlQC.png' ,'json/grade4Json/4.3A/50mlQC.json');
         this.load.atlas('100QC','assets/grade4Assets/4.3A/gameAssets/100mlQC.png' ,'json/grade4Json/4.3A/100mlQC.json');
         this.load.atlas('200QC','assets/grade4Assets/4.3A/gameAssets/200mlQC.png' ,'json/grade4Json/4.3A/200mlQC.json');
         this.load.atlas('250QC','assets/grade4Assets/4.3A/gameAssets/250mlQC.png' ,'json/grade4Json/4.3A/250mlQC.json');
         this.load.atlas('500QC','assets/grade4Assets/4.3A/gameAssets/500mlQC.png' ,'json/grade4Json/4.3A/500mlQC.json');
        
         this.load.atlas('1000AC','assets/grade4Assets/4.3A/gameAssets/1000ltrC.png' ,'json/grade4Json/4.3A/1000ltrC.json');
         this.load.atlas('1000QC','assets/grade4Assets/4.3A/gameAssets/1000mlQD.png' ,'json/grade4Json/4.3A/1000mlQD.json');
         this.load.atlas('jugC','assets/grade4Assets/4.3A/gameAssets/2lJug.png' ,'json/grade4Json/4.3A/2lJug.json');
         this.load.atlas('arrowC','assets/grade4Assets/4.3A/gameAssets/arrowC.png' ,'json/grade4Json/4.3A/arrowC.json');
         this.load.atlas('glow','assets/grade4Assets/4.3A/gameAssets/glowC.png' ,'json/grade4Json/4.3A/glowC.json');
   
        
                 this.load.audio('baudio', 'questionSounds/4.3A/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/4.3A/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/4.3A/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/4.3A/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/4.3A/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/4.3A/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/4.3A/snapSound.mp3');
        this.load.audio('waterFill', 'questionSounds/4.3A/waterFillingSound.mp3');
        this.load.audio('Eng_43A1', 'questionSounds/4.3A/English/4.3A1.mp3');
        this.load.audio('Eng_43B1', 'questionSounds/4.3A/English/4.3B1.mp3');
        this.load.audio('Eng_43C1', 'questionSounds/4.3A/English/4.3C1.mp3');
        this.load.audio('Eng_43C11', 'questionSounds/4.3A/English/4.3C1.1.mp3');
        this.load.audio('Eng_43D1', 'questionSounds/4.3A/English/4.3D1.mp3');
        this.load.audio('Kan_43A1', 'questionSounds/4.3A/Kannada/4.3A1.mp3');
        this.load.audio('Kan_43B1', 'questionSounds/4.3A/Kannada/4.3B1.mp3');
        this.load.audio('Kan_43C1', 'questionSounds/4.3A/Kannada/4.3C1.mp3');
        this.load.audio('Kan_43C11', 'questionSounds/4.3A/Kannada/4.3C1.1.mp3');
        this.load.audio('Kan_43D1', 'questionSounds/4.3A/Kannada/4.3D1.mp3');
        this.load.audio('Hin_43A1', 'questionSounds/4.3A/Hindi/4.3A1.mp3');
        this.load.audio('Hin_43B1', 'questionSounds/4.3A/Hindi/4.3B1.mp3');
        this.load.audio('Hin_43C1', 'questionSounds/4.3A/Hindi/4.3C1.mp3');
        this.load.audio('Hin_43C11', 'questionSounds/4.3A/Hindi/4.3C1.1.mp3');
        this.load.audio('Hin_43D1', 'questionSounds/4.3A/Hindi/4.3D1.mp3');
		
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
        
		
		
		this.sound.setDecodedCallback([ baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFill,snapSound,Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1,Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1,Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1 ], function(){
		
		this.state.start('grade4_3Alevel1');
			
			}, this);
	}
}