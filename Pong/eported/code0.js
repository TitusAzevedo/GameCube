gdjs.GamefieldCode = {};
gdjs.GamefieldCode.GDBottomPointsObjects1_1final = [];

gdjs.GamefieldCode.GDLeftPointsObjects1_1final = [];

gdjs.GamefieldCode.GDRightPointsObjects1_1final = [];

gdjs.GamefieldCode.GDTopPointsObjects1_1final = [];

gdjs.GamefieldCode.GDRightBarrierObjects1= [];
gdjs.GamefieldCode.GDRightBarrierObjects2= [];
gdjs.GamefieldCode.GDRightBarrierObjects3= [];
gdjs.GamefieldCode.GDBottomBarrierObjects1= [];
gdjs.GamefieldCode.GDBottomBarrierObjects2= [];
gdjs.GamefieldCode.GDBottomBarrierObjects3= [];
gdjs.GamefieldCode.GDTopBarrierObjects1= [];
gdjs.GamefieldCode.GDTopBarrierObjects2= [];
gdjs.GamefieldCode.GDTopBarrierObjects3= [];
gdjs.GamefieldCode.GDLeftBarrierObjects1= [];
gdjs.GamefieldCode.GDLeftBarrierObjects2= [];
gdjs.GamefieldCode.GDLeftBarrierObjects3= [];
gdjs.GamefieldCode.GDBallObjects1= [];
gdjs.GamefieldCode.GDBallObjects2= [];
gdjs.GamefieldCode.GDBallObjects3= [];
gdjs.GamefieldCode.GDBackgroundObjects1= [];
gdjs.GamefieldCode.GDBackgroundObjects2= [];
gdjs.GamefieldCode.GDBackgroundObjects3= [];
gdjs.GamefieldCode.GDBottomPointsObjects1= [];
gdjs.GamefieldCode.GDBottomPointsObjects2= [];
gdjs.GamefieldCode.GDBottomPointsObjects3= [];
gdjs.GamefieldCode.GDTopPointsObjects1= [];
gdjs.GamefieldCode.GDTopPointsObjects2= [];
gdjs.GamefieldCode.GDTopPointsObjects3= [];
gdjs.GamefieldCode.GDRightPointsObjects1= [];
gdjs.GamefieldCode.GDRightPointsObjects2= [];
gdjs.GamefieldCode.GDRightPointsObjects3= [];
gdjs.GamefieldCode.GDLeftPointsObjects1= [];
gdjs.GamefieldCode.GDLeftPointsObjects2= [];
gdjs.GamefieldCode.GDLeftPointsObjects3= [];
gdjs.GamefieldCode.GDNewBBTextObjects1= [];
gdjs.GamefieldCode.GDNewBBTextObjects2= [];
gdjs.GamefieldCode.GDNewBBTextObjects3= [];
gdjs.GamefieldCode.GDBorderObjects1= [];
gdjs.GamefieldCode.GDBorderObjects2= [];
gdjs.GamefieldCode.GDBorderObjects3= [];
gdjs.GamefieldCode.GDgameOverSkullObjects1= [];
gdjs.GamefieldCode.GDgameOverSkullObjects2= [];
gdjs.GamefieldCode.GDgameOverSkullObjects3= [];
gdjs.GamefieldCode.GDendGameObjects1= [];
gdjs.GamefieldCode.GDendGameObjects2= [];
gdjs.GamefieldCode.GDendGameObjects3= [];
gdjs.GamefieldCode.GDrestartGameObjects1= [];
gdjs.GamefieldCode.GDrestartGameObjects2= [];
gdjs.GamefieldCode.GDrestartGameObjects3= [];
gdjs.GamefieldCode.GDbarrierBigObjects1= [];
gdjs.GamefieldCode.GDbarrierBigObjects2= [];
gdjs.GamefieldCode.GDbarrierBigObjects3= [];
gdjs.GamefieldCode.GDgameOverObjects1= [];
gdjs.GamefieldCode.GDgameOverObjects2= [];
gdjs.GamefieldCode.GDgameOverObjects3= [];

gdjs.GamefieldCode.conditionTrue_0 = {val:false};
gdjs.GamefieldCode.condition0IsTrue_0 = {val:false};
gdjs.GamefieldCode.condition1IsTrue_0 = {val:false};
gdjs.GamefieldCode.condition2IsTrue_0 = {val:false};
gdjs.GamefieldCode.condition3IsTrue_0 = {val:false};
gdjs.GamefieldCode.condition4IsTrue_0 = {val:false};
gdjs.GamefieldCode.conditionTrue_1 = {val:false};
gdjs.GamefieldCode.condition0IsTrue_1 = {val:false};
gdjs.GamefieldCode.condition1IsTrue_1 = {val:false};
gdjs.GamefieldCode.condition2IsTrue_1 = {val:false};
gdjs.GamefieldCode.condition3IsTrue_1 = {val:false};
gdjs.GamefieldCode.condition4IsTrue_1 = {val:false};


gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDLeftBarrierObjects1Objects = Hashtable.newFrom({"LeftBarrier": gdjs.GamefieldCode.GDLeftBarrierObjects1});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.GamefieldCode.GDBorderObjects1});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.GamefieldCode.GDBorderObjects1});
gdjs.GamefieldCode.eventsList0 = function(runtimeScene) {

{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LeftBarrier"), gdjs.GamefieldCode.GDLeftBarrierObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDLeftBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftBarrierObjects2[i].getBehavior("TopDownMovement").setYVelocity(800);
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LeftBarrier"), gdjs.GamefieldCode.GDLeftBarrierObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDLeftBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftBarrierObjects2[i].getBehavior("TopDownMovement").setYVelocity(-(800));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.GamefieldCode.GDBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftBarrier"), gdjs.GamefieldCode.GDLeftBarrierObjects1);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDLeftBarrierObjects1Objects, gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects, false, runtimeScene, false);
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBorderObjects1 */
/* Reuse gdjs.GamefieldCode.GDLeftBarrierObjects1 */
{for(var i = 0, len = gdjs.GamefieldCode.GDLeftBarrierObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftBarrierObjects1[i].separateFromObjectsList(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects, false);
}
}}

}


};gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDRightBarrierObjects1Objects = Hashtable.newFrom({"RightBarrier": gdjs.GamefieldCode.GDRightBarrierObjects1});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.GamefieldCode.GDBorderObjects1});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.GamefieldCode.GDBorderObjects1});
gdjs.GamefieldCode.eventsList1 = function(runtimeScene) {

{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "h");
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("RightBarrier"), gdjs.GamefieldCode.GDRightBarrierObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDRightBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightBarrierObjects2[i].getBehavior("TopDownMovement").setYVelocity(800);
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("RightBarrier"), gdjs.GamefieldCode.GDRightBarrierObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDRightBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightBarrierObjects2[i].getBehavior("TopDownMovement").setYVelocity(-(800));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.GamefieldCode.GDBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightBarrier"), gdjs.GamefieldCode.GDRightBarrierObjects1);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDRightBarrierObjects1Objects, gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects, false, runtimeScene, false);
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBorderObjects1 */
/* Reuse gdjs.GamefieldCode.GDRightBarrierObjects1 */
{for(var i = 0, len = gdjs.GamefieldCode.GDRightBarrierObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightBarrierObjects1[i].separateFromObjectsList(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects, false);
}
}}

}


};gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDTopBarrierObjects1Objects = Hashtable.newFrom({"TopBarrier": gdjs.GamefieldCode.GDTopBarrierObjects1});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.GamefieldCode.GDBorderObjects1});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.GamefieldCode.GDBorderObjects1});
gdjs.GamefieldCode.eventsList2 = function(runtimeScene) {

{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num6");
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TopBarrier"), gdjs.GamefieldCode.GDTopBarrierObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDTopBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopBarrierObjects2[i].getBehavior("TopDownMovement").setXVelocity(-(1066) - 2 / 3);
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num8");
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TopBarrier"), gdjs.GamefieldCode.GDTopBarrierObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDTopBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopBarrierObjects2[i].getBehavior("TopDownMovement").setXVelocity(1066 + 2 / 3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.GamefieldCode.GDBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopBarrier"), gdjs.GamefieldCode.GDTopBarrierObjects1);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
{gdjs.GamefieldCode.conditionTrue_1 = gdjs.GamefieldCode.condition0IsTrue_0;
gdjs.GamefieldCode.condition0IsTrue_1.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDTopBarrierObjects1Objects, gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects, false, runtimeScene, false);
}gdjs.GamefieldCode.conditionTrue_1.val = true && gdjs.GamefieldCode.condition0IsTrue_1.val;
}
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBorderObjects1 */
/* Reuse gdjs.GamefieldCode.GDTopBarrierObjects1 */
{for(var i = 0, len = gdjs.GamefieldCode.GDTopBarrierObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopBarrierObjects1[i].separateFromObjectsList(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects, false);
}
}}

}


};gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBottomBarrierObjects1Objects = Hashtable.newFrom({"BottomBarrier": gdjs.GamefieldCode.GDBottomBarrierObjects1});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.GamefieldCode.GDBorderObjects1});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.GamefieldCode.GDBorderObjects1});
gdjs.GamefieldCode.eventsList3 = function(runtimeScene) {

{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BottomBarrier"), gdjs.GamefieldCode.GDBottomBarrierObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDBottomBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomBarrierObjects2[i].getBehavior("TopDownMovement").setXVelocity(-(1066) - 2 / 3);
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BottomBarrier"), gdjs.GamefieldCode.GDBottomBarrierObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDBottomBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomBarrierObjects2[i].getBehavior("TopDownMovement").setXVelocity(1066 + 2 / 3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.GamefieldCode.GDBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomBarrier"), gdjs.GamefieldCode.GDBottomBarrierObjects1);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
{gdjs.GamefieldCode.conditionTrue_1 = gdjs.GamefieldCode.condition0IsTrue_0;
gdjs.GamefieldCode.condition0IsTrue_1.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBottomBarrierObjects1Objects, gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects, false, runtimeScene, false);
}gdjs.GamefieldCode.conditionTrue_1.val = true && gdjs.GamefieldCode.condition0IsTrue_1.val;
}
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBorderObjects1 */
/* Reuse gdjs.GamefieldCode.GDBottomBarrierObjects1 */
{for(var i = 0, len = gdjs.GamefieldCode.GDBottomBarrierObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomBarrierObjects1[i].separateFromObjectsList(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBorderObjects1Objects, false);
}
}}

}


};gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GamefieldCode.GDBallObjects2});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDRightBarrierObjects2Objects = Hashtable.newFrom({"RightBarrier": gdjs.GamefieldCode.GDRightBarrierObjects2});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GamefieldCode.GDBallObjects2});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDLeftBarrierObjects2Objects = Hashtable.newFrom({"LeftBarrier": gdjs.GamefieldCode.GDLeftBarrierObjects2});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GamefieldCode.GDBallObjects2});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDTopBarrierObjects2Objects = Hashtable.newFrom({"TopBarrier": gdjs.GamefieldCode.GDTopBarrierObjects2});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GamefieldCode.GDBallObjects2});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBottomBarrierObjects2Objects = Hashtable.newFrom({"BottomBarrier": gdjs.GamefieldCode.GDBottomBarrierObjects2});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GamefieldCode.GDBallObjects1});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDbarrierBigObjects1Objects = Hashtable.newFrom({"barrierBig": gdjs.GamefieldCode.GDbarrierBigObjects1});
gdjs.GamefieldCode.eventsList4 = function(runtimeScene) {

{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
{gdjs.GamefieldCode.conditionTrue_1 = gdjs.GamefieldCode.condition0IsTrue_0;
gdjs.GamefieldCode.condition0IsTrue_1.val = false;
gdjs.GamefieldCode.condition1IsTrue_1.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 0;
}if ( gdjs.GamefieldCode.condition0IsTrue_1.val ) {
{
gdjs.GamefieldCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 90;
}}
gdjs.GamefieldCode.conditionTrue_1.val = true && gdjs.GamefieldCode.condition0IsTrue_1.val && gdjs.GamefieldCode.condition1IsTrue_1.val;
}
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.GamefieldCode.GDBallObjects1, gdjs.GamefieldCode.GDBallObjects2);

{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").applyPolarImpulse(90 + gdjs.evtTools.common.angleDifference(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0, 0);
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
{gdjs.GamefieldCode.conditionTrue_1 = gdjs.GamefieldCode.condition0IsTrue_0;
gdjs.GamefieldCode.condition0IsTrue_1.val = false;
gdjs.GamefieldCode.condition1IsTrue_1.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 90;
}if ( gdjs.GamefieldCode.condition0IsTrue_1.val ) {
{
gdjs.GamefieldCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 180;
}}
gdjs.GamefieldCode.conditionTrue_1.val = true && gdjs.GamefieldCode.condition0IsTrue_1.val && gdjs.GamefieldCode.condition1IsTrue_1.val;
}
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.GamefieldCode.GDBallObjects1, gdjs.GamefieldCode.GDBallObjects2);

{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").applyPolarImpulse(90 - gdjs.evtTools.common.angleDifference(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0, 0);
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
{gdjs.GamefieldCode.conditionTrue_1 = gdjs.GamefieldCode.condition0IsTrue_0;
gdjs.GamefieldCode.condition0IsTrue_1.val = false;
gdjs.GamefieldCode.condition1IsTrue_1.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 180;
}if ( gdjs.GamefieldCode.condition0IsTrue_1.val ) {
{
gdjs.GamefieldCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 270;
}}
gdjs.GamefieldCode.conditionTrue_1.val = true && gdjs.GamefieldCode.condition0IsTrue_1.val && gdjs.GamefieldCode.condition1IsTrue_1.val;
}
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.GamefieldCode.GDBallObjects1, gdjs.GamefieldCode.GDBallObjects2);

