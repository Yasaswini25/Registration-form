let submitBtn = document.getElementById("submit");

const info = {
    first_name: '',
    last_name: '',
    gender: '',
    number: '',
    email: '',
    url: '',
    skillArr: [],
}

const getData = () => {
    info.first_name = document.getElementById('f_name').value;
    info.last_name = document.getElementById('l_name').value;
    info.gender = document.querySelector('input[name="male-female"]:checked').value;
    info.phn = document.getElementById('phn').value;
    info.email = document.getElementById('email').value;
    info.url = document.getElementById('url').value;
   
    
    let skills = document.querySelectorAll('.checkbox:checked');

    info.skillArr = [];
    skills.forEach((item) => {
        info.skillArr.push(item.value);
    })

    if (localStorage.getItem("infoSection") === null) {
        infoItem = [];
    }
    else {
        infoItem = JSON.parse(localStorage.getItem("infoSection"))
    }
    infoItem.push(info);
    localStorage.setItem("infoSection", JSON.stringify(infoItem));
}

const showData = () => {
    let cardContainer = document.getElementById("cardContainer");

    let cards = '';

    let getLocalStorage = localStorage.getItem("infoSection");

    if (getLocalStorage === null) {
        console.log("null");
    }
    else {
        cardDivArr = JSON.parse(getLocalStorage);

        cardDivArr.forEach((item, index) => {

            cards += `<div class="card" style="margin-bottom:1rem">
            <img src=${item.url} alt="Profile Picture">
            <div class="info">
                <p>First Name: ${item.first_name}</p>
                <p>Last Name: ${item.last_name}</p>
                <p>Gender: ${item.gender}</p>
                <p>Phone: ${item.phn}</p>
                <p>Email: ${item.email}</p>
                <p>Skills: ${item.skillArr.join(", ")}</p>
                <br>
                <button onclick="deleteData(${index})" style="background-color: red;
                color: white;
                outline: none;
                padding: 1rem;
                border: none;
                border-radius: 1rem;
                width: 99px;">Delete</button>
            </div>
        </div>`;
        })
    }
    cardContainer.innerHTML = cards;
}

const deleteData = (index) => {
    let getList = JSON.parse(localStorage.getItem("infoSection"));
    getList.splice(index, 1);

    localStorage.setItem("infoSection", JSON.stringify(getList));
    window.location.reload();
}

showData();

submitBtn.addEventListener(('click'), () => {
    getData();
    showData();
})
