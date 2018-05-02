Game.grade4_1Apreloader=function(game){
	//this.preloadBar=null;
		var baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFill;
        var bgSound,rightSound,wrongSound,ClickSound;
        var Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1;
        var Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1;
        var Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1;
};

Game.grade4_1Apreloader.prototype={
	preload:function(){
        

        var baudio,celebr,waudio,ClickSound,aiyoh,OhSound;
        var bgSound,rightSound,wrongSound,ClickSound,Eng_41A1,Kan_41A1,Hin_41A1,Eng_41A2,Kan_41A2,Hin_41A2,Eng_41A3,Kan_41A3,Hin_41A3,Kan_41C2,
            Hin_41C2, Eng_41C2,Eng_41B2,Kan_41B2,Hin_41B2,Eng_41C1,Kan_41C1,Hin_41C1;
       
	   var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
        
        this.load.image('bg1','assets/grade4Assets/4.1A/commonAssets/bg1.png');
        this.load.atlas('backbtn','assets/grade4Assets/4.1A/commonAssets/backbtn.png' ,'json/grade4Json/4.1A/backbtn.json');
        this.load.atlas('speaker','assets/grade4Assets/4.1A/commonAssets/speaker.png' ,'json/grade4Json/4.1A/speaker.json');
        this.load.atlas('starAnim','assets/grade4Assets/4.1A/commonAssets/starAnim.png','json/grade4Json/4.1A/starAnim.json');
        this.load.image('cloud','assets/grade4Assets/4.1A/commonAssets/cloud.png');
        this.load.atlas('btn','assets/grade4Assets/4.1A/commonAssets/btn.png','json/grade4Json/4.1A/btn.json');
        this.load.image('bg3','assets/grade4Assets/4.1A/commonAssets/bg3.png');
        this.load.image('tittleBaar','assets/grade4Assets/4.1A/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade4Assets/4.1A/commonAssets/reply.png' ,'json/grade4Json/4.1A/reply.json');
        
        //My files to load
        this.load.atlas('gameBox','assets/grade4Assets/4.1A/gameAssets/gameBox.png' ,'json/grade4Json/4.1A/gameBox.json');
        this.load.atlas('allimg','assets/grade4Assets/4.1A/gameAssets/allimg.png' ,'json/grade4Json/4.1A/allimg.json');
        this.load.atlas('tickMark','assets/grade4Assets/4.1A/gameAssets/tickMark.png' ,'json/grade4Json/4.1A/tickMark.json');
        this.load.image('croc','assets/grade4Assets/4.1A/gameAssets/croc.png');
        
        this.load.image('glow','assets/grade4Assets/4.1A/gameAssets/glow.png');
        
        //game items
        this.load.image('cup1','assets/grade4Assets/4.1A/gameAssets/1.png');
        this.load.image('cup2','assets/grade4Assets/4.1A/gameAssets/2.png');
        this.load.image('cup3','assets/grade4Assets/4.1A/gameAssets/3.png');
        this.load.image('cup4','assets/grade4Assets/4.1A/gameAssets/4.png');
        
        this.load.image('bucket1','assets/grade4Assets/4.1A/gameAssets/5.png');
        this.load.image('bucket2','assets/grade4Assets/4.1A/gameAssets/6.png');
        this.load.image('bucket3','assets/grade4Assets/4.1A/gameAssets/7.png');
        this.load.image('bucket4','assets/grade4Assets/4.1A/gameAssets/8.png');
        
        this.load.image('jug1','assets/grade4Assets/4.1A/gameAssets/9.png');
        this.load.image('jug2','assets/grade4Assets/4.1A/gameAssets/10.png');
        this.load.image('jug3','assets/grade4Assets/4.1A/gameAssets/11.png');
        this.load.image('jug4','assets/grade4Assets/4.1A/gameAssets/12.png');
        
        this.load.image('flask1','assets/grade4Assets/4.1A/gameAssets/13.png');
        this.load.image('flask2','assets/grade4Assets/4.1A/gameAssets/14.png');
        this.load.image('flask3','assets/grade4Assets/4.1A/gameAssets/15.png');
        this.load.image('flask4','assets/grade4Assets/4.1A/gameAssets/16.png');
        
        this.load.image('bottle1','assets/grade4Assets/4.1A/gameAssets/17.png');
        this.load.image('bottle2','assets/grade4Assets/4.1A/gameAssets/18.png');
        this.load.image('bottle3','assets/grade4Assets/4.1A/gameAssets/19.png');
        this.load.image('bottle4','assets/grade4Assets/4.1A/gameAssets/20.png');
        
        this.load.image('milk1','assets/grade4Assets/4.1A/gameAssets/21.png');
        this.load.image('milk2','assets/grade4Assets/4.1A/gameAssets/22.png');
        this.load.image('milk3','assets/grade4Assets/4.1A/gameAssets/23.png');
        this.load.image('milk4','assets/grade4Assets/4.1A/gameAssets/24.png');
        
        this.load.image('shadow1','assets/grade4Assets/4.1A/gameAssets/shadow1.png');
        this.load.image('shadow2','assets/grade4Assets/4.1A/gameAssets/shadow2.png');
        this.load.image('shadow3','assets/grade4Assets/4.1A/gameAssets/shadow3.png');
        this.load.image('shadow4','assets/grade4Assets/4.1A/gameAssets/shadow4.png');
        this.load.image('shadow5','assets/grade4Assets/4.1A/gameAssets/shadow5.png');
        this.load.image('shadow6','assets/grade4Assets/4.1A/gameAssets/shadow6.png');
        
        //Loading 4.1C Assets
        this.load.atlas('gameBox3','assets/grade4Assets/4.1A/gameAssets/gameBox3.png' ,'json/grade4Json/4.1A/gameBox3.json');
        this.load.atlas('allimages','assets/grade4Assets/4.1A/gameAssets/allimages.png' ,'json/grade4Json/4.1A/allimages.json');
        this.load.image('bluebottle1','assets/grade4Assets/4.1A/gameAssets/bluebottle1.png');
        this.load.image('bluebottle2','assets/grade4Assets/4.1A/gameAssets/bluebottle2.png');
        
        this.load.image('glassfull1','assets/grade4Assets/4.1A/gameAssets/glassfull1.png');
        this.load.image('glassfull2','assets/grade4Assets/4.1A/gameAssets/glassfull2.png');
        this.load.image('glassfull3','assets/grade4Assets/4.1A/gameAssets/glassfull3.png');
        this.load.image('glassfull4','assets/grade4Assets/4.1A/gameAssets/glassfull4.png');
        
        this.load.image('greendrum1','assets/grade4Assets/4.1A/gameAssets/greendrum1.png');
        this.load.image('greendrum2','assets/grade4Assets/4.1A/gameAssets/greendrum2.png');
        this.load.image('greendrum3','assets/grade4Assets/4.1A/gameAssets/greendrum3.png');
        
        this.load.image('greenmug1','assets/grade4Assets/4.1A/gameAssets/greenmug1.png');
        this.load.image('greenmug2','assets/grade4Assets/4.1A/gameAssets/greenmug2.png');
        
        this.load.image('greencup1','assets/grade4Assets/4.1A/gameAssets/greencup1.png');
        this.load.image('greencup2','assets/grade4Assets/4.1A/gameAssets/greencup2.png');
        
        this.load.image('greenpot1','assets/grade4Assets/4.1A/gameAssets/greenpot1.png');
        this.load.image('greenpot2','assets/grade4Assets/4.1A/gameAssets/greenpot2.png');
        this.load.image('greenpot3','assets/grade4Assets/4.1A/gameAssets/greenpot3.png');
        this.load.image('greenpot4','assets/grade4Assets/4.1A/gameAssets/greenpot4.png');
        
        this.load.image('orangebucket1','assets/grade4Assets/4.1A/gameAssets/orangebucket1.png');
        this.load.image('orangebucket2','assets/grade4Assets/4.1A/gameAssets/orangebucket2.png');
        
        this.load.image('orangecan1','assets/grade4Assets/4.1A/gameAssets/orangecan1.png');
        this.load.image('orangecan2','assets/grade4Assets/4.1A/gameAssets/orangecan2.png');
        this.load.image('orangecan3','assets/grade4Assets/4.1A/gameAssets/orangecan3.png');
        
        this.load.image('orangejug1','assets/grade4Assets/4.1A/gameAssets/orangejug1.png');
        this.load.image('orangejug2','assets/grade4Assets/4.1A/gameAssets/orangejug2.png');
        
        this.load.image('pinkbucket1','assets/grade4Assets/4.1A/gameAssets/pinkbucket1.png');
        this.load.image('pinkbucket2','assets/grade4Assets/4.1A/gameAssets/pinkbucket2.png');
        this.load.image('pinkbucket3','assets/grade4Assets/4.1A/gameAssets/pinkbucket3.png');
        
        this.load.image('pinkmug1','assets/grade4Assets/4.1A/gameAssets/pinkmug1.png');
        this.load.image('pinkmug2','assets/grade4Assets/4.1A/gameAssets/pinkmug2.png');
        
        this.load.image('redjug1','assets/grade4Assets/4.1A/gameAssets/redjug1.png');
        this.load.image('redjug2','assets/grade4Assets/4.1A/gameAssets/redjug2.png');
        this.load.image('redjug3','assets/grade4Assets/4.1A/gameAssets/redjug3.png');
        this.load.image('redjug4','assets/grade4Assets/4.1A/gameAssets/redjug4.png');
        
        this.load.image('syntex1','assets/grade4Assets/4.1A/gameAssets/syntex1.png');
        this.load.image('syntex2','assets/grade4Assets/4.1A/gameAssets/syntex2.png');
        
        this.load.image('whitemug1','assets/grade4Assets/4.1A/gameAssets/whitemug1.png');
        this.load.image('whitesoda1','assets/grade4Assets/4.1A/gameAssets/whitesoda1.png');
        this.load.image('whitesoda2','assets/grade4Assets/4.1A/gameAssets/whitesoda2.png');
        
        this.load.image('yellowct1','assets/grade4Assets/4.1A/gameAssets/yellowct1.png');
        this.load.image('bottleone','assets/grade4Assets/4.1A/gameAssets/bottleone.png');
        
        this.load.image('bluebottle1_shadow','assets/grade4Assets/4.1A/gameAssets/bluebottle1_shadow.png');
        this.load.image('glassfull1_shadow','assets/grade4Assets/4.1A/gameAssets/glassfull1_shadow.png');
        this.load.image('glassfull2_shadow','assets/grade4Assets/4.1A/gameAssets/glassfull2_shadow.png');
        this.load.image('greendrum1_shadow','assets/grade4Assets/4.1A/gameAssets/greendrum1_shadow.png');
        this.load.image('greendrum2_shadow','assets/grade4Assets/4.1A/gameAssets/greendrum2_shadow.png');
        this.load.image('greenmug1_shadow','assets/grade4Assets/4.1A/gameAssets/greenmug1_shadow.png');
        this.load.image('greenpot1_shadow','assets/grade4Assets/4.1A/gameAssets/greenpot1_shadow.png');
        this.load.image('orangebucket1_shadow','assets/grade4Assets/4.1A/gameAssets/orangebucket1_shadow.png');
        this.load.image('orangebucket2_shadow','assets/grade4Assets/4.1A/gameAssets/orangebucket2_shadow.png');
        this.load.image('orangecan1_shadow','assets/grade4Assets/4.1A/gameAssets/orangecan1_shadow.png');
        this.load.image('orangecan2_shadow','assets/grade4Assets/4.1A/gameAssets/orangecan2_shadow.png');
        this.load.image('orangejug1_shadow','assets/grade4Assets/4.1A/gameAssets/orangejug1_shadow.png');
        this.load.image('orangejug2_shadow','assets/grade4Assets/4.1A/gameAssets/orangejug2_shadow.png');
        this.load.image('pinkbucket1_shadow','assets/grade4Assets/4.1A/gameAssets/pinkbucket1_shadow.png');
        this.load.image('pinkbucket2_shadow','assets/grade4Assets/4.1A/gameAssets/pinkbucket2_shadow.png');
        this.load.image('pinkmug1_shadow','assets/grade4Assets/4.1A/gameAssets/pinkmug1_shadow.png');
        this.load.image('redjug1_shadow','assets/grade4Assets/4.1A/gameAssets/redjug1_shadow.png');
        this.load.image('syntex1_shadow','assets/grade4Assets/4.1A/gameAssets/syntex1_shadow.png');
        this.load.image('syntex2_shadow','assets/grade4Assets/4.1A/gameAssets/syntex2_shadow.png');
        this.load.image('whitemug1_shadow','assets/grade4Assets/4.1A/gameAssets/whitemug1_shadow.png');
        this.load.image('whitesoda1_shadow','assets/grade4Assets/4.1A/gameAssets/whitesoda1_shadow.png');
        
        //load 4.1A assets
        this.load.image('bg4_1','assets/grade4Assets/4.1A/gameAssets/akshbg41.png');
        this.load.atlas('bottlefull','assets/grade4Assets/4.1A/gameAssets/bottlefull.png' ,'json/grade4Json/4.1A/bottlefull.json');
        this.load.atlas('bottlehalf','assets/grade4Assets/4.1A/gameAssets/bottlehalf.png' ,'json/grade4Json/4.1A/bottlehalf.json');
        this.load.atlas('bottlequarter','assets/grade4Assets/4.1A/gameAssets/bottlequarter.png' ,'json/grade4Json/4.1A/bottlequarter.json');
        this.load.atlas('bucketfull','assets/grade4Assets/4.1A/gameAssets/bucketfull.png' ,'json/grade4Json/4.1A/bucketfull.json');
        this.load.atlas('buckethalf','assets/grade4Assets/4.1A/gameAssets/buckethalf.png' ,'json/grade4Json/4.1A/buckethalf.json');
        this.load.atlas('bucketquarter','assets/grade4Assets/4.1A/gameAssets/bucketquarter.png' ,'json/grade4Json/4.1A/bucketquarter.json');
        this.load.atlas('glassfull','assets/grade4Assets/4.1A/gameAssets/glassfull.png' ,'json/grade4Json/4.1A/glassfull.json');
        this.load.atlas('glasshalf','assets/grade4Assets/4.1A/gameAssets/glasshalf.png' ,'json/grade4Json/4.1A/glasshalf.json');
        this.load.atlas('glassquarter','assets/grade4Assets/4.1A/gameAssets/glassquarter.png' ,'json/grade4Json/4.1A/glassquarter.json');
        this.load.atlas('jugfull','assets/grade4Assets/4.1A/gameAssets/jugfull.png' ,'json/grade4Json/4.1A/jugfull.json');
        this.load.atlas('jughalf','assets/grade4Assets/4.1A/gameAssets/jughalf.png' ,'json/grade4Json/4.1A/jughalf.json');
        this.load.atlas('jugquarter','assets/grade4Assets/4.1A/gameAssets/jugquarter.png' ,'json/grade4Json/4.1A/jugquarter.json');
        this.load.atlas('mugfull','assets/grade4Assets/4.1A/gameAssets/mugfull.png' ,'json/grade4Json/4.1A/mugfull.json');
        this.load.atlas('mughalf','assets/grade4Assets/4.1A/gameAssets/mughalf.png' ,'json/grade4Json/4.1A/mughalf.json');
        this.load.atlas('mugquarter','assets/grade4Assets/4.1A/gameAssets/mugquarter.png' ,'json/grade4Json/4.1A/mugquarter.json');
        this.load.atlas('sodafull','assets/grade4Assets/4.1A/gameAssets/sodafull.png' ,'json/grade4Json/4.1A/sodafull.json');
        this.load.atlas('sodahalf','assets/grade4Assets/4.1A/gameAssets/sodahalf.png' ,'json/grade4Json/4.1A/sodahalf.json');
        this.load.atlas('sodaquarter','assets/grade4Assets/4.1A/gameAssets/sodaquarter.png' ,'json/grade4Json/4.1A/sodaquarter.json');
        this.load.image('bottle_shadow','assets/grade4Assets/4.1A/gameAssets/bottle_shadow.png');
        this.load.image('bucket_shadow','assets/grade4Assets/4.1A/gameAssets/bucket_shadow.png');
        this.load.image('glass_shadow','assets/grade4Assets/4.1A/gameAssets/glass_shadow.png');
        this.load.image('jug_shadow','assets/grade4Assets/4.1A/gameAssets/jug_shadow.png');
        this.load.image('mug_shadow','assets/grade4Assets/4.1A/gameAssets/mug_shadow.png');
        this.load.image('soda_shadow','assets/grade4Assets/4.1A/gameAssets/soda_shadow.png');
        
        
         this.load.audio('baudio', 'questionSounds/4.1A/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/4.1A/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/4.1A/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/4.1A/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/4.1A/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/4.1A/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/4.1A/snapSound.mp3');
        this.load.audio('Eng_41A1', 'questionSounds/4.1A/English/4.1A1.mp3');
        this.load.audio('Eng_41A2', 'questionSounds/4.1A/English/4.1A2.mp3');
        this.load.audio('Eng_41A3', 'questionSounds/4.1A/English/4.1A3.mp3');
        this.load.audio('Eng_41B1', 'questionSounds/4.1A/English/4.1B1.mp3');
        this.load.audio('Eng_41B2', 'questionSounds/4.1A/English/4.1B2.mp3');
        this.load.audio('Eng_41C1', 'questionSounds/4.1A/English/4.1C1.mp3');
        this.load.audio('Eng_41C2', 'questionSounds/4.1A/English/4.1C2.mp3');
        this.load.audio('Kan_41A1', 'questionSounds/4.1A/Kannada/4.1A1.mp3');
        this.load.audio('Kan_41A2', 'questionSounds/4.1A/Kannada/4.1A2.mp3');
        this.load.audio('Kan_41A3', 'questionSounds/4.1A/Kannada/4.1A3.mp3');
        this.load.audio('Kan_41B1', 'questionSounds/4.1A/Kannada/4.1B1.mp3');
        this.load.audio('Kan_41B2', 'questionSounds/4.1A/Kannada/4.1B2.mp3');
        this.load.audio('Kan_41C1', 'questionSounds/4.1A/Kannada/4.1C1.mp3');
        this.load.audio('Kan_41C2', 'questionSounds/4.1A/Kannada/4.1C2.mp3');
        this.load.audio('Hin_41A1', 'questionSounds/4.1A/Hindi/4.1A1 OPTION1.mp3');
        this.load.audio('Hin_41A2', 'questionSounds/4.1A/Hindi/4.1A2.mp3');
        this.load.audio('Hin_41A3', 'questionSounds/4.1A/Hindi/4.1A3 Option.mp3');
        this.load.audio('Hin_41B1', 'questionSounds/4.1A/Hindi/4.1B1.mp3');
        this.load.audio('Hin_41B2', 'questionSounds/4.1A/Hindi/4.1B2.mp3');
        this.load.audio('Hin_41C1', 'questionSounds/4.1A/Hindi/4.1C1.mp3');
        this.load.audio('Hin_41C2', 'questionSounds/4.1A/Hindi/4.1C2.mp3');
		
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
		
		this.sound.setDecodedCallback([baudio,celebr,waudio,ClickSound,aiyoh,OhSound,snapSound,ClickSound,Eng_41A1,Kan_41A1,Hin_41A1,Eng_41A2,Kan_41A2,Hin_41A2,Eng_41A3,Kan_41A3,Hin_41A3,Kan_41C2,Hin_41C2,Eng_41C2,Eng_41B2,Kan_41B2,Hin_41B2,Eng_41C1,Kan_41C1,Hin_41C1 ], function(){
		
		this.state.start('grade4_1Alevel1');
			
			}, this);
	}
}