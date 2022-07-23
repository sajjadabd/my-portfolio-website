//typed js 


var typed = new Typed('#element', {
  strings: ["Web Develoer", "Programmer" , "Game Maker"],
  typeSpeed: 30 ,
  showCursor: true,
  cursorChar: '|',
  loop : true,
  backSpeed : 30,
  backDelay: 1700,
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
});

// end of typed js


// fill color animation of SVG path

let pathes = document.querySelectorAll('#visual path');

console.log(pathes);

let fillColors = [];


for( let i=0;i<pathes.length;i++ ) {
  pathes[i].addEventListener('mouseenter' , () => {
    //console.log(`hovering ${i}`);
    fillColors[i] = pathes[i].getAttribute('fill');
    pathes[i].setAttribute('fill' , '#000');

    setTimeout( () => {
      pathes[i].setAttribute('fill' , fillColors[i]);
    } , 500);
  });
}

// end of SVG path fill Color animation


// animating svg with animejs

let elasticity = 300;

anime({
  targets: '.firstAnime',
  d: [
    { value: 'M41.8,-45.3C56.3,-37.8,71.4,-26.5,73.7,-13.1C76,0.4,65.4,16,56.6,34C47.8,51.9,40.7,72.2,27.4,78.3C14.2,84.4,-5.4,76.4,-24.2,68.6C-43,60.8,-61.1,53.2,-70.8,39.4C-80.6,25.6,-82,5.4,-76.1,-10.8C-70.2,-27.1,-56.9,-39.5,-43,-47.1C-29,-54.7,-14.5,-57.5,-0.4,-57C13.7,-56.5,27.4,-52.8,41.8,-45.3Z' , duration : 3000 },
    { value: 'M38.4,-44.8C47.3,-38.3,50.3,-23.8,56.3,-7.3C62.3,9.1,71.2,27.7,64.9,36.3C58.5,44.9,36.9,43.6,19,48.4C1.1,53.3,-13.2,64.4,-28.9,64.9C-44.7,65.5,-61.9,55.6,-73.6,40.2C-85.2,24.8,-91.3,3.8,-84.4,-11.3C-77.4,-26.3,-57.4,-35.5,-41.2,-40.6C-25,-45.8,-12.5,-47,1.1,-48.4C14.7,-49.7,29.5,-51.2,38.4,-44.8Z' , duration : 3000 },
    { value: 'M44.6,-60.4C51.4,-47.4,46.2,-27.3,47.3,-10C48.3,7.2,55.4,21.7,51.4,30.5C47.3,39.4,32,42.5,18.9,43.6C5.9,44.7,-4.8,43.7,-20.3,43.4C-35.8,43.2,-56,43.6,-68.6,33.8C-81.1,24,-86.1,4,-82.8,-14.6C-79.6,-33.2,-68.1,-50.4,-53,-62C-37.8,-73.6,-18.9,-79.6,0,-79.6C18.9,-79.6,37.7,-73.5,44.6,-60.4Z' , duration : 3000 },
    { value: 'M41.7,-56.2C54.4,-48.2,65.2,-36.5,68.8,-23C72.3,-9.5,68.5,5.8,65.3,22.8C62,39.9,59.2,58.7,48.4,64.8C37.6,71,18.8,64.4,4.2,58.7C-10.4,52.9,-20.8,47.9,-35.4,43C-49.9,38.1,-68.7,33.3,-75.1,22.3C-81.6,11.4,-75.7,-5.7,-68.6,-20.7C-61.6,-35.8,-53.3,-48.9,-41.7,-57.3C-30,-65.6,-15,-69.2,-0.2,-68.9C14.5,-68.5,29,-64.2,41.7,-56.2Z' , duration : 3000 },
  ],
  fill : [
    { value : '#ef233c', duration : 3000 },
    { value : '#c9184a', duration : 3000 },
    { value : '#bf0603', duration : 3000 },
    { value : '#d62828', duration : 3000 },
  ],
  elasticity : elasticity,
  delay : 1000,
  endDelay : 3000,
  // easing: 'easeInOutQuad',
  // easing: 'easeInOutExpo',
  // easing : 'linear',
  // easing: 'easeInOutQuart',
  // easing: 'easeInOutQuad',
  easing: 'easeOutElastic(3, 3)',
  direction: 'alternate',
  loop: true
});


let morph1 = document.querySelector('#morph1');

console.log(morph1);

