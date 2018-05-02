Game.grade5_2level2=function(){};

var background;
var score = 0;
var sl1no;
var sl2no;
var slidearray=new Array();
var starsGroup;
var count;
var groupdays;
var randomdays;
var selectedarray;
var displdays;
var blankarray;
var blankbox;
var group2;
var sortArr;
var sortedArray;
var correctflag=0;
var correctflag2=0;
var slidegroup;
var selmonth;
var slideno=0;
var randomslno=0;
var glow;
var middays;
var status2="before";
var chknumb;
var chkflag=0,chkflag1=0;
var noofAttempts;
var timer;
var AnsTimerCount;
Game.grade5_2level2.prototype={

    init:function(game)
    {
        _this = this;
        
        _this.gameid = "5.2B";
        
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
		_this.sceneCount = 0;

        background;
         score = 0;
         
         slidearray=new Array();
        
         correctflag=0;
         correctflag2=0;
        
         slideno=0;
         randomslno=0;
       
         status2="before";
         
         chkflag=0;
         chkflag1=0;
        
        
        sl1no=0;
        sl2no=0;
        count=0;
        slidearray1=[1,2,3,4,5,6];
        slidearray1 = this.shuffle(slidearray1);			
        chknumb=new Array();
        shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
        
		
        background = this.add.tileSprite(0,0,this.world.width,this.world.height-50, 'Bg');
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
            if(grade2Selected == false)
                _this.state.start('grade1levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false);  
        },_this);

       _this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            _this.getVoice(middays,status2);
            
        },_this);
        snapSound = this.add.audio('snapSound');
        celebr = this.add.audio('celebr');
        waudio = this.add.audio('waudio');
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
        
        status2="before";
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        //this.stopVoice();
        //console.log("sl1no=="+sl1no);
		switch(slidearray1[sl1no])
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
        groupdays=new Array();
        blankbox=new Array();
        randomdays=new Array();
        displdays=new Array();
        selectedarray=new Array();
        selmonth=new Array();
        sortArr=new Array();
        group2=this.add.group();
        
        blankbox.push(this.add.sprite(0,0,'blankimg','blank'));blankbox[0].alpha=0;blankbox[0].name="day1";
        blankbox.push(this.add.sprite(0,0,'blankimg','blank'));blankbox[1].alpha=0;blankbox[1].name="day2";
        blankbox.push(this.add.sprite(0,0,'blankimg','blank'));blankbox[2].alpha=0;blankbox[2].name="day3";
        blankbox.push(this.add.sprite(0,0,'blankimg','blank'));blankbox[3].alpha=0;blankbox[3].name="day4";
        blankbox.push(this.add.sprite(0,0,'blankimg','blank'));blankbox[4].alpha=0;blankbox[4].name="day5";
        blankbox.push(this.add.sprite(0,0,'blankimg','blank'));blankbox[5].alpha=0;blankbox[5].name="day6";
        blankbox.push(this.add.sprite(0,0,'blankimg','blank'));blankbox[6].alpha=0;blankbox[6].name="day7";
        
        if(sl1no==1 || sl1no==4)
        {
            var dayselct = 0;
            var grpselect = Math.ceil(Math.random()*2);
            if(grpselect==1)
            {
                dayselct = 19;
            }
            else if(grpselect==2)
            {
                dayselct = 20;
            }
            else
            {
                dayselct=19;
            }
        }
        else if(sl1no==2 || sl1no==5)
        {
            var dayselct = 0;
            var grpselect = Math.ceil(Math.random()*2);
            if(grpselect==1)
            {
                dayselct = 21;
            }
            else if(grpselect==2)
            {
                dayselct = 22;
            }
            else
            {
                dayselct=21;
            }
        }
        else if(sl1no==3 || sl1no==6)
        {
            var dayselct = 0;
            var grpselect = Math.ceil(Math.random()*2);
            if(grpselect==1)
            {
                dayselct = 23;
            }
            else if(grpselect==2)
            {
                dayselct = 24;
            }
            else
            {
                dayselct=23;
            }
        }
        else
        {
            dayselct=19;
        }

        groupdays.push(this.add.sprite(60,400,'mon'+dayselct));groupdays[0].alpha=0;
        groupdays.push(this.add.sprite(130,420,'tue'+dayselct));groupdays[1].alpha=0;
        groupdays.push(this.add.sprite(190,400,'wed'+dayselct));groupdays[2].alpha=0;
        groupdays.push(this.add.sprite(260,420,'thu'+dayselct));groupdays[3].alpha=0;
        groupdays.push(this.add.sprite(325,400,'fri'+dayselct));groupdays[4].alpha=0;
        groupdays.push(this.add.sprite(395,420,'sat'+dayselct));groupdays[5].alpha=0;
        groupdays.push(this.add.sprite(455,400,'sun'+dayselct));groupdays[6].alpha=0;
        
        for(var k=0;k<groupdays.length;k++){
           randomdays.push(groupdays[k]); 
        }
        randomdays=Object.keys(randomdays);
        
        randomdays=this.shuffle(randomdays);

        displdays=this.fetchrandom(randomdays,"slide1");
        //console.log("chkflag=="+chkflag);
        if(chknumb.includes(displdays[0]) && chkflag<=30)
        {
            chkflag++;
            //console.log("already exists"+displdays[0]);
            for(var i=0;i<blankbox.length;i++)
            {
                blankbox[i].destroy();     
            }
            for(var j=0;j<groupdays.length;j++)
            {
                groupdays[j].destroy();     
            }
          
            randomdays=[];
            slidegroup.destroy();
            status2="before";
            sl1no--;
           
           this.getslides();
        }
        else if((displdays[0]==5 || displdays[0]==6) && chkflag1<=30)
        {
            chkflag1++;
            //console.log("dont repeat"+displdays[0]);
            for(var i=0;i<blankbox.length;i++)
            {
                blankbox[i].destroy();     
            }
            for(var j=0;j<groupdays.length;j++)
            {
                groupdays[j].destroy();     
            }
          
            randomdays=[];
            slidegroup.destroy();
            status2="before";
            sl1no--;
           
           this.getslides();
        }
        else
        {
            //console.log("not exists"+displdays[0]);
            chknumb.push(displdays[0]);
        
            if(displdays[0]<=4)//mon tue wed//tue wed thu//wed thu fri//thu fri sat//fri sat sun
            {
                displdays.push(Number(displdays[0])+1);
                displdays.push(Number(displdays[0])+2);
            }
            else if(displdays[0]==5)//fri sat sun
            {
                displdays.push(Number(displdays[0])+1);
                displdays.push(Number(displdays[0])-1);
            }
            else if(displdays[0]==6)//fri sat sun
            {
                displdays.push(Number(displdays[0])-1);
                displdays.push(Number(displdays[0])-2);
            }
          
            for(var i=0;i<displdays.length;i++)
            { 
                blankarray.push(blankbox[displdays[i]]);
                if(i==2)
                {
                    selmonth.push(((blankarray[i].name).substring(3)-1));

                    selmonth.sort(function(a, b){return a-b});

                    for(var j=0;j<selmonth.length;j++)
                    {
                        sortArr.push(blankbox[selmonth[j]]);
                        sortArr[j].name='day'+(selmonth[j]);
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

                    groupdays[displdays[i]].x=205+(183*i);
                    groupdays[displdays[i]].y=100;
                    groupdays[displdays[i]].alpha=1;
                    groupdays[displdays[i]].name="day"+displdays[i];
                    middays=groupdays[displdays[i]].name;
                    groupdays[displdays[i]].inputEnabled = false;  
                }
                else
                {
                    selmonth.push(((blankarray[i].name).substring(3)-1));
                    groupdays[displdays[i]].x=505-(100*i);
                    groupdays[displdays[i]].y=300;
                    groupdays[displdays[i]].alpha=1;
                    groupdays[displdays[i]].name="day"+displdays[i];
                    groupdays[displdays[i]].inputEnabled = true;
                    groupdays[displdays[i]].input.useHandCursor = true;
                    groupdays[displdays[i]].input.enableDrag(true);
                    groupdays[displdays[i]].events.onDragStart.add(this.onDragStart, this);
                    groupdays[displdays[i]].events.onDragStop.add(this.onDragStop, this);
                }

                slidegroup.add(groupdays[displdays[i]]);
            }
             this.stopVoice();
           // _this.sceneCount++;
            this.getVoice(middays,status2);
            /*_this.speakerbtn.events.onInputDown.add(function(){
               this.stopVoice();
               this.getVoice(middays,status2);
            },this);*/
            slidegroup.x = 960;

            var tween = this.add.tween(slidegroup);
            tween.to({ x: 0}, 0, 'Linear', true, 0);
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
            //var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drag", 
                res_id: "Level5.2_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            
            _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            target.width-=13;
            target.bringToTop(group2);
        },
        onDragStop:function(target)
	    {
            //var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drop", 
                res_id: "Level5.2_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            
            target.width+=13;
            snapSound.play();    
            for(var h=0;h<group2.length;h++)
            {
                if(this.checkOverlap(target,group2.getChildAt(h)))
                    {   
                        noofAttempts++;
                        if(target.name==group2.getChildAt(h).name)
                        {
                            if(h==1 && status2=="before")
                            {
                                //console.log("mismatch");
                                waudio.play();
                                shake.shake(10,target); 
                                if(target==groupdays[displdays[0]])
                                {
                                    target.x=505-(100*0);
                                    target.y=300;
                                }
                                else if(target==groupdays[displdays[1]])
                                {
                                    target.x=505-(100*1);
                                    target.y=300;
                                }
                                else if(target==groupdays[displdays[2]])
                                {
                                    target.x=505-(100*2);
                                    target.y=300;
                                }
                            }
                            else
                            {
                                status2="after";
                                //console.log("correct match");
                                correctflag++;
                                if(correctflag==1)
                                    this.getVoice(middays,status2);
                                target.x=group2.getChildAt(h).x;
                                target.y=group2.getChildAt(h).y;
                                target.inputEnabled=false;
                            }  
                            break;
                        }
                        else
                        {
                            //console.log("mismatch");
                            waudio.play();
                            shake.shake(10,target); 
                                if(target==groupdays[displdays[0]])
                                {
                                    target.x=505-(100*0);
                                    target.y=300;
                                }
                                else if(target==groupdays[displdays[1]])
                                {
                                    target.x=505-(100*1);
                                    target.y=300;
                                }
                                else if(target==groupdays[displdays[2]])
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
                    _this.sceneCount++;
                    _this.questionid = "5.2_3#SCR-"+_this.sceneCount;
					
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
        
        glow=this.add.sprite(0,0,'glow');
        glow.height-=58;
        glow.width+=10;
        glow.alpha=0;
        //console.log("correct ans==");
        _this.speakerbtn.inputEnabled=false;
       _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        celebr.play();
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
            if(count<6)  
            this.getslides();
            else
            {
                sl1no=0;
                sl2no=0;
                randomslno=0;
                blankarray=new Array();    
                groupdays=new Array();
                blankbox=new Array();
                randomdays=new Array();
                displdays=new Array();
                selectedarray=new Array();
                selmonth=new Array();
                sortArr=new Array();
                group2=this.add.group();
                slidegroup=this.add.group();
                chknumb=new Array();
                count=0;
                chkflag=0;
                chkflag1=0;
                this.state.start('grade5_2Score');
            }
            
        },this);
        },this);
		
    },
    
    update:function(){
       
    },
    
    addGlowToSprite:function(){
            glow.x=176+(0*180);
            glow.y=173;
            glow.alpha=1;
            this.time.events.add(700,function(){
                glow.x=176+(1*180);
                glow.y=173;
                glow.alpha=1;
                this.time.events.add(700,function(){
                    glow.x=176+(2*180);
                    glow.y=173;
                    glow.alpha=1;
                },this);
            },this); 
    },
    
    getVoice:function(middays=null,status2=null){
        //console.log("getvoice  "+middays,status2);
            this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(middays==null)
        {
            if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", "questionSounds/5.2/English/5.2_3.mp3");
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", "questionSounds/5.2/Hindi/5.2_3.mp3");
                }
                else
                {
                    _this.src.setAttribute("src", "questionSounds/5.2/Kannada/5.2_3.mp3");
                }
        }
        else
        {
            //console.log("getvoice in else"+middays);

            switch(middays)
            {
              case 'day0':
                                if(window.languageSelected == "English")
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/b-monday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/a-monday.mp3");
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/b-monday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/a-monday.mp3");
                                }
                                else
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/b-monday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/a-monday.mp3");
                                }
                            break;
                case 'day1':if(window.languageSelected == "English")
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/b-tuesday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/a-tuesday.mp3");
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/b-tuesday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/a-tuesday.mp3");
                                }
                                else
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/b-tuesday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/a-tuesday.mp3");
                                }
                            break;
                case 'day2':
                            if(window.languageSelected == "English")
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/b-wednesday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/a-wednesday.mp3");
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/b-wednesday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/a-wednesday.mp3");
                                }
                                else
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/b-wednesday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/a-wednesday.mp3");
                                }
                            break;
                case 'day3':
                            if(window.languageSelected == "English")
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/b-thursday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/a-thursday.mp3");
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/b-thursday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/a-thursday.mp3");
                                }
                                else
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/b-thursday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/a-thursday.mp3");
                                }
                            break;
                case 'day4':
                            if(window.languageSelected == "English")
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/b-friday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/a-friday.mp3");
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/b-friday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/a-friday.mp3");
                                }
                                else
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/b-friday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/a-friday.mp3");
                                }
                            break;
                case 'day5':
                            if(window.languageSelected == "English")
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/b-saturday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/a-saturday.mp3");
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/b-saturday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/a-saturday.mp3");
                                }
                                else
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/b-saturday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/a-saturday.mp3");
                                }
                            break;
                case 'day6':
                            if(window.languageSelected == "English")
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/b-sunday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/English/a-sunday.mp3");
                                }
                                else if(window.languageSelected == "Hindi")
                                {
                                   if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/b-sunday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Kannada/a-sunday.mp3");
                                }
                                else
                                {
                                    if(status2=="before")
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/b-sunday.mp3");
                                    else
                                        _this.src.setAttribute("src", "questionSounds/5.2/Hindi/a-sunday.mp3");
                                }
                            break;
                default: //console.log("in default case");
                            break;
                
                                
                            
              
            }
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
    
    shutdown:function(){
        this.stopVoice();
         background = null;
         score  = null;
         sl1no = null;
         sl2no = null;
         slidearray = null;
         starsGroup = null;
         speakerBtn = null;
         count = null;
         groupdays = null;
         randomdays = null;
         selectedarray = null;
         displdays = null;
         blankarray = null;
         blankbox = null;
         group2 = null;
         sortArr = null;
         sortedArray = null;
         correctflag = null;
         correctflag2 = null;
         slidegroup = null;
         selmonth = null;
         slideno = null;
         randomslno = null;
         glow = null;
         middays = null;
         status2 = null;
         chknumb = null;
         chkflag,chkflag1 = null;
         noofAttempts = null;
         timer = null;
         AnsTimerCount = null;
    }
    
            
};