{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").applyPolarImpulse(270 + gdjs.evtTools.common.angleDifference(270, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0, 0);
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
{gdjs.GamefieldCode.conditionTrue_1 = gdjs.GamefieldCode.condition0IsTrue_0;
gdjs.GamefieldCode.condition0IsTrue_1.val = false;
gdjs.GamefieldCode.condition1IsTrue_1.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 270;
}if ( gdjs.GamefieldCode.condition0IsTrue_1.val ) {
{
gdjs.GamefieldCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 360;
}}
gdjs.GamefieldCode.conditionTrue_1.val = true && gdjs.GamefieldCode.condition0IsTrue_1.val && gdjs.GamefieldCode.condition1IsTrue_1.val;
}
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBallObjects1 */
{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects1[i].getBehavior("Physics2").applyPolarImpulse(270 - gdjs.evtTools.common.angleDifference(270, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0, 0);
}
}}

}


};gdjs.GamefieldCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightBarrier"), gdjs.GamefieldCode.GDRightBarrierObjects2);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBallObjects2Objects, "Physics2", gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDRightBarrierObjects2Objects, false);
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBallObjects2 */
/* Reuse gdjs.GamefieldCode.GDRightBarrierObjects2 */
{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].returnVariable(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(0)).setNumber(((((gdjs.GamefieldCode.GDBallObjects2[i].getCenterYInScene()) - (( gdjs.GamefieldCode.GDRightBarrierObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDRightBarrierObjects2[0].getPointY("")) - (( gdjs.GamefieldCode.GDRightBarrierObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDRightBarrierObjects2[0].getHeight()) * 0.5) / ((( gdjs.GamefieldCode.GDRightBarrierObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDRightBarrierObjects2[0].getHeight()) * 0.5))) * -(50) + 180);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].returnVariable(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(1)).setNumber((gdjs.GamefieldCode.GDBallObjects2[i].getAverageForce().getAngle()) * (gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(0))));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").applyPolarImpulse((gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(0))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0, 0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDRightBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightBarrierObjects2[i].setAnimationName("right" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 4)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftBarrier"), gdjs.GamefieldCode.GDLeftBarrierObjects2);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBallObjects2Objects, "Physics2", gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDLeftBarrierObjects2Objects, false);
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBallObjects2 */
/* Reuse gdjs.GamefieldCode.GDLeftBarrierObjects2 */
{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].returnVariable(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(0)).setNumber(((((gdjs.GamefieldCode.GDBallObjects2[i].getCenterYInScene()) - (( gdjs.GamefieldCode.GDLeftBarrierObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDLeftBarrierObjects2[0].getPointY("")) - (( gdjs.GamefieldCode.GDLeftBarrierObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDLeftBarrierObjects2[0].getHeight()) * 0.5) / ((( gdjs.GamefieldCode.GDLeftBarrierObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDLeftBarrierObjects2[0].getHeight()) * 0.5))) * 50);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].returnVariable(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(1)).setNumber((gdjs.GamefieldCode.GDBallObjects2[i].getAverageForce().getAngle()) * (gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(0))));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").applyPolarImpulse((gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(0))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0, 0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDLeftBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftBarrierObjects2[i].setAnimationName("left" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 4)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopBarrier"), gdjs.GamefieldCode.GDTopBarrierObjects2);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBallObjects2Objects, "Physics2", gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDTopBarrierObjects2Objects, false);
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBallObjects2 */
/* Reuse gdjs.GamefieldCode.GDTopBarrierObjects2 */
{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].returnVariable(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(0)).setNumber(((((gdjs.GamefieldCode.GDBallObjects2[i].getCenterXInScene()) - (( gdjs.GamefieldCode.GDTopBarrierObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDTopBarrierObjects2[0].getPointX("")) - (( gdjs.GamefieldCode.GDTopBarrierObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDTopBarrierObjects2[0].getWidth()) * 0.5) / ((( gdjs.GamefieldCode.GDTopBarrierObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDTopBarrierObjects2[0].getWidth()) * 0.5))) * -(50) + 90);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].returnVariable(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(1)).setNumber((gdjs.GamefieldCode.GDBallObjects2[i].getAverageForce().getAngle()) * (gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(0))));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").applyPolarImpulse((gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(0))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0, 0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDTopBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopBarrierObjects2[i].setAnimationName("top" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 4)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("BottomBarrier"), gdjs.GamefieldCode.GDBottomBarrierObjects2);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBallObjects2Objects, "Physics2", gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBottomBarrierObjects2Objects, false);
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBallObjects2 */
/* Reuse gdjs.GamefieldCode.GDBottomBarrierObjects2 */
{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].returnVariable(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(0)).setNumber(((((gdjs.GamefieldCode.GDBallObjects2[i].getCenterXInScene()) - (( gdjs.GamefieldCode.GDBottomBarrierObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDBottomBarrierObjects2[0].getPointX("")) - (( gdjs.GamefieldCode.GDBottomBarrierObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDBottomBarrierObjects2[0].getWidth()) * 0.5) / ((( gdjs.GamefieldCode.GDBottomBarrierObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDBottomBarrierObjects2[0].getWidth()) * 0.5))) * 50 - 90);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].returnVariable(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(1)).setNumber((gdjs.GamefieldCode.GDBallObjects2[i].getAverageForce().getAngle()) * (gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(0))));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").applyPolarImpulse((gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDBallObjects2[i].getVariables().getFromIndex(0))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0, 0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBottomBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomBarrierObjects2[i].setAnimationName("bottom" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 4)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("barrierBig"), gdjs.GamefieldCode.GDbarrierBigObjects1);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDBallObjects1Objects, "Physics2", gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDbarrierBigObjects1Objects, false);
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBallObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber((( gdjs.GamefieldCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.GamefieldCode.GDBallObjects1[0].getAverageForce().getAngle()));
}
{ //Subevents
gdjs.GamefieldCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GamefieldCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects2);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GamefieldCode.GDBallObjects2.length;i<l;++i) {
    if ( gdjs.GamefieldCode.GDBallObjects2[i].getX() < -(50) ) {
        gdjs.GamefieldCode.condition0IsTrue_0.val = true;
        gdjs.GamefieldCode.GDBallObjects2[k] = gdjs.GamefieldCode.GDBallObjects2[i];
        ++k;
    }
}
gdjs.GamefieldCode.GDBallObjects2.length = k;}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("LeftPoints"), gdjs.GamefieldCode.GDLeftPointsObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDLeftPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftPointsObjects2[i].setColor("255;0;0");
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDLeftPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftPointsObjects2[i].returnVariable(gdjs.GamefieldCode.GDLeftPointsObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDLeftPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftPointsObjects2[i].setBBText("[outline][b]" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDLeftPointsObjects2[i].getVariables().getFromIndex(0)))) + "[/b][/outline]");
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hitTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects2);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GamefieldCode.GDBallObjects2.length;i<l;++i) {
    if ( gdjs.GamefieldCode.GDBallObjects2[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) ) {
        gdjs.GamefieldCode.condition0IsTrue_0.val = true;
        gdjs.GamefieldCode.GDBallObjects2[k] = gdjs.GamefieldCode.GDBallObjects2[i];
        ++k;
    }
}
gdjs.GamefieldCode.GDBallObjects2.length = k;}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("RightPoints"), gdjs.GamefieldCode.GDRightPointsObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDRightPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightPointsObjects2[i].setColor("255;0;0");
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDRightPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightPointsObjects2[i].returnVariable(gdjs.GamefieldCode.GDRightPointsObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDRightPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightPointsObjects2[i].setBBText("[outline][b]" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDRightPointsObjects2[i].getVariables().getFromIndex(0)))) + "[/b][/outline]");
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hitTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects2);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GamefieldCode.GDBallObjects2.length;i<l;++i) {
    if ( gdjs.GamefieldCode.GDBallObjects2[i].getY() < -(50) ) {
        gdjs.GamefieldCode.condition0IsTrue_0.val = true;
        gdjs.GamefieldCode.GDBallObjects2[k] = gdjs.GamefieldCode.GDBallObjects2[i];
        ++k;
    }
}
gdjs.GamefieldCode.GDBallObjects2.length = k;}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("TopPoints"), gdjs.GamefieldCode.GDTopPointsObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDTopPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopPointsObjects2[i].setColor("255;0;0");
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDTopPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopPointsObjects2[i].returnVariable(gdjs.GamefieldCode.GDTopPointsObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDTopPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopPointsObjects2[i].setBBText("[outline][b]" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDTopPointsObjects2[i].getVariables().getFromIndex(0)))) + "[/b][/outline]");
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hitTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects2);

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GamefieldCode.GDBallObjects2.length;i<l;++i) {
    if ( gdjs.GamefieldCode.GDBallObjects2[i].getY() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        gdjs.GamefieldCode.condition0IsTrue_0.val = true;
        gdjs.GamefieldCode.GDBallObjects2[k] = gdjs.GamefieldCode.GDBallObjects2[i];
        ++k;
    }
}
gdjs.GamefieldCode.GDBallObjects2.length = k;}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("BottomPoints"), gdjs.GamefieldCode.GDBottomPointsObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDBottomPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomPointsObjects2[i].setColor("255;0;0");
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBottomPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomPointsObjects2[i].returnVariable(gdjs.GamefieldCode.GDBottomPointsObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBottomPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomPointsObjects2[i].setBBText("[outline][b]" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDBottomPointsObjects2[i].getVariables().getFromIndex(0)))) + "[/b][/outline]");
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hitTimer");
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "hitTimer") > 0.1;
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BottomPoints"), gdjs.GamefieldCode.GDBottomPointsObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftPoints"), gdjs.GamefieldCode.GDLeftPointsObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightPoints"), gdjs.GamefieldCode.GDRightPointsObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopPoints"), gdjs.GamefieldCode.GDTopPointsObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDTopPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopPointsObjects2[i].setColor("126;211;33");
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBottomPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomPointsObjects2[i].setColor("126;211;33");
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDLeftPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftPointsObjects2[i].setColor("126;211;33");
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDRightPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightPointsObjects2[i].setColor("126;211;33");
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "hitTimer") > 0.5;
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects1);
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "hitTimer");
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects1[i].getBehavior("Physics2").applyPolarImpulse(gdjs.randomWithStep(0, 360, 0.12357834965843), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)), 0, 0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)));
}}

}


};gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDbarrierBigObjects2Objects = Hashtable.newFrom({"barrierBig": gdjs.GamefieldCode.GDbarrierBigObjects2});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDbarrierBigObjects2Objects = Hashtable.newFrom({"barrierBig": gdjs.GamefieldCode.GDbarrierBigObjects2});
gdjs.GamefieldCode.eventsList7 = function(runtimeScene) {

{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BottomBarrier"), gdjs.GamefieldCode.GDBottomBarrierObjects2);
gdjs.copyArray(runtimeScene.getObjects("BottomPoints"), gdjs.GamefieldCode.GDBottomPointsObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopBarrier"), gdjs.GamefieldCode.GDTopBarrierObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopPoints"), gdjs.GamefieldCode.GDTopPointsObjects2);
gdjs.GamefieldCode.GDbarrierBigObjects2.length = 0;

{for(var i = 0, len = gdjs.GamefieldCode.GDBottomBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomBarrierObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDTopBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopBarrierObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDTopPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopPointsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBottomPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomPointsObjects2[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDbarrierBigObjects2Objects, 0, 1, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDbarrierBigObjects2Objects, 0, 1016, "");
}}

}


};gdjs.GamefieldCode.eventsList8 = function(runtimeScene) {

{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.GamefieldCode.GDBorderObjects2);
gdjs.copyArray(runtimeScene.getObjects("endGame"), gdjs.GamefieldCode.GDendGameObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameOver"), gdjs.GamefieldCode.GDgameOverObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameOverSkull"), gdjs.GamefieldCode.GDgameOverSkullObjects2);
gdjs.copyArray(runtimeScene.getObjects("restartGame"), gdjs.GamefieldCode.GDrestartGameObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0.4);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((( gdjs.GamefieldCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDBallObjects2[0].getWidth()) / 2));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2) - ((( gdjs.GamefieldCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDBallObjects2[0].getHeight()) / 2));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StartTimer");
}{for(var i = 0, len = gdjs.GamefieldCode.GDBorderObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBorderObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDgameOverSkullObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDgameOverSkullObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDendGameObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDendGameObjects2[i].hide();
}
for(var i = 0, len = gdjs.GamefieldCode.GDrestartGameObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDrestartGameObjects2[i].hide();
}
for(var i = 0, len = gdjs.GamefieldCode.GDgameOverObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDgameOverObjects2[i].hide();
}
}
{ //Subevents
gdjs.GamefieldCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StartTimer") > 1;
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.GamefieldCode.GDNewBBTextObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDNewBBTextObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDNewBBTextObjects2[i].setBBText("[outline][b]2[/b][/outline]");
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StartTimer") > 2;
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.GamefieldCode.GDNewBBTextObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDNewBBTextObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDNewBBTextObjects2[i].setBBText("[outline][b]1[/b][/outline]");
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StartTimer") > 3;
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.GamefieldCode.GDNewBBTextObjects1);
{for(var i = 0, len = gdjs.GamefieldCode.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDNewBBTextObjects1[i].setBBText("");
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "StartTimer");
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects1[i].getBehavior("Physics2").applyPolarImpulse(gdjs.randomWithStep(0, 360, 0.12357834965843), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0, 0);
}
}}

}


};gdjs.GamefieldCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GamefieldCode.GDTopPointsObjects1, gdjs.GamefieldCode.GDTopPointsObjects2);


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GamefieldCode.GDTopPointsObjects2.length;i<l;++i) {
    if ( gdjs.GamefieldCode.GDTopPointsObjects2[i].getVariableNumber(gdjs.GamefieldCode.GDTopPointsObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GamefieldCode.condition0IsTrue_0.val = true;
        gdjs.GamefieldCode.GDTopPointsObjects2[k] = gdjs.GamefieldCode.GDTopPointsObjects2[i];
        ++k;
    }
}
gdjs.GamefieldCode.GDTopPointsObjects2.length = k;}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDTopPointsObjects2 */
gdjs.copyArray(gdjs.GamefieldCode.GDgameOverSkullObjects1, gdjs.GamefieldCode.GDgameOverSkullObjects2);

