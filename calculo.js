const calculo = [

    function(a, b){
        return "Resultado: " + a + " + " + b + " = " + (a + b);
    },

    function(a, b){
        return "Resultado: " + a + " - " + b + " = " + (a - b);
    },

    function(a, b){
        return "Resultado: " + a + " * " + b + " = " + (a * b);
    },

    function(a, b){
        if(b == 0){
            return "Resultado: " + a + " / " + b + " = " + "Não e possivel dividir por zero(0)!!"
        }else{
            return "Resultado: " + a + " / " + b + " = " + (a / b)
        }
    }

];

export default calculo;