var Tc="187";var wc=0,ro=1,Ac=2;var Rs=1,Rc=2,Zi=3,Ji=0,kt=1,Zt=2,Rn=0,Cs=1,gn=2,ao=3,oo=4,Cc=5;var $i=100,Ic=101,Pc=102,Lc=103,Nc=104,Dc=200,Uc=201,Fc=202,Oc=203,Bc=204,zc=205,Gc=206,Hc=207,kc=208,Wc=209,Vc=210,Xc=211,qc=212,Yc=213,Zc=214,Jc=0,$c=1,Kc=2,lo=3,Qc=4,jc=5,eh=6,th=7,nh=0,ih=1,sh=2,_n=0,Is=1,Ps=2,Ls=3,Ns=4,Ds=5,Us=6,Fs=7;var Os=301,Ki=302,zr=303,Gr=304,rh=1000,Hr=1001,ah=1002,qn=1003,oh=1004;var Bs=1005;var tn=1006,kr=1007;var Yn=1008;var dn=1009,lh=1010,ch=1011,zs=1012,co=1013,Zn=1014,Cn=1015,Wt=1016,ho=1017,uo=1018,oi=1020,hh=35902,uh=35899,dh=1021,fh=1022,In=1023,Qi=1026,Jn=1027,ph=1028,fo=1029,li=1030,po=1031;var mo=1033,Wr=33776,Vr=33777,Xr=33778,qr=33779,go=35840,_o=35841,xo=35842,vo=35843,yo=36196,So=37492,Mo=37496,bo=37488,Eo=37489,Yr=37490,To=37491,wo=37808,Ao=37809,Ro=37810,Co=37811,Io=37812,Po=37813,Lo=37814,No=37815,Do=37816,Uo=37817,Fo=37818,Oo=37819,Bo=37820,zo=37821,Go=36492,Ho=36494,ko=36495,Wo=36283,Vo=36284,Zr=36285,Xo=36286;var qo=0,mh=1,ci="",Gs="srgb",Yo="srgb-linear",Zo="linear",mt="srgb";var gh=512,_h=513,xh=514,Jo=515,vh=516,yh=517,$o=518,Ko=519;var Qo="300 es",jo=2000;function wu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Au(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Vi(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Sh(){let e=Vi("canvas");return e.style.display="block",e}var Gl={},Xi=null;function bs(...e){let t="THREE."+e.shift();if(Xi)Xi("log",t,...e);else console.log(t,...e)}function Mh(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let n=e[1];if(n&&n.isStackTrace)e[0]+=" "+n.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function We(...e){e=Mh(e);let t="THREE."+e.shift();if(Xi)Xi("warn",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.warn(n.getError(t));else console.warn(t,...e)}}function qe(...e){e=Mh(e);let t="THREE."+e.shift();if(Xi)Xi("error",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.error(n.getError(t));else console.error(t,...e)}}function ys(...e){let t=e.join(" ");if(t in Gl)return;Gl[t]=!0,We(...e)}function bh(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Eh={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class Pn{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[e]===void 0)n[e]=[];if(n[e].indexOf(t)===-1)n[e].push(t)}hasEventListener(e,t){let n=this._listeners;if(n===void 0)return!1;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);if(s!==-1)i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}var Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ra=Math.PI/180,Ur=180/Math.PI;function $n(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[e&255]+Gt[e>>8&255]+Gt[e>>16&255]+Gt[e>>24&255]+"-"+Gt[t&255]+Gt[t>>8&255]+"-"+Gt[t>>16&15|64]+Gt[t>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function rt(e,t,n){return Math.max(t,Math.min(n,e))}function Ru(e,t){return(e%t+t)%t}function Ca(e,t,n){return(1-n)*e+n*t}function Th(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Jr(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wh(e,t){if(t.constructor===Float32Array)return e;let n=Jr(t);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function Ah(e,t){if(t.constructor===Float32Array)return e;let n=Jr(t);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}class ue{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r+0],h=s[r+1],f=s[r+2],v=s[r+3];if(u!==v||o!==d||l!==h||c!==f){let M=o*d+l*h+c*f+u*v;if(M<0)d=-d,h=-h,f=-f,v=-v,M=-M;let p=1-a;if(M<0.9995){let _=Math.acos(M),T=Math.sin(_);p=Math.sin(p*_)/T,a=Math.sin(a*_)/T,o=o*p+d*a,l=l*p+h*a,c=c*p+f*a,u=u*p+v*a}else{o=o*p+d*a,l=l*p+h*a,c=c*p+f*a,u=u*p+v*a;let _=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=_,l*=_,c*=_,u*=_}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=s[r],d=s[r+1],h=s[r+2],f=s[r+3];return e[t]=a*f+c*u+o*h-l*d,e[t+1]=o*f+c*d+l*u-a*h,e[t+2]=l*f+c*h+a*d-o*u,e[t+3]=c*f-a*u-o*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:n,_y:i,_z:s,_order:r}=e,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),u=a(s/2),d=o(n/2),h=o(i/2),f=o(s/2);switch(r){case"XYZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"YXZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"ZXY":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"ZYX":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"YZX":this._x=d*c*u+l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u-d*h*f;break;case"XZY":this._x=d*c*u-l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u+d*h*f;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10],d=n+a+u;if(d>0){let h=0.5/Math.sqrt(d+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>u){let h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>u){let h=2*Math.sqrt(1+a-n-u);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;if(n<0.00000001)if(n=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=n;else this._x=0,this._y=-e.z,this._z=e.y,this._w=n;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,{_x:a,_y:o,_z:l,_w:c}=t;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,a=this.dot(e);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-t;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+s*t,this._w=this._w*o+r*t,this._onChangeCallback()}else this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+s*t,this._w=this._w*o+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){if(n===void 0)n=this.z;return this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=e,l=2*(r*i-a*n),c=2*(a*t-s*i),u=2*(s*n-r*t);return this.x=t+o*l+r*u-a*c,this.y=n+o*c+a*l-s*u,this.z=i+o*u+s*c-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:n,y:i,z:s}=e,{x:r,y:a,z:o}=t;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Ia=new U,Hl=new Ln;class Je{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l)}set(e,t,n,i,s,r,a,o,l){let c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7],d=n[2],h=n[5],f=n[8],v=i[0],M=i[3],p=i[6],_=i[1],T=i[4],w=i[7],y=i[2],A=i[5],I=i[8];return s[0]=r*v+a*_+o*y,s[3]=r*M+a*T+o*A,s[6]=r*p+a*w+o*I,s[1]=l*v+c*_+u*y,s[4]=l*M+c*T+u*A,s[7]=l*p+c*w+u*I,s[2]=d*v+h*_+f*y,s[5]=d*M+h*T+f*A,s[8]=d*p+h*w+f*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*r*c-t*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=c*r-a*l,d=a*o-c*s,h=l*s-r*o,f=t*u+n*d+i*h;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=u*v,e[1]=(i*l-c*n)*v,e[2]=(a*n-i*r)*v,e[3]=d*v,e[4]=(c*t-i*o)*v,e[5]=(i*s-a*t)*v,e[6]=h*v,e[7]=(n*o-l*t)*v,e[8]=(r*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+e,-i*l,i*o,-i*(-l*r+o*a)+a+t,0,0,1),this}scale(e,t){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var Pa=new Je,kl=new Je().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Wl=new Je().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Cu(){let e={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=An(s.r),s.g=An(s.g),s.b=An(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return e.define({["srgb-linear"]:{primaries:t,whitePoint:i,transfer:"linear",toXYZ:kl,fromXYZ:Wl,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:t,whitePoint:i,transfer:"srgb",toXYZ:kl,fromXYZ:Wl,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),e}var it=Cu();function An(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Wi(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var Ti;class el{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{if(Ti===void 0)Ti=Vi("canvas");Ti.width=e.width,Ti.height=e.height;let i=Ti.getContext("2d");if(e instanceof ImageData)i.putImageData(e,0,0);else i.drawImage(e,0,0,e.width,e.height);n=Ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=An(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[n]=Math.floor(An(t[n]/255)*255);else t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Iu=0;class Hs{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(La(i[r].image));else s.push(La(i[r]))}else s=La(i);n.url=s}if(!t)e.images[this.uuid]=n;return n}}function La(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return el.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return We("Texture: Unable to serialize Texture."),{}}var Pu=0,Na=new U;class It extends Pn{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=It.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=$n(),this.name="",this.source=new Hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Na).x}get height(){return this.source.getSize(Na).y}get depth(){return this.source.getSize(Na).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!t)e.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=300;It.DEFAULT_ANISOTROPY=1;class Et{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,r=0.01,a=0.1,o=e.elements,l=o[0],c=o[4],u=o[8],d=o[1],h=o[5],f=o[9],v=o[2],M=o[6],p=o[10];if(Math.abs(c-d)<0.01&&Math.abs(u-v)<0.01&&Math.abs(f-M)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(u+v)<0.1&&Math.abs(f+M)<0.1&&Math.abs(l+h+p-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,w=(h+1)/2,y=(p+1)/2,A=(c+d)/4,I=(u+v)/4,g=(f+M)/4;if(T>w&&T>y)if(T<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(T),i=A/n,s=I/n;else if(w>y)if(w<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(w),n=A/i,s=g/i;else if(y<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(y),n=I/s,i=g/s;return this.set(n,i,s,t),this}let _=Math.sqrt((M-f)*(M-f)+(u-v)*(u-v)+(d-c)*(d-c));if(Math.abs(_)<0.001)_=1;return this.x=(M-f)/_,this.y=(u-v)/_,this.z=(d-c)/_,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tl extends Pn{constructor(e=1,t=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new It({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Hs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ft extends tl{constructor(e=1,t=1,n={}){super(e,t,n);this.isWebGLRenderTarget=!0}}class $r extends It{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nl extends It{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class gt{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,r,a,o,l,c,u,d,h,f,v,M){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l,c,u,d,h,f,v,M)}set(e,t,n,i,s,r,a,o,l,c,u,d,h,f,v,M){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=o,p[2]=l,p[6]=c,p[10]=u,p[14]=d,p[3]=h,p[7]=f,p[11]=v,p[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/wi.setFromMatrixColumn(e,0).length(),s=1/wi.setFromMatrixColumn(e,1).length(),r=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:n,y:i,z:s}=e,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=r*c,h=r*u,f=a*c,v=a*u;t[0]=o*c,t[4]=-o*u,t[8]=l,t[1]=h+f*l,t[5]=d-v*l,t[9]=-a*o,t[2]=v-d*l,t[6]=f+h*l,t[10]=r*o}else if(e.order==="YXZ"){let d=o*c,h=o*u,f=l*c,v=l*u;t[0]=d+v*a,t[4]=f*a-h,t[8]=r*l,t[1]=r*u,t[5]=r*c,t[9]=-a,t[2]=h*a-f,t[6]=v+d*a,t[10]=r*o}else if(e.order==="ZXY"){let d=o*c,h=o*u,f=l*c,v=l*u;t[0]=d-v*a,t[4]=-r*u,t[8]=f+h*a,t[1]=h+f*a,t[5]=r*c,t[9]=v-d*a,t[2]=-r*l,t[6]=a,t[10]=r*o}else if(e.order==="ZYX"){let d=r*c,h=r*u,f=a*c,v=a*u;t[0]=o*c,t[4]=f*l-h,t[8]=d*l+v,t[1]=o*u,t[5]=v*l+d,t[9]=h*l-f,t[2]=-l,t[6]=a*o,t[10]=r*o}else if(e.order==="YZX"){let d=r*o,h=r*l,f=a*o,v=a*l;t[0]=o*c,t[4]=v-d*u,t[8]=f*u+h,t[1]=u,t[5]=r*c,t[9]=-a*c,t[2]=-l*c,t[6]=h*u+f,t[10]=d-v*u}else if(e.order==="XZY"){let d=r*o,h=r*l,f=a*o,v=a*l;t[0]=o*c,t[4]=-u,t[8]=l*c,t[1]=d*u+v,t[5]=r*c,t[9]=h*u-f,t[2]=f*u-h,t[6]=a*c,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lu,e,Nu)}lookAt(e,t,n){let i=this.elements;if($t.subVectors(e,t),$t.lengthSq()===0)$t.z=1;if($t.normalize(),Gn.crossVectors(n,$t),Gn.lengthSq()===0){if(Math.abs(n.z)===1)$t.x+=0.0001;else $t.z+=0.0001;$t.normalize(),Gn.crossVectors(n,$t)}return Gn.normalize(),rr.crossVectors($t,Gn),i[0]=Gn.x,i[4]=rr.x,i[8]=$t.x,i[1]=Gn.y,i[5]=rr.y,i[9]=$t.y,i[2]=Gn.z,i[6]=rr.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],u=n[5],d=n[9],h=n[13],f=n[2],v=n[6],M=n[10],p=n[14],_=n[3],T=n[7],w=n[11],y=n[15],A=i[0],I=i[4],g=i[8],S=i[12],P=i[1],H=i[5],L=i[9],G=i[13],J=i[2],R=i[6],q=i[10],K=i[14],k=i[3],pe=i[7],V=i[11],Z=i[15];return s[0]=r*A+a*P+o*J+l*k,s[4]=r*I+a*H+o*R+l*pe,s[8]=r*g+a*L+o*q+l*V,s[12]=r*S+a*G+o*K+l*Z,s[1]=c*A+u*P+d*J+h*k,s[5]=c*I+u*H+d*R+h*pe,s[9]=c*g+u*L+d*q+h*V,s[13]=c*S+u*G+d*K+h*Z,s[2]=f*A+v*P+M*J+p*k,s[6]=f*I+v*H+M*R+p*pe,s[10]=f*g+v*L+M*q+p*V,s[14]=f*S+v*G+M*K+p*Z,s[3]=_*A+T*P+w*J+y*k,s[7]=_*I+T*H+w*R+y*pe,s[11]=_*g+T*L+w*q+y*V,s[15]=_*S+T*G+w*K+y*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],o=e[9],l=e[13],c=e[2],u=e[6],d=e[10],h=e[14],f=e[3],v=e[7],M=e[11],p=e[15],_=o*h-l*d,T=a*h-l*u,w=a*d-o*u,y=r*h-l*c,A=r*d-o*c,I=r*u-a*c;return t*(v*_-M*T+p*w)-n*(f*_-M*y+p*A)+i*(f*T-v*y+p*I)-s*(f*w-v*A+M*I)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],a=e[9],o=e[2],l=e[6],c=e[10];return t*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;if(e.isVector3)i[12]=e.x,i[13]=e.y,i[14]=e.z;else i[12]=e,i[13]=t,i[14]=n;return this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=e[9],d=e[10],h=e[11],f=e[12],v=e[13],M=e[14],p=e[15],_=t*a-n*r,T=t*o-i*r,w=t*l-s*r,y=n*o-i*a,A=n*l-s*a,I=i*l-s*o,g=c*v-u*f,S=c*M-d*f,P=c*p-h*f,H=u*M-d*v,L=u*p-h*v,G=d*p-h*M,J=_*G-T*L+w*H+y*P-A*S+I*g;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/J;return e[0]=(a*G-o*L+l*H)*R,e[1]=(i*L-n*G-s*H)*R,e[2]=(v*I-M*A+p*y)*R,e[3]=(d*A-u*I-h*y)*R,e[4]=(o*P-r*G-l*S)*R,e[5]=(t*G-i*P+s*S)*R,e[6]=(M*w-f*I-p*T)*R,e[7]=(c*I-d*w+h*T)*R,e[8]=(r*L-a*P+l*g)*R,e[9]=(n*P-t*L-s*g)*R,e[10]=(f*A-v*w+p*_)*R,e[11]=(u*w-c*A-h*_)*R,e[12]=(a*S-r*H-o*g)*R,e[13]=(t*H-n*S+i*g)*R,e[14]=(v*T-f*y-M*_)*R,e[15]=(c*y-u*T+d*_)*R,this}scale(e){let t=this.elements,{x:n,y:i,z:s}=e;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,{x:r,y:a,z:o}=e,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=t,l=s+s,c=r+r,u=a+a,d=s*l,h=s*c,f=s*u,v=r*c,M=r*u,p=a*u,_=o*l,T=o*c,w=o*u,{x:y,y:A,z:I}=n;return i[0]=(1-(v+p))*y,i[1]=(h+w)*y,i[2]=(f-T)*y,i[3]=0,i[4]=(h-w)*A,i[5]=(1-(d+p))*A,i[6]=(M+_)*A,i[7]=0,i[8]=(f+T)*I,i[9]=(M-_)*I,i[10]=(1-(d+v))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=wi.set(i[0],i[1],i[2]).length(),a=wi.set(i[4],i[5],i[6]).length(),o=wi.set(i[8],i[9],i[10]).length();if(s<0)r=-r;ln.copy(this);let l=1/r,c=1/a,u=1/o;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=c,ln.elements[5]*=c,ln.elements[6]*=c,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i),f,v;if(o)f=s/(r-s),v=r*s/(r-s);else if(a===2000)f=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(a===2001)f=-r/(r-s),v=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i),f,v;if(o)f=1/(r-s),v=r/(r-s);else if(a===2000)f=-2/(r-s),v=-(r+s)/(r-s);else if(a===2001)f=-1/(r-s),v=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}var wi=new U,ln=new gt,Lu=new U(0,0,0),Nu=new U(1,1,1),Gn=new U,rr=new U,$t=new U,Vl=new gt,Xl=new Ln;class Xn{constructor(e=0,t=0,n=0,i=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],d=i[6],h=i[10];switch(t){case"XYZ":if(this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-rt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(d,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(rt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-rt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,n===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,n){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class ks{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var Du=0,ql=new U,Ai=new Ln,Mn=new gt,ar=new U,us=new U,Uu=new U,Fu=new Ln,Yl=new U(1,0,0),Zl=new U(0,1,0),Jl=new U(0,0,1),$l={type:"added"},Ou={type:"removed"},Ri={type:"childadded",child:null},Da={type:"childremoved",child:null};class Bt extends Pn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();let e=new U,t=new Xn,n=new Ln,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new Je}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return ql.copy(e).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){if(e.isVector3)ar.copy(e);else ar.set(e,t,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Mn.lookAt(us,ar,this.up);else Mn.lookAt(ar,us,this.up);if(this.quaternion.setFromRotationMatrix(Mn),i)Mn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ai.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return qe("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($l),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null;else qe("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ou),Da.child=e,this.dispatchEvent(Da),Da.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld);return e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($l),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}return}getObjectsByProperty(e,t,n=[]){if(this[e]===t)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,Uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:n,z:i}=e,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==="string",n={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(e);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let u=o[l];s(e.shapes,u)}else s(e.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(e.materials,this.material[o]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(e.animations,o))}}if(t){let a=r(e.geometries),o=r(e.materials),l=r(e.textures),c=r(e.images),u=r(e.shapes),d=r(e.skeletons),h=r(e.animations),f=r(e.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(u.length>0)n.shapes=u;if(d.length>0)n.skeletons=d;if(h.length>0)n.animations=h;if(f.length>0)n.nodes=f}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bt.DEFAULT_UP=new U(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class un extends Bt{constructor(){super();this.isGroup=!0,this.type="Group"}}var Bu={type:"move"};class Ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let v of e.hand.values()){let M=t.getJointPose(v,n),p=this._getHandJoint(l,v);if(M!==null)p.matrix.fromArray(M.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=M.radius;p.visible=M!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=0.02,f=0.005;if(l.inputState.pinching&&d>h+f)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&d<=h-f)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(o!==null&&e.gripSpace){if(s=t.getPose(e.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(a!==null){if(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Bu)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}var Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},or={h:0,s:0,l:0};function Ua(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return e+(t-e)*6*n;if(n<0.5)return t;if(n<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-n);return e}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Ru(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Ua(r,s,e+0.3333333333333333),this.g=Ua(r,s,e),this.b=Ua(r,s,e-0.3333333333333333)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)We("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);else if(r===6)return this.setHex(parseInt(s,16),t);else We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let n=Rh[e.toLowerCase()];if(n!==void 0)this.setHex(n,t);else We("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return it.workingToColorSpace(Ht.copy(this),e),Math.round(rt(Ht.r*255,0,255))*65536+Math.round(rt(Ht.g*255,0,255))*256+Math.round(rt(Ht.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Ht.copy(this),t);let{r:n,g:i,b:s}=Ht,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let u=r-a;switch(l=c<=0.5?u/(r+a):u/(2-r-a),r){case n:o=(i-s)/u+(i<s?6:0);break;case i:o=(s-n)/u+2;break;case s:o=(n-i)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e="srgb"){it.workingToColorSpace(Ht.copy(this),e);let{r:t,g:n,b:i}=Ht;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(or);let n=Ca(Hn.h,or.h,t),i=Ca(Hn.s,or.s,t),s=Ca(Hn.l,or.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ht=new Xe;Xe.NAMES=Rh;class Kr extends Bt{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var cn=new U,bn=new U,Fa=new U,En=new U,Ci=new U,Ii=new U,Kl=new U,Oa=new U,Ba=new U,za=new U,Ga=new Et,Ha=new Et,ka=new Et;class Qt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(e,t,n,i,s){cn.subVectors(i,t),bn.subVectors(n,t),Fa.subVectors(e,t);let r=cn.dot(cn),a=cn.dot(bn),o=cn.dot(Fa),l=bn.dot(bn),c=bn.dot(Fa),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,h=(l*o-a*c)*d,f=(r*c-a*o)*d;return s.set(1-h-f,f,h)}static containsPoint(e,t,n,i){if(this.getBarycoord(e,t,n,i,En)===null)return!1;return En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,i,s,r,a,o){if(this.getBarycoord(e,t,n,i,En)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,En.x),o.addScaledVector(r,En.y),o.addScaledVector(a,En.z),o}static getInterpolatedAttribute(e,t,n,i,s,r){return Ga.setScalar(0),Ha.setScalar(0),ka.setScalar(0),Ga.fromBufferAttribute(e,t),Ha.fromBufferAttribute(e,n),ka.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Ga,s.x),r.addScaledVector(Ha,s.y),r.addScaledVector(ka,s.z),r}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),bn.subVectors(e,t),cn.cross(bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),cn.cross(bn).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,a;Ci.subVectors(i,n),Ii.subVectors(s,n),Oa.subVectors(e,n);let o=Ci.dot(Oa),l=Ii.dot(Oa);if(o<=0&&l<=0)return t.copy(n);Ba.subVectors(e,i);let c=Ci.dot(Ba),u=Ii.dot(Ba);if(c>=0&&u<=c)return t.copy(i);let d=o*u-c*l;if(d<=0&&o>=0&&c<=0&&o-c>0)return r=o/(o-c),t.copy(n).addScaledVector(Ci,r);za.subVectors(e,s);let h=Ci.dot(za),f=Ii.dot(za);if(f>=0&&h<=f)return t.copy(s);let v=h*l-o*f;if(v<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Ii,a);let M=c*f-h*u;if(M<=0&&u-c>=0&&h-f>=0)return Kl.subVectors(s,i),a=(u-c)/(u-c+(h-f)),t.copy(i).addScaledVector(Kl,a);let p=1/(M+v+d);return r=v*p,a=d*p,t.copy(n).addScaledVector(Ci,r).addScaledVector(Ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(e.isMesh===!0)e.getVertexPosition(r,hn);else hn.fromBufferAttribute(s,r);hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();lr.copy(e.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();lr.copy(n.boundingBox)}lr.applyMatrix4(e.matrixWorld),this.union(lr)}}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;if(e.normal.x>0)t=e.normal.x*this.min.x,n=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,n=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z;return t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),cr.subVectors(this.max,ds),Pi.subVectors(e.a,ds),Li.subVectors(e.b,ds),Ni.subVectors(e.c,ds),kn.subVectors(Li,Pi),Wn.subVectors(Ni,Li),ti.subVectors(Pi,Ni);let t=[0,-kn.z,kn.y,0,-Wn.z,Wn.y,0,-ti.z,ti.y,kn.z,0,-kn.x,Wn.z,0,-Wn.x,ti.z,0,-ti.x,-kn.y,kn.x,0,-Wn.y,Wn.x,0,-ti.y,ti.x,0];if(!Wa(t,Pi,Li,Ni,cr))return!1;if(t=[1,0,0,0,1,0,0,0,1],!Wa(t,Pi,Li,Ni,cr))return!1;return hr.crossVectors(kn,Wn),t=[hr.x,hr.y,hr.z],Wa(t,Pi,Li,Ni,cr)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(hn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var Tn=[new U,new U,new U,new U,new U,new U,new U,new U],hn=new U,lr=new hi,Pi=new U,Li=new U,Ni=new U,kn=new U,Wn=new U,ti=new U,ds=new U,cr=new U,hr=new U,ni=new U;function Wa(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){ni.fromArray(e,r);let o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=t.dot(ni),c=n.dot(ni),u=i.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Rt=new U,ur=new ue,zu=0;class Yt extends Pn{constructor(e,t,n=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=e!==void 0?Jr(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];if(this.normalized)n=this._denormalize(n);return n}setComponent(e,t,n){if(this.normalized)n=this._normalize(n);return this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e*=this.itemSize,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ah(e,this.array)}}class Qr extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jr extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}var Gu=new hi,fs=new U,Va=new U;class ui{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;if(t!==void 0)n.copy(t);else Gu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);if(t.copy(e),n>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);let t=fs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*0.5;this.center.addScaledVector(fs,i/n),this.radius+=i}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(Va)),this.expandByPoint(fs.copy(e.center).sub(Va));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var Hu=0,en=new gt,Xa=new Bt,Di=new U,Kt=new hi,ps=new hi,Ut=new U;class wt extends Pn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((wu(e))?jr:Qr)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(e),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}if(e.length>t.count)We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new hi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];if(Kt.setFromBufferAttribute(s),this.morphTargetsRelative)Ut.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Ut);else this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new ui;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let a=t[s];if(ps.setFromBufferAttribute(a),this.morphTargetsRelative)Ut.addVectors(Kt.min,ps.min),Kt.expandByPoint(Ut),Ut.addVectors(Kt.max,ps.max),Kt.expandByPoint(Ut);else Kt.expandByPoint(ps.min),Kt.expandByPoint(ps.max)}Kt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Ut.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let s=0,r=t.length;s<r;s++){let a=t[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Ut.fromBufferAttribute(a,l),o)Di.fromBufferAttribute(e,l),Ut.add(Di);i=Math.max(i,n.distanceToSquared(Ut))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=t,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new Yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[],l=new Uint8Array(n.count);for(let S=0;S<n.count;S++)a[S]=new U,o[S]=new U;let c=new U,u=new U,d=new U,h=new ue,f=new ue,v=new ue,M=new U,p=new U;function _(S,P,H){l[S]=l[P]=l[H]=1,c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,H),h.fromBufferAttribute(s,S),f.fromBufferAttribute(s,P),v.fromBufferAttribute(s,H),u.sub(c),d.sub(c),f.sub(h),v.sub(h);let L=1/(f.x*v.y-v.x*f.y);if(!isFinite(L))return;M.copy(u).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(L),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(L),a[S].add(M),a[P].add(M),a[H].add(M),o[S].add(p),o[P].add(p),o[H].add(p)}let T=this.groups;if(T.length===0)T=[{start:0,count:e.count}];for(let S=0,P=T.length;S<P;++S){let H=T[S],{start:L,count:G}=H;for(let J=L,R=L+G;J<R;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let w=new U,y=new U,A=new U,I=new U;function g(S){A.fromBufferAttribute(i,S),I.copy(A);let P=a[S];w.copy(P),w.sub(A.multiplyScalar(A.dot(P))).normalize(),y.crossVectors(I,P);let L=y.dot(o[S])<0?-1:1;r.setXYZW(S,w.x,w.y,w.z,L)}for(let S=0,P=n.count;S<P;++S)if(l[S])g(S);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new U,s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U;if(e)for(let d=0,h=e.count;d<h;d+=3){let f=e.getX(d+0),v=e.getX(d+1),M=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),a.add(c),o.add(c),l.add(c),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,o){let{array:l,itemSize:c,normalized:u}=a,d=new l.constructor(o.length*c),h=0,f=0;for(let v=0,M=o.length;v<M;v++){if(a.isInterleavedBufferAttribute)h=o[v]*a.data.stride+a.offset;else h=o[v]*c;for(let p=0;p<c;p++)d[f++]=l[h++]}return new Yt(d,c,u)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new wt,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=e(o,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,u=l.length;c<u;c++){let d=l[c],h=e(d,n);o.push(h)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)e[l]=o[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let n=this.attributes;for(let o in n){let l=n[o];e.data.attributes[o]=l.toJSON(e.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let u=0,d=l.length;u<d;u++){let h=l[u];c.push(h.toJSON(e.data))}if(c.length>0)i[o]=c,s=!0}if(s)e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)e.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)e.data.boundingSphere=a.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;if(n!==null)this.setIndex(n.clone());let i=e.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(t))}let s=e.morphAttributes;for(let l in s){let c=[],u=s[l];for(let d=0,h=u.length;d<h;d++)c.push(u[d].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,c=r.length;l<c;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=e.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class il{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Ql(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Ql(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Ql(e){if(e.buffer._uuid===void 0)e.buffer._uuid=$n();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var Xt=new U;class Es{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Jr(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];if(this.normalized)n=this._denormalize(n);return n}setComponent(e,t,n){if(this.normalized)n=this._normalize(n);return this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){bs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new Es(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){bs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ah(e,this.data.array)}}var qa=new U,ku=new U,Wu=new Je;class mn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=qa.subVectors(n,t).cross(ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(qa),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let r=-(e.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wu.getNormalMatrix(e),i=this.coplanarPoint(qa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var Vu=0;class Nn extends Pn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)n.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(t){let s=i(e.textures),r=i(e.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new Xe().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((n)=>new mn().fromJSON(n));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let n=e.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new ue().fromArray(n)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class Kn extends Nn{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var Ui,ms=new U,Fi=new U,Oi=new U,Bi=new ue,gs=new ue,Ch=new gt,dr=new U,_s=new U,fr=new U,jl=new ue,Ya=new ue,ec=new ue;class di extends Bt{constructor(e=new Kn){super();if(this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new wt;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new il(t,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Es(n,3,0,!1)),Ui.setAttribute("uv",new Es(n,2,3,!1))}this.geometry=Ui,this.material=e,this.center=new ue(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Fi.setFromMatrixScale(this.matrixWorld),Ch.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Fi.multiplyScalar(-Oi.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;pr(dr.set(-0.5,-0.5,0),Oi,r,Fi,i,s),pr(_s.set(0.5,-0.5,0),Oi,r,Fi,i,s),pr(fr.set(0.5,0.5,0),Oi,r,Fi,i,s),jl.set(0,0),Ya.set(1,0),ec.set(1,1);let a=e.ray.intersectTriangle(dr,_s,fr,!1,ms);if(a===null){if(pr(_s.set(-0.5,0.5,0),Oi,r,Fi,i,s),Ya.set(0,1),a=e.ray.intersectTriangle(dr,fr,_s,!1,ms),a===null)return}let o=e.ray.origin.distanceTo(ms);if(o<e.near||o>e.far)return;t.push({distance:o,point:ms.clone(),uv:Qt.getInterpolation(ms,dr,_s,fr,jl,Ya,ec,new ue),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function pr(e,t,n,i,s,r){if(Bi.subVectors(e,n).addScalar(0.5).multiply(i),s!==void 0)gs.x=r*Bi.x-s*Bi.y,gs.y=s*Bi.x+r*Bi.y;else gs.copy(Bi);e.copy(t),e.x+=gs.x,e.y+=gs.y,e.applyMatrix4(Ch)}var wn=new U,Za=new U,mr=new U,gr=new U;class ji{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);if(n<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wn.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e)}distanceSqToSegment(e,t,n,i){Za.copy(e).add(t).multiplyScalar(0.5),mr.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(Za);let s=e.distanceTo(t)*0.5,r=-this.direction.dot(mr),a=gr.dot(this.direction),o=-gr.dot(mr),l=gr.lengthSq(),c=Math.abs(1-r*r),u,d,h,f;if(c>0)if(u=r*o-a,d=r*a-o,f=s*c,u>=0)if(d>=-f)if(d<=f){let v=1/c;u*=v,d*=v,h=u*(u+r*d+2*a)+d*(r*u+d+2*o)+l}else d=s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else d=-s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else if(d<=-f)u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else if(d<=f)u=0,d=Math.min(Math.max(-s,-o),s),h=d*(d+2*o)+l;else u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(Za).addScaledVector(mr,d);return h}intersectSphere(e,t){if(e.radius<0)return null;wn.subVectors(e.center,this.origin);let n=wn.dot(this.direction),i=wn.dot(wn)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,t);return this.at(a,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);if(n===null)return null;return this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;if(l>=0)n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l;else n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l;if(c>=0)s=(e.min.y-d.y)*c,r=(e.max.y-d.y)*c;else s=(e.max.y-d.y)*c,r=(e.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)a=(e.min.z-d.z)*u,o=(e.max.z-d.z)*u;else a=(e.max.z-d.z)*u,o=(e.min.z-d.z)*u;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,u=e.x-r.x,d=e.y-r.y,h=e.z-r.z,f=t.x-r.x,v=t.y-r.y,M=t.z-r.z,p=n.x-r.x,_=n.y-r.y,T=n.z-r.z,w=Math.abs(o),y=Math.abs(l),A=Math.abs(c),I,g,S,P,H,L,G,J,R,q,K,k;if(w>=y&&w>=A)if(S=o,L=u,R=f,k=p,o>=0)I=l,g=c,P=d,H=h,G=v,J=M,q=_,K=T;else I=c,g=l,P=h,H=d,G=M,J=v,q=T,K=_;else if(y>=A)if(S=l,L=d,R=v,k=_,l>=0)I=c,g=o,P=h,H=u,G=M,J=f,q=T,K=p;else I=o,g=c,P=u,H=h,G=f,J=M,q=p,K=T;else if(S=c,L=h,R=M,k=T,c>=0)I=o,g=l,P=u,H=d,G=f,J=v,q=p,K=_;else I=l,g=o,P=d,H=u,G=v,J=f,q=_,K=p;if(S===0)return null;let pe=I/S,V=g/S,Z=1/S,ae=P-pe*L,Ae=H-V*L,Q=G-pe*R,ce=J-V*R,Ie=q-pe*k,Fe=K-V*k,Oe=Ie*ce-Fe*Q,be=ae*Fe-Ae*Ie,tt=Q*Ae-ce*ae;if(i){if(Oe<0||be<0||tt<0)return null}else if((Oe<0||be<0||tt<0)&&(Oe>0||be>0||tt>0))return null;let $e=Oe+be+tt;if($e===0)return null;let He=Z*(Oe*L+be*R+tt*k);if($e>0?He<0:He>0)return null;return this.at(He/$e,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt extends Nn{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var tc=new gt,ii=new ji,_r=new ui,nc=new U,xr=new U,vr=new U,yr=new U,Ja=new U,Sr=new U,ic=new U,Mr=new U;class dt extends Bt{constructor(e=new wt,t=new jt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Sr.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],u=s[o];if(c===0)continue;if(Ja.fromBufferAttribute(u,e),r)Sr.addScaledVector(Ja,c);else Sr.addScaledVector(Ja.sub(t),c)}t.add(Sr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(_r.copy(n.boundingSphere),_r.applyMatrix4(s),ii.copy(e.ray).recast(e.near),_r.containsPoint(ii.origin)===!1){if(ii.intersectSphere(_r,nc)===null)return;if(ii.origin.distanceToSquared(nc)>(e.far-e.near)**2)return}if(tc.copy(s).invert(),ii.copy(e.ray).applyMatrix4(tc),n.boundingBox!==null){if(ii.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(e,t,ii)}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,{groups:d,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let f=0,v=d.length;f<v;f++){let M=d[f],p=r[M.materialIndex],_=Math.max(M.start,h.start),T=Math.min(a.count,Math.min(M.start+M.count,h.start+h.count));for(let w=_,y=T;w<y;w+=3){let A=a.getX(w),I=a.getX(w+1),g=a.getX(w+2);if(i=br(this,p,e,n,l,c,u,A,I,g),i)i.faceIndex=Math.floor(w/3),i.face.materialIndex=M.materialIndex,t.push(i)}}else{let f=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let M=f,p=v;M<p;M+=3){let _=a.getX(M),T=a.getX(M+1),w=a.getX(M+2);if(i=br(this,r,e,n,l,c,u,_,T,w),i)i.faceIndex=Math.floor(M/3),t.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let f=0,v=d.length;f<v;f++){let M=d[f],p=r[M.materialIndex],_=Math.max(M.start,h.start),T=Math.min(o.count,Math.min(M.start+M.count,h.start+h.count));for(let w=_,y=T;w<y;w+=3){let A=w,I=w+1,g=w+2;if(i=br(this,p,e,n,l,c,u,A,I,g),i)i.faceIndex=Math.floor(w/3),i.face.materialIndex=M.materialIndex,t.push(i)}}else{let f=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let M=f,p=v;M<p;M+=3){let _=M,T=M+1,w=M+2;if(i=br(this,r,e,n,l,c,u,_,T,w),i)i.faceIndex=Math.floor(M/3),t.push(i)}}}}function Xu(e,t,n,i,s,r,a,o){let l;if(t.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,t.side===0,o);if(l===null)return null;Mr.copy(o),Mr.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Mr);if(c<n.near||c>n.far)return null;return{distance:c,point:Mr.clone(),object:e}}function br(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,xr),e.getVertexPosition(l,vr),e.getVertexPosition(c,yr);let u=Xu(e,t,n,i,xr,vr,yr,ic);if(u){let d=new U;if(Qt.getBarycoord(ic,xr,vr,yr,d),s)u.uv=Qt.getInterpolatedAttribute(s,o,l,c,d,new ue);if(r)u.uv1=Qt.getInterpolatedAttribute(r,o,l,c,d,new ue);if(a){if(u.normal=Qt.getInterpolatedAttribute(a,o,l,c,d,new U),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new U,materialIndex:0};Qt.getNormal(xr,vr,yr,h.normal),u.face=h,u.barycoord=d}return u}class sl extends It{constructor(e=null,t=1,n=1,i,s,r,a,o,l=1003,c=1003,u,d){super(null,r,a,o,l,c,i,s,u,d);this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var si=new ui,qu=new ue(0.5,0.5),Er=new U;class qi{constructor(e=new mn,t=new mn,n=new mn,i=new mn,s=new mn,r=new mn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2000,n=!1){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],v=s[9],M=s[10],p=s[11],_=s[12],T=s[13],w=s[14],y=s[15];if(i[0].setComponents(l-r,h-c,p-f,y-_).normalize(),i[1].setComponents(l+r,h+c,p+f,y+_).normalize(),i[2].setComponents(l+a,h+u,p+v,y+T).normalize(),i[3].setComponents(l-a,h-u,p-v,y-T).normalize(),n)i[4].setComponents(o,d,M,w).normalize(),i[5].setComponents(l-o,h-d,p-M,y-w).normalize();else if(i[4].setComponents(l-o,h-d,p-M,y-w).normalize(),t===2000)i[5].setComponents(l+o,h+d,p+M,y+w).normalize();else if(t===2001)i[5].setComponents(o,d,M,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);let t=qu.distanceTo(e.center);return si.radius=0.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Er.x=i.normal.x>0?e.max.x:e.min.x,Er.y=i.normal.y>0?e.max.y:e.min.y,Er.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var sc=new gt;class ea{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];if(sc.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0)n[i]=new qi;n[i].setFromProjectionMatrix(sc,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++){if(t[i]===void 0)t[i]=new qi;t[i].copy(n[i])}return this._count=e._count,this}clone(){return new ea().copy(this)}}class Vs extends Nn{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var Fr=new U,Or=new U,rc=new gt,xs=new ji,Tr=new ui,$a=new U,ac=new U;class rl extends Bt{constructor(e=new wt,t=new Vs){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Fr.fromBufferAttribute(t,i-1),Or.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fr.distanceTo(Or);e.setAttribute("lineDistance",new yt(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Tr.copy(n.boundingSphere),Tr.applyMatrix4(i),Tr.radius+=s,e.ray.intersectsSphere(Tr)===!1)return;rc.copy(i).invert(),xs.copy(e.ray).applyMatrix4(rc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let v=h,M=f-1;v<M;v+=l){let p=c.getX(v),_=c.getX(v+1),T=wr(this,e,xs,o,p,_,v);if(T)t.push(T)}if(this.isLineLoop){let v=c.getX(f-1),M=c.getX(h),p=wr(this,e,xs,o,v,M,f-1);if(p)t.push(p)}}else{let h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let v=h,M=f-1;v<M;v+=l){let p=wr(this,e,xs,o,v,v+1,v);if(p)t.push(p)}if(this.isLineLoop){let v=wr(this,e,xs,o,f-1,h,f-1);if(v)t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wr(e,t,n,i,s,r,a){let o=e.geometry.attributes.position;if(Fr.fromBufferAttribute(o,s),Or.fromBufferAttribute(o,r),n.distanceSqToSegment(Fr,Or,$a,ac)>i)return;$a.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo($a);if(c<t.near||c>t.far)return;return{distance:c,point:ac.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}var oc=new U,lc=new U;class ta extends rl{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)oc.fromBufferAttribute(t,i),lc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+oc.distanceTo(lc);e.setAttribute("lineDistance",new yt(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class es extends Nn{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var cc=new gt,eo=new ji,Ar=new ui,Rr=new U;class Xs extends Bt{constructor(e=new wt,t=new es){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ar.copy(n.boundingSphere),Ar.applyMatrix4(i),Ar.radius+=s,e.ray.intersectsSphere(Ar)===!1)return;cc.copy(i).invert(),eo.copy(e.ray).applyMatrix4(cc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),h=Math.min(l.count,r.start+r.count);for(let f=d,v=h;f<v;f++){let M=l.getX(f);Rr.fromBufferAttribute(u,M),hc(Rr,M,o,i,e,t,this)}}else{let d=Math.max(0,r.start),h=Math.min(u.count,r.start+r.count);for(let f=d,v=h;f<v;f++)Rr.fromBufferAttribute(u,f),hc(Rr,f,o,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hc(e,t,n,i,s,r,a){let o=eo.distanceSqToPoint(e);if(o<n){let l=new U;eo.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class na extends It{constructor(e,t,n,i,s=1006,r=1006,a,o,l){super(e,t,n,i,s,r,a,o,l);this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let c=this;function u(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}if("requestVideoFrameCallback"in e)this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;if("requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA)this.needsUpdate=!0}dispose(){if(this._requestVideoFrameCallbackId!==0)this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0;super.dispose()}}class ia extends It{constructor(e=[],t=301,n,i,s,r,a,o,l,c){super(e,t,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sa extends It{constructor(e,t,n,i,s,r,a,o,l){super(e,t,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qn extends It{constructor(e,t,n=1014,i,s,r,a=1003,o=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ra extends Qn{constructor(e,t=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,n,i,s,r,a,o,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class aa extends It{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ts extends wt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],u=[],d=0,h=0;f("z","y","x",-1,-1,n,t,e,r,s,0),f("z","y","x",1,-1,n,t,-e,r,s,1),f("x","z","y",1,1,e,n,t,i,r,2),f("x","z","y",1,-1,e,n,-t,i,r,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(u,2));function f(v,M,p,_,T,w,y,A,I,g,S){let P=w/I,H=y/g,L=w/2,G=y/2,J=A/2,R=I+1,q=g+1,K=0,k=0,pe=new U;for(let V=0;V<q;V++){let Z=V*H-G;for(let ae=0;ae<R;ae++){let Ae=ae*P-L;pe[v]=Ae*_,pe[M]=Z*T,pe[p]=J,l.push(pe.x,pe.y,pe.z),pe[v]=0,pe[M]=0,pe[p]=A>0?1:-1,c.push(pe.x,pe.y,pe.z),u.push(ae/I),u.push(1-V/g),K+=1}}for(let V=0;V<g;V++)for(let Z=0;Z<I;Z++){let ae=d+Z+R*V,Ae=d+Z+R*(V+1),Q=d+(Z+1)+R*(V+1),ce=d+(Z+1)+R*V;o.push(ae,Ae,ce),o.push(Ae,Q,ce),k+=6}a.addGroup(h,k,S),h+=k,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xn extends wt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],u=[],d=[],h=[],f=0,v=[],M=n/2,p=0;if(_(),r===!1){if(e>0)T(!0);if(t>0)T(!1)}this.setIndex(c),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(h,2));function _(){let w=new U,y=new U,A=0,I=(t-e)/n;for(let g=0;g<=s;g++){let S=[],P=g/s,H=P*(t-e)+e;for(let L=0;L<=i;L++){let G=L/i,J=G*o+a,R=Math.sin(J),q=Math.cos(J);y.x=H*R,y.y=-P*n+M,y.z=H*q,u.push(y.x,y.y,y.z),w.set(R,I,q).normalize(),d.push(w.x,w.y,w.z),h.push(G,1-P),S.push(f++)}v.push(S)}for(let g=0;g<i;g++)for(let S=0;S<s;S++){let P=v[S][g],H=v[S+1][g],L=v[S+1][g+1],G=v[S][g+1];if(e>0||S!==0)c.push(P,H,G),A+=3;if(t>0||S!==s-1)c.push(H,L,G),A+=3}l.addGroup(p,A,0),p+=A}function T(w){let y=f,A=new ue,I=new U,g=0,S=w===!0?e:t,P=w===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,M*P,0),d.push(0,P,0),h.push(0.5,0.5),f++;let H=f;for(let L=0;L<=i;L++){let J=L/i*o+a,R=Math.cos(J),q=Math.sin(J);I.x=S*q,I.y=M*P,I.z=S*R,u.push(I.x,I.y,I.z),d.push(0,P,0),A.x=R*0.5+0.5,A.y=q*0.5*P+0.5,h.push(A.x,A.y),f++}for(let L=0;L<i;L++){let G=y+L,J=H+L;if(w===!0)c.push(J,J+1,G);else c.push(J+1,J,G);g+=3}l.addGroup(p,g,w===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ns extends xn{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,s,r,a);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new ns(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,r;if(t)r=t;else r=e*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],d=n[i+1]-c,h=(r-c)/d;return(i+h)/(s-1)}getTangent(e,t){let i=e-0.0001,s=e+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=t||(r.isVector2?new ue:new U);return o.copy(a).sub(r).normalize(),o}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,i=[],s=[],r=[],a=new U,o=new gt;for(let h=0;h<=e;h++){let f=h/e;i[h]=this.getTangentAt(f,new U)}s[0]=new U,r[0]=new U;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(u<=l)l=u,n.set(0,1,0);if(d<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(rt(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(o.makeRotationAxis(a,f))}r[h].crossVectors(i[h],s[h])}if(t===!0){let h=Math.acos(rt(s[0].dot(s[e]),-1,1));if(h/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0)h=-h;for(let f=1;f<=e;f++)s[f].applyMatrix4(o.makeRotationAxis(i[f],h*f)),r[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class qs extends nn{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(e,t=new ue){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+e*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,h=l-this.aY;o=d*c-h*u+this.aX,l=d*u+h*c+this.aY}return n.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class al extends qs{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function ol(){let e=0,t=0,n=0,i=0;function s(r,a,o,l){e=r,t=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return e+t*r+n*a+i*o}}}var uc=new U,dc=new U,Ka=new ol,Qa=new ol,ja=new ol;class ll extends nn{constructor(e=[],t=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){let n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else dc.subVectors(i[0],i[1]).add(i[0]),l=dc;let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else uc.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=uc;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,f=Math.pow(l.distanceToSquared(u),h),v=Math.pow(u.distanceToSquared(d),h),M=Math.pow(d.distanceToSquared(c),h);if(v<0.0001)v=1;if(f<0.0001)f=v;if(M<0.0001)M=v;Ka.initNonuniformCatmullRom(l.x,u.x,d.x,c.x,f,v,M),Qa.initNonuniformCatmullRom(l.y,u.y,d.y,c.y,f,v,M),ja.initNonuniformCatmullRom(l.z,u.z,d.z,c.z,f,v,M)}else if(this.curveType==="catmullrom")Ka.initCatmullRom(l.x,u.x,d.x,c.x,this.tension),Qa.initCatmullRom(l.y,u.y,d.y,c.y,this.tension),ja.initCatmullRom(l.z,u.z,d.z,c.z,this.tension);return n.set(Ka.calc(o),Qa.calc(o),ja.calc(o)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function fc(e,t,n,i,s){let r=(i-t)*0.5,a=(s-n)*0.5,o=e*e,l=e*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*e+n}function Yu(e,t){let n=1-e;return n*n*t}function Zu(e,t){return 2*(1-e)*e*t}function Ju(e,t){return e*e*t}function Ss(e,t,n,i){return Yu(e,t)+Zu(e,n)+Ju(e,i)}function $u(e,t){let n=1-e;return n*n*n*t}function Ku(e,t){let n=1-e;return 3*n*n*e*t}function Qu(e,t){return 3*(1-e)*e*e*t}function ju(e,t){return e*e*e*t}function Ms(e,t,n,i,s){return $u(e,t)+Ku(e,n)+Qu(e,i)+ju(e,s)}class oa extends nn{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){let n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Ms(e,i.x,s.x,r.x,a.x),Ms(e,i.y,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cl extends nn{constructor(e=new U,t=new U,n=new U,i=new U){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){let n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Ms(e,i.x,s.x,r.x,a.x),Ms(e,i.y,s.y,r.y,a.y),Ms(e,i.z,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class la extends nn{constructor(e=new ue,t=new ue){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;if(e===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1);return n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hl extends nn{constructor(e=new U,t=new U){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;if(e===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1);return n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ca extends nn{constructor(e=new ue,t=new ue,n=new ue){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Ss(e,i.x,s.x,r.x),Ss(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ul extends nn{constructor(e=new U,t=new U,n=new U){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Ss(e,i.x,s.x,r.x),Ss(e,i.y,s.y,r.y),Ss(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ha extends nn{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(fc(a,o.x,l.x,c.x,u.x),fc(a,o.y,l.y,c.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ue().fromArray(i))}return this}}var to=Object.freeze({__proto__:null,ArcCurve:al,CatmullRomCurve3:ll,CubicBezierCurve:oa,CubicBezierCurve3:cl,EllipseCurve:qs,LineCurve:la,LineCurve3:hl,QuadraticBezierCurve:ca,QuadraticBezierCurve3:ul,SplineCurve:ha});class dl extends nn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new to[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;t.push(c),n=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new to[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Br extends dl{constructor(e){super();if(this.type="Path",this.currentPoint=new ue,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new la(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new ca(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){let a=new oa(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ha(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+a,t+o,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,n,i,s,r,a,o),this}absellipse(e,t,n,i,s,r,a,o){let l=new qs(e,t,n,i,s,r,a,o);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fi extends Br{constructor(e){super(e);this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Br().fromJSON(i))}return this}}function ed(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,r=Ih(e,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=rd(e,t,r,n);if(e.length>80*n){o=e[0],l=e[1];let u=o,d=l;for(let h=n;h<s;h+=n){let f=e[h],v=e[h+1];if(f<o)o=f;if(v<l)l=v;if(f>u)u=f;if(v>d)d=v}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Ts(r,a,n,o,l,c,0),a}function Ih(e,t,n,i,s){let r;if(s===gd(e,t,n,i)>0)for(let a=t;a<n;a+=i)r=pc(a/i|0,e[a],e[a+1],r);else for(let a=n-i;a>=t;a-=i)r=pc(a/i|0,e[a],e[a+1],r);if(r&&Yi(r,r.next))As(r),r=r.next;return r}function ai(e,t){if(!e)return e;if(!t)t=e;let n=e,i;do if(i=!1,!n.steiner&&(Yi(n,n.next)||Mt(n.prev,n,n.next)===0)){if(As(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function Ts(e,t,n,i,s,r,a){if(!e)return;if(!a&&r)hd(e,i,s,r);let o=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(r?nd(e,i,s,r):td(e)){t.push(l.i,e.i,c.i),As(e),e=c.next,o=c.next;continue}if(e=c,e===o){if(!a)Ts(ai(e),t,n,i,s,r,1);else if(a===1)e=id(ai(e),t),Ts(e,t,n,i,s,r,2);else if(a===2)sd(e,t,n,i,s,r);break}}}function td(e){let t=e.prev,n=e,i=e.next;if(Mt(t,n,i)>=0)return!1;let s=t.x,r=n.x,a=i.x,o=t.y,l=n.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),v=i.next;while(v!==t){if(v.x>=u&&v.x<=h&&v.y>=d&&v.y<=f&&vs(s,o,r,l,a,c,v.x,v.y)&&Mt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function nd(e,t,n,i){let s=e.prev,r=e,a=e.next;if(Mt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),v=Math.min(u,d,h),M=Math.max(o,l,c),p=Math.max(u,d,h),_=no(f,v,t,n,i),T=no(M,p,t,n,i),{prevZ:w,nextZ:y}=e;while(w&&w.z>=_&&y&&y.z<=T){if(w.x>=f&&w.x<=M&&w.y>=v&&w.y<=p&&w!==s&&w!==a&&vs(o,u,l,d,c,h,w.x,w.y)&&Mt(w.prev,w,w.next)>=0)return!1;if(w=w.prevZ,y.x>=f&&y.x<=M&&y.y>=v&&y.y<=p&&y!==s&&y!==a&&vs(o,u,l,d,c,h,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}while(w&&w.z>=_){if(w.x>=f&&w.x<=M&&w.y>=v&&w.y<=p&&w!==s&&w!==a&&vs(o,u,l,d,c,h,w.x,w.y)&&Mt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}while(y&&y.z<=T){if(y.x>=f&&y.x<=M&&y.y>=v&&y.y<=p&&y!==s&&y!==a&&vs(o,u,l,d,c,h,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function id(e,t){let n=e;do{let i=n.prev,s=n.next.next;if(!Yi(i,s)&&Lh(i,n,n.next,s)&&ws(i,s)&&ws(s,i))t.push(i.i,n.i,s.i),As(n),As(n.next),n=e=s;n=n.next}while(n!==e);return ai(n)}function sd(e,t,n,i,s,r){let a=e;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&fd(a,o)){let l=Nh(a,o);a=ai(a,a.next),l=ai(l,l.next),Ts(a,t,n,i,s,r,0),Ts(l,t,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==e)}function rd(e,t,n,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:e.length,c=Ih(e,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(dd(c))}s.sort(ad);for(let r=0;r<s.length;r++)n=od(s[r],n);return n}function ad(e,t){let n=e.x-t.x;if(n===0){if(n=e.y-t.y,n===0){let i=(e.next.y-e.y)/(e.next.x-e.x),s=(t.next.y-t.y)/(t.next.x-t.x);n=i-s}}return n}function od(e,t){let n=ld(e,t);if(!n)return t;let i=Nh(n,e);return ai(i,i.next),ai(n,n.next)}function ld(e,t){let n=t,{x:i,y:s}=e,r=-1/0,a;if(Yi(e,n))return n;do{if(Yi(e,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r){if(r=d,a=n.x<n.next.x?n:n.next,d===i)return a}}n=n.next}while(n!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Ph(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);if(ws(n,e)&&(d<u||d===u&&(n.x>a.x||n.x===a.x&&cd(a,n))))a=n,u=d}n=n.next}while(n!==o);return a}function cd(e,t){return Mt(e.prev,e,t.prev)<0&&Mt(t.next,e,e.next)<0}function hd(e,t,n,i){let s=e;do{if(s.z===0)s.z=no(s.x,s.y,t,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,ud(s)}function ud(e){let t,n=1;do{let i=e,s;e=null;let r=null;t=0;while(i){t++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else e=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(t>1);return e}function no(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function dd(e){let t=e,n=e;do{if(t.x<n.x||t.x===n.x&&t.y<n.y)n=t;t=t.next}while(t!==e);return n}function Ph(e,t,n,i,s,r,a,o){return(s-a)*(t-o)>=(e-a)*(r-o)&&(e-a)*(i-o)>=(n-a)*(t-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function vs(e,t,n,i,s,r,a,o){return!(e===a&&t===o)&&Ph(e,t,n,i,s,r,a,o)}function fd(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!pd(e,t)&&(ws(e,t)&&ws(t,e)&&md(e,t)&&(Mt(e.prev,e,t.prev)||Mt(e,t.prev,t))||Yi(e,t)&&Mt(e.prev,e,e.next)>0&&Mt(t.prev,t,t.next)>0)}function Mt(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Yi(e,t){return e.x===t.x&&e.y===t.y}function Lh(e,t,n,i){let s=Ir(Mt(e,t,n)),r=Ir(Mt(e,t,i)),a=Ir(Mt(n,i,e)),o=Ir(Mt(n,i,t));if(s!==r&&a!==o)return!0;if(s===0&&Cr(e,n,t))return!0;if(r===0&&Cr(e,i,t))return!0;if(a===0&&Cr(n,e,i))return!0;if(o===0&&Cr(n,t,i))return!0;return!1}function Cr(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ir(e){return e>0?1:e<0?-1:0}function pd(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Lh(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ws(e,t){return Mt(e.prev,e,e.next)<0?Mt(e,t,e.next)>=0&&Mt(e,e.prev,t)>=0:Mt(e,t,e.prev)<0||Mt(e,e.next,t)<0}function md(e,t){let n=e,i=!1,s=(e.x+t.x)/2,r=(e.y+t.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==e);return i}function Nh(e,t){let n=io(e.i,e.x,e.y),i=io(t.i,t.x,t.y),s=e.next,r=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function pc(e,t,n,i){let s=io(e,t,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function As(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function io(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gd(e,t,n,i){let s=0;for(let r=t,a=n-i;r<n;r+=i)s+=(e[a]-e[r])*(e[r+1]+e[a+1]),a=r;return s}class Dh{static triangulate(e,t,n=2){return ed(e,t,n)}}class ri{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*0.5}static isClockWise(e){return ri.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];mc(e),gc(n,e);let r=e.length;t.forEach(mc);for(let o=0;o<t.length;o++)i.push(r),r+=t[o].length,gc(n,t[o]);let a=Dh.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function mc(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function gc(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}class is extends wt{constructor(e=new fi([new ue(0.5,0.5),new ue(-0.5,0.5),new ue(-0.5,-0.5),new ue(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let a=0,o=e.length;a<o;a++){let l=e[a];r(l)}this.setAttribute("position",new yt(i,3)),this.setAttribute("uv",new yt(s,2)),this.computeVertexNormals();function r(a){let o=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:0.2,f=t.bevelSize!==void 0?t.bevelSize:h-0.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,M=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:_d,T,w=!1,y,A,I,g;if(p){T=p.getSpacedPoints(c),w=!0,d=!1;let te=p.isCatmullRomCurve3?p.closed:!1;y=p.computeFrenetFrames(c,te),A=new U,I=new U,g=new U}if(!d)M=0,h=0,f=0,v=0;let S=a.extractPoints(l),{shape:P,holes:H}=S;if(!ri.isClockWise(P)){P=P.reverse();for(let te=0,me=H.length;te<me;te++){let ve=H[te];if(ri.isClockWise(ve))H[te]=ve.reverse()}}function G(te){let Ce=te[0];for(let Re=1;Re<=te.length;Re++){let ze=Re%te.length,De=te[ze],Ke=De.x-Ce.x,Qe=De.y-Ce.y,at=Ke*Ke+Qe*Qe,N=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(Ce.x),Math.abs(Ce.y)),xt=0.000000000000000000010000000000000001*N*N;if(at<=xt){te.splice(ze,1),Re--;continue}Ce=De}}G(P),H.forEach(G);let J=H.length,R=P;for(let te=0;te<J;te++){let me=H[te];P=P.concat(me)}function q(te,me,ve){if(!me)qe("ExtrudeGeometry: vec does not exist");return te.clone().addScaledVector(me,ve)}let K=P.length;function k(te,me,ve){let Ce,Re,ze,De=te.x-me.x,Ke=te.y-me.y,Qe=ve.x-te.x,at=ve.y-te.y,N=De*De+Ke*Ke,xt=De*at-Ke*Qe;if(Math.abs(xt)>Number.EPSILON){let Ye=Math.sqrt(N),vt=Math.sqrt(Qe*Qe+at*at),Se=me.x-Ke/Ye,lt=me.y+De/Ye,Ge=ve.x-at/vt,Ve=ve.y+Qe/vt,_t=((Ge-Se)*at-(Ve-lt)*Qe)/(De*at-Ke*Qe);Ce=Se+De*_t-te.x,Re=lt+Ke*_t-te.y;let b=Ce*Ce+Re*Re;if(b<=2)return new ue(Ce,Re);else ze=Math.sqrt(b/2)}else{let Ye=!1;if(De>Number.EPSILON){if(Qe>Number.EPSILON)Ye=!0}else if(De<-Number.EPSILON){if(Qe<-Number.EPSILON)Ye=!0}else if(Math.sign(Ke)===Math.sign(at))Ye=!0;if(Ye)Ce=-Ke,Re=De,ze=Math.sqrt(N);else Ce=De,Re=Ke,ze=Math.sqrt(N/2)}return new ue(Ce/ze,Re/ze)}let pe=[];for(let te=0,me=R.length,ve=me-1,Ce=te+1;te<me;te++,ve++,Ce++){if(ve===me)ve=0;if(Ce===me)Ce=0;pe[te]=k(R[te],R[ve],R[Ce])}let V=[],Z,ae=pe.concat();for(let te=0,me=J;te<me;te++){let ve=H[te];Z=[];for(let Ce=0,Re=ve.length,ze=Re-1,De=Ce+1;Ce<Re;Ce++,ze++,De++){if(ze===Re)ze=0;if(De===Re)De=0;Z[Ce]=k(ve[Ce],ve[ze],ve[De])}V.push(Z),ae=ae.concat(Z)}let Ae;if(M===0)Ae=ri.triangulateShape(R,H);else{let te=[],me=[];for(let ve=0;ve<M;ve++){let Ce=ve/M,Re=h*Math.cos(Ce*Math.PI/2),ze=f*Math.sin(Ce*Math.PI/2)+v;for(let De=0,Ke=R.length;De<Ke;De++){let Qe=q(R[De],pe[De],ze);if(be(Qe.x,Qe.y,-Re),Ce===0)te.push(Qe)}for(let De=0,Ke=J;De<Ke;De++){let Qe=H[De];Z=V[De];let at=[];for(let N=0,xt=Qe.length;N<xt;N++){let Ye=q(Qe[N],Z[N],ze);if(be(Ye.x,Ye.y,-Re),Ce===0)at.push(Ye)}if(Ce===0)me.push(at)}}Ae=ri.triangulateShape(te,me)}let Q=Ae.length,ce=f+v;for(let te=0;te<K;te++){let me=d?q(P[te],ae[te],ce):P[te];if(!w)be(me.x,me.y,0);else I.copy(y.normals[0]).multiplyScalar(me.x),A.copy(y.binormals[0]).multiplyScalar(me.y),g.copy(T[0]).add(I).add(A),be(g.x,g.y,g.z)}for(let te=1;te<=c;te++)for(let me=0;me<K;me++){let ve=d?q(P[me],ae[me],ce):P[me];if(!w)be(ve.x,ve.y,u/c*te);else I.copy(y.normals[te]).multiplyScalar(ve.x),A.copy(y.binormals[te]).multiplyScalar(ve.y),g.copy(T[te]).add(I).add(A),be(g.x,g.y,g.z)}for(let te=M-1;te>=0;te--){let me=te/M,ve=h*Math.cos(me*Math.PI/2),Ce=f*Math.sin(me*Math.PI/2)+v;for(let Re=0,ze=R.length;Re<ze;Re++){let De=q(R[Re],pe[Re],Ce);be(De.x,De.y,u+ve)}for(let Re=0,ze=H.length;Re<ze;Re++){let De=H[Re];Z=V[Re];for(let Ke=0,Qe=De.length;Ke<Qe;Ke++){let at=q(De[Ke],Z[Ke],Ce);if(!w)be(at.x,at.y,u+ve);else be(at.x,at.y+T[c-1].y,T[c-1].x+ve)}}}Ie(),Fe();function Ie(){let te=i.length/3;if(d){let me=0,ve=K*me;for(let Ce=0;Ce<Q;Ce++){let Re=Ae[Ce];tt(Re[2]+ve,Re[1]+ve,Re[0]+ve)}me=c+M*2,ve=K*me;for(let Ce=0;Ce<Q;Ce++){let Re=Ae[Ce];tt(Re[0]+ve,Re[1]+ve,Re[2]+ve)}}else{for(let me=0;me<Q;me++){let ve=Ae[me];tt(ve[2],ve[1],ve[0])}for(let me=0;me<Q;me++){let ve=Ae[me];tt(ve[0]+K*c,ve[1]+K*c,ve[2]+K*c)}}n.addGroup(te,i.length/3-te,0)}function Fe(){let te=i.length/3,me=0;Oe(R,me),me+=R.length;for(let ve=0,Ce=H.length;ve<Ce;ve++){let Re=H[ve];Oe(Re,me),me+=Re.length}n.addGroup(te,i.length/3-te,1)}function Oe(te,me){let ve=te.length;while(--ve>=0){let Ce=ve,Re=ve-1;if(Re<0)Re=te.length-1;for(let ze=0,De=c+M*2;ze<De;ze++){let Ke=K*ze,Qe=K*(ze+1),at=me+Ce+Ke,N=me+Re+Ke,xt=me+Re+Qe,Ye=me+Ce+Qe;$e(at,N,xt,Ye)}}}function be(te,me,ve){o.push(te),o.push(me),o.push(ve)}function tt(te,me,ve){He(te),He(me),He(ve);let Ce=i.length/3,Re=_.generateTopUV(n,i,Ce-3,Ce-2,Ce-1);st(Re[0]),st(Re[1]),st(Re[2])}function $e(te,me,ve,Ce){He(te),He(me),He(Ce),He(me),He(ve),He(Ce);let Re=i.length/3,ze=_.generateSideWallUV(n,i,Re-6,Re-3,Re-2,Re-1);st(ze[0]),st(ze[1]),st(ze[3]),st(ze[1]),st(ze[2]),st(ze[3])}function He(te){i.push(o[te*3+0]),i.push(o[te*3+1]),i.push(o[te*3+2])}function st(te){s.push(te.x),s.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return xd(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}let i=e.options.extrudePath;if(i!==void 0)e.options.extrudePath=new to[i.type]().fromJSON(i);return new is(n,e.options)}}var _d={generateTopUV:function(e,t,n,i,s){let r=t[n*3],a=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new ue(r,a),new ue(o,l),new ue(c,u)]},generateSideWallUV:function(e,t,n,i,s,r){let a=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],v=t[s*3+2],M=t[r*3],p=t[r*3+1],_=t[r*3+2];if(Math.abs(o-u)<Math.abs(a-c))return[new ue(a,1-l),new ue(c,1-d),new ue(h,1-v),new ue(M,1-_)];else return[new ue(o,1-l),new ue(u,1-d),new ue(f,1-v),new ue(p,1-_)]}};function xd(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let r=e[i];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);if(n.options=Object.assign({},t),t.extrudePath!==void 0)n.options.extrudePath=t.extrudePath.toJSON();return n}class Dn extends wt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,u=e/a,d=t/o,h=[],f=[],v=[],M=[];for(let p=0;p<c;p++){let _=p*d-r;for(let T=0;T<l;T++){let w=T*u-s;f.push(w,-_,0),v.push(0,0,1),M.push(T/a),M.push(1-p/o)}}for(let p=0;p<o;p++)for(let _=0;_<a;_++){let T=_+l*p,w=_+l*(p+1),y=_+1+l*(p+1),A=_+1+l*p;h.push(T,w,A),h.push(w,y,A)}this.setIndex(h),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.widthSegments,e.heightSegments)}}class pi extends wt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],u=new U,d=new U,h=[],f=[],v=[],M=[];for(let p=0;p<=n;p++){let _=[],T=p/n,w=r+T*a,y=e*Math.cos(w),A=Math.sqrt(e*e-y*y),I=0;if(p===0&&r===0)I=0.5/t;else if(p===n&&o===Math.PI)I=-0.5/t;for(let g=0;g<=t;g++){let S=g/t,P=i+S*s;u.x=-A*Math.cos(P),u.y=y,u.z=A*Math.sin(P),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),M.push(S+I,1-T),_.push(l++)}c.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let T=c[p][_+1],w=c[p][_],y=c[p+1][_],A=c[p+1][_+1];if(p!==0||r>0)h.push(T,w,A);if(p!==n-1||o<Math.PI)h.push(w,y,A)}this.setIndex(h),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function mi(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(_c(s))if(s.isRenderTargetTexture)We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null;else t[n][i]=s.clone();else if(Array.isArray(s))if(_c(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Vt(e){let t={};for(let n=0;n<e.length;n++){let i=mi(e[n]);for(let s in i)t[s]=i[s]}return t}function _c(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function vd(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function fl(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return it.workingColorSpace}var Un={clone:mi,merge:Vt},yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends Nn{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yd,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=vd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)t.uniforms[i]={type:"t",value:r.toJSON(e).uuid};else if(r&&r.isColor)t.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)t.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)t.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)t.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)t.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)t.uniforms[i]={type:"m4",value:r.toArray()};else t.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)t.extensions=n;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Xe().setHex(i.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Et().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(i.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class Ys extends Ct{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pl extends Nn{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ml extends Nn{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function zi(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function Pr(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class gi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){let a=t[1];if(e<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}while(n<r){let a=n+r>>>1;if(e<t[a])r=a;else n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class gl extends gi{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,a=2*t-n;break;case 2402:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=e,o=2*n-t;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=e-1,o=t}let l=(n-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,f=(n-t)/(i-t),v=f*f,M=v*f,p=-d*M+2*d*v-d*f,_=(1+d)*M+(-1.5-2*d)*v+(-0.5+d)*f+1,T=(-1-h)*M+(1.5+h)*v+0.5*f,w=h*M-h*v;for(let y=0;y!==a;++y)s[y]=p*r[c+y]+_*r[l+y]+T*r[o+y]+w*r[u+y];return s}}class _l extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(n-t)/(i-t),u=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*u+r[o+d]*c;return s}}class xl extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class vl extends gi{interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this.inTangents,u=this.outTangents;if(!c||!u){let f=(n-t)/(i-t),v=1-f;for(let M=0;M!==a;++M)s[M]=r[l+M]*v+r[o+M]*f;return s}let d=a*2,h=e-1;for(let f=0;f!==a;++f){let v=r[l+f],M=r[o+f],p=h*d+f*2,_=u[p],T=u[p+1],w=e*d+f*2,y=c[w],A=c[w+1],I=bd(n,t,_,y,i);s[f]=Uh(I,v,T,A,M)}return s}}function Uh(e,t,n,i,s){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*s}function Md(e,t,n,i,s){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)}function bd(e,t,n,i,s){let r=(e-t)/(s-t);for(let a=0;a<8;a++){let o=Uh(r,t,n,i,s)-e;if(Math.abs(o)<0.0000000001)break;let l=Md(r,t,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class sn{constructor(e,t,n,i){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zi(t,this.TimeBufferType),this.values=zi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zi(e.times,Array),values:zi(e.values,Array)};let i=e.getInterpolation();if(i!==e.DefaultInterpolation)n.interpolation=i;if(Pr(e.settings))n.settings={inTangents:zi(e.settings.inTangents,Array),outTangents:zi(e.settings.outTangents,Array)}}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vl(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;if(Pr(this.settings))xc(this.settings.inTangents,e),xc(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;if(Pr(this.settings))vc(this.settings.inTangents,e),vc(this.settings.outTangents,e)}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<e)++s;while(r!==-1&&n[r]>t)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)qe("KeyframeTrack: Invalid value size in track.",this),e=!1;let n=this.times,i=this.values,s=n.length;if(s===0)qe("KeyframeTrack: Track is empty.",this),e=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){qe("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(r!==null&&r>o){qe("KeyframeTrack: Out of order keys.",this,a,o,r),e=!1;break}r=o}if(i!==void 0){if(Au(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){qe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=e[a],c=e[a+1];if(l!==c&&(a!==1||l!==e[0]))if(!i){let u=a*n,d=u-n,h=u+n;for(let f=0;f!==n;++f){let v=t[u+f];if(v!==t[d+f]||v!==t[h+f]){o=!0;break}}}else o=!0;if(o){if(a!==r){e[r]=e[a];let u=a*n,d=r*n;for(let h=0;h!==n;++h)t[d+h]=t[u+h]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)t[o+l]=t[a+l];++r}if(r!==e.length)this.times=e.slice(0,r),this.values=t.slice(0,r*n);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);if(i.createInterpolant=this.createInterpolant,Pr(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function xc(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function vc(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=2301;class _i extends sn{constructor(e,t,n){super(e,t,n)}}_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=2300;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;class yl extends sn{constructor(e,t,n,i){super(e,t,n,i)}}yl.prototype.ValueTypeName="color";class Sl extends sn{constructor(e,t,n,i){super(e,t,n,i)}}Sl.prototype.ValueTypeName="number";class Ml extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-t)/(i-t),l=e*a;for(let c=l+a;l!==c;l+=4)Ln.slerpFlat(s,0,r,l-a,r,l,o);return s}}class ua extends sn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}}ua.prototype.ValueTypeName="quaternion";ua.prototype.InterpolantFactoryMethodSmooth=void 0;class xi extends sn{constructor(e,t,n){super(e,t,n)}}xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=2300;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;class bl extends sn{constructor(e,t,n,i){super(e,t,n,i)}}bl.prototype.ValueTypeName="vector";var Dr={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(yc(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(yc(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function yc(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class El{constructor(e,t,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){let h=l[u],f=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Fh=new El;class Zs{constructor(e){if(this.manager=e!==void 0?e:Fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Zs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gi=new WeakMap;class Tl extends Zs{constructor(e){super(e)}load(e,t,n,i){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let s=this,r=Dr.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){if(t)t(r);s.manager.itemEnd(e)},0);else{let u=Gi.get(r);if(u===void 0)u=[],Gi.set(r,u);u.push({onLoad:t,onError:i})}return r}let a=Vi("img");function o(){if(c(),t)t(this);let u=Gi.get(this)||[];for(let d=0;d<u.length;d++){let h=u[d];if(h.onLoad)h.onLoad(this)}Gi.delete(this),s.manager.itemEnd(e)}function l(u){if(c(),i)i(u);Dr.remove(`image:${e}`);let d=Gi.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];if(f.onError)f.onError(u)}Gi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}if(a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)a.crossOrigin=this.crossOrigin}return Dr.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}}class da extends Zs{constructor(e){super(e)}load(e,t,n,i){let s=new It,r=new Tl(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){if(s.image=a,s.needsUpdate=!0,t!==void 0)t(s)},n,i),s}}var Lr=new U,Nr=new Ln,pn=new U;class fa extends Bt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Lr,Nr,pn),pn.x===1&&pn.y===1&&pn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Lr,Nr,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){if(super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Lr,Nr,pn),pn.x===1&&pn.y===1&&pn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Lr,Nr,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Vn=new U,Sc=new ue,Mc=new ue;class qt extends fa{constructor(e=50,t=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ra*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Ra*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,Sc,Mc),t.subVectors(Mc,Sc)}setViewOffset(e,t,n,i,s,r){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ra*0.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,t-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=e*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Js extends fa{constructor(e=-1,t=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}var Hi=-90,ki=1;class $s extends Bt{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qt(Hi,ki,e,t);i.layers=this.layers,this.add(i);let s=new qt(Hi,ki,e,t);s.layers=this.layers,this.add(s);let r=new qt(Hi,ki,e,t);r.layers=this.layers,this.add(r);let a=new qt(Hi,ki,e,t);a.layers=this.layers,this.add(a);let o=new qt(Hi,ki,e,t);o.layers=this.layers,this.add(o);let l=new qt(Hi,ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,o]=t;for(let l of t)this.remove(l);if(e===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let M=!1;if(e.isWebGLRenderer===!0)M=e.state.buffers.depth.getReversed();else M=e.reversedDepthBuffer;if(e.setRenderTarget(n,0,i),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(n,1,i),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(n,2,i),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(n,3,i),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(n,4,i),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),M&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(u,d,h),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class wl extends qt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class pa{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=Ed.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function Ed(){if(this._document.hidden===!1)this.reset()}var Al="\\[\\]\\.:\\/",Td=new RegExp("["+Al+"]","g"),Rl="[^"+Al+"]",wd="[^"+Al.replace("\\.","")+"]",Ad=/((?:WC+[\/:])*)/.source.replace("WC",Rl),Rd=/(WCOD+)?/.source.replace("WCOD",wd),Cd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),Id=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),Pd=new RegExp("^"+Ad+Rd+Cd+Id+"$"),Ld=["material","materials","bones","map"];class Oh{constructor(e,t,n){let i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){if(!(e&&e.isAnimationObjectGroup))return new pt(e,t,n);else return new pt.Composite(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Td,"")}static parseTrackName(e){let t=Pd.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Ld.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===t||a.uuid===t)return a;let o=n(a.children);if(o)return o}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=t;if(!e)e=pt.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[s]!==void 0)s=e.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=Oh;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E0=new Float32Array(1);var bc=new gt;class ma{constructor(e,t,n=0,i=1/0){this.ray=new ji(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bc),this}intersectObject(e,t=!0,n=[]){return so(e,this,n,t),n.sort(Ec),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)so(e[i],this,n,t);return n.sort(Ec),n}}function Ec(e,t){return e.distance-t.distance}function so(e,t,n,i){let s=!0;if(e.layers.test(t.layers)){if(e.raycast(t,n)===!1)s=!1}if(s===!0&&i===!0){let r=e.children;for(let a=0,o=r.length;a<o;a++)so(r[a],t,n,!0)}}class ga{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,We("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1000,this.oldTime=t,this.elapsedTime+=e}return e}}class Bh{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}function Cl(e,t,n,i){let s=Nd(i);switch(n){case 1021:return e*t;case 1028:return e*t/s.components*s.byteLength;case 1029:return e*t/s.components*s.byteLength;case 1030:return e*t*2/s.components*s.byteLength;case 1031:return e*t*2/s.components*s.byteLength;case 1022:return e*t*3/s.components*s.byteLength;case 1023:return e*t*4/s.components*s.byteLength;case 1033:return e*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Nd(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)We("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function au(){let e=null,t=!1,n=null,i=null;function s(r,a){i=e.requestAnimationFrame(s),n(r,a)}return{start:function(){if(t===!0)return;if(n===null)return;if(e===null)return;i=e.requestAnimationFrame(s),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(i);t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function Dd(e){let t=new WeakMap;function n(o,l){let{array:c,usage:u}=o,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)f=e.HALF_FLOAT;else f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:u,updateRanges:d}=l;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,u);else{d.sort((f,v)=>f.start-v.start);let h=0;for(let f=1;f<d.length;f++){let v=d[h],M=d[f];if(M.start<=v.start+v.count+1)v.count=Math.max(v.count,M.start+M.count-v.start);else++h,d[h]=M}d.length=h+1;for(let f=0,v=d.length;f<v;f++){let M=d[f];e.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return t.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=t.get(o);if(l)e.deleteBuffer(l.buffer),t.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=t.get(o);if(!u||u.version<o.version)t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,af=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Af=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Df=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ip=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;var Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,am=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Ud,alphahash_pars_fragment:Fd,alphamap_fragment:Od,alphamap_pars_fragment:Bd,alphatest_fragment:zd,alphatest_pars_fragment:Gd,aomap_fragment:Hd,aomap_pars_fragment:kd,batching_pars_vertex:Wd,batching_vertex:Vd,begin_vertex:Xd,beginnormal_vertex:qd,bsdfs:Yd,iridescence_fragment:Zd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:jd,color_fragment:ef,color_pars_fragment:tf,color_pars_vertex:nf,color_vertex:sf,common:rf,defaultnormal_vertex:af,displacementmap_pars_vertex:of,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,colorspace_fragment:uf,colorspace_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Af,envmap_vertex:_f,fog_vertex:xf,fog_pars_vertex:vf,fog_fragment:yf,fog_pars_fragment:Sf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:bf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:Tf,lights_pars_begin:wf,lights_toon_fragment:Rf,lights_toon_pars_fragment:Cf,lights_phong_fragment:If,lights_phong_pars_fragment:Pf,lights_physical_fragment:Lf,lights_physical_pars_fragment:Nf,lights_fragment_begin:Df,lights_fragment_maps:Uf,lights_fragment_end:Ff,lightprobes_pars_fragment:Of,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Hf,map_fragment:kf,map_pars_fragment:Wf,map_particle_fragment:Vf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:Zf,morphcolor_vertex:Jf,morphnormal_vertex:$f,morphtarget_pars_vertex:Kf,morphtarget_vertex:Qf,normal_fragment_begin:jf,normal_fragment_maps:ep,normal_pars_fragment:tp,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:ap,clearcoat_pars_fragment:op,iridescence_pars_fragment:lp,opaque_fragment:cp,packing:hp,premultiplied_alpha_fragment:up,project_vertex:dp,dithering_fragment:fp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:xp,shadowmap_vertex:vp,shadowmask_pars_fragment:yp,skinbase_vertex:Sp,skinning_pars_vertex:Mp,skinning_vertex:bp,skinnormal_vertex:Ep,specularmap_fragment:Tp,specularmap_pars_fragment:wp,tonemapping_fragment:Ap,tonemapping_pars_fragment:Rp,transmission_fragment:Cp,transmission_pars_fragment:Ip,uv_pars_fragment:Pp,uv_pars_vertex:Lp,uv_vertex:Np,worldpos_vertex:Dp,background_vert:Up,background_frag:Fp,backgroundCube_vert:Op,backgroundCube_frag:Bp,cube_vert:zp,cube_frag:Gp,depth_vert:Hp,depth_frag:kp,distance_vert:Wp,distance_frag:Vp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:Zp,meshbasic_vert:Jp,meshbasic_frag:$p,meshlambert_vert:Kp,meshlambert_frag:Qp,meshmatcap_vert:jp,meshmatcap_frag:em,meshnormal_vert:tm,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:sm,meshphysical_vert:rm,meshphysical_frag:am,meshtoon_vert:om,meshtoon_frag:lm,points_vert:cm,points_frag:hm,shadow_vert:um,shadow_frag:dm,sprite_vert:fm,sprite_frag:pm},we={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ue(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},yn={basic:{uniforms:Vt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Vt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Vt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Vt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Vt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Xe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Vt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Vt([we.points,we.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Vt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Vt([we.common,we.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Vt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Vt([we.sprite,we.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Vt([we.common,we.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Vt([we.lights,we.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};yn.physical={uniforms:Vt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var _a={r:0,b:0,g:0},mm=new gt,ou=new Je;ou.set(-1,0,0,0,1,0,0,0,1);function gm(e,t,n,i,s,r){let a=new Xe(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){let y=T.backgroundBlurriness>0;w=t.get(w,y)}return w}function v(T){let w=!1,y=f(T);if(y===null)p(a,o);else if(y&&y.isColor)p(y,1),w=!0;let A=e.xr.getEnvironmentBlendMode();if(A==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(A==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(e.autoClear||w)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function M(T,w){let y=f(w);if(y&&y.isCubeTexture){if(c===void 0)c=new dt(new ts(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:mi(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,I,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(ou);if(c.material.toneMapped=it.getTransfer(y.colorSpace)!==mt,u!==y||d!==y.version||h!==e.toneMapping)c.material.needsUpdate=!0,u=y,d=y.version,h=e.toneMapping;c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)}else if(y&&y.isTexture){if(l===void 0)l=new dt(new Dn(2,2),new Ct({name:"BackgroundMaterial",uniforms:mi(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=it.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0)y.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(y.matrix),u!==y||d!==y.version||h!==e.toneMapping)l.material.needsUpdate=!0,u=y,d=y.version,h=e.toneMapping;l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)}}function p(T,w){T.getRGB(_a,fl(e)),n.buffers.color.setClear(_a.r,_a.g,_a.b,w,r)}function _(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:v,addToRenderList:M,dispose:_}}function _m(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(L,G,J,R,q){let K=!1,k=d(L,R,J,G);if(r!==k)r=k,c(r.object);if(K=f(L,R,J,q),K)v(L,R,J,q);if(q!==null)t.update(q,e.ELEMENT_ARRAY_BUFFER);if(K||a){if(a=!1,y(L,G,J,R),q!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer)}}function l(){return e.createVertexArray()}function c(L){return e.bindVertexArray(L)}function u(L){return e.deleteVertexArray(L)}function d(L,G,J,R){let q=R.wireframe===!0,K=i[G.id];if(K===void 0)K={},i[G.id]=K;let k=L.isInstancedMesh===!0?L.id:0,pe=K[k];if(pe===void 0)pe={},K[k]=pe;let V=pe[J.id];if(V===void 0)V={},pe[J.id]=V;let Z=V[q];if(Z===void 0)Z=h(l()),V[q]=Z;return Z}function h(L){let G=[],J=[],R=[];for(let q=0;q<n;q++)G[q]=0,J[q]=0,R[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:R,object:L,attributes:{},index:null}}function f(L,G,J,R){let q=r.attributes,K=G.attributes,k=0,pe=J.getAttributes();for(let V in pe)if(pe[V].location>=0){let ae=q[V],Ae=K[V];if(Ae===void 0){if(V==="instanceMatrix"&&L.instanceMatrix)Ae=L.instanceMatrix;if(V==="instanceColor"&&L.instanceColor)Ae=L.instanceColor}if(ae===void 0)return!0;if(ae.attribute!==Ae)return!0;if(Ae&&ae.data!==Ae.data)return!0;k++}if(r.attributesNum!==k)return!0;if(r.index!==R)return!0;return!1}function v(L,G,J,R){let q={},K=G.attributes,k=0,pe=J.getAttributes();for(let V in pe)if(pe[V].location>=0){let ae=K[V];if(ae===void 0){if(V==="instanceMatrix"&&L.instanceMatrix)ae=L.instanceMatrix;if(V==="instanceColor"&&L.instanceColor)ae=L.instanceColor}let Ae={};if(Ae.attribute=ae,ae&&ae.data)Ae.data=ae.data;q[V]=Ae,k++}r.attributes=q,r.attributesNum=k,r.index=R}function M(){let L=r.newAttributes;for(let G=0,J=L.length;G<J;G++)L[G]=0}function p(L){_(L,0)}function _(L,G){let J=r.newAttributes,R=r.enabledAttributes,q=r.attributeDivisors;if(J[L]=1,R[L]===0)e.enableVertexAttribArray(L),R[L]=1;if(q[L]!==G)e.vertexAttribDivisor(L,G),q[L]=G}function T(){let L=r.newAttributes,G=r.enabledAttributes;for(let J=0,R=G.length;J<R;J++)if(G[J]!==L[J])e.disableVertexAttribArray(J),G[J]=0}function w(L,G,J,R,q,K,k){if(k===!0)e.vertexAttribIPointer(L,G,J,q,K);else e.vertexAttribPointer(L,G,J,R,q,K)}function y(L,G,J,R){M();let q=R.attributes,K=J.getAttributes(),k=G.defaultAttributeValues;for(let pe in K){let V=K[pe];if(V.location>=0){let Z=q[pe];if(Z===void 0){if(pe==="instanceMatrix"&&L.instanceMatrix)Z=L.instanceMatrix;if(pe==="instanceColor"&&L.instanceColor)Z=L.instanceColor}if(Z!==void 0){let ae=Z.normalized,Ae=Z.itemSize,Q=t.get(Z);if(Q===void 0)continue;let{buffer:ce,type:Ie,bytesPerElement:Fe}=Q,Oe=Ie===e.INT||Ie===e.UNSIGNED_INT||Z.gpuType===co;if(Z.isInterleavedBufferAttribute){let be=Z.data,tt=be.isInterleavedBuffer===!0?be.stride:be.itemSize,$e=Z.offset;if(be.isInstancedInterleavedBuffer||be.isInstancedBufferAttribute){for(let He=0;He<V.locationSize;He++)_(V.location+He,be.meshPerAttribute);if(L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0)R._maxInstanceCount=be.meshPerAttribute*be.count}else for(let He=0;He<V.locationSize;He++)p(V.location+He);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let He=0;He<V.locationSize;He++)w(V.location+He,Ae/V.locationSize,Ie,ae,tt*Fe,($e+Ae/V.locationSize*He)*Fe,Oe)}else{if(Z.isInstancedBufferAttribute){for(let be=0;be<V.locationSize;be++)_(V.location+be,Z.meshPerAttribute);if(L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0)R._maxInstanceCount=Z.meshPerAttribute*Z.count}else for(let be=0;be<V.locationSize;be++)p(V.location+be);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let be=0;be<V.locationSize;be++)w(V.location+be,Ae/V.locationSize,Ie,ae,Ae*Fe,Ae/V.locationSize*be*Fe,Oe)}}else if(k!==void 0){let ae=k[pe];if(ae!==void 0)switch(ae.length){case 2:e.vertexAttrib2fv(V.location,ae);break;case 3:e.vertexAttrib3fv(V.location,ae);break;case 4:e.vertexAttrib4fv(V.location,ae);break;default:e.vertexAttrib1fv(V.location,ae)}}}}T()}function A(){P();for(let L in i){let G=i[L];for(let J in G){let R=G[J];for(let q in R){let K=R[q];for(let k in K)u(K[k].object),delete K[k];delete R[q]}}delete i[L]}}function I(L){if(i[L.id]===void 0)return;let G=i[L.id];for(let J in G){let R=G[J];for(let q in R){let K=R[q];for(let k in K)u(K[k].object),delete K[k];delete R[q]}}delete i[L.id]}function g(L){for(let G in i){let J=i[G];for(let R in J){let q=J[R];if(q[L.id]===void 0)continue;let K=q[L.id];for(let k in K)u(K[k].object),delete K[k];delete q[L.id]}}}function S(L){for(let G in i){let J=i[G],R=L.isInstancedMesh===!0?L.id:0,q=J[R];if(q===void 0)continue;for(let K in q){let k=q[K];for(let pe in k)u(k[pe].object),delete k[pe];delete q[K]}if(delete J[R],Object.keys(J).length===0)delete i[G]}}function P(){if(H(),a=!0,r===s)return;r=s,c(r.object)}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:H,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:p,disableUnusedAttributes:T}}function xm(e,t,n){let i;function s(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){if(u===0)return;e.drawArraysInstanced(i,l,c,u),n.update(c,i,u)}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function vm(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){if(g!==In&&i.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(g){let S=g===Wt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(g!==dn&&g!==Cn&&!S&&i.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}if(g==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);if(u!==c)We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let d=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.logarithmicDepthBuffer===!0&&d===!1;if(n.reversedDepthBuffer===!0&&d===!1)We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(n.logarithmicDepthBuffer===!0&&d===!0)We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),I=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:y,maxSamples:A,samples:I}}function ym(e){let t=this,n=null,i=0,s=!1,r=!1,a=new mn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,f){let{clippingPlanes:v,clipIntersection:M,clipShadows:p}=d,_=e.get(d);if(!s||v===null||v.length===0||r&&!p)if(r)u(null);else c();else{let T=r?0:i,w=T*4,y=_.clippingState||null;l.value=y,y=u(v,h,w,f);for(let A=0;A!==w;++A)y[A]=n[A];_.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;t.numPlanes=i,t.numIntersection=0}function u(d,h,f,v){let M=d!==null?d.length:0,p=null;if(M!==0){if(p=l.value,v!==!0||p===null){let _=f+M*4,T=h.matrixWorldInverse;if(o.getNormalMatrix(T),p===null||p.length<_)p=new Float32Array(_);for(let w=0,y=f;w!==M;++w,y+=4)a.copy(d[w]).applyMatrix4(T,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}class ya extends Ft{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ia(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ts(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Rn});s.uniforms.tEquirect.value=t;let r=new dt(i,s),a=t.minFilter;if(t.minFilter===Yn)t.minFilter=tn;return new $s(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}var zh=256,Sm=3,Mm=20,lu=256,cu=16,bm=3,Em=new U,Tm=new Xe;class va{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $s(1,10,null),this._boxMesh=new dt(new ts(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=0.1,i=100,s={}){let{size:r=256,position:a=Em}=s,o=this._renderer;this._setSize(r);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:u,autoClearColor:d,autoClearDepth:h,autoClearStencil:f}=o,v=e.background;if(o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,v===null)e.background=o.getClearColor(Tm);let M=new $s(n,i,c);if(M.position.copy(a),M.update(o,e),o.autoClear=u,o.autoClearColor=d,o.autoClearDepth=h,o.autoClearStencil=f,e.background=v,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(zh,Th(e))}_fromTexture(e,t){if(e.mapping===Os||e.mapping===Ki)this._setSize(e.image.length===0?zh:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Gh(e,!1,!1),n=Math.log2(e)-Sm;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;if(n===null||n.width!==t||e&&n.depthBuffer===!1){if(n!==null)n.dispose();this._sourceTarget=Gh(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let r=e.width>>t;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===Os||e.mapping===Ki){if(this._cubemapMaterial===null)this._cubemapMaterial=kh();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Hh();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=wm(),this._integrationMaterial=Am();let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/cu);for(let r=0;r<=n;r++){let a=va.lodToRoughness(r,n);if(r>n-bm)s.roughness.value=a,this._renderCube(e,r,this._integrationMaterial);else{let o=a>0?Math.log2(t)+0.5*Math.log2(6/(lu*Math.pow(a,4)))+0.5:0;i.roughness.value=a,i.lodBias.value=o,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=Rm();let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function Gh(e,t,n){return new ya(e,{minFilter:Yn,generateMipmaps:t,type:Wt,colorSpace:Yo,depthBuffer:n})}function er(e,t,n){return new Ct({name:e,uniforms:t,vertexShader:je.cube_vert,fragmentShader:n,side:kt,blending:Rn,depthTest:!1,depthWrite:!1})}function wm(){return er("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Am(){return er("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rm(){return er("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Mm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Hh(){return er("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function kh(){return er("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cm(e){let t=new WeakMap,n=new WeakMap,i=null;function s(h,f=!1){if(h===null||h===void 0)return null;if(f)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===zr||f===Gr)if(t.has(h)){let v=t.get(h).texture;return o(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let M=new ya(v.height);return M.fromEquirectangularTexture(e,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,v=f===zr||f===Gr,M=f===Os||f===Ki;if(v||M){let p=n.get(h),_=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_){if(i===null)i=new va(e);return p=v?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),p.texture}else if(p!==void 0)return p.texture;else{let T=h.image;if(v&&T&&T.height>0||M&&T&&l(T)){if(i===null)i=new va(e);return p=v?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),h.addEventListener("dispose",u),p.texture}else return null}}}return h}function o(h,f){if(f===zr)h.mapping=Os;else if(f===Gr)h.mapping=Ki;return h}function l(h){let f=0,v=6;for(let M=0;M<v;M++)if(h[M]!==void 0)f++;return f===v}function c(h){let f=h.target;f.removeEventListener("dispose",c);let v=t.get(f);if(v!==void 0)t.delete(f),v.dispose()}function u(h){let f=h.target;f.removeEventListener("dispose",u);let v=n.get(f);if(v!==void 0)n.delete(f),v.dispose()}function d(){if(t=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function Im(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)ys("WebGLRenderer: "+i+" extension not supported.");return s}}}function Pm(e,t,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry((v)=>delete s[v]);function o(v){l(v.target)}function l(v){if(v.index!==null)t.remove(v.index);for(let p in v.attributes)t.remove(v.attributes[p]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);let M=r.get(v);if(M)t.remove(M),r.delete(v);if(i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0)delete v._maxInstanceCount;n.memory.geometries--}function c(v,M){if(s[M.id]!==void 0)return M;return M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),n.memory.geometries++,M}function u(v){let M=v.attributes;for(let p in M)t.update(M[p],e.ARRAY_BUFFER)}function d(v){let M=v.index,p=v.attributes.position,_=0;if(p===void 0)return;let T=M!==null?M.array.length:p.array.length/3-1,y=new(p.count>=65535?jr:Qr)(Math.ceil(T/3)*6,1),A=y.array;if(M!==null){let g=M.array;_=M.version;for(let S=0,P=0;S<T;S+=3){let H=g[S+0],L=g[S+1],G=g[S+2];A[P++]=H,A[P++]=L,A[P++]=L,A[P++]=G,A[P++]=G,A[P++]=H}}else{_=p.version;for(let g=0,S=0;g<T;g+=3){let P=g+0,H=g+1,L=g+2;A[S++]=P,A[S++]=H,A[S++]=H,A[S++]=L,A[S++]=L,A[S++]=P}}y.version=_;let I=r.get(v);if(I)t.remove(I);r.set(v,y)}function h(v){let M=r.get(v);if(M){let p=v.index;if(p!==null){if(M.version<p.version)d(v)}}else d(v);return r.get(v)}function f(){for(let v in s){let M=s[v].deref();if(M!==void 0)l(M)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function Lm(e,t,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){e.drawElements(i,h,r,d*a),n.update(h,i,1)}function c(d,h,f){if(f===0)return;e.drawElementsInstanced(i,h,r,d*a,f),n.update(h,i,f)}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let M=0;for(let p=0;p<f;p++)M+=h[p];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Nm(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Dm(e,t,n){let i=new WeakMap,s=new Et;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let P=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",P)};if(h!==void 0)h.texture.dispose();let f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],w=0;if(f===!0)w=1;if(v===!0)w=2;if(M===!0)w=3;let y=o.attributes.position.count*w,A=1;if(y>t.maxTextureSize)A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize;let I=new Float32Array(y*A*4*d),g=new $r(I,y,A,d);g.type=Cn,g.needsUpdate=!0;let S=w*4;for(let H=0;H<d;H++){let L=p[H],G=_[H],J=T[H],R=y*A*4*H;for(let q=0;q<L.count;q++){let K=q*S;if(f===!0)s.fromBufferAttribute(L,q),I[R+K+0]=s.x,I[R+K+1]=s.y,I[R+K+2]=s.z,I[R+K+3]=0;if(v===!0)s.fromBufferAttribute(G,q),I[R+K+4]=s.x,I[R+K+5]=s.y,I[R+K+6]=s.z,I[R+K+7]=0;if(M===!0)s.fromBufferAttribute(J,q),I[R+K+8]=s.x,I[R+K+9]=s.y,I[R+K+10]=s.z,I[R+K+11]=J.itemSize===4?s.w:1}}h={count:d,texture:g,size:new ue(y,A)},i.set(o,h),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function Um(e,t,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u)t.update(h),r.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==u){if(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,e.ARRAY_BUFFER);r.set(c,u)}}if(c.isSkinnedMesh){let f=c.skeleton;if(r.get(f)!==u)f.update(),r.set(f,u)}return h}function o(){r=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null)n.remove(u.instanceColor)}return{update:a,dispose:o}}var Fm={[Is]:"LINEAR_TONE_MAPPING",[Ps]:"REINHARD_TONE_MAPPING",[Ls]:"CINEON_TONE_MAPPING",[Ns]:"ACES_FILMIC_TONE_MAPPING",[Us]:"AGX_TONE_MAPPING",[Fs]:"NEUTRAL_TONE_MAPPING",[Ds]:"CUSTOM_TONE_MAPPING"};function Om(e,t,n,i,s,r){let a=new Ft(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new wt;u.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new yt([0,2,0,0,2,0],2));let d=new Ys({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new dt(u,d),f=new Js(-1,1,1,-1,0,1),v=null,M=null,p=!1,_,T=null,w=[],y=!1;this.setSize=function(A,I){if(a.setSize(A,I),o!==null)o.setSize(A,I);if(l!==null)l.setSize(A,I);for(let g=0;g<w.length;g++){let S=w[g];if(S.setSize)S.setSize(A,I)}},this.setEffects=function(A){w=A,y=w.length>0&&w[0].isRenderPass===!0;let{width:I,height:g}=a;if(w.length>0&&o===null)o=new Ft(I,g,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),l=new Ft(I,g,{type:Wt,depthBuffer:!1,stencilBuffer:!1});let S=s===!0&&w.some((P)=>P.needsDepthTexture===!0);if(S!==(a.depthTexture!==null)){if(S===!0&&c===null){if(c=new Qn(I,g),r===!0)c.format=Jn,c.type=oi}a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S}for(let P=0;P<w.length;P++){let H=w[P];if(H.setSize)H.setSize(I,g);if(S&&H.needsDepthTexture===!0&&H.setDepthTexture)H.setDepthTexture(c)}},this.begin=function(A,I){if(p)return!1;if(A.toneMapping===_n&&w.length===0)return!1;if(T=I,I!==null){let{width:g,height:S}=I;if(a.width!==g||a.height!==S)this.setSize(g,S)}if(y===!1)A.setRenderTarget(a);return _=A.toneMapping,A.toneMapping=_n,!0},this.hasRenderPass=function(){return y},this.end=function(A,I){A.toneMapping=_,p=!0;let g=a,S=o;for(let P=0;P<w.length;P++){let H=w[P];if(H.enabled===!1)continue;if(H.render(A,S,g,I),H.needsSwap!==!1)g=S,S=S===o?l:o}if(v!==A.outputColorSpace||M!==A.toneMapping){if(v=A.outputColorSpace,M=A.toneMapping,d.defines={},it.getTransfer(v)===mt)d.defines.SRGB_TRANSFER="";let P=Fm[M];if(P)d.defines[P]="";d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(T),A.render(h,f),T=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();u.dispose(),d.dispose()}}var hu=new It,uu=new Qn(1,1),du=new ra(1),fu=new $r,pu=new nl,mu=new ia,Wh=[],Vh=[],Xh=new Float32Array(16),qh=new Float32Array(9),Yh=new Float32Array(4);function ss(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=Wh[s];if(r===void 0)r=new Float32Array(s),Wh[s]=r;if(t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function Pt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Lt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Sa(e,t){let n=Vh[t];if(n===void 0)n=new Int32Array(t),Vh[t]=n;for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Bm(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function zm(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Pt(n,t))return;e.uniform2fv(this.addr,t),Lt(n,t)}}function Gm(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else if(t.r!==void 0){if(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b}else{if(Pt(n,t))return;e.uniform3fv(this.addr,t),Lt(n,t)}}function Hm(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Pt(n,t))return;e.uniform4fv(this.addr,t),Lt(n,t)}}function km(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Pt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Lt(n,t)}else{if(Pt(n,i))return;Yh.set(i),e.uniformMatrix2fv(this.addr,!1,Yh),Lt(n,i)}}function Wm(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Pt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Lt(n,t)}else{if(Pt(n,i))return;qh.set(i),e.uniformMatrix3fv(this.addr,!1,qh),Lt(n,i)}}function Vm(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Pt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Lt(n,t)}else{if(Pt(n,i))return;Xh.set(i),e.uniformMatrix4fv(this.addr,!1,Xh),Lt(n,i)}}function Xm(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function qm(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Pt(n,t))return;e.uniform2iv(this.addr,t),Lt(n,t)}}function Ym(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(Pt(n,t))return;e.uniform3iv(this.addr,t),Lt(n,t)}}function Zm(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Pt(n,t))return;e.uniform4iv(this.addr,t),Lt(n,t)}}function Jm(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function $m(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Pt(n,t))return;e.uniform2uiv(this.addr,t),Lt(n,t)}}function Km(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(Pt(n,t))return;e.uniform3uiv(this.addr,t),Lt(n,t)}}function Qm(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Pt(n,t))return;e.uniform4uiv(this.addr,t),Lt(n,t)}}function Ma(e){if(e.version===0)e.compareFunction=Ko,e.needsUpdate=!0;return e}function jm(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===e.SAMPLER_2D_SHADOW)r=Ma(uu);else r=hu;n.setTexture2D(t||r,s)}function eg(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(t||pu,s)}function tg(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===e.SAMPLER_CUBE_SHADOW)r=Ma(du);else r=mu;n.setTextureCube(t||r,s)}function ng(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(t||fu,s)}function ig(e){switch(e){case 5126:return Bm;case 35664:return zm;case 35665:return Gm;case 35666:return Hm;case 35674:return km;case 35675:return Wm;case 35676:return Vm;case 5124:case 35670:return Xm;case 35667:case 35671:return qm;case 35668:case 35672:return Ym;case 35669:case 35673:return Zm;case 5125:return Jm;case 36294:return $m;case 36295:return Km;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(e,t){e.uniform1fv(this.addr,t)}function rg(e,t){let n=ss(t,this.size,2);e.uniform2fv(this.addr,n)}function ag(e,t){let n=ss(t,this.size,3);e.uniform3fv(this.addr,n)}function og(e,t){let n=ss(t,this.size,4);e.uniform4fv(this.addr,n)}function lg(e,t){let n=ss(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function cg(e,t){let n=ss(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function hg(e,t){let n=ss(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ug(e,t){e.uniform1iv(this.addr,t)}function dg(e,t){e.uniform2iv(this.addr,t)}function fg(e,t){e.uniform3iv(this.addr,t)}function pg(e,t){e.uniform4iv(this.addr,t)}function mg(e,t){e.uniform1uiv(this.addr,t)}function gg(e,t){e.uniform2uiv(this.addr,t)}function _g(e,t){e.uniform3uiv(this.addr,t)}function xg(e,t){e.uniform4uiv(this.addr,t)}function vg(e,t,n){let i=this.cache,s=t.length,r=Sa(n,s);if(!Pt(i,r))e.uniform1iv(this.addr,r),Lt(i,r);let a;if(this.type===e.SAMPLER_2D_SHADOW)a=Ma(uu);else a=hu;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||a,r[o])}function yg(e,t,n){let i=this.cache,s=t.length,r=Sa(n,s);if(!Pt(i,r))e.uniform1iv(this.addr,r),Lt(i,r);for(let a=0;a!==s;++a)n.setTexture3D(t[a]||pu,r[a])}function Sg(e,t,n){let i=this.cache,s=t.length,r=Sa(n,s);if(!Pt(i,r))e.uniform1iv(this.addr,r),Lt(i,r);let a;if(this.type===e.SAMPLER_CUBE_SHADOW)a=Ma(du);else a=mu;for(let o=0;o!==s;++o)n.setTextureCube(t[o]||a,r[o])}function Mg(e,t,n){let i=this.cache,s=t.length,r=Sa(n,s);if(!Pt(i,r))e.uniform1iv(this.addr,r),Lt(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||fu,r[a])}function bg(e){switch(e){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Mg}}class gu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ig(t.type)}}class _u{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bg(t.type)}}class xu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(e,t[a.id],n)}}}var Il=/(\w+)(\])?(\[|\.)?/g;function Zh(e,t){e.seq.push(t),e.map[t.id]=t}function Eg(e,t,n){let i=e.name,s=i.length;Il.lastIndex=0;while(!0){let r=Il.exec(i),a=Il.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Zh(n,c===void 0?new gu(o,e,t):new _u(o,e,t));break}else{let d=n.map[o];if(d===void 0)d=new xu(o),Zh(n,d);n=d}}}class js{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Eg(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(e,t,n,i){let s=this.map[t];if(s!==void 0)s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];if(i!==void 0)this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let a=t[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(e,o.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];if(r.id in t)n.push(r)}return n}}function Jh(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var Tg=37297,wg=0;function Ag(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var $h=new Je;function Rg(e){it._getMatrix($h,it.workingColorSpace,e);let t=`mat3( ${$h.elements.map((n)=>n.toFixed(4))} )`;switch(it.getTransfer(e)){case Zo:return[t,"LinearTransferOETF"];case mt:return[t,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Kh(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+Ag(e.getShaderSource(t),o)}else return r}function Cg(e,t){let n=Rg(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ig={[Is]:"Linear",[Ps]:"Reinhard",[Ls]:"Cineon",[Ns]:"ACESFilmic",[Us]:"AgX",[Fs]:"Neutral",[Ds]:"Custom"};function Pg(e,t){let n=Ig[t];if(n===void 0)return We("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var xa=new U;function Lg(){it.getLuminanceCoefficients(xa);let e=xa.x.toFixed(4),t=xa.y.toFixed(4),n=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Ng(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Dg(e){let t=[];for(let n in e){let i=e[n];if(i===!1)continue;t.push("#define "+n+" "+i)}return t.join(`
`)}function Ug(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;if(r.type===e.FLOAT_MAT2)o=2;if(r.type===e.FLOAT_MAT3)o=3;if(r.type===e.FLOAT_MAT4)o=4;n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Qs(e){return e!==""}function Qh(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function jh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(e){return e.replace(Fg,Og)}function Og(e,t){let n=je[t];if(n===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ll(n)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(e){return e.replace(Bg,zg)}function zg(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;if(e.precision==="highp")t+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")t+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")t+=`
#define LOW_PRECISION`;return t}var Gg={[Rs]:"SHADOWMAP_TYPE_PCF",[Zi]:"SHADOWMAP_TYPE_VSM"};function Hg(e){return Gg[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kg={[Ki]:"ENVMAP_MODE_REFRACTION"};function Wg(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return kg[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vg={[nh]:"ENVMAP_BLENDING_MULTIPLY",[ih]:"ENVMAP_BLENDING_MIX",[sh]:"ENVMAP_BLENDING_ADD"};function Xg(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return Vg[e.combine]||"ENVMAP_BLENDING_NONE"}function qg(e,t,n,i){let s=e.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=Hg(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Wg(n),d=Xg(n),h=Ng(n),f=Dg(r),v=s.createProgram(),M,p,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Qs).join(`
`),M.length>0)M+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Qs).join(`
`),p.length>0)p+=`
`}else M=[tu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[tu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_n?"#define TONE_MAPPING":"",n.toneMapping!==_n?je.tonemapping_pars_fragment:"",n.toneMapping!==_n?Pg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Cg("linearToOutputTexel",n.outputColorSpace),Lg(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qs).join(`
`);if(a=Ll(a),a=Qh(a,n),a=jh(a,n),o=Ll(o),o=Qh(o,n),o=jh(o,n),a=eu(a),o=eu(o),n.isRawShaderMaterial!==!0)_=`#version 300 es
`,M=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",n.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let T=_+M+a,w=_+p+o,y=Jh(s,s.VERTEX_SHADER,T),A=Jh(s,s.FRAGMENT_SHADER,w);if(s.attachShader(v,y),s.attachShader(v,A),n.index0AttributeName!==void 0)s.bindAttribLocation(v,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(v,0,"position");s.linkProgram(v);function I(H){if(e.debug.checkShaderErrors){let L=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(y)||"",J=s.getShaderInfoLog(A)||"",R=L.trim(),q=G.trim(),K=J.trim(),k=!0,pe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(s,v,y,A);else{let V=Kh(s,y,"vertex"),Z=Kh(s,A,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+R+`
`+V+`
`+Z)}else if(R!=="")We("WebGLProgram: Program Info Log:",R);else if(q===""||K==="")pe=!1;if(pe)H.diagnostics={runnable:k,programLog:R,vertexShader:{log:q,prefix:M},fragmentShader:{log:K,prefix:p}}}s.deleteShader(y),s.deleteShader(A),g=new js(s,v),S=Ug(s,v)}let g;this.getUniforms=function(){if(g===void 0)I(this);return g};let S;this.getAttributes=function(){if(S===void 0)I(this);return S};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(P===!1)P=s.getProgramParameter(v,Tg);return P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=A,this}var Yg=0;class vu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);if(i.has(t)===!1)i.add(t),t.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let n of t)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);if(n===void 0)n=new Set,t.set(e,n);return n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);if(n===void 0)n=new yu(e),t.set(e,n);return n}}class yu{constructor(e){this.id=Yg++,this.code=e,this.usedTimes=0}}function Zg(e){return e===li||e===Yr||e===Zr}function Jg(e,t,n,i,s,r){let a=new ks,o=new vu,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function v(g,S,P,H,L,G){let J=H.fog,R=L.geometry,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?H.environment:null,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=t.get(g.envMap||q,K),pe=h[g.type],V=i.precision;if(g.precision!==null){if(V=i.getMaxPrecision(g.precision),V!==g.precision)We("WebGLProgram.getParameters:",g.precision,"not supported, using",V,"instead.")}let Z=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ae=Z!==void 0?Z.length:0,Ae=0;if(R.morphAttributes.position!==void 0)Ae=1;if(R.morphAttributes.normal!==void 0)Ae=2;if(R.morphAttributes.color!==void 0)Ae=3;let Q,ce,Ie,Fe;if(pe){let Me=yn[pe];Q=Me.vertexShader,ce=Me.fragmentShader}else{Q=g.vertexShader,ce=g.fragmentShader;let Me=o.getVertexShaderStage(g),ht=o.getFragmentShaderStage(g);o.update(g,Me,ht),Ie=Me.id,Fe=ht.id}let Oe=e.getRenderTarget(),be=e.state.buffers.depth.getReversed(),tt=L.isInstancedMesh===!0,$e=L.isBatchedMesh===!0,He=!!g.map,st=!!g.matcap,te=!!k,me=te&&k.isPMREMTexture===!0,ve=!!g.aoMap,Ce=!!g.lightMap,Re=!!g.bumpMap&&g.wireframe===!1,ze=!!g.normalMap,De=!!g.displacementMap,Ke=!!g.emissiveMap,Qe=!!g.metalnessMap,at=!!g.roughnessMap,N=g.anisotropy>0,xt=g.clearcoat>0,Ye=g.diffuseRoughness>0,vt=g.dispersion>0,Se=g.retroreflectivity>0,lt=g.iridescence>0,Ge=g.sheen>0,Ve=g.transmission>0,_t=N&&!!g.anisotropyMap,b=xt&&!!g.clearcoatMap,x=xt&&!!g.clearcoatNormalMap,z=xt&&!!g.clearcoatRoughnessMap,se=Ye&&!!g.diffuseRoughnessMap,ne=lt&&!!g.iridescenceMap,_e=lt&&!!g.iridescenceThicknessMap,ye=Ge&&!!g.sheenColorMap,W=Ge&&!!g.sheenRoughnessMap,ee=!!g.specularMap,xe=!!g.specularColorMap,C=!!g.specularIntensityMap,Y=Ve&&!!g.transmissionMap,X=Ve&&!!g.thicknessMap,de=!!g.gradientMap,ge=!!g.alphaMap,oe=g.alphaTest>0,Ue=!!g.alphaHash,Ne=!!g.extensions,Te=_n;if(g.toneMapped){if(Oe===null||Oe.isXRRenderTarget===!0)Te=e.toneMapping}let Be=me?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Ze={shaderID:pe,shaderType:g.type,shaderName:g.name,vertexShader:Q,fragmentShader:ce,defines:g.defines,customVertexShaderID:Ie,customFragmentShaderID:Fe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:V,batching:$e,batchingColor:$e&&L._colorsTexture!==null,instancing:tt,instancingColor:tt&&L.instanceColor!==null,instancingMorph:tt&&L.morphTexture!==null,outputColorSpace:Oe===null?e.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:He,matcap:st,envMap:te,envMapMode:te&&k.mapping,envMapPMREM:me,envMapMaxLod:me?Be.length-1:null,envMapSize:me?Be[0].width:null,aoMap:ve,lightMap:Ce,bumpMap:Re,normalMap:ze,displacementMap:De,emissiveMap:Ke,normalMapObjectSpace:ze&&g.normalMapType===mh,normalMapTangentSpace:ze&&g.normalMapType===qo,packedNormalMap:ze&&g.normalMapType===qo&&Zg(g.normalMap.format),metalnessMap:Qe,roughnessMap:at,anisotropy:N,anisotropyMap:_t,clearcoat:xt,clearcoatMap:b,clearcoatNormalMap:x,clearcoatRoughnessMap:z,diffuseRoughness:Ye,diffuseRoughnessMap:se,dispersion:vt,retroreflection:Se,iridescence:lt,iridescenceMap:ne,iridescenceThicknessMap:_e,sheen:Ge,sheenColorMap:ye,sheenRoughnessMap:W,specularMap:ee,specularColorMap:xe,specularIntensityMap:C,transmission:Ve,transmissionMap:Y,thicknessMap:X,gradientMap:de,opaque:g.transparent===!1&&g.blending===Cs&&g.alphaToCoverage===!1,alphaMap:ge,alphaTest:oe,alphaHash:Ue,combine:g.combine,mapUv:He&&f(g.map.channel),aoMapUv:ve&&f(g.aoMap.channel),lightMapUv:Ce&&f(g.lightMap.channel),bumpMapUv:Re&&f(g.bumpMap.channel),normalMapUv:ze&&f(g.normalMap.channel),displacementMapUv:De&&f(g.displacementMap.channel),emissiveMapUv:Ke&&f(g.emissiveMap.channel),metalnessMapUv:Qe&&f(g.metalnessMap.channel),roughnessMapUv:at&&f(g.roughnessMap.channel),anisotropyMapUv:_t&&f(g.anisotropyMap.channel),clearcoatMapUv:b&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:W&&f(g.sheenRoughnessMap.channel),specularMapUv:ee&&f(g.specularMap.channel),specularColorMapUv:xe&&f(g.specularColorMap.channel),specularIntensityMapUv:C&&f(g.specularIntensityMap.channel),transmissionMapUv:Y&&f(g.transmissionMap.channel),thicknessMapUv:X&&f(g.thicknessMap.channel),alphaMapUv:ge&&f(g.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(ze||N),vertexNormals:!!R.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(He||ge),fog:!!J,useFog:g.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||R.attributes.normal===void 0&&ze===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ae,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:G.filter((Me)=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:Te,decodeVideoTexture:He&&g.map.isVideoTexture===!0&&it.getTransfer(g.map.colorSpace)===mt,decodeVideoTextureEmissive:Ke&&g.emissiveMap.isVideoTexture===!0&&it.getTransfer(g.emissiveMap.colorSpace)===mt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Zt,flipSided:g.side===kt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ne&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&g.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function M(g){let S=[];if(g.shaderID)S.push(g.shaderID);else S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let P in g.defines)S.push(P),S.push(g.defines[P]);if(g.isRawShaderMaterial===!1)p(S,g),_(S,g),S.push(e.outputColorSpace);return S.push(g.customProgramCacheKey),S.join()}function p(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function _(g,S){if(a.disableAll(),S.instancing)a.enable(0);if(S.instancingColor)a.enable(1);if(S.instancingMorph)a.enable(2);if(S.matcap)a.enable(3);if(S.envMap)a.enable(4);if(S.normalMapObjectSpace)a.enable(5);if(S.normalMapTangentSpace)a.enable(6);if(S.clearcoat)a.enable(7);if(S.iridescence)a.enable(8);if(S.alphaTest)a.enable(9);if(S.vertexColors)a.enable(10);if(S.vertexAlphas)a.enable(11);if(S.vertexUv1s)a.enable(12);if(S.vertexUv2s)a.enable(13);if(S.vertexUv3s)a.enable(14);if(S.vertexTangents)a.enable(15);if(S.anisotropy)a.enable(16);if(S.alphaHash)a.enable(17);if(S.batching)a.enable(18);if(S.dispersion)a.enable(19);if(S.retroreflection)a.enable(24);if(S.diffuseRoughness)a.enable(25);if(S.batchingColor)a.enable(20);if(S.gradientMap)a.enable(21);if(S.packedNormalMap)a.enable(22);if(S.vertexNormals)a.enable(23);if(g.push(a.mask),a.disableAll(),S.fog)a.enable(0);if(S.useFog)a.enable(1);if(S.flatShading)a.enable(2);if(S.logarithmicDepthBuffer)a.enable(3);if(S.reversedDepthBuffer)a.enable(4);if(S.skinning)a.enable(5);if(S.morphTargets)a.enable(6);if(S.morphNormals)a.enable(7);if(S.morphColors)a.enable(8);if(S.premultipliedAlpha)a.enable(9);if(S.shadowMapEnabled)a.enable(10);if(S.doubleSided)a.enable(11);if(S.flipSided)a.enable(12);if(S.useDepthPacking)a.enable(13);if(S.dithering)a.enable(14);if(S.transmission)a.enable(15);if(S.sheen)a.enable(16);if(S.opaque)a.enable(17);if(S.pointsUvs)a.enable(18);if(S.decodeVideoTexture)a.enable(19);if(S.decodeVideoTextureEmissive)a.enable(20);if(S.alphaToCoverage)a.enable(21);if(S.numLightProbeGrids>0)a.enable(22);if(S.hasPositionAttribute)a.enable(23);g.push(a.mask)}function T(g){let S=h[g.type],P;if(S){let H=yn[S];P=Un.clone(H.uniforms)}else P=g.uniforms;return P}function w(g,S){let P=u.get(S);if(P!==void 0)++P.usedTimes;else P=new qg(e,S,g,s),c.push(P),u.set(S,P);return P}function y(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function I(){o.dispose()}return{getParameters:v,getProgramCacheKey:M,getUniforms:T,acquireProgram:w,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:I}}function $g(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);if(o===void 0)o={},e.set(a,o);return o}function i(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function Kg(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function nu(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function iu(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(h){let f=0;if(h.isInstancedMesh)f+=2;if(h.isSkinnedMesh)f+=1;return f}function o(h,f,v,M,p,_){let T=e[t];if(T===void 0)T={id:h.id,object:h,geometry:f,material:v,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:_},e[t]=T;else T.id=h.id,T.object=h,T.geometry=f,T.material=v,T.materialVariant=a(h),T.groupOrder=M,T.renderOrder=h.renderOrder,T.z=p,T.group=_;return t++,T}function l(h,f,v,M,p,_,T){if(T.reversedDepth===!0)p=-p;let w=o(h,f,v,M,p,_);if(v.transmission>0)i.push(w);else if(v.transparent===!0)s.push(w);else n.push(w)}function c(h,f,v,M,p,_){let T=o(h,f,v,M,p,_);if(v.transmission>0)i.unshift(T);else if(v.transparent===!0)s.unshift(T);else n.unshift(T)}function u(h,f){if(n.length>1)n.sort(h||Kg);if(i.length>1)i.sort(f||nu);if(s.length>1)s.sort(f||nu)}function d(){for(let h=t,f=e.length;h<f;h++){let v=e[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Qg(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;if(r===void 0)a=new iu,e.set(i,[a]);else if(s>=r.length)a=new iu,r.push(a);else a=r[s];return a}function n(){e=new WeakMap}return{get:t,dispose:n}}function jg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new U,color:new Xe};break;case"SpotLight":n={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=n,n}}}function e0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=n,n}}}var t0=0;function n0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function i0(e){let t=new jg,n=e0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new gt,a=new gt;function o(c){let u=0,d=0,h=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let f=0,v=0,M=0,p=0,_=0,T=0,w=0,y=0,A=0,I=0,g=0,S=0,P=0,H=0;c.sort(n0);for(let G=0,J=c.length;G<J;G++){let R=c[G],{color:q,intensity:K,distance:k}=R,pe=null;if(R.shadow&&R.shadow.map)if(R.shadow.map.texture.format===li)pe=R.shadow.map.texture;else pe=R.shadow.map.depthTexture||R.shadow.map.texture;if(R.isAmbientLight)u+=q.r*K,d+=q.g*K,h+=q.b*K;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],K);H++}else if(R.isSunLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,ae=n.get(R);ae.shadowIntensity=Z.intensity,ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[v]=ae,i.sunShadowMap[v]=pe;let Ae=Z.getViewportCount();for(let Q=0;Q<Ae;Q++)i.sunShadowMatrix[M+Q]=Z.getMatrix(Q),i.sunShadowCascade[M+Q]=Z._cascadeData[Q];M+=Ae,v++}i.sun[f]=V,f++}else if(R.isDirectionalLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,ae=n.get(R);ae.shadowIntensity=Z.intensity,ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,i.directionalShadow[p]=ae,i.directionalShadowMap[p]=pe,i.directionalShadowMatrix[p]=R.shadow.matrix,A++}i.directional[p]=V,p++}else if(R.isSpotLight){let V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(q).multiplyScalar(K),V.distance=k,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[T]=V;let Z=R.shadow;if(R.map){if(i.spotLightMap[S]=R.map,S++,Z.updateMatrices(R),R.castShadow)P++}if(i.spotLightMatrix[T]=Z.matrix,R.castShadow){let ae=n.get(R);ae.shadowIntensity=Z.intensity,ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,i.spotShadow[T]=ae,i.spotShadowMap[T]=pe,g++}T++}else if(R.isRectAreaLight){let V=t.get(R);V.color.copy(q).multiplyScalar(K),V.halfWidth.set(R.width*0.5,0,0),V.halfHeight.set(0,R.height*0.5,0),i.rectArea[w]=V,w++}else if(R.isPointLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let Z=R.shadow,ae=n.get(R);ae.shadowIntensity=Z.intensity,ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,ae.shadowCameraNear=Z.camera.near,ae.shadowCameraFar=Z.camera.far,i.pointShadow[_]=ae,i.pointShadowMap[_]=pe,i.pointShadowMatrix[_]=R.shadow.matrix,I++}i.point[_]=V,_++}else if(R.isHemisphereLight){let V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(K),V.groundColor.copy(R.groundColor).multiplyScalar(K),i.hemi[y]=V,y++}}if(w>0)if(e.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2;else i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let L=i.hash;if(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==_||L.spotLength!==T||L.rectAreaLength!==w||L.hemiLength!==y||L.numSunShadows!==v||L.numDirectionalShadows!==A||L.numPointShadows!==I||L.numSpotShadows!==g||L.numSpotMaps!==S||L.numLightProbes!==H)i.sun.length=f,i.directional.length=p,i.spot.length=T,i.rectArea.length=w,i.point.length=_,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=I,i.pointShadowMap.length=I,i.pointShadowMatrix.length=I,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=H,L.sunLength=f,L.directionalLength=p,L.pointLength=_,L.spotLength=T,L.rectAreaLength=w,L.hemiLength=y,L.numSunShadows=v,L.numDirectionalShadows=A,L.numPointShadows=I,L.numSpotShadows=g,L.numSpotMaps=S,L.numLightProbes=H,i.version=t0++}function l(c,u){let d=0,h=0,f=0,v=0,M=0,p=0,_=u.matrixWorldInverse;for(let T=0,w=c.length;T<w;T++){let y=c[T];if(y.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(_),d++}else if(y.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),h++}else if(y.isSpotLight){let A=i.spot[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),v++}else if(y.isRectAreaLight){let A=i.rectArea[M];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(_),a.identity(),r.copy(y.matrixWorld),r.premultiply(_),a.extractRotation(r),A.halfWidth.set(y.width*0.5,0,0),A.halfHeight.set(0,y.height*0.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(_),f++}else if(y.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(_),p++}}}return{setup:o,setupView:l,state:i}}function su(e){let t=new i0(e),n=[],i=[],s=[];function r(d){u.camera=d,n.length=0,i.length=0,s.length=0}function a(d){if(d.isLightProbeGrid)s.push(d);else n.push(d)}function o(d){i.push(d)}function l(){t.setup(n),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){t.setupView(n,d)}let u={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function s0(e){let t=new WeakMap;function n(s,r=0){let a=t.get(s),o;if(a===void 0)o=new su(e),t.set(s,[o]);else if(r>=a.length)o=new su(e),a.push(o);else o=a[r];return o}function i(){t=new WeakMap}return{get:n,dispose:i}}var r0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,o0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],l0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],ru=new gt,Ks=new U,Pl=new U;function c0(e,t,n){let i=new qi,s=new ue,r=new ue,a=new Et,o=new pl,l=new ml,c={},u=n.maxTextureSize,d={[Ji]:kt,[kt]:Ji,[Zt]:Zt},h=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:r0,fragmentShader:a0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let v=new wt;v.setAttribute("position",new Yt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new dt(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let _=this.type;this.render=function(I,g,S){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(I.length===0)return;if(this.type===Rc)We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs;let P=e.getRenderTarget(),H=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),G=e.state;if(G.setBlending(Rn),G.buffers.depth.getReversed()===!0)G.buffers.color.setClear(0,0,0,0);else G.buffers.color.setClear(1,1,1,1);G.buffers.depth.setTest(!0),G.setScissorTest(!1);let J=_!==this.type;if(J)g.traverse(function(R){if(R.material)if(Array.isArray(R.material))R.material.forEach((q)=>q.needsUpdate=!0);else R.material.needsUpdate=!0});for(let R=0,q=I.length;R<q;R++){let K=I[R],k=K.shadow;if(k===void 0){We("WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let pe=k.getFrameExtents();if(s.multiply(pe),r.copy(k.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,k.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,k.mapSize.y=r.y}let V=e.state.buffers.depth.getReversed();if(k.camera._reversedDepth=V,k.map===null||J===!0){if(k.map!==null){if(k.map.depthTexture!==null)k.map.depthTexture.dispose(),k.map.depthTexture=null;k.map.dispose()}if(this.type===Zi){if(K.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ft(s.x,s.y,{format:li,type:Wt,minFilter:tn,magFilter:tn,generateMipmaps:!1}),k.map.texture.name=K.name+".shadowMap",k.map.depthTexture=new Qn(s.x,s.y,Cn),k.map.depthTexture.name=K.name+".shadowMapDepth",k.map.depthTexture.format=Qi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qn,k.map.depthTexture.magFilter=qn}else{if(K.isPointLight)k.map=new ya(s.x),k.map.depthTexture=new ra(s.x,Zn);else k.map=new Ft(s.x,s.y),k.map.depthTexture=new Qn(s.x,s.y,Zn);if(k.map.depthTexture.name=K.name+".shadowMap",k.map.depthTexture.format=Qi,this.type===Rs)k.map.depthTexture.compareFunction=V?$o:Jo,k.map.depthTexture.minFilter=tn,k.map.depthTexture.magFilter=tn;else k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qn,k.map.depthTexture.magFilter=qn}k.camera.updateProjectionMatrix()}if(k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y))k.map.setSize(s.x,s.y);let Z=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();if(K.isPointLight!==!0)k.updateMatrices(K,S);let ae=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:S.layers;for(let Ae=0;Ae<Z;Ae++){let Q=k.getCamera(Ae);if(K.isPointLight){let{camera:ce,matrix:Ie}=k,Fe=K.distance||ce.far;if(Fe!==ce.far)ce.far=Fe,ce.updateProjectionMatrix();Ks.setFromMatrixPosition(K.matrixWorld),ce.position.copy(Ks),Pl.copy(ce.position),Pl.add(o0[Ae]),ce.up.copy(l0[Ae]),ce.lookAt(Pl),ce.updateMatrixWorld(),Ie.makeTranslation(-Ks.x,-Ks.y,-Ks.z),ru.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ru,ce.coordinateSystem,ce.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)e.setRenderTarget(k.map,Ae),e.clear();else{if(Ae===0)e.setRenderTarget(k.map),e.clear();let ce=k.getViewport(Ae);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),G.viewport(a)}i=k.getFrustum(Ae),y(g,S,Q,K,ae,this.type)}if(k.isPointLightShadow!==!0&&this.type===Zi)T(k,S);k.needsUpdate=!1}_=this.type,p.needsUpdate=!1,e.setRenderTarget(P,H,L)};function T(I,g){let S=t.update(M);if(h.defines.VSM_SAMPLES!==I.blurSamples)h.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new Ft(s.x,s.y,{format:li,type:Wt});else if(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)I.mapPass.setSize(I.map.width,I.map.height);h.uniforms.shadow_pass.value=I.map.depthTexture,h.uniforms.resolution.value.set(I.map.width,I.map.height),h.uniforms.radius.value=I.radius,e.setRenderTarget(I.mapPass),e.clear(),e.renderBufferDirect(g,null,S,h,M,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value.set(I.map.width,I.map.height),f.uniforms.radius.value=I.radius,e.setRenderTarget(I.map),e.clear(),e.renderBufferDirect(g,null,S,f,M,null)}function w(I,g,S,P){let H=null,L=S.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(L!==void 0)H=L;else if(H=S.isPointLight===!0?l:o,e.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let G=H.uuid,J=g.uuid,R=c[G];if(R===void 0)R={},c[G]=R;let q=R[J];if(q===void 0)q=H.clone(),R[J]=q,g.addEventListener("dispose",A);H=q}if(H.visible=g.visible,H.wireframe=g.wireframe,P===Zi)H.side=g.shadowSide!==null?g.shadowSide:g.side;else H.side=g.shadowSide!==null?g.shadowSide:d[g.side];if(H.alphaMap=g.alphaMap,H.alphaTest=g.alphaToCoverage===!0?0.5:g.alphaTest,H.map=g.map,H.clipShadows=g.clipShadows,H.clippingPlanes=g.clippingPlanes,H.clipIntersection=g.clipIntersection,H.displacementMap=g.displacementMap,H.displacementScale=g.displacementScale,H.displacementBias=g.displacementBias,H.wireframeLinewidth=g.wireframeLinewidth,H.linewidth=g.linewidth,S.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let G=e.properties.get(H);G.light=S}return H}function y(I,g,S,P,H,L){if(I.visible===!1)return;if(I.layers.test(H)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&L===Zi)&&(!I.frustumCulled||I.intersectsFrustum(i))){I.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,I.matrixWorld);let R=t.update(I),q=I.material;if(Array.isArray(q)){let K=R.groups;for(let k=0,pe=K.length;k<pe;k++){let V=K[k],Z=q[V.materialIndex];if(Z&&Z.visible){let ae=w(I,Z,P,L);I.onBeforeShadow(e,I,g,S,R,ae,V),e.renderBufferDirect(S,null,R,ae,I,V),I.onAfterShadow(e,I,g,S,R,ae,V)}}}else if(q.visible){let K=w(I,q,P,L);I.onBeforeShadow(e,I,g,S,R,K,null),e.renderBufferDirect(S,null,R,K,I,null),I.onAfterShadow(e,I,g,S,R,K,null)}}}let J=I.children;for(let R=0,q=J.length;R<q;R++)y(J[R],g,S,P,H,L)}function A(I){I.target.removeEventListener("dispose",A);for(let S in c){let P=c[S],H=I.target.uuid;if(H in P)P[H].dispose(),delete P[H]}}}function h0(e,t){function n(){let C=!1,Y=new Et,X=null,de=new Et(0,0,0,0);return{setMask:function(ge){if(X!==ge&&!C)e.colorMask(ge,ge,ge,ge),X=ge},setLocked:function(ge){C=ge},setClear:function(ge,oe,Ue,Ne,Te){if(Te===!0)ge*=Ne,oe*=Ne,Ue*=Ne;if(Y.set(ge,oe,Ue,Ne),de.equals(Y)===!1)e.clearColor(ge,oe,Ue,Ne),de.copy(Y)},reset:function(){C=!1,X=null,de.set(-1,0,0,0)}}}function i(){let C=!1,Y=!1,X=null,de=null,ge=null;return{setReversed:function(oe){if(Y!==oe){let Ue=t.get("EXT_clip_control");if(oe)Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT);else Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);Y=oe;let Ne=ge;ge=null,this.setClear(Ne)}},getReversed:function(){return Y},setTest:function(oe){if(oe)be(e.DEPTH_TEST);else tt(e.DEPTH_TEST)},setMask:function(oe){if(X!==oe&&!C)e.depthMask(oe),X=oe},setFunc:function(oe){if(Y)oe=Eh[oe];if(de!==oe){switch(oe){case Jc:e.depthFunc(e.NEVER);break;case $c:e.depthFunc(e.ALWAYS);break;case Kc:e.depthFunc(e.LESS);break;case lo:e.depthFunc(e.LEQUAL);break;case Qc:e.depthFunc(e.EQUAL);break;case jc:e.depthFunc(e.GEQUAL);break;case eh:e.depthFunc(e.GREATER);break;case th:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}de=oe}},setLocked:function(oe){C=oe},setClear:function(oe){if(ge!==oe){if(ge=oe,Y)oe=1-oe;e.clearDepth(oe)}},reset:function(){C=!1,X=null,de=null,ge=null,Y=!1}}}function s(){let C=!1,Y=null,X=null,de=null,ge=null,oe=null,Ue=null,Ne=null,Te=null;return{setTest:function(Be){if(!C)if(Be)be(e.STENCIL_TEST);else tt(e.STENCIL_TEST)},setMask:function(Be){if(Y!==Be&&!C)e.stencilMask(Be),Y=Be},setFunc:function(Be,Ze,Me){if(X!==Be||de!==Ze||ge!==Me)e.stencilFunc(Be,Ze,Me),X=Be,de=Ze,ge=Me},setOp:function(Be,Ze,Me){if(oe!==Be||Ue!==Ze||Ne!==Me)e.stencilOp(Be,Ze,Me),oe=Be,Ue=Ze,Ne=Me},setLocked:function(Be){C=Be},setClear:function(Be){if(Te!==Be)e.clearStencil(Be),Te=Be},reset:function(){C=!1,Y=null,X=null,de=null,ge=null,oe=null,Ue=null,Ne=null,Te=null}}}let r=new n,a=new i,o=new s,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,v=[],M=null,p=!1,_=null,T=null,w=null,y=null,A=null,I=null,g=null,S=new Xe(0,0,0),P=0,H=!1,L=null,G=null,J=null,R=null,q=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,pe=0,V=e.getParameter(e.VERSION);if(V.indexOf("WebGL")!==-1)pe=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=pe>=1;else if(V.indexOf("OpenGL ES")!==-1)pe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=pe>=2;let Z=null,ae={},Ae=e.getParameter(e.SCISSOR_BOX),Q=e.getParameter(e.VIEWPORT),ce=new Et().fromArray(Ae),Ie=new Et().fromArray(Q);function Fe(C,Y,X,de){let ge=new Uint8Array(4),oe=e.createTexture();e.bindTexture(C,oe),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ue=0;Ue<X;Ue++)if(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)e.texImage3D(Y,0,e.RGBA,1,1,de,0,e.RGBA,e.UNSIGNED_BYTE,ge);else e.texImage2D(Y+Ue,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ge);return oe}let Oe={};Oe[e.TEXTURE_2D]=Fe(e.TEXTURE_2D,e.TEXTURE_2D,1),Oe[e.TEXTURE_CUBE_MAP]=Fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[e.TEXTURE_2D_ARRAY]=Fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Oe[e.TEXTURE_3D]=Fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),be(e.DEPTH_TEST),a.setFunc(lo),Re(!1),ze(ro),be(e.CULL_FACE),ve(Rn);function be(C){if(u[C]!==!0)e.enable(C),u[C]=!0}function tt(C){if(u[C]!==!1)e.disable(C),u[C]=!1}function $e(C,Y){if(h[C]!==Y){if(e.bindFramebuffer(C,Y),h[C]=Y,C===e.DRAW_FRAMEBUFFER)h[e.FRAMEBUFFER]=Y;if(C===e.FRAMEBUFFER)h[e.DRAW_FRAMEBUFFER]=Y;return!0}return!1}function He(C,Y){let X=v,de=!1;if(C){if(X=f.get(Y),X===void 0)X=[],f.set(Y,X);let ge=C.textures;if(X.length!==ge.length||X[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,Ue=ge.length;oe<Ue;oe++)X[oe]=e.COLOR_ATTACHMENT0+oe;X.length=ge.length,de=!0}}else if(X[0]!==e.BACK)X[0]=e.BACK,de=!0;if(de)e.drawBuffers(X)}function st(C){if(M!==C)return e.useProgram(C),M=C,!0;return!1}let te={[$i]:e.FUNC_ADD,[Ic]:e.FUNC_SUBTRACT,[Pc]:e.FUNC_REVERSE_SUBTRACT};te[Lc]=e.MIN,te[Nc]=e.MAX;let me={[Dc]:e.ZERO,[Uc]:e.ONE,[Fc]:e.SRC_COLOR,[Bc]:e.SRC_ALPHA,[Vc]:e.SRC_ALPHA_SATURATE,[kc]:e.DST_COLOR,[Gc]:e.DST_ALPHA,[Oc]:e.ONE_MINUS_SRC_COLOR,[zc]:e.ONE_MINUS_SRC_ALPHA,[Wc]:e.ONE_MINUS_DST_COLOR,[Hc]:e.ONE_MINUS_DST_ALPHA,[Xc]:e.CONSTANT_COLOR,[qc]:e.ONE_MINUS_CONSTANT_COLOR,[Yc]:e.CONSTANT_ALPHA,[Zc]:e.ONE_MINUS_CONSTANT_ALPHA};function ve(C,Y,X,de,ge,oe,Ue,Ne,Te,Be){if(C===Rn){if(p===!0)tt(e.BLEND),p=!1;return}if(p===!1)be(e.BLEND),p=!0;if(C!==Cc){if(C!==_||Be!==H){if(T!==$i||A!==$i)e.blendEquation(e.FUNC_ADD),T=$i,A=$i;if(Be)switch(C){case Cs:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case gn:e.blendFunc(e.ONE,e.ONE);break;case ao:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case oo:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:qe("WebGLState: Invalid blending: ",C);break}else switch(C){case Cs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case gn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case ao:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oo:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",C);break}w=null,y=null,I=null,g=null,S.set(0,0,0),P=0,_=C,H=Be}return}if(ge=ge||Y,oe=oe||X,Ue=Ue||de,Y!==T||ge!==A)e.blendEquationSeparate(te[Y],te[ge]),T=Y,A=ge;if(X!==w||de!==y||oe!==I||Ue!==g)e.blendFuncSeparate(me[X],me[de],me[oe],me[Ue]),w=X,y=de,I=oe,g=Ue;if(Ne.equals(S)===!1||Te!==P)e.blendColor(Ne.r,Ne.g,Ne.b,Te),S.copy(Ne),P=Te;_=C,H=!1}function Ce(C,Y){C.side===Zt?tt(e.CULL_FACE):be(e.CULL_FACE);let X=C.side===kt;if(Y)X=!X;Re(X),C.blending===Cs&&C.transparent===!1?ve(Rn):ve(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let de=C.stencilWrite;if(o.setTest(de),de)o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass);Ke(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?be(e.SAMPLE_ALPHA_TO_COVERAGE):tt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Re(C){if(L!==C){if(C)e.frontFace(e.CW);else e.frontFace(e.CCW);L=C}}function ze(C){if(C!==wc){if(be(e.CULL_FACE),C!==G)if(C===ro)e.cullFace(e.BACK);else if(C===Ac)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else tt(e.CULL_FACE);G=C}function De(C){if(C!==J){if(k)e.lineWidth(C);J=C}}function Ke(C,Y,X){if(C){if(be(e.POLYGON_OFFSET_FILL),R!==Y||q!==X){if(R=Y,q=X,a.getReversed())Y=-Y,X=-X;e.polygonOffset(Y,X)}}else tt(e.POLYGON_OFFSET_FILL)}function Qe(C){if(C)be(e.SCISSOR_TEST);else tt(e.SCISSOR_TEST)}function at(C){if(C===void 0)C=e.TEXTURE0+K-1;if(Z!==C)e.activeTexture(C),Z=C}function N(C,Y,X){if(X===void 0)if(Z===null)X=e.TEXTURE0+K-1;else X=Z;let de=ae[X];if(de===void 0)de={type:void 0,texture:void 0},ae[X]=de;if(de.type!==C||de.texture!==Y){if(Z!==X)e.activeTexture(X),Z=X;e.bindTexture(C,Y||Oe[C]),de.type=C,de.texture=Y}}function xt(){let C=ae[Z];if(C!==void 0&&C.type!==void 0)e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0}function Ye(){try{e.compressedTexImage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function vt(){try{e.compressedTexImage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function Se(){try{e.texSubImage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function lt(){try{e.texSubImage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function Ge(){try{e.compressedTexSubImage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function Ve(){try{e.compressedTexSubImage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function _t(){try{e.texStorage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function b(){try{e.texStorage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function x(){try{e.texImage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function z(){try{e.texImage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function se(C){if(d[C]!==void 0)return d[C];else return e.getParameter(C)}function ne(C,Y){if(d[C]!==Y)e.pixelStorei(C,Y),d[C]=Y}function _e(C){if(ce.equals(C)===!1)e.scissor(C.x,C.y,C.z,C.w),ce.copy(C)}function ye(C){if(Ie.equals(C)===!1)e.viewport(C.x,C.y,C.z,C.w),Ie.copy(C)}function W(C,Y){let X=c.get(Y);if(X===void 0)X=new WeakMap,c.set(Y,X);let de=X.get(C);if(de===void 0)de=e.getUniformBlockIndex(Y,C.name),e.uniformBlockBinding(Y,de,de),X.set(C,de)}function ee(C,Y,X){let ge=c.get(Y).get(C);if(l[ge]!==X)e.bindBufferBase(e.UNIFORM_BUFFER,ge,X),l[ge]=X}function xe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},Z=null,ae={},h={},l={},f=new WeakMap,v=[],M=null,p=!1,_=null,T=null,w=null,y=null,A=null,I=null,g=null,S=new Xe(0,0,0),P=0,H=!1,L=null,G=null,J=null,R=null,q=null,ce.set(0,0,e.canvas.width,e.canvas.height),Ie.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:be,disable:tt,bindFramebuffer:$e,drawBuffers:He,useProgram:st,setBlending:ve,setMaterial:Ce,setFlipSided:Re,setCullFace:ze,setLineWidth:De,setPolygonOffset:Ke,setScissorTest:Qe,activeTexture:at,bindTexture:N,unbindTexture:xt,compressedTexImage2D:Ye,compressedTexImage3D:vt,texImage2D:x,texImage3D:z,pixelStorei:ne,getParameter:se,updateUBOMapping:W,uniformBlockBinding:ee,texStorage2D:_t,texStorage3D:b,texSubImage2D:Se,texSubImage3D:lt,compressedTexSubImage2D:Ge,compressedTexSubImage3D:Ve,scissor:_e,viewport:ye,reset:xe}}function u0(e,t,n,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap,d=new Set,h,f=new WeakMap,v=new Set,M=new FinalizationRegistry((b)=>v.delete(b)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function _(b,x){return p?new OffscreenCanvas(b,x):Vi("canvas")}function T(b,x,z){let se=1,ne=_t(b);if(ne.width>z||ne.height>z)se=z/Math.max(ne.width,ne.height);if(se<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let _e=Math.floor(se*ne.width),ye=Math.floor(se*ne.height);if(h===void 0)h=_(_e,ye);let W=x?_(_e,ye):h;return W.width=_e,W.height=ye,W.getContext("2d").drawImage(b,0,0,_e,ye),We("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+_e+"x"+ye+")."),W}else{if("data"in b)We("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+").");return b}return b}function w(b){return b.generateMipmaps}function y(b){e.generateMipmap(b)}function A(b){if(b.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(b.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function I(b,x,z,se,ne,_e=!1){if(b!==null){if(e[b]!==void 0)return e[b];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ye;if(se){if(ye=t.get("EXT_texture_norm16"),!ye)We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let W=x;if(x===e.RED){if(z===e.FLOAT)W=e.R32F;if(z===e.HALF_FLOAT)W=e.R16F;if(z===e.UNSIGNED_BYTE)W=e.R8;if(z===e.UNSIGNED_SHORT&&ye)W=ye.R16_EXT;if(z===e.SHORT&&ye)W=ye.R16_SNORM_EXT}if(x===e.RED_INTEGER){if(z===e.UNSIGNED_BYTE)W=e.R8UI;if(z===e.UNSIGNED_SHORT)W=e.R16UI;if(z===e.UNSIGNED_INT)W=e.R32UI;if(z===e.BYTE)W=e.R8I;if(z===e.SHORT)W=e.R16I;if(z===e.INT)W=e.R32I}if(x===e.RG){if(z===e.FLOAT)W=e.RG32F;if(z===e.HALF_FLOAT)W=e.RG16F;if(z===e.UNSIGNED_BYTE)W=e.RG8;if(z===e.UNSIGNED_SHORT&&ye)W=ye.RG16_EXT;if(z===e.SHORT&&ye)W=ye.RG16_SNORM_EXT}if(x===e.RG_INTEGER){if(z===e.UNSIGNED_BYTE)W=e.RG8UI;if(z===e.UNSIGNED_SHORT)W=e.RG16UI;if(z===e.UNSIGNED_INT)W=e.RG32UI;if(z===e.BYTE)W=e.RG8I;if(z===e.SHORT)W=e.RG16I;if(z===e.INT)W=e.RG32I}if(x===e.RGB_INTEGER){if(z===e.UNSIGNED_BYTE)W=e.RGB8UI;if(z===e.UNSIGNED_SHORT)W=e.RGB16UI;if(z===e.UNSIGNED_INT)W=e.RGB32UI;if(z===e.BYTE)W=e.RGB8I;if(z===e.SHORT)W=e.RGB16I;if(z===e.INT)W=e.RGB32I}if(x===e.RGBA_INTEGER){if(z===e.UNSIGNED_BYTE)W=e.RGBA8UI;if(z===e.UNSIGNED_SHORT)W=e.RGBA16UI;if(z===e.UNSIGNED_INT)W=e.RGBA32UI;if(z===e.BYTE)W=e.RGBA8I;if(z===e.SHORT)W=e.RGBA16I;if(z===e.INT)W=e.RGBA32I}if(x===e.RGB){if(z===e.UNSIGNED_SHORT&&ye)W=ye.RGB16_EXT;if(z===e.SHORT&&ye)W=ye.RGB16_SNORM_EXT;if(z===e.UNSIGNED_INT_5_9_9_9_REV)W=e.RGB9_E5;if(z===e.UNSIGNED_INT_10F_11F_11F_REV)W=e.R11F_G11F_B10F}if(x===e.RGBA){let ee=_e?Zo:it.getTransfer(ne);if(z===e.FLOAT)W=e.RGBA32F;if(z===e.HALF_FLOAT)W=e.RGBA16F;if(z===e.UNSIGNED_BYTE)W=ee===mt?e.SRGB8_ALPHA8:e.RGBA8;if(z===e.UNSIGNED_SHORT&&ye)W=ye.RGBA16_EXT;if(z===e.SHORT&&ye)W=ye.RGBA16_SNORM_EXT;if(z===e.UNSIGNED_SHORT_4_4_4_4)W=e.RGBA4;if(z===e.UNSIGNED_SHORT_5_5_5_1)W=e.RGB5_A1}if(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)t.get("EXT_color_buffer_float");return W}function g(b,x){let z;if(b){if(x===null||x===Zn||x===oi)z=e.DEPTH24_STENCIL8;else if(x===Cn)z=e.DEPTH32F_STENCIL8;else if(x===zs)z=e.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(x===null||x===Zn||x===oi)z=e.DEPTH_COMPONENT24;else if(x===Cn)z=e.DEPTH_COMPONENT32F;else if(x===zs)z=e.DEPTH_COMPONENT16;return z}function S(b,x){if(w(b)===!0||b.isFramebufferTexture&&b.minFilter!==qn&&b.minFilter!==tn)return Math.log2(Math.max(x.width,x.height))+1;else if(b.mipmaps.length>0)return b.mipmaps.length;else if(b.isCompressedTexture&&Array.isArray(b.image))return x.mipmaps.length;else return 1}function P(b){let x=new WeakRef(b);i.get(b).__ref=x,v.add(x),M.register(b,x,x)}function H(b){let x=i.get(b).__ref;if(x===void 0)return;v.delete(x),M.unregister(x)}function L(b){J(b.target)}function G(b){R(b.target)}function J(b){if(b.removeEventListener("dispose",L),H(b),K(b),b.isVideoTexture)u.delete(b);if(b.isHTMLTexture)d.delete(b)}function R(b){b.removeEventListener("dispose",G),H(b),pe(b)}function q(){for(let b of v){let x=b.deref();if(x===void 0)continue;if(x.isRenderTarget===!0)R(x);else J(x)}v.clear(),d.clear()}function K(b){let x=i.get(b);if(x.__webglInit===void 0)return;let z=b.source,se=f.get(z);if(se){let ne=se[x.__cacheKey];if(ne.usedTimes--,ne.usedTimes===0)k(b);if(Object.keys(se).length===0)f.delete(z)}i.remove(b)}function k(b){let x=i.get(b);e.deleteTexture(x.__webglTexture);let z=b.source,se=f.get(z);delete se[x.__cacheKey],a.memory.textures--}function pe(b){let x=i.get(b);if(x.__depthDisposeCallback)x.__depthDisposeCallback();let z=b.depthTexture;if(z&&z.renderTarget===b)J(z);if(b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(x.__webglFramebuffer[ne]))for(let _e=0;_e<x.__webglFramebuffer[ne].length;_e++)e.deleteFramebuffer(x.__webglFramebuffer[ne][_e]);else e.deleteFramebuffer(x.__webglFramebuffer[ne]);if(x.__webglDepthbuffer)e.deleteRenderbuffer(x.__webglDepthbuffer[ne])}else{if(Array.isArray(x.__webglFramebuffer))for(let ne=0;ne<x.__webglFramebuffer.length;ne++)e.deleteFramebuffer(x.__webglFramebuffer[ne]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer)e.deleteRenderbuffer(x.__webglDepthbuffer);if(x.__webglMultisampledFramebuffer)e.deleteFramebuffer(x.__webglMultisampledFramebuffer);if(x.__webglColorRenderbuffer){for(let ne=0;ne<x.__webglColorRenderbuffer.length;ne++)if(x.__webglColorRenderbuffer[ne])e.deleteRenderbuffer(x.__webglColorRenderbuffer[ne])}if(x.__webglDepthRenderbuffer)e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let se=b.textures;for(let ne=0,_e=se.length;ne<_e;ne++){let ye=i.get(se[ne]);if(ye.__webglTexture)e.deleteTexture(ye.__webglTexture),a.memory.textures--;i.remove(se[ne])}i.remove(b)}let V=0;function Z(){V=0}function ae(){return V}function Ae(b){V=b}function Q(){let b=V;if(b>=s.maxTextures)We("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures);return V+=1,b}function ce(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.mipmapsAutoUpdate),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function Ie(b,x){let z=i.get(b);if(b.isVideoTexture)Ge(b);if(b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&z.__version!==b.version){let se=b.image;if(se===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(z,b,x);return}}else if(b.isExternalTexture)z.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+x)}function Fe(b,x){let z=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){Ce(z,b,x);return}else if(b.isExternalTexture)z.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+x)}function Oe(b,x){let z=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){Ce(z,b,x);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+x)}function be(b,x){let z=i.get(b);if(b.version>0&&z.__version!==b.version){Re(z,b,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+x)}let tt={[rh]:e.REPEAT,[Hr]:e.CLAMP_TO_EDGE,[ah]:e.MIRRORED_REPEAT},$e={[qn]:e.NEAREST,[oh]:e.NEAREST_MIPMAP_NEAREST,[Bs]:e.NEAREST_MIPMAP_LINEAR,[tn]:e.LINEAR,[kr]:e.LINEAR_MIPMAP_NEAREST,[Yn]:e.LINEAR_MIPMAP_LINEAR},He={[gh]:e.NEVER,[Ko]:e.ALWAYS,[_h]:e.LESS,[Jo]:e.LEQUAL,[xh]:e.EQUAL,[$o]:e.GEQUAL,[vh]:e.GREATER,[yh]:e.NOTEQUAL};function st(b,x){if(x.type===Cn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===kr||x.magFilter===Bs||x.magFilter===Yn||x.minFilter===tn||x.minFilter===kr||x.minFilter===Bs||x.minFilter===Yn))We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(b,e.TEXTURE_WRAP_S,tt[x.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,tt[x.wrapT]),b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)e.texParameteri(b,e.TEXTURE_WRAP_R,tt[x.wrapR]);if(e.texParameteri(b,e.TEXTURE_MAG_FILTER,$e[x.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,$e[x.minFilter]),x.compareFunction)e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,He[x.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qn)return;if(x.minFilter!==Bs&&x.minFilter!==Yn)return;if(x.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function te(b,x){let z=!1;if(b.__webglInit===void 0)b.__webglInit=!0,x.addEventListener("dispose",L),P(x);let se=x.source,ne=f.get(se);if(ne===void 0)ne={},f.set(se,ne);let _e=ce(x);if(_e!==b.__cacheKey){if(ne[_e]===void 0)ne[_e]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,z=!0;ne[_e].usedTimes++;let ye=ne[b.__cacheKey];if(ye!==void 0){if(ne[b.__cacheKey].usedTimes--,ye.usedTimes===0)k(x)}b.__cacheKey=_e,b.__webglTexture=ne[_e].texture}return z}function me(b,x,z){return Math.floor(Math.floor(b/z)/x)}function ve(b,x,z,se){let _e=b.updateRanges;if(_e.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,z,se,x.data);else{_e.sort((C,Y)=>C.start-Y.start);let ye=0;for(let C=1;C<_e.length;C++){let Y=_e[ye],X=_e[C],de=Y.start+Y.count,ge=me(X.start,x.width,4),oe=me(Y.start,x.width,4);if(X.start<=de+1&&ge===oe&&me(X.start+X.count-1,x.width,4)===ge)Y.count=Math.max(Y.count,X.start+X.count-Y.start);else++ye,_e[ye]=X}_e.length=ye+1;let W=n.getParameter(e.UNPACK_ROW_LENGTH),ee=n.getParameter(e.UNPACK_SKIP_PIXELS),xe=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let C=0,Y=_e.length;C<Y;C++){let X=_e[C],de=Math.floor(X.start/4),ge=Math.ceil(X.count/4),oe=de%x.width,Ue=Math.floor(de/x.width),Ne=ge,Te=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(e.UNPACK_SKIP_ROWS,Ue),n.texSubImage2D(e.TEXTURE_2D,0,oe,Ue,Ne,1,z,se,x.data)}b.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,W),n.pixelStorei(e.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(e.UNPACK_SKIP_ROWS,xe)}}function Ce(b,x,z){let se=e.TEXTURE_2D;if(x.isDataArrayTexture||x.isCompressedArrayTexture)se=e.TEXTURE_2D_ARRAY;if(x.isData3DTexture)se=e.TEXTURE_3D;let ne=te(b,x),_e=x.source;n.bindTexture(se,b.__webglTexture,e.TEXTURE0+z);let ye=i.get(_e);if(_e.version!==ye.__version||ne===!0){if(n.activeTexture(e.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Te=it.getPrimaries(it.workingColorSpace),Be=x.colorSpace===ci?null:it.getPrimaries(x.colorSpace),Ze=x.colorSpace===ci||Te===Be?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze)}n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let ee=T(x.image,!1,s.maxTextureSize);ee=Ve(x,ee);let xe=r.convert(x.format,x.colorSpace),C=r.convert(x.type),Y=I(x.internalFormat,xe,C,x.normalized,x.colorSpace,x.isVideoTexture);st(se,x);let X,de=x.mipmaps,ge=x.isVideoTexture!==!0,oe=ye.__version===void 0||ne===!0,Ue=_e.dataReady,Ne=S(x,ee);if(x.isDepthTexture){if(Y=g(x.format===Jn,x.type),oe)if(ge)n.texStorage2D(e.TEXTURE_2D,1,Y,ee.width,ee.height);else n.texImage2D(e.TEXTURE_2D,0,Y,ee.width,ee.height,0,xe,C,null)}else if(x.isDataTexture)if(de.length>0){if(ge&&oe)n.texStorage2D(e.TEXTURE_2D,Ne,Y,de[0].width,de[0].height);for(let Te=0,Be=de.length;Te<Be;Te++)if(X=de[Te],ge){if(Ue)n.texSubImage2D(e.TEXTURE_2D,Te,0,0,X.width,X.height,xe,C,X.data)}else n.texImage2D(e.TEXTURE_2D,Te,Y,X.width,X.height,0,xe,C,X.data);x.generateMipmaps=!1}else if(ge){if(oe)n.texStorage2D(e.TEXTURE_2D,Ne,Y,ee.width,ee.height);if(Ue)ve(x,ee,xe,C)}else n.texImage2D(e.TEXTURE_2D,0,Y,ee.width,ee.height,0,xe,C,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){if(ge&&oe)n.texStorage3D(e.TEXTURE_2D_ARRAY,Ne,Y,de[0].width,de[0].height,ee.depth);for(let Te=0,Be=de.length;Te<Be;Te++)if(X=de[Te],x.format!==In)if(xe!==null)if(ge){if(Ue)if(x.layerUpdates.size>0){let Ze=Cl(X.width,X.height,x.format,x.type);for(let Me of x.layerUpdates){let ht=X.data.subarray(Me*Ze/X.data.BYTES_PER_ELEMENT,(Me+1)*Ze/X.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Te,0,0,Me,X.width,X.height,1,xe,ht)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Te,0,0,0,X.width,X.height,ee.depth,xe,X.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Te,Y,X.width,X.height,ee.depth,0,X.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ge){if(Ue)n.texSubImage3D(e.TEXTURE_2D_ARRAY,Te,0,0,0,X.width,X.height,ee.depth,xe,C,X.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,Te,Y,X.width,X.height,ee.depth,0,xe,C,X.data);if(x.layerUpdates.size>0)x.clearLayerUpdates()}else{if(ge&&oe)n.texStorage2D(e.TEXTURE_2D,Ne,Y,de[0].width,de[0].height);for(let Te=0,Be=de.length;Te<Be;Te++)if(X=de[Te],x.format!==In)if(xe!==null)if(ge){if(Ue)n.compressedTexSubImage2D(e.TEXTURE_2D,Te,0,0,X.width,X.height,xe,X.data)}else n.compressedTexImage2D(e.TEXTURE_2D,Te,Y,X.width,X.height,0,X.data);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ge){if(Ue)n.texSubImage2D(e.TEXTURE_2D,Te,0,0,X.width,X.height,xe,C,X.data)}else n.texImage2D(e.TEXTURE_2D,Te,Y,X.width,X.height,0,xe,C,X.data)}else if(x.isDataArrayTexture)if(ge){if(oe)n.texStorage3D(e.TEXTURE_2D_ARRAY,Ne,Y,ee.width,ee.height,ee.depth);if(Ue)if(x.layerUpdates.size>0){let Te=Cl(ee.width,ee.height,x.format,x.type);for(let Be of x.layerUpdates){let Ze=ee.data.subarray(Be*Te/ee.data.BYTES_PER_ELEMENT,(Be+1)*Te/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Be,ee.width,ee.height,1,xe,C,Ze)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,xe,C,ee.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Y,ee.width,ee.height,ee.depth,0,xe,C,ee.data);else if(x.isData3DTexture)if(ge){if(oe)n.texStorage3D(e.TEXTURE_3D,Ne,Y,ee.width,ee.height,ee.depth);if(Ue)n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,xe,C,ee.data)}else n.texImage3D(e.TEXTURE_3D,0,Y,ee.width,ee.height,ee.depth,0,xe,C,ee.data);else if(x.isFramebufferTexture){if(oe)if(ge)n.texStorage2D(e.TEXTURE_2D,Ne,Y,ee.width,ee.height);else{let Te=ee.width,Be=ee.height;for(let Ze=0;Ze<Ne;Ze++)n.texImage2D(e.TEXTURE_2D,Ze,Y,Te,Be,0,xe,C,null),Te>>=1,Be>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let Te=e.canvas;if(!Te.hasAttribute("layoutsubtree"))Te.setAttribute("layoutsubtree","true");if(ee.parentNode!==Te){Te.appendChild(ee),d.add(x),Te.onpaint=(Be)=>{let Ze=Be.changedElements;for(let Me of d)if(Ze.includes(Me.image))Me.needsUpdate=!0},Te.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ee);else{let{RGBA:Ze,RGBA:Me,UNSIGNED_BYTE:ht}=e;e.texElementImage2D(e.TEXTURE_2D,0,Ze,Me,ht,ee)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(de.length>0){if(ge&&oe){let Te=_t(de[0]);n.texStorage2D(e.TEXTURE_2D,Ne,Y,Te.width,Te.height)}for(let Te=0,Be=de.length;Te<Be;Te++)if(X=de[Te],ge){if(Ue)n.texSubImage2D(e.TEXTURE_2D,Te,0,0,xe,C,X)}else n.texImage2D(e.TEXTURE_2D,Te,Y,xe,C,X);x.generateMipmaps=!1}else if(ge){if(oe){let Te=_t(ee);n.texStorage2D(e.TEXTURE_2D,Ne,Y,Te.width,Te.height)}if(Ue)n.texSubImage2D(e.TEXTURE_2D,0,0,0,xe,C,ee)}else n.texImage2D(e.TEXTURE_2D,0,Y,xe,C,ee);if(w(x)&&x.mipmapsAutoUpdate===!0)y(se);if(ye.__version=_e.version,x.onUpdate)x.onUpdate(x)}b.__version=x.version}function Re(b,x,z){if(x.image.length!==6)return;let se=te(b,x),ne=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+z);let _e=i.get(ne);if(ne.version!==_e.__version||se===!0){n.activeTexture(e.TEXTURE0+z);let ye=it.getPrimaries(it.workingColorSpace),W=x.colorSpace===ci?null:it.getPrimaries(x.colorSpace),ee=x.colorSpace===ci||ye===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let xe=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,Y=[];for(let Me=0;Me<6;Me++){if(!xe&&!C)Y[Me]=T(x.image[Me],!0,s.maxCubemapSize);else Y[Me]=C?x.image[Me].image:x.image[Me];Y[Me]=Ve(x,Y[Me])}let X=Y[0],de=r.convert(x.format,x.colorSpace),ge=r.convert(x.type),oe=I(x.internalFormat,de,ge,x.normalized,x.colorSpace),Ue=x.isVideoTexture!==!0,Ne=_e.__version===void 0||se===!0,Te=ne.dataReady,Be=S(x,X);st(e.TEXTURE_CUBE_MAP,x);let Ze;if(x.isDepthTexture){if(oe=g(x.format===Jn,x.type),Ne)if(Ue)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,oe,X.width,X.height);else for(let Me=0;Me<6;Me++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,X.width,X.height,0,de,ge,null)}else if(xe){if(Ue&&Ne)n.texStorage2D(e.TEXTURE_CUBE_MAP,Be,oe,X.width,X.height);for(let Me=0;Me<6;Me++){Ze=Y[Me].mipmaps;for(let ht=0;ht<Ze.length;ht++){let Tt=Ze[ht];if(x.format!==In)if(de!==null)if(Ue){if(Te)n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ht,0,0,Tt.width,Tt.height,de,Tt.data)}else n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ht,oe,Tt.width,Tt.height,0,Tt.data);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Ue){if(Te)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ht,0,0,Tt.width,Tt.height,de,ge,Tt.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ht,oe,Tt.width,Tt.height,0,de,ge,Tt.data)}}}else{if(Ze=x.mipmaps,Ue&&Ne){if(Ze.length>0)Be++;let Me=_t(Y[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Be,oe,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(C){if(Ue){if(Te)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Y[Me].width,Y[Me].height,de,ge,Y[Me].data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,Y[Me].width,Y[Me].height,0,de,ge,Y[Me].data);for(let ht=0;ht<Ze.length;ht++){let an=Ze[ht].image[Me].image;if(Ue){if(Te)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ht+1,0,0,an.width,an.height,de,ge,an.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ht+1,oe,an.width,an.height,0,de,ge,an.data)}}else{if(Ue){if(Te)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,de,ge,Y[Me])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,de,ge,Y[Me]);for(let ht=0;ht<Ze.length;ht++){let Tt=Ze[ht];if(Ue){if(Te)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ht+1,0,0,de,ge,Tt.image[Me])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ht+1,oe,de,ge,Tt.image[Me])}}}if(w(x)&&x.mipmapsAutoUpdate===!0)y(e.TEXTURE_CUBE_MAP);if(_e.__version=ne.version,x.onUpdate)x.onUpdate(x)}b.__version=x.version}function ze(b,x,z,se,ne,_e){let ye=r.convert(z.format,z.colorSpace),W=r.convert(z.type),ee=I(z.internalFormat,ye,W,z.normalized,z.colorSpace),xe=i.get(x),C=i.get(z);if(C.__renderTarget=x,!xe.__hasExternalTextures){let Y=Math.max(1,x.width>>_e),X=Math.max(1,x.height>>_e);if(ne===e.TEXTURE_3D||ne===e.TEXTURE_2D_ARRAY)n.texImage3D(ne,_e,ee,Y,X,x.depth,0,ye,W,null);else n.texImage2D(ne,_e,ee,Y,X,0,ye,W,null)}if(n.bindFramebuffer(e.FRAMEBUFFER,b),lt(x))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,ne,C.__webglTexture,0,Se(x));else if(ne===e.TEXTURE_2D||ne>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,se,ne,C.__webglTexture,_e);n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(b,x,z){if(e.bindRenderbuffer(e.RENDERBUFFER,b),x.depthBuffer){let se=x.depthTexture,ne=se&&se.isDepthTexture?se.type:null,_e=g(x.stencilBuffer,ne),ye=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(lt(x))o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(x),_e,x.width,x.height);else if(z)e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(x),_e,x.width,x.height);else e.renderbufferStorage(e.RENDERBUFFER,_e,x.width,x.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,ye,e.RENDERBUFFER,b)}else{let se=x.textures;for(let ne=0;ne<se.length;ne++){let _e=se[ne],ye=r.convert(_e.format,_e.colorSpace),W=r.convert(_e.type),ee=I(_e.internalFormat,ye,W,_e.normalized,_e.colorSpace);if(lt(x))o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(x),ee,x.width,x.height);else if(z)e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(x),ee,x.width,x.height);else e.renderbufferStorage(e.RENDERBUFFER,ee,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ke(b,x,z){let se=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(x.depthTexture);ne.__renderTarget=x;let _e=se?x.depthTexture.image[0]:x.depthTexture.image;if(!ne.__webglTexture||_e.width!==x.width||_e.height!==x.height)_e.width=x.width,_e.height=x.height,x.depthTexture.needsUpdate=!0;if(se)be(x.depthTexture,0);else Ie(x.depthTexture,0);let ye=ne.__webglTexture,W=Se(x),ee=se?e.TEXTURE_CUBE_MAP_POSITIVE_X+z:e.TEXTURE_2D,xe=x.depthTexture.format===Jn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===Qi)if(lt(x))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,ee,ye,0,W);else e.framebufferTexture2D(e.FRAMEBUFFER,xe,ee,ye,0);else if(x.depthTexture.format===Jn)if(lt(x))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,ee,ye,0,W);else e.framebufferTexture2D(e.FRAMEBUFFER,xe,ee,ye,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(b){let x=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let se=b.depthTexture;if(x.__depthDisposeCallback)x.__depthDisposeCallback();if(se){let ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,se.removeEventListener("dispose",ne)};se.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=se}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let se=0;se<6;se++)Ke(x.__webglFramebuffer[se],b,se);else if(b.texture.mipmaps.length>0)Ke(x.__webglFramebuffer[0],b,0);else Ke(x.__webglFramebuffer,b,0);else if(z){x.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[se]),x.__webglDepthbuffer[se]===void 0)x.__webglDepthbuffer[se]=e.createRenderbuffer(),De(x.__webglDepthbuffer[se],b,!1);else{let ne=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_e=x.__webglDepthbuffer[se];e.bindRenderbuffer(e.RENDERBUFFER,_e),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,_e)}}else{if(b.texture.mipmaps.length>0)n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]);else n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer);if(x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),De(x.__webglDepthbuffer,b,!1);else{let ne=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_e=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,_e),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,_e)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function at(b,x,z){let se=i.get(b);if(x!==void 0)ze(se.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(z!==void 0)Qe(b)}function N(b){let x=b.texture,z=i.get(b),se=i.get(x);b.addEventListener("dispose",G),P(b);let ne=b.textures,_e=b.isWebGLCubeRenderTarget===!0,ye=ne.length>1;if(!ye){if(se.__webglTexture===void 0)se.__webglTexture=e.createTexture();se.__version=x.version,a.memory.textures++}if(_e){z.__webglFramebuffer=[];for(let W=0;W<6;W++)if(x.mipmaps.length>0){z.__webglFramebuffer[W]=[];for(let ee=0;ee<x.mipmaps.length;ee++)z.__webglFramebuffer[W][ee]=e.createFramebuffer()}else z.__webglFramebuffer[W]=e.createFramebuffer()}else{if(x.mipmaps.length>0){z.__webglFramebuffer=[];for(let W=0;W<x.mipmaps.length;W++)z.__webglFramebuffer[W]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(ye)for(let W=0,ee=ne.length;W<ee;W++){let xe=i.get(ne[W]);if(xe.__webglTexture===void 0)xe.__webglTexture=e.createTexture(),a.memory.textures++}if(b.samples>0&&lt(b)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let W=0;W<ne.length;W++){let ee=ne[W];z.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[W]);let xe=r.convert(ee.format,ee.colorSpace),C=r.convert(ee.type),Y=I(ee.internalFormat,xe,C,ee.normalized,ee.colorSpace,b.isXRRenderTarget===!0),X=Se(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,X,Y,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,z.__webglColorRenderbuffer[W])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer)z.__webglDepthRenderbuffer=e.createRenderbuffer(),De(z.__webglDepthRenderbuffer,b,!0);n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(_e){n.bindTexture(e.TEXTURE_CUBE_MAP,se.__webglTexture),st(e.TEXTURE_CUBE_MAP,x);for(let W=0;W<6;W++)if(x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)ze(z.__webglFramebuffer[W][ee],b,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,ee);else ze(z.__webglFramebuffer[W],b,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);if(w(x))y(e.TEXTURE_CUBE_MAP);else if(x.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,x.mipmaps.length-1);n.unbindTexture()}else if(ye){for(let W=0,ee=ne.length;W<ee;W++){let xe=ne[W],C=i.get(xe),Y=e.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)Y=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(Y,C.__webglTexture),st(Y,xe),ze(z.__webglFramebuffer,b,xe,e.COLOR_ATTACHMENT0+W,Y,0),w(xe))y(Y)}n.unbindTexture()}else{let W=e.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)W=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(W,se.__webglTexture),st(W,x),x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)ze(z.__webglFramebuffer[ee],b,x,e.COLOR_ATTACHMENT0,W,ee);else ze(z.__webglFramebuffer,b,x,e.COLOR_ATTACHMENT0,W,0);if(w(x))y(W);else if(x.mipmaps.length>0)e.texParameteri(W,e.TEXTURE_MAX_LEVEL,x.mipmaps.length-1);n.unbindTexture()}if(b.depthBuffer)Qe(b)}function xt(b){let x=b.textures;for(let z=0,se=x.length;z<se;z++){let ne=x[z];if(w(ne)&&ne.mipmapsAutoUpdate===!0){let _e=A(b),ye=i.get(ne).__webglTexture;n.bindTexture(_e,ye),y(_e),n.unbindTexture()}}}let Ye=[];function vt(b){if(b.samples>0){if(lt(b)===!1){let{textures:x,width:z,height:se}=b,ne=e.COLOR_BUFFER_BIT,_e=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ye=i.get(b),W=x.length>1;if(W)for(let xe=0;xe<x.length;xe++)n.bindFramebuffer(e.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ye.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,null,0);if(n.bindFramebuffer(e.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0)n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]);else n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let xe=0;xe<x.length;xe++){if(b.resolveDepthBuffer){if(b.depthBuffer)ne|=e.DEPTH_BUFFER_BIT;if(b.stencilBuffer&&b.resolveStencilBuffer)ne|=e.STENCIL_BUFFER_BIT}if(W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);let C=i.get(x[xe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,C,0)}if(e.blitFramebuffer(0,0,z,se,0,0,z,se,ne,e.NEAREST),l===!0){if(Ye.length=0,Ye.push(e.COLOR_ATTACHMENT0+xe),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1)Ye.push(_e);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ye)}}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let xe=0;xe<x.length;xe++){n.bindFramebuffer(e.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);let C=i.get(x[xe]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ye.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,C,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let x=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Se(b){return Math.min(s.maxSamples,b.samples)}function lt(b){let x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ge(b){let x=a.render.frame;if(u.get(b)!==x)u.set(b,x),b.update()}function Ve(b,x){let{colorSpace:z,format:se,type:ne}=b;if(b.isCompressedTexture===!0||b.isVideoTexture===!0)return x;if(z!==Yo&&z!==ci)if(it.getTransfer(z)===mt){if(se!==In||ne!==dn)We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else qe("WebGLTextures: Unsupported texture color space:",z);return x}function _t(b){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement)c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height;else if(typeof VideoFrame<"u"&&b instanceof VideoFrame)c.width=b.displayWidth,c.height=b.displayHeight;else c.width=b.width,c.height=b.height;return c}this.allocateTextureUnit=Q,this.resetTextureUnits=Z,this.getTextureUnits=ae,this.setTextureUnits=Ae,this.setTexture2D=Ie,this.setTexture2DArray=Fe,this.setTexture3D=Oe,this.setTextureCube=be,this.rebindTextures=at,this.setupRenderTarget=N,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=lt,this.dispose=q}function d0(e,t){function n(i,s=ci){let r,a=it.getTransfer(s);if(i===dn)return e.UNSIGNED_BYTE;if(i===ho)return e.UNSIGNED_SHORT_4_4_4_4;if(i===uo)return e.UNSIGNED_SHORT_5_5_5_1;if(i===hh)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===uh)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===lh)return e.BYTE;if(i===ch)return e.SHORT;if(i===zs)return e.UNSIGNED_SHORT;if(i===co)return e.INT;if(i===Zn)return e.UNSIGNED_INT;if(i===Cn)return e.FLOAT;if(i===Wt)return e.HALF_FLOAT;if(i===dh)return e.ALPHA;if(i===fh)return e.RGB;if(i===In)return e.RGBA;if(i===Qi)return e.DEPTH_COMPONENT;if(i===Jn)return e.DEPTH_STENCIL;if(i===ph)return e.RED;if(i===fo)return e.RED_INTEGER;if(i===li)return e.RG;if(i===po)return e.RG_INTEGER;if(i===mo)return e.RGBA_INTEGER;if(i===Wr||i===Vr||i===Xr||i===qr)if(a===mt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===go||i===_o||i===xo||i===vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yo||i===So||i===Mo||i===bo||i===Eo||i===Yr||i===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yo||i===So)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===bo)return r.COMPRESSED_R11_EAC;if(i===Eo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Yr)return r.COMPRESSED_RG11_EAC;if(i===To)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wo||i===Ao||i===Ro||i===Co||i===Io||i===Po||i===Lo||i===No||i===Do||i===Uo||i===Fo||i===Oo||i===Bo||i===zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ao)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ro)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Co)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Io)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Po)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===No)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Do)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Go||i===Ho||i===ko)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Go)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wo||i===Vo||i===Zr||i===Xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===oi)return e.UNSIGNED_INT_24_8;return e[i]!==void 0?e[i]:null}return{convert:n}}var f0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Su{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new aa(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=n}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:f0,fragmentShader:p0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Dn(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mu extends Pn{constructor(e,t){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,f=null,v=typeof XRWebGLBinding<"u",M=new Su,p={},_=t.getContextAttributes(),T=null,w=null,y=[],A=[],I=new ue,g=null,S=null,P=new qt;P.viewport=new Et;let H=new qt;H.viewport=new Et;let L=[P,H],G=new wl,J=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=y[Q];if(ce===void 0)ce=new Ws,y[Q]=ce;return ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=y[Q];if(ce===void 0)ce=new Ws,y[Q]=ce;return ce.getGripSpace()},this.getHand=function(Q){let ce=y[Q];if(ce===void 0)ce=new Ws,y[Q]=ce;return ce.getHandSpace()};function q(Q){let ce=A.indexOf(Q.inputSource);if(ce===-1)return;let Ie=y[ce];if(Ie!==void 0)Ie.update(Q.inputSource,Q.frame,l||r),Ie.dispatchEvent({type:Q.type,data:Q.inputSource})}function K(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",k);for(let Q=0;Q<y.length;Q++){let ce=A[Q];if(ce===null)continue;A[Q]=null,y[Q].disconnect(ce)}J=null,R=null,M.reset();for(let Q in p)delete p[Q];if(e.setRenderTarget(T),h=null,d=null,u=null,i=null,w=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(I.width,I.height,!1),S!==null){let Q=S.camera;Q.fov=S.fov,Q.zoom=S.zoom,Q.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){if(s=Q,n.isPresenting===!0)We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){if(a=Q,n.isPresenting===!0)We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){if(u===null&&v)u=new XRWebGLBinding(i,t);return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",K),i.addEventListener("inputsourceschange",k),_.xrCompatible!==!0)await t.makeXRCompatible();if(g=e.getPixelRatio(),e.getSize(I),!(v&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Ie={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,Ie),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new Ft(h.framebufferWidth,h.framebufferHeight,{format:In,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ie=null,Fe=null,Oe=null;if(_.depth)Oe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=_.stencil?Jn:Qi,Fe=_.stencil?oi:Zn;let be={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Ft(d.textureWidth,d.textureHeight,{format:In,type:dn,depthTexture:new Qn(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Ae.setContext(i),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function k(Q){for(let ce=0;ce<Q.removed.length;ce++){let Ie=Q.removed[ce],Fe=A.indexOf(Ie);if(Fe>=0)A[Fe]=null,y[Fe].disconnect(Ie)}for(let ce=0;ce<Q.added.length;ce++){let Ie=Q.added[ce],Fe=A.indexOf(Ie);if(Fe===-1){for(let be=0;be<y.length;be++)if(be>=A.length){A.push(Ie),Fe=be;break}else if(A[be]===null){A[be]=Ie,Fe=be;break}if(Fe===-1)break}let Oe=y[Fe];if(Oe)Oe.connect(Ie)}}function pe(Q,ce){if(ce===null)Q.matrixWorld.copy(Q.matrix);else Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix);Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let{near:ce,far:Ie}=Q;if(M.texture!==null){if(M.depthNear>0)ce=M.depthNear;if(M.depthFar>0)Ie=M.depthFar}if(G.near=H.near=P.near=ce,G.far=H.far=P.far=Ie,J!==G.near||R!==G.far)i.updateRenderState({depthNear:G.near,depthFar:G.far}),J=G.near,R=G.far;G.layers.mask=Q.layers.mask|6,P.layers.mask=G.layers.mask&-5,H.layers.mask=G.layers.mask&-3;let Fe=Q.parent,Oe=G.cameras;pe(G,Fe);for(let be=0;be<Oe.length;be++)pe(Oe[be],Fe);if(G.projectionMatrix.copy(P.projectionMatrix),G.projectionMatrixInverse.copy(P.projectionMatrixInverse),S===null&&Q.isPerspectiveCamera)S={camera:Q,fov:Q.fov,zoom:Q.zoom};V(Q,G,Fe)};function V(Q,ce,Ie){if(Ie===null)Q.matrix.copy(ce.matrixWorld);else Q.matrix.copy(Ie.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld);if(Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera)Q.fov=Ur*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1}this.getCamera=function(){return G},this.getFoveation=function(){if(d===null&&h===null)return;return o},this.setFoveation=function(Q){if(o=Q,d!==null)d.fixedFoveation=Q;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=Q},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(G)},this.getCameraTexture=function(Q){return p[Q]};let Z=null;function ae(Q,ce){if(c=ce.getViewerPose(l||r),f=ce,c!==null){let Ie=c.views;if(h!==null)e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w);let Fe=!1;if(Ie.length!==G.cameras.length)G.cameras.length=0,Fe=!0;for(let $e=0;$e<Ie.length;$e++){let He=Ie[$e],st=null;if(h!==null)st=h.getViewport(He);else{let me=u.getViewSubImage(d,He);if(st=me.viewport,$e===0)e.setRenderTargetTextures(w,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(w)}let te=L[$e];if(te===void 0)te=new qt,te.layers.enable($e),te.viewport=new Et,L[$e]=te;if(te.matrix.fromArray(He.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(He.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(st.x,st.y,st.width,st.height),$e===0)G.matrix.copy(te.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);if(Fe===!0)G.cameras.push(te)}let Oe=i.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let $e=u.getDepthInformation(Ie[0]);if($e&&$e.isValid&&$e.texture)M.init($e,i.renderState)}if(Oe&&Oe.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let $e=0;$e<Ie.length;$e++){let He=Ie[$e].camera;if(He){let st=p[He];if(!st)st=new aa,p[He]=st;let te=u.getCameraImage(He);st.sourceTexture=te}}}}for(let Ie=0;Ie<y.length;Ie++){let Fe=A[Ie],Oe=y[Ie];if(Fe!==null&&Oe!==void 0)Oe.update(Fe,ce,l||r)}if(Z)Z(Q,ce);if(ce.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:ce});f=null}let Ae=new au;Ae.setAnimationLoop(ae),this.setAnimationLoop=function(Q){Z=Q},this.dispose=function(){}}}var m0=new gt,bu=new Je;bu.set(-1,0,0,0,1,0,0,0,1);function g0(e,t){function n(p,_){if(p.matrixAutoUpdate===!0)p.updateMatrix();_.value.copy(p.matrix)}function i(p,_){if(_.color.getRGB(p.fogColor.value,fl(e)),_.isFog)p.fogNear.value=_.near,p.fogFar.value=_.far;else if(_.isFogExp2)p.fogDensity.value=_.density}function s(p,_,T,w,y){if(_.isNodeMaterial)_.uniformsNeedUpdate=!1;else if(_.isMeshBasicMaterial)r(p,_);else if(_.isMeshLambertMaterial){if(r(p,_),_.envMap)p.envMapIntensity.value=_.envMapIntensity}else if(_.isMeshToonMaterial)r(p,_),d(p,_);else if(_.isMeshPhongMaterial){if(r(p,_),u(p,_),_.envMap)p.envMapIntensity.value=_.envMapIntensity}else if(_.isMeshStandardMaterial){if(r(p,_),h(p,_),_.isMeshPhysicalMaterial)f(p,_,y)}else if(_.isMeshMatcapMaterial)r(p,_),v(p,_);else if(_.isMeshDepthMaterial)r(p,_);else if(_.isMeshDistanceMaterial)r(p,_),M(p,_);else if(_.isMeshNormalMaterial)r(p,_);else if(_.isLineBasicMaterial){if(a(p,_),_.isLineDashedMaterial)o(p,_)}else if(_.isPointsMaterial)l(p,_,T,w);else if(_.isSpriteMaterial)c(p,_);else if(_.isShadowMaterial)p.color.value.copy(_.color),p.opacity.value=_.opacity;else if(_.isShaderMaterial)_.uniformsNeedUpdate=!1}function r(p,_){if(p.opacity.value=_.opacity,_.color)p.diffuse.value.copy(_.color);if(_.emissive)p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity);if(_.map)p.map.value=_.map,n(_.map,p.mapTransform);if(_.alphaMap)p.alphaMap.value=_.alphaMap,n(_.alphaMap,p.alphaMapTransform);if(_.bumpMap){if(p.bumpMap.value=_.bumpMap,n(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===kt)p.bumpScale.value*=-1}if(_.normalMap){if(p.normalMap.value=_.normalMap,n(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===kt)p.normalScale.value.negate()}if(_.displacementMap)p.displacementMap.value=_.displacementMap,n(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias;if(_.emissiveMap)p.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,p.emissiveMapTransform);if(_.specularMap)p.specularMap.value=_.specularMap,n(_.specularMap,p.specularMapTransform);if(_.alphaTest>0)p.alphaTest.value=_.alphaTest;let T=t.get(_),{envMap:w,envMapRotation:y}=T;if(w){if(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(bu);p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio}if(_.lightMap)p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,p.lightMapTransform);if(_.aoMap)p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,p.aoMapTransform)}function a(p,_){if(p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map)p.map.value=_.map,n(_.map,p.mapTransform)}function o(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function l(p,_,T,w){if(p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*T,p.scale.value=w*0.5,_.map)p.map.value=_.map,n(_.map,p.uvTransform);if(_.alphaMap)p.alphaMap.value=_.alphaMap,n(_.alphaMap,p.alphaMapTransform);if(_.alphaTest>0)p.alphaTest.value=_.alphaTest}function c(p,_){if(p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map)p.map.value=_.map,n(_.map,p.mapTransform);if(_.alphaMap)p.alphaMap.value=_.alphaMap,n(_.alphaMap,p.alphaMapTransform);if(_.alphaTest>0)p.alphaTest.value=_.alphaTest}function u(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,0.0001)}function d(p,_){if(_.gradientMap)p.gradientMap.value=_.gradientMap}function h(p,_){if(p.metalness.value=_.metalness,_.metalnessMap)p.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=_.roughness,_.roughnessMap)p.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,p.roughnessMapTransform);if(_.envMap)p.envMapIntensity.value=_.envMapIntensity}function f(p,_,T){if(p.ior.value=_.ior,_.diffuseRoughness>0){if(p.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap)p.diffuseRoughnessMap.value=_.diffuseRoughnessMap,n(_.diffuseRoughnessMap,p.diffuseRoughnessMapTransform)}if(_.sheen>0){if(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap)p.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,p.sheenColorMapTransform);if(_.sheenRoughnessMap)p.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(_.clearcoat>0){if(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap)p.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,p.clearcoatMapTransform);if(_.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(_.clearcoatNormalMap){if(p.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kt)p.clearcoatNormalScale.value.negate()}}if(_.dispersion>0)p.dispersion.value=_.dispersion;if(_.retroreflectivity>0)p.retroreflectivity.value=_.retroreflectivity;if(_.iridescence>0){if(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap)p.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,p.iridescenceMapTransform);if(_.iridescenceThicknessMap)p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(_.transmission>0){if(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap)p.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=_.thickness,_.thicknessMap)p.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)}if(_.anisotropy>0){if(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap)p.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap)p.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,p.specularColorMapTransform);if(_.specularIntensityMap)p.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,p.specularIntensityMapTransform)}function v(p,_){if(_.matcap)p.matcap.value=_.matcap}function M(p,_){let T=t.get(_).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _0(e,t,n,i){let s={},r={};function a(T,w){let y=w.program;i.uniformBlockBinding(T,y,s[T.id])}function o(T,w){let y=s[T.id];if(y===void 0)v(T),y=l(T),s[T.id]=y,T.addEventListener("dispose",p);let A=w.program;i.updateUBOMapping(T,A);let I=t.render.frame;if(r[T.id]!==I)c(T),r[T.id]=I}function l(T){let w=e.createBuffer(),{__size:y,usage:A}=T;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,y,A),e.bindBuffer(e.UNIFORM_BUFFER,null),w}function c(T){let w=s[T.id],{uniforms:y,__cache:A}=T;e.bindBuffer(e.UNIFORM_BUFFER,w);for(let I=0,g=y.length;I<g;I++){let S=y[I];if(Array.isArray(S))for(let P=0,H=S.length;P<H;P++)u(S[P],I,P,A);else u(S,I,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(T,w,y,A){if(h(T,w,y,A)===!0){let{__offset:I,value:g}=T;if(Array.isArray(g)){let S=0;for(let P=0;P<g.length;P++){let H=g[P],L=M(H,!0);d(H,T.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,T.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,I,T.__data)}}function d(T,w,y){if(typeof T==="number"||typeof T==="boolean")w[y]=T;else if(T.isMatrix3)w[y]=T.elements[0],w[y+1]=T.elements[1],w[y+2]=T.elements[2],w[y+3]=0,w[y+4]=T.elements[3],w[y+5]=T.elements[4],w[y+6]=T.elements[5],w[y+7]=0,w[y+8]=T.elements[6],w[y+9]=T.elements[7],w[y+10]=T.elements[8],w[y+11]=0;else if(ArrayBuffer.isView(T))w.set(T.subarray(0,w.length-y),y);else T.toArray(w,y)}function h(T,w,y,A){let I=T.value,g=w+"_"+y;if(Array.isArray(I)){if(A[g]===void 0)A[g]=[];let S=A[g],P=!1;for(let H=0;H<I.length;H++)if(f(I[H],S,H)===!0)P=!0;return P}return f(I,A,g)}function f(T,w,y){if(w[y]===void 0){if(typeof T==="number"||typeof T==="boolean")w[y]=T;else if(ArrayBuffer.isView(T))w[y]=T.slice();else w[y]=T.clone();return!0}else{let A=w[y];if(typeof T==="number"||typeof T==="boolean"){if(A!==T)return w[y]=T,!0}else if(ArrayBuffer.isView(T))return!0;else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function v(T){let w=T.uniforms,y=0,A=16;for(let g=0,S=w.length;g<S;g++){let P=Array.isArray(w[g])?w[g]:[w[g]];for(let H=0,L=P.length;H<L;H++){let G=P[H],J=Array.isArray(G.value)?G.value:[G.value],R=Array.isArray(w[g])||Array.isArray(G.value),q=y;for(let k=0,pe=J.length;k<pe;k++){let V=J[k],Z=M(V,R),ae=y%A,Ae=ae%Z.boundary,Q=ae+Ae;if(y+=Ae,Q!==0&&A-Q<Z.storage)y+=A-Q;if(k===0)q=y;y+=Z.storage}let K=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new K((y-q)/Float32Array.BYTES_PER_ELEMENT),G.__offset=q}}let I=y%A;if(I>0)y+=A-I;return T.__size=y,T.__cache={},this}function M(T,w){let y={boundary:0,storage:0};if(typeof T==="number"||typeof T==="boolean")y.boundary=4,y.storage=4;else if(T.isVector2)y.boundary=8,y.storage=8;else if(T.isVector3||T.isColor)y.boundary=16,y.storage=12;else if(T.isVector4)y.boundary=16,y.storage=16;else if(T.isMatrix3)y.boundary=16,y.storage=48;else if(T.isMatrix4)y.boundary=16,y.storage=64;else if(T.isTexture)We("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(T))y.boundary=16,y.storage=T.byteLength;else We("WebGLRenderer: Unsupported uniform value type.",T);if(w===!0)y.boundary=16,y.storage=Math.ceil(y.storage/16)*16;return y}function p(T){let w=T.target;w.removeEventListener("dispose",p),e.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function _(){for(let T in s)e.deleteBuffer(s[T]);s={},r={}}return{bind:a,update:o,dispose:_}}var x0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vn=null;function v0(){if(vn===null)vn=new sl(x0,16,16,li,Wt),vn.name="DFG_LUT",vn.minFilter=tn,vn.magFilter=tn,vn.wrapS=Hr,vn.wrapT=Hr,vn.generateMipmaps=!1,vn.needsUpdate=!0;return vn}class Nl{constructor(e={}){let{canvas:t=Sh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=dn}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let v=h,M=new Set([mo,po,fo]),p=new Set([dn,Zn,zs,oi,ho,uo]),_=new Uint32Array(4),T=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},y=null,A=null,I=[],g=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,H=!1,L=null,G=null,J=null,R=null;this._outputColorSpace=Gs;let q=0,K=0,k=null,pe=-1,V=null,Z=new Et,ae=new Et,Ae=null,Q=new Xe(0),ce=0,{width:Ie,height:Fe}=t,Oe=1,be=null,tt=null,$e=new Et(0,0,Ie,Fe),He=new Et(0,0,Ie,Fe),st=!1,te=new qi,me=new ea,ve=!1,Ce=!1,Re=new gt,ze=new U,De=new Et,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function at(){return k===null?Oe:1}let N=n;function xt(m,E){return t.getContext(m,E)}let Ye,vt,Se,lt,Ge,Ve,_t,b,x,z,se,ne,_e,ye,W,ee,xe,C,Y,X,de,ge,oe;try{let m={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${Tc}`);if(t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),N===null){if(N=xt("webgl2",m),N===null)if(xt("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(m){throw t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),qe("WebGLRenderer: "+m.message),m}function Ue(){if(Ye=new Im(N),Ye.init(),de=new d0(N,Ye),vt=new vm(N,Ye,e,de),Se=new h0(N,Ye),vt.reversedDepthBuffer&&d)Se.buffers.depth.setReversed(!0);G=N.createFramebuffer(),J=N.createFramebuffer(),R=N.createFramebuffer(),lt=new Nm(N),Ge=new $g,Ve=new u0(N,Ye,Se,Ge,vt,de,lt),_t=new Cm(P),b=new Dd(N),ge=new _m(N,b),x=new Pm(N,b,lt,ge),z=new Um(N,x,b,ge,lt),C=new Dm(N,vt,Ve),W=new ym(Ge),se=new Jg(P,_t,Ye,vt,ge,W),ne=new g0(P,Ge),_e=new Qg,ye=new s0(Ye),xe=new gm(P,_t,Se,z,f,o),ee=new c0(P,z,vt),oe=new _0(N,lt,vt,Se),Y=new xm(N,Ye,lt),X=new Lm(N,Ye,lt),lt.programs=se.programs,P.capabilities=vt,P.extensions=Ye,P.properties=Ge,P.renderLists=_e,P.shadowMap=ee,P.state=Se,P.info=lt}if(v!==dn)S=new Om(v,t.width,t.height,a,i,s);let Ne=new Mu(P,N);this.xr=Ne,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let m=Ye.get("WEBGL_lose_context");if(m)m.loseContext()},this.forceContextRestore=function(){let m=Ye.get("WEBGL_lose_context");if(m)m.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(m){if(m===void 0)return;Oe=m,this.setSize(Ie,Fe,!1)},this.getSize=function(m){return m.set(Ie,Fe)},this.setSize=function(m,E,B=!0){if(Ne.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Ie=m,Fe=E,t.width=Math.floor(m*Oe),t.height=Math.floor(E*Oe),B===!0)t.style.width=m+"px",t.style.height=E+"px";if(S!==null)S.setSize(t.width,t.height);this.setViewport(0,0,m,E)},this.getDrawingBufferSize=function(m){return m.set(Ie*Oe,Fe*Oe).floor()},this.setDrawingBufferSize=function(m,E,B){Ie=m,Fe=E,Oe=B,t.width=Math.floor(m*B),t.height=Math.floor(E*B),this.setViewport(0,0,m,E)},this.setEffects=function(m){if(v===dn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(m){for(let E=0;E<m.length;E++)if(m[E].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(m||[])},this.getCurrentViewport=function(m){return m.copy(Z)},this.getViewport=function(m){return m.copy($e)},this.setViewport=function(m,E,B,F){if(m.isVector4)$e.set(m.x,m.y,m.z,m.w);else $e.set(m,E,B,F);Se.viewport(Z.copy($e).multiplyScalar(at()).round())},this.getScissor=function(m){return m.copy(He)},this.setScissor=function(m,E,B,F){if(m.isVector4)He.set(m.x,m.y,m.z,m.w);else He.set(m,E,B,F);Se.scissor(ae.copy(He).multiplyScalar(at()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(m){Se.setScissorTest(st=m)},this.setOpaqueSort=function(m){be=m},this.setTransparentSort=function(m){tt=m},this.getClearColor=function(m){return m.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(m=!0,E=!0,B=!0){let F=0;if(m){let O=!1;if(k!==null){let le=k.texture.format;O=M.has(le)}if(O){let le=k.texture.type,he=p.has(le),ie=xe.getClearColor(),fe=xe.getClearAlpha(),{r:Ee,g:ke,b:et}=ie;if(he)_[0]=Ee,_[1]=ke,_[2]=et,_[3]=fe,N.clearBufferuiv(N.COLOR,0,_);else T[0]=Ee,T[1]=ke,T[2]=et,T[3]=fe,N.clearBufferiv(N.COLOR,0,T)}else F|=N.COLOR_BUFFER_BIT}if(E)F|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(B)F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(F!==0)N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(m){m.setRenderer(this),L=m},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),xe.dispose(),_e.dispose(),ye.dispose(),Ve.dispose(),Ge.dispose(),_t.dispose(),z.dispose(),x.dispose(),ge.dispose(),oe.dispose(),se.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",os),Ne.removeEventListener("sessionend",Si),fn.stop()};function Te(m){m.preventDefault(),bs("WebGLRenderer: Context Lost."),H=!0}function Be(){bs("WebGLRenderer: Context Restored."),H=!1;let m=lt.autoReset,E=ee.enabled,B=ee.autoUpdate,F=ee.needsUpdate,O=ee.type;Ue(),lt.autoReset=m,ee.enabled=E,ee.autoUpdate=B,ee.needsUpdate=F,ee.type=O}function Ze(m){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",m.statusMessage)}function Me(m){let E=m.target;E.removeEventListener("dispose",Me),ht(E)}function ht(m){Tt(m),Ge.remove(m)}function Tt(m){let E=Ge.get(m).programs;if(E!==void 0){if(E.forEach(function(B){se.releaseProgram(B)}),m.isShaderMaterial)se.releaseShaderCache(m)}}this.renderBufferDirect=function(m,E,B,F,O,le){if(E===null)E=Ke;let he=O.isMesh&&O.matrixWorld.determinantAffine()<0,ie=Aa(m,E,B,F,O);Se.setMaterial(F,he);let fe=B.index,Ee=1;if(F.wireframe===!0){if(fe=x.getWireframeAttribute(B),fe===void 0)return;Ee=2}let ke=B.drawRange,et=B.attributes.position,Pe=ke.start*Ee,nt=(ke.start+ke.count)*Ee;if(le!==null)Pe=Math.max(Pe,le.start*Ee),nt=Math.min(nt,(le.start+le.count)*Ee);if(fe!==null)Pe=Math.max(Pe,0),nt=Math.min(nt,fe.count);else if(et!==void 0&&et!==null)Pe=Math.max(Pe,0),nt=Math.min(nt,et.count);let bt=nt-Pe;if(bt<0||bt===1/0)return;ge.setup(O,F,ie,B,fe);let ft,ct=Y;if(fe!==null)ft=b.get(fe),ct=X,ct.setIndex(ft);if(O.isMesh)if(F.wireframe===!0)Se.setLineWidth(F.wireframeLinewidth*at()),ct.setMode(N.LINES);else ct.setMode(N.TRIANGLES);else if(O.isLine){let Nt=F.linewidth;if(Nt===void 0)Nt=1;if(Se.setLineWidth(Nt*at()),O.isLineSegments)ct.setMode(N.LINES);else if(O.isLineLoop)ct.setMode(N.LINE_LOOP);else ct.setMode(N.LINE_STRIP)}else if(O.isPoints)ct.setMode(N.POINTS);else if(O.isSprite)ct.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(!Ye.get("WEBGL_multi_draw")){let{_multiDrawStarts:Nt,_multiDrawCounts:Le,_multiDrawCount:At}=O,ut=fe?b.get(fe).bytesPerElement:1,jn=Ge.get(F).currentProgram.getUniforms();for(let zt=0;zt<At;zt++)jn.setValue(N,"_gl_DrawID",zt),ct.render(Nt[zt]/ut,Le[zt])}else ct.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)ct.renderInstances(Pe,bt,O.count);else if(B.isInstancedBufferGeometry){let Nt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Le=Math.min(B.instanceCount,Nt);ct.renderInstances(Pe,bt,Le)}else ct.render(Pe,bt)};function an(m,E,B,F){if(L!==null&&m.isNodeMaterial)L.setObject(F,m);if(ve===!0)W.setState(m,B,!1);if(m.transparent===!0&&m.side===Zt&&m.forceSinglePass===!1)m.side=kt,m.needsUpdate=!0,Bn(m,E,F),m.side=Ji,m.needsUpdate=!0,Bn(m,E,F),m.side=Zt;else Bn(m,E,F)}this.compile=function(m,E,B=null){if(B===null)B=m;if(L!==null)L.renderStart(m,E,B);if(A=ye.get(B),A.init(E),g.push(A),B.traverseVisible(function(O){if(O.isLight&&O.layers.test(E.layers)){if(A.pushLight(O),O.castShadow)A.pushShadow(O)}}),m!==B)m.traverseVisible(function(O){if(O.isLight&&O.layers.test(E.layers)){if(A.pushLight(O),O.castShadow)A.pushShadow(O)}});if(A.setupLights(),L!==null)L.updateLights(A.state.lightsArray);if(Ce=this.localClippingEnabled,ve=W.init(this.clippingPlanes,Ce),ve===!0)W.setGlobalState(this.clippingPlanes,E);if(L!==null)ee.render(A.state.shadowsArray,B,E);let F=new Set;if(m.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let le=O.material;if(le)if(Array.isArray(le))for(let he=0;he<le.length;he++){let ie=le[he];an(ie,B,E,O),F.add(ie)}else an(le,B,E,O),F.add(le)}),A=g.pop(),L!==null)L.renderEnd();return F},this.compileAsync=function(m,E,B=null){let F=this.compile(m,E,B);return new Promise((O)=>{function le(){if(F.forEach(function(he){let fe=Ge.get(he).currentProgram;if(fe===void 0||fe.isReady())F.delete(he)}),F.size===0){O(m);return}setTimeout(le,10)}if(Ye.get("KHR_parallel_shader_compile")!==null)le();else setTimeout(le,10)})};let Fn=null;function nr(m){if(Fn)Fn(m)}function os(){fn.stop()}function Si(){fn.start()}let fn=new au;if(fn.setAnimationLoop(nr),typeof self<"u")fn.setContext(self);this.setAnimationLoop=function(m){Fn=m,Ne.setAnimationLoop(m),m===null?fn.stop():fn.start()},Ne.addEventListener("sessionstart",os),Ne.addEventListener("sessionend",Si),this.render=function(m,E){if(E!==void 0&&E.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(L!==null)L.renderStart(m,E);let B=Ne.enabled===!0&&Ne.isPresenting===!0,F=S!==null&&(k===null||B)&&S.begin(P,k);if(m.matrixWorldAutoUpdate===!0)m.updateMatrixWorld();if(E.parent===null&&E.matrixWorldAutoUpdate===!0)E.updateMatrixWorld();if(Ne.enabled===!0&&Ne.isPresenting===!0&&(S===null||S.isCompositing()===!1)){if(Ne.cameraAutoUpdate===!0)Ne.updateCamera(E);E=Ne.getCamera()}if(m.isScene===!0)m.onBeforeRender(P,m,E,k);if(A=ye.get(m,g.length),A.init(E),A.state.textureUnits=Ve.getTextureUnits(),g.push(A),Re.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),E.isArrayCamera)me.setFromArrayCamera(E);else te.setFromProjectionMatrix(Re,jo,E.reversedDepth);if(Ce=this.localClippingEnabled,ve=W.init(this.clippingPlanes,Ce),y=_e.get(m,I.length),y.init(),I.push(y),this.info.render.frame++,Ne.enabled===!0&&Ne.isPresenting===!0){let he=P.xr.getDepthSensingMesh();if(he!==null)Mi(he,E,-1/0,P.sortObjects)}if(Mi(m,E,0,P.sortObjects),y.finish(),L!==null)L.updateLights(A.state.lightsArray);if(P.sortObjects===!0)y.sort(be,tt);if(Qe=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Qe)xe.addToRenderList(y,m);if(this.info.autoReset===!0)this.info.reset();if(ve===!0)W.beginShadows();let O=A.state.shadowsArray;if(ee.render(O,m,E),ve===!0)W.endShadows();if((F&&S.hasRenderPass())===!1){let he=y.opaque,ie=y.transmissive;if(A.setupLights(),E.isArrayCamera){let fe=E.cameras;if(ie.length>0)for(let Ee=0,ke=fe.length;Ee<ke;Ee++){let et=fe[Ee];cs(he,ie,m,et)}if(Qe)xe.render(m);for(let Ee=0,ke=fe.length;Ee<ke;Ee++){let et=fe[Ee];ls(y,m,et,et.viewport)}}else{if(ie.length>0)cs(he,ie,m,E);if(Qe)xe.render(m);ls(y,m,E)}}if(k!==null&&K===0)Ve.updateMultisampleRenderTarget(k),Ve.updateRenderTargetMipmap(k);if(F)S.end(P);if(m.isScene===!0)m.onAfterRender(P,m,E);if(ge.resetDefaultState(),pe=-1,V=null,g.pop(),g.length>0){if(A=g[g.length-1],Ve.setTextureUnits(A.state.textureUnits),ve===!0)W.setGlobalState(P.clippingPlanes,A.state.camera)}else A=null;if(I.pop(),I.length>0)y=I[I.length-1];else y=null;if(L!==null)L.renderEnd()};function Mi(m,E,B,F){if(m.visible===!1)return;if(m.layers.test(E.layers)){if(m.isGroup)B=m.renderOrder;else if(m.isLOD){if(m.autoUpdate===!0)m.update(E)}else if(m.isLight){if(A.pushLight(m),m.castShadow)A.pushShadow(m)}else if(m.isSprite){let he=E.isArrayCamera?me:te;if(!m.frustumCulled||m.intersectsFrustum(he)){if(F)De.setFromMatrixPosition(m.matrixWorld).applyMatrix4(Re);let ie=z.update(m),fe=m.material;if(fe.visible)y.push(m,ie,fe,B,De.z,null,E)}}else if(m.isMesh||m.isLine||m.isPoints){let he=E.isArrayCamera?me:te;if(!m.frustumCulled||m.intersectsFrustum(he)){let ie=z.update(m),fe=m.material;if(F){if(m.boundingSphere!==void 0){if(m.boundingSphere===null)m.computeBoundingSphere();De.copy(m.boundingSphere.center)}else{if(ie.boundingSphere===null)ie.computeBoundingSphere();De.copy(ie.boundingSphere.center)}De.applyMatrix4(m.matrixWorld).applyMatrix4(Re)}if(Array.isArray(fe)){let Ee=ie.groups;for(let ke=0,et=Ee.length;ke<et;ke++){let Pe=Ee[ke],nt=fe[Pe.materialIndex];if(nt&&nt.visible)y.push(m,ie,nt,B,De.z,Pe,E)}}else if(fe.visible)y.push(m,ie,fe,B,De.z,null,E)}}}let le=m.children;for(let he=0,ie=le.length;he<ie;he++)Mi(le[he],E,B,F)}function ls(m,E,B,F){let{opaque:O,transmissive:le,transparent:he}=m;if(A.setupLightsView(B),ve===!0)W.setGlobalState(P.clippingPlanes,B);if(F)Se.viewport(Z.copy(F));if(O.length>0)On(O,E,B);if(le.length>0)On(le,E,B);if(he.length>0)On(he,E,B);Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function cs(m,E,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[F.id]===void 0){let Pe=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[F.id]=new Ft(1,1,{generateMipmaps:!0,type:Pe?Wt:dn,minFilter:Yn,samples:Math.max(4,vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let le=A.state.transmissionRenderTarget[F.id],he=F.viewport||Z;le.setSize(he.z*P.transmissionResolutionScale,he.w*P.transmissionResolutionScale);let ie=P.getRenderTarget(),fe=P.getActiveCubeFace(),Ee=P.getActiveMipmapLevel();if(P.setRenderTarget(le),P.getClearColor(Q),ce=P.getClearAlpha(),ce<1)P.setClearColor(16777215,0.5);if(P.clear(),Qe)xe.render(B);let ke=P.toneMapping;P.toneMapping=_n;let et=F.viewport;if(F.viewport!==void 0)F.viewport=void 0;if(A.setupLightsView(F),ve===!0)W.setGlobalState(P.clippingPlanes,F);if(On(m,B,F),Ve.updateMultisampleRenderTarget(le),Ve.updateRenderTargetMipmap(le),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let nt=0,bt=E.length;nt<bt;nt++){let ft=E[nt],{object:ct,geometry:Nt,material:Le,group:At}=ft;if(Le.side===Zt&&ct.layers.test(F.layers)){let ut=Le.side;Le.side=kt,Le.needsUpdate=!0,bi(ct,B,F,Nt,Le,At),Le.side=ut,Le.needsUpdate=!0,Pe=!0}}if(Pe===!0)Ve.updateMultisampleRenderTarget(le),Ve.updateRenderTargetMipmap(le)}if(P.setRenderTarget(ie,fe,Ee),P.setClearColor(Q,ce),et!==void 0)F.viewport=et;P.toneMapping=ke}function On(m,E,B){let F=E.isScene===!0?E.overrideMaterial:null;for(let O=0,le=m.length;O<le;O++){let he=m[O],{object:ie,geometry:fe,group:Ee}=he,ke=he.material;if(ke.allowOverride===!0&&F!==null)ke=F;if(ie.layers.test(B.layers))bi(ie,E,B,fe,ke,Ee)}}function bi(m,E,B,F,O,le){if(L!==null&&O.isNodeMaterial)L.setObject(m,O);if(m.onBeforeRender(P,E,B,F,O,le),m.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,m.matrixWorld),m.normalMatrix.getNormalMatrix(m.modelViewMatrix),O.onBeforeRender(P,E,B,F,m,le),O.transparent===!0&&O.side===Zt&&O.forceSinglePass===!1)O.side=kt,O.needsUpdate=!0,P.renderBufferDirect(B,E,F,O,m,le),O.side=Ji,O.needsUpdate=!0,P.renderBufferDirect(B,E,F,O,m,le),O.side=Zt;else P.renderBufferDirect(B,E,F,O,m,le);m.onAfterRender(P,E,B,F,O,le)}function ir(m){let E=0;for(let B of m)if(B.texture!==null)E++;return E}function Bn(m,E,B){if(E.isScene!==!0)E=Ke;let F=Ge.get(m),O=A.state.lights,le=A.state.shadowsArray,he=O.state.version,ie=se.getParameters(m,O.state,le,E,B,A.state.lightProbeGridArray),fe=se.getProgramCacheKey(ie),Ee=F.programs;F.environment=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?E.environment:null,F.fog=E.fog;let ke=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap;if(F.envMap=_t.get(m.envMap||F.environment,ke),F.envMapRotation=F.environment!==null&&m.envMap===null?E.environmentRotation:m.envMapRotation,Ee===void 0)m.addEventListener("dispose",Me),Ee=new Map,F.programs=Ee,F.programVariants=new Map;let et=Ee.get(fe);if(et!==void 0){if(F.currentProgram===et&&F.lightsStateVersion===he)return hs(m,ie),et}else{if(ie.uniforms=se.getUniforms(m),L!==null&&m.isNodeMaterial)L.build(m,B,ie);m.onBeforeCompile(ie,P),et=se.acquireProgram(ie,fe),Ee.set(fe,et),F.uniforms=ie.uniforms}let Pe=F.uniforms;if(!m.isShaderMaterial&&!m.isRawShaderMaterial||m.clipping===!0)Pe.clippingPlanes=W.uniform;if(hs(m,ie),F.needsLights=j(m),F.lightsStateVersion=he,F.needsLights)Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.sunLights.value=O.state.sun,Pe.sunLightShadows.value=O.state.sunShadow,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.sunShadowMatrix.value=O.state.sunShadowMatrix,Pe.sunShadowCascade.value=O.state.sunShadowCascade,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix;return F.numLightProbeGrids=ir(A.state.lightProbeGridArray),F.currentProgram=et,F.uniformsList=null,et}function wa(m,E,B,F,O){let le=Ge.get(m),he=le.currentProgram.id+","+F+","+O,ie=le.programVariants.get(he);if(ie===void 0)ie=Bn(m,E,B),le.programVariants.set(he,ie);else le.currentProgram=ie,le.uniformsList=null,le.outputColorSpace=F,le.toneMapping=O;return ie}function Ei(m){if(m.uniformsList===null){let E=m.currentProgram.getUniforms();m.uniformsList=js.seqWithValue(E.seq,m.uniforms)}return m.uniformsList}function hs(m,E){let B=Ge.get(m);B.outputColorSpace=E.outputColorSpace,B.batching=E.batching,B.batchingColor=E.batchingColor,B.instancing=E.instancing,B.instancingColor=E.instancingColor,B.instancingMorph=E.instancingMorph,B.skinning=E.skinning,B.morphTargets=E.morphTargets,B.morphNormals=E.morphNormals,B.morphColors=E.morphColors,B.morphTargetsCount=E.morphTargetsCount,B.numClippingPlanes=E.numClippingPlanes,B.numIntersection=E.numClipIntersection,B.vertexAlphas=E.vertexAlphas,B.vertexTangents=E.vertexTangents,B.toneMapping=E.toneMapping}function Aa(m,E,B,F,O){if(E.isScene!==!0)E=Ke;Ve.resetTextureUnits();let le=E.fog,he=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?E.environment:null,ie=k===null?P.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:it.workingColorSpace,fe=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ee=_t.get(F.envMap||he,fe),ke=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,et=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Pe=!!B.morphAttributes.position,nt=!!B.morphAttributes.normal,bt=!!B.morphAttributes.color,ft=_n;if(F.toneMapped){if(k===null||k.isXRRenderTarget===!0)ft=P.toneMapping}let ct=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Nt=ct!==void 0?ct.length:0,Le=Ge.get(F),At=A.state.lights;if(ve===!0){if(Ce===!0||m!==V){let St=m===V&&F.id===pe;W.setState(F,m,St)}}let ut=!1,jn=!1;if(F.version===Le.__version){if(Le.needsLights&&Le.lightsStateVersion!==At.state.version)ut=!0;else if(O.isBatchedMesh&&Le.batching===!1)ut=!0;else if(!O.isBatchedMesh&&Le.batching===!0)ut=!0;else if(O.isBatchedMesh&&Le.batchingColor===!0&&O._colorsTexture===null)ut=!0;else if(O.isBatchedMesh&&Le.batchingColor===!1&&O._colorsTexture!==null)ut=!0;else if(O.isInstancedMesh&&Le.instancing===!1)ut=!0;else if(!O.isInstancedMesh&&Le.instancing===!0)ut=!0;else if(O.isSkinnedMesh&&Le.skinning===!1)ut=!0;else if(!O.isSkinnedMesh&&Le.skinning===!0)ut=!0;else if(O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null)ut=!0;else if(O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null)ut=!0;else if(O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null)ut=!0;else if(O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null)ut=!0;else if(Le.envMap!==Ee)ut=!0;else if(F.fog===!0&&Le.fog!==le)ut=!0;else if(Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==W.numPlanes||Le.numIntersection!==W.numIntersection))ut=!0;else if(Le.vertexAlphas!==ke)ut=!0;else if(Le.vertexTangents!==et)ut=!0;else if(Le.morphTargets!==Pe)ut=!0;else if(Le.morphNormals!==nt)ut=!0;else if(Le.morphColors!==bt)ut=!0;else if(Le.morphTargetsCount!==Nt)ut=!0;else if(Le.numLightProbeGrids!==ir(A.state.lightProbeGridArray))ut=!0;else if(Le.outputColorSpace!==ie||Le.toneMapping!==ft)jn=!0}else ut=!0,Le.__version=F.version;let zt=Le.currentProgram;if(ut===!0||jn===!0){if(zt=jn===!0?wa(F,E,O,ie,ft):Bn(F,E,O),L&&F.isNodeMaterial)L.onUpdateProgram(F,zt,Le)}let sr=!1,zn=!1,ei=!1,ot=zt.getUniforms(),Ot=Le.uniforms;if(Se.useProgram(zt.program))sr=!0,zn=!0,ei=!0;if(F.id!==pe)pe=F.id,zn=!0;if(sr||V!==m){if(Se.buffers.depth.getReversed()&&m.reversedDepth!==!0)m._reversedDepth=!0,m.updateProjectionMatrix();ot.setValue(N,"projectionMatrix",m.projectionMatrix),ot.setValue(N,"viewMatrix",m.matrixWorldInverse);let Dt=ot.map.cameraPosition;if(Dt!==void 0)Dt.setValue(N,ze.setFromMatrixPosition(m.matrixWorld));if(vt.logarithmicDepthBuffer)ot.setValue(N,"logDepthBufFC",2/(Math.log(m.far+1)/Math.LN2));if(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)ot.setValue(N,"isOrthographic",m.isOrthographicCamera===!0);if(V!==m)V=m,zn=!0,ei=!0}if(Le.needsLights){if(At.state.sunShadowMap.length>0)ot.setValue(N,"sunShadowMap",At.state.sunShadowMap,Ve);if(At.state.directionalShadowMap.length>0)ot.setValue(N,"directionalShadowMap",At.state.directionalShadowMap,Ve);if(At.state.spotShadowMap.length>0)ot.setValue(N,"spotShadowMap",At.state.spotShadowMap,Ve);if(At.state.pointShadowMap.length>0)ot.setValue(N,"pointShadowMap",At.state.pointShadowMap,Ve)}if(O.isSkinnedMesh){ot.setOptional(N,O,"bindMatrix"),ot.setOptional(N,O,"bindMatrixInverse");let St=O.skeleton;if(St){if(St.boneTexture===null)St.computeBoneTexture();ot.setValue(N,"boneTexture",St.boneTexture,Ve)}}if(O.isBatchedMesh){if(ot.setOptional(N,O,"batchingTexture"),ot.setValue(N,"batchingTexture",O._matricesTexture,Ve),ot.setOptional(N,O,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",O._indirectTexture,Ve),ot.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null)ot.setValue(N,"batchingColorTexture",O._colorsTexture,Ve)}let on=B.morphAttributes;if(on.position!==void 0||on.normal!==void 0||on.color!==void 0)C.update(O,B,zt);if(zn||Le.receiveShadow!==O.receiveShadow)Le.receiveShadow=O.receiveShadow,ot.setValue(N,"receiveShadow",O.receiveShadow);if((F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&E.environment!==null)Ot.envMapIntensity.value=E.environmentIntensity;if(Ot.dfgLUT!==void 0)Ot.dfgLUT.value=v0();if(zn){if(ot.setValue(N,"toneMappingExposure",P.toneMappingExposure),Le.needsLights)D(Ot,ei);if(le&&F.fog===!0)ne.refreshFogUniforms(Ot,le);if(ne.refreshMaterialUniforms(Ot,F,Oe,Fe,A.state.transmissionRenderTarget[m.id]),Le.needsLights&&Le.numLightProbeGrids>0){let St=w,Dt=0;for(let Sn of A.state.lightProbeGridArray){if(Sn.texture===null)continue;St.textures[Dt]=Sn.texture,St.min[Dt]=Sn.boundingBox.min,St.max[Dt]=Sn.boundingBox.max,St.resolution[Dt]=Sn.resolution,Dt++}for(let Sn in St)St[Sn].length=Dt;Ot.probesSH.value=St.textures,Ot.probesMin.value=St.min,Ot.probesMax.value=St.max,Ot.probesResolution.value=St.resolution}js.upload(N,Ei(Le),Ot,Ve)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0)js.upload(N,Ei(Le),Ot,Ve),F.uniformsNeedUpdate=!1;if(F.isSpriteMaterial)ot.setValue(N,"center",O.center);if(ot.setValue(N,"modelViewMatrix",O.modelViewMatrix),ot.setValue(N,"normalMatrix",O.normalMatrix),ot.setValue(N,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){let St=F.uniformsGroups;for(let Dt=0,Sn=St.length;Dt<Sn;Dt++){let zl=St[Dt];oe.update(zl,zt),oe.bind(zl,zt)}}return zt}function D(m,E){m.ambientLightColor.needsUpdate=E,m.lightProbe.needsUpdate=E,m.sunLights.needsUpdate=E,m.sunLightShadows.needsUpdate=E,m.directionalLights.needsUpdate=E,m.directionalLightShadows.needsUpdate=E,m.pointLights.needsUpdate=E,m.pointLightShadows.needsUpdate=E,m.spotLights.needsUpdate=E,m.spotLightShadows.needsUpdate=E,m.rectAreaLights.needsUpdate=E,m.hemisphereLights.needsUpdate=E}function j(m){return m.isMeshLambertMaterial||m.isMeshToonMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isShadowMaterial||m.isShaderMaterial&&m.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(m,E,B){let F=Ge.get(m);if(F.__autoAllocateDepthBuffer=m.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1)F.__useRenderToTexture=!1;Ge.get(m.texture).__webglTexture=E,Ge.get(m.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:B,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(m,E){let B=Ge.get(m);B.__webglFramebuffer=E,B.__useDefaultFramebuffer=E===void 0},this.setRenderTarget=function(m,E=0,B=0){k=m,q=E,K=B;let F=null,O=!1,le=!1;if(m){let ie=Ge.get(m);if(ie.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(N.FRAMEBUFFER,ie.__webglFramebuffer),Z.copy(m.viewport),ae.copy(m.scissor),Ae=m.scissorTest,Se.viewport(Z),Se.scissor(ae),Se.setScissorTest(Ae),pe=-1;return}else if(ie.__webglFramebuffer===void 0)Ve.setupRenderTarget(m);else if(ie.__hasExternalTextures)Ve.rebindTextures(m,Ge.get(m.texture).__webglTexture,Ge.get(m.depthTexture).__webglTexture);else if(m.depthBuffer){let ke=m.depthTexture;if(ie.__boundDepthTexture!==ke){if(ke!==null&&Ge.has(ke)&&(m.width!==ke.image.width||m.height!==ke.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(m)}}let fe=m.texture;if(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)le=!0;let Ee=Ge.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget){if(Array.isArray(Ee[E]))F=Ee[E][B];else F=Ee[E];O=!0}else if(m.samples>0&&Ve.useMultisampledRTT(m)===!1)F=Ge.get(m).__webglMultisampledFramebuffer;else if(Array.isArray(Ee))F=Ee[B];else F=Ee;Z.copy(m.viewport),ae.copy(m.scissor),Ae=m.scissorTest}else Z.copy($e).multiplyScalar(Oe).floor(),ae.copy(He).multiplyScalar(Oe).floor(),Ae=st;if(B!==0)F=G;if(Se.bindFramebuffer(N.FRAMEBUFFER,F))Se.drawBuffers(m,F);if(Se.viewport(Z),Se.scissor(ae),Se.setScissorTest(Ae),O){let ie=Ge.get(m.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+E,ie.__webglTexture,B)}else if(le){let ie=E;for(let fe=0;fe<m.textures.length;fe++){let Ee=Ge.get(m.textures[fe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+fe,Ee.__webglTexture,B,ie)}}else if(m!==null&&B!==0){let ie=Ge.get(m.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ie.__webglTexture,B)}pe=-1};function re(m){let E=Ge.get(m);if(E.__readFormat!==m.format||E.__readType!==m.type)E.__readFormat=m.format,E.__readType=m.type,E.__formatReadable=vt.textureFormatReadable(m.format),E.__typeReadable=vt.textureTypeReadable(m.type);return E}if(this.readRenderTargetPixels=function(m,E,B,F,O,le,he,ie=0){if(!(m&&m.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Ge.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&he!==void 0){if(fe=fe[he],Array.isArray(fe))fe=fe[0]}if(fe){Se.bindFramebuffer(N.FRAMEBUFFER,fe);try{let Ee=m.textures[ie],{format:ke,type:et}=Ee;if(m.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+ie);let Pe=re(Ee);if(Pe.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(E>=0&&E<=m.width-F&&(B>=0&&B<=m.height-O))N.readPixels(E,B,F,O,de.convert(ke),de.convert(et),le)}finally{let Ee=k!==null?Ge.get(k).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(m,E,B,F,O,le,he,ie=0){if(!(m&&m.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Ge.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&he!==void 0){if(fe=fe[he],Array.isArray(fe))fe=fe[0]}if(fe)if(E>=0&&E<=m.width-F&&(B>=0&&B<=m.height-O)){Se.bindFramebuffer(N.FRAMEBUFFER,fe);let Ee=m.textures[ie],{format:ke,type:et}=Ee;if(m.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+ie);let Pe=re(Ee);if(Pe.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,nt),N.bufferData(N.PIXEL_PACK_BUFFER,le.byteLength,N.STREAM_READ),N.readPixels(E,B,F,O,de.convert(ke),de.convert(et),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let bt=k!==null?Ge.get(k).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,bt);let ft=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bh(N,ft,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,nt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,le),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(nt),N.deleteSync(ft),le}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(m,E=null,B=0){let F=Math.pow(2,-B),O=Math.floor(m.image.width*F),le=Math.floor(m.image.height*F),he=E!==null?E.x:0,ie=E!==null?E.y:0;Ve.setTexture2D(m,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,he,ie,O,le),Se.unbindTexture()},this.copyTextureToTexture=function(m,E,B=null,F=null,O=0,le=0){let he,ie,fe,Ee,ke,et,Pe,nt,bt,ft=m.isCompressedTexture?m.mipmaps[le]:m.image;if(B!==null)he=B.max.x-B.min.x,ie=B.max.y-B.min.y,fe=B.isBox3?B.max.z-B.min.z:1,Ee=B.min.x,ke=B.min.y,et=B.isBox3?B.min.z:0;else{let ot=Math.pow(2,-O);if(he=Math.floor(ft.width*ot),ie=Math.floor(ft.height*ot),m.isDataArrayTexture)fe=ft.depth;else if(m.isData3DTexture)fe=Math.floor(ft.depth*ot);else fe=1;Ee=0,ke=0,et=0}if(F!==null)Pe=F.x,nt=F.y,bt=F.z;else Pe=0,nt=0,bt=0;let ct=de.convert(E.format),Nt=de.convert(E.type),Le;if(E.isData3DTexture)Ve.setTexture3D(E,0),Le=N.TEXTURE_3D;else if(E.isDataArrayTexture||E.isCompressedArrayTexture)Ve.setTexture2DArray(E,0),Le=N.TEXTURE_2D_ARRAY;else Ve.setTexture2D(E,0),Le=N.TEXTURE_2D;Se.activeTexture(N.TEXTURE0),Se.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,E.flipY),Se.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),Se.pixelStorei(N.UNPACK_ALIGNMENT,E.unpackAlignment);let At=Se.getParameter(N.UNPACK_ROW_LENGTH),ut=Se.getParameter(N.UNPACK_IMAGE_HEIGHT),jn=Se.getParameter(N.UNPACK_SKIP_PIXELS),zt=Se.getParameter(N.UNPACK_SKIP_ROWS),sr=Se.getParameter(N.UNPACK_SKIP_IMAGES);Se.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),Se.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),Se.pixelStorei(N.UNPACK_SKIP_PIXELS,Ee),Se.pixelStorei(N.UNPACK_SKIP_ROWS,ke),Se.pixelStorei(N.UNPACK_SKIP_IMAGES,et);let zn=m.isDataArrayTexture||m.isData3DTexture,ei=E.isDataArrayTexture||E.isData3DTexture;if(m.isDepthTexture){let ot=Ge.get(m),Ot=Ge.get(E),on=Ge.get(ot.__renderTarget),St=Ge.get(Ot.__renderTarget);Se.bindFramebuffer(N.READ_FRAMEBUFFER,on.__webglFramebuffer),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Dt=0;Dt<fe;Dt++){if(zn)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ge.get(m).__webglTexture,O,et+Dt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ge.get(E).__webglTexture,le,bt+Dt);N.blitFramebuffer(Ee,ke,Ee+he,ke+ie,Pe,nt,Pe+he,nt+ie,N.DEPTH_BUFFER_BIT,N.NEAREST)}Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(O!==0||m.isRenderTargetTexture||Ge.has(m)){let ot=Ge.get(m),Ot=Ge.get(E);Se.bindFramebuffer(N.READ_FRAMEBUFFER,J),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,R);for(let on=0;on<fe;on++){if(zn)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ot.__webglTexture,O,et+on);else N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ot.__webglTexture,O);if(ei)N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.__webglTexture,le,bt+on);else N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ot.__webglTexture,le);if(O!==0)N.blitFramebuffer(Ee,ke,Ee+he,ke+ie,Pe,nt,Pe+he,nt+ie,N.COLOR_BUFFER_BIT,N.NEAREST);else if(ei)N.copyTexSubImage3D(Le,le,Pe,nt,bt+on,Ee,ke,he,ie);else N.copyTexSubImage2D(Le,le,Pe,nt,Ee,ke,he,ie)}Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(ei)if(m.isDataTexture||m.isData3DTexture)N.texSubImage3D(Le,le,Pe,nt,bt,he,ie,fe,ct,Nt,ft.data);else if(E.isCompressedArrayTexture)N.compressedTexSubImage3D(Le,le,Pe,nt,bt,he,ie,fe,ct,ft.data);else N.texSubImage3D(Le,le,Pe,nt,bt,he,ie,fe,ct,Nt,ft);else if(m.isDataTexture)N.texSubImage2D(N.TEXTURE_2D,le,Pe,nt,he,ie,ct,Nt,ft.data);else if(m.isCompressedTexture)N.compressedTexSubImage2D(N.TEXTURE_2D,le,Pe,nt,ft.width,ft.height,ct,ft.data);else N.texSubImage2D(N.TEXTURE_2D,le,Pe,nt,he,ie,ct,Nt,ft);if(Se.pixelStorei(N.UNPACK_ROW_LENGTH,At),Se.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut),Se.pixelStorei(N.UNPACK_SKIP_PIXELS,jn),Se.pixelStorei(N.UNPACK_SKIP_ROWS,zt),Se.pixelStorei(N.UNPACK_SKIP_IMAGES,sr),le===0&&E.generateMipmaps===!0&&E.mipmapsAutoUpdate===!0)N.generateMipmap(Le);Se.unbindTexture()},this.initRenderTarget=function(m){if(Ge.get(m).__webglFramebuffer===void 0)Ve.setupRenderTarget(m)},this.initTexture=function(m){if(m.isCubeTexture)Ve.setTextureCube(m,0);else if(m.isData3DTexture)Ve.setTexture3D(m,0);else if(m.isDataArrayTexture||m.isCompressedArrayTexture)Ve.setTexture2DArray(m,0);else Ve.setTexture2D(m,0);Se.unbindTexture()},this.resetState=function(){q=0,K=0,k=null,Se.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}var rs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class rn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var S0=new Js(-1,1,1,-1,0,1);class Eu extends wt{constructor(){super();this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}}var M0=new Eu;class vi{constructor(e){this._mesh=new dt(M0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,S0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Dl extends rn{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=Un.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new vi(this.material)}render(e,t,n){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=n.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ba extends rn{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;if(this.inverse)r=0,a=1;else r=1,a=0;if(s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Ul extends rn{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Fl{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ue);this._width=n.width,this._height=n.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dl(rs),this.copyPass.material.blending=Rn,this.timer=new pa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled===!1)continue;if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let a=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}if(ba!==void 0){if(r instanceof ba)n=!0;else if(r instanceof Ul)n=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ol extends rn{constructor(e,t,n=null,i=null,s=null){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Xe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,r;if(this.overrideMaterial!==null)r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(s);if(this.overrideMaterial!==null)this.scene.overrideMaterial=r;e.autoClear=i}}var Tu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class yi extends rn{constructor(e,t=1,n,i){super();this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(s,r,{type:Wt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let u=new Ft(s,r,{type:Wt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ft(s,r,{type:Wt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}let a=Tu;this.highPassUniforms=Un.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ue(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Un.clone(rs.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:rs.vertexShader,fragmentShader:rs.fragmentShader,premultipliedAlpha:!0,blending:gn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xe,this._oldClearAlpha=1,this._basic=new jt,this._fsQuad=new vi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),s)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[o].uniforms.direction.value=yi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=yi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[o];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(n),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(0.39894*Math.exp(-0.5*r*r/(n*n))/n);let i=[],s=[];for(let r=1;r<e;r+=2){let a=t[r],o=r+1<e?t[r+1]:0,l=a+o;i.push((r*a+(r+1)*o)/l),s.push(l)}return new Ct({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new ue(0.5,0.5)},direction:{value:new ue(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}yi.BlurDirectionX=new ue(1,0);yi.BlurDirectionY=new ue(0,1);var tr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Bl extends rn{constructor(){super();this.isOutputPass=!0,this.uniforms=Un.clone(tr.uniforms),this.material=new Ys({name:tr.name,uniforms:this.uniforms,vertexShader:tr.vertexShader,fragmentShader:tr.fragmentShader}),this._fsQuad=new vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){if(this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===mt)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===Is)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Ps)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===Ls)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Ns)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===Us)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Fs)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===Ds)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var Jt=document.getElementById("panel"),Ea=document.getElementById("msg"),Ta=document.getElementById("scene"),b0=document.getElementById("labels"),as;try{as=new Nl({canvas:Ta,antialias:!0,powerPreference:"high-performance"})}catch{Ea.textContent="เบราว์เซอร์นี้ไม่รองรับ WebGL"}if(as){let V=function(D,j="lotus",re="none"){let m=new un,{top:E,rx:B,rz:F,cx:O=0}=(pe[j]??pe.lotus)(m,D),le=new dt(w,A);le.position.set(O,E+0.175,0),m.add(le);let he=new di(new Kn({map:o,color:"#ffb14a",blending:gn,depthWrite:!1}));if(he.position.set(O,E+0.48,0),he.scale.setScalar(0.9),m.add(he),m.userData.flame=he,re==="flower"||re==="both")for(let ie=0;ie<8;ie++){let fe=ie/8*Math.PI*2,Ee=new dt(G.flower,q);Ee.position.set(Math.cos(fe)*B,E+0.02,Math.sin(fe)*F),m.add(Ee)}if(re==="incense"||re==="both")for(let ie=0;ie<3;ie++){let fe=ie/3*Math.PI*2+0.5,Ee=new un;Ee.position.set(O+Math.cos(fe)*0.12,E,Math.sin(fe)*0.12),Ee.rotation.set(Math.sin(fe)*0.35,0,-Math.cos(fe)*0.35),Ee.add(new dt(G.stick,K));let ke=new di(new Kn({map:o,color:"#ff3b1f",blending:gn,depthWrite:!1}));ke.position.y=0.75,ke.scale.setScalar(0.2),Ee.add(ke),m.add(Ee)}return m},tt=function(D,j,re){if(ae.has(D.id))return;ae.add(D.id);let m=V(D.color,D.model,D.deco);e.add(m);let E=document.createElement("div");E.className="lbl",E.textContent=D.name+": "+D.wish,b0.appendChild(E);let B={info:D,g:m,label:E,born:j?performance.now():-1e9,media:D.media?ze(D):null,x:re??(j?-4:(be(D.id,1)-0.5)*68),z:j?1:-3-be(D.id,2)*22,v:0.35+be(D.id,3)*0.45,ph:be(D.id,4)*6.28,spin:(be(D.id,5)-0.5)*0.15};if(m.userData.item=B,B.media)B.media.grp.userData.item=B;Z.push(B)},$e=function(D){Z.splice(Z.indexOf(D),1),ae.delete(D.info.id),e.remove(D.g),D.g.traverse((re)=>{if(re.isSprite)re.material.dispose()}),D.label?.remove();let j=D.media;if(j){if(e.remove(j.grp),j.video)j.video.pause(),j.video.removeAttribute("src"),j.video.load();j.pic.material.map?.dispose(),j.pic.material.dispose()}},st=function(){if(Z.length>=Q||Ie<=ae.size)return;let D=ce.findIndex((j)=>!ae.has(j.id));if(D<0){ce.length=0,He();return}tt(ce.splice(D,1)[0],!1,-34)},ze=function(D){let j=new un,re=new un,m=new dt(Re,new jt({color:"#222",side:Zt,toneMapped:!1}));return m.position.z=0.01,re.add(new dt(Ce,ve),m),j.add(re),j.visible=!1,e.add(j),{grp:j,inner:re,pic:m,kind:D.mediaKind,url:D.media,started:!1,video:null}},Ke=function(D){if(D.started=!0,D.kind==="image")new da().load(D.url,(j)=>{j.colorSpace=Gs,D.pic.material.map=j,D.pic.material.color.set("#fff"),D.pic.material.needsUpdate=!0,De(D,j.image.width,j.image.height)});else{let j=document.createElement("video");Object.assign(j,{muted:!0,loop:!0,playsInline:!0,crossOrigin:"anonymous",preload:"metadata",src:D.url}),j.addEventListener("loadedmetadata",()=>De(D,j.videoWidth,j.videoHeight));let re=new na(j);re.colorSpace=Gs,D.pic.material.map=re,D.pic.material.color.set("#fff"),D.pic.material.needsUpdate=!0,D.video=j}},Ue=function(){let D=ne(),j=z(ye.sunrise),re=z(ye.sunset),m=D>=j&&D<=re,E=Math.min(Math.abs(D-j),Math.abs(D-re)),B=m?Math.min(D-j,re-D):-E,F=_e(-25,35,B),O=Math.max(0,1-E/55),le=W[x.get("w")]??{},he={...ye,...le},ie=he.code>=95?1:he.code>=80?0.8:he.code>=61?0.7:he.code>=51?0.3:0,fe=Math.min(1,Math.max(he.cloud/100,ie?0.8:0,he.code===45||he.code===48?0.9:0));Object.assign(s,{dayK:F,cloud:fe,rain:ie,amp:Math.min(2.6,0.6+he.wind/12+(he.code>=95?0.5:0)),drift:0.6+he.wind/15});let Ee=oe("#02040f").lerp(oe("#2f6fd0"),F),ke=oe("#1b2a63").lerp(oe("#a9d6ff"),F),et=oe("#050d22").lerp(oe("#1c4f7a"),F);ke.lerp(oe("#ff8a50"),O*0.8),Ee.lerp(oe("#4a3a7a"),O*0.35);let Pe=Math.min(1,fe*0.75+ie*0.1);Ee.lerp(oe("#090b14").lerp(oe("#6f7f93"),F),Pe),ke.lerp(oe("#141a2e").lerp(oe("#aab4be"),F),Pe),et.lerp(oe("#060a12").lerp(oe("#2a3a48"),F),Pe*0.6),n.copy(Ee),t.copy(ke),i.copy(et);let nt=m?re-j:1440-(re-j),bt=m?D-j:D>re?D-re:D+1440-re,ft=Math.min(1,Math.max(0,bt/nt))*Math.PI;l.set(-Math.cos(ft)*0.7,0.07+Math.sin(ft)*0.55,-1).normalize(),h.position.copy(l).multiplyScalar(800),f.position.copy(h.position);let ct=m;h.material.color.set(ct?"#fff1b0":"#fff6cf"),f.material.color.set(ct?"#ffd27a":"#ffe9a8"),f.scale.setScalar(ct?300:170),h.material.opacity=1-fe*0.85,f.material.opacity=(ct?0.55:0.28)*(1-fe*0.8),p.material.uniforms.amp.value=s.amp,p.material.uniforms.glint.value=1-fe*0.85,_t.strength=0.35-F*0.17,Ge.opacity=1-F*0.85,xe.forEach((At)=>{At.visible=At.userData.i/xe.length<fe*1.05,At.material.color.set(oe("#2c3350").lerp(oe("#ffffff"),F).lerp(oe("#6a7380"),ie*0.6)),At.material.opacity=0.25+fe*0.4}),ge.visible=ie>0,de.setDrawRange(0,Math.floor(C*ie*2));let Nt=String(Math.floor(D/60)).padStart(2,"0"),Le=String(D%60).padStart(2,"0");Te.textContent=`\uD83D\uDCCD ลำพูน · ${Nt}:${Le} น. · ${he.temp!=null?Math.round(he.temp)+"°C · ":""}${ee(he.code)} · ลม ${Math.round(he.wind)} กม./ชม.`},Ne=function(D,j){for(let re of xe)if(re.position.x+=D*2.5*s.drift,re.position.x>380)re.position.x=-380;if(!s.rain)return;for(let re=0;re<Math.floor(C*s.rain);re++){let m=re*6+1;if(Y[m]-=28*D,Y[m+3]-=28*D,Y[m]<0)X(re),Y[m]=24+Math.random()*3,Y[m+3]=Y[m]-0.7}if(de.attributes.position.needsUpdate=!0,s.rain>0.9&&Math.random()<D*0.15)_t.strength=1.2;else _t.strength+=(0.35-s.dayK*0.17-_t.strength)*Math.min(1,D*8)},wa=function(D){let j=D.info.media,re=document.createElement(D.info.mediaKind==="video"?"video":"img");if(re.tagName==="VIDEO")Object.assign(re,{controls:!0,autoplay:!0,loop:!0,playsInline:!0,src:j});else Object.assign(re,{src:j,alt:D.info.wish});bi.replaceChildren(re),ir.textContent=`${D.info.name}: ${D.info.wish}`,On.hidden=!1};as.setPixelRatio(Math.min(devicePixelRatio,2));let e=new Kr,t=new Xe("#1b2a63"),n=new Xe("#02040f"),i=new Xe("#050d22"),s={amp:1,drift:1,dayK:0,cloud:0,rain:0};e.background=new Xe("#050818");let r=new qt(55,1,0.1,1200);r.position.set(0,2.4,9);let a=new U(0,1.6,-20),o=(()=>{let D=document.createElement("canvas");D.width=D.height=128;let j=D.getContext("2d"),re=j.createRadialGradient(64,64,0,64,64,64);return re.addColorStop(0,"rgba(255,255,255,1)"),re.addColorStop(0.25,"rgba(255,255,255,.55)"),re.addColorStop(1,"rgba(255,255,255,0)"),j.fillStyle=re,j.fillRect(0,0,128,128),new sa(D)})(),l=new U(0.28,0.32,-1).normalize();e.add(new dt(new pi(900,32,16),new Ct({side:kt,depthWrite:!1,uniforms:{top:{value:n},hor:{value:t}},vertexShader:"varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 p;uniform vec3 top,hor;void main(){float h=clamp(normalize(p).y,0.,1.);gl_FragColor=vec4(mix(hor,top,pow(h,.45)),1.);}"})));let c=new Float32Array(1200);for(let D=0;D<400;D++){let j=new U().randomDirection();j.y=Math.abs(j.y)*0.9+0.05,j.multiplyScalar(850),c.set([j.x,j.y,j.z],D*3)}let u=new wt().setAttribute("position",new Yt(c,3)),d=new Xs(u,new es({size:2.2,sizeAttenuation:!1,color:"#ffffff",transparent:!0,depthWrite:!1,fog:!1}));e.add(d);let h=new dt(new pi(28,32,16),new jt({color:"#fff6cf",fog:!1,transparent:!0}));h.position.copy(l).multiplyScalar(800),e.add(h);let f=new di(new Kn({map:o,color:"#ffe9a8",blending:gn,depthWrite:!1,opacity:0.28}));f.scale.setScalar(170),f.position.copy(h.position),e.add(f);let v="uniform float amp;float wave(vec2 p,float t){return (sin(p.x*.3+t*.8)*.08+sin(p.y*.5+t*1.1)*.06+sin((p.x+p.y)*.7+t*1.7)*.03)*amp;}",M=(D,j,re)=>(Math.sin(D*0.3+re*0.8)*0.08+Math.sin(j*0.5+re*1.1)*0.06+Math.sin((D+j)*0.7+re*1.7)*0.03)*s.amp,p=new dt(new Dn(1000,1000,220,220).rotateX(-Math.PI/2),new Ct({uniforms:{t:{value:0},amp:{value:1},glint:{value:1},moon:{value:l},hor:{value:t},deep:{value:i}},vertexShader:`${v}uniform float t;varying vec3 w;
        void main(){vec3 p=position;p.y+=wave(p.xz,t);vec4 wp=modelMatrix*vec4(p,1.);w=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;}`,fragmentShader:`${v}uniform float t,glint;uniform vec3 moon,hor,deep;varying vec3 w;
        void main(){
          vec2 e=vec2(.05,0.);
          vec3 n=normalize(vec3(wave(w.xz-e.xy,t)-wave(w.xz+e.xy,t),.1,wave(w.xz-e.yx,t)-wave(w.xz+e.yx,t)));
          vec3 v=normalize(cameraPosition-w);
          float f=pow(1.-max(dot(n,v),0.),3.);
          vec3 col=mix(deep,hor*1.4,f);
          vec3 r=reflect(-v,n);
          col+=vec3(1.,.92,.7)*pow(max(dot(r,moon),0.),400.)*1.4*glint;
          col+=vec3(.9,.8,.5)*pow(max(dot(r,moon),0.),30.)*.08*glint;
          float d=clamp(length(w-cameraPosition)/700.,0.,1.);
          gl_FragColor=vec4(mix(col,hor,d*d),1.);}`}));e.add(p);let _=new ns(0.13,0.55,4).translate(0,0.275,0),T=new xn(0.5,0.56,0.2,24),w=new xn(0.03,0.03,0.35,8),y=new jt({color:"#e9d79b"}),A=new jt({color:"#fff3d0"}),I={},g=(D)=>I[D]??=new jt({color:D}),S=(D,j)=>new is(D,{depth:j,bevelEnabled:!0,bevelSize:0.03,bevelThickness:0.03,bevelSegments:2}).rotateX(-Math.PI/2),P=new fi().moveTo(0,-0.55).bezierCurveTo(-0.95,0.1,-0.5,0.75,0,0.3).bezierCurveTo(0.5,0.75,0.95,0.1,0,-0.55),H=new fi;for(let D=0;D<10;D++){let j=D/10*Math.PI*2+Math.PI/2,re=D%2?0.32:0.7;H[D?"lineTo":"moveTo"](Math.cos(j)*re,Math.sin(j)*re)}H.closePath();let L=new fi().moveTo(-0.9,0.34).lineTo(-0.6,0).lineTo(0.6,0).lineTo(0.9,0.34).closePath(),G={heart:S(P,0.2),heartTop:S(P,0.1).scale(0.62,1,0.62).translate(0,0.23,0),star:S(H,0.2),starTop:S(H,0.1).scale(0.6,1,0.6).translate(0,0.23,0),hull:new is(L,{depth:0.5,bevelEnabled:!1}).translate(0,0,-0.25),leaf:new ns(0.17,0.3,4).translate(0,0.15,0),flower:new pi(0.075,10,8),stick:new xn(0.012,0.012,0.75,6).translate(0,0.375,0),sail:new wt().setFromPoints([[0,0,0],[0.55,0,0],[0,0.85,0]].map((D)=>new U(...D))),mast:new xn(0.015,0.015,0.9,6).translate(0,0.45,0)},J=(D,j)=>new jt({color:D,...j}),R=J("#3f9d4a"),q=J("#ffb703"),K=J("#8b5a2b"),k=J("#fff3d0",{side:Zt}),pe={lotus(D,j){D.add(new dt(T,y));for(let[re,m,E,B,F]of[[14,0.42,0.9,0.08,1],[10,0.27,0.35,0.16,0.85]])for(let O=0;O<re;O++){let le=O/re*Math.PI*2+(E>0.5?0:0.3),he=new dt(_,g(j));he.position.set(Math.cos(le)*m,B,Math.sin(le)*m),he.rotation.set(0,-le,0),he.rotateZ(-E),he.scale.set(1,F,1),D.add(he)}return{top:0.1,rx:0.62,rz:0.62}},banana(D,j){D.add(new dt(new xn(0.58,0.62,0.2,28),y));for(let[re,m,E,B]of[[18,0.52,R,0.1],[11,0.34,g(j),0.16]])for(let F=0;F<re;F++){let O=F/re*Math.PI*2,le=new dt(G.leaf,E);le.position.set(Math.cos(O)*m,B,Math.sin(O)*m),le.rotation.set(0,-O,0),le.rotateZ(-0.55),D.add(le)}return{top:0.1,rx:0.7,rz:0.7}},heart(D,j){return D.add(new dt(G.heart,J(j))),D.add(new dt(G.heartTop,J(new Xe(j).lerp(new Xe("#fff"),0.5)))),{top:0.32,rx:0.55,rz:0.4}},star(D,j){return D.add(new dt(G.star,J(j))),D.add(new dt(G.starTop,J(new Xe(j).lerp(new Xe("#fff"),0.5)))),{top:0.32,rx:0.5,rz:0.5}},boat(D,j){D.add(new dt(G.hull,J(j)));let re=new dt(G.mast,K);re.position.set(-0.35,0.34,0),D.add(re);let m=new dt(G.sail,k);return m.position.set(-0.33,0.45,0),D.add(m),{top:0.34,rx:0.5,rz:0.2,cx:0.25}}},Z=[],ae=new Set,Ae=new Set,Q=60,ce=[],Ie=0,Fe=!1,Oe=0,be=(D,j)=>{let re=Math.sin(D*127.1+j*311.7)*43758.5453;return re-Math.floor(re)};async function He(){if(Fe)return;Fe=!0;try{ce.push(...await(await fetch("/api/krathongs?random=20")).json())}catch{}Fe=!1}let te=1.8,me=1.3,ve=new jt({color:"#fff3d0",side:Zt}),Ce=new Dn(te+0.12,me+0.12),Re=new Dn(te,me),De=(D,j,re)=>{let m=j/re,E=te/me;D.inner.scale.set(m>E?1:m/E,m>E?E/m:1,1)},Qe=3,at=22,N=34,xt=60,Ye=new Float32Array(xt*3),vt=new Float32Array(xt),Se=(D)=>{Ye.set([(Math.random()-0.5)*160,4+Math.random()*20,-40-Math.random()*120],D*3),vt[D]=0.6+Math.random()*0.8};for(let D=0;D<xt;D++)Se(D),Ye[D*3+1]=Math.random()*60;let lt=new wt().setAttribute("position",new Yt(Ye,3)),Ge=new es({map:o,size:3.5,color:"#c97a2c",blending:gn,transparent:!0,depthWrite:!1});e.add(new Xs(lt,Ge));let Ve=new Fl(as);Ve.addPass(new Ol(e,r));let _t=new yi(new ue(1,1),0.35,0.5,0.82);Ve.addPass(_t),Ve.addPass(new Bl);let b=()=>{let D=innerWidth,j=innerHeight;as.setSize(D,j,!1),Ve.setSize(D,j),r.aspect=D/j,r.updateProjectionMatrix()};addEventListener("resize",b),b();let x=new URLSearchParams(location.search),z=(D)=>{let[j,re]=D.split("T").pop().split(":");return+j*60+ +re},se=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Bangkok",hour:"2-digit",minute:"2-digit",hour12:!1}),ne=()=>x.get("t")?z(x.get("t")):z(se.format(new Date)),_e=(D,j,re)=>{let m=Math.min(1,Math.max(0,(re-D)/(j-D)));return m*m*(3-2*m)},ye={temp:null,code:0,cloud:20,wind:6,sunrise:"06:15",sunset:"17:50"},W={clear:{code:0,cloud:5},cloud:{code:3,cloud:90},rain:{code:63,cloud:95},storm:{code:95,cloud:100,wind:30}},ee=(D)=>D===0?"ท้องฟ้าแจ่มใส":D<3?"มีเมฆบางส่วน":D===3?"เมฆมาก":D<50?"หมอก":D<60?"ฝนปรอย":D<80?"ฝนตก":D<90?"ฝนระลอก":"พายุฝนฟ้าคะนอง",xe=Array.from({length:14},(D,j)=>{let re=new di(new Kn({map:o,transparent:!0,depthWrite:!1,fog:!1}));return re.scale.set(180+Math.random()*160,70+Math.random()*40,1),re.position.set((Math.random()-0.5)*700,70+Math.random()*90,-180-Math.random()*300),re.userData.i=j,e.add(re),re}),C=1400,Y=new Float32Array(C*6),X=(D)=>{let j=(Math.random()-0.5)*60,re=Math.random()*26,m=-30+Math.random()*40;Y.set([j,re,m,j-0.1,re-0.7,m],D*6)};for(let D=0;D<C;D++)X(D);let de=new wt().setAttribute("position",new Yt(Y,3)),ge=new ta(de,new Vs({color:"#aebbd8",transparent:!0,opacity:0.4}));ge.frustumCulled=!1,e.add(ge);let oe=(D)=>new Xe(D),Te=document.getElementById("weather");Ue(),setInterval(Ue,60000);let Be=async()=>{try{let D=await(await fetch("/api/weather")).json();if(!D.error)ye=D,Ue()}catch{}};Be(),setInterval(Be,600000);let Ze={x:0,y:0};addEventListener("pointermove",(D)=>{Ze.x=D.clientX/innerWidth-0.5,Ze.y=D.clientY/innerHeight-0.5});let Me=new U,ht=new ga;as.setAnimationLoop(()=>{let D=Math.min(ht.getDelta(),0.1),j=ht.elapsedTime,re=performance.now();p.material.uniforms.t.value=j,r.position.x+=(Ze.x*3-r.position.x)*0.03,r.position.y+=(2.4-Ze.y-r.position.y)*0.03,r.lookAt(a),d.material.opacity=(0.75+Math.sin(j*1.3)*0.25)*(1-s.dayK)*(1-s.cloud),Ne(D,j);let m=0;for(let E=Z.length-1;E>=0;E--)if(Z[E].retire)$e(Z[E]);if(Oe+=D,Oe>2.5)Oe=0,st();for(let E of Z){if(E.x+=E.v*s.drift*D,E.x>34)if(Ie>Z.length)E.retire=!0;else E.x=-34,E.z=-3-Math.random()*22;let B=(re-E.born)/1000,F=B<1.2?1-B/1.2:0,O=M(E.x,E.z,j)+0.08+F*F*5;E.g.position.set(E.x,O,E.z),E.g.rotation.set(Math.sin(j*1.1+E.ph)*0.06,E.g.rotation.y+E.spin*D,Math.cos(j*0.9+E.ph)*0.06),E.g.scale.setScalar(B<1.2?0.4+0.6*(B/1.2):1);let le=1+Math.sin(j*17+E.ph)*0.12+Math.sin(j*29+E.ph*2)*0.07;E.g.userData.flame.scale.set(0.9*le,0.9*(2-le),1);let he=r.position.distanceTo(E.g.position),ie=E.media;if(ie){let Ee=he<N;if(Ee&&!ie.started)Ke(ie);if(ie.grp.visible=Ee,Ee)ie.grp.position.set(E.x,O+2.1,E.z),ie.grp.quaternion.copy(r.quaternion),ie.grp.scale.setScalar(Math.min(1,B/1.2+0.3));if(ie.video){if(Ee&&he<at&&m<Qe){if(m++,ie.video.paused)ie.video.play().catch(()=>{})}else if(!ie.video.paused)ie.video.pause()}}Me.set(E.x,O+(ie?3:1.3),E.z).project(r);let fe=Me.z<1&&Math.abs(Me.x)<1.1&&he<38;if(E.label)E.label.style.opacity=fe?Math.min(1,(38-he)/14):0;if(E.label&&fe)E.label.style.transform=`translate(-50%,-100%) translate(${(Me.x*0.5+0.5)*innerWidth}px,${(-Me.y*0.5+0.5)*innerHeight}px)`}for(let E=0;E<xt;E++)if(Ye[E*3+1]+=vt[E]*D*1.6,Ye[E*3]+=Math.sin(j*0.3+E)*D*0.5,Ye[E*3+1]>70)Se(E);lt.attributes.position.needsUpdate=!0,Ve.render()});let Tt=async(D)=>{try{for(let j of(await(await fetch("/api/krathongs")).json()).reverse()){if(Ae.has(j.id))continue;Ae.add(j.id),tt(j,D)}}catch{}},an=document.getElementById("count"),Fn=(D)=>D.toLocaleString("th-TH"),nr=async()=>{try{let D=await(await fetch("/api/stats")).json();Ie=D.krathongs,an.textContent=`\uD83E\uDE94 ลอยแล้ว ${Fn(D.krathongs)} กระทง${D.krathongs>Q?` (สุ่มแสดงทีละ ${Q})`:""} · \uD83D\uDC40 วันนี้ ${Fn(D.visitorsToday)} คน · เข้าชมรวม ${Fn(D.views)} ครั้ง · \uD83D\uDFE2 ออนไลน์ ${Fn(D.online)}`}catch{}};fetch("/api/visit",{method:"POST"}).catch(()=>{}).finally(nr),Tt(!1),setInterval(()=>{Tt(!0),nr()},1e4);let os=document.getElementById("show"),Si=(D)=>{Jt.hidden=!D,os.hidden=D};document.getElementById("hide").onclick=()=>Si(!1),os.onclick=()=>Si(!0);let fn=new ma,Mi=new ue,ls=(D)=>{Mi.set(D.clientX/innerWidth*2-1,-(D.clientY/innerHeight)*2+1),fn.setFromCamera(Mi,r);let j=Z.filter((re)=>re.media&&re.media.grp.visible).flatMap((re)=>[re.media.grp,re.g]);for(let re of fn.intersectObjects(j,!0))for(let m=re.object;m;m=m.parent)if(m.userData.item)return m.userData.item},cs=0;addEventListener("pointermove",(D)=>{if(D.target!==Ta||performance.now()-cs<60)return;cs=performance.now(),Ta.style.cursor=ls(D)?"pointer":""});let On=document.getElementById("lightbox"),bi=document.getElementById("lbBody"),ir=document.getElementById("lbCap"),Bn=()=>{On.hidden=!0,bi.replaceChildren()};Ta.addEventListener("click",(D)=>{let j=ls(D);if(j)wa(j)}),On.addEventListener("click",(D)=>{if(D.target!==bi.firstChild)Bn()}),addEventListener("keydown",(D)=>{if(D.key==="Escape")Bn();else if((D.key==="h"||D.key==="H")&&!/INPUT|TEXTAREA/.test(document.activeElement?.tagName))Si(Jt.hidden)}),Jt.onsubmit=async(D)=>{D.preventDefault();let j=Jt.querySelector("button:not([type=button])");j.disabled=!0,Ea.textContent="";try{let re=new FormData;for(let[F,O]of[["name",Jt.name.value],["wish",Jt.wish.value],["color",Jt.c.value],["model",Jt.model.value],["deco",Jt.deco.value]])re.append(F,O);let m=Jt.media.files[0];if(m)re.append("media",await Aa(m));let E=await fetch("/api/krathongs",{method:"POST",body:re});if(!E.ok)throw Error((await E.json().catch(()=>({}))).error);let B=await E.json();Ae.add(B.id),tt(B,!0),Jt.wish.value="",Jt.media.value="",Ei.textContent=hs}catch(re){Ea.textContent=re?.message||"ลอยไม่สำเร็จ ลองใหม่อีกครั้ง"}j.disabled=!1};let Ei=document.getElementById("fileName"),hs=Ei.textContent;Jt.media.onchange=()=>{Ei.textContent=Jt.media.files[0]?.name.slice(0,28)||hs,Ea.textContent=""};async function Aa(D){if(D.type.startsWith("video/")){if(D.size>10485760)throw Error("วิดีโอใหญ่เกิน 10 MB");return D}let j;try{j=await createImageBitmap(D,{imageOrientation:"from-image"})}catch{throw Error("ไฟล์นี้ไม่ใช่รูป/วิดีโอที่รองรับ (PNG, JPEG, WebP, GIF, MP4, WebM)")}let re=Math.min(1,1280/Math.max(j.width,j.height)),m=document.createElement("canvas");m.width=Math.round(j.width*re),m.height=Math.round(j.height*re),m.getContext("2d").drawImage(j,0,0,m.width,m.height);let E=await new Promise((B)=>m.toBlob(B,"image/webp",0.85))??await new Promise((B)=>m.toBlob(B,"image/jpeg",0.85));return new File([E],"photo",{type:E.type})}}
