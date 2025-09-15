import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Clock, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { animeDatabase } from "@/data/animeDatabase";

const watchingAnime = [
  {
    id: 1,
    title: "Attack on Titan",
    episode: "S4E15",
    progress: 75,
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    totalEpisodes: 20
  },
  {
    id: 2,
    title: "Demon Slayer",
    episode: "S2E8",
    progress: 40,
    image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    totalEpisodes: 12
  },
  {
    id: 5,
    title: "Jujutsu Kaisen",
    episode: "S1E12",
    progress: 90,
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    totalEpisodes: 24
  }
];

// Use actual anime data from database for favorites
const favoriteAnime = animeDatabase.slice(2, 8).map(anime => ({
  id: anime.id,
  title: anime.title,
  genre: anime.genre.join(", "),
  rating: anime.rating.toString(),
  image: anime.image
}));
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-anime-gradient bg-clip-text text-transparent">
            Welcome Back!
          </h1>
          <p className="text-muted-foreground">
            Continue watching your favorite anime or discover something new
          </p>
        </div>

        {/* Continue Watching */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Continue Watching</h2>
            <Link to="/search">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Plus className="mr-2 h-4 w-4" />
                Add to Watchlist
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {watchingAnime.map((anime) => (
              <Link key={anime.id} to={`/anime/${anime.id}`}>
                <Card className="group cursor-pointer hover:shadow-anime-glow transition-all duration-300 hover:scale-105 border-muted hover:border-primary">
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={anime.image}
                        alt={anime.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <Button size="sm" className="bg-anime-gradient hover:shadow-anime-glow">
                          <Play className="mr-2 h-3 w-3" />
                          Continue
                        </Button>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                        <div 
                          className="h-full bg-anime-gradient" 
                          style={{ width: `${anime.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {anime.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{anime.episode}</span>
                        <span>{anime.progress}% complete</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* My Favorites */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">My Favorites</h2>
            <Link to="/browse">
              <Button variant="ghost" className="text-secondary hover:text-secondary-foreground hover:bg-secondary">
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {favoriteAnime.map((anime) => (
              <Link key={anime.id} to={`/anime/${anime.id}`}>
                <Card className="group cursor-pointer hover:shadow-anime-glow transition-all duration-300 hover:scale-105 border-muted hover:border-accent">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                      <img
                        src={anime.image}
                        alt={anime.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <div className="bg-red-500 p-1 rounded-full">
                          <Heart className="w-3 h-3 text-white fill-current" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <Badge variant="secondary" className="text-xs">
                          ★ {anime.rating}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-sm mb-1 line-clamp-1 group-hover:text-accent transition-colors">
                        {anime.title}
                      </h3>
                      <p className="text-muted-foreground text-xs">{anime.genre}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Your Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-muted">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">127</div>
                <div className="text-sm text-muted-foreground">Episodes Watched</div>
              </CardContent>
            </Card>

            <Card className="border-muted">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">42h</div>
                <div className="text-sm text-muted-foreground">Watch Time</div>
              </CardContent>
            </Card>

            <Card className="border-muted">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">18</div>
                <div className="text-sm text-muted-foreground">Favorites</div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;