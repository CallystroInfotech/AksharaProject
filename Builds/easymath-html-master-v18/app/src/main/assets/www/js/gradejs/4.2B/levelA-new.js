Game.grade4_2Blevel1=function(){};
var bgA;
var starsGroup;
var cloud;
var no1;
var mainFlag;
var opt1,opt2,opt3;
var no2;
var count1;
var count;
var qArrays;
var flagmain11Anim;
var animlev1;
var a1;
var waterFilling;
var opt1,opt2,opt3;
var cloud2,cloud3,cloud4,cloud5,cloud6,cloud7,cloud8;
var optionsgrp;
var wronggraphics1,wronggraphics2,wronggraphics3;
var wrngGraphicgrp;
var boxb1,boxb2,boxb3;
var counterText=0;
var counterText1;
var counterText2;
var maingroup;
var darkbg1;
var darkbg2;
var value1=7;
var value2=11;
var value3=13;
var i,j,k;
var speaker;
var w1,w2;
var AnimOpt1,AnimOpt2,AnimOpt3;
var tick;
var noofAttempts;
var timer;
var AnsTimerCount;
var wronggraphics1,wronggraphics2,wronggraphics3;

var gameid;

Game.grade4_2Blevel1.prototype={

     init:function(game)
    {
        _this = this;
        
        _this.gameid = "4.2B";
        
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
        noofAttempts=0;
        AnsTimerCount=0;
         _this.sceneCount=0;
        //baudio.play(); 
		//baudio.loopFull(0.6);
        qArrays = new Array();
        qArrays = [1,2,3,4,5,6,7,8];
        qArrays = this.shuffle(qArrays);
        no1=0;
        no2=0;
        count1=0;
        count=0;
       // counterText=0;
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

        background = this.add.tileSprite(0,0,this.world.width,this.world.height,'Level42A_bgA');
        //background.scale.setTo(1.05,1.06);
		
		/*var backbtn = this.add.button(5,1,'Level42A_CommonBackBtn',function(){
		this.stopAllVoice();
		this.state.start('grade4levelSelectionScreen');
		},this,1,0,2);

       speaker = this.add.button(908,1,'Level42A_CommonSpeakerBtn',function(){
			this.getVoice(no1);
		},this,1,0,2);*/
		
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
            _this.state.start('grade4levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           
           _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
           
            _this.getVoice(no1);
            
        },_this);
        
         this.generateStarsForTheScene(6)
       waterFillingSound =_this.add.audio('waterFill');
        watersplash =_this.add.audio('watersplash');
        ClickSound = _this.add.audio('ClickSound');

                //no1++;
				this.getQuestion();

   
    
    },
    addQuestion:function(no2)
    {

           //console.log("here");
           this.time.events.add(2000, function(){
  
           //     var tween = this.add.tween(flagGroup1);
           //tween.to({ x: -1000 }, 0,'Linear', true, 0);
               
                var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: -1000 }, 0,'Linear', true, 0);
        tween1.to({ x: -1000 }, 0,'Linear', true, 0);
         tween2.to({ x: -1000 }, 0,'Linear', true, 0);
          tween3.to({ x: -1000 }, 0,'Linear', true, 0);
               
               
           tween.onComplete.add(this.changeQuestion, this);


               
               
               
            }, this);
            


    },
    
    /*speakeron:function(){
        this.stopAllVoice();
        switch(qArrays[no1-1])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:if(window.languageSelected=="English")
                        Eng_42B1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_42B1.play();
                    else
                        Kan_42B1.play();
                    break;
            
        }
    },
    
    stopAllVoice:function(){
        Eng_42B1.stop();
        Hin_42B1.stop();
        Kan_42B1.stop();
        
    },*/
    
     gotoFirstQuestion:function(){

    	no1++;
         i=1;
         j=1;
         k=1;
         
        var sh1=this.add.sprite(155,397,'Level42A_shadow7');
         sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.8,1.3);
          
           var sh2=this.add.sprite(410,387,'Level42A_shadow8');
         sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(1.1,1.3);
         
          var sh3=this.add.sprite(665,380,'Level42A_shadow9');
         sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(0.6,0.9);
         
         boxb1=this.add.sprite(155,420,'Level42A_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42A_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42A_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
         
          opt1=this.add.sprite(165,440,'Level42A_tank2','<Group>_449 copy instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(1,0.9);
         opt1.name = "tank2";
         opt1.value = 13;
         
         

        opt2=this.add.sprite(425,425,'Level42A_drum2','<Group>_450 copy instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,0.8);
         opt2.name = "drum2";
        opt2.value = 11;

        opt3=this.add.sprite(670,405,'Level42A_pot2','<Group>_90 copy instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.8,0.8);
         opt3.name = "pot2";
         opt3.value = 7;
         
         //animlev1 =opt3.animations.add('flag1',["anim1","anim2","anim3","anim4"]);
        //animlev1.play(10,true);

         
         wronggraphics1 = this.add.graphics(this.world.centerX+220, this.world.centerY+20);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 90);
        wronggraphics1.lineTo(130, 90);
        wronggraphics1.lineTo(130, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
       wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX+30, this.world.centerY+30);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 130);
        wronggraphics2.lineTo(130, 130);
        wronggraphics2.lineTo(130, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
       wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = false;
       // wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-210, this.world.centerY+10);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 170);
        wronggraphics3.lineTo(170, 170);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
      wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = false;
       // wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(790,70,'Level42A_mainbox');
         mainbox.name = "mainbox";
         //mainbox.scale.setTo(0.6,0.6);
         
         a1=this.add.sprite(795,95,'Level42A_a11','<Group>_373 instance 10000');
         if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(13000,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         
         a1.name="a1";
         
         //a1.events.onInputDown.add(this.mains, this);
         this.mains();
         a1.frame=0;
         
         tick=this.add.sprite(815,270,'Level42A_tick','Symbol 16 instance 10000');
         //tick.anchor.setTo(0.5,1);
         //tick.scale.setTo(0.8,0.8);
         tick.name = "tick";
         tick.inputEnabled = false;
         //tick.input.useHandCursor = true;
       
         
         
         darkbg1=this.add.sprite(0,49,'Level42A_darkbg2');
         darkbg1.scale.setTo(0.9,0.74);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,49,'Level42A_darkbg2');
         darkbg2.scale.setTo(0.8,0.74);
         darkbg2.visible=true;
     
         var box=this.add.sprite(110,455,'Level42A_box');
         var box1=this.add.sprite(380,455,'Level42A_box');
         var box2=this.add.sprite(630,455,'Level42A_box');
         
        counterText = this.add.text(35,35,0);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';
        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 30;
        counterText.fill = '#65B4C3';
        counterText.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box.addChild(counterText);
         
        counterText1 = this.add.text(35,35,'0');
        counterText1.anchor.setTo(0.5);
        counterText1.align = 'center';
        counterText1.font = 'Alte Haas Grotesk';
        counterText1.fontSize = 30;
        counterText1.fill = '#65B4C3';
        counterText1.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box1.addChild(counterText1);
         
        counterText2 = this.add.text(35,35,'0');
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';
        counterText2.font = 'Alte Haas Grotesk';
        counterText2.fontSize = 30;
        counterText2.fill = '#65B4C3';
        counterText2.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box2.addChild(counterText2);
         
            shadowgroup=this.add.group();
          optionsgrp = this.add.group();
        wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
         maingroup.add(tick);
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
         maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
         maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0,'Linear', true, 0);
        tween1.to({ x: 0 }, 0,'Linear', true, 0);
         tween2.to({ x: 0 }, 0,'Linear', true, 0);
          tween3.to({ x: 0 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){
  }, this);  
    },
   
    gotoSecondQuestion:function(){

    	no1++;
       i=1;
         j=1;
         k=1;
         
          var sh1=this.add.sprite(150,380,'Level42A_shadow7');
         sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.75,1.3);
          
           var sh2=this.add.sprite(409,375,'Level42A_shadow8');
         sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(0.7,1);
         
          var sh3=this.add.sprite(665,370,'Level42A_shadow9');
         sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(0.6,0.9);
         
         boxb1=this.add.sprite(155,420,'Level42A_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42A_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42A_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
         
          opt1=this.add.sprite(178,460,'Level42A_cookerB','<Group>_73 copy instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(0.8,0.9);
         opt1.name = "cookerB";
         opt1.value = 11;

        opt2=this.add.sprite(435,460,'Level42A_bottleB','<Group>_74 copy instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "bottleB";
        opt2.value = 5;

        opt3=this.add.sprite(690,415,'Level42A_jugB','<Group>_57 copy instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.8,0.9);
         opt3.name = "jugB";
         opt3.value = 7;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+210, this.world.centerY+30);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 140);
        wronggraphics1.lineTo(90, 140);
        wronggraphics1.lineTo(90, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
      wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX+5, this.world.centerY+36);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 140);
        wronggraphics2.lineTo(90, 140);
        wronggraphics2.lineTo(90, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
       wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+17);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 130);
        wronggraphics3.lineTo(170, 130);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
       wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(790,70,'Level42A_mainbox');
         mainbox.name = "mainbox";
         
         a1=this.add.sprite(795,95,'Level42A_a11','<Group>_373 instance 10000');
        if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(13000,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         a1.name="a1";
        this.mains();
         a1.frame=1;
        //console.log("come here");
        
         
            tick=this.add.sprite(815,270,'Level42A_tick','Symbol 16 instance 10000');
         //tick.anchor.setTo(0.5,1);
         //tick.scale.setTo(0.8,0.8);
         tick.name = "tick";
         tick.inputEnabled = false;
         //tick.input.useHandCursor = true;
     
    
         
         
         darkbg1=this.add.sprite(0,49,'Level42A_darkbg2');
         darkbg1.scale.setTo(0.9,0.74);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,49,'Level42A_darkbg2');
         darkbg2.scale.setTo(0.8,0.74);
         darkbg2.visible=true;
     
         var box=this.add.sprite(110,455,'Level42A_box');
         var box1=this.add.sprite(375,455,'Level42A_box');
         var box2=this.add.sprite(640,455,'Level42A_box');
         
        counterText = this.add.text(35,35,0);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';
        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 30;
        counterText.fill = '#65B4C3';
        counterText.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box.addChild(counterText);
         
        counterText1 = this.add.text(35,35,'0');
        counterText1.anchor.setTo(0.5);
        counterText1.align = 'center';
        counterText1.font = 'Alte Haas Grotesk';
        counterText1.fontSize = 30;
        counterText1.fill = '#65B4C3';
        counterText1.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box1.addChild(counterText1);
         
        counterText2 = this.add.text(35,35,'0');
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';
        counterText2.font = 'Alte Haas Grotesk';
        counterText2.fontSize = 30;
        counterText2.fill = '#65B4C3';
        counterText2.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box2.addChild(counterText2);
         
          shadowgroup=this.add.group();
          optionsgrp = this.add.group();
        wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
         maingroup.add(tick);
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
         maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
        maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0,'Linear', true, 0);
        tween1.to({ x: 0 }, 0,'Linear', true, 0);
         tween2.to({ x: 0 }, 0,'Linear', true, 0);
          tween3.to({ x: 0 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){
  }, this);  
    },
    
      gotoThirdQuestion:function(){

    	no1++;
            i=1;
         j=1;
         k=1;
         
          var sh1=this.add.sprite(140,380,'Level42A_shadow7');
         sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.7,1.3);
          
        var sh2=this.add.sprite(410,375,'Level42A_shadow8');
         sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(0.5,1);
         
          var sh3=this.add.sprite(670,375,'Level42A_shadow9');
         sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(1.1,1);
          
         boxb1=this.add.sprite(155,420,'Level42A_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42A_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42A_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
         
          opt1=this.add.sprite(180,445,'Level42A_mugB','<Group>_453 copy instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(0.8,0.8);
         opt1.name = "mugB";
         opt1.value = 16;

        opt2=this.add.sprite(430,420,'Level42A_orangebottleB','<Group>_452 copy 3 instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "orangebottleB";
        opt2.value = 6;

        opt3=this.add.sprite(690,450,'Level42A_canB','<Group>_51 copy instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.8,0.9);
         opt3.name = "canB";
         opt3.value = 16;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+210, this.world.centerY+40);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 170);
        wronggraphics1.lineTo(90, 170);
        wronggraphics1.lineTo(90, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
      wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX-10, this.world.centerY+40);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 170);
        wronggraphics2.lineTo(90, 170);
        wronggraphics2.lineTo(90, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
       wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+40);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 170);
        wronggraphics3.lineTo(170, 170);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
       wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(787,70,'Level42A_mainbox');
         mainbox.name = "mainbox";
         
         a1=this.add.sprite(790,95,'Level42A_a11','<Group>_373 instance 10000');
          if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(13000,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         a1.name="a1";
          this.mains();
        a1.frame=2;
          
         
           tick=this.add.sprite(810,270,'Level42A_tick','Symbol 16 instance 10000');
         //tick.anchor.setTo(0.5,1);
         //tick.scale.setTo(0.8,0.8);
         tick.name = "tick";
         tick.inputEnabled = false;
         //tick.input.useHandCursor = true;
         
       
    
         
         
         darkbg1=this.add.sprite(0,49,'Level42A_darkbg2');
         darkbg1.scale.setTo(0.9,0.74);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,49,'Level42A_darkbg2');
         darkbg2.scale.setTo(0.8,0.74);
         darkbg2.visible=true;
     
         var box=this.add.sprite(115,455,'Level42A_box');
         var box1=this.add.sprite(380,455,'Level42A_box');
         var box2=this.add.sprite(630,455,'Level42A_box');
         
        counterText = this.add.text(35,35,0);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';
        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 30;
        counterText.fill = '#65B4C3';
        counterText.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box.addChild(counterText);
         
        counterText1 = this.add.text(35,35,'0');
        counterText1.anchor.setTo(0.5);
        counterText1.align = 'center';
        counterText1.font = 'Alte Haas Grotesk';
        counterText1.fontSize = 30;
        counterText1.fill = '#65B4C3';
        counterText1.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box1.addChild(counterText1);
         
        counterText2 = this.add.text(35,35,'0');
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';
        counterText2.font = 'Alte Haas Grotesk';
        counterText2.fontSize = 30;
        counterText2.fill = '#65B4C3';
        counterText2.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box2.addChild(counterText2);
         
          shadowgroup=this.add.group();
          optionsgrp = this.add.group();
        wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
         maingroup.add(tick);
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
         maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
          maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0,'Linear', true, 0);
        tween1.to({ x: 0 }, 0,'Linear', true, 0);
         tween2.to({ x: 0 }, 0,'Linear', true, 0);
          tween3.to({ x: 0 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){
  }, this);  
    },
    
       gotoFourthQuestion:function(){

    	no1++;
             i=1;
         j=1;
         k=1;
         
          var sh1=this.add.sprite(150,380,'Level42A_shadow7');
         sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.35,1);
          
           var sh2=this.add.sprite(415,380,'Level42A_shadow8');
         sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(0.7,1);
         
          var sh3=this.add.sprite(670,370,'Level42A_shadow9');
         sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(0.55,0.95);
           
          boxb1=this.add.sprite(155,420,'Level42A_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42A_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42A_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
         
          opt1=this.add.sprite(170,433,'Level42A_orangebottleB','<Group>_452 copy 3 instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(1.05,1.1);
         opt1.name = "orangebottleB";
         opt1.value = 5;

        opt2=this.add.sprite(430,430,'Level42A_greenbot22','<Group>_413 copy instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "orangebottleB";
        opt2.value = 6;

        opt3=this.add.sprite(690,455,'Level42A_bottle22','<Group>_74 copy 6 instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.9,1);
         opt3.name = "bottle22";
         opt3.value = 3;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+210, this.world.centerY+40);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 170);
        wronggraphics1.lineTo(90, 170);
        wronggraphics1.lineTo(90, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
       wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX-20, this.world.centerY+40);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 170);
        wronggraphics2.lineTo(90, 170);
        wronggraphics2.lineTo(90, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
       wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+40);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 170);
        wronggraphics3.lineTo(170, 170);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
       wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(790,73,'Level42A_mainbox');
         mainbox.name = "mainbox";
         
          a1=this.add.sprite(795,95,'Level42A_a11','<Group>_373 instance 10000');
           if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(13000,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         a1.name="a1";
         //a1.events.onInputDown.add(this.mains, this);
         this.mains();
         a1.frame=3;
         
       tick=this.add.sprite(815,270,'Level42A_tick','Symbol 16 instance 10000');
         //tick.anchor.setTo(0.5,1);
         //tick.scale.setTo(0.8,0.8);
         tick.name = "tick";
         tick.inputEnabled = false;
         //tick.input.useHandCursor = true;
         
         
         darkbg1=this.add.sprite(0,49,'Level42A_darkbg2');
         darkbg1.scale.setTo(0.9,0.74);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,49,'Level42A_darkbg2');
         darkbg2.scale.setTo(0.8,0.74);
         darkbg2.visible=true;
     
         var box=this.add.sprite(120,455,'Level42A_box');
         var box1=this.add.sprite(380,455,'Level42A_box');
         var box2=this.add.sprite(630,455,'Level42A_box');
         
        counterText = this.add.text(35,35,0);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';
        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 30;
        counterText.fill = '#65B4C3';
        counterText.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box.addChild(counterText);
         
        counterText1 = this.add.text(35,35,'0');
        counterText1.anchor.setTo(0.5);
        counterText1.align = 'center';
        counterText1.font = 'Alte Haas Grotesk';
        counterText1.fontSize = 30;
        counterText1.fill = '#65B4C3';
        counterText1.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box1.addChild(counterText1);
         
        counterText2 = this.add.text(35,35,'0');
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';
        counterText2.font = 'Alte Haas Grotesk';
        counterText2.fontSize = 30;
        counterText2.fill = '#65B4C3';
        counterText2.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box2.addChild(counterText2);
         
          shadowgroup=this.add.group();
          optionsgrp = this.add.group();
          wrngGraphicgrp = this.add.group();
          maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
         maingroup.add(tick);
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
         maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
         maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0,'Linear', true, 0);
        tween1.to({ x: 0 }, 0,'Linear', true, 0);
         tween2.to({ x: 0 }, 0,'Linear', true, 0);
          tween3.to({ x: 0 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){
  }, this);  
    },
    
     gotoFifthQuestion:function(){

    	no1++;
           i=1;
         j=1;
         k=1;
         
          var sh1=this.add.sprite(150,360,'Level42A_shadow7');
         sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.35,1);
          
           var sh2=this.add.sprite(410,360,'Level42A_shadow8');
         sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(1.2,1);
         
            var sh3=this.add.sprite(665,345,'Level42A_shadow9');
         sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(0.5,0.7);
         
           boxb1=this.add.sprite(155,420,'Level42A_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42A_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42A_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
         
          opt1=this.add.sprite(170,415,'Level42A_pinkglass','<Group>_454 copy instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(1,1);
         opt1.name = "pinkglass";
         opt1.value = 16;

        opt2=this.add.sprite(440,470,'Level42A_greencup','<Group>_455 copy instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "greencup";
        opt2.value = 21;

        opt3=this.add.sprite(670,360,'Level42A_smallbottle','Symbol 19 copy instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.9,1);
         opt3.name = "smallbottle";
         opt3.value = 9;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+210, this.world.centerY+90);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 170);
        wronggraphics1.lineTo(90, 170);
        wronggraphics1.lineTo(90, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
       wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX+5, this.world.centerY+96);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 170);
        wronggraphics2.lineTo(90, 170);
        wronggraphics2.lineTo(90, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
       wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+95);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 170);
        wronggraphics3.lineTo(170, 170);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
  wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(790,70,'Level42A_mainbox');
         mainbox.name = "mainbox";
         
         a1=this.add.sprite(795,95,'Level42A_a11','<Group>_373 instance 10000');
         if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(13000,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         a1.name="a1";
        // a1.events.onInputDown.add(this.addListeners, this);
         this.mains();
         a1.frame=4;
         
    tick=this.add.sprite(815,270,'Level42A_tick','Symbol 16 instance 10000');
         //tick.anchor.setTo(0.5,1);
         //tick.scale.setTo(0.8,0.8);
         tick.name = "tick";
         tick.inputEnabled = false;
         //tick.input.useHandCursor = true;
    
         
         
         darkbg1=this.add.sprite(0,49,'Level42A_darkbg2');
         darkbg1.scale.setTo(0.9,0.74);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,49,'Level42A_darkbg2');
         darkbg2.scale.setTo(0.8,0.74);
         darkbg2.visible=true;
     
         var box=this.add.sprite(120,455,'Level42A_box');
         var box1=this.add.sprite(380,455,'Level42A_box');
         var box2=this.add.sprite(630,455,'Level42A_box');
         
        counterText = this.add.text(35,35,0);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';
        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 30;
        counterText.fill = '#65B4C3';
        counterText.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box.addChild(counterText);
         
        counterText1 = this.add.text(35,35,'0');
        counterText1.anchor.setTo(0.5);
        counterText1.align = 'center';
        counterText1.font = 'Alte Haas Grotesk';
        counterText1.fontSize = 30;
        counterText1.fill = '#65B4C3';
        counterText1.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box1.addChild(counterText1);
         
        counterText2 = this.add.text(35,35,'0');
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';
        counterText2.font = 'Alte Haas Grotesk';
        counterText2.fontSize = 30;
        counterText2.fill = '#65B4C3';
        counterText2.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box2.addChild(counterText2);
         
          shadowgroup=this.add.group();
          optionsgrp = this.add.group();
        wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
         maingroup.add(tick);
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
         maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
         maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0,'Linear', true, 0);
        tween1.to({ x: 0 }, 0,'Linear', true, 0);
         tween2.to({ x: 0 }, 0,'Linear', true, 0);
          tween3.to({ x: 0 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){
  }, this);  
    },
    
    gotoSixthQuestion:function(){

    	no1++;
          i=1;
         j=1;
         k=1;
         
          var sh1=this.add.sprite(150,380,'Level42A_shadow7');
         sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.35,1);
          
           var sh2=this.add.sprite(420,385,'Level42A_shadow8');
         sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(1,1);
         
            var sh3=this.add.sprite(665,374,'Level42A_shadow9');
         sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(0.7,0.7);
        
         boxb1=this.add.sprite(155,420,'Level42A_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42A_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42A_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
         
          opt1=this.add.sprite(163,405,'Level42A_pot2','<Group>_90 copy instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(1,1);
         opt1.name = "greenpot";
         opt1.value = 4;

        opt2=this.add.sprite(433,430,'Level42A_drum2','<Group>_450 copy instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "drum222";
        opt2.value = 7;

        opt3=this.add.sprite(683,460,'Level42A_bucket33','<Group>_15 copy instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.9,1);
         opt3.name = "bucket33";
         opt3.value = 3;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+190, this.world.centerY+40);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 170);
        wronggraphics1.lineTo(90, 170);
        wronggraphics1.lineTo(90, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
       wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX-20, this.world.centerY+40);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 170);
        wronggraphics2.lineTo(120, 170);
        wronggraphics2.lineTo(120, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
       wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+40);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 170);
        wronggraphics3.lineTo(170, 170);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
      wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(783,70,'Level42A_mainbox');
         mainbox.name = "mainbox";
         
         a1=this.add.sprite(790,95,'Level42A_a11','<Group>_373 instance 10000');
        if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(13000,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         a1.name="a1";
         //a1.events.onInputDown.add(this.addListeners, this);
        
        this.mains();
        a1.frame=5;
         
         tick=this.add.sprite(810,270,'Level42A_tick','Symbol 16 instance 10000');
         //tick.anchor.setTo(0.5,1);
         //tick.scale.setTo(0.8,0.8);
         tick.name = "tick";
         tick.inputEnabled = false;
         //tick.input.useHandCursor = true;
    
         
         
         darkbg1=this.add.sprite(0,49,'Level42A_darkbg2');
         darkbg1.scale.setTo(0.9,0.74);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,49,'Level42A_darkbg2');
         darkbg2.scale.setTo(0.8,0.74);
         darkbg2.visible=true;
     
         var box=this.add.sprite(110,455,'Level42A_box');
         var box1=this.add.sprite(380,455,'Level42A_box');
         var box2=this.add.sprite(625,455,'Level42A_box');
         
        counterText = this.add.text(35,35,0);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';
        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 30;
        counterText.fill = '#65B4C3';
        counterText.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box.addChild(counterText);
         
        counterText1 = this.add.text(35,35,'0');
        counterText1.anchor.setTo(0.5);
        counterText1.align = 'center';
        counterText1.font = 'Alte Haas Grotesk';
        counterText1.fontSize = 30;
        counterText1.fill = '#65B4C3';
        counterText1.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box1.addChild(counterText1);
         
        counterText2 = this.add.text(35,35,'0');
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';
        counterText2.font = 'Alte Haas Grotesk';
        counterText2.fontSize = 30;
        counterText2.fill = '#65B4C3';
        counterText2.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box2.addChild(counterText2);
         
          shadowgroup=this.add.group();
          optionsgrp = this.add.group();
        wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
         maingroup.add(tick);
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
         maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
        maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0,'Linear', true, 0);
        tween1.to({ x: 0 }, 0,'Linear', true, 0);
         tween2.to({ x: 0 }, 0,'Linear', true, 0);
          tween3.to({ x: 0 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){
  }, this);  
    },
     gotoSeventhQuestion:function(){

    	no1++;
           i=1;
         j=1;
         k=1;
         
          var sh1=this.add.sprite(147,375,'Level42A_shadow7');
         sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.35,1);
          
           var sh2=this.add.sprite(425,375,'Level42A_shadow8');
         sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(1.2,1);
         
            var sh3=this.add.sprite(659,368,'Level42A_shadow9');
         sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(0.5,0.7);
         
         boxb1=this.add.sprite(155,420,'Level42A_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42A_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42A_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
         
          opt1=this.add.sprite(175,460,'Level42A_bottle44','<Group>_74 copy 7 instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(1,1);
         opt1.name = "bottle44";
         opt1.value = 4;

         opt2=this.add.sprite(430,425,'Level42A_redmug','<Group>_458 copy instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "redmug";
        opt2.value = 6;

        opt3=this.add.sprite(676,425,'Level42A_glass44','<Group>_454 copy 4 instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.9,1);
         opt3.name = "glass44";
         opt3.value = 3;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+190, this.world.centerY+40);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 170);
        wronggraphics1.lineTo(90, 170);
        wronggraphics1.lineTo(90, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
       wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX-20, this.world.centerY+40);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 170);
        wronggraphics2.lineTo(120, 170);
        wronggraphics2.lineTo(120, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
     wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+40);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 170);
        wronggraphics3.lineTo(170, 170);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
      wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(795,65,'Level42A_mainbox');
         mainbox.name = "mainbox";
         
         a1=this.add.sprite(800,95,'Level42A_a11','<Group>_373 instance 10000');
         if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(13000,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         a1.name="a1";
         //a1.events.onInputDown.add(this.addListeners, this);
         this.mains();
         a1.frame=6;
         
    tick=this.add.sprite(820,270,'Level42A_tick','Symbol 16 instance 10000');
         //tick.anchor.setTo(0.5,1);
         //tick.scale.setTo(0.8,0.8);
         tick.name = "tick";
         tick.inputEnabled = false;
         //tick.input.useHandCursor = true;
    
         
         
         darkbg1=this.add.sprite(0,49,'Level42A_darkbg2');
         darkbg1.scale.setTo(0.9,0.74);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,49,'Level42A_darkbg2');
         darkbg2.scale.setTo(0.8,0.74);
         darkbg2.visible=true;
     
         var box=this.add.sprite(110,455,'Level42A_box');
         var box1=this.add.sprite(370,455,'Level42A_box');
         var box2=this.add.sprite(620,455,'Level42A_box');
         
        counterText = this.add.text(35,35,0);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';
        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 30;
        counterText.fill = '#65B4C3';
        counterText.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box.addChild(counterText);
         
        counterText1 = this.add.text(35,35,'0');
        counterText1.anchor.setTo(0.5);
        counterText1.align = 'center';
        counterText1.font = 'Alte Haas Grotesk';
        counterText1.fontSize = 30;
        counterText1.fill = '#65B4C3';
        counterText1.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box1.addChild(counterText1);
         
        counterText2 = this.add.text(35,35,'0');
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';
        counterText2.font = 'Alte Haas Grotesk';
        counterText2.fontSize = 30;
        counterText2.fill = '#65B4C3';
        counterText2.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box2.addChild(counterText2);
         
          shadowgroup=this.add.group();
          optionsgrp = this.add.group();
        wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
         maingroup.add(tick);
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
         maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
         maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0,'Linear', true, 0);
        tween1.to({ x: 0 }, 0,'Linear', true, 0);
         tween2.to({ x: 0 }, 0,'Linear', true, 0);
          tween3.to({ x: 0 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){
  }, this);  
    },
    
      gotoEighthQuestion:function(){

    	no1++;
            i=1;
         j=1;
         k=1;
         
          var sh1=this.add.sprite(146,380,'Level42A_shadow7');
         sh1.anchor.setTo(0.5,1);
          sh1.scale.setTo(0.5,1);
          
           var sh2=this.add.sprite(415,375,'Level42A_shadow8');
         sh2.anchor.setTo(0.5,1);
          sh2.scale.setTo(0.8,1);
         
            var sh3=this.add.sprite(665,370,'Level42A_shadow9');
         sh3.anchor.setTo(0.5,1);
          sh3.scale.setTo(1.3,0.7);
          
        boxb1=this.add.sprite(155,420,'Level42A_boxb');
         boxb1.anchor.setTo(0.5,1);
         boxb1.scale.setTo(0.9,0.95);
         boxb1.visible=false;
         
         boxb2=this.add.sprite(415,420,'Level42A_boxb');
         boxb2.anchor.setTo(0.5,1);
         boxb2.scale.setTo(0.9,0.95);
         boxb2.visible=false;
         
         boxb3=this.add.sprite(670,420,'Level42A_boxb');
         boxb3.anchor.setTo(0.5,1);
         boxb3.scale.setTo(0.9,0.95);
         boxb3.visible=false;
         
          opt1=this.add.sprite(164,420,'Level42A_pot222','<Group>_460 copy instance 10000');
         opt1.anchor.setTo(0.5,1);
         opt1.scale.setTo(1,1);
         opt1.name = "pot222";
         opt1.value = 5;

        opt2=this.add.sprite(444,460,'Level42A_can222','<Group>_51 copy 3 instance 10000');
         opt2.anchor.setTo(0.5,1);
         opt2.scale.setTo(0.9,1);
         opt2.name = "can222";
        opt2.value = 3;

        opt3=this.add.sprite(676,420,'Level42A_watercontainer','<Group>_6_0 copy instance 10001');
         opt3.anchor.setTo(0.5,1);
         opt3.scale.setTo(0.8,0.9);
         opt3.name = "watercontainer";
         opt3.value = 4;
         
         wronggraphics1 = this.add.graphics(this.world.centerX+200, this.world.centerY+40);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         wronggraphics1.lineTo(0, 170);
        wronggraphics1.lineTo(90, 170);
        wronggraphics1.lineTo(90, 0);
        wronggraphics1.lineTo(0, 0);
       wronggraphics1.angle = 180;
       wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
         
                 wronggraphics2 = this.add.graphics(this.world.centerX-20, this.world.centerY+40);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 170);
        wronggraphics2.lineTo(120, 170);
        wronggraphics2.lineTo(120, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.angle = 180;
     wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
         
         wronggraphics3 = this.add.graphics(this.world.centerX-230, this.world.centerY+40);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 170);
        wronggraphics3.lineTo(170, 170);
        wronggraphics3.lineTo(170, 0);
        wronggraphics3.lineTo(0, 0);
       wronggraphics3.angle = 180;
      wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
         
         var mainbox=this.add.sprite(790,70,'Level42A_mainbox');
         mainbox.name = "mainbox";
         
         a1=this.add.sprite(795,95,'Level42A_a11','<Group>_373 instance 10000');
          if(no1==1)
         {
            this.getVoice(no1);
            this.time.events.add(13000,function(){
               a1.inputEnabled = true; 
               a1.input.useHandCursor = true;
            },this);
         }
         else
         {
            a1.inputEnabled = true;
            a1.input.useHandCursor = true;
         }
         a1.name="a1";
         //a1.events.onInputDown.add(this.addListeners, this);
          this.mains();
          a1.frame=7;
         
    tick=this.add.sprite(815,270,'Level42A_tick','Symbol 16 instance 10000');
         //tick.anchor.setTo(0.5,1);
         //tick.scale.setTo(0.8,0.8);
         tick.name = "tick";
         tick.inputEnabled = false;
         //tick.input.useHandCursor = true;
    
         
         
         darkbg1=this.add.sprite(0,49,'Level42A_darkbg2');
         darkbg1.scale.setTo(0.9,0.74);
         darkbg1.visible=true;
         darkbg2=this.add.sprite(286,49,'Level42A_darkbg2');
         darkbg2.scale.setTo(0.8,0.74);
         darkbg2.visible=true;
     
         var box=this.add.sprite(110,455,'Level42A_box');
         var box1=this.add.sprite(385,455,'Level42A_box');
         var box2=this.add.sprite(630,455,'Level42A_box');
         
        counterText = this.add.text(35,35,0);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';
        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 30;
        counterText.fill = '#65B4C3';
        counterText.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box.addChild(counterText);
         
        counterText1 = this.add.text(35,35,'0');
        counterText1.anchor.setTo(0.5);
        counterText1.align = 'center';
        counterText1.font = 'Alte Haas Grotesk';
        counterText1.fontSize = 30;
        counterText1.fill = '#65B4C3';
        counterText1.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box1.addChild(counterText1);
         
        counterText2 = this.add.text(35,35,'0');
        counterText2.anchor.setTo(0.5);
        counterText2.align = 'center';
        counterText2.font = 'Alte Haas Grotesk';
        counterText2.fontSize = 30;
        counterText2.fill = '#65B4C3';
        counterText2.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0)', 0);
        box2.addChild(counterText2);
         
          shadowgroup=this.add.group();
          optionsgrp = this.add.group();
        wrngGraphicgrp = this.add.group();
         maingroup = this.add.group();
          
          shadowgroup.add(sh1);
          shadowgroup.add(sh2);
          shadowgroup.add(sh3);
                
        optionsgrp.add(opt1);
        optionsgrp.add(opt2);
        optionsgrp.add(opt3);
         
        wrngGraphicgrp.add(wronggraphics1);
        wrngGraphicgrp.add(wronggraphics2);
        wrngGraphicgrp.add(wronggraphics3);
         
        
         maingroup.add(mainbox);
         maingroup.add(a1);
         maingroup.add(tick);
         maingroup.add(darkbg1);
         maingroup.add(darkbg2);
         maingroup.add(box);
         maingroup.add(box1);
         maingroup.add(box2);
        maingroup.add(boxb1);
         maingroup.add(boxb2);
         maingroup.add(boxb3);
         
          shadowgroup.x=1000;
          maingroup.x = 1000;
         optionsgrp.x=1000;
          var tween = this.add.tween(shadowgroup);
         var tween1 = this.add.tween(optionsgrp);
        var tween2 = this.add.tween(wrngGraphicgrp);
         var tween3 = this.add.tween(maingroup);
        tween.to({ x: 0 }, 0,'Linear', true, 0);
        tween1.to({ x: 0 }, 0,'Linear', true, 0);
         tween2.to({ x: 0 }, 0,'Linear', true, 0);
          tween3.to({ x: 0 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){
  }, this);  
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
         AnsTimerCount=0;
         _this.sceneCount++;

        timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();


        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
    	//console.log("get"+no1);
		
		_this.questionid = "4.2_B1#SCR-"+_this.sceneCount;
		
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
    
     mains:function(){
        //console.log("remove");
        a1.events.onInputDown.add(function(target){
			
			 
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
							
            ClickSound.play();
            i++;   
            if(i<=opt3.value)
            {
				
                waterFilling = this.add.audio('waterFill');
		        waterFilling.play();
                opt3.frame += 1; 
                
                //console.log(i);
                var temp = parseInt(counterText2.text)+1;
                //console.log(temp);
                if(temp<opt3.value-1)
                    counterText2.setText(temp);
                else
                {
                    //a1.inputEnabled=false;
                    waterFilling.pause();
                    watersplash.play();
                    temp = parseInt(counterText2.text)+1;
                    counterText2.setText(temp);
                    //waterFilling.pause();
                    // waudio.play();
                    //shake.shake(10, opt3);
                    //opt3.frame=1;
                    //this.mains();
                    a1.inputEnabled=false;
                    this.time.events.add(1000, function(){
                        
                    darkbg2.visible=false;
                        a1.inputEnabled=true;
                    opt2.frame += 1;
                    },this);
                }
            }
            else
            {
                //console.log("in here");
                j++;
                if(j<=opt2.value)
                {
					
                    waterFilling = this.add.audio('waterFill');
		        waterFilling.play();
                    if(opt2.name == "drum222")
                        {
                            if(opt2.frame>=1 && opt2.frame<=6)
                                        {
                                            //console.log("less than 4");
                                            opt2.frame += 2;
                                        }
                            else{
                                //console.log("more than 4"+opt2.value);
                                if(j==7)
                                    opt2.frame += 2;
                                else
                                    opt2.frame += 1;
                            }
                        }
                    else{
                        opt2.frame += 1; 
                    }
                    
                    var temp = parseInt(counterText1.text)+1;
                    if(temp<opt2.value-1)
                        counterText1.setText(temp);
                    //waterFillingSound.stop();
                    else
                    {
                        //console.log("in else");
                        waterFilling.pause();
                    watersplash.play();
                        temp = parseInt(counterText1.text)+1;
                        counterText1.setText(temp);
                       // waterFilling.pause();
                         //waudio.play();
                        //shake.shake(10, opt2);
                        a1.inputEnabled=false;
                        this.time.events.add(1000, function(){
                        darkbg1.visible=false;
                            a1.inputEnabled=true;
                                opt1.frame += 1;
                            
                                
                             },this);
                    }
                }
                else
                {
                    k++;
                    if(k<=opt1.value)
                    {
                        
                         waterFilling = this.add.audio('waterFill');
		        waterFilling.play();
                        if(opt1.name == "greenpot")
                                {
                                    if(opt1.frame>=1)
                                        {
                                            opt1.frame += 1;
                                        }
                                    
                                }
                        else if(opt1.name == "orangebottleB")
                            {
                                if(opt1.frame>=1)
                                        {
                                            //console.log("in k=="+k);
                                            if(k==5)
                                            opt1.frame=5;
                                            
                                        }
                                
                            }
                         opt1.frame += 1; 
                          
                        var temp = parseInt(counterText.text)+1;
                        if(temp<opt1.value-1)
                            counterText.setText(temp);
                        else
                        {
                            waterFilling.pause();
                    watersplash.play();
                           // waterFilling.pause();
                           // waudio.play();
                            //shake.shake(10, opt1);
                            temp = parseInt(counterText.text)+1;
                            counterText.setText(temp);
                           // this.time.events.add(1000, function(){
                            tick.frame = 1;
                                 tick.inputEnabled=true;
                           tick.input.useHandCursor = true;
                             tick.events.onInputDown.add(function(){
                           ClickSound.play();
								
                            this.correctAns();
                                  },this);
                              //  },this);
                        }
                    }
                }
                
            }
            
         
        },this);
        
    },
    
	correctAns:function()
	{
         noofAttempts++;
		if(timer!=null)
                            {
                                timer.stop();
                               timer = null;
                            }

                             var currentTime = window.timeSaveFunc();
                                var saveAsment = 
                                { 
                                    id_game_play: _this.savedVar,
                                    id_question: _this.questionid,  
                                    pass: "Yes",
                                    time2answer: AnsTimerCount,
                                    attempts: noofAttempts,
                                    date_time_submission: currentTime, 
                                    access_token: window.acctkn 
                                }
                        
                        absdsjsapi.saveAssessment(saveAsment);
							
		//console.log("correct");
        _this.speakerbtn.inputEnabled=false;
        boxb1.visible=true;
        boxb2.visible=true;
        boxb3.visible=true;

        
        AnimOpt1 =opt1.animations.add('flag1',["a2","a1"]);
         AnimOpt1.play(2.8,true);
        var bAnim = boxb1.animations.add('flag2',["b2","b1"]);
        bAnim.play(2.8,true);
        
       AnimOpt2 =opt2.animations.add('flag3',["a2","a1"]);
        AnimOpt2.play(2.8,true);
        var bAnim1 = boxb2.animations.add('flag4',["b2","b1"]);
        bAnim1.play(2.8,true);
        
        AnimOpt3 =opt3.animations.add('flag5',["a2","a1"]);
        AnimOpt3.play(2.8,true);
        var bAnim2 = boxb3.animations.add('flag6',["b2","b1"]);
        bAnim2.play(2.8,true);
 
		celebration = true;
		
     	cmusic = this.add.audio('celebr');
		cmusic.play();

        this.time.events.add(500, this.removeCelebration, this);


		
        //target.tint = 0xA9A9A9;
        
        var starAnim = starsGroup.getChildAt(count1);
		//console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();        		
        
        a1.events.onInputDown.removeAll();
        tick.events.onInputDown.removeAll();
        opt1.events.onInputDown.removeAll();
        opt2.events.onInputDown.removeAll();
        opt3.events.onInputDown.removeAll();
	},


    wrongAns:function()
	{
        //console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
        //console.log(target);
        //target.tint = 0xA9A9A9;
        
		shake.shake(10, target);
		wmusic = this.add.audio('waudio');
		wmusic.play();
        
        //wmusic1 = this.add.audio('aiyoh');
		//wmusic1.play();
        	//this.disableListeners();
        //target.events.onInputDown.removeAll();
	},
    
    	removeCelebration:function()
	{
        
        //console.log("remove everythg");
        	
       

		//console.log("removeCeleb");
		celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		//console.log("no"+no1);
		//this.input.enabled = true;
			
		     count1++;
		//if(rightCount<=0)
		//{		
            //console.log("vamitha");
            
			if(no1<6)
			{
                //console.log("addq");
                 this.addQuestion(count1);
			}
			else
			{
                 this.time.events.add(2000, function(){
				//console.log("gameEnd");
                //this.stopAllVoice();
				this.state.start('grade4_2BScore');
                 },this);
			}

	},
    
    
	changeQuestion:function()
	{
		shadowgroup.destroy();
        optionsgrp.destroy();
        wrngGraphicgrp.destroy();
        maingroup.destroy();
       

         
		if(no1<6)
		{
            count++;
			this.getQuestion();
		}
		else
		{
			//console.log("gameEnd");
				//this.input.enabled = false;
				// text = this.add.text(this.world.centerX, 450,'Level42A_  Game Complete  ');

				// text.anchor.set(0.5);
				// text.align = 'center';

				// text.font = 'Arial Black';
				// text.fontSize = 70;
				// text.fontWeight = 'bold';
				// text.fill = '#FFFFF';

				// text.setShadow(0, 0,'Level42A_rgba(0, 0, 0, 0.5)', 0);
            

    
       
               //this.state.start('level2');
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

    
   /* getVoice:function(question){
        switch(question)
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:if(window.languageSelected=="English")
                        Eng_42B1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_42B1.play();
                    else
                        Kan_42B1.play();
                    break;
        }
    }*/

    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", "questionSounds/4.2A/English/4.2B1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", "questionSounds/4.2A/Hindi/4.2B1.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", "questionSounds/4.2A/Kannada/4.2B1.mp3");
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
         waterFillingSound =null;
        watersplash =null;
        wmusic = null;
        cmusic = null;
        /*delete bg1;
        delete starsGroup;
        delete dragBox;
        delete count;
        delete gameBoxGroup;
        delete crocsGroup;
        delete tickMark;
        delete objGroup;
        delete rightOrderArray;
        delete glowOrderArray;
        delete no1;
        delete count;
        delete count1;
        delete qArrays;
        delete graphics;
        delete numGroup;
        delete selectedAns;
        delete selectedAns2;
        delete rightAns;
        delete mainSprite;
        delete  _this.speakerbtn;
        delete scale1Empty;
        delete scale2Empty;
        delete weightScale1,weightScale2,weightScale3,weightScale4;
        delete obj1Group,obj2Group;
        delete tweenVal,angleval;
        delete tempName,tp;
        delete tempAngle;
        delete tempweight1;
        delete tempweight2;
        delete q1Array;
        delete q2Array;
        delete q3Array;
        delete oneKgAngle,oneKgWeight,twoKgAngle,twoKgWeight,fiveKgAngle,fiveKgWeight,tenKgAngle,tenKgWeight;

        delete object1,object2,object3,object4,object5,object6,object7,object8,object9;
        delete timelang;

        delete timer;
        delete noofAttempts;
        delete AnsTimerCount;
        delete enterTxt,enterTxt2;

        delete gameid,_this.questionid;*/
    }
    
};