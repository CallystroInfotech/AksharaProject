Game.unity16_3Score=function(game){

};

Game.unity16_3Score.prototype={
	create:function(game){
		
		_this = this;
		
		_this.background = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonBackground');
		_this.background.scale.setTo(1,1.5);

		if(this.video==null)
			{	
				this.video = this.add.video('demo7_1_1');
				
			}
		
		
		_this.homeBtn = _this.add.sprite(_this.world.centerX-150,_this.world.centerY,'CommonHomeBtn');
		_this.homeBtn.scale.setTo(2,2);
		_this.homeBtn.anchor.setTo(0.5);
		_this.homeBtn.inputEnabled = true;
		_this.homeBtn.events.onInputDown.add(function(){
			_this.homeBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			if(grade2Selected == false)
              _this.state.start('grade1levelSelectionScreen',true,false); 
            else if(grade2Selected == true)
              _this.state.start('grade2levelSelectionScreen',true,false); 
            else
              _this.state.start('grade3levelSelectionScreen',true,false); 
			},_this);
		
		
		_this.nextBtn = _this.add.sprite(_this.world.centerX+150,_this.world.centerY,'CommonNextBtn');    
		_this.nextBtn.scale.setTo(2,2);
        _this.nextBtn.anchor.setTo(0.5);	
		_this.nextBtn.inputEnabled = true;
		_this.nextBtn.events.onInputDown.add(function()
		{
			_this.nextBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			
			this.video.play(false);
					this.video.changeSource(window.baseUrl+"assets/demoVideos/17_2.mp4");
					this.video.addToWorld();
					
					this.video.play(false);

					/**************************Play Demo VO And Skip Demo *****************************/
					this.video.playbackRate = 1;    // slow down the video
					_this.time.events.add(2000, function(){
						_this.playDemoVideos('17_2a');
						_this.skipDemos = _this.add.sprite(803,415,'skipDemoVideos');
						_this.skipDemos.inputEnabled = true;
						_this.skipDemos.events.onInputDown.add(function(){
							  _this.stopDemoVoice();
							  this.video.stop(false);
							  this.game.input.enabled = true;
							  _this.state.start('unity17_2level1',true,false);
							},_this);
						_this.time.events.add(15000, function(){
							_this.playDemoVideos('17_2b');
						},_this);
						_this.time.events.add(39000, function(){
							_this.playDemoVideos('17_2c');
						},_this);
					},_this);
					
					/***********************************************************/
					
					
					this.video.onComplete.add(function(){
					
					_this.state.start('unity17_2level1',true,false);
					//_this.state.start('unity7_1_1demo',true,false);
					},this);
					
			//_this.cache.destroy();
			//_this.state.start('unity7_2_1level1',true,false); 
			//_this.state.start('unity17_2level1',true,false);
		},_this);


            if(gradeSelected == 2)
             	_this.nextBtn.visible = true;
             else if(gradeSelected == 3)
             	_this.nextBtn.visible = true;
             else
             	_this.nextBtn.visible = false;
        
        
                
                _this.replay = _this.add.button(_this.world.centerX,_this.world.centerY,'CommonReplayBtn',null,_this,0,1,2);
		        _this.replay.scale.setTo(2,2);
		        _this.replay.anchor.setTo(0.5);
                _this.replay.inputEnabled = true;
		        _this.replay.input.useHandCursor = true; 
                _this.replay.events.onInputDown.add(function(){ 
					_this.replay.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
                    _this.state.start('unity16_3level1',true,false);
                 },_this);

                   
	},
playDemoVideos:function(target){
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
		        switch(target)
				{
					case '17_2a':  if(window.languageSelected == "English")
									{
										_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 17.2a.mp3");
									}
									else if(window.languageSelected == "Hindi")
									{
										_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 17.2a.mp3");
									}
									else if(window.languageSelected == "Kannada")
									{
										_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 17.2a.mp3");
									}
									else
									{
										_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/17.2a.mp3");
										_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
									}
									break;
					case '17_2b':  if(window.languageSelected == "English")
									{
										_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 17.2b.mp3");
									}
									else if(window.languageSelected == "Hindi")
									{
										_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 17.2b.mp3");
									}
									else if(window.languageSelected == "Kannada")
									{
										_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 17.2b.mp3");
									}
									else
									{
										_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/17.2b.mp3");
										_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
									}
									break;
					case '17_2c':  if(window.languageSelected == "English")
									{
										_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/English/Game 17.2c.mp3");
									}
									else if(window.languageSelected == "Hindi")
									{
										_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Hindi/Game 17.2c.mp3");
									}
									else if(window.languageSelected == "Kannada")
									{
										_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Kannada/Game 17.2c.mp3");
									}
									else
									{
										_this.src.setAttribute("src", window.baseUrl+"assets/DemoVOs/Odiya/17.2c.mp3");
										_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
									}
									break;
				}		
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
		
	amplifyMedia:function(mediaElem, multiplier) {
		  var context = new (window.AudioContext || window.webkitAudioContext),
		      result = {
		        context: context,
		        source: context.createMediaElementSource(mediaElem),
		        gain: context.createGain(),
		        media: mediaElem,
		        amplify: function(multiplier) { result.gain.gain.value = multiplier; },
		        getAmpLevel: function() { return result.gain.gain.value; }
		      };
		  result.source.connect(result.gain);
		  result.gain.connect(context.destination);
		  result.amplify(multiplier);

		  return result;
	},
	
	stopDemoVoice:function(){
            if(_this.playQuestionSound)
		   {
			if(_this.playQuestionSound.contains(_this.src))
			{
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if(!_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.pause();
				_this.playQuestionSound.currentTime = 0.0;
			}
			_this.playQuestionSound = null;
			_this.src = null;
		}
	},
	shutdown:function()
	{
		_this.background = null;
		_this.homeBtn.events.onInputDown.removeAll();
		_this.homeBtn=null;
		_this.nextBtn.events.onInputDown.removeAll();
		_this.nextBtn=null;
		_this.replay.events.onInputDown.removeAll();
		_this.replay=null;

		if(this.video)
		{
			this.video.destroy();
			this.video.removeVideoElement();
			this.video = null;
		}
		
		_this = null;
	}

                   
	

};