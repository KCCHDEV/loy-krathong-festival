var cc="187";var hc=0,Fa=1,uc=2;var ms=1,dc=2,Oi=3,Bi=0,Bt=1,Jt=2,bn=0,gs=1,hn=2,Oa=3,Ba=4,fc=5;var zi=100,pc=101,mc=102,gc=103,_c=104,xc=200,vc=201,yc=202,Sc=203,Mc=204,bc=205,Tc=206,Ec=207,wc=208,Ac=209,Rc=210,Cc=211,Ic=212,Pc=213,Lc=214,Nc=0,Dc=1,Uc=2,za=3,Fc=4,Oc=5,Bc=6,zc=7,Gc=0,Hc=1,kc=2,un=0,_s=1,xs=2,vs=3,ys=4,Ss=5,Ms=6,bs=7;var Ts=301,Gi=302,Mr=303,br=304,Wc=1000,Tr=1001,Vc=1002,On=1003,Xc=1004;var Es=1005;var $t=1006,Er=1007;var Bn=1008;var an=1009,qc=1010,Yc=1011,ws=1012,Ga=1013,zn=1014,Tn=1015,zt=1016,Ha=1017,ka=1018,ei=1020,Zc=35902,Jc=35899,$c=1021,Kc=1022,En=1023,Hi=1026,Gn=1027,Qc=1028,Wa=1029,ti=1030,Va=1031;var Xa=1033,wr=33776,Ar=33777,Rr=33778,Cr=33779,qa=35840,Ya=35841,Za=35842,Ja=35843,$a=36196,Ka=37492,Qa=37496,ja=37488,eo=37489,Ir=37490,to=37491,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,co=37815,ho=37816,uo=37817,fo=37818,po=37819,mo=37820,go=37821,_o=36492,xo=36494,vo=36495,yo=36283,So=36284,Pr=36285,Mo=36286;var bo=0,jc=1,ni="",eh="srgb",To="srgb-linear",Eo="linear",ct="srgb";var th=512,nh=513,ih=514,wo=515,sh=516,rh=517,Ao=518,Ro=519;var Co="300 es",Io=2000;function mu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function gu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function cs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ah(){let e=cs("canvas");return e.style.display="block",e}var Al={},Di=null;function hs(...e){let t="THREE."+e.shift();if(Di)Di("log",t,...e);else console.log(t,...e)}function oh(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let n=e[1];if(n&&n.isStackTrace)e[0]+=" "+n.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ze(...e){e=oh(e);let t="THREE."+e.shift();if(Di)Di("warn",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.warn(n.getError(t));else console.warn(t,...e)}}function He(...e){e=oh(e);let t="THREE."+e.shift();if(Di)Di("error",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.error(n.getError(t));else console.error(t,...e)}}function as(...e){let t=e.join(" ");if(t in Al)return;Al[t]=!0,ze(...e)}function lh(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var ch={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class wn{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[e]===void 0)n[e]=[];if(n[e].indexOf(t)===-1)n[e].push(t)}hasEventListener(e,t){let n=this._listeners;if(n===void 0)return!1;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);if(s!==-1)i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}var Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var aa=Math.PI/180,xr=180/Math.PI;function Hn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[e&255]+Ft[e>>8&255]+Ft[e>>16&255]+Ft[e>>24&255]+"-"+Ft[t&255]+Ft[t>>8&255]+"-"+Ft[t>>16&15|64]+Ft[t>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function et(e,t,n){return Math.max(t,Math.min(n,e))}function _u(e,t){return(e%t+t)%t}function oa(e,t,n){return(1-n)*e+n*t}function hh(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Lr(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uh(e,t){if(t.constructor===Float32Array)return e;let n=Lr(t);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function dh(e,t){if(t.constructor===Float32Array)return e;let n=Lr(t);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}class ue{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class An{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r+0],h=s[r+1],f=s[r+2],x=s[r+3];if(u!==x||o!==d||l!==h||c!==f){let M=o*d+l*h+c*f+u*x;if(M<0)d=-d,h=-h,f=-f,x=-x,M=-M;let p=1-a;if(M<0.9995){let g=Math.acos(M),T=Math.sin(g);p=Math.sin(p*g)/T,a=Math.sin(a*g)/T,o=o*p+d*a,l=l*p+h*a,c=c*p+f*a,u=u*p+x*a}else{o=o*p+d*a,l=l*p+h*a,c=c*p+f*a,u=u*p+x*a;let g=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=g,l*=g,c*=g,u*=g}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=s[r],d=s[r+1],h=s[r+2],f=s[r+3];return e[t]=a*f+c*u+o*h-l*d,e[t+1]=o*f+c*d+l*u-a*h,e[t+2]=l*f+c*h+a*d-o*u,e[t+3]=c*f-a*u-o*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:n,_y:i,_z:s,_order:r}=e,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),u=a(s/2),d=o(n/2),h=o(i/2),f=o(s/2);switch(r){case"XYZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"YXZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"ZXY":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"ZYX":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"YZX":this._x=d*c*u+l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u-d*h*f;break;case"XZY":this._x=d*c*u-l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u+d*h*f;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10],d=n+a+u;if(d>0){let h=0.5/Math.sqrt(d+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>u){let h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>u){let h=2*Math.sqrt(1+a-n-u);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;if(n<0.00000001)if(n=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=n;else this._x=0,this._y=-e.z,this._z=e.y,this._w=n;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,{_x:a,_y:o,_z:l,_w:c}=t;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,a=this.dot(e);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-t;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+s*t,this._w=this._w*o+r*t,this._onChangeCallback()}else this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+s*t,this._w=this._w*o+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){if(n===void 0)n=this.z;return this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=e,l=2*(r*i-a*n),c=2*(a*t-s*i),u=2*(s*n-r*t);return this.x=t+o*l+r*u-a*c,this.y=n+o*c+a*l-s*u,this.z=i+o*u+s*c-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:n,y:i,z:s}=e,{x:r,y:a,z:o}=t;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var la=new F,Rl=new An;class Xe{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l)}set(e,t,n,i,s,r,a,o,l){let c=this.elements;return c[0]=e,c[1]=i,c[2]=a,c[3]=t,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7],d=n[2],h=n[5],f=n[8],x=i[0],M=i[3],p=i[6],g=i[1],T=i[4],E=i[7],y=i[2],w=i[5],I=i[8];return s[0]=r*x+a*g+o*y,s[3]=r*M+a*T+o*w,s[6]=r*p+a*E+o*I,s[1]=l*x+c*g+u*y,s[4]=l*M+c*T+u*w,s[7]=l*p+c*E+u*I,s[2]=d*x+h*g+f*y,s[5]=d*M+h*T+f*w,s[8]=d*p+h*E+f*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*r*c-t*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=c*r-a*l,d=a*o-c*s,h=l*s-r*o,f=t*u+n*d+i*h;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=u*x,e[1]=(i*l-c*n)*x,e[2]=(a*n-i*r)*x,e[3]=d*x,e[4]=(c*t-i*o)*x,e[5]=(i*s-a*t)*x,e[6]=h*x,e[7]=(n*o-l*t)*x,e[8]=(r*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+e,-i*l,i*o,-i*(-l*r+o*a)+a+t,0,0,1),this}scale(e,t){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ca.makeScale(e,t)),this}rotate(e){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var ca=new Xe,Cl=new Xe().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Il=new Xe().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function xu(){let e={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return e.define({["srgb-linear"]:{primaries:t,whitePoint:i,transfer:"linear",toXYZ:Cl,fromXYZ:Il,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:t,whitePoint:i,transfer:"srgb",toXYZ:Cl,fromXYZ:Il,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),e}var Qe=xu();function Mn(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Ni(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var gi;class Po{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{if(gi===void 0)gi=cs("canvas");gi.width=e.width,gi.height=e.height;let i=gi.getContext("2d");if(e instanceof ImageData)i.putImageData(e,0,0);else i.drawImage(e,0,0,e.width,e.height);n=gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Mn(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[n]=Math.floor(Mn(t[n]/255)*255);else t[n]=Mn(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var vu=0;class As{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(ha(i[r].image));else s.push(ha(i[r]))}else s=ha(i);n.url=s}if(!t)e.images[this.uuid]=n;return n}}function ha(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Po.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return ze("Texture: Unable to serialize Texture."),{}}var yu=0,ua=new F;class Lt extends wn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Lt.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Hn(),this.name="",this.source=new As(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!t)e.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=300;Lt.DEFAULT_ANISOTROPY=1;class St{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,r=0.01,a=0.1,o=e.elements,l=o[0],c=o[4],u=o[8],d=o[1],h=o[5],f=o[9],x=o[2],M=o[6],p=o[10];if(Math.abs(c-d)<0.01&&Math.abs(u-x)<0.01&&Math.abs(f-M)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(u+x)<0.1&&Math.abs(f+M)<0.1&&Math.abs(l+h+p-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,E=(h+1)/2,y=(p+1)/2,w=(c+d)/4,I=(u+x)/4,m=(f+M)/4;if(T>E&&T>y)if(T<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(T),i=w/n,s=I/n;else if(E>y)if(E<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(E),n=w/i,s=m/i;else if(y<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(y),n=I/s,i=m/s;return this.set(n,i,s,t),this}let g=Math.sqrt((M-f)*(M-f)+(u-x)*(u-x)+(d-c)*(d-c));if(Math.abs(g)<0.001)g=1;return this.x=(M-f)/g,this.y=(u-x)/g,this.z=(d-c)/g,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lo extends wn{constructor(e=1,t=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Lt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new As(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class It extends Lo{constructor(e=1,t=1,n={}){super(e,t,n);this.isWebGLRenderTarget=!0}}class Nr extends Lt{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class No extends Lt{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class ft{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,r,a,o,l,c,u,d,h,f,x,M){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,a,o,l,c,u,d,h,f,x,M)}set(e,t,n,i,s,r,a,o,l,c,u,d,h,f,x,M){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=o,p[2]=l,p[6]=c,p[10]=u,p[14]=d,p[3]=h,p[7]=f,p[11]=x,p[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/_i.setFromMatrixColumn(e,0).length(),s=1/_i.setFromMatrixColumn(e,1).length(),r=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:n,y:i,z:s}=e,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=r*c,h=r*u,f=a*c,x=a*u;t[0]=o*c,t[4]=-o*u,t[8]=l,t[1]=h+f*l,t[5]=d-x*l,t[9]=-a*o,t[2]=x-d*l,t[6]=f+h*l,t[10]=r*o}else if(e.order==="YXZ"){let d=o*c,h=o*u,f=l*c,x=l*u;t[0]=d+x*a,t[4]=f*a-h,t[8]=r*l,t[1]=r*u,t[5]=r*c,t[9]=-a,t[2]=h*a-f,t[6]=x+d*a,t[10]=r*o}else if(e.order==="ZXY"){let d=o*c,h=o*u,f=l*c,x=l*u;t[0]=d-x*a,t[4]=-r*u,t[8]=f+h*a,t[1]=h+f*a,t[5]=r*c,t[9]=x-d*a,t[2]=-r*l,t[6]=a,t[10]=r*o}else if(e.order==="ZYX"){let d=r*c,h=r*u,f=a*c,x=a*u;t[0]=o*c,t[4]=f*l-h,t[8]=d*l+x,t[1]=o*u,t[5]=x*l+d,t[9]=h*l-f,t[2]=-l,t[6]=a*o,t[10]=r*o}else if(e.order==="YZX"){let d=r*o,h=r*l,f=a*o,x=a*l;t[0]=o*c,t[4]=x-d*u,t[8]=f*u+h,t[1]=u,t[5]=r*c,t[9]=-a*c,t[2]=-l*c,t[6]=h*u+f,t[10]=d-x*u}else if(e.order==="XZY"){let d=r*o,h=r*l,f=a*o,x=a*l;t[0]=o*c,t[4]=-u,t[8]=l*c,t[1]=d*u+x,t[5]=r*c,t[9]=h*u-f,t[2]=f*u-h,t[6]=a*c,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Su,e,Mu)}lookAt(e,t,n){let i=this.elements;if(Xt.subVectors(e,t),Xt.lengthSq()===0)Xt.z=1;if(Xt.normalize(),Pn.crossVectors(n,Xt),Pn.lengthSq()===0){if(Math.abs(n.z)===1)Xt.x+=0.0001;else Xt.z+=0.0001;Xt.normalize(),Pn.crossVectors(n,Xt)}return Pn.normalize(),Ws.crossVectors(Xt,Pn),i[0]=Pn.x,i[4]=Ws.x,i[8]=Xt.x,i[1]=Pn.y,i[5]=Ws.y,i[9]=Xt.y,i[2]=Pn.z,i[6]=Ws.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],u=n[5],d=n[9],h=n[13],f=n[2],x=n[6],M=n[10],p=n[14],g=n[3],T=n[7],E=n[11],y=n[15],w=i[0],I=i[4],m=i[8],S=i[12],L=i[1],G=i[5],D=i[9],B=i[13],Q=i[2],C=i[6],K=i[10],j=i[14],H=i[3],fe=i[7],J=i[11],te=i[15];return s[0]=r*w+a*L+o*Q+l*H,s[4]=r*I+a*G+o*C+l*fe,s[8]=r*m+a*D+o*K+l*J,s[12]=r*S+a*B+o*j+l*te,s[1]=c*w+u*L+d*Q+h*H,s[5]=c*I+u*G+d*C+h*fe,s[9]=c*m+u*D+d*K+h*J,s[13]=c*S+u*B+d*j+h*te,s[2]=f*w+x*L+M*Q+p*H,s[6]=f*I+x*G+M*C+p*fe,s[10]=f*m+x*D+M*K+p*J,s[14]=f*S+x*B+M*j+p*te,s[3]=g*w+T*L+E*Q+y*H,s[7]=g*I+T*G+E*C+y*fe,s[11]=g*m+T*D+E*K+y*J,s[15]=g*S+T*B+E*j+y*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],o=e[9],l=e[13],c=e[2],u=e[6],d=e[10],h=e[14],f=e[3],x=e[7],M=e[11],p=e[15],g=o*h-l*d,T=a*h-l*u,E=a*d-o*u,y=r*h-l*c,w=r*d-o*c,I=r*u-a*c;return t*(x*g-M*T+p*E)-n*(f*g-M*y+p*w)+i*(f*T-x*y+p*I)-s*(f*E-x*w+M*I)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],a=e[9],o=e[2],l=e[6],c=e[10];return t*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;if(e.isVector3)i[12]=e.x,i[13]=e.y,i[14]=e.z;else i[12]=e,i[13]=t,i[14]=n;return this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=e[9],d=e[10],h=e[11],f=e[12],x=e[13],M=e[14],p=e[15],g=t*a-n*r,T=t*o-i*r,E=t*l-s*r,y=n*o-i*a,w=n*l-s*a,I=i*l-s*o,m=c*x-u*f,S=c*M-d*f,L=c*p-h*f,G=u*M-d*x,D=u*p-h*x,B=d*p-h*M,Q=g*B-T*D+E*G+y*L-w*S+I*m;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/Q;return e[0]=(a*B-o*D+l*G)*C,e[1]=(i*D-n*B-s*G)*C,e[2]=(x*I-M*w+p*y)*C,e[3]=(d*w-u*I-h*y)*C,e[4]=(o*L-r*B-l*S)*C,e[5]=(t*B-i*L+s*S)*C,e[6]=(M*E-f*I-p*T)*C,e[7]=(c*I-d*E+h*T)*C,e[8]=(r*D-a*L+l*m)*C,e[9]=(n*L-t*D-s*m)*C,e[10]=(f*w-x*E+p*g)*C,e[11]=(u*E-c*w-h*g)*C,e[12]=(a*S-r*G-o*m)*C,e[13]=(t*G-n*S+i*m)*C,e[14]=(x*T-f*y-M*g)*C,e[15]=(c*y-u*T+d*g)*C,this}scale(e){let t=this.elements,{x:n,y:i,z:s}=e;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,{x:r,y:a,z:o}=e,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=t,l=s+s,c=r+r,u=a+a,d=s*l,h=s*c,f=s*u,x=r*c,M=r*u,p=a*u,g=o*l,T=o*c,E=o*u,{x:y,y:w,z:I}=n;return i[0]=(1-(x+p))*y,i[1]=(h+E)*y,i[2]=(f-T)*y,i[3]=0,i[4]=(h-E)*w,i[5]=(1-(d+p))*w,i[6]=(M+g)*w,i[7]=0,i[8]=(f+T)*I,i[9]=(M-g)*I,i[10]=(1-(d+x))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=_i.set(i[0],i[1],i[2]).length(),a=_i.set(i[4],i[5],i[6]).length(),o=_i.set(i[8],i[9],i[10]).length();if(s<0)r=-r;nn.copy(this);let l=1/r,c=1/a,u=1/o;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=c,nn.elements[5]*=c,nn.elements[6]*=c,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i),f,x;if(o)f=s/(r-s),x=r*s/(r-s);else if(a===2000)f=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(a===2001)f=-r/(r-s),x=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i),f,x;if(o)f=1/(r-s),x=r/(r-s);else if(a===2000)f=-2/(r-s),x=-(r+s)/(r-s);else if(a===2001)f=-1/(r-s),x=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}var _i=new F,nn=new ft,Su=new F(0,0,0),Mu=new F(1,1,1),Pn=new F,Ws=new F,Xt=new F,Pl=new ft,Ll=new An;class Fn{constructor(e=0,t=0,n=0,i=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],d=i[6],h=i[10];switch(t){case"XYZ":if(this._y=Math.asin(et(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-et(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(et(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(d,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(et(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-et(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,n===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,n){return Pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Dr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var bu=0,Nl=new F,xi=new An,gn=new ft,Vs=new F,Ki=new F,Tu=new F,Eu=new An,Dl=new F(1,0,0),Ul=new F(0,1,0),Fl=new F(0,0,1),Ol={type:"added"},wu={type:"removed"},vi={type:"childadded",child:null},da={type:"childremoved",child:null};class Nt extends wn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();let e=new F,t=new Fn,n=new An,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new Xe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Dl,e)}rotateY(e){return this.rotateOnAxis(Ul,e)}rotateZ(e){return this.rotateOnAxis(Fl,e)}translateOnAxis(e,t){return Nl.copy(e).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dl,e)}translateY(e){return this.translateOnAxis(Ul,e)}translateZ(e){return this.translateOnAxis(Fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){if(e.isVector3)Vs.copy(e);else Vs.set(e,t,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)gn.lookAt(Ki,Vs,this.up);else gn.lookAt(Vs,Ki,this.up);if(this.quaternion.setFromRotationMatrix(gn),i)gn.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(gn),this.quaternion.premultiply(xi.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return He("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ol),vi.child=e,this.dispatchEvent(vi),vi.child=null;else He("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(wu),da.child=e,this.dispatchEvent(da),da.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld);return e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ol),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}return}getObjectsByProperty(e,t,n=[]){if(this[e]===t)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,Tu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Eu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:n,z:i}=e,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==="string",n={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(e);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let u=o[l];s(e.shapes,u)}else s(e.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(e.materials,this.material[o]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(e.animations,o))}}if(t){let a=r(e.geometries),o=r(e.materials),l=r(e.textures),c=r(e.images),u=r(e.shapes),d=r(e.skeletons),h=r(e.animations),f=r(e.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(u.length>0)n.shapes=u;if(d.length>0)n.skeletons=d;if(h.length>0)n.animations=h;if(f.length>0)n.nodes=f}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Nt.DEFAULT_UP=new F(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Sn extends Nt{constructor(){super();this.isGroup=!0,this.type="Group"}}var Au={type:"move"};class Rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let x of e.hand.values()){let M=t.getJointPose(x,n),p=this._getHandJoint(l,x);if(M!==null)p.matrix.fromArray(M.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=M.radius;p.visible=M!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=0.02,f=0.005;if(l.inputState.pinching&&d>h+f)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&d<=h-f)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(o!==null&&e.gripSpace){if(s=t.getPose(e.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(a!==null){if(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Au)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}var fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function fa(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return e+(t-e)*6*n;if(n<0.5)return t;if(n<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-n);return e}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=_u(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=fa(r,s,e+0.3333333333333333),this.g=fa(r,s,e),this.b=fa(r,s,e-0.3333333333333333)}return Qe.colorSpaceToWorking(this,i),this}setStyle(e,t="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);else if(r===6)return this.setHex(parseInt(s,16),t);else ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let n=fh[e.toLowerCase()];if(n!==void 0)this.setHex(n,t);else ze("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return Qe.workingToColorSpace(Ot.copy(this),e),Math.round(et(Ot.r*255,0,255))*65536+Math.round(et(Ot.g*255,0,255))*256+Math.round(et(Ot.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Ot.copy(this),t);let{r:n,g:i,b:s}=Ot,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let u=r-a;switch(l=c<=0.5?u/(r+a):u/(2-r-a),r){case n:o=(i-s)/u+(i<s?6:0);break;case i:o=(s-n)/u+2;break;case s:o=(n-i)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e="srgb"){Qe.workingToColorSpace(Ot.copy(this),e);let{r:t,g:n,b:i}=Ot;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Xs);let n=oa(Ln.h,Xs.h,t),i=oa(Ln.s,Xs.s,t),s=oa(Ln.l,Xs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ot=new Ge;Ge.NAMES=fh;class Ur extends Nt{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var sn=new F,_n=new F,pa=new F,xn=new F,yi=new F,Si=new F,Bl=new F,ma=new F,ga=new F,_a=new F,xa=new St,va=new St,ya=new St;class Yt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),sn.subVectors(e,t),i.cross(sn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(e,t,n,i,s){sn.subVectors(i,t),_n.subVectors(n,t),pa.subVectors(e,t);let r=sn.dot(sn),a=sn.dot(_n),o=sn.dot(pa),l=_n.dot(_n),c=_n.dot(pa),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,h=(l*o-a*c)*d,f=(r*c-a*o)*d;return s.set(1-h-f,f,h)}static containsPoint(e,t,n,i){if(this.getBarycoord(e,t,n,i,xn)===null)return!1;return xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,i,s,r,a,o){if(this.getBarycoord(e,t,n,i,xn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,xn.x),o.addScaledVector(r,xn.y),o.addScaledVector(a,xn.z),o}static getInterpolatedAttribute(e,t,n,i,s,r){return xa.setScalar(0),va.setScalar(0),ya.setScalar(0),xa.fromBufferAttribute(e,t),va.fromBufferAttribute(e,n),ya.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(xa,s.x),r.addScaledVector(va,s.y),r.addScaledVector(ya,s.z),r}static isFrontFacing(e,t,n,i){return sn.subVectors(n,t),_n.subVectors(e,t),sn.cross(_n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),sn.cross(_n).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,a;yi.subVectors(i,n),Si.subVectors(s,n),ma.subVectors(e,n);let o=yi.dot(ma),l=Si.dot(ma);if(o<=0&&l<=0)return t.copy(n);ga.subVectors(e,i);let c=yi.dot(ga),u=Si.dot(ga);if(c>=0&&u<=c)return t.copy(i);let d=o*u-c*l;if(d<=0&&o>=0&&c<=0&&o-c>0)return r=o/(o-c),t.copy(n).addScaledVector(yi,r);_a.subVectors(e,s);let h=yi.dot(_a),f=Si.dot(_a);if(f>=0&&h<=f)return t.copy(s);let x=h*l-o*f;if(x<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Si,a);let M=c*f-h*u;if(M<=0&&u-c>=0&&h-f>=0)return Bl.subVectors(s,i),a=(u-c)/(u-c+(h-f)),t.copy(i).addScaledVector(Bl,a);let p=1/(M+x+d);return r=x*p,a=d*p,t.copy(n).addScaledVector(yi,r).addScaledVector(Si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ii{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(e.isMesh===!0)e.getVertexPosition(r,rn);else rn.fromBufferAttribute(s,r);rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();qs.copy(e.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();qs.copy(n.boundingBox)}qs.applyMatrix4(e.matrixWorld),this.union(qs)}}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;if(e.normal.x>0)t=e.normal.x*this.min.x,n=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,n=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z;return t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),Ys.subVectors(this.max,Qi),Mi.subVectors(e.a,Qi),bi.subVectors(e.b,Qi),Ti.subVectors(e.c,Qi),Nn.subVectors(bi,Mi),Dn.subVectors(Ti,bi),Zn.subVectors(Mi,Ti);let t=[0,-Nn.z,Nn.y,0,-Dn.z,Dn.y,0,-Zn.z,Zn.y,Nn.z,0,-Nn.x,Dn.z,0,-Dn.x,Zn.z,0,-Zn.x,-Nn.y,Nn.x,0,-Dn.y,Dn.x,0,-Zn.y,Zn.x,0];if(!Sa(t,Mi,bi,Ti,Ys))return!1;if(t=[1,0,0,0,1,0,0,0,1],!Sa(t,Mi,bi,Ti,Ys))return!1;return Zs.crossVectors(Nn,Dn),t=[Zs.x,Zs.y,Zs.z],Sa(t,Mi,bi,Ti,Ys)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(rn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var vn=[new F,new F,new F,new F,new F,new F,new F,new F],rn=new F,qs=new ii,Mi=new F,bi=new F,Ti=new F,Nn=new F,Dn=new F,Zn=new F,Qi=new F,Ys=new F,Zs=new F,Jn=new F;function Sa(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){Jn.fromArray(e,r);let o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=n.dot(Jn),u=i.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Tt=new F,Js=new ue,Ru=0;class Vt extends wn{constructor(e,t,n=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ru++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=e!==void 0?Lr(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];if(this.normalized)n=this._denormalize(n);return n}setComponent(e,t,n){if(this.normalized)n=this._normalize(n);return this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e*=this.itemSize,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):uh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):dh(e,this.array)}}class Fr extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Or extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}var Cu=new ii,ji=new F,Ma=new F;class si{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;if(t!==void 0)n.copy(t);else Cu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);if(t.copy(e),n>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);let t=ji.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*0.5;this.center.addScaledVector(ji,i/n),this.radius+=i}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(Ma)),this.expandByPoint(ji.copy(e.center).sub(Ma));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var Iu=0,Zt=new ft,ba=new Nt,Ei=new F,qt=new ii,es=new ii,Ct=new F;class Mt extends wn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((mu(e))?Or:Fr)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(e),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}if(e.length>t.count)ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new ii;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];if(qt.setFromBufferAttribute(s),this.morphTargetsRelative)Ct.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Ct);else this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new si;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let a=t[s];if(es.setFromBufferAttribute(a),this.morphTargetsRelative)Ct.addVectors(qt.min,es.min),qt.expandByPoint(Ct),Ct.addVectors(qt.max,es.max),qt.expandByPoint(Ct);else qt.expandByPoint(es.min),qt.expandByPoint(es.max)}qt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let s=0,r=t.length;s<r;s++){let a=t[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Ct.fromBufferAttribute(a,l),o)Ei.fromBufferAttribute(e,l),Ct.add(Ei);i=Math.max(i,n.distanceToSquared(Ct))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=t,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new Vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[],l=new Uint8Array(n.count);for(let S=0;S<n.count;S++)a[S]=new F,o[S]=new F;let c=new F,u=new F,d=new F,h=new ue,f=new ue,x=new ue,M=new F,p=new F;function g(S,L,G){l[S]=l[L]=l[G]=1,c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,L),d.fromBufferAttribute(n,G),h.fromBufferAttribute(s,S),f.fromBufferAttribute(s,L),x.fromBufferAttribute(s,G),u.sub(c),d.sub(c),f.sub(h),x.sub(h);let D=1/(f.x*x.y-x.x*f.y);if(!isFinite(D))return;M.copy(u).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(D),a[S].add(M),a[L].add(M),a[G].add(M),o[S].add(p),o[L].add(p),o[G].add(p)}let T=this.groups;if(T.length===0)T=[{start:0,count:e.count}];for(let S=0,L=T.length;S<L;++S){let G=T[S],{start:D,count:B}=G;for(let Q=D,C=D+B;Q<C;Q+=3)g(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}let E=new F,y=new F,w=new F,I=new F;function m(S){w.fromBufferAttribute(i,S),I.copy(w);let L=a[S];E.copy(L),E.sub(w.multiplyScalar(w.dot(L))).normalize(),y.crossVectors(I,L);let D=y.dot(o[S])<0?-1:1;r.setXYZW(S,E.x,E.y,E.z,D)}for(let S=0,L=n.count;S<L;++S)if(l[S])m(S);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new F,s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F;if(e)for(let d=0,h=e.count;d<h;d+=3){let f=e.getX(d+0),x=e.getX(d+1),M=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),a.add(c),o.add(c),l.add(c),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,o){let{array:l,itemSize:c,normalized:u}=a,d=new l.constructor(o.length*c),h=0,f=0;for(let x=0,M=o.length;x<M;x++){if(a.isInterleavedBufferAttribute)h=o[x]*a.data.stride+a.offset;else h=o[x]*c;for(let p=0;p<c;p++)d[f++]=l[h++]}return new Vt(d,c,u)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Mt,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=e(o,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,u=l.length;c<u;c++){let d=l[c],h=e(d,n);o.push(h)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)e[l]=o[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let n=this.attributes;for(let o in n){let l=n[o];e.data.attributes[o]=l.toJSON(e.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let u=0,d=l.length;u<d;u++){let h=l[u];c.push(h.toJSON(e.data))}if(c.length>0)i[o]=c,s=!0}if(s)e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)e.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)e.data.boundingSphere=a.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;if(n!==null)this.setIndex(n.clone());let i=e.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(t))}let s=e.morphAttributes;for(let l in s){let c=[],u=s[l];for(let d=0,h=u.length;d<h;d++)c.push(u[d].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,c=r.length;l<c;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=e.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Do{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=zl(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=zl(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function zl(e){if(e.buffer._uuid===void 0)e.buffer._uuid=Hn();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var kt=new F;class us{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Lr(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];if(this.normalized)n=this._denormalize(n);return n}setComponent(e,t,n){if(this.normalized)n=this._normalize(n);return this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){hs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new us(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){hs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):uh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):dh(e,this.data.array)}}var Ta=new F,Pu=new F,Lu=new Xe;class cn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ta.subVectors(n,t).cross(Pu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ta),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let r=-(e.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lu.getNormalMatrix(e),i=this.coplanarPoint(Ta).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var Nu=0;class Rn extends wn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)n.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(t){let s=i(e.textures),r=i(e.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new Ge().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((n)=>new cn().fromJSON(n));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let n=e.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new ue().fromArray(n)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class kn extends Rn{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var wi,ts=new F,Ai=new F,Ri=new F,Ci=new ue,ns=new ue,ph=new ft,$s=new F,is=new F,Ks=new F,Gl=new ue,Ea=new ue,Hl=new ue;class ri extends Nt{constructor(e=new kn){super();if(this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new Mt;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new Do(t,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new us(n,3,0,!1)),wi.setAttribute("uv",new us(n,2,3,!1))}this.geometry=wi,this.material=e,this.center=new ue(0.5,0.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Ai.setFromMatrixScale(this.matrixWorld),ph.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ri.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Ai.multiplyScalar(-Ri.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;Qs($s.set(-0.5,-0.5,0),Ri,r,Ai,i,s),Qs(is.set(0.5,-0.5,0),Ri,r,Ai,i,s),Qs(Ks.set(0.5,0.5,0),Ri,r,Ai,i,s),Gl.set(0,0),Ea.set(1,0),Hl.set(1,1);let a=e.ray.intersectTriangle($s,is,Ks,!1,ts);if(a===null){if(Qs(is.set(-0.5,0.5,0),Ri,r,Ai,i,s),Ea.set(0,1),a=e.ray.intersectTriangle($s,Ks,is,!1,ts),a===null)return}let o=e.ray.origin.distanceTo(ts);if(o<e.near||o>e.far)return;t.push({distance:o,point:ts.clone(),uv:Yt.getInterpolation(ts,$s,is,Ks,Gl,Ea,Hl,new ue),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Qs(e,t,n,i,s,r){if(Ci.subVectors(e,n).addScalar(0.5).multiply(i),s!==void 0)ns.x=r*Ci.x-s*Ci.y,ns.y=s*Ci.x+r*Ci.y;else ns.copy(Ci);e.copy(t),e.x+=ns.x,e.y+=ns.y,e.applyMatrix4(ph)}var yn=new F,wa=new F,js=new F,er=new F;class Cs{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);if(n<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yn.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e)}distanceSqToSegment(e,t,n,i){wa.copy(e).add(t).multiplyScalar(0.5),js.copy(t).sub(e).normalize(),er.copy(this.origin).sub(wa);let s=e.distanceTo(t)*0.5,r=-this.direction.dot(js),a=er.dot(this.direction),o=-er.dot(js),l=er.lengthSq(),c=Math.abs(1-r*r),u,d,h,f;if(c>0)if(u=r*o-a,d=r*a-o,f=s*c,u>=0)if(d>=-f)if(d<=f){let x=1/c;u*=x,d*=x,h=u*(u+r*d+2*a)+d*(r*u+d+2*o)+l}else d=s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else d=-s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else if(d<=-f)u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else if(d<=f)u=0,d=Math.min(Math.max(-s,-o),s),h=d*(d+2*o)+l;else u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(wa).addScaledVector(js,d);return h}intersectSphere(e,t){if(e.radius<0)return null;yn.subVectors(e.center,this.origin);let n=yn.dot(this.direction),i=yn.dot(yn)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,t);return this.at(a,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);if(n===null)return null;return this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;if(l>=0)n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l;else n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l;if(c>=0)s=(e.min.y-d.y)*c,r=(e.max.y-d.y)*c;else s=(e.max.y-d.y)*c,r=(e.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)a=(e.min.z-d.z)*u,o=(e.max.z-d.z)*u;else a=(e.max.z-d.z)*u,o=(e.min.z-d.z)*u;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,u=e.x-r.x,d=e.y-r.y,h=e.z-r.z,f=t.x-r.x,x=t.y-r.y,M=t.z-r.z,p=n.x-r.x,g=n.y-r.y,T=n.z-r.z,E=Math.abs(o),y=Math.abs(l),w=Math.abs(c),I,m,S,L,G,D,B,Q,C,K,j,H;if(E>=y&&E>=w)if(S=o,D=u,C=f,H=p,o>=0)I=l,m=c,L=d,G=h,B=x,Q=M,K=g,j=T;else I=c,m=l,L=h,G=d,B=M,Q=x,K=T,j=g;else if(y>=w)if(S=l,D=d,C=x,H=g,l>=0)I=c,m=o,L=h,G=u,B=M,Q=f,K=T,j=p;else I=o,m=c,L=u,G=h,B=f,Q=M,K=p,j=T;else if(S=c,D=h,C=M,H=T,c>=0)I=o,m=l,L=u,G=d,B=f,Q=x,K=p,j=g;else I=l,m=o,L=d,G=u,B=x,Q=f,K=g,j=p;if(S===0)return null;let fe=I/S,J=m/S,te=1/S,oe=L-fe*D,Se=G-J*D,ee=B-fe*C,ae=Q-J*C,be=K-fe*H,Ue=j-J*H,Fe=be*ae-Ue*ee,ve=oe*Ue-Se*be,je=ee*Se-ae*oe;if(i){if(Fe<0||ve<0||je<0)return null}else if((Fe<0||ve<0||je<0)&&(Fe>0||ve>0||je>0))return null;let We=Fe+ve+je;if(We===0)return null;let Oe=te*(Fe*D+ve*C+je*H);if(We>0?Oe<0:Oe>0)return null;return this.at(Oe/We,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on extends Rn{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var kl=new ft,$n=new Cs,tr=new si,Wl=new F,nr=new F,ir=new F,sr=new F,Aa=new F,rr=new F,Vl=new F,ar=new F;class ht extends Nt{constructor(e=new Mt,t=new on){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){rr.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],u=s[o];if(c===0)continue;if(Aa.fromBufferAttribute(u,e),r)rr.addScaledVector(Aa,c);else rr.addScaledVector(Aa.sub(t),c)}t.add(rr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(tr.copy(n.boundingSphere),tr.applyMatrix4(s),$n.copy(e.ray).recast(e.near),tr.containsPoint($n.origin)===!1){if($n.intersectSphere(tr,Wl)===null)return;if($n.origin.distanceToSquared(Wl)>(e.far-e.near)**2)return}if(kl.copy(s).invert(),$n.copy(e.ray).applyMatrix4(kl),n.boundingBox!==null){if($n.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(e,t,$n)}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,{groups:d,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let f=0,x=d.length;f<x;f++){let M=d[f],p=r[M.materialIndex],g=Math.max(M.start,h.start),T=Math.min(a.count,Math.min(M.start+M.count,h.start+h.count));for(let E=g,y=T;E<y;E+=3){let w=a.getX(E),I=a.getX(E+1),m=a.getX(E+2);if(i=or(this,p,e,n,l,c,u,w,I,m),i)i.faceIndex=Math.floor(E/3),i.face.materialIndex=M.materialIndex,t.push(i)}}else{let f=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let M=f,p=x;M<p;M+=3){let g=a.getX(M),T=a.getX(M+1),E=a.getX(M+2);if(i=or(this,r,e,n,l,c,u,g,T,E),i)i.faceIndex=Math.floor(M/3),t.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let f=0,x=d.length;f<x;f++){let M=d[f],p=r[M.materialIndex],g=Math.max(M.start,h.start),T=Math.min(o.count,Math.min(M.start+M.count,h.start+h.count));for(let E=g,y=T;E<y;E+=3){let w=E,I=E+1,m=E+2;if(i=or(this,p,e,n,l,c,u,w,I,m),i)i.faceIndex=Math.floor(E/3),i.face.materialIndex=M.materialIndex,t.push(i)}}else{let f=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let M=f,p=x;M<p;M+=3){let g=M,T=M+1,E=M+2;if(i=or(this,r,e,n,l,c,u,g,T,E),i)i.faceIndex=Math.floor(M/3),t.push(i)}}}}function Du(e,t,n,i,s,r,a,o){let l;if(t.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,t.side===0,o);if(l===null)return null;ar.copy(o),ar.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(ar);if(c<n.near||c>n.far)return null;return{distance:c,point:ar.clone(),object:e}}function or(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,nr),e.getVertexPosition(l,ir),e.getVertexPosition(c,sr);let u=Du(e,t,n,i,nr,ir,sr,Vl);if(u){let d=new F;if(Yt.getBarycoord(Vl,nr,ir,sr,d),s)u.uv=Yt.getInterpolatedAttribute(s,o,l,c,d,new ue);if(r)u.uv1=Yt.getInterpolatedAttribute(r,o,l,c,d,new ue);if(a){if(u.normal=Yt.getInterpolatedAttribute(a,o,l,c,d,new F),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new F,materialIndex:0};Yt.getNormal(nr,ir,sr,h.normal),u.face=h,u.barycoord=d}return u}class Uo extends Lt{constructor(e=null,t=1,n=1,i,s,r,a,o,l=1003,c=1003,u,d){super(null,r,a,o,l,c,i,s,u,d);this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Kn=new si,Uu=new ue(0.5,0.5),lr=new F;class Ui{constructor(e=new cn,t=new cn,n=new cn,i=new cn,s=new cn,r=new cn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2000,n=!1){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],x=s[9],M=s[10],p=s[11],g=s[12],T=s[13],E=s[14],y=s[15];if(i[0].setComponents(l-r,h-c,p-f,y-g).normalize(),i[1].setComponents(l+r,h+c,p+f,y+g).normalize(),i[2].setComponents(l+a,h+u,p+x,y+T).normalize(),i[3].setComponents(l-a,h-u,p-x,y-T).normalize(),n)i[4].setComponents(o,d,M,E).normalize(),i[5].setComponents(l-o,h-d,p-M,y-E).normalize();else if(i[4].setComponents(l-o,h-d,p-M,y-E).normalize(),t===2000)i[5].setComponents(l+o,h+d,p+M,y+E).normalize();else if(t===2001)i[5].setComponents(o,d,M,E).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){Kn.center.set(0,0,0);let t=Uu.distanceTo(e.center);return Kn.radius=0.7071067811865476+t,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(lr.x=i.normal.x>0?e.max.x:e.min.x,lr.y=i.normal.y>0?e.max.y:e.min.y,lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Xl=new ft;class Br{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];if(Xl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0)n[i]=new Ui;n[i].setFromProjectionMatrix(Xl,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++){if(t[i]===void 0)t[i]=new Ui;t[i].copy(n[i])}return this._count=e._count,this}clone(){return new Br().copy(this)}}class Is extends Rn{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var vr=new F,yr=new F,ql=new ft,ss=new Cs,cr=new si,Ra=new F,Yl=new F;class Fo extends Nt{constructor(e=new Mt,t=new Is){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)vr.fromBufferAttribute(t,i-1),yr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=vr.distanceTo(yr);e.setAttribute("lineDistance",new mt(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(cr.copy(n.boundingSphere),cr.applyMatrix4(i),cr.radius+=s,e.ray.intersectsSphere(cr)===!1)return;ql.copy(i).invert(),ss.copy(e.ray).applyMatrix4(ql);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let x=h,M=f-1;x<M;x+=l){let p=c.getX(x),g=c.getX(x+1),T=hr(this,e,ss,o,p,g,x);if(T)t.push(T)}if(this.isLineLoop){let x=c.getX(f-1),M=c.getX(h),p=hr(this,e,ss,o,x,M,f-1);if(p)t.push(p)}}else{let h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let x=h,M=f-1;x<M;x+=l){let p=hr(this,e,ss,o,x,x+1,x);if(p)t.push(p)}if(this.isLineLoop){let x=hr(this,e,ss,o,f-1,h,f-1);if(x)t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hr(e,t,n,i,s,r,a){let o=e.geometry.attributes.position;if(vr.fromBufferAttribute(o,s),yr.fromBufferAttribute(o,r),n.distanceSqToSegment(vr,yr,Ra,Yl)>i)return;Ra.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ra);if(c<t.near||c>t.far)return;return{distance:c,point:Yl.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}var Zl=new F,Jl=new F;class zr extends Fo{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Zl.fromBufferAttribute(t,i),Jl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zl.distanceTo(Jl);e.setAttribute("lineDistance",new mt(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ki extends Rn{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var $l=new ft,La=new Cs,ur=new si,dr=new F;class Ps extends Nt{constructor(e=new Mt,t=new ki){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(ur.copy(n.boundingSphere),ur.applyMatrix4(i),ur.radius+=s,e.ray.intersectsSphere(ur)===!1)return;$l.copy(i).invert(),La.copy(e.ray).applyMatrix4($l);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),h=Math.min(l.count,r.start+r.count);for(let f=d,x=h;f<x;f++){let M=l.getX(f);dr.fromBufferAttribute(u,M),Kl(dr,M,o,i,e,t,this)}}else{let d=Math.max(0,r.start),h=Math.min(u.count,r.start+r.count);for(let f=d,x=h;f<x;f++)dr.fromBufferAttribute(u,f),Kl(dr,f,o,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kl(e,t,n,i,s,r,a){let o=La.distanceSqToPoint(e);if(o<n){let l=new F;La.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Gr extends Lt{constructor(e=[],t=301,n,i,s,r,a,o,l,c){super(e,t,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hr extends Lt{constructor(e,t,n,i,s,r,a,o,l){super(e,t,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wn extends Lt{constructor(e,t,n=1014,i,s,r,a=1003,o=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new As(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class kr extends Wn{constructor(e,t=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,n,i,s,r,a,o,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wr extends Lt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wi extends Mt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],u=[],d=0,h=0;f("z","y","x",-1,-1,n,t,e,r,s,0),f("z","y","x",1,-1,n,t,-e,r,s,1),f("x","z","y",1,1,e,n,t,i,r,2),f("x","z","y",1,-1,e,n,-t,i,r,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2));function f(x,M,p,g,T,E,y,w,I,m,S){let L=E/I,G=y/m,D=E/2,B=y/2,Q=w/2,C=I+1,K=m+1,j=0,H=0,fe=new F;for(let J=0;J<K;J++){let te=J*G-B;for(let oe=0;oe<C;oe++){let Se=oe*L-D;fe[x]=Se*g,fe[M]=te*T,fe[p]=Q,l.push(fe.x,fe.y,fe.z),fe[x]=0,fe[M]=0,fe[p]=w>0?1:-1,c.push(fe.x,fe.y,fe.z),u.push(oe/I),u.push(1-J/m),j+=1}}for(let J=0;J<m;J++)for(let te=0;te<I;te++){let oe=d+te+C*J,Se=d+te+C*(J+1),ee=d+(te+1)+C*(J+1),ae=d+(te+1)+C*J;o.push(oe,Se,ae),o.push(Se,ee,ae),H+=6}a.addGroup(h,H,S),h+=H,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dn extends Mt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],u=[],d=[],h=[],f=0,x=[],M=n/2,p=0;if(g(),r===!1){if(e>0)T(!0);if(t>0)T(!1)}this.setIndex(c),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(h,2));function g(){let E=new F,y=new F,w=0,I=(t-e)/n;for(let m=0;m<=s;m++){let S=[],L=m/s,G=L*(t-e)+e;for(let D=0;D<=i;D++){let B=D/i,Q=B*o+a,C=Math.sin(Q),K=Math.cos(Q);y.x=G*C,y.y=-L*n+M,y.z=G*K,u.push(y.x,y.y,y.z),E.set(C,I,K).normalize(),d.push(E.x,E.y,E.z),h.push(B,1-L),S.push(f++)}x.push(S)}for(let m=0;m<i;m++)for(let S=0;S<s;S++){let L=x[S][m],G=x[S+1][m],D=x[S+1][m+1],B=x[S][m+1];if(e>0||S!==0)c.push(L,G,B),w+=3;if(t>0||S!==s-1)c.push(G,D,B),w+=3}l.addGroup(p,w,0),p+=w}function T(E){let y=f,w=new ue,I=new F,m=0,S=E===!0?e:t,L=E===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,M*L,0),d.push(0,L,0),h.push(0.5,0.5),f++;let G=f;for(let D=0;D<=i;D++){let Q=D/i*o+a,C=Math.cos(Q),K=Math.sin(Q);I.x=S*K,I.y=M*L,I.z=S*C,u.push(I.x,I.y,I.z),d.push(0,L,0),w.x=C*0.5+0.5,w.y=K*0.5*L+0.5,h.push(w.x,w.y),f++}for(let D=0;D<i;D++){let B=y+D,Q=G+D;if(E===!0)c.push(Q,Q+1,B);else c.push(Q+1,Q,B);m+=3}l.addGroup(p,m,E===!0?1:2),p+=m}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vi extends dn{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,s,r,a);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new Vi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kt{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,r;if(t)r=t;else r=e*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],d=n[i+1]-c,h=(r-c)/d;return(i+h)/(s-1)}getTangent(e,t){let i=e-0.0001,s=e+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=t||(r.isVector2?new ue:new F);return o.copy(a).sub(r).normalize(),o}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,i=[],s=[],r=[],a=new F,o=new ft;for(let h=0;h<=e;h++){let f=h/e;i[h]=this.getTangentAt(f,new F)}s[0]=new F,r[0]=new F;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(u<=l)l=u,n.set(0,1,0);if(d<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(et(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(o.makeRotationAxis(a,f))}r[h].crossVectors(i[h],s[h])}if(t===!0){let h=Math.acos(et(s[0].dot(s[e]),-1,1));if(h/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0)h=-h;for(let f=1;f<=e;f++)s[f].applyMatrix4(o.makeRotationAxis(i[f],h*f)),r[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Ls extends Kt{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(e,t=new ue){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+e*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,h=l-this.aY;o=d*c-h*u+this.aX,l=d*u+h*c+this.aY}return n.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Oo extends Ls{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function Bo(){let e=0,t=0,n=0,i=0;function s(r,a,o,l){e=r,t=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return e+t*r+n*a+i*o}}}var Ql=new F,jl=new F,Ca=new Bo,Ia=new Bo,Pa=new Bo;class zo extends Kt{constructor(e=[],t=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){let n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else jl.subVectors(i[0],i[1]).add(i[0]),l=jl;let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else Ql.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Ql;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,f=Math.pow(l.distanceToSquared(u),h),x=Math.pow(u.distanceToSquared(d),h),M=Math.pow(d.distanceToSquared(c),h);if(x<0.0001)x=1;if(f<0.0001)f=x;if(M<0.0001)M=x;Ca.initNonuniformCatmullRom(l.x,u.x,d.x,c.x,f,x,M),Ia.initNonuniformCatmullRom(l.y,u.y,d.y,c.y,f,x,M),Pa.initNonuniformCatmullRom(l.z,u.z,d.z,c.z,f,x,M)}else if(this.curveType==="catmullrom")Ca.initCatmullRom(l.x,u.x,d.x,c.x,this.tension),Ia.initCatmullRom(l.y,u.y,d.y,c.y,this.tension),Pa.initCatmullRom(l.z,u.z,d.z,c.z,this.tension);return n.set(Ca.calc(o),Ia.calc(o),Pa.calc(o)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ec(e,t,n,i,s){let r=(i-t)*0.5,a=(s-n)*0.5,o=e*e,l=e*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*e+n}function Fu(e,t){let n=1-e;return n*n*t}function Ou(e,t){return 2*(1-e)*e*t}function Bu(e,t){return e*e*t}function os(e,t,n,i){return Fu(e,t)+Ou(e,n)+Bu(e,i)}function zu(e,t){let n=1-e;return n*n*n*t}function Gu(e,t){let n=1-e;return 3*n*n*e*t}function Hu(e,t){return 3*(1-e)*e*e*t}function ku(e,t){return e*e*e*t}function ls(e,t,n,i,s){return zu(e,t)+Gu(e,n)+Hu(e,i)+ku(e,s)}class Vr extends Kt{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){let n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ls(e,i.x,s.x,r.x,a.x),ls(e,i.y,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Go extends Kt{constructor(e=new F,t=new F,n=new F,i=new F){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){let n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ls(e,i.x,s.x,r.x,a.x),ls(e,i.y,s.y,r.y,a.y),ls(e,i.z,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xr extends Kt{constructor(e=new ue,t=new ue){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;if(e===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1);return n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ho extends Kt{constructor(e=new F,t=new F){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;if(e===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1);return n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qr extends Kt{constructor(e=new ue,t=new ue,n=new ue){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(os(e,i.x,s.x,r.x),os(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ko extends Kt{constructor(e=new F,t=new F,n=new F){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(os(e,i.x,s.x,r.x),os(e,i.y,s.y,r.y),os(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yr extends Kt{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(ec(a,o.x,l.x,c.x,u.x),ec(a,o.y,l.y,c.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ue().fromArray(i))}return this}}var Na=Object.freeze({__proto__:null,ArcCurve:Oo,CatmullRomCurve3:zo,CubicBezierCurve:Vr,CubicBezierCurve3:Go,EllipseCurve:Ls,LineCurve:Xr,LineCurve3:Ho,QuadraticBezierCurve:qr,QuadraticBezierCurve3:ko,SplineCurve:Yr});class Wo extends Kt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Na[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;t.push(c),n=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Na[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Sr extends Wo{constructor(e){super();if(this.type="Path",this.currentPoint=new ue,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xr(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new qr(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){let a=new Vr(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Yr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+a,t+o,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,n,i,s,r,a,o),this}absellipse(e,t,n,i,s,r,a,o){let l=new Ls(e,t,n,i,s,r,a,o);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ai extends Sr{constructor(e){super(e);this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Sr().fromJSON(i))}return this}}function Wu(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,r=mh(e,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=Zu(e,t,r,n);if(e.length>80*n){o=e[0],l=e[1];let u=o,d=l;for(let h=n;h<s;h+=n){let f=e[h],x=e[h+1];if(f<o)o=f;if(x<l)l=x;if(f>u)u=f;if(x>d)d=x}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return ds(r,a,n,o,l,c,0),a}function mh(e,t,n,i,s){let r;if(s===rd(e,t,n,i)>0)for(let a=t;a<n;a+=i)r=tc(a/i|0,e[a],e[a+1],r);else for(let a=n-i;a>=t;a-=i)r=tc(a/i|0,e[a],e[a+1],r);if(r&&Fi(r,r.next))ps(r),r=r.next;return r}function jn(e,t){if(!e)return e;if(!t)t=e;let n=e,i;do if(i=!1,!n.steiner&&(Fi(n,n.next)||xt(n.prev,n,n.next)===0)){if(ps(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function ds(e,t,n,i,s,r,a){if(!e)return;if(!a&&r)ju(e,i,s,r);let o=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(r?Xu(e,i,s,r):Vu(e)){t.push(l.i,e.i,c.i),ps(e),e=c.next,o=c.next;continue}if(e=c,e===o){if(!a)ds(jn(e),t,n,i,s,r,1);else if(a===1)e=qu(jn(e),t),ds(e,t,n,i,s,r,2);else if(a===2)Yu(e,t,n,i,s,r);break}}}function Vu(e){let t=e.prev,n=e,i=e.next;if(xt(t,n,i)>=0)return!1;let s=t.x,r=n.x,a=i.x,o=t.y,l=n.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),x=i.next;while(x!==t){if(x.x>=u&&x.x<=h&&x.y>=d&&x.y<=f&&rs(s,o,r,l,a,c,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Xu(e,t,n,i){let s=e.prev,r=e,a=e.next;if(xt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),x=Math.min(u,d,h),M=Math.max(o,l,c),p=Math.max(u,d,h),g=Da(f,x,t,n,i),T=Da(M,p,t,n,i),{prevZ:E,nextZ:y}=e;while(E&&E.z>=g&&y&&y.z<=T){if(E.x>=f&&E.x<=M&&E.y>=x&&E.y<=p&&E!==s&&E!==a&&rs(o,u,l,d,c,h,E.x,E.y)&&xt(E.prev,E,E.next)>=0)return!1;if(E=E.prevZ,y.x>=f&&y.x<=M&&y.y>=x&&y.y<=p&&y!==s&&y!==a&&rs(o,u,l,d,c,h,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}while(E&&E.z>=g){if(E.x>=f&&E.x<=M&&E.y>=x&&E.y<=p&&E!==s&&E!==a&&rs(o,u,l,d,c,h,E.x,E.y)&&xt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}while(y&&y.z<=T){if(y.x>=f&&y.x<=M&&y.y>=x&&y.y<=p&&y!==s&&y!==a&&rs(o,u,l,d,c,h,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function qu(e,t){let n=e;do{let i=n.prev,s=n.next.next;if(!Fi(i,s)&&_h(i,n,n.next,s)&&fs(i,s)&&fs(s,i))t.push(i.i,n.i,s.i),ps(n),ps(n.next),n=e=s;n=n.next}while(n!==e);return jn(n)}function Yu(e,t,n,i,s,r){let a=e;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&nd(a,o)){let l=xh(a,o);a=jn(a,a.next),l=jn(l,l.next),ds(a,t,n,i,s,r,0),ds(l,t,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==e)}function Zu(e,t,n,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:e.length,c=mh(e,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(td(c))}s.sort(Ju);for(let r=0;r<s.length;r++)n=$u(s[r],n);return n}function Ju(e,t){let n=e.x-t.x;if(n===0){if(n=e.y-t.y,n===0){let i=(e.next.y-e.y)/(e.next.x-e.x),s=(t.next.y-t.y)/(t.next.x-t.x);n=i-s}}return n}function $u(e,t){let n=Ku(e,t);if(!n)return t;let i=xh(n,e);return jn(i,i.next),jn(n,n.next)}function Ku(e,t){let n=t,{x:i,y:s}=e,r=-1/0,a;if(Fi(e,n))return n;do{if(Fi(e,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r){if(r=d,a=n.x<n.next.x?n:n.next,d===i)return a}}n=n.next}while(n!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&gh(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);if(fs(n,e)&&(d<u||d===u&&(n.x>a.x||n.x===a.x&&Qu(a,n))))a=n,u=d}n=n.next}while(n!==o);return a}function Qu(e,t){return xt(e.prev,e,t.prev)<0&&xt(t.next,e,e.next)<0}function ju(e,t,n,i){let s=e;do{if(s.z===0)s.z=Da(s.x,s.y,t,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,ed(s)}function ed(e){let t,n=1;do{let i=e,s;e=null;let r=null;t=0;while(i){t++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else e=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(t>1);return e}function Da(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function td(e){let t=e,n=e;do{if(t.x<n.x||t.x===n.x&&t.y<n.y)n=t;t=t.next}while(t!==e);return n}function gh(e,t,n,i,s,r,a,o){return(s-a)*(t-o)>=(e-a)*(r-o)&&(e-a)*(i-o)>=(n-a)*(t-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function rs(e,t,n,i,s,r,a,o){return!(e===a&&t===o)&&gh(e,t,n,i,s,r,a,o)}function nd(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!id(e,t)&&(fs(e,t)&&fs(t,e)&&sd(e,t)&&(xt(e.prev,e,t.prev)||xt(e,t.prev,t))||Fi(e,t)&&xt(e.prev,e,e.next)>0&&xt(t.prev,t,t.next)>0)}function xt(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Fi(e,t){return e.x===t.x&&e.y===t.y}function _h(e,t,n,i){let s=pr(xt(e,t,n)),r=pr(xt(e,t,i)),a=pr(xt(n,i,e)),o=pr(xt(n,i,t));if(s!==r&&a!==o)return!0;if(s===0&&fr(e,n,t))return!0;if(r===0&&fr(e,i,t))return!0;if(a===0&&fr(n,e,i))return!0;if(o===0&&fr(n,t,i))return!0;return!1}function fr(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function pr(e){return e>0?1:e<0?-1:0}function id(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&_h(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function fs(e,t){return xt(e.prev,e,e.next)<0?xt(e,t,e.next)>=0&&xt(e,e.prev,t)>=0:xt(e,t,e.prev)<0||xt(e,e.next,t)<0}function sd(e,t){let n=e,i=!1,s=(e.x+t.x)/2,r=(e.y+t.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==e);return i}function xh(e,t){let n=Ua(e.i,e.x,e.y),i=Ua(t.i,t.x,t.y),s=e.next,r=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function tc(e,t,n,i){let s=Ua(e,t,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function ps(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Ua(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rd(e,t,n,i){let s=0;for(let r=t,a=n-i;r<n;r+=i)s+=(e[a]-e[r])*(e[r+1]+e[a+1]),a=r;return s}class vh{static triangulate(e,t,n=2){return Wu(e,t,n)}}class Qn{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*0.5}static isClockWise(e){return Qn.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];nc(e),ic(n,e);let r=e.length;t.forEach(nc);for(let o=0;o<t.length;o++)i.push(r),r+=t[o].length,ic(n,t[o]);let a=vh.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function nc(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function ic(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}class Xi extends Mt{constructor(e=new ai([new ue(0.5,0.5),new ue(-0.5,0.5),new ue(-0.5,-0.5),new ue(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let a=0,o=e.length;a<o;a++){let l=e[a];r(l)}this.setAttribute("position",new mt(i,3)),this.setAttribute("uv",new mt(s,2)),this.computeVertexNormals();function r(a){let o=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:0.2,f=t.bevelSize!==void 0?t.bevelSize:h-0.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,M=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:ad,T,E=!1,y,w,I,m;if(p){T=p.getSpacedPoints(c),E=!0,d=!1;let ie=p.isCatmullRomCurve3?p.closed:!1;y=p.computeFrenetFrames(c,ie),w=new F,I=new F,m=new F}if(!d)M=0,h=0,f=0,x=0;let S=a.extractPoints(l),{shape:L,holes:G}=S;if(!Qn.isClockWise(L)){L=L.reverse();for(let ie=0,de=G.length;ie<de;ie++){let pe=G[ie];if(Qn.isClockWise(pe))G[ie]=pe.reverse()}}function B(ie){let Ee=ie[0];for(let Te=1;Te<=ie.length;Te++){let Le=Te%ie.length,Ne=ie[Le],Je=Ne.x-Ee.x,Ze=Ne.y-Ee.y,tt=Je*Je+Ze*Ze,N=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(Ee.x),Math.abs(Ee.y)),vt=0.000000000000000000010000000000000001*N*N;if(tt<=vt){ie.splice(Le,1),Te--;continue}Ee=Ne}}B(L),G.forEach(B);let Q=G.length,C=L;for(let ie=0;ie<Q;ie++){let de=G[ie];L=L.concat(de)}function K(ie,de,pe){if(!de)He("ExtrudeGeometry: vec does not exist");return ie.clone().addScaledVector(de,pe)}let j=L.length;function H(ie,de,pe){let Ee,Te,Le,Ne=ie.x-de.x,Je=ie.y-de.y,Ze=pe.x-ie.x,tt=pe.y-ie.y,N=Ne*Ne+Je*Je,vt=Ne*tt-Je*Ze;if(Math.abs(vt)>Number.EPSILON){let Ve=Math.sqrt(N),pt=Math.sqrt(Ze*Ze+tt*tt),le=de.x-Je/Ve,st=de.y+Ne/Ve,Be=pe.x-tt/pt,ke=pe.y+Ze/pt,yt=((Be-le)*tt-(ke-st)*Ze)/(Ne*tt-Je*Ze);Ee=le+Ne*yt-ie.x,Te=st+Je*yt-ie.y;let b=Ee*Ee+Te*Te;if(b<=2)return new ue(Ee,Te);else Le=Math.sqrt(b/2)}else{let Ve=!1;if(Ne>Number.EPSILON){if(Ze>Number.EPSILON)Ve=!0}else if(Ne<-Number.EPSILON){if(Ze<-Number.EPSILON)Ve=!0}else if(Math.sign(Je)===Math.sign(tt))Ve=!0;if(Ve)Ee=-Je,Te=Ne,Le=Math.sqrt(N);else Ee=Ne,Te=Je,Le=Math.sqrt(N/2)}return new ue(Ee/Le,Te/Le)}let fe=[];for(let ie=0,de=C.length,pe=de-1,Ee=ie+1;ie<de;ie++,pe++,Ee++){if(pe===de)pe=0;if(Ee===de)Ee=0;fe[ie]=H(C[ie],C[pe],C[Ee])}let J=[],te,oe=fe.concat();for(let ie=0,de=Q;ie<de;ie++){let pe=G[ie];te=[];for(let Ee=0,Te=pe.length,Le=Te-1,Ne=Ee+1;Ee<Te;Ee++,Le++,Ne++){if(Le===Te)Le=0;if(Ne===Te)Ne=0;te[Ee]=H(pe[Ee],pe[Le],pe[Ne])}J.push(te),oe=oe.concat(te)}let Se;if(M===0)Se=Qn.triangulateShape(C,G);else{let ie=[],de=[];for(let pe=0;pe<M;pe++){let Ee=pe/M,Te=h*Math.cos(Ee*Math.PI/2),Le=f*Math.sin(Ee*Math.PI/2)+x;for(let Ne=0,Je=C.length;Ne<Je;Ne++){let Ze=K(C[Ne],fe[Ne],Le);if(ve(Ze.x,Ze.y,-Te),Ee===0)ie.push(Ze)}for(let Ne=0,Je=Q;Ne<Je;Ne++){let Ze=G[Ne];te=J[Ne];let tt=[];for(let N=0,vt=Ze.length;N<vt;N++){let Ve=K(Ze[N],te[N],Le);if(ve(Ve.x,Ve.y,-Te),Ee===0)tt.push(Ve)}if(Ee===0)de.push(tt)}}Se=Qn.triangulateShape(ie,de)}let ee=Se.length,ae=f+x;for(let ie=0;ie<j;ie++){let de=d?K(L[ie],oe[ie],ae):L[ie];if(!E)ve(de.x,de.y,0);else I.copy(y.normals[0]).multiplyScalar(de.x),w.copy(y.binormals[0]).multiplyScalar(de.y),m.copy(T[0]).add(I).add(w),ve(m.x,m.y,m.z)}for(let ie=1;ie<=c;ie++)for(let de=0;de<j;de++){let pe=d?K(L[de],oe[de],ae):L[de];if(!E)ve(pe.x,pe.y,u/c*ie);else I.copy(y.normals[ie]).multiplyScalar(pe.x),w.copy(y.binormals[ie]).multiplyScalar(pe.y),m.copy(T[ie]).add(I).add(w),ve(m.x,m.y,m.z)}for(let ie=M-1;ie>=0;ie--){let de=ie/M,pe=h*Math.cos(de*Math.PI/2),Ee=f*Math.sin(de*Math.PI/2)+x;for(let Te=0,Le=C.length;Te<Le;Te++){let Ne=K(C[Te],fe[Te],Ee);ve(Ne.x,Ne.y,u+pe)}for(let Te=0,Le=G.length;Te<Le;Te++){let Ne=G[Te];te=J[Te];for(let Je=0,Ze=Ne.length;Je<Ze;Je++){let tt=K(Ne[Je],te[Je],Ee);if(!E)ve(tt.x,tt.y,u+pe);else ve(tt.x,tt.y+T[c-1].y,T[c-1].x+pe)}}}be(),Ue();function be(){let ie=i.length/3;if(d){let de=0,pe=j*de;for(let Ee=0;Ee<ee;Ee++){let Te=Se[Ee];je(Te[2]+pe,Te[1]+pe,Te[0]+pe)}de=c+M*2,pe=j*de;for(let Ee=0;Ee<ee;Ee++){let Te=Se[Ee];je(Te[0]+pe,Te[1]+pe,Te[2]+pe)}}else{for(let de=0;de<ee;de++){let pe=Se[de];je(pe[2],pe[1],pe[0])}for(let de=0;de<ee;de++){let pe=Se[de];je(pe[0]+j*c,pe[1]+j*c,pe[2]+j*c)}}n.addGroup(ie,i.length/3-ie,0)}function Ue(){let ie=i.length/3,de=0;Fe(C,de),de+=C.length;for(let pe=0,Ee=G.length;pe<Ee;pe++){let Te=G[pe];Fe(Te,de),de+=Te.length}n.addGroup(ie,i.length/3-ie,1)}function Fe(ie,de){let pe=ie.length;while(--pe>=0){let Ee=pe,Te=pe-1;if(Te<0)Te=ie.length-1;for(let Le=0,Ne=c+M*2;Le<Ne;Le++){let Je=j*Le,Ze=j*(Le+1),tt=de+Ee+Je,N=de+Te+Je,vt=de+Te+Ze,Ve=de+Ee+Ze;We(tt,N,vt,Ve)}}}function ve(ie,de,pe){o.push(ie),o.push(de),o.push(pe)}function je(ie,de,pe){Oe(ie),Oe(de),Oe(pe);let Ee=i.length/3,Te=g.generateTopUV(n,i,Ee-3,Ee-2,Ee-1);Ke(Te[0]),Ke(Te[1]),Ke(Te[2])}function We(ie,de,pe,Ee){Oe(ie),Oe(de),Oe(Ee),Oe(de),Oe(pe),Oe(Ee);let Te=i.length/3,Le=g.generateSideWallUV(n,i,Te-6,Te-3,Te-2,Te-1);Ke(Le[0]),Ke(Le[1]),Ke(Le[3]),Ke(Le[1]),Ke(Le[2]),Ke(Le[3])}function Oe(ie){i.push(o[ie*3+0]),i.push(o[ie*3+1]),i.push(o[ie*3+2])}function Ke(ie){s.push(ie.x),s.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return od(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}let i=e.options.extrudePath;if(i!==void 0)e.options.extrudePath=new Na[i.type]().fromJSON(i);return new Xi(n,e.options)}}var ad={generateTopUV:function(e,t,n,i,s){let r=t[n*3],a=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new ue(r,a),new ue(o,l),new ue(c,u)]},generateSideWallUV:function(e,t,n,i,s,r){let a=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],x=t[s*3+2],M=t[r*3],p=t[r*3+1],g=t[r*3+2];if(Math.abs(o-u)<Math.abs(a-c))return[new ue(a,1-l),new ue(c,1-d),new ue(h,1-x),new ue(M,1-g)];else return[new ue(o,1-l),new ue(u,1-d),new ue(f,1-x),new ue(p,1-g)]}};function od(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let r=e[i];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);if(n.options=Object.assign({},t),t.extrudePath!==void 0)n.options.extrudePath=t.extrudePath.toJSON();return n}class oi extends Mt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,u=e/a,d=t/o,h=[],f=[],x=[],M=[];for(let p=0;p<c;p++){let g=p*d-r;for(let T=0;T<l;T++){let E=T*u-s;f.push(E,-g,0),x.push(0,0,1),M.push(T/a),M.push(1-p/o)}}for(let p=0;p<o;p++)for(let g=0;g<a;g++){let T=g+l*p,E=g+l*(p+1),y=g+1+l*(p+1),w=g+1+l*p;h.push(T,E,w),h.push(E,y,w)}this.setIndex(h),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.widthSegments,e.heightSegments)}}class li extends Mt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],u=new F,d=new F,h=[],f=[],x=[],M=[];for(let p=0;p<=n;p++){let g=[],T=p/n,E=r+T*a,y=e*Math.cos(E),w=Math.sqrt(e*e-y*y),I=0;if(p===0&&r===0)I=0.5/t;else if(p===n&&o===Math.PI)I=-0.5/t;for(let m=0;m<=t;m++){let S=m/t,L=i+S*s;u.x=-w*Math.cos(L),u.y=y,u.z=w*Math.sin(L),f.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),M.push(S+I,1-T),g.push(l++)}c.push(g)}for(let p=0;p<n;p++)for(let g=0;g<t;g++){let T=c[p][g+1],E=c[p][g],y=c[p+1][g],w=c[p+1][g+1];if(p!==0||r>0)h.push(T,E,w);if(p!==n-1||o<Math.PI)h.push(E,y,w)}this.setIndex(h),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ci(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(sc(s))if(s.isRenderTargetTexture)ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null;else t[n][i]=s.clone();else if(Array.isArray(s))if(sc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Gt(e){let t={};for(let n=0;n<e.length;n++){let i=ci(e[n]);for(let s in i)t[s]=i[s]}return t}function sc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ld(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Vo(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return Qe.workingColorSpace}var Cn={clone:ci,merge:Gt},cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Et extends Rn{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.uniformsGroups=ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)t.uniforms[i]={type:"t",value:r.toJSON(e).uuid};else if(r&&r.isColor)t.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)t.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)t.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)t.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)t.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)t.uniforms[i]={type:"m4",value:r.toArray()};else t.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)t.extensions=n;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(i.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new St().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ft().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class Ns extends Et{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xo extends Rn{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qo extends Rn{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ii(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function mr(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class hi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){let a=t[1];if(e<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}while(n<r){let a=n+r>>>1;if(e<t[a])r=a;else n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Yo extends hi{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,a=2*t-n;break;case 2402:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=e,o=2*n-t;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=e-1,o=t}let l=(n-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,f=(n-t)/(i-t),x=f*f,M=x*f,p=-d*M+2*d*x-d*f,g=(1+d)*M+(-1.5-2*d)*x+(-0.5+d)*f+1,T=(-1-h)*M+(1.5+h)*x+0.5*f,E=h*M-h*x;for(let y=0;y!==a;++y)s[y]=p*r[c+y]+g*r[l+y]+T*r[o+y]+E*r[u+y];return s}}class Zo extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(n-t)/(i-t),u=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*u+r[o+d]*c;return s}}class Jo extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class $o extends hi{interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this.inTangents,u=this.outTangents;if(!c||!u){let f=(n-t)/(i-t),x=1-f;for(let M=0;M!==a;++M)s[M]=r[l+M]*x+r[o+M]*f;return s}let d=a*2,h=e-1;for(let f=0;f!==a;++f){let x=r[l+f],M=r[o+f],p=h*d+f*2,g=u[p],T=u[p+1],E=e*d+f*2,y=c[E],w=c[E+1],I=dd(n,t,g,y,i);s[f]=yh(I,x,T,w,M)}return s}}function yh(e,t,n,i,s){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*s}function ud(e,t,n,i,s){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)}function dd(e,t,n,i,s){let r=(e-t)/(s-t);for(let a=0;a<8;a++){let o=yh(r,t,n,i,s)-e;if(Math.abs(o)<0.0000000001)break;let l=ud(r,t,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class Qt{constructor(e,t,n,i){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ii(t,this.TimeBufferType),this.values=Ii(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ii(e.times,Array),values:Ii(e.values,Array)};let i=e.getInterpolation();if(i!==e.DefaultInterpolation)n.interpolation=i;if(mr(e.settings))n.settings={inTangents:Ii(e.settings.inTangents,Array),outTangents:Ii(e.settings.outTangents,Array)}}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $o(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;if(mr(this.settings))rc(this.settings.inTangents,e),rc(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;if(mr(this.settings))ac(this.settings.inTangents,e),ac(this.settings.outTangents,e)}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<e)++s;while(r!==-1&&n[r]>t)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)He("KeyframeTrack: Invalid value size in track.",this),e=!1;let n=this.times,i=this.values,s=n.length;if(s===0)He("KeyframeTrack: Track is empty.",this),e=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){He("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(r!==null&&r>o){He("KeyframeTrack: Out of order keys.",this,a,o,r),e=!1;break}r=o}if(i!==void 0){if(gu(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){He("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=e[a],c=e[a+1];if(l!==c&&(a!==1||l!==e[0]))if(!i){let u=a*n,d=u-n,h=u+n;for(let f=0;f!==n;++f){let x=t[u+f];if(x!==t[d+f]||x!==t[h+f]){o=!0;break}}}else o=!0;if(o){if(a!==r){e[r]=e[a];let u=a*n,d=r*n;for(let h=0;h!==n;++h)t[d+h]=t[u+h]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)t[o+l]=t[a+l];++r}if(r!==e.length)this.times=e.slice(0,r),this.values=t.slice(0,r*n);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);if(i.createInterpolant=this.createInterpolant,mr(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function rc(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function ac(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}Qt.prototype.ValueTypeName="";Qt.prototype.TimeBufferType=Float32Array;Qt.prototype.ValueBufferType=Float32Array;Qt.prototype.DefaultInterpolation=2301;class ui extends Qt{constructor(e,t,n){super(e,t,n)}}ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=2300;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Ko extends Qt{constructor(e,t,n,i){super(e,t,n,i)}}Ko.prototype.ValueTypeName="color";class Qo extends Qt{constructor(e,t,n,i){super(e,t,n,i)}}Qo.prototype.ValueTypeName="number";class jo extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-t)/(i-t),l=e*a;for(let c=l+a;l!==c;l+=4)An.slerpFlat(s,0,r,l-a,r,l,o);return s}}class Zr extends Qt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new jo(this.times,this.values,this.getValueSize(),e)}}Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class di extends Qt{constructor(e,t,n){super(e,t,n)}}di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=2300;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;class el extends Qt{constructor(e,t,n,i){super(e,t,n,i)}}el.prototype.ValueTypeName="vector";class tl{constructor(e,t,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){let h=l[u],f=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Sh=new tl;class nl{constructor(e){if(this.manager=e!==void 0?e:Sh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var gr=new F,_r=new An,ln=new F;class Jr extends Nt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(gr,_r,ln),ln.x===1&&ln.y===1&&ln.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(gr,_r,ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){if(super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(gr,_r,ln),ln.x===1&&ln.y===1&&ln.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(gr,_r,ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Un=new F,oc=new ue,lc=new ue;class Wt extends Jr{constructor(e=50,t=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(aa*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(aa*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Un.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,oc,lc),t.subVectors(lc,oc)}setViewOffset(e,t,n,i,s,r){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(aa*0.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,t-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=e*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ds extends Jr{constructor(e=-1,t=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}var Pi=-90,Li=1;class Us extends Nt{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Wt(Pi,Li,e,t);i.layers=this.layers,this.add(i);let s=new Wt(Pi,Li,e,t);s.layers=this.layers,this.add(s);let r=new Wt(Pi,Li,e,t);r.layers=this.layers,this.add(r);let a=new Wt(Pi,Li,e,t);a.layers=this.layers,this.add(a);let o=new Wt(Pi,Li,e,t);o.layers=this.layers,this.add(o);let l=new Wt(Pi,Li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,o]=t;for(let l of t)this.remove(l);if(e===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let M=!1;if(e.isWebGLRenderer===!0)M=e.state.buffers.depth.getReversed();else M=e.reversedDepthBuffer;if(e.setRenderTarget(n,0,i),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(n,1,i),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(n,2,i),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(n,3,i),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(n,4,i),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),M&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(u,d,h),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class il extends Wt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class $r{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=fd.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function fd(){if(this._document.hidden===!1)this.reset()}var sl="\\[\\]\\.:\\/",pd=new RegExp("["+sl+"]","g"),rl="[^"+sl+"]",md="[^"+sl.replace("\\.","")+"]",gd=/((?:WC+[\/:])*)/.source.replace("WC",rl),_d=/(WCOD+)?/.source.replace("WCOD",md),xd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rl),vd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rl),yd=new RegExp("^"+gd+_d+xd+vd+"$"),Sd=["material","materials","bones","map"];class Mh{constructor(e,t,n){let i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){if(!(e&&e.isAnimationObjectGroup))return new lt(e,t,n);else return new lt.Composite(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pd,"")}static parseTrackName(e){let t=yd.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Sd.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===t||a.uuid===t)return a;let o=n(a.children);if(o)return o}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=t;if(!e)e=lt.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;He("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[s]!==void 0)s=e.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=Mh;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var p0=new Float32Array(1);class Kr{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1000,this.oldTime=t,this.elapsedTime+=e}return e}}class bh{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}function al(e,t,n,i){let s=Md(i);switch(n){case 1021:return e*t;case 1028:return e*t/s.components*s.byteLength;case 1029:return e*t/s.components*s.byteLength;case 1030:return e*t*2/s.components*s.byteLength;case 1031:return e*t*2/s.components*s.byteLength;case 1022:return e*t*3/s.components*s.byteLength;case 1023:return e*t*4/s.components*s.byteLength;case 1033:return e*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Md(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)ze("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function Xh(){let e=null,t=!1,n=null,i=null;function s(r,a){i=e.requestAnimationFrame(s),n(r,a)}return{start:function(){if(t===!0)return;if(n===null)return;if(e===null)return;i=e.requestAnimationFrame(s),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(i);t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function bd(e){let t=new WeakMap;function n(o,l){let{array:c,usage:u}=o,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)f=e.HALF_FLOAT;else f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:u,updateRanges:d}=l;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,u);else{d.sort((f,x)=>f.start-x.start);let h=0;for(let f=1;f<d.length;f++){let x=d[h],M=d[f];if(M.start<=x.start+x.count+1)x.count=Math.max(x.count,M.start+M.count-x.start);else++h,d[h]=M}d.length=h+1;for(let f=0,x=d.length;f<x;f++){let M=d[f];e.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return t.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=t.get(o);if(l)e.deleteBuffer(l.buffer),t.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=t.get(o);if(!u||u.version<o.version)t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ed=`#ifdef USE_ALPHAHASH
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
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld=`#ifdef USE_BATCHING
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
#endif`,Nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Od=`#ifdef USE_IRIDESCENCE
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
#endif`,Bd=`#ifdef USE_BUMPMAP
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yd=`#define PI 3.141592653589793
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
} // validated`,Zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tf=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
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
}`,df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
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
#endif`,Mf=`uniform sampler2D dfgLUT;
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
}`,bf=`
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Df=`#if defined( USE_POINTS_UV )
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
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
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
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
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
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cp=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ep=`uniform sampler2D t2D;
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform float backgroundBlurriness;
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Pp=`#if DEPTH_PACKING == 3200
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
}`,Lp=`#define DISTANCE
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
}`,Np=`#define DISTANCE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,Gp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
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
}`,kp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,Vp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define PHONG
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
}`,Yp=`#define PHONG
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
}`,Zp=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
}`,$p=`#define TOON
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
}`,Kp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,jp=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,tm=`uniform vec3 color;
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
}`,nm=`uniform float rotation;
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
}`,im=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Td,alphahash_pars_fragment:Ed,alphamap_fragment:wd,alphamap_pars_fragment:Ad,alphatest_fragment:Rd,alphatest_pars_fragment:Cd,aomap_fragment:Id,aomap_pars_fragment:Pd,batching_pars_vertex:Ld,batching_vertex:Nd,begin_vertex:Dd,beginnormal_vertex:Ud,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:kd,color_fragment:Wd,color_pars_fragment:Vd,color_pars_vertex:Xd,color_vertex:qd,common:Yd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:Jd,displacementmap_vertex:$d,emissivemap_fragment:Kd,emissivemap_pars_fragment:Qd,colorspace_fragment:jd,colorspace_pars_fragment:ef,envmap_fragment:tf,envmap_common_pars_fragment:nf,envmap_pars_fragment:sf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:gf,envmap_vertex:af,fog_vertex:of,fog_pars_vertex:lf,fog_fragment:cf,fog_pars_fragment:hf,gradientmap_pars_fragment:uf,lightmap_pars_fragment:df,lights_lambert_fragment:ff,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:_f,lights_toon_pars_fragment:xf,lights_phong_fragment:vf,lights_phong_pars_fragment:yf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Mf,lights_fragment_begin:bf,lights_fragment_maps:Tf,lights_fragment_end:Ef,lightprobes_pars_fragment:wf,logdepthbuf_fragment:Af,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:If,map_fragment:Pf,map_pars_fragment:Lf,map_particle_fragment:Nf,map_particle_pars_fragment:Df,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Ff,morphinstance_vertex:Of,morphcolor_vertex:Bf,morphnormal_vertex:zf,morphtarget_pars_vertex:Gf,morphtarget_vertex:Hf,normal_fragment_begin:kf,normal_fragment_maps:Wf,normal_pars_fragment:Vf,normal_pars_vertex:Xf,normal_vertex:qf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:$f,iridescence_pars_fragment:Kf,opaque_fragment:Qf,packing:jf,premultiplied_alpha_fragment:ep,project_vertex:tp,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:sp,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:hp,skinning_pars_vertex:up,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:xp,transmission_pars_fragment:vp,uv_pars_fragment:yp,uv_pars_vertex:Sp,uv_vertex:Mp,worldpos_vertex:bp,background_vert:Tp,background_frag:Ep,backgroundCube_vert:wp,backgroundCube_frag:Ap,cube_vert:Rp,cube_frag:Cp,depth_vert:Ip,depth_frag:Pp,distance_vert:Lp,distance_frag:Np,equirect_vert:Dp,equirect_frag:Up,linedashed_vert:Fp,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:zp,meshlambert_vert:Gp,meshlambert_frag:Hp,meshmatcap_vert:kp,meshmatcap_frag:Wp,meshnormal_vert:Vp,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:Yp,meshphysical_vert:Zp,meshphysical_frag:Jp,meshtoon_vert:$p,meshtoon_frag:Kp,points_vert:Qp,points_frag:jp,shadow_vert:em,shadow_frag:tm,sprite_vert:nm,sprite_frag:im},ye={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ue(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},pn={basic:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Gt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Gt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Gt([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Gt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Gt([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Gt([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Gt([ye.common,ye.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Gt([ye.lights,ye.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};pn.physical={uniforms:Gt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Qr={r:0,b:0,g:0},sm=new ft,qh=new Xe;qh.set(-1,0,0,0,1,0,0,0,1);function rm(e,t,n,i,s,r){let a=new Ge(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(T){let E=T.isScene===!0?T.background:null;if(E&&E.isTexture){let y=T.backgroundBlurriness>0;E=t.get(E,y)}return E}function x(T){let E=!1,y=f(T);if(y===null)p(a,o);else if(y&&y.isColor)p(y,1),E=!0;let w=e.xr.getEnvironmentBlendMode();if(w==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(w==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(e.autoClear||E)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function M(T,E){let y=f(E);if(y&&y.isCubeTexture){if(c===void 0)c=new ht(new Wi(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:ci(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,I,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sm.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(qh);if(c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ct,u!==y||d!==y.version||h!==e.toneMapping)c.material.needsUpdate=!0,u=y,d=y.version,h=e.toneMapping;c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)}else if(y&&y.isTexture){if(l===void 0)l=new ht(new oi(2,2),new Et({name:"BackgroundMaterial",uniforms:ci(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0)y.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(y.matrix),u!==y||d!==y.version||h!==e.toneMapping)l.material.needsUpdate=!0,u=y,d=y.version,h=e.toneMapping;l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)}}function p(T,E){T.getRGB(Qr,Vo(e)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,E,r)}function g(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:x,addToRenderList:M,dispose:g}}function am(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(D,B,Q,C,K){let j=!1,H=d(D,C,Q,B);if(r!==H)r=H,c(r.object);if(j=f(D,C,Q,K),j)x(D,C,Q,K);if(K!==null)t.update(K,e.ELEMENT_ARRAY_BUFFER);if(j||a){if(a=!1,y(D,B,Q,C),K!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(K).buffer)}}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function u(D){return e.deleteVertexArray(D)}function d(D,B,Q,C){let K=C.wireframe===!0,j=i[B.id];if(j===void 0)j={},i[B.id]=j;let H=D.isInstancedMesh===!0?D.id:0,fe=j[H];if(fe===void 0)fe={},j[H]=fe;let J=fe[Q.id];if(J===void 0)J={},fe[Q.id]=J;let te=J[K];if(te===void 0)te=h(l()),J[K]=te;return te}function h(D){let B=[],Q=[],C=[];for(let K=0;K<n;K++)B[K]=0,Q[K]=0,C[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:C,object:D,attributes:{},index:null}}function f(D,B,Q,C){let K=r.attributes,j=B.attributes,H=0,fe=Q.getAttributes();for(let J in fe)if(fe[J].location>=0){let oe=K[J],Se=j[J];if(Se===void 0){if(J==="instanceMatrix"&&D.instanceMatrix)Se=D.instanceMatrix;if(J==="instanceColor"&&D.instanceColor)Se=D.instanceColor}if(oe===void 0)return!0;if(oe.attribute!==Se)return!0;if(Se&&oe.data!==Se.data)return!0;H++}if(r.attributesNum!==H)return!0;if(r.index!==C)return!0;return!1}function x(D,B,Q,C){let K={},j=B.attributes,H=0,fe=Q.getAttributes();for(let J in fe)if(fe[J].location>=0){let oe=j[J];if(oe===void 0){if(J==="instanceMatrix"&&D.instanceMatrix)oe=D.instanceMatrix;if(J==="instanceColor"&&D.instanceColor)oe=D.instanceColor}let Se={};if(Se.attribute=oe,oe&&oe.data)Se.data=oe.data;K[J]=Se,H++}r.attributes=K,r.attributesNum=H,r.index=C}function M(){let D=r.newAttributes;for(let B=0,Q=D.length;B<Q;B++)D[B]=0}function p(D){g(D,0)}function g(D,B){let Q=r.newAttributes,C=r.enabledAttributes,K=r.attributeDivisors;if(Q[D]=1,C[D]===0)e.enableVertexAttribArray(D),C[D]=1;if(K[D]!==B)e.vertexAttribDivisor(D,B),K[D]=B}function T(){let D=r.newAttributes,B=r.enabledAttributes;for(let Q=0,C=B.length;Q<C;Q++)if(B[Q]!==D[Q])e.disableVertexAttribArray(Q),B[Q]=0}function E(D,B,Q,C,K,j,H){if(H===!0)e.vertexAttribIPointer(D,B,Q,K,j);else e.vertexAttribPointer(D,B,Q,C,K,j)}function y(D,B,Q,C){M();let K=C.attributes,j=Q.getAttributes(),H=B.defaultAttributeValues;for(let fe in j){let J=j[fe];if(J.location>=0){let te=K[fe];if(te===void 0){if(fe==="instanceMatrix"&&D.instanceMatrix)te=D.instanceMatrix;if(fe==="instanceColor"&&D.instanceColor)te=D.instanceColor}if(te!==void 0){let oe=te.normalized,Se=te.itemSize,ee=t.get(te);if(ee===void 0)continue;let{buffer:ae,type:be,bytesPerElement:Ue}=ee,Fe=be===e.INT||be===e.UNSIGNED_INT||te.gpuType===Ga;if(te.isInterleavedBufferAttribute){let ve=te.data,je=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,We=te.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Oe=0;Oe<J.locationSize;Oe++)g(J.location+Oe,ve.meshPerAttribute);if(D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=ve.meshPerAttribute*ve.count}else for(let Oe=0;Oe<J.locationSize;Oe++)p(J.location+Oe);e.bindBuffer(e.ARRAY_BUFFER,ae);for(let Oe=0;Oe<J.locationSize;Oe++)E(J.location+Oe,Se/J.locationSize,be,oe,je*Ue,(We+Se/J.locationSize*Oe)*Ue,Fe)}else{if(te.isInstancedBufferAttribute){for(let ve=0;ve<J.locationSize;ve++)g(J.location+ve,te.meshPerAttribute);if(D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=te.meshPerAttribute*te.count}else for(let ve=0;ve<J.locationSize;ve++)p(J.location+ve);e.bindBuffer(e.ARRAY_BUFFER,ae);for(let ve=0;ve<J.locationSize;ve++)E(J.location+ve,Se/J.locationSize,be,oe,Se*Ue,Se/J.locationSize*ve*Ue,Fe)}}else if(H!==void 0){let oe=H[fe];if(oe!==void 0)switch(oe.length){case 2:e.vertexAttrib2fv(J.location,oe);break;case 3:e.vertexAttrib3fv(J.location,oe);break;case 4:e.vertexAttrib4fv(J.location,oe);break;default:e.vertexAttrib1fv(J.location,oe)}}}}T()}function w(){L();for(let D in i){let B=i[D];for(let Q in B){let C=B[Q];for(let K in C){let j=C[K];for(let H in j)u(j[H].object),delete j[H];delete C[K]}}delete i[D]}}function I(D){if(i[D.id]===void 0)return;let B=i[D.id];for(let Q in B){let C=B[Q];for(let K in C){let j=C[K];for(let H in j)u(j[H].object),delete j[H];delete C[K]}}delete i[D.id]}function m(D){for(let B in i){let Q=i[B];for(let C in Q){let K=Q[C];if(K[D.id]===void 0)continue;let j=K[D.id];for(let H in j)u(j[H].object),delete j[H];delete K[D.id]}}}function S(D){for(let B in i){let Q=i[B],C=D.isInstancedMesh===!0?D.id:0,K=Q[C];if(K===void 0)continue;for(let j in K){let H=K[j];for(let fe in H)u(H[fe].object),delete H[fe];delete K[j]}if(delete Q[C],Object.keys(Q).length===0)delete i[B]}}function L(){if(G(),a=!0,r===s)return;r=s,c(r.object)}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:G,dispose:w,releaseStatesOfGeometry:I,releaseStatesOfObject:S,releaseStatesOfProgram:m,initAttributes:M,enableAttribute:p,disableUnusedAttributes:T}}function om(e,t,n){let i;function s(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){if(u===0)return;e.drawArraysInstanced(i,l,c,u),n.update(c,i,u)}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lm(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let m=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){if(m!==En&&i.convert(m)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(m){let S=m===zt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(m!==an&&m!==Tn&&!S&&i.convert(m)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(m){if(m==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";m="mediump"}if(m==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);if(u!==c)ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let d=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.logarithmicDepthBuffer===!0&&d===!1;if(n.reversedDepthBuffer===!0&&d===!1)ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(n.logarithmicDepthBuffer===!0&&d===!0)ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),g=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),I=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:I}}function cm(e){let t=this,n=null,i=0,s=!1,r=!1,a=new cn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,f){let{clippingPlanes:x,clipIntersection:M,clipShadows:p}=d,g=e.get(d);if(!s||x===null||x.length===0||r&&!p)if(r)u(null);else c();else{let T=r?0:i,E=T*4,y=g.clippingState||null;l.value=y,y=u(x,h,E,f);for(let w=0;w!==E;++w)y[w]=n[w];g.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;t.numPlanes=i,t.numIntersection=0}function u(d,h,f,x){let M=d!==null?d.length:0,p=null;if(M!==0){if(p=l.value,x!==!0||p===null){let g=f+M*4,T=h.matrixWorldInverse;if(o.getNormalMatrix(T),p===null||p.length<g)p=new Float32Array(g);for(let E=0,y=f;E!==M;++E,y+=4)a.copy(d[E]).applyMatrix4(T,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}class ta extends It{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wi(5,5,5),s=new Et({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:bn});s.uniforms.tEquirect.value=t;let r=new ht(i,s),a=t.minFilter;if(t.minFilter===Bn)t.minFilter=$t;return new Us(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}var Th=256,hm=3,um=20,Yh=256,Zh=16,dm=3,fm=new F,pm=new Ge;class ea{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Us(1,10,null),this._boxMesh=new ht(new Wi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=0.1,i=100,s={}){let{size:r=256,position:a=fm}=s,o=this._renderer;this._setSize(r);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:u,autoClearColor:d,autoClearDepth:h,autoClearStencil:f}=o,x=e.background;if(o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,x===null)e.background=o.getClearColor(pm);let M=new Us(n,i,c);if(M.position.copy(a),M.update(o,e),o.autoClear=u,o.autoClearColor=d,o.autoClearDepth=h,o.autoClearStencil=f,e.background=x,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Th,hh(e))}_fromTexture(e,t){if(e.mapping===Ts||e.mapping===Gi)this._setSize(e.image.length===0?Th:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Eh(e,!1,!1),n=Math.log2(e)-hm;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;if(n===null||n.width!==t||e&&n.depthBuffer===!1){if(n!==null)n.dispose();this._sourceTarget=Eh(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let r=e.width>>t;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===Ts||e.mapping===Gi){if(this._cubemapMaterial===null)this._cubemapMaterial=Ah();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=wh();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=mm(),this._integrationMaterial=gm();let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Zh);for(let r=0;r<=n;r++){let a=ea.lodToRoughness(r,n);if(r>n-dm)s.roughness.value=a,this._renderCube(e,r,this._integrationMaterial);else{let o=a>0?Math.log2(t)+0.5*Math.log2(6/(Yh*Math.pow(a,4)))+0.5:0;i.roughness.value=a,i.lodBias.value=o,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=_m();let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function Eh(e,t,n){return new ta(e,{minFilter:Bn,generateMipmaps:t,type:zt,colorSpace:To,depthBuffer:n})}function zs(e,t,n){return new Et({name:e,uniforms:t,vertexShader:$e.cube_vert,fragmentShader:n,side:Bt,blending:bn,depthTest:!1,depthWrite:!1})}function mm(){return zs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yh}u

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
	`)}function gm(){return zs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zh}},`

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
	`)}function _m(){return zs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${um}
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
	`)}function wh(){return zs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ah(){return zs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xm(e){let t=new WeakMap,n=new WeakMap,i=null;function s(h,f=!1){if(h===null||h===void 0)return null;if(f)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Mr||f===br)if(t.has(h)){let x=t.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let M=new ta(x.height);return M.fromEquirectangularTexture(e,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,x=f===Mr||f===br,M=f===Ts||f===Gi;if(x||M){let p=n.get(h),g=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g){if(i===null)i=new ea(e);return p=x?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),p.texture}else if(p!==void 0)return p.texture;else{let T=h.image;if(x&&T&&T.height>0||M&&T&&l(T)){if(i===null)i=new ea(e);return p=x?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),h.addEventListener("dispose",u),p.texture}else return null}}}return h}function o(h,f){if(f===Mr)h.mapping=Ts;else if(f===br)h.mapping=Gi;return h}function l(h){let f=0,x=6;for(let M=0;M<x;M++)if(h[M]!==void 0)f++;return f===x}function c(h){let f=h.target;f.removeEventListener("dispose",c);let x=t.get(f);if(x!==void 0)t.delete(f),x.dispose()}function u(h){let f=h.target;f.removeEventListener("dispose",u);let x=n.get(f);if(x!==void 0)n.delete(f),x.dispose()}function d(){if(t=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function vm(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)as("WebGLRenderer: "+i+" extension not supported.");return s}}}function ym(e,t,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry((x)=>delete s[x]);function o(x){l(x.target)}function l(x){if(x.index!==null)t.remove(x.index);for(let p in x.attributes)t.remove(x.attributes[p]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let M=r.get(x);if(M)t.remove(M),r.delete(x);if(i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0)delete x._maxInstanceCount;n.memory.geometries--}function c(x,M){if(s[M.id]!==void 0)return M;return M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),n.memory.geometries++,M}function u(x){let M=x.attributes;for(let p in M)t.update(M[p],e.ARRAY_BUFFER)}function d(x){let M=x.index,p=x.attributes.position,g=0;if(p===void 0)return;let T=M!==null?M.array.length:p.array.length/3-1,y=new(p.count>=65535?Or:Fr)(Math.ceil(T/3)*6,1),w=y.array;if(M!==null){let m=M.array;g=M.version;for(let S=0,L=0;S<T;S+=3){let G=m[S+0],D=m[S+1],B=m[S+2];w[L++]=G,w[L++]=D,w[L++]=D,w[L++]=B,w[L++]=B,w[L++]=G}}else{g=p.version;for(let m=0,S=0;m<T;m+=3){let L=m+0,G=m+1,D=m+2;w[S++]=L,w[S++]=G,w[S++]=G,w[S++]=D,w[S++]=D,w[S++]=L}}y.version=g;let I=r.get(x);if(I)t.remove(I);r.set(x,y)}function h(x){let M=r.get(x);if(M){let p=x.index;if(p!==null){if(M.version<p.version)d(x)}}else d(x);return r.get(x)}function f(){for(let x in s){let M=s[x].deref();if(M!==void 0)l(M)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function Sm(e,t,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){e.drawElements(i,h,r,d*a),n.update(h,i,1)}function c(d,h,f){if(f===0)return;e.drawElementsInstanced(i,h,r,d*a,f),n.update(h,i,f)}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let M=0;for(let p=0;p<f;p++)M+=h[p];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Mm(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function bm(e,t,n){let i=new WeakMap,s=new St;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let L=function(){m.dispose(),i.delete(o),o.removeEventListener("dispose",L)};if(h!==void 0)h.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],E=0;if(f===!0)E=1;if(x===!0)E=2;if(M===!0)E=3;let y=o.attributes.position.count*E,w=1;if(y>t.maxTextureSize)w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize;let I=new Float32Array(y*w*4*d),m=new Nr(I,y,w,d);m.type=Tn,m.needsUpdate=!0;let S=E*4;for(let G=0;G<d;G++){let D=p[G],B=g[G],Q=T[G],C=y*w*4*G;for(let K=0;K<D.count;K++){let j=K*S;if(f===!0)s.fromBufferAttribute(D,K),I[C+j+0]=s.x,I[C+j+1]=s.y,I[C+j+2]=s.z,I[C+j+3]=0;if(x===!0)s.fromBufferAttribute(B,K),I[C+j+4]=s.x,I[C+j+5]=s.y,I[C+j+6]=s.z,I[C+j+7]=0;if(M===!0)s.fromBufferAttribute(Q,K),I[C+j+8]=s.x,I[C+j+9]=s.y,I[C+j+10]=s.z,I[C+j+11]=Q.itemSize===4?s.w:1}}h={count:d,texture:m,size:new ue(y,w)},i.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function Tm(e,t,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u)t.update(h),r.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==u){if(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,e.ARRAY_BUFFER);r.set(c,u)}}if(c.isSkinnedMesh){let f=c.skeleton;if(r.get(f)!==u)f.update(),r.set(f,u)}return h}function o(){r=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null)n.remove(u.instanceColor)}return{update:a,dispose:o}}var Em={[_s]:"LINEAR_TONE_MAPPING",[xs]:"REINHARD_TONE_MAPPING",[vs]:"CINEON_TONE_MAPPING",[ys]:"ACES_FILMIC_TONE_MAPPING",[Ms]:"AGX_TONE_MAPPING",[bs]:"NEUTRAL_TONE_MAPPING",[Ss]:"CUSTOM_TONE_MAPPING"};function wm(e,t,n,i,s,r){let a=new It(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Mt;u.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new mt([0,2,0,0,2,0],2));let d=new Ns({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ht(u,d),f=new Ds(-1,1,1,-1,0,1),x=null,M=null,p=!1,g,T=null,E=[],y=!1;this.setSize=function(w,I){if(a.setSize(w,I),o!==null)o.setSize(w,I);if(l!==null)l.setSize(w,I);for(let m=0;m<E.length;m++){let S=E[m];if(S.setSize)S.setSize(w,I)}},this.setEffects=function(w){E=w,y=E.length>0&&E[0].isRenderPass===!0;let{width:I,height:m}=a;if(E.length>0&&o===null)o=new It(I,m,{type:zt,depthBuffer:!1,stencilBuffer:!1}),l=new It(I,m,{type:zt,depthBuffer:!1,stencilBuffer:!1});let S=s===!0&&E.some((L)=>L.needsDepthTexture===!0);if(S!==(a.depthTexture!==null)){if(S===!0&&c===null){if(c=new Wn(I,m),r===!0)c.format=Gn,c.type=ei}a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S}for(let L=0;L<E.length;L++){let G=E[L];if(G.setSize)G.setSize(I,m);if(S&&G.needsDepthTexture===!0&&G.setDepthTexture)G.setDepthTexture(c)}},this.begin=function(w,I){if(p)return!1;if(w.toneMapping===un&&E.length===0)return!1;if(T=I,I!==null){let{width:m,height:S}=I;if(a.width!==m||a.height!==S)this.setSize(m,S)}if(y===!1)w.setRenderTarget(a);return g=w.toneMapping,w.toneMapping=un,!0},this.hasRenderPass=function(){return y},this.end=function(w,I){w.toneMapping=g,p=!0;let m=a,S=o;for(let L=0;L<E.length;L++){let G=E[L];if(G.enabled===!1)continue;if(G.render(w,S,m,I),G.needsSwap!==!1)m=S,S=S===o?l:o}if(x!==w.outputColorSpace||M!==w.toneMapping){if(x=w.outputColorSpace,M=w.toneMapping,d.defines={},Qe.getTransfer(x)===ct)d.defines.SRGB_TRANSFER="";let L=Em[M];if(L)d.defines[L]="";d.needsUpdate=!0}d.uniforms.tDiffuse.value=m.texture,w.setRenderTarget(T),w.render(h,f),T=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();u.dispose(),d.dispose()}}var Jh=new Lt,$h=new Wn(1,1),Kh=new kr(1),Qh=new Nr,jh=new No,eu=new Gr,Rh=[],Ch=[],Ih=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function qi(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=Rh[s];if(r===void 0)r=new Float32Array(s),Rh[s]=r;if(t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function wt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function At(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function na(e,t){let n=Ch[t];if(n===void 0)n=new Int32Array(t),Ch[t]=n;for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Am(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function Rm(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(wt(n,t))return;e.uniform2fv(this.addr,t),At(n,t)}}function Cm(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else if(t.r!==void 0){if(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b}else{if(wt(n,t))return;e.uniform3fv(this.addr,t),At(n,t)}}function Im(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(wt(n,t))return;e.uniform4fv(this.addr,t),At(n,t)}}function Pm(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(wt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),At(n,t)}else{if(wt(n,i))return;Lh.set(i),e.uniformMatrix2fv(this.addr,!1,Lh),At(n,i)}}function Lm(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(wt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),At(n,t)}else{if(wt(n,i))return;Ph.set(i),e.uniformMatrix3fv(this.addr,!1,Ph),At(n,i)}}function Nm(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(wt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),At(n,t)}else{if(wt(n,i))return;Ih.set(i),e.uniformMatrix4fv(this.addr,!1,Ih),At(n,i)}}function Dm(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function Um(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(wt(n,t))return;e.uniform2iv(this.addr,t),At(n,t)}}function Fm(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(wt(n,t))return;e.uniform3iv(this.addr,t),At(n,t)}}function Om(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(wt(n,t))return;e.uniform4iv(this.addr,t),At(n,t)}}function Bm(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function zm(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(wt(n,t))return;e.uniform2uiv(this.addr,t),At(n,t)}}function Gm(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(wt(n,t))return;e.uniform3uiv(this.addr,t),At(n,t)}}function Hm(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(wt(n,t))return;e.uniform4uiv(this.addr,t),At(n,t)}}function ia(e){if(e.version===0)e.compareFunction=Ro,e.needsUpdate=!0;return e}function km(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===e.SAMPLER_2D_SHADOW)r=ia($h);else r=Jh;n.setTexture2D(t||r,s)}function Wm(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(t||jh,s)}function Vm(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===e.SAMPLER_CUBE_SHADOW)r=ia(Kh);else r=eu;n.setTextureCube(t||r,s)}function Xm(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(t||Qh,s)}function qm(e){switch(e){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Im;case 35674:return Pm;case 35675:return Lm;case 35676:return Nm;case 5124:case 35670:return Dm;case 35667:case 35671:return Um;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return Gm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(e,t){e.uniform1fv(this.addr,t)}function Zm(e,t){let n=qi(t,this.size,2);e.uniform2fv(this.addr,n)}function Jm(e,t){let n=qi(t,this.size,3);e.uniform3fv(this.addr,n)}function $m(e,t){let n=qi(t,this.size,4);e.uniform4fv(this.addr,n)}function Km(e,t){let n=qi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Qm(e,t){let n=qi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function jm(e,t){let n=qi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function eg(e,t){e.uniform1iv(this.addr,t)}function tg(e,t){e.uniform2iv(this.addr,t)}function ng(e,t){e.uniform3iv(this.addr,t)}function ig(e,t){e.uniform4iv(this.addr,t)}function sg(e,t){e.uniform1uiv(this.addr,t)}function rg(e,t){e.uniform2uiv(this.addr,t)}function ag(e,t){e.uniform3uiv(this.addr,t)}function og(e,t){e.uniform4uiv(this.addr,t)}function lg(e,t,n){let i=this.cache,s=t.length,r=na(n,s);if(!wt(i,r))e.uniform1iv(this.addr,r),At(i,r);let a;if(this.type===e.SAMPLER_2D_SHADOW)a=ia($h);else a=Jh;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||a,r[o])}function cg(e,t,n){let i=this.cache,s=t.length,r=na(n,s);if(!wt(i,r))e.uniform1iv(this.addr,r),At(i,r);for(let a=0;a!==s;++a)n.setTexture3D(t[a]||jh,r[a])}function hg(e,t,n){let i=this.cache,s=t.length,r=na(n,s);if(!wt(i,r))e.uniform1iv(this.addr,r),At(i,r);let a;if(this.type===e.SAMPLER_CUBE_SHADOW)a=ia(Kh);else a=eu;for(let o=0;o!==s;++o)n.setTextureCube(t[o]||a,r[o])}function ug(e,t,n){let i=this.cache,s=t.length,r=na(n,s);if(!wt(i,r))e.uniform1iv(this.addr,r),At(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||Qh,r[a])}function dg(e){switch(e){case 5126:return Ym;case 35664:return Zm;case 35665:return Jm;case 35666:return $m;case 35674:return Km;case 35675:return Qm;case 35676:return jm;case 5124:case 35670:return eg;case 35667:case 35671:return tg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}class tu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qm(t.type)}}class nu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dg(t.type)}}class iu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(e,t[a.id],n)}}}var ol=/(\w+)(\])?(\[|\.)?/g;function Nh(e,t){e.seq.push(t),e.map[t.id]=t}function fg(e,t,n){let i=e.name,s=i.length;ol.lastIndex=0;while(!0){let r=ol.exec(i),a=ol.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Nh(n,c===void 0?new tu(o,e,t):new nu(o,e,t));break}else{let d=n.map[o];if(d===void 0)d=new iu(o),Nh(n,d);n=d}}}class Bs{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);fg(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(e,t,n,i){let s=this.map[t];if(s!==void 0)s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];if(i!==void 0)this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let a=t[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(e,o.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];if(r.id in t)n.push(r)}return n}}function Dh(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var pg=37297,mg=0;function gg(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Uh=new Xe;function _g(e){Qe._getMatrix(Uh,Qe.workingColorSpace,e);let t=`mat3( ${Uh.elements.map((n)=>n.toFixed(4))} )`;switch(Qe.getTransfer(e)){case Eo:return[t,"LinearTransferOETF"];case ct:return[t,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Fh(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+gg(e.getShaderSource(t),o)}else return r}function xg(e,t){let n=_g(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var vg={[_s]:"Linear",[xs]:"Reinhard",[vs]:"Cineon",[ys]:"ACESFilmic",[Ms]:"AgX",[bs]:"Neutral",[Ss]:"Custom"};function yg(e,t){let n=vg[t];if(n===void 0)return ze("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var jr=new F;function Sg(){Qe.getLuminanceCoefficients(jr);let e=jr.x.toFixed(4),t=jr.y.toFixed(4),n=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Mg(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function bg(e){let t=[];for(let n in e){let i=e[n];if(i===!1)continue;t.push("#define "+n+" "+i)}return t.join(`
`)}function Tg(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;if(r.type===e.FLOAT_MAT2)o=2;if(r.type===e.FLOAT_MAT3)o=3;if(r.type===e.FLOAT_MAT4)o=4;n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Os(e){return e!==""}function Oh(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Bh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(e){return e.replace(Eg,wg)}function wg(e,t){let n=$e[t];if(n===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return cl(n)}var Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(e){return e.replace(Ag,Rg)}function Rg(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gh(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`;return t}var Cg={[ms]:"SHADOWMAP_TYPE_PCF",[Oi]:"SHADOWMAP_TYPE_VSM"};function Ig(e){return Cg[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Pg={[Gi]:"ENVMAP_MODE_REFRACTION"};function Lg(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Pg[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ng={[Gc]:"ENVMAP_BLENDING_MULTIPLY",[Hc]:"ENVMAP_BLENDING_MIX",[kc]:"ENVMAP_BLENDING_ADD"};function Dg(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return Ng[e.combine]||"ENVMAP_BLENDING_NONE"}function Ug(e,t,n,i){let s=e.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=Ig(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Lg(n),d=Dg(n),h=Mg(n),f=bg(r),x=s.createProgram(),M,p,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Os).join(`
`),M.length>0)M+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Os).join(`
`),p.length>0)p+=`
`}else M=[Gh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[Gh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==un?"#define TONE_MAPPING":"",n.toneMapping!==un?$e.tonemapping_pars_fragment:"",n.toneMapping!==un?yg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,xg("linearToOutputTexel",n.outputColorSpace),Sg(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Os).join(`
`);if(a=cl(a),a=Oh(a,n),a=Bh(a,n),o=cl(o),o=Oh(o,n),o=Bh(o,n),a=zh(a),o=zh(o),n.isRawShaderMaterial!==!0)g=`#version 300 es
`,M=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",n.glslVersion===Co?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let T=g+M+a,E=g+p+o,y=Dh(s,s.VERTEX_SHADER,T),w=Dh(s,s.FRAGMENT_SHADER,E);if(s.attachShader(x,y),s.attachShader(x,w),n.index0AttributeName!==void 0)s.bindAttribLocation(x,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(x,0,"position");s.linkProgram(x);function I(G){if(e.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(y)||"",Q=s.getShaderInfoLog(w)||"",C=D.trim(),K=B.trim(),j=Q.trim(),H=!0,fe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(s,x,y,w);else{let J=Fh(s,y,"vertex"),te=Fh(s,w,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+C+`
`+J+`
`+te)}else if(C!=="")ze("WebGLProgram: Program Info Log:",C);else if(K===""||j==="")fe=!1;if(fe)G.diagnostics={runnable:H,programLog:C,vertexShader:{log:K,prefix:M},fragmentShader:{log:j,prefix:p}}}s.deleteShader(y),s.deleteShader(w),m=new Bs(s,x),S=Tg(s,x)}let m;this.getUniforms=function(){if(m===void 0)I(this);return m};let S;this.getAttributes=function(){if(S===void 0)I(this);return S};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(L===!1)L=s.getProgramParameter(x,pg);return L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=w,this}var Fg=0;class su{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);if(i.has(t)===!1)i.add(t),t.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let n of t)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);if(n===void 0)n=new Set,t.set(e,n);return n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);if(n===void 0)n=new ru(e),t.set(e,n);return n}}class ru{constructor(e){this.id=Fg++,this.code=e,this.usedTimes=0}}function Og(e){return e===ti||e===Ir||e===Pr}function Bg(e,t,n,i,s,r){let a=new Dr,o=new su,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){if(l.add(m),m===0)return"uv";return`uv${m}`}function x(m,S,L,G,D,B){let Q=G.fog,C=D.geometry,K=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?G.environment:null,j=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,H=t.get(m.envMap||K,j),fe=h[m.type],J=i.precision;if(m.precision!==null){if(J=i.getMaxPrecision(m.precision),J!==m.precision)ze("WebGLProgram.getParameters:",m.precision,"not supported, using",J,"instead.")}let te=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,oe=te!==void 0?te.length:0,Se=0;if(C.morphAttributes.position!==void 0)Se=1;if(C.morphAttributes.normal!==void 0)Se=2;if(C.morphAttributes.color!==void 0)Se=3;let ee,ae,be,Ue;if(fe){let xe=pn[fe];ee=xe.vertexShader,ae=xe.fragmentShader}else{ee=m.vertexShader,ae=m.fragmentShader;let xe=o.getVertexShaderStage(m),at=o.getFragmentShaderStage(m);o.update(m,xe,at),be=xe.id,Ue=at.id}let Fe=e.getRenderTarget(),ve=e.state.buffers.depth.getReversed(),je=D.isInstancedMesh===!0,We=D.isBatchedMesh===!0,Oe=!!m.map,Ke=!!m.matcap,ie=!!H,de=ie&&H.isPMREMTexture===!0,pe=!!m.aoMap,Ee=!!m.lightMap,Te=!!m.bumpMap&&m.wireframe===!1,Le=!!m.normalMap,Ne=!!m.displacementMap,Je=!!m.emissiveMap,Ze=!!m.metalnessMap,tt=!!m.roughnessMap,N=m.anisotropy>0,vt=m.clearcoat>0,Ve=m.diffuseRoughness>0,pt=m.dispersion>0,le=m.retroreflectivity>0,st=m.iridescence>0,Be=m.sheen>0,ke=m.transmission>0,yt=N&&!!m.anisotropyMap,b=vt&&!!m.clearcoatMap,_=vt&&!!m.clearcoatNormalMap,O=vt&&!!m.clearcoatRoughnessMap,re=Ve&&!!m.diffuseRoughnessMap,A=st&&!!m.iridescenceMap,k=st&&!!m.iridescenceThicknessMap,X=Be&&!!m.sheenColorMap,P=Be&&!!m.sheenRoughnessMap,Z=!!m.specularMap,he=!!m.specularColorMap,R=!!m.specularIntensityMap,Y=ke&&!!m.transmissionMap,V=ke&&!!m.thicknessMap,ne=!!m.gradientMap,se=!!m.alphaMap,ce=m.alphaTest>0,we=!!m.alphaHash,Ae=!!m.extensions,_e=un;if(m.toneMapped){if(Fe===null||Fe.isXRRenderTarget===!0)_e=e.toneMapping}let De=de?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ye={shaderID:fe,shaderType:m.type,shaderName:m.name,vertexShader:ee,fragmentShader:ae,defines:m.defines,customVertexShaderID:be,customFragmentShaderID:Ue,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:J,batching:We,batchingColor:We&&D._colorsTexture!==null,instancing:je,instancingColor:je&&D.instanceColor!==null,instancingMorph:je&&D.morphTexture!==null,outputColorSpace:Fe===null?e.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Oe,matcap:Ke,envMap:ie,envMapMode:ie&&H.mapping,envMapPMREM:de,envMapMaxLod:de?De.length-1:null,envMapSize:de?De[0].width:null,aoMap:pe,lightMap:Ee,bumpMap:Te,normalMap:Le,displacementMap:Ne,emissiveMap:Je,normalMapObjectSpace:Le&&m.normalMapType===jc,normalMapTangentSpace:Le&&m.normalMapType===bo,packedNormalMap:Le&&m.normalMapType===bo&&Og(m.normalMap.format),metalnessMap:Ze,roughnessMap:tt,anisotropy:N,anisotropyMap:yt,clearcoat:vt,clearcoatMap:b,clearcoatNormalMap:_,clearcoatRoughnessMap:O,diffuseRoughness:Ve,diffuseRoughnessMap:re,dispersion:pt,retroreflection:le,iridescence:st,iridescenceMap:A,iridescenceThicknessMap:k,sheen:Be,sheenColorMap:X,sheenRoughnessMap:P,specularMap:Z,specularColorMap:he,specularIntensityMap:R,transmission:ke,transmissionMap:Y,thicknessMap:V,gradientMap:ne,opaque:m.transparent===!1&&m.blending===gs&&m.alphaToCoverage===!1,alphaMap:se,alphaTest:ce,alphaHash:we,combine:m.combine,mapUv:Oe&&f(m.map.channel),aoMapUv:pe&&f(m.aoMap.channel),lightMapUv:Ee&&f(m.lightMap.channel),bumpMapUv:Te&&f(m.bumpMap.channel),normalMapUv:Le&&f(m.normalMap.channel),displacementMapUv:Ne&&f(m.displacementMap.channel),emissiveMapUv:Je&&f(m.emissiveMap.channel),metalnessMapUv:Ze&&f(m.metalnessMap.channel),roughnessMapUv:tt&&f(m.roughnessMap.channel),anisotropyMapUv:yt&&f(m.anisotropyMap.channel),clearcoatMapUv:b&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:_&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&f(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&f(m.diffuseRoughnessMap.channel),iridescenceMapUv:A&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:k&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:X&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:P&&f(m.sheenRoughnessMap.channel),specularMapUv:Z&&f(m.specularMap.channel),specularColorMapUv:he&&f(m.specularColorMap.channel),specularIntensityMapUv:R&&f(m.specularIntensityMap.channel),transmissionMapUv:Y&&f(m.transmissionMap.channel),thicknessMapUv:V&&f(m.thicknessMap.channel),alphaMapUv:se&&f(m.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Le||N),vertexNormals:!!C.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!C.attributes.uv&&(Oe||se),fog:!!Q,useFog:m.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||C.attributes.normal===void 0&&Le===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:B.filter((xe)=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:_e,decodeVideoTexture:Oe&&m.map.isVideoTexture===!0&&Qe.getTransfer(m.map.colorSpace)===ct,decodeVideoTextureEmissive:Je&&m.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(m.emissiveMap.colorSpace)===ct,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Jt,flipSided:m.side===Bt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Ae&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&m.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function M(m){let S=[];if(m.shaderID)S.push(m.shaderID);else S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID);if(m.defines!==void 0)for(let L in m.defines)S.push(L),S.push(m.defines[L]);if(m.isRawShaderMaterial===!1)p(S,m),g(S,m),S.push(e.outputColorSpace);return S.push(m.customProgramCacheKey),S.join()}function p(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapPMREM),m.push(S.envMapMaxLod),m.push(S.envMapSize),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.diffuseRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.numLightProbeGrids),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function g(m,S){if(a.disableAll(),S.instancing)a.enable(0);if(S.instancingColor)a.enable(1);if(S.instancingMorph)a.enable(2);if(S.matcap)a.enable(3);if(S.envMap)a.enable(4);if(S.normalMapObjectSpace)a.enable(5);if(S.normalMapTangentSpace)a.enable(6);if(S.clearcoat)a.enable(7);if(S.iridescence)a.enable(8);if(S.alphaTest)a.enable(9);if(S.vertexColors)a.enable(10);if(S.vertexAlphas)a.enable(11);if(S.vertexUv1s)a.enable(12);if(S.vertexUv2s)a.enable(13);if(S.vertexUv3s)a.enable(14);if(S.vertexTangents)a.enable(15);if(S.anisotropy)a.enable(16);if(S.alphaHash)a.enable(17);if(S.batching)a.enable(18);if(S.dispersion)a.enable(19);if(S.retroreflection)a.enable(24);if(S.diffuseRoughness)a.enable(25);if(S.batchingColor)a.enable(20);if(S.gradientMap)a.enable(21);if(S.packedNormalMap)a.enable(22);if(S.vertexNormals)a.enable(23);if(m.push(a.mask),a.disableAll(),S.fog)a.enable(0);if(S.useFog)a.enable(1);if(S.flatShading)a.enable(2);if(S.logarithmicDepthBuffer)a.enable(3);if(S.reversedDepthBuffer)a.enable(4);if(S.skinning)a.enable(5);if(S.morphTargets)a.enable(6);if(S.morphNormals)a.enable(7);if(S.morphColors)a.enable(8);if(S.premultipliedAlpha)a.enable(9);if(S.shadowMapEnabled)a.enable(10);if(S.doubleSided)a.enable(11);if(S.flipSided)a.enable(12);if(S.useDepthPacking)a.enable(13);if(S.dithering)a.enable(14);if(S.transmission)a.enable(15);if(S.sheen)a.enable(16);if(S.opaque)a.enable(17);if(S.pointsUvs)a.enable(18);if(S.decodeVideoTexture)a.enable(19);if(S.decodeVideoTextureEmissive)a.enable(20);if(S.alphaToCoverage)a.enable(21);if(S.numLightProbeGrids>0)a.enable(22);if(S.hasPositionAttribute)a.enable(23);m.push(a.mask)}function T(m){let S=h[m.type],L;if(S){let G=pn[S];L=Cn.clone(G.uniforms)}else L=m.uniforms;return L}function E(m,S){let L=u.get(S);if(L!==void 0)++L.usedTimes;else L=new Ug(e,S,m,s),c.push(L),u.set(S,L);return L}function y(m){if(--m.usedTimes===0){let S=c.indexOf(m);c[S]=c[c.length-1],c.pop(),u.delete(m.cacheKey),m.destroy()}}function w(m){o.remove(m)}function I(){o.dispose()}return{getParameters:x,getProgramCacheKey:M,getUniforms:T,acquireProgram:E,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:I}}function zg(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);if(o===void 0)o={},e.set(a,o);return o}function i(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function Gg(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function Hh(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function kh(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(h){let f=0;if(h.isInstancedMesh)f+=2;if(h.isSkinnedMesh)f+=1;return f}function o(h,f,x,M,p,g){let T=e[t];if(T===void 0)T={id:h.id,object:h,geometry:f,material:x,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:g},e[t]=T;else T.id=h.id,T.object=h,T.geometry=f,T.material=x,T.materialVariant=a(h),T.groupOrder=M,T.renderOrder=h.renderOrder,T.z=p,T.group=g;return t++,T}function l(h,f,x,M,p,g,T){if(T.reversedDepth===!0)p=-p;let E=o(h,f,x,M,p,g);if(x.transmission>0)i.push(E);else if(x.transparent===!0)s.push(E);else n.push(E)}function c(h,f,x,M,p,g){let T=o(h,f,x,M,p,g);if(x.transmission>0)i.unshift(T);else if(x.transparent===!0)s.unshift(T);else n.unshift(T)}function u(h,f){if(n.length>1)n.sort(h||Gg);if(i.length>1)i.sort(f||Hh);if(s.length>1)s.sort(f||Hh)}function d(){for(let h=t,f=e.length;h<f;h++){let x=e[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Hg(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;if(r===void 0)a=new kh,e.set(i,[a]);else if(s>=r.length)a=new kh,r.push(a);else a=r[s];return a}function n(){e=new WeakMap}return{get:t,dispose:n}}function kg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new Ge};break;case"SpotLight":n={position:new F,direction:new F,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function Wg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=n,n}}}var Vg=0;function Xg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function qg(e){let t=new kg,n=Wg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new ft,a=new ft;function o(c){let u=0,d=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,x=0,M=0,p=0,g=0,T=0,E=0,y=0,w=0,I=0,m=0,S=0,L=0,G=0;c.sort(Xg);for(let B=0,Q=c.length;B<Q;B++){let C=c[B],{color:K,intensity:j,distance:H}=C,fe=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===ti)fe=C.shadow.map.texture;else fe=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)u+=K.r*j,d+=K.g*j,h+=K.b*j;else if(C.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(C.sh.coefficients[J],j);G++}else if(C.isSunLight){let J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let te=C.shadow,oe=n.get(C);oe.shadowIntensity=te.intensity,oe.shadowBias=te.bias,oe.shadowNormalBias=te.normalBias,oe.shadowRadius=te.radius,oe.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[x]=oe,i.sunShadowMap[x]=fe;let Se=te.getViewportCount();for(let ee=0;ee<Se;ee++)i.sunShadowMatrix[M+ee]=te.getMatrix(ee),i.sunShadowCascade[M+ee]=te._cascadeData[ee];M+=Se,x++}i.sun[f]=J,f++}else if(C.isDirectionalLight){let J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let te=C.shadow,oe=n.get(C);oe.shadowIntensity=te.intensity,oe.shadowBias=te.bias,oe.shadowNormalBias=te.normalBias,oe.shadowRadius=te.radius,oe.shadowMapSize=te.mapSize,i.directionalShadow[p]=oe,i.directionalShadowMap[p]=fe,i.directionalShadowMatrix[p]=C.shadow.matrix,w++}i.directional[p]=J,p++}else if(C.isSpotLight){let J=t.get(C);J.position.setFromMatrixPosition(C.matrixWorld),J.color.copy(K).multiplyScalar(j),J.distance=H,J.coneCos=Math.cos(C.angle),J.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),J.decay=C.decay,i.spot[T]=J;let te=C.shadow;if(C.map){if(i.spotLightMap[S]=C.map,S++,te.updateMatrices(C),C.castShadow)L++}if(i.spotLightMatrix[T]=te.matrix,C.castShadow){let oe=n.get(C);oe.shadowIntensity=te.intensity,oe.shadowBias=te.bias,oe.shadowNormalBias=te.normalBias,oe.shadowRadius=te.radius,oe.shadowMapSize=te.mapSize,i.spotShadow[T]=oe,i.spotShadowMap[T]=fe,m++}T++}else if(C.isRectAreaLight){let J=t.get(C);J.color.copy(K).multiplyScalar(j),J.halfWidth.set(C.width*0.5,0,0),J.halfHeight.set(0,C.height*0.5,0),i.rectArea[E]=J,E++}else if(C.isPointLight){let J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),J.distance=C.distance,J.decay=C.decay,C.castShadow){let te=C.shadow,oe=n.get(C);oe.shadowIntensity=te.intensity,oe.shadowBias=te.bias,oe.shadowNormalBias=te.normalBias,oe.shadowRadius=te.radius,oe.shadowMapSize=te.mapSize,oe.shadowCameraNear=te.camera.near,oe.shadowCameraFar=te.camera.far,i.pointShadow[g]=oe,i.pointShadowMap[g]=fe,i.pointShadowMatrix[g]=C.shadow.matrix,I++}i.point[g]=J,g++}else if(C.isHemisphereLight){let J=t.get(C);J.skyColor.copy(C.color).multiplyScalar(j),J.groundColor.copy(C.groundColor).multiplyScalar(j),i.hemi[y]=J,y++}}if(E>0)if(e.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2;else i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;if(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==g||D.spotLength!==T||D.rectAreaLength!==E||D.hemiLength!==y||D.numSunShadows!==x||D.numDirectionalShadows!==w||D.numPointShadows!==I||D.numSpotShadows!==m||D.numSpotMaps!==S||D.numLightProbes!==G)i.sun.length=f,i.directional.length=p,i.spot.length=T,i.rectArea.length=E,i.point.length=g,i.hemi.length=y,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=I,i.pointShadowMap.length=I,i.pointShadowMatrix.length=I,i.spotShadow.length=m,i.spotShadowMap.length=m,i.spotLightMatrix.length=m+S-L,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=G,D.sunLength=f,D.directionalLength=p,D.pointLength=g,D.spotLength=T,D.rectAreaLength=E,D.hemiLength=y,D.numSunShadows=x,D.numDirectionalShadows=w,D.numPointShadows=I,D.numSpotShadows=m,D.numSpotMaps=S,D.numLightProbes=G,i.version=Vg++}function l(c,u){let d=0,h=0,f=0,x=0,M=0,p=0,g=u.matrixWorldInverse;for(let T=0,E=c.length;T<E;T++){let y=c[T];if(y.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),h++}else if(y.isSpotLight){let w=i.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),x++}else if(y.isRectAreaLight){let w=i.rectArea[M];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),w.halfWidth.set(y.width*0.5,0,0),w.halfHeight.set(0,y.height*0.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let w=i.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:i}}function Wh(e){let t=new qg(e),n=[],i=[],s=[];function r(d){u.camera=d,n.length=0,i.length=0,s.length=0}function a(d){if(d.isLightProbeGrid)s.push(d);else n.push(d)}function o(d){i.push(d)}function l(){t.setup(n),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){t.setupView(n,d)}let u={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Yg(e){let t=new WeakMap;function n(s,r=0){let a=t.get(s),o;if(a===void 0)o=new Wh(e),t.set(s,[o]);else if(r>=a.length)o=new Wh(e),a.push(o);else o=a[r];return o}function i(){t=new WeakMap}return{get:n,dispose:i}}var Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`,$g=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Kg=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Vh=new ft,Fs=new F,ll=new F;function Qg(e,t,n){let i=new Ui,s=new ue,r=new ue,a=new St,o=new Xo,l=new qo,c={},u=n.maxTextureSize,d={[Bi]:Bt,[Bt]:Bi,[Jt]:Jt},h=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Zg,fragmentShader:Jg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let x=new Mt;x.setAttribute("position",new Vt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new ht(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let g=this.type;this.render=function(I,m,S){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(I.length===0)return;if(this.type===dc)ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ms;let L=e.getRenderTarget(),G=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),B=e.state;if(B.setBlending(bn),B.buffers.depth.getReversed()===!0)B.buffers.color.setClear(0,0,0,0);else B.buffers.color.setClear(1,1,1,1);B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Q=g!==this.type;if(Q)m.traverse(function(C){if(C.material)if(Array.isArray(C.material))C.material.forEach((K)=>K.needsUpdate=!0);else C.material.needsUpdate=!0});for(let C=0,K=I.length;C<K;C++){let j=I[C],H=j.shadow;if(H===void 0){ze("WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let fe=H.getFrameExtents();if(s.multiply(fe),r.copy(H.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/fe.x),s.x=r.x*fe.x,H.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/fe.y),s.y=r.y*fe.y,H.mapSize.y=r.y}let J=e.state.buffers.depth.getReversed();if(H.camera._reversedDepth=J,H.map===null||Q===!0){if(H.map!==null){if(H.map.depthTexture!==null)H.map.depthTexture.dispose(),H.map.depthTexture=null;H.map.dispose()}if(this.type===Oi){if(j.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new It(s.x,s.y,{format:ti,type:zt,minFilter:$t,magFilter:$t,generateMipmaps:!1}),H.map.texture.name=j.name+".shadowMap",H.map.depthTexture=new Wn(s.x,s.y,Tn),H.map.depthTexture.name=j.name+".shadowMapDepth",H.map.depthTexture.format=Hi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On}else{if(j.isPointLight)H.map=new ta(s.x),H.map.depthTexture=new kr(s.x,zn);else H.map=new It(s.x,s.y),H.map.depthTexture=new Wn(s.x,s.y,zn);if(H.map.depthTexture.name=j.name+".shadowMap",H.map.depthTexture.format=Hi,this.type===ms)H.map.depthTexture.compareFunction=J?Ao:wo,H.map.depthTexture.minFilter=$t,H.map.depthTexture.magFilter=$t;else H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On}H.camera.updateProjectionMatrix()}if(H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y))H.map.setSize(s.x,s.y);let te=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();if(j.isPointLight!==!0)H.updateMatrices(j,S);let oe=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let Se=0;Se<te;Se++){let ee=H.getCamera(Se);if(j.isPointLight){let{camera:ae,matrix:be}=H,Ue=j.distance||ae.far;if(Ue!==ae.far)ae.far=Ue,ae.updateProjectionMatrix();Fs.setFromMatrixPosition(j.matrixWorld),ae.position.copy(Fs),ll.copy(ae.position),ll.add($g[Se]),ae.up.copy(Kg[Se]),ae.lookAt(ll),ae.updateMatrixWorld(),be.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Vh.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Vh,ae.coordinateSystem,ae.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)e.setRenderTarget(H.map,Se),e.clear();else{if(Se===0)e.setRenderTarget(H.map),e.clear();let ae=H.getViewport(Se);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),B.viewport(a)}i=H.getFrustum(Se),y(m,S,ee,j,oe,this.type)}if(H.isPointLightShadow!==!0&&this.type===Oi)T(H,S);H.needsUpdate=!1}g=this.type,p.needsUpdate=!1,e.setRenderTarget(L,G,D)};function T(I,m){let S=t.update(M);if(h.defines.VSM_SAMPLES!==I.blurSamples)h.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new It(s.x,s.y,{format:ti,type:zt});else if(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)I.mapPass.setSize(I.map.width,I.map.height);h.uniforms.shadow_pass.value=I.map.depthTexture,h.uniforms.resolution.value.set(I.map.width,I.map.height),h.uniforms.radius.value=I.radius,e.setRenderTarget(I.mapPass),e.clear(),e.renderBufferDirect(m,null,S,h,M,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value.set(I.map.width,I.map.height),f.uniforms.radius.value=I.radius,e.setRenderTarget(I.map),e.clear(),e.renderBufferDirect(m,null,S,f,M,null)}function E(I,m,S,L){let G=null,D=S.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)G=D;else if(G=S.isPointLight===!0?l:o,e.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let B=G.uuid,Q=m.uuid,C=c[B];if(C===void 0)C={},c[B]=C;let K=C[Q];if(K===void 0)K=G.clone(),C[Q]=K,m.addEventListener("dispose",w);G=K}if(G.visible=m.visible,G.wireframe=m.wireframe,L===Oi)G.side=m.shadowSide!==null?m.shadowSide:m.side;else G.side=m.shadowSide!==null?m.shadowSide:d[m.side];if(G.alphaMap=m.alphaMap,G.alphaTest=m.alphaToCoverage===!0?0.5:m.alphaTest,G.map=m.map,G.clipShadows=m.clipShadows,G.clippingPlanes=m.clippingPlanes,G.clipIntersection=m.clipIntersection,G.displacementMap=m.displacementMap,G.displacementScale=m.displacementScale,G.displacementBias=m.displacementBias,G.wireframeLinewidth=m.wireframeLinewidth,G.linewidth=m.linewidth,S.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let B=e.properties.get(G);B.light=S}return G}function y(I,m,S,L,G,D){if(I.visible===!1)return;if(I.layers.test(G)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&D===Oi)&&(!I.frustumCulled||I.intersectsFrustum(i))){I.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,I.matrixWorld);let C=t.update(I),K=I.material;if(Array.isArray(K)){let j=C.groups;for(let H=0,fe=j.length;H<fe;H++){let J=j[H],te=K[J.materialIndex];if(te&&te.visible){let oe=E(I,te,L,D);I.onBeforeShadow(e,I,m,S,C,oe,J),e.renderBufferDirect(S,null,C,oe,I,J),I.onAfterShadow(e,I,m,S,C,oe,J)}}}else if(K.visible){let j=E(I,K,L,D);I.onBeforeShadow(e,I,m,S,C,j,null),e.renderBufferDirect(S,null,C,j,I,null),I.onAfterShadow(e,I,m,S,C,j,null)}}}let Q=I.children;for(let C=0,K=Q.length;C<K;C++)y(Q[C],m,S,L,G,D)}function w(I){I.target.removeEventListener("dispose",w);for(let S in c){let L=c[S],G=I.target.uuid;if(G in L)L[G].dispose(),delete L[G]}}}function jg(e,t){function n(){let R=!1,Y=new St,V=null,ne=new St(0,0,0,0);return{setMask:function(se){if(V!==se&&!R)e.colorMask(se,se,se,se),V=se},setLocked:function(se){R=se},setClear:function(se,ce,we,Ae,_e){if(_e===!0)se*=Ae,ce*=Ae,we*=Ae;if(Y.set(se,ce,we,Ae),ne.equals(Y)===!1)e.clearColor(se,ce,we,Ae),ne.copy(Y)},reset:function(){R=!1,V=null,ne.set(-1,0,0,0)}}}function i(){let R=!1,Y=!1,V=null,ne=null,se=null;return{setReversed:function(ce){if(Y!==ce){let we=t.get("EXT_clip_control");if(ce)we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT);else we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT);Y=ce;let Ae=se;se=null,this.setClear(Ae)}},getReversed:function(){return Y},setTest:function(ce){if(ce)ve(e.DEPTH_TEST);else je(e.DEPTH_TEST)},setMask:function(ce){if(V!==ce&&!R)e.depthMask(ce),V=ce},setFunc:function(ce){if(Y)ce=ch[ce];if(ne!==ce){switch(ce){case Nc:e.depthFunc(e.NEVER);break;case Dc:e.depthFunc(e.ALWAYS);break;case Uc:e.depthFunc(e.LESS);break;case za:e.depthFunc(e.LEQUAL);break;case Fc:e.depthFunc(e.EQUAL);break;case Oc:e.depthFunc(e.GEQUAL);break;case Bc:e.depthFunc(e.GREATER);break;case zc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ne=ce}},setLocked:function(ce){R=ce},setClear:function(ce){if(se!==ce){if(se=ce,Y)ce=1-ce;e.clearDepth(ce)}},reset:function(){R=!1,V=null,ne=null,se=null,Y=!1}}}function s(){let R=!1,Y=null,V=null,ne=null,se=null,ce=null,we=null,Ae=null,_e=null;return{setTest:function(De){if(!R)if(De)ve(e.STENCIL_TEST);else je(e.STENCIL_TEST)},setMask:function(De){if(Y!==De&&!R)e.stencilMask(De),Y=De},setFunc:function(De,Ye,xe){if(V!==De||ne!==Ye||se!==xe)e.stencilFunc(De,Ye,xe),V=De,ne=Ye,se=xe},setOp:function(De,Ye,xe){if(ce!==De||we!==Ye||Ae!==xe)e.stencilOp(De,Ye,xe),ce=De,we=Ye,Ae=xe},setLocked:function(De){R=De},setClear:function(De){if(_e!==De)e.clearStencil(De),_e=De},reset:function(){R=!1,Y=null,V=null,ne=null,se=null,ce=null,we=null,Ae=null,_e=null}}}let r=new n,a=new i,o=new s,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,x=[],M=null,p=!1,g=null,T=null,E=null,y=null,w=null,I=null,m=null,S=new Ge(0,0,0),L=0,G=!1,D=null,B=null,Q=null,C=null,K=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,fe=0,J=e.getParameter(e.VERSION);if(J.indexOf("WebGL")!==-1)fe=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=fe>=1;else if(J.indexOf("OpenGL ES")!==-1)fe=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=fe>=2;let te=null,oe={},Se=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),ae=new St().fromArray(Se),be=new St().fromArray(ee);function Ue(R,Y,V,ne){let se=new Uint8Array(4),ce=e.createTexture();e.bindTexture(R,ce),e.texParameteri(R,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(R,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let we=0;we<V;we++)if(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)e.texImage3D(Y,0,e.RGBA,1,1,ne,0,e.RGBA,e.UNSIGNED_BYTE,se);else e.texImage2D(Y+we,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,se);return ce}let Fe={};Fe[e.TEXTURE_2D]=Ue(e.TEXTURE_2D,e.TEXTURE_2D,1),Fe[e.TEXTURE_CUBE_MAP]=Ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[e.TEXTURE_2D_ARRAY]=Ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Fe[e.TEXTURE_3D]=Ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(e.DEPTH_TEST),a.setFunc(za),Te(!1),Le(Fa),ve(e.CULL_FACE),pe(bn);function ve(R){if(u[R]!==!0)e.enable(R),u[R]=!0}function je(R){if(u[R]!==!1)e.disable(R),u[R]=!1}function We(R,Y){if(h[R]!==Y){if(e.bindFramebuffer(R,Y),h[R]=Y,R===e.DRAW_FRAMEBUFFER)h[e.FRAMEBUFFER]=Y;if(R===e.FRAMEBUFFER)h[e.DRAW_FRAMEBUFFER]=Y;return!0}return!1}function Oe(R,Y){let V=x,ne=!1;if(R){if(V=f.get(Y),V===void 0)V=[],f.set(Y,V);let se=R.textures;if(V.length!==se.length||V[0]!==e.COLOR_ATTACHMENT0){for(let ce=0,we=se.length;ce<we;ce++)V[ce]=e.COLOR_ATTACHMENT0+ce;V.length=se.length,ne=!0}}else if(V[0]!==e.BACK)V[0]=e.BACK,ne=!0;if(ne)e.drawBuffers(V)}function Ke(R){if(M!==R)return e.useProgram(R),M=R,!0;return!1}let ie={[zi]:e.FUNC_ADD,[pc]:e.FUNC_SUBTRACT,[mc]:e.FUNC_REVERSE_SUBTRACT};ie[gc]=e.MIN,ie[_c]=e.MAX;let de={[xc]:e.ZERO,[vc]:e.ONE,[yc]:e.SRC_COLOR,[Mc]:e.SRC_ALPHA,[Rc]:e.SRC_ALPHA_SATURATE,[wc]:e.DST_COLOR,[Tc]:e.DST_ALPHA,[Sc]:e.ONE_MINUS_SRC_COLOR,[bc]:e.ONE_MINUS_SRC_ALPHA,[Ac]:e.ONE_MINUS_DST_COLOR,[Ec]:e.ONE_MINUS_DST_ALPHA,[Cc]:e.CONSTANT_COLOR,[Ic]:e.ONE_MINUS_CONSTANT_COLOR,[Pc]:e.CONSTANT_ALPHA,[Lc]:e.ONE_MINUS_CONSTANT_ALPHA};function pe(R,Y,V,ne,se,ce,we,Ae,_e,De){if(R===bn){if(p===!0)je(e.BLEND),p=!1;return}if(p===!1)ve(e.BLEND),p=!0;if(R!==fc){if(R!==g||De!==G){if(T!==zi||w!==zi)e.blendEquation(e.FUNC_ADD),T=zi,w=zi;if(De)switch(R){case gs:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case hn:e.blendFunc(e.ONE,e.ONE);break;case Oa:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ba:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:He("WebGLState: Invalid blending: ",R);break}else switch(R){case gs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case hn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Oa:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ba:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",R);break}E=null,y=null,I=null,m=null,S.set(0,0,0),L=0,g=R,G=De}return}if(se=se||Y,ce=ce||V,we=we||ne,Y!==T||se!==w)e.blendEquationSeparate(ie[Y],ie[se]),T=Y,w=se;if(V!==E||ne!==y||ce!==I||we!==m)e.blendFuncSeparate(de[V],de[ne],de[ce],de[we]),E=V,y=ne,I=ce,m=we;if(Ae.equals(S)===!1||_e!==L)e.blendColor(Ae.r,Ae.g,Ae.b,_e),S.copy(Ae),L=_e;g=R,G=!1}function Ee(R,Y){R.side===Jt?je(e.CULL_FACE):ve(e.CULL_FACE);let V=R.side===Bt;if(Y)V=!V;Te(V),R.blending===gs&&R.transparent===!1?pe(bn):pe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ne=R.stencilWrite;if(o.setTest(ne),ne)o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass);Je(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ve(e.SAMPLE_ALPHA_TO_COVERAGE):je(e.SAMPLE_ALPHA_TO_COVERAGE)}function Te(R){if(D!==R){if(R)e.frontFace(e.CW);else e.frontFace(e.CCW);D=R}}function Le(R){if(R!==hc){if(ve(e.CULL_FACE),R!==B)if(R===Fa)e.cullFace(e.BACK);else if(R===uc)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else je(e.CULL_FACE);B=R}function Ne(R){if(R!==Q){if(H)e.lineWidth(R);Q=R}}function Je(R,Y,V){if(R){if(ve(e.POLYGON_OFFSET_FILL),C!==Y||K!==V){if(C=Y,K=V,a.getReversed())Y=-Y,V=-V;e.polygonOffset(Y,V)}}else je(e.POLYGON_OFFSET_FILL)}function Ze(R){if(R)ve(e.SCISSOR_TEST);else je(e.SCISSOR_TEST)}function tt(R){if(R===void 0)R=e.TEXTURE0+j-1;if(te!==R)e.activeTexture(R),te=R}function N(R,Y,V){if(V===void 0)if(te===null)V=e.TEXTURE0+j-1;else V=te;let ne=oe[V];if(ne===void 0)ne={type:void 0,texture:void 0},oe[V]=ne;if(ne.type!==R||ne.texture!==Y){if(te!==V)e.activeTexture(V),te=V;e.bindTexture(R,Y||Fe[R]),ne.type=R,ne.texture=Y}}function vt(){let R=oe[te];if(R!==void 0&&R.type!==void 0)e.bindTexture(R.type,null),R.type=void 0,R.texture=void 0}function Ve(){try{e.compressedTexImage2D(...arguments)}catch(R){He("WebGLState:",R)}}function pt(){try{e.compressedTexImage3D(...arguments)}catch(R){He("WebGLState:",R)}}function le(){try{e.texSubImage2D(...arguments)}catch(R){He("WebGLState:",R)}}function st(){try{e.texSubImage3D(...arguments)}catch(R){He("WebGLState:",R)}}function Be(){try{e.compressedTexSubImage2D(...arguments)}catch(R){He("WebGLState:",R)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(R){He("WebGLState:",R)}}function yt(){try{e.texStorage2D(...arguments)}catch(R){He("WebGLState:",R)}}function b(){try{e.texStorage3D(...arguments)}catch(R){He("WebGLState:",R)}}function _(){try{e.texImage2D(...arguments)}catch(R){He("WebGLState:",R)}}function O(){try{e.texImage3D(...arguments)}catch(R){He("WebGLState:",R)}}function re(R){if(d[R]!==void 0)return d[R];else return e.getParameter(R)}function A(R,Y){if(d[R]!==Y)e.pixelStorei(R,Y),d[R]=Y}function k(R){if(ae.equals(R)===!1)e.scissor(R.x,R.y,R.z,R.w),ae.copy(R)}function X(R){if(be.equals(R)===!1)e.viewport(R.x,R.y,R.z,R.w),be.copy(R)}function P(R,Y){let V=c.get(Y);if(V===void 0)V=new WeakMap,c.set(Y,V);let ne=V.get(R);if(ne===void 0)ne=e.getUniformBlockIndex(Y,R.name),e.uniformBlockBinding(Y,ne,ne),V.set(R,ne)}function Z(R,Y,V){let se=c.get(Y).get(R);if(l[se]!==V)e.bindBufferBase(e.UNIFORM_BUFFER,se,V),l[se]=V}function he(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,oe={},h={},l={},f=new WeakMap,x=[],M=null,p=!1,g=null,T=null,E=null,y=null,w=null,I=null,m=null,S=new Ge(0,0,0),L=0,G=!1,D=null,B=null,Q=null,C=null,K=null,ae.set(0,0,e.canvas.width,e.canvas.height),be.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:je,bindFramebuffer:We,drawBuffers:Oe,useProgram:Ke,setBlending:pe,setMaterial:Ee,setFlipSided:Te,setCullFace:Le,setLineWidth:Ne,setPolygonOffset:Je,setScissorTest:Ze,activeTexture:tt,bindTexture:N,unbindTexture:vt,compressedTexImage2D:Ve,compressedTexImage3D:pt,texImage2D:_,texImage3D:O,pixelStorei:A,getParameter:re,updateUBOMapping:P,uniformBlockBinding:Z,texStorage2D:yt,texStorage3D:b,texSubImage2D:le,texSubImage3D:st,compressedTexSubImage2D:Be,compressedTexSubImage3D:ke,scissor:k,viewport:X,reset:he}}function e0(e,t,n,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap,d=new Set,h,f=new WeakMap,x=new Set,M=new FinalizationRegistry((b)=>x.delete(b)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function g(b,_){return p?new OffscreenCanvas(b,_):cs("canvas")}function T(b,_,O){let re=1,A=yt(b);if(A.width>O||A.height>O)re=O/Math.max(A.width,A.height);if(re<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let k=Math.floor(re*A.width),X=Math.floor(re*A.height);if(h===void 0)h=g(k,X);let P=_?g(k,X):h;return P.width=k,P.height=X,P.getContext("2d").drawImage(b,0,0,k,X),ze("WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+k+"x"+X+")."),P}else{if("data"in b)ze("WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+").");return b}return b}function E(b){return b.generateMipmaps}function y(b){e.generateMipmap(b)}function w(b){if(b.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(b.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function I(b,_,O,re,A,k=!1){if(b!==null){if(e[b]!==void 0)return e[b];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X;if(re){if(X=t.get("EXT_texture_norm16"),!X)ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let P=_;if(_===e.RED){if(O===e.FLOAT)P=e.R32F;if(O===e.HALF_FLOAT)P=e.R16F;if(O===e.UNSIGNED_BYTE)P=e.R8;if(O===e.UNSIGNED_SHORT&&X)P=X.R16_EXT;if(O===e.SHORT&&X)P=X.R16_SNORM_EXT}if(_===e.RED_INTEGER){if(O===e.UNSIGNED_BYTE)P=e.R8UI;if(O===e.UNSIGNED_SHORT)P=e.R16UI;if(O===e.UNSIGNED_INT)P=e.R32UI;if(O===e.BYTE)P=e.R8I;if(O===e.SHORT)P=e.R16I;if(O===e.INT)P=e.R32I}if(_===e.RG){if(O===e.FLOAT)P=e.RG32F;if(O===e.HALF_FLOAT)P=e.RG16F;if(O===e.UNSIGNED_BYTE)P=e.RG8;if(O===e.UNSIGNED_SHORT&&X)P=X.RG16_EXT;if(O===e.SHORT&&X)P=X.RG16_SNORM_EXT}if(_===e.RG_INTEGER){if(O===e.UNSIGNED_BYTE)P=e.RG8UI;if(O===e.UNSIGNED_SHORT)P=e.RG16UI;if(O===e.UNSIGNED_INT)P=e.RG32UI;if(O===e.BYTE)P=e.RG8I;if(O===e.SHORT)P=e.RG16I;if(O===e.INT)P=e.RG32I}if(_===e.RGB_INTEGER){if(O===e.UNSIGNED_BYTE)P=e.RGB8UI;if(O===e.UNSIGNED_SHORT)P=e.RGB16UI;if(O===e.UNSIGNED_INT)P=e.RGB32UI;if(O===e.BYTE)P=e.RGB8I;if(O===e.SHORT)P=e.RGB16I;if(O===e.INT)P=e.RGB32I}if(_===e.RGBA_INTEGER){if(O===e.UNSIGNED_BYTE)P=e.RGBA8UI;if(O===e.UNSIGNED_SHORT)P=e.RGBA16UI;if(O===e.UNSIGNED_INT)P=e.RGBA32UI;if(O===e.BYTE)P=e.RGBA8I;if(O===e.SHORT)P=e.RGBA16I;if(O===e.INT)P=e.RGBA32I}if(_===e.RGB){if(O===e.UNSIGNED_SHORT&&X)P=X.RGB16_EXT;if(O===e.SHORT&&X)P=X.RGB16_SNORM_EXT;if(O===e.UNSIGNED_INT_5_9_9_9_REV)P=e.RGB9_E5;if(O===e.UNSIGNED_INT_10F_11F_11F_REV)P=e.R11F_G11F_B10F}if(_===e.RGBA){let Z=k?Eo:Qe.getTransfer(A);if(O===e.FLOAT)P=e.RGBA32F;if(O===e.HALF_FLOAT)P=e.RGBA16F;if(O===e.UNSIGNED_BYTE)P=Z===ct?e.SRGB8_ALPHA8:e.RGBA8;if(O===e.UNSIGNED_SHORT&&X)P=X.RGBA16_EXT;if(O===e.SHORT&&X)P=X.RGBA16_SNORM_EXT;if(O===e.UNSIGNED_SHORT_4_4_4_4)P=e.RGBA4;if(O===e.UNSIGNED_SHORT_5_5_5_1)P=e.RGB5_A1}if(P===e.R16F||P===e.R32F||P===e.RG16F||P===e.RG32F||P===e.RGBA16F||P===e.RGBA32F)t.get("EXT_color_buffer_float");return P}function m(b,_){let O;if(b){if(_===null||_===zn||_===ei)O=e.DEPTH24_STENCIL8;else if(_===Tn)O=e.DEPTH32F_STENCIL8;else if(_===ws)O=e.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===zn||_===ei)O=e.DEPTH_COMPONENT24;else if(_===Tn)O=e.DEPTH_COMPONENT32F;else if(_===ws)O=e.DEPTH_COMPONENT16;return O}function S(b,_){if(E(b)===!0||b.isFramebufferTexture&&b.minFilter!==On&&b.minFilter!==$t)return Math.log2(Math.max(_.width,_.height))+1;else if(b.mipmaps.length>0)return b.mipmaps.length;else if(b.isCompressedTexture&&Array.isArray(b.image))return _.mipmaps.length;else return 1}function L(b){let _=new WeakRef(b);i.get(b).__ref=_,x.add(_),M.register(b,_,_)}function G(b){let _=i.get(b).__ref;if(_===void 0)return;x.delete(_),M.unregister(_)}function D(b){Q(b.target)}function B(b){C(b.target)}function Q(b){if(b.removeEventListener("dispose",D),G(b),j(b),b.isVideoTexture)u.delete(b);if(b.isHTMLTexture)d.delete(b)}function C(b){b.removeEventListener("dispose",B),G(b),fe(b)}function K(){for(let b of x){let _=b.deref();if(_===void 0)continue;if(_.isRenderTarget===!0)C(_);else Q(_)}x.clear(),d.clear()}function j(b){let _=i.get(b);if(_.__webglInit===void 0)return;let O=b.source,re=f.get(O);if(re){let A=re[_.__cacheKey];if(A.usedTimes--,A.usedTimes===0)H(b);if(Object.keys(re).length===0)f.delete(O)}i.remove(b)}function H(b){let _=i.get(b);e.deleteTexture(_.__webglTexture);let O=b.source,re=f.get(O);delete re[_.__cacheKey],a.memory.textures--}function fe(b){let _=i.get(b);if(_.__depthDisposeCallback)_.__depthDisposeCallback();let O=b.depthTexture;if(O&&O.renderTarget===b)Q(O);if(b.isWebGLCubeRenderTarget)for(let A=0;A<6;A++){if(Array.isArray(_.__webglFramebuffer[A]))for(let k=0;k<_.__webglFramebuffer[A].length;k++)e.deleteFramebuffer(_.__webglFramebuffer[A][k]);else e.deleteFramebuffer(_.__webglFramebuffer[A]);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer[A])}else{if(Array.isArray(_.__webglFramebuffer))for(let A=0;A<_.__webglFramebuffer.length;A++)e.deleteFramebuffer(_.__webglFramebuffer[A]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)e.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)e.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let A=0;A<_.__webglColorRenderbuffer.length;A++)if(_.__webglColorRenderbuffer[A])e.deleteRenderbuffer(_.__webglColorRenderbuffer[A])}if(_.__webglDepthRenderbuffer)e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let re=b.textures;for(let A=0,k=re.length;A<k;A++){let X=i.get(re[A]);if(X.__webglTexture)e.deleteTexture(X.__webglTexture),a.memory.textures--;i.remove(re[A])}i.remove(b)}let J=0;function te(){J=0}function oe(){return J}function Se(b){J=b}function ee(){let b=J;if(b>=s.maxTextures)ze("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures);return J+=1,b}function ae(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.mipmapsAutoUpdate),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function be(b,_){let O=i.get(b);if(b.isVideoTexture)Be(b);if(b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){let re=b.image;if(re===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(O,b,_);return}}else if(b.isExternalTexture)O.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+_)}function Ue(b,_){let O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Ee(O,b,_);return}else if(b.isExternalTexture)O.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+_)}function Fe(b,_){let O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Ee(O,b,_);return}n.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+_)}function ve(b,_){let O=i.get(b);if(b.version>0&&O.__version!==b.version){Te(O,b,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+_)}let je={[Wc]:e.REPEAT,[Tr]:e.CLAMP_TO_EDGE,[Vc]:e.MIRRORED_REPEAT},We={[On]:e.NEAREST,[Xc]:e.NEAREST_MIPMAP_NEAREST,[Es]:e.NEAREST_MIPMAP_LINEAR,[$t]:e.LINEAR,[Er]:e.LINEAR_MIPMAP_NEAREST,[Bn]:e.LINEAR_MIPMAP_LINEAR},Oe={[th]:e.NEVER,[Ro]:e.ALWAYS,[nh]:e.LESS,[wo]:e.LEQUAL,[ih]:e.EQUAL,[Ao]:e.GEQUAL,[sh]:e.GREATER,[rh]:e.NOTEQUAL};function Ke(b,_){if(_.type===Tn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===$t||_.magFilter===Er||_.magFilter===Es||_.magFilter===Bn||_.minFilter===$t||_.minFilter===Er||_.minFilter===Es||_.minFilter===Bn))ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(b,e.TEXTURE_WRAP_S,je[_.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,je[_.wrapT]),b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)e.texParameteri(b,e.TEXTURE_WRAP_R,je[_.wrapR]);if(e.texParameteri(b,e.TEXTURE_MAG_FILTER,We[_.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,We[_.minFilter]),_.compareFunction)e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,Oe[_.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===On)return;if(_.minFilter!==Es&&_.minFilter!==Bn)return;if(_.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ie(b,_){let O=!1;if(b.__webglInit===void 0)b.__webglInit=!0,_.addEventListener("dispose",D),L(_);let re=_.source,A=f.get(re);if(A===void 0)A={},f.set(re,A);let k=ae(_);if(k!==b.__cacheKey){if(A[k]===void 0)A[k]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,O=!0;A[k].usedTimes++;let X=A[b.__cacheKey];if(X!==void 0){if(A[b.__cacheKey].usedTimes--,X.usedTimes===0)H(_)}b.__cacheKey=k,b.__webglTexture=A[k].texture}return O}function de(b,_,O){return Math.floor(Math.floor(b/O)/_)}function pe(b,_,O,re){let k=b.updateRanges;if(k.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,O,re,_.data);else{k.sort((R,Y)=>R.start-Y.start);let X=0;for(let R=1;R<k.length;R++){let Y=k[X],V=k[R],ne=Y.start+Y.count,se=de(V.start,_.width,4),ce=de(Y.start,_.width,4);if(V.start<=ne+1&&se===ce&&de(V.start+V.count-1,_.width,4)===se)Y.count=Math.max(Y.count,V.start+V.count-Y.start);else++X,k[X]=V}k.length=X+1;let P=n.getParameter(e.UNPACK_ROW_LENGTH),Z=n.getParameter(e.UNPACK_SKIP_PIXELS),he=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let R=0,Y=k.length;R<Y;R++){let V=k[R],ne=Math.floor(V.start/4),se=Math.ceil(V.count/4),ce=ne%_.width,we=Math.floor(ne/_.width),Ae=se,_e=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ce),n.pixelStorei(e.UNPACK_SKIP_ROWS,we),n.texSubImage2D(e.TEXTURE_2D,0,ce,we,Ae,1,O,re,_.data)}b.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,P),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(e.UNPACK_SKIP_ROWS,he)}}function Ee(b,_,O){let re=e.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)re=e.TEXTURE_2D_ARRAY;if(_.isData3DTexture)re=e.TEXTURE_3D;let A=ie(b,_),k=_.source;n.bindTexture(re,b.__webglTexture,e.TEXTURE0+O);let X=i.get(k);if(k.version!==X.__version||A===!0){if(n.activeTexture(e.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let _e=Qe.getPrimaries(Qe.workingColorSpace),De=_.colorSpace===ni?null:Qe.getPrimaries(_.colorSpace),Ye=_.colorSpace===ni||_e===De?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let Z=T(_.image,!1,s.maxTextureSize);Z=ke(_,Z);let he=r.convert(_.format,_.colorSpace),R=r.convert(_.type),Y=I(_.internalFormat,he,R,_.normalized,_.colorSpace,_.isVideoTexture);Ke(re,_);let V,ne=_.mipmaps,se=_.isVideoTexture!==!0,ce=X.__version===void 0||A===!0,we=k.dataReady,Ae=S(_,Z);if(_.isDepthTexture){if(Y=m(_.format===Gn,_.type),ce)if(se)n.texStorage2D(e.TEXTURE_2D,1,Y,Z.width,Z.height);else n.texImage2D(e.TEXTURE_2D,0,Y,Z.width,Z.height,0,he,R,null)}else if(_.isDataTexture)if(ne.length>0){if(se&&ce)n.texStorage2D(e.TEXTURE_2D,Ae,Y,ne[0].width,ne[0].height);for(let _e=0,De=ne.length;_e<De;_e++)if(V=ne[_e],se){if(we)n.texSubImage2D(e.TEXTURE_2D,_e,0,0,V.width,V.height,he,R,V.data)}else n.texImage2D(e.TEXTURE_2D,_e,Y,V.width,V.height,0,he,R,V.data);_.generateMipmaps=!1}else if(se){if(ce)n.texStorage2D(e.TEXTURE_2D,Ae,Y,Z.width,Z.height);if(we)pe(_,Z,he,R)}else n.texImage2D(e.TEXTURE_2D,0,Y,Z.width,Z.height,0,he,R,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(se&&ce)n.texStorage3D(e.TEXTURE_2D_ARRAY,Ae,Y,ne[0].width,ne[0].height,Z.depth);for(let _e=0,De=ne.length;_e<De;_e++)if(V=ne[_e],_.format!==En)if(he!==null)if(se){if(we)if(_.layerUpdates.size>0){let Ye=al(V.width,V.height,_.format,_.type);for(let xe of _.layerUpdates){let at=V.data.subarray(xe*Ye/V.data.BYTES_PER_ELEMENT,(xe+1)*Ye/V.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,_e,0,0,xe,V.width,V.height,1,he,at)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,_e,0,0,0,V.width,V.height,Z.depth,he,V.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,_e,Y,V.width,V.height,Z.depth,0,V.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(se){if(we)n.texSubImage3D(e.TEXTURE_2D_ARRAY,_e,0,0,0,V.width,V.height,Z.depth,he,R,V.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,_e,Y,V.width,V.height,Z.depth,0,he,R,V.data);if(_.layerUpdates.size>0)_.clearLayerUpdates()}else{if(se&&ce)n.texStorage2D(e.TEXTURE_2D,Ae,Y,ne[0].width,ne[0].height);for(let _e=0,De=ne.length;_e<De;_e++)if(V=ne[_e],_.format!==En)if(he!==null)if(se){if(we)n.compressedTexSubImage2D(e.TEXTURE_2D,_e,0,0,V.width,V.height,he,V.data)}else n.compressedTexImage2D(e.TEXTURE_2D,_e,Y,V.width,V.height,0,V.data);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(se){if(we)n.texSubImage2D(e.TEXTURE_2D,_e,0,0,V.width,V.height,he,R,V.data)}else n.texImage2D(e.TEXTURE_2D,_e,Y,V.width,V.height,0,he,R,V.data)}else if(_.isDataArrayTexture)if(se){if(ce)n.texStorage3D(e.TEXTURE_2D_ARRAY,Ae,Y,Z.width,Z.height,Z.depth);if(we)if(_.layerUpdates.size>0){let _e=al(Z.width,Z.height,_.format,_.type);for(let De of _.layerUpdates){let Ye=Z.data.subarray(De*_e/Z.data.BYTES_PER_ELEMENT,(De+1)*_e/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,De,Z.width,Z.height,1,he,R,Ye)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,he,R,Z.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Y,Z.width,Z.height,Z.depth,0,he,R,Z.data);else if(_.isData3DTexture)if(se){if(ce)n.texStorage3D(e.TEXTURE_3D,Ae,Y,Z.width,Z.height,Z.depth);if(we)n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,he,R,Z.data)}else n.texImage3D(e.TEXTURE_3D,0,Y,Z.width,Z.height,Z.depth,0,he,R,Z.data);else if(_.isFramebufferTexture){if(ce)if(se)n.texStorage2D(e.TEXTURE_2D,Ae,Y,Z.width,Z.height);else{let _e=Z.width,De=Z.height;for(let Ye=0;Ye<Ae;Ye++)n.texImage2D(e.TEXTURE_2D,Ye,Y,_e,De,0,he,R,null),_e>>=1,De>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let _e=e.canvas;if(!_e.hasAttribute("layoutsubtree"))_e.setAttribute("layoutsubtree","true");if(Z.parentNode!==_e){_e.appendChild(Z),d.add(_),_e.onpaint=(De)=>{let Ye=De.changedElements;for(let xe of d)if(Ye.includes(xe.image))xe.needsUpdate=!0},_e.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Z);else{let{RGBA:Ye,RGBA:xe,UNSIGNED_BYTE:at}=e;e.texElementImage2D(e.TEXTURE_2D,0,Ye,xe,at,Z)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ne.length>0){if(se&&ce){let _e=yt(ne[0]);n.texStorage2D(e.TEXTURE_2D,Ae,Y,_e.width,_e.height)}for(let _e=0,De=ne.length;_e<De;_e++)if(V=ne[_e],se){if(we)n.texSubImage2D(e.TEXTURE_2D,_e,0,0,he,R,V)}else n.texImage2D(e.TEXTURE_2D,_e,Y,he,R,V);_.generateMipmaps=!1}else if(se){if(ce){let _e=yt(Z);n.texStorage2D(e.TEXTURE_2D,Ae,Y,_e.width,_e.height)}if(we)n.texSubImage2D(e.TEXTURE_2D,0,0,0,he,R,Z)}else n.texImage2D(e.TEXTURE_2D,0,Y,he,R,Z);if(E(_)&&_.mipmapsAutoUpdate===!0)y(re);if(X.__version=k.version,_.onUpdate)_.onUpdate(_)}b.__version=_.version}function Te(b,_,O){if(_.image.length!==6)return;let re=ie(b,_),A=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+O);let k=i.get(A);if(A.version!==k.__version||re===!0){n.activeTexture(e.TEXTURE0+O);let X=Qe.getPrimaries(Qe.workingColorSpace),P=_.colorSpace===ni?null:Qe.getPrimaries(_.colorSpace),Z=_.colorSpace===ni||X===P?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let he=_.isCompressedTexture||_.image[0].isCompressedTexture,R=_.image[0]&&_.image[0].isDataTexture,Y=[];for(let xe=0;xe<6;xe++){if(!he&&!R)Y[xe]=T(_.image[xe],!0,s.maxCubemapSize);else Y[xe]=R?_.image[xe].image:_.image[xe];Y[xe]=ke(_,Y[xe])}let V=Y[0],ne=r.convert(_.format,_.colorSpace),se=r.convert(_.type),ce=I(_.internalFormat,ne,se,_.normalized,_.colorSpace),we=_.isVideoTexture!==!0,Ae=k.__version===void 0||re===!0,_e=A.dataReady,De=S(_,V);Ke(e.TEXTURE_CUBE_MAP,_);let Ye;if(_.isDepthTexture){if(ce=m(_.format===Gn,_.type),Ae)if(we)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,ce,V.width,V.height);else for(let xe=0;xe<6;xe++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,V.width,V.height,0,ne,se,null)}else if(he){if(we&&Ae)n.texStorage2D(e.TEXTURE_CUBE_MAP,De,ce,V.width,V.height);for(let xe=0;xe<6;xe++){Ye=Y[xe].mipmaps;for(let at=0;at<Ye.length;at++){let gt=Ye[at];if(_.format!==En)if(ne!==null)if(we){if(_e)n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,at,0,0,gt.width,gt.height,ne,gt.data)}else n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,at,ce,gt.width,gt.height,0,gt.data);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(we){if(_e)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,at,0,0,gt.width,gt.height,ne,se,gt.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,at,ce,gt.width,gt.height,0,ne,se,gt.data)}}}else{if(Ye=_.mipmaps,we&&Ae){if(Ye.length>0)De++;let xe=yt(Y[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,De,ce,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(R){if(we){if(_e)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Y[xe].width,Y[xe].height,ne,se,Y[xe].data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,Y[xe].width,Y[xe].height,0,ne,se,Y[xe].data);for(let at=0;at<Ye.length;at++){let en=Ye[at].image[xe].image;if(we){if(_e)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,at+1,0,0,en.width,en.height,ne,se,en.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,at+1,ce,en.width,en.height,0,ne,se,en.data)}}else{if(we){if(_e)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ne,se,Y[xe])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,ne,se,Y[xe]);for(let at=0;at<Ye.length;at++){let gt=Ye[at];if(we){if(_e)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,at+1,0,0,ne,se,gt.image[xe])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,at+1,ce,ne,se,gt.image[xe])}}}if(E(_)&&_.mipmapsAutoUpdate===!0)y(e.TEXTURE_CUBE_MAP);if(k.__version=A.version,_.onUpdate)_.onUpdate(_)}b.__version=_.version}function Le(b,_,O,re,A,k){let X=r.convert(O.format,O.colorSpace),P=r.convert(O.type),Z=I(O.internalFormat,X,P,O.normalized,O.colorSpace),he=i.get(_),R=i.get(O);if(R.__renderTarget=_,!he.__hasExternalTextures){let Y=Math.max(1,_.width>>k),V=Math.max(1,_.height>>k);if(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)n.texImage3D(A,k,Z,Y,V,_.depth,0,X,P,null);else n.texImage2D(A,k,Z,Y,V,0,X,P,null)}if(n.bindFramebuffer(e.FRAMEBUFFER,b),st(_))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,re,A,R.__webglTexture,0,le(_));else if(A===e.TEXTURE_2D||A>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&A<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,re,A,R.__webglTexture,k);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ne(b,_,O){if(e.bindRenderbuffer(e.RENDERBUFFER,b),_.depthBuffer){let re=_.depthTexture,A=re&&re.isDepthTexture?re.type:null,k=m(_.stencilBuffer,A),X=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(st(_))o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,le(_),k,_.width,_.height);else if(O)e.renderbufferStorageMultisample(e.RENDERBUFFER,le(_),k,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,k,_.width,_.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,b)}else{let re=_.textures;for(let A=0;A<re.length;A++){let k=re[A],X=r.convert(k.format,k.colorSpace),P=r.convert(k.type),Z=I(k.internalFormat,X,P,k.normalized,k.colorSpace);if(st(_))o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,le(_),Z,_.width,_.height);else if(O)e.renderbufferStorageMultisample(e.RENDERBUFFER,le(_),Z,_.width,_.height);else e.renderbufferStorage(e.RENDERBUFFER,Z,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Je(b,_,O){let re=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let A=i.get(_.depthTexture);A.__renderTarget=_;let k=re?_.depthTexture.image[0]:_.depthTexture.image;if(!A.__webglTexture||k.width!==_.width||k.height!==_.height)k.width=_.width,k.height=_.height,_.depthTexture.needsUpdate=!0;if(re)ve(_.depthTexture,0);else be(_.depthTexture,0);let X=A.__webglTexture,P=le(_),Z=re?e.TEXTURE_CUBE_MAP_POSITIVE_X+O:e.TEXTURE_2D,he=_.depthTexture.format===Gn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Hi)if(st(_))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,Z,X,0,P);else e.framebufferTexture2D(e.FRAMEBUFFER,he,Z,X,0);else if(_.depthTexture.format===Gn)if(st(_))o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,Z,X,0,P);else e.framebufferTexture2D(e.FRAMEBUFFER,he,Z,X,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(b){let _=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let re=b.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(re){let A=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,re.removeEventListener("dispose",A)};re.addEventListener("dispose",A),_.__depthDisposeCallback=A}_.__boundDepthTexture=re}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let re=0;re<6;re++)Je(_.__webglFramebuffer[re],b,re);else if(b.texture.mipmaps.length>0)Je(_.__webglFramebuffer[0],b,0);else Je(_.__webglFramebuffer,b,0);else if(O){_.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[re]),_.__webglDepthbuffer[re]===void 0)_.__webglDepthbuffer[re]=e.createRenderbuffer(),Ne(_.__webglDepthbuffer[re],b,!1);else{let A=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[re];e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,A,e.RENDERBUFFER,k)}}else{if(b.texture.mipmaps.length>0)n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]);else n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Ne(_.__webglDepthbuffer,b,!1);else{let A=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,A,e.RENDERBUFFER,k)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function tt(b,_,O){let re=i.get(b);if(_!==void 0)Le(re.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(O!==void 0)Ze(b)}function N(b){let _=b.texture,O=i.get(b),re=i.get(_);b.addEventListener("dispose",B),L(b);let A=b.textures,k=b.isWebGLCubeRenderTarget===!0,X=A.length>1;if(!X){if(re.__webglTexture===void 0)re.__webglTexture=e.createTexture();re.__version=_.version,a.memory.textures++}if(k){O.__webglFramebuffer=[];for(let P=0;P<6;P++)if(_.mipmaps.length>0){O.__webglFramebuffer[P]=[];for(let Z=0;Z<_.mipmaps.length;Z++)O.__webglFramebuffer[P][Z]=e.createFramebuffer()}else O.__webglFramebuffer[P]=e.createFramebuffer()}else{if(_.mipmaps.length>0){O.__webglFramebuffer=[];for(let P=0;P<_.mipmaps.length;P++)O.__webglFramebuffer[P]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(X)for(let P=0,Z=A.length;P<Z;P++){let he=i.get(A[P]);if(he.__webglTexture===void 0)he.__webglTexture=e.createTexture(),a.memory.textures++}if(b.samples>0&&st(b)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let P=0;P<A.length;P++){let Z=A[P];O.__webglColorRenderbuffer[P]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[P]);let he=r.convert(Z.format,Z.colorSpace),R=r.convert(Z.type),Y=I(Z.internalFormat,he,R,Z.normalized,Z.colorSpace,b.isXRRenderTarget===!0),V=le(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,V,Y,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+P,e.RENDERBUFFER,O.__webglColorRenderbuffer[P])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer)O.__webglDepthRenderbuffer=e.createRenderbuffer(),Ne(O.__webglDepthRenderbuffer,b,!0);n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(k){n.bindTexture(e.TEXTURE_CUBE_MAP,re.__webglTexture),Ke(e.TEXTURE_CUBE_MAP,_);for(let P=0;P<6;P++)if(_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)Le(O.__webglFramebuffer[P][Z],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+P,Z);else Le(O.__webglFramebuffer[P],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);if(E(_))y(e.TEXTURE_CUBE_MAP);else if(_.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);n.unbindTexture()}else if(X){for(let P=0,Z=A.length;P<Z;P++){let he=A[P],R=i.get(he),Y=e.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)Y=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(Y,R.__webglTexture),Ke(Y,he),Le(O.__webglFramebuffer,b,he,e.COLOR_ATTACHMENT0+P,Y,0),E(he))y(Y)}n.unbindTexture()}else{let P=e.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)P=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(P,re.__webglTexture),Ke(P,_),_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)Le(O.__webglFramebuffer[Z],b,_,e.COLOR_ATTACHMENT0,P,Z);else Le(O.__webglFramebuffer,b,_,e.COLOR_ATTACHMENT0,P,0);if(E(_))y(P);else if(_.mipmaps.length>0)e.texParameteri(P,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1);n.unbindTexture()}if(b.depthBuffer)Ze(b)}function vt(b){let _=b.textures;for(let O=0,re=_.length;O<re;O++){let A=_[O];if(E(A)&&A.mipmapsAutoUpdate===!0){let k=w(b),X=i.get(A).__webglTexture;n.bindTexture(k,X),y(k),n.unbindTexture()}}}let Ve=[];function pt(b){if(b.samples>0){if(st(b)===!1){let{textures:_,width:O,height:re}=b,A=e.COLOR_BUFFER_BIT,k=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=i.get(b),P=_.length>1;if(P)for(let he=0;he<_.length;he++)n.bindFramebuffer(e.FRAMEBUFFER,X.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+he,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,X.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+he,e.TEXTURE_2D,null,0);if(n.bindFramebuffer(e.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0)n.bindFramebuffer(e.DRAW_FRAMEBUFFER,X.__webglFramebuffer[0]);else n.bindFramebuffer(e.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let he=0;he<_.length;he++){if(b.resolveDepthBuffer){if(b.depthBuffer)A|=e.DEPTH_BUFFER_BIT;if(b.stencilBuffer&&b.resolveStencilBuffer)A|=e.STENCIL_BUFFER_BIT}if(P){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,X.__webglColorRenderbuffer[he]);let R=i.get(_[he]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,R,0)}if(e.blitFramebuffer(0,0,O,re,0,0,O,re,A,e.NEAREST),l===!0){if(Ve.length=0,Ve.push(e.COLOR_ATTACHMENT0+he),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1)Ve.push(k);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ve)}}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),P)for(let he=0;he<_.length;he++){n.bindFramebuffer(e.FRAMEBUFFER,X.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+he,e.RENDERBUFFER,X.__webglColorRenderbuffer[he]);let R=i.get(_[he]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,X.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+he,e.TEXTURE_2D,R,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let _=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function le(b){return Math.min(s.maxSamples,b.samples)}function st(b){let _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Be(b){let _=a.render.frame;if(u.get(b)!==_)u.set(b,_),b.update()}function ke(b,_){let{colorSpace:O,format:re,type:A}=b;if(b.isCompressedTexture===!0||b.isVideoTexture===!0)return _;if(O!==To&&O!==ni)if(Qe.getTransfer(O)===ct){if(re!==En||A!==an)ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else He("WebGLTextures: Unsupported texture color space:",O);return _}function yt(b){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement)c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height;else if(typeof VideoFrame<"u"&&b instanceof VideoFrame)c.width=b.displayWidth,c.height=b.displayHeight;else c.width=b.width,c.height=b.height;return c}this.allocateTextureUnit=ee,this.resetTextureUnits=te,this.getTextureUnits=oe,this.setTextureUnits=Se,this.setTexture2D=be,this.setTexture2DArray=Ue,this.setTexture3D=Fe,this.setTextureCube=ve,this.rebindTextures=tt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=st,this.dispose=K}function t0(e,t){function n(i,s=ni){let r,a=Qe.getTransfer(s);if(i===an)return e.UNSIGNED_BYTE;if(i===Ha)return e.UNSIGNED_SHORT_4_4_4_4;if(i===ka)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Zc)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Jc)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===qc)return e.BYTE;if(i===Yc)return e.SHORT;if(i===ws)return e.UNSIGNED_SHORT;if(i===Ga)return e.INT;if(i===zn)return e.UNSIGNED_INT;if(i===Tn)return e.FLOAT;if(i===zt)return e.HALF_FLOAT;if(i===$c)return e.ALPHA;if(i===Kc)return e.RGB;if(i===En)return e.RGBA;if(i===Hi)return e.DEPTH_COMPONENT;if(i===Gn)return e.DEPTH_STENCIL;if(i===Qc)return e.RED;if(i===Wa)return e.RED_INTEGER;if(i===ti)return e.RG;if(i===Va)return e.RG_INTEGER;if(i===Xa)return e.RGBA_INTEGER;if(i===wr||i===Ar||i===Rr||i===Cr)if(a===ct)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qa||i===Ya||i===Za||i===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$a||i===Ka||i===Qa||i===ja||i===eo||i===Ir||i===to)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$a||i===Ka)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Qa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ja)return r.COMPRESSED_R11_EAC;if(i===eo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ir)return r.COMPRESSED_RG11_EAC;if(i===to)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===no)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===io)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===so)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ro)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ao)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===co)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ho)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===po)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===go)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_o||i===xo||i===vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_o)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yo||i===So||i===Pr||i===Mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===yo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===So)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===ei)return e.UNSIGNED_INT_24_8;return e[i]!==void 0?e[i]:null}return{convert:n}}var n0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i0=`
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

}`;class au{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wr(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=n}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,n=new Et({vertexShader:n0,fragmentShader:i0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new oi(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ou extends wn{constructor(e,t){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,f=null,x=typeof XRWebGLBinding<"u",M=new au,p={},g=t.getContextAttributes(),T=null,E=null,y=[],w=[],I=new ue,m=null,S=null,L=new Wt;L.viewport=new St;let G=new Wt;G.viewport=new St;let D=[L,G],B=new il,Q=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ae=y[ee];if(ae===void 0)ae=new Rs,y[ee]=ae;return ae.getTargetRaySpace()},this.getControllerGrip=function(ee){let ae=y[ee];if(ae===void 0)ae=new Rs,y[ee]=ae;return ae.getGripSpace()},this.getHand=function(ee){let ae=y[ee];if(ae===void 0)ae=new Rs,y[ee]=ae;return ae.getHandSpace()};function K(ee){let ae=w.indexOf(ee.inputSource);if(ae===-1)return;let be=y[ae];if(be!==void 0)be.update(ee.inputSource,ee.frame,l||r),be.dispatchEvent({type:ee.type,data:ee.inputSource})}function j(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",H);for(let ee=0;ee<y.length;ee++){let ae=w[ee];if(ae===null)continue;w[ee]=null,y[ee].disconnect(ae)}Q=null,C=null,M.reset();for(let ee in p)delete p[ee];if(e.setRenderTarget(T),h=null,d=null,u=null,i=null,E=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(m),e.setSize(I.width,I.height,!1),S!==null){let ee=S.camera;ee.fov=S.fov,ee.zoom=S.zoom,ee.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){if(s=ee,n.isPresenting===!0)ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){if(a=ee,n.isPresenting===!0)ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){if(u===null&&x)u=new XRWebGLBinding(i,t);return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",j),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0)await t.makeXRCompatible();if(m=e.getPixelRatio(),e.getSize(I),!(x&&("createProjectionLayer"in XRWebGLBinding.prototype))){let be={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new It(h.framebufferWidth,h.framebufferHeight,{format:En,type:an,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let be=null,Ue=null,Fe=null;if(g.depth)Fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=g.stencil?Gn:Hi,Ue=g.stencil?ei:zn;let ve={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new It(d.textureWidth,d.textureHeight,{format:En,type:an,depthTexture:new Wn(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(ee){for(let ae=0;ae<ee.removed.length;ae++){let be=ee.removed[ae],Ue=w.indexOf(be);if(Ue>=0)w[Ue]=null,y[Ue].disconnect(be)}for(let ae=0;ae<ee.added.length;ae++){let be=ee.added[ae],Ue=w.indexOf(be);if(Ue===-1){for(let ve=0;ve<y.length;ve++)if(ve>=w.length){w.push(be),Ue=ve;break}else if(w[ve]===null){w[ve]=be,Ue=ve;break}if(Ue===-1)break}let Fe=y[Ue];if(Fe)Fe.connect(be)}}function fe(ee,ae){if(ae===null)ee.matrixWorld.copy(ee.matrix);else ee.matrixWorld.multiplyMatrices(ae.matrixWorld,ee.matrix);ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let{near:ae,far:be}=ee;if(M.texture!==null){if(M.depthNear>0)ae=M.depthNear;if(M.depthFar>0)be=M.depthFar}if(B.near=G.near=L.near=ae,B.far=G.far=L.far=be,Q!==B.near||C!==B.far)i.updateRenderState({depthNear:B.near,depthFar:B.far}),Q=B.near,C=B.far;B.layers.mask=ee.layers.mask|6,L.layers.mask=B.layers.mask&-5,G.layers.mask=B.layers.mask&-3;let Ue=ee.parent,Fe=B.cameras;fe(B,Ue);for(let ve=0;ve<Fe.length;ve++)fe(Fe[ve],Ue);if(B.projectionMatrix.copy(L.projectionMatrix),B.projectionMatrixInverse.copy(L.projectionMatrixInverse),S===null&&ee.isPerspectiveCamera)S={camera:ee,fov:ee.fov,zoom:ee.zoom};J(ee,B,Ue)};function J(ee,ae,be){if(be===null)ee.matrix.copy(ae.matrixWorld);else ee.matrix.copy(be.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ae.matrixWorld);if(ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ee.isPerspectiveCamera)ee.fov=xr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1}this.getCamera=function(){return B},this.getFoveation=function(){if(d===null&&h===null)return;return o},this.setFoveation=function(ee){if(o=ee,d!==null)d.fixedFoveation=ee;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=ee},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(B)},this.getCameraTexture=function(ee){return p[ee]};let te=null;function oe(ee,ae){if(c=ae.getViewerPose(l||r),f=ae,c!==null){let be=c.views;if(h!==null)e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E);let Ue=!1;if(be.length!==B.cameras.length)B.cameras.length=0,Ue=!0;for(let We=0;We<be.length;We++){let Oe=be[We],Ke=null;if(h!==null)Ke=h.getViewport(Oe);else{let de=u.getViewSubImage(d,Oe);if(Ke=de.viewport,We===0)e.setRenderTargetTextures(E,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(E)}let ie=D[We];if(ie===void 0)ie=new Wt,ie.layers.enable(We),ie.viewport=new St,D[We]=ie;if(ie.matrix.fromArray(Oe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Oe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),We===0)B.matrix.copy(ie.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);if(Ue===!0)B.cameras.push(ie)}let Fe=i.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let We=u.getDepthInformation(be[0]);if(We&&We.isValid&&We.texture)M.init(We,i.renderState)}if(Fe&&Fe.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let We=0;We<be.length;We++){let Oe=be[We].camera;if(Oe){let Ke=p[Oe];if(!Ke)Ke=new Wr,p[Oe]=Ke;let ie=u.getCameraImage(Oe);Ke.sourceTexture=ie}}}}for(let be=0;be<y.length;be++){let Ue=w[be],Fe=y[be];if(Ue!==null&&Fe!==void 0)Fe.update(Ue,ae,l||r)}if(te)te(ee,ae);if(ae.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:ae});f=null}let Se=new Xh;Se.setAnimationLoop(oe),this.setAnimationLoop=function(ee){te=ee},this.dispose=function(){}}}var s0=new ft,lu=new Xe;lu.set(-1,0,0,0,1,0,0,0,1);function r0(e,t){function n(p,g){if(p.matrixAutoUpdate===!0)p.updateMatrix();g.value.copy(p.matrix)}function i(p,g){if(g.color.getRGB(p.fogColor.value,Vo(e)),g.isFog)p.fogNear.value=g.near,p.fogFar.value=g.far;else if(g.isFogExp2)p.fogDensity.value=g.density}function s(p,g,T,E,y){if(g.isNodeMaterial)g.uniformsNeedUpdate=!1;else if(g.isMeshBasicMaterial)r(p,g);else if(g.isMeshLambertMaterial){if(r(p,g),g.envMap)p.envMapIntensity.value=g.envMapIntensity}else if(g.isMeshToonMaterial)r(p,g),d(p,g);else if(g.isMeshPhongMaterial){if(r(p,g),u(p,g),g.envMap)p.envMapIntensity.value=g.envMapIntensity}else if(g.isMeshStandardMaterial){if(r(p,g),h(p,g),g.isMeshPhysicalMaterial)f(p,g,y)}else if(g.isMeshMatcapMaterial)r(p,g),x(p,g);else if(g.isMeshDepthMaterial)r(p,g);else if(g.isMeshDistanceMaterial)r(p,g),M(p,g);else if(g.isMeshNormalMaterial)r(p,g);else if(g.isLineBasicMaterial){if(a(p,g),g.isLineDashedMaterial)o(p,g)}else if(g.isPointsMaterial)l(p,g,T,E);else if(g.isSpriteMaterial)c(p,g);else if(g.isShadowMaterial)p.color.value.copy(g.color),p.opacity.value=g.opacity;else if(g.isShaderMaterial)g.uniformsNeedUpdate=!1}function r(p,g){if(p.opacity.value=g.opacity,g.color)p.diffuse.value.copy(g.color);if(g.emissive)p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity);if(g.map)p.map.value=g.map,n(g.map,p.mapTransform);if(g.alphaMap)p.alphaMap.value=g.alphaMap,n(g.alphaMap,p.alphaMapTransform);if(g.bumpMap){if(p.bumpMap.value=g.bumpMap,n(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Bt)p.bumpScale.value*=-1}if(g.normalMap){if(p.normalMap.value=g.normalMap,n(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Bt)p.normalScale.value.negate()}if(g.displacementMap)p.displacementMap.value=g.displacementMap,n(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias;if(g.emissiveMap)p.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,p.emissiveMapTransform);if(g.specularMap)p.specularMap.value=g.specularMap,n(g.specularMap,p.specularMapTransform);if(g.alphaTest>0)p.alphaTest.value=g.alphaTest;let T=t.get(g),{envMap:E,envMapRotation:y}=T;if(E){if(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(s0.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(lu);p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio}if(g.lightMap)p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,p.lightMapTransform);if(g.aoMap)p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,p.aoMapTransform)}function a(p,g){if(p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map)p.map.value=g.map,n(g.map,p.mapTransform)}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,T,E){if(p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*T,p.scale.value=E*0.5,g.map)p.map.value=g.map,n(g.map,p.uvTransform);if(g.alphaMap)p.alphaMap.value=g.alphaMap,n(g.alphaMap,p.alphaMapTransform);if(g.alphaTest>0)p.alphaTest.value=g.alphaTest}function c(p,g){if(p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map)p.map.value=g.map,n(g.map,p.mapTransform);if(g.alphaMap)p.alphaMap.value=g.alphaMap,n(g.alphaMap,p.alphaMapTransform);if(g.alphaTest>0)p.alphaTest.value=g.alphaTest}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,0.0001)}function d(p,g){if(g.gradientMap)p.gradientMap.value=g.gradientMap}function h(p,g){if(p.metalness.value=g.metalness,g.metalnessMap)p.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=g.roughness,g.roughnessMap)p.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,p.roughnessMapTransform);if(g.envMap)p.envMapIntensity.value=g.envMapIntensity}function f(p,g,T){if(p.ior.value=g.ior,g.diffuseRoughness>0){if(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap)p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,n(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform)}if(g.sheen>0){if(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap)p.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,p.sheenColorMapTransform);if(g.sheenRoughnessMap)p.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(g.clearcoat>0){if(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap)p.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,p.clearcoatMapTransform);if(g.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(g.clearcoatNormalMap){if(p.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bt)p.clearcoatNormalScale.value.negate()}}if(g.dispersion>0)p.dispersion.value=g.dispersion;if(g.retroreflectivity>0)p.retroreflectivity.value=g.retroreflectivity;if(g.iridescence>0){if(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap)p.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,p.iridescenceMapTransform);if(g.iridescenceThicknessMap)p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(g.transmission>0){if(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap)p.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=g.thickness,g.thicknessMap)p.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)}if(g.anisotropy>0){if(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap)p.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap)p.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,p.specularColorMapTransform);if(g.specularIntensityMap)p.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,p.specularIntensityMapTransform)}function x(p,g){if(g.matcap)p.matcap.value=g.matcap}function M(p,g){let T=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function a0(e,t,n,i){let s={},r={};function a(T,E){let y=E.program;i.uniformBlockBinding(T,y,s[T.id])}function o(T,E){let y=s[T.id];if(y===void 0)x(T),y=l(T),s[T.id]=y,T.addEventListener("dispose",p);let w=E.program;i.updateUBOMapping(T,w);let I=t.render.frame;if(r[T.id]!==I)c(T),r[T.id]=I}function l(T){let E=e.createBuffer(),{__size:y,usage:w}=T;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,y,w),e.bindBuffer(e.UNIFORM_BUFFER,null),E}function c(T){let E=s[T.id],{uniforms:y,__cache:w}=T;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let I=0,m=y.length;I<m;I++){let S=y[I];if(Array.isArray(S))for(let L=0,G=S.length;L<G;L++)u(S[L],I,L,w);else u(S,I,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(T,E,y,w){if(h(T,E,y,w)===!0){let{__offset:I,value:m}=T;if(Array.isArray(m)){let S=0;for(let L=0;L<m.length;L++){let G=m[L],D=M(G,!0);d(G,T.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(m,T.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,I,T.__data)}}function d(T,E,y){if(typeof T==="number"||typeof T==="boolean")E[y]=T;else if(T.isMatrix3)E[y]=T.elements[0],E[y+1]=T.elements[1],E[y+2]=T.elements[2],E[y+3]=0,E[y+4]=T.elements[3],E[y+5]=T.elements[4],E[y+6]=T.elements[5],E[y+7]=0,E[y+8]=T.elements[6],E[y+9]=T.elements[7],E[y+10]=T.elements[8],E[y+11]=0;else if(ArrayBuffer.isView(T))E.set(T.subarray(0,E.length-y),y);else T.toArray(E,y)}function h(T,E,y,w){let I=T.value,m=E+"_"+y;if(Array.isArray(I)){if(w[m]===void 0)w[m]=[];let S=w[m],L=!1;for(let G=0;G<I.length;G++)if(f(I[G],S,G)===!0)L=!0;return L}return f(I,w,m)}function f(T,E,y){if(E[y]===void 0){if(typeof T==="number"||typeof T==="boolean")E[y]=T;else if(ArrayBuffer.isView(T))E[y]=T.slice();else E[y]=T.clone();return!0}else{let w=E[y];if(typeof T==="number"||typeof T==="boolean"){if(w!==T)return E[y]=T,!0}else if(ArrayBuffer.isView(T))return!0;else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function x(T){let E=T.uniforms,y=0,w=16;for(let m=0,S=E.length;m<S;m++){let L=Array.isArray(E[m])?E[m]:[E[m]];for(let G=0,D=L.length;G<D;G++){let B=L[G],Q=Array.isArray(B.value)?B.value:[B.value],C=Array.isArray(E[m])||Array.isArray(B.value),K=y;for(let H=0,fe=Q.length;H<fe;H++){let J=Q[H],te=M(J,C),oe=y%w,Se=oe%te.boundary,ee=oe+Se;if(y+=Se,ee!==0&&w-ee<te.storage)y+=w-ee;if(H===0)K=y;y+=te.storage}let j=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new j((y-K)/Float32Array.BYTES_PER_ELEMENT),B.__offset=K}}let I=y%w;if(I>0)y+=w-I;return T.__size=y,T.__cache={},this}function M(T,E){let y={boundary:0,storage:0};if(typeof T==="number"||typeof T==="boolean")y.boundary=4,y.storage=4;else if(T.isVector2)y.boundary=8,y.storage=8;else if(T.isVector3||T.isColor)y.boundary=16,y.storage=12;else if(T.isVector4)y.boundary=16,y.storage=16;else if(T.isMatrix3)y.boundary=16,y.storage=48;else if(T.isMatrix4)y.boundary=16,y.storage=64;else if(T.isTexture)ze("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(T))y.boundary=16,y.storage=T.byteLength;else ze("WebGLRenderer: Unsupported uniform value type.",T);if(E===!0)y.boundary=16,y.storage=Math.ceil(y.storage/16)*16;return y}function p(T){let E=T.target;E.removeEventListener("dispose",p),e.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let T in s)e.deleteBuffer(s[T]);s={},r={}}return{bind:a,update:o,dispose:g}}var o0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fn=null;function l0(){if(fn===null)fn=new Uo(o0,16,16,ti,zt),fn.name="DFG_LUT",fn.minFilter=$t,fn.magFilter=$t,fn.wrapS=Tr,fn.wrapT=Tr,fn.generateMipmaps=!1,fn.needsUpdate=!0;return fn}class hl{constructor(e={}){let{canvas:t=ah(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=an}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let x=h,M=new Set([Xa,Va,Wa]),p=new Set([an,zn,ws,ei,Ha,ka]),g=new Uint32Array(4),T=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},y=null,w=null,I=[],m=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,G=!1,D=null,B=null,Q=null,C=null;this._outputColorSpace=eh;let K=0,j=0,H=null,fe=-1,J=null,te=new St,oe=new St,Se=null,ee=new Ge(0),ae=0,{width:be,height:Ue}=t,Fe=1,ve=null,je=null,We=new St(0,0,be,Ue),Oe=new St(0,0,be,Ue),Ke=!1,ie=new Ui,de=new Br,pe=!1,Ee=!1,Te=new ft,Le=new F,Ne=new St,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function tt(){return H===null?Fe:1}let N=n;function vt(v,U){return t.getContext(v,U)}let Ve,pt,le,st,Be,ke,yt,b,_,O,re,A,k,X,P,Z,he,R,Y,V,ne,se,ce;try{let v={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${cc}`);if(t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),N===null){if(N=vt("webgl2",v),N===null)if(vt("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(v){throw t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),He("WebGLRenderer: "+v.message),v}function we(){if(Ve=new vm(N),Ve.init(),ne=new t0(N,Ve),pt=new lm(N,Ve,e,ne),le=new jg(N,Ve),pt.reversedDepthBuffer&&d)le.buffers.depth.setReversed(!0);B=N.createFramebuffer(),Q=N.createFramebuffer(),C=N.createFramebuffer(),st=new Mm(N),Be=new zg,ke=new e0(N,Ve,le,Be,pt,ne,st),yt=new xm(L),b=new bd(N),se=new am(N,b),_=new ym(N,b,st,se),O=new Tm(N,_,b,se,st),R=new bm(N,pt,ke),P=new cm(Be),re=new Bg(L,yt,Ve,pt,se,P),A=new r0(L,Be),k=new Hg,X=new Yg(Ve),he=new rm(L,yt,le,O,f,o),Z=new Qg(L,O,pt),ce=new a0(N,st,pt,le),Y=new om(N,Ve,st),V=new Sm(N,Ve,st),st.programs=re.programs,L.capabilities=pt,L.extensions=Ve,L.properties=Be,L.renderLists=k,L.shadowMap=Z,L.state=le,L.info=st}if(x!==an)S=new wm(x,t.width,t.height,a,i,s);let Ae=new ou(L,N);this.xr=Ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=Ve.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=Ve.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(v){if(v===void 0)return;Fe=v,this.setSize(be,Ue,!1)},this.getSize=function(v){return v.set(be,Ue)},this.setSize=function(v,U,q=!0){if(Ae.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}if(be=v,Ue=U,t.width=Math.floor(v*Fe),t.height=Math.floor(U*Fe),q===!0)t.style.width=v+"px",t.style.height=U+"px";if(S!==null)S.setSize(t.width,t.height);this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(be*Fe,Ue*Fe).floor()},this.setDrawingBufferSize=function(v,U,q){be=v,Ue=U,Fe=q,t.width=Math.floor(v*q),t.height=Math.floor(U*q),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(x===an){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(te)},this.getViewport=function(v){return v.copy(We)},this.setViewport=function(v,U,q,z){if(v.isVector4)We.set(v.x,v.y,v.z,v.w);else We.set(v,U,q,z);le.viewport(te.copy(We).multiplyScalar(tt()).round())},this.getScissor=function(v){return v.copy(Oe)},this.setScissor=function(v,U,q,z){if(v.isVector4)Oe.set(v.x,v.y,v.z,v.w);else Oe.set(v,U,q,z);le.scissor(oe.copy(Oe).multiplyScalar(tt()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(v){le.setScissorTest(Ke=v)},this.setOpaqueSort=function(v){ve=v},this.setTransparentSort=function(v){je=v},this.getClearColor=function(v){return v.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,q=!0){let z=0;if(v){let W=!1;if(H!==null){let ge=H.texture.format;W=M.has(ge)}if(W){let ge=H.texture.type,Re=p.has(ge),me=he.getClearColor(),Me=he.getClearAlpha(),{r:Pe,g:qe,b:nt}=me;if(Re)g[0]=Pe,g[1]=qe,g[2]=nt,g[3]=Me,N.clearBufferuiv(N.COLOR,0,g);else T[0]=Pe,T[1]=qe,T[2]=nt,T[3]=Me,N.clearBufferiv(N.COLOR,0,T)}else z|=N.COLOR_BUFFER_BIT}if(U)z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(q)z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(z!==0)N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),D=v},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),he.dispose(),k.dispose(),X.dispose(),ke.dispose(),Be.dispose(),yt.dispose(),O.dispose(),_.dispose(),se.dispose(),ce.dispose(),re.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",_l),Ae.removeEventListener("sessionend",xl),Xn.stop()};function _e(v){v.preventDefault(),hs("WebGLRenderer: Context Lost."),G=!0}function De(){hs("WebGLRenderer: Context Restored."),G=!1;let v=st.autoReset,U=Z.enabled,q=Z.autoUpdate,z=Z.needsUpdate,W=Z.type;we(),st.autoReset=v,Z.enabled=U,Z.autoUpdate=q,Z.needsUpdate=z,Z.type=W}function Ye(v){He("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function xe(v){let U=v.target;U.removeEventListener("dispose",xe),at(U)}function at(v){gt(v),Be.remove(v)}function gt(v){let U=Be.get(v).programs;if(U!==void 0){if(U.forEach(function(q){re.releaseProgram(q)}),v.isShaderMaterial)re.releaseShaderCache(v)}}this.renderBufferDirect=function(v,U,q,z,W,ge){if(U===null)U=Je;let Re=W.isMesh&&W.matrixWorld.determinantAffine()<0,me=du(v,U,q,z,W);le.setMaterial(z,Re);let Me=q.index,Pe=1;if(z.wireframe===!0){if(Me=_.getWireframeAttribute(q),Me===void 0)return;Pe=2}let qe=q.drawRange,nt=q.attributes.position,Ce=qe.start*Pe,it=(qe.start+qe.count)*Pe;if(ge!==null)Ce=Math.max(Ce,ge.start*Pe),it=Math.min(it,(ge.start+ge.count)*Pe);if(Me!==null)Ce=Math.max(Ce,0),it=Math.min(it,Me.count);else if(nt!==void 0&&nt!==null)Ce=Math.max(Ce,0),it=Math.min(it,nt.count);let bt=it-Ce;if(bt<0||bt===1/0)return;se.setup(W,z,me,q,Me);let dt,ut=Y;if(Me!==null)dt=b.get(Me),ut=V,ut.setIndex(dt);if(W.isMesh)if(z.wireframe===!0)le.setLineWidth(z.wireframeLinewidth*tt()),ut.setMode(N.LINES);else ut.setMode(N.TRIANGLES);else if(W.isLine){let Dt=z.linewidth;if(Dt===void 0)Dt=1;if(le.setLineWidth(Dt*tt()),W.isLineSegments)ut.setMode(N.LINES);else if(W.isLineLoop)ut.setMode(N.LINE_LOOP);else ut.setMode(N.LINE_STRIP)}else if(W.isPoints)ut.setMode(N.POINTS);else if(W.isSprite)ut.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(!Ve.get("WEBGL_multi_draw")){let{_multiDrawStarts:Dt,_multiDrawCounts:Ie,_multiDrawCount:Ht}=W,ot=Me?b.get(Me).bytesPerElement:1,qn=Be.get(z).currentProgram.getUniforms();for(let Ut=0;Ut<Ht;Ut++)qn.setValue(N,"_gl_DrawID",Ut),ut.render(Dt[Ut]/ot,Ie[Ut])}else ut.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ut.renderInstances(Ce,bt,W.count);else if(q.isInstancedBufferGeometry){let Dt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,Dt);ut.renderInstances(Ce,bt,Ie)}else ut.render(Ce,bt)};function en(v,U,q,z){if(D!==null&&v.isNodeMaterial)D.setObject(z,v);if(pe===!0)P.setState(v,q,!1);if(v.transparent===!0&&v.side===Jt&&v.forceSinglePass===!1)v.side=Bt,v.needsUpdate=!0,$i(v,U,z),v.side=Bi,v.needsUpdate=!0,$i(v,U,z),v.side=Jt;else $i(v,U,z)}this.compile=function(v,U,q=null){if(q===null)q=v;if(D!==null)D.renderStart(v,U,q);if(w=X.get(q),w.init(U),m.push(w),q.traverseVisible(function(W){if(W.isLight&&W.layers.test(U.layers)){if(w.pushLight(W),W.castShadow)w.pushShadow(W)}}),v!==q)v.traverseVisible(function(W){if(W.isLight&&W.layers.test(U.layers)){if(w.pushLight(W),W.castShadow)w.pushShadow(W)}});if(w.setupLights(),D!==null)D.updateLights(w.state.lightsArray);if(Ee=this.localClippingEnabled,pe=P.init(this.clippingPlanes,Ee),pe===!0)P.setGlobalState(this.clippingPlanes,U);if(D!==null)Z.render(w.state.shadowsArray,q,U);let z=new Set;if(v.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ge=W.material;if(ge)if(Array.isArray(ge))for(let Re=0;Re<ge.length;Re++){let me=ge[Re];en(me,q,U,W),z.add(me)}else en(ge,q,U,W),z.add(ge)}),w=m.pop(),D!==null)D.renderEnd();return z},this.compileAsync=function(v,U,q=null){let z=this.compile(v,U,q);return new Promise((W)=>{function ge(){if(z.forEach(function(Re){let Me=Be.get(Re).currentProgram;if(Me===void 0||Me.isReady())z.delete(Re)}),z.size===0){W(v);return}setTimeout(ge,10)}if(Ve.get("KHR_parallel_shader_compile")!==null)ge();else setTimeout(ge,10)})};let Ji=null;function mi(v){if(Ji)Ji(v)}function _l(){Xn.stop()}function xl(){Xn.start()}let Xn=new Xh;if(Xn.setAnimationLoop(mi),typeof self<"u")Xn.setContext(self);this.setAnimationLoop=function(v){Ji=v,Ae.setAnimationLoop(v),v===null?Xn.stop():Xn.start()},Ae.addEventListener("sessionstart",_l),Ae.addEventListener("sessionend",xl),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(D!==null)D.renderStart(v,U);let q=Ae.enabled===!0&&Ae.isPresenting===!0,z=S!==null&&(H===null||q)&&S.begin(L,H);if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(U.parent===null&&U.matrixWorldAutoUpdate===!0)U.updateMatrixWorld();if(Ae.enabled===!0&&Ae.isPresenting===!0&&(S===null||S.isCompositing()===!1)){if(Ae.cameraAutoUpdate===!0)Ae.updateCamera(U);U=Ae.getCamera()}if(v.isScene===!0)v.onBeforeRender(L,v,U,H);if(w=X.get(v,m.length),w.init(U),w.state.textureUnits=ke.getTextureUnits(),m.push(w),Te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera)de.setFromArrayCamera(U);else ie.setFromProjectionMatrix(Te,Io,U.reversedDepth);if(Ee=this.localClippingEnabled,pe=P.init(this.clippingPlanes,Ee),y=k.get(v,I.length),y.init(),I.push(y),this.info.render.frame++,Ae.enabled===!0&&Ae.isPresenting===!0){let Re=L.xr.getDepthSensingMesh();if(Re!==null)ra(Re,U,-1/0,L.sortObjects)}if(ra(v,U,0,L.sortObjects),y.finish(),D!==null)D.updateLights(w.state.lightsArray);if(L.sortObjects===!0)y.sort(ve,je);if(Ze=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Ze)he.addToRenderList(y,v);if(this.info.autoReset===!0)this.info.reset();if(pe===!0)P.beginShadows();let W=w.state.shadowsArray;if(Z.render(W,v,U),pe===!0)P.endShadows();if((z&&S.hasRenderPass())===!1){let Re=y.opaque,me=y.transmissive;if(w.setupLights(),U.isArrayCamera){let Me=U.cameras;if(me.length>0)for(let Pe=0,qe=Me.length;Pe<qe;Pe++){let nt=Me[Pe];yl(Re,me,v,nt)}if(Ze)he.render(v);for(let Pe=0,qe=Me.length;Pe<qe;Pe++){let nt=Me[Pe];vl(y,v,nt,nt.viewport)}}else{if(me.length>0)yl(Re,me,v,U);if(Ze)he.render(v);vl(y,v,U)}}if(H!==null&&j===0)ke.updateMultisampleRenderTarget(H),ke.updateRenderTargetMipmap(H);if(z)S.end(L);if(v.isScene===!0)v.onAfterRender(L,v,U);if(se.resetDefaultState(),fe=-1,J=null,m.pop(),m.length>0){if(w=m[m.length-1],ke.setTextureUnits(w.state.textureUnits),pe===!0)P.setGlobalState(L.clippingPlanes,w.state.camera)}else w=null;if(I.pop(),I.length>0)y=I[I.length-1];else y=null;if(D!==null)D.renderEnd()};function ra(v,U,q,z){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(U)}else if(v.isLight){if(w.pushLight(v),v.castShadow)w.pushShadow(v)}else if(v.isSprite){let Re=U.isArrayCamera?de:ie;if(!v.frustumCulled||v.intersectsFrustum(Re)){if(z)Ne.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Te);let me=O.update(v),Me=v.material;if(Me.visible)y.push(v,me,Me,q,Ne.z,null,U)}}else if(v.isMesh||v.isLine||v.isPoints){let Re=U.isArrayCamera?de:ie;if(!v.frustumCulled||v.intersectsFrustum(Re)){let me=O.update(v),Me=v.material;if(z){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();Ne.copy(v.boundingSphere.center)}else{if(me.boundingSphere===null)me.computeBoundingSphere();Ne.copy(me.boundingSphere.center)}Ne.applyMatrix4(v.matrixWorld).applyMatrix4(Te)}if(Array.isArray(Me)){let Pe=me.groups;for(let qe=0,nt=Pe.length;qe<nt;qe++){let Ce=Pe[qe],it=Me[Ce.materialIndex];if(it&&it.visible)y.push(v,me,it,q,Ne.z,Ce,U)}}else if(Me.visible)y.push(v,me,Me,q,Ne.z,null,U)}}}let ge=v.children;for(let Re=0,me=ge.length;Re<me;Re++)ra(ge[Re],U,q,z)}function vl(v,U,q,z){let{opaque:W,transmissive:ge,transparent:Re}=v;if(w.setupLightsView(q),pe===!0)P.setGlobalState(L.clippingPlanes,q);if(z)le.viewport(te.copy(z));if(W.length>0)Hs(W,U,q);if(ge.length>0)Hs(ge,U,q);if(Re.length>0)Hs(Re,U,q);le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function yl(v,U,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Ce=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new It(1,1,{generateMipmaps:!0,type:Ce?zt:an,minFilter:Bn,samples:Math.max(4,pt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let ge=w.state.transmissionRenderTarget[z.id],Re=z.viewport||te;ge.setSize(Re.z*L.transmissionResolutionScale,Re.w*L.transmissionResolutionScale);let me=L.getRenderTarget(),Me=L.getActiveCubeFace(),Pe=L.getActiveMipmapLevel();if(L.setRenderTarget(ge),L.getClearColor(ee),ae=L.getClearAlpha(),ae<1)L.setClearColor(16777215,0.5);if(L.clear(),Ze)he.render(q);let qe=L.toneMapping;L.toneMapping=un;let nt=z.viewport;if(z.viewport!==void 0)z.viewport=void 0;if(w.setupLightsView(z),pe===!0)P.setGlobalState(L.clippingPlanes,z);if(Hs(v,q,z),ke.updateMultisampleRenderTarget(ge),ke.updateRenderTargetMipmap(ge),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let it=0,bt=U.length;it<bt;it++){let dt=U[it],{object:ut,geometry:Dt,material:Ie,group:Ht}=dt;if(Ie.side===Jt&&ut.layers.test(z.layers)){let ot=Ie.side;Ie.side=Bt,Ie.needsUpdate=!0,Sl(ut,q,z,Dt,Ie,Ht),Ie.side=ot,Ie.needsUpdate=!0,Ce=!0}}if(Ce===!0)ke.updateMultisampleRenderTarget(ge),ke.updateRenderTargetMipmap(ge)}if(L.setRenderTarget(me,Me,Pe),L.setClearColor(ee,ae),nt!==void 0)z.viewport=nt;L.toneMapping=qe}function Hs(v,U,q){let z=U.isScene===!0?U.overrideMaterial:null;for(let W=0,ge=v.length;W<ge;W++){let Re=v[W],{object:me,geometry:Me,group:Pe}=Re,qe=Re.material;if(qe.allowOverride===!0&&z!==null)qe=z;if(me.layers.test(q.layers))Sl(me,U,q,Me,qe,Pe)}}function Sl(v,U,q,z,W,ge){if(D!==null&&W.isNodeMaterial)D.setObject(v,W);if(v.onBeforeRender(L,U,q,z,W,ge),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),W.onBeforeRender(L,U,q,z,v,ge),W.transparent===!0&&W.side===Jt&&W.forceSinglePass===!1)W.side=Bt,W.needsUpdate=!0,L.renderBufferDirect(q,U,z,W,v,ge),W.side=Bi,W.needsUpdate=!0,L.renderBufferDirect(q,U,z,W,v,ge),W.side=Jt;else L.renderBufferDirect(q,U,z,W,v,ge);v.onAfterRender(L,U,q,z,W,ge)}function Ml(v){let U=0;for(let q of v)if(q.texture!==null)U++;return U}function $i(v,U,q){if(U.isScene!==!0)U=Je;let z=Be.get(v),W=w.state.lights,ge=w.state.shadowsArray,Re=W.state.version,me=re.getParameters(v,W.state,ge,U,q,w.state.lightProbeGridArray),Me=re.getProgramCacheKey(me),Pe=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let qe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(z.envMap=yt.get(v.envMap||z.environment,qe),z.envMapRotation=z.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Pe===void 0)v.addEventListener("dispose",xe),Pe=new Map,z.programs=Pe,z.programVariants=new Map;let nt=Pe.get(Me);if(nt!==void 0){if(z.currentProgram===nt&&z.lightsStateVersion===Re)return Tl(v,me),nt}else{if(me.uniforms=re.getUniforms(v),D!==null&&v.isNodeMaterial)D.build(v,q,me);v.onBeforeCompile(me,L),nt=re.acquireProgram(me,Me),Pe.set(Me,nt),z.uniforms=me.uniforms}let Ce=z.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)Ce.clippingPlanes=P.uniform;if(Tl(v,me),z.needsLights=pu(v),z.lightsStateVersion=Re,z.needsLights)Ce.ambientLightColor.value=W.state.ambient,Ce.lightProbe.value=W.state.probe,Ce.sunLights.value=W.state.sun,Ce.sunLightShadows.value=W.state.sunShadow,Ce.directionalLights.value=W.state.directional,Ce.directionalLightShadows.value=W.state.directionalShadow,Ce.spotLights.value=W.state.spot,Ce.spotLightShadows.value=W.state.spotShadow,Ce.rectAreaLights.value=W.state.rectArea,Ce.ltc_1.value=W.state.rectAreaLTC1,Ce.ltc_2.value=W.state.rectAreaLTC2,Ce.pointLights.value=W.state.point,Ce.pointLightShadows.value=W.state.pointShadow,Ce.hemisphereLights.value=W.state.hemi,Ce.sunShadowMatrix.value=W.state.sunShadowMatrix,Ce.sunShadowCascade.value=W.state.sunShadowCascade,Ce.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ce.spotLightMatrix.value=W.state.spotLightMatrix,Ce.spotLightMap.value=W.state.spotLightMap,Ce.pointShadowMatrix.value=W.state.pointShadowMatrix;return z.numLightProbeGrids=Ml(w.state.lightProbeGridArray),z.currentProgram=nt,z.uniformsList=null,nt}function uu(v,U,q,z,W){let ge=Be.get(v),Re=ge.currentProgram.id+","+z+","+W,me=ge.programVariants.get(Re);if(me===void 0)me=$i(v,U,q),ge.programVariants.set(Re,me);else ge.currentProgram=me,ge.uniformsList=null,ge.outputColorSpace=z,ge.toneMapping=W;return me}function bl(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=Bs.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Tl(v,U){let q=Be.get(v);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function du(v,U,q,z,W){if(U.isScene!==!0)U=Je;ke.resetTextureUnits();let ge=U.fog,Re=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,me=H===null?L.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Qe.workingColorSpace,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Pe=yt.get(z.envMap||Re,Me),qe=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,nt=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!q.morphAttributes.position,it=!!q.morphAttributes.normal,bt=!!q.morphAttributes.color,dt=un;if(z.toneMapped){if(H===null||H.isXRRenderTarget===!0)dt=L.toneMapping}let ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Dt=ut!==void 0?ut.length:0,Ie=Be.get(z),Ht=w.state.lights;if(pe===!0){if(Ee===!0||v!==J){let _t=v===J&&z.id===fe;P.setState(z,v,_t)}}let ot=!1,qn=!1;if(z.version===Ie.__version){if(Ie.needsLights&&Ie.lightsStateVersion!==Ht.state.version)ot=!0;else if(W.isBatchedMesh&&Ie.batching===!1)ot=!0;else if(!W.isBatchedMesh&&Ie.batching===!0)ot=!0;else if(W.isBatchedMesh&&Ie.batchingColor===!0&&W._colorsTexture===null)ot=!0;else if(W.isBatchedMesh&&Ie.batchingColor===!1&&W._colorsTexture!==null)ot=!0;else if(W.isInstancedMesh&&Ie.instancing===!1)ot=!0;else if(!W.isInstancedMesh&&Ie.instancing===!0)ot=!0;else if(W.isSkinnedMesh&&Ie.skinning===!1)ot=!0;else if(!W.isSkinnedMesh&&Ie.skinning===!0)ot=!0;else if(W.isInstancedMesh&&Ie.instancingColor===!0&&W.instanceColor===null)ot=!0;else if(W.isInstancedMesh&&Ie.instancingColor===!1&&W.instanceColor!==null)ot=!0;else if(W.isInstancedMesh&&Ie.instancingMorph===!0&&W.morphTexture===null)ot=!0;else if(W.isInstancedMesh&&Ie.instancingMorph===!1&&W.morphTexture!==null)ot=!0;else if(Ie.envMap!==Pe)ot=!0;else if(z.fog===!0&&Ie.fog!==ge)ot=!0;else if(Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==P.numPlanes||Ie.numIntersection!==P.numIntersection))ot=!0;else if(Ie.vertexAlphas!==qe)ot=!0;else if(Ie.vertexTangents!==nt)ot=!0;else if(Ie.morphTargets!==Ce)ot=!0;else if(Ie.morphNormals!==it)ot=!0;else if(Ie.morphColors!==bt)ot=!0;else if(Ie.morphTargetsCount!==Dt)ot=!0;else if(Ie.numLightProbeGrids!==Ml(w.state.lightProbeGridArray))ot=!0;else if(Ie.outputColorSpace!==me||Ie.toneMapping!==dt)qn=!0}else ot=!0,Ie.__version=z.version;let Ut=Ie.currentProgram;if(ot===!0||qn===!0){if(Ut=qn===!0?uu(z,U,W,me,dt):$i(z,U,W),D&&z.isNodeMaterial)D.onUpdateProgram(z,Ut,Ie)}let ks=!1,In=!1,Yn=!1,rt=Ut.getUniforms(),Pt=Ie.uniforms;if(le.useProgram(Ut.program))ks=!0,In=!0,Yn=!0;if(z.id!==fe)fe=z.id,In=!0;if(ks||J!==v){if(le.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();rt.setValue(N,"projectionMatrix",v.projectionMatrix),rt.setValue(N,"viewMatrix",v.matrixWorldInverse);let Rt=rt.map.cameraPosition;if(Rt!==void 0)Rt.setValue(N,Le.setFromMatrixPosition(v.matrixWorld));if(pt.logarithmicDepthBuffer)rt.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)rt.setValue(N,"isOrthographic",v.isOrthographicCamera===!0);if(J!==v)J=v,In=!0,Yn=!0}if(Ie.needsLights){if(Ht.state.sunShadowMap.length>0)rt.setValue(N,"sunShadowMap",Ht.state.sunShadowMap,ke);if(Ht.state.directionalShadowMap.length>0)rt.setValue(N,"directionalShadowMap",Ht.state.directionalShadowMap,ke);if(Ht.state.spotShadowMap.length>0)rt.setValue(N,"spotShadowMap",Ht.state.spotShadowMap,ke);if(Ht.state.pointShadowMap.length>0)rt.setValue(N,"pointShadowMap",Ht.state.pointShadowMap,ke)}if(W.isSkinnedMesh){rt.setOptional(N,W,"bindMatrix"),rt.setOptional(N,W,"bindMatrixInverse");let _t=W.skeleton;if(_t){if(_t.boneTexture===null)_t.computeBoneTexture();rt.setValue(N,"boneTexture",_t.boneTexture,ke)}}if(W.isBatchedMesh){if(rt.setOptional(N,W,"batchingTexture"),rt.setValue(N,"batchingTexture",W._matricesTexture,ke),rt.setOptional(N,W,"batchingIdTexture"),rt.setValue(N,"batchingIdTexture",W._indirectTexture,ke),rt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null)rt.setValue(N,"batchingColorTexture",W._colorsTexture,ke)}let tn=q.morphAttributes;if(tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)R.update(W,q,Ut);if(In||Ie.receiveShadow!==W.receiveShadow)Ie.receiveShadow=W.receiveShadow,rt.setValue(N,"receiveShadow",W.receiveShadow);if((z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null)Pt.envMapIntensity.value=U.environmentIntensity;if(Pt.dfgLUT!==void 0)Pt.dfgLUT.value=l0();if(In){if(rt.setValue(N,"toneMappingExposure",L.toneMappingExposure),Ie.needsLights)fu(Pt,Yn);if(ge&&z.fog===!0)A.refreshFogUniforms(Pt,ge);if(A.refreshMaterialUniforms(Pt,z,Fe,Ue,w.state.transmissionRenderTarget[v.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let _t=E,Rt=0;for(let mn of w.state.lightProbeGridArray){if(mn.texture===null)continue;_t.textures[Rt]=mn.texture,_t.min[Rt]=mn.boundingBox.min,_t.max[Rt]=mn.boundingBox.max,_t.resolution[Rt]=mn.resolution,Rt++}for(let mn in _t)_t[mn].length=Rt;Pt.probesSH.value=_t.textures,Pt.probesMin.value=_t.min,Pt.probesMax.value=_t.max,Pt.probesResolution.value=_t.resolution}Bs.upload(N,bl(Ie),Pt,ke)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0)Bs.upload(N,bl(Ie),Pt,ke),z.uniformsNeedUpdate=!1;if(z.isSpriteMaterial)rt.setValue(N,"center",W.center);if(rt.setValue(N,"modelViewMatrix",W.modelViewMatrix),rt.setValue(N,"normalMatrix",W.normalMatrix),rt.setValue(N,"modelMatrix",W.matrixWorld),z.uniformsGroups!==void 0){let _t=z.uniformsGroups;for(let Rt=0,mn=_t.length;Rt<mn;Rt++){let wl=_t[Rt];ce.update(wl,Ut),ce.bind(wl,Ut)}}return Ut}function fu(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.sunLights.needsUpdate=U,v.sunLightShadows.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function pu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(v,U,q){let z=Be.get(v);if(z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1)z.__useRenderToTexture=!1;Be.get(v.texture).__webglTexture=U,Be.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let q=Be.get(v);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,q=0){H=v,K=U,j=q;let z=null,W=!1,ge=!1;if(v){let me=Be.get(v);if(me.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),te.copy(v.viewport),oe.copy(v.scissor),Se=v.scissorTest,le.viewport(te),le.scissor(oe),le.setScissorTest(Se),fe=-1;return}else if(me.__webglFramebuffer===void 0)ke.setupRenderTarget(v);else if(me.__hasExternalTextures)ke.rebindTextures(v,Be.get(v.texture).__webglTexture,Be.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let qe=v.depthTexture;if(me.__boundDepthTexture!==qe){if(qe!==null&&Be.has(qe)&&(v.width!==qe.image.width||v.height!==qe.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(v)}}let Me=v.texture;if(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)ge=!0;let Pe=Be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(Pe[U]))z=Pe[U][q];else z=Pe[U];W=!0}else if(v.samples>0&&ke.useMultisampledRTT(v)===!1)z=Be.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(Pe))z=Pe[q];else z=Pe;te.copy(v.viewport),oe.copy(v.scissor),Se=v.scissorTest}else te.copy(We).multiplyScalar(Fe).floor(),oe.copy(Oe).multiplyScalar(Fe).floor(),Se=Ke;if(q!==0)z=B;if(le.bindFramebuffer(N.FRAMEBUFFER,z))le.drawBuffers(v,z);if(le.viewport(te),le.scissor(oe),le.setScissorTest(Se),W){let me=Be.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,q)}else if(ge){let me=U;for(let Me=0;Me<v.textures.length;Me++){let Pe=Be.get(v.textures[Me]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Me,Pe.__webglTexture,q,me)}}else if(v!==null&&q!==0){let me=Be.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,q)}fe=-1};function El(v){let U=Be.get(v);if(U.__readFormat!==v.format||U.__readType!==v.type)U.__readFormat=v.format,U.__readType=v.type,U.__formatReadable=pt.textureFormatReadable(v.format),U.__typeReadable=pt.textureTypeReadable(v.type);return U}if(this.readRenderTargetPixels=function(v,U,q,z,W,ge,Re,me=0){if(!(v&&v.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Re!==void 0){if(Me=Me[Re],Array.isArray(Me))Me=Me[0]}if(Me){le.bindFramebuffer(N.FRAMEBUFFER,Me);try{let Pe=v.textures[me],{format:qe,type:nt}=Pe;if(v.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+me);let Ce=El(Pe);if(Ce.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(U>=0&&U<=v.width-z&&(q>=0&&q<=v.height-W))N.readPixels(U,q,z,W,ne.convert(qe),ne.convert(nt),ge)}finally{let Pe=H!==null?Be.get(H).__webglFramebuffer:null;le.bindFramebuffer(N.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(v,U,q,z,W,ge,Re,me=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Re!==void 0){if(Me=Me[Re],Array.isArray(Me))Me=Me[0]}if(Me)if(U>=0&&U<=v.width-z&&(q>=0&&q<=v.height-W)){le.bindFramebuffer(N.FRAMEBUFFER,Me);let Pe=v.textures[me],{format:qe,type:nt}=Pe;if(v.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+me);let Ce=El(Pe);if(Ce.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,it),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(U,q,z,W,ne.convert(qe),ne.convert(nt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let bt=H!==null?Be.get(H).__webglFramebuffer:null;le.bindFramebuffer(N.FRAMEBUFFER,bt);let dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await lh(N,dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,it),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(it),N.deleteSync(dt),ge}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,q=0){let z=Math.pow(2,-q),W=Math.floor(v.image.width*z),ge=Math.floor(v.image.height*z),Re=U!==null?U.x:0,me=U!==null?U.y:0;ke.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Re,me,W,ge),le.unbindTexture()},this.copyTextureToTexture=function(v,U,q=null,z=null,W=0,ge=0){let Re,me,Me,Pe,qe,nt,Ce,it,bt,dt=v.isCompressedTexture?v.mipmaps[ge]:v.image;if(q!==null)Re=q.max.x-q.min.x,me=q.max.y-q.min.y,Me=q.isBox3?q.max.z-q.min.z:1,Pe=q.min.x,qe=q.min.y,nt=q.isBox3?q.min.z:0;else{let rt=Math.pow(2,-W);if(Re=Math.floor(dt.width*rt),me=Math.floor(dt.height*rt),v.isDataArrayTexture)Me=dt.depth;else if(v.isData3DTexture)Me=Math.floor(dt.depth*rt);else Me=1;Pe=0,qe=0,nt=0}if(z!==null)Ce=z.x,it=z.y,bt=z.z;else Ce=0,it=0,bt=0;let ut=ne.convert(U.format),Dt=ne.convert(U.type),Ie;if(U.isData3DTexture)ke.setTexture3D(U,0),Ie=N.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)ke.setTexture2DArray(U,0),Ie=N.TEXTURE_2D_ARRAY;else ke.setTexture2D(U,0),Ie=N.TEXTURE_2D;le.activeTexture(N.TEXTURE0),le.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),le.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),le.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Ht=le.getParameter(N.UNPACK_ROW_LENGTH),ot=le.getParameter(N.UNPACK_IMAGE_HEIGHT),qn=le.getParameter(N.UNPACK_SKIP_PIXELS),Ut=le.getParameter(N.UNPACK_SKIP_ROWS),ks=le.getParameter(N.UNPACK_SKIP_IMAGES);le.pixelStorei(N.UNPACK_ROW_LENGTH,dt.width),le.pixelStorei(N.UNPACK_IMAGE_HEIGHT,dt.height),le.pixelStorei(N.UNPACK_SKIP_PIXELS,Pe),le.pixelStorei(N.UNPACK_SKIP_ROWS,qe),le.pixelStorei(N.UNPACK_SKIP_IMAGES,nt);let In=v.isDataArrayTexture||v.isData3DTexture,Yn=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let rt=Be.get(v),Pt=Be.get(U),tn=Be.get(rt.__renderTarget),_t=Be.get(Pt.__renderTarget);le.bindFramebuffer(N.READ_FRAMEBUFFER,tn.__webglFramebuffer),le.bindFramebuffer(N.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Rt=0;Rt<Me;Rt++){if(In)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(v).__webglTexture,W,nt+Rt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(U).__webglTexture,ge,bt+Rt);N.blitFramebuffer(Pe,qe,Pe+Re,qe+me,Ce,it,Ce+Re,it+me,N.DEPTH_BUFFER_BIT,N.NEAREST)}le.bindFramebuffer(N.READ_FRAMEBUFFER,null),le.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||v.isRenderTargetTexture||Be.has(v)){let rt=Be.get(v),Pt=Be.get(U);le.bindFramebuffer(N.READ_FRAMEBUFFER,Q),le.bindFramebuffer(N.DRAW_FRAMEBUFFER,C);for(let tn=0;tn<Me;tn++){if(In)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rt.__webglTexture,W,nt+tn);else N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,rt.__webglTexture,W);if(Yn)N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.__webglTexture,ge,bt+tn);else N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pt.__webglTexture,ge);if(W!==0)N.blitFramebuffer(Pe,qe,Pe+Re,qe+me,Ce,it,Ce+Re,it+me,N.COLOR_BUFFER_BIT,N.NEAREST);else if(Yn)N.copyTexSubImage3D(Ie,ge,Ce,it,bt+tn,Pe,qe,Re,me);else N.copyTexSubImage2D(Ie,ge,Ce,it,Pe,qe,Re,me)}le.bindFramebuffer(N.READ_FRAMEBUFFER,null),le.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Yn)if(v.isDataTexture||v.isData3DTexture)N.texSubImage3D(Ie,ge,Ce,it,bt,Re,me,Me,ut,Dt,dt.data);else if(U.isCompressedArrayTexture)N.compressedTexSubImage3D(Ie,ge,Ce,it,bt,Re,me,Me,ut,dt.data);else N.texSubImage3D(Ie,ge,Ce,it,bt,Re,me,Me,ut,Dt,dt);else if(v.isDataTexture)N.texSubImage2D(N.TEXTURE_2D,ge,Ce,it,Re,me,ut,Dt,dt.data);else if(v.isCompressedTexture)N.compressedTexSubImage2D(N.TEXTURE_2D,ge,Ce,it,dt.width,dt.height,ut,dt.data);else N.texSubImage2D(N.TEXTURE_2D,ge,Ce,it,Re,me,ut,Dt,dt);if(le.pixelStorei(N.UNPACK_ROW_LENGTH,Ht),le.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),le.pixelStorei(N.UNPACK_SKIP_PIXELS,qn),le.pixelStorei(N.UNPACK_SKIP_ROWS,Ut),le.pixelStorei(N.UNPACK_SKIP_IMAGES,ks),ge===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0)N.generateMipmap(Ie);le.unbindTexture()},this.initRenderTarget=function(v){if(Be.get(v).__webglFramebuffer===void 0)ke.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)ke.setTextureCube(v,0);else if(v.isData3DTexture)ke.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)ke.setTexture2DArray(v,0);else ke.setTexture2D(v,0);le.unbindTexture()},this.resetState=function(){K=0,j=0,H=null,le.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Io}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}var Yi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class jt{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var h0=new Ds(-1,1,1,-1,0,1);class cu extends Mt{constructor(){super();this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}}var u0=new cu;class fi{constructor(e){this._mesh=new ht(u0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,h0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ul extends jt{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof Et)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=Cn.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new fi(this.material)}render(e,t,n){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=n.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class sa extends jt{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;if(this.inverse)r=0,a=1;else r=1,a=0;if(s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class dl extends jt{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fl{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ue);this._width=n.width,this._height=n.height,t=new It(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ul(Yi),this.copyPass.material.blending=bn,this.timer=new $r}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled===!1)continue;if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let a=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}if(sa!==void 0){if(r instanceof sa)n=!0;else if(r instanceof dl)n=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pl extends jt{constructor(e,t,n=null,i=null,s=null){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ge}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,r;if(this.overrideMaterial!==null)r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(s);if(this.overrideMaterial!==null)this.scene.overrideMaterial=r;e.autoClear=i}}var hu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class pi extends jt{constructor(e,t=1,n,i){super();this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new It(s,r,{type:zt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let u=new It(s,r,{type:zt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new It(s,r,{type:zt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}let a=hu;this.highPassUniforms=Cn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ue(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Cn.clone(Yi.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:Yi.vertexShader,fragmentShader:Yi.fragmentShader,premultipliedAlpha:!0,blending:hn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ge,this._oldClearAlpha=1,this._basic=new on,this._fsQuad=new fi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),s)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[o].uniforms.direction.value=pi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=pi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[o];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(n),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(0.39894*Math.exp(-0.5*r*r/(n*n))/n);let i=[],s=[];for(let r=1;r<e;r+=2){let a=t[r],o=r+1<e?t[r+1]:0,l=a+o;i.push((r*a+(r+1)*o)/l),s.push(l)}return new Et({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new ue(0.5,0.5)},direction:{value:new ue(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}pi.BlurDirectionX=new ue(1,0);pi.BlurDirectionY=new ue(0,1);var Gs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ml extends jt{constructor(){super();this.isOutputPass=!0,this.uniforms=Cn.clone(Gs.uniforms),this.material=new Ns({name:Gs.name,uniforms:this.uniforms,vertexShader:Gs.vertexShader,fragmentShader:Gs.fragmentShader}),this._fsQuad=new fi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){if(this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===ct)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===_s)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===xs)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===vs)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===ys)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===Ms)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===bs)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===Ss)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var Vn=document.getElementById("panel"),gl=document.getElementById("msg"),d0=document.getElementById("scene"),f0=document.getElementById("labels"),Zi;try{Zi=new hl({canvas:d0,antialias:!0,powerPreference:"high-performance"})}catch{gl.textContent="เบราว์เซอร์นี้ไม่รองรับ WebGL"}if(Zi){let J=function(A,k="lotus",X="none"){let P=new Sn,{top:Z,rx:he,rz:R,cx:Y=0}=(fe[k]??fe.lotus)(P,A),V=new ht(E,w);V.position.set(Y,Z+0.175,0),P.add(V);let ne=new ri(new kn({map:o,color:"#ffb14a",blending:hn,depthWrite:!1}));if(ne.position.set(Y,Z+0.48,0),ne.scale.setScalar(0.9),P.add(ne),P.userData.flame=ne,X==="flower"||X==="both")for(let se=0;se<8;se++){let ce=se/8*Math.PI*2,we=new ht(B.flower,K);we.position.set(Math.cos(ce)*he,Z+0.02,Math.sin(ce)*R),P.add(we)}if(X==="incense"||X==="both")for(let se=0;se<3;se++){let ce=se/3*Math.PI*2+0.5,we=new Sn;we.position.set(Y+Math.cos(ce)*0.12,Z,Math.sin(ce)*0.12),we.rotation.set(Math.sin(ce)*0.35,0,-Math.cos(ce)*0.35),we.add(new ht(B.stick,j));let Ae=new ri(new kn({map:o,color:"#ff3b1f",blending:hn,depthWrite:!1}));Ae.position.y=0.75,Ae.scale.setScalar(0.2),we.add(Ae),P.add(we)}return P},ee=function(A,k){if(oe.has(A.id))return;oe.add(A.id);let X=J(A.color,A.model,A.deco);e.add(X);let P=document.createElement("div");P.className="lbl",P.textContent=A.name+": "+A.wish,f0.appendChild(P),te.push({g:X,label:P,born:k?performance.now():-1e9,x:k?-4:(Se(A.id,1)-0.5)*90,z:k?1:-3-Se(A.id,2)*22,v:0.35+Se(A.id,3)*0.45,ph:Se(A.id,4)*6.28,spin:(Se(A.id,5)-0.5)*0.15})},st=function(){let A=Ee(),k=de(Le.sunrise),X=de(Le.sunset),P=A>=k&&A<=X,Z=Math.min(Math.abs(A-k),Math.abs(A-X)),he=P?Math.min(A-k,X-A):-Z,R=Te(-25,35,he),Y=Math.max(0,1-Z/55),V=Ne[ie.get("w")]??{},ne={...Le,...V},se=ne.code>=95?1:ne.code>=80?0.8:ne.code>=61?0.7:ne.code>=51?0.3:0,ce=Math.min(1,Math.max(ne.cloud/100,se?0.8:0,ne.code===45||ne.code===48?0.9:0));Object.assign(s,{dayK:R,cloud:ce,rain:se,amp:Math.min(2.6,0.6+ne.wind/12+(ne.code>=95?0.5:0)),drift:0.6+ne.wind/15});let we=le("#02040f").lerp(le("#2f6fd0"),R),Ae=le("#1b2a63").lerp(le("#a9d6ff"),R),_e=le("#050d22").lerp(le("#1c4f7a"),R);Ae.lerp(le("#ff8a50"),Y*0.8),we.lerp(le("#4a3a7a"),Y*0.35);let De=Math.min(1,ce*0.75+se*0.1);we.lerp(le("#090b14").lerp(le("#6f7f93"),R),De),Ae.lerp(le("#141a2e").lerp(le("#aab4be"),R),De),_e.lerp(le("#060a12").lerp(le("#2a3a48"),R),De*0.6),n.copy(we),t.copy(Ae),i.copy(_e);let Ye=P?X-k:1440-(X-k),xe=P?A-k:A>X?A-X:A+1440-X,at=Math.min(1,Math.max(0,xe/Ye))*Math.PI;l.set(-Math.cos(at)*0.7,0.07+Math.sin(at)*0.55,-1).normalize(),h.position.copy(l).multiplyScalar(800),f.position.copy(h.position);let gt=P;h.material.color.set(gt?"#fff1b0":"#fff6cf"),f.material.color.set(gt?"#ffd27a":"#ffe9a8"),f.scale.setScalar(gt?300:170),h.material.opacity=1-ce*0.85,f.material.opacity=(gt?0.55:0.28)*(1-ce*0.8),p.material.uniforms.amp.value=s.amp,p.material.uniforms.glint.value=1-ce*0.85,Oe.strength=0.35-R*0.17,je.opacity=1-R*0.85,Ze.forEach((mi)=>{mi.visible=mi.userData.i/Ze.length<ce*1.05,mi.material.color.set(le("#2c3350").lerp(le("#ffffff"),R).lerp(le("#6a7380"),se*0.6)),mi.material.opacity=0.25+ce*0.4}),pt.visible=se>0,Ve.setDrawRange(0,Math.floor(tt*se*2));let en=String(Math.floor(A/60)).padStart(2,"0"),Ji=String(A%60).padStart(2,"0");ke.textContent=`\uD83D\uDCCD ลำพูน · ${en}:${Ji} น. · ${ne.temp!=null?Math.round(ne.temp)+"°C · ":""}${Je(ne.code)} · ลม ${Math.round(ne.wind)} กม./ชม.`},Be=function(A,k){for(let X of Ze)if(X.position.x+=A*2.5*s.drift,X.position.x>380)X.position.x=-380;if(!s.rain)return;for(let X=0;X<Math.floor(tt*s.rain);X++){let P=X*6+1;if(N[P]-=28*A,N[P+3]-=28*A,N[P]<0)vt(X),N[P]=24+Math.random()*3,N[P+3]=N[P]-0.7}if(Ve.attributes.position.needsUpdate=!0,s.rain>0.9&&Math.random()<A*0.15)Oe.strength=1.2;else Oe.strength+=(0.35-s.dayK*0.17-Oe.strength)*Math.min(1,A*8)};Zi.setPixelRatio(Math.min(devicePixelRatio,2));let e=new Ur,t=new Ge("#1b2a63"),n=new Ge("#02040f"),i=new Ge("#050d22"),s={amp:1,drift:1,dayK:0,cloud:0,rain:0};e.background=new Ge("#050818");let r=new Wt(55,1,0.1,1200);r.position.set(0,2.4,9);let a=new F(0,1.6,-20),o=(()=>{let A=document.createElement("canvas");A.width=A.height=128;let k=A.getContext("2d"),X=k.createRadialGradient(64,64,0,64,64,64);return X.addColorStop(0,"rgba(255,255,255,1)"),X.addColorStop(0.25,"rgba(255,255,255,.55)"),X.addColorStop(1,"rgba(255,255,255,0)"),k.fillStyle=X,k.fillRect(0,0,128,128),new Hr(A)})(),l=new F(0.28,0.32,-1).normalize();e.add(new ht(new li(900,32,16),new Et({side:Bt,depthWrite:!1,uniforms:{top:{value:n},hor:{value:t}},vertexShader:"varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 p;uniform vec3 top,hor;void main(){float h=clamp(normalize(p).y,0.,1.);gl_FragColor=vec4(mix(hor,top,pow(h,.45)),1.);}"})));let c=new Float32Array(1200);for(let A=0;A<400;A++){let k=new F().randomDirection();k.y=Math.abs(k.y)*0.9+0.05,k.multiplyScalar(850),c.set([k.x,k.y,k.z],A*3)}let u=new Mt().setAttribute("position",new Vt(c,3)),d=new Ps(u,new ki({size:2.2,sizeAttenuation:!1,color:"#ffffff",transparent:!0,depthWrite:!1,fog:!1}));e.add(d);let h=new ht(new li(28,32,16),new on({color:"#fff6cf",fog:!1,transparent:!0}));h.position.copy(l).multiplyScalar(800),e.add(h);let f=new ri(new kn({map:o,color:"#ffe9a8",blending:hn,depthWrite:!1,opacity:0.28}));f.scale.setScalar(170),f.position.copy(h.position),e.add(f);let x="uniform float amp;float wave(vec2 p,float t){return (sin(p.x*.3+t*.8)*.08+sin(p.y*.5+t*1.1)*.06+sin((p.x+p.y)*.7+t*1.7)*.03)*amp;}",M=(A,k,X)=>(Math.sin(A*0.3+X*0.8)*0.08+Math.sin(k*0.5+X*1.1)*0.06+Math.sin((A+k)*0.7+X*1.7)*0.03)*s.amp,p=new ht(new oi(1000,1000,220,220).rotateX(-Math.PI/2),new Et({uniforms:{t:{value:0},amp:{value:1},glint:{value:1},moon:{value:l},hor:{value:t},deep:{value:i}},vertexShader:`${x}uniform float t;varying vec3 w;
        void main(){vec3 p=position;p.y+=wave(p.xz,t);vec4 wp=modelMatrix*vec4(p,1.);w=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;}`,fragmentShader:`${x}uniform float t,glint;uniform vec3 moon,hor,deep;varying vec3 w;
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
          gl_FragColor=vec4(mix(col,hor,d*d),1.);}`}));e.add(p);let g=new Vi(0.13,0.55,4).translate(0,0.275,0),T=new dn(0.5,0.56,0.2,24),E=new dn(0.03,0.03,0.35,8),y=new on({color:"#e9d79b"}),w=new on({color:"#fff3d0"}),I={},m=(A)=>I[A]??=new on({color:A}),S=(A,k)=>new Xi(A,{depth:k,bevelEnabled:!0,bevelSize:0.03,bevelThickness:0.03,bevelSegments:2}).rotateX(-Math.PI/2),L=new ai().moveTo(0,-0.55).bezierCurveTo(-0.95,0.1,-0.5,0.75,0,0.3).bezierCurveTo(0.5,0.75,0.95,0.1,0,-0.55),G=new ai;for(let A=0;A<10;A++){let k=A/10*Math.PI*2+Math.PI/2,X=A%2?0.32:0.7;G[A?"lineTo":"moveTo"](Math.cos(k)*X,Math.sin(k)*X)}G.closePath();let D=new ai().moveTo(-0.9,0.34).lineTo(-0.6,0).lineTo(0.6,0).lineTo(0.9,0.34).closePath(),B={heart:S(L,0.2),heartTop:S(L,0.1).scale(0.62,1,0.62).translate(0,0.23,0),star:S(G,0.2),starTop:S(G,0.1).scale(0.6,1,0.6).translate(0,0.23,0),hull:new Xi(D,{depth:0.5,bevelEnabled:!1}).translate(0,0,-0.25),leaf:new Vi(0.17,0.3,4).translate(0,0.15,0),flower:new li(0.075,10,8),stick:new dn(0.012,0.012,0.75,6).translate(0,0.375,0),sail:new Mt().setFromPoints([[0,0,0],[0.55,0,0],[0,0.85,0]].map((A)=>new F(...A))),mast:new dn(0.015,0.015,0.9,6).translate(0,0.45,0)},Q=(A,k)=>new on({color:A,...k}),C=Q("#3f9d4a"),K=Q("#ffb703"),j=Q("#8b5a2b"),H=Q("#fff3d0",{side:Jt}),fe={lotus(A,k){A.add(new ht(T,y));for(let[X,P,Z,he,R]of[[14,0.42,0.9,0.08,1],[10,0.27,0.35,0.16,0.85]])for(let Y=0;Y<X;Y++){let V=Y/X*Math.PI*2+(Z>0.5?0:0.3),ne=new ht(g,m(k));ne.position.set(Math.cos(V)*P,he,Math.sin(V)*P),ne.rotation.set(0,-V,0),ne.rotateZ(-Z),ne.scale.set(1,R,1),A.add(ne)}return{top:0.1,rx:0.62,rz:0.62}},banana(A,k){A.add(new ht(new dn(0.58,0.62,0.2,28),y));for(let[X,P,Z,he]of[[18,0.52,C,0.1],[11,0.34,m(k),0.16]])for(let R=0;R<X;R++){let Y=R/X*Math.PI*2,V=new ht(B.leaf,Z);V.position.set(Math.cos(Y)*P,he,Math.sin(Y)*P),V.rotation.set(0,-Y,0),V.rotateZ(-0.55),A.add(V)}return{top:0.1,rx:0.7,rz:0.7}},heart(A,k){return A.add(new ht(B.heart,Q(k))),A.add(new ht(B.heartTop,Q(new Ge(k).lerp(new Ge("#fff"),0.5)))),{top:0.32,rx:0.55,rz:0.4}},star(A,k){return A.add(new ht(B.star,Q(k))),A.add(new ht(B.starTop,Q(new Ge(k).lerp(new Ge("#fff"),0.5)))),{top:0.32,rx:0.5,rz:0.5}},boat(A,k){A.add(new ht(B.hull,Q(k)));let X=new ht(B.mast,j);X.position.set(-0.35,0.34,0),A.add(X);let P=new ht(B.sail,H);return P.position.set(-0.33,0.45,0),A.add(P),{top:0.34,rx:0.5,rz:0.2,cx:0.25}}},te=[],oe=new Set,Se=(A,k)=>{let X=Math.sin(A*127.1+k*311.7)*43758.5453;return X-Math.floor(X)},ae=60,be=new Float32Array(ae*3),Ue=new Float32Array(ae),Fe=(A)=>{be.set([(Math.random()-0.5)*160,4+Math.random()*20,-40-Math.random()*120],A*3),Ue[A]=0.6+Math.random()*0.8};for(let A=0;A<ae;A++)Fe(A),be[A*3+1]=Math.random()*60;let ve=new Mt().setAttribute("position",new Vt(be,3)),je=new ki({map:o,size:3.5,color:"#c97a2c",blending:hn,transparent:!0,depthWrite:!1});e.add(new Ps(ve,je));let We=new fl(Zi);We.addPass(new pl(e,r));let Oe=new pi(new ue(1,1),0.35,0.5,0.82);We.addPass(Oe),We.addPass(new ml);let Ke=()=>{let A=innerWidth,k=innerHeight;Zi.setSize(A,k,!1),We.setSize(A,k),r.aspect=A/k,r.updateProjectionMatrix()};addEventListener("resize",Ke),Ke();let ie=new URLSearchParams(location.search),de=(A)=>{let[k,X]=A.split("T").pop().split(":");return+k*60+ +X},pe=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Bangkok",hour:"2-digit",minute:"2-digit",hour12:!1}),Ee=()=>ie.get("t")?de(ie.get("t")):de(pe.format(new Date)),Te=(A,k,X)=>{let P=Math.min(1,Math.max(0,(X-A)/(k-A)));return P*P*(3-2*P)},Le={temp:null,code:0,cloud:20,wind:6,sunrise:"06:15",sunset:"17:50"},Ne={clear:{code:0,cloud:5},cloud:{code:3,cloud:90},rain:{code:63,cloud:95},storm:{code:95,cloud:100,wind:30}},Je=(A)=>A===0?"ท้องฟ้าแจ่มใส":A<3?"มีเมฆบางส่วน":A===3?"เมฆมาก":A<50?"หมอก":A<60?"ฝนปรอย":A<80?"ฝนตก":A<90?"ฝนระลอก":"พายุฝนฟ้าคะนอง",Ze=Array.from({length:14},(A,k)=>{let X=new ri(new kn({map:o,transparent:!0,depthWrite:!1,fog:!1}));return X.scale.set(180+Math.random()*160,70+Math.random()*40,1),X.position.set((Math.random()-0.5)*700,70+Math.random()*90,-180-Math.random()*300),X.userData.i=k,e.add(X),X}),tt=1400,N=new Float32Array(tt*6),vt=(A)=>{let k=(Math.random()-0.5)*60,X=Math.random()*26,P=-30+Math.random()*40;N.set([k,X,P,k-0.1,X-0.7,P],A*6)};for(let A=0;A<tt;A++)vt(A);let Ve=new Mt().setAttribute("position",new Vt(N,3)),pt=new zr(Ve,new Is({color:"#aebbd8",transparent:!0,opacity:0.4}));pt.frustumCulled=!1,e.add(pt);let le=(A)=>new Ge(A),ke=document.getElementById("weather");st(),setInterval(st,60000);let yt=async()=>{try{let A=await(await fetch("/api/weather")).json();if(!A.error)Le=A,st()}catch{}};yt(),setInterval(yt,600000);let b={x:0,y:0};addEventListener("pointermove",(A)=>{b.x=A.clientX/innerWidth-0.5,b.y=A.clientY/innerHeight-0.5});let _=new F,O=new Kr;Zi.setAnimationLoop(()=>{let A=Math.min(O.getDelta(),0.1),k=O.elapsedTime,X=performance.now();p.material.uniforms.t.value=k,r.position.x+=(b.x*3-r.position.x)*0.03,r.position.y+=(2.4-b.y-r.position.y)*0.03,r.lookAt(a),d.material.opacity=(0.75+Math.sin(k*1.3)*0.25)*(1-s.dayK)*(1-s.cloud),Be(A,k);for(let P of te){if(P.x+=P.v*s.drift*A,P.x>48)P.x=-48;let Z=(X-P.born)/1000,he=Z<1.2?1-Z/1.2:0,R=M(P.x,P.z,k)+0.08+he*he*5;P.g.position.set(P.x,R,P.z),P.g.rotation.set(Math.sin(k*1.1+P.ph)*0.06,P.g.rotation.y+P.spin*A,Math.cos(k*0.9+P.ph)*0.06),P.g.scale.setScalar(Z<1.2?0.4+0.6*(Z/1.2):1);let Y=1+Math.sin(k*17+P.ph)*0.12+Math.sin(k*29+P.ph*2)*0.07;P.g.userData.flame.scale.set(0.9*Y,0.9*(2-Y),1),_.set(P.x,R+1.3,P.z).project(r);let V=r.position.distanceTo(P.g.position),ne=_.z<1&&Math.abs(_.x)<1.1&&V<38;if(P.label.style.opacity=ne?Math.min(1,(38-V)/14):0,ne)P.label.style.transform=`translate(-50%,-100%) translate(${(_.x*0.5+0.5)*innerWidth}px,${(-_.y*0.5+0.5)*innerHeight}px)`}for(let P=0;P<ae;P++)if(be[P*3+1]+=Ue[P]*A*1.6,be[P*3]+=Math.sin(k*0.3+P)*A*0.5,be[P*3+1]>70)Fe(P);ve.attributes.position.needsUpdate=!0,We.render()});let re=async(A)=>{try{(await(await fetch("/api/krathongs")).json()).reverse().forEach((k)=>ee(k,A))}catch{}};re(!1),setInterval(()=>re(!0),1e4),Vn.onsubmit=async(A)=>{A.preventDefault();let k=Vn.querySelector("button");k.disabled=!0,gl.textContent="";try{let X=await fetch("/api/krathongs",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:Vn.name.value,wish:Vn.wish.value,color:Vn.c.value,model:Vn.model.value,deco:Vn.deco.value})});if(!X.ok)throw 0;ee(await X.json(),!0),Vn.wish.value=""}catch{gl.textContent="ลอยไม่สำเร็จ ลองใหม่อีกครั้ง"}k.disabled=!1}}
