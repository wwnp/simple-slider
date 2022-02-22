window.onload = () => {
  const slideWidth = 1500
  let offset = 0;
  const slider = document.querySelector('.slider');
  const sliderLine = document.querySelector('.slider-line');
  let widthChilds = Array.from(sliderLine.children).map(item => {
    return slideWidth
  })
  let curr = 0
  const overallWidth = widthChilds.reduce((i, total) => {
    return i + total
  }, 0)

  console.log(overallWidth)

  sliderLine.style.width = overallWidth + 'px'
  adjustWidth(curr, slider, widthChilds)
  Array.from(sliderLine.children).forEach((i) => {
    i.style.width = slideWidth + 'px'
  })

  document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + widthChilds[curr];
    curr++
    if (offset >= overallWidth) {
      offset = 0;
      curr = 0
    }
    sliderLine.style.left = -offset + 'px';
    adjustWidth(curr, slider, widthChilds)
  });

  document.querySelector('.slider-prev').addEventListener('click', function () {
    // debugger
    if (curr === 0) {
      curr = Array.from(sliderLine.children).length - 1
      offset = overallWidth - widthChilds[curr];
      adjustWidth(curr, slider, widthChilds)
      sliderLine.style.left = -offset + 'px';
    } else {
      curr--
      offset = offset - widthChilds[curr];
      adjustWidth(curr, slider, widthChilds)
      sliderLine.style.left = -offset + 'px';
    }
  });
}
function adjustWidth(curr, slider, widthChilds) {
  slider.style.width = widthChilds[curr] + 'px'
}