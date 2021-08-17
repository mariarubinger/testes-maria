//Criando nossas próprias funções de manipulação de dados

var carros = [{marca: 'Audi', cor: 'preto'},
              {marca: 'Audi', cor: 'branco'},
              {marca: 'Ferarri', cor: 'vermelho'},
              {marca: 'Ford', cor: 'branco'},
              {marca: 'Peugot', cor: 'branco'}];

              function groupBy(array, prop) {
                var value = array.reduce(function(total, item) {
                  var key = item[prop];
                  total[key] = (total[key] || []).concat(item);
              
                  return total;
                }, {});
              
                return value;
              };
              
              var agrupados = groupBy(carros, 'marca');
              console.log(agrupados);

              // → {
                //     "Audi": [
                //       {marca: "Audi", cor: "preto"},
                //       {marca: "Audi", cor: "branco"
                //     ],
                //     "Ferarri": [
                //       {marca: "Ferarri", cor: "vermelho"}
                //     ],
                //     "Ford": [
                //       {marca: "Ford", cor: "branco"}
                //     ],
                //     "Peugot": [
                //       {marca: "Peugot", cor: "branco"}
                //     ]
                //   }

                var produtos = [
                  {id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'},
                  {id: 456, nome: 'Tênis', cor: 'preto', tamanho: '41', categoria: 'Vestuário'},
                  {id: 789, nome: 'Bola', cor: 'verde', tamanho: 'Único', categoria: 'Esporte'}
                ]
                
                function groupBy(array, prop) {
                  var value = array.reduce(function(total, item) {
                    var key = item[prop];
                    total[key] = (total[key] || []).concat(item);
                
                    return total;
                  }, {});
                
                  return value;
                };
                
                var agrupados = groupBy(produtos, 'categoria');
                console.log(agrupados);
                // → {
                //     "Esporte": [
                //       {id: 789, nome: "Bola", cor: "verde", tamanho: "Único", categoria: "Esporte"}
                //     ],
                //     "Vestuário": [
                //       {id: 123, nome: "Camiseta", cor: "preto", tamanho: "G", categoria: "Vestuário"},
                //       {id: 456, nome: "Tênis", cor: "branco", tamanho: "41", categoria: "Vestuário"}
                //     ]
                //   }