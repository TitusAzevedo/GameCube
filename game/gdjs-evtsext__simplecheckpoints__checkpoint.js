
gdjs.evtsExt__SimpleCheckpoints__Checkpoint = gdjs.evtsExt__SimpleCheckpoints__Checkpoint || {};

/**
 * Behavior generated from Simple Checkpoint
 */
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint = class Checkpoint extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.Activated = false;
    this._behaviorData.AnimationActive = behaviorData.AnimationActive !== undefined ? behaviorData.AnimationActive : Number("0") || 0;
    this._behaviorData.AnimationInactive = behaviorData.AnimationInactive !== undefined ? behaviorData.AnimationInactive : Number("0") || 0;
    this._behaviorData.JustActivated = false;
    this._behaviorData.JustDeactivated = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Activated !== newBehaviorData.Activated)
      this._behaviorData.Activated = newBehaviorData.Activated;
    if (oldBehaviorData.AnimationActive !== newBehaviorData.AnimationActive)
      this._behaviorData.AnimationActive = newBehaviorData.AnimationActive;
    if (oldBehaviorData.AnimationInactive !== newBehaviorData.AnimationInactive)
      this._behaviorData.AnimationInactive = newBehaviorData.AnimationInactive;
    if (oldBehaviorData.JustActivated !== newBehaviorData.JustActivated)
      this._behaviorData.JustActivated = newBehaviorData.JustActivated;
    if (oldBehaviorData.JustDeactivated !== newBehaviorData.JustDeactivated)
      this._behaviorData.JustDeactivated = newBehaviorData.JustDeactivated;

    return true;
  }

  // Properties:
  
  _getActivated() {
    return this._behaviorData.Activated !== undefined ? this._behaviorData.Activated : false;
  }
  _setActivated(newValue) {
    this._behaviorData.Activated = newValue;
  }
  _getAnimationActive() {
    return this._behaviorData.AnimationActive !== undefined ? this._behaviorData.AnimationActive : Number("0") || 0;
  }
  _setAnimationActive(newValue) {
    this._behaviorData.AnimationActive = newValue;
  }
  _getAnimationInactive() {
    return this._behaviorData.AnimationInactive !== undefined ? this._behaviorData.AnimationInactive : Number("0") || 0;
  }
  _setAnimationInactive(newValue) {
    this._behaviorData.AnimationInactive = newValue;
  }
  _getJustActivated() {
    return this._behaviorData.JustActivated !== undefined ? this._behaviorData.JustActivated : false;
  }
  _setJustActivated(newValue) {
    this._behaviorData.JustActivated = newValue;
  }
  _getJustDeactivated() {
    return this._behaviorData.JustDeactivated !== undefined ? this._behaviorData.JustDeactivated : false;
  }
  _setJustDeactivated(newValue) {
    this._behaviorData.JustDeactivated = newValue;
  }
}

// Methods:
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext = {};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects2= [];

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.conditionTrue_1 = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.condition0IsTrue_0;
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Active") : false);
}
}if (gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setActivated(true);
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJustActivated(true);
}
}}

}


{


gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.conditionTrue_1 = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.condition0IsTrue_0;
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Active") : false);
}
}if (gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setActivated(false);
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJustDeactivated(true);
}
}}

}


};

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivated = function(Active, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Active") return Active;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.SetActivatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActivated() ) {
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(10767364);
}
}}
if (gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimation((gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationActive()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActivated()) ) {
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(10768308);
}
}}
if (gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimation((gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationInactive()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJustActivated() ) {
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJustActivated(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJustDeactivated() ) {
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJustDeactivated(false);
}
}}

}


};

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext = {};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects2= [];

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1);

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActivated() ) {
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1);

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActivated()) ) {
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.IsActivatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext = {};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects2= [];

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects1);

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActivated()) ) {
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetActivated(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.ToggleActivatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext = {};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.GDObjectObjects2= [];

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.GDObjectObjects1);

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJustActivated() ) {
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustActivatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext = {};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.GDObjectObjects2= [];

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.GDObjectObjects1);

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJustDeactivated() ) {
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint.prototype.JustDeactivatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("SimpleCheckpoints::Checkpoint", gdjs.evtsExt__SimpleCheckpoints__Checkpoint.Checkpoint);
