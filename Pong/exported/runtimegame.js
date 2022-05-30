var gdjs;(function(a){const g=new a.Logger("Game manager");class c{constructor(e,t){this._notifyScenesForGameResolutionResize=!1;this._paused=!1;this._sessionMetricsInitialized=!1;this._disableMetrics=!1;this._options=t||{},this._variables=new a.VariablesContainer(e.variables),this._data=e,this._imageManager=new a.ImageManager(this._data.resources.resources),this._soundManager=new a.SoundManager(this._data.resources.resources),this._fontManager=new a.FontManager(this._data.resources.resources),this._jsonManager=new a.JsonManager(this._data.resources.resources),this._bitmapFontManager=new a.BitmapFontManager(this._data.resources.resources,this._imageManager),this._effectsManager=new a.EffectsManager,this._maxFPS=this._data?this._data.properties.maxFPS:60,this._minFPS=this._data?this._data.properties.minFPS:15,this._gameResolutionWidth=this._data.properties.windowWidth,this._gameResolutionHeight=this._data.properties.windowHeight,this._originalWidth=this._gameResolutionWidth,this._originalHeight=this._gameResolutionHeight,this._resizeMode=this._data.properties.sizeOnStartupMode,this._adaptGameResolutionAtRuntime=this._data.properties.adaptGameResolutionAtRuntime,this._scaleMode=e.properties.scaleMode||"linear",this._pixelsRounding=this._data.properties.pixelsRounding,this._renderer=new a.RuntimeGameRenderer(this,this._options.forceFullscreen||!1),this._sceneStack=new a.SceneStack(this),this._inputManager=new a.InputManager,this._injectExternalLayout=this._options.injectExternalLayout||"",this._debuggerClient=a.DebuggerClient?new a.DebuggerClient(this):null,this._isPreview=this._options.isPreview||!1,this._sessionId=null,this._playerId=null}setProjectData(e){this._data=e,this._imageManager.setResources(this._data.resources.resources),this._soundManager.setResources(this._data.resources.resources),this._fontManager.setResources(this._data.resources.resources),this._jsonManager.setResources(this._data.resources.resources),this._bitmapFontManager.setResources(this._data.resources.resources)}getAdditionalOptions(){return this._options}getRenderer(){return this._renderer}getVariables(){return this._variables}getSoundManager(){return this._soundManager}getImageManager(){return this._imageManager}getFontManager(){return this._fontManager}getBitmapFontManager(){return this._bitmapFontManager}getInputManager(){return this._inputManager}getJsonManager(){return this._jsonManager}getEffectsManager(){return this._effectsManager}getGameData(){return this._data}getSceneData(e){let t=null;for(let i=0,n=this._data.layouts.length;i<n;++i){const s=this._data.layouts[i];if(e===void 0||s.name===e){t=s;break}}return t===null&&g.error('The game has no scene called "'+e+'"'),t}hasScene(e){let t=!1;for(let i=0,n=this._data.layouts.length;i<n;++i){const s=this._data.layouts[i];if(e===void 0||s.name==e){t=!0;break}}return t}getExternalLayoutData(e){let t=null;for(let i=0,n=this._data.externalLayouts.length;i<n;++i){const s=this._data.externalLayouts[i];if(s.name===e){t=s;break}}return t}getInitialObjectsData(){return this._data.objects||[]}getOriginalWidth(){return this._originalWidth}getOriginalHeight(){return this._originalHeight}getGameResolutionWidth(){return this._gameResolutionWidth}getGameResolutionHeight(){return this._gameResolutionHeight}setGameResolutionSize(e,t){if(this._gameResolutionWidth=e,this._gameResolutionHeight=t,this._adaptGameResolutionAtRuntime&&a.RuntimeGameRenderer&&a.RuntimeGameRenderer.getWindowInnerWidth&&a.RuntimeGameRenderer.getWindowInnerHeight){const i=a.RuntimeGameRenderer.getWindowInnerWidth(),n=a.RuntimeGameRenderer.getWindowInnerHeight();let s=this._gameResolutionWidth,o=this._gameResolutionHeight;this._resizeMode==="adaptWidth"?this._gameResolutionWidth=this._gameResolutionHeight*i/n:this._resizeMode==="adaptHeight"&&(this._gameResolutionHeight=this._gameResolutionWidth*n/i)}this._renderer.updateRendererSize(),this._notifyScenesForGameResolutionResize=!0}setGameResolutionResizeMode(e){this._resizeMode=e,this._forceGameResolutionUpdate()}getGameResolutionResizeMode(){return this._resizeMode}setAdaptGameResolutionAtRuntime(e){this._adaptGameResolutionAtRuntime=e,this._forceGameResolutionUpdate()}getAdaptGameResolutionAtRuntime(){return this._adaptGameResolutionAtRuntime}getMinimalFramerate(){return this._minFPS}getScaleMode(){return this._scaleMode}getPixelsRounding(){return this._pixelsRounding}pause(e){this._paused=e}loadAllAssets(e,t){const i=new a.LoadingScreenRenderer(this.getRenderer(),this._imageManager,this._data.properties.loadingScreen),n=this._data.resources.resources.length,s=this;this._imageManager.loadTextures(function(o,l){const r=Math.floor(o/n*100);i.setPercent(r),t&&t(r)},function(o){s._soundManager.preloadAudio(function(l,r){const u=Math.floor((o+l)/n*100);i.setPercent(u),t&&t(u)},function(l){s._fontManager.loadFonts(function(r,u){const d=Math.floor((o+l+r)/n*100);i.setPercent(d),t&&t(d)},function(r){s._jsonManager.preloadJsons(function(u,d){const h=Math.floor((o+l+r+u)/n*100);i.setPercent(h),t&&t(h)},function(u){s._bitmapFontManager.loadBitmapFontData(d=>{var h=Math.floor((o+l+r+u+d)/n*100);i.setPercent(h),t&&t(h)}).then(()=>i.unload()).then(()=>{e()})})})})})}startGameLoop(){try{if(!this.hasScene()){g.error("The game has no scene.");return}this._forceGameResolutionUpdate();const e=this._data.firstLayout;this._sceneStack.push(this.hasScene(e)?e:this.getSceneData().name,this._injectExternalLayout);const t=this;let i=0;this._renderer.startGameLoop(function(n){if(t._paused||(i+=n,t._maxFPS>0&&1e3/i>t._maxFPS+7))return!0;const s=i;return i=0,t._notifyScenesForGameResolutionResize&&(t._sceneStack.onGameResolutionResized(),t._notifyScenesForGameResolutionResize=!1),t._sceneStack.step(s)?(t.getInputManager().onFrameEnded(),!0):!1}),setTimeout(()=>{this._setupSessionMetrics()},1e4)}catch(e){throw g.error("Internal crash: "+e),e}}enableMetrics(e){this._disableMetrics=!e,e&&this._setupSessionMetrics()}_setupSessionMetrics(){if(this._sessionMetricsInitialized||this._disableMetrics||this.isPreview()||typeof fetch=="undefined"||!this._data.properties.projectUuid)return;const e="https://api.gdevelop-app.com/analytics";this._playerId=this._makePlayerUuid();let t=Date.now();fetch(e+"/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({gameId:this._data.properties.projectUuid,playerId:this._playerId,game:{name:this._data.properties.name||"",packageName:this._data.properties.packageName||"",version:this._data.properties.version||"",location:window.location.href},platform:{isCordova:!!window.cordova,devicePlatform:typeof device!="undefined"&&device.platform||"",navigatorPlatform:typeof navigator!="undefined"?navigator.platform:"",hasTouch:typeof navigator!="undefined"?!!navigator.maxTouchPoints&&navigator.maxTouchPoints>2:!1}})}).then(n=>{if(!n.ok)throw console.error("Error while creating the session",n),new Error("Error while creating the session");return n}).then(n=>n.text()).then(n=>{this._sessionId=n}).catch(()=>{});const i=()=>{!this._sessionId||Date.now()-t<3*1e3||(t=Date.now(),navigator.sendBeacon(e+"/session-hit",JSON.stringify({gameId:this._data.properties.projectUuid,playerId:this._playerId,sessionId:this._sessionId})))};if(typeof navigator!="undefined"&&typeof document!="undefined"){document.addEventListener("visibilitychange",()=>{i()}),window.addEventListener("pagehide",()=>{i()},!1);const n=typeof safari=="object"&&safari.pushNotification,s=/electron/i.test(navigator.userAgent);(n||s)&&window.addEventListener("beforeunload",()=>{i()})}this._sessionMetricsInitialized=!0,this._sessionId=this._sessionId}_makePlayerUuid(){try{const e="GDJS-internal-player-uuid",t=localStorage.getItem(e);if(t)return t;const i=a.makeUuid();return localStorage.setItem(e,i),i}catch{return a.makeUuid()}}getSessionId(){return this._sessionId}getPlayerId(){return this._playerId}onWindowInnerSizeChanged(){this._forceGameResolutionUpdate()}_forceGameResolutionUpdate(){this.setGameResolutionSize(this._gameResolutionWidth,this._gameResolutionHeight)}startCurrentSceneProfiler(e){const t=this._sceneStack.getCurrentScene();return t?(t.startProfiler(e),!0):!1}stopCurrentSceneProfiler(){const e=this._sceneStack.getCurrentScene();!e||e.stopProfiler()}wasFirstSceneLoaded(){return this._sceneStack.wasFirstSceneLoaded()}getSceneStack(){return this._sceneStack}isPreview(){return this._isPreview}getExtensionProperty(e,t){for(let i of this._data.properties.extensionProperties)if(i.extension===e&&i.property===t)return i.value;return null}}a.RuntimeGame=c})(gdjs||(gdjs={}));
//# sourceMappingURL=runtimegame.js.map