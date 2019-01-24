Game.unity14_2level1=function(){};
var group2;
var graphics1,graphics2,graphics3,graphicsa,graphicsb,graphicsc,graphicsgrid,graphicsgrid2;
var groupvertical,grouphorizontal,grouphorizontal2;
var shakeGroup;
var count;
var horiznum,vertinum;
Game.unity14_2level1.prototype={
     init:function(game)
    {
        _this = this;
        telInitializer.gameIdInit("unity14_2",gradeSelected);
        
        _this.gameid = "14.2";
        
        _this.clickSound = _this.add.audio('ClickSound');
        _this.snapSound = _this.add.audio('snapSound');
        _this.wmusic = _this.add.audio('waudio');
        _this.cmusic = _this.add.audio('celebr');

    },
    
    create:function(game){
        _this.shake = new Phaser.Plugin.Shake(game);
         game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();
        _this.flag="question2";
        _this.wrongflag=0;
        _this.colorange=0;
        _this.colorange2=0;
        _this.countgreen=0;
        _this.countgreenh=0;
        _this.countgreenv=0;
        _this.sceneCount=0;
        _this.stopflowhq2=0;
        _this.stopflowh1q2=0;
        _this.stopflowv1q2=0;
        _this.amplify = null;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.countcorrect=0;
        _this.countvno=0;
        _this.counthno=0;
        _this.countyellowno=0;
        _this.countyellowno2=0;
        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level14_background');
            _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
             _this.navBar.scale.setTo(1,1);
              _this.timebg = _this.add.sprite(305,6,'Level42B_timer');
             _this.timebg.scale.setTo(1,1);
            // _this.topicOutline = _this.add.sprite(70,5,'Level14_topicOutline');
           //  _this.practice = _this.add.sprite(78,10,'Level14_practice');
            /* var numTxt2 = this.add.text(223,24, 'Multiplication');
            numTxt2.anchor.setTo(0.5);
            numTxt2.align = 'center';
            numTxt2.font = 'Alte Haas Grotesk';
            numTxt2.fontWeight = 'normal';
            numTxt2.fontSize = 20;
            numTxt2.fill = '#ffffff';
            numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
        
             _this.timeDisplay = _this.add.text(330,22, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
             _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontWeight = 'normal';
             _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
             _this.timeDisplay.fill = '#ADFF2F';
         
       
       _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            ////console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            
            _this.clickSound.play();
            _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'grade11_speaker');
      // _this.speakerbtn.inputEnabled = true;
        
        _this.no1=0;
       // _this.getVoice();
        _this.generateStarsForTheScene(6);
        _this.getQuestion();
        
    },
    
    generateStarsForTheScene:function(count)
    {
         _this.starsGroup = _this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
             _this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim1');
            
            for(var j =0;j<i;j++)
            {
                if( _this.starsGroup.getChildAt(j))
                {
                     _this.starsGroup.getChildAt(j).x-=15;
                     _this.starsGroup.getChildAt(i).x+=15;
                }
            }
        }                       
    },
    
    updateTimer:function() {
     _this.counterForTimer++;
     if(_this.counterForTimer>59)
         {
             _this.counterForTimer = 0;
             if(_this.minutes<10){
                 _this.minutes =  _this.minutes+1;
                 _this.seconds = 00;
             }
             else{
                 _this.minutes =  _this.minutes+1;
                 }
         }
    else{
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
      _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
    },
    
    getQuestion:function(target)
    {  
        _this.verticallen=0;
        _this.nextline=0;
        
        _this.next=0;
        _this.first=0;
        _this.pos=0;
        _this.posh=0;
        _this.second=0;
        _this.counth1=0;
        _this.col=0;
        _this.row=0;
        _this.cols=0;
        _this.rowsh=0;
        _this.colsh=0;
        _this.rows=0;
        _this.third=0;
        _this.fourth=0;
        _this.fifth=0;
        _this.correctflag=0;
        _this.verticalcount=0;
        _this.horizontalcount=0;
        _this.greencubesets=0;
        _this.yellowgrids=0;
        _this.dragv=-1;
        _this.dragh=-1;
        _this.dragh2=-1;
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;   
        
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.qArrays = [1,2,3,4,5,6];
        //  _this.qArrays = _this.shuffle( _this.qArrays);
        _this.randomarray = [11,12,13,14,15];
        _this.randomarray = _this.shuffle( _this.randomarray);
        _this.randomarray2 = [4,5,6];
       // _this.randomarray = _this.shuffle( _this.randomarray);
      
        _this.gridarray = new Array();
        _this.blankarray = new Array();
        _this.gridarraynew = new Array();
        _this.displgrid = new Array();
        _this.selectedarray = new Array();
        _this.sceneCount++;
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
              _this.timer1.loop(1000, function(){
                  _this.AnsTimerCount++;
                  _this.updateTimer();
              }, _this);
        _this.timer1.start();
        /**************************************************************************/ 
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        _this.speakerbtn.events.onInputDown.add(function(){
            this.clickSound.play();
            this.getVoice();
        },this);
        _this.questionid = 1;
        _this.sidegrid = this.add.sprite(40,85,'Level14_sidegrid');
        _this.sidegrid.scale.setTo(0.83,0.90);
        
        for(var f=0;f<3;f++){
            _this.greencubeset = this.add.sprite(75,97,'Level14_greencubeset');           
			_this.greencubeset.scale.setTo(0.85,0.90);
            _this.greencubeset.inputEnabled=true;
            _this.greencubeset.input.enableDrag(true);
            _this.greencubeset.name="greencubeset";
            _this.greencubeset.events.onDragStart.add(this.onDragStart, this);
            _this.greencubeset.events.onDragStop.add(this.onDragStop, this);
        }

       if(_this.no1==3 || _this.no1==4 || _this.no1==5){
            _this.gridarea = this.add.sprite(235,107,'Level14_gridarea');
            _this.gridarea.scale.setTo(0.95,0.95);
            graphicsgrid = this.add.graphics(294,155);
            graphicsgrid.lineStyle(1, 0xFFFFFF, 0.8);
            graphicsgrid.beginFill(0xFF700B, 1);
            graphicsgrid.drawRect(0,0,100,120);     //0,0,55,55
            graphicsgrid.boundsPadding = 0;
            graphicsgrid.alpha=0;
            graphicsgrid.name="graphicsgrid";
       }
        this.addNumberPad();
        switch(this.qArrays[_this.no1]){
            case 1 : 
            case 2 : 
            case 3 : this.gotoquestion2();
                     break;
            case 4 : 
            case 5 : 
            case 6 : this.gotoquestion1();
                     break;
        }
        
    },
    
     shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
 },
    
    gotoquestion1:function(){
        _this.flag="question1";
        _this.no1++;
        _this.first++;
        
        _this.firstno = _this.randomarray[0];
        _this.randomarray = _this.shuffle(_this.randomarray);
        _this.secondno = _this.randomarray[0];
        
        if(_this.no1 == 4){
            _this.firstno = 14;
            _this.secondno = 11;
        }
        else if(_this.no1 == 5){
            _this.firstno = 15;
            _this.secondno = 12;
        }
        else if(_this.no1 == 6){
            _this.firstno = 16;
            _this.secondno = 13;
        }               
        _this.rightans = _this.firstno * _this.secondno;
        _this.addyellowh =(_this.firstno - 10);
        _this.addyellowv = (_this.secondno - 10);
        _this.multiplyans = _this.firstno * _this.secondno;
        _this.remainder = _this.multiplyans - 100;
        horiznum = this.add.text(700,93,_this.firstno);
        horiznum.fill = '#65B4C3';
        horiznum.font = "myfont";
        horiznum.fontSize = 35;
        horiznum.fontWeight="normal";      
        
        vertinum = this.add.text(780,93,_this.secondno);
        vertinum.fill = '#65B4C3';
        vertinum.font = "myfont";
        vertinum.fontSize = 35;
        vertinum.fontWeight="normal";
        
        groupvertical = this.add.group();
        grouphorizontal = this.add.group();
        
        for(var orv=0;orv<2;orv++){
            _this.gridh1 = this.add.sprite(232,80,'Level14_gridhorange');
            _this.gridh1.scale.setTo(0.97,0.97);
            _this.gridv1 = this.add.sprite(209,105,'Level14_gridvorange');
            _this.gridv1.scale.setTo(0.97,0.97);
        }
        
        for(var yellowh=0;yellowh<_this.addyellowh;yellowh++){
            _this.Level14_gridjointvadd = this.add.sprite(466+(yellowh*23),107,'Level14_gridjointv');
            _this.Level14_gridjointvadd.scale.setTo(0.95,0.95); 
            _this.yellowgrid1 = this.add.sprite(467+(yellowh*23),80,'Level14_gridorange');
            _this.yellowgrid1.scale.setTo(0.95,0.95); 
            graphicsvertical = this.add.graphics(0,0);
            graphicsvertical.x = 464+(yellowh*23);
            graphicsvertical.y = 107;
            graphicsvertical.lineStyle(1, 0xFFFFFF, 0.8);
            graphicsvertical.beginFill(0xFF700B, 1);
            graphicsvertical.drawRect(0,0,20,220);
            graphicsvertical.boundsPadding = 0;
            graphicsvertical.alpha=0;
            graphicsvertical.name="graphicsvertical";

            groupvertical.add(graphicsvertical);
            
        }
        for(var yellowv=0;yellowv<_this.addyellowv;yellowv++){
            _this.Level14_gridjointhadd = this.add.sprite(235,345+(yellowv*24),'Level14_gridjointh');
            _this.Level14_gridjointhadd.scale.setTo(0.95,0.95);        
            _this.yellowgrid2 = this.add.sprite(209,349+(yellowv*23),'Level14_gridorange');
            _this.yellowgrid2.scale.setTo(0.95,0.95);
            graphicshorizontal = this.add.graphics(0,0);
            graphicshorizontal.x = 210;
            graphicshorizontal.y = 346+(yellowv*24);
            graphicshorizontal.lineStyle(1, 0xFFFFFF, 0.8);
            graphicshorizontal.beginFill(0xFF700B, 1);
            graphicshorizontal.drawRect(0,0,220,22);
            graphicshorizontal.boundsPadding = 0;
            graphicshorizontal.alpha=0;
            graphicshorizontal.name="graphicshorizontal";

            grouphorizontal.add(graphicshorizontal);
        }
        for(var l=0;l<_this.addyellowv;l++){
            for(var m=0;m<_this.addyellowh;m++){
                _this.singlegrid=this.add.sprite(466+(m*23),345+(l*24),'Level14_singlegrid');
                _this.singlegrid.scale.setTo(0.95,0.95);
            }
        }
        for(var b=0;b<=(_this.addyellowh+3);b++){
            _this.gridv = this.add.sprite(75,286,'Level14_gridv');
            _this.gridv.name="vertical";
			_this.gridv.scale.setTo(0.86,0.90);
            _this.gridv.inputEnabled=true;
            _this.gridv.input.enableDrag(true);
            _this.gridv.events.onDragStart.add(this.onDragStart, this);
            _this.gridv.events.onDragStop.add(this.onDragStop, this);
        }
        
        for(var b2=0;b2<=(_this.addyellowv+3);b2++){
            _this.gridh = this.add.sprite(75,250,'Level14_gridh');
			_this.gridh.scale.setTo(0.86,0.90);
            _this.gridh.name="horizontal";
            _this.gridh.inputEnabled=true;
            _this.gridh.input.enableDrag(true);
            _this.gridh.events.onDragStart.add(this.onDragStart, this);
            _this.gridh.events.onDragStop.add(this.onDragStop, this);
        }
        
        for(var rem=0;rem<(_this.remainder+3);rem++){
            _this.yellowgrid = this.add.sprite(75,438,'Level14_yellowgrid');
            _this.yellowgrid.scale.setTo(0.72,0.80);
            _this.yellowgrid.name="yellowgrid";
            _this.yellowgrid.inputEnabled=true;
            _this.yellowgrid.input.enableDrag(true);
            _this.yellowgrid.events.onDragStart.add(this.onDragStart, this);
            _this.yellowgrid.events.onDragStop.add(this.onDragStop, this);
        }

    },
    
    gotoquestion2:function(){
        _this.flag="question2";
        _this.no1++;
        _this.first++;
        _this.firstno = _this.randomarray[0];
        _this.randomarray = _this.shuffle(_this.randomarray);
        if(_this.no1==1){
            _this.firstno = 12;
            _this.secondno =_this.randomarray2[0];
        }
        else if(_this.no1==2){
            _this.firstno = 13;
            _this.secondno =_this.randomarray2[1];
        }
        else if(_this.no1==3){
            _this.firstno = 14;
            _this.secondno =_this.randomarray2[2];
        }
        for(var rl=0;rl<_this.secondno;rl++){
            for(var cl=0;cl<10;cl++){
                _this.singlegrid=this.add.sprite(235+(cl*23),107+(rl*24),'Level14_singlegrid');//235
                _this.singlegrid.scale.setTo(0.97,0.97);
            }
        }
        
        for(var orv=0;orv<2;orv++){
            _this.gridh1 = this.add.sprite(232,80,'Level14_gridhorange');
            _this.gridh1.scale.setTo(0.97,0.97);
            
        }
        
        _this.rightans = _this.firstno * _this.secondno;       
        _this.addyellowh =(_this.firstno - 10);
        _this.addyellowv = _this.secondno;
        _this.multiplyans = _this.firstno * _this.secondno;
        _this.remainder = _this.multiplyans;
        horiznum = this.add.text(700,90,_this.firstno);
        horiznum.fill = '#65B4C3';
        horiznum.font = "myfont";
        horiznum.fontSize = 40;
        horiznum.fontWeight="normal";
        
        
        vertinum = this.add.text(780,90,_this.secondno);
        vertinum.fill = '#65B4C3';
        vertinum.font = "myfont";
        vertinum.fontSize = 40;
        vertinum.fontWeight="normal";
        
        groupvertical = this.add.group();
        grouphorizontal2 = this.add.group();
        
        
        for(var yellowcols=0;yellowcols<_this.addyellowv;yellowcols++){
            _this.gridv1 = this.add.sprite(209,107+(yellowcols*23),'Level14_gridorange');
            _this.gridv1.scale.setTo(0.97,1.07);
        }
        
        
        
        for(var yellowrow=0;yellowrow<_this.addyellowv;yellowrow++){
        for(var yellowh=0;yellowh<_this.addyellowh;yellowh++){
            
                _this.singlegrid=this.add.sprite(465+(yellowh*23),107+(yellowrow*24),'Level14_singlegrid');
                _this.singlegrid.scale.setTo(0.97,0.97);
                
        
            _this.yellowgrid1 = this.add.sprite(467+(yellowh*23),80,'Level14_gridorange');
            _this.yellowgrid1.scale.setTo(0.97,0.97); 
            
        }
            graphicshorizontal = this.add.graphics(0,0);
            graphicshorizontal.x = 240;
            graphicshorizontal.y = 107+(yellowrow*24);
            graphicshorizontal.lineStyle(1, 0xFFFFFF, 0.8);
            graphicshorizontal.beginFill(0xFF700B, 1);
            graphicshorizontal.drawRect(0,0,220,22);        //0,0,55,55
            graphicshorizontal.boundsPadding = 0;
            graphicshorizontal.alpha=0;
            graphicshorizontal.name="graphicshorizontal";

            grouphorizontal2.add(graphicshorizontal);
        }
        
        
        for(var b=0;b<=(_this.addyellowh+3);b++){
            _this.gridv = this.add.sprite(75,286,'Level14_gridv');
			_this.gridv.scale.setTo(0.86,0.90);
            _this.gridv.name="vertical";
            _this.gridv.inputEnabled=true;
            _this.gridv.input.enableDrag(true);
            _this.gridv.events.onDragStart.add(this.onDragStart, this);
            _this.gridv.events.onDragStop.add(this.onDragStop, this);
        }
        
        for(var b2=0;b2<=(_this.addyellowv+3);b2++){
            _this.gridh = this.add.sprite(75,250,'Level14_gridh');
			_this.gridh.scale.setTo(0.86,0.90);
            _this.gridh.name="horizontal";
            _this.gridh.inputEnabled=true;
            _this.gridh.input.enableDrag(true);
            _this.gridh.events.onDragStart.add(this.onDragStart, this);
            _this.gridh.events.onDragStop.add(this.onDragStop, this);
        }
        
        for(var rem=0;rem<(_this.remainder+3);rem++){
            _this.yellowgrid = this.add.sprite(75,438,'Level14_yellowgrid');
            _this.yellowgrid.scale.setTo(0.72,0.80);
            _this.yellowgrid.name="yellowgrid";
            _this.yellowgrid.inputEnabled=true;
            _this.yellowgrid.input.enableDrag(true);
            _this.yellowgrid.events.onDragStart.add(this.onDragStart, this);
            _this.yellowgrid.events.onDragStop.add(this.onDragStop, this);
        }
    },
    getVoice:function(){
        _this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/14.2/English/Game 14.2.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/14.2/Hindi/Game 14.2.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/14.2/Kannada/Game 14.2.mp3");
        }else{
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/14.2/Odiya/14.2.mp3");
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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

    stopVoice:function(){
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
               
            if(_this.amplify!=null)
            {
                _this.amplify.context.close();
                _this.amplify = null;
            }
        }

            
    },
    
    
    checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
    fetchrandom: function(array){
         var count=0;
         for (var i=0;i<array.length;i++){
            
             if(array[i]!=0)
             {
                     count++;
                     _this.selectedarray.push(array[i]); 
                     if(count == 1){
                          return _this.selectedarray;
                     }
             } 
         }    
         
     },
    
    correctAns:function(){
        _this.countyellowno=0;
        _this.countyellowno2=0;
        _this.countgreen=0;
        _this.colorange=0;
        _this.colorange2=0;
        _this.counthno = 0;
        _this.countvno =0;
        _this.greencubesets=0;
        _this.countgreenh=0;
        _this.countgreenv=0;
        _this.wrongflag=0;
        
        _this.cmusic.play();
        
        if(_this.timer1!=null)
        {
            _this.timer1.stop();
            _this.timer1 = null;
        }
        
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
        var starAnim = _this.starsGroup.getChildAt(_this.countcorrect);
        starAnim.smoothed = false;
        var anim4 = starAnim.animations.add('star');
        anim4.play();
        
        anim4.onComplete.add(function(){
            _this.countcorrect++;
        this.time.events.add(2000,function(){
           tick.frameName='Symbol 14 copy instance 10000';
           tick.events.onInputDown.removeAll();
           if(_this.no1<6)
            {
                this.time.events.add(500,function(){
                    shakeGroup.destroy();
                    this.getQuestion();
                },this);
                
            }
                else{
                _this.no1=0;
                this.stopVoice();   
                this.state.start('unity14_2Score'); 
            }
        },this);
       },this);
    },
    
    wrongAns:function(){
        _this.wrongflag++;
        _this.wmusic.play();       
        shakeGroup.add(horiznum);
        shakeGroup.add(vertinum);
        shakeGroup.x =this.world.centerX+350;
        shakeGroup.y = this.world.centerY;
        shakeGroup.pivot.setTo(this.world.centerX+350,this.world.centerY);
        var tween = _this.add.tween(shakeGroup);
            tween.to({ angle: -10 }, 100, 'Linear', true, 0);
            tween.onComplete.add(function(){
            var tween1 = _this.add.tween(shakeGroup);
            tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(shakeGroup);
                tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                tween2.onComplete.add(function(){
                    var tween3 = _this.add.tween(shakeGroup);
                    tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                    tween3.onComplete.add(function(){
                        shakeGroup.angle = 0;
                        shakeGroup.x = this.world.centerX-350;
                        shakeGroup.y = this.world.centerY;
                        shakeGroup.pivot.setTo(this.world.centerX-350,this.world.centerY);
                    }, _this);
                  }, _this);
                }, _this);
            }, _this);
    },
    
   addNumberPad:function(){
    
       pressed=0;
       dragged=false;
        
        shakeGroup=this.add.group();
        var boxbg = this.add.sprite(800,290,'Level14_calcibg');
        boxbg.name="Level14_calcibg";
        boxbg.anchor.setTo(0.5);
        boxbg.scale.setTo(0.65,0.65);
       
        var WhiteBox=this.add.sprite(800,120,'Level14_WhiteBox');
        WhiteBox.name="Level14_WhiteBox";
        WhiteBox.anchor.setTo(0.5);
        WhiteBox.scale.setTo(0.60,0.60);
        
       var equalSymbol=this.add.sprite(812,95,'Level14_equal');
       equalSymbol.name="Level14_equal";
       equalSymbol.scale.setTo(0.7,0.7);
       var multisymbol = this.add.sprite(742,95,'Level14_multiplication');
        multisymbol.scale.setTo(0.60,0.60);

        txtbox = this.add.sprite(880,120,'Level14_box','Symbol 30 copy instance 10000');
        txtbox.height-=10;
        txtbox.anchor.setTo(0.5);
        txtbox.name = "txtbox";
        
        enterTxt = this.add.text(-2,-2, selectedAns="");
        enterTxt.anchor.setTo(0.5);
        enterTxt.align = 'center';

        enterTxt.font = 'myfont';
        enterTxt.fontSize = 40;
        enterTxt.fontWeight="normal";
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
       
        var calNum1=this.add.sprite(718,205,'Level14_calNum');
        calNum1.name="Level14_calNum1";
        calNum1.anchor.setTo(0.5);
        calNum1.scale.setTo(0.73,0.73);
        calNum1.frame=1;
        calNum1.inputEnabled=true;
        calNum1.input.useHandCursor = true;
        calNum1.events.onInputDown.add(function(){
                _this.clickSound.play();
                txtbox.frame=1;
               if(selectedAns.length<3){
                    selectedAns += calNum1.frame;
                    enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum2=this.add.sprite(801,205,'Level14_calNum');
        calNum2.name="Level14_calNum2";
        calNum2.anchor.setTo(0.5);
        calNum2.scale.setTo(0.73,0.73);
        calNum2.frame=2;
        calNum2.inputEnabled=true;
        calNum2.input.useHandCursor = true;
        calNum2.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
           if(selectedAns.length<3){
                selectedAns += calNum2.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum3=this.add.sprite(884,205,'Level14_calNum');
        calNum3.name="Level14_calNum3";
        calNum3.anchor.setTo(0.5);
        calNum3.scale.setTo(0.73,0.73);
        calNum3.frame=3;
        calNum3.inputEnabled=true;
        calNum3.input.useHandCursor = true;
        calNum3.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
            if(selectedAns.length<3){
                selectedAns += calNum3.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum4=this.add.sprite(718,285,'Level14_calNum');
        calNum4.name="Level14_calNum4";
        calNum4.anchor.setTo(0.5);
        calNum4.scale.setTo(0.73,0.73);
        calNum4.frame=4;
        calNum4.inputEnabled=true;
        calNum4.input.useHandCursor = true;
        calNum4.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
           if(selectedAns.length<3){
                selectedAns += calNum4.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum5=this.add.sprite(801,285,'Level14_calNum');
        calNum5.name="Level14_calNum5";
        calNum5.anchor.setTo(0.5);
        calNum5.scale.setTo(0.73,0.73);
        calNum5.frame=5;
        calNum5.inputEnabled=true;
        calNum5.input.useHandCursor = true;
        calNum5.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
           if(selectedAns.length<3){
                selectedAns += calNum5.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum6=this.add.sprite(884,285,'Level14_calNum');
        calNum6.name="Level14_calNum6";
        calNum6.anchor.setTo(0.5);
        calNum6.scale.setTo(0.73,0.73);
        calNum6.frame=6;
        calNum6.inputEnabled=true;
        calNum6.input.useHandCursor = true;
        calNum6.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
           if(selectedAns.length<3){
                selectedAns += calNum6.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum7=this.add.sprite(718,365,'Level14_calNum');
        calNum7.name="Level14_calNum7";
        calNum7.anchor.setTo(0.5);
        calNum7.scale.setTo(0.73,0.73);
        calNum7.frame=7;
        calNum7.inputEnabled=true;
        calNum7.input.useHandCursor = true;
        calNum7.events.onInputDown.add(function(){
            _this.clickSound.play();
           txtbox.frame=1;
           if(selectedAns.length<3){
                selectedAns += calNum7.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum8=this.add.sprite(801,365,'Level14_calNum');
        calNum8.name="Level14_calNum8";
        calNum8.anchor.setTo(0.5);
        calNum8.scale.setTo(0.73,0.73);
        calNum8.frame=8;
        calNum8.inputEnabled=true;
        calNum8.input.useHandCursor = true;
        calNum8.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
           if(selectedAns.length<3){
                selectedAns += calNum8.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum9=this.add.sprite(884,365,'Level14_calNum');
        calNum9.name="Level14_calNum9";
        calNum9.anchor.setTo(0.5);
        calNum9.scale.setTo(0.73,0.73);
        calNum9.frame=9;
        calNum9.inputEnabled=true;
        calNum9.input.useHandCursor = true;
        calNum9.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
           if(selectedAns.length<3){
                selectedAns += calNum9.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum0=this.add.sprite(718,445,'Level14_calNum');
        calNum0.name="Level14_calNum10";
        calNum0.anchor.setTo(0.5);
        calNum0.scale.setTo(0.73,0.73);
        calNum0.frame=0;
        calNum0.inputEnabled=true;
        calNum0.input.useHandCursor = true;
        calNum0.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
           if(selectedAns.length<3){
               selectedAns += calNum0.frame;
               enterTxt.setText(selectedAns);
           }
                
        },this);      
            tick=this.add.sprite(885,445,'Level14_tickBtn');
        tick.name="Level14_rightBtn";
            tick.anchor.setTo(0.5);
            tick.scale.setTo(1.35,1.40);//0.66,0.66);
            tick.frame=0;
            tick.inputEnabled=true;
            tick.input.useHandCursor = true;
            tick.events.onInputDown.add(function(){
                 _this.noofAttempts++;
                _this.clickSound.play();
                if(_this.rightans == selectedAns){
					tick.inputEnabled=false;
                    this.correctAns();
                }else{
                    selectedAns="";
                    enterTxt.setText(selectedAns);
                    this.wrongAns();
                }
                tick.frame=1;
                this.time.events.add(500, function(){
                    tick.frame=0;  
            },this);
            },this);
       
            eraser=this.add.sprite(805,445,'Level14_eraser');
        eraser.name="Level14_eraser";
            eraser.anchor.setTo(0.5);
            eraser.scale.setTo(1.35,1.40);//0.66,0.66);
            eraser.frame=0;
            eraser.inputEnabled=true;
            eraser.input.useHandCursor = true;
            eraser.events.onInputDown.add(function(){
                _this.clickSound.play();
                selectedAns = "";
                enterTxt.setText(selectedAns);
                eraser.frame=1;
                this.time.events.add(500, function(){
                eraser.frame=0;
                },this);
                txtbox.frame=0;
                    
            },this);
       shakeGroup.add(boxbg);
       shakeGroup.add(WhiteBox);
       shakeGroup.add(multisymbol);
       shakeGroup.add(equalSymbol);
       shakeGroup.add(txtbox);
       shakeGroup.add(calNum1);
       shakeGroup.add(calNum2);
       shakeGroup.add(calNum3);
       shakeGroup.add(calNum4);
       shakeGroup.add(calNum5);
       shakeGroup.add(calNum6);
       shakeGroup.add(calNum7);
       shakeGroup.add(calNum8);
       shakeGroup.add(calNum9);
       shakeGroup.add(calNum0);
       shakeGroup.add(tick);
       shakeGroup.add(eraser);
       shakeGroup.visible=true;
        
   },
    
    onDragStart:function(target){
        _this.clickSound.play();
        target.bringToTop(_this.gridarea);
        
    },
    
    onDragStop:function(target){//_this.Level14_gridjointvadd  groupvertical
        _this.snapSound.play();
                if(_this.countgreen<2){
                 if((target.x > 50 && target.x < 620)){
                        if(target.name=="vertical" && _this.flag=="question1"){
                            _this.countgreenv++;
                            if(_this.countgreenv==1  || this.checkOverlap(target,_this.gridv1)){
                                _this.countgreen++;
                                target.scale.setTo(1.67,1.63);
                                target.x=210;
                                target.y=107;
								target.inputEnabled=false;
                            }
                        else{
                            _this.wmusic.play();
                            target.x=75;
                            target.y=286;
                            
                            }
                    }else if(target.name=="vertical" && _this.flag=="question2"){
                            target.x=75;
                            target.y=286;
							_this.wmusic.play();
                    }else if(target.name=="horizontal" && _this.flag=="question1"){
                        
                        _this.countgreenh++;
                        if(_this.countgreenh==1 || this.checkOverlap(target,_this.gridh1)){
                            _this.countgreen++;
                            target.scale.setTo(1.67,1.73);
                            target.x=233;
                            target.y=80;
							target.inputEnabled=false;
                        }else{
                            _this.wmusic.play();
                            target.x=75;
                            target.y=250;
                            
                        }
                        
                    }else if(target.name=="horizontal" && _this.flag=="question2"){                       
                        _this.countgreenh++;
                        if(_this.countgreenh==1 || this.checkOverlap(target,_this.gridh1)){
                            _this.countgreen++;
                            _this.countgreen++;
                            target.scale.setTo(1.67,1.73);
                            target.x=233;
                            target.y=80;
                            target.inputEnabled=false;
                        }else{
                            _this.wmusic.play();
                            target.x=75;
                            target.y=250;
                            
                        }
                        
                    }else if(target.name == "greencubeset"){
                        _this.wmusic.play();
                        target.x=75;
                        target.y=97;
                    }else if(target.name == "yellowgrid" && _this.flag=="question1" && _this.countgreen==1){
                        _this.wmusic.play();
                        target.x=75;
                        target.y=438;
                    }else if(target.name == "yellowgrid" && _this.flag=="question2" && _this.countgreenh == 0){
                        _this.wmusic.play();
                        target.x=75;
                        target.y=438;
                    }
                }else{
                    if(target.name=="vertical"){
                        target.x=75;
                        target.y=286;
                        _this.wmusic.play();
                    }else if(target.name=="horizontal"){
                        _this.wmusic.play();
                        target.x=75;
                        target.y=250;
                    }else if(target.name == "yellowgrid"){
                        _this.wmusic.play();
                        target.x=75;
                        target.y=438;
                    }else if(target.name == "greencubeset"){
                        target.x=75;
                        target.y=97;
                    }
                }
                
            }
            else{
                if(_this.flag=="question1"){
            if(this.checkOverlap(target,graphicsgrid)){
                    if(target.name == "greencubeset"){
                        if(_this.countyellowno<=_this.addyellowh || _this.countyellowno2<_this.addyellowv){
                            target.x=75;
                            target.y=97;
							_this.wmusic.play();
                        }
                        else{
                            target.inputEnabled=false;
                            _this.greencubesets++;
                            if(_this.greencubesets == 1){
                                target.x=235;
                                target.y=107;
                                target.scale.setTo(1.67,1.65);
                            }else{
                                target.x=75;
                            	target.y=97;
								_this.wmusic.play();
                            }
                        }
                        
                        
                    }
                    else{
                            if(target.name =="vertical"){
                                target.x=75;
                                target.y=286;
                            }else if(target.name =="horizontal"){
                                target.x=75;
                                target.y=250;
                            }
                        } 
                }else if(target.name=="yellowgrid"){
            //Do No check
        }
            
                }
        
        if(_this.flag=="question2" && target.name == "greencubeset"){
            target.x=75;
            target.y=97;
            _this.wmusic.play();
        }
        if(_this.flag=="question2" && target.name == "vertical"){          
                target.x=75;
                target.y=286;
                _this.wmusic.play();
        }
        if(target.name=="vertical" && _this.flag=="question1"){
           _this.stopflowv1q2=0;
            if(_this.dragv >= (_this.addyellowh-1)){
                    target.x=75;
                	target.y=286;
                    _this.wmusic.play();
                  _this.stopflowv1q2=1;
                }
              else{
                    if(this.qArrays[_this.no1-1]==4 || this.qArrays[_this.no1-1]==5 || this.qArrays[_this.no1-1]==6){

                        if(this.checkOverlap(target,groupvertical.getChildAt(0)) ){
                            if(_this.greencubesets==0){
                                target.x=75;
                				target.y=286;
                            }else{
                                _this.dragv++;
                            }  
                        }else  if(this.checkOverlap(target,groupvertical.getChildAt(1)) ){
                            if(_this.greencubesets==0){
                                target.x=75;
                				target.y=286;
                            }else{
                                _this.dragv++;
                            }  
                        }else  if(this.checkOverlap(target,groupvertical.getChildAt(2)) ){
                            if(_this.greencubesets==0){
                                target.x=75;
                				target.y=286;
                            }else{
                                _this.dragv++;
                            }  
                        }else  if(this.checkOverlap(target,groupvertical.getChildAt(3)) ){
                            if(_this.greencubesets==0){
                                target.x=75;
                				target.y=286;
                            }else{
                                _this.dragv++;
                            }  
                        }/*else if(this.checkOverlap(target,groupvertical.getChildAt(4)) ){
                            if(_this.greencubesets==0){
                                target.x=118;
                                target.y=275;
                            }else{
                                _this.dragv++;
                            }  
                        }else if(this.checkOverlap(target,groupvertical.getChildAt(5)) ){
                            if(_this.greencubesets==0){
                                target.x=118;
                                target.y=275;
                            }else{
                                _this.dragv++;
                            }  
                        }*/
                        else if(this.qArrays[_this.no1-1]==5 || this.qArrays[_this.no1-1]==6){
                            if(this.checkOverlap(target,groupvertical.getChildAt(4)) ){
                                if(_this.greencubesets==0){
                                    target.x=75;
                                    target.y=286;
                                }else{
                                    _this.dragv++;
                                }     
                            }
                            else 
                                if(this.qArrays[_this.no1-1]==6){
                                    if(this.checkOverlap(target,groupvertical.getChildAt(5)) ){
                                        if(_this.greencubesets==0){
                                            target.x=75;
                                            target.y=286;
                                        }else{
                                            _this.dragv++;
                                        }  
                                }else{
                        _this.stopflowv1q2=1;
                        _this.wmusic.play();
                        target.x=75;
                        target.y=286;
                    }
                }
              
                else{
                        _this.stopflowv1q2=1;
                        _this.wmusic.play();
                        target.x=75;
                        target.y=286;
                    }
                            }else{
                        _this.stopflowv1q2=1;
                        _this.wmusic.play();
                        target.x=75;
                        target.y=286;
                    }
                        }
                        }
            if(_this.dragv==0 && _this.dragv < _this.addyellowh && _this.stopflowv1q2==0){
                target.scale.setTo(1.67,1.65);
                    target.y = 107;
                    target.x=466;
                _this.verticalcount=target.x;
                _this.verticallen++;
                }else if(_this.dragv==1 && _this.dragv < _this.addyellowh && _this.stopflowv1q2==0){
                    target.scale.setTo(1.67,1.65);
                    target.y = 107;
                    target.x=490;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                }else if(_this.dragv==2 && _this.dragv < _this.addyellowh && _this.stopflowv1q2==0){
                    target.scale.setTo(1.67,1.65);
                    target.y = 107;
                    target.x=514;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                }else if(_this.dragv==3 && _this.dragv < _this.addyellowh && _this.stopflowv1q2==0){
                    target.scale.setTo(1.67,1.65);
                    target.y = 107;
                    target.x=538;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                }else if(_this.dragv==4 && _this.dragv < _this.addyellowh && _this.stopflowv1q2==0){
                    target.scale.setTo(1.67,1.65);
                    target.y = 107;
                    target.x=562;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                }else if(_this.dragv==5 && _this.dragv < _this.addyellowh && _this.stopflowv1q2==0){
                    target.scale.setTo(1.67,1.65);
                    target.y = 107;
                    target.x=586;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                }else if(_this.dragv==6 && _this.dragv < _this.addyellowh && _this.stopflowv1q2==0){
                    target.scale.setTo(1.67,1.65);
                    target.y = 107;
                    target.x=610;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                }else if(_this.dragv==7 && _this.dragv < _this.addyellowh && _this.stopflowv1q2==0){
                    target.scale.setTo(1.67,1.65);
                    target.y = 107;
                    target.x=634;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                }else if(_this.dragv >= _this.addyellowh && _this.stopflowv1q2==0){
                    target.x=75;
                    target.y=286;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                    _this.wmusic.play();
                }
            
            if(_this.stopflowv1q2==0)
            target.inputEnabled=false;

          }else if(target.name=="horizontal" && _this.flag=="question1"){
            _this.stopflowh1q2=0;
              if(_this.dragh >= (_this.addyellowv-1)){
                    target.x=75;
                    target.y=250;
                    _this.wmusic.play();
                  _this.stopflowh1q2=1;
                }
              else{
                    if(this.qArrays[_this.no1-1]==4 || this.qArrays[_this.no1-1]==5 || this.qArrays[_this.no1-1]==6){
                        
                    if(this.checkOverlap(target,grouphorizontal.getChildAt(0)) ){
                        console.log("drag1");  
                        _this.counthno++;
                        if(_this.greencubesets==0){
                            _this.wmusic.play();
                            target.x=75;
                            target.y=250;
                        }else{
                            _this.dragh++;
                        } 
                    }
                    else if(this.qArrays[_this.no1-1]==5 || this.qArrays[_this.no1-1]==6){
                        if(this.checkOverlap(target,grouphorizontal.getChildAt(1)) ){
                            if(_this.greencubesets==0){
                            target.x=75;
                            target.y=250;
                            _this.wmusic.play();
                        }else{
                            _this.dragh++;
                        } 
                       
                    }else
                        if(this.qArrays[_this.no1-1]==6){
                           if(this.checkOverlap(target,grouphorizontal.getChildAt(2)) ){
                        console.log("drag3");
                        if(_this.greencubesets==0){
                            target.x=75;
                            target.y=250;
                            _this.wmusic.play();
                        }else{
                            _this.dragh++;
                        } 
                    }else{
                        _this.stopflowh1q2=1;
                        _this.wmusic.play();
                        target.x=75;
                        target.y=250;
                    }
                    }else{
                        _this.stopflowh1q2=1;
                        _this.wmusic.play();
                        target.x=75;
                        target.y=250;
                    }
                    }else{
                        _this.stopflowh1q2=1;
                        _this.wmusic.play();
                        target.x=75;
                        target.y=250;
                    }
                        
                    }
                    }
            if(_this.dragh==0 && _this.dragh < _this.addyellowv && _this.stopflowh1q2==0){       
                console.log("drag1 again");
                target.scale.setTo(1.67,1.73);
                    target.y = 346;
                    target.x=235;
                _this.horizontalcount=target.y;
                }else if(_this.dragh==1 && _this.dragh < _this.addyellowv && _this.stopflowh1q2==0){
                    console.log("drag2 again");
                    target.scale.setTo(1.67,1.73);
                    target.y = 370;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh==2 && _this.dragh < _this.addyellowv && _this.stopflowh1q2==0){
                    console.log("drag3 again");
                    target.scale.setTo(1.67,1.73);
                    target.y = 394;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh==3 && _this.dragh < _this.addyellowv && _this.stopflowh1q2==0){
                    console.log("drag4 again");
                    target.scale.setTo(1.67,1.73);
                    target.y = 418;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh==4 && _this.dragh < _this.addyellowv && _this.stopflowh1q2==0){
                    console.log("drag5 again");
                    target.scale.setTo(1.67,1.73);
                    target.y = 442;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh >= _this.addyellowv && _this.stopflowh1q2==0){
                    console.log("drag greater");
                    target.x=75;
                    target.y=250;
                    _this.wmusic.play();
                }
            
            if(_this.stopflowh1q2==0)
            target.inputEnabled=false;
         } 
        else if(target.name=="horizontal" && _this.flag=="question2"){
              _this.stopflowhq2=0;
            if(_this.dragh2 >= (_this.secondno-1)){
                    target.x=75;
                    target.y=250;
                    _this.wmusic.play();
                }
              else{
              if(_this.countyellowno<_this.addyellowh || _this.countyellowno2<_this.addyellowv){
                target.x=75;
                target.y=250;
				_this.wmusic.play();
              }
              else{
            if(this.checkOverlap(target,grouphorizontal2.getChildAt(0)) ){
                _this.dragh2++;

            }
            else if(this.checkOverlap(target,grouphorizontal2.getChildAt(1)) ){
                _this.dragh2++;
                
            }
            else if(this.checkOverlap(target,grouphorizontal2.getChildAt(2)) ){
               _this.dragh2++;
                
            }
            else if(this.checkOverlap(target,grouphorizontal2.getChildAt(3)) ){
                _this.dragh2++;
                
            }
            else if(this.qArrays[_this.no1-1]==2 || this.qArrays[_this.no1-1]==3){
                if(this.checkOverlap(target,grouphorizontal2.getChildAt(4)) ){
                _this.dragh2++;
                }else if(this.qArrays[_this.no1-1]==3){
                    if(this.checkOverlap(target,grouphorizontal2.getChildAt(5)) ){
                        _this.dragh2++;
                    }else{
                        _this.stopflowhq2=1;
                        target.x=75;
                        target.y=250;
                        _this.wmusic.play();
                    }
                }else{
                        _this.stopflowhq2=1;
                    target.x=75;
                    target.y=250;
                    _this.wmusic.play();
                    }
            }else{
                    _this.stopflowhq2=1;
                    target.x=75;
                    target.y=250;
                    _this.wmusic.play();
                }
                
            if(_this.dragh2==0 && _this.dragh2 < _this.secondno && _this.stopflowhq2==0){              ///////240 105
                target.scale.setTo(1.67,1.73);
                    target.y = 107;
                    target.x=235;
                _this.horizontalcount=target.y;
                }else if(_this.dragh2==1 && _this.dragh2 < _this.secondno && _this.stopflowhq2==0){
                    target.scale.setTo(1.67,1.73);
                    target.y = 131;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2==2 && _this.dragh2 < _this.secondno && _this.stopflowhq2==0){
                    target.scale.setTo(1.67,1.73);
                    target.y = 155;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2==3 && _this.dragh2 < _this.secondno && _this.stopflowhq2==0){
                    target.scale.setTo(1.67,1.73);
                    target.y = 179;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2==4 && _this.dragh2 < _this.secondno && _this.stopflowhq2==0){
                    target.scale.setTo(1.67,1.73);
                    target.y = 203;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2==5 && _this.dragh2 < _this.secondno && _this.stopflowhq2==0){
                    target.scale.setTo(1.67,1.73);
                    target.y = 227;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2 >= (_this.secondno-1) && _this.stopflowhq2==0){
                    target.x=75;
                    target.y=250;
                    _this.wmusic.play();
                }
            
            if(_this.stopflowhq2==0)
            target.inputEnabled=false;
              }
              }//current
          }    
         else if(target.name=="yellowgrid" && _this.flag=="question1"){
            
              _this.countyellowno++;
            
              if(_this.countyellowno<=_this.addyellowh){
                  if(_this.colorange<_this.addyellowh){
                      _this.yellowgrid1 = this.add.sprite(467+(_this.colorange*23),80,'Level14_yellowgrid');
                      _this.yellowgrid1.scale.setTo(1.30,1.30); 
                      target.kill();
                      _this.colorange++;
                  }
                  
              }else if(_this.countyellowno2<_this.addyellowv){
                  _this.countyellowno2++;
                  if(_this.colorange2<_this.addyellowv){
                      _this.yellowgrid2 = this.add.sprite(210,345+(_this.colorange2*23),'Level14_yellowgrid');
                      _this.yellowgrid2.scale.setTo(1.30,1.30); 
                      target.kill();
                      _this.colorange2++;
                  }
              }
            else{
              if((target.x > 50 && target.x < 620)){
                  target.kill();
                
                  if(_this.verticalcount==0 && _this.horizontalcount==0){
                      
                      if(_this.row <= 9){
                          if(_this.row == 0){
                               
                              _this.rowyp = 106;
                          }else if(_this.row == 1){
                              if(_this.col==0){
                                   _this.rowxp = 486;
                                  _this.rowyp = 131;
                              }else{
                                  _this.rowyp = 131;
                              }
                              
                          }else if(_this.row == 2){
                              if(_this.col==0){
                                   _this.rowxp = 486;
                                  _this.rowyp = 155;
                              }else{
                                  _this.rowyp = 155;
                              }
                          }else if(_this.row == 3){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 179;
                              }else{
                                  _this.rowyp = 179;
                              }
                          }else if(_this.row == 4){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 203;
                              }else{
                                  _this.rowyp = 203;
                              }
                          }else if(_this.row == 5){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 227;
                              }else{
                                  _this.rowyp = 227;
                              }
                          }else if(_this.row == 6){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 251;
                              }else{
                                  _this.rowyp = 251;
                              }
                          }else if(_this.row == 7){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 275;
                              }else{
                                  _this.rowyp = 275;
                              }
                          }else if(_this.row == 8){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 299;
                              }else{
                                  _this.rowyp = 299;
                              }
                          }else if(_this.row == 9){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 323;
                              }else{
                                  _this.rowyp = 323;
                              }
                          }
                      if(_this.col<_this.addyellowh){
                              if(_this.row>0 && _this.col==0){
                                  _this.yellowgrid=this.add.sprite(486,_this.rowyp,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.30,1.30);
                                  _this.col++; 
                                  _this.col++; 
                             }else{
                                     _this.yellowgrid=this.add.sprite(466+((_this.col)*23),_this.rowyp,'Level14_yellowgrid');         
                                 _this.yellowgrid.scale.setTo(1.30,1.30);
                                 _this.col++; 
                              }
                          }else if(_this.col>=_this.addyellowh){
                             _this.yellowgrid=this.add.sprite(466,_this.rowyp+23,'Level14_yellowgrid');
                            _this.yellowgrid.scale.setTo(1.30,1.30);
                               _this.row++;
                              _this.col=0;
                              
                          }
                  }else{
                      if(_this.cols<_this.firstno){
                              _this.yellowgrid=this.add.sprite(235+(_this.cols*23),345+(_this.rows*24),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              _this.cols++; 
                          }else{
                              _this.rows++;
                              _this.yellowgrid=this.add.sprite(235,345+(_this.rows*24),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              _this.cols=0;
                              
                          }
                  }
                  }else {
                      _this.addyellowh2=_this.addyellowh;
                      _this.addyellowv2=_this.addyellowv;
                            if(_this.verticalcount == 466){
                                  _this.pos++;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-1;
                                  }
                                  _this.xpos=486;
                                  _this.xpos1=254;
                                  
                              } 
                              else if(_this.verticalcount == 490){
                                  _this.pos++;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-2;
                                  }
                                  _this.xpos=510;
                                  _this.xpos1=274;
                                  
                              }
                              else if(_this.verticalcount == 514){
                                  _this.pos++;
                                  _this.xpos=534;
                                  _this.xpos1=294;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-3;
                                  }
                                  
                              }    
                              else if(_this.verticalcount == 538){
                                  _this.pos++;
                                  _this.xpos=558;
                                  _this.xpos1=314;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-4;
                                  }
                              }   
                              else if(_this.verticalcount == 562){
                                  _this.pos++;
                                  _this.xpos=582;
                                  _this.xpos1=334;
                                 if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-5;
                                  }
                              }
                      if(_this.row <=9 && _this.dragv < (_this.firstno-11)){// && _this.col<_this.addyellowh){
        
                          if(_this.row == 0){
                               
                              _this.rowyp = 106;
                          }else if(_this.row == 1 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                   _this.rowxp = 486;
                                  _this.rowyp = 131;
                              }else{
                                  
                                  _this.rowyp = 131;
                              }
                              
                          }else if(_this.row == 2 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                   _this.rowxp = 486;
                                  _this.rowyp = 155;
                              }else{
                                  _this.rowyp = 155;
                              }
                          }else if(_this.row == 3 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 179;
                              }else{
                                  _this.rowyp = 179;
                              }
                          }else if(_this.row == 4 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 203;
                              }else{
                                  _this.rowyp = 203;
                              }
                          }else if(_this.row == 5 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 227;
                              }else{
                                  _this.rowyp = 227;
                              }
                          }else if(_this.row == 6 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 251;
                              }else{
                                  _this.rowyp = 251;
                              }
                          }else if(_this.row == 7 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 275;
                              }else{
                                  _this.rowyp = 275;
                              }
                          }else if(_this.row == 8 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 299;
                              }else{
                                  _this.rowyp = 299;
                              }
                          }else if(_this.row == 9 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 323;
                              }else{
                                  _this.rowyp = 323;
                              }
                          }
                         
                          _this.yum = ((_this.firstno-10)- (_this.dragv+1));
                           if(_this.col<_this.addyellowh){     
                               if(_this.row>0 && _this.col==0 && _this.yum > 1){
                                   
                                   _this.yellowgrid=this.add.sprite(_this.xpos+23,_this.rowyp,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.30,1.30);
                                   _this.col++; 
                                  _this.col++;
                               }else if(_this.row>0 && _this.col==0 && _this.yum == 1){
                    
                                   _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp+24,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.30,1.30);
                                   _this.col++; 
                                  
                               }else{
                                   _this.yellowgrid=this.add.sprite(_this.xpos+((_this.col)*23),_this.rowyp,'Level14_yellowgrid');
                                   _this.yellowgrid.scale.setTo(1.30,1.30);
                                   _this.col++;
                               }
                               
                          }else if(_this.col>=_this.addyellowh){
                              if(_this.row<9){
                               _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp+24,'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              }
                              _this.row++;
                              
                             _this.col=0;
                              
                          }
                  }else{
                    if(_this.rowsh < (_this.secondno-10)){
                      if(_this.horizontalcount == 346){
                                  _this.counth1++;
                                  _this.posh++;
                                  if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-1;
                                  }
                              }
                              else if(_this.horizontalcount == 370){
                                 _this.counth1++;
                                  _this.posh++;
                                  if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-2;
                                  }
                                  
                              }    
                              else if(_this.horizontalcount == 394){
                                  _this.counth1++;
                                  _this.posh++;
                                  if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-3;
                                  }
                              }   
                              else if(_this.horizontalcount == 418){
                                  _this.counth1++;
                                  _this.posh++;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-4;
                                  }
                              }
                      else if(_this.horizontalcount == 442){
                                  _this.counth1++;
                                  _this.posh++;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-4;
                                  }
                              }else{
                                  _this.xpos1=235;
                                  _this.ypos1=346;
                              }
                          if(_this.horizontalcount ==346  && _this.next==0)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==370  && _this.next<=1)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==394  && _this.next<=2)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==418  && _this.next<=3)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==442  && _this.next<=4)
                            _this.hcount = _this.firstno-10;
                          else
                            _this.hcount = _this.firstno;
                        if(_this.next>0 && _this.horizontalcount > 0){
                                _this.hcount--;  
                              }
                          if(_this.colsh<(_this.hcount)){
                              if(_this.counth1 <= (_this.hcount)){
                                  if(_this.horizontalcount == 346){
                                      if(_this.next==0){
                                          _this.xpos1 = 467;
                                          _this.ypos1 = 346;
                                      }else{
                                          _this.xpos1 =254;
                                      }
                                  }
                                  else if(_this.horizontalcount == 370){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 346;
                                    }else if(_this.next == 1){
                                        _this.xpos1 = 487;
                                        _this.ypos1 = 346;
                                    }
                                        else{
                                        _this.xpos1 =254;
                                    }
                                  } 
                                
                                  else if(_this.horizontalcount == 394){
                                      if(_this.next == 0){
                                          _this.xpos1 = 467;
                                          _this.ypos1 = 346;
                                      }else if(_this.next == 1 || _this.next == 2){
                                        _this.xpos1 = 487;
                                        _this.ypos1 = 346;
                                    }else{
                                        _this.xpos1 = 254;
                                    }
                                 
                                  }
                                  else if(_this.horizontalcount == 418){
                                      if(_this.next == 0){
                                          _this.xpos1 = 467;
                                          _this.ypos1 = 346;
                                      }else if(_this.next == 1 || _this.next == 2 || _this.next == 3){
                                        _this.xpos1 = 487;
                                        _this.ypos1 = 346;
                                    }else{
                                        _this.xpos1 = 254;
                                    }
                                  } 
                                  
                                else if(_this.horizontalcount == 442){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 346;
                                    }else if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next ==4){
                                        _this.xpos1 = 487;
                                        _this.ypos1 = 346;
                                    }else{
                                        _this.xpos1 = 254;
                                    }
                                  } 
                                  
                              }else{
                                  _this.xpos1 = 235;
                                  _this.ypos1 = 346;
                                  _this.hcount = _this.firstno;
                                  
                              }                            
                              _this.yellowgrid=this.add.sprite(_this.xpos1+(_this.colsh*23),_this.ypos1+(_this.rowsh*24),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              _this.colsh++; 
                          }else{
                               _this.next++;                 
                              if(_this.horizontalcount == 346){
                                  _this.xpos1 = 235;
                                      _this.ypos1 = 346;
                                  
                                  
                              }else if(_this.horizontalcount == 370){
                                  
                                  if(_this.next == 1){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 346;
                                  }else if(_this.next > 1){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 346;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 394){
                                  
                                  if(_this.next == 1 || _this.next == 2){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 346;
                                  }else if (_this.next > 2){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 346;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 418){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 346;
                                  }else if (_this.next > 3){
                                      _this.xpos1 = 234;
                                      _this.ypos1 = 346;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 442){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next == 4){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 346;
                                  }else if (_this.next > 4){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 346;
                                  }
                                  
                                      
                              }else{
                                  _this.xpos1 = 235;
                                  
                                  _this.ypos1 = 346;
                                  
                              }
                              _this.rowsh++;
                               if(_this.rowsh<(_this.secondno-10)){
                                   _this.yellowgrid=this.add.sprite(_this.xpos1,_this.ypos1+(_this.rowsh*24),'Level14_yellowgrid');
                                   _this.yellowgrid.scale.setTo(1.30,1.30);
                               }
                              
                              _this.colsh=0;
                              _this.counth1=0;
                              
                          }
                      }
                  }
        }
              }else{
                  target.x=75;
                  target.y=438;
                  _this.wmusic.play();
              }
            }
          }
        
        else if(target.name=="yellowgrid" && _this.flag=="question2"){
              _this.countyellowno++;
              if(_this.countyellowno<=_this.addyellowh){  
                  if(_this.colorange<_this.addyellowh){
                      _this.yellowgrid1 = this.add.sprite(467+(_this.colorange*23),80,'Level14_yellowgrid');//439
                      _this.yellowgrid1.scale.setTo(1.30,1.30); 
                      target.kill();
                      _this.colorange++;
                  }
              }else if(_this.countyellowno2<_this.addyellowv){
                  _this.countyellowno2++;
                  if(_this.colorange2<_this.addyellowv){
                      _this.yellowgrid2 = this.add.sprite(209,108+(_this.colorange2*23),'Level14_yellowgrid');
                      _this.yellowgrid2.scale.setTo(1.30,1.30); 
                      target.kill();
                      _this.colorange2++;
                  }
              }
            else{
              if((target.x > 50 && target.x < 620)){
                  target.kill();
                
                  if(_this.horizontalcount==0){
                      if(_this.row <= 9){
                          if(_this.col<_this.firstno){
                              _this.yellowgrid=this.add.sprite(235+(_this.col*23),107+(_this.row*24),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              _this.col++;
                          }else{
                              _this.row++;
                              _this.yellowgrid=this.add.sprite(235,107+(_this.row*24),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              _this.col=0;
                              
                          }
                      }
                     
                  }else {
                      _this.addyellowh2=_this.addyellowh;
                      _this.addyellowv2=_this.addyellowv;
                            if(_this.verticalcount == 440){
                                  _this.pos++;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-1;
                                  }
                                  _this.xpos=460;
                                  _this.xpos1=254;
                                  
                              } 
                              else if(_this.verticalcount == 460){
                                  _this.pos++;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-2;
                                  }
                                  _this.xpos=480;
                                  _this.xpos1=274;
                                  
                              }
                              else if(_this.verticalcount == 480){
                                  _this.pos++;
                                  _this.xpos=500;
                                  _this.xpos1=294;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-3;
                                  }
                                  
                              }    
                              else if(_this.verticalcount == 500){
                                  _this.pos++;
                                  _this.xpos=520;
                                  _this.xpos1=314;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-4;
                                  }
                              }   
                              else if(_this.verticalcount == 520){
                                  _this.pos++;
                                  _this.xpos=540;
                                  _this.xpos1=334;
                                 if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-5;
                                  }
                              }
                              
                      if(_this.row <=9 && _this.dragv < (_this.firstno-11) && _this.flag=="question1"){// && _this.col<_this.addyellowh){
                       if(_this.row == 0){
                               
                              _this.rowyp = 105;
                          }else if(_this.row == 1 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                   _this.rowxp = 460;
                                  _this.rowyp = 125;
                              }else{
                                  _this.rowyp = 125;
                              }
                              
                          }else if(_this.row == 2 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                   _this.rowxp = 460;
                                  _this.rowyp = 150;
                              }else{
                                  _this.rowyp = 150;
                              }
                          }else if(_this.row == 3 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 170;
                              }else{
                                  _this.rowyp = 170;
                              }
                          }else if(_this.row == 4 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 190;
                              }else{
                                  _this.rowyp = 190;
                              }
                          }else if(_this.row == 5 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 212;
                              }else{
                                  _this.rowyp = 212;
                              }
                          }else if(_this.row == 6 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 235;
                              }else{
                                  _this.rowyp = 235;
                              }
                          }else if(_this.row == 7 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 255;
                              }else{
                                  _this.rowyp = 255;
                              }
                          }else if(_this.row == 8 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 277;
                              }else{
                                  _this.rowyp = 277;
                              }
                          }else if(_this.row == 9 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 290;
                              }else{
                                  _this.rowyp = 290;
                              }
                          }
                          
                          _this.yum = ((_this.firstno-10)- (_this.dragv+1));
                           if(_this.col<_this.addyellowh){    
                               if(_this.row>0 && _this.col==0 && _this.yum > 1){
                                   _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.30,1.30);
                                   _this.col++; 
                                  _this.col++;
                               }else if(_this.row>0 && _this.col==0 && _this.yum == 1){
                                   _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp+24,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.30,1.30);
                                   _this.col++; 
                                  
                               }else{
                                   _this.yellowgrid=this.add.sprite(_this.xpos+((_this.col)*23),_this.rowyp,'Level14_yellowgrid');
                                   _this.yellowgrid.scale.setTo(1.30,1.30);
                                   _this.col++;
                               }
                              
                          }else if(_this.col>=_this.addyellowh){
                              if(_this.row<9){
                               _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp+24,'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                    }
                              _this.row++;
                              
                             _this.col=0;
                              
                          }
                  }else{
                    if(_this.rowsh < (_this.secondno)){
                      if(_this.horizontalcount == 107){
                                  _this.counth1++;
                                  _this.posh++;
                                  if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-1;
                                  }
                              }
                              else if(_this.horizontalcount == 131){
                                 _this.counth1++;
                                  _this.posh++;
                                  if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-2;
                                  }
                                  
                              }    
                              else if(_this.horizontalcount == 155){
                                  _this.counth1++;
                                  _this.posh++;
                                  if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-3;
                                  }
                              }   
                              else if(_this.horizontalcount == 179){
                                  _this.counth1++;
                                  _this.posh++;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-4;
                                  }
                              }
                      else if(_this.horizontalcount == 203){
                                  _this.counth1++;
                                  _this.posh++;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-5;
                                  }
                              }else if(_this.horizontalcount == 227){
                                  _this.counth1++;
                                  _this.posh++;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-6;
                                  }
                              }else if(_this.horizontalcount == 251){
                                  _this.counth1++;
                                  _this.posh++;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-7;
                                  }
                              }else if(_this.horizontalcount == 275){
                                  _this.counth1++;
                                  _this.posh++;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-8;
                                  }
                              }else if(_this.horizontalcount == 299){
                                  _this.counth1++;
                                  _this.posh++;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-9;
                                  }
                              }else{
                                  _this.xpos1=235;
                                  _this.ypos1=107;
                              }
                      
                          if(_this.horizontalcount ==107  && _this.next==0)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==131  && _this.next<=1)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==155  && _this.next<=2)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==179  && _this.next<=3)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==203  && _this.next<=4)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==227  && _this.next<=5)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==251  && _this.next<=6)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==275  && _this.next<=7)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==299  && _this.next<=8)
                            _this.hcount = _this.firstno-10;
                          else
                            _this.hcount = _this.firstno;
                        
                        if(_this.next>0 && _this.horizontalcount > 0){
                                _this.hcount--;  
                              }
                          if(_this.colsh<(_this.hcount)){
                              if(_this.counth1 <= (_this.hcount)){
                                  if(_this.horizontalcount == 107){
                                      if(_this.next==0){
                                          _this.xpos1 = 467;
                                          _this.ypos1 = 107;
                                      }else{
                                          _this.xpos1 =259;
                                      }
                                  }
                                  else if(_this.horizontalcount == 131){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 107;
                                    }else if(_this.next == 1){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }
                                        else{
                                        _this.xpos1 =259;
                                       
                                    }
                                  } 
                                
                                  else if(_this.horizontalcount == 155){
                                      if(_this.next == 0){
                                          _this.xpos1 = 467;
                                          _this.ypos1 = 107;
                                      }else if(_this.next == 1 || _this.next == 2){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  }
                                  else if(_this.horizontalcount == 179){
                                      if(_this.next == 0){
                                          _this.xpos1 = 467;
                                          _this.ypos1 = 107;
                                      }else if(_this.next == 1 || _this.next == 2 || _this.next == 3){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  } 
                                else if(_this.horizontalcount == 203){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 107;
                                    }else if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next ==4){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  }
                                  
                                else if(_this.horizontalcount == 227){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 107;
                                    }else if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next ==4 || _this.next == 5){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  }
                                  else if(_this.horizontalcount == 251){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 107;
                                    }else if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next ==4 || _this.next ==5 || _this.next == 6){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  } 
                                  else if(_this.horizontalcount == 275){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 107;
                                    }else if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next ==4 || _this.next ==5 || _this.next==6 || _this.next==7){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  } 
                                  else if(_this.horizontalcount == 299){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 107;
                                    }else if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next ==4 || _this.next ==5 || _this.next==6 || _this.next==7 || _this.next==8){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  } 
                                  //_this.hcount = _this.firstno-10;
                                  
                              }else{
                                  _this.xpos1 = 235;
                                  _this.ypos1 = 107;
                                  _this.hcount = _this.firstno;
                                  
                              }
                              _this.yellowgrid=this.add.sprite(_this.xpos1+(_this.colsh*23),_this.ypos1+(_this.rowsh*24),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              _this.colsh++; 
                          }else{
                               _this.next++;
                              if(_this.horizontalcount == 107){
                                  _this.xpos1 = 235;//234
                                      _this.ypos1 = 107;
                                  
                                  
                              }else if(_this.horizontalcount == 131){
                                  
                                  if(_this.next == 1){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if(_this.next > 1){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 155){
                                  
                                  if(_this.next == 1 || _this.next == 2){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 2){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 179){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 3){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 203){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next == 4){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 4){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 227){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next == 4 || _this.next == 5){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 5){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 251){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next == 4 || _this.next == 5 || _this.next == 6){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 6){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 275){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next == 4 || _this.next == 5 || _this.next == 6 || _this.next==7){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 7){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 299){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next == 4 || _this.next == 5 || _this.next == 6 || _this.next==7 || _this.next==8){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 8){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else{
                                  _this.xpos1 = 235;
                                  
                                  _this.ypos1 = 107;
                                  
                              }
                              _this.rowsh++;
                               if(_this.rowsh<(_this.secondno)){
                                   _this.yellowgrid=this.add.sprite(_this.xpos1,_this.ypos1+(_this.rowsh*24),'Level14_yellowgrid');
                                   _this.yellowgrid.scale.setTo(1.30,1.30);
                               }
                              
                              _this.colsh=0;
                              _this.counth1=0;
                              
                          }
                      }
                  }
        }
 
              }else{
                  target.x=75;
                  target.y=438;
                  _this.wmusic.play();
              }
            
        }//orange
          }
        
    }//else countgreen
},
    
   
    

};