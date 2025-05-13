const movies = [
  {
    title: "The Avengers",
    description: "Earth's mightiest heroes come together to battle Loki and his alien army.",
    poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    releaseDate: "2012-05-04",
    rating: 8.0,
    genre: "Action, Adventure, Sci-Fi",
    duration: "143 min"
  },
  {
    title: "Inception",
    description: "A thief with the ability to enter dreams must pull off the ultimate heist.",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    releaseDate: "2010-07-16",
    rating: 8.8,
    genre: "Action, Adventure, Sci-Fi",
    duration: "148 min"
  },
  {
    title: "The Dark Knight",
    description: "Batman faces the Joker in a battle for Gotham's soul.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    releaseDate: "2008-07-18",
    rating: 9.0,
    genre: "Action, Crime, Drama",
    duration: "152 min"
  },
  {
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole to find a new home for humanity.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    releaseDate: "2014-11-07",
    rating: 8.6,
    genre: "Adventure, Drama, Sci-Fi",
    duration: "169 min"
  },
  {
    title: "Spider-Man: No Way Home",
    description: "Peter Parker faces multiversal threats with help from unexpected allies.",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    releaseDate: "2021-12-17",
    rating: 8.3,
    genre: "Action, Adventure, Sci-Fi",
    duration: "148 min"
  },
  {
    title: "The Matrix",
    description: "A hacker discovers a simulated reality and joins a rebellion to fight it.",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    releaseDate: "1999-03-31",
    rating: 8.7,
    genre: "Action, Sci-Fi",
    duration: "136 min"
  },
  {
    title: "Star Wars: Episode IV – A New Hope",
    description: "A young farm boy joins a rebellion to defeat an evil empire.",
    poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    releaseDate: "1977-05-25",
    rating: 8.6,
    genre: "Action, Adventure, Fantasy",
    duration: "121 min"
  },
  {
    title: "The Shawshank Redemption",
    description: "A banker wrongly imprisoned for murder finds hope and friendship in prison.",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    releaseDate: "1994-09-23",
    rating: 9.3,
    genre: "Drama",
    duration: "142 min"
  },
  {
    title: "Pulp Fiction",
    description: "Interwoven stories of crime and redemption unfold in Los Angeles.",
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    releaseDate: "1994-10-14",
    rating: 8.9,
    genre: "Crime, Drama",
    duration: "154 min"
  },
  {
    title: "Fight Club",
    description: "An insomniac forms an underground fight club that spirals out of control.",
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    releaseDate: "1999-10-15",
    rating: 8.8,
    genre: "Drama",
    duration: "139 min"
  },
  {
    title: "Forrest Gump",
    description: "A man with a low IQ experiences extraordinary events in American history.",
    poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    releaseDate: "1994-07-06",
    rating: 8.8,
    genre: "Drama, Romance",
    duration: "142 min"
  },
  {
    title: "The Godfather",
    description: "A mafia patriarch passes power to his reluctant son in a world of crime.",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    releaseDate: "1972-03-24",
    rating: 9.2,
    genre: "Crime, Drama",
    duration: "175 min"
  }
];

function displayMovies() {
  const movieContainer = document.getElementById('movie-container');
  movieContainer.innerHTML = '';

  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'">
      <h3>${movie.title}</h3>
      <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
      <p><strong>Rating:</strong> ${movie.rating}</p>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p><strong>Duration:</strong> ${movie.duration}</p>
      <p>${movie.description}</p>
    `;
    movieContainer.appendChild(movieCard);
  });
}

document.addEventListener('DOMContentLoaded', displayMovies);
