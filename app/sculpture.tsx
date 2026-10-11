"use client";

import { useEffect, useRef, useState } from "react";
import { AsciiForm } from "./intro";

const vertexSource = `attribute vec2 aPosition;
void main(){gl_Position=vec4(aPosition,0.,1.);}`;
const fragmentSource = `precision highp float;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uTime;
uniform float uMode;
uniform float uLight;
mat2 turn(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
float smoothMin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
float map(vec3 p){
  p.xz=turn(uTime*.13+uPointer.x*.3)*p.xz;
  p.yz=turn(.3+uPointer.y*.25)*p.yz;
  float pulse=sin(uTime*.65)*.035;
  vec3 q=p;
  q.x+=sin(p.y*2.6+uTime*.45)*.12;
  float liquid=smoothMin(length(q-vec3(.35,.22,.0))-.77,length(q-vec3(-.4,-.26,.1))-.72,.55);
  liquid+=sin(q.x*4.+uTime*.5)*sin(q.y*4.-uTime*.3)*sin(q.z*4.)*.035;
  vec3 r=p;r.xy=turn(.45)*r.xy;r.yz=turn(.7)*r.yz;
  float orbit=length(vec2(length(r.xy)-.77,r.z))-(.26+pulse);
  float angle=atan(p.y,p.x);
  float bloom=length(p)-( .8+.16*cos(angle*5.+uTime*.14)*pow(length(p.xy)/max(length(p),.001),3.) );
  float first=mix(liquid,orbit,smoothstep(0.,1.,uMode));
  return mix(first,bloom,smoothstep(1.,2.,uMode));
}
vec3 normal(vec3 p){vec2 e=vec2(.002,0.);return normalize(vec3(map(p+e.xyy)-map(p-e.xyy),map(p+e.yxy)-map(p-e.yxy),map(p+e.yyx)-map(p-e.yyx)));}
vec3 environment(vec3 r){
  vec3 base=mix(vec3(.08,.1,.09),vec3(.35,.39,.34),smoothstep(-.8,.8,r.y));
  float strip=pow(max(0.,1.-abs(r.y-.34)*3.3),3.);
  float second=pow(max(0.,1.-abs(r.x+r.y*.4+.28)*3.8),6.);
  float dark=pow(max(0.,1.-abs(r.y+.25)*4.),8.);
  base+=vec3(.9,.97,.86)*strip*1.8+vec3(.64,.75,.55)*second*1.2;
  base*=1.-dark*.85;
  base=mix(base,base*.9+vec3(.03),uLight);
  base+=vec3(.5,.85,.16)*pow(max(0.,r.x*.6-r.z*.7),6.)*.65;
  return base;
}
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*uResolution)/min(uResolution.x,uResolution.y);
  vec3 ro=vec3(0.,0.,3.6),rd=normalize(vec3(uv*2.5,-3.6));
  float travel=0.;bool hit=false;
  for(int i=0;i<96;i++){float d=map(ro+rd*travel);if(d<.0007){hit=true;break;}travel+=d*.8;if(travel>6.)break;}
  vec3 color=vec3(0.);float alpha=0.;
  if(hit){
    vec3 p=ro+rd*travel,n=normal(p),r=reflect(rd,n);
    float fresnel=pow(1.-max(0.,dot(n,-rd)),3.);
    float diffuse=max(0.,dot(n,normalize(vec3(-.7,1.,2.))));
    color=environment(r)*(.7+diffuse*.35);
    color+=vec3(.78,.87,.66)*fresnel*.45;
    color=mix(color,color*vec3(.93,1.,.87),.2);
    color=pow(color,vec3(.85));alpha=1.;
  }
  gl_FragColor=vec4(color,alpha);
}`;

const forms = ["Liquid", "Orbit", "Bloom"];

