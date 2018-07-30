Game.unity3_1_1blevel1=function(){};

Game.unity3_1_1blevel1.prototype={
    init:function(game)
    {
       _this = this;
       telInitializer.gameIdInit("unity3_1_1b",gradeSelected);
       
    },

create:function(game)
    {
        _this.sceneCount = 0;
        
        _this.check = 0;
        _this.qArrays;
        _this.speaker;
        _this.celebration;
        _this.timerDisplay;
        _this.rightmark;
        _this.background;
        _this.click1;
        _this.click2;
        _this.click4;
        _this.click5;
        _this.wmusic;
        _this.tapsound;
        _this.clickSound;
        _this.starsGroup;
        _this.questioNo = 0;
		_this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add(_this.shake);
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.enterTxt = null;
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.toCheckNumberPad = false;
        
        _this.correct=0;
        _this.counterForTimer=0;
        _this.correctflag=0;
        _this.celebration= false;
       
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8];
        _this.qArrays = _this.shuffle(_this.qArrays);
        
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity3_1_2backg');
        
        _this.topbar=_this.add.sprite(0,0,'Level321_navBar');
        _this.topbar.scale.setTo(1,1.1);
        
        _this.backbtn = _this.add.button(10,7,'Level321_CommonBackBtn',function(){ 
        _this.backbtn.events.onInputDown.removeAll();
        _this.stopvoice();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this,0,1,2);
       
        _this.speaker = _this.add.button(610,9,'Level321_CommonSpeakerBtn');
        _this.speaker.events.onInputDown.add(function()
        {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();

        },_this);
        
        _this.timerbg=_this.add.sprite(300,9,'Level321_timebg');
        _this.timerbg.scale.setTo(1.2,1);
        
        _this.timerDisplay = _this.add.text(330,25,_this.minutes + ' : '+_this.seconds);
        _this.timerDisplay.anchor.setTo(0.5);
        _this.timerDisplay.align = 'center';
        _this.timerDisplay.font = 'Oh Whale';
        _this.timerDisplay.fontSize = 20;
        _this.timerDisplay.fill = '#ADFF2F';
        
     /*   _this.dotbox=_this.add.sprite(70,7,'unity3_1_1Adotbox');
        _this.txt1 = _this.add.text(45,17, 'PRACTICE');
        _this.txt1.anchor.setTo(0.5);
        _this.txt1.scale.setTo(1.2,1.2);
        _this.txt1.align = 'center';
        _this.txt1.font = 'Alte Haas Grotesk';
        _this.txt1.fontSize = 10;
        _this.txt1.fill = '#ffffff';
        _this.txt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.dotbox.addChild(_this.txt1);
        
        _this.txt2 = _this.add.text(230,24, 'Comparison');
        _this.txt2.anchor.setTo(0.5);
        _this.txt2.align = 'center';
        _this.txt2.font = 'Alte Haas Grotesk';
        _this.txt2.fontSize = 20;
        _this.txt2.fill = '#ffffff';
        _this.txt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
       */
        _this.generateStarsForTheScene(6);
        _this.getQuestion();  
          
    },

updateTimer:function() {
     _this.counterForTimer++;
    // ////console.log("lololil"+_this.counterForTimer);
     if(_this.counterForTimer>59)
         {
             _this.counterForTimer = 0;
             if(_this.minutes<10){
                 _this.minutes =  _this.minutes+1;
                 _this.seconds = 00;
             }
             else{
                 _this.minutes =  _this.minutes+1;
                   
                 }
         }
    else{
            if (_this.counterForTimer < 10)        
	            _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
      _this.timerDisplay.setText(_this.minutes+':' + _this.seconds);
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
         _this.stopvoice();
        _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         _this.sceneCount++;
        _this.toCheckNumberPad = true;
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
                         {
                            _this.AnsTimerCount++;
                           
                        }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
      _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        
    	//console.log("get"+_this.no11);
        _this.speaker.inputEnabled=true;
        _this.speaker.input.useHandCursor = true;
        _this.questionid =1;
        
        _this.check = 0;
        _this.obj=0;
        _this.obj1=0;
        _this.obj2=0;
        _this.obj3=0;
        _this.obj4=0;
        
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
            /* case 9: _this.gotoNinthQuestion();
    				  break; 
             case 10: _this.gotoTenthQuestion();
    				  break; 
           */
    	}
        
       
        
    },
    
    
    
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			_this.starsGroup.create(_this.world.centerX-15, 13, 'starAnim1');
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
       
     
gotoFirstQuestion:function()
    {
        _this.getVoice();
        _this.questioNo = 1;
        
        _this.obj=10;
        
        _this.tbox =_this.add.sprite(200,280,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 260,140);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
        _this.coinp2 =_this.add.sprite(200,235,'unity3_1_2coinanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(1,1.1); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
        
        _this.dragcoinGrp1.add(_this.coinp2);
        
         _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(520,270,'unity3_1_2coin');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(0.7,0.8);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(565,270,'unity3_1_2coin');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(0.7,0.8);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(610,270,'unity3_1_2coin');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(0.7,0.8);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(655,270,'unity3_1_2coin');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(0.7,0.8);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(700,270,'unity3_1_2coin');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(0.7,0.8);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(745,270,'unity3_1_2coin');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(0.7,0.8);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(790,270,'unity3_1_2coin');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(0.7,0.8);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(835,270,'unity3_1_2coin');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(0.7,0.8);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(880,270,'unity3_1_2coin');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(0.7,0.8);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(925,270,'unity3_1_2coin');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(0.7,0.8);
        _this.coin10.frame=1;
    
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
       
        _this.dragcoinGrp = _this.add.group();
        
        _this.dragcoin1 =_this.add.sprite(520,270,'unity3_1_2coin');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(0.7,0.8); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(565,270,'unity3_1_2coin');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(0.7,0.8); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(610,270,'unity3_1_2coin');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(0.7,0.8); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(655,270,'unity3_1_2coin');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(0.7,0.8); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(700,270,'unity3_1_2coin');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(0.7,0.8); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(745,270,'unity3_1_2coin');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(0.7,0.8); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(790,270,'unity3_1_2coin');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(0.7,0.8); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(835,270,'unity3_1_2coin');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(0.7,0.8); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(880,270,'unity3_1_2coin');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(0.7,0.8); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(925,270,'unity3_1_2coin');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(0.7,0.8); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="10";
     
},
    

gotoSecondQuestion:function(){
       
      _this.getVoice();
        _this.questioNo = 2;
        
        _this.obj=10;
        _this.obj1=20;
    
        
        _this.tbox =_this.add.sprite(200,280,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 260,140);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
        _this.coinp2 =_this.add.sprite(150,235,'unity3_1_2coinanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(1,1.1); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
    
        _this.coinp1 =_this.add.sprite(250,235,'unity3_1_2coinanim');
        _this.coinp1.anchor.setTo(0.5);
        _this.coinp1.scale.setTo(1,1.1); 
        _this.coinp1.visible=false;
        _this.coinp1.frame=0;
        
        _this.dragcoinGrp1.add(_this.coinp2);
        _this.dragcoinGrp1.add(_this.coinp1);
        
         
        _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(520,270,'unity3_1_2coin');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(0.7,0.8);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(565,270,'unity3_1_2coin');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(0.7,0.8);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(610,270,'unity3_1_2coin');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(0.7,0.8);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(655,270,'unity3_1_2coin');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(0.7,0.8);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(700,270,'unity3_1_2coin');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(0.7,0.8);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(745,270,'unity3_1_2coin');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(0.7,0.8);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(790,270,'unity3_1_2coin');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(0.7,0.8);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(835,270,'unity3_1_2coin');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(0.7,0.8);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(880,270,'unity3_1_2coin');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(0.7,0.8);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(925,270,'unity3_1_2coin');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(0.7,0.8);
        _this.coin10.frame=1;
    
        _this.coin11 =_this.add.sprite(520,330,'unity3_1_2coin');
        _this.coin11.anchor.setTo(0.5);
        _this.coin11.scale.setTo(0.7,0.8);
        _this.coin11.frame=1;
        
        _this.coin12 =_this.add.sprite(565,330,'unity3_1_2coin');
        _this.coin12.anchor.setTo(0.5);
        _this.coin12.scale.setTo(0.7,0.8);
        _this.coin12.frame=1;
        
        _this.coin13 =_this.add.sprite(610,330,'unity3_1_2coin');
        _this.coin13.anchor.setTo(0.5);
        _this.coin13.scale.setTo(0.7,0.8);
        _this.coin13.frame=1;
        
        _this.coin14 =_this.add.sprite(655,330,'unity3_1_2coin');
        _this.coin14.anchor.setTo(0.5);
        _this.coin14.scale.setTo(0.7,0.8);
        _this.coin14.frame=1;
        
        _this.coin15 =_this.add.sprite(700,330,'unity3_1_2coin');
        _this.coin15.anchor.setTo(0.5);
        _this.coin15.scale.setTo(0.7,0.8);
        _this.coin15.frame=1;
        
        _this.coin16 =_this.add.sprite(745,330,'unity3_1_2coin');
        _this.coin16.anchor.setTo(0.5);
        _this.coin16.scale.setTo(0.7,0.8);
        _this.coin16.frame=1;
        
        _this.coin17 =_this.add.sprite(790,330,'unity3_1_2coin');
        _this.coin17.anchor.setTo(0.5);
        _this.coin17.scale.setTo(0.7,0.8);
        _this.coin17.frame=1;
        
        _this.coin18 =_this.add.sprite(835,330,'unity3_1_2coin');
        _this.coin18.anchor.setTo(0.5);
        _this.coin18.scale.setTo(0.7,0.8);
        _this.coin18.frame=1;
        
        _this.coin19 =_this.add.sprite(880,330,'unity3_1_2coin');
        _this.coin19.anchor.setTo(0.5);
        _this.coin19.scale.setTo(0.7,0.8);
        _this.coin19.frame=1;
        
        _this.coin20 =_this.add.sprite(925,330,'unity3_1_2coin');
        _this.coin20.anchor.setTo(0.5);
        _this.coin20.scale.setTo(0.7,0.8);
        _this.coin20.frame=1;
        
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
        _this.coinGrp.add(_this.coin11);
        _this.coinGrp.add(_this.coin12);
        _this.coinGrp.add(_this.coin13);
        _this.coinGrp.add(_this.coin14);
        _this.coinGrp.add(_this.coin15);
        _this.coinGrp.add(_this.coin16);
        _this.coinGrp.add(_this.coin17);
        _this.coinGrp.add(_this.coin18);
        _this.coinGrp.add(_this.coin19);
        _this.coinGrp.add(_this.coin20);
    
        _this.dragcoinGrp= _this.add.group();
       
        _this.dragcoin1 =_this.add.sprite(520,270,'unity3_1_2coin');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(0.7,0.8); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(565,270,'unity3_1_2coin');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(0.7,0.8); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(610,270,'unity3_1_2coin');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(0.7,0.8); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(655,270,'unity3_1_2coin');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(0.7,0.8); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(700,270,'unity3_1_2coin');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(0.7,0.8); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(745,270,'unity3_1_2coin');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(0.7,0.8); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(790,270,'unity3_1_2coin');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(0.7,0.8); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(835,270,'unity3_1_2coin');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(0.7,0.8); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(880,270,'unity3_1_2coin');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(0.7,0.8); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(925,270,'unity3_1_2coin');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(0.7,0.8); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin11 =_this.add.sprite(520,330,'unity3_1_2coin');
        _this.dragcoin11.anchor.setTo(0.5); 
        _this.dragcoin11.scale.setTo(0.7,0.8); 
        _this.dragcoin11.frame=0;
        _this.dragcoin11.name=11;
        _this.dragcoin11.inputEnabled = true;
        _this.dragcoin11.input.useHandCursor = true;
        _this.dragcoin11.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin12 =_this.add.sprite(565,330,'unity3_1_2coin');
        _this.dragcoin12.anchor.setTo(0.5); 
        _this.dragcoin12.scale.setTo(0.7,0.8); 
        _this.dragcoin12.frame=0;
        _this.dragcoin12.name=12;
        _this.dragcoin12.inputEnabled = true;
        _this.dragcoin12.input.useHandCursor = true;
        _this.dragcoin12.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin13 =_this.add.sprite(610,330,'unity3_1_2coin');
        _this.dragcoin13.anchor.setTo(0.5); 
        _this.dragcoin13.scale.setTo(0.7,0.8); 
        _this.dragcoin13.frame=0;
        _this.dragcoin13.name=13;
        _this.dragcoin13.inputEnabled = true;
        _this.dragcoin13.input.useHandCursor = true;
        _this.dragcoin13.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin14 =_this.add.sprite(655,330,'unity3_1_2coin');
        _this.dragcoin14.anchor.setTo(0.5); 
        _this.dragcoin14.scale.setTo(0.7,0.8); 
        _this.dragcoin14.frame=0;
        _this.dragcoin14.name=14;
        _this.dragcoin14.inputEnabled = true;
        _this.dragcoin14.input.useHandCursor = true;
        _this.dragcoin14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin15 =_this.add.sprite(700,330,'unity3_1_2coin');
        _this.dragcoin15.anchor.setTo(0.5); 
        _this.dragcoin15.scale.setTo(0.7,0.8); 
        _this.dragcoin15.frame=0;
        _this.dragcoin15.name=15;
        _this.dragcoin15.inputEnabled = true;
        _this.dragcoin15.input.useHandCursor = true;
        _this.dragcoin15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin16 =_this.add.sprite(745,330,'unity3_1_2coin');
        _this.dragcoin16.anchor.setTo(0.5);
        _this.dragcoin16.scale.setTo(0.7,0.8); 
        _this.dragcoin16.frame=0;
        _this.dragcoin16.name=16;
        _this.dragcoin16.inputEnabled = true;
        _this.dragcoin16.input.useHandCursor = true;
        _this.dragcoin16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin17 =_this.add.sprite(790,330,'unity3_1_2coin');
        _this.dragcoin17.anchor.setTo(0.5);
        _this.dragcoin17.scale.setTo(0.7,0.8); 
        _this.dragcoin17.frame=0;
        _this.dragcoin17.name=17;
        _this.dragcoin17.inputEnabled = true;
        _this.dragcoin17.input.useHandCursor = true;
        _this.dragcoin17.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin18 =_this.add.sprite(835,330,'unity3_1_2coin');
        _this.dragcoin18.anchor.setTo(0.5); 
        _this.dragcoin18.scale.setTo(0.7,0.8); 
        _this.dragcoin18.frame=0;
        _this.dragcoin18.name=18;
        _this.dragcoin18.inputEnabled = true;
        _this.dragcoin18.input.useHandCursor = true;
        _this.dragcoin18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin19 =_this.add.sprite(880,330,'unity3_1_2coin');
        _this.dragcoin19.anchor.setTo(0.5);
        _this.dragcoin19.scale.setTo(0.7,0.8); 
        _this.dragcoin19.frame=0;
        _this.dragcoin19.name=19;
        _this.dragcoin19.inputEnabled = true;
        _this.dragcoin19.input.useHandCursor = true;
        _this.dragcoin19.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin20 =_this.add.sprite(925,330,'unity3_1_2coin');
        _this.dragcoin20.anchor.setTo(0.5); 
        _this.dragcoin20.scale.setTo(0.7,0.8); 
        _this.dragcoin20.frame=0;
        _this.dragcoin20.name=20;
        _this.dragcoin20.inputEnabled = true;
        _this.dragcoin20.input.useHandCursor = true;
        _this.dragcoin20.events.onInputDown.add(_this.onDragStart,_this);
    
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        _this.dragcoinGrp.add(_this.dragcoin11);
        _this.dragcoinGrp.add(_this.dragcoin12);
        _this.dragcoinGrp.add(_this.dragcoin13);
        _this.dragcoinGrp.add(_this.dragcoin14);
        _this.dragcoinGrp.add(_this.dragcoin15);
        _this.dragcoinGrp.add(_this.dragcoin16);
        _this.dragcoinGrp.add(_this.dragcoin17);
        _this.dragcoinGrp.add(_this.dragcoin18);
        _this.dragcoinGrp.add(_this.dragcoin19);
        _this.dragcoinGrp.add(_this.dragcoin20);
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="20";
    
},
    
    
gotoThirdQuestion:function(){
       
      _this.getVoice();
        _this.questioNo = 3;
        
       // _this.obj=10;
        //_this.obj1=20;
       // _this.obj2=30;
    
        
        _this.tbox =_this.add.sprite(200,280,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 260,140);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
        _this.coinp =_this.add.sprite(130,235,'unity3_1_2coinanim');
        _this.coinp.anchor.setTo(0.5);
        _this.coinp.scale.setTo(0.7,0.8); 
        _this.coinp.visible=false;
        _this.coinp.frame=0;
    
        _this.coinp1 =_this.add.sprite(200,235,'unity3_1_2coinanim');
        _this.coinp1.anchor.setTo(0.5);
        _this.coinp1.scale.setTo(0.7,0.8); 
        _this.coinp1.visible=false;
        _this.coinp1.frame=0;
    
        _this.coinp2 =_this.add.sprite(270,235,'unity3_1_2coinanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(0.7,0.8); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
        
        _this.dragcoinGrp1.add(_this.coinp);
        _this.dragcoinGrp1.add(_this.coinp1);
        _this.dragcoinGrp1.add(_this.coinp2);
        
        _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(520,330,'unity3_1_2coin');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(0.7,0.8);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(565,330,'unity3_1_2coin');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(0.7,0.8);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(610,330,'unity3_1_2coin');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(0.7,0.8);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(655,330,'unity3_1_2coin');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(0.7,0.8);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(700,330,'unity3_1_2coin');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(0.7,0.8);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(745,330,'unity3_1_2coin');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(0.7,0.8);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(790,330,'unity3_1_2coin');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(0.7,0.8);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(835,330,'unity3_1_2coin');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(0.7,0.8);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(880,330,'unity3_1_2coin');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(0.7,0.8);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(925,330,'unity3_1_2coin');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(0.7,0.8);
        _this.coin10.frame=1;
    
        _this.coin11 =_this.add.sprite(520,270,'unity3_1_2coin');
        _this.coin11.anchor.setTo(0.5);
        _this.coin11.scale.setTo(0.7,0.8);
        _this.coin11.frame=1;
        
        _this.coin12 =_this.add.sprite(565,270,'unity3_1_2coin');
        _this.coin12.anchor.setTo(0.5);
        _this.coin12.scale.setTo(0.7,0.8);
        _this.coin12.frame=1;
        
        _this.coin13 =_this.add.sprite(610,270,'unity3_1_2coin');
        _this.coin13.anchor.setTo(0.5);
        _this.coin13.scale.setTo(0.7,0.8);
        _this.coin13.frame=1;
        
        _this.coin14 =_this.add.sprite(655,270,'unity3_1_2coin');
        _this.coin14.anchor.setTo(0.5);
        _this.coin14.scale.setTo(0.7,0.8);
        _this.coin14.frame=1;
        
        _this.coin15 =_this.add.sprite(700,270,'unity3_1_2coin');
        _this.coin15.anchor.setTo(0.5);
        _this.coin15.scale.setTo(0.7,0.8);
        _this.coin15.frame=1;
        
        _this.coin16 =_this.add.sprite(745,270,'unity3_1_2coin');
        _this.coin16.anchor.setTo(0.5);
        _this.coin16.scale.setTo(0.7,0.8);
        _this.coin16.frame=1;
        
        _this.coin17 =_this.add.sprite(790,270,'unity3_1_2coin');
        _this.coin17.anchor.setTo(0.5);
        _this.coin17.scale.setTo(0.7,0.8);
        _this.coin17.frame=1;
        
        _this.coin18 =_this.add.sprite(835,270,'unity3_1_2coin');
        _this.coin18.anchor.setTo(0.5);
        _this.coin18.scale.setTo(0.7,0.8);
        _this.coin18.frame=1;
        
        _this.coin19 =_this.add.sprite(880,270,'unity3_1_2coin');
        _this.coin19.anchor.setTo(0.5);
        _this.coin19.scale.setTo(0.7,0.8);
        _this.coin19.frame=1;
        
        _this.coin20 =_this.add.sprite(925,270,'unity3_1_2coin');
        _this.coin20.anchor.setTo(0.5);
        _this.coin20.scale.setTo(0.7,0.8);
        _this.coin20.frame=1;
    
        _this.coin21 =_this.add.sprite(520,210,'unity3_1_2coin');
        _this.coin21.anchor.setTo(0.5);
        _this.coin21.scale.setTo(0.7,0.8);
        _this.coin21.frame=1;
        
        _this.coin22 =_this.add.sprite(565,210,'unity3_1_2coin');
        _this.coin22.anchor.setTo(0.5);
        _this.coin22.scale.setTo(0.7,0.8);
        _this.coin22.frame=1;
        
        _this.coin23 =_this.add.sprite(610,210,'unity3_1_2coin');
        _this.coin23.anchor.setTo(0.5);
        _this.coin23.scale.setTo(0.7,0.8);
        _this.coin23.frame=1;
        
        _this.coin24 =_this.add.sprite(655,210,'unity3_1_2coin');
        _this.coin24.anchor.setTo(0.5);
        _this.coin24.scale.setTo(0.7,0.8);
        _this.coin24.frame=1;
        
        _this.coin25 =_this.add.sprite(700,210,'unity3_1_2coin');
        _this.coin25.anchor.setTo(0.5);
        _this.coin25.scale.setTo(0.7,0.8);
        _this.coin25.frame=1;
        
        _this.coin26 =_this.add.sprite(745,210,'unity3_1_2coin');
        _this.coin26.anchor.setTo(0.5);
        _this.coin26.scale.setTo(0.7,0.8);
        _this.coin26.frame=1;
        
        _this.coin27 =_this.add.sprite(790,210,'unity3_1_2coin');
        _this.coin27.anchor.setTo(0.5);
        _this.coin27.scale.setTo(0.7,0.8);
        _this.coin27.frame=1;
        
        _this.coin28 =_this.add.sprite(835,210,'unity3_1_2coin');
        _this.coin28.anchor.setTo(0.5);
        _this.coin28.scale.setTo(0.7,0.8);
        _this.coin28.frame=1;
        
        _this.coin29 =_this.add.sprite(880,210,'unity3_1_2coin');
        _this.coin29.anchor.setTo(0.5);
        _this.coin29.scale.setTo(0.7,0.8);
        _this.coin29.frame=1;
        
        _this.coin30 =_this.add.sprite(925,210,'unity3_1_2coin');
        _this.coin30.anchor.setTo(0.5);
        _this.coin30.scale.setTo(0.7,0.8);
        _this.coin30.frame=1;
        
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
        _this.coinGrp.add(_this.coin11);
        _this.coinGrp.add(_this.coin12);
        _this.coinGrp.add(_this.coin13);
        _this.coinGrp.add(_this.coin14);
        _this.coinGrp.add(_this.coin15);
        _this.coinGrp.add(_this.coin16);
        _this.coinGrp.add(_this.coin17);
        _this.coinGrp.add(_this.coin18);
        _this.coinGrp.add(_this.coin19);
        _this.coinGrp.add(_this.coin20);
        _this.coinGrp.add(_this.coin21);
        _this.coinGrp.add(_this.coin22);
        _this.coinGrp.add(_this.coin23);
        _this.coinGrp.add(_this.coin24);
        _this.coinGrp.add(_this.coin25);
        _this.coinGrp.add(_this.coin26);
        _this.coinGrp.add(_this.coin27);
        _this.coinGrp.add(_this.coin28);
        _this.coinGrp.add(_this.coin29);
        _this.coinGrp.add(_this.coin30);
       
        _this.dragcoinGrp = _this.add.group();
        
        _this.dragcoin1 =_this.add.sprite(520,330,'unity3_1_2coin');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(0.7,0.8); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(565,330,'unity3_1_2coin');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(0.7,0.8); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(610,330,'unity3_1_2coin');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(0.7,0.8); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(655,330,'unity3_1_2coin');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(0.7,0.8); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(700,330,'unity3_1_2coin');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(0.7,0.8); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(745,330,'unity3_1_2coin');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(0.7,0.8); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(790,330,'unity3_1_2coin');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(0.7,0.8); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(835,330,'unity3_1_2coin');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(0.7,0.8); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(880,330,'unity3_1_2coin');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(0.7,0.8); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(925,330,'unity3_1_2coin');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(0.7,0.8); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin11 =_this.add.sprite(520,270,'unity3_1_2coin');
        _this.dragcoin11.anchor.setTo(0.5); 
        _this.dragcoin11.scale.setTo(0.7,0.8); 
        _this.dragcoin11.frame=0;
        _this.dragcoin11.name=11;
        _this.dragcoin11.inputEnabled = true;
        _this.dragcoin11.input.useHandCursor = true;
        _this.dragcoin11.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin12 =_this.add.sprite(565,270,'unity3_1_2coin');
        _this.dragcoin12.anchor.setTo(0.5); 
        _this.dragcoin12.scale.setTo(0.7,0.8); 
        _this.dragcoin12.frame=0;
        _this.dragcoin12.name=12;
        _this.dragcoin12.inputEnabled = true;
        _this.dragcoin12.input.useHandCursor = true;
        _this.dragcoin12.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin13 =_this.add.sprite(610,270,'unity3_1_2coin');
        _this.dragcoin13.anchor.setTo(0.5); 
        _this.dragcoin13.scale.setTo(0.7,0.8); 
        _this.dragcoin13.frame=0;
        _this.dragcoin13.name=13;
        _this.dragcoin13.inputEnabled = true;
        _this.dragcoin13.input.useHandCursor = true;
        _this.dragcoin13.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin14 =_this.add.sprite(655,270,'unity3_1_2coin');
        _this.dragcoin14.anchor.setTo(0.5); 
        _this.dragcoin14.scale.setTo(0.7,0.8); 
        _this.dragcoin14.frame=0;
        _this.dragcoin14.name=14;
        _this.dragcoin14.inputEnabled = true;
        _this.dragcoin14.input.useHandCursor = true;
        _this.dragcoin14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin15 =_this.add.sprite(700,270,'unity3_1_2coin');
        _this.dragcoin15.anchor.setTo(0.5); 
        _this.dragcoin15.scale.setTo(0.7,0.8); 
        _this.dragcoin15.frame=0;
        _this.dragcoin15.name=15;
        _this.dragcoin15.inputEnabled = true;
        _this.dragcoin15.input.useHandCursor = true;
        _this.dragcoin15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin16 =_this.add.sprite(745,270,'unity3_1_2coin');
        _this.dragcoin16.anchor.setTo(0.5);
        _this.dragcoin16.scale.setTo(0.7,0.8); 
        _this.dragcoin16.frame=0;
        _this.dragcoin16.name=16;
        _this.dragcoin16.inputEnabled = true;
        _this.dragcoin16.input.useHandCursor = true;
        _this.dragcoin16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin17 =_this.add.sprite(790,270,'unity3_1_2coin');
        _this.dragcoin17.anchor.setTo(0.5);
        _this.dragcoin17.scale.setTo(0.7,0.8); 
        _this.dragcoin17.frame=0;
        _this.dragcoin17.name=17;
        _this.dragcoin17.inputEnabled = true;
        _this.dragcoin17.input.useHandCursor = true;
        _this.dragcoin17.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin18 =_this.add.sprite(835,270,'unity3_1_2coin');
        _this.dragcoin18.anchor.setTo(0.5); 
        _this.dragcoin18.scale.setTo(0.7,0.8); 
        _this.dragcoin18.frame=0;
        _this.dragcoin18.name=18;
        _this.dragcoin18.inputEnabled = true;
        _this.dragcoin18.input.useHandCursor = true;
        _this.dragcoin18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin19 =_this.add.sprite(880,270,'unity3_1_2coin');
        _this.dragcoin19.anchor.setTo(0.5);
        _this.dragcoin19.scale.setTo(0.7,0.8); 
        _this.dragcoin19.frame=0;
        _this.dragcoin19.name=19;
        _this.dragcoin19.inputEnabled = true;
        _this.dragcoin19.input.useHandCursor = true;
        _this.dragcoin19.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin20 =_this.add.sprite(925,270,'unity3_1_2coin');
        _this.dragcoin20.anchor.setTo(0.5); 
        _this.dragcoin20.scale.setTo(0.7,0.8); 
        _this.dragcoin20.frame=0;
        _this.dragcoin20.name=20;
        _this.dragcoin20.inputEnabled = true;
        _this.dragcoin20.input.useHandCursor = true;
        _this.dragcoin20.events.onInputDown.add(_this.onDragStart,_this);
    
    
        _this.dragcoin21 =_this.add.sprite(520,210,'unity3_1_2coin');
        _this.dragcoin21.anchor.setTo(0.5); 
        _this.dragcoin21.scale.setTo(0.7,0.8); 
        _this.dragcoin21.frame=0;
        _this.dragcoin21.name=21;
        _this.dragcoin21.inputEnabled = true;
        _this.dragcoin21.input.useHandCursor = true;
        _this.dragcoin21.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin22 =_this.add.sprite(565,210,'unity3_1_2coin');
        _this.dragcoin22.anchor.setTo(0.5); 
        _this.dragcoin22.scale.setTo(0.7,0.8); 
        _this.dragcoin22.frame=0;
        _this.dragcoin22.name=22;
        _this.dragcoin22.inputEnabled = true;
        _this.dragcoin22.input.useHandCursor = true;
        _this.dragcoin22.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin23 =_this.add.sprite(610,210,'unity3_1_2coin');
        _this.dragcoin23.anchor.setTo(0.5); 
        _this.dragcoin23.scale.setTo(0.7,0.8); 
        _this.dragcoin23.frame=0;
        _this.dragcoin23.name=23;
        _this.dragcoin23.inputEnabled = true;
        _this.dragcoin23.input.useHandCursor = true;
        _this.dragcoin23.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin24 =_this.add.sprite(655,210,'unity3_1_2coin');
        _this.dragcoin24.anchor.setTo(0.5); 
        _this.dragcoin24.scale.setTo(0.7,0.8); 
        _this.dragcoin24.frame=0;
        _this.dragcoin24.name=24;
        _this.dragcoin24.inputEnabled = true;
        _this.dragcoin24.input.useHandCursor = true;
        _this.dragcoin24.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin25 =_this.add.sprite(700,210,'unity3_1_2coin');
        _this.dragcoin25.anchor.setTo(0.5);
        _this.dragcoin25.scale.setTo(0.7,0.8); 
        _this.dragcoin25.frame=0;
        _this.dragcoin25.name=25;
        _this.dragcoin25.inputEnabled = true;
        _this.dragcoin25.input.useHandCursor = true;
        _this.dragcoin25.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin26 =_this.add.sprite(745,210,'unity3_1_2coin');
        _this.dragcoin26.anchor.setTo(0.5); 
        _this.dragcoin26.scale.setTo(0.7,0.8); 
        _this.dragcoin26.frame=0;
        _this.dragcoin26.name=26;
        _this.dragcoin26.inputEnabled = true;
        _this.dragcoin26.input.useHandCursor = true;
        _this.dragcoin26.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin27 =_this.add.sprite(790,210,'unity3_1_2coin');
        _this.dragcoin27.anchor.setTo(0.5); 
        _this.dragcoin27.scale.setTo(0.7,0.8); 
        _this.dragcoin27.frame=0;
        _this.dragcoin27.name=27;
        _this.dragcoin27.inputEnabled = true;
        _this.dragcoin27.input.useHandCursor = true;
        _this.dragcoin27.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin28 =_this.add.sprite(835,210,'unity3_1_2coin');
        _this.dragcoin28.anchor.setTo(0.5); 
        _this.dragcoin28.scale.setTo(0.7,0.8); 
        _this.dragcoin28.frame=0;
        _this.dragcoin28.name=28;
        _this.dragcoin28.inputEnabled = true;
        _this.dragcoin28.input.useHandCursor = true;
        _this.dragcoin28.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin29 =_this.add.sprite(880,210,'unity3_1_2coin');
        _this.dragcoin29.anchor.setTo(0.5);
        _this.dragcoin29.scale.setTo(0.7,0.8); 
        _this.dragcoin29.frame=0;
        _this.dragcoin29.name=29;
        _this.dragcoin29.inputEnabled = true;
        _this.dragcoin29.input.useHandCursor = true;
        _this.dragcoin29.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin30 =_this.add.sprite(925,210,'unity3_1_2coin');
        _this.dragcoin30.anchor.setTo(0.5);
        _this.dragcoin30.scale.setTo(0.7,0.8); 
        _this.dragcoin30.frame=0;
        _this.dragcoin30.name=30;
        _this.dragcoin30.inputEnabled = true;
        _this.dragcoin30.input.useHandCursor = true;
        _this.dragcoin30.events.onInputDown.add(_this.onDragStart,_this);
    
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        _this.dragcoinGrp.add(_this.dragcoin11);
        _this.dragcoinGrp.add(_this.dragcoin12);
        _this.dragcoinGrp.add(_this.dragcoin13);
        _this.dragcoinGrp.add(_this.dragcoin14);
        _this.dragcoinGrp.add(_this.dragcoin15);
        _this.dragcoinGrp.add(_this.dragcoin16);
        _this.dragcoinGrp.add(_this.dragcoin17);
        _this.dragcoinGrp.add(_this.dragcoin18);
        _this.dragcoinGrp.add(_this.dragcoin19);
        _this.dragcoinGrp.add(_this.dragcoin20);
        _this.dragcoinGrp.add(_this.dragcoin21);
        _this.dragcoinGrp.add(_this.dragcoin22);
        _this.dragcoinGrp.add(_this.dragcoin23);
        _this.dragcoinGrp.add(_this.dragcoin24);
        _this.dragcoinGrp.add(_this.dragcoin25);
        _this.dragcoinGrp.add(_this.dragcoin26);
        _this.dragcoinGrp.add(_this.dragcoin27);
        _this.dragcoinGrp.add(_this.dragcoin28);
        _this.dragcoinGrp.add(_this.dragcoin29);
        _this.dragcoinGrp.add(_this.dragcoin30);
        
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="30";
   
    
},
    
    
    
gotoFourthQuestion:function(){
    
      _this.getVoice();
        _this.questioNo = 4;
        
        //_this.obj=10;
        //_this.obj1=20;
        //_this.obj2=30;
        //_this.obj3=40;
    
        _this.tbox =_this.add.sprite(200,280,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 260,140);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
        _this.coinp =_this.add.sprite(180,250,'unity3_1_2boxanim');
        _this.coinp.anchor.setTo(0.5);
        _this.coinp.scale.setTo(0.8,0.9); 
        _this.coinp.visible=false;
        _this.coinp.frame=0;
    
        _this.coinp1 =_this.add.sprite(180,267,'unity3_1_2boxanim');
        _this.coinp1.anchor.setTo(0.5);
        _this.coinp1.scale.setTo(0.8,0.9); 
        _this.coinp1.visible=false;
        _this.coinp1.frame=0;
    
        _this.coinp2 =_this.add.sprite(180,283,'unity3_1_2boxanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(0.8,0.9); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
    
        _this.coinp3 =_this.add.sprite(180,300,'unity3_1_2boxanim');
        _this.coinp3.anchor.setTo(0.5);
        _this.coinp3.scale.setTo(0.8,0.9); 
        _this.coinp3.visible=false;
        _this.coinp3.frame=0;
        
        _this.dragcoinGrp1.add(_this.coinp);
        _this.dragcoinGrp1.add(_this.coinp1);
        _this.dragcoinGrp1.add(_this.coinp2);
        _this.dragcoinGrp1.add(_this.coinp3);
        
        _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(520,330,'unity3_1_2box');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(0.85,1);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(565,330,'unity3_1_2box');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(0.85,1);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(610,330,'unity3_1_2box');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(0.85,1);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(655,330,'unity3_1_2box');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(0.85,1);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(700,330,'unity3_1_2box');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(0.85,1);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(745,330,'unity3_1_2box');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(0.85,1);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(790,330,'unity3_1_2box');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(0.85,1);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(835,330,'unity3_1_2box');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(0.85,1);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(880,330,'unity3_1_2box');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(0.85,1);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(925,330,'unity3_1_2box');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(0.85,1);
        _this.coin10.frame=1;
    
        _this.coin11 =_this.add.sprite(520,270,'unity3_1_2box');
        _this.coin11.anchor.setTo(0.5);
        _this.coin11.scale.setTo(0.85,1);
        _this.coin11.frame=1;
        
        _this.coin12 =_this.add.sprite(565,270,'unity3_1_2box');
        _this.coin12.anchor.setTo(0.5);
        _this.coin12.scale.setTo(0.85,1);
        _this.coin12.frame=1;
        
        _this.coin13 =_this.add.sprite(610,270,'unity3_1_2box');
        _this.coin13.anchor.setTo(0.5);
        _this.coin13.scale.setTo(0.85,1);
        _this.coin13.frame=1;
        
        _this.coin14 =_this.add.sprite(655,270,'unity3_1_2box');
        _this.coin14.anchor.setTo(0.5);
        _this.coin14.scale.setTo(0.85,1);
        _this.coin14.frame=1;
        
        _this.coin15 =_this.add.sprite(700,270,'unity3_1_2box');
        _this.coin15.anchor.setTo(0.5);
        _this.coin15.scale.setTo(0.85,1);
        _this.coin15.frame=1;
        
        _this.coin16 =_this.add.sprite(745,270,'unity3_1_2box');
        _this.coin16.anchor.setTo(0.5);
        _this.coin16.scale.setTo(0.85,1);
        _this.coin16.frame=1;
        
        _this.coin17 =_this.add.sprite(790,270,'unity3_1_2box');
        _this.coin17.anchor.setTo(0.5);
        _this.coin17.scale.setTo(0.85,1);
        _this.coin17.frame=1;
        
        _this.coin18 =_this.add.sprite(835,270,'unity3_1_2box');
        _this.coin18.anchor.setTo(0.5);
        _this.coin18.scale.setTo(0.85,1);
        _this.coin18.frame=1;
        
        _this.coin19 =_this.add.sprite(880,270,'unity3_1_2box');
        _this.coin19.anchor.setTo(0.5);
        _this.coin19.scale.setTo(0.85,1);
        _this.coin19.frame=1;
        
        _this.coin20 =_this.add.sprite(925,270,'unity3_1_2box');
        _this.coin20.anchor.setTo(0.5);
        _this.coin20.scale.setTo(0.85,1);
        _this.coin20.frame=1;
    
        _this.coin21 =_this.add.sprite(520,210,'unity3_1_2box');
        _this.coin21.anchor.setTo(0.5);
        _this.coin21.scale.setTo(0.85,1);
        _this.coin21.frame=1;
        
        _this.coin22 =_this.add.sprite(565,210,'unity3_1_2box');
        _this.coin22.anchor.setTo(0.5);
        _this.coin22.scale.setTo(0.85,1);
        _this.coin22.frame=1;
        
        _this.coin23 =_this.add.sprite(610,210,'unity3_1_2box');
        _this.coin23.anchor.setTo(0.5);
        _this.coin23.scale.setTo(0.85,1);
        _this.coin23.frame=1;
        
        _this.coin24 =_this.add.sprite(655,210,'unity3_1_2box');
        _this.coin24.anchor.setTo(0.5);
        _this.coin24.scale.setTo(0.85,1);
        _this.coin24.frame=1;
        
        _this.coin25 =_this.add.sprite(700,210,'unity3_1_2box');
        _this.coin25.anchor.setTo(0.5);
        _this.coin25.scale.setTo(0.85,1);
        _this.coin25.frame=1;
        
        _this.coin26 =_this.add.sprite(745,210,'unity3_1_2box');
        _this.coin26.anchor.setTo(0.5);
        _this.coin26.scale.setTo(0.85,1);
        _this.coin26.frame=1;
        
        _this.coin27 =_this.add.sprite(790,210,'unity3_1_2box');
        _this.coin27.anchor.setTo(0.5);
        _this.coin27.scale.setTo(0.85,1);
        _this.coin27.frame=1;
        
        _this.coin28 =_this.add.sprite(835,210,'unity3_1_2box');
        _this.coin28.anchor.setTo(0.5);
        _this.coin28.scale.setTo(0.85,1);
        _this.coin28.frame=1;
        
        _this.coin29 =_this.add.sprite(880,210,'unity3_1_2box');
        _this.coin29.anchor.setTo(0.5);
        _this.coin29.scale.setTo(0.85,1);
        _this.coin29.frame=1;
        
        _this.coin30 =_this.add.sprite(925,210,'unity3_1_2box');
        _this.coin30.anchor.setTo(0.5);
        _this.coin30.scale.setTo(0.85,1);
        _this.coin30.frame=1;
    
        _this.coin31 =_this.add.sprite(520,150,'unity3_1_2box');
        _this.coin31.anchor.setTo(0.5);
        _this.coin31.scale.setTo(0.85,1);
        _this.coin31.frame=1;
        
        _this.coin32 =_this.add.sprite(565,150,'unity3_1_2box');
        _this.coin32.anchor.setTo(0.5);
        _this.coin32.scale.setTo(0.85,1);
        _this.coin32.frame=1;
        
        _this.coin33 =_this.add.sprite(610,150,'unity3_1_2box');
        _this.coin33.anchor.setTo(0.5);
        _this.coin33.scale.setTo(0.85,1);
        _this.coin33.frame=1;
        
        _this.coin34 =_this.add.sprite(655,150,'unity3_1_2box');
        _this.coin34.anchor.setTo(0.5);
        _this.coin34.scale.setTo(0.85,1);
        _this.coin34.frame=1;
        
        _this.coin35 =_this.add.sprite(700,150,'unity3_1_2box');
        _this.coin35.anchor.setTo(0.5);
        _this.coin35.scale.setTo(0.85,1);
        _this.coin35.frame=1;
        
        _this.coin36 =_this.add.sprite(745,150,'unity3_1_2box');
        _this.coin36.anchor.setTo(0.5);
        _this.coin36.scale.setTo(0.85,1);
        _this.coin36.frame=1;
        
        _this.coin37 =_this.add.sprite(790,150,'unity3_1_2box');
        _this.coin37.anchor.setTo(0.5);
        _this.coin37.scale.setTo(0.85,1);
        _this.coin37.frame=1;
        
        _this.coin38 =_this.add.sprite(835,150,'unity3_1_2box');
        _this.coin38.anchor.setTo(0.5);
        _this.coin38.scale.setTo(0.85,1);
        _this.coin38.frame=1;
        
        _this.coin39 =_this.add.sprite(880,150,'unity3_1_2box');
        _this.coin39.anchor.setTo(0.5);
        _this.coin39.scale.setTo(0.85,1);
        _this.coin39.frame=1;
        
        _this.coin40 =_this.add.sprite(925,150,'unity3_1_2box');
        _this.coin40.anchor.setTo(0.5);
        _this.coin40.scale.setTo(0.85,1);
        _this.coin40.frame=1;
    
        
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
        _this.coinGrp.add(_this.coin11);
        _this.coinGrp.add(_this.coin12);
        _this.coinGrp.add(_this.coin13);
        _this.coinGrp.add(_this.coin14);
        _this.coinGrp.add(_this.coin15);
        _this.coinGrp.add(_this.coin16);
        _this.coinGrp.add(_this.coin17);
        _this.coinGrp.add(_this.coin18);
        _this.coinGrp.add(_this.coin19);
        _this.coinGrp.add(_this.coin20);
        _this.coinGrp.add(_this.coin21);
        _this.coinGrp.add(_this.coin22);
        _this.coinGrp.add(_this.coin23);
        _this.coinGrp.add(_this.coin24);
        _this.coinGrp.add(_this.coin25);
        _this.coinGrp.add(_this.coin26);
        _this.coinGrp.add(_this.coin27);
        _this.coinGrp.add(_this.coin28);
        _this.coinGrp.add(_this.coin29);
        _this.coinGrp.add(_this.coin30);
        _this.coinGrp.add(_this.coin31);
        _this.coinGrp.add(_this.coin32);
        _this.coinGrp.add(_this.coin33);
        _this.coinGrp.add(_this.coin34);
        _this.coinGrp.add(_this.coin35);
        _this.coinGrp.add(_this.coin36);
        _this.coinGrp.add(_this.coin37);
        _this.coinGrp.add(_this.coin38);
        _this.coinGrp.add(_this.coin39);
        _this.coinGrp.add(_this.coin40);
       
        _this.dragcoinGrp = _this.add.group();
        
        _this.dragcoin1 =_this.add.sprite(520,330,'unity3_1_2box');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(0.85,1); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(565,330,'unity3_1_2box');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(0.85,1); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(610,330,'unity3_1_2box');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(0.85,1); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(655,330,'unity3_1_2box');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(0.85,1); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(700,330,'unity3_1_2box');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(0.85,1); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(745,330,'unity3_1_2box');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(0.85,1); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(790,330,'unity3_1_2box');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(0.85,1); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(835,330,'unity3_1_2box');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(0.85,1); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(880,330,'unity3_1_2box');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(0.85,1); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(925,330,'unity3_1_2box');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(0.85,1); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin11 =_this.add.sprite(520,270,'unity3_1_2box');
        _this.dragcoin11.anchor.setTo(0.5); 
        _this.dragcoin11.scale.setTo(0.85,1); 
        _this.dragcoin11.frame=0;
        _this.dragcoin11.name=11;
        _this.dragcoin11.inputEnabled = true;
        _this.dragcoin11.input.useHandCursor = true;
        _this.dragcoin11.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin12 =_this.add.sprite(565,270,'unity3_1_2box');
        _this.dragcoin12.anchor.setTo(0.5); 
        _this.dragcoin12.scale.setTo(0.85,1); 
        _this.dragcoin12.frame=0;
        _this.dragcoin12.name=12;
        _this.dragcoin12.inputEnabled = true;
        _this.dragcoin12.input.useHandCursor = true;
        _this.dragcoin12.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin13 =_this.add.sprite(610,270,'unity3_1_2box');
        _this.dragcoin13.anchor.setTo(0.5); 
        _this.dragcoin13.scale.setTo(0.85,1); 
        _this.dragcoin13.frame=0;
        _this.dragcoin13.name=13;
        _this.dragcoin13.inputEnabled = true;
        _this.dragcoin13.input.useHandCursor = true;
        _this.dragcoin13.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin14 =_this.add.sprite(655,270,'unity3_1_2box');
        _this.dragcoin14.anchor.setTo(0.5); 
        _this.dragcoin14.scale.setTo(0.85,1); 
        _this.dragcoin14.frame=0;
        _this.dragcoin14.name=14;
        _this.dragcoin14.inputEnabled = true;
        _this.dragcoin14.input.useHandCursor = true;
        _this.dragcoin14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin15 =_this.add.sprite(700,270,'unity3_1_2box');
        _this.dragcoin15.anchor.setTo(0.5); 
        _this.dragcoin15.scale.setTo(0.85,1); 
        _this.dragcoin15.frame=0;
        _this.dragcoin15.name=15;
        _this.dragcoin15.inputEnabled = true;
        _this.dragcoin15.input.useHandCursor = true;
        _this.dragcoin15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin16 =_this.add.sprite(745,270,'unity3_1_2box');
        _this.dragcoin16.anchor.setTo(0.5);
        _this.dragcoin16.scale.setTo(0.85,1); 
        _this.dragcoin16.frame=0;
        _this.dragcoin16.name=16;
        _this.dragcoin16.inputEnabled = true;
        _this.dragcoin16.input.useHandCursor = true;
        _this.dragcoin16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin17 =_this.add.sprite(790,270,'unity3_1_2box');
        _this.dragcoin17.anchor.setTo(0.5);
        _this.dragcoin17.scale.setTo(0.85,1); 
        _this.dragcoin17.frame=0;
        _this.dragcoin17.name=17;
        _this.dragcoin17.inputEnabled = true;
        _this.dragcoin17.input.useHandCursor = true;
        _this.dragcoin17.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin18 =_this.add.sprite(835,270,'unity3_1_2box');
        _this.dragcoin18.anchor.setTo(0.5); 
        _this.dragcoin18.scale.setTo(0.85,1); 
        _this.dragcoin18.frame=0;
        _this.dragcoin18.name=18;
        _this.dragcoin18.inputEnabled = true;
        _this.dragcoin18.input.useHandCursor = true;
        _this.dragcoin18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin19 =_this.add.sprite(880,270,'unity3_1_2box');
        _this.dragcoin19.anchor.setTo(0.5);
        _this.dragcoin19.scale.setTo(0.85,1); 
        _this.dragcoin19.frame=0;
        _this.dragcoin19.name=19;
        _this.dragcoin19.inputEnabled = true;
        _this.dragcoin19.input.useHandCursor = true;
        _this.dragcoin19.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin20 =_this.add.sprite(925,270,'unity3_1_2box');
        _this.dragcoin20.anchor.setTo(0.5); 
        _this.dragcoin20.scale.setTo(0.85,1); 
        _this.dragcoin20.frame=0;
        _this.dragcoin20.name=20;
        _this.dragcoin20.inputEnabled = true;
        _this.dragcoin20.input.useHandCursor = true;
        _this.dragcoin20.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin21 =_this.add.sprite(520,210,'unity3_1_2box');
        _this.dragcoin21.anchor.setTo(0.5); 
        _this.dragcoin21.scale.setTo(0.85,1); 
        _this.dragcoin21.frame=0;
        _this.dragcoin21.name=21;
        _this.dragcoin21.inputEnabled = true;
        _this.dragcoin21.input.useHandCursor = true;
        _this.dragcoin21.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin22 =_this.add.sprite(565,210,'unity3_1_2box');
        _this.dragcoin22.anchor.setTo(0.5); 
        _this.dragcoin22.scale.setTo(0.85,1); 
        _this.dragcoin22.frame=0;
        _this.dragcoin22.name=22;
        _this.dragcoin22.inputEnabled = true;
        _this.dragcoin22.input.useHandCursor = true;
        _this.dragcoin22.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin23 =_this.add.sprite(610,210,'unity3_1_2box');
        _this.dragcoin23.anchor.setTo(0.5); 
        _this.dragcoin23.scale.setTo(0.85,1); 
        _this.dragcoin23.frame=0;
        _this.dragcoin23.name=23;
        _this.dragcoin23.inputEnabled = true;
        _this.dragcoin23.input.useHandCursor = true;
        _this.dragcoin23.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin24 =_this.add.sprite(655,210,'unity3_1_2box');
        _this.dragcoin24.anchor.setTo(0.5); 
        _this.dragcoin24.scale.setTo(0.85,1); 
        _this.dragcoin24.frame=0;
        _this.dragcoin24.name=24;
        _this.dragcoin24.inputEnabled = true;
        _this.dragcoin24.input.useHandCursor = true;
        _this.dragcoin24.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin25 =_this.add.sprite(700,210,'unity3_1_2box');
        _this.dragcoin25.anchor.setTo(0.5);
        _this.dragcoin25.scale.setTo(0.85,1); 
        _this.dragcoin25.frame=0;
        _this.dragcoin25.name=25;
        _this.dragcoin25.inputEnabled = true;
        _this.dragcoin25.input.useHandCursor = true;
        _this.dragcoin25.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin26 =_this.add.sprite(745,210,'unity3_1_2box');
        _this.dragcoin26.anchor.setTo(0.5); 
        _this.dragcoin26.scale.setTo(0.85,1); 
        _this.dragcoin26.frame=0;
        _this.dragcoin26.name=26;
        _this.dragcoin26.inputEnabled = true;
        _this.dragcoin26.input.useHandCursor = true;
        _this.dragcoin26.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin27 =_this.add.sprite(790,210,'unity3_1_2box');
        _this.dragcoin27.anchor.setTo(0.5); 
        _this.dragcoin27.scale.setTo(0.85,1); 
        _this.dragcoin27.frame=0;
        _this.dragcoin27.name=27;
        _this.dragcoin27.inputEnabled = true;
        _this.dragcoin27.input.useHandCursor = true;
        _this.dragcoin27.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin28 =_this.add.sprite(835,210,'unity3_1_2box');
        _this.dragcoin28.anchor.setTo(0.5); 
        _this.dragcoin28.scale.setTo(0.85,1); 
        _this.dragcoin28.frame=0;
        _this.dragcoin28.name=28;
        _this.dragcoin28.inputEnabled = true;
        _this.dragcoin28.input.useHandCursor = true;
        _this.dragcoin28.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin29 =_this.add.sprite(880,210,'unity3_1_2box');
        _this.dragcoin29.anchor.setTo(0.5);
        _this.dragcoin29.scale.setTo(0.85,1); 
        _this.dragcoin29.frame=0;
        _this.dragcoin29.name=29;
        _this.dragcoin29.inputEnabled = true;
        _this.dragcoin29.input.useHandCursor = true;
        _this.dragcoin29.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin30 =_this.add.sprite(925,210,'unity3_1_2box');
        _this.dragcoin30.anchor.setTo(0.5);
        _this.dragcoin30.scale.setTo(0.85,1); 
        _this.dragcoin30.frame=0;
        _this.dragcoin30.name=30;
        _this.dragcoin30.inputEnabled = true;
        _this.dragcoin30.input.useHandCursor = true;
        _this.dragcoin30.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin31 =_this.add.sprite(520,150,'unity3_1_2box');
        _this.dragcoin31.anchor.setTo(0.5); 
        _this.dragcoin31.scale.setTo(0.85,1); 
        _this.dragcoin31.frame=0;
        _this.dragcoin31.name=31;
        _this.dragcoin31.inputEnabled = true;
        _this.dragcoin31.input.useHandCursor = true;
        _this.dragcoin31.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin32 =_this.add.sprite(565,150,'unity3_1_2box');
        _this.dragcoin32.anchor.setTo(0.5); 
        _this.dragcoin32.scale.setTo(0.85,1); 
        _this.dragcoin32.frame=0;
        _this.dragcoin32.name=32;
        _this.dragcoin32.inputEnabled = true;
        _this.dragcoin32.input.useHandCursor = true;
        _this.dragcoin32.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin33 =_this.add.sprite(610,150,'unity3_1_2box');
        _this.dragcoin33.anchor.setTo(0.5); 
        _this.dragcoin33.scale.setTo(0.85,1); 
        _this.dragcoin33.frame=0;
        _this.dragcoin33.name=33;
        _this.dragcoin33.inputEnabled = true;
        _this.dragcoin33.input.useHandCursor = true;
        _this.dragcoin33.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin34 =_this.add.sprite(655,150,'unity3_1_2box');
        _this.dragcoin34.anchor.setTo(0.5); 
        _this.dragcoin34.scale.setTo(0.85,1); 
        _this.dragcoin34.frame=0;
        _this.dragcoin34.name=34;
        _this.dragcoin34.inputEnabled = true;
        _this.dragcoin34.input.useHandCursor = true;
        _this.dragcoin34.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin35 =_this.add.sprite(700,150,'unity3_1_2box');
        _this.dragcoin35.anchor.setTo(0.5);
        _this.dragcoin35.scale.setTo(0.85,1); 
        _this.dragcoin35.frame=0;
        _this.dragcoin35.name=35;
        _this.dragcoin35.inputEnabled = true;
        _this.dragcoin35.input.useHandCursor = true;
        _this.dragcoin35.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin36 =_this.add.sprite(745,150,'unity3_1_2box');
        _this.dragcoin36.anchor.setTo(0.5); 
        _this.dragcoin36.scale.setTo(0.85,1); 
        _this.dragcoin36.frame=0;
        _this.dragcoin36.name=36;
        _this.dragcoin36.inputEnabled = true;
        _this.dragcoin36.input.useHandCursor = true;
        _this.dragcoin36.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin37 =_this.add.sprite(790,150,'unity3_1_2box');
        _this.dragcoin37.anchor.setTo(0.5); 
        _this.dragcoin37.scale.setTo(0.85,1); 
        _this.dragcoin37.frame=0;
        _this.dragcoin37.name=37;
        _this.dragcoin37.inputEnabled = true;
        _this.dragcoin37.input.useHandCursor = true;
        _this.dragcoin37.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin38 =_this.add.sprite(835,150,'unity3_1_2box');
        _this.dragcoin38.anchor.setTo(0.5); 
        _this.dragcoin38.scale.setTo(0.85,1); 
        _this.dragcoin38.frame=0;
        _this.dragcoin38.name=38;
        _this.dragcoin38.inputEnabled = true;
        _this.dragcoin38.input.useHandCursor = true;
        _this.dragcoin38.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin39 =_this.add.sprite(880,150,'unity3_1_2box');
        _this.dragcoin39.anchor.setTo(0.5);
        _this.dragcoin39.scale.setTo(0.85,1); 
        _this.dragcoin39.frame=0;
        _this.dragcoin39.name=39;
        _this.dragcoin39.inputEnabled = true;
        _this.dragcoin39.input.useHandCursor = true;
        _this.dragcoin39.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin40 =_this.add.sprite(925,150,'unity3_1_2box');
        _this.dragcoin40.anchor.setTo(0.5);
        _this.dragcoin40.scale.setTo(0.85,1); 
        _this.dragcoin40.frame=0;
        _this.dragcoin40.name=40;
        _this.dragcoin40.inputEnabled = true;
        _this.dragcoin40.input.useHandCursor = true;
        _this.dragcoin40.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        _this.dragcoinGrp.add(_this.dragcoin11);
        _this.dragcoinGrp.add(_this.dragcoin12);
        _this.dragcoinGrp.add(_this.dragcoin13);
        _this.dragcoinGrp.add(_this.dragcoin14);
        _this.dragcoinGrp.add(_this.dragcoin15);
        _this.dragcoinGrp.add(_this.dragcoin16);
        _this.dragcoinGrp.add(_this.dragcoin17);
        _this.dragcoinGrp.add(_this.dragcoin18);
        _this.dragcoinGrp.add(_this.dragcoin19);
        _this.dragcoinGrp.add(_this.dragcoin20);
        _this.dragcoinGrp.add(_this.dragcoin21);
        _this.dragcoinGrp.add(_this.dragcoin22);
        _this.dragcoinGrp.add(_this.dragcoin23);
        _this.dragcoinGrp.add(_this.dragcoin24);
        _this.dragcoinGrp.add(_this.dragcoin25);
        _this.dragcoinGrp.add(_this.dragcoin26);
        _this.dragcoinGrp.add(_this.dragcoin27);
        _this.dragcoinGrp.add(_this.dragcoin28);
        _this.dragcoinGrp.add(_this.dragcoin29);
        _this.dragcoinGrp.add(_this.dragcoin30);
        _this.dragcoinGrp.add(_this.dragcoin31);
        _this.dragcoinGrp.add(_this.dragcoin32);
        _this.dragcoinGrp.add(_this.dragcoin33);
        _this.dragcoinGrp.add(_this.dragcoin34);
        _this.dragcoinGrp.add(_this.dragcoin35);
        _this.dragcoinGrp.add(_this.dragcoin36);
        _this.dragcoinGrp.add(_this.dragcoin37);
        _this.dragcoinGrp.add(_this.dragcoin38);
        _this.dragcoinGrp.add(_this.dragcoin39);
        _this.dragcoinGrp.add(_this.dragcoin40);
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="40";
    
},
    

gotoFifthQuestion:function(){
    
      _this.getVoice();
        _this.questioNo = 5;
        
       // _this.obj=10;
       // _this.obj1=20;
        //_this.obj2=21;
    
        
        _this.tbox =_this.add.sprite(200,280,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 260,140);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
        _this.coinp =_this.add.sprite(200,255,'unity3_1_2boxanim');
        _this.coinp.anchor.setTo(0.5);
        _this.coinp.scale.setTo(1,1.1); 
        _this.coinp.visible=false;
        _this.coinp.frame=0;
    
        _this.coinp1 =_this.add.sprite(200,273,'unity3_1_2boxanim');
        _this.coinp1.anchor.setTo(0.5);
        _this.coinp1.scale.setTo(1,1.1); 
        _this.coinp1.visible=false;
        _this.coinp1.frame=0;
    
        _this.coinp2 =_this.add.sprite(200,295,'unity3_1_2boxanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(1,1.1); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
        
        _this.dragcoinGrp1.add(_this.coinp);
        _this.dragcoinGrp1.add(_this.coinp1);
        _this.dragcoinGrp1.add(_this.coinp2);
        
         
        _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(520,210,'unity3_1_2box');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(0.85,1);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(565,210,'unity3_1_2box');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(0.85,1);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(610,210,'unity3_1_2box');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(0.85,1);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(655,210,'unity3_1_2box');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(0.85,1);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(700,210,'unity3_1_2box');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(0.85,1);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(745,210,'unity3_1_2box');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(0.85,1);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(790,210,'unity3_1_2box');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(0.85,1);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(835,210,'unity3_1_2box');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(0.85,1);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(880,210,'unity3_1_2box');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(0.85,1);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(925,210,'unity3_1_2box');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(0.85,1);
        _this.coin10.frame=1;
    
        _this.coin11 =_this.add.sprite(520,270,'unity3_1_2box');
        _this.coin11.anchor.setTo(0.5);
        _this.coin11.scale.setTo(0.85,1);
        _this.coin11.frame=1;
        
        _this.coin12 =_this.add.sprite(565,270,'unity3_1_2box');
        _this.coin12.anchor.setTo(0.5);
        _this.coin12.scale.setTo(0.85,1);
        _this.coin12.frame=1;
        
        _this.coin13 =_this.add.sprite(610,270,'unity3_1_2box');
        _this.coin13.anchor.setTo(0.5);
        _this.coin13.scale.setTo(0.85,1);
        _this.coin13.frame=1;
        
        _this.coin14 =_this.add.sprite(655,270,'unity3_1_2box');
        _this.coin14.anchor.setTo(0.5);
        _this.coin14.scale.setTo(0.85,1);
        _this.coin14.frame=1;
        
        _this.coin15 =_this.add.sprite(700,270,'unity3_1_2box');
        _this.coin15.anchor.setTo(0.5);
        _this.coin15.scale.setTo(0.85,1);
        _this.coin15.frame=1;
        
        _this.coin16 =_this.add.sprite(745,270,'unity3_1_2box');
        _this.coin16.anchor.setTo(0.5);
        _this.coin16.scale.setTo(0.85,1);
        _this.coin16.frame=1;
        
        _this.coin17 =_this.add.sprite(790,270,'unity3_1_2box');
        _this.coin17.anchor.setTo(0.5);
        _this.coin17.scale.setTo(0.85,1);
        _this.coin17.frame=1;
        
        _this.coin18 =_this.add.sprite(835,270,'unity3_1_2box');
        _this.coin18.anchor.setTo(0.5);
        _this.coin18.scale.setTo(0.85,1);
        _this.coin18.frame=1;
        
        _this.coin19 =_this.add.sprite(880,270,'unity3_1_2box');
        _this.coin19.anchor.setTo(0.5);
        _this.coin19.scale.setTo(0.85,1);
        _this.coin19.frame=1;
        
        _this.coin20 =_this.add.sprite(925,270,'unity3_1_2box');
        _this.coin20.anchor.setTo(0.5);
        _this.coin20.scale.setTo(0.85,1);
        _this.coin20.frame=1;
    
        _this.coin21 =_this.add.sprite(520,330,'unity3_1_2box');
        _this.coin21.anchor.setTo(0.5);
        _this.coin21.scale.setTo(0.85,1);
        _this.coin21.frame=1;
    
        
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
        _this.coinGrp.add(_this.coin11);
        _this.coinGrp.add(_this.coin12);
        _this.coinGrp.add(_this.coin13);
        _this.coinGrp.add(_this.coin14);
        _this.coinGrp.add(_this.coin15);
        _this.coinGrp.add(_this.coin16);
        _this.coinGrp.add(_this.coin17);
        _this.coinGrp.add(_this.coin18);
        _this.coinGrp.add(_this.coin19);
        _this.coinGrp.add(_this.coin20);
        _this.coinGrp.add(_this.coin21);
    
        _this.dragcoinGrp= _this.add.group();
       
        _this.dragcoin1 =_this.add.sprite(520,210,'unity3_1_2box');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(0.85,1); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(565,210,'unity3_1_2box');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(0.85,1); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(610,210,'unity3_1_2box');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(0.85,1); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(655,210,'unity3_1_2box');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(0.85,1); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(700,210,'unity3_1_2box');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(0.85,1); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(745,210,'unity3_1_2box');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(0.85,1); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(790,210,'unity3_1_2box');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(0.85,1); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(835,210,'unity3_1_2box');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(0.85,1); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(880,210,'unity3_1_2box');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(0.85,1); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(925,210,'unity3_1_2box');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(0.85,1); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin11 =_this.add.sprite(520,270,'unity3_1_2box');
        _this.dragcoin11.anchor.setTo(0.5); 
        _this.dragcoin11.scale.setTo(0.85,1); 
        _this.dragcoin11.frame=0;
        _this.dragcoin11.name=11;
        _this.dragcoin11.inputEnabled = true;
        _this.dragcoin11.input.useHandCursor = true;
        _this.dragcoin11.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin12 =_this.add.sprite(565,270,'unity3_1_2box');
        _this.dragcoin12.anchor.setTo(0.5); 
        _this.dragcoin12.scale.setTo(0.85,1); 
        _this.dragcoin12.frame=0;
        _this.dragcoin12.name=12;
        _this.dragcoin12.inputEnabled = true;
        _this.dragcoin12.input.useHandCursor = true;
        _this.dragcoin12.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin13 =_this.add.sprite(610,270,'unity3_1_2box');
        _this.dragcoin13.anchor.setTo(0.5); 
        _this.dragcoin13.scale.setTo(0.85,1); 
        _this.dragcoin13.frame=0;
        _this.dragcoin13.name=13;
        _this.dragcoin13.inputEnabled = true;
        _this.dragcoin13.input.useHandCursor = true;
        _this.dragcoin13.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin14 =_this.add.sprite(655,270,'unity3_1_2box');
        _this.dragcoin14.anchor.setTo(0.5); 
        _this.dragcoin14.scale.setTo(0.85,1); 
        _this.dragcoin14.frame=0;
        _this.dragcoin14.name=14;
        _this.dragcoin14.inputEnabled = true;
        _this.dragcoin14.input.useHandCursor = true;
        _this.dragcoin14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin15 =_this.add.sprite(700,270,'unity3_1_2box');
        _this.dragcoin15.anchor.setTo(0.5); 
        _this.dragcoin15.scale.setTo(0.85,1); 
        _this.dragcoin15.frame=0;
        _this.dragcoin15.name=15;
        _this.dragcoin15.inputEnabled = true;
        _this.dragcoin15.input.useHandCursor = true;
        _this.dragcoin15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin16 =_this.add.sprite(745,270,'unity3_1_2box');
        _this.dragcoin16.anchor.setTo(0.5);
        _this.dragcoin16.scale.setTo(0.85,1); 
        _this.dragcoin16.frame=0;
        _this.dragcoin16.name=16;
        _this.dragcoin16.inputEnabled = true;
        _this.dragcoin16.input.useHandCursor = true;
        _this.dragcoin16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin17 =_this.add.sprite(790,270,'unity3_1_2box');
        _this.dragcoin17.anchor.setTo(0.5);
        _this.dragcoin17.scale.setTo(0.85,1); 
        _this.dragcoin17.frame=0;
        _this.dragcoin17.name=17;
        _this.dragcoin17.inputEnabled = true;
        _this.dragcoin17.input.useHandCursor = true;
        _this.dragcoin17.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin18 =_this.add.sprite(835,270,'unity3_1_2box');
        _this.dragcoin18.anchor.setTo(0.5); 
        _this.dragcoin18.scale.setTo(0.85,1); 
        _this.dragcoin18.frame=0;
        _this.dragcoin18.name=18;
        _this.dragcoin18.inputEnabled = true;
        _this.dragcoin18.input.useHandCursor = true;
        _this.dragcoin18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin19 =_this.add.sprite(880,270,'unity3_1_2box');
        _this.dragcoin19.anchor.setTo(0.5);
        _this.dragcoin19.scale.setTo(0.85,1); 
        _this.dragcoin19.frame=0;
        _this.dragcoin19.name=19;
        _this.dragcoin19.inputEnabled = true;
        _this.dragcoin19.input.useHandCursor = true;
        _this.dragcoin19.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin20 =_this.add.sprite(925,270,'unity3_1_2box');
        _this.dragcoin20.anchor.setTo(0.5); 
        _this.dragcoin20.scale.setTo(0.85,1); 
        _this.dragcoin20.frame=0;
        _this.dragcoin20.name=20;
        _this.dragcoin20.inputEnabled = true;
        _this.dragcoin20.input.useHandCursor = true;
        _this.dragcoin20.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin21 =_this.add.sprite(520,330,'unity3_1_2box');
        _this.dragcoin21.anchor.setTo(0.5); 
        _this.dragcoin21.scale.setTo(0.85,1); 
        _this.dragcoin21.frame=0;
        _this.dragcoin21.name=21;
        _this.dragcoin21.inputEnabled = true;
        _this.dragcoin21.input.useHandCursor = true;
        _this.dragcoin21.events.onInputDown.add(_this.onDragStart,_this);
    
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        _this.dragcoinGrp.add(_this.dragcoin11);
        _this.dragcoinGrp.add(_this.dragcoin12);
        _this.dragcoinGrp.add(_this.dragcoin13);
        _this.dragcoinGrp.add(_this.dragcoin14);
        _this.dragcoinGrp.add(_this.dragcoin15);
        _this.dragcoinGrp.add(_this.dragcoin16);
        _this.dragcoinGrp.add(_this.dragcoin17);
        _this.dragcoinGrp.add(_this.dragcoin18);
        _this.dragcoinGrp.add(_this.dragcoin19);
        _this.dragcoinGrp.add(_this.dragcoin20);
        _this.dragcoinGrp.add(_this.dragcoin21);
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="21";
    
    
},
   
    
gotoSixthQuestion:function(){
    
       _this.getVoice();
        _this.questioNo = 6;
        
       // _this.obj=10;
       // _this.obj1=13;

        _this.tbox =_this.add.sprite(200,280,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.1,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 260,140);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
        _this.coinp =_this.add.sprite(150,235,'unity3_1_2coinanim');
        _this.coinp.anchor.setTo(0.5);
        _this.coinp.scale.setTo(1,1.1); 
        _this.coinp.visible=false;
        _this.coinp.frame=0;
    
        _this.coinp2 =_this.add.sprite(230,235,'unity3_1_2coinanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(1,1.1); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
        
        _this.dragcoinGrp1.add(_this.coinp);
        _this.dragcoinGrp1.add(_this.coinp2);
        
         _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(520,270,'unity3_1_2coin');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(0.7,0.8);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(565,270,'unity3_1_2coin');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(0.7,0.8);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(610,270,'unity3_1_2coin');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(0.7,0.8);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(655,270,'unity3_1_2coin');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(0.7,0.8);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(700,270,'unity3_1_2coin');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(0.7,0.8);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(745,270,'unity3_1_2coin');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(0.7,0.8);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(790,270,'unity3_1_2coin');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(0.7,0.8);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(835,270,'unity3_1_2coin');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(0.7,0.8);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(880,270,'unity3_1_2coin');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(0.7,0.8);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(925,270,'unity3_1_2coin');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(0.7,0.8);
        _this.coin10.frame=1;
    
        _this.coin11 =_this.add.sprite(520,330,'unity3_1_2coin');
        _this.coin11.anchor.setTo(0.5);
        _this.coin11.scale.setTo(0.7,0.8);
        _this.coin11.frame=1;
    
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
        _this.coinGrp.add(_this.coin11);
       
        _this.dragcoinGrp = _this.add.group();
        
        _this.dragcoin1 =_this.add.sprite(520,270,'unity3_1_2coin');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(0.7,0.8); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(565,270,'unity3_1_2coin');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(0.7,0.8); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(610,270,'unity3_1_2coin');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(0.7,0.8); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(655,270,'unity3_1_2coin');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(0.7,0.8); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(700,270,'unity3_1_2coin');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(0.7,0.8); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(745,270,'unity3_1_2coin');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(0.7,0.8); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(790,270,'unity3_1_2coin');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(0.7,0.8); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(835,270,'unity3_1_2coin');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(0.7,0.8); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(880,270,'unity3_1_2coin');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(0.7,0.8); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(925,270,'unity3_1_2coin');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(0.7,0.8); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin11 =_this.add.sprite(520,330,'unity3_1_2coin');
        _this.dragcoin11.anchor.setTo(0.5); 
        _this.dragcoin11.scale.setTo(0.7,0.8); 
        _this.dragcoin11.frame=0;
        _this.dragcoin11.name=11;
        _this.dragcoin11.inputEnabled = true;
        _this.dragcoin11.input.useHandCursor = true;
        _this.dragcoin11.events.onInputDown.add(_this.onDragStart,_this);
        
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        _this.dragcoinGrp.add(_this.dragcoin11);
        

        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="11";
    
    
},

 gotoSeventhQuestion:function(){
       
      _this.getVoice();
        _this.questioNo = 7;
        
        //_this.obj=10;
        //_this.obj1=20;
        //_this.obj2=30;
    
        
        _this.tbox =_this.add.sprite(200,280,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 260,140);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
        _this.coinp =_this.add.sprite(190,245,'unity3_1_2boxanim');
        _this.coinp.anchor.setTo(0.5);
        _this.coinp.scale.setTo(0.8,0.9); 
        _this.coinp.visible=false;
        _this.coinp.frame=0;
    
        _this.coinp1 =_this.add.sprite(190,260,'unity3_1_2boxanim');
        _this.coinp1.anchor.setTo(0.5);
        _this.coinp1.scale.setTo(0.8,0.9); 
        _this.coinp1.visible=false;
        _this.coinp1.frame=0;
    
        _this.coinp2 =_this.add.sprite(190,275,'unity3_1_2boxanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(0.8,0.9); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
     
        _this.coinp3 =_this.add.sprite(190,290,'unity3_1_2boxanim');
        _this.coinp3.anchor.setTo(0.5);
        _this.coinp3.scale.setTo(0.8,0.9); 
        _this.coinp3.visible=false;
        _this.coinp3.frame=0;
     
        _this.coinp4 =_this.add.sprite(190,305,'unity3_1_2boxanim');
        _this.coinp4.anchor.setTo(0.5);
        _this.coinp4.scale.setTo(0.8,0.9); 
        _this.coinp4.visible=false;
        _this.coinp4.frame=0;
        
        _this.dragcoinGrp1.add(_this.coinp);
        _this.dragcoinGrp1.add(_this.coinp1);
        _this.dragcoinGrp1.add(_this.coinp2);
        _this.dragcoinGrp1.add(_this.coinp3);
        _this.dragcoinGrp1.add(_this.coinp4);
        
        _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(520,330,'unity3_1_2box');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(0.85,1);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(565,330,'unity3_1_2box');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(0.85,1);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(610,330,'unity3_1_2box');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(0.85,1);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(655,330,'unity3_1_2box');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(0.85,1);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(700,330,'unity3_1_2box');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(0.85,1);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(745,330,'unity3_1_2box');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(0.85,1);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(790,330,'unity3_1_2box');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(0.85,1);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(835,330,'unity3_1_2box');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(0.85,1);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(880,330,'unity3_1_2box');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(0.85,1);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(925,330,'unity3_1_2box');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(0.85,1);
        _this.coin10.frame=1;
    
        _this.coin11 =_this.add.sprite(520,270,'unity3_1_2box');
        _this.coin11.anchor.setTo(0.5);
        _this.coin11.scale.setTo(0.85,1);
        _this.coin11.frame=1;
        
        _this.coin12 =_this.add.sprite(565,270,'unity3_1_2box');
        _this.coin12.anchor.setTo(0.5);
        _this.coin12.scale.setTo(0.85,1);
        _this.coin12.frame=1;
        
        _this.coin13 =_this.add.sprite(610,270,'unity3_1_2box');
        _this.coin13.anchor.setTo(0.5);
        _this.coin13.scale.setTo(0.85,1);
        _this.coin13.frame=1;
        
        _this.coin14 =_this.add.sprite(655,270,'unity3_1_2box');
        _this.coin14.anchor.setTo(0.5);
        _this.coin14.scale.setTo(0.85,1);
        _this.coin14.frame=1;
        
        _this.coin15 =_this.add.sprite(700,270,'unity3_1_2box');
        _this.coin15.anchor.setTo(0.5);
        _this.coin15.scale.setTo(0.85,1);
        _this.coin15.frame=1;
        
        _this.coin16 =_this.add.sprite(745,270,'unity3_1_2box');
        _this.coin16.anchor.setTo(0.5);
        _this.coin16.scale.setTo(0.85,1);
        _this.coin16.frame=1;
        
        _this.coin17 =_this.add.sprite(790,270,'unity3_1_2box');
        _this.coin17.anchor.setTo(0.5);
        _this.coin17.scale.setTo(0.85,1);
        _this.coin17.frame=1;
        
        _this.coin18 =_this.add.sprite(835,270,'unity3_1_2box');
        _this.coin18.anchor.setTo(0.5);
        _this.coin18.scale.setTo(0.85,1);
        _this.coin18.frame=1;
        
        _this.coin19 =_this.add.sprite(880,270,'unity3_1_2box');
        _this.coin19.anchor.setTo(0.5);
        _this.coin19.scale.setTo(0.85,1);
        _this.coin19.frame=1;
        
        _this.coin20 =_this.add.sprite(925,270,'unity3_1_2box');
        _this.coin20.anchor.setTo(0.5);
        _this.coin20.scale.setTo(0.85,1);
        _this.coin20.frame=1;
    
        _this.coin21 =_this.add.sprite(520,210,'unity3_1_2box');
        _this.coin21.anchor.setTo(0.5);
        _this.coin21.scale.setTo(0.85,1);
        _this.coin21.frame=1;
        
        _this.coin22 =_this.add.sprite(565,210,'unity3_1_2box');
        _this.coin22.anchor.setTo(0.5);
        _this.coin22.scale.setTo(0.85,1);
        _this.coin22.frame=1;
        
        _this.coin23 =_this.add.sprite(610,210,'unity3_1_2box');
        _this.coin23.anchor.setTo(0.5);
        _this.coin23.scale.setTo(0.85,1);
        _this.coin23.frame=1;
        
        _this.coin24 =_this.add.sprite(655,210,'unity3_1_2box');
        _this.coin24.anchor.setTo(0.5);
        _this.coin24.scale.setTo(0.85,1);
        _this.coin24.frame=1;
        
        _this.coin25 =_this.add.sprite(700,210,'unity3_1_2box');
        _this.coin25.anchor.setTo(0.5);
        _this.coin25.scale.setTo(0.85,1);
        _this.coin25.frame=1;
        
        _this.coin26 =_this.add.sprite(745,210,'unity3_1_2box');
        _this.coin26.anchor.setTo(0.5);
        _this.coin26.scale.setTo(0.85,1);
        _this.coin26.frame=1;
        
        _this.coin27 =_this.add.sprite(790,210,'unity3_1_2box');
        _this.coin27.anchor.setTo(0.5);
        _this.coin27.scale.setTo(0.85,1);
        _this.coin27.frame=1;
        
        _this.coin28 =_this.add.sprite(835,210,'unity3_1_2box');
        _this.coin28.anchor.setTo(0.5);
        _this.coin28.scale.setTo(0.85,1);
        _this.coin28.frame=1;
        
        _this.coin29 =_this.add.sprite(880,210,'unity3_1_2box');
        _this.coin29.anchor.setTo(0.5);
        _this.coin29.scale.setTo(0.85,1);
        _this.coin29.frame=1;
        
        _this.coin30 =_this.add.sprite(925,210,'unity3_1_2box');
        _this.coin30.anchor.setTo(0.5);
        _this.coin30.scale.setTo(0.85,1);
        _this.coin30.frame=1;
     
        _this.coin31 =_this.add.sprite(520,150,'unity3_1_2box');
        _this.coin31.anchor.setTo(0.5);
        _this.coin31.scale.setTo(0.85,1);
        _this.coin31.frame=1;
        
        _this.coin32 =_this.add.sprite(565,150,'unity3_1_2box');
        _this.coin32.anchor.setTo(0.5);
        _this.coin32.scale.setTo(0.85,1);
        _this.coin32.frame=1;
        
        _this.coin33 =_this.add.sprite(610,150,'unity3_1_2box');
        _this.coin33.anchor.setTo(0.5);
        _this.coin33.scale.setTo(0.85,1);
        _this.coin33.frame=1;
        
        _this.coin34 =_this.add.sprite(655,150,'unity3_1_2box');
        _this.coin34.anchor.setTo(0.5);
        _this.coin34.scale.setTo(0.85,1);
        _this.coin34.frame=1;
        
        _this.coin35 =_this.add.sprite(700,150,'unity3_1_2box');
        _this.coin35.anchor.setTo(0.5);
        _this.coin35.scale.setTo(0.85,1);
        _this.coin35.frame=1;
        
        _this.coin36 =_this.add.sprite(745,150,'unity3_1_2box');
        _this.coin36.anchor.setTo(0.5);
        _this.coin36.scale.setTo(0.85,1);
        _this.coin36.frame=1;
        
        _this.coin37 =_this.add.sprite(790,150,'unity3_1_2box');
        _this.coin37.anchor.setTo(0.5);
        _this.coin37.scale.setTo(0.85,1);
        _this.coin37.frame=1;
        
        _this.coin38 =_this.add.sprite(835,150,'unity3_1_2box');
        _this.coin38.anchor.setTo(0.5);
        _this.coin38.scale.setTo(0.85,1);
        _this.coin38.frame=1;
        
        _this.coin39 =_this.add.sprite(880,150,'unity3_1_2box');
        _this.coin39.anchor.setTo(0.5);
        _this.coin39.scale.setTo(0.85,1);
        _this.coin39.frame=1;
        
        _this.coin40 =_this.add.sprite(925,150,'unity3_1_2box');
        _this.coin40.anchor.setTo(0.5);
        _this.coin40.scale.setTo(0.85,1);
        _this.coin40.frame=1;
        
        _this.coin41 =_this.add.sprite(520,90,'unity3_1_2box');
        _this.coin41.anchor.setTo(0.5);
        _this.coin41.scale.setTo(0.85,1);
        _this.coin41.frame=1;
        
        _this.coin42 =_this.add.sprite(565,90,'unity3_1_2box');
        _this.coin42.anchor.setTo(0.5);
        _this.coin42.scale.setTo(0.85,1);
        _this.coin42.frame=1;
        
        _this.coin43 =_this.add.sprite(610,90,'unity3_1_2box');
        _this.coin43.anchor.setTo(0.5);
        _this.coin43.scale.setTo(0.85,1);
        _this.coin43.frame=1;
        
        _this.coin44 =_this.add.sprite(655,90,'unity3_1_2box');
        _this.coin44.anchor.setTo(0.5);
        _this.coin44.scale.setTo(0.85,1);
        _this.coin44.frame=1;
        
        _this.coin45 =_this.add.sprite(700,90,'unity3_1_2box');
        _this.coin45.anchor.setTo(0.5);
        _this.coin45.scale.setTo(0.85,1);
        _this.coin45.frame=1;
     
        _this.coin46 =_this.add.sprite(745,90,'unity3_1_2box');
        _this.coin46.anchor.setTo(0.5);
        _this.coin46.scale.setTo(0.85,1);
        _this.coin46.frame=1;
        
        _this.coin47 =_this.add.sprite(790,90,'unity3_1_2box');
        _this.coin47.anchor.setTo(0.5);
        _this.coin47.scale.setTo(0.85,1);
        _this.coin47.frame=1;
        
        _this.coin48 =_this.add.sprite(835,90,'unity3_1_2box');
        _this.coin48.anchor.setTo(0.5);
        _this.coin48.scale.setTo(0.85,1);
        _this.coin48.frame=1;
        
        _this.coin49 =_this.add.sprite(880,90,'unity3_1_2box');
        _this.coin49.anchor.setTo(0.5);
        _this.coin49.scale.setTo(0.85,1);
        _this.coin49.frame=1;
        
        _this.coin50 =_this.add.sprite(925,90,'unity3_1_2box');
        _this.coin50.anchor.setTo(0.5);
        _this.coin50.scale.setTo(0.85,1);
        _this.coin50.frame=1;
        
        
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
        _this.coinGrp.add(_this.coin11);
        _this.coinGrp.add(_this.coin12);
        _this.coinGrp.add(_this.coin13);
        _this.coinGrp.add(_this.coin14);
        _this.coinGrp.add(_this.coin15);
        _this.coinGrp.add(_this.coin16);
        _this.coinGrp.add(_this.coin17);
        _this.coinGrp.add(_this.coin18);
        _this.coinGrp.add(_this.coin19);
        _this.coinGrp.add(_this.coin20);
        _this.coinGrp.add(_this.coin21);
        _this.coinGrp.add(_this.coin22);
        _this.coinGrp.add(_this.coin23);
        _this.coinGrp.add(_this.coin24);
        _this.coinGrp.add(_this.coin25);
        _this.coinGrp.add(_this.coin26);
        _this.coinGrp.add(_this.coin27);
        _this.coinGrp.add(_this.coin28);
        _this.coinGrp.add(_this.coin29);
        _this.coinGrp.add(_this.coin30);
        _this.coinGrp.add(_this.coin31);
        _this.coinGrp.add(_this.coin32);
        _this.coinGrp.add(_this.coin33);
        _this.coinGrp.add(_this.coin34);
        _this.coinGrp.add(_this.coin35);
        _this.coinGrp.add(_this.coin36);
        _this.coinGrp.add(_this.coin37);
        _this.coinGrp.add(_this.coin38);
        _this.coinGrp.add(_this.coin39);
        _this.coinGrp.add(_this.coin40);
        _this.coinGrp.add(_this.coin41);
        _this.coinGrp.add(_this.coin42);
        _this.coinGrp.add(_this.coin43);
        _this.coinGrp.add(_this.coin44);
        _this.coinGrp.add(_this.coin45);
        _this.coinGrp.add(_this.coin46);
        _this.coinGrp.add(_this.coin47);
        _this.coinGrp.add(_this.coin48);
        _this.coinGrp.add(_this.coin49);
        _this.coinGrp.add(_this.coin50);
       
        _this.dragcoinGrp = _this.add.group();
        
        _this.dragcoin1 =_this.add.sprite(520,330,'unity3_1_2box');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(0.85,1); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(565,330,'unity3_1_2box');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(0.85,1); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(610,330,'unity3_1_2box');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(0.85,1); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(655,330,'unity3_1_2box');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(0.85,1); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(700,330,'unity3_1_2box');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(0.85,1); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(745,330,'unity3_1_2box');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(0.85,1); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(790,330,'unity3_1_2box');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(0.85,1); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(835,330,'unity3_1_2box');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(0.85,1); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(880,330,'unity3_1_2box');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(0.85,1); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(925,330,'unity3_1_2box');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(0.85,1); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin11 =_this.add.sprite(520,270,'unity3_1_2box');
        _this.dragcoin11.anchor.setTo(0.5); 
        _this.dragcoin11.scale.setTo(0.85,1); 
        _this.dragcoin11.frame=0;
        _this.dragcoin11.name=11;
        _this.dragcoin11.inputEnabled = true;
        _this.dragcoin11.input.useHandCursor = true;
        _this.dragcoin11.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin12 =_this.add.sprite(565,270,'unity3_1_2box');
        _this.dragcoin12.anchor.setTo(0.5); 
        _this.dragcoin12.scale.setTo(0.85,1); 
        _this.dragcoin12.frame=0;
        _this.dragcoin12.name=12;
        _this.dragcoin12.inputEnabled = true;
        _this.dragcoin12.input.useHandCursor = true;
        _this.dragcoin12.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin13 =_this.add.sprite(610,270,'unity3_1_2box');
        _this.dragcoin13.anchor.setTo(0.5); 
        _this.dragcoin13.scale.setTo(0.85,1); 
        _this.dragcoin13.frame=0;
        _this.dragcoin13.name=13;
        _this.dragcoin13.inputEnabled = true;
        _this.dragcoin13.input.useHandCursor = true;
        _this.dragcoin13.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin14 =_this.add.sprite(655,270,'unity3_1_2box');
        _this.dragcoin14.anchor.setTo(0.5); 
        _this.dragcoin14.scale.setTo(0.85,1); 
        _this.dragcoin14.frame=0;
        _this.dragcoin14.name=14;
        _this.dragcoin14.inputEnabled = true;
        _this.dragcoin14.input.useHandCursor = true;
        _this.dragcoin14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin15 =_this.add.sprite(700,270,'unity3_1_2box');
        _this.dragcoin15.anchor.setTo(0.5); 
        _this.dragcoin15.scale.setTo(0.85,1); 
        _this.dragcoin15.frame=0;
        _this.dragcoin15.name=15;
        _this.dragcoin15.inputEnabled = true;
        _this.dragcoin15.input.useHandCursor = true;
        _this.dragcoin15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin16 =_this.add.sprite(745,270,'unity3_1_2box');
        _this.dragcoin16.anchor.setTo(0.5);
        _this.dragcoin16.scale.setTo(0.85,1); 
        _this.dragcoin16.frame=0;
        _this.dragcoin16.name=16;
        _this.dragcoin16.inputEnabled = true;
        _this.dragcoin16.input.useHandCursor = true;
        _this.dragcoin16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin17 =_this.add.sprite(790,270,'unity3_1_2box');
        _this.dragcoin17.anchor.setTo(0.5);
        _this.dragcoin17.scale.setTo(0.85,1); 
        _this.dragcoin17.frame=0;
        _this.dragcoin17.name=17;
        _this.dragcoin17.inputEnabled = true;
        _this.dragcoin17.input.useHandCursor = true;
        _this.dragcoin17.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin18 =_this.add.sprite(835,270,'unity3_1_2box');
        _this.dragcoin18.anchor.setTo(0.5); 
        _this.dragcoin18.scale.setTo(0.85,1); 
        _this.dragcoin18.frame=0;
        _this.dragcoin18.name=18;
        _this.dragcoin18.inputEnabled = true;
        _this.dragcoin18.input.useHandCursor = true;
        _this.dragcoin18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin19 =_this.add.sprite(880,270,'unity3_1_2box');
        _this.dragcoin19.anchor.setTo(0.5);
        _this.dragcoin19.scale.setTo(0.85,1); 
        _this.dragcoin19.frame=0;
        _this.dragcoin19.name=19;
        _this.dragcoin19.inputEnabled = true;
        _this.dragcoin19.input.useHandCursor = true;
        _this.dragcoin19.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin20 =_this.add.sprite(925,270,'unity3_1_2box');
        _this.dragcoin20.anchor.setTo(0.5); 
        _this.dragcoin20.scale.setTo(0.85,1); 
        _this.dragcoin20.frame=0;
        _this.dragcoin20.name=20;
        _this.dragcoin20.inputEnabled = true;
        _this.dragcoin20.input.useHandCursor = true;
        _this.dragcoin20.events.onInputDown.add(_this.onDragStart,_this);
    
    
        _this.dragcoin21 =_this.add.sprite(520,210,'unity3_1_2box');
        _this.dragcoin21.anchor.setTo(0.5); 
        _this.dragcoin21.scale.setTo(0.85,1); 
        _this.dragcoin21.frame=0;
        _this.dragcoin21.name=21;
        _this.dragcoin21.inputEnabled = true;
        _this.dragcoin21.input.useHandCursor = true;
        _this.dragcoin21.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin22 =_this.add.sprite(565,210,'unity3_1_2box');
        _this.dragcoin22.anchor.setTo(0.5); 
        _this.dragcoin22.scale.setTo(0.85,1); 
        _this.dragcoin22.frame=0;
        _this.dragcoin22.name=22;
        _this.dragcoin22.inputEnabled = true;
        _this.dragcoin22.input.useHandCursor = true;
        _this.dragcoin22.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin23 =_this.add.sprite(610,210,'unity3_1_2box');
        _this.dragcoin23.anchor.setTo(0.5); 
        _this.dragcoin23.scale.setTo(0.85,1); 
        _this.dragcoin23.frame=0;
        _this.dragcoin23.name=23;
        _this.dragcoin23.inputEnabled = true;
        _this.dragcoin23.input.useHandCursor = true;
        _this.dragcoin23.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin24 =_this.add.sprite(655,210,'unity3_1_2box');
        _this.dragcoin24.anchor.setTo(0.5); 
        _this.dragcoin24.scale.setTo(0.85,1); 
        _this.dragcoin24.frame=0;
        _this.dragcoin24.name=24;
        _this.dragcoin24.inputEnabled = true;
        _this.dragcoin24.input.useHandCursor = true;
        _this.dragcoin24.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin25 =_this.add.sprite(700,210,'unity3_1_2box');
        _this.dragcoin25.anchor.setTo(0.5);
        _this.dragcoin25.scale.setTo(0.85,1); 
        _this.dragcoin25.frame=0;
        _this.dragcoin25.name=25;
        _this.dragcoin25.inputEnabled = true;
        _this.dragcoin25.input.useHandCursor = true;
        _this.dragcoin25.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin26 =_this.add.sprite(745,210,'unity3_1_2box');
        _this.dragcoin26.anchor.setTo(0.5); 
        _this.dragcoin26.scale.setTo(0.85,1); 
        _this.dragcoin26.frame=0;
        _this.dragcoin26.name=26;
        _this.dragcoin26.inputEnabled = true;
        _this.dragcoin26.input.useHandCursor = true;
        _this.dragcoin26.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin27 =_this.add.sprite(790,210,'unity3_1_2box');
        _this.dragcoin27.anchor.setTo(0.5); 
        _this.dragcoin27.scale.setTo(0.85,1); 
        _this.dragcoin27.frame=0;
        _this.dragcoin27.name=27;
        _this.dragcoin27.inputEnabled = true;
        _this.dragcoin27.input.useHandCursor = true;
        _this.dragcoin27.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin28 =_this.add.sprite(835,210,'unity3_1_2box');
        _this.dragcoin28.anchor.setTo(0.5); 
        _this.dragcoin28.scale.setTo(0.85,1); 
        _this.dragcoin28.frame=0;
        _this.dragcoin28.name=28;
        _this.dragcoin28.inputEnabled = true;
        _this.dragcoin28.input.useHandCursor = true;
        _this.dragcoin28.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin29 =_this.add.sprite(880,210,'unity3_1_2box');
        _this.dragcoin29.anchor.setTo(0.5);
        _this.dragcoin29.scale.setTo(0.85,1); 
        _this.dragcoin29.frame=0;
        _this.dragcoin29.name=29;
        _this.dragcoin29.inputEnabled = true;
        _this.dragcoin29.input.useHandCursor = true;
        _this.dragcoin29.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin30 =_this.add.sprite(925,210,'unity3_1_2box');
        _this.dragcoin30.anchor.setTo(0.5);
        _this.dragcoin30.scale.setTo(0.85,1); 
        _this.dragcoin30.frame=0;
        _this.dragcoin30.name=30;
        _this.dragcoin30.inputEnabled = true;
        _this.dragcoin30.input.useHandCursor = true;
        _this.dragcoin30.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.dragcoin31 =_this.add.sprite(520,150,'unity3_1_2box');
        _this.dragcoin31.anchor.setTo(0.5); 
        _this.dragcoin31.scale.setTo(0.85,1); 
        _this.dragcoin31.frame=0;
        _this.dragcoin31.name=31;
        _this.dragcoin31.inputEnabled = true;
        _this.dragcoin31.input.useHandCursor = true;
        _this.dragcoin31.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin32 =_this.add.sprite(565,150,'unity3_1_2box');
        _this.dragcoin32.anchor.setTo(0.5); 
        _this.dragcoin32.scale.setTo(0.85,1); 
        _this.dragcoin32.frame=0;
        _this.dragcoin32.name=32;
        _this.dragcoin32.inputEnabled = true;
        _this.dragcoin32.input.useHandCursor = true;
        _this.dragcoin32.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin33 =_this.add.sprite(610,150,'unity3_1_2box');
        _this.dragcoin33.anchor.setTo(0.5); 
        _this.dragcoin33.scale.setTo(0.85,1); 
        _this.dragcoin33.frame=0;
        _this.dragcoin33.name=33;
        _this.dragcoin33.inputEnabled = true;
        _this.dragcoin33.input.useHandCursor = true;
        _this.dragcoin33.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin34 =_this.add.sprite(655,150,'unity3_1_2box');
        _this.dragcoin34.anchor.setTo(0.5); 
        _this.dragcoin34.scale.setTo(0.85,1); 
        _this.dragcoin34.frame=0;
        _this.dragcoin34.name=34;
        _this.dragcoin34.inputEnabled = true;
        _this.dragcoin34.input.useHandCursor = true;
        _this.dragcoin34.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin35 =_this.add.sprite(700,150,'unity3_1_2box');
        _this.dragcoin35.anchor.setTo(0.5);
        _this.dragcoin35.scale.setTo(0.85,1); 
        _this.dragcoin35.frame=0;
        _this.dragcoin35.name=35;
        _this.dragcoin35.inputEnabled = true;
        _this.dragcoin35.input.useHandCursor = true;
        _this.dragcoin35.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin36 =_this.add.sprite(745,150,'unity3_1_2box');
        _this.dragcoin36.anchor.setTo(0.5); 
        _this.dragcoin36.scale.setTo(0.85,1); 
        _this.dragcoin36.frame=0;
        _this.dragcoin36.name=36;
        _this.dragcoin36.inputEnabled = true;
        _this.dragcoin36.input.useHandCursor = true;
        _this.dragcoin36.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin37 =_this.add.sprite(790,150,'unity3_1_2box');
        _this.dragcoin37.anchor.setTo(0.5); 
        _this.dragcoin37.scale.setTo(0.85,1); 
        _this.dragcoin37.frame=0;
        _this.dragcoin37.name=37;
        _this.dragcoin37.inputEnabled = true;
        _this.dragcoin37.input.useHandCursor = true;
        _this.dragcoin37.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin38 =_this.add.sprite(835,150,'unity3_1_2box');
        _this.dragcoin38.anchor.setTo(0.5); 
        _this.dragcoin38.scale.setTo(0.85,1); 
        _this.dragcoin38.frame=0;
        _this.dragcoin38.name=38;
        _this.dragcoin38.inputEnabled = true;
        _this.dragcoin38.input.useHandCursor = true;
        _this.dragcoin38.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin39 =_this.add.sprite(880,150,'unity3_1_2box');
        _this.dragcoin39.anchor.setTo(0.5);
        _this.dragcoin39.scale.setTo(0.85,1); 
        _this.dragcoin39.frame=0;
        _this.dragcoin39.name=39;
        _this.dragcoin39.inputEnabled = true;
        _this.dragcoin39.input.useHandCursor = true;
        _this.dragcoin39.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin40 =_this.add.sprite(925,150,'unity3_1_2box');
        _this.dragcoin40.anchor.setTo(0.5);
        _this.dragcoin40.scale.setTo(0.85,1); 
        _this.dragcoin40.frame=0;
        _this.dragcoin40.name=40;
        _this.dragcoin40.inputEnabled = true;
        _this.dragcoin40.input.useHandCursor = true;
        _this.dragcoin40.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.dragcoin41 =_this.add.sprite(520,90,'unity3_1_2box');
        _this.dragcoin41.anchor.setTo(0.5); 
        _this.dragcoin41.scale.setTo(0.85,1); 
        _this.dragcoin41.frame=0;
        _this.dragcoin41.name=41;
        _this.dragcoin41.inputEnabled = true;
        _this.dragcoin41.input.useHandCursor = true;
        _this.dragcoin41.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin42 =_this.add.sprite(565,90,'unity3_1_2box');
        _this.dragcoin42.anchor.setTo(0.5); 
        _this.dragcoin42.scale.setTo(0.85,1); 
        _this.dragcoin42.frame=0;
        _this.dragcoin42.name=42;
        _this.dragcoin42.inputEnabled = true;
        _this.dragcoin42.input.useHandCursor = true;
        _this.dragcoin42.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin43 =_this.add.sprite(610,90,'unity3_1_2box');
        _this.dragcoin43.anchor.setTo(0.5); 
        _this.dragcoin43.scale.setTo(0.85,1); 
        _this.dragcoin43.frame=0;
        _this.dragcoin43.name=43;
        _this.dragcoin43.inputEnabled = true;
        _this.dragcoin43.input.useHandCursor = true;
        _this.dragcoin43.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin44 =_this.add.sprite(655,90,'unity3_1_2box');
        _this.dragcoin44.anchor.setTo(0.5); 
        _this.dragcoin44.scale.setTo(0.85,1); 
        _this.dragcoin44.frame=0;
        _this.dragcoin44.name=44;
        _this.dragcoin44.inputEnabled = true;
        _this.dragcoin44.input.useHandCursor = true;
        _this.dragcoin44.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin45 =_this.add.sprite(700,90,'unity3_1_2box');
        _this.dragcoin45.anchor.setTo(0.5);
        _this.dragcoin45.scale.setTo(0.85,1); 
        _this.dragcoin45.frame=0;
        _this.dragcoin45.name=45;
        _this.dragcoin45.inputEnabled = true;
        _this.dragcoin45.input.useHandCursor = true;
        _this.dragcoin45.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin46 =_this.add.sprite(745,90,'unity3_1_2box');
        _this.dragcoin46.anchor.setTo(0.5); 
        _this.dragcoin46.scale.setTo(0.85,1); 
        _this.dragcoin46.frame=0;
        _this.dragcoin46.name=46;
        _this.dragcoin46.inputEnabled = true;
        _this.dragcoin46.input.useHandCursor = true;
        _this.dragcoin46.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin47 =_this.add.sprite(790,90,'unity3_1_2box');
        _this.dragcoin47.anchor.setTo(0.5); 
        _this.dragcoin47.scale.setTo(0.85,1); 
        _this.dragcoin47.frame=0;
        _this.dragcoin47.name=47;
        _this.dragcoin47.inputEnabled = true;
        _this.dragcoin47.input.useHandCursor = true;
        _this.dragcoin47.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin48 =_this.add.sprite(835,90,'unity3_1_2box');
        _this.dragcoin48.anchor.setTo(0.5); 
        _this.dragcoin48.scale.setTo(0.85,1); 
        _this.dragcoin48.frame=0;
        _this.dragcoin48.name=48;
        _this.dragcoin48.inputEnabled = true;
        _this.dragcoin48.input.useHandCursor = true;
        _this.dragcoin48.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin49 =_this.add.sprite(880,90,'unity3_1_2box');
        _this.dragcoin49.anchor.setTo(0.5);
        _this.dragcoin49.scale.setTo(0.85,1); 
        _this.dragcoin49.frame=0;
        _this.dragcoin49.name=49;
        _this.dragcoin49.inputEnabled = true;
        _this.dragcoin49.input.useHandCursor = true;
        _this.dragcoin49.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin50 =_this.add.sprite(925,90,'unity3_1_2box');
        _this.dragcoin50.anchor.setTo(0.5);
        _this.dragcoin50.scale.setTo(0.85,1); 
        _this.dragcoin50.frame=0;
        _this.dragcoin50.name=50;
        _this.dragcoin50.inputEnabled = true;
        _this.dragcoin50.input.useHandCursor = true;
        _this.dragcoin50.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        _this.dragcoinGrp.add(_this.dragcoin11);
        _this.dragcoinGrp.add(_this.dragcoin12);
        _this.dragcoinGrp.add(_this.dragcoin13);
        _this.dragcoinGrp.add(_this.dragcoin14);
        _this.dragcoinGrp.add(_this.dragcoin15);
        _this.dragcoinGrp.add(_this.dragcoin16);
        _this.dragcoinGrp.add(_this.dragcoin17);
        _this.dragcoinGrp.add(_this.dragcoin18);
        _this.dragcoinGrp.add(_this.dragcoin19);
        _this.dragcoinGrp.add(_this.dragcoin20);
        _this.dragcoinGrp.add(_this.dragcoin21);
        _this.dragcoinGrp.add(_this.dragcoin22);
        _this.dragcoinGrp.add(_this.dragcoin23);
        _this.dragcoinGrp.add(_this.dragcoin24);
        _this.dragcoinGrp.add(_this.dragcoin25);
        _this.dragcoinGrp.add(_this.dragcoin26);
        _this.dragcoinGrp.add(_this.dragcoin27);
        _this.dragcoinGrp.add(_this.dragcoin28);
        _this.dragcoinGrp.add(_this.dragcoin29);
        _this.dragcoinGrp.add(_this.dragcoin30);
        _this.dragcoinGrp.add(_this.dragcoin31);
        _this.dragcoinGrp.add(_this.dragcoin32);
        _this.dragcoinGrp.add(_this.dragcoin33);
        _this.dragcoinGrp.add(_this.dragcoin34);
        _this.dragcoinGrp.add(_this.dragcoin35);
        _this.dragcoinGrp.add(_this.dragcoin36);
        _this.dragcoinGrp.add(_this.dragcoin37);
        _this.dragcoinGrp.add(_this.dragcoin38);
        _this.dragcoinGrp.add(_this.dragcoin39);
        _this.dragcoinGrp.add(_this.dragcoin40);
        _this.dragcoinGrp.add(_this.dragcoin41);
        _this.dragcoinGrp.add(_this.dragcoin42);
        _this.dragcoinGrp.add(_this.dragcoin43);
        _this.dragcoinGrp.add(_this.dragcoin44);
        _this.dragcoinGrp.add(_this.dragcoin45);
        _this.dragcoinGrp.add(_this.dragcoin46);
        _this.dragcoinGrp.add(_this.dragcoin47);
        _this.dragcoinGrp.add(_this.dragcoin48);
        _this.dragcoinGrp.add(_this.dragcoin49);
        _this.dragcoinGrp.add(_this.dragcoin50);
        
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="50";
   
    
},
            

   
  gotoEighthQuestion:function(){
    
       _this.getVoice();
        _this.questioNo = 8;
        
       // _this.obj=10;
       // _this.obj1=17;

        _this.tbox =_this.add.sprite(200,280,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.1,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 260,140);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
        _this.coinp1 =_this.add.sprite(180,250,'unity3_1_2boxanim');
        _this.coinp1.anchor.setTo(0.5);
        _this.coinp1.scale.setTo(0.8,0.9); 
        _this.coinp1.visible=false;
        _this.coinp1.frame=0;
    
        _this.coinp2 =_this.add.sprite(180,265,'unity3_1_2boxanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(0.8,0.9); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
      
        _this.coinp =_this.add.sprite(180,280,'unity3_1_2boxanim');
        _this.coinp.anchor.setTo(0.5);
        _this.coinp.scale.setTo(0.8,0.9); 
        _this.coinp.visible=false;
        _this.coinp.frame=0;
      
        _this.coinp3 =_this.add.sprite(180,295,'unity3_1_2boxanim');
        _this.coinp3.anchor.setTo(0.5);
        _this.coinp3.scale.setTo(0.8,0.9); 
        _this.coinp3.visible=false;
        _this.coinp3.frame=0;
        
        _this.dragcoinGrp1.add(_this.coinp1);
        _this.dragcoinGrp1.add(_this.coinp2);
        _this.dragcoinGrp1.add(_this.coinp);
        _this.dragcoinGrp1.add(_this.coinp3);
        
         _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(520,270,'unity3_1_2box');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(0.85,1);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(565,270,'unity3_1_2box');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(0.85,1);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(610,270,'unity3_1_2box');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(0.85,1);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(655,270,'unity3_1_2box');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(0.85,1);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(700,270,'unity3_1_2box');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(0.85,1);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(745,270,'unity3_1_2box');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(0.85,1);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(790,270,'unity3_1_2box');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(0.85,1);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(835,270,'unity3_1_2box');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(0.85,1);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(880,270,'unity3_1_2box');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(0.85,1);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(925,270,'unity3_1_2box');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(0.85,1);
        _this.coin10.frame=1;
    
        _this.coin11 =_this.add.sprite(520,210,'unity3_1_2box');
        _this.coin11.anchor.setTo(0.5);
        _this.coin11.scale.setTo(0.85,1);
        _this.coin11.frame=1;
        
        _this.coin12 =_this.add.sprite(565,210,'unity3_1_2box');
        _this.coin12.anchor.setTo(0.5);
        _this.coin12.scale.setTo(0.85,1);
        _this.coin12.frame=1;
        
        _this.coin13 =_this.add.sprite(610,210,'unity3_1_2box');
        _this.coin13.anchor.setTo(0.5);
        _this.coin13.scale.setTo(0.85,1);
        _this.coin13.frame=1;
      
        _this.coin14 =_this.add.sprite(655,210,'unity3_1_2box');
        _this.coin14.anchor.setTo(0.5);
        _this.coin14.scale.setTo(0.85,1);
        _this.coin14.frame=1;
        
        _this.coin15 =_this.add.sprite(700,210,'unity3_1_2box');
        _this.coin15.anchor.setTo(0.5);
        _this.coin15.scale.setTo(0.85,1);
        _this.coin15.frame=1;
        
        _this.coin16 =_this.add.sprite(745,210,'unity3_1_2box');
        _this.coin16.anchor.setTo(0.5);
        _this.coin16.scale.setTo(0.85,1);
        _this.coin16.frame=1;
        
        _this.coin17 =_this.add.sprite(790,210,'unity3_1_2box');
        _this.coin17.anchor.setTo(0.5);
        _this.coin17.scale.setTo(0.85,1);
        _this.coin17.frame=1;
      
        _this.coin18 =_this.add.sprite(835,210,'unity3_1_2box');
        _this.coin18.anchor.setTo(0.5);
        _this.coin18.scale.setTo(0.85,1);
        _this.coin18.frame=1;
        
        _this.coin19 =_this.add.sprite(880,210,'unity3_1_2box');
        _this.coin19.anchor.setTo(0.5);
        _this.coin19.scale.setTo(0.85,1);
        _this.coin19.frame=1;
        
        _this.coin20 =_this.add.sprite(925,210,'unity3_1_2box');
        _this.coin20.anchor.setTo(0.5);
        _this.coin20.scale.setTo(0.85,1);
        _this.coin20.frame=1;
      
        _this.coin21 =_this.add.sprite(520,150,'unity3_1_2box');
        _this.coin21.anchor.setTo(0.5);
        _this.coin21.scale.setTo(0.85,1);
        _this.coin21.frame=1;
        
        _this.coin22 =_this.add.sprite(565,150,'unity3_1_2box');
        _this.coin22.anchor.setTo(0.5);
        _this.coin22.scale.setTo(0.85,1);
        _this.coin22.frame=1;
        
        _this.coin23 =_this.add.sprite(610,150,'unity3_1_2box');
        _this.coin23.anchor.setTo(0.5);
        _this.coin23.scale.setTo(0.85,1);
        _this.coin23.frame=1;
        
        _this.coin24 =_this.add.sprite(655,150,'unity3_1_2box');
        _this.coin24.anchor.setTo(0.5);
        _this.coin24.scale.setTo(0.85,1);
        _this.coin24.frame=1;
        
        _this.coin25 =_this.add.sprite(700,150,'unity3_1_2box');
        _this.coin25.anchor.setTo(0.5);
        _this.coin25.scale.setTo(0.85,1);
        _this.coin25.frame=1;
        
        _this.coin26 =_this.add.sprite(745,150,'unity3_1_2box');
        _this.coin26.anchor.setTo(0.5);
        _this.coin26.scale.setTo(0.85,1);
        _this.coin26.frame=1;
        
        _this.coin27 =_this.add.sprite(790,150,'unity3_1_2box');
        _this.coin27.anchor.setTo(0.5);
        _this.coin27.scale.setTo(0.85,1);
        _this.coin27.frame=1;
        
        _this.coin28 =_this.add.sprite(835,150,'unity3_1_2box');
        _this.coin28.anchor.setTo(0.5);
        _this.coin28.scale.setTo(0.85,1);
        _this.coin28.frame=1;
        
        _this.coin29 =_this.add.sprite(880,150,'unity3_1_2box');
        _this.coin29.anchor.setTo(0.5);
        _this.coin29.scale.setTo(0.85,1);
        _this.coin29.frame=1;
        
        _this.coin30 =_this.add.sprite(925,150,'unity3_1_2box');
        _this.coin30.anchor.setTo(0.5);
        _this.coin30.scale.setTo(0.85,1);
        _this.coin30.frame=1;
    
        _this.coin31 =_this.add.sprite(520,330,'unity3_1_2box');
        _this.coin31.anchor.setTo(0.5);
        _this.coin31.scale.setTo(0.85,1);
        _this.coin31.frame=1;
    
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
        _this.coinGrp.add(_this.coin11);
        _this.coinGrp.add(_this.coin12);
        _this.coinGrp.add(_this.coin13);
        _this.coinGrp.add(_this.coin14);
        _this.coinGrp.add(_this.coin15);
        _this.coinGrp.add(_this.coin16);
        _this.coinGrp.add(_this.coin17);
        _this.coinGrp.add(_this.coin18);
        _this.coinGrp.add(_this.coin19);
        _this.coinGrp.add(_this.coin20);
        _this.coinGrp.add(_this.coin21);
        _this.coinGrp.add(_this.coin22);
        _this.coinGrp.add(_this.coin23);
        _this.coinGrp.add(_this.coin24);
        _this.coinGrp.add(_this.coin25);
        _this.coinGrp.add(_this.coin26);
        _this.coinGrp.add(_this.coin27);
        _this.coinGrp.add(_this.coin28);
        _this.coinGrp.add(_this.coin29);
        _this.coinGrp.add(_this.coin30);
        _this.coinGrp.add(_this.coin31);
       
        _this.dragcoinGrp = _this.add.group();
        
        _this.dragcoin1 =_this.add.sprite(520,270,'unity3_1_2box');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(0.85,1); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(565,270,'unity3_1_2box');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(0.85,1); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(610,270,'unity3_1_2box');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(0.85,1); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(655,270,'unity3_1_2box');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(0.85,1); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(700,270,'unity3_1_2box');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(0.85,1); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(745,270,'unity3_1_2box');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(0.85,1); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(790,270,'unity3_1_2box');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(0.85,1); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(835,270,'unity3_1_2box');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(0.85,1); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(880,270,'unity3_1_2box');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(0.85,1); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(925,270,'unity3_1_2box');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(0.85,1); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin11 =_this.add.sprite(520,210,'unity3_1_2box');
        _this.dragcoin11.anchor.setTo(0.5); 
        _this.dragcoin11.scale.setTo(0.85,1); 
        _this.dragcoin11.frame=0;
        _this.dragcoin11.name=11;
        _this.dragcoin11.inputEnabled = true;
        _this.dragcoin11.input.useHandCursor = true;
        _this.dragcoin11.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin12 =_this.add.sprite(565,210,'unity3_1_2box');
        _this.dragcoin12.anchor.setTo(0.5); 
        _this.dragcoin12.scale.setTo(0.85,1); 
        _this.dragcoin12.frame=0;
        _this.dragcoin12.name=12;
        _this.dragcoin12.inputEnabled = true;
        _this.dragcoin12.input.useHandCursor = true;
        _this.dragcoin12.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin13 =_this.add.sprite(610,210,'unity3_1_2box');
        _this.dragcoin13.anchor.setTo(0.5); 
        _this.dragcoin13.scale.setTo(0.85,1); 
        _this.dragcoin13.frame=0;
        _this.dragcoin13.name=13;
        _this.dragcoin13.inputEnabled = true;
        _this.dragcoin13.input.useHandCursor = true;
        _this.dragcoin13.events.onInputDown.add(_this.onDragStart,_this);
      
        _this.dragcoin14 =_this.add.sprite(655,210,'unity3_1_2box');
        _this.dragcoin14.anchor.setTo(0.5); 
        _this.dragcoin14.scale.setTo(0.85,1); 
        _this.dragcoin14.frame=0;
        _this.dragcoin14.name=14;
        _this.dragcoin14.inputEnabled = true;
        _this.dragcoin14.input.useHandCursor = true;
        _this.dragcoin14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin15 =_this.add.sprite(700,210,'unity3_1_2box');
        _this.dragcoin15.anchor.setTo(0.5);
        _this.dragcoin15.scale.setTo(0.85,1); 
        _this.dragcoin15.frame=0;
        _this.dragcoin15.name=15;
        _this.dragcoin15.inputEnabled = true;
        _this.dragcoin15.input.useHandCursor = true;
        _this.dragcoin15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin16 =_this.add.sprite(745,210,'unity3_1_2box');
        _this.dragcoin16.anchor.setTo(0.5); 
        _this.dragcoin16.scale.setTo(0.85,1); 
        _this.dragcoin16.frame=0;
        _this.dragcoin16.name=6;
        _this.dragcoin16.inputEnabled = true;
        _this.dragcoin16.input.useHandCursor = true;
        _this.dragcoin16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin17 =_this.add.sprite(790,210,'unity3_1_2box');
        _this.dragcoin17.anchor.setTo(0.5); 
        _this.dragcoin17.scale.setTo(0.85,1); 
        _this.dragcoin17.frame=0;
        _this.dragcoin17.name=17;
        _this.dragcoin17.inputEnabled = true;
        _this.dragcoin17.input.useHandCursor = true;
        _this.dragcoin17.events.onInputDown.add(_this.onDragStart,_this);
      
        _this.dragcoin18 =_this.add.sprite(835,210,'unity3_1_2box');
        _this.dragcoin18.anchor.setTo(0.5); 
        _this.dragcoin18.scale.setTo(0.85,1); 
        _this.dragcoin18.frame=0;
        _this.dragcoin18.name=18;
        _this.dragcoin18.inputEnabled = true;
        _this.dragcoin18.input.useHandCursor = true;
        _this.dragcoin18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin19 =_this.add.sprite(880,210,'unity3_1_2box');
        _this.dragcoin19.anchor.setTo(0.5);
        _this.dragcoin19.scale.setTo(0.85,1); 
        _this.dragcoin19.frame=0;
        _this.dragcoin19.name=19;
        _this.dragcoin19.inputEnabled = true;
        _this.dragcoin19.input.useHandCursor = true;
        _this.dragcoin19.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin20 =_this.add.sprite(925,210,'unity3_1_2box');
        _this.dragcoin20.anchor.setTo(0.5);
        _this.dragcoin20.scale.setTo(0.85,1); 
        _this.dragcoin20.frame=0;
        _this.dragcoin20.name=10;
        _this.dragcoin20.inputEnabled = true;
        _this.dragcoin20.input.useHandCursor = true;
        _this.dragcoin20.events.onInputDown.add(_this.onDragStart,_this);
      
        _this.dragcoin21 =_this.add.sprite(520,150,'unity3_1_2box');
        _this.dragcoin21.anchor.setTo(0.5); 
        _this.dragcoin21.scale.setTo(0.85,1); 
        _this.dragcoin21.frame=0;
        _this.dragcoin21.name=21;
        _this.dragcoin21.inputEnabled = true;
        _this.dragcoin21.input.useHandCursor = true;
        _this.dragcoin21.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin22 =_this.add.sprite(565,150,'unity3_1_2box');
        _this.dragcoin22.anchor.setTo(0.5); 
        _this.dragcoin22.scale.setTo(0.85,1); 
        _this.dragcoin22.frame=0;
        _this.dragcoin22.name=22;
        _this.dragcoin22.inputEnabled = true;
        _this.dragcoin22.input.useHandCursor = true;
        _this.dragcoin22.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin23 =_this.add.sprite(610,150,'unity3_1_2box');
        _this.dragcoin23.anchor.setTo(0.5); 
        _this.dragcoin23.scale.setTo(0.85,1); 
        _this.dragcoin23.frame=0;
        _this.dragcoin23.name=23;
        _this.dragcoin23.inputEnabled = true;
        _this.dragcoin23.input.useHandCursor = true;
        _this.dragcoin23.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin24 =_this.add.sprite(655,150,'unity3_1_2box');
        _this.dragcoin24.anchor.setTo(0.5); 
        _this.dragcoin24.scale.setTo(0.85,1); 
        _this.dragcoin24.frame=0;
        _this.dragcoin24.name=24;
        _this.dragcoin24.inputEnabled = true;
        _this.dragcoin24.input.useHandCursor = true;
        _this.dragcoin24.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin25 =_this.add.sprite(700,150,'unity3_1_2box');
        _this.dragcoin25.anchor.setTo(0.5);
        _this.dragcoin25.scale.setTo(0.85,1); 
        _this.dragcoin25.frame=0;
        _this.dragcoin25.name=25;
        _this.dragcoin25.inputEnabled = true;
        _this.dragcoin25.input.useHandCursor = true;
        _this.dragcoin25.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin26 =_this.add.sprite(745,150,'unity3_1_2box');
        _this.dragcoin26.anchor.setTo(0.5); 
        _this.dragcoin26.scale.setTo(0.85,1); 
        _this.dragcoin26.frame=0;
        _this.dragcoin26.name=26;
        _this.dragcoin26.inputEnabled = true;
        _this.dragcoin26.input.useHandCursor = true;
        _this.dragcoin26.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin27 =_this.add.sprite(790,150,'unity3_1_2box');
        _this.dragcoin27.anchor.setTo(0.5); 
        _this.dragcoin27.scale.setTo(0.85,1); 
        _this.dragcoin27.frame=0;
        _this.dragcoin27.name=27;
        _this.dragcoin27.inputEnabled = true;
        _this.dragcoin27.input.useHandCursor = true;
        _this.dragcoin27.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin28 =_this.add.sprite(835,150,'unity3_1_2box');
        _this.dragcoin28.anchor.setTo(0.5); 
        _this.dragcoin28.scale.setTo(0.85,1); 
        _this.dragcoin28.frame=0;
        _this.dragcoin28.name=28;
        _this.dragcoin28.inputEnabled = true;
        _this.dragcoin28.input.useHandCursor = true;
        _this.dragcoin28.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin29 =_this.add.sprite(880,150,'unity3_1_2box');
        _this.dragcoin29.anchor.setTo(0.5);
        _this.dragcoin29.scale.setTo(0.85,1); 
        _this.dragcoin29.frame=0;
        _this.dragcoin29.name=29;
        _this.dragcoin29.inputEnabled = true;
        _this.dragcoin29.input.useHandCursor = true;
        _this.dragcoin29.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin30 =_this.add.sprite(925,150,'unity3_1_2box');
        _this.dragcoin30.anchor.setTo(0.5);
        _this.dragcoin30.scale.setTo(0.85,1); 
        _this.dragcoin30.frame=0;
        _this.dragcoin30.name=30;
        _this.dragcoin30.inputEnabled = true;
        _this.dragcoin30.input.useHandCursor = true;
        _this.dragcoin30.events.onInputDown.add(_this.onDragStart,_this);
      
        _this.dragcoin31 =_this.add.sprite(520,330,'unity3_1_2box');
        _this.dragcoin31.anchor.setTo(0.5);
        _this.dragcoin31.scale.setTo(0.85,1); 
        _this.dragcoin31.frame=0;
        _this.dragcoin31.name=31;
        _this.dragcoin31.inputEnabled = true;
        _this.dragcoin31.input.useHandCursor = true;
        _this.dragcoin31.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        _this.dragcoinGrp.add(_this.dragcoin11);
        _this.dragcoinGrp.add(_this.dragcoin12);
        _this.dragcoinGrp.add(_this.dragcoin13);
        _this.dragcoinGrp.add(_this.dragcoin14);
        _this.dragcoinGrp.add(_this.dragcoin15);
        _this.dragcoinGrp.add(_this.dragcoin16);
        _this.dragcoinGrp.add(_this.dragcoin17);
        _this.dragcoinGrp.add(_this.dragcoin18);
        _this.dragcoinGrp.add(_this.dragcoin19);
        _this.dragcoinGrp.add(_this.dragcoin20);
        _this.dragcoinGrp.add(_this.dragcoin21);
        _this.dragcoinGrp.add(_this.dragcoin22);
        _this.dragcoinGrp.add(_this.dragcoin23);
        _this.dragcoinGrp.add(_this.dragcoin24);
        _this.dragcoinGrp.add(_this.dragcoin25);
        _this.dragcoinGrp.add(_this.dragcoin26);
        _this.dragcoinGrp.add(_this.dragcoin27);
        _this.dragcoinGrp.add(_this.dragcoin28);
        _this.dragcoinGrp.add(_this.dragcoin29);
        _this.dragcoinGrp.add(_this.dragcoin30);
        _this.dragcoinGrp.add(_this.dragcoin31);
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="31";
    
    
},  
    
    
numberBoxClicked:function(target){
     _this.clickSound = _this.add.audio('ClickSound');
     _this.clickSound.play();
        if(target.name == "numbox1")
        {
           
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
             _this.txtbox1.frame = 1;
             _this.txtbox2.frame = 0;
        } 
        if(target.name == "numbox2")
        {
             _this.numBox2Pressed = true;
             _this.numBox1Pressed = false;
             _this.txtbox2.frame = 1;
             _this.txtbox1.frame = 0;
             
        } 
      
       
    if( _this.toCheckNumberPad)
        {
             _this.toCheckNumberPad = false;
            
        _this.time.events.add(200, function(){    
        _this.addNumberPad();
        _this.numGroup.y=50;
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
            target.events.onInputDown.removeAll();
        },_this);
        }
        
        
},

    
    
addNumberPad:function(target){
     
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.box1 = _this.numGroup.create(480,510,'unity3_1_2b2');
        _this.box1.anchor.setTo(0.5);
        _this.x = 80;
     
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,510,'unity3_1_2numberpad');  
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.name =i;
            _this.numbg.frame=i;
            
            _this.numTxt = _this.add.text(-2,1);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';
            _this.numTxt.font = 'Alte Haas Grotesk';
            _this.numTxt.fontSize = 24;
            _this.numTxt.fill = '#FFFFFF';
            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild(_this.numTxt);
            
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
    
        _this.wrongbtn = _this.numGroup.create(_this.x+30,510,'unity3_1_2eraser');
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(1,1);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
       
        _this.rightbtn = _this.numGroup.create(_this.x+90,510,'unity3_1_2rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "wrongbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
    
        _this.wrongbtn.events.onInputDown.add(function(){
            _this.clickSound.play();
            _this.wrongbtn.frame=1;
            if(_this.numBox1Pressed){
                    _this.numBoxNum1.visible = false;
                }
                else if(_this.numBox2Pressed){
                    _this.numBoxNum2.visible = false;
                }
            
            _this.time.events.add(500, function(){
                _this.wrongbtn.frame=0;
            },_this);
        },_this);
    
      
       _this.rightbtn.events.onInputDown.add(function(target){
             _this.noofAttempts++;
            _this.clickSound.play();
            _this.rightbtn.frame=1;
        _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2;
             //console.log("selected Answer "+ _this.selectedAns1);
             //console.log("selected Answer "+ _this.selectedAns2);
             //console.log(_this.selectedAns);
             //console.log(_this.rightAns);
            _this.time.events.add(500, function(){
                _this.rightbtn.frame=0;
            },_this);
            if(_this.selectedAns==_this.rightAns) 
                {
                    //console.log("correct");

                     if(_this.timer)
                       {
                            _this.timer.stop();
                            _this.timer = null;
                       }

                       if(_this.timer1)
                       {
                            _this.timer1.stop();
                           _this.timer1 = null;
                       }


                        _this.currentTime = window.timeSaveFunc();
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
                    
                       // absdsjsapi.saveAssessment(_this.saveAsment);

                  telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

                    _this.rightbtn.frame=1;
                    _this.txtbox1.visible=false;
                     _this.txtbox2.visible=false;
                    target.events.onInputDown.removeAll();
                    
                    _this.celebr = _this.add.audio('celebr');
                    _this.celebr.play();
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                   
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
                    _this.anim4.play();
                    _this.count1++;
                   
                    _this.time.events.add(1000, function(){_this.removeCelebration();},_this);
                }
            else
                {
                   
                     //console.log("wrong");
                    _this.selectedAns = "";
                    _this.time.events.add(500, function(){
                _this.rightbtn.frame=0;
            },_this);
                    _this.wmusic = _this.add.audio('waudio');
		            _this.wmusic.play(); 
                    _this.numBoxNum1.visible = false;
                    _this.numBoxNum2.visible = false;
                    
                }
  
        },_this);

       
},
numClicked:function(target){
     //console.log(target.name);
        
       //  _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id:  "level3.1.1B_"+target.name, 
                    access_token: window.acctkn 
               } 

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         _this.tapsound = _this.add.audio('tap');
         _this.tapsound.play();
         
         if(_this.numBox1Pressed){
             _this.numBoxNum1.visible = true;
             _this.selectedAns1 = target.name;
             _this.numBoxNum1.frame = target.name;
             _this.txtbox1.frame = 0;
             _this.txtbox2.frame = 1;
             _this.numBox2Pressed = true;
             _this.numBox1Pressed = false;
         }
         else if(_this.numBox2Pressed){
             _this.numBoxNum2.visible = true;
             _this.selectedAns2 = target.name;
             _this.numBoxNum2.frame = target.name;
             _this.txtbox2.frame = 0;
             _this.txtbox1.frame = 1;
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
         }
       
         
       
     },
    
     
     onDragStart:function(target){
         
         //_this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level3.1.2_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag(true);
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
      
      target.events.onDragStop.add(function(target)
        {
            //console.log("dragboxGr :"+target.name);
            //console.log("dragboxGrkey :"+target.key);
          //alert("here2");
            for(var i=0;i<_this.dragcoinGrp1.length;i++)
            {
                 //console.log("target.name:"+target.name);
                if(_this.checkOverlap(target,_this.graphics1))
                 {
                  
                     /* _this.AAAA++;
                    //console.log("AAAAAAAAAAA "+_this.AAAA);
                    
                    if(_this.AAAA==1)
                        {
                            
                            _this.Displaycoin();
                        }
                   
                     else if(_this.AAAA==2)
                        {
                            _this.Displaycoin1();
                        }
                        
                    else if(_this.AAAA==3)
                        {
                            _this.Displaycoin2();
                        }
                    else if(_this.AAAA==4)
                        {
                            _this.Displaycoin3();
                        }
                 */
                    // if(_this.questioNo==1)
                   // {
                       // alert("2");
                   
                       /*  if(_this.correct < _this.obj)
                            {
                               _this.A=-1;
                               _this.coinp.frame = _this.correct;
                            }
                         else if(_this.correct < _this.obj1)
                           {
                               _this.B=-1;
                                //console.log("hhhh "+_this.A);
                               _this.coinp1.visible = true;
                               _this.coinp1.frame =  _this.A;
                           }
                         else if(_this.correct < _this.obj2)
                           {
                                _this.C=-1;
                                //console.log("hhhh "+_this.B);
                               _this.coinp2.visible = true;
                               _this.coinp2.frame =  _this.B;
                           }
                          else if(_this.correct < _this.obj1)
                           {
                                _this.D=-1;
                                //console.log("hhhh "+_this.A);
                               _this.coinp1.visible = true;
                               _this.coinp1.frame =  _this.A;
                           }
                          else if(_this.correct < _this.obj1)
                           {
                                _this.E=-1;
                                //console.log("hhhh "+_this.A);
                               _this.coinp1.visible = true;
                               _this.coinp1.frame =  _this.A;
                           }
                         _this.correct++;
                         _this.A++;
                         _this.B++;
                         _this.C++;
                         _this.D++;
                         target.visible = false;
                        _this.dragcoinGrp1.getChildAt(i).visible = true;
                        _this.click2 = _this.add.audio('snapSound');
                        _this.click2.play();
                          if(_this.correct >=_this.obj &&  _this.questioNo==1)
                        {
                            _this.coinp.frame = 16;
                             //console.log("dddd");

                        if( _this.toCheckNumberPad)
                        {
                            _this.toCheckNumberPad = false;
                            _this.time.events.add(200, function(){    
                            _this.addNumberPad();
                            _this.numGroup.y=50;
                            _this.Maintween = _this.add.tween(_this.numGroup);
                            _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                            _this.txtbox1.frame = 1;
                            _this.numBox1Pressed = true;

                       },_this);

                     }
                            
                                                        
                            
                        }
                       
                   // }*/
                if(_this.questioNo==1)
                 {
                     
                      _this.check++;
                     //alert("here");
                      //console.log("AAAAAAAAAAA "+_this.check);
            
                          if(_this.check==1)
                        { 
                           
                                
                            _this.Displaycoin(target);
                            if( _this.toCheckNumberPad)
                    {
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                 }}

                    }
                    
                 if(_this.questioNo==2)
                 {
                     
                        _this.check++;
                     //alert("here"+target.name);
                      //console.log("AAAAAAAAAAA "+_this.check);
            
                          if(_this.check==1)
                        { 
                            
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==2)
                        { 
                            _this.Displaycoin(target);
                       
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                 }
                        
                    
                 }
                     if(_this.questioNo==3)
                 {
                         _this.check++;
                     //alert("here");
                      //console.log("AAAAAAAAAAA "+_this.check);
            
                          if(_this.check==1)
                        { 
                           // alert("here");
                            if(_this.coinp.frame >= 1)
                                {
                                    
                                    
                                }
                            else
                                {
                                    _this.coinp.visible= false;
                                    _this.coinp.frame = 0;
                                }
                                
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==2)
                        { 
                            if(_this.coinp.frame >= 1)
                            {
                                
                            }
                            else{
                                _this.coinp.visible= false;
                                _this.coinp.frame = 0;
                            }
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==3)
                        { 
                            _this.Displaycoin(target);
                           if( _this.toCheckNumberPad)
                    {
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                 }
                        }
                      
                     
                }
                     
                    if(_this.questioNo==4)
                {
                         _this.check++;
                      //console.log("AAAAAAAAAAA "+_this.check);
                    
                          if(_this.check==1)
                        { 
                             if(_this.coinp.frame >= 1)
                                {
                                    
                                    
                                }
                            else
                                {
                                    _this.coinp.visible= false;
                                    _this.coinp.frame = 0;
                                }
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==2)
                        { 
                             if(_this.coinp.frame >= 1)
                                {
                                    
                                    
                                }
                            else
                                {
                                    _this.coinp.visible= false;
                                    _this.coinp.frame = 0;
                                }
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==3)
                        { 
                             if(_this.coinp.frame >= 1)
                                {
                                    
                                    
                                }
                            else
                                {
                                    _this.coinp.visible= false;
                                    _this.coinp.frame = 0;
                                }
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==4)
                        { 
                             if(_this.coinp.frame >= 1)
                                {
                                    
                                    
                                }
                            else
                                {
                                    _this.coinp.visible= false;
                                    _this.coinp.frame = 0;
                                }
                            _this.Displaycoin(target);
                           if( _this.toCheckNumberPad)
                    {
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                 }
                    
                 }
                    
                }
                    
                    if(_this.questioNo==5)
                 {
                     
                        _this.check++;
                     
                      //console.log("AAAAAAAAAAA "+_this.check);
            
                          if((_this.check==1||_this.check==2)&&target.name!=21)
                        { 
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==3 && target.name!=21)
                        { 
                            _this.Displaycoin(target);
                            _this.toCheckNumberPad = false;
                                 _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);}
                     else if((_this.check==1||_this.check==2)&&target.name==21)
                        {
                           
                            _this.coinp.visible = true;
                            target.visible = false;
                        }
                     else if(_this.check==3&&target.name==21)
                         {
                             
                        _this.coinp.visible = true;
                        target.visible = false;
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                 }
                        
                    
                 }
                     
                  
                    if(_this.questioNo==6)
                 {
                     
                        _this.check++;
                     
                      //console.log("AAAAAAAAAAA "+_this.check);
            
                          if(_this.check==1 &&target.name!=11)
                        { 
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==2 && target.name!=11)
                        { 
                            _this.Displaycoin(target);
                            _this.toCheckNumberPad = false;
                                 _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);}
                     else if(_this.check==1 &&target.name==11)
                        {
                           
                            _this.coinp.visible = true;
                            target.visible = false;
                        }
                     else if(_this.check==2 &&target.name==11)
                         {
                             
                        _this.coinp.visible = true;
                        target.visible = false;
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                 }
                        
                    
                 }
                     if(_this.questioNo==7)
                 {
                         _this.check++;
                      //console.log("AAAAAAAAAAA "+_this.check);
            
                          if(_this.check==1)
                        { 
                            if(_this.coinp.frame >= 1)
                                {
                                    
                                    
                                }
                            else
                                {
                                    _this.coinp.visible= false;
                                    _this.coinp.frame = 0;
                                }
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==2)
                        { 
                            if(_this.coinp.frame >= 1)
                                {
                                    
                                    
                                }
                            else
                                {
                                    _this.coinp.visible= false;
                                    _this.coinp.frame = 0;
                                }
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==3)
                        { 
                            if(_this.coinp.frame >= 1)
                                {
                                    
                                    
                                }
                            else
                                {
                                    _this.coinp.visible= false;
                                    _this.coinp.frame = 0;
                                }
                            _this.Displaycoin(target);
                        }
                             else if(_this.check==4)
                        { 
                            if(_this.coinp.frame >= 1)
                                {
                                    
                                    
                                }
                            else
                                {
                                    _this.coinp.visible= false;
                                    _this.coinp.frame = 0;
                                }
                            _this.Displaycoin(target);
                        }
                             else if(_this.check==5)
                        { 
                            if(_this.coinp.frame >= 1)
                                {
                                    
                                    
                                }
                            else
                                {
                                    _this.coinp.visible= false;
                                    _this.coinp.frame = 0;
                                }
                            _this.Displaycoin(target);
                           if( _this.toCheckNumberPad)
                    {
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                 }
                        }
                     
                     
                }
                      
                   if(_this.questioNo==8)
                 {
                     
                        _this.check++;
                     
                      //console.log("AAAAAAAAAAA "+_this.check);
            
                          if((_this.check==1||_this.check==2 || _this.check==3)&&target.name!=31)
                        { 
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==4 && target.name!=31)
                        { 
                            _this.Displaycoin(target);
                            _this.toCheckNumberPad = false;
                                 _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);}
                     else if((_this.check==1||_this.check==2 || _this.check==3)&&target.name==31)
                        {
                           
                            _this.coinp3.visible = true;
                            target.visible = false;
                        }
                     else if(_this.check==4 &&target.name==31)
                         {
                             
                        _this.coinp3.visible = true;
                         target.visible = false;
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                 }
                        
                    
                 }
                     
                 
                      
                 }
                 break;
            }
                 
           
            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
         
    },_this);
         
              
     },
    
    checkOverlap:function(spriteA, spriteB) 
	{

	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
        
    },  
                
Displaycoin:function(target)
    {
      
      
        var tempNum = parseInt(target.name,10);
        
       // alert(tempNum);
       
        if(target.name<=10)
        {
           
        _this.coinp2.visible = true;
        _this.tween21 = _this.add.tween(_this.dragcoin1);
        _this.tween21.to({ x:240 , y:300}, 300, 'Linear', true, 0);
        _this.tween21.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin1.visible=false;
        _this.tween22 = _this.add.tween(_this.dragcoin2);
        _this.tween22.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween22.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin2.visible=false;
        _this.tween23 = _this.add.tween(_this.dragcoin3);
        _this.tween23.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween23.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin3.visible=false;
        _this.tween24 = _this.add.tween(_this.dragcoin4);
        _this.tween24.to({x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween24.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin4.visible=false;
        _this.tween25 = _this.add.tween(_this.dragcoin5);
        _this.tween25.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween25.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin5.visible=false;
        _this.tween26 = _this.add.tween(_this.dragcoin6);
        _this.tween26.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween26.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin6.visible=false;
        _this.tween27 = _this.add.tween(_this.dragcoin7);
        _this.tween27.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween27.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin7.visible=false;
        _this.tween28 = _this.add.tween(_this.dragcoin8);
        _this.tween28.to({x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween28.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin8.visible=false;
        _this.tween29 = _this.add.tween(_this.dragcoin9);
        _this.tween29.to({x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween29.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin9.visible=false;
        _this.tween30 = _this.add.tween(_this.dragcoin10);
        _this.tween30.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween30.onComplete.add(function(){
        _this.dragcoin10.visible=false;
        _this.coinp2.frame=16;
       
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);  
        }
        else if(target.name<=20)
        {
            _this.coinp1.visible = true;
        _this.tween11 = _this.add.tween(_this.dragcoin11);
        _this.tween11.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween11.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin11.visible=false;
        _this.tween12 = _this.add.tween(_this.dragcoin12);
        _this.tween12.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween12.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin12.visible=false;
        _this.tween13 = _this.add.tween(_this.dragcoin13);
        _this.tween13.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween13.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin13.visible=false;
        _this.tween14 = _this.add.tween(_this.dragcoin14);
        _this.tween14.to({x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween14.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin14.visible=false;
        _this.tween15 = _this.add.tween(_this.dragcoin15);
        _this.tween15.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween15.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin15.visible=false;
        _this.tween16 = _this.add.tween(_this.dragcoin16);
        _this.tween16.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween16.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin16.visible=false;
        _this.tween17 = _this.add.tween(_this.dragcoin17);
        _this.tween17.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween17.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin17.visible=false;
        _this.tween18 = _this.add.tween(_this.dragcoin18);
        _this.tween18.to({x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween18.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin18.visible=false;
        _this.tween19 = _this.add.tween(_this.dragcoin19);
        _this.tween19.to({x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween19.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin19.visible=false;
        _this.tween20 = _this.add.tween(_this.dragcoin20);
        _this.tween20.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween20.onComplete.add(function(){
        _this.dragcoin20.visible=false;
        _this.coinp1.frame=16;
        
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this); 
        }
        else if(target.name<=30)
        {
           _this.coinp.visible = true;
            _this.tween1 = _this.add.tween(_this.dragcoin21);
            _this.tween1.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin21.visible=false;
            _this.tween2 = _this.add.tween(_this.dragcoin22);
            _this.tween2.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween2.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin22.visible=false;
            _this.tween3 = _this.add.tween(_this.dragcoin23);
            _this.tween3.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween3.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin23.visible=false;
            _this.tween4 = _this.add.tween(_this.dragcoin24);
            _this.tween4.to({x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween4.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin24.visible=false;
            _this.tween5 = _this.add.tween(_this.dragcoin25);
            _this.tween5.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween5.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin25.visible=false;
            _this.tween6 = _this.add.tween(_this.dragcoin26);
            _this.tween6.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween6.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin26.visible=false;
            _this.tween7 = _this.add.tween(_this.dragcoin27);
            _this.tween7.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween7.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin27.visible=false;
            _this.tween8 = _this.add.tween(_this.dragcoin28);
            _this.tween8.to({x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween8.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin28.visible=false;
            _this.tween9 = _this.add.tween(_this.dragcoin29);
            _this.tween9.to({x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween9.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin29.visible=false;
            _this.tween10 = _this.add.tween(_this.dragcoin30);
            _this.tween10.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween10.onComplete.add(function(){
            _this.dragcoin30.visible=false;
            _this.coinp.frame=16;
            //_this.tween1 = _this.add.tween(_this.dragcoin1);
            //_this.tween1.to({x:130 , y:265}, 300, 'Linear', true, 0);
        
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this); 
        }
        else if(target.name<=40)
        {
             _this.coinp3.visible = true;
        _this.tween31 = _this.add.tween(_this.dragcoin31);
        _this.tween31.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween31.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin31.visible=false;
        _this.tween32 = _this.add.tween(_this.dragcoin32);
        _this.tween32.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween32.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin32.visible=false;
        _this.tween33 = _this.add.tween(_this.dragcoin33);
        _this.tween33.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween33.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin33.visible=false;
        _this.tween34 = _this.add.tween(_this.dragcoin34);
        _this.tween34.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween34.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin34.visible=false;
        _this.tween35 = _this.add.tween(_this.dragcoin35);
        _this.tween35.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween35.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin35.visible=false;
        _this.tween36 = _this.add.tween(_this.dragcoin36);
        _this.tween36.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween36.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin36.visible=false;
        _this.tween37 = _this.add.tween(_this.dragcoin37);
        _this.tween37.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween37.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin37.visible=false;
        _this.tween38 = _this.add.tween(_this.dragcoin38);
        _this.tween38.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween38.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin38.visible=false;
        _this.tween39 = _this.add.tween(_this.dragcoin39);
        _this.tween39.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween39.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin39.visible=false;
        _this.tween40 = _this.add.tween(_this.dragcoin40);
        _this.tween40.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween40.onComplete.add(function(){
        _this.dragcoin40.visible=false;
        _this.coinp3.frame=16;
        _this.tween31 = _this.add.tween(_this.dragcoin31);
        _this.tween31.to({x:130 , y:265}, 300, 'Linear', true, 0);
        
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);    
        }
         else if(target.name<=50)
        {
             _this.coinp4.visible = true;
        _this.tween41 = _this.add.tween(_this.dragcoin41);
        _this.tween41.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween41.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin41.visible=false;
        _this.tween42 = _this.add.tween(_this.dragcoin42);
        _this.tween42.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween42.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin42.visible=false;
        _this.tween43 = _this.add.tween(_this.dragcoin43);
        _this.tween43.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween43.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin43.visible=false;
        _this.tween44 = _this.add.tween(_this.dragcoin44);
        _this.tween44.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween44.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin44.visible=false;
        _this.tween45 = _this.add.tween(_this.dragcoin45);
        _this.tween45.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween45.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin45.visible=false;
        _this.tween46 = _this.add.tween(_this.dragcoin46);
        _this.tween46.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween46.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin46.visible=false;
        _this.tween47 = _this.add.tween(_this.dragcoin47);
        _this.tween47.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween47.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin47.visible=false;
        _this.tween48 = _this.add.tween(_this.dragcoin48);
        _this.tween48.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween48.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin48.visible=false;
        _this.tween49 = _this.add.tween(_this.dragcoin49);
        _this.tween49.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween49.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin49.visible=false;
        _this.tween50 = _this.add.tween(_this.dragcoin50);
        _this.tween50.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween50.onComplete.add(function(){
        _this.dragcoin50.visible=false;
        _this.coinp4.frame=16;
        _this.tween41 = _this.add.tween(_this.dragcoin41);
        _this.tween41.to({x:130 , y:265}, 300, 'Linear', true, 0);
        
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);    
        }
             
           
    },
    
    
    Displaycoin1:function()
    {
        _this.coinp1.visible = true;
        _this.tween11 = _this.add.tween(_this.dragcoin11);
        _this.tween11.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween11.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin11.visible=false;
        _this.tween12 = _this.add.tween(_this.dragcoin12);
        _this.tween12.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween12.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin12.visible=false;
        _this.tween13 = _this.add.tween(_this.dragcoin13);
        _this.tween13.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween13.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin13.visible=false;
        _this.tween14 = _this.add.tween(_this.dragcoin14);
        _this.tween14.to({x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween14.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin14.visible=false;
        _this.tween15 = _this.add.tween(_this.dragcoin15);
        _this.tween15.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween15.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin15.visible=false;
        _this.tween16 = _this.add.tween(_this.dragcoin16);
        _this.tween16.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween16.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin16.visible=false;
        _this.tween17 = _this.add.tween(_this.dragcoin17);
        _this.tween17.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween17.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin17.visible=false;
        _this.tween18 = _this.add.tween(_this.dragcoin18);
        _this.tween18.to({x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween18.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin18.visible=false;
        _this.tween19 = _this.add.tween(_this.dragcoin19);
        _this.tween19.to({x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween19.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin19.visible=false;
        _this.tween20 = _this.add.tween(_this.dragcoin20);
        _this.tween20.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween20.onComplete.add(function(){
        _this.dragcoin20.visible=false;
        _this.coinp1.frame=16;
        
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);        
             
           
    },
    
     Displaycoin2:function()
    {
        _this.coinp2.visible = true;
        _this.tween21 = _this.add.tween(_this.dragcoin1);
        _this.tween21.to({ x:240 , y:300}, 300, 'Linear', true, 0);
        _this.tween21.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin1.visible=false;
        _this.tween22 = _this.add.tween(_this.dragcoin2);
        _this.tween22.to({ x:240 , y:268}, 300, 'Linear', true, 0);
        _this.tween22.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin2.visible=false;
        _this.tween23 = _this.add.tween(_this.dragcoin3);
        _this.tween23.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween23.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin3.visible=false;
        _this.tween24 = _this.add.tween(_this.dragcoin4);
        _this.tween24.to({x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween24.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin4.visible=false;
        _this.tween25 = _this.add.tween(_this.dragcoin5);
        _this.tween25.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween25.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin5.visible=false;
        _this.tween26 = _this.add.tween(_this.dragcoin6);
        _this.tween26.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween26.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin6.visible=false;
        _this.tween27 = _this.add.tween(_this.dragcoin7);
        _this.tween27.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween27.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin7.visible=false;
        _this.tween28 = _this.add.tween(_this.dragcoin8);
        _this.tween28.to({x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween28.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin8.visible=false;
        _this.tween29 = _this.add.tween(_this.dragcoin9);
        _this.tween29.to({x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween29.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin9.visible=false;
        _this.tween30 = _this.add.tween(_this.dragcoin10);
        _this.tween30.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween30.onComplete.add(function(){
        _this.dragcoin10.visible=false;
        _this.coinp2.frame=16;
       
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);        
             
           
    },
    
    Displaycoin3:function()
    {
        _this.coinp3.visible = true;
        _this.tween31 = _this.add.tween(_this.dragcoin31);
        _this.tween31.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween31.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin31.visible=false;
        _this.tween32 = _this.add.tween(_this.dragcoin32);
        _this.tween32.to({ x:130 , y:268}, 300, 'Linear', true, 0);
        _this.tween32.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin32.visible=false;
        _this.tween33 = _this.add.tween(_this.dragcoin33);
        _this.tween33.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween33.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin33.visible=false;
        _this.tween34 = _this.add.tween(_this.dragcoin34);
        _this.tween34.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween34.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin34.visible=false;
        _this.tween35 = _this.add.tween(_this.dragcoin35);
        _this.tween35.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween35.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin35.visible=false;
        _this.tween36 = _this.add.tween(_this.dragcoin36);
        _this.tween36.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween36.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin36.visible=false;
        _this.tween37 = _this.add.tween(_this.dragcoin37);
        _this.tween37.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween37.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin37.visible=false;
        _this.tween38 = _this.add.tween(_this.dragcoin38);
        _this.tween38.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween38.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin38.visible=false;
        _this.tween39 = _this.add.tween(_this.dragcoin39);
        _this.tween39.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween39.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin39.visible=false;
        _this.tween40 = _this.add.tween(_this.dragcoin40);
        _this.tween40.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween40.onComplete.add(function(){
        _this.dragcoin40.visible=false;
        _this.coinp3.frame=16;
        _this.tween31 = _this.add.tween(_this.dragcoin31);
        _this.tween31.to({x:130 , y:265}, 300, 'Linear', true, 0);
        
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);        
           
    },
    


    removeCelebration:function()
	{
        //console.log("removeCeleb");
		_this.celebration = false;
		//console.log("no"+_this.no11);
       // _this.counterForTimer=0;
        _this.correct=0;
        _this.count=0;
        _this.correctflag=0;
        _this.no11++;
		   
		  if(_this.no11<6)
                    {
                      //_this.timer1.stop();
                        
                        _this.tbox.destroy();
                        _this.numGroup.destroy();
                        _this.scorebox.destroy();
                         _this.numboxGrp.destroy();
                        _this.dragcoinGrp.destroy();
                        _this.coinGrp.destroy();
                        _this.dragcoinGrp1.destroy();
                        _this.time.events.add(500,function(){
                        _this.getQuestion();
                    },_this);
                 
                    }
        
                else
                    {
                         
                         _this.stopvoice();
                        //_this.timer1.stop();
                         //_this.timer1=null;
                         _this.state.start('unity3_1_1bScore');
                    }



		
	},

     
    
  correctAns:function(target)
	{
        
       
        _this.stopvoice();
         target.events.onInputDown.removeAll();
        _this.speaker.inputEnabled=false;
        _this.rightmark.inputEnabled=false;
        _this.rightmark.events.onInputUp.removeAll();
        _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "Click", 
                    res_id: "level3_1_1A_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
      if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
              }
        _this.currentTime = window.timeSaveFunc();
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
        
               
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		//console.log(_this.starAnim);
        
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();
     
		//console.log("correct11");
        _this.speaker.inputEnabled=false;
        _this.count1++;
       
		_this.celebration = true;
		
     	_this.cmusic = _this.add.audio('celebr');
		_this.cmusic.play();
		
        _this.time.events.add(2000, _this.removeCelebration, _this);

 
	},

    

  wrongAns:function(target)
	{
        
        _this.stopvoice();
        
        _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        
       
        _this.timer1.stop();
        _this.noofAttempts++;
        
         //_this.currentTime = window.timeSaveFunc();
       /*  _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
               } 
               

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
		
        */
   
	},
    
   
    
    getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no11])
        {
            case 1:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/English/1.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Hindi/1.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Kannada/1.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Odiya/1.mp3");
                    }
                    break;
                   
            case 2: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/English/2.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Hindi/2.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Kannada/2.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Odiya/2.mp3");
                    }
                    break;
            case 3:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/English/3.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Hindi/3.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Kannada/3.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Odiya/3.mp3");
                    }
                    break;
            case 4:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/English/4.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Hindi/4.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Kannada/4.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Odiya/4.mp3");
                    }
                    break;
            case 5:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/English/2.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Hindi/2.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Kannada/2.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Odiya/2.mp3");
                    }
                    break;
            case 6:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/English/1.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Hindi/1.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Kannada/1.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Odiya/1.mp3");
                    }
                    break;
            case 7:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/English/5.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Hindi/5.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Kannada/5.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Odiya/5.mp3");
                    }
                    break;
            case 8:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/English/3.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Hindi/3.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Kannada/3.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1.2/Odiya/3.mp3");
                    }
                    break;

                
             }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
    
                
   
    stopvoice:function(){
            
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
        }         
   

};
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       