let screen = document.getElementById('screen');
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
let toggle_div = document.getElementById('toggle-div');
let toggle_button = document.getElementById('toggle-button');
let body = document.getElementById('body');
let heading = document.getElementById('heading');
let toggle_section = document.getElementById('toggle-section');
let toggle_list = document.getElementById('toggle-list');
let text = document.getElementById('screen-text');
let keypad = document.getElementById('keypad');
let boxes = document.getElementsByClassName('box');
let del_box = document.getElementById('box-4');
let reset_box = document.getElementById('box-17');
let equal_box = document.getElementById('box-18');
let calc_text = document.getElementById('calc-text');
let theme_text = document.getElementById('theme-text');
let valid_num = '';
let comma_check=0;
// toggle function
let count = 1;
toggle_div.addEventListener('click', ()=>{
    count = count + 1;
    if (count == 1){
        toggle_div.style.justifyContent = 'flex-start';
        toggle_button.style.backgroundColor = 'hsl(6, 63%, 50%)';
        body.style.backgroundColor = 'hsl(222, 26%, 31%)';
        toggle_div.style.backgroundColor = 'hsl(223, 31%, 20%)';
        keypad.style.backgroundColor = 'hsl(223, 31%, 20%)';
        screen.style.backgroundColor = 'hsl(224, 36%, 15%)';
        for (let i = 0; i<boxes.length; i++){
            boxes[i].style.backgroundColor = 'hsl(30, 25%, 89%)';
            boxes[i].style.boxShadow = 'var(--boxes-shadow-1)';
            boxes[i].style.color = 'hsl(221, 14%, 31%)';
        }
        del_box.style.backgroundColor='hsl(225, 21%, 49%)';
        del_box.style.boxShadow='var(--del-shadow-1)';
        del_box.style.color = 'white';
        reset_box.style.backgroundColor='hsl(225, 21%, 49%)';
        reset_box.style.boxShadow='var(--reset-shadow-1)';
        reset_box.style.color = 'white';
        equal_box.style.backgroundColor='hsl(6, 63%, 50%)';
        equal_box.style.boxShadow='var(--equal-shadow-1)';
        equal_box.style.color = 'white';
        text.style.color = 'white';
        toggle_list.style.color = 'white';
        calc_text.style.color = 'white';
        theme_text.style.color = 'white';
        
    }
    else if(count == 2){
        toggle_div.style.justifyContent = 'center';
        toggle_button.style.backgroundColor = 'hsl(25, 98%, 40%)';
        body.style.backgroundColor = 'hsl(0, 0%, 90%)';
        toggle_div.style.backgroundColor ='hsl(0, 5%, 81%)';
        keypad.style.backgroundColor = 'hsl(0, 5%, 81%)';
        screen.style.backgroundColor = 'hsl(0, 0%, 93%)';
        for (let i = 0; i<boxes.length; i++){
            boxes[i].style.backgroundColor = 'hsl(45, 7%, 89%)';
            boxes[i].style.boxShadow = 'var(--boxes-shadow-2)';
            boxes[i].style.color = 'hsl(60, 10%, 19%)';
        }
        del_box.style.backgroundColor='hsl(185, 42%, 37%)';
        del_box.style.boxShadow='var(--del-shadow-2)';
        del_box.style.color = 'white';
        reset_box.style.backgroundColor='hsl(185, 42%, 37%)';
        reset_box.style.boxShadow='var(--reset-shadow-2)';
        reset_box.style.color = 'white';
        equal_box.style.backgroundColor='hsl(25, 98%, 40%)';
        equal_box.style.boxShadow='var(--equal-shadow-2)';
        equal_box.style.color = 'white';
        text.style.color = ' hsl(60, 10%, 19%)';
        toggle_list.style.color = ' hsl(60, 10%, 19%)';
        calc_text.style.color = ' hsl(60, 10%, 19%)';
        theme_text.style.color = ' hsl(60, 10%, 19%)';
    }
    else if(count == 3){
        count = 0;
        toggle_div.style.justifyContent = 'flex-end';
        toggle_button.style.backgroundColor = 'hsl(176, 100%, 44%)';
        body.style.backgroundColor = 'hsl(268, 75%, 9%)';
        toggle_div.style.backgroundColor ='hsl(268, 71%, 12%)';
        keypad.style.backgroundColor = ' hsl(268, 71%, 12%)';
        screen.style.backgroundColor = 'hsl(268, 71%, 12%)';
        for (let i = 0; i<boxes.length; i++){
            boxes[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
            boxes[i].style.boxShadow = 'var(--boxes-shadow-3)';
            boxes[i].style.color = 'hsl(52, 100%, 62%)';
        }
        del_box.style.backgroundColor='hsl(281, 89%, 26%)';
        del_box.style.boxShadow='var(--del-shadow-3)';
        del_box.style.color = 'white';
        reset_box.style.backgroundColor='hsl(281, 89%, 26%)';
        reset_box.style.boxShadow='var(--reset-shadow-3)';
        reset_box.style.color = 'white';
        equal_box.style.backgroundColor='hsl(176, 100%, 44%)';
        equal_box.style.boxShadow='var(--equal-shadow-3)';
        equal_box.style.color = 'hsl(198, 20%, 13%)';
        text.style.color = ' hsl(52, 100%, 62%)';
        toggle_list.style.color = ' hsl(52, 100%, 62%)';
        calc_text.style.color = ' hsl(52, 100%, 62%)';
        theme_text.style.color = ' hsl(52, 100%, 62%)';
    }

})
box_1.addEventListener('click', ()=>{
    valid_num = valid_num + '7';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text == '0'){
        new_string = '7';
    }
    else{
        new_string = screen_text + '7';
    }
    comma_check = comma_check +1;
    if (comma_check == 3){
        new_string = new_string + ','
        comma_check = 0;
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_2.addEventListener('click', ()=>{
    valid_num = valid_num + '8';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '8';
    }
    else{
        new_string = screen_text + '8';
    }
    comma_check = comma_check +1;
    if (comma_check == 3){
        new_string = new_string + ','
        comma_check = 0;
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_3.addEventListener('click', ()=>{
    valid_num = valid_num + '9';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '9';
    }
    else{
        new_string = screen_text + '9';
    }
    comma_check = comma_check +1;
    if (comma_check == 3){
        new_string = new_string + ','
        comma_check = 0;
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_5.addEventListener('click', ()=>{
    valid_num = valid_num + '4';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '4';
    }
    else{
        new_string = screen_text + '4';
    }
    comma_check = comma_check +1;
    if (comma_check == 3){
        new_string = new_string + ','
        comma_check = 0;
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_6.addEventListener('click', ()=>{
    valid_num = valid_num + '5';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '5';
    }
    else{
        new_string = screen_text + '5';
    }
    comma_check = comma_check +1;
    if (comma_check == 3){
        new_string = new_string + ','
        comma_check = 0;
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_7.addEventListener('click', ()=>{
    valid_num = valid_num + '6';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '6';
    }
    else{
        new_string = screen_text + '6';
    }
    comma_check = comma_check +1;
    if (comma_check == 3){
        new_string = new_string + ','
        comma_check = 0;
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_9.addEventListener('click', ()=>{
    valid_num = valid_num + '1';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '1';
    }
    else{
        new_string = screen_text + '1';
    }
    comma_check = comma_check +1;
    if (comma_check == 3){
        new_string = new_string + ','
        comma_check = 0;
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_10.addEventListener('click', ()=>{
    valid_num = valid_num + '2';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string
    if (screen_text == '0'){
        new_string = '2';
    }
    else{
        new_string = screen_text + '2';
    }
    comma_check = comma_check +1;
    if (comma_check == 3){
        new_string = new_string + ','
        comma_check = 0;
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
box_11.addEventListener('click', ()=>{
    valid_num = valid_num + '3';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text == '0'){
        new_string = '3';
    }
    else{
        new_string = screen_text + '3';
    }
    comma_check = comma_check +1;
    if (comma_check == 3){
        new_string = new_string + ','
        comma_check = 0;
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
// decimal point
box_13.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (valid_num.includes('.')){
        new_string = screen_text;
    }
    else{
        new_string = screen_text + '.';
        valid_num = valid_num + '.';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
// zero
box_14.addEventListener('click', ()=>{
    valid_num = valid_num + '0';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text == '' || screen_text == '0'){
        new_string = '0';
        comma_check = comma_check;
    }
    else{
        new_string = screen_text + '0';
        comma_check = comma_check +1;
    }
    if (comma_check == 3){
        new_string = new_string + ','
        comma_check = 0;
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
// delete
box_4.addEventListener('click', ()=>{
    let screen_text = document.getElementById('screen-text').innerHTML;
    document.getElementById('screen-text').innerHTML = screen_text.slice(0,-1);
})
// reset
box_17.addEventListener('click', ()=>{
    document.getElementById('screen-text').innerHTML = '';
})
// addition
box_8.addEventListener('click', ()=>{
    valid_num = '';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text.slice(-1) == '+'){
        new_string = screen_text;
    }
    else if (screen_text.slice(-1) == '-'){
        new_string = screen_text.slice(0, -1) + '+';
    }
    else if (screen_text.slice(-1) == '/'){
        new_string = screen_text.slice(0, -1) + '+';
    }
    else if (screen_text.slice(-1) == '*'){
        new_string = screen_text.slice(0, -1) + '+';
    }
    else if (screen_text == '0'){
        new_string = screen_text + '+';
    }
    else{
        new_string = screen_text + '+';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
// subtraction
box_12.addEventListener('click', ()=>{
    valid_num = '';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text.slice(-1) == '-'){
        new_string = screen_text;
    }
    else if (screen_text.slice(-1) == '+'){
        new_string = screen_text.slice(0, -1) + '-';
    }
    else if (screen_text == '0'){
        new_string = screen_text + '-';
    }
    else{
        new_string = screen_text + '-';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
// division
box_15.addEventListener('click', ()=>{
    valid_num = '';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text.slice(-1) == '/'){
        new_string = screen_text;
    }
    else if (screen_text.slice(-1) == '*'){
        new_string = screen_text.slice(0, -1) + '/';
    }
    else if (screen_text.slice(-1) == '+'){
        new_string = screen_text.slice(0, -1) + '/';
    }
    else if (screen_text.slice(-1) == '-'){
        new_string = screen_text.slice(0, -1) + '/';
    }
    else if (screen_text == '0'){
        new_string = screen_text + '/';
    }
    else{
        new_string = screen_text + '/';
    }
    document.getElementById('screen-text').innerHTML = new_string;
})
// multiplication
box_16.addEventListener('click', ()=>{
    valid_num = '';
    let screen_text = document.getElementById('screen-text').innerHTML;
    let new_string;
    if (screen_text.slice(-1) == '*'){
        new_string = screen_text;
    }
    else if (screen_text.slice(-1) == '/'){
        new_string = screen_text.slice(0, -1) + '*';
    }
    else if (screen_text.slice(-1) == '-'){
        new_string = screen_text.slice(0, -1) + '*';
    }
    else if (screen_text.slice(-1) == '+'){
        new_string = screen_text.slice(0, -1) + '*';
    }
    else if (screen_text == '0'){
        new_string = screen_text + '*';
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
    if (decimal_check(new_string) == false){
        document.getElementById('screen-text').innerHTML = new_string;
    }
    else{
        large_decimal(new_string);
    }
})
function decimal_check(parameter){
    let stringed = parameter.toString();
    if (stringed.includes('.')){
        return true;
    }
    else{
        return false;
    }
}
function large_decimal(value){
    let decimal_list = value.toString().split('.');
    let part_1 = Number(decimal_list[0]);
    let part_2 = Number(decimal_list[1]);
    if (decimal_list[1].length > 7){
        round_up(part_1, part_2);
    }
    else{
        document.getElementById('screen-text').innerHTML = value;
    }
}
function round_up(whole_number, fraction){
    let fraction_string =  fraction.toString();
    let new_fraction = fraction_string.slice(0, 8);
    whole_number = whole_number.toString();
    if (Number(new_fraction.slice(-1))>4){
        // add 1
        new_fraction = new_fraction.slice(0,-1);
        new_fraction = Number(new_fraction) + 1;
        new_fraction = new_fraction.toString();
        let new_decimal =  Number((whole_number + '.' + new_fraction));
        document.getElementById('screen-text').innerHTML = new_decimal;
    }
    else{
        new_fraction = new_fraction.slice(0,-1);
        new_fraction = new_fraction.toString();
        let new_decimal =  Number((whole_number + '.' + new_fraction));
        document.getElementById('screen-text').innerHTML = new_decimal;
    }
}





