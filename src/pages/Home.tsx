import { Link } from "react-router-dom";
import { Play, Search, Grid, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/anime-hero.jpg";
import { animeDatabase } from "@/data/animeDatabase";

// Use actual anime data from database for featured
const featuredAnime = animeDatabase.slice(0, 4).map(anime => ({
  id: anime.id,
  title: anime.title,
  genre: anime.genre.join(", "),
  rating: anime.rating.toString(),
  image: anime.image
}));

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-anime-gradient bg-clip-text text-transparent shadow-anime-text">
            Discover Amazing Anime
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stream thousands of anime episodes and movies. From classic series to the latest releases.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-anime-gradient hover:shadow-anime-glow transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Start Watching
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Grid className="mr-2 h-5 w-5" />
                Browse Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Anime Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Anime</h2>
          <Link to="/browse">
            <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAnime.map((anime) => (
            <Link key={anime.id} to={`/anime/${anime.id}`}>
              <Card className="group cursor-pointer hover:shadow-anime-glow transition-all duration-300 hover:scale-105 border-muted hover:border-primary">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                    <img
                      src={anime.image}
                      alt={anime.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex items-center justify-between">
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-semibold">
                          ★ {anime.rating}
                        </span>
                        <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
                          <Play className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {anime.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{anime.genre}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What would you like to do?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/search" className="group">
              <Card className="h-full hover:shadow-anime-glow transition-all duration-300 hover:scale-105 border-muted hover:border-secondary">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-anime-text transition-all duration-300">
                    <Search className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                    Search Anime
                  </h3>
                  <p className="text-muted-foreground">
                    Find your favorite anime by title, genre, or studio
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/dashboard" className="group">
              <Card className="h-full hover:shadow-anime-glow transition-all duration-300 hover:scale-105 border-muted hover:border-primary">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-anime-text transition-all duration-300">
                    <Grid className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    My Dashboard
                  </h3>
                  <p className="text-muted-foreground">
                    Access your watchlist and continue watching
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/browse" className="group">
              <Card className="h-full hover:shadow-anime-glow transition-all duration-300 hover:scale-105 border-muted hover:border-accent">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-anime-text transition-all duration-300">
                    <Play className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    Browse Categories
                  </h3>
                  <p className="text-muted-foreground">
                    Explore anime by genres and categories
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;