{for(var i = 0, len = gdjs.GamefieldCode.GDTopPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopPointsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDgameOverSkullObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDgameOverSkullObjects2[i].setCenterPositionInScene((( gdjs.GamefieldCode.GDTopPointsObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDTopPointsObjects2[0].getCenterXInScene()),(( gdjs.GamefieldCode.GDTopPointsObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDTopPointsObjects2[0].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(gdjs.GamefieldCode.GDBottomPointsObjects1, gdjs.GamefieldCode.GDBottomPointsObjects2);


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GamefieldCode.GDBottomPointsObjects2.length;i<l;++i) {
    if ( gdjs.GamefieldCode.GDBottomPointsObjects2[i].getVariableNumber(gdjs.GamefieldCode.GDBottomPointsObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GamefieldCode.condition0IsTrue_0.val = true;
        gdjs.GamefieldCode.GDBottomPointsObjects2[k] = gdjs.GamefieldCode.GDBottomPointsObjects2[i];
        ++k;
    }
}
gdjs.GamefieldCode.GDBottomPointsObjects2.length = k;}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDBottomPointsObjects2 */
gdjs.copyArray(gdjs.GamefieldCode.GDgameOverSkullObjects1, gdjs.GamefieldCode.GDgameOverSkullObjects2);

{for(var i = 0, len = gdjs.GamefieldCode.GDBottomPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomPointsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDgameOverSkullObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDgameOverSkullObjects2[i].setCenterPositionInScene((( gdjs.GamefieldCode.GDBottomPointsObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDBottomPointsObjects2[0].getCenterXInScene()),(( gdjs.GamefieldCode.GDBottomPointsObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDBottomPointsObjects2[0].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(gdjs.GamefieldCode.GDLeftPointsObjects1, gdjs.GamefieldCode.GDLeftPointsObjects2);


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GamefieldCode.GDLeftPointsObjects2.length;i<l;++i) {
    if ( gdjs.GamefieldCode.GDLeftPointsObjects2[i].getVariableNumber(gdjs.GamefieldCode.GDLeftPointsObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GamefieldCode.condition0IsTrue_0.val = true;
        gdjs.GamefieldCode.GDLeftPointsObjects2[k] = gdjs.GamefieldCode.GDLeftPointsObjects2[i];
        ++k;
    }
}
gdjs.GamefieldCode.GDLeftPointsObjects2.length = k;}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDLeftPointsObjects2 */
gdjs.copyArray(gdjs.GamefieldCode.GDgameOverSkullObjects1, gdjs.GamefieldCode.GDgameOverSkullObjects2);

{for(var i = 0, len = gdjs.GamefieldCode.GDLeftPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftPointsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDgameOverSkullObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDgameOverSkullObjects2[i].setCenterPositionInScene((( gdjs.GamefieldCode.GDLeftPointsObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDLeftPointsObjects2[0].getCenterXInScene()),(( gdjs.GamefieldCode.GDLeftPointsObjects2.length === 0 ) ? 0 :gdjs.GamefieldCode.GDLeftPointsObjects2[0].getCenterYInScene()));
}
}}

}


{

/* Reuse gdjs.GamefieldCode.GDRightPointsObjects1 */

gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GamefieldCode.GDRightPointsObjects1.length;i<l;++i) {
    if ( gdjs.GamefieldCode.GDRightPointsObjects1[i].getVariableNumber(gdjs.GamefieldCode.GDRightPointsObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GamefieldCode.condition0IsTrue_0.val = true;
        gdjs.GamefieldCode.GDRightPointsObjects1[k] = gdjs.GamefieldCode.GDRightPointsObjects1[i];
        ++k;
    }
}
gdjs.GamefieldCode.GDRightPointsObjects1.length = k;}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GamefieldCode.GDRightPointsObjects1 */
/* Reuse gdjs.GamefieldCode.GDgameOverSkullObjects1 */
{for(var i = 0, len = gdjs.GamefieldCode.GDRightPointsObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightPointsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDgameOverSkullObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDgameOverSkullObjects1[i].setCenterPositionInScene((( gdjs.GamefieldCode.GDRightPointsObjects1.length === 0 ) ? 0 :gdjs.GamefieldCode.GDRightPointsObjects1[0].getCenterXInScene()),(( gdjs.GamefieldCode.GDRightPointsObjects1.length === 0 ) ? 0 :gdjs.GamefieldCode.GDRightPointsObjects1[0].getCenterYInScene()));
}
}}

}


};gdjs.GamefieldCode.eventsList10 = function(runtimeScene) {

{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.GamefieldCode.GDBottomPointsObjects1.length = 0;

gdjs.GamefieldCode.GDLeftPointsObjects1.length = 0;

gdjs.GamefieldCode.GDRightPointsObjects1.length = 0;

gdjs.GamefieldCode.GDTopPointsObjects1.length = 0;


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
{gdjs.GamefieldCode.conditionTrue_1 = gdjs.GamefieldCode.condition0IsTrue_0;
gdjs.GamefieldCode.GDBottomPointsObjects1_1final.length = 0;gdjs.GamefieldCode.GDLeftPointsObjects1_1final.length = 0;gdjs.GamefieldCode.GDRightPointsObjects1_1final.length = 0;gdjs.GamefieldCode.GDTopPointsObjects1_1final.length = 0;gdjs.GamefieldCode.condition0IsTrue_1.val = false;
gdjs.GamefieldCode.condition1IsTrue_1.val = false;
gdjs.GamefieldCode.condition2IsTrue_1.val = false;
gdjs.GamefieldCode.condition3IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("BottomPoints"), gdjs.GamefieldCode.GDBottomPointsObjects2);
for(var i = 0, k = 0, l = gdjs.GamefieldCode.GDBottomPointsObjects2.length;i<l;++i) {
    if ( gdjs.GamefieldCode.GDBottomPointsObjects2[i].getVariableNumber(gdjs.GamefieldCode.GDBottomPointsObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GamefieldCode.condition0IsTrue_1.val = true;
        gdjs.GamefieldCode.GDBottomPointsObjects2[k] = gdjs.GamefieldCode.GDBottomPointsObjects2[i];
        ++k;
    }
}
gdjs.GamefieldCode.GDBottomPointsObjects2.length = k;if( gdjs.GamefieldCode.condition0IsTrue_1.val ) {
    gdjs.GamefieldCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GamefieldCode.GDBottomPointsObjects2.length;j<jLen;++j) {
        if ( gdjs.GamefieldCode.GDBottomPointsObjects1_1final.indexOf(gdjs.GamefieldCode.GDBottomPointsObjects2[j]) === -1 )
            gdjs.GamefieldCode.GDBottomPointsObjects1_1final.push(gdjs.GamefieldCode.GDBottomPointsObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("TopPoints"), gdjs.GamefieldCode.GDTopPointsObjects2);
for(var i = 0, k = 0, l = gdjs.GamefieldCode.GDTopPointsObjects2.length;i<l;++i) {
    if ( gdjs.GamefieldCode.GDTopPointsObjects2[i].getVariableNumber(gdjs.GamefieldCode.GDTopPointsObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GamefieldCode.condition1IsTrue_1.val = true;
        gdjs.GamefieldCode.GDTopPointsObjects2[k] = gdjs.GamefieldCode.GDTopPointsObjects2[i];
        ++k;
    }
}
gdjs.GamefieldCode.GDTopPointsObjects2.length = k;if( gdjs.GamefieldCode.condition1IsTrue_1.val ) {
    gdjs.GamefieldCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GamefieldCode.GDTopPointsObjects2.length;j<jLen;++j) {
        if ( gdjs.GamefieldCode.GDTopPointsObjects1_1final.indexOf(gdjs.GamefieldCode.GDTopPointsObjects2[j]) === -1 )
            gdjs.GamefieldCode.GDTopPointsObjects1_1final.push(gdjs.GamefieldCode.GDTopPointsObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LeftPoints"), gdjs.GamefieldCode.GDLeftPointsObjects2);
for(var i = 0, k = 0, l = gdjs.GamefieldCode.GDLeftPointsObjects2.length;i<l;++i) {
    if ( gdjs.GamefieldCode.GDLeftPointsObjects2[i].getVariableNumber(gdjs.GamefieldCode.GDLeftPointsObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GamefieldCode.condition2IsTrue_1.val = true;
        gdjs.GamefieldCode.GDLeftPointsObjects2[k] = gdjs.GamefieldCode.GDLeftPointsObjects2[i];
        ++k;
    }
}
gdjs.GamefieldCode.GDLeftPointsObjects2.length = k;if( gdjs.GamefieldCode.condition2IsTrue_1.val ) {
    gdjs.GamefieldCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GamefieldCode.GDLeftPointsObjects2.length;j<jLen;++j) {
        if ( gdjs.GamefieldCode.GDLeftPointsObjects1_1final.indexOf(gdjs.GamefieldCode.GDLeftPointsObjects2[j]) === -1 )
            gdjs.GamefieldCode.GDLeftPointsObjects1_1final.push(gdjs.GamefieldCode.GDLeftPointsObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RightPoints"), gdjs.GamefieldCode.GDRightPointsObjects2);
for(var i = 0, k = 0, l = gdjs.GamefieldCode.GDRightPointsObjects2.length;i<l;++i) {
    if ( gdjs.GamefieldCode.GDRightPointsObjects2[i].getVariableNumber(gdjs.GamefieldCode.GDRightPointsObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GamefieldCode.condition3IsTrue_1.val = true;
        gdjs.GamefieldCode.GDRightPointsObjects2[k] = gdjs.GamefieldCode.GDRightPointsObjects2[i];
        ++k;
    }
}
gdjs.GamefieldCode.GDRightPointsObjects2.length = k;if( gdjs.GamefieldCode.condition3IsTrue_1.val ) {
    gdjs.GamefieldCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GamefieldCode.GDRightPointsObjects2.length;j<jLen;++j) {
        if ( gdjs.GamefieldCode.GDRightPointsObjects1_1final.indexOf(gdjs.GamefieldCode.GDRightPointsObjects2[j]) === -1 )
            gdjs.GamefieldCode.GDRightPointsObjects1_1final.push(gdjs.GamefieldCode.GDRightPointsObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GamefieldCode.GDBottomPointsObjects1_1final, gdjs.GamefieldCode.GDBottomPointsObjects1);
gdjs.copyArray(gdjs.GamefieldCode.GDLeftPointsObjects1_1final, gdjs.GamefieldCode.GDLeftPointsObjects1);
gdjs.copyArray(gdjs.GamefieldCode.GDRightPointsObjects1_1final, gdjs.GamefieldCode.GDRightPointsObjects1);
gdjs.copyArray(gdjs.GamefieldCode.GDTopPointsObjects1_1final, gdjs.GamefieldCode.GDTopPointsObjects1);
}
}
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("endGame"), gdjs.GamefieldCode.GDendGameObjects1);
gdjs.copyArray(runtimeScene.getObjects("gameOver"), gdjs.GamefieldCode.GDgameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("gameOverSkull"), gdjs.GamefieldCode.GDgameOverSkullObjects1);
gdjs.copyArray(runtimeScene.getObjects("restartGame"), gdjs.GamefieldCode.GDrestartGameObjects1);
{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDendGameObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDendGameObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.GamefieldCode.GDrestartGameObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDrestartGameObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.GamefieldCode.GDgameOverObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDgameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDgameOverSkullObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDgameOverSkullObjects1[i].hide(false);
}
}{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8));
}
{ //Subevents
gdjs.GamefieldCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDbarrierBigObjects1Objects = Hashtable.newFrom({"barrierBig": gdjs.GamefieldCode.GDbarrierBigObjects1});
gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDbarrierBigObjects1Objects = Hashtable.newFrom({"barrierBig": gdjs.GamefieldCode.GDbarrierBigObjects1});
gdjs.GamefieldCode.eventsList11 = function(runtimeScene) {

{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
{gdjs.GamefieldCode.conditionTrue_1 = gdjs.GamefieldCode.condition0IsTrue_0;
gdjs.GamefieldCode.condition0IsTrue_1.val = false;
gdjs.GamefieldCode.condition1IsTrue_1.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}if ( gdjs.GamefieldCode.condition0IsTrue_1.val ) {
{
gdjs.GamefieldCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}}
gdjs.GamefieldCode.conditionTrue_1.val = true && gdjs.GamefieldCode.condition0IsTrue_1.val && gdjs.GamefieldCode.condition1IsTrue_1.val;
}
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BottomBarrier"), gdjs.GamefieldCode.GDBottomBarrierObjects2);
gdjs.copyArray(runtimeScene.getObjects("BottomPoints"), gdjs.GamefieldCode.GDBottomPointsObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftBarrier"), gdjs.GamefieldCode.GDLeftBarrierObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftPoints"), gdjs.GamefieldCode.GDLeftPointsObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.GamefieldCode.GDNewBBTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightBarrier"), gdjs.GamefieldCode.GDRightBarrierObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightPoints"), gdjs.GamefieldCode.GDRightPointsObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopBarrier"), gdjs.GamefieldCode.GDTopBarrierObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopPoints"), gdjs.GamefieldCode.GDTopPointsObjects2);
gdjs.copyArray(runtimeScene.getObjects("endGame"), gdjs.GamefieldCode.GDendGameObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameOver"), gdjs.GamefieldCode.GDgameOverObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameOverSkull"), gdjs.GamefieldCode.GDgameOverSkullObjects2);
gdjs.copyArray(runtimeScene.getObjects("restartGame"), gdjs.GamefieldCode.GDrestartGameObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDBottomPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomPointsObjects2[i].returnVariable(gdjs.GamefieldCode.GDBottomPointsObjects2[i].getVariables().getFromIndex(0)).setNumber(10);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDTopPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopPointsObjects2[i].returnVariable(gdjs.GamefieldCode.GDTopPointsObjects2[i].getVariables().getFromIndex(0)).setNumber(10);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDRightPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightPointsObjects2[i].returnVariable(gdjs.GamefieldCode.GDRightPointsObjects2[i].getVariables().getFromIndex(0)).setNumber(10);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDLeftPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftPointsObjects2[i].returnVariable(gdjs.GamefieldCode.GDLeftPointsObjects2[i].getVariables().getFromIndex(0)).setNumber(10);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDendGameObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDendGameObjects2[i].hide();
}
for(var i = 0, len = gdjs.GamefieldCode.GDrestartGameObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDrestartGameObjects2[i].hide();
}
for(var i = 0, len = gdjs.GamefieldCode.GDgameOverObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDgameOverObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDgameOverSkullObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDgameOverSkullObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBottomPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomPointsObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GamefieldCode.GDTopPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopPointsObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GamefieldCode.GDRightPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightPointsObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.GamefieldCode.GDLeftPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftPointsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBottomPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomPointsObjects2[i].setBBText("[outline][b]" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.GamefieldCode.GDLeftPointsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GamefieldCode.GDLeftPointsObjects2[0].getVariables()).getFromIndex(0)))) + "[/b][/outline]");
}
for(var i = 0, len = gdjs.GamefieldCode.GDTopPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopPointsObjects2[i].setBBText("[outline][b]" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.GamefieldCode.GDLeftPointsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GamefieldCode.GDLeftPointsObjects2[0].getVariables()).getFromIndex(0)))) + "[/b][/outline]");
}
for(var i = 0, len = gdjs.GamefieldCode.GDRightPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightPointsObjects2[i].setBBText("[outline][b]" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.GamefieldCode.GDLeftPointsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GamefieldCode.GDLeftPointsObjects2[0].getVariables()).getFromIndex(0)))) + "[/b][/outline]");
}
for(var i = 0, len = gdjs.GamefieldCode.GDLeftPointsObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftPointsObjects2[i].setBBText("[outline][b]" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.GamefieldCode.GDLeftPointsObjects2[i].getVariables().getFromIndex(0)))) + "[/b][/outline]");
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDTopBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopBarrierObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDBottomBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomBarrierObjects2[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDLeftBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDLeftBarrierObjects2[i].setCenterYInScene(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDRightBarrierObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDRightBarrierObjects2[i].setCenterYInScene(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1.5);
}{for(var i = 0, len = gdjs.GamefieldCode.GDNewBBTextObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDNewBBTextObjects2[i].setBBText("[outline][b]3[/b][/outline]");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StartTimer");
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
{gdjs.GamefieldCode.conditionTrue_1 = gdjs.GamefieldCode.condition0IsTrue_0;
gdjs.GamefieldCode.condition0IsTrue_1.val = false;
gdjs.GamefieldCode.condition1IsTrue_1.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}if ( gdjs.GamefieldCode.condition0IsTrue_1.val ) {
{
gdjs.GamefieldCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StartTimer") > 3;
}}
gdjs.GamefieldCode.conditionTrue_1.val = true && gdjs.GamefieldCode.condition0IsTrue_1.val && gdjs.GamefieldCode.condition1IsTrue_1.val;
}
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GamefieldCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.GamefieldCode.GDNewBBTextObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDNewBBTextObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDNewBBTextObjects2[i].setBBText("");
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "StartTimer");
}{for(var i = 0, len = gdjs.GamefieldCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBallObjects2[i].getBehavior("Physics2").applyPolarImpulse(gdjs.randomFloatInRange(0, 360), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), 0, 0);
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
{gdjs.GamefieldCode.conditionTrue_1 = gdjs.GamefieldCode.condition0IsTrue_0;
gdjs.GamefieldCode.condition0IsTrue_1.val = false;
gdjs.GamefieldCode.condition1IsTrue_1.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}if ( gdjs.GamefieldCode.condition0IsTrue_1.val ) {
{
gdjs.GamefieldCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StartTimer") > 2;
}}
gdjs.GamefieldCode.conditionTrue_1.val = true && gdjs.GamefieldCode.condition0IsTrue_1.val && gdjs.GamefieldCode.condition1IsTrue_1.val;
}
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.GamefieldCode.GDNewBBTextObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDNewBBTextObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDNewBBTextObjects2[i].setBBText("[outline][b]1[/b][/outline]");
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
{gdjs.GamefieldCode.conditionTrue_1 = gdjs.GamefieldCode.condition0IsTrue_0;
gdjs.GamefieldCode.condition0IsTrue_1.val = false;
gdjs.GamefieldCode.condition1IsTrue_1.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}if ( gdjs.GamefieldCode.condition0IsTrue_1.val ) {
{
gdjs.GamefieldCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StartTimer") > 1;
}}
gdjs.GamefieldCode.conditionTrue_1.val = true && gdjs.GamefieldCode.condition0IsTrue_1.val && gdjs.GamefieldCode.condition1IsTrue_1.val;
}
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.GamefieldCode.GDNewBBTextObjects2);
{for(var i = 0, len = gdjs.GamefieldCode.GDNewBBTextObjects2.length ;i < len;++i) {
    gdjs.GamefieldCode.GDNewBBTextObjects2[i].setBBText("[outline][b]2[/b][/outline]");
}
}}

}


