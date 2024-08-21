var section1 = document.querySelector('.section1');
var left = document.querySelector('.left');
var center = document.querySelector('.center');
var right = document.querySelector('.right');
var isFirstSectionVisible = true;

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
        left.style.visibility = 'hidden';
        center.style.visibility = 'hidden';
        section1.style.paddingTop = '0';
        section1.style.zIndex = '1'; // Thêm thuộc tính z-index vào section1
        if (isFirstSectionVisible) {
            right.style.position = 'fixed';
            right.style.top = '20px';
            right.style.transform = 'translateY(0%)';
            right.style.right = '0';
            right.style.zIndex = '1'; // Thêm thuộc tính z-index vào right
        }
    } else {
        left.style.visibility = 'visible';
        center.style.visibility = 'visible';
        section1.style.paddingTop = '0px'; // Thay đổi giá trị padding-top theo ý muốn
        section1.style.zIndex = 'auto'; // Đặt lại giá trị z-index của section1 về mặc định
        right.style.position = 'static';
        right.style.zIndex = 'auto'; // Đặt lại giá trị z-index của right về mặc định
    }

    var rect = section1.getBoundingClientRect();
    if (rect.top >= 0) {
        isFirstSectionVisible = true;
    } else {
        isFirstSectionVisible = false;
    }
});