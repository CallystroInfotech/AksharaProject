Game.grade2_4Blevel1=function(){};
var bg1;
var starsGroup;
var dragBox;
var count;
var gameBoxGroup;
var crocsGroup;
var tickMark;
var objGroup;
var rightOrderArray = [];
var glowOrderArray = [];
var no1;
var count;
var count1;
var qArrays = [];
var graphics;
var numGroup;
var selectedAns = "";
var rightAns = "";
var mainSprite;
var speaker;
var enterTxt;

var noofAttempts;
var timer;
var AnsTimerCount;

Game.grade2_4Blevel1.prototype={
	create:function(game){

		noofAttempts=0;
		AnsTimerCount=0;
		
        no1=0;
        qArrays = [1,2,3,4,5,6];
        qArrays = this.shuffle(qArrays);
        count=0;
        count1=0;
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

        this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

        bg1 = this.add.tileSprite(0,0,this.world.width,this.world.height,'Level24A_bg1');
       

		var backbtn = this.add.sprite(5,1,'CommonBackBtn');
		backbtn.inputEnabled = true;
		backbtn.events.onInputDown.add(function(){
			//this.cache.destroy();
			this.stopVoice();
			enterTxt.setText("");
			selectedAns="";
			var click = this.add.audio('ClickSound');
            click.play();
			this.state.start('grade3levelSelectionScreen'); 
			},this);

       /*speaker = this.add.button(908,1,'CommonSpeakerBtn',function(){
		   var click = this.add.audio('ClickSound');
            click.play();
			this.getVoice();
		},this,1,0,2);*/
		
		speaker = this.add.sprite(908,1,'CommonSpeakerBtn');
        
        graphics = this.add.graphics(0, 400);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,960,120);		
		graphics.boundsPadding = 0;
		graphics.alpha=0;
		
		
        
        this.generateStarsForTheScene(6);
        
        //no1++;
        this.getQuestion();

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

    getQuestion:function(target)
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
		
        this.stopVoice();
        speaker.inputEnabled=true;     
        speaker.input.useHandCursor = true;
    	//console.log("get"+no1);
    	switch(qArrays[no1])      
    	{
    		case 1: this.gotoFirstQuestion();
    				break;
    		case 2: this.gotoSecondQuestion();
    				break;
    		case 3: this.gotoThirdQuestion();
    				break;
    		case 4: this.gotoFourthQuestion();
    				break;
    		case 5: this.gotoFifthQuestion();
    				break;
    		case 6: this.gotoSixthQuestion();
    				break;
          
    	}
        
    },
     
   
    removeEverthing:function() 
    {
        this.stopVoice();
        numGroup.destroy();
        objGroup.destroy();
        selectedAns="";
        if(no1<5)
        {
            count =0;
            no1++;
            this.getQuestion();    
        }
        else
        {
            this.stopVoice();
           // console.log("gameover");
            this.state.start('grade2_4BScore');
        }
    },
    
    checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
	},
    
    addNumberPad:function(){
        
        numGroup = this.add.group();
        var x = 120;
        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,500,'Level24A_numbg');  
            numbg.anchor.setTo(0.5);
            numbg.name = i;
            
            var numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            numTxt.anchor.setTo(0.5);
            numTxt.align = 'center';

            numTxt.font = 'Alte Haas Grotesk';
            numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            numTxt.fill = '#FFFFFF';

            numTxt.setShadow(0, 0,'Level24A_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=50;
        }
        var txtbox = this.add.sprite(x+50,500,'Level24A_txtbox');
        txtbox.anchor.setTo(0.5);
        txtbox.name = "txtbox";
        
        var wrongbtn = numGroup.create(x+120,500,'Level24A_wrongBtn');
        wrongbtn.anchor.setTo(0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+170,500,'Level24A_rightBtn');
        rightbtn.anchor.setTo(0.5);
        rightbtn.name = "rightbtn";
        rightbtn.name = "wrongbtn";
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        
        enterTxt = this.add.text(-2,1, selectedAns);
            //titletext.scale.setTo(1.5);
        enterTxt.anchor.setTo(0.5);
        enterTxt.align = 'center';

        enterTxt.font = 'Alte Haas Grotesk';
        enterTxt.fontSize = 24;
            //text.fontWeight = 'bold';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0,'Level24A_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        numGroup.add(txtbox);
        
        
        wrongbtn.events.onInputDown.add(function(target){ClickSound.play();
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
			enterTxt.setText("");selectedAns="";},this);
        
        rightbtn.events.onInputDown.add(function(target){
            
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
			
            ClickSound.play();
            if(selectedAns==rightAns||selectedAns=="0"+rightAns)  
                {
					timer.stop();
					timer = null;
					
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
		
		
                    speaker.inputEnabled=false;
                    console.log("correct");
                    target.events.onInputDown.removeAll();
                    objGroup.getByName('tape15cm').frame = 1;
                    objGroup.getByName('tape15cm').frameName = rightAns;
                    
                    if(qArrays[no1]==5||qArrays[no1]==6)
                    {
                       objGroup.getByName('tapetint').frame = 1;     
                    }
                    
                    //mainSprite.frame = 1;
                    var anim = mainSprite.animations.add('glow');
                    anim.play(12);
                    
                     celebr.play();
                     var starAnim = starsGroup.getChildAt(count1);
                       // console.log(starAnim);
                        starAnim.smoothed = false;
                        var anim4 = starAnim.animations.add('star');
                        anim4.play();
                        anim.onComplete.add(function(){this.removeEverthing();},this);
                        //this.time.events.add(3000, function(){this.removeEverthing();},this);
                    count1++;
                }
            else
                {
					noofAttempts++;
                    console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    shake.shake(10, mainSprite);
                    waudio.play(); 
                   // aiyoh.play(); 
                    objGroup.getByName('tape15cm').x = tapeXPos;
                    objGroup.getByName('tape15cm').y = tapeYPos;
                }
        },this);
    },
    
    
    numClicked:function(target){
        //console.log(target.name);
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
			
        ClickSound.play();
        if(selectedAns.length<3)
        {
            selectedAns += target.name;
            numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
        
       // console.log(selectedAns);
        
    },
    
    
    gotoFirstQuestion:function(){
        this.stopVoice();
        this.getVoice(1);
        speaker.events.onInputDown.add(function(){
            this.getVoice(1);
        },this);
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(560,255,'Level24A_level2Scale1');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
       
       // mainSprite.width -= 8;
        
        rightAns = "15";
        
        var tape15cm = this.add.sprite(230,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
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
			
        target.x = this.input.x;
       // console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true; 
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
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
			},this);
        tape15cm.events.onDragStop.add(function(target){snapSound.play();
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
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            //console.log(this.input.x);
            
            if(this.input.x>=900)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 880;
            }
            else if(this.input.x<=210)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 230;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 130;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(120,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
     },
    
    gotoSecondQuestion:function(){
        this.stopVoice();
        this.getVoice(2);
        speaker.events.onInputDown.add(function(){
            this.getVoice(2);
        },this);
         this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(538,255,'Level24A_level2Scale2');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
       // mainSprite.width -= 10;
        
        rightAns = "30";
        
         var tape15cm = this.add.sprite(150,340,'Level24A_tape30cm');
        tape15cm.anchor.setTo(0.95,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        

        tape15cm.events.onInputDown.add(function(target){
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
			
            target.x = this.input.x;
            
       // console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true; 
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
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
			},this);  
        tape15cm.events.onDragStop.add(function(target){snapSound.play();
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
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            //console.log(this.input.x);
            
            if(this.input.x>=920)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 903;
            }
            else if(this.input.x<=130)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 150;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(90,320,'Level24A_tape2');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoThirdQuestion:function(){
        this.stopVoice();
        this.getVoice(3);
        speaker.events.onInputDown.add(function(){
            this.getVoice(3);
        },this);
      	this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(540,275,'Level24A_level2Scale3');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        //mainSprite.width -= 10;
       
        
        rightAns = "100";
        
        var tape15cm = this.add.sprite(130,337,'Level24A_tape100cm');
        tape15cm.anchor.setTo(0.916,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
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
			
            target.x = this.input.x;
            
       // console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true; 
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
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
			},this);
        tape15cm.events.onDragStop.add(function(target){snapSound.play();
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
			},this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            //console.log(this.input.x);
            
            if(this.input.x>=905)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 892;
            }
            else if(this.input.x<=120)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 100;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();  
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(100,320,'Level24A_tape3');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    }, 
    
    gotoFourthQuestion:function(){
        this.stopVoice();
        this.getVoice(4);
        speaker.events.onInputDown.add(function(){
            this.getVoice(4);
        },this);
      	 this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(this.world.centerX+20,this.world.centerY-50,'Level24A_tree');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
       // mainSprite.width -= 8;
        
        rightAns = "100";
        
        
        var tape15cm = this.add.sprite(this.world.centerX+19,this.world.centerY+130,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
      /*   var tape15cm = this.add.sprite(490,360,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.99,1);        
        tape15cm.inputEnabled = true;
        

        tape15cm.events.onInputDown.add(function(target){
            
            target.x = this.input.x;
       // console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

            
        tape15cm.events.onDragUpdate.add(function(target){
            
            //console.log(this.input.x);
            
            if(this.input.x>=770)
            {
                
                tape15cm.input.draggable = false;
                target.x = 760;
            }
            if(this.input.x<=460)
            {
                tape15cm.input.draggable = false;
                target.x = 490;    
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 380;   
        mask.position.y = 300;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(600, 0);   
        mask.lineTo(600, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(380,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        */
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
    },
    
    gotoFifthQuestion:function(){
        this.stopVoice();
        this.getVoice(5);
        speaker.events.onInputDown.add(function(){
            this.getVoice(5);
        },this);
      	 this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(this.world.centerX,this.world.centerY-50,'Level24A_car');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "200";
        
        var tapeTint = this.add.sprite(this.world.centerX-168,this.world.centerY+120,'Level24A_tapeTint');
        tapeTint.anchor.setTo(0.5); 
        tapeTint.name = "tapetint";
        
        var tape15cm = this.add.sprite(this.world.centerX+170,this.world.centerY+120,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);

        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var dragObj = this.add.sprite(this.world.centerX+170,this.world.centerY+120,'Level24A_tape4');
        dragObj.anchor.setTo(0.5);
        dragObj.inputEnabled = true;
        dragObj.events.onInputDown.add(function(target){
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
			
            ClickSound.play();
            dragObj.input.enableDrag();
        
            dragObj.events.onDragStop.add(function(target){
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
			
            snapSound.play();
            if(this.checkOverlap(target,tapeTint))
            {
                dragObj.visible = false;
                tapeTint.loadTexture("Level24A_tape4",0,false);
                
            }
            dragObj.x = this.world.centerX+170;
            dragObj.y = this.world.centerY+120;
            
            
            
        },this);
            
            
        },this);
        
        
       /*  var tape15cm = this.add.sprite(270,360,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.99,1);        
        tape15cm.inputEnabled = true;
        

        tape15cm.events.onInputDown.add(function(target){
            
            target.x = this.input.x;
       // console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

            
        tape15cm.events.onDragUpdate.add(function(target){
            
            //console.log(this.input.x);
            
            if(this.input.x>=950)
            {
                
                tape15cm.input.draggable = false;
                target.x = 940;
            }
            if(this.input.x<=250)
            {
                tape15cm.input.draggable = false;
                target.x = 270;    
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 150;   
        mask.position.y = 300;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(800, 0);   
        mask.lineTo(800, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(150,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
       */ 
       objGroup.add(mainSprite);
       objGroup.add(tapeTint);
       objGroup.add(tape15cm);
       objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
    },
    
  
    gotoSixthQuestion:function(){
        this.stopVoice();
        this.getVoice(6);
        speaker.events.onInputDown.add(function(){
            this.getVoice(6);
        },this);
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(this.world.centerX,this.world.centerY-50,'Level24A_carpet');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "200";
        
        var tapeTint = this.add.sprite(this.world.centerX-135,this.world.centerY+120,'Level24A_tapeTint');
        tapeTint.anchor.setTo(0.5); 
        tapeTint.name = "tapetint";
        
        var tape15cm = this.add.sprite(this.world.centerX+203,this.world.centerY+120,'Level24A_tape4');
        tape15cm.anchor.setTo(0.5);
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        var dragObj = this.add.sprite(this.world.centerX+203,this.world.centerY+120,'Level24A_tape4');
        dragObj.anchor.setTo(0.5);
        dragObj.inputEnabled = true;
        
        dragObj.events.onInputDown.add(function(){
            ClickSound.play();
            dragObj.input.enableDrag();

            dragObj.events.onDragStop.add(function(target){
                snapSound.play();
                if(this.checkOverlap(target,tapeTint))
                {
                    dragObj.visible = false;
                    tapeTint.loadTexture("Level24A_tape4",0,false);

                }
                dragObj.x = this.world.centerX+203;
                dragObj.y = this.world.centerY+120;



            },this);
        },this);
        
       /*  var tape15cm = this.add.sprite(270,360,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.99,1);        
        tape15cm.inputEnabled = true;
        

        tape15cm.events.onInputDown.add(function(target){
            
            target.x = this.input.x;
       // console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

            
        tape15cm.events.onDragUpdate.add(function(target){
            
            //console.log(this.input.x);
            
            if(this.input.x>=950)
            {
                
                tape15cm.input.draggable = false;
                target.x = 940;
            }
            if(this.input.x<=250)
            {
                tape15cm.input.draggable = false;
                target.x = 270;    
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 150;   
        mask.position.y = 300;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(800, 0);   
        mask.lineTo(800, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(150,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
       */ 
       objGroup.add(mainSprite);
       objGroup.add(tapeTint);
       objGroup.add(tape15cm);
       objGroup.add(dragObj);
      // objGroup.add(mask);
      // objGroup.add(tapeRoll);
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
    
 
    update:function(){

    },
    
    getVoice:function(question){
        this.stopVoice();
        console.log("qq"+question);
        switch(question)
        {
            case 1:
            case 2:
            case 3:if(window.languageSelected=="English")
                        Eng_24A1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_24A1.play();
                    else
                        Kan_24A1.play();
                    break;
            case 4:
            case 5:
            case 6:if(window.languageSelected=="English")
                        Eng_24A2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_24A2.play();
                    else
                        Kan_24A2.play();
                    break;
        }
    },
    
    stopVoice:function(){
        Eng_24A1.stop();
        Hin_24A1.stop();
        Kan_24A1.stop();
        Eng_24A2.stop();
        Hin_24A2.stop();
        Kan_24A2.stop();
    }

    
};