{


gdjs.GamefieldCode.condition0IsTrue_0.val = false;
{
{gdjs.GamefieldCode.conditionTrue_1 = gdjs.GamefieldCode.condition0IsTrue_0;
gdjs.GamefieldCode.condition0IsTrue_1.val = false;
gdjs.GamefieldCode.condition1IsTrue_1.val = false;
{
gdjs.GamefieldCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), true);
}if ( gdjs.GamefieldCode.condition0IsTrue_1.val ) {
{
gdjs.GamefieldCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
}}
gdjs.GamefieldCode.conditionTrue_1.val = true && gdjs.GamefieldCode.condition0IsTrue_1.val && gdjs.GamefieldCode.condition1IsTrue_1.val;
}
}if (gdjs.GamefieldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BottomBarrier"), gdjs.GamefieldCode.GDBottomBarrierObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomPoints"), gdjs.GamefieldCode.GDBottomPointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopBarrier"), gdjs.GamefieldCode.GDTopBarrierObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopPoints"), gdjs.GamefieldCode.GDTopPointsObjects1);
gdjs.GamefieldCode.GDbarrierBigObjects1.length = 0;

{for(var i = 0, len = gdjs.GamefieldCode.GDBottomBarrierObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomBarrierObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDTopBarrierObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopBarrierObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GamefieldCode.GDTopPointsObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDTopPointsObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDbarrierBigObjects1Objects, 0, 1, "");
}{for(var i = 0, len = gdjs.GamefieldCode.GDBottomPointsObjects1.length ;i < len;++i) {
    gdjs.GamefieldCode.GDBottomPointsObjects1[i].hide();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GamefieldCode.mapOfGDgdjs_46GamefieldCode_46GDbarrierBigObjects1Objects, 0, 1016, "");
}{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8));
}}

}


};gdjs.GamefieldCode.eventsList12 = function(runtimeScene) {

{


gdjs.GamefieldCode.eventsList0(runtimeScene);
}


{


gdjs.GamefieldCode.eventsList1(runtimeScene);
}


{


gdjs.GamefieldCode.eventsList2(runtimeScene);
}


{


gdjs.GamefieldCode.eventsList3(runtimeScene);
}


{


gdjs.GamefieldCode.eventsList5(runtimeScene);
}


{


gdjs.GamefieldCode.eventsList6(runtimeScene);
}


{


gdjs.GamefieldCode.eventsList8(runtimeScene);
}


{


gdjs.GamefieldCode.eventsList10(runtimeScene);
}


{


gdjs.GamefieldCode.eventsList11(runtimeScene);
}


};

