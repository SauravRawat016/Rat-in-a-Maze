

function getallpath(i,j,rows,cols,matrix) {
  if (i >= rows || j >= cols || i < 0 || j < 0 || matrix[i][j] === 1) {
    return 0 ;
  }
 
  if (i === rows - 1 && j === cols - 1) {
    return 1;
  }
 
  matrix[i][j] = 1;
  let ans = 0 ;
  ans+=getallpath(i-1,j,rows,cols,matrix);
  ans+=getallpath(i+1,j,rows,cols,matrix);
  ans+=getallpath(i,j-1,rows,cols,matrix);
  ans+=getallpath(i,j+1,rows,cols,matrix);
 
  matrix[i][j] = 0;
 
  return ans;
}


// Function to create the grid of buttons

function createGrid() {
    let rows = parseInt(document.getElementById('rows').value);
    let cols = parseInt(document.getElementById('cols').value);
    let res = document.getElementById('res');
    let matrix = [] ;
    res.innerHTML = '' ;
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = ''; 
    if(rows*cols>30 || rows>6 || cols>6) {
      res.innerHTML='Give lesser value for row or column';
      return ;
    }
    
    

    for (let i = 0; i < rows; i++) {
      const row = [];
      const rowDiv = document.createElement('div');

      for (let j = 0; j < cols; j++) {
        const button = document.createElement('button');
        button.textContent = `${j},${i}`;
        button.addEventListener('click', function() {
          if(matrix[i][j]==1)matrix[i][j] = 0 ; 
          else matrix[i][j] = 1 ;
          let paths = getallpath(0,0,rows,cols,matrix);
          console.log("Pressed",i,j,"Paths = ",paths);
          res.innerHTML=`Number of Possible Paths are : ${paths}`;
          this.classList.toggle('clicked');
        });
        console.log(i,j);
        row.push(0);
        rowDiv.appendChild(button);

      }
      matrix.push(row);
      gridContainer.appendChild(rowDiv);

    }

    const paths = getallpath(0,0,rows,cols,matrix);
    res.innerHTML=`Number of Possible Paths are : ${paths}`;
  }
  
