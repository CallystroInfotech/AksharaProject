Game.grade2_2boot=function(game){
	
};

Game.grade2_2boot.prototype={
	
	
	preload:function(){
		
		this.load.image('preloadBar','assets/commonAssets/progressBar.png');
		this.load.image('CommonBackground','assets/commonAssets/commonBg.png');
	},
	
	create:function(){
	
		this.state.start('grade2_2preloader');
		
	},
}