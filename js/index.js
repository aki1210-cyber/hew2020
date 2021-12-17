$(function(){
    $("#sub").hide();

    $("#signup_link").click(function(){
        $("#sub").fadeIn();
    })

    $("#signup_close").click(function(){
        $("#sub").fadeOut();
    })
})

window.addEventListener('load',init);

function init() {

   // サイズを指定
   const width = 300;
   const height = 300;
   var images = [];
   for( var i = 0; i < 6; i++ ) {
      images[i] = new THREE.MeshBasicMaterial( {
      map:THREE.ImageUtils.loadTexture('images/site/block' + (i + 1) + '.jpg', {}, function() {renderer.render(scene, camera);})
      });
    }
   // レンダラーを作成
   const renderer = new THREE.WebGLRenderer({
     canvas: document.querySelector('#cube')
   });
   renderer.setPixelRatio(window.devicePixelRatio);
   renderer.setSize(width, height);//描画サイズ
   renderer.setClearColor(new THREE.Color(0xEBECF0));//背景色

   // シーンを作成
   const scene = new THREE.Scene();

   // カメラを作成
   const camera = new THREE.PerspectiveCamera(45, width / height);
   // camera.position.set(0, +0.5, +1000);
   camera.position.x = 650;
   camera.position.y = 650;
   camera.position.z = 650;

   //ライト作成
   const light = new THREE.DirectionalLight(0xffffff);
   light.intensity = 2; // 光の強さを倍に
   light.position.set(1, 1, +1000);
   scene.add(light);//シーンに追加

 　// 箱を作成
   //形状
   const geometry = new THREE.BoxGeometry(400, 400, 400);
   //質感・素材
   const material = new THREE.MeshFaceMaterial(images);
   //ジオメトリにマテリアル適用
   const box = new THREE.Mesh(geometry, material);
   scene.add(box);//シーンに追加
   // カメラコントローラーを作成
  const controls = new THREE.OrbitControls(camera, renderer.domElement);

  tick();
  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // レンダリング
     box.rotation.x += 0.01;
     box.rotation.y += 0.01;
     box.rotation.z += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
     // let rot = 0;
     //tick();
     // 毎フレーム時に実行されるループイベントです
     // function tick() {
     //   rot += 0.3; // 毎フレーム角度を0.3度ずつ足していく
     //   const radian = (rot * Math.PI) / 180;
     //   // xz平面にて半径1の円を描くように動作。
     //   camera.position.x = Math.sin(radian);
     //   camera.position.z = Math.cos(radian);
     //   camera.lookAt(new THREE.Vector3(0, 0, 0));//原点を見つめる
     //   renderer.render(scene, camera); // レンダリング
     //   requestAnimationFrame(tick);
     // }
   // tick();
   //
   //  // 毎フレーム時に実行されるループイベントです
   //  function tick() {
   //
   //    //box.rotation.x += 0.01;
   //    box.rotation.y += 0.01;
   //    box.rotation.z += 0.01;
   //    renderer.render(scene, camera); // レンダリング
   //
   //    requestAnimationFrame(tick);
   //  }
 }
