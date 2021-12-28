import Block from './block.js'

export default class BlockGrid {
    // constructor(element, totalBlocks){
    //     this.block = []
    //     this.element = element;
    //     this.totalBlocks = totalBlocks;
    //     this.buildGrid(this.element, this.totalBlocks);
    // }

    // buildGrid(element, totalBlocks){
    //     for(var i = 0; i < totalBlocks; i++){
    //         let grid = document.createElement('span');
    //         grid.setAttribute('id',`block-${i}`)
    //         // grid.setAttribute('id',`block-1`)
    //         grid.classList.add('block');
    //         this.block[i] = new Block(grid,i);
    //         element.appendChild(grid);
    //     }
    // }

    constructor(element, matrix){
        this.blocks = matrix.map(row => row.map(() => 0));
        this.element = element;
        this.start(matrix)
    }
    
    
    start(matrix){
        this.buildGrid(this.element, matrix);
    }

    getFlattenBlocks(){
        return this.blocks.flat();
    }

    hasNoChild(){
        return this.element.children.length == 0;
    }

    buildGrid(element, matrix){
        for(let i=0;i<matrix.length;i++){
            for(let j=0;j<matrix[i].length;j++){
                if(matrix[i][j] !=0){
                    let grid = document.createElement('span');
                    grid.setAttribute('id',`block-${i}-${j}`)
                    grid.classList.add('block');
                    grid.style.width=`${100/matrix[i].length}%`
                    element.appendChild(grid);
                    this.blocks[i][j] = new Block(grid,i,j, 100/matrix[i].length);

                }
                else {
                    this.blocks[i][j] = null;
                }
            }
        }
    }

}