morph1.addEventListener('mouseenter', () => {
  anime({
    targets: '#morph1 .frontBlob .blob',
    d: [
      { value: 'M29.5,-48.9C39.3,-45.4,49.1,-39.7,54.1,-31.2C59.1,-22.7,59.3,-11.3,60.8,0.8C62.2,13,64.9,26,62.6,39.3C60.4,52.5,53.1,66,41.8,71.6C30.6,77.1,15.3,74.8,3,69.6C-9.2,64.3,-18.4,56.1,-29.3,50.3C-40.2,44.5,-52.7,41.1,-64.7,33.1C-76.7,25.1,-88.2,12.5,-87.7,0.3C-87.3,-12,-74.9,-24.1,-65,-35.7C-55.1,-47.3,-47.7,-58.5,-37.2,-61.6C-26.8,-64.7,-13.4,-59.7,-1.8,-56.6C9.8,-53.5,19.7,-52.3,29.5,-48.9Z' },
    ],
    elasticity : elasticity ,
    //easing: 'easeOutQuad',
    //easing: 'spring(1, 800, 10, 0)',
    //easing: 'easeInOutExpo',
    //easing : 'linear',
    //easing: 'easeOutElastic(1, .8)',
    duration: 1000,
  });

  anime({
    targets: '#morph1 .backBlob .blob',
    d: [
      { value: 'M30.3,-60.3C37.5,-48.4,40.2,-36.6,45.6,-26.5C51,-16.5,59,-8.3,62.4,1.9C65.8,12.2,64.5,24.3,59.6,35.2C54.7,46.1,46.2,55.7,35.7,60.5C25.1,65.4,12.6,65.4,-0.8,66.8C-14.2,68.2,-28.4,71.1,-35.7,64.3C-42.9,57.6,-43.1,41.3,-50.2,29C-57.2,16.7,-71,8.3,-77,-3.5C-83.1,-15.3,-81.4,-30.7,-74.6,-43.3C-67.7,-56,-55.8,-66,-42.5,-74.4C-29.3,-82.8,-14.6,-89.5,-1.5,-86.9C11.6,-84.2,23.2,-72.2,30.3,-60.3Z' },
    ],
    elasticity : elasticity ,
    //easing: 'easeOutQuad',
    //easing: 'spring(1, 800, 10, 0)',
    //easing: 'easeInOutExpo',
    //easing : 'linear',
    //easing: 'easeOutElastic(1, .8)',
    duration: 1000,
    delay : 100,
  });
});

// M33.2,-59C45.5,-50.3,59.7,-46.5,69.1,-37.5C78.5,-28.5,83.1,-14.2,80.1,-1.7C77.1,10.8,66.6,21.6,58.2,32.4C49.9,43.3,43.8,54.3,34.5,63.8C25.1,73.2,12.6,81.2,-1.3,83.5C-15.2,85.8,-30.4,82.3,-43,74.8C-55.7,67.2,-65.8,55.5,-70.5,42.4C-75.3,29.2,-74.6,14.6,-76.1,-0.9C-77.6,-16.3,-81.2,-32.7,-76.7,-46.1C-72.1,-59.5,-59.3,-70.1,-45.2,-77.7C-31,-85.3,-15.5,-89.9,-2.5,-85.5C10.4,-81.1,20.9,-67.7,33.2,-59Z

morph1.addEventListener('mouseleave', () => {
  anime({
    targets: '#morph1 .frontBlob .blob',
    d: [
      { value: 'M33.2,-59C45.5,-50.3,59.7,-46.5,69.1,-37.5C78.5,-28.5,83.1,-14.2,80.1,-1.7C77.1,10.8,66.6,21.6,58.2,32.4C49.9,43.3,43.8,54.3,34.5,63.8C25.1,73.2,12.6,81.2,-1.3,83.5C-15.2,85.8,-30.4,82.3,-43,74.8C-55.7,67.2,-65.8,55.5,-70.5,42.4C-75.3,29.2,-74.6,14.6,-76.1,-0.9C-77.6,-16.3,-81.2,-32.7,-76.7,-46.1C-72.1,-59.5,-59.3,-70.1,-45.2,-77.7C-31,-85.3,-15.5,-89.9,-2.5,-85.5C10.4,-81.1,20.9,-67.7,33.2,-59Z' },
    ],
    elasticity : elasticity ,
    //easing: 'easeOutQuad',
    //easing: 'spring(1, 800, 10, 0)',
    //easing: 'easeInOutExpo',
    //easing : 'linear',
    //easing: 'easeOutElastic(1, .8)',
    duration: 1000,
  });


  anime({
    targets: '#morph1 .backBlob .blob',
    d: [
      { value: 'M31.3,-52.6C40.3,-49.1,47,-40,55.4,-30.4C63.8,-20.7,73.8,-10.3,79,3C84.2,16.4,84.6,32.7,75.3,40.8C66,48.8,46.9,48.6,32.8,56.8C18.6,64.9,9.3,81.6,-0.3,82.2C-9.9,82.7,-19.9,67.2,-29,56.1C-38.1,44.9,-46.3,38.2,-54.5,29.6C-62.7,21,-70.9,10.5,-74.8,-2.2C-78.7,-15,-78.2,-30,-72.4,-42.7C-66.5,-55.4,-55.3,-65.8,-42.3,-67C-29.3,-68.3,-14.7,-60.4,-1.7,-57.3C11.2,-54.3,22.4,-56.2,31.3,-52.6Z' },
    ],
    elasticity : elasticity ,
    //easing: 'easeOutQuad',
    //easing: 'spring(1, 800, 10, 0)',
    //easing: 'easeInOutExpo',
    //easing : 'linear',
    //easing: 'easeOutElastic(1, .8)',
    duration: 1000,
    delay : 100,
  });
});








