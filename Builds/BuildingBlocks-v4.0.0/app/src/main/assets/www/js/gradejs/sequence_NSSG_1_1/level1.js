Game.sequence_NSSG_1_1level1=function(){};


Game.sequence_NSSG_1_1level1.prototype ={
    
    init:function(game)
    {
       _this= this;
        _this.gameid = "1.1";

        this.score =parseInt(window.score);

      // telInitializer.gameIdInit("sequence2_1_1",gradeSelected);
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity2_1_1_BG_01');


        if(window.languageSelected=="English")
                          _this.qsoundurl= window.baseUrl+"questionSounds/2.1.1/English/question2.1_Eng.mp3";
                    else if(window.languageSelected=="Hindi")
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.1.1/Hindi/question2.1_Hin.mp3";
                    else if(window.languageSelected=="Kannada")
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.1.1/Kannada/question2.1_Kan.mp3";
                    else
                         _this.qsoundurl= window.baseUrl+"questionSounds/2.1.1/Odiya/2.1.1.mp3";



       
        commonNavBar.addNavBar(this,_this.qsoundurl,"numbersense2");
        commonNavBar.addTimerToTheGame(this,0,0,0);
        commonNavBar.startTimer(this);
        commonNavBar.addScore(this,this.score);
       // commonNavBar.addHint(this);
        this.hintparams=['NSSG1.1','level1',false,false,true,1];
      
        commonNavBar.addHint(this,this.hintparams);

        telInitializer2.gameIdInit2("NSSG1.1");
    },
    
	create:function(game){
        this.Stararr = [];
        countcorrect=1;
		_this.amplify = null;
		_this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.group1;
        _this.group2;
        _this.group3;
        _this.sceneCount = 0;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
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
        _this.wrong=true;
        _this.count;
        _this.clickSound;
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
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
        _this.qArrays = _this.shuffle(_this.qArrays);
        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

       
        _this.graphics = _this.add.graphics(0, 400);
		_this.graphics.lineStyle(1, 0xFFFFFF, 0.8);
		_this.graphics.beginFill(0xFF700B, 1);
		_this.graphics.drawRect(0,0,960,120);
		_this.graphics.boundsPadding = 0;
		_this.graphics.alpha=0;

       // _this.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.createBall, _this);
        
       _this.generateStarsForTheScene(game,9);
        _this.getQuestion();
        

        if(window.languageSelected=="English")
                          commonNavBar.getVoice(window.baseUrl+"questionSounds/2.1.1/English/question2.1_Eng.mp3");
                    else if(window.languageSelected=="Hindi")
                         commonNavBar.getVoice(window.baseUrl+"questionSounds/2.1.1/Hindi/question2.1_Hin.mp3");
                    else if(window.languageSelected=="Kannada")
                         commonNavBar.getVoice(window.baseUrl+"questionSounds/2.1.1/Kannada/question2.1_Kan.mp3");
                    else
                         commonNavBar.getVoice(window.baseUrl+"questionSounds/2.1.1/Odiya/2.1.1.mp3");

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
        console.log("get question");
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
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
    		case 7: _this.gotoSeventhQuestion();
    				break;
            case 8: _this.gotoEighthQuestion();
    				break;
            case 9: _this.gotoNinethQuestion();
    				break;
            case 10: _this.gotoTenthQuestion();
    				break;
           
    	}

        telInitializer2.gameQuestionStart(this,_this.questionid);
        
    },
    
     getQuestion1:function(target)
    {  
        commonNavBar.startTimer(this);
       console.log("getquestion1");
          switch(_this.qArrays[_this.no11])

        {
             case 1: _this.gotoFirstQuestion1();
                    break;
            case 2: _this.gotoSecondQuestion1();
                    break;
            case 3: _this.gotoThirdQuestion1();
                    break;
            case 4: _this.gotoFourthQuestion1();
                    break;
            case 5: _this.gotoFifthQuestion1();
                    break;
            case 6: _this.gotoSixthQuestion1();
                    break;
            case 7: _this.gotoSeventhQuestion1();
                    break;
            case 8: _this.gotoEighthQuestion1();
                    break;
            case 9: _this.gotoNinethQuestion1();
                    break;
            case 10: _this.gotoTenthQuestion1();
                    break;  
        }
       telInitializer2.gameQuestionStart(this,_this.questionid);
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
    
  /* generateStarsForTheScene1:function(game,count)
    {
         this.starsGroup = this.add.group();
        for (var i = 0; i < count; i++)
        {
            this.starsGroup.create(this.world.centerX, 10, 'starAnim');
            for(var j =0;j<i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).x-=10;
                    this.starsGroup.getChildAt(i).x+=10;

                   
                }
            }
             if(this.Stararr[i])
                    {
                        
                        this.starsGroup.getChildAt(i).frame = this.Stararr[i];
                    }
        }        
        this.starsGroup.getChildAt(1).frame = 2;
       
      }, 
      */

    generateStarsForTheScene:function(game,count)
	{
		_this.starsGroup = _this.add.group();
		
		for (var i = 0; i <  count; i++)
		{
	
			_this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');
            
			for(var j =0;j<i;j++)
			{
				if(_this.starsGroup.getChildAt(j))
				{
					_this.starsGroup.getChildAt(j).x-=10;
					_this.starsGroup.getChildAt(i).x+=10;
				}
			}
		}
        _this.starsGroup.getChildAt(0).frame = 2; 
        _this.starsGroup.getChildAt(1).frame = 0;
        
	},

 /*   addQuestion:function(no22)
    {
        //console.log("addQuestion");
        _this.time.events.add(900, function(){
            var tween = _this.add.tween(flagGroup1);
            tween.to({ x: -1000 }, 0, 'Linear', true, 0);
            tween.onComplete.add(_this.changeQuestion, _this);

        }, _this);
    },
    */
    
    gotoFirstQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_1.addChild(_this.text);

        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_1_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        
        
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
          
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_6.addChild(_this.text)
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_7.addChild(_this.text)
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_8.addChild(_this.text)
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_1_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        
        _this.opt2.name = 'tick2';
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
      
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }
    },
   
    gotoSecondQuestion:function()
    {                                  
        //console.log("gotoSecondQuestion");

        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_1_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);

        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_1_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        
        _this.opt2.name = 'tick2';
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }

    },
   
    gotoThirdQuestion:function()
    {
        //console.log("gotoThirdQuestion");
        
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85;
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
    	_this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_1_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
    
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text)
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_8.addChild(_this.text)
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt2 =_this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_1_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }

    },
   
    
    gotoFourthQuestion:function()
    {
        //console.log("gotoFourthQuestion");
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85;
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_1_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns,_this);  
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_1_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
        //_this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
    
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }  

    },

    gotoFifthQuestion:function()
    {
        //console.log("gotoFifthQuestion");
    
       _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85;
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_1_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns,_this); 
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 =  _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_1_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }  

    },

    gotoSixthQuestion:function()
    {
        //console.log("gotoSixthQuestion");
        
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "13");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1=  _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_1_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
         
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8=_this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "13");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_1_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
        //_this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }
    },
    
    gotoSeventhQuestion:function()
    {
        //console.log("gotoSeventhQuestion");
        
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85;
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt1 =_this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_1_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
        //_this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_1_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
        //_this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }
    },

    gotoEighthQuestion:function()
    {
        //console.log("gotoEighthQuestion");
    
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_1_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
          
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 =_this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_1_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        } 
    },

    gotoNinethQuestion:function()
    {
        //console.log("gotoNinethQuestion");

        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt1 =_this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_1_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns,_this);  
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_1_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }

    },
    
    gotoTenthQuestion:function()
    {                                  
        //console.log("gotoTenthQuestion");
        
       _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-130,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-20,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.7);
    
        _this.text = _this.add.text(0, 0, "14");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX+90,_this.world.centerY-90,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.7);
 
        _this.text = _this.add.text(0, 0, "13");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+200,_this.world.centerY-100,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.7);
   
        _this.text = _this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX-240,_this.world.centerY-130,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt1 =_this.add.sprite(_this.world.centerX+380,_this.world.centerY-90, 'unity2_1_1_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       //_this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-130,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-20,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX+90,_this.world.centerY+150,'unity2_1_1_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "13");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+200,_this.world.centerY+140,'unity2_1_1_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.7);
        
        _this.text = _this.add.text(0, 0, "14");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX-240,_this.world.centerY+105,'unity2_1_1_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_1_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1_Caterpillar_Neutral', 20, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+380,_this.world.centerY+140, 'unity2_1_1_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        } 

    },
    
   
	/* changeQuestion:function()
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
           // _this.state.start('level2');
		}
	},
    */
   
	correctAns:function(target)
	{

        telInitializer2.gameCorrectAns();
        target.frame = 1;
        _this.opt1.events.onInputUp.removeAll();
        _this.opt2.events.onInputUp.removeAll();
        _this.opt1.events.onInputDown.removeAll();
        _this.opt2.events.onInputDown.removeAll();
       
        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.1.1_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        
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
        
		 if(_this.Caterpillar_head.key === 'unity2_1_1_Caterpillar_Neutral')
        {
            _this.Caterpillar_head.loadTexture('unity2_1_1_Caterpillar_Happy', 0, false);
        }
			
        
       // _this.speakerbtn.inputEnabled=false;
        _this.celebration = true;
        
        //_this.click3 = _this.add.audio('ClickSound');
        //_this.click3.play();
        
        //_this.cmusic = _this.add.audio('celebr');
       // _this.cmusic.play();
        commonNavBar.playClickSound();
        commonNavBar.playCelebrationSound();
        target.events.onInputDown.removeAll();
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play(25,false); 
         this.Stararr.push(3);
         _this.time.events.add(2000,_this.removeEverthing,_this);
        _this.sceneCount++;
        
	},

    wrongAns:function(target)
	{
        _this.opt1.events.onInputDown.removeAll();
        _this.opt2.events.onInputDown.removeAll();
        
        telInitializer2.gameWrongAns();
         target.frame = 1;
        this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);
        //_this.count1++;
        _this.opt1.events.onInputUp.removeAll();
        _this.opt2.events.onInputUp.removeAll();
        _this.wrong = true;
        
        _this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.1.1_"+target.name,  
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        
        if (_this.Caterpillar_head1.key === 'unity2_1_1_Caterpillar_Neutral')
        {
            _this.Caterpillar_head1.loadTexture('unity2_1_1_Caterpillar_Sad', 0, false);
        }
        
        _this.timer3 = _this.time.create(false);
        //  Set a TimerEvent to occur after 2 seconds
       /* _this.time.events.add(1500, function()
        {
            flagGroup1.destroy();
           // _this.getQuestion();
        }, _this);*/
        
       // _this.click4 = _this.add.audio('ClickSound');
       // _this.click4.play();
        
		//_this.wmusic = _this.add.audio('waudio');
		//_this.wmusic.play();
       // _this.timer1.stop();
         commonNavBar.playClickSound();
         commonNavBar.playWrongCelebrationSound();
         target.events.onInputDown.removeAll();
       //  commonNavBar.stopTimer();
        _this.time.events.add(2000, _this.removeEverthing, _this);
       // flagGroup1.destroy();
       // this.getQuestion1();
	},
    
    removeEverthing:function() 
    {
        console.log("removeEverthing");
        _this.no11++;
        _this.opt1.frame=0;
        _this.opt2.frame=0;
        //console.log("Question Number :"+_this.no11);

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        if(_this.no11<1)
        {
            // commonNavBar.stopTimer();
             _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
             _this.count1++;
             _this.wrong = true;
            
            _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                flagGroup1.destroy();
               // commonNavBar.stopTimer();
                //_this.getQuestion();
            },_this);  
        }
        else
        {
               _this.count =0;
                 _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                flagGroup1.destroy();
               // commonNavBar.stopTimer();
                //_this.getQuestion();
				  this.getQuestion1();
            },_this);  
                 //commonNavBar.stopTimer();
                 console.log("sssssssssss");
               //this.getVoice();
             
            //_this.generateStarsForTheScene(this,9);
        }
    },
    
