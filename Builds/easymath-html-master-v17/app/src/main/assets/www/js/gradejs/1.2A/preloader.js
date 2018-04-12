Game.grade1_2Apreloader=function(game){
	//this.preloadBar=null;
	var Eng_12A1,Eng_12A2,Eng_12A3,Eng_12B1,Eng_12B2,Eng_12B3,Eng_12B5,Eng_12C1,Eng_12C2,Eng_12C3;
    var Kan_12A1,Kan_12A2,Kan_12A3,Kan_12B1,Kan_12B2,Kan_12B3,Kan_12B5,Kan_12C1,Kan_12C2,Kan_12C3;
    var Hin_12A1,Hin_12A2,Hin_12A3,Hin_12B1,Hin_12B2,Hin_12B3,Hin_12B5,Hin_12C1,Hin_12C2,Hin_12C3;
};

Game.grade1_2Apreloader.prototype={
	preload:function(){

       var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
        
        
		//this.preloadBar=this.add.sprite(this.world.centerX,this.world.centerY,'preloaderBar');

		//this.preloadBar.anchor.setTo(0.5,0.5);

		//this.time.advanceTiming=true;

		//this.load.setPreloadSprite(this.preloadBar);
		

		//LOAD ALL ASEETS
		//load common assets/grade3Assets/1.2A
		this.load.image('background','assets/grade3Assets/1.2A/firstSceneBg.png');
		this.load.image('navBg','assets/grade3Assets/1.2A/navBg.png');
		
		this.load.image('stick', 'assets/grade3Assets/1.2A/stick.png');
		this.load.image('tittleBar', 'assets/grade3Assets/1.2A/tittleBar.png');
		
		this.load.atlas('btn','assets/grade3Assets/1.2A/btn.png','json/grade3Json/1.2A/btn.json');
		this.load.atlas('backBtn','assets/grade3Assets/1.2A/backBtn.png','json/grade3Json/1.2A/backBtn.json');
		this.load.atlas('speakerBtn','assets/grade3Assets/1.2A/speakerBtn.png','json/grade3Json/1.2A/speakerBtn.json');
		this.load.atlas('starAnim','assets/grade3Assets/1.2A/starAnim.png','json/grade3Json/1.2A/starAnim.json');
		
		
		//scene1 assets/grade3Assets/1.2A
        //this.load.image('scene1wind1', 'assets/grade3Assets/1.2A/reduced/scene1wind1.png');
        this.load.atlas('scene1wind1', 'assets/grade3Assets/1.2A/reduced/scene1wind1.png','json/grade3Json/1.2A/scene1wind1.json');
        this.load.atlas('scene1wind2', 'assets/grade3Assets/1.2A/reduced/scene1wind2.png','json/grade3Json/1.2A/scene1wind2.json');
        this.load.atlas('scene1wind3', 'assets/grade3Assets/1.2A/reduced/scene1wind3.png','json/grade3Json/1.2A/scene1wind3.json');
        this.load.atlas('scene1wind33', 'assets/grade3Assets/1.2A/reduced/scene1wind33.png','json/grade3Json/1.2A/scene1wind33.json');
        
        this.load.atlas('scene2wind1', 'assets/grade3Assets/1.2A/reduced/scene2wind1.png','json/grade3Json/1.2A/scene2wind1.json');
        this.load.atlas('scene2wind2', 'assets/grade3Assets/1.2A/reduced/scene2wind2.png','json/grade3Json/1.2A/scene2wind2.json');
        this.load.atlas('scene2wind3', 'assets/grade3Assets/1.2A/reduced/scene2wind3.png','json/grade3Json/1.2A/scene2wind3.json');
        
        this.load.atlas('scene3wind1', 'assets/grade3Assets/1.2A/reduced/scene3wind1.png','json/grade3Json/1.2A/scene3wind1.json');
        this.load.atlas('scene3wind2', 'assets/grade3Assets/1.2A/reduced/scene3wind2.png','json/grade3Json/1.2A/scene3wind2.json');
        this.load.atlas('scene3wind3', 'assets/grade3Assets/1.2A/reduced/scene3wind3.png','json/grade3Json/1.2A/scene3wind3.json'); 
        
       // this.load.atlas('scene1spin1', 'assets/grade3Assets/1.2A/reduced/scene1spin1.png','json/grade3Json/1.2A/scene1spin1.json');
      //  this.load.atlas('scene1spin2', 'assets/grade3Assets/1.2A/reduced/scene1spin2.png','json/grade3Json/1.2A/scene1spin2.json');
      //  this.load.atlas('scene1spin3', 'assets/grade3Assets/1.2A/reduced/scene1spin3.png','json/grade3Json/1.2A/scene1spin3.json');
       // this.load.atlas('scene1wind33', 'assets/grade3Assets/1.2A/reduced/scene1wind33.png','json/grade3Json/1.2A/scene1wind33.json');
        
      //  this.load.atlas('scene2spin1', 'assets/grade3Assets/1.2A/reduced/scene2spin1.png','json/grade3Json/1.2A/scene2spin1.json');
      //  this.load.atlas('scene2spin2', 'assets/grade3Assets/1.2A/reduced/scene2spin2.png','json/grade3Json/1.2A/scene2spin2.json');
      //  this.load.atlas('scene2spin3', 'assets/grade3Assets/1.2A/reduced/scene2spin3.png','json/grade3Json/1.2A/scene2spin3.json');
        
      //  this.load.atlas('scene3spin1', 'assets/grade3Assets/1.2A/reduced/scene3spin1.png','json/grade3Json/1.2A/scene3spin1.json');
      //  this.load.atlas('scene3spin2', 'assets/grade3Assets/1.2A/reduced/scene3spin2.png','json/grade3Json/1.2A/scene3spin2.json');
      //  this.load.atlas('scene3spin3', 'assets/grade3Assets/1.2A/reduced/scene3spin3.png','json/grade3Json/1.2A/scene3spin3.json');
        
//		this.load.image('scene1wind2', 'assets/grade3Assets/1.2A/reduced/scene1wind2.png');
//		this.load.image('scene1wind3', 'assets/grade3Assets/1.2A/reduced/scene1wind3.png');
//		this.load.image('scene2wind1', 'assets/grade3Assets/1.2A/reduced/scene2wind1.png');
//		this.load.image('scene2wind2', 'assets/grade3Assets/1.2A/reduced/scene2wind2.png');
//		this.load.image('scene2wind3', 'assets/grade3Assets/1.2A/reduced/scene2wind3.png');
//		this.load.image('scene3wind1', 'assets/grade3Assets/1.2A/reduced/scene3wind1.png');
//		this.load.image('scene3wind2', 'assets/grade3Assets/1.2A/reduced/scene3wind2.png');
//		this.load.image('scene3wind3', 'assets/grade3Assets/1.2A/reduced/scene3wind3.png');
//	
		//scene2 assets/grade3Assets/1.2A
		//this.load.atlas('scene2Btn','assets/grade3Assets/1.2A/levelFirstScene/scene2Btn.png','json/grade3Json/1.2A/scene2Btn.json');
		this.load.atlas('scene2Btn1','assets/grade3Assets/1.2A/scene2Btn1.png','json/grade3Json/1.2A/scene2Btn1.json');
		this.load.atlas('scene2Btn2','assets/grade3Assets/1.2A/scene2Btn2.png','json/grade3Json/1.2A/scene2Btn2.json');
		this.load.atlas('scene2Btn3','assets/grade3Assets/1.2A/scene2Btn3.png','json/grade3Json/1.2A/scene2Btn3.json');
		
		//scene3 assets/grade3Assets/1.2A
        this.load.atlas('pencil','assets/grade3Assets/1.2A/levelLastScene/pencil.png' ,'json/grade3Json/1.2A/pencil.json');
  
        
		this.load.image('centerCircle', 'assets/grade3Assets/1.2A/centerCircle.png');
		this.load.image('wind2Center', 'assets/grade3Assets/1.2A/levelLastScene/wind2Center.png');
        this.load.atlas('replay', 'assets/grade3Assets/1.2A/reply.png', 'json/grade3Json/1.2A/reply.json');
		
		
		//this.load.image('crayon', 'assets/grade3Assets/1.2A/levelLastScene/crayon.png');
		this.load.image('eraser', 'assets/grade3Assets/1.2A/levelLastScene/eraser.png');
        

		//this.load.atlas('wind1','assets/grade3Assets/1.2A/levelLastScene/wind1.png' ,'json/grade3Json/1.2A/wind1.json');
		//this.load.atlas('scene3wind2','assets/grade3Assets/1.2A/levelLastScene/wind2new.png' ,'json/grade3Json/1.2A/wind2new.json');
		//this.load.atlas('windmel','assets/grade3Assets/1.2A/levelLastScene/wind3new3.png' ,'json/grade3Json/1.2A/wind3new3.json');
		//this.load.atlas('windmel2','assets/grade3Assets/1.2A/levelLastScene/wind32New.png' ,'json/grade3Json/1.2A/wind32New.json');
        this.load.atlas('checkbtn','assets/grade3Assets/1.2A/levelLastScene/checkbtn.png' ,'json/grade3Json/1.2A/checkbtn.json');

        
        
        this.load.atlas('wind1','assets/grade3Assets/1.2A/levelLastScene/w1.png' ,'json/grade3Json/1.2A/w1.json');
        this.load.atlas('wind2','assets/grade3Assets/1.2A/levelLastScene/w2.png' ,'json/grade3Json/1.2A/w2.json');
        this.load.atlas('wind3','assets/grade3Assets/1.2A/levelLastScene/w3.png' ,'json/grade3Json/1.2A/w3.json');
        
        
        this.load.image('wind11', 'assets/grade3Assets/1.2A/reduced/wind11.png');
        this.load.image('wind12', 'assets/grade3Assets/1.2A/reduced/wind12.png');
        this.load.image('wind13', 'assets/grade3Assets/1.2A/reduced/wind13.png');
        this.load.image('wind21', 'assets/grade3Assets/1.2A/reduced/wind21.png');
        this.load.image('wind22', 'assets/grade3Assets/1.2A/reduced/wind22.png');
        this.load.image('wind23', 'assets/grade3Assets/1.2A/reduced/wind23.png');
        this.load.image('wind31', 'assets/grade3Assets/1.2A/reduced/wind31.png');
        this.load.image('wind32', 'assets/grade3Assets/1.2A/reduced/wind32.png');
        this.load.image('wind33', 'assets/grade3Assets/1.2A/reduced/wind33.png');
        
        
        
        //Copy from Boot--------------
        this.load.audio('bgSound', 'questionSounds/1.2A/BackgroundSound.mp3');
		this.load.audio('rightSound', 'questionSounds/1.2A/celebration.mp3');
		this.load.audio('wrongSound', 'questionSounds/1.2A/WrongCelebrationSound.mp3');
		this.load.audio('clickSound', 'questionSounds/1.2A/ClickSound.mp3');
		this.load.audio('snapSound', 'questionSounds/1.2A/snapSound.mp3');
		//this.load.audio('spin1', 'questionSounds/1.2A/spin1.mp3');
		this.load.audio('spin2', 'questionSounds/1.2A/spin2.mp3');
        this.load.audio('Eng_12A1', 'questionSounds/1.2A/English/1.2A1.mp3');
        this.load.audio('Eng_12A2', 'questionSounds/1.2A/English/1.2A2.mp3');
        this.load.audio('Eng_12A3', 'questionSounds/1.2A/English/1.2A3.mp3');
        this.load.audio('Eng_12B1', 'questionSounds/1.2A/English/1.2B1.mp3');
        this.load.audio('Eng_12B2', 'questionSounds/1.2A/English/1.2B2.mp3');
        this.load.audio('Eng_12B3', 'questionSounds/1.2A/English/1.2B3.mp3');
        this.load.audio('Eng_12B5', 'questionSounds/1.2A/English/1.2B5.mp3');
        this.load.audio('Eng_12C1', 'questionSounds/1.2A/English/1.2C1.mp3');
        this.load.audio('Eng_12C2', 'questionSounds/1.2A/English/1.2C2.mp3');
        this.load.audio('Eng_12C3', 'questionSounds/1.2A/English/1.2C3.mp3');
        this.load.audio('Kan_12A1', 'questionSounds/1.2A/Kannada/1.2A1.mp3');
        this.load.audio('Kan_12A2', 'questionSounds/1.2A/Kannada/1.2A2.mp3');
        this.load.audio('Kan_12A3', 'questionSounds/1.2A/Kannada/1.2A3.mp3');
        this.load.audio('Kan_12B1', 'questionSounds/1.2A/Kannada/1.2B1.mp3');
        this.load.audio('Kan_12B2', 'questionSounds/1.2A/Kannada/1.2B2.mp3');
        this.load.audio('Kan_12B3', 'questionSounds/1.2A/Kannada/1.2B3.mp3');
        this.load.audio('Kan_12B5', 'questionSounds/1.2A/Kannada/1.2B5.mp3');
        this.load.audio('Kan_12C1', 'questionSounds/1.2A/Kannada/1.2C1.mp3');
        this.load.audio('Kan_12C2', 'questionSounds/1.2A/Kannada/1.2C2.mp3');
        this.load.audio('Kan_12C3', 'questionSounds/1.2A/Kannada/1.2C3.mp3');
        this.load.audio('Hin_12A1', 'questionSounds/1.2A/Hindi/1.2A1.mp3');
        this.load.audio('Hin_12A2', 'questionSounds/1.2A/Hindi/1.2A2.mp3');
        this.load.audio('Hin_12A3', 'questionSounds/1.2A/Hindi/1.2A3.mp3');
        this.load.audio('Hin_12B1', 'questionSounds/1.2A/Hindi/1.2B1.mp3');
        this.load.audio('Hin_12B2', 'questionSounds/1.2A/Hindi/1.2B2.mp3');
        this.load.audio('Hin_12B3', 'questionSounds/1.2A/Hindi/1.2B3.mp3');
        this.load.audio('Hin_12B5', 'questionSounds/1.2A/Hindi/1.2B5.mp3');
        this.load.audio('Hin_12C1', 'questionSounds/1.2A/Hindi/1.2C1.mp3');
        this.load.audio('Hin_12C2', 'questionSounds/1.2A/Hindi/1.2C2.mp3');
        this.load.audio('Hin_12C3', 'questionSounds/1.2A/Hindi/1.2C3.mp3');
		
		this.load.onLoadComplete.add(this.onloadComplete,this);
        
	},


	onloadComplete:function(){
		this.load.onLoadComplete.removeAll();   
    	bgSound = this.add.audio('bgSound');
    	rightSound = this.add.audio('rightSound');
    	wrongSound = this.add.audio('wrongSound');
    	clickSound = this.add.audio('clickSound');
    	snapSound = this.add.audio('snapSound');
    	//spin1 = this.add.audio('spin1');
    	
    	spin2 = this.add.audio('spin2');
        Eng_12A1= this.add.audio('Eng_12A1');
        Eng_12A2= this.add.audio('Eng_12A2');
        Eng_12A3= this.add.audio('Eng_12A3');
        Eng_12B1= this.add.audio('Eng_12B1');
        Eng_12B2= this.add.audio('Eng_12B2');
        Eng_12B3= this.add.audio('Eng_12B3');
        Eng_12B5= this.add.audio('Eng_12B5');
        Eng_12C1= this.add.audio('Eng_12C1');
        Eng_12C2= this.add.audio('Eng_12C2');
        Eng_12C3= this.add.audio('Eng_12C3');
        Kan_12A1= this.add.audio('Kan_12A1');
        Kan_12A2= this.add.audio('Kan_12A2');
        Kan_12A3= this.add.audio('Kan_12A3');
        Kan_12B1= this.add.audio('Kan_12B1');
        Kan_12B2= this.add.audio('Kan_12B2');
        Kan_12B3= this.add.audio('Kan_12B3');
        Kan_12B5= this.add.audio('Kan_12B5');
        Kan_12C1= this.add.audio('Kan_12C1');
        Kan_12C2= this.add.audio('Kan_12C2');
        Kan_12C3= this.add.audio('Kan_12C3');
        Hin_12A1= this.add.audio('Hin_12A1');
        Hin_12A2= this.add.audio('Hin_12A2');
        Hin_12A3= this.add.audio('Hin_12A3');
        Hin_12B1= this.add.audio('Hin_12B1');
        Hin_12B2= this.add.audio('Hin_12B2');
        Hin_12B3= this.add.audio('Hin_12B3');
        Hin_12B5= this.add.audio('Hin_12B5');
        Hin_12C1= this.add.audio('Hin_12C1');
        Hin_12C2= this.add.audio('Hin_12C2');
        Hin_12C3= this.add.audio('Hin_12C3');
		
		
		this.sound.setDecodedCallback([bgSound,rightSound,wrongSound,clickSound,snapSound,spin2,Eng_12A1,Eng_12A2,Eng_12A3,Eng_12B1,Eng_12B2,Eng_12B3,Eng_12B5,Eng_12C1,Eng_12C2,Eng_12C3,Kan_12A1,Kan_12A2,Kan_12A3,Kan_12B1,Kan_12B2,Kan_12B3,Kan_12B5,Kan_12C1,Kan_12C2,Kan_12C3,Hin_12A1,Hin_12A2,Hin_12A3,Hin_12B1,Hin_12B2,Hin_12B3,Hin_12B5,Hin_12C1,Hin_12C2,Hin_12C3 ], function(){
		
		this.state.start('grade1_2Alevel1');
			
			}, this);
	}
}