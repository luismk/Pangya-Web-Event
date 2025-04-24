var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var pangyauid = "";

function initializeEvent(eventId, success_callback, error_callback) {		
	events.ForwardPage = gamerage.web.host;
    events.LoginPage = "https://web.archive.org/web/20161106203406/http://gamerage.com/account/forms/login?gamecode=" + gamerage.web.gamecode + "&rurl=http://" + document.location.host + document.location.pathname;
    events.Init(eventId, function () {
		getPangYaUid(success_callback, error_callback);
		//getMyPoints(success_callback, error_callback);
    });
}

function getPangYaUid(success_callback, error_callback) {
	events.DoAction("&num=4&p1=ui2", function () {
        try {
            var result = events.ActionData;
			pangyauid = result[1][0][0][0];
            success_callback(result);
        } catch (e) {
            error_callback(e.toString());
        }
    });		
}

function getMyPoints(success_callback, error_callback) {
	events.DoAction("&num=1&p1=" + pangyauid, function () {
        try {
            var result = events.ActionData;
            success_callback(result);
        } catch (e) {
            error_callback(e.toString());
        }
    });
}

function getMyPointsHistory(pp_type, success_callback, error_callback) {
	events.DoAction("&num=2&p1=" + pangyauid + "&p2=" + pp_type, function () {
        try {
            var result = events.ActionData;
            success_callback(result);
        } catch (e) {
            error_callback(e.toString());
        }
    });
}

function clickPush(pp_type, success_callback, error_callback) {
	events.DoAction("&num=5&p1=" + pangyauid + "&p2=" + pp_type + "&p3=0&p4=0&rp=1", function () {
        try {
            var result = events.ActionData;
			//typeid = result[2][2];
			success_callback(result);
        } catch (e) {
            error_callback(e.toString());
        }
    });
}

function getItemRedeemStatus(success_callback, error_callback) {
	events.DoAction("&num=6&p1=0&p2=0&p3=0&p4=0&rp=1", function () {
        try {
            var result = events.ActionData;
            success_callback(result);
        } catch (e) {
            error_callback(e.toString());
        }
    });
}

function error_callback(msg) {
    alert(msg);
}

}
/*
     FILE ARCHIVED ON 20:34:06 Nov 06, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:31:14 Sep 21, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.618
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 14.065
  LoadShardBlock: 137.631 (3)
  PetaboxLoader3.datanode: 108.37 (4)
  PetaboxLoader3.resolve: 119.119 (2)
  load_resource: 114.498
*/