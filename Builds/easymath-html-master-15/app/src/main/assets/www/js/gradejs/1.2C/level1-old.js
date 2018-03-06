Game.grade1_2Clevel1=function(){};

var background;
var headingAnim;
var windAnim1,windAnim2,windAnim3,windAnim4,windAnim5,windAnim6,windAnim7,windAnim8,windAnim9,windAnim10,windAnim11,windAnim12,windAnim13,windAnim14,windAnim15,windAnim16;
var redpaint;
var yellowpaint;
var greenpaint;
var selectedColor = null;
var windmillGroup;
var blankCount = 0,redCount = 0, greenCount = 0, yellowCount=0;
var checkButton;
var resetButton;
var crayon,eraser;
var count;
var rightAnswer = false;
var circlegraphics,circlegraphics1;
var sample;
var dragStarted = false;
var pointerObj;
var _this = this;
var rect;
var wind1=true,wind2=true,wind3=true,wind4=true,wind5=true,wind6=true,wind7=true,wind8=true;
var lastRemoved = new Array();
var lastclicked = new Array();

var crayonFrame = 0;
var speakerBtn;

var noofAttempts;
var timer;
var AnsTimerCount;

Game.grade1_2Clevel1.prototype={
	create:function(game){
		
		noofAttempts=0;
		AnsTimerCount=0;
		
		questionArray = [1,2,3,4,5,6,7,8,9];
		questionArray = this.shuffle(questionArray);
		count = 0;
     
		this.physics.startSystem(Phaser.Physics.ARCADE);
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
      
       // background.scale.setTo(1.05,1.12);
        background = this.add.tileSprite(0,0,this.world.width,this.world.height,'Level12A_background');
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
			speakerBtn.inputEnabled = false;
			this.time.events.add(2000, function(){speakerBtn.inputEnabled = true;}, this);
		},this,1,0,2);     
		
		this.displayQuestion();

	},
	
	stopVoice:function(){
     Eng_12C1.stop();
     Hin_12C1.stop();
     Kan_12C1.stop();
     Eng_12C2.stop();
     Hin_12C2.stop();
     Kan_12C2.stop();
     Eng_12C3.stop();
     Hin_12C3.stop();
     Kan_12C3.stop();
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
		wind1=true;
		wind2=true;
		wind3=true;
		wind4=true;
		wind5=true;
		wind6=true;
		wind7=true;
		wind8=true;
		lastRemoved = new Array();
		switch(questionArray[count])
		{
			case 1: this.addFirstWindMill(); break;
			case 2: this.addFirstWindMill(); break;
			case 3: this.addFirstWindMill(); break;
			case 4: this.addSixthWindMill(); break;
			case 5: this.addSixthWindMill(); break;
			case 6: this.addSixthWindMill(); break;
			case 7: this.addSeventhWindMill(); break;
			case 8: this.addSeventhWindMill(); break;
			case 9: this.addSeventhWindMill(); break;
		
		}
		
	},
	
	update:function()
	{
		
		
		if(rightAnswer)
		{
			
			if(windAnim1!=null)
			{
				windAnim1.rotation-=0.1;
			}
			if(windAnim2!=null)
			{
				windAnim2.rotation-=0.1;
			}
			if(windAnim3!=null)
			{
				windAnim3.rotation-=0.1;
			}
			if(windAnim4!=null)
			{
				windAnim4.rotation-=0.1;
			}
			if(windAnim5!=null)
			{
				windAnim5.rotation-=0.1;
			}
			if(windAnim6!=null)
			{
				windAnim6.rotation-=0.1;
			}
			if(windAnim7!=null)
			{
				windAnim7.rotation-=0.1;
			}
			if(windAnim8!=null)
			{
				windAnim8.rotation-=0.1;
			}
			if(windAnim9!=null)
			{
				windAnim9.rotation-=0.1;
			}
			if(windAnim10!=null)
			{
				windAnim10.rotation-=0.1;
			}
			if(windAnim11!=null)
			{
				windAnim11.rotation-=0.1;
			}
			if(windAnim12!=null)
			{
				windAnim12.rotation-=0.1;
			}
			if(windAnim13!=null)
			{
				windAnim13.rotation-=0.1;
			}
			if(windAnim14!=null)
			{
				windAnim14.rotation-=0.1;
			}
			if(windAnim15!=null)
			{
				windAnim15.rotation-=0.1;
			}
			if(windAnim16!=null)
			{
				windAnim16.rotation-=0.1;
			}
		}
		
	},
	
	addEventListeners:function()
	{
        var timeforlang=0;
		crayon = this.add.sprite(this.world.centerX-250,this.world.centerY,'Level12A_pencil');
        crayon.anchor.setTo(0.5);
		
		eraser = this.add.sprite(this.world.centerX-350,this.world.centerY,'Level12A_eraser');
        eraser.anchor.setTo(0.5);
		
       // this.time.events.add(timeforlang,function(){
            //console.log("tienm"+timeforlang);
            crayon.inputEnabled = true;
		    crayon.input.useHandCursor = true;
            eraser.inputEnabled = true;
		    eraser.input.useHandCursor = true;
       // },this);
		
		crayon.name = "crayon";
		eraser.name = "eraser";
        
        crayon.frame = Math.floor(Math.random()*6);
        //crayon.frame = 2;
        crayonFrame = crayon.frame;
        
      //  //console.log(crayonFrame);
        
//        checkbtn = this.add.button(this.world.centerX+290,this.world.centerY,'Level12A_checkbtn',null,this,0,2,1);
//		checkbtn.scale.setTo(1);
//		checkbtn.anchor.setTo(0.5);
		
		circlegraphics = this.add.graphics(0, 0);


		circlegraphics.beginFill(0xFFFF00, 1);
    	circlegraphics.drawCircle(-50, -10, 10);
    	circlegraphics.x = 50;
    	circlegraphics.y = -50;
    	circlegraphics.alpha = 0;
		circlegraphics.name = "graphics";
		
		circlegraphics.boundsPadding = 0;
		
		
		crayon.addChild(circlegraphics);
		
		circlegraphics1 = this.add.graphics(0, 0);


		circlegraphics1.beginFill(0xFFFF00, 1);
    	circlegraphics1.drawCircle(-50, -10, 10);
    	circlegraphics1.x = 50;
    	circlegraphics1.y = -30;
    	circlegraphics1.alpha = 0;
		circlegraphics1.name = "graphics";
		
		circlegraphics1.boundsPadding = 0;
		
		
		eraser.addChild(circlegraphics1);
		
		
		
		
		crayon.events.onInputDown.add(function(target){
			
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
			
			absdsjsapi.saveInteractEvent(interactEvent);
			
			crayon.scale.setTo(0.5);
			crayon.angle = 400;
			//crayon.anchor.setTo(1);
			//crayon.x = this.world.centerX+100;
			//crayon.y = this.world.centerY;
			
			setTimeout(function(){	
			//crayon.input.enableDrag(true);
			
		}, 10);
			
			crayon.input.enableDrag(true);
			crayon.events.onDragStart.add(this.onDragStart, this);
    		crayon.events.onDragStop.add(this.onDragStop, this);
			
		}, this); 
		
		eraser.events.onInputDown.add(function(target){
			
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
			
			absdsjsapi.saveInteractEvent(interactEvent);
			
			eraser.scale.setTo(0.5);
			eraser.angle = 245;
			//crayon.anchor.setTo(1);
			//crayon.x = this.world.centerX+100;
			//crayon.y = this.world.centerY;
			
			setTimeout(function(){	
			//crayon.input.enableDrag(true);
			
		}, 10);
			eraser.input.enableDrag(true);
			eraser.events.onDragStart.add(this.onEraserDragStart, this);
    		eraser.events.onDragStop.add(this.onEraserDragStop, this);
			
		}, this);
		
		
		
		
		//this.input.addMoveCallback(this.moveCallback, this);
		
		
		//crayon.events.onInputDown.add(function(){ClickSound.play();selectedColor="red"}, this);
		//eraser.events.onInputDown.add(function(){ClickSound.play();selectedColor="eraser"}, this);
		/*redpaint.inputEnabled = true;
		yellowpaint.inputEnabled = true;
		greenpaint.inputEnabled = true;
		
		redpaint.input.useHandCursor = true;
		yellowpaint.input.useHandCursor = true;
		greenpaint.input.useHandCursor = true;
		
		redpaint.events.onInputDown.add(function(){ClickSound.play();selectedColor="red"}, this);
		yellowpaint.events.onInputDown.add(function(){ClickSound.play();selectedColor="yellow"}, this);
		greenpaint.events.onInputDown.add(function(){ClickSound.play();selectedColor="green"}, this);	*/	
		
		
		
		
	},
	
	checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

},
	
	
	
	onEraserDragStart:function(target)
	{
		var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);
		ClickSound.play();
		
	},
	onDragStart:function(target)
	{
		var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);
			
		
		dragStarted = true;
		wind1 = false;
		wind2 = false;
		wind3 = false;
		wind4 = false;
		wind5 = false;
		wind6 = false;
		wind7 = false;
		wind8 = false;
		ClickSound.play();
		
		for(var i=0;i<windmillGroup.children.length;i++)
		{
			if(windmillGroup.getByName("windAnim"+i))
				{
				
					if(windmillGroup.getByName("windAnim"+i).frame==0)
					{
						
						//windmillGroup.getByName("windAnim"+i).inputEnabled = false;
						
						
					}
					else{
						dragStarted = false;
						
						
			
					
					if(windmillGroup.getByName("windAnim"+i).name == "windAnim1")
							{
								wind2 = true;
								wind4 = true;	
							}
							else if(windmillGroup.getByName("windAnim"+i).name == "windAnim2")
							{
								wind1 = true;
								wind3 = true;		
							}
							else if(windmillGroup.getByName("windAnim"+i).name == "windAnim3")
							{
								wind2 = true;
								wind4 = true;		
							}
							else if(windmillGroup.getByName("windAnim"+i).name == "windAnim4")
							{
								
								wind3 = true;	
								wind1 = true;	
								
							}
							else if(windmillGroup.getByName("windAnim"+i).name == "windAnim5")
							{
								wind4 = true;
								wind6 = true;		
							}
							else if(windmillGroup.getByName("windAnim"+i).name == "windAnim6")
							{
								wind5 = true;
								wind7 = true;		
							}
							else if(windmillGroup.getByName("windAnim"+i).name == "windAnim7")
							{
								wind6 = true;
								wind8 = true;		
							}
							else if(windmillGroup.getByName("windAnim"+i).name == "windAnim8")
							{
								wind7 = true;
								wind1 = true;		
							}
						
					}
				}
		}
		if(dragStarted)
			{
				wind1 = true;
				wind2 = true;
				wind3 = true;
				wind4 = true;
				wind5 = true;
				wind6 = true;
				wind7 = true;
				wind8 = true;
			}
		else{
				
					
		
		}
			/*		else
					{
						
						
						if(questionArray[count]==1||questionArray[count]==2||questionArray[count]==3||questionArray[count]==7||questionArray[count]==8||questionArray[count]==9)
						{
							if(windmillGroup.getByName("windAnim"+i).name=="windAnim1")
							{
								wind1 = true;
								wind2 = true;
								//wind3 = false;
								wind4 = true;
							}
							else if(windmillGroup.getByName("windAnim"+i).name=="windAnim2")
							{
								wind1 = true;
								wind2 = true;
								wind3 = true;
								//wind4 = false;
							}
							else if(windmillGroup.getByName("windAnim"+i).name=="windAnim3")
							{
								//wind1 = false;
								wind2 = true;
								wind3 = true;
								wind4 = true;
							}
							else if(windmillGroup.getByName("windAnim"+i).name=="windAnim4")
							{
								wind1 = true;
								//wind2 = false;
								wind3 = true;
								wind4 = true;
							}
						}
					}
				}
		}*/
		
	},
	
	timer:function()
	{
		if(this.input.pointer1.targetObject!=null)
			{
				
				if(this.input.pointer1.targetObject.sprite.name=="windAnim1")
					windAnim1.frame = 1;
				else if(this.input.pointer1.targetObject.sprite.name=="windAnim2")
					windAnim2.frame = 1;
				else if(this.input.pointer1.targetObject.sprite.name=="windAnim3")
					windAnim3.frame = 1;
				else if(this.input.pointer1.targetObject.sprite.name=="windAnim4")
					windAnim4.frame = 1;
				else if(this.input.pointer1.targetObject.sprite.name=="windAnim5")
					windAnim5.frame = 1;
				else if(this.input.pointer1.targetObject.sprite.name=="windAnim6")
					windAnim6.frame = 1;
				else if(this.input.pointer1.targetObject.sprite.name=="windAnim7")
					windAnim7.frame = 1;
				else if(this.input.pointer1.targetObject.sprite.name=="windAnim8")
					windAnim8.frame = 1;
				
				crayon.visible = true;
				checkButton.visible = true;
			}
		else
			{
				crayon.visible = true;
			}
		//alert(this.input.pointer1.targetObject);
	},
	
	timer2:function()
	{
		
		if(this.input.touchPointer.targetObject!=null)
			{
				
				if(this.input.touchPointer.targetObject.sprite.name=="windAnim1")
					windAnim1.frame = 0;
				else if(this.input.touchPointer.targetObject.sprite.name=="windAnim2")
					windAnim2.frame = 0;
				else if(this.input.touchPointer.targetObject.sprite.name=="windAnim3")
					windAnim3.frame = 0;
				else if(this.input.touchPointer.targetObject.sprite.name=="windAnim4")
					windAnim4.frame = 0;
				else if(this.input.touchPointer.targetObject.sprite.name=="windAnim5")
					windAnim5.frame = 0;
				else if(this.input.touchPointer.targetObject.sprite.name=="windAnim6")
					windAnim6.frame = 0;
				else if(this.input.touchPointer.targetObject.sprite.name=="windAnim7")
					windAnim7.frame = 0;
				else if(this.input.touchPointer.targetObject.sprite.name=="windAnim8")
					windAnim8.frame = 0;
				
				eraser.visible = true;
			}
		else
			{
				eraser.visible = true;
			}
	},
	
	onDragStop:function(target)
	{
			var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);
		dragStarted = false;
        
        //additional
        wind1 = true;
        wind2 = true;
        wind3 = true;
        wind4 = true;
        wind5 = true;
        wind6 = true;
        wind7 = true;
        wind8 = true;
		
		snapSound.play();
		crayon.x = this.world.centerX-250;
		crayon.y = this.world.centerY;
        crayon.scale.setTo(1);
        crayon.anchor.setTo(0.5);
		crayon.angle = 0;
		
		eraser.x = this.world.centerX-350;
		eraser.y = this.world.centerY-0;
        eraser.scale.setTo(1);
        eraser.anchor.setTo(0.5);
		eraser.angle = 0;
		
	
		if((windAnim1!=null||windAnim1!=undefined)&&wind1)
		{
			for(var i=0;i<windAnim1.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim1.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim1.getChildAt(i)))
				{
					if(target.name=="crayon")
					{
						windAnim1.frame = crayonFrame+1;
					
						checkButton.visible = true;
						break;
					}
					else
					{
						windAnim1.frame = 0;
						
					}
				}
			}
		}
		if((windAnim2!=null||windAnim2!=undefined)&&wind2)
		{
			for(var i=0;i<windAnim2.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim2.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim2.getChildAt(i)))
				{
					if(target.name=="crayon")
					{
						windAnim2.frame = crayonFrame+1;
						
						checkButton.visible = true;
						break;
					}
				}
			}
		}
		if((windAnim3!=null||windAnim3!=undefined)&&wind3)
		{
			for(var i=0;i<windAnim3.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim3.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim3.getChildAt(i)))
				{
					if(target.name=="crayon")
					{
						windAnim3.frame = crayonFrame+1;
						
						checkButton.visible = true;
						break;
					}
				}
			}
		}
		if((windAnim4!=null||windAnim4!=undefined)&&wind4)
		{
			for(var i=0;i<windAnim4.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim4.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim4.getChildAt(i)))
				{
					if(target.name=="crayon")
					{
						windAnim4.frame = crayonFrame+1;
						checkButton.visible = true;
						break;
					}
				}
			}
		}
		if((windAnim5!=null||windAnim5!=undefined)&&wind5)
		{
			for(var i=0;i<windAnim5.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim5.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim5.getChildAt(i)))
				{
					if(target.name=="crayon")
					{
						windAnim5.frame = crayonFrame+1;
						checkButton.visible = true;
						break;
					}
				}
			}
		}
		if((windAnim6!=null||windAnim6!=undefined)&&wind6)
		{
			for(var i=0;i<windAnim6.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim6.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim6.getChildAt(i)))
				{
					if(target.name=="crayon")
					{
						windAnim6.frame = crayonFrame+1;
						
						
						checkButton.visible = true;
						break;
					}
				}
			}
		}
		if((windAnim7!=null||windAnim7!=undefined)&&wind7)
		{
			
			for(var i=0;i<windAnim7.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim7.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim7.getChildAt(i)))
				{
					if(target.name=="crayon")
					{
						windAnim7.frame = crayonFrame+1;
						
						checkButton.visible = true;
						break;
					}
				}
			}
		}
		if((windAnim8!=null||windAnim8!=undefined)&&wind8)
		{
			for(var i=0;i<windAnim8.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim8.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim8.getChildAt(i)))
				{
					if(target.name=="crayon")
					{
						windAnim8.frame = crayonFrame+1;
						checkButton.visible = true;
						break;
					}
				}
			}
		}
		 this.time.events.add(10, this.timer, this);
		
		
	},
	
	onEraserDragStop:function(target)
	{
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
			
			absdsjsapi.saveInteractEvent(interactEvent);
		crayon.x = this.world.centerX-250;
		crayon.y = this.world.centerY;
        crayon.scale.setTo(1);
        crayon.anchor.setTo(0.5);
		crayon.angle = 0;
		
		eraser.x = this.world.centerX-350;
		eraser.y = this.world.centerY-0;
        eraser.scale.setTo(1);
        eraser.anchor.setTo(0.5);
		eraser.angle = 0;
		snapSound.play();
		
		if((windAnim1!=null||windAnim1!=undefined))
		{
			for(var i=0;i<windAnim1.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim1.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim1.getChildAt(i)))
				{
					if(target.name=="eraser")
					{
						
						
						windAnim1.frame = 0;
					}
				}
			}
		}
		if((windAnim2!=null||windAnim2!=undefined))
		{
			for(var i=0;i<windAnim2.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim2.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim2.getChildAt(i)))
				{
					if(target.name=="eraser")
					{
						windAnim2.frame = 0;
						
					}
				}
				
			}
		}
		if((windAnim3!=null||windAnim3!=undefined))
		{
			for(var i=0;i<windAnim3.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim3.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim3.getChildAt(i)))
				{
					if(target.name=="eraser")
					{
						windAnim3.frame = 0;
					}
					
				}
			}
		}
		if((windAnim4!=null||windAnim4!=undefined))
		{
			for(var i=0;i<windAnim4.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim4.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim4.getChildAt(i)))
				{
					if(target.name=="eraser")
					{
						windAnim4.frame = 0;
					}
					
				}
			}
		}
		if((windAnim5!=null||windAnim5!=undefined))
		{
			for(var i=0;i<windAnim5.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim5.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim5.getChildAt(i)))
				{
					if(target.name=="eraser")
					{
						windAnim5.frame = 0;
					}
				}
			}
		}
		if((windAnim6!=null||windAnim6!=undefined))
		{
			for(var i=0;i<windAnim6.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim6.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim6.getChildAt(i)))
				{
					if(target.name=="eraser")
					{
						windAnim6.frame = 0;
						
					}
				}
			}
		}
		if((windAnim7!=null||windAnim7!=undefined))
		{
			
			for(var i=0;i<windAnim7.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim7.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim7.getChildAt(i)))
				{
					if(target.name=="eraser")
					{
						windAnim7.frame = 0;
					}
				}
			}
		}
		if((windAnim8!=null||windAnim8!=undefined))
		{
			for(var i=0;i<windAnim8.children.length;i++)
			{
				if (this.checkOverlap(circlegraphics, windAnim8.getChildAt(i))||this.checkOverlap(circlegraphics1, windAnim8.getChildAt(i)))
				{
					if(target.name=="eraser")
					{
						windAnim8.frame = 0;
					}
				}
			}
		}
		
		
	},
		
	checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
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
			case 1:text.setText(selctedLang.lastSceneQuestion1);break;
			case 2:text.setText(selctedLang.lastSceneQuestion2);break;
			case 3:text.setText(selctedLang.lastSceneQuestion3);break;
			case 4:text.setText(selctedLang.lastSceneQuestion1);break;
			case 5:text.setText(selctedLang.lastSceneQuestion2);break;
			case 6:text.setText(selctedLang.lastSceneQuestion3);break;
			case 7:text.setText(selctedLang.lastSceneQuestion1);break;
			case 8:text.setText(selctedLang.lastSceneQuestion2);break;
			case 9:text.setText(selctedLang.lastSceneQuestion3);break;
				
		}
        
		var tween = this.add.tween(questionBackground);
		tween.to({ y: 490 }, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			this.addEventListeners();
		}, this);


	},
	
	correctAns:function()
	{
		if(timer)
		{
			timer.stop();
			timer = null;
		}
		
		noofAttempts++;
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
		absdsjsapi.saveAssessment(saveAsment);
		
		//rightAnswer = true;
       // windAnim1.animations.play('rotate',60,true);
        speakerBtn.inputEnabled=false;
        
       for(var i=0;i<windmillGroup.children.length;i++)
        {
           // //console.log("for");
             if(windmillGroup.getChildAt(i).frame!=0)
                 {
                   //  //console.log("if"+questionArray[count-1]);
                    if(questionArray[count-1]==1||questionArray[count-1]==2||questionArray[count-1]==3)
                    {
                        if(windmillGroup.getChildAt(i).name == "windAnim1")
                        {
                            var tween = this.add.tween(windmillGroup.getChildAt(i));
                            tween.to({ y: windmillGroup.getChildAt(i).y-20}, 100,'Linear', true, 100);
                            tween.onComplete.add(function(target){
                                //this.addQuestion(count);
                                // this.addEventListeners();
                            var tween2 = this.add.tween(target);
                            tween2.to({ y: target.y+20}, 100,'Linear', true, 100);
                            }, this);
                        }
                        else if(windmillGroup.getChildAt(i).name == "windAnim2")
                        {
                            var tween = this.add.tween(windmillGroup.getChildAt(i));
                            tween.to({ x: windmillGroup.getChildAt(i).x+20}, 100,'Linear', true, 100);
                            tween.onComplete.add(function(target){
                                //this.addQuestion(count);
                                // this.addEventListeners();
                            var tween2 = this.add.tween(target);
                            tween2.to({ x: target.x-20}, 100,'Linear', true, 100);
                            }, this);
                        }
                        else if(windmillGroup.getChildAt(i).name == "windAnim3")
                        {
                            var tween = this.add.tween(windmillGroup.getChildAt(i));
                            tween.to({ y: windmillGroup.getChildAt(i).y+20}, 100,'Linear', true, 100);
                            tween.onComplete.add(function(target){
                                //this.addQuestion(count);
                                // this.addEventListeners();
                            var tween2 = this.add.tween(target);
                            tween2.to({ y: target.y-20}, 100,'Linear', true, 100);
                            }, this);
                        } 
                        else if(windmillGroup.getChildAt(i).name == "windAnim4")
                        {
                            var tween = this.add.tween(windmillGroup.getChildAt(i));
                            tween.to({ x: windmillGroup.getChildAt(i).x-20}, 100,'Linear', true, 100);
                            tween.onComplete.add(function(target){
                                //this.addQuestion(count);
                                // this.addEventListeners();
                            var tween2 = this.add.tween(target);
                            tween2.to({ x: target.x+20}, 100,'Linear', true, 100);
                            }, this);
                        }
                    }
                 }
            
            
            
                if(windmillGroup.getChildAt(i).frame!=0)
                 {
                     //console.log("if"+questionArray[count-1]);
                    if(questionArray[count-1]==4||questionArray[count-1]==5||questionArray[count-1]==6)
                    {
                        if(windmillGroup.getChildAt(i).name == "windAnim1")
                        {
                            var tween = this.add.tween(windmillGroup.getChildAt(i));
                            tween.to({ x: windmillGroup.getChildAt(i).x+20}, 100,'Linear', true, 100);
                            tween.onComplete.add(function(target){
                                //this.addQuestion(count);
                                // this.addEventListeners();
                            var tween2 = this.add.tween(target);
                            tween2.to({ x: target.x-20}, 100,'Linear', true, 100);
                            }, this);
                        }
                        else if(windmillGroup.getChildAt(i).name == "windAnim2")
                        {
                            var tween = this.add.tween(windmillGroup.getChildAt(i));
                            tween.to({ y: windmillGroup.getChildAt(i).y+20}, 100,'Linear', true, 100);
                            tween.onComplete.add(function(target){
                                //this.addQuestion(count);
                                // this.addEventListeners();
                            var tween2 = this.add.tween(target);
                            tween2.to({ y: target.y-20}, 100,'Linear', true, 100);
                            }, this);
                        }
                        else if(windmillGroup.getChildAt(i).name == "windAnim3")
                        {
                            var tween = this.add.tween(windmillGroup.getChildAt(i));
                            tween.to({ x: windmillGroup.getChildAt(i).x-20}, 100,'Linear', true, 100);
                            tween.onComplete.add(function(target){
                                //this.addQuestion(count);
                                // this.addEventListeners();
                            var tween2 = this.add.tween(target);
                            tween2.to({ x: target.x+20}, 100,'Linear', true, 100);
                            }, this);
                        } 
                        else if(windmillGroup.getChildAt(i).name == "windAnim4")
                        {
                            var tween = this.add.tween(windmillGroup.getChildAt(i));
                            tween.to({ y: windmillGroup.getChildAt(i).y-20}, 100,'Linear', true, 100);
                            tween.onComplete.add(function(target){
                                //this.addQuestion(count);
                                // this.addEventListeners();
                            var tween2 = this.add.tween(target);
                            tween2.to({ y: target.y+20}, 100,'Linear', true, 100);
                            }, this);
                        }
                    }
                 }
            
            
                if(windmillGroup.getChildAt(i).frame!=0)
                 {
                     //console.log("if"+questionArray[count-1]);
                    if(questionArray[count-1]==7||questionArray[count-1]==8||questionArray[count-1]==9)
                    {
                        if(windmillGroup.getChildAt(i).name == "windAnim1")
                        {
                            var tween = this.add.tween(windmillGroup.getChildAt(i));
                            tween.to({ x: windmillGroup.getChildAt(i).x+20,y: windmillGroup.getChildAt(i).y+20}, 100,'Linear', true, 100);
                            tween.onComplete.add(function(target){
                                //this.addQuestion(count);
                                // this.addEventListeners();
                            var tween2 = this.add.tween(target);
                            tween2.to({ x: target.x-20,y: target.y-20}, 100,'Linear', true, 100);
                            }, this);
                        }
                        else if(windmillGroup.getChildAt(i).name == "windAnim2")
                        {
                            var tween = this.add.tween(windmillGroup.getChildAt(i));
                            tween.to({ x: windmillGroup.getChildAt(i).x-20,y: windmillGroup.getChildAt(i).y+20}, 100,'Linear', true, 100);
                            tween.onComplete.add(function(target){
                                //this.addQuestion(count);
                                // this.addEventListeners();
                            var tween2 = this.add.tween(target);
                            tween2.to({ x: target.x+20,y: target.y-20}, 100,'Linear', true, 100);
                            }, this);
                        }
                        else if(windmillGroup.getChildAt(i).name == "windAnim3")
                        {
                            var tween = this.add.tween(windmillGroup.getChildAt(i));
                            tween.to({ x: windmillGroup.getChildAt(i).x-20,y: windmillGroup.getChildAt(i).y-20}, 100,'Linear', true, 100);
                            tween.onComplete.add(function(target){
                                //this.addQuestion(count);
                                // this.addEventListeners();
                            var tween2 = this.add.tween(target);
                            tween2.to({ x: target.x+20,y: target.y+20}, 100,'Linear', true, 100);
                            }, this);
                        } 
                        else if(windmillGroup.getChildAt(i).name == "windAnim4")
                        {
                            var tween = this.add.tween(windmillGroup.getChildAt(i));
                            tween.to({ x: windmillGroup.getChildAt(i).x+20,y: windmillGroup.getChildAt(i).y-20}, 100,'Linear', true, 100);
                            tween.onComplete.add(function(target){
                                //this.addQuestion(count);
                                // this.addEventListeners();
                            var tween2 = this.add.tween(target);
                            tween2.to({ x: target.x-20,y: target.y+20}, 100,'Linear', true, 100);
                            }, this);
                        }
                    }
                 }
        }
        
        
        this.time.events.add(500, function(){spin2.play();rightAnswer = true;}, this);
        
        
        
		this.disableListeners();
		//score+=10;
		//scoretext.setText(selctedLang.score+' : '+score);
		
		var starAnim = starsGroup.getChildAt(count-1);
		
		starAnim.smoothed = false;
    	var anim = starAnim.animations.add('star');
		anim.play();
		
		
		celebr.play();
		checkButton.visible = false;
		//resetButton.visible = false;
        this.time.events.add(3000, this.tweenAndDestroy, this);
		
	},
    
    disableListeners:function()
	{
		if(windAnim1!=null||windAnim1!=undefined)
			{
				windAnim1.events.onInputDown.removeAll();
			}
			if(windAnim2!=null||windAnim2!=undefined)
			{
				windAnim2.events.onInputDown.removeAll();
			}
			if(windAnim3!=null||windAnim3!=undefined)
			{
				windAnim3.events.onInputDown.removeAll();
			}
			if(windAnim4!=null||windAnim4!=undefined)
			{
				windAnim4.events.onInputDown.removeAll();
			}
			if(windAnim5!=null||windAnim5!=undefined)
			{
				windAnim5.events.onInputDown.removeAll();
			}
			if(windAnim6!=null||windAnim6!=undefined)
			{
				windAnim6.events.onInputDown.removeAll();
			}
			if(windAnim7!=null||windAnim7!=undefined)
			{
				windAnim7.events.onInputDown.removeAll();
			}
			if(windAnim8!=null||windAnim8!=undefined)
			{
				windAnim8.events.onInputDown.removeAll();
			}
			if(windAnim9!=null||windAnim9!=undefined)
			{
				windAnim9.events.onInputDown.removeAll();
			}
			if(windAnim10!=null||windAnim10!=undefined)
			{
				windAnim10.events.onInputDown.removeAll();
			}
			if(windAnim11!=null||windAnim11!=undefined)
			{
				windAnim11.events.onInputDown.removeAll();
			}
			if(windAnim12!=null||windAnim12!=undefined)
			{
				windAnim12.events.onInputDown.removeAll();
			}
			if(windAnim13!=null||windAnim13!=undefined)
			{
				windAnim13.events.onInputDown.removeAll();
			}
			if(windAnim14!=null||windAnim14!=undefined)
			{
				windAnim14.events.onInputDown.removeAll();
			}
			if(windAnim15!=null||windAnim15!=undefined)
			{
				windAnim15.events.onInputDown.removeAll();
			}
			if(windAnim16!=null||windAnim16!=undefined)
			{
				windAnim16.events.onInputDown.removeAll();
			}
	},
	
    wrongAns:function()
	{
		noofAttempts++;
		//score-=5;
		//scoretext.setText(selctedLang.score+' : '+score);
		checkButton.frame = 1;
		//ClickSound.play();
		waudio.play();
		shake.shake(10,windmillGroup);
		
	},
    
    tweenAndDestroy:function()
    {
        rightAnswer = false;
        var tween = this.add.tween(windmillGroup);
        
        var tween2 = this.add.tween(crayon);
        tween2.to({ x: -300}, 0,'Linear', true, 0);
		tween2.onComplete.add(function(){
			//this.removeCelebration();
        }, this);
        
        var tween3 = this.add.tween(eraser);
        tween3.to({ x: -300}, 0,'Linear', true, 0);
		tween3.onComplete.add(function(){
			//this.removeCelebration();
        }, this);
		
		tween.to({ x: -500}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
			this.removeCelebration();
        }, this);
        
        
    },
    
    removeCelebration:function()
	{
        spin2.stop();
		rightAnswer = false;
		//windAnim1.animations.stop('rotate');
        //questionBackground.destroy();
		 windmillGroup.destroy();
		crayon.destroy();
		eraser.destroy();
        
         if(count<6)
            {
                this.displayQuestion();
            }
            else
            {
               
				this.state.start('grade1_2CScore');
            }
        
        
      //  var tween = this.add.tween(windmillGroup);
		
	//	tween.to({ x: -200}, 0,'Linear', true, 0);
	//	tween.onComplete.add(function(){
			//this.addQuestion(count);
           
           
           
		//}, this); 
	},
	
	checkAns:function()
	{
		
		for(var i=1;i<=windmillGroup.total;i++)
		{
			if(windmillGroup.getByName('windAnim'+i))
			{
				if(windmillGroup.getByName('windAnim'+i).frame == 0)
				{
					blankCount++;
				}
				else if(windmillGroup.getByName('windAnim'+i).frame == 1)
				{
					redCount++;
				}
				else if(windmillGroup.getByName('windAnim'+i).frame == 2)
				{
					yellowCount++;
				}
				else if(windmillGroup.getByName('windAnim'+i).frame == 3)
				{
					greenCount++;
				}
			}
		}
		
		
		switch(questionArray[count-1])
		{
			case 1 : 
				if(blankCount==3)
				{
					this.correctAns();
				}
				else
				{
					this.wrongAns();
				}
				break;
			case 2 :
				if(blankCount==2)
				{
					this.correctAns();
				}
				else
				{
					this.wrongAns();
				}
				break;
			case 3 :
				if(blankCount==1)
				{
					this.correctAns();
				}
				else
				{
					this.wrongAns();
				}
				break;
			case 4 :
				if(blankCount==3)
				{
					this.correctAns();
				}
				else
				{
					this.wrongAns();
				}
				break;
			case 5 :
				if(blankCount==2)
				{
					this.correctAns();
				}
				else
				{
					this.wrongAns();
				}
				break;
			case 6 :
				if(blankCount==1)
				{
					this.correctAns();
				}
				else
				{
					this.wrongAns();
				}
				break;
			case 7 :
				if(blankCount==3)
				{
					this.correctAns();
				}
				else
				{
					this.wrongAns();
				}
				break;
			case 8 :
				if(blankCount==2)
				{
					this.correctAns();
				}
				else
				{
					this.wrongAns();
				}
				break;
			case 9 :
				if(blankCount==1)
				{
					this.correctAns();
				}
				else
				{
					this.wrongAns();
				}
				break;
					
		}
		
		blankCount=0;
		redCount=0;
		yellowCount=0;
		greenCount=0;
		
	},
	
	resetAll:function()
	{
		for(var i=1;i<=windmillGroup.total;i++)
		{
			if(windmillGroup.getByName('windAnim'+i))
			{
				windmillGroup.getByName('windAnim'+i).frame = 0;
			}
		}
	},
	
	addFirstWindMill:function()
	{
		count++;
        var stick = this.add.sprite(this.world.centerX,this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
		
		selectedColor = null;
		
        checkButton = this.add.sprite(this.world.centerX+290,this.world.centerY,'Level12A_checkbtn');
		checkButton.frame = 1;
		checkButton.scale.setTo(1);
		checkButton.anchor.setTo(0.5);
		
		
//		var checktext = this.add.text(0, 0, selctedLang.check);
//		checktext.anchor.set(0.5);
//		checktext.align = 'center';
//
//		checktext.font = 'Comic Sans MS';
//		checktext.fontSize = 30;
//		//text.fontWeight = 'bold';
//		checktext.fill = '#FFFFFF';
//
//		checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
//		checkButton.addChild(checktext);
		checkButton.inputEnabled = true;
		checkButton.input.useHandCursor = true;
		
		checkButton.events.onInputDown.add(function(){checkButton.frame = 0;
                                                      ClickSound.play();
                                                      this.time.events.add(500, function(){this.checkAns();}, this);},this);
		
		checkButton.visible = false;
		
				
		//adding windmill to the game.
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind1');
		windAnim1.anchor.setTo(0,1);
		//windAnim1.scale.setTo(0.9);
		windAnim1.angle = -45;
		windAnim1.name = 'windAnim1';
		windAnim1.x = this.world.centerX+0;
		windAnim1.y = this.world.centerY-0;
		windAnim1.inputEnabled = true;
		windAnim1.input.useHandCursor = true;
		
		
		wronggraphics1 = this.add.graphics(180, 100);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,50,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim1.addChild(wronggraphics1);
		
		wronggraphics2 = this.add.graphics(180, 100);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,80,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;
		
		windAnim1.addChild(wronggraphics2);
		
		wronggraphics3 = this.add.graphics(180, 100);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);
		wronggraphics3.drawRect(-180,-170,80,50);
		wronggraphics3.boundsPadding = 0;
		wronggraphics3.alpha=0;
		
		windAnim1.addChild(wronggraphics3);
		
       // wronggraphics1.alpha =0;
		
		windAnim2 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind1');
		windAnim2.anchor.setTo(0,1);
		//windAnim2.scale.setTo(0.9);
		windAnim2.angle = 45;
		windAnim2.name = 'windAnim2';
		windAnim2.x = this.world.centerX+0;
		windAnim2.y = this.world.centerY-0;
		windAnim2.inputEnabled = true;
		windAnim2.input.useHandCursor = true;
	
		
		
		wronggraphics1 = this.add.graphics(180, 100);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,50,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim2.addChild(wronggraphics1);
		
		wronggraphics2 = this.add.graphics(180, 100);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,80,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;
		
		windAnim2.addChild(wronggraphics2);
		
		wronggraphics3 = this.add.graphics(180, 100);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);
		wronggraphics3.drawRect(-180,-170,80,50);
		wronggraphics3.boundsPadding = 0;
		wronggraphics3.alpha=0;
		
		windAnim2.addChild(wronggraphics3);
        
        windAnim3 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind1');
		windAnim3.anchor.setTo(0,1);
		//windAnim3.scale.setTo(0.9);
		windAnim3.angle = 135;
		windAnim3.name = 'windAnim3';
		windAnim3.x = this.world.centerX-0;
		windAnim3.y = this.world.centerY-0; 
		windAnim3.inputEnabled = true;
		windAnim3.input.useHandCursor = true;
		
		
		wronggraphics1 = this.add.graphics(180, 100);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,50,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim3.addChild(wronggraphics1);
		
		wronggraphics2 = this.add.graphics(180, 100);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,80,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;
		
		windAnim3.addChild(wronggraphics2);
		
		wronggraphics3 = this.add.graphics(180, 100);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);
		wronggraphics3.drawRect(-180,-170,80,50);
		wronggraphics3.boundsPadding = 0;
		wronggraphics3.alpha=0;
		
		windAnim3.addChild(wronggraphics3);
        
        
        windAnim4 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind1');
		windAnim4.anchor.setTo(0,1);
		//windAnim4.scale.setTo(0.9);
		windAnim4.angle = 225;
		windAnim4.name = 'windAnim4';
		windAnim4.x = this.world.centerX+0;
		windAnim4.y = this.world.centerY-0;
		windAnim4.inputEnabled = true;
		windAnim4.input.useHandCursor = true;
		
		
		wronggraphics1 = this.add.graphics(180, 100);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,50,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim4.addChild(wronggraphics1);
		
		wronggraphics2 = this.add.graphics(180, 100);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,80,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;
		
		windAnim4.addChild(wronggraphics2);
		
		wronggraphics3 = this.add.graphics(180, 100);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);
		wronggraphics3.drawRect(-180,-170,80,50);
		wronggraphics3.boundsPadding = 0;
		wronggraphics3.alpha=0;
		
		windAnim4.addChild(wronggraphics3);
        
        var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-0;
		centerCircle.y = this.world.centerY-0;
		
        
		windmillGroup= this.add.group();
	    windmillGroup.add(stick);
		windmillGroup.add(windAnim1);
		windmillGroup.add(windAnim2);
		windmillGroup.add(windAnim3);
		windmillGroup.add(windAnim4);
		windmillGroup.add(centerCircle);
		   

        windmillGroup.x = 1400;
        //windmillGroup.y = 10;
        
		this.getVoice();
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
            
			//this.addQuestion(count);
                  this.addEventListeners();
		}, this);  
		

	},
	
	addSecondWindMill:function()
	{
		count++;
        var stick = this.add.sprite(this.world.centerX,this.world.centerY-40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
		
		selectedColor = null;
		
		checkButton = this.add.sprite(this.world.centerX,this.world.centerY+120,'Level12A_scene2Btn');
		checkButton.scale.setTo(0.8);
		checkButton.anchor.setTo(0.5);
		
		var checktext = this.add.text(0, 0, selctedLang.check);
		checktext.anchor.set(0.5);
		checktext.align = 'center';

		checktext.font = 'Comic Sans MS';
		checktext.fontSize = 40;
		//text.fontWeight = 'bold';
		checktext.fill = '#FFFFFF';

		checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		checkButton.addChild(checktext);
		checkButton.inputEnabled = true;
		checkButton.input.useHandCursor = true;
		
		checkButton.events.onInputDown.add(function(){checkButton.frame = 0;
                                                      ClickSound.play();
                                                      this.time.events.add(500, function(){this.checkAns();}, this);},this);
		
		checkButton.visible = false;
		
				
		//adding windmill to the game.
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind2','Level12A_Symbol 68 instance 10000');
		windAnim1.anchor.setTo(1,1);
		windAnim1.angle = -45;
		windAnim1.name = 'windAnim1';
		windAnim1.x = this.world.centerX+10;
		windAnim1.y = this.world.centerY-30;
		windAnim1.inputEnabled = true;
		windAnim1.input.useHandCursor = true;
		windAnim1.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				if(target.frame==0)
				{
				switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
		
		windAnim2 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind2','Level12A_Symbol 68 instance 10000');
		windAnim2.anchor.setTo(1,1);
		windAnim2.angle = 45;
		windAnim2.name = 'windAnim2';
		windAnim2.x = this.world.centerX+0;
		windAnim2.y = this.world.centerY-30;
		windAnim2.inputEnabled = true;
		windAnim2.input.useHandCursor = true;
		windAnim2.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				if(target.frame==0)
				{
				switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
        
        windAnim3 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind2','Level12A_Symbol 68 instance 10000');
		windAnim3.anchor.setTo(1,1);
		windAnim3.angle = 135;
		windAnim3.name = 'windAnim3';
		windAnim3.x = this.world.centerX-8;
		windAnim3.y = this.world.centerY-30; 
		windAnim3.inputEnabled = true;
		windAnim3.input.useHandCursor = true;
		windAnim3.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				if(target.frame==0)
				{
				switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
        
        
        windAnim4 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind4','Level12A_Symbol 68 instance 10000');
		windAnim4.anchor.setTo(1,1);
		windAnim4.angle = 225;
		windAnim4.name = 'windAnim4';
		windAnim4.x = this.world.centerX+3;
		windAnim4.y = this.world.centerY-30;
		windAnim4.inputEnabled = true;
		windAnim4.input.useHandCursor = true;
		windAnim4.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				if(target.frame==0)
				{
				switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
        
        var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-0;
		centerCircle.y = this.world.centerY-90;
		
		windmillGroup= this.add.group();
	    windmillGroup.add(stick);
		windmillGroup.add(windAnim1);
		windmillGroup.add(windAnim2);
		windmillGroup.add(windAnim3);
		windmillGroup.add(windAnim4);
		windmillGroup.add(centerCircle);
		   

        windmillGroup.x = 960;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
			//this.addQuestion(count);
             this.addEventListeners();
		}, this);  
		

	},
	
	addThirdWindMill:function()
	{
		count++;
        var stick = this.add.sprite(this.world.centerX,this.world.centerY-90,'Level12A_stick');
		stick.scale.setTo(1,1.2);
		
		selectedColor = null;
		
		checkButton = this.add.button(this.world.centerX,this.world.centerY+120,'Level12A_scene2Btn',null,this,0,1,2);
		checkButton.scale.setTo(0.8);
		checkButton.anchor.setTo(0.5);
		
		var checktext = this.add.text(0, 5, selctedLang.check);
		checktext.anchor.set(0.5);
		checktext.align = 'center';

		checktext.font = 'Comic Sans MS';
		checktext.fontSize = 40;
		//text.fontWeight = 'bold';
		checktext.fill = '#FFFFFF';

		checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		checkButton.addChild(checktext);
		checkButton.inputEnabled = true;
		checkButton.input.useHandCursor = true;
		
		checkButton.events.onInputDown.add(this.checkAns,this);
		
		checkButton.visible = false;
		
				
		//adding windmill to the game.
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind1','Level12A_Symbol 1 instance 10000');
		windAnim1.anchor.setTo(1,1);
		windAnim1.angle = -45;
		windAnim1.name = 'windAnim1';
		windAnim1.x = this.world.centerX+10;
		windAnim1.y = this.world.centerY-90;
		windAnim1.inputEnabled = true;
		windAnim1.input.useHandCursor = true;
		windAnim1.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				if(target.frame==0)
				{
				switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
		
		windAnim2 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind1','Level12A_Symbol 1 instance 10000');
		windAnim2.anchor.setTo(1,1);
		windAnim2.angle = 45;
		windAnim2.name = 'windAnim2';
		windAnim2.x = this.world.centerX+0;
		windAnim2.y = this.world.centerY-80;
		windAnim2.inputEnabled = true;
		windAnim2.input.useHandCursor = true;
		windAnim2.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				if(target.frame==0)
				{
				switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
        
        windAnim3 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind1','Level12A_Symbol 1 instance 10000');
		windAnim3.anchor.setTo(1,1);
		windAnim3.angle = 135;
		windAnim3.name = 'windAnim3';
		windAnim3.x = this.world.centerX-8;
		windAnim3.y = this.world.centerY-95; 
		windAnim3.inputEnabled = true;
		windAnim3.input.useHandCursor = true;
		windAnim3.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				if(target.frame==0)
				{
				switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
        
        
        windAnim4 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind1','Level12A_Symbol 1 instance 10000');
		windAnim4.anchor.setTo(1,1);
		windAnim4.angle = 225;
		windAnim4.name = 'windAnim4';
		windAnim4.x = this.world.centerX+3;
		windAnim4.y = this.world.centerY-105;
		windAnim4.inputEnabled = true;
		windAnim4.input.useHandCursor = true;
		windAnim4.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				if(target.frame==0)
				{
				switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
        
        var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-0;
		centerCircle.y = this.world.centerY-90;
		
		windmillGroup= this.add.group();
	    windmillGroup.add(stick);
		windmillGroup.add(windAnim1);
		windmillGroup.add(windAnim2);
		windmillGroup.add(windAnim3);
		windmillGroup.add(windAnim4);
		windmillGroup.add(centerCircle);
		   

        windmillGroup.x = 960;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
			//this.addQuestion(count);
             this.addEventListeners();
		}, this);  
		

	},
	
	addFourthWindMill:function()
	{
		count++;
        var stick = this.add.sprite(this.world.centerX,this.world.centerY-40,'Level12A_stick');
		stick.scale.setTo(1,1.2);
		
		selectedColor = null;
		
		checkButton = this.add.button(this.world.centerX,this.world.centerY+120,'Level12A_scene2Btn');
		checkButton.scale.setTo(0.8);
		checkButton.anchor.setTo(0.5);
		
		var checktext = this.add.text(0, 0, selctedLang.check);
		checktext.anchor.set(0.5);
		checktext.align = 'center';

		checktext.font = 'Comic Sans MS';
		checktext.fontSize = 30;
		//text.fontWeight = 'bold';
		checktext.fill = '#FFFFFF';

		checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		checkButton.addChild(checktext);
		checkButton.inputEnabled = true;
		checkButton.input.useHandCursor = true;
		
		checkButton.events.onInputDown.add(function(){checkButton.frame = 0;
                                                      ClickSound.play();
                                                      this.time.events.add(500, function(){this.checkAns();}, this);},this);
		
		checkButton.visible = false;
		
		
		
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim1.anchor.setTo(1,1);
		windAnim1.angle = -2;
		windAnim1.name = 'windAnim1';
		windAnim1.x = this.world.centerX;
		windAnim1.y = this.world.centerY-77;
		windAnim1.inputEnabled = true;
		windAnim1.input.useHandCursor = true;
		windAnim1.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
				
		//adding windmill to the game.		
		windAnim2 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim2.anchor.setTo(1,1);
		windAnim2.angle = 40;
		windAnim2.name = 'windAnim2';
		windAnim2.x = this.world.centerX-10;
		windAnim2.y = this.world.centerY-70;
		windAnim2.inputEnabled = true;
		windAnim2.input.useHandCursor = true;
		windAnim2.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
        
        windAnim3 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim3.anchor.setTo(1,1);
		windAnim3.angle = 90;
		windAnim3.name = 'windAnim3';
		windAnim3.x = this.world.centerX-30;
		windAnim3.y = this.world.centerY-80; 
		windAnim3.inputEnabled = true;
		windAnim3.input.useHandCursor = true;
		windAnim3.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
        
       
        windAnim4 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim4.anchor.setTo(1,1);
		windAnim4.angle = 130;
		windAnim4.name = 'windAnim4';
		windAnim4.x = this.world.centerX-34;
		windAnim4.y = this.world.centerY-86;
		windAnim4.inputEnabled = true;
		windAnim4.input.useHandCursor = true;
		windAnim4.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this); 
		
		
		windAnim5 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim5.anchor.setTo(1,1);
		windAnim5.angle = 175;
		windAnim5.name = 'windAnim5';
		windAnim5.x = this.world.centerX-30;
		windAnim5.y = this.world.centerY-105;
		windAnim5.inputEnabled = true;
		windAnim5.input.useHandCursor = true;
		windAnim5.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
		windAnim6 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim6.anchor.setTo(1,1);
		windAnim6.angle = 225;
		windAnim6.name = 'windAnim6';
		windAnim6.x = this.world.centerX-12;
		windAnim6.y = this.world.centerY-110;
		windAnim6.inputEnabled = true;
		windAnim6.input.useHandCursor = true;
		windAnim6.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim7 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim7.anchor.setTo(1,1);
		windAnim7.angle = 270;
		windAnim7.name = 'windAnim7';
		windAnim7.x = this.world.centerX+5;
		windAnim7.y = this.world.centerY-105;
		windAnim7.inputEnabled = true;
		windAnim7.input.useHandCursor = true;
		windAnim7.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
		windAnim8 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim8.anchor.setTo(1,1);
		windAnim8.angle = 310;
		windAnim8.name = 'windAnim8';
		windAnim8.x = this.world.centerX+10;
		windAnim8.y = this.world.centerY-95;
		windAnim8.inputEnabled = true;
		windAnim8.input.useHandCursor = true;
		windAnim8.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
	/*	
		windAnim9 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim9.anchor.setTo(1,1);
		windAnim9.angle = 320;
		windAnim9.name = 'windAnim9';
		windAnim9.x = this.world.centerX+13;
		windAnim9.y = this.world.centerY-105;
		windAnim9.inputEnabled = true;
		windAnim9.input.useHandCursor = true;
		windAnim9.events.onInputDown.add(function(target)
		{
			
			if(selectedColor!=null)
			{
				switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
		
		
		*/
        
        var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind2Center');
        centerCircle.scale.setTo(1.2);
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-15;
		centerCircle.y = this.world.centerY-100;
		
		windmillGroup= this.add.group();
	    windmillGroup.add(stick);
		windmillGroup.add(windAnim1);
		windmillGroup.add(windAnim2);
		windmillGroup.add(windAnim3);
		windmillGroup.add(windAnim4);
		windmillGroup.add(windAnim5);
		windmillGroup.add(windAnim6);
		windmillGroup.add(windAnim7);
		windmillGroup.add(windAnim8);
		//windmillGroup.add(windAnim9);
		windmillGroup.add(centerCircle);
		   

        windmillGroup.x = 960;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
			//this.addQuestion(count);
             this.addEventListeners();
		}, this);  
		
	},
	
	addFifthWindMill:function()
	{
		count++;
        var stick = this.add.sprite(this.world.centerX,this.world.centerY-90,'Level12A_stick');
		stick.scale.setTo(1,1.2);
		
		selectedColor = null;
		
		checkButton = this.add.button(this.world.centerX,this.world.centerY+120,'Level12A_scene2Btn',null,this,0,1,2);
		checkButton.scale.setTo(0.8);
		checkButton.anchor.setTo(0.5);
		
		var checktext = this.add.text(0, 5, selctedLang.check);
		checktext.anchor.set(0.5);
		checktext.align = 'center';

		checktext.font = 'Comic Sans MS';
		checktext.fontSize = 40;
		//text.fontWeight = 'bold';
		checktext.fill = '#FFFFFF';

		checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		checkButton.addChild(checktext);
		checkButton.inputEnabled = true;
		checkButton.input.useHandCursor = true;
		
		checkButton.events.onInputDown.add(this.checkAns,this);
		
		checkButton.visible = false;
		
		
		
				
		//adding windmill to the game.		
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim1.anchor.setTo(1,1);
		windAnim1.angle = -2;
		windAnim1.name = 'windAnim1';
		windAnim1.x = this.world.centerX;
		windAnim1.y = this.world.centerY-87;
		windAnim1.inputEnabled = true;
		windAnim1.input.useHandCursor = true;
		windAnim1.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
				
		//adding windmill to the game.		
		windAnim2 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim2.anchor.setTo(1,1);
		windAnim2.angle = 40;
		windAnim2.name = 'windAnim2';
		windAnim2.x = this.world.centerX-10;
		windAnim2.y = this.world.centerY-80;
		windAnim2.inputEnabled = true;
		windAnim2.input.useHandCursor = true;
		windAnim2.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
        
        windAnim3 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim3.anchor.setTo(1,1);
		windAnim3.angle = 90;
		windAnim3.name = 'windAnim3';
		windAnim3.x = this.world.centerX-30;
		windAnim3.y = this.world.centerY-90; 
		windAnim3.inputEnabled = true;
		windAnim3.input.useHandCursor = true;
		windAnim3.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
        
       
        windAnim4 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim4.anchor.setTo(1,1);
		windAnim4.angle = 130;
		windAnim4.name = 'windAnim4';
		windAnim4.x = this.world.centerX-34;
		windAnim4.y = this.world.centerY-96;
		windAnim4.inputEnabled = true;
		windAnim4.input.useHandCursor = true;
		windAnim4.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this); 
		
		
		windAnim5 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim5.anchor.setTo(1,1);
		windAnim5.angle = 175;
		windAnim5.name = 'windAnim5';
		windAnim5.x = this.world.centerX-30;
		windAnim5.y = this.world.centerY-115;
		windAnim5.inputEnabled = true;
		windAnim5.input.useHandCursor = true;
		windAnim5.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
		windAnim6 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim6.anchor.setTo(1,1);
		windAnim6.angle = 225;
		windAnim6.name = 'windAnim6';
		windAnim6.x = this.world.centerX-12;
		windAnim6.y = this.world.centerY-120;
		windAnim6.inputEnabled = true;
		windAnim6.input.useHandCursor = true;
		windAnim6.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim7 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim7.anchor.setTo(1,1);
		windAnim7.angle = 270;
		windAnim7.name = 'windAnim7';
		windAnim7.x = this.world.centerX+5;
		windAnim7.y = this.world.centerY-115;
		windAnim7.inputEnabled = true;
		windAnim7.input.useHandCursor = true;
		windAnim7.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
		windAnim8 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim8.anchor.setTo(1,1);
		windAnim8.angle = 310;
		windAnim8.name = 'windAnim8';
		windAnim8.x = this.world.centerX+10;
		windAnim8.y = this.world.centerY-105;
		windAnim8.inputEnabled = true;
		windAnim8.input.useHandCursor = true;
		windAnim8.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
	/*	
		windAnim9 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim9.anchor.setTo(1,1);
		windAnim9.angle = 320;
		windAnim9.name = 'windAnim9';
		windAnim9.x = this.world.centerX+13;
		windAnim9.y = this.world.centerY-105;
		windAnim9.inputEnabled = true;
		windAnim9.input.useHandCursor = true;
		windAnim9.events.onInputDown.add(function(target)
		{
			
			if(selectedColor!=null)
			{
				switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
		
		
		*/
        
        var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind2Center');
        centerCircle.scale.setTo(1.2);
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX-15;
		centerCircle.y = this.world.centerY-100;
		
		windmillGroup= this.add.group();
	    windmillGroup.add(stick);
		windmillGroup.add(windAnim1);
		windmillGroup.add(windAnim2);
		windmillGroup.add(windAnim3);
		windmillGroup.add(windAnim4);
		windmillGroup.add(windAnim5);
		windmillGroup.add(windAnim6);
		windmillGroup.add(windAnim7);
		windmillGroup.add(windAnim8);
		//windmillGroup.add(windAnim9);
		windmillGroup.add(centerCircle);
		   

        windmillGroup.x = 960;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
			//this.addQuestion(count);
             this.addEventListeners();
		}, this);  
		

	},
	
	addSixthWindMill:function()
	{
		count++;
        var stick = this.add.sprite(this.world.centerX-5,this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
		
		selectedColor = null;
		
		checkButton = this.add.button(this.world.centerX+290,this.world.centerY,'Level12A_checkbtn');
		checkButton.scale.setTo(1);
		checkButton.anchor.setTo(0.5);
		checkButton.frame = 1;
		
		checkButton.inputEnabled = true;
		checkButton.input.useHandCursor = true;
		
		checkButton.events.onInputDown.add(function(){checkButton.frame = 0;
                                                      ClickSound.play();
                                                      this.time.events.add(500, function(){this.checkAns();}, this);},this);
		
		checkButton.visible = false;
				
		//adding windmill to the game.		
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind3');
		windAnim1.anchor.setTo(0,0.5);
		//windAnim1.scale.setTo(0.7);
		//windAnim1.angle = -2;
		windAnim1.name = 'windAnim1';
		windAnim1.x = this.world.centerX;
		windAnim1.y = this.world.centerY-20;
		windAnim1.inputEnabled = true;
		windAnim1.input.useHandCursor = true;
		//windAnim1.alpha = 0;
		
		
		wronggraphics1 = this.add.graphics(240, 200);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,80,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim1.addChild(wronggraphics1);
		
		wronggraphics2 = this.add.graphics(200, 180);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,50,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;
		
		windAnim1.addChild(wronggraphics2);
        
        wronggraphics3 = this.add.graphics(230, 200);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);
		wronggraphics3.drawRect(-180,-220,50,50);
		wronggraphics3.boundsPadding = 0;
		wronggraphics3.alpha=0;
		
		windAnim1.addChild(wronggraphics3);
        
        wronggraphics4 = this.add.graphics(230, 230);
		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);
		wronggraphics4.drawRect(-180,-220,80,50);
		wronggraphics4.boundsPadding = 0;
		wronggraphics4.alpha=0;
		
		windAnim1.addChild(wronggraphics4);
		
		
				
		//adding windmill to the game.		
		windAnim2 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind3');
		windAnim2.anchor.setTo(0,0.5);
		//windAnim2.scale.setTo(0.7);
		windAnim2.angle = 90;
		windAnim2.name = 'windAnim2';
		windAnim2.x = this.world.centerX;
		windAnim2.y = this.world.centerY-20;
		windAnim2.inputEnabled = true;
		windAnim2.input.useHandCursor = true;
		
		
		
		wronggraphics1 = this.add.graphics(240, 200);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,80,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim2.addChild(wronggraphics1);
		
		wronggraphics2 = this.add.graphics(200, 180);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,50,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;
		
		windAnim2.addChild(wronggraphics2);
        
        wronggraphics3 = this.add.graphics(230, 200);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);
		wronggraphics3.drawRect(-180,-220,50,50);
		wronggraphics3.boundsPadding = 0;
		wronggraphics3.alpha=0;
		
		windAnim2.addChild(wronggraphics3);
        
        wronggraphics4 = this.add.graphics(230, 230);
		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);
		wronggraphics4.drawRect(-180,-220,80,50);
		wronggraphics4.boundsPadding = 0;
		wronggraphics4.alpha=0;
		
		windAnim2.addChild(wronggraphics4);
        
        windAnim3 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind3');
		windAnim3.anchor.setTo(0,0.5);
		//windAnim3.scale.setTo(0.7);
		windAnim3.angle = 180;
		windAnim3.name = 'windAnim3';
		windAnim3.x = this.world.centerX;
		windAnim3.y = this.world.centerY-20; 
		windAnim3.inputEnabled = true;
		windAnim3.input.useHandCursor = true;
		//windAnim3.alpha = 0;
		
		wronggraphics1 = this.add.graphics(240, 200);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,80,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim3.addChild(wronggraphics1);
		
		wronggraphics2 = this.add.graphics(200, 180);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,50,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;
		
		windAnim3.addChild(wronggraphics2);
        
        wronggraphics3 = this.add.graphics(230, 200);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);
		wronggraphics3.drawRect(-180,-220,50,50);
		wronggraphics3.boundsPadding = 0;
		wronggraphics3.alpha=0;
		
		windAnim3.addChild(wronggraphics3);
        
        wronggraphics4 = this.add.graphics(230, 230);
		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);
		wronggraphics4.drawRect(-180,-220,80,50);
		wronggraphics4.boundsPadding = 0;
		wronggraphics4.alpha=0;
		
		windAnim3.addChild(wronggraphics4);
        
       
        windAnim4 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind3');
		windAnim4.anchor.setTo(0,0.5);
		//windAnim4.scale.setTo(0.7);
		windAnim4.angle = 270;
		windAnim4.name = 'windAnim4';
		windAnim4.x = this.world.centerX;
		windAnim4.y = this.world.centerY-20;
		windAnim4.inputEnabled = true;
		windAnim4.input.useHandCursor = true;
		
		wronggraphics1 = this.add.graphics(240, 200);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,80,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim4.addChild(wronggraphics1);
		
		wronggraphics2 = this.add.graphics(200, 180);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,50,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;
		
		windAnim4.addChild(wronggraphics2);
        
        wronggraphics3 = this.add.graphics(230, 200);
		wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics3.beginFill(0xFF700B, 1);
		wronggraphics3.drawRect(-180,-220,50,50);
		wronggraphics3.boundsPadding = 0;
		wronggraphics3.alpha=0;
		
		windAnim4.addChild(wronggraphics3);
        
        wronggraphics4 = this.add.graphics(230, 230);
		wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics4.beginFill(0xFF700B, 1);
		wronggraphics4.drawRect(-180,-220,80,50);
		wronggraphics4.boundsPadding = 0;
		wronggraphics4.alpha=0;
		
		windAnim4.addChild(wronggraphics4);
		
		
	/*	windAnim5 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind3');
		windAnim5.anchor.setTo(1,1);
		windAnim5.scale.setTo(0.7);
		windAnim5.angle = 175;
		windAnim5.name = 'windAnim5';
		windAnim5.x = this.world.centerX-30;
		windAnim5.y = this.world.centerY-115;
		windAnim5.inputEnabled = true;
		windAnim5.input.useHandCursor = true;
		windAnim5.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				switch(selectedColor)
					{
						case "red": target.frame = 1;break;
						case "eraser": target.frame = 0;break;
					}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
		wronggraphics1 = this.add.graphics(100, 100);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,50,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim5.addChild(wronggraphics1);
		
		/*wronggraphics2 = this.add.graphics(100, 100);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,50,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;
		
		windAnim5.addChild(wronggraphics2);*/
		
		
	/*	windAnim6 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind3');
		windAnim6.anchor.setTo(1,1);
		windAnim6.scale.setTo(0.7);
		windAnim6.angle = 225;
		windAnim6.name = 'windAnim6';
		windAnim6.x = this.world.centerX-12;
		windAnim6.y = this.world.centerY-120;
		windAnim6.inputEnabled = true;
		windAnim6.input.useHandCursor = true;
		windAnim6.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				switch(selectedColor)
					{
						case "red": target.frame = 1;break;
						case "eraser": target.frame = 0;break;
					}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
		wronggraphics1 = this.add.graphics(100, 100);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,50,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim6.addChild(wronggraphics1);
		
		/*wronggraphics2 = this.add.graphics(100, 100);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,50,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;
		
		windAnim6.addChild(wronggraphics2);*/
		
	/*	windAnim7 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind3');
		windAnim7.anchor.setTo(1,1);
		windAnim7.scale.setTo(0.7);
		windAnim7.angle = 270;
		windAnim7.name = 'windAnim7';
		windAnim7.x = this.world.centerX+5;
		windAnim7.y = this.world.centerY-115;
		windAnim7.inputEnabled = true;
		windAnim7.input.useHandCursor = true;
		windAnim7.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				switch(selectedColor)
					{
						case "red": target.frame = 1;break;
						case "eraser": target.frame = 0;break;
					}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
		wronggraphics1 = this.add.graphics(100, 100);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,50,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim7.addChild(wronggraphics1);
		
		/*wronggraphics2 = this.add.graphics(100, 100);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,50,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;
		
		windAnim7.addChild(wronggraphics2);*/
		
	/*	
		windAnim8 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind3');
		windAnim8.anchor.setTo(1,1);
		windAnim8.scale.setTo(0.7);
		windAnim8.angle = 310;
		windAnim8.name = 'windAnim8';
		windAnim8.x = this.world.centerX+10;
		windAnim8.y = this.world.centerY-105;
		windAnim8.inputEnabled = true;
		windAnim8.input.useHandCursor = true;
		windAnim8.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				switch(selectedColor)
					{
						case "red": target.frame = 1;break;
						case "eraser": target.frame = 0;break;
					}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
		wronggraphics1 = this.add.graphics(100, 100);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-180,-270,50,50);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim8.addChild(wronggraphics1);
		
		/*wronggraphics2 = this.add.graphics(100, 100);
		wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics2.beginFill(0xFF700B, 1);
		wronggraphics2.drawRect(-180,-220,50,50);
		wronggraphics2.boundsPadding = 0;
		wronggraphics2.alpha=0;
		
		windAnim8.addChild(wronggraphics2);*/
	/*	
		windAnim9 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_scene3wind2','Level12A_Symbol 8 instance 10000');
		windAnim9.anchor.setTo(1,1);
		windAnim9.angle = 320;
		windAnim9.name = 'windAnim9';
		windAnim9.x = this.world.centerX+13;
		windAnim9.y = this.world.centerY-105;
		windAnim9.inputEnabled = true;
		windAnim9.input.useHandCursor = true;
		windAnim9.events.onInputDown.add(function(target)
		{
			
			if(selectedColor!=null)
			{
				switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 8 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 8 instance 10002';break;
						case "green": target.frameName = 'Symbol 8 instance 10003';break;
					}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
		
		
		*/
        
        var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.scale.setTo(1.2);
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX;
		centerCircle.y = this.world.centerY-20;
        

		
		windmillGroup= this.add.group();
	    windmillGroup.add(stick);
		windmillGroup.add(windAnim1);
		windmillGroup.add(windAnim2);
		windmillGroup.add(windAnim3);
		windmillGroup.add(windAnim4);
		//windmillGroup.add(windAnim5);
		//windmillGroup.add(windAnim6);
		//windmillGroup.add(windAnim7);
		//windmillGroup.add(windAnim8);
		//windmillGroup.add(windAnim9);
		windmillGroup.add(centerCircle);
		   

        windmillGroup.x = 1400;
        windmillGroup.y = 20;
         this.getVoice();
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: -0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
           
			//this.addQuestion(count);
             this.addEventListeners();
		}, this);  
		

	},
	
	addSeventhWindMill:function()
	{
		count++;
        var stick = this.add.sprite(this.world.centerX-5,this.world.centerY+20,'Level12A_stick');
		stick.scale.setTo(1,1.2);
		
		selectedColor = null;
		
		checkButton = this.add.button(this.world.centerX+290,this.world.centerY,'Level12A_checkbtn');
		checkButton.scale.setTo(1);
		checkButton.anchor.setTo(0.5);
		checkButton.frame = 1;
		
		checkButton.inputEnabled = true;
		checkButton.input.useHandCursor = true;
		
		checkButton.events.onInputDown.add(function(){checkButton.frame = 0;
                                                      ClickSound.play();
                                                      this.time.events.add(500, function(){this.checkAns();}, this);},this);
		
		checkButton.visible = false;
		
		
				
		//adding windmill to the game.	
		
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind2');
		//windAnim1.scale.setTo(0.8);
		windAnim1.anchor.setTo(0,0);
		windAnim1.angle = 0;
		windAnim1.name = 'windAnim1';
		windAnim1.x = this.world.centerX;
		windAnim1.y = this.world.centerY;
		windAnim1.inputEnabled = true;
		windAnim1.input.useHandCursor = true;
		windAnim1.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				switch(selectedColor)
					{
						case "red": target.frame = 1;break;
						case "eraser": target.frame = 0;break;
					}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
		
		wronggraphics1 = this.add.graphics(90, 270);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-85,-270,150,150);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim1.addChild(wronggraphics1);
		
		windAnim2 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind2');
		windAnim2.anchor.setTo(0,0);
		//windAnim2.scale.setTo(0.8);
		windAnim2.angle = 90;
		windAnim2.name = 'windAnim2';
		windAnim2.x = this.world.centerX;
		windAnim2.y = this.world.centerY;
		windAnim2.inputEnabled = true;
		windAnim2.input.useHandCursor = true;
		//windAnim2.alpha = 0;
		windAnim2.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				switch(selectedColor)
					{
						case "red": target.frame = 1;break;
						case "eraser": target.frame = 0;break;
					}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
		wronggraphics1 = this.add.graphics(85, 270);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-85,-270,150,150);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim2.addChild(wronggraphics1);
        
        windAnim3 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind2');
		windAnim3.anchor.setTo(0,0);
		//windAnim3.scale.setTo(0.8);
		windAnim3.angle = 180;
		windAnim3.name = 'windAnim3';
		windAnim3.x = this.world.centerX;
		windAnim3.y = this.world.centerY; 
		windAnim3.inputEnabled = true;
		windAnim3.input.useHandCursor = true;
		//windAnim3.alpha = 0;
		windAnim3.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				switch(selectedColor)
					{
						case "red": target.frame = 1;break;
						case "eraser": target.frame = 0;break;
					}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this);
        wronggraphics1 = this.add.graphics(85, 270);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-85,-270,150,150);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim3.addChild(wronggraphics1);
        
        windAnim4 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind2');
		windAnim4.anchor.setTo(0,0);
		windAnim4.angle = 270;
		//windAnim4.scale.setTo(0.8);
		windAnim4.name = 'windAnim4';
		windAnim4.x = this.world.centerX;
		windAnim4.y = this.world.centerY;
		windAnim4.inputEnabled = true;
		windAnim4.input.useHandCursor = true;
		//windAnim4.alpha = 0;
		windAnim4.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				switch(selectedColor)
					{
						case "red": target.frame = 1;break;
						case "eraser": target.frame = 0;break;
					}
				if(checkButton.visible == false)
					checkButton.visible = true;
			}
												   
		}, this); 
		
		wronggraphics1 = this.add.graphics(87, 270);
		wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		wronggraphics1.beginFill(0xFF700B, 1);
		wronggraphics1.drawRect(-85,-270,150,150);		
		wronggraphics1.boundsPadding = 0;
		wronggraphics1.alpha=0;
		
		windAnim4.addChild(wronggraphics1);
		
	/*	windAnim5 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim5.anchor.setTo(0.5,1);
		windAnim5.angle = 90;
		windAnim5.name = 'windAnim5';
		windAnim5.x = this.world.centerX-0;
		windAnim5.y = this.world.centerY-50;
		windAnim5.inputEnabled = true;
		windAnim5.input.useHandCursor = true;
		windAnim5.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
		windAnim6 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim6.anchor.setTo(0.5,1);
		windAnim6.angle = 112.5;
		windAnim6.name = 'windAnim6';
		windAnim6.x = this.world.centerX-0;
		windAnim6.y = this.world.centerY-50;
		windAnim6.inputEnabled = true;
		windAnim6.input.useHandCursor = true;
		windAnim6.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim7 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim7.anchor.setTo(0.5,1);
		windAnim7.angle = 135;
		windAnim7.name = 'windAnim7';
		windAnim7.x = this.world.centerX;
		windAnim7.y = this.world.centerY-50;
		windAnim7.inputEnabled = true;
		windAnim7.input.useHandCursor = true;
		windAnim7.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
		windAnim8 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim8.anchor.setTo(0.5,1);
		windAnim8.angle = 157.5;
		windAnim8.name = 'windAnim8';
		windAnim8.x = this.world.centerX;
		windAnim8.y = this.world.centerY-50;
		windAnim8.inputEnabled = true;
		windAnim8.input.useHandCursor = true;
		windAnim8.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim9 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim9.anchor.setTo(0.5,1);
		windAnim9.angle = 180;
		windAnim9.name = 'windAnim9';
		windAnim9.x = this.world.centerX;
		windAnim9.y = this.world.centerY-50;
		windAnim9.inputEnabled = true;
		windAnim9.input.useHandCursor = true;
		windAnim9.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim10 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim10.anchor.setTo(0.5,1);
		windAnim10.angle = 202.5;
		windAnim10.name = 'windAnim10';
		windAnim10.x = this.world.centerX;
		windAnim10.y = this.world.centerY-50;
		windAnim10.inputEnabled = true;
		windAnim10.input.useHandCursor = true;
		windAnim10.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim11 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim11.anchor.setTo(0.5,1);
		windAnim11.angle = 225;
		windAnim11.name = 'windAnim11';
		windAnim11.x = this.world.centerX;
		windAnim11.y = this.world.centerY-50;
		windAnim11.inputEnabled = true;
		windAnim11.input.useHandCursor = true;
		windAnim11.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim12 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim12.anchor.setTo(0.5,1);
		windAnim12.angle = 247.5;
		windAnim12.name = 'windAnim12';
		windAnim12.x = this.world.centerX;
		windAnim12.y = this.world.centerY-50;
		windAnim12.inputEnabled = true;
		windAnim12.input.useHandCursor = true;
		windAnim12.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim13 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim13.anchor.setTo(0.5,1);
		windAnim13.angle = 270;
		windAnim13.name = 'windAnim13';
		windAnim13.x = this.world.centerX;
		windAnim13.y = this.world.centerY-50;
		windAnim13.inputEnabled = true;
		windAnim13.input.useHandCursor = true;
		windAnim13.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim14 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim14.anchor.setTo(0.5,1);
		windAnim14.angle = 292.5;
		windAnim14.name = 'windAnim14';
		windAnim14.x = this.world.centerX;
		windAnim14.y = this.world.centerY-50;
		windAnim14.inputEnabled = true;
		windAnim14.input.useHandCursor = true;
		windAnim14.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim15 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim15.anchor.setTo(0.5,1);
		windAnim15.angle = 315;
		windAnim15.name = 'windAnim15';
		windAnim15.x = this.world.centerX;
		windAnim15.y = this.world.centerY-50;
		windAnim15.inputEnabled = true;
		windAnim15.input.useHandCursor = true;
		windAnim15.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim16 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim16.anchor.setTo(0.5,1);
		windAnim16.angle = 337.5;
		windAnim16.name = 'windAnim16';
		windAnim16.x = this.world.centerX;
		windAnim16.y = this.world.centerY-50;
		windAnim16.inputEnabled = true;
		windAnim16.input.useHandCursor = true;
		windAnim16.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		*/
        
        var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_centerCircle');
        centerCircle.scale.setTo(1.2);
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX;
		centerCircle.y = this.world.centerY;
		
		/*var bigCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_bigCircle');
        bigCircle.scale.setTo(0.7);
        bigCircle.anchor.setTo(0.5);
        bigCircle.x = this.world.centerX;
		bigCircle.y = this.world.centerY-50;*/
		
		windmillGroup= this.add.group();
	    windmillGroup.add(stick);
		windmillGroup.add(windAnim1);
		windmillGroup.add(windAnim2);
		windmillGroup.add(windAnim3);
		windmillGroup.add(windAnim4);
		/*windmillGroup.add(windAnim5);
		windmillGroup.add(windAnim6);
		windmillGroup.add(windAnim7);
		windmillGroup.add(windAnim8);
		windmillGroup.add(windAnim9);
		windmillGroup.add(windAnim10);
		windmillGroup.add(windAnim11);
		windmillGroup.add(windAnim12);
		windmillGroup.add(windAnim13);
		windmillGroup.add(windAnim14);
		windmillGroup.add(windAnim15);
		windmillGroup.add(windAnim16);*/
		windmillGroup.add(centerCircle);
		//windmillGroup.add(bigCircle);
		   

        windmillGroup.x = 1400;
        this.getVoice();
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 1500,'Linear', true, 0);
		tween.onComplete.add(function(){
            
			//this.addQuestion(count);
             this.addEventListeners();
		}, this);  
		
		
	},
	
	addEightWindMill:function()
	{
		count++;
        var stick = this.add.sprite(this.world.centerX,this.world.centerY-90,'Level12A_stick');
		stick.scale.setTo(1,1.2);
		
		selectedColor = null;
		
		checkButton = this.add.button(this.world.centerX,this.world.centerY+120,'Level12A_scene2Btn',null,this,0,1,2);
		checkButton.scale.setTo(0.8);
		checkButton.anchor.setTo(0.5);
		
		var checktext = this.add.text(0, 0, selctedLang.check);
		checktext.anchor.set(0.5);
		checktext.align = 'center';

		checktext.font = 'Comic Sans MS';
		checktext.fontSize = 30;
		//text.fontWeight = 'bold';
		checktext.fill = '#FFFFFF';

		checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		checkButton.addChild(checktext);
		checkButton.inputEnabled = true;
		checkButton.input.useHandCursor = true;
		
		checkButton.events.onInputDown.add(this.checkAns,this);
		
		checkButton.visible = false;
		
		
		
				
		//adding windmill to the game.	
		
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim1.anchor.setTo(0.5,1);
		windAnim1.angle = 0;
		windAnim1.name = 'windAnim1';
		windAnim1.x = this.world.centerX;
		windAnim1.y = this.world.centerY-50;
		windAnim1.inputEnabled = true;
		windAnim1.input.useHandCursor = true;
		windAnim1.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
		windAnim2 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim2.anchor.setTo(0.5,1);
		windAnim2.angle = 22.5;
		windAnim2.name = 'windAnim2';
		windAnim2.x = this.world.centerX;
		windAnim2.y = this.world.centerY-50;
		windAnim2.inputEnabled = true;
		windAnim2.input.useHandCursor = true;
		windAnim2.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
        
        windAnim3 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim3.anchor.setTo(0.5,1);
		windAnim3.angle = 45;
		windAnim3.name = 'windAnim3';
		windAnim3.x = this.world.centerX;
		windAnim3.y = this.world.centerY-50; 
		windAnim3.inputEnabled = true;
		windAnim3.input.useHandCursor = true;
		windAnim3.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
        
        
        windAnim4 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim4.anchor.setTo(0.5,1);
		windAnim4.angle = 67.5;
		windAnim4.name = 'windAnim4';
		windAnim4.x = this.world.centerX;
		windAnim4.y = this.world.centerY-50;
		windAnim4.inputEnabled = true;
		windAnim4.input.useHandCursor = true;
		windAnim4.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this); 
		
		windAnim5 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim5.anchor.setTo(0.5,1);
		windAnim5.angle = 90;
		windAnim5.name = 'windAnim5';
		windAnim5.x = this.world.centerX-0;
		windAnim5.y = this.world.centerY-50;
		windAnim5.inputEnabled = true;
		windAnim5.input.useHandCursor = true;
		windAnim5.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
		windAnim6 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim6.anchor.setTo(0.5,1);
		windAnim6.angle = 112.5;
		windAnim6.name = 'windAnim6';
		windAnim6.x = this.world.centerX-0;
		windAnim6.y = this.world.centerY-50;
		windAnim6.inputEnabled = true;
		windAnim6.input.useHandCursor = true;
		windAnim6.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim7 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim7.anchor.setTo(0.5,1);
		windAnim7.angle = 135;
		windAnim7.name = 'windAnim7';
		windAnim7.x = this.world.centerX;
		windAnim7.y = this.world.centerY-50;
		windAnim7.inputEnabled = true;
		windAnim7.input.useHandCursor = true;
		windAnim7.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
		windAnim8 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim8.anchor.setTo(0.5,1);
		windAnim8.angle = 157.5;
		windAnim8.name = 'windAnim8';
		windAnim8.x = this.world.centerX;
		windAnim8.y = this.world.centerY-50;
		windAnim8.inputEnabled = true;
		windAnim8.input.useHandCursor = true;
		windAnim8.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim9 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim9.anchor.setTo(0.5,1);
		windAnim9.angle = 180;
		windAnim9.name = 'windAnim9';
		windAnim9.x = this.world.centerX;
		windAnim9.y = this.world.centerY-50;
		windAnim9.inputEnabled = true;
		windAnim9.input.useHandCursor = true;
		windAnim9.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim10 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim10.anchor.setTo(0.5,1);
		windAnim10.angle = 202.5;
		windAnim10.name = 'windAnim10';
		windAnim10.x = this.world.centerX;
		windAnim10.y = this.world.centerY-50;
		windAnim10.inputEnabled = true;
		windAnim10.input.useHandCursor = true;
		windAnim10.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim11 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim11.anchor.setTo(0.5,1);
		windAnim11.angle = 225;
		windAnim11.name = 'windAnim11';
		windAnim11.x = this.world.centerX;
		windAnim11.y = this.world.centerY-50;
		windAnim11.inputEnabled = true;
		windAnim11.input.useHandCursor = true;
		windAnim11.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim12 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim12.anchor.setTo(0.5,1);
		windAnim12.angle = 247.5;
		windAnim12.name = 'windAnim12';
		windAnim12.x = this.world.centerX;
		windAnim12.y = this.world.centerY-50;
		windAnim12.inputEnabled = true;
		windAnim12.input.useHandCursor = true;
		windAnim12.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim13 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim13.anchor.setTo(0.5,1);
		windAnim13.angle = 270;
		windAnim13.name = 'windAnim13';
		windAnim13.x = this.world.centerX;
		windAnim13.y = this.world.centerY-50;
		windAnim13.inputEnabled = true;
		windAnim13.input.useHandCursor = true;
		windAnim13.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim14 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim14.anchor.setTo(0.5,1);
		windAnim14.angle = 292.5;
		windAnim14.name = 'windAnim14';
		windAnim14.x = this.world.centerX;
		windAnim14.y = this.world.centerY-50;
		windAnim14.inputEnabled = true;
		windAnim14.input.useHandCursor = true;
		windAnim14.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim15 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim15.anchor.setTo(0.5,1);
		windAnim15.angle = 315;
		windAnim15.name = 'windAnim15';
		windAnim15.x = this.world.centerX;
		windAnim15.y = this.world.centerY-50;
		windAnim15.inputEnabled = true;
		windAnim15.input.useHandCursor = true;
		windAnim15.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim16 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim16.anchor.setTo(0.5,1);
		windAnim16.angle = 337.5;
		windAnim16.name = 'windAnim16';
		windAnim16.x = this.world.centerX;
		windAnim16.y = this.world.centerY-50;
		windAnim16.inputEnabled = true;
		windAnim16.input.useHandCursor = true;
		windAnim16.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
        
        var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind2Center');
        centerCircle.scale.setTo(1.2);
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX;
		centerCircle.y = this.world.centerY-50;
		
		var bigCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_bigCircle');
        bigCircle.scale.setTo(0.7);
        bigCircle.anchor.setTo(0.5);
        bigCircle.x = this.world.centerX;
		bigCircle.y = this.world.centerY-50;
		
		windmillGroup= this.add.group();
	    windmillGroup.add(stick);
		windmillGroup.add(windAnim1);
		windmillGroup.add(windAnim2);
		windmillGroup.add(windAnim3);
		windmillGroup.add(windAnim4);
		windmillGroup.add(windAnim5);
		windmillGroup.add(windAnim6);
		windmillGroup.add(windAnim7);
		windmillGroup.add(windAnim8);
		windmillGroup.add(windAnim9);
		windmillGroup.add(windAnim10);
		windmillGroup.add(windAnim11);
		windmillGroup.add(windAnim12);
		windmillGroup.add(windAnim13);
		windmillGroup.add(windAnim14);
		windmillGroup.add(windAnim15);
		windmillGroup.add(windAnim16);
		windmillGroup.add(centerCircle);
		windmillGroup.add(bigCircle);
		   

        windmillGroup.x = 960;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
			//this.addQuestion(count);
             this.addEventListeners();
		}, this);  
		
		
	},
		
	addNinthWindMill:function()
	{
		count++;
        var stick = this.add.sprite(this.world.centerX,this.world.centerY-90,'Level12A_stick');
		stick.scale.setTo(1,1.2);
		
		selectedColor = null;
		
		checkButton = this.add.button(this.world.centerX,this.world.centerY+120,'Level12A_scene2Btn',null,this,0,1,2);
		checkButton.scale.setTo(0.8);
		checkButton.anchor.setTo(0.5);
		
		var checktext = this.add.text(0, 5, selctedLang.check);
		checktext.anchor.set(0.5);
		checktext.align = 'center';

		checktext.font = 'Comic Sans MS';
		checktext.fontSize = 40;
		//text.fontWeight = 'bold';
		checktext.fill = '#FFFFFF';

		checktext.setShadow(0, 0,'Level12A_rgba(0, 0, 0, 0)', 0);
		checkButton.addChild(checktext);
		checkButton.inputEnabled = true;
		checkButton.input.useHandCursor = true;
		
		checkButton.events.onInputDown.add(this.checkAns,this);
		
		checkButton.visible = false;
		
		
		
				
		//adding windmill to the game.	
		
		windAnim1 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim1.anchor.setTo(0.5,1);
		windAnim1.angle = 0;
		windAnim1.name = 'windAnim1';
		windAnim1.x = this.world.centerX;
		windAnim1.y = this.world.centerY-50;
		windAnim1.inputEnabled = true;
		windAnim1.input.useHandCursor = true;
		windAnim1.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
		windAnim2 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim2.anchor.setTo(0.5,1);
		windAnim2.angle = 22.5;
		windAnim2.name = 'windAnim2';
		windAnim2.x = this.world.centerX;
		windAnim2.y = this.world.centerY-50;
		windAnim2.inputEnabled = true;
		windAnim2.input.useHandCursor = true;
		windAnim2.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
        
        windAnim3 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim3.anchor.setTo(0.5,1);
		windAnim3.angle = 45;
		windAnim3.name = 'windAnim3';
		windAnim3.x = this.world.centerX;
		windAnim3.y = this.world.centerY-50; 
		windAnim3.inputEnabled = true;
		windAnim3.input.useHandCursor = true;
		windAnim3.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
        
        
        windAnim4 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim4.anchor.setTo(0.5,1);
		windAnim4.angle = 67.5;
		windAnim4.name = 'windAnim4';
		windAnim4.x = this.world.centerX;
		windAnim4.y = this.world.centerY-50;
		windAnim4.inputEnabled = true;
		windAnim4.input.useHandCursor = true;
		windAnim4.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this); 
		
		windAnim5 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim5.anchor.setTo(0.5,1);
		windAnim5.angle = 90;
		windAnim5.name = 'windAnim5';
		windAnim5.x = this.world.centerX-0;
		windAnim5.y = this.world.centerY-50;
		windAnim5.inputEnabled = true;
		windAnim5.input.useHandCursor = true;
		windAnim5.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
		windAnim6 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim6.anchor.setTo(0.5,1);
		windAnim6.angle = 112.5;
		windAnim6.name = 'windAnim6';
		windAnim6.x = this.world.centerX-0;
		windAnim6.y = this.world.centerY-50;
		windAnim6.inputEnabled = true;
		windAnim6.input.useHandCursor = true;
		windAnim6.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim7 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim7.anchor.setTo(0.5,1);
		windAnim7.angle = 135;
		windAnim7.name = 'windAnim7';
		windAnim7.x = this.world.centerX;
		windAnim7.y = this.world.centerY-50;
		windAnim7.inputEnabled = true;
		windAnim7.input.useHandCursor = true;
		windAnim7.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
		windAnim8 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim8.anchor.setTo(0.5,1);
		windAnim8.angle = 157.5;
		windAnim8.name = 'windAnim8';
		windAnim8.x = this.world.centerX;
		windAnim8.y = this.world.centerY-50;
		windAnim8.inputEnabled = true;
		windAnim8.input.useHandCursor = true;
		windAnim8.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim9 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim9.anchor.setTo(0.5,1);
		windAnim9.angle = 180;
		windAnim9.name = 'windAnim9';
		windAnim9.x = this.world.centerX;
		windAnim9.y = this.world.centerY-50;
		windAnim9.inputEnabled = true;
		windAnim9.input.useHandCursor = true;
		windAnim9.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim10 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim10.anchor.setTo(0.5,1);
		windAnim10.angle = 202.5;
		windAnim10.name = 'windAnim10';
		windAnim10.x = this.world.centerX;
		windAnim10.y = this.world.centerY-50;
		windAnim10.inputEnabled = true;
		windAnim10.input.useHandCursor = true;
		windAnim10.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim11 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim11.anchor.setTo(0.5,1);
		windAnim11.angle = 225;
		windAnim11.name = 'windAnim11';
		windAnim11.x = this.world.centerX;
		windAnim11.y = this.world.centerY-50;
		windAnim11.inputEnabled = true;
		windAnim11.input.useHandCursor = true;
		windAnim11.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim12 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim12.anchor.setTo(0.5,1);
		windAnim12.angle = 247.5;
		windAnim12.name = 'windAnim12';
		windAnim12.x = this.world.centerX;
		windAnim12.y = this.world.centerY-50;
		windAnim12.inputEnabled = true;
		windAnim12.input.useHandCursor = true;
		windAnim12.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim13 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim13.anchor.setTo(0.5,1);
		windAnim13.angle = 270;
		windAnim13.name = 'windAnim13';
		windAnim13.x = this.world.centerX;
		windAnim13.y = this.world.centerY-50;
		windAnim13.inputEnabled = true;
		windAnim13.input.useHandCursor = true;
		windAnim13.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim14 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim14.anchor.setTo(0.5,1);
		windAnim14.angle = 292.5;
		windAnim14.name = 'windAnim14';
		windAnim14.x = this.world.centerX;
		windAnim14.y = this.world.centerY-50;
		windAnim14.inputEnabled = true;
		windAnim14.input.useHandCursor = true;
		windAnim14.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim15 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim15.anchor.setTo(0.5,1);
		windAnim15.angle = 315;
		windAnim15.name = 'windAnim15';
		windAnim15.x = this.world.centerX;
		windAnim15.y = this.world.centerY-50;
		windAnim15.inputEnabled = true;
		windAnim15.input.useHandCursor = true;
		windAnim15.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		windAnim16 = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_windmel','Level12A_Symbol 1 instance 10000');
		windAnim16.anchor.setTo(0.5,1);
		windAnim16.angle = 337.5;
		windAnim16.name = 'windAnim16';
		windAnim16.x = this.world.centerX;
		windAnim16.y = this.world.centerY-50;
		windAnim16.inputEnabled = true;
		windAnim16.input.useHandCursor = true;
		windAnim16.events.onInputDown.add(function(target)
		{
			ClickSound.play();
			if(selectedColor!=null)
			{
				
				if(target.frame==0)
				{
				   switch(selectedColor)
					{
						case "red": target.frameName = 'Symbol 1 instance 10001';break;
						case "yellow": target.frameName = 'Symbol 1 instance 10002';break;
						case "green": target.frameName = 'Symbol 1 instance 10003';break;
					}
				}
				else
				{
					target.frame = 0;	
				}
				if(checkButton.visible == false)
					checkButton.visible = true;
				
			}
												   
		}, this);
		
		
        
        var centerCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_wind2Center');
        centerCircle.scale.setTo(1.2);
        centerCircle.anchor.setTo(0.5);
        centerCircle.x = this.world.centerX;
		centerCircle.y = this.world.centerY-50;
		
		var bigCircle = this.add.sprite(this.world.centerX,this.world.centerY,'Level12A_bigCircle');
        bigCircle.scale.setTo(0.7);
        bigCircle.anchor.setTo(0.5);
        bigCircle.x = this.world.centerX;
		bigCircle.y = this.world.centerY-50;
		
		windmillGroup= this.add.group();
	    windmillGroup.add(stick);
		windmillGroup.add(windAnim1);
		windmillGroup.add(windAnim2);
		windmillGroup.add(windAnim3);
		windmillGroup.add(windAnim4);
		windmillGroup.add(windAnim5);
		windmillGroup.add(windAnim6);
		windmillGroup.add(windAnim7);
		windmillGroup.add(windAnim8);
		windmillGroup.add(windAnim9);
		windmillGroup.add(windAnim10);
		windmillGroup.add(windAnim11);
		windmillGroup.add(windAnim12);
		windmillGroup.add(windAnim13);
		windmillGroup.add(windAnim14);
		windmillGroup.add(windAnim15);
		windmillGroup.add(windAnim16);
		windmillGroup.add(centerCircle);
		windmillGroup.add(bigCircle);
		   

        windmillGroup.x = 960;
        
        var tween = this.add.tween(windmillGroup);
		tween.to({ x: 0}, 0,'Linear', true, 0);
		tween.onComplete.add(function(){
            this.getVoice();
			//this.addQuestion(count);
             this.addEventListeners();
		}, this);  
		
		
	},
    
    getVoice:function(){
        switch(questionArray[count-1])
        {
            case 1:
            case 4:
            case 7:if(window.languageSelected=="English")
                        Eng_12C1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12C1.play();
                    else
                        Kan_12C1.play();
                    break;
            case 2:
            case 5:
            case 8:if(window.languageSelected=="English")
                        Eng_12C2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12C2.play();
                    else
                        Kan_12C2.play();
                    break;
            case 3:
            case 6:
            case 9:if(window.languageSelected=="English")
                        Eng_12C3.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_12C3.play();
                    else
                        Kan_12C3.play();
                    break;
            
        }
    }
};
