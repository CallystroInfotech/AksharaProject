Game.grade2_3preloader=function(game){
	//this.preloadBar=null;
	
	var Eng_23_1,Eng_23_2,Eng_23_3,Eng_23_4,Eng_23_5,Eng_23_6,Eng_23_7,Eng_23_8,Eng_23_4option;
    var Kan_23_1,Kan_23_2,Kan_23_3,Kan_23_4,Kan_23_5,Kan_23_6,Kan_23_7,Kan_23_8;
    var Hin_23_1,Hin_23_2,Hin_23_3,Hin_23_4,Hin_23_5,Hin_23_6,Hin_23_7,Hin_23_8;
};

Game.grade2_3preloader.prototype={
	preload:function(){
    
	
	var bg = this.add.sprite(0,-80,'Level31_Level31_CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'Level31_Level31_preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
		
		this.load.atlas('CommonBackBtn','Level31_Level31_assets/commonAssets/backbtn.png','Level31_Level31_json/commonJson/backbtn.json');
		this.load.atlas('CommonSpeakerBtn','Level31_Level31_assets/commonAssets/speaker.png','Level31_Level31_json/commonJson/speaker.json');
		//this.load.atlas('CommonReplayBtn','Level31_Level31_assets/commonAssets/replay.png','Level31_Level31_json/commonJson/replay.json');
		this.load.atlas('CommonStarAnim','Level31_Level31_assets/commonAssets/starAnim.png','Level31_Level31_json/commonJson/starAnim.json');

		
		this.load.atlas('CommonHomeBtn','Level31_Level31_assets/commonAssets/homeBtn.png','Level31_Level31_assets/commonAssets/homeBtn.json');	
		this.load.atlas('CommonNextBtn','Level31_Level31_assets/commonAssets/nextBtn.png','Level31_Level31_assets/commonAssets/nextBtn.json');	
		this.load.atlas('CommonReplayBtn','Level31_Level31_assets/commonAssets/replayBtn.png','Level31_Level31_assets/commonAssets/replayBtn.json');
		
        this.load.image('bg1','Level31_Level31_assets/grade1Assets/2.3/bg1.png');
        this.load.image('bg3','Level31_Level31_assets/grade1Assets/2.3/bg3.png');
        this.load.image('title','Level31_Level31_assets/grade1Assets/2.3/title.png');
        this.load.image('tittleBaar','Level31_Level31_assets/grade1Assets/2.3/tittleBaar.png');
        this.load.atlas('replay','Level31_Level31_assets/grade1Assets/2.3/reply.png' ,'Level31_Level31_json/grade1Json/2.3/reply.json');
        this.load.atlas('btn','Level31_Level31_assets/grade1Assets/2.3/btn.png','Level31_Level31_json/grade1Json/2.3/btn.json');
       
        this.load.atlas('backbtn','Level31_Level31_assets/grade1Assets/2.3/backbtn.png' ,'Level31_Level31_json/grade1Json/2.3/backbtn.json');
        this.load.atlas('speaker','Level31_Level31_assets/grade1Assets/2.3/speaker.png' ,'Level31_Level31_json/grade1Json/2.3/speaker.json');
        this.load.atlas('starAnim','Level31_Level31_assets/grade1Assets/2.3/starAnim.png','Level31_Level31_json/grade1Json/2.3/starAnim.json');
  
        this.load.atlas('numberbtn1','Level31_Level31_assets/grade1Assets/2.3/numberbtn1.png' ,'Level31_Level31_json/grade1Json/2.3/numberbtn1.json');
        this.load.atlas('numberbtn2','Level31_Level31_assets/grade1Assets/2.3/numberbtn2.png' ,'Level31_Level31_json/grade1Json/2.3/numberbtn2.json');
        this.load.atlas('numberbtn3','Level31_Level31_assets/grade1Assets/2.3/numberbtn3.png' ,'Level31_Level31_json/grade1Json/2.3/numberbtn3.json');
        this.load.atlas('numberbtn4','Level31_Level31_assets/grade1Assets/2.3/numberbtn4.png' ,'Level31_Level31_json/grade1Json/2.3/numberbtn4.json');
        this.load.atlas('numberbtn5','Level31_Level31_assets/grade1Assets/2.3/numberbtn5.png' ,'Level31_Level31_json/grade1Json/2.3/numberbtn5.json');
        this.load.atlas('numberbtn6','Level31_Level31_assets/grade1Assets/2.3/numberbtn6.png' ,'Level31_Level31_json/grade1Json/2.3/numberbtn6.json');
        this.load.atlas('numberbtn7','Level31_Level31_assets/grade1Assets/2.3/numberbtn7.png' ,'Level31_Level31_json/grade1Json/2.3/numberbtn7.json');
        this.load.atlas('numberbtn8','Level31_Level31_assets/grade1Assets/2.3/numberbtn8.png' ,'Level31_Level31_json/grade1Json/2.3/numberbtn8.json');
        this.load.atlas('numberbtn9','Level31_Level31_assets/grade1Assets/2.3/numberbtn9.png' ,'Level31_Level31_json/grade1Json/2.3/numberbtn9.json');
        
        this.load.atlas('tree1','Level31_Level31_assets/grade1Assets/2.3/tree1.png' ,'Level31_Level31_json/grade1Json/2.3/tree1.json');
        this.load.image('leaf1','Level31_Level31_assets/grade1Assets/2.3/leaf1.png');
        this.load.image('line1','Level31_Level31_assets/grade1Assets/2.3/line1.png');
        this.load.atlas('leaf','Level31_Level31_assets/grade1Assets/2.3/leaf.png' ,'Level31_Level31_json/grade1Json/2.3/leaf.json');
        
        this.load.atlas('pencil','Level31_Level31_assets/grade1Assets/2.3/pencil.png' ,'Level31_Level31_json/grade1Json/2.3/pencil.json');
        this.load.image('cutter1','Level31_Level31_assets/grade1Assets/2.3/cutter1.png');
        this.load.atlas('cutters','Level31_Level31_assets/grade1Assets/2.3/cutters.png' ,'Level31_Level31_json/grade1Json/2.3/cutters.json');
        
        this.load.atlas('crocodile','Level31_Level31_assets/grade1Assets/2.3/crocodile.png' ,'Level31_Level31_json/grade1Json/2.3/crocodile.json');
        this.load.atlas('crocs','Level31_Level31_assets/grade1Assets/2.3/crocs.png' ,'Level31_Level31_json/grade1Json/2.3/crocs.json');
        this.load.image('line2','Level31_Level31_assets/grade1Assets/2.3/line2.png');
        this.load.image('crocodile1','Level31_Level31_assets/grade1Assets/2.3/crocodile1.png');
        
        this.load.atlas('snake','Level31_Level31_assets/grade1Assets/2.3/Snake.png' ,'Level31_Level31_json/grade1Json/2.3/Snake.json');
        this.load.atlas('buggs','Level31_Level31_assets/grade1Assets/2.3/Buggs.png' ,'Level31_Level31_json/grade1Json/2.3/Buggs.json');
        this.load.image('bug1','Level31_Level31_assets/grade1Assets/2.3/bug1.png');
        
        this.load.atlas('Window','Level31_Level31_assets/grade1Assets/2.3/Window.png' ,'Level31_Level31_json/grade1Json/2.3/window.json');
        this.load.atlas('palms','Level31_Level31_assets/grade1Assets/2.3/palms.png' ,'Level31_Level31_json/grade1Json/2.3/palms.json');
        this.load.image('palm1','Level31_Level31_assets/grade1Assets/2.3/palm1.png');
        
        this.load.atlas('petrol','Level31_Level31_assets/grade1Assets/2.3/petrol.png' ,'Level31_Level31_json/grade1Json/2.3/petrol.json');
        this.load.atlas('petrol111','Level31_Level31_assets/grade1Assets/2.3/petrol111.png' ,'Level31_Level31_json/grade1Json/2.3/petrol111.json');
         this.load.atlas('petrolbooth','Level31_Level31_assets/grade1Assets/2.3/petrolbooth.png' ,'Level31_Level31_json/grade1Json/2.3/petrolbooth.json');
        
        this.load.atlas('tablebox','Level31_Level31_assets/grade1Assets/2.3/tablebox.png' ,'Level31_Level31_json/grade1Json/2.3/tablebox.json');
        
        this.load.atlas('Can','Level31_Level31_assets/grade1Assets/2.3/Can.png' ,'Level31_Level31_json/grade1Json/2.3/Can.json');
        this.load.image('Line8','Level31_Level31_assets/grade1Assets/2.3/Line8.png');
        
        this.load.atlas('Shoes','Level31_Level31_assets/grade1Assets/2.3/Shoes.png' ,'Level31_Level31_json/grade1Json/2.3/Shoes.json');
        this.load.atlas('palm22','Level31_Level31_assets/grade1Assets/2.3/palm22.png' ,'Level31_Level31_json/grade1Json/2.3/palm22.json');
        this.load.image('Line9','Level31_Level31_assets/grade1Assets/2.3/Line9.png');
        this.load.image('palm2','Level31_Level31_assets/grade1Assets/2.3/palm2.png');
        
        this.load.atlas('soffa','Level31_Level31_assets/grade1Assets/2.3/Soffa.png' ,'Level31_Level31_json/grade1Json/2.3/Soffa.json');
        this.load.image('Line10','Level31_Level31_assets/grade1Assets/2.3/Line10.png');      
                
        this.load.atlas('Longtable','Level31_Level31_assets/grade1Assets/2.3/Longtable.png' ,'Level31_Level31_json/grade1Json/2.3/Longtable.json');
        this.load.image('Line11','Level31_Level31_assets/grade1Assets/2.3/Line11.png');    
        
        this.load.atlas('Suitcase','Level31_Level31_assets/grade1Assets/2.3/Suitcase.png' ,'Level31_Level31_json/grade1Json/2.3/Suitcase.json');
        this.load.image('Line12','Level31_Level31_assets/grade1Assets/2.3/Line12.png'); 
        
        
          this.load.atlas('Car','Level31_Level31_assets/grade1Assets/2.3/Car.png' ,'Level31_Level31_json/grade1Json/2.3/Car.json');
        this.load.atlas('hand','Level31_Level31_assets/grade1Assets/2.3/hand.png' ,'Level31_Level31_json/grade1Json/2.3/hand.json');
        this.load.image('Line13','Level31_Level31_assets/grade1Assets/2.3/Line13.png');
        this.load.image('hand1','Level31_Level31_assets/grade1Assets/2.3/hand1.png');
        
         
          this.load.atlas('gate','Level31_Level31_assets/grade1Assets/2.3/gate.png' ,'Level31_Level31_json/grade1Json/2.3/gate.json');
    this.load.image('Line14','Level31_Level31_assets/grade1Assets/2.3/Line14.png');
        
              this.load.atlas('Table','Level31_Level31_assets/grade1Assets/2.3/Table.png' ,'Level31_Level31_json/grade1Json/2.3/Table.json');
    this.load.image('Line15','Level31_Level31_assets/grade1Assets/2.3/Line15.png');
        
        this.load.atlas('rope','Level31_Level31_assets/grade1Assets/2.3/rope.png' ,'Level31_Level31_json/grade1Json/2.3/rope.json');
    this.load.image('Line16','Level31_Level31_assets/grade1Assets/2.3/Line16.png');
        
                this.load.atlas('Chair','Level31_Level31_assets/grade1Assets/2.3/Chair.png' ,'Level31_Level31_json/grade1Json/2.3/Chair.json');
        this.load.atlas('hand11','Level31_Level31_assets/grade1Assets/2.3/hand11.png' ,'Level31_Level31_json/grade1Json/2.3/hand11.json');
        this.load.image('Line17','Level31_Level31_assets/grade1Assets/2.3/Line17.png');
        this.load.image('hand111','Level31_Level31_assets/grade1Assets/2.3/hand111.png');
        
             this.load.atlas('door','Level31_Level31_assets/grade1Assets/2.3/door.png' ,'Level31_Level31_json/grade1Json/2.3/door.json');
        this.load.image('Line18','Level31_Level31_assets/grade1Assets/2.3/Line18.png');
        
        
            this.load.atlas('flower','Level31_Level31_assets/grade1Assets/2.3/flower.png' ,'Level31_Level31_json/grade1Json/2.3/flower.json');
        this.load.image('Line19','Level31_Level31_assets/grade1Assets/2.3/Line19.png');
        
        
            this.load.atlas('flower1','Level31_Level31_assets/grade1Assets/2.3/flower1.png' ,'Level31_Level31_json/grade1Json/2.3/flower1.json');
        this.load.image('Line20','Level31_Level31_assets/grade1Assets/2.3/Line20.png');
        
        
        
        //from 21
        this.load.atlas('ladder','Level31_Level31_assets/grade1Assets/2.3/ladder.png' ,'Level31_Level31_json/grade1Json/2.3/ladder.json');
        this.load.atlas('feets','Level31_Level31_assets/grade1Assets/2.3/feets.png' ,'Level31_Level31_json/grade1Json/2.3/feets.json');
        this.load.atlas('feets101','Level31_Level31_assets/grade1Assets/2.3/feets101.png' ,'Level31_Level31_json/grade1Json/2.3/feets101.json');
        this.load.image('Line21','Level31_Level31_assets/grade1Assets/2.3/Line21.png');
        this.load.image('feet1','Level31_Level31_assets/grade1Assets/2.3/feet1.png');
        this.load.image('feet2','Level31_Level31_assets/grade1Assets/2.3/feet2.png');
        
        this.load.atlas('House','Level31_Level31_assets/grade1Assets/2.3/House.png' ,'Level31_Level31_json/grade1Json/2.3/House.json');
        this.load.image('Line22','Level31_Level31_assets/grade1Assets/2.3/Line22.png');
        
        this.load.atlas('gate2','Level31_Level31_assets/grade1Assets/2.3/gate2.png' ,'Level31_Level31_json/grade1Json/2.3/gate2.json');
        this.load.image('Line23','Level31_Level31_assets/grade1Assets/2.3/Line23.png');
        
        this.load.atlas('treee','Level31_Level31_assets/grade1Assets/2.3/treee.png' ,'Level31_Level31_json/grade1Json/2.3/treee.json');
        this.load.image('Line24','Level31_Level31_assets/grade1Assets/2.3/Line24.png');
        
        this.load.atlas('ladder2','Level31_Level31_assets/grade1Assets/2.3/ladder2.png' ,'Level31_Level31_json/grade1Json/2.3/ladder2.json');
        this.load.atlas('ropes11','Level31_Level31_assets/grade1Assets/2.3/ropes11.png' ,'Level31_Level31_json/grade1Json/2.3/ropes11.json');
        this.load.image('Line28','Level31_Level31_assets/grade1Assets/2.3/Line28.png');
        this.load.image('rope11','Level31_Level31_assets/grade1Assets/2.3/rope11.png');
        
        this.load.atlas('door111','Level31_Level31_assets/grade1Assets/2.3/door111.png' ,'Level31_Level31_json/grade1Json/2.3/door111.json');
        this.load.image('Line27','Level31_Level31_assets/grade1Assets/2.3/Line27.png');
        
        this.load.atlas('petrol111','Level31_Level31_assets/grade1Assets/2.3/petrol111.png' ,'Level31_Level31_json/grade1Json/2.3/petrol111.json');
        this.load.image('Line26','Level31_Level31_assets/grade1Assets/2.3/Line26.png');
        
        this.load.atlas('flower111','Level31_Level31_assets/grade1Assets/2.3/flower111.png' ,'Level31_Level31_json/grade1Json/2.3/flower111.json');
        this.load.image('Line25','Level31_Level31_assets/grade1Assets/2.3/Line25.png');
        
        this.load.atlas('car111','Level31_Level31_assets/grade1Assets/2.3/car111.png' ,'Level31_Level31_json/grade1Json/2.3/car111.json');
        this.load.atlas('ropes111','Level31_Level31_assets/grade1Assets/2.3/ropes111.png' ,'Level31_Level31_json/grade1Json/2.3/ropes111.json');
        this.load.image('Line32','Level31_Level31_assets/grade1Assets/2.3/Line32.png');
        this.load.image('rope111','Level31_Level31_assets/grade1Assets/2.3/rope111.png');
        
        this.load.atlas('gate21','Level31_Level31_assets/grade1Assets/2.3/gate21.png' ,'Level31_Level31_json/grade1Json/2.3/gate21.json');
        this.load.image('Line31','Level31_Level31_assets/grade1Assets/2.3/Line31.png');
        
         this.load.atlas('longtable111','Level31_Level31_assets/grade1Assets/2.3/longtable111.png' ,'Level31_Level31_json/grade1Json/2.3/longtable111.json');
        this.load.image('Line30','Level31_Level31_assets/grade1Assets/2.3/Line30.png');
        
        this.load.atlas('shoes111','Level31_Level31_assets/grade1Assets/2.3/shoes111.png' ,'Level31_Level31_json/grade1Json/2.3/shoes111.json');
        this.load.image('Line29','Level31_Level31_assets/grade1Assets/2.3/Line29.png');
        
        //copy from boot
        this.load.audio('baudio', 'sounds/BackgroundSound.mp3');
        this.load.audio('waudio', 'sounds/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'sounds/ClickSound.mp3');
		this.load.audio('celebr', 'sounds/celebration.mp3');
        this.load.audio('OhSound', 'sounds/OhSound.mp3');
        this.load.audio('aiyoh', 'sounds/aiyoh.mp3');
         this.load.audio('snapSound', 'sounds/snapSound.mp3');
		 
        this.load.audio('Eng_23_1', 'questionSounds/2.3/English/2.3_1.mp3');
        this.load.audio('Eng_23_2', 'questionSounds/2.3/English/2.3_2.mp3');
        this.load.audio('Eng_23_3', 'questionSounds/2.3/English/2.3_3.mp3');
        this.load.audio('Eng_23_4', 'questionSounds/2.3/English/2.3_4.mp3');
        this.load.audio('Eng_23_5', 'questionSounds/2.3/English/2.3_5.mp3');
        this.load.audio('Eng_23_6', 'questionSounds/2.3/English/2.3_6.mp3');
        this.load.audio('Eng_23_7', 'questionSounds/2.3/English/2.3_7.mp3');
        this.load.audio('Eng_23_8', 'questionSounds/2.3/English/2.3_8.mp3');
        this.load.audio('Eng_23_4option', 'questionSounds/2.3/English/2.3_4 option.mp3');
        
        
        this.load.audio('Kan_23_1', 'questionSounds/2.3/Kannada/2.3_1.mp3');
        this.load.audio('Kan_23_2', 'questionSounds/2.3/Kannada/2.3_2.mp3');
        this.load.audio('Kan_23_3', 'questionSounds/2.3/Kannada/2.3_3.mp3');
        this.load.audio('Kan_23_4', 'questionSounds/2.3/Kannada/2.3_4.mp3');
        this.load.audio('Kan_23_5', 'questionSounds/2.3/Kannada/2.3_5.mp3');
        this.load.audio('Kan_23_6', 'questionSounds/2.3/Kannada/2.3_6.mp3');
        this.load.audio('Kan_23_7', 'questionSounds/2.3/Kannada/2.3_7.mp3');
        this.load.audio('Kan_23_8', 'questionSounds/2.3/Kannada/2.3_8.mp3');
        
        this.load.audio('Hin_23_1', 'questionSounds/2.3/Hindi/2.3_1.mp3');
        this.load.audio('Hin_23_2', 'questionSounds/2.3/Hindi/2.3_2.mp3');
        this.load.audio('Hin_23_3', 'questionSounds/2.3/Hindi/2.3_3.mp3');
        this.load.audio('Hin_23_4', 'questionSounds/2.3/Hindi/2.3_4.mp3');
        this.load.audio('Hin_23_5', 'questionSounds/2.3/Hindi/2.3_5.mp3');
        this.load.audio('Hin_23_6', 'questionSounds/2.3/Hindi/2.3_6.mp3');
        this.load.audio('Hin_23_7', 'questionSounds/2.3/Hindi/2.3_7.mp3');
        this.load.audio('Hin_23_8', 'questionSounds/2.3/Hindi/2.3_8.mp3');
        
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
		
    	Eng_23_1=this.add.audio('Eng_23_1');
        Eng_23_2=this.add.audio('Eng_23_2');
        Eng_23_3=this.add.audio('Eng_23_3');
        Eng_23_4=this.add.audio('Eng_23_4');
        Eng_23_5=this.add.audio('Eng_23_5');
        Eng_23_6=this.add.audio('Eng_23_6');
        Eng_23_7=this.add.audio('Eng_23_7');
        Eng_23_8=this.add.audio('Eng_23_8');
        Eng_23_4option=this.add.audio('Eng_23_4option');
        Kan_23_1=this.add.audio('Kan_23_1');
        Kan_23_2=this.add.audio('Kan_23_2');
        Kan_23_3=this.add.audio('Kan_23_3');
        Kan_23_4=this.add.audio('Kan_23_4');
        Kan_23_5=this.add.audio('Kan_23_5');
        Kan_23_6=this.add.audio('Kan_23_6');
        Kan_23_7=this.add.audio('Kan_23_7');
        Kan_23_8=this.add.audio('Kan_23_8');
        Hin_23_1=this.add.audio('Hin_23_1');
        Hin_23_2=this.add.audio('Hin_23_2');
        Hin_23_3=this.add.audio('Hin_23_3');
        Hin_23_4=this.add.audio('Hin_23_4');
        Hin_23_5=this.add.audio('Hin_23_5');
        Hin_23_6=this.add.audio('Hin_23_6');
        Hin_23_7=this.add.audio('Hin_23_7');
        Hin_23_8=this.add.audio('Hin_23_8');
		
		
		this.sound.setDecodedCallback([baudio,celebr,waudio,ClickSound,OhSound,snapSound,Eng_23_1,Eng_23_2,Eng_23_3,Eng_23_4,Eng_23_5,Eng_23_6,Eng_23_7,Eng_23_8,Eng_23_4option,Kan_23_1,Kan_23_2,Kan_23_3,Kan_23_4,Kan_23_5,Kan_23_6,Kan_23_7,Kan_23_8,Hin_23_1,Hin_23_2,Hin_23_3,Hin_23_4,Hin_23_5,Hin_23_6,Hin_23_7,Hin_23_8 ], function(){
		baudio.play(); 
			baudio.loopFull(0.6);
			baudio.volume = 0.3;
		this.state.start('grade2_3level1');
			
			}, this);
	}
}