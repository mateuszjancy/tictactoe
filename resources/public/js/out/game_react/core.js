// Compiled by ClojureScript 0.0-2138
goog.provide('game_react.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
game_react.core.fetch_widgets = (function fetch_widgets(url){var c = cljs.core.async.chan.call(null);var c__6161__auto___9291 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_9277){var state_val_9278 = (state_9277[1]);if((state_val_9278 === 6))
{var inst_9275 = (state_9277[2]);var state_9277__$1 = state_9277;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9277__$1,inst_9275);
} else
{if((state_val_9278 === 5))
{var inst_9271 = (state_9277[2]);var inst_9272 = cljs.core.get.call(null,inst_9271,new cljs.core.Keyword(null,"body","body",1016933652));var inst_9273 = cljs.core.vec.call(null,inst_9272);var state_9277__$1 = state_9277;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9277__$1,6,c,inst_9273);
} else
{if((state_val_9278 === 4))
{var inst_9265 = (state_9277[7]);var state_9277__$1 = state_9277;var statearr_9279_9292 = state_9277__$1;(statearr_9279_9292[2] = inst_9265);
(statearr_9279_9292[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9278 === 3))
{var inst_9265 = (state_9277[7]);var inst_9268 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9265);var state_9277__$1 = state_9277;var statearr_9280_9293 = state_9277__$1;(statearr_9280_9293[2] = inst_9268);
(statearr_9280_9293[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9278 === 2))
{var inst_9265 = (state_9277[7]);var inst_9265__$1 = (state_9277[2]);var inst_9266 = cljs.core.seq_QMARK_.call(null,inst_9265__$1);var state_9277__$1 = (function (){var statearr_9281 = state_9277;(statearr_9281[7] = inst_9265__$1);
return statearr_9281;
})();if(inst_9266)
{var statearr_9282_9294 = state_9277__$1;(statearr_9282_9294[1] = 3);
} else
{var statearr_9283_9295 = state_9277__$1;(statearr_9283_9295[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9278 === 1))
{var inst_9263 = cljs_http.client.get.call(null,url);var state_9277__$1 = state_9277;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9277__$1,2,inst_9263);
} else
{return null;
}
}
}
}
}
}
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_9287 = [null,null,null,null,null,null,null,null];(statearr_9287[0] = state_machine__6147__auto__);
(statearr_9287[1] = 1);
return statearr_9287;
});
var state_machine__6147__auto____1 = (function (state_9277){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_9277);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e9288){if((e9288 instanceof Object))
{var ex__6150__auto__ = e9288;var statearr_9289_9296 = state_9277;(statearr_9289_9296[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9277);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9297 = state_9277;
state_9277 = G__9297;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_9277){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_9277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_9290 = f__6162__auto__.call(null);(statearr_9290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___9291);
return statearr_9290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return c;
});
game_react.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
game_react.core.widget = (function widget(p__9298,owner,opts){var map__9303 = p__9298;var map__9303__$1 = ((cljs.core.seq_QMARK_.call(null,map__9303))?cljs.core.apply.call(null,cljs.core.hash_map,map__9303):map__9303);var name = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"name","name",1017277949));if(typeof game_react.core.t9304 !== 'undefined')
{} else
{
/**
* @constructor
*/
game_react.core.t9304 = (function (name,map__9303,opts,owner,p__9298,widget,meta9305){
this.name = name;
this.map__9303 = map__9303;
this.opts = opts;
this.owner = owner;
this.p__9298 = p__9298;
this.widget = widget;
this.meta9305 = meta9305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
game_react.core.t9304.cljs$lang$type = true;
game_react.core.t9304.cljs$lang$ctorStr = "game-react.core/t9304";
game_react.core.t9304.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"game-react.core/t9304");
});
game_react.core.t9304.prototype.om$core$IRender$ = true;
game_react.core.t9304.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;return React.DOM.li(null,self__.name);
});
game_react.core.t9304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9306){var self__ = this;
var _9306__$1 = this;return self__.meta9305;
});
game_react.core.t9304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9306,meta9305__$1){var self__ = this;
var _9306__$1 = this;return (new game_react.core.t9304(self__.name,self__.map__9303,self__.opts,self__.owner,self__.p__9298,self__.widget,meta9305__$1));
});
game_react.core.__GT_t9304 = (function __GT_t9304(name__$1,map__9303__$2,opts__$1,owner__$1,p__9298__$1,widget__$1,meta9305){return (new game_react.core.t9304(name__$1,map__9303__$2,opts__$1,owner__$1,p__9298__$1,widget__$1,meta9305));
});
}
return (new game_react.core.t9304(name,map__9303__$1,opts,owner,p__9298,widget,null));
});
game_react.core.widget_list = (function widget_list(p__9307){var map__9312 = p__9307;var map__9312__$1 = ((cljs.core.seq_QMARK_.call(null,map__9312))?cljs.core.apply.call(null,cljs.core.hash_map,map__9312):map__9312);var widgets = cljs.core.get.call(null,map__9312__$1,new cljs.core.Keyword(null,"widgets","widgets",2354242081));if(typeof game_react.core.t9313 !== 'undefined')
{} else
{
/**
* @constructor
*/
game_react.core.t9313 = (function (widgets,map__9312,p__9307,widget_list,meta9314){
this.widgets = widgets;
this.map__9312 = map__9312;
this.p__9307 = p__9307;
this.widget_list = widget_list;
this.meta9314 = meta9314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
game_react.core.t9313.cljs$lang$type = true;
game_react.core.t9313.cljs$lang$ctorStr = "game-react.core/t9313";
game_react.core.t9313.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"game-react.core/t9313");
});
game_react.core.t9313.prototype.om$core$IRender$ = true;
game_react.core.t9313.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,game_react.core.widget,self__.widgets));
});
game_react.core.t9313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9315){var self__ = this;
var _9315__$1 = this;return self__.meta9314;
});
game_react.core.t9313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9315,meta9314__$1){var self__ = this;
var _9315__$1 = this;return (new game_react.core.t9313(self__.widgets,self__.map__9312,self__.p__9307,self__.widget_list,meta9314__$1));
});
game_react.core.__GT_t9313 = (function __GT_t9313(widgets__$1,map__9312__$2,p__9307__$1,widget_list__$1,meta9314){return (new game_react.core.t9313(widgets__$1,map__9312__$2,p__9307__$1,widget_list__$1,meta9314));
});
}
return (new game_react.core.t9313(widgets,map__9312__$1,p__9307,widget_list,null));
});
game_react.core.widget_box = (function widget_box(app,owner,opts){if(typeof game_react.core.t9358 !== 'undefined')
{} else
{
/**
* @constructor
*/
game_react.core.t9358 = (function (opts,owner,app,widget_box,meta9359){
this.opts = opts;
this.owner = owner;
this.app = app;
this.widget_box = widget_box;
this.meta9359 = meta9359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
game_react.core.t9358.cljs$lang$type = true;
game_react.core.t9358.cljs$lang$ctorStr = "game-react.core/t9358";
game_react.core.t9358.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"game-react.core/t9358");
});
game_react.core.t9358.prototype.om$core$IRender$ = true;
game_react.core.t9358.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h1(null,"Widgets"),om.core.build.call(null,game_react.core.widget_list,self__.app));
});
game_react.core.t9358.prototype.om$core$IWillMount$ = true;
game_react.core.t9358.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6161__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_9382){var state_val_9383 = (state_9382[1]);if((state_val_9383 === 8))
{var inst_9374 = (state_9382[2]);var state_9382__$1 = (function (){var statearr_9384 = state_9382;(statearr_9384[7] = inst_9374);
return statearr_9384;
})();var statearr_9385_9399 = state_9382__$1;(statearr_9385_9399[2] = null);
(statearr_9385_9399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9383 === 7))
{var inst_9366 = (state_9382[2]);var inst_9367 = cljs.core.pr_str.call(null,inst_9366);var inst_9368 = console.log(inst_9367);var inst_9369 = (function (){var widgets = inst_9366;return ((function (widgets,inst_9366,inst_9367,inst_9368,state_val_9383){
return (function (p1__9316_SHARP_){return cljs.core.assoc.call(null,p1__9316_SHARP_,new cljs.core.Keyword(null,"widgets","widgets",2354242081),widgets);
});
;})(widgets,inst_9366,inst_9367,inst_9368,state_val_9383))
})();var inst_9370 = om.core.update_BANG_.call(null,self__.app,inst_9369);var inst_9371 = new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_9372 = cljs.core.async.timeout.call(null,inst_9371);var state_9382__$1 = (function (){var statearr_9386 = state_9382;(statearr_9386[8] = inst_9370);
(statearr_9386[9] = inst_9368);
return statearr_9386;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9382__$1,8,inst_9372);
} else
{if((state_val_9383 === 6))
{var inst_9378 = (state_9382[2]);var state_9382__$1 = state_9382;var statearr_9387_9400 = state_9382__$1;(statearr_9387_9400[2] = inst_9378);
(statearr_9387_9400[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9383 === 5))
{var state_9382__$1 = state_9382;var statearr_9388_9401 = state_9382__$1;(statearr_9388_9401[2] = null);
(statearr_9388_9401[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9383 === 4))
{var inst_9363 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_9364 = game_react.core.fetch_widgets.call(null,inst_9363);var state_9382__$1 = state_9382;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9382__$1,7,inst_9364);
} else
{if((state_val_9383 === 3))
{var inst_9380 = (state_9382[2]);var state_9382__$1 = state_9382;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9382__$1,inst_9380);
} else
{if((state_val_9383 === 2))
{var state_9382__$1 = state_9382;if(true)
{var statearr_9389_9402 = state_9382__$1;(statearr_9389_9402[1] = 4);
} else
{var statearr_9390_9403 = state_9382__$1;(statearr_9390_9403[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9383 === 1))
{var state_9382__$1 = state_9382;var statearr_9391_9404 = state_9382__$1;(statearr_9391_9404[2] = null);
(statearr_9391_9404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_9395 = [null,null,null,null,null,null,null,null,null,null];(statearr_9395[0] = state_machine__6147__auto__);
(statearr_9395[1] = 1);
return statearr_9395;
});
var state_machine__6147__auto____1 = (function (state_9382){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_9382);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e9396){if((e9396 instanceof Object))
{var ex__6150__auto__ = e9396;var statearr_9397_9405 = state_9382;(statearr_9397_9405[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9382);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9406 = state_9382;
state_9382 = G__9406;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_9382){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_9382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_9398 = f__6162__auto__.call(null);(statearr_9398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto__);
return statearr_9398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return c__6161__auto__;
});
game_react.core.t9358.prototype.om$core$IInitState$ = true;
game_react.core.t9358.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.transact_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",2354242081)], null),(function (){return cljs.core.PersistentVector.EMPTY;
}));
});
game_react.core.t9358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9360){var self__ = this;
var _9360__$1 = this;return self__.meta9359;
});
game_react.core.t9358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9360,meta9359__$1){var self__ = this;
var _9360__$1 = this;return (new game_react.core.t9358(self__.opts,self__.owner,self__.app,self__.widget_box,meta9359__$1));
});
game_react.core.__GT_t9358 = (function __GT_t9358(opts__$1,owner__$1,app__$1,widget_box__$1,meta9359){return (new game_react.core.t9358(opts__$1,owner__$1,app__$1,widget_box__$1,meta9359));
});
}
return (new game_react.core.t9358(opts,owner,app,widget_box,null));
});
game_react.core.om_app = (function om_app(app,owner){if(typeof game_react.core.t9410 !== 'undefined')
{} else
{
/**
* @constructor
*/
game_react.core.t9410 = (function (owner,app,om_app,meta9411){
this.owner = owner;
this.app = app;
this.om_app = om_app;
this.meta9411 = meta9411;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
game_react.core.t9410.cljs$lang$type = true;
game_react.core.t9410.cljs$lang$ctorStr = "game-react.core/t9410";
game_react.core.t9410.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"game-react.core/t9410");
});
game_react.core.t9410.prototype.om$core$IRender$ = true;
game_react.core.t9410.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,game_react.core.widget_box,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",1014020321),"/widgets",new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397),2000], null)], null)));
});
game_react.core.t9410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9412){var self__ = this;
var _9412__$1 = this;return self__.meta9411;
});
game_react.core.t9410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9412,meta9411__$1){var self__ = this;
var _9412__$1 = this;return (new game_react.core.t9410(self__.owner,self__.app,self__.om_app,meta9411__$1));
});
game_react.core.__GT_t9410 = (function __GT_t9410(owner__$1,app__$1,om_app__$1,meta9411){return (new game_react.core.t9410(owner__$1,app__$1,om_app__$1,meta9411));
});
}
return (new game_react.core.t9410(owner,app,om_app,null));
});
om.core.root.call(null,game_react.core.app_state,game_react.core.om_app,document.getElementById("content"));

//# sourceMappingURL=core.js.map