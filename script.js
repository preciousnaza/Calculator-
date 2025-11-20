let buttons = document.querySelectorAll('.btn')

let inputs = document.querySelector('.input')

let equal = document.querySelector('.equal')



buttons.forEach(function(buttons,i){

    buttons.addEventListener('click',function(){

       //show numbers

        if(buttons.id == 'show'){

            let values = buttons.innerHTML

            inputs.value += values

        }



        //clear input

        if(buttons.id == 'clear-all'){

            inputs.value = ""

        }



        //delete

        if(buttons.id == 'clear-one'){

            inputs.value = inputs.value.slice(0,-1)

        }



        //precent

        if(buttons.id == 'percent'){

            inputs.value = Number(inputs.value) / 10;

        }



        //evaluate input

        if(buttons.id == 'equate'){

            calculate()

         }

         

        document.addEventListener('keydown',function(e){

            if(e.key === "Enter"){

                calculate();

            }

        })



        function calculate(){

            try{

                let answer = eval(inputs.value)

                inputs.value = answer

            }catch{

                inputs.value = "Error"

            }

        }

           

    })

})





