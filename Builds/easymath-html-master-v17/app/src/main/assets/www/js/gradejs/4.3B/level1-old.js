Game.grade4_3Blevel1=function(){};
var bg1;
var starsGroup;
var dragBox;
var count;
var fillingJarGroup;
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
var tweenCount;

var selectedAns = "";
var rightAns = "";
var counterText;
var countIncrement = 0;
var questionNo;
var mainSprite;
var smallJar = 0;
var shakeObjectGroup;
var b1;
var b2;
var b3;
var b4;
 var  equation;
var eqnum;
var wrong;
var speaker;
var enterTxt;

var noofAttempts;
var timer;
var AnsTimerCount;

Game.grade4_3Blevel1.prototype={
	create:function(game){
        
		noofAttempts=0;
		AnsTimerCount=0;
		
        wrong = true;
        no1=0;
       // qArrays = [1,3,5,7,9,11];
        qArrays = [1,2,3,4,5,6,7,8];
        qArrays = this.shuffle(qArrays);
        count=0;
        count1=0;
        tweenCount = 0;
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

        this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

        bg1 = this.add.tileSprite(0,0,this.world.width,this.world.height,'Level43A_bg1');
       
		/*var backbtn = this.add.button(5,1,'Level43A_CommonBackBtn',function(){
		this.stopVoice();
		enterTxt.setText("");
		selectedAns="";
		this.state.start('grade4levelSelectionScreen');
		},this,1,0,2);

       speaker = this.add.button(908,1,'Level43A_CommonSpeakerBtn',function(){
			this.getVoice(1);
		},this,1,0,2);*/
		
		var backbtn = this.add.button(5,1,'CommonBackBtn',function(){
			 this.stopVoice();
			  selectedAns = '';
            countIncrement = 0;
				var click = this.add.audio('ClickSound');
            click.play();
			this.state.start('grade4levelSelectionScreen');
		},this,1,0,2);

       speaker = this.add.sprite(908,1,'CommonSpeakerBtn');
	   speaker.inputEnabled=true;
        speaker.input.useHandCursor = true;
		speaker.events.onInputDown.add(function(){
			var click = this.add.audio('ClickSound');
            click.play();
			this.getVoice(1);
			speaker.inputEnabled = false;
			this.time.events.add(2000, function(){speaker.inputEnabled = true;}, this);
		},this);
        
        graphics = this.add.graphics(0, 400);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,960,120);		
		graphics.boundsPadding = 0;
		graphics.alpha=0;
		
		
        
        this.generateStarsForTheScene(6);
        
       // no1++;
        if(window.languageSelected=="English")
            timforlang=14000;
        else if(window.languageSelected=="Kannada")
            timforlang=16000;
        else
            timforlang=12000;
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
           
    	}
        
    },
    
    addQuestion:function(no2)
    {
          ////////console.log("here");
           this.time.events.add(2000, function(){
  
           var tween = this.add.tween(flagGroup1);
           tween.to({ x: -1000 }, 0,'Linear', true, 0);
           tween.onComplete.add(this.changeQuestion, this);


            }, this);
    },
    
 gotoFirstQuestion:function(){
        this.stopVoice();
        questionNo = 1;
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_50Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "50Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,445,'Level43A_cup');
         b2.anchor.setTo(0.5,1);
         b2.name = "cup";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
        
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
        
        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
      

                shakeObjectGroup.x = 1000;
                b3.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(b3);
                Maintween1.to({ x: 220}, 0,'Linear', true, 0);
    
                counterText.setText("0");
           
        
     },
    
    gotoSecondQuestion:function(){
        this.stopVoice();
          questionNo = 2;
        eqnum = 2;
           //console.log("Question number "+questionNo);
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_50Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "50Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_bottle');
         b2.anchor.setTo(0.5,1);
         b2.name = "bottle";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
         
        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
      
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
          Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        
        counterText.setText("0");
        
     },
    gotoThirdQuestion:function(){
        this.stopVoice();
          questionNo = 3;
         eqnum = 4;  
        //console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_100Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "100Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_glass');
         b2.anchor.setTo(0.5,1);
         b2.name = "glass";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
      
        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");
        
     },
    gotoFourthQuestion:function(){
        this.stopVoice();
          questionNo = 4;
        eqnum = 6;
          //console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_100Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "100Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_bottle2');
         b2.anchor.setTo(0.5,1);
         b2.name = "bottle2";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);

            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        
        counterText.setText("0");
        
     }, 
    gotoFifthQuestion:function(){
        this.stopVoice();
          questionNo = 5;
         eqnum = 8;
          //console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_250Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "250Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_bottle3');
         b2.anchor.setTo(0.5,1);
         b2.name = "bottle3";
      
         b3 = this.add.sprite(210,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
      
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 210}, 0,'Linear', true, 0);
        
        counterText.setText("0");
        
     }, 
    gotoSixthQuestion:function(){
        this.stopVoice();
          questionNo = 6;
        smallJar = 0
         eqnum = 10;
          //console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_500Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "500Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_jug');
         b2.anchor.setTo(0.5,1);
         b2.name = "jug";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
      

            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 180}, 0,'Linear', true, 0);
        counterText.setText("0");
        
     },
    gotoSeventhQuestion:function(){
        this.stopVoice();
         questionNo = 7;
         smallJar = 0;
         eqnum = 12;
          //console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,415,'Level43A_250Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "250Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_jug');
         b2.anchor.setTo(0.5,1);
         b2.name = "jug";
      
         b3 = this.add.sprite(160,430,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
      

            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 160}, 0,'Linear', true, 0);
        counterText.setText("0");
        
     },
    gotoEighthQuestion:function(){
        this.stopVoice();
         questionNo = 8;
         smallJar = 0;
    //console.log("Question number "+questionNo);
         eqnum = 14;
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,415,'Level43A_250Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "250Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(timforlang,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_jug2');
         b2.anchor.setTo(0.5,1);
         b2.name = "jug2";
      
         b3 = this.add.sprite(160,430,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
      
 
            
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 160}, 0,'Linear', true, 0);
        
         counterText.setText("0");
        
     },
    /*gotoNinthQuestion:function(){
     
         questionNo = 9;
         smallJar = 0;
         eqnum = 16;
         //console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,415,'Level43A_500Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "500Q";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
     
         b2 = this.add.sprite(590,440,'Level43A_1000A');
         b2.anchor.setTo(0.5,1);
         b2.name = "1000A";
      
         b3 = this.add.sprite(150,430,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
        
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        //console.log("wrong"+!wrong);
      
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 150}, 0,'Linear', true, 0);
        
            counterText.setText("0");
      
        
     },
    */
