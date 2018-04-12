Game.grade4_3Cpreloader=function(game){
	//this.preloadBar=null;
	    var baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFill;
        var bgSound,rightSound,wrongSound,ClickSound;
        var Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1;
        var Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1;
        var Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1;
};

Game.grade4_3Cpreloader.prototype={
	preload:function(){

        
        var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);

        
        
        this.load.image('bg1','assets/grade4Assets/4.3C/commonAssets/BG.png');
        this.load.atlas('backbtn','assets/grade4Assets/4.3C/commonAssets/backbtn.png' ,'json/grade4Json/4.3C/backbtn.json');
        this.load.atlas('speaker','assets/grade4Assets/4.3C/commonAssets/speaker.png' ,'json/grade4Json/4.3C/speaker.json');
        this.load.atlas('starAnim','assets/grade4Assets/4.3C/commonAssets/starAnim.png','json/grade4Json/4.3C/starAnim.json');
        this.load.image('cloud','assets/grade4Assets/4.3C/commonAssets/cloud.png');
        this.load.atlas('btn','assets/grade4Assets/4.3C/commonAssets/btn.png','json/grade4Json/4.3C/btn.json');
        this.load.image('bg3','assets/grade4Assets/4.3C/commonAssets/bg3.png');
        this.load.image('tittleBaar','assets/grade4Assets/4.3C/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade4Assets/4.3C/commonAssets/reply.png' ,'json/grade4Json/4.3C/reply.json');
        
        this.load.atlas('numbg','assets/grade4Assets/4.3C/commonAssets/numbg.png' ,'json/grade4Json/4.3C/numbg.json');
        this.load.atlas('rightBtn','assets/grade4Assets/4.3C/commonAssets/rightBtn.png' ,'json/grade4Json/4.3C/rightBtn.json');
        this.load.atlas('wrongBtn','assets/grade4Assets/4.3C/commonAssets/wrongBtn.png' ,'json/grade4Json/4.3C/wrongBtn.json');
        
        //My files to load
      //  this.load.atlas('gameBox','assets/grade4Assets/4.3C/gameAssets/gameBox.png' ,'json/grade4Json/4.3C/gameBox.json');
        //this.load.atlas('allimg','assets/grade4Assets/4.3C/gameAssets/allimg.png' ,'json/grade4Json/4.3C/allimg.json');
        this.load.atlas('tickMark','assets/grade4Assets/4.3C/gameAssets/tickMark.png' ,'json/grade4Json/4.3C/tickMark.json');
        this.load.atlas('crossMark','assets/grade4Assets/4.3C/gameAssets/crossMark.png' ,'json/grade4Json/4.3C/crossMark.json');
        
        //this.load.image('glow','assets/grade4Assets/4.3C/gameAssets/glow.png');
        
        //game items
            this.load.image('arrow','assets/grade4Assets/4.3C/commonAssets/Arw.png');
        
         this.load.atlas('incBox','assets/grade4Assets/4.3C/gameAssets/box1.png' ,'json/grade4Json/4.3C/box1.json');
         this.load.atlas('AnswerBox','assets/grade4Assets/4.3C/gameAssets/box2.png' ,'json/grade4Json/4.3C/box2.json');
        
         this.load.atlas('50Q','assets/grade4Assets/4.3C/gameAssets/50mlQ.png' ,'json/grade4Json/4.3C/50mlQ.json');
         this.load.atlas('100Q','assets/grade4Assets/4.3C/gameAssets/100mlQ.png' ,'json/grade4Json/4.3C/100mlQ.json');
         this.load.atlas('200Q','assets/grade4Assets/4.3C/gameAssets/200mlQ.png' ,'json/grade4Json/4.3C/200mlQ.json');
         this.load.atlas('250Q','assets/grade4Assets/4.3C/gameAssets/250mlQ.png' ,'json/grade4Json/4.3C/250mlQ.json');
         this.load.atlas('500Q','assets/grade4Assets/4.3C/gameAssets/500mlQ.png' ,'json/grade4Json/4.3C/500mlQ.json');
        
         this.load.atlas('200A','assets/grade4Assets/4.3C/gameAssets/A 200.png' ,'json/grade4Json/4.3C/A 200.json');
         this.load.atlas('250A','assets/grade4Assets/4.3C/gameAssets/A 250.png' ,'json/grade4Json/4.3C/A 250.json');
         this.load.atlas('500A','assets/grade4Assets/4.3C/gameAssets/A 500.png' ,'json/grade4Json/4.3C/A 500.json');
         this.load.atlas('1000A','assets/grade4Assets/4.3C/gameAssets/A 1000.png' ,'json/grade4Json/4.3C/A 1000.json');
        
        
        this.load.atlas('equation','assets/grade4Assets/4.3C/gameAssets/equation.png' ,'json/grade4Json/4.3C/equation.json');
        
        
        /******************** Level 4.3B******************************/
                this.load.atlas('50Q','assets/grade4Assets/4.3C/gameAssets/50mlQB.png' ,'json/grade4Json/4.3C/50mlQB.json');
         this.load.atlas('100Q','assets/grade4Assets/4.3C/gameAssets/100mlQB.png' ,'json/grade4Json/4.3C/100mlQB.json');
         this.load.atlas('250Q','assets/grade4Assets/4.3C/gameAssets/250mlQB.png' ,'json/grade4Json/4.3C/250mlQB.json');
         this.load.atlas('500Q','assets/grade4Assets/4.3C/gameAssets/500mlQB.png' ,'json/grade4Json/4.3C/500mlQB.json');
        
         this.load.atlas('bottle','assets/grade4Assets/4.3C/gameAssets/bottleB.png' ,'json/grade4Json/4.3C/bottleB.json');
         this.load.atlas('bottle2','assets/grade4Assets/4.3C/gameAssets/bottle2B.png' ,'json/grade4Json/4.3C/bottle2B.json');
         this.load.atlas('bottle3','assets/grade4Assets/4.3C/gameAssets/bottle3B.png' ,'json/grade4Json/4.3C/bottle3B.json');
         this.load.atlas('cup','assets/grade4Assets/4.3C/gameAssets/cupB.png' ,'json/grade4Json/4.3C/cupB.json');
         this.load.atlas('glass','assets/grade4Assets/4.3C/gameAssets/glassB.png' ,'json/grade4Json/4.3C/glassB.json');
         this.load.atlas('jug','assets/grade4Assets/4.3C/gameAssets/jugB.png' ,'json/grade4Json/4.3C/jugB.json');
         this.load.atlas('jug2','assets/grade4Assets/4.3C/gameAssets/jug2B.png' ,'json/grade4Json/4.3C/jug2B.json');
        
        
        this.load.atlas('equationB','assets/grade4Assets/4.3C/gameAssets/equationB.png' ,'json/grade4Json/4.3C/equationB.json');
        
        
        /*********************Level 4.3 C*******************************/
         this.load.atlas('50QC','assets/grade4Assets/4.3C/gameAssets/50mlQC.png' ,'json/grade4Json/4.3C/50mlQC.json');
         this.load.atlas('100QC','assets/grade4Assets/4.3C/gameAssets/100mlQC.png' ,'json/grade4Json/4.3C/100mlQC.json');
         this.load.atlas('200QC','assets/grade4Assets/4.3C/gameAssets/200mlQC.png' ,'json/grade4Json/4.3C/200mlQC.json');
         this.load.atlas('250QC','assets/grade4Assets/4.3C/gameAssets/250mlQC.png' ,'json/grade4Json/4.3C/250mlQC.json');
         this.load.atlas('500QC','assets/grade4Assets/4.3C/gameAssets/500mlQC.png' ,'json/grade4Json/4.3C/500mlQC.json');
        
         this.load.atlas('1000AC','assets/grade4Assets/4.3C/gameAssets/1000ltrC.png' ,'json/grade4Json/4.3C/1000ltrC.json');
         this.load.atlas('1000QC','assets/grade4Assets/4.3C/gameAssets/1000mlQD.png' ,'json/grade4Json/4.3C/1000mlQD.json');
         this.load.atlas('jugC','assets/grade4Assets/4.3C/gameAssets/2lJug.png' ,'json/grade4Json/4.3C/2lJug.json');
         this.load.atlas('arrowC','assets/grade4Assets/4.3C/gameAssets/arrowC.png' ,'json/grade4Json/4.3C/arrowC.json');
         this.load.atlas('glow','assets/grade4Assets/4.3C/gameAssets/glowC.png' ,'json/grade4Json/4.3C/glowC.json');
        
        
         this.load.audio('baudio', 'questionSounds/4.3C/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/4.3C/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/4.3C/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/4.3C/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/4.3C/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/4.3C/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/4.3C/snapSound.mp3');
        this.load.audio('waterFill', 'questionSounds/4.3C/waterFillingSound.mp3');
        this.load.audio('Eng_43A1', 'questionSounds/4.3C/English/4.3A1.mp3');
        this.load.audio('Eng_43B1', 'questionSounds/4.3C/English/4.3B1.mp3');
        this.load.audio('Eng_43C1', 'questionSounds/4.3C/English/4.3C1.mp3');
        this.load.audio('Eng_43C11', 'questionSounds/4.3C/English/4.3C1.1.mp3');
        this.load.audio('Eng_43D1', 'questionSounds/4.3C/English/4.3D1.mp3');
        this.load.audio('Kan_43A1', 'questionSounds/4.3C/Kannada/4.3A1.mp3');
        this.load.audio('Kan_43B1', 'questionSounds/4.3C/Kannada/4.3B1.mp3');
        this.load.audio('Kan_43C1', 'questionSounds/4.3C/Kannada/4.3C1.mp3');
        this.load.audio('Kan_43C11', 'questionSounds/4.3C/Kannada/4.3C1.1.mp3');
        this.load.audio('Kan_43D1', 'questionSounds/4.3C/Kannada/4.3D1.mp3');
        this.load.audio('Hin_43A1', 'questionSounds/4.3C/Hindi/4.3A1.mp3');
        this.load.audio('Hin_43B1', 'questionSounds/4.3C/Hindi/4.3B1.mp3');
        this.load.audio('Hin_43C1', 'questionSounds/4.3C/Hindi/4.3C1.mp3');
        this.load.audio('Hin_43C11', 'questionSounds/4.3C/Hindi/4.3C1.1.mp3');
        this.load.audio('Hin_43D1', 'questionSounds/4.3C/Hindi/4.3D1.mp3');
        
        
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
        
		this.sound.setDecodedCallback([baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFill,snapSound,Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1,Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1,Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1 ], function(){
		
		this.state.start('grade4_3Clevel1');
			
			}, this);
	}
}