import anime from "animejs";

const fireworks = {
  init(canvasEl) {
    this.canvasEl = canvasEl;
    this.ctx = canvasEl.getContext("2d");
    this.numberOfParticles = 30;
    this.colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

    // Set up canvas size
    this.setCanvasSize();
    window.addEventListener("resize", () => this.setCanvasSize(), false);
  },

  setCanvasSize() {
    this.canvasEl.width = window.innerWidth * 2;
    this.canvasEl.height = window.innerHeight * 2;
    this.canvasEl.style.width = `${window.innerWidth}px`;
    this.canvasEl.style.height = `${window.innerHeight}px`;
    this.ctx.scale(2, 2);
  },

  setParticleDirection(p) {
    const angle = anime.random(0, 360) * (Math.PI / 180);
    const radius = anime.random(50, 180) * (Math.random() < 0.5 ? -1 : 1);
    return {
      x: p.x + radius * Math.cos(angle),
      y: p.y + radius * Math.sin(angle),
    };
  },

  createParticle(x, y) {
    return {
      x,
      y,
      color: this.colors[anime.random(0, this.colors.length - 1)],
      radius: anime.random(16, 32),
      endPos: this.setParticleDirection({ x, y }),
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = this.color;
        ctx.fill();
      },
    };
  },

  createCircle(x, y) {
    return {
      x,
      y,
      color: "#FFF",
      radius: 0.1,
      alpha: 0.5,
      lineWidth: 6,
      draw(ctx) {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
      },
    };
  },

  animateParticles(x, y) {
    const particles = [];
    for (let i = 0; i < this.numberOfParticles; i++) {
      particles.push(this.createParticle(x, y));
    }
    const circle = this.createCircle(x, y);

    anime.timeline().add({
      targets: particles,
      x: (p) => p.endPos.x,
      y: (p) => p.endPos.y,
      radius: 0.1,
      duration: anime.random(1200, 1800),
      easing: "easeOutExpo",
      update: () => {
        this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        particles.forEach((p) => p.draw(this.ctx));
      },
    })
    .add({
      targets: circle,
      radius: anime.random(80, 160),
      lineWidth: 0,
      alpha: { value: 0, easing: "linear", duration: anime.random(600, 800) },
      duration: anime.random(1200, 1800),
      easing: "easeOutExpo",
      update: () => {
        this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        circle.draw(this.ctx);
      },
      offset: 0,
    });
  },
};

export default fireworks;