onTapfillTheContainer:function(target)
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
			
        //console.log("Im pressed");
        countIncrement++;
        if(questionNo == 1)
            {
                waterFill.play();
               b2.frame=countIncrement;
               counterText.setText(countIncrement);
                if(countIncrement == 1)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 135}, 0,'Linear', true, 0);
                        

                        
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 50;
                    }
            }
        if(questionNo == 2)
            {
                 waterFill.play();
               b2.frame=countIncrement;
               counterText.setText(countIncrement);
                if(countIncrement == 4)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
      
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 200;
                    }
            }
        if(questionNo == 3)
            {
                 waterFill.play();
               b2.frame=countIncrement;
               counterText.setText(countIncrement);
                if(countIncrement == 1)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
                        
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 100;
                    }
            }
        if(questionNo == 4)
            {
                 waterFill.play();
               b2.frame=countIncrement;
               counterText.setText(countIncrement);
                if(countIncrement == 5)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
                    
                        
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 500;
                    }
            }
        if(questionNo == 5)
            {
                 waterFill.play();
                    b2.frame=countIncrement;
                counterText.setText(countIncrement);
                
                if(countIncrement == 2)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 220}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
                
                        
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 500;
                    }
            } 
        if(questionNo == 6)
            {
                 waterFill.play();
                smallJar +=2;
                //console.log("smallJar"+smallJar);
                    b2.frame=smallJar;
                  counterText.setText(countIncrement);
                
                if(countIncrement == 2)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 180}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 380}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 70}, 0,'Linear', true, 0);
                        

                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 1000;
                    }
            }
        if(questionNo == 7)
            {
                 waterFill.play();
                 b2.frame=countIncrement;
            /*    if(countIncrement==1)
                    b2.frame=countIncrement+4;
                if(countIncrement ==2)
                    b2.frame=countIncrement+8;*/
                
                 counterText.setText(countIncrement);
                
                if(countIncrement == 4)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 170}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 360}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 70}, 0,'Linear', true, 0);
                        
                        
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 1000;
                    }
            }
        if(questionNo == 8)
            {
                 waterFill.play();
                b2.frame=countIncrement;
                
                 counterText.setText(countIncrement);
                
                if(countIncrement == 3)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 110}, 0,'Linear', true, 0);
                        

                        
                        Maintween3.onComplete.add(this.displayEquation,this);
                        rightAns  = 750;
                    }
            }
        
        /* if(questionNo == 9)
            {
                 waterFill.play();
                if(countIncrement==1)
                    b2.frame=countIncrement+9;
                if(countIncrement ==2)
                    b2.frame=countIncrement+18;
                
                 counterText.setText(countIncrement);
                
                if(countIncrement == 2)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 190}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 355}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 85}, 0,'Linear', true, 0);
                        
                        var Maintween4 = this.add.tween(b4);
                        Maintween4.to({ x: 350}, 0,'Linear', true, 0);
                        
                        Maintween4.onComplete.add(this.displayEquation,this);
                        rightAns  = 1000;
                    }
            }*/
        
    },
