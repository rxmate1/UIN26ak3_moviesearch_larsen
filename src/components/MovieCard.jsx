import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {

    const slug = movie.Title.toLowerCase().replaceAll(" ", "-")

    return (
        <article>
            <Link to={`/${slug}`}>
                <figure>
                    {movie.Poster !== "N/A"
                        ? <img src={movie.Poster} alt={movie.Title}/>
                        : <p>No poster available</p>}

                    <figcaption> <h3>{movie.Title}</h3> <p>{movie.Year}</p></figcaption>
                </figure>
            </Link>
        </article>
    )
}