Game.volume_MVG_3_4level1=function(){};
var bg1;
var starsGroup;
var dragBox;
var count;
var fillingJarGroup;
var crocsGroup;
var tickMark;
var objGroup;
var rightOrderArray = [];
var glowOrderArray = [];
var no1;
var count;
var count1;
var qArrays = [];
var graphics;
var tweenCount;

var selectedAns = "";
var rightAns = "";
var counterText;
var countIncrement = 0;
var questionNo;
var mainSprite;
var smallJar = 0;
var shakeObjectGroup;
var b1;
var b2;
var b3;
var b4;
var  equation;
var eqnum;
var wrong;
var timeforlng=0;

var enterTxt;

var noofAttempts;
var timer;
var AnsTimerCount;

var gameid;

Game.volume_MVG_3_4level1.prototype={

    init:function(param,score)
    {
        _this = this;

        //        _this.gameid = "4.3A";

        this.Stararr = param;
        this.score = parseInt(window.score);
        telInitializer2.gameIdInit2("MVG3.4");
    },

    create:function(game){
        _this.amplify = null;
        _this.Stararr = [];

        noofAttempts=0;
        AnsTimerCount=0;

        _this.sceneCount = 0;

        wrong = true;
        no1=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;

        countIncrement = 0;
        smallJar = 0;
        timeforlng=0;
        selectedAns = "";
        rightAns = "";

        // qArrays = [1,3,5,7,9,11];
        qArrays = [1,2,3,4,5,6,7,8];
        qArrays = this.shuffle(qArrays);
        count=0;
        count1=0;
        tweenCount = 0;
        noofAttempts=0;
        AnsTimerCount=0;
        shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(shake);

        bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg1');

        if(window.languageSelected == "English") 
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.3A/English/4.3A1.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.3A/Hindi/4.3A1.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.3A/Kannada/4.3A1.mp3";
        }
		else if(window.languageSelected == "Gujarati")
		{
			 _this.soundurl = window.baseUrl+"questionSounds/Gujarati/4.3A/4.3A1.mp3";
		}
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.3A/Odiya/4.3A1.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }

        commonNavBar.addNavBar(game,_this.soundurl,"measurement4");
        commonNavBar.addTimerToTheGame(game,0,0,0);
        commonNavBar.startTimer(game);
        commonNavBar.addScore(game,this.score);
        this.hintparams=['MVG3.4','level1',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);

        _this.generateStarsForTheScene(9);

        this.getQuestion();

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

    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {

            _this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');

            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=10;
                    _this.starsGroup.getChildAt(i).x+=10;
                }
            }
        } 
        _this.starsGroup.getChildAt(0).frame = 2;
    },

    updateTimer:function() {
        _this.counterForTimer++;
        //console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            if(_this.minutes<10){
                this.minutes =  this.minutes+1;
                _this.seconds = 00;
            }
            else{
                this.minutes =  this.minutes+1;

            }
        }
        else{
            if (_this.counterForTimer < 10)        
                this.seconds = '0' + this.counterForTimer;
            else
                this.seconds = this.counterForTimer;
        }
        this.timeDisplay.setText(_this.minutes+':' + this.seconds);

        //timer.setText(minutes + ':'+ seconds );
    },

    getQuestion:function(target)
    {   
        noofAttempts = 0;
        AnsTimerCount=0;
        _this.sceneCount++;

        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
            //            _this.updateTimer();
        }, _this);
        _this.timer1.start();

        timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();

        _this.questionid = 1;
        switch(qArrays[no1])      
        {
            case 1: this.gotoFirstQuestion();
                break;
            case 2: this.gotoSecondQuestion();
                break;
            case 3: this.gotoThirdQuestion();
                break;
            case 4: this.gotoFourthQuestion();
                break;
            case 5: this.gotoFifthQuestion();
                break;
            case 6: this.gotoSixthQuestion();
                break;
            case 7: this.gotoSeventhQuestion();
                break;
            case 8: this.gotoEighthQuestion();
                break;
            case 9: this.gotoNinthQuestion();
                break;
            case 10: this.gotoTenthQuestion();
                break;
            case 11: this.gotoEleventhQuestion();
                break;
            case 12: this.gotoTwevelvethQuestion();
                break;
        }
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },

