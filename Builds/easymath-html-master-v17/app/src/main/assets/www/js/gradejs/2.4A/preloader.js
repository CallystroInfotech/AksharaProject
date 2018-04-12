Game.grade2_4Apreloader=function(game){
	//this.preloadBar=null;
	var Eng_24A1,Eng_24A2,Eng_24B1;
        var Kan_24A1,Kan_24A2,Kan_24B1;
        var Hin_24A1,Hin_24A2,Hin_24B1;
};

Game.grade2_4Apreloader.prototype={
	preload:function(){

        var bg = this.add.sprite(0,-80,'CommonBackground');
		bg.scale.setTo(1,1.5);
		
		var preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');

		preloadBar.anchor.setTo(0.5,0.5);

		this.time.advanceTiming=true;

		this.load.setPreloadSprite(preloadBar);
		
        
        
        
        this.load.image('bg1','assets/grade3Assets/2.4A/commonAssets/bg1.png');
        
        
        
        this.load.atlas('backbtn','assets/grade3Assets/2.4A/commonAssets/backbtn.png' ,'json/grade3Json/2.4A/backbtn.json');
        this.load.atlas('speaker','assets/grade3Assets/2.4A/commonAssets/speaker.png' ,'json/grade3Json/2.4A/speaker.json');
        this.load.atlas('starAnim','assets/grade3Assets/2.4A/commonAssets/starAnim.png','json/grade3Json/2.4A/starAnim.json');
        this.load.image('cloud','assets/grade3Assets/2.4A/commonAssets/cloud.png');
        this.load.atlas('btn','assets/grade3Assets/2.4A/commonAssets/btn.png','json/grade3Json/2.4A/btn.json');
        this.load.image('bg3','assets/grade3Assets/2.4A/commonAssets/bg3.png');
        this.load.image('tittleBaar','assets/grade3Assets/2.4A/commonAssets/tittleBaar.png');
        this.load.atlas('replay','assets/grade3Assets/2.4A/commonAssets/reply.png' ,'json/grade3Json/2.4A/reply.json');
        this.load.atlas('numbg','assets/grade3Assets/2.4A/commonAssets/numbg.png' ,'json/grade3Json/2.4A/numbg.json');
        this.load.atlas('rightBtn','assets/grade3Assets/2.4A/commonAssets/rightBtn.png' ,'json/grade3Json/2.4A/rightBtn.json');
        this.load.atlas('wrongBtn','assets/grade3Assets/2.4A/commonAssets/wrongBtn.png' ,'json/grade3Json/2.4A/wrongBtn.json');
        
        
        this.load.atlas('tape15cm','assets/grade3Assets/2.4A/commonAssets/tape15cm.png' ,'json/grade3Json/2.4A/tape15cm.json');
        this.load.atlas('tape30cm','assets/grade3Assets/2.4A/commonAssets/tape30cm.png' ,'json/grade3Json/2.4A/tape30cm.json');
        this.load.atlas('tape100cm','assets/grade3Assets/2.4A/commonAssets/tape100cm.png' ,'json/grade3Json/2.4A/tape100cm.json');
        this.load.atlas('scaleMarker','assets/grade3Assets/2.4A/commonAssets/scaleMarker.png' ,'json/grade3Json/2.4A/scaleMarker.json');
        this.load.image('scaleMarkerNew','assets/grade3Assets/2.4A/commonAssets/scaleMarkerNew.png');
        
        this.load.image('txtbox','assets/grade3Assets/2.4A/commonAssets/box.png');
        this.load.image('tape1','assets/grade3Assets/2.4A/commonAssets/tape1.png');
        this.load.image('tape2','assets/grade3Assets/2.4A/commonAssets/tape2.png');
        this.load.image('tape3','assets/grade3Assets/2.4A/commonAssets/tape3.png');
       // this.load.image('tape15cm','assets/grade3Assets/2.4A/commonAssets/tape15cm.png');
       // this.load.image('tape30cm','assets/grade3Assets/2.4A/commonAssets/tape30cm.png');
       // this.load.image('tape100cm','assets/grade3Assets/2.4A/commonAssets/tape100cm.png');
        this.load.image('scale','assets/grade3Assets/2.4A/commonAssets/scale.png');
        this.load.image('scaleNew','assets/grade3Assets/2.4A/commonAssets/scaleNew.png');
        //this.load.image('scaleMarker','assets/grade3Assets/2.4A/commonAssets/scaleMarker.png');
        this.load.image('tapeTint','assets/grade3Assets/2.4A/commonAssets/tapeTint.png');
        
        
        //My files to load
        this.load.atlas('shoe','assets/grade3Assets/2.4A/gameAssets/shoe.png' ,'json/grade3Json/2.4A/shoe.json');
        this.load.atlas('shoe2','assets/grade3Assets/2.4A/gameAssets/shoe2.png' ,'json/grade3Json/2.4A/shoe2.json');
        this.load.atlas('fish','assets/grade3Assets/2.4A/gameAssets/fish.png' ,'json/grade3Json/2.4A/fish.json');
        this.load.atlas('clip','assets/grade3Assets/2.4A/gameAssets/clip.png' ,'json/grade3Json/2.4A/clip.json');
        this.load.atlas('pencil','assets/grade3Assets/2.4A/gameAssets/pencil.png' ,'json/grade3Json/2.4A/pencil.json');
        this.load.atlas('screwDriver','assets/grade3Assets/2.4A/gameAssets/screwDriver.png' ,'json/grade3Json/2.4A/screwDriver.json');
        this.load.atlas('key','assets/grade3Assets/2.4A/gameAssets/key.png' ,'json/grade3Json/2.4A/key.json');
        this.load.atlas('watch','assets/grade3Assets/2.4A/gameAssets/watch.png' ,'json/grade3Json/2.4A/watch.json');
        this.load.atlas('pen','assets/grade3Assets/2.4A/gameAssets/pen.png' ,'json/grade3Json/2.4A/pen.json');
        this.load.atlas('scale1','assets/grade3Assets/2.4A/gameAssets/scale1.png' ,'json/grade3Json/2.4A/scale1.json');
        this.load.atlas('scale2','assets/grade3Assets/2.4A/gameAssets/scale2.png' ,'json/grade3Json/2.4A/scale2.json');
        this.load.atlas('bat','assets/grade3Assets/2.4A/gameAssets/bat.png' ,'json/grade3Json/2.4A/bat.json');
        this.load.atlas('cup','assets/grade3Assets/2.4A/gameAssets/cup.png' ,'json/grade3Json/2.4A/cup.json');
        this.load.atlas('jug','assets/grade3Assets/2.4A/gameAssets/jug.png' ,'json/grade3Json/2.4A/jug.json');
        this.load.atlas('chair','assets/grade3Assets/2.4A/gameAssets/chair.png' ,'json/grade3Json/2.4A/chair.json');
        this.load.atlas('mug','assets/grade3Assets/2.4A/gameAssets/mug.png' ,'json/grade3Json/2.4A/mug.json');
        this.load.atlas('table','assets/grade3Assets/2.4A/gameAssets/table.png' ,'json/grade3Json/2.4A/table.json');
        this.load.atlas('pot','assets/grade3Assets/2.4A/gameAssets/pot.png' ,'json/grade3Json/2.4A/pot.json');
        
        
        this.load.atlas('level2Scale1','assets/grade3Assets/2.4A/gameAssets/level2Scale1.png' ,'json/grade3Json/2.4A/level2Scale1.json');
        this.load.atlas('level2Scale2','assets/grade3Assets/2.4A/gameAssets/level2Scale2.png' ,'json/grade3Json/2.4A/level2Scale2.json');
        this.load.atlas('level2Scale3','assets/grade3Assets/2.4A/gameAssets/level2Scale3.png' ,'json/grade3Json/2.4A/level2Scale3.json');
        this.load.atlas('tree','assets/grade3Assets/2.4A/gameAssets/tree.png' ,'json/grade3Json/2.4A/tree.json');
        this.load.atlas('tape4','assets/grade3Assets/2.4A/commonAssets/tape4.png' ,'json/grade3Json/2.4A/tape4.json');
        this.load.atlas('car','assets/grade3Assets/2.4A/gameAssets/car.png' ,'json/grade3Json/2.4A/car.json');
        this.load.atlas('carpet','assets/grade3Assets/2.4A/gameAssets/carpet.png' ,'json/grade3Json/2.4A/carpet.json');
        
        /*
        this.load.atlas('gameBox','assets/grade3Assets/2.4A/gameAssets/gameBox.png' ,'json/grade3Json/2.4A/gameBox.json');
       // this.load.atlas('allimg','assets/grade3Assets/2.4A/gameAssets/allimg.png' ,'json/grade3Json/2.4A/allimg.json');
        this.load.atlas('allimg','assets/grade3Assets/2.4A/gameAssets/allimg2.png' ,'json/grade3Json/2.4A/allimg2.json');
        this.load.atlas('glow','assets/grade3Assets/2.4A/gameAssets/glow.png' ,'json/grade3Json/2.4A/glow.json');
        this.load.atlas('tickMark','assets/grade3Assets/2.4A/gameAssets/tickMark.png' ,'json/grade3Json/2.4A/tickMark.json');
        this.load.image('croc','assets/grade3Assets/2.4A/gameAssets/croc.png');
        
        
        //game items
         this.load.image('building1','assets/grade3Assets/2.4A/gameAssets/1.png');
         this.load.image('building2','assets/grade3Assets/2.4A/gameAssets/2.png');
         this.load.image('building3','assets/grade3Assets/2.4A/gameAssets/3.png');
         this.load.image('building4','assets/grade3Assets/2.4A/gameAssets/4.png');
        
         this.load.image('stairs1','assets/grade3Assets/2.4A/gameAssets/5.png');
         this.load.image('stairs2','assets/grade3Assets/2.4A/gameAssets/6.png');
         this.load.image('stairs3','assets/grade3Assets/2.4A/gameAssets/7.png');
         this.load.image('stairs4','assets/grade3Assets/2.4A/gameAssets/8.png');
        
         this.load.image('dog1','assets/grade3Assets/2.4A/gameAssets/9.png');
         this.load.image('dog2','assets/grade3Assets/2.4A/gameAssets/10.png');
         this.load.image('dog3','assets/grade3Assets/2.4A/gameAssets/11.png');
         this.load.image('dog4','assets/grade3Assets/2.4A/gameAssets/12.png');
        
         this.load.image('snake1','assets/grade3Assets/2.4A/gameAssets/13.png');
         this.load.image('snake2','assets/grade3Assets/2.4A/gameAssets/14.png');
         this.load.image('snake3','assets/grade3Assets/2.4A/gameAssets/15.png');
         this.load.image('snake4','assets/grade3Assets/2.4A/gameAssets/16.png');
        
         this.load.image('bottle1','assets/grade3Assets/2.4A/gameAssets/17.png');
         this.load.image('bottle2','assets/grade3Assets/2.4A/gameAssets/18.png');
         this.load.image('bottle3','assets/grade3Assets/2.4A/gameAssets/19.png');
         this.load.image('bottle4','assets/grade3Assets/2.4A/gameAssets/20.png');
        
         this.load.image('box1','assets/grade3Assets/2.4A/gameAssets/21.png');
         this.load.image('box2','assets/grade3Assets/2.4A/gameAssets/22.png');
         this.load.image('box3','assets/grade3Assets/2.4A/gameAssets/23.png');
         this.load.image('box4','assets/grade3Assets/2.4A/gameAssets/24.png');
        
         this.load.image('animal1','assets/grade3Assets/2.4A/gameAssets/25.png');
         this.load.image('animal2','assets/grade3Assets/2.4A/gameAssets/26.png');
         this.load.image('animal3','assets/grade3Assets/2.4A/gameAssets/27.png');
         this.load.image('animal4','assets/grade3Assets/2.4A/gameAssets/28.png');
        
         this.load.image('bird1','assets/grade3Assets/2.4A/gameAssets/29.png');
         this.load.image('bird2','assets/grade3Assets/2.4A/gameAssets/30.png');
         this.load.image('bird3','assets/grade3Assets/2.4A/gameAssets/31.png');
         this.load.image('bird4','assets/grade3Assets/2.4A/gameAssets/32.png');
        
        
        
        
        
        
        
        
        
        
        
        
        this.load.atlas('giraffe','assets/giraffe.png','json/grade3Json/2.4A/giraffe.json');
        this.load.atlas('elephant','assets/elephant.png','json/grade3Json/2.4A/elephant.json');
        this.load.image('tree1','assets/tree1.png');
        
        this.load.atlas('bird1','assets/bird1.png','json/grade3Json/2.4A/bird1.json');
        this.load.atlas('dog1','assets/dog1.png','json/grade3Json/2.4A/dog1.json');
        this.load.image('cat','assets/cat.png');
        this.load.image('house1','assets/house1.png');
        
        this.load.atlas('bluemug','assets/bluemug.png','json/grade3Json/2.4A/bluemug.json');
        this.load.atlas('pinkpot','assets/pinkpot.png','json/grade3Json/2.4A/pinkpot.json');
        this.load.image('chair1','assets/chair1.png');
        this.load.image('ladder1','assets/ladder1.png');
        
        this.load.image('sofa1','assets/sofa1.png'); 
        this.load.atlas('clock1','assets/clock1.png','json/grade3Json/2.4A/clock1.json');
        this.load.atlas('book1','assets/book1.png','json/grade3Json/2.4A/book1.json');
        
        this.load.atlas('elephant1','assets/elephant1.png','json/grade3Json/2.4A/elephant1.json');
        this.load.atlas('bee1','assets/bee1.png','json/grade3Json/2.4A/bee1.json');
        
        this.load.atlas('papaya1','assets/papaya1.png','json/grade3Json/2.4A/papaya1.json');
        this.load.atlas('banana1','assets/banana1.png','json/grade3Json/2.4A/banana1.json');
        
        this.load.atlas('key1','assets/key1.png','json/grade3Json/2.4A/key1.json');
        this.load.atlas('key2','assets/key2.png','json/grade3Json/2.4A/key2.json');
        
        this.load.atlas('dog2','assets/dog2.png','json/grade3Json/2.4A/dog2.json');
        this.load.atlas('cat2','assets/cat2.png','json/grade3Json/2.4A/cat2.json');
        
        this.load.atlas('dog3','assets/dog3.png','json/grade3Json/2.4A/dog3.json');
        this.load.atlas('snake1','assets/snake1.png','json/grade3Json/2.4A/snake1.json');
        this.load.image('sofa2','assets/sofa2.png');
        
        this.load.image('table1','assets/table1.png');
        this.load.atlas('cat3','assets/cat3.png','json/grade3Json/2.4A/cat3.json');
        this.load.atlas('book2','assets/book2.png','json/grade3Json/2.4A/book2.json');
        
        this.load.image('sofa3','assets/sofa3.png');
        this.load.atlas('scooter1','assets/scooter1.png','json/grade3Json/2.4A/scooter1.json');
        this.load.atlas('car1','assets/car1.png','json/grade3Json/2.4A/car1.json');
        
        this.load.image('house2','assets/house2.png');
        this.load.atlas('cat4','assets/cat4.png','json/grade3Json/2.4A/cat4.json');
        
        this.load.image('tree2','assets/tree2.png');
        this.load.atlas('croc1','assets/croc1.png','json/grade3Json/2.4A/croc1.json');
        this.load.atlas('bird2','assets/bird2.png','json/grade3Json/2.4A/bird2.json');
        
        this.load.atlas('fish1','assets/fish1.png','json/grade3Json/2.4A/fish1.json');
        this.load.atlas('cat5','assets/cat5.png','json/grade3Json/2.4A/cat5.json');
        
        this.load.image('house3','assets/house3.png');
        this.load.atlas('sofa4','assets/sofa4.png','json/grade3Json/2.4A/sofa4.json');
        this.load.atlas('scooter2','assets/scooter2.png','json/grade3Json/2.4A/scooter2.json');
        
        this.load.image('basket1','assets/basket1.png');
        this.load.atlas('papaya2','assets/papaya2.png','json/grade3Json/2.4A/papaya2.json');
        
        this.load.image('flower1','assets/flower1.png');
        this.load.atlas('pot2','assets/pot2.png','json/grade3Json/2.4A/pot2.json');
        this.load.atlas('bee2','assets/bee2.png','json/grade3Json/2.4A/bee2.json');
        */
        
        //Copy from boot
           this.load.audio('baudio', 'questionSounds/2.4A/BackgroundSound.mp3');
        this.load.audio('waudio', 'questionSounds/2.4A/WrongCelebrationSound.mp3');
        this.load.audio('ClickSound', 'questionSounds/2.4A/ClickSound.mp3');
		this.load.audio('celebr', 'questionSounds/2.4A/celebration.mp3');
        this.load.audio('OhSound', 'questionSounds/2.4A/OhSound.mp3');
        this.load.audio('aiyoh', 'questionSounds/2.4A/aiyoh.mp3');
        this.load.audio('snapSound', 'questionSounds/2.4A/snapSound.mp3');
        this.load.audio('slide', 'questionSounds/2.4A/slide.mp3');
        this.load.audio('Eng_24A1', 'questionSounds/2.4A/English/2.4A1.mp3');
        this.load.audio('Eng_24A2', 'questionSounds/2.4A/English/2.4A2.mp3');
        this.load.audio('Eng_24B1', 'questionSounds/2.4A/English/2.4B1.mp3');
        this.load.audio('Kan_24A1', 'questionSounds/2.4A/Kannada/2.4A1.mp3');
        this.load.audio('Kan_24A2', 'questionSounds/2.4A/Kannada/2.4A2.mp3');
        this.load.audio('Kan_24B1', 'questionSounds/2.4A/Kannada/2.4B1.mp3');
        this.load.audio('Hin_24A1', 'questionSounds/2.4A/Hindi/2.4A1.mp3');
        this.load.audio('Hin_24A2', 'questionSounds/2.4A/Hindi/2.4A2.mp3');
        this.load.audio('Hin_24B1', 'questionSounds/2.4A/Hindi/2.4B1.mp3');
		
		this.load.onLoadComplete.add(this.onloadComplete,this);
	},

	onloadComplete:function(){
		this.load.onLoadComplete.removeAll();  
        slideSound=this.add.audio('slide');
    	Eng_24A1=this.add.audio('Eng_24A1');
        Eng_24A2=this.add.audio('Eng_24A2');
        Eng_24B1=this.add.audio('Eng_24B1');
        Kan_24A1=this.add.audio('Kan_24A1');
        Kan_24A2=this.add.audio('Kan_24A2');
        Kan_24B1=this.add.audio('Kan_24B1');
        Hin_24A1=this.add.audio('Hin_24A1');
        Hin_24A2=this.add.audio('Hin_24A2');
        Hin_24B1=this.add.audio('Hin_24B1');
        
		this.sound.setDecodedCallback([Eng_24A1,Eng_24A2,Eng_24B1,Kan_24A1,Kan_24A2,Kan_24B1,Hin_24A1,Hin_24A2,Hin_24B1 ], function(){
		
		this.state.start('grade2_4Alevel1');
			
			}, this);
	}
}