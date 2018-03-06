Game.grade4_1Bpreloader=function(game){
	//this.preloadBar=null;
		var baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFill;
        var bgSound,rightSound,wrongSound,ClickSound;
        var Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1;
        var Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1;
        var Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1;
};

Game.grade4_1Bpreloader.prototype={
	preload:function(){
            

        var baudio,celebr,waudio,ClickSound,aiyoh,OhSound;
        var bgSound,rightSound,wrongSound,ClickSound,Eng_41A1,Kan_41A1,Hin_41A1,Eng_41A2,Kan_41A2,Hin_41A2,Eng_41A3,Kan_41A3,Hin_41A3,Kan_41C2,
            Hin_41C2,Eng_41C2,Eng_41B2,Kan_41B2,Hin_41B2,Eng_41C1,Kan_41C1,Hin_41C1;
			
        var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);

        this.load.image('bg1','assets/grade4Assets/4.1B/commonAssets/bg1.png');
        this.load.atlas('backbtn','assets/grade4Assets/4.1B/commonAssets/backbtn.png' ,'json/grade4Json/4.1B/backbtn.json');
        this.load.atlas('speaker','assets/grade4Assets/4.1B/commonAssets/speaker.png' ,'json/grade4Json/4.1B/speaker.json');
        this.load.atlas('starAnim','assets/grade4Assets/4.1B/commonAssets/starAnim.png','json/grade4Json/4.1B/starAnim.json');
        this.load.image('cloud','assets/grade4Assets/4.1B/commonAssets/cloud.png');
        this.load.atlas('btn','assets/grade4Assets/4.1B/commonAssets/btn.png','json/grade4Json/4.1B/btn.json');
        this.load.image('bg3','assets/grade4Assets/4.1B/commonAssets/bg3.png');
        this.load.image('tittleBaar','assets/grade4Assets/4.1B/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade4Assets/4.1B/commonAssets/reply.png' ,'json/grade4Json/4.1B/reply.json');
        
        //My files to load
        this.load.atlas('gameBox','assets/grade4Assets/4.1B/gameAssets/gameBox.png' ,'json/grade4Json/4.1B/gameBox.json');
        this.load.atlas('allimg','assets/grade4Assets/4.1B/gameAssets/allimg.png' ,'json/grade4Json/4.1B/allimg.json');
        this.load.atlas('tickMark','assets/grade4Assets/4.1B/gameAssets/tickMark.png' ,'json/grade4Json/4.1B/tickMark.json');
        this.load.image('croc','assets/grade4Assets/4.1B/gameAssets/croc.png');
        
        this.load.image('glow','assets/grade4Assets/4.1B/gameAssets/glow.png');
        
        //game items
        this.load.image('cup1','assets/grade4Assets/4.1B/gameAssets/1.png');
        this.load.image('cup2','assets/grade4Assets/4.1B/gameAssets/2.png');
        this.load.image('cup3','assets/grade4Assets/4.1B/gameAssets/3.png');
        this.load.image('cup4','assets/grade4Assets/4.1B/gameAssets/4.png');
        
        this.load.image('bucket1','assets/grade4Assets/4.1B/gameAssets/5.png');
        this.load.image('bucket2','assets/grade4Assets/4.1B/gameAssets/6.png');
        this.load.image('bucket3','assets/grade4Assets/4.1B/gameAssets/7.png');
        this.load.image('bucket4','assets/grade4Assets/4.1B/gameAssets/8.png');
        
        this.load.image('jug1','assets/grade4Assets/4.1B/gameAssets/9.png');
        this.load.image('jug2','assets/grade4Assets/4.1B/gameAssets/10.png');
        this.load.image('jug3','assets/grade4Assets/4.1B/gameAssets/11.png');
        this.load.image('jug4','assets/grade4Assets/4.1B/gameAssets/12.png');
        
        this.load.image('flask1','assets/grade4Assets/4.1B/gameAssets/13.png');
        this.load.image('flask2','assets/grade4Assets/4.1B/gameAssets/14.png');
        this.load.image('flask3','assets/grade4Assets/4.1B/gameAssets/15.png');
        this.load.image('flask4','assets/grade4Assets/4.1B/gameAssets/16.png');
        
        this.load.image('bottle1','assets/grade4Assets/4.1B/gameAssets/17.png');
        this.load.image('bottle2','assets/grade4Assets/4.1B/gameAssets/18.png');
        this.load.image('bottle3','assets/grade4Assets/4.1B/gameAssets/19.png');
        this.load.image('bottle4','assets/grade4Assets/4.1B/gameAssets/20.png');
        
        this.load.image('milk1','assets/grade4Assets/4.1B/gameAssets/21.png');
        this.load.image('milk2','assets/grade4Assets/4.1B/gameAssets/22.png');
        this.load.image('milk3','assets/grade4Assets/4.1B/gameAssets/23.png');
        this.load.image('milk4','assets/grade4Assets/4.1B/gameAssets/24.png');
        
        this.load.image('shadow1','assets/grade4Assets/4.1B/gameAssets/shadow1.png');
        this.load.image('shadow2','assets/grade4Assets/4.1B/gameAssets/shadow2.png');
        this.load.image('shadow3','assets/grade4Assets/4.1B/gameAssets/shadow3.png');
        this.load.image('shadow4','assets/grade4Assets/4.1B/gameAssets/shadow4.png');
        this.load.image('shadow5','assets/grade4Assets/4.1B/gameAssets/shadow5.png');
        this.load.image('shadow6','assets/grade4Assets/4.1B/gameAssets/shadow6.png');
        
        //Loading 4.1C Assets
        this.load.atlas('gameBox3','assets/grade4Assets/4.1B/gameAssets/gameBox3.png' ,'json/grade4Json/4.1B/gameBox3.json');
        this.load.atlas('allimages','assets/grade4Assets/4.1B/gameAssets/allimages.png' ,'json/grade4Json/4.1B/allimages.json');
        this.load.image('bluebottle1','assets/grade4Assets/4.1B/gameAssets/bluebottle1.png');
        this.load.image('bluebottle2','assets/grade4Assets/4.1B/gameAssets/bluebottle2.png');
        
        this.load.image('glassfull1','assets/grade4Assets/4.1B/gameAssets/glassfull1.png');
        this.load.image('glassfull2','assets/grade4Assets/4.1B/gameAssets/glassfull2.png');
        this.load.image('glassfull3','assets/grade4Assets/4.1B/gameAssets/glassfull3.png');
        this.load.image('glassfull4','assets/grade4Assets/4.1B/gameAssets/glassfull4.png');
        
        this.load.image('greendrum1','assets/grade4Assets/4.1B/gameAssets/greendrum1.png');
        this.load.image('greendrum2','assets/grade4Assets/4.1B/gameAssets/greendrum2.png');
        this.load.image('greendrum3','assets/grade4Assets/4.1B/gameAssets/greendrum3.png');
        
        this.load.image('greenmug1','assets/grade4Assets/4.1B/gameAssets/greenmug1.png');
        this.load.image('greenmug2','assets/grade4Assets/4.1B/gameAssets/greenmug2.png');
        
        this.load.image('greencup1','assets/grade4Assets/4.1B/gameAssets/greencup1.png');
        this.load.image('greencup2','assets/grade4Assets/4.1B/gameAssets/greencup2.png');
        
        this.load.image('greenpot1','assets/grade4Assets/4.1B/gameAssets/greenpot1.png');
        this.load.image('greenpot2','assets/grade4Assets/4.1B/gameAssets/greenpot2.png');
        this.load.image('greenpot3','assets/grade4Assets/4.1B/gameAssets/greenpot3.png');
        this.load.image('greenpot4','assets/grade4Assets/4.1B/gameAssets/greenpot4.png');
        
        this.load.image('orangebucket1','assets/grade4Assets/4.1B/gameAssets/orangebucket1.png');
        this.load.image('orangebucket2','assets/grade4Assets/4.1B/gameAssets/orangebucket2.png');
        
        this.load.image('orangecan1','assets/grade4Assets/4.1B/gameAssets/orangecan1.png');
        this.load.image('orangecan2','assets/grade4Assets/4.1B/gameAssets/orangecan2.png');
        this.load.image('orangecan3','assets/grade4Assets/4.1B/gameAssets/orangecan3.png');
        
        this.load.image('orangejug1','assets/grade4Assets/4.1B/gameAssets/orangejug1.png');
        this.load.image('orangejug2','assets/grade4Assets/4.1B/gameAssets/orangejug2.png');
        
        this.load.image('pinkbucket1','assets/grade4Assets/4.1B/gameAssets/pinkbucket1.png');
        this.load.image('pinkbucket2','assets/grade4Assets/4.1B/gameAssets/pinkbucket2.png');
        this.load.image('pinkbucket3','assets/grade4Assets/4.1B/gameAssets/pinkbucket3.png');
        
        this.load.image('pinkmug1','assets/grade4Assets/4.1B/gameAssets/pinkmug1.png');
        this.load.image('pinkmug2','assets/grade4Assets/4.1B/gameAssets/pinkmug2.png');
        
        this.load.image('redjug1','assets/grade4Assets/4.1B/gameAssets/redjug1.png');
        this.load.image('redjug2','assets/grade4Assets/4.1B/gameAssets/redjug2.png');
        this.load.image('redjug3','assets/grade4Assets/4.1B/gameAssets/redjug3.png');
        this.load.image('redjug4','assets/grade4Assets/4.1B/gameAssets/redjug4.png');
        
        this.load.image('syntex1','assets/grade4Assets/4.1B/gameAssets/syntex1.png');
        this.load.image('syntex2','assets/grade4Assets/4.1B/gameAssets/syntex2.png');
        
        this.load.image('whitemug1','assets/grade4Assets/4.1B/gameAssets/whitemug1.png');
        this.load.image('whitesoda1','assets/grade4Assets/4.1B/gameAssets/whitesoda1.png');
        this.load.image('whitesoda2','assets/grade4Assets/4.1B/gameAssets/whitesoda2.png');
        
        this.load.image('yellowct1','assets/grade4Assets/4.1B/gameAssets/yellowct1.png');
        this.load.image('bottleone','assets/grade4Assets/4.1B/gameAssets/bottleone.png');
        
        this.load.image('bluebottle1_shadow','assets/grade4Assets/4.1B/gameAssets/bluebottle1_shadow.png');
        this.load.image('glassfull1_shadow','assets/grade4Assets/4.1B/gameAssets/glassfull1_shadow.png');
        this.load.image('glassfull2_shadow','assets/grade4Assets/4.1B/gameAssets/glassfull2_shadow.png');
        this.load.image('greendrum1_shadow','assets/grade4Assets/4.1B/gameAssets/greendrum1_shadow.png');
        this.load.image('greendrum2_shadow','assets/grade4Assets/4.1B/gameAssets/greendrum2_shadow.png');
        this.load.image('greenmug1_shadow','assets/grade4Assets/4.1B/gameAssets/greenmug1_shadow.png');
        this.load.image('greenpot1_shadow','assets/grade4Assets/4.1B/gameAssets/greenpot1_shadow.png');
        this.load.image('orangebucket1_shadow','assets/grade4Assets/4.1B/gameAssets/orangebucket1_shadow.png');
        this.load.image('orangebucket2_shadow','assets/grade4Assets/4.1B/gameAssets/orangebucket2_shadow.png');
        this.load.image('orangecan1_shadow','assets/grade4Assets/4.1B/gameAssets/orangecan1_shadow.png');
        this.load.image('orangecan2_shadow','assets/grade4Assets/4.1B/gameAssets/orangecan2_shadow.png');
        this.load.image('orangejug1_shadow','assets/grade4Assets/4.1B/gameAssets/orangejug1_shadow.png');
        this.load.image('orangejug2_shadow','assets/grade4Assets/4.1B/gameAssets/orangejug2_shadow.png');
        this.load.image('pinkbucket1_shadow','assets/grade4Assets/4.1B/gameAssets/pinkbucket1_shadow.png');
        this.load.image('pinkbucket2_shadow','assets/grade4Assets/4.1B/gameAssets/pinkbucket2_shadow.png');
        this.load.image('pinkmug1_shadow','assets/grade4Assets/4.1B/gameAssets/pinkmug1_shadow.png');
        this.load.image('redjug1_shadow','assets/grade4Assets/4.1B/gameAssets/redjug1_shadow.png');
        this.load.image('syntex1_shadow','assets/grade4Assets/4.1B/gameAssets/syntex1_shadow.png');
        this.load.image('syntex2_shadow','assets/grade4Assets/4.1B/gameAssets/syntex2_shadow.png');
        this.load.image('whitemug1_shadow','assets/grade4Assets/4.1B/gameAssets/whitemug1_shadow.png');
        this.load.image('whitesoda1_shadow','assets/grade4Assets/4.1B/gameAssets/whitesoda1_shadow.png');
        
        //load 4.1A assets
        this.load.image('bg4_1','assets/grade4Assets/4.1B/gameAssets/akshbg41.png');
        this.load.atlas('bottlefull','assets/grade4Assets/4.1B/gameAssets/bottlefull.png' ,'json/grade4Json/4.1B/bottlefull.json');
        this.load.atlas('bottlehalf','assets/grade4Assets/4.1B/gameAssets/bottlehalf.png' ,'json/grade4Json/4.1B/bottlehalf.json');
        this.load.atlas('bottlequarter','assets/grade4Assets/4.1B/gameAssets/bottlequarter.png' ,'json/grade4Json/4.1B/bottlequarter.json');
        this.load.atlas('bucketfull','assets/grade4Assets/4.1B/gameAssets/bucketfull.png' ,'json/grade4Json/4.1B/bucketfull.json');
        this.load.atlas('buckethalf','assets/grade4Assets/4.1B/gameAssets/buckethalf.png' ,'json/grade4Json/4.1B/buckethalf.json');
        this.load.atlas('bucketquarter','assets/grade4Assets/4.1B/gameAssets/bucketquarter.png' ,'json/grade4Json/4.1B/bucketquarter.json');
        this.load.atlas('glassfull','assets/grade4Assets/4.1B/gameAssets/glassfull.png' ,'json/grade4Json/4.1B/glassfull.json');
        this.load.atlas('glasshalf','assets/grade4Assets/4.1B/gameAssets/glasshalf.png' ,'json/grade4Json/4.1B/glasshalf.json');
        this.load.atlas('glassquarter','assets/grade4Assets/4.1B/gameAssets/glassquarter.png' ,'json/grade4Json/4.1B/glassquarter.json');
        this.load.atlas('jugfull','assets/grade4Assets/4.1B/gameAssets/jugfull.png' ,'json/grade4Json/4.1B/jugfull.json');
        this.load.atlas('jughalf','assets/grade4Assets/4.1B/gameAssets/jughalf.png' ,'json/grade4Json/4.1B/jughalf.json');
        this.load.atlas('jugquarter','assets/grade4Assets/4.1B/gameAssets/jugquarter.png' ,'json/grade4Json/4.1B/jugquarter.json');
        this.load.atlas('mugfull','assets/grade4Assets/4.1B/gameAssets/mugfull.png' ,'json/grade4Json/4.1B/mugfull.json');
        this.load.atlas('mughalf','assets/grade4Assets/4.1B/gameAssets/mughalf.png' ,'json/grade4Json/4.1B/mughalf.json');
        this.load.atlas('mugquarter','assets/grade4Assets/4.1B/gameAssets/mugquarter.png' ,'json/grade4Json/4.1B/mugquarter.json');
        this.load.atlas('sodafull','assets/grade4Assets/4.1B/gameAssets/sodafull.png' ,'json/grade4Json/4.1B/sodafull.json');
        this.load.atlas('sodahalf','assets/grade4Assets/4.1B/gameAssets/sodahalf.png' ,'json/grade4Json/4.1B/sodahalf.json');
        this.load.atlas('sodaquarter','assets/grade4Assets/4.1B/gameAssets/sodaquarter.png' ,'json/grade4Json/4.1B/sodaquarter.json');
        this.load.image('bottle_shadow','assets/grade4Assets/4.1B/gameAssets/bottle_shadow.png');
        this.load.image('bucket_shadow','assets/grade4Assets/4.1B/gameAssets/bucket_shadow.png');
        this.load.image('glass_shadow','assets/grade4Assets/4.1B/gameAssets/glass_shadow.png');
        this.load.image('jug_shadow','assets/grade4Assets/4.1B/gameAssets/jug_shadow.png');
        this.load.image('mug_shadow','assets/grade4Assets/4.1B/gameAssets/mug_shadow.png');
        this.load.image('soda_shadow','assets/grade4Assets/4.1B/gameAssets/soda_shadow.png');
        
        
          
         this.load.audio('baudio', 'questionSounds/4.1B/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/4.1B/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/4.1B/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/4.1B/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/4.1B/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/4.1B/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/4.1B/snapSound.mp3');
        this.load.audio('Eng_41A1', 'questionSounds/4.1B/English/4.1A1.mp3');
        this.load.audio('Eng_41A2', 'questionSounds/4.1B/English/4.1A2.mp3');
        this.load.audio('Eng_41A3', 'questionSounds/4.1B/English/4.1A3.mp3');
        this.load.audio('Eng_41B1', 'questionSounds/4.1B/English/4.1B1.mp3');
        this.load.audio('Eng_41B2', 'questionSounds/4.1B/English/4.1B2.mp3');
        this.load.audio('Eng_41C1', 'questionSounds/4.1B/English/4.1C1.mp3');
        this.load.audio('Eng_41C2', 'questionSounds/4.1B/English/4.1C2.mp3');
        this.load.audio('Kan_41A1', 'questionSounds/4.1B/Kannada/4.1A1.mp3');
        this.load.audio('Kan_41A2', 'questionSounds/4.1B/Kannada/4.1A2.mp3');
        this.load.audio('Kan_41A3', 'questionSounds/4.1B/Kannada/4.1A3.mp3');
        this.load.audio('Kan_41B1', 'questionSounds/4.1B/Kannada/4.1B1.mp3');
        this.load.audio('Kan_41B2', 'questionSounds/4.1B/Kannada/4.1B2.mp3');
        this.load.audio('Kan_41C1', 'questionSounds/4.1B/Kannada/4.1C1.mp3');
        this.load.audio('Kan_41C2', 'questionSounds/4.1B/Kannada/4.1C2.mp3');
        this.load.audio('Hin_41A1', 'questionSounds/4.1B/Hindi/4.1A1 OPTION1.mp3');
        this.load.audio('Hin_41A2', 'questionSounds/4.1B/Hindi/4.1A2.mp3');
        this.load.audio('Hin_41A3', 'questionSounds/4.1B/Hindi/4.1A3 Option.mp3');
        this.load.audio('Hin_41B1', 'questionSounds/4.1B/Hindi/4.1B1.mp3');
        this.load.audio('Hin_41B2', 'questionSounds/4.1B/Hindi/4.1B2.mp3');
        this.load.audio('Hin_41C1', 'questionSounds/4.1B/Hindi/4.1C1.mp3');
        this.load.audio('Hin_41C2', 'questionSounds/4.1B/Hindi/4.1C2.mp3');
		
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
    	Eng_41A1=this.add.audio('Eng_41A1');
        Eng_41A2=this.add.audio('Eng_41A2');
        Eng_41A3=this.add.audio('Eng_41A3');
        Eng_41B1=this.add.audio('Eng_41B1');
        Eng_41B2=this.add.audio('Eng_41B2');
        Eng_41C1=this.add.audio('Eng_41C1');
        Eng_41C2=this.add.audio('Eng_41C2');
        Kan_41A1=this.add.audio('Kan_41A1');
        Kan_41A2=this.add.audio('Kan_41A2');
        Kan_41A3=this.add.audio('Kan_41A3');
        Kan_41B1=this.add.audio('Kan_41B1');
        Kan_41B2=this.add.audio('Kan_41B2');
        Kan_41C1=this.add.audio('Kan_41C1');
        Kan_41C2=this.add.audio('Kan_41C2');
        Hin_41A1=this.add.audio('Hin_41A1');
        Hin_41A2=this.add.audio('Hin_41A2');
        Hin_41A3=this.add.audio('Hin_41A3');
        Hin_41B1=this.add.audio('Hin_41B1');
        Hin_41B2=this.add.audio('Hin_41B2');
        Hin_41C1=this.add.audio('Hin_41C1');
		Hin_41C2=this.add.audio('Hin_41C2');
		
		this.sound.setDecodedCallback([ baudio,celebr,waudio,ClickSound,aiyoh,OhSound,snapSound,Eng_41A1,Kan_41A1,Hin_41A1,Eng_41A2,Kan_41A2,Hin_41A2,Eng_41A3,Kan_41A3,Hin_41A3,Kan_41C2,Hin_41C2, Eng_41C2,Eng_41B2,Kan_41B2,Hin_41B2,Eng_41C1,Kan_41C1,Hin_41C1 ], function(){
		
		this.state.start('grade4_1Blevel1');
			
			}, this);

	}
}