var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// threeJs 里面有很多不同的camera,这里选择的是PerspectiveCamera
// 参数的意义分别是(视野范围, 宽高比,视角最近距离, 视角最远距离)

var renderer = new THREE.WebGLRenderer();
// 有几种不同的渲染器,这里是 WebGLRenderer


renderer.setSize( window.innerWidth, window.innerHeight );  // 设置渲染区域的大小

document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	// Geometry 几何体
	// BoxGeometry 是一个原始类,用于生成初始的四边几何体,参数是(width, height, depth)
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	// 决定几何体是否像金属,透明与否,是否显示成线框
	// Mesh 网格,网状
	// MeshBasicMaterial 对光照无感,给几何体一种简单的颜色或显示线框
var cube = new THREE.Mesh( geometry, material );
	// Meth是这样一个对象,它初始化我们之前定义的几何体,并且给它把材质加上,把它插入到场景中,并且给它运动的能力

scene.add( cube );

// Vector3
var a = new THREE.Vector3( 0, 1, 0 );
var b = new THREE.Vector3();// 没有参数,默认是(0,0,0)
var ab = a.distanceTo(b);
console.log(ab,'abbbb')


camera.position.set(0,0,100)
camera.lookAt(b)
var material_line = new THREE.LineBasicMaterial({color: 'red'});

function render() {
	requestAnimationFrame( render );
	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;
	renderer.render( scene, camera );
}
render();

