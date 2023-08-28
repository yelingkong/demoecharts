<template>
  <div class="canvasGLTFBody">
    <div ref='canvasGLTF' class="canvasGLTF" id="canvasGLTF">
    </div>
    <div id="LoadingInfo" class="LoadingInfo"></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  name: 'GLTFCanvas',
  data() {
    return {
      list: []
    }
  },
  created: function () {

  },
  mounted: function () {
    var that = this
    /**
     * 创建场景对象Scene
     */
    var scene = new THREE.Scene();
    /**
     * 创建一个草地地面
     */
    var geometry = new THREE.PlaneGeometry(1000, 1000); //矩形平面
    // 加载草地纹理贴图
    var texture = new THREE.TextureLoader().load("tree/grass.jpg");
    // 设置纹理的重复模式
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    // uv两个方向纹理重复数量
    texture.repeat.set(10, 10);
    var material = new THREE.MeshLambertMaterial({
      color: 0x777700,
      map:texture,
    });
    var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    scene.add(mesh); //网格模型添加到场景中
    mesh.rotateX(-Math.PI / 2);
    /**
     * 光源设置
     */
      //点光源
    var point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    scene.add(point); //点光源添加到场景中
    //环境光
    var ambient = new THREE.AmbientLight(0x888888);
    scene.add(ambient);
    /**
     * 透视投影相机设置
     */
    var width = window.innerWidth; //窗口宽度
    var height = window.innerHeight; //窗口高度
    /**透视投影相机对象*/
    var camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.set(200, 300, 200); //树上面观察
    // camera.position.set(200, 30, 200); //树下面观察
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); //设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色

    // 渲染函数
    function render() {
      renderer.render(scene, camera); //执行渲染操作
      requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
    }

    render();
    //创建控件对象  相机对象camera作为参数   控件可以监听鼠标的变化，改变相机对象的属性
    var controls = new OrbitControls(camera, renderer.domElement);
    that.$refs.canvasGLTF.appendChild(renderer.domElement)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.canvasGLTFBody {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}

.canvasGLTF {
  position: relative;
  width: 100%;
  height: 100%;
}

.pa {
  position: absolute;
  top: 0;
  left: 0;
}

.label {
  color: red;
}

.LoadingInfo {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  color: #fff;
  z-index: 1000000;
  top: 0;
  left: 0;
  font-size: 20px;
  display: none;
}
</style>
