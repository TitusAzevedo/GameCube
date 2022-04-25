
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer || {};

/**
 * Behavior generated from Simple Checkpoint Player
 */
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer = class CheckpointPlayer extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.SpawnPointX = behaviorData.SpawnPointX !== undefined ? behaviorData.SpawnPointX : Number("") || 0;
    this._behaviorData.SpawnPointY = behaviorData.SpawnPointY !== undefined ? behaviorData.SpawnPointY : Number("") || 0;
    this._behaviorData.AutoSaveSpawnpoint = behaviorData.AutoSaveSpawnpoint !== undefined ? behaviorData.AutoSaveSpawnpoint : false;
    this._behaviorData.DefaultSpawnpointStorageName = behaviorData.DefaultSpawnpointStorageName !== undefined ? behaviorData.DefaultSpawnpointStorageName : "SpawnpointStorage";
    this._behaviorData.DefaultSpawnpointStorageGroup = behaviorData.DefaultSpawnpointStorageGroup !== undefined ? behaviorData.DefaultSpawnpointStorageGroup : "Spawnpoint";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.SpawnPointX !== newBehaviorData.SpawnPointX)
      this._behaviorData.SpawnPointX = newBehaviorData.SpawnPointX;
    if (oldBehaviorData.SpawnPointY !== newBehaviorData.SpawnPointY)
      this._behaviorData.SpawnPointY = newBehaviorData.SpawnPointY;
    if (oldBehaviorData.AutoSaveSpawnpoint !== newBehaviorData.AutoSaveSpawnpoint)
      this._behaviorData.AutoSaveSpawnpoint = newBehaviorData.AutoSaveSpawnpoint;
    if (oldBehaviorData.DefaultSpawnpointStorageName !== newBehaviorData.DefaultSpawnpointStorageName)
      this._behaviorData.DefaultSpawnpointStorageName = newBehaviorData.DefaultSpawnpointStorageName;
    if (oldBehaviorData.DefaultSpawnpointStorageGroup !== newBehaviorData.DefaultSpawnpointStorageGroup)
      this._behaviorData.DefaultSpawnpointStorageGroup = newBehaviorData.DefaultSpawnpointStorageGroup;

    return true;
  }

  // Properties:
  
  _getSpawnPointX() {
    return this._behaviorData.SpawnPointX !== undefined ? this._behaviorData.SpawnPointX : Number("") || 0;
  }
  _setSpawnPointX(newValue) {
    this._behaviorData.SpawnPointX = newValue;
  }
  _getSpawnPointY() {
    return this._behaviorData.SpawnPointY !== undefined ? this._behaviorData.SpawnPointY : Number("") || 0;
  }
  _setSpawnPointY(newValue) {
    this._behaviorData.SpawnPointY = newValue;
  }
  _getAutoSaveSpawnpoint() {
    return this._behaviorData.AutoSaveSpawnpoint !== undefined ? this._behaviorData.AutoSaveSpawnpoint : false;
  }
  _setAutoSaveSpawnpoint(newValue) {
    this._behaviorData.AutoSaveSpawnpoint = newValue;
  }
  _getDefaultSpawnpointStorageName() {
    return this._behaviorData.DefaultSpawnpointStorageName !== undefined ? this._behaviorData.DefaultSpawnpointStorageName : "SpawnpointStorage";
  }
  _setDefaultSpawnpointStorageName(newValue) {
    this._behaviorData.DefaultSpawnpointStorageName = newValue;
  }
  _getDefaultSpawnpointStorageGroup() {
    return this._behaviorData.DefaultSpawnpointStorageGroup !== undefined ? this._behaviorData.DefaultSpawnpointStorageGroup : "Spawnpoint";
  }
  _setDefaultSpawnpointStorageGroup(newValue) {
    this._behaviorData.DefaultSpawnpointStorageGroup = newValue;
  }
}

