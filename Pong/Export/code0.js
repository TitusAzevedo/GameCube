gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDLeftBarrierObjects1= [];
gdjs.Untitled_32sceneCode.GDLeftBarrierObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LeftBarrier"), gdjs.Untitled_32sceneCode.GDLeftBarrierObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLeftBarrierObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLeftBarrierObjects1[i].getBehavior("TopDownMovement").setYVelocity(-(50));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LeftBarrier"), gdjs.Untitled_32sceneCode.GDLeftBarrierObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLeftBarrierObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLeftBarrierObjects1[i].getBehavior("TopDownMovement").setYVelocity(50);
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDLeftBarrierObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLeftBarrierObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
