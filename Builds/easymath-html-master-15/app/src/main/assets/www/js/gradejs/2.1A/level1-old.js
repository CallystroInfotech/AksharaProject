Game.grade2_1Alevel1=function(){};

Game.grade2_1Alevel1.prototype={
	
	init:function(game)
	{
		_this = this;
		
		_this.gameid = "2.1A";
		
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
        
		_this.questionid = null;
		_this.noofAttempts = 0;
		_this.AnsTimerCount = 0;
		_this.firstTime = true;
		_this.sceneCount = 0;
		
		_this.objectGroup = null;
        
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,49,50,51,52,53,54,55,56];
       // _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
		_this.qArrays = _this.shuffle(_this.qArrays);
        _this.no1=0;
        _this.no2=0;
        _this.count1=0;
        _this.count=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);

     
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level21_bg1');
		
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
			_this.state.start('grade1levelSelectionScreen',true,false); 
		},_this);

       _this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
	  // _this.speakerbtn.inputEnabled = true;
		_this.speakerbtn.events.onInputDown.add(function()
		{
			
		   _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            
			_this.getVoice();
			
		},_this);
		
		 _this.generateStarsForTheScene(6);
        
        
   
                //no1++;
		_this.getQuestion();

    },
	
	
	getQuestion:function(target)
    {
		_this.cloudArray = [];
		_this.objectArray = [];
		_this.shadow1Array = [];
		_this.shadow2Array = [];
		_this.opt1Array = [];
		_this.opt2Array = [];
		_this.sceneCount++;

		_this.timer = null;
		_this.timer = _this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		_this.timer.loop(1000, function(){
			_this.AnsTimerCount++;
		}, this);

		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		_this.timer.start();

    	switch(_this.qArrays[_this.no1])
    	{
    		case 1: 
    				_this.questionid = "2.1A1#SCR-"+_this.sceneCount;
					_this.cloudArray = [540,160,'Level21_cloud',1,1,'yes'];
					_this.objectArray = [400,330, 'Level21_tree1',1,1,'yes'];
					_this.shadow1Array = [810,466, 'Level21_sh',0.9,1.1,'yes'];
					_this.shadow2Array = [175,485, 'Level21_sh',0.6,1,'yes'];
					_this.opt1Array = [210,280,'Level21_giraffe',1,1,'yes'];
					_this.opt2Array = [790,380, 'Level21_elephant',1,1,'yes'];
					_this.gotoFirstQuestion(_this.cloudArray,_this.objectArray,_this.shadow1Array,_this.shadow2Array,_this.opt1Array,_this.opt2Array);
    				break;
    		case 2: 
    				_this.questionid = "2.1A2#SCR-"+_this.sceneCount;
					_this.cloudArray = [540,160,'Level21_cloud',1,1,'yes'];
					_this.objectArray = [400,330, 'Level21_tree1',1,1,'yes'];
					_this.shadow1Array = [810,466, 'Level21_sh',0.9,1.1,'yes'];
					_this.shadow2Array = [175,485, 'Level21_sh',0.6,1,'yes'];
					_this.opt1Array = [210,280,'Level21_giraffe',1,1,'yes'];
					_this.opt2Array = [790,380, 'Level21_elephant',1,1,'yes'];
					_this.gotoFirstQuestion(_this.cloudArray,_this.objectArray,_this.shadow1Array,_this.shadow2Array,_this.opt2Array,_this.opt1Array);
    				break;
    		case 3: 
    				_this.questionid = "2.1A3#SCR-"+_this.sceneCount;
					_this.cloudArray = [540,160,'Level21_cloud',1,1,'yes'];
					_this.objectArray = [380,340, 'Level21_house1',1,1,'yes'];
					_this.shadow1Array = [450,255, 'Level21_cat',1,1,'yes'];
					_this.shadow2Array = [700,487, 'Level21_sh',0.6,1,'yes'];
					_this.opt1Array = [270,100,'Level21_bird1',1,1,'yes'];
					_this.opt2Array = [690,430, 'Level21_dog1',1,1,'yes'];
					_this.gotoFirstQuestion(_this.cloudArray,_this.objectArray,_this.shadow1Array,_this.shadow2Array,_this.opt1Array,_this.opt2Array);
    				break;
    		case 4: 
    				_this.questionid = "2.1A4#SCR-"+_this.sceneCount;
					_this.cloudArray = [540,160,'Level21_cloud',1,1,'yes'];
					_this.objectArray = [380,340, 'Level21_house1',1,1,'yes'];
					_this.shadow1Array = [450,255, 'Level21_cat',1,1,'yes'];
					_this.shadow2Array = [700,487, 'Level21_sh',0.6,1,'yes'];
					_this.opt1Array = [270,100,'Level21_bird1',1,1,'yes'];
					_this.opt2Array = [690,430, 'Level21_dog1',1,1,'yes'];
					_this.gotoFirstQuestion(_this.cloudArray,_this.objectArray,_this.shadow1Array,_this.shadow2Array,_this.opt2Array,_this.opt1Array);
    				break;
    		case 5: 
    				_this.questionid = "2.1A7#SCR-"+_this.sceneCount;
					_this.cloudArray = [310,302, 'Level21_ladder1',1,1.0578,'yes'];
					_this.objectArray = [600,380, 'Level21_chair1',1,1,'yes'];
					_this.shadow1Array = [310,473, 'Level21_sh',1.1,1.3,'yes'];
					_this.shadow2Array = [610,494, 'Level21_sh',0.4,1,'yes'];
					_this.opt1Array = [320,105,'Level21_bluemug',1,1.4,'yes'];
					_this.opt2Array = [603,457, 'Level21_pinkpot',1,1,'yes'];
					_this.gotoFirstQuestion(_this.cloudArray,_this.objectArray,_this.shadow1Array,_this.shadow2Array,_this.opt1Array,_this.opt2Array);
    				break;
    		case 6: 
    				_this.questionid = "2.1A5#SCR-"+_this.sceneCount;
					_this.cloudArray = [310,302, 'Level21_ladder1',1,1.0578,'yes'];
					_this.objectArray = [600,380, 'Level21_chair1',1,1,'yes'];
					_this.shadow1Array = [550,475, 'Level21_sh',0.5,1.9,'yes'];
					_this.shadow2Array = [610,494, 'Level21_sh',0.4,1,'yes'];
					_this.opt1Array = [320,105,'Level21_bluemug',1,1.4,'yes'];
					_this.opt2Array = [603,457, 'Level21_pinkpot',1,1,'yes'];
					_this.gotoFirstQuestion(_this.cloudArray,_this.objectArray,_this.shadow1Array,_this.shadow2Array,_this.opt2Array,_this.opt1Array);
					break;
    		case 7: 
    				_this.questionid = "2.1A8#SCR-"+_this.sceneCount;
					_this.cloudArray = [610,380, 'Level21_sofa1',1,1,'yes'];
					_this.objectArray = [600,380, 'Level21_chair1',1,1,'no'];
					_this.shadow1Array = [550,475, 'Level21_sh',0.5,1.9,'yes'];
					_this.shadow2Array = [610,494, 'Level21_sh',0.4,1,'no'];
					_this.opt1Array = [220,130,'Level21_clock1',1,1,'yes'];
					_this.opt2Array = [540,465, 'Level21_book1',1,1,'yes'];
					_this.gotoFirstQuestion(_this.cloudArray,_this.objectArray,_this.shadow1Array,_this.shadow2Array,_this.opt1Array,_this.opt2Array);
    				break;
            case 8: 
            		_this.questionid = "2.1A9#SCR-"+_this.sceneCount;
					_this.cloudArray = [610,380, 'Level21_sofa1',1,1,'yes'];
					_this.objectArray = [600,380, 'Level21_chair1',1,1,'no'];
					_this.shadow1Array = [550,475, 'Level21_sh',0.5,1.9,'yes'];
					_this.shadow2Array = [610,494, 'Level21_sh',0.4,1,'no'];
					_this.opt1Array = [220,130,'Level21_clock1',1,1,'yes'];
					_this.opt2Array = [540,465, 'Level21_book1',1,1,'yes'];
					_this.gotoFirstQuestion(_this.cloudArray,_this.objectArray,_this.shadow1Array,_this.shadow2Array,_this.opt2Array,_this.opt1Array);
    				break;
            case 9: 
            		_this.questionid = "2.1A11#SCR-"+_this.sceneCount;
					_this.cloudArray = [540,180,'Level21_cloud2',1,1,'yes'];
					_this.objectArray = [600,380, 'Level21_chair1',1,1,'no'];
					_this.shadow1Array = [560,490, 'Level21_sh',1,3.6,'yes'];
					_this.shadow2Array = [610,494, 'Level21_sh',0.4,1,'no'];
					_this.opt1Array = [280,140,'Level21_bee1',1,1,'yes'];
					_this.opt2Array = [540,350, 'Level21_elephant1',0.75,1,'yes'];
					_this.gotoFirstQuestion(_this.cloudArray,_this.objectArray,_this.shadow1Array,_this.shadow2Array,_this.opt1Array,_this.opt2Array);
    				break;
            case 10:
            		_this.questionid = "2.1A10#SCR-"+_this.sceneCount; 
					_this.cloudArray = [540,180,'Level21_cloud2',1,1,'yes'];
					_this.objectArray = [600,380, 'Level21_chair1',1,1,'no'];
					_this.shadow1Array = [560,490, 'Level21_sh',1,3.6,'yes'];
					_this.shadow2Array = [610,494, 'Level21_sh',0.4,1,'no'];
					_this.opt1Array = [280,140,'Level21_bee1',1,1,'yes'];
					_this.opt2Array = [540,350, 'Level21_elephant1',0.75,1,'yes'];
					_this.gotoFirstQuestion(_this.cloudArray,_this.objectArray,_this.shadow1Array,_this.shadow2Array,_this.opt2Array,_this.opt1Array);
    				break;
            case 11: 
            		_this.questionid = "2.1A12#SCR-"+_this.sceneCount;
					_this.cloudArray = [540,180,'Level21_cloud2',1,1,'no'];
					_this.objectArray = [600,380, 'Level21_chair1',1,1,'no'];
					_this.shadow1Array = [320,490, 'Level21_sh',1.3,3,'yes'];
					_this.shadow2Array = [700,475, 'Level21_sh',1,2.4,'yes'];
					_this.opt1Array = [320,390,'Level21_papaya1',0.8,1,'yes'];
					_this.opt2Array = [700,420, 'Level21_banana1',0.75,1,'yes'];
					_this.gotoFirstQuestion(_this.cloudArray,_this.objectArray,_this.shadow1Array,_this.shadow2Array,_this.opt1Array,_this.opt2Array);
    				break;
            case 12:
            		_this.questionid = "2.1A13#SCR-"+_this.sceneCount;
					_this.cloudArray = [540,180,'Level21_cloud2',1,1,'no'];
					_this.objectArray = [600,380, 'Level21_chair1',1,1,'no'];
					_this.shadow1Array = [320,490, 'Level21_sh',1.3,3,'yes'];
					_this.shadow2Array = [700,475, 'Level21_sh',1,2.4,'yes'];
					_this.opt1Array = [320,390,'Level21_papaya1',0.8,1,'yes'];
					_this.opt2Array = [700,420, 'Level21_banana1',0.75,1,'yes'];
					_this.gotoFirstQuestion(_this.cloudArray,_this.objectArray,_this.shadow1Array,_this.shadow2Array,_this.opt2Array,_this.opt1Array);
    				break;
            case 13:
            		_this.questionid = "2.1A13#SCR-"+_this.sceneCount;
            		_this.gotoThirteenthQuestion();
    				break;
            case 14: 
            		_this.questionid = "2.1A12#SCR-"+_this.sceneCount;
            		_this.gotoFourteenthQuestion();
    				break;            
            case 15: 
            		_this.questionid = "2.1A10#SCR-"+_this.sceneCount;
            		_this.gotoFifteenthQuestion();
    				break;
            case 16: 
            		_this.questionid = "2.1A11#SCR-"+_this.sceneCount;
            		_this.gotoSixteenthQuestion();
    				break;
            case 17: 
            		_this.questionid = "2.1A14#SCR-"+_this.sceneCount;
            		_this.gotoSeventeenthQuestion();
    				break;
            case 18: 
            		_this.questionid = "2.1A15#SCR-"+_this.sceneCount;
            		_this.gotoEighteenthQuestion();
    				break;
            case 19: 
            		_this.questionid = "2.1A16#SCR-"+_this.sceneCount;
            		_this.gotoNineteenthQuestion();
    				break;
            case 20: 
            		_this.questionid = "2.1A17#SCR-"+_this.sceneCount;
            		_this.gotoTwentythQuestion();
    				break;
            case 21: 
            		_this.questionid = "2.1A18#SCR-"+_this.sceneCount;
            		_this.gotoTwentyonethQuestion();
    				break;
            case 22: 
            		_this.questionid = "2.1A19#SCR-"+_this.sceneCount;
            		_this.gotoTwentytwothQuestion();
    				break;
            case 23: 
            		_this.questionid = "2.1A20#SCR-"+_this.sceneCount;
            		_this.gotoTwentythreethQuestion();
    				break;
            case 24: 
            		_this.questionid = "2.1A21#SCR-"+_this.sceneCount;
            		_this.gotoTwentyfourthQuestion();
    				break;
            case 25: 
            		_this.questionid = "2.1A23#SCR-"+_this.sceneCount;
            		_this.gotoTwentyfifthQuestion();
    				break;
            case 26: 
            		_this.questionid = "2.1A22#SCR-"+_this.sceneCount;
            		_this.gotoTwentysixthQuestion();
    				break;
            case 27: 
            		_this.questionid = "2.1A24#SCR-"+_this.sceneCount;
            		_this.gotoTwentyseventhQuestion();
    				break;
            case 28: 
            		_this.questionid = "2.1A25#SCR-"+_this.sceneCount;
            		_this.gotoTwentyeighthQuestion();
    				break;
            case 29: 
            		_this.questionid = "2.1A26#SCR-"+_this.sceneCount;
            		_this.gotoTwentyninethQuestion();
    				break;
            case 30: 
            		_this.questionid = "2.1A27#SCR-"+_this.sceneCount;
            		_this.gotoThirtythQuestion();
    				break;
            case 31: 
            		_this.questionid = "2.1A28#SCR-"+_this.sceneCount;
            		_this.gotoThirtyonethQuestion();
    				break;
            case 32: 
            		_this.questionid = "2.1A29#SCR-"+_this.sceneCount;
            		_this.gotoThirtytwothQuestion();
    				break;
            case 33: 
            		_this.questionid = "2.1A30#SCR-"+_this.sceneCount;
            		_this.gotoThirtythreethQuestion();
    				break;
            case 34: 
            		_this.questionid = "2.1A31#SCR-"+_this.sceneCount;
            		_this.gotoThirtyfourthQuestion();
    				break;
            case 35: 
            		_this.questionid = "2.1A33#SCR-"+_this.sceneCount;
            		_this.gotoThirtyfifthQuestion();
    				break;
            case 36: 
            		_this.questionid = "2.1A32#SCR-"+_this.sceneCount;
            		_this.gotoThirtysixthQuestion();
    				break;
            case 37: 
            		_this.questionid = "2.1A35#SCR-"+_this.sceneCount;
            		_this.gotoThirtyseventhQuestion();
    				break;
            case 38: 
            		_this.questionid = "2.1A34#SCR-"+_this.sceneCount;
            		_this.gotoThirtyeighthQuestion();
    				break;
            case 39: 
            		_this.questionid = "2.1A36#SCR-"+_this.sceneCount;
            		_this.gotoThirtyninethQuestion();
    				break;
            case 40: 
            		_this.questionid = "2.1A37#SCR-"+_this.sceneCount;
            		_this.gotoFourtythQuestion();
    				break;
            case 41: 
            		_this.questionid = "2.1A38#SCR-"+_this.sceneCount;
            		_this.gotoFourtyonethQuestion();
    				break;
            case 42: 
            		_this.questionid = "2.1A39#SCR-"+_this.sceneCount;
            		_this.gotoFourtytwothQuestion();
    				break;
            case 43: 
            		_this.questionid = "2.1A41#SCR-"+_this.sceneCount;
            		_this.gotoFourtythreethQuestion();
    				break;
            case 44: 
            		_this.questionid = "2.1A40#SCR-"+_this.sceneCount;
            		_this.gotoFourtyfourthQuestion();
    				break;
            case 45: 
            		_this.questionid = "2.1A45#SCR-"+_this.sceneCount;
            		_this.gotoFourtyfifthQuestion();
    				break;
            case 46: 
            		_this.questionid = "2.1A44#SCR-"+_this.sceneCount;
            		_this.gotoFourtysixthQuestion();
    				break;
            case 47: 
            		_this.questionid = "2.1A48#SCR-"+_this.sceneCount;
            		_this.gotoFourtyseventhQuestion();
    				break;
            case 48: 
            		_this.questionid = "2.1A49#SCR-"+_this.sceneCount;
            		_this.gotoFourtyeighthQuestion();
    				break;
            case 49: 
            		_this.questionid = "2.1A50#SCR-"+_this.sceneCount;
            		_this.gotoFourtyninethQuestion();
    				break;
            case 50: 
            		_this.questionid = "2.1A51#SCR-"+_this.sceneCount;
            		_this.gotoFiftythQuestion();
    				break;
            case 51: 
            		_this.questionid = "2.1A52#SCR-"+_this.sceneCount;
            		_this.gotoFiftyonethQuestion();
    				break;
            case 52: 
            		_this.questionid = "2.1A53#SCR-"+_this.sceneCount;
            		_this.gotoFiftytwothQuestion();
    				break;
            case 53: 
            		_this.questionid = "2.1A52#SCR-"+_this.sceneCount;
            		_this.gotoFiftythreethQuestion();
    				break;
            case 54: 
            		_this.questionid = "2.1A53#SCR-"+_this.sceneCount;
            		_this.gotoFiftyfourthQuestion();
    				break;
            case 55: 
            		_this.questionid = "2.1A53#SCR-"+_this.sceneCount;
            		_this.gotoFiftyfifthQuestion();
    				break;
            case 56: 
            		_this.questionid = "2.1A55#SCR-"+_this.sceneCount;
            		_this.gotoFiftysixthQuestion();
    				break;

    	}
        
    },
        
 
    gotoFirstQuestion:function(cloudArray,objArray,shd1Array,shd2Array,opt1Array,opt2Array)
    {
        _this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
        
    	
         
        console.log("here");
    
		
        _this.cloud = _this.add.sprite(cloudArray[0],cloudArray[1],cloudArray[2]);
        _this.cloud.anchor.setTo(0.5); 
        _this.cloud.scale.setTo(cloudArray[3],cloudArray[4]); 
		
		if(cloudArray[5]=="yes")
		{
			_this.cloud.visible = true;
		}
		else
		{
			_this.cloud.visible = false;
		}
		
		
		_this.obj1 = _this.add.sprite(objArray[0],objArray[1],objArray[2]);
    	_this.obj1.anchor.setTo(0.5);
    	_this.obj1.scale.setTo(objArray[3],objArray[4]);
		
		if(objArray[5]=="yes")
		{
			_this.obj1.visible = true;
		}
		else
		{
			_this.obj1.visible = false;
		}
		
		_this.shadow1 = _this.add.sprite(shd1Array[0],shd1Array[1],shd1Array[2]);
    	_this.shadow1.anchor.setTo(0.5);
        _this.shadow1.scale.setTo(shd1Array[3],shd1Array[4]);
		
		if(shd1Array[5]=="yes")
		{
			_this.shadow1.visible = true;
		}
		else
		{
			_this.shadow1.visible = false;
		}
		
		_this.shadow2 = _this.add.sprite(shd2Array[0],shd2Array[1],shd2Array[2]);
    	_this.shadow2.anchor.setTo(0.5);
        _this.shadow2.scale.setTo(shd2Array[3],shd2Array[4]);
		
		if(shd2Array[5]=="yes")
		{
			_this.shadow2.visible = true;
		}
		else
		{
			_this.shadow2.visible = false;
		}
		
    	_this.opt1 = _this.add.sprite(opt1Array[0],opt1Array[1],opt1Array[2]);
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(opt1Array[3],opt1Array[4]);
        _this.opt1.inputEnabled = true;
    	_this.opt1.name = opt1Array[2];
        
        
         
    	_this.opt2 = _this.add.sprite(opt2Array[0],opt2Array[1],opt2Array[2]);
    	_this.opt2.anchor.setTo(0.5);
		_this.opt2.scale.setTo(opt2Array[3],opt2Array[4]);
        _this.opt2.name = opt2Array[2]; 
        _this.opt2.inputEnabled = true;
    	

    	_this.objectGroup = _this.add.group();
     	_this.objectGroup.add(_this.cloud);
         
    	_this.objectGroup.add(_this.obj1);
    	_this.objectGroup.add(_this.shadow1);
        _this.objectGroup.add(_this.shadow2); 
    	_this.objectGroup.add(_this.opt1);
    	_this.objectGroup.add(_this.opt2);
            
       
         
    	_this.objectGroup.x = 1000;
    	_this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
			_this.opt1.events.onInputDown.add(_this.correctAns,_this);
			_this.opt2.events.onInputDown.add(_this.wrongAns,_this);
     }, _this);   
        
    },
    
    
    
    gotoThirteenthQuestion:function(){
	
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
        //no1++;
        

    	_this.mainFlag = _this.add.sprite(320,380,'Level21_key1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21_key1';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt1 = _this.add.sprite(700,320, 'Level21_key2');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.75,1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.name = 'Level21_key2';
    	_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

         _this.opt2= _this.add.sprite(700,340, 'Level21_key2');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.75,1);
        _this.opt2.visible=false;
        
        _this.opt3= _this.add.sprite(700,340, 'Level21_key2');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.75,1);
        _this.opt3.visible=false;
        
    	_this.objectGroup = _this.add.group();

    	_this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
    	_this.objectGroup.add(_this.opt2);
        _this.objectGroup.add(_this.opt3);
    

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
		_this.tween = null;
     }, _this);
    },
    
    gotoFourteenthQuestion:function()
    {
        _this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
        
    	_this.mainFlag = _this.add.sprite(320,380,'Level21_key1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
    	_this.mainFlag.name = 'Level21_key1';
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt1 = _this.add.sprite(700,320, 'Level21_key2');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.75,1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level21_key2';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);

            _this.opt2= _this.add.sprite(700,340, 'Level21_key2');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.75,1);
        _this.opt2.visible=false;
        
        _this.opt3= _this.add.sprite(700,340, 'Level21_key2');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.75,1);
        _this.opt3.visible=false;
        
    	_this.objectGroup = _this.add.group();

    	_this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
    	_this.objectGroup.add(_this.opt2);
        _this.objectGroup.add(_this.opt3);
           
    	
    

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this);
    },
    
    gotoFifteenthQuestion:function()
    {
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
         
          _this.opt2= _this.add.sprite(350,485, 'Level21_sh');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.5,2.4);
         
    	_this.mainFlag = _this.add.sprite(320,340,'Level21_dog2');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21_dog';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         
        _this.opt3= _this.add.sprite(800,465, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,2);
         
        
        _this.opt1 = _this.add.sprite(800,420, 'Level21_cat2');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'Level21_cat';
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

    	_this.objectGroup = _this.add.group();

         _this.objectGroup.add(_this.opt2);
    	_this.objectGroup.add(_this.mainFlag);
         _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt1);
         

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this);
    },
    
    
    gotoSixteenthQuestion:function()
    {
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
           
        _this.opt2= _this.add.sprite(350,485, 'Level21_sh');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.5,2.4);

    	_this.mainFlag = _this.add.sprite(320,340,'Level21_dog2');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
           
        _this.opt3= _this.add.sprite(800,465, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,2);
        
         _this.opt1 = _this.add.sprite(800,420, 'Level21_cat2');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.7,0.7);
       _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);

 		_this.mainFlag.name = 'Level21_dog';
 		_this.opt1.name = 'Level21_cat';

    	_this.objectGroup = _this.add.group();

          _this.objectGroup.add(_this.opt2);
    	_this.objectGroup.add(_this.mainFlag);
         _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt1);
           
                  
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this);
    },
    
    gotoSeventeenthQuestion:function()
    {
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
        
   
        
    	_this.opt1 = _this.add.sprite(500,370, 'Level21_sofa2');
    	_this.opt1.anchor.setTo(0.5);
        
        _this.mainFlag = _this.add.sprite(390,239,'Level21_dog3');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);

          _this.opt3= _this.add.sprite(390,319, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.8,1.2);
       
          _this.opt4= _this.add.sprite(610,450, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.7,1);
        
        _this.opt2 = _this.add.sprite(612,435, 'Level21_snake1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
         
         _this.mainFlag.name = 'Level21_dog';
 		_this.opt2.name = 'Level21_snake';

    	_this.objectGroup = _this.add.group();

       
   
    	_this.objectGroup.add(_this.opt1);
         	_this.objectGroup.add(_this.mainFlag);
         _this.objectGroup.add(_this.opt3);
          _this.objectGroup.add(_this.opt4);
    	_this.objectGroup.add(_this.opt2);
    	
		
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
    
    gotoEighteenthQuestion:function()
    {
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
        
   
    	
        
    	_this.opt1 = _this.add.sprite(500,370, 'Level21_sofa2');
    	_this.opt1.anchor.setTo(0.5);
        
         	_this.mainFlag = _this.add.sprite(390,239,'Level21_dog3');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
      
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
       
         _this.opt3= _this.add.sprite(390,319, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.8,1.2);
       
          _this.opt4= _this.add.sprite(610,450, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.7,1);
        
        _this.opt2 = _this.add.sprite(612,435, 'Level21_snake1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);


         _this.mainFlag.name = 'Level21_dog';
 		_this.opt2.name = 'Level21_snake';
            
                     
    	_this.objectGroup = _this.add.group();

    	_this.objectGroup.add(_this.opt1);
         	_this.objectGroup.add(_this.mainFlag);
         _this.objectGroup.add(_this.opt3);
          _this.objectGroup.add(_this.opt4);
    	_this.objectGroup.add(_this.opt2);
    	

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
    
       
    gotoNineteenthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
        
    	_this.opt1 = _this.add.sprite(490,410, 'Level21_table1');
    	_this.opt1.anchor.setTo(0.5);
        
        _this.opt3= _this.add.sprite(450,313, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.8,1);

        _this.mainFlag = _this.add.sprite(440,235,'Level21_cat3');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt4= _this.add.sprite(470,313, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.8,1);
        
        _this.opt5= _this.add.sprite(520,466, 'Level21_sh');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.7,2.5);
       
       
        _this.opt2 = _this.add.sprite(520,455, 'Level21_book2');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.8,1);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.mainFlag.name = 'Level21_cat';
 		_this.opt2.name = 'Level21_book';

    	_this.objectGroup = _this.add.group();

    
    	_this.objectGroup.add(_this.opt1);
        _this.objectGroup.add(_this.opt3);
        _this.objectGroup.add(_this.mainFlag);
        _this.objectGroup.add(_this.opt4);
        _this.objectGroup.add(_this.opt5);
    	_this.objectGroup.add(_this.opt2);
    

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
    
    gotoTwentythQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
         
       
    	_this.opt1 = _this.add.sprite(490,410, 'Level21_table1');
    	_this.opt1.anchor.setTo(0.5);
        
        _this.opt3= _this.add.sprite(450,313, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.8,1);

        _this.mainFlag = _this.add.sprite(440,235,'Level21_cat3');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
       
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
    	_this.opt4= _this.add.sprite(470,313, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.8,1);
        
        _this.opt5= _this.add.sprite(520,466, 'Level21_sh');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.7,2.5);
       
       
        _this.opt2 = _this.add.sprite(520,455, 'Level21_book2');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.8,1);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
          _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);


        _this.mainFlag.name = 'Level21_cat';
 		_this.opt2.name = 'Level21_book';

    	_this.objectGroup = _this.add.group();

    	_this.objectGroup.add(_this.opt1);
        _this.objectGroup.add(_this.opt3);
        _this.objectGroup.add(_this.mainFlag);
        _this.objectGroup.add(_this.opt4);
        _this.objectGroup.add(_this.opt5);
    	_this.objectGroup.add(_this.opt2);

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
    
    gotoTwentyonethQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
         
       
            
    	_this.opt1 = _this.add.sprite(500,320, 'Level21_sofa3');
    	_this.opt1.anchor.setTo(0.5);

        _this.opt3= _this.add.sprite(380,326, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.7,1);
            
        _this.opt4= _this.add.sprite(380,326, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.7,1);
            
        _this.opt5= _this.add.sprite(530,456, 'Level21_sh');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.7,1);
            
        _this.mainFlag = _this.add.sprite(380,290,'Level21_scooter1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
       
        _this.opt2 = _this.add.sprite(530,435, 'Level21_car1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        _this.mainFlag.name = 'Level21_scooter';
 		_this.opt2.name = 'Level21_car';

            
    	_this.objectGroup = _this.add.group();

    	
    	_this.objectGroup.add(_this.opt1);
        _this.objectGroup.add(_this.opt3);
        _this.objectGroup.add(_this.opt4);
         _this.objectGroup.add(_this.opt5);
        _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt2);
    	
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
    
    gotoTwentytwothQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
       
             
    	_this.opt1 = _this.add.sprite(500,320, 'Level21_sofa3');
    	_this.opt1.anchor.setTo(0.5);

        _this.opt3= _this.add.sprite(380,326, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.7,1);
            
        _this.opt4= _this.add.sprite(380,326, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.7,1);
            
                _this.opt5= _this.add.sprite(530,456, 'Level21_sh');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.7,1);
            
        _this.mainFlag = _this.add.sprite(380,290,'Level21_scooter1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;

        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
       
       _this.opt2 = _this.add.sprite(530,435, 'Level21_car1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.9,0.9);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);

     

    	_this.objectGroup = _this.add.group();

    	
    		_this.objectGroup.add(_this.opt1);
            _this.objectGroup.add(_this.opt3);
                 _this.objectGroup.add(_this.opt4);
              _this.objectGroup.add(_this.opt5);
        _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt2);
    	

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
    
    gotoTwentythreethQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
         
       
        _this.cloud = _this.add.sprite(90,50,'Level21_cloud');
        _this.cloud.scale.setTo(1,1); 
   
    	_this.opt1 = _this.add.sprite(410,300, 'Level21_tree2');
    	_this.opt1.anchor.setTo(0.5);
          _this.opt1.scale.setTo(1,1.1);
          
        _this.mainFlag = _this.add.sprite(375,250,'Level21_bird2');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt3= _this.add.sprite(639,500, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1.3);
       
        _this.opt2 = _this.add.sprite(630,475, 'Level21_croc1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.8,0.8);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

         
          
    

    	_this.objectGroup = _this.add.group();

		_this.objectGroup.add(_this.cloud);
    	_this.objectGroup.add(_this.opt1);
        _this.objectGroup.add(_this.mainFlag);
          _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt2);
    	

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
    
    gotoTwentyfourthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
         
       
       _this.cloud = _this.add.sprite(90,50,'Level21_cloud');
        _this.cloud.scale.setTo(1,1); 
   
    	_this.opt1 = _this.add.sprite(410,300, 'Level21_tree2');
    	_this.opt1.anchor.setTo(0.5);
          _this.opt1.scale.setTo(1,1.1);
          
        _this.mainFlag = _this.add.sprite(375,250,'Level21_bird2');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
       
        _this.opt3= _this.add.sprite(639,500, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1.3);
       
        _this.opt2 = _this.add.sprite(630,475, 'Level21_croc1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.8,0.8);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);

          
        

    	_this.objectGroup = _this.add.group();

	  	_this.objectGroup.add(_this.cloud);
	    _this.objectGroup.add(_this.opt1);
	    _this.objectGroup.add(_this.mainFlag);
	    _this.objectGroup.add(_this.opt3);
	    _this.objectGroup.add(_this.opt2);
	    _this.objectGroup.add(wronggraphics1);
	    _this.objectGroup.add(wronggraphics2);
	    _this.objectGroup.add(wronggraphics3);
	    _this.objectGroup.add(wronggraphics4);

	    _this.objectGroup.x = 1000;
	   	_this.tween = _this.add.tween(_this.objectGroup);
	    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
	       // _this.tween.onComplete.add(_this.addQuestion, _this);

	        _this.tween.onComplete.add(function(){
				_this.tween = null;
	     }, _this); 
    },
    
    gotoTwentyfifthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
         
        _this.cloud3 = _this.add.sprite(80,50,'Level21_cloud3');
        _this.cloud3.scale.setTo(1,1); 
          
           _this.opt3= _this.add.sprite(179,460, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.8,1.3);
          
    	_this.mainFlag = _this.add.sprite(180,390,'Level21_dog2');
    	_this.mainFlag.anchor.setTo(0.5);
          _this.mainFlag.scale.setTo(0.5,0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
       
            
    	_this.opt1 = _this.add.sprite(500,300, 'Level21_house2');
    	_this.opt1.anchor.setTo(0.5);
     
      
       
        _this.opt2 = _this.add.sprite(549,280, 'Level21_cat44');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
          
                  _this.opt4= _this.add.sprite(550,280, 'Level21_z1');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.8,0.94);

          
          
          
    	_this.objectGroup = _this.add.group();

          _this.objectGroup.add(_this.cloud3);
          _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
    	_this.objectGroup.add(_this.opt2);
          	_this.objectGroup.add(_this.opt4);
    	

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
    
    gotoTwentysixthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
         
       _this.cloud3 = _this.add.sprite(80,50,'Level21_cloud3');
        _this.cloud3.scale.setTo(1,1); 
          
           _this.opt3= _this.add.sprite(179,460, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.8,1.3);
          
    	_this.mainFlag = _this.add.sprite(180,390,'Level21_dog2');
    	_this.mainFlag.anchor.setTo(0.5);
          _this.mainFlag.scale.setTo(0.5,0.5);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
       
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
       
            
    	_this.opt1 = _this.add.sprite(500,300, 'Level21_house2');
    	_this.opt1.anchor.setTo(0.5);
     
      
       
        _this.opt2 = _this.add.sprite(549,280, 'Level21_cat44');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
          _this.mainFlag.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);


               _this.opt4= _this.add.sprite(550,280, 'Level21_z1');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.8,0.94);

   
    	_this.objectGroup = _this.add.group();

          _this.objectGroup.add(_this.cloud3);
          _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
    	_this.objectGroup.add(_this.opt2);
          	_this.objectGroup.add(_this.opt4);
    	_this.objectGroup.add(wronggraphics1);
          _this.objectGroup.add(wronggraphics2);
          _this.objectGroup.add(wronggraphics3);

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
    
        
    gotoTwentyseventhQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
     
    	_this.opt1 = _this.add.sprite(500,590, 'Level21_table1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,2.5);
          
        _this.opt3= _this.add.sprite(579,340, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.8,1.3);
          
        _this.opt4= _this.add.sprite(349,345, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.8,1.3);  
          
        _this.mainFlag = _this.add.sprite(350,299,'Level21_fish1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,0.9);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);

       
        _this.opt2 = _this.add.sprite(625,280, 'Level21_cat5');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.8,0.8);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);


         
          
    	_this.objectGroup = _this.add.group();

    	
    	_this.objectGroup.add(_this.opt1);
          _this.objectGroup.add(_this.opt3);
          _this.objectGroup.add(_this.opt4);
        _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt2);
    
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
  
    gotoTwentyeighthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
           
    	_this.opt1 = _this.add.sprite(500,590, 'Level21_table1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.5,2.5);
          
        _this.opt3= _this.add.sprite(579,340, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.8,1.3);
          
        _this.opt4= _this.add.sprite(349,345, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.8,1.3);  
          
        _this.mainFlag = _this.add.sprite(350,299,'Level21_fish1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,0.9);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);

       
        _this.opt2 = _this.add.sprite(625,280, 'Level21_cat5');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.8,0.8);
       _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);

          
    	_this.objectGroup = _this.add.group();

    	
    	_this.objectGroup.add(_this.opt1);
          _this.objectGroup.add(_this.opt3);
          _this.objectGroup.add(_this.opt4);
        _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt2);
    	

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
    
    gotoTwentyninethQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
		
		
        _this.cloud5 = _this.add.sprite(80,50,'Level21_cloud5');
        _this.cloud5.scale.setTo(1,1); 
     
    	_this.opt1 = _this.add.sprite(380,290, 'Level21_house3');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.81,1);
          
        _this.mainFlag = _this.add.sprite(368,375,'Level21_sofa4');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.85,0.85);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);

        _this.opt3= _this.add.sprite(779,436, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.95,1.3);
       
        _this.opt2 = _this.add.sprite(775,380, 'Level21_scooter2');
    	_this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(0.8,0.8);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);


    	_this.objectGroup = _this.add.group();

    	_this.objectGroup.add(_this.cloud5);
    	_this.objectGroup.add(_this.opt1);
        _this.objectGroup.add(_this.mainFlag);
         _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt2);
    	
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
  
       
    gotoThirtythQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
		
		
        _this.cloud5 = _this.add.sprite(80,50,'Level21_cloud5');
        _this.cloud5.scale.setTo(1,1); 
     
    	_this.opt1 = _this.add.sprite(380,290, 'Level21_house3');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.81,1);
          
        _this.mainFlag = _this.add.sprite(368,375,'Level21_sofa4');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.85,0.85);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);

       
        _this.opt3= _this.add.sprite(779,436, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.95,1.3);
       
        _this.opt2 = _this.add.sprite(775,380, 'Level21_scooter2');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
         
          

    	_this.objectGroup = _this.add.group();

    	_this.objectGroup.add(_this.cloud5);
    	_this.objectGroup.add(_this.opt1);
        _this.objectGroup.add(_this.mainFlag);
         _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt2);
    	
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    }, 
    
    gotoThirtyonethQuestion:function(){
        _this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
  

        _this.mainFlag = _this.add.sprite(355,295,'Level21_papaya2');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.75,0.65);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         
        _this.opt3= _this.add.sprite(350,480, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.2,2.3);
         
    	_this.opt1 = _this.add.sprite(350,290, 'Level21_basket1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.81,1);
         
                _this.opt4= _this.add.sprite(700,410, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(1,2.3);
          
        _this.opt2 = _this.add.sprite(695,360, 'Level21_banana1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.95,0.95);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

   
    	_this.objectGroup = _this.add.group();

        _this.objectGroup.add(_this.mainFlag);
         _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt1);
         _this.objectGroup.add(_this.opt4);
        _this.objectGroup.add(_this.opt2);
    	
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
  
    gotoThirtytwothQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
   
        _this.mainFlag = _this.add.sprite(355,295,'Level21_papaya2');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.75,0.65);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        //_this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         
    	 _this.opt3= _this.add.sprite(350,480, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.2,2.3);
         
    	_this.opt1 = _this.add.sprite(350,290, 'Level21_basket1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.81,1);
         
                _this.opt4= _this.add.sprite(700,410, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(1,2.3);
          
        _this.opt2 = _this.add.sprite(695,360, 'Level21_banana1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.95,0.95);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);

         
         
    	_this.objectGroup = _this.add.group();

        _this.objectGroup.add(_this.mainFlag);
         _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt1);
         _this.objectGroup.add(_this.opt4);
        _this.objectGroup.add(_this.opt2);
    	
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
  
    gotoThirtythreethQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
        
        _this.mainFlag = _this.add.sprite(510,100,'Level21_bee2');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.85,0.85);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         
    	_this.opt1 = _this.add.sprite(450,260, 'Level21_flower1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.2,1.3);
        
        _this.opt3= _this.add.sprite(460,495, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.9,2.3);
          
        _this.opt2 = _this.add.sprite(449,425, 'Level21_pot2');
    	_this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1.5,1.5);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        
    	_this.objectGroup = _this.add.group();

        _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
    	_this.objectGroup.add(_this.opt3);
        _this.objectGroup.add(_this.opt2);
    	
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
     }, _this); 
    },
  
    gotoThirtyfourthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
        
        _this.mainFlag = _this.add.sprite(510,100,'Level21_bee2');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.85,0.85);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
            
        _this.opt1 = _this.add.sprite(450,260, 'Level21_flower1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.2,1.3);
        
                _this.opt3= _this.add.sprite(460,495, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.9,2.3);
          
        _this.opt2 = _this.add.sprite(449,425, 'Level21_pot2');
    	_this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1.5,1.5);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);


    	_this.objectGroup = _this.add.group();

        _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
    	_this.objectGroup.add(_this.opt3);
        _this.objectGroup.add(_this.opt2);
    	
    	

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
  
    gotoThirtyfifthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
         
        _this.opt3 = _this.add.sprite(500,540, 'Level21_table1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.8,2);
         
                        _this.opt4= _this.add.sprite(505,335, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(1,2.5);
          
                   _this.opt5= _this.add.sprite(505,335, 'Level21_sh');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(1,2.5);
         
        _this.opt2 = _this.add.sprite(509,325, 'Level21_book1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.5,1.7);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
         
        _this.opt1 = _this.add.sprite(500,272, 'Level21_books');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.8,0.8);
         

         
        _this.mainFlag = _this.add.sprite(500,222,'Level21_book3');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.85,1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         
        
          
         
    	_this.objectGroup = _this.add.group();
       
       _this.objectGroup.add(_this.opt3);
           _this.objectGroup.add(_this.opt4);
          _this.objectGroup.add(_this.opt5);
        _this.objectGroup.add(_this.opt2);
    	_this.objectGroup.add(_this.opt1);
       _this.objectGroup.add(_this.mainFlag);
        

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
  
    
    gotoThirtysixthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
       
        _this.opt3 = _this.add.sprite(500,540, 'Level21_table1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.8,2);
         
                        _this.opt4= _this.add.sprite(505,335, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(1,2.5);
          
                   _this.opt5= _this.add.sprite(505,335, 'Level21_sh');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(1,2.5);
         
        _this.opt2 = _this.add.sprite(509,325, 'Level21_book1');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.5,1.7);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
          _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
         
          
        _this.opt1 = _this.add.sprite(500,272, 'Level21_books');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(0.8,0.8);
         

         
        _this.mainFlag = _this.add.sprite(500,222,'Level21_book3');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.85,1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
       
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         

        
         
    	_this.objectGroup = _this.add.group();
       
       _this.objectGroup.add(_this.opt3);
           _this.objectGroup.add(_this.opt4);
          _this.objectGroup.add(_this.opt5);
        _this.objectGroup.add(_this.opt2);
    	_this.objectGroup.add(_this.opt1);
       _this.objectGroup.add(_this.mainFlag);
        


    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
    
    gotoThirtyseventhQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
         
        
        _this.opt1 = _this.add.sprite(600,350, 'Level21_step1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
         

        _this.opt5= _this.add.sprite(870,237, 'Level21_sh');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.4,1);
          
        _this.opt2 = _this.add.sprite(860,200, 'Level21_mug2');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.3,1.3);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
         
                         _this.opt3= _this.add.sprite(330,420, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.4,1.5);
         
            _this.opt4= _this.add.sprite(330,420, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.4,1.5);
         
        _this.mainFlag = _this.add.sprite(330,360,'Level21_mug1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.9,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         

        



    	_this.objectGroup = _this.add.group();

       
    	_this.objectGroup.add(_this.opt1);
         _this.objectGroup.add(_this.opt5);
        _this.objectGroup.add(_this.opt2);
         _this.objectGroup.add(_this.opt3);
         _this.objectGroup.add(_this.opt4);
    	 _this.objectGroup.add(_this.mainFlag);
        
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
  
    gotoThirtyeighthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
          
        
        _this.opt1 = _this.add.sprite(600,350, 'Level21_step1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
         

        _this.opt5= _this.add.sprite(870,237, 'Level21_sh');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.4,1);
          
        _this.opt2 = _this.add.sprite(860,200, 'Level21_mug2');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.3,1.3);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
         
         _this.opt3= _this.add.sprite(330,420, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.4,1.5);
         
            _this.opt4= _this.add.sprite(330,420, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.4,1.5);
         
        _this.mainFlag = _this.add.sprite(330,360,'Level21_mug1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.9,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         

    	_this.objectGroup = _this.add.group();

       
    	_this.objectGroup.add(_this.opt1);
         _this.objectGroup.add(_this.opt5);
        _this.objectGroup.add(_this.opt2);
         _this.objectGroup.add(_this.opt3);
         _this.objectGroup.add(_this.opt4);
    	 _this.objectGroup.add(_this.mainFlag);
        

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
    
     
    gotoThirtyninethQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
        
        
         
        _this.opt3= _this.add.sprite(480,505, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.1,1.7);
       
        _this.opt1 = _this.add.sprite(480,340, 'Level21_table2');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
         


          
        _this.opt2 = _this.add.sprite(385,444, 'Level21_book4');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
         
        _this.mainFlag = _this.add.sprite(480,133,'Level21_clock2');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1.4,1.4);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         

        

    	_this.objectGroup = _this.add.group();

       _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt1);
        _this.objectGroup.add(_this.opt2);
    	 _this.objectGroup.add(_this.mainFlag);
        

    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
  
    gotoFourtythQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
       
        _this.opt3= _this.add.sprite(480,505, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.1,1.7);
       
        _this.opt1 = _this.add.sprite(480,340, 'Level21_table2');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
         


          
        _this.opt2 = _this.add.sprite(385,444, 'Level21_book4');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
         
          _this.mainFlag = _this.add.sprite(480,133,'Level21_clock2');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1.4,1.4);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         

        

    	_this.objectGroup = _this.add.group();

       _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt1);
        _this.objectGroup.add(_this.opt2);
    	 _this.objectGroup.add(_this.mainFlag);
         
       
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
  
    gotoFourtyonethQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		

        
        _this.cloud = _this.add.sprite(80,70,'Level21_cloud');
        _this.cloud.scale.setTo(1,1); 

         


          
         _this.opt2 = _this.add.sprite(805,260, 'Level21_treee');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1.05);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
         
        _this.mainFlag = _this.add.sprite(250,305,'Level21_treee1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         
        _this.opt1 = _this.add.sprite(360,400, 'Level21_house4');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1);
        
        _this.opt3 = _this.add.sprite(360,430, 'Level21_house4');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.visible=false;

        
         
    	_this.objectGroup = _this.add.group();

       
		_this.objectGroup.add(_this.cloud);
        _this.objectGroup.add(_this.opt2);
    	 _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
        _this.objectGroup.add(_this.opt3);
        
         
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
  
  
    gotoFourtytwothQuestion:function(){
      _this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
          
        
         _this.cloud = _this.add.sprite(80,70,'Level21_cloud');
        _this.cloud.scale.setTo(1,1); 

         


          
        _this.opt2 = _this.add.sprite(805,260, 'Level21_treee');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1.05);
       _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
         
        _this.mainFlag = _this.add.sprite(250,305,'Level21_treee1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         
        _this.opt1 = _this.add.sprite(360,400, 'Level21_house4');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1);
           
           _this.opt3 = _this.add.sprite(360,430, 'Level21_house4');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.visible=false;

        
    	_this.objectGroup = _this.add.group();

       
		_this.objectGroup.add(_this.cloud);
        _this.objectGroup.add(_this.opt2);
    	 _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
           _this.objectGroup.add(_this.opt3);
        
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
  
    gotoFourtythreethQuestion:function(){
    	_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
      
         
		_this.opt3= _this.add.sprite(227,395, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.5,1.7);

                   _this.opt5= _this.add.sprite(770,470, 'Level21_sh');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.9,1.5);
         
         
        _this.opt2 = _this.add.sprite(785,310, 'Level21_mug3');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
         
 
        _this.mainFlag = _this.add.sprite(230,327,'Level21_mug6');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.8,1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         
         _this.opt4= _this.add.sprite(570,495, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(1,1.5);
         
        _this.opt1 = _this.add.sprite(580,440, 'Level21_banana1');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1);

    	_this.objectGroup = _this.add.group();

       
         _this.objectGroup.add(_this.opt3);
         _this.objectGroup.add(_this.opt5);
        _this.objectGroup.add(_this.opt2);
         
    	 _this.objectGroup.add(_this.mainFlag);
         _this.objectGroup.add(_this.opt4);
    	_this.objectGroup.add(_this.opt1);
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
  
    gotoFourtyfourthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		

      _this.opt3= _this.add.sprite(227,395, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.5,1.7);

                   _this.opt5= _this.add.sprite(770,470, 'Level21_sh');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.9,1.5);
         
         
        _this.opt2 = _this.add.sprite(785,310, 'Level21_mug3');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
         
        _this.mainFlag = _this.add.sprite(230,327,'Level21_mug6');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.8,1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         
          _this.opt4= _this.add.sprite(570,495, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(1,1.5);
         
        _this.opt1 = _this.add.sprite(580,440, 'Level21_banana1');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1);

    	_this.objectGroup = _this.add.group();

       
         _this.objectGroup.add(_this.opt3);
         _this.objectGroup.add(_this.opt5);
        _this.objectGroup.add(_this.opt2);
         
    	 _this.objectGroup.add(_this.mainFlag);
         _this.objectGroup.add(_this.opt4);
    	_this.objectGroup.add(_this.opt1);
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
    
    gotoFourtyfifthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
		
      
        _this.cloud7 = _this.add.sprite(100,50,'Level21_cloud7');
        _this.cloud7.scale.setTo(1,1); 

     	_this.opt3= _this.add.sprite(200,370, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.9,1.5);
         
        _this.mainFlag = _this.add.sprite(200,330,'Level21_catss');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1.2,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         
        _this.opt1 = _this.add.sprite(720,350, 'Level21_scooter5');
    	_this.opt1.anchor.setTo(0.5);
       // _this.opt1.scale.setTo(1.95,1.95);
        
        _this.opt4= _this.add.sprite(500,480, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(1,1.5);
        
        _this.opt2 = _this.add.sprite(485,380, 'Level21_dog2');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.7,0.7);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
        
         

    	_this.objectGroup = _this.add.group();

       

      _this.objectGroup.add(_this.cloud7);
        _this.objectGroup.add(_this.opt3);
    	 _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
    	_this.objectGroup.add(_this.opt4);
          _this.objectGroup.add(_this.opt2);
        
        
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
    
    gotoFourtysixthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
        _this.cloud7 = _this.add.sprite(100,50,'Level21_cloud7');
        _this.cloud7.scale.setTo(1,1); 

     	_this.opt3= _this.add.sprite(200,370, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.9,1.5);
         
        _this.mainFlag = _this.add.sprite(200,330,'Level21_catss');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1.2,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         
         _this.opt1 = _this.add.sprite(720,350, 'Level21_scooter5');
    	_this.opt1.anchor.setTo(0.5);
       // _this.opt1.scale.setTo(1.95,1.95);
        
        _this.opt4= _this.add.sprite(500,480, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(1,1.5);
        
        _this.opt2 = _this.add.sprite(485,380, 'Level21_dog2');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.7,0.7);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
         _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
         
        

    	_this.objectGroup = _this.add.group();

       

      _this.objectGroup.add(_this.cloud7);
        _this.objectGroup.add(_this.opt3);
    	 _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
    	_this.objectGroup.add(_this.opt4);
          _this.objectGroup.add(_this.opt2);
        
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
  
    gotoFourtyseventhQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;

        _this.cloud8 = _this.add.sprite(40,130,'Level21_cloud8');
        _this.cloud8.scale.setTo(1,1); 

         _this.mainFlag = _this.add.sprite(155,500, 'Level21_bird3');
    	_this.mainFlag.anchor.setTo(0.5);
         _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        //_this.opt1.scale.setTo(1.65,1.65);
 
         
        
         
             _this.opt3= _this.add.sprite(150,530, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.5,1.5);
         
         
         _this.opt1 = _this.add.sprite(340,380,'Level21_elephant1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.15,1.3);
        //_this.mainFlag.inputEnabled = true;
    	//_this.mainFlag.input.useHandCursor = true;
        
         
           _this.opt4= _this.add.sprite(850,430, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.5,1.5);
        
        _this.opt2 = _this.add.sprite(875,280, 'Level21_giraffe');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.75,0.75);
        //_this.opt2.inputEnabled = true;
    	//_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
         
        


    	_this.objectGroup = _this.add.group();

       

      _this.objectGroup.add(_this.cloud8);
    	 _this.objectGroup.add(_this.mainFlag);
         _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt1);
         _this.objectGroup.add(_this.opt4);
          _this.objectGroup.add(_this.opt2);
        
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
    
    gotoFourtyeighthQuestion:function(){
			
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;


        _this.cloud8 = _this.add.sprite(40,130,'Level21_cloud8');
        _this.cloud8.scale.setTo(1,1); 

 
         _this.mainFlag = _this.add.sprite(340,380,'Level21_elephant1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1.15,1.3);
        //_this.mainFlag.inputEnabled = true;
    	//_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         
          _this.opt3= _this.add.sprite(150,530, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.5,1.5);
         
        _this.opt1 = _this.add.sprite(155,500, 'Level21_bird3');
    	_this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1.65,1.65);
         
           _this.opt4= _this.add.sprite(850,430, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.5,1.5);
        
        _this.opt2 = _this.add.sprite(875,280, 'Level21_giraffe');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(0.75,0.75);
        //_this.opt2.inputEnabled = true;
    	//_this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
       


    	_this.objectGroup = _this.add.group();

       

      	_this.objectGroup.add(_this.cloud8);
    	 _this.objectGroup.add(_this.mainFlag);
         _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt1);
         _this.objectGroup.add(_this.opt4);
          _this.objectGroup.add(_this.opt2);
        _this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

        }, _this); 
    },
    
   	gotoFourtyninethQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
       
       
        _this.cloud7 = _this.add.sprite(170,40,'Level21_cloud7');
        _this.cloud7.scale.setTo(1,1); 

 
         _this.mainFlag = _this.add.sprite(280,110,'Level21_bird1');
    	_this.mainFlag.anchor.setTo(0.5);
       // _this.mainFlag.scale.setTo(0.85,0.85);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         
        _this.opt1 = _this.add.sprite(475,350, 'Level21_treee1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.3,1.5);
       
       _this.opt3 = _this.add.sprite(475,350, 'Level21_treee1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.3,1.6);
       _this.opt3.visible=false;
        
        _this.opt2 = _this.add.sprite(690,390, 'Level21_bee2');
    	_this.opt2.anchor.setTo(0.5);
       // _this.opt2.scale.setTo(0.7,0.7);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

    	_this.objectGroup = _this.add.group();

       

      _this.objectGroup.add(_this.cloud7);
    	 _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
       _this.objectGroup.add(_this.opt3);
          _this.objectGroup.add(_this.opt2);
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
    
    gotoFiftythQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;


        _this.cloud7 = _this.add.sprite(170,40,'Level21_cloud7');
        _this.cloud7.scale.setTo(1,1); 

 
         _this.mainFlag = _this.add.sprite(280,110,'Level21_bird1');
    	_this.mainFlag.anchor.setTo(0.5);
       // _this.mainFlag.scale.setTo(0.85,0.85);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         
         _this.opt1 = _this.add.sprite(475,350, 'Level21_treee1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1.3,1.5);
         
         _this.opt3 = _this.add.sprite(475,350, 'Level21_treee1');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1.3,1.5);
       _this.opt3.visible=false;
        
        
        _this.opt2 = _this.add.sprite(690,390, 'Level21_bee2');
    	_this.opt2.anchor.setTo(0.5);
       // _this.opt2.scale.setTo(0.7,0.7);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
         _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
         
         


    	_this.objectGroup = _this.add.group();

       

      _this.objectGroup.add(_this.cloud7);
    	 _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
         _this.objectGroup.add(_this.opt3);
          _this.objectGroup.add(_this.opt2);
        
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
    
    gotoFiftyonethQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
 
         _this.mainFlag = _this.add.sprite(650,107,'Level21_clock1');
    	_this.mainFlag.anchor.setTo(0.5);
       // _this.mainFlag.scale.setTo(0.85,0.85);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         
        _this.opt1 = _this.add.sprite(505,410, 'Level21_sofa5');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
         
         _this.opt3 = _this.add.sprite(505,410, 'Level21_sofa5');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1.1);
         _this.opt3.visible=false;
        
        _this.opt2 = _this.add.sprite(280,225, 'Level21_painting');
    	_this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(0.7,0.7);
    	_this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
         
        

    	_this.objectGroup = _this.add.group();

       

      
    	 _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
         _this.objectGroup.add(_this.opt3);
          _this.objectGroup.add(_this.opt2);
        _this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
    
    gotoFiftytwothQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;
 
         _this.mainFlag = _this.add.sprite(650,107,'Level21_clock1');
    	_this.mainFlag.anchor.setTo(0.5);
       // _this.mainFlag.scale.setTo(0.85,0.85);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         
        _this.opt1 = _this.add.sprite(505,410, 'Level21_sofa5');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
         
         _this.opt3 = _this.add.sprite(505,410, 'Level21_sofa5');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1.1);
         _this.opt3.visible=false;
        
        _this.opt2 = _this.add.sprite(280,225, 'Level21_painting');
    	_this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(0.7,0.7);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
         

    	_this.objectGroup = _this.add.group();


    	 _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
         _this.objectGroup.add(_this.opt3);
          _this.objectGroup.add(_this.opt2);
        
        _this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },

    gotoFiftythreethQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;

        _this.cloud7 = _this.add.sprite(100,100,'Level21_cloud7');
        _this.cloud7.scale.setTo(1,1); 

         _this.opt4= _this.add.sprite(405,550, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.9,1.5);
 
         _this.mainFlag = _this.add.sprite(420,160,'Level21_drum');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.85,0.95);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         
        _this.opt1 = _this.add.sprite(425,375, 'Level21_stand');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
       
             _this.opt5= _this.add.sprite(540,500, 'Level21_sh');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.4,1);
 
        
        _this.opt2 = _this.add.sprite(550,460, 'Level21_pot4');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.4,1.4);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
       
        _this.opt3= _this.add.sprite(785,290, 'Level21_tree2');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.5,0.5);
       
        
    	_this.objectGroup = _this.add.group();

       

      _this.objectGroup.add(_this.cloud7);
       _this.objectGroup.add(_this.opt4);
    	 _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
       _this.objectGroup.add(_this.opt5);
          _this.objectGroup.add(_this.opt2);
       _this.objectGroup.add(_this.opt3);
       _this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
    
    gotoFiftyfourthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;

        _this.cloud7 = _this.add.sprite(100,100,'Level21_cloud7');
        _this.cloud7.scale.setTo(1,1); 

         _this.opt4= _this.add.sprite(405,550, 'Level21_sh');
    	_this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.9,1.5);
 
         _this.mainFlag = _this.add.sprite(420,160,'Level21_drum');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.85,0.95);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         
        _this.opt1 = _this.add.sprite(425,375, 'Level21_stand');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
       
             _this.opt5= _this.add.sprite(540,500, 'Level21_sh');
    	_this.opt5.anchor.setTo(0.5);
        _this.opt5.scale.setTo(0.4,1);
 
        
        _this.opt2 = _this.add.sprite(550,460, 'Level21_pot4');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.4,1.4);
        _this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
         _this.mainFlag.name = 'rightAnswer';
        _this.opt2.events.onInputDown.add(_this.correctAns,_this);
       
        _this.opt3= _this.add.sprite(785,290, 'Level21_tree2');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.5,0.5);
       
        
       
    	_this.objectGroup = _this.add.group();

       

      _this.objectGroup.add(_this.cloud7);
       _this.objectGroup.add(_this.opt4);
    	 _this.objectGroup.add(_this.mainFlag);
    	_this.objectGroup.add(_this.opt1);
       _this.objectGroup.add(_this.opt5);
          _this.objectGroup.add(_this.opt2);
       _this.objectGroup.add(_this.opt3);
        _this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
  
    gotoFiftyfifthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;


        _this.cloud7 = _this.add.sprite(100,100,'Level21_cloud7');
        _this.cloud7.scale.setTo(1,1); 

 
         _this.mainFlag = _this.add.sprite(564,190,'Level21_kite');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1.2,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'rightAnswer';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
         

        _this.opt3= _this.add.sprite(290,500, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.6,1.5);
        
        _this.opt1 = _this.add.sprite(300,350, 'Level21_treee1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
       

        _this.opt2= _this.add.sprite(790,250, 'Level21_rope');
    	_this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(0.5,0.5);
        
        
        
       
    	_this.objectGroup = _this.add.group();

       

      	_this.objectGroup.add(_this.cloud7);
    	 _this.objectGroup.add(_this.mainFlag);
        _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt1);
		_this.objectGroup.add(_this.opt2);
        _this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
    
    gotoFiftysixthQuestion:function(){
		_this.stopVoice();
		_this.getVoice();
		_this.speakerbtn.inputEnabled = true;


        _this.cloud7 = _this.add.sprite(100,100,'Level21_cloud7');
        _this.cloud7.scale.setTo(1,1); 

 
         _this.mainFlag = _this.add.sprite(564,190,'Level21_kite');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1.2,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
       
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         

        
       
             _this.opt3= _this.add.sprite(290,550, 'Level21_sh');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.6,1.5);
        
        _this.opt1 = _this.add.sprite(300,350, 'Level21_treee1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'rightAnswer';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
       

        _this.opt2= _this.add.sprite(790,250, 'Level21_rope');
    	_this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(0.5,0.5);
        
        
        
       
       
    	_this.objectGroup = _this.add.group();

       

      _this.objectGroup.add(_this.cloud7);
    	 _this.objectGroup.add(_this.mainFlag);
        _this.objectGroup.add(_this.opt3);
    	_this.objectGroup.add(_this.opt1);
		_this.objectGroup.add(_this.opt2);
       
    	_this.objectGroup.x = 1000;
    	 _this.tween = _this.add.tween(_this.objectGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       // _this.tween.onComplete.add(_this.addQuestion, _this);

        _this.tween.onComplete.add(function(){

     }, _this); 
    },
    
    shuffle: function(array)
    {
	    var  currentIndex = array.length, temporaryValue, randomIndex;
	            
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
       
    
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		
		for ( i = 0; i < count; i++)
		{
	
			_this.starsGroup.create(_this.world.centerX-15, 10, 'CommonStarAnim');
			
			for( j =0;j<i;j++)
			{
				if(_this.starsGroup.getChildAt(j))
				{
					_this.starsGroup.getChildAt(j).x-=15;
					_this.starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
	correctAns:function(target)
	{
		
		_this.speakerbtn.inputEnabled = false;
        _this.opt1.events.onInputDown.removeAll();
		_this.opt2.events.onInputDown.removeAll();

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


		_this.anim = target.animations.add('flag1');
			_this.anim.play(15,true);
			
				
				_this.celebrationSound = _this.add.audio('celebrationSound');
				_this.celebrationSound.play();
				
				_this.starAnim = _this.starsGroup.getChildAt(_this.count1);
				_this.sanim = _this.starAnim.animations.add('star');
				_this.sanim.play();
				_this.sanim.onComplete.add(
				function()
				{
					_this.anim.stop();
					_this.anim = null;
					_this.sanim.stop();
					_this.sanim = null;
					_this.removeCelebration();
					
				},this);
			
	},


    wrongAns:function(target)
	{
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


			_this.currentTime = window.timeSaveFunc();
			_this.saveAsment = 
			{ 
				id_game_play: _this.savedVar,
				id_question: _this.questionid,  
				pass: "no",
				time2answer: _this.AnsTimerCount,
				attempts: _this.noofAttempts,
				date_time_submission: _this.currentTime, 
				access_token: window.acctkn 
			}
				
			//absdsjsapi.saveAssessment(_this.saveAsment);


			_this.shake.shake(10, target);
			
			_this.wrongSound = _this.add.audio('waudio');
			_this.wrongSound.play();
				//_this.disableListeners();
			target.events.onInputDown.removeAll();
	},
    
    removeCelebration:function()
	{
		_this.count1++;
		_this.no1++;
		if(_this.no1<6)
		{
            //_this.addQuestion(count1);
			_this.tween = _this.add.tween(_this.objectGroup);
				_this.tween.to({ x: -1000 }, 0, 'Linear', true, 0);
				_this.tween.onComplete.add(
				function()
				{
					_this.tween = null;
					_this.stopVoice();
					_this.destroyEverything();
					_this.getQuestion();
				}, _this);
		}
		else
		{
                 _this.stopVoice();
				_this.state.start('grade2_1AScore',true,false);
		}

	},
    
    destroyEverything:function()
	{
		/*_this.objectGroup.destroy();
		_this.obj1.destroy();
    	_this.shadow1.destroy();
        _this.shadow2.destroy(); 
    	_this.opt1.destroy();
    	_this.opt2.destroy();*/
		
		_this.objectGroup = null;
		_this.cloud = null;
		_this.cloud1 = null;
		_this.cloud2 = null;
		_this.cloud3 = null;
		_this.cloud4 = null;
		_this.cloud5 = null;
		_this.cloud6 = null;
		_this.cloud7 = null;
		_this.obj1=null;
    	_this.shadow1=null;
        _this.shadow2=null;

        _this.mainFlag = null;

    	_this.opt1=null;
    	_this.opt2=null;
    	_this.opt3=null;
    	_this.opt4=null;
    	_this.opt5=null;
    	_this.opt6=null;
    	_this.opt7=null;
    	_this.opt8=null;
	},
	
 
    getVoice:function()
	{	
		_this.stopVoice();	
		
		_this.playQuestionSound = document.createElement('audio');
		_this.src = document.createElement('source');
				
		switch(_this.qArrays[_this.no1])
            {
                case 1 :
						if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E1a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H1a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K1a.mp3");
						}
						break;
                case 2:
						if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E1b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H1b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K1b.mp3");
						}
						break;
                case 3:
						if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E2a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H2a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K2a.mp3");
						}
						break;
                case 4 : 
						if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E2b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H2b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K2b.mp3");
						}
						break;
                case 5 :
						if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E3b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H3b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K3b.mp3");
						}
						break;
                    
                case 6 :
						if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E3a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H3a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K3a.mp3");
						}
						break;
                    
                case 7 :
						if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E4a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H4a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K4a.mp3");
						}
						break;
                    
                case 8 :
						if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E4b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H4b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K4b.mp3");
						}
						break;
                    
                case 9:
                case 16:
						if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E5b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H5b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K5b.mp3");
						}
						break;
                    
                case 10:
                case 15:
						if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E5a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H5a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K5a.mp3");
						}
						break;
                    
                case 11:
                case 14:
						if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E6a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H6a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K6a.mp3");
						}
						break;
                    
                case 12:
                case 13:
						if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E6b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H6b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K6b.mp3");
						}
						break;
                    
                case 17:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E7a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H7a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K7a.mp3");
						}
						break;
                    
                case 18:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E7b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H7b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K7b.mp3");
						}
						break;
                    
                case 19:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E8a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H8a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K8a.mp3");
						}
						break;
                    
                case 20:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E8b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H8b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K8b.mp3");
						}
						break;
                    
                case 21:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E9a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H9a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K9a.mp3");
						}
						break;
                    
                case 22:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E9b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H9b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K9b.mp3");
						}
						break;
                    
                case 23:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E10a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H10a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K10a.mp3");
						}
						break; 
                    
                case 24:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E10b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H10b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K10b.mp3");
						}
						break; 
                    
                case 25:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E11b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H11b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K11b.mp3");
						}
						break;
                    
                case 26:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E11a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H11a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K11a.mp3");
						}
						break; 
                    
                case 27:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E12a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H12a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K21a.mp3");
						}
						break;
                    
                case 28:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E12b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H12b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K12b.mp3");
						}
						break; 
                    
                case 29:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E13a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H13a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K13a.mp3");
						}
						break;
                    
                case 30:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E13b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H13b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K13b.mp3");
						}
						break; 
                    
                case 31:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E14a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H14a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K14a.mp3");
						}
						break; 
                    
                case 32:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E14b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H14b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K14b.mp3");
						}
						break;
                    
                case 33:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E15a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H15a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K15a.mp3");
						}
						break;
                    
                case 34:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E15b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H15b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K15b.mp3");
						}
						break;
                    
                case 35:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E16b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H16b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K16b.mp3");
						}
						break;
                    
                case 36:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E16a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H16a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K16a.mp3");
						}
						break;
                    
                case 37:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E17b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H17b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K17b.mp3");
						}
						break;
                    
                case 38:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E17a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H17a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K17a.mp3");
						}
						break; 
                    
                case 39:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E18a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H18a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K18a.mp3");
						}
						break;
                    
                case 40:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E18b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H18b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K18b.mp3");
						}
						break;
                    
                case 41:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E19a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H19a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K19a.mp3");
						}
						break; 
                    
                case 42:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E19b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H19b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K19b.mp3");
						}
						break; 
                    
                case 43:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E20b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H20b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K20b.mp3");
						}
						break; 
                    
                case 44:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E20a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H20a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K20a.mp3");
						}
						break; 
                    
                case 45:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E21b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H21b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K21b.mp3");
						}
						break;
                    
                case 46:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E21a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H21a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K21a.mp3");
						}
						break;
                    
                case 47:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E22a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H22a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K22a.mp3");
						}
						break; 
                    
                case 48:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E22b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H22b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K22b.mp3");
						}
						break;
                  
                case 49:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E23a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H23a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K23a.mp3");
						}
						break;
                    
                case 50:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E23b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H23b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K23b.mp3");
						}
						break; 
                    
                case 51:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E24a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H24a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K24a.mp3");
						}
						break; 
                    
                case 52:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E24b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H24b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K24b.mp3");
						}
						break;
                    
                case 53:
                case 55:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E25a.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H25a.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K25a.mp3");
						}
						break; 
                    
                case 54:
                case 56:
                		if(window.languageSelected == "English")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/E25b.mp3");
						}
						else if(window.languageSelected == "Hindi")
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/H25b.mp3");
						}
						else
						{
							_this.src.setAttribute("src", "questionSounds/2.1A/K25b.mp3");
						}
						break;
                    
            }
		
		
		//_this.playQuestionSound.play();
		//_this.playQuestionSound.onStop.add(function(){_this.playQuestionSound=null;},this);
		
		console.log(_this.playQuestionSound);
		
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
		_this.background = null;
		_this.tween = null;
		_this.time.events.removeAll();
		_this.playQuestionSound = null;
		_this.celebrationSound = null;
		_this.clickSound = null;
		
		//_this.playQuestionSound.remove();
		//_this.src.remove();
		
		
			
		_this.playQuestionSound=null;
		_this.src = null;
				
		
		
		_this.noofAttempts = null;
		_this.AnsTimerCount = null;
		_this.firstTime = null;
		
		_this.shake = null;
		
		_this.objectGroup = null;
        _this.rightCount = null;
        _this.no11 = null;
        _this.rno11 = null;
        _this.vno11 = null;
        _this.no22 = null;
        _this.count=null;
        _this.count1=null;
        _this.celebration= null;
		
		_this.starsGroup = null;
		_this.flagGroup = null;
		
        _this.qArrays = null;
        _this.qArrays1 = null;
        _this.qArrays2 = null;
        

      
        _this.background = null;
		
		_this.backbtn.events.onInputDown.removeAll();
		_this.backbtn = null;
		
		_this.speakerbtn.events.onInputDown.removeAll();
		_this.speakerbtn = null;
		
		_this.obj1Array = null;
		_this.obj1Array = null;
		_this.obj1Array = null;
		
		_this.opt1.events.onInputDown.removeAll();
		_this.opt2.events.onInputDown.removeAll();
		
		
		_this.objectGroup = null;
		_this.obj1=null;
    	_this.shadow1=null;
        _this.shadow2=null;
    	_this.opt1=null;
    	_this.opt2=null;
		
		_this = null;
	},
	
	
};