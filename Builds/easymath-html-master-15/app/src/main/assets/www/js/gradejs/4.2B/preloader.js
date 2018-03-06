Game.grade4_2Bpreloader=function(game){
	//this.preloadBar=null;
		var baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFill;
        var bgSound,rightSound,wrongSound,ClickSound;
        var Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1;
        var Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1;
        var Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1;
};

Game.grade4_2Bpreloader.prototype={
	preload:function(){

        

        var baudio,celebr,waudio,ClickSound,aiyoh,OhSound;
        var bgSound,rightSound,wrongSound,ClickSound,waterFillingSound,watersplash;
        var Eng_42A1,Eng_42B1,Eng_42C1,Kan_42A1,Kan_42B1,Kan_42C1,Hin_42A1,Hin_42B1,Hin_42C1;
		
		var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
        
        
        this.load.image('bgA','assets/grade4Assets/4.2B/commonAssets/bgA.png');
        this.load.atlas('backbtn','assets/grade4Assets/4.2B/commonAssets/backbtn.png' ,'json/grade4Json/4.2B/backbtn.json');
        this.load.atlas('speaker','assets/grade4Assets/4.2B/commonAssets/speaker.png' ,'json/grade4Json/4.2B/speaker.json');
        this.load.atlas('starAnim','assets/grade4Assets/4.2B/commonAssets/starAnim.png','json/grade4Json/4.2B/starAnim.json');
        this.load.image('cloud','assets/grade4Assets/4.2B/commonAssets/cloud.png');
        this.load.atlas('btn','assets/grade4Assets/4.2B/commonAssets/btn.png','json/grade4Json/4.2B/btn.json');
        this.load.image('bg3','assets/grade4Assets/4.2B/commonAssets/bg3.png');
        this.load.image('tittleBaar','assets/grade4Assets/4.2B/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade4Assets/4.2B/commonAssets/reply.png' ,'json/grade4Json/4.2B/reply.json');
        
        //Load 4.2A Assets
        this.load.atlas('bottle','assets/grade4Assets/4.2B/gameAssets/bottle.png' ,'json/grade4Json/4.2B/bottle.json');
        this.load.atlas('bottleblue','assets/grade4Assets/4.2B/gameAssets/bottleblue.png' ,'json/grade4Json/4.2B/bottleblue.json');
        this.load.atlas('bucket','assets/grade4Assets/4.2B/gameAssets/bucket.png' ,'json/grade4Json/4.2B/bucket.json');
        this.load.atlas('cup','assets/grade4Assets/4.2B/gameAssets/cup.png' ,'json/grade4Json/4.2B/cup.json');
        this.load.atlas('cupreverse','assets/grade4Assets/4.2B/gameAssets/cupreverse.png' ,'json/grade4Json/4.2B/cupreverse.json');
        this.load.atlas('glass','assets/grade4Assets/4.2B/gameAssets/glass.png' ,'json/grade4Json/4.2B/glass.json');
        this.load.atlas('jug','assets/grade4Assets/4.2B/gameAssets/jug.png' ,'json/grade4Json/4.2B/jug.json');
        this.load.atlas('pinkmug','assets/grade4Assets/4.2B/gameAssets/pinkmug.png' ,'json/grade4Json/4.2B/pinkmug.json');
        this.load.atlas('soda','assets/grade4Assets/4.2B/gameAssets/soda.png' ,'json/grade4Json/4.2B/soda.json');
        this.load.image('box','assets/grade4Assets/4.2B/gameAssets/box.png');
        
        
        //Load 4.2C Assets
        this.load.atlas('bluebottlec','assets/grade4Assets/4.2B/gameAssets/bluebottlec.png' ,'json/grade4Json/4.2B/bluebottlec.json');
        this.load.atlas('bluebucketc','assets/grade4Assets/4.2B/gameAssets/bluebucketc.png' ,'json/grade4Json/4.2B/bluebucketc.json');
        this.load.atlas('bottlec','assets/grade4Assets/4.2B/gameAssets/bottlec.png' ,'json/grade4Json/4.2B/bottlec.json');
        this.load.atlas('greenmugc','assets/grade4Assets/4.2B/gameAssets/greenmugc.png' ,'json/grade4Json/4.2B/greenmugc.json');
        this.load.atlas('pinkbucketc','assets/grade4Assets/4.2B/gameAssets/pinkbucketc.png' ,'json/grade4Json/4.2B/pinkbucketc.json');
        this.load.atlas('potsplashc','assets/grade4Assets/4.2B/gameAssets/potsplashc.png' ,'json/grade4Json/4.2B/potsplashc.json');
        this.load.atlas('vessel2c','assets/grade4Assets/4.2B/gameAssets/vessel2c.png' ,'json/grade4Json/4.2B/vessel2c.json');
        this.load.atlas('yellowctc','assets/grade4Assets/4.2B/gameAssets/yellowctc.png' ,'json/grade4Json/4.2B/yellowctc.json');
        this.load.image('maskbg','assets/grade4Assets/4.2B/gameAssets/maskbg.png');
        this.load.image('common_shadow','assets/grade4Assets/4.2B/gameAssets/common_shadow.png');
        
        //LEVELB
        
        this.load.atlas('tank2','assets/grade4Assets/4.2B/gameAssets/levelB/tank.png' ,'json/grade4Json/4.2B/levelB/tank.json');
        this.load.atlas('drum2','assets/grade4Assets/4.2B/gameAssets/levelB/drum.png' ,'json/grade4Json/4.2B/levelB/drum.json');
        this.load.atlas('pot2','assets/grade4Assets/4.2B/gameAssets/levelB/pot.png' ,'json/grade4Json/4.2B/levelB/pot.json');
        this.load.image('box','assets/grade4Assets/4.2B/gameAssets/levelB/box.png');
        this.load.image('darkbg1','assets/grade4Assets/4.2B/gameAssets/levelB/darkbg1.png');
        this.load.image('darkbg2','assets/grade4Assets/4.2B/gameAssets/levelB/darkbg2.png');
        this.load.image('mainbox','assets/grade4Assets/4.2B/gameAssets/levelB/mainbox.png');
        this.load.atlas('tick','assets/grade4Assets/4.2B/gameAssets/levelB/tick.png' ,'json/grade4Json/4.2B/levelB/tick.json');
        
        this.load.atlas('cookerB','assets/grade4Assets/4.2B/gameAssets/levelB/cooker.png' ,'json/grade4Json/4.2B/levelB/cooker.json');
        this.load.atlas('bottleB','assets/grade4Assets/4.2B/gameAssets/levelB/bottle.png' ,'json/grade4Json/4.2B/levelB/bottle.json');
        this.load.atlas('jugB','assets/grade4Assets/4.2B/gameAssets/levelB/jug.png' ,'json/grade4Json/4.2B/levelB/jug.json');
        this.load.image('coffeecup','assets/grade4Assets/4.2B/gameAssets/levelB/coffeecup.png');
        
        this.load.atlas('mugB','assets/grade4Assets/4.2B/gameAssets/levelB/mug.png' ,'json/grade4Json/4.2B/levelB/mug.json');
        this.load.atlas('orangebottleB','assets/grade4Assets/4.2B/gameAssets/levelB/orangebottle.png' ,'json/grade4Json/4.2B/levelB/orangebottle.json');
        this.load.atlas('canB','assets/grade4Assets/4.2B/gameAssets/levelB/can.png' ,'json/grade4Json/4.2B/levelB/can.json');
        
        this.load.atlas('greenbot22','assets/grade4Assets/4.2B/gameAssets/levelB/greenbot22.png' ,'json/grade4Json/4.2B/levelB/greenbot22.json');
        this.load.atlas('bottle22','assets/grade4Assets/4.2B/gameAssets/levelB/bottle22.png' ,'json/grade4Json/4.2B/levelB/bottle22.json');
        
        this.load.atlas('pinkglass','assets/grade4Assets/4.2B/gameAssets/levelB/pinkglass.png' ,'json/grade4Json/4.2B/levelB/pinkglass.json');
        this.load.atlas('greencup','assets/grade4Assets/4.2B/gameAssets/levelB/greencup.png' ,'json/grade4Json/4.2B/levelB/greencup.json');
        this.load.atlas('smallbottle','assets/grade4Assets/4.2B/gameAssets/levelB/smallbottle.png' ,'json/grade4Json/4.2B/levelB/smallbottle.json');
        this.load.image('spoon','assets/grade4Assets/4.2B/gameAssets/levelB/spoon.png');
        
        this.load.atlas('bucket33','assets/grade4Assets/4.2B/gameAssets/levelB/bucket.png' ,'json/grade4Json/4.2B/levelB/bucket.json');
        this.load.image('greena1','assets/grade4Assets/4.2B/gameAssets/levelB/greena1.png');
        
        this.load.atlas('bottle44','assets/grade4Assets/4.2B/gameAssets/levelB/bottle44.png' ,'json/grade4Json/4.2B/levelB/bottle44.json');
        this.load.atlas('redmug','assets/grade4Assets/4.2B/gameAssets/levelB/redmug.png' ,'json/grade4Json/4.2B/levelB/redmug.json');
        this.load.atlas('glass44','assets/grade4Assets/4.2B/gameAssets/levelB/glass44.png' ,'json/grade4Json/4.2B/levelB/glass44.json');
        
        this.load.atlas('pot222','assets/grade4Assets/4.2B/gameAssets/levelB/pot222.png' ,'json/grade4Json/4.2B/levelB/pot222.json');
        this.load.atlas('can222','assets/grade4Assets/4.2B/gameAssets/levelB/can222.png' ,'json/grade4Json/4.2B/levelB/can222.json');
        this.load.atlas('watercontainer','assets/grade4Assets/4.2B/gameAssets/levelB/watercontainer.png' ,'json/grade4Json/4.2B/levelB/watercontainer.json');
        
        this.load.image('shadow7','assets/grade4Assets/4.2B/gameAssets/levelB/shadow7.png');
        this.load.image('shadow8','assets/grade4Assets/4.2B/gameAssets/levelB/shadow8.png');
        this.load.image('shadow9','assets/grade4Assets/4.2B/gameAssets/levelB/shadow9.png');
        
        this.load.image('a1','assets/grade4Assets/4.2B/gameAssets/levelB/a1.png');
        this.load.atlas('a11','assets/grade4Assets/4.2B/gameAssets/levelB/a11.png','json/grade4Json/4.2B/levelB/a11.json');
        
        this.load.atlas('boxb','assets/grade4Assets/4.2B/gameAssets/levelB/boxb.png' ,'json/grade4Json/4.2B/levelB/boxb.json');
        
        
         this.load.audio('baudio', 'questionSounds/4.2B/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/4.2B/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/4.2B/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/4.2B/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/4.2B/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/4.2B/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/4.2B/snapSound.mp3');
        this.load.audio('waterFillingSound', 'questionSounds/4.2B/waterFillingSound.mp3');
        this.load.audio('watersplash','questionSounds/4.2B/watersplash.mp3');
        this.load.audio('Eng_42A1', 'questionSounds/4.2B/English/4.2A1.mp3');
        this.load.audio('Eng_42B1', 'questionSounds/4.2B/English/4.2B1.mp3');
        this.load.audio('Eng_42C1', 'questionSounds/4.2B/English/4.2C1.mp3');
        this.load.audio('Kan_42A1', 'questionSounds/4.2B/Kannada/4.2A1.mp3');
        this.load.audio('Kan_42B1', 'questionSounds/4.2B/Kannada/4.2B1.mp3');
        this.load.audio('Kan_42C1', 'questionSounds/4.2B/Kannada/4.2C1.mp3');
        this.load.audio('Hin_42A1', 'questionSounds/4.2B/Hindi/4.2A1.mp3');
        this.load.audio('Hin_42B1', 'questionSounds/4.2B/Hindi/4.2B1.mp3');
        this.load.audio('Hin_42C1', 'questionSounds/4.2B/Hindi/4.2C1.mp3');
		
		
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
        waterFillingSound=this.add.audio('waterFillingSound');
        watersplash=this.add.audio('watersplash');
        Eng_42A1=this.add.audio('Eng_42A1');
        Eng_42B1=this.add.audio('Eng_42B1');
        Eng_42C1=this.add.audio('Eng_42C1');
        Kan_42A1=this.add.audio('Kan_42A1');
        Kan_42B1=this.add.audio('Kan_42B1');
        Kan_42C1=this.add.audio('Kan_42C1');
        Hin_42A1=this.add.audio('Hin_42A1');
        Hin_42B1=this.add.audio('Hin_42B1');
        Hin_42C1=this.add.audio('Hin_42C1');
    	
		
        this.sound.setDecodedCallback([baudio,celebr,waudio,ClickSound,aiyoh,OhSound,snapSound,waterFillingSound,watersplash,Eng_42A1,Eng_42B1,Eng_42C1,Kan_42A1,Kan_42B1,Kan_42C1,Hin_42A1,Hin_42B1,Hin_42C1 ], function(){
		
		this.state.start('grade4_2Blevel1');
			
			}, this);
	}
}