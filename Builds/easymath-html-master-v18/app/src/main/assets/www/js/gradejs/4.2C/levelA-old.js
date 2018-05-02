Game.grade4_2Clevel1=function(){};

var background;
var questiongroupC;
var count;
var count1;
var qnoC;
var questarrayC=new Array();
var starsGroupC;
var speakerBtn;
var questgroup;
var potcincr=0,drumcincr=0,sodacincr=0,orangemugcincr=0,bottlecincr=0,orangecancincr=0,greenbottlecincr=0,pinkbucketcincr=0,redjugcincr=0,yellowctcincr=0,nipplecincr=0,glassincr=0,bluebottlecincr=0,greencupcincr=0,greencupreverseincr=0,redjugc2incr=0,redjugc2incr=0,greencupreverseincr=0;
var box,boxb;
var boxtext;
var tickmarkc;
var tickmark1,tickmark2;
var potc_graphics,drumc_graphics,sodac1_graphics,sodac2_graphics,orangemugc1_graphics,orangemugc2_graphics;
var bottlec1_graphics,bottlec2_graphics,orangecan_graphics,greenbottlec_graphics,pinkbucketc_graphics;
var yellowctc1_graphics,yellowctc2_graphics,redjugc_graphics,nipplec1_graphics,nipplec2_graphics,glass_graphics;
var greencupc_graphics,bluebottlec_graphics,redjugc2_graphics,greencupreverse_graphics;
var newpotcincr=1,newbottleincr=1,newyellowctcincr=1,newnipplecincr=1,newbluebottlecincr=1,newgreencupcincr=1,newgreencupreverseincr=1;

var noofAttempts;
var timer;
var AnsTimerCount;

