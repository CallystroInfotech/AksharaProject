Game.unity2_3_1level1=function(){};

Game.unity2_3_1level1.prototype ={
    
    init:function(game)
    {
        _this= this;
        telInitializer.gameIdInit("sequence2_3_1",gradeSelected);
    },
    
	create:function(game)
    {
		_this.amplify = null;
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.CaterpillarGrp;
        //_this.correct;

         _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount=0;
        
        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        
        _this.background;
        _this.click3;
        
        _this.click4;
        _this.rightCount ;
        
        _this.opt1;
        _this.opt2;
        _this.opt3;
        
        _this.wmusic;
        _this.wrong = true;
        _this.count;
        _this.clickSound;
        _this.change = 0;
      
        _this.starsGroup;
        _this.backgrd1;
        _this.backgrd2;
        _this.backgrd3;
        
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        
        _this.qArrays = [1,2,3,4,5,6];
        
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity2_3_1BG_01');
        
        _this.navBar = _this.add.sprite(0,0,'Unity2_3_1navBar');
        _this.navBar.scale.setTo(1,1);
        
        _this.backbtn = _this.add.button(5,5,'Unity2_3_1backbtn',function(){ 
               _this.backbtn.events.onInputDown.removeAll();
               _this.stopVoice();
               _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
               _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this,0,1,2);
        
        _this.speakerbtn = _this.add.sprite(600,5,'Unity2_3_1CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function()
        {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();
        },_this);
        
        _this.timebg = _this.add.sprite(300,5,'Unity2_3_1timebg');
        /*_this.topicOutline = _this.add.sprite(70,5,'Unity2_3_1topicOutline');
        _this.practice = _this.add.sprite(78,10,'Unity2_3_1practice');
        _this.topic = _this.add.sprite(165,10,'Unity2_3_1topic');*/
        
        _this.timeDisplay = _this.add.text(325,20,_this.minutes + ' : '+ _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';
        
        _this.generateStarsForTheScene(6);
        _this.getQuestion();
    
        //language selection sounds
        _this.getVoice();
    },
    
    updateTimer:function() 
    {
        _this.counterForTimer++;
        ////console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes =  _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes =  _this.minutes+1;
            }
        }
        else
        {
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
    },
    
    shuffle: function(array) 
    {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        {
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
    	//console.log("getQuestion :"+_this.no11);
        //console.log("getQuestion :"+_this.qArrays[_this.no11]);
        
        

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
        {
            _this.AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function()
        {
            _this.updateTimer();
        }, _this);
        
        _this.timer1.start();
        
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
       
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        
        _this.questionid = 1;
        
        //_this.no11 = 0;
        
    	switch(_this.qArrays[_this.no11])
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
    	}
        
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
                //console.log("here");
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
		if(_this.amplify!=null)
		{
			_this.amplify.context.close();
			_this.amplify = null;
		}
    },
    
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		for (var i = 0; i < count; i++)
		{
			_this.starsGroup.create(_this.world.centerX-15, 10, 'Unity2_3_1starAnim');
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

    addQuestion:function(no22)
    {
        //console.log("addQuestion");
        _this.time.events.add(900, function(){
            var tween = _this.add.tween(flagGroup1);
            tween.to({ x: -1000 }, 0, 'Linear', true, 0);
            tween.onComplete.add(_this.changeQuestion, _this);

        }, _this);
    },
    
    onDragStart:function(target)
    {
       //console.log("onDragStart");
        
       // _this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level2.3.1_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        // _this.currentTime = window.timeSaveFunc();
        _this.saveAsment = 
        { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            pass: "yes",
            time2answer: _this.AnsTimerCount,
            attempts: _this.noofAttempts,
            date_time_submission: _this.currentTime, 
            access_token: window.acctkn 
        }

        //absdsjsapi.saveAssessment(_this.saveAsment);

       
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        
        target.input.enableDrag(true);
        _this.click1 = this.add.audio('ClickSound');
        _this.click1.play();

        target.events.onDragStop.add(function(target)
        {
            //console.log("target.key:"+target.key);
           
            for(var i=0;i<_this.whiteGroup.length;i++)
            {
                if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_3_1Caterpillar_body3'))
                { 
                    //console.log("target.name:"+target.name);
                    
                    _this.change++;
                    //console.log("change value :"+_this.change);
                    
                    _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);
                    
                    _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                    _this.text.font = "myfont";
                    _this.text.fill = "#ffffff";
                    _this.text.fontWeight = 'normal';
                    _this.text.anchor.set(0.5);
                    _this.text.fontSize = 90;
                    _this.whiteGroup.getChildAt(i).addChild(_this.text);
                    
                    target.visible = false;
                    //console.log("inputadded here");
                    
                    _this.whiteGroup.getChildAt(i).inputEnabled = true; 
                    _this.whiteGroup.getChildAt(i).input.useHandCursor = true;
                    _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder,_this);
                    target.events.onInputDown.removeAll(); 
                    break;
                }
            }
            
            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
            
            if( _this.change>=3)
            {
                _this.opt1.inputEnabled = true;
                //_this.opt1.input.useHandCursor = true;
            }

        },_this);
          
    },
    
    checkFortheRightOrder :function(target)
    {
        //console.log("Drag out function");
        //console.log("check target.key:"+target.key);
        
        _this.vx = target.x;   
        _this.vy = target.y;
        
        //console.log("xxxxxxxxxxxxxx "+_this.vx)
        //console.log("yyyyyyyyyyyyyy "+_this.vy)
        //console.log("target.text "+target.getChildAt(0).text);
        
        target.input.enableDrag();
        target.events.onDragStop.add(this.dragStop,_this);
        
    },
    
    dragStop:function(target)
    {
        //console.log("drag stop here");

        for(var i=0;i<_this.whiteGroup.length;i++)
        {
            if(_this.checkOverlap(target,_this.CaterpillarWhite.getChildAt(i)) && (_this.whiteGroup.getChildAt(i).key == 'Unity2_3_1Caterpillar_body3'))
            { 
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.whiteGroup.getChildAt(i).loadTexture(target.key,0,false);

                _this.text = this.add.text(0, 0, target.getChildAt(0).text);
                _this.text.font = "myfont";
                _this.text.fill = "#ffffff";
                _this.text.fontWeight = 'normal';
                _this.text.anchor.set(0.5);
                _this.text.fontSize = 90;
                _this.whiteGroup.getChildAt(i).addChild(_this.text);

                //target.visible = false;
                target.removeChildAt(0);
                target.loadTexture('Unity2_3_1Caterpillar_body3',0,false);
                //target.events.input.removeAll();

                _this.whiteGroup.getChildAt(i).inputEnabled = true;
                _this.whiteGroup.getChildAt(i).input.useHandCursor = true;

                //console.log("inputadded");

                _this.whiteGroup.getChildAt(i).events.onInputDown.add(_this.checkFortheRightOrder,_this);

                break;
            }
            else if(_this.checkOverlap(target,_this.graphics5))
            {
                target.input.disableDrag();
                target.events.onInputDown.removeAll();

                _this.change--;
                _this.opt1.inputEnabled = false;

                //console.log(" _this.change -- :" + _this.change);
                for(var m=0;m<_this.CaterpillarGrp.length;m++)
                {

                    if(_this.CaterpillarGrp.getChildAt(m).getChildAt(0).text == target.getChildAt(0).text)
                        {
                            _this.CaterpillarGrp.getChildAt(m).visible = true;
                            _this.CaterpillarGrp.getChildAt(m).events.onInputDown.add(_this.onDragStart,_this);
                            break;
                        }

                }
                target.events.onInputDown.removeAll();
                target.removeChildAt(0);
                target.loadTexture('Unity2_3_1Caterpillar_body3',0,false);

                break;
            }
        }

        target.x = _this.vx;   
        target.y = _this.vy;

        if( _this.change<3)
        {
            _this.opt1.inputEnabled = false;
            //_this.opt1.input.useHandCursor = false;
        }
    },
    
    gotoFirstQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo=1;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6_6= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_6_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6_6.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6_6.addChild(_this.text);
        /***********************************************************/
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        //_this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_1start');  
        _this.Caterpillar_head.name = "Unity2_3_1start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_1start');
        //_this.Caterpillar_head.animations.play('Unity2_3_1start', 30, true);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'Unity2_3_1Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ///_this.opt1.frame = 1;
        _this.opt1.name="Unity2_3_1Tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
       // _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
               // _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                //_this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(210, 100, 50, 50);
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(420, 123, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(627, 103, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(180, 250, 450, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                //_this.CaterpillarWhite.add(_this.graphics4);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_1start', 20, true);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            //_this.whiteGroup.add(_this.Caterpillar_body_head_4);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(210, 100, 50, 50);
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(420, 123, 50, 50);
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(627, 103, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(180, 250, 450, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            //_this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
    
    gotoSecondQuestion:function()
    {                                  
        //console.log("gotoSecondQuestion");
        _this.questionNo=2;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6_6= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_6_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6_6.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "13");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6_6.addChild(_this.text);
        /***********************************************************/
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        //_this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_1start');  
        _this.Caterpillar_head.name = "Unity2_3_1start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_1start');
        //_this.Caterpillar_head.animations.play('Unity2_3_1start', 30, true);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'Unity2_3_1Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //////_this.opt1.frame = 1;
        _this.opt1.name="Unity2_3_1Tick1";
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
       // _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
           
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(210, 100, 50, 50);
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(420, 123, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(627, 103, 50, 50);

                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(180, 250, 450, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                //_this.CaterpillarWhite.add(_this.graphics4);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_1start', 20, true);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            //_this.whiteGroup.add(_this.Caterpillar_body_head_4);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(210, 100, 50, 50);
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(420, 123, 50, 50);
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(627, 103, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(180, 250, 450, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            //_this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoThirdQuestion:function()
    {
        //console.log("gotoThirdQuestion");
        _this.questionNo = 3;
        
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6_6= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_6_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6_6.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "14");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6_6.addChild(_this.text);
        /***********************************************************/
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        //_this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_1start');  
        _this.Caterpillar_head.name = "Unity2_3_1start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_1start');
        //_this.Caterpillar_head.animations.play('Unity2_3_1start', 30, true);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'Unity2_3_1Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //////_this.opt1.frame = 1;
        _this.opt1.name="tick1";
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "13");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
       // _this.CaterpillarGrp.add(_this.Caterpillar_body_head_8);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
           
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(210, 100, 50, 50);
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(420, 123, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(627, 103, 50, 50);

                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(180, 250, 450, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                //_this.CaterpillarWhite.add(_this.graphics4);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_1start', 20, true);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            //_this.whiteGroup.add(_this.Caterpillar_body_head_4);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
            _this.graphics4 = _this.add.graphics(100, 100);
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(210, 100, 50, 50);
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(420, 123, 50, 50);
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(627, 103, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(180, 250, 450, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            //_this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },
   
    gotoFourthQuestion:function()
    {
        //console.log("gotoFourthQuestion");
        
        _this.questionNo = 4;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
        // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6_6= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_6_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6_6.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6_6.addChild(_this.text);
       
        //Caterpillar White empty body
        _this.Caterpillar_body_head_1=_this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        
     
        //Caterpillar head
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_1start');  
        _this.Caterpillar_head.name = "Unity2_3_1start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_1start');
        //_this.Caterpillar_head.animations.play('Unity2_3_1start', 30, true);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'Unity2_3_1Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //////_this.opt1.frame = 1;
        _this.opt1.name="Unity2_3_1Tick1";
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
    
        //Drag Caterpillar body
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        
        //Adding groups 
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 =_this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
               // _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                
                _this.graphics5 = _this.add.graphics(100, 100);
                
                //draw rectangle
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(350,122, 50, 50);
                
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(422, 123, 50, 50);
                
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(488, 105, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(180, 250, 450, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                
                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_1start', 20, true);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
           
            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
          
            _this.graphics5 = _this.add.graphics(100, 100);
            
            //draw rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(350,122, 50, 50);
            
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(422, 123, 50, 50);
            
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(488, 105, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(180, 250, 450, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
        
        
    },

    gotoFifthQuestion:function()
    {
        //console.log("gotoFifthQuestion");
        
        _this.questionNo = 5;
    
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
        
       // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6_6= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_6_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6_6.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6_6.addChild(_this.text);
       
       
        _this.Caterpillar_body_head_1=  _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        //_this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_1start');  
        _this.Caterpillar_head.name = "Unity2_3_1start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_1start');
        //_this.Caterpillar_head.animations.play('Unity2_3_1start', 30, true);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'Unity2_3_1Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        //////_this.opt1.frame = 1;
        _this.opt1.name="Unity2_3_1Tick1";
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
               // _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                //_this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(350,122, 50, 50);
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(422, 123, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(488, 105, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(180, 250, 450, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                //_this.CaterpillarWhite.add(_this.graphics4);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                _this.Caterpillar_head.animations.play('Unity2_3_1start', 20, true);
           
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            //_this.whiteGroup.add(_this.Caterpillar_body_head_4);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
          
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(350,122, 50, 50);
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(422, 123, 50, 50);
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(488, 105, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(180, 250, 450, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            //_this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
    },

    gotoSixthQuestion:function()
    {
        //console.log("gotoSixthQuestion");
        
        _this.questionNo = 6;
        
        _this.CaterpillarGrp =_this.add.group();
        _this.CaterpillarWhite= _this.add.group();
        _this.CaterpillarWhiteCopy= _this.add.group();
         // Caterpillar colored bodies 
        _this.Caterpillar_body_head_1_1= _this.add.sprite(_this.world.centerX-210,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_1_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1_1.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_1_1.name = '_this.Caterpillar_body_head_1';
        
        _this.text = this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_1_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2_2= _this.add.sprite(_this.world.centerX-143,_this.world.centerY-40,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_2_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2_2.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_2_2.name = '_this.Caterpillar_body_head_2';
        
        _this.text = this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_2_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3_3=_this.add.sprite(_this.world.centerX-75,_this.world.centerY-30,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_3_3.anchor.setTo(0.5);
        _this.Caterpillar_body_head_3_3.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_3_3.name = '_this.Caterpillar_body_head_3';
        
        _this.text = this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_3_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4_4= _this.add.sprite(_this.world.centerX+203,_this.world.centerY-40,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_4_4.anchor.setTo(0.5);
        _this.Caterpillar_body_head_4_4.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_4_4.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "15");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_4_4.addChild(_this.text);
        
        _this.Caterpillar_body_head_5_5=_this.add.sprite(_this.world.centerX+275,_this.world.centerY-35,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_5_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5_5.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "16");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6_6= _this.add.sprite(_this.world.centerX+340,_this.world.centerY-20,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_6_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6_6.name = '_this.Caterpillar_body_head_4';
        
        _this.text = this.add.text(0, 0, "17");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6_6.addChild(_this.text);
       
       
        _this.Caterpillar_body_head_1=  _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.5,0.5);
        
        /***********************************Copy*****************************************/
        _this.Caterpillar_body_head_1Copy= _this.add.sprite(_this.world.centerX-5,_this.world.centerY-20,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_1Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1Copy.scale.setTo(0.5,0.5);
       
        _this.Caterpillar_body_head_2Copy=_this.add.sprite(_this.world.centerX+67,_this.world.centerY-17,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_2Copy.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2Copy.scale.setTo(0.5,0.5);
        
        _this.Caterpillar_body_head_3Copy= _this.add.sprite(_this.world.centerX+133,_this.world.centerY-35,'Unity2_3_1Caterpillar_body3');
        _this.Caterpillar_body_head_3Copy.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3Copy.scale.setTo(0.5,0.5);
        
        
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_1Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_2Copy);
        _this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_3Copy);
        //_this.CaterpillarWhiteCopy.add(_this.Caterpillar_body_head_4Copy);
        
        /****************************************************************************************/
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-290,_this.world.centerY-60,'Unity2_3_1start');  
        _this.Caterpillar_head.name = "Unity2_3_1start";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.5,0.5);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('Unity2_3_1start');
       // _this.Caterpillar_head.animations.play('Unity2_3_1start', 30, true);
     
        _this.opt1 = _this.add.sprite(_this.world.centerX+375,_this.world.centerY+160, 'Unity2_3_1Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,1.5);
        ////////_this.opt1.frame = 1;
        _this.opt1.name="Unity2_3_1Tick1";
        
        //_this.opt1.inputEnabled = true;
        //_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },this);
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        if(_this.wrong)
        {
            _this.time.events.add(3000, function()
             {
                _this.Caterpillar_head.animations.stop();
             }, this);
        }
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-100,_this.world.centerY+165,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_5.name = '_this.Caterpillar_body_head_5';
        
        _this.text = this.add.text(0, 0, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_5.inputEnabled = true;
        _this.Caterpillar_body_head_5.input.useHandCursor = true;
        _this.Caterpillar_body_head_5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_6=_this.add.sprite(_this.world.centerX,_this.world.centerY+125,'Unity2_3_1Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_6.name = '_this.Caterpillar_body_head_6';
        
        _this.text = this.add.text(0, 0, "13");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_6.addChild(_this.text)
        
        _this.Caterpillar_body_head_6.inputEnabled = true;
        _this.Caterpillar_body_head_6.input.useHandCursor = true;
        _this.Caterpillar_body_head_6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+100,_this.world.centerY+170,'Unity2_3_1Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.5,0.5);
        _this.Caterpillar_body_head_7.name = '_this.Caterpillar_body_head_7';
        
        _this.text = this.add.text(0, 0, "14");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 100;
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_7.inputEnabled = true;
        _this.Caterpillar_body_head_7.input.useHandCursor = true;
        _this.Caterpillar_body_head_7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_5);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_6);
        _this.CaterpillarGrp.add(_this.Caterpillar_body_head_7);
           
        flagGroup1 = _this.add.group();
        
        flagGroup1.add(_this.opt1);
    
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        
        flagGroup1.add(_this.Caterpillar_body_head_1_1);
        flagGroup1.add(_this.Caterpillar_body_head_2_2);
        flagGroup1.add(_this.Caterpillar_body_head_3_3);
        flagGroup1.add(_this.Caterpillar_body_head_4_4);
        flagGroup1.add(_this.Caterpillar_body_head_5_5);
        flagGroup1.add(_this.Caterpillar_body_head_6_6);
        
        flagGroup1.add(_this.Caterpillar_head);
        _this.whiteGroup = _this.add.group();
      
        if(_this.wrong)
        {
            _this.CaterpillarGrp.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarGrp);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
            
            flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
            
            _this.CaterpillarWhiteCopy.x = 1000;
            _this.tween = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0); 
            
            _this.tween.onComplete.add(function()
            {
                _this.whiteGroup.add(_this.Caterpillar_body_head_1);
                _this.whiteGroup.add(_this.Caterpillar_body_head_2);
                _this.whiteGroup.add(_this.Caterpillar_body_head_3);
               // _this.whiteGroup.add(_this.Caterpillar_body_head_4);
                
                _this.whiteGroup.add(_this.Caterpillar_head);
                
                _this.graphics1 = _this.add.graphics(100, 100);
                _this.graphics2 = _this.add.graphics(100, 100);
                _this.graphics3 = _this.add.graphics(100, 100);
                //_this.graphics4 = _this.add.graphics(100, 100);
                _this.graphics5 = _this.add.graphics(100, 100);
                
                // draw a rectangle
                
                _this.graphics1.lineStyle(2, 0x0000FF, 1);
                _this.graphics1.drawRect(350,122, 50, 50);
                _this.graphics2.lineStyle(2, 0x0000FF, 1);
                _this.graphics2.drawRect(422, 123, 50, 50);
                _this.graphics3.lineStyle(2, 0x0000FF, 1);
                _this.graphics3.drawRect(488, 105, 50, 50);
                
                _this.graphics5.lineStyle(2, 0x0000FF, 1);
                _this.graphics5.drawRect(180, 250, 450, 135);
            
                _this.CaterpillarWhite.add(_this.graphics1);
                _this.CaterpillarWhite.add(_this.graphics2);
                _this.CaterpillarWhite.add(_this.graphics3);
                //_this.CaterpillarWhite.add(_this.graphics4);

                _this.CaterpillarWhite.add(_this.graphics5);
                _this.CaterpillarWhite.alpha = 0;
                
                _this.Caterpillar_head.animations.play('Unity2_3_1start', 20, true);
            },this);
        }
        else
        {
            _this.whiteGroup.add(_this.Caterpillar_body_head_1);
            _this.whiteGroup.add(_this.Caterpillar_body_head_2);
            _this.whiteGroup.add(_this.Caterpillar_body_head_3);
            //_this.whiteGroup.add(_this.Caterpillar_body_head_4);

            _this.whiteGroup.add(_this.Caterpillar_head);

            _this.graphics1 = _this.add.graphics(100, 100);
            _this.graphics2 = _this.add.graphics(100, 100);
            _this.graphics3 = _this.add.graphics(100, 100);
          
            _this.graphics5 = _this.add.graphics(100, 100);

            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(350,122, 50, 50);
            _this.graphics2.lineStyle(2, 0x0000FF, 1);
            _this.graphics2.drawRect(422, 123, 50, 50);
            _this.graphics3.lineStyle(2, 0x0000FF, 1);
            _this.graphics3.drawRect(488, 105, 50, 50);

            _this.graphics5.lineStyle(2, 0x0000FF, 1);
            _this.graphics5.drawRect(180, 250, 450, 135);

            _this.CaterpillarWhite.add(_this.graphics1);
            _this.CaterpillarWhite.add(_this.graphics2);
            _this.CaterpillarWhite.add(_this.graphics3);
            //_this.CaterpillarWhite.add(_this.graphics4);

            _this.CaterpillarWhite.add(_this.graphics5);
            _this.CaterpillarWhite.alpha = 0;
        }
        
    },

	changeQuestion:function()
	{
		flagGroup1.destroy();
		if(_this.no11<6)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
            //console.log("gameEnd");
            _this.stopVoice();
            _this.state.start('level2');
		}
	},
    
    checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  
   
	correctAns:function(target)
	{
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        
        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.3.1_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        // _this.currentTime = window.timeSaveFunc();
        
        _this.saveAsment = 
        { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            pass: "yes",
            time2answer: _this.AnsTimerCount,
            attempts: _this.noofAttempts,
            date_time_submission: _this.currentTime, 
            access_token: window.acctkn 
        }

        //absdsjsapi.saveAssessment(_this.saveAsment);
        
        var correct = true;
        for(var i=0;i<3;i++)
        {
            if(i>0)
            {
               // //console.log("aaaaaaaaa"+Number(_this.whiteGroup.getChildAt(i).text));
               // //console.log("bbbbbb"+Number(_this.whiteGroup.getChildAt(0).text));
                
                //console.log("ccccccccc"+Number(_this.whiteGroup.getChildAt(0).getChildAt(0).text));
                //console.log("dddddd"+Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text));
                
                
                if(_this.questionNo==1)
                {
                
                   if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) + 3))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==2)
                {
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) + 3))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==3)
                {
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text) + 3))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                    
                }
                else if(_this.questionNo==4)
                {
                    //console.log("_this.questionNo ==4");
                    
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                    
                }
                else if(_this.questionNo==5)
                {
                    //console.log("_this.questionNo ==5");
                    
                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
                else if(_this.questionNo==6)
                {
                    //console.log("_this.questionNo ==6");

                    if(Number(_this.whiteGroup.getChildAt(i).getChildAt(0).text) != (Number(_this.whiteGroup.getChildAt(i-1).getChildAt(0).text)+1))
                   {
                       //console.log("wrong");
                       correct = false;
                       break;
                   }
                }
            }
        }
        
        if(correct)
        {   
            //correct answer here
            _this.opt1.events.onInputUp.removeAll();
            target.frame=1;
            
             if (_this.Caterpillar_head.key == 'Unity2_3_1start')
            {
                _this.Caterpillar_head.loadTexture('Unity2_3_1Caterpillar_Happy', 0);
                _this.Caterpillar_head.animations.add('Unity2_3_1Caterpillar_Happy');
                _this.Caterpillar_head.animations.play('Unity2_3_1Caterpillar_Happy',20,true);
            }
            
            target.events.onInputDown.removeAll();
             
            //_this.wrong = true;
            _this.speakerbtn.inputEnabled=false;
            _this.celebration = true;

            _this.click3 = _this.add.audio('ClickSound');
            _this.click3.play();

            _this.cmusic = _this.add.audio('celebr');
            _this.cmusic.play();

            _this.time.events.add(2000, _this.removeEverthing, _this);

            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play(); 
            
            target.events.onDragStop.removeAll(); 

             _this.sceneCount++;
            telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        }
        else
        {     
            //Wrong anwser here
            // _this.wrongAns();
            _this.opt1.events.onInputUp.removeAll();
            target.frame=1;
            //console.log("wrong target :"+target.name);
            //target.tint = 0xA9A9A9;

            _this.wrong = false;

           // _this.noofAttempts++;

            //_this.currentTime = window.timeSaveFunc();
            _this.interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                date_time_event: _this.currentTime, 
                event_type: "click", 
                res_id: "level2.3.1_"+target.name,  
                access_token: window.acctkn 
            }

            //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
            
            if (_this.Caterpillar_head.key == 'Unity2_3_1start')
            {
                console.log("wrong star")
                _this.Caterpillar_head.loadTexture('Unity2_3_1wrong', 0);
                _this.Caterpillar_head.animations.add('Unity2_3_1wrong');
                _this.Caterpillar_head.animations.play('Unity2_3_1wrong',20,true);
            }
            
            target.events.onInputDown.removeAll();

            _this.timer3 = _this.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
            _this.time.events.add(1500, function()
            {
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                _this.getQuestion();
            }, this);

            _this.click4 = _this.add.audio('ClickSound');
            _this.click4.play();

            _this.wmusic = _this.add.audio('waudio');
            _this.wmusic.play();
            _this.timer1.stop();
            target.events.onDragStop.removeAll(); 
        }
	},

  /*  wrongAns:function(target)
    {
        //console.log("wrong");
       // //console.log("wrong target :"+target.name);
       // target.tint = 0xA9A9A9;
        
        _this.wrong = false;
        
        _this.noofAttempts++;
        
       //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.3.1_", //+target.name,  
            access_token: window.acctkn 
        }

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        _this.timer3 = _this.time.create(false);
        
        //  Set a TimerEvent to occur after 2 seconds
         _this.time.events.add(1500, function()
        {
            flagGroup1.destroy();
            _this.CaterpillarGrp.destroy();
            _this.CaterpillarWhite.destroy();
            _this.CaterpillarWhiteCopy.destroy();
            _this.whiteGroup.destroy();
            _this.getQuestion();
        }, this);
        
        _this.click4 = _this.add.audio('ClickSound');
        _this.click4.play();
        
		_this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
     
	},*/
    
    removeEverthing:function() 
    {
        //console.log("removeEverthing");
        
        _this.wrong = true;
        _this.opt1.frame=0;
        _this.no11++;
        _this.count1++;
        //console.log("Question Number :"+_this.no11);

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        if(_this.no11<6)
        {
           // wrong = true;
            _this.timer1.stop();
            
            _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhite);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.CaterpillarWhiteCopy);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
             _this.MaintweenDestroy = _this.add.tween(_this.whiteGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                flagGroup1.destroy();
                _this.CaterpillarGrp.destroy();
                _this.CaterpillarWhite.destroy();
                _this.CaterpillarWhiteCopy.destroy();
                _this.whiteGroup.destroy();
                _this.getQuestion();
            },_this);  
        }
        else
        {
            _this.stopVoice();
            _this.timer1.stop();
            _this.timer1=null;
            _this.state.start('unity2_3_1Score');
        }
    },
	amplifyMedia:function(mediaElem, multiplier) {
		  var context = new (window.AudioContext || window.webkitAudioContext),
		      result = {
		        context: context,
		        source: context.createMediaElementSource(mediaElem),
		        gain: context.createGain(),
		        media: mediaElem,
		        amplify: function(multiplier) { result.gain.gain.value = multiplier; },
		        getAmpLevel: function() { return result.gain.gain.value; }
		      };
		  result.source.connect(result.gain);
		  result.gain.connect(context.destination);
		  result.amplify(multiplier);

		  return result;
	},
    
    getVoice:function()
    {
        _this.stopVoice();
        //console.log("fffffff"+_this.qArrays[_this.no11]);
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(_this.qArrays[_this.no11])
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3.1/English/2.3.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3.1/Hindi/2.3.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3.1/Kannada/2.3.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3.1/Odiya/2.3.1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    }

};