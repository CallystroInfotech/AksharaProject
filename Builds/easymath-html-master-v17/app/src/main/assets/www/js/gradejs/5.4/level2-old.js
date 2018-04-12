Game.grade5_4level2=function(){};

var background;
var score = 0;
var slno;
var slidearray=new Array();
var starsGroup;
var count;
var groupmonth;
var randommonth;
var selectedarray;
var displmonth;
var blankarray;
var blankbox;
var group2;
var sortArr=new Array();
var sortedArray;
var correctflag=0;
var correctflag2=0;
var slidegroup;
var selmonth=new Array();
var randomslno=0;
var glow;
var midmonth;
var status="before";
var chknumb;
var chkflag=0,chkflag1=0;

var noofAttempts;
var timer;
var AnsTimerCount;

    
    Game.grade5_4level2.prototype={

    init:function(game)
    {
        _this = this;
        
        _this.gameid = "5.4B";
        
        _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
       _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);
        

    },
        
	create:function(game){
        noofAttempts=0;
		AnsTimerCount=0;
		_this.sceneCount = 1;
        
        slno=0;
        count=0;
        slidearray=[1,2,3,4,5,6];
        slidearray = this.shuffle(slidearray);		
        chknumb=new Array();
        shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
        
		//this.physics.startSystem(Phaser.Physics.ARCADE);
		//this.physics.setBoundsToWorld();
		
        background = this.add.tileSprite(0,0,this.world.width,this.world.height-50, 'Level54_bg54');
        background.scale.setTo(1.05,1.12);

        this.generateStarsForTheScene(6);
        
        _this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            //console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            _this.getVoice(midmonth,status);
            
        },_this);
        
        this.getslides(); 
    },
    
    
    generateStarsForTheScene:function(count)
	{
		starsGroup = this.add.group();
		for (var i = 0; i < count; i++)
		{
	
			starsGroup.create(this.world.centerX, 15, 'CommonStarAnim');
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
    
    speakeron:function(){
        this.stopAllVoice();
        
    },
    
    stopAllVoice:function(){
       
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
    
    getslides:function()
	{
         noofAttempts = 0;
         AnsTimerCount=0;
         

		timer = this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		timer.loop(1000, function(){
			AnsTimerCount++;
		}, this);

		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		timer.start();
        
        status="before";
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        this.stopVoice();
		switch(slidearray[slno])
		{
			case 1: 
            case 2: 
            case 3:
            case 4:
            case 5:
            case 6:this.slide1(); break;
        }
    },
    
    slide1:function()
    {
        slidegroup=this.add.group();
        sl1no++;
        blankarray=new Array();    
        groupmonth=new Array();
        blankbox=new Array();
        randommonth=new Array();
        displmonth=new Array();
        selectedarray=new Array();
        selmonth=new Array();
        sortArr=new Array();
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[0].alpha=0;blankbox[0].name="month1";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[1].alpha=0;blankbox[1].name="month2";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[2].alpha=0;blankbox[2].name="month3";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[3].alpha=0;blankbox[3].name="month4";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[4].alpha=0;blankbox[4].name="month5";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[5].alpha=0;blankbox[5].name="month6";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[6].alpha=0;blankbox[6].name="month7";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[7].alpha=0;blankbox[7].name="month8";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[8].alpha=0;blankbox[8].name="month9";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[9].alpha=0;blankbox[9].name="month10";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[10].alpha=0;blankbox[10].name="month11";
        blankbox.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));blankbox[11].alpha=0;blankbox[11].name="month12";

        groupmonth.push(this.add.sprite(60,400,'Level54_JAN2'));groupmonth[0].alpha=0;
        groupmonth.push(this.add.sprite(130,420,'Level54_FEB2'));groupmonth[1].alpha=0;
        groupmonth.push(this.add.sprite(190,400,'Level54_MAR2'));groupmonth[2].alpha=0;
        groupmonth.push(this.add.sprite(260,420,'Level54_APR2'));groupmonth[3].alpha=0;
        groupmonth.push(this.add.sprite(325,400,'Level54_MAY2'));groupmonth[4].alpha=0;
        groupmonth.push(this.add.sprite(395,420,'Level54_JUNE2'));groupmonth[5].alpha=0;
        groupmonth.push(this.add.sprite(455,400,'Level54_JULY2'));groupmonth[6].alpha=0;
        groupmonth.push(this.add.sprite(525,420,'Level54_AUG2'));groupmonth[7].alpha=0;
        groupmonth.push(this.add.sprite(585,400,'Level54_SEP2'));groupmonth[8].alpha=0;
        groupmonth.push(this.add.sprite(655,420,'Level54_OCT2'));groupmonth[9].alpha=0;
        groupmonth.push(this.add.sprite(715,400,'Level54_NOV2'));groupmonth[10].alpha=0;
        groupmonth.push(this.add.sprite(790,420,'Level54_DEC2'));groupmonth[11].alpha=0;
        for(var k=0;k<12;k++){
           randommonth.push(groupmonth[k]); 
        }
        randommonth=Object.keys(randommonth);
        randommonth=this.shuffle(randommonth);
        
        displmonth=this.fetchrandom(randommonth);
        
        if(chknumb.includes(displmonth[0]) && chkflag<=30)
        {
            chkflag++;
            //console.log("already exists"+displmonth[0]);
            for(var i=0;i<blankbox.length;i++)
            {
                blankbox[i].destroy();     
            }
            for(var j=0;j<groupmonth.length;j++)
            {
                groupmonth[j].destroy();     
            }
          
            randommonth=[];
            slidegroup.destroy();
            status="before";
            sl1no--;
           
           this.getslides();
        }
        else if((displmonth[0]==0 || displmonth[0]==11) && chkflag1<=30)
        {
            chkflag1++;
            //console.log("dont repeat"+displmonth[0]);
            for(var i=0;i<blankbox.length;i++)
            {
                blankbox[i].destroy();     
            }
            for(var j=0;j<groupmonth.length;j++)
            {
                groupmonth[j].destroy();     
            }
          
            randommonth=[];
            slidegroup.destroy();
            status="before";
            sl1no--;
           
           this.getslides();
        }
        else
        {
            //console.log("not exists"+displmonth[0]);
            chknumb.push(displmonth[0]);
            randomslno++;
            if(displmonth[0]!=0 && displmonth[0]<=10)//jan feb mar// feb marc apr//marc apr may//apr may june//may june july//jhune jul aug
                //jul aug sep //aug sep oct// sep oct nov//oct nov dec
            {
                displmonth.push(Number(displmonth[0])+1);
                displmonth.push(Number(displmonth[0])-1);
            }
            else if(displmonth[0]==11)//oct nov dec
            {
                displmonth.push(Number(displmonth[0])-1);
                displmonth.push(Number(displmonth[0])-2);
            }
            else if(displmonth[0]==0)//jn feb marc
            {
                displmonth.push(Number(displmonth[0])+1);
                displmonth.push(Number(displmonth[0])+2);
            }
            displmonth.sort(function(a, b){return a-b});
            group2=this.add.group();
          
            for(var i=0;i<displmonth.length;i++)
            { 
                blankarray.push(blankbox[displmonth[i]]);
                if(i==2)
                {
                    selmonth.push(((blankarray[i].name).substring(5)-1));

                    selmonth.sort(function(a, b){return a-b});

                    for(var j=0;j<selmonth.length;j++)
                    {
                        sortArr.push(blankbox[selmonth[j]]);
                        sortArr[j].name='month'+(selmonth[j]);
                        sortArr[j].x=205+(366*j);
                        sortArr[j].y=100;
                        sortArr[j].alpha=1;
                        sortArr[j].scale.setTo(0.99,0.98);
                        group2.add(sortArr[j]);
                    }
                }
            
                slidegroup.add(group2);
                if(i==1)
                {
                    groupmonth[displmonth[i]].x=205+(183*i);
                    groupmonth[displmonth[i]].y=100;
                    groupmonth[displmonth[i]].name="month"+displmonth[i];
                    midmonth=groupmonth[displmonth[i]].name;
                    groupmonth[displmonth[i]].alpha=1;
                    groupmonth[displmonth[i]].inputEnabled=false;
                }
                else
                {      
                    selmonth.push(((blankarray[i].name).substring(5)-1));
                    groupmonth[displmonth[i]].x=505-(100*i);
                    groupmonth[displmonth[i]].y=300;
                    groupmonth[displmonth[i]].alpha=1;
                    groupmonth[displmonth[i]].name="month"+displmonth[i];
                    groupmonth[displmonth[i]].inputEnabled = true;
                    groupmonth[displmonth[i]].input.useHandCursor = true;
                    groupmonth[displmonth[i]].input.enableDrag(true);
                    groupmonth[displmonth[i]].events.onDragStart.add(this.onDragStart, this);
                    groupmonth[displmonth[i]].events.onDragStop.add(this.onDragStop, this);
                }
                slidegroup.add(groupmonth[displmonth[i]]);
             }

           this.getVoice(midmonth,status);
/*           _this.speakerbtn.events.onInputDown.add(function(){
                this.stopVoice();
                this.getVoice(midmonth,status);
            },this);*/
           slidegroup.x = 960;
           var tween = this.add.tween(slidegroup);
           tween.to({ x: 0}, 0, 'Linear', true, 0);
           tween.onComplete.add(function(){
           },this); 
        }
    },
  
    fetchrandom: function(array){
         var count=0;
         for (var i=0;i<array.length;i++){
            
             if(array[i]!="undefined")
             { 
                selectedarray.push(array[i]); 
                 count++;
                if(count == 1){
                    return selectedarray;
                }
             } 
         }    
         
     },
    onDragStart:function(target)
	    {
            // var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drag", 
                res_id: "Level54A_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            
            _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
            target.width-=13;
            target.bringToTop(group2);
        },
        onDragStop:function(target)
	    {
             // var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drop",
                res_id: "Level54A_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            
            target.width+=13;
            _this.snapSound = _this.add.audio('snapSound');
             _this.snapSound.play();
            for(var h=0;h<group2.length;h++)
            {
                if(this.checkOverlap(target,group2.getChildAt(h)))
                    {     
                        noofAttempts++;
                        if(target.name==group2.getChildAt(h).name )
                        {
                            if(h==1 && status=="before")
                            {
                                _this.waudio = _this.add.audio('waudio');
                                _this.waudio.play();
                                shake.shake(10,target);
                                if(target==groupmonth[displmonth[0]])
                                {
                                    target.x=505-(100*0);
                                    target.y=300;
                                }
                                else if(target==groupmonth[displmonth[1]])
                                {
                                    target.x=505-(100*1);
                                    target.y=300;
                                }
                                else if(target==groupmonth[displmonth[2]])
                                {
                                    target.x=505-(100*2);
                                    target.y=300;
                                }
                            }
                            else
                            {
                                status="after";
                                correctflag++;
                                if(correctflag==1)
                                    this.getVoice(midmonth,status);
                                target.x=group2.getChildAt(h).x;
                                target.y=group2.getChildAt(h).y;
                                target.inputEnabled=false;
                            }   
                            break;
                        }
                        else
                        {
                             _this.waudio = _this.add.audio('waudio');
                            _this.waudio.play();
                            shake.shake(10,target);
                            if(target==groupmonth[displmonth[0]])
                            {
                                target.x=505-(100*0);
                                target.y=300;
                            }
                            else if(target==groupmonth[displmonth[1]])
                            {
                                target.x=505+(100*1);
                                target.y=300;
                            }
                            else if(target==groupmonth[displmonth[2]])
                            {
                                target.x=505-(100*2);
                                target.y=300;
                            }
                            break;
                        }
                    }
                }
            if(correctflag==2)
            {
                 _this.celebr = _this.add.audio('celebr');
                _this.celebr.play();
                correctflag=0;
                this.correctans(target);  
            }
        },     
    
    checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
    correctans:function(target)
    {
        if(timer)
                    {
                        timer.stop();
					   timer = null; 
                    }
					
				_this.currentTime = window.timeSaveFunc();
						var saveAsment = 
						{ 
							id_game_play: _this.savedVar,
							id_question: _this.questionid,  
							pass: "Yes",
							time2answer: AnsTimerCount,
							attempts: noofAttempts,
							date_time_submission: _this.currentTime, 
							access_token: window.acctkn 
						}
				
				absdsjsapi.saveAssessment(saveAsment);
        
        glow=this.add.sprite(0,0,'Level54_glow');
        glow.height-=55;
        glow.alpha=0;
        _this.speakerbtn.inputEnabled=false;
         _this.ClickSound = _this.add.audio('ClickSound');
        _this.ClickSound.play();
         _this.celebr = _this.add.audio('celebr');
        _this.celebr.play();
        var starAnim = starsGroup.getChildAt(count);
		starAnim.smoothed = false;
    	var anim = starAnim.animations.add('star');
		anim.play();
        count++;
        var tweendown = this.add.tween(slidegroup);
        tweendown.to({ y: 100}, 0, 'Linear', true, 0);
        tweendown.onComplete.add(function(){
                this.addGlowToSprite();
        },this);
        this.time.events.add(3000,function(){
            glow.destroy();
            var tween = this.add.tween(slidegroup);
            tween.to({ x: -1000}, 0, 'Linear', true, 0);
            tween.onComplete.add(function(){
            if(count<6){
                _this.sceneCount++;
                this.getslides();
            }
            else
            {
                //this.stopVoice();
                randomslno=0;
                chkflag=0;
                chkflag1=0;
                chknumb=new Array();
                this.state.start('grade5_4Score');
            }
        },this);
      },this);
    },
    
    update:function(){
       
    },
    
    getVoice:function(midmonth,status){
        //console.log(midmonth,status);
        this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(midmonth)
            {
              case 'month0': if(window.languageSelected == "English")
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_3#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_3.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_2#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_2.mp3");
                                        }
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status=="before")
                                        {
                                            _this.questionid = "5.4_3#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_3.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_2#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_2.mp3");
                                        }
                                }
                                else
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_3#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_3.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_2#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_2.mp3");
                                        }
                                }
                            break;
                    
                case 'month1':if(window.languageSelected == "English")
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_5#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_5.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_4#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_4.mp3");
                                        }
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status=="before")
                                        {
                                            _this.questionid = "5.4_5#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_5.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_4#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_4.mp3");
                                        }
                                }
                                else
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_5#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_5.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_4#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_4.mp3");
                                        }
                                }
                            break;
                case 'month2': if(window.languageSelected == "English")
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_7#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_7.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_6#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_6.mp3");
                                        }
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status=="before")
                                        {
                                            _this.questionid = "5.4_7#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_7.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_6#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_6.mp3");
                                        }
                                }
                                else
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_7#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_7.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_6#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_6.mp3");
                                        }
                                }
                            break;
                case 'month3': if(window.languageSelected == "English")
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_9#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_9.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_8#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_8.mp3");
                                        }
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status=="before")
                                        {
                                            _this.questionid = "5.4_9#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_9.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_8#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_8.mp3");
                                        }
                                }
                                else
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_9#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_9.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_8#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_8.mp3");
                                        }
                                }
                            break;
                case 'month4': if(window.languageSelected == "English")
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_11#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_11.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_10#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_10.mp3");
                                        }
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status=="before")
                                        {
                                            _this.questionid = "5.4_11#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_11.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_10#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_10.mp3");
                                        }
                                }
                                else
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_11#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_11.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_10#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_10.mp3");
                                        }
                                }
                            break;
                case 'month5': if(window.languageSelected == "English")
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_13#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_13.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.12_4#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_12.mp3");
                                        }
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status=="before")
                                        {
                                            _this.questionid = "5.4_13#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_12.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_13#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_12.mp3");
                                        }
                                }
                                else
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_13#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_12.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_13#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_12.mp3");
                                        }
                                }
                            break;
                case 'month6': if(window.languageSelected == "English")
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_15#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_15.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_14#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_14.mp3");
                                        }
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status=="before")
                                        {
                                            _this.questionid = "5.4_15#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_15.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_14#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_14.mp3");
                                        }
                                }
                                else
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_15#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_15.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_14#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_14.mp3");
                                        }
                                }
                            break;
                case 'month7':   if(window.languageSelected == "English")
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_17#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_17.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_16#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_16.mp3");
                                        }
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status=="before")
                                        {
                                            _this.questionid = "5.4_17#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_17.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_16#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_16.mp3");
                                        }
                                }
                                else
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_17#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_17.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.16_4#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_16.mp3");
                                        }
                                }
                            break;
                case 'month8': if(window.languageSelected == "English")
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_19#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_19.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_18#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_18.mp3");
                                        }
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status=="before")
                                        {
                                            _this.questionid = "5.4_19#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_19.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_18#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_18.mp3");
                                        }
                                }
                                else
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_19#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_19.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_18#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_18.mp3");
                                        }
                                }
                            break;
                            break;
                case 'month9': if(window.languageSelected == "English")
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_21#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_21.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_20#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_20.mp3");
                                        }
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status=="before")
                                        {
                                            _this.questionid = "5.4_21#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_21.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_20#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_20.mp3");
                                        }
                                }
                                else
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_21#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_21.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_20#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_20.mp3");
                                        }
                                }
                            break;
                case 'month10':  if(window.languageSelected == "English")
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_23#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_23.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_22#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_22.mp3");
                                        }
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status=="before")
                                        {
                                            _this.questionid = "5.4_23#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_23.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_22#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_22.mp3");
                                        }
                                }
                                else
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_23#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_23.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_22#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_22.mp3");
                                        }
                                }
                            break;
                case 'month11':if(window.languageSelected == "English")
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_5#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_5.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_4#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_4.mp3");
                                        }
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status=="before")
                                        {
                                            _this.questionid = "5.4_5#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_5.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_4#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_4.mp3");
                                        }
                                }
                                else
                                {
                                    if(status=="before")
                                        {
                                            _this.questionid = "5.4_5#SCR-"+_this.sceneCount;
                                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_5.mp3");
                                        }
                                    else{
                                             _this.questionid = "5.4_4#SCR-"+_this.sceneCount;
                                             _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_4.mp3");
                                        }
                                }
                            break;               
            }
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
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
                 //console.log("stop"); 
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
    },
    
    addGlowToSprite:function(){
            glow.x=180+(0*180);
            glow.y=172;
            glow.alpha=1;
            this.time.events.add(700,function(){
                glow.x=180+(1*180);
                glow.y=172;
                glow.alpha=1;
                this.time.events.add(700,function(){
                    glow.x=180+(2*180);
                    glow.y=172;
                    glow.alpha=1;
                },this);
            },this); 
    },

    shutdown:function()
    {
        this.stopVoice();
    }
           
};