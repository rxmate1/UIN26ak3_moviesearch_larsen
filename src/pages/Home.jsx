import { useEffect, useState } from "react"
import History from "../components/History"
import MovieList from "../components/MovieList"
import "../styles/home.css"

export default function Home(){

    const [search, setSearch] = useState("")

    
    const [movies, setMovies] = useState([])
    const [focused, setFocused] = useState(false)

    const storedHistory = localStorage.getItem("search")


    const [history, setHistory] = useState( storedHistory ? JSON.parse(storedHistory) : [] )

    const apiKey = import.meta.env.VITE_APP_API_KEY

    useEffect(()=>{ localStorage.setItem("search", JSON.stringify(history)) },[history])

    useEffect(()=>{
        getMovies("james bond")
    },[])

    const getMovies = async (query)=>{

        try{ const response = await fetch(`https://www.omdbapi.com/?s=${query}&type=movie&apikey=${apiKey}`)

            const data = await response.json()

            if(data.Search){ setMovies(data.Search)}

        } catch(err){console.error(err)}
    }

    const handleChange = (e)=>{setSearch(e.target.value)
    if(e.target.value.length >= 3){
            getMovies(e.target.value)}
    }

    const handleSubmit = (e)=>{
        e.preventDefault() 
        if(search.length < 3) return


        setHistory((prev)=> [...prev, search])
    }

    return (
        <main>

            <header> <h1>Movie Search</h1> </header>

            <form onSubmit={handleSubmit}>
                <label> Search movie
                    <input type="search" placeholder="Harry Potter" onChange={handleChange} onFocus={()=> setFocused(true)}
                    />
                </label>

                {focused
                    ? <History history={history} setSearch={setSearch}/> : null}
                <button type="submit">Search</button>
            </form>

            <MovieList movies={movies} />

        </main>
    )
}