#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform vec3 u_coord;

float calc(float v) {
    return v*2.0-0.5;
}

const float size = 10.0;
const float s0 = 2.0/size;
const float s1 = 2.0 / size, s2 = 1.0 / size;

void main() {
    vec2 l = vec2(0.5);
    vec2 p = (gl_FragCoord.xy/u_resolution-l);
    float s = length(p);
    float c1 = 0.0, c2 = 0.0;
    for(float i = -10.0; i < 1.0; i+=s0) {
        c1 += (1.0-step(p.x, i-s1)) * step(p.x, i-s2) - (1.0-step(p.y, i-s1)) * step(p.y, i-s2);
        c2 += (1.0-step(p.x, i+s2)) * step(p.x, i+s1) - (1.0-step(p.y, i+s2)) * step(p.y, i+s1);
    }
    float c = max(c1, c2);
    gl_FragColor = vec4(c,c,c, 1.0);
}
