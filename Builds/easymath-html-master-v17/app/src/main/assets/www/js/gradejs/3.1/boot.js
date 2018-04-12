Game.grade3_1boot=function(game){
	
};

Game.grade3_1boot.prototype={
	
	
	preload:function(){
		
		this.load.image('preloadBar','assets/commonAssets/progressBar.png');
		this.load.image('CommonBackground','assets/commonAssets/commonBg.png');
	},
	
	create:function(){
	
		this.state.start('grade3_1preloader');
		
	},
}