webpackJsonp([0],{150:function(e,n){function t(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=150},185:function(e,n){function t(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=185},252:function(e,n,t){"use strict";function a(e){return i._25(0,[(e()(),i._5(0,null,null,2,"ion-nav",[],null,null,null,z.b,z.a)),i._21(6144,null,T.a,null,[U.a]),i._3(4374528,null,0,U.a,[[2,H.a],[2,N.a],W.a,G.a,F.a,i.k,i.x,i.D,i.j,q.l,V.a,[2,X.a],B.a,i.l],{root:[0,"root"]},null),(e()(),i._24(null,["\n"]))],function(e,n){e(n,2,0,n.component.rootPage)},null)}function o(e){return i._25(0,[i._22(402653184,1,{content:0}),(e()(),i._5(0,[[1,0]],null,5,"ion-content",[["class","no-scroll"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],[["window","resize"]],function(e,n,t){var a=!0;return"window:resize"===n&&(a=!1!==i._19(e,2).resize()&&a),a},Y.b,Y.a)),i._3(4374528,[["mainContent",4]],0,J.a,[G.a,F.a,B.a,i.k,i.D,W.a,Q.a,i.x,[2,H.a],[2,N.a]],null,null),(e()(),i._24(1,["\n  "])),(e()(),i._24(1,["\n  "])),(e()(),i._24(1,["\n\n  "])),(e()(),i._24(1,["\n"])),(e()(),i._24(null,["\n"])),(e()(),i._24(null,["\n\n"]))],null,function(e,n){e(n,1,0,i._19(n,2).statusbarPadding,i._19(n,2)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var r=t(32),i=t(0),l=t(6),c=t(97),s=t(214),d=t(274),u=t(360),_=t.n(u),p=function(){function e(e,n,t,a){this.navCtrl=n,this.ngRenderer=t,this.ngZone=a,this.stats=new _.a,this.width=640,this.height=480,console.log("WxH: "+this.width+"x"+this.height)}return e.prototype.ngOnInit=function(){console.log("ngOnInit")},e.prototype.ngAfterViewInit=function(){console.log("Content",this.content),this.createARParameters(),this.appendStatisticsScreen(this.content)},e.prototype.getDeviceId=function(){return navigator.mediaDevices.enumerateDevices().then(function(e){console.log("cam info",e);var n="unkwn";return e.forEach(function(e){if(e.label){var t=e.label.match(/back|rear/);null===t&&void 0===t||(n=e.deviceId)}}),console.log(n),null!==n&&void 0!==n&&"unkwn"!==n||(console.log("Inside if in getdeviceid"),e.forEach(function(e){if(e.kind){var t=e.kind.match(/video|videoinput/);null===t&&void 0===t||(n=e.deviceId)}})),n})},e.prototype.trackMarker=function(e,n,t,a){var o=n.createThreeBarcodeMarker(t,1);o.add(a),e.scene.add(o)},e.prototype.createWebGLRenderer=function(e,n,t,a){var o=new s.WebGLRenderer({alpha:!0});o.setClearColor(new s.Color("lightgrey"),0),console.log("orientation",t.orientation);var r=window.innerWidth,i=window.innerHeight;return"portrait"===t.orientation?(o.setSize(i,r),o.domElement.style.transformOrigin="0 0",o.domElement.style.transform="rotate(-90deg) translateX(-100%)"):o.setSize(r,i),o.domElement.style.position="absolute",o.domElement.style.top="0px",o.domElement.style.left="0px",o},e.prototype.startRendering=function(e){var n=this,t=this.width,a=this.height;("MediaDevices"in window||navigator.getUserMedia)&&this.getDeviceId().then(function(o){console.log("dev id",o),n.deviceId=o,d.ARController.getUserMediaThreeScene({maxARVideoSize:640,cameraConfig:{video:{deviceId:n.deviceId}},cameraParam:"assets/data/camera_para.dat",onSuccess:function(o,r,i){r.setPatternDetectionMode(d.artoolkit.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX);var l=n.createWebGLRenderer(t,a,r,o),c=0;l.domElement.addEventListener("click",function(e){console.log("Inside click"),e.preventDefault(),c+=1},!1);try{n.ngRenderer.appendChild(e.nativeElement,l.domElement)}catch(e){console.log("Error in startRendering",e)}var s=n.createIcosahedron();n.createAvatar(function(e){console.log("Callback returned",e),n.trackMarker(o,r,5,e)}),n.trackMarker(o,r,20,s);var u=function(){n.stats.update(),n.ngZone.runOutsideAngular(function(){o.process(),o.renderOn(l),requestAnimationFrame(u)})};u()}})})},e.prototype.renderVideoStream=function(e){var n=this;this.getDeviceId().then(function(t){navigator.mediaDevices.getUserMedia({video:{deviceId:t}}).then(function(t){var a=n.ngRenderer.createElement("video");a.setAttribute("autoplay",""),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.style.width=window.innerWidth+"px",a.style.height=window.innerHeight+"px",a.srcObject=t,document.body.addEventListener("click",function(){a.play()}),n.ngRenderer.appendChild(e.nativeElement,a),a.onload=function(t){console.log("Video Elem Loaded",t),n.ngRenderer.appendChild(e.nativeElement,a)}})})},e.prototype.createARParameters=function(){var e=this,n=window.innerWidth,t=window.innerHeight;this.getDeviceId().then(function(a){console.log("dev id",a),e.deviceId=a;var o={video:{deviceId:e.deviceId}},r=d.ARController.getUserMediaThreeScene({width:window.innerWidth,height:window.innerHeight,maxARVideoSize:1080,cameraConfig:o,cameraParam:"assets/data/camera_para.dat",onSuccess:function(a,o,i){e.ngRenderer.appendChild(e.content.nativeElement,r),o.setPatternDetectionMode(d.artoolkit.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX);var l=e.createWebGLRenderer(n,t,o,a);e.ngRenderer.appendChild(e.content.nativeElement,l.domElement);var c=e.createTorus();e.createAvatar(function(n){console.log("Callback returned",n),e.trackMarker(a,o,5,n)}),e.trackMarker(a,o,20,c);var s=function(){e.stats.update(),e.ngZone.runOutsideAngular(function(){a.process(),a.renderOn(l),requestAnimationFrame(s)})};s()}})})},e.prototype.appendStatisticsScreen=function(e){try{this.ngRenderer.appendChild(e.nativeElement,this.stats.dom)}catch(e){console.log("Error in appendStatisticsScreen",e)}},e.prototype.incrementXAngle=function(e){e.rotation.x+=5},e.prototype.createCube=function(){var e=new s.Mesh(new s.BoxGeometry(1,1,1),new s.MeshNormalMaterial);return e.material.shading=s.FlatShading,e.position.z=.5,e},e.prototype.createIcosahedron=function(){var e=new s.Mesh(new s.IcosahedronGeometry(.7,1),new s.MeshNormalMaterial);return e.material.shading=s.FlatShading,e.position.z=.7,e},e.prototype.createTorus=function(){var e=new s.TorusKnotGeometry(.3,.1,64,16),n=new s.MeshNormalMaterial,t=new s.Mesh(e,n);return t.scale.x=2,t.scale.y=2,t.scale.z=2,t.position.y=.5,t},e.prototype.createAvatar=function(e){console.log("Starting avatar 20");var n=new s.LoadingManager;n.onLoad=function(){console.log("Loading started!");try{var e=window.speechSynthesis,n=new SpeechSynthesisUtterance("Hey Ya Boy, Whats up.");e.speak(n)}catch(e){console.log("error in speaking",e)}},n.onError=function(){console.log("Error in loding res")},n.onProgress=function(e,n,t){console.log("Loading file: "+e+".\nLoaded "+n+" of "+t+" files.")};var t=new s.ObjectLoader(n),a=new s.MeshNormalMaterial;console.log("Object oader",t,"material",a),t.load("assets/avatar/legoboy.json",function(n){console.log("Avatar Loaded",n),n.traverse(function(e){e instanceof s.Mesh&&(console.log("inside child"),e.material=a,e.material.shading=s.FlatShading)}),n.rotation.x=Math.PI/2,n.position.z=.5,n.scale.x=.7,n.scale.y=.7,n.scale.z=.7,console.log("positionobj x:",n.position.x,"y",n.position.y,"z",n.position.z),e(n)})},e}();Object(l.__decorate)([Object(i.M)("mainContent",{read:i.k}),Object(l.__metadata)("design:type","function"==typeof(h=void 0!==i.k&&i.k)&&h||Object)],p.prototype,"content",void 0),p=Object(l.__decorate)([Object(i.i)({selector:"page-home",templateUrl:"home.html"}),Object(l.__metadata)("design:paramtypes",["function"==typeof(f=void 0!==c.e&&c.e)&&f||Object,"function"==typeof(g=void 0!==c.d&&c.d)&&g||Object,"function"==typeof(v=void 0!==i.E&&i.E)&&v||Object,"function"==typeof(m=void 0!==i.x&&i.x)&&m||Object])],p);var h,f,g,v,m,b=function(){return function(e){this.rootPage=p,e.ready().then(function(){window.URL=window.URL||window.webkitURL,window.MediaDevices=window.MediaDevices||navigator.getUserMedia})}}();b=Object(l.__decorate)([Object(i.i)({templateUrl:"app.html"}),Object(l.__metadata)("design:paramtypes",["function"==typeof(w=void 0!==c.e&&c.e)&&w||Object])],b);var w,y=t(250),M=t(251),k=(t(366),function(){function e(e){this.http=e,console.log("Hello ArengineServiceProvider Provider")}return e.prototype.startAREngine=function(){},e}());k=Object(l.__decorate)([Object(i.o)(),Object(l.__metadata)("design:paramtypes",["function"==typeof(j=void 0!==M.a&&M.a)&&j||Object])],k);var j,O=function(){return function(){}}();O=Object(l.__decorate)([Object(i.u)({declarations:[b,p],imports:[r.a,c.c.forRoot(b,{},{links:[]})],bootstrap:[c.a],entryComponents:[b,p],providers:[{provide:i.l,useClass:c.b},y.a,k]})],O);var E=t(52),A=t(367),R=t(368),x=t(369),C=t(370),I=t(371),S=t(372),L=t(373),P=t(374),D=t(375),z=t(376),T=t(42),U=t(59),H=t(4),N=t(24),W=t(10),G=t(1),F=t(3),q=t(8),V=t(36),X=t(17),B=t(11),K=i._2({encapsulation:2,styles:[],data:{}}),Z=i._0("ng-component",b,function(e){return i._25(0,[(e()(),i._5(0,null,null,1,"ng-component",[],null,null,null,a,K)),i._3(49152,null,0,b,[F.a],null,null)],null,null)},{},{},[]),Y=t(377),J=t(27),Q=t(38),$=i._2({encapsulation:2,styles:[],data:{}}),ee=i._0("page-home",p,function(e){return i._25(0,[(e()(),i._5(0,null,null,1,"page-home",[],null,null,null,o,$)),i._3(4308992,null,0,p,[F.a,N.a,i.E,i.x],null,null)],function(e,n){e(n,1,0)},null)},{},{},[]),ne=t(21),te=t(131),ae=t(22),oe=t(101),re=t(103),ie=t(128),le=t(19),ce=t(39),se=t(109),de=t(212),ue=t(54),_e=t(47),pe=t(111),he=t(74),fe=t(116),ge=t(127),ve=t(123),me=t(211),be=t(129),we=t(34),ye=t(110),Me=t(130),ke=i._1(O,[E.b],function(e){return i._16([i._17(512,i.j,i.X,[[8,[A.a,R.a,x.a,C.a,I.a,S.a,L.a,P.a,D.a,Z,ee]],[3,i.j],i.v]),i._17(5120,i.t,i._15,[[3,i.t]]),i._17(4608,ne.k,ne.j,[i.t]),i._17(5120,i.b,i._6,[]),i._17(5120,i.r,i._12,[]),i._17(5120,i.s,i._13,[]),i._17(4608,r.c,r.s,[ne.c]),i._17(6144,i.H,null,[r.c]),i._17(4608,r.f,te.a,[]),i._17(5120,r.d,function(e,n,t,a){return[new r.l(e),new r.p(n),new r.o(t,a)]},[ne.c,ne.c,ne.c,r.f]),i._17(4608,r.e,r.e,[r.d,i.x]),i._17(135680,r.n,r.n,[ne.c]),i._17(4608,r.m,r.m,[r.e,r.n]),i._17(6144,i.F,null,[r.m]),i._17(6144,r.q,null,[r.n]),i._17(4608,i.K,i.K,[i.x]),i._17(4608,r.h,r.h,[ne.c]),i._17(4608,r.j,r.j,[ne.c]),i._17(4608,ae.k,ae.k,[]),i._17(4608,ae.c,ae.c,[]),i._17(4608,oe.a,oe.a,[W.a,G.a]),i._17(4608,re.a,re.a,[W.a,G.a]),i._17(4608,ie.a,ie.a,[]),i._17(4608,le.a,le.a,[]),i._17(4608,ce.a,ce.a,[F.a]),i._17(4608,Q.a,Q.a,[G.a,F.a,i.x,B.a]),i._17(4608,se.a,se.a,[W.a,G.a]),i._17(5120,ne.f,de.b,[ne.q,[2,ne.a],G.a]),i._17(4608,ne.e,ne.e,[ne.f]),i._17(5120,ue.b,ue.d,[W.a,ue.a]),i._17(5120,X.a,X.b,[W.a,ue.b,ne.e,_e.b,i.j]),i._17(4608,pe.a,pe.a,[W.a,G.a,X.a]),i._17(4608,he.a,he.a,[W.a,G.a]),i._17(4608,fe.a,fe.a,[W.a,G.a,X.a]),i._17(4608,ge.a,ge.a,[G.a,F.a,B.a,W.a,q.l]),i._17(4608,ve.a,ve.a,[W.a,G.a]),i._17(4608,V.a,V.a,[F.a,G.a]),i._17(4608,y.a,y.a,[]),i._17(4608,k,k,[M.a]),i._17(512,ne.b,ne.b,[]),i._17(512,i.l,me.a,[]),i._17(256,G.b,{},[]),i._17(1024,be.a,be.b,[]),i._17(1024,F.a,F.b,[r.b,be.a,i.x]),i._17(1024,G.a,G.c,[G.b,F.a]),i._17(512,B.a,B.a,[F.a]),i._17(512,we.a,we.a,[]),i._17(512,W.a,W.a,[G.a,F.a,[2,we.a]]),i._17(512,q.l,q.l,[W.a]),i._17(256,ue.a,{links:[]},[]),i._17(512,i.h,i.h,[]),i._17(512,ye.a,ye.a,[i.h]),i._17(1024,_e.b,_e.c,[ye.a,i.q]),i._17(1024,i.c,function(e,n,t,a,o,i,l,c,s,d,u,_,p,h){return[r.r(e,n),Me.a(t),ie.b(a,o),ge.b(i,l,c,s,d),_e.d(u,_,p,h)]},[[2,r.i],[2,i.w],G.a,F.a,B.a,G.a,F.a,B.a,W.a,q.l,G.a,ue.a,_e.b,i.x]),i._17(512,i.d,i.d,[[2,i.c]]),i._17(131584,i._4,i._4,[i.x,i.Y,i.q,i.l,i.j,i.d]),i._17(2048,i.f,null,[i._4]),i._17(512,i.e,i.e,[i.f]),i._17(512,r.a,r.a,[[3,r.a]]),i._17(512,ae.j,ae.j,[]),i._17(512,ae.d,ae.d,[]),i._17(512,ae.i,ae.i,[]),i._17(512,de.a,de.a,[]),i._17(512,O,O,[]),i._17(256,E.a,b,[]),i._17(256,ne.a,"/",[])])});Object(i.R)(),Object(r.k)().bootstrapModuleFactory(ke)},313:function(e,n){},314:function(e,n){}},[252]);