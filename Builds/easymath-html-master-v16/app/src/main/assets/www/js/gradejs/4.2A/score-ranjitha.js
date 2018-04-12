Game.grade4_2AScore=function(game){

};
var background4;
var replay;

Game.grade4_2AScore.prototype={
	create:function(game){
		
		background4 = this.add.tileSprite(0,0,this.world.width,this.world.height, 'Level42A_bg3');
                    
        		
		//var bottomLine = this.add.sprite(this.world.centerX,this.world.centerY,'bottomLine');
        //bottomLine.anchor.setTo(0.5,0.5);
        //bottomLine.y = this.world.centerY+280;
		
//		
//		scoretext = this.add.text(this.world.centerX-50, this.world.centerY, selctedLang.TotalScore+' : '+score);
//		scoretext.scale.setTo(1.5);
//		scoretext.anchor.setTo(0.5);
//		scoretext.align = 'center';
//
//		scoretext.font = 'Comic Sans MS';
//		scoretext.fontSize = 40;
//		//text.fontWeight = 'bold';
//		scoretext.fill = '#FFFFFF';
//
//		scoretext.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
//        
//                var scoretext6 = this.add.text(this.world.centerX, 200, selctedLang.End);
//
//				 scoretext6.anchor.set(0.5);
//				 scoretext6.align = 'center';
//
//				 scoretext6.font = 'Arial Black';
//				 scoretext6.fontSize = 70;
//				 scoretext6.fontWeight = 'bold';
//				 scoretext6.fill = '#FFFFFF';
//
//				 scoretext6.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
        
        
                
                replay = this.add.button(this.world.centerX,this.world.centerY,'Level42A_replay',null,this,0,1,2);
		        replay.scale.setTo(2,2);
		        replay.anchor.setTo(0.5);
                replay.inputEnabled = true;
		        replay.input.useHandCursor = true; 
                replay.events.onInputDown.add(function(){ 
                    this.clickSound = _this.add.audio('ClickSound');
                    this.clickSound.play();
                    this.state.start('grade4_2Alevel1');
                 },this);
//        
//        scoretext7 = this.add.text(this.world.centerX-10, 300, selctedLang.Replay);
//
//				 scoretext7.anchor.set(0.5);
//				 scoretext7.align = 'center';
//
//				 scoretext7.font = 'Arial Black';
//				 scoretext7.fontSize = 25;
//				 //scoretext7.fontWeight = 'bold';
//				 scoretext7.fill = '#FFFFFF';
//
//				 scoretext7.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);

		
		//localStorage.setItem('Score', JSON.stringify(score));
                   
	},

	update:function(){

	},

};