gdjs.MenuCode = {};
gdjs.MenuCode.GDplayers4TextObjects1= [];
gdjs.MenuCode.GDplayers4TextObjects2= [];
gdjs.MenuCode.GDplayers4TextObjects3= [];
gdjs.MenuCode.GDplayers2TextObjects1= [];
gdjs.MenuCode.GDplayers2TextObjects2= [];
gdjs.MenuCode.GDplayers2TextObjects3= [];
gdjs.MenuCode.GDchoosePlayersObjects1= [];
gdjs.MenuCode.GDchoosePlayersObjects2= [];
gdjs.MenuCode.GDchoosePlayersObjects3= [];
gdjs.MenuCode.GDTopicObjects1= [];
gdjs.MenuCode.GDTopicObjects2= [];
gdjs.MenuCode.GDTopicObjects3= [];
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDplayers4Objects1= [];
gdjs.MenuCode.GDplayers4Objects2= [];
gdjs.MenuCode.GDplayers4Objects3= [];
gdjs.MenuCode.GDplayers2Objects1= [];
gdjs.MenuCode.GDplayers2Objects2= [];
gdjs.MenuCode.GDplayers2Objects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("players2Text"), gdjs.MenuCode.GDplayers2TextObjects2);
gdjs.copyArray(runtimeScene.getObjects("players4Text"), gdjs.MenuCode.GDplayers4TextObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDplayers2TextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers2TextObjects2[i].setColor("248;231;28");
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers4TextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers4TextObjects2[i].setColor("255;255;255");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("players2Text"), gdjs.MenuCode.GDplayers2TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("players4Text"), gdjs.MenuCode.GDplayers4TextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDplayers2TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers2TextObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers4TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers4TextObjects1[i].setColor("248;231;28");
}
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Topic"), gdjs.MenuCode.GDTopicObjects1);
gdjs.copyArray(runtimeScene.getObjects("choosePlayers"), gdjs.MenuCode.GDchoosePlayersObjects1);
gdjs.copyArray(runtimeScene.getObjects("players2"), gdjs.MenuCode.GDplayers2Objects1);
gdjs.copyArray(runtimeScene.getObjects("players2Text"), gdjs.MenuCode.GDplayers2TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("players4"), gdjs.MenuCode.GDplayers4Objects1);
gdjs.copyArray(runtimeScene.getObjects("players4Text"), gdjs.MenuCode.GDplayers4TextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDTopicObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTopicObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDTopicObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTopicObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.MenuCode.GDchoosePlayersObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDchoosePlayersObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDchoosePlayersObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDchoosePlayersObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers4Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers4Objects1[i].setCenterXInScene((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) + ((gdjs.MenuCode.GDplayers4Objects1[i].getWidth()) / 2) + 20);
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers2Objects1[i].setCenterXInScene((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.MenuCode.GDplayers2Objects1[i].getWidth()) / 2) - 20);
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers4TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers4TextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers4TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers4TextObjects1[i].setCenterPositionInScene((( gdjs.MenuCode.GDplayers4Objects1.length === 0 ) ? 0 :gdjs.MenuCode.GDplayers4Objects1[0].getCenterXInScene()),(( gdjs.MenuCode.GDplayers4Objects1.length === 0 ) ? 0 :gdjs.MenuCode.GDplayers4Objects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers2TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers2TextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers2TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers2TextObjects1[i].setCenterPositionInScene((( gdjs.MenuCode.GDplayers2Objects1.length === 0 ) ? 0 :gdjs.MenuCode.GDplayers2Objects1[0].getCenterXInScene()),(( gdjs.MenuCode.GDplayers2Objects1.length === 0 ) ? 0 :gdjs.MenuCode.GDplayers2Objects1[0].getCenterYInScene()));
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "logo");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Topic"), gdjs.MenuCode.GDTopicObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDTopicObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDTopicObjects1[i].getOpacity() <= 255 ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDTopicObjects1[k] = gdjs.MenuCode.GDTopicObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDTopicObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "logo") > 0.4;
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDTopicObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDTopicObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTopicObjects1[i].setOpacity(gdjs.MenuCode.GDTopicObjects1[i].getOpacity() + (5));
}
}{for(var i = 0, len = gdjs.MenuCode.GDTopicObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTopicObjects1[i].setY((gdjs.MenuCode.GDTopicObjects1[i].getY()) - 5);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "players");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Topic"), gdjs.MenuCode.GDTopicObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDTopicObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDTopicObjects1[i].getOpacity() == 255 ) {
        gdjs.MenuCode.condition0IsTrue_1.val = true;
        gdjs.MenuCode.GDTopicObjects1[k] = gdjs.MenuCode.GDTopicObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDTopicObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "players") > 0.4;
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("choosePlayers"), gdjs.MenuCode.GDchoosePlayersObjects1);
gdjs.copyArray(runtimeScene.getObjects("players2"), gdjs.MenuCode.GDplayers2Objects1);
gdjs.copyArray(runtimeScene.getObjects("players2Text"), gdjs.MenuCode.GDplayers2TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("players4"), gdjs.MenuCode.GDplayers4Objects1);
gdjs.copyArray(runtimeScene.getObjects("players4Text"), gdjs.MenuCode.GDplayers4TextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDchoosePlayersObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDchoosePlayersObjects1[i].setOpacity(gdjs.MenuCode.GDchoosePlayersObjects1[i].getOpacity() + (5));
}
}{for(var i = 0, len = gdjs.MenuCode.GDchoosePlayersObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDchoosePlayersObjects1[i].setY((gdjs.MenuCode.GDchoosePlayersObjects1[i].getY()) - 5);
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers4TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers4TextObjects1[i].setY(gdjs.MenuCode.GDplayers4TextObjects1[i].getY() - (5));
}
for(var i = 0, len = gdjs.MenuCode.GDplayers2TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers2TextObjects1[i].setY(gdjs.MenuCode.GDplayers2TextObjects1[i].getY() - (5));
}
for(var i = 0, len = gdjs.MenuCode.GDplayers4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers4Objects1[i].setY(gdjs.MenuCode.GDplayers4Objects1[i].getY() - (5));
}
for(var i = 0, len = gdjs.MenuCode.GDplayers2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers2Objects1[i].setY(gdjs.MenuCode.GDplayers2Objects1[i].getY() - (5));
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers4Objects1[i].setOpacity(gdjs.MenuCode.GDplayers4Objects1[i].getOpacity() + (5));
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers2Objects1[i].setOpacity(gdjs.MenuCode.GDplayers2Objects1[i].getOpacity() + (5));
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers4TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers4TextObjects1[i].setOpacity(gdjs.MenuCode.GDplayers4TextObjects1[i].getOpacity() + (5));
}
}{for(var i = 0, len = gdjs.MenuCode.GDplayers2TextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDplayers2TextObjects1[i].setOpacity(gdjs.MenuCode.GDplayers2TextObjects1[i].getOpacity() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Topic"), gdjs.MenuCode.GDTopicObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDTopicObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDTopicObjects1[i].getOpacity() == 255 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDTopicObjects1[k] = gdjs.MenuCode.GDTopicObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDTopicObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "logo");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("choosePlayers"), gdjs.MenuCode.GDchoosePlayersObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDchoosePlayersObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDchoosePlayersObjects1[i].getOpacity() == 255 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDchoosePlayersObjects1[k] = gdjs.MenuCode.GDchoosePlayersObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDchoosePlayersObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "players");
}}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Tab");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7));
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gamefield", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDplayers4TextObjects1.length = 0;
gdjs.MenuCode.GDplayers4TextObjects2.length = 0;
gdjs.MenuCode.GDplayers4TextObjects3.length = 0;
gdjs.MenuCode.GDplayers2TextObjects1.length = 0;
gdjs.MenuCode.GDplayers2TextObjects2.length = 0;
gdjs.MenuCode.GDplayers2TextObjects3.length = 0;
gdjs.MenuCode.GDchoosePlayersObjects1.length = 0;
gdjs.MenuCode.GDchoosePlayersObjects2.length = 0;
gdjs.MenuCode.GDchoosePlayersObjects3.length = 0;
gdjs.MenuCode.GDTopicObjects1.length = 0;
gdjs.MenuCode.GDTopicObjects2.length = 0;
gdjs.MenuCode.GDTopicObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDplayers4Objects1.length = 0;
gdjs.MenuCode.GDplayers4Objects2.length = 0;
gdjs.MenuCode.GDplayers4Objects3.length = 0;
gdjs.MenuCode.GDplayers2Objects1.length = 0;
gdjs.MenuCode.GDplayers2Objects2.length = 0;
gdjs.MenuCode.GDplayers2Objects3.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
