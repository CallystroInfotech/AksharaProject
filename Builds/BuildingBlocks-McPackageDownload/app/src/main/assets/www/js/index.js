/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _this;
var downloadPopup;
var downloadTxt;
var downlodPopupGrp;

var app = {
    // Application Constructor
    initialize: function() {

		window.acctkn = "5a898f53cac9d";
		window.languageSelected = "English";
		window.gradeSelected = "1";
		window.selctedLang = null;
		window.baseUrl = "./";
		
		
		window.urlstrArray = parser.printkeys();
		//console.log("str"+window.urlstrArray[0]);
		//alert("hai");
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function(e) {

    	window.directoryPath = cordova.file.externalApplicationStorageDirectory+"Files/Download/.gameFilesV20/";
    	window.baseUrl = window.directoryPath+"www/"

    	//screen.orientation.lock('landscape');
		
		//cordova.plugins.backgroundMode.enable();
		
	/*	document.addEventListener('pause', function(e) {
        //console.log('pause'+e.keyCode);
		//e.preventDefault();
		//cordova.plugins.backgroundMode.moveToForeground();
		//cordova.plugins.backgroundMode.moveToBackground();
		//cordova.plugins.backgroundMode.disable();
    }, false);  

	
    document.addEventListener('resume', function(e) {
        console.log('resume');
		//e.preventDefault();
		//cordova.plugins.backgroundMode.moveToForeground();
		//cordova.plugins.backgroundMode.enable();
    }, false);    
	*/
	
	
   document.addEventListener('backbutton', function(e) {
        console.log('backbutton');
		e.preventDefault();
		//cordova.plugins.backgroundMode.moveToBackground();
		//cordova.plugins.backgroundMode.overrideBackButton();
		//cordova.plugins.backgroundMode.moveToBackground();


               var retVal = confirm("Do you want to Quit the game ?");
               if( retVal == true ){
               	///console.log("confirm");
                  //document.write ("User wants to continue!");
                  navigator.app.exitApp();
                  return true;
               }
               else{
               	//console.log("denied");
               	//don nothing, continue.
                  //document.write ("User does not want to continue!");
                  return false;
              }


    }, false);   

	
   /* document.addEventListener('menubutton', function(e) {
		e.preventDefault();
        console.log('menubutton');
    }, false);
	
	document.addEventListener('homebutton', function(e) {
		e.preventDefault();
        console.log('homebutton');
    }, false);
	
	document.addEventListener('startcallbutton', function(e) {
		e.preventDefault();
        console.log('homebutton');
    }, false);
	
	document.addEventListener('endcallbutton', function(e) {
		e.preventDefault();
        console.log('homebutton');
    }, false);
	
	document.addEventListener('searchbutton', function(e) {
		e.preventDefault();
        console.log('homebutton');
    }, false);

	*/
		
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
       /* var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/
		
		
		//Initializing Phaser...
        var game = new Phaser.Game(960,540,Phaser.CANVAS,'',{ create: this.create });

       //	var bgs = game.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonAssets','commonBg');
       //	bgs.scale.setTo(1,1.5);
		
		//game.add.plugin(Phaser.Plugin.Debug);
		//Adding common states...
        game.state.add('boot',Game.boot);
        game.state.add('preloader',Game.preloader);
       /* game.state.add('gradeSelectionScreen',Game.gradeSelectionScreen);
		
        game.state.add('grade1levelSelectionScreen',Game.grade1levelSelectionScreen);

        game.state.add('grade2levelSelectionScreen',Game.grade2levelSelectionScreen);
		
        game.state.add('grade3levelSelectBoot',Game.grade3levelSelectBoot);
        game.state.add('grade3levelSelectPreloader',Game.grade3levelSelectPreloader);
        game.state.add('grade3levelSelectionScreen',Game.grade3levelSelectionScreen);
		
		game.state.add('grade4levelSelectBoot',Game.grade4levelSelectBoot);
		game.state.add('grade4levelSelectPreloader',Game.grade4levelSelectPreloader);
        game.state.add('grade4levelSelectionScreen',Game.grade4levelSelectionScreen);
		
		/*game.state.add('grade2_2boot',Game.grade2_2boot);
		game.state.add('grade2_2preloader',Game.grade2_2preloader);
        game.state.add('grade2_2level1',Game.grade2_2level1);
        game.state.add('grade2_2Score',Game.grade2_2Score);*/
		
		/*game.state.add('grade1_1Alevel1',Game.grade1_1Alevel1);
        game.state.add('grade1_1AScore',Game.grade1_1AScore);
		
		game.state.add('grade2_1Alevel1',Game.grade2_1Alevel1);
        game.state.add('grade2_1AScore',Game.grade2_1AScore);
		
		game.state.add('grade2_1Blevel1',Game.grade2_1Blevel1);
        game.state.add('grade2_1BScore',Game.grade2_1BScore);
		
		game.state.add('grade2_2level1',Game.grade2_2level1);
        game.state.add('grade2_2Score',Game.grade2_2Score);
		
		game.state.add('grade2_3level1',Game.grade2_3level1);
        game.state.add('grade2_3Score',Game.grade2_3Score);
		
		game.state.add('grade3_1level1',Game.grade3_1level1);
        game.state.add('grade3_1Score',Game.grade3_1Score);
		
		game.state.add('grade3_2Alevel1',Game.grade3_2Alevel1);
        game.state.add('grade3_2AScore',Game.grade3_2AScore);
		
		game.state.add('grade1_1Blevel1',Game.grade1_1Blevel1);
        game.state.add('grade1_1BScore',Game.grade1_1BScore);
		
		game.state.add('grade1_2Alevel1',Game.grade1_2Alevel1);
        game.state.add('grade1_2AScore',Game.grade1_2AScore);
		
		game.state.add('grade1_2Blevel1',Game.grade1_2Blevel1);
        game.state.add('grade1_2BScore',Game.grade1_2BScore);
		
		game.state.add('grade1_2Clevel1',Game.grade1_2Clevel1);
        game.state.add('grade1_2CScore',Game.grade1_2CScore);
		
		game.state.add('grade2_4Alevel1',Game.grade2_4Alevel1);
        game.state.add('grade2_4AScore',Game.grade2_4AScore);
		
		game.state.add('grade2_4Blevel1',Game.grade2_4Blevel1);
        game.state.add('grade2_4BScore',Game.grade2_4BScore);
		
		game.state.add('grade3_2Blevel1',Game.grade3_2Blevel1);
        game.state.add('grade3_2BScore',Game.grade3_2BScore);
		
		game.state.add('grade3_2Clevel1',Game.grade3_2Clevel1);
        game.state.add('grade3_2CScore',Game.grade3_2CScore);
		
		game.state.add('grade3_2Dlevel1',Game.grade3_2Dlevel1);
        game.state.add('grade3_2DScore',Game.grade3_2DScore);
		
		game.state.add('grade3_3Alevel1',Game.grade3_3Alevel1);
        game.state.add('grade3_3AScore',Game.grade3_3AScore);
		
		game.state.add('grade3_3B1level1',Game.grade3_3B1level1);
        game.state.add('grade3_3B1Score',Game.grade3_3B1Score);
		
		game.state.add('grade3_3B2level1',Game.grade3_3B2level1);
        game.state.add('grade3_3B2Score',Game.grade3_3B2Score);
		
		game.state.add('grade4_1Alevel1',Game.grade4_1Alevel1);
        game.state.add('grade4_1AScore',Game.grade4_1AScore);
		
		game.state.add('grade4_1Blevel1',Game.grade4_1Blevel1);
        game.state.add('grade4_1BScore',Game.grade4_1BScore);
		
		game.state.add('grade4_1Clevel1',Game.grade4_1Clevel1);
        game.state.add('grade4_1CScore',Game.grade4_1CScore);
		
		game.state.add('grade4_2Alevel1',Game.grade4_2Alevel1);
        game.state.add('grade4_2AScore',Game.grade4_2AScore);
		
		game.state.add('grade4_2Blevel1',Game.grade4_2Blevel1);
        game.state.add('grade4_2BScore',Game.grade4_2BScore);
		
		game.state.add('grade4_2Clevel1',Game.grade4_2Clevel1);
        game.state.add('grade4_2CScore',Game.grade4_2CScore);
		
		game.state.add('grade4_3Alevel1',Game.grade4_3Alevel1);
        game.state.add('grade4_3AScore',Game.grade4_3AScore);
		
		game.state.add('grade4_3Blevel1',Game.grade4_3Blevel1);
        game.state.add('grade4_3BScore',Game.grade4_3BScore);
		
		game.state.add('grade4_3Clevel1',Game.grade4_3Clevel1);
        game.state.add('grade4_3CScore',Game.grade4_3CScore);

        game.state.add('grade5_1level1',Game.grade5_1level1);
        game.state.add('grade5_1Score',Game.grade5_1Score);

        game.state.add('grade5_2level1',Game.grade5_2level1);
        game.state.add('grade5_2level2',Game.grade5_2level2);
        game.state.add('grade5_2Score',Game.grade5_2Score); 

        game.state.add('grade5_4level1',Game.grade5_4level1);
        game.state.add('grade5_4level2',Game.grade5_4level2);
        game.state.add('grade5_4Score',Game.grade5_4Score);

        game.state.add('grade6_1level1',Game.grade6_1level1);
        game.state.add('grade6_1Score',Game.grade6_1Score);

        game.state.add('grade6_2level1',Game.grade6_2level1);
        game.state.add('grade6_2Score',Game.grade6_2Score);

        game.state.add('grade7_1level1',Game.grade7_1level1);
        game.state.add('grade7_1Score',Game.grade7_1Score); 

        game.state.add('grade7_2level1',Game.grade7_2level1);
        game.state.add('grade7_2Score',Game.grade7_2Score); 


        //unity games....
        game.state.add('unity1_1level1',Game.unity1_1level1);
        game.state.add('unity1_1Score',Game.unity1_1Score);

        game.state.add('unity1_2level1',Game.unity1_2level1);
        game.state.add('unity1_2Score',Game.unity1_2Score); 

        game.state.add('unity1_3level1',Game.unity1_3level1);
        game.state.add('unity1_3Score',Game.unity1_3Score);

        game.state.add('unity1_4level1',Game.unity1_4level1);
        game.state.add('unity1_4Score',Game.unity1_4Score);

        game.state.add('unity1_5level1',Game.unity1_5level1);
        game.state.add('unity1_5Score',Game.unity1_5Score);

        game.state.add('unity1_6level1',Game.unity1_6level1);
        game.state.add('unity1_6Score',Game.unity1_6Score);

        game.state.add('unity1_7level1',Game.unity1_7level1);
        game.state.add('unity1_7Score',Game.unity1_7Score);

        game.state.add('unity5_1level1',Game.unity5_1level1);
        game.state.add('unity5_1Score',Game.unity5_1Score);

        game.state.add('unity6_1level1',Game.unity6_1level1);
        game.state.add('unity6_1Score',Game.unity6_1Score);

        game.state.add('unity8_1level1',Game.unity8_1level1);
        game.state.add('unity8_1Score',Game.unity8_1Score);

        game.state.add('unity11_1level1',Game.unity11_1level1);
        game.state.add('unity11_1Score',Game.unity11_1Score);

        game.state.add('unity11_2level1',Game.unity11_2level1);
        game.state.add('unity11_2Score',Game.unity11_2Score);*/

        
		
		if(window.urlstrArray!=null && window.urlstrArray!="undefined" && window.urlstrArray!="" && window.urlstrArray!="unknown")
		{
			window.acctkn = urlstrArray[0];
			window.languageSelected = urlstrArray[1];
			window.gradeSelected = urlstrArray[2];
			//window.baseUrl = urlstrArray[3];
		}
		
		
	
		
		absdsjsapi.initializeDS();


		
		
		//game.state.start('boot');


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

 

    create:function(game)
    {

    	game.input.maxPointers = 1;

		//this.Input.MOUSE_OVERRIDES_TOUCH = 1;
		//_this.game.input.multiInputOverride = Phaser.Input.TOUCH_OVERRIDES_MOUSE;

		//_this.game.input.touch.preventDefault = true;

		game.stage.disableVisibilityChange=true;
		
		//setting scale and orientation for the game.
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.updateLayout(true);
        game.scale.forceOrientation(false, true);

        
    	downloadPopup = game.add.graphics(230, 170);
			downloadPopup.lineStyle(0, 0xFFFFFF, 0.8);
			downloadPopup.beginFill(0xFFFFFF, 1);
			downloadPopup.drawRect(0,0,500,200);
			downloadPopup.boundsPadding = 0;

			downloadTxt = game.add.text(game.world.centerX, game.world.centerY, 'Downloading.... \n 0%');
			downloadTxt.anchor.setTo(0.5);
			downloadTxt.align = 'center';
			
					
			downloadTxt.font = 'gradefont';
			downloadTxt.fontSize = 32;
			downloadTxt.fontWeight = 'normal';
			downloadTxt.fill = 'black';

			downloadTxt.wordWrap = true;
			downloadTxt.wordWrapWidth = 500;

			downlodPopupGrp = game.add.group();
			downlodPopupGrp.add(downloadPopup);
			downlodPopupGrp.add(downloadTxt);
			downlodPopupGrp.visible = false;


		app.checkDirExistsorNot(window.directoryPath+"www/commonFiles",game);
    },

    checkDirExistsorNot:function(dirPath,game)
	{
		//var _this = this;
		//alert(dirPath);
		window.resolveLocalFileSystemURL(dirPath, 
			function(){
				//alert("scucess");
				game.state.start('boot');
				return true;
			}, 
			function(){
				//alert("failure");
				app.downloadTheFile("http://callystro.com/AksharaAssets/CommonFiles.zip",game);
				return false;
			});
	},

	downloadTheFile:function(url,game)
	{

		var _this = this;
		////alert("here download");

		let initialized = function (event) {
	        downloader.get(url);
	        event.target.removeEventListener(event.name, initialized);
	    };

	    document.addEventListener('DOWNLOADER_initialized', initialized);

	    	downloader.init({
	        folder: 'www',
	        fileSystem: window.directoryPath,
	        unzip: true,
	        check: false,
	        noMedia: true,
	        wifiOnly: false,
	        delete: true
	    });

		//downloader.init({folder: "www", fileSystem: window.directoryPath, unzip: true, delete: true});
		//downloader.get(url);

		downlodPopupGrp.visible = true;
		//this.game.input.enabled = false;

		//_this.downloading = true;
		////alert(_this.downloading);

		document.addEventListener("DOWNLOADER_downloadProgress", function(event){
		  var data = event.data;
		  //console.log(data);
		 // _this.downloading = true;
		 	downloadTxt.setText("Downloading.... \n "+data[0]+"%");
		});


		document.addEventListener("DOWNLOADER_downloadError", function(event){
		  var data = event.data;
		  //console.log(data);
		  downlodPopupGrp.visible = false;
		  alert("Download Failed... Connect to network and try again.");
		  location.reload(); 
		});

		document.addEventListener("DOWNLOADER_downloadSuccess", function(event){
		  var data = event.data;
		  //console.log(data);
		  //location.reload(); 
		});

		document.addEventListener("DOWNLOADER_unzipProgress", function(event){
		  var data = event.data;
		  //console.log(data);
		  //_this.downloading = true;
		  downloadTxt.setText("Unzipping.... \n "+data[0]+"%");
		});

		document.addEventListener("DOWNLOADER_unzipSuccess", function(event){
		  var data = event.data;
		  //console.log(data);
		  //target.frame = 0;
		  //_this.downloading = false;

		  downlodPopupGrp.visible = false;
		  downlodPopupGrp.destroy();
		  downlodPopupGrp = null;

		  downloadPopup = null;
			downloadTxt = null;
		downlodPopupGrp = null;

		  location.reload(); 
		  //game.state.start('boot');
		  
		  //_this.setDownloadComplete(target);


		  /*//alert(_this.downloading);
		  if(target.name=="NUMBER SENSE")
		{
			_this.numberSense1Downloaded = true;
		}
		else if(target.name=="MEASUREMENT")
		{
			_this.measurement1Downloaded = true;
		}
		else if(target.name=="NUMBER OPERATIONS")
		{
			_this.numperoperation1Downloaded = true;
		}

		var retVal = confirm("Download complete do you want to reload the game?");
               if( retVal == true ){
               	  location.reload(); 
                  //return true;
               }
               else{
               	
                  //return false;
              }



		  //_this.confirmReload();*/
		});

		document.addEventListener("DOWNLOADER_unzipError", function(event){
		  var data = event.data;
		  //console.log(data);
		  //alert("Error while unZipping");
		  downlodPopupGrp.visible = false;
		  //alert("Download Failed please try again");
		});
	},
	
	
};


app.initialize();