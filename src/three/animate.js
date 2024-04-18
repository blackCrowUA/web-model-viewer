import Stats from "three/addons/libs/stats.module";

export const startAnimate = (renderer, scene, camera, controls) => {
    const stats = new Stats()
    document.body.appendChild(stats.dom)

    animate();

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
        stats.update();
    }
}