displayEquation:function()
    {
         
        /*counterText = this.add.text(520,300,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 32;
            //text.fontWeight = 'bold';
        counterText.fill = '#FFFFFF';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        counterText.setText(smallJar+" ml x "+countIncrement+" =");
        this.addNumberPad();*/
       
         equation = this.add.sprite(668,335,'Level43A_equationB');
         equation.anchor.setTo(0.5,1);
         equation.frame = eqnum;
         equation.name = "equationB";
         shakeObjectGroup.add(equation);
         this.addNumberPad();
       
        
    },
    
    addNumberPad:function(){
        
        numGroup = this.add.group();
        objGroup = this.add.group();
        var x = 163;
        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,500,'Level43A_numbg');  
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

            numTxt.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=50;
        }
        var txtbox = this.add.sprite(760,300,'Level43A_AnswerBox');
        txtbox.anchor.setTo(0.5);
        txtbox.name = "AnswerBox";
        objGroup.add(txtbox);
        var wrongbtn = numGroup.create(x+80,500,'Level43A_wrongBtn');
        wrongbtn.anchor.setTo(0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+130,500,'Level43A_rightBtn');
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

        enterTxt.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        txtbox.name = "txtbox";
        numGroup.add(txtbox);
        
        
        wrongbtn.events.onInputDown.add(function(target){
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
			
			wrongbtn.frame = 1;enterTxt.setText("");selectedAns="";
                                                   this.time.events.add(1000, function(){wrongbtn.frame = 0},this);
                                                  },this);
        
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
            rightbtn.frame = 1;
             this.time.events.add(1000, function(){rightbtn.frame = 0},this);
            //console.log(selectedAns);
            //console.log(rightAns);
            if(selectedAns==rightAns||selectedAns=="0"+rightAns||selectedAns=="00"+rightAns)  
                {
					timer.stop();
					timer = null;
					
                    speaker.inputEnabled=false;
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    /*objGroup.getByName('tape15cm').frame = 1;
                    objGroup.getByName('tape15cm').frameName = rightAns;*/
                    //mainSprite.frame = 1;
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
								
                    
                    //var anim = equation.animations.add('equation');
                    //anim.play(1);
                    celebr.play();
                    var starAnim = starsGroup.getChildAt(count1);
                   // //console.log(starAnim);
                    starAnim.smoothed = false;
                    var anim4 = starAnim.animations.add('star');
                    anim4.play();
                    //anim.onComplete.add(function(){this.removeEverthing();},this);
                   // this.time.events.add(3000, function(){this.removeEverthing();},this);
                    count1++;
                    //equation.frame = eqnum+1;
                    txtbox.frame = 1;
                  /*  var tween = this.add.tween(equation.scale);
                    tween.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);*/
                    var tween1 = this.add.tween(txtbox.scale);
                    tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    tween1.onComplete.add(function(){
                      
                       // equation.frame = eqnum;
                        //txtbox.frame = 0;
                        
                        /*var tween1 = this.add.tween(equation.scale);
                        tween1.to({ x:1 , y:1}, 300,'Linear', true, 0);*/
                        var tween2 = this.add.tween(txtbox.scale);
                        tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                      
                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(txtbox.scale);
                            tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                        
                       tween1.onComplete.add(function(){
                            var tween2 = this.add.tween(txtbox.scale);
                            tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                    },this);
                    },this);
                    },this);
                    this.time.events.add(2000, function(){this.removeEverthing();},this);
                }
            else
                {
					noofAttempts++;
                    //console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    shake.shake(10, txtbox);
                    waudio.play(); 
                    //aiyoh.play(); 
                   // this.time.events.add(2000, function(){this.backToOriginalPosition();},this);
  
                }
        },this);
    },
    
     numClicked:function(target){
		 
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
			
			
        //console.log(target.name);
       // target.frame = 1;
        ClickSound.play();
        if(selectedAns.length<4)
        {
            selectedAns += target.name;
            numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
        
       // //console.log(selectedAns);
        
    },
    
    removeEverthing:function() 
    {
      //  gameBoxGroup.destroy();
      //  crocsGroup.destroy();
      //  objGroup.destroy();
        no1++;
        //console.log("--------------------------"+no1);
        if(no1<6)
        {
            //no1++;
             wrong = true;
           var MaintweenDestroy = this.add.tween(shakeObjectGroup);
            MaintweenDestroy.to({ x: -1000}, 0,'Linear', true, 0);
            
            var MaintweenDestroy1 = this.add.tween(b3);
            MaintweenDestroy1.to({ x: -1000}, 0,'Linear', true, 0);
            
//            var MaintweenDestroy2 = this.add.tween(equation);
//            MaintweenDestroy2.to({ x: -1000}, 0,'Linear', true, 0); 
            
            var MaintweenDestroy2 = this.add.tween(numGroup);
            MaintweenDestroy2.to({ x: -1000}, 0,'Linear', true, 0);
            
            MaintweenDestroy.onComplete.add(function(){
                 b3.destroy();
                equation.destroy();
               objGroup.destroy();
               numGroup.destroy();
                count =0;
                shakeObjectGroup.destroy();
                counterText.setText("");
                selectedAns = '';
                countIncrement = 0;
                this.getQuestion();
            },this);
            
               
            tweenCount=0;
           // this.getQuestion(); 
 
               
        }
        else
        {
           // //console.log("gameover");
            selectedAns = '';
            countIncrement = 0;
            this.stopVoice();
            this.state.start('grade4_3BScore');
        }
    },
    backToOriginalPosition:function(){
       
//        var MaintweenDestroy = this.add.tween(shakeObjectGroup);
//            MaintweenDestroy.to({ x: -100}, 0,'Linear', true, 0);
//        
//        var MaintweenDestroy1 = this.add.tween(b3);
//            MaintweenDestroy1.to({ x: 160}, 0,'Linear', true, 0);
        selectedAns = 0;
        countIncrement = 0;
       /*shakeObjectGroup.destroy();
       b3.destroy();
       equation.destroy();
       objGroup.destroy();*/
       // numGroup.destroy();
       // wrong = false;
       // this.addNumberPad();
        //this.getQuestion();
        
    },
    
    
    checkAns:function(target){
       // //console.log("here");
        objGroup.destroy();
       // target.events.onInputDown.removeAll();
        
        var tween = this.add.tween(gameBoxGroup);
    	tween.to({ y: 100 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){

        }, this);
       
        var tween1 = this.add.tween(crocsGroup);
    	tween1.to({ y: 100 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween1.onComplete.add(function(){
             //this.checkFortheRightOrder();
            celebr.play();
             var starAnim = starsGroup.getChildAt(count1);
               // //console.log(starAnim);
                starAnim.smoothed = false;
                var anim4 = starAnim.animations.add('star');
                anim4.play();
                anim4.onComplete.add(function(){this.addGlowtoTheSprite();},this);
            count1++;
            
        }, this);
        

        
    },
    
     
    checkFortheRightOrder:function(target){
        target.frame = 1;
        ClickSound.play();
        target.events.onInputDown.removeAll();
        var wrongBox = this.add.group();
        var wrongBoxArray = [];
        var indexArray = [];
        var rightCount = 0;
        var selectedFrameArray = [];
        var objTovisible = [];
        var wrongXpos = [];
        var wrongYpos = [];
        wrongBox.x = gameBoxGroup.x;
        wrongBox.y = gameBoxGroup.y;
       // //console.log(gameBoxGroup.children.length);
        
        
        for(var i=0;i<gameBoxGroup.children.length;i++)
        {
           // //console.log("for");
           // //console.log(gameBoxGroup.getChildAt(i).frameName,rightOrderArray[i]);
            if(gameBoxGroup.getChildAt(i).frameName == rightOrderArray[i])
            {
              // //console.log("right");
               rightCount++;
                selectedFrameArray.push(gameBoxGroup.getChildAt(i).frameName);
            }
            else
            {
                //gameBoxGroup.getChildAt(i).frameName = rightOrderArray[i];
               // //console.log(gameBoxGroup.getChildAt(i).frameName);
                count--;
                gameBoxGroup.getChildAt(i).visible = false;
                selectedFrameArray.push("blank");
                objTovisible.push(gameBoxGroup.getChildAt(i).frameName);
                wrongBoxArray.push(gameBoxGroup.getChildAt(i).frameName);
                indexArray.push(i);
                wrongXpos.push(gameBoxGroup.getChildAt(i).x);
                wrongYpos.push(gameBoxGroup.getChildAt(i).y);
            }
        }
        
        for(var j=0;j<wrongBoxArray.length;j++)
        {
           //wrongBox.add(wrongBoxArray[j]); 
            var wBox = wrongBox.create(0,0,'Level43A_gameBox');
            wBox.anchor.setTo(0.435,0.42);
            wBox.x = wrongXpos[j];
            wBox.y = wrongYpos[j];
            wBox.frameName = wrongBoxArray[j];
        }
        shake.shake(10,wrongBox);
       
         this.time.events.add(1000, function(){


            wrongBox.destroy();
             
            for(var j=0;j<gameBoxGroup.children.length;j++)
            {
                gameBoxGroup.getChildAt(j).visible = true;
                gameBoxGroup.getChildAt(j).frameName = selectedFrameArray[j];
            }
            for(var k=0;k<objTovisible.length;k++)
            {
                 objGroup.getByName(objTovisible[k]).visible = true;  
            }
            
            //this.addGlowtoTheSprite();
             if(rightCount>=4)
                 {
                     
                 }
             else
                 {
                     target.frame = 0;
                 }
            
         }, this);
        if(rightCount>=4)
        {
            for(var k=0;k<gameBoxGroup.children.length;k++)
            {
                gameBoxGroup.getChildAt(k).getChildAt(0).events.onInputDown.removeAll();
            }
            
            this.checkAns();
        }
        else
        {
             waudio.play();  
            
        }
        
    },
    
    addGlowtoTheSprite:function(target){
      //  //console.log("Glow");
        gameBoxGroup.getChildAt(glowOrderArray[0]).removeChildren();
        var glow = this.add.sprite(0,0,'Level43A_glow');
        glow.anchor.setTo(0.495);

        gameBoxGroup.getChildAt(glowOrderArray[0]).addChild(glow);  
        var anim = glow.animations.add('glow');
        anim.play(100,1);
        this.time.events.add(1000, function(){
            
            anim.stop();
            gameBoxGroup.getChildAt(glowOrderArray[1]).removeChildren();
            gameBoxGroup.getChildAt(glowOrderArray[1]).addChild(glow);
            
            anim.play(100,1);
            
            this.time.events.add(1000, function(){
            
            anim.stop();
            gameBoxGroup.getChildAt(glowOrderArray[2]).removeChildren();
            gameBoxGroup.getChildAt(glowOrderArray[2]).addChild(glow);
            
            anim.play();
            
            
            this.time.events.add(1000, function(){
            
                    anim.stop();
                    gameBoxGroup.getChildAt(glowOrderArray[3]).removeChildren();
                    gameBoxGroup.getChildAt(glowOrderArray[3]).addChild(glow);

                    anim.play();

                this.time.events.add(1000, function(){this.removeEverthing();},this);
                


                },this);
            
            
            },this);
            
            
            
        },this);
        
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
    
	correctAns:function(target)
	{
		////console.log("correct");

        	
        anim =target.animations.add('flag1');
        anim.play();
		celebration = true;
		
     	cmusic = this.add.audio('celebr');
		cmusic.play();

        this.time.events.add(500, this.removeCelebration, this);


		////console.log(target);
        //target.tint = 0xA9A9A9;
        
        var starAnim = starsGroup.getChildAt(count1);
		////console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();        		
   		target.events.onInputDown.removeAll();
	},


    wrongAns:function(target)
	{
       // //console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
       // //console.log(target);
        //target.tint = 0xA9A9A9;
        
		shake.shake(10, target);
		wmusic = this.add.audio('waudio');
		wmusic.play();
        	//this.disableListeners();
        target.events.onInputDown.removeAll();
	},
    
    removeCelebration:function()
	{
		////console.log("removeCeleb");
		celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		////console.log("no"+no1);
		//this.input.enabled = true;
			
		     count1++;
		//if(rightCount<=0)
		//{		
          //  //console.log("vamitha");
            
			if(no1<1)
			{
            //    //console.log("addq");
                 this.addQuestion(count1);
			}
			else
			{
			//	//console.log("gameEnd");
                this.state.start('score');
				//this.state.start('level2');
			}

	},
    
    
	changeQuestion:function()
	{
		flagGroup1.destroy();
		if(no1<20)
		{
            count++;
			this.getQuestion();
		}
		else
		{
			////console.log("gameEnd");
				//this.input.enabled = false;
				// text = this.add.text(this.world.centerX, 450,'Level43A_  Game Complete  ');

				// text.anchor.set(0.5);
				// text.align = 'center';

				// text.font = 'Arial Black';
				// text.fontSize = 70;
				// text.fontWeight = 'bold';
				// text.fill = '#FFFFF';

				// text.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0.5)', 0);
            

    
       
               this.state.start('level2');
              //baudio.stop();
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


    

    
    update:function(){

    },
    
    getVoice:function(){
        this.stopVoice();
        switch(qArrays[no1])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:if(window.languageSelected=="English")
                        Eng_43B1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_43B1.play();
                    else
                        Kan_43B1.play();
                    break;
        }
    },
    
    
    stopVoice:function(){
        Eng_43B1.stop();
        Hin_43B1.stop();
        Kan_43B1.stop();
    }

    
};