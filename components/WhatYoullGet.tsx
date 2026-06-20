'use client'

import { useEffect, useRef } from 'react'
import SectionHeading from '@/components/SectionHeading'

// Row accent colors from the purple ramp only (primary-60 → primary-40)
const benefits = [
  {
    num: '(01)', title: 'Fuel', cat: 'Credits',
    desc: '20K → 200K credits / month. Premium from day one.',
    cardTitle: 'Fuel that grows with you',
    cardBody:  'Start with 20K credits and unlock up to 200K every month as you create. Premium access from day one, no waiting, no limits on your ambition.',
    color: 'rgb(138,63,252)',  a: '0.541,0.247,0.988', b: '0.659,0.455,1.0',  d: '0.478,0.180,0.941',
  },
  {
    num: '(02)', title: 'Spotlight', cat: 'Exposure',
    desc: 'Your best work, amplified across every channel.',
    cardTitle: 'Your work, in the spotlight',
    cardBody:  'We put your best work in front of the world, case studies, social features, and co-marketing campaigns amplified across every ImagineArt channel.',
    color: 'rgb(155,96,253)',  a: '0.608,0.376,0.992', b: '0.541,0.247,0.988', d: '0.439,0.165,0.839',
  },
  {
    num: '(03)', title: 'Community', cat: 'Lead',
    desc: 'Pitch a workshop — we back it, fully.',
    cardTitle: 'Lead in your city',
    cardBody:  "Pitch a workshop or meetup and we'll back it, platform credits, speakers, and full ImagineArt promotion to bring your community together.",
    color: 'rgb(112,42,214)',  a: '0.439,0.165,0.839', b: '0.478,0.180,0.941', d: '0.541,0.247,0.988',
  },
  {
    num: '(04)', title: 'Revenue', cat: 'Get Paid',
    desc: 'Up to 25% revenue share + enterprise bonuses.',
    cardTitle: 'Get paid as you rise',
    cardBody:  'Earn up to 25% revenue share as a Creative Partner, plus affiliate access and enterprise bonuses when you bring studios and agencies on board.',
    color: 'rgb(176,137,253)', a: '0.690,0.537,0.992', b: '0.659,0.455,1.0',  d: '0.608,0.376,0.992',
  },
]

const VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}'
const FRAG = `precision highp float;
uniform vec2 uRes; uniform float uTime;
uniform vec3 uA; uniform vec3 uB; uniform vec3 uC;
float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);float a=hash(i),b=hash(i+vec2(1,0)),c=hash(i+vec2(0,1)),d=hash(i+vec2(1,1));vec2 u=f*f*(3.-2.*f);return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p*=2.02;a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/uRes.xy;
  vec2 p=uv*2.6; p.x*=uRes.x/uRes.y;
  float t=uTime*.12;
  vec2 q=vec2(fbm(p+t),fbm(p+vec2(5.2,1.3)-t));
  vec2 r=vec2(fbm(p+3.0*q+vec2(1.7,9.2)+t*.6),fbm(p+3.0*q+vec2(8.3,2.8)));
  float f=fbm(p+3.5*r);
  vec3 col=mix(uA,uB,clamp(f*f*2.2,0.,1.));
  col=mix(col,uC,clamp(length(r)*.7,0.,1.));
  col*=.78+.28*f;
  col+=(hash(uv*uTime)-.5)*.04;
  gl_FragColor=vec4(col,1.);
}`

