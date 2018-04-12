Game.grade4_1Cpreloader=function(game){
	//this.preloadBar=null;
		var baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFill;
        var bgSound,rightSound,wrongSound,ClickSound;
        var Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1;
        var Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1;
        var Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1;
};

Game.grade4_1Cpreloader.prototype={
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
        
        this.load.image('bg1','assets/grade4Assets/4.1C/commonAssets/bg1.png');
        this.load.atlas('backbtn','assets/grade4Assets/4.1C/commonAssets/backbtn.png' ,'json/grade4Json/4.1C/backbtn.json');
        this.load.atlas('speaker','assets/grade4Assets/4.1C/commonAssets/speaker.png' ,'json/grade4Json/4.1C/speaker.json');
        this.load.atlas('starAnim','assets/grade4Assets/4.1C/commonAssets/starAnim.png','json/grade4Json/4.1C/starAnim.json');
        this.load.image('cloud','assets/grade4Assets/4.1C/commonAssets/cloud.png');
        this.load.atlas('btn','assets/grade4Assets/4.1C/commonAssets/btn.png','json/grade4Json/4.1C/btn.json');
        this.load.image('bg3','assets/grade4Assets/4.1C/commonAssets/bg3.png');
        this.load.image('tittleBaar','assets/grade4Assets/4.1C/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade4Assets/4.1C/commonAssets/reply.png' ,'json/grade4Json/4.1C/reply.json');
        
        //My files to load
        this.load.atlas('gameBox','assets/grade4Assets/4.1C/gameAssets/gameBox.png' ,'json/grade4Json/4.1C/gameBox.json');
        this.load.atlas('allimg','assets/grade4Assets/4.1C/gameAssets/allimg.png' ,'json/grade4Json/4.1C/allimg.json');
        this.load.atlas('tickMark','assets/grade4Assets/4.1C/gameAssets/tickMark.png' ,'json/grade4Json/4.1C/tickMark.json');
        this.load.image('croc','assets/grade4Assets/4.1C/gameAssets/croc.png');
        
        this.load.image('glow','assets/grade4Assets/4.1C/gameAssets/glow.png');
        
        //game items
        this.load.image('cup1','assets/grade4Assets/4.1C/gameAssets/1.png');
        this.load.image('cup2','assets/grade4Assets/4.1C/gameAssets/2.png');
        this.load.image('cup3','assets/grade4Assets/4.1C/gameAssets/3.png');
        this.load.image('cup4','assets/grade4Assets/4.1C/gameAssets/4.png');
        
        this.load.image('bucket1','assets/grade4Assets/4.1C/gameAssets/5.png');
        this.load.image('bucket2','assets/grade4Assets/4.1C/gameAssets/6.png');
        this.load.image('bucket3','assets/grade4Assets/4.1C/gameAssets/7.png');
        this.load.image('bucket4','assets/grade4Assets/4.1C/gameAssets/8.png');
        
        this.load.image('jug1','assets/grade4Assets/4.1C/gameAssets/9.png');
        this.load.image('jug2','assets/grade4Assets/4.1C/gameAssets/10.png');
        this.load.image('jug3','assets/grade4Assets/4.1C/gameAssets/11.png');
        this.load.image('jug4','assets/grade4Assets/4.1C/gameAssets/12.png');
        
        this.load.image('flask1','assets/grade4Assets/4.1C/gameAssets/13.png');
        this.load.image('flask2','assets/grade4Assets/4.1C/gameAssets/14.png');
        this.load.image('flask3','assets/grade4Assets/4.1C/gameAssets/15.png');
        this.load.image('flask4','assets/grade4Assets/4.1C/gameAssets/16.png');
        
        this.load.image('bottle1','assets/grade4Assets/4.1C/gameAssets/17.png');
        this.load.image('bottle2','assets/grade4Assets/4.1C/gameAssets/18.png');
        this.load.image('bottle3','assets/grade4Assets/4.1C/gameAssets/19.png');
        this.load.image('bottle4','assets/grade4Assets/4.1C/gameAssets/20.png');
        
        this.load.image('milk1','assets/grade4Assets/4.1C/gameAssets/21.png');
        this.load.image('milk2','assets/grade4Assets/4.1C/gameAssets/22.png');
        this.load.image('milk3','assets/grade4Assets/4.1C/gameAssets/23.png');
        this.load.image('milk4','assets/grade4Assets/4.1C/gameAssets/24.png');
        
        this.load.image('shadow1','assets/grade4Assets/4.1C/gameAssets/shadow1.png');
        this.load.image('shadow2','assets/grade4Assets/4.1C/gameAssets/shadow2.png');
        this.load.image('shadow3','assets/grade4Assets/4.1C/gameAssets/shadow3.png');
        this.load.image('shadow4','assets/grade4Assets/4.1C/gameAssets/shadow4.png');
        this.load.image('shadow5','assets/grade4Assets/4.1C/gameAssets/shadow5.png');
        this.load.image('shadow6','assets/grade4Assets/4.1C/gameAssets/shadow6.png');
        
        //Loading 4.1C Assets
        this.load.atlas('gameBox3','assets/grade4Assets/4.1C/gameAssets/gameBox3.png' ,'json/grade4Json/4.1C/gameBox3.json');
        this.load.atlas('allimages','assets/grade4Assets/4.1C/gameAssets/allimages.png' ,'json/grade4Json/4.1C/allimages.json');
        this.load.image('bluebottle1','assets/grade4Assets/4.1C/gameAssets/bluebottle1.png');
        this.load.image('bluebottle2','assets/grade4Assets/4.1C/gameAssets/bluebottle2.png');
        
        this.load.image('glassfull1','assets/grade4Assets/4.1C/gameAssets/glassfull1.png');
        this.load.image('glassfull2','assets/grade4Assets/4.1C/gameAssets/glassfull2.png');
        this.load.image('glassfull3','assets/grade4Assets/4.1C/gameAssets/glassfull3.png');
        this.load.image('glassfull4','assets/grade4Assets/4.1C/gameAssets/glassfull4.png');
        
        this.load.image('greendrum1','assets/grade4Assets/4.1C/gameAssets/greendrum1.png');
        this.load.image('greendrum2','assets/grade4Assets/4.1C/gameAssets/greendrum2.png');
        this.load.image('greendrum3','assets/grade4Assets/4.1C/gameAssets/greendrum3.png');
        
        this.load.image('greenmug1','assets/grade4Assets/4.1C/gameAssets/greenmug1.png');
        this.load.image('greenmug2','assets/grade4Assets/4.1C/gameAssets/greenmug2.png');
        
        this.load.image('greencup1','assets/grade4Assets/4.1C/gameAssets/greencup1.png');
        this.load.image('greencup2','assets/grade4Assets/4.1C/gameAssets/greencup2.png');
        
        this.load.image('greenpot1','assets/grade4Assets/4.1C/gameAssets/greenpot1.png');
        this.load.image('greenpot2','assets/grade4Assets/4.1C/gameAssets/greenpot2.png');
        this.load.image('greenpot3','assets/grade4Assets/4.1C/gameAssets/greenpot3.png');
        this.load.image('greenpot4','assets/grade4Assets/4.1C/gameAssets/greenpot4.png');
        
        this.load.image('orangebucket1','assets/grade4Assets/4.1C/gameAssets/orangebucket1.png');
        this.load.image('orangebucket2','assets/grade4Assets/4.1C/gameAssets/orangebucket2.png');
        
        this.load.image('orangecan1','assets/grade4Assets/4.1C/gameAssets/orangecan1.png');
        this.load.image('orangecan2','assets/grade4Assets/4.1C/gameAssets/orangecan2.png');
        this.load.image('orangecan3','assets/grade4Assets/4.1C/gameAssets/orangecan3.png');
        
        this.load.image('orangejug1','assets/grade4Assets/4.1C/gameAssets/orangejug1.png');
        this.load.image('orangejug2','assets/grade4Assets/4.1C/gameAssets/orangejug2.png');
        
        this.load.image('pinkbucket1','assets/grade4Assets/4.1C/gameAssets/pinkbucket1.png');
        this.load.image('pinkbucket2','assets/grade4Assets/4.1C/gameAssets/pinkbucket2.png');
        this.load.image('pinkbucket3','assets/grade4Assets/4.1C/gameAssets/pinkbucket3.png');
        
        this.load.image('pinkmug1','assets/grade4Assets/4.1C/gameAssets/pinkmug1.png');
        this.load.image('pinkmug2','assets/grade4Assets/4.1C/gameAssets/pinkmug2.png');
        
        this.load.image('redjug1','assets/grade4Assets/4.1C/gameAssets/redjug1.png');
        this.load.image('redjug2','assets/grade4Assets/4.1C/gameAssets/redjug2.png');
        this.load.image('redjug3','assets/grade4Assets/4.1C/gameAssets/redjug3.png');
        this.load.image('redjug4','assets/grade4Assets/4.1C/gameAssets/redjug4.png');
        
        this.load.image('syntex1','assets/grade4Assets/4.1C/gameAssets/syntex1.png');
        this.load.image('syntex2','assets/grade4Assets/4.1C/gameAssets/syntex2.png');
        
        this.load.image('whitemug1','assets/grade4Assets/4.1C/gameAssets/whitemug1.png');
        this.load.image('whitesoda1','assets/grade4Assets/4.1C/gameAssets/whitesoda1.png');
        this.load.image('whitesoda2','assets/grade4Assets/4.1C/gameAssets/whitesoda2.png');
        
        this.load.image('yellowct1','assets/grade4Assets/4.1C/gameAssets/yellowct1.png');
        this.load.image('bottleone','assets/grade4Assets/4.1C/gameAssets/bottleone.png');
        
        this.load.image('bluebottle1_shadow','assets/grade4Assets/4.1C/gameAssets/bluebottle1_shadow.png');
        this.load.image('glassfull1_shadow','assets/grade4Assets/4.1C/gameAssets/glassfull1_shadow.png');
        this.load.image('glassfull2_shadow','assets/grade4Assets/4.1C/gameAssets/glassfull2_shadow.png');
        this.load.image('greendrum1_shadow','assets/grade4Assets/4.1C/gameAssets/greendrum1_shadow.png');
        this.load.image('greendrum2_shadow','assets/grade4Assets/4.1C/gameAssets/greendrum2_shadow.png');
        this.load.image('greenmug1_shadow','assets/grade4Assets/4.1C/gameAssets/greenmug1_shadow.png');
        this.load.image('greenpot1_shadow','assets/grade4Assets/4.1C/gameAssets/greenpot1_shadow.png');
        this.load.image('orangebucket1_shadow','assets/grade4Assets/4.1C/gameAssets/orangebucket1_shadow.png');
        this.load.image('orangebucket2_shadow','assets/grade4Assets/4.1C/gameAssets/orangebucket2_shadow.png');
        this.load.image('orangecan1_shadow','assets/grade4Assets/4.1C/gameAssets/orangecan1_shadow.png');
        this.load.image('orangecan2_shadow','assets/grade4Assets/4.1C/gameAssets/orangecan2_shadow.png');
        this.load.image('orangejug1_shadow','assets/grade4Assets/4.1C/gameAssets/orangejug1_shadow.png');
        this.load.image('orangejug2_shadow','assets/grade4Assets/4.1C/gameAssets/orangejug2_shadow.png');
        this.load.image('pinkbucket1_shadow','assets/grade4Assets/4.1C/gameAssets/pinkbucket1_shadow.png');
        this.load.image('pinkbucket2_shadow','assets/grade4Assets/4.1C/gameAssets/pinkbucket2_shadow.png');
        this.load.image('pinkmug1_shadow','assets/grade4Assets/4.1C/gameAssets/pinkmug1_shadow.png');
        this.load.image('redjug1_shadow','assets/grade4Assets/4.1C/gameAssets/redjug1_shadow.png');
        this.load.image('syntex1_shadow','assets/grade4Assets/4.1C/gameAssets/syntex1_shadow.png');
        this.load.image('syntex2_shadow','assets/grade4Assets/4.1C/gameAssets/syntex2_shadow.png');
        this.load.image('whitemug1_shadow','assets/grade4Assets/4.1C/gameAssets/whitemug1_shadow.png');
        this.load.image('whitesoda1_shadow','assets/grade4Assets/4.1C/gameAssets/whitesoda1_shadow.png');
        
        //load 4.1A assets
        this.load.image('bg4_1','assets/grade4Assets/4.1C/gameAssets/akshbg41.png');
        this.load.atlas('bottlefull','assets/grade4Assets/4.1C/gameAssets/bottlefull.png' ,'json/grade4Json/4.1C/bottlefull.json');
        this.load.atlas('bottlehalf','assets/grade4Assets/4.1C/gameAssets/bottlehalf.png' ,'json/grade4Json/4.1C/bottlehalf.json');
        this.load.atlas('bottlequarter','assets/grade4Assets/4.1C/gameAssets/bottlequarter.png' ,'json/grade4Json/4.1C/bottlequarter.json');
        this.load.atlas('bucketfull','assets/grade4Assets/4.1C/gameAssets/bucketfull.png' ,'json/grade4Json/4.1C/bucketfull.json');
        this.load.atlas('buckethalf','assets/grade4Assets/4.1C/gameAssets/buckethalf.png' ,'json/grade4Json/4.1C/buckethalf.json');
        this.load.atlas('bucketquarter','assets/grade4Assets/4.1C/gameAssets/bucketquarter.png' ,'json/grade4Json/4.1C/bucketquarter.json');
        this.load.atlas('glassfull','assets/grade4Assets/4.1C/gameAssets/glassfull.png' ,'json/grade4Json/4.1C/glassfull.json');
        this.load.atlas('glasshalf','assets/grade4Assets/4.1C/gameAssets/glasshalf.png' ,'json/grade4Json/4.1C/glasshalf.json');
        this.load.atlas('glassquarter','assets/grade4Assets/4.1C/gameAssets/glassquarter.png' ,'json/grade4Json/4.1C/glassquarter.json');
        this.load.atlas('jugfull','assets/grade4Assets/4.1C/gameAssets/jugfull.png' ,'json/grade4Json/4.1C/jugfull.json');
        this.load.atlas('jughalf','assets/grade4Assets/4.1C/gameAssets/jughalf.png' ,'json/grade4Json/4.1C/jughalf.json');
        this.load.atlas('jugquarter','assets/grade4Assets/4.1C/gameAssets/jugquarter.png' ,'json/grade4Json/4.1C/jugquarter.json');
        this.load.atlas('mugfull','assets/grade4Assets/4.1C/gameAssets/mugfull.png' ,'json/grade4Json/4.1C/mugfull.json');
        this.load.atlas('mughalf','assets/grade4Assets/4.1C/gameAssets/mughalf.png' ,'json/grade4Json/4.1C/mughalf.json');
        this.load.atlas('mugquarter','assets/grade4Assets/4.1C/gameAssets/mugquarter.png' ,'json/grade4Json/4.1C/mugquarter.json');
        this.load.atlas('sodafull','assets/grade4Assets/4.1C/gameAssets/sodafull.png' ,'json/grade4Json/4.1C/sodafull.json');
        this.load.atlas('sodahalf','assets/grade4Assets/4.1C/gameAssets/sodahalf.png' ,'json/grade4Json/4.1C/sodahalf.json');
        this.load.atlas('sodaquarter','assets/grade4Assets/4.1C/gameAssets/sodaquarter.png' ,'json/grade4Json/4.1C/sodaquarter.json');
        this.load.image('bottle_shadow','assets/grade4Assets/4.1C/gameAssets/bottle_shadow.png');
        this.load.image('bucket_shadow','assets/grade4Assets/4.1C/gameAssets/bucket_shadow.png');
        this.load.image('glass_shadow','assets/grade4Assets/4.1C/gameAssets/glass_shadow.png');
        this.load.image('jug_shadow','assets/grade4Assets/4.1C/gameAssets/jug_shadow.png');
        this.load.image('mug_shadow','assets/grade4Assets/4.1C/gameAssets/mug_shadow.png');
        this.load.image('soda_shadow','assets/grade4Assets/4.1C/gameAssets/soda_shadow.png');
        
        this.load.audio('baudio', 'questionSounds/4.1C/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/4.1C/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/4.1C/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/4.1C/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/4.1C/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/4.1C/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/4.1C/snapSound.mp3');
        this.load.audio('Eng_41A1', 'questionSounds/4.1C/English/4.1A1.mp3');
        this.load.audio('Eng_41A2', 'questionSounds/4.1C/English/4.1A2.mp3');
        this.load.audio('Eng_41A3', 'questionSounds/4.1C/English/4.1A3.mp3');
        this.load.audio('Eng_41B1', 'questionSounds/4.1C/English/4.1B1.mp3');
        this.load.audio('Eng_41B2', 'questionSounds/4.1C/English/4.1B2.mp3');
        this.load.audio('Eng_41C1', 'questionSounds/4.1C/English/4.1C1.mp3');
        this.load.audio('Eng_41C2', 'questionSounds/4.1C/English/4.1C2.mp3');
        this.load.audio('Kan_41A1', 'questionSounds/4.1C/Kannada/4.1A1.mp3');
        this.load.audio('Kan_41A2', 'questionSounds/4.1C/Kannada/4.1A2.mp3');
        this.load.audio('Kan_41A3', 'questionSounds/4.1C/Kannada/4.1A3.mp3');
        this.load.audio('Kan_41B1', 'questionSounds/4.1C/Kannada/4.1B1.mp3');
        this.load.audio('Kan_41B2', 'questionSounds/4.1C/Kannada/4.1B2.mp3');
        this.load.audio('Kan_41C1', 'questionSounds/4.1C/Kannada/4.1C1.mp3');
        this.load.audio('Kan_41C2', 'questionSounds/4.1C/Kannada/4.1C2.mp3');
        this.load.audio('Hin_41A1', 'questionSounds/4.1C/Hindi/4.1A1 OPTION1.mp3');
        this.load.audio('Hin_41A2', 'questionSounds/4.1C/Hindi/4.1A2.mp3');
        this.load.audio('Hin_41A3', 'questionSounds/4.1C/Hindi/4.1A3 Option.mp3');
        this.load.audio('Hin_41B1', 'questionSounds/4.1C/Hindi/4.1B1.mp3');
        this.load.audio('Hin_41B2', 'questionSounds/4.1C/Hindi/4.1B2.mp3');
        this.load.audio('Hin_41C1', 'questionSounds/4.1C/Hindi/4.1C1.mp3');
        this.load.audio('Hin_41C2', 'questionSounds/4.1C/Hindi/4.1C2.mp3');
		
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
		
		this.sound.setDecodedCallback([baudio,celebr,waudio,ClickSound,aiyoh,OhSound,snapSound,Eng_41A1,Kan_41A1,Hin_41A1,Eng_41A2,Kan_41A2,Hin_41A2,Eng_41A3,Kan_41A3,Hin_41A3,Kan_41C2,Hin_41C2,Eng_41C2,Eng_41B2,Kan_41B2,Hin_41B2,Eng_41C1,Kan_41C1,Hin_41C1 ], function(){
		
		this.state.start('grade4_1Clevel1');
			
			}, this);
	}
}