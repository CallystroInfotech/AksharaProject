Game.grade1_2Alevel1=function(){};

var background;
var navBg;
var headingAnim;
var windAnim1;
var windSprite1,windSprite2,windSprite3,windSprite4,windSprite5,windSprite6,windSprite7,windSprite8,windSprite9;
var redpaint;
var yellowpaint;
var greenpaint;
var selectedColor = null;
var windmillGroup;
//var rightAnswer = false;
var questionArray = new Array();
var text;
var questionBackground;
var scoreBg = 0;
var score = 0;
var scoretext;
var count;
var anim1111;
var wronggraphics1,wronggraphics2,wronggraphics3,wronggraphics4,wronggraphics5,wronggraphics6,wronggraphics7,wronggraphics8,wronggraphics9,wronggraphics10,wronggraphics11,wronggraphics12,wronggraphics13,wronggraphics14,wronggraphics15,wronggraphics16;
var starsGroup;
//var generateStarArray = new Array();
//generateStarArray = [480,510,450,540,420,570,390,600,360];

Game.grade1_2Alevel1.prototype={
	create:function(game){
		
		questionArray = [1,2,3,4,5,6,7,8,9];
		questionArray = this.shuffle(questionArray);
		count = 0;
    // console.log(this.game.storage.length);
		
		/*loginTime = game.storage.getItem('loginTime');		
		var time = new Date();		
		game.storage.setItem('loginTime', time);*/
		
		Phaser.Input.TOUCH_OVERRIDES_MOUSE = 1;
		this.game.input.touch.preventDefault = false;
		
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
		
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();
		
       // background = this.add.tileSprite(0,0,this.world.width,this.world.height-50,'Level12A_background');
      
        //background.scale.setTo(1.05,1.12);
        background = this.add.tileSprite(0,0,this.world.width,this.world.height,'Level12A_background');
        
		//adding background image.
		//background = this.add.tileSprite(0,0,this.world.width,this.world.height,'Level12A_background');
		//navBg = this.add.sprite(0,20,'Level12A_navBg');
		this.generateStarsForTheScene(6);
		//var starAnim = this.add.sprite(this.world.centerX,35,'Level12A_starAnim');
		
		
		//var backBtn = this.add.button(5,1,'Level12A_backBtn',function(){console.log("here");},this,0,1,2);
        
        //speakerBtn = this.add.button(908,1,'Level12A_speakerBtn',function(){this.getVoice();},this,0,1,2);
		
		//adding game assets.         
		
		var backbtn = this.add.button(5,1,'CommonBackBtn',function(){
			this.stopVoice();
			var click = this.add.audio('ClickSound');
            click.play();
			this.state.start('grade3levelSelectionScreen');
		},this,1,0,2);

       speakerBtn = this.add.button(908,1,'CommonSpeakerBtn',function(){
		   click4 = this.add.audio('ClickSound');
            click4.play();
			this.getVoice();
			speakerBtn.inputEnabled = false;
			this.time.events.add(2000, function(){speakerBtn.inputEnabled = true;}, this);
		},this,1,0,2);
      
		
		
	/*	scoreBg = this.add.sprite(this.world.centerX+150,this.world.centerY+100,'Level12A_checkButton');
		scoreBg.scale.setTo(1.5,0.8);
		scoreBg.anchor.setTo(0.5);*/
		
		/*var scoreBg = this.add.sprite(200,530,'Level12A_langBg');
		scoreBg.anchor.setTo(0.5);
		scoreBg.scale.setTo(2,1.6);
		
		scoretext = this.add.text(200, 530, selctedLang.score+' : 0');
		scoretext.anchor.set(0.5);
		scoretext.align = 'center';

		scoretext.font = 'Comic Sans MS';
		scoretext.fontSize = 35;
		//text.fontWeight = 'bold';
		scoretext.fill = '#FFFFFF';

		scoretext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		//scoreBg.addChild(scoretext);	
		
		_this = this;*/
        
		
		this.displayQuestion();

	},
	
	shuffle: function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
},
	

	generateStarsForTheScene:function(count)
	{
		starsGroup = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroup.create(this.world.centerX-15, 10,'CommonStarAnim');
            
			for(var j =0;j<i;j++)
			{
				if(starsGroup.getChildAt(j))
				{
					starsGroup.getChildAt(j).x-=15;
					starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
	
	displayQuestion:function()
	{
		speakerBtn.inputEnabled=true;
        speakerBtn.input.useHandCursor = true;
		console.log("display");
         this.stopVoice();
		switch(questionArray[count])
            //switch(count)
		{
			case 1: this.addFirstWindMill(); break;
			case 2: this.addSecondWindMill(); break;
			case 3: this.addThirdWindMill(); break;
			case 4: this.addFourthWindMill(); break;
			case 5: this.addFifthWindMill(); break;
			case 6: this.addSixthWindMill(); break;
			case 7: this.addSeventhWindMill(); break;
			case 8: this.addEightWindMill(); break;
			case 9: this.addNinthWindMill(); break;
		}
		
	},
	
	addQuestion:function(no)
	{
		
        
        questionBackground = this.add.sprite(this.world.centerX,560,'Level12A_navBg');
        questionBackground.anchor.setTo(0.5);
		text = this.add.text(0, 5,'Level12A_  Colour 1/4th part of the whole  ');
		text.anchor.set(0.5);
		text.align = 'center';

		text.font = 'Comic Sans MS';
		text.fontSize = 25;
		//text.fontWeight = 'bold';
		text.fill = '#FFFFFF';

		text.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		questionBackground.addChild(text);
        
		switch(questionArray[count-1])
		{
			case 1:text.setText(selctedLang.firstSceneQuestion1);break;
			case 2:text.setText(selctedLang.firstSceneQuestion2);break;
			case 3:text.setText(selctedLang.firstSceneQuestion3);break;
			case 4:text.setText(selctedLang.firstSceneQuestion4);break;
			case 5:text.setText(selctedLang.firstSceneQuestion5);break;
			case 6:text.setText(selctedLang.firstSceneQuestion6);break;
            case 7:text.setText(selctedLang.firstSceneQuestion7);break;
			case 8:text.setText(selctedLang.firstSceneQuestion8);break;
			case 9:text.setText(selctedLang.firstSceneQuestion9);break;
				
		}
		var tween = this.add.tween(questionBackground);
		tween.to({ y: 490 }, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			//this.addEventListeners();
		}, this);

	},
	
	correctAns:function(target)
	{
		//rightAnswer = true;
        speakerBtn.inputEnabled=false;
        console.log(target.name);
        /*if(target.name == "wronggraphics3")
        {
            console.log("inside");
            windAnim1.loadTexture('scene1wind33', 0); 
            windAnim1.x+=9;
            windAnim1.y+=9;
            //windAnim1.scale.setTo(0.88);
		   // windAnim1.anchor.setTo(0.5);
        }*/
        
        anim1111 = windAnim1.animations.add('animation');
        anim1111.play(30);
        
       // anim1111.onComplete.add(function(){spin2.play();rightAnswer = true;},this);
        anim1111.onComplete.add(function(){this.removeCelebration();},this);
		this.disableButtons();
        
       
		ClickSound.play();
		celebr.play();
       // celebr.onStop.add(function(){},this);
		
		var starAnim = starsGroup.getChildAt(count-1);
		//console.log(starAnim);
		starAnim.smoothed = false;
    	var anim = starAnim.animations.add('star');
		anim.play();
        
		//score+=10;
		//scoretext.setText(selctedLang.score+' : '+score);
       // windAnim1.animations.play('rotate',80,true);
		//windAnim1.animations.currentAnim.speed = 20
        //this.time.events.add(2000, this.removeCelebration, this);
        this.time.events.add(500, function(){spin2.play();}, this);
	},
    
    disableButtons:function()
	{
		if(wronggraphics1!=null||wronggraphics1!=undefined)
			wronggraphics1.events.onInputDown.removeAll();
		if(wronggraphics2!=null||wronggraphics2!=undefined)
			wronggraphics2.events.onInputDown.removeAll();
		if(wronggraphics3!=null||wronggraphics3!=undefined)
			wronggraphics3.events.onInputDown.removeAll();
		if(wronggraphics4!=null||wronggraphics4!=undefined)
			wronggraphics4.events.onInputDown.removeAll();
		if(wronggraphics5!=null||wronggraphics5!=undefined)
			wronggraphics5.events.onInputDown.removeAll();
		if(wronggraphics6!=null||wronggraphics6!=undefined)
			wronggraphics6.events.onInputDown.removeAll();
		if(wronggraphics7!=null||wronggraphics7!=undefined)
			wronggraphics7.events.onInputDown.removeAll();
		if(wronggraphics8!=null||wronggraphics8!=undefined)
			wronggraphics8.events.onInputDown.removeAll();
		if(wronggraphics9!=null||wronggraphics9!=undefined)
			wronggraphics9.events.onInputDown.removeAll();
		if(wronggraphics10!=null||wronggraphics10!=undefined)
			wronggraphics10.events.onInputDown.removeAll();
		if(wronggraphics11!=null||wronggraphics11!=undefined)
			wronggraphics11.events.onInputDown.removeAll();
		if(wronggraphics12!=null||wronggraphics12!=undefined)
			wronggraphics12.events.onInputDown.removeAll();
		if(wronggraphics13!=null||wronggraphics13!=undefined)
			wronggraphics13.events.onInputDown.removeAll();
		if(wronggraphics14!=null||wronggraphics14!=undefined)
			wronggraphics14.events.onInputDown.removeAll();
		if(wronggraphics15!=null||wronggraphics15!=undefined)
			wronggraphics15.events.onInputDown.removeAll();
		if(wronggraphics16!=null||wronggraphics16!=undefined)
			wronggraphics16.events.onInputDown.removeAll();
	},
	
    wrongAns:function()
	{
		//rightAnswer = true;
		//score-=5;
		//scoretext.setText(selctedLang.score+' : '+score);
		ClickSound.play();
		waudio.play();
        shake.shake(10,windAnim1);
	},
    
    removeCelebration:function()
	{
        spin2.stop();
        rightAnswer = false;
		//windAnim1.animations.stop('rotate');
        //questionBackground.destroy();
    
         var tween = this.add.tween(windmillGroup);
		tween.to({ x: -500}, 700,'Linear', true, 0);
		tween.onComplete.add(function(){
			//this.addQuestion(count);
            windmillGroup.destroy();
            

            if(count<6)
            {
                this.displayQuestion();
            }
            else
            {
                
				this.state.start('grade1_2AScore');
            }
		}, this); 
	},
	
	addFirstWindMill:function()
	{
		 
		count++;		
		//adding windmill to the game.
        var stick = this.add.sprite(this.world.centerX-5,this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
    
        
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene1wind1');		
		//windAnim1.scale.setTo(0.88);
		windAnim1.anchor.setTo(0.5);		
		//windAnim1.animations.add('rotate');
        
        
        
        wronggraphics1 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);

		wronggraphics1.lineTo(-70, 60);
		wronggraphics1.lineTo(0, 120);
		wronggraphics1.lineTo(120, 150);
		wronggraphics1.lineTo(0, 0);
        wronggraphics1.angle = 90;
        wronggraphics1.alpha = 0;
        
        wronggraphics2 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);

		wronggraphics2.lineTo(-70, 60);
		wronggraphics2.lineTo(0, 120);
		wronggraphics2.lineTo(120, 150);
		wronggraphics2.lineTo(0, 0);
        
        wronggraphics2.angle = 180;
		wronggraphics2.alpha = 0;

        wronggraphics3 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);

		wronggraphics3.lineTo(-70, 60);
		wronggraphics3.lineTo(0, 120);
		wronggraphics3.lineTo(120, 150);
		wronggraphics3.lineTo(0, 0);
        
        wronggraphics3.angle = 270;
		wronggraphics3.alpha = 0;
        
        wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
        wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
        wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
        
        
        
        
        wronggraphics4 = this.add.graphics(this.world.centerX, this.world.centerY);
		

		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);

		wronggraphics4.lineTo(-70, 60);
		wronggraphics4.lineTo(0, 120);
		wronggraphics4.lineTo(120, 150);
		wronggraphics4.lineTo(0, 0);
        wronggraphics4.angle = 360;
		wronggraphics4.alpha = 0;
        
        wronggraphics4.inputEnabled = true;
        wronggraphics4.input.useHandCursor = true;
        
        
        wronggraphics4.events.onInputDown.add(this.correctAns,this);
        wronggraphics1.events.onInputDown.add(this.correctAns,this);
        wronggraphics2.events.onInputDown.add(this.wrongAns,this);
        wronggraphics3.events.onInputDown.add(this.wrongAns,this);
        
        
               
       /* var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.scale.setTo(1);
        centerCircle.x = this.world.centerX+5;
		centerCircle.y = this.world.centerY-35;
		windAnim1.addChild(centerCircle);*/
        windmillGroup= this.add.group();
        
        windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(wronggraphics1);
        windmillGroup.add(wronggraphics2);
        windmillGroup.add(wronggraphics3);
        windmillGroup.add(wronggraphics4);
       // windmillGroup.add(centerCircle);
    
        windmillGroup.x = 1000;
        this.getVoice();
        var tween = this.add.tween(windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                
                //this.addQuestion(count);
            }, this);

                       

	},
	
	addSecondWindMill:function()
	{	
        count++;		
		//adding windmill to the game.
        var stick = this.add.sprite(this.world.centerX-5,this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene1wind2');		
		//windAnim1.scale.setTo(0.88);
		windAnim1.anchor.setTo(0.5);			
		//windAnim1.animations.add('rotate');
        
        wronggraphics1 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);

		wronggraphics1.lineTo(-70, 60);
		wronggraphics1.lineTo(0, 120);
		wronggraphics1.lineTo(120, 150);
		wronggraphics1.lineTo(0, 0);
        wronggraphics1.angle = 90;
        wronggraphics1.alpha = 0;
        
        wronggraphics2 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);

		wronggraphics2.lineTo(-70, 60);
		wronggraphics2.lineTo(0, 120);
		wronggraphics2.lineTo(120, 150);
		wronggraphics2.lineTo(0, 0);
        
        wronggraphics2.angle = 180;
		wronggraphics2.alpha = 0;

        wronggraphics3 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);

		wronggraphics3.lineTo(-70, 60);
		wronggraphics3.lineTo(0, 120);
		wronggraphics3.lineTo(120, 150);
		wronggraphics3.lineTo(0, 0);
        
        wronggraphics3.angle = 270;
		wronggraphics3.alpha = 0;
        
        wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
        wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
        wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
        
        
        
        
        wronggraphics4 = this.add.graphics(this.world.centerX, this.world.centerY);
		

		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);

		wronggraphics4.lineTo(-70, 60);
		wronggraphics4.lineTo(0, 120);
		wronggraphics4.lineTo(120, 150);
		wronggraphics4.lineTo(0, 0);
        wronggraphics4.angle = 360;
		wronggraphics4.alpha = 0;
        
        wronggraphics4.inputEnabled = true;
        wronggraphics4.input.useHandCursor = true;
        
        
        wronggraphics4.events.onInputDown.add(this.correctAns,this);
        wronggraphics1.events.onInputDown.add(this.correctAns,this);
        wronggraphics2.events.onInputDown.add(this.wrongAns,this);
        wronggraphics3.events.onInputDown.add(this.correctAns,this);
        
        
               
       /* var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-0;
		centerCircle.y = this.world.centerY;
		windAnim1.addChild(centerCircle);*/
        windmillGroup= this.add.group();
        
        windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(wronggraphics1);
        windmillGroup.add(wronggraphics2);
        windmillGroup.add(wronggraphics3);
        windmillGroup.add(wronggraphics4);
      //  windmillGroup.add(centerCircle);
    
        windmillGroup.x = 1000;
        this.getVoice();
        var tween = this.add.tween(windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                
                //this.addQuestion(count);
            }, this);

	},
    
    addThirdWindMill:function()
	{
		 
        count++;		
		//adding windmill to the game.
        var stick = this.add.sprite(this.world.centerX-5,this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene1wind3');		
		//windAnim1.scale.setTo(0.88);
		windAnim1.anchor.setTo(0.5);			
		//windAnim1.animations.add('rotate');
        
        wronggraphics1 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);

		wronggraphics1.lineTo(-70, 60);
		wronggraphics1.lineTo(0, 120);
		wronggraphics1.lineTo(120, 150);
		wronggraphics1.lineTo(0, 0);
        wronggraphics1.angle = 90;
        wronggraphics1.alpha = 0;
        
        wronggraphics2 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);

		wronggraphics2.lineTo(-70, 60);
		wronggraphics2.lineTo(0, 120);
		wronggraphics2.lineTo(120, 150);
		wronggraphics2.lineTo(0, 0);
        
        wronggraphics2.angle = 180;
		wronggraphics2.alpha = 0;

        wronggraphics3 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);

		wronggraphics3.lineTo(-70, 60);
		wronggraphics3.lineTo(0, 120);
		wronggraphics3.lineTo(120, 150);
		wronggraphics3.lineTo(0, 0);
        
        wronggraphics3.angle = 270;
        wronggraphics3.alpha = 0;
        
        wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
        wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
        wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
        
        
        
        
        wronggraphics4 = this.add.graphics(this.world.centerX, this.world.centerY);
		

		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);

		wronggraphics4.lineTo(-70, 60);
		wronggraphics4.lineTo(0, 120);
		wronggraphics4.lineTo(120, 150);
		wronggraphics4.lineTo(0, 0);
        wronggraphics4.angle = 360;
		wronggraphics4.alpha = 0;
        
        wronggraphics4.inputEnabled = true;
        wronggraphics4.input.useHandCursor = true;
        
        
        wronggraphics4.events.onInputDown.add(this.wrongAns,this);
        wronggraphics1.events.onInputDown.add(this.wrongAns,this);
        wronggraphics2.events.onInputDown.add(this.correctAns,this);
        wronggraphics3.name = "wronggraphics3";
        wronggraphics3.events.onInputDown.add(function(target){
            
            windAnim1.loadTexture('Level12A_scene1wind33', 0, false);
            this.time.events.add(500, function(){this.correctAns(target);}, this);
            
        },this);
        
        
               
        /*var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-0;
		centerCircle.y = this.world.centerY-30;
		windAnim1.addChild(centerCircle);*/
        windmillGroup= this.add.group();
        
        windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(wronggraphics1);
        windmillGroup.add(wronggraphics2);
        windmillGroup.add(wronggraphics3);
        windmillGroup.add(wronggraphics4);
       // windmillGroup.add(centerCircle);
    
        windmillGroup.x = 1000;
        this.getVoice();
         var tween = this.add.tween(windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                //this.addQuestion(count);
                
            }, this);  
	},
	
    addFourthWindMill:function()
	{
 
		count++;		
		//adding windmill to the game.
        var stick = this.add.sprite(this.world.centerX-5,this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene2wind1');		
		//windAnim1.scale.setTo(0.8);
		windAnim1.anchor.setTo(0.5);			
		//windAnim1.animations.add('rotate');
        
        wronggraphics1 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);

		wronggraphics1.lineTo(0, 115);
		wronggraphics1.lineTo(100, 80);
		wronggraphics1.lineTo(0, 0);
        wronggraphics1.angle = 0;
        
        wronggraphics1.alpha =0;
        
        wronggraphics2 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);

		wronggraphics2.lineTo(0, 115);
		wronggraphics2.lineTo(100, 80);
		wronggraphics2.lineTo(0, 0);
        wronggraphics2.angle = 45;
        
        wronggraphics2.alpha =0;

        wronggraphics3 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);

		wronggraphics3.lineTo(0, 130);
		wronggraphics3.lineTo(40, 130);

		wronggraphics3.lineTo(0, 115);
		wronggraphics3.lineTo(100, 80);
		wronggraphics3.lineTo(0, 0);
        wronggraphics3.angle = 90;
        wronggraphics3.alpha =0;
       
        wronggraphics4 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);

		wronggraphics4.lineTo(0, 115);
		wronggraphics4.lineTo(100, 80);
		wronggraphics4.lineTo(0, 0);
        wronggraphics4.angle = 135;
        wronggraphics4.alpha =0;
        
        wronggraphics5 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics5.beginFill(0xFF700B, 1);

		wronggraphics5.lineTo(0, 115);
		wronggraphics5.lineTo(100, 80);
		wronggraphics5.lineTo(0, 0);
        wronggraphics5.angle = 180;
        wronggraphics5.alpha =0;
        
        wronggraphics6 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics6.beginFill(0xFF700B, 1);

		wronggraphics6.lineTo(0, 115);
		wronggraphics6.lineTo(100, 80);
		wronggraphics6.lineTo(0, 0);
        wronggraphics6.angle = 225;
		wronggraphics6.alpha = 0;
        
        wronggraphics7 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics7.beginFill(0xFF700B, 1);

		wronggraphics7.lineTo(0, 115);
		wronggraphics7.lineTo(100, 80);
		wronggraphics7.lineTo(0, 0);
        wronggraphics7.angle = 270;
		wronggraphics7.alpha = 0;
        
        wronggraphics8 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics8.beginFill(0xFF700B, 1);

		wronggraphics8.lineTo(0, 115);
		wronggraphics8.lineTo(100, 80);
		wronggraphics8.lineTo(0, 0);
        wronggraphics8.angle = 315;
		wronggraphics8.alpha = 0;
        
        wronggraphics9 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics9.beginFill(0xFF700B, 1);

		wronggraphics9.lineTo(0, 130);
		wronggraphics9.lineTo(40, 130);
		wronggraphics9.lineTo(0, 0);
        wronggraphics9.angle = 178;
		wronggraphics9.alpha = 0;
        
        wronggraphics10 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics10.beginFill(0xFF700B, 1);

		wronggraphics10.lineTo(0, 130);
		wronggraphics10.lineTo(40, 130);
		wronggraphics10.lineTo(0, 0);
        wronggraphics10.angle = 200;
		wronggraphics10.alpha = 0;
        
        
        wronggraphics11 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics11.beginFill(0xFF700B, 1);

		wronggraphics11.lineTo(0, 130);
		wronggraphics11.lineTo(40, 130);
		wronggraphics11.lineTo(0, 0);
        wronggraphics11.angle = 224;
		wronggraphics11.alpha = 0;
        
        wronggraphics12 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics12.beginFill(0xFF700B, 1);

		wronggraphics12.lineTo(0, 130);
		wronggraphics12.lineTo(40, 130);
		wronggraphics12.lineTo(0, 0);
        wronggraphics12.angle = 247;
		wronggraphics12.alpha = 0;
        
        wronggraphics13 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics13.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics13.beginFill(0xFF700B, 1);

		wronggraphics13.lineTo(0, 130);
		wronggraphics13.lineTo(40, 130);
		wronggraphics13.lineTo(0, 0);
        wronggraphics13.angle = 270;
		wronggraphics13.alpha = 0;
        
        
        wronggraphics14 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics14.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics14.beginFill(0xFF700B, 1);

		wronggraphics14.lineTo(0, 130);
		wronggraphics14.lineTo(40, 130);
		wronggraphics14.lineTo(0, 0);
        wronggraphics14.angle = 292;
		wronggraphics14.alpha = 0;
        
        
        wronggraphics15 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics15.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics15.beginFill(0xFF700B, 1);

		wronggraphics15.lineTo(0, 130);
		wronggraphics15.lineTo(40, 130);
		wronggraphics15.lineTo(0, 0);
        wronggraphics15.angle = 312;
		wronggraphics15.alpha = 0;
        
        
        wronggraphics16 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics16.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics16.beginFill(0xFF700B, 1);

		wronggraphics16.lineTo(0, 130);
		wronggraphics16.lineTo(40, 130);
		wronggraphics16.lineTo(0, 0);
        wronggraphics16.angle = 334;
		wronggraphics16.alpha = 0;
        
        wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
        wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
        wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
        wronggraphics4.inputEnabled = true;
        wronggraphics4.input.useHandCursor = true;
        wronggraphics5.inputEnabled = true;
        wronggraphics5.input.useHandCursor = true;
        wronggraphics6.inputEnabled = true;
        wronggraphics6.input.useHandCursor = true;
        wronggraphics7.inputEnabled = true;
        wronggraphics7.input.useHandCursor = true;
        wronggraphics8.inputEnabled = true;
        wronggraphics8.input.useHandCursor = true;
        wronggraphics9.inputEnabled = true;
        wronggraphics9.input.useHandCursor = true;
        wronggraphics10.inputEnabled = true;
        wronggraphics10.input.useHandCursor = true;
        wronggraphics11.inputEnabled = true;
        wronggraphics11.input.useHandCursor = true;
        wronggraphics12.inputEnabled = true;
        wronggraphics12.input.useHandCursor = true;
        wronggraphics13.inputEnabled = true;
        wronggraphics13.input.useHandCursor = true;
        wronggraphics14.inputEnabled = true;
        wronggraphics14.input.useHandCursor = true;
        wronggraphics15.inputEnabled = true;
        wronggraphics15.input.useHandCursor = true;
        wronggraphics16.inputEnabled = true;
        wronggraphics16.input.useHandCursor = true;
        
        
        wronggraphics1.events.onInputDown.add(this.correctAns,this);
        wronggraphics2.events.onInputDown.add(this.correctAns,this);
        wronggraphics3.events.onInputDown.add(this.correctAns,this);
        wronggraphics4.events.onInputDown.add(this.wrongAns,this);
        wronggraphics5.events.onInputDown.add(this.wrongAns,this);
        wronggraphics6.events.onInputDown.add(this.wrongAns,this);
        wronggraphics7.events.onInputDown.add(this.wrongAns,this);
        wronggraphics8.events.onInputDown.add(this.correctAns,this);
        wronggraphics9.events.onInputDown.add(this.wrongAns,this);
        wronggraphics10.events.onInputDown.add(this.wrongAns,this);
        wronggraphics11.events.onInputDown.add(this.wrongAns,this);
        wronggraphics12.events.onInputDown.add(this.wrongAns,this);
        wronggraphics13.events.onInputDown.add(this.wrongAns,this);
        wronggraphics14.events.onInputDown.add(this.correctAns,this);
        wronggraphics15.events.onInputDown.add(this.correctAns,this);
        wronggraphics16.events.onInputDown.add(this.correctAns,this);
        
        
        /*var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
         centerCircle.scale.setTo(1.1);
        centerCircle.x = this.world.centerX-0;
		centerCircle.y = this.world.centerY-50;
		windAnim1.addChild(centerCircle);*/
        
        windmillGroup= this.add.group();
        
        windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(wronggraphics1);
        windmillGroup.add(wronggraphics2);
        windmillGroup.add(wronggraphics3);
        windmillGroup.add(wronggraphics4);
        windmillGroup.add(wronggraphics5);
        windmillGroup.add(wronggraphics6);
        windmillGroup.add(wronggraphics7);
        windmillGroup.add(wronggraphics8);
        windmillGroup.add(wronggraphics9);
        windmillGroup.add(wronggraphics10);
        windmillGroup.add(wronggraphics11);
        windmillGroup.add(wronggraphics12);
        windmillGroup.add(wronggraphics13);
        windmillGroup.add(wronggraphics14);
        windmillGroup.add(wronggraphics15);
        windmillGroup.add(wronggraphics16);
       //windmillGroup.add(centerCircle);

        windmillGroup.x = 1000;
        this.getVoice();
         var tween = this.add.tween(windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                //this.addQuestion(count);
                
            }, this); 
	},
    
    
    addFifthWindMill:function()
	{
		 
		count++;		
		//adding windmill to the game.
        var stick = this.add.sprite(this.world.centerX-5,this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene2wind2');		
		//windAnim1.scale.setTo(0.8);
		windAnim1.anchor.setTo(0.5);			
		//windAnim1.animations.add('rotate');
        
        wronggraphics1 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);

		wronggraphics1.lineTo(0, 115);
		wronggraphics1.lineTo(100, 80);
		wronggraphics1.lineTo(0, 0);
        wronggraphics1.angle = 0;
        
       wronggraphics1.alpha =0;
        
        wronggraphics2 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);

		wronggraphics2.lineTo(0, 115);
		wronggraphics2.lineTo(100, 80);
		wronggraphics2.lineTo(0, 0);
        wronggraphics2.angle = 45;
        
        wronggraphics2.alpha =0;

        wronggraphics3 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);

		wronggraphics3.lineTo(0, 130);
		wronggraphics3.lineTo(40, 130);

		wronggraphics3.lineTo(0, 115);
		wronggraphics3.lineTo(100, 80);
		wronggraphics3.lineTo(0, 0);
        wronggraphics3.angle = 90;
        wronggraphics3.alpha =0;
       
        wronggraphics4 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);

		wronggraphics4.lineTo(0, 115);
		wronggraphics4.lineTo(100, 80);
		wronggraphics4.lineTo(0, 0);
        wronggraphics4.angle = 135;
        wronggraphics4.alpha =0;
        
        wronggraphics5 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics5.beginFill(0xFF700B, 1);

		wronggraphics5.lineTo(0, 115);
		wronggraphics5.lineTo(100, 80);
		wronggraphics5.lineTo(0, 0);
        wronggraphics5.angle = 180;
        wronggraphics5.alpha =0;
        
        wronggraphics6 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics6.beginFill(0xFF700B, 1);

		wronggraphics6.lineTo(0, 115);
		wronggraphics6.lineTo(100, 80);
		wronggraphics6.lineTo(0, 0);
        wronggraphics6.angle = 225;
		wronggraphics6.alpha = 0;
        
        wronggraphics7 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics7.beginFill(0xFF700B, 1);

		wronggraphics7.lineTo(0, 115);
		wronggraphics7.lineTo(100, 80);
		wronggraphics7.lineTo(0, 0);
        wronggraphics7.angle = 270;
		wronggraphics7.alpha = 0;
        
        wronggraphics8 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics8.beginFill(0xFF700B, 1);

		wronggraphics8.lineTo(0, 115);
		wronggraphics8.lineTo(100, 80);
		wronggraphics8.lineTo(0, 0);
        wronggraphics8.angle = 315;
		wronggraphics8.alpha = 0;
        
        wronggraphics9 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics9.beginFill(0xFF700B, 1);

		wronggraphics9.lineTo(0, 130);
		wronggraphics9.lineTo(40, 130);
		wronggraphics9.lineTo(0, 0);
        wronggraphics9.angle = 178;
		wronggraphics9.alpha = 0;
        
        wronggraphics10 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics10.beginFill(0xFF700B, 1);

		wronggraphics10.lineTo(0, 130);
		wronggraphics10.lineTo(40, 130);
		wronggraphics10.lineTo(0, 0);
        wronggraphics10.angle = 200;
		wronggraphics10.alpha = 0;
        
        
        wronggraphics11 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics11.beginFill(0xFF700B, 1);

		wronggraphics11.lineTo(0, 130);
		wronggraphics11.lineTo(40, 130);
		wronggraphics11.lineTo(0, 0);
        wronggraphics11.angle = 224;
		wronggraphics11.alpha = 0;
        
        wronggraphics12 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics12.beginFill(0xFF700B, 1);

		wronggraphics12.lineTo(0, 130);
		wronggraphics12.lineTo(40, 130);
		wronggraphics12.lineTo(0, 0);
        wronggraphics12.angle = 247;
		wronggraphics12.alpha = 0;
        
        wronggraphics13 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics13.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics13.beginFill(0xFF700B, 1);

		wronggraphics13.lineTo(0, 130);
		wronggraphics13.lineTo(40, 130);
		wronggraphics13.lineTo(0, 0);
        wronggraphics13.angle = 270;
		wronggraphics13.alpha = 0;
        
        
        wronggraphics14 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics14.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics14.beginFill(0xFF700B, 1);

		wronggraphics14.lineTo(0, 130);
		wronggraphics14.lineTo(40, 130);
		wronggraphics14.lineTo(0, 0);
        wronggraphics14.angle = 292;
		wronggraphics14.alpha = 0;
        
        
        wronggraphics15 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics15.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics15.beginFill(0xFF700B, 1);

		wronggraphics15.lineTo(0, 130);
		wronggraphics15.lineTo(40, 130);
		wronggraphics15.lineTo(0, 0);
        wronggraphics15.angle = 312;
		wronggraphics15.alpha = 0;
        
        
        wronggraphics16 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics16.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics16.beginFill(0xFF700B, 1);

		wronggraphics16.lineTo(0, 130);
		wronggraphics16.lineTo(40, 130);
		wronggraphics16.lineTo(0, 0);
        wronggraphics16.angle = 334;
		wronggraphics16.alpha = 0;
        
        wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
        wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
        wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
        wronggraphics4.inputEnabled = true;
        wronggraphics4.input.useHandCursor = true;
        wronggraphics5.inputEnabled = true;
        wronggraphics5.input.useHandCursor = true;
        wronggraphics6.inputEnabled = true;
        wronggraphics6.input.useHandCursor = true;
        wronggraphics7.inputEnabled = true;
        wronggraphics7.input.useHandCursor = true;
        wronggraphics8.inputEnabled = true;
        wronggraphics8.input.useHandCursor = true;
        wronggraphics9.inputEnabled = true;
        wronggraphics9.input.useHandCursor = true;
        wronggraphics10.inputEnabled = true;
        wronggraphics10.input.useHandCursor = true;
        wronggraphics11.inputEnabled = true;
        wronggraphics11.input.useHandCursor = true;
        wronggraphics12.inputEnabled = true;
        wronggraphics12.input.useHandCursor = true;
        wronggraphics13.inputEnabled = true;
        wronggraphics13.input.useHandCursor = true;
        wronggraphics14.inputEnabled = true;
        wronggraphics14.input.useHandCursor = true;
        wronggraphics15.inputEnabled = true;
        wronggraphics15.input.useHandCursor = true;
        wronggraphics16.inputEnabled = true;
        wronggraphics16.input.useHandCursor = true;
        
        
        wronggraphics1.events.onInputDown.add(this.correctAns,this);
        wronggraphics2.events.onInputDown.add(this.correctAns,this);
        wronggraphics3.events.onInputDown.add(this.correctAns,this);
        wronggraphics4.events.onInputDown.add(this.correctAns,this);
        wronggraphics5.events.onInputDown.add(this.correctAns,this);
        wronggraphics6.events.onInputDown.add(this.wrongAns,this);
        wronggraphics7.events.onInputDown.add(this.wrongAns,this);
        wronggraphics8.events.onInputDown.add(this.correctAns,this);
        wronggraphics9.events.onInputDown.add(this.correctAns,this);
        wronggraphics10.events.onInputDown.add(this.wrongAns,this);
        wronggraphics11.events.onInputDown.add(this.wrongAns,this);
        wronggraphics12.events.onInputDown.add(this.wrongAns,this);
        wronggraphics13.events.onInputDown.add(this.wrongAns,this);
        wronggraphics14.events.onInputDown.add(this.correctAns,this);
        wronggraphics15.events.onInputDown.add(this.correctAns,this);
        wronggraphics16.events.onInputDown.add(this.correctAns,this);
        
        
       /* var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
         centerCircle.scale.setTo(1.1);
        centerCircle.x = this.world.centerX+0;
		centerCircle.y = this.world.centerY-55;
		windAnim1.addChild(centerCircle);*/
        
        windmillGroup= this.add.group();
        
        windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(wronggraphics1);
        windmillGroup.add(wronggraphics2);
        windmillGroup.add(wronggraphics3);
        windmillGroup.add(wronggraphics4);
        windmillGroup.add(wronggraphics5);
        windmillGroup.add(wronggraphics6);
        windmillGroup.add(wronggraphics7);
        windmillGroup.add(wronggraphics8);
        windmillGroup.add(wronggraphics9);
        windmillGroup.add(wronggraphics10);
        windmillGroup.add(wronggraphics11);
        windmillGroup.add(wronggraphics12);
        windmillGroup.add(wronggraphics13);
        windmillGroup.add(wronggraphics14);
        windmillGroup.add(wronggraphics15);
        windmillGroup.add(wronggraphics16);
     //  windmillGroup.add(centerCircle);

        windmillGroup.x = 1000;
        this.getVoice();
        var tween = this.add.tween(windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                //this.addQuestion(count);
                
            }, this);

	},
    
    
    addSixthWindMill:function()
	{
		 
		count++;		
		//adding windmill to the game.
        var stick = this.add.sprite(this.world.centerX-5,this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene2wind3');		
		//windAnim1.scale.setTo(0.8);
		windAnim1.anchor.setTo(0.5);				
		//windAnim1.animations.add('rotate');
        
        wronggraphics1 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);

		wronggraphics1.lineTo(0, 115);
		wronggraphics1.lineTo(100, 80);
		wronggraphics1.lineTo(0, 0);
        wronggraphics1.angle = 0;
        
       wronggraphics1.alpha =0;
        
        wronggraphics2 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);

		wronggraphics2.lineTo(0, 115);
		wronggraphics2.lineTo(100, 80);
		wronggraphics2.lineTo(0, 0);
        wronggraphics2.angle = 45;
        
        wronggraphics2.alpha =0;

        wronggraphics3 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);

		wronggraphics3.lineTo(0, 130);
		wronggraphics3.lineTo(40, 130);

		wronggraphics3.lineTo(0, 115);
		wronggraphics3.lineTo(100, 80);
		wronggraphics3.lineTo(0, 0);
        wronggraphics3.angle = 90;
        wronggraphics3.alpha =0;
       
        wronggraphics4 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);

		wronggraphics4.lineTo(0, 115);
		wronggraphics4.lineTo(100, 80);
		wronggraphics4.lineTo(0, 0);
        wronggraphics4.angle = 135;
        wronggraphics4.alpha =0;
        
        wronggraphics5 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics5.beginFill(0xFF700B, 1);

		wronggraphics5.lineTo(0, 115);
		wronggraphics5.lineTo(100, 80);
		wronggraphics5.lineTo(0, 0);
        wronggraphics5.angle = 180;
        wronggraphics5.alpha =0;
        
        wronggraphics6 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics6.beginFill(0xFF700B, 1);

		wronggraphics6.lineTo(0, 115);
		wronggraphics6.lineTo(100, 80);
		wronggraphics6.lineTo(0, 0);
        wronggraphics6.angle = 225;
		wronggraphics6.alpha = 0;
        
        wronggraphics7 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics7.beginFill(0xFF700B, 1);

		wronggraphics7.lineTo(0, 115);
		wronggraphics7.lineTo(100, 80);
		wronggraphics7.lineTo(0, 0);
        wronggraphics7.angle = 270;
		wronggraphics7.alpha = 0;
        
        wronggraphics8 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics8.beginFill(0xFF700B, 1);

		wronggraphics8.lineTo(0, 115);
		wronggraphics8.lineTo(100, 80);
		wronggraphics8.lineTo(0, 0);
        wronggraphics8.angle = 315;
		wronggraphics8.alpha = 0;
        
        wronggraphics9 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics9.beginFill(0xFF700B, 1);

		wronggraphics9.lineTo(0, 130);
		wronggraphics9.lineTo(40, 130);
		wronggraphics9.lineTo(0, 0);
        wronggraphics9.angle = 178;
		wronggraphics9.alpha = 0;
        
        wronggraphics10 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics10.beginFill(0xFF700B, 1);

		wronggraphics10.lineTo(0, 130);
		wronggraphics10.lineTo(40, 130);
		wronggraphics10.lineTo(0, 0);
        wronggraphics10.angle = 200;
		wronggraphics10.alpha = 0;
        
        
        wronggraphics11 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics11.beginFill(0xFF700B, 1);

		wronggraphics11.lineTo(0, 130);
		wronggraphics11.lineTo(40, 130);
		wronggraphics11.lineTo(0, 0);
        wronggraphics11.angle = 224;
		wronggraphics11.alpha = 0;
        
        wronggraphics12 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics12.beginFill(0xFF700B, 1);

		wronggraphics12.lineTo(0, 130);
		wronggraphics12.lineTo(40, 130);
		wronggraphics12.lineTo(0, 0);
        wronggraphics12.angle = 247;
		wronggraphics12.alpha = 0;
        
        wronggraphics13 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics13.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics13.beginFill(0xFF700B, 1);

		wronggraphics13.lineTo(0, 130);
		wronggraphics13.lineTo(40, 130);
		wronggraphics13.lineTo(0, 0);
        wronggraphics13.angle = 270;
		wronggraphics13.alpha = 0;
        
        
        wronggraphics14 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics14.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics14.beginFill(0xFF700B, 1);

		wronggraphics14.lineTo(0, 130);
		wronggraphics14.lineTo(40, 130);
		wronggraphics14.lineTo(0, 0);
        wronggraphics14.angle = 292;
		wronggraphics14.alpha = 0;
        
        
        wronggraphics15 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics15.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics15.beginFill(0xFF700B, 1);

		wronggraphics15.lineTo(0, 130);
		wronggraphics15.lineTo(40, 130);
		wronggraphics15.lineTo(0, 0);
        wronggraphics15.angle = 312;
		wronggraphics15.alpha = 0;
        
        
        wronggraphics16 = this.add.graphics(this.world.centerX, this.world.centerY+10);
		wronggraphics16.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics16.beginFill(0xFF700B, 1);

		wronggraphics16.lineTo(0, 130);
		wronggraphics16.lineTo(40, 130);
		wronggraphics16.lineTo(0, 0);
        wronggraphics16.angle = 334;
		wronggraphics16.alpha = 0;
        
        wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
        wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
        wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
        wronggraphics4.inputEnabled = true;
        wronggraphics4.input.useHandCursor = true;
        wronggraphics5.inputEnabled = true;
        wronggraphics5.input.useHandCursor = true;
        wronggraphics6.inputEnabled = true;
        wronggraphics6.input.useHandCursor = true;
        wronggraphics7.inputEnabled = true;
        wronggraphics7.input.useHandCursor = true;
        wronggraphics8.inputEnabled = true;
        wronggraphics8.input.useHandCursor = true;
        wronggraphics9.inputEnabled = true;
        wronggraphics9.input.useHandCursor = true;
        wronggraphics10.inputEnabled = true;
        wronggraphics10.input.useHandCursor = true;
        wronggraphics11.inputEnabled = true;
        wronggraphics11.input.useHandCursor = true;
        wronggraphics12.inputEnabled = true;
        wronggraphics12.input.useHandCursor = true;
        wronggraphics13.inputEnabled = true;
        wronggraphics13.input.useHandCursor = true;
        wronggraphics14.inputEnabled = true;
        wronggraphics14.input.useHandCursor = true;
        wronggraphics15.inputEnabled = true;
        wronggraphics15.input.useHandCursor = true;
        wronggraphics16.inputEnabled = true;
        wronggraphics16.input.useHandCursor = true;
        
        
        wronggraphics1.events.onInputDown.add(this.wrongAns,this);
        wronggraphics2.events.onInputDown.add(this.correctAns,this);
        wronggraphics3.events.onInputDown.add(this.correctAns,this);
        wronggraphics4.events.onInputDown.add(this.wrongAns,this);
        wronggraphics5.events.onInputDown.add(this.wrongAns,this);
        wronggraphics6.events.onInputDown.add(this.wrongAns,this);
        wronggraphics7.events.onInputDown.add(this.wrongAns,this);
        wronggraphics8.events.onInputDown.add(this.wrongAns,this);
        wronggraphics9.events.onInputDown.add(this.wrongAns,this);
        wronggraphics10.events.onInputDown.add(this.wrongAns,this);
        wronggraphics11.events.onInputDown.add(this.wrongAns,this);
        wronggraphics12.events.onInputDown.add(this.wrongAns,this);
        wronggraphics13.events.onInputDown.add(this.wrongAns,this);
        wronggraphics14.events.onInputDown.add(this.wrongAns,this);
        wronggraphics15.events.onInputDown.add(this.wrongAns,this);
        wronggraphics16.events.onInputDown.add(this.correctAns,this);
        
        
       /* var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.scale.setTo(1.1);
        centerCircle.x = this.world.centerX;
		centerCircle.y = this.world.centerY-55;
		windAnim1.addChild(centerCircle);*/
        
        
        windmillGroup= this.add.group();
        
        windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(wronggraphics1);
        windmillGroup.add(wronggraphics2);
        windmillGroup.add(wronggraphics3);
        windmillGroup.add(wronggraphics4);
        windmillGroup.add(wronggraphics5);
        windmillGroup.add(wronggraphics6);
        windmillGroup.add(wronggraphics7);
        windmillGroup.add(wronggraphics8);
        windmillGroup.add(wronggraphics9);
        windmillGroup.add(wronggraphics10);
        windmillGroup.add(wronggraphics11);
        windmillGroup.add(wronggraphics12);
        windmillGroup.add(wronggraphics13);
        windmillGroup.add(wronggraphics14);
        windmillGroup.add(wronggraphics15);
        windmillGroup.add(wronggraphics16);
       //windmillGroup.add(centerCircle);

        windmillGroup.x = 1000;
        this.getVoice();
         var tween = this.add.tween(windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                //this.addQuestion(count);
                
            }, this);

	},
    
    addSeventhWindMill:function()
	{
		 
		count++;		
		//adding windmill to the game.
        var stick = this.add.sprite(this.world.centerX-5,this.world.centerY+40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind1');		
		//windAnim1.scale.setTo(0.85);
		windAnim1.anchor.setTo(0.5);			
		//windAnim1.animations.add('rotate');
        
        wronggraphics1 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
        
      

		
		wronggraphics1.lineTo(0, 130);
		wronggraphics1.lineTo(40, 130);
		wronggraphics1.lineTo(0, 0);
        wronggraphics1.angle = 0;
        wronggraphics1.alpha =0;
        
        wronggraphics2 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);

		wronggraphics2.lineTo(0, 130);
		wronggraphics2.lineTo(40, 130);
		wronggraphics2.lineTo(0, 0);
        wronggraphics2.angle = 22;
        
        wronggraphics2.alpha =0;

        wronggraphics3 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);

		wronggraphics3.lineTo(0, 130);
		wronggraphics3.lineTo(40, 130);

		wronggraphics3.lineTo(0, 0);
        wronggraphics3.angle = 44;
		wronggraphics3.alpha = 0; 
       
        wronggraphics4 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);

		wronggraphics4.lineTo(0, 110);
		wronggraphics4.lineTo(40, 100);
		wronggraphics4.lineTo(0, 0);
        wronggraphics4.angle = 68;
		wronggraphics4.alpha = 0;
        
        wronggraphics5 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics5.beginFill(0xFF700B, 1);

		wronggraphics5.lineTo(0, 130);
		wronggraphics5.lineTo(40, 130);
		wronggraphics5.lineTo(0, 0);
        wronggraphics5.angle = 90;
		wronggraphics5.alpha = 0;
        
        
        wronggraphics6 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics6.beginFill(0xFF700B, 1);

		wronggraphics6.lineTo(0, 130);
		wronggraphics6.lineTo(40, 130);
		wronggraphics6.lineTo(0, 0);
        wronggraphics6.angle = 112;
		wronggraphics6.alpha = 0;
        
        wronggraphics7 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics7.beginFill(0xFF700B, 1);

		wronggraphics7.lineTo(0, 130);
		wronggraphics7.lineTo(40, 130);
		wronggraphics7.lineTo(0, 0);
        wronggraphics7.angle = 134;
		wronggraphics7.alpha = 0;
        
        wronggraphics8 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics8.beginFill(0xFF700B, 1);

		wronggraphics8.lineTo(0, 130);
		wronggraphics8.lineTo(40, 130);
		wronggraphics8.lineTo(0, 0);
        wronggraphics8.angle = 156;
		wronggraphics8.alpha = 0;
        
        wronggraphics9 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics9.beginFill(0xFF700B, 1);

		wronggraphics9.lineTo(0, 130);
		wronggraphics9.lineTo(40, 130);
		wronggraphics9.lineTo(0, 0);
        wronggraphics9.angle = 178;
		wronggraphics9.alpha = 0;
        
        wronggraphics10 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics10.beginFill(0xFF700B, 1);

		wronggraphics10.lineTo(0, 130);
		wronggraphics10.lineTo(40, 130);
		wronggraphics10.lineTo(0, 0);
        wronggraphics10.angle = 200;
		wronggraphics10.alpha = 0;
        
        
        wronggraphics11 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics11.beginFill(0xFF700B, 1);

		wronggraphics11.lineTo(0, 130);
		wronggraphics11.lineTo(40, 130);
		wronggraphics11.lineTo(0, 0);
        wronggraphics11.angle = 224;
		wronggraphics11.alpha = 0;
        
        wronggraphics12 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics12.beginFill(0xFF700B, 1);

		wronggraphics12.lineTo(0, 130);
		wronggraphics12.lineTo(40, 130);
		wronggraphics12.lineTo(0, 0);
        wronggraphics12.angle = 247;
		wronggraphics12.alpha = 0;
        
        wronggraphics13 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics13.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics13.beginFill(0xFF700B, 1);

		wronggraphics13.lineTo(0, 130);
		wronggraphics13.lineTo(40, 130);
		wronggraphics13.lineTo(0, 0);
        wronggraphics13.angle = 270;
		wronggraphics13.alpha = 0;
        
        
        wronggraphics14 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics14.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics14.beginFill(0xFF700B, 1);

		wronggraphics14.lineTo(0, 130);
		wronggraphics14.lineTo(40, 130);
		wronggraphics14.lineTo(0, 0);
        wronggraphics14.angle = 292;
		wronggraphics14.alpha = 0;
        
        
        wronggraphics15 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics15.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics15.beginFill(0xFF700B, 1);

		wronggraphics15.lineTo(0, 130);
		wronggraphics15.lineTo(40, 130);
		wronggraphics15.lineTo(0, 0);
        wronggraphics15.angle = 312;
		wronggraphics15.alpha = 0;
        
        
        wronggraphics16 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics16.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics16.beginFill(0xFF700B, 1);

		wronggraphics16.lineTo(0, 130);
		wronggraphics16.lineTo(40, 130);
		wronggraphics16.lineTo(0, 0);
        wronggraphics16.angle = 334;
		wronggraphics16.alpha = 0;
        
        wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
        wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
        wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
        wronggraphics4.inputEnabled = true;
        wronggraphics4.input.useHandCursor = true;
        wronggraphics5.inputEnabled = true;
        wronggraphics5.input.useHandCursor = true;
        wronggraphics6.inputEnabled = true;
        wronggraphics6.input.useHandCursor = true;
        wronggraphics7.inputEnabled = true;
        wronggraphics7.input.useHandCursor = true;
        wronggraphics8.inputEnabled = true;
        wronggraphics8.input.useHandCursor = true;
        wronggraphics9.inputEnabled = true;
        wronggraphics9.input.useHandCursor = true;
        wronggraphics10.inputEnabled = true;
        wronggraphics10.input.useHandCursor = true;
        wronggraphics11.inputEnabled = true;
        wronggraphics11.input.useHandCursor = true;
        wronggraphics12.inputEnabled = true;
        wronggraphics12.input.useHandCursor = true;
        wronggraphics13.inputEnabled = true;
        wronggraphics13.input.useHandCursor = true;
        wronggraphics14.inputEnabled = true;
        wronggraphics14.input.useHandCursor = true;
        wronggraphics15.inputEnabled = true;
        wronggraphics15.input.useHandCursor = true;
        wronggraphics16.inputEnabled = true;
        wronggraphics16.input.useHandCursor = true;
        
        
        wronggraphics1.events.onInputDown.add(this.wrongAns,this);
        wronggraphics2.events.onInputDown.add(this.wrongAns,this);
        wronggraphics3.events.onInputDown.add(this.wrongAns,this);
        wronggraphics4.events.onInputDown.add(this.correctAns,this);
        wronggraphics5.events.onInputDown.add(this.correctAns,this);
        wronggraphics6.events.onInputDown.add(this.correctAns,this);
        wronggraphics7.events.onInputDown.add(this.correctAns,this);
        wronggraphics8.events.onInputDown.add(this.wrongAns,this);
        wronggraphics9.events.onInputDown.add(this.wrongAns,this);
        wronggraphics10.events.onInputDown.add(this.wrongAns,this);
        wronggraphics11.events.onInputDown.add(this.wrongAns,this);
        wronggraphics12.events.onInputDown.add(this.wrongAns,this);
        wronggraphics13.events.onInputDown.add(this.wrongAns,this);
        wronggraphics14.events.onInputDown.add(this.wrongAns,this);
        wronggraphics15.events.onInputDown.add(this.wrongAns,this);
        wronggraphics16.events.onInputDown.add(this.wrongAns,this);
        
        
       /* var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX+5;
		centerCircle.y = this.world.centerY-50;
		windAnim1.addChild(centerCircle);*/
        
        windmillGroup= this.add.group();
        
        windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(wronggraphics1);
        windmillGroup.add(wronggraphics2);
        windmillGroup.add(wronggraphics3);
        windmillGroup.add(wronggraphics4);
        windmillGroup.add(wronggraphics5);
        windmillGroup.add(wronggraphics6);
        windmillGroup.add(wronggraphics7);
        windmillGroup.add(wronggraphics8);
        windmillGroup.add(wronggraphics9);
        windmillGroup.add(wronggraphics10);
        windmillGroup.add(wronggraphics11);
        windmillGroup.add(wronggraphics12);
        windmillGroup.add(wronggraphics13);
        windmillGroup.add(wronggraphics14);
        windmillGroup.add(wronggraphics15);
        windmillGroup.add(wronggraphics16);
       //windmillGroup.add(centerCircle);

        windmillGroup.x = 1000;
        this.getVoice();
         var tween = this.add.tween(windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                //this.addQuestion(count);
                
            }, this);
	},
    
    addEightWindMill:function()
	{
			 
		count++;		
		//adding windmill to the game.
        var stick = this.add.sprite(this.world.centerX-5,this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2');		
		//windAnim1.scale.setTo(0.85);
		windAnim1.anchor.setTo(0.5);			
		//windAnim1.animations.add('rotate');
        
        wronggraphics1 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);

		wronggraphics1.lineTo(0, 130);
		wronggraphics1.lineTo(40, 130);
		wronggraphics1.lineTo(0, 0);
        wronggraphics1.angle = 0;
        wronggraphics1.alpha =0;
        
        wronggraphics2 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);

		wronggraphics2.lineTo(0, 130);
		wronggraphics2.lineTo(40, 130);
		wronggraphics2.lineTo(0, 0);
        wronggraphics2.angle = 22;
        
        wronggraphics2.alpha =0;

        wronggraphics3 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);

		wronggraphics3.lineTo(0, 130);
		wronggraphics3.lineTo(40, 130);

		wronggraphics3.lineTo(0, 0);
        wronggraphics3.angle = 44;
		wronggraphics3.alpha = 0; 
       
        wronggraphics4 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);

		wronggraphics4.lineTo(0, 110);
		wronggraphics4.lineTo(40, 100);
		wronggraphics4.lineTo(0, 0);
        wronggraphics4.angle = 68;
		wronggraphics4.alpha = 0;
        
        wronggraphics5 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics5.beginFill(0xFF700B, 1);

		wronggraphics5.lineTo(0, 130);
		wronggraphics5.lineTo(40, 130);
		wronggraphics5.lineTo(0, 0);
        wronggraphics5.angle = 90;
		wronggraphics5.alpha = 0;
        
        
        wronggraphics6 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics6.beginFill(0xFF700B, 1);

		wronggraphics6.lineTo(0, 130);
		wronggraphics6.lineTo(40, 130);
		wronggraphics6.lineTo(0, 0);
        wronggraphics6.angle = 112;
		wronggraphics6.alpha = 0;
        
        wronggraphics7 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics7.beginFill(0xFF700B, 1);

		wronggraphics7.lineTo(0, 130);
		wronggraphics7.lineTo(40, 130);
		wronggraphics7.lineTo(0, 0);
        wronggraphics7.angle = 134;
		wronggraphics7.alpha = 0;
        
        wronggraphics8 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics8.beginFill(0xFF700B, 1);

		wronggraphics8.lineTo(0, 130);
		wronggraphics8.lineTo(40, 130);
		wronggraphics8.lineTo(0, 0);
        wronggraphics8.angle = 156;
		wronggraphics8.alpha = 0;
        
        wronggraphics9 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics9.beginFill(0xFF700B, 1);

		wronggraphics9.lineTo(0, 130);
		wronggraphics9.lineTo(40, 130);
		wronggraphics9.lineTo(0, 0);
        wronggraphics9.angle = 178;
		wronggraphics9.alpha = 0;
        
        wronggraphics10 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics10.beginFill(0xFF700B, 1);

		wronggraphics10.lineTo(0, 130);
		wronggraphics10.lineTo(40, 130);
		wronggraphics10.lineTo(0, 0);
        wronggraphics10.angle = 200;
		wronggraphics10.alpha = 0;
        
        
        wronggraphics11 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics11.beginFill(0xFF700B, 1);

		wronggraphics11.lineTo(0, 130);
		wronggraphics11.lineTo(40, 130);
		wronggraphics11.lineTo(0, 0);
        wronggraphics11.angle = 224;
		wronggraphics11.alpha = 0;
        
        wronggraphics12 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics12.beginFill(0xFF700B, 1);

		wronggraphics12.lineTo(0, 130);
		wronggraphics12.lineTo(40, 130);
		wronggraphics12.lineTo(0, 0);
        wronggraphics12.angle = 247;
		wronggraphics12.alpha = 0;
        
        wronggraphics13 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics13.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics13.beginFill(0xFF700B, 1);

		wronggraphics13.lineTo(0, 130);
		wronggraphics13.lineTo(40, 130);
		wronggraphics13.lineTo(0, 0);
        wronggraphics13.angle = 270;
		wronggraphics13.alpha = 0;
        
        
        wronggraphics14 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics14.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics14.beginFill(0xFF700B, 1);

		wronggraphics14.lineTo(0, 130);
		wronggraphics14.lineTo(40, 130);
		wronggraphics14.lineTo(0, 0);
        wronggraphics14.angle = 292;
		wronggraphics14.alpha = 0;
        
        
        wronggraphics15 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics15.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics15.beginFill(0xFF700B, 1);

		wronggraphics15.lineTo(0, 130);
		wronggraphics15.lineTo(40, 130);
		wronggraphics15.lineTo(0, 0);
        wronggraphics15.angle = 312;
		wronggraphics15.alpha = 0;
        
        
        wronggraphics16 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics16.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics16.beginFill(0xFF700B, 1);

		wronggraphics16.lineTo(0, 130);
		wronggraphics16.lineTo(40, 130);
		wronggraphics16.lineTo(0, 0);
        wronggraphics16.angle = 334;
		wronggraphics16.alpha = 0;
        
        wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
        wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
        wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
        wronggraphics4.inputEnabled = true;
        wronggraphics4.input.useHandCursor = true;
        wronggraphics5.inputEnabled = true;
        wronggraphics5.input.useHandCursor = true;
        wronggraphics6.inputEnabled = true;
        wronggraphics6.input.useHandCursor = true;
        wronggraphics7.inputEnabled = true;
        wronggraphics7.input.useHandCursor = true;
        wronggraphics8.inputEnabled = true;
        wronggraphics8.input.useHandCursor = true;
        wronggraphics9.inputEnabled = true;
        wronggraphics9.input.useHandCursor = true;
        wronggraphics10.inputEnabled = true;
        wronggraphics10.input.useHandCursor = true;
        wronggraphics11.inputEnabled = true;
        wronggraphics11.input.useHandCursor = true;
        wronggraphics12.inputEnabled = true;
        wronggraphics12.input.useHandCursor = true;
        wronggraphics13.inputEnabled = true;
        wronggraphics13.input.useHandCursor = true;
        wronggraphics14.inputEnabled = true;
        wronggraphics14.input.useHandCursor = true;
        wronggraphics15.inputEnabled = true;
        wronggraphics15.input.useHandCursor = true;
        wronggraphics16.inputEnabled = true;
        wronggraphics16.input.useHandCursor = true;
        
        
        wronggraphics1.events.onInputDown.add(this.correctAns,this);
        wronggraphics2.events.onInputDown.add(this.correctAns,this);
        wronggraphics3.events.onInputDown.add(this.correctAns,this);
        wronggraphics4.events.onInputDown.add(this.correctAns,this);
        wronggraphics5.events.onInputDown.add(this.correctAns,this);
        wronggraphics6.events.onInputDown.add(this.correctAns,this);
        wronggraphics7.events.onInputDown.add(this.correctAns,this);
        wronggraphics8.events.onInputDown.add(this.correctAns,this);
        wronggraphics9.events.onInputDown.add(this.correctAns,this);
        wronggraphics10.events.onInputDown.add(this.correctAns,this);
        wronggraphics11.events.onInputDown.add(this.correctAns,this);
        wronggraphics12.events.onInputDown.add(this.correctAns,this);
        wronggraphics13.events.onInputDown.add(this.correctAns,this);
        wronggraphics14.events.onInputDown.add(this.correctAns,this);
        wronggraphics15.events.onInputDown.add(this.correctAns,this);
        wronggraphics16.events.onInputDown.add(this.correctAns,this);
        
        
        /*var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-0;
		centerCircle.y = this.world.centerY-50;
		windAnim1.addChild(centerCircle);*/
        
        windmillGroup= this.add.group();
        
        windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(wronggraphics1);
        windmillGroup.add(wronggraphics2);
        windmillGroup.add(wronggraphics3);
        windmillGroup.add(wronggraphics4);
        windmillGroup.add(wronggraphics5);
        windmillGroup.add(wronggraphics6);
        windmillGroup.add(wronggraphics7);
        windmillGroup.add(wronggraphics8);
        windmillGroup.add(wronggraphics9);
        windmillGroup.add(wronggraphics10);
        windmillGroup.add(wronggraphics11);
        windmillGroup.add(wronggraphics12);
        windmillGroup.add(wronggraphics13);
        windmillGroup.add(wronggraphics14);
        windmillGroup.add(wronggraphics15);
        windmillGroup.add(wronggraphics16);
      // windmillGroup.add(centerCircle);

        windmillGroup.x = 1000;
        this.getVoice();
        var tween = this.add.tween(windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                //this.addQuestion(count);
                
            }, this); 
	},
    
    addNinthWindMill:function()
	{
		count++;		
		//adding windmill to the game.
        var stick = this.add.sprite(this.world.centerX-5,this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
        
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind3');		
		//windAnim1.scale.setTo(0.85);
		windAnim1.anchor.setTo(0.5);			
	//	windAnim1.animations.add('rotate');
        
        wronggraphics1 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);

		wronggraphics1.lineTo(0, 130);
		wronggraphics1.lineTo(40, 130);
		wronggraphics1.lineTo(0, 0);
        wronggraphics1.angle = 0;
        wronggraphics1.alpha =0;
        
        wronggraphics2 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);

		wronggraphics2.lineTo(0, 130);
		wronggraphics2.lineTo(40, 130);
		wronggraphics2.lineTo(0, 0);
        wronggraphics2.angle = 22;
        
        wronggraphics2.alpha =0;

        wronggraphics3 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);

		wronggraphics3.lineTo(0, 130);
		wronggraphics3.lineTo(40, 130);

		wronggraphics3.lineTo(0, 0);
        wronggraphics3.angle = 44;
		wronggraphics3.alpha = 0; 
       
        wronggraphics4 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);

		wronggraphics4.lineTo(0, 110);
		wronggraphics4.lineTo(40, 100);
		wronggraphics4.lineTo(0, 0);
        wronggraphics4.angle = 68;
		wronggraphics4.alpha = 0;
        
        wronggraphics5 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics5.beginFill(0xFF700B, 1);

		wronggraphics5.lineTo(0, 130);
		wronggraphics5.lineTo(40, 130);
		wronggraphics5.lineTo(0, 0);
        wronggraphics5.angle = 90;
		wronggraphics5.alpha = 0;
        
        
        wronggraphics6 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics6.beginFill(0xFF700B, 1);

		wronggraphics6.lineTo(0, 130);
		wronggraphics6.lineTo(40, 130);
		wronggraphics6.lineTo(0, 0);
        wronggraphics6.angle = 112;
        wronggraphics6.alpha = 0;
        
        wronggraphics7 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics7.beginFill(0xFF700B, 1);

		wronggraphics7.lineTo(0, 130);
		wronggraphics7.lineTo(40, 130);
		wronggraphics7.lineTo(0, 0);
        wronggraphics7.angle = 134;
		wronggraphics7.alpha = 0;
        
        wronggraphics8 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics8.beginFill(0xFF700B, 1);

		wronggraphics8.lineTo(0, 130);
		wronggraphics8.lineTo(40, 130);
		wronggraphics8.lineTo(0, 0);
        wronggraphics8.angle = 156;
		wronggraphics8.alpha = 0;
        
        wronggraphics9 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics9.beginFill(0xFF700B, 1);

		wronggraphics9.lineTo(0, 130);
		wronggraphics9.lineTo(40, 130);
		wronggraphics9.lineTo(0, 0);
        wronggraphics9.angle = 178;
		wronggraphics9.alpha = 0;
        
        wronggraphics10 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics10.beginFill(0xFF700B, 1);

		wronggraphics10.lineTo(0, 130);
		wronggraphics10.lineTo(40, 130);
		wronggraphics10.lineTo(0, 0);
        wronggraphics10.angle = 200;
		wronggraphics10.alpha = 0;
        
        
        wronggraphics11 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics11.beginFill(0xFF700B, 1);

		wronggraphics11.lineTo(0, 130);
		wronggraphics11.lineTo(40, 130);
		wronggraphics11.lineTo(0, 0);
        wronggraphics11.angle = 224;
		wronggraphics11.alpha = 0;
        
        wronggraphics12 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics12.beginFill(0xFF700B, 1);

		wronggraphics12.lineTo(0, 130);
		wronggraphics12.lineTo(40, 130);
		wronggraphics12.lineTo(0, 0);
        wronggraphics12.angle = 247;
		wronggraphics12.alpha = 0;
        
        wronggraphics13 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics13.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics13.beginFill(0xFF700B, 1);

		wronggraphics13.lineTo(0, 130);
		wronggraphics13.lineTo(40, 130);
		wronggraphics13.lineTo(0, 0);
        wronggraphics13.angle = 270;
		wronggraphics13.alpha = 0;
        
        
        wronggraphics14 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics14.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics14.beginFill(0xFF700B, 1);

		wronggraphics14.lineTo(0, 130);
		wronggraphics14.lineTo(40, 130);
		wronggraphics14.lineTo(0, 0);
        wronggraphics14.angle = 292;
		wronggraphics14.alpha = 0;
        
        
        wronggraphics15 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics15.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics15.beginFill(0xFF700B, 1);

		wronggraphics15.lineTo(0, 130);
		wronggraphics15.lineTo(40, 130);
		wronggraphics15.lineTo(0, 0);
        wronggraphics15.angle = 312;
		wronggraphics15.alpha = 0;
        
        
        wronggraphics16 = this.add.graphics(this.world.centerX, this.world.centerY);
		wronggraphics16.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics16.beginFill(0xFF700B, 1);

		wronggraphics16.lineTo(0, 130);
		wronggraphics16.lineTo(40, 130);
		wronggraphics16.lineTo(0, 0);
        wronggraphics16.angle = 334;
		wronggraphics16.alpha = 0;
        
        wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
        wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
        wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
        wronggraphics4.inputEnabled = true;
        wronggraphics4.input.useHandCursor = true;
        wronggraphics5.inputEnabled = true;
        wronggraphics5.input.useHandCursor = true;
        wronggraphics6.inputEnabled = true;
        wronggraphics6.input.useHandCursor = true;
        wronggraphics7.inputEnabled = true;
        wronggraphics7.input.useHandCursor = true;
        wronggraphics8.inputEnabled = true;
        wronggraphics8.input.useHandCursor = true;
        wronggraphics9.inputEnabled = true;
        wronggraphics9.input.useHandCursor = true;
        wronggraphics10.inputEnabled = true;
        wronggraphics10.input.useHandCursor = true;
        wronggraphics11.inputEnabled = true;
        wronggraphics11.input.useHandCursor = true;
        wronggraphics12.inputEnabled = true;
        wronggraphics12.input.useHandCursor = true;
        wronggraphics13.inputEnabled = true;
        wronggraphics13.input.useHandCursor = true;
        wronggraphics14.inputEnabled = true;
        wronggraphics14.input.useHandCursor = true;
        wronggraphics15.inputEnabled = true;
        wronggraphics15.input.useHandCursor = true;
        wronggraphics16.inputEnabled = true;
        wronggraphics16.input.useHandCursor = true;
        
        
        wronggraphics1.events.onInputDown.add(this.correctAns,this);
        wronggraphics2.events.onInputDown.add(this.correctAns,this);
        wronggraphics3.events.onInputDown.add(this.correctAns,this);
        wronggraphics4.events.onInputDown.add(this.correctAns,this);
        wronggraphics5.events.onInputDown.add(this.correctAns,this);
        wronggraphics6.events.onInputDown.add(this.correctAns,this);
        wronggraphics7.events.onInputDown.add(this.correctAns,this);
        wronggraphics8.events.onInputDown.add(this.correctAns,this);
        wronggraphics9.events.onInputDown.add(this.correctAns,this);
        wronggraphics10.events.onInputDown.add(this.correctAns,this);
        wronggraphics11.events.onInputDown.add(this.correctAns,this);
        wronggraphics12.events.onInputDown.add(this.wrongAns,this);
        wronggraphics13.events.onInputDown.add(this.wrongAns,this);
        wronggraphics14.events.onInputDown.add(this.wrongAns,this);
        wronggraphics15.events.onInputDown.add(this.wrongAns,this);
        wronggraphics16.events.onInputDown.add(this.correctAns,this);
        
        
       /* var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX+5;
		centerCircle.y = this.world.centerY-50;
		windAnim1.addChild(centerCircle);*/
        
        windmillGroup= this.add.group();
        
        windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(wronggraphics1);
        windmillGroup.add(wronggraphics2);
        windmillGroup.add(wronggraphics3);
        windmillGroup.add(wronggraphics4);
        windmillGroup.add(wronggraphics5);
        windmillGroup.add(wronggraphics6);
        windmillGroup.add(wronggraphics7);
        windmillGroup.add(wronggraphics8);
        windmillGroup.add(wronggraphics9);
        windmillGroup.add(wronggraphics10);
        windmillGroup.add(wronggraphics11);
        windmillGroup.add(wronggraphics12);
        windmillGroup.add(wronggraphics13);
        windmillGroup.add(wronggraphics14);
        windmillGroup.add(wronggraphics15);
        windmillGroup.add(wronggraphics16);
      // windmillGroup.add(centerCircle);

        windmillGroup.x = 1000;
        this.getVoice();
        var tween = this.add.tween(windmillGroup);
            tween.to({ x: 0}, 0,'Linear', true, 0);
            tween.onComplete.add(function(){
                //this.addQuestion(count);
                
            }, this);

    },
    
    getVoice:function(){
        this.stopVoice();
        switch(questionArray[count-1])
        {
            case 1:
            case 4:
            case 8:if(window.languageSelected=="English")
                        Eng_12A2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12A2.play();
                    else
                        Kan_12A2.play();
                    break;
            case 3:
            case 6:
            case 7:if(window.languageSelected=="English")
                        Eng_12A1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12A1.play();
                    else
                        Kan_12A1.play();
                    break;
            case 2:
            case 5:
            case 9:if(window.languageSelected=="English")
                        Eng_12A3.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12A3.play();
                    else
                        Kan_12A3.play();
                    break;
            
        }
    },
    stopVoice:function(){
        Eng_12A2.stop();
        Hin_12A2.stop();
        Kan_12A2.stop();
        Eng_12A1.stop();
        Hin_12A1.stop();
        Kan_12A1.stop();
        Eng_12A3.stop();
        Hin_12A3.stop();
        Kan_12A3.stop();
    }
	

};
