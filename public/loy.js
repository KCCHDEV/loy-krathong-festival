var cl="187";var hl=0,ea=1,ul=2;var Ki=1,dl=2,Ei=3,wi=0,Pt=1,rn=2,xn=0,Qi=1,vn=2,ta=3,na=4,fl=5;var Ai=100,pl=101,ml=102,gl=103,_l=104,xl=200,vl=201,yl=202,Sl=203,Ml=204,bl=205,Tl=206,El=207,wl=208,Al=209,Rl=210,Cl=211,Il=212,Pl=213,Ll=214,Nl=0,Dl=1,Ul=2,ia=3,Fl=4,Ol=5,Bl=6,zl=7,Gl=0,kl=1,Hl=2,an=0,ji=1,es=2,ts=3,ns=4,is=5,ss=6,rs=7;var as=301,Ri=302,$s=303,Ks=304,Wl=1000,Qs=1001,Vl=1002,Nn=1003,Xl=1004;var os=1005;var qt=1006,js=1007;var Dn=1008;var tn=1009,ql=1010,Yl=1011,ls=1012,sa=1013,Un=1014,yn=1015,Lt=1016,ra=1017,aa=1018,qn=1020,Zl=35902,Jl=35899,$l=1021,Kl=1022,Sn=1023,Ci=1026,Fn=1027,Ql=1028,oa=1029,Yn=1030,la=1031;var ca=1033,er=33776,tr=33777,nr=33778,ir=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,_a=37488,xa=37489,sr=37490,va=37491,ya=37808,Sa=37809,Ma=37810,ba=37811,Ta=37812,Ea=37813,wa=37814,Aa=37815,Ra=37816,Ca=37817,Ia=37818,Pa=37819,La=37820,Na=37821,Da=36492,Ua=36494,Fa=36495,Oa=36283,Ba=36284,rr=36285,za=36286;var Ga=0,jl=1,Zn="",ec="srgb",ka="srgb-linear",Ha="linear",Ke="srgb";var tc=512,nc=513,ic=514,Wa=515,sc=516,rc=517,Va=518,Xa=519;var qa="300 es",Ya=2000;function uh(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function dh(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Zi(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ac(){let e=Zi("canvas");return e.style.display="block",e}var Oo={},bi=null;function Ji(...e){let t="THREE."+e.shift();if(bi)bi("log",t,...e);else console.log(t,...e)}function oc(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let n=e[1];if(n&&n.isStackTrace)e[0]+=" "+n.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Pe(...e){e=oc(e);let t="THREE."+e.shift();if(bi)bi("warn",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.warn(n.getError(t));else console.warn(t,...e)}}function Le(...e){e=oc(e);let t="THREE."+e.shift();if(bi)bi("error",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.error(n.getError(t));else console.error(t,...e)}}function Yi(...e){let t=e.join(" ");if(t in Oo)return;Oo[t]=!0,Pe(...e)}function lc(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var cc={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class Mn{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[e]===void 0)n[e]=[];if(n[e].indexOf(t)===-1)n[e].push(t)}hasEventListener(e,t){let n=this._listeners;if(n===void 0)return!1;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);if(s!==-1)i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}var Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pr=Math.PI/180,Js=180/Math.PI;function Jn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[e&255]+Rt[e>>8&255]+Rt[e>>16&255]+Rt[e>>24&255]+"-"+Rt[t&255]+Rt[t>>8&255]+"-"+Rt[t>>16&15|64]+Rt[t>>24&255]+"-"+Rt[n&63|128]+Rt[n>>8&255]+"-"+Rt[n>>16&255]+Rt[n>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Ve(e,t,n){return Math.max(t,Math.min(n,e))}function fh(e,t){return(e%t+t)%t}function Lr(e,t,n){return(1-n)*e+n*t}function hc(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function ar(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uc(e,t){if(t.constructor===Float32Array)return e;let n=ar(t);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function dc(e,t){if(t.constructor===Float32Array)return e;let n=ar(t);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}class Ce{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],f=n[i+3],d=s[r+0],h=s[r+1],g=s[r+2],y=s[r+3];if(f!==y||o!==d||l!==h||c!==g){let b=o*d+l*h+c*g+f*y;if(b<0)d=-d,h=-h,g=-g,y=-y,b=-b;let u=1-a;if(b<0.9995){let m=Math.acos(b),T=Math.sin(m);u=Math.sin(u*m)/T,a=Math.sin(a*m)/T,o=o*u+d*a,l=l*u+h*a,c=c*u+g*a,f=f*u+y*a}else{o=o*u+d*a,l=l*u+h*a,c=c*u+g*a,f=f*u+y*a;let m=1/Math.sqrt(o*o+l*l+c*c+f*f);o*=m,l*=m,c*=m,f*=m}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],f=s[r],d=s[r+1],h=s[r+2],g=s[r+3];return e[t]=a*g+c*f+o*h-l*d,e[t+1]=o*g+c*d+l*f-a*h,e[t+2]=l*g+c*h+a*d-o*f,e[t+3]=c*g-a*f-o*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:n,_y:i,_z:s,_order:r}=e,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),f=a(s/2),d=o(n/2),h=o(i/2),g=o(s/2);switch(r){case"XYZ":this._x=d*c*f+l*h*g,this._y=l*h*f-d*c*g,this._z=l*c*g+d*h*f,this._w=l*c*f-d*h*g;break;case"YXZ":this._x=d*c*f+l*h*g,this._y=l*h*f-d*c*g,this._z=l*c*g-d*h*f,this._w=l*c*f+d*h*g;break;case"ZXY":this._x=d*c*f-l*h*g,this._y=l*h*f+d*c*g,this._z=l*c*g+d*h*f,this._w=l*c*f-d*h*g;break;case"ZYX":this._x=d*c*f-l*h*g,this._y=l*h*f+d*c*g,this._z=l*c*g-d*h*f,this._w=l*c*f+d*h*g;break;case"YZX":this._x=d*c*f+l*h*g,this._y=l*h*f+d*c*g,this._z=l*c*g-d*h*f,this._w=l*c*f-d*h*g;break;case"XZY":this._x=d*c*f-l*h*g,this._y=l*h*f-d*c*g,this._z=l*c*g+d*h*f,this._w=l*c*f+d*h*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],f=t[10],d=n+a+f;if(d>0){let h=0.5/Math.sqrt(d+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>f){let h=2*Math.sqrt(1+n-a-f);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>f){let h=2*Math.sqrt(1+a-n-f);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+f-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;if(n<0.00000001)if(n=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=n;else this._x=0,this._y=-e.z,this._z=e.y,this._w=n;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,{_x:a,_y:o,_z:l,_w:c}=t;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,a=this.dot(e);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-t;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+s*t,this._w=this._w*o+r*t,this._onChangeCallback()}else this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+s*t,this._w=this._w*o+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){if(n===void 0)n=this.z;return this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=e,l=2*(r*i-a*n),c=2*(a*t-s*i),f=2*(s*n-r*t);return this.x=t+o*l+r*f-a*c,this.y=n+o*c+a*l-s*f,this.z=i+o*f+s*c-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:n,y:i,z:s}=e,{x:r,y:a,z:o}=t;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nr.copy(this).projectOnVector(e),this.sub(Nr)}reflect(e){return this.sub(Nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Nr=new D,Bo=new bn;class Fe{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l)}set(e,t,n,i,s,r,a,o,l){let c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],f=n[7],d=n[2],h=n[5],g=n[8],y=i[0],b=i[3],u=i[6],m=i[1],T=i[4],E=i[7],S=i[2],w=i[5],C=i[8];return s[0]=r*y+a*m+o*S,s[3]=r*b+a*T+o*w,s[6]=r*u+a*E+o*C,s[1]=l*y+c*m+f*S,s[4]=l*b+c*T+f*w,s[7]=l*u+c*E+f*C,s[2]=d*y+h*m+g*S,s[5]=d*b+h*T+g*w,s[8]=d*u+h*E+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*r*c-t*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],f=c*r-a*l,d=a*o-c*s,h=l*s-r*o,g=t*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(i*l-c*n)*y,e[2]=(a*n-i*r)*y,e[3]=d*y,e[4]=(c*t-i*o)*y,e[5]=(i*s-a*t)*y,e[6]=h*y,e[7]=(n*o-l*t)*y,e[8]=(r*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+e,-i*l,i*o,-i*(-l*r+o*a)+a+t,0,0,1),this}scale(e,t){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dr.makeScale(e,t)),this}rotate(e){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dr.makeRotation(-e)),this}translate(e,t){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dr.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var Dr=new Fe,zo=new Fe().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Go=new Fe().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function ph(){let e={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return e.define({["srgb-linear"]:{primaries:t,whitePoint:i,transfer:"linear",toXYZ:zo,fromXYZ:Go,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:t,whitePoint:i,transfer:"srgb",toXYZ:zo,fromXYZ:Go,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),e}var ke=ph();function _n(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Mi(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var ri;class Za{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{if(ri===void 0)ri=Zi("canvas");ri.width=e.width,ri.height=e.height;let i=ri.getContext("2d");if(e instanceof ImageData)i.putImageData(e,0,0);else i.drawImage(e,0,0,e.width,e.height);n=ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=_n(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[n]=Math.floor(_n(t[n]/255)*255);else t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var mh=0;class cs{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(Ur(i[r].image));else s.push(Ur(i[r]))}else s=Ur(i);n.url=s}if(!t)e.images[this.uuid]=n;return n}}function Ur(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Za.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return Pe("Texture: Unable to serialize Texture."),{}}var gh=0,Fr=new D;class Mt extends Mn{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Mt.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Jn(),this.name="",this.source=new cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fr).x}get height(){return this.source.getSize(Fr).y}get depth(){return this.source.getSize(Fr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!t)e.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=300;Mt.DEFAULT_ANISOTROPY=1;class rt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,r=0.01,a=0.1,o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],h=o[5],g=o[9],y=o[2],b=o[6],u=o[10];if(Math.abs(c-d)<0.01&&Math.abs(f-y)<0.01&&Math.abs(g-b)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(f+y)<0.1&&Math.abs(g+b)<0.1&&Math.abs(l+h+u-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,E=(h+1)/2,S=(u+1)/2,w=(c+d)/4,C=(f+y)/4,p=(g+b)/4;if(T>E&&T>S)if(T<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(T),i=w/n,s=C/n;else if(E>S)if(E<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(E),n=w/i,s=p/i;else if(S<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(S),n=C/s,i=p/s;return this.set(n,i,s,t),this}let m=Math.sqrt((b-g)*(b-g)+(f-y)*(f-y)+(d-c)*(d-c));if(Math.abs(m)<0.001)m=1;return this.x=(b-g)/m,this.y=(f-y)/m,this.z=(d-c)/m,this.w=Math.acos((l+h+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ja extends Mn{constructor(e=1,t=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Mt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new cs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vt extends Ja{constructor(e=1,t=1,n={}){super(e,t,n);this.isWebGLRenderTarget=!0}}class or extends Mt{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $a extends Mt{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class it{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,r,a,o,l,c,f,d,h,g,y,b){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l,c,f,d,h,g,y,b)}set(e,t,n,i,s,r,a,o,l,c,f,d,h,g,y,b){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=s,u[5]=r,u[9]=a,u[13]=o,u[2]=l,u[6]=c,u[10]=f,u[14]=d,u[3]=h,u[7]=g,u[11]=y,u[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ai.setFromMatrixColumn(e,0).length(),s=1/ai.setFromMatrixColumn(e,1).length(),r=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:n,y:i,z:s}=e,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=r*c,h=r*f,g=a*c,y=a*f;t[0]=o*c,t[4]=-o*f,t[8]=l,t[1]=h+g*l,t[5]=d-y*l,t[9]=-a*o,t[2]=y-d*l,t[6]=g+h*l,t[10]=r*o}else if(e.order==="YXZ"){let d=o*c,h=o*f,g=l*c,y=l*f;t[0]=d+y*a,t[4]=g*a-h,t[8]=r*l,t[1]=r*f,t[5]=r*c,t[9]=-a,t[2]=h*a-g,t[6]=y+d*a,t[10]=r*o}else if(e.order==="ZXY"){let d=o*c,h=o*f,g=l*c,y=l*f;t[0]=d-y*a,t[4]=-r*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=r*c,t[9]=y-d*a,t[2]=-r*l,t[6]=a,t[10]=r*o}else if(e.order==="ZYX"){let d=r*c,h=r*f,g=a*c,y=a*f;t[0]=o*c,t[4]=g*l-h,t[8]=d*l+y,t[1]=o*f,t[5]=y*l+d,t[9]=h*l-g,t[2]=-l,t[6]=a*o,t[10]=r*o}else if(e.order==="YZX"){let d=r*o,h=r*l,g=a*o,y=a*l;t[0]=o*c,t[4]=y-d*f,t[8]=g*f+h,t[1]=f,t[5]=r*c,t[9]=-a*c,t[2]=-l*c,t[6]=h*f+g,t[10]=d-y*f}else if(e.order==="XZY"){let d=r*o,h=r*l,g=a*o,y=a*l;t[0]=o*c,t[4]=-f,t[8]=l*c,t[1]=d*f+y,t[5]=r*c,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*c,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_h,e,xh)}lookAt(e,t,n){let i=this.elements;if(kt.subVectors(e,t),kt.lengthSq()===0)kt.z=1;if(kt.normalize(),wn.crossVectors(n,kt),wn.lengthSq()===0){if(Math.abs(n.z)===1)kt.x+=0.0001;else kt.z+=0.0001;kt.normalize(),wn.crossVectors(n,kt)}return wn.normalize(),Ts.crossVectors(kt,wn),i[0]=wn.x,i[4]=Ts.x,i[8]=kt.x,i[1]=wn.y,i[5]=Ts.y,i[9]=kt.y,i[2]=wn.z,i[6]=Ts.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],f=n[5],d=n[9],h=n[13],g=n[2],y=n[6],b=n[10],u=n[14],m=n[3],T=n[7],E=n[11],S=n[15],w=i[0],C=i[4],p=i[8],v=i[12],L=i[1],G=i[5],I=i[9],z=i[13],Q=i[2],A=i[6],Z=i[10],j=i[14],O=i[3],re=i[7],X=i[11],ee=i[15];return s[0]=r*w+a*L+o*Q+l*O,s[4]=r*C+a*G+o*A+l*re,s[8]=r*p+a*I+o*Z+l*X,s[12]=r*v+a*z+o*j+l*ee,s[1]=c*w+f*L+d*Q+h*O,s[5]=c*C+f*G+d*A+h*re,s[9]=c*p+f*I+d*Z+h*X,s[13]=c*v+f*z+d*j+h*ee,s[2]=g*w+y*L+b*Q+u*O,s[6]=g*C+y*G+b*A+u*re,s[10]=g*p+y*I+b*Z+u*X,s[14]=g*v+y*z+b*j+u*ee,s[3]=m*w+T*L+E*Q+S*O,s[7]=m*C+T*G+E*A+S*re,s[11]=m*p+T*I+E*Z+S*X,s[15]=m*v+T*z+E*j+S*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],o=e[9],l=e[13],c=e[2],f=e[6],d=e[10],h=e[14],g=e[3],y=e[7],b=e[11],u=e[15],m=o*h-l*d,T=a*h-l*f,E=a*d-o*f,S=r*h-l*c,w=r*d-o*c,C=r*f-a*c;return t*(y*m-b*T+u*E)-n*(g*m-b*S+u*w)+i*(g*T-y*S+u*C)-s*(g*E-y*w+b*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],a=e[9],o=e[2],l=e[6],c=e[10];return t*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;if(e.isVector3)i[12]=e.x,i[13]=e.y,i[14]=e.z;else i[12]=e,i[13]=t,i[14]=n;return this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],f=e[9],d=e[10],h=e[11],g=e[12],y=e[13],b=e[14],u=e[15],m=t*a-n*r,T=t*o-i*r,E=t*l-s*r,S=n*o-i*a,w=n*l-s*a,C=i*l-s*o,p=c*y-f*g,v=c*b-d*g,L=c*u-h*g,G=f*b-d*y,I=f*u-h*y,z=d*u-h*b,Q=m*z-T*I+E*G+S*L-w*v+C*p;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/Q;return e[0]=(a*z-o*I+l*G)*A,e[1]=(i*I-n*z-s*G)*A,e[2]=(y*C-b*w+u*S)*A,e[3]=(d*w-f*C-h*S)*A,e[4]=(o*L-r*z-l*v)*A,e[5]=(t*z-i*L+s*v)*A,e[6]=(b*E-g*C-u*T)*A,e[7]=(c*C-d*E+h*T)*A,e[8]=(r*I-a*L+l*p)*A,e[9]=(n*L-t*I-s*p)*A,e[10]=(g*w-y*E+u*m)*A,e[11]=(f*E-c*w-h*m)*A,e[12]=(a*v-r*G-o*p)*A,e[13]=(t*G-n*v+i*p)*A,e[14]=(y*T-g*S-b*m)*A,e[15]=(c*S-f*T+d*m)*A,this}scale(e){let t=this.elements,{x:n,y:i,z:s}=e;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,{x:r,y:a,z:o}=e,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=t,l=s+s,c=r+r,f=a+a,d=s*l,h=s*c,g=s*f,y=r*c,b=r*f,u=a*f,m=o*l,T=o*c,E=o*f,{x:S,y:w,z:C}=n;return i[0]=(1-(y+u))*S,i[1]=(h+E)*S,i[2]=(g-T)*S,i[3]=0,i[4]=(h-E)*w,i[5]=(1-(d+u))*w,i[6]=(b+m)*w,i[7]=0,i[8]=(g+T)*C,i[9]=(b-m)*C,i[10]=(1-(d+y))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=ai.set(i[0],i[1],i[2]).length(),a=ai.set(i[4],i[5],i[6]).length(),o=ai.set(i[8],i[9],i[10]).length();if(s<0)r=-r;Qt.copy(this);let l=1/r,c=1/a,f=1/o;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=c,Qt.elements[5]*=c,Qt.elements[6]*=c,Qt.elements[8]*=f,Qt.elements[9]*=f,Qt.elements[10]*=f,t.setFromRotationMatrix(Qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i),g,y;if(o)g=s/(r-s),y=r*s/(r-s);else if(a===2000)g=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(a===2001)g=-r/(r-s),y=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i),g,y;if(o)g=1/(r-s),y=r/(r-s);else if(a===2000)g=-2/(r-s),y=-(r+s)/(r-s);else if(a===2001)g=-1/(r-s),y=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}var ai=new D,Qt=new it,_h=new D(0,0,0),xh=new D(1,1,1),wn=new D,Ts=new D,kt=new D,ko=new it,Ho=new bn;class Ln{constructor(e=0,t=0,n=0,i=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":if(this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Ve(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-f,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-f,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<0.9999999)this._x=Math.atan2(d,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Ve(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-f,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-Ve(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,n===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,n){return ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ho.setFromEuler(this),this.setFromQuaternion(Ho,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class lr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var vh=0,Wo=new D,oi=new bn,dn=new it,Es=new D,Gi=new D,yh=new D,Sh=new bn,Vo=new D(1,0,0),Xo=new D(0,1,0),qo=new D(0,0,1),Yo={type:"added"},Mh={type:"removed"},li={type:"childadded",child:null},Or={type:"childremoved",child:null};class It extends Mn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();let e=new D,t=new Ln,n=new bn,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new Fe}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Vo,e)}rotateY(e){return this.rotateOnAxis(Xo,e)}rotateZ(e){return this.rotateOnAxis(qo,e)}translateOnAxis(e,t){return Wo.copy(e).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vo,e)}translateY(e){return this.translateOnAxis(Xo,e)}translateZ(e){return this.translateOnAxis(qo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){if(e.isVector3)Es.copy(e);else Es.set(e,t,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)dn.lookAt(Gi,Es,this.up);else dn.lookAt(Es,Gi,this.up);if(this.quaternion.setFromRotationMatrix(dn),i)dn.extractRotation(i.matrixWorld),oi.setFromRotationMatrix(dn),this.quaternion.premultiply(oi.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return Le("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yo),li.child=e,this.dispatchEvent(li),li.child=null;else Le("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mh),Or.child=e,this.dispatchEvent(Or),Or.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld);return e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yo),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}return}getObjectsByProperty(e,t,n=[]){if(this[e]===t)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,yh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:n,z:i}=e,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==="string",n={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(e);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let f=o[l];s(e.shapes,f)}else s(e.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(e.materials,this.material[o]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(e.animations,o))}}if(t){let a=r(e.geometries),o=r(e.materials),l=r(e.textures),c=r(e.images),f=r(e.shapes),d=r(e.skeletons),h=r(e.animations),g=r(e.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(f.length>0)n.shapes=f;if(d.length>0)n.skeletons=d;if(h.length>0)n.animations=h;if(g.length>0)n.nodes=g}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}It.DEFAULT_UP=new D(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pn extends It{constructor(){super();this.isGroup=!0,this.type="Group"}}var bh={type:"move"};class hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let y of e.hand.values()){let b=t.getJointPose(y,n),u=this._getHandJoint(l,y);if(b!==null)u.matrix.fromArray(b.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=b.radius;u.visible=b!==null}let c=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=c.position.distanceTo(f.position),h=0.02,g=0.005;if(l.inputState.pinching&&d>h+g)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&d<=h-g)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(o!==null&&e.gripSpace){if(s=t.getPose(e.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(a!==null){if(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(bh)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}var fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Br(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return e+(t-e)*6*n;if(n<0.5)return t;if(n<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-n);return e}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ke.workingColorSpace){if(e=fh(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Br(r,s,e+0.3333333333333333),this.g=Br(r,s,e),this.b=Br(r,s,e-0.3333333333333333)}return ke.colorSpaceToWorking(this,i),this}setStyle(e,t="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Pe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);else if(r===6)return this.setHex(parseInt(s,16),t);else Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let n=fc[e.toLowerCase()];if(n!==void 0)this.setHex(n,t);else Pe("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return ke.workingToColorSpace(Ct.copy(this),e),Math.round(Ve(Ct.r*255,0,255))*65536+Math.round(Ve(Ct.g*255,0,255))*256+Math.round(Ve(Ct.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(Ct.copy(this),t);let{r:n,g:i,b:s}=Ct,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let f=r-a;switch(l=c<=0.5?f/(r+a):f/(2-r-a),r){case n:o=(i-s)/f+(i<s?6:0);break;case i:o=(s-n)/f+2;break;case s:o=(n-i)/f+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e="srgb"){ke.workingToColorSpace(Ct.copy(this),e);let{r:t,g:n,b:i}=Ct;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(ws);let n=Lr(An.h,ws.h,t),i=Lr(An.s,ws.s,t),s=Lr(An.l,ws.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ct=new Ne;Ne.NAMES=fc;class cr extends It{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var jt=new D,fn=new D,zr=new D,pn=new D,ci=new D,hi=new D,Zo=new D,Gr=new D,kr=new D,Hr=new D,Wr=new rt,Vr=new rt,Xr=new rt;class Wt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(e,t,n,i,s){jt.subVectors(i,t),fn.subVectors(n,t),zr.subVectors(e,t);let r=jt.dot(jt),a=jt.dot(fn),o=jt.dot(zr),l=fn.dot(fn),c=fn.dot(zr),f=r*l-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,h=(l*o-a*c)*d,g=(r*c-a*o)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){if(this.getBarycoord(e,t,n,i,pn)===null)return!1;return pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,n,i,s,r,a,o){if(this.getBarycoord(e,t,n,i,pn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,pn.x),o.addScaledVector(r,pn.y),o.addScaledVector(a,pn.z),o}static getInterpolatedAttribute(e,t,n,i,s,r){return Wr.setScalar(0),Vr.setScalar(0),Xr.setScalar(0),Wr.fromBufferAttribute(e,t),Vr.fromBufferAttribute(e,n),Xr.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Wr,s.x),r.addScaledVector(Vr,s.y),r.addScaledVector(Xr,s.z),r}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),fn.subVectors(e,t),jt.cross(fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),jt.cross(fn).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,a;ci.subVectors(i,n),hi.subVectors(s,n),Gr.subVectors(e,n);let o=ci.dot(Gr),l=hi.dot(Gr);if(o<=0&&l<=0)return t.copy(n);kr.subVectors(e,i);let c=ci.dot(kr),f=hi.dot(kr);if(c>=0&&f<=c)return t.copy(i);let d=o*f-c*l;if(d<=0&&o>=0&&c<=0&&o-c>0)return r=o/(o-c),t.copy(n).addScaledVector(ci,r);Hr.subVectors(e,s);let h=ci.dot(Hr),g=hi.dot(Hr);if(g>=0&&h<=g)return t.copy(s);let y=h*l-o*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(hi,a);let b=c*g-h*f;if(b<=0&&f-c>=0&&h-g>=0)return Zo.subVectors(s,i),a=(f-c)/(f-c+(h-g)),t.copy(i).addScaledVector(Zo,a);let u=1/(b+y+d);return r=y*u,a=d*u,t.copy(n).addScaledVector(ci,r).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $n{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=en.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(e.isMesh===!0)e.getVertexPosition(r,en);else en.fromBufferAttribute(s,r);en.applyMatrix4(e.matrixWorld),this.expandByPoint(en)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();As.copy(e.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();As.copy(n.boundingBox)}As.applyMatrix4(e.matrixWorld),this.union(As)}}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;if(e.normal.x>0)t=e.normal.x*this.min.x,n=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,n=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z;return t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),Rs.subVectors(this.max,ki),ui.subVectors(e.a,ki),di.subVectors(e.b,ki),fi.subVectors(e.c,ki),Rn.subVectors(di,ui),Cn.subVectors(fi,di),Hn.subVectors(ui,fi);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Hn.z,Hn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Hn.z,0,-Hn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Hn.y,Hn.x,0];if(!qr(t,ui,di,fi,Rs))return!1;if(t=[1,0,0,0,1,0,0,0,1],!qr(t,ui,di,fi,Rs))return!1;return Cs.crossVectors(Rn,Cn),t=[Cs.x,Cs.y,Cs.z],qr(t,ui,di,fi,Rs)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(en).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var mn=[new D,new D,new D,new D,new D,new D,new D,new D],en=new D,As=new $n,ui=new D,di=new D,fi=new D,Rn=new D,Cn=new D,Hn=new D,ki=new D,Rs=new D,Cs=new D,Wn=new D;function qr(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){Wn.fromArray(e,r);let o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),l=t.dot(Wn),c=n.dot(Wn),f=i.dot(Wn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var ht=new D,Is=new Ce,Th=0;class Vt extends Mn{constructor(e,t,n=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Th++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=e!==void 0?ar(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];if(this.normalized)n=this._denormalize(n);return n}setComponent(e,t,n){if(this.normalized)n=this._normalize(n);return this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e*=this.itemSize,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):uc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):dc(e,this.array)}}class hr extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ur extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}var Eh=new $n,Hi=new D,Yr=new D;class Ii{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;if(t!==void 0)n.copy(t);else Eh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);if(t.copy(e),n>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);let t=Hi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*0.5;this.center.addScaledVector(Hi,i/n),this.radius+=i}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else Yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(Yr)),this.expandByPoint(Hi.copy(e.center).sub(Yr));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var wh=0,Xt=new it,Zr=new It,pi=new D,Ht=new $n,Wi=new $n,xt=new D;class bt extends Mn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((uh(e))?ur:hr)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(e),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Zr.lookAt(e),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}if(e.length>t.count)Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new $n;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];if(Ht.setFromBufferAttribute(s),this.morphTargetsRelative)xt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(xt);else this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Ii;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let a=t[s];if(Wi.setFromBufferAttribute(a),this.morphTargetsRelative)xt.addVectors(Ht.min,Wi.min),Ht.expandByPoint(xt),xt.addVectors(Ht.max,Wi.max),Ht.expandByPoint(xt);else Ht.expandByPoint(Wi.min),Ht.expandByPoint(Wi.max)}Ht.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let s=0,r=t.length;s<r;s++){let a=t[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(xt.fromBufferAttribute(a,l),o)pi.fromBufferAttribute(e,l),xt.add(pi);i=Math.max(i,n.distanceToSquared(xt))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=t,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new Vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[],l=new Uint8Array(n.count);for(let v=0;v<n.count;v++)a[v]=new D,o[v]=new D;let c=new D,f=new D,d=new D,h=new Ce,g=new Ce,y=new Ce,b=new D,u=new D;function m(v,L,G){l[v]=l[L]=l[G]=1,c.fromBufferAttribute(n,v),f.fromBufferAttribute(n,L),d.fromBufferAttribute(n,G),h.fromBufferAttribute(s,v),g.fromBufferAttribute(s,L),y.fromBufferAttribute(s,G),f.sub(c),d.sub(c),g.sub(h),y.sub(h);let I=1/(g.x*y.y-y.x*g.y);if(!isFinite(I))return;b.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(I),u.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(I),a[v].add(b),a[L].add(b),a[G].add(b),o[v].add(u),o[L].add(u),o[G].add(u)}let T=this.groups;if(T.length===0)T=[{start:0,count:e.count}];for(let v=0,L=T.length;v<L;++v){let G=T[v],{start:I,count:z}=G;for(let Q=I,A=I+z;Q<A;Q+=3)m(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}let E=new D,S=new D,w=new D,C=new D;function p(v){w.fromBufferAttribute(i,v),C.copy(w);let L=a[v];E.copy(L),E.sub(w.multiplyScalar(w.dot(L))).normalize(),S.crossVectors(C,L);let I=S.dot(o[v])<0?-1:1;r.setXYZW(v,E.x,E.y,E.z,I)}for(let v=0,L=n.count;v<L;++v)if(l[v])p(v);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new D,s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,f=new D;if(e)for(let d=0,h=e.count;d<h;d+=3){let g=e.getX(d+0),y=e.getX(d+1),b=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,b),c.subVectors(r,s),f.subVectors(i,s),c.cross(f),a.fromBufferAttribute(n,g),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,b),a.add(c),o.add(c),l.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),c.subVectors(r,s),f.subVectors(i,s),c.cross(f),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,o){let{array:l,itemSize:c,normalized:f}=a,d=new l.constructor(o.length*c),h=0,g=0;for(let y=0,b=o.length;y<b;y++){if(a.isInterleavedBufferAttribute)h=o[y]*a.data.stride+a.offset;else h=o[y]*c;for(let u=0;u<c;u++)d[g++]=l[h++]}return new Vt(d,c,f)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new bt,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=e(o,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,f=l.length;c<f;c++){let d=l[c],h=e(d,n);o.push(h)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)e[l]=o[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let n=this.attributes;for(let o in n){let l=n[o];e.data.attributes[o]=l.toJSON(e.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let f=0,d=l.length;f<d;f++){let h=l[f];c.push(h.toJSON(e.data))}if(c.length>0)i[o]=c,s=!0}if(s)e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)e.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)e.data.boundingSphere=a.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;if(n!==null)this.setIndex(n.clone());let i=e.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(t))}let s=e.morphAttributes;for(let l in s){let c=[],f=s[l];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,c=r.length;l<c;l++){let f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=e.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ka{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Jo(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=Jo(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Jo(e){if(e.buffer._uuid===void 0)e.buffer._uuid=Jn();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var Ut=new D;class $i{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?ar(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];if(this.normalized)n=this._denormalize(n);return n}setComponent(e,t,n){if(this.normalized)n=this._normalize(n);return this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ji("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new $i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){Ji("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):uc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):dc(e,this.data.array)}}var Jr=new D,Ah=new D,Rh=new Fe;class sn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Jr.subVectors(n,t).cross(Ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Jr),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let r=-(e.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rh.getNormalMatrix(e),i=this.coplanarPoint(Jr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var Ch=0;class On extends Mn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)n.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(t){let s=i(e.textures),r=i(e.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new Ne().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((n)=>new sn().fromJSON(n));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let n=e.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new Ce().fromArray(n)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class Pi extends On{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var mi,Vi=new D,gi=new D,_i=new D,xi=new Ce,Xi=new Ce,pc=new it,Ps=new D,qi=new D,Ls=new D,$o=new Ce,$r=new Ce,Ko=new Ce;class us extends It{constructor(e=new Pi){super();if(this.isSprite=!0,this.type="Sprite",mi===void 0){mi=new bt;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new Ka(t,5);mi.setIndex([0,1,2,0,2,3]),mi.setAttribute("position",new $i(n,3,0,!1)),mi.setAttribute("uv",new $i(n,2,3,!1))}this.geometry=mi,this.material=e,this.center=new Ce(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)Le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(gi.setFromMatrixScale(this.matrixWorld),pc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)gi.multiplyScalar(-_i.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;Ns(Ps.set(-0.5,-0.5,0),_i,r,gi,i,s),Ns(qi.set(0.5,-0.5,0),_i,r,gi,i,s),Ns(Ls.set(0.5,0.5,0),_i,r,gi,i,s),$o.set(0,0),$r.set(1,0),Ko.set(1,1);let a=e.ray.intersectTriangle(Ps,qi,Ls,!1,Vi);if(a===null){if(Ns(qi.set(-0.5,0.5,0),_i,r,gi,i,s),$r.set(0,1),a=e.ray.intersectTriangle(Ps,Ls,qi,!1,Vi),a===null)return}let o=e.ray.origin.distanceTo(Vi);if(o<e.near||o>e.far)return;t.push({distance:o,point:Vi.clone(),uv:Wt.getInterpolation(Vi,Ps,qi,Ls,$o,$r,Ko,new Ce),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Ns(e,t,n,i,s,r){if(xi.subVectors(e,n).addScalar(0.5).multiply(i),s!==void 0)Xi.x=r*xi.x-s*xi.y,Xi.y=s*xi.x+r*xi.y;else Xi.copy(xi);e.copy(t),e.x+=Xi.x,e.y+=Xi.y,e.applyMatrix4(pc)}var gn=new D,Kr=new D,Ds=new D,Us=new D;class dr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);if(n<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gn.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e)}distanceSqToSegment(e,t,n,i){Kr.copy(e).add(t).multiplyScalar(0.5),Ds.copy(t).sub(e).normalize(),Us.copy(this.origin).sub(Kr);let s=e.distanceTo(t)*0.5,r=-this.direction.dot(Ds),a=Us.dot(this.direction),o=-Us.dot(Ds),l=Us.lengthSq(),c=Math.abs(1-r*r),f,d,h,g;if(c>0)if(f=r*o-a,d=r*a-o,g=s*c,f>=0)if(d>=-g)if(d<=g){let y=1/c;f*=y,d*=y,h=f*(f+r*d+2*a)+d*(r*f+d+2*o)+l}else d=s,f=Math.max(0,-(r*d+a)),h=-f*f+d*(d+2*o)+l;else d=-s,f=Math.max(0,-(r*d+a)),h=-f*f+d*(d+2*o)+l;else if(d<=-g)f=Math.max(0,-(-r*s+a)),d=f>0?-s:Math.min(Math.max(-s,-o),s),h=-f*f+d*(d+2*o)+l;else if(d<=g)f=0,d=Math.min(Math.max(-s,-o),s),h=d*(d+2*o)+l;else f=Math.max(0,-(r*s+a)),d=f>0?s:Math.min(Math.max(-s,-o),s),h=-f*f+d*(d+2*o)+l;else d=r>0?-s:s,f=Math.max(0,-(r*d+a)),h=-f*f+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,f);if(i)i.copy(Kr).addScaledVector(Ds,d);return h}intersectSphere(e,t){if(e.radius<0)return null;gn.subVectors(e.center,this.origin);let n=gn.dot(this.direction),i=gn.dot(gn)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,t);return this.at(a,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);if(n===null)return null;return this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;if(l>=0)n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l;else n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l;if(c>=0)s=(e.min.y-d.y)*c,r=(e.max.y-d.y)*c;else s=(e.max.y-d.y)*c,r=(e.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(f>=0)a=(e.min.z-d.z)*f,o=(e.max.z-d.z)*f;else a=(e.max.z-d.z)*f,o=(e.min.z-d.z)*f;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,f=e.x-r.x,d=e.y-r.y,h=e.z-r.z,g=t.x-r.x,y=t.y-r.y,b=t.z-r.z,u=n.x-r.x,m=n.y-r.y,T=n.z-r.z,E=Math.abs(o),S=Math.abs(l),w=Math.abs(c),C,p,v,L,G,I,z,Q,A,Z,j,O;if(E>=S&&E>=w)if(v=o,I=f,A=g,O=u,o>=0)C=l,p=c,L=d,G=h,z=y,Q=b,Z=m,j=T;else C=c,p=l,L=h,G=d,z=b,Q=y,Z=T,j=m;else if(S>=w)if(v=l,I=d,A=y,O=m,l>=0)C=c,p=o,L=h,G=f,z=b,Q=g,Z=T,j=u;else C=o,p=c,L=f,G=h,z=g,Q=b,Z=u,j=T;else if(v=c,I=h,A=b,O=T,c>=0)C=o,p=l,L=f,G=d,z=g,Q=y,Z=u,j=m;else C=l,p=o,L=d,G=f,z=y,Q=g,Z=m,j=u;if(v===0)return null;let re=C/v,X=p/v,ee=1/v,H=L-re*I,ne=G-X*I,W=z-re*A,q=Q-X*A,xe=Z-re*O,Te=j-X*O,we=xe*q-Te*W,ve=H*Te-ne*xe,Xe=W*ne-q*H;if(i){if(we<0||ve<0||Xe<0)return null}else if((we<0||ve<0||Xe<0)&&(we>0||ve>0||Xe>0))return null;let De=we+ve+Xe;if(De===0)return null;let Ue=ee*(we*I+ve*A+Xe*O);if(De>0?Ue<0:Ue>0)return null;return this.at(Ue/De,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on extends On{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var Qo=new it,Vn=new dr,Fs=new Ii,jo=new D,Os=new D,Bs=new D,zs=new D,Qr=new D,Gs=new D,el=new D,ks=new D;class yt extends It{constructor(e=new bt,t=new on){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Gs.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],f=s[o];if(c===0)continue;if(Qr.fromBufferAttribute(f,e),r)Gs.addScaledVector(Qr,c);else Gs.addScaledVector(Qr.sub(t),c)}t.add(Gs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),Fs.containsPoint(Vn.origin)===!1){if(Vn.intersectSphere(Fs,jo)===null)return;if(Vn.origin.distanceToSquared(jo)>(e.far-e.near)**2)return}if(Qo.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(Qo),n.boundingBox!==null){if(Vn.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(e,t,Vn)}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,{groups:d,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){let b=d[g],u=r[b.materialIndex],m=Math.max(b.start,h.start),T=Math.min(a.count,Math.min(b.start+b.count,h.start+h.count));for(let E=m,S=T;E<S;E+=3){let w=a.getX(E),C=a.getX(E+1),p=a.getX(E+2);if(i=Hs(this,u,e,n,l,c,f,w,C,p),i)i.faceIndex=Math.floor(E/3),i.face.materialIndex=b.materialIndex,t.push(i)}}else{let g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let b=g,u=y;b<u;b+=3){let m=a.getX(b),T=a.getX(b+1),E=a.getX(b+2);if(i=Hs(this,r,e,n,l,c,f,m,T,E),i)i.faceIndex=Math.floor(b/3),t.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){let b=d[g],u=r[b.materialIndex],m=Math.max(b.start,h.start),T=Math.min(o.count,Math.min(b.start+b.count,h.start+h.count));for(let E=m,S=T;E<S;E+=3){let w=E,C=E+1,p=E+2;if(i=Hs(this,u,e,n,l,c,f,w,C,p),i)i.faceIndex=Math.floor(E/3),i.face.materialIndex=b.materialIndex,t.push(i)}}else{let g=Math.max(0,h.start),y=Math.min(o.count,h.start+h.count);for(let b=g,u=y;b<u;b+=3){let m=b,T=b+1,E=b+2;if(i=Hs(this,r,e,n,l,c,f,m,T,E),i)i.faceIndex=Math.floor(b/3),t.push(i)}}}}function Ih(e,t,n,i,s,r,a,o){let l;if(t.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,t.side===0,o);if(l===null)return null;ks.copy(o),ks.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(ks);if(c<n.near||c>n.far)return null;return{distance:c,point:ks.clone(),object:e}}function Hs(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,Os),e.getVertexPosition(l,Bs),e.getVertexPosition(c,zs);let f=Ih(e,t,n,i,Os,Bs,zs,el);if(f){let d=new D;if(Wt.getBarycoord(el,Os,Bs,zs,d),s)f.uv=Wt.getInterpolatedAttribute(s,o,l,c,d,new Ce);if(r)f.uv1=Wt.getInterpolatedAttribute(r,o,l,c,d,new Ce);if(a){if(f.normal=Wt.getInterpolatedAttribute(a,o,l,c,d,new D),f.normal.dot(i.direction)>0)f.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new D,materialIndex:0};Wt.getNormal(Os,Bs,zs,h.normal),f.face=h,f.barycoord=d}return f}class Qa extends Mt{constructor(e=null,t=1,n=1,i,s,r,a,o,l=1003,c=1003,f,d){super(null,r,a,o,l,c,i,s,f,d);this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Xn=new Ii,Ph=new Ce(0.5,0.5),Ws=new D;class Ti{constructor(e=new sn,t=new sn,n=new sn,i=new sn,s=new sn,r=new sn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2000,n=!1){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],f=s[5],d=s[6],h=s[7],g=s[8],y=s[9],b=s[10],u=s[11],m=s[12],T=s[13],E=s[14],S=s[15];if(i[0].setComponents(l-r,h-c,u-g,S-m).normalize(),i[1].setComponents(l+r,h+c,u+g,S+m).normalize(),i[2].setComponents(l+a,h+f,u+y,S+T).normalize(),i[3].setComponents(l-a,h-f,u-y,S-T).normalize(),n)i[4].setComponents(o,d,b,E).normalize(),i[5].setComponents(l-o,h-d,u-b,S-E).normalize();else if(i[4].setComponents(l-o,h-d,u-b,S-E).normalize(),t===2000)i[5].setComponents(l+o,h+d,u+b,S+E).normalize();else if(t===2001)i[5].setComponents(o,d,b,E).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){Xn.center.set(0,0,0);let t=Ph.distanceTo(e.center);return Xn.radius=0.7071067811865476+t,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ws.x=i.normal.x>0?e.max.x:e.min.x,Ws.y=i.normal.y>0?e.max.y:e.min.y,Ws.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var tl=new it;class fr{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];if(tl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0)n[i]=new Ti;n[i].setFromProjectionMatrix(tl,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++){if(t[i]===void 0)t[i]=new Ti;t[i].copy(n[i])}return this._count=e._count,this}clone(){return new fr().copy(this)}}class Li extends On{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var nl=new it,jr=new dr,Vs=new Ii,Xs=new D;class ds extends It{constructor(e=new bt,t=new Li){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=s,e.ray.intersectsSphere(Vs)===!1)return;nl.copy(i).invert(),jr.copy(e.ray).applyMatrix4(nl);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,f=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),h=Math.min(l.count,r.start+r.count);for(let g=d,y=h;g<y;g++){let b=l.getX(g);Xs.fromBufferAttribute(f,b),il(Xs,b,o,i,e,t,this)}}else{let d=Math.max(0,r.start),h=Math.min(f.count,r.start+r.count);for(let g=d,y=h;g<y;g++)Xs.fromBufferAttribute(f,g),il(Xs,g,o,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function il(e,t,n,i,s,r,a){let o=jr.distanceSqToPoint(e);if(o<n){let l=new D;jr.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class pr extends Mt{constructor(e=[],t=301,n,i,s,r,a,o,l,c){super(e,t,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mr extends Mt{constructor(e,t,n,i,s,r,a,o,l){super(e,t,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn extends Mt{constructor(e,t,n=1014,i,s,r,a=1003,o=1003,l,c=1026,f=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class gr extends Bn{constructor(e,t=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,n,i,s,r,a,o,l);this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _r extends Mt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ni extends bt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],f=[],d=0,h=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(f,2));function g(y,b,u,m,T,E,S,w,C,p,v){let L=E/C,G=S/p,I=E/2,z=S/2,Q=w/2,A=C+1,Z=p+1,j=0,O=0,re=new D;for(let X=0;X<Z;X++){let ee=X*G-z;for(let H=0;H<A;H++){let ne=H*L-I;re[y]=ne*m,re[b]=ee*T,re[u]=Q,l.push(re.x,re.y,re.z),re[y]=0,re[b]=0,re[u]=w>0?1:-1,c.push(re.x,re.y,re.z),f.push(H/C),f.push(1-X/p),j+=1}}for(let X=0;X<p;X++)for(let ee=0;ee<C;ee++){let H=d+ee+A*X,ne=d+ee+A*(X+1),W=d+(ee+1)+A*(X+1),q=d+(ee+1)+A*X;o.push(H,ne,q),o.push(ne,W,q),O+=6}a.addGroup(h,O,v),h+=O,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kn extends bt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],f=[],d=[],h=[],g=0,y=[],b=n/2,u=0;if(m(),r===!1){if(e>0)T(!0);if(t>0)T(!1)}this.setIndex(c),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(h,2));function m(){let E=new D,S=new D,w=0,C=(t-e)/n;for(let p=0;p<=s;p++){let v=[],L=p/s,G=L*(t-e)+e;for(let I=0;I<=i;I++){let z=I/i,Q=z*o+a,A=Math.sin(Q),Z=Math.cos(Q);S.x=G*A,S.y=-L*n+b,S.z=G*Z,f.push(S.x,S.y,S.z),E.set(A,C,Z).normalize(),d.push(E.x,E.y,E.z),h.push(z,1-L),v.push(g++)}y.push(v)}for(let p=0;p<i;p++)for(let v=0;v<s;v++){let L=y[v][p],G=y[v+1][p],I=y[v+1][p+1],z=y[v][p+1];if(e>0||v!==0)c.push(L,G,z),w+=3;if(t>0||v!==s-1)c.push(G,I,z),w+=3}l.addGroup(u,w,0),u+=w}function T(E){let S=g,w=new Ce,C=new D,p=0,v=E===!0?e:t,L=E===!0?1:-1;for(let I=1;I<=i;I++)f.push(0,b*L,0),d.push(0,L,0),h.push(0.5,0.5),g++;let G=g;for(let I=0;I<=i;I++){let Q=I/i*o+a,A=Math.cos(Q),Z=Math.sin(Q);C.x=v*Z,C.y=b*L,C.z=v*A,f.push(C.x,C.y,C.z),d.push(0,L,0),w.x=A*0.5+0.5,w.y=Z*0.5*L+0.5,h.push(w.x,w.y),g++}for(let I=0;I<i;I++){let z=S+I,Q=G+I;if(E===!0)c.push(Q,Q+1,z);else c.push(Q+1,Q,z);p+=3}l.addGroup(u,p,E===!0?1:2),u+=p}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fs extends Kn{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,s,r,a);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new fs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qn extends bt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,f=e/a,d=t/o,h=[],g=[],y=[],b=[];for(let u=0;u<c;u++){let m=u*d-r;for(let T=0;T<l;T++){let E=T*f-s;g.push(E,-m,0),y.push(0,0,1),b.push(T/a),b.push(1-u/o)}}for(let u=0;u<o;u++)for(let m=0;m<a;m++){let T=m+l*u,E=m+l*(u+1),S=m+1+l*(u+1),w=m+1+l*u;h.push(T,E,w),h.push(E,S,w)}this.setIndex(h),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Di extends bt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],f=new D,d=new D,h=[],g=[],y=[],b=[];for(let u=0;u<=n;u++){let m=[],T=u/n,E=r+T*a,S=e*Math.cos(E),w=Math.sqrt(e*e-S*S),C=0;if(u===0&&r===0)C=0.5/t;else if(u===n&&o===Math.PI)C=-0.5/t;for(let p=0;p<=t;p++){let v=p/t,L=i+v*s;f.x=-w*Math.cos(L),f.y=S,f.z=w*Math.sin(L),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),b.push(v+C,1-T),m.push(l++)}c.push(m)}for(let u=0;u<n;u++)for(let m=0;m<t;m++){let T=c[u][m+1],E=c[u][m],S=c[u+1][m],w=c[u+1][m+1];if(u!==0||r>0)h.push(T,E,w);if(u!==n-1||o<Math.PI)h.push(E,S,w)}this.setIndex(h),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function jn(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(sl(s))if(s.isRenderTargetTexture)Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null;else t[n][i]=s.clone();else if(Array.isArray(s))if(sl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Nt(e){let t={};for(let n=0;n<e.length;n++){let i=jn(e[n]);for(let s in i)t[s]=i[s]}return t}function sl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Lh(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ja(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return ke.workingColorSpace}var Tn={clone:jn,merge:Nt},Nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dt extends On{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nh,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jn(e.uniforms),this.uniformsGroups=Lh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)t.uniforms[i]={type:"t",value:r.toJSON(e).uuid};else if(r&&r.isColor)t.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)t.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)t.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)t.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)t.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)t.uniforms[i]={type:"m4",value:r.toArray()};else t.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)t.extensions=n;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ce().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new rt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new it().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class ps extends dt{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class eo extends On{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class to extends On{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function vi(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function qs(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class ei{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){let a=t[1];if(e<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}while(n<r){let a=n+r>>>1;if(e<t[a])r=a;else n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class no extends ei{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,a=2*t-n;break;case 2402:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=e,o=2*n-t;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=e-1,o=t}let l=(n-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(i-t),y=g*g,b=y*g,u=-d*b+2*d*y-d*g,m=(1+d)*b+(-1.5-2*d)*y+(-0.5+d)*g+1,T=(-1-h)*b+(1.5+h)*y+0.5*g,E=h*b-h*y;for(let S=0;S!==a;++S)s[S]=u*r[c+S]+m*r[l+S]+T*r[o+S]+E*r[f+S];return s}}class io extends ei{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(n-t)/(i-t),f=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*f+r[o+d]*c;return s}}class so extends ei{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ro extends ei{interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this.inTangents,f=this.outTangents;if(!c||!f){let g=(n-t)/(i-t),y=1-g;for(let b=0;b!==a;++b)s[b]=r[l+b]*y+r[o+b]*g;return s}let d=a*2,h=e-1;for(let g=0;g!==a;++g){let y=r[l+g],b=r[o+g],u=h*d+g*2,m=f[u],T=f[u+1],E=e*d+g*2,S=c[E],w=c[E+1],C=Fh(n,t,m,S,i);s[g]=mc(C,y,T,w,b)}return s}}function mc(e,t,n,i,s){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*s}function Uh(e,t,n,i,s){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)}function Fh(e,t,n,i,s){let r=(e-t)/(s-t);for(let a=0;a<8;a++){let o=mc(r,t,n,i,s)-e;if(Math.abs(o)<0.0000000001)break;let l=Uh(r,t,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class Yt{constructor(e,t,n,i){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vi(t,this.TimeBufferType),this.values=vi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vi(e.times,Array),values:vi(e.values,Array)};let i=e.getInterpolation();if(i!==e.DefaultInterpolation)n.interpolation=i;if(qs(e.settings))n.settings={inTangents:vi(e.settings.inTangents,Array),outTangents:vi(e.settings.outTangents,Array)}}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new so(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new no(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ro(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;if(qs(this.settings))rl(this.settings.inTangents,e),rl(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;if(qs(this.settings))al(this.settings.inTangents,e),al(this.settings.outTangents,e)}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<e)++s;while(r!==-1&&n[r]>t)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)Le("KeyframeTrack: Invalid value size in track.",this),e=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Le("KeyframeTrack: Track is empty.",this),e=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Le("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(r!==null&&r>o){Le("KeyframeTrack: Out of order keys.",this,a,o,r),e=!1;break}r=o}if(i!==void 0){if(dh(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=e[a],c=e[a+1];if(l!==c&&(a!==1||l!==e[0]))if(!i){let f=a*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[d+g]||y!==t[h+g]){o=!0;break}}}else o=!0;if(o){if(a!==r){e[r]=e[a];let f=a*n,d=r*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)t[o+l]=t[a+l];++r}if(r!==e.length)this.times=e.slice(0,r),this.values=t.slice(0,r*n);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);if(i.createInterpolant=this.createInterpolant,qs(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function rl(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function al(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}Yt.prototype.ValueTypeName="";Yt.prototype.TimeBufferType=Float32Array;Yt.prototype.ValueBufferType=Float32Array;Yt.prototype.DefaultInterpolation=2301;class ti extends Yt{constructor(e,t,n){super(e,t,n)}}ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=2300;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;class ao extends Yt{constructor(e,t,n,i){super(e,t,n,i)}}ao.prototype.ValueTypeName="color";class oo extends Yt{constructor(e,t,n,i){super(e,t,n,i)}}oo.prototype.ValueTypeName="number";class lo extends ei{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-t)/(i-t),l=e*a;for(let c=l+a;l!==c;l+=4)bn.slerpFlat(s,0,r,l-a,r,l,o);return s}}class xr extends Yt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new lo(this.times,this.values,this.getValueSize(),e)}}xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;class ni extends Yt{constructor(e,t,n){super(e,t,n)}}ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=2300;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;class co extends Yt{constructor(e,t,n,i){super(e,t,n,i)}}co.prototype.ValueTypeName="vector";class ho{constructor(e,t,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,f){return l.push(c,f),this},this.removeHandler=function(c){let f=l.indexOf(c);if(f!==-1)l.splice(f,2);return this},this.getHandler=function(c){for(let f=0,d=l.length;f<d;f+=2){let h=l[f],g=l[f+1];if(h.global)h.lastIndex=0;if(h.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var gc=new ho;class uo{constructor(e){if(this.manager=e!==void 0?e:gc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ys=new D,Zs=new bn,nn=new D;class vr extends It{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Ys,Zs,nn),nn.x===1&&nn.y===1&&nn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ys,Zs,nn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){if(super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ys,Zs,nn),nn.x===1&&nn.y===1&&nn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ys,Zs,nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var In=new D,ol=new Ce,ll=new Ce;class zt extends vr{constructor(e=50,t=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pr*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Pr*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){In.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,ol,ll),t.subVectors(ll,ol)}setViewOffset(e,t,n,i,s,r){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pr*0.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,t-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=e*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ms extends vr{constructor(e=-1,t=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}var yi=-90,Si=1;class gs extends It{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new zt(yi,Si,e,t);i.layers=this.layers,this.add(i);let s=new zt(yi,Si,e,t);s.layers=this.layers,this.add(s);let r=new zt(yi,Si,e,t);r.layers=this.layers,this.add(r);let a=new zt(yi,Si,e,t);a.layers=this.layers,this.add(a);let o=new zt(yi,Si,e,t);o.layers=this.layers,this.add(o);let l=new zt(yi,Si,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,o]=t;for(let l of t)this.remove(l);if(e===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let b=!1;if(e.isWebGLRenderer===!0)b=e.state.buffers.depth.getReversed();else b=e.reversedDepthBuffer;if(e.setRenderTarget(n,0,i),b&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(n,1,i),b&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(n,2,i),b&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(n,3,i),b&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(n,4,i),b&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,i),b&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fo extends zt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class yr{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=Oh.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function Oh(){if(this._document.hidden===!1)this.reset()}var po="\\[\\]\\.:\\/",Bh=new RegExp("["+po+"]","g"),mo="[^"+po+"]",zh="[^"+po.replace("\\.","")+"]",Gh=/((?:WC+[\/:])*)/.source.replace("WC",mo),kh=/(WCOD+)?/.source.replace("WCOD",zh),Hh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mo),Wh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mo),Vh=new RegExp("^"+Gh+kh+Hh+Wh+"$"),Xh=["material","materials","bones","map"];class _c{constructor(e,t,n){let i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){if(!(e&&e.isAnimationObjectGroup))return new $e(e,t,n);else return new $e.Composite(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bh,"")}static parseTrackName(e){let t=Vh.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Xh.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===t||a.uuid===t)return a;let o=n(a.children);if(o)return o}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=t;if(!e)e=$e.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[s]!==void 0)s=e.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=_c;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bm=new Float32Array(1);class Sr{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Pe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1000,this.oldTime=t,this.elapsedTime+=e}return e}}class xc{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}function go(e,t,n,i){let s=qh(i);switch(n){case 1021:return e*t;case 1028:return e*t/s.components*s.byteLength;case 1029:return e*t/s.components*s.byteLength;case 1030:return e*t*2/s.components*s.byteLength;case 1031:return e*t*2/s.components*s.byteLength;case 1022:return e*t*3/s.components*s.byteLength;case 1023:return e*t*4/s.components*s.byteLength;case 1033:return e*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function qh(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)Pe("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function Gc(){let e=null,t=!1,n=null,i=null;function s(r,a){i=e.requestAnimationFrame(s),n(r,a)}return{start:function(){if(t===!0)return;if(n===null)return;if(e===null)return;i=e.requestAnimationFrame(s),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(i);t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function Yh(e){let t=new WeakMap;function n(o,l){let{array:c,usage:f}=o,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,f),o.onUploadCallback();let g;if(c instanceof Float32Array)g=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)g=e.HALF_FLOAT;else g=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=e.SHORT;else if(c instanceof Uint32Array)g=e.UNSIGNED_INT;else if(c instanceof Int32Array)g=e.INT;else if(c instanceof Int8Array)g=e.BYTE;else if(c instanceof Uint8Array)g=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:f,updateRanges:d}=l;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,f);else{d.sort((g,y)=>g.start-y.start);let h=0;for(let g=1;g<d.length;g++){let y=d[h],b=d[g];if(b.start<=y.start+y.count+1)y.count=Math.max(y.count,b.start+b.count-y.start);else++h,d[h]=b}d.length=h+1;for(let g=0,y=d.length;g<y;g++){let b=d[g];e.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return t.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=t.get(o);if(l)e.deleteBuffer(l.buffer),t.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let f=t.get(o);if(!f||f.version<o.version)t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jh=`#ifdef USE_ALPHAHASH
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
#endif`,$h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eu=`#ifdef USE_AOMAP
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
#endif`,tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nu=`#ifdef USE_BATCHING
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
#endif`,iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,au=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ou=`#ifdef USE_IRIDESCENCE
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
#endif`,lu=`#ifdef USE_BUMPMAP
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
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_u=`#define PI 3.141592653589793
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
} // validated`,xu=`vec3 transformedNormal = objectNormal;
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
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eu=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Du=`#ifdef USE_GRADIENTMAP
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
}`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vu=`PhysicalMaterial material;
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
#endif`,Xu=`uniform sampler2D dfgLUT;
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
}`,qu=`
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
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ju=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,$u=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,id=`#if defined( USE_POINTS_UV )
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
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,od=`#if defined( USE_MORPHCOLORS )
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
#endif`,ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`#ifdef USE_MORPHTARGETS
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
#endif`,hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ld=`float getShadowMask() {
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
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
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
#endif`,Ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
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
#endif`,Hd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
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
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`uniform float backgroundBlurriness;
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`#include <common>
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
}`,ef=`#if DEPTH_PACKING == 3200
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
}`,tf=`#define DISTANCE
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
}`,nf=`#define DISTANCE
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
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`uniform float scale;
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
}`,of=`uniform vec3 diffuse;
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
}`,lf=`#include <common>
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
}`,cf=`uniform vec3 diffuse;
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
}`,hf=`#define LAMBERT
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
}`,uf=`#define LAMBERT
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
}`,df=`#define MATCAP
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
}`,ff=`#define MATCAP
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
}`,pf=`#define NORMAL
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
}`,mf=`#define NORMAL
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
}`,gf=`#define PHONG
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
}`,_f=`#define PHONG
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
}`,xf=`#define STANDARD
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
}`,vf=`#define STANDARD
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
}`,yf=`#define TOON
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
}`,Sf=`#define TOON
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
}`,Mf=`uniform float size;
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
}`,bf=`uniform vec3 diffuse;
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
}`,Tf=`#include <common>
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
}`,Ef=`uniform vec3 color;
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
}`,wf=`uniform float rotation;
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
}`,Af=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Zh,alphahash_pars_fragment:Jh,alphamap_fragment:$h,alphamap_pars_fragment:Kh,alphatest_fragment:Qh,alphatest_pars_fragment:jh,aomap_fragment:eu,aomap_pars_fragment:tu,batching_pars_vertex:nu,batching_vertex:iu,begin_vertex:su,beginnormal_vertex:ru,bsdfs:au,iridescence_fragment:ou,bumpmap_pars_fragment:lu,clipping_planes_fragment:cu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:uu,clipping_planes_vertex:du,color_fragment:fu,color_pars_fragment:pu,color_pars_vertex:mu,color_vertex:gu,common:_u,defaultnormal_vertex:xu,displacementmap_pars_vertex:vu,displacementmap_vertex:yu,emissivemap_fragment:Su,emissivemap_pars_fragment:Mu,colorspace_fragment:bu,colorspace_pars_fragment:Tu,envmap_fragment:Eu,envmap_common_pars_fragment:wu,envmap_pars_fragment:Au,envmap_pars_vertex:Ru,envmap_physical_pars_fragment:zu,envmap_vertex:Cu,fog_vertex:Iu,fog_pars_vertex:Pu,fog_fragment:Lu,fog_pars_fragment:Nu,gradientmap_pars_fragment:Du,lightmap_pars_fragment:Uu,lights_lambert_fragment:Fu,lights_lambert_pars_fragment:Ou,lights_pars_begin:Bu,lights_toon_fragment:Gu,lights_toon_pars_fragment:ku,lights_phong_fragment:Hu,lights_phong_pars_fragment:Wu,lights_physical_fragment:Vu,lights_physical_pars_fragment:Xu,lights_fragment_begin:qu,lights_fragment_maps:Yu,lights_fragment_end:Zu,lightprobes_pars_fragment:Ju,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:Qu,logdepthbuf_vertex:ju,map_fragment:ed,map_pars_fragment:td,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:sd,metalnessmap_pars_fragment:rd,morphinstance_vertex:ad,morphcolor_vertex:od,morphnormal_vertex:ld,morphtarget_pars_vertex:cd,morphtarget_vertex:hd,normal_fragment_begin:ud,normal_fragment_maps:dd,normal_pars_fragment:fd,normal_pars_vertex:pd,normal_vertex:md,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:xd,clearcoat_pars_fragment:vd,iridescence_pars_fragment:yd,opaque_fragment:Sd,packing:Md,premultiplied_alpha_fragment:bd,project_vertex:Td,dithering_fragment:Ed,dithering_pars_fragment:wd,roughnessmap_fragment:Ad,roughnessmap_pars_fragment:Rd,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Id,shadowmap_vertex:Pd,shadowmask_pars_fragment:Ld,skinbase_vertex:Nd,skinning_pars_vertex:Dd,skinning_vertex:Ud,skinnormal_vertex:Fd,specularmap_fragment:Od,specularmap_pars_fragment:Bd,tonemapping_fragment:zd,tonemapping_pars_fragment:Gd,transmission_fragment:kd,transmission_pars_fragment:Hd,uv_pars_fragment:Wd,uv_pars_vertex:Vd,uv_vertex:Xd,worldpos_vertex:qd,background_vert:Yd,background_frag:Zd,backgroundCube_vert:Jd,backgroundCube_frag:$d,cube_vert:Kd,cube_frag:Qd,depth_vert:jd,depth_frag:ef,distance_vert:tf,distance_frag:nf,equirect_vert:sf,equirect_frag:rf,linedashed_vert:af,linedashed_frag:of,meshbasic_vert:lf,meshbasic_frag:cf,meshlambert_vert:hf,meshlambert_frag:uf,meshmatcap_vert:df,meshmatcap_frag:ff,meshnormal_vert:pf,meshnormal_frag:mf,meshphong_vert:gf,meshphong_frag:_f,meshphysical_vert:xf,meshphysical_frag:vf,meshtoon_vert:yf,meshtoon_frag:Sf,points_vert:Mf,points_frag:bf,shadow_vert:Tf,shadow_frag:Ef,sprite_vert:wf,sprite_frag:Af},pe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ce(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},cn={basic:{uniforms:Nt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Nt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Nt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Nt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Nt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Nt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Nt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Nt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Nt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Nt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Nt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Nt([pe.common,pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Nt([pe.lights,pe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};cn.physical={uniforms:Nt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Mr={r:0,b:0,g:0},Rf=new it,kc=new Fe;kc.set(-1,0,0,0,1,0,0,0,1);function Cf(e,t,n,i,s,r){let a=new Ne(0),o=s===!0?0:1,l,c,f=null,d=0,h=null;function g(T){let E=T.isScene===!0?T.background:null;if(E&&E.isTexture){let S=T.backgroundBlurriness>0;E=t.get(E,S)}return E}function y(T){let E=!1,S=g(T);if(S===null)u(a,o);else if(S&&S.isColor)u(S,1),E=!0;let w=e.xr.getEnvironmentBlendMode();if(w==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(w==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(e.autoClear||E)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function b(T,E){let S=g(E);if(S&&S.isCubeTexture){if(c===void 0)c=new yt(new Ni(1,1,1),new dt({name:"BackgroundCubeMaterial",uniforms:jn(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rf.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(kc);if(c.material.toneMapped=ke.getTransfer(S.colorSpace)!==Ke,f!==S||d!==S.version||h!==e.toneMapping)c.material.needsUpdate=!0,f=S,d=S.version,h=e.toneMapping;c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)}else if(S&&S.isTexture){if(l===void 0)l=new yt(new Qn(2,2),new dt({name:"BackgroundMaterial",uniforms:jn(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ke.getTransfer(S.colorSpace)!==Ke,S.matrixAutoUpdate===!0)S.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(S.matrix),f!==S||d!==S.version||h!==e.toneMapping)l.material.needsUpdate=!0,f=S,d=S.version,h=e.toneMapping;l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)}}function u(T,E){T.getRGB(Mr,ja(e)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,E,r)}function m(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),o=E,u(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,u(a,o)},render:y,addToRenderList:b,dispose:m}}function If(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(I,z,Q,A,Z){let j=!1,O=d(I,A,Q,z);if(r!==O)r=O,c(r.object);if(j=g(I,A,Q,Z),j)y(I,A,Q,Z);if(Z!==null)t.update(Z,e.ELEMENT_ARRAY_BUFFER);if(j||a){if(a=!1,S(I,z,Q,A),Z!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer)}}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function f(I){return e.deleteVertexArray(I)}function d(I,z,Q,A){let Z=A.wireframe===!0,j=i[z.id];if(j===void 0)j={},i[z.id]=j;let O=I.isInstancedMesh===!0?I.id:0,re=j[O];if(re===void 0)re={},j[O]=re;let X=re[Q.id];if(X===void 0)X={},re[Q.id]=X;let ee=X[Z];if(ee===void 0)ee=h(l()),X[Z]=ee;return ee}function h(I){let z=[],Q=[],A=[];for(let Z=0;Z<n;Z++)z[Z]=0,Q[Z]=0,A[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Q,attributeDivisors:A,object:I,attributes:{},index:null}}function g(I,z,Q,A){let Z=r.attributes,j=z.attributes,O=0,re=Q.getAttributes();for(let X in re)if(re[X].location>=0){let H=Z[X],ne=j[X];if(ne===void 0){if(X==="instanceMatrix"&&I.instanceMatrix)ne=I.instanceMatrix;if(X==="instanceColor"&&I.instanceColor)ne=I.instanceColor}if(H===void 0)return!0;if(H.attribute!==ne)return!0;if(ne&&H.data!==ne.data)return!0;O++}if(r.attributesNum!==O)return!0;if(r.index!==A)return!0;return!1}function y(I,z,Q,A){let Z={},j=z.attributes,O=0,re=Q.getAttributes();for(let X in re)if(re[X].location>=0){let H=j[X];if(H===void 0){if(X==="instanceMatrix"&&I.instanceMatrix)H=I.instanceMatrix;if(X==="instanceColor"&&I.instanceColor)H=I.instanceColor}let ne={};if(ne.attribute=H,H&&H.data)ne.data=H.data;Z[X]=ne,O++}r.attributes=Z,r.attributesNum=O,r.index=A}function b(){let I=r.newAttributes;for(let z=0,Q=I.length;z<Q;z++)I[z]=0}function u(I){m(I,0)}function m(I,z){let Q=r.newAttributes,A=r.enabledAttributes,Z=r.attributeDivisors;if(Q[I]=1,A[I]===0)e.enableVertexAttribArray(I),A[I]=1;if(Z[I]!==z)e.vertexAttribDivisor(I,z),Z[I]=z}function T(){let I=r.newAttributes,z=r.enabledAttributes;for(let Q=0,A=z.length;Q<A;Q++)if(z[Q]!==I[Q])e.disableVertexAttribArray(Q),z[Q]=0}function E(I,z,Q,A,Z,j,O){if(O===!0)e.vertexAttribIPointer(I,z,Q,Z,j);else e.vertexAttribPointer(I,z,Q,A,Z,j)}function S(I,z,Q,A){b();let Z=A.attributes,j=Q.getAttributes(),O=z.defaultAttributeValues;for(let re in j){let X=j[re];if(X.location>=0){let ee=Z[re];if(ee===void 0){if(re==="instanceMatrix"&&I.instanceMatrix)ee=I.instanceMatrix;if(re==="instanceColor"&&I.instanceColor)ee=I.instanceColor}if(ee!==void 0){let H=ee.normalized,ne=ee.itemSize,W=t.get(ee);if(W===void 0)continue;let{buffer:q,type:xe,bytesPerElement:Te}=W,we=xe===e.INT||xe===e.UNSIGNED_INT||ee.gpuType===sa;if(ee.isInterleavedBufferAttribute){let ve=ee.data,Xe=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,De=ee.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ue=0;Ue<X.locationSize;Ue++)m(X.location+Ue,ve.meshPerAttribute);if(I.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=ve.meshPerAttribute*ve.count}else for(let Ue=0;Ue<X.locationSize;Ue++)u(X.location+Ue);e.bindBuffer(e.ARRAY_BUFFER,q);for(let Ue=0;Ue<X.locationSize;Ue++)E(X.location+Ue,ne/X.locationSize,xe,H,Xe*Te,(De+ne/X.locationSize*Ue)*Te,we)}else{if(ee.isInstancedBufferAttribute){for(let ve=0;ve<X.locationSize;ve++)m(X.location+ve,ee.meshPerAttribute);if(I.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=ee.meshPerAttribute*ee.count}else for(let ve=0;ve<X.locationSize;ve++)u(X.location+ve);e.bindBuffer(e.ARRAY_BUFFER,q);for(let ve=0;ve<X.locationSize;ve++)E(X.location+ve,ne/X.locationSize,xe,H,ne*Te,ne/X.locationSize*ve*Te,we)}}else if(O!==void 0){let H=O[re];if(H!==void 0)switch(H.length){case 2:e.vertexAttrib2fv(X.location,H);break;case 3:e.vertexAttrib3fv(X.location,H);break;case 4:e.vertexAttrib4fv(X.location,H);break;default:e.vertexAttrib1fv(X.location,H)}}}}T()}function w(){L();for(let I in i){let z=i[I];for(let Q in z){let A=z[Q];for(let Z in A){let j=A[Z];for(let O in j)f(j[O].object),delete j[O];delete A[Z]}}delete i[I]}}function C(I){if(i[I.id]===void 0)return;let z=i[I.id];for(let Q in z){let A=z[Q];for(let Z in A){let j=A[Z];for(let O in j)f(j[O].object),delete j[O];delete A[Z]}}delete i[I.id]}function p(I){for(let z in i){let Q=i[z];for(let A in Q){let Z=Q[A];if(Z[I.id]===void 0)continue;let j=Z[I.id];for(let O in j)f(j[O].object),delete j[O];delete Z[I.id]}}}function v(I){for(let z in i){let Q=i[z],A=I.isInstancedMesh===!0?I.id:0,Z=Q[A];if(Z===void 0)continue;for(let j in Z){let O=Z[j];for(let re in O)f(O[re].object),delete O[re];delete Z[j]}if(delete Q[A],Object.keys(Q).length===0)delete i[z]}}function L(){if(G(),a=!0,r===s)return;r=s,c(r.object)}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:G,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfObject:v,releaseStatesOfProgram:p,initAttributes:b,enableAttribute:u,disableUnusedAttributes:T}}function Pf(e,t,n){let i;function s(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,f){if(f===0)return;e.drawArraysInstanced(i,l,c,f),n.update(c,i,f)}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let h=0;for(let g=0;g<f;g++)h+=c[g];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Lf(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let p=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(p){if(p!==Sn&&i.convert(p)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(p){let v=p===Lt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(p!==tn&&p!==yn&&!v&&i.convert(p)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(p){if(p==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";p="mediump"}if(p==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);if(f!==c)Pe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f;let d=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.logarithmicDepthBuffer===!0&&d===!1;if(n.reversedDepthBuffer===!0&&d===!1)Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(n.logarithmicDepthBuffer===!0&&d===!0)Pe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let g=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),u=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:u,maxAttributes:m,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,maxSamples:w,samples:C}}function Nf(e){let t=this,n=null,i=0,s=!1,r=!1,a=new sn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let g=d.length!==0||h||i!==0||s;return s=h,i=d.length,g},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,g){let{clippingPlanes:y,clipIntersection:b,clipShadows:u}=d,m=e.get(d);if(!s||y===null||y.length===0||r&&!u)if(r)f(null);else c();else{let T=r?0:i,E=T*4,S=m.clippingState||null;l.value=S,S=f(y,h,E,g);for(let w=0;w!==E;++w)S[w]=n[w];m.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;t.numPlanes=i,t.numIntersection=0}function f(d,h,g,y){let b=d!==null?d.length:0,u=null;if(b!==0){if(u=l.value,y!==!0||u===null){let m=g+b*4,T=h.matrixWorldInverse;if(o.getNormalMatrix(T),u===null||u.length<m)u=new Float32Array(m);for(let E=0,S=g;E!==b;++E,S+=4)a.copy(d[E]).applyMatrix4(T,o),a.normal.toArray(u,S),u[S+3]=a.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,u}}class Er extends vt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new pr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ni(5,5,5),s=new dt({name:"CubemapFromEquirect",uniforms:jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:xn});s.uniforms.tEquirect.value=t;let r=new yt(i,s),a=t.minFilter;if(t.minFilter===Dn)t.minFilter=qt;return new gs(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}var vc=256,Df=3,Uf=20,Hc=256,Wc=16,Ff=3,Of=new D,Bf=new Ne;class Tr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gs(1,10,null),this._boxMesh=new yt(new Ni(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=0.1,i=100,s={}){let{size:r=256,position:a=Of}=s,o=this._renderer;this._setSize(r);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:f,autoClearColor:d,autoClearDepth:h,autoClearStencil:g}=o,y=e.background;if(o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,y===null)e.background=o.getClearColor(Bf);let b=new gs(n,i,c);if(b.position.copy(a),b.update(o,e),o.autoClear=f,o.autoClearColor=d,o.autoClearDepth=h,o.autoClearStencil=g,e.background=y,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vc,hc(e))}_fromTexture(e,t){if(e.mapping===as||e.mapping===Ri)this._setSize(e.image.length===0?vc:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=yc(e,!1,!1),n=Math.log2(e)-Df;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;if(n===null||n.width!==t||e&&n.depthBuffer===!1){if(n!==null)n.dispose();this._sourceTarget=yc(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let r=e.width>>t;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===as||e.mapping===Ri){if(this._cubemapMaterial===null)this._cubemapMaterial=Mc();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Sc();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=zf(),this._integrationMaterial=Gf();let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Wc);for(let r=0;r<=n;r++){let a=Tr.lodToRoughness(r,n);if(r>n-Ff)s.roughness.value=a,this._renderCube(e,r,this._integrationMaterial);else{let o=a>0?Math.log2(t)+0.5*Math.log2(6/(Hc*Math.pow(a,4)))+0.5:0;i.roughness.value=a,i.lodBias.value=o,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=kf();let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function yc(e,t,n){return new Er(e,{minFilter:Dn,generateMipmaps:t,type:Lt,colorSpace:ka,depthBuffer:n})}function ys(e,t,n){return new dt({name:e,uniforms:t,vertexShader:Ge.cube_vert,fragmentShader:n,side:Pt,blending:xn,depthTest:!1,depthWrite:!1})}function zf(){return ys("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hc}u

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
	`)}function Gf(){return ys("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Wc}},`

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
	`)}function kf(){return ys("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Uf}
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
	`)}function Sc(){return ys("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Mc(){return ys("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Hf(e){let t=new WeakMap,n=new WeakMap,i=null;function s(h,g=!1){if(h===null||h===void 0)return null;if(g)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let g=h.mapping;if(g===$s||g===Ks)if(t.has(h)){let y=t.get(h).texture;return o(y,h.mapping)}else{let y=h.image;if(y&&y.height>0){let b=new Er(y.height);return b.fromEquirectangularTexture(e,h),t.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let g=h.mapping,y=g===$s||g===Ks,b=g===as||g===Ri;if(y||b){let u=n.get(h),m=u!==void 0?u.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m){if(i===null)i=new Tr(e);return u=y?i.fromEquirectangular(h,u):i.fromCubemap(h,u),u.texture.pmremVersion=h.pmremVersion,n.set(h,u),u.texture}else if(u!==void 0)return u.texture;else{let T=h.image;if(y&&T&&T.height>0||b&&T&&l(T)){if(i===null)i=new Tr(e);return u=y?i.fromEquirectangular(h):i.fromCubemap(h),u.texture.pmremVersion=h.pmremVersion,n.set(h,u),h.addEventListener("dispose",f),u.texture}else return null}}}return h}function o(h,g){if(g===$s)h.mapping=as;else if(g===Ks)h.mapping=Ri;return h}function l(h){let g=0,y=6;for(let b=0;b<y;b++)if(h[b]!==void 0)g++;return g===y}function c(h){let g=h.target;g.removeEventListener("dispose",c);let y=t.get(g);if(y!==void 0)t.delete(g),y.dispose()}function f(h){let g=h.target;g.removeEventListener("dispose",f);let y=n.get(g);if(y!==void 0)n.delete(g),y.dispose()}function d(){if(t=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function Wf(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Yi("WebGLRenderer: "+i+" extension not supported.");return s}}}function Vf(e,t,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry((y)=>delete s[y]);function o(y){l(y.target)}function l(y){if(y.index!==null)t.remove(y.index);for(let u in y.attributes)t.remove(y.attributes[u]);y.removeEventListener("dispose",o),delete s[y.id],a.unregister(y);let b=r.get(y);if(b)t.remove(b),r.delete(y);if(i.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0)delete y._maxInstanceCount;n.memory.geometries--}function c(y,b){if(s[b.id]!==void 0)return b;return b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),n.memory.geometries++,b}function f(y){let b=y.attributes;for(let u in b)t.update(b[u],e.ARRAY_BUFFER)}function d(y){let b=y.index,u=y.attributes.position,m=0;if(u===void 0)return;let T=b!==null?b.array.length:u.array.length/3-1,S=new(u.count>=65535?ur:hr)(Math.ceil(T/3)*6,1),w=S.array;if(b!==null){let p=b.array;m=b.version;for(let v=0,L=0;v<T;v+=3){let G=p[v+0],I=p[v+1],z=p[v+2];w[L++]=G,w[L++]=I,w[L++]=I,w[L++]=z,w[L++]=z,w[L++]=G}}else{m=u.version;for(let p=0,v=0;p<T;p+=3){let L=p+0,G=p+1,I=p+2;w[v++]=L,w[v++]=G,w[v++]=G,w[v++]=I,w[v++]=I,w[v++]=L}}S.version=m;let C=r.get(y);if(C)t.remove(C);r.set(y,S)}function h(y){let b=r.get(y);if(b){let u=y.index;if(u!==null){if(b.version<u.version)d(y)}}else d(y);return r.get(y)}function g(){for(let y in s){let b=s[y].deref();if(b!==void 0)l(b)}}return{get:c,update:f,getWireframeAttribute:h,dispose:g}}function Xf(e,t,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){e.drawElements(i,h,r,d*a),n.update(h,i,1)}function c(d,h,g){if(g===0)return;e.drawElementsInstanced(i,h,r,d*a,g),n.update(h,i,g)}function f(d,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,g);let b=0;for(let u=0;u<g;u++)b+=h[u];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function qf(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Yf(e,t,n){let i=new WeakMap,s=new rt;function r(a,o,l){let c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0,h=i.get(o);if(h===void 0||h.count!==d){let L=function(){p.dispose(),i.delete(o),o.removeEventListener("dispose",L)};if(h!==void 0)h.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],E=0;if(g===!0)E=1;if(y===!0)E=2;if(b===!0)E=3;let S=o.attributes.position.count*E,w=1;if(S>t.maxTextureSize)w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize;let C=new Float32Array(S*w*4*d),p=new or(C,S,w,d);p.type=yn,p.needsUpdate=!0;let v=E*4;for(let G=0;G<d;G++){let I=u[G],z=m[G],Q=T[G],A=S*w*4*G;for(let Z=0;Z<I.count;Z++){let j=Z*v;if(g===!0)s.fromBufferAttribute(I,Z),C[A+j+0]=s.x,C[A+j+1]=s.y,C[A+j+2]=s.z,C[A+j+3]=0;if(y===!0)s.fromBufferAttribute(z,Z),C[A+j+4]=s.x,C[A+j+5]=s.y,C[A+j+6]=s.z,C[A+j+7]=0;if(b===!0)s.fromBufferAttribute(Q,Z),C[A+j+8]=s.x,C[A+j+9]=s.y,C[A+j+10]=s.z,C[A+j+11]=Q.itemSize===4?s.w:1}}h={count:d,texture:p,size:new Ce(S,w)},i.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let g=0;for(let b=0;b<c.length;b++)g+=c[b];let y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function Zf(e,t,n,i,s){let r=new WeakMap;function a(c){let f=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==f)t.update(h),r.set(h,f);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==f){if(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,e.ARRAY_BUFFER);r.set(c,f)}}if(c.isSkinnedMesh){let g=c.skeleton;if(r.get(g)!==f)g.update(),r.set(g,f)}return h}function o(){r=new WeakMap}function l(c){let f=c.target;if(f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null)n.remove(f.instanceColor)}return{update:a,dispose:o}}var Jf={[ji]:"LINEAR_TONE_MAPPING",[es]:"REINHARD_TONE_MAPPING",[ts]:"CINEON_TONE_MAPPING",[ns]:"ACES_FILMIC_TONE_MAPPING",[ss]:"AGX_TONE_MAPPING",[rs]:"NEUTRAL_TONE_MAPPING",[is]:"CUSTOM_TONE_MAPPING"};function $f(e,t,n,i,s,r){let a=new vt(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,f=new bt;f.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ut([0,2,0,0,2,0],2));let d=new ps({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new yt(f,d),g=new ms(-1,1,1,-1,0,1),y=null,b=null,u=!1,m,T=null,E=[],S=!1;this.setSize=function(w,C){if(a.setSize(w,C),o!==null)o.setSize(w,C);if(l!==null)l.setSize(w,C);for(let p=0;p<E.length;p++){let v=E[p];if(v.setSize)v.setSize(w,C)}},this.setEffects=function(w){E=w,S=E.length>0&&E[0].isRenderPass===!0;let{width:C,height:p}=a;if(E.length>0&&o===null)o=new vt(C,p,{type:Lt,depthBuffer:!1,stencilBuffer:!1}),l=new vt(C,p,{type:Lt,depthBuffer:!1,stencilBuffer:!1});let v=s===!0&&E.some((L)=>L.needsDepthTexture===!0);if(v!==(a.depthTexture!==null)){if(v===!0&&c===null){if(c=new Bn(C,p),r===!0)c.format=Fn,c.type=qn}a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v}for(let L=0;L<E.length;L++){let G=E[L];if(G.setSize)G.setSize(C,p);if(v&&G.needsDepthTexture===!0&&G.setDepthTexture)G.setDepthTexture(c)}},this.begin=function(w,C){if(u)return!1;if(w.toneMapping===an&&E.length===0)return!1;if(T=C,C!==null){let{width:p,height:v}=C;if(a.width!==p||a.height!==v)this.setSize(p,v)}if(S===!1)w.setRenderTarget(a);return m=w.toneMapping,w.toneMapping=an,!0},this.hasRenderPass=function(){return S},this.end=function(w,C){w.toneMapping=m,u=!0;let p=a,v=o;for(let L=0;L<E.length;L++){let G=E[L];if(G.enabled===!1)continue;if(G.render(w,v,p,C),G.needsSwap!==!1)p=v,v=v===o?l:o}if(y!==w.outputColorSpace||b!==w.toneMapping){if(y=w.outputColorSpace,b=w.toneMapping,d.defines={},ke.getTransfer(y)===Ke)d.defines.SRGB_TRANSFER="";let L=Jf[b];if(L)d.defines[L]="";d.needsUpdate=!0}d.uniforms.tDiffuse.value=p.texture,w.setRenderTarget(T),w.render(h,g),T=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();f.dispose(),d.dispose()}}var Vc=new Mt,Xc=new Bn(1,1),qc=new gr(1),Yc=new or,Zc=new $a,Jc=new pr,bc=[],Tc=[],Ec=new Float32Array(16),wc=new Float32Array(9),Ac=new Float32Array(4);function Ui(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=bc[s];if(r===void 0)r=new Float32Array(s),bc[s]=r;if(t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function ft(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function pt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function wr(e,t){let n=Tc[t];if(n===void 0)n=new Int32Array(t),Tc[t]=n;for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Kf(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function Qf(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(ft(n,t))return;e.uniform2fv(this.addr,t),pt(n,t)}}function jf(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else if(t.r!==void 0){if(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b}else{if(ft(n,t))return;e.uniform3fv(this.addr,t),pt(n,t)}}function ep(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(ft(n,t))return;e.uniform4fv(this.addr,t),pt(n,t)}}function tp(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ft(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),pt(n,t)}else{if(ft(n,i))return;Ac.set(i),e.uniformMatrix2fv(this.addr,!1,Ac),pt(n,i)}}function np(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ft(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),pt(n,t)}else{if(ft(n,i))return;wc.set(i),e.uniformMatrix3fv(this.addr,!1,wc),pt(n,i)}}function ip(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ft(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),pt(n,t)}else{if(ft(n,i))return;Ec.set(i),e.uniformMatrix4fv(this.addr,!1,Ec),pt(n,i)}}function sp(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function rp(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(ft(n,t))return;e.uniform2iv(this.addr,t),pt(n,t)}}function ap(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(ft(n,t))return;e.uniform3iv(this.addr,t),pt(n,t)}}function op(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(ft(n,t))return;e.uniform4iv(this.addr,t),pt(n,t)}}function lp(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function cp(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(ft(n,t))return;e.uniform2uiv(this.addr,t),pt(n,t)}}function hp(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(ft(n,t))return;e.uniform3uiv(this.addr,t),pt(n,t)}}function up(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(ft(n,t))return;e.uniform4uiv(this.addr,t),pt(n,t)}}function Ar(e){if(e.version===0)e.compareFunction=Xa,e.needsUpdate=!0;return e}function dp(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===e.SAMPLER_2D_SHADOW)r=Ar(Xc);else r=Vc;n.setTexture2D(t||r,s)}function fp(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(t||Zc,s)}function pp(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===e.SAMPLER_CUBE_SHADOW)r=Ar(qc);else r=Jc;n.setTextureCube(t||r,s)}function mp(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(t||Yc,s)}function gp(e){switch(e){case 5126:return Kf;case 35664:return Qf;case 35665:return jf;case 35666:return ep;case 35674:return tp;case 35675:return np;case 35676:return ip;case 5124:case 35670:return sp;case 35667:case 35671:return rp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return hp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function _p(e,t){e.uniform1fv(this.addr,t)}function xp(e,t){let n=Ui(t,this.size,2);e.uniform2fv(this.addr,n)}function vp(e,t){let n=Ui(t,this.size,3);e.uniform3fv(this.addr,n)}function yp(e,t){let n=Ui(t,this.size,4);e.uniform4fv(this.addr,n)}function Sp(e,t){let n=Ui(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Mp(e,t){let n=Ui(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function bp(e,t){let n=Ui(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Tp(e,t){e.uniform1iv(this.addr,t)}function Ep(e,t){e.uniform2iv(this.addr,t)}function wp(e,t){e.uniform3iv(this.addr,t)}function Ap(e,t){e.uniform4iv(this.addr,t)}function Rp(e,t){e.uniform1uiv(this.addr,t)}function Cp(e,t){e.uniform2uiv(this.addr,t)}function Ip(e,t){e.uniform3uiv(this.addr,t)}function Pp(e,t){e.uniform4uiv(this.addr,t)}function Lp(e,t,n){let i=this.cache,s=t.length,r=wr(n,s);if(!ft(i,r))e.uniform1iv(this.addr,r),pt(i,r);let a;if(this.type===e.SAMPLER_2D_SHADOW)a=Ar(Xc);else a=Vc;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||a,r[o])}function Np(e,t,n){let i=this.cache,s=t.length,r=wr(n,s);if(!ft(i,r))e.uniform1iv(this.addr,r),pt(i,r);for(let a=0;a!==s;++a)n.setTexture3D(t[a]||Zc,r[a])}function Dp(e,t,n){let i=this.cache,s=t.length,r=wr(n,s);if(!ft(i,r))e.uniform1iv(this.addr,r),pt(i,r);let a;if(this.type===e.SAMPLER_CUBE_SHADOW)a=Ar(qc);else a=Jc;for(let o=0;o!==s;++o)n.setTextureCube(t[o]||a,r[o])}function Up(e,t,n){let i=this.cache,s=t.length,r=wr(n,s);if(!ft(i,r))e.uniform1iv(this.addr,r),pt(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||Yc,r[a])}function Fp(e){switch(e){case 5126:return _p;case 35664:return xp;case 35665:return vp;case 35666:return yp;case 35674:return Sp;case 35675:return Mp;case 35676:return bp;case 5124:case 35670:return Tp;case 35667:case 35671:return Ep;case 35668:case 35672:return wp;case 35669:case 35673:return Ap;case 5125:return Rp;case 36294:return Cp;case 36295:return Ip;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Up}}class $c{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gp(t.type)}}class Kc{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fp(t.type)}}class Qc{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(e,t[a.id],n)}}}var _o=/(\w+)(\])?(\[|\.)?/g;function Rc(e,t){e.seq.push(t),e.map[t.id]=t}function Op(e,t,n){let i=e.name,s=i.length;_o.lastIndex=0;while(!0){let r=_o.exec(i),a=_o.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Rc(n,c===void 0?new $c(o,e,t):new Kc(o,e,t));break}else{let d=n.map[o];if(d===void 0)d=new Qc(o),Rc(n,d);n=d}}}class vs{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Op(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(e,t,n,i){let s=this.map[t];if(s!==void 0)s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];if(i!==void 0)this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let a=t[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(e,o.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];if(r.id in t)n.push(r)}return n}}function Cc(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var Bp=37297,zp=0;function Gp(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Ic=new Fe;function kp(e){ke._getMatrix(Ic,ke.workingColorSpace,e);let t=`mat3( ${Ic.elements.map((n)=>n.toFixed(4))} )`;switch(ke.getTransfer(e)){case Ha:return[t,"LinearTransferOETF"];case Ke:return[t,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Pc(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+Gp(e.getShaderSource(t),o)}else return r}function Hp(e,t){let n=kp(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Wp={[ji]:"Linear",[es]:"Reinhard",[ts]:"Cineon",[ns]:"ACESFilmic",[ss]:"AgX",[rs]:"Neutral",[is]:"Custom"};function Vp(e,t){let n=Wp[t];if(n===void 0)return Pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var br=new D;function Xp(){ke.getLuminanceCoefficients(br);let e=br.x.toFixed(4),t=br.y.toFixed(4),n=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function qp(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function Yp(e){let t=[];for(let n in e){let i=e[n];if(i===!1)continue;t.push("#define "+n+" "+i)}return t.join(`
`)}function Zp(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;if(r.type===e.FLOAT_MAT2)o=2;if(r.type===e.FLOAT_MAT3)o=3;if(r.type===e.FLOAT_MAT4)o=4;n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function xs(e){return e!==""}function Lc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Nc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(e){return e.replace(Jp,$p)}function $p(e,t){let n=Ge[t];if(n===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return vo(n)}var Kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(e){return e.replace(Kp,Qp)}function Qp(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uc(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var jp={[Ki]:"SHADOWMAP_TYPE_PCF",[Ei]:"SHADOWMAP_TYPE_VSM"};function em(e){return jp[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tm={[Ri]:"ENVMAP_MODE_REFRACTION"};function nm(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return tm[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var im={[Gl]:"ENVMAP_BLENDING_MULTIPLY",[kl]:"ENVMAP_BLENDING_MIX",[Hl]:"ENVMAP_BLENDING_ADD"};function sm(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return im[e.combine]||"ENVMAP_BLENDING_NONE"}function rm(e,t,n,i){let s=e.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=em(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=nm(n),d=sm(n),h=qp(n),g=Yp(r),y=s.createProgram(),b,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(xs).join(`
`),b.length>0)b+=`
`;if(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(xs).join(`
`),u.length>0)u+=`
`}else b=[Uc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),u=[Uc(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==an?"#define TONE_MAPPING":"",n.toneMapping!==an?Ge.tonemapping_pars_fragment:"",n.toneMapping!==an?Vp("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Hp("linearToOutputTexel",n.outputColorSpace),Xp(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xs).join(`
`);if(a=vo(a),a=Lc(a,n),a=Nc(a,n),o=vo(o),o=Lc(o,n),o=Nc(o,n),a=Dc(a),o=Dc(o),n.isRawShaderMaterial!==!0)m=`#version 300 es
`,b=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,u=["#define varying in",n.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u;let T=m+b+a,E=m+u+o,S=Cc(s,s.VERTEX_SHADER,T),w=Cc(s,s.FRAGMENT_SHADER,E);if(s.attachShader(y,S),s.attachShader(y,w),n.index0AttributeName!==void 0)s.bindAttribLocation(y,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(y,0,"position");s.linkProgram(y);function C(G){if(e.debug.checkShaderErrors){let I=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(S)||"",Q=s.getShaderInfoLog(w)||"",A=I.trim(),Z=z.trim(),j=Q.trim(),O=!0,re=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(O=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(s,y,S,w);else{let X=Pc(s,S,"vertex"),ee=Pc(s,w,"fragment");Le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+A+`
`+X+`
`+ee)}else if(A!=="")Pe("WebGLProgram: Program Info Log:",A);else if(Z===""||j==="")re=!1;if(re)G.diagnostics={runnable:O,programLog:A,vertexShader:{log:Z,prefix:b},fragmentShader:{log:j,prefix:u}}}s.deleteShader(S),s.deleteShader(w),p=new vs(s,y),v=Zp(s,y)}let p;this.getUniforms=function(){if(p===void 0)C(this);return p};let v;this.getAttributes=function(){if(v===void 0)C(this);return v};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(L===!1)L=s.getProgramParameter(y,Bp);return L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zp++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=w,this}var am=0;class jc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);if(i.has(t)===!1)i.add(t),t.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let n of t)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);if(n===void 0)n=new Set,t.set(e,n);return n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);if(n===void 0)n=new eh(e),t.set(e,n);return n}}class eh{constructor(e){this.id=am++,this.code=e,this.usedTimes=0}}function om(e){return e===Yn||e===sr||e===rr}function lm(e,t,n,i,s,r){let a=new lr,o=new jc,l=new Set,c=[],f=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(p){if(l.add(p),p===0)return"uv";return`uv${p}`}function y(p,v,L,G,I,z){let Q=G.fog,A=I.geometry,Z=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?G.environment:null,j=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,O=t.get(p.envMap||Z,j),re=h[p.type],X=i.precision;if(p.precision!==null){if(X=i.getMaxPrecision(p.precision),X!==p.precision)Pe("WebGLProgram.getParameters:",p.precision,"not supported, using",X,"instead.")}let ee=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,H=ee!==void 0?ee.length:0,ne=0;if(A.morphAttributes.position!==void 0)ne=1;if(A.morphAttributes.normal!==void 0)ne=2;if(A.morphAttributes.color!==void 0)ne=3;let W,q,xe,Te;if(re){let ge=cn[re];W=ge.vertexShader,q=ge.fragmentShader}else{W=p.vertexShader,q=p.fragmentShader;let ge=o.getVertexShaderStage(p),je=o.getFragmentShaderStage(p);o.update(p,ge,je),xe=ge.id,Te=je.id}let we=e.getRenderTarget(),ve=e.state.buffers.depth.getReversed(),Xe=I.isInstancedMesh===!0,De=I.isBatchedMesh===!0,Ue=!!p.map,Ze=!!p.matcap,qe=!!O,at=qe&&O.isPMREMTexture===!0,ot=!!p.aoMap,Ft=!!p.lightMap,Gt=!!p.bumpMap&&p.wireframe===!1,lt=!!p.normalMap,Tt=!!p.displacementMap,Ot=!!p.emissiveMap,Bt=!!p.metalnessMap,Jt=!!p.roughnessMap,N=p.anisotropy>0,$t=p.clearcoat>0,Qe=p.diffuseRoughness>0,mt=p.dispersion>0,fe=p.retroreflectivity>0,tt=p.iridescence>0,Ie=p.sheen>0,Oe=p.transmission>0,Et=N&&!!p.anisotropyMap,M=$t&&!!p.clearcoatMap,_=$t&&!!p.clearcoatNormalMap,U=$t&&!!p.clearcoatRoughnessMap,ie=Qe&&!!p.diffuseRoughnessMap,te=tt&&!!p.iridescenceMap,oe=tt&&!!p.iridescenceThicknessMap,he=Ie&&!!p.sheenColorMap,V=Ie&&!!p.sheenRoughnessMap,K=!!p.specularMap,le=!!p.specularColorMap,R=!!p.specularIntensityMap,J=Oe&&!!p.transmissionMap,Y=Oe&&!!p.thicknessMap,se=!!p.gradientMap,ae=!!p.alphaMap,de=p.alphaTest>0,Ae=!!p.alphaHash,Ee=!!p.extensions,me=an;if(p.toneMapped){if(we===null||we.isXRRenderTarget===!0)me=e.toneMapping}let Re=at?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,ze={shaderID:re,shaderType:p.type,shaderName:p.name,vertexShader:W,fragmentShader:q,defines:p.defines,customVertexShaderID:xe,customFragmentShaderID:Te,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:X,batching:De,batchingColor:De&&I._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&I.instanceColor!==null,instancingMorph:Xe&&I.morphTexture!==null,outputColorSpace:we===null?e.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:Ue,matcap:Ze,envMap:qe,envMapMode:qe&&O.mapping,envMapPMREM:at,envMapMaxLod:at?Re.length-1:null,envMapSize:at?Re[0].width:null,aoMap:ot,lightMap:Ft,bumpMap:Gt,normalMap:lt,displacementMap:Tt,emissiveMap:Ot,normalMapObjectSpace:lt&&p.normalMapType===jl,normalMapTangentSpace:lt&&p.normalMapType===Ga,packedNormalMap:lt&&p.normalMapType===Ga&&om(p.normalMap.format),metalnessMap:Bt,roughnessMap:Jt,anisotropy:N,anisotropyMap:Et,clearcoat:$t,clearcoatMap:M,clearcoatNormalMap:_,clearcoatRoughnessMap:U,diffuseRoughness:Qe,diffuseRoughnessMap:ie,dispersion:mt,retroreflection:fe,iridescence:tt,iridescenceMap:te,iridescenceThicknessMap:oe,sheen:Ie,sheenColorMap:he,sheenRoughnessMap:V,specularMap:K,specularColorMap:le,specularIntensityMap:R,transmission:Oe,transmissionMap:J,thicknessMap:Y,gradientMap:se,opaque:p.transparent===!1&&p.blending===Qi&&p.alphaToCoverage===!1,alphaMap:ae,alphaTest:de,alphaHash:Ae,combine:p.combine,mapUv:Ue&&g(p.map.channel),aoMapUv:ot&&g(p.aoMap.channel),lightMapUv:Ft&&g(p.lightMap.channel),bumpMapUv:Gt&&g(p.bumpMap.channel),normalMapUv:lt&&g(p.normalMap.channel),displacementMapUv:Tt&&g(p.displacementMap.channel),emissiveMapUv:Ot&&g(p.emissiveMap.channel),metalnessMapUv:Bt&&g(p.metalnessMap.channel),roughnessMapUv:Jt&&g(p.roughnessMap.channel),anisotropyMapUv:Et&&g(p.anisotropyMap.channel),clearcoatMapUv:M&&g(p.clearcoatMap.channel),clearcoatNormalMapUv:_&&g(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&g(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&g(p.diffuseRoughnessMap.channel),iridescenceMapUv:te&&g(p.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(p.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(p.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(p.sheenRoughnessMap.channel),specularMapUv:K&&g(p.specularMap.channel),specularColorMapUv:le&&g(p.specularColorMap.channel),specularIntensityMapUv:R&&g(p.specularIntensityMap.channel),transmissionMapUv:J&&g(p.transmissionMap.channel),thicknessMapUv:Y&&g(p.thicknessMap.channel),alphaMapUv:ae&&g(p.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(lt||N),vertexNormals:!!A.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!A.attributes.uv&&(Ue||ae),fog:!!Q,useFog:p.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||A.attributes.normal===void 0&&lt===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ne,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:z.filter((ge)=>ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:me,decodeVideoTexture:Ue&&p.map.isVideoTexture===!0&&ke.getTransfer(p.map.colorSpace)===Ke,decodeVideoTextureEmissive:Ot&&p.emissiveMap.isVideoTexture===!0&&ke.getTransfer(p.emissiveMap.colorSpace)===Ke,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===rn,flipSided:p.side===Pt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:Ee&&p.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&p.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function b(p){let v=[];if(p.shaderID)v.push(p.shaderID);else v.push(p.customVertexShaderID),v.push(p.customFragmentShaderID);if(p.defines!==void 0)for(let L in p.defines)v.push(L),v.push(p.defines[L]);if(p.isRawShaderMaterial===!1)u(v,p),m(v,p),v.push(e.outputColorSpace);return v.push(p.customProgramCacheKey),v.join()}function u(p,v){p.push(v.precision),p.push(v.outputColorSpace),p.push(v.envMapMode),p.push(v.envMapPMREM),p.push(v.envMapMaxLod),p.push(v.envMapSize),p.push(v.mapUv),p.push(v.alphaMapUv),p.push(v.lightMapUv),p.push(v.aoMapUv),p.push(v.bumpMapUv),p.push(v.normalMapUv),p.push(v.displacementMapUv),p.push(v.emissiveMapUv),p.push(v.metalnessMapUv),p.push(v.roughnessMapUv),p.push(v.anisotropyMapUv),p.push(v.clearcoatMapUv),p.push(v.clearcoatNormalMapUv),p.push(v.clearcoatRoughnessMapUv),p.push(v.diffuseRoughnessMapUv),p.push(v.iridescenceMapUv),p.push(v.iridescenceThicknessMapUv),p.push(v.sheenColorMapUv),p.push(v.sheenRoughnessMapUv),p.push(v.specularMapUv),p.push(v.specularColorMapUv),p.push(v.specularIntensityMapUv),p.push(v.transmissionMapUv),p.push(v.thicknessMapUv),p.push(v.combine),p.push(v.fogExp2),p.push(v.sizeAttenuation),p.push(v.morphTargetsCount),p.push(v.numSunLights),p.push(v.numDirLights),p.push(v.numPointLights),p.push(v.numSpotLights),p.push(v.numSpotLightMaps),p.push(v.numHemiLights),p.push(v.numRectAreaLights),p.push(v.numSunLightShadows),p.push(v.numDirLightShadows),p.push(v.numPointLightShadows),p.push(v.numSpotLightShadows),p.push(v.numSpotLightShadowsWithMaps),p.push(v.numLightProbes),p.push(v.numLightProbeGrids),p.push(v.shadowMapType),p.push(v.toneMapping),p.push(v.numClippingPlanes),p.push(v.numClipIntersection),p.push(v.depthPacking)}function m(p,v){if(a.disableAll(),v.instancing)a.enable(0);if(v.instancingColor)a.enable(1);if(v.instancingMorph)a.enable(2);if(v.matcap)a.enable(3);if(v.envMap)a.enable(4);if(v.normalMapObjectSpace)a.enable(5);if(v.normalMapTangentSpace)a.enable(6);if(v.clearcoat)a.enable(7);if(v.iridescence)a.enable(8);if(v.alphaTest)a.enable(9);if(v.vertexColors)a.enable(10);if(v.vertexAlphas)a.enable(11);if(v.vertexUv1s)a.enable(12);if(v.vertexUv2s)a.enable(13);if(v.vertexUv3s)a.enable(14);if(v.vertexTangents)a.enable(15);if(v.anisotropy)a.enable(16);if(v.alphaHash)a.enable(17);if(v.batching)a.enable(18);if(v.dispersion)a.enable(19);if(v.retroreflection)a.enable(24);if(v.diffuseRoughness)a.enable(25);if(v.batchingColor)a.enable(20);if(v.gradientMap)a.enable(21);if(v.packedNormalMap)a.enable(22);if(v.vertexNormals)a.enable(23);if(p.push(a.mask),a.disableAll(),v.fog)a.enable(0);if(v.useFog)a.enable(1);if(v.flatShading)a.enable(2);if(v.logarithmicDepthBuffer)a.enable(3);if(v.reversedDepthBuffer)a.enable(4);if(v.skinning)a.enable(5);if(v.morphTargets)a.enable(6);if(v.morphNormals)a.enable(7);if(v.morphColors)a.enable(8);if(v.premultipliedAlpha)a.enable(9);if(v.shadowMapEnabled)a.enable(10);if(v.doubleSided)a.enable(11);if(v.flipSided)a.enable(12);if(v.useDepthPacking)a.enable(13);if(v.dithering)a.enable(14);if(v.transmission)a.enable(15);if(v.sheen)a.enable(16);if(v.opaque)a.enable(17);if(v.pointsUvs)a.enable(18);if(v.decodeVideoTexture)a.enable(19);if(v.decodeVideoTextureEmissive)a.enable(20);if(v.alphaToCoverage)a.enable(21);if(v.numLightProbeGrids>0)a.enable(22);if(v.hasPositionAttribute)a.enable(23);p.push(a.mask)}function T(p){let v=h[p.type],L;if(v){let G=cn[v];L=Tn.clone(G.uniforms)}else L=p.uniforms;return L}function E(p,v){let L=f.get(v);if(L!==void 0)++L.usedTimes;else L=new rm(e,v,p,s),c.push(L),f.set(v,L);return L}function S(p){if(--p.usedTimes===0){let v=c.indexOf(p);c[v]=c[c.length-1],c.pop(),f.delete(p.cacheKey),p.destroy()}}function w(p){o.remove(p)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:b,getUniforms:T,acquireProgram:E,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:C}}function cm(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);if(o===void 0)o={},e.set(a,o);return o}function i(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function hm(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function Fc(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Oc(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(h){let g=0;if(h.isInstancedMesh)g+=2;if(h.isSkinnedMesh)g+=1;return g}function o(h,g,y,b,u,m){let T=e[t];if(T===void 0)T={id:h.id,object:h,geometry:g,material:y,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:u,group:m},e[t]=T;else T.id=h.id,T.object=h,T.geometry=g,T.material=y,T.materialVariant=a(h),T.groupOrder=b,T.renderOrder=h.renderOrder,T.z=u,T.group=m;return t++,T}function l(h,g,y,b,u,m,T){if(T.reversedDepth===!0)u=-u;let E=o(h,g,y,b,u,m);if(y.transmission>0)i.push(E);else if(y.transparent===!0)s.push(E);else n.push(E)}function c(h,g,y,b,u,m){let T=o(h,g,y,b,u,m);if(y.transmission>0)i.unshift(T);else if(y.transparent===!0)s.unshift(T);else n.unshift(T)}function f(h,g){if(n.length>1)n.sort(h||hm);if(i.length>1)i.sort(g||Fc);if(s.length>1)s.sort(g||Fc)}function d(){for(let h=t,g=e.length;h<g;h++){let y=e[h];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:f}}function um(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;if(r===void 0)a=new Oc,e.set(i,[a]);else if(s>=r.length)a=new Oc,r.push(a);else a=r[s];return a}function n(){e=new WeakMap}return{get:t,dispose:n}}function dm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new D,color:new Ne};break;case"SpotLight":n={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":n={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return e[t.id]=n,n}}}function fm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=n,n}}}var pm=0;function mm(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function gm(e){let t=new dm,n=fm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new it,a=new it;function o(c){let f=0,d=0,h=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,y=0,b=0,u=0,m=0,T=0,E=0,S=0,w=0,C=0,p=0,v=0,L=0,G=0;c.sort(mm);for(let z=0,Q=c.length;z<Q;z++){let A=c[z],{color:Z,intensity:j,distance:O}=A,re=null;if(A.shadow&&A.shadow.map)if(A.shadow.map.texture.format===Yn)re=A.shadow.map.texture;else re=A.shadow.map.depthTexture||A.shadow.map.texture;if(A.isAmbientLight)f+=Z.r*j,d+=Z.g*j,h+=Z.b*j;else if(A.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(A.sh.coefficients[X],j);G++}else if(A.isSunLight){let X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let ee=A.shadow,H=n.get(A);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[y]=H,i.sunShadowMap[y]=re;let ne=ee.getViewportCount();for(let W=0;W<ne;W++)i.sunShadowMatrix[b+W]=ee.getMatrix(W),i.sunShadowCascade[b+W]=ee._cascadeData[W];b+=ne,y++}i.sun[g]=X,g++}else if(A.isDirectionalLight){let X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let ee=A.shadow,H=n.get(A);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,i.directionalShadow[u]=H,i.directionalShadowMap[u]=re,i.directionalShadowMatrix[u]=A.shadow.matrix,w++}i.directional[u]=X,u++}else if(A.isSpotLight){let X=t.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(Z).multiplyScalar(j),X.distance=O,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,i.spot[T]=X;let ee=A.shadow;if(A.map){if(i.spotLightMap[v]=A.map,v++,ee.updateMatrices(A),A.castShadow)L++}if(i.spotLightMatrix[T]=ee.matrix,A.castShadow){let H=n.get(A);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,i.spotShadow[T]=H,i.spotShadowMap[T]=re,p++}T++}else if(A.isRectAreaLight){let X=t.get(A);X.color.copy(Z).multiplyScalar(j),X.halfWidth.set(A.width*0.5,0,0),X.halfHeight.set(0,A.height*0.5,0),i.rectArea[E]=X,E++}else if(A.isPointLight){let X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){let ee=A.shadow,H=n.get(A);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,H.shadowCameraNear=ee.camera.near,H.shadowCameraFar=ee.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=re,i.pointShadowMatrix[m]=A.shadow.matrix,C++}i.point[m]=X,m++}else if(A.isHemisphereLight){let X=t.get(A);X.skyColor.copy(A.color).multiplyScalar(j),X.groundColor.copy(A.groundColor).multiplyScalar(j),i.hemi[S]=X,S++}}if(E>0)if(e.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2;else i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2;i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;let I=i.hash;if(I.sunLength!==g||I.directionalLength!==u||I.pointLength!==m||I.spotLength!==T||I.rectAreaLength!==E||I.hemiLength!==S||I.numSunShadows!==y||I.numDirectionalShadows!==w||I.numPointShadows!==C||I.numSpotShadows!==p||I.numSpotMaps!==v||I.numLightProbes!==G)i.sun.length=g,i.directional.length=u,i.spot.length=T,i.rectArea.length=E,i.point.length=m,i.hemi.length=S,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=p,i.spotShadowMap.length=p,i.spotLightMatrix.length=p+v-L,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=G,I.sunLength=g,I.directionalLength=u,I.pointLength=m,I.spotLength=T,I.rectAreaLength=E,I.hemiLength=S,I.numSunShadows=y,I.numDirectionalShadows=w,I.numPointShadows=C,I.numSpotShadows=p,I.numSpotMaps=v,I.numLightProbes=G,i.version=pm++}function l(c,f){let d=0,h=0,g=0,y=0,b=0,u=0,m=f.matrixWorldInverse;for(let T=0,E=c.length;T<E;T++){let S=c[T];if(S.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),d++}else if(S.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(S.isSpotLight){let w=i.spot[y];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),y++}else if(S.isRectAreaLight){let w=i.rectArea[b];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(S.width*0.5,0,0),w.halfHeight.set(0,S.height*0.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){let w=i.point[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),g++}else if(S.isHemisphereLight){let w=i.hemi[u];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),u++}}}return{setup:o,setupView:l,state:i}}function Bc(e){let t=new gm(e),n=[],i=[],s=[];function r(d){f.camera=d,n.length=0,i.length=0,s.length=0}function a(d){if(d.isLightProbeGrid)s.push(d);else n.push(d)}function o(d){i.push(d)}function l(){t.setup(n),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){t.setupView(n,d)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function _m(e){let t=new WeakMap;function n(s,r=0){let a=t.get(s),o;if(a===void 0)o=new Bc(e),t.set(s,[o]);else if(r>=a.length)o=new Bc(e),a.push(o);else o=a[r];return o}function i(){t=new WeakMap}return{get:n,dispose:i}}var xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vm=`uniform sampler2D shadow_pass;
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
}`,ym=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Sm=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],zc=new it,_s=new D,xo=new D;function Mm(e,t,n){let i=new Ti,s=new Ce,r=new Ce,a=new rt,o=new eo,l=new to,c={},f=n.maxTextureSize,d={[wi]:Pt,[Pt]:wi,[rn]:rn},h=new dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:xm,fragmentShader:vm}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let y=new bt;y.setAttribute("position",new Vt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let b=new yt(y,h),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ki;let m=this.type;this.render=function(C,p,v){if(u.enabled===!1)return;if(u.autoUpdate===!1&&u.needsUpdate===!1)return;if(C.length===0)return;if(this.type===dl)Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ki;let L=e.getRenderTarget(),G=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),z=e.state;if(z.setBlending(xn),z.buffers.depth.getReversed()===!0)z.buffers.color.setClear(0,0,0,0);else z.buffers.color.setClear(1,1,1,1);z.buffers.depth.setTest(!0),z.setScissorTest(!1);let Q=m!==this.type;if(Q)p.traverse(function(A){if(A.material)if(Array.isArray(A.material))A.material.forEach((Z)=>Z.needsUpdate=!0);else A.material.needsUpdate=!0});for(let A=0,Z=C.length;A<Z;A++){let j=C[A],O=j.shadow;if(O===void 0){Pe("WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let re=O.getFrameExtents();if(s.multiply(re),r.copy(O.mapSize),s.x>f||s.y>f){if(s.x>f)r.x=Math.floor(f/re.x),s.x=r.x*re.x,O.mapSize.x=r.x;if(s.y>f)r.y=Math.floor(f/re.y),s.y=r.y*re.y,O.mapSize.y=r.y}let X=e.state.buffers.depth.getReversed();if(O.camera._reversedDepth=X,O.map===null||Q===!0){if(O.map!==null){if(O.map.depthTexture!==null)O.map.depthTexture.dispose(),O.map.depthTexture=null;O.map.dispose()}if(this.type===Ei){if(j.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new vt(s.x,s.y,{format:Yn,type:Lt,minFilter:qt,magFilter:qt,generateMipmaps:!1}),O.map.texture.name=j.name+".shadowMap",O.map.depthTexture=new Bn(s.x,s.y,yn),O.map.depthTexture.name=j.name+".shadowMapDepth",O.map.depthTexture.format=Ci,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Nn,O.map.depthTexture.magFilter=Nn}else{if(j.isPointLight)O.map=new Er(s.x),O.map.depthTexture=new gr(s.x,Un);else O.map=new vt(s.x,s.y),O.map.depthTexture=new Bn(s.x,s.y,Un);if(O.map.depthTexture.name=j.name+".shadowMap",O.map.depthTexture.format=Ci,this.type===Ki)O.map.depthTexture.compareFunction=X?Va:Wa,O.map.depthTexture.minFilter=qt,O.map.depthTexture.magFilter=qt;else O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Nn,O.map.depthTexture.magFilter=Nn}O.camera.updateProjectionMatrix()}if(O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y))O.map.setSize(s.x,s.y);let ee=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();if(j.isPointLight!==!0)O.updateMatrices(j,v);let H=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:v.layers;for(let ne=0;ne<ee;ne++){let W=O.getCamera(ne);if(j.isPointLight){let{camera:q,matrix:xe}=O,Te=j.distance||q.far;if(Te!==q.far)q.far=Te,q.updateProjectionMatrix();_s.setFromMatrixPosition(j.matrixWorld),q.position.copy(_s),xo.copy(q.position),xo.add(ym[ne]),q.up.copy(Sm[ne]),q.lookAt(xo),q.updateMatrixWorld(),xe.makeTranslation(-_s.x,-_s.y,-_s.z),zc.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(zc,q.coordinateSystem,q.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)e.setRenderTarget(O.map,ne),e.clear();else{if(ne===0)e.setRenderTarget(O.map),e.clear();let q=O.getViewport(ne);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),z.viewport(a)}i=O.getFrustum(ne),S(p,v,W,j,H,this.type)}if(O.isPointLightShadow!==!0&&this.type===Ei)T(O,v);O.needsUpdate=!1}m=this.type,u.needsUpdate=!1,e.setRenderTarget(L,G,I)};function T(C,p){let v=t.update(b);if(h.defines.VSM_SAMPLES!==C.blurSamples)h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new vt(s.x,s.y,{format:Yn,type:Lt});else if(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)C.mapPass.setSize(C.map.width,C.map.height);h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value.set(C.map.width,C.map.height),h.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(p,null,v,h,b,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value.set(C.map.width,C.map.height),g.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(p,null,v,g,b,null)}function E(C,p,v,L){let G=null,I=v.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)G=I;else if(G=v.isPointLight===!0?l:o,e.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){let z=G.uuid,Q=p.uuid,A=c[z];if(A===void 0)A={},c[z]=A;let Z=A[Q];if(Z===void 0)Z=G.clone(),A[Q]=Z,p.addEventListener("dispose",w);G=Z}if(G.visible=p.visible,G.wireframe=p.wireframe,L===Ei)G.side=p.shadowSide!==null?p.shadowSide:p.side;else G.side=p.shadowSide!==null?p.shadowSide:d[p.side];if(G.alphaMap=p.alphaMap,G.alphaTest=p.alphaToCoverage===!0?0.5:p.alphaTest,G.map=p.map,G.clipShadows=p.clipShadows,G.clippingPlanes=p.clippingPlanes,G.clipIntersection=p.clipIntersection,G.displacementMap=p.displacementMap,G.displacementScale=p.displacementScale,G.displacementBias=p.displacementBias,G.wireframeLinewidth=p.wireframeLinewidth,G.linewidth=p.linewidth,v.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let z=e.properties.get(G);z.light=v}return G}function S(C,p,v,L,G,I){if(C.visible===!1)return;if(C.layers.test(G)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&I===Ei)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);let A=t.update(C),Z=C.material;if(Array.isArray(Z)){let j=A.groups;for(let O=0,re=j.length;O<re;O++){let X=j[O],ee=Z[X.materialIndex];if(ee&&ee.visible){let H=E(C,ee,L,I);C.onBeforeShadow(e,C,p,v,A,H,X),e.renderBufferDirect(v,null,A,H,C,X),C.onAfterShadow(e,C,p,v,A,H,X)}}}else if(Z.visible){let j=E(C,Z,L,I);C.onBeforeShadow(e,C,p,v,A,j,null),e.renderBufferDirect(v,null,A,j,C,null),C.onAfterShadow(e,C,p,v,A,j,null)}}}let Q=C.children;for(let A=0,Z=Q.length;A<Z;A++)S(Q[A],p,v,L,G,I)}function w(C){C.target.removeEventListener("dispose",w);for(let v in c){let L=c[v],G=C.target.uuid;if(G in L)L[G].dispose(),delete L[G]}}}function bm(e,t){function n(){let R=!1,J=new rt,Y=null,se=new rt(0,0,0,0);return{setMask:function(ae){if(Y!==ae&&!R)e.colorMask(ae,ae,ae,ae),Y=ae},setLocked:function(ae){R=ae},setClear:function(ae,de,Ae,Ee,me){if(me===!0)ae*=Ee,de*=Ee,Ae*=Ee;if(J.set(ae,de,Ae,Ee),se.equals(J)===!1)e.clearColor(ae,de,Ae,Ee),se.copy(J)},reset:function(){R=!1,Y=null,se.set(-1,0,0,0)}}}function i(){let R=!1,J=!1,Y=null,se=null,ae=null;return{setReversed:function(de){if(J!==de){let Ae=t.get("EXT_clip_control");if(de)Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT);else Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT);J=de;let Ee=ae;ae=null,this.setClear(Ee)}},getReversed:function(){return J},setTest:function(de){if(de)ve(e.DEPTH_TEST);else Xe(e.DEPTH_TEST)},setMask:function(de){if(Y!==de&&!R)e.depthMask(de),Y=de},setFunc:function(de){if(J)de=cc[de];if(se!==de){switch(de){case Nl:e.depthFunc(e.NEVER);break;case Dl:e.depthFunc(e.ALWAYS);break;case Ul:e.depthFunc(e.LESS);break;case ia:e.depthFunc(e.LEQUAL);break;case Fl:e.depthFunc(e.EQUAL);break;case Ol:e.depthFunc(e.GEQUAL);break;case Bl:e.depthFunc(e.GREATER);break;case zl:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}se=de}},setLocked:function(de){R=de},setClear:function(de){if(ae!==de){if(ae=de,J)de=1-de;e.clearDepth(de)}},reset:function(){R=!1,Y=null,se=null,ae=null,J=!1}}}function s(){let R=!1,J=null,Y=null,se=null,ae=null,de=null,Ae=null,Ee=null,me=null;return{setTest:function(Re){if(!R)if(Re)ve(e.STENCIL_TEST);else Xe(e.STENCIL_TEST)},setMask:function(Re){if(J!==Re&&!R)e.stencilMask(Re),J=Re},setFunc:function(Re,ze,ge){if(Y!==Re||se!==ze||ae!==ge)e.stencilFunc(Re,ze,ge),Y=Re,se=ze,ae=ge},setOp:function(Re,ze,ge){if(de!==Re||Ae!==ze||Ee!==ge)e.stencilOp(Re,ze,ge),de=Re,Ae=ze,Ee=ge},setLocked:function(Re){R=Re},setClear:function(Re){if(me!==Re)e.clearStencil(Re),me=Re},reset:function(){R=!1,J=null,Y=null,se=null,ae=null,de=null,Ae=null,Ee=null,me=null}}}let r=new n,a=new i,o=new s,l={},c=new WeakMap,f={},d={},h={},g=new WeakMap,y=[],b=null,u=!1,m=null,T=null,E=null,S=null,w=null,C=null,p=null,v=new Ne(0,0,0),L=0,G=!1,I=null,z=null,Q=null,A=null,Z=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,re=0,X=e.getParameter(e.VERSION);if(X.indexOf("WebGL")!==-1)re=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=re>=1;else if(X.indexOf("OpenGL ES")!==-1)re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=re>=2;let ee=null,H={},ne=e.getParameter(e.SCISSOR_BOX),W=e.getParameter(e.VIEWPORT),q=new rt().fromArray(ne),xe=new rt().fromArray(W);function Te(R,J,Y,se){let ae=new Uint8Array(4),de=e.createTexture();e.bindTexture(R,de),e.texParameteri(R,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(R,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ae=0;Ae<Y;Ae++)if(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)e.texImage3D(J,0,e.RGBA,1,1,se,0,e.RGBA,e.UNSIGNED_BYTE,ae);else e.texImage2D(J+Ae,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ae);return de}let we={};we[e.TEXTURE_2D]=Te(e.TEXTURE_2D,e.TEXTURE_2D,1),we[e.TEXTURE_CUBE_MAP]=Te(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[e.TEXTURE_2D_ARRAY]=Te(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),we[e.TEXTURE_3D]=Te(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(e.DEPTH_TEST),a.setFunc(ia),Gt(!1),lt(ea),ve(e.CULL_FACE),ot(xn);function ve(R){if(f[R]!==!0)e.enable(R),f[R]=!0}function Xe(R){if(f[R]!==!1)e.disable(R),f[R]=!1}function De(R,J){if(h[R]!==J){if(e.bindFramebuffer(R,J),h[R]=J,R===e.DRAW_FRAMEBUFFER)h[e.FRAMEBUFFER]=J;if(R===e.FRAMEBUFFER)h[e.DRAW_FRAMEBUFFER]=J;return!0}return!1}function Ue(R,J){let Y=y,se=!1;if(R){if(Y=g.get(J),Y===void 0)Y=[],g.set(J,Y);let ae=R.textures;if(Y.length!==ae.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let de=0,Ae=ae.length;de<Ae;de++)Y[de]=e.COLOR_ATTACHMENT0+de;Y.length=ae.length,se=!0}}else if(Y[0]!==e.BACK)Y[0]=e.BACK,se=!0;if(se)e.drawBuffers(Y)}function Ze(R){if(b!==R)return e.useProgram(R),b=R,!0;return!1}let qe={[Ai]:e.FUNC_ADD,[pl]:e.FUNC_SUBTRACT,[ml]:e.FUNC_REVERSE_SUBTRACT};qe[gl]=e.MIN,qe[_l]=e.MAX;let at={[xl]:e.ZERO,[vl]:e.ONE,[yl]:e.SRC_COLOR,[Ml]:e.SRC_ALPHA,[Rl]:e.SRC_ALPHA_SATURATE,[wl]:e.DST_COLOR,[Tl]:e.DST_ALPHA,[Sl]:e.ONE_MINUS_SRC_COLOR,[bl]:e.ONE_MINUS_SRC_ALPHA,[Al]:e.ONE_MINUS_DST_COLOR,[El]:e.ONE_MINUS_DST_ALPHA,[Cl]:e.CONSTANT_COLOR,[Il]:e.ONE_MINUS_CONSTANT_COLOR,[Pl]:e.CONSTANT_ALPHA,[Ll]:e.ONE_MINUS_CONSTANT_ALPHA};function ot(R,J,Y,se,ae,de,Ae,Ee,me,Re){if(R===xn){if(u===!0)Xe(e.BLEND),u=!1;return}if(u===!1)ve(e.BLEND),u=!0;if(R!==fl){if(R!==m||Re!==G){if(T!==Ai||w!==Ai)e.blendEquation(e.FUNC_ADD),T=Ai,w=Ai;if(Re)switch(R){case Qi:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case vn:e.blendFunc(e.ONE,e.ONE);break;case ta:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case na:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Le("WebGLState: Invalid blending: ",R);break}else switch(R){case Qi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case vn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case ta:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case na:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",R);break}E=null,S=null,C=null,p=null,v.set(0,0,0),L=0,m=R,G=Re}return}if(ae=ae||J,de=de||Y,Ae=Ae||se,J!==T||ae!==w)e.blendEquationSeparate(qe[J],qe[ae]),T=J,w=ae;if(Y!==E||se!==S||de!==C||Ae!==p)e.blendFuncSeparate(at[Y],at[se],at[de],at[Ae]),E=Y,S=se,C=de,p=Ae;if(Ee.equals(v)===!1||me!==L)e.blendColor(Ee.r,Ee.g,Ee.b,me),v.copy(Ee),L=me;m=R,G=!1}function Ft(R,J){R.side===rn?Xe(e.CULL_FACE):ve(e.CULL_FACE);let Y=R.side===Pt;if(J)Y=!Y;Gt(Y),R.blending===Qi&&R.transparent===!1?ot(xn):ot(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let se=R.stencilWrite;if(o.setTest(se),se)o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass);Ot(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ve(e.SAMPLE_ALPHA_TO_COVERAGE):Xe(e.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(R){if(I!==R){if(R)e.frontFace(e.CW);else e.frontFace(e.CCW);I=R}}function lt(R){if(R!==hl){if(ve(e.CULL_FACE),R!==z)if(R===ea)e.cullFace(e.BACK);else if(R===ul)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else Xe(e.CULL_FACE);z=R}function Tt(R){if(R!==Q){if(O)e.lineWidth(R);Q=R}}function Ot(R,J,Y){if(R){if(ve(e.POLYGON_OFFSET_FILL),A!==J||Z!==Y){if(A=J,Z=Y,a.getReversed())J=-J,Y=-Y;e.polygonOffset(J,Y)}}else Xe(e.POLYGON_OFFSET_FILL)}function Bt(R){if(R)ve(e.SCISSOR_TEST);else Xe(e.SCISSOR_TEST)}function Jt(R){if(R===void 0)R=e.TEXTURE0+j-1;if(ee!==R)e.activeTexture(R),ee=R}function N(R,J,Y){if(Y===void 0)if(ee===null)Y=e.TEXTURE0+j-1;else Y=ee;let se=H[Y];if(se===void 0)se={type:void 0,texture:void 0},H[Y]=se;if(se.type!==R||se.texture!==J){if(ee!==Y)e.activeTexture(Y),ee=Y;e.bindTexture(R,J||we[R]),se.type=R,se.texture=J}}function $t(){let R=H[ee];if(R!==void 0&&R.type!==void 0)e.bindTexture(R.type,null),R.type=void 0,R.texture=void 0}function Qe(){try{e.compressedTexImage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function mt(){try{e.compressedTexImage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function fe(){try{e.texSubImage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function tt(){try{e.texSubImage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function Ie(){try{e.compressedTexSubImage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function Oe(){try{e.compressedTexSubImage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function Et(){try{e.texStorage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function M(){try{e.texStorage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function _(){try{e.texImage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function U(){try{e.texImage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function ie(R){if(d[R]!==void 0)return d[R];else return e.getParameter(R)}function te(R,J){if(d[R]!==J)e.pixelStorei(R,J),d[R]=J}function oe(R){if(q.equals(R)===!1)e.scissor(R.x,R.y,R.z,R.w),q.copy(R)}function he(R){if(xe.equals(R)===!1)e.viewport(R.x,R.y,R.z,R.w),xe.copy(R)}function V(R,J){let Y=c.get(J);if(Y===void 0)Y=new WeakMap,c.set(J,Y);let se=Y.get(R);if(se===void 0)se=e.getUniformBlockIndex(J,R.name),e.uniformBlockBinding(J,se,se),Y.set(R,se)}function K(R,J,Y){let ae=c.get(J).get(R);if(l[ae]!==Y)e.bindBufferBase(e.UNIFORM_BUFFER,ae,Y),l[ae]=Y}function le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},d={},ee=null,H={},h={},l={},g=new WeakMap,y=[],b=null,u=!1,m=null,T=null,E=null,S=null,w=null,C=null,p=null,v=new Ne(0,0,0),L=0,G=!1,I=null,z=null,Q=null,A=null,Z=null,q.set(0,0,e.canvas.width,e.canvas.height),xe.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:Xe,bindFramebuffer:De,drawBuffers:Ue,useProgram:Ze,setBlending:ot,setMaterial:Ft,setFlipSided:Gt,setCullFace:lt,setLineWidth:Tt,setPolygonOffset:Ot,setScissorTest:Bt,activeTexture:Jt,bindTexture:N,unbindTexture:$t,compressedTexImage2D:Qe,compressedTexImage3D:mt,texImage2D:_,texImage3D:U,pixelStorei:te,getParameter:ie,updateUBOMapping:V,uniformBlockBinding:K,texStorage2D:Et,texStorage3D:M,texSubImage2D:fe,texSubImage3D:tt,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Oe,scissor:oe,viewport:he,reset:le}}function Tm(e,t,n,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,f=new WeakMap,d=new Set,h,g=new WeakMap,y=new Set,b=new FinalizationRegistry((M)=>y.delete(M)),u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function m(M,_){return u?new OffscreenCanvas(M,_):Zi("canvas")}function T(M,_,U){let ie=1,te=Et(M);if(te.width>U||te.height>U)ie=U/Math.max(te.width,te.height);if(ie<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let oe=Math.floor(ie*te.width),he=Math.floor(ie*te.height);if(h===void 0)h=m(oe,he);let V=_?m(oe,he):h;return V.width=oe,V.height=he,V.getContext("2d").drawImage(M,0,0,oe,he),Pe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+oe+"x"+he+")."),V}else{if("data"in M)Pe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+").");return M}return M}function E(M){return M.generateMipmaps}function S(M){e.generateMipmap(M)}function w(M){if(M.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function C(M,_,U,ie,te,oe=!1){if(M!==null){if(e[M]!==void 0)return e[M];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let he;if(ie){if(he=t.get("EXT_texture_norm16"),!he)Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let V=_;if(_===e.RED){if(U===e.FLOAT)V=e.R32F;if(U===e.HALF_FLOAT)V=e.R16F;if(U===e.UNSIGNED_BYTE)V=e.R8;if(U===e.UNSIGNED_SHORT&&he)V=he.R16_EXT;if(U===e.SHORT&&he)V=he.R16_SNORM_EXT}if(_===e.RED_INTEGER){if(U===e.UNSIGNED_BYTE)V=e.R8UI;if(U===e.UNSIGNED_SHORT)V=e.R16UI;if(U===e.UNSIGNED_INT)V=e.R32UI;if(U===e.BYTE)V=e.R8I;if(U===e.SHORT)V=e.R16I;if(U===e.INT)V=e.R32I}if(_===e.RG){if(U===e.FLOAT)V=e.RG32F;if(U===e.HALF_FLOAT)V=e.RG16F;if(U===e.UNSIGNED_BYTE)V=e.RG8;if(U===e.UNSIGNED_SHORT&&he)V=he.RG16_EXT;if(U===e.SHORT&&he)V=he.RG16_SNORM_EXT}if(_===e.RG_INTEGER){if(U===e.UNSIGNED_BYTE)V=e.RG8UI;if(U===e.UNSIGNED_SHORT)V=e.RG16UI;if(U===e.UNSIGNED_INT)V=e.RG32UI;if(U===e.BYTE)V=e.RG8I;if(U===e.SHORT)V=e.RG16I;if(U===e.INT)V=e.RG32I}if(_===e.RGB_INTEGER){if(U===e.UNSIGNED_BYTE)V=e.RGB8UI;if(U===e.UNSIGNED_SHORT)V=e.RGB16UI;if(U===e.UNSIGNED_INT)V=e.RGB32UI;if(U===e.BYTE)V=e.RGB8I;if(U===e.SHORT)V=e.RGB16I;if(U===e.INT)V=e.RGB32I}if(_===e.RGBA_INTEGER){if(U===e.UNSIGNED_BYTE)V=e.RGBA8UI;if(U===e.UNSIGNED_SHORT)V=e.RGBA16UI;if(U===e.UNSIGNED_INT)V=e.RGBA32UI;if(U===e.BYTE)V=e.RGBA8I;if(U===e.SHORT)V=e.RGBA16I;if(U===e.INT)V=e.RGBA32I}if(_===e.RGB){if(U===e.UNSIGNED_SHORT&&he)V=he.RGB16_EXT;if(U===e.SHORT&&he)V=he.RGB16_SNORM_EXT;if(U===e.UNSIGNED_INT_5_9_9_9_REV)V=e.RGB9_E5;if(U===e.UNSIGNED_INT_10F_11F_11F_REV)V=e.R11F_G11F_B10F}if(_===e.RGBA){let K=oe?Ha:ke.getTransfer(te);if(U===e.FLOAT)V=e.RGBA32F;if(U===e.HALF_FLOAT)V=e.RGBA16F;if(U===e.UNSIGNED_BYTE)V=K===Ke?e.SRGB8_ALPHA8:e.RGBA8;if(U===e.UNSIGNED_SHORT&&he)V=he.RGBA16_EXT;if(U===e.SHORT&&he)V=he.RGBA16_SNORM_EXT;if(U===e.UNSIGNED_SHORT_4_4_4_4)V=e.RGBA4;if(U===e.UNSIGNED_SHORT_5_5_5_1)V=e.RGB5_A1}if(V===e.R16F||V===e.R32F||V===e.RG16F||V===e.RG32F||V===e.RGBA16F||V===e.RGBA32F)t.get("EXT_color_buffer_float");return V}function p(M,_){let U;if(M){if(_===null||_===Un||_===qn)U=e.DEPTH24_STENCIL8;else if(_===yn)U=e.DEPTH32F_STENCIL8;else if(_===ls)U=e.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===Un||_===qn)U=e.DEPTH_COMPONENT24;else if(_===yn)U=e.DEPTH_COMPONENT32F;else if(_===ls)U=e.DEPTH_COMPONENT16;return U}function v(M,_){if(E(M)===!0||M.isFramebufferTexture&&M.minFilter!==Nn&&M.minFilter!==qt)return Math.log2(Math.max(_.width,_.height))+1;else if(M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return _.mipmaps.length;else return 1}function L(M){let _=new WeakRef(M);i.get(M).__ref=_,y.add(_),b.register(M,_,_)}function G(M){let _=i.get(M).__ref;if(_===void 0)return;y.delete(_),b.unregister(_)}function I(M){Q(M.target)}function z(M){A(M.target)}function Q(M){if(M.removeEventListener("dispose",I),G(M),j(M),M.isVideoTexture)f.delete(M);if(M.isHTMLTexture)d.delete(M)}function A(M){M.removeEventListener("dispose",z),G(M),re(M)}function Z(){for(let M of y){let _=M.deref();if(_===void 0)continue;if(_.isRenderTarget===!0)A(_);else Q(_)}y.clear(),d.clear()}function j(M){let _=i.get(M);if(_.__webglInit===void 0)return;let U=M.source,ie=g.get(U);if(ie){let te=ie[_.__cacheKey];if(te.usedTimes--,te.usedTimes===0)O(M);if(Object.keys(ie).length===0)g.delete(U)}i.remove(M)}function O(M){let _=i.get(M);e.deleteTexture(_.__webglTexture);let U=M.source,ie=g.get(U);delete ie[_.__cacheKey],a.memory.textures--}function re(M){let _=i.get(M);if(_.__depthDisposeCallback)_.__depthDisposeCallback();let U=M.depthTexture;if(U&&U.renderTarget===M)Q(U);if(M.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(_.__webglFramebuffer[te]))for(let oe=0;oe<_.__webglFramebuffer[te].length;oe++)e.deleteFramebuffer(_.__webglFramebuffer[te][oe]);else e.deleteFramebuffer(_.__webglFramebuffer[te]);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer[te])}else{if(Array.isArray(_.__webglFramebuffer))for(let te=0;te<_.__webglFramebuffer.length;te++)e.deleteFramebuffer(_.__webglFramebuffer[te]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)e.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let te=0;te<_.__webglColorRenderbuffer.length;te++)if(_.__webglColorRenderbuffer[te])e.deleteRenderbuffer(_.__webglColorRenderbuffer[te])}if(_.__webglDepthRenderbuffer)e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let ie=M.textures;for(let te=0,oe=ie.length;te<oe;te++){let he=i.get(ie[te]);if(he.__webglTexture)e.deleteTexture(he.__webglTexture),a.memory.textures--;i.remove(ie[te])}i.remove(M)}let X=0;function ee(){X=0}function H(){return X}function ne(M){X=M}function W(){let M=X;if(M>=s.maxTextures)Pe("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures);return X+=1,M}function q(M){let _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.mipmapsAutoUpdate),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function xe(M,_){let U=i.get(M);if(M.isVideoTexture)Ie(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&U.__version!==M.version){let ie=M.image;if(ie===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(U,M,_);return}}else if(M.isExternalTexture)U.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+_)}function Te(M,_){let U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){Ft(U,M,_);return}else if(M.isExternalTexture)U.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+_)}function we(M,_){let U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){Ft(U,M,_);return}n.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+_)}function ve(M,_){let U=i.get(M);if(M.version>0&&U.__version!==M.version){Gt(U,M,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+_)}let Xe={[Wl]:e.REPEAT,[Qs]:e.CLAMP_TO_EDGE,[Vl]:e.MIRRORED_REPEAT},De={[Nn]:e.NEAREST,[Xl]:e.NEAREST_MIPMAP_NEAREST,[os]:e.NEAREST_MIPMAP_LINEAR,[qt]:e.LINEAR,[js]:e.LINEAR_MIPMAP_NEAREST,[Dn]:e.LINEAR_MIPMAP_LINEAR},Ue={[tc]:e.NEVER,[Xa]:e.ALWAYS,[nc]:e.LESS,[Wa]:e.LEQUAL,[ic]:e.EQUAL,[Va]:e.GEQUAL,[sc]:e.GREATER,[rc]:e.NOTEQUAL};function Ze(M,_){if(_.type===yn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===qt||_.magFilter===js||_.magFilter===os||_.magFilter===Dn||_.minFilter===qt||_.minFilter===js||_.minFilter===os||_.minFilter===Dn))Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(M,e.TEXTURE_WRAP_S,Xe[_.wrapS]),e.texParameteri(M,e.TEXTURE_WRAP_T,Xe[_.wrapT]),M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY)e.texParameteri(M,e.TEXTURE_WRAP_R,Xe[_.wrapR]);if(e.texParameteri(M,e.TEXTURE_MAG_FILTER,De[_.magFilter]),e.texParameteri(M,e.TEXTURE_MIN_FILTER,De[_.minFilter]),_.compareFunction)e.texParameteri(M,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(M,e.TEXTURE_COMPARE_FUNC,Ue[_.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Nn)return;if(_.minFilter!==os&&_.minFilter!==Dn)return;if(_.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function qe(M,_){let U=!1;if(M.__webglInit===void 0)M.__webglInit=!0,_.addEventListener("dispose",I),L(_);let ie=_.source,te=g.get(ie);if(te===void 0)te={},g.set(ie,te);let oe=q(_);if(oe!==M.__cacheKey){if(te[oe]===void 0)te[oe]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,U=!0;te[oe].usedTimes++;let he=te[M.__cacheKey];if(he!==void 0){if(te[M.__cacheKey].usedTimes--,he.usedTimes===0)O(_)}M.__cacheKey=oe,M.__webglTexture=te[oe].texture}return U}function at(M,_,U){return Math.floor(Math.floor(M/U)/_)}function ot(M,_,U,ie){let oe=M.updateRanges;if(oe.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,U,ie,_.data);else{oe.sort((R,J)=>R.start-J.start);let he=0;for(let R=1;R<oe.length;R++){let J=oe[he],Y=oe[R],se=J.start+J.count,ae=at(Y.start,_.width,4),de=at(J.start,_.width,4);if(Y.start<=se+1&&ae===de&&at(Y.start+Y.count-1,_.width,4)===ae)J.count=Math.max(J.count,Y.start+Y.count-J.start);else++he,oe[he]=Y}oe.length=he+1;let V=n.getParameter(e.UNPACK_ROW_LENGTH),K=n.getParameter(e.UNPACK_SKIP_PIXELS),le=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let R=0,J=oe.length;R<J;R++){let Y=oe[R],se=Math.floor(Y.start/4),ae=Math.ceil(Y.count/4),de=se%_.width,Ae=Math.floor(se/_.width),Ee=ae,me=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,de),n.pixelStorei(e.UNPACK_SKIP_ROWS,Ae),n.texSubImage2D(e.TEXTURE_2D,0,de,Ae,Ee,1,U,ie,_.data)}M.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,V),n.pixelStorei(e.UNPACK_SKIP_PIXELS,K),n.pixelStorei(e.UNPACK_SKIP_ROWS,le)}}function Ft(M,_,U){let ie=e.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)ie=e.TEXTURE_2D_ARRAY;if(_.isData3DTexture)ie=e.TEXTURE_3D;let te=qe(M,_),oe=_.source;n.bindTexture(ie,M.__webglTexture,e.TEXTURE0+U);let he=i.get(oe);if(oe.version!==he.__version||te===!0){if(n.activeTexture(e.TEXTURE0+U),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let me=ke.getPrimaries(ke.workingColorSpace),Re=_.colorSpace===Zn?null:ke.getPrimaries(_.colorSpace),ze=_.colorSpace===Zn||me===Re?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let K=T(_.image,!1,s.maxTextureSize);K=Oe(_,K);let le=r.convert(_.format,_.colorSpace),R=r.convert(_.type),J=C(_.internalFormat,le,R,_.normalized,_.colorSpace,_.isVideoTexture);Ze(ie,_);let Y,se=_.mipmaps,ae=_.isVideoTexture!==!0,de=he.__version===void 0||te===!0,Ae=oe.dataReady,Ee=v(_,K);if(_.isDepthTexture){if(J=p(_.format===Fn,_.type),de)if(ae)n.texStorage2D(e.TEXTURE_2D,1,J,K.width,K.height);else n.texImage2D(e.TEXTURE_2D,0,J,K.width,K.height,0,le,R,null)}else if(_.isDataTexture)if(se.length>0){if(ae&&de)n.texStorage2D(e.TEXTURE_2D,Ee,J,se[0].width,se[0].height);for(let me=0,Re=se.length;me<Re;me++)if(Y=se[me],ae){if(Ae)n.texSubImage2D(e.TEXTURE_2D,me,0,0,Y.width,Y.height,le,R,Y.data)}else n.texImage2D(e.TEXTURE_2D,me,J,Y.width,Y.height,0,le,R,Y.data);_.generateMipmaps=!1}else if(ae){if(de)n.texStorage2D(e.TEXTURE_2D,Ee,J,K.width,K.height);if(Ae)ot(_,K,le,R)}else n.texImage2D(e.TEXTURE_2D,0,J,K.width,K.height,0,le,R,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(ae&&de)n.texStorage3D(e.TEXTURE_2D_ARRAY,Ee,J,se[0].width,se[0].height,K.depth);for(let me=0,Re=se.length;me<Re;me++)if(Y=se[me],_.format!==Sn)if(le!==null)if(ae){if(Ae)if(_.layerUpdates.size>0){let ze=go(Y.width,Y.height,_.format,_.type);for(let ge of _.layerUpdates){let je=Y.data.subarray(ge*ze/Y.data.BYTES_PER_ELEMENT,(ge+1)*ze/Y.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,me,0,0,ge,Y.width,Y.height,1,le,je)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,me,0,0,0,Y.width,Y.height,K.depth,le,Y.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,me,J,Y.width,Y.height,K.depth,0,Y.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ae){if(Ae)n.texSubImage3D(e.TEXTURE_2D_ARRAY,me,0,0,0,Y.width,Y.height,K.depth,le,R,Y.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,me,J,Y.width,Y.height,K.depth,0,le,R,Y.data);if(_.layerUpdates.size>0)_.clearLayerUpdates()}else{if(ae&&de)n.texStorage2D(e.TEXTURE_2D,Ee,J,se[0].width,se[0].height);for(let me=0,Re=se.length;me<Re;me++)if(Y=se[me],_.format!==Sn)if(le!==null)if(ae){if(Ae)n.compressedTexSubImage2D(e.TEXTURE_2D,me,0,0,Y.width,Y.height,le,Y.data)}else n.compressedTexImage2D(e.TEXTURE_2D,me,J,Y.width,Y.height,0,Y.data);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ae){if(Ae)n.texSubImage2D(e.TEXTURE_2D,me,0,0,Y.width,Y.height,le,R,Y.data)}else n.texImage2D(e.TEXTURE_2D,me,J,Y.width,Y.height,0,le,R,Y.data)}else if(_.isDataArrayTexture)if(ae){if(de)n.texStorage3D(e.TEXTURE_2D_ARRAY,Ee,J,K.width,K.height,K.depth);if(Ae)if(_.layerUpdates.size>0){let me=go(K.width,K.height,_.format,_.type);for(let Re of _.layerUpdates){let ze=K.data.subarray(Re*me/K.data.BYTES_PER_ELEMENT,(Re+1)*me/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Re,K.width,K.height,1,le,R,ze)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,le,R,K.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,le,R,K.data);else if(_.isData3DTexture)if(ae){if(de)n.texStorage3D(e.TEXTURE_3D,Ee,J,K.width,K.height,K.depth);if(Ae)n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,le,R,K.data)}else n.texImage3D(e.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,le,R,K.data);else if(_.isFramebufferTexture){if(de)if(ae)n.texStorage2D(e.TEXTURE_2D,Ee,J,K.width,K.height);else{let me=K.width,Re=K.height;for(let ze=0;ze<Ee;ze++)n.texImage2D(e.TEXTURE_2D,ze,J,me,Re,0,le,R,null),me>>=1,Re>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let me=e.canvas;if(!me.hasAttribute("layoutsubtree"))me.setAttribute("layoutsubtree","true");if(K.parentNode!==me){me.appendChild(K),d.add(_),me.onpaint=(Re)=>{let ze=Re.changedElements;for(let ge of d)if(ze.includes(ge.image))ge.needsUpdate=!0},me.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,K);else{let{RGBA:ze,RGBA:ge,UNSIGNED_BYTE:je}=e;e.texElementImage2D(e.TEXTURE_2D,0,ze,ge,je,K)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(se.length>0){if(ae&&de){let me=Et(se[0]);n.texStorage2D(e.TEXTURE_2D,Ee,J,me.width,me.height)}for(let me=0,Re=se.length;me<Re;me++)if(Y=se[me],ae){if(Ae)n.texSubImage2D(e.TEXTURE_2D,me,0,0,le,R,Y)}else n.texImage2D(e.TEXTURE_2D,me,J,le,R,Y);_.generateMipmaps=!1}else if(ae){if(de){let me=Et(K);n.texStorage2D(e.TEXTURE_2D,Ee,J,me.width,me.height)}if(Ae)n.texSubImage2D(e.TEXTURE_2D,0,0,0,le,R,K)}else n.texImage2D(e.TEXTURE_2D,0,J,le,R,K);if(E(_)&&_.mipmapsAutoUpdate===!0)S(ie);if(he.__version=oe.version,_.onUpdate)_.onUpdate(_)}M.__version=_.version}function Gt(M,_,U){if(_.image.length!==6)return;let ie=qe(M,_),te=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,M.__webglTexture,e.TEXTURE0+U);let oe=i.get(te);if(te.version!==oe.__version||ie===!0){n.activeTexture(e.TEXTURE0+U);let he=ke.getPrimaries(ke.workingColorSpace),V=_.colorSpace===Zn?null:ke.getPrimaries(_.colorSpace),K=_.colorSpace===Zn||he===V?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let le=_.isCompressedTexture||_.image[0].isCompressedTexture,R=_.image[0]&&_.image[0].isDataTexture,J=[];for(let ge=0;ge<6;ge++){if(!le&&!R)J[ge]=T(_.image[ge],!0,s.maxCubemapSize);else J[ge]=R?_.image[ge].image:_.image[ge];J[ge]=Oe(_,J[ge])}let Y=J[0],se=r.convert(_.format,_.colorSpace),ae=r.convert(_.type),de=C(_.internalFormat,se,ae,_.normalized,_.colorSpace),Ae=_.isVideoTexture!==!0,Ee=oe.__version===void 0||ie===!0,me=te.dataReady,Re=v(_,Y);Ze(e.TEXTURE_CUBE_MAP,_);let ze;if(_.isDepthTexture){if(de=p(_.format===Fn,_.type),Ee)if(Ae)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,de,Y.width,Y.height);else for(let ge=0;ge<6;ge++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,de,Y.width,Y.height,0,se,ae,null)}else if(le){if(Ae&&Ee)n.texStorage2D(e.TEXTURE_CUBE_MAP,Re,de,Y.width,Y.height);for(let ge=0;ge<6;ge++){ze=J[ge].mipmaps;for(let je=0;je<ze.length;je++){let gt=ze[je];if(_.format!==Sn)if(se!==null)if(Ae){if(me)n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,0,0,gt.width,gt.height,se,gt.data)}else n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,de,gt.width,gt.height,0,gt.data);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Ae){if(me)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,0,0,gt.width,gt.height,se,ae,gt.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je,de,gt.width,gt.height,0,se,ae,gt.data)}}}else{if(ze=_.mipmaps,Ae&&Ee){if(ze.length>0)Re++;let ge=Et(J[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Re,de,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(R){if(Ae){if(me)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,J[ge].width,J[ge].height,se,ae,J[ge].data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,de,J[ge].width,J[ge].height,0,se,ae,J[ge].data);for(let je=0;je<ze.length;je++){let hn=ze[je].image[ge].image;if(Ae){if(me)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,0,0,hn.width,hn.height,se,ae,hn.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,de,hn.width,hn.height,0,se,ae,hn.data)}}else{if(Ae){if(me)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,se,ae,J[ge])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,de,se,ae,J[ge]);for(let je=0;je<ze.length;je++){let gt=ze[je];if(Ae){if(me)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,0,0,se,ae,gt.image[ge])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,je+1,de,se,ae,gt.image[ge])}}}if(E(_)&&_.mipmapsAutoUpdate===!0)S(e.TEXTURE_CUBE_MAP);if(oe.__version=te.version,_.onUpdate)_.onUpdate(_)}M.__version=_.version}function lt(M,_,U,ie,te,oe){let he=r.convert(U.format,U.colorSpace),V=r.convert(U.type),K=C(U.internalFormat,he,V,U.normalized,U.colorSpace),le=i.get(_),R=i.get(U);if(R.__renderTarget=_,!le.__hasExternalTextures){let J=Math.max(1,_.width>>oe),Y=Math.max(1,_.height>>oe);if(te===e.TEXTURE_3D||te===e.TEXTURE_2D_ARRAY)n.texImage3D(te,oe,K,J,Y,_.depth,0,he,V,null);else n.texImage2D(te,oe,K,J,Y,0,he,V,null)}if(n.bindFramebuffer(e.FRAMEBUFFER,M),tt(_))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,te,R.__webglTexture,0,fe(_));else if(te===e.TEXTURE_2D||te>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,ie,te,R.__webglTexture,oe);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Tt(M,_,U){if(e.bindRenderbuffer(e.RENDERBUFFER,M),_.depthBuffer){let ie=_.depthTexture,te=ie&&ie.isDepthTexture?ie.type:null,oe=p(_.stencilBuffer,te),he=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(tt(_))o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(_),oe,_.width,_.height);else if(U)e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(_),oe,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,oe,_.width,_.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,he,e.RENDERBUFFER,M)}else{let ie=_.textures;for(let te=0;te<ie.length;te++){let oe=ie[te],he=r.convert(oe.format,oe.colorSpace),V=r.convert(oe.type),K=C(oe.internalFormat,he,V,oe.normalized,oe.colorSpace);if(tt(_))o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(_),K,_.width,_.height);else if(U)e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(_),K,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,K,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ot(M,_,U){let ie=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=i.get(_.depthTexture);te.__renderTarget=_;let oe=ie?_.depthTexture.image[0]:_.depthTexture.image;if(!te.__webglTexture||oe.width!==_.width||oe.height!==_.height)oe.width=_.width,oe.height=_.height,_.depthTexture.needsUpdate=!0;if(ie)ve(_.depthTexture,0);else xe(_.depthTexture,0);let he=te.__webglTexture,V=fe(_),K=ie?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,le=_.depthTexture.format===Fn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ci)if(tt(_))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,le,K,he,0,V);else e.framebufferTexture2D(e.FRAMEBUFFER,le,K,he,0);else if(_.depthTexture.format===Fn)if(tt(_))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,le,K,he,0,V);else e.framebufferTexture2D(e.FRAMEBUFFER,le,K,he,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(M){let _=i.get(M),U=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){let ie=M.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(ie){let te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ie.removeEventListener("dispose",te)};ie.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=ie}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let ie=0;ie<6;ie++)Ot(_.__webglFramebuffer[ie],M,ie);else if(M.texture.mipmaps.length>0)Ot(_.__webglFramebuffer[0],M,0);else Ot(_.__webglFramebuffer,M,0);else if(U){_.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[ie]),_.__webglDepthbuffer[ie]===void 0)_.__webglDepthbuffer[ie]=e.createRenderbuffer(),Tt(_.__webglDepthbuffer[ie],M,!1);else{let te=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[ie];e.bindRenderbuffer(e.RENDERBUFFER,oe),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,oe)}}else{if(M.texture.mipmaps.length>0)n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]);else n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Tt(_.__webglDepthbuffer,M,!1);else{let te=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,oe),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,oe)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Jt(M,_,U){let ie=i.get(M);if(_!==void 0)lt(ie.__webglFramebuffer,M,M.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(U!==void 0)Bt(M)}function N(M){let _=M.texture,U=i.get(M),ie=i.get(_);M.addEventListener("dispose",z),L(M);let te=M.textures,oe=M.isWebGLCubeRenderTarget===!0,he=te.length>1;if(!he){if(ie.__webglTexture===void 0)ie.__webglTexture=e.createTexture();ie.__version=_.version,a.memory.textures++}if(oe){U.__webglFramebuffer=[];for(let V=0;V<6;V++)if(_.mipmaps.length>0){U.__webglFramebuffer[V]=[];for(let K=0;K<_.mipmaps.length;K++)U.__webglFramebuffer[V][K]=e.createFramebuffer()}else U.__webglFramebuffer[V]=e.createFramebuffer()}else{if(_.mipmaps.length>0){U.__webglFramebuffer=[];for(let V=0;V<_.mipmaps.length;V++)U.__webglFramebuffer[V]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(he)for(let V=0,K=te.length;V<K;V++){let le=i.get(te[V]);if(le.__webglTexture===void 0)le.__webglTexture=e.createTexture(),a.memory.textures++}if(M.samples>0&&tt(M)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let V=0;V<te.length;V++){let K=te[V];U.__webglColorRenderbuffer[V]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[V]);let le=r.convert(K.format,K.colorSpace),R=r.convert(K.type),J=C(K.internalFormat,le,R,K.normalized,K.colorSpace,M.isXRRenderTarget===!0),Y=fe(M);e.renderbufferStorageMultisample(e.RENDERBUFFER,Y,J,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+V,e.RENDERBUFFER,U.__webglColorRenderbuffer[V])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),M.depthBuffer)U.__webglDepthRenderbuffer=e.createRenderbuffer(),Tt(U.__webglDepthRenderbuffer,M,!0);n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(oe){n.bindTexture(e.TEXTURE_CUBE_MAP,ie.__webglTexture),Ze(e.TEXTURE_CUBE_MAP,_);for(let V=0;V<6;V++)if(_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)lt(U.__webglFramebuffer[V][K],M,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+V,K);else lt(U.__webglFramebuffer[V],M,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);if(E(_))S(e.TEXTURE_CUBE_MAP);else if(_.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);n.unbindTexture()}else if(he){for(let V=0,K=te.length;V<K;V++){let le=te[V],R=i.get(le),J=e.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)J=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(J,R.__webglTexture),Ze(J,le),lt(U.__webglFramebuffer,M,le,e.COLOR_ATTACHMENT0+V,J,0),E(le))S(J)}n.unbindTexture()}else{let V=e.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)V=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(V,ie.__webglTexture),Ze(V,_),_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)lt(U.__webglFramebuffer[K],M,_,e.COLOR_ATTACHMENT0,V,K);else lt(U.__webglFramebuffer,M,_,e.COLOR_ATTACHMENT0,V,0);if(E(_))S(V);else if(_.mipmaps.length>0)e.texParameteri(V,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);n.unbindTexture()}if(M.depthBuffer)Bt(M)}function $t(M){let _=M.textures;for(let U=0,ie=_.length;U<ie;U++){let te=_[U];if(E(te)&&te.mipmapsAutoUpdate===!0){let oe=w(M),he=i.get(te).__webglTexture;n.bindTexture(oe,he),S(oe),n.unbindTexture()}}}let Qe=[];function mt(M){if(M.samples>0){if(tt(M)===!1){let{textures:_,width:U,height:ie}=M,te=e.COLOR_BUFFER_BIT,oe=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,he=i.get(M),V=_.length>1;if(V)for(let le=0;le<_.length;le++)n.bindFramebuffer(e.FRAMEBUFFER,he.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,he.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,null,0);if(n.bindFramebuffer(e.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),M.texture.mipmaps.length>0)n.bindFramebuffer(e.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]);else n.bindFramebuffer(e.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let le=0;le<_.length;le++){if(M.resolveDepthBuffer){if(M.depthBuffer)te|=e.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)te|=e.STENCIL_BUFFER_BIT}if(V){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,he.__webglColorRenderbuffer[le]);let R=i.get(_[le]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,R,0)}if(e.blitFramebuffer(0,0,U,ie,0,0,U,ie,te,e.NEAREST),l===!0){if(Qe.length=0,Qe.push(e.COLOR_ATTACHMENT0+le),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1)Qe.push(oe);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Qe)}}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),V)for(let le=0;le<_.length;le++){n.bindFramebuffer(e.FRAMEBUFFER,he.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,he.__webglColorRenderbuffer[le]);let R=i.get(_[le]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,he.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,R,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let _=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function fe(M){return Math.min(s.maxSamples,M.samples)}function tt(M){let _=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ie(M){let _=a.render.frame;if(f.get(M)!==_)f.set(M,_),M.update()}function Oe(M,_){let{colorSpace:U,format:ie,type:te}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return _;if(U!==ka&&U!==Zn)if(ke.getTransfer(U)===Ke){if(ie!==Sn||te!==tn)Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Le("WebGLTextures: Unsupported texture color space:",U);return _}function Et(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement)c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height;else if(typeof VideoFrame<"u"&&M instanceof VideoFrame)c.width=M.displayWidth,c.height=M.displayHeight;else c.width=M.width,c.height=M.height;return c}this.allocateTextureUnit=W,this.resetTextureUnits=ee,this.getTextureUnits=H,this.setTextureUnits=ne,this.setTexture2D=xe,this.setTexture2DArray=Te,this.setTexture3D=we,this.setTextureCube=ve,this.rebindTextures=Jt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=tt,this.dispose=Z}function Em(e,t){function n(i,s=Zn){let r,a=ke.getTransfer(s);if(i===tn)return e.UNSIGNED_BYTE;if(i===ra)return e.UNSIGNED_SHORT_4_4_4_4;if(i===aa)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Zl)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Jl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===ql)return e.BYTE;if(i===Yl)return e.SHORT;if(i===ls)return e.UNSIGNED_SHORT;if(i===sa)return e.INT;if(i===Un)return e.UNSIGNED_INT;if(i===yn)return e.FLOAT;if(i===Lt)return e.HALF_FLOAT;if(i===$l)return e.ALPHA;if(i===Kl)return e.RGB;if(i===Sn)return e.RGBA;if(i===Ci)return e.DEPTH_COMPONENT;if(i===Fn)return e.DEPTH_STENCIL;if(i===Ql)return e.RED;if(i===oa)return e.RED_INTEGER;if(i===Yn)return e.RG;if(i===la)return e.RG_INTEGER;if(i===ca)return e.RGBA_INTEGER;if(i===er||i===tr||i===nr||i===ir)if(a===Ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ha||i===ua||i===da||i===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pa||i===ma||i===ga||i===_a||i===xa||i===sr||i===va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pa||i===ma)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ga)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===_a)return r.COMPRESSED_R11_EAC;if(i===xa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===sr)return r.COMPRESSED_RG11_EAC;if(i===va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ya||i===Sa||i===Ma||i===ba||i===Ta||i===Ea||i===wa||i===Aa||i===Ra||i===Ca||i===Ia||i===Pa||i===La||i===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ya)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ma)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ba)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ta)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ea)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Aa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ra)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ca)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ia)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===La)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Na)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Da||i===Ua||i===Fa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Da)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oa||i===Ba||i===rr||i===za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===qn)return e.UNSIGNED_INT_24_8;return e[i]!==void 0?e[i]:null}return{convert:n}}var wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Am=`
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

}`;class th{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new _r(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=n}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,n=new dt({vertexShader:wm,fragmentShader:Am,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new Qn(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nh extends Mn{constructor(e,t){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,f=null,d=null,h=null,g=null,y=typeof XRWebGLBinding<"u",b=new th,u={},m=t.getContextAttributes(),T=null,E=null,S=[],w=[],C=new Ce,p=null,v=null,L=new zt;L.viewport=new rt;let G=new zt;G.viewport=new rt;let I=[L,G],z=new fo,Q=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=S[W];if(q===void 0)q=new hs,S[W]=q;return q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=S[W];if(q===void 0)q=new hs,S[W]=q;return q.getGripSpace()},this.getHand=function(W){let q=S[W];if(q===void 0)q=new hs,S[W]=q;return q.getHandSpace()};function Z(W){let q=w.indexOf(W.inputSource);if(q===-1)return;let xe=S[q];if(xe!==void 0)xe.update(W.inputSource,W.frame,l||r),xe.dispatchEvent({type:W.type,data:W.inputSource})}function j(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",O);for(let W=0;W<S.length;W++){let q=w[W];if(q===null)continue;w[W]=null,S[W].disconnect(q)}Q=null,A=null,b.reset();for(let W in u)delete u[W];if(e.setRenderTarget(T),h=null,d=null,f=null,i=null,E=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(p),e.setSize(C.width,C.height,!1),v!==null){let W=v.camera;W.fov=v.fov,W.zoom=v.zoom,W.updateProjectionMatrix(),v=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){if(s=W,n.isPresenting===!0)Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){if(a=W,n.isPresenting===!0)Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){if(f===null&&y)f=new XRWebGLBinding(i,t);return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",j),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0)await t.makeXRCompatible();if(p=e.getPixelRatio(),e.getSize(C),!(y&&("createProjectionLayer"in XRWebGLBinding.prototype))){let xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new vt(h.framebufferWidth,h.framebufferHeight,{format:Sn,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xe=null,Te=null,we=null;if(m.depth)we=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?Fn:Ci,Te=m.stencil?qn:Un;let ve={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new vt(d.textureWidth,d.textureHeight,{format:Sn,type:tn,depthTexture:new Bn(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function O(W){for(let q=0;q<W.removed.length;q++){let xe=W.removed[q],Te=w.indexOf(xe);if(Te>=0)w[Te]=null,S[Te].disconnect(xe)}for(let q=0;q<W.added.length;q++){let xe=W.added[q],Te=w.indexOf(xe);if(Te===-1){for(let ve=0;ve<S.length;ve++)if(ve>=w.length){w.push(xe),Te=ve;break}else if(w[ve]===null){w[ve]=xe,Te=ve;break}if(Te===-1)break}let we=S[Te];if(we)we.connect(xe)}}function re(W,q){if(q===null)W.matrixWorld.copy(W.matrix);else W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix);W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let{near:q,far:xe}=W;if(b.texture!==null){if(b.depthNear>0)q=b.depthNear;if(b.depthFar>0)xe=b.depthFar}if(z.near=G.near=L.near=q,z.far=G.far=L.far=xe,Q!==z.near||A!==z.far)i.updateRenderState({depthNear:z.near,depthFar:z.far}),Q=z.near,A=z.far;z.layers.mask=W.layers.mask|6,L.layers.mask=z.layers.mask&-5,G.layers.mask=z.layers.mask&-3;let Te=W.parent,we=z.cameras;re(z,Te);for(let ve=0;ve<we.length;ve++)re(we[ve],Te);if(z.projectionMatrix.copy(L.projectionMatrix),z.projectionMatrixInverse.copy(L.projectionMatrixInverse),v===null&&W.isPerspectiveCamera)v={camera:W,fov:W.fov,zoom:W.zoom};X(W,z,Te)};function X(W,q,xe){if(xe===null)W.matrix.copy(q.matrixWorld);else W.matrix.copy(xe.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld);if(W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera)W.fov=Js*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1}this.getCamera=function(){return z},this.getFoveation=function(){if(d===null&&h===null)return;return o},this.setFoveation=function(W){if(o=W,d!==null)d.fixedFoveation=W;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=W},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(z)},this.getCameraTexture=function(W){return u[W]};let ee=null;function H(W,q){if(c=q.getViewerPose(l||r),g=q,c!==null){let xe=c.views;if(h!==null)e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E);let Te=!1;if(xe.length!==z.cameras.length)z.cameras.length=0,Te=!0;for(let De=0;De<xe.length;De++){let Ue=xe[De],Ze=null;if(h!==null)Ze=h.getViewport(Ue);else{let at=f.getViewSubImage(d,Ue);if(Ze=at.viewport,De===0)e.setRenderTargetTextures(E,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(E)}let qe=I[De];if(qe===void 0)qe=new zt,qe.layers.enable(De),qe.viewport=new rt,I[De]=qe;if(qe.matrix.fromArray(Ue.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Ue.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),De===0)z.matrix.copy(qe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);if(Te===!0)z.cameras.push(qe)}let we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let De=f.getDepthInformation(xe[0]);if(De&&De.isValid&&De.texture)b.init(De,i.renderState)}if(we&&we.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let De=0;De<xe.length;De++){let Ue=xe[De].camera;if(Ue){let Ze=u[Ue];if(!Ze)Ze=new _r,u[Ue]=Ze;let qe=f.getCameraImage(Ue);Ze.sourceTexture=qe}}}}for(let xe=0;xe<S.length;xe++){let Te=w[xe],we=S[xe];if(Te!==null&&we!==void 0)we.update(Te,q,l||r)}if(ee)ee(W,q);if(q.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:q});g=null}let ne=new Gc;ne.setAnimationLoop(H),this.setAnimationLoop=function(W){ee=W},this.dispose=function(){}}}var Rm=new it,ih=new Fe;ih.set(-1,0,0,0,1,0,0,0,1);function Cm(e,t){function n(u,m){if(u.matrixAutoUpdate===!0)u.updateMatrix();m.value.copy(u.matrix)}function i(u,m){if(m.color.getRGB(u.fogColor.value,ja(e)),m.isFog)u.fogNear.value=m.near,u.fogFar.value=m.far;else if(m.isFogExp2)u.fogDensity.value=m.density}function s(u,m,T,E,S){if(m.isNodeMaterial)m.uniformsNeedUpdate=!1;else if(m.isMeshBasicMaterial)r(u,m);else if(m.isMeshLambertMaterial){if(r(u,m),m.envMap)u.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshToonMaterial)r(u,m),d(u,m);else if(m.isMeshPhongMaterial){if(r(u,m),f(u,m),m.envMap)u.envMapIntensity.value=m.envMapIntensity}else if(m.isMeshStandardMaterial){if(r(u,m),h(u,m),m.isMeshPhysicalMaterial)g(u,m,S)}else if(m.isMeshMatcapMaterial)r(u,m),y(u,m);else if(m.isMeshDepthMaterial)r(u,m);else if(m.isMeshDistanceMaterial)r(u,m),b(u,m);else if(m.isMeshNormalMaterial)r(u,m);else if(m.isLineBasicMaterial){if(a(u,m),m.isLineDashedMaterial)o(u,m)}else if(m.isPointsMaterial)l(u,m,T,E);else if(m.isSpriteMaterial)c(u,m);else if(m.isShadowMaterial)u.color.value.copy(m.color),u.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=!1}function r(u,m){if(u.opacity.value=m.opacity,m.color)u.diffuse.value.copy(m.color);if(m.emissive)u.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)u.map.value=m.map,n(m.map,u.mapTransform);if(m.alphaMap)u.alphaMap.value=m.alphaMap,n(m.alphaMap,u.alphaMapTransform);if(m.bumpMap){if(u.bumpMap.value=m.bumpMap,n(m.bumpMap,u.bumpMapTransform),u.bumpScale.value=m.bumpScale,m.side===Pt)u.bumpScale.value*=-1}if(m.normalMap){if(u.normalMap.value=m.normalMap,n(m.normalMap,u.normalMapTransform),u.normalScale.value.copy(m.normalScale),m.side===Pt)u.normalScale.value.negate()}if(m.displacementMap)u.displacementMap.value=m.displacementMap,n(m.displacementMap,u.displacementMapTransform),u.displacementScale.value=m.displacementScale,u.displacementBias.value=m.displacementBias;if(m.emissiveMap)u.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,u.emissiveMapTransform);if(m.specularMap)u.specularMap.value=m.specularMap,n(m.specularMap,u.specularMapTransform);if(m.alphaTest>0)u.alphaTest.value=m.alphaTest;let T=t.get(m),{envMap:E,envMapRotation:S}=T;if(E){if(u.envMap.value=E,u.envMapRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1)u.envMapRotation.value.premultiply(ih);u.reflectivity.value=m.reflectivity,u.ior.value=m.ior,u.refractionRatio.value=m.refractionRatio}if(m.lightMap)u.lightMap.value=m.lightMap,u.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,u.lightMapTransform);if(m.aoMap)u.aoMap.value=m.aoMap,u.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,u.aoMapTransform)}function a(u,m){if(u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,m.map)u.map.value=m.map,n(m.map,u.mapTransform)}function o(u,m){u.dashSize.value=m.dashSize,u.totalSize.value=m.dashSize+m.gapSize,u.scale.value=m.scale}function l(u,m,T,E){if(u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.size.value=m.size*T,u.scale.value=E*0.5,m.map)u.map.value=m.map,n(m.map,u.uvTransform);if(m.alphaMap)u.alphaMap.value=m.alphaMap,n(m.alphaMap,u.alphaMapTransform);if(m.alphaTest>0)u.alphaTest.value=m.alphaTest}function c(u,m){if(u.diffuse.value.copy(m.color),u.opacity.value=m.opacity,u.rotation.value=m.rotation,m.map)u.map.value=m.map,n(m.map,u.mapTransform);if(m.alphaMap)u.alphaMap.value=m.alphaMap,n(m.alphaMap,u.alphaMapTransform);if(m.alphaTest>0)u.alphaTest.value=m.alphaTest}function f(u,m){u.specular.value.copy(m.specular),u.shininess.value=Math.max(m.shininess,0.0001)}function d(u,m){if(m.gradientMap)u.gradientMap.value=m.gradientMap}function h(u,m){if(u.metalness.value=m.metalness,m.metalnessMap)u.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,u.metalnessMapTransform);if(u.roughness.value=m.roughness,m.roughnessMap)u.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,u.roughnessMapTransform);if(m.envMap)u.envMapIntensity.value=m.envMapIntensity}function g(u,m,T){if(u.ior.value=m.ior,m.diffuseRoughness>0){if(u.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap)u.diffuseRoughnessMap.value=m.diffuseRoughnessMap,n(m.diffuseRoughnessMap,u.diffuseRoughnessMapTransform)}if(m.sheen>0){if(u.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),u.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)u.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,u.sheenColorMapTransform);if(m.sheenRoughnessMap)u.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,u.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(u.clearcoat.value=m.clearcoat,u.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)u.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,u.clearcoatMapTransform);if(m.clearcoatRoughnessMap)u.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(u.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pt)u.clearcoatNormalScale.value.negate()}}if(m.dispersion>0)u.dispersion.value=m.dispersion;if(m.retroreflectivity>0)u.retroreflectivity.value=m.retroreflectivity;if(m.iridescence>0){if(u.iridescence.value=m.iridescence,u.iridescenceIOR.value=m.iridescenceIOR,u.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,u.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap)u.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,u.iridescenceMapTransform);if(m.iridescenceThicknessMap)u.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,u.iridescenceThicknessMapTransform)}if(m.transmission>0){if(u.transmission.value=m.transmission,u.transmissionSamplerMap.value=T.texture,u.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap)u.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,u.transmissionMapTransform);if(u.thickness.value=m.thickness,m.thicknessMap)u.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,u.thicknessMapTransform);u.attenuationDistance.value=m.attenuationDistance,u.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(u.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)u.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,u.anisotropyMapTransform)}if(u.specularIntensity.value=m.specularIntensity,u.specularColor.value.copy(m.specularColor),m.specularColorMap)u.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,u.specularColorMapTransform);if(m.specularIntensityMap)u.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,u.specularIntensityMapTransform)}function y(u,m){if(m.matcap)u.matcap.value=m.matcap}function b(u,m){let T=t.get(m).light;u.referencePosition.value.setFromMatrixPosition(T.matrixWorld),u.nearDistance.value=T.shadow.camera.near,u.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Im(e,t,n,i){let s={},r={};function a(T,E){let S=E.program;i.uniformBlockBinding(T,S,s[T.id])}function o(T,E){let S=s[T.id];if(S===void 0)y(T),S=l(T),s[T.id]=S,T.addEventListener("dispose",u);let w=E.program;i.updateUBOMapping(T,w);let C=t.render.frame;if(r[T.id]!==C)c(T),r[T.id]=C}function l(T){let E=e.createBuffer(),{__size:S,usage:w}=T;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,S,w),e.bindBuffer(e.UNIFORM_BUFFER,null),E}function c(T){let E=s[T.id],{uniforms:S,__cache:w}=T;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let C=0,p=S.length;C<p;C++){let v=S[C];if(Array.isArray(v))for(let L=0,G=v.length;L<G;L++)f(v[L],C,L,w);else f(v,C,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(T,E,S,w){if(h(T,E,S,w)===!0){let{__offset:C,value:p}=T;if(Array.isArray(p)){let v=0;for(let L=0;L<p.length;L++){let G=p[L],I=b(G,!0);d(G,T.__data,v),v+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(p,T.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,C,T.__data)}}function d(T,E,S){if(typeof T==="number"||typeof T==="boolean")E[S]=T;else if(T.isMatrix3)E[S]=T.elements[0],E[S+1]=T.elements[1],E[S+2]=T.elements[2],E[S+3]=0,E[S+4]=T.elements[3],E[S+5]=T.elements[4],E[S+6]=T.elements[5],E[S+7]=0,E[S+8]=T.elements[6],E[S+9]=T.elements[7],E[S+10]=T.elements[8],E[S+11]=0;else if(ArrayBuffer.isView(T))E.set(T.subarray(0,E.length-S),S);else T.toArray(E,S)}function h(T,E,S,w){let C=T.value,p=E+"_"+S;if(Array.isArray(C)){if(w[p]===void 0)w[p]=[];let v=w[p],L=!1;for(let G=0;G<C.length;G++)if(g(C[G],v,G)===!0)L=!0;return L}return g(C,w,p)}function g(T,E,S){if(E[S]===void 0){if(typeof T==="number"||typeof T==="boolean")E[S]=T;else if(ArrayBuffer.isView(T))E[S]=T.slice();else E[S]=T.clone();return!0}else{let w=E[S];if(typeof T==="number"||typeof T==="boolean"){if(w!==T)return E[S]=T,!0}else if(ArrayBuffer.isView(T))return!0;else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function y(T){let E=T.uniforms,S=0,w=16;for(let p=0,v=E.length;p<v;p++){let L=Array.isArray(E[p])?E[p]:[E[p]];for(let G=0,I=L.length;G<I;G++){let z=L[G],Q=Array.isArray(z.value)?z.value:[z.value],A=Array.isArray(E[p])||Array.isArray(z.value),Z=S;for(let O=0,re=Q.length;O<re;O++){let X=Q[O],ee=b(X,A),H=S%w,ne=H%ee.boundary,W=H+ne;if(S+=ne,W!==0&&w-W<ee.storage)S+=w-W;if(O===0)Z=S;S+=ee.storage}let j=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new j((S-Z)/Float32Array.BYTES_PER_ELEMENT),z.__offset=Z}}let C=S%w;if(C>0)S+=w-C;return T.__size=S,T.__cache={},this}function b(T,E){let S={boundary:0,storage:0};if(typeof T==="number"||typeof T==="boolean")S.boundary=4,S.storage=4;else if(T.isVector2)S.boundary=8,S.storage=8;else if(T.isVector3||T.isColor)S.boundary=16,S.storage=12;else if(T.isVector4)S.boundary=16,S.storage=16;else if(T.isMatrix3)S.boundary=16,S.storage=48;else if(T.isMatrix4)S.boundary=16,S.storage=64;else if(T.isTexture)Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(T))S.boundary=16,S.storage=T.byteLength;else Pe("WebGLRenderer: Unsupported uniform value type.",T);if(E===!0)S.boundary=16,S.storage=Math.ceil(S.storage/16)*16;return S}function u(T){let E=T.target;E.removeEventListener("dispose",u),e.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let T in s)e.deleteBuffer(s[T]);s={},r={}}return{bind:a,update:o,dispose:m}}var Pm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ln=null;function Lm(){if(ln===null)ln=new Qa(Pm,16,16,Yn,Lt),ln.name="DFG_LUT",ln.minFilter=qt,ln.magFilter=qt,ln.wrapS=Qs,ln.wrapT=Qs,ln.generateMipmaps=!1,ln.needsUpdate=!0;return ln}class yo{constructor(e={}){let{canvas:t=ac(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=tn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;let y=h,b=new Set([ca,la,oa]),u=new Set([tn,Un,ls,qn,ra,aa]),m=new Uint32Array(4),T=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},S=null,w=null,C=[],p=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,G=!1,I=null,z=null,Q=null,A=null;this._outputColorSpace=ec;let Z=0,j=0,O=null,re=-1,X=null,ee=new rt,H=new rt,ne=null,W=new Ne(0),q=0,{width:xe,height:Te}=t,we=1,ve=null,Xe=null,De=new rt(0,0,xe,Te),Ue=new rt(0,0,xe,Te),Ze=!1,qe=new Ti,at=new fr,ot=!1,Ft=!1,Gt=new it,lt=new D,Tt=new rt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function Jt(){return O===null?we:1}let N=n;function $t(x,P){return t.getContext(x,P)}let Qe,mt,fe,tt,Ie,Oe,Et,M,_,U,ie,te,oe,he,V,K,le,R,J,Y,se,ae,de;try{let x={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${cl}`);if(t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",ze,!1),N===null){if(N=$t("webgl2",x),N===null)if($t("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(x){throw t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),Le("WebGLRenderer: "+x.message),x}function Ae(){if(Qe=new Wf(N),Qe.init(),se=new Em(N,Qe),mt=new Lf(N,Qe,e,se),fe=new bm(N,Qe),mt.reversedDepthBuffer&&d)fe.buffers.depth.setReversed(!0);z=N.createFramebuffer(),Q=N.createFramebuffer(),A=N.createFramebuffer(),tt=new qf(N),Ie=new cm,Oe=new Tm(N,Qe,fe,Ie,mt,se,tt),Et=new Hf(L),M=new Yh(N),ae=new If(N,M),_=new Vf(N,M,tt,ae),U=new Zf(N,_,M,ae,tt),R=new Yf(N,mt,Oe),V=new Nf(Ie),ie=new lm(L,Et,Qe,mt,ae,V),te=new Cm(L,Ie),oe=new um,he=new _m(Qe),le=new Cf(L,Et,fe,U,g,o),K=new Mm(L,U,mt),de=new Im(N,tt,mt,fe),J=new Pf(N,Qe,tt),Y=new Xf(N,Qe,tt),tt.programs=ie.programs,L.capabilities=mt,L.extensions=Qe,L.properties=Ie,L.renderLists=oe,L.shadowMap=K,L.state=fe,L.info=tt}if(y!==tn)v=new $f(y,t.width,t.height,a,i,s);let Ee=new nh(L,N);this.xr=Ee,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let x=Qe.get("WEBGL_lose_context");if(x)x.loseContext()},this.forceContextRestore=function(){let x=Qe.get("WEBGL_lose_context");if(x)x.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(x){if(x===void 0)return;we=x,this.setSize(xe,Te,!1)},this.getSize=function(x){return x.set(xe,Te)},this.setSize=function(x,P,k=!0){if(Ee.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}if(xe=x,Te=P,t.width=Math.floor(x*we),t.height=Math.floor(P*we),k===!0)t.style.width=x+"px",t.style.height=P+"px";if(v!==null)v.setSize(t.width,t.height);this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(xe*we,Te*we).floor()},this.setDrawingBufferSize=function(x,P,k){xe=x,Te=P,we=k,t.width=Math.floor(x*k),t.height=Math.floor(P*k),this.setViewport(0,0,x,P)},this.setEffects=function(x){if(y===tn){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let P=0;P<x.length;P++)if(x[P].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ee)},this.getViewport=function(x){return x.copy(De)},this.setViewport=function(x,P,k,F){if(x.isVector4)De.set(x.x,x.y,x.z,x.w);else De.set(x,P,k,F);fe.viewport(ee.copy(De).multiplyScalar(Jt()).round())},this.getScissor=function(x){return x.copy(Ue)},this.setScissor=function(x,P,k,F){if(x.isVector4)Ue.set(x.x,x.y,x.z,x.w);else Ue.set(x,P,k,F);fe.scissor(H.copy(Ue).multiplyScalar(Jt()).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(x){fe.setScissorTest(Ze=x)},this.setOpaqueSort=function(x){ve=x},this.setTransparentSort=function(x){Xe=x},this.getClearColor=function(x){return x.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,k=!0){let F=0;if(x){let B=!1;if(O!==null){let ue=O.texture.format;B=b.has(ue)}if(B){let ue=O.texture.type,ye=u.has(ue),ce=le.getClearColor(),_e=le.getClearAlpha(),{r:be,g:Be,b:He}=ce;if(ye)m[0]=be,m[1]=Be,m[2]=He,m[3]=_e,N.clearBufferuiv(N.COLOR,0,m);else T[0]=be,T[1]=Be,T[2]=He,T[3]=_e,N.clearBufferiv(N.COLOR,0,T)}else F|=N.COLOR_BUFFER_BIT}if(P)F|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(k)F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(F!==0)N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),I=x},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),le.dispose(),oe.dispose(),he.dispose(),Oe.dispose(),Ie.dispose(),Et.dispose(),U.dispose(),_.dispose(),ae.dispose(),de.dispose(),ie.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ao),Ee.removeEventListener("sessionend",Ro),zn.stop()};function me(x){x.preventDefault(),Ji("WebGLRenderer: Context Lost."),G=!0}function Re(){Ji("WebGLRenderer: Context Restored."),G=!1;let x=tt.autoReset,P=K.enabled,k=K.autoUpdate,F=K.needsUpdate,B=K.type;Ae(),tt.autoReset=x,K.enabled=P,K.autoUpdate=k,K.needsUpdate=F,K.type=B}function ze(x){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ge(x){let P=x.target;P.removeEventListener("dispose",ge),je(P)}function je(x){gt(x),Ie.remove(x)}function gt(x){let P=Ie.get(x).programs;if(P!==void 0){if(P.forEach(function(k){ie.releaseProgram(k)}),x.isShaderMaterial)ie.releaseShaderCache(x)}}this.renderBufferDirect=function(x,P,k,F,B,ue){if(P===null)P=Ot;let ye=B.isMesh&&B.matrixWorld.determinantAffine()<0,ce=lh(x,P,k,F,B);fe.setMaterial(F,ye);let _e=k.index,be=1;if(F.wireframe===!0){if(_e=_.getWireframeAttribute(k),_e===void 0)return;be=2}let Be=k.drawRange,He=k.attributes.position,Se=Be.start*be,We=(Be.start+Be.count)*be;if(ue!==null)Se=Math.max(Se,ue.start*be),We=Math.min(We,(ue.start+ue.count)*be);if(_e!==null)Se=Math.max(Se,0),We=Math.min(We,_e.count);else if(He!==void 0&&He!==null)Se=Math.max(Se,0),We=Math.min(We,He.count);let ct=We-Se;if(ct<0||ct===1/0)return;ae.setup(B,F,ce,k,_e);let nt,et=J;if(_e!==null)nt=M.get(_e),et=Y,et.setIndex(nt);if(B.isMesh)if(F.wireframe===!0)fe.setLineWidth(F.wireframeLinewidth*Jt()),et.setMode(N.LINES);else et.setMode(N.TRIANGLES);else if(B.isLine){let wt=F.linewidth;if(wt===void 0)wt=1;if(fe.setLineWidth(wt*Jt()),B.isLineSegments)et.setMode(N.LINES);else if(B.isLineLoop)et.setMode(N.LINE_LOOP);else et.setMode(N.LINE_STRIP)}else if(B.isPoints)et.setMode(N.POINTS);else if(B.isSprite)et.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(!Qe.get("WEBGL_multi_draw")){let{_multiDrawStarts:wt,_multiDrawCounts:Me,_multiDrawCount:Dt}=B,Je=_e?M.get(_e).bytesPerElement:1,Gn=Ie.get(F).currentProgram.getUniforms();for(let At=0;At<Dt;At++)Gn.setValue(N,"_gl_DrawID",At),et.render(wt[At]/Je,Me[At])}else et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)et.renderInstances(Se,ct,B.count);else if(k.isInstancedBufferGeometry){let wt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Me=Math.min(k.instanceCount,wt);et.renderInstances(Se,ct,Me)}else et.render(Se,ct)};function hn(x,P,k,F){if(I!==null&&x.isNodeMaterial)I.setObject(F,x);if(ot===!0)V.setState(x,k,!1);if(x.transparent===!0&&x.side===rn&&x.forceSinglePass===!1)x.side=Pt,x.needsUpdate=!0,zi(x,P,F),x.side=wi,x.needsUpdate=!0,zi(x,P,F),x.side=rn;else zi(x,P,F)}this.compile=function(x,P,k=null){if(k===null)k=x;if(I!==null)I.renderStart(x,P,k);if(w=he.get(k),w.init(P),p.push(w),k.traverseVisible(function(B){if(B.isLight&&B.layers.test(P.layers)){if(w.pushLight(B),B.castShadow)w.pushShadow(B)}}),x!==k)x.traverseVisible(function(B){if(B.isLight&&B.layers.test(P.layers)){if(w.pushLight(B),B.castShadow)w.pushShadow(B)}});if(w.setupLights(),I!==null)I.updateLights(w.state.lightsArray);if(Ft=this.localClippingEnabled,ot=V.init(this.clippingPlanes,Ft),ot===!0)V.setGlobalState(this.clippingPlanes,P);if(I!==null)K.render(w.state.shadowsArray,k,P);let F=new Set;if(x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ue=B.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){let ce=ue[ye];hn(ce,k,P,B),F.add(ce)}else hn(ue,k,P,B),F.add(ue)}),w=p.pop(),I!==null)I.renderEnd();return F},this.compileAsync=function(x,P,k=null){let F=this.compile(x,P,k);return new Promise((B)=>{function ue(){if(F.forEach(function(ye){let _e=Ie.get(ye).currentProgram;if(_e===void 0||_e.isReady())F.delete(ye)}),F.size===0){B(x);return}setTimeout(ue,10)}if(Qe.get("KHR_parallel_shader_compile")!==null)ue();else setTimeout(ue,10)})};let Cr=null;function ah(x){if(Cr)Cr(x)}function Ao(){zn.stop()}function Ro(){zn.start()}let zn=new Gc;if(zn.setAnimationLoop(ah),typeof self<"u")zn.setContext(self);this.setAnimationLoop=function(x){Cr=x,Ee.setAnimationLoop(x),x===null?zn.stop():zn.start()},Ee.addEventListener("sessionstart",Ao),Ee.addEventListener("sessionend",Ro),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(I!==null)I.renderStart(x,P);let k=Ee.enabled===!0&&Ee.isPresenting===!0,F=v!==null&&(O===null||k)&&v.begin(L,O);if(x.matrixWorldAutoUpdate===!0)x.updateMatrixWorld();if(P.parent===null&&P.matrixWorldAutoUpdate===!0)P.updateMatrixWorld();if(Ee.enabled===!0&&Ee.isPresenting===!0&&(v===null||v.isCompositing()===!1)){if(Ee.cameraAutoUpdate===!0)Ee.updateCamera(P);P=Ee.getCamera()}if(x.isScene===!0)x.onBeforeRender(L,x,P,O);if(w=he.get(x,p.length),w.init(P),w.state.textureUnits=Oe.getTextureUnits(),p.push(w),Gt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera)at.setFromArrayCamera(P);else qe.setFromProjectionMatrix(Gt,Ya,P.reversedDepth);if(Ft=this.localClippingEnabled,ot=V.init(this.clippingPlanes,Ft),S=oe.get(x,C.length),S.init(),C.push(S),this.info.render.frame++,Ee.enabled===!0&&Ee.isPresenting===!0){let ye=L.xr.getDepthSensingMesh();if(ye!==null)Ir(ye,P,-1/0,L.sortObjects)}if(Ir(x,P,0,L.sortObjects),S.finish(),I!==null)I.updateLights(w.state.lightsArray);if(L.sortObjects===!0)S.sort(ve,Xe);if(Bt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Bt)le.addToRenderList(S,x);if(this.info.autoReset===!0)this.info.reset();if(ot===!0)V.beginShadows();let B=w.state.shadowsArray;if(K.render(B,x,P),ot===!0)V.endShadows();if((F&&v.hasRenderPass())===!1){let ye=S.opaque,ce=S.transmissive;if(w.setupLights(),P.isArrayCamera){let _e=P.cameras;if(ce.length>0)for(let be=0,Be=_e.length;be<Be;be++){let He=_e[be];Io(ye,ce,x,He)}if(Bt)le.render(x);for(let be=0,Be=_e.length;be<Be;be++){let He=_e[be];Co(S,x,He,He.viewport)}}else{if(ce.length>0)Io(ye,ce,x,P);if(Bt)le.render(x);Co(S,x,P)}}if(O!==null&&j===0)Oe.updateMultisampleRenderTarget(O),Oe.updateRenderTargetMipmap(O);if(F)v.end(L);if(x.isScene===!0)x.onAfterRender(L,x,P);if(ae.resetDefaultState(),re=-1,X=null,p.pop(),p.length>0){if(w=p[p.length-1],Oe.setTextureUnits(w.state.textureUnits),ot===!0)V.setGlobalState(L.clippingPlanes,w.state.camera)}else w=null;if(C.pop(),C.length>0)S=C[C.length-1];else S=null;if(I!==null)I.renderEnd()};function Ir(x,P,k,F){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD){if(x.autoUpdate===!0)x.update(P)}else if(x.isLight){if(w.pushLight(x),x.castShadow)w.pushShadow(x)}else if(x.isSprite){let ye=P.isArrayCamera?at:qe;if(!x.frustumCulled||x.intersectsFrustum(ye)){if(F)Tt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Gt);let ce=U.update(x),_e=x.material;if(_e.visible)S.push(x,ce,_e,k,Tt.z,null,P)}}else if(x.isMesh||x.isLine||x.isPoints){let ye=P.isArrayCamera?at:qe;if(!x.frustumCulled||x.intersectsFrustum(ye)){let ce=U.update(x),_e=x.material;if(F){if(x.boundingSphere!==void 0){if(x.boundingSphere===null)x.computeBoundingSphere();Tt.copy(x.boundingSphere.center)}else{if(ce.boundingSphere===null)ce.computeBoundingSphere();Tt.copy(ce.boundingSphere.center)}Tt.applyMatrix4(x.matrixWorld).applyMatrix4(Gt)}if(Array.isArray(_e)){let be=ce.groups;for(let Be=0,He=be.length;Be<He;Be++){let Se=be[Be],We=_e[Se.materialIndex];if(We&&We.visible)S.push(x,ce,We,k,Tt.z,Se,P)}}else if(_e.visible)S.push(x,ce,_e,k,Tt.z,null,P)}}}let ue=x.children;for(let ye=0,ce=ue.length;ye<ce;ye++)Ir(ue[ye],P,k,F)}function Co(x,P,k,F){let{opaque:B,transmissive:ue,transparent:ye}=x;if(w.setupLightsView(k),ot===!0)V.setGlobalState(L.clippingPlanes,k);if(F)fe.viewport(ee.copy(F));if(B.length>0)Ms(B,P,k);if(ue.length>0)Ms(ue,P,k);if(ye.length>0)Ms(ye,P,k);fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Io(x,P,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[F.id]===void 0){let Se=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[F.id]=new vt(1,1,{generateMipmaps:!0,type:Se?Lt:tn,minFilter:Dn,samples:Math.max(4,mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ke.workingColorSpace})}let ue=w.state.transmissionRenderTarget[F.id],ye=F.viewport||ee;ue.setSize(ye.z*L.transmissionResolutionScale,ye.w*L.transmissionResolutionScale);let ce=L.getRenderTarget(),_e=L.getActiveCubeFace(),be=L.getActiveMipmapLevel();if(L.setRenderTarget(ue),L.getClearColor(W),q=L.getClearAlpha(),q<1)L.setClearColor(16777215,0.5);if(L.clear(),Bt)le.render(k);let Be=L.toneMapping;L.toneMapping=an;let He=F.viewport;if(F.viewport!==void 0)F.viewport=void 0;if(w.setupLightsView(F),ot===!0)V.setGlobalState(L.clippingPlanes,F);if(Ms(x,k,F),Oe.updateMultisampleRenderTarget(ue),Oe.updateRenderTargetMipmap(ue),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let We=0,ct=P.length;We<ct;We++){let nt=P[We],{object:et,geometry:wt,material:Me,group:Dt}=nt;if(Me.side===rn&&et.layers.test(F.layers)){let Je=Me.side;Me.side=Pt,Me.needsUpdate=!0,Po(et,k,F,wt,Me,Dt),Me.side=Je,Me.needsUpdate=!0,Se=!0}}if(Se===!0)Oe.updateMultisampleRenderTarget(ue),Oe.updateRenderTargetMipmap(ue)}if(L.setRenderTarget(ce,_e,be),L.setClearColor(W,q),He!==void 0)F.viewport=He;L.toneMapping=Be}function Ms(x,P,k){let F=P.isScene===!0?P.overrideMaterial:null;for(let B=0,ue=x.length;B<ue;B++){let ye=x[B],{object:ce,geometry:_e,group:be}=ye,Be=ye.material;if(Be.allowOverride===!0&&F!==null)Be=F;if(ce.layers.test(k.layers))Po(ce,P,k,_e,Be,be)}}function Po(x,P,k,F,B,ue){if(I!==null&&B.isNodeMaterial)I.setObject(x,B);if(x.onBeforeRender(L,P,k,F,B,ue),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(L,P,k,F,x,ue),B.transparent===!0&&B.side===rn&&B.forceSinglePass===!1)B.side=Pt,B.needsUpdate=!0,L.renderBufferDirect(k,P,F,B,x,ue),B.side=wi,B.needsUpdate=!0,L.renderBufferDirect(k,P,F,B,x,ue),B.side=rn;else L.renderBufferDirect(k,P,F,B,x,ue);x.onAfterRender(L,P,k,F,B,ue)}function Lo(x){let P=0;for(let k of x)if(k.texture!==null)P++;return P}function zi(x,P,k){if(P.isScene!==!0)P=Ot;let F=Ie.get(x),B=w.state.lights,ue=w.state.shadowsArray,ye=B.state.version,ce=ie.getParameters(x,B.state,ue,P,k,w.state.lightProbeGridArray),_e=ie.getProgramCacheKey(ce),be=F.programs;F.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,F.fog=P.fog;let Be=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;if(F.envMap=Et.get(x.envMap||F.environment,Be),F.envMapRotation=F.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,be===void 0)x.addEventListener("dispose",ge),be=new Map,F.programs=be,F.programVariants=new Map;let He=be.get(_e);if(He!==void 0){if(F.currentProgram===He&&F.lightsStateVersion===ye)return Do(x,ce),He}else{if(ce.uniforms=ie.getUniforms(x),I!==null&&x.isNodeMaterial)I.build(x,k,ce);x.onBeforeCompile(ce,L),He=ie.acquireProgram(ce,_e),be.set(_e,He),F.uniforms=ce.uniforms}let Se=F.uniforms;if(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)Se.clippingPlanes=V.uniform;if(Do(x,ce),F.needsLights=hh(x),F.lightsStateVersion=ye,F.needsLights)Se.ambientLightColor.value=B.state.ambient,Se.lightProbe.value=B.state.probe,Se.sunLights.value=B.state.sun,Se.sunLightShadows.value=B.state.sunShadow,Se.directionalLights.value=B.state.directional,Se.directionalLightShadows.value=B.state.directionalShadow,Se.spotLights.value=B.state.spot,Se.spotLightShadows.value=B.state.spotShadow,Se.rectAreaLights.value=B.state.rectArea,Se.ltc_1.value=B.state.rectAreaLTC1,Se.ltc_2.value=B.state.rectAreaLTC2,Se.pointLights.value=B.state.point,Se.pointLightShadows.value=B.state.pointShadow,Se.hemisphereLights.value=B.state.hemi,Se.sunShadowMatrix.value=B.state.sunShadowMatrix,Se.sunShadowCascade.value=B.state.sunShadowCascade,Se.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Se.spotLightMatrix.value=B.state.spotLightMatrix,Se.spotLightMap.value=B.state.spotLightMap,Se.pointShadowMatrix.value=B.state.pointShadowMatrix;return F.numLightProbeGrids=Lo(w.state.lightProbeGridArray),F.currentProgram=He,F.uniformsList=null,He}function oh(x,P,k,F,B){let ue=Ie.get(x),ye=ue.currentProgram.id+","+F+","+B,ce=ue.programVariants.get(ye);if(ce===void 0)ce=zi(x,P,k),ue.programVariants.set(ye,ce);else ue.currentProgram=ce,ue.uniformsList=null,ue.outputColorSpace=F,ue.toneMapping=B;return ce}function No(x){if(x.uniformsList===null){let P=x.currentProgram.getUniforms();x.uniformsList=vs.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function Do(x,P){let k=Ie.get(x);k.outputColorSpace=P.outputColorSpace,k.batching=P.batching,k.batchingColor=P.batchingColor,k.instancing=P.instancing,k.instancingColor=P.instancingColor,k.instancingMorph=P.instancingMorph,k.skinning=P.skinning,k.morphTargets=P.morphTargets,k.morphNormals=P.morphNormals,k.morphColors=P.morphColors,k.morphTargetsCount=P.morphTargetsCount,k.numClippingPlanes=P.numClippingPlanes,k.numIntersection=P.numClipIntersection,k.vertexAlphas=P.vertexAlphas,k.vertexTangents=P.vertexTangents,k.toneMapping=P.toneMapping}function lh(x,P,k,F,B){if(P.isScene!==!0)P=Ot;Oe.resetTextureUnits();let ue=P.fog,ye=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?P.environment:null,ce=O===null?L.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ke.workingColorSpace,_e=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,be=Et.get(F.envMap||ye,_e),Be=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Se=!!k.morphAttributes.position,We=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color,nt=an;if(F.toneMapped){if(O===null||O.isXRRenderTarget===!0)nt=L.toneMapping}let et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,wt=et!==void 0?et.length:0,Me=Ie.get(F),Dt=w.state.lights;if(ot===!0){if(Ft===!0||x!==X){let st=x===X&&F.id===re;V.setState(F,x,st)}}let Je=!1,Gn=!1;if(F.version===Me.__version){if(Me.needsLights&&Me.lightsStateVersion!==Dt.state.version)Je=!0;else if(B.isBatchedMesh&&Me.batching===!1)Je=!0;else if(!B.isBatchedMesh&&Me.batching===!0)Je=!0;else if(B.isBatchedMesh&&Me.batchingColor===!0&&B._colorsTexture===null)Je=!0;else if(B.isBatchedMesh&&Me.batchingColor===!1&&B._colorsTexture!==null)Je=!0;else if(B.isInstancedMesh&&Me.instancing===!1)Je=!0;else if(!B.isInstancedMesh&&Me.instancing===!0)Je=!0;else if(B.isSkinnedMesh&&Me.skinning===!1)Je=!0;else if(!B.isSkinnedMesh&&Me.skinning===!0)Je=!0;else if(B.isInstancedMesh&&Me.instancingColor===!0&&B.instanceColor===null)Je=!0;else if(B.isInstancedMesh&&Me.instancingColor===!1&&B.instanceColor!==null)Je=!0;else if(B.isInstancedMesh&&Me.instancingMorph===!0&&B.morphTexture===null)Je=!0;else if(B.isInstancedMesh&&Me.instancingMorph===!1&&B.morphTexture!==null)Je=!0;else if(Me.envMap!==be)Je=!0;else if(F.fog===!0&&Me.fog!==ue)Je=!0;else if(Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==V.numPlanes||Me.numIntersection!==V.numIntersection))Je=!0;else if(Me.vertexAlphas!==Be)Je=!0;else if(Me.vertexTangents!==He)Je=!0;else if(Me.morphTargets!==Se)Je=!0;else if(Me.morphNormals!==We)Je=!0;else if(Me.morphColors!==ct)Je=!0;else if(Me.morphTargetsCount!==wt)Je=!0;else if(Me.numLightProbeGrids!==Lo(w.state.lightProbeGridArray))Je=!0;else if(Me.outputColorSpace!==ce||Me.toneMapping!==nt)Gn=!0}else Je=!0,Me.__version=F.version;let At=Me.currentProgram;if(Je===!0||Gn===!0){if(At=Gn===!0?oh(F,P,B,ce,nt):zi(F,P,B),I&&F.isNodeMaterial)I.onUpdateProgram(F,At,Me)}let bs=!1,En=!1,kn=!1,Ye=At.getUniforms(),St=Me.uniforms;if(fe.useProgram(At.program))bs=!0,En=!0,kn=!0;if(F.id!==re)re=F.id,En=!0;if(bs||X!==x){if(fe.buffers.depth.getReversed()&&x.reversedDepth!==!0)x._reversedDepth=!0,x.updateProjectionMatrix();Ye.setValue(N,"projectionMatrix",x.projectionMatrix),Ye.setValue(N,"viewMatrix",x.matrixWorldInverse);let _t=Ye.map.cameraPosition;if(_t!==void 0)_t.setValue(N,lt.setFromMatrixPosition(x.matrixWorld));if(mt.logarithmicDepthBuffer)Ye.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2));if(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)Ye.setValue(N,"isOrthographic",x.isOrthographicCamera===!0);if(X!==x)X=x,En=!0,kn=!0}if(Me.needsLights){if(Dt.state.sunShadowMap.length>0)Ye.setValue(N,"sunShadowMap",Dt.state.sunShadowMap,Oe);if(Dt.state.directionalShadowMap.length>0)Ye.setValue(N,"directionalShadowMap",Dt.state.directionalShadowMap,Oe);if(Dt.state.spotShadowMap.length>0)Ye.setValue(N,"spotShadowMap",Dt.state.spotShadowMap,Oe);if(Dt.state.pointShadowMap.length>0)Ye.setValue(N,"pointShadowMap",Dt.state.pointShadowMap,Oe)}if(B.isSkinnedMesh){Ye.setOptional(N,B,"bindMatrix"),Ye.setOptional(N,B,"bindMatrixInverse");let st=B.skeleton;if(st){if(st.boneTexture===null)st.computeBoneTexture();Ye.setValue(N,"boneTexture",st.boneTexture,Oe)}}if(B.isBatchedMesh){if(Ye.setOptional(N,B,"batchingTexture"),Ye.setValue(N,"batchingTexture",B._matricesTexture,Oe),Ye.setOptional(N,B,"batchingIdTexture"),Ye.setValue(N,"batchingIdTexture",B._indirectTexture,Oe),Ye.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null)Ye.setValue(N,"batchingColorTexture",B._colorsTexture,Oe)}let Kt=k.morphAttributes;if(Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)R.update(B,k,At);if(En||Me.receiveShadow!==B.receiveShadow)Me.receiveShadow=B.receiveShadow,Ye.setValue(N,"receiveShadow",B.receiveShadow);if((F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&P.environment!==null)St.envMapIntensity.value=P.environmentIntensity;if(St.dfgLUT!==void 0)St.dfgLUT.value=Lm();if(En){if(Ye.setValue(N,"toneMappingExposure",L.toneMappingExposure),Me.needsLights)ch(St,kn);if(ue&&F.fog===!0)te.refreshFogUniforms(St,ue);if(te.refreshMaterialUniforms(St,F,we,Te,w.state.transmissionRenderTarget[x.id]),Me.needsLights&&Me.numLightProbeGrids>0){let st=E,_t=0;for(let un of w.state.lightProbeGridArray){if(un.texture===null)continue;st.textures[_t]=un.texture,st.min[_t]=un.boundingBox.min,st.max[_t]=un.boundingBox.max,st.resolution[_t]=un.resolution,_t++}for(let un in st)st[un].length=_t;St.probesSH.value=st.textures,St.probesMin.value=st.min,St.probesMax.value=st.max,St.probesResolution.value=st.resolution}vs.upload(N,No(Me),St,Oe)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0)vs.upload(N,No(Me),St,Oe),F.uniformsNeedUpdate=!1;if(F.isSpriteMaterial)Ye.setValue(N,"center",B.center);if(Ye.setValue(N,"modelViewMatrix",B.modelViewMatrix),Ye.setValue(N,"normalMatrix",B.normalMatrix),Ye.setValue(N,"modelMatrix",B.matrixWorld),F.uniformsGroups!==void 0){let st=F.uniformsGroups;for(let _t=0,un=st.length;_t<un;_t++){let Fo=st[_t];de.update(Fo,At),de.bind(Fo,At)}}return At}function ch(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.sunLights.needsUpdate=P,x.sunLightShadows.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function hh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(x,P,k){let F=Ie.get(x);if(F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1)F.__useRenderToTexture=!1;Ie.get(x.texture).__webglTexture=P,Ie.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){let k=Ie.get(x);k.__webglFramebuffer=P,k.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,k=0){O=x,Z=P,j=k;let F=null,B=!1,ue=!1;if(x){let ce=Ie.get(x);if(ce.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(N.FRAMEBUFFER,ce.__webglFramebuffer),ee.copy(x.viewport),H.copy(x.scissor),ne=x.scissorTest,fe.viewport(ee),fe.scissor(H),fe.setScissorTest(ne),re=-1;return}else if(ce.__webglFramebuffer===void 0)Oe.setupRenderTarget(x);else if(ce.__hasExternalTextures)Oe.rebindTextures(x,Ie.get(x.texture).__webglTexture,Ie.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Be=x.depthTexture;if(ce.__boundDepthTexture!==Be){if(Be!==null&&Ie.has(Be)&&(x.width!==Be.image.width||x.height!==Be.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(x)}}let _e=x.texture;if(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)ue=!0;let be=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget){if(Array.isArray(be[P]))F=be[P][k];else F=be[P];B=!0}else if(x.samples>0&&Oe.useMultisampledRTT(x)===!1)F=Ie.get(x).__webglMultisampledFramebuffer;else if(Array.isArray(be))F=be[k];else F=be;ee.copy(x.viewport),H.copy(x.scissor),ne=x.scissorTest}else ee.copy(De).multiplyScalar(we).floor(),H.copy(Ue).multiplyScalar(we).floor(),ne=Ze;if(k!==0)F=z;if(fe.bindFramebuffer(N.FRAMEBUFFER,F))fe.drawBuffers(x,F);if(fe.viewport(ee),fe.scissor(H),fe.setScissorTest(ne),B){let ce=Ie.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,ce.__webglTexture,k)}else if(ue){let ce=P;for(let _e=0;_e<x.textures.length;_e++){let be=Ie.get(x.textures[_e]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+_e,be.__webglTexture,k,ce)}}else if(x!==null&&k!==0){let ce=Ie.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ce.__webglTexture,k)}re=-1};function Uo(x){let P=Ie.get(x);if(P.__readFormat!==x.format||P.__readType!==x.type)P.__readFormat=x.format,P.__readType=x.type,P.__formatReadable=mt.textureFormatReadable(x.format),P.__typeReadable=mt.textureTypeReadable(x.type);return P}if(this.readRenderTargetPixels=function(x,P,k,F,B,ue,ye,ce=0){if(!(x&&x.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0){if(_e=_e[ye],Array.isArray(_e))_e=_e[0]}if(_e){fe.bindFramebuffer(N.FRAMEBUFFER,_e);try{let be=x.textures[ce],{format:Be,type:He}=be;if(x.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+ce);let Se=Uo(be);if(Se.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(P>=0&&P<=x.width-F&&(k>=0&&k<=x.height-B))N.readPixels(P,k,F,B,se.convert(Be),se.convert(He),ue)}finally{let be=O!==null?Ie.get(O).__webglFramebuffer:null;fe.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(x,P,k,F,B,ue,ye,ce=0){if(!(x&&x.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0){if(_e=_e[ye],Array.isArray(_e))_e=_e[0]}if(_e)if(P>=0&&P<=x.width-F&&(k>=0&&k<=x.height-B)){fe.bindFramebuffer(N.FRAMEBUFFER,_e);let be=x.textures[ce],{format:Be,type:He}=be;if(x.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+ce);let Se=Uo(be);if(Se.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let We=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,We),N.bufferData(N.PIXEL_PACK_BUFFER,ue.byteLength,N.STREAM_READ),N.readPixels(P,k,F,B,se.convert(Be),se.convert(He),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let ct=O!==null?Ie.get(O).__webglFramebuffer:null;fe.bindFramebuffer(N.FRAMEBUFFER,ct);let nt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await lc(N,nt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,We),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ue),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(We),N.deleteSync(nt),ue}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,k=0){let F=Math.pow(2,-k),B=Math.floor(x.image.width*F),ue=Math.floor(x.image.height*F),ye=P!==null?P.x:0,ce=P!==null?P.y:0;Oe.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,ye,ce,B,ue),fe.unbindTexture()},this.copyTextureToTexture=function(x,P,k=null,F=null,B=0,ue=0){let ye,ce,_e,be,Be,He,Se,We,ct,nt=x.isCompressedTexture?x.mipmaps[ue]:x.image;if(k!==null)ye=k.max.x-k.min.x,ce=k.max.y-k.min.y,_e=k.isBox3?k.max.z-k.min.z:1,be=k.min.x,Be=k.min.y,He=k.isBox3?k.min.z:0;else{let Ye=Math.pow(2,-B);if(ye=Math.floor(nt.width*Ye),ce=Math.floor(nt.height*Ye),x.isDataArrayTexture)_e=nt.depth;else if(x.isData3DTexture)_e=Math.floor(nt.depth*Ye);else _e=1;be=0,Be=0,He=0}if(F!==null)Se=F.x,We=F.y,ct=F.z;else Se=0,We=0,ct=0;let et=se.convert(P.format),wt=se.convert(P.type),Me;if(P.isData3DTexture)Oe.setTexture3D(P,0),Me=N.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)Oe.setTexture2DArray(P,0),Me=N.TEXTURE_2D_ARRAY;else Oe.setTexture2D(P,0),Me=N.TEXTURE_2D;fe.activeTexture(N.TEXTURE0),fe.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),fe.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),fe.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let Dt=fe.getParameter(N.UNPACK_ROW_LENGTH),Je=fe.getParameter(N.UNPACK_IMAGE_HEIGHT),Gn=fe.getParameter(N.UNPACK_SKIP_PIXELS),At=fe.getParameter(N.UNPACK_SKIP_ROWS),bs=fe.getParameter(N.UNPACK_SKIP_IMAGES);fe.pixelStorei(N.UNPACK_ROW_LENGTH,nt.width),fe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt.height),fe.pixelStorei(N.UNPACK_SKIP_PIXELS,be),fe.pixelStorei(N.UNPACK_SKIP_ROWS,Be),fe.pixelStorei(N.UNPACK_SKIP_IMAGES,He);let En=x.isDataArrayTexture||x.isData3DTexture,kn=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){let Ye=Ie.get(x),St=Ie.get(P),Kt=Ie.get(Ye.__renderTarget),st=Ie.get(St.__renderTarget);fe.bindFramebuffer(N.READ_FRAMEBUFFER,Kt.__webglFramebuffer),fe.bindFramebuffer(N.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let _t=0;_t<_e;_t++){if(En)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ie.get(x).__webglTexture,B,He+_t),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ie.get(P).__webglTexture,ue,ct+_t);N.blitFramebuffer(be,Be,be+ye,Be+ce,Se,We,Se+ye,We+ce,N.DEPTH_BUFFER_BIT,N.NEAREST)}fe.bindFramebuffer(N.READ_FRAMEBUFFER,null),fe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||Ie.has(x)){let Ye=Ie.get(x),St=Ie.get(P);fe.bindFramebuffer(N.READ_FRAMEBUFFER,Q),fe.bindFramebuffer(N.DRAW_FRAMEBUFFER,A);for(let Kt=0;Kt<_e;Kt++){if(En)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ye.__webglTexture,B,He+Kt);else N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ye.__webglTexture,B);if(kn)N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.__webglTexture,ue,ct+Kt);else N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,St.__webglTexture,ue);if(B!==0)N.blitFramebuffer(be,Be,be+ye,Be+ce,Se,We,Se+ye,We+ce,N.COLOR_BUFFER_BIT,N.NEAREST);else if(kn)N.copyTexSubImage3D(Me,ue,Se,We,ct+Kt,be,Be,ye,ce);else N.copyTexSubImage2D(Me,ue,Se,We,be,Be,ye,ce)}fe.bindFramebuffer(N.READ_FRAMEBUFFER,null),fe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(kn)if(x.isDataTexture||x.isData3DTexture)N.texSubImage3D(Me,ue,Se,We,ct,ye,ce,_e,et,wt,nt.data);else if(P.isCompressedArrayTexture)N.compressedTexSubImage3D(Me,ue,Se,We,ct,ye,ce,_e,et,nt.data);else N.texSubImage3D(Me,ue,Se,We,ct,ye,ce,_e,et,wt,nt);else if(x.isDataTexture)N.texSubImage2D(N.TEXTURE_2D,ue,Se,We,ye,ce,et,wt,nt.data);else if(x.isCompressedTexture)N.compressedTexSubImage2D(N.TEXTURE_2D,ue,Se,We,nt.width,nt.height,et,nt.data);else N.texSubImage2D(N.TEXTURE_2D,ue,Se,We,ye,ce,et,wt,nt);if(fe.pixelStorei(N.UNPACK_ROW_LENGTH,Dt),fe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),fe.pixelStorei(N.UNPACK_SKIP_PIXELS,Gn),fe.pixelStorei(N.UNPACK_SKIP_ROWS,At),fe.pixelStorei(N.UNPACK_SKIP_IMAGES,bs),ue===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0)N.generateMipmap(Me);fe.unbindTexture()},this.initRenderTarget=function(x){if(Ie.get(x).__webglFramebuffer===void 0)Oe.setupRenderTarget(x)},this.initTexture=function(x){if(x.isCubeTexture)Oe.setTextureCube(x,0);else if(x.isData3DTexture)Oe.setTexture3D(x,0);else if(x.isDataArrayTexture||x.isCompressedArrayTexture)Oe.setTexture2DArray(x,0);else Oe.setTexture2D(x,0);fe.unbindTexture()},this.resetState=function(){Z=0,j=0,O=null,fe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}}var Fi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Zt{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var Dm=new ms(-1,1,1,-1,0,1);class sh extends bt{constructor(){super();this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}}var Um=new sh;class ii{constructor(e){this._mesh=new yt(Um,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Dm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class So extends Zt{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof dt)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=Tn.clone(e.uniforms),this.material=new dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new ii(this.material)}render(e,t,n){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=n.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Rr extends Zt{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;if(this.inverse)r=0,a=1;else r=1,a=0;if(s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Mo extends Zt{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bo{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Lt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new So(Fi),this.copyPass.material.blending=xn,this.timer=new yr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled===!1)continue;if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let a=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}if(Rr!==void 0){if(r instanceof Rr)n=!0;else if(r instanceof Mo)n=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class To extends Zt{constructor(e,t,n=null,i=null,s=null){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,r;if(this.overrideMaterial!==null)r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(s);if(this.overrideMaterial!==null)this.scene.overrideMaterial=r;e.autoClear=i}}var rh={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class si extends Zt{constructor(e,t=1,n,i){super();this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new vt(s,r,{type:Lt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let f=new vt(s,r,{type:Lt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+c,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new vt(s,r,{type:Lt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}let a=rh;this.highPassUniforms=Tn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new dt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Ce(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Tn.clone(Fi.uniforms),this.blendMaterial=new dt({uniforms:this.copyUniforms,vertexShader:Fi.vertexShader,fragmentShader:Fi.fragmentShader,premultipliedAlpha:!0,blending:vn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new on,this._fsQuad=new ii(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ce(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),s)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[o].uniforms.direction.value=si.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=si.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[o];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(n),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(0.39894*Math.exp(-0.5*r*r/(n*n))/n);let i=[],s=[];for(let r=1;r<e;r+=2){let a=t[r],o=r+1<e?t[r+1]:0,l=a+o;i.push((r*a+(r+1)*o)/l),s.push(l)}return new dt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(0.5,0.5)},direction:{value:new Ce(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}si.BlurDirectionX=new Ce(1,0);si.BlurDirectionY=new Ce(0,1);var Ss={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Eo extends Zt{constructor(){super();this.isOutputPass=!0,this.uniforms=Tn.clone(Ss.uniforms),this.material=new ps({name:Ss.name,uniforms:this.uniforms,vertexShader:Ss.vertexShader,fragmentShader:Ss.fragmentShader}),this._fsQuad=new ii(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){if(this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ke.getTransfer(this._outputColorSpace)===Ke)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===ji)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===es)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===ts)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===ns)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===ss)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===rs)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===is)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var Oi=document.getElementById("panel"),wo=document.getElementById("msg"),Fm=document.getElementById("scene"),Om=document.getElementById("labels"),Bi;try{Bi=new yo({canvas:Fm,antialias:!0,powerPreference:"high-performance"})}catch{wo.textContent="เบราว์เซอร์นี้ไม่รองรับ WebGL"}if(Bi){let w=function(H){let ne=new Pn;ne.add(new yt(b,m));for(let[xe,Te,we,ve,Xe]of[[14,0.42,0.9,0.08,1],[10,0.27,0.35,0.16,0.85]])for(let De=0;De<xe;De++){let Ue=De/xe*Math.PI*2+(we>0.5?0:0.3),Ze=new yt(y,S(H));Ze.position.set(Math.cos(Ue)*Te,ve,Math.sin(Ue)*Te),Ze.rotation.set(0,-Ue,0),Ze.rotateZ(-we),Ze.scale.set(1,Xe,1),ne.add(Ze)}let W=new yt(u,T);W.position.y=0.27,ne.add(W);let q=new us(new Pi({map:s,color:"#ffb14a",blending:vn,depthWrite:!1}));return q.position.y=0.58,q.scale.setScalar(0.9),ne.add(q),ne.userData.flame=q,ne},L=function(H,ne){if(p.has(H.id))return;p.add(H.id);let W=w(H.color);e.add(W);let q=document.createElement("div");q.className="lbl",q.textContent=H.name+": "+H.wish,Om.appendChild(q),C.push({g:W,label:q,born:ne?performance.now():-1e9,x:ne?-4:(v(H.id,1)-0.5)*90,z:ne?1:-3-v(H.id,2)*22,v:0.35+v(H.id,3)*0.45,ph:v(H.id,4)*6.28,spin:(v(H.id,5)-0.5)*0.15})};Bi.setPixelRatio(Math.min(devicePixelRatio,2));let e=new cr,t=new Ne("#1b2a63");e.background=new Ne("#050818");let n=new zt(55,1,0.1,1200);n.position.set(0,2.4,9);let i=new D(0,1.6,-20),s=(()=>{let H=document.createElement("canvas");H.width=H.height=128;let ne=H.getContext("2d"),W=ne.createRadialGradient(64,64,0,64,64,64);return W.addColorStop(0,"rgba(255,255,255,1)"),W.addColorStop(0.25,"rgba(255,255,255,.55)"),W.addColorStop(1,"rgba(255,255,255,0)"),ne.fillStyle=W,ne.fillRect(0,0,128,128),new mr(H)})(),r=new D(0.28,0.32,-1).normalize();e.add(new yt(new Di(900,32,16),new dt({side:Pt,depthWrite:!1,uniforms:{top:{value:new Ne("#02040f")},hor:{value:t}},vertexShader:"varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 p;uniform vec3 top,hor;void main(){float h=clamp(normalize(p).y,0.,1.);gl_FragColor=vec4(mix(hor,top,pow(h,.45)),1.);}"})));let a=new Float32Array(1200);for(let H=0;H<400;H++){let ne=new D().randomDirection();ne.y=Math.abs(ne.y)*0.9+0.05,ne.multiplyScalar(850),a.set([ne.x,ne.y,ne.z],H*3)}let o=new bt().setAttribute("position",new Vt(a,3)),l=new ds(o,new Li({size:2.2,sizeAttenuation:!1,color:"#ffffff",transparent:!0,depthWrite:!1,fog:!1}));e.add(l);let c=new yt(new Di(28,32,16),new on({color:"#fff6cf",fog:!1}));c.position.copy(r).multiplyScalar(800),e.add(c);let f=new us(new Pi({map:s,color:"#ffe9a8",blending:vn,depthWrite:!1,opacity:0.28}));f.scale.setScalar(170),f.position.copy(c.position),e.add(f);let d="float wave(vec2 p,float t){return sin(p.x*.3+t*.8)*.08+sin(p.y*.5+t*1.1)*.06+sin((p.x+p.y)*.7+t*1.7)*.03;}",h=(H,ne,W)=>Math.sin(H*0.3+W*0.8)*0.08+Math.sin(ne*0.5+W*1.1)*0.06+Math.sin((H+ne)*0.7+W*1.7)*0.03,g=new yt(new Qn(1000,1000,220,220).rotateX(-Math.PI/2),new dt({uniforms:{t:{value:0},moon:{value:r},hor:{value:t},deep:{value:new Ne("#050d22")}},vertexShader:`${d}uniform float t;varying vec3 w;
        void main(){vec3 p=position;p.y+=wave(p.xz,t);vec4 wp=modelMatrix*vec4(p,1.);w=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;}`,fragmentShader:`${d}uniform float t;uniform vec3 moon,hor,deep;varying vec3 w;
        void main(){
          vec2 e=vec2(.05,0.);
          vec3 n=normalize(vec3(wave(w.xz-e.xy,t)-wave(w.xz+e.xy,t),.1,wave(w.xz-e.yx,t)-wave(w.xz+e.yx,t)));
          vec3 v=normalize(cameraPosition-w);
          float f=pow(1.-max(dot(n,v),0.),3.);
          vec3 col=mix(deep,hor*1.4,f);
          vec3 r=reflect(-v,n);
          col+=vec3(1.,.92,.7)*pow(max(dot(r,moon),0.),400.)*1.4;
          col+=vec3(.9,.8,.5)*pow(max(dot(r,moon),0.),30.)*.08;
          float d=clamp(length(w-cameraPosition)/700.,0.,1.);
          gl_FragColor=vec4(mix(col,hor,d*d),1.);}`}));e.add(g);let y=new fs(0.13,0.55,4).translate(0,0.275,0),b=new Kn(0.5,0.56,0.2,24),u=new Kn(0.03,0.03,0.35,8),m=new on({color:"#e9d79b"}),T=new on({color:"#fff3d0"}),E={},S=(H)=>E[H]??=new on({color:H}),C=[],p=new Set,v=(H,ne)=>{let W=Math.sin(H*127.1+ne*311.7)*43758.5453;return W-Math.floor(W)},G=60,I=new Float32Array(G*3),z=new Float32Array(G),Q=(H)=>{I.set([(Math.random()-0.5)*160,4+Math.random()*20,-40-Math.random()*120],H*3),z[H]=0.6+Math.random()*0.8};for(let H=0;H<G;H++)Q(H),I[H*3+1]=Math.random()*60;let A=new bt().setAttribute("position",new Vt(I,3));e.add(new ds(A,new Li({map:s,size:3.5,color:"#c97a2c",blending:vn,transparent:!0,depthWrite:!1})));let Z=new bo(Bi);Z.addPass(new To(e,n)),Z.addPass(new si(new Ce(1,1),0.35,0.5,0.82)),Z.addPass(new Eo);let j=()=>{let H=innerWidth,ne=innerHeight;Bi.setSize(H,ne,!1),Z.setSize(H,ne),n.aspect=H/ne,n.updateProjectionMatrix()};addEventListener("resize",j),j();let O={x:0,y:0};addEventListener("pointermove",(H)=>{O.x=H.clientX/innerWidth-0.5,O.y=H.clientY/innerHeight-0.5});let re=new D,X=new Sr;Bi.setAnimationLoop(()=>{let H=Math.min(X.getDelta(),0.1),ne=X.elapsedTime,W=performance.now();g.material.uniforms.t.value=ne,n.position.x+=(O.x*3-n.position.x)*0.03,n.position.y+=(2.4-O.y-n.position.y)*0.03,n.lookAt(i),l.material.opacity=0.75+Math.sin(ne*1.3)*0.25;for(let q of C){if(q.x+=q.v*H,q.x>48)q.x=-48;let xe=(W-q.born)/1000,Te=xe<1.2?1-xe/1.2:0,we=h(q.x,q.z,ne)+0.08+Te*Te*5;q.g.position.set(q.x,we,q.z),q.g.rotation.set(Math.sin(ne*1.1+q.ph)*0.06,q.g.rotation.y+q.spin*H,Math.cos(ne*0.9+q.ph)*0.06),q.g.scale.setScalar(xe<1.2?0.4+0.6*(xe/1.2):1);let ve=1+Math.sin(ne*17+q.ph)*0.12+Math.sin(ne*29+q.ph*2)*0.07;q.g.userData.flame.scale.set(0.9*ve,0.9*(2-ve),1),re.set(q.x,we+1.3,q.z).project(n);let Xe=n.position.distanceTo(q.g.position),De=re.z<1&&Math.abs(re.x)<1.1&&Xe<38;if(q.label.style.opacity=De?Math.min(1,(38-Xe)/14):0,De)q.label.style.transform=`translate(-50%,-100%) translate(${(re.x*0.5+0.5)*innerWidth}px,${(-re.y*0.5+0.5)*innerHeight}px)`}for(let q=0;q<G;q++)if(I[q*3+1]+=z[q]*H*1.6,I[q*3]+=Math.sin(ne*0.3+q)*H*0.5,I[q*3+1]>70)Q(q);A.attributes.position.needsUpdate=!0,Z.render()});let ee=async(H)=>{try{(await(await fetch("/api/krathongs")).json()).reverse().forEach((ne)=>L(ne,H))}catch{}};ee(!1),setInterval(()=>ee(!0),1e4),Oi.onsubmit=async(H)=>{H.preventDefault();let ne=Oi.querySelector("button");ne.disabled=!0,wo.textContent="";try{let W=await fetch("/api/krathongs",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:Oi.name.value,wish:Oi.wish.value,color:Oi.c.value})});if(!W.ok)throw 0;L(await W.json(),!0),Oi.wish.value=""}catch{wo.textContent="ลอยไม่สำเร็จ ลองใหม่อีกครั้ง"}ne.disabled=!1}}
