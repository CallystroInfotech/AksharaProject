Game.grade1_1Blevel1=function(){};

var bg1;
var headingAnim1;
var flagmain11;
var Ans1;
var Ans2;
var Ans3;
var flagmain12;
var Ans12;
var Ans22;
var Ans32;
var flagGroup1;
var flagmain31;
var Ans31;
var Ans23;
var Ans33;
var flagmain41;
var Ans41;
var Ans42;
var Ans43;
var flagmain51;
var Ans51;
var Ans52;
var Ans53;
var flagmain61;
var Ans61;
var Ans62;
var Ans63;
var flagmain71;
var Ans71;
var Ans72;
var Ans73;
var flagmain81;
var Ans81;
var Ans82;
var Ans83;
var flagmain91;
var Ans91;
var Ans92;
var Ans93;
var flagmain101;
var Ans101;
var Ans102;
var Ans103;
var flagmain111;
var Ans111;
var Ans112;
var Ans113;
var flagmain121;
var Ans121;
var Ans122;
var Ans123;
var flagmain131;
var Ans131;
var Ans132;
var Ans133;
var flagmain141;
var Ans141;
var Ans142;
var Ans143;
var click1;
var snap1;

var celebAnim1;
var rightCount;
var flagMainArray=new Array();
var mainFlag;
var opt1,opt2,opt3;

var celebration1= false;
var anim5;
var wmusic1;
var flagmain11Anim;
var count;
var no2;
var no1;
var no11;
var rno11;
var vno11;
var clickSound;
var starsGroup1;
var qArray;
var speaker1;

var noofAttempts;
var timer;
var AnsTimerCount;

