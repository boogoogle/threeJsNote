/**
 * 画线条
 * 这里我们只是需要画一条线或者一个圆圈,而不会添加脉络(mesh,网格,网格状的)
 */

// 首先,我们需要一个渲染器,舞台,和相机.我建议用原本单词renderer, state, camera
// 如果对以上三个名词概念不详,请参照上一节,creating scene(../index.js)


var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 1, 500 );
camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3( 0, 0, 0));


var scene = new THREE.Scene();


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

var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( -10, 0, 0 ));
geometry.vertices.push(new THREE.Vector3( 0, 10, 0 ));
geometry.vertices.push(new THREE.Vector3( 0, 0, 10 ));

// 注意!!! 一条连线只会在连续的两点之间绘制,而不是所有点

// 现在我们有了三个点,他们可以组成两条线,同时我们定义了材质
// 通过以下语句把这两条线表现出来吧

var line = new THREE.Line(geometry, material);

// 现在,只需要把你的作品添加到舞台上就可以了

scene.add(line);
renderer.render(scene, camera);


// 你会看到图1所示










