<<<<<CSS GRID>>>>>
<<<GRID>>>
Bimensional
Divisão de toda a página em linhas e colunas
Colocar elementos onde quiser nessa divisão

<<<GRID OU FLEXBOX>>>
Grid: Duas dimensões (colunas e linhas)
Flexbox: Uma dimensão (ou coluna ou linha)
Um complementa o trabalho do outro
Verificar quais navegadores ainda não estão aceitando o Grid

<<<PROPRIEDADES>>>
Vamos separar em 2 grupos: container e item(s)

CONTAINER
display: grid; (iniciar o container com grid)
grid-template-columns; (vai dizer quantas COLUNAS o grid possui)
grid-template-rows; (vai dizer quantas LINHAS o grid possui)
grid-gap >>> (espaçamentos)
    grid-row-gap (espaçamento na nossa linha)
    grid-column-gap (espaçamento na nossa coluna)
grid-template-areas; (delimita áreas)
... e mais 4 propriedades e alinhamento!


ITEM(s)
grid-column (aonde fica na coluna)
    grid-column-start
    grid-column-end
grid-row (aonde fica na linha)
    grid-row-start
    grid-row-end
grid-area (aonde fica na área)
... e mais 2 propriedades de alinhamento!

