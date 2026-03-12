import { useState } from 'react'
import './Home.css'
export default function Home({books, setBooks}){

    const [searchItem, setSearchItem] = useState('');

    function handleIssueBook(bid){
        setBooks(
            books.map((b) => {
                if(b.id === bid && b.isIssued===false)
                {
                    return {...b ,isIssued : true}
                }
                return b
            })
        )
    }

    let filteredBooks;
    if( searchItem !== ""){
        filteredBooks = books.filter((b) => {
            if(b.name.toLowerCase().includes(searchItem.toLowerCase())){
                return true;
            }
        })
    }
    else{
        filteredBooks=books;
    }

    function handleReturnBook(bid){
        setBooks(
            books.map((b) => {
                if(b.id === bid && b.isIssued===true)
                {
                    return {...b ,isIssued : false}
                }
                return b
            })
        )
    }

    function handleSearchFilter(name){
        setSearchItem(name);
    }

    return (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder='Search Book'
                    onInput={(event)=>handleSearchFilter(event.target.value)}
                />
            </div>

            {
                filteredBooks.map((b) => {
                    return (
                        <div className="book" key={b.id}>
                            <p>Title : {b.name}</p> 

                            {b.isIssued &&
                                <>
                                    <p> Status : Issued</p>
                                    <button onClick={()=>handleReturnBook(b.id)}>Return book</button>
                                </>
                             }
                            {!b.isIssued && 
                                <>
                                    <p> Status : Available</p>
                                    <button onClick={()=>handleIssueBook(b.id)}>Issue Book</button> 
                                </>
                            }

                        </div>
                    )
                })
            }
        </>
    )
} 