Game.fraction_NSFG_1_1level2=function(){};


Game.fraction_NSFG_1_1level2.prototype={

    init:function(param,score,timerStopVar)
    {
        _this = this;
        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;
        //window.languageSelected="English";
        //telInitializer.gameIdInit("pinwheel1_1B",gradeSelected);
        

    },


	create:function(game){

        this.playedwithHint = false;
        this.completelyplayed = false;

        _this = this;
		
        _this.amplify = null;
		_this.noofAttempts=0;
		_this.AnsTimerCount=0;
        _this.sceneCount=0;
		
		_this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.rno11 = 0;
        _this.vno11 = 0;
        _this.no2 = 0;
        _this.count=4;
         _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.opt1X=0;
        _this.opt1Y=0;
        _this.opt2X=0;
        _this.opt2Y=0;
        _this.opt3X=0;
        _this.opt3Y=0;
        _this.qArray = new Array();
        _this.qArray = [1,2,4,6,7,8,10,11,12,13];
       // _this.qArray = _this.shuffle(_this.qArray);
         _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'commonBg2');
        
        if(window.languageSelected == "English")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/1.1B/English/1.1A2.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
             _this.soundurl =  window.baseUrl+"questionSounds/1.1B/Hindi/1.1A2.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/1.1B/Kannada/1.1A2.mp3";
        }
        else if(window.languageSelected == "Gujarati")
        {
            _this.soundurl = window.baseUrl+"questionSounds/Gujarati/1.1B/1.1A2.mp3";
        }
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/1.1B/Odiya/1.1A2.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        commonNavBar.addNavBar(game,_this.soundurl,"numbersense5");
        commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['NSFG1.1','level2',false,false,true,1];
        commonNavBar.addHint(game,this.hintparams);
        
        _this.generateStarsForTheScene(9);
        
        _this.getQuestion();
        _this.getVoice();

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
    
    getQuestion:function(target1)
    {
        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

         _this.obj1Array = [];
         _this.obj2Array = [];
         _this.obj3Array = [];
         _this.obj4Array = [];

        switch(_this.qArray[_this.no11])
    	{
    		case 1: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain11',230,260,"Level11B_MainStar"];
					_this.obj2Array = ['Level11B_Ans1',600,250,"Level11B_StarCorrectMissingPiece"];
					_this.obj3Array = ['Level11B_Ans2',730,360,"Level11B_StarWrongMissingPiece"];//640,370
					_this.obj4Array = ['Level11B_Ans3',760,190,"Level11B_StarWrongMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
    		case 2: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain12',230,280,"Level11B_MainCircle"];
					_this.obj2Array = ['Level11B_Ans21',600,270,"Level11B_CircleWrongMissingPiece"];
					_this.obj3Array = ['Level11B_Ans32',710,400,"Level11B_CircleWrongMissingPiece"];
					_this.obj4Array = ['Level11B_Ans22',750,210,"Level11B_CircleCorrectMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);                                         break;
    		/*case 3: //removed
					_this.questionid = 1;
                    _this.obj1Array = ['Level11B_flagmain31',230,290,"Level11B_MainCircle"];
                    _this.obj2Array = ['Level11B_Ans23',630,230,"Level11B_CircleWrongMissingPiece"];
                    _this.obj3Array = ['Level11B_Ans31',730,400,"Level11B_CircleWrongMissingPiece"];
                    _this.obj4Array = ['Level11B_Ans33',800,230,"Level11B_CircleCorrectMissingPiece"];
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                    break;*/
    		case 4: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain41',230,260,"Level11B_PirpleSquare"];
					_this.obj2Array = ['Level11B_Ans41',610,220,"Level11B_PirpleSquareWrongMissingPiece"];
					_this.obj3Array = ['Level11B_Ans43',780,225,"Level11B_PirpleSquareCorrectMissingPiece"];
					_this.obj4Array = ['Level11B_Ans42',690,390,"Level11B_PirpleSquareWrongMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
    		/*case 5: //removed
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain51',230,270,"Level11B_MainCircle"];
					_this.obj2Array = ['Level11B_Ans52',630,220,"Level11B_CircleCorrectMissingPiece"];
					_this.obj3Array = ['Level11B_Ans51',800,220,"Level11B_CircleWrongMissingPiece"];
					_this.obj4Array = ['Level11B_Ans53',730,400,"Level11B_CircleWrongMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;*/
    		case 6: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain61',230,270,"Level11B_MainCircle"];
					_this.obj2Array = ['Level11B_Ans62',630,220,"Level11B_CircleCorrectMissingPiece"];
					_this.obj3Array = ['Level11B_Ans61',800,220,"Level11B_CircleWrongMissingPiece"];
					_this.obj4Array = ['Level11B_Ans63',730,400,"Level11B_CircleWrongMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
                
            case 7: 
					_this.questionid = 1;
                    _this.obj1Array = ['Level11B_flagmain71',230,290,"Level11B_MainCircle"];
                    _this.obj2Array = ['Level11B_Ans72',630,230,"Level11B_CircleWrongMissingPiece"];
                    _this.obj3Array = ['Level11B_Ans71',700,420,"Level11B_CircleWrongMissingPiece"];
                    _this.obj4Array = ['Level11B_Ans73',780,230,"Level11B_CircleCorrectMissingPiece"];
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                    break;
                
            case 8: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain81',230,260,"Level11B_MainStar"];
					_this.obj2Array = ['Level11B_Ans81',630,250,"Level11B_StarCorrectMissingPiece"];
					_this.obj3Array = ['Level11B_Ans82',760,360,"Level11B_StarWrongMissingPiece"];//640,370
					_this.obj4Array = ['Level11B_Ans83',790,190,"Level11B_StarWrongMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
                
            /*case 9: //removed
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain91',230,260,"Level11B_PirpleSquare"];
					_this.obj2Array = ['Level11B_Ans41',610,220,"Level11B_PirpleSquareWrongMissingPiece"];
					_this.obj3Array = ['Level11B_Ans43',780,225,"Level11B_PirpleSquareCorrectMissingPiece"];
					_this.obj4Array = ['Level11B_Ans42',690,390,"Level11B_PirpleSquareWrongMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;*/
             
            case 10: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain10_1',230,270,"Level11B_MainCircle"];
					_this.obj2Array = ['Level11B_Ans10_1',630,220,"Level11B_CircleCorrectMissingPiece"];
					_this.obj3Array = ['Level11B_Ans10_3',820,220,"Level11B_CircleWrongMissingPiece"];
					_this.obj4Array = ['Level11B_Ans10_2',730,360,"Level11B_CircleWrongMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
                
            case 11: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain11_1',230,260,"Level11B_PirpleSquare"];
					_this.obj2Array = ['Level11B_Ans11_1',630,220,"Level11B_PirpleSquareWrongMissingPiece"];
					_this.obj3Array = ['Level11B_Ans11_2',800,225,"Level11B_PirpleSquareWrongMissingPiece"];
					_this.obj4Array = ['Level11B_Ans11_3',710,360,"Level11B_PirpleSquareCorrectMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
            
            case 12: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain12_1',230,280,"Level11B_MainCircle"];
					_this.obj2Array = ['Level11B_Ans12_1',630,220,"Level11B_CircleWrongMissingPiece"];
					_this.obj3Array = ['Level11B_Ans12_3',750,350,"Level11B_CircleWrongMissingPiece"];
					_this.obj4Array = ['Level11B_Ans12_2',820,210,"Level11B_CircleCorrectMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);                                  
    				break;
                
            case 13: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain13_1',230,280,"Level11B_MainCircle"];
					_this.obj2Array = ['Level11B_Ans13_1',630,220,"Level11B_CircleWrongMissingPiece"];
					_this.obj3Array = ['Level11B_Ans13_2',750,350,"Level11B_CircleWrongMissingPiece"];
					_this.obj4Array = ['Level11B_Ans13_3',820,230,"Level11B_CircleCorrectMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);                                  
    				break;
    	}
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },
     gotoQuestion:function(obj1Array,obj2Array,obj3Array,obj4Array){
		_this.flagGroup1 = _this.add.group();
		
	    _this.b1 = _this.add.sprite(obj1Array[1],obj1Array[2],obj1Array[0]);
        _this.b1.anchor.setTo(0.5);
        _this.b1.name = obj1Array[3];
        _this.b1.inputEnabled = true;
    	_this.b1.input.useHandCursor = true;
       
        _this.b2 = _this.add.sprite(obj2Array[1],obj2Array[2],obj2Array[0]);
        _this.b2.anchor.setTo(0.5);
        _this.b2.name =  obj2Array[3];
        _this.b2.inputEnabled = true;
    	_this.b2.input.useHandCursor = true;
        
        _this.b3 = _this.add.sprite(obj3Array[1],obj3Array[2],obj3Array[0]);
        _this.b3.anchor.setTo(0.5);
        _this.b3.name = obj3Array[3];
        _this.b3.inputEnabled = true;
    	_this.b3.input.useHandCursor = true;  
		
	    _this.b4 = _this.add.sprite(obj4Array[1],obj4Array[2],obj4Array[0]);
        _this.b4.anchor.setTo(0.5);
        _this.b4.name = obj4Array[3];
        _this.b4.inputEnabled = true;
    	_this.b4.input.useHandCursor = true;
		
		_this.addListeners();
		_this.opt1X = _this.b2.x;
    	_this.opt1Y = _this.b2.y;

    	_this.opt2X = _this.b3.x;
    	_this.opt2Y = _this.b3.y;

    	_this.opt3X = _this.b4.x;
    	_this.opt3Y = _this.b4.y;
		
		_this.flagGroup1.add(_this.b1);
    	_this.flagGroup1.add(_this.b2);
    	_this.flagGroup1.add(_this.b3);
    	_this.flagGroup1.add(_this.b4);
		
		_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
        tween.to({ x: 0 }, 0,'Linear', true, 0);
         
        //Disable HINT icon when question tweens at first
        commonNavBar.disableHintIcon();
         
        tween.onComplete.add(function(){
            _this.timer = _this.time.create(false);

            //  Set a TimerEvent to occur after 2 seconds
            _this.timer.loop(1000, function(){
            _this.AnsTimerCount++;

            }, _this); 
           _this.timer.start();
            
            //Enable HINT icon when next question appears
			commonNavBar.enableHintIcon();
		}, _this);
        commonNavBar.opt1=_this.b2;
        commonNavBar.opt2=_this.b3;
        commonNavBar.opt3=_this.b4;
	 },
    
    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();
        
        for (var i = 0; i < count; i++)
		{
            _this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');
            
			for(var j =0;j<i;j++)
			{
				if( _this.starsGroup.getChildAt(j))
				{
					 _this.starsGroup.getChildAt(j).x-=10;
					 _this.starsGroup.getChildAt(i).x+=10;
				}
			}
            if(this.Stararr[i])
            {  
                _this.starsGroup.getChildAt(i).frame = this.Stararr[i];
            }
		}
        _this.starsGroup.getChildAt(4).frame = 2;	               
    },

    addQuestion:function(no2)
    {
        _this.time.events.add(900, function(){
            var tween = _this.add.tween(_this.flagGroup1);
            tween.to({ x: -1000 }, 0,'Linear', true, 0);
            tween.onComplete.add(_this.changeQuestion, _this);
        }, _this);
    },
    
    update:function(){

    },

	/*
    gotoFirstQuestion:function(){
    	_this.no11++;
    	_this.mainFlag = _this.add.sprite(270,230,'Level11B_flagmain11');
    	_this.mainFlag.anchor.setTo(0.5);
    	_this.opt1 = _this.add.sprite(570,280,'Level11B_Ans1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.name = 'right_this.Answer';
    	_this.opt2 = _this.add.sprite(730,280,'Level11B_Ans2');
    	_this.opt2.anchor.setTo(0.5);
    	
    	_this.opt3 = _this.add.sprite(890,280,'Level11B_Ans3');
    	_this.opt3.anchor.setTo(0.5);

    	_this.opt1X = _this.opt1.x;
    	_this.opt1Y = _this.opt1.y;

    	_this.opt2X = _this.opt2.x;
    	_this.opt2Y = _this.opt2.y;

    	_this.opt3X = _this.opt3.x;
    	_this.opt3Y = _this.opt3.y;

    	

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.opt3);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(_this.addListeners, _this);
        if(_this.no11==1)
        {
            _this.getVoice(_this.no1);
            _this.time.events.add(4000,function(){
            _this.opt1.inputEnabled = true;
    	    _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
    	    _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
    	    _this.opt3.input.useHandCursor = true;
            _this.addListeners();
            },_this);
        }
        else
        {
            _this.opt1.inputEnabled = true;
    	    _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
    	    _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
    	    _this.opt3.input.useHandCursor = true;
            _this.addListeners();
        }
        

        //         var tween = _this.add.tween(windmillGroup);
        // tween.to({ x: 0}, 0,'Linear', true, 0);
        tween.onComplete.add(function(){
       // _this.addQuestion(_this.count);

     }, _this);               
    },

    gotoSecondQuestion:function(){
        
    	_this.no11++;
    	_this.mainFlag = _this.add.sprite(270,280,'Level11B_flagmain12');
    	_this.mainFlag.anchor.setTo(0.5);
    	_this.opt1 = _this.add.sprite(585,280,'Level11B_Ans21');
    	_this.opt1.anchor.setTo(0.5);
    	_this.opt2 = _this.add.sprite(755,280,'Level11B_Ans22');
    	_this.opt2.anchor.setTo(0.5);
    _this.opt2.name = 'right_this.Answer';
    	_this.opt3 = _this.add.sprite(890,280,'Level11B_Ans32');
    	_this.opt3.anchor.setTo(0.5);

    	_this.opt1X = _this.opt1.x;
    	_this.opt1Y = _this.opt1.y;

    	_this.opt2X = _this.opt2.x;
    	_this.opt2Y = _this.opt2.y;

    	_this.opt3X = _this.opt3.x;
    	_this.opt3Y = _this.opt3.y;

    	

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.opt3);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(_this.addListeners, _this);
        if(_this.no11==1)
        {
            _this.getVoice(_this.no1);
            _this.time.events.add(4000,function(){
            _this.opt1.inputEnabled = true;
    	    _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
    	    _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
    	    _this.opt3.input.useHandCursor = true;
            _this.addListeners();
            },_this);
        }
        else
        {
            _this.opt1.inputEnabled = true;
    	    _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
    	    _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
    	    _this.opt3.input.useHandCursor = true;
            _this.addListeners();
        }
    },

    gotoThirdQuestion:function(){
       
    		_this.no11++;
    	_this.mainFlag = _this.add.sprite(270,290,'Level11B_flagmain51');
    	_this.mainFlag.anchor.setTo(0.5);
    	_this.opt1 = _this.add.sprite(570,280,'Level11B_Ans51');
    	_this.opt1.anchor.setTo(0.5);
    	  _this.opt1.name = 'right_this.Answer';
    
    	_this.opt2 = _this.add.sprite(730,280,'Level11B_Ans52');
    	_this.opt2.anchor.setTo(0.5);
          
    	
    	_this.opt3 = _this.add.sprite(880,280,'Level11B_Ans53');
    	_this.opt3.anchor.setTo(0.5);

    	_this.opt1X = _this.opt1.x;
    	_this.opt1Y = _this.opt1.y;

    	_this.opt2X = _this.opt2.x;
    	_this.opt2Y = _this.opt2.y;

    	_this.opt3X = _this.opt3.x;
    	_this.opt3Y = _this.opt3.y;

    	

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.opt3);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(_this.addListeners, _this);
            if(_this.no11==1)
        {
           _this.getVoice(_this.no11);
            _this.time.events.add(4000,function(){
                _this.opt1.inputEnabled = true;
                _this.opt1.input.useHandCursor = true;
                _this.opt2.inputEnabled = true;
                _this.opt2.input.useHandCursor = true;
                _this.opt3.inputEnabled = true;
                _this.opt3.input.useHandCursor = true;
                _this.addListeners();
            },_this);
        }
        else
        {
            _this.opt1.inputEnabled = true;
            _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
            _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
            _this.opt3.input.useHandCursor = true;
            _this.addListeners();
        }
    },

    gotoFourthQuestion:function(){
        
    	_this.rno11++;
    	_this.mainFlag = _this.add.sprite(270,260,'Level11B_flagmain41');
    	_this.mainFlag.anchor.setTo(0.5);
    	_this.opt1 = _this.add.sprite(545,280,'Level11B_Ans41');
    	_this.opt1.anchor.setTo(0.5);
    
    	_this.opt2 = _this.add.sprite(665,280,'Level11B_Ans42');
    	_this.opt2.anchor.setTo(0.5);
    	
    	_this.opt3 = _this.add.sprite(865,280,'Level11B_Ans43');
    	_this.opt3.anchor.setTo(0.5);
            _this.opt3.name = 'right_this.Answer';

    	_this.opt1X = _this.opt1.x;
    	_this.opt1Y = _this.opt1.y;

    	_this.opt2X = _this.opt2.x;
    	_this.opt2Y = _this.opt2.y;

    	_this.opt3X = _this.opt3.x;
    	_this.opt3Y = _this.opt3.y;

    	

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.opt3);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(_this.addListeners, _this);
        if(_this.no1==1)
        {
           _this.getVoice(_this.no1);
            _this.time.events.add(4000,function(){
                _this.opt1.inputEnabled = true;
                _this.opt1.input.useHandCursor = true;
                _this.opt2.inputEnabled = true;
                _this.opt2.input.useHandCursor = true;
                _this.opt3.inputEnabled = true;
                _this.opt3.input.useHandCursor = true;
                _this.addListeners();
           },_this);
        }
        else
        {
            _this.opt1.inputEnabled = true;
            _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
            _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
            _this.opt3.input.useHandCursor = true;
            _this.addListeners();
        }
    },


    gotoFifthQuestion:function(){
      
    _this.rno11++;
    	_this.mainFlag = _this.add.sprite(270,260,'Level11B_flagmain31');
    	_this.mainFlag.anchor.setTo(0.5);
    	_this.opt1 = _this.add.sprite(585,280,'Level11B_Ans31');
    	_this.opt1.anchor.setTo(0.5);
    	_this.opt2 = _this.add.sprite(740,280,'Level11B_Ans23');
    	_this.opt2.anchor.setTo(0.5);
            _this.opt2.name = 'right_this.Answer';
    	_this.opt3 = _this.add.sprite(890,280,'Level11B_Ans33');
    	_this.opt3.anchor.setTo(0.5);

    	_this.opt1X = _this.opt1.x;
    	_this.opt1Y = _this.opt1.y;

    	_this.opt2X = _this.opt2.x;
    	_this.opt2Y = _this.opt2.y;

    	_this.opt3X = _this.opt3.x;
    	_this.opt3Y = _this.opt3.y;

    	

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.opt3);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(_this.addListeners, _this);
        if(_this.no1==1)
        {
           _this.getVoice(_this.no1);
            _this.time.events.add(4000,function(){
                _this.opt1.inputEnabled = true;
                _this.opt1.input.useHandCursor = true;
                _this.opt2.inputEnabled = true;
                _this.opt2.input.useHandCursor = true;
                _this.opt3.inputEnabled = true;
                _this.opt3.input.useHandCursor = true;
                _this.addListeners();
            },_this);
        }
        else
        {
            _this.opt1.inputEnabled = true;
            _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
            _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
            _this.opt3.input.useHandCursor = true;
            _this.addListeners();
        }
    },


    gotoSixthQuestion:function(){
       
    	_this.vno11++;
    	_this.mainFlag = _this.add.sprite(270,270,'Level11B_flagmain61');
    	_this.mainFlag.anchor.setTo(0.5);
    	_this.opt1 = _this.add.sprite(570,280,'Level11B_Ans61');
    	_this.opt1.anchor.setTo(0.5);
    	
    
    	_this.opt2 = _this.add.sprite(720,280,'Level11B_Ans62');
    	_this.opt2.anchor.setTo(0.5);
    	
    	_this.opt3 = _this.add.sprite(880,280,'Level11B_Ans63');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.name = 'right_this.Answer';

    	
    	_this.opt1X = _this.opt1.x;
    	_this.opt1Y = _this.opt1.y;

    	
    	_this.opt2X = _this.opt2.x;
    	_this.opt2Y = _this.opt2.y;

    	
    	_this.opt3X = _this.opt3.x;
    	_this.opt3Y = _this.opt3.y;

        
    	

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.opt3);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        if(_this.no1==1)
        {
            _this.getVoice(_this.no1);
            _this.time.events.add(4000,function(){
                _this.opt1.inputEnabled = true;
                _this.opt1.input.useHandCursor = true;
                _this.opt2.inputEnabled = true;
                _this.opt2.input.useHandCursor = true;
                _this.opt3.inputEnabled = true;
                _this.opt3.input.useHandCursor = true;
                _this.addListeners();
            },_this);
        }
        else
        {
            _this.opt1.inputEnabled = true;
            _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
            _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
            _this.opt3.input.useHandCursor = true;
            _this.addListeners();
        }
    	//tween.onComplete.add(_this.addListeners, _this);
    },
     */
 
    addListeners:function()
    {
    	_this.b2.input.enableDrag(true);
    	_this.b3.input.enableDrag(true);
    	_this.b4.input.enableDrag(true);

    	_this.b2.events.onDragStart.add(_this.onDragStart, _this);
    	_this.b2.events.onDragStop.add(_this.onDragStop, _this);

    	_this.b3.events.onDragStart.add(_this.onDragStart, _this);
    	_this.b3.events.onDragStop.add(_this.onDragStop, _this);

    	_this.b4.events.onDragStart.add(_this.onDragStart, _this);
    	_this.b4.events.onDragStop.add(_this.onDragStop, _this);
    },
    
    removeListeners:function()
    {   
        _this.b2.inputEnabled=false;
        _this.b3.inputEnabled=false;
        _this.b4.inputEnabled=false;
    },

	changeQuestion:function()
	{
		_this.flagGroup1.destroy();
		_this.no11++;
		if(_this.no11<5)
		{
			_this.getQuestion();
            _this.starsGroup.getChildAt(_this.count+1).frame = 2; 
            _this.count++;
		}
		else
		{
//            _this.state.start('grade1_1BScore');
            commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.disableNavBar();
			commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
            this.createScoreScene();
		}
	},
    
   createScoreScene:function()
    {

        this.completelyplayed = true;
		
		this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);
        
//        this.tryAgainText = this.add.text(this.world.centerX,this.world.centerY,'Try Again !!');
//        this.tryAgainText.anchor.setTo(0.5);
//        this.tryAgainText.align = 'center';
//        this.tryAgainText.fontWeight = 'bold';
//        this.tryAgainText.fontSize = 40;
//        this.tryAgainText.fill = 'White';
//        this.tryAgainText.visible = false;
//        
//        this.terrificText = this.add.text(this.world.centerX,this.world.centerY,'Terrific !!');
//        this.terrificText.anchor.setTo(0.5);
//        this.terrificText.align = 'center';
//        this.terrificText.fontWeight = 'bold';
//        this.terrificText.fontSize = 40;
//        this.terrificText.fill = 'White';
//        this.terrificText.visible = false;
//        
//        this.verGoodText = this.add.text(this.world.centerX,this.world.centerY,'Very Good !!');
//        this.verGoodText.anchor.setTo(0.5);
//        this.verGoodText.align = 'center';
//        this.verGoodText.fontWeight = 'bold';
//        this.verGoodText.fontSize = 40;
//        this.verGoodText.fill = 'White';
//        this.verGoodText.visible = false;
//        
//        this.excellentText = this.add.text(this.world.centerX,this.world.centerY,'Excellent !!');
//        this.excellentText.anchor.setTo(0.5);
//        this.excellentText.align = 'center';
//        this.excellentText.fontWeight = 'bold';
//        this.excellentText.fontSize = 40;
//        this.excellentText.fill = 'White';
//        this.excellentText.visible = false;
        
        this.happyemoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.happyemoji.anchor.setTo(0.5);
        this.happyemoji.scale.setTo(0.7,0.7);
        this.happyemoji.frame=0;
        this.happyemoji.visible = false;
        
        this.sademoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.sademoji.anchor.setTo(0.5);
        this.sademoji.scale.setTo(0.7,0.7);
        this.sademoji.frame=4;
        this.sademoji.visible = false;
        
        this.HomeBtn = this.add.sprite(this.world.centerX+140,this.world.centerY+80,'HomeBtn');
        this.HomeBtn.anchor.setTo(0.5);
        this.HomeBtn.inputEnabled = true;
        this.HomeBtn.events.onInputDown.add(this.homeClicked,this);

        this.replayBtn = this.add.sprite(this.world.centerX-140,this.world.centerY+80,'replayBtn');
        this.replayBtn.anchor.setTo(0.5);
        this.replayBtn.inputEnabled = true;
        this.replayBtn.events.onInputDown.add(this.replayClicked,this);

        this.generateStarsForScoreScene(this,9);
    },

    homeClicked:function()
    {
        commonNavBar.playClickSound();

        this.HomeBtn.events.onInputDown.removeAll();
        
        commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
                commonNavBar.navBar=null;

        this.score += this.scoreSceneScore;

		this.backgroundtransp.visible=false;
		
        _this.state.start('numbersense5',true,false);
        
    },


    generateStarsForScoreScene:function(game,count)
    {
        //console.log("star");
        this.starsGroup = this.add.group();
        this.scoreSceneScore = 0;
        this.maxscore = count * 5;
        console.log(this.maxscore);
        
        for (var i = 0; i < count; i++)
        {
            if(this.Stararr[i]!=1)
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'star5');
                this.scoreSceneScore+=5;
            }
            else
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'dot');
                this.playedwithHint = true;
            }

            for(var j =0;j<=i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).anchor.setTo(0.5);
                    this.starsGroup.getChildAt(j).x-=20;
                    this.starsGroup.getChildAt(i).x+=20;
                }
            }
        }    
//        if((this.scoreSceneScore/this.maxscore) < 0.4){
//            this.tryAgainText.visible = true;
//        }else if(( (this.scoreSceneScore/this.maxscore) > 0.4) && ((this.scoreSceneScore/this.maxscore) < 0.7) ){
//            this.terrificText.visible = true;
//        }else if(( (this.scoreSceneScore/this.maxscore) > 0.7) && ((this.scoreSceneScore/this.maxscore) < 0.9) ){
//            this.verGoodText.visible = true;
//        }else if((this.scoreSceneScore/this.maxscore) > 0.9){
//            this.excellentText.visible = true;
//        }
        if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.sademoji.visible = true;
        }else{
            this.happyemoji.visible = true;
        }

        commonNavBar.playCelebrationSound();      
        commonNavBar.deductScore(this,this.scoreSceneScore,false,false);   

        if(!this.playedwithHint)
        {
            this.replayBtn.visible = false;
        }     
    },

    replayClicked:function()
    {
        commonNavBar.playClickSound();

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,true,false);

         this.score += this.scoreSceneScore;
        this.score -= 5;

        this.time.events.add(3500, function()
        { 
            commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.hint1=true,
            commonNavBar.hint2=true,
            commonNavBar.hint3=true,
			this.backgroundtransp.visible=false; //Remove BackGround Opacity
            _this.state.start('fraction_NSFG_1_1level1',true,false);
        }, this);
    },

    
    updateTimer:function() {
        _this.counterForTimer++;
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            if(_this.minutes<10){
                this.minutes =  this.minutes+1;
                _this.seconds = 00;
            }
            else{
                 this.minutes =  this.minutes+1;  
            }
        }else{
            if (_this.counterForTimer < 10)        
                this.seconds = '0' + this.counterForTimer;
            else
                this.seconds = this.counterForTimer;
        }
        this.timeDisplay.setText(_this.minutes+':' + this.seconds);
    },

    removeCelebration1:function()
	{
        if(_this.timer1)
        {
            _this.timer1.stop();
        }
		_this.celebration1 = false;
        _this.addQuestion(_this.count);
	},

	correctAns1:function(target)
	{
        telInitializer2.gameCorrectAns();
		_this.timer.stop();
		_this.timer = null;
		
		_this.noofAttempts++;

        _this.AnsTimerCount=0;
        
        _this.b2.inputEnabled=false;
        _this.b3.inputEnabled=false;
        _this.b4.inputEnabled=false;
       
        _this.anim5 = target.animations.add('playAnim');
        _this.anim5.play();

		_this.celebration1 = true;
     	commonNavBar.playCelebrationSound();

		_this.time.events.add(500, _this.removeCelebration1, _this);

        _this.Stararr.push(3);
        
        var starAnim = _this.starsGroup.getChildAt(_this.count);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();      
        target.events.onInputDown.removeAll();
	},

    wrongAns1:function(target)
	{
        telInitializer2.gameWrongAns();
		_this.noofAttempts++;
        
        _this.removeListeners();
//        target.tint = 0xA9A9B8;
		_this.shake.shake(10, target);
        _this.Stararr.push(1);
		commonNavBar.playWrongCelebrationSound();
        _this.starsGroup.getChildAt(_this.count).frame = 1;
        _this.time.events.add(500, _this.removeCelebration1, _this);

        target.events.onInputDown.removeAll();
	},

    onDragStart:function(target){
		
    	targetCoordinatesX = target.x;
    	targetCoordinatesY = target.y;

        commonNavBar.playClickSound();
    },

    onDragStop:function(target){
			
    	if (_this.checkOverlap(_this.b1, target))
    	{
    		if(
                target.name=='Level11B_StarCorrectMissingPiece'
                ||target.name=='Level11B_CircleCorrectMissingPiece'
                ||target.name=='Level11B_OctagonCorrectMissingPiece'
                ||target.name=='Level11B_TriangleCorrectMissingPiece'
                ||target.name=='Level11B_BlueSquareCorrectMissingPiece'
                ||target.name=='Level11B_PirpleSquareCorrectMissingPiece'
            )
    		{
                 //disable HINT icon after dragging of the Correct shape
                commonNavBar.disableHintIcon();
                
                commonNavBar.playSnapSound();
    			
    			target.destroy();
    			_this.b1.frame = 1;
    			_this.correctAns1(_this.b1);
    		}
    		else
    		{
                //disable HINT icon after dragging of the Wrong shape
                commonNavBar.disableHintIcon();
                
                
    			//console.log("wrong");
    			if(target == _this.b2)
    			{
    				target.x = _this.opt1X;
    				target.y = _this.opt1Y;
                    
    			}
    			else if(target == _this.b3)
    			{
    				target.x = _this.opt2X;
    				target.y = _this.opt2Y;
                    
    			}
    			else if(target == _this.b4)
    			{
    				target.x = _this.opt3X;
    				target.y = _this.opt3Y;
                    
    			}
                
    			_this.wrongAns1(target);
    		}
    	}
    	else
    	{
           
    		if(target == _this.b2)
    			{
    				target.x = _this.opt1X;
    				target.y = _this.opt1Y;
    			}
    			else if(target == _this.b3)
    			{
    				target.x = _this.opt2X;
    				target.y = _this.opt2Y;
    			}
    			else if(target == _this.b4)
    			{
    				target.x = _this.opt3X;
    				target.y = _this.opt3Y;
    			}
    	}
    	
    },

	checkOverlap:function(spriteA, spriteB) 
	{

	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    
    getVoice:function()
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
            
        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1B/English/1.1A2.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1B/Hindi/1.1A2.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1B/Kannada/1.1A2.mp3");
        }
        else if(window.languageSelected == "Gujarati")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/1.1B/1.1A2.mp3");
        }
		else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/1.1B/Odiya/1.1A2.mp3");
			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
       
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
    
    shutdown:function()
    {
        _this.stopVoice();

        window.score = this.score;
            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"fraction_NSFG_1_1state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"fraction_NSFG_1_1state", "fullycomplete");
                localStorage.setItem(window.avatarName+"fraction_NSFG_2_1state", "canplay");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }  
    }

};