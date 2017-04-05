/**
 * 展示文字
 *     很多时候们需要在场景中添加富有表现力的文字
 */


var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 1, 500 );
camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3( 0, 0, 0));


var scene = new THREE.Scene();

/*
   有两种方法添加文字
   1. 最简单的是直接在canvas标签附件添加一个其他的dom元素,此处不讲
   2. 想canvas中添加文字,通过Texture类
 */

/**
 * 接下来我们要定义材质
 * 对于线条,我们可选择的材质有 LineBasicMaterial 和 LineDashMaterial
 */

var material = new THREE.LineBasicMaterial({color: 0x0000ff})

/**
 * 定义了材质之后,我们需要用到Geometry或者BufferGeometry
 * 强烈建议使用BufferGeometry,它的表现力更好
 * geometry几何学,几何形状
 * 此处展示用geometry
 */

var geometry = new THREE.TextGeometry('111234');

// 注意!!! 一条连线只会在连续的两点之间绘制,而不是所有点

// 现在我们有了三个点,他们可以组成两条线,同时我们定义了材质
// 通过以下语句把这两条线表现出来吧

var line = new THREE.Line(geometry, material);

// 现在,只需要把你的作品添加到舞台上就可以了

scene.add(line);
renderer.render(scene, camera);


// 你会看到图1所示










