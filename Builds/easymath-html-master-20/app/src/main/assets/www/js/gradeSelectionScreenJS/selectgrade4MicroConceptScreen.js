Game.selectgrade4MicroConceptScreen=function(){

};

Game.selectgrade4MicroConceptScreen.prototype={

	game:null,
	selected:false,

	init:function()
	{

		if(app.cordova)
		{
			if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
			{
				absdsjsapi.syncTelemetryData();
			}
			document.addEventListener("online", this.syncTelFunc, false);
		}
	},
			
	syncTelFunc:function()
	{
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			absdsjsapi.syncTelemetryData();
		}
	},

	create:function(game){		

		this.game = game;

		selectgrade4MicroConcept = true;

		selectgrade1MicroConcept = false;
		selectgrade2MicroConcept = false;
		selectgrade3MicroConcept = false;
		

		if(grade4MeasurementSelected)
		{
			this.state.start('grade4Measurement',true,false);
		}
		else
		{

			app.gradeScreen = true;

			game.input.enabled = true;

			this.gradeTree = [];

			this.gradeTreeTxt = [];

			this.gameArray = [];

			/*this.NumberSenseGrade1Array = [
			[app.languageSelected.numberTitle,'unity1_1','unity1_2','unity1_3','unity1_4','unity1_5','unity1_6','unity1_7'],
			[app.languageSelected.sequenceTitle,'unity2_1_1','unity2_2_1','unity2_3_1','unity2_4_1','unity2_5_1','unity2_6_1'],
			[app.languageSelected.ComparisionTitle,'unity4_1_1','unity4_2_1','unity4_3_1','unity4_4_1','unity4_5_1'],
			[app.languageSelected.fractionTitle,'akshara1_1A','akshara1_1B'],
			];

			this.MeasurementGrade1Array = [
			[app.languageSelected.additionTitle,'unity5_1','unity6_1','unity7_1_1','unity7_2_1'],
			[app.languageSelected.subtractionTitle,'unity8_1','unity10_1_1','unity10_2_1'],
			[app.languageSelected.multiplicationTitle,'unity11_1','unity11_2','unity12_3_1'],
			[app.languageSelected.divisionTitle,'unity16_1','unity16_2'],
			];

			this.NumberOperationsGrade1Array = [
			[app.languageSelected.lengthTitle,'akshara2_1A','akshara2_1B','akshara2_2','akshara2_3'],
			[app.languageSelected.weightTitle,'akshara3_1','akshara3_2A'],
			[app.languageSelected.timeTitle,'akshara5_1','akshara5_2','akshara5_4'],
			];

			/*this.NumberSenseGrade2Array = [
			[app.languageSelected.sequenceTitle,'unity2_1_2','unity2_2_2','unity2_3_2','unity2_4_2','unity2_5_2','unity2_6_2'],
			[app.languageSelected.ComparisionTitle,'unity4_3_2','unity4_4_2','unity4_5_2'],
			[app.languageSelected.placeValueTitle,'unity3_1_1','unity3_2_1'],
			[app.languageSelected.fractionTitle,'akshara1_1A','akshara1_1B'],
			];

			this.MeasurementGrade2Array = [
			[app.languageSelected.additionTitle,'unity7_1_1','unity7_2_1'],
			[app.languageSelected.subtractionTitle,'unity10_1_2','unity10_2_2'],
			[app.languageSelected.multiplicationTitle,'unity12_1','unity12_2','unity12_3_2','unity12_3_3'],
			[app.languageSelected.divisionTitle,'unity15_1','unity16_1','unity16_2','unity16_3','unity17_2','unity17_3'],
			];

			this.NumberOperationsGrade2Array = [
			[app.languageSelected.lengthTitle,'akshara2_1A','akshara2_1B','akshara2_2','akshara2_3'],
			[app.languageSelected.weightTitle,'akshara3_1','akshara3_2A'],
			[app.languageSelected.timeTitle,'akshara5_1','akshara5_2','akshara5_4','akshara6_1','akshara6_2'],
			];*/
			
			
			gradeScreen = true;
			this.background = game.add.tileSprite(0,0,game.world.width,game.world.height,'McBg');
			
			this.gradeBackBtn = game.add.sprite(10,3,'gradeSceneBackBtn');
			this.gradeBackBtn.inputEnabled = true;
			this.gradeBackBtn.input.useHandCursor = true;
			this.gradeBackBtn.events.onInputDown.add(function(){

				this.clickSound = _this.add.audio('ClickSound');
	        	this.clickSound.play();
				selectgrade4MicroConcept = false;
				game.state.start('gradeSelectionScreen',true,false);

			},this);


			/*this.microConceptTopics(game,150,250,app.languageSelected.McTopicText1,0);
			this.microConceptTopics(game,330,400,app.languageSelected.McTopicText2,1);
			this.microConceptTopics(game,480,250,app.languageSelected.McTopicText3,2);
			this.microConceptTopics(game,630,400,app.languageSelected.McTopicText4,3);
			this.microConceptTopics(game,810,300,app.languageSelected.McTopicText5,4);*/

			//this.microConceptTopics(game,180,250,"NUMBER SENSE",0);
			//this.microConceptTopics(game,480,250,"NUMBER \nOPERATIONS",1);
			this.microConceptTopics(game,480,250,selctedLang.McTopicText2,"MEASUREMENT",0);
		}
		
	},

	microConceptTopics:function(game,x,y,lang,name,arrIndex)
	{
		this.gradeTree[arrIndex] = game.add.sprite(x,y,'MicroConceptTree');

		this.gradeTree[arrIndex].anchor.setTo(0.5);
		this.gradeTree[arrIndex].scale.setTo(1.5);
		this.gradeTree[arrIndex].name = name;
		this.gradeTree[arrIndex].frame = arrIndex;
		this.gradeTree[arrIndex].inputEnabled = true;
		this.gradeTree[arrIndex].input.useHandCursor = true;
		this.gradeTree[arrIndex].events.onInputDown.add(this.topicSelected,this);


		this.gradeTreeTxt[arrIndex] = this.add.text(x, y-40, ' \n '+lang+' \n ');
		this.gradeTreeTxt[arrIndex].anchor.setTo(0.5);
		this.gradeTreeTxt[arrIndex].align = 'center';
		
				
		//this.gradeTreeTxt[arrIndex].font = 'Ariel';
		this.gradeTreeTxt[arrIndex].fontSize = 24;
		this.gradeTreeTxt[arrIndex].fontWeight = 'normal';
		this.gradeTreeTxt[arrIndex].fill = '#FFFFFF';

		this.gradeTreeTxt[arrIndex].wordWrap = true;
		this.gradeTreeTxt[arrIndex].wordWrapWidth = 500;
		
	},
	
	onMouseOver:function(target)
	{
		
		
	},
	
	topicSelected:function(target)
	{
					
        this.clickSound = _this.add.audio('ClickSound');
        this.clickSound.play();

        
		if(target.name=="NUMBER SENSE")
		{
			this.state.start('grade4NumberSense',true,false);
		}
		else if(target.name=="MEASUREMENT")
		{
			this.state.start('grade4Measurement',true,false);
		}
		else
		{
			this.state.start('grade4NumberOperation',true,false);
		}
	},
	
	shutdown:function()
	{
		if(app.cordova)
			document.removeEventListener("online", _this.syncTelFunc, false);

		/*this.game = null;
		delete this.game;


		this.background.destroy();
		this.background = null;
		delete this.background;

		this.gradeBackBtn.events.onInputDown.removeAll();
		this.gradeBackBtn.destroy();
		this.gradeBackBtn = null;
		delete this.background;
		
		this.gradeTree[0].events.onInputDown.removeAll();
        //this.gradeTree[1].events.onInputDown.removeAll();
        //this.gradeTree[2].events.onInputDown.removeAll();
        //this.gradeTree[3].events.onInputDown.removeAll();
        //this.gradeTree[4].events.onInputDown.removeAll();

        this.gradeTree[0].destroy();
        //this.gradeTree[1].destroy();
        //this.gradeTree[2].destroy();
        //this.gradeTree[3].destroy();
        //this.gradeTree[4].destroy();

        this.gradeTreeTxt[0].destroy();
        //this.gradeTreeTxt[1].destroy();
        //this.gradeTreeTxt[2].destroy();
        //this.gradeTreeTxt[3].destroy();
        //this.gradeTreeTxt[4].destroy();

        this.gradeTree = [];
        this.gradeTree = null;

        this.gradeTreeTxt = [];
        this.gradeTreeTxt = null;

        delete this.gradeTree;
        delete this.gradeTreeTxt;*/

	}
	
};