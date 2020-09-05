// function flip() {
//     $('.card').toggleClass('flipped');
// }
$(function(){
    $(".flip").flip({
        trigger: 'manual'
    });
});

function flip(){
    $(".flip").flip('toggle');
}