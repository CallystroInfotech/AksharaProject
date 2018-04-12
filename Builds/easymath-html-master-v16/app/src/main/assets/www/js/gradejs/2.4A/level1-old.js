Game.grade2_4Alevel1=function(){};
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
var no1,no2,no3;
var count;
var count1;
var qArrays = [];
var qArrays1 = [];
var qArrays2 = [];
var graphics;
var numGroup;
var selectedAns = "";
var rightAns = "";
var mainSprite;
var tapeXPos = 0;
var tapeYPos = 0;
var speaker;
var enterTxt;

var noofAttempts;
var timer;
var AnsTimerCount;
Game.grade2_4Alevel1.prototype={
	create:function(game){
        
		noofAttempts=0;
		AnsTimerCount=0;
		
        no1=0;
        no2=0;
        no3=0;
        
        qArrays = [1,2,3,4,5,6,7,8];
        qArrays1 = [11,12,13,14,15,16,17,18];
        qArrays2 = [9,10];
        qArrays = this.shuffle(qArrays);
        qArrays1 = this.shuffle(qArrays1);
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
			var click = this.add.audio('ClickSound');
            click.play();
			selectedAns = "";
            enterTxt.setText("");
			this.state.start('grade3levelSelectionScreen'); 
			},this);

       speaker = this.add.sprite(908,1,'CommonSpeakerBtn');
      /* speaker = this.add.button(908,1,'CommonSpeakerBtn',function(){
		   var click = this.add.audio('ClickSound');
            click.play();
			this.getVoice(no1);
		},this,1,0,2);*/
        
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
		
        speaker.inputEnabled=true;     
        speaker.input.useHandCursor = true;
    	////console.log("get"+no1);
        var q = 0;
        
        if(no1<4)
        {
            //console.log("if");
            q = qArrays[no1]; 
            no1++;
        }
        else if(no1>3&&no1<8)
        {
            //console.log("else")
            q = qArrays1[no2]; 
            no1++;
            no2++;
        }
        else
        {
            //console.log("in here qq"+no3);
            q = qArrays2[no3];
            no1++;
            no3++;
        }
        //console.log("getq=="+q);
    	switch(q)      
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
            case 7: this.gotoSeventhQuestion();
    				break;
            case 8: this.gotoEighthQuestion();
    				break;
            case 9: this.gotoNinthQuestion();
    				break;
            case 10: this.gotoTenthQuestion();
    				break;
            case 11: this.gotoEleventhQuestion();
    				break;
            case 12: this.gotoTwevelvethQuestion();
    				break;
            case 13: this.gotoThirteenthQuestion();
    				break;
            case 14: this.gotoFourteenthQuestion();
    				break;
            case 15: this.gotoFifteenthQuestion();
    				break;
            case 16: this.gotoSixteenthQuestion();
    				break;
            case 17: this.gotoSeventeenthQuestion();
    				break;
            case 18: this.gotoEightteenthQuestion();
    				break;
    	}
    },
     
   
    removeEverthing:function() 
    {
        this.stopVoice();
        numGroup.destroy();
        objGroup.destroy();
        selectedAns="";
        tapePos = 0;
        if(no1<6)
        {
            count =0;
            //no1++;
           // no2++;
            this.getQuestion();    
        }
        else
        {
            this.stopVoice();
           // //console.log("gameover");
            this.state.start('grade2_4AScore');
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
            
            ClickSound.play();
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
			
            if(selectedAns==rightAns||selectedAns=="0"+rightAns||selectedAns=="00"+rightAns)  
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
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    objGroup.getByName('tape15cm').frame = 1;
                    objGroup.getByName('tape15cm').frameName = rightAns;
                    //mainSprite.frame = 1;
                    var anim = mainSprite.animations.add('glow');
                    anim.play(12);
                    celebr.play();
                    var starAnim = starsGroup.getChildAt(count1);
                   // //console.log(starAnim);
                    starAnim.smoothed = false;
                    var anim4 = starAnim.animations.add('star');
                    anim4.play();
                    anim.onComplete.add(function(){this.removeEverthing();},this);
                   // this.time.events.add(3000, function(){this.removeEverthing();},this);
                    count1++;
                }
            else
                {
					noofAttempts++;
                    //console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    shake.shake(10, mainSprite);
                    waudio.play(); 
                    //aiyoh.play(); 
                    objGroup.getByName('tape15cm').x = tapeXPos;
                    objGroup.getByName('tape15cm').y = tapeYPos;
                   
                }
        },this);
    },
    
    
    numClicked:function(target){
        ////console.log(target.name);
       // target.frame = 1;
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
        
       // //console.log(selectedAns);
        
    },
    
    
    gotoFirstQuestion:function(){
        //console.log("qno=="+no1);
         this.stopVoice();
         this.getVoice(1);
        speaker.events.onInputDown.add(function(){
            this.getVoice(1);
        },this);
         this.addNumberPad();
        

        objGroup = this.add.group();
    
        mainSprite = this.add.sprite(560,192,'Level24A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
      
        rightAns = "7";
        
        var tape15cm = this.add.sprite(320,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);                    
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        tapeXPos = tape15cm.x;
        tapeYPos = tape15cm.y;
        
        tape15cm.events.onInputDown.add(function(target){
       // //console.log(target.x);
            
			ClickSound.play();
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
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true; 
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		ClickSound.play();
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
            
           
            ////console.log(this.input.x);
            
            if(this.input.x>=720)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 707;
            }
            else if(this.input.x<=300)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 320;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 220;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(220,361,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
     },
    
    gotoSecondQuestion:function(){
        //console.log("qno=="+no1);
        this.stopVoice();
        this.getVoice(2);
        speaker.events.onInputDown.add(function(){
            this.getVoice(2);
        },this);
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(670,250,'Level24A_clip');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "3";
        
        var tape15cm = this.add.sprite(550,377,'Level24A_tape15cm');
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
			
			
       // //console.log(target.x);
        target.x = this.input.x;
            
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
            
            ////console.log(this.input.x);
            
            if(this.input.x>=730)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 711;
            }
            else if(this.input.x<=540)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 550;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    slideSound.onStop.add(function(){/*//console.log("sound complete");*/},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 450;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(450,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoThirdQuestion:function(){
        //console.log("qno=="+no1);
        this.stopVoice();
        this.getVoice(3);
        speaker.events.onInputDown.add(function(){
            this.getVoice(3);
        },this);
      	this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(540,220,'Level24A_fish');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "9";
        
        var tape15cm = this.add.sprite(320,377,'Level24A_tape15cm');
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
       // //console.log(target.x);
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
            
            ////console.log(this.input.x);
            
            if(this.input.x>=730)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 717;
            }
            else if(this.input.x<=300)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 320;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 220;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(220,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    }, 
    
    gotoFourthQuestion:function(){
        //console.log("qno=="+no1);
        this.stopVoice();
        
         this.getVoice(4);
       speaker.events.onInputDown.add(function(){
            this.getVoice(4);
        },this);
      	 this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(620,250,'Level24A_pencil');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "5";
        
         var tape15cm = this.add.sprite(500,377,'Level24A_tape15cm');
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
       // //console.log(target.x);
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
            
            ////console.log(this.input.x);
            
            if(this.input.x>=730)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 710;
            }
            else if(this.input.x<=480)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 500;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                   // slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 400;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(800, 0);   
        mask.lineTo(800, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(400,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoFifthQuestion:function(){
        //console.log("qno=="+no1);
        this.stopVoice();
         this.getVoice(5);
        speaker.events.onInputDown.add(function(){
            this.getVoice(5);
        },this);
      	 this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(580,230,'Level24A_screwDriver');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "14";
        
         var tape15cm = this.add.sprite(235,377,'Level24A_tape15cm');
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
       // //console.log(target.x);
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
            
            ////console.log(this.input.x);
            
            if(this.input.x>=890)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 880;
            }
            else if(this.input.x<=220)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 235;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
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
        
        var tapeRoll = this.add.sprite(130,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
  
    gotoSixthQuestion:function(){
        //console.log("qno=="+no1);
        this.stopVoice();
        this.getVoice(6);
        speaker.events.onInputDown.add(function(){
            this.getVoice(6);
        },this);
       this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(600,240,'Level24A_key');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        //mainSprite.width -= 8;
        
        rightAns = "4";
        
         var tape15cm = this.add.sprite(445,377,'Level24A_tape15cm');
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
       // //console.log(target.x);
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
            
            ////console.log(this.input.x);
            
            if(this.input.x>=680)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 662;
            }
            else if(this.input.x<=430)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 445;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 340;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(800, 0);   
        mask.lineTo(800, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(340,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
     
    gotoSeventhQuestion:function(){
        //console.log("qno=="+no1);
        this.stopVoice();
        this.getVoice(7);
        speaker.events.onInputDown.add(function(){
            this.getVoice(7);
        },this);
         this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(560,230,'Level24A_watch');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;
        
        rightAns = "8";
        
         var tape15cm = this.add.sprite(360,377,'Level24A_tape15cm');
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
       // //console.log(target.x);
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
            
            ////console.log(this.input.x);
            
            if(this.input.x>=730)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 710;
            }
            else if(this.input.x<=340)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 360;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 250;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(250,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },

    
    gotoEighthQuestion:function(){
        //console.log("qno=="+no1);
        this.stopVoice();
         this.getVoice(8);
        speaker.events.onInputDown.add(function(){
			
            this.getVoice(8);
        },this);
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(630,230,'Level24A_pen');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 5;
        
        rightAns = "12";
        
         var tape15cm = this.add.sprite(220,377,'Level24A_tape15cm');
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
       // //console.log(target.x);
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
            
            ////console.log(this.input.x);
            
            if(this.input.x>=890)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 873;
            }
            else if(this.input.x<=200)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.x = 220;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 110;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(110,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
 
    
    
    gotoNinthQuestion:function(){
        //console.log("qno=="+no3);
    this.stopVoice();
     this.getVoice(9);
       speaker.events.onInputDown.add(function(){
            this.getVoice(9);
        },this);
     this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(560,260,'Level24A_scale1');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 7;
        
        rightAns = "15";
        
         var tape15cm = this.add.sprite(220,377,'Level24A_tape15cm');
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
       // //console.log(target.x);
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
            
            ////console.log(this.input.x);
            
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
                target.x = 220;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
        var mask = this.add.graphics();
        mask.position.x = 110;   
        mask.position.y = 250;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(900, 0);   
        mask.lineTo(900, 200);   
        mask.lineTo(0, 200);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;
        
        var tapeRoll = this.add.sprite(110,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
       objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
        
    gotoTenthQuestion:function(){
        //console.log("qno=="+no3);
        this.stopVoice();
        this.getVoice(10);
       speaker.events.onInputDown.add(function(){
            this.getVoice(10);
        },this);
       this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(538,255,'Level24A_scale2');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 14;
        
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
            
       // //console.log(target.x);
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
            
            ////console.log(this.input.x);
            
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
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
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
    
    gotoEleventhQuestion:function(){
        //console.log("qno=="+no2);
        this.stopVoice();
         this.getVoice(11);
       speaker.events.onInputDown.add(function(){
            this.getVoice(11);
        },this);
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(505,348,'Level24A_shoe2');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width += 10;
        mainSprite.height += 50;
        
        rightAns = "40";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);        
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
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

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
            
            ////console.log(this.input.x);
            
            if(this.input.y>=295)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 285;
            }
            else if(this.input.y<=120)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                   // slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
       
    gotoTwevelvethQuestion:function(){
        //console.log("qno=="+no2);
        this.stopVoice();
         this.getVoice(12);
        speaker.events.onInputDown.add(function(){
            this.getVoice(12);
        },this);
    this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(490,326,'Level24A_bat');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "60";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);      
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
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

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
            
            ////console.log(this.input.x);
            
            if(this.input.y>=235)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 222;
            }
            else if(this.input.y<=120)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoThirteenthQuestion:function(){
        //console.log("qno=="+no2);
        this.stopVoice();
         this.getVoice(13);
        speaker.events.onInputDown.add(function(){
            this.getVoice(13);
        },this);
    this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(500,405,'Level24A_cup');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "10";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);       
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
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

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
            
            ////console.log(this.input.x);
            
            if(this.input.y>=385)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 374;
            }
            else if(this.input.y<=120)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoFourteenthQuestion:function(){
        //console.log("qno=="+no2);
        this.stopVoice();
        this.getVoice(14);
        speaker.events.onInputDown.add(function(){
            this.getVoice(14);
        },this);
       this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(500,362,'Level24A_jug');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "30";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);       
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
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

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
            
            ////console.log(this.input.x);
            
            if(this.input.y>=325)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 315;
            }
            else if(this.input.y<=120)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoFifteenthQuestion:function(){
        //console.log("qno=="+no2);
        this.stopVoice();
         this.getVoice(15);
        speaker.events.onInputDown.add(function(){
            this.getVoice(15);
        },this);
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(510,302,'Level24A_chair');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "70";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);        
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
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

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
            
            ////console.log(this.input.x);
            
            if(this.input.y>=200)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 192;
            }
            else if(this.input.y<=120)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    
    gotoSixteenthQuestion:function(){
        //console.log("qno=="+no2);
        this.stopVoice();
        this.getVoice(16);
        speaker.events.onInputDown.add(function(){
            this.getVoice(16);
        },this);
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(500,380,'Level24A_mug');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "20";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);       
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
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

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
            
            ////console.log(this.input.x);
            
            if(this.input.y>=355)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 345;
            }
            else if(this.input.y<=120)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    }, 
    
    gotoSeventeenthQuestion:function(){
        //console.log("qno=="+no2);
        this.stopVoice();
        this.getVoice(17);
        speaker.events.onInputDown.add(function(){
            this.getVoice(17);
        },this);
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(510,332,'Level24A_table');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "50";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);        
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
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

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
            
            ////console.log(this.input.x);
            
            if(this.input.y>=265)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 254;
            }
            else if(this.input.y<=120)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
    },
    
    gotoEightteenthQuestion:function(){
        //console.log("qno=="+no2);
        this.stopVoice();
        this.getVoice(18);
        speaker.events.onInputDown.add(function(){
            this.getVoice(18);
        },this);
        this.addNumberPad();
        objGroup = this.add.group();
        mainSprite = this.add.sprite(540,272,'Level24A_pot');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 10;
        
        rightAns = "90";
        
         var tape15cm = this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);        
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
			
        target.y = this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

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
            
            ////console.log(this.input.x);
            
            if(this.input.y>=140)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 131;
            }
            else if(this.input.y<=120)
            {
                snapSound.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    ClickSound.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},this);
                }
            }
            
        },this); 
            
            
        },this);
        
       
        
       /* var mask = this.add.graphics();
        mask.position.x = 90;   
        mask.position.y = 280;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(860, 0);   
        mask.lineTo(860, 100);   
        mask.lineTo(0, 100);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        tape15cm.mask = mask;*/
        
        var tapeRoll = this.add.sprite(this.world.centerX+20,this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       objGroup.add(mainSprite);
       objGroup.add(tape15cm);
      // objGroup.add(mask);
       objGroup.add(tapeRoll);
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
    
    getVoice:function(question){
        this.stopVoice();
        switch(question)
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:if(window.languageSelected=="English")
                        Eng_24A1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_24A1.play();
                    else
                        Kan_24A1.play();
                    break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:if(window.languageSelected=="English")
                        Eng_24B1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_24B1.play();
                    else
                        Kan_24B1.play();
                    break;
            
        }
    },
    
    stopVoice:function(){
        Eng_24A1.stop();
        Hin_24A1.stop();
        Kan_24A1.stop();
        Eng_24B1.stop();
        Hin_24B1.stop();
        Kan_24B1.stop();
    }

};