// cursor blob
const blob = document.getElementById('blob');
if (blob) {
  window.addEventListener('mousemove', e => {
    blob.style.left = e.clientX + 'px';
    blob.style.top = e.clientY + 'px';
  });
}

// timecode ticker
const tc = document.getElementById('tc');
if (tc) {
  let frame = 0;
  function pad(n){return n.toString().padStart(2,'0');}
  setInterval(() => {
    frame++;
    const f = frame % 24;
    const s = Math.floor(frame/24) % 60;
    const m = Math.floor(frame/24/60) % 60;
    const h = Math.floor(frame/24/60/60);
    tc.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
  }, 1000/24);
}

// marquee content
const marquee = document.getElementById('marquee');
if (marquee) {
  const skillsList = ['Adobe Animate','Adobe Illustrator','Adobe Photoshop','After Effects','Premiere Pro','Blender','Maya 3D','Procreate','Dragon Frames','TV Paint Animation'];
  const build = () => skillsList.map(s => `<span><b>${s}</b></span>`).join('');
  marquee.innerHTML = build() + build();
}

// scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if(en.isIntersecting) en.target.classList.add('in'); });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
