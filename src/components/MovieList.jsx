import MovieCard from "./MovieCard"

export default function MovieList({ movies }) {

    return (
        <section>
            <h2>Movies</h2>

            {
                movies?.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))
            }

        </section>
    )
}