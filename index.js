let screen = document.getElementById('screen-text').innerHTML;
let box_1 = document.getElementById('box-1');
let box_2 = document.getElementById('box-2');
let box_3 = document.getElementById('box-3');
let box_4 = document.getElementById('box-4');
let box_5 = document.getElementById('box-5');
let box_6 = document.getElementById('box-6');
let box_7 = document.getElementById('box-7');
let box_8 = document.getElementById('box-8');
let box_9 = document.getElementById('box-9');
let box_10 = document.getElementById('box-10');
let box_11= document.getElementById('box-11');
let box_12= document.getElementById('box-12');
let box_13= document.getElementById('box-13');
let box_14= document.getElementById('box-14');
let box_15= document.getElementById('box-15');
let box_16= document.getElementById('box-16');
let box_17= document.getElementById('box-17');
let box_18= document.getElementById('box-18');
let toggle = document.getElementById('toggle-button');
toggle.addEventListener('click', ()=>{
    let position = 1;

})
box_1.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text == '0'){
        new_string = '7';
    }
    else{
        new_string = screen_text + '7';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_2.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '8';
    }
    else{
        new_string = screen_text + '8';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_3.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '9';
    }
    else{
        new_string = screen_text + '9';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_5.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '4';
    }
    else{
        new_string = screen_text + '4';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_6.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '5';
    }
    else{
        new_string = screen_text + '5';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_7.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '6';
    }
    else{
        new_string = screen_text + '6';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_9.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '1';
    }
    else{
        new_string = screen_text + '1';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_10.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '2';
    }
    else{
        new_string = screen_text + '2';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_11.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text == '0'){
        new_string = '3';
    }
    else{
        new_string = screen_text + '3';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_13.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text.includes('.')){
        new_string = screen_text;
    }
    else if (screen_text == '0'){
        new_string = '.';
    }
    else{
        new_string = screen_text + '.';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_14.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text == '0'){
        new_string = '0';
    }
    else{
        new_string = screen_text + '0';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_4.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    document.getElementById('screen-text').innerHTML = screen_text.slice(0,-1);
})
box_17.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    document.getElementById('screen-text').innerHTML = '0';
})
box_8.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text.slice(-1) == '+'){
        new_string = screen_text;
    }
    else if (screen_text == '0'){
        new_string = screen_text;
    }
    else{
        new_string = screen_text + '+';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_12.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text.slice(-1) == '-'){
        new_string = screen_text;
    }
    else if (screen_text == '0'){
        new_string = '-';
    }
    else{
        new_string = screen_text + '-';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_15.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text.slice(-1) == '/'){
        new_string = screen_text;
    }
    else if (screen_text == '0'){
        new_string = screen_text;
    }
    else{
        new_string = screen_text + '/';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_16.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text.slice(-1) == '*'){
        new_string = screen_text;
    }
    else if (screen_text == '0'){
        new_string = screen_text;
    }
    else{
        new_string = screen_text + '*';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_18.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    new_string= eval(screen_text);
    if((new_string.length > 12) && (new_string.includes('.'))){
        new_string = new_string.slice(0, 11);
    }
    document.getElementById('screen-text').innerHTML = new_string;
})

// function to round up
function precise_round(n, r) {
    let int = Math.floor(n).toString()
    if (typeof n !== 'number' || typeof r !== 'number') return 'Not a Number'
    if (int[0] == '-' || int[0] == '+') int = int.slice(int[1], int.length)
    return n.toPrecision(int.length + r)
}



