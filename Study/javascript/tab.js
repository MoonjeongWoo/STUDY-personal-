let 버튼 = $('.tab-button');
let 내용 = $('.tab-content');


//var 안쓰고 let 쓰는 이유는 var변수는 범위가 function임. 
//때문에 var 쓰면 var 변수가 for 바깥에 생성됨
//let은 범위가 중괄호임{} <= 이거 let 변수는 for 안쪽에 생성된디.


//for( let i = 0; i<$('.tab-button').length; i++){
//    버튼.eq(i).on('click',function(){
//      탭열기(i);
//    });
//};


function 탭열기(i) {
    버튼.removeClass('orange');
    버튼.eq(i).addClass('orange');
    내용.removeClass('show');
    내용.eq(i).addClass('show');
}

$('.list').on('click', function (e) {
    for (i = 0; i < 3; i++) {

        if (e.target == document.querySelectorAll('.tab-button')[i]) {
            탭열기(i);
        }
    }
})


var car2 = {
    name: '소나타',
    price: [50000, 30000, 40000]
};

document.getElementById('price').innerHTML = car2.price[0];

$('.form-select').eq(0).on('input', function () {


    var pants = [28, 29, 30];
    var shirts = [90, 95, 100, 105, 110];



    var values = $('.form-select').eq(0).val();

    if (values == '셔츠') {
        shirts.forEach(function (b) {
            $('.form-select').eq(1).append(`<option>${b}<option>`);
        });
        $('.form-select').eq(1).remClass('form-hide');
        $('.form-select').eq(2).addClass('form-hide');
    } else if (values == '모자') {
        $('.form-select').eq(1).addClass('form-hide');
        $('.form-select').eq(2).addClass('form-hide');

    } else if (values == '바지') {
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        pants.forEach(function (a) {
            $('.form-select').eq(1).append(`<option>${a}</option>`);
        });
    }
});


$.get('https://codingapple1.github.io/hello.txt ').done(function (data) {
    console.log(data);
}).fail(function () {
    console.log('실패함');

})
$.get('https://codingapple1.github.io/price.json').done(function(a){
    console.log(a.price);
}).fail(function(){
    console.log('다시 시도하셈 ㅋ');
})