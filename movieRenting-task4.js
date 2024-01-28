//class for movies
class Movie {
    constructor(title, genre, releaseYear, rating, description) {
      this.title = title;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.rating = rating;
      this.description = description;
    }
  
    getDetails() {
      return `${this.title} (${this.releaseYear}) - ${this.genre}  - description: ${this.description}`;
    }
  }
  
  //class for the users
  class User {
    constructor(username, email) {
      this.username = username;
      this.email = email;
      this.rentedMovies = [];
      this.watchlist = [];
    }
  //method to rent movies
    rentMovie(movie) {
      // Rent favorite movie
      this.rentedMovies.push(movie);
      console.log(`${this.username} rented: ${movie.title}`);
    }
  //method to add to watchlist
    addToWatchlist(movie) {
      // Add the movie to the user's watchlist
      this.watchlist.push(movie);
      console.log(`${this.username} added ${movie.title} to their watchlist.`);
    }
  }
  
  
  // The movie instances
  const movie1 = new Movie("The start", "Sci-Fi", 2010, 4.8, 
                           "Dr. Elena Hayes discovers an ancient artifact, unlocking the power to shape a lifeless...");
  
  const movie2 = new Movie("Toluene's Redemption", "Drama", 1994, 4.9, 
                           "Follow the remarkable journey of a resilient boy who, against all odds, becomes the envy of many by the age of 29.");
  
  // User instances
  const user1 = new User("Tolueen", "tolu@maximum.com");
  const user2 = new User("Graced", "girlly_grace@gmail.com");
  
  // Rent movies and add to watchlist
  user1.rentMovie(movie1);
  user1.addToWatchlist(movie2);
  
  user2.rentMovie(movie2);
  user2.addToWatchlist(movie1);
  
  // Display user activities on app
  console.log("\nUser Activities:");
  console.log("------------------------------------------");
  console.log(user1.username + "'s Rented Movies:");
  for (let i = 0; i < user1.rentedMovies.length; i++) {
    console.log(user1.rentedMovies[i].title);
      console.log(user1.rentedMovies[i].description);
      
  }
  console.log("******************************************");
  
  console.log(user2.username + "'s Watchlist:");
  for (let i = 0; i < user2.watchlist.length; i++) {
    console.log(user2.watchlist[i].title);
      console.log(user2.watchlist[i].description);
  }