export default function WhatYoullGet() {
  const canvasRef      = useRef<HTMLCanvasElement>(null)
  const peekRef        = useRef<HTMLDivElement>(null)
  const curRef         = useRef<HTMLDivElement>(null)
  const peekTitleRef   = useRef<HTMLParagraphElement>(null)
  const peekBodyRef    = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const fine   = window.matchMedia('(pointer:fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches
    const peek   = peekRef.current
    const cur    = curRef.current
    const canvas = canvasRef.current
    if (!fine || !peek || !cur || !canvas) return

    /* WebGL flow-field shader */
    let gl: WebGLRenderingContext | null = null
    let prog: WebGLProgram | null = null
    const uni: Record<string, WebGLUniformLocation | null> = {}
    let glOk = false

    const mkShader = (type: number, src: string) => {
      const s = gl!.createShader(type)!
      gl!.shaderSource(s, src)
      gl!.compileShader(s)
      return s
    }

    try {
      gl = canvas.getContext('webgl') || (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null)
      if (gl) {
        prog = gl.createProgram()!
        gl.attachShader(prog, mkShader(gl.VERTEX_SHADER,   VERT))
        gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, FRAG))
        gl.linkProgram(prog)
        gl.useProgram(prog)
        const buf = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buf)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,3,-1,-1,3]), gl.STATIC_DRAW)
        const loc = gl.getAttribLocation(prog, 'p')
        gl.enableVertexAttribArray(loc)
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
        ;['uRes','uTime','uA','uB','uC'].forEach(n => { uni[n] = gl!.getUniformLocation(prog!, n) })
        const dpr = Math.min(devicePixelRatio || 1, 2)
        const w = canvas.clientWidth || 340
        const h = canvas.clientHeight || 430
        canvas.width  = w * dpr
        canvas.height = h * dpr
        gl.viewport(0, 0, canvas.width, canvas.height)
        gl.uniform2f(uni.uRes as WebGLUniformLocation, canvas.width, canvas.height)
        glOk = true
      }
    } catch { /* noop */ }

    if (!glOk) {
      canvas.style.background = 'linear-gradient(135deg,#3B16C9,#8A3FFC)'
    }

    /* Color state — smoothly lerped each frame */
    const A = [0.541,0.247,0.988], B = [0.659,0.455,1.0], C = [0.478,0.180,0.941]
    let tA = A.slice(), tB = B.slice(), tC = C.slice()

    const setTarget = (b: typeof benefits[0]) => {
      tA = b.a.split(',').map(Number)
      tB = b.b.split(',').map(Number)
      tC = b.d.split(',').map(Number)
    }
    const lerp3 = (a: number[], b: number[], k: number) => {
      for (let i = 0; i < 3; i++) a[i] += (b[i] - a[i]) * k
    }

    const t0 = performance.now()
    let raf: number

    const frame = (now: number) => {
      const time = (now - t0) / 1000
      lerp3(A, tA, 0.08); lerp3(B, tB, 0.08); lerp3(C, tC, 0.08)
      if (glOk && gl) {
        gl.uniform1f(uni.uTime as WebGLUniformLocation, time)
        gl.uniform3f(uni.uA   as WebGLUniformLocation, A[0], A[1], A[2])
        gl.uniform3f(uni.uB   as WebGLUniformLocation, B[0], B[1], B[2])
        gl.uniform3f(uni.uC   as WebGLUniformLocation, C[0], C[1], C[2])
        gl.drawArrays(gl.TRIANGLES, 0, 3)
      }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    /* Spring-eased cursor tracking */
    let mx = innerWidth / 2, my = innerHeight / 2
    let px = mx, py = my, cx = mx, cy = my
    const kSlow = reduce ? 1 : 0.14
    const kFast = reduce ? 1 : 0.35

    const onMove = (e: PointerEvent) => { mx = e.clientX; my = e.clientY }
    addEventListener('pointermove', onMove)

    const tick = () => {
      px += (mx - px) * kSlow; py += (my - py) * kSlow
      cx += (mx - cx) * kFast; cy += (my - cy) * kFast
      peek.style.left = px + 'px'; peek.style.top = py + 'px'
      cur.style.left  = cx + 'px'; cur.style.top  = cy + 'px'
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)

    /* Row hover → color target + peek content + toggle */
    const rows = document.querySelectorAll<HTMLLIElement>('.ia-wyg-row')
    rows.forEach((row, i) => {
      row.addEventListener('pointerenter', () => {
        setTarget(benefits[i])
        peek.classList.add('on')
        cur.classList.add('on')
        if (peekTitleRef.current) peekTitleRef.current.textContent = benefits[i].cardTitle
        if (peekBodyRef.current)  peekBodyRef.current.textContent  = benefits[i].cardBody
      })
      row.addEventListener('pointerleave', () => {
        peek.classList.remove('on')
        cur.classList.remove('on')
      })
      row.addEventListener('focus', () => setTarget(benefits[i]))
    })

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <>
      <section id="rewards" className="ia-sec" style={{ background: 'var(--clr-bg)' }}>
        <div className="ia-wyg-wrap">

          {/* Heading */}
          <header className="ia-wyg-head">
            <SectionHeading
              headline="What's In It"
              accent="For You"
              lineBreakBeforeAccent
              accentColor="gray"
              align="left"
              size="xl"
              subline="Everything you need to create boldly, grow faster, and turn your craft into income."
            />
            {/* Empty deck div keeps the border-bottom separator above the index list */}
            <div className="ia-wyg-deck" />
          </header>

          {/* Index list */}
          <ul className="ia-wyg-index">
            {benefits.map((b) => (
              <li
                key={b.title}
                className="ia-wyg-row"
                tabIndex={0}
                style={{ '--ia-wyg-c': b.color } as React.CSSProperties}
              >
                <span className="ia-wyg-num">{b.num}</span>
                <h3 className="ia-wyg-title">{b.title}</h3>
                <div className="ia-wyg-cat">
                  <span className="ia-wyg-eyebrow">{b.cat}</span>
                  <span className="ia-wyg-desc">{b.desc}</span>
                </div>
                <span className="ia-wyg-plus" aria-hidden="true" />
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* Cursor-bound peek card — fixed overlay, pointer-events:none */}
      <div className="ia-wyg-peek" ref={peekRef} aria-hidden="true">
        <canvas ref={canvasRef} />
        <div className="ia-wyg-peek-gradient" />
        <div className="ia-wyg-peek-content">
          <p className="ia-wyg-peek-title" ref={peekTitleRef}>Fuel that grows with you</p>
          <p className="ia-wyg-peek-body"  ref={peekBodyRef}>
            Start with 20K credits and unlock up to 200K every month as you create.
          </p>
        </div>
        <div className="ia-wyg-frame" />
      </div>

      {/* Custom cursor label */}
      <div className="ia-wyg-cur" ref={curRef} aria-hidden="true">VIEW</div>
    </>
  )
}
