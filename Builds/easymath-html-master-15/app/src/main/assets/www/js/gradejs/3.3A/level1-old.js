Game.grade3_3Alevel1=function(){};
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
var no1;
var count;
var count1;
var qArrays = [];
var graphics;
var numGroup;
var selectedAns = "";
var rightAns = "";
var mainSprite;
var scale1Empty = true;
var scale2Empty = true;
var weightScale1,weightScale2,weightScale3,weightScale4;
var obj1Group,obj2Group;
var tweenVal,angleval;
var tempName,tp;
var tempAngle = 0;
var tempweight1 = 0;
var tempweight2 = 0;
var speaker;
var oneKgAngle,oneKgWeight,twoKgAngle,twoKgWeight,fiveKgAngle,fiveKgWeight,tenKgAngle,tenKgWeight;

var noofAttempts;
var timer;
var AnsTimerCount;
var enterTxt;

Game.grade3_3Alevel1.prototype={
	create:function(game){

		noofAttempts=0;
		AnsTimerCount=0;
		
        no1=0;
       // qArrays = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
       // qArrays = this.shuffle(qArrays);
        count = 0;
        count1 = 0;
        objAdded = 0;
        tempAngle = 0;
        tempweight = 0;
        oneKgAngle=oneKgWeight=twoKgAngle=twoKgWeight=fiveKgAngle=fiveKgWeight=tenKgAngle=tenKgWeight=0;

        qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
        qArrays = this.shuffle(qArrays);
   
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();

        bg1 = this.add.tileSprite(0,0,this.world.width,this.world.height,'Level33A_bg1');
       
        var backbtn = this.add.button(5,1,'CommonBackBtn',function(){
			 this.stopAllVoice();
			 enterTxt.setText("");
                selectedAns="";
				var click = this.add.audio('ClickSound');
            click.play();
			this.state.start('grade3levelSelectionScreen');
		},this,1,0,2);

       speaker = this.add.button(908,1,'CommonSpeakerBtn',function(){
		   var click = this.add.audio('ClickSound');
            click.play();
			this.getVoice();
			speaker.inputEnabled = false;
			this.time.events.add(2000, function(){speaker.inputEnabled = true;}, this);
		},this,1,0,2);
        

        this.generateStarsForTheScene(6);
        
        //no1++;
        this.getQuestion();
        
        //this.gotoFirstQuestion();
        

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
		
    	//console.log("get"+no1);
        this.stopAllVoice();
        speaker.inputEnabled=true;
        speaker.input.useHandCursor = true;
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
            case 8: this.gotoEightQuestion();
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
          
    	}
        
    },
     
    
    stopAllVoice:function(){
        Eng_33A.stop();
        Hin_33A.stop();
        Kan_33A.stop();
 
    },
     
   
    removeEverthing:function() 
    {
        numGroup.destroy();
       /* objGroup.destroy();
        obj1Group.destroy();
        obj2Group.destroy();
        scale1Group.destroy();
        scale2Group.destroy();*/
        selectedAns="";
        if(no1<5)
        {
            count =0;
            no1++;
            
            var MaintweenDestroy = this.add.tween(objGroup);
            MaintweenDestroy.to({ x: -1000}, 0,'Linear', true, 0);
            MaintweenDestroy.onComplete.add(function(){
                objGroup.destroy();
            },this);
            var Maintween1Destroy = this.add.tween(scale1Group);
            Maintween1Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween1Destroy.onComplete.add(function(){
                scale1Group.destroy();
            },this);
            var Maintween2Destroy = this.add.tween(scale2Group);
            Maintween2Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween2Destroy.onComplete.add(function(){
                scale2Group.destroy();
            },this);
            var Maintween3Destroy = this.add.tween(obj1Group);
            Maintween3Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween3Destroy.onComplete.add(function(){
                obj1Group.destroy();
            },this);
            var Maintween4Destroy = this.add.tween(obj2Group);
            Maintween4Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween4Destroy.onComplete.add(function(){
                obj2Group.destroy();
                this.getQuestion();
            },this);
            
        
        }
        else
        {
           // console.log("gameover");
            objGroup.destroy();
            scale1Group.destroy();
            scale2Group.destroy();
            obj1Group.destroy();
            obj2Group.destroy();
            this.stopAllVoice();
            this.state.start('grade3_3AScore');
        }
    },
	
     telemetry:function(target){
		
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
            var numbg = numGroup.create(x,500,'Level33A_numbg');  
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

            numTxt.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=50;
        }
        var txtbox = this.add.sprite(x+45,500,'Level33A_txtbox');
        txtbox.anchor.setTo(0.5);
        txtbox.name = "txtbox";
         
             if(window.languageSelected=="English")
                        var gmTxt = this.add.text(x+110,500, "Gms");
                    else if(window.languageSelected=="Hindi")
                   var gmTxt = this.add.text(x+110,500, "ग्राम");
                    else
                        var gmTxt = this.add.text(x+110,500, "ಗ್ರಾಂ");
       
            //titletext.scale.setTo(1.5);
        gmTxt.anchor.setTo(0.5);
        gmTxt.align = 'center';

        gmTxt.font = 'Alte Haas Grotesk';
        gmTxt.fontSize = 24;
            //text.fontWeight = 'bold';
        gmTxt.fill = '#FFFFFF';

        gmTxt.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
        
        var wrongbtn = numGroup.create(x+180,500,'Level33A_wrongBtn');
        wrongbtn.anchor.setTo(0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+230,500,'Level33A_rightBtn');
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

        enterTxt.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        numGroup.add(txtbox);
         
        numGroup.add(gmTxt);
        
        wrongbtn.events.onInputDown.add(function(target){ this.telemetry(target);
            target.frame = 1; 
            ClickSound.play();
            
            this.time.events.add(500, function(){
                target.frame = 0;
                enterTxt.setText("");
                selectedAns="";
            
            },this);
        },this);
        
        rightbtn.events.onInputDown.add(function(target){ this.telemetry(target);
            ClickSound.play();
            target.frame = 1;
            if(selectedAns==rightAns||selectedAns=="0"+rightAns)  
                {
                    //console.log("correct");
                    speaker.inputEnabled=false;
                    target.events.onInputDown.removeAll();
                    
                    
                    scale2Group.getByName("50gAnim").frame = 1;
                    scale2Group.getByName("100gAnim").frame = 1;
                    scale2Group.getByName("200gAnim").frame = 1;
                    scale2Group.getByName("500gAnim").frame = 1;
                    
                  
                    
                    var tween = this.add.tween(scale2Group.getByName("50gAnim").scale);
                    tween.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    
                    var tween1 = this.add.tween(scale2Group.getByName("100gAnim").scale);
                    tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    
                    var tween2 = this.add.tween(scale2Group.getByName("200gAnim").scale);
                    tween2.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    
                    var tween3 = this.add.tween(scale2Group.getByName("500gAnim").scale);
                    tween3.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    
                    tween.onComplete.add(function(){
                            var tween4 = this.add.tween(scale2Group.getByName("50gAnim").scale);
                            tween4.to({ x:1 , y:1}, 300,'Linear', true, 0);
                    
                            var tween5 = this.add.tween(scale2Group.getByName("100gAnim").scale);
                            tween5.to({ x:1 , y:1}, 300,'Linear', true, 0);

                            var tween6 = this.add.tween(scale2Group.getByName("200gAnim").scale);
                            tween6.to({ x:1 , y:1}, 300,'Linear', true, 0);

                            var tween7 = this.add.tween(scale2Group.getByName("500gAnim").scale);
                            tween7.to({ x:1 , y:1}, 300,'Linear', true, 0);

                            tween4.onComplete.add(function(){

                                        var tween8 = this.add.tween(scale2Group.getByName("50gAnim").scale);
                                        tween8.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                        var tween9 = this.add.tween(scale2Group.getByName("100gAnim").scale);
                                        tween9.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                        var tween10 = this.add.tween(scale2Group.getByName("200gAnim").scale);
                                        tween10.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                        var tween11 = this.add.tween(scale2Group.getByName("500gAnim").scale);
                                        tween11.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                        tween8.onComplete.add(function(){

                                            var tween12 = this.add.tween(scale2Group.getByName("50gAnim").scale);
                                            tween12.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                            var tween13 = this.add.tween(scale2Group.getByName("100gAnim").scale);
                                            tween13.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                            var tween14 = this.add.tween(scale2Group.getByName("200gAnim").scale);
                                            tween14.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                            var tween15 = this.add.tween(scale2Group.getByName("500gAnim").scale);
                                            tween15.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                            tween15.onComplete.add(function(){

                                                    var tween16 = this.add.tween(scale2Group.getByName("50gAnim").scale);
                                                    tween16.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                    var tween17 = this.add.tween(scale2Group.getByName("100gAnim").scale);
                                                    tween17.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                    var tween18 = this.add.tween(scale2Group.getByName("200gAnim").scale);
                                                    tween18.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                    var tween19 = this.add.tween(scale2Group.getByName("500gAnim").scale);
                                                    tween19.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                    tween19.onComplete.add(function(){

                                                            var tween20 = this.add.tween(scale2Group.getByName("50gAnim").scale);
                                                            tween20.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                            var tween21 = this.add.tween(scale2Group.getByName("100gAnim").scale);
                                                            tween21.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                            var tween22 = this.add.tween(scale2Group.getByName("200gAnim").scale);
                                                            tween22.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                            var tween23 = this.add.tween(scale2Group.getByName("500gAnim").scale);
                                                            tween23.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                            tween23.onComplete.add(function(){


                                                                    this.removeEverthing();

                                                            },this);


                                                    },this);


                                            },this);


                                    },this);


                            },this);
                        
                        
                        
                    },this);
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
                    
                    
                     celebr.play();
                     var starAnim = starsGroup.getChildAt(count1);
                       // console.log(starAnim);
                        starAnim.smoothed = false;
                        var anim5 = starAnim.animations.add('star');
                        anim5.play();
                        //anim4.onComplete.add(function(){//this.removeEverthing();},this);
                        //this.time.events.add(3000, function(){this.removeEverthing();},this);
                    count1++;
                }
            else
                {
					noofAttempts++;
                    speaker.inputEnabled=true;
                    speaker.input.useHandCursor=true;
                    //console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    
                    var shakeGroup = this.add.group();
                    shakeGroup.x = scale2Group.x;
                    shakeGroup.y = scale2Group.y;
                    shakeGroup.add(scale2Group.getByName("50gAnim"));
                    shakeGroup.add(scale2Group.getByName("100gAnim"));
                    shakeGroup.add(scale2Group.getByName("200gAnim"));
                    shakeGroup.add(scale2Group.getByName("500gAnim"));
                    
                    shake.shake(10, shakeGroup);
                    
                    
                    waudio.play(); 
                   // aiyoh.play(); 
                    this.time.events.add(500, function()
                    {
                        //numGroup.destroy();
                        //objGroup.destroy();
                        //obj1Group.destroy();
                        //obj2Group.destroy();
                        //scale1Group.destroy();
                        
                        scale2Group.add(shakeGroup.getByName("50gAnim"));
                        scale2Group.add(shakeGroup.getByName("100gAnim"));
                        scale2Group.add(shakeGroup.getByName("200gAnim"));
                        scale2Group.add(shakeGroup.getByName("500gAnim"));
                        shakeGroup.destroy();
                        
                        scale2Group.getByName("50gAnim").visible = false;
                        scale2Group.getByName("100gAnim").visible = false;
                        scale2Group.getByName("200gAnim").visible = false;
                        scale2Group.getByName("500gAnim").visible = false;
                        
                        obj2Group.getByName("50g").frame = 0;
                        obj2Group.getByName("100g").frame = 0;
                        obj2Group.getByName("200g").frame = 0;
                        obj2Group.getByName("500g").frame = 0;
                        
                        
                        obj2Group.getByName('200g').inputEnabled = true;
                        obj2Group.getByName('200g').input.useHandCursor = true;
                        obj2Group.getByName('200g').events.onInputDown.add(function(target){ this.telemetry(target);
                                this.objectClicked(target,fiveKgWeight,fiveKgAngle);
                        },this);
                        
                        obj2Group.getByName('500g').inputEnabled = true;
                        obj2Group.getByName('500g').input.useHandCursor = true;
                        obj2Group.getByName('500g').events.onInputDown.add(function(target){ this.telemetry(target);
                                this.objectClicked(target,tenKgWeight,tenKgAngle);
                        },this);
                        
                        obj2Group.getByName('100g').inputEnabled = true;
                        obj2Group.getByName('100g').input.useHandCursor = true;
                        obj2Group.getByName('100g').events.onInputDown.add(function(target){ this.telemetry(target);
                                this.objectClicked(target,twoKgWeight,twoKgAngle);
                        },this);
                        
                        obj2Group.getByName('50g').inputEnabled = true;
                        obj2Group.getByName('50g').input.useHandCursor = true;
                        obj2Group.getByName('50g').events.onInputDown.add(function(target){ this.telemetry(target);
                                this.objectClicked(target,oneKgWeight,oneKgAngle);
                        },this);
                        
                        
                        
                        
                        
                        
                        weightScale2.angle=tempAngle;
                        scale1Group.y=tempweight1;
                        scale2Group.y=tempweight2;
                        
                        target.frame = 0;
                    },this);
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
        
        ClickSound.play();
        if(selectedAns.length<3)
        {
            selectedAns += target.name;
            numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
        
       // console.log(selectedAns);
        
    },
    
    gotoFirstQuestion:function(){
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_Pappaya');
        object1.name = "Pappaya";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
        
        if(no1==0)
        {
            this.getVoice();
            this.time.events.add(9000,function(){
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);
                   oneKgAngle=0.9;
                oneKgWeight=3;
                   // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,3,0.9);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target);
                    twoKgAngle=4;
                twoKgWeight=8;
                    this.objectClicked(target,8,4);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);
                    fiveKgAngle=4.5;
                fiveKgWeight=11;
                    this.objectClicked(target,11,4.5);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);
                    tenKgAngle=6;
                tenKgWeight=16;
                    this.objectClicked(target,16,6);
                },this);
            },this);
        }
        else
        {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);
                   oneKgAngle=0.9;
                oneKgWeight=3;
                   // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,3,0.9);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target);
                    twoKgAngle=4;
                twoKgWeight=8;
                    this.objectClicked(target,8,4);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);
                    fiveKgAngle=4.5;
                fiveKgWeight=11;
                    this.objectClicked(target,11,4.5);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);
                    tenKgAngle=6;
                tenKgWeight=16;
                    this.objectClicked(target,16,6);
                },this);
        }
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "600";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);

     },
    
    gotoSecondQuestion:function(){
      
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_pappaya1');
        object1.name = "pappaya1";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=5;
                        this.objectClicked(target,5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3;
                        fiveKgWeight=6.5;
                    this.objectClicked(target,6.5,3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=4;
                        tenKgWeight=10;
                    this.objectClicked(target,10,4);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=5;
                        this.objectClicked(target,5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3;
                        fiveKgWeight=6.5;
                    this.objectClicked(target,6.5,3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=4;
                        tenKgWeight=10;
                    this.objectClicked(target,10,4);
                    },this);
            }
            
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "850";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+90;
        
                

               
        
       
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
         tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);

     },
    
    gotoThirdQuestion:function(){
       
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_bottle32');
        object1.name = "bottle32";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
        if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
               // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3;
                        twoKgWeight=6.9;
                    this.objectClicked(target,6.9,3);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3;
                        fiveKgWeight=7.3;
                        this.objectClicked(target,7.3,3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=4;
                        tenKgWeight=10;
                        this.objectClicked(target,10,4);
                    },this);
                },this);
            }
        else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
               // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3;
                        twoKgWeight=6.9;
                    this.objectClicked(target,6.9,3);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3;
                        fiveKgWeight=7.3;
                        this.objectClicked(target,7.3,3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=4;
                        tenKgWeight=10;
                        this.objectClicked(target,10,4);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "800";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+90;
        
                

               
        
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
     },
    
    gotoFourthQuestion:function(){
       
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_muggg');
        object1.name = "muggg";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=1.9;
                        oneKgWeight=5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,5,1.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3;
                        twoKgWeight=6.5;
                        this.objectClicked(target,6.5,3);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.5;
                        fiveKgWeight=9.3;
                        this.objectClicked(target,9.3,3.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=4;
                        tenKgWeight=10;
                        this.objectClicked(target,10,4);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=1.9;
                        oneKgWeight=5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,5,1.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3;
                        twoKgWeight=6.5;
                        this.objectClicked(target,6.5,3);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.5;
                        fiveKgWeight=9.3;
                        this.objectClicked(target,9.3,3.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=4;
                        tenKgWeight=10;
                        this.objectClicked(target,10,4);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "750";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
      
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
          
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoFifthQuestion:function(){
       this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_Book');
        object1.name = "Book";
		//object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                        oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.5;
                        fiveKgWeight=9.3;
                        this.objectClicked(target,9.3,3.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=6;
                        tenKgWeight=15;
                        this.objectClicked(target,15,6);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                        oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.5;
                        fiveKgWeight=9.3;
                        this.objectClicked(target,9.3,3.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=6;
                        tenKgWeight=15;
                        this.objectClicked(target,15,6);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "700";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoSixthQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_tomato32');
        object1.name = "tomato32";
		//object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.8;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.8,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.4;
                        fiveKgWeight=9.4;
                        this.objectClicked(target,9.4,3.4);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5;
                        tenKgWeight=11;
                        this.objectClicked(target,11,5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.8;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.8,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.4;
                        fiveKgWeight=9.4;
                        this.objectClicked(target,9.4,3.4);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5;
                        tenKgWeight=11;
                        this.objectClicked(target,11,5);
                    },this);
            }
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "650";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
        
      
        
          weightScale2.angle-=8;
          scale1Group.y+=19;
          scale2Group.y-=19;
        
          tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoSeventhQuestion:function(){
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_carrot32');
        object1.name = "carrot32";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1;
                        twoKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=1;
                        fiveKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5.3;
                        tenKgWeight=13;
                        this.objectClicked(target,13,5.3);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1;
                        twoKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=1;
                        fiveKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5.3;
                        tenKgWeight=13;
                        this.objectClicked(target,13,5.3);
                    },this);
            }
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "550";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

 
        
          weightScale2.angle-=6;
          scale1Group.y+=16;
          scale2Group.y-=16;
        
                      
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoEightQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_banana32');
        object1.name = "banana32";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=0.9;
                        twoKgWeight=3;
                        this.objectClicked(target,3,0.9);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=1.5;
                        fiveKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5.3;
                        tenKgWeight=14;
                        this.objectClicked(target,14,5.3);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=0.9;
                        twoKgWeight=3;
                        this.objectClicked(target,3,0.9);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=1.5;
                        fiveKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5.3;
                        tenKgWeight=14;
                        this.objectClicked(target,14,5.3);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "500";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
       
        
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
        
         
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoNinthQuestion:function(){
       this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_bread');
        object1.name = "bread";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1;
                        twoKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=1;
                        fiveKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5.3;
                        tenKgWeight=13;
                        this.objectClicked(target,13,5.3);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1;
                        twoKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=1;
                        fiveKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5.3;
                        tenKgWeight=13;
                        this.objectClicked(target,13,5.3);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "550";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
        
  
        
          weightScale2.angle-=6;
          scale1Group.y+=16;
          scale2Group.y-=16;
        
              tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
     },
    
	 gotoTenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_bottle');
        object1.name = "bottle";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.3;
                        fiveKgWeight=6.5;
                        this.objectClicked(target,6.5,3.3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.3;
                        fiveKgWeight=6.5;
                        this.objectClicked(target,6.5,3.3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "350";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
        
     
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
         
            tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
	 
	 gotoEleventhQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_redbook');
        object1.name = "redbook";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                        object2.inputEnabled = true;
                        object2.input.useHandCursor = true;
                        object2.events.onInputDown.add(function(target){ this.telemetry(target);
                           oneKgAngle=0.9;
                            oneKgWeight=3.5;
                           // this.objectClicked(target,2,0.9);
                            this.objectClicked(target,3.5,0.9);
                        },this);
                        object3.inputEnabled = true;
                        object3.input.useHandCursor = true;
                        object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.3;
                        fiveKgWeight=6.5;
                        this.objectClicked(target,6.5,3.3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                        object2.inputEnabled = true;
                        object2.input.useHandCursor = true;
                        object2.events.onInputDown.add(function(target){ this.telemetry(target);
                           oneKgAngle=0.9;
                            oneKgWeight=3.5;
                           // this.objectClicked(target,2,0.9);
                            this.objectClicked(target,3.5,0.9);
                        },this);
                        object3.inputEnabled = true;
                        object3.input.useHandCursor = true;
                        object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.3;
                        fiveKgWeight=6.5;
                        this.objectClicked(target,6.5,3.3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "350";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
 
        
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
         
                
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
	 gotoTwevelvethQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_ball32');
        object1.name = "ball32";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.2;
                        twoKgWeight=6.9;
                        this.objectClicked(target,6.9,3.2);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.2;
                        fiveKgWeight=7.2;
                        this.objectClicked(target,7.2,3.2);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.2;
                        twoKgWeight=6.9;
                        this.objectClicked(target,6.9,3.2);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.2;
                        fiveKgWeight=7.2;
                        this.objectClicked(target,7.2,3.2);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "300";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

      
        
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
         
                  
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
	 
	 gotoThirteenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_banana322');
        object1.name = "banana322";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.2;
                        twoKgWeight=6.9;
                        this.objectClicked(target,6.9,3.2);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=4.5;
                        fiveKgWeight=11;
                        this.objectClicked(target,11,4.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.2;
                        twoKgWeight=6.9;
                        this.objectClicked(target,6.9,3.2);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=4.5;
                        fiveKgWeight=11;
                        this.objectClicked(target,11,4.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "250";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
  
        
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
         
               
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
	 
	 gotoFourteenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_bottle322');
        object1.name = "bottle322";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=2.5;
                        twoKgWeight=5.5;
                        this.objectClicked(target,5.5,2.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=4.9;
                        fiveKgWeight=12;
                        this.objectClicked(target,12,4.9);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=2.5;
                        twoKgWeight=5.5;
                        this.objectClicked(target,5.5,2.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=4.9;
                        fiveKgWeight=12;
                        this.objectClicked(target,12,4.9);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "200";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+90;
        
                

               
        

        
          weightScale2.angle-=5;
          scale1Group.y+=12;
          scale2Group.y-=12;
         
                 tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
	 
	  gotoFifteenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_Ball');
        object1.name = "Ball";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.5;
                        twoKgWeight=9;
                        this.objectClicked(target,9,3.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=6;
                        fiveKgWeight=16;
                        this.objectClicked(target,16,6);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.5;
                        twoKgWeight=9;
                        this.objectClicked(target,9,3.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=6;
                        fiveKgWeight=16;
                        this.objectClicked(target,16,6);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "150";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
        
     
        
          weightScale2.angle-=5;
          scale1Group.y+=12;
          scale2Group.y-=12;
          
             tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
	 
	 gotoSixteenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_bottle2');
        object1.name = "bottle2";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                    // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.5;
                        twoKgWeight=9;
                        this.objectClicked(target,9,3.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=6;
                        fiveKgWeight=16;
                        this.objectClicked(target,16,6);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                    // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.5;
                        twoKgWeight=9;
                        this.objectClicked(target,9,3.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=6;
                        fiveKgWeight=16;
                        this.objectClicked(target,16,6);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "100";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

 
        
          weightScale2.angle-=4;
          scale1Group.y+=9;
          scale2Group.y-=9;
         
                       
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
	 
	  gotoSeventeenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_block50');
        object1.name = "block50";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
          
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=2.6;
                        oneKgWeight=7;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,7,2.6);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=4.5;
                        twoKgWeight=11;
                        this.objectClicked(target,11,4.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=6;
                        fiveKgWeight=16;
                        this.objectClicked(target,16,6);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=2.6;
                        oneKgWeight=7;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,7,2.6);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=4.5;
                        twoKgWeight=11;
                        this.objectClicked(target,11,4.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=6;
                        fiveKgWeight=16;
                        this.objectClicked(target,16,6);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "50";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
        
    
        
          weightScale2.angle-=3;
          scale1Group.y+=7;
          scale2Group.y-=7;
          
              tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
       
     
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    objectClicked:function(target,tween1,tween2)
    {
            ClickSound.play();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            target.events.onDragStop.add(function(){
                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,weightScale4.getChildAt(0)))
                {
                     
                       var tempFrame = 0;
                       target.frame = 1;
                       target.x = tempX;
                       target.y = tempY;
                       
                        tempName = target.name+"Anim";
                        scale2Group.getByName(tempName).visible = true;
                        
                        scale2Group.getByName(tempName).inputEnabled = true;
                        scale2Group.getByName(tempName).input.useHandCursor = true;
                        tp = target.parent;
                        tweenVal = tween1;
                        angleVal = tween2;
                        scale2Group.getByName(tempName).events.onInputDown.add(function(target){ this.telemetry(target);
                           // console.log(target.name);
                            if(target.name == "50gAnim")
                                this.objectRemoved(target,oneKgWeight,oneKgAngle);
                            else if(target.name == "100gAnim")
                               this.objectRemoved(target,twoKgWeight,twoKgAngle);
                            else if(target.name == "200gAnim")
                                this.objectRemoved(target,fiveKgWeight,fiveKgAngle);
                            else if(target.name == "500gAnim")
                                this.objectRemoved(target,tenKgWeight,tenKgAngle);
                        },this);
                    
                    snapSound.play();
                    target.events.onInputDown.removeAll();
                    this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else
                {
                    target.x = tempX;
                    target.y = tempY;
                }
            },this);
   },
    
    objectRemoved:function(target,tween1,tween2)
    {
            ClickSound.play();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            target.events.onDragStop.add(function(){
                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,objGroup.getByName("graphics2")))
                {
                     
                       var tempFrame = 0;
                       target.visible = false
                       target.x = tempX;
                       target.y = tempY;
                       
                        tempName = target.name;
                        tempName = tempName.substring(0, tempName.length-4);
                    
                    
                        obj2Group.getByName(tempName).frame = 0;
                        
                        obj2Group.getByName(tempName).inputEnabled = true;
                        obj2Group.getByName(tempName).input.useHandCursor = true;
                        //tp = target.parent;
                        tweenVal = tween1;
                        angleVal = tween2;
                        obj2Group.getByName(tempName).events.onInputDown.add(function(target){ this.telemetry(target);
                            //console.log(tweenVal);
                            if(target.name == "50g")
                                this.objectClicked(target,oneKgWeight,oneKgAngle);
                            else if(target.name == "100g")
                                this.objectClicked(target,twoKgWeight,twoKgAngle);
                            else if(target.name == "200g")
                                this.objectClicked(target,fiveKgWeight,fiveKgAngle);
                            else if(target.name == "500g")
                                this.objectClicked(target,tenKgWeight,tenKgAngle);
                        },this);
                    
                    snapSound.play();
                    target.events.onInputDown.removeAll();
                    this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else
                {
                    target.x = tempX;
                    target.y = tempY;
                }
            },this);
   },
    
   
                                          
    tweenTheMachineLeft:function(w2,w3,w4,weight,angle)
    {
       this.input.enabled = false;
       var _this = this;
        
        var tween = this.add.tween(w2);
            tween.to({ angle: w2.angle+angle}, 0,'Linear', true, 0);
        var tween1 = this.add.tween(w3);
            tween1.to({ y: w3.y-weight}, 0,'Linear', true, 0);
        var tween2 = this.add.tween(w4);
            tween2.to({ y: w4.y+weight}, 0,'Linear', true, 0);
            tween2.onComplete.add(function(){
                _this.input.enabled = true;
            });
        objAdded++;
        if(objAdded>=2)
        {
             //object1.events.onInputDown.add(this.checkCorrectAns,this);   
             //object2.events.onInputDown.add(this.checkCorrectAns,this);
          /*  for(var k=0;k<numGroup.length;k++)
            {
                numGroup.getChildAt(k).inputEnabled = true;  
            }*/
        }
    },
    
    tweenTheMachineRight:function(w2,w3,w4,weight,angle)
    {
       this.input.enabled = false;
       var _this = this; 
        var tween = this.add.tween(w2);
            tween.to({ angle: w2.angle-angle}, 0,'Linear', true, 0);
        var tween1 = this.add.tween(w3);
            tween1.to({ y: w3.y+weight}, 0,'Linear', true, 0);
        var tween2 = this.add.tween(w4);
            tween2.to({ y: w4.y-weight}, 0,'Linear', true, 0);
        
        tween2.onComplete.add(function(){
                _this.input.enabled = true;
            });
        objAdded++;
        if(objAdded>=2)
        {
            // object1.events.onInputDown.add(this.checkCorrectAns,this);   
            // object2.events.onInputDown.add(this.checkCorrectAns,this);  
           /* for(var k=0;k<numGroup.length;k++)
            {
                numGroup.getChildAt(k).inputEnabled = true;  
            }*/
        }
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
    
 
    update:function(){

    },
    
    getVoice:function(){
        this.stopAllVoice();
        switch(qArrays[no1])
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
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:if(window.languageSelected=="English")
                        Eng_33A.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_33A.play();
                    else
                        Kan_33A.play();
                    break;
        }
    }

    
};