//    addQuestion:function(no2)
//    {
//        this.time.events.add(2000, function(){
//
//            var tween = this.add.tween(flagGroup1);
//            tween.to({ x: -1000 }, 0,'Linear', true, 0);
//            tween.onComplete.add(this.changeQuestion, this);
//
//        }, this);
//    },

    gotoFirstQuestion:function(){

        questionNo = 1;

        eqnum = 0;
        _this.firstValue = 50;
        _this.secondValue = 20;
        objGroup = this.add.group();
        fillingJarGroup = this.add.group();
        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(300,415,'Level43A_50Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "50Q";
        if(no1==0)
        {
            this.getVoice();
//            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
        }
        else
        {
            b1.inputEnabled = true;
            b1.input.useHandCursor = true;
            b1.events.onInputDown.add(this.onTapfillTheContainer,this);
        }

        b2 = this.add.sprite(590,445,'Level43A_1000A');
        b2.anchor.setTo(0.5,1);
        b2.name = "1000A";

        b3 = this.add.sprite(230,440,'Level43A_incBox');
        b3.anchor.setTo(0.5,1);
        b3.name = "incBox";

        b4 = this.add.sprite(580,215,'Level43A_arrow');
        b4.anchor.setTo(0.5,1);
        b4.name = "arrow";

        counterText = this.add.text(-1.5,-50,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);

        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);

        if(wrong)
        {
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");

    },

    gotoSecondQuestion:function(){

        questionNo = 2;
        eqnum = 1;
        _this.firstValue = 50;
        _this.secondValue = " "+5;

        fillingJarGroup = this.add.group();
        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(300,415,'Level43A_50Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "50Q";
        if(no1==0)
        {
            this.getVoice();
//            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
        }
        else
        {
            b1.inputEnabled = true;
            b1.input.useHandCursor = true;
            b1.events.onInputDown.add(this.onTapfillTheContainer,this);
        }

        b2 = this.add.sprite(590,440,'Level43A_250A');
        b2.anchor.setTo(0.5,1);
        b2.name = "250A";

        b3 = this.add.sprite(230,440,'Level43A_incBox');
        b3.anchor.setTo(0.5,1);
        b3.name = "incBox";

        b4 = this.add.sprite(590,306,'Level43A_arrow');
        b4.anchor.setTo(0.5,1);
        b4.name = "arrow";

        counterText = this.add.text(-1.5,-50,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);

        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);

        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");

    },

    gotoThirdQuestion:function(){

        questionNo = 3;
        eqnum = 2; 
        _this.firstValue = 50;
        _this.secondValue = " "+4;		 

        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(300,415,'Level43A_50Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "50Q";
        if(no1==0)
        {
            this.getVoice();
//            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
        }
        else
        {
            b1.inputEnabled = true;
            b1.input.useHandCursor = true;
            b1.events.onInputDown.add(this.onTapfillTheContainer,this);
        }

        b2 = this.add.sprite(590,440,'Level43A_200A');
        b2.anchor.setTo(0.5,1);
        b2.name = "200A";

        b3 = this.add.sprite(230,440,'Level43A_incBox');
        b3.anchor.setTo(0.5,1);
        b3.name = "incBox";

        b4 = this.add.sprite(590,335,'Level43A_arrow');
        b4.anchor.setTo(0.5,1);
        b4.name = "arrow";

        counterText = this.add.text(-1.5,-50,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);

        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);

        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");

    },

    gotoFourthQuestion:function(){

        questionNo = 4;
        eqnum = 3;
        _this.firstValue = 50;
        _this.secondValue = 10;

        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(300,415,'Level43A_50Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "50Q";
        if(no1==0)
        {
            this.getVoice();
//            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
        }
        else
        {
            b1.inputEnabled = true;
            b1.input.useHandCursor = true;
            b1.events.onInputDown.add(this.onTapfillTheContainer,this);
        }

        b2 = this.add.sprite(590,440,'Level43A_500A');
        b2.anchor.setTo(0.5,1);
        b2.name = "500A";

        b3 = this.add.sprite(230,440,'Level43A_incBox');
        b3.anchor.setTo(0.5,1);
        b3.name = "incBox";

        b4 = this.add.sprite(585,259,'Level43A_arrow');
        b4.anchor.setTo(0.5,1);
        b4.name = "arrow";

        counterText = this.add.text(-1.5,-50,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);

        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);

        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");
    }, 

    gotoFifthQuestion:function(){

        questionNo = 5;
        eqnum = 4;
        _this.firstValue = 100;
        _this.secondValue = " "+2;

        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(300,415,'Level43A_100Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "100Q";
        if(no1==0)
        {
            this.getVoice();
//            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
        }
        else
        {
            b1.inputEnabled = true;
            b1.input.useHandCursor = true;
            b1.events.onInputDown.add(this.onTapfillTheContainer,this);
        }

        b2 = this.add.sprite(590,440,'Level43A_200A');
        b2.anchor.setTo(0.5,1);
        b2.name = "500A";

        b3 = this.add.sprite(230,440,'Level43A_incBox');
        b3.anchor.setTo(0.5,1);
        b3.name = "incBox";

        b4 = this.add.sprite(590,335,'Level43A_arrow');
        b4.anchor.setTo(0.5,1);
        b4.name = "arrow";

        counterText = this.add.text(-1.5,-50,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);

        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);

        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");

    }, 

    gotoSixthQuestion:function(){

        questionNo = 6;
        smallJar = 0
        eqnum = 5;
        _this.firstValue = 100;
        _this.secondValue = 10;

        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(300,415,'Level43A_100Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "100Q";
        if(no1==0)
        {
            this.getVoice();
//            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
        }
        else
        {
            b1.inputEnabled = true;
            b1.input.useHandCursor = true;
            b1.events.onInputDown.add(this.onTapfillTheContainer,this);
        }

        b2 = this.add.sprite(590,440,'Level43A_1000A');
        b2.anchor.setTo(0.5,1);
        b2.name = "1000A";

        b3 = this.add.sprite(230,440,'Level43A_incBox');
        b3.anchor.setTo(0.5,1);
        b3.name = "incBox";

        b4 = this.add.sprite(580,215,'Level43A_arrow');
        b4.anchor.setTo(0.5,1);
        b4.name = "arrow";

        counterText = this.add.text(-1.5,-50,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);

        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);

        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");

    },

    gotoSeventhQuestion:function(){

        questionNo = 7;
        smallJar = 0;
        eqnum = 6;
        _this.firstValue = 250;
        _this.secondValue = " "+2;

        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(260,415,'Level43A_250Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "250Q";
        if(no1==0)
        {
            this.getVoice();
//            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
        }
        else
        {
            b1.inputEnabled = true;
            b1.input.useHandCursor = true;
            b1.events.onInputDown.add(this.onTapfillTheContainer,this);
        }

        b2 = this.add.sprite(590,440,'Level43A_500A');
        b2.anchor.setTo(0.5,1);
        b2.name = "500A";

        b3 = this.add.sprite(160,430,'Level43A_incBox');
        b3.anchor.setTo(0.5,1);
        b3.name = "incBox";

        b4 = this.add.sprite(585,259,'Level43A_arrow');
        b4.anchor.setTo(0.5,1);
        b4.name = "arrow";

        counterText = this.add.text(-1.5,-50,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);

        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);

        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 160}, 0,'Linear', true, 0);
        }
        counterText.setText("0");

    },

    gotoEighthQuestion:function(){

        questionNo = 8;
        smallJar = 0;
        _this.firstValue = 250;
        _this.secondValue = " "+4;

        eqnum = 7;
        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(260,415,'Level43A_250Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "250Q";
        if(no1==0)
        {
            this.getVoice();
//            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
        }
        else
        {
            b1.inputEnabled = true;
            b1.input.useHandCursor = true;
            b1.events.onInputDown.add(this.onTapfillTheContainer,this);
        }

        b2 = this.add.sprite(590,440,'Level43A_1000A');
        b2.anchor.setTo(0.5,1);
        b2.name = "1000A";

        b3 = this.add.sprite(160,430,'Level43A_incBox');
        b3.anchor.setTo(0.5,1);
        b3.name = "incBox";

        b4 = this.add.sprite(580,212,'Level43A_arrow');
        b4.anchor.setTo(0.5,1);
        b4.name = "arrow";

        counterText = this.add.text(-1.5,-50,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);

        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);

        if(wrong){

            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 160}, 0,'Linear', true, 0);
        }
        counterText.setText("0");

    },

    gotoNinthQuestion:function(){

        questionNo = 9;
        smallJar = 0;
        eqnum = 8;
        _this.firstValue = 500;
        _this.secondValue = " "+2;

        shakeObjectGroup = this.add.group();
        b1 = this.add.sprite(260,415,'Level43A_500Q');
        b1.anchor.setTo(0.5,1);
        b1.name = "500Q";
        if(no1==0)
        {
            this.getVoice();
//            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
                b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
//            },this); 
        }
        else
        {
            b1.inputEnabled = true;
            b1.input.useHandCursor = true;
            b1.events.onInputDown.add(this.onTapfillTheContainer,this);
        }

        b2 = this.add.sprite(590,440,'Level43A_1000A');
        b2.anchor.setTo(0.5,1);
        b2.name = "1000A";

        b3 = this.add.sprite(150,430,'Level43A_incBox');
        b3.anchor.setTo(0.5,1);
        b3.name = "incBox";

        b4 = this.add.sprite(580,212,'Level43A_arrow');
        b4.anchor.setTo(0.5,1);
        b4.name = "arrow";

        counterText = this.add.text(-1.5,-50,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
        //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);

        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);
        console.log("wrong"+!wrong);

        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 150}, 0,'Linear', true, 0);
        }
        counterText.setText("0");
    },

    onTapfillTheContainer:function(target)
    {

        countIncrement++;
        if(questionNo == 1)
        {
            commonNavBar.playWaterFillingSound();

            b2.frame=countIncrement;
            counterText.setText(countIncrement);
            if(countIncrement == 20)
            {
                b1.inputEnabled = false;

                var Maintween = this.add.tween(b1);
                Maintween.to({ x: 200}, 0,'Linear', true, 0);

                var Maintween1 = this.add.tween(b2);
                Maintween1.to({ x: 350}, 0,'Linear', true, 0);

                var Maintween3 = this.add.tween(b3);
                Maintween3.to({ x: 135}, 0,'Linear', true, 0);

                var Maintween4 = this.add.tween(b4);
                Maintween4.to({ x: 345}, 0,'Linear', true, 0);

                Maintween4.onComplete.add(this.displayEquation,this);
                rightAns  = 1000;
            }
        }
        if(questionNo == 2)
        {
            commonNavBar.playWaterFillingSound();

            b2.frame=countIncrement;
            counterText.setText(countIncrement);
            if(countIncrement == 5)
            {
                b1.inputEnabled = false;

                var Maintween = this.add.tween(b1);
                Maintween.to({ x: 200}, 0,'Linear', true, 0);

                var Maintween1 = this.add.tween(b2);
                Maintween1.to({ x: 350}, 0,'Linear', true, 0);

                var Maintween3 = this.add.tween(b3);
                Maintween3.to({ x: 130}, 0,'Linear', true, 0);

                var Maintween4 = this.add.tween(b4);
                Maintween4.to({ x: 350}, 0,'Linear', true, 0);

                Maintween4.onComplete.add(this.displayEquation,this);
                rightAns  = 250;
            }
        }
        if(questionNo == 3)
        {
            commonNavBar.playWaterFillingSound();

            b2.frame=countIncrement;
            counterText.setText(countIncrement);
            if(countIncrement == 4)
            {
                b1.inputEnabled = false;

                var Maintween = this.add.tween(b1);
                Maintween.to({ x: 200}, 0,'Linear', true, 0);

                var Maintween1 = this.add.tween(b2);
                Maintween1.to({ x: 350}, 0,'Linear', true, 0);

                var Maintween3 = this.add.tween(b3);
                Maintween3.to({ x: 130}, 0,'Linear', true, 0);

                var Maintween4 = this.add.tween(b4);
                Maintween4.to({ x: 350}, 0,'Linear', true, 0);

                Maintween4.onComplete.add(this.displayEquation,this);
                rightAns  = 200;
            }
        }
        if(questionNo == 4)
        {
            commonNavBar.playWaterFillingSound();

            b2.frame=countIncrement;
            counterText.setText(countIncrement);
            if(countIncrement == 10)
            {
                b1.inputEnabled = false;

                var Maintween = this.add.tween(b1);
                Maintween.to({ x: 200}, 0,'Linear', true, 0);

                var Maintween1 = this.add.tween(b2);
                Maintween1.to({ x: 350}, 0,'Linear', true, 0);

                var Maintween3 = this.add.tween(b3);
                Maintween3.to({ x: 130}, 0,'Linear', true, 0);

                var Maintween4 = this.add.tween(b4);
                Maintween4.to({ x: 350}, 0,'Linear', true, 0);

                Maintween4.onComplete.add(this.displayEquation,this);
                rightAns  = 500;
            }
        }
        if(questionNo == 5)
        {
            commonNavBar.playWaterFillingSound();

            if(countIncrement == 1)
                b2.frame=countIncrement+1;
            if(countIncrement ==2)
                b2.frame=countIncrement+2;
            counterText.setText(countIncrement);

            if(countIncrement == 2)
            {
                b1.inputEnabled = false;

                var Maintween = this.add.tween(b1);
                Maintween.to({ x: 200}, 0,'Linear', true, 0);

                var Maintween1 = this.add.tween(b2);
                Maintween1.to({ x: 350}, 0,'Linear', true, 0);

                var Maintween3 = this.add.tween(b3);
                Maintween3.to({ x: 130}, 0,'Linear', true, 0);

                var Maintween4 = this.add.tween(b4);
                Maintween4.to({ x: 350}, 0,'Linear', true, 0);

                Maintween4.onComplete.add(this.displayEquation,this);
                rightAns  = 200;
            }
        } 
        if(questionNo == 6)
        {
            commonNavBar.playWaterFillingSound();

            smallJar +=2;

            b2.frame=smallJar;
            counterText.setText(countIncrement);

            if(countIncrement == 10)
            {
                b1.inputEnabled = false;

                var Maintween = this.add.tween(b1);
                Maintween.to({ x: 200}, 0,'Linear', true, 0);

                var Maintween1 = this.add.tween(b2);
                Maintween1.to({ x: 350}, 0,'Linear', true, 0);

                var Maintween3 = this.add.tween(b3);
                Maintween3.to({ x: 130}, 0,'Linear', true, 0);

                var Maintween4 = this.add.tween(b4);
                Maintween4.to({ x: 350}, 0,'Linear', true, 0);

                Maintween4.onComplete.add(this.displayEquation,this);
                rightAns  = 1000;
            }
        }
        if(questionNo == 7)
        {
            commonNavBar.playWaterFillingSound();

            if(countIncrement==1)
                b2.frame=countIncrement+4;
            if(countIncrement ==2)
                b2.frame=countIncrement+8;

            counterText.setText(countIncrement);

            if(countIncrement == 2)
            {
                b1.inputEnabled = false;

                var Maintween = this.add.tween(b1);
                Maintween.to({ x: 200}, 0,'Linear', true, 0);

                var Maintween1 = this.add.tween(b2);
                Maintween1.to({ x: 350}, 0,'Linear', true, 0);

                var Maintween3 = this.add.tween(b3);
                Maintween3.to({ x: 110}, 0,'Linear', true, 0);

                var Maintween4 = this.add.tween(b4);
                Maintween4.to({ x: 350}, 0,'Linear', true, 0);

                Maintween4.onComplete.add(this.displayEquation,this);
                rightAns  = 500;
            }
        }
        if(questionNo == 8)
        {
            commonNavBar.playWaterFillingSound();

            if(countIncrement==1)
                b2.frame=countIncrement+4;
            if(countIncrement ==2)
                b2.frame=countIncrement+8;
            if(countIncrement==3)
                b2.frame=countIncrement+12;
            if(countIncrement ==4)
                b2.frame=countIncrement+16;

            counterText.setText(countIncrement);

            if(countIncrement == 4)
            {
                b1.inputEnabled = false;

                var Maintween = this.add.tween(b1);
                Maintween.to({ x: 200}, 0,'Linear', true, 0);

                var Maintween1 = this.add.tween(b2);
                Maintween1.to({ x: 350}, 0,'Linear', true, 0);

                var Maintween3 = this.add.tween(b3);
                Maintween3.to({ x: 110}, 0,'Linear', true, 0);

                var Maintween4 = this.add.tween(b4);
                Maintween4.to({ x: 350}, 0,'Linear', true, 0);

                Maintween4.onComplete.add(this.displayEquation,this);
                rightAns  = 1000;
            }
        }

        if(questionNo == 9)
        {
            commonNavBar.playWaterFillingSound();

            if(countIncrement==1)
                b2.frame=countIncrement+9;
            if(countIncrement ==2)
                b2.frame=countIncrement+18;

            counterText.setText(countIncrement);

            if(countIncrement == 2)
            {
                b1.inputEnabled = false;

                var Maintween = this.add.tween(b1);
                Maintween.to({ x: 190}, 0,'Linear', true, 0);

                var Maintween1 = this.add.tween(b2);
                Maintween1.to({ x: 355}, 0,'Linear', true, 0);

                var Maintween3 = this.add.tween(b3);
                Maintween3.to({ x: 85}, 0,'Linear', true, 0);

                var Maintween4 = this.add.tween(b4);
                Maintween4.to({ x: 350}, 0,'Linear', true, 0);

                Maintween4.onComplete.add(this.displayEquation,this);
                rightAns  = 1000;
            }
        }
    },
    
    displayEquation:function()
    {

        this.addNumberPad();
        
        if(qArrays[no1] ==5 || qArrays[no1] == 6 ||qArrays[no1]==7 || qArrays[no1]==8 || qArrays[no1]==9){
            if(window.languageSelected=="English"){

                kgTxt0 = this.add.text(585,300, _this.firstValue+" ml x "+_this.secondValue+" = ");
                kgTxt = this.add.text(560,300);
                kgTxt1 = this.add.text(800,300, "ml");
                //kgTxt.font = 'myfont';
                kgTxt0.font = 'myfont';
                kgTxt1.font = 'myfont';
                //kgTxt.fontWeight = 'normal';
                kgTxt1.fontWeight = 'normal'
                //kgTxt.fontSize = 25;
                kgTxt0.fontSize = 40;
                kgTxt1.fontSize = 45;
            }
            else if(window.languageSelected=="Hindi"){
                kgTxt0 = this.add.text(575,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
                kgTxt = this.add.text(557,305, "मि.ली ");
                kgTxt1 = this.add.text(810,305, "मि.ली ");
                kgTxt0.font = 'myfont';
                kgTxt.font = 'Comic Sans MS';
                kgTxt1.font = 'Comic Sans MS';
                kgTxt0.fontSize = 40;
                kgTxt.fontSize = 18;
                kgTxt1.fontSize = 18;
                kgTxt.anchor.setTo(0.5);
                kgTxt.align = 'center';
                kgTxt.fill = '#ffffff';
            }
            else if(window.languageSelected=="Kannada"){
                kgTxt0 = this.add.text(580,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
                kgTxt = this.add.text(561,305, " ಮಿ.ಲೀ ");
                kgTxt1 = this.add.text(810,305, " ಮಿ.ಲೀ");
                kgTxt0.font = 'myfont';
                kgTxt.font = 'Comic Sans MS';
                kgTxt1.font = 'Comic Sans MS';
                kgTxt0.fontSize = 38;
                kgTxt.fontSize = 16;
                kgTxt1.fontSize = 16;
                kgTxt.anchor.setTo(0.5);
                kgTxt.align = 'center';
                kgTxt.fill = '#ffffff';
            }
			else if(window.languageSelected=="Gujarati"){
			  kgTxt0 = this.add.text(585,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(559,305, "એમ");
				kgTxt1 = this.add.text(810,305, "એમ");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 17;
				kgTxt1.fontSize = 17;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
            else {
                kgTxt0 = this.add.text(575,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
                kgTxt = this.add.text(557,305, "ମି.ଲି  ");
                kgTxt1 = this.add.text(810,305, "ମି.ଲି  ");
                kgTxt0.font = 'myfont';
                kgTxt.font = 'Comic Sans MS';
                kgTxt1.font = 'Comic Sans MS';
                kgTxt0.fontSize = 40;
                kgTxt.fontSize = 18;
                kgTxt1.fontSize = 18;
                kgTxt.anchor.setTo(0.5);
                kgTxt.align = 'center';
                kgTxt.fill = '#ffffff';
            }
        }
        else
        {
            if(window.languageSelected=="English"){

                kgTxt0 = this.add.text(588,300, _this.firstValue+" ml x "+_this.secondValue+" = ");
                kgTxt = this.add.text(560,300);
                kgTxt1 = this.add.text(800,300, "ml");
                //kgTxt.font = 'myfont';
                kgTxt0.font = 'myfont';
                kgTxt1.font = 'myfont';
                //kgTxt.fontWeight = 'normal';
                kgTxt1.fontWeight = 'normal'
                //kgTxt.fontSize = 25;
                kgTxt0.fontSize = 40;
                kgTxt1.fontSize = 40;
            }
            else if(window.languageSelected=="Hindi"){
                kgTxt0 = this.add.text(585,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
                kgTxt = this.add.text(559,305, "मि.ली ");
                kgTxt1 = this.add.text(810,305, "मि.ली ");
                kgTxt0.font = 'myfont';
                kgTxt.font = 'Comic Sans MS';
                kgTxt1.font = 'Comic Sans MS';
                kgTxt0.fontSize = 38;
                kgTxt.fontSize = 17;
                kgTxt1.fontSize = 17;
                kgTxt.anchor.setTo(0.5);
                kgTxt.align = 'center';
                kgTxt.fill = '#ffffff';
            }
            else if(window.languageSelected=="Kannada"){
                kgTxt0 = this.add.text(579,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
                kgTxt = this.add.text(552,305, " ಮಿ.ಲೀ ");
                kgTxt1 = this.add.text(810,305, " ಮಿ.ಲೀ");
                kgTxt0.font = 'myfont';
                kgTxt.font = 'Comic Sans MS';
                kgTxt1.font = 'Comic Sans MS';
                kgTxt0.fontSize = 38;
                kgTxt.fontSize = 16;
                kgTxt1.fontSize = 16;
                kgTxt.anchor.setTo(0.5);
                kgTxt.align = 'center';
                kgTxt.fill = '#ffffff';
            }
			else if(window.languageSelected=="Gujarati"){
			   kgTxt0 = this.add.text(585,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(559,305, "એમ");
				kgTxt1 = this.add.text(810,305, "એમ");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 17;
				kgTxt1.fontSize = 17;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
            else {

                kgTxt0 = this.add.text(585,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
                kgTxt = this.add.text(559,305, "ମି.ଲି ");
                kgTxt1 = this.add.text(810,305, "ମି.ଲି ");
                kgTxt0.font = 'myfont';
                kgTxt.font = 'Comic Sans MS';
                kgTxt1.font = 'Comic Sans MS';
                kgTxt0.fontSize = 38;
                kgTxt.fontSize = 17;
                kgTxt1.fontSize = 17;
                kgTxt.anchor.setTo(0.5);
                kgTxt.align = 'center';
                kgTxt.fill = '#ffffff';
            }
        }

        kgTxt0.anchor.setTo(0.5);
        //kgTxt.anchor.setTo(0.5);
        kgTxt1.anchor.setTo(0.5);
        kgTxt0.align = 'center';
        //kgTxt.align = 'center';
        kgTxt1.align = 'center';

        // kgTxt.font = 'Comic Sans MS';
        // kgTxt.font = 'myfont';

        kgTxt0.fontWeight = 'normal'
        //text.fontWeight = 'bold';
        kgTxt0.fill = '#ffffff';
        kgTxt1.fill = '#ffffff';

        kgTxt0.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
        kgTxt1.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);

        shakeObjectGroup.add(kgTxt0);
        shakeObjectGroup.add(kgTxt);
        shakeObjectGroup.add(kgTxt1);

    },

    addNumberPad:function(){

        numGroup = this.add.group();
        objGroup = this.add.group();
        var x = 80;
        var bottomBar=numGroup.create(0,470,'bottomBar');
        bottomBar.name="bottomBar";
        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,505,'Level43A_numbg');  
            numbg.anchor.setTo(0.5);
            numbg.scale.setTo(0.6,0.6);
            //numbg.name = i;
            numbg.frame=i;

            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);

            x+=70;
        }

        var txtbox = this.add.sprite(735,300,'Level43A_AnswerBox');
        txtbox.anchor.setTo(0.5);
        txtbox.name = "AnswerBox";
        objGroup.add(txtbox);
        var wrongbtn = numGroup.create(x+10,505,'eraser');
        wrongbtn.anchor.setTo(0.5);
        // wrongbtn.scale.setTo(0.5,0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;

        var rightbtn = numGroup.create(x+75,505,'tick');
        rightbtn.anchor.setTo(0.5);
        // rightbtn.scale.setTo(0.5,0.5);
        rightbtn.name = "rightbtn";
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;

        enterTxt = this.add.text(-2,1, selectedAns);
        //titletext.scale.setTo(1.5);
        enterTxt.anchor.setTo(0.5);
        enterTxt.scale.setTo(1.1,1.1);
        enterTxt.align = 'center';

        enterTxt.font = 'myfont';
        enterTxt.fontSize = 30;
        enterTxt.fontWeight = 'normal';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        txtbox.name = "txtbox";
        //numGroup.add(txtbox);

        numGroup.y = 50;
        var tween = this.add.tween(numGroup);
        tween.to({ y: 0 }, 0, 'Linear', true, 0); 

        wrongbtn.events.onInputDown.add(function(target){
            commonNavBar.playClickSound();

            //var currentTime = window.timeSaveFunc();

            wrongbtn.frame = 1;
            enterTxt.setText("");
            selectedAns="";

            this.time.events.add(1000, function(){
                wrongbtn.frame = 0;
            },this);
        },this);

        rightbtn.events.onInputDown.add(function(target){
            noofAttempts++;
            target.events.onInputDown.removeAll();
            commonNavBar.playClickSound();
            rightbtn.frame = 1;
            this.time.events.add(1000, function(){rightbtn.frame = 0},this);
            console.log(selectedAns);
            console.log(rightAns);
            if(selectedAns==rightAns||selectedAns=="0"+rightAns||selectedAns=="00"+rightAns)  
            {
                telInitializer2.gameCorrectAns();
                target.events.onInputDown.removeAll();
                if(_this.timer1)
                {
                    _this.timer1.stop();
                }
                if(timer!=null)
                {
                    timer.stop();
                    timer = null;
                }

                /*var currentTime = window.timeSaveFunc();
                var saveAsment = 
                    { 
                        id_game_play: _this.savedVar,
                        id_question: _this.questionid,  
                        pass: "Yes",
                        time2answer: AnsTimerCount,
                        attempts: noofAttempts,
                        date_time_submission: currentTime, 
                        access_token: window.acctkn 
                    }*/

                commonNavBar.playCelebrationSound();

                _this.Stararr.push(3);
                var starAnim = _this.starsGroup.getChildAt(count1);
                starAnim.smoothed = false;
                var anim4 = starAnim.animations.add('star');
                anim4.play();

                txtbox.frame = 1;

                var tween1 = this.add.tween(txtbox.scale);
                tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                tween1.onComplete.add(function(){

                    var tween2 = this.add.tween(txtbox.scale);
                    tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);

                    tween2.onComplete.add(function(){
                        var tween1 = this.add.tween(txtbox.scale);
                        tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = this.add.tween(txtbox.scale);
                            tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                        },this);
                    },this);
                },this);

                var tween1 = this.add.tween(numGroup);
                tween1.to({ y: 100 }, 0, 'Linear', true, 0);

                this.time.events.add(2000, function(){
                    this.removeEverthing();
                },this);
            }
            else
            {      
                telInitializer2.gameWrongAns();         
                // console.log("wrong");

                selectedAns = "";
                enterTxt.setText("");
                shake.shake(10, txtbox);
                commonNavBar.playWrongCelebrationSound();
                _this.Stararr.push(1);
                _this.starsGroup.getChildAt(count1).frame = 1;

                txtbox.frame = 1;

                var tween1 = this.add.tween(txtbox.scale);
                tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                
                tween1.onComplete.add(function(){
                    var tween2 = this.add.tween(txtbox.scale);
                    tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);

                    tween2.onComplete.add(function(){
                        var tween1 = this.add.tween(txtbox.scale);
                        tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = this.add.tween(txtbox.scale);
                            tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                        },this);
                    },this);
                },this);

                var tween1 = this.add.tween(numGroup);
                tween1.to({ y: 100 }, 0, 'Linear', true, 0);

                this.time.events.add(2000, function(){
                    this.removeEverthing();
                },this);
            }
            
        },this);
    },

    numClicked:function(target){

        commonNavBar.playClickSound();

        if(selectedAns.length < 4)
        {
            selectedAns += target.frame;
            objGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }

    },

    removeEverthing:function() 
    {
        no1++;
        if(no1 < 3)
        {
            //no1++;
            wrong = true;
            var MaintweenDestroy = this.add.tween(shakeObjectGroup);
            MaintweenDestroy.to({ x: -1000}, 0,'Linear', true, 0);

            var MaintweenDestroy1 = this.add.tween(b3);
            MaintweenDestroy1.to({ x: -1000}, 0,'Linear', true, 0);

            var MaintweenDestroy2 = this.add.tween(numGroup);
            MaintweenDestroy2.to({ x: -1000}, 0,'Linear', true, 0); 

            var MaintweenDestroy3 = this.add.tween(objGroup);
            MaintweenDestroy3.to({ x: -1000}, 0,'Linear', true, 0);

            MaintweenDestroy.onComplete.add(function(){
                b3.destroy();
                //equation.destroy();
                objGroup.destroy();
                numGroup.destroy();
                count =0;
                shakeObjectGroup.destroy();
                counterText.setText("");
                selectedAns = '';
                countIncrement = 0;

                this.getQuestion();

                _this.starsGroup.getChildAt(count1+1).frame = 2; 
                count1++;
                
            },this);

            tweenCount=0;

        }
        else
        {
            // //console.log("gameover");
            selectedAns = '';
            countIncrement = 0;
            this.stopVoice();
            var timerStopVar = commonNavBar.stopTimer();
            commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.navBar = null;
            commonNavBar.backbtn = null;
            commonNavBar.mcIcon = null;
            commonNavBar.speakerbtn = null;

            _this.state.start('volume_MVG_3_4level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
        }
    },

    backToOriginalPosition:function(){

        selectedAns = 0;
        countIncrement = 0;

    },

    update:function(){

    },

    getVoice:function(question)
    {   
       /* _this.stopVoice();  

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/English/4.3A1.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Hindi/4.3B1.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Kannada/4.3A1.mp3");
        }
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.3A/Odiya/4.3A1.mp3");
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();*/


        commonNavBar.getVoice(_this.soundurl);

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

    stopVoice:function()
    {     

        if(_this.playQuestionSound)
        {
            if(_this.playQuestionSound.contains(_this.src))
            {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if(!_this.playQuestionSound.paused)
            {
                console.log("stop"); 
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
        }

        if(_this.celebrationSound)
        {
            if(_this.celebrationSound.isPlaying)
            {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }
        if(_this.amplify!=null)
        {
            _this.amplify.context.close();
            _this.amplify = null;
        }

        if(this.waterFillingSound)
        {
            this.waterFillingSound.pause();
            this.waterFillingSound = null;
        }
    },

    shutdown:function()
    {
        _this.stopVoice();
    }

};