Game.grade1_1Blevel1.prototype={
	create:function(game){

		noofAttempts=0;
		AnsTimerCount=0;
		
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
       rightCount = 0;
        no11 = 0;
        rno11 = 0;
        vno11 = 0;
         no2 = 0;
        count=0;
        var opt1X=0,opt1Y=0,opt2X=0,opt2Y=0,opt3X=0,opt3Y=0;
        qArray = new Array();
        qArray = [1,2,3];
        qArray = this.shuffle1(qArray);
        
        qArray1 = new Array();
        qArray1 = [4,5];
       qArray1 = this.shuffle1(qArray1);
        
        qArray2 = new Array();
        qArray2 = [6];
        qArray2 = this.shuffle1(qArray2);
       
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

		bg1 = this.add.tileSprite(0,0,this.world.width,this.world.height,'Level11B_bg1');
		//bg1.anchor.setTo(0.5);
		//bg1.scale.setTo(1.05,1.12);

        
        
        var backbtn = this.add.button(5,1,'CommonBackBtn',function(){
			this.stopvoice1();
			var click = this.add.audio('ClickSound');
            click.play();
			this.state.start('grade3levelSelectionScreen');
		},this,1,0,2);

       speaker1 = this.add.button(908,1,'CommonSpeakerBtn',function(){
		   var click = this.add.audio('ClickSound');
            click.play();
			this.getVoice();
			speaker1.inputEnabled = false;
			this.time.events.add(2000, function(){speaker1.inputEnabled = true;}, this);
		},this,1,0,2);
		
		this.generateStarsForTheScene(6);

            flagmain11Anim = game.add.sprite(100, 100,'Level11B_flagmain11','Symbol 1 instance 10000');
            flagmain11Anim.scale.setTo(1.0,1.0);
            flagmain11Anim.x=-400;
            flagmain11Anim.y=170;
            flagmain11Anim.smoothed = true;
  
				this.getQuestion();
          

    },
    
    shuffle1: function(array) {
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
        noofAttempts = 0;
		timer = game.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		timer.loop(1000, function(){
			AnsTimerCount++;
		}, this);

		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		timer.start();
		
    	//console.log("get"+no1);
        speaker1.inputEnabled=true;
        speaker1.input.useHandCursor = true;
        
         if(no11<=2)
            {
                questno=qArray[no11];
            }
        else if(rno11<=1)
                {
                    questno=qArray1[rno11];
                }
               
         else if(vno11<=0)
                {
                    questno=qArray2[vno11];
                }
        //console.log("questno"+questno);
    	switch(questno)
       
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
   
     getVoice:function(question){
         this.stopvoice1();
        //console.log('qqq=='+question);
        switch(questno)
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:if(window.languageSelected=="English")
                        Eng_11A2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_11A2.play();
                    else
                        Kan_11A2.play();
                    break;
        }
    },
    
        stopvoice1:function(){
        Eng_11A2.stop();
        Hin_11A2.stop();
        Kan_11A2.stop();
    },
    
    speakeron:function(){
        this.stopvoice1();
        switch(questno)
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:if(window.languageSelected=="English")
                        Eng_11A2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_11A2.play();
                    else
                        Kan_11A2.play();
                    break;
        }
        
        
    },
    
    generateStarsForTheScene:function(count)
	{
		starsGroup1 = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroup1.create(this.world.centerX-15, 10, 'CommonStarAnim');
			for(var j =0;j<i;j++)
			{
				if(starsGroup1.getChildAt(j))
				{
					starsGroup1.getChildAt(j).x-=15;
					starsGroup1.getChildAt(i).x+=15;
				}
			}
		}						
	},

    addQuestion:function(no2)
    {
       /* //console.log(no2);
        
        var lineAnim2 = this.add.sprite(this.world.centerX,-20,'Level11B_headingLine');
        lineAnim2.anchor.setTo(0.5);
        lineAnim2.scale.setTo(1.041,1);
        text = this.add.text(0, 5,'Level11B_  Colour 1/4th part of the whole  ');
        text.anchor.set(0.5);
        text.align = 'center';

        text.font = 'Comic Sans MS';
        text.fontSize = 25;
        //text.fontWeight = 'bold';
        text.fill = '#FFFFFF';

        text.setShadow(0, 0,'Level11B_rgba(0, 0, 0, 0)', 0);
        lineAnim2.addChild(text);
        // text.visible=false;
        // questionBackground.visible=false;

        switch(qArray[no2])  
        {
            case 1:text.setText(selctedLang.lastSceneQuestion1);break;
            case 2:text.setText(selctedLang.lastSceneQuestion2);break;
            case 3:text.setText(selctedLang.lastSceneQuestion3);break;
            case 4:text.setText(selctedLang.lastSceneQuestion4);break;
            case 5:text.setText(selctedLang.lastSceneQuestion5);break;
            case 6:text.setText(selctedLang.lastSceneQuestion6);break;
//            case 7:text.setText(selctedLang.lastSceneQuestion7);break;
//                            case 8:text.setText(selctedLang.lastSceneQuestion8);break;
//                            case 9:text.setText(selctedLang.lastSceneQuestion9);break;
//                            case 10:text.setText(selctedLang.lastSceneQuestion10);break;
//                            case 11:text.setText(selctedLang.lastSceneQuestion11);break;
//                            case 12:text.setText(selctedLang.lastSceneQuestion12);break;
//                            case 13:text.setText(selctedLang.lastSceneQuestion13);break;
//                            case 14:text.setText(selctedLang.lastSceneQuestion14);break;
                
        }
        var tween = this.add.tween(lineAnim2);
        tween.to({ y: 545 }, 0,'Linear', true, 0);
        tween.onComplete.add(function(){
            //this.addEventListeners();*/
           
            this.time.events.add(900, function(){
     //            lineAnim2.destroy();
                var tween = this.add.tween(flagGroup1);
           tween.to({ x: -1000 }, 0,'Linear', true, 0);
           tween.onComplete.add(this.changeQuestion, this);


            }, this);
            
        //}, this);

    },
    
    update:function(){

    },

    gotoFirstQuestion:function(){
    	no11++;
    	mainFlag = this.add.sprite(270,230,'Level11B_flagmain11');
    	mainFlag.anchor.setTo(0.5);
    	opt1 = this.add.sprite(570,280,'Level11B_Ans1');
    	opt1.anchor.setTo(0.5);
        opt1.name = 'rightAnswer';
    	opt2 = this.add.sprite(730,280,'Level11B_Ans2');
    	opt2.anchor.setTo(0.5);
    	
    	opt3 = this.add.sprite(890,280,'Level11B_Ans3');
    	opt3.anchor.setTo(0.5);

    	opt1X = opt1.x;
    	opt1Y = opt1.y;

    	opt2X = opt2.x;
    	opt2Y = opt2.y;

    	opt3X = opt3.x;
    	opt3Y = opt3.y;

    	

    	flagGroup1 = this.add.group();

    	flagGroup1.add(mainFlag);
    	flagGroup1.add(opt1);
    	flagGroup1.add(opt2);
    	flagGroup1.add(opt3);

    	flagGroup1.x = 1000;
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(this.addListeners, this);
        if(no11==1)
        {
            this.getVoice(no1);
            this.time.events.add(4000,function(){
            opt1.inputEnabled = true;
    	    opt1.input.useHandCursor = true;
            opt2.inputEnabled = true;
    	    opt2.input.useHandCursor = true;
            opt3.inputEnabled = true;
    	    opt3.input.useHandCursor = true;
            this.addListeners();
            },this);
        }
        else
        {
            opt1.inputEnabled = true;
    	    opt1.input.useHandCursor = true;
            opt2.inputEnabled = true;
    	    opt2.input.useHandCursor = true;
            opt3.inputEnabled = true;
    	    opt3.input.useHandCursor = true;
            this.addListeners();
        }
        

        //         var tween = this.add.tween(windmillGroup);
        // tween.to({ x: 0}, 0,'Linear', true, 0);
        tween.onComplete.add(function(){
       // this.addQuestion(count);

     }, this);               
    },

    gotoSecondQuestion:function(){
        
    	no11++;
    	mainFlag = this.add.sprite(270,280,'Level11B_flagmain12');
    	mainFlag.anchor.setTo(0.5);
    	opt1 = this.add.sprite(585,280,'Level11B_Ans21');
    	opt1.anchor.setTo(0.5);
    	opt2 = this.add.sprite(755,280,'Level11B_Ans22');
    	opt2.anchor.setTo(0.5);
    opt2.name = 'rightAnswer';
    	opt3 = this.add.sprite(890,280,'Level11B_Ans32');
    	opt3.anchor.setTo(0.5);

    	opt1X = opt1.x;
    	opt1Y = opt1.y;

    	opt2X = opt2.x;
    	opt2Y = opt2.y;

    	opt3X = opt3.x;
    	opt3Y = opt3.y;

    	

    	flagGroup1 = this.add.group();

    	flagGroup1.add(mainFlag);
    	flagGroup1.add(opt1);
    	flagGroup1.add(opt2);
    	flagGroup1.add(opt3);

    	flagGroup1.x = 1000;
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(this.addListeners, this);
        if(no11==1)
        {
            this.getVoice(no1);
            this.time.events.add(4000,function(){
            opt1.inputEnabled = true;
    	    opt1.input.useHandCursor = true;
            opt2.inputEnabled = true;
    	    opt2.input.useHandCursor = true;
            opt3.inputEnabled = true;
    	    opt3.input.useHandCursor = true;
            this.addListeners();
            },this);
        }
        else
        {
            opt1.inputEnabled = true;
    	    opt1.input.useHandCursor = true;
            opt2.inputEnabled = true;
    	    opt2.input.useHandCursor = true;
            opt3.inputEnabled = true;
    	    opt3.input.useHandCursor = true;
            this.addListeners();
        }
    },

    gotoThirdQuestion:function(){
       
    		no11++;
    	mainFlag = this.add.sprite(270,290,'Level11B_flagmain51');
    	mainFlag.anchor.setTo(0.5);
    	opt1 = this.add.sprite(570,280,'Level11B_Ans51');
    	opt1.anchor.setTo(0.5);
    	  opt1.name = 'rightAnswer';
    
    	opt2 = this.add.sprite(730,280,'Level11B_Ans52');
    	opt2.anchor.setTo(0.5);
          
    	
    	opt3 = this.add.sprite(880,280,'Level11B_Ans53');
    	opt3.anchor.setTo(0.5);

    	opt1X = opt1.x;
    	opt1Y = opt1.y;

    	opt2X = opt2.x;
    	opt2Y = opt2.y;

    	opt3X = opt3.x;
    	opt3Y = opt3.y;

    	

    	flagGroup1 = this.add.group();

    	flagGroup1.add(mainFlag);
    	flagGroup1.add(opt1);
    	flagGroup1.add(opt2);
    	flagGroup1.add(opt3);

    	flagGroup1.x = 1000;
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(this.addListeners, this);
            if(no11==1)
        {
           this.getVoice(no1);
            this.time.events.add(4000,function(){
                opt1.inputEnabled = true;
                opt1.input.useHandCursor = true;
                opt2.inputEnabled = true;
                opt2.input.useHandCursor = true;
                opt3.inputEnabled = true;
                opt3.input.useHandCursor = true;
                this.addListeners();
            },this);
        }
        else
        {
            opt1.inputEnabled = true;
            opt1.input.useHandCursor = true;
            opt2.inputEnabled = true;
            opt2.input.useHandCursor = true;
            opt3.inputEnabled = true;
            opt3.input.useHandCursor = true;
            this.addListeners();
        }
    },

    gotoFourthQuestion:function(){
        
    	rno11++;
    	mainFlag = this.add.sprite(270,260,'Level11B_flagmain41');
    	mainFlag.anchor.setTo(0.5);
    	opt1 = this.add.sprite(545,280,'Level11B_Ans41');
    	opt1.anchor.setTo(0.5);
    
    	opt2 = this.add.sprite(665,280,'Level11B_Ans42');
    	opt2.anchor.setTo(0.5);
    	
    	opt3 = this.add.sprite(865,280,'Level11B_Ans43');
    	opt3.anchor.setTo(0.5);
            opt3.name = 'rightAnswer';

    	opt1X = opt1.x;
    	opt1Y = opt1.y;

    	opt2X = opt2.x;
    	opt2Y = opt2.y;

    	opt3X = opt3.x;
    	opt3Y = opt3.y;

    	

    	flagGroup1 = this.add.group();

    	flagGroup1.add(mainFlag);
    	flagGroup1.add(opt1);
    	flagGroup1.add(opt2);
    	flagGroup1.add(opt3);

    	flagGroup1.x = 1000;
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(this.addListeners, this);
        if(no1==1)
        {
           this.getVoice(no1);
            this.time.events.add(4000,function(){
                opt1.inputEnabled = true;
                opt1.input.useHandCursor = true;
                opt2.inputEnabled = true;
                opt2.input.useHandCursor = true;
                opt3.inputEnabled = true;
                opt3.input.useHandCursor = true;
                this.addListeners();
           },this);
        }
        else
        {
            opt1.inputEnabled = true;
            opt1.input.useHandCursor = true;
            opt2.inputEnabled = true;
            opt2.input.useHandCursor = true;
            opt3.inputEnabled = true;
            opt3.input.useHandCursor = true;
            this.addListeners();
        }
    },


    gotoFifthQuestion:function(){
      
    rno11++;
    	mainFlag = this.add.sprite(270,260,'Level11B_flagmain31');
    	mainFlag.anchor.setTo(0.5);
    	opt1 = this.add.sprite(585,280,'Level11B_Ans31');
    	opt1.anchor.setTo(0.5);
    	opt2 = this.add.sprite(740,280,'Level11B_Ans23');
    	opt2.anchor.setTo(0.5);
            opt2.name = 'rightAnswer';
    	opt3 = this.add.sprite(890,280,'Level11B_Ans33');
    	opt3.anchor.setTo(0.5);

    	opt1X = opt1.x;
    	opt1Y = opt1.y;

    	opt2X = opt2.x;
    	opt2Y = opt2.y;

    	opt3X = opt3.x;
    	opt3Y = opt3.y;

    	

    	flagGroup1 = this.add.group();

    	flagGroup1.add(mainFlag);
    	flagGroup1.add(opt1);
    	flagGroup1.add(opt2);
    	flagGroup1.add(opt3);

    	flagGroup1.x = 1000;
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(this.addListeners, this);
        if(no1==1)
        {
           this.getVoice(no1);
            this.time.events.add(4000,function(){
                opt1.inputEnabled = true;
                opt1.input.useHandCursor = true;
                opt2.inputEnabled = true;
                opt2.input.useHandCursor = true;
                opt3.inputEnabled = true;
                opt3.input.useHandCursor = true;
                this.addListeners();
            },this);
        }
        else
        {
            opt1.inputEnabled = true;
            opt1.input.useHandCursor = true;
            opt2.inputEnabled = true;
            opt2.input.useHandCursor = true;
            opt3.inputEnabled = true;
            opt3.input.useHandCursor = true;
            this.addListeners();
        }
    },


    gotoSixthQuestion:function(){
       
    	vno11++;
    	mainFlag = this.add.sprite(270,270,'Level11B_flagmain61');
    	mainFlag.anchor.setTo(0.5);
    	opt1 = this.add.sprite(570,280,'Level11B_Ans61');
    	opt1.anchor.setTo(0.5);
    	
    
    	opt2 = this.add.sprite(720,280,'Level11B_Ans62');
    	opt2.anchor.setTo(0.5);
    	
    	opt3 = this.add.sprite(880,280,'Level11B_Ans63');
    	opt3.anchor.setTo(0.5);
        opt3.name = 'rightAnswer';

    	
    	opt1X = opt1.x;
    	opt1Y = opt1.y;

    	
    	opt2X = opt2.x;
    	opt2Y = opt2.y;

    	
    	opt3X = opt3.x;
    	opt3Y = opt3.y;

        
    	

    	flagGroup1 = this.add.group();

    	flagGroup1.add(mainFlag);
    	flagGroup1.add(opt1);
    	flagGroup1.add(opt2);
    	flagGroup1.add(opt3);

    	flagGroup1.x = 1000;
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        if(no1==1)
        {
            this.getVoice(no1);
            this.time.events.add(4000,function(){
                opt1.inputEnabled = true;
                opt1.input.useHandCursor = true;
                opt2.inputEnabled = true;
                opt2.input.useHandCursor = true;
                opt3.inputEnabled = true;
                opt3.input.useHandCursor = true;
                this.addListeners();
            },this);
        }
        else
        {
            opt1.inputEnabled = true;
            opt1.input.useHandCursor = true;
            opt2.inputEnabled = true;
            opt2.input.useHandCursor = true;
            opt3.inputEnabled = true;
            opt3.input.useHandCursor = true;
            this.addListeners();
        }
    	//tween.onComplete.add(this.addListeners, this);
    },
     
 
    addListeners:function()
    {
    	opt1.input.enableDrag(true);
    	opt2.input.enableDrag(true);
    	opt3.input.enableDrag(true);


    	opt1.events.onDragStart.add(this.onDragStart, this);
    	opt1.events.onDragStop.add(this.onDragStop, this);

    	opt2.events.onDragStart.add(this.onDragStart, this);
    	opt2.events.onDragStop.add(this.onDragStop, this);

    	opt3.events.onDragStart.add(this.onDragStart, this);
    	opt3.events.onDragStop.add(this.onDragStop, this);
    },

	changeQuestion:function()
	{
		flagGroup1.destroy();
		if(no11<=2||rno11<=1||vno11<=0)
		{
            count++;
			this.getQuestion();
		}
		else
		{
			//console.log("gameEnd");
				//this.input.enabled = false;
				// text = this.add.text(this.world.centerX, 450,'Level11B_  Game Complete  ');

				// text.anchor.set(0.5);
				// text.align = 'center';

				// text.font = 'Arial Black';
				// text.fontSize = 70;
				// text.fontWeight = 'bold';
				// text.fill = '#FFFFF';

				// text.setShadow(0, 0,'Level11B_rgba(0, 0, 0, 0.5)', 0);
            

    
             no1++;
    	mainFlag = this.add.sprite(300,300,'Level11B_flagmain31');
    	mainFlag.anchor.setTo(0.5);
    	opt1 = this.add.sprite(620,300,'Level11B_Ans31');
    	opt1.anchor.setTo(0.5);
    	opt2 = this.add.sprite(770,300,'Level11B_Ans23');
    	opt2.anchor.setTo(0.5);
            opt2.name = 'rightAnswer';
    	opt3 = this.add.sprite(920,300,'Level11B_Ans33');
    	opt3.anchor.setTo(0.5);

    	opt1X = opt1.x;
    	opt1Y = opt1.y;

    	opt2X = opt2.x;
    	opt2Y = opt2.y;

    	opt3X = opt3.x;
    	opt3Y = opt3.y;

    	

    	flagGroup1 = this.add.group();

    	flagGroup1.add(mainFlag);
    	flagGroup1.add(opt1);
    	flagGroup1.add(opt2);
    	flagGroup1.add(opt3);

    	flagGroup1.x = 1000;
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(this.addListeners, this);
        if(no1==1)
        {
           // this.getVoice(no1);
           // this.time.events.add(4000,function(){
                opt1.inputEnabled = true;
                opt1.input.useHandCursor = true;
                opt2.inputEnabled = true;
                opt2.input.useHandCursor = true;
                opt3.inputEnabled = true;
                opt3.input.useHandCursor = true;
                this.addListeners();
           // },this);
        }
        else
        {
            opt1.inputEnabled = true;
            opt1.input.useHandCursor = true;
            opt2.inputEnabled = true;
            opt2.input.useHandCursor = true;
            opt3.inputEnabled = true;
            opt3.input.useHandCursor = true;
            this.addListeners();
        }
               this.state.start('grade1_1BScore');
//   baudio.stop();
//            headingText2.destroy();
//            backbtn1.destroy();
//            speaker1.destroy();
//            starsGroup1.destroy();
//              
//            headingText2.visible=false;
//            backbtn1.visible=false;
//            speaker1.visible=false;
//            starsGroup1.visible=false;
		}
	},

    removeCelebration1:function()
	{
		//console.log("removeCeleb");
		celebration1 = false;
		//celebAnim1.destroy();
        this.addQuestion(count);
		//var tween = this.add.tween(flagGroup1);
    	//tween.to({ x: -1000 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(this.changeQuestion, this);
		
	},

	correctAns1:function(target)
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
		
		//console.log("correct"+target.name);
		//console.log("correct");
        speaker1.inputEnabled=false;
		//this.input.enabled = false;
        
        opt1.inputEnabled=false;
        opt2.inputEnabled=false;
        opt3.inputEnabled=false;
       
        anim5 = target.animations.add('playAnim');
        anim5.play();

		celebration1 = true;
		//celebAnim1 = this.add.tileSprite(0,0,this.world.width,this.world.height,'Level11B_celeb');
     	cmusic1 = this.add.audio('celebr');
		cmusic1.play();

       // score+=10;
