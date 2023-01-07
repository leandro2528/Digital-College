
let totalSlider = document.querySelectorAll('.slider-item').length;
let currentSlider = 0;

document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSlider})`;
document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlider --;
    if(currentSlider < 0) {
        currentSlider = totalSlider -1;
    }
    updateMargin();
}
function goNext() {
    currentSlider ++;
    if(currentSlider > (totalSlider -1)) {
        currentSlider = 0;
    }
    updateMargin();
}
function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlider * sliderItemWidth);
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;
}
setInterval(goNext, 4000);

// slider-teacher


let maxSlider = document.querySelectorAll('.slider-teacher-card-item').length;
let sliderCurrent = 0;

document.querySelector('.slider-teacher-card-width').style.width = `calc(100vw * ${maxSlider})`;
document.querySelector('.slider-teacher-card-controls').style.height = `${document.querySelector('.slider-teacher-card').clientHeight}px`;

function teacherPrev() {
    sliderCurrent--;
    if(sliderCurrent < 0) {
        sliderCurrent = maxSlider -1;
    }
    passMargin();
}
function teacherNext() {
    sliderCurrent++;
    if(sliderCurrent > (maxSlider -1)) {
        sliderCurrent = 0;
    }
    passMargin();
}
function passMargin() {
    let sliderTeacherItemWidth = document.querySelector('.slider-teacher-card-item').clientWidth;
    let marginPass = (sliderCurrent * sliderTeacherItemWidth);
    document.querySelector('.slider-teacher-card-width').style.marginLeft = `-${marginPass}px`;
}

function mostrar() {
    document.querySelector('.background-alessandro').style.display = 'block';
}
setInterval(teacherNext, 4000);