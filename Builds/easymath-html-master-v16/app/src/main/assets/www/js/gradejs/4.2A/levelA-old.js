Game.grade42A_level1=function(){};

var background;
var questiongroupA;
var count;
var count1;
var qnoA;
var questarrayA=new Array();
var starsGroupA;
var questgroup;
var syntexincr=0,bucketincr=0,vesselincr=0,pinkmugincr=0,sodaincr=0,canincr=0,drumincr=0;
var box;
var boxtext;
var tickmark;
var speakerBtn;
var tickmark1,tickmark2;
var pot_graphics,jug_graphics,bottle_graphics,glass_graphics,spoon_graphics1,spoon_graphics2,spoon_graphics3,bottleblue_graphics;

var noofAttempts;
var timer;
var AnsTimerCount;

Game.grade42A_level1.prototype={
	create:function(game){
		
		noofAttempts=0;
		AnsTimerCount=0;
		
        qnoA=0;
        count1=0;
        questarrayA=[1,2,3,4,5,6,7,8];
        questarrayA = this.shuffle(questarrayA);
		count = 0;
		
        shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
        
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();
		
        background = this.add.tileSprite(0,0,this.world.width,this.world.height,'Level42A_bgA');
        background.scale.setTo(1.05,1.06);
        
        this.generateStarsForTheScene(6);

		/*var backbtn = this.add.button(5,1,'Level42A_CommonBackBtn',function(){
		this.stopAllVoice();
		this.state.start('grade4levelSelectionScreen');
		},this,1,0,2);

       speakerBtn = this.add.button(908,1,'Level42A_CommonSpeakerBtn',function(){
			this.getVoice(1);
		},this,1,0,2);*/
		
		var backbtn = this.add.button(5,1,'CommonBackBtn',function(){
			 this.stopAllVoice();
			 
				var click = this.add.audio('ClickSound');
            click.play();
			this.state.start('grade4levelSelectionScreen');
		},this,1,0,2);

       speakerBtn = this.add.sprite(908,1,'CommonSpeakerBtn');
	   speakerBtn.inputEnabled=true;
        speakerBtn.input.useHandCursor = true;
		speakerBtn.events.onInputDown.add(function(){
			var click = this.add.audio('ClickSound');
            click.play();
			this.getVoice(1);
			speakerBtn.inputEnabled = false;
			this.time.events.add(2000, function(){speakerBtn.inputEnabled = true;}, this);
			
		},this);
		
        this.getQuestion();
    },
    
    
    generateStarsForTheScene:function(count)
	{
		starsGroupA = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroupA.create(this.world.centerX, 15,'CommonStarAnim');
			for(var j =0;j<i;j++)
			{
				if(starsGroupA.getChildAt(j))
				{
					starsGroupA.getChildAt(j).x-=15;
					starsGroupA.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
    speakeron:function(){
        this.stopAllVoice();
        switch(questarrayA[qnoA-1])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:if(window.languageSelected=="English")
                        Eng_42A1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_42A1.play();
                    else
                        Kan_42A1.play();
                    break;
            
        }
    },
    
    stopAllVoice:function(){
        Eng_42A1.stop();
        Hin_42A1.stop();
        Kan_42A1.stop();
       
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
    
    getQuestion:function()
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
		
        speakerBtn.inputEnabled=true;
        speakerBtn.input.useHandCursor = true;
        this.stopAllVoice();
		switch(questarrayA[qnoA])
		{
			case 1: this.question1(); break;
            case 2: this.question2(); break;
            case 3: this.question3(); break;
            case 4: this.question4(); break;
            case 5: this.question5(); break;
            case 6: this.question6(); break;
            case 7: this.question7(); break;
            case 8: this.question8(); break;
        }
    },
    
    question1:function()
    {
        qnoA++;
        syntexincr=0;
        syntex_shadow = this.add.sprite(235,410,'Level42A_common_shadow');
        syntex_shadow.width-=25;
        pot_shadow = this.add.sprite(573,408,'Level42A_common_shadow');
        pot_shadow.width-=120;
        syntex = this.add.sprite(200,97,'Level42A_tank2','<Group>_449 copy instance 10001');
        syntex.width+=55;
        syntex.height+=50;
        syntexanim=syntex.animations.add('syntex');
        pot = this.add.sprite(540,190,'Level42A_pot2','<Group>_90 copy instance 10006');
        pot.width+=50;
        pot.height+=50;
        potanim=pot.animations.add('pot');
        
        pot_graphics = this.add.graphics(683,350);
		pot_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		pot_graphics.beginFill(0xFF0000, 1);
		pot_graphics.drawCircle(-50, -10, 130);
		pot_graphics.boundsPadding = 0;
		pot_graphics.alpha=0;
        if(qnoA==1)
        {
            this.getVoice(qnoA);
            this.time.events.add(13000,function(){
                pot_graphics.inputEnabled = true;
                pot_graphics.input.useHandCursor = true;
                pot_graphics.name="pot";
                pot_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
            pot_graphics.inputEnabled = true;
            pot_graphics.input.useHandCursor = true;
            pot_graphics.name="pot";
            pot_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        
        box = this.add.sprite(450,477,'Level42A_box');
        box.scale.setTo(0.85,0.85);
        boxtext=this.add.text(30,20,syntexincr);
        boxtext.fill='#65B4C3';
        box.addChild(boxtext);
        tickmark = this.add.sprite(780,300,'Level42A_tick','Symbol 16 instance 10000');
    },
    
    question2:function()
    {
        qnoA++;
        bucketincr=0;
        bucket_shadow = this.add.sprite(280,407,'Level42A_common_shadow');
        bucket_shadow.width-=84;
        jug_shadow = this.add.sprite(585,405,'Level42A_common_shadow');
        jug_shadow.width-=160;
        bucket = this.add.sprite(205,60,'Level42A_bucket','<Group>_19 instance 10000');
        bucketanim=bucket.animations.add('bucket');
        jug = this.add.sprite(550,292,'Level42A_jug','<Group>_18 instance 10000');
        juganim=jug.animations.add('jug');        
        
        jug_graphics = this.add.graphics(638,320);
		jug_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		jug_graphics.beginFill(0xFF0000, 1);
		jug_graphics.drawRect(-50, -10, 68,95);
		jug_graphics.boundsPadding = 0;
		jug_graphics.alpha=0;
        if(qnoA==1)
        {
            this.getVoice(qnoA);
            this.time.events.add(13000,function(){
                jug_graphics.inputEnabled = true;
                jug_graphics.input.useHandCursor = true;
                jug_graphics.name="jug";
                jug_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                jug_graphics.inputEnabled = true;
                jug_graphics.input.useHandCursor = true;
                jug_graphics.name="jug";
                jug_graphics.events.onInputDown.add(this.triggerevent,this);
        }

        box = this.add.sprite(450,477,'Level42A_box');
        box.scale.setTo(0.85,0.85);
        boxtext=this.add.text(30,20,bucketincr);
        boxtext.fill='#65B4C3';
        box.addChild(boxtext);
        tickmark = this.add.sprite(780,300,'Level42A_tick','Symbol 16 instance 10000');
    },
    
    question3:function()
    {
        qnoA++;
        vesselincr=0;
        bottle_shadow = this.add.sprite(593,412,'Level42A_common_shadow');
        bottle_shadow.width-=160;
        vessel_shadow = this.add.sprite(265,415,'Level42A_common_shadow');
        vessel_shadow.width-=20;
        vessel = this.add.sprite(210,170,'Level42A_cookerB','<Group>_73 copy instance 10001');
        vessel.width+=50;
        vessel.height+=50;
        vesselanim=vessel.animations.add('vessel');
        bottle = this.add.sprite(580,210,'Level42A_bottle','<Group>_17 instance 10001');
        bottleanim=bottle.animations.add('bottle');
        
        bottle_graphics = this.add.graphics(649,275);
		bottle_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		bottle_graphics.beginFill(0xFF0000, 1);
		bottle_graphics.drawRect(-50, -10, 63,158);
		bottle_graphics.boundsPadding = 0;
		bottle_graphics.alpha=0;
        if(qnoA==1)
        {
            this.getVoice(qnoA);
            this.time.events.add(13000,function(){
                bottle_graphics.inputEnabled = true;
                bottle_graphics.input.useHandCursor = true;
                bottle_graphics.name="bottle";
                bottle_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                bottle_graphics.inputEnabled = true;
                bottle_graphics.input.useHandCursor = true;
                bottle_graphics.name="bottle";
                bottle_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        box = this.add.sprite(450,477,'Level42A_box');
        box.scale.setTo(0.85,0.85);
        boxtext=this.add.text(30,20,vesselincr);
        boxtext.fill='#65B4C3';
        box.addChild(boxtext);
        tickmark = this.add.sprite(780,300,'Level42A_tick','Symbol 16 instance 10000');
    },
    
    question4:function()
    {
        qnoA++;
        pinkmugincr=0;
        pinkmug_shadow = this.add.sprite(283,410,'Level42A_common_shadow');
        pinkmug_shadow.width-=50;
        glass_shadow = this.add.sprite(600,413,'Level42A_common_shadow');
        glass_shadow.width-=180;
        glass_shadow.height-=5;
        pinkmug = this.add.sprite(255,70,'Level42A_pinkmug','<Group>_13 instance 10000');
        pinkmuganim=pinkmug.animations.add('pinkmug');
        glass = this.add.sprite(580,310,'Level42A_glass','<Group>_64 instance 10001');
        glassanim=glass.animations.add('glass');
        
        glass_graphics = this.add.graphics(652,340);
		glass_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		glass_graphics.beginFill(0xFF0000, 1);
		glass_graphics.drawRect(-50, -10, 50,85);
		glass_graphics.boundsPadding = 0;
		glass_graphics.alpha=0;
        if(qnoA==1)
        {
            this.getVoice(qnoA);
            this.time.events.add(13000,function(){
                glass_graphics.inputEnabled = true;
                glass_graphics.input.useHandCursor = true;
                glass_graphics.name="glass";
                glass_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                glass_graphics.inputEnabled = true;
                glass_graphics.input.useHandCursor = true;
                glass_graphics.name="glass";
                glass_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        box = this.add.sprite(450,477,'Level42A_box');
        box.scale.setTo(0.85,0.85);
        boxtext=this.add.text(30,20,pinkmugincr);
        boxtext.fill='#65B4C3';
        box.addChild(boxtext);
        tickmark = this.add.sprite(780,300,'Level42A_tick','Symbol 16 instance 10000');
    },
    
    question5:function()
    {
        qnoA++;
        sodaincr=0;
        spoon_shadow = this.add.sprite(520,407,'Level42A_common_shadow');
        spoon_shadow.height-=7;
        soda_shadow = this.add.sprite(295,405,'Level42A_common_shadow');
        soda_shadow.width-=125;
        soda_shadow.height-=5;
        soda = this.add.sprite(250,125,'Level42A_soda','Symbol 7 instance 10000');
        sodaanim=soda.animations.add('soda');
        spoon = this.add.sprite(510,300,'Level42A_spoon');
        spoon.width+=150;
        spoon.height+=100;
        spoonanim=spoon.animations.add('spoon');
        
        spoon_graphics1 = this.add.graphics(580,387);
		spoon_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		spoon_graphics1.beginFill(0xFF0000, 1);
		spoon_graphics1.drawRect(-50, -10, 70,30);
		spoon_graphics1.boundsPadding = 0;
		spoon_graphics1.alpha=0;
        
        spoon_graphics2 = this.add.graphics(670,370);
		spoon_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		spoon_graphics2.beginFill(0xFF0000, 1);
		spoon_graphics2.drawRect(-50, -10, 130,10);
		spoon_graphics2.boundsPadding = 0;
		spoon_graphics2.alpha=0;
        
        spoon_graphics3 = this.add.graphics(647,358);
		spoon_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		spoon_graphics3.beginFill(0xFF0000, 1);
		spoon_graphics3.drawRect(-50, -10, 20,10);
		spoon_graphics3.boundsPadding = 0;
		spoon_graphics3.alpha=0;
        
        if(qnoA==1)
        {
            this.getVoice(qnoA);
            this.time.events.add(13000,function(){
                spoon_graphics1.inputEnabled = true;
                spoon_graphics1.input.useHandCursor = true;
                spoon_graphics1.name="spoon";
                spoon_graphics2.inputEnabled = true;
                spoon_graphics2.input.useHandCursor = true;
                spoon_graphics2.angle=-5;
                spoon_graphics2.name="spoon";
                spoon_graphics3.inputEnabled = true;
                spoon_graphics3.input.useHandCursor = true;
                spoon_graphics3.angle=-35;
                spoon_graphics3.name="spoon";
                spoon_graphics1.events.onInputDown.add(this.triggerevent,this);
                spoon_graphics2.events.onInputDown.add(this.triggerevent,this);
                spoon_graphics3.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                spoon_graphics1.inputEnabled = true;
                spoon_graphics1.input.useHandCursor = true;
                spoon_graphics1.name="spoon";
                spoon_graphics2.inputEnabled = true;
                spoon_graphics2.input.useHandCursor = true;
                spoon_graphics2.angle=-5;
                spoon_graphics2.name="spoon";
                spoon_graphics3.inputEnabled = true;
                spoon_graphics3.input.useHandCursor = true;
                spoon_graphics3.angle=-35;
                spoon_graphics3.name="spoon";
                spoon_graphics1.events.onInputDown.add(this.triggerevent,this);
                spoon_graphics2.events.onInputDown.add(this.triggerevent,this);
                spoon_graphics3.events.onInputDown.add(this.triggerevent,this);
        }

        box = this.add.sprite(450,477,'Level42A_box');
        box.scale.setTo(0.85,0.85);
        boxtext=this.add.text(30,20,sodaincr);
        boxtext.fill='#65B4C3';
        box.addChild(boxtext);
        tickmark = this.add.sprite(780,300,'Level42A_tick','Symbol 16 instance 10000');
    },
    
    question6:function()
    {
        qnoA++;
        canincr=0;
        can_shadow = this.add.sprite(257,400,'Level42A_common_shadow');
        can_shadow.width-=20;
        bottleblue_shadow = this.add.sprite(556,405,'Level42A_common_shadow');
        bottleblue_shadow.width-=120;
        bottleblue_shadow.height-=5;
        can = this.add.sprite(220,100,'Level42A_canB','<Group>_51 copy instance 10001');
        can.width+=80;
        can.height+=80;
        cananim=can.animations.add('can');
        bottleblue = this.add.sprite(557,150,'Level42A_bottleblue','Symbol 9 instance 10001');
        bottleblueanim=bottleblue.animations.add('bottleblue');
        
        bottleblue_graphics = this.add.graphics(623,200);
		bottleblue_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		bottleblue_graphics.beginFill(0xFF0000, 1);
		bottleblue_graphics.drawRect(-50, -10, 80,215);
		bottleblue_graphics.boundsPadding = 0;
		bottleblue_graphics.alpha=0;
        
        if(qnoA==1)
        {
            this.getVoice(qnoA);
            this.time.events.add(13000,function(){
                bottleblue_graphics.inputEnabled = true;
                bottleblue_graphics.input.useHandCursor = true;
                bottleblue_graphics.name="bottleblue";
                bottleblue_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                bottleblue_graphics.inputEnabled = true;
                bottleblue_graphics.input.useHandCursor = true;
                bottleblue_graphics.name="bottleblue";
                bottleblue_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        box = this.add.sprite(450,477,'Level42A_box');
        box.scale.setTo(0.85,0.85);
        boxtext=this.add.text(30,20,canincr);
        boxtext.fill='#65B4C3';
        box.addChild(boxtext);
        tickmark = this.add.sprite(780,300,'Level42A_tick','Symbol 16 instance 10000');
    },
    
    question7:function()
    {
        qnoA++;
        orangecanincr=0;
        orangecan_shadow = this.add.sprite(274,397,'Level42A_common_shadow');
        orangecan_shadow.width-=120;
        cup_shadow = this.add.sprite(571,400,'Level42A_common_shadow');
        cup_shadow.height-=5;
        cup_shadow.width-=120;
        orangecan = this.add.sprite(232,77,'Level42A_jugB','<Group>_57 copy instance 10001');
        orangecan.width+=100;
        orangecan.height+=120;
        orangecananim=orangecan.animations.add('orangecan');
        cup = this.add.sprite(527,300,'Level42A_cup','<Group>_4_0 instance 10001');
        cupanim=cup.animations.add('cup');
        
        cup_graphics1 = this.add.graphics(630,335);
		cup_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		cup_graphics1.beginFill(0xFF0000, 1);
		cup_graphics1.drawRect(-50, -10, 95,50);
		cup_graphics1.boundsPadding = 0;
		cup_graphics1.alpha=0;
        
        cup_graphics2 = this.add.graphics(650,385);
		cup_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		cup_graphics2.beginFill(0xFF0000, 1);
		cup_graphics2.drawRect(-50, -10, 55,25);
		cup_graphics2.boundsPadding = 0;
		cup_graphics2.alpha=0;
        
        if(qnoA==1)
        {
            this.getVoice(qnoA);
            this.time.events.add(13000,function(){
                cup_graphics1.inputEnabled = true;
                cup_graphics1.input.useHandCursor = true;
                cup_graphics1.name="cup";
                cup_graphics2.inputEnabled = true;
                cup_graphics2.input.useHandCursor = true;
                cup_graphics2.name="cup";
                cup_graphics1.events.onInputDown.add(this.triggerevent,this);
                cup_graphics2.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                cup_graphics1.inputEnabled = true;
                cup_graphics1.input.useHandCursor = true;
                cup_graphics1.name="cup";
                cup_graphics2.inputEnabled = true;
                cup_graphics2.input.useHandCursor = true;
                cup_graphics2.name="cup";
                cup_graphics1.events.onInputDown.add(this.triggerevent,this);
                cup_graphics2.events.onInputDown.add(this.triggerevent,this);
        }
        box = this.add.sprite(450,477,'Level42A_box');
        box.scale.setTo(0.85,0.85);
        boxtext=this.add.text(30,20,orangecanincr);
        boxtext.fill='#65B4C3';
        box.addChild(boxtext);
        tickmark = this.add.sprite(780,300,'Level42A_tick','Symbol 16 instance 10000');
    },
    
    question8:function()
    {
        qnoA++;
        drumincr=0;
        drum_shadow = this.add.sprite(243,400,'Level42A_common_shadow');
        drum_shadow.width-=75;
       // drum_shadow.height-=10;
        cupreverse_shadow = this.add.sprite(578,403,'Level42A_common_shadow');
        cupreverse_shadow.width-=110;
        cupreverse_shadow.height-=5;
        drum = this.add.sprite(215,110,'Level42A_drum2','<Group>_450 copy instance 10001');
        drum.width+=50;
        drum.height+=50;
        drumanim=drum.animations.add('drum');
        cupreverse = this.add.sprite(500,268,'Level42A_cupreverse','<Group>_47 instance 10001');
        cupreverseanim=cupreverse.animations.add('cupreverse');
        
        cupreverse_graphics = this.add.graphics(630,335);
		cupreverse_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		cupreverse_graphics.beginFill(0xFF0000, 1);
		cupreverse_graphics.drawRect(-50, -10, 95,50);
		cupreverse_graphics.boundsPadding = 0;
		cupreverse_graphics.alpha=0;
        
        if(qnoA==1)
        {
            this.getVoice(qnoA);
            this.time.events.add(13000,function(){
                cupreverse_graphics.inputEnabled = true;
                cupreverse_graphics.input.useHandCursor = true;
                cupreverse_graphics.name="cupreverse";
                cupreverse_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                cupreverse_graphics.inputEnabled = true;
                cupreverse_graphics.input.useHandCursor = true;
                cupreverse_graphics.name="cupreverse";
                cupreverse_graphics.events.onInputDown.add(this.triggerevent,this);      
        }
        
        box = this.add.sprite(450,477,'Level42A_box');
        box.scale.setTo(0.85,0.85);
        boxtext=this.add.text(30,20,drumincr);
        boxtext.fill='#65B4C3';
        box.addChild(boxtext);
        tickmark = this.add.sprite(780,300,'Level42A_tick','Symbol 16 instance 10000');
    },
    
    triggerevent:function(target){
        
		var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question:  window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			absdsjsapi.saveInteractEvent(interactEvent);
			
        if(target.name=="pot")
            {
                ClickSound.play();
                syntexincr++;
               // console.log("incrrr=="+syntexincr);
                if(syntexincr>6)
                    {
                       waudio.play();
                       shake.shake(10,syntex);
                       pot.frameName='<Group>_90 copy instance 10006';
                       target.inputEnabled=false;
                       tickmark.inputEnabled=true;
                       tickmark.input.useHandCursor = true;
                       tickmark.events.onInputDown.removeAll(); 
                       tickmark.events.onInputDown.add(function(){
                           
                           tickmark.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
						   
						   noofAttempts++;
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
						   absdsjsapi.saveAssessment(saveAsment);
						   
                           var starAnim = starsGroupA.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           
                           this.time.events.add(1000,function(){
                               tickmark.events.onInputDown.removeAll();  
                               questgroupA=this.add.group();
                               questgroupA.add(pot_shadow);
                               questgroupA.add(syntex_shadow);
                               questgroupA.add(pot);                   
                               questgroupA.add(syntex);
                               questgroupA.add(pot_graphics);
                               questgroupA.add(tickmark);
                               questgroupA.add(box);
                               var tween = this.add.tween(questgroupA);
                               tween.to({ x: -1000}, 0, 'Linear', true, 0);
                               tween.onComplete.add(function(){  
                                this.nextquestion();
                               },this);
                            },this);
                       },this); 
						AnsTimerCount=0;
                    }
                else
                    {
                        if(syntexincr==6)
                        {
                            waterFillingSound.stop();
                            syntex.frameName="<Group>_449 copy instance 10013";
                            watersplash.play();
                            tickmark.inputEnabled=true;
                            tickmark.input.useHandCursor = true;
                            tickmark.frameName='Symbol 16 instance 10001';
                            tickmark.events.onInputDown.removeAll(); 
                            tickmark.events.onInputDown.add(function(){
                                speakerBtn.inputEnabled=false;
                                tickmark.inputEnabled=false;
                                ClickSound.play();
                                celebr.play();
								
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
						   absdsjsapi.saveAssessment(saveAsment);
						   
                                var starAnim = starsGroupA.getChildAt(count1);
                                starAnim.smoothed = false;
                                var anim = starAnim.animations.add('star');
                                anim.play();
                                count1++;
                               // console.log("count 1 here else=="+count1);
                                this.time.events.add(1000,function(){
                                    tickmark.events.onInputDown.removeAll();  
                                    questgroupA=this.add.group();
                                    questgroupA.add(pot_shadow);
                                    questgroupA.add(syntex_shadow);
                                    questgroupA.add(pot);                   
                                    questgroupA.add(syntex);
                                    questgroupA.add(pot_graphics);
                                    questgroupA.add(tickmark);
                                    questgroupA.add(box);
                                    var tween = this.add.tween(questgroupA);
                                    tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                    tween.onComplete.add(function(){  
                                        this.nextquestion();
                                    },this);
                                },this);
                            },this);
								AnsTimerCount=0;
                        }  
                        else//less than 6
                        {
                            waterFillingSound.play();
                            if(syntexincr<5)
                                syntex.frameName="<Group>_449 copy instance 1000"+(syntexincr*2);
                            else
                                syntex.frameName="<Group>_449 copy instance 100"+(syntexincr*2);
                        }
                        
                        boxtext=boxtext.setText(syntexincr);
                        box.addChild(boxtext);     
                  }
            }
        if(target.name=="jug")
            {
                ClickSound.play();
                bucketincr++;
                if(bucketincr>8)
                    {
                       waudio.play();
                       shake.shake(10,bucket);
                       jug.frameName='<Group>_18 instance 10000';
                       target.inputEnabled=false;
                       tickmark.inputEnabled=true;
                       tickmark.input.useHandCursor = true;
                       tickmark.events.onInputDown.removeAll(); 
                       tickmark.events.onInputDown.add(function(){
                           tickmark.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
						   
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
							
						   var currentTime = window.timeSaveFunc();
							var saveAsment = 
							{ 
								id_game_play: window.gameid,
								id_question: window.gameid,  
								answer_given: "yes",
								time2answer: AnsTimerCount,
								attempts: noofAttempts,
								date_time_event: currentTime, 
								access_token: window.acctkn 
							}
						   absdsjsapi.saveAssessment(saveAsment);
						   
                           var starAnim = starsGroupA.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               questgroupA=this.add.group();
                               tickmark.events.onInputDown.removeAll();  
                               questgroupA=this.add.group();
                               questgroupA.add(jug_shadow);
                               questgroupA.add(bucket_shadow);
                               questgroupA.add(jug);                   
                               questgroupA.add(bucket);
                               questgroupA.add(jug_graphics);
                               questgroupA.add(tickmark);
                               questgroupA.add(box);
                               var tween = this.add.tween(questgroupA);
                               tween.to({ x: -1000}, 0, 'Linear', true, 0);
                               tween.onComplete.add(function(){ 
                                this.nextquestion();
                               },this);
                           },this);
                       },this); 
						AnsTimerCount=0;
                    }
                else
                    {
                        if(bucketincr==8)
                        {
                            waterFillingSound.stop();
                            watersplash.play();
                            tickmark.inputEnabled=true;
                            tickmark.input.useHandCursor = true;
                            tickmark.frameName='Symbol 16 instance 10001';
                            tickmark.events.onInputDown.removeAll(); 
                            tickmark.events.onInputDown.add(function(){
                                speakerBtn.inputEnabled=false;
                               tickmark.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
							   
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
						   absdsjsapi.saveAssessment(saveAsment);
						   
                               var starAnim = starsGroupA.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                   tickmark.events.onInputDown.removeAll();  
                                   questgroupA=this.add.group();
                                   questgroupA.add(jug_shadow);
                                   questgroupA.add(bucket_shadow);
                                   questgroupA.add(jug);                   
                                   questgroupA.add(bucket);
                                   questgroupA.add(jug_graphics);
                                   questgroupA.add(tickmark);
                                   questgroupA.add(box);
                                   var tween = this.add.tween(questgroupA);
                                   tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                   tween.onComplete.add(function(){   
                                    this.nextquestion();
                                   },this);
                               },this);
                           },this); 
						   AnsTimerCount=0;
                        }
                        else//less than 8
                        {
                            waterFillingSound.play();
                        }

                        bucket.frameName="<Group>_19 instance 1000"+bucketincr;
                        boxtext=boxtext.setText(bucketincr);
                        box.addChild(boxtext);
                    } 
            }
            if(target.name=="bottle")
            {
                ClickSound.play();
                vesselincr++;
                if(vesselincr>4)
                    {
                       waudio.play();
                       shake.shake(10,vessel);
                       bottle.frameName='<Group>_17 instance 10001';
                       target.inputEnabled=false;
                       tickmark.inputEnabled=true;
                       tickmark.input.useHandCursor = true;
                       tickmark.events.onInputDown.removeAll(); 
                       tickmark.events.onInputDown.add(function(){
                           tickmark.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
						   
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
						   absdsjsapi.saveAssessment(saveAsment);
                           var starAnim = starsGroupA.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               tickmark.events.onInputDown.removeAll();  
                               questgroupA=this.add.group();
                               questgroupA.add(bottle_shadow);
                               questgroupA.add(vessel_shadow);
                               questgroupA.add(bottle);                   
                               questgroupA.add(vessel);
                               questgroupA.add(bottle_graphics);
                               questgroupA.add(tickmark);
                               questgroupA.add(box);
                               var tween = this.add.tween(questgroupA);
                               tween.to({ x: -1000}, 0, 'Linear', true, 0);
                               tween.onComplete.add(function(){ 
                                this.nextquestion();
                               },this);
                           },this);
                       },this);  
						AnsTimerCount=0;
                    }
                else
                    {
                        if(vesselincr==4)
                        {
                            waterFillingSound.stop();
                            vessel.frameName="a1";
                            watersplash.play();
                            tickmark.inputEnabled=true;
                            tickmark.input.useHandCursor = true;
                            tickmark.frameName='Symbol 16 instance 10001';
                            tickmark.events.onInputDown.removeAll(); 
                            tickmark.events.onInputDown.add(function(){
                                speakerBtn.inputEnabled=false;
                                tickmark.inputEnabled=false;
                                ClickSound.play();
                                celebr.play();
								
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
							
						   var currentTime = window.timeSaveFunc();
							var saveAsment = 
							{ 
								id_game_play: window.gameid,
								id_question:  window.gameid,  
								answer_given: "Yes",
								time2answer: AnsTimerCount,
								attempts: noofAttempts,
								date_time_event: currentTime, 
								access_token: window.acctkn 
							}
						   absdsjsapi.saveAssessment(saveAsment);
						   
                                var starAnim = starsGroupA.getChildAt(count1);
                                starAnim.smoothed = false;
                                var anim = starAnim.animations.add('star');
                                anim.play();
                                count1++;
                                this.time.events.add(1000,function(){
                                   tickmark.events.onInputDown.removeAll();  
                                   questgroupA=this.add.group();
                                   questgroupA.add(bottle_shadow);
                                   questgroupA.add(vessel_shadow);
                                   questgroupA.add(bottle);                   
                                   questgroupA.add(vessel);
                                   questgroupA.add(bottle_graphics);
                                   questgroupA.add(tickmark);
                                   questgroupA.add(box);
                                   var tween = this.add.tween(questgroupA);
                                   tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                   tween.onComplete.add(function(){   
                                    this.nextquestion();
                                   },this);
                               },this);
                            },this);  
								AnsTimerCount=0;
                        }
                        else//less than 4
                        {
                            waterFillingSound.play();
                            vessel.frameName="<Group>_73 copy instance 1000"+(vesselincr*3);
                        }
                        
                        boxtext=boxtext.setText(vesselincr);
                        box.addChild(boxtext);
                    } 
            }
            if(target.name=="glass")
            {
                ClickSound.play();
                pinkmugincr++;
                if(pinkmugincr>7)
                    {
                       waudio.play();
                       shake.shake(10,pinkmug); 
                       glass.frameName='<Group>_64 instance 10001';
                       target.inputEnabled=false;
                       tickmark.inputEnabled=true;
                       tickmark.input.useHandCursor = true;
                       tickmark.events.onInputDown.removeAll();  
                       tickmark.events.onInputDown.add(function(){
                           
                           tickmark.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
						   
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
							
						   var currentTime = window.timeSaveFunc();
							var saveAsment = 
							{ 
								id_game_play: window.gameid,
								id_question:  window.gameid,  
								answer_given: "Yes",
								time2answer: AnsTimerCount,
								attempts: noofAttempts,
								date_time_event: currentTime, 
								access_token: window.acctkn 
							}
						   absdsjsapi.saveAssessment(saveAsment);
						   
                           var starAnim = starsGroupA.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                              questgroupA=this.add.group();
                               questgroupA.add(pinkmug_shadow);
                               questgroupA.add(glass_shadow);
                               questgroupA.add(pinkmug);                   
                               questgroupA.add(glass);
                               questgroupA.add(glass_graphics);
                               questgroupA.add(tickmark);
                               questgroupA.add(box);
                               var tween = this.add.tween(questgroupA);
                               tween.to({ x: -1000}, 0, 'Linear', true, 0);
                               tween.onComplete.add(function(){
                                this.nextquestion();
                               },this);
                           },this);
                       },this);   
						AnsTimerCount=0;
                    }
                else
                    {
                        if(pinkmugincr==7)
                        {
                            waterFillingSound.stop();
                            watersplash.play();
                            tickmark.inputEnabled=true;
                            tickmark.input.useHandCursor = true;
                            tickmark.frameName='Symbol 16 instance 10001';
                            tickmark.events.onInputDown.removeAll(); 
                            tickmark.events.onInputDown.add(function(){
                                speakerBtn.inputEnabled=false;
                               tickmark.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
							   
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
						   absdsjsapi.saveAssessment(saveAsment);
						   
                               var starAnim = starsGroupA.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                   tickmark.events.onInputDown.removeAll();  
                                   questgroupA=this.add.group();
                                   questgroupA.add(pinkmug_shadow);
                                   questgroupA.add(glass_shadow);
                                   questgroupA.add(pinkmug);                   
                                   questgroupA.add(glass);
                                   questgroupA.add(glass_graphics);
                                   questgroupA.add(tickmark);
                                   questgroupA.add(box);
                                   var tween = this.add.tween(questgroupA);
                                   tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                   tween.onComplete.add(function(){   
                                    this.nextquestion();
                                   },this);
                               },this);
                           },this);
						   AnsTimerCount=0;
                        }
                        else//less than 7
                        {
                            waterFillingSound.play();
                        }
                        boxtext=boxtext.setText(pinkmugincr);
                        box.addChild(boxtext);
                        pinkmug.frameName="<Group>_13 instance 1000"+pinkmugincr;
                    } 
            }
        
            if(target.name=="spoon")
            {
                ClickSound.play();
                sodaincr++;
                if(sodaincr>10)
                    {
                       waudio.play(); 
                       shake.shake(10,soda);  
                       target.inputEnabled=false;
                       spoon_graphics2.inputEnabled=false;
                       spoon_graphics3.inputEnabled=false; 
                       tickmark.inputEnabled=true;
                       tickmark.input.useHandCursor = true;
                       tickmark.events.onInputDown.removeAll(); 
                       tickmark.events.onInputDown.add(function(){
                           tickmark.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
						   
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
						   absdsjsapi.saveAssessment(saveAsment);
						   
                           var starAnim = starsGroupA.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               tickmark.events.onInputDown.removeAll();  
                               questgroupA=this.add.group();
                               questgroupA.add(soda_shadow);
                               questgroupA.add(spoon_shadow);
                               questgroupA.add(soda);                   
                               questgroupA.add(spoon);
                               questgroupA.add(spoon_graphics1);
                               questgroupA.add(spoon_graphics2);
                               questgroupA.add(spoon_graphics3);
                               questgroupA.add(tickmark);
                               questgroupA.add(box);
                               var tween = this.add.tween(questgroupA);
                               tween.to({ x: -1000}, 0, 'Linear', true, 0);
                               tween.onComplete.add(function(){   
                                this.nextquestion();
                               },this);
                           },this);
                       },this);    
					   AnsTimerCount=0;
                    }
                else
                    {
                        if(sodaincr==10)
                            {
                                waterFillingSound.stop();
                                watersplash.play();
                                tickmark.inputEnabled=true;
                                tickmark.input.useHandCursor = true;
                                tickmark.frameName='Symbol 16 instance 10001';
                                tickmark.events.onInputDown.removeAll(); 
                                tickmark.events.onInputDown.add(function(){
                                    speakerBtn.inputEnabled=false;
                                   tickmark.inputEnabled=false;
                                   ClickSound.play();
                                   celebr.play();
								   
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
						   absdsjsapi.saveAssessment(saveAsment);
						   
                                   var starAnim = starsGroupA.getChildAt(count1);
                                   starAnim.smoothed = false;
                                   var anim = starAnim.animations.add('star');
                                   anim.play();
                                   count1++;
                                   this.time.events.add(1000,function(){
                                      tickmark.events.onInputDown.removeAll();  
                                       questgroupA=this.add.group();
                                       questgroupA.add(soda_shadow);
                                       questgroupA.add(spoon_shadow);
                                       questgroupA.add(soda);                   
                                       questgroupA.add(spoon);
                                       questgroupA.add(spoon_graphics1);
                                       questgroupA.add(spoon_graphics2);
                                       questgroupA.add(spoon_graphics3);
                                       questgroupA.add(tickmark);
                                       questgroupA.add(box);
                                       var tween = this.add.tween(questgroupA);
                                       tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                       tween.onComplete.add(function(){  
                                        this.nextquestion();
                                       },this);
                                   },this);
                               },this);  
								AnsTimerCount=0;
                                boxtext.x=20;
                                boxtext=boxtext.setText(sodaincr);
                            }
                        else//less than 10
                            {
                                waterFillingSound.play();
                                boxtext=boxtext.setText(sodaincr);
                            }
                        
                        box.addChild(boxtext);
                        if(sodaincr<=9)
                            soda.frameName="Symbol 7 instance 1000"+sodaincr;
                        else
                            soda.frameName="Symbol 7 instance 100"+sodaincr;
                    } 
            }
        
           if(target.name=="bottleblue")
            {
                ClickSound.play();
                canincr++;
                if(canincr>2)
                    {
                       waudio.play(); 
                       shake.shake(10,can);   
                       bottleblue.frameName='Symbol 9 instance 10001';
                       target.inputEnabled=false;
                       tickmark.inputEnabled=true;
                       tickmark.input.useHandCursor = true;
                       tickmark.events.onInputDown.removeAll(); 
                       tickmark.events.onInputDown.add(function(){
                           tickmark.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
						   
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
						   absdsjsapi.saveAssessment(saveAsment);
						   
                           var starAnim = starsGroupA.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               tickmark.events.onInputDown.removeAll();  
                               questgroupA=this.add.group();
                               questgroupA.add(bottleblue_shadow);
                               questgroupA.add(can_shadow);
                               questgroupA.add(bottleblue);                   
                               questgroupA.add(can);
                               questgroupA.add(bottleblue_graphics);
                               questgroupA.add(tickmark);
                               questgroupA.add(box);
                               var tween = this.add.tween(questgroupA);
                               tween.to({ x: -1000}, 0, 'Linear', true, 0);
                               tween.onComplete.add(function(){   
                                this.nextquestion();
                               },this);
                           },this);
                       },this);  
						AnsTimerCount=0;					   
                    }
                else
                    {
                        if(canincr==2)
                        {
                            waterFillingSound.stop();
                            can.frameName="a1";
                            watersplash.play();
                            tickmark.inputEnabled=true;
                            tickmark.input.useHandCursor = true;
                            tickmark.frameName='Symbol 16 instance 10001';
                            tickmark.events.onInputDown.removeAll(); 
                            tickmark.events.onInputDown.add(function(){
                               speakerBtn.inputEnabled=false;
                               tickmark.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
							   
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
							
						   var currentTime = window.timeSaveFunc();
							var saveAsment = 
							{ 
								id_game_play: window.gameid,
								id_question:  window.gameid,  
								answer_given: "Yes",
								time2answer: AnsTimerCount,
								attempts: noofAttempts,
								date_time_event: currentTime, 
								access_token: window.acctkn 
							}
						   absdsjsapi.saveAssessment(saveAsment);
						   
                               var starAnim = starsGroupA.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                   tickmark.events.onInputDown.removeAll();  
                                   questgroupA=this.add.group();
                                   questgroupA.add(bottleblue_shadow);
                                   questgroupA.add(can_shadow);
                                   questgroupA.add(bottleblue);                   
                                   questgroupA.add(can);
                                   questgroupA.add(bottleblue_graphics);
                                   questgroupA.add(tickmark);
                                   questgroupA.add(box);
                                   var tween = this.add.tween(questgroupA);
                                   tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                   tween.onComplete.add(function(){ 
                                    this.nextquestion();
                                   },this);
                               },this);
                           },this); 
						   AnsTimerCount=0;
                        }
                        else//less than 2
                        {
                            waterFillingSound.play();
                            can.frameName="<Group>_51 copy instance 1000"+(canincr+8);
                        }
                        boxtext=boxtext.setText(canincr);
                        box.addChild(boxtext);
                        
                    } 
            }
        
            if(target.name=="cup")
            {
                ClickSound.play();
                orangecanincr++;
                if(orangecanincr>5)
                    {
                       waudio.play(); 
                       shake.shake(10,orangecan);
                       cup.frameName='<Group>_4_0 instance 10001';
                       target.inputEnabled=false;
                       tickmark.inputEnabled=true;
                       tickmark.input.useHandCursor = true;
                       tickmark.events.onInputDown.removeAll(); 
                       tickmark.events.onInputDown.add(function(){
                           tickmark.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
						   
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
						   absdsjsapi.saveAssessment(saveAsment);
						   
                           var starAnim = starsGroupA.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               tickmark.events.onInputDown.removeAll();  
                               questgroupA=this.add.group();
                               questgroupA.add(orangecan_shadow);
                               questgroupA.add(cup_shadow);
                               questgroupA.add(cup);                   
                               questgroupA.add(orangecan);
                               questgroupA.add(cup_graphics1);
                               questgroupA.add(cup_graphics2);
                               questgroupA.add(tickmark);
                               questgroupA.add(box);
                               var tween = this.add.tween(questgroupA);
                               tween.to({ x: -1000}, 0, 'Linear', true, 0);
                               tween.onComplete.add(function(){    
                                this.nextquestion();
                               },this);
                           },this);
                       },this);  
						AnsTimerCount=0;					   
                    }
                else
                    {
                        if(orangecanincr==5)
                        {
                            waterFillingSound.stop();
                            orangecan.frameName="a1";
                            watersplash.play();
                            tickmark.inputEnabled=true;
                            tickmark.input.useHandCursor = true;
                            tickmark.frameName='Symbol 16 instance 10001';
                            tickmark.events.onInputDown.removeAll(); 
                            tickmark.events.onInputDown.add(function(){
                               speakerBtn.inputEnabled=false;
                               tickmark.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
							   
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
						   absdsjsapi.saveAssessment(saveAsment);
						   
                               var starAnim = starsGroupA.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                   tickmark.events.onInputDown.removeAll();  
                                   questgroupA=this.add.group();
                                   questgroupA.add(orangecan_shadow);
                                   questgroupA.add(cup_shadow);
                                   questgroupA.add(cup);                   
                                   questgroupA.add(orangecan);
                                   questgroupA.add(cup_graphics1);
                                   questgroupA.add(cup_graphics2);
                                   questgroupA.add(tickmark);
                                   questgroupA.add(box);
                                   var tween = this.add.tween(questgroupA);
                                   tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                   tween.onComplete.add(function(){
                                    this.nextquestion();
                                   },this);
                               },this);
                           },this);
						   AnsTimerCount=0;
                        }
                        else//less than 5
                        {
                            waterFillingSound.play();
                            orangecan.frameName="<Group>_57 copy instance 1000"+(orangecanincr+2);
                        }
                        boxtext=boxtext.setText(orangecanincr);
                        box.addChild(boxtext);
                        
                    } 
            }
        
            if(target.name=="cupreverse")
            {
                ClickSound.play();
                drumincr++;
                if(drumincr>3)
                    {
                       waudio.play(); 
                       shake.shake(10,drum);
                       cupreverse.frameName='<Group>_47 instance 10001';
                       target.inputEnabled=false;
                       tickmark.inputEnabled=true;
                       tickmark.input.useHandCursor = true;
                       tickmark.events.onInputDown.removeAll(); 
                       tickmark.events.onInputDown.add(function(){
                           tickmark.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
						   
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
						   absdsjsapi.saveAssessment(saveAsment);
						   
                           var starAnim = starsGroupA.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               tickmark.events.onInputDown.removeAll();  
                               questgroupA=this.add.group();
                               questgroupA.add(drum_shadow);
                               questgroupA.add(cupreverse_shadow);
                               questgroupA.add(cupreverse);                   
                               questgroupA.add(drum);
                               questgroupA.add(cupreverse_graphics);
                               questgroupA.add(tickmark);
                               questgroupA.add(box);
                               var tween = this.add.tween(questgroupA);
                               tween.to({ x: -1000}, 0, 'Linear', true, 0);
                               tween.onComplete.add(function(){  
                                this.nextquestion();
                               },this);
                           },this);
                       },this);
					   AnsTimerCount=0;
                    }
                else
                    {
                        if(drumincr==3)
                        {
                            waterFillingSound.stop();
                            drum.frameName="<Group>_450 copy instance 10011";
                            watersplash.play();
                            tickmark.inputEnabled=true;
                            tickmark.input.useHandCursor = true;
                            tickmark.frameName='Symbol 16 instance 10001';
                            tickmark.events.onInputDown.removeAll(); 
                            tickmark.events.onInputDown.add(function(){
                               speakerBtn.inputEnabled=false;
                               tickmark.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
							   
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
						   absdsjsapi.saveAssessment(saveAsment);
						   
                               var starAnim = starsGroupA.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                  tickmark.events.onInputDown.removeAll();  
                                   questgroupA=this.add.group();
                                   questgroupA.add(drum_shadow);
                                   questgroupA.add(cupreverse_shadow);
                                   questgroupA.add(cupreverse);                   
                                   questgroupA.add(drum);
                                   questgroupA.add(cupreverse_graphics);
                                   questgroupA.add(tickmark);
                                   questgroupA.add(box);
                                   var tween = this.add.tween(questgroupA);
                                   tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                   tween.onComplete.add(function(){  
                                    this.nextquestion();
                                   },this);
                               },this);
                           },this);
						   AnsTimerCount=0;
                        }
                        else//less than 3
                        {
                            waterFillingSound.play();
                            drum.frameName="<Group>_450 copy instance 1000"+(drumincr*4);   
                        }
                        boxtext=boxtext.setText(drumincr);
                        box.addChild(boxtext);
                             
                    } 
            }
			
    },
    
    nextquestion:function(){
        if(qnoA<6)
            {
                this.getQuestion();
            }
            else
            {
                //console.log("finished 4.2a");
                this.stopAllVoice();
				this.state.start('grade42A_Score');
            }
    },
    
    update:function(){
       
    },
    
    getVoice:function(question){
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
                        Eng_42A1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_42A1.play();
                    else
                        Kan_42A1.play();
                    break;
        }
    }
       
    
    
    
    
            
};