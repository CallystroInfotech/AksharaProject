var Game={};

Game.boot=function(){
	
};

Game.boot.prototype={
	
	preload:function(){
		
		_this = this;
		_this.cache.destroy();		
		
		_this.load.json('translations', 'json/commonJson/lang.json');
				
		_this.load.image('preloadBar','assets/commonAssets/progressBar.png');
		_this.load.image('CommonBackground','assets/commonAssets/commonBg.png');
		
		_this.load.atlas('CommonAssets','assets/commonAssets/phaserTest.png','assets/commonAssets/phaserTest.json');		      	
	},

	create:function(){
		_this.bg = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonAssets','commonBg');
		_this.bg.scale.setTo(1,1.5);
		
		_this.game.input.maxPointers = 1;

		//this.Input.MOUSE_OVERRIDES_TOUCH = 1;
		//_this.game.input.multiInputOverride = Phaser.Input.TOUCH_OVERRIDES_MOUSE;

		//_this.game.input.touch.preventDefault = true;

		_this.game.stage.disableVisibilityChange=true;
		
		//setting scale and orientation for the game.
		_this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        _this.scale.pageAlignHorizontally = true;
        _this.scale.pageAlignVertically = true;
        _this.scale.updateLayout(true);
        _this.scale.forceOrientation(false, true);
		
		
		
		var translations = _this.cache.getJSON('translations');
		
		if(window.languageSelected == "Hindi")
		{
			window.selctedLang = translations.hn;
		}
		else if(window.languageSelected == "Kannada")
		{
			window.selctedLang = translations.kan;
		}
		else
		{
			window.selctedLang = translations.en;
		}
					
		_this.state.start('preloader',true,false);			
	},
	
	shutdown:function()
	{
		_this = null;
	}
	
}