
const but = document.querySelector(".addbookbutton");
const form = document.querySelector(".form");
const submit = document.querySelector(".submit");
const library = document.querySelector(".books");
const single_book = document.querySelector(".book");
var library_new = document.querySelectorAll(".book");

test();
function test()
{
    but.addEventListener('click', Openform);
}

function Openform()
{
    form.classList.remove('hide');
}
submit.addEventListener('click', ()=>{
    formfill();
});


function formfill()
{
    const bookname = document.querySelector("#bookname");
    const authorname = document.querySelector("#authorname");
    const pages = document.querySelector("#page");
    const check = document.querySelector("#check");
    new_book_add(bookname.value, authorname.value, pages.value, check.checked);

    form.classList.add('hide');
}


function book_data(name, author, page, check){
    this.name = name;
    this.author = author;
    this.page = page;
    this.check = check;
}
book_data.prototype.show_book = function() {
    let new_book = single_book.cloneNode(true);
    new_book.childNodes[1].childNodes[3].childNodes[1].textContent = this.name;
    new_book.childNodes[1].childNodes[3].childNodes[3].textContent = this.author;
    new_book.childNodes[1].childNodes[3].childNodes[5].textContent = this.page;
    new_book.childNodes[3].checked = this.check;
    if (this.check)
    {
        new_book.childNodes[3].value = "Reading"
        new_book.childNodes[3].style.background = "green";
    }
    else
    {
        new_book.childNodes[3].value = "Not Reading";
        new_book.childNodes[3].style.background = "red";
    }
    console.log(new_book.childNodes[3].value);
    new_book.style.display = "";
    library.appendChild(new_book);
    library_new = document.querySelectorAll(".book");
    remove_book();
    read_book();
}

function new_book_add(name, author, page, check)
{
    const book1 = new book_data(name, author, page, check);
    book1.show_book();
}

function remove_book()
{
    library_new.forEach((book)=>{
        book.childNodes[5].onclick = function(){
            library.removeChild(book);
        }
    })
}

function read_book()
{
    library_new.forEach((book)=>{
        book.childNodes[3].onclick = function(){
            if ((book.childNodes[3]).value == "Reading")
            {
                (book.childNodes[3]).style.background = "red";
                (book.childNodes[3]).value= "Not Reading";
            }
            else
            {
                (book.childNodes[3]).style.background = "green";
                (book.childNodes[3]).value= "Reading";
            }
            
        }
    })
}
