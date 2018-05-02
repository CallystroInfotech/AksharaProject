Game.grade5_2level1=function(){};

var background;
var score = 0;
var sl1no;
var sl2no;
var slidearray=new Array();
var starsGroup;
var count;
var groupdays;
var randommonth;
var selectedarray;
var displdays;
var blankarray;
var blankbox;
var group2;
var sortArr=new Array();
var sortArr1=new Array();
var sortedArray;
var correctflag=0;
var correctflag2=0;
var slidegroup;
var selmonth=new Array();
var slideno=0;
var randomslno=0;
var dayselect=0;
var chkrandom=new Array();
var chkflag=0,chkflag1=0;
var chknumb;

 var noofAttempts;
 var timer;
 var AnsTimerCount;
Game.grade5_2level1.prototype={
    
    init:function(game)
    {
        _this = this;
        
        _this.gameid = "5.2A";
        
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

         sortArr=new Array();
         sortArr1=new Array();
         
         correctflag=0;
         correctflag2=0;
        
         selmonth=new Array();
         slideno=0;
         randomslno=0;
         dayselect=0;
         chkrandom=new Array();
         chkflag=0;
         chkflag1=0;

        score = 0;
        
         slidearray=new Array();
    
        sl1no=0;
        sl2no=0;
        count=0;
        slidearray1=[1,2,3,4,5,6];
        slidearray2=[7,8,9,10,11,12];
        slidearray1 = this.shuffle(slidearray1);		
        slidearray2 = this.shuffle(slidearray2);		
        chknumb = new Array();
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
            _this.getVoice(slideno);
            
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
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        //this.stopVoice();
        //console.log("in sl1no"+sl1no);
        //console.log("in sl2no"+sl2no);
        //console.log("in randomslno"+randomslno);
        if(randomslno==0)
        {
            //console.log("in if");
            slideno=slidearray2[sl2no];
            randomslno++;
        }
        else
        {
            //console.log("in else");
            slideno=slidearray1[sl1no];
        }
            
        //console.log("slideno=="+slideno);
		switch(slideno)
		{
			case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6:this.slide1(); break;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:this.slide2(); break;
        }
        
    },
    
    slide1:function()
    {
        //this.getVoice(slideno); 
        slidegroup=this.add.group();
        sl1no++;
        blankarray=new Array();    
        groupdays=new Array();
        blankbox=new Array();
        randommonth=new Array();
        displdays=new Array();
        selectedarray=new Array();
        selmonth=new Array();
        sortArr=new Array();
        sortArr1=new Array();
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
        else if(sl1no==2)
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
        else if(sl1no==3 || sl1no==5)
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
       
        groupdays.push(this.add.sprite(60,400,'mon'+dayselct));groupdays[0].alpha=0;
        groupdays.push(this.add.sprite(130,420,'tue'+dayselct));groupdays[1].alpha=0;
        groupdays.push(this.add.sprite(190,400,'wed'+dayselct));groupdays[2].alpha=0;
        groupdays.push(this.add.sprite(260,420,'thu'+dayselct));groupdays[3].alpha=0;
        groupdays.push(this.add.sprite(325,400,'fri'+dayselct));groupdays[4].alpha=0;
        groupdays.push(this.add.sprite(395,420,'sat'+dayselct));groupdays[5].alpha=0;
        groupdays.push(this.add.sprite(455,400,'sun'+dayselct));groupdays[6].alpha=0;
        
        for(var k=0;k<groupdays.length;k++){
           randommonth.push(groupdays[k]); 
        }
        randommonth=Object.keys(randommonth);
        
        randommonth=this.shuffle(randommonth);
        
        displdays=this.fetchrandom(randommonth,"slide1");
      
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
            randomslno++;
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
            displdays=this.shuffle(displdays);
            if(displdays[0]<displdays[1] && displdays[1]<displdays[2])
            {
                var temp=displdays[0];
                displdays[0]=displdays[2];
                displdays[2]=temp;
            }
            group2=this.add.group();

            for(var i=0;i<displdays.length;i++)
            { 
                blankarray.push(blankbox[displdays[i]]);
                selmonth.push(((blankarray[i].name).substring(3)-1));

                if(i==2)
                {
                    selmonth.sort(function(a, b){return a-b});

                    for(var j=0;j<selmonth.length;j++)
                    {
                        sortArr1.push(this.add.sprite(0,0,'blankimg','blank'));
                        sortArr1[j].x=205+(183*j);
                        sortArr1[j].y=90;
                        sortArr1[j].alpha=1;
                        sortArr1[j].scale.setTo(0.99,0.95);
                        slidegroup.add(sortArr1[j]);
                        sortArr.push(blankbox[selmonth[j]]);
                        sortArr[j].name='day'+(selmonth[j]);
                        sortArr[j].x=232+(183*j);
                        sortArr[j].y=115;
                        sortArr[j].alpha=1;
                        sortArr[j].scale.setTo(0.55,0.55);
                        group2.add(sortArr[j]);

                    }

                }

                slidegroup.add(group2);
                groupdays[displdays[i]].x=205+(183*i);
                groupdays[displdays[i]].y=300;
                groupdays[displdays[i]].alpha=1;
                groupdays[displdays[i]].name="day"+displdays[i];
                groupdays[displdays[i]].inputEnabled = true;
                groupdays[displdays[i]].value="slide1";
                groupdays[displdays[i]].input.useHandCursor = true;
                groupdays[displdays[i]].input.enableDrag(true);
                groupdays[displdays[i]].events.onDragStart.add(this.onDragStart, this);
                groupdays[displdays[i]].events.onDragStop.add(this.onDragStop, this);
                slidegroup.add(groupdays[displdays[i]]);
            }
            _this.sceneCount++;
            this.getVoice(slideno);
           slidegroup.x = 960;
           var tween = this.add.tween(slidegroup);
           tween.to({ x: 0}, 0, 'Linear', true, 0);
           tween.onComplete.add(function(){
           },this); 
        }
    },
    
    slide2:function(){
        //this.getVoice(slideno); 
        groupdays=new Array();
        displdays=new Array();
        selectedarray=new Array();
        group2=this.add.group();
        slidegroup=this.add.group();
        sl2no++;
        var main_image;
        var mon_graphics=this.add.graphics(0,0);
        mon_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		mon_graphics.beginFill(0xFF700B, 1);
		mon_graphics.drawRect(126,290,65,80);
		mon_graphics.boundsPadding = 0;
        mon_graphics.name="day0";
        mon_graphics.alpha=0;
        
        var tue_graphics=this.add.graphics(0,0);
        tue_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		tue_graphics.beginFill(0xFF700B, 1);
		tue_graphics.drawRect(233,290,65,80);
		tue_graphics.boundsPadding = 0;
        tue_graphics.name="day1";
        tue_graphics.alpha=0;
        
        var wed_graphics=this.add.graphics(0,0);
        wed_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		wed_graphics.beginFill(0xFF700B, 1);
		wed_graphics.drawRect(340,290,65,80);
		wed_graphics.boundsPadding = 0;
        wed_graphics.name="day2";
        wed_graphics.alpha=0;
        
        var thu_graphics=this.add.graphics(0,0);
        thu_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		thu_graphics.beginFill(0xFF700B, 1);
		thu_graphics.drawRect(445,290,65,80);
		thu_graphics.boundsPadding = 0;
        thu_graphics.name="day3";
        thu_graphics.alpha=0;
        
        var fri_graphics=this.add.graphics(0,0);
        fri_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		fri_graphics.beginFill(0xFF700B, 1);
		fri_graphics.drawRect(552,290,65,80);
		fri_graphics.boundsPadding = 0;
        fri_graphics.name="day4";
        fri_graphics.alpha=0;
        
        var sat_graphics=this.add.graphics(0,0);
        sat_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		sat_graphics.beginFill(0xFF700B, 1);
		sat_graphics.drawRect(659,290,65,80);
		sat_graphics.boundsPadding = 0;
        sat_graphics.name="day5";
        sat_graphics.alpha=0;
        
        var sun_graphics=this.add.graphics(0,0);
        sun_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		sun_graphics.beginFill(0xFF700B, 1);
		sun_graphics.drawRect(765,290,65,80);
		sun_graphics.boundsPadding = 0;
        sun_graphics.name="day6";
        sun_graphics.alpha=0;
        
        group2.add(mon_graphics);
        group2.add(tue_graphics);
        group2.add(wed_graphics);
        group2.add(thu_graphics);
        group2.add(fri_graphics);
        group2.add(sat_graphics);
        group2.add(sun_graphics);

        if(sl2no==1)
        {
            var dayselarr=[1,2,3,4,5,6];
            dayselarr=this.shuffle(dayselarr);
            dayselect=dayselarr[0];
            if(dayselect==1)
                main_image=this.add.sprite(110,85,'main_image1');
            else if(dayselect==2)
                main_image=this.add.sprite(110,74,'main_image2');
            else if(dayselect==3)
                main_image=this.add.sprite(110,74,'main_image3'); 
            else if(dayselect==4)
                main_image=this.add.sprite(110,74,'main_image4'); 
            else if(dayselect==5)
                main_image=this.add.sprite(110,74,'main_image5'); 
            else if(dayselect==6)
                main_image=this.add.sprite(110,74,'main_image6'); 
            
            slidegroup.add(main_image);
        }
        
        groupdays.push(this.add.sprite(85,400,'mon'+dayselect));groupdays[0].alpha=0;
        groupdays.push(this.add.sprite(200,410,'tue'+dayselect));groupdays[1].alpha=0;
        groupdays.push(this.add.sprite(315,400,'wed'+dayselect));groupdays[2].alpha=0;
        groupdays.push(this.add.sprite(430,410,'thu'+dayselect));groupdays[3].alpha=0;
        groupdays.push(this.add.sprite(545,400,'fri'+dayselect));groupdays[4].alpha=0;
        groupdays.push(this.add.sprite(660,410,'sat'+dayselect));groupdays[5].alpha=0;
        groupdays.push(this.add.sprite(775,400,'sun'+dayselect));groupdays[6].alpha=0;
        
        displdays=Object.keys(groupdays);
        displdays=this.shuffle(displdays);

        for(var i=0;i<displdays.length;i++)
        {
            groupdays[displdays[i]].name="day"+(displdays[i]);
            groupdays[displdays[i]].value="slide2";
            groupdays[displdays[i]].x=85+(115*i);
            if(i==0 || i==2 || i==4 || i==6)
                groupdays[displdays[i]].y=400;
            else
                groupdays[displdays[i]].y=410;
            groupdays[displdays[i]].alpha=1;
            groupdays[displdays[i]].height+=5;
            groupdays[displdays[i]].width+=2;
            groupdays[displdays[i]].inputEnabled = true;
            groupdays[displdays[i]].input.useHandCursor = true;
            groupdays[displdays[i]].input.enableDrag(true);
            groupdays[displdays[i]].events.onDragStart.add(this.onDragStart, this);
            groupdays[displdays[i]].events.onDragStop.add(this.onDragStop, this);
            slidegroup.add(groupdays[i]);
        }
        _this.sceneCount++;
        this.getVoice(slideno);
       slidegroup.add(group2);
       slidegroup.x = 960;
       var tween = this.add.tween(slidegroup);
       tween.to({ x: 0}, 0, 'Linear', true, 0);
       tween.onComplete.add(function(){
          // this.getslides(slno);
       },this); 
    },
  
    fetchrandom: function(array,slide){
         var count=0;
         for (var i=0;i<array.length;i++){
            
             if(array[i]!="undefined")
             {
                     count++;
                     
                     if(slide=="slide1")
                     {
                        selectedarray.push(array[i]); 
                            return selectedarray;
                     }
                    else
                    {
                        selectedarray.push(array[i]); 
                        if(count == 12){
                          return selectedarray;
                        }
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
            
            //console.log("drag stop");
            target.width+=13;
          
            _this.snapSound = _this.add.audio('snapSound');
            _this.snapSound.play();
            for(var h=0;h<group2.length;h++)
            {
                if(this.checkOverlap(target,group2.getChildAt(h)))
                    {    noofAttempts++;  
                        if(target.name==group2.getChildAt(h).name)
                        {
                            //console.log("matched");
                            if(target.value=="slide1")
                            {
                                correctflag++;
                                target.x=Number(group2.getChildAt(h).x)-27;//-27
                                target.y=Number(group2.getChildAt(h).y)-25;//-25
                                
                                //console.log("target x==="+target.x);
                                //console.log("target y==="+target.y);
                            }
                            else
                            {
                                correctflag2++;
                                target.x=110+(h*106);
                                target.y=277;
                                
                            }
                            target.inputEnabled=false;
                            break;
                        }
                        else
                        {
                            //console.log("not matched");
                             _this.wmusic1 = _this.add.audio('waudio');
		                      _this.wmusic1.play();
                            shake.shake(10,target);
                            if(target.value=="slide1")
                            {
                                
                                if(target==groupdays[displdays[0]])
                                {
                                    target.x=205+(183*0);
                                    target.y=300;
                                }
                                else if(target==groupdays[displdays[1]])
                                {
                                    target.x=205+(183*1);
                                    target.y=300;
                                }
                                else if(target==groupdays[displdays[2]])
                                {
                                    target.x=205+(183*2);
                                    target.y=300;
                                }
                            }
                            else
                            {
                                if(target==groupdays[displdays[0]])
                                {
                                    target.x=85+(115*0);
                                    target.y=400;
                                }
                                else if(target==groupdays[displdays[1]])
                                {
                                    target.x=85+(115*1);
                                    target.y=410;
                                }
                                else if(target==groupdays[displdays[2]])
                                {
                                    target.x=85+(115*2);
                                    target.y=400;
                                }
                                else if(target==groupdays[displdays[3]])
                                {
                                    target.x=85+(115*3);
                                    target.y=410;
                                }
                                else if(target==groupdays[displdays[4]])
                                {
                                    target.x=85+(115*4);
                                    target.y=400;
                                }
                                else if(target==groupdays[displdays[5]])
                                {
                                    target.x=85+(115*5);
                                    target.y=410;
                                }
                                else if(target==groupdays[displdays[6]])
                                {
                                    target.x=85+(115*6);
                                    target.y=400;
                                }
                                 
                            }
                            
                          break;
                        }
                        
                    }
               
                }
            if(target.value=="slide1")
            {
                if(correctflag==3)
                {
                   _this.cmusic1 = _this.add.audio('celebr');
		          _this.cmusic1.play();
                    correctflag=0;
                    this.correctans(target);  
                }
            }
            else if(target.value=="slide2")
            {
                if(correctflag2==7)
                {
                    _this.cmusic1 = _this.add.audio('celebr');
		            _this.cmusic1.play();
                    correctflag2=0;
                    this.correctans(target);  
                }
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
        
        _this.speakerbtn.inputEnabled=false;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.cmusic1 = _this.add.audio('celebr');
		_this.cmusic1.play();
        var starAnim = starsGroup.getChildAt(count);
		starAnim.smoothed = false;
    	var anim = starAnim.animations.add('star');
		anim.play();
        count++;
        if(target.value=="slide1")
        {
            var tweendown = this.add.tween(slidegroup);
            tweendown.to({ y: 100}, 0, 'Linear', true, 0);
            glow=this.add.sprite(0,0,'glow');
            glow.height-=58;
            glow.width+=10;
            glow.alpha=0;
            tweendown.onComplete.add(function(){
                this.addGlowToSprite('slide1');
            },this);
        }
        else if(target.value=="slide2")
        {
            var tweendown = this.add.tween(slidegroup);
            tweendown.to({ y: 70}, 0, 'Linear', true, 0);
            glow=this.add.sprite(0,0,'glow');
            glow.height+=107;
            glow.width+=770;
            glow.alpha=0;
            tweendown.onComplete.add(function(){
                this.addGlowToSprite('slide2');
            },this);
        }
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
                this.state.start('grade5_2level2');
            }
            
            },this);
        },this);
        
		
    },
    
    addGlowToSprite:function(slide){
        if(slide=="slide1")
        {
            glow.x=176+(0*180);
            glow.y=163;
            glow.alpha=1;
            this.time.events.add(700,function(){
                glow.x=176+(1*180);
                glow.y=163;
                glow.alpha=1;
                this.time.events.add(700,function(){
                    glow.x=176+(2*180);
                    glow.y=163;
                    glow.alpha=1;
                },this);
            },this); 
        }
        else
        {
            if(dayselect==1)
            {
                glow.x=-20;
                glow.y=108;
                glow.alpha=1;
            }
            else
            {
                glow.x=-20;
                glow.y=103;
                glow.alpha=1;
            }
            
            
        }
            
    },
    
    update:function(){
       
    },
    
    getVoice:function(slideno){
    this.stopVoice();
        //console.log("get Voice "+slideno);
         _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(slideno)
		{
			case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6:_this.questionid = "5.2_2#SCR-"+_this.sceneCount;
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
                        break;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:_this.questionid = "5.2_1#SCR-"+_this.sceneCount;
                    if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/5.2/English/5.2_1.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/5.2/Hindi/5.2_1.mp3");
                        }
                        else
                        {
                            _this.src.setAttribute("src", "questionSounds/5.2/Kannada/5.2_1.mp3");
                        }
                        break;
        }
          _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },
        
    stopVoice:function(){
       // this.stopVoice();
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
 count = null;
 groupdays = null;
 randommonth = null;
 selectedarray = null;
 displdays = null;
 blankarray = null;
 blankbox = null;
 group2 = null;
 sortArr = null;
 sortArr1 = null;
 sortedArray = null;
 correctflag = null;
 correctflag2 = null;
 slidegroup = null;
 selmonth = null;
 slideno = null;
 randomslno = null;
 dayselect = null;
 chkrandom = null;
 chkflag,chkflag1 = null;
 chknumb = null;
noofAttempts = null;
timer = null;
AnsTimerCount = null;
}
    
    
            
};