export function Sculpture() {
  const [ascii, setAscii] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetMode = useRef(1);
  const [mode, setMode] = useState(1);
  const [paused, setPaused] = useState(false);
  const pauseRef = useRef(false);
  const [available, setAvailable] = useState(false);
  const redraw = useRef<() => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
      premultipliedAlpha: false,
    });
    if (!gl) return;
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) {
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
      if (program) gl.deleteProgram(program);
      return;
    }
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.bindAttribLocation(program, 0, "aPosition");
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      gl.deleteProgram(program);
      return;
    }
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    const buffer = gl.createBuffer();
    if (!buffer) {
      gl.deleteProgram(program);
      return;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    gl.useProgram(program);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    const uniforms = {
      resolution: gl.getUniformLocation(program, "uResolution"),
      pointer: gl.getUniformLocation(program, "uPointer"),
      time: gl.getUniformLocation(program, "uTime"),
      mode: gl.getUniformLocation(program, "uMode"),
      light: gl.getUniformLocation(program, "uLight"),
    };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true,
      lost = false,
      frame = 0,
      last = 0,
      time = 0,
      currentMode = 1;
    let px = 0,
      py = 0,
      tx = 0,
      ty = 0;
    let light = document.documentElement.dataset.theme === "light" ? 1 : 0;
    const draw = () => {
      if (lost) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
      gl.uniform2f(uniforms.pointer, px, py);
      gl.uniform1f(uniforms.time, time);
      gl.uniform1f(uniforms.mode, currentMode);
      gl.uniform1f(uniforms.light, light);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const tick = (now: number) => {
      frame = 0;
      if (
        lost ||
        !visible ||
        document.hidden ||
        pauseRef.current ||
        reduced.matches
      )
        return;
      const dt = Math.min((now - last) / 1000, 0.05);
      if (now - last < 32) {
        frame = requestAnimationFrame(tick);
        return;
      }
      last = now;
      time += dt;
      currentMode += (targetMode.current - currentMode) * Math.min(dt * 4, 1);
      px += (tx - px) * 0.08;
      py += (ty - py) * 0.08;
      draw();
      frame = requestAnimationFrame(tick);
    };
    const start = () => {
      if (lost) return;
      if (reduced.matches || pauseRef.current) {
        currentMode = targetMode.current;
        draw();
      } else if (!frame && visible && !document.hidden) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };
    redraw.current = start;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const mobile = window.innerWidth < 760;
      const dpr = Math.min(
        Math.max(window.devicePixelRatio, 1.5),
        mobile ? 1.5 : 2,
      );
      canvas.width = Math.max(
        1,
        Math.round(Math.min(rect.width * dpr, mobile ? 720 : 1500)),
      );
      canvas.height = Math.max(
        1,
        Math.round((canvas.width * rect.height) / Math.max(rect.width, 1)),
      );
      draw();
      start();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const intersection = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (!visible) {
          cancelAnimationFrame(frame);
          frame = 0;
        } else start();
      },
      { threshold: 0 },
    );
    intersection.observe(canvas);
    const pointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      tx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      ty = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };
    const leave = () => {
      tx = 0;
      ty = 0;
    };
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else start();
    };
    const theme = () => {
      light = document.documentElement.dataset.theme === "light" ? 1 : 0;
      draw();
    };
    const loss = (event: Event) => {
      event.preventDefault();
      lost = true;
      cancelAnimationFrame(frame);
      setAvailable(false);
    };
    canvas.addEventListener("pointermove", pointer, { passive: true });
    canvas.addEventListener("pointerleave", leave);
    canvas.addEventListener("webglcontextlost", loss);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("nst-theme", theme);
    reduced.addEventListener("change", start);
    draw();
    setAvailable(true);
    start();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      canvas.removeEventListener("pointermove", pointer);
      canvas.removeEventListener("pointerleave", leave);
      canvas.removeEventListener("webglcontextlost", loss);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("nst-theme", theme);
      reduced.removeEventListener("change", start);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      redraw.current = () => {};
    };
  }, []);

  return (
    <div
      className="sculpture"
      data-renderer={available ? "webgl" : "fallback"}
      data-form={mode}
      data-display={ascii ? "ascii" : "chrome"}
    >
      <div className="sculpture-stage">
        <div className="sculpture-orbit" aria-hidden="true" />
        <div className="sculpture-fallback" aria-hidden="true" />
        <div className="sculpture-ascii">
          <AsciiForm paused={paused || !ascii} />
        </div>
        <canvas
          ref={canvasRef}
          className="sculpture-canvas"
          aria-hidden="true"
        />
        <span className="sculpture-coordinate" aria-hidden="true">
          NST—FORM / 00{mode + 1}
        </span>
        <span className="sculpture-note">
          Choose a form. Find a new perspective.
        </span>
      </div>
      <div className="render-controls" role="group" aria-label="Render style">
        <button
          aria-pressed={!ascii}
          onClick={() => {
            setAscii(false);
            pauseRef.current = paused;
            redraw.current();
          }}
        >
          Chrome
        </button>
        <button
          aria-pressed={ascii}
          onClick={() => {
            setAscii(true);
            setMode(1);
            targetMode.current = 1;
            pauseRef.current = true;
            redraw.current();
          }}
        >
          ASCII
        </button>
      </div>
      <div className="sculpture-controls">
        <div role="group" aria-label="Sculpture form">
          {forms.map((label, index) => (
            <button
              key={label}
              aria-pressed={mode === index}
              onClick={() => {
                setAscii(false);
                pauseRef.current = paused;
                setMode(index);
                targetMode.current = index;
                redraw.current();
              }}
            >
              <span>0{index + 1}</span>
              {label}
            </button>
          ))}
        </div>
        <button
          className="sculpture-pause"
          disabled={!available}
          aria-label={
            paused ? "Play sculpture animation" : "Pause sculpture animation"
          }
          onClick={() => {
            pauseRef.current = ascii || !paused;
            setPaused(!paused);
            redraw.current();
          }}
        >
          {paused ? (
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="m7 4 9 6-9 6Z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M7 4v12M13 4v12" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
