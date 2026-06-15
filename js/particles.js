/**
 * 粒子背景系统 - Particle Background System
 * 实现动态粒子网络背景，支持鼠标交互
 */

class ParticleBackground {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 180 };
        this.isRunning = true;
        
        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();
        this.bindEvents();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const density = Math.min(window.innerWidth, window.innerHeight) < 768 ? 10000 : 14000;
        const count = Math.floor((this.canvas.width * this.canvas.height) / density);
        this.particles = [];
        
        // 主色调粒子
        const colors = [
            'rgba(99, 102, 241, {opacity})',   // 靛蓝
            'rgba(139, 92, 246, {opacity})',    // 紫
            'rgba(236, 72, 153, {opacity})',    // 粉
            'rgba(255, 255, 255, {opacity})',   // 白
        ];

        for (let i = 0; i < count; i++) {
            const opacity = Math.random() * 0.6 + 0.2;
            const colorBase = colors[Math.floor(Math.random() * colors.length)];
            
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                size: Math.random() * 2.5 + 0.5,
                opacity: opacity,
                color: colorBase.replace('{opacity}', opacity),
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.03,
            });
        }
    }

    animate() {
        if (!this.isRunning) return;
        
        // 清屏
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.drawParticles();
        this.drawConnections();
        
        requestAnimationFrame(() => this.animate());
    }

    updateParticles() {
        const time = Date.now() * 0.001;
        
        for (let p of this.particles) {
            // 移动
            p.x += p.vx;
            p.y += p.vy;
            
            // 脉冲动画
            p.pulse += p.pulseSpeed;
            const pulseScale = 1 + Math.sin(p.pulse) * 0.3;
            
            // 边界反弹
            if (p.x < 0 || p.x > this.canvas.width) {
                p.vx *= -1;
                p.x = Math.max(0, Math.min(this.canvas.width, p.x));
            }
            if (p.y < 0 || p.y > this.canvas.height) {
                p.vy *= -1;
                p.y = Math.max(0, Math.min(this.canvas.height, p.y));
            }
            
            // 鼠标交互 - 排斥效果
            if (this.mouse.x !== null) {
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < this.mouse.radius && dist > 0) {
                    const force = (this.mouse.radius - dist) / this.mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    const pushX = Math.cos(angle) * force * 2;
                    const pushY = Math.sin(angle) * force * 2;
                    p.x += pushX;
                    p.y += pushY;
                    
                    // 靠近鼠标时变亮
                    p.currentGlow = force;
                } else {
                    p.currentGlow = 0;
                }
            } else {
                p.currentGlow = 0;
            }
            
            // 保存绘制尺寸（含脉冲）
            p.drawSize = p.size * (0.8 + Math.sin(time + p.pulse) * 0.2);
        }
    }

    drawParticles() {
        for (let p of this.particles) {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.drawSize, 0, Math.PI * 2);
            
            // 受鼠标影响时发光
            if (p.currentGlow > 0.1) {
                this.ctx.shadowBlur = 15 * p.currentGlow;
                this.ctx.shadowColor = 'rgba(139, 92, 246, 0.8)';
            } else {
                this.ctx.shadowBlur = 0;
            }
            
            this.ctx.fillStyle = p.color;
            this.ctx.fill();
            this.ctx.shadowBlur = 0;
        }
    }

    drawConnections() {
        // 限制连接数量以优化性能
        const maxConnectDist = 140;
        const maxParticles = Math.min(this.particles.length, 120);
        
        for (let i = 0; i < maxParticles; i++) {
            for (let j = i + 1; j < maxParticles; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < maxConnectDist) {
                    const opacity = 0.12 * (1 - dist / maxConnectDist);
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    this.ctx.lineWidth = 0.6;
                    this.ctx.stroke();
                }
            }
        }
    }

    bindEvents() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.resize();
            }, 200);
        });

        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        document.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });

        // 触屏支持
        document.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            this.mouse.x = touch.clientX;
            this.mouse.y = touch.clientY;
        }, { passive: true });

        document.addEventListener('touchend', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    destroy() {
        this.isRunning = false;
    }
}
