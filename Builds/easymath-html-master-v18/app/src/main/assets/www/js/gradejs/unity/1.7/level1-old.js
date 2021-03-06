Game.unity1_7level1=function(){};
var no11;
var randomno;
var count;
var speaker;
var fishGroup;
var xArray,yArray;
var s,st;
var correctflg,wrongflg;
var arrow,arrow2;
var arrowlast,arrowlast2;
var countcorrect;
var maskgraphics;
var randomx;
var randomy;
var overlappedflag,overlappedflag2;
var minutes,seconds,counterForTimer;
var timeDisplay;
var tick;
var scoreflag;
var correctflg;
var wrongflg;
var fishbasket;
var maskbg;
var bluebg;
var background;
var starsGroup;
Game.unity1_7level1.prototype={
    
    init:function(game)
    {
        _this = this;
        this.clickSound=this.add.audio('ClickSound');
        this.wrongSound = this.add.audio('waudio');
        this.celebrationSound = this.add.audio('celebr');
        this.snapSound = this.add.audio('snapSound');
        this.gameid = "Game 1.7";
        this.questionid=null;
        this.noofAttempts=0;
        this.sceneCount=0;
        this.AnsTimerCount=0;
        
        
        this.currentTime = window.timeSaveFunc();
        
        this.saveGameplay = 
        { 
            id_game:this.gameid, 
            access_token:window.acctkn, 
            start_time:this.currentTime
        } 
        this.savedVar = absdsjsapi.saveGameplay(this.saveGameplay);
        

    },
    
    create:function(game){
    no11 = 0;
    count=0;
    minutes=0;
    seconds=0;
    counterForTimer=0;
    countcorrect=0;
    randomno=0;
    correctflg=0;
    wrongflg=0;
    overlappedflag=false;
    overlappedflag2=false;
    s=new Array();
    st=new Array();
    randomx=new Array();
    randomy=new Array();
    fishGroup=this.add.group();  
    fishbasket=[1,2,3,5,6,7,8,9]; 
    fishbasket=this.shuffle(fishbasket);
    yArray = [90,120,150,180,210,240,270,300,330,360,390];
    xArray = [50,110,170,230,290,350,410,470,530];
    
    this.physics.startSystem(Phaser.Physics.ARCADE);
    background = this.add.tileSprite(0,0,this.world.width,this.world.height, 'Game17_bg');

    shake = new Phaser.Plugin.Shake(game);
    game.plugins.add(shake);
        
    var TopBar=this.add.sprite(0,0,'Game17_TopBar');
    TopBar.name="Game17_TopBar";  
    TopBar.scale.setTo(1,1.1);

    this.backbtn = this.add.sprite(10,7,'Game17_backbtn');
    this.backbtn.name="Game17_backbtn"; 
    this.backbtn.inputEnabled = true;
    this.backbtn.events.onInputDown.add(function(target){
        console.log("back");
        target.events.onInputDown.removeAll();
        //this.stopVoice();
        this.clickSound.play();
        _this.state.start('grade1levelSelectionScreen',true,false); 
    },this);
    //  var lamp=this.add.sprite(910,7,'lamp');

    speaker = this.add.sprite(620,9,'Game17_speaker');
    speaker.name="Game17_speaker";
    
      // _this.speakerbtn.inputEnabled = true;
    speaker.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

    this.generateStarsForTheScene(6);
        
    //  var points=this.add.sprite(720,7,'points');
    // var diamondBox=this.add.sprite(820,7,'diamondBox');
    var dottedBox=this.add.sprite(70,7,'Game17_dottedBox');
    dottedBox.name="Game17_dottedBox";
    var numTxt1 = this.add.text(45,17, 'PRACTICE');
    numTxt1.anchor.setTo(0.5);
    numTxt1.align = 'center';
    numTxt1.font = 'Alte Haas Grotesk';
    numTxt1.fontSize = 12;
    numTxt1.fill = '#ffffff';
    numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
    dottedBox.addChild(numTxt1);
        
    var numTxt2 = this.add.text(235,24, 'Tracing Numbers');
    numTxt2.anchor.setTo(0.5);
    numTxt2.align = 'center';
    numTxt2.font = 'Alte Haas Grotesk';
    numTxt2.fontSize = 18;
    numTxt2.fill = '#ffffff';
    numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        
    var timebg=this.add.sprite(310,9,'Game17_timer');
    timebg.name="Game17_timer";
    timebg.scale.setTo(1.2,1);
        
    timeDisplay = this.add.text(340,25,minutes + ' : '+ seconds);
    
    timeDisplay.anchor.setTo(0.5);
    timeDisplay.align = 'center';
    timeDisplay.font = 'Oh Whale';
    timeDisplay.fontSize = 20;
    //text.fontWeight = 'bold';
    timeDisplay.fill = '#ADFF2F';
    this.getQuestion();  
},
    
     shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        { 
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
    
    stopVoice:function(){
        if(this.playQuestionSound)
        {
            if(this.playQuestionSound.contains(this.src))
            {
                this.playQuestionSound.removeChild(this.src);
                this.src = null;
            }
            if(!this.playQuestionSound.paused)
            {
                this.playQuestionSound.pause();
                this.playQuestionSound.currentTime = 0.0;
            }
            this.playQuestionSound = null;
            this.src = null;
        }
            
        if(this.celebrationSound)
        {
            if(this.celebrationSound.isPlaying)
            {
                this.celebrationSound.stop();
                this.celebrationSound = null;
            }
        }
    },
    
    getVoice:function(){
        this.stopVoice();   
        this.playQuestionSound = document.createElement('audio');
        this.src = document.createElement('source');

        if(window.languageSelected == "English")
        {
            this.src.setAttribute("src", "questionSounds/unity/1.7/English/Game 1.7.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            this.src.setAttribute("src", "questionSounds/unity/1.7/Hindi/Game 1.7.mp3");
        }
        else
        {
            this.src.setAttribute("src", "questionSounds/unity/1.7/Kannada/Game 1.7.mp3");
        }
        
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },

    getQuestion:function(target)
    {
        this.getVoice();
        this.sceneCount++;
        timer1 = this.time.create(false);
        timer1.loop(1000, function(){
                  this.updateTimer();
        }, this);
        timer1.start();
        //console.log("get"+no11);
        this.questionid = "Game1.7#SCR-"+this.sceneCount;
        switch(fishbasket[0])
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5: 
            case 6: 
            case 7:
            case 8:
            case 9: this.gotoFirstQuestion();
                    break;
        }
        
    },
    
    updateTimer:function() {
        
     counterForTimer++;
     if(counterForTimer>59)
         {
          counterForTimer = 0;
           if(minutes<10){
                 minutes =  minutes+1;
                 seconds = 00;
                        }
             else{
                 minutes =  minutes+1;
                   
                 }
         }
                else{
                        if (counterForTimer < 10)        
                                seconds = '0' + counterForTimer;
                        else
                                seconds = counterForTimer;
                    }
     timeDisplay.setText(minutes+':' + seconds);
},
    
    generateStarsForTheScene:function(count)
    {
        starsGroup = this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            starsGroup.create(this.world.centerX, 13, 'Game17_starAnim');
            for(var j =0;j<i;j++)
            {
                if(starsGroup.getChildAt(j))
                {
                    starsGroup.getChildAt(j).x-=15;
                    starsGroup.getChildAt(i).x+=15;
                }
            }
        }                       
    },
    
     update :function(){

         for (var i = 0; i < fishGroup.length; i++)
         {
            
            if(fishGroup.getChildAt(i).x > 480) 
            {
               fishGroup.getChildAt(i).scale.setTo(-0.6,0.6); 
                fishGroup.getChildAt(i).body.velocity.x = -100;
            }
            if (fishGroup.getChildAt(i).x <=100) 
            {
                fishGroup.getChildAt(i).scale.setTo(0.6,0.6); 
            }
         }
    },
 
        
    
    gotoFirstQuestion:function(){
        speaker.inputEnabled=true;
        speaker.input.useHandCursor = true;
        speaker.events.onInputDown.add(function(){
            this.clickSound.play();
            this.getVoice();
        },this);
        no11++;
        fishGroup=this.add.group();
        fishGroup.enableBody = true;
        if(wrongflg==1){  
          
        }
        else
        {
            randomno=fishbasket[0];
           // randomno = 9;
        }
    
        tick = this.add.sprite(68,493,'Game17_tick','Symbol 2 instance 10000');
        tick.name="Game17_tick";
        tick.anchor.setTo(0.5);
        tick.scale.setTo(0.6,0.6);
        tick.inputEnabled=false;
        tick.events.onInputDown.removeAll();
        tick.events.onInputDown.add(function(){
            this.noofAttempts++;
            tick.inputEnabled=false;
            tick.frameName='Symbol 2 instance 10001';
            this.clickSound.play();
            if(randomno==4 && correctflg==2)
            {
                this.correctAns();
            }
            else if(randomno!=4 && correctflg==1)
            {
                this.correctAns();
            }  
            else{
                wrongflg=1;
                this.wrongAns();
            }
                
        },this);
  
        bluebg = this.add.sprite(720,292,'Game17_bluebg');
        bluebg.name="Game17_bluebg";
        bluebg.anchor.setTo(0.5);
        bluebg.scale.setTo(1.3,1.3);
    
        for (var i = 0; i < randomno; i++)
         {
            randomx.push(xArray[Math.floor(Math.random()*xArray.length)]);
            randomy.push(yArray[Math.floor(Math.random()*yArray.length)]);
            s = fishGroup.create(randomx[i],randomy[i],'Game17_fish');
            s.name = 'fish' + i;
            //s.tint = 0xff00ff;
            s.body.collideWorldBounds = true;
            s.scale.setTo(0.6,0.6);
            s.anchor.setTo(0.5,0.5);
            s.body.bounce.setTo(0.8, 0.8);
            s.animations.add('fish');
            s.animations.play('fish', 10, true);
            s.body.velocity.setTo(10 + 1 * 100,00);   
             
             var index1 = xArray.indexOf(randomx[i]);   
            if (index1 > -1) {
                xArray.splice(index1, 1);
            }
            var index2 = yArray.indexOf(randomy[i]);   
            if (index2 > -1) {
                yArray.splice(index2, 1);
            } 
             
         }
        
        maskbg = this.add.sprite(720,292,'Game17_maskbg');
        maskbg.name="Game17_maskbg";
        maskbg.anchor.setTo(0.5);
        maskbg.scale.setTo(1.3,1.30);

        var numbgrps=new Array(); 
        numbgrps.push(this.add.sprite(720,292,'Game17_one'));numbgrps[0].value=1;numbgrps[0].alpha=0;
        numbgrps[0].anchor.setTo(0.5);
        numbgrps[0].name="Game17_one";
        numbgrps[0].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_two'));numbgrps[1].value=2;numbgrps[1].alpha=0;
        numbgrps[1].anchor.setTo(0.5);
        numbgrps[1].name="Game17_two";
        numbgrps[1].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_three'));numbgrps[2].value=3;numbgrps[2].alpha=0;
        numbgrps[2].anchor.setTo(0.5);
        numbgrps[2].name="Game17_three";
        numbgrps[2].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_four'));numbgrps[3].value=4;numbgrps[3].alpha=0;
        numbgrps[3].anchor.setTo(0.5);
        numbgrps[3].name="Game17_four";
        numbgrps[3].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_five'));numbgrps[4].value=5;numbgrps[4].alpha=0;
        numbgrps[4].anchor.setTo(0.5);
        numbgrps[4].name="Game17_five";
        numbgrps[4].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_six'));numbgrps[5].value=6;numbgrps[5].alpha=0;
        numbgrps[5].anchor.setTo(0.5);
        numbgrps[5].name="Game17_six";
        numbgrps[5].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_seven'));numbgrps[6].value=7;numbgrps[6].alpha=0;
        numbgrps[6].anchor.setTo(0.5);
        numbgrps[6].name="Game17_seven";
        numbgrps[6].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_eight'));numbgrps[7].value=8;numbgrps[7].alpha=0;
        numbgrps[7].anchor.setTo(0.5);
        numbgrps[7].name="Game17_eight";
        numbgrps[7].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_nine'));numbgrps[8].value=9;numbgrps[8].alpha=0;
        numbgrps[8].anchor.setTo(0.5);
        numbgrps[8].name="Game17_nine";
        numbgrps[8].scale.setTo(0.75,0.75);
        for(var no=0;no<numbgrps.length;no++)
        {
            if(randomno==numbgrps[no].value)
            {
                numbgrps[no].alpha=1;
            }
        }
    
        if(randomno==1)
        {
            arrow=this.add.sprite(715,130,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(717,400,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.input.enableDrag(true);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){  
                this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                }    
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                this.snapSound.play();
                tick.inputEnabled=true;
                /*if(arrow.x < 650 || arrow.x > 760 || arrow.y > 454 || arrow.y < 110 )
                {
                    console.log("condition");
                    arrow.x=715;
                    arrow.y=130;
                    
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }*/
                if(this.checkOverlap(arrow,arrowlast) || overlappedflag==true)
                {
                    
                  //  console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                   // console.log("not overlap");
                  
                }
                this.input.deleteMoveCallback(this.move, this);
            },this);
        }
        else if(randomno==2)
        {
            /*var graphics = this.add.graphics(730, 180);
            graphics.lineStyle(2, 0x0000FF, 1);
            graphics.drawRect(5, 5, 15, 15);*/
            
            arrow=this.add.sprite(655,230,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(770,405,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.input.enableDrag(true);
             arrow.angle = 210;
            console.log("QQQ"+this.input.x);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
    
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                }    
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                this.snapSound.play();
                tick.inputEnabled=true;
                /*if(arrow.x < 615 || arrow.x > 840 || arrow.y > 445 || arrow.y < 128)
                {
                    console.log("condition");
                    arrow.x=655;
                    arrow.y=230;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;

                }*/
                if(this.checkOverlap(arrow,arrowlast) || overlappedflag==true)
                {
                    //console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                   // console.log("not overlap");
                   
                }
                this.input.deleteMoveCallback(this.move, this);
                /*if(this.checkOverlap(arrow,graphics)){
                   arrow.angle = 0;
                   }*/
                if(this.input.x>740 && this.input.y>180 && this.input.y<400){
                    arrow.angle = 0;
                }
                else if(this.input.x>650 && this.input.y>350)
                    {
                        arrow.angle = 260;
                    }
    
            },this);
        }
        else if(randomno==7)
        {
            arrow=this.add.sprite(652,170,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(695,435,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.input.enableDrag(true);
            arrow.angle = 260;
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                }    
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                this.snapSound.play();
                tick.inputEnabled=true;
                /*if(arrow.x < 612 || arrow.x > 820 || arrow.y > 454 || arrow.y < 115 )
                {
                    console.log("condition");
                    arrow.x=652;
                    arrow.y=170;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }*/
                if(this.checkOverlap(arrow,arrowlast)  || overlappedflag==true)
                {
                    //console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                    //console.log("not overlap");
                   
                }
                this.input.deleteMoveCallback(this.move, this);
                
                if(this.input.x>740 && this.input.y>140 && this.input.y<400){
                    arrow.angle = 20;
                }
            },this);
        }
        else if(randomno==3)
        {
            arrow=this.add.sprite(664,210,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(669,367,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.input.enableDrag(true);
            arrow.angle = 210;
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
    
             arrow.events.onDragUpdate.removeAll();
             arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                }    
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                this.snapSound.play();
                tick.inputEnabled=true;
                /*if(arrow.x < 600 || arrow.x > 820 || arrow.y > 454 || arrow.y < 115 )
                {
                    console.log("condition");
                    arrow.x=664;
                    arrow.y=210;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }*/
                if(this.checkOverlap(arrow,arrowlast) || overlappedflag==true)
                {
                   // console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                   // console.log("not overlap");
                  
                }
                this.input.deleteMoveCallback(this.move, this);
                if(this.input.x>740 && this.input.y>180 && this.input.y<370){
                    arrow.angle = 0;
                }
                else if(this.input.x<760 && this.input.y<400 &&this.input.y>200 ){
                    arrow.angle = 90;
                }
            },this);
        }
        else if(randomno==4)
        {
            arrow=this.add.sprite(655,170,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrow2=this.add.sprite(754,170,'Game17_Arrow_Btn');
            arrow2.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(752,405,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrowlast2 =this.add.sprite(772,306,'Game17_Arrow_Btn');
            arrowlast2.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.input.enableDrag(true);
            arrow2.scale.setTo(0.5,0.5);
            arrow2.anchor.setTo(0.5);
            arrow2.inputEnabled=true;
            arrow2.input.enableDrag(true);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrowlast2.scale.setTo(0.5,0.5);
            arrowlast2.anchor.setTo(0.5);
            arrowlast2.alpha=0;
            arrow.bringToTop(arrowlast2);
            arrow2.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow2.events.onDragStart.removeAll();
            arrow2.events.onDragStart.add(function(){
                this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast2)==true){
                    overlappedflag=true;
                }    
             },this);
            arrow2.events.onDragUpdate.removeAll();
            arrow2.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow2,arrowlast)==true || this.checkOverlap(arrow2,arrow)==true){
                    overlappedflag2=true;
                }    
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                this.snapSound.play();
                tick.inputEnabled=true;
                /*if(arrow.x < 615 || arrow.x > 820 || arrow.y > 454 || arrow.y < 115 )
                {
                   // console.log("condition");
                    arrow.x=655;
                    arrow.y=170;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }*/
                if(this.checkOverlap(arrow,arrowlast2)  || overlappedflag==true)
                {
                    
                    correctflg++;
                   // console.log("arrow1 overlapped"+correctflg);
                }
                else
                {
                   // console.log("not overlap");
                    
                }
                this.input.deleteMoveCallback(this.move, this);
            },this);
            arrow2.events.onDragStop.removeAll();
            arrow2.events.onDragStop.add(function(){
                this.snapSound.play();
                /*if(arrow2.x < 615 || arrow2.x > 820 || arrow2.y > 454 || arrow2.y < 115 )
                {
                   // console.log("condition");
                    arrow2.x=754;
                    arrow2.y=170;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }*/
                if(this.checkOverlap(arrow2,arrowlast) || this.checkOverlap(arrow2,arrow) || overlappedflag2==true)
                {
                    
                    correctflg++;
                   // console.log("arrow2 overlapped"+correctflg);
                }
                else
                {
                   // console.log("not overlap");
                    
                }
                this.input.deleteMoveCallback(this.move, this);
            },this);
        }
        else if(randomno==5)
        {
            arrow=this.add.sprite(750,173,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(660,395,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.input.enableDrag(true);
            arrow.angle = 90;
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                }    
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                this.snapSound.play();
                tick.inputEnabled=true;
                /*if(arrow.x < 600 || arrow.x > 800 || arrow.y > 454 || arrow.y < 110 )
                {
                    console.log("condition");
                    arrow.x=750;
                    arrow.y=173;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }*/
                if(this.checkOverlap(arrow,arrowlast)  || overlappedflag==true)
                {
                  //  console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                   // console.log("not overlap");
                }
                this.input.deleteMoveCallback(this.move, this);
                if(this.input.x<670 && this.input.y>160){
                    arrow.angle = 0;
                }
               else if(this.input.x>670 && this.input.y>250&& this.input.y<280){
                    arrow.angle =260;
                }
                else if(this.input.x>750 && this.input.y>280 && this.input.y<360){
                    arrow.angle = 0;
                }
               else  if(this.input.x<750 && this.input.y>380 ){
                    arrow.angle = 90;
                }
            },this);
        }
        
        else if(randomno==6)
        {
            arrow=this.add.sprite(760,190,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(755,285,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.angle = 90;
            arrow.input.enableDrag(true);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                   // console.log("overlapped flag======"+overlappedflag);
                }    
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                this.snapSound.play();
                tick.inputEnabled=true;
                /*if(arrow.x < 640 || arrow.x > 810 || arrow.y > 458 || arrow.y < 120 )
                {
                    console.log("condition");
                    arrow.x=760;
                    arrow.y=190;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }*/
                if(this.checkOverlap(arrow,arrowlast)  || overlappedflag==true)
                {
                  //  console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                   // console.log("not overlap");
                }
                this.input.deleteMoveCallback(this.move, this);
                if(this.input.x<700 && this.input.y>180 &&this.input.y<400){
                    arrow.angle = 0;
                }
                else if(this.input.x>720 && this.input.y>350){
                    arrow.angle = 180;
                }
                else if(this.input.x<750 && this.input.y<280){
                    arrow.angle = 90;
                }
            },this);
        }
        
        else if(randomno==8)
        {
            arrow=this.add.sprite(720,175,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(760,245,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.input.enableDrag(true);
            arrow.angle = 90;
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)){
                      overlappedflag=true;
                }
                
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                this.snapSound.play();
                tick.inputEnabled=true;
                /*if(arrow.x < 604 || arrow.x > 810 || arrow.y > 465 || arrow.y < 120 )
                {
                    console.log("condition");
                    arrow.x=720;
                    arrow.y=175;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }*/
                if(this.checkOverlap(arrow,arrowlast) || overlappedflag==true)
                {
                  //  console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                   // console.log("not overlap");
                }
                this.input.deleteMoveCallback(this.move, this);
             /*   if(this.input.x<710 && this.input.y>180 && this.input.y<250){
                    arrow.angle = 340;
                }
                else if(this.input.x>730 && this.input.y>370){
                    arrow.angle = 90;
                }
                else if(this.input.x>650 && this.input.y<350 && this.input.x<680)
                {
                    arrow.angle = 200;
                } */              
                if(this.input.x<710 && this.input.y>180 && this.input.y<270 && this.input.x<700){
                    arrow.angle = 340;
                }
                else if(this.input.x>700 && this.input.y>290 && this.input.y<380 && this.input.x<740){
                    arrow.angle = 350;
                }
                else if(this.input.x<760 && this.input.y>360 && this.input.y<400 && this.input.x>650)
                {
                    arrow.angle = 90;
                }
                else if(this.input.x>650 && this.input.y<380 && this.input.y>290 && this.input.x<690)
                {
                    arrow.angle = 200;
                }
               
            },this);
        }
        
        else if(randomno==9)
        {
            arrow=this.add.sprite(765,215,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(666,389,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.input.enableDrag(true);
            arrow.angle = 180;
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                }    
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                this.snapSound.play();
                tick.inputEnabled=true;
               /* if(arrow.x < 604 || arrow.x > 820 || arrow.y > 465 || arrow.y < 120 )
                {
                    //console.log("condition");
                    arrow.x=765;
                    arrow.y=215;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }*/
                if(this.checkOverlap(arrow,arrowlast)  || overlappedflag==true)
                {
                    correctflg=1;
                }
                else
                {
                    //console.log("not overlap");
                }
                this.input.deleteMoveCallback(this.move, this);
                if(this.input.x<740 && this.input.y>170 && this.input.y<210){
                    arrow.angle = 45;
                }
                else if(this.input.x<760 && this.input.y>210 && this.input.y<360){
                    arrow.angle = 0;
                }
                else if(this.input.x<760 && this.input.y>370){
                    arrow.angle = 90;
                }
            },this);
        }
            if(scoreflag==1)
            {
                if(no11==1)
                {
                    maskbg.x=0;
                    maskgraphics= this.add.graphics(0,0); 
                    maskbg.mask = maskgraphics;
                }
                else
                {
                    maskgraphics= this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }
            }
            else
            {
                maskgraphics = this.add.graphics(0,0);
                maskbg.mask = maskgraphics;
            }
    },
    
    move:function(pointer, x, y) {
        var xpos;
        if(randomno==4)
        {
            if(scoreflag==1)
            {
                if(no11==1)
                {
                    maskbg.x=720;
                    maskgraphics.drawCircle(arrow.x,arrow.y,80); 
                }
                else
                {
                    maskgraphics.drawCircle(arrow.x,arrow.y,80); 
                }
            }
            else
            {
                maskgraphics.drawCircle(arrow.x,arrow.y,80); 
            }
            
            
            if(scoreflag==1)
            {
                if(no11==1)
                {
                    maskbg.x=720;                  
                    maskgraphics.drawCircle(arrow2.x,arrow2.y,80); 
                }
                else
                {                   
                    maskgraphics.drawCircle(arrow2.x,arrow2.y,80); 
                }
            }
            else
            {
                maskgraphics.drawCircle(arrow2.x,arrow2.y,80); 
            }
        }
        else
        {
            
            if(scoreflag==1)
            {
                if(no11==1)
                {
                     maskbg.x=720;
                     maskgraphics.drawCircle(pointer.x,pointer.y,80); 
                }
                else
                {
                     maskgraphics.drawCircle(pointer.x,pointer.y,80); 
                }
            }
            else
            {
                maskgraphics.drawCircle(arrow.x,arrow.y,80);   
            }
        } 
},
    checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

    },

    correctAns:function(target)
    {  
        this.AnsTimerCount=minutes+':' + seconds;
        this.currentTime = window.timeSaveFunc();
        this.saveAsment = 
            { 
                id_game_play: this.savedVar,
                id_question: this.questionid,  
                pass: "yes",
                time2answer: this.AnsTimerCount,
                attempts: this.noofAttempts,
                date_time_submission: this.currentTime, 
                access_token: window.acctkn 
            }
                
          absdsjsapi.saveAssessment(this.saveAsment);
        
        
        
        var index = fishbasket.indexOf(randomno);   
                if (index > -1) {
                fishbasket.splice(index, 1);
            }
        wrongflg=0;
        correctflg=0;
        
        speaker.inputEnabled=false;
        
        this.clickSound.play();
        this.celebrationSound.play();
        var starAnim = starsGroup.getChildAt(countcorrect);
        starAnim.smoothed = false;
        var anim4 = starAnim.animations.add('star');
        anim4.play();
        countcorrect++;
        fishGroup.destroy();
        fishGroup=this.add.group();
        fishGroup.enableBody = true;
        for(var m=0;m<randomno;m++)
        {
            st= fishGroup.create(randomx[m],randomy[m],'Game17_fishbubble');
            st.name = 'fish' + m;
            st.body.collideWorldBounds = true;
            st.scale.setTo(0.6,0.6);
            st.anchor.setTo(0.5,0.5);
            st.body.bounce.setTo(0.8, 0.8);
            st.animations.add('fishbubble');
            st.animations.play('fishbubble', 10, true);
            st.body.velocity.setTo(10 + 1 * 100,00);   
        }
      
        if(randomno==4)
        arrow2.destroy();
        tick.events.onInputDown.removeAll();
      
        arrow.events.onDragStart.removeAll();
        arrow.events.onDragStop.removeAll();
        arrow.destroy();
        arrowlast.destroy();
        overlappedflag=false;
        overlappedflag2=false;
        
        this.time.events.add(2000,function(){
           if(scoreflag==0){
               maskgraphics.y=arrow.x;
           }
            else{
                 maskgraphics.y=arrow.x;
            }
            fishGroup.destroy();
            if(no11<6)
            {
                yArray = [90,120,150,180,210,240,270,300,330,360,390];
                xArray = [50,110,170,230,290,350,410,470,530];
                this.gotoFirstQuestion();
            }
            else
            {
                scoreflag=1;
                timer1.stop();
                no11=0;
                countcorrect=0;
                this.stopVoice();   
                this.state.start('unity1_7Score'); 
            }
           
        },this);
        
    },

    wrongAns:function(target)
    {
        wrongflg=0;
        correctflg=0;
        maskgraphics.y=arrow.x; 
        this.clickSound.play();
        this.wrongSound.play();
        arrow.destroy();
        arrowlast.destroy();
        if(randomno==4)
         arrow2.destroy();
        fishGroup.destroy();
        numbgrps=new Array();
        no11--;
        overlappedflag=false;
        overlappedflag2=false;
        tick.events.onInputDown.removeAll();
        yArray = [90,120,150,180,210,240,270,300,330,360,390];
        xArray = [50,110,170,230,290,350,410,470,530];

        
    
        shake.shake(10, fishGroup);

        this.gotoFirstQuestion();
    },
    
    shutdown:function()
    {
        this.stopVoice();
        this.playQuestionSound=null;
        this.src = null;
        this.time.events.removeAll();
        this.celebrationSound = null;
        this.clickSound = null;
        this.wrongSound = null;
        this.snapSound = null;
        this.noofAttempts = null;
        this.AnsTimerCount = null;
        this.gameid=null;
        this.questionid=null;
        this.sceneCount=null;
        
        this.currentTime =null;
        no11=null;
        randomno=null;
        count=null;
        speaker.events.onInputDown.removeAll();
        speaker= null;
        this.backbtn.events.onInputDown.removeAll();
        this.backbtn = null;
        fishGroup=null;
        xArray=null;
        yArray=null;
        s=null;
        st=null;
        correctflg=null;
        wrongflg=null;
        arrow.events.onInputDown.removeAll();
        arrow= null;
        if(arrow2 !=null){
            arrow2.events.onInputDown.removeAll();
            arrow2= null;
        }
        arrowlast.events.onInputDown.removeAll();
        arrowlast= null;
        if(arrowlast2 !=null){
            arrowlast2.events.onInputDown.removeAll();
            arrowlast2= null;
        }
        countcorrect=null;
        maskgraphics=null;
        randomx=null;
        randomy=null;
        overlappedflag=null;
        overlappedflag2=null;
        minutes=null;
        seconds=null;
        counterForTimer=null;
        timeDisplay=null;
        tick=null;
        correctflg=null;
        wrongflg=null;
        fishbasket=null;
        maskbg=null;
        bluebg=null;
        background=null;
        starsGroup=null;
    }
};