let morph2 = document.querySelector('#morph2');

console.log(morph2);

morph2.addEventListener('mouseenter', () => {
  anime({
    targets: '#morph2 .frontBlob .blob',
    d: [
      { value: 'M44.5,-70.6C57.2,-69.8,66.5,-56.8,68.8,-43C71.2,-29.2,66.6,-14.6,59.6,-4C52.6,6.5,43.3,13.1,39,23.4C34.6,33.8,35.2,47.9,29.6,53.4C23.9,58.9,11.9,55.6,2.8,50.7C-6.3,45.9,-12.6,39.3,-23.7,37C-34.8,34.6,-50.6,36.5,-62.7,31C-74.8,25.6,-83.2,12.8,-78.3,2.8C-73.4,-7.1,-55.1,-14.2,-44.3,-21.9C-33.4,-29.5,-30,-37.8,-23.9,-42.3C-17.7,-46.9,-8.9,-47.9,3.5,-54C15.9,-60.1,31.9,-71.5,44.5,-70.6Z' },
    ],
    elasticity : elasticity ,
    //easing: 'easeOutQuad',
    //easing: 'spring(1, 800, 10, 0)',
    //easing: 'easeInOutExpo',
    //easing : 'linear',
    //easing: 'easeOutElastic(1, .8)',
    duration: 1000,
  });

  anime({
    targets: '#morph2 .backBlob .blob',
    d: [
      { value: 'M25.9,-52C31.9,-41.3,34,-31.1,45.2,-22.5C56.4,-13.9,76.8,-6.9,79.3,1.5C81.9,9.9,66.6,19.7,57.6,32.2C48.6,44.7,45.9,59.8,37.4,63.3C28.9,66.8,14.4,58.6,3.8,52.1C-6.8,45.5,-13.7,40.5,-24.5,38.3C-35.3,36.2,-50.1,36.8,-56.6,30.9C-63.1,25,-61.3,12.5,-63,-1C-64.7,-14.5,-70,-29,-67.7,-42.2C-65.5,-55.5,-55.7,-67.6,-43.2,-74.4C-30.7,-81.3,-15.3,-82.9,-2.7,-78.3C9.9,-73.6,19.9,-62.6,25.9,-52Z' },
    ],
    elasticity : elasticity ,
    //easing: 'easeOutQuad',
    //easing: 'spring(1, 800, 10, 0)',
    //easing: 'easeInOutExpo',
    //easing : 'linear',
    //easing: 'easeOutElastic(1, .8)',
    duration: 1000,
    delay : 100,
  });
});

// M33.2,-59C45.5,-50.3,59.7,-46.5,69.1,-37.5C78.5,-28.5,83.1,-14.2,80.1,-1.7C77.1,10.8,66.6,21.6,58.2,32.4C49.9,43.3,43.8,54.3,34.5,63.8C25.1,73.2,12.6,81.2,-1.3,83.5C-15.2,85.8,-30.4,82.3,-43,74.8C-55.7,67.2,-65.8,55.5,-70.5,42.4C-75.3,29.2,-74.6,14.6,-76.1,-0.9C-77.6,-16.3,-81.2,-32.7,-76.7,-46.1C-72.1,-59.5,-59.3,-70.1,-45.2,-77.7C-31,-85.3,-15.5,-89.9,-2.5,-85.5C10.4,-81.1,20.9,-67.7,33.2,-59Z

