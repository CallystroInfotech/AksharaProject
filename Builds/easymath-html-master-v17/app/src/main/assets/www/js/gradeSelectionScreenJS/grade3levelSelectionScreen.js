Game.grade3levelSelectionScreen=function(game){
	
};

Game.grade3levelSelectionScreen.prototype={

	init:function()
	{
		_this = this;
		//console.log("sync telemetry"+navigator.connection.type);
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			absdsjsapi.syncTelemetryData();
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

		this.game.input.enabled = false;


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
		
		
		_this.grade3FractionGroup = _this.add.group();
		_this.grade3LengthGroup = _this.add.group();
		_this.grade3WeightGroup = _this.add.group();
		_this.grade3TimeGroup = _this.add.group();

		_this.sequenceGroup = _this.add.group();
		_this.PlaceValueGroup = _this.add.group();
		_this.additionwithPlaceValueGroup = _this.add.group();
		_this.SubtractionWithPlaceValueGroup = _this.add.group();
		_this.DivisionPart2Group = _this.add.group();
		
		_this.addGrade3FractionTopic();
		_this.addGrade3LengthTopic();
		_this.addGrade3WeightTopic();
		_this.addGrade3TimeTopic();

		_this.Sequence();
		_this.PlaceValue();
		_this.additionwithPlaceValue();
		_this.SubstractionWithPlaceValue();
		_this.DivisionPart2();

		_this.grade3FractionGroup.x = 0;
		_this.grade3FractionGroup.y = 0;
		
		_this.grade3LengthGroup.x = 0;
		_this.grade3LengthGroup.y = 250;
		
		_this.grade3WeightGroup.x = 0;
		_this.grade3WeightGroup.y = 500;

		_this.grade3TimeGroup.x = 0;
		_this.grade3TimeGroup.y = 950;

		_this.sequenceGroup.x = 0;
		_this.sequenceGroup.y = 1200;

		_this.PlaceValueGroup.x = 0;
		_this.PlaceValueGroup.y = 1650;

		_this.additionwithPlaceValueGroup.x = 0;
		_this.additionwithPlaceValueGroup.y = 1900;
		//_this.additionwithPlaceValueGroup.y = 1650;

		_this.SubtractionWithPlaceValueGroup.x = 0;
		_this.SubtractionWithPlaceValueGroup.y = 2150;
		//_this.SubtractionWithPlaceValueGroup.y = 1900;

		_this.DivisionPart2Group.x = 0;
		_this.DivisionPart2Group.y = 2400;
		
		
		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xF7D519, 0);
		_this.graphicsBg.drawRect(0,0,960,3500);
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
		
	
		_this.graphicsBg.addChild(_this.grade3FractionGroup);
		_this.graphicsBg.addChild(_this.grade3LengthGroup);
		_this.graphicsBg.addChild(_this.grade3WeightGroup);
		_this.graphicsBg.addChild(_this.grade3TimeGroup);
		_this.graphicsBg.addChild(_this.sequenceGroup);
		_this.graphicsBg.addChild(_this.PlaceValueGroup);
		_this.graphicsBg.addChild(_this.additionwithPlaceValueGroup);
		_this.graphicsBg.addChild(_this.SubtractionWithPlaceValueGroup);
		_this.graphicsBg.addChild(_this.DivisionPart2Group);
		
		
		_this.swipeUpFlag = true;
		_this.swipeDownFlag = false;
		_this.page = document.getElementById("body"); 
		_this.mc = new Hammer(_this.page);
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:false });

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
						if(_this.graphicsBg.y<=-2180)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -2180;
						}
						
						//game.input.enabled = true;
					}, _this);
					_this.tween.onUpdateCallback(function(){
						_this.tap = false;
						if(_this.graphicsBg.y<=-2180)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -2180;
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
					else if(_this.graphicsBg.y<=-2180)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -2180;
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
						else if(_this.graphicsBg.y<=-2180)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -2180;
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



		if(gradeScreen)
		{
			_this.graphicsBg.y = -2180;

			var gameScreenTween = game.add.tween(_this.graphicsBg);
			gameScreenTween.to({ y: 0}, 2000, 'Linear', true, 0);
			gameScreenTween.onComplete.add(function(){
					this.game.input.enabled = true;	

					if(_this.mc)
					{
						_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:true });
					}


			}, _this);


			gradeScreen = false;

		}
		else
		{
			if(_this.mc)
			{
				_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:true });
			}
			
			this.game.input.enabled = true;
		}
	},
	
	
	addGrade3FractionTopic:function()
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
		
		_this.fractions1_1BScreen = _this.add.sprite(100,120,'fractions1_1Screen');
		_this.fractions1_1BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1B');
		_this.fractions1_1BScreenTxt.anchor.setTo(0.5);
		

		_this.fractions1_1BScreen.inputEnabled = true;
		_this.fractions1_1BScreen.input.useHandCursor = true;
		_this.fractions1_1BScreen.name = "Fractions 1.1 B";
		_this.fractions1_1BScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade1_1Blevel1',true,false);
				}
			},_this);
			
		},_this);


		_this.fractions1_2AScreen = _this.add.sprite(300,120,'fractions1_2AScreen');
		_this.fractions1_2AScreenTxt = _this.add.sprite(375,250,'pinwheel1_2A');
		_this.fractions1_2AScreenTxt.anchor.setTo(0.5);
		

		_this.fractions1_2AScreen.inputEnabled = true;
		_this.fractions1_2AScreen.input.useHandCursor = true;
		_this.fractions1_2AScreen.name = "Fractions 1.2 A";
		_this.fractions1_2AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade1_2Alevel1',true,false);
				}
			},_this);
			
		},_this);

		_this.fractions1_2BScreen = _this.add.sprite(500,120,'fractions1_2BScreen');
		_this.fractions1_2BScreenTxt = _this.add.sprite(575,250,'pinwheel1_2B');
		_this.fractions1_2BScreenTxt.anchor.setTo(0.5);
		

		_this.fractions1_2BScreen.inputEnabled = true;
		_this.fractions1_2BScreen.input.useHandCursor = true;
		_this.fractions1_2BScreen.name = "Fractions 1.2 B";
		_this.fractions1_2BScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade1_2Blevel1',true,false);
				}
			},_this);
			
		},_this);

		_this.fractions1_2CScreen = _this.add.sprite(700,120,'fractions1_2CScreen');
		_this.fractions1_2CScreenTxt = _this.add.sprite(775,250,'pinwheel1_2C');
		_this.fractions1_2CScreenTxt.anchor.setTo(0.5);
		

		_this.fractions1_2CScreen.inputEnabled = true;
		_this.fractions1_2CScreen.input.useHandCursor = true;
		_this.fractions1_2CScreen.name = "Fractions 1.2 C";
		_this.fractions1_2CScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade1_2Clevel1',true,false);
				}
			},_this);
			
		},_this);


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.fractions1_1BScreenTxt.frame = 1;
			_this.fractions1_2AScreenTxt.frame = 1;
			_this.fractions1_2BScreenTxt.frame = 1;
			_this.fractions1_2CScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.fractions1_1BScreenTxt.frame = 2;
			_this.fractions1_2AScreenTxt.frame = 2;
			_this.fractions1_2BScreenTxt.frame = 2;
			_this.fractions1_2CScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.fractions1_1BScreenTxt.frame = 0;
			_this.fractions1_2AScreenTxt.frame = 0;
			_this.fractions1_2BScreenTxt.frame = 0;
			_this.fractions1_2CScreenTxt.frame = 0;
		}
		
		
		
		
		_this.grade3FractionGroup.add(_this.topicTxtBg);
		_this.grade3FractionGroup.add(_this.topicTitleText);
		_this.grade3FractionGroup.add(_this.topicBg);
		_this.grade3FractionGroup.add(_this.fractions1_1BScreen);
		_this.grade3FractionGroup.add(_this.fractions1_1BScreenTxt);
		_this.grade3FractionGroup.add(_this.fractions1_2AScreen);
		_this.grade3FractionGroup.add(_this.fractions1_2AScreenTxt);
		_this.grade3FractionGroup.add(_this.fractions1_2BScreen);
		_this.grade3FractionGroup.add(_this.fractions1_2BScreenTxt);
		_this.grade3FractionGroup.add(_this.fractions1_2CScreen);
		_this.grade3FractionGroup.add(_this.fractions1_2CScreenTxt);
		
	},
	
	addGrade3LengthTopic:function()
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
		
		_this.length2_4AScreen = _this.add.sprite(100,120,'length2_4AScreen');
		_this.length2_4AScreenTxt = _this.add.sprite(175, 250, 'length2_4A');
		_this.length2_4AScreenTxt.anchor.setTo(0.5);
		
		
		_this.length2_4AScreen.inputEnabled = true;
		_this.length2_4AScreen.name = "Length 2.4 A";
		_this.length2_4AScreen.input.useHandCursor = true;
		_this.length2_4AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_4Alevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.length2_4BScreen = _this.add.sprite(300,120,'length2_4BScreen');
		_this.length2_4BScreenTxt = _this.add.sprite(375, 250, 'length2_4B');
		_this.length2_4BScreenTxt.anchor.setTo(0.5);
		
		_this.length2_4BScreen.inputEnabled = true;
		_this.length2_4BScreen.input.useHandCursor = true;
		_this.length2_4BScreen.name = "Length 2.1 B";
		_this.length2_4BScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_4Blevel1',true,false);
				}
			},_this);
		},_this);
		
		
		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.length2_4AScreenTxt.frame = 1;
			_this.length2_4BScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.length2_4AScreenTxt.frame = 2;
			_this.length2_4BScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.length2_4AScreenTxt.frame = 0;
			_this.length2_4BScreenTxt.frame = 0;
		}
		
		
		
		_this.grade3LengthGroup.add(_this.topicTxtBg);
		_this.grade3LengthGroup.add(_this.topicTitleText);
		_this.grade3LengthGroup.add(_this.topicBg);
		_this.grade3LengthGroup.add(_this.length2_4AScreen);
		_this.grade3LengthGroup.add(_this.length2_4AScreenTxt);
		_this.grade3LengthGroup.add(_this.length2_4BScreen);
		_this.grade3LengthGroup.add(_this.length2_4BScreenTxt);
		
		
		
	},
	
	addGrade3WeightTopic:function()
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
		_this.topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.weight3_2BScreen = _this.add.sprite(100,120,'weight3_2BScreen');
		_this.weight3_2BScreenTxt = _this.add.sprite(185, 255, 'weight3_2B');
		_this.weight3_2BScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_2BScreen.inputEnabled = true;
		_this.weight3_2BScreen.input.useHandCursor = true;
		_this.weight3_2BScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_2Blevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.weight3_2CScreen = _this.add.sprite(300,120,'weight3_2CScreen');
		_this.weight3_2CScreenTxt = _this.add.sprite(385, 255, 'weight3_2C');
		_this.weight3_2CScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_2CScreen.inputEnabled = true;
		_this.weight3_2CScreen.input.useHandCursor = true;
		_this.weight3_2CScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_2Clevel1',true,false);
				}
			},_this);
		},_this);

		_this.weight3_2DScreen = _this.add.sprite(500,120,'weight3_2DScreen');
		_this.weight3_2DScreenTxt = _this.add.sprite(575, 255, 'weight3_2D');
		_this.weight3_2DScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_2DScreen.inputEnabled = true;
		_this.weight3_2DScreen.input.useHandCursor = true;
		_this.weight3_2DScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_2Dlevel1',true,false);
				}
			},_this);
		},_this);

		_this.weight3_3AScreen = _this.add.sprite(700,120,'weight3_3AScreen');
		_this.weight3_3AScreenTxt = _this.add.sprite(775, 255, 'weight3_3A');
		_this.weight3_3AScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_3AScreen.inputEnabled = true;
		_this.weight3_3AScreen.input.useHandCursor = true;
		_this.weight3_3AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_3Alevel1',true,false);
				}
			},_this);
		},_this);

		_this.weight3_3B1Screen = _this.add.sprite(100,320,'weight3_3B1Screen');
		_this.weight3_3B1ScreenTxt = _this.add.sprite(175, 450, 'weight3_3B1');
		_this.weight3_3B1ScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_3B1Screen.inputEnabled = true;
		_this.weight3_3B1Screen.input.useHandCursor = true;
		_this.weight3_3B1Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_3B1level1',true,false);
				}
			},_this);
		},_this);

		_this.weight3_3B2Screen = _this.add.sprite(300,320,'weight3_3B2Screen');
		_this.weight3_3B2ScreenTxt = _this.add.sprite(375, 450, 'weight3_3B2');
		_this.weight3_3B2ScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_3B2Screen.inputEnabled = true;
		_this.weight3_3B2Screen.input.useHandCursor = true;
		_this.weight3_3B2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_3B2level1',true,false);
				}
			},_this);
		},_this);


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.weight3_2BScreenTxt.frame = 1;
			_this.weight3_2CScreenTxt.frame = 1;
			_this.weight3_2DScreenTxt.frame = 1;
			_this.weight3_3AScreenTxt.frame = 1;
			_this.weight3_3B1ScreenTxt.frame = 1;
			_this.weight3_3B2ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.weight3_2BScreenTxt.frame = 2;
			_this.weight3_2CScreenTxt.frame = 2;
			_this.weight3_2DScreenTxt.frame = 2;
			_this.weight3_3AScreenTxt.frame = 2;
			_this.weight3_3B1ScreenTxt.frame = 2;
			_this.weight3_3B2ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.weight3_2BScreenTxt.frame = 0;
			_this.weight3_2CScreenTxt.frame = 0;
			_this.weight3_2DScreenTxt.frame = 0;
			_this.weight3_3AScreenTxt.frame = 0;
			_this.weight3_3B1ScreenTxt.frame = 0;
			_this.weight3_3B2ScreenTxt.frame = 0;
		}
		
		
		_this.grade3WeightGroup.add(_this.topicTxtBg);
		_this.grade3WeightGroup.add(_this.topicTitleText);
		_this.grade3WeightGroup.add(_this.topicBg);
		_this.grade3WeightGroup.add(_this.weight3_2BScreen);
		_this.grade3WeightGroup.add(_this.weight3_2BScreenTxt);
		_this.grade3WeightGroup.add(_this.weight3_2CScreen);
		_this.grade3WeightGroup.add(_this.weight3_2CScreenTxt);
		_this.grade3WeightGroup.add(_this.weight3_2DScreen);
		_this.grade3WeightGroup.add(_this.weight3_2DScreenTxt);
		_this.grade3WeightGroup.add(_this.weight3_3AScreen);
		_this.grade3WeightGroup.add(_this.weight3_3AScreenTxt);
		_this.grade3WeightGroup.add(_this.weight3_3B1Screen);
		_this.grade3WeightGroup.add(_this.weight3_3B1ScreenTxt);
		_this.grade3WeightGroup.add(_this.weight3_3B2Screen);
		_this.grade3WeightGroup.add(_this.weight3_3B2ScreenTxt);
		
	},

	addGrade3TimeTopic:function()
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
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.time7_1Screen = _this.add.sprite(100,120,'time7_1Screen');
		_this.time7_1ScreenTxt = _this.add.sprite(175, 255, 'time7_1');
		_this.time7_1ScreenTxt.anchor.setTo(0.5);
		
		_this.time7_1Screen.inputEnabled = true;
		_this.time7_1Screen.input.useHandCursor = true;
		_this.time7_1Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade7_1level1',true,false);
				}
			},_this);
		},_this);
		
		_this.time7_2Screen = _this.add.sprite(300,120,'time7_2Screen');
		_this.time7_2ScreenTxt = _this.add.sprite(375, 255, 'time7_2');
		_this.time7_2ScreenTxt.anchor.setTo(0.5);
		
		_this.time7_2Screen.inputEnabled = true;
		_this.time7_2Screen.input.useHandCursor = true;
		_this.time7_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade7_2level1',true,false);
				}
			},_this);
		},_this);
	
		


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.time7_1ScreenTxt.frame = 1;
			_this.time7_2ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.time7_1ScreenTxt.frame = 2;
			_this.time7_2ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.time7_1ScreenTxt.frame = 0;
			_this.time7_2ScreenTxt.frame = 0;
		}
		
		
		_this.grade3TimeGroup.add(_this.topicTxtBg);
		_this.grade3TimeGroup.add(_this.topicTitleText);
		_this.grade3TimeGroup.add(_this.topicBg);
		_this.grade3TimeGroup.add(_this.time7_1Screen);
		_this.grade3TimeGroup.add(_this.time7_1ScreenTxt);
		_this.grade3TimeGroup.add(_this.time7_2Screen);
		_this.grade3TimeGroup.add(_this.time7_2ScreenTxt);
		
	},

	Sequence:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,160,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = _this.add.sprite(180,83,'sequence');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		_this.topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.Caterpillar2_1_3Screen  = _this.add.sprite(100,120,'unity2_1_1Screen');
		_this.Caterpillar2_1_3ScreenTxt = _this.add.sprite(175,255,'Mr. Caterpillar 2.1.3');
		_this.Caterpillar2_1_3ScreenTxt.anchor.setTo(0.5);
		

		_this.Caterpillar2_1_3Screen.inputEnabled = true;
		_this.Caterpillar2_1_3Screen.input.useHandCursor = true;
		_this.Caterpillar2_1_3Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_1_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_1",1);
					
					_this.state.start('unity2_1_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_2_3Screen = _this.add.sprite(300,120,'unity2_2_1Screen');
		_this.Caterpillar2_2_3ScreenTxt = _this.add.sprite(375,255,'Mr. Caterpillar 2.2.3');
		_this.Caterpillar2_2_3ScreenTxt.anchor.setTo(0.5);
		

		_this.Caterpillar2_2_3Screen.inputEnabled = true;
		_this.Caterpillar2_2_3Screen.input.useHandCursor = true;
		_this.Caterpillar2_2_3Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_2_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_2",1);

					_this.state.start('unity2_2_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_3_3Screen = _this.add.sprite(500,120,'unity2_3_1Screen');
		_this.Caterpillar2_3_3ScreenTxt = _this.add.sprite(575,255,'Mr. Caterpillar 2.3.3');
		_this.Caterpillar2_3_3ScreenTxt.anchor.setTo(0.5);
		

		_this.Caterpillar2_3_3Screen.inputEnabled = true;
		_this.Caterpillar2_3_3Screen.input.useHandCursor = true;
		_this.Caterpillar2_3_3Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_3_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_3",1);
					
					_this.state.start('unity2_3_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_4_3Screen = _this.add.sprite(700,120,'unity2_4_1Screen');
		_this.Caterpillar2_4_3ScreenTxt = _this.add.sprite(775,255,'Mr. Caterpillar 2.4.3');
		_this.Caterpillar2_4_3ScreenTxt.anchor.setTo(0.5);
		

		_this.Caterpillar2_4_3Screen.inputEnabled = true;
		_this.Caterpillar2_4_3Screen.input.useHandCursor = true;
		_this.Caterpillar2_4_3Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_4_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_4",1);
					
					_this.state.start('unity2_4_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.Caterpillar2_5_2Screen = _this.add.sprite(100,320,'unity2_5_1');
		_this.Caterpillar2_5_2ScreenTxt = _this.add.sprite(175,455,'Mr. Caterpillar 2.5.3');
		_this.Caterpillar2_5_2ScreenTxt.anchor.setTo(0.5);
		

		_this.Caterpillar2_5_2Screen.inputEnabled = true;
		_this.Caterpillar2_5_2Screen.input.useHandCursor = true;
		_this.Caterpillar2_5_2Screen.name = "Fractions 1.1 A";
		_this.Caterpillar2_5_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					//telInitializer.gameIdInit("unity1_5",1);

					_this.state.start('unity2_5_3level1',true,false);
				}
			},_this);
			
		},_this);


		_this.NumberPuzzle2_6_3Screen = _this.add.sprite(300,320,'unity2_6_1');
		_this.NumberPuzzle2_6_3ScreenTxt = _this.add.sprite(370,455,'Number Puzzle 2.6.3');
		_this.NumberPuzzle2_6_3ScreenTxt.anchor.setTo(0.5);
		

		_this.NumberPuzzle2_6_3Screen.inputEnabled = true;
		_this.NumberPuzzle2_6_3Screen.input.useHandCursor = true;
		_this.NumberPuzzle2_6_3Screen.name = "Fractions 1.1 A";
		_this.NumberPuzzle2_6_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity1_6",1);
					
					_this.state.start('unity2_6_3level1',true,false);
				}
			},_this);
			
		},_this);





		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.Caterpillar2_1_3ScreenTxt.frame = 1;
			_this.Caterpillar2_2_3ScreenTxt.frame = 1;
			_this.Caterpillar2_3_3ScreenTxt.frame = 1;
			_this.Caterpillar2_4_3ScreenTxt.frame = 1;
			_this.Caterpillar2_5_2ScreenTxt.frame = 1;
			_this.NumberPuzzle2_6_3ScreenTxt.frame = 1;
			
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.Caterpillar2_1_3ScreenTxt.frame = 2;
			_this.Caterpillar2_2_3ScreenTxt.frame = 2;
			_this.Caterpillar2_3_3ScreenTxt.frame = 2;
			_this.Caterpillar2_4_3ScreenTxt.frame = 2;
			_this.Caterpillar2_5_2ScreenTxt.frame = 2;
			_this.NumberPuzzle2_6_3ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.Caterpillar2_1_3ScreenTxt.frame = 0;
			_this.Caterpillar2_2_3ScreenTxt.frame = 0;
			_this.Caterpillar2_3_3ScreenTxt.frame = 0;
			_this.Caterpillar2_4_3ScreenTxt.frame = 0;
			_this.Caterpillar2_5_2ScreenTxt.frame = 0;
			_this.NumberPuzzle2_6_3ScreenTxt.frame = 0;
		}
		
		
		
		
		_this.sequenceGroup.add(_this.topicTxtBg);
		_this.sequenceGroup.add(_this.topicTitleText);
		_this.sequenceGroup.add(_this.topicBg);
		_this.sequenceGroup.add(_this.Caterpillar2_1_3Screen);
		_this.sequenceGroup.add(_this.Caterpillar2_1_3ScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_2_3Screen);
		_this.sequenceGroup.add(_this.Caterpillar2_2_3ScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_3_3Screen);
		_this.sequenceGroup.add(_this.Caterpillar2_3_3ScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_4_3Screen);
		_this.sequenceGroup.add(_this.Caterpillar2_4_3ScreenTxt);
		_this.sequenceGroup.add(_this.Caterpillar2_5_2Screen);
		_this.sequenceGroup.add(_this.Caterpillar2_5_2ScreenTxt);
		_this.sequenceGroup.add(_this.NumberPuzzle2_6_3Screen);
		_this.sequenceGroup.add(_this.NumberPuzzle2_6_3ScreenTxt);

		
	},

	PlaceValue:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,175,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = _this.add.sprite(180,83,'PLACE VALUE');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.placeValue3_1_2Screen = _this.add.sprite(100,120,'unity3.1.2');
		_this.placeValue3_1_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 3.1.2');
		_this.placeValue3_1_2ScreenTxt.anchor.setTo(0.5);
		

		_this.placeValue3_1_2Screen.inputEnabled = true;
		_this.placeValue3_1_2Screen.input.useHandCursor = true;
		_this.placeValue3_1_2Screen.name = "Fractions 1.1 A";
		_this.placeValue3_1_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity5_1",1);
					
					_this.state.start('unity3_1_2level1',true,false);
				}
			},_this);
			
		},_this);

		_this.placeValue3_2_2Screen = _this.add.sprite(300,120,'unity3.1.2');
		_this.placeValue3_2_2ScreenTxt = _this.add.sprite(365,255,'Coin Machine 3.2.2');
		_this.placeValue3_2_2ScreenTxt.anchor.setTo(0.5);
		

		_this.placeValue3_2_2Screen.inputEnabled = true;
		_this.placeValue3_2_2Screen.input.useHandCursor = true;
		_this.placeValue3_2_2Screen.name = "Fractions 1.1 A";
		_this.placeValue3_2_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity5_1",1);
					
					_this.state.start('unity3_2_2level1',true,false);
				}
			},_this);
			
		},_this);


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.placeValue3_1_2ScreenTxt.frame = 1;
			_this.placeValue3_2_2ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.placeValue3_1_2ScreenTxt.frame = 2;
			_this.placeValue3_2_2ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.placeValue3_1_2ScreenTxt.frame = 0;
			_this.placeValue3_2_2ScreenTxt.frame = 0;
		}
		
		
		
		
		_this.PlaceValueGroup.add(_this.topicTxtBg);
		_this.PlaceValueGroup.add(_this.topicTitleText);
		_this.PlaceValueGroup.add(_this.topicBg);
		_this.PlaceValueGroup.add(_this.placeValue3_1_2Screen);
		_this.PlaceValueGroup.add(_this.placeValue3_1_2ScreenTxt);
		_this.PlaceValueGroup.add(_this.placeValue3_2_2Screen);
		_this.PlaceValueGroup.add(_this.placeValue3_2_2ScreenTxt);
		
	},

	additionwithPlaceValue:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,160,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = _this.add.sprite(180,83,'ADDITION');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.coinMachine7_1_3Screen = _this.add.sprite(100,120,'unity7_2_1');
		_this.coinMachine7_1_3ScreenTxt = _this.add.sprite(165,255,'Coin Machine 7.1.3');
		_this.coinMachine7_1_3ScreenTxt.anchor.setTo(0.5);
		

		_this.coinMachine7_1_3Screen.inputEnabled = true;
		_this.coinMachine7_1_3Screen.input.useHandCursor = true;
		_this.coinMachine7_1_3Screen.name = "Fractions 1.1 A";
		_this.coinMachine7_1_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity5_1",1);
					
					_this.state.start('unity7_1_3level1',true,false);
				}
			},_this);
			
		},_this);

		_this.coinMachine7_2_3Screen = _this.add.sprite(300,120,'unity7_2_1');
		_this.coinMachine7_2_3ScreenTxt = _this.add.sprite(365,255,'Coin Machine 7.2.3');
		_this.coinMachine7_2_3ScreenTxt.anchor.setTo(0.5);
		

		_this.coinMachine7_2_3Screen.inputEnabled = true;
		_this.coinMachine7_2_3Screen.input.useHandCursor = true;
		_this.coinMachine7_2_3Screen.name = "Fractions 1.1 A";
		_this.coinMachine7_2_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity5_1",1);
					
					_this.state.start('unity7_2_3level1',true,false);
				}
			},_this);
			
		},_this);


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.coinMachine7_1_3ScreenTxt.frame = 1;
			_this.coinMachine7_2_3ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.coinMachine7_1_3ScreenTxt.frame = 2;
			_this.coinMachine7_2_3ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.coinMachine7_1_3ScreenTxt.frame = 0;
			_this.coinMachine7_2_3ScreenTxt.frame = 0;
		}
		
		
		
		
		_this.additionwithPlaceValueGroup.add(_this.topicTxtBg);
		_this.additionwithPlaceValueGroup.add(_this.topicTitleText);
		_this.additionwithPlaceValueGroup.add(_this.topicBg);
		_this.additionwithPlaceValueGroup.add(_this.coinMachine7_1_3Screen);
		_this.additionwithPlaceValueGroup.add(_this.coinMachine7_1_3ScreenTxt);
		_this.additionwithPlaceValueGroup.add(_this.coinMachine7_2_3Screen);
		_this.additionwithPlaceValueGroup.add(_this.coinMachine7_2_3ScreenTxt);
		
	},

	SubstractionWithPlaceValue:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,200,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = _this.add.sprite(195,83,'SUBTRACTION');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.coinMachine10_1_3Screen = _this.add.sprite(100,120,'unity10.1.2');
		_this.coinMachine10_1_3ScreenTxt = _this.add.sprite(165,255,'Coin Machine 10.1.3');
		_this.coinMachine10_1_3ScreenTxt.anchor.setTo(0.5);
		

		_this.coinMachine10_1_3Screen.inputEnabled = true;
		_this.coinMachine10_1_3Screen.input.useHandCursor = true;
		_this.coinMachine10_1_3Screen.name = "Fractions 1.1 A";
		_this.coinMachine10_1_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity8_1",1);
					
					_this.state.start('unity10_1_3level1',true,false);
				}
			},_this);
			
		},_this);

		_this.coinMachine10_2_3Screen = _this.add.sprite(300,120,'unity10.2.2');
		_this.coinMachine10_2_3ScreenTxt = _this.add.sprite(365,255,'Coin Machine 10.2.3');
		_this.coinMachine10_2_3ScreenTxt.anchor.setTo(0.5);
		

		_this.coinMachine10_2_3Screen.inputEnabled = true;
		_this.coinMachine10_2_3Screen.input.useHandCursor = true;
		_this.coinMachine10_2_3Screen.name = "Fractions 1.1 A";
		_this.coinMachine10_2_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity8_1",1);
					
					_this.state.start('unity10_2_3level1',true,false);
				}
			},_this);
			
		},_this);


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.coinMachine10_1_3ScreenTxt.frame = 1;
			_this.coinMachine10_2_3ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.coinMachine10_1_3ScreenTxt.frame = 2;
			_this.coinMachine10_2_3ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.coinMachine10_1_3ScreenTxt.frame = 0;
			_this.coinMachine10_2_3ScreenTxt.frame = 0;
		}
		
		
		
		
		_this.SubtractionWithPlaceValueGroup.add(_this.topicTxtBg);
		_this.SubtractionWithPlaceValueGroup.add(_this.topicTitleText);
		_this.SubtractionWithPlaceValueGroup.add(_this.topicBg);
		_this.SubtractionWithPlaceValueGroup.add(_this.coinMachine10_1_3Screen);
		_this.SubtractionWithPlaceValueGroup.add(_this.coinMachine10_1_3ScreenTxt);
		_this.SubtractionWithPlaceValueGroup.add(_this.coinMachine10_2_3Screen);
		_this.SubtractionWithPlaceValueGroup.add(_this.coinMachine10_2_3ScreenTxt);
		
	},


	DivisionPart2:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,200,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = _this.add.sprite(195,83,'DIVISION');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.division17_2Screen = _this.add.sprite(100,120,'unity17.2');
		_this.division17_2ScreenTxt = _this.add.sprite(165,255,'Coin Machine 17.2');
		_this.division17_2ScreenTxt.anchor.setTo(0.5);
		

		_this.division17_2Screen.inputEnabled = true;
		_this.division17_2Screen.input.useHandCursor = true;
		_this.division17_2Screen.name = "Fractions 1.1 A";
		_this.division17_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity8_1",1);
					
					_this.state.start('unity17_2level1',true,false);
				}
			},_this);
			
		},_this);

		/*_this.division17_3Screen = _this.add.sprite(300,120,'unity10.2.2');
		_this.division17_3ScreenTxt = _this.add.sprite(365,250,'Coin Machine');
		_this.division17_3ScreenTxt.anchor.setTo(0.5);
		

		_this.division17_3Screen.inputEnabled = true;
		_this.division17_3Screen.input.useHandCursor = true;
		_this.division17_3Screen.name = "Fractions 1.1 A";
		_this.division17_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					//telInitializer.gameIdInit("unity8_1",1);
					
					_this.state.start('unity17_3level1',true,false);
				}
			},_this);
			
		},_this);*/


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.division17_2ScreenTxt.frame = 1;
			//_this.division17_3ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.division17_2ScreenTxt.frame = 2;
			//_this.division17_3ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.division17_2ScreenTxt.frame = 0;
			//_this.division17_3ScreenTxt.frame = 0;
		}
		
		
		
		
		_this.DivisionPart2Group.add(_this.topicTxtBg);
		_this.DivisionPart2Group.add(_this.topicTitleText);
		_this.DivisionPart2Group.add(_this.topicBg);
		_this.DivisionPart2Group.add(_this.division17_2Screen);
		_this.DivisionPart2Group.add(_this.division17_2ScreenTxt);
		//_this.DivisionPart2Group.add(_this.division17_3Screen);
		//_this.DivisionPart2Group.add(_this.division17_3ScreenTxt);
		
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
		_this.grade3FractionGroup = null;
		_this.grade3LengthGroup = null;
		_this.grade3WeightGroup = null;
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