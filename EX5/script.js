const container = document.getElementById('container');

let count = 1;

function addfunction() {

  const newBtn = document.createElement('button');
  

  newBtn.innerHTML = `CLICK ME (${count})`;
  newBtn.className = 'btn btn-outline-danger m-1'; 
  newBtn.id = 'btn_' + count;
  
  newBtn.addEventListener('click', function(e) {
    e.target.innerHTML = e.target.id + " CLICKED !";
    console.log("onclick1");
  });


  newBtn.addEventListener('dblclick', function(e) {
    e.target.innerHTML = "CLICKED (" + e.target.id.replace("btn_", "") + ")";
    console.log("onclick2");
  });


  container.appendChild(newBtn);
  
  count++;
}


function delfunction() {

  const lastElement = container.lastElementChild;
  
  if (lastElement) {
    container.removeChild(lastElement);
    count--;
    console.log("Deleted button, current count: " + count);
  } else {
    alert("目前沒有按鈕可以刪除！");
  }
}
