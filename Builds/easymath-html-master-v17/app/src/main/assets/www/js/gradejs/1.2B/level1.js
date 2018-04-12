Game.grade1_2Blevel1=function(){};

var background;
var headingAnim;
var windAnim1;
var windSprite1,windSprite2,windSprite3,windSprite4,windSprite5,windSprite6,windSprite7,windSprite8,windSprite9;
var redpaint;
var yellowpaint;
var greenpaint;
var selectedColor = null;
var windmillGroup;
//var rightAnswer = false;
var text;
var questionBackground;
var buttonBackground,buttonBackground2,buttonBackground3;
var buttonText,buttonText2,buttonText3;
var anim111;
var flagmain11Anim;
var speakerBtn;

var noofAttempts;
var timer;
var AnsTimerCount;

Game.grade1_2Blevel1.prototype={
	create:function(game){
		
		noofAttempts=0;
		AnsTimerCount=0;
		
		questionArray = [1,2,3,4,5,6,7,8,9];
		questionArray = this.shuffle(questionArray);
		count = 0;
		
    
		
		/*loginTime = game.storage.getItem('loginTime');		
		var time = new Date();		
		game.storage.setItem('loginTime', time);*/
		
		Phaser.Input.TOUCH_OVERRIDES_MOUSE = 1;
		this.game.input.touch.preventDefault = false;
		
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
		
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();
		
        //background = this.add.tileSprite(0,0,this.world.width,this.world.height-50,'Level12A_background');
      
        //background.scale.setTo(1.05,1.12);
        
        background = this.add.sprite(0,0,'Level12A_background');
		//adding background image.
		//background = this.add.tileSprite(0,0,this.world.width,this.world.height,'Level12A_background');
		
		//navBg = this.add.sprite(0,20,'Level12A_navBg');
		this.generateStarsForTheScene(6);
		//var starAnim = this.add.sprite(this.world.centerX,35,'Level12A_starAnim');
		
		
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
		},this,1,0,2);
		
	
        
    
        
		this.displayQuestion();

	},
	stopVoice:function(){
        Eng_12B5.stop();
        Hin_12B5.stop();
        Kan_12B5.stop();
        Eng_12B1.stop();
        Hin_12B1.stop();
        Kan_12B1.stop();
        Eng_12B3.stop();
        Hin_12B3.stop();
        Kan_12B3.stop();
        Eng_12B2.stop();
        Hin_12B2.stop();
        Kan_12B2.stop();

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
	

	displayQuestion:function(target)
	{
		 noofAttempts = 0;
		timer = game.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		timer.loop(1000, function(){
			AnsTimerCount++;
		}, this);

		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		timer.start();
		
        speakerBtn.inputEnabled=true;
        speakerBtn.input.useHandCursor = true;
		switch(questionArray[count])
		{
			case 1: this.addFirstWindMill(); break;
			case 2: this.addSecondWindMill(); break;
			case 3: this.addThirdWindMill(); break;
			case 4: this.addFourthWindMill(); break;
			case 5: this.addFifthWindMill(); break;
            case 6: this.addSixthWindMill(); break;
            case 7: this.addSeventhWindMill(); break;
            case 8: this.addEighthWindMill(); break;
            case 9: this.addNinethWindMill(); break;
		
		}
		
	},
	
	update:function()
	{
		/*if(rightAnswer)
            {
                windAnim1.angle+=7;
            }
		*/
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
			case 1:text.setText(selctedLang.secondSceneQuestion1);break;
			case 2:text.setText(selctedLang.secondSceneQuestion2);break;
			case 3:text.setText(selctedLang.secondSceneQuestion3);break;
			case 4:text.setText(selctedLang.secondSceneQuestion4);break;
			case 5:text.setText(selctedLang.secondSceneQuestion5);break;
                case 6:text.setText(selctedLang.secondSceneQuestion6);break;
                case 7:text.setText(selctedLang.secondSceneQuestion7);break;
                case 8:text.setText(selctedLang.secondSceneQuestion8);break;
                case 9:text.setText(selctedLang.secondSceneQuestion9);break;
				
		}
		var tween = this.add.tween(questionBackground);
		tween.to({ y: 490 }, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			//this.addEventListeners();
		}, this);

	},
	
	correctAns:function(target)
	{
		 timer.stop();
		timer = null;
		var currentTime = window.timeSaveFunc();
				var saveAsment = 
				{ 
					id_game_play: window.gameid,
					id_question: window.gameid,  
					answer_given: "Yes",
					time2answer: AnsTimerCount,
					attempts: noofAttempts,
					date_time_event: currentTime, 
					access_token: window.acctkn 
				}
		AnsTimerCount=0;	
		//absdsjsapi.saveAssessment(saveAsment);
		
		
		speakerBtn.inputEnabled=false;
        //console.log("correct");
        anim111 = windAnim1.animations.add('animation');
        anim111.play();
        //anim111.onComplete.add(function(){spin2.play();rightAnswer = true;},this);
        anim111.onComplete.add(function(){this.removeCelebration();},this);
        
		if(buttonBackground!=null||buttonBackground!=undefined)
		{
            
			buttonBackground.events.onInputDown.removeAll();
			buttonBackground.events.onInputOver.removeAll();
			buttonBackground.events.onInputOut.removeAll();	
            
		}
			
		if(buttonBackground2!=null||buttonBackground2!=undefined)
		   {
			   buttonBackground2.events.onInputDown.removeAll();
			   buttonBackground2.events.onInputOver.removeAll();
			   buttonBackground2.events.onInputOut.removeAll();	
		   }
		if(buttonBackground3!=null||buttonBackground2!=undefined)
		{
			buttonBackground3.events.onInputDown.removeAll();
			buttonBackground3.events.onInputOver.removeAll();
			buttonBackground3.events.onInputOut.removeAll();
		}
		
		//score+=10;
		//scoretext.setText(selctedLang.score+' : '+score);
		

		var starAnim = starsGroup.getChildAt(count-1);
		
		starAnim.smoothed = false;
    	var anim = starAnim.animations.add('star');
		anim.play();
		
		ClickSound.play();
		celebr.play();
       // windAnim1.animations.play('rotate',80,true);
       // this.time.events.add(3000, this.removeCelebration, this);
        this.time.events.add(500, function(){spin2.play();}, this);
	},
    
    wrongAns:function(target)
	{
		//rightAnswer = true;
		
		//score-=5;
		//scoretext.setText(selctedLang.score+' : '+score);
		
		//ClickSound.play();
        //target.frame = 1;
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
		tween.to({ x: -700}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			//this.addQuestion(count);
            windmillGroup.destroy();
            
            if(count<6)
            {
                this.displayQuestion();
            }
            else
            {
                
				this.state.start('grade1_2BScore');
            }
		}, this); 
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
	
	addFirstWindMill:function()
	{
		 
		count++;	
		//adding windmill to the game.
        //var stick = this.add.sprite(this.world.centerX-200,this.world.centerY+20,'Level12A_stick');
		//stick.scale.setTo(1,1.2);
        

//        
//		windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY-30,'Level12A_scene1wind1');		
//		windAnim1.scale.setTo(0.8);
//		windAnim1.anchor.setTo(0.5);	
        
        windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY,'Level12A_scene1wind1');
    	windAnim1.anchor.setTo(0.5,0.4);
        //windAnim1.scale.setTo(0.9);
       //windAnim1.animations.add('rotate');
		//windAnim1.addChild(centerCircle);
		
		buttonBackground = this.add.sprite(this.world.centerX+210,this.world.centerY-100,'Level12A_scene2Btn1');
		buttonBackground.scale.setTo(1);
		buttonBackground.frame = 1;
		buttonBackground.anchor.setTo(0.5);
		
		/*buttonText = this.add.text(0, 0,'Level12A_  1/2  ');
		buttonText.anchor.set(0.5);
		buttonText.align = 'center';

		buttonText.font = 'Comic Sans MS';
		buttonText.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText.fill = '#FFFFFF';

		buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground.addChild(buttonText);*/
        
		
		buttonBackground2 = this.add.sprite(this.world.centerX+210,this.world.centerY+10,'Level12A_scene2Btn2');
		buttonBackground2.scale.setTo(1);
        buttonBackground2.frame = 1;
		buttonBackground2.anchor.setTo(0.5);
		
		/*buttonText2 = this.add.text(0, 0,'Level12A_  3/4  ');
		buttonText2.anchor.set(0.5);
		buttonText2.align = 'center';

		buttonText2.font = 'Comic Sans MS';
		buttonText2.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText2.fill = '#FFFFFF';

		buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground2.addChild(buttonText2);*/
      
		
		buttonBackground3 = this.add.sprite(this.world.centerX+210,this.world.centerY+120,'Level12A_scene2Btn3');
		buttonBackground3.scale.setTo(1);
        buttonBackground3.frame = 1;
		buttonBackground3.anchor.setTo(0.5);
		
		/*buttonText3 = this.add.text(0, 0,'Level12A_  1/4  ');
		buttonText3.anchor.set(0.5);
		buttonText3.align = 'center';

		buttonText3.font = 'Comic Sans MS';
		buttonText3.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText3.fill = '#FFFFFF';

		buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground3.addChild(buttonText3);*/
		
        
        /*var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-196;
		centerCircle.y = this.world.centerY-35;
		windAnim1.addChild(centerCircle);*/
        
        windmillGroup= this.add.group();
 
       // windmillGroup.add(stick);
       
        windmillGroup.add(windAnim1);
        windmillGroup.add(buttonBackground);
        windmillGroup.add(buttonBackground2);
        windmillGroup.add(buttonBackground3);
       // windmillGroup.add(centerCircle);
        

        windmillGroup.x = 1400;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
           // this.time.events.add(4000,function(){
                buttonBackground.inputEnabled = true;
                buttonBackground.input.useHandCursor = true;
                buttonBackground2.inputEnabled = true;
                buttonBackground2.input.useHandCursor = true;
                buttonBackground3.inputEnabled = true;
                buttonBackground3.input.useHandCursor = true;
                buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                  ClickSound.play();
				  
				  noofAttempts++;
				var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: window.gameid, 
						id_question: window.gameid,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name, 
						access_token: window.acctkn 
					} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
                this.time.events.add(500, function(){this.correctAns();}, this);},this);
                buttonBackground.events.onInputOver.add(function(target){
                //target.scale.setTo(0.9);	
                },this);
                buttonBackground.events.onInputOut.add(function(target){
                //target.scale.setTo(0.8); 	
                },this);
                buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                  ClickSound.play();
				  
				  noofAttempts++;
			var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
			
                this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground2.events.onInputOver.add(function(target){
                //target.scale.setTo(0.9);	
                },this);
                buttonBackground2.events.onInputOut.add(function(target){
                //target.scale.setTo(0.8);	
                },this);
                buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                  ClickSound.play();
				 
				 noofAttempts++;
			var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
			
                this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                // buttonBackground3.events.onInputDown.removeAll();
                buttonBackground3.events.onInputOver.add(function(target){
                //target.scale.setTo(0.9);
                },this);
                buttonBackground3.events.onInputOut.add(function(target){
                //target.scale.setTo(0.8);	
                },this);
           // },this);
			//this.addQuestion(count);
		}, this);               

	},
	
	addSecondWindMill:function()
	{		 			
		count++;		
		//adding windmill to the game.
        //var stick = this.add.sprite(this.world.centerX-200,this.world.centerY+20,'Level12A_stick');
		//stick.scale.setTo(1,1.2);
        
//		windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY-30,'Level12A_scene1wind2');		
//		windAnim1.scale.setTo(0.8);
//		windAnim1.anchor.setTo(0.5);
        
        windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY,'Level12A_scene1wind2');
    	windAnim1.anchor.setTo(0.5,0.4);
      //  windAnim1.scale.setTo(0.9);
		//windAnim1.animations.add('rotate');
        //windAnim1.addChild(centerCircle);
		
		
		buttonBackground = this.add.sprite(this.world.centerX+210,this.world.centerY-100,'Level12A_scene2Btn1');
		buttonBackground.frame = 1;
		buttonBackground.scale.setTo(1);
		buttonBackground.anchor.setTo(0.5);
		
		/*buttonText = this.add.text(0, 0,'Level12A_  1/2  ');
		buttonText.anchor.set(0.5);
		buttonText.align = 'center';

		buttonText.font = 'Comic Sans MS';
		buttonText.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText.fill = '#FFFFFF';

		buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground.addChild(buttonText);*/
        
		
		buttonBackground2 = this.add.button(this.world.centerX+210,this.world.centerY+10,'Level12A_scene2Btn2');
		buttonBackground2.frame = 1;
		buttonBackground2.scale.setTo(1);
		buttonBackground2.anchor.setTo(0.5);
		
		/*buttonText2 = this.add.text(0, 0,'Level12A_  3/4  ');
		buttonText2.anchor.set(0.5);
		buttonText2.align = 'center';

		buttonText2.font = 'Comic Sans MS';
		buttonText2.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText2.fill = '#FFFFFF';

		buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground2.addChild(buttonText2);*/
      
		
		buttonBackground3 = this.add.button(this.world.centerX+210,this.world.centerY+120,'Level12A_scene2Btn3');
		buttonBackground3.frame = 1;
		buttonBackground3.scale.setTo(1);
		buttonBackground3.anchor.setTo(0.5);
		
		/*buttonText3 = this.add.text(0, 0,'Level12A_  1/4  ');
		buttonText3.anchor.set(0.5);
		buttonText3.align = 'center';

		buttonText3.font = 'Comic Sans MS';
		buttonText3.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText3.fill = '#FFFFFF';

		buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground3.addChild(buttonText3);*/
		
        
        /*var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-196;
		centerCircle.y = this.world.centerY-35;
		windAnim1.addChild(centerCircle);
		*/
        
        windmillGroup= this.add.group();
 
        //windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(buttonBackground);
        windmillGroup.add(buttonBackground2);
        windmillGroup.add(buttonBackground3);
       // windmillGroup.add(centerCircle);

        windmillGroup.x = 1400;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
            //this.time.events.add(4000,function(){
                buttonBackground.inputEnabled = true;
                buttonBackground.input.useHandCursor = true;
                buttonBackground2.inputEnabled = true;
                buttonBackground2.input.useHandCursor = true;
                buttonBackground3.inputEnabled = true;
                buttonBackground3.input.useHandCursor = true;
                buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                          ClickSound.play();
														  
														  noofAttempts++;
							var currentTime = window.timeSaveFunc();
								var interactEvent = 
								{ 
									id_game_play: window.gameid, 
									id_question: window.gameid,  
									date_time_event: currentTime, 
									event_type: "click", 
									res_id: target.name, 
									access_token: window.acctkn 
								} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
                                                          this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground.events.onInputOver.add(function(target){
                //target.scale.setTo(0.9);

                },this);
                buttonBackground.events.onInputOut.add(function(target){
                //target.scale.setTo(0.8);		
                },this);
                buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                          ClickSound.play();
														  noofAttempts++;
							var currentTime = window.timeSaveFunc();
								var interactEvent = 
								{ 
									id_game_play: window.gameid, 
									id_question: window.gameid,  
									date_time_event: currentTime, 
									event_type: "click", 
									res_id: target.name, 
									access_token: window.acctkn 
								} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
                                                          this.time.events.add(500, function(){this.correctAns();}, this);},this);
                buttonBackground2.events.onInputOver.add(function(target){
                //target.scale.setTo(0.9);	
                },this);
                buttonBackground2.events.onInputOut.add(function(target){
                //target.scale.setTo(0.8);	
                },this);
                buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                          ClickSound.play();
														  noofAttempts++;
									var currentTime = window.timeSaveFunc();
										var interactEvent = 
										{ 
											id_game_play: window.gameid, 
											id_question: window.gameid,  
											date_time_event: currentTime, 
											event_type: "click", 
											res_id: target.name, 
											access_token: window.acctkn 
										} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
                                                          this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground3.events.onInputOver.add(function(target){
                //target.scale.setTo(0.9);	
                },this);
                buttonBackground3.events.onInputOut.add(function(target){
                //target.scale.setTo(0.8);
                },this);
           // },this);
			//this.addQuestion(count);
		}, this);

	},
    
    addThirdWindMill:function()
	{
		 
		count++;		
		//adding windmill to the game.
       // var stick = this.add.sprite(this.world.centerX-200,this.world.centerY+20,'Level12A_stick');
		//stick.scale.setTo(1,1.2);
        
//		windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY-30,'Level12A_scene1wind3');		
//		windAnim1.scale.setTo(0.8);
//		windAnim1.anchor.setTo(0.5);
//        
//		windAnim1.animations.add('rotate');
        
        windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY,'Level12A_scene1wind3');
    	windAnim1.anchor.setTo(0.5,0.4);
       // windAnim1.scale.setTo(0.9);
		//windAnim1.animations.add('rotate');
        //windAnim1.addChild(centerCircle);
		
		
		
		buttonBackground = this.add.button(this.world.centerX+210,this.world.centerY-100,'Level12A_scene2Btn1');
		buttonBackground.frame = 1;
		buttonBackground.scale.setTo(1);
		buttonBackground.anchor.setTo(0.5);
		
		/*buttonText = this.add.text(0, 0,'Level12A_  1/2  ');
		buttonText.anchor.set(0.5);
		buttonText.align = 'center';

		buttonText.font = 'Comic Sans MS';
		buttonText.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText.fill = '#FFFFFF';

		buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground.addChild(buttonText);*/
        
		
		buttonBackground2 = this.add.button(this.world.centerX+210,this.world.centerY+10,'Level12A_scene2Btn2');
		buttonBackground2.frame = 1;
		buttonBackground2.scale.setTo(1);
		buttonBackground2.anchor.setTo(0.5);
		
		/*buttonText2 = this.add.text(0, 0,'Level12A_  3/4  ');
		buttonText2.anchor.set(0.5);
		buttonText2.align = 'center';

		buttonText2.font = 'Comic Sans MS';
		buttonText2.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText2.fill = '#FFFFFF';

		buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground2.addChild(buttonText2);*/
      
		
		buttonBackground3 = this.add.button(this.world.centerX+210,this.world.centerY+120,'Level12A_scene2Btn3');
		buttonBackground3.frame = 1;
		buttonBackground3.scale.setTo(1);
		buttonBackground3.anchor.setTo(0.5);
		
		/*buttonText3 = this.add.text(0, 0,'Level12A_  1/4  ');
		buttonText3.anchor.set(0.5);
		buttonText3.align = 'center';

		buttonText3.font = 'Comic Sans MS';
		buttonText3.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText3.fill = '#FFFFFF';

		buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground3.addChild(buttonText3);*/
		
		
        
        /*var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-196;
		centerCircle.y = this.world.centerY-25;
		windAnim1.addChild(centerCircle);*/
        
        windmillGroup= this.add.group();
 
       // windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(buttonBackground);
        windmillGroup.add(buttonBackground2);
        windmillGroup.add(buttonBackground3);
       // windmillGroup.add(centerCircle);

        windmillGroup.x = 1400;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
            //this.time.events.add(4000,function(){
                buttonBackground.inputEnabled = true;
                buttonBackground.input.useHandCursor = true;
                buttonBackground2.inputEnabled = true;
                buttonBackground2.input.useHandCursor = true;
                buttonBackground3.inputEnabled = true;
                buttonBackground3.input.useHandCursor = true;
                buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                          ClickSound.play();
														  noofAttempts++;
								var currentTime = window.timeSaveFunc();
									var interactEvent = 
									{ 
										id_game_play: window.gameid, 
										id_question: window.gameid,  
										date_time_event: currentTime, 
										event_type: "click", 
										res_id: target.name, 
										access_token: window.acctkn 
									} 
									
									//absdsjsapi.saveInteractEvent(interactEvent);
                                                          this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground.events.onInputOver.add(function(target){
                //target.scale.setTo(0.9);

                },this);
                buttonBackground.events.onInputOut.add(function(target){
                //target.scale.setTo(0.8);

                },this);

                buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                          ClickSound.play();
																				  noofAttempts++;
								var currentTime = window.timeSaveFunc();
									var interactEvent = 
									{ 
										id_game_play: window.gameid, 
										id_question: window.gameid,  
										date_time_event: currentTime, 
										event_type: "click", 
										res_id: target.name, 
										access_token: window.acctkn 
									} 
									
									//absdsjsapi.saveInteractEvent(interactEvent);
                                                          this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground2.events.onInputOver.add(function(target){
                //target.scale.setTo(0.9);

                },this);
                buttonBackground2.events.onInputOut.add(function(target){
                //target.scale.setTo(0.8);

                },this);

                buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                          ClickSound.play();
																							  noofAttempts++;
											var currentTime = window.timeSaveFunc();
												var interactEvent = 
												{ 
													id_game_play: window.gameid, 
													id_question: window.gameid,  
													date_time_event: currentTime, 
													event_type: "click", 
													res_id: target.name, 
													access_token: window.acctkn 
												} 
												
												//absdsjsapi.saveInteractEvent(interactEvent);
                                                          this.time.events.add(500, function(){this.correctAns();}, this);},this);
                buttonBackground3.events.onInputOver.add(function(target){
                //target.scale.setTo(0.9);

                },this);
                buttonBackground3.events.onInputOut.add(function(target){
                //target.scale.setTo(0.8);

                },this);
           // },this);
			//this.addQuestion(count);
		}, this);

	},
	
    addFourthWindMill:function()
	{
		 
		count++;	
		//adding windmill to the game.
        //var stick = this.add.sprite(this.world.centerX-205,this.world.centerY+20,'Level12A_stick');
		//stick.scale.setTo(1,1.2);
        
//		windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY-50,'Level12A_scene2wind1');		
//		windAnim1.scale.setTo(0.8);
//		windAnim1.anchor.setTo(0.5);			
//		windAnim1.animations.add('rotate');
        
        windAnim1 = this.add.sprite(this.world.centerX-202,this.world.centerY+10,'Level12A_scene2wind1');
    	windAnim1.anchor.setTo(0.5,0.4);
       // windAnim1.scale.setTo(0.9);
		//windAnim1.animations.add('rotate');
        //windAnim1.addChild(centerCircle);
		
		
		
		buttonBackground = this.add.button(this.world.centerX+210,this.world.centerY-100,'Level12A_scene2Btn1');
		buttonBackground.frame = 1;
		buttonBackground.scale.setTo(1);
		buttonBackground.anchor.setTo(0.5);
		
		/*buttonText = this.add.text(0, 0,'Level12A_  1/2  ');
		buttonText.anchor.set(0.5);
		buttonText.align = 'center';

		buttonText.font = 'Comic Sans MS';
		buttonText.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText.fill = '#FFFFFF';

		buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground.addChild(buttonText);*/
        
		
		buttonBackground2 = this.add.button(this.world.centerX+210,this.world.centerY+10,'Level12A_scene2Btn2');
		buttonBackground2.frame = 1;
		buttonBackground2.scale.setTo(1);
		buttonBackground2.anchor.setTo(0.5);
		
		/*buttonText2 = this.add.text(0, 0,'Level12A_  3/4  ');
		buttonText2.anchor.set(0.5);
		buttonText2.align = 'center';

		buttonText2.font = 'Comic Sans MS';
		buttonText2.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText2.fill = '#FFFFFF';

		buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground2.addChild(buttonText2);*/
      
		
		buttonBackground3 = this.add.button(this.world.centerX+210,this.world.centerY+120,'Level12A_scene2Btn3');
		buttonBackground3.frame = 1;
		buttonBackground3.scale.setTo(1);
		buttonBackground3.anchor.setTo(0.5);
		
		/*buttonText3 = this.add.text(0, 0,'Level12A_  1/4  ');
		buttonText3.anchor.set(0.5);
		buttonText3.align = 'center';

		buttonText3.font = 'Comic Sans MS';
		buttonText3.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText3.fill = '#FFFFFF';

		buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground3.addChild(buttonText3);*/
		
		
        /*var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY-12,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.scale.setTo(1.2,1.2);
        centerCircle.x = this.world.centerX-200;
		centerCircle.y = this.world.centerY-50;
		windAnim1.addChild(centerCircle);*/
        
        windmillGroup= this.add.group();
 
        //windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(buttonBackground);
        windmillGroup.add(buttonBackground2);
        windmillGroup.add(buttonBackground3);
        //windmillGroup.add(centerCircle);

        windmillGroup.x = 1400;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
           // this.time.events.add(4000,function(){
                buttonBackground.inputEnabled = true;
                buttonBackground.input.useHandCursor = true;
                buttonBackground2.inputEnabled = true;
                buttonBackground2.input.useHandCursor = true;
                buttonBackground3.inputEnabled = true;
                buttonBackground3.input.useHandCursor = true;

                buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
										var currentTime = window.timeSaveFunc();
											var interactEvent = 
											{ 
												id_game_play: window.gameid, 
												id_question: window.gameid,  
												date_time_event: currentTime, 
												event_type: "click", 
												res_id: target.name, 
												access_token: window.acctkn 
											} 
											
											//absdsjsapi.saveInteractEvent(interactEvent);
																  this.time.events.add(500, function(){this.correctAns();}, this);},this);
                buttonBackground.events.onInputOver.add(function(target){
                //	target.scale.setTo(0.9);

                },this);
                buttonBackground.events.onInputOut.add(function(target){
                //	target.scale.setTo(0.8);

                },this);

                buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
										var currentTime = window.timeSaveFunc();
											var interactEvent = 
											{ 
												id_game_play: window.gameid, 
												id_question: window.gameid,  
												date_time_event: currentTime, 
												event_type: "click", 
												res_id: target.name, 
												access_token: window.acctkn 
											} 
											
											//absdsjsapi.saveInteractEvent(interactEvent);
                                                              this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground2.events.onInputOver.add(function(target){
                //	target.scale.setTo(0.9);

                },this);
                buttonBackground2.events.onInputOut.add(function(target){
                //	target.scale.setTo(0.8);

                },this);

                buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
										var currentTime = window.timeSaveFunc();
											var interactEvent = 
											{ 
												id_game_play: window.gameid, 
												id_question: window.gameid,  
												date_time_event: currentTime, 
												event_type: "click", 
												res_id: target.name, 
												access_token: window.acctkn 
											} 
											
											//absdsjsapi.saveInteractEvent(interactEvent);
                                                              this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground3.events.onInputOver.add(function(target){
                    target.scale.setTo(0.9);

                },this);
                buttonBackground3.events.onInputOut.add(function(target){
                //	target.scale.setTo(0.8);

                },this);
            //},this);
			//this.addQuestion(count);
		}, this);

	},
    
    
    addFifthWindMill:function()
	{
		count++;		
		//adding windmill to the game.
        //var stick = this.add.sprite(this.world.centerX-205,this.world.centerY+20,'Level12A_stick');
		//stick.scale.setTo(1,1.2);
        
//		windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY-50,'Level12A_scene2wind2');		
//		windAnim1.scale.setTo(0.8);
//		windAnim1.anchor.setTo(0.5);			
//		windAnim1.animations.add('rotate');
        
        windAnim1 = this.add.sprite(this.world.centerX-202,this.world.centerY+10,'Level12A_scene2wind2');
    	windAnim1.anchor.setTo(0.5,0.4);
        //windAnim1.scale.setTo(0.9);
		//windAnim1.animations.add('rotate');
        //windAnim1.addChild(centerCircle);
		
		
		
		buttonBackground = this.add.button(this.world.centerX+210,this.world.centerY-100,'Level12A_scene2Btn1');
		buttonBackground.frame = 1;
		buttonBackground.scale.setTo(1);
		buttonBackground.anchor.setTo(0.5);
		
		/*buttonText = this.add.text(0, 0,'Level12A_  1/2  ');
		buttonText.anchor.set(0.5);
		buttonText.align = 'center';

		buttonText.font = 'Comic Sans MS';
		buttonText.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText.fill = '#FFFFFF';

		buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground.addChild(buttonText);*/
        
		
		buttonBackground2 = this.add.button(this.world.centerX+210,this.world.centerY+10,'Level12A_scene2Btn2');
		buttonBackground2.frame = 1;
		buttonBackground2.scale.setTo(1);
		buttonBackground2.anchor.setTo(0.5);
		
		/*buttonText2 = this.add.text(0, 0,'Level12A_  3/4  ');
		buttonText2.anchor.set(0.5);
		buttonText2.align = 'center';

		buttonText2.font = 'Comic Sans MS';
		buttonText2.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText2.fill = '#FFFFFF';

		buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground2.addChild(buttonText2);*/
      
		
		buttonBackground3 = this.add.button(this.world.centerX+210,this.world.centerY+120,'Level12A_scene2Btn3');
		buttonBackground3.frame = 1;
		buttonBackground3.scale.setTo(1);
		buttonBackground3.anchor.setTo(0.5);
		
		/*buttonText3 = this.add.text(0, 0,'Level12A_  1/4  ');
		buttonText3.anchor.set(0.5);
		buttonText3.align = 'center';

		buttonText3.font = 'Comic Sans MS';
		buttonText3.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText3.fill = '#FFFFFF';

		buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground3.addChild(buttonText3);*/
		
		
        /*var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY-12,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.scale.setTo(1.2,1.2);
        centerCircle.x = this.world.centerX-200;
		centerCircle.y = this.world.centerY-50;
		windAnim1.addChild(centerCircle);*/
        
        windmillGroup= this.add.group();
 
       // windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(buttonBackground);
        windmillGroup.add(buttonBackground2);
        windmillGroup.add(buttonBackground3);
       // windmillGroup.add(centerCircle);

        windmillGroup.x = 1400;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
           // this.time.events.add(4000,function(){
                buttonBackground.inputEnabled = true;
                buttonBackground.input.useHandCursor = true;
                buttonBackground2.inputEnabled = true;
                buttonBackground2.input.useHandCursor = true;
                buttonBackground3.inputEnabled = true;
                buttonBackground3.input.useHandCursor = true;

                buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                              noofAttempts++;
										var currentTime = window.timeSaveFunc();
											var interactEvent = 
											{ 
												id_game_play: window.gameid, 
												id_question: window.gameid,  
												date_time_event: currentTime, 
												event_type: "click", 
												res_id: target.name, 
												access_token: window.acctkn 
											} 
											
											//absdsjsapi.saveInteractEvent(interactEvent);
                                                              this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground.events.onInputOver.add(function(target){
                //	target.scale.setTo(0.9);

                },this);
                buttonBackground.events.onInputOut.add(function(target){
                //	target.scale.setTo(0.8);

                },this);

                buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
											var currentTime = window.timeSaveFunc();
												var interactEvent = 
												{ 
													id_game_play: window.gameid, 
													id_question: window.gameid,  
													date_time_event: currentTime, 
													event_type: "click", 
													res_id: target.name, 
													access_token: window.acctkn 
												} 
												
												//absdsjsapi.saveInteractEvent(interactEvent);
                                                              this.time.events.add(500, function(){this.correctAns();}, this);},this);
                buttonBackground2.events.onInputOver.add(function(target){
                //	target.scale.setTo(0.9);

                },this);
                buttonBackground2.events.onInputOut.add(function(target){
                //	target.scale.setTo(0.8);

                },this);

                buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  
																		  noofAttempts++;
										var currentTime = window.timeSaveFunc();
											var interactEvent = 
											{ 
												id_game_play: window.gameid, 
												id_question: window.gameid,  
												date_time_event: currentTime, 
												event_type: "click", 
												res_id: target.name, 
												access_token: window.acctkn 
											} 
											
											//absdsjsapi.saveInteractEvent(interactEvent);
			
                                                              this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground3.events.onInputOver.add(function(target){
                //	target.scale.setTo(0.9);

                },this);
                buttonBackground3.events.onInputOut.add(function(target){
                //	target.scale.setTo(0.8);

                },this);
          //  },this);
			//this.addQuestion(count);
		}, this);

	},
    
    
    addSixthWindMill:function()
	{
		 
		count++;	
		//adding windmill to the game.
       // var stick = this.add.sprite(this.world.centerX-205,this.world.centerY+20,'Level12A_stick');
		//stick.scale.setTo(1,1.2);
        
//		windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY-50,'Level12A_scene2wind3');		
//		windAnim1.scale.setTo(0.8);
//		windAnim1.anchor.setTo(0.5);			
//		windAnim1.animations.add('rotate');
		
        windAnim1 = this.add.sprite(this.world.centerX-202,this.world.centerY+10,'Level12A_scene2wind3');
    	windAnim1.anchor.setTo(0.5,0.4);
        //windAnim1.scale.setTo(0.9);
		//windAnim1.animations.add('rotate');
        
		
		
		buttonBackground = this.add.button(this.world.centerX+210,this.world.centerY-100,'Level12A_scene2Btn1');
		buttonBackground.frame = 1;
		buttonBackground.scale.setTo(1);
		buttonBackground.anchor.setTo(0.5);
		
		/*buttonText = this.add.text(0, 0,'Level12A_  1/2  ');
		buttonText.anchor.set(0.5);
		buttonText.align = 'center';

		buttonText.font = 'Comic Sans MS';
		buttonText.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText.fill = '#FFFFFF';

		buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground.addChild(buttonText);*/
        
		
		buttonBackground2 = this.add.button(this.world.centerX+210,this.world.centerY+10,'Level12A_scene2Btn2');
		buttonBackground2.frame = 1;
		buttonBackground2.scale.setTo(1);
		buttonBackground2.anchor.setTo(0.5);
		
		/*buttonText2 = this.add.text(0, 0,'Level12A_  3/4  ');
		buttonText2.anchor.set(0.5);
		buttonText2.align = 'center';

		buttonText2.font = 'Comic Sans MS';
		buttonText2.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText2.fill = '#FFFFFF';

		buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground2.addChild(buttonText2);*/
      
		
		buttonBackground3 = this.add.button(this.world.centerX+210,this.world.centerY+120,'Level12A_scene2Btn3');
		buttonBackground3.frame = 1;
		buttonBackground3.scale.setTo(1);
		buttonBackground3.anchor.setTo(0.5);
		
		/*buttonText3 = this.add.text(0, 0,'Level12A_  1/4  ');
		buttonText3.anchor.set(0.5);
		buttonText3.align = 'center';

		buttonText3.font = 'Comic Sans MS';
		buttonText3.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText3.fill = '#FFFFFF';

		buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground3.addChild(buttonText3);*/
		
        
        /*var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY-12,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.scale.setTo(1.2,1.2);
        centerCircle.x = this.world.centerX-200;
		centerCircle.y = this.world.centerY-50;
		windAnim1.addChild(centerCircle);*/
        windmillGroup= this.add.group();
 
        //windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(buttonBackground);
        windmillGroup.add(buttonBackground2);
        windmillGroup.add(buttonBackground3);
       // windmillGroup.add(centerCircle);

        windmillGroup.x = 1400;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
            //this.time.events.add(4000,function(){
                buttonBackground.inputEnabled = true;
                buttonBackground.input.useHandCursor = true;
                buttonBackground2.inputEnabled = true;
                buttonBackground2.input.useHandCursor = true;
                buttonBackground3.inputEnabled = true;
                buttonBackground3.input.useHandCursor = true;

                buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
											var currentTime = window.timeSaveFunc();
												var interactEvent = 
												{ 
													id_game_play: window.gameid, 
													id_question: window.gameid,  
													date_time_event: currentTime, 
													event_type: "click", 
													res_id: target.name, 
													access_token: window.acctkn 
												} 
												
												//absdsjsapi.saveInteractEvent(interactEvent);
			
                                                              this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground.events.onInputOver.add(function(target){
                    //target.scale.setTo(0.9);

                },this);
                buttonBackground.events.onInputOut.add(function(target){
                    //target.scale.setTo(0.8);

                },this);

                buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
										var currentTime = window.timeSaveFunc();
											var interactEvent = 
											{ 
												id_game_play: window.gameid, 
												id_question: window.gameid,  
												date_time_event: currentTime, 
												event_type: "click", 
												res_id: target.name, 
												access_token: window.acctkn 
											} 
											
											//absdsjsapi.saveInteractEvent(interactEvent);
			
                                                              this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground2.events.onInputOver.add(function(target){
                    //target.scale.setTo(0.9);

                },this);
                buttonBackground2.events.onInputOut.add(function(target){
                    //target.scale.setTo(0.8);

                },this);

                buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
				var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: window.gameid, 
						id_question: window.gameid,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name, 
						access_token: window.acctkn 
					} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
                                                              this.time.events.add(500, function(){this.correctAns();}, this);},this);
                buttonBackground3.events.onInputOver.add(function(target){
                    //target.scale.setTo(0.9);

                },this);
                buttonBackground3.events.onInputOut.add(function(target){
                    //target.scale.setTo(0.8);

                },this);
          //  },this);
			//this.addQuestion(count);
		}, this);               

	},
    
    addSeventhWindMill:function()
	{
		 
		count++;	
		//adding windmill to the game.
        //var stick = this.add.sprite(this.world.centerX-205,this.world.centerY+20,'Level12A_stick');
		//stick.scale.setTo(1,1.2);
        
//		windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY-50,'Level12A_scene3wind1');		
//		windAnim1.scale.setTo(0.8);
//		windAnim1.anchor.setTo(0.5);			
//		windAnim1.animations.add('rotate');
        
        windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY,'Level12A_scene3wind1');
    	windAnim1.anchor.setTo(0.5,0.4);
        //windAnim1.scale.setTo(0.9);
		//windAnim1.animations.add('rotate');
        
		
		
		
		buttonBackground = this.add.button(this.world.centerX+210,this.world.centerY-100,'Level12A_scene2Btn1');
		buttonBackground.frame = 1;
		buttonBackground.scale.setTo(1);
		buttonBackground.anchor.setTo(0.5);
		
		/*buttonText = this.add.text(0, 0,'Level12A_  1/2  ');
		buttonText.anchor.set(0.5);
		buttonText.align = 'center';

		buttonText.font = 'Comic Sans MS';
		buttonText.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText.fill = '#FFFFFF';

		buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground.addChild(buttonText);*/
        
		
		buttonBackground2 = this.add.button(this.world.centerX+210,this.world.centerY+10,'Level12A_scene2Btn2');
		buttonBackground2.frame = 1;
		buttonBackground2.scale.setTo(1);
		buttonBackground2.anchor.setTo(0.5);
		
		/*buttonText2 = this.add.text(0, 0,'Level12A_  3/4  ');
		buttonText2.anchor.set(0.5);
		buttonText2.align = 'center';

		buttonText2.font = 'Comic Sans MS';
		buttonText2.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText2.fill = '#FFFFFF';

		buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground2.addChild(buttonText2);*/
      
		
		buttonBackground3 = this.add.button(this.world.centerX+210,this.world.centerY+120,'Level12A_scene2Btn3');
		buttonBackground3.frame = 1;
		buttonBackground3.scale.setTo(1);
		buttonBackground3.anchor.setTo(0.5);
		
		/*buttonText3 = this.add.text(0, 0,'Level12A_  1/4  ');
		buttonText3.anchor.set(0.5);
		buttonText3.align = 'center';

		buttonText3.font = 'Comic Sans MS';
		buttonText3.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText3.fill = '#FFFFFF';

		buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground3.addChild(buttonText3);*/
		
		
        /*var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-196;
		centerCircle.y = this.world.centerY-50;
		windAnim1.addChild(centerCircle);*/
        
        windmillGroup= this.add.group();
 
        //windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(buttonBackground);
        windmillGroup.add(buttonBackground2);
        windmillGroup.add(buttonBackground3);
        //windmillGroup.add(centerCircle);

        windmillGroup.x = 1400;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
           // this.time.events.add(4000,function(){
                buttonBackground.inputEnabled = true;
                buttonBackground.input.useHandCursor = true;
                buttonBackground2.inputEnabled = true;
                buttonBackground2.input.useHandCursor = true;
                buttonBackground3.inputEnabled = true;
                buttonBackground3.input.useHandCursor = true;

                buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
										var currentTime = window.timeSaveFunc();
											var interactEvent = 
											{ 
												id_game_play: window.gameid, 
												id_question: window.gameid,  
												date_time_event: currentTime, 
												event_type: "click", 
												res_id: target.name, 
												access_token: window.acctkn 
											} 
											
											//absdsjsapi.saveInteractEvent(interactEvent);
			
                                                              this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground.events.onInputOver.add(function(target){
                    //target.scale.setTo(0.9);

                },this);
                buttonBackground.events.onInputOut.add(function(target){
                    //target.scale.setTo(0.8);

                },this);

                buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
												var currentTime = window.timeSaveFunc();
													var interactEvent = 
													{ 
														id_game_play: window.gameid, 
														id_question: window.gameid,  
														date_time_event: currentTime, 
														event_type: "click", 
														res_id: target.name, 
														access_token: window.acctkn 
													} 
													
													//absdsjsapi.saveInteractEvent(interactEvent);
			
                                                              this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground2.events.onInputOver.add(function(target){
                    //target.scale.setTo(0.9);

                },this);
                buttonBackground2.events.onInputOut.add(function(target){
                    //target.scale.setTo(0.8);

                },this);

                buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
											var currentTime = window.timeSaveFunc();
												var interactEvent = 
												{ 
													id_game_play: window.gameid, 
													id_question: window.gameid,  
													date_time_event: currentTime, 
													event_type: "click", 
													res_id: target.name, 
													access_token: window.acctkn 
												} 
												
												//absdsjsapi.saveInteractEvent(interactEvent);
			
                                                              this.time.events.add(500, function(){this.correctAns();}, this);},this);
                buttonBackground3.events.onInputOver.add(function(target){
                    //target.scale.setTo(0.9);

                },this);
                buttonBackground3.events.onInputOut.add(function(target){
                    //target.scale.setTo(0.8);

                },this);
          //  },this);
			//this.addQuestion(count);
		}, this);               

	},
    
    addEighthWindMill:function()
	{
		 
		count++;	
		//adding windmill to the game.
        //var stick = this.add.sprite(this.world.centerX-205,this.world.centerY+20,'Level12A_stick');
		//stick.scale.setTo(1,1.2);
        
//		windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY-50,'Level12A_scene3wind2');		
//		windAnim1.scale.setTo(0.8);
//		windAnim1.anchor.setTo(0.5);			
//		windAnim1.animations.add('rotate');
        
        windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY,'Level12A_scene3wind2');
    	windAnim1.anchor.setTo(0.5,0.4);
        //windAnim1.scale.setTo(0.9);
		//windAnim1.animations.add('rotate');
       
		
		
		
		buttonBackground = this.add.button(this.world.centerX+210,this.world.centerY-100,'Level12A_scene2Btn1');
		buttonBackground.frame = 1;
		buttonBackground.scale.setTo(1);
		buttonBackground.anchor.setTo(0.5);
		
		/*buttonText = this.add.text(0, 0,'Level12A_  1/2  ');
		buttonText.anchor.set(0.5);
		buttonText.align = 'center';

		buttonText.font = 'Comic Sans MS';
		buttonText.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText.fill = '#FFFFFF';

		buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground.addChild(buttonText);*/
        
		
		buttonBackground2 = this.add.button(this.world.centerX+210,this.world.centerY+10,'Level12A_scene2Btn2');
		buttonBackground2.frame = 1;
		buttonBackground2.scale.setTo(1);
		buttonBackground2.anchor.setTo(0.5);
		
		/*buttonText2 = this.add.text(0, 0,'Level12A_  3/4  ');
		buttonText2.anchor.set(0.5);
		buttonText2.align = 'center';

		buttonText2.font = 'Comic Sans MS';
		buttonText2.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText2.fill = '#FFFFFF';

		buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground2.addChild(buttonText2);*/
      
		
		buttonBackground3 = this.add.button(this.world.centerX+210,this.world.centerY+120,'Level12A_scene2Btn3');
		buttonBackground3.frame = 1;
		buttonBackground3.scale.setTo(1);
		buttonBackground3.anchor.setTo(0.5);
		
		/*buttonText3 = this.add.text(0, 0,'Level12A_  1/4  ');
		buttonText3.anchor.set(0.5);
		buttonText3.align = 'center';

		buttonText3.font = 'Comic Sans MS';
		buttonText3.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText3.fill = '#FFFFFF';

		buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground3.addChild(buttonText3);*/
		
        
        /*var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-196;
		centerCircle.y = this.world.centerY-50;
		windAnim1.addChild(centerCircle);*/
        
        windmillGroup= this.add.group();
 
        //windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(buttonBackground);
        windmillGroup.add(buttonBackground2);
        windmillGroup.add(buttonBackground3);
       // windmillGroup.add(centerCircle);

        windmillGroup.x = 1400;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
            //this.time.events.add(4000,function(){
                buttonBackground.inputEnabled = true;
                buttonBackground.input.useHandCursor = true;
                buttonBackground2.inputEnabled = true;
                buttonBackground2.input.useHandCursor = true;
                buttonBackground3.inputEnabled = true;
                buttonBackground3.input.useHandCursor = true;

                buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
												var currentTime = window.timeSaveFunc();
													var interactEvent = 
													{ 
														id_game_play: window.gameid, 
														id_question: window.gameid,  
														date_time_event: currentTime, 
														event_type: "click", 
														res_id: target.name, 
														access_token: window.acctkn 
													} 
													
													//absdsjsapi.saveInteractEvent(interactEvent);
			
                                                              this.time.events.add(500, function(){this.correctAns();}, this);},this);
                buttonBackground.events.onInputOver.add(function(target){
                    //target.scale.setTo(0.9);

                },this);
                buttonBackground.events.onInputOut.add(function(target){
                    //target.scale.setTo(0.8);

                },this);

                buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
										var currentTime = window.timeSaveFunc();
											var interactEvent = 
											{ 
												id_game_play: window.gameid, 
												id_question: window.gameid,  
												date_time_event: currentTime, 
												event_type: "click", 
												res_id: target.name, 
												access_token: window.acctkn 
											} 
											
											//absdsjsapi.saveInteractEvent(interactEvent);
			
                                                              this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground2.events.onInputOver.add(function(target){
                    //target.scale.setTo(0.9);

                },this);
                buttonBackground2.events.onInputOut.add(function(target){
                    //target.scale.setTo(0.8);

                },this);

                buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
												var currentTime = window.timeSaveFunc();
													var interactEvent = 
													{ 
														id_game_play: window.gameid, 
														id_question: window.gameid,  
														date_time_event: currentTime, 
														event_type: "click", 
														res_id: target.name, 
														access_token: window.acctkn 
													} 
													
													//absdsjsapi.saveInteractEvent(interactEvent);
			
                                                              this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground3.events.onInputOver.add(function(target){
                    //target.scale.setTo(0.9);

                },this);
                buttonBackground3.events.onInputOut.add(function(target){
                    //target.scale.setTo(0.8);

                },this);
           // },this);
			//this.addQuestion(count);
		}, this);               

	},
    
    addNinethWindMill:function()
	{
		count++;		
		//adding windmill to the game.
        //var stick = this.add.sprite(this.world.centerX-205,this.world.centerY+20,'Level12A_stick');
		//stick.scale.setTo(1,1.2);
        
//		windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY-50,'Level12A_scene3wind3');		
//		windAnim1.scale.setTo(0.8);
//		windAnim1.anchor.setTo(0.5);			
//		windAnim1.animations.add('rotate');
        
        windAnim1 = this.add.sprite(this.world.centerX-200,this.world.centerY,'Level12A_scene3wind3');
    	windAnim1.anchor.setTo(0.5,0.4);
        //windAnim1.scale.setTo(0.9);
		//windAnim1.animations.add('rotate');
        
		
		
		buttonBackground = this.add.button(this.world.centerX+210,this.world.centerY-100,'Level12A_scene2Btn1');
		buttonBackground.frame = 1;
		buttonBackground.scale.setTo(1);
		buttonBackground.anchor.setTo(0.5);
		
		/*buttonText = this.add.text(0, 0,'Level12A_  1/2  ');
		buttonText.anchor.set(0.5);
		buttonText.align = 'center';

		buttonText.font = 'Comic Sans MS';
		buttonText.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText.fill = '#FFFFFF';

		buttonText.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground.addChild(buttonText);*/
        
		
		buttonBackground2 = this.add.button(this.world.centerX+210,this.world.centerY+10,'Level12A_scene2Btn2');
		buttonBackground2.frame = 1;
		buttonBackground2.scale.setTo(1);
		buttonBackground2.anchor.setTo(0.5);
		
		/*buttonText2 = this.add.text(0, 0,'Level12A_  3/4  ');
		buttonText2.anchor.set(0.5);
		buttonText2.align = 'center';

		buttonText2.font = 'Comic Sans MS';
		buttonText2.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText2.fill = '#FFFFFF';

		buttonText2.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground2.addChild(buttonText2);*/
      
		
		buttonBackground3 = this.add.button(this.world.centerX+210,this.world.centerY+120,'Level12A_scene2Btn3');
		buttonBackground3.frame = 1;
		buttonBackground3.scale.setTo(1);
		buttonBackground3.anchor.setTo(0.5);
		
		/*buttonText3 = this.add.text(0, 0,'Level12A_  1/4  ');
		buttonText3.anchor.set(0.5);
		buttonText3.align = 'center';

		buttonText3.font = 'Comic Sans MS';
		buttonText3.fontSize = 40;
		//text.fontWeight = 'bold';
		buttonText3.fill = '#FFFFFF';

		buttonText3.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		buttonBackground3.addChild(buttonText3);*/
		
        /*var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-196;
		centerCircle.y = this.world.centerY-50;
		windAnim1.addChild(centerCircle);*/
        
        windmillGroup= this.add.group();
 
       // windmillGroup.add(stick);
        windmillGroup.add(windAnim1);
        windmillGroup.add(buttonBackground);
        windmillGroup.add(buttonBackground2);
        windmillGroup.add(buttonBackground3);
       // windmillGroup.add(centerCircle);

        windmillGroup.x = 1400;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
          //  this.time.events.add(4000,function(){
                buttonBackground.inputEnabled = true;
                buttonBackground.input.useHandCursor = true;
                buttonBackground2.inputEnabled = true;
                buttonBackground2.input.useHandCursor = true;
                buttonBackground3.inputEnabled = true;
                buttonBackground3.input.useHandCursor = true;

                buttonBackground.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
				var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: window.gameid, 
						id_question: window.gameid,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name, 
						access_token: window.acctkn 
					} 
					
					//absdsjsapi.saveInteractEvent(interactEvent);
			
                                                              this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground.events.onInputOver.add(function(target){
                    //target.scale.setTo(0.9);

                },this);
                buttonBackground.events.onInputOut.add(function(target){
                    //target.scale.setTo(0.8);

                },this);

                buttonBackground2.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
								var currentTime = window.timeSaveFunc();
									var interactEvent = 
									{ 
										id_game_play: window.gameid, 
										id_question: window.gameid,  
										date_time_event: currentTime, 
										event_type: "click", 
										res_id: target.name, 
										access_token: window.acctkn 
									} 
									
									//absdsjsapi.saveInteractEvent(interactEvent);
			
                                                              this.time.events.add(500, function(){this.correctAns();}, this);},this);
                buttonBackground2.events.onInputOver.add(function(target){
                    //target.scale.setTo(0.9);

                },this);
                buttonBackground2.events.onInputOut.add(function(target){
                    //target.scale.setTo(0.8);

                },this);

                buttonBackground3.events.onInputDown.add(function(target){target.frame = 0;
                                                              ClickSound.play();
															  noofAttempts++;
					var currentTime = window.timeSaveFunc();
						var interactEvent = 
						{ 
							id_game_play: window.gameid, 
							id_question: window.gameid,  
							date_time_event: currentTime, 
							event_type: "click", 
							res_id: target.name, 
							access_token: window.acctkn 
						} 
						
						//absdsjsapi.saveInteractEvent(interactEvent);
			
                                                              this.time.events.add(500, function(){this.wrongAns(target);}, this);},this);
                buttonBackground3.events.onInputOver.add(function(target){
                    //target.scale.setTo(0.9);

                },this);
                buttonBackground3.events.onInputOut.add(function(target){
                    //target.scale.setTo(0.8);

                },this);
          //  },this);
			//this.addQuestion(count);
		}, this);               

	},
    
    getVoice:function(){
        switch(questionArray[count-1])
        {
            case 1:
            case 6:if(window.languageSelected=="English")
                        Eng_12B5.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12B5.play();
                    else
                        Kan_12B5.play();
                    break;
            case 5:
            case 9:if(window.languageSelected=="English")
                        Eng_12B1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12B1.play();
                    else
                        Kan_12B1.play();
                    break;
            case 2:
            case 3:
            case 4:
            case 7:if(window.languageSelected=="English")
                        Eng_12B3.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12B3.play();
                    else
                        Kan_12B3.play();
                    break;
            case 8:if(window.languageSelected=="English")
                        Eng_12B2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12B2.play();
                    else
                        Kan_12B2.play();
                    break;
            
        }
    }
};