gdjs.GamefieldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GamefieldCode.GDRightBarrierObjects1.length = 0;
gdjs.GamefieldCode.GDRightBarrierObjects2.length = 0;
gdjs.GamefieldCode.GDRightBarrierObjects3.length = 0;
gdjs.GamefieldCode.GDBottomBarrierObjects1.length = 0;
gdjs.GamefieldCode.GDBottomBarrierObjects2.length = 0;
gdjs.GamefieldCode.GDBottomBarrierObjects3.length = 0;
gdjs.GamefieldCode.GDTopBarrierObjects1.length = 0;
gdjs.GamefieldCode.GDTopBarrierObjects2.length = 0;
gdjs.GamefieldCode.GDTopBarrierObjects3.length = 0;
gdjs.GamefieldCode.GDLeftBarrierObjects1.length = 0;
gdjs.GamefieldCode.GDLeftBarrierObjects2.length = 0;
gdjs.GamefieldCode.GDLeftBarrierObjects3.length = 0;
gdjs.GamefieldCode.GDBallObjects1.length = 0;
gdjs.GamefieldCode.GDBallObjects2.length = 0;
gdjs.GamefieldCode.GDBallObjects3.length = 0;
gdjs.GamefieldCode.GDBackgroundObjects1.length = 0;
gdjs.GamefieldCode.GDBackgroundObjects2.length = 0;
gdjs.GamefieldCode.GDBackgroundObjects3.length = 0;
gdjs.GamefieldCode.GDBottomPointsObjects1.length = 0;
gdjs.GamefieldCode.GDBottomPointsObjects2.length = 0;
gdjs.GamefieldCode.GDBottomPointsObjects3.length = 0;
gdjs.GamefieldCode.GDTopPointsObjects1.length = 0;
gdjs.GamefieldCode.GDTopPointsObjects2.length = 0;
gdjs.GamefieldCode.GDTopPointsObjects3.length = 0;
gdjs.GamefieldCode.GDRightPointsObjects1.length = 0;
gdjs.GamefieldCode.GDRightPointsObjects2.length = 0;
gdjs.GamefieldCode.GDRightPointsObjects3.length = 0;
gdjs.GamefieldCode.GDLeftPointsObjects1.length = 0;
gdjs.GamefieldCode.GDLeftPointsObjects2.length = 0;
gdjs.GamefieldCode.GDLeftPointsObjects3.length = 0;
gdjs.GamefieldCode.GDNewBBTextObjects1.length = 0;
gdjs.GamefieldCode.GDNewBBTextObjects2.length = 0;
gdjs.GamefieldCode.GDNewBBTextObjects3.length = 0;
gdjs.GamefieldCode.GDBorderObjects1.length = 0;
gdjs.GamefieldCode.GDBorderObjects2.length = 0;
gdjs.GamefieldCode.GDBorderObjects3.length = 0;
gdjs.GamefieldCode.GDgameOverSkullObjects1.length = 0;
gdjs.GamefieldCode.GDgameOverSkullObjects2.length = 0;
gdjs.GamefieldCode.GDgameOverSkullObjects3.length = 0;
gdjs.GamefieldCode.GDendGameObjects1.length = 0;
gdjs.GamefieldCode.GDendGameObjects2.length = 0;
gdjs.GamefieldCode.GDendGameObjects3.length = 0;
gdjs.GamefieldCode.GDrestartGameObjects1.length = 0;
gdjs.GamefieldCode.GDrestartGameObjects2.length = 0;
gdjs.GamefieldCode.GDrestartGameObjects3.length = 0;
gdjs.GamefieldCode.GDbarrierBigObjects1.length = 0;
gdjs.GamefieldCode.GDbarrierBigObjects2.length = 0;
gdjs.GamefieldCode.GDbarrierBigObjects3.length = 0;
gdjs.GamefieldCode.GDgameOverObjects1.length = 0;
gdjs.GamefieldCode.GDgameOverObjects2.length = 0;
gdjs.GamefieldCode.GDgameOverObjects3.length = 0;

gdjs.GamefieldCode.eventsList12(runtimeScene);
return;

}

gdjs['GamefieldCode'] = gdjs.GamefieldCode;
