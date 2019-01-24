	var exitOnce = false;
	var app = {

	gamesVar:null,

    // Application Constructor
    initialize: function() {

		window.acctkn = "5a898f53cac9d";
		window.avatarName = "Tree";
		window.deviceId = "db98cc6d_a60627c5be3e057e";
		window.languageSelected = "English";
		window.gradeSelected = "1";
		window.selctedLang = null;
		window.baseUrl = "./";
		window.score = 50;
		window.mcIcon = null;		
		
		window.urlstrArray = parser.printkeys();
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function(e) {
		
        this.receivedEvent('deviceready');
        var Sentry = cordova.require("sentry-cordova.Sentry");
  		Sentry.init({ dsn: 'https://6abe4b184d3b48d48d5776b4c5c74517@sentry.io/1302277' });
    },

    receivedEvent: function(id) {
       var game = new Phaser.Game(960,540,Phaser.CANVAS,'',{preload:this.preload, create:this.create},false,true,null);

       game.state.add('boot',Game.boot);
       game.state.add('langSelectScreen',Game.langSelectScreen);
       game.state.add('preloader',Game.preloader);
       
       this.gamesVar = game;
		
		if(window.urlstrArray!=null && window.urlstrArray!="undefined" && window.urlstrArray!="" && window.urlstrArray!="unknown")
		{
			window.acctkn = urlstrArray[0];
			window.languageSelected = urlstrArray[1];
			window.gradeSelected = urlstrArray[2];
			window.baseUrl = urlstrArray[3];
			window.avatarName = urlstrArray[4];
			window.deviceId = urlstrArray[5];
		}
		//alert(window.deviceId);
		//window.baseUrl = "./";
		

		if(localStorage.getItem(window.avatarName+"numbersensePlayed")==null)
			localStorage.setItem(window.avatarName+"numbersensePlayed", "notplayed");

		if(localStorage.getItem(window.avatarName+"measurementPlayed")==null)
			localStorage.setItem(window.avatarName+"measurementPlayed", "notplayed");

		if(localStorage.getItem(window.avatarName+"numberoperationPlayed")==null)
			localStorage.setItem(window.avatarName+"numberoperationPlayed", "notplayed");

		if(localStorage.getItem(window.avatarName+"length_MLG_1_1state")==null)
			localStorage.setItem(window.avatarName+"length_MLG_1_1state", "canplay");

		if(localStorage.getItem(window.avatarName+"length_MLG_2_1state")==null)
			localStorage.setItem(window.avatarName+"length_MLG_2_1state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"length_MLG_3_2state")==null)
			localStorage.setItem(window.avatarName+"length_MLG_3_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"volume_MVG_1_4state")==null)
			localStorage.setItem(window.avatarName+"volume_MVG_1_4state", "canplay");

		if(localStorage.getItem(window.avatarName+"volume_MVG_2_4state")==null)
			localStorage.setItem(window.avatarName+"volume_MVG_2_4state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"volume_MVG_3_4state")==null)
			localStorage.setItem(window.avatarName+"volume_MVG_3_4state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"weight_MWG_1_1state")==null)
			localStorage.setItem(window.avatarName+"weight_MWG_1_1state", "canplay");

		if(localStorage.getItem(window.avatarName+"weight_MWG_2_2state")==null)
			localStorage.setItem(window.avatarName+"weight_MWG_2_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"weight_MWG_3_2state")==null)
			localStorage.setItem(window.avatarName+"weight_MWG_3_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"time_MTG_1_1state")==null)
			localStorage.setItem(window.avatarName+"time_MTG_1_1state", "canplay");

		if(localStorage.getItem(window.avatarName+"time_MTG_2_3state")==null)
			localStorage.setItem(window.avatarName+"time_MTG_2_3state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"time_MTG_3_3state")==null)
			localStorage.setItem(window.avatarName+"time_MTG_3_3state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"number_NSNG_1_1state")==null)
			localStorage.setItem(window.avatarName+"number_NSNG_1_1state", "canplay");

		if(localStorage.getItem(window.avatarName+"number_NSNG_2_1state")==null)
			localStorage.setItem(window.avatarName+"number_NSNG_2_1state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"sequence_NSSG_1_1state")==null)
			localStorage.setItem(window.avatarName+"sequence_NSSG_1_1state", "canplay");

		if(localStorage.getItem(window.avatarName+"sequence_NSSG_2_1state")==null)
			localStorage.setItem(window.avatarName+"sequence_NSSG_2_1state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"sequence_NSSG_3_2state")==null)
			localStorage.setItem(window.avatarName+"sequence_NSSG_3_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"sequence_NSSG_4_2state")==null)
			localStorage.setItem(window.avatarName+"sequence_NSSG_4_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"sequence_NSSG_5_3state")==null)
			localStorage.setItem(window.avatarName+"sequence_NSSG_5_3state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"sequence_NSSG_6_3state")==null)
			localStorage.setItem(window.avatarName+"sequence_NSSG_6_3state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"comparison_NSCG_1_1state")==null)
			localStorage.setItem(window.avatarName+"comparison_NSCG_1_1state", "canplay");

		if(localStorage.getItem(window.avatarName+"comparison_NSCG_2_1state")==null)
			localStorage.setItem(window.avatarName+"comparison_NSCG_2_1state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"comparison_NSCG_4_2state")==null)
			localStorage.setItem(window.avatarName+"comparison_NSCG_4_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"comparison_NSCG_5_3state")==null)
			localStorage.setItem(window.avatarName+"comparison_NSCG_5_3state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"fraction_NSFG_1_1state")==null)
			localStorage.setItem(window.avatarName+"fraction_NSFG_1_1state", "canplay");

		if(localStorage.getItem(window.avatarName+"fraction_NSFG_2_1state")==null)
			localStorage.setItem(window.avatarName+"fraction_NSFG_2_1state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"fraction_NSFG_3_1state")==null)
			localStorage.setItem(window.avatarName+"fraction_NSFG_3_1state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"fraction_NSFG_4_1state")==null)
			localStorage.setItem(window.avatarName+"fraction_NSFG_4_1state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"placevalue_NSPVG_1_1state")==null)
			localStorage.setItem(window.avatarName+"placevalue_NSPVG_1_1state", "canplay");

		if(localStorage.getItem(window.avatarName+"placevalue_NSPVG_2_1state")==null)
			localStorage.setItem(window.avatarName+"placevalue_NSPVG_2_1state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"placevalue_NSPVG_4_2state")==null)
			localStorage.setItem(window.avatarName+"placevalue_NSPVG_4_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"placevalue_NSPVG_6_3state")==null)
			localStorage.setItem(window.avatarName+"placevalue_NSPVG_6_3state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"placevalue_NSPVG_5_2state")==null)
			localStorage.setItem(window.avatarName+"placevalue_NSPVG_5_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"placevalue_NSPVG_7_3state")==null)
			localStorage.setItem(window.avatarName+"placevalue_NSPVG_7_3state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"addition_NOAG_1_1state")==null)
			localStorage.setItem(window.avatarName+"addition_NOAG_1_1state", "canplay");

		if(localStorage.getItem(window.avatarName+"addition_NOAG_2_1state")==null)
			localStorage.setItem(window.avatarName+"addition_NOAG_2_1state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"addition_NOAG_3_2state")==null)
			localStorage.setItem(window.avatarName+"addition_NOAG_3_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"addition_NOAG_4_3state")==null)
			localStorage.setItem(window.avatarName+"addition_NOAG_4_3state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"subtraction_NOSG_1_1state")==null)
			localStorage.setItem(window.avatarName+"subtraction_NOSG_1_1state", "canplay");

		if(localStorage.getItem(window.avatarName+"subtraction_NOSG_2_1state")==null)
			localStorage.setItem(window.avatarName+"subtraction_NOSG_2_1state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"subtraction_NOSG_3_2state")==null)
			localStorage.setItem(window.avatarName+"subtraction_NOSG_3_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"subtraction_NOSG_4_3state")==null)
			localStorage.setItem(window.avatarName+"subtraction_NOSG_4_3state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"division_NODG_1_2state")==null)
			localStorage.setItem(window.avatarName+"division_NODG_1_2state", "canplay");

		if(localStorage.getItem(window.avatarName+"division_NODG_2_2state")==null)
			localStorage.setItem(window.avatarName+"division_NODG_2_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"division_NODG_3_2state")==null)
			localStorage.setItem(window.avatarName+"division_NODG_3_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"division_NODG_4_2state")==null)
			localStorage.setItem(window.avatarName+"division_NODG_4_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"multiplication_NOMG_1_1state")==null)
			localStorage.setItem(window.avatarName+"multiplication_NOMG_1_1state", "canplay");

		if(localStorage.getItem(window.avatarName+"multiplication_NOMG_2_1state")==null)
			localStorage.setItem(window.avatarName+"multiplication_NOMG_2_1state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"multiplication_NOMG_3_1state")==null)
			localStorage.setItem(window.avatarName+"multiplication_NOMG_3_1state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"multiplication_NOMG_4_2state")==null)
			localStorage.setItem(window.avatarName+"multiplication_NOMG_4_2state", "cannotplay");

		if(localStorage.getItem(window.avatarName+"multiplication_NOMG_5_3state")==null)
			localStorage.setItem(window.avatarName+"multiplication_NOMG_5_3state", "cannotplay");


		abbchmprmdsjsapi.initializeDS();

	
		//game.state.start('boot');

		/*if(localStorage.getItem(window.avatarName+"language")=="English")
		{
			window.languageSelected = "English";
		}
		else if(localStorage.getItem(window.avatarName+"language")=="Hindi")
		{
			window.languageSelected = "Hindi";
		}
		else if(localStorage.getItem(window.avatarName+"language")=="Kannada")
		{
			window.languageSelected = "Kannada";
		}
		else if(localStorage.getItem(window.avatarName+"language")=="Odiya")
		{
			window.languageSelected = "Odiya";
		}*/

		window.timeSaveFunc = function()
		{
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;//January is 0, so always add + 1

			var yyyy = today.getFullYear();
			if(dd<10){dd='0'+dd}
			if(mm<10){mm='0'+mm}
			
			var hr = today.getHours();
			var min = today.getMinutes();
			var sec = today.getSeconds();
			
			//today = mm+'/'+dd+'/'+yyyy+' '+hr+':'+min+':'+sec;
			today = yyyy+':'+mm+':'+dd+':'+hr+':'+min+':'+sec;
			return today;
		}

    },


    preload:function(game)
    {
    	game.cache.destroy();	
    	game.load.image('exitBg',window.baseUrl+'assets/exitAssets/exitBg.png');
    	game.load.image('confirmBg',window.baseUrl+'assets/exitAssets/confirmBg.png');
    },

    create:function(game)
    {
    	game.stage.backgroundColor = '#71c5cf';
    	document.addEventListener('backbutton', function(e) {
        
			e.preventDefault();
			
			if(game && !exitOnce)
			{
				exitOnce = true;
				var exitGrp = game.add.group();

				var stageBg = game.add.graphics(0, 0);
				stageBg.lineStyle(0, 0xFFFFFF, 0.8);
				stageBg.beginFill(0xFFFFFF, 1);
				stageBg.drawRect(0,0,960,540);
				stageBg.boundsPadding = 0;
				stageBg.alpha = 0.2;


				var exitBg = game.add.sprite(game.world.centerX,game.world.centerY,'exitBg');
				exitBg.anchor.setTo(0.5);
				exitBg.inputEnabled = true;
				exitBg.input.priorityID = 2;


				var exitTxt = null;
				var okTxt = null;
				var cancelTxt = null;

				if(window.languageSelected=="Hindi")
				{
					exitTxt = "क्या गेम छोड़ना चाहते हो?";
					okTxt = "हाँ";
					cancelTxt = "नहीं";
				}
				else if(window.languageSelected=="Kannada")
				{
					exitTxt = "ನೀವು ಆಟದಿಂದ ನಿರ್ಗಮಿಸಲು \n ಬಯಸುತ್ತೀರಾ?";
					okTxt = "ಹೌದು";
					cancelTxt = "ಇಲ್ಲ";
				}
				else if(window.languageSelected=="Odiya")
				{
					exitTxt = "ଆପଣ ଖେଳ ଛାଡ଼ି ଯିବାକୁ ଚାହାନ୍ତି କି?";
					okTxt = "ହଁ";
					cancelTxt = "ନା";
				}
				else if(window.languageSelected=="Gujarati")
				{
					exitTxt = "તમે છોડવા માગો છો?";
					okTxt = "હા";
					cancelTxt = "ના";
				}
				else
				{
					exitTxt = "Do you want to quit?";
					okTxt = "Yes";
					cancelTxt = "No";
				}

				var exitText = game.add.text(game.world.centerX,game.world.centerY-20,exitTxt);
	            exitText.anchor.setTo(0.5);
	            exitText.align = 'center';
	            exitText.fontSize = 26;
	            exitText.fontWeight = 'normal';
	            exitText.fill = '#FFFFFF';

				var okBtn = game.add.sprite(game.world.centerX-70,game.world.centerY+50,'confirmBg');
				okBtn.anchor.setTo(0.5);

				var okText = game.add.text(game.world.centerX-70,game.world.centerY+50,okTxt);
	            okText.anchor.setTo(0.5);
	            okText.align = 'center';
	            okText.fontSize = 20;
	            okText.fontWeight = 'normal';
	            okText.fill = '#FFFFFF';


				var cancelBtn = game.add.sprite(game.world.centerX+70,game.world.centerY+50,'confirmBg');
				cancelBtn.anchor.setTo(0.5);

				var cancelText = game.add.text(game.world.centerX+70,game.world.centerY+50,cancelTxt);
	            cancelText.anchor.setTo(0.5);
	            cancelText.align = 'center';
	            cancelText.fontSize = 20;
	            cancelText.fontWeight = 'normal';
	            cancelText.fill = '#FFFFFF';

				exitGrp.add(stageBg);
				exitGrp.add(exitBg);
				exitGrp.add(exitText);
				exitGrp.add(okBtn);
				exitGrp.add(okText);
				exitGrp.add(cancelBtn);
				exitGrp.add(cancelText);

				stageBg.inputEnabled = true;
				stageBg.events.onInputDown.add(function(){
					
				},game);

				okBtn.inputEnabled = true;
				okBtn.input.priorityID = 3;
				okBtn.events.onInputDown.add(function(){
					exitGrp.destroy();
					navigator.app.exitApp();
					nativeApp.CloseApp();
				},game);

				cancelBtn.inputEnabled = true;
				cancelBtn.input.priorityID = 3;
				cancelBtn.events.onInputDown.add(function(){
					exitGrp.destroy();
					exitOnce = false;
				},game);
	
			}

    	}, false);  



    	game.state.start('boot');

    },
	
};


app.initialize();