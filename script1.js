//Problema 1

var list = [8, 5, 10, 5, 2, 4, 4, 3, 4, 5, 6];

//organiza(list);

function organiza(list){
    list.sort((a, b) => a > b ? 1 : -1); //Organiza a lista
    output(list); 
    console.log(list);
}

function output(list) {

    for (var item in list) { 

        var next = Number(item) + 1; 

        // Como a lista está organizada o próximo elemento sempre será maior ou igual ao anterior 
        if (list[item] == list[next]) { //Verifica se o próximo elemento é igual
            var counter = 0;

            // Passa pela lista verificando a quantidade de vezes que o mesmo elemento aparece
            for (var a = 0; a < list.length; a++) { 
                //Se for igual o contador aumenta em um 
                if (list[a] == list[item]) { 
                    counter++;
                }
            }
            counter--; //Diminuo o contador para que sobre apenas um elemento que está repetido
            list.splice(next, counter); // Apago os repetidos 
        }
    }
} 