//        scoretext.setText(selctedLang.score+' : '+score);

		//celebAnim1.smoothed=true;
        //clickSound.play();
		this.time.events.add(500, this.removeCelebration1, this);
           
        //console.log(count);
        var starAnim = starsGroup1.getChildAt(count);
		//console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();      
         target.events.onInputDown.removeAll();
	},


    wrongAns1:function(target)
	{
		noofAttempts++;
        //score-=5;
//        scoretext.setText(selctedLang.score+' : '+score);
		//console.log("wrong");
		shake.shake(10, target);
		wmusic1 = this.add.audio('waudio');
		wmusic1.play();
        //clickSound.play();
         target.events.onInputDown.removeAll();
	},


    onDragStart:function(target){
		
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
			
    	//console.log("startdrag");
    	targetCoordinatesX = target.x;
    	targetCoordinatesY = target.y;
        click1 = this.add.audio('ClickSound');
        click1.play();
    },

    onDragStop:function(target){

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
			
    	if (this.checkOverlap(mainFlag, target))
    	{
    		if(target.name=='rightAnswer')
    		{
                snap1 = this.add.audio('snapSound');
                snap1.play();
    			//console.log("correct"+mainFlag);
    			target.destroy();
    			mainFlag.frame = 1;
    			this.correctAns1(mainFlag);
    		}
    		else
    		{
    			//console.log("wrong");
    			if(target == opt1)
    			{
    				target.x = opt1X;
    				target.y = opt1Y;
    			}
    			else if(target == opt2)
    			{
    				target.x = opt2X;
    				target.y = opt2Y;
    			}
    			else if(target == opt3)
    			{
    				target.x = opt3X;
    				target.y = opt3Y;
    			}

    			this.wrongAns1(target);
    		}
    	}
    	else
    	{
    		if(target == opt1)
    			{
    				target.x = opt1X;
    				target.y = opt1Y;
    			}
    			else if(target == opt2)
    			{
    				target.x = opt2X;
    				target.y = opt2Y;
    			}
    			else if(target == opt3)
    			{
    				target.x = opt3X;
    				target.y = opt3Y;
    			}
    	}
    	
    },

	checkOverlap:function(spriteA, spriteB) 
	{

	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    

};