Game.grade4_2Clevel1.prototype={
	create:function(game){
		
		noofAttempts=0;
		AnsTimerCount=0;
		
        qnoC=0;
        count1=0;
        questarrayC=[1,2,3,4,5,6,7,8];
        questarrayC = this.shuffle(questarrayC);
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
			this.getVoice(qnoC);
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
			this.getVoice(qnoC);
			speakerBtn.inputEnabled = false;
			this.time.events.add(2000, function(){speakerBtn.inputEnabled = true;}, this);
		},this);
		
        this.getQuestion();
    },
    
    
    generateStarsForTheScene:function(count)
	{
		starsGroupC = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroupC.create(this.world.centerX-15, 10,'CommonStarAnim');
			for(var j =0;j<i;j++)
			{
				if(starsGroupC.getChildAt(j))
				{
					starsGroupC.getChildAt(j).x-=15;
					starsGroupC.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
    speakeron:function(){
        this.stopAllVoice();
        switch(questarrayC[qnoC-1])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:if(window.languageSelected=="English")
                        Eng_42C1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_42C1.play();
                    else
                        Kan_42C1.play();
                    break;
            
        }
    },
    
    stopAllVoice:function(){
        Eng_42C1.stop();
        Hin_42C1.stop();
        Kan_42C1.stop();
        
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
		timer = this.time.create(false);
		timer.loop(1000, function(){
			AnsTimerCount++;
		}, this);

		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		timer.start();
		
        speakerBtn.inputEnabled=true;
        speakerBtn.input.useHandCursor = true;
        this.stopAllVoice();
		switch(questarrayC[qnoC])
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
        qnoC++;
        greenpotc_shadow = this.add.sprite(97,380,'Level42A_common_shadow');
        greenpotc_shadow.width-=120;
        drumc_shadow = this.add.sprite(350,375,'Level42A_common_shadow');
        drumc_shadow.width-=65;
        drumc_shadow.height+=10;
        syntexc_shadow = this.add.sprite(633,383,'Level42A_common_shadow');
        syntexc_shadow.width-=50;
        greenpotc = this.add.sprite(65,165,'Level42A_pot2','<Group>_90 copy instance 10000');
        greenpotc.width+=50;
        greenpotc.height+=50;
        greenpotcanim=greenpotc.animations.add('greenpotc');
        maskbg = this.add.sprite(-20,52,'Level42A_maskbg');
        maskbg.height-=117;
        drumc = this.add.sprite(318,102,'Level42A_drum2','<Group>_450 copy instance 10000');
        drumc.width+=70;
        drumc.height+=40;
        drumc.inputEnabled=true;
        drumcanim=drumc.animations.add('drumc');
        syntexc = this.add.sprite(612,113,'Level42A_tank2','<Group>_449 copy instance 10001');
        syntexcanim=syntexc.animations.add('syntexc');
        syntexc.inputEnabled=false;
        tickmarkc = this.add.sprite(850,300,'Level42A_tick','Symbol 16 instance 10000');
        tickmarkc.width+=10;
        tickmarkc.height+=10;
        
        box1 = this.add.sprite(120,476,'Level42A_box');
        box1.scale.setTo(0.85,0.90);
        boxtext1=this.add.text(30,20,potcincr);
        boxtext1.fill='#65B4C3';
        box1.addChild(boxtext1);
        
        box2 = this.add.sprite(400,476,'Level42A_box');
        box2.scale.setTo(0.85,0.90);
        boxtext2=this.add.text(30,20,drumcincr);
        boxtext2.fill='#65B4C3';
        box2.addChild(boxtext2);
        
        drumc_graphics = this.add.graphics(410,200);
		drumc_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		drumc_graphics.beginFill(0xFF0000, 1);
		drumc_graphics.drawRect(-50, -10, 153,195);
		drumc_graphics.boundsPadding = 0;
		drumc_graphics.alpha=0;
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(13000,function(){
                drumc_graphics.inputEnabled = true;
                drumc_graphics.input.useHandCursor = true;
                drumc_graphics.name="drumc";
                drumc_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
            drumc_graphics.inputEnabled = true;
            drumc_graphics.input.useHandCursor = true;
            drumc_graphics.name="drumc";
            drumc_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        potc_graphics = this.add.graphics(204,327);
		potc_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		potc_graphics.beginFill(0xFF0000, 1);
		potc_graphics.drawCircle(-50, -10, 130);
		potc_graphics.boundsPadding = 0;
		potc_graphics.alpha=0;
        potc_graphics.inputEnabled = false;
        potc_graphics.name="potc";
        potc_graphics.events.onInputDown.add(this.triggerevent,this);
        
        boxb = this.add.sprite(598,120,'Level42A_boxb');
        boxb.height+=20;
        boxb.visible=false;
        this.questionaftertrigger('potc','before');
    },
    
    question2:function()
    {
        qnoC++;
        sodac_shadow = this.add.sprite(115,383,'Level42A_common_shadow');
        sodac_shadow.width-=140;
        orangemugc_shadow = this.add.sprite(378,383,'Level42A_common_shadow');
        orangemugc_shadow.width-=145;
        vessel1c_shadow = this.add.sprite(634,384,'Level42A_common_shadow');
        vessel1c_shadow.width-=50;
        sodac = this.add.sprite(77,155,'Level42A_bottleB','<Group>_74 copy instance 10000');
        sodac.width+=40;
        sodac.height+=40;
        sodacanim=sodac.animations.add('sodac');
        maskbg = this.add.sprite(-20,52,'Level42A_maskbg');
        maskbg.height-=117;
        orangemugc = this.add.sprite(334,105,'Level42A_jugB','<Group>_57 copy instance 10000');
        orangemugc.width+=70;
        orangemugc.height+=70;
        orangemugc.inputEnabled=true;
        orangemugcanim=orangemugc.animations.add('orangemugc');
        vessel1c = this.add.sprite(583,174,'Level42A_cookerB','<Group>_73 copy instance 10001');
        vessel1canim=vessel1c.animations.add('vessel1c');
        vessel1c.inputEnabled=false;
        tickmarkc = this.add.sprite(850,300,'Level42A_tick','Symbol 16 instance 10000');
        tickmarkc.width+=10;
        tickmarkc.height+=10;
        
        box1 = this.add.sprite(130,476,'Level42A_box');
        box1.scale.setTo(0.85,0.90);
        boxtext1=this.add.text(30,20,sodacincr);
        boxtext1.fill='#65B4C3';
        box1.addChild(boxtext1);
        
        box2 = this.add.sprite(390,476,'Level42A_box');
        box2.scale.setTo(0.85,0.90);
        boxtext2=this.add.text(30,20,orangemugcincr);
        boxtext2.fill='#65B4C3';
        box2.addChild(boxtext2);
        
        sodac1_graphics = this.add.graphics(182,290);
		sodac1_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		sodac1_graphics.beginFill(0xFF0000, 1);
		sodac1_graphics.drawRect(-50, -10, 62,110);
		sodac1_graphics.boundsPadding = 0;
		sodac1_graphics.alpha=0;
        sodac1_graphics.inputEnabled = false;
        sodac1_graphics.name="sodac";
        sodac1_graphics.events.onInputDown.add(this.triggerevent,this);
        
        sodac2_graphics = this.add.graphics(195,230);
		sodac2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		sodac2_graphics.beginFill(0xFF0000, 1);
		sodac2_graphics.drawRect(-50, -10, 35,60);
		sodac2_graphics.boundsPadding = 0;
		sodac2_graphics.alpha=0;
        sodac2_graphics.inputEnabled = false;
        sodac2_graphics.name="sodac";
        sodac2_graphics.events.onInputDown.add(this.triggerevent,this);
        
        orangemugc1_graphics = this.add.graphics(449,250);
		orangemugc1_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		orangemugc1_graphics.beginFill(0xFF0000, 1);
		orangemugc1_graphics.drawRect(-50, -10, 70,150);
		orangemugc1_graphics.boundsPadding = 0;
		orangemugc1_graphics.alpha=0;
        
        orangemugc2_graphics = this.add.graphics(463,188);
		orangemugc2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		orangemugc2_graphics.beginFill(0xFF0000, 1);
		orangemugc2_graphics.drawRect(-50, -10, 40,60);
		orangemugc2_graphics.boundsPadding = 0;
		orangemugc2_graphics.alpha=0;
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(13000,function(){
                orangemugc1_graphics.inputEnabled = true;
                orangemugc1_graphics.input.useHandCursor = true;
                orangemugc1_graphics.name="orangemugc";
                orangemugc1_graphics.events.onInputDown.add(this.triggerevent,this);
                orangemugc2_graphics.inputEnabled = true;
                orangemugc2_graphics.input.useHandCursor = true;
                orangemugc2_graphics.name="orangemugc";
                orangemugc2_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
            orangemugc1_graphics.inputEnabled = true;
            orangemugc1_graphics.input.useHandCursor = true;
            orangemugc1_graphics.name="orangemugc";
            orangemugc1_graphics.events.onInputDown.add(this.triggerevent,this);
            orangemugc2_graphics.inputEnabled = true;
            orangemugc2_graphics.input.useHandCursor = true;
            orangemugc2_graphics.name="orangemugc";
            orangemugc2_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        boxb = this.add.sprite(598,120,'Level42A_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('sodac','before');
    },
    
    question3:function()
    {
        qnoC++;
        orangecanc_shadow = this.add.sprite(65,380,'Level42A_common_shadow');
        orangecanc_shadow.width-=80;
        bottlec_shadow = this.add.sprite(400,380,'Level42A_common_shadow');
        bottlec_shadow.width-=150;
        //bottlec_shadow.height+=10;
        mugc_shadow = this.add.sprite(626,380,'Level42A_common_shadow');
        mugc_shadow.width-=55;
        orangecanc = this.add.sprite(27,130,'Level42A_canB','<Group>_51 copy instance 10000');
        orangecanc.width+=10;
        orangecanc.height+=10;
        orangecancanim=orangecanc.animations.add('orangecanc');
        maskbg = this.add.sprite(-20,52,'Level42A_maskbg');
        maskbg.height-=117;
        bottlec = this.add.sprite(385,154,'Level42A_bottlec','<Group>_452 instance 10001');
        bottlec.width+=40;
        bottlec.height+=70;
        bottlec.inputEnabled=true;
        bottlecanim=bottlec.animations.add('bottlec');
        mugc = this.add.sprite(593,99,'Level42A_mugB','<Group>_453 copy instance 10001');
        mugcanim=mugc.animations.add('mugc');
        mugc.inputEnabled=false;
        tickmarkc = this.add.sprite(850,300,'Level42A_tick','Symbol 16 instance 10000');
        tickmarkc.width+=10;
        tickmarkc.height+=10;
        
        box1 = this.add.sprite(120,476,'Level42A_box');
        box1.scale.setTo(0.85,0.90);
        boxtext1=this.add.text(30,20,potcincr);
        boxtext1.fill='#65B4C3';
        box1.addChild(boxtext1);
        
        box2 = this.add.sprite(410,476,'Level42A_box');
        box2.scale.setTo(0.85,0.90);
        boxtext2=this.add.text(30,20,drumcincr);
        boxtext2.fill='#65B4C3';
        box2.addChild(boxtext2);
        
        bottlec1_graphics = this.add.graphics(460,225);
		bottlec1_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		bottlec1_graphics.beginFill(0xFF0000, 1);
		bottlec1_graphics.drawRect(-50, -10, 70,170);
		bottlec1_graphics.boundsPadding = 0;
		bottlec1_graphics.alpha=0;
        
        bottlec2_graphics = this.add.graphics(495,220);
		bottlec2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		bottlec2_graphics.beginFill(0xFF0000, 1);
		bottlec2_graphics.drawCircle(-50, -10, 40,10);
		bottlec2_graphics.boundsPadding = 0;
		bottlec2_graphics.alpha=0;
        
        orangecanc_graphics = this.add.graphics(106,225);
		orangecanc_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		orangecanc_graphics.beginFill(0xFF0000, 1);
		orangecanc_graphics.drawRect(-50, -10, 165,170);
		orangecanc_graphics.boundsPadding = 0;
		orangecanc_graphics.alpha=0;
        orangecanc_graphics.inputEnabled = false;
        orangecanc_graphics.name="orangecanc";
        orangecanc_graphics.events.onInputDown.add(this.triggerevent,this);
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(13000,function(){
                bottlec1_graphics.inputEnabled = true;
                bottlec1_graphics.input.useHandCursor = true;
                bottlec1_graphics.name="bottlec";
                bottlec1_graphics.events.onInputDown.add(this.triggerevent,this);
                bottlec2_graphics.inputEnabled = true;
                bottlec2_graphics.input.useHandCursor = true;
                bottlec2_graphics.name="bottlec";
                bottlec2_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                bottlec1_graphics.inputEnabled = true;
                bottlec1_graphics.input.useHandCursor = true;
                bottlec1_graphics.name="bottlec";
                bottlec1_graphics.events.onInputDown.add(this.triggerevent,this);
                bottlec2_graphics.inputEnabled = true;
                bottlec2_graphics.input.useHandCursor = true;
                bottlec2_graphics.name="bottlec";
                bottlec2_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        boxb = this.add.sprite(598,120,'Level42A_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('orangecanc','before');
        
    },
    
    question4:function()
    {
        qnoC++;
        pinkbucketc_shadow = this.add.sprite(107,373,'Level42A_common_shadow');
        pinkbucketc_shadow.width-=155;
        greenbottlec_shadow = this.add.sprite(382,375,'Level42A_common_shadow');
        greenbottlec_shadow.width-=130;
        //bottlec_shadow.height+=10;
        bluecanc_shadow = this.add.sprite(635,375,'Level42A_common_shadow');
        bluecanc_shadow.width-=55;
        pinkbucketc = this.add.sprite(86,255,'Level42A_pinkbucketc','<Group>_460 instance 10000');
        pinkbucketc.width-=40;
        pinkbucketc.height-=40;
        pinkbucketcanim=pinkbucketc.animations.add('pinkbucketc');
        maskbg = this.add.sprite(-20,52,'Level42A_maskbg');
        maskbg.height-=117;
        greenbottlec = this.add.sprite(363,128,'Level42A_greenbot22','<Group>_413 copy instance 10000');
        greenbottlec.width+=15;
        greenbottlec.height+=20;
        greenbottlec.inputEnabled=true;
        greenbottlecanim=greenbottlec.animations.add('greenbottlec');
        bluecanc = this.add.sprite(612,135,'Level42A_canB','<Group>_51 copy instance 10001');
        bluecancanim=bluecanc.animations.add('bluecanc');
        bluecanc.inputEnabled=false;
        tickmarkc = this.add.sprite(850,300,'Level42A_tick','Symbol 16 instance 10000');
        tickmarkc.width+=10;
        tickmarkc.height+=10;
        
        box1 = this.add.sprite(120,476,'Level42A_box');
        box1.scale.setTo(0.85,0.90);
        boxtext1=this.add.text(30,20,potcincr);
        boxtext1.fill='#65B4C3';
        box1.addChild(boxtext1);
        
        box2 = this.add.sprite(410,476,'Level42A_box');
        box2.scale.setTo(0.85,0.90);
        boxtext2=this.add.text(30,20,drumcincr);
        boxtext2.fill='#65B4C3';
        box2.addChild(boxtext2);
        
        greenbottlec1_graphics = this.add.graphics(450,225);
		greenbottlec1_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		greenbottlec1_graphics.beginFill(0xFF0000, 1);
		greenbottlec1_graphics.drawRect(-50, -10, 70,170);
		greenbottlec1_graphics.boundsPadding = 0;
		greenbottlec1_graphics.alpha=0;
        
        greenbottlec2_graphics = this.add.graphics(485,215);
		greenbottlec2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		greenbottlec2_graphics.beginFill(0xFF0000, 1);
		greenbottlec2_graphics.drawCircle(-50, -10, 40,10);
		greenbottlec2_graphics.boundsPadding = 0;
		greenbottlec2_graphics.alpha=0;
        
        pinkbucketc_graphics = this.add.graphics(158,280);
		pinkbucketc_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		pinkbucketc_graphics.beginFill(0xFF0000, 1);
		pinkbucketc_graphics.drawRect(-50, -10, 75,110);
		pinkbucketc_graphics.boundsPadding = 0;
		pinkbucketc_graphics.alpha=0;
        pinkbucketc_graphics.inputEnabled = false;
        pinkbucketc_graphics.name="pinkbucketc";
        pinkbucketc_graphics.events.onInputDown.add(this.triggerevent,this);
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(13000,function(){
                greenbottlec1_graphics.inputEnabled = true;
                greenbottlec1_graphics.input.useHandCursor = true;
                greenbottlec1_graphics.name="greenbottlec";
                greenbottlec1_graphics.events.onInputDown.add(this.triggerevent,this);
                greenbottlec2_graphics.inputEnabled = true;
                greenbottlec2_graphics.input.useHandCursor = true;
                greenbottlec2_graphics.name="greenbottlec";
                greenbottlec2_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                greenbottlec1_graphics.inputEnabled = true;
                greenbottlec1_graphics.input.useHandCursor = true;
                greenbottlec1_graphics.name="greenbottlec";
                greenbottlec1_graphics.events.onInputDown.add(this.triggerevent,this);
                greenbottlec2_graphics.inputEnabled = true;
                greenbottlec2_graphics.input.useHandCursor = true;
                greenbottlec2_graphics.name="greenbottlec";
                greenbottlec2_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        boxb = this.add.sprite(598,120,'Level42A_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('pinkbucketc','before');
    },
    
    question5:function()
    {
        qnoC++;
        redjugc_shadow = this.add.sprite(102,375,'Level42A_common_shadow');
        redjugc_shadow.width-=130;
        nipplec_shadow = this.add.sprite(397,373,'Level42A_common_shadow');
        nipplec_shadow.width-=170;
        bluebucketc_shadow = this.add.sprite(648,375,'Level42A_common_shadow');
        bluebucketc_shadow.width-=78;
        redjugc = this.add.sprite(65,270,'Level42A_a1');
        redjugc.width+=90;
        redjugc.height+=60;
        redjugcanim=redjugc.animations.add('redjugc');
        maskbg = this.add.sprite(-20,52,'Level42A_maskbg');
        maskbg.height-=117;
        nipplec = this.add.sprite(365,285,'Level42A_a11','<Group>_373 instance 10003');//nipplec
        nipplec.width+=20;
        nipplec.height+=20;
        nipplec.inputEnabled=true;
        nipplecanim=nipplec.animations.add('nipplec');
        bluebucketc = this.add.sprite(596,140,'Level42A_bluebucketc','<Group>_15 instance 10000');
        bluebucketc.width-=70;
        bluebucketc.height-=70;
        bluebucketcanim=bluebucketc.animations.add('bluebucketc');
        bluebucketc.inputEnabled=false;
        tickmarkc = this.add.sprite(850,300,'Level42A_tick','Symbol 16 instance 10000');
        tickmarkc.width+=10;
        tickmarkc.height+=10;
        
        box1 = this.add.sprite(120,476,'Level42A_box');
        box1.scale.setTo(0.85,0.90);
        boxtext1=this.add.text(30,20,potcincr);
        boxtext1.fill='#65B4C3';
        box1.addChild(boxtext1);
        
        box2 = this.add.sprite(400,476,'Level42A_box');
        box2.scale.setTo(0.85,0.90);
        boxtext2=this.add.text(30,20,drumcincr);
        boxtext2.fill='#65B4C3';
        box2.addChild(boxtext2);
        
        nipplec1_graphics = this.add.graphics(454,315);//484,340
		nipplec1_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		nipplec1_graphics.beginFill(0xFF0000, 1);
		nipplec1_graphics.drawRect(-50, -10, 55,80);//80,60
		nipplec1_graphics.boundsPadding = 0;
		nipplec1_graphics.alpha=0;
        
        nipplec2_graphics = this.add.graphics(505,288);//500,304
		nipplec2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		nipplec2_graphics.beginFill(0xFF0000, 1);
		nipplec2_graphics.drawRect(-50, -10, 30,25);//50,37
		nipplec2_graphics.boundsPadding = 0;
		nipplec2_graphics.alpha=0;
        
        redjugc_graphics = this.add.graphics(170,305);
		redjugc_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		redjugc_graphics.beginFill(0xFF0000, 1);
		redjugc_graphics.drawRect(-50, -10, 70,80);
		redjugc_graphics.boundsPadding = 0;
		redjugc_graphics.alpha=0;
        redjugc_graphics.inputEnabled = false;
        redjugc_graphics.name="redjugc";
        redjugc_graphics.events.onInputDown.add(this.triggerevent,this);
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(13000,function(){
                nipplec1_graphics.inputEnabled = true;
                nipplec1_graphics.input.useHandCursor = true;
                nipplec1_graphics.name="nipplec";
                nipplec1_graphics.events.onInputDown.add(this.triggerevent,this);
                nipplec2_graphics.inputEnabled = true;
                nipplec2_graphics.input.useHandCursor = true;
                nipplec2_graphics.name="nipplec";
                nipplec2_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                nipplec1_graphics.inputEnabled = true;
                nipplec1_graphics.input.useHandCursor = true;
                nipplec1_graphics.name="nipplec";
                nipplec1_graphics.events.onInputDown.add(this.triggerevent,this);
                nipplec2_graphics.inputEnabled = true;
                nipplec2_graphics.input.useHandCursor = true;
                nipplec2_graphics.name="nipplec";
                nipplec2_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        boxb = this.add.sprite(598,120,'Level42A_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('redjugc','before');
        
    },
    
    question6:function()
    {
        qnoC++;
        glass_shadow = this.add.sprite(111,375,'Level42A_common_shadow');
        glass_shadow.width-=180;
        yellowctc_shadow = this.add.sprite(382,380,'Level42A_common_shadow');
        yellowctc_shadow.width-=150;
        //bottlec_shadow.height+=10;
        greenmugc_shadow = this.add.sprite(656,383,'Level42A_common_shadow');
        greenmugc_shadow.width-=130;
        glass = this.add.sprite(100,290,'Level42A_glass','<Group>_64 instance 10001');
        glass.width-=20;
        glass.height-=20;
        glassanim=glass.animations.add('glass');
        maskbg = this.add.sprite(-20,52,'Level42A_maskbg');
        maskbg.height-=117;
        yellowctc = this.add.sprite(377,290,'Level42A_yellowctc','Symbol 19 instance 10000');
        yellowctc.width+=10;
        yellowctc.height+=35;
        yellowctc.inputEnabled=true;
        yellowctcanim=yellowctc.animations.add('yellowctc');
        greenmugc = this.add.sprite(612,102,'Level42A_greenmugc','<Group>_57 instance 10000');
        greenmugcanim=greenmugc.animations.add('greenmugc');
        greenmugc.width+=70;
        greenmugc.height+=110;
        greenmugc.inputEnabled=false;
        tickmarkc = this.add.sprite(850,300,'Level42A_tick','Symbol 16 instance 10000');
        tickmarkc.width+=10;
        tickmarkc.height+=10;
        
        box1 = this.add.sprite(110,476,'Level42A_box');
        box1.scale.setTo(0.85,0.90);
        boxtext1=this.add.text(30,20,potcincr);
        boxtext1.fill='#65B4C3';
        box1.addChild(boxtext1);
        
        box2 = this.add.sprite(395,476,'Level42A_box');
        box2.scale.setTo(0.85,0.90);
        boxtext2=this.add.text(30,20,drumcincr);
        boxtext2.fill='#65B4C3';
        box2.addChild(boxtext2);
        
        yellowctc1_graphics = this.add.graphics(434,340);
		yellowctc1_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		yellowctc1_graphics.beginFill(0xFF0000, 1);
		yellowctc1_graphics.drawRect(-50, -10, 80,60);
		yellowctc1_graphics.boundsPadding = 0;
		yellowctc1_graphics.alpha=0;
        
        yellowctc2_graphics = this.add.graphics(450,314);
		yellowctc2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		yellowctc2_graphics.beginFill(0xFF0000, 1);
		yellowctc2_graphics.drawRect(-50, -10, 50,27);
		yellowctc2_graphics.boundsPadding = 0;
		yellowctc2_graphics.alpha=0;
        
        glass_graphics = this.add.graphics(168,315);
		glass_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		glass_graphics.beginFill(0xFF0000, 1);
		glass_graphics.drawRect(-50, -10, 43,75);
		glass_graphics.boundsPadding = 0;
		glass_graphics.alpha=0;
        glass_graphics.inputEnabled = false;
        glass_graphics.name="glass";
        glass_graphics.events.onInputDown.add(this.triggerevent,this);
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(13000,function(){
                yellowctc1_graphics.inputEnabled = true;
                yellowctc1_graphics.input.useHandCursor = true;
                yellowctc1_graphics.name="yellowctc";
                yellowctc1_graphics.events.onInputDown.add(this.triggerevent,this);
                yellowctc2_graphics.inputEnabled = true;
                yellowctc2_graphics.input.useHandCursor = true;
                yellowctc2_graphics.name="yellowctc";
                yellowctc2_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                yellowctc1_graphics.inputEnabled = true;
                yellowctc1_graphics.input.useHandCursor = true;
                yellowctc1_graphics.name="yellowctc";
                yellowctc1_graphics.events.onInputDown.add(this.triggerevent,this);
                yellowctc2_graphics.inputEnabled = true;
                yellowctc2_graphics.input.useHandCursor = true;
                yellowctc2_graphics.name="yellowctc";
                yellowctc2_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        boxb = this.add.sprite(598,120,'Level42A_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('glass','before');
    },
    
    question7:function()
    {
        qnoC++;
        greencupc_shadow = this.add.sprite(102,377,'Level42A_common_shadow');
        greencupc_shadow.width-=170;
        bluebottlec_shadow = this.add.sprite(369,375,'Level42A_common_shadow');
        bluebottlec_shadow.width-=130;
        //bottlec_shadow.height+=10;
        vessel2c_shadow = this.add.sprite(640,373,'Level42A_common_shadow');
        vessel2c_shadow.width-=70;
        greencupc = this.add.sprite(32,294,'Level42A_coffeecup');
        greencupc.width+=80;
        greencupc.height+=40;
        greencupcanim=greencupc.animations.add('greencupc');
        maskbg = this.add.sprite(-20,52,'Level42A_maskbg');
        maskbg.height-=117;
        bluebottlec = this.add.sprite(350,135,'Level42A_bluebottlec','<Group>_413 instance 10001');
        bluebottlec.width+=60;
        bluebottlec.height+=70;
        bluebottlec.inputEnabled=true;
        bluebottlecanim=bluebottlec.animations.add('bluebottlec');
        vessel2c = this.add.sprite(580,103,'Level42A_vessel2c','<Group>_73 instance 10000');
        vessel2canim=vessel2c.animations.add('vessel2c');
        vessel2c.height+=150;
        vessel2c.inputEnabled=false;
        tickmarkc = this.add.sprite(850,300,'Level42A_tick','Symbol 16 instance 10000');
        tickmarkc.width+=10;
        tickmarkc.height+=10;
        
        box1 = this.add.sprite(110,476,'Level42A_box');
        box1.scale.setTo(0.85,0.90);
        boxtext1=this.add.text(30,20,potcincr);
        boxtext1.fill='#65B4C3';
        box1.addChild(boxtext1);
        
        box2 = this.add.sprite(395,476,'Level42A_box');
        box2.scale.setTo(0.85,0.90);
        boxtext2=this.add.text(30,20,drumcincr);
        boxtext2.fill='#65B4C3';
        box2.addChild(boxtext2);
        
        bluebottlec_graphics = this.add.graphics(435,203);
		bluebottlec_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		bluebottlec_graphics.beginFill(0xFF0000, 1);
		bluebottlec_graphics.drawRect(-50, -10, 75,190);
		bluebottlec_graphics.boundsPadding = 0;
		bluebottlec_graphics.alpha=0;
        
        greencupc_graphics = this.add.graphics(188,365);
		greencupc_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		greencupc_graphics.beginFill(0xFF0000, 1);
		greencupc_graphics.drawCircle(-50, -10,62);
		greencupc_graphics.boundsPadding = 0;
		greencupc_graphics.alpha=0;
        greencupc_graphics.inputEnabled = false;
        greencupc_graphics.name="greencupc";
        greencupc_graphics.events.onInputDown.add(this.triggerevent,this);
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(13000,function(){
                bluebottlec_graphics.inputEnabled = true;
                bluebottlec_graphics.input.useHandCursor = true;
                bluebottlec_graphics.name="bluebottlec";
                bluebottlec_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                bluebottlec_graphics.inputEnabled = true;
                bluebottlec_graphics.input.useHandCursor = true;
                bluebottlec_graphics.name="bluebottlec";
                bluebottlec_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        boxb = this.add.sprite(598,120,'Level42A_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('greencupc','before');
    },
    
    question8:function()
    {
        qnoC++;
        greencupreverse_shadow = this.add.sprite(108,378,'Level42A_common_shadow');
        greencupreverse_shadow.width-=110;
        redjugc2_shadow = this.add.sprite(377,380,'Level42A_common_shadow');
        redjugc2_shadow.width-=150;
        //bottlec_shadow.height+=10;
        bluepotc_shadow = this.add.sprite(652,383,'Level42A_common_shadow');
        bluepotc_shadow.width-=80;
        greencupreverse = this.add.sprite(40,253,'Level42A_greena1');
        greencupreverse.width+=150;
        greencupreverse.height+=100;
        greencupreverseanim=greencupreverse.animations.add('greencupreverse');
        maskbg = this.add.sprite(-20,52,'Level42A_maskbg');
        maskbg.height-=117;
        redjugc2 = this.add.sprite(328,265,'Level42A_a1');
        redjugc2.width+=90;
        redjugc2.height+=70;
        redjugc2.inputEnabled=true;
        redjugc2anim=redjugc2.animations.add('redjugc2');
        bluepotc = this.add.sprite(610,120,'Level42A_potsplashc','<Group>_90 instance 10001');
        bluepotcanim=bluepotc.animations.add('bluepotc');
        bluepotc.width-=20;
        bluepotc.height-=50;
        bluepotc.inputEnabled=false;
        tickmarkc = this.add.sprite(850,300,'Level42A_tick','Symbol 16 instance 10000');
        tickmarkc.width+=10;
        tickmarkc.height+=10;
        
        box1 = this.add.sprite(140,476,'Level42A_box');
        box1.scale.setTo(0.85,0.90);
        boxtext1=this.add.text(30,20,greencupreverseincr);
        boxtext1.fill='#65B4C3';
        box1.addChild(boxtext1);
        
        box2 = this.add.sprite(390,476,'Level42A_box');
        box2.scale.setTo(0.85,0.90);
        boxtext2=this.add.text(30,20,redjugc2incr);
        boxtext2.fill='#65B4C3';
        box2.addChild(boxtext2);
        
        redjugc2_graphics = this.add.graphics(429,295);
		redjugc2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		redjugc2_graphics.beginFill(0xFF0000, 1);
		redjugc2_graphics.drawRect(-50, -10, 75,100);
		redjugc2_graphics.boundsPadding = 0;
		redjugc2_graphics.alpha=0;
        
        greencupreverse_graphics = this.add.graphics(180,295);
		greencupreverse_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		greencupreverse_graphics.beginFill(0xFF0000, 1);
		greencupreverse_graphics.drawRect(-50, -10,85,95);
		greencupreverse_graphics.boundsPadding = 0;
		greencupreverse_graphics.alpha=0;
        greencupreverse_graphics.inputEnabled = false;
        greencupreverse_graphics.name="greencupreverse";
        greencupreverse_graphics.events.onInputDown.add(this.triggerevent,this);
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(13000,function(){
                redjugc2_graphics.inputEnabled = true;
                redjugc2_graphics.input.useHandCursor = true;
                redjugc2_graphics.name="redjugc2";
                redjugc2_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                redjugc2_graphics.inputEnabled = true;
                redjugc2_graphics.input.useHandCursor = true;
                redjugc2_graphics.name="redjugc2";
                redjugc2_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        boxb = this.add.sprite(598,120,'Level42A_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('greencupreverse','before');
    },
    triggerevent:function(target){
        	
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
			
        if(target.name=="drumc")
            {
                ClickSound.play();
                drumcincr++;
                if(drumcincr>2)
                    {
                       waudio.play();
                       shake.shake(10,syntexc); 
                       syntexc.frameName="<Group>_449 copy instance 10001";
                    }
                else
                    {
                        if(drumcincr==2)
                        {
                            
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            syntexc.frameName="a2";
                            drumc_graphics.inputEnabled=false; 
                            this.time.events.add(2000,function(){
                                watersplash.stop();
                                maskbg.kill();
                                potc_graphics.inputEnabled = true;
                                potc_graphics.input.useHandCursor = true;
                                boxb.visible=false;
                                syntexc.frameName="<Group>_449 copy instance 10001";
                            },this);
                            
                        }
                        else
                        {
                            //less than 2
                            waterFillingSound.play(); 
                            syntexc.frameName="<Group>_449 copy instance 1000"+(drumcincr+7);
                        }
                        
                        boxtext2=boxtext2.setText(drumcincr);
                        box2.addChild(boxtext2);
                    }
            }
        if(target.name=="potc")
            {
                ClickSound.play();
                potcincr++;
                if(potcincr>4)
                    {
						if(timer){timer.stop();
						timer = null;}
                       waudio.play();
                       shake.shake(10,syntexc);
                       tickmarkc.events.onInputDown.removeAll();
                       tickmarkc.events.onInputDown.add(function(){
                           
                           tickmarkc.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
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
		
                           var starAnim = starsGroupC.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               this.questionaftertrigger('potc');
                           },this);
                       },this);     
                    }
                else
                    {
                        if(potcincr==4)
                        {
						if(timer){timer.stop();
						timer = null;}
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            syntexc.frameName="a2";
                            tickmarkc.inputEnabled=true;
                            tickmarkc.input.useHandCursor = true;
                            tickmarkc.frameName='Symbol 16 instance 10001';
                            tickmarkc.events.onInputDown.removeAll(); 
                            tickmarkc.events.onInputDown.add(function(){
                                
                                speakerBtn.inputEnabled=false;
                               tickmarkc.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
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
									absdsjsapi.saveInteractEvent(interactEvent);
		
                               var starAnim = starsGroupC.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                   this.questionaftertrigger('potc');
                               },this);
                           },this); 
                        }
                        else//less than 4
                        {
                            waterFillingSound.play();
                            newpotcincr=potcincr+(4+potcincr);
                            if(newpotcincr<=9)
                            syntexc.frameName="<Group>_449 copy instance 1000"+(newpotcincr);
                            else
                            syntexc.frameName="<Group>_449 copy instance 100"+(newpotcincr);
                        }
                        
                        boxtext1=boxtext1.setText(potcincr);
                        box1.addChild(boxtext1);   
                    } 
            }
            
            if(target.name=="orangemugc")
            {
                ClickSound.play();
                orangemugcincr++;
                if(orangemugcincr>6)
                    {
                       waudio.play();
                       shake.shake(10,vessel1c); 
                       vessel1c.frameName="a1";
                    }
                else
                    {
                        if(orangemugcincr==6)
                        {
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            vessel1c.frameName="a1";
                            orangemugc1_graphics.inputEnabled=false; 
                            orangemugc2_graphics.inputEnabled=false; 
                            this.time.events.add(1000,function(){
                                maskbg.kill();
                                sodac1_graphics.inputEnabled = true;
                                sodac1_graphics.input.useHandCursor = true;
                                sodac2_graphics.inputEnabled = true;
                                sodac2_graphics.input.useHandCursor = true;
                                boxb.visible=false;
                                vessel1c.frameName="<Group>_73 copy instance 10001";
                            },this);
                            
                        }
                        else if(orangemugcincr<6)
                        {
                            //less than 2
                            waterFillingSound.play(); 
                            vessel1c.frameName="<Group>_73 copy instance 1000"+(orangemugcincr+3);
                        }
                        boxtext2=boxtext2.setText(orangemugcincr);
                        box2.addChild(boxtext2);
                    }
            }
        if(target.name=="sodac")
            {
                ClickSound.play();
                sodacincr++;
                if(sodacincr>10)
                    {
						if(timer){timer.stop();
						timer = null;}
                       waudio.play();
                       shake.shake(10,vessel1c);
                       tickmarkc.events.onInputDown.removeAll();
                       tickmarkc.events.onInputDown.add(function(){
                           tickmarkc.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
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
								absdsjsapi.saveInteractEvent(interactEvent);
		
                           var starAnim = starsGroupC.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               this.questionaftertrigger('sodac');
                           },this);
                       },this);     
                    }
                else
                    {
                        if(sodacincr==10)
                        {
							if(timer){timer.stop();
							timer = null;}
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            vessel1c.frameName="a1";
                            tickmarkc.inputEnabled=true;
                            tickmarkc.input.useHandCursor = true;
                            tickmarkc.frameName='Symbol 16 instance 10001';
                            tickmarkc.events.onInputDown.removeAll(); 
                            tickmarkc.events.onInputDown.add(function(){
                                speakerBtn.inputEnabled=false;
                               tickmarkc.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
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
									absdsjsapi.saveInteractEvent(interactEvent);
		
                               var starAnim = starsGroupC.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                   this.questionaftertrigger('sodac');
                               },this);
                           },this); 
                            boxtext1.x=20;
                            boxtext1=boxtext1.setText(sodacincr);
                            box1.addChild(boxtext1);   
                        }
                        else//less than 10
                        {
                            waterFillingSound.play();
                            if(sodacincr>=9)
                            vessel1c.frameName="<Group>_73 copy instance 100"+(sodacincr+1);
                            else
                            vessel1c.frameName="<Group>_73 copy instance 1000"+(sodacincr+1);
                            boxtext1=boxtext1.setText(sodacincr);
                            box1.addChild(boxtext1);   
                        }
                        
                    } 
            }
        
            if(target.name=="orangecanc")
            {
                ClickSound.play();
                orangecancincr++;
                if(orangecancincr>2)
                    {
						if(timer){timer.stop();
						timer = null;}
                       waudio.play();
                       shake.shake(10,mugc);
                       tickmarkc.events.onInputDown.removeAll();
                       tickmarkc.events.onInputDown.add(function(){
                           tickmarkc.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
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
								absdsjsapi.saveInteractEvent(interactEvent);
		
                           var starAnim = starsGroupC.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               this.questionaftertrigger('orangecanc');
                           },this);
                       },this);     
                    }
                else
                    {
                        if(orangecancincr==2)
                        {
							if(timer){timer.stop();
						timer = null;}
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            mugc.frameName="a1";
                            tickmarkc.inputEnabled=true;
                            tickmarkc.input.useHandCursor = true;
                            tickmarkc.frameName='Symbol 16 instance 10001';
                            tickmarkc.events.onInputDown.removeAll(); 
                            tickmarkc.events.onInputDown.add(function(){
                                speakerBtn.inputEnabled=false;
                               tickmarkc.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
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
									absdsjsapi.saveInteractEvent(interactEvent);
		
                               var starAnim = starsGroupC.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                   this.questionaftertrigger('orangecanc');
                               },this);
                           },this); 
                        }
                        else//less than 2
                        {
                            waterFillingSound.play();
                            mugc.frameName="<Group>_453 copy instance 10009";
                        }
                        
                        boxtext1=boxtext1.setText(orangecancincr);
                        box1.addChild(boxtext1);   
                    } 
            }
        
            if(target.name=="bottlec")
            {
                ClickSound.play();
                bottlecincr++;
                if(bottlecincr>5)
                    {
                       waudio.play();
                       shake.shake(10,mugc); 
                       mugc.frameName="<Group>_453 copy instance 10007";
                    }
                else
                    {
                        if(bottlecincr==5)
                        {

                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            mugc.frameName="a1";
                            bottlec1_graphics.inputEnabled=false; 
                            bottlec2_graphics.inputEnabled=false; 
                            this.time.events.add(1000,function(){
                                maskbg.kill();
                                orangecanc_graphics.inputEnabled = true;
                                orangecanc_graphics.input.useHandCursor = true;
                                boxb.visible=false;
                                mugc.frameName="<Group>_453 copy instance 10001";
                            },this);
                            
                        }
                        else if(bottlecincr<5)
                        {
                            //less than 2
                            waterFillingSound.play(); 
                            if(bottlecincr>3)
                            mugc.frameName="<Group>_453 copy instance 100"+(bottlecincr+(2*bottlecincr));
                            else
                            mugc.frameName="<Group>_453 copy instance 1000"+(bottlecincr+(2*bottlecincr));
                        }
                        boxtext2=boxtext2.setText(bottlecincr);
                        box2.addChild(boxtext2);
                    }
            }
            
            if(target.name=="pinkbucketc")
            {
                ClickSound.play();
                pinkbucketcincr++;
                if(pinkbucketcincr>15)
                    {
						if(timer){timer.stop();
						timer = null;}
                       waudio.play();
                       shake.shake(10,bluecanc);
                       tickmarkc.events.onInputDown.removeAll();
                       tickmarkc.events.onInputDown.add(function(){
                           tickmarkc.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
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
								absdsjsapi.saveInteractEvent(interactEvent);
		
                           var starAnim = starsGroupC.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               this.questionaftertrigger('pinkbucketc');
                           },this);
                       },this);     
                    }
                else
                    {
                        if(pinkbucketcincr==15)
                        {
							if(timer){timer.stop();
						timer = null;}
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            bluecanc.frameName="a1";
                            tickmarkc.inputEnabled=true;
                            tickmarkc.input.useHandCursor = true;
                            tickmarkc.frameName='Symbol 16 instance 10001';
                            boxtext1.x=20;
                            boxtext1=boxtext1.setText(pinkbucketcincr);
                            box1.addChild(boxtext1);
                            tickmarkc.events.onInputDown.removeAll(); 
                            tickmarkc.events.onInputDown.add(function(){
                                speakerBtn.inputEnabled=false;
                               tickmarkc.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
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
									absdsjsapi.saveInteractEvent(interactEvent);
		
                               var starAnim = starsGroupC.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                   this.questionaftertrigger('pinkbucketc');
                               },this);
                           },this);  
                        }
                        else//less than 15
                        {
                            waterFillingSound.play();
                            if(pinkbucketcincr<9)
                                bluecanc.frameName="<Group>_51 copy instance 1000"+(pinkbucketcincr+1);
                            else
                                bluecanc.frameName="<Group>_51 copy instance 100"+(pinkbucketcincr+1);
                            
                            if(pinkbucketcincr>=10)
                            {
                                boxtext1.x=20;
                                boxtext1=boxtext1.setText(pinkbucketcincr);
                                box1.addChild(boxtext1);  
                            }
                            else
                            {
                                boxtext1=boxtext1.setText(pinkbucketcincr);
                                box1.addChild(boxtext1);
                            }
                            
                        }
                        
                          
                    } 
            }
        
            if(target.name=="greenbottlec")
            {
                ClickSound.play();
                greenbottlecincr++;
                if(greenbottlecincr>5)
                    {
                       waudio.play();
                       shake.shake(10,bluecanc); 
                       bluecanc.frameName="<Group>_51 copy instance 10001";
                    }
                else
                    {
                        if(greenbottlecincr==5)
                        {
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            bluecanc.frameName="a1";
                            greenbottlec1_graphics.inputEnabled=false; 
                            greenbottlec2_graphics.inputEnabled=false; 
                            this.time.events.add(1000,function(){
                                maskbg.kill();
                                pinkbucketc_graphics.inputEnabled = true;
                                pinkbucketc_graphics.input.useHandCursor = true;
                                boxb.visible=false;
                                bluecanc.frameName="<Group>_51 copy instance 10001";
                            },this);
                            
                        }
                        else if(greenbottlecincr<5)
                        {
                            //less than 5
                            newbottleincr=greenbottlecincr+(2*greenbottlecincr);
                            waterFillingSound.play(); 
                            if(newbottleincr<10)
                                    bluecanc.frameName="<Group>_51 copy instance 1000"+(newbottleincr);
                                else
                                    bluecanc.frameName="<Group>_51 copy instance 100"+(newbottleincr);
                        }
                        boxtext2=boxtext2.setText(greenbottlecincr);
                        box2.addChild(boxtext2);
                    }
            }
        
            if(target.name=="redjugc")
            {
                ClickSound.play();
                redjugcincr++;
                if(redjugcincr>10)
                    {
						if(timer){timer.stop();
						timer = null;}
                       waudio.play();
                       shake.shake(10,bluebucketc);
                       tickmarkc.events.onInputDown.removeAll();
                       tickmarkc.events.onInputDown.add(function(){
                           tickmarkc.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
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
								absdsjsapi.saveInteractEvent(interactEvent);
		
                           var starAnim = starsGroupC.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               this.questionaftertrigger('redjugc');
                           },this);
                       },this);     
                    }
                else
                    {
                        if(redjugcincr==10)
                        {
							if(timer){timer.stop();
							timer = null;}
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            bluebucketc.frameName="<Group>_15 instance 10027";
                            boxtext1.x=20;
                            boxtext1=boxtext1.setText(redjugcincr);
                            box1.addChild(boxtext1);
                            tickmarkc.inputEnabled=true;
                            tickmarkc.input.useHandCursor = true;
                            tickmarkc.frameName='Symbol 16 instance 10001';
                            tickmarkc.events.onInputDown.removeAll(); 
                            tickmarkc.events.onInputDown.add(function(){
                                speakerBtn.inputEnabled=false;
                               tickmarkc.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
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
									absdsjsapi.saveInteractEvent(interactEvent);
		
                               var starAnim = starsGroupC.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                   this.questionaftertrigger('redjugc');
                               },this);
                           },this); 
                        }
                        else//less than 10
                        {
                            waterFillingSound.play();
                            if(redjugcincr<5)
                            bluebucketc.frameName="<Group>_15 instance 1000"+(redjugcincr+(1*redjugcincr));
                            else
                            bluebucketc.frameName="<Group>_15 instance 100"+(redjugcincr+(1*redjugcincr));    
                            boxtext1=boxtext1.setText(redjugcincr);
                            box1.addChild(boxtext1);   
                        }
                        
                    } 
            }
        
            if(target.name=="nipplec")
            {
                ClickSound.play();
                nipplecincr++;
                if(nipplecincr>15)
                    {
                       waudio.play();
                       shake.shake(10,bluebottlec); 
                       bluebucketc.frameName="<Group>_15 instance 10001";
                    }
                else
                    {
                        if(nipplecincr==15)
                        {
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            bluebucketc.frameName="<Group>_15 instance 10027";
                            boxtext2.x=20;
                            boxtext2=boxtext2.setText(nipplecincr);
                            box2.addChild(boxtext2); 
                            nipplec1_graphics.inputEnabled=false; 
                            nipplec2_graphics.inputEnabled=false;
                            this.time.events.add(1000,function(){
                                maskbg.kill();
                                redjugc_graphics.inputEnabled = true;
                                redjugc_graphics.input.useHandCursor = true;
                                boxb.visible=false;
                                bluebucketc.frameName="<Group>_15 instance 10001";
                            },this);
                            
                        }
                        else if(nipplecincr<15)
                        {
                            //less than 15
                            newnipplecincr=nipplecincr+6;
                            waterFillingSound.play(); 
                            if(nipplecincr<4)
                                bluebucketc.frameName="<Group>_15 instance 1000"+(newnipplecincr);
                            else
                                bluebucketc.frameName="<Group>_15 instance 100"+(newnipplecincr);

                            if(nipplecincr>=10)
                            {
                                boxtext2.x=20;
                                boxtext2=boxtext2.setText(nipplecincr);
                                box2.addChild(boxtext2);    
                            }
                            else
                            {
                                boxtext2=boxtext2.setText(nipplecincr);
                                box2.addChild(boxtext2);
                            }
                                
                        }
                        
                    }
            }
        
            if(target.name=="glass")
            {
                ClickSound.play();
                glassincr++;
                if(glassincr>11)
                    {
						if(timer){timer.stop();
						timer = null;}
                       waudio.play();
                       shake.shake(10,greenmugc);
                       tickmarkc.events.onInputDown.removeAll();
                       tickmarkc.events.onInputDown.add(function(){
                           tickmarkc.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
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
								absdsjsapi.saveInteractEvent(interactEvent);
		
                           var starAnim = starsGroupC.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               this.questionaftertrigger('glass');
                           },this);
                       },this);     
                    }
                else
                    {
                        if(glassincr==11)
                        {
							if(timer){timer.stop();
							timer = null;}
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            greenmugc.frameName="<Group>_57 instance 10012";
                            boxtext1.x=20;
                            boxtext1=boxtext1.setText(glassincr);
                            box1.addChild(boxtext1);
                            tickmarkc.inputEnabled=true;
                            tickmarkc.input.useHandCursor = true;
                            tickmarkc.frameName='Symbol 16 instance 10001';
                            tickmarkc.events.onInputDown.removeAll(); 
                            tickmarkc.events.onInputDown.add(function(){
                                speakerBtn.inputEnabled=false;
                               tickmarkc.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
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
									absdsjsapi.saveInteractEvent(interactEvent);
		
                               var starAnim = starsGroupC.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                   this.questionaftertrigger('glass');
                               },this);
                           },this); 
                        }
                        else//less than 11
                        {
                            waterFillingSound.play(); 
                            if(glassincr<9)
                            greenmugc.frameName="<Group>_57 instance 1000"+(glassincr+1);
                            else
                            greenmugc.frameName="<Group>_57 instance 100"+(glassincr+1);
                            if(glassincr>=10)
                            {
                                boxtext1.x=20;
                                boxtext1=boxtext1.setText(glassincr);
                                box1.addChild(boxtext1); 
                            }
                            else
                            {
                                boxtext1=boxtext1.setText(glassincr);
                                box1.addChild(boxtext1); 
                            }
                              
                        }
                        
                        
                    } 
            }
        
            if(target.name=="yellowctc")
            {
                ClickSound.play();
                yellowctcincr++;
                if(yellowctcincr>9)
                    {
                       waudio.play();
                       shake.shake(10,greenmugc); 
                       greenmugc.frameName="<Group>_57 instance 10001";
                    }
                else
                    {
                        if(yellowctcincr==9)
                        {
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            greenmugc.frameName="<Group>_57 instance 10012";
                            yellowctc1_graphics.inputEnabled=false; 
                            yellowctc2_graphics.inputEnabled=false;
                            this.time.events.add(1000,function(){
                                maskbg.kill();
                                glass_graphics.inputEnabled = true;
                                glass_graphics.input.useHandCursor = true;
                                boxb.visible=false;
                                greenmugc.frameName="<Group>_57 instance 10000";
                            },this);
                            
                        }
                        else if(yellowctcincr<9)
                        {
                            //less than 9
                            newyellowctcincr=yellowctcincr+6;
                            waterFillingSound.play(); 
                            if(yellowctcincr<9)
                                greenmugc.frameName="<Group>_57 instance 1000"+(yellowctcincr+1);
                            else
                                greenmugc.frameName="<Group>_57 instance 100"+(yellowctcincr+1);
                        }
                        boxtext2=boxtext2.setText(yellowctcincr);
                        box2.addChild(boxtext2);
                    }
            }
        
            if(target.name=="greencupc")
            {
                ClickSound.play();
                greencupcincr++;
                if(greencupcincr>7)
                    {
						if(timer){timer.stop();
						timer = null;}
                       waudio.play();
                       shake.shake(10,vessel2c);
                       tickmarkc.events.onInputDown.removeAll();
                       tickmarkc.events.onInputDown.add(function(){
                           tickmarkc.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
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
								absdsjsapi.saveInteractEvent(interactEvent);
		
                           var starAnim = starsGroupC.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               this.questionaftertrigger('greencupc');
                           },this);
                       },this);     
                    }
                else
                    {
                        if(greencupcincr==7)
                        {
							if(timer){timer.stop();
							timer = null;}
                            waterFillingSound.stop();
                            watersplash.play();   
                            boxb.visible=true;
                            vessel2c.frameName="<Group>_73 instance 10017";
                            tickmarkc.inputEnabled=true;
                            tickmarkc.input.useHandCursor = true;
                            tickmarkc.frameName='Symbol 16 instance 10001';
                            tickmarkc.events.onInputDown.removeAll(); 
                            tickmarkc.events.onInputDown.add(function(){
                                speakerBtn.inputEnabled=false;
                               tickmarkc.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
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
									absdsjsapi.saveInteractEvent(interactEvent);
		
                               var starAnim = starsGroupC.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                  this.questionaftertrigger('greencupc'); 
                               },this); 
                            },this);
                        }
                        else//less than 7
                        {
                            newgreencupcincr=greencupcincr+5;
                            waterFillingSound.play();
                            if(greencupcincr<5)
                            vessel2c.frameName="<Group>_73 instance 1000"+(newgreencupcincr);
                            else
                            vessel2c.frameName="<Group>_73 instance 100"+(newgreencupcincr);
                        }
                        
                        boxtext1=boxtext1.setText(greencupcincr);
                        box1.addChild(boxtext1);   
                    } 
            }
        
            if(target.name=="bluebottlec")
            {
                ClickSound.play();
                bluebottlecincr++;
                if(bluebottlecincr>3)
                    {
                       waudio.play();
                       shake.shake(10,vessel2c); 
                       vessel2c.frameName="<Group>_73 instance 10000";
                    }
                else
                    {
                        if(bluebottlecincr==3)
                        {
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            vessel2c.frameName="<Group>_73 instance 10017";
                            bluebottlec_graphics.inputEnabled=false; 
                            this.time.events.add(1000,function(){
                                maskbg.kill();
                                greencupc_graphics.inputEnabled = true;
                                greencupc_graphics.input.useHandCursor = true;
                                boxb.visible=false;
                                vessel2c.frameName="<Group>_73 instance 10000";
                            },this);
                            
                        }
                        else if(bluebottlecincr<3)
                        {
                            //less than 3
                            newbluebottlecincr=bluebottlecincr+7;
                            waterFillingSound.play(); 
                                if(bluebottlecincr<2)
                                    vessel2c.frameName="<Group>_73 instance 1000"+(newbluebottlecincr);
                                else
                                    vessel2c.frameName="<Group>_73 instance 100"+(newbluebottlecincr+3);
                        }
                        boxtext2=boxtext2.setText(bluebottlecincr);
                        box2.addChild(boxtext2);
                    }
            }
        
            if(target.name=="greencupreverse")
            {
                ClickSound.play();
                greencupreverseincr++;
                if(greencupreverseincr>5)
                    {
						if(timer){timer.stop();
						timer = null;}
                       waudio.play();
                       shake.shake(10,bluepotc);
                       tickmarkc.events.onInputDown.removeAll();
                       tickmarkc.events.onInputDown.add(function(){
                           tickmarkc.inputEnabled=false;
                           ClickSound.play();
                           celebr.play();
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
								absdsjsapi.saveInteractEvent(interactEvent);
		
                           var starAnim = starsGroupC.getChildAt(count1);
                           starAnim.smoothed = false;
                           var anim = starAnim.animations.add('star');
                           anim.play();
                           count1++;
                           this.time.events.add(1000,function(){
                               this.questionaftertrigger('greencupreverse');
                           },this);
                       },this);     
                    }
                else
                    {
                        if(greencupreverseincr==5)
                        {
							if(timer){timer.stop();
							timer = null;}
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            bluepotc.frameName="<Group>_90 instance 10012";
                            tickmarkc.inputEnabled=true;
                            tickmarkc.input.useHandCursor = true;
                            tickmarkc.frameName='Symbol 16 instance 10001';
                            tickmarkc.events.onInputDown.removeAll(); 
                            tickmarkc.events.onInputDown.add(function(){
                                speakerBtn.inputEnabled=false;
                               tickmarkc.inputEnabled=false;
                               ClickSound.play();
                               celebr.play();
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
									absdsjsapi.saveInteractEvent(interactEvent);
		
                               var starAnim = starsGroupC.getChildAt(count1);
                               starAnim.smoothed = false;
                               var anim = starAnim.animations.add('star');
                               anim.play();
                               count1++;
                               this.time.events.add(1000,function(){
                                   this.questionaftertrigger('greencupreverse');
                               },this);
                           },this); 
                        }
                        else//less than 5
                        {
                            newgreencupreverseincr=greencupreverseincr+3;
                            waterFillingSound.play();  
                            bluepotc.frameName="<Group>_90 instance 1000"+(newgreencupreverseincr);
                        }
                        
                        boxtext1=boxtext1.setText(greencupreverseincr);
                        box1.addChild(boxtext1);   
                    } 
            }
        
            if(target.name=="redjugc2")
            {
                ClickSound.play();
                redjugc2incr++;
                if(redjugc2incr>7)
                    {
                       waudio.play();
                       shake.shake(10,bluepotc); 
                       bluepotc.frameName="<Group>_90 instance 10000";
                    }
                else
                    {
                        if(redjugc2incr==7)
                        {
                            waterFillingSound.stop();
                            watersplash.play();
                            boxb.visible=true;
                            bluepotc.frameName="<Group>_90 instance 10012";
                            redjugc2_graphics.inputEnabled=false; 
                            this.time.events.add(1000,function(){
                                maskbg.kill();
                                greencupreverse_graphics.inputEnabled = true;
                                greencupreverse_graphics.input.useHandCursor = true;
                                boxb.visible=false;
                                bluepotc.frameName="<Group>_90 instance 10001";
                            },this);
                            
                        }
                        else if(redjugc2incr<7)
                        {
                            //less than 7
                            waterFillingSound.play(); 
                            bluepotc.frameName="<Group>_90 instance 1000"+(redjugc2incr+2);
                        }
                        boxtext2=boxtext2.setText(redjugc2incr);
                        box2.addChild(boxtext2);
                    }
            }
    },
    
    nextquestion:function(){
		noofAttempts = 0;
        if(qnoC<6)
            {
                this.getQuestion();
            }
            else
            {
               // console.log("finished 4.2a");
                this.stopAllVoice();
				this.state.start('grade4_2CScore');
            }
    },
    
    update:function(){
    },
        
    questionaftertrigger:function(object,arg=null){
        switch(object)
        {
            case "potc" :  questgroupC=this.add.group();
                           questgroupC.add(greenpotc_shadow);
                           questgroupC.add(drumc_shadow);
                           questgroupC.add(syntexc_shadow);
                           questgroupC.add(greenpotc);                   
                           questgroupC.add(drumc);
                           questgroupC.add(syntexc);
                           questgroupC.add(tickmarkc);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(potc_graphics);
                           questgroupC.add(drumc_graphics);
                           questgroupC.add(boxb);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                            {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0,'Linear', true, 0);
                            }
                            else
                            {
                                tween.to({ x: -1000}, 0,'Linear', true, 0);
                                tween.onComplete.add(function(){  
                                    tickmarkc.frameName='Symbol 16 instance 10000'; 
                                    potcincr=0;drumcincr=0;
                                    tickmarkc.events.onInputDown.removeAll();
                                    this.nextquestion();
                                },this);
                            }
                            break;
            case "sodac" : questgroupC=this.add.group();
                           questgroupC.add(vessel1c_shadow);
                           questgroupC.add(sodac_shadow);
                           questgroupC.add(orangemugc_shadow);
                           questgroupC.add(vessel1c);                   
                           questgroupC.add(sodac);
                           questgroupC.add(orangemugc);
                           questgroupC.add(tickmarkc);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(sodac1_graphics);
                           questgroupC.add(sodac2_graphics);
                           questgroupC.add(orangemugc1_graphics);
                           questgroupC.add(orangemugc2_graphics);
                           questgroupC.add(boxb);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0,'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0,'Linear', true, 0);
                                tween.onComplete.add(function(){ 
                                    tickmarkc.frameName='Symbol 16 instance 10000';
                                    sodacincr=0;orangemugcincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;
        case "orangecanc": questgroupC=this.add.group();
                           questgroupC.add(bottlec_shadow);
                           questgroupC.add(mugc_shadow);
                           questgroupC.add(orangecanc_shadow);
                           questgroupC.add(orangecanc);                   
                           questgroupC.add(mugc);
                           questgroupC.add(bottlec);
                           questgroupC.add(tickmarkc);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(orangecanc_graphics);
                           questgroupC.add(bottlec1_graphics);
                           questgroupC.add(bottlec2_graphics);
                           questgroupC.add(boxb);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0,'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0,'Linear', true, 0);
                                tween.onComplete.add(function(){ 
                                    tickmarkc.frameName='Symbol 16 instance 10000';
                                    bottlecincr=0;orangecancincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;
       case "pinkbucketc": questgroupC=this.add.group();
                           questgroupC.add(bluecanc_shadow);
                           questgroupC.add(pinkbucketc_shadow);
                           questgroupC.add(greenbottlec_shadow);
                           questgroupC.add(pinkbucketc);                   
                           questgroupC.add(greenbottlec);
                           questgroupC.add(bluecanc);
                           questgroupC.add(tickmarkc);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(pinkbucketc_graphics);
                           questgroupC.add(greenbottlec1_graphics);
                           questgroupC.add(greenbottlec2_graphics);
                           questgroupC.add(boxb);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0,'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0,'Linear', true, 0);
                                tween.onComplete.add(function(){ 
                                    tickmarkc.frameName='Symbol 16 instance 10000';
                                    pinkbucketcincr=0;greenbottlecincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;
        case "redjugc"  :  questgroupC=this.add.group();
                           questgroupC.add(nipplec_shadow);
                           questgroupC.add(bluebucketc_shadow);
                           questgroupC.add(redjugc_shadow);
                           questgroupC.add(bluebucketc);                   
                           questgroupC.add(redjugc);
                           questgroupC.add(nipplec);
                           questgroupC.add(tickmarkc);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(redjugc_graphics);
                           questgroupC.add(nipplec1_graphics);
                           questgroupC.add(nipplec2_graphics);
                           questgroupC.add(boxb);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0,'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0,'Linear', true, 0);
                                tween.onComplete.add(function(){  
                                    tickmarkc.frameName='Symbol 16 instance 10000'; 
                                    redjugcincr=0;nipplecincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;
        case "glass"   :   questgroupC=this.add.group();
                           questgroupC.add(glass_shadow);
                           questgroupC.add(greenmugc_shadow);
                           questgroupC.add(yellowctc_shadow);
                           questgroupC.add(greenmugc);                   
                           questgroupC.add(glass);
                           questgroupC.add(yellowctc);
                           questgroupC.add(tickmarkc);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(glass_graphics);
                           questgroupC.add(yellowctc1_graphics);
                           questgroupC.add(yellowctc2_graphics);
                           questgroupC.add(boxb);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0,'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0,'Linear', true, 0);
                                tween.onComplete.add(function(){  
                                    tickmarkc.frameName='Symbol 16 instance 10000'; 
                                    yellowctcincr=0;glassincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;
        case "greencupc" : questgroupC=this.add.group();
                           questgroupC.add(greencupc_shadow);
                           questgroupC.add(vessel2c_shadow);
                           questgroupC.add(bluebottlec_shadow);
                           questgroupC.add(vessel2c);                   
                           questgroupC.add(greencupc);
                           questgroupC.add(bluebottlec);
                           questgroupC.add(tickmarkc);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(bluebottlec_graphics);
                           questgroupC.add(greencupc_graphics);
                           questgroupC.add(boxb);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0,'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0,'Linear', true, 0);
                                tween.onComplete.add(function(){ 
                                    tickmarkc.frameName='Symbol 16 instance 10000';
                                    bluebottlecincr=0;greencupcincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;
    case "greencupreverse":questgroupC=this.add.group();
                           questgroupC.add(greencupreverse_shadow);
                           questgroupC.add(bluepotc_shadow);
                           questgroupC.add(redjugc2_shadow);
                           questgroupC.add(bluepotc);                   
                           questgroupC.add(greencupreverse);
                           questgroupC.add(redjugc2);
                           questgroupC.add(tickmarkc);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(redjugc2_graphics);
                           questgroupC.add(greencupreverse_graphics);
                           questgroupC.add(boxb);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0,'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0,'Linear', true, 0);
                                tween.onComplete.add(function(){ 
                                    tickmarkc.frameName='Symbol 16 instance 10000';
                                    redjugc2incr=0;greencupreverseincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;   
           
    }
    
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
                        Eng_42C1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_42C1.play();
                    else
                        Kan_42C1.play();
                    break;
        }
    }
                  
};