/*	addQuestion:function(no22)
    {
        //console.log("addQuestion");
        _this.time.events.add(900, function(){
            var tween = _this.add.tween(flagGroup1);
            tween.to({ x: -1000 }, 0, 'Linear', true, 0);
            tween.onComplete.add(_this.changeQuestion, _this);

        }, _this);
    },
    */
    
     gotoFirstQuestion1:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_1.addChild(_this.text);

        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_1a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        
        
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
          
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_6.addChild(_this.text)
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_7.addChild(_this.text)
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_8.addChild(_this.text)
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_1a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        
        _this.opt2.name = 'tick2';
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns1,_this);
        
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
      
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }
    },
   
    gotoSecondQuestion1:function()
    {                                  
        //console.log("gotoSecondQuestion");

        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_1a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
        
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 85;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);

        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_1a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        
        _this.opt2.name = 'tick2';
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns1,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }

    },
    
     gotoThirdQuestion1:function()
    {
        //console.log("gotoThirdQuestion");
        
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "17");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "14");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "15");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80;
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "16");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
    	_this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_1a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
    
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "17");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "16");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "15");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_7.addChild(_this.text)
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "14");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_8.addChild(_this.text)
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt2 =_this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_1a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns1,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }

    },
   
    
    gotoFourthQuestion1:function()
    {
        //console.log("gotoFourthQuestion");
       
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85;
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_1a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);  
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_1a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
        //_this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns1,_this);
      
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
    
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }  

    },
    
    gotoFifthQuestion1:function()
    {
        //console.log("gotoFifthQuestion");
    
       _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85;
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_1a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns1,_this); 
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 =  _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_1a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns1,_this);
      
        _this.Caterpillar_head1= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }  

    },

    gotoSixthQuestion1:function()
    {
        //console.log("gotoSixthQuestion");
        
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "13");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1=  _this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_1a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
         
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "13");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "11");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8=_this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_1a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
        //_this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns1,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }
    },
    
    gotoSeventhQuestion1:function()
    {
        //console.log("gotoSeventhQuestion");
        
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80;
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 =_this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_1a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
        //_this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head=_this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_1a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
        //_this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns1,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }
    },

    gotoEighthQuestion1:function()
    {
        //console.log("gotoEighthQuestion");
    
        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_1a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);
          
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85;
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 =_this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_1a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns1,_this);
      
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        } 
    },

    gotoNinethQuestion1:function()
    {
        //console.log("gotoNinethQuestion");

        _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "15");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "14");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "13");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite( _this.world.centerX+110,_this.world.centerY-100,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 =_this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_1a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       // _this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.correctAns1,_this);  
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "14");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "15");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "13");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =80; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_1a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.wrongAns1,_this);
      
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head1.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        }

    },
    
    gotoTenthQuestion1:function()
    {                                  
        //console.log("gotoTenthQuestion");
        
       _this.Caterpillar_body_head_1= _this.add.sprite(_this.world.centerX-185,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_1.anchor.setTo(0.5);
        _this.Caterpillar_body_head_1.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_1.addChild(_this.text);
        
        _this.Caterpillar_body_head_2= _this.add.sprite(_this.world.centerX-115,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_2.anchor.setTo(0.5);
        _this.Caterpillar_body_head_2.scale.setTo(0.8,0.8);
    
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_2.addChild(_this.text);
        
        _this.Caterpillar_body_head_3= _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_3.anchor.setTo(0.5)
        _this.Caterpillar_body_head_3.scale.setTo(0.8,0.8);
 
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_3.addChild(_this.text);
        
        _this.Caterpillar_body_head_4= _this.add.sprite(_this.world.centerX+25,_this.world.centerY-70,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_4.anchor.setTo(0.5)
        _this.Caterpillar_body_head_4.scale.setTo(0.8,0.8);
   
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_4.addChild(_this.text);
        
        _this.Caterpillar_head1=_this.add.sprite(_this.world.centerX+110,_this.world.centerY-100,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head1.name = "Caterpillar_Neutral";
        _this.Caterpillar_head1.anchor.setTo(0.5);
        _this.Caterpillar_head1.scale.setTo(0.6,0.6);
        
        _this.Neutral =_this.Caterpillar_head1.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head1.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt1 =_this.add.sprite(_this.world.centerX+280,_this.world.centerY-80, 'unity2_1_1a_Tick');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.7,1.7);
       //_this.opt1.frame = 1;
        _this.opt1.name = 'tick1';
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt1.events.onInputDown.add(_this.wrongAns1,_this);
        
        /************************end**********************/
        
        _this.Caterpillar_body_head_5= _this.add.sprite(_this.world.centerX-185,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_5.anchor.setTo(0.5);
        _this.Caterpillar_body_head_5.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_5.addChild(_this.text);
        
        _this.Caterpillar_body_head_6= _this.add.sprite(_this.world.centerX-115,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_6.anchor.setTo(0.5);
        _this.Caterpillar_body_head_6.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_6.addChild(_this.text);
      
        _this.Caterpillar_body_head_7= _this.add.sprite(_this.world.centerX-45,_this.world.centerY+130,'unity2_1_1a_Caterpillar_Body2');
        _this.Caterpillar_body_head_7.anchor.setTo(0.5);
        _this.Caterpillar_body_head_7.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_7.addChild(_this.text);
        
        _this.Caterpillar_body_head_8= _this.add.sprite(_this.world.centerX+25,_this.world.centerY+120,'unity2_1_1a_Caterpillar_Body1');
        _this.Caterpillar_body_head_8.anchor.setTo(0.5);
        _this.Caterpillar_body_head_8.scale.setTo(0.8,0.8);
        
        _this.text = _this.add.text(0, 0, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal'; 
        _this.text.anchor.set(0.5);
        _this.text.fontSize =85; 
        _this.Caterpillar_body_head_8.addChild(_this.text);
        
        _this.Caterpillar_head= _this.add.sprite(_this.world.centerX+110,_this.world.centerY+90,'unity2_1_1a_Caterpillar_Neutral');  
        _this.Caterpillar_head.name = "Caterpillar_Neutral";
        _this.Caterpillar_head.anchor.setTo(0.5);
        _this.Caterpillar_head.scale.setTo(0.6,0.6);
        
        _this.Neutral1 =_this.Caterpillar_head.animations.add('unity2_1_1a_Caterpillar_Neutral');
        _this.Caterpillar_head.animations.play('unity2_1_1a_Caterpillar_Neutral', 30, true);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX+280,_this.world.centerY+100, 'unity2_1_1a_Tick');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.7,1.7);
       // _this.opt2.frame = 1;
        _this.opt2.name = 'tick2';
		_this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputUp.add(function(target){
            target.frame = 0;
        },_this);

        _this.opt2.events.onInputDown.add(_this.correctAns1,_this);
        
        flagGroup1 = _this.add.group();
        flagGroup1.add(_this.opt1);
        flagGroup1.add(_this.opt2);
        
        flagGroup1.add(_this.Caterpillar_body_head_1);
        flagGroup1.add(_this.Caterpillar_body_head_2);
        flagGroup1.add(_this.Caterpillar_body_head_3);
        flagGroup1.add(_this.Caterpillar_body_head_4);
        flagGroup1.add(_this.Caterpillar_body_head_5);
        flagGroup1.add(_this.Caterpillar_body_head_6);
        flagGroup1.add(_this.Caterpillar_body_head_7);
        flagGroup1.add(_this.Caterpillar_body_head_8);
        
        flagGroup1.add(_this.Caterpillar_head);
        flagGroup1.add(_this.Caterpillar_head1);
        
        if(_this.wrong)
        {
             flagGroup1.x = 1000;
            _this.tween = _this.add.tween(flagGroup1);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);  
        } 

    },
    
   

 /*	changeQuestion:function()
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
            //_this.stopVoice();
            _this.state.start('level2');
		}
	},
    */
   
	correctAns1:function(target)
	{
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        telInitializer2.gameCorrectAns();
        target.frame = 1;
        _this.opt1.events.onInputUp.removeAll();
        _this.opt2.events.onInputUp.removeAll();

        _this.opt1.events.onInputDown.removeAll();
        _this.opt2.events.onInputDown.removeAll();
       
        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.1.1a_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

      
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
       
       //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

       _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        if(_this.Caterpillar_head.key === 'unity2_1_1a_Caterpillar_Neutral')
        {
             _this.Caterpillar_head.loadTexture('unity2_1_1a_Caterpillar_Happy', 0, false);
            
        }
        
       // _this.speakerbtn.inputEnabled=false;
        _this.celebration = true;
        
       // _this.click3 = _this.add.audio('ClickSound');
        //_this.click3.play();
        
       // _this.cmusic = _this.add.audio('celebr');
        //_this.cmusic.play();
         commonNavBar.playClickSound();
         commonNavBar.playCelebrationSound();
        _this.starAnim = _this.starsGroup.getChildAt(countcorrect);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star5');
        _this.anim4.play(25,false);
        this.Stararr.push(3);
        this.starsGroup.getChildAt(countcorrect).frame = 2; 
        countcorrect++;
        target.events.onInputDown.removeAll();
        _this.time.events.add(2000, _this.removeEverthing1, _this);
        
	},

    wrongAns1:function(target)
	{
        _this.opt1.events.onInputDown.removeAll();
        _this.opt2.events.onInputDown.removeAll();

       telInitializer2.gameWrongAns();
         target.frame = 1;
        _this.starsGroup.getChildAt(countcorrect).frame = 1;
           this.Stararr.push(1);
           // _this.count1++;
        _this.opt1.events.onInputUp.removeAll();
        _this.opt2.events.onInputUp.removeAll();
        _this.wrong = true;
        
        //_this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level2.1.1a_"+target.name,  
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        
        if (_this.Caterpillar_head1.key === 'unity2_1_1a_Caterpillar_Neutral')
        {
            _this.Caterpillar_head1.loadTexture('unity2_1_1a_Caterpillar_Sad', 0, false);
        }
        
        _this.timer3 = _this.time.create(false);
        //  Set a TimerEvent to occur after 2 seconds
       /* _this.time.events.add(1500, function()
        {
            flagGroup1.destroy();
            //_this.getQuestion();
        }, _this);*/
        
       // _this.click4 = _this.add.audio('ClickSound');
       // _this.click4.play();
        
		//_this.wmusic = _this.add.audio('waudio');
		//_this.wmusic.play();
         //commonNavBar.playSnapSound();
            commonNavBar.playWrongCelebrationSound();
           target.events.onInputDown.removeAll();
         //commonNavBar.stopTimer();
         _this.time.events.add(2000, _this.removeEverthing1, _this);
     
	},
    
    removeEverthing1:function() 
    {
        //console.log("removeEverthing");
       // _this.wrong=true;
         _this.wrong=false;
        _this.no11++;
        //_this.count1++;
        _this.opt1.frame=0;
        _this.opt2.frame=0;
        console.log("Question Number :"+_this.no11);
        
        if(_this.no11<1)
        {
           _this.wrong = true;
           // _this.timer1.stop();
           // commonNavBar.stopTimer(); 
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
             _this.count1++;
            _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            //console.log("inside removeEverthing");
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                flagGroup1.destroy();
                //commonNavBar.stopTimer();
                _this.getQuestion();
                _this.no11++;
            },_this);  
        }
        else
        {   
             var timerStopVar = commonNavBar.stopTimer();
            countIncrement = 0;
            _this.stopVoice();
			 _this.MaintweenDestroy = _this.add.tween(flagGroup1);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
			 _this.MaintweenDestroy.onComplete.add(function(){
            commonNavBar.disableNavBar();
                    commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.speakerbtn=null;
            
            // commonNavBar.stopTimer();
           // _this.timer1=null;
            // _this.timerpause = commonNavBar.minutes + ':'+  commonNavBar.seconds;
            _this.state.start('sequence_NSSG_1_1level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
			 },_this);  
        }
    },
    
   /* getVoice:function()
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
            case 6:
            case 7:
            case 8:
            case 9:
            case 10: _this.soundurl= ("questionSounds/2.1.1/English/question2.1_Eng.mp3");
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    }
    */

};