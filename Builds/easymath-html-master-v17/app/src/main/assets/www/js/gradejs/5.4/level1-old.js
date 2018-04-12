Game.grade5_4level1=function(){};

var background;
var score = 0;
var sl1no;
var sl2no;
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
var sortArr1=new Array();
var sortedArray;
var correctflag=0;
var correctflag2=0;
var slidegroup;
var selmonth=new Array();
var randomslno=0;
var glow;
var chknumb;
var chkflag=0,chkflag1=0;
var noofAttempts;
var timer;
var AnsTimerCount;
    
    Game.grade5_4level1.prototype={

    init:function(game)
    {
        _this = this;
        
        _this.gameid = "5.4A";
        
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
        sl1no=0;
        sl2no=0;
        count=0;
        slidearray=new Array();

         _this.sceneCount=0;
         sortArr=new Array();
         sortArr1=new Array();

         correctflag=0;
         correctflag2=0;
        
         selmonth=new Array();
         randomslno=0;
         
         chkflag=0;
         chkflag1=0;

        slidearray1=[1,2,3,4,5];
        slidearray2=[6,7,8];
        slidearray1 = this.shuffle(slidearray1);		
        slidearray2 = this.shuffle(slidearray2);		
        chknumb=new Array();
        shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
        
		
		
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
            _this.getVoice(randomslno-1);
            
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
        if(randomslno==0)
        {
            slideno=slidearray2[sl2no];
            randomslno++;
        }
        else
        {
            slideno=slidearray1[sl1no];
        }
            
    /*    _this.speakerbtn.events.onInputDown.add(function(){
            this.stopVoice();
            this.getVoice(randomslno-1);
        },this);*/
        
		switch(slideno)
		{  
			case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:this.slide1(); break;
            case 6:
            case 7:
            case 8:this.slide2(); break;
                
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
        sortArr1=new Array();
        
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
        
        displmonth=this.fetchrandom(randommonth,"slide1");
        if(chknumb.includes(displmonth[0]) && chkflag<=30)
        {
            chkflag++;
           // //console.log("already exists"+displmonth[0]);
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
            sl1no--;
           
           this.getslides();
        }
        else if((displmonth[0]==0 || displmonth[0]==11) && chkflag1<=30)
        {
            chkflag1++;
            ////console.log("dont repeat"+displmonth[0]);
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
            sl1no--;
          
           this.getslides();
        }
        else
        {
            randomslno++;
            ////console.log("not exists"+displmonth[0]);
            chknumb.push(displmonth[0]);
            if(displmonth[0]!=0 && displmonth[0]<=10)
            {
                displmonth.push(Number(displmonth[0])+1);
                displmonth.push(Number(displmonth[0])-1);
            }
            else if(displmonth[0]==11)
            {
                displmonth.push(Number(displmonth[0])-1);
                displmonth.push(Number(displmonth[0])-2);
            }
            else if(displmonth[0]==0)
            {
                displmonth.push(Number(displmonth[0])+1);
                displmonth.push(Number(displmonth[0])+2);
            }

            group2=this.add.group();
            displmonth=this.shuffle(displmonth);
           // //console.log("displmonth before========"+displmonth);
            if(displmonth[0]<displmonth[1] && displmonth[1]<displmonth[2])
            {
                var temp=displmonth[0];
                displmonth[0]=displmonth[2];
                displmonth[2]=temp;
            }
         //   //console.log("displmonth after========"+displmonth);
            for(var i=0;i<displmonth.length;i++)
            { 
                blankarray.push(blankbox[displmonth[i]]);
                selmonth.push(((blankarray[i].name).substring(5)-1));

                if(i==2)
                    {
                        selmonth.sort(function(a, b){return a-b});

                        for(var j=0;j<selmonth.length;j++)
                        {
                            sortArr1.push(this.add.sprite(0,0,'Level54_main_imageanim','Symbol 29 instance 10000'));
                            sortArr1[j].x=205+(183*j);
                            sortArr1[j].y=90;
                            sortArr1[j].alpha=1;
                            sortArr1[j].scale.setTo(0.99,0.95);
                            slidegroup.add(sortArr1[j]);
                            sortArr.push(blankbox[selmonth[j]]);
                            sortArr[j].name='month'+(selmonth[j]);
                            sortArr[j].x=232+(183*j);
                            sortArr[j].y=115;
                            sortArr[j].alpha=1;
                            sortArr[j].scale.setTo(0.55,0.55);
                            group2.add(sortArr[j]);

                        }

                    }

                slidegroup.add(group2);
                groupmonth[displmonth[i]].x=205+(183*i);
                groupmonth[displmonth[i]].y=300;
                groupmonth[displmonth[i]].alpha=1;
                groupmonth[displmonth[i]].name="month"+displmonth[i];
                groupmonth[displmonth[i]].inputEnabled = true;
                groupmonth[displmonth[i]].value="slide1";
                groupmonth[displmonth[i]].input.useHandCursor = true;
                groupmonth[displmonth[i]].input.enableDrag(true);
                groupmonth[displmonth[i]].events.onDragStart.add(this.onDragStart, this);
                groupmonth[displmonth[i]].events.onDragStop.add(this.onDragStop, this);
                slidegroup.add(groupmonth[displmonth[i]]);
            }
            // _this.sceneCount++;
          this.getVoice(randomslno); 
           slidegroup.x = 960;
           var tween = this.add.tween(slidegroup);
           tween.to({ x: 0}, 0, 'Linear', true, 0);
           tween.onComplete.add(function(){
           },this); 
        }
    },
    
    slide2:function(){
        this.getVoice(randomslno); 
        groupmonth=new Array();
        displmonth=new Array();
        selectedarray=new Array();
        group2=this.add.group();
        slidegroup=this.add.group();
        sl2no++; 
        var main_image=this.add.sprite(55,100,'Level54_main_image');
        slidegroup.add(main_image);
        var jan_graphics=this.add.graphics(0,0);
        jan_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		jan_graphics.beginFill(0xFF700B, 1);
		jan_graphics.drawRect(74,116,110,110);
		jan_graphics.boundsPadding = 0;
        jan_graphics.name="month0";
        jan_graphics.alpha=0;

        var feb_graphics=this.add.graphics(0,0);
        feb_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		feb_graphics.beginFill(0xFF700B, 1);
		feb_graphics.drawRect(214,116,110,110);
		feb_graphics.boundsPadding = 0;
        feb_graphics.name="month1";
        feb_graphics.alpha=0;
        
        var mar_graphics=this.add.graphics(0,0);
        mar_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		mar_graphics.beginFill(0xFF700B, 1);
		mar_graphics.drawRect(354,116,110,110);
		mar_graphics.boundsPadding = 0;
        mar_graphics.name="month2";
        mar_graphics.alpha=0;
        
        var apr_graphics=this.add.graphics(0,0);
        apr_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		apr_graphics.beginFill(0xFF700B, 1);
		apr_graphics.drawRect(498,116,110,110);
		apr_graphics.boundsPadding = 0;
        apr_graphics.name="month3";
        apr_graphics.alpha=0;
        
        var may_graphics=this.add.graphics(0,0);
        may_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		may_graphics.beginFill(0xFF700B, 1);
		may_graphics.drawRect(638,116,110,110);
		may_graphics.boundsPadding = 0;
        may_graphics.name="month4";
        may_graphics.alpha=0;
        
        var jun_graphics=this.add.graphics(0,0);
        jun_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		jun_graphics.beginFill(0xFF700B, 1);
		jun_graphics.drawRect(780,116,110,110);
		jun_graphics.boundsPadding = 0;
        jun_graphics.name="month5";
        jun_graphics.alpha=0;
        
        var july_graphics=this.add.graphics(0,0);
        july_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		july_graphics.beginFill(0xFF700B, 1);
		july_graphics.drawRect(74,258,110,110);
		july_graphics.boundsPadding = 0;
        july_graphics.name="month6";
        july_graphics.alpha=0;
        
        var aug_graphics=this.add.graphics(0,0);
        aug_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		aug_graphics.beginFill(0xFF700B, 1);
		aug_graphics.drawRect(214,258,110,110);
		aug_graphics.boundsPadding = 0;
        aug_graphics.name="month7";
        aug_graphics.alpha=0;
        
        var sep_graphics=this.add.graphics(0,0);
        sep_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		sep_graphics.beginFill(0xFF700B, 1);
		sep_graphics.drawRect(354,258,110,110);
		sep_graphics.boundsPadding = 0;
        sep_graphics.name="month8";
        sep_graphics.alpha=0;
        
        var oct_graphics=this.add.graphics(0,0);
        oct_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		oct_graphics.beginFill(0xFF700B, 1);
		oct_graphics.drawRect(498,258,110,110);
		oct_graphics.boundsPadding = 0;
        oct_graphics.name="month9";
        oct_graphics.alpha=0;
        
        var nov_graphics=this.add.graphics(0,0);
        nov_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		nov_graphics.beginFill(0xFF700B, 1);
		nov_graphics.drawRect(638,258,110,110);
		nov_graphics.boundsPadding = 0;
        nov_graphics.name="month10";
        nov_graphics.alpha=0;
        
        var dec_graphics=this.add.graphics(0,0);
        dec_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		dec_graphics.beginFill(0xFF700B, 1);
		dec_graphics.drawRect(780,258,110,110);
		dec_graphics.boundsPadding = 0;
        dec_graphics.name="month11";
        dec_graphics.alpha=0;
        
        group2.add(jan_graphics);
        group2.add(feb_graphics);
        group2.add(mar_graphics);
        group2.add(apr_graphics);
        group2.add(may_graphics);
        group2.add(jun_graphics);
        group2.add(july_graphics);
        group2.add(aug_graphics);
        group2.add(sep_graphics);
        group2.add(oct_graphics);
        group2.add(nov_graphics);
        group2.add(dec_graphics);
        
        groupmonth.push(this.add.sprite(60,400,'Level54_JAN'));groupmonth[0].alpha=0;
        groupmonth.push(this.add.sprite(130,420,'Level54_FEB'));groupmonth[1].alpha=0;
        groupmonth.push(this.add.sprite(190,400,'Level54_MAR'));groupmonth[2].alpha=0;
        groupmonth.push(this.add.sprite(260,420,'Level54_APR'));groupmonth[3].alpha=0;
        groupmonth.push(this.add.sprite(325,400,'Level54_MAY'));groupmonth[4].alpha=0;
        groupmonth.push(this.add.sprite(395,420,'Level54_JUNE'));groupmonth[5].alpha=0;
        groupmonth.push(this.add.sprite(455,400,'Level54_JULY'));groupmonth[6].alpha=0;
        groupmonth.push(this.add.sprite(525,420,'Level54_AUG'));groupmonth[7].alpha=0;
        groupmonth.push(this.add.sprite(585,400,'Level54_SEP'));groupmonth[8].alpha=0;
        groupmonth.push(this.add.sprite(655,420,'Level54_OCT'));groupmonth[9].alpha=0;
        groupmonth.push(this.add.sprite(715,400,'Level54_NOV'));groupmonth[10].alpha=0;
        groupmonth.push(this.add.sprite(790,420,'Level54_DEC'));groupmonth[11].alpha=0;
        displmonth=Object.keys(groupmonth);
        displmonth=this.shuffle(displmonth);
        for(var i=0;i<displmonth.length;i++)
        {
            groupmonth[displmonth[i]].name="month"+(displmonth[i]);
            groupmonth[displmonth[i]].value="slide2";
            if(i==0){groupmonth[displmonth[i]].x=60;groupmonth[displmonth[i]].y=400;}
            else if(i==1){groupmonth[displmonth[i]].x=130;groupmonth[displmonth[i]].y=420;}
            else if(i==2){groupmonth[displmonth[i]].x=190;groupmonth[displmonth[i]].y=400;}
            else if(i==3){groupmonth[displmonth[i]].x=260;groupmonth[displmonth[i]].y=420;}
            else if(i==4){groupmonth[displmonth[i]].x=325;groupmonth[displmonth[i]].y=400;}
            else if(i==5){groupmonth[displmonth[i]].x=395;groupmonth[displmonth[i]].y=420;}
            else if(i==6){groupmonth[displmonth[i]].x=455;groupmonth[displmonth[i]].y=400;}
            else if(i==7){groupmonth[displmonth[i]].x=525;groupmonth[displmonth[i]].y=420;}
            else if(i==8){groupmonth[displmonth[i]].x=585;groupmonth[displmonth[i]].y=400;}
            else if(i==9){groupmonth[displmonth[i]].x=655;groupmonth[displmonth[i]].y=420;}
            else if(i==10){groupmonth[displmonth[i]].x=715;groupmonth[displmonth[i]].y=400;}
            else if(i==11){groupmonth[displmonth[i]].x=790;groupmonth[displmonth[i]].y=420;}
            groupmonth[displmonth[i]].alpha=1;
            groupmonth[displmonth[i]].inputEnabled = true;
            groupmonth[displmonth[i]].input.useHandCursor = true;
            groupmonth[displmonth[i]].input.enableDrag(true);
            groupmonth[displmonth[i]].events.onDragStart.add(this.onDragStart, this);
            groupmonth[displmonth[i]].events.onDragStop.add(this.onDragStop, this);
            
            slidegroup.add(groupmonth[i]);
        }
        // _this.sceneCount++;
       slidegroup.add(group2);
       slidegroup.x = 960;
       var tween = this.add.tween(slidegroup);
       tween.to({ x: 0}, 0, 'Linear', true, 0);
       tween.onComplete.add(function(){
         
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
                res_id: "Level54_"+target.name, 
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
                res_id: "Level54_"+target.name, 
                access_token: window.acctkn
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            target.width+=13;
             _this.snapSound = _this.add.audio('snapSound');
             _this.snapSound.play();
            for(var h=0;h<group2.length;h++)
            {
                //console.log("target name=="+target.name);
                //console.log("group2.getChildAt(h).name=="+group2.getChildAt(h).name);
                if(this.checkOverlap(target,group2.getChildAt(h)))
                    {
                       // noofAttempts++;
                        //console.log("overlapped name==");
                        if(target.name==group2.getChildAt(h).name)
                        {
                            //console.log("matched==");
                            if(target.value=="slide1")
                            {
                                correctflag++;
                                target.x=Number(group2.getChildAt(h).x)-27;
                                target.y=Number(group2.getChildAt(h).y)-25;
                            }
                            else
                            {
                                correctflag2++;
                                if(h==0)
                                {
                                    target.x=75;target.y=119;
                                }
                                else if(h==1)
                                {
                                    target.x=216;target.y=119;
                                }
                                else if(h==2)
                                {
                                    target.x=358;target.y=119;
                                }
                                else if(h==3)
                                {
                                    target.x=500;target.y=119;
                                }
                                else if(h==4)
                                {
                                    target.x=641;target.y=119;
                                }
                                else if(h==5)
                                {
                                    target.x=783;target.y=119;
                                }
                                else if(h==6)
                                {
                                    target.x=75;target.y=260;
                                }
                                else if(h==7)
                                {
                                    target.x=216;target.y=260;
                                }
                                else if(h==8)
                                {
                                    target.x=358;target.y=260;
                                }
                                else if(h==9)
                                {
                                    target.x=500;target.y=260;
                                }
                                else if(h==10)
                                {
                                    target.x=641;target.y=260;
                                }
                                else if(h==11)
                                {
                                    target.x=783;target.y=260;
                                }
                            }
                            target.inputEnabled=false;
                            break;
                        }
                        else
                        {
                            //console.log("not matched==");
                           // noofAttempts++;
                            _this.waudio = _this.add.audio('waudio');
                            _this.waudio.play();
                            shake.shake(10,target);
                            if(target.value=="slide1")
                            {
                                if(target==groupmonth[displmonth[0]])
                                {
                                    target.x=205+(183*0);
                                    target.y=300;
                                }
                                else if(target==groupmonth[displmonth[1]])
                                {
                                    target.x=205+(183*1);
                                    target.y=300;
                                }
                                else if(target==groupmonth[displmonth[2]])
                                {
                                    target.x=205+(183*2);
                                    target.y=300;
                                }
                            }
                            else
                            {
                                if(target==groupmonth[displmonth[0]])
                                {
                                    target.x=60;target.y=400;
                                }
                                else if(target==groupmonth[displmonth[1]])
                                {
                                    target.x=130;target.y=420;
                                }
                                else if(target==groupmonth[displmonth[2]])
                                {
                                    target.x=190;target.y=400;
                                }
                                else if(target==groupmonth[displmonth[3]])
                                {
                                    target.x=260;target.y=420;
                                }
                                else if(target==groupmonth[displmonth[4]])
                                {
                                    target.x=325;target.y=400;
                                }
                                else if(target==groupmonth[displmonth[5]])
                                {
                                    target.x=395;target.y=420;
                                }
                                else if(target==groupmonth[displmonth[6]])
                                {
                                    target.x=455;target.y=400;
                                }
                                else if(target==groupmonth[displmonth[7]])
                                {
                                    target.x=525;target.y=420;
                                }
                                else if(target==groupmonth[displmonth[8]])
                                {
                                    target.x=585;target.y=400;
                                }
                                else if(target==groupmonth[displmonth[9]])
                                {
                                    target.x=655;target.y=420;
                                }
                                else if(target==groupmonth[displmonth[10]])
                                {
                                    target.x=715;target.y=400;
                                }
                                else if(target==groupmonth[displmonth[11]])
                                {
                                    target.x=790;target.y=420;
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
                    _this.celebr = _this.add.audio('celebr');
                    _this.celebr.play();
                    correctflag=0;
                    this.correctans(target);  
                }
            }
            else if(target.value=="slide2")
            {
                if(correctflag2==12)
                {
                    _this.celebr = _this.add.audio('celebr');
                    _this.celebr.play();
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
        noofAttempts++;
                    if(timer)
                    {
                        timer.stop();
					   timer = null; 
                    }
                    _this.sceneCount++;
				_this.questionid = "5.4_1#SCR-"+_this.sceneCount;
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
        _this.celebr = _this.add.audio('celebr');
            _this.celebr.play();
        var starAnim = starsGroup.getChildAt(count);
		starAnim.smoothed = false;
    	var anim = starAnim.animations.add('star');
		anim.play();
        count++;
        var tweendown = this.add.tween(slidegroup);
        if(target.value=="slide1")
            {
                glow=this.add.sprite(0,0,'Level54_glow');
                glow.height-=52;
                glow.width+=6;
                glow.alpha=0;
                tweendown.to({ y: 100}, 0, 'Linear', true, 0);
                tweendown.onComplete.add(function(){
                this.addGlowToSprite('slide1');
                },this);
            }
        else
            {
                glow=this.add.sprite(0,0,'Level54_glow');
                glow.height+=86;
                glow.width+=900;
                glow.alpha=0;
                tweendown.to({ y: 50}, 0, 'Linear', true, 0);
                tweendown.onComplete.add(function(){
                this.addGlowToSprite('slide2');
                },this);
            }
            this.time.events.add(3000,function(){
            glow.destroy();
            var tween = this.add.tween(slidegroup);
            tween.to({ x: -1000}, 0, 'Linear', true, 0);
            tween.onComplete.add(function(){
            if(count<6){  
                this.getslides();
            }
            else
            {
               // this.stopVoice();
                randomslno=0;
                chkflag=0;
                chkflag1=0;
                chknumb=new Array();
                this.state.start('grade5_4level2');
            }
            
            },this);
        },this);
        
        
    },
    
    update:function(){
       
    },
    
    getVoice:function(randomslno){
        this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(randomslno)
        {
            case 0:
            case 2:
            case 4:
            case 1:
            case 3:
            case 5: 
                    if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/5.4/English/5.4_1.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/5.4/Hindi/5.4_1.mp3");
                        }
                        else
                        {
                            _this.src.setAttribute("src", "questionSounds/5.4/Kannada/5.4_1.mp3");
                        }
                        break;
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
    
    addGlowToSprite:function(arg){
        if(arg=="slide1")
        {
            glow.x=176+(0*180);
            glow.y=160;
            glow.alpha=1;
            this.time.events.add(700,function(){
                glow.x=176+(1*180);
                glow.y=160;
                glow.alpha=1;
                this.time.events.add(700,function(){
                    glow.x=176+(2*180);
                    glow.y=160;
                    glow.alpha=1;
                },this);
            },this); 
        }
        else
        {
            glow.x=-80;
            glow.y=103;
            glow.alpha=1;
        }
    },
        
shutdown:function(){
    
     this.stopVoice();
    /* background = null;
     score  = null;
     sl1no = null;
     sl2no = null;
     slidearray = null;
     starsGroup = null;
     count = null;
     groupmonth = null;
     randommonth = null;
     selectedarray = null;
     displmonth = null;
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
     randomslno = null;
     glow = null;
     chknumb = null;
     chkflag=chkflag1 = null;

     noofAttempts = null;
     timer = null;
     AnsTimerCount = null;*/
}
    
            
};