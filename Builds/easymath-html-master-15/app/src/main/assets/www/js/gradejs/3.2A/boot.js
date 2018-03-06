Game.grade3_2Aboot=function(game){
	
};

Game.grade3_2Aboot.prototype={
	
	
	preload:function(){
		
		this.load.image('preloadBar','assets/commonAssets/progressBar.png');
		this.load.image('CommonBackground','assets/commonAssets/commonBg.png');
	},
	
	create:function(){
	
		this.state.start('grade3_2Apreloader');
		
	},
}