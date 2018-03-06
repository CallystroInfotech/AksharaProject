Game.grade1levelSelectionScreen=function(game){
	
};

Game.grade1levelSelectionScreen.prototype={

	init:function()
	{
		_this = this;
		//console.log("sync telemetry"+navigator.connection.type);
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			//absdsjsapi.syncTelemetryData();
		}

		document.addEventListener("online", _this.syncTelFunc, false);
	},
			
	syncTelFunc:function()
	{
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			absdsjsapi.syncTelemetryData();
		}
	},
	
	create:function(game){


		
		_this = this;

		console.log(_this.world);
		
		_this.input.enabled = true;
		_this.tween = null;
		_this.tap = false;
		//adding bg, title to the scene.
		_this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'gameselectBg');
		
		_this.gradeBackBtn = _this.add.sprite(10,3,'gradeSceneBackBtn');
		_this.gradeBackBtn.inputEnabled = true;
		_this.gradeBackBtn.input.useHandCursor = true;
		_this.gradeBackBtn.input.priorityID = 1;
		_this.gradeBackBtn.events.onInputDown.add(function(target){
			target.events.onInputDown.removeAll();
			//_this.cache.destroy();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			
			_this.state.start('gradeSelectionScreen',true,false);
		},_this);
		
		
		_this.grade1FractionGroup = _this.add.group();
		_this.grade1LengthGroup = _this.add.group();
		_this.grade1WeightGroup = _this.add.group();
		_this.grade1TimeGroup = _this.add.group();
		
		_this.addGrade1FractionTopic();
		_this.addGrade1LengthTopic();
		_this.addGrade1WeightTopic();
		_this.addGrade1TimeTopic();

		_this.grade1FractionGroup.x = 0;
		_this.grade1FractionGroup.y = 0;
		
		_this.grade1LengthGroup.x = 0;
		_this.grade1LengthGroup.y = 250;
		
		_this.grade1WeightGroup.x = 0;
		_this.grade1WeightGroup.y = 500;

		_this.grade1TimeGroup.x = 0;
		_this.grade1TimeGroup.y = 750;
		
		
		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xF7D519, 0);
		_this.graphicsBg.drawRect(0,0,960,720);
		_this.graphicsBg.boundsPadding = 0;
		
		
		
		_this.mask = _this.add.graphics();
        _this.mask.position.x = 0;   
        _this.mask.position.y = 35;   
        _this.mask.beginFill(0, 1);   
        _this.mask.moveTo(0, 0);   
        _this.mask.lineTo(960, 0);   
        _this.mask.lineTo(960, 505);   
        _this.mask.lineTo(0, 505);   
        _this.mask.lineTo(0, 0);   
        _this.mask.endFill();   
        _this.graphicsBg.mask = _this.mask;
		
	
		_this.graphicsBg.addChild(_this.grade1FractionGroup);
		_this.graphicsBg.addChild(_this.grade1LengthGroup);
		_this.graphicsBg.addChild(_this.grade1WeightGroup);
		_this.graphicsBg.addChild(_this.grade1TimeGroup);
		
		
		_this.swipeUpFlag = true;
		_this.swipeDownFlag = false;
		_this.page = document.getElementById("body"); 
		_this.mc = new Hammer(_this.page);
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:true });

			_this.mc.on("swipeleft", function () { 
				//console.log('swipeleft');
			}); 
          
           _this.mc.on("swiperight", function () { 
				//console.log('swiperight');
			});
			
			_this.mc.on("swipeup", function (v) { 
				//console.log(v);
				
				
			//	if(swipeUpFlag)
			//	{
					//game.input.enabled = false;

					_this.tween = game.add.tween(_this.graphicsBg);
					_this.tween.to({ y: _this.graphicsBg.y-(v.distance*(v.overallVelocity*2/-1))}, 0, 'Linear', true, 0);
					_this.tween.onComplete.add(function(){
					//	swipeDownFlag = true;
						_this.tween = null;
						if(_this.graphicsBg.y<=-520)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -520;
						}
						
						//game.input.enabled = true;
					}, _this);
					_this.tween.onUpdateCallback(function(){
						_this.tap = false;
						if(_this.graphicsBg.y<=-520)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -520;
							_this.tween.stop();
							//_this.tween = null;
							//game.input.enabled = true;
						}
					},_this);
					
			//	}
			}); 
			
			_this.mc.on("swipedown", function (v) { 
				
			//	if(swipeDownFlag)
			//	{
					//game.input.enabled = false;
					_this.tween = game.add.tween(_this.graphicsBg);
					_this.tween.to({ y: _this.graphicsBg.y+(v.distance*(v.overallVelocity*2)) }, 0, 'Linear', true, 0);
					_this.tween.onComplete.add(function(){
					//	swipeUpFlag = true;
						_this.tween = null;
						if(_this.graphicsBg.y>=0)
						{
						//	swipeDownFlag = false;
							_this.graphicsBg.y = 0;
						}
						//game.input.enabled = true;
					}, _this);
					
					_this.tween.onUpdateCallback(function(){
						tap = false;
						if(_this.graphicsBg.y>=0)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = 0;
							_this.tween.stop();
							//_this.tween = null;
							//game.input.enabled = true;
						}
					},_this);
			//	}
			});

			_this.input.onDown.add(function(){
				if(_this.tween)
				{
					if(_this.tween.isRunning)
					{
						_this.tween.stop();
						//_this.tween = null;
					}
				}
				_this.graphicsBg.inputEnabled = true;
				_this.graphicsBg.input.enableDrag();
				_this.graphicsBg.input.allowHorizontalDrag = false;

				_this.graphicsBg.events.onDragUpdate.add(function(){
					_this.tap = false;
					if(_this.tween)
					{
						if(_this.tween.isRunning)
						{
							_this.tween.stop();
							//_this.tween = null;
						}
					}
					if(_this.graphicsBg.y>=10)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = 0;
							//tween.stop();
							//game.input.enabled = true;
						}
					else if(_this.graphicsBg.y<=-530)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -520;
							//tween.stop();
							//game.input.enabled = true;
						}
				},_this);

				_this.graphicsBg.events.onDragStop.add(function(e){
					_this.tap = false;
					//console.log(e);
					if(_this.tween)
					{
						//if(tween.isRunning)
						_this.tween.stop();
						//_this.tween = null;
					}

						if(_this.graphicsBg.y>=0)
						{
						//	swipeDownFlag = false;
							_this.graphicsBg.y = 0;
						}
						else if(_this.graphicsBg.y<=-530)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -520;
						}
					
				},_this);

			},_this);
		
		_this.input.onTap.add(function(){
			//console.log("tap");
			_this.tap = true;
			_this.time.events.add(300, function(){
				_this.time.events.removeAll();
				_this.tap = false;
				//console.log("tapfalse");
			},_this);
		},_this);
	},
	
	
	addGrade1FractionTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = _this.add.sprite(215,83,'fractionsTitleTxt');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.fractions1_1AScreen = _this.add.sprite(100,120,'fractions1_1AScreen');
		_this.fractions1_1AScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		_this.fractions1_1AScreenTxt.anchor.setTo(0.5);
		

		_this.fractions1_1AScreen.inputEnabled = true;
		_this.fractions1_1AScreen.input.useHandCursor = true;
		_this.fractions1_1AScreen.name = "Fractions 1.1 A";
		_this.fractions1_1AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade1_1Alevel1',true,false);
				}
			},_this);
			
		},_this);


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.fractions1_1AScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.fractions1_1AScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.fractions1_1AScreenTxt.frame = 0;
		}
		
		
		
		
		_this.grade1FractionGroup.add(_this.topicTxtBg);
		_this.grade1FractionGroup.add(_this.topicTitleText);
		_this.grade1FractionGroup.add(_this.topicBg);
		_this.grade1FractionGroup.add(_this.fractions1_1AScreen);
		_this.grade1FractionGroup.add(_this.fractions1_1AScreenTxt);
		
	},
	
	addGrade1LengthTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		_this.topicTitleText = _this.add.sprite(215,83,'lengthTitleTxt');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.length2_1AScreen = _this.add.sprite(100,120,'length2_1AScreen');
		_this.length2_1AScreenTxt = _this.add.sprite(175, 250, 'length2_1A');
		_this.length2_1AScreenTxt.anchor.setTo(0.5);
		
		
		_this.length2_1AScreen.inputEnabled = true;
		_this.length2_1AScreen.name = "Length 2.1 A";
		_this.length2_1AScreen.input.useHandCursor = true;
		_this.length2_1AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_1Alevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.length2_1BScreen = _this.add.sprite(300,120,'length2_1BScreen');
		_this.length2_1BScreenTxt = _this.add.sprite(375, 250, 'length2_1B');
		_this.length2_1BScreenTxt.anchor.setTo(0.5);
		
		_this.length2_1BScreen.inputEnabled = true;
		_this.length2_1BScreen.input.useHandCursor = true;
		_this.length2_1BScreen.name = "Length 2.1 B";
		_this.length2_1BScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_1Blevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.length2_2Screen = _this.add.sprite(500,120,'length2_2Screen');
		_this.length2_2ScreenTxt = _this.add.sprite(575, 250, 'length2_2');
		_this.length2_2ScreenTxt.anchor.setTo(0.5);
		
		_this.length2_2Screen.inputEnabled = true;
		_this.length2_2Screen.name = "Length 2.2";
		_this.length2_2Screen.input.useHandCursor = true;
		_this.length2_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_2level1',true,false);
				}
			},_this);
		},_this);
		
		_this.length2_3Screen = _this.add.sprite(700,115,'game2.3ScreenShot');
		_this.length2_3ScreenTxt = _this.add.sprite(775, 250, 'length2_3');
		_this.length2_3ScreenTxt.anchor.setTo(0.5);
		
		_this.length2_3Screen.inputEnabled = true;
		_this.length2_3Screen.name = "Length 2.3";
		_this.length2_3Screen.input.useHandCursor = true;
		_this.length2_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){

				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_3level1',true,false);
				}
			},_this);
		},_this);
		


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.length2_1AScreenTxt.frame = 1;
			_this.length2_1BScreenTxt.frame = 1;
			_this.length2_2ScreenTxt.frame = 1;
			_this.length2_3ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.length2_1AScreenTxt.frame = 2;
			_this.length2_1BScreenTxt.frame = 2;
			_this.length2_2ScreenTxt.frame = 2;
			_this.length2_3ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.length2_1AScreenTxt.frame = 0;
			_this.length2_1BScreenTxt.frame = 0;
			_this.length2_2ScreenTxt.frame = 0;
			_this.length2_3ScreenTxt.frame = 0;
		}
		
		
		
		_this.grade1LengthGroup.add(_this.topicTxtBg);
		_this.grade1LengthGroup.add(_this.topicTitleText);
		_this.grade1LengthGroup.add(_this.topicBg);
		_this.grade1LengthGroup.add(_this.length2_1AScreen);
		_this.grade1LengthGroup.add(_this.length2_1AScreenTxt);
		_this.grade1LengthGroup.add(_this.length2_1BScreen);
		_this.grade1LengthGroup.add(_this.length2_1BScreenTxt);
		_this.grade1LengthGroup.add(_this.length2_2Screen);
		_this.grade1LengthGroup.add(_this.length2_2ScreenTxt);
		_this.grade1LengthGroup.add(_this.length2_3Screen);
		_this.grade1LengthGroup.add(_this.length2_3ScreenTxt);
		
		
	},
	
	addGrade1WeightTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		_this.topicTitleText = _this.add.sprite(200,83,'weightTitleTxt');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.weight3_1Screen = _this.add.sprite(100,120,'game3.1ScreenShot');
		_this.weight3_1ScreenTxt = _this.add.sprite(185, 255, 'weight3_1');
		_this.weight3_1ScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_1Screen.inputEnabled = true;
		_this.weight3_1Screen.input.useHandCursor = true;
		_this.weight3_1Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_1level1',true,false);
				}
			},_this);
		},_this);
		
		_this.weight3_2AScreen = _this.add.sprite(300,120,'game3.2AScreenShot');
		_this.weight3_2AScreenTxt = _this.add.sprite(385, 255, 'weight3_2A');
		_this.weight3_2AScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_2AScreen.inputEnabled = true;
		_this.weight3_2AScreen.input.useHandCursor = true;
		_this.weight3_2AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_2Alevel1',true,false);
				}
			},_this);
		},_this);


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.weight3_1ScreenTxt.frame = 1;
			_this.weight3_2AScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.weight3_1ScreenTxt.frame = 2;
			_this.weight3_2AScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.weight3_1ScreenTxt.frame = 0;
			_this.weight3_2AScreenTxt.frame = 0;
		}
		
		
		_this.grade1WeightGroup.add(_this.topicTxtBg);
		_this.grade1WeightGroup.add(_this.topicTitleText);
		_this.grade1WeightGroup.add(_this.topicBg);
		_this.grade1WeightGroup.add(_this.weight3_1Screen);
		_this.grade1WeightGroup.add(_this.weight3_1ScreenTxt);
		_this.grade1WeightGroup.add(_this.weight3_2AScreen);
		_this.grade1WeightGroup.add(_this.weight3_2AScreenTxt);
		
	},

	addGrade1TimeTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		_this.topicTitleText = _this.add.sprite(200,83,'timeTitleTxt');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		_this.topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.time5_1Screen = _this.add.sprite(100,120,'time5_1Screen');
		_this.time5_1ScreenTxt = _this.add.sprite(175, 255, 'time5_1');
		_this.time5_1ScreenTxt.anchor.setTo(0.5);
		
		_this.time5_1Screen.inputEnabled = true;
		_this.time5_1Screen.input.useHandCursor = true;
		_this.time5_1Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade5_1level1',true,false);
				}
			},_this);
		},_this);
		
		_this.time5_2Screen = _this.add.sprite(300,120,'time5_2Screen');
		_this.time5_2ScreenTxt = _this.add.sprite(375, 255, 'time5_2');
		_this.time5_2ScreenTxt.anchor.setTo(0.5);
		
		_this.time5_2Screen.inputEnabled = true;
		_this.time5_2Screen.input.useHandCursor = true;
		_this.time5_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade5_2level1',true,false);
				}
			},_this);
		},_this);

		_this.time5_4Screen = _this.add.sprite(500,120,'time5_4Screen');
		_this.time5_4ScreenTxt = _this.add.sprite(575, 255, 'time5_4');
		_this.time5_4ScreenTxt.anchor.setTo(0.5);
		
		_this.time5_4Screen.inputEnabled = true;
		_this.time5_4Screen.input.useHandCursor = true;
		_this.time5_4Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade5_4level1',true,false);
				}
			},_this);
		},_this);

		


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.time5_1ScreenTxt.frame = 1;
			_this.time5_2ScreenTxt.frame = 1;
			_this.time5_4ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.time5_1ScreenTxt.frame = 2;
			_this.time5_2ScreenTxt.frame = 2;
			_this.time5_4ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.time5_1ScreenTxt.frame = 0;
			_this.time5_2ScreenTxt.frame = 0;
			_this.time5_4ScreenTxt.frame = 0;
		}
		
		
		_this.grade1TimeGroup.add(_this.topicTxtBg);
		_this.grade1TimeGroup.add(_this.topicTitleText);
		_this.grade1TimeGroup.add(_this.topicBg);
		_this.grade1TimeGroup.add(_this.time5_1Screen);
		_this.grade1TimeGroup.add(_this.time5_1ScreenTxt);
		_this.grade1TimeGroup.add(_this.time5_2Screen);
		_this.grade1TimeGroup.add(_this.time5_2ScreenTxt);
		_this.grade1TimeGroup.add(_this.time5_4Screen);
		_this.grade1TimeGroup.add(_this.time5_4ScreenTxt);
		
	},
	
	shutdown:function()
	{
		if(_this.mc)
		{
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:false });
		}
		document.removeEventListener("online", _this.syncTelFunc, false);
		/*_this.clickSound = null;
		_this.mc = null;
		//_this = null;
		_this.tween = null;
		_this.tap = null;
		_this.background = null;
		_this.gradeBackBtn = null;
		_this.grade1FractionGroup = null;
		_this.grade1LengthGroup = null;
		_this.grade1WeightGroup = null;
		_this.graphicsBg = null;
		_this.mask = null;
		_this.swipeUpFlag = null;
		_this.swipeDownFlag = null;
		_this.page = null; 
		_this.input.onDown.removeAll();
		_this.input.onTap.removeAll();
		_this.time.events.removeAll();
		
		_this.topicTxtBg = null;
		_this.topicTitleText = null;
		_this.topicBg = null;
		
		_this.fractions1_1AScreen.events.onInputDown.removeAll();
		_this.fractions1_1AScreen = null;
		_this.fractions1_1AScreenTxt = null;
		
		_this.length2_1AScreen.events.onInputDown.removeAll();
		_this.length2_1AScreen = null;
		_this.length2_1AScreenTxt = null;
		
		_this.length2_1BScreen.events.onInputDown.removeAll();
		_this.length2_1BScreen = null;
		_this.length2_1BScreenTxt = null;
		
		_this.length2_2Screen.events.onInputDown.removeAll();
		_this.length2_2Screen = null;
		_this.length2_2ScreenTxt = null;
		
		_this.length2_3Screen.events.onInputDown.removeAll();
		_this.length2_3Screen = null;
		_this.length2_3ScreenTxt = null;
		
		_this.weight3_1Screen.events.onInputDown.removeAll();
		_this.weight3_1Screen = null;
		_this.weight3_1ScreenTxt = null;
		
		_this.weight3_2AScreen.events.onInputDown.removeAll();
		_this.weight3_2AScreen = null;
		_this.weight3_2AScreenTxt = null;
		
		console.log(_this.world);

		_this = null;*/

		/*_this.world.onChildInputDown.removeAll();
        _this.world.removeChildren(0, _this.world.length);

		_this = null;*/
	}
	
};