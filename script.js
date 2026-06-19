// Nav scroll state
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 40){ nav.classList.add('scrolled'); }
    else{ nav.classList.remove('scrolled'); }
  });

  // Ember particle field
  const field = document.getElementById('emberField');
  const emberCount = 22;
  for(let i=0;i<emberCount;i++){
    const dot = document.createElement('div');
    dot.className = 'ember-dot';
    const size = Math.random()*5 + 2;
    dot.style.width = size+'px';
    dot.style.height = size+'px';
    dot.style.left = Math.random()*100+'%';
    dot.style.setProperty('--drift', (Math.random()*60-30)+'px');
    const duration = Math.random()*6 + 6;
    dot.style.animationDuration = duration+'s';
    dot.style.animationDelay = (Math.random()*duration)+'s';
    field.appendChild(dot);
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.15});
  revealEls.forEach(el=>io.observe(el));