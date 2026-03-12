import './Home.css'
export default function Home({books, setBooks}){

    return (
        <>
            {
                books.map((b) => {
                    return (
                        <div className="book">
                            <p>Title : {b.name}</p>
                            {b.isIssued &&
                                <>
                                    <p> Status : Issued</p>
                                    <button>Return book</button>
                                </>
                             }
                            {!b.isIssued && 
                                <>
                                    <p> Status : Available</p>
                                    <button>Issue Book</button> 
                                </>
                            }

                        </div>
                    )
                })
            }
        </>
    )
} 