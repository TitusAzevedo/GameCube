
if (typeof gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow !== "undefined") {
  gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow = {};
gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.GDObjectObjects1= [];
gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.GDObjectObjects2= [];

gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.GDObjectObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.clamp(gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CameraLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CameraNumber")) || 0 : 0)), (( gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.GDObjectObjects1[0].getCenterXInScene()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("FollowSpeedX")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("UpperLeftX")) || 0 : 0) + gdjs.evtTools.camera.getCameraWidth(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CameraLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CameraNumber")) || 0 : 0)) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BottomRightX")) || 0 : 0) - gdjs.evtTools.camera.getCameraWidth(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CameraLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CameraNumber")) || 0 : 0)) / 2), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CameraLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CameraNumber")) || 0 : 0));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.clamp(gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CameraLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CameraNumber")) || 0 : 0)), (( gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.GDObjectObjects1[0].getCenterYInScene()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("FollowSpeedY")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("UpperLeftY")) || 0 : 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CameraLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CameraNumber")) || 0 : 0)) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BottomRightY")) || 0 : 0) - gdjs.evtTools.camera.getCameraHeight(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CameraLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CameraNumber")) || 0 : 0)) / 2), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CameraLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CameraNumber")) || 0 : 0));
}}

}


};

gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.func = function(runtimeScene, Object, FollowSpeedX, FollowSpeedY, CameraLayer, CameraNumber, UpperLeftX, UpperLeftY, BottomRightX, BottomRightY, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "FollowSpeedX") return FollowSpeedX;
if (argName === "FollowSpeedY") return FollowSpeedY;
if (argName === "CameraLayer") return CameraLayer;
if (argName === "CameraNumber") return CameraNumber;
if (argName === "UpperLeftX") return UpperLeftX;
if (argName === "UpperLeftY") return UpperLeftY;
if (argName === "BottomRightX") return BottomRightX;
if (argName === "BottomRightY") return BottomRightY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__SimpleSmoothCameraFollow__SmoothCameraFollow.registeredGdjsCallbacks = [];