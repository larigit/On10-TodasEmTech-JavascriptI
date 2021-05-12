let book = {
    title: '',
    author: '',
    isbn: '',
    publishDate: '',
    pages: '',
    dateInput: '',
    timeInput:''
};

let list = 1;

function showAllBooks(event){

    event.preventDefault();
    let list = 1;

    if(document.getElementById('title').value===''){
        alert(`O campo Título é obrigatório, por favor, preencher!`)
        list = 0;
    }else{
        book.title = document.getElementById('title').value;
    }

    if(document.getElementById('author').value===''){
        alert(`O campo Autor é obrigatório, por favor, preencher!`)
        list = 0;
    }else{
        book.author = document.getElementById('author').value;
    }

    if(document.getElementById('isbn').value===''){
        alert(`O campo ISBN é obrigatório, por favor, preencher!`)
        list = 0;
    }else{
        book.isbn = document.getElementById('isbn').value;
    }

    if(document.getElementById('publishDate').value===''){
        alert(`O campo Data de Publicação é obrigatório, por favor, preencher!`)
        list = 0;
    }else{
        book.publishDate = document.getElementById('publishDate').value;
    }
    book.pages = document.getElementById('pages').value;
    book.dateInput = new Date().toLocaleDateString('pt-br');
    book.timeInput = new Date().toLocaleTimeString('pt-br');

    if(list===1){
        let tableRef = document.getElementById('table');
        let newRow = tableRef.insertRow(-1);

        let newCell = newRow.insertCell(0);
        let newText = document.createTextNode(book.title);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(1);
        newText = document.createTextNode(book.author);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(2);
        newText = document.createTextNode(book.isbn);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(3);
        newText = document.createTextNode(book.publishDate);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(4);
        newText = document.createTextNode(book.pages);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(5);
        newText = document.createTextNode(`${book.dateInput}, ${book.timeInput}`);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(6);
        newCell.innerHTML = '<img src="./img/removeIcon.png" class="remove">';
    }
    clear();
}


function clear(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
    document.getElementById('publishDate').value = "";
    document.getElementById('pages').value = "";
}

document.getElementById('answer').addEventListener('click', (event) => {
    if(event.target.className === 'remove'){
        event.target.parentElement.parentElement.remove();
    }
});