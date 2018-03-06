Game.grade4_2Cpreloader=function(game){
	//this.preloadBar=null;
	    var baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFill;
        var bgSound,rightSound,wrongSound,ClickSound;
        var Eng_43A1,Eng_43B1,Eng_43C1,Eng_43C11,Eng_43D1;
        var Kan_43A1,Kan_43B1,Kan_43C1,Kan_43C11,Kan_43D1;
        var Hin_43A1,Hin_43B1,Hin_43C1,Hin_43C11,Hin_43D1;
};

Game.grade4_2Cpreloader.prototype={
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
        
        this.load.image('bgA','assets/grade4Assets/4.2C/commonAssets/bgA.png');
        this.load.atlas('backbtn','assets/grade4Assets/4.2C/commonAssets/backbtn.png' ,'json/grade4Json/4.2C/backbtn.json');
        this.load.atlas('speaker','assets/grade4Assets/4.2C/commonAssets/speaker.png' ,'json/grade4Json/4.2C/speaker.json');
        this.load.atlas('starAnim','assets/grade4Assets/4.2C/commonAssets/starAnim.png','json/grade4Json/4.2C/starAnim.json');
        this.load.image('cloud','assets/grade4Assets/4.2C/commonAssets/cloud.png');
        this.load.atlas('btn','assets/grade4Assets/4.2C/commonAssets/btn.png','json/grade4Json/4.2C/btn.json');
        this.load.image('bg3','assets/grade4Assets/4.2C/commonAssets/bg3.png');
        this.load.image('tittleBaar','assets/grade4Assets/4.2C/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade4Assets/4.2C/commonAssets/reply.png' ,'json/grade4Json/4.2C/reply.json');
        
        //Load 4.2A Assets
        this.load.atlas('bottle','assets/grade4Assets/4.2C/gameAssets/bottle.png' ,'json/grade4Json/4.2C/bottle.json');
        this.load.atlas('bottleblue','assets/grade4Assets/4.2C/gameAssets/bottleblue.png' ,'json/grade4Json/4.2C/bottleblue.json');
        this.load.atlas('bucket','assets/grade4Assets/4.2C/gameAssets/bucket.png' ,'json/grade4Json/4.2C/bucket.json');
        this.load.atlas('cup','assets/grade4Assets/4.2C/gameAssets/cup.png' ,'json/grade4Json/4.2C/cup.json');
        this.load.atlas('cupreverse','assets/grade4Assets/4.2C/gameAssets/cupreverse.png' ,'json/grade4Json/4.2C/cupreverse.json');
        this.load.atlas('glass','assets/grade4Assets/4.2C/gameAssets/glass.png' ,'json/grade4Json/4.2C/glass.json');
        this.load.atlas('jug','assets/grade4Assets/4.2C/gameAssets/jug.png' ,'json/grade4Json/4.2C/jug.json');
        this.load.atlas('pinkmug','assets/grade4Assets/4.2C/gameAssets/pinkmug.png' ,'json/grade4Json/4.2C/pinkmug.json');
        this.load.atlas('soda','assets/grade4Assets/4.2C/gameAssets/soda.png' ,'json/grade4Json/4.2C/soda.json');
        this.load.image('box','assets/grade4Assets/4.2C/gameAssets/box.png');
        
        
        //Load 4.2C Assets
        this.load.atlas('bluebottlec','assets/grade4Assets/4.2C/gameAssets/bluebottlec.png' ,'json/grade4Json/4.2C/bluebottlec.json');
        this.load.atlas('bluebucketc','assets/grade4Assets/4.2C/gameAssets/bluebucketc.png' ,'json/grade4Json/4.2C/bluebucketc.json');
        this.load.atlas('bottlec','assets/grade4Assets/4.2C/gameAssets/bottlec.png' ,'json/grade4Json/4.2C/bottlec.json');
        this.load.atlas('greenmugc','assets/grade4Assets/4.2C/gameAssets/greenmugc.png' ,'json/grade4Json/4.2C/greenmugc.json');
        this.load.atlas('pinkbucketc','assets/grade4Assets/4.2C/gameAssets/pinkbucketc.png' ,'json/grade4Json/4.2C/pinkbucketc.json');
        this.load.atlas('potsplashc','assets/grade4Assets/4.2C/gameAssets/potsplashc.png' ,'json/grade4Json/4.2C/potsplashc.json');
        this.load.atlas('vessel2c','assets/grade4Assets/4.2C/gameAssets/vessel2c.png' ,'json/grade4Json/4.2C/vessel2c.json');
        this.load.atlas('yellowctc','assets/grade4Assets/4.2C/gameAssets/yellowctc.png' ,'json/grade4Json/4.2C/yellowctc.json');
        this.load.image('maskbg','assets/grade4Assets/4.2C/gameAssets/maskbg.png');
        this.load.image('common_shadow','assets/grade4Assets/4.2C/gameAssets/common_shadow.png');
        
        //LEVELB
        
        this.load.atlas('tank2','assets/grade4Assets/4.2C/gameAssets/levelB/tank.png' ,'json/grade4Json/4.2C/levelB/tank.json');
        this.load.atlas('drum2','assets/grade4Assets/4.2C/gameAssets/levelB/drum.png' ,'json/grade4Json/4.2C/levelB/drum.json');
        this.load.atlas('pot2','assets/grade4Assets/4.2C/gameAssets/levelB/pot.png' ,'json/grade4Json/4.2C/levelB/pot.json');
        this.load.image('box','assets/grade4Assets/4.2C/gameAssets/levelB/box.png');
        this.load.image('darkbg1','assets/grade4Assets/4.2C/gameAssets/levelB/darkbg1.png');
        this.load.image('darkbg2','assets/grade4Assets/4.2C/gameAssets/levelB/darkbg2.png');
        this.load.image('mainbox','assets/grade4Assets/4.2C/gameAssets/levelB/mainbox.png');
        this.load.atlas('tick','assets/grade4Assets/4.2C/gameAssets/levelB/tick.png' ,'json/grade4Json/4.2C/levelB/tick.json');
        
        this.load.atlas('cookerB','assets/grade4Assets/4.2C/gameAssets/levelB/cooker.png' ,'json/grade4Json/4.2C/levelB/cooker.json');
        this.load.atlas('bottleB','assets/grade4Assets/4.2C/gameAssets/levelB/bottle.png' ,'json/grade4Json/4.2C/levelB/bottle.json');
        this.load.atlas('jugB','assets/grade4Assets/4.2C/gameAssets/levelB/jug.png' ,'json/grade4Json/4.2C/levelB/jug.json');
        this.load.image('coffeecup','assets/grade4Assets/4.2C/gameAssets/levelB/coffeecup.png');
        
        this.load.atlas('mugB','assets/grade4Assets/4.2C/gameAssets/levelB/mug.png' ,'json/grade4Json/4.2C/levelB/mug.json');
        this.load.atlas('orangebottleB','assets/grade4Assets/4.2C/gameAssets/levelB/orangebottle.png' ,'json/grade4Json/4.2C/levelB/orangebottle.json');
        this.load.atlas('canB','assets/grade4Assets/4.2C/gameAssets/levelB/can.png' ,'json/grade4Json/4.2C/levelB/can.json');
        
        this.load.atlas('greenbot22','assets/grade4Assets/4.2C/gameAssets/levelB/greenbot22.png' ,'json/grade4Json/4.2C/levelB/greenbot22.json');
        this.load.atlas('bottle22','assets/grade4Assets/4.2C/gameAssets/levelB/bottle22.png' ,'json/grade4Json/4.2C/levelB/bottle22.json');
        
        this.load.atlas('pinkglass','assets/grade4Assets/4.2C/gameAssets/levelB/pinkglass.png' ,'json/grade4Json/4.2C/levelB/pinkglass.json');
        this.load.atlas('greencup','assets/grade4Assets/4.2C/gameAssets/levelB/greencup.png' ,'json/grade4Json/4.2C/levelB/greencup.json');
        this.load.atlas('smallbottle','assets/grade4Assets/4.2C/gameAssets/levelB/smallbottle.png' ,'json/grade4Json/4.2C/levelB/smallbottle.json');
        this.load.image('spoon','assets/grade4Assets/4.2C/gameAssets/levelB/spoon.png');
        
        this.load.atlas('bucket33','assets/grade4Assets/4.2C/gameAssets/levelB/bucket.png' ,'json/grade4Json/4.2C/levelB/bucket.json');
        this.load.image('greena1','assets/grade4Assets/4.2C/gameAssets/levelB/greena1.png');
        
        this.load.atlas('bottle44','assets/grade4Assets/4.2C/gameAssets/levelB/bottle44.png' ,'json/grade4Json/4.2C/levelB/bottle44.json');
        this.load.atlas('redmug','assets/grade4Assets/4.2C/gameAssets/levelB/redmug.png' ,'json/grade4Json/4.2C/levelB/redmug.json');
        this.load.atlas('glass44','assets/grade4Assets/4.2C/gameAssets/levelB/glass44.png' ,'json/grade4Json/4.2C/levelB/glass44.json');
        
        this.load.atlas('pot222','assets/grade4Assets/4.2C/gameAssets/levelB/pot222.png' ,'json/grade4Json/4.2C/levelB/pot222.json');
        this.load.atlas('can222','assets/grade4Assets/4.2C/gameAssets/levelB/can222.png' ,'json/grade4Json/4.2C/levelB/can222.json');
        this.load.atlas('watercontainer','assets/grade4Assets/4.2C/gameAssets/levelB/watercontainer.png' ,'json/grade4Json/4.2C/levelB/watercontainer.json');
        
        this.load.image('shadow7','assets/grade4Assets/4.2C/gameAssets/levelB/shadow7.png');
        this.load.image('shadow8','assets/grade4Assets/4.2C/gameAssets/levelB/shadow8.png');
        this.load.image('shadow9','assets/grade4Assets/4.2C/gameAssets/levelB/shadow9.png');
        
        this.load.image('a1','assets/grade4Assets/4.2C/gameAssets/levelB/a1.png');
        this.load.atlas('a11','assets/grade4Assets/4.2C/gameAssets/levelB/a11.png','json/grade4Json/4.2C/levelB/a11.json');
        
        this.load.atlas('boxb','assets/grade4Assets/4.2C/gameAssets/levelB/boxb.png' ,'json/grade4Json/4.2C/levelB/boxb.json');
        
        
        this.load.audio('baudio', 'questionSounds/4.2C/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/4.2C/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/4.2C/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/4.2C/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/4.2C/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/4.2C/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/4.2C/snapSound.mp3');
        this.load.audio('waterFillingSound', 'questionSounds/4.2C/waterFillingSound.mp3');
        this.load.audio('watersplash','questionSounds/4.2C/watersplash.mp3');
        this.load.audio('Eng_42A1', 'questionSounds/4.2C/English/4.2A1.mp3');
        this.load.audio('Eng_42B1', 'questionSounds/4.2C/English/4.2B1.mp3');
        this.load.audio('Eng_42C1', 'questionSounds/4.2C/English/4.2C1.mp3');
        this.load.audio('Kan_42A1', 'questionSounds/4.2C/Kannada/4.2A1.mp3');
        this.load.audio('Kan_42B1', 'questionSounds/4.2C/Kannada/4.2B1.mp3');
        this.load.audio('Kan_42C1', 'questionSounds/4.2C/Kannada/4.2C1.mp3');
        this.load.audio('Hin_42A1', 'questionSounds/4.2C/Hindi/4.2A1.mp3');
        this.load.audio('Hin_42B1', 'questionSounds/4.2C/Hindi/4.2B1.mp3');
        this.load.audio('Hin_42C1', 'questionSounds/4.2C/Hindi/4.2C1.mp3');
		
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
    	

		this.sound.setDecodedCallback([ baudio,celebr,waudio,ClickSound,aiyoh,OhSound,waterFillingSound,watersplash,Eng_42A1,Eng_42B1,Eng_42C1,Kan_42A1,Kan_42B1,Kan_42C1,Hin_42A1,Hin_42B1,Hin_42C1], function(){
		
		this.state.start('grade4_2Clevel1');
			
			}, this);
	}
}