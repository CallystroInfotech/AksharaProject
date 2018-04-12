Game.grade2_4Alevel1=function(){};


Game.grade2_4Alevel1.prototype={

     init:function(game)
    {
        _this = this;
        
        _this.gameid = "2.4A";
        
        _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);
        

    },


	create:function(game){
        
		_this.noofAttempts=0;
        _this.AnsTimerCount=0;
        _this.sceneCount = 0;


        _this.selectedAns="";
		_this.q = 0;
        _this.no1=0;
        _this.no2=0;
        _this.no3=0;
        
        _this.qArrays = [1,2,3,4,5,6,7,8];
        _this.qArrays1 = [11,12,13,14,15,16,17,18];
        _this.qArrays2 = [9,10];
        //_this.qArrays = _this.shuffle(_this.qArrays);
        //_this.qArrays1 = _this.shuffle(_this.qArrays1);
        _this.count=0;
        _this.count1=0;
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);


        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'Level24A_bg1');
		
		_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice(_this.q);
            
        },_this);
        
         _this.generateStarsForTheScene(6);
        
        _this.graphics = _this.add.graphics(0, 400);
		_this.graphics.lineStyle(1, 0xFFFFFF, 0.8);
		_this.graphics.beginFill(0xFF700B, 1);
		_this.graphics.drawRect(0,0,960,120);		
		_this.graphics.boundsPadding = 0;
		_this.graphics.alpha=0;
			      
        
        //_this.no1++;
        _this.getQuestion();

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
	
		 _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

		_this.timer = null;
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function(){
            _this.AnsTimerCount++;
        }, _this);

        //  Start the _this.timer running - _this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
    	////console.log("get"+_this.no1);
        
        
        if(_this.no1<4)
        {
            //console.log("if");
            _this.q = _this.qArrays[_this.no1]; 
            _this.no1++;
        }
        else if(_this.no1>3&&_this.no1<8)
        {
            //console.log("else")
            _this.q = _this.qArrays1[_this.no2]; 
            _this.no1++;
            _this.no2++;
        }
        else
        {
            //console.log("in here qq"+_this.no3);
            _this.q = _this.qArrays2[_this.no3];
            _this.no1++;
            _this.no3++;
        }
        //console.log("getq=="+_this.q);
    	switch(_this.q)      
    	{
    		case 1: _this.gotoFirstQuestion();
    				break;
    		case 2: _this.gotoSecondQuestion();
    				break;
    		case 3: _this.gotoThirdQuestion();
    				break;
    		case 4: _this.gotoFourthQuestion();
    				break;
    		case 5: _this.gotoFifthQuestion();
    				break;
    		case 6: _this.gotoSixthQuestion();
    				break;
            case 7: _this.gotoSeventhQuestion();
    				break;
            case 8: _this.gotoEighthQuestion();
    				break;
            case 9: _this.gotoNinthQuestion();
    				break;
            case 10: _this.gotoTenthQuestion();
    				break;
            case 11: _this.gotoEleventhQuestion();
    				break;
            case 12: _this.gotoTwevelvethQuestion();
    				break;
            case 13: _this.gotoThirteenthQuestion();
    				break;
            case 14: _this.gotoFourteenthQuestion();
    				break;
            case 15: _this.gotoFifteenthQuestion();
    				break;
            case 16: _this.gotoSixteenthQuestion();
    				break;
            case 17: _this.gotoSeventeenthQuestion();
    				break;
            case 18: _this.gotoEightteenthQuestion();
    				break;
    	}
    },
     
   
    removeEverthing:function() 
    {
        _this.stopVoice();
        _this.numGroup.destroy();
        _this.objGroup.destroy();
        _this.selectedAns="";
        tapePos = 0;
        if(_this.no1<6)
        {
            _this.count =0;
            //_this.no1++;
           // _this.no2++;
            _this.getQuestion();    
        }
        else
        {
            _this.stopVoice();
           // //console.log("gameover");
            _this.state.start('grade2_4AScore');
        }
    },
    
    checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
	},
    
    addNumberPad:function(){
        
        _this.numGroup = _this.add.group();
        var x = 120;
        for(var i=0;i<10;i++)
        {
            var numbg = _this.numGroup.create(x,500,'Level24A_numbg');  
            numbg.anchor.setTo(0.5);
            numbg.name = i;
            
            var numTxt = _this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            numTxt.anchor.setTo(0.5);
            numTxt.align = 'center';

            numTxt.font = 'Alte Haas Grotesk';
            numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            numTxt.fill = '#FFFFFF';

            numTxt.setShadow(0, 0,'Level24A_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);
            
            //numbg.name = "Level24A_numberBtn"+i;
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(_this.numClicked,_this);
            
            x+=50;
        }
        var txtbox = _this.add.sprite(x+50,500,'Level24A_txtbox');
        txtbox.anchor.setTo(0.5);
        txtbox.name = "txtbox";
        
        var wrongbtn = _this.numGroup.create(x+120,500,'Level24A_wrongBtn');
        wrongbtn.anchor.setTo(0.5);
        wrongbtn.name = "Level24A_crossgbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = _this.numGroup.create(x+170,500,'Level24A_rightBtn');
        rightbtn.anchor.setTo(0.5);
        rightbtn.name = "Level24A_tickbtn";
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        
        _this.enterTxt = _this.add.text(-2,1, _this.selectedAns);
            //titletext.scale.setTo(1.5);
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';

        _this.enterTxt.font = 'Alte Haas Grotesk';
        _this.enterTxt.fontSize = 24;
            //text.fontWeight = 'bold';
        _this.enterTxt.fill = '#65B4C3';

        _this.enterTxt.setShadow(0, 0,'Level24A_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(_this.enterTxt);
        _this.numGroup.add(txtbox);
        
        
        wrongbtn.events.onInputDown.add(function(target){
            _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/

             _this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
                { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
                } 
                
            absdsjsapi.saveInteractEvent(_this.interactEvent);


			_this.enterTxt.setText("");_this.selectedAns="";},_this);
        
        rightbtn.events.onInputDown.add(function(target){
            
            _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/

            _this.noofAttempts++;
        
            _this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
                { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
                } 
                
            absdsjsapi.saveInteractEvent(_this.interactEvent);
			
            if(_this.selectedAns==_this.rightAns||_this.selectedAns=="0"+_this.rightAns||_this.selectedAns=="00"+_this.rightAns)  
                {
					/*_this.timer.stop();
					_this.timer = null; 
					_this.noofAttempts++;
				var currentTime = window.timeSaveFunc();
						var saveAsment = 
						{ 
							id_game_play: window.gameid,
							id_question: window.gameid,  
							answer_given: "Yes",
							time2answer: _this.AnsTimerCount,
							attempts: _this.noofAttempts,
							date_time_event: currentTime, 
							access_token: window.acctkn 
						}
				_this.AnsTimerCount=0;	
				absdsjsapi.saveAssessment(saveAsment);*/

                if(_this.timer)
                {
                    _this.timer.stop();
                    _this.timer = null;
                }
                
                _this.currentTime = window.timeSaveFunc();
                _this.saveAsment = 
                { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid,  
                    pass: "yes",
                    time2answer: _this.AnsTimerCount,
                    attempts: _this.noofAttempts,
                    date_time_submission: _this.currentTime, 
                    access_token: window.acctkn 
                }
                    
                absdsjsapi.saveAssessment(_this.saveAsment);
		
                    _this.speakerbtn.inputEnabled=false;
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    _this.objGroup.getByName('tape15cm').frame = 1;
                    _this.objGroup.getByName('tape15cm').frameName = _this.rightAns;
                    //_this.mainSprite.frame = 1;
                    var anim = _this.mainSprite.animations.add('glow');
                    anim.play(12);

                    _this.cmusic1 = _this.add.audio('celebr');
                    _this.cmusic1.play();

                    var starAnim = _this.starsGroup.getChildAt(_this.count1);
                   // //console.log(starAnim);
                    starAnim.smoothed = false;
                    var anim4 = starAnim.animations.add('star');
                    anim4.play();
                    anim.onComplete.add(function(){_this.removeEverthing();},_this);
                   // _this.time.events.add(3000, function(){_this.removeEverthing();},_this);
                    _this.count1++;
                }
            else
                {
					_this.noofAttempts++;
                    //console.log("wrong");
                    _this.selectedAns = "";
                    _this.enterTxt.setText("");
                    shake.shake(10, _this.mainSprite);
                   _this.wmusic1 = _this.add.audio('waudio');
                    _this.wmusic1.play();
                    //aiyoh.play(); 
                    _this.objGroup.getByName('tape15cm').x = _this.tapeXPos;
                    _this.objGroup.getByName('tape15cm').y = _this.tapeYPos;
                   
                }
        },_this);
    },
    
    
    numClicked:function(target){
        ////console.log(target.name);
       // target.frame = 1;
	  /* var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
       // _this.click1 = _this.add.audio('ClickSound');

       _this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
                { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: "Level24A_NumberBtn"+target.name, 
                    access_token: window.acctkn 
                } 
                
            absdsjsapi.saveInteractEvent(_this.interactEvent);

        _this.click1.play();
        if(_this.selectedAns.length<3)
        {
            _this.selectedAns += target.name;
            _this.numGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns);
        }
        
       // //console.log(_this.selectedAns);
        
    },
    
    
    gotoFirstQuestion:function(){
		
		_this.questionid = "2.4A1#SCR-"+_this.sceneCount;
		
        //console.log("qno=="+_this.no1);
        
         _this.getVoice(1);
       
         _this.addNumberPad();
        

        _this.objGroup = _this.add.group();
    
        _this.mainSprite = _this.add.sprite(560,192,'Level24A_shoe');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 8;
        
      
        _this.rightAns = "7";
        
        var tape15cm = _this.add.sprite(320,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);                    
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;
        
        tape15cm.events.onInputDown.add(function(target){
       // //console.log(target.x);
            
			 _this.ClickSound = _this.add.audio('ClickSound');
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();

			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
        target.x = _this.input.x;
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true; 
        tape15cm.events.onDragStart.add(function(target){dragSound = true;

        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();

			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/

             _this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
                { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "Level24A_measuringScale", 
                    access_token: window.acctkn 
                } 
                
            absdsjsapi.saveInteractEvent(_this.interactEvent);


			},_this);
			
        tape15cm.events.onDragStop.add(function(target){

           _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();

			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
            _this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
                { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,  
                    date_time_event: _this.currentTime, 
                    event_type: "drop", 
                    res_id: "Level24A_measuringScale", 
                    access_token: window.acctkn 
                } 
                
            absdsjsapi.saveInteractEvent(_this.interactEvent);
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
           
            ////console.log(_this.input.x);
            
            if(_this.input.x>=720)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 707;
            }
            else if(_this.input.x<=300)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 320;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
                    _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
        var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(220,361,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
       _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
     },
    
    gotoSecondQuestion:function(){
		
		_this.questionid = "2.4A1#SCR-"+_this.sceneCount;
		
        //console.log("qno=="+_this.no1);
       
        _this.getVoice(2);
       
        _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(670,250,'Level24A_clip');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 8;
        
        _this.rightAns = "3";
        
        var tape15cm = _this.add.sprite(550,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        tape15cm.name = "tape15cm";
        _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
			
       // //console.log(target.x);
        target.x = _this.input.x;
            
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;
        
         var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this); 
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop",
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.x>=730)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 711;
            }
            else if(_this.input.x<=540)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 550;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){/*//console.log("sound complete");*/},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
        var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(450,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
       _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
    
    gotoThirdQuestion:function(){
		
		_this.questionid = "2.4A1#SCR-"+_this.sceneCount;
		
        //console.log("qno=="+_this.no1);
       
        _this.getVoice(3);
        
      	_this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(540,220,'Level24A_fish');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 8;
        
        _this.rightAns = "9";
        
        var tape15cm = _this.add.sprite(320,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
            
            target.x = _this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;
        
        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this); 
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.x>=730)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 717;
            }
            else if(_this.input.x<=300)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 320;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
        var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(220,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
       _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    }, 
    
    gotoFourthQuestion:function(){
				
		_this.questionid = "2.4A1#SCR-"+_this.sceneCount;
		
        //console.log("qno=="+_this.no1);
        
        
         _this.getVoice(4);

      	 _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(620,250,'Level24A_pencil');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 10;
        
        _this.rightAns = "5";
        
         var tape15cm = _this.add.sprite(500,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
            
        target.x = _this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;
        
        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.x>=730)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 710;
            }
            else if(_this.input.x<=480)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 500;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                   // slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
        var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(400,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
       _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
    
    gotoFifthQuestion:function(){
				
		_this.questionid = "2.4A1#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no1);
       
         _this.getVoice(5);
       
      	 _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(580,230,'Level24A_screwDriver');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 8;
        
        _this.rightAns = "14";
        
         var tape15cm = _this.add.sprite(235,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
            
            target.x = _this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.x>=890)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 880;
            }
            else if(_this.input.x<=220)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 235;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
        var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(130,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
       _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
    
  
    gotoSixthQuestion:function(){
				
		_this.questionid = "2.4A1#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no1);
        
        _this.getVoice(6);
       
       _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(600,240,'Level24A_key');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        //_this.mainSprite.width -= 8;
        
        _this.rightAns = "4";
        
         var tape15cm = _this.add.sprite(445,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
            
            target.x = _this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this); 
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.x>=680)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 662;
            }
            else if(_this.input.x<=430)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 445;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
        var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(340,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
       _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
     
    gotoSeventhQuestion:function(){
				
		_this.questionid = "2.4A1#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no1);
       
        _this.getVoice(7);
        
         _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(560,230,'Level24A_watch');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 8;
        
        _this.rightAns = "8";
        
         var tape15cm = _this.add.sprite(360,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
            
            target.x = _this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;
            
        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this); 
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.x>=730)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 710;
            }
            else if(_this.input.x<=340)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 360;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
        var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(250,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
       _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },

    
    gotoEighthQuestion:function(){
				
		_this.questionid = "2.4A1#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no1);
        
         _this.getVoice(8);
       
        _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(630,230,'Level24A_pen');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 5;
        
        _this.rightAns = "12";
        
         var tape15cm = _this.add.sprite(220,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
            
            target.x = _this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.x>=890)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 873;
            }
            else if(_this.input.x<=200)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 220;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
        var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(110,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
       _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
 
    
    
    gotoNinthQuestion:function(){
				
		_this.questionid = "2.4A1#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no3);
    
     _this.getVoice(9);
      
     _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(560,260,'Level24A_scale1');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 7;
        
        _this.rightAns = "15";
        
         var tape15cm = _this.add.sprite(220,377,'Level24A_tape15cm');
        tape15cm.anchor.setTo(0.93,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
            target.x = _this.input.x;
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);   
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.x>=900)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 880;
            }
            else if(_this.input.x<=210)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 220;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
        var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(110,360,'Level24A_tape1');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
       _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
    
        
    gotoTenthQuestion:function(){
		
		_this.questionid = "2.4A1#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no3);
       
        _this.getVoice(10);
       
       _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(538,255,'Level24A_scale2');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 14;
        
        _this.rightAns = "30";
        
        var tape15cm = _this.add.sprite(150,340,'Level24A_tape30cm');
        tape15cm.anchor.setTo(0.95,1);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
            target.x = _this.input.x;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowVerticalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this); 
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.x>=920)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 903;
            }
            else if(_this.input.x<=130)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.x = 150;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
        var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(90,320,'Level24A_tape2');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
       _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
    
    gotoEleventhQuestion:function(){
		
		_this.questionid = "2.4A2#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no2);
        
         _this.getVoice(11);
      
        _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(505,348,'Level24A_shoe2');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width += 10;
        _this.mainSprite.height += 50;
        
        _this.rightAns = "40";
        
         var tape15cm = _this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
        target.y = _this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);   
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.y>=295)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 285;
            }
            else if(_this.input.y<=120)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                   // slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
       /* var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(_this.world.centerX+20,_this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
      // _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
       
    gotoTwevelvethQuestion:function(){
		
		_this.questionid = "2.4A2#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no2);
        
         _this.getVoice(12);
       
        _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(490,326,'Level24A_bat');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 10;
        
        _this.rightAns = "60";
        
         var tape15cm = _this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);      
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
        target.y = _this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.y>=235)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 222;
            }
            else if(_this.input.y<=120)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
       /* var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(_this.world.centerX+20,_this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
      // _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
    
    gotoThirteenthQuestion:function(){
		
		_this.questionid = "2.4A2#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no2);
       
         _this.getVoice(13);
        
        _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(500,405,'Level24A_cup');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 10;
        
        _this.rightAns = "10";
        
         var tape15cm = _this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);       
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
        target.y = _this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this); 
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.y>=385)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 374;
            }
            else if(_this.input.y<=120)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
       /* var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(_this.world.centerX+20,_this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
      // _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
    
    gotoFourteenthQuestion:function(){
		
		_this.questionid = "2.4A2#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no2);
       
        _this.getVoice(14);
        
       _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(500,362,'Level24A_jug');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 10;
        
        _this.rightAns = "30";
        
         var tape15cm = _this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);       
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
        target.y = _this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this); 
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.y>=325)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 315;
            }
            else if(_this.input.y<=120)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
       /* var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(_this.world.centerX+20,_this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
      // _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
    
    gotoFifteenthQuestion:function(){
		
		_this.questionid = "2.4A2#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no2);
        
         _this.getVoice(15);
        
        _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(510,302,'Level24A_chair');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 10;
        
        _this.rightAns = "70";
        
         var tape15cm = _this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
        target.y = _this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		      /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.y>=200)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 192;
            }
            else if(_this.input.y<=120)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
       /* var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(_this.world.centerX+20,_this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
      // _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
    
    
    gotoSixteenthQuestion:function(){
		
		_this.questionid = "2.4A2#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no2);
       
        _this.getVoice(16);
       
        _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(500,380,'Level24A_mug');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 10;
        
        _this.rightAns = "20";
        
         var tape15cm = _this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);       
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
        target.y = _this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.y>=355)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 345;
            }
            else if(_this.input.y<=120)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
       /* var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(_this.world.centerX+20,_this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
      // _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    }, 
    
    gotoSeventeenthQuestion:function(){
		
		_this.questionid = "2.4A2#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no2);
        
        _this.getVoice(17);
        
        _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(510,332,'Level24A_table');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 10;
        
        _this.rightAns = "50";
        
         var tape15cm = _this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
         _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
        target.y = _this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.y>=265)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 254;
            }
            else if(_this.input.y<=120)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
       /* var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(_this.world.centerX+20,_this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
      // _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
    
    gotoEightteenthQuestion:function(){
		
		_this.questionid = "2.4A2#SCR-"+_this.sceneCount;
        //console.log("qno=="+_this.no2);
       
        _this.getVoice(18);
       
        _this.addNumberPad();
        _this.objGroup = _this.add.group();
        _this.mainSprite = _this.add.sprite(540,272,'Level24A_pot');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 10;
        
        _this.rightAns = "90";
        
         var tape15cm = _this.add.sprite(510,130,'Level24A_scaleMarkerNew');
        tape15cm.anchor.setTo(0.5);        
        tape15cm.inputEnabled = true;
        
        tape15cm.name = "tape15cm";
        _this.tapeXPos = tape15cm.x;
        _this.tapeYPos = tape15cm.y;

        tape15cm.events.onInputDown.add(function(target){
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
        target.y = _this.input.y;
            
       // //console.log(target.x);
        tape15cm.input.enableDrag();
        tape15cm.input.allowHorizontalDrag = false;

        var dragSound = true;
        tape15cm.events.onDragStart.add(function(target){dragSound = true;
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this); 
        tape15cm.events.onDragStop.add(function(target){ _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
		  /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);*/
			},_this);
        tape15cm.events.onDragUpdate.add(function(target){
            
            ////console.log(_this.input.x);
            
            if(_this.input.y>=140)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 131;
            }
            else if(_this.input.y<=120)
            {
               _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
                tape15cm.input.draggable = false;
                target.y = 130;    
            }
            else
            {
                if(dragSound)
                {
                    dragSound = false;
                    _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play(); 
                    //slideSound.onStop.add(function(){//console.log("sound complete");},_this);
                }
            }
            
        },_this); 
            
            
        },_this);
        
       
        
       /* var mask = _this.add.graphics();
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
        
        var tapeRoll = _this.add.sprite(_this.world.centerX+20,_this.world.centerY-20,'Level24A_scaleNew');
        tapeRoll.anchor.setTo(0.5);
        
       _this.objGroup.add(_this.mainSprite);
       _this.objGroup.add(tape15cm);
      // _this.objGroup.add(mask);
       _this.objGroup.add(tapeRoll);
    },
    
   
    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            _this.starsGroup.create(_this.world.centerX-15, 10, 'CommonStarAnim');
            
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=15;
                    _this.starsGroup.getChildAt(i).x+=15;
                }
            }
        }                       
    },
    
    /*getVoice:function(question){
        _this.stopVoice();
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
    },*/

    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
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
            case 10:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/2.4A/English/2.4A1.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/2.4A/Hindi/2.4A1.mp3");
                        }
                        else
                        {
                            _this.src.setAttribute("src", "questionSounds/2.4A/Kannada/2.4A1.mp3");
                        }
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/2.4A/English/2.4B1.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/2.4A/Hindi/2.4B1.mp3");
                        }
                        else
                        {
                            _this.src.setAttribute("src", "questionSounds/2.4A/Kannada/2.4B1.mp3");
                        }
            
        }


        
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
       
    },
    
    stopVoice:function()
    {     

        if(_this.playQuestionSound)
        {
            if(_this.playQuestionSound.contains(_this.src))
            {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if(!_this.playQuestionSound.paused)
            {
                 console.log("stop"); 
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
        }
            
        if(_this.celebrationSound)
        {
            if(_this.celebrationSound.isPlaying)
            {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }
    },
    
    shutdown:function()
    {
        _this.stopVoice();
    }



};