let string = ""
// let button  = document.getElementsByClassName('button')
// console.log(button)
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{

    
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == "="){
            try{ string =   Function( "return " + string); //deprecated ---> check this out
            document.querySelector('.input').value = string();}
            catch{
                let err = new Error("Invalid Input");
                document.querySelector('.input').value = err;}
            }
           
        
        else if(e.target.innerHTML == "C"){
                string = ""
                document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML == "(x)²"){
            string = Function("return "+ ((+string) * (+string)) )
            console.log(typeof(string))

            document.querySelector('.input').value = string();
        }
        else if(e.target.innerHTML == "√(x)"){
            string = Function("return "+ Math.sqrt(+string) )
            document.querySelector('.input').value = string();
        }
        else{
            console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('.input').value = string;
        }
        
    })
})

