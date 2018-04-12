Game.grade1_2Bpreloader=function(game){
	//this.preloadBar=null;
	var Eng_12A1,Eng_12A2,Eng_12A3,Eng_12B1,Eng_12B2,Eng_12B3,Eng_12B5,Eng_12C1,Eng_12C2,Eng_12C3;
        var Kan_12A1,Kan_12A2,Kan_12A3,Kan_12B1,Kan_12B2,Kan_12B3,Kan_12B5,Kan_12C1,Kan_12C2,Kan_12C3;
        var Hin_12A1,Hin_12A2,Hin_12A3,Hin_12B1,Hin_12B2,Hin_12B3,Hin_12B5,Hin_12C1,Hin_12C2,Hin_12C3;
};

Game.grade1_2Bpreloader.prototype={
	preload:function(){

        

		var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
		

		//LOAD ALL ASEETS
		//load common assets/grade3Assets/1.2B
		this.load.image('background','assets/grade3Assets/1.2B/firstSceneBg.png');
		this.load.image('navBg','assets/grade3Assets/1.2B/navBg.png');
		
		this.load.image('stick', 'assets/grade3Assets/1.2B/stick.png');
		this.load.image('tittleBar', 'assets/grade3Assets/1.2B/tittleBar.png');
		
		this.load.atlas('btn','assets/grade3Assets/1.2B/btn.png','json/grade3Json/1.2B/btn.json');
		this.load.atlas('backBtn','assets/grade3Assets/1.2B/backBtn.png','json/grade3Json/1.2B/backBtn.json');
		this.load.atlas('speakerBtn','assets/grade3Assets/1.2B/speakerBtn.png','json/grade3Json/1.2B/speakerBtn.json');
		this.load.atlas('starAnim','assets/grade3Assets/1.2B/starAnim.png','json/grade3Json/1.2B/starAnim.json');
		
		
		//scene1 assets/grade3Assets/1.2B
        //this.load.image('scene1wind1', 'assets/grade3Assets/1.2B/reduced/scene1wind1.png');
        this.load.atlas('scene1wind1', 'assets/grade3Assets/1.2B/reduced/scene1wind1.png','json/grade3Json/1.2B/scene1wind1.json');
        this.load.atlas('scene1wind2', 'assets/grade3Assets/1.2B/reduced/scene1wind2.png','json/grade3Json/1.2B/scene1wind2.json');
        this.load.atlas('scene1wind3', 'assets/grade3Assets/1.2B/reduced/scene1wind3.png','json/grade3Json/1.2B/scene1wind3.json');
        this.load.atlas('scene1wind33', 'assets/grade3Assets/1.2B/reduced/scene1wind33.png','json/grade3Json/1.2B/scene1wind33.json');
        
        this.load.atlas('scene2wind1', 'assets/grade3Assets/1.2B/reduced/scene2wind1.png','json/grade3Json/1.2B/scene2wind1.json');
        this.load.atlas('scene2wind2', 'assets/grade3Assets/1.2B/reduced/scene2wind2.png','json/grade3Json/1.2B/scene2wind2.json');
        this.load.atlas('scene2wind3', 'assets/grade3Assets/1.2B/reduced/scene2wind3.png','json/grade3Json/1.2B/scene2wind3.json');
        
        this.load.atlas('scene3wind1', 'assets/grade3Assets/1.2B/reduced/scene3wind1.png','json/grade3Json/1.2B/scene3wind1.json');
        this.load.atlas('scene3wind2', 'assets/grade3Assets/1.2B/reduced/scene3wind2.png','json/grade3Json/1.2B/scene3wind2.json');
        this.load.atlas('scene3wind3', 'assets/grade3Assets/1.2B/reduced/scene3wind3.png','json/grade3Json/1.2B/scene3wind3.json'); 
        
       // this.load.atlas('scene1spin1', 'assets/grade3Assets/1.2B/reduced/scene1spin1.png','json/grade3Json/1.2B/scene1spin1.json');
      //  this.load.atlas('scene1spin2', 'assets/grade3Assets/1.2B/reduced/scene1spin2.png','json/grade3Json/1.2B/scene1spin2.json');
      //  this.load.atlas('scene1spin3', 'assets/grade3Assets/1.2B/reduced/scene1spin3.png','json/grade3Json/1.2B/scene1spin3.json');
       // this.load.atlas('scene1wind33', 'assets/grade3Assets/1.2B/reduced/scene1wind33.png','json/grade3Json/1.2B/scene1wind33.json');
        
      //  this.load.atlas('scene2spin1', 'assets/grade3Assets/1.2B/reduced/scene2spin1.png','json/grade3Json/1.2B/scene2spin1.json');
      //  this.load.atlas('scene2spin2', 'assets/grade3Assets/1.2B/reduced/scene2spin2.png','json/grade3Json/1.2B/scene2spin2.json');
      //  this.load.atlas('scene2spin3', 'assets/grade3Assets/1.2B/reduced/scene2spin3.png','json/grade3Json/1.2B/scene2spin3.json');
        
      //  this.load.atlas('scene3spin1', 'assets/grade3Assets/1.2B/reduced/scene3spin1.png','json/grade3Json/1.2B/scene3spin1.json');
      //  this.load.atlas('scene3spin2', 'assets/grade3Assets/1.2B/reduced/scene3spin2.png','json/grade3Json/1.2B/scene3spin2.json');
      //  this.load.atlas('scene3spin3', 'assets/grade3Assets/1.2B/reduced/scene3spin3.png','json/grade3Json/1.2B/scene3spin3.json');
        
//		this.load.image('scene1wind2', 'assets/grade3Assets/1.2B/reduced/scene1wind2.png');
//		this.load.image('scene1wind3', 'assets/grade3Assets/1.2B/reduced/scene1wind3.png');
//		this.load.image('scene2wind1', 'assets/grade3Assets/1.2B/reduced/scene2wind1.png');
//		this.load.image('scene2wind2', 'assets/grade3Assets/1.2B/reduced/scene2wind2.png');
//		this.load.image('scene2wind3', 'assets/grade3Assets/1.2B/reduced/scene2wind3.png');
//		this.load.image('scene3wind1', 'assets/grade3Assets/1.2B/reduced/scene3wind1.png');
//		this.load.image('scene3wind2', 'assets/grade3Assets/1.2B/reduced/scene3wind2.png');
//		this.load.image('scene3wind3', 'assets/grade3Assets/1.2B/reduced/scene3wind3.png');
//	
		//scene2 assets/grade3Assets/1.2B
		//this.load.atlas('scene2Btn','assets/grade3Assets/1.2B/levelFirstScene/scene2Btn.png','json/grade3Json/1.2B/scene2Btn.json');
		this.load.atlas('scene2Btn1','assets/grade3Assets/1.2B/scene2Btn1.png','json/grade3Json/1.2B/scene2Btn1.json');
		this.load.atlas('scene2Btn2','assets/grade3Assets/1.2B/scene2Btn2.png','json/grade3Json/1.2B/scene2Btn2.json');
		this.load.atlas('scene2Btn3','assets/grade3Assets/1.2B/scene2Btn3.png','json/grade3Json/1.2B/scene2Btn3.json');
		
		//scene3 assets/grade3Assets/1.2B
        this.load.atlas('pencil','assets/grade3Assets/1.2B/levelLastScene/pencil.png' ,'json/grade3Json/1.2B/pencil.json');
  
        
		this.load.image('centerCircle', 'assets/grade3Assets/1.2B/centerCircle.png');
		this.load.image('wind2Center', 'assets/grade3Assets/1.2B/levelLastScene/wind2Center.png');
        this.load.atlas('replay', 'assets/grade3Assets/1.2B/reply.png', 'json/grade3Json/1.2B/reply.json');
		
		
		//this.load.image('crayon', 'assets/grade3Assets/1.2B/levelLastScene/crayon.png');
		this.load.image('eraser', 'assets/grade3Assets/1.2B/levelLastScene/eraser.png');
        

		//this.load.atlas('wind1','assets/grade3Assets/1.2B/levelLastScene/wind1.png' ,'json/grade3Json/1.2B/wind1.json');
		//this.load.atlas('scene3wind2','assets/grade3Assets/1.2B/levelLastScene/wind2new.png' ,'json/grade3Json/1.2B/wind2new.json');
		//this.load.atlas('windmel','assets/grade3Assets/1.2B/levelLastScene/wind3new3.png' ,'json/grade3Json/1.2B/wind3new3.json');
		//this.load.atlas('windmel2','assets/grade3Assets/1.2B/levelLastScene/wind32New.png' ,'json/grade3Json/1.2B/wind32New.json');
        this.load.atlas('checkbtn','assets/grade3Assets/1.2B/levelLastScene/checkbtn.png' ,'json/grade3Json/1.2B/checkbtn.json');

        
        
        this.load.atlas('wind1','assets/grade3Assets/1.2B/levelLastScene/w1.png' ,'json/grade3Json/1.2B/w1.json');
        this.load.atlas('wind2','assets/grade3Assets/1.2B/levelLastScene/w2.png' ,'json/grade3Json/1.2B/w2.json');
        this.load.atlas('wind3','assets/grade3Assets/1.2B/levelLastScene/w3.png' ,'json/grade3Json/1.2B/w3.json');
        
        
        this.load.image('wind11', 'assets/grade3Assets/1.2B/reduced/wind11.png');
        this.load.image('wind12', 'assets/grade3Assets/1.2B/reduced/wind12.png');
        this.load.image('wind13', 'assets/grade3Assets/1.2B/reduced/wind13.png');
        this.load.image('wind21', 'assets/grade3Assets/1.2B/reduced/wind21.png');
        this.load.image('wind22', 'assets/grade3Assets/1.2B/reduced/wind22.png');
        this.load.image('wind23', 'assets/grade3Assets/1.2B/reduced/wind23.png');
        this.load.image('wind31', 'assets/grade3Assets/1.2B/reduced/wind31.png');
        this.load.image('wind32', 'assets/grade3Assets/1.2B/reduced/wind32.png');
        this.load.image('wind33', 'assets/grade3Assets/1.2B/reduced/wind33.png');
        
        
        //Copy from Boot------------
        this.load.audio('bgSound', 'questionSounds/1.2B/BackgroundSound.mp3');
		this.load.audio('rightSound', 'questionSounds/1.2B/celebration.mp3');
		this.load.audio('wrongSound', 'questionSounds/1.2B/WrongCelebrationSound.mp3');
		this.load.audio('clickSound', 'questionSounds/1.2B/ClickSound.mp3');
		this.load.audio('snapSound', 'questionSounds/1.2B/snapSound.mp3');
		//this.load.audio('spin1', 'questionSounds/1.2B/spin1.mp3');
		this.load.audio('spin2', 'questionSounds/1.2B/spin2.mp3');
        this.load.audio('Eng_12A1', 'questionSounds/1.2B/English/1.2A1.mp3');
        this.load.audio('Eng_12A2', 'questionSounds/1.2B/English/1.2A2.mp3');
        this.load.audio('Eng_12A3', 'questionSounds/1.2B/English/1.2A3.mp3');
        this.load.audio('Eng_12B1', 'questionSounds/1.2B/English/1.2B1.mp3');
        this.load.audio('Eng_12B2', 'questionSounds/1.2B/English/1.2B2.mp3');
        this.load.audio('Eng_12B3', 'questionSounds/1.2B/English/1.2B3.mp3');
        this.load.audio('Eng_12B5', 'questionSounds/1.2B/English/1.2B5.mp3');
        this.load.audio('Eng_12C1', 'questionSounds/1.2B/English/1.2C1.mp3');
        this.load.audio('Eng_12C2', 'questionSounds/1.2B/English/1.2C2.mp3');
        this.load.audio('Eng_12C3', 'questionSounds/1.2B/English/1.2C3.mp3');
        this.load.audio('Kan_12A1', 'questionSounds/1.2B/Kannada/1.2A1.mp3');
        this.load.audio('Kan_12A2', 'questionSounds/1.2B/Kannada/1.2A2.mp3');
        this.load.audio('Kan_12A3', 'questionSounds/1.2B/Kannada/1.2A3.mp3');
        this.load.audio('Kan_12B1', 'questionSounds/1.2B/Kannada/1.2B1.mp3');
        this.load.audio('Kan_12B2', 'questionSounds/1.2B/Kannada/1.2B2.mp3');
        this.load.audio('Kan_12B3', 'questionSounds/1.2B/Kannada/1.2B3.mp3');
        this.load.audio('Kan_12B5', 'questionSounds/1.2B/Kannada/1.2B5.mp3');
        this.load.audio('Kan_12C1', 'questionSounds/1.2B/Kannada/1.2C1.mp3');
        this.load.audio('Kan_12C2', 'questionSounds/1.2B/Kannada/1.2C2.mp3');
        this.load.audio('Kan_12C3', 'questionSounds/1.2B/Kannada/1.2C3.mp3');
        this.load.audio('Hin_12A1', 'questionSounds/1.2B/Hindi/1.2A1.mp3');
        this.load.audio('Hin_12A2', 'questionSounds/1.2B/Hindi/1.2A2.mp3');
        this.load.audio('Hin_12A3', 'questionSounds/1.2B/Hindi/1.2A3.mp3');
        this.load.audio('Hin_12B1', 'questionSounds/1.2B/Hindi/1.2B1.mp3');
        this.load.audio('Hin_12B2', 'questionSounds/1.2B/Hindi/1.2B2.mp3');
        this.load.audio('Hin_12B3', 'questionSounds/1.2B/Hindi/1.2B3.mp3');
        this.load.audio('Hin_12B5', 'questionSounds/1.2B/Hindi/1.2B5.mp3');
        this.load.audio('Hin_12C1', 'questionSounds/1.2B/Hindi/1.2C1.mp3');
        this.load.audio('Hin_12C2', 'questionSounds/1.2B/Hindi/1.2C2.mp3');
        this.load.audio('Hin_12C3', 'questionSounds/1.2B/Hindi/1.2C3.mp3');
		
		this.load.onLoadComplete.add(this.onloadComplete,this);
        
	},


	onloadComplete:function(){
		this.load.onLoadComplete.removeAll();  
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
		
		
		this.sound.setDecodedCallback([spin2,snapSound,Eng_12A1,Eng_12A2,Eng_12A3,Eng_12B1,Eng_12B2,Eng_12B3,Eng_12B5,Eng_12C1,Eng_12C2,Eng_12C3,Kan_12A1,Kan_12A2,Kan_12A3,Kan_12B1,Kan_12B2,Kan_12B3,Kan_12B5,Kan_12C1,Kan_12C2,Kan_12C3,Hin_12A1,Hin_12A2,Hin_12A3,Hin_12B1,Hin_12B2,Hin_12B3,Hin_12B5,Hin_12C1,Hin_12C2,Hin_12C3 ], function(){
		
		this.state.start('grade1_2Blevel1');
			
			}, this);
	}
}