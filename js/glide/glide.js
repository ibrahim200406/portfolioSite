new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    autoplay:2000,
    breakpoints: {
      991: {
        perView: 2
      },
      758: {
        perView: 1
      },
    }
  }).mount();