//Problema 2

var sudoku = {

    board: //0    1    2    3    4    5    6    7    8   
          [["5", "3", ".", ".", "7", ".", ".", ".", "."], //0  
           ["6", ".", ".", "1", "9", "5", ".", ".", "."], //1
           [".", "9", "8", ".", ".", ".", ".", "6", "."], //2
           ["8", ".", ".", ".", "6", ".", ".", ".", "3"], //3
           ["4", ".", ".", "8", ".", "3", ".", ".", "1"], //4
           ["7", ".", ".", ".", "2", ".", ".", ".", "6"], //5
           [".", "6", ".", ".", ".", ".", "2", "8", "."], //6
           [".", ".", ".", "4", "1", "9", ".", ".", "5"], //7
           [".", ".", ".", ".", "8", ".", ".", "7", "9"]],//8


    linhaEcoluna: function (direcao) { 

        for (var i = 0 ; i < 9; i++) { 
            var list = [];

            for (var j = 0 ; j < 9; j++) { 
                var element = 0;

                switch(direcao){ // Serve para verificar pela linha ou pela coluna
                    case 0: // linha
                        element = this.board[i][j];
                        break;
                    case 1: //coluna
                        element = this.board[j][i];
                        break;
                }

                if (element != ".") { // Se element for diferente de "." é colocado na lista
                    list.push(element); //A lista recebe o elemento do tabuleiro
                }
            }

            if (this.organiza(list) == false) { //Confere se a lista tem elemento repetido
                return false;
            }
            list.splice(0,list.length); // Apaga toda a lista 
        }
        return true;
    },


    matriz: function () {

        for (var k = 0; k < 3; k++) {  // O k separa as linhas em conjuntos de 3
            var list = [];

              /*k=0  [][][] ->  linha(do sudoku) = 0,1,2 
                k=1  [][][] ->  linha(do sudoku) = 3,4,5
                k=2  [][][] ->  linha(do sudoku) = 6,7,8     */

            for (var i = 0; i < 9; i++) { // Passa linha por linha 
                var element = 0;

                switch (k) {

                    case 0: { 
                        for (var j = 0; j < 3; j++) {//Passa pelas colunas 0,1,2
                            element = this.board[i][j]; //Recebe cada elemento do tabuleiro

                            if (element != ".") { // se element for diferente de "." a lista recebe o elemento
                                list.push(element);
                            }
                        }
                        break;
                    }
                    case 1: { 
                        for (var j = 3; j < 6; j++) { //Passa pelas colunas 3,4,5
                            element = this.board[i][j]; //Recebe cada elemento do tabuleiro 

                            if (element != ".") {  // se elemento for diferente de "." a lista recebe o elemento
                                list.push(element);
                            }
                        }
                        break;
                    }
                    case 2: {
                        for (var j = 6; j < 9; j++) { //Passa pelas colunas 6,7,8
                            element = this.board[i][j]; //Recebe cada elemento do tabuleiro

                            if (element != ".") { // se elemento for diferente de "." a lista recebe o elemento
                                list.push(element);
                            }
                        }
                        break;
                    }
                }

                if (i == 2 || i == 5 || i == 8) {  // quando i for igual a 2,5,8 terá feito uma lista com elementos de uma matriz 3x3 sem "." 
                    if (this.organiza(list) == false) { //Organiza a lista e verifica se existe algum elemento repetido
                        return false; // se existir a função retorna falso 
                    }
                    list.splice(0, list.length); // Apago a lista para receber a próxima lista de uma matriz 3x3
                }
            }

        }
        return true;
    },

    organiza(list) {
        list.sort((a, b) => a > b ? 1 : -1); //Organiza a lista 
            //console.log(list);

        for (var item in list) {
            // item = 1;
            var next = Number(item) + 1; // next = 2
            
            // Como a lista está organizada o próximo elemento sempre será maior ou igual
            if (list[item] == list[next]) { //A função verifica se é igual 
                return false; // Se for retorna falso
            }
        }
        return true;
    },

    // Função que verifica linha, coluna, e matriz
    verifica() {
        var linha = this.linhaEcoluna(0);
        var coluna = this.linhaEcoluna(1);
        var table = this.matriz();
        //console.log(linha,coluna,table);

        if (linha == true && coluna == true && table == true) {
            return true;
        }
        else {
            return false;
        }
    },
}