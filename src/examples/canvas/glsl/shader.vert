uniform float time;
    uniform vec3 basePos;
    varying vec3 vPos;
    varying vec2 vUv;
    void main()	{
      vPos = position + basePos;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }