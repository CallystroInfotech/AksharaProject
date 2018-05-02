Game.grade4_3Clevel1=function(){};
var bg1;
var starsGroup;
var dragBox;
var count;
var fillingJarGroup;
var crocsGroup;
var tickMark;
var crossMark;
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
var counterText2;
var countIncrement = 0;
var questionNo;
var mainSprite;
var smallJar = 0;
var shakeObjectGroup;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var  equation;
var eqnum;
var wrong;
var count3 =0;
var count2 =0;
var speaker;

var noofAttempts;
var timer;
var AnsTimerCount;

Game.grade4_3Clevel1.prototype={
	create:function(game){
        
		noofAttempts=0;
		AnsTimerCount=0;
		
        wrong = true;
        no1=0;
       // qArrays = [1,3,5,7,9,11];
        qArrays = [1,2,3,4,5,6,7,8,9];
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
		this.state.start('grade4levelSelectionScreen');
		},this,1,0,2);

       speaker = this.add.button(908,1,'Level43A_CommonSpeakerBtn',function(){
			this.getVoice(qArrays[no1]);
		},this,1,0,2);*/
		
		var backbtn = this.add.button(5,1,'CommonBackBtn',function(){
			 this.stopVoice();
			  countIncrement = 0;
            count2 = 0;
            count3 = 0;
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
			this.getVoice(qArrays[no1]);
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
		//  Set a TimerEvent to occur after 2 seconds
		timer = game.time.create(false);
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
        this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(180,490,'Level43A_50QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "50QC";
         b1.inputEnabled = true;
         b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
     
         b2 = this.add.sprite(370,490,'Level43A_100QC');
         b2.anchor.setTo(0.5,1);
         b2.name = "100QC";
         b2.frame = 1;
         b2.inputEnabled = true;
    	 b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
     
         b4 = this.add.sprite(300,470,'Level43A_incBox');
         b4.anchor.setTo(0.5,1);
         b4.name = "incBox";
     
         b5 = this.add.sprite(650,490,'Level43A_1000AC');
         b5.anchor.setTo(0.5,1);
         b5.name = "1000AC";
            
         b6 = this.add.sprite(700,403,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.name = "arrowC";
         
         tickMark = this.add.sprite(830,280,'Level43A_tickMark');
         crossMark = this.add.sprite(830,350,'Level43A_crossMark');
        
        
     
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
     /******************** Second Box**************/
        counterText2 = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';

        counterText2.font = 'Alte Haas Grotesk';
        counterText2.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText2.fill = '#65B4C3';

        counterText2.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b4.addChild(counterText2);
        
        shakeObjectGroup.add(b3);
        shakeObjectGroup.add(b4);
        
        objGroup.add(b1);
        objGroup.add(b2);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
                counterText2.setText("0");
           
        
     },
    
    gotoSecondQuestion:function(){
        this.stopVoice();
         questionNo = 2;
        this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(180,490,'Level43A_100QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "100QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
     
         b2 = this.add.sprite(390,490,'Level43A_250QC');
         b2.anchor.setTo(0.5,1);
         b2.name = "250QC";
         b2.frame = 1;
         b2.inputEnabled = true;
    	 b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
     
         b4 = this.add.sprite(300,470,'Level43A_incBox');
         b4.anchor.setTo(0.5,1);
         b4.name = "incBox";
     
         b5 = this.add.sprite(650,490,'Level43A_1000AC');
         b5.anchor.setTo(0.5,1);
         b5.name = "1000AC";
            
         b6 = this.add.sprite(700,370,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 1;
         b6.name = "arrowC";
         
         tickMark = this.add.sprite(830,280,'Level43A_tickMark');
         crossMark = this.add.sprite(830,350,'Level43A_crossMark');
        
        
     
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
     /******************** Second Box**************/
        counterText2 = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';

        counterText2.font = 'Alte Haas Grotesk';
        counterText2.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText2.fill = '#65B4C3';

        counterText2.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b4.addChild(counterText2);
        
        shakeObjectGroup.add(b3);
        shakeObjectGroup.add(b4);
      

               objGroup.add(b1);
        objGroup.add(b2);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
                counterText2.setText("0");

           
        
     },
    gotoThirdQuestion:function(){
        this.stopVoice();
          questionNo = 3;
        this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(180,490,'Level43A_50QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "50QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
     
         b2 = this.add.sprite(410,495,'Level43A_500QC');
         b2.anchor.setTo(0.5,1);
         b2.name = "500QC";
         b2.frame = 1;
         b2.inputEnabled = true;
    	 b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
     
         b4 = this.add.sprite(300,470,'Level43A_incBox');
         b4.anchor.setTo(0.5,1);
         b4.name = "incBox";
     
         b5 = this.add.sprite(650,490,'Level43A_1000AC');
         b5.anchor.setTo(0.5,1);
         b5.name = "1000AC";
            
         b6 = this.add.sprite(705,313,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 2;
         b6.name = "arrowC";
         
         tickMark = this.add.sprite(830,280,'Level43A_tickMark');
        crossMark = this.add.sprite(830,350,'Level43A_crossMark');
        
        
     
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
     /******************** Second Box**************/
        counterText2 = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';

        counterText2.font = 'Alte Haas Grotesk';
        counterText2.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText2.fill = '#65B4C3';

        counterText2.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b4.addChild(counterText2);
        
        shakeObjectGroup.add(b3);
        shakeObjectGroup.add(b4);
      

        objGroup.add(b1);
        objGroup.add(b2);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
                counterText2.setText("0");
        
     },
    gotoFourthQuestion:function(){
        this.stopVoice();
          questionNo = 4;
        this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(200,490,'Level43A_200QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "200QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
     
         b2 = this.add.sprite(393,495,'Level43A_250QC');
         b2.anchor.setTo(0.5,1);
         b2.name = "250QC";
         b2.frame = 1;
         b2.inputEnabled = true;
    	 b2.input.useHandCursor = true;
         b2.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
     
         b4 = this.add.sprite(300,470,'Level43A_incBox');
         b4.anchor.setTo(0.5,1);
         b4.name = "incBox";
     
         b5 = this.add.sprite(650,490,'Level43A_1000AC');
         b5.anchor.setTo(0.5,1);
         b5.name = "1000AC";
            
         b6 = this.add.sprite(705,270,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 3;
         b6.name = "arrowC";
         
         tickMark = this.add.sprite(830,280,'Level43A_tickMark');
        crossMark = this.add.sprite(830,350,'Level43A_crossMark');
        
        
     
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
     /******************** Second Box**************/
        counterText2 = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';

        counterText2.font = 'Alte Haas Grotesk';
        counterText2.fontSize = 24;
            //text.fontWeight = 'bold';
        counterText2.fill = '#65B4C3';

        counterText2.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b4.addChild(counterText2);
        
        shakeObjectGroup.add(b3);
        shakeObjectGroup.add(b4);
      

        objGroup.add(b1);
        objGroup.add(b2);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
                counterText2.setText("0");
        
        
     }, 
   gotoFifthQuestion:function(){
       this.stopVoice();
         questionNo = 5;
       this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,495,'Level43A_1000QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "1000QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b2 = b1; 
    
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
         b4 = b3; 
        
         b5 = this.add.sprite(600,490,'Level43A_jugC');
         b5.anchor.setTo(0.5,1);
         b5.name = "jugC";
            
         b6 = this.add.sprite(595,358,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 3;
         b6.name = "arrowC";
         
         tickMark = this.add.sprite(830,280,'Level43A_tickMark');
       crossMark = this.add.sprite(830,350,'Level43A_crossMark');
        
        
     
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
        
        shakeObjectGroup.add(b3);
       

        objGroup.add(b1);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
        
     }, 
    gotoSixthQuestion:function(){
        this.stopVoice();
         questionNo = 6;
        this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,495,'Level43A_250QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "250QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b2 = b1; 
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
         b4 = b3; 
        
         b5 = this.add.sprite(600,490,'Level43A_jugC');
         b5.anchor.setTo(0.5,1);
         b5.name = "jugC";
            
         b6 = this.add.sprite(595,390,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 4;
         b6.name = "arrowC";
         
         tickMark = this.add.sprite(830,280,'Level43A_tickMark');
        crossMark = this.add.sprite(830,350,'Level43A_crossMark');
        
        
     
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
        
        shakeObjectGroup.add(b3);
       

        objGroup.add(b1);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
        
     }, 
    gotoSeventhQuestion:function(){
        this.stopVoice();
         questionNo = 7;
        this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,495,'Level43A_500QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "500QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b2 = b1; 
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
         b4 = b3; 
        
         b5 = this.add.sprite(600,490,'Level43A_jugC');
         b5.anchor.setTo(0.5,1);
         b5.name = "jugC";
            
         b6 = this.add.sprite(595,293,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 5;
         b6.name = "arrowC";
         
         tickMark = this.add.sprite(830,280,'Level43A_tickMark');
        crossMark = this.add.sprite(830,350,'Level43A_crossMark');
        
        
     
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
        
        shakeObjectGroup.add(b3);
       

        objGroup.add(b1);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
        
     }, 
    gotoEighthQuestion:function(){
        this.stopVoice();
         questionNo = 8;
        this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,495,'Level43A_250QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "250QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b2 = b1; 
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
         b4 = b3; 
        
         b5 = this.add.sprite(600,490,'Level43A_jugC');
         b5.anchor.setTo(0.5,1);
         b5.name = "jugC";
            
         b6 = this.add.sprite(595,258,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 6;
         b6.name = "arrowC";
         
         tickMark = this.add.sprite(830,280,'Level43A_tickMark');
        crossMark = this.add.sprite(830,350,'Level43A_crossMark');
        
        
     
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
        
        shakeObjectGroup.add(b3);
       

        objGroup.add(b1);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
        
     },
    gotoNinthQuestion:function(){
        this.stopVoice();
         questionNo = 9;
        this.getVoice();
        //console.log("Question number "+questionNo);
        eqnum = 0;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,495,'Level43A_1000QC');
         b1.anchor.setTo(0.5,1);
         b1.frame = 1;
         b1.name = "1000QC";
         b1.inputEnabled = true;
    	 b1.input.useHandCursor = true;
         b1.events.onInputDown.add(this.onTapfillTheContainer,this);
      
         b2 = b1; 
         b3 = this.add.sprite(120,470,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
         b4 = b3; 
        
         b5 = this.add.sprite(600,490,'Level43A_jugC');
         b5.anchor.setTo(0.5,1);
         b5.name = "jugC";
            
         b6 = this.add.sprite(595,220,'Level43A_arrowC');
         b6.anchor.setTo(0.5,1);
         b6.frame = 7;
         b6.name = "arrowC";
         
         tickMark = this.add.sprite(830,280,'Level43A_tickMark');
        crossMark = this.add.sprite(830,350,'Level43A_crossMark');
        
        
     
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
        
        shakeObjectGroup.add(b3);
       

        objGroup.add(b1);
        objGroup.add(b5);
        objGroup.add(b6);
        objGroup.add(tickMark);
        objGroup.add(crossMark);

                shakeObjectGroup.x = 1000;
                objGroup.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(objGroup);
                Maintween1.to({ x: 0}, 0,'Linear', true, 0);
    
                counterText.setText("0");
        
     }, 

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
			
        //console.log("Im pressed"+target.name);
        
         tickMark.inputEnabled = true; 
         tickMark.input.useHandCursor = true; 
         tickMark.events.onInputDown.add(this.somefunction,this);
         
        crossMark.inputEnabled = true; 
         crossMark.input.useHandCursor = true; 
         crossMark.events.onInputDown.add(function(target){ ClickSound.play();
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
			
			b5.frame = 0;crossMark.frame = 1;countIncrement = 0;
                count3 = 0;count2 = 0; counterText.setText("");if(questionNo<5){counterText2.setText("")} b1.inputEnabled = true;
                                                           b2.inputEnabled = true;b1.input.useHandCursor = true;
                b2.input.useHandCursor = true;this.time.events.add(500, function(){crossMark.frame = 0},this);this.time.events.add(500, function(){crossMark.frame = 0},this);},this);
             
        if(countIncrement<20){
         countIncrement++;

          //console.log("countIncrement"+countIncrement);
        if(questionNo == 1)
            {
                waterFill.play();
                
                if(target.name =="50QC"){
                    if(countIncrement<=20){
                     count3++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                     else{
                        target.inputEnabled = false;
                    }
                }
                
                else{
                    if(countIncrement<=19){
                    count2++;
                    countIncrement++;
                    b5.frame=countIncrement; 
                    counterText2.setText(count2);
                    }
                     else{
                      countIncrement--;
                        target.inputEnabled = false;
                    }
                }
            }
        if(questionNo == 2)
            {
                waterFill.play();
                
                if(target.name =="100QC"){
                     if(countIncrement<=19){
                    count3++;
                    countIncrement++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                     }
                     else{
                        target.inputEnabled = false;
                    }
                }
                
                else{
                    if(countIncrement<=16){
                        count2++;
                        countIncrement++;
                        countIncrement++;
                        countIncrement++;
                        countIncrement++;
                        b5.frame=countIncrement; 
                        counterText2.setText(count2);
                    }
                 else{
                      countIncrement--;
                        target.inputEnabled = false;
                    }
                }

            }
        if(questionNo == 3)
            {
                 waterFill.play();
               if(target.name =="50QC"){
                   if(countIncrement<=20){
                    count3++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                   }
                   else{
                        target.inputEnabled = false;
                   }
                }

                else{
                     if(countIncrement<12){
                   count2++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    b5.frame=countIncrement; 
                    counterText2.setText(count2);
                    }
                 else{
                      countIncrement--;
                        target.inputEnabled = false;
                    }
                }
            }
        if(questionNo == 4)
            {
                 waterFill.play();
                if(target.name =="200QC"){
                    if(countIncrement<=17){
                    count3++;
                     countIncrement++;
                     countIncrement++;
                     countIncrement++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                    else{
                         target.inputEnabled = false;
                    }
                }
                
                else{
                    if(countIncrement<=16){
                   count2++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    countIncrement++;
                    b5.frame=countIncrement; 
                    counterText2.setText(count2);
                        }
                 else{
                      countIncrement--;
                        target.inputEnabled = false;
                    }
                }
            }
            if(questionNo == 5)
            {
                 waterFill.play();
                if(target.name =="1000QC"){
                    if(countIncrement<=5){
                    count3++;
                     countIncrement++;
                     countIncrement++;
                     countIncrement++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                    else{
                         target.inputEnabled = false;
                    }
                }
            }
            if(questionNo == 6)
            {
                 waterFill.play();
                if(target.name =="250QC"){
                    if(countIncrement<=8){
                    count3++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                    else{
                         target.inputEnabled = false;
                    }
                }
            }
            if(questionNo == 7)
            {
                 waterFill.play();
                if(target.name =="500QC"){
                    if(countIncrement<=8){
                    count3++;
                        countIncrement++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                    else{
                         target.inputEnabled = false;
                    }
                }
            }
            if(questionNo == 8)
            {
                 waterFill.play();
                if(target.name =="250QC"){
                    if(countIncrement<=8){
                    count3++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                    else{
                         target.inputEnabled = false;
                    }
                }
            }
            if(questionNo == 9)
            {
                 waterFill.play();
                if(target.name =="1000QC"){
                    if(countIncrement<=8){
                    count3++;
                        countIncrement++;
                        countIncrement++;
                        countIncrement++;
                     b5.frame=countIncrement;
                    counterText.setText(count3);
                    }
                    else{
                         target.inputEnabled = false;
                    }
                }
            }
        }
        else{
            //b5.frame=countIncrement;
        }
    },
    
    somefunction:function(target)
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
			
        b1.inputEnabled = false;
        b2.inputEnabled = false;
        
      //console.log("WWWW"+countIncrement); 
        ClickSound.play();
      target.frame = 1;
        if(questionNo == 1){
            if(countIncrement==8)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 2){
            if(countIncrement==11)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 3){
            if(countIncrement==16)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 4){
            if(countIncrement==20)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 5){
            if(countIncrement==4)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 6){
            if(countIncrement==3)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 7){
            if(countIncrement==6)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        if(questionNo == 8){
            if(countIncrement==7)
                {

                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
                if(questionNo == 9){
            if(countIncrement==8 || countIncrement==9)
                {
 
                        this.rightFunction();

                }
             else
                    {
                       this.wrongFunction();

                    }
            }
        
    },
    
    rightFunction:function(target)
    {
        //console.log("correct11");
		timer.stop();
		timer = null;
						
        speaker.inputEnabled=false;
                celebr.play();
                var starAnim = starsGroup.getChildAt(count1);
                starAnim.smoothed = false;
                count1++;
                    var anim4 = starAnim.animations.add('star');
                    anim4.play();
                    
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
									
                    /*b5.loadTexture('glow', 0, false);
                    b5.anchor.setTo(0.5,0.95);
               
                    if(questionNo ==1){
                        b5.frame = 0;
                    }
                    if(questionNo ==2){
                        b5.frame = 3;
                    }
                    if(questionNo ==3){
                        b5.frame = 6;
                    }
                    if(questionNo ==4){
                        b5.frame = 9;
                    }*/
                  b3.frame =1
                  b4.frame =1
                   var tween1 = this.add.tween(b3.scale);
                    tween1.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                     var tween2 = this.add.tween(b4.scale);
                    tween2.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
        
        
                    tween2.onComplete.add(function(){
                       // equation.frame = eqnum;
            
                        var tween1 = this.add.tween(b3.scale);
                        tween1.to({ x:1 , y:1}, 300,'Linear', true, 0);
                        var tween2 = this.add.tween(b4.scale);
                        tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                        
                        
                        tween2.onComplete.add(function(){
                            var tween1 = this.add.tween(b3.scale);
                            tween1.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                             var tween2 = this.add.tween(b4.scale);
                            tween2.to({ x:1.05 , y:1.05}, 300,'Linear', true, 0);
                            
                            
                            tween2.onComplete.add(function(){
                                var tween1 = this.add.tween(b3.scale);
                                tween1.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                var tween2 = this.add.tween(b4.scale);
                                tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                                
                                
                         },this);   
                         },this);
                         },this);
        this.time.events.add(2000, function(){this.removeEverthing();},this);
    },
                                          
wrongFunction:function(){
                         //console.log("wrong");
                    shake.shake(10, shakeObjectGroup);
                    waudio.play(); 
                    //aiyoh.play(); 
                    this.time.events.add(1000, function(){this.backToOriginalPosition();},this);
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
       
         equation = this.add.sprite(638,335,'Level43A_equation');
         equation.anchor.setTo(0.5,1);
         equation.frame = eqnum;
         equation.name = "equation";
  
    },
    
    addNumberPad:function(){
        
        numGroup = this.add.group();
        objGroup = this.add.group();
        var x = 120;
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
        var txtbox = this.add.sprite(730,300,'Level43A_AnswerBox');
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
        
        
        var enterTxt = this.add.text(-2,1, selectedAns);
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
        
        
        wrongbtn.events.onInputDown.add(function(){console.log("fsdfdfdfdd");ClickSound.play();enterTxt.setText("");count =0;count2 = 0;count3 = 0;selectedAns="";counterText.setText("");counterText2.setText("");},this);
        
        rightbtn.events.onInputDown.add(function(target){
            
            ClickSound.play();
            //console.log(selectedAns);
            //console.log(rightAns);
            if(selectedAns==rightAns||selectedAns=="0"+rightAns||selectedAns=="00"+rightAns)  
                {
                    speaker.inputEnabled=false;
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    /*objGroup.getByName('tape15cm').frame = 1;
                    objGroup.getByName('tape15cm').frameName = rightAns;*/
                    //mainSprite.frame = 1;
                 
                    
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
                    var tween1 = this.add.tween(b5.scale);
                    tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
              
                    
                    tween1.onComplete.add(function(){
                      
                       // equation.frame = eqnum;
                        txtbox.frame = 0;
                  
                        /*var tween1 = this.add.tween(equation.scale);
                        tween1.to({ x:1 , y:1}, 300,'Linear', true, 0);*/
                        var tween2 = this.add.tween(b5.scale);
                        tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                    
                    },this);
                    //this.time.events.add(3000, function(){this.removeEverthing();},this);
                }
            else
                {
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
            
            var MaintweenDestroy1 = this.add.tween(objGroup);
            MaintweenDestroy1.to({ x: -1000}, 0,'Linear', true, 0);
            

            
            MaintweenDestroy.onComplete.add(function(){
             
               
                count =0;
                count2 = 0;
                count3 = 0;
                shakeObjectGroup.destroy();
                counterText.setText("");
                if(questionNo<5){
                counterText2.setText("");
                }
                countIncrement = 0;
                this.getQuestion();
            },this);
            
               
            tweenCount=0;
           // this.getQuestion(); 
 
               
        }
        else
        {
           // ////console.log("gameover");
            countIncrement = 0;
            count2 = 0;
            count3 = 0;
            this.stopVoice();
            this.state.start('grade4_3CScore');
        }
    },
    backToOriginalPosition:function(){
       
//        var MaintweenDestroy = this.add.tween(shakeObjectGroup);
//            MaintweenDestroy.to({ x: -100}, 0,'Linear', true, 0);
//        
//        var MaintweenDestroy1 = this.add.tween(b3);
//            MaintweenDestroy1.to({ x: 160}, 0,'Linear', true, 0);
             b5.frame=0;
                    counterText.setText("0");
                    if(questionNo<5){
                        counterText2.setText("0");
                        }
                    count2 = 0;
                    count3 = 0;
                    countIncrement = 0;
         tickMark.frame = 0;
         b1.inputEnabled = true;
         b2.inputEnabled = true;
        b1.input.useHandCursor = true;
        b2.input.useHandCursor = true;
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
       // ////console.log("here");
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
               // ////console.log(starAnim);
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
       // ////console.log(gameBoxGroup.children.length);
        
        
        for(var i=0;i<gameBoxGroup.children.length;i++)
        {
           // ////console.log("for");
           // ////console.log(gameBoxGroup.getChildAt(i).frameName,rightOrderArray[i]);
            if(gameBoxGroup.getChildAt(i).frameName == rightOrderArray[i])
            {
              // ////console.log("right");
               rightCount++;
                selectedFrameArray.push(gameBoxGroup.getChildAt(i).frameName);
            }
            else
            {
                //gameBoxGroup.getChildAt(i).frameName = rightOrderArray[i];
               // ////console.log(gameBoxGroup.getChildAt(i).frameName);
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
      //  ////console.log("Glow");
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
		//////console.log("correct");

        	
        anim =target.animations.add('flag1');
        anim.play();
		celebration = true;
		
     	cmusic = this.add.audio('celebr');
		cmusic.play();

        this.time.events.add(500, this.removeCelebration, this);


		//////console.log(target);
        //target.tint = 0xA9A9A9;
        
        var starAnim = starsGroup.getChildAt(count1);
		//////console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();        		
   		target.events.onInputDown.removeAll();
	},


    wrongAns:function(target)
	{
       // ////console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
       // ////console.log(target);
        //target.tint = 0xA9A9A9;
        
		shake.shake(10, target);
		wmusic = this.add.audio('waudio');
		wmusic.play();
        	//this.disableListeners();
        target.events.onInputDown.removeAll();
	},
    
    removeCelebration:function()
	{
		//////console.log("removeCeleb");
		celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		//////console.log("no"+no1);
		//this.input.enabled = true;
			
		     count1++;
		//if(rightCount<=0)
		//{		
          //  ////console.log("vamitha");
            
			if(no1<1)
			{
            //    ////console.log("addq");
                 this.addQuestion(count1);
			}
			else
			{
			//	////console.log("gameEnd");
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
			//////console.log("gameEnd");
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
            case 4:if(window.languageSelected=="English")
                        Eng_43C1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_43C1.play();
                    else
                        Kan_43C1.play();
                    break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:if(window.languageSelected=="English")
                        Eng_43C11.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_43C11.play();
                    else
                        Kan_43C11.play();
                    break;
        }
    },
    
    stopVoice:function(){
        //console.log("stopvoice");
        Eng_43C1.stop();
        Hin_43C1.stop();
        Kan_43C1.stop();
        Eng_43A1.stop();
        Hin_43B1.stop();
        Kan_43A1.stop();
        Eng_43C11.stop();
        Hin_43C11.stop();
        Kan_43C11.stop();
    }

    
};