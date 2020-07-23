const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const box1 = document.querySelector('.diva'); 
const box2 = document.querySelector('.divb');
const box3 = document.querySelector('.divf');
const box4 = document.querySelector('.divg');
const body = document.querySelector('body');

Object.prototype.changeDisplayFalse = function(a){
    a.style.display = 'none'
}

Object.prototype.changeDisplayTrue = function(a){
    a.style.display = 'block'
}

changeDisplayFalse(box1)
changeDisplayFalse(box2)
changeDisplayFalse(box3)
changeDisplayFalse(box4)


btn.addEventListener('click',function(){
    changeDisplayFalse(btn)
    let al = 0;
        body.style.backgroundColor = 'orange'
        changeDisplayTrue(box1)
        changeDisplayTrue(box2)
        changeDisplayTrue(box3)
        changeDisplayTrue(box4)

        const time = setInterval(function(){
            al++

            box1.style.marginLeft = al+'px'
            box1.style.marginTop = al+'px'

            box2.style.marginLeft = al+'px'
            box2.style.marginBottom = al+'px'

            box3.style.marginRight = al+'px'
            box3.style.marginTop = al+'px'

            box4.style.marginRight = al+'px'
            box4.style.marginBottom = al+'px'

            if(al == 500){
                clearInterval(time)
                changeDisplayFalse(box1)
                changeDisplayFalse(box2)
                changeDisplayFalse(box3)
                changeDisplayFalse(box4)
                changeDisplayTrue(btn1)
                btn1.addEventListener('click',function(){
                    changeDisplayFalse(btn1)

                    changeDisplayTrue(box1)
                    changeDisplayTrue(box2)
                    changeDisplayTrue(box3)
                    changeDisplayTrue(box4)

                    body.style.backgroundColor = 'blue'

                    const time1 = setInterval(function(){
                        al--

                        box1.style.marginLeft = al+'px'
                        box1.style.marginTop = al+'px'
            
                        box2.style.marginLeft = al+'px'
                        box2.style.marginBottom = al+'px'
            
                        box3.style.marginRight = al+'px'
                        box3.style.marginTop = al+'px'
            
                        box4.style.marginRight = al+'px'
                        box4.style.marginBottom = al+'px'

                        if(al == 0){
                            clearInterval(time1)
                            changeDisplayFalse(box1)
                            changeDisplayFalse(box2)
                            changeDisplayFalse(box3)
                            changeDisplayFalse(box4)
                            changeDisplayTrue(btn)
                        }
                    },10)
                });
            }
        },10)

})