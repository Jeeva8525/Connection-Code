import { useState } from 'react'
import './Home.css'
export default function Home({books, setBooks, isAdmin}){

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

    function handleChangeAvailability(bid){
        setBooks(
            books.map((b)=>{
                if(b.id === bid){
                    return {...b, isAvailable: !b.isAvailable}
                }
                return b
            })
        )
    }

    return (
        <div className='home-container'>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder='Search Book'
                    onInput={(event)=>handleSearchFilter(event.target.value)}
                />
            </div>

            {
                filteredBooks.map((b) => {

                    let clsName = "book"
                    if (!b.isAvailable){
                        clsName ="book not-available" 
                    }
                    return (
                        <div className={clsName} key={b.id}>
                            <p>Title : {b.name}</p> 

                            {b.isIssued && b.isAvailable &&
                                <>
                                    <p> Status : Issued</p>

                                    <button onClick={()=>handleReturnBook(b.id)}>Return book</button>
                                </>
                             }
                            {(!b.isIssued || !b.isAvailable ) && 
                                <>
                                    {
                                        b.isAvailable &&
                                        <>
                                            <p> Status : Available</p>
                                            <button onClick={()=>handleIssueBook(b.id)}>Issue Book</button> 
                                        </>
                                    }
                                    {
                                        !b.isAvailable &&
                                        <>
                                            <p> Status : Out of Stock</p>
                                            <button onClick={()=>handleIssueBook(b.id)} disabled>Issue Book</button> 
                                        </>
                                    }
                                </>
                            }
                            {isAdmin &&
                                <>
                                    <button onClick={()=>handleChangeAvailability(b.id)}>Change Availability</button>

                                </>
                            }
                        </div>
                    )
                })
            }


        </div>
    )
} 