morph2.addEventListener('mouseleave', () => {
  anime({
    targets: '#morph2 .frontBlob .blob',
    d: [
      { value: 'M29.8,-46.2C42.8,-44.1,60.4,-44.6,66.3,-37.3C72.3,-30,66.7,-15,61,-3.2C55.4,8.5,49.8,17,43.6,23.8C37.3,30.5,30.3,35.5,23,38C15.6,40.6,7.8,40.6,-0.5,41.5C-8.8,42.3,-17.5,43.9,-24,40.9C-30.4,37.8,-34.5,30.1,-45,22.5C-55.4,14.9,-72.2,7.4,-78.3,-3.5C-84.4,-14.5,-79.8,-28.9,-72.9,-42.6C-65.9,-56.3,-56.7,-69.3,-44.2,-71.6C-31.6,-73.9,-15.8,-65.6,-3.7,-59.1C8.4,-52.7,16.8,-48.2,29.8,-46.2Z' },
    ],
    elasticity : elasticity ,
    //easing: 'easeOutQuad',
    //easing: 'spring(1, 800, 10, 0)',
    //easing: 'easeInOutExpo',
    //easing : 'linear',
    //easing: 'easeOutElastic(1, .8)',
    duration: 1000,
  });


  anime({
    targets: '#morph2 .backBlob .blob',
    d: [
      { value: 'M31.3,-52.6C40.3,-49.1,47,-40,55.4,-30.4C63.8,-20.7,73.8,-10.3,79,3C84.2,16.4,84.6,32.7,75.3,40.8C66,48.8,46.9,48.6,32.8,56.8C18.6,64.9,9.3,81.6,-0.3,82.2C-9.9,82.7,-19.9,67.2,-29,56.1C-38.1,44.9,-46.3,38.2,-54.5,29.6C-62.7,21,-70.9,10.5,-74.8,-2.2C-78.7,-15,-78.2,-30,-72.4,-42.7C-66.5,-55.4,-55.3,-65.8,-42.3,-67C-29.3,-68.3,-14.7,-60.4,-1.7,-57.3C11.2,-54.3,22.4,-56.2,31.3,-52.6Z' },
    ],
    elasticity : elasticity ,
    //easing: 'easeOutQuad',
    //easing: 'spring(1, 800, 10, 0)',
    //easing: 'easeInOutExpo',
    //easing : 'linear',
    //easing: 'easeOutElastic(1, .8)',
    duration: 1000,
    delay : 100,
  });
});






// end of anime js







//animating with kute 


// var tween = KUTE.fromTo(
//   '#path1', 
//   { path: '#path1' }, 
//   { path: '#path2' } , 
//   { repeat : 999 , duraion : 1000 , yoyo : true }
//   )

// tween.start();

// -----------------------------



//download resume 

let resume = document.getElementById('resume');

resume.addEventListener('click' , (e) => {
  //e.preventDefault();
});



// socialLinks 

let social = document.getElementById('social');


let socialLinks = [
  { title : 'website' , id : 'sjabd.ir' , icon : 'fa fa-globe'  , href : 'https://www.sjabd.ir' } ,
  { title : 'instagram' , id : 'sajjad.abd__' , icon : 'fa fa-instagram' , href : 'https://www.instagram.com' } ,
  { title : 'whatsapp' , id : '+98 938 130 8994' , icon : 'fa fa-whatsapp' , href : 'https://wa.me/+989381308994' } ,
  { title : 'email' , id : 'mynameissajjad@gmail.com' , icon : 'fa fa-envelope' , href : 'mailto:mynameissajjad@gmail.com' } ,
  { title : 'linkedin' , id : 'sajjad-abdollahi' , icon : 'fa fa-linkedin-square' , href : 'https://www.linkedin.com/in/sajjad-abdollahi/' } ,
  { title : 'github' , id : 'sajjadabd' , icon : 'fa fa-github' , href : 'https://www.github.com/sajjadabd' } ,
  { title : 'telegram' , id : 'sjabd' , icon : 'fa fa-telegram' , href : 'https://t.me/+989381308994' } ,
  { title : 'skype' , id : 'sajjadabd' , icon : 'fa fa-skype' , href : 'skype:live:71e1f5d503ff12c9' } ,
];


let socialLinksContent = ``;

for( let i=0; i < socialLinks.length; i++) {
  socialLinksContent += `
  <a target="_blank" class="socialLink" href=${socialLinks[i].href}>
    <i class="${socialLinks[i].icon}"></i>
  </a>
  `;
}


social.innerHTML = socialLinksContent;