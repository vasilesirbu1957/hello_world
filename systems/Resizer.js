function Resizer(container, camera, renderer) {
  // Set the camera's aspect ratio to match the container's proportions
  camera.aspect = container.clientWidth / container.clientHeight;

  camera.updateProjectionMatrix(); // update the camera's frustum

  // next, set the renderer to the same size as our container element
  renderer.setSize(container.clientWidth, container.clientHeight);

  // finally, set the pixel ratio to ensure our scene will look good on mobile devices
  renderer.setPixelRatio(window.devicePixelRatio);
  console.log("Hello, Welcome to JavaScript");
  
}

export { Resizer };