// Methods:
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext = {};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects2= [];

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpawnPointX((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpawnPointY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1);

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAutoSaveSpawnpoint() ) {
        gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).WriteSpawn("", "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawn = function(X, Y, parentEventsFunctionContext) {

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
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.SetSpawnContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext = {};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDObjectObjects2= [];
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects2= [];

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.conditionTrue_1 = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition0IsTrue_0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("SetSpawn") : false);
}
}if (gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetSpawn((( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1[0].getPointX("")), (( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1[0].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CheckpointObject"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1);

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("CheckpointObjectBehavior")).IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1[k] = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1.length = k;}if (gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("CheckpointObjectBehavior")).ToggleActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.conditionTrue_1 = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition0IsTrue_0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("SetSpawnIfAlreadyActivated") : false);
}
}if ( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.conditionTrue_1 = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition1IsTrue_0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("SetSpawn") : false);
}
}}
if (gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("CheckpointObject"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetSpawn((( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1[0].getPointX("")), (( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1[0].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpoint = function(CheckpointObject, CheckpointObjectBehavior, SetSpawn, SetSpawnIfAlreadyActivated, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "CheckpointObject": CheckpointObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "CheckpointObject": gdjs.objectsListsToArray(CheckpointObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "CheckpointObjectBehavior": CheckpointObjectBehavior
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
if (argName === "SetSpawn") return SetSpawn;
if (argName === "SetSpawnIfAlreadyActivated") return SetSpawnIfAlreadyActivated;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.GDCheckpointObjectObjects2.length = 0;

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ActivateCheckpointContext.eventsList1(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext = {};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.GDObjectObjects2= [];

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.GDObjectObjects1[i].setPosition((gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnPointX()),(gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnPointY()));
}
}}

}


};

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawn = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ToSpawnContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext = {};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects2= [];

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageName").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("StorageName") : ""));
}{runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageGroup").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Group") : ""));
}}

}


{


gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.conditionTrue_1 = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.condition0IsTrue_0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("StorageName") : "") == "");
}
}if (gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1);
{runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageName").setString((( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDefaultSpawnpointStorageName()));
}}

}


{


gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.conditionTrue_1 = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.condition0IsTrue_0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Group") : "") == "");
}
}if (gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1);
{runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageGroup").setString((( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDefaultSpawnpointStorageGroup()));
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageName")), gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageGroup")) + ".SpawnX", (( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnPointX()));
}{gdjs.evtTools.storage.writeNumberInJSONFile(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageName")), gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageGroup")) + ".SpawnY", (( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnPointY()));
}}

}


};

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawn = function(StorageName, Group, parentEventsFunctionContext) {

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
if (argName === "StorageName") return StorageName;
if (argName === "Group") return Group;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.WriteSpawnContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext = {};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects2= [];

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageName").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("StorageName") : ""));
}{runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageGroup").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Group") : ""));
}}

}


{


gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.conditionTrue_1 = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.condition0IsTrue_0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("StorageName") : "") == "");
}
}if (gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1);
{runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageName").setString((( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDefaultSpawnpointStorageName()));
}}

}


{


gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.conditionTrue_1 = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.condition0IsTrue_0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Group") : "") == "");
}
}if (gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1);
{runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageGroup").setString((( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDefaultSpawnpointStorageGroup()));
}}

}


{


{
{gdjs.evtTools.storage.readNumberFromJSONFile(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageName")), gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageGroup")) + ".SpawnX", runtimeScene, runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempSpawnX"));
}{gdjs.evtTools.storage.readNumberFromJSONFile(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageName")), gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempStorageGroup")) + ".SpawnY", runtimeScene, runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempSpawnY"));
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpawnPointX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempSpawnX")));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpawnPointY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__SimpleCheckpoints").getChild("TempSpawnY")));
}
}}

}


};

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawn = function(StorageName, Group, parentEventsFunctionContext) {

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
if (argName === "StorageName") return StorageName;
if (argName === "Group") return Group;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.ReadSpawnContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext = {};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects1);

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAutoSaveSpawnpoint() ) {
        gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ReadSpawn("", "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("SimpleCheckpoints::CheckpointPlayer", gdjs.evtsExt__SimpleCheckpoints__CheckpointPlayer.CheckpointPlayer);
