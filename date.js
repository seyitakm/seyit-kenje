(function(){
    var _id="e8bfc4b4e4009f79ca92f2539923d2b6";
    while(document.getElementById("timer"+_id)) _id=_id+"0";
    document.write("<div id='timer"+_id+"' style='min-width:280px;height:58px;'></div>");
    var _t=document.createElement("script");
    _t.src="//megatimer.ru/timer/timer.min.js?v=1";
    var _f=function(_k){
        var l=new MegaTimer(_id, {
            "view":[1,1,1,1],
            "type":{
                "currentType":"1",
                "params":{
                    "usertime":true,
                    "tz":"6",  // Bishkek Time (UTC+6)
                    "utc":1729310400000  // Time for 19 October 2024, 18:00 Bishkek time
                }
            },
            "design":{
                "type":"circle",
                "params":{
                    "width":"1",
                    "radius":"27",
                    "line":"solid",
                    "line-color":"#a8a8a8",
                    "background":"opacity",
                    "direction":"direct",
                    "number-font-family":{
                        "family":"Comfortaa",
                        "link":"<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size":"21",
                    "number-font-color":"black",
                    "separator-margin":"8",
                    "separator-on":false,
                    "separator-text":":",
                    "text-on":true,
                    "text-font-family":{
                        "family":"Arial"
                    },
                    "text-font-size":"9",
                    "text-font-color":"#a8a8a8"
                }
            },
            "designId":5,
            "theme":"white",
            "width":280,
            "height":58
        });
        if(_k != null) l.run();
    };
    _t.onload=_f;
    _t.onreadystatechange=function(){
        if(_t.readyState=="loaded") _f(1);
    };
    var _h=document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);
