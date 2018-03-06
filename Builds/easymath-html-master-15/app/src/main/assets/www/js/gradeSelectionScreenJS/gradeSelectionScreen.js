Game.gradeSelectionScreen=function(){

};
var grade2Selected = false;
Game.gradeSelectionScreen.prototype={
	
	init:function()
	{
		_this = this;
		
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

	create:function(){				
		
		
		//adding bg, title to the scene.
		_this.game.stage.disableVisibilityChange=true;
		_this.input.enabled = true;
		
		_this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'gameselectBg');
		
		_this.gradeBackBtn = _this.add.sprite(10,3,'gradeSceneBackBtn');
		_this.gradeBackBtn.inputEnabled = true;
		_this.gradeBackBtn.input.useHandCursor = true;
		_this.gradeBackBtn.events.onInputDown.add(function(){navigator.app.exitApp();},_this);
		
		//adding grade clouds
		_this.grade1Cloud = _this.add.sprite(220,170,'grade1Cloud');
		//grade1Cloud = _this.add.sprite(_this.world.centerX,_this.world.centerY,'gradeCloud');
		_this.grade1Cloud.anchor.setTo(0.5);
		_this.grade1Cloud.name = "grade1";
		_this.grade1Cloud.inputEnabled = true;
		_this.grade1Cloud.input.useHandCursor = true;
		//_this.grade1Cloud.events.onInputOver.add(_this.onMouseOver,_this);
		_this.grade1Cloud.events.onInputDown.add(_this.gradeSelected,_this);
		

		_this.grade2Cloud = _this.add.sprite(750,190,'grade2Cloud');
		_this.grade2Cloud.anchor.setTo(0.5);
		_this.grade2Cloud.name = "grade2";
		_this.grade2Cloud.inputEnabled = true;
		_this.grade2Cloud.input.useHandCursor = true;
		//grade2Cloud.events.onInputOver.add(_this.onMouseOver,_this);
		_this.grade2Cloud.events.onInputDown.add(_this.gradeSelected,_this);
		
		
		//grade3Cloud = _this.add.sprite(_this.world.centerX,_this.world.centerY,'grade3Cloud');
		_this.grade3Cloud = _this.add.sprite(250,400,'grade3Cloud');
		_this.grade3Cloud.anchor.setTo(0.5);
		_this.grade3Cloud.name = "grade3";
		_this.grade3Cloud.inputEnabled = true;
		_this.grade3Cloud.input.useHandCursor = true;
		//grade3Cloud.events.onInputOver.add(_this.onMouseOver,_this);
		_this.grade3Cloud.events.onInputDown.add(_this.gradeSelected,_this);
		
		
		//grade4Cloud = _this.add.sprite(250,400,'grade4Cloud');
		_this.grade4Cloud = _this.add.sprite(700,420,'grade4Cloud');
		_this.grade4Cloud.anchor.setTo(0.5);
		_this.grade4Cloud.name = "grade4";
		_this.grade4Cloud.inputEnabled = true;
		_this.grade4Cloud.input.useHandCursor = true;
		//grade4Cloud.events.onInputOver.add(_this.onMouseOver,_this);
		_this.grade4Cloud.events.onInputDown.add(_this.gradeSelected,_this);
		

		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xF7D519, 0);
		_this.graphicsBg.drawRect(0,0,1920,540);
		_this.graphicsBg.boundsPadding = 0;

		if(window.languageSelected=="Hindi")
		{
			_this.grade1Cloud.frame = 1;
			_this.grade2Cloud.frame = 1;
			_this.grade3Cloud.frame = 1;
			_this.grade4Cloud.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.grade1Cloud.frame = 2;
			_this.grade2Cloud.frame = 2;
			_this.grade3Cloud.frame = 2;
			_this.grade4Cloud.frame = 2;
		}
		else
		{
			_this.grade1Cloud.frame = 0;
			_this.grade2Cloud.frame = 0;
			_this.grade3Cloud.frame = 0;
			_this.grade4Cloud.frame = 0;
		}
		
		_this.graphicsBg.addChild(_this.grade1Cloud);
		_this.graphicsBg.addChild(_this.grade2Cloud);
		_this.graphicsBg.addChild(_this.grade3Cloud);
		_this.graphicsBg.addChild(_this.grade4Cloud);

		
		
	},
	
	onMouseOver:function(target)
	{
		
		
	},
	
	gradeSelected:function(target)
	{
		
		_this.gradeBackBtn.events.onInputDown.removeAll();
		_this.grade1Cloud.events.onInputDown.removeAll();
		_this.grade2Cloud.events.onInputDown.removeAll();
		_this.grade3Cloud.events.onInputDown.removeAll();
		_this.grade4Cloud.events.onInputDown.removeAll();
		
		
		_this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();

      
		
		switch(target.name)
		{
			case "grade1" :
							grade2Selected = false;
							_this.state.start('grade1levelSelectionScreen',true,false);
							break;
			case "grade2" :
							grade2Selected = true;
							_this.state.start('grade2levelSelectionScreen',true,false);
							break;
			case "grade3" :
							grade2Selected = false;
							_this.state.start('grade3levelSelectionScreen',true,false);
							break;
			case "grade4" :
							grade2Selected = false;
							_this.state.start('grade4levelSelectionScreen',true,false);
							break;
		}
	},
	
	shutdown:function()
	{
		document.removeEventListener("online", _this.syncTelFunc, false);
		/*_this.gradeBackBtn.events.onInputDown.removeAll();
		_this.grade1Cloud.events.onInputDown.removeAll();
		_this.grade2Cloud.events.onInputDown.removeAll();
		_this.grade3Cloud.events.onInputDown.removeAll();
		_this.grade4Cloud.events.onInputDown.removeAll();
				

		_this.background = null;

		_this.gradeBackBtn = null;

		_this.grade1Cloud = null;
		
		_this.grade2Cloud = null;
		
		_this.grade3Cloud = null;

		_this.grade4Cloud = null;
		
		_this.graphicsBg = null;
		
		_this.clickSound = null;*/

		/*
		_this.world.onChildInputDown.removeAll();
        _this.world.removeChildren(0, _this.world.length);

		//this = null;
		_this = null;*/
	}
	
};