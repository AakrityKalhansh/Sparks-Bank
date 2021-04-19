// ***TRANSFER AMOUNT VALUE ---> ADD TO LOCAL STORAGE***

let transferButton = document.getElementById("transferBtn");
transferButton.addEventListener("click", () => {
  let addAmount = document.getElementById("addAmount");
  let money = localStorage.getItem("money");
  if (money == null) {
    moneyObj = []; //Creating ArrayObj
  } else {
    moneyObj = JSON.parse(money);
  }

  moneyObj.push(addAmount.value);
  localStorage.setItem("money", JSON.stringify(moneyObj));
  addAmount.value = "";
  showAmount();
});

// ***TRANSFER AMOUNT VALUE ---> ADD TO LOCAL STORAGE --> THEN UPDATED TO WEBSITE (SHOW ON WEBSITE) ***

const showAmount = () => {
  let money = localStorage.getItem("money");
  if (money == null) {
    moneyObj = []; //Creating ArrayObj
  } else {
    moneyObj = JSON.parse(money);
  }

  let html = "";
  moneyObj.forEach((element, index) => {
    html += ` <div class="noteCard">
  
              <tr>
                <th scope="row"> ${index + 1} </th>
                  <td><button type="button" class="btn btn-dark">
                    ${element}<span class="badge">Rs</span>
                      </button></td>
                  <td><button id="${index}" class="btn btn-success fa">&#xf00c</button></td>
                  <td><button id="${index}" onclick="deleteHistory(this.id)" class="btn btn-danger  fa">&#xf12d</button></td>
              </tr>
     
                    
             </div>   `;
  });

  let notesElm = document.getElementById("transationAmountSection");
  if (moneyObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No Transation.`;
  }
};

// ***TRANSFER AMOUNT VALUE ---> DELETE FROM LOCAL STORAGE --> UPDATE WEBSITE***

const deleteHistory = (index) => {
  let money = localStorage.getItem("money");
  if (money == null) {
    moneyObj = []; //Creating Array
  } else {
    moneyObj = JSON.parse(money);
  }
  moneyObj.splice(index, 1);
  localStorage.setItem("money", JSON.stringify(moneyObj));
  showAmount();
};

showAmount();
